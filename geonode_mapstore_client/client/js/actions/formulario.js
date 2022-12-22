export const DEFINE_ATIVACAO_FORMULARIO = 'FORMULARIO:DEFINE_ATIVACAO';
export const ALTERNA_ATIVACAO_FORMULARIO = 'FORMULARIO:ALTERNA_ATIVACAO';
export const INICIA_DESENHO = 'DESENHARMAPA:INICIA_DESENHO';
export const FINALIZA_DESENHO = 'DESENHARMAPA:FINALIZA_DESENHO';
export const ALTERNA_VISIBILIDADE_DESENHO = 'DESENHARMAPA:ALTERNA_VISIBILIDADE_DESENHO'


// ativa e desativa o plugin
export function geraDefineAtivacao(ativado) {
    return {
        type: DEFINE_ATIVACAO_FORMULARIO,
        ativado: ativado
    };
}

// troca o estado de ativacao o plugin
export function geraAlternaAtivacao() {
    return {
        type: ALTERNA_ATIVACAO_FORMULARIO
    };
}

export function geraIniciaDesenho(){
    return {
        type: INICIA_DESENHO
    }
}

export function geraFinalizaDesenho(coordenadas){
    return {
        type: FINALIZA_DESENHO,
        coordenadas: coordenadas
    }
}

export function geraAlternaVisibilidade(){
    return{
        type: ALTERNA_VISIBILIDADE_DESENHO
    }
}
