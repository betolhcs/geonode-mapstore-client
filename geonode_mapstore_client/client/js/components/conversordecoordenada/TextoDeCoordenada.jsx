import React from 'react';

// Componente com as coordenadas formatadas de maneira elegante
const TextoDeCoordenada = ({ formato, datum, coordenadas }) => {
    let texto;
    
    switch (formato) {
    case "gDecimal":
        texto = `${Math.abs(coordenadas[1])}º${(coordenadas[1] >= 0) ? 'N' : 'S'} ${Math.abs(coordenadas[0])}º${(coordenadas[0] >= 0) ? 'E' : 'W'}`;
        break;
    case "gMinutoSegundo":
        texto = `${Math.abs(coordenadas[3])}º${coordenadas[4]}'${coordenadas[5]}"${(coordenadas[3] >= 0) ? 'N' : 'S'} ${Math.abs(coordenadas[0])}º${coordenadas[1]}'${coordenadas[2]}"${(coordenadas[0] >= 0) ? 'E' : 'W'}`;
        break;
    case "gMinutoDecimal":
        texto = `${Math.abs(coordenadas[2])}º${coordenadas[3]}'${(coordenadas[2] >= 0) ? 'N' : 'S'} ${Math.abs(coordenadas[0])}º${coordenadas[1]}'${(coordenadas[0] >= 0) ? 'E' : 'W'}`;
        break;
    case "utm":
        texto = `UTM fuso ${coordenadas[2]} ${(coordenadas[3] === 'N') ? "Norte" : "Sul"} ${coordenadas[0]} ${coordenadas[1]}`;
        break;
    }

    switch (datum) {
    case "projsirgas":
        texto += " datum SIRGAS 2000";
        break;
    case "projsad69":
        texto += " datum SAD 69";
        break;
    case "projcorregoalegre":
        texto += " datum Córrego Alegre";
        break;
    case "projsicad":
        texto += " datum Astro Chuá";
        break;
    }

    return (<>
        <tr>
            <p>{texto.replaceAll(".", ",")}</p>
        </tr>
    </>);
}

export default TextoDeCoordenada;
