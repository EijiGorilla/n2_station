/*! For license information please see 8266.12ad8aae.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[8266],{68266:(e,t,i)=>{i.r(t),i.d(t,{CalciteTab:()=>n,defineCustomElement:()=>s});var a=i(11685);const n=a.T,s=a.d},11685:(e,t,i)=>{i.d(t,{T:()=>o,d:()=>d});var a=i(51554),n=i(92358),s=i(14387);const l="container",c="content",o=(0,a.GH)(class extends a.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalTabRegister=(0,a.yM)(this,"calciteInternalTabRegister",6),this.guid="calcite-tab-title-".concat((0,s.g)()),this.tab=void 0,this.selected=!1,this.scale="m",this.labeledBy=void 0}render(){const e=this.el.id||this.guid;return(0,a.h)(a.AA,{"aria-labelledby":this.labeledBy,id:e},(0,a.h)("div",{class:{[l]:!0,["scale-".concat(this.scale)]:!0},role:"tabpanel",tabIndex:this.selected?0:-1},(0,a.h)("section",{class:c},(0,a.h)("slot",null))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}componentDidLoad(){this.calciteInternalTabRegister.emit()}disconnectedCallback(){var e;null===(e=document.body)||void 0===e||e.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(e){e.composedPath().find((e=>"CALCITE-TABS"===e.tagName))===this.parentTabsEl&&(this.tab?this.selected=this.tab===e.detail.tab:this.getTabIndex().then((t=>{this.selected=t===e.detail.tab})),e.stopPropagation())}async getTabIndex(){return Array.prototype.indexOf.call((0,n.o)(this.el.parentElement.children).filter((e=>e.matches("calcite-tab"))),this.el)}async updateAriaInfo(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];this.labeledBy=t[e.indexOf(this.el.id)]||null}get el(){return this}static get style(){return":host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.scale-s .content{padding-block:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m .content{padding-block:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l .content{padding-block:0.625rem;font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-tab",{tab:[513],selected:[1540],scale:[1],labeledBy:[32],getTabIndex:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"]]]);function d(){if("undefined"===typeof customElements)return;["calcite-tab"].forEach((e=>{if("calcite-tab"===e)customElements.get(e)||customElements.define(e,o)}))}d()}}]);
//# sourceMappingURL=8266.12ad8aae.chunk.js.map