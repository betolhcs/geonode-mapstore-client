import WKT from 'ol/format/WKT';
import GeoJSON from 'ol/format/GeoJSON';

import {
    ALTERNA_ATIVACAO_FORMULARIO,
    DEFINE_ATIVACAO_FORMULARIO,
    INICIA_DESENHO,
    FINALIZA_DESENHO
} from '../actions/formulario';


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


const defaultState = {
    enabled: false,
    desenhar: false,
    wkt_poligono: "",
    visivel: false
};

export default function (state = defaultState, action) { // colocar default state
    switch (action.type) {
        case DEFINE_ATIVACAO_FORMULARIO:
            return {
                ...state,
                enabled: action.ativado,
                visivel: action.ativado,
                wkt_poligono: ""
            };
        case ALTERNA_ATIVACAO_FORMULARIO:
            return {
                ...state,
                enabled: !state.enabled,
                visivel: !state.enabled,
                wkt_poligono: ""
            };
        case FINALIZA_DESENHO:
            let GeoReader = new GeoJSON()
            let WKTReader = new WKT()
            let aux = GeoReader.readFeature(criaFeatureDoPoligono(action.coordenadas))
            return{
                ...state,
                desenhar: false,
                visivel: true,
                wkt_poligono: WKTReader.writeFeature(aux, {decimals: 6})
            }
        case INICIA_DESENHO:
            return{
                ...state,
                desenhar: true,
                visivel: false,
                wkt_poligono: ""
            }
        default:
            return state;
    }
}
