(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1317],{32425:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(45697),o=r.n(n),i=r(67294),a=r.n(i);function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var s=function(e){return e>100?"full":e>40?"medium":"small"},p=function(e){var t=e.size,r=e.style,n=void 0===r?{}:r,o=e.className,i=e.hidden;return a().createElement("div",{className:o,style:l({width:t,height:t,overflow:"hidden"},n)},!i&&a().createElement("div",{className:"mapstore-".concat(s(t),"-size-loader")}))};p.propTypes={size:o().number,className:o().string,style:o().object};const f=p},12610:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(67294),o=r.n(n),i=r(18093),a=r(57557),c=r.n(a),l=r(15135);const u=(0,i.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.disabled,r=e.noTooltipWhenDisabled,n=void 0!==r&&r;return!(n&&t)}),l.Z,(function(e){return function(t){return o().createElement(e,c()(t,["tooltipId","tooltip","noTooltipWhenDisabled"]),t.children)}}))},5993:(e,t,r)=>{"use strict";r.d(t,{Z:()=>y});var n=r(45697),o=r.n(n),i=r(84596),a=r.n(i),c=r(18093),l=r(86638),u=["locale"];function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){f(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const y=function(e){return(0,c.compose)((0,c.getContext)({locale:o().string}),(0,c.mapProps)((function(t){var r=t.locale,n=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,u);return p(p({},n),a()(e).reduce(function(e,t){return function(){var r=arguments.length>1?arguments[1]:void 0;return p(p({},arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}),{},f({},r,e[r]&&(0,l.MZ)(t,e[r])))}}(n,r),{}))})))}},17252:(e,t,r)=>{"use strict";r.d(t,{Z:()=>h});var n=r(67294),o=r.n(n),i=r(18093),a=r(45697),c=r.n(a),l=r(57557),u=r.n(l),s=r(80681),p=r(50966);function f(e){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},f(e)}function y(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function v(e,t){if(t&&("object"===f(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}function g(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const h=(0,i.branch)((function(e){return e.popover}),(function(e){var t;return t=function(t){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&b(e,t)}(f,t);var r,n,a,c,l=(a=f,c=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(a);if(c){var r=m(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return v(this,e)});function f(){return y(this,f),l.apply(this,arguments)}return r=f,(n=[{key:"renderPopover",value:function(){return o().createElement(s.Popover,u()(this.props.popover,["trigger","placement","text"]),this.props.popover.text)}},{key:"renderContent",value:function(){var t=(0,i.toClass)(e);return o().createElement(t,u()(this.props,["popover"]))}},{key:"render",value:function(){var e=!0===this.props.popover.trigger?["hover","focus"]:this.props.popover.trigger;return o().createElement("span",null,o().createElement(p.Z,{trigger:e,placement:this.props.popover.placement,overlay:this.renderPopover()},this.renderContent()))}}])&&d(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),f}(o().Component),g(t,"propTypes",{popover:c().object}),g(t,"defaultProps",{popover:{trigger:!0}}),t}))},79105:(e,t,r)=>{"use strict";r.d(t,{Z:()=>o});var n=r(18093);const o=function(e,t,r){return(0,n.branch)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return!e[t]}),(0,n.withState)(e,t,r))}},80717:(e,t,r)=>{"use strict";r.d(t,{Z:()=>f});var n=r(67294),o=r.n(n),i=r(19081),a=r.n(i),c=r(80681),l=r(90085),u=["visible","Element","renderButton"];function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.buttons,r=void 0===t?[]:t,n=e.btnGroupProps,i=void 0===n?{}:n,f=e.btnDefaultProps,y=void 0===f?{}:f,d=e.transitionProps,b=void 0===d?{transitionName:"toolbar-btn-transition",transitionEnterTimeout:300,transitionLeaveTimeout:300}:d,v=function(){return r.map((function(e,t){var r=e.visible,n=void 0===r||r,i=e.Element,a=e.renderButton,c=p(e,u);return n?a||i&&o().createElement(i,s({key:c.key||t},c))||o().createElement(l.Z,s({key:c.key||t},y,c)):null}))};return o().createElement(c.ButtonGroup,i,b?o().createElement(a(),b,v()):v())}},90085:(e,t,r)=>{"use strict";r.d(t,{Z:()=>m});var n=r(67294),o=r.n(n),i=r(18093),a=r(5346),c=r(57557),l=r.n(c),u=r(80681),s=r(32425),p=r(12610),f=r(17252),y=r(38560),d=["glyph","loading","text","textId","glyphClassName","loaderProps","children"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},b.apply(this,arguments)}function v(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const m=(0,i.compose)(p.Z,f.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.glyph,r=e.loading,n=e.text,i=void 0===n?"":n,c=e.textId,p=e.glyphClassName,f=void 0===p?"":p,m=e.loaderProps,g=void 0===m?{}:m,h=e.children,O=v(e,d);return o().createElement(y.Z,l()(O,["pullRight","confirmNo","confirmYes"]),t&&!r?o().createElement(u.Glyphicon,{glyph:t,className:f}):null,c?o().createElement(a.Z,{msgId:c}):i,r?o().createElement(s.Z,b({className:"ms-loader".concat(O.bsStyle&&" ms-loader-"+O.bsStyle||"").concat(O.bsSize&&" ms-loader-"+O.bsSize||"")},g)):null,h)}))},75927:(e,t,r)=>{"use strict";r.d(t,{Z:()=>b});var n=r(13218),o=r.n(n),i=r(67294),a=r.n(i),c=r(80681),l=r(5346),u=r(15135),s=["settings","element","tabs","activeTab","width","groups","isLocalizedLayerStylesEnabled","setActiveTab","onUpdateParams","onRetrieveLayerData","realtimeUpdate"];function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},p.apply(this,arguments)}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function y(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var d=(0,u.Z)(c.NavItem);const b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.settings,r=e.element,n=void 0===r?{}:r,i=e.tabs,u=void 0===i?[]:i,b=e.activeTab,v=e.width,m=e.groups,g=e.isLocalizedLayerStylesEnabled,h=e.setActiveTab,O=void 0===h?function(){}:h,j=e.onUpdateParams,P=void 0===j?function(){}:j,w=e.onRetrieveLayerData,E=void 0===w?function(){}:w,S=e.realtimeUpdate,k=y(e,s);return a().createElement(c.Row,{key:"ms-toc-settings-navbar",className:"ms-row-tab"},a().createElement(c.Col,{xs:12},a().createElement(c.Nav,{bsStyle:"tabs",activeKey:b,justified:!0},u.map((function(e){return a().createElement(d,{key:"ms-tab-settings-"+e.id,tooltip:a().createElement(l.Z,{msgId:e.tooltipId}),eventKey:e.id,onClick:function(){return O(e.id)}},a().createElement(c.Glyphicon,{glyph:e.glyph}))})))),a().createElement(c.Col,{xs:12},u.filter((function(e){return e.id&&e.id===b})).filter((function(e){return e.Component})).map((function(e){return a().createElement(e.Component,p({},k,{key:"ms-tab-settings-body-"+e.id,containerWidth:v,element:n,groups:m,nodeType:t.nodeType,settings:t,retrieveLayerData:E,isLocalizedLayerStylesEnabled:g,onChange:function(e,t){return o()(e)?P(e,S):P(f({},e,t),S)}}))}))))}},16701:(e,t,r)=>{"use strict";r.d(t,{Z:()=>O});var n=r(67294),o=r.n(n),i=r(18093),a=r(81859),c=r(90690),l=r(29423),u=r(21338),s=r(91175),p=r.n(s);function f(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function y(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?f(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var b=function e(t,r){return t.reduce((function(t,n){var o=y({},n);return o.nodes&&(o=y(y({},o),{},{nodes:e(o.nodes,r)})),r.forEach((function(e){o.nodes&&e.func(o)?o=y(y({},o),e.options):o.nodes&&(o=y({},o))})),t.push(o),t}),[])},v=function(e){var t=e.nodes,r=e.filterText;return e.currentLocale,b(t,[{options:{showComponent:!0},func:function(){return!r}},{options:{loadingError:!0},func:function(e){return p()(e.nodes.filter((function(e){return e.loadingError&&"Warning"!==e.loadingError})))}},{options:{expanded:!0,showComponent:!0},func:function(e){return r&&p()(e.nodes.filter((function(e){return!0})))}}])};const m=(0,i.withProps)((function(e){return{nodes:v(e)}}));var g=r(3307),h=r(17802);const O=(0,i.compose)(h.Z,m,g.Z)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.changeLayerPropertyByGroup,r=void 0===t?function(){}:t,n=e.changeLayerProperty,i=void 0===n?function(){}:n,s=e.changeGroupProperty,p=void 0===s?function(){}:s,f=e.onSort,y=e.onSelect,d=e.selectedNodes,b=e.nodes,v=void 0===b?[]:b;return o().createElement(u.Z,{onSort:f,selectedNodes:d,onSelect:y,nodes:v},o().createElement(l.Z,{groupElement:o().createElement(a.Z,{onSort:f,selectedNodes:d,onSelect:y,propertiesChangeHandler:function(e,t){return Object.keys(t).map((function(n){return r(e,n,t[n])}))},onToggle:function(e,t){return p(e,"expanded",!t)},groupVisibilityCheckbox:!0}),layerElement:o().createElement(c.Z,{selectedNodes:d,onSelect:y,titleTooltip:!0,propertiesChangeHandler:function(e,t){return Object.keys(t).map((function(r){return i(e,r,t[r])}))},onUpdateNode:function(e,t,r){return Object.keys(r).map((function(t){return i(e,t,r[t])}))},onToggle:function(e,t){return i(e,"expanded",!t)}})}))}))},3307:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(84596),o=r.n(n),i=r(30998),a=r.n(i),c=r(18093),l=r(24262);const u=(0,c.withHandlers)({changeLayerProperty:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,o=void 0===n?{}:n;return function(e,t,n){var i=a()(o.layers||[],{id:e});r("map.layers[".concat(i,"].").concat(t),n)}},changeLayerPropertyByGroup:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,o=void 0===n?{}:n;return function(e,t,n){return o.layers.filter((0,l.CK)(e)).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return a()(o.layers||[],{id:t})})).filter((function(e){return e>=0})).map((function(e){return r("map.layers[".concat(e,"].").concat(t),n)}))}},changeGroupProperty:function(e){var t=e.onChange,r=void 0===t?function(){}:t,n=e.map,i=void 0===n?[]:n;return function(e,t,n){var c,l=i.groups?o()(i.groups):[],u=a()(l,(function(t){return e===t.id})),s=-1===u?l.length:u;"expanded"!==t||null!=l&&null!==(c=l[s])&&void 0!==c&&c.id||r("map.groups[".concat(s,"].id"),e),r("map.groups[".concat(s,"].").concat(t),n)}},updateMapEntries:function(e){var t=e.onChange,r=void 0===t?function(){}:t;return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map((function(t){return r("map[".concat(t,"]"),e[t])}))}}})},48860:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(30998),o=r.n(n),i=r(18093);function a(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var l=function(e,t){return(t.layers||[]).filter((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.group,n=void 0===r?"Default":r;return n===e})).map((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.id;return t}))};const u=(0,i.compose)((0,i.withStateHandlers)((function(){return{selectedLayers:[],selectedGroups:[]}}),{onNodeSelect:function(e,t){var r=e.selectedLayers,n=void 0===r?[]:r,i=e.selectedGroups,c=void 0===i?[]:i,u=t.map,s=void 0===u?{}:u;return function(e,t,r){return{selectedLayers:"group"===t?o()(c,(function(t){return t===e}))>=0?n.filter((function(t){return o()(l(e,s),(function(e){return e===t}))<0})):r?[].concat(a(n),a(l(e,s))):a(l(e,s)):o()(n,(function(t){return t===e}))>=0?n.filter((function(t){return t!==e})):r?[].concat(a(n),[e]):[e],selectedGroups:"group"===t?o()(c,(function(t){return t===e}))>=0?c.filter((function(t){return t!==e})):r?[].concat(a(c),[e]):[e]:r?c:[]}}}}),(0,i.withProps)((function(e){var t=e.selectedLayers,r=e.selectedGroups;return{selectedNodes:[].concat(a(t),a(r))}})))},17802:(e,t,r)=>{"use strict";r.d(t,{Z:()=>i});var n=r(18093),o=r(24262);const i=(0,n.withProps)((function(e){var t,r,n,i=e.map;return{nodes:(t=(0,o.DN)(i),r=t.layers,n=void 0===r?{}:r,(0,o.C1)(n.flat||[],n.groups||[]).groups)}}))},51768:(e,t,r)=>{"use strict";r.d(t,{Z:()=>F});var n=r(27361),o=r.n(n),i=r(18093),a=r(24262),c=r(79105),l=r(87427),u=r(10907),s=r(63209),p=r(30998),f=r.n(p),y=r(45697),d=r.n(y),b=r(67294),v=r.n(b),m=r(80681),g=r(43129),h=r(38560),O=r(5346);function j(e){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},j(e)}function P(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function w(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function E(e,t){return E=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},E(e,t)}function S(e,t){if(t&&("object"===j(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return k(e)}function k(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function C(e){return C=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},C(e)}function Z(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&E(e,t)}(a,e);var t,r,n,o,i=(n=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=C(n);if(o){var r=C(this).constructor;e=Reflect.construct(t,arguments,r)}else e=t.apply(this,arguments);return S(this,e)});function a(){var e;P(this,a);for(var t=arguments.length,r=new Array(t),n=0;n<t;n++)r[n]=arguments[n];return Z(k(e=i.call.apply(i,[this].concat(r))),"renderLegend",(function(){return null})),Z(k(e),"renderItemLabel",(function(e){return v().createElement("div",null,v().createElement("div",{key:"item-title"},e.title||e.name),v().createElement("div",null,v().createElement("small",{className:"text-muted",key:"item-key-description"},e.name)))})),Z(k(e),"renderError",(function(){return e.props.element&&e.props.element.capabilities&&e.props.element&&e.props.element.capabilities.error?v().createElement(m.Alert,{bsStyle:"danger"},v().createElement(O.Z,{msgId:"layerProperties.styleListLoadError"})):null})),Z(k(e),"updateEntry",(function(t,r){var n=r.target.value;e.props.onChange(t,n)})),e}return t=a,(r=[{key:"render",value:function(){var e=this,t=[{label:"Default Style",value:""}].concat((this.props.element.availableStyles||[]).map((function(t){return{label:e.renderItemLabel(t),value:t.name}})));return(this.props.element.style&&this.props.element.availableStyles&&f()(this.props.element.availableStyles,(function(t){return t.name===e.props.element.style})))>=0||!this.props.element.style||t.push({label:this.props.element.style,value:this.props.element.style}),v().createElement(m.Grid,{fluid:!0,style:{paddingTop:15,paddingBottom:15}},v().createElement("form",{ref:"style"},v().createElement(g.ZP.Creatable,{key:"styles-dropdown",options:t,isLoading:this.props.element&&this.props.element.capabilitiesLoading,value:this.props.element.style||"",onOpen:function(){!e.props.element||e.props.element.capabilities&&e.props.element.availableStyles||e.props.retrieveLayerData(e.props.element)},promptTextCreator:function(e){return v().createElement(O.Z,{msgId:"layerProperties.styleCustom",msgParams:{value:e}})},onChange:function(t){e.updateEntry("style",{target:{value:t&&t.value||""}})}}),v().createElement("br",null),this.renderLegend(),this.renderError(),v().createElement(h.Z,{bsStyle:"primary",style:{float:"right"},onClick:function(){return e.props.retrieveLayerData(e.props.element)}},v().createElement(m.Glyphicon,{glyph:"refresh"})," ",v().createElement(O.Z,{msgId:"layerProperties.stylesRefreshList"})),v().createElement("br",null)))}}])&&w(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),a}(v().Component);Z(L,"propTypes",{retrieveLayerData:d().func,onChange:d().func,element:d().object,groups:d().array}),Z(L,"defaultProps",{element:{},retrieveLayerData:function(){},onChange:function(){}});const D=L;var T=r(3307),x=r(17802),N=r(89255),I=r(80833);function _(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function R(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?_(Object(r),!0).forEach((function(t){G(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):_(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function G(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const A=(0,i.mapPropsStream)((function(e){var t=(0,i.createEventHandler)(),r=t.stream,n=t.handler;return e.pluck("element").distinctUntilChanged((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.id===t.id})).switchMap((function(){return r.switchMap((function(e){return(0,I.kB)(e).map((function(e){return{capabilities:e,capabilitiesLoading:null,description:e._abstract,boundingBox:e.latLonBoundingBox,availableStyles:e.style&&(Array.isArray(e.style)?e.style:[e.style])}})).startWith({capabilitiesLoading:!0})})).catch((function(e){return N.Observable.of({capabilitiesLoading:null,capabilities:{error:"error getting capabilities",details:e},description:null})}))})).startWith({}).combineLatest(e,(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return R(R({},t),{},{retrieveLayerData:n,element:R(R({},t.element),e)})}))}));var B=r(66379),U=r.n(B),z=void 0;function H(e){return H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H(e)}var W=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0;for(var o in t)null!==t[o]&&"object"===H(t[o])&&(U()(t[o],r)&&n.apply(z,[t[o]]),e(t[o],r,n))};const M=(0,i.withProps)((function(e){var t=e.nodes,r=void 0===t?{}:t,n=e.editNode,o={};return n&&W(r,{id:n},(function(e){o=e})),{selectedNode:o}}));function K(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?K(Object(r),!0).forEach((function(t){Y(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):K(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function Y(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var $=A(D),q=(0,i.withProps)((function(e){return{tabs:e.tabs||[{id:"general",titleId:"layerProperties.general",tooltipId:"layerProperties.general",glyph:"wrench",visible:!0,Component:s.Z},{id:"display",titleId:"layerProperties.display",tooltipId:"layerProperties.display",glyph:"eye-open",visible:e.settings&&"layers"===e.settings.nodeType,Component:u.Z},{id:"style",titleId:"layerProperties.style",tooltipId:"layerProperties.style",glyph:"dropper",visible:e.settings&&"layers"===e.settings.nodeType&&e.element&&"wms"===e.element.type,Component:$}]}}));const F=(0,i.compose)(x.Z,M,(0,i.withState)("settings","onUpdateSettings",{}),(0,i.withProps)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.map,r=void 0===t?{}:t,n=e.selectedNode,i=e.settings,c=void 0===i?{}:i;return{element:n,settings:V(V({},c),{},{nodeType:n&&n.nodes?"groups":"layers",options:{opacity:c.opacity>=0?c.opacity:n.opacity>=0?n.opacity:1}}),groups:o()((0,a.DN)(r),"layers.groups")}})),(0,i.compose)(T.Z,(0,i.withHandlers)({onUpdateNode:function(e){var t=e.changeLayerProperty,r=void 0===t?function(){}:t,n=e.changeGroupProperty,o=void 0===n?function(){}:n,i=e.editNode;return function(e,t,n){"layers"===t&&Object.keys(n).map((function(e){return r(i,e,n[e])})),"groups"===t&&Object.keys(n).map((function(e){return o(i,e,n[e])}))}}}),(0,i.withHandlers)({onUpdateParams:function(e){var t=e.settings,r=void 0===t?{}:t,n=e.onUpdateNode,o=void 0===n?function(){}:n;return function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&o(r.node,r.nodeType,V(V({},r.props),e))}}})),l.kZ,(0,c.Z)("activeTab","setActiveTab","general"),q)}}]);