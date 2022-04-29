import Rx from 'rxjs';
// import uuidv1 from 'uuid/v1';

import { CLICK_ON_MAP } from '@mapstore/framework/actions/map';
import { SET_CONTROL_PROPERTY, toggleControl} from '@mapstore/framework/actions/controls';
import {closeFeatureGrid} from '@mapstore/framework/actions/featuregrid';
import {purgeMapInfoResults, hideMapinfoMarker, toggleMapInfoState} from '@mapstore/framework/actions/mapInfo';

import { geraPassaCoordenada, PASSA_COORDENADA } from '../actions/conversordecoordenada';

export const pegarCoordenadaEpic = (action$, store) => //  =>
    action$.ofType(CLICK_ON_MAP)
        .filter(() => store.getState().conversordecoordenada.capturarcoordenada === true)
        .switchMap((action) => {
            const coordenadas = action.point?.latlng || {};
            return Rx.Observable.of(geraPassaCoordenada(coordenadas.lng.toFixed(6), coordenadas.lat.toFixed(6)), toggleControl("capturacoordenada", "enabled"));
        });

export const suprimeComportamentoDoIdentify = (action$) => // , store) =>
    action$.ofType(SET_CONTROL_PROPERTY)
        .filter((action) => action.control === "capturacoordenada" && action.value)
        .switchMap(() => {
            return Rx.Observable.of(closeFeatureGrid(), purgeMapInfoResults(), hideMapinfoMarker());
        });

// dar um jeito de ativar com um delay, depois de capturar a coordenada
export const reativaComportamentoDoIdentify = (action$, store) =>
    action$.ofType(PASSA_COORDENADA)
        .filter(() => store.getState().mapInfo.enabled === false)
        .switchMap(() => {
            return Rx.Observable.of(toggleMapInfoState()).delay(1);
        });

export default {
    pegarCoordenadaEpic,
    suprimeComportamentoDoIdentify,
    reativaComportamentoDoIdentify
};
