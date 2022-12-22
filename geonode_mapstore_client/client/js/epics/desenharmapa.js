import Rx from 'rxjs';

import { CLICK_ON_MAP } from '@mapstore/framework/actions/map';
import { SET_CONTROL_PROPERTY, setControlProperty } from '@mapstore/framework/actions/controls';
import { closeFeatureGrid } from '@mapstore/framework/actions/featuregrid';
import {
    toggleMapInfoState,
    changeMapInfoState,
    purgeMapInfoResults,
    hideMapinfoMarker,
    TOGGLE_MAPINFO_STATE
} from '@mapstore/framework/actions/mapInfo';
import uuidv1 from 'uuid/v1';
import { addLayer, removeLayer } from '@mapstore/framework/actions/layers';
import { toLonLat } from 'ol/proj';


import { geraFechaPoligono, geraAdicionaPonto, geraAtivaDesenho, ATIVA_DESENHO, ADICIONA_PONTO, FECHA_POLIGONO, FINALIZA_DESENHO } from '../actions/desenharmapa';
import { DEFAULT_ANNOTATIONS_STYLES } from '@mapstore/framework/utils/AnnotationsUtils'
import { validateFeatureCoordinates } from '@mapstore/framework/utils/MeasureUtils'
import { changeDrawingStatus } from '@mapstore/framework/actions/draw';

function criaFeatureDoPoligono(coordenadas) {
    return {
        "type": "FeatureCollection",
        "features": [
            {
                "type": "Feature",
                "geometry": {
                    "type": "Polygon",
                    "coordinates": [
                        coordenadas
                    ]
                },
                "properties": {
                    "id": uuidv1(),
                    "isValidFeature": true,
                    "geometryGeodesic": null,
                    "useGeodesicLines": false,
                },
                "style": [
                    {
                        "color": "#ff0000",
                        "opacity": 1,
                        "weight": 3,
                        "fillColor": "#ffffff",
                        "fillOpacity": 0.2,
                        "markerColor": "#fff",
                        "editing": {
                            "fill": 1
                        },
                        "type": "Polygon",
                        "id": uuidv1(),
                        "geometry": null,
                        "title": "Polygon Style",
                        "filtering": true
                    }
                ]
            }
        ],
        "properties": {
            "id": uuidv1(),
            "type": "Polygon",
            "title": "PoligonoPedidoDeImagem"
        },
        "style": {}
    };
}

function checaOrientacao(coordenadas) {
    let area = 0;
    for (let i = 0; i < coordenadas.length - 1; i++) {
        const subarea = (coordenadas[i+1][0]-coordenadas[i][0])*(coordenadas[i+1][1]+coordenadas[i][1]);
        area += subarea;
    }
    if (area < 0) {
        return false // sentido anti-horario CORRETO
    }
    return true // Sentido horario ERRADO
}


// Move o marcador de um ponto ao outro.
export const desenhaPoligEpic = (action$, store) =>
    action$.ofType(FINALIZA_DESENHO)
        .switchMap((action) => {
            let coordenadas = store.getState().draw.features[0].coordinates[0].map((a) => toLonLat(a));
            coordenadas.push(coordenadas[0])
            if (checaOrientacao(coordenadas)) { // Caso seja necessario troque a ordem das coordenadas
                coordenadas.reverse()
            }
            return Rx.Observable.of(geraFechaPoligono(coordenadas) , removeLayer("PedidoDeImagem"),
                addLayer({
                    "type": "vector",
                    "id": "PedidoDeImagem",
                    "name": "PoligonoDeImagem",
                    "hideLoading": true,
                    "features": [criaFeatureDoPoligono(coordenadas)],
                    "visibility": true
                }),
                changeDrawingStatus("clean", "", "desenharmapa", [], {})
            );
        });

// // fecha o conversor de coordenada quando abre o plugin de measure
// export const fechaPluginQuandoMeasureAbreEpic = (action$) =>
//     action$.ofType(SET_CONTROL_PROPERTY)
//         .filter((action) => action.control === "measure" && action.value)
//         .switchMap(() => {
//             return Rx.Observable.of(geraDefineAtivacao(false), removeLayer("ConversorDeCoordenada"), changeMapInfoState(true));
//         });

// funcao que fecharia os outros plugins ao abrir o conversor e remove os marcadores caso esteja fechando o plugin
export const configuraAtivaDesativaEpic = (action$, store) =>
    action$.ofType(ATIVA_DESENHO)
        .switchMap(() => {
            return Rx.Observable.of(
                closeFeatureGrid(),
                purgeMapInfoResults(),
                hideMapinfoMarker(),
                changeMapInfoState(false),
                setControlProperty("measure", "enabled", false),
                changeDrawingStatus("start", "Polygon", "desenharmapa", [], {geodesic: true, stopAfterDrawing: true})
            );
        });

export default {
    desenhaPoligEpic,
    configuraAtivaDesativaEpic
};
