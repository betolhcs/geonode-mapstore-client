import React, { useState } from "react";
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

// funcao que muda o formato da coordenada de acordo com a notacao
function formataCoordenada(x, y, notacao) {
    // let hx = (x >= 0) ? 'E' : 'W';
    let hy = (y >= 0) ? 'N' : 'S';
    var x1 = Math.trunc(x);
    var auxx = ((x - x1) * 60);
    var x2 = Math.trunc(auxx);
    var x3 = (auxx - x2) * 60;
    var y1 = Math.trunc(y);
    var auxy = (y - y1) * 60;
    var y2 = Math.trunc(auxy);
    var y3 = (auxy - y2) * 60;
    var zona = Math.ceil((x + 180) / 6);
    var utmString = "+proj=utm +zone=" + zona;
    if (hy === 'N') {
        utmString += ' +north';
    } else {
        utmString += ' +south';
    }

    switch (notacao) {
    case "gDecimal":
        return [x, y];
    case "gMinutoSegundo":
        return [x1, x2, x3, y1, y2, y3];
    case "gMinutoDecimal":
        return [x1, auxx, y1, auxy];
    case "utm":
        return proj4("EPSG:4326", utmString, [x, y]);
    default:
        return [0, 0];
    }
}

function FormularioDeCoordenada(props) { // separar em varios componentes
    const [opcao1, setOpcao1] = useState("gDecimal");
    const [opcao2, setOpcao2] = useState("EPSG:4326");

    const handleSubmit = (event) => { // centraliza no ponto
        event.preventDefault();
        props.onSubmit([props.x, props.y]);
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
        // let a = transform([parseFloat(props.x), parseFloat(props.y)], opcao, event.target.value);
        let a = formataCoordenada(parseFloat(props.x), parseFloat(props.y), event.target.value);
        console.log(a);
        setOpcao1(event.target.value);
    };

    const handleDatum = (event) => {
        // let a = transform([parseFloat(props.x), parseFloat(props.y)], opcao2, event.target.value);
        // console.log(a);
        setOpcao2(event.target.value);
    };

    // organizar html com tables
    return (<form onSubmit={handleSubmit}>
        <label>
            Lon:
            <input
                type="text"
                value={props.x}
                onChange={event => props.onChange(event.target.value, props.y)}
            />
        </label>
        <label>
            Lat:
            <input
                type="text"
                value={props.y}
                onChange={event => props.onChange(props.x, event.target.value)}
            />
        </label>

        <label>
            Notação:
            <select value={opcao1} onChange={handleNotacao}>
                <option value="gMinutoSegundo">Graus, minutos, segundos</option>
                <option value="gDecimal">Graus decimais</option>
                <option value="gMinutoDecimal">Graus, minutos decimais</option>
                <option value="utm">UTM</option>
            </select>
        </label>
        <label>
            Datum:
            <select value={opcao2} onChange={handleDatum}>
                <option value="EPSG:4326">EPSG:4326</option>
                <option value="EPSG:3857">EPSG:3857</option>
            </select>
        </label>

        <button type="button" onClick={botaoSelecionar}>Selecionar do Mapa</button>
        <button type="button" onClick={botaoExportar}>Exportar .kml</button>
        <button type="submit">Mostrar Ponto</button>
    </form>);
}


class ConversorDeCoordenadaComponent extends React.Component {
    render() {
        return (
            <div id="principal">
                <FormularioDeCoordenada x={this.props.lon} y={this.props.lat} onSubmit={this.props.onSubmit} onChange={this.props.onChange} otherAction={this.props.otherAction}/>
            </div>
        );
    }
}

ConversorDeCoordenadaComponent.propTypes = {
    lat: PropTypes.number,
    lon: PropTypes.number,
    onSubmit: PropTypes.func, // achar nomes melhores pros 3 ultimos
    otherAction: PropTypes.func,
    onChange: PropTypes.func
};


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
    onSubmit: panTo, // suporta escolha de projecao
    onChange: geraEscreveCoordenada,
    otherAction: geraCapturaCoordenada
})(ConversorDeCoordenadaComponent);


export const ConversorDeCoordenadaPlugin = ConversorDeCoordenadaConectado;
export const reducers = {conversordecoordenada};
export const epics = conversordecoordenadaEpics;
