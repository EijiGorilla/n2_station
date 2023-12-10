"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[8839],{36231:(t,e,n)=>{n.d(e,{q:()=>a});var i,o,s,r=n(84397),l={exports:{}};i=l,o=function(){function t(n,i,o,s,r){for(;s>o;){if(s-o>600){var l=s-o+1,a=i-o+1,h=Math.log(l),c=.5*Math.exp(2*h/3),u=.5*Math.sqrt(h*c*(l-c)/l)*(a-l/2<0?-1:1);t(n,i,Math.max(o,Math.floor(i-a*c/l+u)),Math.min(s,Math.floor(i+(l-a)*c/l+u)),r)}var d=n[i],p=o,m=s;for(e(n,o,i),r(n[s],d)>0&&e(n,o,s);p<m;){for(e(n,p,m),p++,m--;r(n[p],d)<0;)p++;for(;r(n[m],d)>0;)m--}0===r(n[o],d)?e(n,o,m):e(n,++m,s),m<=i&&(o=m+1),i<=m&&(s=m-1)}}function e(t,e,n){var i=t[e];t[e]=t[n],t[n]=i}function n(t,e){return t<e?-1:t>e?1:0}return function(e,i,o,s,r){t(e,i,o||0,s||e.length-1,r||n)}},void 0!==(s=o())&&(i.exports=s);const a=(0,r.g)(l.exports)},13491:(t,e,n)=>{n.d(e,{Q:()=>r});var i=n(63780),o=n(27546),s=n(36231);class r{constructor(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:9,e=arguments.length>1?arguments[1]:void 0;this._compareMinX=c,this._compareMinY=u,this._toBBox=t=>t,this._maxEntries=Math.max(4,t||9),this._minEntries=Math.max(2,Math.ceil(.4*this._maxEntries)),e&&("function"==typeof e?this._toBBox=e:this._initFormat(e)),this.clear()}destroy(){this.clear(),g.prune(),v.prune(),P.prune(),b.prune()}all(t){this._all(this._data,t)}search(t,e){let n=this._data;const i=this._toBBox;if(x(t,n))for(g.clear();n;){for(let o=0,s=n.children.length;o<s;o++){const s=n.children[o],r=n.leaf?i(s):s;x(t,r)&&(n.leaf?e(s):_(t,r)?this._all(s,e):g.push(s))}n=g.pop()}}collides(t){let e=this._data;const n=this._toBBox;if(!x(t,e))return!1;for(g.clear();e;){for(let i=0,o=e.children.length;i<o;i++){const o=e.children[i],s=e.leaf?n(o):o;if(x(t,s)){if(e.leaf||_(t,s))return!0;g.push(o)}}e=g.pop()}return!1}load(t){if(!t.length)return this;if(t.length<this._minEntries){for(let e=0,n=t.length;e<n;e++)this.insert(t[e]);return this}let e=this._build(t.slice(0,t.length),0,t.length-1,0);if(this._data.children.length)if(this._data.height===e.height)this._splitRoot(this._data,e);else{if(this._data.height<e.height){const t=this._data;this._data=e,e=t}this._insert(e,this._data.height-e.height-1,!0)}else this._data=e;return this}insert(t){return t&&this._insert(t,this._data.height-1),this}clear(){return this._data=new R([]),this}remove(t){if(!t)return this;let e,n=this._data,o=null,s=0,r=!1;const l=this._toBBox(t);for(P.clear(),b.clear();n||P.length>0;){var a;if(n||(n=P.pop(),o=P.data[P.length-1],s=null!==(a=b.pop())&&void 0!==a?a:0,r=!0),n.leaf&&(e=(0,i.cq)(n.children,t,n.children.length,n.indexHint),-1!==e))return n.children.splice(e,1),P.push(n),this._condense(P),this;r||n.leaf||!_(n,l)?o?(s++,n=o.children[s],r=!1):n=null:(P.push(n),b.push(s),s=0,o=n,n=n.children[0])}return this}toJSON(){return this._data}fromJSON(t){return this._data=t,this}_all(t,e){let n=t;for(v.clear();n;){var i;if(!0===n.leaf)for(const t of n.children)e(t);else v.pushArray(n.children);n=null!==(i=v.pop())&&void 0!==i?i:null}}_build(t,e,n,i){const o=n-e+1;let s=this._maxEntries;if(o<=s){const i=new R(t.slice(e,n+1));return l(i,this._toBBox),i}i||(i=Math.ceil(Math.log(o)/Math.log(s)),s=Math.ceil(o/s**(i-1)));const r=new C([]);r.height=i;const a=Math.ceil(o/s),h=a*Math.ceil(Math.sqrt(s));y(t,e,n,h,this._compareMinX);for(let l=e;l<=n;l+=h){const e=Math.min(l+h-1,n);y(t,l,e,a,this._compareMinY);for(let n=l;n<=e;n+=a){const o=Math.min(n+a-1,e);r.children.push(this._build(t,n,o,i-1))}}return l(r,this._toBBox),r}_chooseSubtree(t,e,n,i){for(;i.push(e),!0!==e.leaf&&i.length-1!==n;){let n,i=1/0,o=1/0;for(let s=0,r=e.children.length;s<r;s++){const r=e.children[s],l=d(r),a=m(t,r)-l;a<o?(o=a,i=l<i?l:i,n=r):a===o&&l<i&&(i=l,n=r)}e=n||e.children[0]}return e}_insert(t,e,n){const i=this._toBBox,o=n?t:i(t);P.clear();const s=this._chooseSubtree(o,this._data,e,P);for(s.children.push(t),h(s,o);e>=0&&P.data[e].children.length>this._maxEntries;)this._split(P,e),e--;this._adjustParentBBoxes(o,P,e)}_split(t,e){const n=t.data[e],i=n.children.length,o=this._minEntries;this._chooseSplitAxis(n,o,i);const s=this._chooseSplitIndex(n,o,i);if(!s)return void console.log("  Error: assertion failed at PooledRBush._split: no valid split index");const r=n.children.splice(s,n.children.length-s),a=n.leaf?new R(r):new C(r);a.height=n.height,l(n,this._toBBox),l(a,this._toBBox),e?t.data[e-1].children.push(a):this._splitRoot(n,a)}_splitRoot(t,e){this._data=new C([t,e]),this._data.height=t.height+1,l(this._data,this._toBBox)}_chooseSplitIndex(t,e,n){let i,o,s;i=o=1/0;for(let r=e;r<=n-e;r++){const e=a(t,0,r,this._toBBox),l=a(t,r,n,this._toBBox),h=f(e,l),c=d(e)+d(l);h<i?(i=h,s=r,o=c<o?c:o):h===i&&c<o&&(o=c,s=r)}return s}_chooseSplitAxis(t,e,n){const i=t.leaf?this._compareMinX:c,o=t.leaf?this._compareMinY:u;this._allDistMargin(t,e,n,i)<this._allDistMargin(t,e,n,o)&&t.children.sort(i)}_allDistMargin(t,e,n,i){t.children.sort(i);const o=this._toBBox,s=a(t,0,e,o),r=a(t,n-e,n,o);let l=p(s)+p(r);for(let a=e;a<n-e;a++){const e=t.children[a];h(s,t.leaf?o(e):e),l+=p(s)}for(let a=n-e-1;a>=e;a--){const e=t.children[a];h(r,t.leaf?o(e):e),l+=p(r)}return l}_adjustParentBBoxes(t,e,n){for(let i=n;i>=0;i--)h(e.data[i],t)}_condense(t){for(let e=t.length-1;e>=0;e--){const n=t.data[e];if(0===n.children.length)if(e>0){const o=t.data[e-1],s=o.children;s.splice((0,i.cq)(s,n,s.length,o.indexHint),1)}else this.clear();else l(n,this._toBBox)}}_initFormat(t){const e=["return a"," - b",";"];this._compareMinX=new Function("a","b",e.join(t[0])),this._compareMinY=new Function("a","b",e.join(t[1])),this._toBBox=new Function("a","return {minX: a"+t[0]+", minY: a"+t[1]+", maxX: a"+t[2]+", maxY: a"+t[3]+"};")}}function l(t,e){a(t,0,t.children.length,e,t)}function a(t,e,n,i,o){o||(o=new R([])),o.minX=1/0,o.minY=1/0,o.maxX=-1/0,o.maxY=-1/0;for(let s,r=e;r<n;r++)s=t.children[r],h(o,t.leaf?i(s):s);return o}function h(t,e){t.minX=Math.min(t.minX,e.minX),t.minY=Math.min(t.minY,e.minY),t.maxX=Math.max(t.maxX,e.maxX),t.maxY=Math.max(t.maxY,e.maxY)}function c(t,e){return t.minX-e.minX}function u(t,e){return t.minY-e.minY}function d(t){return(t.maxX-t.minX)*(t.maxY-t.minY)}function p(t){return t.maxX-t.minX+(t.maxY-t.minY)}function m(t,e){return(Math.max(e.maxX,t.maxX)-Math.min(e.minX,t.minX))*(Math.max(e.maxY,t.maxY)-Math.min(e.minY,t.minY))}function f(t,e){const n=Math.max(t.minX,e.minX),i=Math.max(t.minY,e.minY),o=Math.min(t.maxX,e.maxX),s=Math.min(t.maxY,e.maxY);return Math.max(0,o-n)*Math.max(0,s-i)}function _(t,e){return t.minX<=e.minX&&t.minY<=e.minY&&e.maxX<=t.maxX&&e.maxY<=t.maxY}function x(t,e){return e.minX<=t.maxX&&e.minY<=t.maxY&&e.maxX>=t.minX&&e.maxY>=t.minY}function y(t,e,n,i,o){const r=[e,n];for(;r.length;){const e=r.pop(),n=r.pop();if(e-n<=i)continue;const l=n+Math.ceil((e-n)/i/2)*i;(0,s.q)(t,l,n,e,o),r.push(n,l,l,e)}}const g=new o.Z,v=new o.Z,P=new o.Z,b=new o.Z({deallocator:void 0});class w{constructor(){this.minX=1/0,this.minY=1/0,this.maxX=-1/0,this.maxY=-1/0}}class M extends w{constructor(){super(...arguments),this.height=1,this.indexHint=new i.SO}}class R extends M{constructor(t){super(),this.children=t,this.leaf=!0}}class C extends M{constructor(t){super(),this.children=t,this.leaf=!1}}},67593:(t,e,n)=>{n.d(e,{E:()=>d,H:()=>u});var i=n(22753),o=n(11873),s=n(88396),r=n(11186);const l=(0,n(71353).c)(),a=(0,o.a)(),h=(0,o.a)(),c=(0,o.a)();function u(t,e,n){return(0,r.s)(l,e[0],e[1],1),(0,r.t)(l,l,(0,i.t)(a,n)),0===l[2]?(0,s.s)(t,l[0],l[1]):(0,s.s)(t,l[0]/l[2],l[1]/l[2])}function d(t,e,n){return p(h,e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7]),p(c,n[0],n[1],n[2],n[3],n[4],n[5],n[6],n[7]),(0,i.m)(t,(0,i.a)(h,h),c),0!==t[8]&&(t[0]/=t[8],t[1]/=t[8],t[2]/=t[8],t[3]/=t[8],t[4]/=t[8],t[5]/=t[8],t[6]/=t[8],t[7]/=t[8],t[8]/=t[8]),t}function p(t,e,n,o,s,h,c,u,d){(0,i.s)(t,e,o,h,n,s,c,1,1,1),(0,r.s)(l,u,d,1),(0,i.a)(a,t);const[p,m,f]=(0,r.t)(l,l,(0,i.t)(a,a));return(0,i.s)(a,p,0,0,0,m,0,0,0,f),(0,i.m)(t,a,t)}},47991:(t,e,n)=>{n.d(e,{SR:()=>u,Ui:()=>c});var i=n(46784),o=n(65156),s=n(376),r=n(69662),l=n(77981),a=n(76335),h=n(92975);function c(t){return d(t,!0)}function u(t){return d(t,!1)}function d(t,e){if(null==t)return null;const n=t.spatialReference,o=(0,h.C5)(n),r=(0,i.AK)(t)?t.toJSON():t;if(!o)return r;const c=(0,h.sS)(n)?102100:4326,u=a.UZ[c].maxX,d=a.UZ[c].minX;if((0,l.wp)(r))return m(r,u,d);if((0,l.aW)(r))return r.points=r.points.map((t=>m(t,u,d))),r;if((0,l.YX)(r))return p(r,o);if((0,l.oU)(r)||(0,l.l9)(r)){const t=(0,s.$P)(v,r),n={xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3]},i=(0,a.XZ)(n.xmin,d)*(2*u),o=0===i?r:(0,a.Sy)(r,i);return n.xmin+=i,n.xmax+=i,n.xmax>u?y(o,u,e):n.xmin<d?y(o,d,e):o}return r}function p(t,e){if(!e)return t;const n=function(t,e){const n=[],{ymin:i,ymax:o,xmin:s,xmax:r}=t,l=t.xmax-t.xmin,[a,h]=e.valid,{x:c,frameId:u}=f(t.xmin,e),{x:d,frameId:p}=f(t.xmax,e),m=c===d&&l>0;if(l>2*h){const t={xmin:s<r?c:d,ymin:i,xmax:h,ymax:o},e={xmin:a,ymin:i,xmax:s<r?d:c,ymax:o},l={xmin:0,ymin:i,xmax:h,ymax:o},m={xmin:a,ymin:i,xmax:0,ymax:o},f=[],x=[];_(t,l)&&f.push(u),_(t,m)&&x.push(u),_(e,l)&&f.push(p),_(e,m)&&x.push(p);for(let n=u+1;n<p;n++)f.push(n),x.push(n);n.push(new g(t,[u]),new g(e,[p]),new g(l,f),new g(m,x))}else c>d||m?n.push(new g({xmin:c,ymin:i,xmax:h,ymax:o},[u]),new g({xmin:a,ymin:i,xmax:d,ymax:o},[p])):n.push(new g({xmin:c,ymin:i,xmax:d,ymax:o},[u]));return n}(t,e).map((t=>t.extent));return n.length<2?n[0]||t:n.length>2?(t.xmin=e.valid[0],t.xmax=e.valid[1],t):{rings:n.map((t=>[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]))}}function m(t,e,n){if(Array.isArray(t)){const i=t[0];if(i>e){const n=(0,a.XZ)(i,e);t[0]=i+n*(-2*e)}else if(i<n){const e=(0,a.XZ)(i,n);t[0]=i+e*(-2*n)}}else{const i=t.x;if(i>e){const n=(0,a.XZ)(i,e);t.x+=n*(-2*e)}else if(i<n){const e=(0,a.XZ)(i,n);t.x+=e*(-2*n)}}return t}function f(t,e){const[n,i]=e.valid,o=2*i;let s,r=0;return t>i?(s=Math.ceil(Math.abs(t-i)/o),t-=s*o,r=s):t<n&&(s=Math.ceil(Math.abs(t-n)/o),t+=s*o,r=-s),{x:t,frameId:r}}function _(t,e){const{xmin:n,ymin:i,xmax:o,ymax:s}=e;return x(t,n,i)&&x(t,n,s)&&x(t,o,s)&&x(t,o,i)}function x(t,e,n){return e>=t.xmin&&e<=t.xmax&&n>=t.ymin&&n<=t.ymax}function y(t,e){let n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];const i=!(0,l.l9)(t);if(i&&(0,r.Zy)(t),n)return(new P).cut(t,e);const o=i?t.rings:t.paths,s=i?4:2,a=o.length,h=-2*e;for(let r=0;r<a;r++){const t=o[r];if(t&&t.length>=s){const e=[];for(const n of t)e.push([n[0]+h,n[1]]);o.push(e)}}return i?t.rings=o:t.paths=o,t}class g{constructor(t,e){this.extent=t,this.frameIds=e}}const v=(0,o.Ue)();class P{constructor(){this._linesIn=[],this._linesOut=[]}cut(t,e){let n;if(this._xCut=e,t.rings)this._closed=!0,n=t.rings,this._minPts=4;else{if(!t.paths)return null;this._closed=!1,n=t.paths,this._minPts=2}for(const o of n){if(!o||o.length<this._minPts)continue;let t=!0;for(const e of o)t?(this.moveTo(e),t=!1):this.lineTo(e);this._closed&&this.close()}this._pushLineIn(),this._pushLineOut(),n=[];for(const o of this._linesIn)o&&o.length>=this._minPts&&n.push(o);const i=-2*this._xCut;for(const o of this._linesOut)if(o&&o.length>=this._minPts){for(const t of o)t[0]+=i;n.push(o)}return this._closed?t.rings=n:t.paths=n,t}moveTo(t){this._pushLineIn(),this._pushLineOut(),this._prevSide=this._side(t[0]),this._moveTo(t[0],t[1],this._prevSide),this._prevPt=t,this._firstPt=t}lineTo(t){const e=this._side(t[0]);if(e*this._prevSide==-1){const n=this._intersect(this._prevPt,t);this._lineTo(this._xCut,n,0),this._prevSide=0,this._lineTo(t[0],t[1],e)}else this._lineTo(t[0],t[1],e);this._prevSide=e,this._prevPt=t}close(){const t=this._firstPt,e=this._prevPt;t[0]===e[0]&&t[1]===e[1]||this.lineTo(t),this._checkClosingPt(this._lineIn),this._checkClosingPt(this._lineOut)}_moveTo(t,e,n){this._closed?(this._lineIn.push([n<=0?t:this._xCut,e]),this._lineOut.push([n>=0?t:this._xCut,e])):(n<=0&&this._lineIn.push([t,e]),n>=0&&this._lineOut.push([t,e]))}_lineTo(t,e,n){this._closed?(this._addPolyVertex(this._lineIn,n<=0?t:this._xCut,e),this._addPolyVertex(this._lineOut,n>=0?t:this._xCut,e)):n<0?(0===this._prevSide&&this._pushLineOut(),this._lineIn.push([t,e])):n>0?(0===this._prevSide&&this._pushLineIn(),this._lineOut.push([t,e])):this._prevSide<0?(this._lineIn.push([t,e]),this._lineOut.push([t,e])):this._prevSide>0&&(this._lineOut.push([t,e]),this._lineIn.push([t,e]))}_addPolyVertex(t,e,n){const i=t.length;i>1&&t[i-1][0]===e&&t[i-2][0]===e?t[i-1][1]=n:t.push([e,n])}_checkClosingPt(t){const e=t.length;e>3&&t[0][0]===this._xCut&&t[e-2][0]===this._xCut&&t[1][0]===this._xCut&&(t[0][1]=t[e-2][1],t.pop())}_side(t){return t<this._xCut?-1:t>this._xCut?1:0}_intersect(t,e){const n=(this._xCut-t[0])/(e[0]-t[0]);return t[1]+n*(e[1]-t[1])}_pushLineIn(){this._lineIn&&this._lineIn.length>=this._minPts&&this._linesIn.push(this._lineIn),this._lineIn=[]}_pushLineOut(){this._lineOut&&this._lineOut.length>=this._minPts&&this._linesOut.push(this._lineOut),this._lineOut=[]}}},88839:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Wt});var i=n(27366),o=n(80987),s=n(10064),r=n(32718),l=n(97642),a=n(49861),h=n(89125),c=(n(63780),n(93169),n(38511)),u=n(69912),d=n(31201),p=n(30651),m=n(6693),f=n(6061),_=n(56811),x=n(76200),y=n(51e3),g=n(35995),v=n(71907),P=(n(25243),n(79056)),b=n(46784),w=n(54472),M=n(7138),R=n(67593),C=n(17842),I=n(22753),B=n(11873),Z=n(88396),O=n(6394),S=n(585),j=n(80885),L=n(79803),X=n(78952),Y=n(11582);let E=class extends Y.j{projectOrWarn(t,e){if(null==t)return t;const{geometry:n,pending:i}=(0,L.projectOrLoad)(t,e);return i?null:i||n?n:(r.Z.getLogger(this).warn("geometry could not be projected to the spatial reference",{georeference:this,geometry:t,sourceSpatialReference:t.spatialReference,targetSpatialReference:e}),null)}};E=(0,i._)([(0,u.j)("esri.layers.support.GeoreferenceBase")],E);const H=E,T=(0,B.a)(),W=(0,O.a)();let z=class extends M.Z{constructor(){super(...arguments),this.sourcePoint=null,this.mapPoint=null}};(0,i._)([(0,a.Cb)()],z.prototype,"sourcePoint",void 0),(0,i._)([(0,a.Cb)({type:S.Z})],z.prototype,"mapPoint",void 0),z=(0,i._)([(0,u.j)("esri.layers.support.ControlPoint")],z);let A=class extends((0,b.eC)(H)){constructor(t){super(t),this.controlPoints=null,this.height=0,this.type="control-points",this.width=0}readControlPoints(t,e){const n=X.Z.fromJSON(e.spatialReference),i=(0,B.f)(...e.coefficients,1);return t.map((t=>((0,Z.s)(W,t.x,t.y),(0,R.H)(W,W,i),{sourcePoint:t,mapPoint:new S.Z({x:W[0],y:W[1],spatialReference:n})})))}writeControlPoints(t,e,n,i){if(null!=this.transform)null!=t&&N(t[0])&&(e.controlPoints=t.map((t=>{const e=t.sourcePoint;return{x:e.x,y:e.y}})),e.spatialReference=t[0].mapPoint.spatialReference.toJSON(),e.coefficients=this.transform.slice(0,8));else{const t=new s.Z("web-document-write:invalid-georeference","Invalid 'controlPoints', 'width', 'height' configuration.",{layer:null===i||void 0===i?void 0:i.layer,georeference:this});null!==i&&void 0!==i&&i.messages?i.messages.push(t):r.Z.getLogger(this).error(t.name,t.message)}}get coords(){if(null==this.controlPoints)return null;const t=this._updateTransform(T);if(null==t||!N(this.controlPoints[0]))return null;const e=this.controlPoints[0].mapPoint.spatialReference;return function(t,e,n,i){const o=(0,O.f)(0,n),s=(0,O.f)(0,0),r=(0,O.f)(e,0),l=(0,O.f)(e,n);return(0,R.H)(o,o,t),(0,R.H)(s,s,t),(0,R.H)(r,r,t),(0,R.H)(l,l,t),new j.Z({rings:[[o,s,r,l,o]],spatialReference:i})}(t,this.width,this.height,e)}set coords(t){if(null==this.controlPoints||!N(this.controlPoints[0]))return;const e=this.controlPoints[0].mapPoint.spatialReference;if(null==(t=this.projectOrWarn(t,e)))return;const{width:n,height:i}=this,{rings:[[o,s,r,l]]}=t,a={sourcePoint:(0,C.vW)(0,i),mapPoint:new S.Z({x:o[0],y:o[1],spatialReference:e})},h={sourcePoint:(0,C.vW)(0,0),mapPoint:new S.Z({x:s[0],y:s[1],spatialReference:e})},c={sourcePoint:(0,C.vW)(n,0),mapPoint:new S.Z({x:r[0],y:r[1],spatialReference:e})},u={sourcePoint:(0,C.vW)(n,i),mapPoint:new S.Z({x:l[0],y:l[1],spatialReference:e})};N(a)&&N(h)&&N(c)&&N(u)&&($(T,a,h,c,u),this.controlPoints=this.controlPoints.map((t=>{let{sourcePoint:n}=t;return(0,Z.s)(W,n.x,n.y),(0,R.H)(W,W,T),{sourcePoint:n,mapPoint:new S.Z({x:W[0],y:W[1],spatialReference:e})}})))}get inverseTransform(){return null==this.transform?null:(0,I.d)((0,B.a)(),this.transform)}get transform(){return this._updateTransform()}toMap(t){if(null==t||null==this.transform||null==this.controlPoints||!N(this.controlPoints[0]))return null;(0,Z.s)(W,t.x,t.y);const e=this.controlPoints[0].mapPoint.spatialReference;return(0,R.H)(W,W,this.transform),new S.Z({x:W[0],y:W[1],spatialReference:e})}toSource(t){if(null==t||null==this.inverseTransform||null==this.controlPoints||!N(this.controlPoints[0]))return null;const e=this.controlPoints[0].mapPoint.spatialReference;return t=t.normalize(),null==(t=(0,L.projectOrLoad)(t,e).geometry)?null:((0,Z.s)(W,t.x,t.y),(0,R.H)(W,W,this.inverseTransform),(0,C.vW)(W[0],W[1]))}toSourceNormalized(t){const e=this.toSource(t);return null!=e&&(e.x/=this.width,e.y/=this.height),e}_updateTransform(t){const{controlPoints:e,width:n,height:i}=this;if(!(null!=e&&n>0&&i>0))return null;const[o,s,r,l]=e;if(!N(o))return null;const a=o.mapPoint.spatialReference,h=this._projectControlPoint(s,a),c=this._projectControlPoint(r,a),u=this._projectControlPoint(l,a);if(!h.valid||!c.valid||!u.valid)return null;if(!N(h.controlPoint))return null;null==t&&(t=(0,B.a)());let d=null;return d=N(c.controlPoint)&&N(u.controlPoint)?$(t,o,h.controlPoint,c.controlPoint,u.controlPoint):N(c.controlPoint)?function(t,e,n,i){return Q(V,J,e),Q(U,q,n),Q(k,G,i),(0,Z.l)(F,V,U,.5),(0,Z.r)(F,k,F,Math.PI),(0,Z.l)(D,J,q,.5),(0,Z.r)(D,G,D,Math.PI),it(t,V,U,k,F,J,q,G,D)}(t,o,h.controlPoint,c.controlPoint):function(t,e,n){return Q(V,J,e),Q(U,q,n),(0,Z.r)(k,U,V,K),(0,Z.r)(F,V,U,K),(0,Z.r)(G,q,J,-K),(0,Z.r)(D,J,q,-K),it(t,V,U,k,F,J,q,G,D)}(t,o,h.controlPoint),d.every((t=>0===t))?null:d}_projectControlPoint(t,e){if(!N(t))return{valid:!0,controlPoint:t};const{sourcePoint:n,mapPoint:i}=t,{geometry:o,pending:s}=(0,L.projectOrLoad)(i,e);return s?{valid:!1,controlPoint:null}:s||o?{valid:!0,controlPoint:{sourcePoint:n,mapPoint:o}}:(r.Z.getLogger(this).warn("map point could not be projected to the spatial reference",{georeference:this,controlPoint:t,sourceSpatialReference:i.spatialReference,targetSpatialReference:e}),{valid:!1,controlPoint:null})}};function N(t){return null!=(null===t||void 0===t?void 0:t.sourcePoint)&&null!=t.mapPoint}(0,i._)([(0,a.Cb)({type:[z],json:{write:{allowNull:!1,isRequired:!0}}})],A.prototype,"controlPoints",void 0),(0,i._)([(0,c.r)("controlPoints")],A.prototype,"readControlPoints",null),(0,i._)([(0,d.c)("controlPoints")],A.prototype,"writeControlPoints",null),(0,i._)([(0,a.Cb)()],A.prototype,"coords",null),(0,i._)([(0,a.Cb)({json:{write:!0}})],A.prototype,"height",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],A.prototype,"inverseTransform",null),(0,i._)([(0,a.Cb)({readOnly:!0})],A.prototype,"transform",null),(0,i._)([(0,a.Cb)({json:{write:!0}})],A.prototype,"width",void 0),A=(0,i._)([(0,u.j)("esri.layers.support.ControlPointsGeoreference")],A);const V=(0,O.a)(),U=(0,O.a)(),k=(0,O.a)(),F=(0,O.a)(),J=(0,O.a)(),q=(0,O.a)(),G=(0,O.a)(),D=(0,O.a)(),K=Math.PI/2;function Q(t,e,n){(0,Z.s)(t,n.sourcePoint.x,n.sourcePoint.y),(0,Z.s)(e,n.mapPoint.x,n.mapPoint.y)}function $(t,e,n,i,o){return Q(V,J,e),Q(U,q,n),Q(k,G,i),Q(F,D,o),it(t,V,U,k,F,J,q,G,D)}const tt=new Array(8).fill(0),et=new Array(8).fill(0);function nt(t,e,n,i,o){return t[0]=e[0],t[1]=e[1],t[2]=n[0],t[3]=n[1],t[4]=i[0],t[5]=i[1],t[6]=o[0],t[7]=o[1],t}function it(t,e,n,i,o,s,r,l,a){return(0,R.E)(t,nt(tt,e,n,i,o),nt(et,s,r,l,a))}const ot=A,st=(0,O.a)();let rt=class extends H{constructor(t){super(t),this.bottomLeft=null,this.bottomRight=null,this.topLeft=null,this.topRight=null,this.type="corners"}get coords(){let{topLeft:t,topRight:e,bottomLeft:n,bottomRight:i}=this;if(null==t||null==e||null==n||null==i)return null;const o=t.spatialReference;return e=this.projectOrWarn(e,o),n=this.projectOrWarn(n,o),i=this.projectOrWarn(i,o),null==e||null==n||null==i?null:new j.Z({rings:[[[n.x,n.y],[t.x,t.y],[e.x,e.y],[i.x,i.y],[n.x,n.y]]],spatialReference:o})}set coords(t){const{topLeft:e}=this;if(null==e)return;const n=e.spatialReference;if(null==(t=this.projectOrWarn(t,n)))return;const{rings:[[i,o,s,r]]}=t;this.bottomLeft=new S.Z({x:i[0],y:i[1],spatialReference:n}),this.topLeft=new S.Z({x:o[0],y:o[1],spatialReference:n}),this.topRight=new S.Z({x:s[0],y:s[1],spatialReference:n}),this.bottomRight=new S.Z({x:r[0],y:r[1],spatialReference:n})}toSourceNormalized(t){const{topLeft:e,topRight:n,bottomRight:i,bottomLeft:o}=this;if(null==t||null==e||null==n||null==i||null==o)return null;const s=e.spatialReference;t=t.normalize();const r=(0,L.projectOrLoad)(t,s).geometry;if(null==r)return null;(0,Z.s)(st,r.x,r.y);const l=(0,R.E)((0,B.a)(),[e.x,e.y,o.x,o.y,n.x,n.y,i.x,i.y],[0,0,0,1,1,0,1,1]);return(0,R.H)(st,st,l),(0,C.vW)(st[0],st[1])}};(0,i._)([(0,a.Cb)()],rt.prototype,"coords",null),(0,i._)([(0,a.Cb)({type:S.Z})],rt.prototype,"bottomLeft",void 0),(0,i._)([(0,a.Cb)({type:S.Z})],rt.prototype,"bottomRight",void 0),(0,i._)([(0,a.Cb)({type:S.Z})],rt.prototype,"topLeft",void 0),(0,i._)([(0,a.Cb)({type:S.Z})],rt.prototype,"topRight",void 0),rt=(0,i._)([(0,u.j)("esri.layers.support.CornersGeoreference")],rt);const lt=rt;var at=n(16889),ht=n(26277),ct=n(53866);let ut=class extends H{constructor(t){super(t),this.extent=null,this.rotation=0,this.type="extent-and-rotation"}get coords(){if(null==this.extent)return null;const{xmin:t,ymin:e,xmax:n,ymax:i,spatialReference:o}=this.extent;let s;if(this.rotation){const{x:o,y:r}=this.extent.center,l=dt(o,r,this.rotation);s=[l(t,e),l(t,i),l(n,i),l(n,e)],s.push(s[0])}else s=[[t,e],[t,i],[n,i],[n,e],[t,e]];return new j.Z({rings:[s],spatialReference:o})}set coords(t){var e;if(null==t||null==this.extent)return;const n=this.extent.spatialReference;if(null==(null===(e=t=this.projectOrWarn(t,n))||void 0===e?void 0:e.extent))return;const{rings:[[i,o,s]],extent:{center:{x:r,y:l}}}=t,a=(0,at.BV)(Math.PI/2-Math.atan2(o[1]-i[1],o[0]-i[0])),h=dt(r,l,-a),[c,u]=h(i[0],i[1]),[d,p]=h(s[0],s[1]);this.extent=new ct.Z({xmin:c,ymin:u,xmax:d,ymax:p,spatialReference:n}),this.rotation=a}toSourceNormalized(t){const{extent:e,rotation:n}=this;if(null==t||null==e)return null;const{xmin:i,ymin:o,xmax:s,ymax:r,center:l,spatialReference:a}=e;t=t.normalize();const h=(0,L.projectOrLoad)(t,a).geometry;if(null==h)return null;let c=h.x,u=h.y;return n&&([c,u]=dt(l.x,l.y,-n)(c,u)),(0,C.vW)((0,at.bA)(c,i,s,0,1),(0,at.bA)(u,r,o,0,1))}};function dt(t,e,n){const i=(0,ht.t)(n),o=Math.cos(i),s=Math.sin(i);return(n,i)=>[o*(n-t)+s*(i-e)+t,o*(i-e)-s*(n-t)+e]}(0,i._)([(0,a.Cb)()],ut.prototype,"coords",null),(0,i._)([(0,a.Cb)({type:ct.Z})],ut.prototype,"extent",void 0),(0,i._)([(0,a.Cb)({type:Number})],ut.prototype,"rotation",void 0),ut=(0,i._)([(0,u.j)("esri.layers.support.ExtentAndRotationGeoreference")],ut);const pt={key:"type",base:H,typeMap:{"control-points":ot,corners:lt,"extent-and-rotation":ut}};let mt=class extends((0,P.iv)((0,b.eC)(w.Z))){constructor(t){super(t),this.georeference=null,this.opacity=1}readGeoreference(t){return ot.fromJSON(t)}get contentWidth(){return 0}get contentHeight(){return 0}toSource(t){const{georeference:e,contentWidth:n,contentHeight:i}=this;if(null==t||null==e||0===n||0===i)return null;const o=e.toSourceNormalized(t);return null==o?null:(o.x*=n,o.y*=i,o)}};(0,i._)([(0,a.Cb)({types:pt,json:{write:!0}})],mt.prototype,"georeference",void 0),(0,i._)([(0,c.r)("georeference")],mt.prototype,"readGeoreference",null),(0,i._)([(0,a.Cb)()],mt.prototype,"opacity",void 0),mt=(0,i._)([(0,u.j)("esri.layers.support.MediaElementBase")],mt);const ft=mt;var _t=n(22892),xt=n(53283);let yt=class extends ft{constructor(t){super(t),this.animationOptions=null,this.content=null,this.image=null,this.type="image",this.image=null}load(){const t=this.image;if("string"==typeof t){const e=(0,y.n$)(t).then((t=>{this._set("content",t)}));this.addResolvingPromise(e)}else if(t instanceof HTMLImageElement){const e=t.decode().then((()=>{this._set("content",t)}));this.addResolvingPromise(e)}else t?this._set("content",t):this.addResolvingPromise(Promise.reject(new s.Z("image-element:invalid-image-type","Invalid image type",{image:t})));return Promise.resolve(this)}get contentWidth(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalWidth:this.content.width}get contentHeight(){return null==this.content?0:this.content instanceof HTMLImageElement?this.content.naturalHeight:this.content.height}readImage(t,e,n){return(0,xt.f)(e.url,n)}writeImage(t,e,n,i){if(null==t)return;const o=null===i||void 0===i?void 0:i.portalItem,s=null===i||void 0===i?void 0:i.resources;if(!o||!s)return void("string"==typeof t&&(e[n]=(0,xt.t)(t,i)));const r="string"!=typeof t||(0,g.HK)(t)||(0,g.jc)(t)?null:t;if(r){if(null==(0,xt.i)(r))return void(e[n]=r);const t=(0,xt.t)(r,{...i,verifyItemRelativeUrls:null!==i&&void 0!==i&&i.verifyItemRelativeUrls?{writtenUrls:i.verifyItemRelativeUrls.writtenUrls,rootPath:void 0}:void 0},xt.M.NO);if(o&&t&&!(0,g.YP)(t))return s.toKeep.push({resource:o.resourceFromPath(t),compress:!1}),void(e[n]=t)}e[n]="<pending>",s.pendingOperations.push(async function(t){if("string"==typeof t)return(0,g.HK)(t)?(0,g.fw)(t):(await(0,x.Z)(t,{responseType:"blob"})).data;return new Promise((e=>function(t){if(t instanceof HTMLCanvasElement)return t;const e=t instanceof HTMLImageElement?t.naturalWidth:t.width,n=t instanceof HTMLImageElement?t.naturalHeight:t.height,i=document.createElement("canvas"),o=i.getContext("2d");return i.width=e,i.height=n,t instanceof HTMLImageElement?o.drawImage(t,0,0,t.width,t.height):t instanceof ImageData&&o.putImageData(t,0,0),i}(t).toBlob(e)))}(t).then((t=>{const i=function(t,e){const n=(0,v.DO)(),i="".concat((0,g.v_)("media",n),".").concat((0,_t.B)({type:"blob",blob:t}));return e.resourceFromPath(i)}(t,o);e[n]=i.itemRelativeUrl,s.toAdd.push({resource:i,content:{type:"blob",blob:t},compress:!1,finish:t=>{this.image=t.url}})})))}};(0,i._)([(0,a.Cb)()],yt.prototype,"animationOptions",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],yt.prototype,"content",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],yt.prototype,"contentWidth",null),(0,i._)([(0,a.Cb)({readOnly:!0})],yt.prototype,"contentHeight",null),(0,i._)([(0,a.Cb)({json:{name:"url",type:String}})],yt.prototype,"image",void 0),(0,i._)([(0,c.r)("image",["url"])],yt.prototype,"readImage",null),(0,i._)([(0,d.c)("image")],yt.prototype,"writeImage",null),(0,i._)([(0,a.Cb)({readOnly:!0,json:{name:"mediaType"}})],yt.prototype,"type",void 0),yt=(0,i._)([(0,u.j)("esri.layers.support.ImageElement")],yt);const gt=yt;n(59486);var vt=n(60354),Pt=n(91505),bt=n(67426),wt=n(66978),Mt=n(94172),Rt=n(65156),Ct=n(66504),It=n(92975),Bt=n(66020),Zt=n(59568),Ot=n(98928);let St=class extends ft{constructor(t){super(t),this.autoplay=!0,this.content=null,this.type="video"}load(){const t=this.video;if("string"==typeof t){const e=document.createElement("video");e.src=t,e.crossOrigin="anonymous",e.autoplay=!0,e.muted=!0,e.loop=!0,this.addResolvingPromise(this._loadVideo(e).then((()=>{this._set("content",e)})))}else t instanceof HTMLVideoElement?this.addResolvingPromise(this._loadVideo(t).then((()=>{this._set("content",t)}))):this.addResolvingPromise(Promise.reject(new s.Z("video-element:invalid-video-type","Invalid video type",{video:t})));return Promise.resolve(this)}get contentWidth(){var t,e;return null!==(t=null===(e=this.content)||void 0===e?void 0:e.videoWidth)&&void 0!==t?t:0}get contentHeight(){var t,e;return null!==(t=null===(e=this.content)||void 0===e?void 0:e.videoHeight)&&void 0!==t?t:0}set video(t){"not-loaded"===this.loadStatus?this._set("video",t):r.Z.getLogger(this).error("#video","video cannot be changed after the element is loaded.")}_loadVideo(t){return new Promise(((e,n)=>{var i;const o=(0,Ot.IH)(t,"canplay",(()=>{this.removeHandles("canplay"),this.autoplay?t.play().then(e,n):e()}));this.addHandles(o,"canplay"),"anonymous"!==t.crossOrigin&&(t.crossOrigin="anonymous",(null===(i=t.src)||void 0===i?void 0:i.includes("blob:"))||(t.src=t.src))}))}};(0,i._)([(0,a.Cb)()],St.prototype,"autoplay",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],St.prototype,"content",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],St.prototype,"contentWidth",null),(0,i._)([(0,a.Cb)({readOnly:!0})],St.prototype,"contentHeight",null),(0,i._)([(0,a.Cb)()],St.prototype,"video",null),St=(0,i._)([(0,u.j)("esri.layers.support.VideoElement")],St);const jt=St,Lt={key:"type",defaultKeyValue:"image",base:ft,typeMap:{image:gt,video:jt}},Xt=o.Z.ofType(Lt);let Yt=class extends(w.Z.LoadableMixin((0,bt.v)(Pt.Z.EventedAccessor))){constructor(t){super(t),this._index=new Bt.H,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=t=>{for(const n of t.removed){const t=this._elementViewsMap.get(n);this._elementViewsMap.delete(n),this._index.delete(t),this.removeHandles(t),t.destroy(),this.notifyChange("fullExtent")}const{spatialReference:e}=this;for(const n of t.added){if(this._elementViewsMap.get(n))continue;const t=new Zt.L({spatialReference:e,element:n});this._elementViewsMap.set(n,t);const i=(0,Mt.YP)((()=>t.coords),(()=>this._updateIndexForElement(t,!1)));this._updateIndexForElement(t,!0),this.addHandles(i,t)}this._elementsIndexes.clear(),this.elements.forEach(((t,e)=>this._elementsIndexes.set(t,e))),this.emit("refresh")},this.elements=new Xt}async load(t){if((0,wt.k_)(t),!this.spatialReference){const t=this.elements.find((t=>{var e;return null!=(null===(e=t.georeference)||void 0===e?void 0:e.coords)}));this._set("spatialReference",t?t.georeference.coords.spatialReference:X.Z.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(t){this._set("elements",(0,vt.Z)(t,this._get("elements"),Xt))}get fullExtent(){if("not-loaded"===this.loadStatus)return null;const t=this._index.fullBounds;return null==t?null:new ct.Z({xmin:t[0],ymin:t[1],xmax:t[2],ymax:t[3],spatialReference:this.spatialReference})}set spatialReference(t){"not-loaded"===this.loadStatus?this._set("spatialReference",t):r.Z.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(t,e){await this.load(),await(0,L.initializeProjection)(t.spatialReference,this.spatialReference,null,e);const n=(0,It.fS)(t.spatialReference,this.spatialReference)?t:(0,L.project)(t,this.spatialReference);if(!n)return[];const i=n.normalize(),o=[];for(const s of i)this._index.forEachInBounds((0,Rt.oJ)(s),(t=>{let{normalizedCoords:e,element:n}=t;null!=e&&(0,Ct.Nl)(s,e)&&o.push(n)}));return o.sort(((t,e)=>this._elementsIndexes.get(t)-this._elementsIndexes.get(e))),o}_updateIndexForElement(t,e){const n=t.normalizedBounds,i=this._index.has(t),o=null!=n;this._index.delete(t),o&&this._index.set(t,n),this.notifyChange("fullExtent"),e||(i!==o?this.emit("refresh"):this.emit("change",{element:t.element}))}};(0,i._)([(0,a.Cb)()],Yt.prototype,"elements",null),(0,i._)([(0,a.Cb)({readOnly:!0})],Yt.prototype,"fullExtent",null),(0,i._)([(0,a.Cb)()],Yt.prototype,"spatialReference",null),Yt=(0,i._)([(0,u.j)("esri.layers.support.LocalMediaElementSource")],Yt);const Et=Yt;function Ht(t){return"object"==typeof t&&null!=t&&"type"in t}let Tt=class extends((0,m.h)((0,_.M)((0,f.q)((0,l.R)(p.Z))))){constructor(t){super(t),this.effectiveSource=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this.source=new Et}load(t){const e=this.source;if(!e)return this.addResolvingPromise(Promise.reject(new s.Z("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer."))),Promise.resolve(this);const n=Ht(e)?new Et({elements:new o.Z([e])}):e;this._set("effectiveSource",n),this.spatialReference&&(n.spatialReference=this.spatialReference);const i=n.load(t).then((()=>{this.spatialReference=n.spatialReference}));return this.addResolvingPromise(i),Promise.resolve(this)}destroy(){var t,e;null!==(t=this.effectiveSource)&&void 0!==t&&t.destroy(),null===(e=this.source)||void 0===e||e.destroy()}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(t){"not-loaded"===this.loadStatus?this._set("source",t):r.Z.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(t){return t?Array.isArray(t)?new Et({elements:new o.Z(t)}):t instanceof o.Z?new Et({elements:t}):t:null}readSource(t,e,n){const i="image"===e.mediaType?new gt:"video"===e.mediaType?new jt:null;return null!==i&&void 0!==i&&i.read(e,n),i}writeSource(t,e,n,i){var o;t&&Ht(t)&&"image"===t.type?t.write(e,i):(null===i||void 0===i?void 0:i.messages)&&(null===i||void 0===i||null===(o=i.messages)||void 0===o||o.push(new s.Z("media-layer:unsupported-source","source must be an 'ImageElement'")))}};(0,i._)([(0,a.Cb)({readOnly:!0})],Tt.prototype,"effectiveSource",void 0),(0,i._)([(0,a.Cb)({type:String})],Tt.prototype,"copyright",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],Tt.prototype,"fullExtent",null),(0,i._)([(0,a.Cb)({type:["MediaLayer"]})],Tt.prototype,"operationalLayerType",void 0),(0,i._)([(0,a.Cb)({type:["show","hide"]})],Tt.prototype,"listMode",void 0),(0,i._)([(0,a.Cb)({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1}}})],Tt.prototype,"source",null),(0,i._)([(0,h.p)("source")],Tt.prototype,"castSource",null),(0,i._)([(0,c.r)("source",["url"])],Tt.prototype,"readSource",null),(0,i._)([(0,d.c)("source")],Tt.prototype,"writeSource",null),(0,i._)([(0,a.Cb)()],Tt.prototype,"spatialReference",void 0),(0,i._)([(0,a.Cb)({readOnly:!0})],Tt.prototype,"type",void 0),Tt=(0,i._)([(0,u.j)("esri.layers.MediaLayer")],Tt);const Wt=Tt},66020:(t,e,n)=>{n.d(e,{H:()=>a});var i=n(93169),o=n(13491),s=n(65156);const r={minX:0,minY:0,maxX:0,maxY:0};function l(t,e,n){(function(t){r.minX=t[0],r.minY=t[1],r.maxX=t[2],r.maxY=t[3]})(e),t.search(r,n)}class a{constructor(){this._indexInvalid=!1,this._boundsToLoad=[],this._boundsById=new Map,this._idByBounds=new Map,this._index=new o.Q(9,(0,i.Z)("esri-csp-restrictions")?t=>({minX:t[0],minY:t[1],maxX:t[2],maxY:t[3]}):["[0]","[1]","[2]","[3]"]),this._loadIndex=()=>{if(this._indexInvalid){const t=new Array(this._idByBounds.size);let e=0;this._idByBounds.forEach(((n,i)=>{t[e++]=i})),this._indexInvalid=!1,this._index.clear(),this._index.load(t)}else this._boundsToLoad.length&&(this._index.load(Array.from(new Set(this._boundsToLoad.filter((t=>this._idByBounds.has(t)))))),this._boundsToLoad.length=0)}}get fullBounds(){if(!this._boundsById.size)return null;const t=(0,s.cS)();for(const e of this._boundsById.values())e&&(t[0]=Math.min(e[0],t[0]),t[1]=Math.min(e[1],t[1]),t[2]=Math.max(e[2],t[2]),t[3]=Math.max(e[3],t[3]));return t}get valid(){return!this._indexInvalid}clear(){this._indexInvalid=!1,this._boundsToLoad.length=0,this._boundsById.clear(),this._idByBounds.clear(),this._index.clear()}delete(t){const e=this._boundsById.get(t);this._boundsById.delete(t),e&&(this._idByBounds.delete(e),this._indexInvalid||this._index.remove(e))}forEachInBounds(t,e){this._loadIndex(),l(this._index,t,(t=>e(this._idByBounds.get(t))))}get(t){return this._boundsById.get(t)}has(t){return this._boundsById.has(t)}invalidateIndex(){this._indexInvalid||(this._indexInvalid=!0,this._boundsToLoad.length=0)}set(t,e){if(!this._indexInvalid){const e=this._boundsById.get(t);e&&(this._index.remove(e),this._idByBounds.delete(e))}this._boundsById.set(t,e),e&&(this._idByBounds.set(e,t),this._indexInvalid||(this._boundsToLoad.push(e),this._boundsToLoad.length>5e4&&this._loadIndex()))}}},59568:(t,e,n)=>{n.d(e,{L:()=>u});var i=n(27366),o=n(7138),s=n(49861),r=(n(25243),n(63780),n(93169),n(69912)),l=n(80885),a=n(79803),h=n(65156),c=n(47991);let u=class extends o.Z{constructor(t){super(t)}get bounds(){const t=this.coords;return null==(null===t||void 0===t?void 0:t.extent)?null:(0,h.oJ)(t.extent)}get coords(){var t;const e=null===(t=this.element.georeference)||void 0===t?void 0:t.coords;return(0,a.projectOrLoad)(e,this.spatialReference).geometry}get normalizedCoords(){return l.Z.fromJSON((0,c.Ui)(this.coords))}get normalizedBounds(){const t=null!=this.normalizedCoords?this.normalizedCoords.extent:null;return null!=t?(0,h.oJ)(t):null}};(0,i._)([(0,s.Cb)()],u.prototype,"spatialReference",void 0),(0,i._)([(0,s.Cb)()],u.prototype,"element",void 0),(0,i._)([(0,s.Cb)()],u.prototype,"bounds",null),(0,i._)([(0,s.Cb)()],u.prototype,"coords",null),(0,i._)([(0,s.Cb)()],u.prototype,"normalizedCoords",null),(0,i._)([(0,s.Cb)()],u.prototype,"normalizedBounds",null),u=(0,i._)([(0,r.j)("esri.layers.support.MediaElementView")],u)},22892:(t,e,n)=>{n.d(e,{B:()=>o});var i=n(35995);function o(t){return s[function(t){return"json"===t.type?"application/json":"blob"===t.type?t.blob.type:function(t){const e=(0,i.Ml)(t);return a[e]||r}(t.url)}(t)]||l}const s={},r="text/plain",l=s[r],a={png:"image/png",jpeg:"image/jpeg",jpg:"image/jpg",bmp:"image/bmp",gif:"image/gif",json:"application/json",txt:"text/plain",xml:"application/xml",svg:"image/svg+xml",zip:"application/zip",pbf:"application/vnd.mapbox-vector-tile",gz:"application/gzip","bin.gz":"application/octet-stream"};for(const h in a)s[a[h]]=h}}]);
//# sourceMappingURL=8839.d978d528.chunk.js.map