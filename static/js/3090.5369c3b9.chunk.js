/*! For license information please see 3090.5369c3b9.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkn2_station=self.webpackChunkn2_station||[]).push([[3090],{93090:(e,t,i)=>{i.r(t),i.d(t,{CalciteBlockSection:()=>H,defineCustomElement:()=>D});var n=i(51554),s=i(92358),a=i(19579),o=i(46895),c=i(52655),l=i(47242),r=i(57601),d=i(61773),h=i(56239);const u="content",g="toggle",b="content",m="focus-guard",p="invalid",v="section-header",f="section-header__text",k="status-icon",y="toggle",w="toggle--switch",x="toggle--switch-container",z="toggle--switch__content",C="toggle--switch__text",_="valid",E={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"},S=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteBlockSectionToggle=(0,n.yM)(this,"calciteBlockSectionToggle",6),this.handleHeaderKeyDown=e=>{(0,a.i)(e.key)&&(this.toggleSection(),e.preventDefault(),e.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.open=!1,this.status=void 0,this.text=void 0,this.toggleDisplay="button",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}async setFocus(){await(0,l.c)(this),(0,s.f)(this.el)}effectiveLocaleChange(){(0,c.u)(this,this.effectiveLocale)}connectedCallback(){(0,o.c)(this),(0,c.c)(this)}async componentWillLoad(){await(0,c.s)(this),(0,l.a)(this)}componentDidLoad(){(0,l.s)(this)}disconnectedCallback(){(0,o.d)(this),(0,c.d)(this)}renderStatusIcon(){var e;const{status:t}=this,i=null!==(e=E[t])&&void 0!==e&&e,s={[k]:!0,[_]:"valid"==t,[p]:"invalid"==t};return i?(0,n.h)("calcite-icon",{class:s,icon:i,scale:"s"}):null}render(){const{el:e,messages:t,open:i,text:a,toggleDisplay:o}=this,c=(0,s.b)(e),l=i?E.menuOpen:"rtl"===c?E.menuClosedLeft:E.menuClosedRight,r=i?t.collapse:t.expand,d="switch"===o?(0,n.h)("div",{class:{[x]:!0}},(0,n.h)("div",{"aria-controls":u,"aria-expanded":(0,s.t)(i),class:{[y]:!0,[w]:!0},id:g,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,role:"button",tabIndex:0,title:r},(0,n.h)("div",{class:z},(0,n.h)("span",{class:C},a)),this.renderStatusIcon()),(0,n.h)("calcite-label",{class:m,layout:"inline",tabIndex:-1},(0,n.h)("calcite-switch",{checked:i,label:r,scale:"s"}))):(0,n.h)("button",{"aria-controls":u,"aria-expanded":(0,s.t)(i),class:{[v]:!0,[y]:!0},id:g,onClick:this.toggleSection},(0,n.h)("calcite-icon",{icon:l,scale:"s"}),(0,n.h)("span",{class:f},a),this.renderStatusIcon());return(0,n.h)(n.AA,null,d,(0,n.h)("section",{"aria-labelledby":g,class:b,hidden:!i,id:u},(0,n.h)("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return":host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch-container{position:relative;display:flex;inline-size:100%;align-items:center;background-color:transparent;word-break:break-word}.toggle--switch-container .focus-guard{--calcite-label-margin-bottom:0;pointer-events:none;position:absolute;inset-inline-end:0;margin-inline-start:0.25rem}.toggle--switch .status-icon{margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}:host([toggle-display=switch]) .toggle .toggle--switch__content{margin-inline-end:1.75rem}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-block-section",{open:[1540],status:[513],text:[1],toggleDisplay:[513,"toggle-display"],messages:[1040],messageOverrides:[1040],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]}]);function L(){if("undefined"===typeof customElements)return;["calcite-block-section","calcite-icon","calcite-label","calcite-switch"].forEach((e=>{switch(e){case"calcite-block-section":customElements.get(e)||customElements.define(e,S);break;case"calcite-icon":customElements.get(e)||(0,r.d)();break;case"calcite-label":customElements.get(e)||(0,d.d)();break;case"calcite-switch":customElements.get(e)||(0,h.d)()}}))}L();const H=S,D=L},61773:(e,t,i)=>{i.d(t,{L:()=>o,d:()=>c});var n=i(51554),s=i(74310);const a="container",o=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteInternalLabelClick=(0,n.yM)(this,"calciteInternalLabelClick",2),this.labelClickHandler=e=>{this.calciteInternalLabelClick.emit({sourceEvent:e})},this.alignment="start",this.for=void 0,this.scale="m",this.layout="default"}connectedCallback(){document.dispatchEvent(new CustomEvent(s.l))}disconnectedCallback(){document.dispatchEvent(new CustomEvent(s.a))}render(){return(0,n.h)(n.AA,{onClick:this.labelClickHandler},(0,n.h)("div",{class:a},(0,n.h)("slot",null)))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{display:flex}:host([alignment=start]){text-align:start}:host([alignment=end]){text-align:end}:host([alignment=center]){text-align:center}:host([scale=s]) .container{gap:0.25rem;font-size:var(--calcite-font-size--2);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.5rem)}:host([scale=m]) .container{gap:0.5rem;font-size:var(--calcite-font-size--1);line-height:1rem;margin-block-end:var(--calcite-label-margin-bottom, 0.75rem)}:host([scale=l]) .container{gap:0.5rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;margin-block-end:var(--calcite-label-margin-bottom, 1rem)}:host .container{margin-inline:0px;margin-block-start:0px;inline-size:100%;line-height:1.375;color:var(--calcite-ui-text-1)}:host([layout=default]) .container{display:flex;flex-direction:column}:host([layout=inline]) .container,:host([layout=inline-space-between]) .container{display:flex;flex-direction:row;align-items:center;gap:0.5rem}:host([layout=inline][scale=l]) .container{gap:0.75rem}:host([layout=inline-space-between]) .container{justify-content:space-between}:host([disabled])>.container{opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) ::slotted(*[disabled]),:host([disabled]) ::slotted(*[disabled] *){--tw-bg-opacity:1}:host([disabled]) ::slotted(calcite-input-message:not([active])){--tw-bg-opacity:0}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-label",{alignment:[513],for:[513],scale:[513],layout:[513]}]);function c(){if("undefined"===typeof customElements)return;["calcite-label"].forEach((e=>{if("calcite-label"===e)customElements.get(e)||customElements.define(e,o)}))}c()},56239:(e,t,i)=>{i.d(t,{S:()=>d,d:()=>h});var n=i(51554),s=i(92358),a=i(85955),o=i(13160),c=i(19579),l=i(74310),r=i(47242);const d=(0,n.GH)(class extends n.mv{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteSwitchChange=(0,n.yM)(this,"calciteSwitchChange",6),this.keyDownHandler=e=>{!this.disabled&&(0,c.i)(e.key)&&(this.toggle(),e.preventDefault())},this.clickHandler=()=>{this.disabled||this.toggle()},this.setSwitchEl=e=>{this.switchEl=e},this.disabled=!1,this.form=void 0,this.label=void 0,this.name=void 0,this.scale="m",this.checked=!1,this.value=void 0}async setFocus(){await(0,r.c)(this),(0,s.k)(this.switchEl)}syncHiddenFormInput(e){e.type="checkbox"}onLabelClick(){this.disabled||(this.toggle(),this.setFocus())}toggle(){this.checked=!this.checked,this.calciteSwitchChange.emit()}connectedCallback(){(0,o.c)(this),(0,l.c)(this),(0,a.c)(this)}componentWillLoad(){(0,r.a)(this)}componentDidLoad(){(0,r.s)(this)}disconnectedCallback(){(0,o.d)(this),(0,l.d)(this),(0,a.d)(this)}componentDidRender(){(0,o.u)(this)}render(){return(0,n.h)(n.AA,{onClick:this.clickHandler,onKeyDown:this.keyDownHandler},(0,n.h)("div",{"aria-checked":(0,s.t)(this.checked),"aria-label":(0,l.g)(this),class:"container",role:"switch",tabIndex:0,ref:this.setSwitchEl},(0,n.h)("div",{class:"track"},(0,n.h)("div",{class:"handle"})),(0,n.h)(a.H,{component:this})))}get el(){return this}static get style(){return":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host([scale=s]) .container{block-size:0.75rem}:host([scale=s]) .track{block-size:0.75rem;inline-size:1.5rem}:host([scale=s]) .handle{block-size:0.5rem;inline-size:0.5rem}:host([scale=m]) .container{block-size:1rem}:host([scale=m]) .track{block-size:1rem;inline-size:2rem}:host([scale=m]) .handle{block-size:0.75rem;inline-size:0.75rem}:host([scale=l]) .container{block-size:1.5rem}:host([scale=l]) .track{block-size:1.5rem;inline-size:3rem}:host([scale=l]) .handle{block-size:1.25rem;inline-size:1.25rem}:host{position:relative;display:inline-block;inline-size:auto;cursor:pointer;-webkit-user-select:none;user-select:none;vertical-align:middle;tap-highlight-color:transparent}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.container{outline-width:0px}.track{pointer-events:none;position:relative;box-sizing:border-box;display:inline-block;border-radius:9999px;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-2);vertical-align:top;outline-color:transparent}:host(:focus) .track{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-ui-brand));outline-offset:calc(\n            2px *\n            calc(\n              1 -\n              2 * clamp(\n                0,\n                var(--calcite-ui-focus-offset-invert),\n                1\n              )\n            )\n          )}.handle{pointer-events:none;position:absolute;display:block;border-radius:9999px;border-width:2px;border-style:solid;border-color:var(--calcite-ui-border-input);background-color:var(--calcite-ui-foreground-1);transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);inset-block-start:-1px;inset-inline:-1px auto}:host(:hover) .handle,:host(:focus) .handle{border-color:var(--calcite-ui-brand);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand)}:host([checked]) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]) .handle{border-color:var(--calcite-ui-brand);inset-inline:auto -1px}:host([checked]:hover) .track{border-color:var(--calcite-ui-brand-hover);background-color:var(--calcite-ui-brand)}:host([checked]:hover) .handle{border-color:var(--calcite-ui-brand-hover);box-shadow:inset 0 0 0 1px var(--calcite-ui-brand-hover)}@media (forced-colors: active){:host([checked]) .track{background-color:canvasText}}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}:host([hidden]){display:none}[hidden]{display:none}"}},[1,"calcite-switch",{disabled:[516],form:[513],label:[1],name:[513],scale:[513],checked:[1540],value:[8],setFocus:[64]}]);function h(){if("undefined"===typeof customElements)return;["calcite-switch"].forEach((e=>{if("calcite-switch"===e)customElements.get(e)||customElements.define(e,d)}))}h()}}]);
//# sourceMappingURL=3090.5369c3b9.chunk.js.map