import Rx from 'rxjs';
// import uuidv1 from 'uuid/v1';

import { CLICK_ON_MAP } from '@mapstore/framework/actions/map';
// import { addPopup, cleanPopups, removePopup, REMOVE_MAP_POPUP } from '@mapstore/framework/actions/mapPopups';
import { SET_CONTROL_PROPERTY, toggleControl} from '@mapstore/framework/actions/controls';
import { closeFeatureGrid } from '@mapstore/framework/actions/featuregrid';
import { purgeMapInfoResults, hideMapinfoMarker, toggleMapInfoState } from '@mapstore/framework/actions/mapInfo';
// import uuid from 'uuid';

import { geraPassaCoordenada, PASSA_COORDENADA, geraDefineAtivacao } from '../actions/conversordecoordenada';

// Checa se é pra capturar o clique no mapa e suprime o identify(comportamento padrao de clique no mapa)
export const pegarCoordenadaEpic = (action$, store) =>
    action$.ofType(CLICK_ON_MAP)
        .filter(() => store.getState().conversordecoordenada.capturarcoordenada === true)
        .switchMap((action) => {
            const coordenadas = action.point?.latlng || {};
            return Rx.Observable.of(geraPassaCoordenada(coordenadas.lng.toFixed(6), coordenadas.lat.toFixed(6)), toggleControl("capturacoordenada", "enabled"), closeFeatureGrid(), purgeMapInfoResults(), hideMapinfoMarker());
        });

// fecha o conversor de coordenada quando abre o plugin de measure
export const fechaPluginQuandoMeasureAbreEpic = (action$) =>
    action$.ofType(SET_CONTROL_PROPERTY)
        .filter((action) => action.control === "measure" && action.value)
        .switchMap(() => {
            return Rx.Observable.of(geraDefineAtivacao(false));
        });

// funcao que fecharia os outros plugins ao abrir o conversor, desnecessaria?
// export const fechaOutrosPluginsQuandoAbreEpic = (action$, store) =>
//     action$.ofType(ALTERNA_ATIVACAO)
//         .filter(() => store.getState().conversordecoordenada.enabled)
//         .switchMap(() => {
//             return Rx.Observable.of(closeFeatureGrid(), purgeMapInfoResults(), hideMapinfoMarker(), )
//         });

// Reativa o comportamento padrao de clique no mapa depois da captura
export const reativaComportamentoDoIdentifyEpic = (action$, store) =>
    action$.ofType(PASSA_COORDENADA)
        .filter(() => store.getState().mapInfo.enabled === false)
        .switchMap(() => {
            return Rx.Observable.of(toggleMapInfoState()).delay(1); // delay necessario para que a captura seja feita antes da reativacao
        });

export default {
    pegarCoordenadaEpic,
    fechaPluginQuandoMeasureAbreEpic,
    reativaComportamentoDoIdentifyEpic
};
