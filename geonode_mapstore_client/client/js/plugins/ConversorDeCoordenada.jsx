import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import proj4 from 'proj4';
import Point from 'ol/geom/Point';
import Feature from 'ol/Feature';
import KML from 'ol/format/KML';
import { panTo } from '@mapstore/framework/actions/map';
import { saveAs } from "file-saver";

import './conversordecoordenada/style/conversordecoordenada.css';
import conversordecoordenada from '../reducers/conversordecoordenada';
import conversordecoordenadaEpics from '../epics/conversordecoordenada';
import { geraCapturaCoordenada, geraEscreveCoordenada } from "../actions/conversordecoordenada";

// TODO validar dados
// function validaCoordenada(coordenadas, notacao){

// }

// Funcao que muda o formato de grau decimal para a notacao escolhida.
function formataCoordenada(x, y, notacao) {
    let hx = (x >= 0) ? 'E' : 'W'; // Acho que nao e usado pra nada
    let hy = (y >= 0) ? 'N' : 'S';
    let auxx = Math.abs(x);
    let xg = Math.trunc(auxx);
    let xmd = ((auxx - xg) * 60);
    let xm = Math.trunc(xmd);
    let xs = (xmd - xm) * 60;
    let auxy = Math.abs(y);
    let yg = Math.trunc(auxy);
    let ymd = (auxy - yg) * 60;
    let ym = Math.trunc(ymd);
    let ys = (ymd - ym) * 60;
    let zona = Math.ceil((x + 180) / 6);
    let utmString = "+proj=utm +zone=" + zona;
    xmd = xmd.toFixed(4);
    ymd = ymd.toFixed(4);
    xs = xs.toFixed(2);
    ys = ys.toFixed(2);

    if (hy === 'N') {
        utmString += ' +north';
    } else {
        utmString += ' +south';
        yg = -yg;
    }
    if (hx === 'W') {
        xg = -xg;
    }

    switch (notacao) {
    case "gDecimal":
        return [x, y];
    case "gMinutoSegundo":
        return [xg, xm, xs, yg, ym, ys];
    case "gMinutoDecimal":
        return [xg, xmd, yg, ymd];
    case "utm":
        let auxutm = proj4("EPSG:4326", utmString, [x, y]);
        auxutm[0] = auxutm[0].toFixed(1);
        auxutm[1] = auxutm[1].toFixed(1);
        auxutm.push(zona);
        auxutm.push(hy);
        return auxutm;
    default:
        return [0, 0];
    }
}

// funcao que pega a coordenada em alguma notacao e converte de volta para grau decimal para armazenar no estado.
function voltaCoordenada(coordenadas, notacao) {
    let x;
    let y;
    let aux;
    let sinalx;
    let sinaly;
    let utmString = "+proj=utm +zone=";

    switch (notacao) {
    case "gDecimal":
        return [coordenadas[0], coordenadas[1]];
    case "gMinutoSegundo":
        aux = coordenadas.map((coordenada) => parseFloat(coordenada));
        sinalx = (aux[0] >= 0) ? 'L' : 'W';
        sinaly = (aux[3] >= 0) ? 'N' : 'S';
        x = Math.abs(aux[0]) + (aux[1] + aux[2] / 60.0) / 60.0;
        y = Math.abs(aux[3]) + (aux[4] + aux[5] / 60.0) / 60.0;
        x = (sinalx === 'W') ? -x : x;
        y = (sinaly === 'S') ? -y : y;
        return [x.toFixed(6), y.toFixed(6)];
    case "gMinutoDecimal":
        aux = coordenadas.map((coordenada) => parseFloat(coordenada));
        sinalx = (aux[0] >= 0) ? 'L' : 'W';
        sinaly = (aux[2] >= 0) ? 'N' : 'S';
        x = Math.abs(aux[0]) + aux[1] / 60.0;
        y = Math.abs(aux[2]) + aux[3] / 60.0;
        x = (sinalx === 'W') ? -x : x;
        y = (sinaly === 'S') ? -y : y;
        return [x.toFixed(6), y.toFixed(6)];
    case "utm":
        utmString += Math.trunc(coordenadas[2]);
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

// Componente com os campos de coordenada, muda conforme o formato de coordenada muda.
function CamposDeCoordenada(props) {

    const validaEMuda = () =>{
        // valida()
        let aux = voltaCoordenada(props.coordenadas, props.formato);
        props.mudaEstadoGlobal(aux[0], aux[1]);
    };

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
            <tr>
                <label>
                    Lon:
                    <input
                        type="text"
                        value={props.coordenadas[0]}
                        // value={props.x}
                        // onChange={event => props.mudaEstadoCoordenada(event.target.value, props.y)}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> º
                </label>
            </tr></>);
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
                    /> º
                    <input
                        type="text"
                        value={props.coordenadas[4]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 4) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> '
                    <input
                        type="text"
                        value={props.coordenadas[5]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 5) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> "
                </label>
            </tr>
            <tr>
                <label>
                    Lon:
                    <input
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> º
                    <input
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> '
                    <input
                        type="text"
                        value={props.coordenadas[2]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 2) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> "
                </label>
            </tr></>);
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
                    /> º
                    <input
                        type="text"
                        value={props.coordenadas[3]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 3) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> '
                </label>
            </tr>
            <tr>
                <label>
                    Lon:
                    <input
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> º
                    <input
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> '
                </label>
            </tr></>);
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
                    />
                </label>
            </tr>
            <tr>
                <label>
                    Lon:
                    <input
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    />
                </label>
            </tr>
            <tr>
                <label>
                    Fuso:
                    <input
                        type="text"
                        value={props.coordenadas[2]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 2) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    />
                    <input
                        type="text"
                        value={props.coordenadas[3]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 3) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    />
                </label>
            </tr></>);
    default:
        return <p>erro</p>;
    }
}

// Componente principal
function FormularioDeCoordenada(props) {
    const [notacao, setNotacao] = useState("gDecimal");
    const [datum, setDatum] = useState("EPSG:4326");
    const [coordenadas, setCoordenadas] = useState([0, 0]);

    useEffect(() => {
        setCoordenadas(formataCoordenada(parseFloat(props.x), parseFloat(props.y), notacao));
    }, [props.x, props.y]);

    const handleSubmit = (event) => { // centraliza no ponto
        event.preventDefault();
        props.vaiProPonto([props.x, props.y]);
    };
    const botaoSelecionar = (event) =>{ // seleciona ponto do mapa
        event.preventDefault();
        props.otherAction(true);
    };
    const botaoExportar = (event) => { // exporta o ponto como kml
        event.preventDefault();
        let marker = new Feature({
            geometry: new Point([props.x, props.y])
        });
        let a = new KML();
        let teste = a.writeFeatures([marker], {
            dataProjection: 'EPSG:4326',
            featureProjection: 'EPSG:4326'
        });
        let blob = new Blob([teste], { type: 'text/plain;charset=utf-8' });
        saveAs(blob, "ponto.kml");
    };
    const handleNotacao = (event) => {
        setNotacao(event.target.value);
        setCoordenadas(formataCoordenada(parseFloat(props.x), parseFloat(props.y), event.target.value));
    };
    const handleDatum = (event) => {
        // let a = transform([parseFloat(props.x), parseFloat(props.y)], datum, event.target.value);
        // console.log(a);
        setDatum(event.target.value);
    };

    // organizar html com tables
    return (<form onSubmit={handleSubmit}>
        <table>
            <tbody>
                <tr>
                    <p>Lat:{props.y} Lon:{props.x}</p>
                </tr>
                <tr>
                    <CamposDeCoordenada formato={notacao} coordenadas={coordenadas} setCoordenadas={setCoordenadas} mudaEstadoGlobal={props.mudaEstadoCoordenada}/>
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
                            <option value="EPSG:4326">EPSG:4326</option>
                            <option value="EPSG:3857">EPSG:3857</option>
                        </select>
                    </label>

                    <button type="button" onClick={botaoSelecionar}>Selecionar do Mapa</button>
                    <button type="button" onClick={botaoExportar}>Exportar .kml</button>
                    <button type="submit">Mostrar Ponto</button>
                </tr>
            </tbody>
        </table>
    </form>);
}

// Componente principal
class ConversorDeCoordenadaComponent extends React.Component {
    render() {
        return (
            <div id="principal">
                <FormularioDeCoordenada x={this.props.lon} y={this.props.lat} vaiProPonto={this.props.vaiProPonto} mudaEstadoCoordenada={this.props.mudaEstadoCoordenada} otherAction={this.props.otherAction}/>
            </div>
        );
    }
}


// Conecta o componente principal com o estado geral da aplicação e pega as variaveis que serão necessárias.
const ConversorDeCoordenadaConectado = connect((state) =>{
    // console.log(state);
    var aux1 = get(state, 'conversordecoordenada.y');
    var aux2 = get(state, 'conversordecoordenada.x');
    return {
        lat: (aux1 === undefined) ? 0 : aux1,
        lon: (aux2 === undefined) ? 0 : aux2
    };
},
{
    vaiProPonto: panTo, // suporta escolha de projecao
    mudaEstadoCoordenada: geraEscreveCoordenada,
    otherAction: geraCapturaCoordenada
})(ConversorDeCoordenadaComponent);


// validacao de tipo dos props
ConversorDeCoordenadaComponent.propTypes = {
    lat: PropTypes.number,
    lon: PropTypes.number,
    vaiProPonto: PropTypes.func, // achar nomes melhores pros 3 ultimos
    otherAction: PropTypes.func,
    mudaEstadoCoordenada: PropTypes.func
};


export const ConversorDeCoordenadaPlugin = ConversorDeCoordenadaConectado;
export const reducers = {conversordecoordenada};
export const epics = conversordecoordenadaEpics;
