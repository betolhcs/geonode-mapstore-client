(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[2955],{43120:(e,t,r)=>{var n={"./cesium.js":[61133,6642,6882,9537,3219,5794,9437],"./leaflet.js":[48507,6259,5030,6642,6315,4558,1338,5378,6882,6287,9537,3991,5701,7028,1164,7161],"./openlayers.js":[34637,6259,5030,4634,1324,4738,200,5517,6932,7966,6642,1108,967,1338,5568,8672,5378,6882,6287,3506,3546,4907,9537,8091,3498,7028,5516,6037],"./sink.js":[60620,5442]};function o(e){if(!r.o(n,e))return Promise.resolve().then((()=>{var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],o=t[0];return Promise.all(t.slice(1).map(r.e)).then((()=>r(o)))}o.keys=()=>Object.keys(n),o.id=43120,e.exports=o},49243:(e,t,r)=>{"use strict";r.d(t,{y:()=>m});var n=r(47037),o=r.n(n),i=r(14293),u=r.n(i),a=r(49977),c=r(88798),s=r(75875),p=r.n(s),l=r(86267);function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],u=!0,a=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}}(e,t)||function(e,t){if(e){if("string"==typeof e)return y(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?y(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){v(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function v(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=n.attachJSON,s=n.itemId,y=void 0===s?null:s,d=function(t){return a.Observable.defer((function(){return p().get(e,{params:t})}))},v=function(t){return(0,c.pf)(r,e,t)},m=(0,c.pf)(r,e,t)?v:d;return i&&"application/json"!==t.info_format&&"application/json"!==t.outputFormat?a.Observable.forkJoin(m(t),m(b(b({},t),{},{info_format:"application/json"})).map((function(e){return e.data})).catch((function(){return a.Observable.of({})}))).map((function(e){var t=f(e,2),r=t[0],n=t[1];return b(b({},r),{},{features:n&&n.features&&n.features.filter((function(e){return!!u()(y)||e.id===y})),featuresCrs:n&&n.crs&&(0,l.parseURN)(n.crs)})})):m(t).map((function(e){return e.data})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{data:o()(e)?e:b(b({},e),{},{features:e.features&&e.features.filter((function(e){return!y||e.id===y}))}),features:e.features&&e.features.filter((function(e){return!y||e.id===y})),featuresCrs:e&&e.crs&&(0,l.parseURN)(e.crs)}}))}},15402:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(45697),o=r.n(n),i=r(24852),u=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function l(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var d=r(68195).FormattedHTMLMessage,b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=f(n);if(o){var r=f(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return l(this,e)});function a(){return c(this,a),i.apply(this,arguments)}return t=a,(r=[{key:"render",value:function(){return this.context.intl?u().createElement(d,{id:this.props.msgId,values:this.props.msgParams}):u().createElement("span",null,this.props.msgId||"")}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(u().Component);y(b,"propTypes",{msgId:o().string.isRequired,msgParams:o().object}),y(b,"contextTypes",{intl:o().object});const v=b},63721:(e,t,r)=>{"use strict";r.d(t,{yM:()=>I,dY:()=>T});var n=r(24852),o=r.n(n),i=r(67076),u=r(49977),a=r(18446),c=r.n(a),s=r(23570),p=r.n(s),l=r(73014),f=r(11196),y=r(42872),d=r(1469),b=r.n(d),v=r(79870),m=(0,i.compose)((0,i.withStateHandlers)({index:0},{setIndex:function(){return function(e){return{index:e}}}}),(0,i.defaultProps)({index:0,responses:[]}));const h=(0,i.compose)((0,i.defaultProps)({responses:[],container:function(e){var t=e.index,r=e.children;return o().createElement(o().Fragment,null,b()(r)&&r[t]||r)},header:v.Z}),m,f.Yy,f.mI,(0,l.Z)((function(e){return 0===e.responses.length})))(y.Z);var O=r(49243),g=r(88798),j=r(24262),w=["rawPos"],P=["PopupSupport","tools"];function S(){return S=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},S.apply(this,arguments)}function E(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function D(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function k(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?D(Object(r),!0).forEach((function(t){_(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):D(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function _(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(){return-1!==(0,g.lY)().indexOf("application/json")?"application/json":(0,g.wR)()},M=(0,i.mapPropsStream)((function(e){var t=(0,i.createEventHandler)(),r=t.stream,n=t.handler;return r.withLatestFrom(e.map((function(e){return{map:e.map,layers:e.layers,options:e.options}})).distinctUntilChanged((function(e,t){return c()(e,t)}))).switchMap((function(e){var t,r,n=(r=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,i=[],u=!0,a=!1;try{for(r=r.call(e);!(u=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==r.return||r.return()}finally{if(a)throw o}}return i}}(t,r)||function(e,t){if(e){if("string"==typeof e)return R(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?R(e,t):void 0}}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0].point,i=n[1],a=i.map,c=i.layers,s=void 0===c?[]:c,l=i.options,f=(l=void 0===l?{}:l).mapOptions,y=(f=void 0===f?{}:f).mapInfoFormat,d=void 0===y?C():y,b=s.filter((function(e){return(0,j.T4)(e,a.resolution)&&(0,g.y_)(e)})),v=["SLD_BODY"],m=["buffer","cql_filter","filter","propertyName"];return 0===b.length?u.Observable.of({requests:[{}],responses:[{response:{features:[]}}],validResponses:[]}):u.Observable.from(b).mergeMap((function(e){var t=(0,g.Fm)(e,{format:d,map:a,point:o,currentLocale:"en-US"}),r=t.url,n=t.request,i=t.metadata,u=r,c=n,s=k(k({},(0,g.K7)(e,m,v)),c),l=p()();return(0,O.y)(u,s,e).map((function(e){return e.data.exceptions?{reqId:l,exceptions:e.data.exceptions,queryParams:c,layerMetadata:i}:{data:e.data,reqId:l,queryParams:c,layerMetadata:k(k({},i),{},{features:e.features,featuresCrs:e.featuresCrs})}})).catch((function(e){return{error:e.data||e.statusText||e.status,reqId:l,queryParams:c,layerMetadata:i}})).startWith({start:!0,reqId:l,request:s})})).scan((function(e,t){var r=e.requests,n=e.responses,o=e.validResponses;if(t.start){var i=t.reqId,u=t.request;return{requests:r.concat({reqId:i,request:u}),responses:n,validResponses:o}}var a=t.data,c=t.queryParams,s=t.layerMetadata,p=(0,g.Te)(d),l=n.concat({response:a,queryParams:c,layerMetadata:s});return{requests:r,validResponses:p.getValidResponses(l),responses:l}}),{requests:[],responses:[],validResponses:[]})})).startWith({requests:[],responses:[]}).combineLatest(e,(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return k(k({},t),{},{mapInfo:e,getFeatureInfoHandler:n})}))})),T=(0,i.branch)((function(e){var t=e.map,r=(t=void 0===t?{}:t).mapInfoControl;return void 0!==r&&r}),(0,i.compose)(M,(0,i.withStateHandlers)({popups:[]},{onClick:function(e,t){var r=t.getFeatureInfoHandler,n=void 0===r?function(){}:r;return function(e,t){var r=e.rawPos,o=void 0===r?[]:r,i=E(e,w);return n({point:i,layerInfo:t}),{popups:[{position:{coordinates:o},id:p()()}]}}},onPopupClose:function(){return function(){return{popups:[]}}}}),(0,i.withPropsOnChange)(["mapInfo","popups"],(function(e){var t=e.mapInfo,r=e.popups,n=e.options,i=(n=void 0===n?{}:n).mapOptions,u=(i=void 0===i?{}:i).mapInfoFormat,a=void 0===u?C():u,c=t.responses,s=t.requests,p=t.validResponses,l=function(){return o().createElement(h,{renderEmpty:!0,responses:c,requests:s,validResponses:p,format:a,showEmptyMessageGFI:!0,missingResponses:(s||[]).length-(c||[]).length})};return{popups:r.map((function(e){return k(k({},e),{},{component:l})}))}})),(0,i.withPropsOnChange)(["plugins","onPopupClose","popups"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.plugins,r=e.popups,n=e.onPopupClose,i=t.PopupSupport,u=t.tools,a=void 0===u?{}:u,c=E(t,P);if(!i)return{};var s=function(e){return o().createElement(i,S({},e,{popups:r,onPopupClose:n}))};return{plugins:k(k({},c),{},{tools:k(k({},a),{},{popup:s})})}})))),I=(0,i.withPropsOnChange)(["onClick","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onClick,r=void 0===t?function(){}:t,n=e.eventHandlers,o=void 0===n?{}:n;return{eventHandlers:k(k({},o),{},{onClick:r})}}))},61928:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(24852),o=r.n(n),i=r(45697),u=r.n(i),a=r(47037),c=r.n(a);function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}var p=["impl","name"];function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function y(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?y(Object(r),!0).forEach((function(t){j(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):y(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function b(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function v(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return O(e)}function O(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function j(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}(a,e);var t,r,n,i,u=(n=a,i=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=g(n);if(i){var r=g(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return h(this,e)});function a(){var e;b(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return j(O(e=u.call.apply(u,[this].concat(r))),"getTool",(function(t){var r=e.props.plugins;return c()(t)?{name:t,impl:r.tools[t]}:d({name:t.name,impl:r.tools[t.name]},t)})),j(O(e),"renderLayers",(function(){var t=e.props.map&&e.props.map.projection||"EPSG:3857",r=e.props.plugins.Layer;return e.props.layers.map((function(n,i){return o().createElement(r,{type:n.type,srs:t,position:i,key:n.id||n.name,options:n,env:n.localizedLayerStyles?e.props.env:[]},e.renderLayerContent(n,t))}))})),j(O(e),"renderLayerContent",(function(t,r){if(t.features&&"vector"===t.type){var n=e.props.plugins.Feature;return t.features.map((function(e){return o().createElement(n,{key:e.id,msId:e.id,type:e.type,crs:r,geometry:e.geometry,features:e.features,featuresCrs:t.featuresCrs||"EPSG:4326",layerStyle:t.style,style:e.style||t.style||null,properties:e.properties})}))}return null})),j(O(e),"renderTools",(function(){return e.props.tools.map((function(t){var r=e.getTool(t),n=r.impl,i=r.name,u=f(r,p);return o().createElement(n,l({key:i},u))}))})),e}return t=a,(r=[{key:"render",value:function(){var e=this.props.plugins.Map,t=this.props.map&&this.props.map.projection||"EPSG:3857";return this.props.map&&e?o().createElement(e,l({projectionDefs:this.props.projectionDefs,style:this.props.styleMap,id:this.props.id,zoomControl:!1,center:{x:0,y:0},zoom:1,hookRegister:this.props.hookRegister,mapStateSource:this.props.mapStateSource||this.props.id},this.props.options,this.props.map,{projection:t},this.props.eventHandlers),this.renderLayers(),this.renderTools(),this.props.children):null}}])&&v(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(o().Component);j(w,"propTypes",{id:u().string,options:u().object,map:u().object,mapStateSource:u().string,eventHandlers:u().object,styleMap:u().object,layers:u().array,hookRegister:u().object,projectionDefs:u().array,plugins:u().any,tools:u().array,getLayerProps:u().func,env:u().array}),j(w,"defaultProps",{id:"__base_map__",options:{},map:{},styleMap:{},tools:[],projectionDefs:[],eventHandlers:{onMapViewChanges:function(){},onClick:function(){},onMouseMove:function(){},onLayerLoading:function(){},onLayerError:function(){}},env:[]});const P=w},7848:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(71703),o=r(22222),i=r(93152);const u=(0,n.connect)((0,o.P1)(i.$v,(function(e){return{mapType:e}})))},91812:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(67076),o=r(38482);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return(0,n.compose)((0,n.withStateHandlers)((function(){return{resize:0}}),{onResize:function(e){var t=e.resize,r=void 0===t?0:t;return function(){return{resize:r+1}}}}),(0,o.Z)({debounceTime:e}),(0,n.withProps)((function(e){var t=e.options,r=e.resize;return{options:u(u({},t),{},{resize:r})}})))}},37981:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67076),o=r(37275),i=r(1469),u=r.n(i);const a=(0,n.withProps)((function(e){var t=e.projectionDefs;return{projectionDefs:u()(t)&&t.length?t:o.ZP.getConfigProp("projectionDefs")||[]}}))},57068:(e,t,r)=>{"use strict";r.d(t,{e:()=>p});var n=r(67076),o=r(82030),i=r(5346),u=r(24852),a=r.n(u),c=r(37275),s=(0,n.withProps)((function(e){var t=e.map;return{projection:e.projection||(t.data&&t.data.map?t.data.map.projection:t&&t.projection)}})),p=(0,n.compose)(s,(0,o.Z)((function(e){var t=e.projectionDefs,r=void 0===t?c.ZP.getConfigProp("projectionDefs")||[]:t,n=e.projection;return n&&0===r.concat([{code:"EPSG:4326"},{code:"EPSG:3857"},{code:"EPSG:900913"}]).filter((function(e){return e.code===n})).length}),(function(e){var t=e.projection;return{glyph:"1-map",style:{width:"100%",height:"100%",display:"flex"},title:a().createElement(i.Z,{msgId:"map.errors.loading.title"}),mainViewStyle:{margin:"auto"},imageStyle:{height:120,width:120,margin:"auto"},description:a().createElement(i.Z,{msgId:"map.errors.loading.projectionError",msgParams:{projection:t}})}})))},19180:(e,t,r)=>{"use strict";r.d(t,{Z:()=>v});var n=r(24852),o=r.n(n),i=r(45697),u=r.n(i);function a(e){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}function c(){return c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function l(e,t){return l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},l(e,t)}function f(e,t){if(t&&("object"===a(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return y(e)}function y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},d(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const v=function(e){var t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&l(e,t)}(m,t);var n,i,u,a,v=(u=m,a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=d(u);if(a){var r=d(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return f(this,e)});function m(){var e;s(this,m);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return b(y(e=v.call.apply(v,[this].concat(r))),"state",{plugins:{}}),e}return n=m,(i=[{key:"componentDidMount",value:function(){this.setPlugins(this.props),this._isMounted=!0}},{key:"componentWillUpdate",value:function(e){e.mapType!==this.props.mapType&&this.setPlugins(e)}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var t=this.state.plugins;return o().createElement(e,c({},this.props,{plugins:t}))}},{key:"setPlugins",value:function(e){var t=this;e.mapType&&r(43120)("./"+e.mapType+".js").then((function(e){t._isMounted&&(t.setState({plugins:e.default()}),t.props.onMapTypeLoaded())}))}}])&&p(n.prototype,i),Object.defineProperty(n,"prototype",{writable:!1}),m}(o().Component);return b(t,"propTypes",{mapType:u().string,onMapTypeLoaded:u().func}),b(t,"defaultProps",{onMapTypeLoaded:function(){}}),t.displayName="".concat(e.displayName,"WithMapType"),t}},69705:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});var n=r(67076);function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const a=(0,n.compose)((0,n.withHandlers)({onMapViewChanges:function(e){var t=e.map,r=void 0===t?{}:t,n=e.onMapViewChanges,o=void 0===n?function(){}:n;return function(e,t,n,u,a,c,s,p){o(i(i({},r),{},{center:e,bbox:i(i({},r.bbox),n),zoom:t,size:u,mapStateSource:a,projection:c,resolution:p}))}}}),(0,n.withPropsOnChange)(["onMapViewChanges","eventHandlers"],(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.onMapViewChanges,r=void 0===t?function(){}:t,n=e.eventHandlers,o=void 0===n?{}:n;return{eventHandlers:i(i({},o),{},{onMapViewChanges:r})}})))},19983:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(24852),o=r.n(n),i=r(45697),u=r.n(i),a=r(52259);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var l=function(e){return function(t){var r,i,u,c,p,l,f,y=(null==t||null===(r=t.map)||void 0===r?void 0:r.projection)||"EPSG:3857",d=(null==t||null===(i=t.map)||void 0===i||null===(u=i.mapOptions)||void 0===u||null===(c=u.view)||void 0===c?void 0:c.DPI)||null,b=null==t||null===(p=t.map)||void 0===p||null===(l=p.mapOptions)||void 0===l||null===(f=l.view)||void 0===f?void 0:f.scales,v=(0,n.useMemo)((function(){return b?(0,a.getResolutionsForScales)(b,y,d):null}),[b,y,d]),m=v?s(s({},t),{},{map:s(s({},t.map),{},{mapOptions:s(s({},t.map.mapOptions),{},{view:s(s({},t.map.mapOptions.view),{},{resolutions:v})})})}):t;return o().createElement(e,m)}};l.propTypes={Component:u().element};const f=l},35400:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(24852),o=r.n(n),i=r(79313);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.style,r=void 0===t?{}:t,n=e.mainViewStyle,u=void 0===n?{}:n,c=e.contentStyle,s=void 0===c?{}:c,p=e.imageStyle,l=void 0===p?{}:p,f=e.glyph,y=void 0===f?"info-sign":f,d=e.iconFit,b=e.title,v=e.tooltip,m=e.tooltipId,h=e.description,O=e.content;return o().createElement("div",{className:"empty-state-container",style:a({height:d?"100%":void 0},r)},o().createElement("div",{key:"main-view",className:"empty-state-main-view",style:a({height:d?"100%":void 0},u)},y?o().createElement("div",{key:"glyph",className:"empty-state-image",style:a({height:d?"100%":void 0},l)},o().createElement(i.Z,{iconFit:d,tooltip:v,tooltipId:m,glyph:y})):null,b?o().createElement("h1",{key:"title"},b):null,h?o().createElement("p",{key:"description",className:"empty-state-description"},h):null),o().createElement("div",{key:"content",className:"empty-state-content",style:s},O))}},79313:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(24852),o=r.n(n),i=r(30294),u=r(96259),a=(0,r(15135).Z)(i.Glyphicon);const c=function(e){var t=e.glyph,r=void 0===t?"info-sign":t,n=e.tooltip,i=e.tooltipId,c=e.iconFit,s=e.padding,p=void 0===s?0:s,l=e.margin,f=void 0===l?0:l;return o().createElement(u.Z,null,(function(e){var t=e.width,u=e.height;return o().createElement(a,{glyph:r,tooltip:n,tooltipId:i,style:{display:"inline-block",padding:p+"px",margin:f+"px",textAlign:"center",fontSize:c?Math.min(t,u)-2*p-2*f:t-2*p-2*f}})}))}},82030:(e,t,r)=>{"use strict";r.d(t,{Z:()=>s});var n=r(24852),o=r.n(n),i=r(23560),u=r.n(i),a=r(67076),c=r(35400);const s=function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:c.Z;return(0,a.branch)(e,(function(){return function(e){return o().createElement(r,t&&u()(t)?t(e):t)}}))}},38482:(e,t,r)=>{"use strict";r.d(t,{Z:()=>P});var n=r(24852),o=r.n(n),i=r(23279),u=r.n(i),a=r(45697),c=r.n(a),s=r(80307),p=r.n(s),l=r(91033);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t,r){return t&&d(e.prototype,t),r&&d(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function v(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m(e,t)}function m(e,t){return m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},m(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=j(e);if(t){var o=j(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return O(this,r)}}function O(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function j(e){return j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},j(e)}function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.debounceTime,r=e.querySelector,n=e.closest,i=void 0!==n&&n;return function(e){var n;return n=function(n){v(c,n);var a=h(c);function c(e){var n;return y(this,c),w(g(n=a.call(this,e)),"findDomNode",(function(){if(!n.isMounded)return null;var e=p().findDOMNode(g(n));return e&&i&&r?e.closest(r||"*"):e&&(r?e.querySelector(r):e)})),n.width=void 0,n.height=void 0,n.skipOnMount=e.skipOnMount,n.div=null,n.onResize=u()((function(){var e;return(e=n.props).onResize.apply(e,arguments)}),void 0!==t?t:e.debounceTime||1e3),n.ro=new l.Z((function(e){e.forEach((function(e){var t=e.contentRect,r=t.width,o=t.height,i=n.props.handleWidth&&n.width!==r,u=n.props.handleHeight&&n.height!==o;n.skipOnMount||!i&&!u||n.onResize({width:r,height:o}),n.width=r,n.height=o,n.skipOnMount=!1}))})),n}return b(c,[{key:"componentDidMount",value:function(){this.isMounded=!0,this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentDidUpdate",value:function(){this.div=this.findDomNode(),this.div&&this.ro.observe(this.div)}},{key:"componentWillUnmount",value:function(){var e=this.findDomNode();e&&this.ro&&this.ro.unobserve&&this.ro.unobserve(e)}},{key:"render",value:function(){return o().createElement(e,this.props)}}]),c}(o().Component),w(n,"propTypes",{handleWidth:c().bool,handleHeight:c().bool,onResize:c().func}),w(n,"defaultProps",{onResize:function(){},handleWidth:!0,handleHeight:!0}),n}}}}]);