import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import proj4 from 'proj4';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import KML from 'ol/format/KML';
import { Style, RegularShape } from 'ol/style';
import { panTo } from '@mapstore/framework/actions/map';
import { saveAs } from "file-saver";
import { setControlProperty } from '@mapstore/framework/actions/controls';
import { changeMapInfoState } from '@mapstore/framework/actions/mapInfo';
import assign from 'object-assign';
import ExifReader from 'exifreader'

// Codigo desenvolvido para o plugin
import './conversordecoordenada/style/conversordecoordenada.css';
import conversordecoordenada from '../reducers/conversordecoordenada';
import conversordecoordenadaEpics from '../epics/conversordecoordenada';
import { geraCapturaCoordenada, geraEscreveCoordenada, geraAlternaAtivacao } from "../actions/conversordecoordenada";
import MensagemDeErro from '../components/conversordecoordenada/MensagemDeErro';
import CamposDeCoordenada from '../components/conversordecoordenada/CamposDeCoordenada';
import TextoDeCoordenada from "../components/conversordecoordenada/TextoDeCoordenada";

// TODO
// Resolver o problema de formatacao float/string causado por parseFloat/toFixed

// Proj4 strings para os diferentes datums. Fonte: https://wiki.osgeo.org/wiki/Brazilian_Coordinate_Reference_Systems
const projecoes = {
    projsirgas: " +ellps=GRS80 +towgs84=0,0,0 +no_defs",
    projsad69: " +ellps=aust_SA +towgs84=-67.35,3.88,-38.22",
    projcorregoalegre: " +ellps=intl +towgs84=-205.57,168.77,-4.12",
    projsicad: " +ellps=intl +towgs84=-144.35,242.88,-33.22"
};

function validaCoordenada(coordenadas, notacao) {
    let aux = [false, false];
    switch (notacao) {
    case "gDecimal":
        if (coordenadas[0] < 180.0 && coordenadas[0] > -180.0) {
            aux[0] = true;
        }
        if (coordenadas[1] < 90.0 && coordenadas[1] > -90.0) {
            aux[1] = true;
        }
        break;
    case "gMinutoSegundo":
        if (coordenadas[0] < 180 && coordenadas[0] > -180 && coordenadas[1] < 60 && coordenadas[1] >= 0 && coordenadas[2] < 60.0 && coordenadas[2] >= 0) {
            aux[0] = true;
        }
        if (coordenadas[3] < 90 && coordenadas[3] > -90 && coordenadas[4] < 60 && coordenadas[4] >= 0 && coordenadas[5] < 60.0 && coordenadas[5] >= 0) {
            aux[1] = true;
        }
        break;
    case "gMinutoDecimal":
        if (coordenadas[0] < 180 && coordenadas[0] > -180 && coordenadas[1] < 60.0 && coordenadas[1] >= 0) {
            aux[0] = true;
        }
        if (coordenadas[2] < 90 && coordenadas[2] > -90 && coordenadas[3] < 60.0 && coordenadas[3] >= 0) {
            aux[1] = true;
        }
        break;
    case "utm":
        if (parseFloat(coordenadas[0]).toFixed().length <= 7) {
            aux[0] = true;
        }
        aux[1] = true;
        break;
    default:
        aux = [false, false];
        break;
    }
    return aux;
}

// Funcao que muda o formato de grau decimal para a notacao e datum escolhidos.
function formataCoordenada(x, y, notacao, datum) {
    let hx = (x >= 0) ? 'E' : 'W';
    let hy = (y >= 0) ? 'N' : 'S';

    if (notacao === "utm") {
        let zona = Math.ceil((x + 180) / 6);
        let utmString = "+proj=utm +units=m +zone=" + zona + projecoes[datum];
        if (hy === 'N') {
            utmString += ' +north';
        } else {
            utmString += ' +south';
        }
        let auxutm = proj4("EPSG:4326", utmString, [x, y]);
        auxutm[0] = auxutm[0].toFixed(1);
        auxutm[1] = auxutm[1].toFixed(1);
        auxutm.push(zona);
        auxutm.push(hy);
        return auxutm;
    }

    let longlatString = "+proj=longlat" + projecoes[datum];
    let [convx, convy] = proj4("EPSG:4326", longlatString, [x, y]);
    convx = convx.toFixed(6);
    convy = convy.toFixed(6);
    let auxx = Math.abs(convx);
    let xg = Math.trunc(auxx);
    let xmd = ((auxx - xg) * 60);
    let xm = Math.trunc(xmd);
    let xs = (xmd - xm) * 60;
    let auxy = Math.abs(convy);
    let yg = Math.trunc(auxy);
    let ymd = (auxy - yg) * 60;
    let ym = Math.trunc(ymd);
    let ys = (ymd - ym) * 60;
    xmd = xmd.toFixed(4);
    ymd = ymd.toFixed(4);
    xs = xs.toFixed(2);
    ys = ys.toFixed(2);

    if (hy === 'S') {
        yg = -yg;
    }
    if (hx === 'W') {
        xg = -xg;
    }

    switch (notacao) {
    case "gDecimal":
        return [convx, convy];
    case "gMinutoSegundo":
        return [xg, xm, xs, yg, ym, ys];
    case "gMinutoDecimal":
        return [xg, xmd, yg, ymd];
    default:
        return [0, 0];
    }
}

// funcao que pega a coordenada em alguma notacao e datum e converte de volta para grau decimal e o datum padrao para armazenar no estado.
function voltaCoordenada(coordenadas, notacao, datum) {
    let x;
    let y;
    let aux;
    let sinalx;
    let sinaly;
    let longlatString = "+proj=longlat" + projecoes[datum];
    let utmString = "+proj=utm +units=m +zone=";

    switch (notacao) {
    case "gDecimal":
        [x, y] = proj4(longlatString, "EPSG:4326", [parseFloat(coordenadas[0]), parseFloat(coordenadas[1])]);
        return [x.toFixed(6), y.toFixed(6)];
    case "gMinutoSegundo":
        aux = coordenadas.map((coordenada) => parseFloat(coordenada));
        sinalx = (aux[0] >= 0) ? 'L' : 'W';
        sinaly = (aux[3] >= 0) ? 'N' : 'S';
        x = Math.abs(aux[0]) + (aux[1] + aux[2] / 60.0) / 60.0;
        y = Math.abs(aux[3]) + (aux[4] + aux[5] / 60.0) / 60.0;
        x = (sinalx === 'W') ? -x : x;
        y = (sinaly === 'S') ? -y : y;
        [x, y] = proj4(longlatString, "EPSG:4326", [x, y]);
        return [x.toFixed(6), y.toFixed(6)];
    case "gMinutoDecimal":
        aux = coordenadas.map((coordenada) => parseFloat(coordenada));
        sinalx = (aux[0] >= 0) ? 'L' : 'W';
        sinaly = (aux[2] >= 0) ? 'N' : 'S';
        x = Math.abs(aux[0]) + aux[1] / 60.0;
        y = Math.abs(aux[2]) + aux[3] / 60.0;
        x = (sinalx === 'W') ? -x : x;
        y = (sinaly === 'S') ? -y : y;
        [x, y] = proj4(longlatString, "EPSG:4326", [x, y]);
        return [x.toFixed(6), y.toFixed(6)];
    case "utm":
        utmString += Math.trunc(coordenadas[2]);
        utmString += projecoes[datum];
        if (coordenadas[3] === 'N') {
            utmString += ' +north';
        } else {
            utmString += ' +south';
        }
        [x, y] = proj4(utmString, "EPSG:4326", [parseFloat(coordenadas[0]), parseFloat(coordenadas[1])]);
        return [x.toFixed(6), y.toFixed(6)];
    default:
        return [0, 0];
    }
}

// Componente com a logica e os formularios
const FormularioDeCoordenada = (props) => {
    const [notacao, setNotacao] = useState("gDecimal");
    const [coordenadas, setCoordenadas] = useState([0, 0]);
    const [datum, setDatum] = useState("projsirgas");
    const [erroUploadKml, setErroUploadKml] = useState([false, "Erro"]);
    const [erroUploadJpeg, setErroUploadJpeg] = useState([false, "Erro"]);

    useEffect(() => {
        setCoordenadas(formataCoordenada(parseFloat(props.x), parseFloat(props.y), notacao, datum));
    }, [props.x, props.y]);

    const kmlUploadInput = useRef(null);
    const jpegUploadInput = useRef(null);


    // conjunto de funcoes que cuidam do upload e leitura de kml
    const limpaFeature = (feature) => { // 4 - limpa as informacoes retiradas do arquivo
        let styleParams = {image: new RegularShape({})};
        feature.setStyle(new Style(styleParams));
    };
    const mostraInformacaoDoKml = (evt) => { // 3 - lida com as informacoes lidas do arquivo
        let fileContent = evt.target.result;
        let OlLeitor = new KML();
        let featuresFile = OlLeitor.readFeatures(fileContent, {
            dataProjection: 'EPSG:4326'
        });
        if (!((featuresFile.length === 1) && (featuresFile[0].getGeometry() instanceof Point))) {
            setErroUploadKml([true, 'Falha ao carregar arquivo. O arquivo deve ser no formato KML e conter um unico ponto.']);
        } else {
            limpaFeature(featuresFile[0]);
            let aux1 = featuresFile[0].getGeometry().getCoordinates();
            let aux2 = validaCoordenada([aux1[0], aux1[1]], "gDecimal");
            if (aux2[0] && aux2[1]) {
                props.mudaEstadoCoordenada(aux1[0], aux1[1]);
                props.vaiProPonto([aux1[0], aux1[1]]);
            }
        }
    };
    const criaLeitorDeKml = (files, onReadEnd, onReadError) => { // 2 - cria o leitor de arquivos e inicia leitura
        let filetype = /application\/vnd\.google-earth\.kml\+xml/;
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            return -1;
        }
        if (files === undefined || files.length === 0) {
            return -2;
        }
        if (files.length > 1) {
            return -3;
        }
        if (files[0].type !== '' && !filetype.test(files[0].type)) {
            return -4;
        }
        let reader = new FileReader();
        reader.onload = onReadEnd;
        reader.onerror = onReadError;
        reader.readAsText(files[0]);
        return 0;
    };
    const lerArquivoKml = (files) => { // 1 - gera a leitura do arquivo e cuida de erros
        let codigoDoLeitor = criaLeitorDeKml(files, mostraInformacaoDoKml, (event) => {
            setErroUploadKml([true, 'Falha ao ler o arquivo. Ocorreu um erro ao ler o arquivo. Codigo de erro: ' + event.target.error.code]);
        });
        if (codigoDoLeitor === -1) {
            setErroUploadKml([true, 'Falha ao ler arquivo. O seu browser nao é compativel com leitura de arquivos.']);
        } else if (codigoDoLeitor === -2) {
            setErroUploadKml([true, 'Falha ao ler arquivo. Arquivo corrompido ou inválido.']);
        } else if (codigoDoLeitor === -3) {
            setErroUploadKml([true, 'Falha ao ler arquivo. Envie somente 1 arquivo.']);
        } else if (codigoDoLeitor === -4) {
            setErroUploadKml([true, 'Falha ao ler arquivo. O arquivo deve ser no formato KML.']);
        }
        return codigoDoLeitor === 0;
    };


    // conjunto de funcoes que cuidam do upload e leitura de jpegs
    const mostraInformacaoDoJpeg = (tags) => { // 3 - lida com as informacoes lidas do arquivo
        let x;
        let y;
        if(tags['gps']){
            x = (tags['gps'].Longitude);
            y = (tags['gps'].Latitude);
            console.log(x,y);
            let aux = validaCoordenada([x, y], "gDecimal");
            if (aux[0] && aux[1]) {
                props.mudaEstadoCoordenada(x, y);
                props.vaiProPonto([x, y]);
            }
        } else {
            setErroUploadJpeg([true, 'A imagem não contém informações de localização']);
        }
    };
    // upload e leitura de jpeg
    const criaLeitorDeJpeg = (files, onReadEnd, onReadError) => { // 2 - cria o leitor de arquivos e inicia leitura
        if (!(window.File && window.FileReader && window.FileList && window.Blob)) {
            return -1;
        }
        if (files === undefined || files.length === 0) {
            return -2;
        }
        if (files.length > 1) {
            return -3;
        }
        if (files[0].type !== 'image/jpeg') {
            return -4;
        }
        ExifReader.load(files[0], {expanded: true})
        .then((tags) => {
            delete tags['MakerNote'];
            onReadEnd(tags);
        })
        .catch((error) => {
            onReadError(error)
        });
        return 0;
    };
    const lerArquivoJpeg = (files) => {
        let codigoDoLeitor = criaLeitorDeJpeg(files, mostraInformacaoDoJpeg, (error) => {
            setErroUploadJpeg([true, 'Falha ao ler o arquivo. Ocorreu um erro ao ler o arquivo. ' + error]);
        });
        if (codigoDoLeitor === -1) {
            setErroUploadJpeg([true, 'Falha ao ler arquivo. O seu browser nao é compativel com leitura de arquivos.']);
        } else if (codigoDoLeitor === -2) {
            setErroUploadJpeg([true, 'Falha ao ler arquivo. Arquivo corrompido ou inválido.']);
        } else if (codigoDoLeitor === -3) {
            setErroUploadJpeg([true, 'Falha ao ler arquivo. Envie somente 1 arquivo.']);
        } else if (codigoDoLeitor === -4) {
            setErroUploadJpeg([true, 'Falha ao ler arquivo. O arquivo deve ser no formato JPEG.']);
        }
        return codigoDoLeitor === 0;
    };


    const handleImportarJpeg = (event) => {
        if (lerArquivoJpeg(event.target.files)) {
            setErroUploadJpeg([false, "Erro"]);
        }
    };
    const handleImportarKml = (event) => {
        if (lerArquivoKml(event.target.files)) {
            setErroUploadKml([false, "Erro"]);
        }
    };
    const handleSubmit = (event) => { // centraliza no ponto
        event.preventDefault();
        props.vaiProPonto([props.x, props.y]);
    };
    const botaoSelecionar = (event) =>{ // seleciona ponto do mapa
        event.preventDefault();
        props.habilitaCapturaDePonto(true);
    };
    const botaoExportar = (event) => { // exporta o ponto como kml
        event.preventDefault();
        let ponto = new Feature({
            geometry: new Point([props.x, props.y])
        });
        let a = new KML();
        let kmlData = a.writeFeatures([ponto], {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:4326' // mudar para os datuns especificos
        });
        kmlData = kmlData.replace('</Placemark>', '</Placemark></Document>').replace('<Placemark>', '<Document><Placemark>');
        let blob = new Blob([kmlData], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, "ponto.kml");
    };
    const handleNotacao = (event) => {
        setNotacao(event.target.value);
        setCoordenadas(formataCoordenada(parseFloat(props.x), parseFloat(props.y), event.target.value, datum));
    };
    const handleDatum = (event) => {
        setDatum(event.target.value);
        setCoordenadas(formataCoordenada(parseFloat(props.x), parseFloat(props.y), notacao, event.target.value));
    };

    return (<form onSubmit={handleSubmit}>
        <table>
            <tbody>
                <TextoDeCoordenada formato={notacao} datum={datum} coordenadas={formataCoordenada(parseFloat(props.x), parseFloat(props.y), notacao, datum)}/>
                <CamposDeCoordenada formato={notacao} datum={datum} coordenadas={coordenadas} setCoordenadas={setCoordenadas} mudaEstadoGlobal={props.mudaEstadoCoordenada} valida={validaCoordenada} voltaCoordenada={voltaCoordenada}/>
                <tr>
                    <label>
                        Notação:
                        <select value={notacao} onChange={handleNotacao}>
                            <option value="gMinutoSegundo">Graus, minutos, segundos</option>
                            <option value="gDecimal">Graus decimais</option>
                            <option value="gMinutoDecimal">Graus, minutos decimais</option>
                            <option value="utm">UTM</option>
                        </select>
                    </label>

                    <label>
                        Datum:
                        <select value={datum} onChange={handleDatum}>
                            <option value="projsirgas">SIRGAS 2000 ou WGS84</option>
                            <option value="projsad69">SAD 69</option>
                            <option value="projcorregoalegre">Córrego Alegre</option>
                            <option value="projsicad">Astro Chuá ou SICAD (DF)</option>
                        </select>
                    </label>
                </tr>
                <tr>
                    <button type="button" className={(props.captura) ? "botao-ativado" : "botoes-do-plugin"} onClick={botaoSelecionar}>Selecionar do Mapa</button>

                    <button type="button" className="botoes-do-plugin" onClick={() => jpegUploadInput.current.click()}>Localizar .jpeg</button>
                    <input type="file" ref={jpegUploadInput} style={{display: 'none'}} onChange={handleImportarJpeg}/>

                    <button type="button" className="botoes-do-plugin" onClick={() => kmlUploadInput.current.click()}>Importar .kml</button>
                    <input type="file" ref={kmlUploadInput} style={{display: 'none'}} onChange={handleImportarKml}/>

                    <button type="button" className="botoes-do-plugin" onClick={botaoExportar}>Exportar .kml</button>
                    <button type="submit" className="botoes-do-plugin">Ir para o Ponto</button>
                </tr>
                <tr>
                    <MensagemDeErro mostraErro={erroUploadKml[0]} texto={erroUploadKml[1]}/>
                </tr>
                <tr>
                    <MensagemDeErro mostraErro={erroUploadJpeg[0]} texto={erroUploadJpeg[1]}/>
                </tr>
            </tbody>
        </table>
    </form>);
};

// Componente principal
class ConversorDeCoordenadaComponent extends React.Component {
    render() {
        return (this.props.enabled) ? (
            <div id="principal">
                <button className="fechar" type="button" onClick={() => this.props.escondeOuMostra()}> X </button>
                {(this.props.enabled) ? <FormularioDeCoordenada x={this.props.lon} y={this.props.lat} captura={this.props.captura} vaiProPonto={this.props.vaiProPonto} mudaEstadoCoordenada={this.props.mudaEstadoCoordenada} habilitaCapturaDePonto={this.props.habilitaCapturaDePonto} suprimeIdentificacaoDePonto={this.props.suprimeIdentificacaoDePonto} changeMapInfoState={this.props.changeMapInfoState}/> : null}
            </div>
        ) : null;
    }
}


// Conecta o componente principal com o estado geral da aplicação e pega as variaveis que serão necessárias.
const ConversorDeCoordenadaConectado = connect((state) =>{
    return {
        enabled: get(state, 'conversordecoordenada.enabled'),
        captura: get(state, 'conversordecoordenada.capturarcoordenada'),
        lat: get(state, 'conversordecoordenada.y'),
        lon: get(state, 'conversordecoordenada.x')
    };
},
{
    vaiProPonto: panTo,
    mudaEstadoCoordenada: geraEscreveCoordenada,
    habilitaCapturaDePonto: geraCapturaCoordenada,
    suprimeIdentificacaoDePonto: setControlProperty,
    changeMapInfoState: changeMapInfoState,
    escondeOuMostra: geraAlternaAtivacao
})(ConversorDeCoordenadaComponent);


// validacao de tipo dos props VER COMO FUNCIONA
ConversorDeCoordenadaComponent.propTypes = {
    enabled: PropTypes.bool,
    captura: PropTypes.bool,
    lat: PropTypes.string,
    lon: PropTypes.string,
    vaiProPonto: PropTypes.func, // centraliza no ponto
    escondeOuMostra: PropTypes.func,
    habilitaCapturaDePonto: PropTypes.func, // ativa a captura do ponto direto do mapa
    suprimeIdentificacaoDePonto: PropTypes.func, // desabilita o comportamento padrao de click no mapa
    changeMapInfoState: PropTypes.func,
    mudaEstadoCoordenada: PropTypes.func // estado do plugin
};

// Coloca o plugin na toolbar do mapa
export const ConversorDeCoordenadaPlugin = assign(ConversorDeCoordenadaConectado, {
    Toolbar: {
        name: "ConversorDeCoordenada",
        position: 8,
        tooltip: "Conversor de Coordenada",
        icon: <p>X Y</p>,
        // message: ? Coisa dos locales/traducao
        action: geraAlternaAtivacao,
        selector: (state) => ({ // Muda a cor do botao quando ativado
            bsStyle: state.conversordecoordenada && state.conversordecoordenada.enabled ? "success" : "primary",
            active: !!(state.conversordecoordenada && state.conversordecoordenada.enabled)
        })
    }
});
export const reducers = {conversordecoordenada};
export const epics = conversordecoordenadaEpics;
