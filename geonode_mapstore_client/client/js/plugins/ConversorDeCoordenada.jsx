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

import './conversordecoordenada/style/conversordecoordenada.css';
import conversordecoordenada from '../reducers/conversordecoordenada';
import conversordecoordenadaEpics from '../epics/conversordecoordenada';
import { geraCapturaCoordenada, geraEscreveCoordenada, geraAlternaAtivacao } from "../actions/conversordecoordenada";

// TODO
// Resolver o problema de formatacao float/string causado por parseFloat/toFixed

// REFATORACAO
// Refatorar os components na pasta components
// Diferenciar component de funcao usando arrow function?

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

// Componente de texto de erro // COMPONENT
const MostraErro = ({ mostraErro, texto }) => {
    if (mostraErro) {
        return (<>
            <tr>
                <p className="erro">{texto}</p>
            </tr>
        </>);
    }
    return null;
}

// Componente com os campos de coordenada, muda conforme o formato de coordenada muda. // COMPONENT
const CamposDeCoordenada = (props) => {
    const [mostraErro, setMostraErro] = useState([false, false]);
    const [validaAgora, setValidaAgora] = useState(false); // usado para validar o campo select imediatamente

    const validaEMuda = () =>{
        let valido = validaCoordenada(props.coordenadas, props.formato);
        if (valido[0] === true && valido[1] === true) {
            let aux = voltaCoordenada(props.coordenadas, props.formato, props.datum);
            props.mudaEstadoGlobal(aux[0], aux[1]);
            setMostraErro(false, false);
        } else {
            setMostraErro([!valido[0], !valido[1]]);
        }
    };

    useEffect(() => {
        setMostraErro([false, false]);
    }, [props.formato]);

    useEffect(() => {
        validaEMuda();
    }, [validaAgora]);


    switch (props.formato) {
    case "gDecimal":
        return (<>
            <tr>
                <label>
                    Lat:
                    <input
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> º
                </label>
            </tr>
            <MostraErro mostraErro={mostraErro[1]} texto="Latitude inválida."/>
            <tr>
                <label>
                    Lon:
                    <input
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> º
                </label>
            </tr>
            <MostraErro mostraErro={mostraErro[0]} texto="Longitude inválida."/></>);
    case "gMinutoSegundo":
        return (<>
            <tr>
                <label>
                    Lat:
                    <input
                        type="text"
                        value={props.coordenadas[3]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 3) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={3}
                    /> º
                    <input
                        type="text"
                        value={props.coordenadas[4]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 4) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={2}
                    /> '
                    <input
                        type="text"
                        value={props.coordenadas[5]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 5) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> "
                </label>
            </tr>
            <MostraErro mostraErro={mostraErro[1]} texto="Latitude inválida."/>
            <tr>
                <label>
                    Lon:
                    <input
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={4}
                    /> º
                    <input
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={2}
                    /> '
                    <input
                        type="text"
                        value={props.coordenadas[2]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 2) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> "
                </label>
            </tr>
            <MostraErro mostraErro={mostraErro[0]} texto="Longitude inválida."/></>);
    case "gMinutoDecimal":
        return (<>
            <tr>
                <label>
                    Lat:
                    <input
                        type="text"
                        value={props.coordenadas[2]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 2) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={3}
                    /> º
                    <input
                        type="text"
                        value={props.coordenadas[3]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 3) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> '
                </label>
            </tr>
            <MostraErro mostraErro={mostraErro[1]} texto="Latitude inválida."/>
            <tr>
                <label>
                    Lon:
                    <input
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={4}
                    /> º
                    <input
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> '
                </label>
            </tr>
            <MostraErro mostraErro={mostraErro[0]} texto="Longitude inválida."/></>);
    case "utm":
        return (<>
            <tr>
                <label>
                    Lat:
                    <input
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={9}
                    />
                </label>
            </tr>
            <MostraErro mostraErro={mostraErro[1]} texto="Latitude inválida."/>
            <tr>
                <label>
                    Lon:
                    <input
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={9}
                    />
                </label>
            </tr>
            <MostraErro mostraErro={mostraErro[0]} texto="Longitude inválida."/>
            <tr>
                <label>
                    Fuso:
                    <input
                        type="text"
                        value={props.coordenadas[2]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 2) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={2}
                    />
                    <select
                        value={props.coordenadas[3]}
                        onChange={event => {
                            props.setCoordenadas(props.coordenadas.map((a, i) => (i === 3) ? event.target.value : a));
                            setValidaAgora(!validaAgora);
                        }}>
                        <option value="N">N</option>
                        <option value="S">S</option>
                    </select>
                </label>
            </tr></>);
    default:
        return <p>erro</p>;
    }
}

// Componente com a logica e os formularios
const FormularioDeCoordenada = (props) => {
    const [notacao, setNotacao] = useState("gDecimal");
    const [coordenadas, setCoordenadas] = useState([0, 0]);
    const [datum, setDatum] = useState("projsirgas");
    const [erroUpload, setErroUpload] = useState([false, "Erro"]);

    useEffect(() => {
        setCoordenadas(formataCoordenada(parseFloat(props.x), parseFloat(props.y), notacao, datum));
    }, [props.x, props.y]);

    const uploadInput = useRef(null);


    // limpa as informacoes retiradas do arquivo
    const limpaFeature = (feature) => {
        let styleParams = {image: new RegularShape({})};
        feature.setStyle(new Style(styleParams));
    };
    // lida com as informacoes lidas do arquivo
    const mostraInformacaoDoArquivo = (evt) => {
        let fileContent = evt.target.result;
        let a = new KML();
        let featuresFile = a.readFeatures(fileContent, {
            dataProjection: 'EPSG:4326'
        });
        if (!((featuresFile.length === 1) && (featuresFile[0].getGeometry() instanceof Point))) {
            setErroUpload([true, 'Falha ao carregar arquivo. O arquivo deve ser no formato KML e conter um unico ponto.']);
        } else {
            limpaFeature(featuresFile[0]);
            let b = featuresFile[0].getGeometry().getCoordinates();
            let c = validaCoordenada([b[0], b[1]], "gDecimal");
            if (c[0] && c[1]) {
                props.mudaEstadoCoordenada(b[0], b[1]);
            }
            // this.changeMarkerPosition(this.markers.markerCoordinates, featuresFile[0].getGeometry().getCoordinates(), this.view.getProjection().getCode())
            // this.view.fit(featuresFile[0].getGeometry()) // center map view on the geometry that was uploaded
        }
    };
    // cria o leitor de arquivos e inicia leitura
    const criaLeitorDeArquivo = (files, onReadEnd, onReadError) => {
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
    // gera a leitura do arquivo e cuida de erros
    const lerArquivoKml = (files) => {
        let codigoDoLeitor = criaLeitorDeArquivo(files, mostraInformacaoDoArquivo, (event) => {
            setErroUpload([true, 'Falha ao ler o arquivo. Ocorreu um erro ao ler o arquivo. Codigo de erro: ' + event.target.error.code]);
        });
        if (codigoDoLeitor === -1) {
            setErroUpload([true, 'Falha ao ler arquivo. O seu browser nao é compativel com leitura de arquivos.']);
        } else if (codigoDoLeitor === -2) {
            setErroUpload([true, 'Falha ao ler arquivo. Arquivo corrompido ou inválido.']);
        } else if (codigoDoLeitor === -3) {
            setErroUpload([true, 'Falha ao ler arquivo. Envie somente 1 arquivo.']);
        } else if (codigoDoLeitor === -4) {
            setErroUpload([true, 'Falha ao ler arquivo. O arquivo deve ser no formato KML.']);
        }
        return codigoDoLeitor === 0;
    };

    const handleImportarKml = (event) => {
        if (lerArquivoKml(event.target.files)) {
            setErroUpload([false, "Erro"]);
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

    // organizar html com tables
    return (<form onSubmit={handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <p>Lat:{props.y} Lon:{props.x}</p>
                </tr>
                <tr>
                    <CamposDeCoordenada formato={notacao} datum={datum} coordenadas={coordenadas} setCoordenadas={setCoordenadas} mudaEstadoGlobal={props.mudaEstadoCoordenada}/>
                </tr>
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
                    <button type="button" style={(props.captura) ? ({backgroundColor: 'green', color: 'white'}) : null} onClick={botaoSelecionar}>Selecionar do Mapa</button>

                    <button type="button" onClick={() => uploadInput.current.click()}>Importar .kml</button>
                    <input type="file" ref={uploadInput} style={{display: 'none'}} onChange={handleImportarKml}/>

                    <button type="button" onClick={botaoExportar}>Exportar .kml</button>
                    <button type="submit">Ir para o Ponto</button>
                </tr>
                {(erroUpload[0]) ? (<tr>
                    <MostraErro mostra="true" texto={erroUpload[1]}/>
                </tr>) : null}
            </tbody>
        </table>
    </form>);
}

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
    var aux1 = get(state, 'conversordecoordenada.y');
    var aux2 = get(state, 'conversordecoordenada.x');
    return {
        enabled: get(state, 'conversordecoordenada.enabled'),
        captura: get(state, 'conversordecoordenada.capturarcoordenada'),
        lat: (aux1 === undefined) ? 0 : aux1,
        lon: (aux2 === undefined) ? 0 : aux2
    };
},
{
    vaiProPonto: panTo, // suporta escolha de projecao
    mudaEstadoCoordenada: geraEscreveCoordenada,
    habilitaCapturaDePonto: geraCapturaCoordenada,
    suprimeIdentificacaoDePonto: setControlProperty,
    changeMapInfoState: changeMapInfoState,
    escondeOuMostra: geraAlternaAtivacao
})(ConversorDeCoordenadaComponent);


// validacao de tipo dos props
ConversorDeCoordenadaComponent.propTypes = {
    lat: PropTypes.number,
    lon: PropTypes.number,
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
        // message: ?
        action: geraAlternaAtivacao,
        selector: (state) => ({ // Muda a cor do botao quando ativado
            bsStyle: state.conversordecoordenada && state.conversordecoordenada.enabled ? "success" : "primary",
            active: !!(state.conversordecoordenada && state.conversordecoordenada.enabled)
        })
    }
});
export const reducers = {conversordecoordenada};
export const epics = conversordecoordenadaEpics;
