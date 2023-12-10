"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[5883],{45883:(e,t,i)=>{i.r(t),i.d(t,{default:()=>_});var a=i(27366),r=i(10064),l=i(94172),n=i(49861),s=(i(25243),i(63780),i(93169),i(69912)),o=i(80394),d=i(42069),u=i(77385),h=i(57284),p=i(52639),c=i(45948),y=i(24405);const v=e=>{let t=class extends e{constructor(){super(...arguments),this._rasterFieldPrefix="Raster.",this.layer=null,this.view=null,this.tileInfo=null}get fullExtent(){return this._getfullExtent()}_getfullExtent(){return(0,o.lK)(this.layer.rasterInfo,this.view.spatialReference)}get hasTilingEffects(){return!!(this.layer.renderer&&"dynamicRangeAdjustment"in this.layer.renderer&&this.layer.renderer.dynamicRangeAdjustment)}get datumTransformation(){return(0,o._D)(this.layer.fullExtent,this.view.spatialReference,!0)}supportsSpatialReference(e){return!!(0,o.lK)(this.layer.rasterInfo,e)}async fetchPopupFeatures(e,t){const{layer:i}=this;if(!e)throw new r.Z("imageryTileLayerView:fetchPopupFeatures","Nothing to fetch without area",{layer:i});const{popupEnabled:a}=i,l=(0,y.V5)(i,t);if(!a||null==l)throw new r.Z("imageryTileLayerView:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:a,popupTemplate:l});const n=[],{value:s,magdirValue:o,processedValue:d}=await i.identify(e,{timeExtent:this.timeExtent});let u="";if(s&&s.length){var h;u="imagery-tile"===i.type&&i.hasStandardTime()&&null!=s[0]?s.map((e=>i.getStandardTimeValue(e))).join(", "):s.join(", ");const e={ObjectId:0},t="Raster.ServicePixelValue";e[t]=null!==(h=null===d||void 0===d?void 0:d.join(", "))&&void 0!==h?h:u,e[t+".Raw"]=u;const a=i.rasterInfo.attributeTable;if(null!=a){const{fields:t,features:i}=a,r=t.find((e=>{let{name:t}=e;return"value"===t.toLowerCase()})),l=r?i.find((e=>String(e.attributes[r.name])===u)):null;if(l)for(const a in l.attributes)l.attributes.hasOwnProperty(a)&&(e[this._rasterFieldPrefix+a]=l.attributes[a])}const r=i.rasterInfo.dataType;"vector-magdir"!==r&&"vector-uv"!==r||(e["Raster.Magnitude"]=null===o||void 0===o?void 0:o[0],e["Raster.Direction"]=null===o||void 0===o?void 0:o[1]);const l=new p.Z(this.fullExtent.clone(),null,e);l.layer=i,l.sourceLayer=l.layer,n.push(l)}return n}};return(0,a._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,a._)([(0,n.Cb)(c.qG)],t.prototype,"timeExtent",void 0),(0,a._)([(0,n.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,n.Cb)()],t.prototype,"fullExtent",null),(0,a._)([(0,n.Cb)()],t.prototype,"tileInfo",void 0),(0,a._)([(0,n.Cb)({readOnly:!0})],t.prototype,"hasTilingEffects",null),(0,a._)([(0,n.Cb)()],t.prototype,"datumTransformation",null),t=(0,a._)([(0,s.j)("esri.views.layers.ImageryTileLayerView")],t),t};var m=i(67581),g=i(13107),f=i(45008),b=i(90316);let w=class extends(v((0,g.Z)((0,u.r)((0,d.A)(m.Z))))){constructor(){super(...arguments),this.type="imagery-tile-3d",this.isAlignedMapTile=!0}initialize(){this.layer.increaseRasterJobHandlerUsage(),null==this.fullExtent&&this.addResolvingPromise(Promise.reject(new r.Z("layerview:spatial-reference-incompatible","The layer extent cannot be projected to the view's spatial reference",{layer:this.layer})));const e=(0,l.N1)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this.layer.tileInfo,i=["png","png24","png32","jpg","mixed"].includes(t.format)&&e.compatibleWith(t);this.isAlignedMapTile=i;const a=i?t:e.toTileInfo();this.tileInfo=a,this._updatingHandles.add((()=>[this.layer.renderer,this.layer.interpolation,this.layer.bandIds,this.layer.multidimensionalDefinition,this.layer.multidimensionalSubset,this.layer.rasterFunction,this.timeExtent]),(()=>this.refresh()))}));this.addResolvingPromise(e)}destroy(){this.layer.decreaseRasterJobHandlerUsage(),this.view=null}get _blankTile(){const e=document.createElement("canvas"),t=e.getContext("2d"),[i,a]=this.tileInfo.size;return e.width=i,e.height=a,t.clearRect(0,0,i,a),t.getImageData(0,0,i,a)}get imageFormatIsOpaque(){return"jpg"===this.layer.tileInfo.format}get hasMixedImageFormats(){return"mixed"===this.layer.tileInfo.format}get dataLevelRange(){var e,t;const i=this.layer.tileInfo,a=null===(e=this.tileInfo.lodAt(0))||void 0===e?void 0:e.scale,r=null===(t=this.layer.tileInfo.lodAt(i.lods.length-1))||void 0===t?void 0:t.scale;return this.levelRangeFromScaleRange(a,r)}_getfullExtent(){var e;return(0,o.lK)(this.layer.rasterInfo,null!=(null===(e=this.view.basemapTerrain)||void 0===e?void 0:e.spatialReference)?this.view.basemapTerrain.spatialReference:this.view.spatialReference)}async fetchTile(e,t,i,a){const r=this.tileInfo,l=this._canSymbolizeInWebGL(),n={tileInfo:r,requestRawData:l,signal:a.signal,timeExtent:this.timeExtent,requestAsImageElement:this.isAlignedMapTile},s=await this.layer.fetchTile(e,t,i,n);if(s instanceof HTMLImageElement)return s;let o=null===s||void 0===s?void 0:s.pixelBlock;if(null==o)return this._blankTile;if(!l&&(o=await this.layer.applyRenderer(s),null==o))return this._blankTile;const d=new h.H([e,t,i],o,r.size[0],r.size[1]);return l?(d.symbolizerRenderer=this.layer.symbolizer.rendererJSON,d.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e)),d.transformGrid=s.transformGrid):d.isRendereredSource=!0,d.interpolation=this.layer.interpolation,d.bandIds=this.layer.bandIds,d}_getSymbolizerOptions(e){var t;const i=this.tileInfo.lodAt(e).resolution;return{pixelBlock:null,isGCS:null!=(null===(t=this.view.basemapTerrain)||void 0===t?void 0:t.spatialReference)?this.view.basemapTerrain.spatialReference.isGeographic:this.view.spatialReference.isGeographic,resolution:{x:i,y:i},bandIds:this.layer.bandIds}}ensureSymbolizerParameters(e){this._canSymbolizeInWebGL()&&JSON.stringify(e.symbolizerRenderer)!==JSON.stringify(this.layer.symbolizer.rendererJSON)&&(e.symbolizerParameters=this.layer.symbolizer.generateWebGLParameters(this._getSymbolizerOptions(e.lij[0])))}createFetchPopupFeaturesQueryGeometry(e,t){return(0,f.K)(e,t,this.view)}refresh(){this.emit("data-changed")}async doRefresh(){this.suspended||this.emit("data-changed")}_canSymbolizeInWebGL(){var e;const t=(0,b.hc)("3d"),{symbolizer:i}=this.layer,a=null===(e=i.lookup)||void 0===e||null===(e=e.colormapLut)||void 0===e?void 0:e.indexedColormap,r=a&&a.length>4*(t.maxTextureSize||4906);return t.supportsTextureFloat&&i.canRenderInWebGL&&!r}};(0,a._)([(0,n.Cb)({readOnly:!0})],w.prototype,"_blankTile",null),(0,a._)([(0,n.Cb)({readOnly:!0})],w.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,n.Cb)({readOnly:!0})],w.prototype,"hasMixedImageFormats",null),(0,a._)([(0,n.Cb)({readOnly:!0})],w.prototype,"dataLevelRange",null),w=(0,a._)([(0,s.j)("esri.views.3d.layers.ImageryTileLayerView3D")],w);const _=w},42069:(e,t,i)=>{i.d(t,{A:()=>u});var a=i(27366),r=i(42537),l=i(66978),n=i(94172),s=i(49861),o=(i(25243),i(63780),i(93169),i(69912)),d=i(5354);const u=e=>{let t=class extends e{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(e){super.postscript(e),(0,d.qC)(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const e=new AbortController,t=e.signal;this.addHandles((0,r.kB)((()=>e.abort()))),await(0,n.N1)((()=>{var e;return null===(e=this.view.defaultsFromMap)||void 0===e?void 0:e.heightModelInfoReady}),t),(0,l.k_)(t);const i=(0,d.Wt)(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(i)throw i}canResume(){const e=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return super.canResume()&&(!(null!==e&&void 0!==e&&e.minScale)||!e.maxScale||e.minScale>=e.maxScale)}getSuspendInfo(){const e=super.getSuspendInfo(),t=this.layer&&"effectiveScaleRange"in this.layer?this.layer.effectiveScaleRange:null;return t&&t.minScale&&t.maxScale&&t.minScale<t.maxScale&&(e.outsideScaleRange=!0),e}};return(0,a._)([(0,s.Cb)()],t.prototype,"view",void 0),(0,a._)([(0,s.Cb)()],t.prototype,"slicePlaneEnabled",void 0),t=(0,a._)([(0,o.j)("esri.views.3d.layers.LayerView3D")],t),t}},77385:(e,t,i)=>{i.d(t,{r:()=>u});var a=i(27366),r=i(10064),l=i(94172),n=i(49861),s=(i(25243),i(63780),i(93169),i(69912)),o=i(58890),d=i(53379);const u=e=>{let t=class extends e{get imageFormatIsOpaque(){return!1}get fullExtent(){return this.layer.fullExtent}get isOpaque(){return this.fullOpacity>=1&&this.imageFormatIsOpaque}get dataScaleRange(){const e=this.tileInfo.lods;let t=e[0].scale,i=e[e.length-1].scale;if("tilemapCache"in this.layer&&this.layer.tilemapCache){const{effectiveMinLOD:e,effectiveMaxLOD:a}=this.layer.tilemapCache;t=this.tileInfo.lodAt(e).scale,i=this.tileInfo.lodAt(a).scale}return{minScale:t,maxScale:i}}get dataLevelRange(){const{minScale:e,maxScale:t}=this.dataScaleRange;return this.levelRangeFromScaleRange(e,t)}get displayLevelRange(){const e=this.layer.minScale||this.dataScaleRange.minScale,t=this.layer.maxScale||this.dataScaleRange.maxScale,i=this.levelRangeFromScaleRange(e,t);return this.layer.maxScale&&i.maxLevel++,i}getTileUrl(e,t,i){return this.layer.getTileUrl(e,t,i)}_addTilingSchemeMatchPromise(){if(null==this.fullExtent)return this.addResolvingPromise(Promise.reject(new r.Z("tilingscheme:extent-not-defined","This layer doesn't define a fullExtent.")));const e=this._getTileInfoSupportError(this.tileInfo,this.fullExtent);if(null!=e)return this.addResolvingPromise(Promise.reject(e));const t=(0,l.N1)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.basemapTerrain)||void 0===e?void 0:e.tilingSchemeLocked})).then((()=>{const e=this.view.basemapTerrain.tilingScheme,t=this._getTileInfoCompatibilityError(this.tileInfo,e);if(t)throw t}));this.addResolvingPromise(t)}_getTileInfoSupportError(e,t){const i=(0,d.er)(e,t,this.view.spatialReference,this.view.state.viewingMode);if(i){const e={layer:this.layer,error:i};let t;switch(i.name){case"tilingscheme:spatial-reference-mismatch":case"tilingscheme:global-unsupported-spatial-reference":case"tilingscheme:local-unsupported-spatial-reference":t=new r.Z("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",e);break;default:t=new r.Z("layerview:tiling-scheme-unsupported","The tiling scheme of this layer is not supported by SceneView",e)}return t}return null}_getTileInfoCompatibilityError(e,t){return null!=e&&t.compatibleWith(e)?null:new r.Z("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")}levelRangeFromScaleRange(e,t){const i={minLevel:0,maxLevel:1/0},a=this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!a)return i;const r=a.levels[0],l=e=>{const t=Math.log(r.scale/e)/Math.LN2;return.5-Math.abs(.5-t%1)<1e-9?Math.round(t):Math.ceil(t)};return null!=e&&e>0&&(i.minLevel=Math.max(0,l(e))),null!=t&&t>0&&(i.maxLevel=Math.max(0,l(t))),i}isUpdating(){return!!(this.view&&this.view.basemapTerrain&&this.view.basemapTerrain.updating)}};return(0,a._)([(0,n.Cb)({readOnly:!0})],t.prototype,"imageFormatIsOpaque",null),(0,a._)([(0,n.Cb)({readOnly:!0})],t.prototype,"updating",void 0),(0,a._)([(0,n.Cb)(o.q)],t.prototype,"updatingProgress",void 0),(0,a._)([(0,n.Cb)(o.V)],t.prototype,"updatingProgressValue",void 0),(0,a._)([(0,n.Cb)()],t.prototype,"fullExtent",null),(0,a._)([(0,n.Cb)({readOnly:!0})],t.prototype,"isOpaque",null),(0,a._)([(0,n.Cb)()],t.prototype,"dataScaleRange",null),(0,a._)([(0,n.Cb)({readOnly:!0})],t.prototype,"dataLevelRange",null),(0,a._)([(0,n.Cb)({readOnly:!0})],t.prototype,"displayLevelRange",null),(0,a._)([(0,n.Cb)()],t.prototype,"layer",void 0),(0,a._)([(0,n.Cb)()],t.prototype,"tileInfo",void 0),t=(0,a._)([(0,s.j)("esri.views.3d.layers.TiledLayerView3D")],t),t}},67581:(e,t,i)=>{i.d(t,{Z:()=>y});var a=i(27366),r=i(7138),l=i(91505),n=i(79056),s=i(32718),o=i(92026),d=i(67426),u=i(49861),h=(i(25243),i(63780),i(93169),i(69912)),p=i(46634);let c=class extends((0,n.IG)((0,d.v)(l.Z.EventedMixin(r.Z)))){constructor(e){super(e),this._updatingHandles=new p.R,this.layer=null,this.parent=null}initialize(){this.when().catch((e=>{if("layerview:create-error"!==e.name){var t;const i=this.layer&&this.layer.id||"no id",a=(null===(t=this.layer)||void 0===t?void 0:t.title)||"no title";s.Z.getLogger(this).error("#resolve()","Failed to resolve layer view (layer title: '".concat(a,"', id: '").concat(i,"')"),e)}}))}destroy(){this._updatingHandles=(0,o.SC)(this._updatingHandles)}get fullOpacity(){var e,t,i,a;return(null!==(e=null===(t=this.layer)||void 0===t?void 0:t.opacity)&&void 0!==e?e:1)*(null!==(i=null===(a=this.parent)||void 0===a?void 0:a.fullOpacity)&&void 0!==i?i:1)}get suspended(){return!this.canResume()}get suspendInfo(){return this.getSuspendInfo()}get legendEnabled(){var e;return!this.suspended&&!0===(null===(e=this.layer)||void 0===e?void 0:e.legendEnabled)}get updating(){var e;return!((null===(e=this._updatingHandles)||void 0===e||!e.updating)&&!this.isUpdating())}get updatingProgress(){return this.updating?0:1}get visible(){var e;return!0===(null===(e=this.layer)||void 0===e?void 0:e.visible)}set visible(e){this._overrideIfSome("visible",e)}canResume(){var e,t,i;return this.visible&&(null===(e=this.layer)||void 0===e?void 0:e.loaded)&&!(null!==(t=this.parent)&&void 0!==t&&t.suspended)&&(null===(i=this.view)||void 0===i?void 0:i.ready)||!1}getSuspendInfo(){var e,t;const i=null!==(e=this.parent)&&void 0!==e&&e.suspended?this.parent.suspendInfo:{};return null!==(t=this.view)&&void 0!==t&&t.ready||(i.viewNotReady=!0),this.layer&&this.layer.loaded||(i.layerNotLoaded=!0),this.visible||(i.layerInvisible=!0),i}isUpdating(){return!1}};(0,a._)([(0,u.Cb)()],c.prototype,"fullOpacity",null),(0,a._)([(0,u.Cb)()],c.prototype,"layer",void 0),(0,a._)([(0,u.Cb)()],c.prototype,"parent",void 0),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspended",null),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"suspendInfo",null),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"legendEnabled",null),(0,a._)([(0,u.Cb)({type:Boolean,readOnly:!0})],c.prototype,"updating",null),(0,a._)([(0,u.Cb)({readOnly:!0})],c.prototype,"updatingProgress",null),(0,a._)([(0,u.Cb)()],c.prototype,"visible",null),(0,a._)([(0,u.Cb)()],c.prototype,"view",void 0),c=(0,a._)([(0,h.j)("esri.views.layers.LayerView")],c);const y=c},13107:(e,t,i)=>{i.d(t,{Z:()=>d});var a=i(27366),r=i(32718),l=i(66978),n=i(94172),s=i(49861),o=(i(25243),i(63780),i(93169),i(69912));const d=e=>{let t=class extends e{initialize(){this.addHandles((0,n.on)((()=>this.layer),"refresh",(e=>{this.doRefresh(e.dataChanged).catch((e=>{(0,l.D_)(e)||r.Z.getLogger(this).error(e)}))})),"RefreshableLayerView")}};return(0,a._)([(0,s.Cb)()],t.prototype,"layer",void 0),t=(0,a._)([(0,o.j)("esri.layers.mixins.RefreshableLayerView")],t),t}},45008:(e,t,i)=>{i.d(t,{K:()=>l});i(59486);var a=i(68860),r=i(53866);function l(e,t,i){var l;let n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:new r.Z,s=0;if("2d"===i.type)s=t*(null!==(l=i.resolution)&&void 0!==l?l:0);else if("3d"===i.type){const r=i.overlayPixelSizeInMapUnits(e),l=i.basemapSpatialReference;s=null==l||l.equals(i.spatialReference)?t*r:(0,a.c9)(l)/(0,a.c9)(i.spatialReference)}const o=e.x-s,d=e.y-s,u=e.x+s,h=e.y+s,{spatialReference:p}=i;return n.xmin=Math.min(o,u),n.ymin=Math.min(d,h),n.xmax=Math.max(o,u),n.ymax=Math.max(d,h),n.spatialReference=p,n}new r.Z}}]);
//# sourceMappingURL=5883.60cf2b8b.chunk.js.map