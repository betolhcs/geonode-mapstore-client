import {
    ESCREVE_COORDENADA,
    ALTERNA_ATIVACAO,
    DEFINE_ATIVACAO
} from '../actions/conversordecoordenada';

const defaultState = {
    enabled: false,
    x: "0.000000",
    y: "0.000000",
    datum: "EPSG:4326",
};

export default function(state = defaultState, action) { // colocar default state
    switch (action.type) {
    case ESCREVE_COORDENADA:
        return {
            ...state,
            x: action.x,
            y: action.y
        };
    case DEFINE_ATIVACAO:
        return {
            ...state,
            enabled: action.ativado
        };
    case ALTERNA_ATIVACAO:
        return {
            ...state,
            enabled: !state.enabled
        };
    default:
        return state;
    }
}
