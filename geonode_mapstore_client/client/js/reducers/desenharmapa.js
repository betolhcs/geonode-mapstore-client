import {
    ADICIONA_PONTO,
    FECHA_POLIGONO,
    ATIVA_DESENHO
} from '../actions/desenharmapa';

import WKT from 'ol/format/WKT';
import GeoJSON from 'ol/format/GeoJSON';
import { ALTERNA_VISIBILIDADE_DESENHO } from '../actions/formulario';

const defaultState = {
    contador: 0,
    enabled: false,
    poligono: [],
    wkt: ""
};

function criaFeatureDoPoligono(coordenadas) {
    return {
        "type": "Feature",
        "geometry": {
            "type": "Polygon",
            "coordinates": [
                coordenadas
            ]
        }
    }
}

export default function(state = defaultState, action) { // colocar default state
    switch (action.type) {
    case ADICIONA_PONTO:
        state.poligono.push([action.x, action.y])
        return {
            ...state,
            contador: state.contador+=1,
        };
    case FECHA_POLIGONO:
        let GeoReader = new GeoJSON()
        let WKTReader = new WKT()
        let aux = GeoReader.readFeature(criaFeatureDoPoligono(action.coordenadas))
        return {
            ...state,
            poligono: action.coordenadas.concat([action.coordenadas[0]]),
            // wkt: "POLYGON(" + texto[0] + ', ' 
            wkt: WKTReader.writeFeature(aux, {decimals: 6})
        };
    case ATIVA_DESENHO:
        return {
            ...state,
            // enabled: !state.enabled
            // enabled: action.estado
        }
    case ALTERNA_VISIBILIDADE_DESENHO:
        return
    default:
        return state;
    }
}