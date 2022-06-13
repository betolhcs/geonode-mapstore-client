import React, { useState, useEffect, useRef } from "react";
// import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Tooltip } from 'react-bootstrap'
import { OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';
import html2canvas from 'html2canvas';
import { saveAs } from "file-saver";

import './relatoriodebug/style/relatoriodebug.css';


const PrimeiraParte = (props) => {
    const [texto, setTexto] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const tooltipLida = useRef(false) // Guardar em alguma variavel de estado redux
    // INFORMACAO DE CAMADAS TA EM layers no state
    // INFORMACAO DE USUARIO TA EM security no state

    const handleReport = (event) => {
        event.preventDefault();
        console.log(props.usuario);
        console.log(props.camadas);
        console.log(props.camadasAtivas);
        console.log(texto);
        console.log(window.location.href);
        html2canvas(document.body, {useCORS: true, allowTaint: true}).then(canvas => {
            canvas.toBlob((blob) => saveAs(blob, 'screenshot.jpeg'), 'image/jpeg', 0.95) // toDataURL('image/png', 1.0);
        });
    }

    return (<div className={!habilitado ? "div-minimo" : "div-grande"} data-html2canvas-ignore="true">
        <table>
            <tbody>
                {(habilitado) ? (<>
                    <tr>
                        <button className="fechar" type="button" onClick={() => setHabilitado(false)}> X </button>
                    </tr>
                    <tr>
                        <p>Descreva o problema:</p> 
                    </tr>
                    <tr>
                        <textarea
                            value={texto}
                            className={"formulario-de-bug"}
                            onChange={event => setTexto(event.target.value)}
                        />
                    </tr>
                    <tr>
                        <button type="button" className="botoes-do-plugin" onClick={handleReport}>Reportar Bug</button>
                    </tr></>) : (<><tr>
                        <OverlayTrigger overlay={(
                            <Tooltip>
                                Encontrou algum problema? Nos informe!
                            </Tooltip>
                        )} placement="bottom" defaultOverlayShown={!tooltipLida.current} delayShow={600} onExit={() => tooltipLida.current = true} >
                            <button type="button" className="botao-iniciar" onClick={() => setHabilitado(true)}>
                                <img className="imagem-bug" src="../../static/mapstore/img/RelatorioDeBugPlugin/bug.svg"></img>
                            </button>
                        </OverlayTrigger>
                    </tr></>)
                    }
            </tbody>
        </table>
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
        return (<div>
            <PrimeiraParte usuario={this.props.usuario} camadas={this.props.camadas} camadasAtivas={this.props.camadasAtivas}/>
        </div>);
    }
}

const RelatorioDeBugConectado = connect((state) => { // Conecta o componente ao estado da aplicação no formato redux store
    var mapInfo = mapInfoSelector(state);
    var usuario = get(state, 'security.user');
    var camadas = get(state, 'layers.flat');
    var camadasAtivas = camadas.filter((elemento) => elemento.visibility);

    // console.log(state);
    return {
        usuario: usuario === null ? "Usuario não logado" : usuario.username,
        camadas: camadas,
        camadasAtivas: camadasAtivas,
        id: mapInfo.id,
    };
})(RelatorioDeBugComponent);

export const RelatorioDeBugPlugin = RelatorioDeBugConectado;
