export const CAPTURA_COORDENADA = 'CONVERSORDECOORDENADA:CAPTURA_COORDENADA';
export const PASSA_COORDENADA = 'CONVERSORDECOORDENADA:PASSA_COORDENADA';
export const ESCREVE_COORDENADA = 'CONVERSORDECOORDENADA:ESCREVE_COORDENADA';
export const DEFINE_ATIVACAO = 'CONVERSORDECOORDENADA:DEFINE_ATIVACAO';
export const ALTERNA_ATIVACAO = 'CONVERSORDECOORDENADA:ALTERNA_ATIVACAO';
export const MUDA_DATUM = 'CONVERSORDECOORDENADA:MUDA_DATUM';
export const MOVE_MARCADOR = 'CONVERSORDECOORDENADA:MOVE_MARCADOR';

// passa uma coordenada capturada do mapa
export function geraPassaCoordenada(x, y) {
    return {
        type: PASSA_COORDENADA,
        x: x,
        y: y
    };
}

// ativa ou desativa a funcao de capturar coordenada do mapa
export function geraCapturaCoordenada(ativado) {
    return {
        type: CAPTURA_COORDENADA,
        ativado: ativado
    };
}

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
        type: DEFINE_ATIVACAO,
        ativado: ativado
    };
}

// troca o estado de ativacao o plugin
export function geraAlternaAtivacao() {
    return {
        type: ALTERNA_ATIVACAO
    };
}

// muda o datum e converte as coordenadas
export function geraMudaDatum(datumNovo) {
    return {
        type: MUDA_DATUM,
        datum: datumNovo
    };
}
