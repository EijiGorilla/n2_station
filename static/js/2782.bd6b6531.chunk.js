"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[2782],{62782:(e,t,s)=>{s.r(t),s.d(t,{TerrainTileTree3DDebugger:()=>c});var l=s(1413),i=s(27366),n=(s(59486),s(94172)),r=(s(32718),s(93169),s(84936),s(10064),s(69912)),o=s(65156),a=s(87287),h=s(80885);let c=class extends a.q{constructor(e){super(e),this.enablePolygons=!1}initialize(){(0,n.YP)((()=>this.enabled),(e=>this.view.basemapTerrain.renderPatchBorders=e),n.nn)}getTiles(){const e=null!=this.view.basemapTerrain.spatialReference?this.view.basemapTerrain.spatialReference:null;return this.view.basemapTerrain.test.getRenderedTiles().map((t=>(0,l.Z)((0,l.Z)({},t),{},{lij:t.lij,geometry:h.Z.fromExtent((0,o.HH)(t.extent,e))})))}};c=(0,i._)([(0,r.j)("esri.views.3d.layers.support.TerrainTileTree3DDebugger")],c)},87287:(e,t,s)=>{s.d(t,{q:()=>v});var l=s(27366),i=s(51995),n=s(52639),r=(s(51508),s(7138)),o=s(80987),a=s(16889),h=s(49861),c=(s(93169),s(32718),s(84936),s(69912)),b=s(62554),y=s(61459),d=s(58009),p=s(87037),u=s(61054),g=s(98351),w=s(21897);const _=[[0,179,255],[117,62,128],[0,104,255],[215,189,166],[32,0,193],[98,162,206],[102,112,129],[52,125,0],[142,118,246],[138,83,0],[92,122,255],[122,55,83],[0,142,255],[81,40,179],[0,200,244],[13,24,127],[0,170,147],[19,58,241],[22,44,35]];let v=class extends r.Z{constructor(e){super(e),this.updating=!1,this.enablePolygons=!0,this.enableLabels=!0,this._polygons=new Map,this._labels=new Map,this._enabled=!0}initialize(){this._symbols=_.map((e=>new y.Z({color:[e[0],e[1],e[2],.6],outline:{color:"black",width:1}}))),this.update()}destroy(){this._enabled=!1,this.clear()}get enabled(){return this._enabled}set enabled(e){this._enabled!==e&&(this._enabled=e,this.update())}update(){if(!this._enabled)return void this.clear();const e=this.getTiles(),t=new Array,s=new Set((this._labels.size,this._labels.keys()));e.forEach(((l,r)=>{var h,c;const y=l.lij.toString();s.delete(y);const _=null!==(h=null===(c=l.measures)||void 0===c?void 0:c.effectiveLevelForLod)&&void 0!==h?h:l.lij[0],v=l.geometry;if(this.enablePolygons&&!this._polygons.has(y)){const e=new n.Z({geometry:v,symbol:this._symbols[_%this._symbols.length]});this._polygons.set(y,e),t.push(e)}if(this.enableLabels){const s=(e=>{if(null!=e.label)return e.label;let t=e.lij.toString();return null!=e.loadPriority&&(t+=" (".concat(e.loadPriority,")")),e.measures&&(t+="[".concat(e.measures.effectiveLevelForLod,"]")),t})(l),h=r/(e.length-1),c=(0,a.t7)(0,200,h),_=(0,a.t7)(20,6,h)/.75,m=null!=l.loadPriority&&l.loadPriority>=e.length,f=new i.Z([c,m?0:c,m?0:c]),Z="3d"===this.view.type?()=>new b.Z({verticalOffset:new u.Z({screenLength:40/.75}),callout:new g.Z({color:new i.Z("white"),border:new w.Z({color:new i.Z("black")})}),symbolLayers:new o.Z([new p.Z({text:s,halo:{color:"white",size:1/.75},material:{color:f},size:_})])}):()=>new d.Z({text:s,haloColor:"white",haloSize:1/.75,color:f,size:_}),T=this._labels.get(y);if(T){const e=Z();null!=T.symbol&&JSON.stringify(e)===JSON.stringify(T.symbol)||(T.symbol=e)}else{const e=new n.Z({geometry:v.extent.center,symbol:Z()});this._labels.set(y,e),t.push(e)}}}));const l=new Array;s.forEach((e=>{const t=this._polygons.get(e);null!=t&&(l.push(t),this._polygons.delete(e));const s=this._labels.get(e);null!=s&&(l.push(s),this._labels.delete(e))})),this.view.graphics.removeMany(l),this.view.graphics.addMany(t)}clear(){this.view.graphics.removeMany(Array.from(this._polygons.values())),this.view.graphics.removeMany(Array.from(this._labels.values())),this._polygons.clear(),this._labels.clear()}};(0,l._)([(0,h.Cb)({constructOnly:!0})],v.prototype,"view",void 0),(0,l._)([(0,h.Cb)({readOnly:!0})],v.prototype,"updating",void 0),(0,l._)([(0,h.Cb)()],v.prototype,"enabled",null),v=(0,l._)([(0,c.j)("esri.views.support.TileTreeDebugger")],v)}}]);
//# sourceMappingURL=2782.bd6b6531.chunk.js.map