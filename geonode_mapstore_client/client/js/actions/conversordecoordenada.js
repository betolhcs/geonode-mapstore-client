export const CAPTURA_COORDENADA = 'CONVERSORDECOORDENADA:CAPTURA_COORDENADA';
export const PASSA_COORDENADA = 'CONVERSORDECOORDENADA:PASSA_COORDENADA';
export const ESCREVE_COORDENADA = 'CONVERSORDECOORDENADA:ESCREVE_COORDENADA';

// passa uma coordenada capturada do mapa
export function geraPassaCoordenada(x, y) {
    return {
        type: PASSA_COORDENADA,
        x: x,
        y: y
    };
}

// ativa a funcao de capturar coordenada do mapa
export function geraCapturaCoordenada(ativado) {
    return {
        type: CAPTURA_COORDENADA,
        ativado: ativado
    };
}

// altera a coordenada pelo campo de input
export function geraEscreveCoordenada(x, y) {
    return {
        type: ESCREVE_COORDENADA,
        x: x,
        y: y
    };
}
