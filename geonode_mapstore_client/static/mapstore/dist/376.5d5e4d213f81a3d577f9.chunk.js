(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[376],{81808:(e,r,t)=>{"use strict";t.d(r,{eD:()=>n,AM:()=>o,ok:()=>a,Gg:()=>u,nT:()=>i,TL:()=>s,KS:()=>c,EB:()=>f,DZ:()=>l,Aw:()=>p,V_:()=>y,H0:()=>d,jW:()=>b,JZ:()=>m,fQ:()=>g,HK:()=>E,YO:()=>v,I6:()=>O});var n="MAP:LOAD_NEW_MAP",o="MAP_LOAD_MAP_CONFIG",a="MAP_CONFIG_LOADED",u="MAP_CONFIG_LOAD_ERROR",i="MAP_LOAD_INFO",s="MAP_INFO_LOAD_START",c="MAP_INFO_LOADED",f="MAP_INFO_LOAD_ERROR",l="MAP:MAP_SAVE_ERROR",p="MAP:MAP_SAVED",y="MAP:RESET_MAP_SAVE_ERROR";function d(e,r,t){return{type:a,config:e,legacy:!!r,mapId:r,zoomToExtent:t}}function b(e,r){return{type:u,error:e,mapId:r}}function m(e,r,t,n,a){return{type:o,configName:e,mapId:r,config:t,mapInfo:n,overrideConfig:a}}function g(e,r){return{type:c,mapId:r,info:e}}function E(e,r){return{type:f,mapId:e,error:r}}function v(e){return{type:s,mapId:e}}function O(e){return{type:i,mapId:e}}},97222:(e,r,t)=>{"use strict";t.d(r,{Vc:()=>o,bj:()=>a,p7:()=>u,Av:()=>i,M8:()=>s,wn:()=>c,gs:()=>f,NN:()=>l,C2:()=>p,O7:()=>y,oQ:()=>d,dX:()=>b,al:()=>m,Gh:()=>g,x2:()=>E,Y7:()=>v,b4:()=>O,GI:()=>_,KP:()=>h,Zw:()=>A,Z:()=>T,a:()=>S,WN:()=>P,k9:()=>R,yo:()=>w,kE:()=>j,kV:()=>I,v2:()=>C,_q:()=>D,tt:()=>M,Jc:()=>q,w4:()=>L,QJ:()=>H,KG:()=>k,o$:()=>G,TS:()=>F,Tw:()=>N,I3:()=>x});var n=t(97395),o="SEARCH:SEARCH_WITH_FILTER",a="TEXT_SEARCH_STARTED",u="TEXT_SEARCH_RESULTS_LOADED",i="TEXT_SEARCH_RESULTS_PURGE",s="TEXT_SEARCH_RESET",c="TEXT_SEARCH_ADD_MARKER",f="TEXT_SEARCH_TEXT_CHANGE",l="TEXT_SEARCH_LOADING",p="TEXT_SEARCH_NESTED_SERVICE_SELECTED",y="TEXT_SEARCH_ERROR",d="TEXT_SEARCH_CANCEL_ITEM",b="TEXT_SEARCH_ITEM_SELECTED",m="TEXT_SEARCH_SHOW_GFI",g="TEXT_SEARCH_SET_HIGHLIGHTED_FEATURE",E="UPDATE_RESULTS_STYLE",v="CHANGE_SEARCH_TOOL",O="SEARCH:ZOOM_ADD_POINT",_="SEARCH:CHANGE_FORMAT",h="SEARCH:CHANGE_COORD";function A(e){return{type:_,format:e}}function T(e,r,t){return{type:O,pos:e,zoom:r,crs:t}}function S(e){return{type:v,activeSearchTool:e}}function P(e){var r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t=arguments.length>2?arguments[2]:void 0;return{type:u,results:e,append:r,services:t}}function R(e){return{type:f,searchText:e}}function w(e){return{type:l,loading:e}}function j(e){return{type:y,error:e}}function I(){return{type:i}}function C(){return{type:s}}function D(e,r){return{type:c,markerPosition:e,markerLabel:r}}function M(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=r.services,n=void 0===t?null:t,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:15;return{type:a,searchText:e,services:n,maxResults:o}}function q(e,r,t){return{type:b,item:e,mapConfig:r,resultsStyle:t}}var L=function(e){return{type:m,item:e}};function H(e,r,t){return{type:p,searchText:t,services:e,items:r}}function k(e){return{type:d,item:e}}function G(e){return{type:E,style:e}}function F(e,r){return{type:h,coord:e,val:r}}function N(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.nonQueriableLayers",autoDismiss:10})}function x(){return(0,n.vU)({title:"Error",position:"tc",message:"search.errors.serverError",autoDismiss:10})}},15402:(e,r,t)=>{"use strict";t.d(r,{Z:()=>m});var n=t(45697),o=t.n(n),a=t(24852),u=t.n(a);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function s(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function c(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,r){return f=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e},f(e,r)}function l(e,r){if(r&&("object"===i(r)||"function"==typeof r))return r;if(void 0!==r)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function p(e){return p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},p(e)}function y(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var d=t(68195).FormattedHTMLMessage,b=function(e){!function(e,r){if("function"!=typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),r&&f(e,r)}(i,e);var r,t,n,o,a=(n=i,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,r=p(n);if(o){var t=p(this).constructor;e=Reflect.construct(r,arguments,t)}else e=r.apply(this,arguments);return l(this,e)});function i(){return s(this,i),a.apply(this,arguments)}return r=i,(t=[{key:"render",value:function(){return this.context.intl?u().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&c(r.prototype,t),Object.defineProperty(r,"prototype",{writable:!1}),i}(u().Component);y(b,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(b,"contextTypes",{intl:o().object});const m=b},93451:(e,r,t)=>{"use strict";t.d(r,{Z:()=>h});var n=t(86638),o=t(45697),a=t.n(o),u=t(84596),i=t.n(u),s=t(1469),c=t.n(s),f=t(14293),l=t.n(f),p=t(47037),y=t.n(p),d=t(67076),b=["messages"];function m(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var O=function(e,r){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"label";if(c()(r))return r.map((function(o){var a=(0,n.S$)(e,o[t]||y()(o)&&o||"");return E(E({},o),{},v({},t,l()(a)?r:a))}));var o=(0,n.S$)(e,r);return l()(o)?r:o},_=function(e,r,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},o=arguments.length>1?arguments[1]:void 0;return E(E({},n),{},v({},o,e[o]&&O(r,e[o],t)))}};const h=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";return(0,d.compose)((0,d.getContext)({messages:a().object}),(0,d.mapProps)((function(t){var n=t.messages,o=m(t,b);return E(E({},o),i()(e).reduce(_(o,n,r),{}))})))}},26125:(e,r,t)=>{"use strict";t.d(r,{Z:()=>h});var n=t(21914),o=t(81808),a=t(82904),u=t(27418),i=t.n(u),s=t(30998),c=t.n(s),f=t(52353),l=t.n(f),p=t(13652),y=["index","loaded"];function d(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}function b(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return m(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function g(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function E(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?g(Object(t),!0).forEach((function(r){v(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):g(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function v(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function O(e,r,t){var n="vector"===t,o=n?r.reqId:c()(e.requests||[],(function(e){return e.reqId===r.reqId}));if(-1!==o){if(["exceptions","error"].includes(t)){var a=e.requests.filter((function(e,r){return r!==o})),u=e.responses.filter((function(e,r){return r!==o}));return E(E({},e),{},{responses:u,requests:a})}var s=e.configuration,f=e.requests,p=e.responses||[],y="hover"===(null==s?void 0:s.trigger);if(!n){var d={response:r[t],queryParams:r.requestParams,layerMetadata:r.layerMetadata,layer:r.layer};y?p=[].concat(b(p),[d]):p[o]=d}var m={loaded:!0,index:0};return i()({},e,E(E(E({},n&&{requests:f}),!l()(m)&&m),{},{responses:b(p)}))}return e}var _={enabled:!0,configuration:{}};const h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,r=arguments.length>1?arguments[1]:void 0;switch(r.type){case n.Re:return i()({},e,{warning:"NO_QUERYABLE_LAYERS"});case n.ih:return i()({},e,{warning:null});case n.Xw:return i()({},e,{enabled:r.enabled});case n.ph:return i()({},e,{enabled:!e.enabled});case n.gG:return i()({},e,{index:r.index});case n.oz:return i()({},e,{highlight:r.enabled});case n.Pn:var u=r.reqId,s=r.request,c=e.requests||[];return i()({},e,{requests:[].concat(b(c),[{request:s,reqId:u}])});case n.DZ:e.index,e.loaded;var f=d(e,y);return E(E({},f),{},{queryableLayers:[],responses:[],requests:[]});case n.XL:return O(e,r,"data");case n.Ih:return O(e,r,"exceptions");case n.km:return O(e,r,"error");case n.xy:return i()({},e,{clickPoint:r.point,clickLayer:r.layer||null,itemId:r.itemId||null,overrideParams:r.overrideParams||null,filterNameList:r.filterNameList||null});case n.e8:return E(E({},e),{},{configuration:E(E({},e.configuration),{},{infoFormat:r.infoFormat})});case n.E0:return i()({},e,{showMarker:!0});case n.F9:return i()({},e,{showMarker:!1});case n.X_:return i()({},e,{showModalReverse:!0,reverseGeocodeData:r.reverseGeocodeData});case n.pb:return i()({},e,{showModalReverse:!1,reverseGeocodeData:void 0});case a.l:return i()({},e,{showMarker:!1,responses:[],requests:[]});case n.qb:var l,m=t(55745),g=t(65442),v={type:"Feature",properties:{},geometry:{type:"Point",coordinates:[r.request.lng,r.request.lat]}},h=r.metadata&&r.metadata.units;switch(h){case"m":default:h="meters";break;case"deg":h="degrees";break;case"mi":h="miles"}var A,T=r.metadata&&r.metadata.resolution||1,S=m(v,(r.metadata.buffer||1)*T,h),P=(r.layer.features||[]).filter((function(e){try{return"FeatureCollection"===e.type&&e.features&&e.features.length?e.features.reduce((function(e,t){var n=t.properties.useGeodesicLines&&t.properties.geometryGeodesic?E(E({},t),{},{geometry:t.properties.geometryGeodesic}):t;return e||g(S,T&&r.metadata.buffer&&h?m(n,1,"meters"):n)}),!1):g(S,T&&r.metadata.buffer&&h?m(e,1,"meters"):e)}catch(e){return!1}})),R=e.responses||[],w="hover"===(null==e||null===(l=e.configuration)||void 0===l?void 0:l.trigger)||!1,j={response:{crs:null,features:P,totalFeatures:"unknown",type:"FeatureCollection"},queryParams:r.request,layerMetadata:r.metadata,format:"JSON"};w?(R=[].concat(b(R),[j]),A={reqId:0}):(R[e.requests.length]=j,A={reqId:e.requests.length});var I=[].concat(b(e.requests),[{}]);return O(i()({},e,{requests:I,queryableLayers:r.queryableLayers,responses:b(R)}),A,"vector");case n.lF:return i()({},e,{centerToMarker:r.status});case n.ZF:return E(E({},e),{},{configuration:E(E({},e.configuration),{},{showEmptyMessageGFI:!e.configuration.showEmptyMessageGFI})});case o.ok:return E(E({},e),{},{configuration:r.config.mapInfoConfiguration||e.configuration||{}});case n.GI:return E(E({},e),{},{formatCoord:r.format});case n.B1:return E(E({},e),{},{showCoordinateEditor:!r.showCoordinateEditor});case n.gc:return E(E({},e),{},{currentEditFeatureQuery:r.query});case n.zX:return E(E({},e),{},{configuration:E(E({},e.configuration),{},{trigger:r.trigger})});case n.Zb:return E(E({},e),{},{showInMapPopup:r.value});case p.Wz:return"cesium"===r.mapType?E(E({},e),{},{configuration:E(E({},e.configuration),{},{trigger:"click"})}):e;default:return e}}}}]);