import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { toLonLat } from 'ol/proj';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

import './linksexternos/style/linksexternos.css';

class LinksExternosComponent extends React.Component {
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
        var wikimapialink = `http://wikimapia.org/#lang=pt&lat=${this.props.y}&lon=${this.props.x}&z=${this.props.zoom}`;
        var googlemapslink = `http://maps.google.com/maps/place/${this.props.y},${this.props.x}/@${this.props.y},${this.props.x},${this.props.zoom}z/data=!3m1!1e3!4m2!3m1!1s0x0:0x0)`;
        var openstreetmaplink = `https://www.openstreetmap.org/#map=${this.props.zoom}/${this.props.y}/${this.props.x}`;
        var wazelink = `https://www.waze.com/pt-BR/livemap?zoom=${this.props.zoom}&lat=${this.props.y}&lon=${this.props.x}`;
        var binglink = `https://www.bing.com/maps/default.aspx?cp=${this.props.y}~${this.props.x}&lvl=${this.props.zoom}&style=a`;
        var nokiaherelink = `https://wego.here.com/?map=${this.props.y},${this.props.x},${this.props.zoom},satelite`;
        var linklocal = window.location.protocol + "//" + window.location.host + "/maps/" + this.props.id + "/view";
        linklocal += "?center=" + this.props.x + "," + this.props.y + "&zoom=" + this.props.zoom;

        const handleCopiar = (event) => {
            event.preventDefault();
            window.navigator.clipboard.writeText(linklocal);
        };

        // html do componente
        return (<div className="barra-de-links">
            <table>
                <tbody>
                    {(this.props.id !== null) ? (<tr >
                        <td colSpan={6}>
                            <a href={linklocal} target="_blank" style={{fontSize: "18px", opacity: 0.95}}>Link para essa página</a>
                            <OverlayTrigger overlay={<Tooltip>Copiar link</Tooltip>} placement="top" delayShow={350}>
                                <button className="botao-de-copia" onClick={handleCopiar}>
                                    <img src="../../static/mapstore/img/LinksExternosPlugin/files.svg" style={{paddingBottom: "4px"}}></img>
                                </button>
                            </OverlayTrigger>
                        </td>
                    </tr>) : null}
                    <tr >
                        <td colSpan={6}> Link externos: </td>
                    </tr>
                    <tr >
                        <td>
                            <a href={wikimapialink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/wikimapia.png" className="imagem"></img>
                            </a>
                        </td>
                        <td>
                            <a href={googlemapslink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/googlemaps.png" className="imagem"></img>
                            </a>
                        </td>
                        <td>
                            <a href={openstreetmaplink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/openstreetmap.svg" className="imagem"></img>
                            </a>
                        </td>
                        <td>
                            <a href={wazelink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/waze.png" className="imagem"></img>
                            </a>
                        </td>
                        <td>
                            <a href={binglink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin//bing.png" className="imagem"></img>
                            </a>
                        </td>
                        <td>
                            <a href={nokiaherelink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/nokiahere.png" className="imagem"></img>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>);
    }
}

const LinksExternosConectado = connect((state) => { // Conecta o componente ao estado da aplicação no formato redux store
    var bounds = get(state, 'map.present.bbox.bounds');
    var mapInfo = mapInfoSelector(state);

    return {
        id: mapInfo.id,
        zoom: get(state, 'map.present.zoom'),
        x: get(state, 'map.present.center.x'),
        y: get(state, 'map.present.center.y'),
        sw: (bounds !== undefined) ? toLonLat([bounds.minx, bounds.miny]) : ["carregando", "carregando"],
        ne: (bounds !== undefined) ? toLonLat([bounds.maxx, bounds.maxy]) : ["carregando", "carregando"]
    };
})(LinksExternosComponent);

export const LinksExternosPlugin = LinksExternosConectado;
