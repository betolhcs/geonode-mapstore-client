import React from "react";
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import InputMask from 'react-input-mask';

import assign from 'object-assign';

// Codigo desenvolvido para o plugin
import './formulario/style/formulario.css';
import formulario from '../reducers/formulario';
import formularioEpics from '../epics/formulario';
import MensagemDeErro from "../components/conversordecoordenada/MensagemDeErro";
import { geraAlternaAtivacao, geraIniciaDesenho, geraFinalizaDesenho } from "../actions/formulario";
import { createPlugin } from '@mapstore/framework/utils/PluginsUtils';


const BotaoTeste = ({ alternaAtivacao }) => {
    const teste = (e) => {
        e.preventDefault
        alternaAtivacao
    }

    return (<>
        <button onClick={teste}>
            P
        </button>
    </>);
};



// Componente com o formulário
class FormularioComponent extends React.Component {


    constructor(props) {
        super(props);
        this.props = props;
        this.state = { 'nome': '' }
        this.state = { 'unidade': '' }
        this.state = { 'email': '' }
        this.state = { 'telefone': '' }
        this.state = { 'finalidade': '' }
        this.state = { 'justificativa': '' }
        this.state = { 'resolucaoCentimetros': '' }
        this.state = { 'intervaloDeImageamentoInicio': '' }
        this.state = { 'intervaloDeImageamentoFim': '' }
        this.state = { 'mostraAviso': false }
        this.state = { 'mensagemDeAviso': '' }

        this.state = { 'custoEstimadoDoPedido': '' }
        this.state = { 'geom': '' }
        this.state = { 'statusDoPedido': false}
    }

    handleChangeIntervaloInicio = (e) => {
        this.setState({ intervaloDeImageamentoInicio: e.target.value });
    }
    handleChangeIntervaloFim = (e) => {
        this.setState({ intervaloDeImageamentoFim: e.target.value });
    }
    handleChangeResolucao = (e) => {
        this.setState({ resolucaoCentimetros: e.target.value });
    }
    handleChangeJustificativa= (e) => {
        this.setState({ justificativa: e.target.value });
    }
    handleChangeNome = (e) => {
        this.setState({ nome: e.target.value });
    }
    handleChangeUnidade = (e) => {
        this.setState({ unidade: e.target.value });
    }
    handleChangeEmail = (e) => {
        this.setState({ email: e.target.value });
    }
    handleChangeTelefone = (e) => {
        this.setState({ telefone: e.target.value });
    }
    handleChangeResolucao = (e) => {
        this.setState({ resolucaoCentimetros: e.target.value });
    }
    handleSelect = (e) => {
        this.setState({ finalidade: e.target.value });
    }

    handleDesenhar = (e) => {
        e.preventDefault();
        this.props.iniciaDesenho();
    }

    handleSubmit = (event) => {
        // alert('O pedido foi enviado: ');
        event.preventDefault();
        axios.post("https://httpbin.org/status/400", {
            interessado: {
                nome: (this.state.nome !== "") ? this.state.nome : null,
                unidade: (this.state.unidade !== "") ? this.state.unidade : null,
                email: (this.state.email !== "") ? this.state.email : null,
                telefone: (this.state.telefone !== "") ? this.state.telefone : null
            },
            intervaloDeImageamento: [this.state.intervaloDeImageamentoInicio, this.state.intervaloDeImageamentoFim], // Tem q ter 2 datas, inicio e fims
            justificativa: this.state.justificativa,
            resolucaoCentimetros: (this.state.resolucaoCentimetros !== "") ? this.state.resolucaoCentimetros : null, // <300 >5, colocar uma tooltip
            finalidade: this.state.finalidade,
            geom: (this.props.poligono !== "") ? this.props.poligono : null
        }).then((r) => {
            console.log("Teste")
            if (r.status === 200) {
                this.setState(
                    { mostraAviso: true, mensagemDeAviso: "Seu pedido foi realizado com sucesso.", statusDoPedido: true},
                    () => setTimeout(() => this.setState({ mostraAviso: false, mensagemDeAviso: ""}), 2000)
                );
            }
        }).catch((e) => {
            if (e.response){
                if (e.response.status === 400) {
                    this.setState({ mostraAviso: true, mensagemDeAviso: e.response.data.detail, statusDoPedido: false});
                }
                if (e.response.status === 422) {
                    this.setState({ mostraAviso: true, mensagemDeAviso: "Valores inválidos.", statusDoPedido: false});
                }
            } else if(e.request){
                console.log(e.message)
            } else if(e.message){
                console.log(e.message)
            } else {
                console.log(e)
            }
        });




        // event.preventDefault();
        // console.log(JSON.stringify({
        //     interessado: {
        //         nome: this.state.nome,
        //         unidade: this.state.unidade,
        //         email: this.state.email,
        //         telefone: this.state.telefone
        //     },
        //     intervaloDeImageamento: [this.state.intervaloDeImageamentoInicio, this.state.intervaloDeImageamentoFim], // Tem q ter 2 datas, inicio e fim
        //     justificativa: this.state.justificativa,
        //     resolucaoCentimentros: this.state.resolucaoCentimetros, // <300 >5, colocar uma tooltip
        //     finalidade: this.state.finalidade,
        //     geom: this.props.poligono
        // }))
        // this.setState({ mostraAviso: !this.state.mostraAviso, mensagemDeAviso: "teste"})
        // fetch(this.props.formAction, {
            // headers: {
                // 'Accept': 'application/json',
                // 'Content-Type': 'application/json'
            // },
            // body: JSON.stringify({
                // interessado: {
                    // nome: this.state.nome,
                    // unidade: this.state.unidade,
                    // email: this.state.email,
                    // telefone: this.state.telefone
                // },
                // intervaloDeImageamento: [this.state.intervaloDeImageamentoInicio, this.state.intervaloDeImageamentoFim], // Tem q ter 2 datas, inicio e fim
                // justificativa: this.state.justificativa,
                // resolucaoCentimentros: this.state.resolucaoCentimetros, // <300 >5, colocar uma tooltip
                // finalidade: this.state.finalidade,
                // geom: this.props.poligono
            // })
        // });
    }

    componentDidMount(){
        axios.get().then((response) => this.setState({
            nome: response.data.nomeCompleto,
            unidade: response.data.lotacao,
            email: response.data.emailInstitucional
        })).catch((e) => console.log(e));
    }

    render() {
        return (this.props.enabled) ? ((this.props.visivel) ? (
            < form onSubmit={this.handleSubmit} id="formulario"
                action="/backend/v1/pedidosdeimagem/" method="post" enctype="multipart/form-data"
            >

                <div class="container-fluid">

                    <div class="row"><div class="col-md-12" id="tituloPlugin">PEDIDO DE IMAGEM DE SATÉLITE</div></div>

                    <p align="justify"><b>ATENÇÃO: </b>
                        Procure delimitar a menor área possível. As imagens de acervo devem ter tamanho mínimo de 0,1 km² (10 hectares) e as imagens programadas devem ter o tamanho mínimo de 100 km².

                        O tamanho máximo da imagem vai de acordo com o bom senso, a justificativa e a necessidade para o serviço (a polícia paga por cada imagem);

                        Defina a sua data de interesse com atenção para as diferenças entre as imagens de acervo e as programadas. Imagens de acervo (datas passadas) possuem baixo custo e imagens programadas (datas futuras), alto custo.</p>

                    <div class="poligono"></div>
                    <div class="row">

                        <div class="col-md-3">
                            <label htmor="intervaloDeImageamentoInicio">Inicio da Faixa Temporal:</label>
                            <input type="date" id="intervaloDeImageamentoInicio" name="intervaloDeImageamentoInicio" required
                                value={this.state.intervaloDeImageamentoInicio} placeholder="Inicio:" onChange={this.handleChangeIntervaloInicio} />
                            <label htmor="intervaloDeImageamentoFim">Fim da Faixa Temporal:</label>
                            <input type="date" id="intervaloDeImageamentoFim" name="intervaloDeImageamentoFim" required
                                value={this.state.intervaloDeImageamentoFim} placeholder="Fim:" onChange={this.handleChangeIntervaloFim} />
                        </div>

                        <div class="col-md-3"><label htmlFor="resolucaoCentimetros">Resolução espacial necessária:</label>
                            <input type="number" id="resolucaoCentimetros" name="resolucaoCentimetros" placeholder="em centímetros"
                                value={this.state.resolucaoCentimetros} onChange={this.handleChangeResolucao} required /></div>

                        <div class="col-md-6"><label>
                            Finalidade do pedido de imagem:
                            <select value={this.state.finalidade} onChange={this.handleSelect} required>
                                <option disabled selected hidden>Escolha uma finalidade</option>
                                <option value="Planejamento de operação">Planejamento de operação</option>
                                <option value="Instrução de inquérito policial">Instrução de inquérito policial</option>
                                <option value="Realização de perícia">Realização de perícia</option>
                                <option value="Outra">Outra</option>
                            </select>
                        </label></div>

                    </div>

                    <div class="row">

                        <div class="col-md-6"><label htmlFor="nome">Nome completo:</label>
                            <input onChange={this.handleChangeNome} type="text" id="nome" required
                                placeholder="Nome do interessado" name="nome" value={this.state.nome} /></div>

                        <div class="col-md-3"><label htmlFor="unidade">
                            Lotação:
                            <input type="text" id="unidade" name="unidade" required
                                placeholder="Digite a sigla" value={this.state.unidade} onChange={this.handleChangeUnidade} />
                        </label></div>

                        <div class="col-md-3"><label htmlFor="telefone">Telefone:</label>
                            <InputMask mask="(99) 99999-9999" placeholder="(DDD) + número" maskChar={null} type="tel" name="telefone" value={this.state.telefone} onChange={this.handleChangeTelefone}></InputMask>
                            {/* <input type="tel" id="telefone" name="telefone" maxlength='15' required
                                placeholder="(DDD) + número" value={this.state.telefone} onChange={this.handleChangeTelefone} /> */}
                        </div>

                    </div>

                    <div class="row">

                        <div class="col-md-6"><label htmlFor="mensagem">Justificativa da solicitação:</label>
                            <textarea id="justificativa" name="justificativa" placeholder="Escreva algo.." required
                                className="textArea" value={this.state.justificativa} onChange={this.handleChangeJustificativa}></textarea></div>

                        <div class="col-md-4"><label htmlFor="email">E-mail institucional:</label>
                            <input type="text" id="email" name="email" required
                                placeholder="email@pf.gov.br" value={this.state.email} onChange={this.handleChangeEmail} /></div>
                        <div>
                            <div class="col-md-2"><button type="button" className="botoes-do-plugin" onClick={this.handleDesenhar}>Selecionar Área Desejada</button></div>
                            <div class="col-md-2"><button type="button" disabled="true" className="botoes-do-plugin" onClick={this.handleDesenhar}>Verificar Pedido</button></div>
                            <div class="col-md-2"><button onClick={this.handleSubmit} type="button" className="botoes-do-plugin">Enviar</button></div>
                        </div>
                    </div>
                    {(this.state.mostraAviso) ? <div className="avisoDeEnvio" style={{borderLeft: (this.state.statusDoPedido) ? "green solid" : "red solid"}}>
                        <p className="textoDeEnvio" id={(this.state.statusDoPedido) ? "pedido-sucesso" : "pedido-erro"}>{this.state.mensagemDeAviso}</p>
                    </div>  : null}
                </div>
            </form>
        ) : <div id="tooltip-de-desenho">
            <p style={{marginBottom: "2px", paddingBottom: "1px"}}>Clique uma vez para começar a desenhar e duas vezes para finalizar.</p>
            <ul style={{marginTop: "2px", paddingTop: "1px"}}>
                <li>O poligono não deve se intersectar</li>
                <li>O poligono deve estar localizado em território nacional</li>
                <li>O poligono não deve conter buracos</li>
            </ul>
        </div> ) : null;
    }
}

// Conecta o componente principal com o estado geral da aplicação e pega as variaveis que serão necessárias.
const FormularioConectado = connect((state) => {

    console.log(state);

    return {
        enabled: get(state, 'formulario.enabled'),
        visivel: get(state, 'formulario.visivel'),
        poligono: get(state, 'formulario.wkt_poligono'),
        teste: get(state, 'security.user') ? true : false
    };
},
    {
        escondeOuMostra: geraAlternaAtivacao,
        iniciaDesenho: geraIniciaDesenho
    })(FormularioComponent);

// validacao de tipo dos props
FormularioComponent.propTypes = {
    enabled: PropTypes.bool,
    escondeOuMostra: PropTypes.func,
    iniciaDesenho: PropTypes.func
};

// Coloca o plugin na toolbar do mapa
export const FormularioPlugin = assign(FormularioConectado, {
    disablePluginIf: "{state('user') ? false : true}",
    Toolbar: {
        name: "Pedidos de imagens de satélite",
        position: 1,
        tooltip: "Pedidos de imagens de satélite",
        icon: <i class="fa-solid fa-satellite"></i>,
        // message: ? Coisa dos locales/traducao
        action: geraAlternaAtivacao,
        selector: (state) => ({ // Muda a cor do botao quando ativado
            bsStyle: state.user ? (state.formulario && state.formulario.enabled ? "success" : "primary") : "disabled",
            active: state.user ? !!(state.formulario && state.formulario.enabled) : false
        })
    }
});
export const reducers = { formulario };
export const epics = formularioEpics;