export const AUMENTA_CONTADOR = 'HELLOWORLD:AUMENTACONTADOR';
export const DIMINUI_CONTADOR = 'HELLOWORLD:DIMINUICONTADOR';

// Gera uma acao do tipo AUMENTA_CONTADOR, pode ter outros argumentos relevantes
export function geraAumentaContador(aumento) {
    return {
        type: AUMENTA_CONTADOR,
        aumento: aumento
    };
}

// cada acao é exportada individualmente
export function geraDiminuiContador(diminuicao) {
    return {
        type: DIMINUI_CONTADOR,
        diminuicao: diminuicao
    };
}
