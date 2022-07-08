import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';


// O componente visual foi definido no geonode project no template (base.html) para que funcione globalmente na aplicacao.
const DisponibilizaInformacao = (props) => {
    window.ReduxRelBug = {};
    window.ReduxRelBug.idDoMapa = props.id;
    window.ReduxRelBug.camadasCarregadas = props.camadas;
    window.ReduxRelBug.camadasVisiveis = props.camadasAtivas;
    window.ReduxRelBug.localizacaoNoMapa = props.centro;
    window.ReduxRelBug.zoomDoMapa = props.zoom;

    return (null);
};


class RelatorioDeBugComponent extends React.Component {
    static propTypes = { // validação de dados do componente
        camadasAtivas: PropTypes.array,
        camadas: PropTypes.array,
        id: PropTypes.number,
        zoom: PropTypes.number,
        centro: PropTypes.array
    };

    render() {
        return (<DisponibilizaInformacao {...this.props}/>);
    }
}

const RelatorioDeBugConectado = connect((state) => { // Conecta o componente ao estado da aplicação no formato redux store
    let mapInfo = mapInfoSelector(state);
    let camadas = get(state, 'layers.flat');

    return {
        camadas: camadas === undefined ? null : camadas,
        camadasAtivas: camadas === undefined ? null : camadas.filter((elemento) => elemento.visibility),
        id: camadas === undefined ? null : mapInfo.id,
        zoom: camadas === undefined ? null : get(state, 'map.present.zoom'),
        centro: camadas === undefined ? null : [get(state, 'map.present.center.x'), get(state, 'map.present.center.y')]
    };
})(RelatorioDeBugComponent);

export const RelatorioDeBugPlugin = RelatorioDeBugConectado;
