"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[9002],{36231:(t,e,r)=>{function n(t,e,r,n,o){i(t,e,r||0,n||t.length-1,o||s)}function i(t,e,r,n,s){for(;n>r;){if(n-r>600){var a=n-r+1,l=e-r+1,u=Math.log(a),d=.5*Math.exp(2*u/3),c=.5*Math.sqrt(u*d*(a-d)/a)*(l-a/2<0?-1:1);i(t,e,Math.max(r,Math.floor(e-l*d/a+c)),Math.min(n,Math.floor(e+(a-l)*d/a+c)),s)}var h=t[e],g=r,I=n;for(o(t,r,e),s(t[n],h)>0&&o(t,r,n);g<I;){for(o(t,g,I),g++,I--;s(t[g],h)<0;)g++;for(;s(t[I],h)>0;)I--}0===s(t[r],h)?o(t,r,I):o(t,++I,n),I<=e&&(r=I+1),e<=I&&(n=I-1)}}function o(t,e,r){var n=t[e];t[e]=t[r],t[r]=n}function s(t,e){return t<e?-1:t>e?1:0}r.d(e,{q:()=>n})},85403:(t,e,r)=>{function n(t,e){return t?e?4:3:e?3:2}function i(t,e,r,i){if(null===e||void 0===e||!e.lengths.length)return null;t.lengths.length&&(t.lengths.length=0),t.coords.length&&(t.coords.length=0);const a=t.coords,l=[],u=r?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY],{lengths:d,coords:c}=e,h=n(r,i);let g=0;for(const n of d){const t=o(u,c,g,n,r,i);t&&l.push(t),g+=n*h}if(l.sort(((t,e)=>{let n=t[2]-e[2];return 0===n&&r&&(n=t[4]-e[4]),n})),l.length){let t=6*l[0][2];a[0]=l[0][0]/t,a[1]=l[0][1]/t,r&&(t=6*l[0][4],a[2]=0!==t?l[0][3]/t:0),(a[0]<u[0]||a[0]>u[1]||a[1]<u[2]||a[1]>u[3]||r&&(a[2]<u[4]||a[2]>u[5]))&&(a.length=0)}if(!a.length){const t=e.lengths[0]?s(c,0,d[0],r,i):null;if(!t)return null;a[0]=t[0],a[1]=t[1],r&&t.length>2&&(a[2]=t[2])}return t}function o(t,e,r,i,o,s){const a=n(o,s);let l=r,u=r+a,d=0,c=0,h=0,g=0,I=0;for(let n=0,p=i-1;n<p;n++,l+=a,u+=a){const r=e[l],n=e[l+1],i=e[l+2],s=e[u],a=e[u+1],f=e[u+2];let p=r*a-s*n;g+=p,d+=(r+s)*p,c+=(n+a)*p,o&&(p=r*f-s*i,h+=(i+f)*p,I+=p),r<t[0]&&(t[0]=r),r>t[1]&&(t[1]=r),n<t[2]&&(t[2]=n),n>t[3]&&(t[3]=n),o&&(i<t[4]&&(t[4]=i),i>t[5]&&(t[5]=i))}if(g>0&&(g*=-1),I>0&&(I*=-1),!g)return null;const f=[d,c,.5*g];return o&&(f[3]=h,f[4]=.5*I),f}function s(t,e,r,i,o){const s=n(i,o);let c=e,h=e+s,g=0,I=0,f=0,p=0;for(let n=0,N=r-1;n<N;n++,c+=s,h+=s){const e=t[c],r=t[c+1],n=t[c+2],o=t[h],s=t[h+1],N=t[h+2],_=i?l(e,r,n,o,s,N):a(e,r,o,s);if(_)if(g+=_,i){const t=d(e,r,n,o,s,N);I+=_*t[0],f+=_*t[1],p+=_*t[2]}else{const t=u(e,r,o,s);I+=_*t[0],f+=_*t[1]}}return g>0?i?[I/g,f/g,p/g]:[I/g,f/g]:r>0?i?[t[e],t[e+1],t[e+2]]:[t[e],t[e+1]]:null}function a(t,e,r,n){const i=r-t,o=n-e;return Math.sqrt(i*i+o*o)}function l(t,e,r,n,i,o){const s=n-t,a=i-e,l=o-r;return Math.sqrt(s*s+a*a+l*l)}function u(t,e,r,n){return[t+.5*(r-t),e+.5*(n-e)]}function d(t,e,r,n,i,o){return[t+.5*(n-t),e+.5*(i-e),r+.5*(o-r)]}r.d(e,{Y:()=>i})},10983:(t,e,r)=>{r.r(e),r.d(e,{default:()=>p});var n=r(27366),i=r(52639),o=r(93169),s=r(94172),a=r(49861),l=(r(32718),r(84936),r(69912)),u=r(43629),d=r(26279),c=r(42069),h=r(58890),g=r(67581),I=r(69787);let f=class extends((0,u.N)((0,c.A)(g.Z))){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this._applySSAO=!(0,o.Z)("disable-feature:im-ssao"),this._shadeNormals=!!(0,o.Z)("enable-feature:im-shading"),this.drapeTargetType=d.al.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t,e;return null!==(t=null===(e=this._controller)||void 0===e?void 0:e.updatingProgress)&&void 0!==t?t:0}get lodFactor(){var t,e;return null!==(t=null===(e=this.view)||void 0===e||null===(e=e.qualitySettings)||void 0===e||null===(e=e.sceneService)||void 0===e||null===(e=e.integratedMesh)||void 0===e?void 0:e.lodFactor)&&void 0!==t?t:1}get progressiveLoadFactor(){return this.lodFactor>=1?.2:1}get visibleAtCurrentScale(){return(0,I.GB)(this.i3slayer.effectiveScaleRange,this.view.scale)}get layerPopupEnabledAndHasTemplate(){return!1}initialize(){this._updatingHandles.add((()=>this.layer.modifications),(()=>this._loadModifications()),s.nn),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){return new i.Z({layer:this.layer,sourceLayer:this.layer})}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.removeHandles("modifications"),null==this.layer.modifications)return void(this._modifications=[]);const t=this.layer.modifications;this.addHandles(this._updatingHandles.addOnCollectionChange((()=>t),(()=>this._modifications=t.toArray()),s.nn),"modifications")}};(0,n._)([(0,a.Cb)()],f.prototype,"layer",void 0),(0,n._)([(0,a.Cb)()],f.prototype,"i3slayer",null),(0,n._)([(0,a.Cb)(h.q)],f.prototype,"updatingProgress",void 0),(0,n._)([(0,a.Cb)()],f.prototype,"updatingProgressValue",null),(0,n._)([(0,a.Cb)()],f.prototype,"lodFactor",null),(0,n._)([(0,a.Cb)({readOnly:!0})],f.prototype,"progressiveLoadFactor",null),(0,n._)([(0,a.Cb)({readOnly:!0})],f.prototype,"visibleAtCurrentScale",null),f=(0,n._)([(0,l.j)("esri.views.3d.layers.IntegratedMeshLayerView3D")],f);const p=f}}]);
//# sourceMappingURL=9002.135e643e.chunk.js.map