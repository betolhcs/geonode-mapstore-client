import Rx from 'rxjs';

import { CLICK_ON_MAP } from '@mapstore/framework/actions/map';
import { SET_CONTROL_PROPERTY } from '@mapstore/framework/actions/controls';
import { closeFeatureGrid } from '@mapstore/framework/actions/featuregrid';
import { toggleMapInfoState, changeMapInfoState, purgeMapInfoResults, hideMapinfoMarker,} from '@mapstore/framework/actions/mapInfo';
import uuidv1 from 'uuid/v1';
import { addLayer, removeLayer } from "@mapstore/framework/actions/layers";
import { cleanHighlight } from '@mapstore/framework/actions/annotations';

import { geraPassaCoordenada, PASSA_COORDENADA, geraDefineAtivacao, CAPTURA_COORDENADA, MOVE_MARCADOR, geraMoveMarcador, ALTERNA_ATIVACAO } from '../actions/conversordecoordenada';


const STYLE_DO_PONTO = {
    iconGlyph: 'comment',
    iconShape: 'square',
    iconColor: 'blue',
    iconAnchor: [0.5, 0.5],
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
                    ...STYLE_DO_PONTO,
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
            return Rx.Observable.of(geraPassaCoordenada(coordenadas.lng.toFixed(6), coordenadas.lat.toFixed(6)), // geraMoveMarcador(coordenadas.lng, coordenadas.lat)
                addLayer({
                    "type": "vector",
                    "id": "ConversorDeCoordenada",
                    "name": "MarcadorDoConversor",
                    "hideLoading": true,
                    "features": [criaFeatureDoMarcador([coordenadas.lng, coordenadas.lat])],
                    "visibility": true
                })
            );
        });

// Limpa o marcador antigo, e prepara algumas coisas pra captura de coordenada TALVEZ SEJA EXTINTO
export const a = (action$, store) =>
    action$.ofType(CAPTURA_COORDENADA)
        // .filter((action) => action.ativado === true )//&& store.getState().conversordecoordenada.capturarcoordenada === false
        .switchMap(() => {
            return Rx.Observable.of(removeLayer("ConversorDeCoordenada"), changeMapInfoState(false));
        });

// export const moveMarcadorEpic = (action$) =>
//         action$.ofType(MOVE_MARCADOR)
//         .switchMap((action) => {
//             return from([()=>removeLayer("ConversorDeCoordenada"),()=>addLayer({
//                 "type": "vector",
//                 "id": "ConversorDeCoordenada",
//                 "name": "MarcadorDoConversor",
//                 "hideLoading": true,
//                 "features": [criaFeatureDoMarcador([action.x, action.y])],
//                 "visibility": true
//             })]).pipe(concatMap(item => Rx.Observable.of(item).pipe(delay(100))))
//         });

// fecha o conversor de coordenada quando abre o plugin de measure
export const fechaPluginQuandoMeasureAbreEpic = (action$) =>
    action$.ofType(SET_CONTROL_PROPERTY)
        .filter((action) => action.control === "measure" && action.value)
        .switchMap(() => {
            return Rx.Observable.of(geraDefineAtivacao(false));
        });

// funcao que fecharia os outros plugins ao abrir o conversor e remove os marcadores caso esteja fechando o plugin
export const configuraAtivaDesativaEpic = (action$, store) =>
    action$.ofType(ALTERNA_ATIVACAO)
        .switchMap(() => {
            if(store.getState().conversordecoordenada.enabled){
                return Rx.Observable.of(closeFeatureGrid(), purgeMapInfoResults(), hideMapinfoMarker(), cleanHighlight()) //DAR UM JEITO DE FECHAR O MEASURE
            }else{
                return Rx.Observable.of(removeLayer("ConversorDeCoordenada"))
            }
        });

// Reativa o comportamento padrao de clique no mapa depois da captura
export const reativaComportamentoDoIdentifyEpic = (action$, store) =>
    action$.ofType(PASSA_COORDENADA)
        .filter(() => store.getState().mapInfo.enabled === false)
        .switchMap(() => {
            return Rx.Observable.of(toggleMapInfoState()).delay(1); // delay necessario para que a captura seja feita antes da reativacao
        });

export default {
    configuraAtivaDesativaEpic,
    // moveMarcadorEpic,
    a,
    pegarCoordenadaEpic,
    fechaPluginQuandoMeasureAbreEpic,
    reativaComportamentoDoIdentifyEpic
};
