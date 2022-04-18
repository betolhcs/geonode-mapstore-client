import React, { useState, useEffect, useRef } from "react";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {get} from 'lodash';
import {toLonLat} from 'ol/proj';
import { panTo } from '@mapstore/framework/actions/map';

import './conversordecoordenada/style/conversordecoordenada.css';
import conversordecoordenada from '../reducers/conversordecoordenada';
import conversordecoordenadaEpics from '../epics/conversordecoordenada';
import { geraCapturaCoordenada, geraEscreveCoordenada } from "../actions/conversordecoordenada";


function FormularioDeCoordenada(props){
    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit([props.x ,props.y])
    }

    const otherAction = (event) =>{
        event.preventDefault();
        props.otherAction(true);
    }

    return (<form onSubmit={handleSubmit}>
        <label>
            lon
            <input
                type="text"
                value={props.x}
                onChange={event => props.onChange(event.target.value, props.y)}
            />
        </label>

        <label>
            lat
            <input
                type="text"
                value={props.y}
                onChange={event => props.onChange(props.x, event.target.value)}
            />
        </label>
        <button type="button" onClick={otherAction}>Selecionar do Mapa</button>
        <button type="submit">submit</button>
    </form>);
}



class ConversorDeCoordenadaComponent extends React.Component {
    static propTypes = {
        b: PropTypes.number
    }

    render() {
        return(
            <div id='principal'>
                <FormularioDeCoordenada x={this.props.lon} y={this.props.lat} onSubmit={this.props.onSubmit} onChange={this.props.onChange} otherAction={this.props.otherAction}/>
            </div>
        );
    }
}



const ConversorDeCoordenadaConectado = connect((state) =>{
    var a = get(state, 'conversordecoordenada.y');
    var b = get(state, 'conversordecoordenada.x');
    return {
        lat: (a == undefined) ? 0 : a,
        lon: (b == undefined) ? 0 : b
    };
},
{
    onSubmit: panTo,
    onChange: geraEscreveCoordenada,
    otherAction: geraCapturaCoordenada
})(ConversorDeCoordenadaComponent);


export const ConversorDeCoordenadaPlugin = ConversorDeCoordenadaConectado;
export const reducers = {conversordecoordenada};
export const epics = conversordecoordenadaEpics;
