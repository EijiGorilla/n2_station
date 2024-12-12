"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[9192],{80573:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(27366),o=n(7138),i=n(63780),s=n(11582),l=n(79056),a=n(46784),u=n(49861),p=(n(93169),n(32718),n(69912));let c=0,d=class extends((0,a.eC)((0,s.J)((0,l.IG)(o.Z)))){constructor(e){super(e),this.id="".concat(Date.now().toString(16),"-analysis-").concat(c++),this.title=null}get parent(){return this._get("parent")}set parent(e){const t=this.parent;if(null!=t)switch(t.type){case"line-of-sight":case"dimension":case"viewshed":t.releaseAnalysis(this);break;case"2d":case"3d":t.analyses.includes(this)&&t.analyses.remove(this)}this._set("parent",e)}get isEditable(){return this.requiredPropertiesForEditing.every(i.pC)}};(0,r._)([(0,u.Cb)({type:String,constructOnly:!0,clonable:!1})],d.prototype,"id",void 0),(0,r._)([(0,u.Cb)({type:String})],d.prototype,"title",void 0),(0,r._)([(0,u.Cb)({clonable:!1,value:null})],d.prototype,"parent",null),(0,r._)([(0,u.Cb)({readOnly:!0})],d.prototype,"isEditable",null),d=(0,r._)([(0,p.j)("esri.analysis.Analysis")],d);const v=d},97613:(e,t,n)=>{n.d(t,{Z:()=>g});var r=n(27366),o=n(84314),i=n(7138),s=n(11582),l=n(46784),a=n(92026),u=n(49861),p=(n(93169),n(32718),n(84936),n(69912)),c=n(96866),d=n(848),v=n(64575);let y=class extends((0,l.eC)((0,s.J)(i.Z))){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,a._W)(this.position,e.position)&&(0,a._W)(this.elevationInfo,e.elevationInfo)&&(0,o.kk)(this.feature,e.feature)}};(0,r._)([(0,u.Cb)({type:d.Z,json:{write:{isRequired:!0}}})],y.prototype,"position",void 0),(0,r._)([(0,u.Cb)({type:v.Z}),(0,c.B)()],y.prototype,"elevationInfo",void 0),(0,r._)([(0,u.Cb)(o.rX)],y.prototype,"feature",void 0),y=(0,r._)([(0,p.j)("esri.analysis.LineOfSightAnalysisObserver")],y);const g=y},33985:(e,t,n)=>{n.d(t,{Z:()=>y});var r=n(27366),o=n(84314),i=n(11582),s=n(46784),l=n(92026),a=n(49861),u=(n(93169),n(32718),n(84936),n(69912)),p=n(96866),c=n(848),d=n(64575);let v=class extends((0,s.eC)(i.j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return(0,l._W)(this.position,e.position)&&(0,l._W)(this.elevationInfo,e.elevationInfo)&&(0,o.kk)(this.feature,e.feature)}};(0,r._)([(0,a.Cb)({type:c.Z}),(0,p.B)()],v.prototype,"position",void 0),(0,r._)([(0,a.Cb)({type:d.Z}),(0,p.B)()],v.prototype,"elevationInfo",void 0),(0,r._)([(0,a.Cb)(o.rX)],v.prototype,"feature",void 0),v=(0,r._)([(0,u.j)("esri.analysis.LineOfSightAnalysisTarget")],v);const y=v},84314:(e,t,n)=>{n.d(t,{NS:()=>c,kk:()=>a,pD:()=>u,rX:()=>p});var r=n(32035),o=n(12400),i=n(40885),s=n(54463),l=n(41781);function a(e,t){return u(e)===u(t)}function u(e){if(null==e)return null;const t=null!=e.layer?e.layer.id:"";let n=null;return n=null!=e.objectId?e.objectId:null!=e.layer&&"objectIdField"in e.layer&&null!=e.layer.objectIdField&&null!=e.attributes?e.attributes[e.layer.objectIdField]:e.uid,null==n?null:"o-".concat(t,"-").concat(n)}const p={json:{write:{writer:function(e,t){var n;null!=(null===e||void 0===e||null===(n=e.layer)||void 0===n?void 0:n.objectIdField)&&null!=e.attributes&&(t.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})},target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:function(e){if(null!=e.layerId&&null!=e.objectId)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}}}}};function c(e,t,n,a){var p,c;const{sceneIntersectionHelper:v}=e,{observer:f,observerFeatureId:h,targetFeatureId:b,target:m}=n;if(null==h&&null==b)return;a||(a=e=>e),(0,r.a)(g,f,m);const j=(0,r.l)(g);(0,r.b)(g,f,g,1/j);const I=(0,i.zk)(g,m,y);t.options.store=s.eC.ALL,v.intersectToolIntersectorRay(I,t);let _=null,w=null,x=null,C=null;for(const r of t.results.all){var O,S;const t=(0,l.tB)(r,e);if(null==t||null==r.distanceInRenderSpace)continue;const n=u(t);null!=n&&(null!=h&&n===h&&(null!==(O=_)&&void 0!==O||(_=a(d(r,e,j))),r.distanceInRenderSpace-1<_&&(x=r)),null!=b&&n===b&&(null!==(S=w)&&void 0!==S||(w=a(d(r,e,j))),null==C&&r.distanceInRenderSpace-1<j&&j-r.distanceInRenderSpace+1<w&&(C=r)))}const{observerAdjusted:Z,targetAdjusted:R}=n;null!==(p=x)&&void 0!==p&&p.getIntersectionPoint(Z)?n.observerSurfaceNormal=x.getTransformedNormal((0,o.Ue)()):n.observerSurfaceNormal=null,null!==(c=C)&&void 0!==c&&c.getIntersectionPoint(R)?n.targetSurfaceNormal=C.getTransformedNormal((0,o.Ue)()):n.targetSurfaceNormal=null}function d(e,t,n){if((0,l._s)(e)){const r=(0,l.VB)(e,t);if(null!=r)return Math.min(r*v,n)}return 1e-5*n}const v=.05,y=(0,i.Ue)(),g=(0,o.Ue)()},96866:(e,t,n)=>{n.d(t,{B:()=>y});var r=n(1413),o=n(10064),i=n(9997),s=n(80292),l=n(35995),a=n(71907),u=n(33397),p=n(25265),c=n(49861),d=n(22892),v=n(53283);function y(e){var t;const n=null!==(t=null===e||void 0===e?void 0:e.origins)&&void 0!==t?t:[void 0];return(t,o)=>{const i=function(e,t,n){var o;if("resource"===(null===e||void 0===e?void 0:e.type))return function(e,t,n){const o=(0,u.Oe)(t,n);return{type:String,read:(e,t,n)=>{const r=(0,v.r)(e,t,n);return o.type===String?r:"function"==typeof o.type?new o.type({url:r}):void 0},write:{writer(t,i,a,u){if(null===u||void 0===u||!u.resources)return"string"==typeof t?void(i[a]=(0,v.t)(t,u)):void(i[a]=t.write({},u));const c=function(e){return null==e?null:"string"==typeof e?e:e.url}(t),y=(0,v.t)(c,(0,r.Z)((0,r.Z)({},u),{},{verifyItemRelativeUrls:null!==u&&void 0!==u&&u.verifyItemRelativeUrls?{writtenUrls:u.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0}),v.M.NO),b=o.type!==String&&(!(0,s.l)(this)||(null===u||void 0===u?void 0:u.origin)&&this.originIdOf(n)>(0,p.M9)(u.origin)),m={object:this,propertyName:n,value:t,targetUrl:y,dest:i,targetPropertyName:a,context:u,params:e};null!==u&&void 0!==u&&u.portalItem&&y&&!(0,l.YP)(y)?b&&null!==e&&void 0!==e&&e.contentAddressed?g(m):b?function(e){var t;const{context:n,targetUrl:o,params:i,value:s,dest:a,targetPropertyName:u}=e;if(!n.portalItem)return;const p=n.portalItem.resourceFromPath(o),c=h(s,o,n),v=(0,d.B)(c),y=(0,l.Ml)(p.path),b=null!==(t=null===i||void 0===i?void 0:i.compress)&&void 0!==t&&t;v===y?(n.resources&&f((0,r.Z)((0,r.Z)({},e),{},{resource:p,content:c,compress:b,updates:n.resources.toUpdate})),a[u]=o):g(e)}(m):function(e){let{context:t,targetUrl:n,dest:r,targetPropertyName:o}=e;t.portalItem&&t.resources&&(t.resources.toKeep.push({resource:t.portalItem.resourceFromPath(n),compress:!1}),r[o]=n)}(m):null!==u&&void 0!==u&&u.portalItem&&(null==y||null!=(0,v.i)(y)||(0,l.jc)(y)||b)?g(m):i[a]=y}}}}(e,t,n);switch(null!==(o=null===e||void 0===e?void 0:e.type)&&void 0!==o?o:"other"){case"other":return{read:!0,write:!0};case"url":{const{read:e,write:t}=v.b;return{read:e,write:t}}}}(e,t,o);for(const e of n){const n=(0,c.CJ)(t,e,o);for(const e in i)n[e]=i[e]}}}function g(e){var t,n,s,u;const{targetUrl:p,params:c,value:y,context:g,dest:b,targetPropertyName:m}=e;if(!g.portalItem)return;const j=(0,v.p)(p),I=h(y,p,g);if(null!==c&&void 0!==c&&c.contentAddressed&&"json"!==I.type)return void(null===(t=g.messages)||void 0===t||t.push(new o.Z("persistable:contentAddressingUnsupported",'Property "'.concat(m,'" is trying to serializing a resource with content of type ').concat(I.type," with content addressing. Content addressing is only supported for json resources."),{content:I})));const _=null!==c&&void 0!==c&&c.contentAddressed&&"json"===I.type?(0,i.F)(I.jsonString):null!==(n=null===j||void 0===j?void 0:j.filename)&&void 0!==n?n:(0,a.DO)(),w=(0,l.v_)(null!==(s=null===c||void 0===c?void 0:c.prefix)&&void 0!==s?s:null===j||void 0===j?void 0:j.prefix,_),x="".concat(w,".").concat((0,d.B)(I));if(null!==c&&void 0!==c&&c.contentAddressed&&g.resources&&"json"===I.type){var C;const e=null!==(C=g.resources.toKeep.find((e=>{let{resource:t}=e;return t.path===x})))&&void 0!==C?C:g.resources.toAdd.find((e=>{let{resource:t}=e;return t.path===x}));if(e)return void(b[m]=e.resource.itemRelativeUrl)}const O=g.portalItem.resourceFromPath(x);(0,l.jc)(p)&&g.resources&&g.resources.pendingOperations.push((0,l.gi)(p).then((e=>{O.path="".concat(w,".").concat((0,d.B)({type:"blob",blob:e})),b[m]=O.itemRelativeUrl})).catch((()=>{})));const S=null!==(u=null===c||void 0===c?void 0:c.compress)&&void 0!==u&&u;g.resources&&f((0,r.Z)((0,r.Z)({},e),{},{resource:O,content:I,compress:S,updates:g.resources.toAdd})),b[m]=O.itemRelativeUrl}function f(e){let{object:t,propertyName:n,updates:r,resource:o,content:i,compress:s}=e;r.push({resource:o,content:i,compress:s,finish:e=>{!function(e,t,n){"string"==typeof e[t]?e[t]=n.url:e[t].url=n.url}(t,n,e)}})}function h(e,t,n){return"string"==typeof e?{type:"url",url:t}:{type:"json",jsonString:JSON.stringify(e.toJSON(n))}}},39192:(e,t,n)=>{n.r(t),n.d(t,{default:()=>w});var r=n(27366),o=n(80573),i=n(97613),s=n(33985),l=n(80987),a=n(60354),u=n(94172),p=n(49861),c=(n(93169),n(32718),n(84936),n(69912)),d=n(79803),v=n(41414),y=n(74509);const g=l.Z.ofType(s.Z);let f=class extends o.Z{constructor(e){super(e),this.type="line-of-sight",this.observer=null,this.extent=null}initialize(){this.addHandles((0,u.YP)((()=>this._computeExtent()),(e=>{null==(null===e||void 0===e?void 0:e.pending)&&this._set("extent",null!=e?e.extent:null)}),u.tX))}get targets(){return this._get("targets")||new g}set targets(e){this._set("targets",(0,a.Z)(e,this.targets,g))}get spatialReference(){var e;return null!=(null===(e=this.observer)||void 0===e?void 0:e.position)?this.observer.position.spatialReference:null}get requiredPropertiesForEditing(){var e;return[null===(e=this.observer)||void 0===e?void 0:e.position]}async waitComputeExtent(){const e=this._computeExtent();return null!=e?e.pending:Promise.resolve()}_computeExtent(){var e;const t=this.spatialReference;if(null==(null===(e=this.observer)||void 0===e?void 0:e.position)||null==t)return null;const n=e=>"absolute-height"===(0,y.VW)(e.position,e.elevationInfo),r=this.observer.position,o=(0,v.al)(r.x,r.y,r.z,r.x,r.y,r.z);for(const s of this.targets)if(null!=s.position){const e=(0,d.projectOrLoad)(s.position,t);if(null!=e.pending)return{pending:e.pending,extent:null};if(null!=e.geometry){const{x:t,y:n,z:r}=e.geometry;(0,v.pp)(o,[t,n,r])}}const i=(0,v.HH)(o,t);return n(this.observer)&&this.targets.every(n)||(i.zmin=void 0,i.zmax=void 0),{pending:null,extent:i}}clear(){this.observer=null,this.targets.removeAll()}};(0,r._)([(0,p.Cb)({type:["line-of-sight"]})],f.prototype,"type",void 0),(0,r._)([(0,p.Cb)({type:i.Z,json:{read:!0,write:!0}})],f.prototype,"observer",void 0),(0,r._)([(0,p.Cb)({cast:a.R,type:g,nonNullable:!0,json:{read:!0,write:!0}})],f.prototype,"targets",null),(0,r._)([(0,p.Cb)({value:null,readOnly:!0})],f.prototype,"extent",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],f.prototype,"spatialReference",null),(0,r._)([(0,p.Cb)({readOnly:!0})],f.prototype,"requiredPropertiesForEditing",null),f=(0,r._)([(0,c.j)("esri.analysis.LineOfSightAnalysis")],f);const h=f;var b=n(97642),m=n(30651),j=n(6061);const I=l.Z.ofType(s.Z);let _=class extends((0,j.q)((0,b.R)(m.Z))){constructor(e){super(e),this.type="line-of-sight",this.operationalLayerType="LineOfSightLayer",this.analysis=new h,this.opacity=1}initialize(){this.addHandles((0,u.YP)((()=>this.analysis),((e,t)=>{null!=t&&t.parent===this&&(t.parent=null),null!=e&&(e.parent=this)}),u.tX))}async load(){return null!=this.analysis&&this.addResolvingPromise(this.analysis.waitComputeExtent()),this}get observer(){var e;return null===(e=this.analysis)||void 0===e?void 0:e.observer}set observer(e){const{analysis:t}=this;t&&(t.observer=e)}get targets(){return null!=this.analysis?this.analysis.targets:new l.Z}set targets(e){var t;(0,a.Z)(e,null===(t=this.analysis)||void 0===t?void 0:t.targets)}get fullExtent(){return null!=this.analysis?this.analysis.extent:null}get spatialReference(){return null!=this.analysis?this.analysis.spatialReference:null}releaseAnalysis(e){this.analysis===e&&(this.analysis=new h)}};(0,r._)([(0,p.Cb)({json:{read:!1},readOnly:!0})],_.prototype,"type",void 0),(0,r._)([(0,p.Cb)({type:["LineOfSightLayer"]})],_.prototype,"operationalLayerType",void 0),(0,r._)([(0,p.Cb)({type:i.Z,json:{read:!0,write:{isRequired:!0,ignoreOrigin:!0}}})],_.prototype,"observer",null),(0,r._)([(0,p.Cb)({type:I,json:{read:!0,write:{ignoreOrigin:!0}}})],_.prototype,"targets",null),(0,r._)([(0,p.Cb)({nonNullable:!0,json:{read:!1,write:!1}})],_.prototype,"analysis",void 0),(0,r._)([(0,p.Cb)({readOnly:!0})],_.prototype,"fullExtent",null),(0,r._)([(0,p.Cb)({readOnly:!0})],_.prototype,"spatialReference",null),(0,r._)([(0,p.Cb)({readOnly:!0,json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}}})],_.prototype,"opacity",void 0),(0,r._)([(0,p.Cb)({type:["show","hide"]})],_.prototype,"listMode",void 0),_=(0,r._)([(0,c.j)("esri.layers.LineOfSightLayer")],_);const w=_},22892:(e,t,n)=>{n.d(t,{B:()=>o});var r=n(35995);function o(e){return i[function(e){return"json"===e.type?"application/json":"blob"===e.type?e.blob.type:function(e){const t=(0,r.Ml)(e);return a[t]||s}(e.url)}(e)]||l}const i={},s="text/plain",l=i[s],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const u in a)i[a[u]]=u}}]);
//# sourceMappingURL=9192.21202933.chunk.js.map