import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';
import html2canvas from 'html2canvas';
import { saveAs } from "file-saver";

import './relatoriodebug/style/relatoriodebug.css';


const PrimeiraParte = (props) => {
    // INFORMACAO DE CAMADAS TA EM layers no state
    // INFORMACAO DE USUARIO TA EM security no state
    const handleScreenshot = (event) => { // exporta o ponto como kml
        event.preventDefault();
        // html2canvas(document.body, {useCORS: true, allowTaint: true}).then(canvas => {
        //     canvas.toBlob((blob) => saveAs(blob, 'exported-vis.jpeg'), 'image/jpeg', 0.95) // toDataURL('image/png', 1.0);
        // });
    };

    const handleReport = (event) => {
        event.preventDefault();
        console.log(props.usuario);
        console.log(props.camadas);
        console.log(props.camadasAtivas);
        html2canvas(document.body, {allowTaint: true, useCORS: true}).then(canvas => {
            canvas.toBlob((blob) => saveAs(blob, 'exported-vis.jpeg'), 'image/jpeg', 0.95) // toDataURL('image/png', 1.0);
        });
    }

    return (<div>
        <p>TESTE</p>
        <button type="button" className="botoes-do-plugin" onClick={handleReport}>Reportar Bug</button>
        <button type="button" className="botoes-do-plugin" onClick={handleScreenshot}>Screenshot</button>
    </div>);
}



class RelatorioDeBugComponent extends React.Component {
    static propTypes = { // validação de dados do componente
        zoom: PropTypes.number,
        x: PropTypes.number,
        y: PropTypes.number,
        ne: PropTypes.array,
        sw: PropTypes.array,
        id: PropTypes.number
    };

    // Gera todos os links externos nas coordenadas e zoom certos
    render() {

        // html do componente
        return (<div className="aaah">
            <PrimeiraParte usuario={this.props.usuario} camadas={this.props.camadas} camadasAtivas={this.props.camadasAtivas}/>
        </div>);
    }
}

const RelatorioDeBugConectado = connect((state) => { // Conecta o componente ao estado da aplicação no formato redux store
    var mapInfo = mapInfoSelector(state);
    var usuario = get(state, 'security.user');
    var camadas = get(state, 'layers.flat');
    var camadasAtivas = camadas.filter((elemento) => elemento.visibility);

    console.log(state);
    return {
        usuario: usuario===null ? "Usuario não logado" : usuario.username,
        camadas: camadas,
        camadasAtivas: camadasAtivas,
        id: mapInfo.id,
    };
})(RelatorioDeBugComponent);

export const RelatorioDeBugPlugin = RelatorioDeBugConectado;
