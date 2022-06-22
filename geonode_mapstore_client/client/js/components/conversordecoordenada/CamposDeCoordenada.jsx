import React, { useState, useEffect } from "react";

import MensagemDeErro from './MensagemDeErro';

// Componente com os campos de coordenada, muda conforme o formato de coordenada muda.
const CamposDeCoordenada = (props) => {
    const [mostraErro, setMostraErro] = useState([false, false]);
    const [validaAgora, setValidaAgora] = useState(false); // usado para validar o campo select imediatamente (qualidade de vida)

    // Valida o campo do input e so depois faz alteracao no estado do plugin
    const validaEMuda = () =>{
        let valido = props.valida(props.coordenadas, props.formato);
        if (valido[0] === true && valido[1] === true) {
            let aux = props.voltaCoordenada(props.coordenadas, props.formato, props.datum);
            props.mudaEstadoGlobal(aux[0], aux[1]);
            setMostraErro(false, false);
        } else {
            setMostraErro([!valido[0], !valido[1]]);
        }
    };

    useEffect(() => {
        setMostraErro([false, false]);
    }, [props.formato]);

    useEffect(() => {
        validaEMuda();
    }, [validaAgora]);

    // retorna o campo certo a ser mostrado e e acompanhado de mensagens de erro caso a validacao de errado
    switch (props.formato) {
    case "gDecimal":
        return (<>
            <tr>
                <label>
                    Lat:
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> °
                </label>
            </tr>
            <MensagemDeErro mostraErro={mostraErro[1]} texto="Latitude inválida."/>
            <tr>
                <label>
                    Lon:
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> °
                </label>
            </tr>
            <MensagemDeErro mostraErro={mostraErro[0]} texto="Longitude inválida."/></>);
    case "gMinutoSegundo":
        return (<>
            <tr>
                <label>
                    Lat:
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[3]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 3) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={3}
                    /> °
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[4]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 4) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={2}
                    /> '
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[5]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 5) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> "
                </label>
            </tr>
            <MensagemDeErro mostraErro={mostraErro[1]} texto="Latitude inválida."/>
            <tr>
                <label>
                    Lon:
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={4}
                    /> °
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={2}
                    /> '
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[2]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 2) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> "
                </label>
            </tr>
            <MensagemDeErro mostraErro={mostraErro[0]} texto="Longitude inválida."/></>);
    case "gMinutoDecimal":
        return (<>
            <tr>
                <label>
                    Lat:
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[2]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 2) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={3}
                    /> °
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[3]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 3) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> '
                </label>
            </tr>
            <MensagemDeErro mostraErro={mostraErro[1]} texto="Latitude inválida."/>
            <tr>
                <label>
                    Lon:
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={4}
                    /> °
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                    /> '
                </label>
            </tr>
            <MensagemDeErro mostraErro={mostraErro[0]} texto="Longitude inválida."/></>);
    case "utm":
        return (<>
            <tr>
                <label>
                    Lat:
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[1]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 1) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={9}
                    />
                </label>
            </tr>
            <MensagemDeErro mostraErro={mostraErro[1]} texto="Latitude inválida."/>
            <tr>
                <label>
                    Lon:
                    <input className="forms-de-coordenada"
                        type="text"
                        value={props.coordenadas[0]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 0) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={9}
                    />
                </label>
            </tr>
            <MensagemDeErro mostraErro={mostraErro[0]} texto="Longitude inválida."/>
            <tr>
                <label>
                    Fuso:
                    <input
                        style={{ width: "5ch", marginRight: "3px"}}
                        type="text"
                        value={props.coordenadas[2]}
                        onChange={event => props.setCoordenadas(props.coordenadas.map((a, i) => (i === 2) ? event.target.value : a))}
                        onBlur={validaEMuda}
                        maxLength={2}
                    />
                    <select
                        value={props.coordenadas[3]}
                        onChange={event => {
                            props.setCoordenadas(props.coordenadas.map((a, i) => (i === 3) ? event.target.value : a));
                            setValidaAgora(!validaAgora);
                        }}>
                        <option value="N">N</option>
                        <option value="S">S</option>
                    </select>
                </label>
            </tr></>);
    default:
        return <p>erro</p>;
    }
};

export default CamposDeCoordenada;
