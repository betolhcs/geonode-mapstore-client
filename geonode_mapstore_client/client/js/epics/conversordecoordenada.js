import Rx from 'rxjs';

import { CLICK_ON_MAP } from '@mapstore/framework/actions/map';
import { SET_CONTROL_PROPERTY, setControlProperty } from '@mapstore/framework/actions/controls';
import { closeFeatureGrid } from '@mapstore/framework/actions/featuregrid';
import {
    toggleMapInfoState,
    changeMapInfoState,
    purgeMapInfoResults,
    hideMapinfoMarker,
    TOGGLE_MAPINFO_STATE
} from '@mapstore/framework/actions/mapInfo';
import uuidv1 from 'uuid/v1';
import { addLayer, removeLayer } from "@mapstore/framework/actions/layers";

import {
    geraPassaCoordenada,
    geraMoveMarcador,
    geraDefineAtivacao,
    MOVE_MARCADOR,
    ALTERNA_ATIVACAO,
    ESCREVE_COORDENADA
} from '../actions/conversordecoordenada';


const STYLE_DO_PONTO = {
    // iconGlyph: 'map-marker'
    iconShape: 'circle',
    iconColor: 'blue',
    iconAnchor: [0.5, 0.5],
    scale: 0.5
};

function criaFeatureDoMarcador(position) {
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": position
                },
                "properties": {
                    "isValidFeature": true,
                    "id": uuidv1()
                },
                "style": {
                    ...STYLE_DO_PONTO
                }
            }
        ],
        "properties": {
            "id": uuidv1(),
            "type": "Marcador",
            "title": "MarcadorDeCoordenada"
        },
        "style": {}
    };
}


// Checa se é pra capturar o clique no mapa, captura a coordenada e marca o mapa
export const pegarCoordenadaEpic = (action$, store) =>
    action$.ofType(CLICK_ON_MAP)
        .filter(() => store.getState().conversordecoordenada.capturarcoordenada === true)
        .switchMap((action) => {
            const coordenadas = action.point?.latlng || {};
            return Rx.Observable.of(geraPassaCoordenada(coordenadas.lng.toFixed(6), coordenadas.lat.toFixed(6)),
                geraMoveMarcador(coordenadas.lng, coordenadas.lat)
            );
        });

// Move o marcador de um ponto ao outro.
export const moveMarcadorEpic = (action$) =>
    action$.ofType(MOVE_MARCADOR)
        .switchMap((action) => {
            return Rx.Observable.of(removeLayer("ConversorDeCoordenada"),
                addLayer({
                    "type": "vector",
                    "id": "ConversorDeCoordenada",
                    "name": "MarcadorDoConversor",
                    "hideLoading": true,
                    "features": [criaFeatureDoMarcador([action.x, action.y])],
                    "visibility": true
                })
            );
        });

// fecha o conversor de coordenada quando abre o plugin de measure
export const fechaPluginQuandoMeasureAbreEpic = (action$) =>
    action$.ofType(SET_CONTROL_PROPERTY)
        .filter((action) => action.control === "measure" && action.value)
        .switchMap(() => {
            return Rx.Observable.of(geraDefineAtivacao(false), removeLayer("ConversorDeCoordenada"), changeMapInfoState(true));
        });

// funcao que fecharia os outros plugins ao abrir o conversor e remove os marcadores caso esteja fechando o plugin
export const configuraAtivaDesativaEpic = (action$, store) =>
    action$.ofType(ALTERNA_ATIVACAO)
        .switchMap(() => {
            if (store.getState().conversordecoordenada.enabled) {
                return Rx.Observable.of(closeFeatureGrid(),
                    purgeMapInfoResults(),
                    hideMapinfoMarker(),
                    changeMapInfoState(false),
                    setControlProperty("measure", "enabled", false));
            }
            return Rx.Observable.of(removeLayer("ConversorDeCoordenada"), toggleMapInfoState());
        });

// move o marcador pra coordenada que foi inserida no formulario de input
export const atualizaMarcadorComCoordenadaEpic = (action$) =>
    action$.ofType(ESCREVE_COORDENADA)
        .switchMap((action) => {
            return Rx.Observable.of(geraMoveMarcador(parseFloat(action.x), parseFloat(action.y)));
        });

// fecha o conversor de coordenada quando abre o plugin do identify
export const fechaPluginQuandoIdentifyAbreEpic = (action$, store) =>
    action$.ofType(TOGGLE_MAPINFO_STATE)
        .filter(() => store.getState().mapInfo.enabled === true && store.getState().conversordecoordenada.enabled === true)
        .switchMap(() => {
            return Rx.Observable.of(geraDefineAtivacao(false), removeLayer("ConversorDeCoordenada"));
        });

export default {
    configuraAtivaDesativaEpic,
    moveMarcadorEpic,
    atualizaMarcadorComCoordenadaEpic,
    pegarCoordenadaEpic,
    fechaPluginQuandoMeasureAbreEpic,
    fechaPluginQuandoIdentifyAbreEpic
};
