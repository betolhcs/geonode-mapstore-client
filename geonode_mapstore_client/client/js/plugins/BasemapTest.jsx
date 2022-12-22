import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import { get } from 'lodash';

// Actions usadas pelo background selector para mudar o background
import { setCurrentBackgroundLayer } from '@mapstore/framework/actions/backgroundselector';
import { toggleControl } from '@mapstore/framework/actions/controls';
import { changeLayerProperties, addLayer, removeLayer } from "@mapstore/framework/actions/layers";


const PlanetSelector = (props) => {
    const [listaDeBasemaps, setListaDeBasemaps] = useState([]);
    const [listaDeLinks, setListaDeLinks] = useState([]);
    const [basemapSelector, setBasemapSelector] = useState("Adicionar uma camada");

    useEffect(() => {
        axios.get("http://localhost:8001/teste/planetbasemap/").then((response) => {
            setListaDeBasemaps(response.data.map((e) => e.titulo));
            setListaDeLinks(response.data.map((e) => e.url.replace("TileMatrix", "z").replace("TileCol", "x").replace("TileRow", "y")));
        });
    }, []);

    const adicionaBasemap = (i) => {
        props.removeLayer("PlanetBasemap" + i);
        props.addLayer({
            "source": "wmts",
            "type": "tileprovider",
            "name": listaDeBasemaps[i],
            "title": listaDeBasemaps[i],
            "format": "image/png",
            "provider": "custom",
            "id": "PlanetBasemap" + i,
            "url": listaDeLinks[i],
            // "group": "background",
            "visibility": true
        });
        // idPlanet.current = i;
    };

    const handleMudaBase = (event) => {
        // setBasemapSelector(event.target.value);
        adicionaBasemap(event.target.value);
    };

    return (<>
        <form>
            <table><tbody>
                <tr>
                    <label htmlFor="planet-basemap-selector">Basemaps Planet</label>
                </tr>
                <tr>
                    <select value={"Adicionar Mosaico Planet"} onChange={handleMudaBase} name="planet-basemap-selector">
                        {listaDeBasemaps.map((titulo, i) => <option value={i}>{titulo}</option> )}
                    </select>
                </tr>
            </tbody></table>
        </form>
    </>);
};

const selectorStyle = {
    position: "absolute",
    bottom: "175px",
    background: "rgba(255, 255, 255, 0.75)",
    padding: "5px",
    borderRadius: "8px"
};

class BasemapTestComponent extends React.Component {
    render() {
        return (this.props.userToken ? <div style={{...selectorStyle, left: this.props.layerDrawer ? "305px" : "5px"}}><PlanetSelector {...this.props}/></div> : null);
    }
}

BasemapTestComponent.propTypes = {
    addLayer: PropTypes.func,
    removeLayer: PropTypes.func
};

const BasemapTestConectado = connect((state) =>{
    let userObject = get(state, 'security.user');
    return {
        user: userObject,
        userToken: userObject ? get(state, 'security.token') : null,
        layerDrawer: get(state, 'controls.drawer.enabled')
    };
},
{
    addLayer,
    removeLayer
})(BasemapTestComponent);

export const BasemapTestPlugin = BasemapTestConectado;
