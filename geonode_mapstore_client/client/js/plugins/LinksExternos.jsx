import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {get} from 'lodash';
import {toLonLat} from 'ol/proj';
import { mapInfoSelector } from '@mapstore/framework/selectors/map';

class LinksExternosComponent extends React.Component {
    static propTypes = {
        zoom: PropTypes.number,
        x: PropTypes.number,
        y: PropTypes.number,
        ne: PropTypes.array,
        sw: PropTypes.array,
        id: PropTypes.number
    };

    render() {
        const linksbar = {position: "absolute", bottom: "60px", right: "100px", zIndex: 1000, backgroundColor: "white", opacity: 0.8, borderRadius: "8px", padding: "10px"};
        const image = {display: "inline", margin: "2 0px", height: "24px", width: "24px", opacity: 1};
        var wikimapialink = `http://wikimapia.org/#lang=pt&lat=${this.props.y}&lon=${this.props.x}&z=${this.props.zoom}`;
        var googlemapslink = `http://maps.google.com/maps/place/${this.props.y},${this.props.x}/@${this.props.y},${this.props.x},${this.props.zoom}z/data=!3m1!1e3!4m2!3m1!1s0x0:0x0)`;
        var openstreetmaplink = `https://www.openstreetmap.org/#map=${this.props.zoom}/${this.props.y}/${this.props.x}`;
        var wazelink = `https://www.waze.com/pt-BR/livemap?zoom=${this.props.zoom}&lat=${this.props.y}&lon=${this.props.x}`;
        var binglink = `https://www.bing.com/maps/default.aspx?cp=${this.props.y}~${this.props.x}&lvl=${this.props.zoom}&style=a`;
        var nokiaherelink = `https://wego.here.com/?map=${this.props.y},${this.props.x},${this.props.zoom},satelite`;
        // var planetexplorerlink = `https://www.planet.com/`; // Precisa de Autenticacao?
        var foursquarelink = `https://foursquare.com/explore?mode=url&amp;ne=${this.props.ne[1]}%2C${this.props.ne[0]}&amp;sw=${this.props.sw[1]}%2C${this.props.sw[0]}`;
        var linklocal = window.location.href;

        return (<div style={linksbar}>
            <table>
                <tbody>
                    <tr >
                        <td colSpan={6}><a href={linklocal} target="_blank" style={{fontSize: "18px"}}>Link para essa página</a></td>
                    </tr>
                    <tr >
                        <td colSpan={6}> Link externos: </td>
                    </tr>
                    <tr >
                        <td>
                            <a href={wikimapialink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/wikimapia.png" style={image}></img>
                            </a>
                        </td>
                        <td>
                            <a href={googlemapslink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/googlemaps.png" style={image}></img>
                            </a>
                        </td>
                        <td>
                            <a href={openstreetmaplink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/openstreetmap.svg" style={image}></img>
                            </a>
                        </td>
                        <td>
                            <a href={wazelink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/waze.png" style={image}></img>
                            </a>
                        </td>
                        <td>
                            <a href={binglink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin//bing.png" style={image}></img>
                            </a>
                        </td>
                        <td>
                            <a href={nokiaherelink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/nokiahere.png" style={image}></img>
                            </a>
                        </td>
                        {/* <td>
                            <a href={planetexplorerlink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/planetexplorer.svg" style={image}></img>
                            </a>
                        </td> */}
                        <td>
                            <a href={foursquarelink} target="_blank" >
                                <img src="../../static/mapstore/img/LinksExternosPlugin/foursquare.png" style={image}></img>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>);
    }
}

const LinksExternosConectado = connect((state) => {
    var bounds = get(state, 'map.present.bbox.bounds');
    var mapInfo = mapInfoSelector(state);

    return {
        id: mapInfo.id,
        zoom: get(state, 'map.present.zoom'), // connected property
        x: get(state, 'map.present.center.x'),
        y: get(state, 'map.present.center.y'),
        sw: (bounds !== undefined) ? toLonLat([bounds.minx, bounds.miny]) : ["carregando", "carregando"],
        ne: (bounds !== undefined) ? toLonLat([bounds.maxx, bounds.maxy]) : ["carregando", "carregando"]
    };
})(LinksExternosComponent);

export const LinksExternosPlugin = LinksExternosConectado;
