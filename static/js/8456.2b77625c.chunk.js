"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[8456],{8456:(e,t,a)=>{a.r(t),a.d(t,{default:()=>g});var i=a(27366),s=a(66978),r=a(94172),n=(a(32718),a(25243),a(63780),a(93169),a(10064)),o=a(69912),l=a(69229),d=a(49861),u=a(585),p=a(45948),h=a(21149),m=a(24405);const c=e=>{let t=class extends e{constructor(){super(...arguments),this.view=null}async fetchPopupFeatures(e,t){const{layer:a}=this;if(!e)throw new n.Z("imagerylayerview:fetchPopupFeatures","Nothing to fetch without area",{layer:a});const{popupEnabled:i}=a,s=(0,m.V5)(a,t);if(!i||null==s)throw new n.Z("imagerylayerview:fetchPopupFeatures","Missing required popupTemplate or popupEnabled",{popupEnabled:i,popupTemplate:s});const r=await s.getRequiredFields(),o=new h.Z;o.timeExtent=this.timeExtent,o.geometry=e,o.outFields=r,o.outSpatialReference=e.spatialReference;const{resolution:l,spatialReference:d}=this.view,p="2d"===this.view.type?new u.Z(l,l,d):new u.Z(.5*l,.5*l,d),{returnTopmostRaster:c,showNoDataRecords:w}=s.layerOptions||{returnTopmostRaster:!0,showNoDataRecords:!1},g={returnDomainValues:!0,returnTopmostRaster:c,pixelSize:p,showNoDataRecords:w,signal:null!=t?t.signal:null};return a.queryVisibleRasters(o,g).then((e=>e))}canResume(){var e;return!!super.canResume()&&!(null!==(e=this.timeExtent)&&void 0!==e&&e.isEmpty)}};return(0,i._)([(0,d.Cb)()],t.prototype,"layer",void 0),(0,i._)([(0,d.Cb)()],t.prototype,"suspended",void 0),(0,i._)([(0,d.Cb)(p.qG)],t.prototype,"timeExtent",void 0),(0,i._)([(0,d.Cb)()],t.prototype,"view",void 0),t=(0,i._)([(0,o.j)("esri.views.layers.ImageryLayerView")],t),t};let w=class extends(c(l.Z)){constructor(){super(...arguments),this.type="imagery-3d",this.redrawDebounced=(0,s.Ds)((async e=>{this.redraw(((e,t)=>this._redrawImage(e,t)),e)}),2e3)}initialize(){this.addHandles([(0,r.gx)((()=>this.view.basemapTerrain.ready),(()=>this._initializeMaximumDataResolution()),{once:!0,initial:!0}),this.layer.on("redraw",(()=>this._updatingHandles.addPromise(this.redrawDebounced())))]),this._updatingHandles.add((()=>{var e;return null===(e=this.layer)||void 0===e||null===(e=e.exportImageServiceParameters)||void 0===e?void 0:e.version}),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())})),this._updatingHandles.add((()=>{var e;return null===(e=this.layer)||void 0===e?void 0:e.renderer}),(()=>{this._updatingHandles.addPromise(this.refreshDebounced())})),this._updatingHandles.add((()=>this.timeExtent),(()=>this._updatingHandles.addPromise(this.refreshDebounced())))}_initializeMaximumDataResolution(){this.maximumDataResolution=this.layer.loaded?this.layer.serviceRasterInfo.pixelSize:null}getFetchOptions(){return{timeExtent:this.timeExtent}}async processResult(e,t,a){t.imageOrCanvasElement?e.image=t.imageOrCanvasElement:(e.image=document.createElement("canvas"),e.pixelData=t.pixelData,await this._redrawImage(e,a))}async _redrawImage(e,t){if(!(e.image instanceof HTMLCanvasElement)||null==e.pixelData)throw new Error;const a=e.image,i=a.getContext("2d"),s=await this.layer.applyRenderer(e.pixelData,{signal:t}),r=this.layer.applyFilter(s).pixelBlock;if(null==r)throw new Error;a.width=r.width,a.height=r.height;const n=i.createImageData(r.width,r.height);n.data.set(r.getAsRGBA()),i.putImageData(n,0,0)}};w=(0,i._)([(0,o.j)("esri.views.3d.layers.ImageryLayerView3D")],w);const g=w}}]);
//# sourceMappingURL=8456.2b77625c.chunk.js.map