import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { panTo, changeZoomLevel } from '@mapstore/framework/actions/map';

// Inicializa o mapa no ponto certo a partir das informacoes obtidas na query string
const Inicializa = ({ centraliza, mudaZoom }) => {
    const params = new URLSearchParams(window.location.search);
    let center = params.get('center').split(',').map((a) => Number(a));
    let zoom = Number(params.get('zoom'));

    useEffect(() => {
        centraliza(center);
        mudaZoom(zoom);
    }, []);

    return (<></>);
};

class LinkExpandidoComponent extends React.Component {
    static propTypes = { // validação de dados do componente
        centraliza: PropTypes.func,
        mudaZoom: PropTypes.func
    };

    render() {
        return (<Inicializa centraliza={this.props.centraliza} mudaZoom={this.props.mudaZoom}/>);
    }
}

const LinkExpandidoConectado = connect(null, {
    centraliza: panTo,
    mudaZoom: changeZoomLevel
})(LinkExpandidoComponent);

export const LinkExpandidoPlugin = LinkExpandidoConectado;
