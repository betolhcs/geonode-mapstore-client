import {
    ESCREVE_COORDENADA,
    ALTERNA_ATIVACAO,
    DEFINE_ATIVACAO
} from '../actions/conversordecoordenada';

const defaultState = {
    enabled: false,
    x: "-47.883400",
    y: "-15.793400",
    datum: "EPSG:4326"
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
