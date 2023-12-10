/*! For license information please see 3874.d78fb576.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[3874],{63874:(e,t,i)=>{i.r(t),i.d(t,{CalciteSortableList:()=>g,defineCustomElement:()=>b});var s=i(51554),n=i(13160),a=i(72021),l=i(38338),r=i(92358);const d="container",o="container--horizontal",c="container--vertical",h=(0,s.GH)(class extends s.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteListOrderChange=(0,s.yM)(this,"calciteListOrderChange",6),this.items=[],this.mutationObserver=(0,a.c)("mutation",(()=>{this.setUpSorting()})),this.dragEnabled=!0,this.canPull=void 0,this.canPut=void 0,this.dragSelector=void 0,this.group=void 0,this.handleSelector="calcite-handle",this.layout="vertical",this.disabled=!1,this.loading=!1}connectedCallback(){(0,l.d)(this)||(this.setUpSorting(),this.beginObserving(),(0,n.c)(this))}disconnectedCallback(){(0,l.d)(this)||((0,n.d)(this),(0,l.a)(this),this.endObserving())}componentDidRender(){(0,n.u)(this)}calciteHandleNudgeNextHandler(e){this.handleNudgeEvent(e)}onDragStart(){this.endObserving()}onDragEnd(){this.beginObserving()}onDragSort(){this.items=Array.from(this.el.children),this.calciteListOrderChange.emit()}handleNudgeEvent(e){const{direction:t}=e.detail,i=e.composedPath().find((e=>e.matches(this.handleSelector))),s=this.items.find((t=>t.contains(i)||e.composedPath().includes(t))),n=this.items.length-1,a=this.items.indexOf(s);let l,d=!1;"up"===t?0===a?d=!0:l=a-1:a===n?l=0:a===n-1?d=!0:l=a+2,this.endObserving(),d?s.parentElement.appendChild(s):s.parentElement.insertBefore(s,this.items[l]),this.items=Array.from(this.el.children),this.beginObserving(),requestAnimationFrame((()=>(0,r.k)(i))),"activated"in i&&(i.activated=!0)}setUpSorting(){this.items=Array.from(this.el.children),(0,l.c)(this)}beginObserving(){var e;null===(e=this.mutationObserver)||void 0===e||e.observe(this.el,{childList:!0,subtree:!0})}endObserving(){var e;null===(e=this.mutationObserver)||void 0===e||e.disconnect()}render(){const{layout:e}=this,t="horizontal"===e||!1;return(0,s.h)("div",{class:{[d]:!0,[c]:!t,[o]:t}},(0,s.h)("slot",null))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{display:flex;flex:1 1 auto}.container--vertical{flex-direction:column}.container--horizontal{flex-direction:row}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-sortable-list",{canPull:[16],canPut:[16],dragSelector:[513,"drag-selector"],group:[513],handleSelector:[513,"handle-selector"],layout:[513],disabled:[516],loading:[516]},[[0,"calciteHandleNudge","calciteHandleNudgeNextHandler"]]]);function u(){if("undefined"===typeof customElements)return;["calcite-sortable-list"].forEach((e=>{if("calcite-sortable-list"===e)customElements.get(e)||customElements.define(e,h)}))}u();const g=h,b=u}}]);
//# sourceMappingURL=3874.d78fb576.chunk.js.map