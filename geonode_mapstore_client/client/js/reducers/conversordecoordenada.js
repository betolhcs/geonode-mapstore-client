// import { CLICK_ON_MAP } from '@mapstore/framework/actions/map'
import { CAPTURA_COORDENADA, ESCREVE_COORDENADA, PASSA_COORDENADA } from '../actions/conversordecoordenada';

const defaultState = {
    x: 0,
    y: 0,
    crs: "EPSG:4326",
    capturarcoordenada: false
};

export default function(state = defaultState, action) { // colocar default state
    var aux;
    var ativado;
    switch (action.type) {
    case PASSA_COORDENADA:// CLICK_ON_MAP
        // const coordenadas = action.point?.latlng || {};
        aux = state.capturarcoordenada; // filtrar pra so pegar dps de ter apertado o botao
        if (aux) {
            return {
                ...state,
                x: action.x,
                y: action.y,
                crs: "EPSG:4326",
                capturarcoordenada: false
            };
        }
        return state;
    case ESCREVE_COORDENADA:
        return {
            ...state,
            x: action.x,
            y: action.y
        };
    case CAPTURA_COORDENADA:
        ativado = action.ativado;
        return {
            ...state,
            capturarcoordenada: ativado
        };
    default:
        return state;
    }
}
