import React, { useState, useEffect, useRef } from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get, dropRight } from 'lodash';
import { toLonLat } from 'ol/proj';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import './linksexternos/style/linksexternos.css';

// import { highlightPoint } from '@mapstore/framework/actions/annotations';
// import measurement from '@mapstore/framework/reducers/measurement';
// import {
//     addAnnotation,
//     addAsLayer,
//     changeCoordinates,
//     changeFormatMeasurement,
//     changeMeasurement,
//     changeUom,
//     init,
//     setCurrentFeature
// } from '@mapstore/framework/actions/measurement';
// import CoordinatesEditor from '@mapstore/framework/components/mapcontrols/annotations/CoordinatesEditor';
// import {
//     isCoordinateEditorEnabledSelector,
//     isTrueBearingEnabledSelector,
//     showAddAsAnnotationSelector
// } from '@mapstore/framework/selectors/measurement';
// import { isOpenlayers } from '@mapstore/framework/selectors/maptype';
// import { measureSelector, showCoordinateEditorSelector } from '@mapstore/framework/selectors/controls';

import desenharmapa from '../reducers/desenharmapa';
import desenharmapaEpics from '../epics/desenharmapa';
import { geraAtivaDesenho, geraFinalizaDesenho } from "../actions/desenharmapa";

const Teste = ({geraAtivaDesenho, geraFinalizaDesenho}) => {
    return <><form onSubmit={() => null}>
            <button type="button" className="botoes-do-plugin" onClick={(e) =>{
                e.preventDefault;
                geraAtivaDesenho(true);
            }}>Liga</button>
            <button type="button" className="botoes-do-plugin" onClick={(e) =>{
                e.preventDefault;
                geraAtivaDesenho(false);
            }}>Desliga</button>
            <button type="button" className="botoes-do-plugin" onClick={(e) =>{
                e.preventDefault;
                console.log("botao funcionou")
                geraFinalizaDesenho();
            }}>Finaliza</button>
        </form></>
}

class DesenharMapaComponent extends React.Component {
    static propTypes = { // validação de dados do componente
        zoom: PropTypes.number,
        x: PropTypes.number,
        y: PropTypes.number,
        ne: PropTypes.array,
        sw: PropTypes.array,
        id: PropTypes.number
    };

    // Gera todos os links externos nas coordenadas e zoom certos
    render() {
        // const features = get(this.props.measurement, 'features', []);
        // const feature = features[this.props.measurement.currentFeature || 0];
        // var coords = (get(feature, this.props.geomType.indexOf('polygon') !== -1 ? 'geometry.coordinates[0]' : 'geometry.coordinates') || []).map(coordinate => ({lon: coordinate[0], lat: coordinate[1]}));

        // html do componente
        return (<div className="menu-desenho" style={{position: "absolute", right: "800px", bottom: "100px", background: "white"}}>
                <Teste geraAtivaDesenho={this.props.geraAtivaDesenho} geraFinalizaDesenho={this.props.geraFinalizaDesenho}></Teste>
                    {/* <CoordinatesEditor
                        key="measureEditor"
                        isMouseEnterEnabled
                        isMouseLeaveEnabled
                        format="decimal"
                        currentFeature={this.props.measurement.currentFeature}
                        features={this.props.measurement.features}
                        mapProjection={this.props.mapProjection}
                        onChangeFormat={this.props.onChangeFormat}
                        onHighlightPoint={this.props.onHighlightPoint}
                        onChange={this.props.onChangeCoordinates}
                        onChangeCurrentFeature={this.props.onChangeCurrentFeature}
                        showFeatureSelector={this.props.showFeatureSelector}
                        items={[]}
                        isDraggable
                        type={this.props.geomType}
                        showLengthAndBearingLabel={this.props.showLengthAndBearingLabel}
                        components={!this.props.useSingleFeature && this.props.geomType.indexOf('Polygon') !== -1 ? dropRight(coords) : coords}
                        properties={feature?.properties || {}}
                    /> */}
        </div>);
    }
}

const DesenharMapaConectado = connect((state) => { // Conecta o componente ao estado da aplicação no formato redux store
    var bounds = get(state, 'map.present.bbox.bounds');
    var mapInfo = mapInfoSelector(state);
    console.log(state)

    return {
        id: mapInfo.id,
        zoom: get(state, 'map.present.zoom'),
        x: get(state, 'map.present.center.x'),
        // y: get(state, 'map.present.center.y'),
        // sw: (bounds !== undefined) ? toLonLat([bounds.minx, bounds.miny]) : ["carregando", "carregando"],
        // ne: (bounds !== undefined) ? toLonLat([bounds.maxx, bounds.maxy]) : ["carregando", "carregando"],
        // // coordinateeditor
        // measurement: state.measurement || {},
        // uom: state.measurement && state.measurement.uom || {
        //     length: {unit: 'm', label: 'm'},
        //     area: {unit: 'sqm', label: 'm²'}
        // },
        // lineMeasureEnabled: state.measurement && state.measurement.lineMeasureEnabled,
        // lineMeasureValueEnabled: !isOpenlayers(state),
        // areaMeasureEnabled: state.measurement && state.measurement.areaMeasureEnabled,
        // areaMeasureValueEnabled: !isOpenlayers(state),
        // bearingMeasureEnabled: state.measurement && state.measurement.bearingMeasureEnabled,
        // showLengthAndBearingLabel: state.measurement && state.measurement.showLengthAndBearingLabel,
        // bearingMeasureValueEnabled: !isOpenlayers(state),
        // isCoordinateEditorEnabled: isCoordinateEditorEnabledSelector(state),
        // showCoordinateEditor: showCoordinateEditorSelector(state),
        // showFeatureSelector: isOpenlayers(state),
        // useSingleFeature: !isOpenlayers(state),
        // withReset: isOpenlayers(state),
        // showExportToGeoJSON: isOpenlayers(state),
        // showAddAsAnnotation: showAddAsAnnotationSelector(state) && isOpenlayers(state),
        // trueBearing: isTrueBearingEnabledSelector(state),
        // showAddAsLayer: isOpenlayers(state),
        // isCoordEditorEnabled: state.measurement && !state.measurement.isDrawing,
        // geomType: "Polygon",
        // format: state.measurement && state.measurement.format,
        // measurement: state.measurement
    };
},
{
    geraAtivaDesenho: geraAtivaDesenho,
    geraFinalizaDesenho: geraFinalizaDesenho
    // toggleMeasure: changeMeasurement,
    // onAddAnnotation: addAnnotation,
    // onChangeUom: changeUom,
    // onHighlightPoint: highlightPoint,
    // onChangeFormat: changeFormatMeasurement,
    // onInit: init,
    // onChangeCoordinates: changeCoordinates,
    // onChangeCurrentFeature: setCurrentFeature,
    // onAddAsLayer: addAsLayer
})(DesenharMapaComponent);

export const DesenharMapaPlugin = DesenharMapaConectado;
export const reducers = {desenharmapa};
export const epics = desenharmapaEpics;

