"use strict";(self["webpackChunkapp1"]=self["webpackChunkapp1"]||[]).push([[261],{4261:(t,e,n)=>{n.r(e),n.d(e,{MENU_BACK_BUTTON_PRIORITY:()=>o,OVERLAY_BACK_BUTTON_PRIORITY:()=>i,blockHardwareBackButton:()=>r,startHardwareBackButton:()=>a});
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const r=()=>{document.addEventListener("backbutton",(()=>{}))},a=()=>{const t=document;let e=!1;t.addEventListener("backbutton",(()=>{if(e)return;let n=0,r=[];const a=new CustomEvent("ionBackButton",{bubbles:!1,detail:{register(t,e){r.push({priority:t,handler:e,id:n++})}}});t.dispatchEvent(a);const i=async t=>{try{if(null===t||void 0===t?void 0:t.handler){const e=t.handler(o);null!=e&&await e}}catch(e){console.error(e)}},o=()=>{if(r.length>0){let t={priority:Number.MIN_SAFE_INTEGER,handler:()=>{},id:-1};r.forEach((e=>{e.priority>=t.priority&&(t=e)})),e=!0,r=r.filter((e=>e.id!==t.id)),i(t).then((()=>e=!1))}};o()}))},i=100,o=99}}]);
//# sourceMappingURL=261-legacy.a9c05e17.js.map