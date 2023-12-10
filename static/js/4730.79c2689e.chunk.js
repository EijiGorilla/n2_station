/*! For license information please see 4730.79c2689e.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[4730],{94730:(e,t,i)=>{i.r(t),i.d(t,{CalciteTooltip:()=>m,defineCustomElement:()=>v});var o=i(51554),n=i(92358),s=i(65394),r=i(14387),l=i(27871),a=i(1843);const c="container",d="aria-describedby";function h(e){const{referenceElement:t}=e;return("string"===typeof t?(0,n.q)(e,{id:t}):t)||null}const p=new class{constructor(){this.registeredElements=new WeakMap,this.registeredShadowRootCounts=new WeakMap,this.hoverOpenTimeout=null,this.hoverCloseTimeout=null,this.hoveredTooltip=null,this.clickedTooltip=null,this.activeTooltip=null,this.registeredElementCount=0,this.queryTooltip=e=>{const{registeredElements:t}=this,i=e.find((e=>t.has(e)));return t.get(i)},this.keyDownHandler=e=>{if("Escape"===e.key&&!e.defaultPrevented){const{activeTooltip:t}=this;if(null!==t&&void 0!==t&&t.open){this.clearHoverTimeout(),this.closeActiveTooltip();const i=h(t);i instanceof Element&&i.contains(e.target)&&e.preventDefault()}}},this.pointerMoveHandler=e=>{const t=e.composedPath(),{activeTooltip:i}=this;if((null===i||void 0===i?void 0:i.open)&&t.includes(i))return void this.clearHoverTimeout();const o=this.queryTooltip(t);this.hoveredTooltip=o,this.isClosableClickedTooltip(o)||(this.clickedTooltip=null,o?this.openHoveredTooltip(o):i&&this.closeHoveredTooltip())},this.pointerDownHandler=e=>{if(!(0,n.j)(e))return;const t=this.queryTooltip(e.composedPath());this.clickedTooltip=t,null!==t&&void 0!==t&&t.closeOnClick&&(this.toggleTooltip(t,!1),this.clearHoverTimeout())},this.focusInHandler=e=>{this.queryFocusedTooltip(e,!0)},this.focusOutHandler=e=>{this.queryFocusedTooltip(e,!1)},this.openHoveredTooltip=e=>{this.hoverOpenTimeout=window.setTimeout((()=>{null!==this.hoverOpenTimeout&&(this.clearHoverCloseTimeout(),this.activeTooltip!==this.hoveredTooltip&&(this.closeActiveTooltip(),e===this.hoveredTooltip&&this.toggleTooltip(e,!0)))}),this.activeTooltip?0:300)},this.closeHoveredTooltip=()=>{this.hoverCloseTimeout=window.setTimeout((()=>{null!==this.hoverCloseTimeout&&this.closeActiveTooltip()}),500)}}registerElement(e,t){this.registeredElementCount++,this.registeredElements.set(e,t);const i=this.getReferenceElShadowRootNode(e);i&&this.registerShadowRoot(i),1===this.registeredElementCount&&this.addListeners()}unregisterElement(e){const t=this.getReferenceElShadowRootNode(e);t&&this.unregisterShadowRoot(t),this.registeredElements.delete(e)&&this.registeredElementCount--,0===this.registeredElementCount&&this.removeListeners()}addShadowListeners(e){e.addEventListener("focusin",this.focusInHandler,{capture:!0}),e.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeShadowListeners(e){e.removeEventListener("focusin",this.focusInHandler,{capture:!0}),e.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}addListeners(){document.addEventListener("keydown",this.keyDownHandler,{capture:!0}),document.addEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.addEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.addEventListener("focusin",this.focusInHandler,{capture:!0}),document.addEventListener("focusout",this.focusOutHandler,{capture:!0})}removeListeners(){document.removeEventListener("keydown",this.keyDownHandler,{capture:!0}),document.removeEventListener("pointermove",this.pointerMoveHandler,{capture:!0}),document.removeEventListener("pointerdown",this.pointerDownHandler,{capture:!0}),document.removeEventListener("focusin",this.focusInHandler,{capture:!0}),document.removeEventListener("focusout",this.focusOutHandler,{capture:!0})}clearHoverOpenTimeout(){window.clearTimeout(this.hoverOpenTimeout),this.hoverOpenTimeout=null}clearHoverCloseTimeout(){window.clearTimeout(this.hoverCloseTimeout),this.hoverCloseTimeout=null}clearHoverTimeout(){this.clearHoverOpenTimeout(),this.clearHoverCloseTimeout()}closeActiveTooltip(){const{activeTooltip:e}=this;null!==e&&void 0!==e&&e.open&&this.toggleTooltip(e,!1)}toggleFocusedTooltip(e,t){this.closeActiveTooltip(),t&&this.clearHoverTimeout(),this.toggleTooltip(e,t)}toggleTooltip(e,t){e.open=t,this.activeTooltip=t?e:null}queryFocusedTooltip(e,t){const i=this.queryTooltip(e.composedPath());i&&!this.isClosableClickedTooltip(i)&&this.toggleFocusedTooltip(i,t)}isClosableClickedTooltip(e){return(null===e||void 0===e?void 0:e.closeOnClick)&&e===this.clickedTooltip}registerShadowRoot(e){var t;const{registeredShadowRootCounts:i}=this,o=(null!==(t=i.get(e))&&void 0!==t?t:0)+1;1===o&&this.addShadowListeners(e),i.set(e,o)}unregisterShadowRoot(e){const{registeredShadowRootCounts:t}=this,i=t.get(e)-1;0===i&&this.removeShadowListeners(e),t.set(e,i)}getReferenceElShadowRootNode(e){return e instanceof Element?(0,n.n)(e):null}},u=(0,o.GH)(class extends o.mv{constructor(){var e;super(),e=this,this.__registerHost(),this.__attachShadow(),this.calciteTooltipBeforeClose=(0,o.yM)(this,"calciteTooltipBeforeClose",6),this.calciteTooltipClose=(0,o.yM)(this,"calciteTooltipClose",6),this.calciteTooltipBeforeOpen=(0,o.yM)(this,"calciteTooltipBeforeOpen",6),this.calciteTooltipOpen=(0,o.yM)(this,"calciteTooltipOpen",6),this.guid="calcite-tooltip-".concat((0,r.g)()),this.hasLoaded=!1,this.openTransitionProp="opacity",this.setTransitionEl=e=>{this.transitionEl=e},this.setUpReferenceElement=function(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];e.removeReferences(),e.effectiveReferenceElement=h(e.el),(0,s.c)(e,e.effectiveReferenceElement,e.el);const{el:i,referenceElement:o,effectiveReferenceElement:n}=e;t&&o&&!n&&console.warn("".concat(i.tagName,': reference-element id "').concat(o,'" was not found.'),{el:i}),e.addReferences()},this.getId=()=>this.el.id||this.guid,this.addReferences=()=>{const{effectiveReferenceElement:e}=this;if(!e)return;const t=this.getId();"setAttribute"in e&&e.setAttribute(d,t),p.registerElement(e,this.el)},this.removeReferences=()=>{const{effectiveReferenceElement:e}=this;e&&("removeAttribute"in e&&e.removeAttribute(d),p.unregisterElement(e))},this.closeOnClick=!1,this.label=void 0,this.offsetDistance=s.b,this.offsetSkidding=0,this.open=!1,this.overlayPositioning="absolute",this.placement="auto",this.referenceElement=void 0,this.effectiveReferenceElement=void 0,this.floatingLayout="vertical"}offsetDistanceOffsetHandler(){this.reposition(!0)}offsetSkiddingHandler(){this.reposition(!0)}openHandler(e){(0,l.o)(this),e&&this.reposition(!0)}overlayPositioningHandler(){this.reposition(!0)}placementHandler(){this.reposition(!0)}referenceElementHandler(){this.setUpReferenceElement()}connectedCallback(){this.setUpReferenceElement(this.hasLoaded),this.open&&(0,l.o)(this)}async componentWillLoad(){this.open&&(0,l.o)(this)}componentDidLoad(){this.referenceElement&&!this.effectiveReferenceElement&&this.setUpReferenceElement(),this.reposition(!0),this.hasLoaded=!0}disconnectedCallback(){this.removeReferences(),(0,s.a)(this,this.effectiveReferenceElement,this.el)}async reposition(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const{el:t,effectiveReferenceElement:i,placement:o,overlayPositioning:n,offsetDistance:r,offsetSkidding:l,arrowEl:a}=this;return(0,s.r)(this,{floatingEl:t,referenceEl:i,overlayPositioning:n,placement:o,offsetDistance:r,offsetSkidding:l,arrowEl:a,type:"tooltip"},e)}onBeforeOpen(){this.calciteTooltipBeforeOpen.emit()}onOpen(){this.calciteTooltipOpen.emit()}onBeforeClose(){this.calciteTooltipBeforeClose.emit()}onClose(){this.calciteTooltipClose.emit()}render(){const{effectiveReferenceElement:e,label:t,open:i,floatingLayout:r}=this,l=e&&i,d=!l;return(0,o.h)(o.AA,{"aria-hidden":(0,n.t)(d),"aria-label":t,"aria-live":"polite","calcite-hydrated-hidden":d,id:this.getId(),role:"tooltip"},(0,o.h)("div",{class:{[s.F.animation]:!0,[s.F.animationActive]:l},ref:this.setTransitionEl},(0,o.h)(a.F,{floatingLayout:r,ref:e=>this.arrowEl=e}),(0,o.h)("div",{class:c},(0,o.h)("slot",null))))}get el(){return this}static get watchers(){return{offsetDistance:["offsetDistanceOffsetHandler"],offsetSkidding:["offsetSkiddingHandler"],open:["openHandler"],overlayPositioning:["overlayPositioningHandler"],placement:["placementHandler"],referenceElement:["referenceElementHandler"]}}static get style(){return":host{--calcite-floating-ui-z-index:var(--calcite-tooltip-z-index, var(--calcite-app-z-index-tooltip));display:block;position:absolute;z-index:var(--calcite-floating-ui-z-index)}.calcite-floating-ui-anim{position:relative;transition:var(--calcite-floating-ui-transition);transition-property:transform, visibility, opacity;opacity:0;box-shadow:0 0 16px 0 rgba(0, 0, 0, 0.16);z-index:var(--calcite-app-z-index);border-radius:0.25rem}:host([data-placement^=bottom]) .calcite-floating-ui-anim{transform:translateY(-5px)}:host([data-placement^=top]) .calcite-floating-ui-anim{transform:translateY(5px)}:host([data-placement^=left]) .calcite-floating-ui-anim{transform:translateX(5px)}:host([data-placement^=right]) .calcite-floating-ui-anim{transform:translateX(-5px)}:host([data-placement]) .calcite-floating-ui-anim--active{opacity:1;transform:translate(0)}:host([calcite-hydrated-hidden]){visibility:hidden !important;pointer-events:none}.calcite-floating-ui-arrow{pointer-events:none;position:absolute;z-index:calc(var(--calcite-app-z-index) * -1);fill:var(--calcite-ui-foreground-1)}.calcite-floating-ui-arrow__stroke{stroke:var(--calcite-ui-border-3)}.container{position:relative;overflow:hidden;border-radius:0.25rem;padding-block:0.75rem;padding-inline:1rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1);max-inline-size:20rem;max-block-size:20rem;text-align:start}.calcite-floating-ui-anim{border-radius:0.25rem;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-3);background-color:var(--calcite-ui-foreground-1)}.arrow::before{outline:1px solid var(--calcite-ui-border-3)}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tooltip",{closeOnClick:[516,"close-on-click"],label:[1],offsetDistance:[514,"offset-distance"],offsetSkidding:[514,"offset-skidding"],open:[516],overlayPositioning:[513,"overlay-positioning"],placement:[513],referenceElement:[1,"reference-element"],effectiveReferenceElement:[32],floatingLayout:[32],reposition:[64]}]);function f(){if("undefined"===typeof customElements)return;["calcite-tooltip"].forEach((e=>{if("calcite-tooltip"===e)customElements.get(e)||customElements.define(e,u)}))}f();const m=u,v=f}}]);
//# sourceMappingURL=4730.79c2689e.chunk.js.map