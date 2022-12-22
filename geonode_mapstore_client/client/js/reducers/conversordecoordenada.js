import {
    ESCREVE_COORDENADA,
    DEFINE_ATIVACAO_CONVERSOR,
    ALTERNA_ATIVACAO_CONVERSOR
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
    case DEFINE_ATIVACAO_CONVERSOR:
        return {
            ...state,
            enabled: action.ativado
        };
    case ALTERNA_ATIVACAO_CONVERSOR:
        return {
            ...state,
            enabled: !state.enabled
        };
    default:
        return state;
    }
}
