export const ESCREVE_COORDENADA = 'CONVERSORDECOORDENADA:ESCREVE_COORDENADA';
export const DEFINE_ATIVACAO_CONVERSOR = 'CONVERSORDECOORDENADA:DEFINE_ATIVACAO';
export const ALTERNA_ATIVACAO_CONVERSOR = 'CONVERSORDECOORDENADA:ALTERNA_ATIVACAO';
export const MOVE_MARCADOR = 'CONVERSORDECOORDENADA:MOVE_MARCADOR';


// move o marcador no mapa
export function geraMoveMarcador(x, y) {
    return {
        type: MOVE_MARCADOR,
        x: x,
        y: y
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

// ativa e desativa o plugin
export function geraDefineAtivacao(ativado) {
    return {
        type: DEFINE_ATIVACAO_CONVERSOR,
        ativado: ativado
    };
}

// troca o estado de ativacao o plugin
export function geraAlternaAtivacao() {
    return {
        type: ALTERNA_ATIVACAO_CONVERSOR
    };
}
