import {
    AUMENTA_CONTADOR,
    DIMINUI_CONTADOR,
} from '../actions/helloworld';

const defaultState = {
    contador: 0,
    teste: "nada",
    enabled: true
};

export default function(state = defaultState, action) { // Retorna o novo estado após recener a acao
    switch (action.type) {
    case AUMENTA_CONTADOR:
        return {
            ...state, // Parte do estado nao alterada
            contador: state.contador += action.aumento
        };
    case DIMINUI_CONTADOR:
        return {
            ...state,
            contador: state.contador -= action.diminuicao
        };
    default:
        return state;
    }
}
