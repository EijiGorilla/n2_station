"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[8143],{87072:(e,t,r)=>{function i(e){var t;const r=e.layer;return"floorInfo"in r&&null!==(t=r.floorInfo)&&void 0!==t&&t.floorField&&"floors"in e.view?o(e.view.floors,r.floorInfo.floorField):null}function n(e,t){var r;return"floorInfo"in t&&null!==(r=t.floorInfo)&&void 0!==r&&r.floorField?o(e,t.floorInfo.floorField):null}function o(e,t){if(null===e||void 0===e||!e.length)return null;const r=e.filter((e=>""!==e)).map((e=>"'".concat(e,"'")));return r.push("''"),"".concat(t," IN (").concat(r.join(","),") OR ").concat(t," IS NULL")}r.d(t,{c:()=>i,f:()=>n})},58132:(e,t,r)=>{r.d(t,{FN:()=>o,QV:()=>n,ac:()=>l});var i=r(25265);function n(e,t,r){const i=t.flatten((e=>{let{sublayers:t}=e;return t})).length;return i!==e.length||(!!e.some((e=>e.originIdOf("minScale")>r||e.originIdOf("maxScale")>r||e.originIdOf("renderer")>r||e.originIdOf("labelingInfo")>r||e.originIdOf("opacity")>r||e.originIdOf("labelsVisible")>r||e.originIdOf("source")>r))||!s(e,t))}function o(e,t,r){return!!e.some((e=>{const t=e.source;return!(!t||"map-layer"===t.type&&t.mapLayerId===e.id&&(null==t.gdbVersion||t.gdbVersion===r))||e.originIdOf("renderer")>i.s3.SERVICE||e.originIdOf("labelingInfo")>i.s3.SERVICE||e.originIdOf("opacity")>i.s3.SERVICE||e.originIdOf("labelsVisible")>i.s3.SERVICE}))||!s(e,t)}function s(e,t){if(null===e||void 0===e||!e.length||null==t)return!0;const r=t.slice().reverse().flatten((e=>{let{sublayers:t}=e;return t&&t.toArray().reverse()})).map((e=>e.id)).toArray();if(e.length>r.length)return!1;let i=0;const n=r.length;for(const{id:o}of e){for(;i<n&&r[i]!==o;)i++;if(i>=n)return!1}return!0}function l(e){return!!e&&e.some((e=>{var t;return null!=e.minScale||null!=(null===(t=e.layerDefinition)||void 0===t?void 0:t.minScale)}))}},84848:(e,t,r)=>{r.d(t,{VF:()=>$,Uf:()=>Y});var i=r(27366),n=r(52639),o=r(7138),s=r(63780),l=r(80987),a=r(10064),u=r(42537),c=r(93169),p=r(77427),y=r(66978),d=r(94172),f=r(68860),h=r(49861),m=r(25243),g=r(69912),v=r(53866),b=r(82582),w=r(37270),x=r(87072);function _(e,t){return t?"xoffset"in t&&t.xoffset?Math.max(e,Math.abs(t.xoffset)):"yoffset"in t&&t.yoffset?Math.max(e,Math.abs(t.yoffset||0)):e:e}function I(e,t){var r;return"number"==typeof e?e:null!==e&&void 0!==e&&null!==(r=e.stops)&&void 0!==r&&r.length?function(e){let t=0,r=0;for(let i=0;i<e.length;i++){const n=e[i].size;"number"==typeof n&&(t+=n,r++)}return t/r}(e.stops):t}function S(e,t){if(!t)return e;const r=t.filter((e=>"size"===e.type)).map((t=>{const{maxSize:r,minSize:i}=t;return(I(r,e)+I(i,e))/2}));let i=0;const n=r.length;if(0===n)return e;for(let s=0;s<n;s++)i+=r[s];const o=Math.floor(i/n);return Math.max(o,e)}function F(e){var t;const r=null===e||void 0===e?void 0:e.renderer,i="touch"===(null===e||void 0===e||null===(t=e.event)||void 0===t?void 0:t.pointerType)?9:6;if(!r)return i;const n="visualVariables"in r?S(i,r.visualVariables):i;if("simple"===r.type)return _(n,r.symbol);if("unique-value"===r.type){var o;let e=n;return null!==(o=r.uniqueValueInfos)&&void 0!==o&&o.forEach((t=>{e=_(e,t.symbol)})),e}if("class-breaks"===r.type){let e=n;return r.classBreakInfos.forEach((t=>{e=_(e,t.symbol)})),e}return"dot-density"===r.type||r.type,n}var O=r(76200),C=r(91340),E=r(23084),R=r(76672),V=r(77981),j=r(92975),N=r(58132);function P(e){var t;const{mapExtent:r,floors:i,width:n,sublayers:o,layerIds:s,layerOption:l,gdbVersion:a}=e,u=null===o||void 0===o||null===(t=o.find((e=>null!=e.layer)))||void 0===t||null===(t=t.layer)||void 0===t?void 0:t.serviceSublayers,c="popup"===l,p={},y=(0,b.yZ)({extent:r,width:n,spatialReference:null===r||void 0===r?void 0:r.spatialReference}),d=[],f=e=>{const t=0===y,r=0===e.minScale||y<=e.minScale,i=0===e.maxScale||y>=e.maxScale;if(e.visible&&(t||r&&i))if(e.sublayers)e.sublayers.forEach(f);else{if(!1===(null===s||void 0===s?void 0:s.includes(e.id))||c&&(!e.popupTemplate||!e.popupEnabled))return;d.unshift(e)}};if(null!==o&&void 0!==o&&o.forEach(f),o&&!d.length)p.layerIds=[];else{const e=(0,N.FN)(d,u,a),t=d.map((e=>{const t=(0,x.f)(i,e);return e.toExportImageJSON(t)}));if(e)p.dynamicLayers=JSON.stringify(t);else{if(o){let e=d.map((e=>{let{id:t}=e;return t}));s&&(e=e.filter((e=>s.includes(e)))),p.layerIds=e}else(null===s||void 0===s?void 0:s.length)&&(p.layerIds=s);const e=function(e,t){const r=!(null===e||void 0===e||!e.length),i=t.filter((e=>null!=e.definitionExpression||r&&null!=e.floorInfo));return i.length?i.map((t=>{const r=(0,x.f)(e,t),i=(0,R._)(r,t.definitionExpression);return{id:t.id,definitionExpression:null!==i&&void 0!==i?i:void 0}})):null}(i,d);if(null!=e&&e.length){const t={};for(const r of e)r.definitionExpression&&(t[r.id]=r.definitionExpression);Object.keys(t).length&&(p.layerDefs=JSON.stringify(t))}}}return p}var G,M=r(59486),A=r(62044),Z=r(46784),L=r(78952);let T=G=class extends Z.wq{static from(e){return(0,m.TJ)(G,e)}constructor(e){super(e),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}};(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],T.prototype,"dpi",void 0),(0,i._)([(0,h.Cb)()],T.prototype,"floors",void 0),(0,i._)([(0,h.Cb)({type:String,json:{write:!0}})],T.prototype,"gdbVersion",void 0),(0,i._)([(0,h.Cb)({types:M.qM,json:{read:V.im,write:!0}})],T.prototype,"geometry",void 0),(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],T.prototype,"geometryPrecision",void 0),(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],T.prototype,"height",void 0),(0,i._)([(0,h.Cb)({type:[Number],json:{write:!0}})],T.prototype,"layerIds",void 0),(0,i._)([(0,h.Cb)({type:["top","visible","all","popup"],json:{write:!0}})],T.prototype,"layerOption",void 0),(0,i._)([(0,h.Cb)({type:v.Z,json:{write:!0}})],T.prototype,"mapExtent",void 0),(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],T.prototype,"maxAllowableOffset",void 0),(0,i._)([(0,h.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnFieldName",void 0),(0,i._)([(0,h.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnGeometry",void 0),(0,i._)([(0,h.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnM",void 0),(0,i._)([(0,h.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnUnformattedValues",void 0),(0,i._)([(0,h.Cb)({type:Boolean,json:{write:!0}})],T.prototype,"returnZ",void 0),(0,i._)([(0,h.Cb)({type:L.Z,json:{write:!0}})],T.prototype,"spatialReference",void 0),(0,i._)([(0,h.Cb)()],T.prototype,"sublayers",void 0),(0,i._)([(0,h.Cb)({type:A.Z,json:{write:!0}})],T.prototype,"timeExtent",void 0),(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],T.prototype,"tolerance",void 0),(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],T.prototype,"width",void 0),T=G=(0,i._)([(0,g.j)("esri.rest.support.IdentifyParameters")],T);const U=T;var k=r(38511),q=r(31201),J=r(27823);let Q=class extends Z.wq{constructor(e){super(e),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(e,t){return n.Z.fromJSON({attributes:{...t.attributes},geometry:{...t.geometry}})}writeFeature(e,t){if(!e)return;const{attributes:r,geometry:i}=e;r&&(t.attributes={...r}),null!=i&&(t.geometry=i.toJSON(),t.geometryType=J.P.toJSON(i.type))}};(0,i._)([(0,h.Cb)({type:String,json:{write:!0}})],Q.prototype,"displayFieldName",void 0),(0,i._)([(0,h.Cb)({type:n.Z})],Q.prototype,"feature",void 0),(0,i._)([(0,k.r)("feature",["attributes","geometry"])],Q.prototype,"readFeature",null),(0,i._)([(0,q.c)("feature")],Q.prototype,"writeFeature",null),(0,i._)([(0,h.Cb)({type:Number,json:{write:!0}})],Q.prototype,"layerId",void 0),(0,i._)([(0,h.Cb)({type:String,json:{write:!0}})],Q.prototype,"layerName",void 0),Q=(0,i._)([(0,g.j)("esri.rest.support.IdentifyResult")],Q);const z=Q;async function B(e,t,r){const i=(t=function(e){return U.from(e)}(t)).geometry?[t.geometry]:[],n=(0,E.en)(e);return n.path+="/identify",(0,C.aX)(i).then((e=>{const i=function(e,t){var r;const{dpi:i,gdbVersion:n,geometry:o,geometryPrecision:s,height:l,layerOption:a,mapExtent:u,maxAllowableOffset:c,returnFieldName:p,returnGeometry:y,returnUnformattedValues:d,returnZ:f,spatialReference:h,timeExtent:m,tolerance:g,width:v}=e.toJSON(),{dynamicLayers:b,layerDefs:w,layerIds:x}=P(e),_=null!=(null===t||void 0===t?void 0:t.geometry)?t.geometry:null,I={geometryPrecision:s,maxAllowableOffset:c,returnFieldName:p,returnGeometry:y,returnUnformattedValues:d,returnZ:f,tolerance:g},S=_&&_.toJSON()||o;I.imageDisplay="".concat(v,",").concat(l,",").concat(i),n&&(I.gdbVersion=n),S&&(delete S.spatialReference,I.geometry=JSON.stringify(S),I.geometryType=(0,V.Ji)(S));const F=null!==(r=null!==h&&void 0!==h?h:null===S||void 0===S?void 0:S.spatialReference)&&void 0!==r?r:null===u||void 0===u?void 0:u.spatialReference;if(F&&(I.sr=(0,j.B9)(F)),I.time=m?[m.start,m.end].join(","):null,u){const{xmin:e,ymin:t,xmax:r,ymax:i}=u;I.mapExtent="".concat(e,",").concat(t,",").concat(r,",").concat(i)}return w&&(I.layerDefs=w),b&&!w&&(I.dynamicLayers=b),I.layers="popup"===a?"visible":a,x&&!b&&(I.layers+=":".concat(x.join(","))),I}(t,{geometry:null===e||void 0===e?void 0:e[0]}),o=(0,E.cv)({...n.query,f:"json",...i}),s=(0,E.lA)(o,r);return(0,O.Z)(n.path,s).then(H).then((e=>function(e,t){if(null===t||void 0===t||!t.length)return e;const r=new Map;function i(e){r.set(e.id,e),e.sublayers&&e.sublayers.forEach(i)}t.forEach(i);for(const n of e.results)n.feature.sourceLayer=r.get(n.layerId);return e}(e,t.sublayers)))}))}function H(e){const t=e.data;return t.results=t.results||[],t.exceededTransferLimit=Boolean(t.exceededTransferLimit),t.results=t.results.map((e=>z.fromJSON(e))),t}var D=r(819),K=r(16072),W=r(24405);let X=null;function Y(e,t){return"tile"===t.type||"map-image"===t.type}let $=class extends o.Z{constructor(e){super(e),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=(0,y.Ds)((async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch((()=>{})))}))}initialize(){const e=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch((()=>{}))),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([(0,d.on)((()=>this.highlightGraphics),"change",(t=>e(t.added)),{onListenerAdd:t=>e(t)})])}async fetchPopupFeatures(e,t){var r,i;const{layerView:{layer:n,view:{scale:o}}}=this;if(!e)throw new a.Z("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:n});const s=function(e,t,r){const i=[];if(!e)return i;const n=e=>{const o=0===e.minScale||t<=e.minScale,s=0===e.maxScale||t>=e.maxScale;if(e.visible&&o&&s)if(e.sublayers)e.sublayers.forEach(n);else if(e.popupEnabled){const t=(0,W.V5)(e,{...r,defaultPopupTemplateEnabled:!1});null!=t&&i.unshift({sublayer:e,popupTemplate:t})}};return e.map(n),i}(n.sublayers,o,t);if(!s.length)return[];const l=await async function(e,t){var r;if(null!==(r=e.capabilities)&&void 0!==r&&null!==(r=r.operations)&&void 0!==r&&r.supportsQuery)return!0;try{return await Promise.any(t.map((e=>{let{sublayer:t}=e;return t.load().then((()=>t.capabilities.operations.supportsQuery))})))}catch{return!1}}(n,s);if((null!==(r=null===(i=n.capabilities)||void 0===i||null===(i=i.operations)||void 0===i?void 0:i.supportsIdentify)&&void 0!==r&&!r||!(n.version>=10.5))&&!l)throw new a.Z("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:n});return l?this._fetchPopupFeaturesUsingQueries(e,s,t):this._fetchPopupFeaturesUsingIdentify(e,s,t)}clearHighlights(){var e;null===(e=this.highlightGraphics)||void 0===e||e.removeAll()}highlight(e){var t,r;const i=this.highlightGraphics;if(!i)return(0,u.kB)();let o=null;if(e instanceof n.Z?o=[e]:l.Z.isCollection(e)&&e.length>0?o=e.toArray():Array.isArray(e)&&e.length>0&&(o=e),o=null===(t=o)||void 0===t?void 0:t.filter(s.pC),null===(r=o)||void 0===r||!r.length)return(0,u.kB)();for(const n of o){const e=n.sourceLayer;null!=e&&"geometryType"in e&&"point"===e.geometryType&&(n.visible=!1)}return i.addMany(o),(0,u.kB)((()=>{var e;return i.removeMany(null!==(e=o)&&void 0!==e?e:[])}))}async _updateHighlightedFeaturesSymbols(e){const{layerView:{view:t},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(i&&n)for(const o of e){const e=o.sourceLayer&&"renderer"in o.sourceLayer&&o.sourceLayer.renderer;o.sourceLayer&&"geometryType"in o.sourceLayer&&"point"===o.sourceLayer.geometryType&&e&&"getSymbolAsync"in e&&e.getSymbolAsync(o).then((async s=>{var l;s||(s=new K.Z);let a=null;const u="visualVariables"in e?null===(l=e.visualVariables)||void 0===l?void 0:l.find((e=>"size"===e.type)):void 0;u&&(X||(X=(await Promise.resolve().then(r.bind(r,56011))).getSize),a=X(u,o,{view:t.type,scale:t.scale,shape:"simple-marker"===s.type?s.style:null})),a||(a="width"in s&&"height"in s&&null!=s.width&&null!=s.height?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(o)&&(o.symbol=new K.Z({style:"square",size:a,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),n(o,"symbol"),o.visible=!0)}))}}async _updateHighlightedFeaturesGeometries(e){const{layerView:{layer:t,view:r},highlightGraphics:i,highlightGraphicUpdated:n}=this;if(this._highlightGeometriesResolution=e,!n||null===i||void 0===i||!i.length||!t.capabilities.operations.supportsQuery)return;const o=this._getTargetResolution(e),s=new Map;for(const u of i)if(!this._featuresResolutions.has(u)||this._featuresResolutions.get(u)>o){const e=u.sourceLayer;(0,p.s1)(s,e,(()=>new Map)).set(u.getObjectId(),u)}const l=Array.from(s,(e=>{let[t,i]=e;const n=t.createQuery();return n.objectIds=[...i.keys()],n.outFields=[t.objectIdField],n.returnGeometry=!0,n.maxAllowableOffset=o,n.outSpatialReference=r.spatialReference,t.queryFeatures(n)})),a=await Promise.all(l);if(!this.destroyed)for(const{features:u}of a)for(const e of u){const t=e.sourceLayer,r=s.get(t).get(e.getObjectId());r&&i.includes(r)&&(r.geometry=e.geometry,n(r,"geometry"),this._featuresResolutions.set(r,o))}}_getTargetResolution(e){const t=e*(0,f.c9)(this.layerView.view.spatialReference),r=t/16;return r<=10?0:e/t*r}async _fetchPopupFeaturesUsingIdentify(e,t,r){const i=await this._createIdentifyParameters(e,t,r);if(null==i)return[];const{results:n}=await B(this.layerView.layer.parsedUrl,i);return n.map((e=>e.feature))}async _createIdentifyParameters(e,t,r){const{floors:i,layer:n,timeExtent:o,view:{spatialReference:s,scale:l}}=this.layerView,a=null!=r?r.event:null;if(!t.length)return null;await Promise.all(t.map((e=>{let{sublayer:t}=e;return t.load().catch((()=>{}))})));const u=Math.min((0,c.Z)("mapservice-popup-identify-max-tolerance"),n.allSublayers.reduce(((e,t)=>t.renderer?F({renderer:t.renderer,event:a}):e),2)),p=this.createFetchPopupFeaturesQueryGeometry(e,u),y=(0,b.dp)(l,s),d=Math.round(p.width/y),f=new v.Z({xmin:p.center.x-y*d,ymin:p.center.y-y*d,xmax:p.center.x+y*d,ymax:p.center.y+y*d,spatialReference:p.spatialReference});return new U({floors:i,gdbVersion:"gdbVersion"in n?n.gdbVersion:void 0,geometry:e,height:d,layerOption:"popup",mapExtent:f,returnGeometry:!0,spatialReference:s,sublayers:n.sublayers,timeExtent:o,tolerance:u,width:d})}async _fetchPopupFeaturesUsingQueries(e,t,r){const{layerView:{floors:i,timeExtent:n}}=this,o=null!=r?r.event:null,l=t.map((async t=>{var r;let{sublayer:s,popupTemplate:l}=t;if(await s.load().catch((()=>{})),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const a=s.createQuery(),u=F({renderer:s.renderer,event:o}),c=this.createFetchPopupFeaturesQueryGeometry(e,u),p=new Set,[y]=await Promise.all([(0,W.e7)(s,l),null===(r=s.renderer)||void 0===r?void 0:r.collectRequiredFields(p,s.fieldsIndex)]);(0,w.gd)(p,s.fieldsIndex,y);const d=Array.from(p).sort();if(a.geometry=c,a.outFields=d,a.timeExtent=n,i){const e=i.clone(),t=(0,x.f)(e,s);null!=t&&(a.where=a.where?"(".concat(a.where,") AND (").concat(t,")"):t)}const f=this._getTargetResolution(c.width/u),h=await function(e){var t;return null!==(t=e.expressionInfos)&&void 0!==t&&t.length||Array.isArray(e.content)&&e.content.some((e=>"expression"===e.type))?(0,D.LC)():Promise.resolve()}(l),m="point"===s.geometryType||h&&h.arcadeUtils.hasGeometryOperations(l);m||(a.maxAllowableOffset=f);let{features:g}=await s.queryFeatures(a);const v=m?0:f;g=await async function(e,t){const r=e.renderer;return r&&"defaultSymbol"in r&&!r.defaultSymbol&&(t=r.valueExpression?await Promise.all(t.map((e=>r.getSymbolAsync(e).then((t=>t?e:null))))).then((e=>e.filter((e=>null!=e)))):t.filter((e=>null!=r.getSymbol(e)))),t}(s,g);for(const e of g)this._featuresResolutions.set(e,v);return g}));return(await Promise.allSettled(l)).reduce(((e,t)=>"fulfilled"===t.status?[...e,...t.value]:e),[]).filter(s.pC)}};(0,i._)([(0,h.Cb)({constructOnly:!0})],$.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0})],$.prototype,"layerView",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0})],$.prototype,"highlightGraphics",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0})],$.prototype,"highlightGraphicUpdated",void 0),(0,i._)([(0,h.Cb)({constructOnly:!0})],$.prototype,"updatingHandles",void 0),$=(0,i._)([(0,g.j)("esri.views.layers.support.MapService")],$)},45008:(e,t,r)=>{r.d(t,{K:()=>o});r(59486);var i=r(68860),n=r(53866);function o(e,t,r){var o;let s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new n.Z,l=0;if("2d"===r.type)l=t*(null!==(o=r.resolution)&&void 0!==o?o:0);else if("3d"===r.type){const n=r.overlayPixelSizeInMapUnits(e),o=r.basemapSpatialReference;l=null==o||o.equals(r.spatialReference)?t*n:(0,i.c9)(o)/(0,i.c9)(r.spatialReference)}const a=e.x-l,u=e.y-l,c=e.x+l,p=e.y+l,{spatialReference:y}=r;return s.xmin=Math.min(a,c),s.ymin=Math.min(u,p),s.xmax=Math.max(a,c),s.ymax=Math.max(u,p),s.spatialReference=y,s}new n.Z}}]);
//# sourceMappingURL=8143.bb5f841c.chunk.js.map