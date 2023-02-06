"use strict";(self["webpackChunkapp1"]=self["webpackChunkapp1"]||[]).push([[456],{3456:(t,e,r)=>{r.r(e),r.d(e,{createSwipeBackGesture:()=>g});var s=r(6587),i=r(545);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
class a{constructor(){this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}createGesture(t){var e;return new n(this,this.newID(),t.name,null!==(e=t.priority)&&void 0!==e?e:0,!!t.disableScroll)}createBlocker(t={}){return new l(this,this.newID(),t.disable,!!t.disableScroll)}start(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)}capture(t,e,r){if(!this.start(t,e,r))return!1;const s=this.requestedStart;let i=-1e4;if(s.forEach((t=>{i=Math.max(i,t)})),i===r){this.capturedId=e,s.clear();const r=new CustomEvent("ionGestureCaptured",{detail:{gestureName:t}});return document.dispatchEvent(r),!0}return s.delete(e),!1}release(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)}disableGesture(t,e){let r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)}enableGesture(t,e){const r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)}disableScroll(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&document.body.classList.add(c)}enableScroll(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&document.body.classList.remove(c)}canStart(t){return void 0===this.capturedId&&!this.isDisabled(t)}isCaptured(){return void 0!==this.capturedId}isScrollDisabled(){return this.disabledScroll.size>0}isDisabled(t){const e=this.disabledGestures.get(t);return!!(e&&e.size>0)}newID(){return this.gestureId++,this.gestureId}}class n{constructor(t,e,r,s,i){this.id=e,this.name=r,this.disableScroll=i,this.priority=1e6*s+e,this.ctrl=t}canStart(){return!!this.ctrl&&this.ctrl.canStart(this.name)}start(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)}capture(){if(!this.ctrl)return!1;const t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t}release(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))}destroy(){this.release(),this.ctrl=void 0}}class l{constructor(t,e,r,s){this.id=e,this.disable=r,this.disableScroll=s,this.ctrl=t}block(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.disableGesture(t,this.id);this.disableScroll&&this.ctrl.disableScroll(this.id)}}unblock(){if(this.ctrl){if(this.disable)for(const t of this.disable)this.ctrl.enableGesture(t,this.id);this.disableScroll&&this.ctrl.enableScroll(this.id)}}destroy(){this.unblock(),this.ctrl=void 0}}const c="backdrop-no-scroll",o=new a,d=(t,e,r,s)=>{const i=u(t)?{capture:!!s.capture,passive:!!s.passive}:!!s.capture;let a,n;return t["__zone_symbol__addEventListener"]?(a="__zone_symbol__addEventListener",n="__zone_symbol__removeEventListener"):(a="addEventListener",n="removeEventListener"),t[a](e,r,i),()=>{t[n](e,r,i)}},u=t=>{if(void 0===h)try{const e=Object.defineProperty({},"passive",{get:()=>{h=!0}});t.addEventListener("optsTest",(()=>{}),e)}catch(e){h=!1}return!!h};let h;const b=2e3,v=(t,e,r,s,i)=>{let a,n,l,c,o,u,h,v=0;const m=s=>{v=Date.now()+b,e(s)&&(!n&&r&&(n=d(t,"touchmove",r,i)),l||(l=d(s.target,"touchend",y,i)),c||(c=d(s.target,"touchcancel",y,i)))},S=s=>{v>Date.now()||e(s)&&(!u&&r&&(u=d(p(t),"mousemove",r,i)),h||(h=d(p(t),"mouseup",f,i)))},y=t=>{X(),s&&s(t)},f=t=>{g(),s&&s(t)},X=()=>{n&&n(),l&&l(),c&&c(),n=l=c=void 0},g=()=>{u&&u(),h&&h(),u=h=void 0},w=()=>{X(),g()},Y=(e=!0)=>{e?(a||(a=d(t,"touchstart",m,i)),o||(o=d(t,"mousedown",S,i))):(a&&a(),o&&o(),a=o=void 0,w())},G=()=>{Y(!1),s=r=e=void 0};return{enable:Y,stop:w,destroy:G}},p=t=>t instanceof Document?t:t.ownerDocument,m=(t,e,r)=>{const s=r*(Math.PI/180),i="x"===t,a=Math.cos(s),n=e*e;let l=0,c=0,o=!1,d=0;return{start(t,e){l=t,c=e,d=0,o=!0},detect(t,e){if(!o)return!1;const r=t-l,s=e-c,u=r*r+s*s;if(u<n)return!1;const h=Math.sqrt(u),b=(i?r:s)/h;return d=b>a?1:b<-a?-1:0,o=!1,!0},isGesture(){return 0!==d},getDirection(){return d}}},S=t=>{let e=!1,r=!1,s=!0,i=!1;const a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),n=a.canStart,l=a.onWillStart,c=a.onStart,d=a.onEnd,u=a.notCaptured,h=a.onMove,b=a.threshold,p=a.passive,S=a.blurOnStart,g={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},w=m(a.direction,a.threshold,a.maxAngle),Y=o.createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),G=t=>{const e=X(t);return!(r||!s)&&(f(t,g),g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime=e,g.velocityX=g.velocityY=g.deltaX=g.deltaY=0,g.event=t,(!n||!1!==n(g))&&(Y.release(),!!Y.start()&&(r=!0,0===b?E():(w.start(g.startX,g.startY),!0))))},_=t=>{e?!i&&s&&(i=!0,y(g,t),requestAnimationFrame(D)):(y(g,t),w.detect(g.currentX,g.currentY)&&(w.isGesture()&&E()||q()))},D=()=>{e&&(i=!1,h&&h(g))},E=()=>!!Y.capture()&&(e=!0,s=!1,g.startX=g.currentX,g.startY=g.currentY,g.startTime=g.currentTime,l?l(g).then(k):k(),!0),I=()=>{if("undefined"!==typeof document){const t=document.activeElement;(null===t||void 0===t?void 0:t.blur)&&t.blur()}},k=()=>{S&&I(),c&&c(g),s=!0},M=()=>{e=!1,r=!1,i=!1,s=!0,Y.release()},T=t=>{const r=e,i=s;M(),i&&(y(g,t),r?d&&d(g):u&&u(g))},L=v(a.el,G,_,T,{capture:!1,passive:p}),q=()=>{M(),L.stop(),u&&u(g)};return{enable(t=!0){t||(e&&T(void 0),M()),L.enable(t)},destroy(){Y.destroy(),L.destroy()}}},y=(t,e)=>{if(!e)return;const r=t.currentX,s=t.currentY,i=t.currentTime;f(e,t);const a=t.currentX,n=t.currentY,l=t.currentTime=X(e),c=l-i;if(c>0&&c<100){const e=(a-r)/c,i=(n-s)/c;t.velocityX=.7*e+.3*t.velocityX,t.velocityY=.7*i+.3*t.velocityY}t.deltaX=a-t.startX,t.deltaY=n-t.startY,t.event=e},f=(t,e)=>{let r=0,s=0;if(t){const e=t.changedTouches;if(e&&e.length>0){const t=e[0];r=t.clientX,s=t.clientY}else void 0!==t.pageX&&(r=t.pageX,s=t.pageY)}e.currentX=r,e.currentY=s},X=t=>t.timeStamp||Date.now(),g=(t,e,r,a,n)=>{const l=t.ownerDocument.defaultView,c=(0,i.i)(t),o=t=>{const e=50,{startX:r}=t;return c?r>=l.innerWidth-e:r<=e},d=t=>c?-t.deltaX:t.deltaX,u=t=>c?-t.velocityX:t.velocityX,h=t=>o(t)&&e(),b=t=>{const e=d(t),r=e/l.innerWidth;a(r)},v=t=>{const e=d(t),r=l.innerWidth,i=e/r,a=u(t),c=r/2,o=a>=0&&(a>.2||e>c),h=o?1-i:i,b=h*r;let v=0;if(b>5){const t=b/Math.abs(a);v=Math.min(t,540)}n(o,i<=0?.01:(0,s.h)(0,i,.9999),v)};return S({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:h,onStart:r,onMove:b,onEnd:v})}}}]);
//# sourceMappingURL=456-legacy.c7bb2edf.js.map