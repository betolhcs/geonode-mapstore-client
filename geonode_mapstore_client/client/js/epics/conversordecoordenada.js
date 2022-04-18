import Rx from 'rxjs';
// import uuidv1 from 'uuid/v1';

import { CLICK_ON_MAP } from '@mapstore/framework/actions/map'
import { geraPassaCoordenada } from '../actions/conversordecoordenada';

export const pegarCoordenadaEpic = (action$, store) =>
    action$.ofType(CLICK_ON_MAP)
    // .filter(() => (store.getState().conversordecoordenada.capturarcoordenada)) // filtrar pra pegar so quando eu ativar o modo de coleta de coordenada
    .switchMap((action) => {
        // console.log("chegou aqui")
        const coordenadas = action.point?.latlng || {};
        return Rx.Observable.of(geraPassaCoordenada(coordenadas.lng.toFixed(6),coordenadas.lat.toFixed(6)))
    })

export default {
    pegarCoordenadaEpic
};

// export const escreveCoordenadaEpic = (action$, store) =>
//     action

