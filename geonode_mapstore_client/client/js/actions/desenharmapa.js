export const FECHA_POLIGONO = 'DESENHARMAPA:FECHA_POLIGONO';
export const ADICIONA_PONTO = 'DESENHARMAPA:ADICIONA_PONTO';
export const ATIVA_DESENHO = 'DESENHARMAPA:ATIVA_DESENHO';
export const FINALIZA_DESENHO = 'DESENHARMAPA:FINALIZA_DESENHO';

export function geraFechaPoligono(coordenadas) {
    return {
        type: FECHA_POLIGONO,
        coordenadas: coordenadas
    };
}

export function geraAdicionaPonto(x, y) {
    return {
        type: ADICIONA_PONTO,
        x: x,
        y: y
    };
}

export function geraAtivaDesenho(estado){
    return {
        type: ATIVA_DESENHO,
        estado: estado
    }
}

export function geraFinalizaDesenho(){
    return {
        type: FINALIZA_DESENHO
    }
}