(self.webpackChunkgeonode_mapstore_client=self.webpackChunkgeonode_mapstore_client||[]).push([[1255],{85148:(e,r,t)=>{"use strict";t.d(r,{Qw:()=>g,jo:()=>d,m$:()=>y,AF:()=>b,WT:()=>p,ns:()=>m,RP:()=>O,aK:()=>v,oP:()=>j});var n=t(75110),u=t(22222),i=t(86494);function o(e){return function(e){if(Array.isArray(e))return c(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(e){if("string"==typeof e)return c(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?c(e,r):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function f(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var g=function(e,r){return function(t){return(0,i.get)(t,"dimension.data[".concat(r,"][").concat(e,"]"))}},s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;return(0,i.find)(e.dimensions||[],{name:r})},d=function(e,r){return function(t){return g(e.id,r)(t)||s(e,r)}},y=function(e){return(0,n.l2)(e).reduce((function(r,t){var n=d(t,"time")(e);return n?f(f({},r),{},l({},t.id,n)):r}),{})},b=function(e){return(0,n.l2)(e).filter((function(r){var t=(0,i.get)(e,"timeline.settings.showHiddenLayers"),n=s(r,"time");return(t||r.visibility)&&n}))},p=function(e){var r=(0,i.get)(e,"dimension.currentTime");return r&&r.split("/")[0]},m=function(e){return(0,i.get)(e,"dimension.offsetTime")},O=function(e){return!!m(e)},v=((0,u.P1)(y,(function(e){return Object.keys(e).reduce((function(r,t){return[].concat(o(r),o(e[t]&&e[t].values||[]))}),[]).sort()||[]})),function(e){return function(r){return o((0,i.get)(d(e,"time")(r),"values",[])).sort()}}),j=function(e,r){var t=g(r,"time")(e),n=t&&t.domain&&t.domain.split("--");if(n&&2===n.length)return n&&{start:n[0],end:n[1]};var u=t&&t.domain&&t.domain.split(",");return u&&u.length>0?{start:u[0],end:u[u.length-1]}:null}},31255:(e,r,t)=>{"use strict";t.d(r,{u$:()=>m,PI:()=>O,_w:()=>v,eO:()=>j,kG:()=>h,P3:()=>w,bq:()=>S,LB:()=>D,b4:()=>A,M0:()=>F,Li:()=>k,Rd:()=>I,g5:()=>L,Sj:()=>T,o:()=>E,eK:()=>_,jY:()=>C,ND:()=>M,OK:()=>G,tU:()=>x,ou:()=>z,DK:()=>K,Gl:()=>N,uz:()=>R,Ci:()=>Q,Ae:()=>U,gz:()=>H,He:()=>V,P4:()=>W,kd:()=>$,TC:()=>B,nq:()=>Y,Vf:()=>X});var n=t(86494),u=t(75110),i=t(78889),o=t(8316),c=t(52259),a=t(96958),f=t(85148),l=t(74621),g=t(93152),s=t(24260);function d(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function y(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?d(Object(t),!0).forEach((function(r){b(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):d(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function b(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var p=u.CA,m=function(e){return(0,n.get)(e,"featuregrid.selectedLayer")},O=function(e){return(0,n.get)(e,"featuregrid.chartDisabled",!1)},v=function(e){return e&&e.featuregrid&&e.featuregrid.select},j=function(e){return e&&e.featuregrid&&e.featuregrid.changes},h=function(e){return e&&e.featuregrid&&e.featuregrid.newFeatures},w=function(e){return(0,n.head)(v(e))},P=function(e){var r=(0,s.Qs)(e);if(r){var t=(0,i.findGeometryProperty)(r);return t&&t.localType}return null},q=["Geometry","GeometryCollection"],S=function(e){return!(0,n.head)(q.filter((function(r){return P(e)===r})))},D=function(e){return j(e)&&j(e).length>0},A=function(e){return h(e)&&h(e).length>0},F=function(e){return e&&e.featuregrid&&e.featuregrid.filters},k=function(e){return p(e,m(e))},I=function(e){return e&&e.featuregrid&&e.featuregrid.open},L=function(e,r){return(0,n.get)(F(e),r)},T=function(e){var r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e.title||e.name}(p(e,m(e)));return(0,n.isObject)(r)?r[(0,o.Pz)(e)]||r.default||"":r},E=function(e){return((0,s.L)(e)||[]).map((function(r){var t=function(e,r){return(0,n.get)(e,"featuregrid.attributes[".concat(r.name||r.attribute,"]"))}(e,r);return t?y(y({},r),t):r}))},_=function(e){return e&&e.featuregrid&&e.featuregrid.mode},C=function(e){return(v(e)||[]).length},M=function(e){return(0,a.rK)(j(e))},G=function(e){return function(e){var r=w(e);if(r){var t=(0,a.rK)(j(e));return!((!t[r.id]||null===t[r.id].geometry)&&(t[r.id]&&null===t[r.id].geometry||r._new&&(0,n.head)(h(e))&&null===(0,n.head)(h(e)).geometry||(!r._new||!(0,n.head)(h(e))||null===(0,n.head)(h(e)).geometry)&&null===r.geometry))}return!1}(e)},x=function(e){return(0,n.get)(e,"featuregrid.showAgain",!1)},z=function(e){if((0,n.get)(e,"featuregrid.showTimeSync",!1)){var r=m(e);return(0,f.jo)({id:r},"time")(e)}return null},K=function(e){return(0,n.get)(e,"featuregrid.timeSync",!1)},N=function(e){return(0,n.get)(e,"featuregrid.showPopoverSync",!0)},R=function(e){return e&&e.featuregrid&&e.featuregrid.saving},Q=function(e){return e&&e.featuregrid&&e.featuregrid.saved},U=function(e){return e&&e.featuregrid&&e.featuregrid.drawing},H=function(e){return(0,n.get)(e,"featuregrid.multiselect",!1)},V=function(e){return(0,c.isSimpleGeomType)(P(e))},W=function(e){return e.featuregrid&&e.featuregrid.dockSize},$=function(e){var r=p(e,m(e));return r&&r.name||""},B=function(e){var r=function(e){return(0,n.get)(p(e,m(e)),"params")}(e);return{viewParams:r&&(r.VIEWPARAMS||r.viewParams||r.viewparams),cqlFilter:r&&(r.CQL_FILTER||r.cqlFilter||r.cql_filter)}},Y=function(e){var r=(0,l.L3)(e),t=function(e){return(0,n.get)(e,"featuregrid.editingAllowedRoles",["ADMIN"])}(e)||["ADMIN"],u=function(e){return e&&e.featuregrid&&e.featuregrid.canEdit}(e);return(-1!==t.indexOf(r)||u)&&!(0,g.c0)(e)},X=function(e){return(0,n.get)(e,"featuregrid.pagination")}},24260:(e,r,t)=>{"use strict";t.d(r,{qj:()=>f,Bu:()=>l,UM:()=>g,X1:()=>s,L:()=>d,HY:()=>y,Mz:()=>b,F0:()=>p,dc:()=>m,b0:()=>O,hk:()=>v,Qs:()=>j,gy:()=>h,M7:()=>w,VD:()=>P});var n=t(86494);function u(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?u(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}var c=function(e){return(0,n.get)(e,"query.filterObj.featureTypeName")},a=function(e){return function(r){return(0,n.get)(r,'query.featureTypes["'.concat(e,'"]'))}},f=function(e,r){return(0,n.get)(a(r)(e),"original")},l=function(e){return e&&e.query&&e.query.searchUrl},g=function(e){return e&&e.query&&e.query.url},s=function(e){return e&&e.query&&e.query.filterObj},d=function(e){return(0,n.get)(a(c(e))(e),"attributes")},y=function(e){return(0,n.get)(e,"query.typeName")},b=function(e){return(0,n.get)(e,"query.result.features")},p=function(e){var r=(0,n.get)(e,"query.result");return i(i({},r),{},{features:(r&&r.features||[]).filter((function(e){return!(0,n.isNil)(e.geometry)}))})},m=function(e,r){var t=e&&e.query&&e.query.result&&e.query.result.features;return(0,n.head)(t.filter((function(e){return e.id===r})))},O={startIndex:function(e){return(0,n.get)(e,"query.filterObj.pagination.startIndex")},maxFeatures:function(e){return(0,n.get)(e,"query.filterObj.pagination.maxFeatures")},resultSize:function(e){return(0,n.get)(e,"query.result.features.length")},totalFeatures:function(e){return(0,n.get)(e,"query.result.totalFeatures")}},v=function(e,r){var t=a(r)(e);return!!(t&&t.attributes&&t.geometry&&t.original)},j=function(e){return f(e,c(e))},h=function(e){return(0,n.get)(e,"query.featureLoading")},w=function(e){return(0,n.get)(e,"query.syncWmsFilter",!1)},P=function(e){var r=(0,n.get)(e,"query.filterObj.crossLayerFilter"),t=(0,n.get)(e,"query.filterObj.spatialField"),u=(0,n.get)(e,"query.filterObj.filterFields");return!!(u&&(0,n.head)(u)||t&&(t.method&&t.operation&&t.geometry||(0,n.isArray)(t)&&(0,n.findIndex)(t,(function(e){return e.method&&e.operation&&e.geometry}))>-1)||r&&r.collectGeometries&&r.operation)}}}]);