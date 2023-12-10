"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[3725],{73725:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var l=i(27366),a=i(10064),n=i(49861),r=(i(25243),i(63780),i(93169),i(69912)),s=i(42069),o=i(77385),d=i(67581);let u=class extends((0,o.r)((0,s.A)(d.Z))){constructor(){super(...arguments),this.type="elevation-3d"}get tileInfo(){return this.layer.tileInfo}initialize(){var e,t;const i=null===(e=this.view)||void 0===e||null===(e=e.map)||void 0===e?void 0:e.allLayers,l=i&&i.includes(this.layer),n=null===(t=this.view)||void 0===t||null===(t=t.map)||void 0===t||null===(t=t.ground)||void 0===t?void 0:t.layers,r=n&&n.includes(this.layer);if(l&&!r){const e=new a.Z("layerview:elevation-layer-only","3D elevation layer '"+this.layer.id+"' can only be added to layers in map.ground");this.addResolvingPromise(Promise.reject(e))}this._addTilingSchemeMatchPromise()}};(0,l._)([(0,n.Cb)()],u.prototype,"layer",void 0),(0,l._)([(0,n.Cb)()],u.prototype,"tileInfo",null),u=(0,l._)([(0,r.j)("esri.views.3d.layers.ElevationLayerView3D")],u);const p=u},42069:(e,t,i)=>{i.d(t,{A:()=>u});var l=i(27366),a=i(42537),n=i(66978),r=i(94172),s=i(49861),o=(i(25243),i(63780),i(93169),i(69912)),d=i(5354);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,a.kB)((()=>e.abort()))),await(0,r.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,n.k_)(t);const i=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,l._)([(0,s.Cb)()],t.prototype,"view",void 0),(0,l._)([(0,s.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,l._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},77385:(e,t,i)=>{i.d(t,{r:()=>u});var l=i(27366),a=i(10064),n=i(94172),r=i(49861),s=(i(25243),i(63780),i(93169),i(69912)),o=i(58890),d=i(53379);const u=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,i=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:e,effectiveMaxLOD:l}=this.layer.tilemapCache;t=this.tileInfo.lodAt(e).scale,i=this.tileInfo.lodAt(l).scale}return{minScale:t,maxScale:i}}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,i=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&i.maxLevel++,i}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if(null==this.fullExtent)return this.addResolvingPromise(Promise.reject(new a.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(null!=e)return this.addResolvingPromise(Promise.reject(e));const t=(0,n.N1)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const i=(0,d.er)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let t;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new a.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new a.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return null!=e&&t.compatibleWith(e)?null:new a.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},l=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!l)return i;const a=l.levels[0],n=e=>{const t=Math.log(a.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,n(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,n(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,l._)([(0,r.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,l._)([(0,r.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,l._)([(0,r.Cb)(o.q)],t.prototype,"updatingProgress",void 0),(0,l._)([(0,r.Cb)(o.V)],t.prototype,"updatingProgressValue",void 0),(0,l._)([(0,r.Cb)()],t.prototype,"fullExtent",null),(0,l._)([(0,r.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,l._)([(0,r.Cb)()],t.prototype,"dataScaleRange",null),(0,l._)([(0,r.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,l._)([(0,r.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,l._)([(0,r.Cb)()],t.prototype,"layer",void 0),(0,l._)([(0,r.Cb)()],t.prototype,"tileInfo",void 0),t=(0,l._)([(0,s.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},67581:(e,t,i)=>{i.d(t,{Z:()=>v});var l=i(27366),a=i(7138),n=i(91505),r=i(79056),s=i(32718),o=i(92026),d=i(67426),u=i(49861),p=(i(25243),i(63780),i(93169),i(69912)),h=i(46634);let c=class extends((0,r.IG)((0,d.v)(n.Z.EventedMixin(a.Z)))){constructor(e){super(e),this._updatingHandles=new h.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",l=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";s.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(l,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,l;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(l=this.parent)||void 0===l?void 0:l.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,l._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,l._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,l._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,l._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,l._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,l._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,l._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,l._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,l._)([(0,u.Cb)()],c.prototype,"visible",null),(0,l._)([(0,u.Cb)()],c.prototype,"view",void 0),c=(0,l._)([(0,p.j)("esri.views.layers.LayerView")],c);const v=c}}]);
//# sourceMappingURL=3725.af211bfe.chunk.js.map