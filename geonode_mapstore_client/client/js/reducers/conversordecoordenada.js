import {
    CAPTURA_COORDENADA,
    ESCREVE_COORDENADA,
    PASSA_COORDENADA,
    ALTERNA_ATIVACAO,
    DEFINE_ATIVACAO,
    MUDA_DATUM
} from '../actions/conversordecoordenada';

const defaultState = {
    enabled: false,
    x: "0.000000",
    y: "0.000000",
    datum: "EPSG:4326",
    capturarcoordenada: false
};

export default function(state = defaultState, action) { // colocar default state
    switch (action.type) {
    case PASSA_COORDENADA:
        let aux = state.capturarcoordenada; // filtrar pra so pegar dps de ter apertado o botao
        if (aux) {
            return {
                ...state,
                x: action.x,
                y: action.y,
                datum: "EPSG:4326",
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
        return {
            ...state,
            capturarcoordenada: action.ativado
        };
    case DEFINE_ATIVACAO:
        return {
            ...state,
            enabled: action.ativado,
        };
    case ALTERNA_ATIVACAO:
        return {
            ...state,
            enabled: !state.enabled,
        };
    case MUDA_DATUM:
        return {
            ...state,
            datum: action.datum
        };
    default:
        return state;
    }
}
