import React, { useEffect, useState, useRef } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';

// Actions usadas pelo background selector para mudar o background
import { setCurrentBackgroundLayer } from '@mapstore/framework/actions/backgroundselector';
import { toggleControl } from '@mapstore/framework/actions/controls';
import { changeLayerProperties, addLayer, removeLayer } from "@mapstore/framework/actions/layers";


const PlanetSelector = (props) => {
    const [listaDeBasemaps, setListaDeBasemaps] = useState([]);
    const [listaDeLinks, setListaDeLinks] = useState([]);
    const [basemapSelector, setBasemapSelector] = useState("Nenhum");

    const idPlanet = useRef(0); // Para conseguir fazer a mudança entre basemaps planet mantendo sempre apenas um

    useEffect(() => {
        axios.get("http://localhost:8001/teste/planetbasemap/").then((response) => {
            setListaDeBasemaps(response.data.map((e) => e.titulo));
            setListaDeLinks(response.data.map((e) => e.url.replace("TileMatrix", "z").replace("TileCol", "x").replace("TileRow", "y")));
        });
    }, []);

    const adicionaBasemap = (i) => {
        props.removeLayer("PlanetBasemap" + idPlanet.current);
        props.addLayer({ // Estrutura padrao de basemap retirada do settings.py do geonode project
            "source": "wmts",
            "type": "tileprovider",
            "name": listaDeBasemaps[i],
            "title": listaDeBasemaps[i],
            "format": "image/png",
            "provider": "custom",
            "id": "PlanetBasemap" + i,
            "url": listaDeLinks[i],
            "group": "background",
            "visibility": false
        });
        idPlanet.current = i;
    };

    const mudaBasemap = (map) => {
        props.toggleControl.bind(null, 'backgroundSelector', null);
        props.changeLayerProperties(map, {visibility: true});
        props.setCurrentBackgroundLayer(map);
    };

    const handleMudaBase = (event) => {
        if (event.target.value !== "Nenhum") {
            setBasemapSelector(event.target.value);
            adicionaBasemap(event.target.value);
            mudaBasemap("PlanetBasemap" + idPlanet.current);
        } else { // Remove planet e volta para o basemap padrao
            setBasemapSelector("Nenhum");
            props.removeLayer("PlanetBasemap" + idPlanet.current);
            mudaBasemap("mapnik__0"); // basemap padrao
        }
    };

    return (<>
        <form>
            <table><tbody>
                <tr>
                    <label htmlFor="planet-basemap-selector">Basemaps Planet</label>
                </tr>
                <tr>
                    <select value={basemapSelector} onChange={handleMudaBase} name="planet-basemap-selector">
                        <option value="Nenhum">Nenhum</option>
                        {listaDeBasemaps.map((titulo, i) => <option value={i}>{titulo}</option> )}
                    </select>
                </tr>
            </tbody></table>
        </form>
    </>);
};

class BasemapTestComponent extends React.Component {
    render() {
        return (<div style={{position: "absolute", bottom: "175px", left: "5px", background: "rgba(255, 255, 255, 0.75)", padding: "5px", borderRadius: "8px"}}><PlanetSelector {...this.props}/></div>);
    }
}

BasemapTestComponent.propTypes = {
    setCurrentBackgroundLayer: PropTypes.func,
    toggleControl: PropTypes.func,
    changeLayerProperties: PropTypes.func,
    addLayer: PropTypes.func,
    removeLayer: PropTypes.func
};

const BasemapTestConectado = connect(null, {
    setCurrentBackgroundLayer,
    toggleControl,
    changeLayerProperties,
    addLayer,
    removeLayer
})(BasemapTestComponent);

export const BasemapTestPlugin = BasemapTestConectado;
