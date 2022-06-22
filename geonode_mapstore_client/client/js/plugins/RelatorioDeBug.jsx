import React, { useState, useRef } from "react"; // useEffect,
// import { Glyphicon } from 'react-bootstrap';
import { connect } from 'react-redux';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';
import html2canvas from 'html2canvas';
import { saveAs } from 'file-saver';
import Draggable from 'react-draggable';

import './relatoriodebug/style/relatoriodebug.css';


const PrimeiraParte = (props) => {
    const [texto, setTexto] = useState("");
    const [habilitado, setHabilitado] = useState(false);
    const tooltipLida = useRef(false); // Guardar em alguma variavel de estado redux
    // INFORMACAO DE CAMADAS TA EM layers no state
    // INFORMACAO DE USUARIO TA EM security no state
    // INFORMACAO DE LOCALIZACAO NO MAPA

    const handleReport = (event) => {
        event.preventDefault();
        let relatorio = {
            idDoMapa: props.id,
            usuario: props.usuario,
            camadasCarregadas: props.camadas,
            camadasVisiveis: props.camadasAtivas,
            linkAtual: window.location.href,
            descricaoDoProblema: texto,
            centroDoMapa: props.centro,
            zoomDoMapa: props.zoom
        };
        // console.log(relatorio);
        html2canvas(document.body, { useCORS: true }).then(canvas => {
            canvas.toBlob((blob) => saveAs(blob, 'screenshot.jpeg'), 'image/jpeg', 0.95); // toDataURL('image/png', 1.0);
        });
        // request
    };

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
                    )} placement="bottom" defaultOverlayShown={!tooltipLida.current} delayShow={600} onExit={() => {tooltipLida.current = true;}} >
                        <button type="button" className="botao-iniciar" onClick={() => setHabilitado(true)}>
                            <img className="imagem-bug" src="../../static/mapstore/img/RelatorioDeBugPlugin/bug.svg" draggable="false"/>
                        </button>
                    </OverlayTrigger>
                </tr></>)
                }
            </tbody>
        </table>
    </div>);
};


class RelatorioDeBugComponent extends React.Component {
    static propTypes = { // validação de dados do componente
        usuario: PropTypes.string,
        camadasAtivas: PropTypes.array,
        camadas: PropTypes.array,
        id: PropTypes.number,
        zoom: PropTypes.number,
        centro: PropTypes.array
    };

    render() {
        return (
            <Draggable>
                <div>
                    <PrimeiraParte {...this.props}/>
                </div>
            </Draggable>
        );
    }
}

const RelatorioDeBugConectado = connect((state) => { // Conecta o componente ao estado da aplicação no formato redux store
    let mapInfo = mapInfoSelector(state);
    let usuario = get(state, 'security.user');
    let camadas = get(state, 'layers.flat');

    // console.log(state);
    return {
        usuario: usuario === null ? "Usuario não logado" : usuario.username,
        camadas: camadas === undefined ? null : camadas,
        camadasAtivas: camadas === undefined ? null : camadas.filter((elemento) => elemento.visibility),
        id: camadas === undefined ? null : mapInfo.id,
        zoom: camadas === undefined ? null : get(state, 'map.present.zoom'),
        centro: camadas === undefined ? null : [get(state, 'map.present.center.x'), get(state, 'map.present.center.y')]
    };
})(RelatorioDeBugComponent);

export const RelatorioDeBugPlugin = RelatorioDeBugConectado;
