/*! For license information please see 3965.5d5e4d213f81a3d577f9.chunk.js.LICENSE.txt */
(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[3965],{56307:t=>{t.exports=window.L},33965:(t,i,o)=>{"use strict";o.r(i),o.d(i,{default:()=>m});var e=o(56307),n=o.n(e),s=(o(80687),o(7243),o(23493)),a=o.n(s);function r(t,i){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),o.push.apply(o,e)}return o}function l(t){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?r(Object(o),!0).forEach((function(i){c(t,i,o[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(o,i))}))}return t}function c(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}n().Control.MSLocate=n().Control.Locate.extend({setMap:function(t){this._map=t,this._layer=this.options.layer||new(n().LayerGroup),this._layer.addTo(t),this._event=void 0,this._prevBounds=null;var i={};n().extend(i,this.options.markerStyle,this.options.followMarkerStyle),this.options.followMarkerStyle=i,i={},n().extend(i,this.options.circleStyle,this.options.followCircleStyle),this.options.followCircleStyle=i,this._resetVariables(),this._map.on("unload",this._unload,this)},setLocateOptions:function(t){this.options.locateOptions=l({},t)},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this.onLocationChange(),this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},onLocationChange:function(){return this.options.locateOptions.rateControl?a()(this._onLocationFound,this.options.locateOptions.rateControl):this._onLocationFound},_setClasses:function(t){return this._map.fire("locatestatus",{state:t}),t},_updateContainerStyle:function(){this._isFollowing()?this._setClasses("following"):this._active&&this._setClasses("active")},_cleanClasses:function(){return null},setStrings:function(t){this.options.strings=l(l({},this.options.strings),t)}});const h=n().Control.MSLocate;function p(t,i){for(var o=0;o<i.length;o++){var e=i[o];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function u(t,i){var o=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);i&&(e=e.filter((function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable}))),o.push.apply(o,e)}return o}function f(t){for(var i=1;i<arguments.length;i++){var o=null!=arguments[i]?arguments[i]:{};i%2?u(Object(o),!0).forEach((function(i){_(t,i,o[i])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(o)):u(Object(o)).forEach((function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(o,i))}))}return t}function _(t,i,o){return i in t?Object.defineProperty(t,i,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[i]=o,t}var d={follow:!0,remainActive:!0,stopFollowingOnDrag:!0,locateOptions:{maximumAge:2e3,enableHighAccuracy:!1,timeout:1e4,maxZoom:18,watch:!0}};function v(t){return f(f(f({},d),t),{},{locateOptions:f(f({},d.locateOptions),t.locateOptions)})}const m=function(){function t(){!function(t,i){if(!(t instanceof i))throw new TypeError("Cannot call a class as a function")}(this,t)}var i,o;return i=t,(o=[{key:"start",value:function(t){var i=this,o=t.map,e=t.options,n=t.status,s=t.onStateChange,a=t.onLocationError;o&&(this.locate=new h(v(e)),this.locate.setMap(o),o.on("locatestatus",(function(t){return i.locateControlState(t,{onStateChange:s})})),this.locate.options.onLocationError=a,this.locate.options.onLocationOutsideMapBounds=a),n.enabled&&this.locate.start(),this.status=n}},{key:"update",value:function(t){var i=t.status,o=t.messages,e=t.options;this.fol=!1,"ENABLED"!==i||this.locate._active?"FOLLOWING"===i&&this.locate._active&&!this.locate._following?(this.fol=!0,this.locate.stop(),this.locate.start()):"DISABLED"===i&&(this.locate._following=!1,this.locate.stop()):this.locate.start(),this.locate.setStrings(o),"DISABLED"!==i&&this.locate.drawMarker&&this.locate.drawMarker(this.locate._map),this.locate.setLocateOptions(v(e).locateOptions),this.status=i}},{key:"clear",value:function(){}},{key:"locateControlState",value:function(t,i){var o=i.onStateChange;"requesting"===t.state&&"LOCATING"!==this.status?o("LOCATING"):"following"!==t.state||this.fol?"active"===t.state&&"ENABLED"!==this.status&&o("ENABLED"):o("FOLLOWING")}}])&&p(i.prototype,o),Object.defineProperty(i,"prototype",{writable:!1}),t}()},12023:(t,i,o)=>{(t.exports=o(9252)()).push([t.id,"/* Compatible with Leaflet 0.7 */\n.msgapi .leaflet-control-locate a {\n  font-size: 1.4em;\n  color: #444;\n  cursor: pointer;\n}\n.msgapi .leaflet-control-locate.active a {\n  color: #2074B6;\n}\n.msgapi .leaflet-control-locate.active.following a {\n  color: #FC8428;\n}\n",""])},80687:(t,i,o)=>{var e,n,s;!function(a,r){n=[o(56307)],void 0===(s="function"==typeof(e=a)?e.apply(i,n):e)||(t.exports=s),void 0!==r&&r.L&&(r.L.Control.Locate=a(L))}((function(t){var i=function(i,o,e){(e=e.split(" ")).forEach((function(e){t.DomUtil[i].call(this,o,e)}))},o=function(t,o){i("addClass",t,o)},e=function(t,o){i("removeClass",t,o)},n=t.Control.extend({options:{position:"topleft",layer:void 0,setView:"untilPan",keepCurrentZoomLevel:!1,flyTo:!1,clickBehavior:{inView:"stop",outOfView:"setView"},returnToPrevBounds:!1,cacheLocation:!0,drawCircle:!0,drawMarker:!0,markerClass:t.CircleMarker,circleStyle:{color:"#136AEC",fillColor:"#136AEC",fillOpacity:.15,weight:2,opacity:.5},markerStyle:{color:"#136AEC",fillColor:"#2A93EE",fillOpacity:.7,weight:2,opacity:.9,radius:5},followCircleStyle:{},followMarkerStyle:{},icon:"fa fa-map-marker",iconLoading:"fa fa-spinner fa-spin",iconElementTag:"span",circlePadding:[0,0],metric:!0,createButtonCallback:function(i,o){var e=t.DomUtil.create("a","leaflet-bar-part leaflet-bar-part-single",i);return e.title=o.strings.title,{link:e,icon:t.DomUtil.create(o.iconElementTag,o.icon,e)}},onLocationError:function(t,i){alert(t.message)},onLocationOutsideMapBounds:function(t){t.stop(),alert(t.options.strings.outsideMapBoundsMsg)},showPopup:!0,strings:{title:"Show me where I am",metersUnit:"meters",feetUnit:"feet",popup:"You are within {distance} {unit} from this point",outsideMapBoundsMsg:"You seem located outside the boundaries of the map"},locateOptions:{maxZoom:1/0,watch:!0,setView:!1}},initialize:function(i){for(var o in i)"object"==typeof this.options[o]?t.extend(this.options[o],i[o]):this.options[o]=i[o];this.options.followMarkerStyle=t.extend({},this.options.markerStyle,this.options.followMarkerStyle),this.options.followCircleStyle=t.extend({},this.options.circleStyle,this.options.followCircleStyle)},onAdd:function(i){var o=t.DomUtil.create("div","leaflet-control-locate leaflet-bar leaflet-control");this._layer=this.options.layer||new t.LayerGroup,this._layer.addTo(i),this._event=void 0,this._prevBounds=null;var e=this.options.createButtonCallback(o,this.options);return this._link=e.link,this._icon=e.icon,t.DomEvent.on(this._link,"click",t.DomEvent.stopPropagation).on(this._link,"click",t.DomEvent.preventDefault).on(this._link,"click",this._onClick,this).on(this._link,"dblclick",t.DomEvent.stopPropagation),this._resetVariables(),this._map.on("unload",this._unload,this),o},_onClick:function(){if(this._justClicked=!0,this._userPanned=!1,this._active&&!this._event)this.stop();else if(this._active&&void 0!==this._event)switch(this._map.getBounds().contains(this._event.latlng)?this.options.clickBehavior.inView:this.options.clickBehavior.outOfView){case"setView":this.setView();break;case"stop":this.stop(),this.options.returnToPrevBounds&&(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._prevBounds)}else this.options.returnToPrevBounds&&(this._prevBounds=this._map.getBounds()),this.start();this._updateContainerStyle()},start:function(){this._activate(),this._event&&(this._drawMarker(this._map),this.options.setView&&this.setView()),this._updateContainerStyle()},stop:function(){this._deactivate(),this._cleanClasses(),this._resetVariables(),this._removeMarker()},_activate:function(){this._active||(this._map.locate(this.options.locateOptions),this._active=!0,this._map.on("locationfound",this._onLocationFound,this),this._map.on("locationerror",this._onLocationError,this),this._map.on("dragstart",this._onDrag,this))},_deactivate:function(){this._map.stopLocate(),this._active=!1,this.options.cacheLocation||(this._event=void 0),this._map.off("locationfound",this._onLocationFound,this),this._map.off("locationerror",this._onLocationError,this),this._map.off("dragstart",this._onDrag,this)},setView:function(){this._drawMarker(),this._isOutsideMapBounds()?(this._event=void 0,this.options.onLocationOutsideMapBounds(this)):this.options.keepCurrentZoomLevel?(this.options.flyTo?this._map.flyTo:this._map.panTo).bind(this._map)([this._event.latitude,this._event.longitude]):(this.options.flyTo?this._map.flyToBounds:this._map.fitBounds).bind(this._map)(this._event.bounds,{padding:this.options.circlePadding,maxZoom:this.options.locateOptions.maxZoom})},_drawMarker:function(){void 0===this._event.accuracy&&(this._event.accuracy=0);var i,o,e=this._event.accuracy,n=this._event.latlng;if(this.options.drawCircle){var s=this._isFollowing()?this.options.followCircleStyle:this.options.circleStyle;this._circle?this._circle.setLatLng(n).setRadius(e).setStyle(s):this._circle=t.circle(n,e,s).addTo(this._layer)}if(this.options.metric?(i=e.toFixed(0),o=this.options.strings.metersUnit):(i=(3.2808399*e).toFixed(0),o=this.options.strings.feetUnit),this.options.drawMarker){var a=this._isFollowing()?this.options.followMarkerStyle:this.options.markerStyle;this._marker?(this._marker.setLatLng(n),this._marker.setStyle&&this._marker.setStyle(a)):this._marker=new this.options.markerClass(n,a).addTo(this._layer)}var r=this.options.strings.popup;this.options.showPopup&&r&&this._marker&&this._marker.bindPopup(t.Util.template(r,{distance:i,unit:o}))._popup.setLatLng(n)},_removeMarker:function(){this._layer.clearLayers(),this._marker=void 0,this._circle=void 0},_unload:function(){this.stop(),this._map.off("unload",this._unload,this)},_onLocationError:function(t){3==t.code&&this.options.locateOptions.watch||(this.stop(),this.options.onLocationError(t,this))},_onLocationFound:function(t){if((!this._event||this._event.latlng.lat!==t.latlng.lat||this._event.latlng.lng!==t.latlng.lng||this._event.accuracy!==t.accuracy)&&this._active){switch(this._event=t,this._drawMarker(),this._updateContainerStyle(),this.options.setView){case"once":this._justClicked&&this.setView();break;case"untilPan":this._userPanned||this.setView();break;case"always":this.setView()}this._justClicked=!1}},_onDrag:function(){this._event&&(this._userPanned=!0,this._updateContainerStyle(),this._drawMarker())},_isFollowing:function(){return!!this._active&&("always"===this.options.setView||("untilPan"===this.options.setView?!this._userPanned:void 0))},_isOutsideMapBounds:function(){return void 0!==this._event&&this._map.options.maxBounds&&!this._map.options.maxBounds.contains(this._event.latlng)},_updateContainerStyle:function(){this._container&&(this._active&&!this._event?this._setClasses("requesting"):this._isFollowing()?this._setClasses("following"):this._active?this._setClasses("active"):this._cleanClasses())},_setClasses:function(t){"requesting"==t?(e(this._container,"active following"),o(this._container,"requesting"),e(this._icon,this.options.icon),o(this._icon,this.options.iconLoading)):"active"==t?(e(this._container,"requesting following"),o(this._container,"active"),e(this._icon,this.options.iconLoading),o(this._icon,this.options.icon)):"following"==t&&(e(this._container,"requesting"),o(this._container,"active following"),e(this._icon,this.options.iconLoading),o(this._icon,this.options.icon))},_cleanClasses:function(){t.DomUtil.removeClass(this._container,"requesting"),t.DomUtil.removeClass(this._container,"active"),t.DomUtil.removeClass(this._container,"following"),e(this._icon,this.options.iconLoading),o(this._icon,this.options.icon)},_resetVariables:function(){this._active=!1,this._justClicked=!1,this._userPanned=!1}});return t.control.locate=function(i){return new t.Control.Locate(i)},n}),window)},23279:(t,i,o)=>{var e=o(13218),n=o(7771),s=o(14841),a=Math.max,r=Math.min;t.exports=function(t,i,o){var l,c,h,p,u,f,_=0,d=!1,v=!1,m=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function g(i){var o=l,e=c;return l=c=void 0,_=i,p=t.apply(e,o)}function w(t){return _=t,u=setTimeout(k,i),d?g(t):p}function y(t){var o=t-f;return void 0===f||o>=i||o<0||v&&t-_>=h}function k(){var t=n();if(y(t))return C(t);u=setTimeout(k,function(t){var o=i-(t-f);return v?r(o,h-(t-_)):o}(t))}function C(t){return u=void 0,m&&l?g(t):(l=c=void 0,p)}function O(){var t=n(),o=y(t);if(l=arguments,c=this,f=t,o){if(void 0===u)return w(f);if(v)return clearTimeout(u),u=setTimeout(k,i),g(f)}return void 0===u&&(u=setTimeout(k,i)),p}return i=s(i)||0,e(o)&&(d=!!o.leading,h=(v="maxWait"in o)?a(s(o.maxWait)||0,i):h,m="trailing"in o?!!o.trailing:m),O.cancel=function(){void 0!==u&&clearTimeout(u),_=0,l=f=c=u=void 0},O.flush=function(){return void 0===u?p:C(n())},O}},7771:(t,i,o)=>{var e=o(55639);t.exports=function(){return e.Date.now()}},23493:(t,i,o)=>{var e=o(23279),n=o(13218);t.exports=function(t,i,o){var s=!0,a=!0;if("function"!=typeof t)throw new TypeError("Expected a function");return n(o)&&(s="leading"in o?!!o.leading:s,a="trailing"in o?!!o.trailing:a),e(t,i,{leading:s,maxWait:i,trailing:a})}},7243:(t,i,o)=>{var e=o(12023);"string"==typeof e&&(e=[[t.id,e,""]]),o(14246)(e,{}),e.locals&&(t.exports=e.locals)}}]);