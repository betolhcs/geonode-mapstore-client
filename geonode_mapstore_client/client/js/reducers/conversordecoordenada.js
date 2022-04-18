// import { CLICK_ON_MAP } from '@mapstore/framework/actions/map'
import { CAPTURA_COORDENADA, ESCREVE_COORDENADA, PASSA_COORDENADA } from '../actions/conversordecoordenada'

// function sample (state, action){
//     switch (action.type) {
//         case CLICK_ON_MAP:
//             // const a = point?.latlng || {};
//             console.log("teste");
//             return state; //{
//                 // ...state,
//                 // coordenada: {lat: lat, lon: lon}
//             //}
//         default:
//             return state;
//     }
// }

export default function(state = {}, action) {
    switch (action.type) { //filtrar pra so pegar dps de apertar o botao
        case PASSA_COORDENADA://CLICK_ON_MAP
            // const coordenadas = action.point?.latlng || {};
            var aux = state.capturarcoordenada;
            if(aux)
                return {
                    ...state,
                    x: action.x,
                    y: action.y,
                    capturarcoordenada: false
            };
            return state;
        case ESCREVE_COORDENADA:
            return {
                ...state,
                x: action.x,
                y: action.y
            }
        // case CAPTURAR_COORDENADA: //EXPLODINDO? TA ESCRITO ERRADO AQUI tem q tirar o r
        case CAPTURA_COORDENADA:
            var ativado = action.ativado
            return {
                ...state,
                capturarcoordenada: ativado
            }
        default:
            return state;
    }
}
