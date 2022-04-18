export const CAPTURA_COORDENADA = 'CONVERSORDECOORDENADA:CAPTURA_COORDENADA';
export const PASSA_COORDENADA = 'CONVERSORDECOORDENADA:PASSA_COORDENADA';
export const ESCREVE_COORDENADA = 'CONVERSORDECOORDENADA:ESCREVE_COORDENADA';

export function geraPassaCoordenada(x, y) {
    return {
        type: PASSA_COORDENADA,
        x: x,
        y: y
    };
}

export function geraCapturaCoordenada(ativado) {
    return {
        type: CAPTURA_COORDENADA,
        ativado: ativado
    };
}

export function geraEscreveCoordenada(x, y) {
    return {
        type: ESCREVE_COORDENADA,
        x: x,
        y: y
    };
}
