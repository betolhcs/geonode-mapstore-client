import Rx from 'rxjs';

import { SET_CONTROL_PROPERTY, setControlProperty } from '@mapstore/framework/actions/controls';
import { closeFeatureGrid } from '@mapstore/framework/actions/featuregrid';
import {
    toggleMapInfoState,
    changeMapInfoState,
    purgeMapInfoResults,
    hideMapinfoMarker,
    TOGGLE_MAPINFO_STATE
} from '@mapstore/framework/actions/mapInfo';
import { toLonLat } from 'ol/proj';

import {
    ALTERNA_ATIVACAO_FORMULARIO,
    INICIA_DESENHO,
    FINALIZA_DESENHO,
    geraDefineAtivacao,
    geraFinalizaDesenho,
} from '../actions/formulario';


import { changeDrawingStatus, CHANGE_DRAWING_STATUS } from '@mapstore/framework/actions/draw';
import { ALTERNA_ATIVACAO_CONVERSOR } from '../actions/conversordecoordenada';


function checaOrientacao(coordenadas) {
    let area = 0;
    for (let i = 0; i < coordenadas.length - 1; i++) {
        const subarea = (coordenadas[i+1][0]-coordenadas[i][0])*(coordenadas[i+1][1]+coordenadas[i][1]);
        area += subarea;
    }
    if (area < 0) {
        return false // sentido anti-horario CORRETO
    }
    return true // Sentido horario ERRADO
}


// Move o marcador de um ponto ao outro.
export const desenhaPoligEpic = (action$, store) =>
    action$.ofType(CHANGE_DRAWING_STATUS)
        .filter((action) => store.getState().formulario.desenhar === true && action.owner === "pedidodeimagem" && action.status === "stop")
        .switchMap(() => {
            let coordenadas = store.getState().draw.features[0].coordinates[0].map((a) => toLonLat(a));
            coordenadas.push(coordenadas[0]);
            if (checaOrientacao(coordenadas)) { // Caso seja necessario troque a ordem das coordenadas
                coordenadas.reverse()
            }
            return Rx.Observable.of(geraFinalizaDesenho(coordenadas));
        });

// funcao que fecharia os outros plugins ao abrir o conversor e remove os marcadores caso esteja fechando o plugin
export const configuraAtivaDesenhoEpic = (action$, store) =>
    action$.ofType(INICIA_DESENHO)
        .switchMap(() => {
            return Rx.Observable.of(
                changeDrawingStatus("start", "Polygon", "pedidodeimagem", [], {geodesic: true, stopAfterDrawing: true})
            );
        });

// fecha o formulario quando abre o plugin de measure
export const fechaPedidoDeImagemQuandoMeasureAbreEpic = (action$) =>
    action$.ofType(SET_CONTROL_PROPERTY)
        .filter((action) => action.control === "measure" && action.value)
        .switchMap(() => {
            return Rx.Observable.of(geraDefineAtivacao(false), changeMapInfoState(true), changeDrawingStatus("clean", "", "desenharmapa", [], {}));
        });

// funcao que fecharia os outros plugins ao abrir o formulario e remove os marcadores caso esteja fechando o plugin
export const configuraAtivaDesativaPedidoDeImagemEpic = (action$, store) =>
    action$.ofType(ALTERNA_ATIVACAO_FORMULARIO)
        .switchMap(() => {
            if (store.getState().formulario.enabled) {
                return Rx.Observable.of(
                    closeFeatureGrid(),
                    purgeMapInfoResults(),
                    hideMapinfoMarker(),
                    changeMapInfoState(false),
                    setControlProperty("measure", "enabled", false));
            }
            return Rx.Observable.of(toggleMapInfoState(), changeDrawingStatus("clean", "", "desenharmapa", [], {}));
        });

// fecha o formulario quando abre o plugin do identify
export const fechaPedidoDeImagemQuandoIdentifyAbreEpic = (action$, store) =>
    action$.ofType(TOGGLE_MAPINFO_STATE)
        .filter(() => store.getState().mapInfo.enabled === true && store.getState().formulario.enabled === true)
        .switchMap(() => {
            return Rx.Observable.of(geraDefineAtivacao(false), changeDrawingStatus("clean", "", "desenharmapa", [], {}));
        });

export const fechaPedidoDeImagemQuandoConversorDeCoordenadaAbreEpic = (action$, store) =>
    action$.ofType(ALTERNA_ATIVACAO_CONVERSOR)
        .filter(() => store.getState().conversordecoordenada.enabled === true && store.getState().formulario.enabled === true)
        .switchMap(() => {
            return Rx.Observable.of(geraDefineAtivacao(false), changeDrawingStatus("clean", "", "desenharmapa", [], {}));
        });

export default {
    configuraAtivaDesativaPedidoDeImagemEpic,
    fechaPedidoDeImagemQuandoMeasureAbreEpic,
    fechaPedidoDeImagemQuandoIdentifyAbreEpic,
    configuraAtivaDesenhoEpic,
    fechaPedidoDeImagemQuandoConversorDeCoordenadaAbreEpic,
    desenhaPoligEpic
};
