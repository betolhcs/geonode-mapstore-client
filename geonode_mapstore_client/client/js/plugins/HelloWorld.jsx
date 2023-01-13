import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import helloworld from '../reducers/helloworld';
import helloworldEpics from '../epics/helloworld';
import { geraAumentaContador, geraDiminuiContador } from "../actions/helloworld";

// Componentes podem ser feitos tanto no formato de funcao quanto de classe.
class HelloWorldComponent extends React.Component { // Componente react em formato de classe
    static propTypes = { // validação de dados externos passados ao componente
        contador: PropTypes.number,
        aumenta: PropTypes.func,
        diminui: PropTypes.func
    };

    render() { // Função que retorna o componente que será renderizado na tela
        let teste = "Hello World!";

        const somarDois = (numero) => {
            return numero + 2;
        }

        const handleBotao = (event) => {
            event.preventDefault(); // Impede o comportamento padrão do botão de enviar um request
            this.props.aumenta(3);
            console.log(this.props.contador);
        };

        // html do componente(escrito em JSX)
        return (<div className="hello-world" style={{zIndex: 1101, left: "400px", bottom: "300px", position: "absolute"}}>
            <p style={{color: "blue", fontSize: "16px"}}>{teste}</p>
            <button type="button" onClick={handleBotao}>Mostra Contador</button>
        </div>);
    }
}

const HelloWorldConectado = connect((state) => { // Conecta o componente ao estado da aplicação no formato redux store
    let variavel = get(state, 'helloworld.contador');

    return { // Informações do estado global relevantes ao plugin
        contador: variavel
    };
},
{ // Acoes usadas pelo plugin
    aumenta: geraAumentaContador,
    diminui: geraDiminuiContador
})(HelloWorldComponent);

export const HelloWorldPlugin = HelloWorldConectado; // exporta o componente conectado
export const reducers = {helloworld};
export const epics = helloworldEpics;
