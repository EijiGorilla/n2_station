"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[5532],{36700:(e,t,i)=>{i.d(t,{x:()=>o});var n=i(44179),l=i(75691),r=i(61309);class o extends l.a{constructor(e){super({...e,constraint:new n.Hk(e.targetPoint)})}get hints(){return[new r.n(this.targetPoint,this.isDraped,this.domain)]}}},5532:(e,t,i)=>{i.r(t),i.d(t,{FeatureServiceSnappingSource:()=>Y});var n=i(27366),l=i(7138),r=i(14921),o=i(42537),s=i(97942),a=i(66978),d=i(94172),u=i(49861),h=(i(25243),i(63780)),p=(i(93169),i(69912)),c=i(46634),v=i(37933),y=i(74509),g=i(87960),_=i(11186),f=i(67077),w=i(82218);function b(e,t){return(0,w.g)(t.extent,S),(0,w.h)(S,(0,_.s)(m,e.x,e.y,0))}const S=(0,w.a)(),m=(0,f.c)();var I=i(69787);let C=class extends l.Z{get tiles(){const e=this.tilesCoveringView,t=null!=this.pointOfInterest?this.pointOfInterest:this.view.center;return e.sort(((e,i)=>b(t,e)-b(t,i))),e}_scaleEnabled(){return(0,I.rs)(this.view.scale,this.layer.minScale||0,this.layer.maxScale||0)}get tilesCoveringView(){if(!this.view.ready||!this.view.featuresTilingScheme||!this.view.state||null==this.tileInfo)return[];if(!this._scaleEnabled)return[];const{spans:e,lodInfo:t}=this.view.featuresTilingScheme.getTileCoverage(this.view.state,0),{level:i}=t,n=[];for(const{row:l,colFrom:r,colTo:o}of e)for(let e=r;e<=o;e++){const r=t.normalizeCol(e),o=new g.f(null,i,l,r);this.tileInfo.updateTileInfo(o),n.push(o)}return n}get tileInfo(){var e,t;return null!==(e=null===(t=this.view.featuresTilingScheme)||void 0===t?void 0:t.tileInfo)&&void 0!==e?e:null}get tileSize(){return null!=this.tileInfo?this.tileInfo.size[0]:256}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,d.YP)((()=>{var e;return null===(e=this.view)||void 0===e||null===(e=e.state)||void 0===e?void 0:e.viewpoint}),(()=>this.notifyChange("tilesCoveringView")),d.Z_))}};(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"tiles",null),(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"_scaleEnabled",null),(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"tilesCoveringView",null),(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"tileInfo",null),(0,n._)([(0,u.Cb)({readOnly:!0})],C.prototype,"tileSize",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],C.prototype,"view",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],C.prototype,"layer",void 0),(0,n._)([(0,u.Cb)()],C.prototype,"pointOfInterest",void 0),C=(0,n._)([(0,p.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles2D")],C);var H=i(13470);let k=class extends l.Z{get tiles(){const e=this.tilesCoveringView,t=this._effectivePointOfInterest;if(null!=t){const i=e.map((e=>b(t,e)));for(let n=1;n<i.length;n++)if(i[n-1]>i[n])return e.sort(((e,i)=>b(t,e)-b(t,i))),e.slice()}return e}get tilesCoveringView(){var e;return this._filterTiles(null===(e=this.view.featureTiles)||void 0===e||null===(e=e.tiles)||void 0===e?void 0:e.toArray()).map(O)}get tileInfo(){var e,t;return null!==(e=null===(t=this.view.featureTiles)||void 0===t?void 0:t.tilingScheme.toTileInfo())&&void 0!==e?e:null}get tileSize(){var e,t;return null!==(e=null===(t=this.view.featureTiles)||void 0===t?void 0:t.tileSize)&&void 0!==e?e:256}get _effectivePointOfInterest(){var e;const t=this.pointOfInterest;return null!=t?t:null===(e=this.view.pointsOfInterest)||void 0===e?void 0:e.focus.location}constructor(e){super(e),this.pointOfInterest=null}initialize(){this.addHandles((0,d.YP)((()=>this.view.featureTiles),(e=>{this.removeHandles(T),e&&this.addHandles(e.addClient(),T)}),d.nn))}_filterTiles(e){return null==e?[]:e.filter((e=>Math.abs(e.measures.screenRect[3]-e.measures.screenRect[1])>P&&e.measures.visibility===H.E.VISIBLE_ON_SURFACE))}};function O(e){let{lij:[t,i,n],extent:l}=e;return new g.f("".concat(t,"/").concat(i,"/").concat(n),t,i,n,l)}(0,n._)([(0,u.Cb)({readOnly:!0})],k.prototype,"tiles",null),(0,n._)([(0,u.Cb)({readOnly:!0})],k.prototype,"tilesCoveringView",null),(0,n._)([(0,u.Cb)({readOnly:!0})],k.prototype,"tileInfo",null),(0,n._)([(0,u.Cb)({readOnly:!0})],k.prototype,"tileSize",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],k.prototype,"view",void 0),(0,n._)([(0,u.Cb)()],k.prototype,"pointOfInterest",void 0),(0,n._)([(0,u.Cb)()],k.prototype,"_effectivePointOfInterest",null),k=(0,n._)([(0,p.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiles3D")],k);const P=50,T="feature-tiles";var F=i(64674),M=i(52824),E=i(80885),R=i(65156),Z=i(87287);let x=class extends Z.q{constructor(e){super(e)}initialize(){const e=setInterval((()=>this._fetchDebugInfo()),2e3);this.addHandles((0,o.kB)((()=>clearInterval(e))))}getTiles(){if(!this._debugInfo)return[];const e=new Map,t=new Map;this._debugInfo.storedTiles.forEach((t=>{e.set(t.data.id,t.featureCount)})),this._debugInfo.pendingTiles.forEach((i=>{e.set(i.data.id,i.featureCount),t.set(i.data.id,i.state)}));const i=i=>{var n;const l=t.get(i),r=null!==(n=e.get(i))&&void 0!==n?n:"?";return l?"".concat(l,":").concat(r,"\n").concat(i):"store:".concat(r,"\n").concat(i)},n=new Map;return this._debugInfo.storedTiles.forEach((e=>{n.set(e.data.id,e.data)})),this._debugInfo.pendingTiles.forEach((e=>{n.set(e.data.id,e.data)})),Array.from(n.values()).map((e=>({lij:[e.level,e.row,e.col],geometry:E.Z.fromExtent((0,R.HH)(e.extent,this.view.spatialReference)),label:i(e.id)})))}_fetchDebugInfo(){this.handle.getDebugInfo(null).then((e=>{this._debugInfo=e,this.update()}))}};(0,n._)([(0,u.Cb)({constructOnly:!0})],x.prototype,"handle",void 0),x=(0,n._)([(0,p.j)("esri.views.interactive.snapping.featureSources.WorkerTileTreeDebugger")],x);var z=i(92026),j=i(46798),N=i(27823),V=i(55946);let A=class extends l.Z{get updating(){return this._updatingHandles.updating||this._workerHandleUpdating}constructor(e){super(e),this._updatingHandles=new c.R,this._suspendController=null,this.schedule=null,this.hasZ=!1,this.elevationAlignPointsInFeatures=async e=>{const t=[];for(const{points:i}of e.pointsInFeatures)for(const{z:e}of i)t.push(e);return{elevations:t,drapedObjectIds:new Set,failedObjectIds:new Set}},this.queryForSymbologySnapping=async()=>({candidates:[],sourceCandidateIndices:[]}),this.availability=0,this._workerHandleUpdating=!0,this._editId=0,this.updateOutFields=(0,a.Ds)((async(e,t)=>{await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateOutFields",[...e],t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}))}destroy(){this._suspendController=(0,z.IM)(this._suspendController),this._workerHandle.destroy(),this._updatingHandles.destroy()}initialize(){this._workerHandle=new L(this.schedule,{alignElevation:async(e,t)=>{let{signal:i}=t;return{result:await this.elevationAlignPointsInFeatures(e.query,i)}},getSymbologyCandidates:async(e,t)=>{let{signal:i}=t;return{result:await this.queryForSymbologySnapping(e,i)}}}),this.addHandles([this._workerHandle.on("notify-updating",(e=>{let{updating:t}=e;return this._workerHandleUpdating=t})),this._workerHandle.on("notify-availability",(e=>{let{availability:t}=e;return this._set("availability",t)}))])}async setup(e,t){var i;const n=this._serviceInfoFromLayer(e.layer);if(null==n)return;const l={configuration:this._convertConfiguration(e.configuration),serviceInfo:n,spatialReference:e.spatialReference.toJSON(),hasZ:this.hasZ,elevationInfo:null===(i=e.layer.elevationInfo)||void 0===i?void 0:i.toJSON()};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("setup",l,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async configure(e,t){const i=this._convertConfiguration(e);await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("configure",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async refresh(e){await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("refresh",{},e)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},e))}async fetchCandidates(e,t){const{point:i,filter:n,coordinateHelper:l}=e,r={...e,point:(0,V.T)(i[0],i[1],i[2],l.spatialReference.toJSON()),filter:null===n||void 0===n?void 0:n.toJSON()};return this._workerHandle.invoke(r,t)}async updateTiles(e,t){const i={tiles:e.tiles,tileInfo:null!=e.tileInfo?e.tileInfo.toJSON():null,tileSize:e.tileSize};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("updateTiles",i,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}async applyEdits(e,t){var i,n,l,r,o,s;const d=this._editId++,u={id:d};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("beginApplyEdits",u,t));const p=await this._updatingHandles.addPromise((0,a.Hl)(e.result,t)),c={id:d,edits:{addedFeatures:null!==(i=null===(n=p.addedFeatures)||void 0===n?void 0:n.map((e=>{let{objectId:t}=e;return t})).filter(h.pC))&&void 0!==i?i:[],deletedFeatures:null!==(l=null===(r=p.deletedFeatures)||void 0===r?void 0:r.map((e=>{let{objectId:t,globalId:i}=e;return{objectId:t,globalId:i}})))&&void 0!==l?l:[],updatedFeatures:null!==(o=null===(s=p.updatedFeatures)||void 0===s?void 0:s.map((e=>{let{objectId:t}=e;return t})).filter(h.pC))&&void 0!==o?o:[]}};await this._updatingHandles.addPromise(this._workerHandle.invokeMethod("endApplyEdits",c,t)),this._updatingHandles.addPromise(this._workerHandle.invokeMethod("whenNotUpdating",{},t))}getDebugInfo(e){return this._workerHandle.invokeMethod("getDebugInfo",{},e)}async notifyElevationSourceChange(){await this._workerHandle.invokeMethod("notifyElevationSourceChange",{})}async notifySymbologyChange(){await this._workerHandle.invokeMethod("notifySymbologyChange",{})}async setSymbologySnappingSupported(e){await this._workerHandle.invokeMethod("setSymbologySnappingSupported",e)}async setSuspended(e){var t;null!==(t=this._suspendController)&&void 0!==t&&t.abort(),this._suspendController=new AbortController,await this._workerHandle.invokeMethod("setSuspended",e,this._suspendController.signal)}_convertConfiguration(e){return{filter:null!=e.filter?e.filter.toJSON():null,customParameters:e.customParameters,viewType:e.viewType}}_serviceInfoFromLayer(e){var t,i,n;return"multipatch"===e.geometryType||"mesh"===e.geometryType?null:{url:null!==(t=null===(i=e.parsedUrl)||void 0===i?void 0:i.path)&&void 0!==t?t:"",fieldsIndex:e.fieldsIndex.toJSON(),geometryType:N.M.toJSON(e.geometryType),capabilities:e.capabilities,objectIdField:e.objectIdField,globalIdField:e.globalIdField,spatialReference:e.spatialReference.toJSON(),timeInfo:null===(n=e.timeInfo)||void 0===n?void 0:n.toJSON()}}};(0,n._)([(0,u.Cb)({constructOnly:!0})],A.prototype,"schedule",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],A.prototype,"hasZ",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],A.prototype,"elevationAlignPointsInFeatures",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],A.prototype,"queryForSymbologySnapping",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],A.prototype,"updating",null),(0,n._)([(0,u.Cb)({readOnly:!0})],A.prototype,"availability",void 0),(0,n._)([(0,u.Cb)()],A.prototype,"_workerHandleUpdating",void 0),A=(0,n._)([(0,p.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorkerHandle")],A);class L extends j.q{constructor(e,t){super("FeatureServiceSnappingSourceWorker","fetchCandidates",{},e,{strategy:"dedicated",client:t})}}var D=i(585),U=i(59068),J=i(22824);let W=class extends l.Z{get tiles(){return[new g.f("0/0/0",0,0,0,(0,R.al)(-1e8,-1e8,1e8,1e8))]}get tileInfo(){return new J.Z({origin:new D.Z({x:-1e8,y:1e8,spatialReference:this.layer.spatialReference}),size:[512,512],lods:[new U.Z({level:0,scale:1,resolution:390625})],spatialReference:this.layer.spatialReference})}get tileSize(){return this.tileInfo.size[0]}constructor(e){super(e),this.pointOfInterest=null}};(0,n._)([(0,u.Cb)({readOnly:!0})],W.prototype,"tiles",null),(0,n._)([(0,u.Cb)({readOnly:!0})],W.prototype,"tileInfo",null),(0,n._)([(0,u.Cb)({readOnly:!0})],W.prototype,"tileSize",null),(0,n._)([(0,u.Cb)({constructOnly:!0})],W.prototype,"layer",void 0),(0,n._)([(0,u.Cb)()],W.prototype,"pointOfInterest",void 0),W=(0,n._)([(0,p.j)("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTilesSimple")],W);var q=i(32609);let Y=class extends l.Z{get _updateTilesParameters(){return{tiles:this._tilesOfInterest.tiles,tileInfo:this._tilesOfInterest.tileInfo,tileSize:this._tilesOfInterest.tileSize}}get _layerView(){var e;return null===(e=this.view)||void 0===e?void 0:e.allLayerViews.find((e=>e.layer===this._layer))}get _isSuspended(){var e;return!(!(0,v.e9)(this._layer)||this._layer.sublayers.find((e=>e.visible)))||!!this.view&&(!1!==(null===(e=this._layerView)||void 0===e?void 0:e.suspended)||!this.layerSource.enabled)}get updating(){var e;return(null===(e=this._workerHandle)||void 0===e?void 0:e.updating)||this._updatingHandles.updating}get _outFields(){var e,t;const{view:i,_layerView:n,layerSource:l}=this,{layer:r}=l,{fieldsIndex:o,timeInfo:s,floorInfo:a,subtypeField:d}=r,u=n&&"filter"in n?n.filter:null,h=null!==u&&void 0!==u&&u.where&&"1=1"!==u.where?this._getOrLoadWhereFields(u.where,o):[];if(null!==u&&void 0!==u&&u.timeExtent&&s){var p,c,v,y;const{startField:e,endField:t}=s,i=null!==(p=null===(c=o.get(e))||void 0===c?void 0:c.name)&&void 0!==p?p:e,n=null!==(v=null===(y=o.get(t))||void 0===y?void 0:y.name)&&void 0!==v?v:t;i&&h.push(i),n&&h.push(n)}if(null!==i&&void 0!==i&&i.map&&(0,F.n0)(i.map)&&null!==(e=i.map.utilityNetworks)&&void 0!==e&&e.find((e=>e.isUtilityLayer(r)))){var g,_;const e=null===(g=r.fieldsIndex.get("assetGroup"))||void 0===g?void 0:g.name,t=null===(_=r.fieldsIndex.get("assetType"))||void 0===_?void 0:_.name;e&&t&&(h.push(e),h.push(t))}if(r&&null!==a&&void 0!==a&&a.floorField&&null!==i&&void 0!==i&&null!==(t=i.floors)&&void 0!==t&&t.length){var f,w;const e=null!==(f=null===(w=o.get(a.floorField))||void 0===w?void 0:w.name)&&void 0!==f?f:a.floorField;e&&h.push(e)}if(d){var b,S;const e=null!==(b=null===(S=o.get(d))||void 0===S?void 0:S.name)&&void 0!==b?b:d;e&&h.push(e)}return new Set(h)}get configuration(){const{view:e}=this,t=null!=e?e.type:"2d";return{filter:this._layer.createQuery(),customParameters:this._layer.customParameters,viewType:t}}get availability(){var e,t;return null!==(e=null===(t=this._workerHandle)||void 0===t?void 0:t.availability)&&void 0!==e?e:0}get _layer(){return this.layerSource.layer}constructor(e){super(e),this._updatingHandles=new c.R,this._workerHandle=null,this._debug=null,this._memoizedMakeGetGroundElevation=(0,s.H)(M.g)}initialize(){let e;const t=this.view;if(null!=t)switch(t.type){case"2d":this._tilesOfInterest=new C({view:t,layer:this._layer}),e=this._workerHandle=new A;break;case"3d":{var i;const{resourceController:n}=t,l=this._layer;this._tilesOfInterest=new k({view:t}),e=this._workerHandle=new A({schedule:e=>n.immediate.schedule(e),hasZ:this._layer.hasZ&&(null===(i=this._layer.returnZ)||void 0===i||i),elevationAlignPointsInFeatures:async(e,i)=>{const n=await t.whenLayerView(l);return(0,a.k_)(i),n.elevationAlignPointsInFeatures(e,i)},queryForSymbologySnapping:async(e,i)=>{const n=await t.whenLayerView(l);return(0,a.k_)(i),n.queryForSymbologySnapping(e,i)}}),this.addHandles([t.elevationProvider.on("elevation-change",(t=>{let{context:i}=t;const{elevationInfo:n}=l;(0,y.W_)(i,n)&&(0,a.R8)(e.notifyElevationSourceChange())})),(0,d.YP)((()=>l.elevationInfo),(()=>(0,a.R8)(e.notifyElevationSourceChange())),d.nn),(0,d.YP)((()=>{var e;return null===(e=this._layerView)||void 0===e||null===(e=e.processor)||void 0===e?void 0:e.renderer}),(()=>(0,a.R8)(e.notifySymbologyChange())),d.nn),(0,d.YP)((()=>{var e,t;return null!==(e=null===(t=this._layerView)||void 0===t?void 0:t.symbologySnappingSupported)&&void 0!==e&&e}),(t=>(0,a.R8)(e.setSymbologySnappingSupported(t))),d.nn),(0,d.on)((()=>{var e;return null===(e=this._layerView)||void 0===e?void 0:e.layer}),["edits","apply-edits","graphic-update"],(()=>e.notifySymbologyChange()))]);break}}else this._tilesOfInterest=new W({layer:this._layer}),e=this._workerHandle=new A;this.addHandles([(0,o.ed)(e)]),(0,a.R8)(e.setup({layer:this._layer,spatialReference:this.spatialReference,configuration:this.configuration},null)),this._updatingHandles.add((()=>this._updateTilesParameters),(()=>(0,a.R8)(e.updateTiles(this._updateTilesParameters,null))),d.nn),this.addHandles([(0,d.YP)((()=>this.configuration),(t=>(0,a.R8)(e.configure(t,null))),d.Z_),(0,d.YP)((()=>this._outFields),(t=>(0,a.R8)(e.updateOutFields(t))),d.nn),(0,d.YP)((()=>this._isSuspended),(t=>(0,a.R8)(e.setSuspended(t))),d.tX)]),null!=t&&this.addHandles((0,d.YP)((()=>q.Z.FEATURE_SERVICE_SNAPPING_SOURCE_TILE_TREE_SHOW_TILES),(i=>{i&&!this._debug?(this._debug=new x({view:t,handle:e}),this.addHandles((0,o.ed)(this._debug),"debug")):!i&&this._debug&&this.removeHandles("debug")}),d.nn)),this.addHandles(this.layerSource.layer.on("apply-edits",(t=>{(0,a.R8)(e.applyEdits(t,null))})))}destroy(){this._updatingHandles.destroy()}refresh(){var e;null===(e=this._workerHandle)||void 0===e||e.refresh(null)}async fetchCandidates(e,t){const{coordinateHelper:i,point:n}=e;this._tilesOfInterest.pointOfInterest=i.arrayToPoint(n);const l=this._memoizedMakeGetGroundElevation(this.view,i.spatialReference);return(await this._workerHandle.fetchCandidates({...e},t)).candidates.map((e=>(0,M.X)(e,l)))}getDebugInfo(e){return this._workerHandle.getDebugInfo(e)}_getOrLoadWhereFields(e,t){const{_whereModule:n}=this;if(!this._loadWhereModuleTask&&!n){const e=(0,r.vr)((async()=>{const e=await Promise.all([i.e(4054),i.e(5026)]).then(i.bind(i,54054));return this._whereModule=e.WhereClause,this._whereModule}));return this._loadWhereModuleTask=e,this._updatingHandles.addPromise(e.promise),[]}if(!n)return[];try{return n.create(e,t).fieldNames}catch(l){return[]}}};(0,n._)([(0,u.Cb)({constructOnly:!0})],Y.prototype,"spatialReference",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],Y.prototype,"layerSource",void 0),(0,n._)([(0,u.Cb)({constructOnly:!0})],Y.prototype,"view",void 0),(0,n._)([(0,u.Cb)()],Y.prototype,"_tilesOfInterest",void 0),(0,n._)([(0,u.Cb)({readOnly:!0})],Y.prototype,"_updateTilesParameters",null),(0,n._)([(0,u.Cb)()],Y.prototype,"_layerView",null),(0,n._)([(0,u.Cb)()],Y.prototype,"_isSuspended",null),(0,n._)([(0,u.Cb)({readOnly:!0})],Y.prototype,"updating",null),(0,n._)([(0,u.Cb)()],Y.prototype,"_outFields",null),(0,n._)([(0,u.Cb)({readOnly:!0})],Y.prototype,"configuration",null),(0,n._)([(0,u.Cb)({readOnly:!0})],Y.prototype,"availability",null),(0,n._)([(0,u.Cb)()],Y.prototype,"_loadWhereModuleTask",void 0),(0,n._)([(0,u.Cb)()],Y.prototype,"_whereModule",void 0),Y=(0,n._)([(0,p.j)("esri.views.interactive.snapping.featureSources.FeatureServiceSnappingSource")],Y)},52824:(e,t,i)=>{i.d(t,{X:()=>a,g:()=>d});var n=i(38054),l=i(97760),r=i(95905),o=i(36700);function s(e){let{x:t,y:i,z:l}=e;return(0,n.al)(t,i,null!==l&&void 0!==l?l:0)}function a(e,t){switch(e.type){case"edge":return e.draped?new l.k({edgeStart:s(e.start),edgeEnd:s(e.end),targetPoint:s(e.target),objectId:e.objectId,getGroundElevation:t}):new r.L({edgeStart:s(e.start),edgeEnd:s(e.end),targetPoint:s(e.target),objectId:e.objectId,isDraped:!1});case"vertex":return new o.x({targetPoint:s(e.target),objectId:e.objectId,isDraped:!1})}}function d(e,t){return null!=e&&"3d"===e.type?(i,n)=>e.elevationProvider.getElevation(i,n,0,t,"ground"):()=>null}},87287:(e,t,i)=>{i.d(t,{q:()=>w});var n=i(27366),l=i(51995),r=i(52639),o=(i(51508),i(7138)),s=i(80987),a=i(16889),d=i(49861),u=(i(25243),i(63780),i(93169),i(69912)),h=i(62554),p=i(61459),c=i(58009),v=i(87037),y=i(61054),g=i(98351),_=i(21897);const f=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let w=class extends o.Z{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=f.map((e=>new p.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,i=new Set((this._labels.size,this._labels.keys()));e.forEach(((n,o)=>{const d=n.lij.toString();i.delete(d);const u=n.lij[0],p=n.geometry;if(this.enablePolygons&&!this._polygons.has(d)){const e=new r.Z({geometry:p,symbol:this._symbols[u%this._symbols.length]});this._polygons.set(d,e),t.push(e)}if(this.enableLabels){const i=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=" (".concat(e.loadPriority,")")),t})(n),u=o/(e.length-1),f=(0,a.t7)(0,200,u),w=(0,a.t7)(20,6,u)/.75,b=null!=n.loadPriority&&n.loadPriority>=e.length,S=new l.Z([f,b?0:f,b?0:f]),m="3d"===this.view.type?()=>new h.Z({verticalOffset:new y.Z({screenLength:40/.75}),callout:new g.Z({color:new l.Z("white"),border:new _.Z({color:new l.Z("black")})}),symbolLayers:new s.Z([new v.Z({text:i,halo:{color:"white",size:1/.75},material:{color:S},size:w})])}):()=>new c.Z({text:i,haloColor:"white",haloSize:1/.75,color:S,size:w}),I=this._labels.get(d);if(I){const e=m();null!=I.symbol&&JSON.stringify(e)===JSON.stringify(I.symbol)||(I.symbol=e)}else{const e=new r.Z({geometry:p.extent.center,symbol:m()});this._labels.set(d,e),t.push(e)}}}));const n=new Array;i.forEach((e=>{const t=this._polygons.get(e);null!=t&&(n.push(t),this._polygons.delete(e));const i=this._labels.get(e);null!=i&&(n.push(i),this._labels.delete(e))})),this.view.graphics.removeMany(n),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,n._)([(0,d.Cb)({constructOnly:!0})],w.prototype,"view",void 0),(0,n._)([(0,d.Cb)({readOnly:!0})],w.prototype,"updating",void 0),(0,n._)([(0,d.Cb)()],w.prototype,"enabled",null),w=(0,n._)([(0,u.j)("esri.views.support.TileTreeDebugger")],w)}}]);
//# sourceMappingURL=5532.24d84e98.chunk.js.map