(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function Fg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Wu={exports:{}},$o={},ju={exports:{}},_t={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var um;function a0(){if(um)return _t;um=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),_=Symbol.iterator;function x(F){return F===null||typeof F!="object"?null:(F=_&&F[_]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,w={};function y(F,te,we){this.props=F,this.context=te,this.refs=w,this.updater=we||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,te){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,te,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function v(){}v.prototype=y.prototype;function D(F,te,we){this.props=F,this.context=te,this.refs=w,this.updater=we||S}var b=D.prototype=new v;b.constructor=D,E(b,y.prototype),b.isPureReactComponent=!0;var A=Array.isArray,W=Object.prototype.hasOwnProperty,I={current:null},O={key:!0,ref:!0,__self:!0,__source:!0};function Y(F,te,we){var Z,le={},ye=null,_e=null;if(te!=null)for(Z in te.ref!==void 0&&(_e=te.ref),te.key!==void 0&&(ye=""+te.key),te)W.call(te,Z)&&!O.hasOwnProperty(Z)&&(le[Z]=te[Z]);var Ae=arguments.length-2;if(Ae===1)le.children=we;else if(1<Ae){for(var Ne=Array(Ae),Xe=0;Xe<Ae;Xe++)Ne[Xe]=arguments[Xe+2];le.children=Ne}if(F&&F.defaultProps)for(Z in Ae=F.defaultProps,Ae)le[Z]===void 0&&(le[Z]=Ae[Z]);return{$$typeof:s,type:F,key:ye,ref:_e,props:le,_owner:I.current}}function P(F,te){return{$$typeof:s,type:F.type,key:te,ref:F.ref,props:F.props,_owner:F._owner}}function R(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var te={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(we){return te[we]})}var re=/\/+/g;function Q(F,te){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):te.toString(36)}function de(F,te,we,Z,le){var ye=typeof F;(ye==="undefined"||ye==="boolean")&&(F=null);var _e=!1;if(F===null)_e=!0;else switch(ye){case"string":case"number":_e=!0;break;case"object":switch(F.$$typeof){case s:case e:_e=!0}}if(_e)return _e=F,le=le(_e),F=Z===""?"."+Q(_e,0):Z,A(le)?(we="",F!=null&&(we=F.replace(re,"$&/")+"/"),de(le,te,we,"",function(Xe){return Xe})):le!=null&&(R(le)&&(le=P(le,we+(!le.key||_e&&_e.key===le.key?"":(""+le.key).replace(re,"$&/")+"/")+F)),te.push(le)),1;if(_e=0,Z=Z===""?".":Z+":",A(F))for(var Ae=0;Ae<F.length;Ae++){ye=F[Ae];var Ne=Z+Q(ye,Ae);_e+=de(ye,te,we,Ne,le)}else if(Ne=x(F),typeof Ne=="function")for(F=Ne.call(F),Ae=0;!(ye=F.next()).done;)ye=ye.value,Ne=Z+Q(ye,Ae++),_e+=de(ye,te,we,Ne,le);else if(ye==="object")throw te=String(F),Error("Objects are not valid as a React child (found: "+(te==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":te)+"). If you meant to render a collection of children, use an array instead.");return _e}function pe(F,te,we){if(F==null)return F;var Z=[],le=0;return de(F,Z,"","",function(ye){return te.call(we,ye,le++)}),Z}function ce(F){if(F._status===-1){var te=F._result;te=te(),te.then(function(we){(F._status===0||F._status===-1)&&(F._status=1,F._result=we)},function(we){(F._status===0||F._status===-1)&&(F._status=2,F._result=we)}),F._status===-1&&(F._status=0,F._result=te)}if(F._status===1)return F._result.default;throw F._result}var ue={current:null},B={transition:null},oe={ReactCurrentDispatcher:ue,ReactCurrentBatchConfig:B,ReactCurrentOwner:I};function se(){throw Error("act(...) is not supported in production builds of React.")}return _t.Children={map:pe,forEach:function(F,te,we){pe(F,function(){te.apply(this,arguments)},we)},count:function(F){var te=0;return pe(F,function(){te++}),te},toArray:function(F){return pe(F,function(te){return te})||[]},only:function(F){if(!R(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},_t.Component=y,_t.Fragment=t,_t.Profiler=o,_t.PureComponent=D,_t.StrictMode=r,_t.Suspense=d,_t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=oe,_t.act=se,_t.cloneElement=function(F,te,we){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var Z=E({},F.props),le=F.key,ye=F.ref,_e=F._owner;if(te!=null){if(te.ref!==void 0&&(ye=te.ref,_e=I.current),te.key!==void 0&&(le=""+te.key),F.type&&F.type.defaultProps)var Ae=F.type.defaultProps;for(Ne in te)W.call(te,Ne)&&!O.hasOwnProperty(Ne)&&(Z[Ne]=te[Ne]===void 0&&Ae!==void 0?Ae[Ne]:te[Ne])}var Ne=arguments.length-2;if(Ne===1)Z.children=we;else if(1<Ne){Ae=Array(Ne);for(var Xe=0;Xe<Ne;Xe++)Ae[Xe]=arguments[Xe+2];Z.children=Ae}return{$$typeof:s,type:F.type,key:le,ref:ye,props:Z,_owner:_e}},_t.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},_t.createElement=Y,_t.createFactory=function(F){var te=Y.bind(null,F);return te.type=F,te},_t.createRef=function(){return{current:null}},_t.forwardRef=function(F){return{$$typeof:h,render:F}},_t.isValidElement=R,_t.lazy=function(F){return{$$typeof:g,_payload:{_status:-1,_result:F},_init:ce}},_t.memo=function(F,te){return{$$typeof:p,type:F,compare:te===void 0?null:te}},_t.startTransition=function(F){var te=B.transition;B.transition={};try{F()}finally{B.transition=te}},_t.unstable_act=se,_t.useCallback=function(F,te){return ue.current.useCallback(F,te)},_t.useContext=function(F){return ue.current.useContext(F)},_t.useDebugValue=function(){},_t.useDeferredValue=function(F){return ue.current.useDeferredValue(F)},_t.useEffect=function(F,te){return ue.current.useEffect(F,te)},_t.useId=function(){return ue.current.useId()},_t.useImperativeHandle=function(F,te,we){return ue.current.useImperativeHandle(F,te,we)},_t.useInsertionEffect=function(F,te){return ue.current.useInsertionEffect(F,te)},_t.useLayoutEffect=function(F,te){return ue.current.useLayoutEffect(F,te)},_t.useMemo=function(F,te){return ue.current.useMemo(F,te)},_t.useReducer=function(F,te,we){return ue.current.useReducer(F,te,we)},_t.useRef=function(F){return ue.current.useRef(F)},_t.useState=function(F){return ue.current.useState(F)},_t.useSyncExternalStore=function(F,te,we){return ue.current.useSyncExternalStore(F,te,we)},_t.useTransition=function(){return ue.current.useTransition()},_t.version="18.3.1",_t}var hm;function Af(){return hm||(hm=1,ju.exports=a0()),ju.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fm;function l0(){if(fm)return $o;fm=1;var s=Af(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(h,d,p){var g,_={},x=null,S=null;p!==void 0&&(x=""+p),d.key!==void 0&&(x=""+d.key),d.ref!==void 0&&(S=d.ref);for(g in d)r.call(d,g)&&!l.hasOwnProperty(g)&&(_[g]=d[g]);if(h&&h.defaultProps)for(g in d=h.defaultProps,d)_[g]===void 0&&(_[g]=d[g]);return{$$typeof:e,type:h,key:x,ref:S,props:_,_owner:o.current}}return $o.Fragment=t,$o.jsx=u,$o.jsxs=u,$o}var dm;function c0(){return dm||(dm=1,Wu.exports=l0()),Wu.exports}var U=c0(),tt=Af();const u0=Fg(tt);var xl={},Xu={exports:{}},In={},Yu={exports:{}},qu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pm;function h0(){return pm||(pm=1,function(s){function e(B,oe){var se=B.length;B.push(oe);e:for(;0<se;){var F=se-1>>>1,te=B[F];if(0<o(te,oe))B[F]=oe,B[se]=te,se=F;else break e}}function t(B){return B.length===0?null:B[0]}function r(B){if(B.length===0)return null;var oe=B[0],se=B.pop();if(se!==oe){B[0]=se;e:for(var F=0,te=B.length,we=te>>>1;F<we;){var Z=2*(F+1)-1,le=B[Z],ye=Z+1,_e=B[ye];if(0>o(le,se))ye<te&&0>o(_e,le)?(B[F]=_e,B[ye]=se,F=ye):(B[F]=le,B[Z]=se,F=Z);else if(ye<te&&0>o(_e,se))B[F]=_e,B[ye]=se,F=ye;else break e}}return oe}function o(B,oe){var se=B.sortIndex-oe.sortIndex;return se!==0?se:B.id-oe.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,h=u.now();s.unstable_now=function(){return u.now()-h}}var d=[],p=[],g=1,_=null,x=3,S=!1,E=!1,w=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function b(B){for(var oe=t(p);oe!==null;){if(oe.callback===null)r(p);else if(oe.startTime<=B)r(p),oe.sortIndex=oe.expirationTime,e(d,oe);else break;oe=t(p)}}function A(B){if(w=!1,b(B),!E)if(t(d)!==null)E=!0,ce(W);else{var oe=t(p);oe!==null&&ue(A,oe.startTime-B)}}function W(B,oe){E=!1,w&&(w=!1,v(Y),Y=-1),S=!0;var se=x;try{for(b(oe),_=t(d);_!==null&&(!(_.expirationTime>oe)||B&&!z());){var F=_.callback;if(typeof F=="function"){_.callback=null,x=_.priorityLevel;var te=F(_.expirationTime<=oe);oe=s.unstable_now(),typeof te=="function"?_.callback=te:_===t(d)&&r(d),b(oe)}else r(d);_=t(d)}if(_!==null)var we=!0;else{var Z=t(p);Z!==null&&ue(A,Z.startTime-oe),we=!1}return we}finally{_=null,x=se,S=!1}}var I=!1,O=null,Y=-1,P=5,R=-1;function z(){return!(s.unstable_now()-R<P)}function re(){if(O!==null){var B=s.unstable_now();R=B;var oe=!0;try{oe=O(!0,B)}finally{oe?Q():(I=!1,O=null)}}else I=!1}var Q;if(typeof D=="function")Q=function(){D(re)};else if(typeof MessageChannel<"u"){var de=new MessageChannel,pe=de.port2;de.port1.onmessage=re,Q=function(){pe.postMessage(null)}}else Q=function(){y(re,0)};function ce(B){O=B,I||(I=!0,Q())}function ue(B,oe){Y=y(function(){B(s.unstable_now())},oe)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(B){B.callback=null},s.unstable_continueExecution=function(){E||S||(E=!0,ce(W))},s.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<B?Math.floor(1e3/B):5},s.unstable_getCurrentPriorityLevel=function(){return x},s.unstable_getFirstCallbackNode=function(){return t(d)},s.unstable_next=function(B){switch(x){case 1:case 2:case 3:var oe=3;break;default:oe=x}var se=x;x=oe;try{return B()}finally{x=se}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(B,oe){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var se=x;x=B;try{return oe()}finally{x=se}},s.unstable_scheduleCallback=function(B,oe,se){var F=s.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?F+se:F):se=F,B){case 1:var te=-1;break;case 2:te=250;break;case 5:te=1073741823;break;case 4:te=1e4;break;default:te=5e3}return te=se+te,B={id:g++,callback:oe,priorityLevel:B,startTime:se,expirationTime:te,sortIndex:-1},se>F?(B.sortIndex=se,e(p,B),t(d)===null&&B===t(p)&&(w?(v(Y),Y=-1):w=!0,ue(A,se-F))):(B.sortIndex=te,e(d,B),E||S||(E=!0,ce(W))),B},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(B){var oe=x;return function(){var se=x;x=oe;try{return B.apply(this,arguments)}finally{x=se}}}}(qu)),qu}var mm;function f0(){return mm||(mm=1,Yu.exports=h0()),Yu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gm;function d0(){if(gm)return In;gm=1;var s=Af(),e=f0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},_={};function x(n){return d.call(_,n)?!0:d.call(g,n)?!1:p.test(n)?_[n]=!0:(g[n]=!0,!1)}function S(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function E(n,i,a,c){if(i===null||typeof i>"u"||S(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,a,c,f,m,T){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=T}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,D);y[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,D);y[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,D);y[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function b(n,i,a,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(E(i,a,f,c)&&(a=null),c||f===null?x(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):f.mustUseProperty?n[f.propertyName]=a===null?f.type===3?!1:"":a:(i=f.attributeName,c=f.attributeNamespace,a===null?n.removeAttribute(i):(f=f.type,a=f===3||f===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,W=Symbol.for("react.element"),I=Symbol.for("react.portal"),O=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),R=Symbol.for("react.provider"),z=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),de=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),ce=Symbol.for("react.lazy"),ue=Symbol.for("react.offscreen"),B=Symbol.iterator;function oe(n){return n===null||typeof n!="object"?null:(n=B&&n[B]||n["@@iterator"],typeof n=="function"?n:null)}var se=Object.assign,F;function te(n){if(F===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var we=!1;function Z(n,i){if(!n||we)return"";we=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ee){var c=ee}Reflect.construct(n,[],i)}else{try{i.call()}catch(ee){c=ee}n.call(i.prototype)}else{try{throw Error()}catch(ee){c=ee}n()}}catch(ee){if(ee&&c&&typeof ee.stack=="string"){for(var f=ee.stack.split(`
`),m=c.stack.split(`
`),T=f.length-1,N=m.length-1;1<=T&&0<=N&&f[T]!==m[N];)N--;for(;1<=T&&0<=N;T--,N--)if(f[T]!==m[N]){if(T!==1||N!==1)do if(T--,N--,0>N||f[T]!==m[N]){var k=`
`+f[T].replace(" at new "," at ");return n.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",n.displayName)),k}while(1<=T&&0<=N);break}}}finally{we=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?te(n):""}function le(n){switch(n.tag){case 5:return te(n.type);case 16:return te("Lazy");case 13:return te("Suspense");case 19:return te("SuspenseList");case 0:case 2:case 15:return n=Z(n.type,!1),n;case 11:return n=Z(n.type.render,!1),n;case 1:return n=Z(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case O:return"Fragment";case I:return"Portal";case P:return"Profiler";case Y:return"StrictMode";case Q:return"Suspense";case de:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case R:return(n._context.displayName||"Context")+".Provider";case re:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case ce:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function _e(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Ae(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ne(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Xe(n){var i=Ne(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var f=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(T){c=""+T,m.call(this,T)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(T){c=""+T},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Rt(n){n._valueTracker||(n._valueTracker=Xe(n))}function pt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=Ne(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function Pt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function H(n,i){var a=i.checked;return se({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function Wt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=Ae(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function st(n,i){i=i.checked,i!=null&&b(n,"checked",i,!1)}function ct(n,i){st(n,i);var a=Ae(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?mt(n,i.type,a):i.hasOwnProperty("defaultValue")&&mt(n,i.type,Ae(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ge(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function mt(n,i,a){(i!=="number"||Pt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Ye=Array.isArray;function L(n,i,a,c){if(n=n.options,i){i={};for(var f=0;f<a.length;f++)i["$"+a[f]]=!0;for(a=0;a<n.length;a++)f=i.hasOwnProperty("$"+n[a].value),n[a].selected!==f&&(n[a].selected=f),f&&c&&(n[a].defaultSelected=!0)}else{for(a=""+Ae(a),i=null,f=0;f<n.length;f++){if(n[f].value===a){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function M(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return se({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function q(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Ye(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:Ae(a)}}function he(n,i){var a=Ae(i.value),c=Ae(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ke(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ce,Pe=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,f)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ce=Ce||document.createElement("div"),Ce.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ce.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function ut(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},He=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){He.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Ke(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function et(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,f=Ke(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,f):n[a]=f}}var Ve=se({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function gt(n,i){if(i){if(Ve[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function ot(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bt=null;function j(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Re=null,ae=null,me=null;function Ie(n){if(n=Io(n)){if(typeof Re!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Ia(i),Re(n.stateNode,n.type,i))}}function De(n){ae?me?me.push(n):me=[n]:ae=n}function at(){if(ae){var n=ae,i=me;if(me=ae=null,Ie(n),i)for(n=0;n<i.length;n++)Ie(i[n])}}function Ut(n,i){return n(i)}function Jt(){}var Mt=!1;function Rn(n,i,a){if(Mt)return n(i,a);Mt=!0;try{return Ut(n,i,a)}finally{Mt=!1,(ae!==null||me!==null)&&(Jt(),at())}}function Mn(n,i){var a=n.stateNode;if(a===null)return null;var c=Ia(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var us=!1;if(h)try{var Zi={};Object.defineProperty(Zi,"passive",{get:function(){us=!0}}),window.addEventListener("test",Zi,Zi),window.removeEventListener("test",Zi,Zi)}catch{us=!1}function Ri(n,i,a,c,f,m,T,N,k){var ee=Array.prototype.slice.call(arguments,3);try{i.apply(a,ee)}catch(xe){this.onError(xe)}}var bi=!1,br=null,Pr=!1,Ki=null,da={onError:function(n){bi=!0,br=n}};function hs(n,i,a,c,f,m,T,N,k){bi=!1,br=null,Ri.apply(da,arguments)}function pa(n,i,a,c,f,m,T,N,k){if(hs.apply(this,arguments),bi){if(bi){var ee=br;bi=!1,br=null}else throw Error(t(198));Pr||(Pr=!0,Ki=ee)}}function vi(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,i.flags&4098&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function ma(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ga(n){if(vi(n)!==n)throw Error(t(188))}function dc(n){var i=n.alternate;if(!i){if(i=vi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var f=a.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){a=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===a)return ga(f),n;if(m===c)return ga(f),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=f,c=m;else{for(var T=!1,N=f.child;N;){if(N===a){T=!0,a=f,c=m;break}if(N===c){T=!0,c=f,a=m;break}N=N.sibling}if(!T){for(N=m.child;N;){if(N===a){T=!0,a=m,c=f;break}if(N===c){T=!0,c=m,a=f;break}N=N.sibling}if(!T)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function _a(n){return n=dc(n),n!==null?va(n):null}function va(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=va(n);if(i!==null)return i;n=n.sibling}return null}var C=e.unstable_scheduleCallback,$=e.unstable_cancelCallback,ne=e.unstable_shouldYield,ie=e.unstable_requestPaint,V=e.unstable_now,Me=e.unstable_getCurrentPriorityLevel,be=e.unstable_ImmediatePriority,Oe=e.unstable_UserBlockingPriority,ze=e.unstable_NormalPriority,nt=e.unstable_LowPriority,it=e.unstable_IdlePriority,$e=null,lt=null;function Tt(n){if(lt&&typeof lt.onCommitFiberRoot=="function")try{lt.onCommitFiberRoot($e,n,void 0,(n.current.flags&128)===128)}catch{}}var wt=Math.clz32?Math.clz32:Ze,zt=Math.log,yt=Math.LN2;function Ze(n){return n>>>=0,n===0?32:31-(zt(n)/yt|0)|0}var jt=64,xt=4194304;function cn(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function ri(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,T=a&268435455;if(T!==0){var N=T&~f;N!==0?c=cn(N):(m&=T,m!==0&&(c=cn(m)))}else T=a&~f,T!==0?c=cn(T):m!==0&&(c=cn(m));if(c===0)return 0;if(i!==0&&i!==c&&!(i&f)&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if(c&4&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-wt(i),f=1<<a,c|=n[a],i&=~f;return c}function En(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Lr(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var T=31-wt(m),N=1<<T,k=f[T];k===-1?(!(N&a)||N&c)&&(f[T]=En(N,i)):k<=i&&(n.expiredLanes|=N),m&=~N}}function Lt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tn(){var n=jt;return jt<<=1,!(jt&4194240)&&(jt=64),n}function pn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function qt(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-wt(i),n[i]=a}function mn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var f=31-wt(a),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,a&=~m}}function Dr(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-wt(a),f=1<<c;f&i|n[c]&i&&(n[c]|=i),a&=~f}}var vt=0;function Vf(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var Gf,pc,Wf,jf,Xf,mc=!1,xa=[],Ji=null,Qi=null,er=null,vo=new Map,xo=new Map,tr=[],b_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Yf(n,i){switch(n){case"focusin":case"focusout":Ji=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":er=null;break;case"pointerover":case"pointerout":vo.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":xo.delete(i.pointerId)}}function yo(n,i,a,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Io(i),i!==null&&pc(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function P_(n,i,a,c,f){switch(i){case"focusin":return Ji=yo(Ji,n,i,a,c,f),!0;case"dragenter":return Qi=yo(Qi,n,i,a,c,f),!0;case"mouseover":return er=yo(er,n,i,a,c,f),!0;case"pointerover":var m=f.pointerId;return vo.set(m,yo(vo.get(m)||null,n,i,a,c,f)),!0;case"gotpointercapture":return m=f.pointerId,xo.set(m,yo(xo.get(m)||null,n,i,a,c,f)),!0}return!1}function qf(n){var i=Nr(n.target);if(i!==null){var a=vi(i);if(a!==null){if(i=a.tag,i===13){if(i=ma(a),i!==null){n.blockedOn=i,Xf(n.priority,function(){Wf(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function ya(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=_c(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);bt=c,a.target.dispatchEvent(c),bt=null}else return i=Io(a),i!==null&&pc(i),n.blockedOn=a,!1;i.shift()}return!0}function $f(n,i,a){ya(n)&&a.delete(i)}function L_(){mc=!1,Ji!==null&&ya(Ji)&&(Ji=null),Qi!==null&&ya(Qi)&&(Qi=null),er!==null&&ya(er)&&(er=null),vo.forEach($f),xo.forEach($f)}function So(n,i){n.blockedOn===i&&(n.blockedOn=null,mc||(mc=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,L_)))}function Mo(n){function i(f){return So(f,n)}if(0<xa.length){So(xa[0],n);for(var a=1;a<xa.length;a++){var c=xa[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Ji!==null&&So(Ji,n),Qi!==null&&So(Qi,n),er!==null&&So(er,n),vo.forEach(i),xo.forEach(i),a=0;a<tr.length;a++)c=tr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<tr.length&&(a=tr[0],a.blockedOn===null);)qf(a),a.blockedOn===null&&tr.shift()}var fs=A.ReactCurrentBatchConfig,Sa=!0;function D_(n,i,a,c){var f=vt,m=fs.transition;fs.transition=null;try{vt=1,gc(n,i,a,c)}finally{vt=f,fs.transition=m}}function N_(n,i,a,c){var f=vt,m=fs.transition;fs.transition=null;try{vt=4,gc(n,i,a,c)}finally{vt=f,fs.transition=m}}function gc(n,i,a,c){if(Sa){var f=_c(n,i,a,c);if(f===null)Ic(n,i,c,Ma,a),Yf(n,c);else if(P_(f,n,i,a,c))c.stopPropagation();else if(Yf(n,c),i&4&&-1<b_.indexOf(n)){for(;f!==null;){var m=Io(f);if(m!==null&&Gf(m),m=_c(n,i,a,c),m===null&&Ic(n,i,c,Ma,a),m===f)break;f=m}f!==null&&c.stopPropagation()}else Ic(n,i,c,null,a)}}var Ma=null;function _c(n,i,a,c){if(Ma=null,n=j(c),n=Nr(n),n!==null)if(i=vi(n),i===null)n=null;else if(a=i.tag,a===13){if(n=ma(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Ma=n,null}function Zf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Me()){case be:return 1;case Oe:return 4;case ze:case nt:return 16;case it:return 536870912;default:return 16}default:return 16}}var nr=null,vc=null,Ea=null;function Kf(){if(Ea)return Ea;var n,i=vc,a=i.length,c,f="value"in nr?nr.value:nr.textContent,m=f.length;for(n=0;n<a&&i[n]===f[n];n++);var T=a-n;for(c=1;c<=T&&i[a-c]===f[m-c];c++);return Ea=f.slice(n,1<c?1-c:void 0)}function Ta(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wa(){return!0}function Jf(){return!1}function Bn(n){function i(a,c,f,m,T){this._reactName=a,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=T,this.currentTarget=null;for(var N in n)n.hasOwnProperty(N)&&(a=n[N],this[N]=a?a(m):m[N]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wa:Jf,this.isPropagationStopped=Jf,this}return se(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wa)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wa)},persist:function(){},isPersistent:wa}),i}var ds={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},xc=Bn(ds),Eo=se({},ds,{view:0,detail:0}),I_=Bn(Eo),yc,Sc,To,Aa=se({},Eo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Ec,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==To&&(To&&n.type==="mousemove"?(yc=n.screenX-To.screenX,Sc=n.screenY-To.screenY):Sc=yc=0,To=n),yc)},movementY:function(n){return"movementY"in n?n.movementY:Sc}}),Qf=Bn(Aa),U_=se({},Aa,{dataTransfer:0}),F_=Bn(U_),O_=se({},Eo,{relatedTarget:0}),Mc=Bn(O_),k_=se({},ds,{animationName:0,elapsedTime:0,pseudoElement:0}),z_=Bn(k_),B_=se({},ds,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),H_=Bn(B_),V_=se({},ds,{data:0}),ed=Bn(V_),G_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},W_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},j_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function X_(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=j_[n])?!!i[n]:!1}function Ec(){return X_}var Y_=se({},Eo,{key:function(n){if(n.key){var i=G_[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Ta(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?W_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Ec,charCode:function(n){return n.type==="keypress"?Ta(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Ta(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),q_=Bn(Y_),$_=se({},Aa,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),td=Bn($_),Z_=se({},Eo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Ec}),K_=Bn(Z_),J_=se({},ds,{propertyName:0,elapsedTime:0,pseudoElement:0}),Q_=Bn(J_),ev=se({},Aa,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=Bn(ev),nv=[9,13,27,32],Tc=h&&"CompositionEvent"in window,wo=null;h&&"documentMode"in document&&(wo=document.documentMode);var iv=h&&"TextEvent"in window&&!wo,nd=h&&(!Tc||wo&&8<wo&&11>=wo),id=" ",rd=!1;function sd(n,i){switch(n){case"keyup":return nv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function od(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ps=!1;function rv(n,i){switch(n){case"compositionend":return od(i);case"keypress":return i.which!==32?null:(rd=!0,id);case"textInput":return n=i.data,n===id&&rd?null:n;default:return null}}function sv(n,i){if(ps)return n==="compositionend"||!Tc&&sd(n,i)?(n=Kf(),Ea=vc=nr=null,ps=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return nd&&i.locale!=="ko"?null:i.data;default:return null}}var ov={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ad(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!ov[n.type]:i==="textarea"}function ld(n,i,a,c){De(c),i=La(i,"onChange"),0<i.length&&(a=new xc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ao=null,Co=null;function av(n){Ad(n,0)}function Ca(n){var i=xs(n);if(pt(i))return n}function lv(n,i){if(n==="change")return i}var cd=!1;if(h){var wc;if(h){var Ac="oninput"in document;if(!Ac){var ud=document.createElement("div");ud.setAttribute("oninput","return;"),Ac=typeof ud.oninput=="function"}wc=Ac}else wc=!1;cd=wc&&(!document.documentMode||9<document.documentMode)}function hd(){Ao&&(Ao.detachEvent("onpropertychange",fd),Co=Ao=null)}function fd(n){if(n.propertyName==="value"&&Ca(Co)){var i=[];ld(i,Co,n,j(n)),Rn(av,i)}}function cv(n,i,a){n==="focusin"?(hd(),Ao=i,Co=a,Ao.attachEvent("onpropertychange",fd)):n==="focusout"&&hd()}function uv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ca(Co)}function hv(n,i){if(n==="click")return Ca(i)}function fv(n,i){if(n==="input"||n==="change")return Ca(i)}function dv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var si=typeof Object.is=="function"?Object.is:dv;function Ro(n,i){if(si(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var f=a[c];if(!d.call(i,f)||!si(n[f],i[f]))return!1}return!0}function dd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function pd(n,i){var a=dd(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=dd(a)}}function md(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?md(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function gd(){for(var n=window,i=Pt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=Pt(n.document)}return i}function Cc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function pv(n){var i=gd(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&md(a.ownerDocument.documentElement,a)){if(c!==null&&Cc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=a.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=pd(a,m);var T=pd(a,c);f&&T&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==T.node||n.focusOffset!==T.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(T.node,T.offset)):(i.setEnd(T.node,T.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var mv=h&&"documentMode"in document&&11>=document.documentMode,ms=null,Rc=null,bo=null,bc=!1;function _d(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;bc||ms==null||ms!==Pt(c)||(c=ms,"selectionStart"in c&&Cc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),bo&&Ro(bo,c)||(bo=c,c=La(Rc,"onSelect"),0<c.length&&(i=new xc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=ms)))}function Ra(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var gs={animationend:Ra("Animation","AnimationEnd"),animationiteration:Ra("Animation","AnimationIteration"),animationstart:Ra("Animation","AnimationStart"),transitionend:Ra("Transition","TransitionEnd")},Pc={},vd={};h&&(vd=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function ba(n){if(Pc[n])return Pc[n];if(!gs[n])return n;var i=gs[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in vd)return Pc[n]=i[a];return n}var xd=ba("animationend"),yd=ba("animationiteration"),Sd=ba("animationstart"),Md=ba("transitionend"),Ed=new Map,Td="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(n,i){Ed.set(n,i),l(i,[n])}for(var Lc=0;Lc<Td.length;Lc++){var Dc=Td[Lc],gv=Dc.toLowerCase(),_v=Dc[0].toUpperCase()+Dc.slice(1);ir(gv,"on"+_v)}ir(xd,"onAnimationEnd"),ir(yd,"onAnimationIteration"),ir(Sd,"onAnimationStart"),ir("dblclick","onDoubleClick"),ir("focusin","onFocus"),ir("focusout","onBlur"),ir(Md,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Po));function wd(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,pa(c,i,void 0,n),n.currentTarget=null}function Ad(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var T=c.length-1;0<=T;T--){var N=c[T],k=N.instance,ee=N.currentTarget;if(N=N.listener,k!==m&&f.isPropagationStopped())break e;wd(f,N,ee),m=k}else for(T=0;T<c.length;T++){if(N=c[T],k=N.instance,ee=N.currentTarget,N=N.listener,k!==m&&f.isPropagationStopped())break e;wd(f,N,ee),m=k}}}if(Pr)throw n=Ki,Pr=!1,Ki=null,n}function Ft(n,i){var a=i[Bc];a===void 0&&(a=i[Bc]=new Set);var c=n+"__bubble";a.has(c)||(Cd(i,n,2,!1),a.add(c))}function Nc(n,i,a){var c=0;i&&(c|=4),Cd(a,n,c,i)}var Pa="_reactListening"+Math.random().toString(36).slice(2);function Lo(n){if(!n[Pa]){n[Pa]=!0,r.forEach(function(a){a!=="selectionchange"&&(vv.has(a)||Nc(a,!1,n),Nc(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Pa]||(i[Pa]=!0,Nc("selectionchange",!1,i))}}function Cd(n,i,a,c){switch(Zf(i)){case 1:var f=D_;break;case 4:f=N_;break;default:f=gc}a=f.bind(null,i,a,n),f=void 0,!us||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,a,{capture:!0,passive:f}):n.addEventListener(i,a,!0):f!==void 0?n.addEventListener(i,a,{passive:f}):n.addEventListener(i,a,!1)}function Ic(n,i,a,c,f){var m=c;if(!(i&1)&&!(i&2)&&c!==null)e:for(;;){if(c===null)return;var T=c.tag;if(T===3||T===4){var N=c.stateNode.containerInfo;if(N===f||N.nodeType===8&&N.parentNode===f)break;if(T===4)for(T=c.return;T!==null;){var k=T.tag;if((k===3||k===4)&&(k=T.stateNode.containerInfo,k===f||k.nodeType===8&&k.parentNode===f))return;T=T.return}for(;N!==null;){if(T=Nr(N),T===null)return;if(k=T.tag,k===5||k===6){c=m=T;continue e}N=N.parentNode}}c=c.return}Rn(function(){var ee=m,xe=j(a),Se=[];e:{var ve=Ed.get(n);if(ve!==void 0){var Ue=xc,We=n;switch(n){case"keypress":if(Ta(a)===0)break e;case"keydown":case"keyup":Ue=q_;break;case"focusin":We="focus",Ue=Mc;break;case"focusout":We="blur",Ue=Mc;break;case"beforeblur":case"afterblur":Ue=Mc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=Qf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=F_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=K_;break;case xd:case yd:case Sd:Ue=z_;break;case Md:Ue=Q_;break;case"scroll":Ue=I_;break;case"wheel":Ue=tv;break;case"copy":case"cut":case"paste":Ue=H_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=td}var je=(i&4)!==0,$t=!je&&n==="scroll",K=je?ve!==null?ve+"Capture":null:ve;je=[];for(var G=ee,J;G!==null;){J=G;var Te=J.stateNode;if(J.tag===5&&Te!==null&&(J=Te,K!==null&&(Te=Mn(G,K),Te!=null&&je.push(Do(G,Te,J)))),$t)break;G=G.return}0<je.length&&(ve=new Ue(ve,We,null,a,xe),Se.push({event:ve,listeners:je}))}}if(!(i&7)){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&a!==bt&&(We=a.relatedTarget||a.fromElement)&&(Nr(We)||We[Pi]))break e;if((Ue||ve)&&(ve=xe.window===xe?xe:(ve=xe.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(We=a.relatedTarget||a.toElement,Ue=ee,We=We?Nr(We):null,We!==null&&($t=vi(We),We!==$t||We.tag!==5&&We.tag!==6)&&(We=null)):(Ue=null,We=ee),Ue!==We)){if(je=Qf,Te="onMouseLeave",K="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(je=td,Te="onPointerLeave",K="onPointerEnter",G="pointer"),$t=Ue==null?ve:xs(Ue),J=We==null?ve:xs(We),ve=new je(Te,G+"leave",Ue,a,xe),ve.target=$t,ve.relatedTarget=J,Te=null,Nr(xe)===ee&&(je=new je(K,G+"enter",We,a,xe),je.target=J,je.relatedTarget=$t,Te=je),$t=Te,Ue&&We)t:{for(je=Ue,K=We,G=0,J=je;J;J=_s(J))G++;for(J=0,Te=K;Te;Te=_s(Te))J++;for(;0<G-J;)je=_s(je),G--;for(;0<J-G;)K=_s(K),J--;for(;G--;){if(je===K||K!==null&&je===K.alternate)break t;je=_s(je),K=_s(K)}je=null}else je=null;Ue!==null&&Rd(Se,ve,Ue,je,!1),We!==null&&$t!==null&&Rd(Se,$t,We,je,!0)}}e:{if(ve=ee?xs(ee):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var qe=lv;else if(ad(ve))if(cd)qe=fv;else{qe=uv;var Je=cv}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&(qe=hv);if(qe&&(qe=qe(n,ee))){ld(Se,qe,a,xe);break e}Je&&Je(n,ve,ee),n==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&mt(ve,"number",ve.value)}switch(Je=ee?xs(ee):window,n){case"focusin":(ad(Je)||Je.contentEditable==="true")&&(ms=Je,Rc=ee,bo=null);break;case"focusout":bo=Rc=ms=null;break;case"mousedown":bc=!0;break;case"contextmenu":case"mouseup":case"dragend":bc=!1,_d(Se,a,xe);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":_d(Se,a,xe)}var Qe;if(Tc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else ps?sd(n,a)&&(rt="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(rt="onCompositionStart");rt&&(nd&&a.locale!=="ko"&&(ps||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&ps&&(Qe=Kf()):(nr=xe,vc="value"in nr?nr.value:nr.textContent,ps=!0)),Je=La(ee,rt),0<Je.length&&(rt=new ed(rt,n,null,a,xe),Se.push({event:rt,listeners:Je}),Qe?rt.data=Qe:(Qe=od(a),Qe!==null&&(rt.data=Qe)))),(Qe=iv?rv(n,a):sv(n,a))&&(ee=La(ee,"onBeforeInput"),0<ee.length&&(xe=new ed("onBeforeInput","beforeinput",null,a,xe),Se.push({event:xe,listeners:ee}),xe.data=Qe))}Ad(Se,i)})}function Do(n,i,a){return{instance:n,listener:i,currentTarget:a}}function La(n,i){for(var a=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=Mn(n,a),m!=null&&c.unshift(Do(n,m,f)),m=Mn(n,i),m!=null&&c.push(Do(n,m,f))),n=n.return}return c}function _s(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Rd(n,i,a,c,f){for(var m=i._reactName,T=[];a!==null&&a!==c;){var N=a,k=N.alternate,ee=N.stateNode;if(k!==null&&k===c)break;N.tag===5&&ee!==null&&(N=ee,f?(k=Mn(a,m),k!=null&&T.unshift(Do(a,k,N))):f||(k=Mn(a,m),k!=null&&T.push(Do(a,k,N)))),a=a.return}T.length!==0&&n.push({event:i,listeners:T})}var xv=/\r\n?/g,yv=/\u0000|\uFFFD/g;function bd(n){return(typeof n=="string"?n:""+n).replace(xv,`
`).replace(yv,"")}function Da(n,i,a){if(i=bd(i),bd(n)!==i&&a)throw Error(t(425))}function Na(){}var Uc=null,Fc=null;function Oc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var kc=typeof setTimeout=="function"?setTimeout:void 0,Sv=typeof clearTimeout=="function"?clearTimeout:void 0,Pd=typeof Promise=="function"?Promise:void 0,Mv=typeof queueMicrotask=="function"?queueMicrotask:typeof Pd<"u"?function(n){return Pd.resolve(null).then(n).catch(Ev)}:kc;function Ev(n){setTimeout(function(){throw n})}function zc(n,i){var a=i,c=0;do{var f=a.nextSibling;if(n.removeChild(a),f&&f.nodeType===8)if(a=f.data,a==="/$"){if(c===0){n.removeChild(f),Mo(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=f}while(a);Mo(i)}function rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Ld(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var vs=Math.random().toString(36).slice(2),xi="__reactFiber$"+vs,No="__reactProps$"+vs,Pi="__reactContainer$"+vs,Bc="__reactEvents$"+vs,Tv="__reactListeners$"+vs,wv="__reactHandles$"+vs;function Nr(n){var i=n[xi];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Pi]||a[xi]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Ld(n);n!==null;){if(a=n[xi])return a;n=Ld(n)}return i}n=a,a=n.parentNode}return null}function Io(n){return n=n[xi]||n[Pi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function xs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Ia(n){return n[No]||null}var Hc=[],ys=-1;function sr(n){return{current:n}}function Ot(n){0>ys||(n.current=Hc[ys],Hc[ys]=null,ys--)}function It(n,i){ys++,Hc[ys]=n.current,n.current=i}var or={},gn=sr(or),bn=sr(!1),Ir=or;function Ss(n,i){var a=n.type.contextTypes;if(!a)return or;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in a)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Pn(n){return n=n.childContextTypes,n!=null}function Ua(){Ot(bn),Ot(gn)}function Dd(n,i,a){if(gn.current!==or)throw Error(t(168));It(gn,i),It(bn,a)}function Nd(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,_e(n)||"Unknown",f));return se({},a,c)}function Fa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||or,Ir=gn.current,It(gn,n),It(bn,bn.current),!0}function Id(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Nd(n,i,Ir),c.__reactInternalMemoizedMergedChildContext=n,Ot(bn),Ot(gn),It(gn,n)):Ot(bn),It(bn,a)}var Li=null,Oa=!1,Vc=!1;function Ud(n){Li===null?Li=[n]:Li.push(n)}function Av(n){Oa=!0,Ud(n)}function ar(){if(!Vc&&Li!==null){Vc=!0;var n=0,i=vt;try{var a=Li;for(vt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}Li=null,Oa=!1}catch(f){throw Li!==null&&(Li=Li.slice(n+1)),C(be,ar),f}finally{vt=i,Vc=!1}}return null}var Ms=[],Es=0,ka=null,za=0,qn=[],$n=0,Ur=null,Di=1,Ni="";function Fr(n,i){Ms[Es++]=za,Ms[Es++]=ka,ka=n,za=i}function Fd(n,i,a){qn[$n++]=Di,qn[$n++]=Ni,qn[$n++]=Ur,Ur=n;var c=Di;n=Ni;var f=32-wt(c)-1;c&=~(1<<f),a+=1;var m=32-wt(i)+f;if(30<m){var T=f-f%5;m=(c&(1<<T)-1).toString(32),c>>=T,f-=T,Di=1<<32-wt(i)+f|a<<f|c,Ni=m+n}else Di=1<<m|a<<f|c,Ni=n}function Gc(n){n.return!==null&&(Fr(n,1),Fd(n,1,0))}function Wc(n){for(;n===ka;)ka=Ms[--Es],Ms[Es]=null,za=Ms[--Es],Ms[Es]=null;for(;n===Ur;)Ur=qn[--$n],qn[$n]=null,Ni=qn[--$n],qn[$n]=null,Di=qn[--$n],qn[$n]=null}var Hn=null,Vn=null,Bt=!1,oi=null;function Od(n,i){var a=Qn(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function kd(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Hn=n,Vn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=Ur!==null?{id:Di,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=Qn(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,Hn=n,Vn=null,!0):!1;default:return!1}}function jc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Xc(n){if(Bt){var i=Vn;if(i){var a=i;if(!kd(n,i)){if(jc(n))throw Error(t(418));i=rr(a.nextSibling);var c=Hn;i&&kd(n,i)?Od(c,a):(n.flags=n.flags&-4097|2,Bt=!1,Hn=n)}}else{if(jc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Hn=n}}}function zd(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Hn=n}function Ba(n){if(n!==Hn)return!1;if(!Bt)return zd(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Oc(n.type,n.memoizedProps)),i&&(i=Vn)){if(jc(n))throw Bd(),Error(t(418));for(;i;)Od(n,i),i=rr(i.nextSibling)}if(zd(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){Vn=rr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}Vn=null}}else Vn=Hn?rr(n.stateNode.nextSibling):null;return!0}function Bd(){for(var n=Vn;n;)n=rr(n.nextSibling)}function Ts(){Vn=Hn=null,Bt=!1}function Yc(n){oi===null?oi=[n]:oi.push(n)}var Cv=A.ReactCurrentBatchConfig;function Uo(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(T){var N=f.refs;T===null?delete N[m]:N[m]=T},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Ha(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function Hd(n){var i=n._init;return i(n._payload)}function Vd(n){function i(K,G){if(n){var J=K.deletions;J===null?(K.deletions=[G],K.flags|=16):J.push(G)}}function a(K,G){if(!n)return null;for(;G!==null;)i(K,G),G=G.sibling;return null}function c(K,G){for(K=new Map;G!==null;)G.key!==null?K.set(G.key,G):K.set(G.index,G),G=G.sibling;return K}function f(K,G){return K=mr(K,G),K.index=0,K.sibling=null,K}function m(K,G,J){return K.index=J,n?(J=K.alternate,J!==null?(J=J.index,J<G?(K.flags|=2,G):J):(K.flags|=2,G)):(K.flags|=1048576,G)}function T(K){return n&&K.alternate===null&&(K.flags|=2),K}function N(K,G,J,Te){return G===null||G.tag!==6?(G=ku(J,K.mode,Te),G.return=K,G):(G=f(G,J),G.return=K,G)}function k(K,G,J,Te){var qe=J.type;return qe===O?xe(K,G,J.props.children,Te,J.key):G!==null&&(G.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ce&&Hd(qe)===G.type)?(Te=f(G,J.props),Te.ref=Uo(K,G,J),Te.return=K,Te):(Te=hl(J.type,J.key,J.props,null,K.mode,Te),Te.ref=Uo(K,G,J),Te.return=K,Te)}function ee(K,G,J,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==J.containerInfo||G.stateNode.implementation!==J.implementation?(G=zu(J,K.mode,Te),G.return=K,G):(G=f(G,J.children||[]),G.return=K,G)}function xe(K,G,J,Te,qe){return G===null||G.tag!==7?(G=Wr(J,K.mode,Te,qe),G.return=K,G):(G=f(G,J),G.return=K,G)}function Se(K,G,J){if(typeof G=="string"&&G!==""||typeof G=="number")return G=ku(""+G,K.mode,J),G.return=K,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case W:return J=hl(G.type,G.key,G.props,null,K.mode,J),J.ref=Uo(K,null,G),J.return=K,J;case I:return G=zu(G,K.mode,J),G.return=K,G;case ce:var Te=G._init;return Se(K,Te(G._payload),J)}if(Ye(G)||oe(G))return G=Wr(G,K.mode,J,null),G.return=K,G;Ha(K,G)}return null}function ve(K,G,J,Te){var qe=G!==null?G.key:null;if(typeof J=="string"&&J!==""||typeof J=="number")return qe!==null?null:N(K,G,""+J,Te);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case W:return J.key===qe?k(K,G,J,Te):null;case I:return J.key===qe?ee(K,G,J,Te):null;case ce:return qe=J._init,ve(K,G,qe(J._payload),Te)}if(Ye(J)||oe(J))return qe!==null?null:xe(K,G,J,Te,null);Ha(K,J)}return null}function Ue(K,G,J,Te,qe){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return K=K.get(J)||null,N(G,K,""+Te,qe);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case W:return K=K.get(Te.key===null?J:Te.key)||null,k(G,K,Te,qe);case I:return K=K.get(Te.key===null?J:Te.key)||null,ee(G,K,Te,qe);case ce:var Je=Te._init;return Ue(K,G,J,Je(Te._payload),qe)}if(Ye(Te)||oe(Te))return K=K.get(J)||null,xe(G,K,Te,qe,null);Ha(G,Te)}return null}function We(K,G,J,Te){for(var qe=null,Je=null,Qe=G,rt=G=0,an=null;Qe!==null&&rt<J.length;rt++){Qe.index>rt?(an=Qe,Qe=null):an=Qe.sibling;var At=ve(K,Qe,J[rt],Te);if(At===null){Qe===null&&(Qe=an);break}n&&Qe&&At.alternate===null&&i(K,Qe),G=m(At,G,rt),Je===null?qe=At:Je.sibling=At,Je=At,Qe=an}if(rt===J.length)return a(K,Qe),Bt&&Fr(K,rt),qe;if(Qe===null){for(;rt<J.length;rt++)Qe=Se(K,J[rt],Te),Qe!==null&&(G=m(Qe,G,rt),Je===null?qe=Qe:Je.sibling=Qe,Je=Qe);return Bt&&Fr(K,rt),qe}for(Qe=c(K,Qe);rt<J.length;rt++)an=Ue(Qe,K,rt,J[rt],Te),an!==null&&(n&&an.alternate!==null&&Qe.delete(an.key===null?rt:an.key),G=m(an,G,rt),Je===null?qe=an:Je.sibling=an,Je=an);return n&&Qe.forEach(function(gr){return i(K,gr)}),Bt&&Fr(K,rt),qe}function je(K,G,J,Te){var qe=oe(J);if(typeof qe!="function")throw Error(t(150));if(J=qe.call(J),J==null)throw Error(t(151));for(var Je=qe=null,Qe=G,rt=G=0,an=null,At=J.next();Qe!==null&&!At.done;rt++,At=J.next()){Qe.index>rt?(an=Qe,Qe=null):an=Qe.sibling;var gr=ve(K,Qe,At.value,Te);if(gr===null){Qe===null&&(Qe=an);break}n&&Qe&&gr.alternate===null&&i(K,Qe),G=m(gr,G,rt),Je===null?qe=gr:Je.sibling=gr,Je=gr,Qe=an}if(At.done)return a(K,Qe),Bt&&Fr(K,rt),qe;if(Qe===null){for(;!At.done;rt++,At=J.next())At=Se(K,At.value,Te),At!==null&&(G=m(At,G,rt),Je===null?qe=At:Je.sibling=At,Je=At);return Bt&&Fr(K,rt),qe}for(Qe=c(K,Qe);!At.done;rt++,At=J.next())At=Ue(Qe,K,rt,At.value,Te),At!==null&&(n&&At.alternate!==null&&Qe.delete(At.key===null?rt:At.key),G=m(At,G,rt),Je===null?qe=At:Je.sibling=At,Je=At);return n&&Qe.forEach(function(o0){return i(K,o0)}),Bt&&Fr(K,rt),qe}function $t(K,G,J,Te){if(typeof J=="object"&&J!==null&&J.type===O&&J.key===null&&(J=J.props.children),typeof J=="object"&&J!==null){switch(J.$$typeof){case W:e:{for(var qe=J.key,Je=G;Je!==null;){if(Je.key===qe){if(qe=J.type,qe===O){if(Je.tag===7){a(K,Je.sibling),G=f(Je,J.props.children),G.return=K,K=G;break e}}else if(Je.elementType===qe||typeof qe=="object"&&qe!==null&&qe.$$typeof===ce&&Hd(qe)===Je.type){a(K,Je.sibling),G=f(Je,J.props),G.ref=Uo(K,Je,J),G.return=K,K=G;break e}a(K,Je);break}else i(K,Je);Je=Je.sibling}J.type===O?(G=Wr(J.props.children,K.mode,Te,J.key),G.return=K,K=G):(Te=hl(J.type,J.key,J.props,null,K.mode,Te),Te.ref=Uo(K,G,J),Te.return=K,K=Te)}return T(K);case I:e:{for(Je=J.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===J.containerInfo&&G.stateNode.implementation===J.implementation){a(K,G.sibling),G=f(G,J.children||[]),G.return=K,K=G;break e}else{a(K,G);break}else i(K,G);G=G.sibling}G=zu(J,K.mode,Te),G.return=K,K=G}return T(K);case ce:return Je=J._init,$t(K,G,Je(J._payload),Te)}if(Ye(J))return We(K,G,J,Te);if(oe(J))return je(K,G,J,Te);Ha(K,J)}return typeof J=="string"&&J!==""||typeof J=="number"?(J=""+J,G!==null&&G.tag===6?(a(K,G.sibling),G=f(G,J),G.return=K,K=G):(a(K,G),G=ku(J,K.mode,Te),G.return=K,K=G),T(K)):a(K,G)}return $t}var ws=Vd(!0),Gd=Vd(!1),Va=sr(null),Ga=null,As=null,qc=null;function $c(){qc=As=Ga=null}function Zc(n){var i=Va.current;Ot(Va),n._currentValue=i}function Kc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Cs(n,i){Ga=n,qc=As=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&i&&(Ln=!0),n.firstContext=null)}function Zn(n){var i=n._currentValue;if(qc!==n)if(n={context:n,memoizedValue:i,next:null},As===null){if(Ga===null)throw Error(t(308));As=n,Ga.dependencies={lanes:0,firstContext:n}}else As=As.next=n;return i}var Or=null;function Jc(n){Or===null?Or=[n]:Or.push(n)}function Wd(n,i,a,c){var f=i.interleaved;return f===null?(a.next=a,Jc(i)):(a.next=f.next,f.next=a),i.interleaved=a,Ii(n,c)}function Ii(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var lr=!1;function Qc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function jd(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ui(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function cr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,Et&2){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Ii(n,a)}return f=c.interleaved,f===null?(i.next=i,Jc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Ii(n,a)}function Wa(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dr(n,a)}}function Xd(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var f=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var T={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?f=m=T:m=m.next=T,a=a.next}while(a!==null);m===null?f=m=i:m=m.next=i}else f=m=i;a={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function ja(n,i,a,c){var f=n.updateQueue;lr=!1;var m=f.firstBaseUpdate,T=f.lastBaseUpdate,N=f.shared.pending;if(N!==null){f.shared.pending=null;var k=N,ee=k.next;k.next=null,T===null?m=ee:T.next=ee,T=k;var xe=n.alternate;xe!==null&&(xe=xe.updateQueue,N=xe.lastBaseUpdate,N!==T&&(N===null?xe.firstBaseUpdate=ee:N.next=ee,xe.lastBaseUpdate=k))}if(m!==null){var Se=f.baseState;T=0,xe=ee=k=null,N=m;do{var ve=N.lane,Ue=N.eventTime;if((c&ve)===ve){xe!==null&&(xe=xe.next={eventTime:Ue,lane:0,tag:N.tag,payload:N.payload,callback:N.callback,next:null});e:{var We=n,je=N;switch(ve=i,Ue=a,je.tag){case 1:if(We=je.payload,typeof We=="function"){Se=We.call(Ue,Se,ve);break e}Se=We;break e;case 3:We.flags=We.flags&-65537|128;case 0:if(We=je.payload,ve=typeof We=="function"?We.call(Ue,Se,ve):We,ve==null)break e;Se=se({},Se,ve);break e;case 2:lr=!0}}N.callback!==null&&N.lane!==0&&(n.flags|=64,ve=f.effects,ve===null?f.effects=[N]:ve.push(N))}else Ue={eventTime:Ue,lane:ve,tag:N.tag,payload:N.payload,callback:N.callback,next:null},xe===null?(ee=xe=Ue,k=Se):xe=xe.next=Ue,T|=ve;if(N=N.next,N===null){if(N=f.shared.pending,N===null)break;ve=N,N=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(xe===null&&(k=Se),f.baseState=k,f.firstBaseUpdate=ee,f.lastBaseUpdate=xe,i=f.shared.interleaved,i!==null){f=i;do T|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Br|=T,n.lanes=T,n.memoizedState=Se}}function Yd(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=a,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Fo={},yi=sr(Fo),Oo=sr(Fo),ko=sr(Fo);function kr(n){if(n===Fo)throw Error(t(174));return n}function eu(n,i){switch(It(ko,i),It(Oo,n),It(yi,Fo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ke(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ke(i,n)}Ot(yi),It(yi,i)}function Rs(){Ot(yi),Ot(Oo),Ot(ko)}function qd(n){kr(ko.current);var i=kr(yi.current),a=ke(i,n.type);i!==a&&(It(Oo,n),It(yi,a))}function tu(n){Oo.current===n&&(Ot(yi),Ot(Oo))}var Ht=sr(0);function Xa(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if(i.flags&128)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var nu=[];function iu(){for(var n=0;n<nu.length;n++)nu[n]._workInProgressVersionPrimary=null;nu.length=0}var Ya=A.ReactCurrentDispatcher,ru=A.ReactCurrentBatchConfig,zr=0,Vt=null,Qt=null,sn=null,qa=!1,zo=!1,Bo=0,Rv=0;function _n(){throw Error(t(321))}function su(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!si(n[a],i[a]))return!1;return!0}function ou(n,i,a,c,f,m){if(zr=m,Vt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ya.current=n===null||n.memoizedState===null?Dv:Nv,n=a(c,f),zo){m=0;do{if(zo=!1,Bo=0,25<=m)throw Error(t(301));m+=1,sn=Qt=null,i.updateQueue=null,Ya.current=Iv,n=a(c,f)}while(zo)}if(Ya.current=Ka,i=Qt!==null&&Qt.next!==null,zr=0,sn=Qt=Vt=null,qa=!1,i)throw Error(t(300));return n}function au(){var n=Bo!==0;return Bo=0,n}function Si(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Vt.memoizedState=sn=n:sn=sn.next=n,sn}function Kn(){if(Qt===null){var n=Vt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=sn===null?Vt.memoizedState:sn.next;if(i!==null)sn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},sn===null?Vt.memoizedState=sn=n:sn=sn.next=n}return sn}function Ho(n,i){return typeof i=="function"?i(n):i}function lu(n){var i=Kn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=Qt,f=c.baseQueue,m=a.pending;if(m!==null){if(f!==null){var T=f.next;f.next=m.next,m.next=T}c.baseQueue=f=m,a.pending=null}if(f!==null){m=f.next,c=c.baseState;var N=T=null,k=null,ee=m;do{var xe=ee.lane;if((zr&xe)===xe)k!==null&&(k=k.next={lane:0,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null}),c=ee.hasEagerState?ee.eagerState:n(c,ee.action);else{var Se={lane:xe,action:ee.action,hasEagerState:ee.hasEagerState,eagerState:ee.eagerState,next:null};k===null?(N=k=Se,T=c):k=k.next=Se,Vt.lanes|=xe,Br|=xe}ee=ee.next}while(ee!==null&&ee!==m);k===null?T=c:k.next=N,si(c,i.memoizedState)||(Ln=!0),i.memoizedState=c,i.baseState=T,i.baseQueue=k,a.lastRenderedState=c}if(n=a.interleaved,n!==null){f=n;do m=f.lane,Vt.lanes|=m,Br|=m,f=f.next;while(f!==n)}else f===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function cu(n){var i=Kn(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,f=a.pending,m=i.memoizedState;if(f!==null){a.pending=null;var T=f=f.next;do m=n(m,T.action),T=T.next;while(T!==f);si(m,i.memoizedState)||(Ln=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function $d(){}function Zd(n,i){var a=Vt,c=Kn(),f=i(),m=!si(c.memoizedState,f);if(m&&(c.memoizedState=f,Ln=!0),c=c.queue,uu(Qd.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(a.flags|=2048,Vo(9,Jd.bind(null,a,c,f,i),void 0,null),on===null)throw Error(t(349));zr&30||Kd(a,i,f)}return f}function Kd(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Jd(n,i,a,c){i.value=a,i.getSnapshot=c,ep(i)&&tp(n)}function Qd(n,i,a){return a(function(){ep(i)&&tp(n)})}function ep(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!si(n,a)}catch{return!0}}function tp(n){var i=Ii(n,1);i!==null&&ui(i,n,1,-1)}function np(n){var i=Si();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:n},i.queue=n,n=n.dispatch=Lv.bind(null,Vt,n),[i.memoizedState,n]}function Vo(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=Vt.updateQueue,i===null?(i={lastEffect:null,stores:null},Vt.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function ip(){return Kn().memoizedState}function $a(n,i,a,c){var f=Si();Vt.flags|=n,f.memoizedState=Vo(1|i,a,void 0,c===void 0?null:c)}function Za(n,i,a,c){var f=Kn();c=c===void 0?null:c;var m=void 0;if(Qt!==null){var T=Qt.memoizedState;if(m=T.destroy,c!==null&&su(c,T.deps)){f.memoizedState=Vo(i,a,m,c);return}}Vt.flags|=n,f.memoizedState=Vo(1|i,a,m,c)}function rp(n,i){return $a(8390656,8,n,i)}function uu(n,i){return Za(2048,8,n,i)}function sp(n,i){return Za(4,2,n,i)}function op(n,i){return Za(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function lp(n,i,a){return a=a!=null?a.concat([n]):null,Za(4,4,ap.bind(null,i,n),a)}function hu(){}function cp(n,i){var a=Kn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&su(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function up(n,i){var a=Kn();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&su(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function hp(n,i,a){return zr&21?(si(a,i)||(a=Tn(),Vt.lanes|=a,Br|=a,n.baseState=!0),i):(n.baseState&&(n.baseState=!1,Ln=!0),n.memoizedState=a)}function bv(n,i){var a=vt;vt=a!==0&&4>a?a:4,n(!0);var c=ru.transition;ru.transition={};try{n(!1),i()}finally{vt=a,ru.transition=c}}function fp(){return Kn().memoizedState}function Pv(n,i,a){var c=dr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},dp(n))pp(i,a);else if(a=Wd(n,i,a,c),a!==null){var f=An();ui(a,n,c,f),mp(a,i,c)}}function Lv(n,i,a){var c=dr(n),f={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(dp(n))pp(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var T=i.lastRenderedState,N=m(T,a);if(f.hasEagerState=!0,f.eagerState=N,si(N,T)){var k=i.interleaved;k===null?(f.next=f,Jc(i)):(f.next=k.next,k.next=f),i.interleaved=f;return}}catch{}finally{}a=Wd(n,i,f,c),a!==null&&(f=An(),ui(a,n,c,f),mp(a,i,c))}}function dp(n){var i=n.alternate;return n===Vt||i!==null&&i===Vt}function pp(n,i){zo=qa=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function mp(n,i,a){if(a&4194240){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Dr(n,a)}}var Ka={readContext:Zn,useCallback:_n,useContext:_n,useEffect:_n,useImperativeHandle:_n,useInsertionEffect:_n,useLayoutEffect:_n,useMemo:_n,useReducer:_n,useRef:_n,useState:_n,useDebugValue:_n,useDeferredValue:_n,useTransition:_n,useMutableSource:_n,useSyncExternalStore:_n,useId:_n,unstable_isNewReconciler:!1},Dv={readContext:Zn,useCallback:function(n,i){return Si().memoizedState=[n,i===void 0?null:i],n},useContext:Zn,useEffect:rp,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$a(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $a(4194308,4,n,i)},useInsertionEffect:function(n,i){return $a(4,2,n,i)},useMemo:function(n,i){var a=Si();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Si();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Pv.bind(null,Vt,n),[c.memoizedState,n]},useRef:function(n){var i=Si();return n={current:n},i.memoizedState=n},useState:np,useDebugValue:hu,useDeferredValue:function(n){return Si().memoizedState=n},useTransition:function(){var n=np(!1),i=n[0];return n=bv.bind(null,n[1]),Si().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=Vt,f=Si();if(Bt){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),on===null)throw Error(t(349));zr&30||Kd(c,i,a)}f.memoizedState=a;var m={value:a,getSnapshot:i};return f.queue=m,rp(Qd.bind(null,c,m,n),[n]),c.flags|=2048,Vo(9,Jd.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Si(),i=on.identifierPrefix;if(Bt){var a=Ni,c=Di;a=(c&~(1<<32-wt(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Bo++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=Rv++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},Nv={readContext:Zn,useCallback:cp,useContext:Zn,useEffect:uu,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:up,useReducer:lu,useRef:ip,useState:function(){return lu(Ho)},useDebugValue:hu,useDeferredValue:function(n){var i=Kn();return hp(i,Qt.memoizedState,n)},useTransition:function(){var n=lu(Ho)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:$d,useSyncExternalStore:Zd,useId:fp,unstable_isNewReconciler:!1},Iv={readContext:Zn,useCallback:cp,useContext:Zn,useEffect:uu,useImperativeHandle:lp,useInsertionEffect:sp,useLayoutEffect:op,useMemo:up,useReducer:cu,useRef:ip,useState:function(){return cu(Ho)},useDebugValue:hu,useDeferredValue:function(n){var i=Kn();return Qt===null?i.memoizedState=n:hp(i,Qt.memoizedState,n)},useTransition:function(){var n=cu(Ho)[0],i=Kn().memoizedState;return[n,i]},useMutableSource:$d,useSyncExternalStore:Zd,useId:fp,unstable_isNewReconciler:!1};function ai(n,i){if(n&&n.defaultProps){i=se({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function fu(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:se({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Ja={isMounted:function(n){return(n=n._reactInternals)?vi(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=An(),f=dr(n),m=Ui(c,f);m.payload=i,a!=null&&(m.callback=a),i=cr(n,m,f),i!==null&&(ui(i,n,f,c),Wa(i,n,f))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=An(),f=dr(n),m=Ui(c,f);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=cr(n,m,f),i!==null&&(ui(i,n,f,c),Wa(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=An(),c=dr(n),f=Ui(a,c);f.tag=2,i!=null&&(f.callback=i),i=cr(n,f,c),i!==null&&(ui(i,n,c,a),Wa(i,n,c))}};function gp(n,i,a,c,f,m,T){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,T):i.prototype&&i.prototype.isPureReactComponent?!Ro(a,c)||!Ro(f,m):!0}function _p(n,i,a){var c=!1,f=or,m=i.contextType;return typeof m=="object"&&m!==null?m=Zn(m):(f=Pn(i)?Ir:gn.current,c=i.contextTypes,m=(c=c!=null)?Ss(n,f):or),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ja,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function vp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Ja.enqueueReplaceState(i,i.state,null)}function du(n,i,a,c){var f=n.stateNode;f.props=a,f.state=n.memoizedState,f.refs={},Qc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Zn(m):(m=Pn(i)?Ir:gn.current,f.context=Ss(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(fu(n,i,m,a),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&Ja.enqueueReplaceState(f,f.state,null),ja(n,a,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function bs(n,i){try{var a="",c=i;do a+=le(c),c=c.return;while(c);var f=a}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function pu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function mu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Uv=typeof WeakMap=="function"?WeakMap:Map;function xp(n,i,a){a=Ui(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){sl||(sl=!0,Pu=c),mu(n,i)},a}function yp(n,i,a){a=Ui(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;a.payload=function(){return c(f)},a.callback=function(){mu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){mu(n,i),typeof c!="function"&&(hr===null?hr=new Set([this]):hr.add(this));var T=i.stack;this.componentDidCatch(i.value,{componentStack:T!==null?T:""})}),a}function Sp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Uv;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(a)||(f.add(a),n=$v.bind(null,n,i,a),i.then(n,n))}function Mp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Ep(n,i,a,c,f){return n.mode&1?(n.flags|=65536,n.lanes=f,n):(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=Ui(-1,1),i.tag=2,cr(a,i,1))),a.lanes|=1),n)}var Fv=A.ReactCurrentOwner,Ln=!1;function wn(n,i,a,c){i.child=n===null?Gd(i,null,a,c):ws(i,n.child,a,c)}function Tp(n,i,a,c,f){a=a.render;var m=i.ref;return Cs(i,f),c=ou(n,i,a,c,m,f),a=au(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(Bt&&a&&Gc(i),i.flags|=1,wn(n,i,c,f),i.child)}function wp(n,i,a,c,f){if(n===null){var m=a.type;return typeof m=="function"&&!Ou(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,Ap(n,i,m,c,f)):(n=hl(a.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,!(n.lanes&f)){var T=m.memoizedProps;if(a=a.compare,a=a!==null?a:Ro,a(T,c)&&n.ref===i.ref)return Fi(n,i,f)}return i.flags|=1,n=mr(m,c),n.ref=i.ref,n.return=i,i.child=n}function Ap(n,i,a,c,f){if(n!==null){var m=n.memoizedProps;if(Ro(m,c)&&n.ref===i.ref)if(Ln=!1,i.pendingProps=c=m,(n.lanes&f)!==0)n.flags&131072&&(Ln=!0);else return i.lanes=n.lanes,Fi(n,i,f)}return gu(n,i,a,c,f)}function Cp(n,i,a){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if(!(i.mode&1))i.memoizedState={baseLanes:0,cachePool:null,transitions:null},It(Ls,Gn),Gn|=a;else{if(!(a&1073741824))return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,It(Ls,Gn),Gn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,It(Ls,Gn),Gn|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,It(Ls,Gn),Gn|=c;return wn(n,i,f,a),i.child}function Rp(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function gu(n,i,a,c,f){var m=Pn(a)?Ir:gn.current;return m=Ss(i,m),Cs(i,f),a=ou(n,i,a,c,m,f),c=au(),n!==null&&!Ln?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Fi(n,i,f)):(Bt&&c&&Gc(i),i.flags|=1,wn(n,i,a,f),i.child)}function bp(n,i,a,c,f){if(Pn(a)){var m=!0;Fa(i)}else m=!1;if(Cs(i,f),i.stateNode===null)el(n,i),_p(i,a,c),du(i,a,c,f),c=!0;else if(n===null){var T=i.stateNode,N=i.memoizedProps;T.props=N;var k=T.context,ee=a.contextType;typeof ee=="object"&&ee!==null?ee=Zn(ee):(ee=Pn(a)?Ir:gn.current,ee=Ss(i,ee));var xe=a.getDerivedStateFromProps,Se=typeof xe=="function"||typeof T.getSnapshotBeforeUpdate=="function";Se||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==c||k!==ee)&&vp(i,T,c,ee),lr=!1;var ve=i.memoizedState;T.state=ve,ja(i,c,T,f),k=i.memoizedState,N!==c||ve!==k||bn.current||lr?(typeof xe=="function"&&(fu(i,a,xe,c),k=i.memoizedState),(N=lr||gp(i,a,N,c,ve,k,ee))?(Se||typeof T.UNSAFE_componentWillMount!="function"&&typeof T.componentWillMount!="function"||(typeof T.componentWillMount=="function"&&T.componentWillMount(),typeof T.UNSAFE_componentWillMount=="function"&&T.UNSAFE_componentWillMount()),typeof T.componentDidMount=="function"&&(i.flags|=4194308)):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=k),T.props=c,T.state=k,T.context=ee,c=N):(typeof T.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{T=i.stateNode,jd(n,i),N=i.memoizedProps,ee=i.type===i.elementType?N:ai(i.type,N),T.props=ee,Se=i.pendingProps,ve=T.context,k=a.contextType,typeof k=="object"&&k!==null?k=Zn(k):(k=Pn(a)?Ir:gn.current,k=Ss(i,k));var Ue=a.getDerivedStateFromProps;(xe=typeof Ue=="function"||typeof T.getSnapshotBeforeUpdate=="function")||typeof T.UNSAFE_componentWillReceiveProps!="function"&&typeof T.componentWillReceiveProps!="function"||(N!==Se||ve!==k)&&vp(i,T,c,k),lr=!1,ve=i.memoizedState,T.state=ve,ja(i,c,T,f);var We=i.memoizedState;N!==Se||ve!==We||bn.current||lr?(typeof Ue=="function"&&(fu(i,a,Ue,c),We=i.memoizedState),(ee=lr||gp(i,a,ee,c,ve,We,k)||!1)?(xe||typeof T.UNSAFE_componentWillUpdate!="function"&&typeof T.componentWillUpdate!="function"||(typeof T.componentWillUpdate=="function"&&T.componentWillUpdate(c,We,k),typeof T.UNSAFE_componentWillUpdate=="function"&&T.UNSAFE_componentWillUpdate(c,We,k)),typeof T.componentDidUpdate=="function"&&(i.flags|=4),typeof T.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=We),T.props=c,T.state=We,T.context=k,c=ee):(typeof T.componentDidUpdate!="function"||N===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof T.getSnapshotBeforeUpdate!="function"||N===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return _u(n,i,a,c,m,f)}function _u(n,i,a,c,f,m){Rp(n,i);var T=(i.flags&128)!==0;if(!c&&!T)return f&&Id(i,a,!1),Fi(n,i,m);c=i.stateNode,Fv.current=i;var N=T&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&T?(i.child=ws(i,n.child,null,m),i.child=ws(i,null,N,m)):wn(n,i,N,m),i.memoizedState=c.state,f&&Id(i,a,!0),i.child}function Pp(n){var i=n.stateNode;i.pendingContext?Dd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Dd(n,i.context,!1),eu(n,i.containerInfo)}function Lp(n,i,a,c,f){return Ts(),Yc(f),i.flags|=256,wn(n,i,a,c),i.child}var vu={dehydrated:null,treeContext:null,retryLane:0};function xu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Dp(n,i,a){var c=i.pendingProps,f=Ht.current,m=!1,T=(i.flags&128)!==0,N;if((N=T)||(N=n!==null&&n.memoizedState===null?!1:(f&2)!==0),N?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),It(Ht,f&1),n===null)return Xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(i.mode&1?n.data==="$!"?i.lanes=8:i.lanes=1073741824:i.lanes=1,null):(T=c.children,n=c.fallback,m?(c=i.mode,m=i.child,T={mode:"hidden",children:T},!(c&1)&&m!==null?(m.childLanes=0,m.pendingProps=T):m=fl(T,c,0,null),n=Wr(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=xu(a),i.memoizedState=vu,n):yu(i,T));if(f=n.memoizedState,f!==null&&(N=f.dehydrated,N!==null))return Ov(n,i,T,c,N,f,a);if(m){m=c.fallback,T=i.mode,f=n.child,N=f.sibling;var k={mode:"hidden",children:c.children};return!(T&1)&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=k,i.deletions=null):(c=mr(f,k),c.subtreeFlags=f.subtreeFlags&14680064),N!==null?m=mr(N,m):(m=Wr(m,T,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,T=n.child.memoizedState,T=T===null?xu(a):{baseLanes:T.baseLanes|a,cachePool:null,transitions:T.transitions},m.memoizedState=T,m.childLanes=n.childLanes&~a,i.memoizedState=vu,c}return m=n.child,n=m.sibling,c=mr(m,{mode:"visible",children:c.children}),!(i.mode&1)&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function yu(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qa(n,i,a,c){return c!==null&&Yc(c),ws(i,n.child,null,a),n=yu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Ov(n,i,a,c,f,m,T){if(a)return i.flags&256?(i.flags&=-257,c=pu(Error(t(422))),Qa(n,i,T,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=fl({mode:"visible",children:c.children},f,0,null),m=Wr(m,f,T,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,i.mode&1&&ws(i,n.child,null,T),i.child.memoizedState=xu(T),i.memoizedState=vu,m);if(!(i.mode&1))return Qa(n,i,T,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var N=c.dgst;return c=N,m=Error(t(419)),c=pu(m,c,void 0),Qa(n,i,T,c)}if(N=(T&n.childLanes)!==0,Ln||N){if(c=on,c!==null){switch(T&-T){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=f&(c.suspendedLanes|T)?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Ii(n,f),ui(c,n,f,-1))}return Fu(),c=pu(Error(t(421))),Qa(n,i,T,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=Zv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Vn=rr(f.nextSibling),Hn=i,Bt=!0,oi=null,n!==null&&(qn[$n++]=Di,qn[$n++]=Ni,qn[$n++]=Ur,Di=n.id,Ni=n.overflow,Ur=i),i=yu(i,c.children),i.flags|=4096,i)}function Np(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Kc(n.return,i,a)}function Su(n,i,a,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=f)}function Ip(n,i,a){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(wn(n,i,c.children,a),c=Ht.current,c&2)c=c&1|2,i.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Np(n,a,i);else if(n.tag===19)Np(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(It(Ht,c),!(i.mode&1))i.memoizedState=null;else switch(f){case"forwards":for(a=i.child,f=null;a!==null;)n=a.alternate,n!==null&&Xa(n)===null&&(f=a),a=a.sibling;a=f,a===null?(f=i.child,i.child=null):(f=a.sibling,a.sibling=null),Su(i,!1,f,a,m);break;case"backwards":for(a=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Xa(n)===null){i.child=f;break}n=f.sibling,f.sibling=a,a=f,f=n}Su(i,!0,a,null,m);break;case"together":Su(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(n,i){!(i.mode&1)&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Fi(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),Br|=i.lanes,!(a&i.childLanes))return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=mr(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=mr(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function kv(n,i,a){switch(i.tag){case 3:Pp(i),Ts();break;case 5:qd(i);break;case 1:Pn(i.type)&&Fa(i);break;case 4:eu(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;It(Va,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(It(Ht,Ht.current&1),i.flags|=128,null):a&i.child.childLanes?Dp(n,i,a):(It(Ht,Ht.current&1),n=Fi(n,i,a),n!==null?n.sibling:null);It(Ht,Ht.current&1);break;case 19:if(c=(a&i.childLanes)!==0,n.flags&128){if(c)return Ip(n,i,a);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),It(Ht,Ht.current),c)break;return null;case 22:case 23:return i.lanes=0,Cp(n,i,a)}return Fi(n,i,a)}var Up,Mu,Fp,Op;Up=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},Mu=function(){},Fp=function(n,i,a,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,kr(yi.current);var m=null;switch(a){case"input":f=H(n,f),c=H(n,c),m=[];break;case"select":f=se({},f,{value:void 0}),c=se({},c,{value:void 0}),m=[];break;case"textarea":f=M(n,f),c=M(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Na)}gt(a,c);var T;a=null;for(ee in f)if(!c.hasOwnProperty(ee)&&f.hasOwnProperty(ee)&&f[ee]!=null)if(ee==="style"){var N=f[ee];for(T in N)N.hasOwnProperty(T)&&(a||(a={}),a[T]="")}else ee!=="dangerouslySetInnerHTML"&&ee!=="children"&&ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&ee!=="autoFocus"&&(o.hasOwnProperty(ee)?m||(m=[]):(m=m||[]).push(ee,null));for(ee in c){var k=c[ee];if(N=f!=null?f[ee]:void 0,c.hasOwnProperty(ee)&&k!==N&&(k!=null||N!=null))if(ee==="style")if(N){for(T in N)!N.hasOwnProperty(T)||k&&k.hasOwnProperty(T)||(a||(a={}),a[T]="");for(T in k)k.hasOwnProperty(T)&&N[T]!==k[T]&&(a||(a={}),a[T]=k[T])}else a||(m||(m=[]),m.push(ee,a)),a=k;else ee==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,N=N?N.__html:void 0,k!=null&&N!==k&&(m=m||[]).push(ee,k)):ee==="children"?typeof k!="string"&&typeof k!="number"||(m=m||[]).push(ee,""+k):ee!=="suppressContentEditableWarning"&&ee!=="suppressHydrationWarning"&&(o.hasOwnProperty(ee)?(k!=null&&ee==="onScroll"&&Ft("scroll",n),m||N===k||(m=[])):(m=m||[]).push(ee,k))}a&&(m=m||[]).push("style",a);var ee=m;(i.updateQueue=ee)&&(i.flags|=4)}},Op=function(n,i,a,c){a!==c&&(i.flags|=4)};function Go(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function vn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)a|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function zv(n,i,a){var c=i.pendingProps;switch(Wc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return vn(i),null;case 1:return Pn(i.type)&&Ua(),vn(i),null;case 3:return c=i.stateNode,Rs(),Ot(bn),Ot(gn),iu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ba(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&!(i.flags&256)||(i.flags|=1024,oi!==null&&(Nu(oi),oi=null))),Mu(n,i),vn(i),null;case 5:tu(i);var f=kr(ko.current);if(a=i.type,n!==null&&i.stateNode!=null)Fp(n,i,a,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return vn(i),null}if(n=kr(yi.current),Ba(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[xi]=i,c[No]=m,n=(i.mode&1)!==0,a){case"dialog":Ft("cancel",c),Ft("close",c);break;case"iframe":case"object":case"embed":Ft("load",c);break;case"video":case"audio":for(f=0;f<Po.length;f++)Ft(Po[f],c);break;case"source":Ft("error",c);break;case"img":case"image":case"link":Ft("error",c),Ft("load",c);break;case"details":Ft("toggle",c);break;case"input":Wt(c,m),Ft("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Ft("invalid",c);break;case"textarea":q(c,m),Ft("invalid",c)}gt(a,m),f=null;for(var T in m)if(m.hasOwnProperty(T)){var N=m[T];T==="children"?typeof N=="string"?c.textContent!==N&&(m.suppressHydrationWarning!==!0&&Da(c.textContent,N,n),f=["children",N]):typeof N=="number"&&c.textContent!==""+N&&(m.suppressHydrationWarning!==!0&&Da(c.textContent,N,n),f=["children",""+N]):o.hasOwnProperty(T)&&N!=null&&T==="onScroll"&&Ft("scroll",c)}switch(a){case"input":Rt(c),Ge(c,m,!0);break;case"textarea":Rt(c),ge(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Na)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{T=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=T.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=T.createElement(a,{is:c.is}):(n=T.createElement(a),a==="select"&&(T=n,c.multiple?T.multiple=!0:c.size&&(T.size=c.size))):n=T.createElementNS(n,a),n[xi]=i,n[No]=c,Up(n,i,!1,!1),i.stateNode=n;e:{switch(T=ot(a,c),a){case"dialog":Ft("cancel",n),Ft("close",n),f=c;break;case"iframe":case"object":case"embed":Ft("load",n),f=c;break;case"video":case"audio":for(f=0;f<Po.length;f++)Ft(Po[f],n);f=c;break;case"source":Ft("error",n),f=c;break;case"img":case"image":case"link":Ft("error",n),Ft("load",n),f=c;break;case"details":Ft("toggle",n),f=c;break;case"input":Wt(n,c),f=H(n,c),Ft("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=se({},c,{value:void 0}),Ft("invalid",n);break;case"textarea":q(n,c),f=M(n,c),Ft("invalid",n);break;default:f=c}gt(a,f),N=f;for(m in N)if(N.hasOwnProperty(m)){var k=N[m];m==="style"?et(n,k):m==="dangerouslySetInnerHTML"?(k=k?k.__html:void 0,k!=null&&Pe(n,k)):m==="children"?typeof k=="string"?(a!=="textarea"||k!=="")&&ut(n,k):typeof k=="number"&&ut(n,""+k):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?k!=null&&m==="onScroll"&&Ft("scroll",n):k!=null&&b(n,m,k,T))}switch(a){case"input":Rt(n),Ge(n,c,!1);break;case"textarea":Rt(n),ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Ae(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?L(n,!!c.multiple,m,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Na)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return vn(i),null;case 6:if(n&&i.stateNode!=null)Op(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=kr(ko.current),kr(yi.current),Ba(i)){if(c=i.stateNode,a=i.memoizedProps,c[xi]=i,(m=c.nodeValue!==a)&&(n=Hn,n!==null))switch(n.tag){case 3:Da(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Da(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return vn(i),null;case 13:if(Ot(Ht),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Vn!==null&&i.mode&1&&!(i.flags&128))Bd(),Ts(),i.flags|=98560,m=!1;else if(m=Ba(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[xi]=i}else Ts(),!(i.flags&128)&&(i.memoizedState=null),i.flags|=4;vn(i),m=!1}else oi!==null&&(Nu(oi),oi=null),m=!0;if(!m)return i.flags&65536?i:null}return i.flags&128?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,i.mode&1&&(n===null||Ht.current&1?en===0&&(en=3):Fu())),i.updateQueue!==null&&(i.flags|=4),vn(i),null);case 4:return Rs(),Mu(n,i),n===null&&Lo(i.stateNode.containerInfo),vn(i),null;case 10:return Zc(i.type._context),vn(i),null;case 17:return Pn(i.type)&&Ua(),vn(i),null;case 19:if(Ot(Ht),m=i.memoizedState,m===null)return vn(i),null;if(c=(i.flags&128)!==0,T=m.rendering,T===null)if(c)Go(m,!1);else{if(en!==0||n!==null&&n.flags&128)for(n=i.child;n!==null;){if(T=Xa(n),T!==null){for(i.flags|=128,Go(m,!1),c=T.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,T=m.alternate,T===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=T.childLanes,m.lanes=T.lanes,m.child=T.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=T.memoizedProps,m.memoizedState=T.memoizedState,m.updateQueue=T.updateQueue,m.type=T.type,n=T.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return It(Ht,Ht.current&1|2),i.child}n=n.sibling}m.tail!==null&&V()>Ds&&(i.flags|=128,c=!0,Go(m,!1),i.lanes=4194304)}else{if(!c)if(n=Xa(T),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),Go(m,!0),m.tail===null&&m.tailMode==="hidden"&&!T.alternate&&!Bt)return vn(i),null}else 2*V()-m.renderingStartTime>Ds&&a!==1073741824&&(i.flags|=128,c=!0,Go(m,!1),i.lanes=4194304);m.isBackwards?(T.sibling=i.child,i.child=T):(a=m.last,a!==null?a.sibling=T:i.child=T,m.last=T)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=V(),i.sibling=null,a=Ht.current,It(Ht,c?a&1|2:a&1),i):(vn(i),null);case 22:case 23:return Uu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&i.mode&1?Gn&1073741824&&(vn(i),i.subtreeFlags&6&&(i.flags|=8192)):vn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Bv(n,i){switch(Wc(i),i.tag){case 1:return Pn(i.type)&&Ua(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Rs(),Ot(bn),Ot(gn),iu(),n=i.flags,n&65536&&!(n&128)?(i.flags=n&-65537|128,i):null;case 5:return tu(i),null;case 13:if(Ot(Ht),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Ts()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Ht),null;case 4:return Rs(),null;case 10:return Zc(i.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var tl=!1,xn=!1,Hv=typeof WeakSet=="function"?WeakSet:Set,Be=null;function Ps(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){Xt(n,i,c)}else a.current=null}function Eu(n,i,a){try{a()}catch(c){Xt(n,i,c)}}var kp=!1;function Vv(n,i){if(Uc=Sa,n=gd(),Cc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var T=0,N=-1,k=-1,ee=0,xe=0,Se=n,ve=null;t:for(;;){for(var Ue;Se!==a||f!==0&&Se.nodeType!==3||(N=T+f),Se!==m||c!==0&&Se.nodeType!==3||(k=T+c),Se.nodeType===3&&(T+=Se.nodeValue.length),(Ue=Se.firstChild)!==null;)ve=Se,Se=Ue;for(;;){if(Se===n)break t;if(ve===a&&++ee===f&&(N=T),ve===m&&++xe===c&&(k=T),(Ue=Se.nextSibling)!==null)break;Se=ve,ve=Se.parentNode}Se=Ue}a=N===-1||k===-1?null:{start:N,end:k}}else a=null}a=a||{start:0,end:0}}else a=null;for(Fc={focusedElem:n,selectionRange:a},Sa=!1,Be=i;Be!==null;)if(i=Be,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Be=n;else for(;Be!==null;){i=Be;try{var We=i.alternate;if(i.flags&1024)switch(i.tag){case 0:case 11:case 15:break;case 1:if(We!==null){var je=We.memoizedProps,$t=We.memoizedState,K=i.stateNode,G=K.getSnapshotBeforeUpdate(i.elementType===i.type?je:ai(i.type,je),$t);K.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var J=i.stateNode.containerInfo;J.nodeType===1?J.textContent="":J.nodeType===9&&J.documentElement&&J.removeChild(J.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Be=n;break}Be=i.return}return We=kp,kp=!1,We}function Wo(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&Eu(i,a,m)}f=f.next}while(f!==c)}}function nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function Tu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function zp(n){var i=n.alternate;i!==null&&(n.alternate=null,zp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[No],delete i[Bc],delete i[Tv],delete i[wv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function Hp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function wu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Na));else if(c!==4&&(n=n.child,n!==null))for(wu(n,i,a),n=n.sibling;n!==null;)wu(n,i,a),n=n.sibling}function Au(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Au(n,i,a),n=n.sibling;n!==null;)Au(n,i,a),n=n.sibling}var un=null,li=!1;function ur(n,i,a){for(a=a.child;a!==null;)Vp(n,i,a),a=a.sibling}function Vp(n,i,a){if(lt&&typeof lt.onCommitFiberUnmount=="function")try{lt.onCommitFiberUnmount($e,a)}catch{}switch(a.tag){case 5:xn||Ps(a,i);case 6:var c=un,f=li;un=null,ur(n,i,a),un=c,li=f,un!==null&&(li?(n=un,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):un.removeChild(a.stateNode));break;case 18:un!==null&&(li?(n=un,a=a.stateNode,n.nodeType===8?zc(n.parentNode,a):n.nodeType===1&&zc(n,a),Mo(n)):zc(un,a.stateNode));break;case 4:c=un,f=li,un=a.stateNode.containerInfo,li=!0,ur(n,i,a),un=c,li=f;break;case 0:case 11:case 14:case 15:if(!xn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,T=m.destroy;m=m.tag,T!==void 0&&(m&2||m&4)&&Eu(a,i,T),f=f.next}while(f!==c)}ur(n,i,a);break;case 1:if(!xn&&(Ps(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(N){Xt(a,i,N)}ur(n,i,a);break;case 21:ur(n,i,a);break;case 22:a.mode&1?(xn=(c=xn)||a.memoizedState!==null,ur(n,i,a),xn=c):ur(n,i,a);break;default:ur(n,i,a)}}function Gp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Hv),i.forEach(function(c){var f=Kv.bind(null,n,c);a.has(c)||(a.add(c),c.then(f,f))})}}function ci(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var f=a[c];try{var m=n,T=i,N=T;e:for(;N!==null;){switch(N.tag){case 5:un=N.stateNode,li=!1;break e;case 3:un=N.stateNode.containerInfo,li=!0;break e;case 4:un=N.stateNode.containerInfo,li=!0;break e}N=N.return}if(un===null)throw Error(t(160));Vp(m,T,f),un=null,li=!1;var k=f.alternate;k!==null&&(k.return=null),f.return=null}catch(ee){Xt(f,i,ee)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Wp(i,n),i=i.sibling}function Wp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(ci(i,n),Mi(n),c&4){try{Wo(3,n,n.return),nl(3,n)}catch(je){Xt(n,n.return,je)}try{Wo(5,n,n.return)}catch(je){Xt(n,n.return,je)}}break;case 1:ci(i,n),Mi(n),c&512&&a!==null&&Ps(a,a.return);break;case 5:if(ci(i,n),Mi(n),c&512&&a!==null&&Ps(a,a.return),n.flags&32){var f=n.stateNode;try{ut(f,"")}catch(je){Xt(n,n.return,je)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,T=a!==null?a.memoizedProps:m,N=n.type,k=n.updateQueue;if(n.updateQueue=null,k!==null)try{N==="input"&&m.type==="radio"&&m.name!=null&&st(f,m),ot(N,T);var ee=ot(N,m);for(T=0;T<k.length;T+=2){var xe=k[T],Se=k[T+1];xe==="style"?et(f,Se):xe==="dangerouslySetInnerHTML"?Pe(f,Se):xe==="children"?ut(f,Se):b(f,xe,Se,ee)}switch(N){case"input":ct(f,m);break;case"textarea":he(f,m);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?L(f,!!m.multiple,Ue,!1):ve!==!!m.multiple&&(m.defaultValue!=null?L(f,!!m.multiple,m.defaultValue,!0):L(f,!!m.multiple,m.multiple?[]:"",!1))}f[No]=m}catch(je){Xt(n,n.return,je)}}break;case 6:if(ci(i,n),Mi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(je){Xt(n,n.return,je)}}break;case 3:if(ci(i,n),Mi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{Mo(i.containerInfo)}catch(je){Xt(n,n.return,je)}break;case 4:ci(i,n),Mi(n);break;case 13:ci(i,n),Mi(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(bu=V())),c&4&&Gp(n);break;case 22:if(xe=a!==null&&a.memoizedState!==null,n.mode&1?(xn=(ee=xn)||xe,ci(i,n),xn=ee):ci(i,n),Mi(n),c&8192){if(ee=n.memoizedState!==null,(n.stateNode.isHidden=ee)&&!xe&&n.mode&1)for(Be=n,xe=n.child;xe!==null;){for(Se=Be=xe;Be!==null;){switch(ve=Be,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Wo(4,ve,ve.return);break;case 1:Ps(ve,ve.return);var We=ve.stateNode;if(typeof We.componentWillUnmount=="function"){c=ve,a=ve.return;try{i=c,We.props=i.memoizedProps,We.state=i.memoizedState,We.componentWillUnmount()}catch(je){Xt(c,a,je)}}break;case 5:Ps(ve,ve.return);break;case 22:if(ve.memoizedState!==null){Yp(Se);continue}}Ue!==null?(Ue.return=ve,Be=Ue):Yp(Se)}xe=xe.sibling}e:for(xe=null,Se=n;;){if(Se.tag===5){if(xe===null){xe=Se;try{f=Se.stateNode,ee?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(N=Se.stateNode,k=Se.memoizedProps.style,T=k!=null&&k.hasOwnProperty("display")?k.display:null,N.style.display=Ke("display",T))}catch(je){Xt(n,n.return,je)}}}else if(Se.tag===6){if(xe===null)try{Se.stateNode.nodeValue=ee?"":Se.memoizedProps}catch(je){Xt(n,n.return,je)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;xe===Se&&(xe=null),Se=Se.return}xe===Se&&(xe=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:ci(i,n),Mi(n),c&4&&Gp(n);break;case 21:break;default:ci(i,n),Mi(n)}}function Mi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ut(f,""),c.flags&=-33);var m=Hp(n);Au(n,m,f);break;case 3:case 4:var T=c.stateNode.containerInfo,N=Hp(n);wu(n,N,T);break;default:throw Error(t(161))}}catch(k){Xt(n,n.return,k)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Gv(n,i,a){Be=n,jp(n)}function jp(n,i,a){for(var c=(n.mode&1)!==0;Be!==null;){var f=Be,m=f.child;if(f.tag===22&&c){var T=f.memoizedState!==null||tl;if(!T){var N=f.alternate,k=N!==null&&N.memoizedState!==null||xn;N=tl;var ee=xn;if(tl=T,(xn=k)&&!ee)for(Be=f;Be!==null;)T=Be,k=T.child,T.tag===22&&T.memoizedState!==null?qp(f):k!==null?(k.return=T,Be=k):qp(f);for(;m!==null;)Be=m,jp(m),m=m.sibling;Be=f,tl=N,xn=ee}Xp(n)}else f.subtreeFlags&8772&&m!==null?(m.return=f,Be=m):Xp(n)}}function Xp(n){for(;Be!==null;){var i=Be;if(i.flags&8772){var a=i.alternate;try{if(i.flags&8772)switch(i.tag){case 0:case 11:case 15:xn||nl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!xn)if(a===null)c.componentDidMount();else{var f=i.elementType===i.type?a.memoizedProps:ai(i.type,a.memoizedProps);c.componentDidUpdate(f,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&Yd(i,m,c);break;case 3:var T=i.updateQueue;if(T!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}Yd(i,T,a)}break;case 5:var N=i.stateNode;if(a===null&&i.flags&4){a=N;var k=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":k.autoFocus&&a.focus();break;case"img":k.src&&(a.src=k.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ee=i.alternate;if(ee!==null){var xe=ee.memoizedState;if(xe!==null){var Se=xe.dehydrated;Se!==null&&Mo(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}xn||i.flags&512&&Tu(i)}catch(ve){Xt(i,i.return,ve)}}if(i===n){Be=null;break}if(a=i.sibling,a!==null){a.return=i.return,Be=a;break}Be=i.return}}function Yp(n){for(;Be!==null;){var i=Be;if(i===n){Be=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Be=a;break}Be=i.return}}function qp(n){for(;Be!==null;){var i=Be;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{nl(4,i)}catch(k){Xt(i,a,k)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(k){Xt(i,f,k)}}var m=i.return;try{Tu(i)}catch(k){Xt(i,m,k)}break;case 5:var T=i.return;try{Tu(i)}catch(k){Xt(i,T,k)}}}catch(k){Xt(i,i.return,k)}if(i===n){Be=null;break}var N=i.sibling;if(N!==null){N.return=i.return,Be=N;break}Be=i.return}}var Wv=Math.ceil,il=A.ReactCurrentDispatcher,Cu=A.ReactCurrentOwner,Jn=A.ReactCurrentBatchConfig,Et=0,on=null,Zt=null,hn=0,Gn=0,Ls=sr(0),en=0,jo=null,Br=0,rl=0,Ru=0,Xo=null,Dn=null,bu=0,Ds=1/0,Oi=null,sl=!1,Pu=null,hr=null,ol=!1,fr=null,al=0,Yo=0,Lu=null,ll=-1,cl=0;function An(){return Et&6?V():ll!==-1?ll:ll=V()}function dr(n){return n.mode&1?Et&2&&hn!==0?hn&-hn:Cv.transition!==null?(cl===0&&(cl=Tn()),cl):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Zf(n.type)),n):1}function ui(n,i,a,c){if(50<Yo)throw Yo=0,Lu=null,Error(t(185));qt(n,a,c),(!(Et&2)||n!==on)&&(n===on&&(!(Et&2)&&(rl|=a),en===4&&pr(n,hn)),Nn(n,c),a===1&&Et===0&&!(i.mode&1)&&(Ds=V()+500,Oa&&ar()))}function Nn(n,i){var a=n.callbackNode;Lr(n,i);var c=ri(n,n===on?hn:0);if(c===0)a!==null&&$(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&$(a),i===1)n.tag===0?Av(Zp.bind(null,n)):Ud(Zp.bind(null,n)),Mv(function(){!(Et&6)&&ar()}),a=null;else{switch(Vf(c)){case 1:a=be;break;case 4:a=Oe;break;case 16:a=ze;break;case 536870912:a=it;break;default:a=ze}a=rm(a,$p.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function $p(n,i){if(ll=-1,cl=0,Et&6)throw Error(t(327));var a=n.callbackNode;if(Ns()&&n.callbackNode!==a)return null;var c=ri(n,n===on?hn:0);if(c===0)return null;if(c&30||c&n.expiredLanes||i)i=ul(n,c);else{i=c;var f=Et;Et|=2;var m=Jp();(on!==n||hn!==i)&&(Oi=null,Ds=V()+500,Vr(n,i));do try{Yv();break}catch(N){Kp(n,N)}while(!0);$c(),il.current=m,Et=f,Zt!==null?i=0:(on=null,hn=0,i=en)}if(i!==0){if(i===2&&(f=Lt(n),f!==0&&(c=f,i=Du(n,f))),i===1)throw a=jo,Vr(n,0),pr(n,c),Nn(n,V()),a;if(i===6)pr(n,c);else{if(f=n.current.alternate,!(c&30)&&!jv(f)&&(i=ul(n,c),i===2&&(m=Lt(n),m!==0&&(c=m,i=Du(n,m))),i===1))throw a=jo,Vr(n,0),pr(n,c),Nn(n,V()),a;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Gr(n,Dn,Oi);break;case 3:if(pr(n,c),(c&130023424)===c&&(i=bu+500-V(),10<i)){if(ri(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){An(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=kc(Gr.bind(null,n,Dn,Oi),i);break}Gr(n,Dn,Oi);break;case 4:if(pr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var T=31-wt(c);m=1<<T,T=i[T],T>f&&(f=T),c&=~m}if(c=f,c=V()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Wv(c/1960))-c,10<c){n.timeoutHandle=kc(Gr.bind(null,n,Dn,Oi),c);break}Gr(n,Dn,Oi);break;case 5:Gr(n,Dn,Oi);break;default:throw Error(t(329))}}}return Nn(n,V()),n.callbackNode===a?$p.bind(null,n):null}function Du(n,i){var a=Xo;return n.current.memoizedState.isDehydrated&&(Vr(n,i).flags|=256),n=ul(n,i),n!==2&&(i=Dn,Dn=a,i!==null&&Nu(i)),n}function Nu(n){Dn===null?Dn=n:Dn.push.apply(Dn,n)}function jv(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var f=a[c],m=f.getSnapshot;f=f.value;try{if(!si(m(),f))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function pr(n,i){for(i&=~Ru,i&=~rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-wt(i),c=1<<a;n[a]=-1,i&=~c}}function Zp(n){if(Et&6)throw Error(t(327));Ns();var i=ri(n,0);if(!(i&1))return Nn(n,V()),null;var a=ul(n,i);if(n.tag!==0&&a===2){var c=Lt(n);c!==0&&(i=c,a=Du(n,c))}if(a===1)throw a=jo,Vr(n,0),pr(n,i),Nn(n,V()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Gr(n,Dn,Oi),Nn(n,V()),null}function Iu(n,i){var a=Et;Et|=1;try{return n(i)}finally{Et=a,Et===0&&(Ds=V()+500,Oa&&ar())}}function Hr(n){fr!==null&&fr.tag===0&&!(Et&6)&&Ns();var i=Et;Et|=1;var a=Jn.transition,c=vt;try{if(Jn.transition=null,vt=1,n)return n()}finally{vt=c,Jn.transition=a,Et=i,!(Et&6)&&ar()}}function Uu(){Gn=Ls.current,Ot(Ls)}function Vr(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,Sv(a)),Zt!==null)for(a=Zt.return;a!==null;){var c=a;switch(Wc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ua();break;case 3:Rs(),Ot(bn),Ot(gn),iu();break;case 5:tu(c);break;case 4:Rs();break;case 13:Ot(Ht);break;case 19:Ot(Ht);break;case 10:Zc(c.type._context);break;case 22:case 23:Uu()}a=a.return}if(on=n,Zt=n=mr(n.current,null),hn=Gn=i,en=0,jo=null,Ru=rl=Br=0,Dn=Xo=null,Or!==null){for(i=0;i<Or.length;i++)if(a=Or[i],c=a.interleaved,c!==null){a.interleaved=null;var f=c.next,m=a.pending;if(m!==null){var T=m.next;m.next=f,c.next=T}a.pending=c}Or=null}return n}function Kp(n,i){do{var a=Zt;try{if($c(),Ya.current=Ka,qa){for(var c=Vt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}qa=!1}if(zr=0,sn=Qt=Vt=null,zo=!1,Bo=0,Cu.current=null,a===null||a.return===null){en=1,jo=i,Zt=null;break}e:{var m=n,T=a.return,N=a,k=i;if(i=hn,N.flags|=32768,k!==null&&typeof k=="object"&&typeof k.then=="function"){var ee=k,xe=N,Se=xe.tag;if(!(xe.mode&1)&&(Se===0||Se===11||Se===15)){var ve=xe.alternate;ve?(xe.updateQueue=ve.updateQueue,xe.memoizedState=ve.memoizedState,xe.lanes=ve.lanes):(xe.updateQueue=null,xe.memoizedState=null)}var Ue=Mp(T);if(Ue!==null){Ue.flags&=-257,Ep(Ue,T,N,m,i),Ue.mode&1&&Sp(m,ee,i),i=Ue,k=ee;var We=i.updateQueue;if(We===null){var je=new Set;je.add(k),i.updateQueue=je}else We.add(k);break e}else{if(!(i&1)){Sp(m,ee,i),Fu();break e}k=Error(t(426))}}else if(Bt&&N.mode&1){var $t=Mp(T);if($t!==null){!($t.flags&65536)&&($t.flags|=256),Ep($t,T,N,m,i),Yc(bs(k,N));break e}}m=k=bs(k,N),en!==4&&(en=2),Xo===null?Xo=[m]:Xo.push(m),m=T;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var K=xp(m,k,i);Xd(m,K);break e;case 1:N=k;var G=m.type,J=m.stateNode;if(!(m.flags&128)&&(typeof G.getDerivedStateFromError=="function"||J!==null&&typeof J.componentDidCatch=="function"&&(hr===null||!hr.has(J)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=yp(m,N,i);Xd(m,Te);break e}}m=m.return}while(m!==null)}em(a)}catch(qe){i=qe,Zt===a&&a!==null&&(Zt=a=a.return);continue}break}while(!0)}function Jp(){var n=il.current;return il.current=Ka,n===null?Ka:n}function Fu(){(en===0||en===3||en===2)&&(en=4),on===null||!(Br&268435455)&&!(rl&268435455)||pr(on,hn)}function ul(n,i){var a=Et;Et|=2;var c=Jp();(on!==n||hn!==i)&&(Oi=null,Vr(n,i));do try{Xv();break}catch(f){Kp(n,f)}while(!0);if($c(),Et=a,il.current=c,Zt!==null)throw Error(t(261));return on=null,hn=0,en}function Xv(){for(;Zt!==null;)Qp(Zt)}function Yv(){for(;Zt!==null&&!ne();)Qp(Zt)}function Qp(n){var i=im(n.alternate,n,Gn);n.memoizedProps=n.pendingProps,i===null?em(n):Zt=i,Cu.current=null}function em(n){var i=n;do{var a=i.alternate;if(n=i.return,i.flags&32768){if(a=Bv(a,i),a!==null){a.flags&=32767,Zt=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{en=6,Zt=null;return}}else if(a=zv(a,i,Gn),a!==null){Zt=a;return}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=n}while(i!==null);en===0&&(en=5)}function Gr(n,i,a){var c=vt,f=Jn.transition;try{Jn.transition=null,vt=1,qv(n,i,a,c)}finally{Jn.transition=f,vt=c}return null}function qv(n,i,a,c){do Ns();while(fr!==null);if(Et&6)throw Error(t(327));a=n.finishedWork;var f=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(mn(n,m),n===on&&(Zt=on=null,hn=0),!(a.subtreeFlags&2064)&&!(a.flags&2064)||ol||(ol=!0,rm(ze,function(){return Ns(),null})),m=(a.flags&15990)!==0,a.subtreeFlags&15990||m){m=Jn.transition,Jn.transition=null;var T=vt;vt=1;var N=Et;Et|=4,Cu.current=null,Vv(n,a),Wp(a,n),pv(Fc),Sa=!!Uc,Fc=Uc=null,n.current=a,Gv(a),ie(),Et=N,vt=T,Jn.transition=m}else n.current=a;if(ol&&(ol=!1,fr=n,al=f),m=n.pendingLanes,m===0&&(hr=null),Tt(a.stateNode),Nn(n,V()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)f=i[a],c(f.value,{componentStack:f.stack,digest:f.digest});if(sl)throw sl=!1,n=Pu,Pu=null,n;return al&1&&n.tag!==0&&Ns(),m=n.pendingLanes,m&1?n===Lu?Yo++:(Yo=0,Lu=n):Yo=0,ar(),null}function Ns(){if(fr!==null){var n=Vf(al),i=Jn.transition,a=vt;try{if(Jn.transition=null,vt=16>n?16:n,fr===null)var c=!1;else{if(n=fr,fr=null,al=0,Et&6)throw Error(t(331));var f=Et;for(Et|=4,Be=n.current;Be!==null;){var m=Be,T=m.child;if(Be.flags&16){var N=m.deletions;if(N!==null){for(var k=0;k<N.length;k++){var ee=N[k];for(Be=ee;Be!==null;){var xe=Be;switch(xe.tag){case 0:case 11:case 15:Wo(8,xe,m)}var Se=xe.child;if(Se!==null)Se.return=xe,Be=Se;else for(;Be!==null;){xe=Be;var ve=xe.sibling,Ue=xe.return;if(zp(xe),xe===ee){Be=null;break}if(ve!==null){ve.return=Ue,Be=ve;break}Be=Ue}}}var We=m.alternate;if(We!==null){var je=We.child;if(je!==null){We.child=null;do{var $t=je.sibling;je.sibling=null,je=$t}while(je!==null)}}Be=m}}if(m.subtreeFlags&2064&&T!==null)T.return=m,Be=T;else e:for(;Be!==null;){if(m=Be,m.flags&2048)switch(m.tag){case 0:case 11:case 15:Wo(9,m,m.return)}var K=m.sibling;if(K!==null){K.return=m.return,Be=K;break e}Be=m.return}}var G=n.current;for(Be=G;Be!==null;){T=Be;var J=T.child;if(T.subtreeFlags&2064&&J!==null)J.return=T,Be=J;else e:for(T=G;Be!==null;){if(N=Be,N.flags&2048)try{switch(N.tag){case 0:case 11:case 15:nl(9,N)}}catch(qe){Xt(N,N.return,qe)}if(N===T){Be=null;break e}var Te=N.sibling;if(Te!==null){Te.return=N.return,Be=Te;break e}Be=N.return}}if(Et=f,ar(),lt&&typeof lt.onPostCommitFiberRoot=="function")try{lt.onPostCommitFiberRoot($e,n)}catch{}c=!0}return c}finally{vt=a,Jn.transition=i}}return!1}function tm(n,i,a){i=bs(a,i),i=xp(n,i,1),n=cr(n,i,1),i=An(),n!==null&&(qt(n,1,i),Nn(n,i))}function Xt(n,i,a){if(n.tag===3)tm(n,n,a);else for(;i!==null;){if(i.tag===3){tm(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(hr===null||!hr.has(c))){n=bs(a,n),n=yp(i,n,1),i=cr(i,n,1),n=An(),i!==null&&(qt(i,1,n),Nn(i,n));break}}i=i.return}}function $v(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=An(),n.pingedLanes|=n.suspendedLanes&a,on===n&&(hn&a)===a&&(en===4||en===3&&(hn&130023424)===hn&&500>V()-bu?Vr(n,0):Ru|=a),Nn(n,i)}function nm(n,i){i===0&&(n.mode&1?(i=xt,xt<<=1,!(xt&130023424)&&(xt=4194304)):i=1);var a=An();n=Ii(n,i),n!==null&&(qt(n,i,a),Nn(n,a))}function Zv(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),nm(n,a)}function Kv(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(a=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),nm(n,a)}var im;im=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||bn.current)Ln=!0;else{if(!(n.lanes&a)&&!(i.flags&128))return Ln=!1,kv(n,i,a);Ln=!!(n.flags&131072)}else Ln=!1,Bt&&i.flags&1048576&&Fd(i,za,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;el(n,i),n=i.pendingProps;var f=Ss(i,gn.current);Cs(i,a),f=ou(null,i,c,n,f,a);var m=au();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Pn(c)?(m=!0,Fa(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Qc(i),f.updater=Ja,i.stateNode=f,f._reactInternals=i,du(i,c,n,a),i=_u(null,i,c,!0,m,a)):(i.tag=0,Bt&&m&&Gc(i),wn(null,i,f,a),i=i.child),i;case 16:c=i.elementType;e:{switch(el(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=Qv(c),n=ai(c,n),f){case 0:i=gu(null,i,c,n,a);break e;case 1:i=bp(null,i,c,n,a);break e;case 11:i=Tp(null,i,c,n,a);break e;case 14:i=wp(null,i,c,ai(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ai(c,f),gu(n,i,c,f,a);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ai(c,f),bp(n,i,c,f,a);case 3:e:{if(Pp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,jd(n,i),ja(i,c,null,a);var T=i.memoizedState;if(c=T.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:T.cache,pendingSuspenseBoundaries:T.pendingSuspenseBoundaries,transitions:T.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=bs(Error(t(423)),i),i=Lp(n,i,c,a,f);break e}else if(c!==f){f=bs(Error(t(424)),i),i=Lp(n,i,c,a,f);break e}else for(Vn=rr(i.stateNode.containerInfo.firstChild),Hn=i,Bt=!0,oi=null,a=Gd(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(Ts(),c===f){i=Fi(n,i,a);break e}wn(n,i,c,a)}i=i.child}return i;case 5:return qd(i),n===null&&Xc(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,T=f.children,Oc(c,f)?T=null:m!==null&&Oc(c,m)&&(i.flags|=32),Rp(n,i),wn(n,i,T,a),i.child;case 6:return n===null&&Xc(i),null;case 13:return Dp(n,i,a);case 4:return eu(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=ws(i,null,c,a):wn(n,i,c,a),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ai(c,f),Tp(n,i,c,f,a);case 7:return wn(n,i,i.pendingProps,a),i.child;case 8:return wn(n,i,i.pendingProps.children,a),i.child;case 12:return wn(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,T=f.value,It(Va,c._currentValue),c._currentValue=T,m!==null)if(si(m.value,T)){if(m.children===f.children&&!bn.current){i=Fi(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var N=m.dependencies;if(N!==null){T=m.child;for(var k=N.firstContext;k!==null;){if(k.context===c){if(m.tag===1){k=Ui(-1,a&-a),k.tag=2;var ee=m.updateQueue;if(ee!==null){ee=ee.shared;var xe=ee.pending;xe===null?k.next=k:(k.next=xe.next,xe.next=k),ee.pending=k}}m.lanes|=a,k=m.alternate,k!==null&&(k.lanes|=a),Kc(m.return,a,i),N.lanes|=a;break}k=k.next}}else if(m.tag===10)T=m.type===i.type?null:m.child;else if(m.tag===18){if(T=m.return,T===null)throw Error(t(341));T.lanes|=a,N=T.alternate,N!==null&&(N.lanes|=a),Kc(T,a,i),T=m.sibling}else T=m.child;if(T!==null)T.return=m;else for(T=m;T!==null;){if(T===i){T=null;break}if(m=T.sibling,m!==null){m.return=T.return,T=m;break}T=T.return}m=T}wn(n,i,f.children,a),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,Cs(i,a),f=Zn(f),c=c(f),i.flags|=1,wn(n,i,c,a),i.child;case 14:return c=i.type,f=ai(c,i.pendingProps),f=ai(c.type,f),wp(n,i,c,f,a);case 15:return Ap(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ai(c,f),el(n,i),i.tag=1,Pn(c)?(n=!0,Fa(i)):n=!1,Cs(i,a),_p(i,c,f),du(i,c,f,a),_u(null,i,c,!0,n,a);case 19:return Ip(n,i,a);case 22:return Cp(n,i,a)}throw Error(t(156,i.tag))};function rm(n,i){return C(n,i)}function Jv(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Qn(n,i,a,c){return new Jv(n,i,a,c)}function Ou(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Qv(n){if(typeof n=="function")return Ou(n)?1:0;if(n!=null){if(n=n.$$typeof,n===re)return 11;if(n===pe)return 14}return 2}function mr(n,i){var a=n.alternate;return a===null?(a=Qn(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function hl(n,i,a,c,f,m){var T=2;if(c=n,typeof n=="function")Ou(n)&&(T=1);else if(typeof n=="string")T=5;else e:switch(n){case O:return Wr(a.children,f,m,i);case Y:T=8,f|=8;break;case P:return n=Qn(12,a,i,f|2),n.elementType=P,n.lanes=m,n;case Q:return n=Qn(13,a,i,f),n.elementType=Q,n.lanes=m,n;case de:return n=Qn(19,a,i,f),n.elementType=de,n.lanes=m,n;case ue:return fl(a,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case R:T=10;break e;case z:T=9;break e;case re:T=11;break e;case pe:T=14;break e;case ce:T=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Qn(T,a,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function Wr(n,i,a,c){return n=Qn(7,n,c,i),n.lanes=a,n}function fl(n,i,a,c){return n=Qn(22,n,c,i),n.elementType=ue,n.lanes=a,n.stateNode={isHidden:!1},n}function ku(n,i,a){return n=Qn(6,n,null,i),n.lanes=a,n}function zu(n,i,a){return i=Qn(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function e0(n,i,a,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=pn(0),this.expirationTimes=pn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=pn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Bu(n,i,a,c,f,m,T,N,k){return n=new e0(n,i,a,N,k),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Qn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Qc(m),n}function t0(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:I,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function sm(n){if(!n)return or;n=n._reactInternals;e:{if(vi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Pn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Pn(a))return Nd(n,a,i)}return i}function om(n,i,a,c,f,m,T,N,k){return n=Bu(a,c,!0,n,f,m,T,N,k),n.context=sm(null),a=n.current,c=An(),f=dr(a),m=Ui(c,f),m.callback=i??null,cr(a,m,f),n.current.lanes=f,qt(n,f,c),Nn(n,c),n}function dl(n,i,a,c){var f=i.current,m=An(),T=dr(f);return a=sm(a),i.context===null?i.context=a:i.pendingContext=a,i=Ui(m,T),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=cr(f,i,T),n!==null&&(ui(n,f,T,m),Wa(n,f,T)),T}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Hu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function n0(){return null}var lm=typeof reportError=="function"?reportError:function(n){console.error(n)};function Vu(n){this._internalRoot=n}ml.prototype.render=Vu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));dl(n,i,null,null)},ml.prototype.unmount=Vu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Hr(function(){dl(null,n,null,null)}),i[Pi]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=jf();n={blockedOn:null,target:n,priority:i};for(var a=0;a<tr.length&&i!==0&&i<tr[a].priority;a++);tr.splice(a,0,n),a===0&&qf(n)}};function Gu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function cm(){}function i0(n,i,a,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ee=pl(T);m.call(ee)}}var T=om(i,c,n,0,null,!1,!1,"",cm);return n._reactRootContainer=T,n[Pi]=T.current,Lo(n.nodeType===8?n.parentNode:n),Hr(),T}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var N=c;c=function(){var ee=pl(k);N.call(ee)}}var k=Bu(n,0,!1,null,null,!1,!1,"",cm);return n._reactRootContainer=k,n[Pi]=k.current,Lo(n.nodeType===8?n.parentNode:n),Hr(function(){dl(i,k,a,c)}),k}function _l(n,i,a,c,f){var m=a._reactRootContainer;if(m){var T=m;if(typeof f=="function"){var N=f;f=function(){var k=pl(T);N.call(k)}}dl(i,T,n,f)}else T=i0(a,i,n,f,c);return pl(T)}Gf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=cn(i.pendingLanes);a!==0&&(Dr(i,a|1),Nn(i,V()),!(Et&6)&&(Ds=V()+500,ar()))}break;case 13:Hr(function(){var c=Ii(n,1);if(c!==null){var f=An();ui(c,n,1,f)}}),Hu(n,1)}},pc=function(n){if(n.tag===13){var i=Ii(n,134217728);if(i!==null){var a=An();ui(i,n,134217728,a)}Hu(n,134217728)}},Wf=function(n){if(n.tag===13){var i=dr(n),a=Ii(n,i);if(a!==null){var c=An();ui(a,n,i,c)}Hu(n,i)}},jf=function(){return vt},Xf=function(n,i){var a=vt;try{return vt=n,i()}finally{vt=a}},Re=function(n,i,a){switch(i){case"input":if(ct(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var f=Ia(c);if(!f)throw Error(t(90));pt(c),ct(c,f)}}}break;case"textarea":he(n,a);break;case"select":i=a.value,i!=null&&L(n,!!a.multiple,i,!1)}},Ut=Iu,Jt=Hr;var r0={usingClientEntryPoint:!1,Events:[Io,xs,Ia,De,at,Iu]},qo={findFiberByHostInstance:Nr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},s0={bundleType:qo.bundleType,version:qo.version,rendererPackageName:qo.rendererPackageName,rendererConfig:qo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=_a(n),n===null?null:n.stateNode},findFiberByHostInstance:qo.findFiberByHostInstance||n0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{$e=vl.inject(s0),lt=vl}catch{}}return In.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=r0,In.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(i))throw Error(t(200));return t0(n,i,null,a)},In.createRoot=function(n,i){if(!Gu(n))throw Error(t(299));var a=!1,c="",f=lm;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=Bu(n,1,!1,null,null,a,!1,c,f),n[Pi]=i.current,Lo(n.nodeType===8?n.parentNode:n),new Vu(i)},In.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=_a(i),n=n===null?null:n.stateNode,n},In.flushSync=function(n){return Hr(n)},In.hydrate=function(n,i,a){if(!gl(i))throw Error(t(200));return _l(null,n,i,!0,a)},In.hydrateRoot=function(n,i,a){if(!Gu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,f=!1,m="",T=lm;if(a!=null&&(a.unstable_strictMode===!0&&(f=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(T=a.onRecoverableError)),i=om(i,null,n,1,a??null,f,!1,m,T),n[Pi]=i.current,Lo(n),c)for(n=0;n<c.length;n++)a=c[n],f=a._getVersion,f=f(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,f]:i.mutableSourceEagerHydrationData.push(a,f);return new ml(i)},In.render=function(n,i,a){if(!gl(i))throw Error(t(200));return _l(null,n,i,!1,a)},In.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(Hr(function(){_l(null,null,n,!1,function(){n._reactRootContainer=null,n[Pi]=null})}),!0):!1},In.unstable_batchedUpdates=Iu,In.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!gl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return _l(n,i,a,!1,c)},In.version="18.3.1-next-f1338f8080-20240426",In}var _m;function p0(){if(_m)return Xu.exports;_m=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Xu.exports=d0(),Xu.exports}var vm;function m0(){if(vm)return xl;vm=1;var s=p0();return xl.createRoot=s.createRoot,xl.hydrateRoot=s.hydrateRoot,xl}var g0=m0();const _0=Fg(g0);async function Rr(s){if(!s.ok){let e=`${s.status} ${s.statusText}`;try{const t=await s.json();t!=null&&t.detail&&(e=String(t.detail))}catch{}throw new Error(e)}return await s.json()}async function v0(){return Rr(await fetch("/api/health"))}async function x0(){return Rr(await fetch("/api/platform"))}async function y0(){return Rr(await fetch("/api/scripted"))}async function S0(s){return Rr(await fetch("/api/predict",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(s)}))}async function M0(s,e,t,r,o,l=21){return Rr(await fetch("/api/sweep",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:s,metal_name:e,axis:t,start:r,stop:o,steps:l})}))}async function E0(s,e,t=16,r=16,o=1){return Rr(await fetch("/api/keepout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({config:s,metal_name:e,nx:t,ny:r,threshold_db:o})}))}async function T0(){return Rr(await fetch("/api/report"))}async function w0(){return Rr(await fetch("/api/worker/restart",{method:"POST"}))}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Cf="171",to={ROTATE:0,DOLLY:1,PAN:2},Zs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},A0=0,xm=1,C0=2,Og=1,R0=2,Wi=3,Ar=0,kn=1,pi=2,Tr=0,no=1,ym=2,Sm=3,Mm=4,b0=5,Qr=100,P0=101,L0=102,D0=103,N0=104,I0=200,U0=201,F0=202,O0=203,Nh=204,Ih=205,k0=206,z0=207,B0=208,H0=209,V0=210,G0=211,W0=212,j0=213,X0=214,Uh=0,Fh=1,Oh=2,so=3,kh=4,zh=5,Bh=6,Hh=7,kg=0,Y0=1,q0=2,wr=0,$0=1,Z0=2,K0=3,J0=4,Q0=5,ex=6,tx=7,zg=300,oo=301,ao=302,Vh=303,Gh=304,lc=306,Wh=1e3,ns=1001,jh=1002,_i=1003,nx=1004,yl=1005,Ti=1006,$u=1007,is=1008,$i=1009,Bg=1010,Hg=1011,oa=1012,Rf=1013,rs=1014,Xi=1015,ua=1016,bf=1017,Pf=1018,lo=1020,Vg=35902,Gg=1021,Wg=1022,gi=1023,jg=1024,Xg=1025,io=1026,co=1027,Yg=1028,Lf=1029,qg=1030,Df=1031,Nf=1033,Zl=33776,Kl=33777,Jl=33778,Ql=33779,Xh=35840,Yh=35841,qh=35842,$h=35843,Zh=36196,Kh=37492,Jh=37496,Qh=37808,ef=37809,tf=37810,nf=37811,rf=37812,sf=37813,of=37814,af=37815,lf=37816,cf=37817,uf=37818,hf=37819,ff=37820,df=37821,ec=36492,pf=36494,mf=36495,$g=36283,gf=36284,_f=36285,vf=36286,ix=3200,rx=3201,Zg=0,sx=1,Er="",ti="srgb",uo="srgb-linear",ic="linear",Dt="srgb",Is=7680,Em=519,ox=512,ax=513,lx=514,Kg=515,cx=516,ux=517,hx=518,fx=519,Tm=35044,wm="300 es",Yi=2e3,rc=2001;class ls{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const r=this._listeners;return r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const o=this._listeners[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const r=this._listeners[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,xf=180/Math.PI;function po(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[r&255]+yn[r>>8&255]+yn[r>>16&255]+yn[r>>24&255]).toLowerCase()}function dt(s,e,t){return Math.max(e,Math.min(t,s))}function dx(s,e){return(s%e+e)%e}function Zu(s,e,t){return(1-t)*s+t*e}function Zo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Un(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const px={DEG2RAD:tc};class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ht{constructor(e,t,r,o,l,u,h,d,p){ht.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,d,p)}set(e,t,r,o,l,u,h,d,p){const g=this.elements;return g[0]=e,g[1]=o,g[2]=h,g[3]=t,g[4]=l,g[5]=d,g[6]=r,g[7]=u,g[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[3],d=r[6],p=r[1],g=r[4],_=r[7],x=r[2],S=r[5],E=r[8],w=o[0],y=o[3],v=o[6],D=o[1],b=o[4],A=o[7],W=o[2],I=o[5],O=o[8];return l[0]=u*w+h*D+d*W,l[3]=u*y+h*b+d*I,l[6]=u*v+h*A+d*O,l[1]=p*w+g*D+_*W,l[4]=p*y+g*b+_*I,l[7]=p*v+g*A+_*O,l[2]=x*w+S*D+E*W,l[5]=x*y+S*b+E*I,l[8]=x*v+S*A+E*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8];return t*u*g-t*h*p-r*l*g+r*h*d+o*l*p-o*u*d}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=g*u-h*p,x=h*d-g*l,S=p*l-u*d,E=t*_+r*x+o*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/E;return e[0]=_*w,e[1]=(o*p-g*r)*w,e[2]=(h*r-o*u)*w,e[3]=x*w,e[4]=(g*t-o*d)*w,e[5]=(o*l-h*t)*w,e[6]=S*w,e[7]=(r*d-p*t)*w,e[8]=(u*t-r*l)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,h){const d=Math.cos(l),p=Math.sin(l);return this.set(r*d,r*p,-r*(d*u+p*h)+u+e,-o*p,o*d,-o*(-p*u+d*h)+h+t,0,0,1),this}scale(e,t){return this.premultiply(Ku.makeScale(e,t)),this}rotate(e){return this.premultiply(Ku.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ku.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ku=new ht;function Jg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function sc(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function mx(){const s=sc("canvas");return s.style.display="block",s}const Am={};function $s(s){s in Am||(Am[s]=!0,console.warn(s))}function gx(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function _x(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function vx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Cm=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rm=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function xx(){const s={enabled:!0,workingColorSpace:uo,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Dt&&(o.r=qi(o.r),o.g=qi(o.g),o.b=qi(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Dt&&(o.r=ro(o.r),o.g=ro(o.g),o.b=ro(o.b))),o},fromWorkingColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},toWorkingColorSpace:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Er?ic:this.spaces[o].transfer},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[uo]:{primaries:e,whitePoint:r,transfer:ic,toXYZ:Cm,fromXYZ:Rm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Dt,toXYZ:Cm,fromXYZ:Rm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const Ct=xx();function qi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Us;class yx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Us===void 0&&(Us=sc("canvas")),Us.width=e.width,Us.height=e.height;const r=Us.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=Us}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=sc("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=qi(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(qi(t[r]/255)*255):t[r]=qi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Sx=0;class Qg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Sx++}),this.uuid=po(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,h=o.length;u<h;u++)o[u].isDataTexture?l.push(Ju(o[u].image)):l.push(Ju(o[u]))}else l=Ju(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ju(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?yx.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Mx=0;class zn extends ls{constructor(e=zn.DEFAULT_IMAGE,t=zn.DEFAULT_MAPPING,r=ns,o=ns,l=Ti,u=is,h=gi,d=$i,p=zn.DEFAULT_ANISOTROPY,g=Er){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Mx++}),this.uuid=po(),this.name="",this.source=new Qg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=h,this.internalFormat=null,this.type=d,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Wh:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case jh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Wh:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case jh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}zn.DEFAULT_IMAGE=null;zn.DEFAULT_MAPPING=zg;zn.DEFAULT_ANISOTROPY=1;class Yt{constructor(e=0,t=0,r=0,o=1){Yt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const d=e.elements,p=d[0],g=d[4],_=d[8],x=d[1],S=d[5],E=d[9],w=d[2],y=d[6],v=d[10];if(Math.abs(g-x)<.01&&Math.abs(_-w)<.01&&Math.abs(E-y)<.01){if(Math.abs(g+x)<.1&&Math.abs(_+w)<.1&&Math.abs(E+y)<.1&&Math.abs(p+S+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(p+1)/2,A=(S+1)/2,W=(v+1)/2,I=(g+x)/4,O=(_+w)/4,Y=(E+y)/4;return b>A&&b>W?b<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(b),o=I/r,l=O/r):A>W?A<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(A),r=I/o,l=Y/o):W<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(W),r=O/l,o=Y/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-E)*(y-E)+(_-w)*(_-w)+(x-g)*(x-g));return Math.abs(D)<.001&&(D=1),this.x=(y-E)/D,this.y=(_-w)/D,this.z=(x-g)/D,this.w=Math.acos((p+S+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this.w=dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this.w=dt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ex extends ls{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Yt(0,0,e,t),this.scissorTest=!1,this.viewport=new Yt(0,0,e,t);const o={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ti,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new zn(o,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let h=0;h<u;h++)this.textures[h]=l.clone(),this.textures[h].isRenderTargetTexture=!0;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,o=e.textures.length;r<o;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Qg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ss extends Ex{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class e_ extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tx extends zn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=_i,this.minFilter=_i,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class os{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,h){let d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];const x=l[u+0],S=l[u+1],E=l[u+2],w=l[u+3];if(h===0){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(h===1){e[t+0]=x,e[t+1]=S,e[t+2]=E,e[t+3]=w;return}if(_!==w||d!==x||p!==S||g!==E){let y=1-h;const v=d*x+p*S+g*E+_*w,D=v>=0?1:-1,b=1-v*v;if(b>Number.EPSILON){const W=Math.sqrt(b),I=Math.atan2(W,v*D);y=Math.sin(y*I)/W,h=Math.sin(h*I)/W}const A=h*D;if(d=d*y+x*A,p=p*y+S*A,g=g*y+E*A,_=_*y+w*A,y===1-h){const W=1/Math.sqrt(d*d+p*p+g*g+_*_);d*=W,p*=W,g*=W,_*=W}}e[t]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_}static multiplyQuaternionsFlat(e,t,r,o,l,u){const h=r[o],d=r[o+1],p=r[o+2],g=r[o+3],_=l[u],x=l[u+1],S=l[u+2],E=l[u+3];return e[t]=h*E+g*_+d*S-p*x,e[t+1]=d*E+g*x+p*_-h*S,e[t+2]=p*E+g*S+h*x-d*_,e[t+3]=g*E-h*_-d*x-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,h=Math.cos,d=Math.sin,p=h(r/2),g=h(o/2),_=h(l/2),x=d(r/2),S=d(o/2),E=d(l/2);switch(u){case"XYZ":this._x=x*g*_+p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_-x*S*E;break;case"YXZ":this._x=x*g*_+p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_+x*S*E;break;case"ZXY":this._x=x*g*_-p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_-x*S*E;break;case"ZYX":this._x=x*g*_-p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_+x*S*E;break;case"YZX":this._x=x*g*_+p*S*E,this._y=p*S*_+x*g*E,this._z=p*g*E-x*S*_,this._w=p*g*_-x*S*E;break;case"XZY":this._x=x*g*_-p*S*E,this._y=p*S*_-x*g*E,this._z=p*g*E+x*S*_,this._w=p*g*_+x*S*E;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],h=t[5],d=t[9],p=t[2],g=t[6],_=t[10],x=r+h+_;if(x>0){const S=.5/Math.sqrt(x+1);this._w=.25/S,this._x=(g-d)*S,this._y=(l-p)*S,this._z=(u-o)*S}else if(r>h&&r>_){const S=2*Math.sqrt(1+r-h-_);this._w=(g-d)/S,this._x=.25*S,this._y=(o+u)/S,this._z=(l+p)/S}else if(h>_){const S=2*Math.sqrt(1+h-r-_);this._w=(l-p)/S,this._x=(o+u)/S,this._y=.25*S,this._z=(d+g)/S}else{const S=2*Math.sqrt(1+_-r-h);this._w=(u-o)/S,this._x=(l+p)/S,this._y=(d+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,h=t._x,d=t._y,p=t._z,g=t._w;return this._x=r*g+u*h+o*p-l*d,this._y=o*g+u*d+l*h-r*p,this._z=l*g+u*p+r*d-o*h,this._w=u*g-r*h-o*d-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,o=this._y,l=this._z,u=this._w;let h=u*e._w+r*e._x+o*e._y+l*e._z;if(h<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,h=-h):this.copy(e),h>=1)return this._w=u,this._x=r,this._y=o,this._z=l,this;const d=1-h*h;if(d<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*o+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(d),g=Math.atan2(p,h),_=Math.sin((1-t)*g)/p,x=Math.sin(t*g)/p;return this._w=u*_+this._w*x,this._x=r*_+this._x*x,this._y=o*_+this._y*x,this._z=l*_+this._z*x,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,r=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,h=e.z,d=e.w,p=2*(u*o-h*r),g=2*(h*t-l*o),_=2*(l*r-u*t);return this.x=t+d*p+u*_-h*g,this.y=r+d*g+h*p-l*_,this.z=o+d*_+l*g-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=dt(this.x,e.x,t.x),this.y=dt(this.y,e.y,t.y),this.z=dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=dt(this.x,e,t),this.y=dt(this.y,e,t),this.z=dt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,h=t.y,d=t.z;return this.x=o*d-l*h,this.y=l*u-r*d,this.z=r*h-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Qu.copy(this).projectOnVector(e),this.sub(Qu)}reflect(e){return this.sub(Qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qu=new X,bm=new os;class ha{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(hi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(hi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=hi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,h=l.count;u<h;u++)e.isMesh===!0?e.getVertexPosition(u,hi):hi.fromBufferAttribute(l,u),hi.applyMatrix4(e.matrixWorld),this.expandByPoint(hi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Sl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Sl.copy(r.boundingBox)),Sl.applyMatrix4(e.matrixWorld),this.union(Sl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hi),hi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ko),Ml.subVectors(this.max,Ko),Fs.subVectors(e.a,Ko),Os.subVectors(e.b,Ko),ks.subVectors(e.c,Ko),_r.subVectors(Os,Fs),vr.subVectors(ks,Os),jr.subVectors(Fs,ks);let t=[0,-_r.z,_r.y,0,-vr.z,vr.y,0,-jr.z,jr.y,_r.z,0,-_r.x,vr.z,0,-vr.x,jr.z,0,-jr.x,-_r.y,_r.x,0,-vr.y,vr.x,0,-jr.y,jr.x,0];return!eh(t,Fs,Os,ks,Ml)||(t=[1,0,0,0,1,0,0,0,1],!eh(t,Fs,Os,ks,Ml))?!1:(El.crossVectors(_r,vr),t=[El.x,El.y,El.z],eh(t,Fs,Os,ks,Ml))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ki=[new X,new X,new X,new X,new X,new X,new X,new X],hi=new X,Sl=new ha,Fs=new X,Os=new X,ks=new X,_r=new X,vr=new X,jr=new X,Ko=new X,Ml=new X,El=new X,Xr=new X;function eh(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){Xr.fromArray(s,l);const h=o.x*Math.abs(Xr.x)+o.y*Math.abs(Xr.y)+o.z*Math.abs(Xr.z),d=e.dot(Xr),p=t.dot(Xr),g=r.dot(Xr);if(Math.max(-Math.max(d,p,g),Math.min(d,p,g))>h)return!1}return!0}const wx=new ha,Jo=new X,th=new X;class cc{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):wx.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(Jo,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(th.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(th)),this.expandByPoint(Jo.copy(e.center).sub(th))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const zi=new X,nh=new X,Tl=new X,xr=new X,ih=new X,wl=new X,rh=new X;class uc{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,zi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=zi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(zi.copy(this.origin).addScaledVector(this.direction,t),zi.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){nh.copy(e).add(t).multiplyScalar(.5),Tl.copy(t).sub(e).normalize(),xr.copy(this.origin).sub(nh);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Tl),h=xr.dot(this.direction),d=-xr.dot(Tl),p=xr.lengthSq(),g=Math.abs(1-u*u);let _,x,S,E;if(g>0)if(_=u*d-h,x=u*h-d,E=l*g,_>=0)if(x>=-E)if(x<=E){const w=1/g;_*=w,x*=w,S=_*(_+u*x+2*h)+x*(u*_+x+2*d)+p}else x=l,_=Math.max(0,-(u*x+h)),S=-_*_+x*(x+2*d)+p;else x=-l,_=Math.max(0,-(u*x+h)),S=-_*_+x*(x+2*d)+p;else x<=-E?(_=Math.max(0,-(-u*l+h)),x=_>0?-l:Math.min(Math.max(-l,-d),l),S=-_*_+x*(x+2*d)+p):x<=E?(_=0,x=Math.min(Math.max(-l,-d),l),S=x*(x+2*d)+p):(_=Math.max(0,-(u*l+h)),x=_>0?l:Math.min(Math.max(-l,-d),l),S=-_*_+x*(x+2*d)+p);else x=u>0?-l:l,_=Math.max(0,-(u*x+h)),S=-_*_+x*(x+2*d)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,_),o&&o.copy(nh).addScaledVector(Tl,x),S}intersectSphere(e,t){zi.subVectors(e.center,this.origin);const r=zi.dot(this.direction),o=zi.dot(zi)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),h=r-u,d=r+u;return d<0?null:h<0?this.at(d,t):this.at(h,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,h,d;const p=1/this.direction.x,g=1/this.direction.y,_=1/this.direction.z,x=this.origin;return p>=0?(r=(e.min.x-x.x)*p,o=(e.max.x-x.x)*p):(r=(e.max.x-x.x)*p,o=(e.min.x-x.x)*p),g>=0?(l=(e.min.y-x.y)*g,u=(e.max.y-x.y)*g):(l=(e.max.y-x.y)*g,u=(e.min.y-x.y)*g),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),_>=0?(h=(e.min.z-x.z)*_,d=(e.max.z-x.z)*_):(h=(e.max.z-x.z)*_,d=(e.min.z-x.z)*_),r>d||h>o)||((h>r||r!==r)&&(r=h),(d<o||o!==o)&&(o=d),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,zi)!==null}intersectTriangle(e,t,r,o,l){ih.subVectors(t,e),wl.subVectors(r,e),rh.crossVectors(ih,wl);let u=this.direction.dot(rh),h;if(u>0){if(o)return null;h=1}else if(u<0)h=-1,u=-u;else return null;xr.subVectors(this.origin,e);const d=h*this.direction.dot(wl.crossVectors(xr,wl));if(d<0)return null;const p=h*this.direction.dot(ih.cross(xr));if(p<0||d+p>u)return null;const g=-h*xr.dot(rh);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kt{constructor(e,t,r,o,l,u,h,d,p,g,_,x,S,E,w,y){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,h,d,p,g,_,x,S,E,w,y)}set(e,t,r,o,l,u,h,d,p,g,_,x,S,E,w,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=h,v[13]=d,v[2]=p,v[6]=g,v[10]=_,v[14]=x,v[3]=S,v[7]=E,v[11]=w,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,o=1/zs.setFromMatrixColumn(e,0).length(),l=1/zs.setFromMatrixColumn(e,1).length(),u=1/zs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),h=Math.sin(r),d=Math.cos(o),p=Math.sin(o),g=Math.cos(l),_=Math.sin(l);if(e.order==="XYZ"){const x=u*g,S=u*_,E=h*g,w=h*_;t[0]=d*g,t[4]=-d*_,t[8]=p,t[1]=S+E*p,t[5]=x-w*p,t[9]=-h*d,t[2]=w-x*p,t[6]=E+S*p,t[10]=u*d}else if(e.order==="YXZ"){const x=d*g,S=d*_,E=p*g,w=p*_;t[0]=x+w*h,t[4]=E*h-S,t[8]=u*p,t[1]=u*_,t[5]=u*g,t[9]=-h,t[2]=S*h-E,t[6]=w+x*h,t[10]=u*d}else if(e.order==="ZXY"){const x=d*g,S=d*_,E=p*g,w=p*_;t[0]=x-w*h,t[4]=-u*_,t[8]=E+S*h,t[1]=S+E*h,t[5]=u*g,t[9]=w-x*h,t[2]=-u*p,t[6]=h,t[10]=u*d}else if(e.order==="ZYX"){const x=u*g,S=u*_,E=h*g,w=h*_;t[0]=d*g,t[4]=E*p-S,t[8]=x*p+w,t[1]=d*_,t[5]=w*p+x,t[9]=S*p-E,t[2]=-p,t[6]=h*d,t[10]=u*d}else if(e.order==="YZX"){const x=u*d,S=u*p,E=h*d,w=h*p;t[0]=d*g,t[4]=w-x*_,t[8]=E*_+S,t[1]=_,t[5]=u*g,t[9]=-h*g,t[2]=-p*g,t[6]=S*_+E,t[10]=x-w*_}else if(e.order==="XZY"){const x=u*d,S=u*p,E=h*d,w=h*p;t[0]=d*g,t[4]=-_,t[8]=p*g,t[1]=x*_+w,t[5]=u*g,t[9]=S*_-E,t[2]=E*_-S,t[6]=h*g,t[10]=w*_+x}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Cx)}lookAt(e,t,r){const o=this.elements;return Wn.subVectors(e,t),Wn.lengthSq()===0&&(Wn.z=1),Wn.normalize(),yr.crossVectors(r,Wn),yr.lengthSq()===0&&(Math.abs(r.z)===1?Wn.x+=1e-4:Wn.z+=1e-4,Wn.normalize(),yr.crossVectors(r,Wn)),yr.normalize(),Al.crossVectors(Wn,yr),o[0]=yr.x,o[4]=Al.x,o[8]=Wn.x,o[1]=yr.y,o[5]=Al.y,o[9]=Wn.y,o[2]=yr.z,o[6]=Al.z,o[10]=Wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],h=r[4],d=r[8],p=r[12],g=r[1],_=r[5],x=r[9],S=r[13],E=r[2],w=r[6],y=r[10],v=r[14],D=r[3],b=r[7],A=r[11],W=r[15],I=o[0],O=o[4],Y=o[8],P=o[12],R=o[1],z=o[5],re=o[9],Q=o[13],de=o[2],pe=o[6],ce=o[10],ue=o[14],B=o[3],oe=o[7],se=o[11],F=o[15];return l[0]=u*I+h*R+d*de+p*B,l[4]=u*O+h*z+d*pe+p*oe,l[8]=u*Y+h*re+d*ce+p*se,l[12]=u*P+h*Q+d*ue+p*F,l[1]=g*I+_*R+x*de+S*B,l[5]=g*O+_*z+x*pe+S*oe,l[9]=g*Y+_*re+x*ce+S*se,l[13]=g*P+_*Q+x*ue+S*F,l[2]=E*I+w*R+y*de+v*B,l[6]=E*O+w*z+y*pe+v*oe,l[10]=E*Y+w*re+y*ce+v*se,l[14]=E*P+w*Q+y*ue+v*F,l[3]=D*I+b*R+A*de+W*B,l[7]=D*O+b*z+A*pe+W*oe,l[11]=D*Y+b*re+A*ce+W*se,l[15]=D*P+b*Q+A*ue+W*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],h=e[5],d=e[9],p=e[13],g=e[2],_=e[6],x=e[10],S=e[14],E=e[3],w=e[7],y=e[11],v=e[15];return E*(+l*d*_-o*p*_-l*h*x+r*p*x+o*h*S-r*d*S)+w*(+t*d*S-t*p*x+l*u*x-o*u*S+o*p*g-l*d*g)+y*(+t*p*_-t*h*S-l*u*_+r*u*S+l*h*g-r*p*g)+v*(-o*h*g-t*d*_+t*h*x+o*u*_-r*u*x+r*d*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],h=e[5],d=e[6],p=e[7],g=e[8],_=e[9],x=e[10],S=e[11],E=e[12],w=e[13],y=e[14],v=e[15],D=_*y*p-w*x*p+w*d*S-h*y*S-_*d*v+h*x*v,b=E*x*p-g*y*p-E*d*S+u*y*S+g*d*v-u*x*v,A=g*w*p-E*_*p+E*h*S-u*w*S-g*h*v+u*_*v,W=E*_*d-g*w*d-E*h*x+u*w*x+g*h*y-u*_*y,I=t*D+r*b+o*A+l*W;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const O=1/I;return e[0]=D*O,e[1]=(w*x*l-_*y*l-w*o*S+r*y*S+_*o*v-r*x*v)*O,e[2]=(h*y*l-w*d*l+w*o*p-r*y*p-h*o*v+r*d*v)*O,e[3]=(_*d*l-h*x*l-_*o*p+r*x*p+h*o*S-r*d*S)*O,e[4]=b*O,e[5]=(g*y*l-E*x*l+E*o*S-t*y*S-g*o*v+t*x*v)*O,e[6]=(E*d*l-u*y*l-E*o*p+t*y*p+u*o*v-t*d*v)*O,e[7]=(u*x*l-g*d*l+g*o*p-t*x*p-u*o*S+t*d*S)*O,e[8]=A*O,e[9]=(E*_*l-g*w*l-E*r*S+t*w*S+g*r*v-t*_*v)*O,e[10]=(u*w*l-E*h*l+E*r*p-t*w*p-u*r*v+t*h*v)*O,e[11]=(g*h*l-u*_*l-g*r*p+t*_*p+u*r*S-t*h*S)*O,e[12]=W*O,e[13]=(g*w*o-E*_*o+E*r*x-t*w*x-g*r*y+t*_*y)*O,e[14]=(E*h*o-u*w*o-E*r*d+t*w*d+u*r*y-t*h*y)*O,e[15]=(u*_*o-g*h*o+g*r*d-t*_*d-u*r*x+t*h*x)*O,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,h=e.y,d=e.z,p=l*u,g=l*h;return this.set(p*u+r,p*h-o*d,p*d+o*h,0,p*h+o*d,g*h+r,g*d-o*u,0,p*d-o*h,g*d+o*u,l*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,h=t._z,d=t._w,p=l+l,g=u+u,_=h+h,x=l*p,S=l*g,E=l*_,w=u*g,y=u*_,v=h*_,D=d*p,b=d*g,A=d*_,W=r.x,I=r.y,O=r.z;return o[0]=(1-(w+v))*W,o[1]=(S+A)*W,o[2]=(E-b)*W,o[3]=0,o[4]=(S-A)*I,o[5]=(1-(x+v))*I,o[6]=(y+D)*I,o[7]=0,o[8]=(E+b)*O,o[9]=(y-D)*O,o[10]=(1-(x+w))*O,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;let l=zs.set(o[0],o[1],o[2]).length();const u=zs.set(o[4],o[5],o[6]).length(),h=zs.set(o[8],o[9],o[10]).length();this.determinant()<0&&(l=-l),e.x=o[12],e.y=o[13],e.z=o[14],fi.copy(this);const p=1/l,g=1/u,_=1/h;return fi.elements[0]*=p,fi.elements[1]*=p,fi.elements[2]*=p,fi.elements[4]*=g,fi.elements[5]*=g,fi.elements[6]*=g,fi.elements[8]*=_,fi.elements[9]*=_,fi.elements[10]*=_,t.setFromRotationMatrix(fi),r.x=l,r.y=u,r.z=h,this}makePerspective(e,t,r,o,l,u,h=Yi){const d=this.elements,p=2*l/(t-e),g=2*l/(r-o),_=(t+e)/(t-e),x=(r+o)/(r-o);let S,E;if(h===Yi)S=-(u+l)/(u-l),E=-2*u*l/(u-l);else if(h===rc)S=-u/(u-l),E=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return d[0]=p,d[4]=0,d[8]=_,d[12]=0,d[1]=0,d[5]=g,d[9]=x,d[13]=0,d[2]=0,d[6]=0,d[10]=S,d[14]=E,d[3]=0,d[7]=0,d[11]=-1,d[15]=0,this}makeOrthographic(e,t,r,o,l,u,h=Yi){const d=this.elements,p=1/(t-e),g=1/(r-o),_=1/(u-l),x=(t+e)*p,S=(r+o)*g;let E,w;if(h===Yi)E=(u+l)*_,w=-2*_;else if(h===rc)E=l*_,w=-1*_;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return d[0]=2*p,d[4]=0,d[8]=0,d[12]=-x,d[1]=0,d[5]=2*g,d[9]=0,d[13]=-S,d[2]=0,d[6]=0,d[10]=w,d[14]=-E,d[3]=0,d[7]=0,d[11]=0,d[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const zs=new X,fi=new kt,Ax=new X(0,0,0),Cx=new X(1,1,1),yr=new X,Al=new X,Wn=new X,Pm=new kt,Lm=new os;class Ai{constructor(e=0,t=0,r=0,o=Ai.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],h=o[8],d=o[1],p=o[5],g=o[9],_=o[2],x=o[6],S=o[10];switch(t){case"XYZ":this._y=Math.asin(dt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(x,p),this._z=0);break;case"YXZ":this._x=Math.asin(-dt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(d,p)):(this._y=Math.atan2(-_,l),this._z=0);break;case"ZXY":this._x=Math.asin(dt(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(-_,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(d,l));break;case"ZYX":this._y=Math.asin(-dt(_,-1,1)),Math.abs(_)<.9999999?(this._x=Math.atan2(x,S),this._z=Math.atan2(d,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-g,p),this._y=Math.atan2(-_,l)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(x,p),this._y=Math.atan2(h,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Lm.setFromEuler(this),this.setFromQuaternion(Lm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ai.DEFAULT_ORDER="XYZ";class If{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Rx=0;const Dm=new X,Bs=new os,Bi=new kt,Cl=new X,Qo=new X,bx=new X,Px=new os,Nm=new X(1,0,0),Im=new X(0,1,0),Um=new X(0,0,1),Fm={type:"added"},Lx={type:"removed"},Hs={type:"childadded",child:null},sh={type:"childremoved",child:null};class fn extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rx++}),this.uuid=po(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=fn.DEFAULT_UP.clone();const e=new X,t=new Ai,r=new os,o=new X(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new kt},normalMatrix:{value:new ht}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=fn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new If,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Nm,e)}rotateY(e){return this.rotateOnAxis(Im,e)}rotateZ(e){return this.rotateOnAxis(Um,e)}translateOnAxis(e,t){return Dm.copy(e).applyQuaternion(this.quaternion),this.position.add(Dm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Nm,e)}translateY(e){return this.translateOnAxis(Im,e)}translateZ(e){return this.translateOnAxis(Um,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Cl.copy(e):Cl.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),Qo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(Qo,Cl,this.up):Bi.lookAt(Cl,Qo,this.up),this.quaternion.setFromRotationMatrix(Bi),o&&(Bi.extractRotation(o.matrixWorld),Bs.setFromRotationMatrix(Bi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fm),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lx),sh.child=e,this.dispatchEvent(sh),sh.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fm),Hs.child=e,this.dispatchEvent(Hs),Hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,e,bx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qo,Px,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.visibility=this._visibility,o.active=this._active,o.bounds=this._bounds.map(h=>({boxInitialized:h.boxInitialized,boxMin:h.box.min.toArray(),boxMax:h.box.max.toArray(),sphereInitialized:h.sphereInitialized,sphereRadius:h.sphere.radius,sphereCenter:h.sphere.center.toArray()})),o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.geometryCount=this._geometryCount,o.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere={center:o.boundingSphere.center.toArray(),radius:o.boundingSphere.radius}),this.boundingBox!==null&&(o.boundingBox={min:o.boundingBox.min.toArray(),max:o.boundingBox.max.toArray()}));function l(h,d){return h[d.uuid]===void 0&&(h[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const d=h.shapes;if(Array.isArray(d))for(let p=0,g=d.length;p<g;p++){const _=d[p];l(e.shapes,_)}else l(e.shapes,d)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let d=0,p=this.material.length;d<p;d++)h.push(l(e.materials,this.material[d]));o.material=h}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let h=0;h<this.children.length;h++)o.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let h=0;h<this.animations.length;h++){const d=this.animations[h];o.animations.push(l(e.animations,d))}}if(t){const h=u(e.geometries),d=u(e.materials),p=u(e.textures),g=u(e.images),_=u(e.shapes),x=u(e.skeletons),S=u(e.animations),E=u(e.nodes);h.length>0&&(r.geometries=h),d.length>0&&(r.materials=d),p.length>0&&(r.textures=p),g.length>0&&(r.images=g),_.length>0&&(r.shapes=_),x.length>0&&(r.skeletons=x),S.length>0&&(r.animations=S),E.length>0&&(r.nodes=E)}return r.object=o,r;function u(h){const d=[];for(const p in h){const g=h[p];delete g.metadata,d.push(g)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}fn.DEFAULT_UP=new X(0,1,0);fn.DEFAULT_MATRIX_AUTO_UPDATE=!0;fn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new X,Hi=new X,oh=new X,Vi=new X,Vs=new X,Gs=new X,Om=new X,ah=new X,lh=new X,ch=new X,uh=new Yt,hh=new Yt,fh=new Yt;class mi{constructor(e=new X,t=new X,r=new X){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),di.subVectors(e,t),o.cross(di);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){di.subVectors(o,t),Hi.subVectors(r,t),oh.subVectors(e,t);const u=di.dot(di),h=di.dot(Hi),d=di.dot(oh),p=Hi.dot(Hi),g=Hi.dot(oh),_=u*p-h*h;if(_===0)return l.set(0,0,0),null;const x=1/_,S=(p*d-h*g)*x,E=(u*g-h*d)*x;return l.set(1-S-E,E,S)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,t,r,o,l,u,h,d){return this.getBarycoord(e,t,r,o,Vi)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(l,Vi.x),d.addScaledVector(u,Vi.y),d.addScaledVector(h,Vi.z),d)}static getInterpolatedAttribute(e,t,r,o,l,u){return uh.setScalar(0),hh.setScalar(0),fh.setScalar(0),uh.fromBufferAttribute(e,t),hh.fromBufferAttribute(e,r),fh.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(uh,l.x),u.addScaledVector(hh,l.y),u.addScaledVector(fh,l.z),u}static isFrontFacing(e,t,r,o){return di.subVectors(r,t),Hi.subVectors(e,t),di.cross(Hi).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),Hi.subVectors(this.a,this.b),di.cross(Hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return mi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return mi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return mi.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return mi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return mi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,h;Vs.subVectors(o,r),Gs.subVectors(l,r),ah.subVectors(e,r);const d=Vs.dot(ah),p=Gs.dot(ah);if(d<=0&&p<=0)return t.copy(r);lh.subVectors(e,o);const g=Vs.dot(lh),_=Gs.dot(lh);if(g>=0&&_<=g)return t.copy(o);const x=d*_-g*p;if(x<=0&&d>=0&&g<=0)return u=d/(d-g),t.copy(r).addScaledVector(Vs,u);ch.subVectors(e,l);const S=Vs.dot(ch),E=Gs.dot(ch);if(E>=0&&S<=E)return t.copy(l);const w=S*p-d*E;if(w<=0&&p>=0&&E<=0)return h=p/(p-E),t.copy(r).addScaledVector(Gs,h);const y=g*E-S*_;if(y<=0&&_-g>=0&&S-E>=0)return Om.subVectors(l,o),h=(_-g)/(_-g+(S-E)),t.copy(o).addScaledVector(Om,h);const v=1/(y+w+x);return u=w*v,h=x*v,t.copy(r).addScaledVector(Vs,u).addScaledVector(Gs,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const t_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},Rl={h:0,s:0,l:0};function dh(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class St{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.toWorkingColorSpace(this,t),this}setRGB(e,t,r,o=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=r,Ct.toWorkingColorSpace(this,o),this}setHSL(e,t,r,o=Ct.workingColorSpace){if(e=dx(e,1),t=dt(t,0,1),r=dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=dh(u,l,e+1/3),this.g=dh(u,l,e),this.b=dh(u,l,e-1/3)}return Ct.toWorkingColorSpace(this,o),this}setStyle(e,t=ti){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],h=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(h))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const r=t_[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=ro(e.r),this.g=ro(e.g),this.b=ro(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return Ct.fromWorkingColorSpace(Sn.copy(this),e),Math.round(dt(Sn.r*255,0,255))*65536+Math.round(dt(Sn.g*255,0,255))*256+Math.round(dt(Sn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.fromWorkingColorSpace(Sn.copy(this),t);const r=Sn.r,o=Sn.g,l=Sn.b,u=Math.max(r,o,l),h=Math.min(r,o,l);let d,p;const g=(h+u)/2;if(h===u)d=0,p=0;else{const _=u-h;switch(p=g<=.5?_/(u+h):_/(2-u-h),u){case r:d=(o-l)/_+(o<l?6:0);break;case o:d=(l-r)/_+2;break;case l:d=(r-o)/_+4;break}d/=6}return e.h=d,e.s=p,e.l=g,e}getRGB(e,t=Ct.workingColorSpace){return Ct.fromWorkingColorSpace(Sn.copy(this),t),e.r=Sn.r,e.g=Sn.g,e.b=Sn.b,e}getStyle(e=ti){Ct.fromWorkingColorSpace(Sn.copy(this),e);const t=Sn.r,r=Sn.g,o=Sn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(Rl);const r=Zu(Sr.h,Rl.h,t),o=Zu(Sr.s,Rl.s,t),l=Zu(Sr.l,Rl.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Sn=new St;St.NAMES=t_;let Dx=0;class mo extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Dx++}),this.uuid=po(),this.name="",this.type="Material",this.blending=no,this.side=Ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nh,this.blendDst=Ih,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=so,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==no&&(r.blending=this.blending),this.side!==Ar&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Nh&&(r.blendSrc=this.blendSrc),this.blendDst!==Ih&&(r.blendDst=this.blendDst),this.blendEquation!==Qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==so&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const h in l){const d=l[h];delete d.metadata,u.push(d)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class n_ extends mo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=kg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kt=new X,bl=new Fe;class wi{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Tm,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)bl.fromBufferAttribute(this,t),bl.applyMatrix3(e),this.setXY(t,bl.x,bl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix3(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyMatrix4(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.applyNormalMatrix(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Kt.fromBufferAttribute(this,t),Kt.transformDirection(e),this.setXYZ(t,Kt.x,Kt.y,Kt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Zo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Un(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Zo(t,this.array)),t}setX(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Zo(t,this.array)),t}setY(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Zo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Zo(t,this.array)),t}setW(e,t){return this.normalized&&(t=Un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=Un(t,this.array),r=Un(r,this.array),o=Un(o,this.array),l=Un(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tm&&(e.usage=this.usage),e}}class i_ extends wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class r_ extends wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class dn extends wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Nx=0;const ei=new kt,ph=new fn,Ws=new X,jn=new ha,ea=new ha,ln=new X;class ii extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nx++}),this.uuid=po(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jg(e)?r_:i_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ht().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return ph.lookAt(e),ph.updateMatrix(),this.applyMatrix4(ph.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ws).negate(),this.translate(Ws.x,Ws.y,Ws.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new dn(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ha);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];jn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,jn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,jn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(jn.min),this.boundingBox.expandByPoint(jn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new cc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const r=this.boundingSphere.center;if(jn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const h=t[l];ea.setFromBufferAttribute(h),this.morphTargetsRelative?(ln.addVectors(jn.min,ea.min),jn.expandByPoint(ln),ln.addVectors(jn.max,ea.max),jn.expandByPoint(ln)):(jn.expandByPoint(ea.min),jn.expandByPoint(ea.max))}jn.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const h=t[l],d=this.morphTargetsRelative;for(let p=0,g=h.count;p<g;p++)ln.fromBufferAttribute(h,p),d&&(Ws.fromBufferAttribute(e,p),ln.add(Ws)),o=Math.max(o,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wi(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),h=[],d=[];for(let Y=0;Y<r.count;Y++)h[Y]=new X,d[Y]=new X;const p=new X,g=new X,_=new X,x=new Fe,S=new Fe,E=new Fe,w=new X,y=new X;function v(Y,P,R){p.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,P),_.fromBufferAttribute(r,R),x.fromBufferAttribute(l,Y),S.fromBufferAttribute(l,P),E.fromBufferAttribute(l,R),g.sub(p),_.sub(p),S.sub(x),E.sub(x);const z=1/(S.x*E.y-E.x*S.y);isFinite(z)&&(w.copy(g).multiplyScalar(E.y).addScaledVector(_,-S.y).multiplyScalar(z),y.copy(_).multiplyScalar(S.x).addScaledVector(g,-E.x).multiplyScalar(z),h[Y].add(w),h[P].add(w),h[R].add(w),d[Y].add(y),d[P].add(y),d[R].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let Y=0,P=D.length;Y<P;++Y){const R=D[Y],z=R.start,re=R.count;for(let Q=z,de=z+re;Q<de;Q+=3)v(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const b=new X,A=new X,W=new X,I=new X;function O(Y){W.fromBufferAttribute(o,Y),I.copy(W);const P=h[Y];b.copy(P),b.sub(W.multiplyScalar(W.dot(P))).normalize(),A.crossVectors(I,P);const z=A.dot(d[Y])<0?-1:1;u.setXYZW(Y,b.x,b.y,b.z,z)}for(let Y=0,P=D.length;Y<P;++Y){const R=D[Y],z=R.start,re=R.count;for(let Q=z,de=z+re;Q<de;Q+=3)O(e.getX(Q+0)),O(e.getX(Q+1)),O(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let x=0,S=r.count;x<S;x++)r.setXYZ(x,0,0,0);const o=new X,l=new X,u=new X,h=new X,d=new X,p=new X,g=new X,_=new X;if(e)for(let x=0,S=e.count;x<S;x+=3){const E=e.getX(x+0),w=e.getX(x+1),y=e.getX(x+2);o.fromBufferAttribute(t,E),l.fromBufferAttribute(t,w),u.fromBufferAttribute(t,y),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),h.fromBufferAttribute(r,E),d.fromBufferAttribute(r,w),p.fromBufferAttribute(r,y),h.add(g),d.add(g),p.add(g),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(w,d.x,d.y,d.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let x=0,S=t.count;x<S;x+=3)o.fromBufferAttribute(t,x+0),l.fromBufferAttribute(t,x+1),u.fromBufferAttribute(t,x+2),g.subVectors(u,l),_.subVectors(o,l),g.cross(_),r.setXYZ(x+0,g.x,g.y,g.z),r.setXYZ(x+1,g.x,g.y,g.z),r.setXYZ(x+2,g.x,g.y,g.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(h,d){const p=h.array,g=h.itemSize,_=h.normalized,x=new p.constructor(d.length*g);let S=0,E=0;for(let w=0,y=d.length;w<y;w++){h.isInterleavedBufferAttribute?S=d[w]*h.data.stride+h.offset:S=d[w]*g;for(let v=0;v<g;v++)x[E++]=p[S++]}return new wi(x,g,_)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,r=this.index.array,o=this.attributes;for(const h in o){const d=o[h],p=e(d,r);t.setAttribute(h,p)}const l=this.morphAttributes;for(const h in l){const d=[],p=l[h];for(let g=0,_=p.length;g<_;g++){const x=p[g],S=e(x,r);d.push(S)}t.morphAttributes[h]=d}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let h=0,d=u.length;h<d;h++){const p=u[h];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const d=this.parameters;for(const p in d)d[p]!==void 0&&(e[p]=d[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const p=r[d];e.data.attributes[d]=p.toJSON(e.data)}const o={};let l=!1;for(const d in this.morphAttributes){const p=this.morphAttributes[d],g=[];for(let _=0,x=p.length;_<x;_++){const S=p[_];g.push(S.toJSON(e.data))}g.length>0&&(o[d]=g,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere={center:h.center.toArray(),radius:h.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const o=e.attributes;for(const p in o){const g=o[p];this.setAttribute(p,g.clone(t))}const l=e.morphAttributes;for(const p in l){const g=[],_=l[p];for(let x=0,S=_.length;x<S;x++)g.push(_[x].clone(t));this.morphAttributes[p]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,g=u.length;p<g;p++){const _=u[p];this.addGroup(_.start,_.count,_.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const km=new kt,Yr=new uc,Pl=new cc,zm=new X,Ll=new X,Dl=new X,Nl=new X,mh=new X,Il=new X,Bm=new X,Ul=new X;class Yn extends fn{constructor(e=new ii,t=new n_){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const h=this.morphTargetInfluences;if(l&&h){Il.set(0,0,0);for(let d=0,p=l.length;d<p;d++){const g=h[d],_=l[d];g!==0&&(mh.fromBufferAttribute(_,e),u?Il.addScaledVector(mh,g):Il.addScaledVector(mh.sub(t),g))}t.add(Il)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Pl.copy(r.boundingSphere),Pl.applyMatrix4(l),Yr.copy(e.ray).recast(e.near),!(Pl.containsPoint(Yr.origin)===!1&&(Yr.intersectSphere(Pl,zm)===null||Yr.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(km.copy(l).invert(),Yr.copy(e.ray).applyMatrix4(km),!(r.boundingBox!==null&&Yr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Yr)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,h=l.index,d=l.attributes.position,p=l.attributes.uv,g=l.attributes.uv1,_=l.attributes.normal,x=l.groups,S=l.drawRange;if(h!==null)if(Array.isArray(u))for(let E=0,w=x.length;E<w;E++){const y=x[E],v=u[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let A=D,W=b;A<W;A+=3){const I=h.getX(A),O=h.getX(A+1),Y=h.getX(A+2);o=Fl(this,v,e,r,p,g,_,I,O,Y),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(h.count,S.start+S.count);for(let y=E,v=w;y<v;y+=3){const D=h.getX(y),b=h.getX(y+1),A=h.getX(y+2);o=Fl(this,u,e,r,p,g,_,D,b,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(d!==void 0)if(Array.isArray(u))for(let E=0,w=x.length;E<w;E++){const y=x[E],v=u[y.materialIndex],D=Math.max(y.start,S.start),b=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let A=D,W=b;A<W;A+=3){const I=A,O=A+1,Y=A+2;o=Fl(this,v,e,r,p,g,_,I,O,Y),o&&(o.faceIndex=Math.floor(A/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const E=Math.max(0,S.start),w=Math.min(d.count,S.start+S.count);for(let y=E,v=w;y<v;y+=3){const D=y,b=y+1,A=y+2;o=Fl(this,u,e,r,p,g,_,D,b,A),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function Ix(s,e,t,r,o,l,u,h){let d;if(e.side===kn?d=r.intersectTriangle(u,l,o,!0,h):d=r.intersectTriangle(o,l,u,e.side===Ar,h),d===null)return null;Ul.copy(h),Ul.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ul);return p<t.near||p>t.far?null:{distance:p,point:Ul.clone(),object:s}}function Fl(s,e,t,r,o,l,u,h,d,p){s.getVertexPosition(h,Ll),s.getVertexPosition(d,Dl),s.getVertexPosition(p,Nl);const g=Ix(s,e,t,r,Ll,Dl,Nl,Bm);if(g){const _=new X;mi.getBarycoord(Bm,Ll,Dl,Nl,_),o&&(g.uv=mi.getInterpolatedAttribute(o,h,d,p,_,new Fe)),l&&(g.uv1=mi.getInterpolatedAttribute(l,h,d,p,_,new Fe)),u&&(g.normal=mi.getInterpolatedAttribute(u,h,d,p,_,new X),g.normal.dot(r.direction)>0&&g.normal.multiplyScalar(-1));const x={a:h,b:d,c:p,normal:new X,materialIndex:0};mi.getNormal(Ll,Dl,Nl,x.normal),g.face=x,g.barycoord=_}return g}class go extends ii{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const h=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const d=[],p=[],g=[],_=[];let x=0,S=0;E("z","y","x",-1,-1,r,t,e,u,l,0),E("z","y","x",1,-1,r,t,-e,u,l,1),E("x","z","y",1,1,e,r,t,o,u,2),E("x","z","y",1,-1,e,r,-t,o,u,3),E("x","y","z",1,-1,e,t,r,o,l,4),E("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(d),this.setAttribute("position",new dn(p,3)),this.setAttribute("normal",new dn(g,3)),this.setAttribute("uv",new dn(_,2));function E(w,y,v,D,b,A,W,I,O,Y,P){const R=A/O,z=W/Y,re=A/2,Q=W/2,de=I/2,pe=O+1,ce=Y+1;let ue=0,B=0;const oe=new X;for(let se=0;se<ce;se++){const F=se*z-Q;for(let te=0;te<pe;te++){const we=te*R-re;oe[w]=we*D,oe[y]=F*b,oe[v]=de,p.push(oe.x,oe.y,oe.z),oe[w]=0,oe[y]=0,oe[v]=I>0?1:-1,g.push(oe.x,oe.y,oe.z),_.push(te/O),_.push(1-se/Y),ue+=1}}for(let se=0;se<Y;se++)for(let F=0;F<O;F++){const te=x+F+pe*se,we=x+F+pe*(se+1),Z=x+(F+1)+pe*(se+1),le=x+(F+1)+pe*se;d.push(te,we,le),d.push(we,Z,le),B+=6}h.addGroup(S,B,P),S+=B,x+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new go(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ho(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];o&&(o.isColor||o.isMatrix3||o.isMatrix4||o.isVector2||o.isVector3||o.isVector4||o.isTexture||o.isQuaternion)?o.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone():Array.isArray(o)?e[t][r]=o.slice():e[t][r]=o}}return e}function Cn(s){const e={};for(let t=0;t<s.length;t++){const r=ho(s[t]);for(const o in r)e[o]=r[o]}return e}function Ux(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function s_(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const Fx={clone:ho,merge:Cn};var Ox=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,kx=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cr extends mo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ox,this.fragmentShader=kx,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ho(e.uniforms),this.uniformsGroups=Ux(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class o_ extends fn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new X,Hm=new Fe,Vm=new Fe;class ni extends o_{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xf*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,Hm,Vm),t.subVectors(Vm,Hm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const d=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/d,t-=u.offsetY*r/p,o*=u.width/d,r*=u.height/p}const h=this.filmOffset;h!==0&&(l+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Xs=1;class zx extends fn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new ni(js,Xs,e,t);o.layers=this.layers,this.add(o);const l=new ni(js,Xs,e,t);l.layers=this.layers,this.add(l);const u=new ni(js,Xs,e,t);u.layers=this.layers,this.add(u);const h=new ni(js,Xs,e,t);h.layers=this.layers,this.add(h);const d=new ni(js,Xs,e,t);d.layers=this.layers,this.add(d);const p=new ni(js,Xs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,h,d]=t;for(const p of t)this.remove(p);if(e===Yi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===rc)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,h,d,p,g]=this.children,_=e.getRenderTarget(),x=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,o),e.render(t,l),e.setRenderTarget(r,1,o),e.render(t,u),e.setRenderTarget(r,2,o),e.render(t,h),e.setRenderTarget(r,3,o),e.render(t,d),e.setRenderTarget(r,4,o),e.render(t,p),r.texture.generateMipmaps=w,e.setRenderTarget(r,5,o),e.render(t,g),e.setRenderTarget(_,x,S),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class a_ extends zn{constructor(e,t,r,o,l,u,h,d,p,g){e=e!==void 0?e:[],t=t!==void 0?t:oo,super(e,t,r,o,l,u,h,d,p,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Bx extends ss{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new a_(o,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ti}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new go(5,5,5),l=new Cr({name:"CubemapFromEquirect",uniforms:ho(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:kn,blending:Tr});l.uniforms.tEquirect.value=t;const u=new Yn(o,l),h=t.minFilter;return t.minFilter===is&&(t.minFilter=Ti),new zx(1,10,this).update(e,u),t.minFilter=h,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,o){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}class Hx extends fn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gh=new X,Vx=new X,Gx=new ht;class ji{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=gh.subVectors(r,t).cross(Vx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(gh),o=this.normal.dot(r);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/o;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||Gx.getNormalMatrix(e),o=this.coplanarPoint(gh).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const qr=new cc,Ol=new X;class Uf{constructor(e=new ji,t=new ji,r=new ji,o=new ji,l=new ji,u=new ji){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(o),h[4].copy(l),h[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Yi){const r=this.planes,o=e.elements,l=o[0],u=o[1],h=o[2],d=o[3],p=o[4],g=o[5],_=o[6],x=o[7],S=o[8],E=o[9],w=o[10],y=o[11],v=o[12],D=o[13],b=o[14],A=o[15];if(r[0].setComponents(d-l,x-p,y-S,A-v).normalize(),r[1].setComponents(d+l,x+p,y+S,A+v).normalize(),r[2].setComponents(d+u,x+g,y+E,A+D).normalize(),r[3].setComponents(d-u,x-g,y-E,A-D).normalize(),r[4].setComponents(d-h,x-_,y-w,A-b).normalize(),t===Yi)r[5].setComponents(d+h,x+_,y+w,A+b).normalize();else if(t===rc)r[5].setComponents(h,_,w,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),qr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){return qr.center.set(0,0,0),qr.radius=.7071067811865476,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Ol.x=o.normal.x>0?e.max.x:e.min.x,Ol.y=o.normal.y>0?e.max.y:e.min.y,Ol.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ff extends mo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const oc=new X,ac=new X,Gm=new kt,ta=new uc,kl=new cc,_h=new X,Wm=new X;class Wx extends fn{constructor(e=new ii,t=new Ff){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)oc.fromBufferAttribute(t,o-1),ac.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=oc.distanceTo(ac);e.setAttribute("lineDistance",new dn(r,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=l,e.ray.intersectsSphere(kl)===!1)return;Gm.copy(o).invert(),ta.copy(e.ray).applyMatrix4(Gm);const h=l/((this.scale.x+this.scale.y+this.scale.z)/3),d=h*h,p=this.isLineSegments?2:1,g=r.index,x=r.attributes.position;if(g!==null){const S=Math.max(0,u.start),E=Math.min(g.count,u.start+u.count);for(let w=S,y=E-1;w<y;w+=p){const v=g.getX(w),D=g.getX(w+1),b=zl(this,e,ta,d,v,D);b&&t.push(b)}if(this.isLineLoop){const w=g.getX(E-1),y=g.getX(S),v=zl(this,e,ta,d,w,y);v&&t.push(v)}}else{const S=Math.max(0,u.start),E=Math.min(x.count,u.start+u.count);for(let w=S,y=E-1;w<y;w+=p){const v=zl(this,e,ta,d,w,w+1);v&&t.push(v)}if(this.isLineLoop){const w=zl(this,e,ta,d,E-1,S);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const h=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=l}}}}}function zl(s,e,t,r,o,l){const u=s.geometry.attributes.position;if(oc.fromBufferAttribute(u,o),ac.fromBufferAttribute(u,l),t.distanceSqToSegment(oc,ac,_h,Wm)>r)return;_h.applyMatrix4(s.matrixWorld);const d=e.ray.origin.distanceTo(_h);if(!(d<e.near||d>e.far))return{distance:d,point:Wm.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}const jm=new X,Xm=new X;class l_ extends Wx{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)jm.fromBufferAttribute(t,o),Xm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+jm.distanceTo(Xm);e.setAttribute("lineDistance",new dn(r,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ks extends fn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class c_ extends zn{constructor(e,t,r,o,l,u,h,d,p,g=io){if(g!==io&&g!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&g===io&&(r=rs),r===void 0&&g===co&&(r=lo),super(null,o,l,u,h,d,g,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=h!==void 0?h:_i,this.minFilter=d!==void 0?d:_i,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Ci{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let h=0,d=l-1,p;for(;h<=d;)if(o=Math.floor(h+(d-h)/2),p=r[o]-u,p<0)h=o+1;else if(p>0)d=o-1;else{d=o;break}if(o=d,r[o]===u)return o/(l-1);const g=r[o],x=r[o+1]-g,S=(u-g)/x;return(o+S)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),h=this.getPoint(l),d=t||(u.isVector2?new Fe:new X);return d.copy(h).sub(u).normalize(),d}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t){const r=new X,o=[],l=[],u=[],h=new X,d=new kt;for(let S=0;S<=e;S++){const E=S/e;o[S]=this.getTangentAt(E,new X)}l[0]=new X,u[0]=new X;let p=Number.MAX_VALUE;const g=Math.abs(o[0].x),_=Math.abs(o[0].y),x=Math.abs(o[0].z);g<=p&&(p=g,r.set(1,0,0)),_<=p&&(p=_,r.set(0,1,0)),x<=p&&r.set(0,0,1),h.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],h),u[0].crossVectors(o[0],l[0]);for(let S=1;S<=e;S++){if(l[S]=l[S-1].clone(),u[S]=u[S-1].clone(),h.crossVectors(o[S-1],o[S]),h.length()>Number.EPSILON){h.normalize();const E=Math.acos(dt(o[S-1].dot(o[S]),-1,1));l[S].applyMatrix4(d.makeRotationAxis(h,E))}u[S].crossVectors(o[S],l[S])}if(t===!0){let S=Math.acos(dt(l[0].dot(l[e]),-1,1));S/=e,o[0].dot(h.crossVectors(l[0],l[e]))>0&&(S=-S);for(let E=1;E<=e;E++)l[E].applyMatrix4(d.makeRotationAxis(o[E],S*E)),u[E].crossVectors(o[E],l[E])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class Of extends Ci{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,h=!1,d=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=h,this.aRotation=d}getPoint(e,t=new Fe){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const h=this.aStartAngle+e*l;let d=this.aX+this.xRadius*Math.cos(h),p=this.aY+this.yRadius*Math.sin(h);if(this.aRotation!==0){const g=Math.cos(this.aRotation),_=Math.sin(this.aRotation),x=d-this.aX,S=p-this.aY;d=x*g-S*_+this.aX,p=x*_+S*g+this.aY}return r.set(d,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class jx extends Of{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function kf(){let s=0,e=0,t=0,r=0;function o(l,u,h,d){s=l,e=h,t=-3*l+3*u-2*h-d,r=2*l-2*u+h+d}return{initCatmullRom:function(l,u,h,d,p){o(u,h,p*(h-l),p*(d-u))},initNonuniformCatmullRom:function(l,u,h,d,p,g,_){let x=(u-l)/p-(h-l)/(p+g)+(h-u)/g,S=(h-u)/g-(d-u)/(g+_)+(d-h)/_;x*=g,S*=g,o(u,h,x,S)},calc:function(l){const u=l*l,h=u*l;return s+e*l+t*u+r*h}}}const Bl=new X,vh=new kf,xh=new kf,yh=new kf;class Xx extends Ci{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new X){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let h=Math.floor(u),d=u-h;this.closed?h+=h>0?0:(Math.floor(Math.abs(h)/l)+1)*l:d===0&&h===l-1&&(h=l-2,d=1);let p,g;this.closed||h>0?p=o[(h-1)%l]:(Bl.subVectors(o[0],o[1]).add(o[0]),p=Bl);const _=o[h%l],x=o[(h+1)%l];if(this.closed||h+2<l?g=o[(h+2)%l]:(Bl.subVectors(o[l-1],o[l-2]).add(o[l-1]),g=Bl),this.curveType==="centripetal"||this.curveType==="chordal"){const S=this.curveType==="chordal"?.5:.25;let E=Math.pow(p.distanceToSquared(_),S),w=Math.pow(_.distanceToSquared(x),S),y=Math.pow(x.distanceToSquared(g),S);w<1e-4&&(w=1),E<1e-4&&(E=w),y<1e-4&&(y=w),vh.initNonuniformCatmullRom(p.x,_.x,x.x,g.x,E,w,y),xh.initNonuniformCatmullRom(p.y,_.y,x.y,g.y,E,w,y),yh.initNonuniformCatmullRom(p.z,_.z,x.z,g.z,E,w,y)}else this.curveType==="catmullrom"&&(vh.initCatmullRom(p.x,_.x,x.x,g.x,this.tension),xh.initCatmullRom(p.y,_.y,x.y,g.y,this.tension),yh.initCatmullRom(p.z,_.z,x.z,g.z,this.tension));return r.set(vh.calc(d),xh.calc(d),yh.calc(d)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new X().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Ym(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,h=s*s,d=s*h;return(2*t-2*r+l+u)*d+(-3*t+3*r-2*l-u)*h+l*s+t}function Yx(s,e){const t=1-s;return t*t*e}function qx(s,e){return 2*(1-s)*s*e}function $x(s,e){return s*s*e}function ia(s,e,t,r){return Yx(s,e)+qx(s,t)+$x(s,r)}function Zx(s,e){const t=1-s;return t*t*t*e}function Kx(s,e){const t=1-s;return 3*t*t*s*e}function Jx(s,e){return 3*(1-s)*s*s*e}function Qx(s,e){return s*s*s*e}function ra(s,e,t,r,o){return Zx(s,e)+Kx(s,t)+Jx(s,r)+Qx(s,o)}class u_ extends Ci{constructor(e=new Fe,t=new Fe,r=new Fe,o=new Fe){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new Fe){const r=t,o=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(ra(e,o.x,l.x,u.x,h.x),ra(e,o.y,l.y,u.y,h.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class ey extends Ci{constructor(e=new X,t=new X,r=new X,o=new X){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2,h=this.v3;return r.set(ra(e,o.x,l.x,u.x,h.x),ra(e,o.y,l.y,u.y,h.y),ra(e,o.z,l.z,u.z,h.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class h_ extends Ci{constructor(e=new Fe,t=new Fe){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Fe){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Fe){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ty extends Ci{constructor(e=new X,t=new X){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new X){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new X){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class f_ extends Ci{constructor(e=new Fe,t=new Fe,r=new Fe){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new Fe){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ia(e,o.x,l.x,u.x),ia(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ny extends Ci{constructor(e=new X,t=new X,r=new X){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new X){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(ia(e,o.x,l.x,u.x),ia(e,o.y,l.y,u.y),ia(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class d_ extends Ci{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Fe){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),h=l-u,d=o[u===0?u:u-1],p=o[u],g=o[u>o.length-2?o.length-1:u+1],_=o[u>o.length-3?o.length-1:u+2];return r.set(Ym(h,d.x,p.x,g.x,_.x),Ym(h,d.y,p.y,g.y,_.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new Fe().fromArray(o))}return this}}var qm=Object.freeze({__proto__:null,ArcCurve:jx,CatmullRomCurve3:Xx,CubicBezierCurve:u_,CubicBezierCurve3:ey,EllipseCurve:Of,LineCurve:h_,LineCurve3:ty,QuadraticBezierCurve:f_,QuadraticBezierCurve3:ny,SplineCurve:d_});class iy extends Ci{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const r=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new qm[r](t,e))}return this}getPoint(e,t){const r=e*this.getLength(),o=this.getCurveLengths();let l=0;for(;l<o.length;){if(o[l]>=r){const u=o[l]-r,h=this.curves[l],d=h.getLength(),p=d===0?0:1-u/d;return h.getPointAt(p,t)}l++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let r=0,o=this.curves.length;r<o;r++)t+=this.curves[r].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let r;for(let o=0,l=this.curves;o<l.length;o++){const u=l[o],h=u.isEllipseCurve?e*2:u.isLineCurve||u.isLineCurve3?1:u.isSplineCurve?e*u.points.length:e,d=u.getPoints(h);for(let p=0;p<d.length;p++){const g=d[p];r&&r.equals(g)||(t.push(g),r=g)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(o.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,r=this.curves.length;t<r;t++){const o=this.curves[t];e.curves.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,r=e.curves.length;t<r;t++){const o=e.curves[t];this.curves.push(new qm[o.type]().fromJSON(o))}return this}}class yf extends iy{constructor(e){super(),this.type="Path",this.currentPoint=new Fe,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,r=e.length;t<r;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const r=new h_(this.currentPoint.clone(),new Fe(e,t));return this.curves.push(r),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,r,o){const l=new f_(this.currentPoint.clone(),new Fe(e,t),new Fe(r,o));return this.curves.push(l),this.currentPoint.set(r,o),this}bezierCurveTo(e,t,r,o,l,u){const h=new u_(this.currentPoint.clone(),new Fe(e,t),new Fe(r,o),new Fe(l,u));return this.curves.push(h),this.currentPoint.set(l,u),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),r=new d_(t);return this.curves.push(r),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,r,o,l,u){const h=this.currentPoint.x,d=this.currentPoint.y;return this.absarc(e+h,t+d,r,o,l,u),this}absarc(e,t,r,o,l,u){return this.absellipse(e,t,r,r,o,l,u),this}ellipse(e,t,r,o,l,u,h,d){const p=this.currentPoint.x,g=this.currentPoint.y;return this.absellipse(e+p,t+g,r,o,l,u,h,d),this}absellipse(e,t,r,o,l,u,h,d){const p=new Of(e,t,r,o,l,u,h,d);if(this.curves.length>0){const _=p.getPoint(0);_.equals(this.currentPoint)||this.lineTo(_.x,_.y)}this.curves.push(p);const g=p.getPoint(1);return this.currentPoint.copy(g),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class p_ extends yf{constructor(e){super(e),this.uuid=po(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let r=0,o=this.holes.length;r<o;r++)t[r]=this.holes[r].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,r=this.holes.length;t<r;t++){const o=this.holes[t];e.holes.push(o.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,r=e.holes.length;t<r;t++){const o=e.holes[t];this.holes.push(new yf().fromJSON(o))}return this}}const ry={triangulate:function(s,e,t=2){const r=e&&e.length,o=r?e[0]*t:s.length;let l=m_(s,0,o,t,!0);const u=[];if(!l||l.next===l.prev)return u;let h,d,p,g,_,x,S;if(r&&(l=cy(s,e,l,t)),s.length>80*t){h=p=s[0],d=g=s[1];for(let E=t;E<o;E+=t)_=s[E],x=s[E+1],_<h&&(h=_),x<d&&(d=x),_>p&&(p=_),x>g&&(g=x);S=Math.max(p-h,g-d),S=S!==0?32767/S:0}return aa(l,u,t,h,d,S,0),u}};function m_(s,e,t,r,o){let l,u;if(o===yy(s,e,t,r)>0)for(l=e;l<t;l+=r)u=$m(l,s[l],s[l+1],u);else for(l=t-r;l>=e;l-=r)u=$m(l,s[l],s[l+1],u);return u&&hc(u,u.next)&&(ca(u),u=u.next),u}function as(s,e){if(!s)return s;e||(e=s);let t=s,r;do if(r=!1,!t.steiner&&(hc(t,t.next)||Gt(t.prev,t,t.next)===0)){if(ca(t),t=e=t.prev,t===t.next)break;r=!0}else t=t.next;while(r||t!==e);return e}function aa(s,e,t,r,o,l,u){if(!s)return;!u&&l&&py(s,r,o,l);let h=s,d,p;for(;s.prev!==s.next;){if(d=s.prev,p=s.next,l?oy(s,r,o,l):sy(s)){e.push(d.i/t|0),e.push(s.i/t|0),e.push(p.i/t|0),ca(s),s=p.next,h=p.next;continue}if(s=p,s===h){u?u===1?(s=ay(as(s),e,t),aa(s,e,t,r,o,l,2)):u===2&&ly(s,e,t,r,o,l):aa(as(s),e,t,r,o,l,1);break}}}function sy(s){const e=s.prev,t=s,r=s.next;if(Gt(e,t,r)>=0)return!1;const o=e.x,l=t.x,u=r.x,h=e.y,d=t.y,p=r.y,g=o<l?o<u?o:u:l<u?l:u,_=h<d?h<p?h:p:d<p?d:p,x=o>l?o>u?o:u:l>u?l:u,S=h>d?h>p?h:p:d>p?d:p;let E=r.next;for(;E!==e;){if(E.x>=g&&E.x<=x&&E.y>=_&&E.y<=S&&Js(o,h,l,d,u,p,E.x,E.y)&&Gt(E.prev,E,E.next)>=0)return!1;E=E.next}return!0}function oy(s,e,t,r){const o=s.prev,l=s,u=s.next;if(Gt(o,l,u)>=0)return!1;const h=o.x,d=l.x,p=u.x,g=o.y,_=l.y,x=u.y,S=h<d?h<p?h:p:d<p?d:p,E=g<_?g<x?g:x:_<x?_:x,w=h>d?h>p?h:p:d>p?d:p,y=g>_?g>x?g:x:_>x?_:x,v=Sf(S,E,e,t,r),D=Sf(w,y,e,t,r);let b=s.prevZ,A=s.nextZ;for(;b&&b.z>=v&&A&&A.z<=D;){if(b.x>=S&&b.x<=w&&b.y>=E&&b.y<=y&&b!==o&&b!==u&&Js(h,g,d,_,p,x,b.x,b.y)&&Gt(b.prev,b,b.next)>=0||(b=b.prevZ,A.x>=S&&A.x<=w&&A.y>=E&&A.y<=y&&A!==o&&A!==u&&Js(h,g,d,_,p,x,A.x,A.y)&&Gt(A.prev,A,A.next)>=0))return!1;A=A.nextZ}for(;b&&b.z>=v;){if(b.x>=S&&b.x<=w&&b.y>=E&&b.y<=y&&b!==o&&b!==u&&Js(h,g,d,_,p,x,b.x,b.y)&&Gt(b.prev,b,b.next)>=0)return!1;b=b.prevZ}for(;A&&A.z<=D;){if(A.x>=S&&A.x<=w&&A.y>=E&&A.y<=y&&A!==o&&A!==u&&Js(h,g,d,_,p,x,A.x,A.y)&&Gt(A.prev,A,A.next)>=0)return!1;A=A.nextZ}return!0}function ay(s,e,t){let r=s;do{const o=r.prev,l=r.next.next;!hc(o,l)&&g_(o,r,r.next,l)&&la(o,l)&&la(l,o)&&(e.push(o.i/t|0),e.push(r.i/t|0),e.push(l.i/t|0),ca(r),ca(r.next),r=s=l),r=r.next}while(r!==s);return as(r)}function ly(s,e,t,r,o,l){let u=s;do{let h=u.next.next;for(;h!==u.prev;){if(u.i!==h.i&&_y(u,h)){let d=__(u,h);u=as(u,u.next),d=as(d,d.next),aa(u,e,t,r,o,l,0),aa(d,e,t,r,o,l,0);return}h=h.next}u=u.next}while(u!==s)}function cy(s,e,t,r){const o=[];let l,u,h,d,p;for(l=0,u=e.length;l<u;l++)h=e[l]*r,d=l<u-1?e[l+1]*r:s.length,p=m_(s,h,d,r,!1),p===p.next&&(p.steiner=!0),o.push(gy(p));for(o.sort(uy),l=0;l<o.length;l++)t=hy(o[l],t);return t}function uy(s,e){return s.x-e.x}function hy(s,e){const t=fy(s,e);if(!t)return e;const r=__(t,s);return as(r,r.next),as(t,t.next)}function fy(s,e){let t=e,r=-1/0,o;const l=s.x,u=s.y;do{if(u<=t.y&&u>=t.next.y&&t.next.y!==t.y){const x=t.x+(u-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(x<=l&&x>r&&(r=x,o=t.x<t.next.x?t:t.next,x===l))return o}t=t.next}while(t!==e);if(!o)return null;const h=o,d=o.x,p=o.y;let g=1/0,_;t=o;do l>=t.x&&t.x>=d&&l!==t.x&&Js(u<p?l:r,u,d,p,u<p?r:l,u,t.x,t.y)&&(_=Math.abs(u-t.y)/(l-t.x),la(t,s)&&(_<g||_===g&&(t.x>o.x||t.x===o.x&&dy(o,t)))&&(o=t,g=_)),t=t.next;while(t!==h);return o}function dy(s,e){return Gt(s.prev,s,e.prev)<0&&Gt(e.next,s,s.next)<0}function py(s,e,t,r){let o=s;do o.z===0&&(o.z=Sf(o.x,o.y,e,t,r)),o.prevZ=o.prev,o.nextZ=o.next,o=o.next;while(o!==s);o.prevZ.nextZ=null,o.prevZ=null,my(o)}function my(s){let e,t,r,o,l,u,h,d,p=1;do{for(t=s,s=null,l=null,u=0;t;){for(u++,r=t,h=0,e=0;e<p&&(h++,r=r.nextZ,!!r);e++);for(d=p;h>0||d>0&&r;)h!==0&&(d===0||!r||t.z<=r.z)?(o=t,t=t.nextZ,h--):(o=r,r=r.nextZ,d--),l?l.nextZ=o:s=o,o.prevZ=l,l=o;t=r}l.nextZ=null,p*=2}while(u>1);return s}function Sf(s,e,t,r,o){return s=(s-t)*o|0,e=(e-r)*o|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function gy(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Js(s,e,t,r,o,l,u,h){return(o-u)*(e-h)>=(s-u)*(l-h)&&(s-u)*(r-h)>=(t-u)*(e-h)&&(t-u)*(l-h)>=(o-u)*(r-h)}function _y(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!vy(s,e)&&(la(s,e)&&la(e,s)&&xy(s,e)&&(Gt(s.prev,s,e.prev)||Gt(s,e.prev,e))||hc(s,e)&&Gt(s.prev,s,s.next)>0&&Gt(e.prev,e,e.next)>0)}function Gt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function hc(s,e){return s.x===e.x&&s.y===e.y}function g_(s,e,t,r){const o=Vl(Gt(s,e,t)),l=Vl(Gt(s,e,r)),u=Vl(Gt(t,r,s)),h=Vl(Gt(t,r,e));return!!(o!==l&&u!==h||o===0&&Hl(s,t,e)||l===0&&Hl(s,r,e)||u===0&&Hl(t,s,r)||h===0&&Hl(t,e,r))}function Hl(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function Vl(s){return s>0?1:s<0?-1:0}function vy(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&g_(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function la(s,e){return Gt(s.prev,s,s.next)<0?Gt(s,e,s.next)>=0&&Gt(s,s.prev,e)>=0:Gt(s,e,s.prev)<0||Gt(s,s.next,e)<0}function xy(s,e){let t=s,r=!1;const o=(s.x+e.x)/2,l=(s.y+e.y)/2;do t.y>l!=t.next.y>l&&t.next.y!==t.y&&o<(t.next.x-t.x)*(l-t.y)/(t.next.y-t.y)+t.x&&(r=!r),t=t.next;while(t!==s);return r}function __(s,e){const t=new Mf(s.i,s.x,s.y),r=new Mf(e.i,e.x,e.y),o=s.next,l=e.prev;return s.next=e,e.prev=s,t.next=o,o.prev=t,r.next=t,t.prev=r,l.next=r,r.prev=l,r}function $m(s,e,t,r){const o=new Mf(s,e,t);return r?(o.next=r.next,o.prev=r,r.next.prev=o,r.next=o):(o.prev=o,o.next=o),o}function ca(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function Mf(s,e,t){this.i=s,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function yy(s,e,t,r){let o=0;for(let l=e,u=t-r;l<t;l+=r)o+=(s[u]-s[l])*(s[l+1]+s[u+1]),u=l;return o}class sa{static area(e){const t=e.length;let r=0;for(let o=t-1,l=0;l<t;o=l++)r+=e[o].x*e[l].y-e[l].x*e[o].y;return r*.5}static isClockWise(e){return sa.area(e)<0}static triangulateShape(e,t){const r=[],o=[],l=[];Zm(e),Km(r,e);let u=e.length;t.forEach(Zm);for(let d=0;d<t.length;d++)o.push(u),u+=t[d].length,Km(r,t[d]);const h=ry.triangulate(r,o);for(let d=0;d<h.length;d+=3)l.push(h.slice(d,d+3));return l}}function Zm(s){const e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function Km(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}class fa extends ii{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,h=Math.floor(r),d=Math.floor(o),p=h+1,g=d+1,_=e/h,x=t/d,S=[],E=[],w=[],y=[];for(let v=0;v<g;v++){const D=v*x-u;for(let b=0;b<p;b++){const A=b*_-l;E.push(A,-D,0),w.push(0,0,1),y.push(b/h),y.push(1-v/d)}}for(let v=0;v<d;v++)for(let D=0;D<h;D++){const b=D+p*v,A=D+p*(v+1),W=D+1+p*(v+1),I=D+1+p*v;S.push(b,A,I),S.push(A,W,I)}this.setIndex(S),this.setAttribute("position",new dn(E,3)),this.setAttribute("normal",new dn(w,3)),this.setAttribute("uv",new dn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fa(e.width,e.height,e.widthSegments,e.heightSegments)}}class zf extends ii{constructor(e=new p_([new Fe(0,.5),new Fe(-.5,-.5),new Fe(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const r=[],o=[],l=[],u=[];let h=0,d=0;if(Array.isArray(e)===!1)p(e);else for(let g=0;g<e.length;g++)p(e[g]),this.addGroup(h,d,g),h+=d,d=0;this.setIndex(r),this.setAttribute("position",new dn(o,3)),this.setAttribute("normal",new dn(l,3)),this.setAttribute("uv",new dn(u,2));function p(g){const _=o.length/3,x=g.extractPoints(t);let S=x.shape;const E=x.holes;sa.isClockWise(S)===!1&&(S=S.reverse());for(let y=0,v=E.length;y<v;y++){const D=E[y];sa.isClockWise(D)===!0&&(E[y]=D.reverse())}const w=sa.triangulateShape(S,E);for(let y=0,v=E.length;y<v;y++){const D=E[y];S=S.concat(D)}for(let y=0,v=S.length;y<v;y++){const D=S[y];o.push(D.x,D.y,0),l.push(0,0,1),u.push(D.x,D.y)}for(let y=0,v=w.length;y<v;y++){const D=w[y],b=D[0]+_,A=D[1]+_,W=D[2]+_;r.push(b,A,W),d+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return Sy(t,e)}static fromJSON(e,t){const r=[];for(let o=0,l=e.shapes.length;o<l;o++){const u=t[e.shapes[o]];r.push(u)}return new zf(r,e.curveSegments)}}function Sy(s,e){if(e.shapes=[],Array.isArray(s))for(let t=0,r=s.length;t<r;t++){const o=s[t];e.shapes.push(o.uuid)}else e.shapes.push(s.uuid);return e}class My extends ii{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],r=new Set,o=new X,l=new X;if(e.index!==null){const u=e.attributes.position,h=e.index;let d=e.groups;d.length===0&&(d=[{start:0,count:h.count,materialIndex:0}]);for(let p=0,g=d.length;p<g;++p){const _=d[p],x=_.start,S=_.count;for(let E=x,w=x+S;E<w;E+=3)for(let y=0;y<3;y++){const v=h.getX(E+y),D=h.getX(E+(y+1)%3);o.fromBufferAttribute(u,v),l.fromBufferAttribute(u,D),Jm(o,l,r)===!0&&(t.push(o.x,o.y,o.z),t.push(l.x,l.y,l.z))}}}else{const u=e.attributes.position;for(let h=0,d=u.count/3;h<d;h++)for(let p=0;p<3;p++){const g=3*h+p,_=3*h+(p+1)%3;o.fromBufferAttribute(u,g),l.fromBufferAttribute(u,_),Jm(o,l,r)===!0&&(t.push(o.x,o.y,o.z),t.push(l.x,l.y,l.z))}}this.setAttribute("position",new dn(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function Jm(s,e,t){const r=`${s.x},${s.y},${s.z}-${e.x},${e.y},${e.z}`,o=`${e.x},${e.y},${e.z}-${s.x},${s.y},${s.z}`;return t.has(r)===!0||t.has(o)===!0?!1:(t.add(r),t.add(o),!0)}class v_ extends mo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zg,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ey extends mo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ix,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ty extends mo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class x_ extends fn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new St(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Sh=new kt,Qm=new X,eg=new X;class wy{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uf,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new Yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Qm.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qm),eg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eg),t.updateMatrixWorld(),Sh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sh),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Sh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class y_ extends o_{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,h=o+t,d=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,h-=g*this.view.offsetY,d=h-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,h,d,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Ay extends wy{constructor(){super(new y_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tg extends x_{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fn.DEFAULT_UP),this.updateMatrix(),this.target=new fn,this.shadow=new Ay}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Cy extends x_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Ry extends ni{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}const ng=new kt;class by{constructor(e,t,r=0,o=1/0){this.ray=new uc(e,t),this.near=r,this.far=o,this.camera=null,this.layers=new If,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return ng.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(ng),this}intersectObject(e,t=!0,r=[]){return Ef(e,this,r,t),r.sort(ig),r}intersectObjects(e,t=!0,r=[]){for(let o=0,l=e.length;o<l;o++)Ef(e[o],this,r,t);return r.sort(ig),r}}function ig(s,e){return s.distance-e.distance}function Ef(s,e,t,r){let o=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(o=!1),o===!0&&r===!0){const l=s.children;for(let u=0,h=l.length;u<h;u++)Ef(l[u],e,t,!0)}}class rg{constructor(e=1,t=0,r=0){return this.radius=e,this.phi=t,this.theta=r,this}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Py extends l_{constructor(e=10,t=10,r=4473924,o=8947848){r=new St(r),o=new St(o);const l=t/2,u=e/t,h=e/2,d=[],p=[];for(let x=0,S=0,E=-h;x<=t;x++,E+=u){d.push(-h,0,E,h,0,E),d.push(E,0,-h,E,0,h);const w=x===l?r:o;w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3,w.toArray(p,S),S+=3}const g=new ii;g.setAttribute("position",new dn(d,3)),g.setAttribute("color",new dn(p,3));const _=new Ff({vertexColors:!0,toneMapped:!1});super(g,_),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Ly extends ls{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function sg(s,e,t,r){const o=Dy(r);switch(t){case Gg:return s*e;case jg:return s*e;case Xg:return s*e*2;case Yg:return s*e/o.components*o.byteLength;case Lf:return s*e/o.components*o.byteLength;case qg:return s*e*2/o.components*o.byteLength;case Df:return s*e*2/o.components*o.byteLength;case Wg:return s*e*3/o.components*o.byteLength;case gi:return s*e*4/o.components*o.byteLength;case Nf:return s*e*4/o.components*o.byteLength;case Zl:case Kl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jl:case Ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Yh:case $h:return Math.max(s,16)*Math.max(e,8)/4;case Xh:case qh:return Math.max(s,8)*Math.max(e,8)/2;case Zh:case Kh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Jh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ef:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case tf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case sf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case of:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case af:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case cf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case uf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case hf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case ff:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case df:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ec:case pf:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case $g:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case _f:case vf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Dy(s){switch(s){case $i:case Bg:return{byteLength:1,components:1};case oa:case Hg:case ua:return{byteLength:2,components:1};case bf:case Pf:return{byteLength:2,components:4};case rs:case Rf:case Xi:return{byteLength:4,components:1};case Vg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Cf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Cf);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function S_(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function Ny(s){const e=new WeakMap;function t(h,d){const p=h.array,g=h.usage,_=p.byteLength,x=s.createBuffer();s.bindBuffer(d,x),s.bufferData(d,p,g),h.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:x,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:h.version,size:_}}function r(h,d,p){const g=d.array,_=d.updateRanges;if(s.bindBuffer(p,h),_.length===0)s.bufferSubData(p,0,g);else{_.sort((S,E)=>S.start-E.start);let x=0;for(let S=1;S<_.length;S++){const E=_[x],w=_[S];w.start<=E.start+E.count+1?E.count=Math.max(E.count,w.start+w.count-E.start):(++x,_[x]=w)}_.length=x+1;for(let S=0,E=_.length;S<E;S++){const w=_[S];s.bufferSubData(p,w.start*g.BYTES_PER_ELEMENT,g,w.start,w.count)}d.clearUpdateRanges()}d.onUploadCallback()}function o(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function l(h){h.isInterleavedBufferAttribute&&(h=h.data);const d=e.get(h);d&&(s.deleteBuffer(d.buffer),e.delete(h))}function u(h,d){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const g=e.get(h);(!g||g.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const p=e.get(h);if(p===void 0)e.set(h,t(h,d));else if(p.version<h.version){if(p.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,h,d),p.version=h.version}}return{get:o,remove:l,update:u}}var Iy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Uy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Oy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,By=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Hy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Vy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Gy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Wy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Xy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Yy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,$y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ky=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Jy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Qy=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tS=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nS=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uS="gl_FragColor = linearToOutputTexel( gl_FragColor );",hS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,fS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,dS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,_S=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ES=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,TS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,bS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,PS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,NS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,IS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,US=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FS=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,VS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,GS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,XS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$S=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,ZS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,KS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,JS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,QS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,_M=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,vM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,MM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,TM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,PM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,IM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,VM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,XM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,qM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,JM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,QM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,eE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,rE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,fE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:Iy,alphahash_pars_fragment:Uy,alphamap_fragment:Fy,alphamap_pars_fragment:Oy,alphatest_fragment:ky,alphatest_pars_fragment:zy,aomap_fragment:By,aomap_pars_fragment:Hy,batching_pars_vertex:Vy,batching_vertex:Gy,begin_vertex:Wy,beginnormal_vertex:jy,bsdfs:Xy,iridescence_fragment:Yy,bumpmap_pars_fragment:qy,clipping_planes_fragment:$y,clipping_planes_pars_fragment:Zy,clipping_planes_pars_vertex:Ky,clipping_planes_vertex:Jy,color_fragment:Qy,color_pars_fragment:eS,color_pars_vertex:tS,color_vertex:nS,common:iS,cube_uv_reflection_fragment:rS,defaultnormal_vertex:sS,displacementmap_pars_vertex:oS,displacementmap_vertex:aS,emissivemap_fragment:lS,emissivemap_pars_fragment:cS,colorspace_fragment:uS,colorspace_pars_fragment:hS,envmap_fragment:fS,envmap_common_pars_fragment:dS,envmap_pars_fragment:pS,envmap_pars_vertex:mS,envmap_physical_pars_fragment:AS,envmap_vertex:gS,fog_vertex:_S,fog_pars_vertex:vS,fog_fragment:xS,fog_pars_fragment:yS,gradientmap_pars_fragment:SS,lightmap_pars_fragment:MS,lights_lambert_fragment:ES,lights_lambert_pars_fragment:TS,lights_pars_begin:wS,lights_toon_fragment:CS,lights_toon_pars_fragment:RS,lights_phong_fragment:bS,lights_phong_pars_fragment:PS,lights_physical_fragment:LS,lights_physical_pars_fragment:DS,lights_fragment_begin:NS,lights_fragment_maps:IS,lights_fragment_end:US,logdepthbuf_fragment:FS,logdepthbuf_pars_fragment:OS,logdepthbuf_pars_vertex:kS,logdepthbuf_vertex:zS,map_fragment:BS,map_pars_fragment:HS,map_particle_fragment:VS,map_particle_pars_fragment:GS,metalnessmap_fragment:WS,metalnessmap_pars_fragment:jS,morphinstance_vertex:XS,morphcolor_vertex:YS,morphnormal_vertex:qS,morphtarget_pars_vertex:$S,morphtarget_vertex:ZS,normal_fragment_begin:KS,normal_fragment_maps:JS,normal_pars_fragment:QS,normal_pars_vertex:eM,normal_vertex:tM,normalmap_pars_fragment:nM,clearcoat_normal_fragment_begin:iM,clearcoat_normal_fragment_maps:rM,clearcoat_pars_fragment:sM,iridescence_pars_fragment:oM,opaque_fragment:aM,packing:lM,premultiplied_alpha_fragment:cM,project_vertex:uM,dithering_fragment:hM,dithering_pars_fragment:fM,roughnessmap_fragment:dM,roughnessmap_pars_fragment:pM,shadowmap_pars_fragment:mM,shadowmap_pars_vertex:gM,shadowmap_vertex:_M,shadowmask_pars_fragment:vM,skinbase_vertex:xM,skinning_pars_vertex:yM,skinning_vertex:SM,skinnormal_vertex:MM,specularmap_fragment:EM,specularmap_pars_fragment:TM,tonemapping_fragment:wM,tonemapping_pars_fragment:AM,transmission_fragment:CM,transmission_pars_fragment:RM,uv_pars_fragment:bM,uv_pars_vertex:PM,uv_vertex:LM,worldpos_vertex:DM,background_vert:NM,background_frag:IM,backgroundCube_vert:UM,backgroundCube_frag:FM,cube_vert:OM,cube_frag:kM,depth_vert:zM,depth_frag:BM,distanceRGBA_vert:HM,distanceRGBA_frag:VM,equirect_vert:GM,equirect_frag:WM,linedashed_vert:jM,linedashed_frag:XM,meshbasic_vert:YM,meshbasic_frag:qM,meshlambert_vert:$M,meshlambert_frag:ZM,meshmatcap_vert:KM,meshmatcap_frag:JM,meshnormal_vert:QM,meshnormal_frag:eE,meshphong_vert:tE,meshphong_frag:nE,meshphysical_vert:iE,meshphysical_frag:rE,meshtoon_vert:sE,meshtoon_frag:oE,points_vert:aE,points_frag:lE,shadow_vert:cE,shadow_frag:uE,sprite_vert:hE,sprite_frag:fE},Le={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Ei={basic:{uniforms:Cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new St(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Cn([Le.common,Le.specularmap,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,Le.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Cn([Le.common,Le.envmap,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.roughnessmap,Le.metalnessmap,Le.fog,Le.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Cn([Le.common,Le.aomap,Le.lightmap,Le.emissivemap,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.gradientmap,Le.fog,Le.lights,{emissive:{value:new St(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Cn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,Le.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Cn([Le.points,Le.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Cn([Le.common,Le.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Cn([Le.common,Le.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Cn([Le.common,Le.bumpmap,Le.normalmap,Le.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Cn([Le.sprite,Le.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Cn([Le.common,Le.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Cn([Le.lights,Le.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ei.physical={uniforms:Cn([Ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Gl={r:0,b:0,g:0},$r=new Ai,dE=new kt;function pE(s,e,t,r,o,l,u){const h=new St(0);let d=l===!0?0:1,p,g,_=null,x=0,S=null;function E(b){let A=b.isScene===!0?b.background:null;return A&&A.isTexture&&(A=(b.backgroundBlurriness>0?t:e).get(A)),A}function w(b){let A=!1;const W=E(b);W===null?v(h,d):W&&W.isColor&&(v(W,1),A=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?r.buffers.color.setClear(0,0,0,1,u):I==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||A)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(b,A){const W=E(A);W&&(W.isCubeTexture||W.mapping===lc)?(g===void 0&&(g=new Yn(new go(1,1,1),new Cr({name:"BackgroundCubeMaterial",uniforms:ho(Ei.backgroundCube.uniforms),vertexShader:Ei.backgroundCube.vertexShader,fragmentShader:Ei.backgroundCube.fragmentShader,side:kn,depthTest:!1,depthWrite:!1,fog:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(I,O,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),o.update(g)),$r.copy(A.backgroundRotation),$r.x*=-1,$r.y*=-1,$r.z*=-1,W.isCubeTexture&&W.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),g.material.uniforms.envMap.value=W,g.material.uniforms.flipEnvMap.value=W.isCubeTexture&&W.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(dE.makeRotationFromEuler($r)),g.material.toneMapped=Ct.getTransfer(W.colorSpace)!==Dt,(_!==W||x!==W.version||S!==s.toneMapping)&&(g.material.needsUpdate=!0,_=W,x=W.version,S=s.toneMapping),g.layers.enableAll(),b.unshift(g,g.geometry,g.material,0,0,null)):W&&W.isTexture&&(p===void 0&&(p=new Yn(new fa(2,2),new Cr({name:"BackgroundMaterial",uniforms:ho(Ei.background.uniforms),vertexShader:Ei.background.vertexShader,fragmentShader:Ei.background.fragmentShader,side:Ar,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),o.update(p)),p.material.uniforms.t2D.value=W,p.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,p.material.toneMapped=Ct.getTransfer(W.colorSpace)!==Dt,W.matrixAutoUpdate===!0&&W.updateMatrix(),p.material.uniforms.uvTransform.value.copy(W.matrix),(_!==W||x!==W.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,_=W,x=W.version,S=s.toneMapping),p.layers.enableAll(),b.unshift(p,p.geometry,p.material,0,0,null))}function v(b,A){b.getRGB(Gl,s_(s)),r.buffers.color.setClear(Gl.r,Gl.g,Gl.b,A,u)}function D(){g!==void 0&&(g.geometry.dispose(),g.material.dispose()),p!==void 0&&(p.geometry.dispose(),p.material.dispose())}return{getClearColor:function(){return h},setClearColor:function(b,A=1){h.set(b),d=A,v(h,d)},getClearAlpha:function(){return d},setClearAlpha:function(b){d=b,v(h,d)},render:w,addToRenderList:y,dispose:D}}function mE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=x(null);let l=o,u=!1;function h(R,z,re,Q,de){let pe=!1;const ce=_(Q,re,z);l!==ce&&(l=ce,p(l.object)),pe=S(R,Q,re,de),pe&&E(R,Q,re,de),de!==null&&e.update(de,s.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,A(R,z,re,Q),de!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(de).buffer))}function d(){return s.createVertexArray()}function p(R){return s.bindVertexArray(R)}function g(R){return s.deleteVertexArray(R)}function _(R,z,re){const Q=re.wireframe===!0;let de=r[R.id];de===void 0&&(de={},r[R.id]=de);let pe=de[z.id];pe===void 0&&(pe={},de[z.id]=pe);let ce=pe[Q];return ce===void 0&&(ce=x(d()),pe[Q]=ce),ce}function x(R){const z=[],re=[],Q=[];for(let de=0;de<t;de++)z[de]=0,re[de]=0,Q[de]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:re,attributeDivisors:Q,object:R,attributes:{},index:null}}function S(R,z,re,Q){const de=l.attributes,pe=z.attributes;let ce=0;const ue=re.getAttributes();for(const B in ue)if(ue[B].location>=0){const se=de[B];let F=pe[B];if(F===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(F=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(F=R.instanceColor)),se===void 0||se.attribute!==F||F&&se.data!==F.data)return!0;ce++}return l.attributesNum!==ce||l.index!==Q}function E(R,z,re,Q){const de={},pe=z.attributes;let ce=0;const ue=re.getAttributes();for(const B in ue)if(ue[B].location>=0){let se=pe[B];se===void 0&&(B==="instanceMatrix"&&R.instanceMatrix&&(se=R.instanceMatrix),B==="instanceColor"&&R.instanceColor&&(se=R.instanceColor));const F={};F.attribute=se,se&&se.data&&(F.data=se.data),de[B]=F,ce++}l.attributes=de,l.attributesNum=ce,l.index=Q}function w(){const R=l.newAttributes;for(let z=0,re=R.length;z<re;z++)R[z]=0}function y(R){v(R,0)}function v(R,z){const re=l.newAttributes,Q=l.enabledAttributes,de=l.attributeDivisors;re[R]=1,Q[R]===0&&(s.enableVertexAttribArray(R),Q[R]=1),de[R]!==z&&(s.vertexAttribDivisor(R,z),de[R]=z)}function D(){const R=l.newAttributes,z=l.enabledAttributes;for(let re=0,Q=z.length;re<Q;re++)z[re]!==R[re]&&(s.disableVertexAttribArray(re),z[re]=0)}function b(R,z,re,Q,de,pe,ce){ce===!0?s.vertexAttribIPointer(R,z,re,de,pe):s.vertexAttribPointer(R,z,re,Q,de,pe)}function A(R,z,re,Q){w();const de=Q.attributes,pe=re.getAttributes(),ce=z.defaultAttributeValues;for(const ue in pe){const B=pe[ue];if(B.location>=0){let oe=de[ue];if(oe===void 0&&(ue==="instanceMatrix"&&R.instanceMatrix&&(oe=R.instanceMatrix),ue==="instanceColor"&&R.instanceColor&&(oe=R.instanceColor)),oe!==void 0){const se=oe.normalized,F=oe.itemSize,te=e.get(oe);if(te===void 0)continue;const we=te.buffer,Z=te.type,le=te.bytesPerElement,ye=Z===s.INT||Z===s.UNSIGNED_INT||oe.gpuType===Rf;if(oe.isInterleavedBufferAttribute){const _e=oe.data,Ae=_e.stride,Ne=oe.offset;if(_e.isInstancedInterleavedBuffer){for(let Xe=0;Xe<B.locationSize;Xe++)v(B.location+Xe,_e.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let Xe=0;Xe<B.locationSize;Xe++)y(B.location+Xe);s.bindBuffer(s.ARRAY_BUFFER,we);for(let Xe=0;Xe<B.locationSize;Xe++)b(B.location+Xe,F/B.locationSize,Z,se,Ae*le,(Ne+F/B.locationSize*Xe)*le,ye)}else{if(oe.isInstancedBufferAttribute){for(let _e=0;_e<B.locationSize;_e++)v(B.location+_e,oe.meshPerAttribute);R.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let _e=0;_e<B.locationSize;_e++)y(B.location+_e);s.bindBuffer(s.ARRAY_BUFFER,we);for(let _e=0;_e<B.locationSize;_e++)b(B.location+_e,F/B.locationSize,Z,se,F*le,F/B.locationSize*_e*le,ye)}}else if(ce!==void 0){const se=ce[ue];if(se!==void 0)switch(se.length){case 2:s.vertexAttrib2fv(B.location,se);break;case 3:s.vertexAttrib3fv(B.location,se);break;case 4:s.vertexAttrib4fv(B.location,se);break;default:s.vertexAttrib1fv(B.location,se)}}}}D()}function W(){Y();for(const R in r){const z=r[R];for(const re in z){const Q=z[re];for(const de in Q)g(Q[de].object),delete Q[de];delete z[re]}delete r[R]}}function I(R){if(r[R.id]===void 0)return;const z=r[R.id];for(const re in z){const Q=z[re];for(const de in Q)g(Q[de].object),delete Q[de];delete z[re]}delete r[R.id]}function O(R){for(const z in r){const re=r[z];if(re[R.id]===void 0)continue;const Q=re[R.id];for(const de in Q)g(Q[de].object),delete Q[de];delete re[R.id]}}function Y(){P(),u=!0,l!==o&&(l=o,p(l.object))}function P(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:h,reset:Y,resetDefaultState:P,dispose:W,releaseStatesOfGeometry:I,releaseStatesOfProgram:O,initAttributes:w,enableAttribute:y,disableUnusedAttributes:D}}function gE(s,e,t){let r;function o(p){r=p}function l(p,g){s.drawArrays(r,p,g),t.update(g,r,1)}function u(p,g,_){_!==0&&(s.drawArraysInstanced(r,p,g,_),t.update(g,r,_))}function h(p,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,g,0,_);let S=0;for(let E=0;E<_;E++)S+=g[E];t.update(S,r,1)}function d(p,g,_,x){if(_===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let E=0;E<p.length;E++)u(p[E],g[E],x[E]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,g,0,x,0,_);let E=0;for(let w=0;w<_;w++)E+=g[w]*x[w];t.update(E,r,1)}}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function _E(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const O=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(O.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(O){return!(O!==gi&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(O){const Y=O===ua&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(O!==$i&&r.convert(O)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&O!==Xi&&!Y)}function d(O){if(O==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";O="mediump"}return O==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const g=d(p);g!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",g,"instead."),p=g);const _=t.logarithmicDepthBuffer===!0,x=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),b=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),W=E>0,I=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:d,textureFormatReadable:u,textureTypeReadable:h,precision:p,logarithmicDepthBuffer:_,reverseDepthBuffer:x,maxTextures:S,maxVertexTextures:E,maxTextureSize:w,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:b,maxFragmentUniforms:A,vertexTextures:W,maxSamples:I}}function vE(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new ji,h=new ht,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(_,x){const S=_.length!==0||x||r!==0||o;return o=x,r=_.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(_,x){t=g(_,x,0)},this.setState=function(_,x,S){const E=_.clippingPlanes,w=_.clipIntersection,y=_.clipShadows,v=s.get(_);if(!o||E===null||E.length===0||l&&!y)l?g(null):p();else{const D=l?0:r,b=D*4;let A=v.clippingState||null;d.value=A,A=g(E,x,b,S);for(let W=0;W!==b;++W)A[W]=t[W];v.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=D}};function p(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function g(_,x,S,E){const w=_!==null?_.length:0;let y=null;if(w!==0){if(y=d.value,E!==!0||y===null){const v=S+w*4,D=x.matrixWorldInverse;h.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let b=0,A=S;b!==w;++b,A+=4)u.copy(_[b]).applyMatrix4(D,h),u.normal.toArray(y,A),y[A+3]=u.constant}d.value=y,d.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,y}}function xE(s){let e=new WeakMap;function t(u,h){return h===Vh?u.mapping=oo:h===Gh&&(u.mapping=ao),u}function r(u){if(u&&u.isTexture){const h=u.mapping;if(h===Vh||h===Gh)if(e.has(u)){const d=e.get(u).texture;return t(d,u.mapping)}else{const d=u.image;if(d&&d.height>0){const p=new Bx(d.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",o),t(p.texture,u.mapping)}else return null}}return u}function o(u){const h=u.target;h.removeEventListener("dispose",o);const d=e.get(h);d!==void 0&&(e.delete(h),d.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Qs=4,og=[.125,.215,.35,.446,.526,.582],es=20,Mh=new y_,ag=new St;let Eh=null,Th=0,wh=0,Ah=!1;const Jr=(1+Math.sqrt(5))/2,Ys=1/Jr,lg=[new X(-Jr,Ys,0),new X(Jr,Ys,0),new X(-Ys,0,Jr),new X(Ys,0,Jr),new X(0,Jr,-Ys),new X(0,Jr,Ys),new X(-1,1,-1),new X(1,1,-1),new X(-1,1,1),new X(1,1,1)];class cg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,o=100){Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,o,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=fg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Eh,Th,wh),this._renderer.xr.enabled=Ah,e.scissorTest=!1,Wl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===oo||e.mapping===ao?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Eh=this._renderer.getRenderTarget(),Th=this._renderer.getActiveCubeFace(),wh=this._renderer.getActiveMipmapLevel(),Ah=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ti,minFilter:Ti,generateMipmaps:!1,type:ua,format:gi,colorSpace:uo,depthBuffer:!1},o=ug(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ug(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yE(l)),this._blurMaterial=SE(l,e,t)}return o}_compileMaterial(e){const t=new Yn(this._lodPlanes[0],e);this._renderer.compile(t,Mh)}_sceneToCubeUV(e,t,r,o){const h=new ni(90,1,t,r),d=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],g=this._renderer,_=g.autoClear,x=g.toneMapping;g.getClearColor(ag),g.toneMapping=wr,g.autoClear=!1;const S=new n_({name:"PMREM.Background",side:kn,depthWrite:!1,depthTest:!1}),E=new Yn(new go,S);let w=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,w=!0):(S.color.copy(ag),w=!0);for(let v=0;v<6;v++){const D=v%3;D===0?(h.up.set(0,d[v],0),h.lookAt(p[v],0,0)):D===1?(h.up.set(0,0,d[v]),h.lookAt(0,p[v],0)):(h.up.set(0,d[v],0),h.lookAt(0,0,p[v]));const b=this._cubeSize;Wl(o,D*b,v>2?b:0,b,b),g.setRenderTarget(o),w&&g.render(E,h),g.render(e,h)}E.geometry.dispose(),E.material.dispose(),g.toneMapping=x,g.autoClear=_,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===oo||e.mapping===ao;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=fg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hg());const l=o?this._cubemapMaterial:this._equirectMaterial,u=new Yn(this._lodPlanes[0],l),h=l.uniforms;h.envMap.value=e;const d=this._cubeSize;Wl(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(u,Mh)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodPlanes.length;for(let l=1;l<o;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),h=lg[(o-l-1)%lg.length];this._blur(e,l-1,l,u,h)}t.autoClear=r}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,h){const d=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,_=new Yn(this._lodPlanes[o],p),x=p.uniforms,S=this._sizeLods[r]-1,E=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*es-1),w=l/E,y=isFinite(l)?1+Math.floor(g*w):es;y>es&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${es}`);const v=[];let D=0;for(let O=0;O<es;++O){const Y=O/w,P=Math.exp(-Y*Y/2);v.push(P),O===0?D+=P:O<y&&(D+=2*P)}for(let O=0;O<v.length;O++)v[O]=v[O]/D;x.envMap.value=e.texture,x.samples.value=y,x.weights.value=v,x.latitudinal.value=u==="latitudinal",h&&(x.poleAxis.value=h);const{_lodMax:b}=this;x.dTheta.value=E,x.mipInt.value=b-r;const A=this._sizeLods[o],W=3*A*(o>b-Qs?o-b+Qs:0),I=4*(this._cubeSize-A);Wl(t,W,I,3*A,2*A),d.setRenderTarget(t),d.render(_,Mh)}}function yE(s){const e=[],t=[],r=[];let o=s;const l=s-Qs+1+og.length;for(let u=0;u<l;u++){const h=Math.pow(2,o);t.push(h);let d=1/h;u>s-Qs?d=og[u-s+Qs-1]:u===0&&(d=0),r.push(d);const p=1/(h-2),g=-p,_=1+p,x=[g,g,_,g,_,_,g,g,_,_,g,_],S=6,E=6,w=3,y=2,v=1,D=new Float32Array(w*E*S),b=new Float32Array(y*E*S),A=new Float32Array(v*E*S);for(let I=0;I<S;I++){const O=I%3*2/3-1,Y=I>2?0:-1,P=[O,Y,0,O+2/3,Y,0,O+2/3,Y+1,0,O,Y,0,O+2/3,Y+1,0,O,Y+1,0];D.set(P,w*E*I),b.set(x,y*E*I);const R=[I,I,I,I,I,I];A.set(R,v*E*I)}const W=new ii;W.setAttribute("position",new wi(D,w)),W.setAttribute("uv",new wi(b,y)),W.setAttribute("faceIndex",new wi(A,v)),e.push(W),o>Qs&&o--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function ug(s,e,t){const r=new ss(s,e,t);return r.texture.mapping=lc,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function Wl(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function SE(s,e,t){const r=new Float32Array(es),o=new X(0,1,0);return new Cr({name:"SphericalGaussianBlur",defines:{n:es,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function hg(){return new Cr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function fg(){return new Cr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Bf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tr,depthTest:!1,depthWrite:!1})}function Bf(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ME(s){let e=new WeakMap,t=null;function r(h){if(h&&h.isTexture){const d=h.mapping,p=d===Vh||d===Gh,g=d===oo||d===ao;if(p||g){let _=e.get(h);const x=_!==void 0?_.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==x)return t===null&&(t=new cg(s)),_=p?t.fromEquirectangular(h,_):t.fromCubemap(h,_),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),_.texture;if(_!==void 0)return _.texture;{const S=h.image;return p&&S&&S.height>0||g&&S&&o(S)?(t===null&&(t=new cg(s)),_=p?t.fromEquirectangular(h):t.fromCubemap(h),_.texture.pmremVersion=h.pmremVersion,e.set(h,_),h.addEventListener("dispose",l),_.texture):null}}}return h}function o(h){let d=0;const p=6;for(let g=0;g<p;g++)h[g]!==void 0&&d++;return d===p}function l(h){const d=h.target;d.removeEventListener("dispose",l);const p=e.get(d);p!==void 0&&(e.delete(d),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function EE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let o;switch(r){case"WEBGL_depth_texture":o=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":o=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":o=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":o=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:o=s.getExtension(r)}return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&$s("THREE.WebGLRenderer: "+r+" extension not supported."),o}}}function TE(s,e,t,r){const o={},l=new WeakMap;function u(_){const x=_.target;x.index!==null&&e.remove(x.index);for(const E in x.attributes)e.remove(x.attributes[E]);x.removeEventListener("dispose",u),delete o[x.id];const S=l.get(x);S&&(e.remove(S),l.delete(x)),r.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function h(_,x){return o[x.id]===!0||(x.addEventListener("dispose",u),o[x.id]=!0,t.memory.geometries++),x}function d(_){const x=_.attributes;for(const S in x)e.update(x[S],s.ARRAY_BUFFER)}function p(_){const x=[],S=_.index,E=_.attributes.position;let w=0;if(S!==null){const D=S.array;w=S.version;for(let b=0,A=D.length;b<A;b+=3){const W=D[b+0],I=D[b+1],O=D[b+2];x.push(W,I,I,O,O,W)}}else if(E!==void 0){const D=E.array;w=E.version;for(let b=0,A=D.length/3-1;b<A;b+=3){const W=b+0,I=b+1,O=b+2;x.push(W,I,I,O,O,W)}}else return;const y=new(Jg(x)?r_:i_)(x,1);y.version=w;const v=l.get(_);v&&e.remove(v),l.set(_,y)}function g(_){const x=l.get(_);if(x){const S=_.index;S!==null&&x.version<S.version&&p(_)}else p(_);return l.get(_)}return{get:h,update:d,getWireframeAttribute:g}}function wE(s,e,t){let r;function o(x){r=x}let l,u;function h(x){l=x.type,u=x.bytesPerElement}function d(x,S){s.drawElements(r,S,l,x*u),t.update(S,r,1)}function p(x,S,E){E!==0&&(s.drawElementsInstanced(r,S,l,x*u,E),t.update(S,r,E))}function g(x,S,E){if(E===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,x,0,E);let y=0;for(let v=0;v<E;v++)y+=S[v];t.update(y,r,1)}function _(x,S,E,w){if(E===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let v=0;v<x.length;v++)p(x[v]/u,S[v],w[v]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,x,0,w,0,E);let v=0;for(let D=0;D<E;D++)v+=S[D]*w[D];t.update(v,r,1)}}this.setMode=o,this.setIndex=h,this.render=d,this.renderInstances=p,this.renderMultiDraw=g,this.renderMultiDrawInstances=_}function AE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,h){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=h*(l/3);break;case s.LINES:t.lines+=h*(l/2);break;case s.LINE_STRIP:t.lines+=h*(l-1);break;case s.LINE_LOOP:t.lines+=h*l;break;case s.POINTS:t.points+=h*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function CE(s,e,t){const r=new WeakMap,o=new Yt;function l(u,h,d){const p=u.morphTargetInfluences,g=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,_=g!==void 0?g.length:0;let x=r.get(h);if(x===void 0||x.count!==_){let R=function(){Y.dispose(),r.delete(h),h.removeEventListener("dispose",R)};var S=R;x!==void 0&&x.texture.dispose();const E=h.morphAttributes.position!==void 0,w=h.morphAttributes.normal!==void 0,y=h.morphAttributes.color!==void 0,v=h.morphAttributes.position||[],D=h.morphAttributes.normal||[],b=h.morphAttributes.color||[];let A=0;E===!0&&(A=1),w===!0&&(A=2),y===!0&&(A=3);let W=h.attributes.position.count*A,I=1;W>e.maxTextureSize&&(I=Math.ceil(W/e.maxTextureSize),W=e.maxTextureSize);const O=new Float32Array(W*I*4*_),Y=new e_(O,W,I,_);Y.type=Xi,Y.needsUpdate=!0;const P=A*4;for(let z=0;z<_;z++){const re=v[z],Q=D[z],de=b[z],pe=W*I*4*z;for(let ce=0;ce<re.count;ce++){const ue=ce*P;E===!0&&(o.fromBufferAttribute(re,ce),O[pe+ue+0]=o.x,O[pe+ue+1]=o.y,O[pe+ue+2]=o.z,O[pe+ue+3]=0),w===!0&&(o.fromBufferAttribute(Q,ce),O[pe+ue+4]=o.x,O[pe+ue+5]=o.y,O[pe+ue+6]=o.z,O[pe+ue+7]=0),y===!0&&(o.fromBufferAttribute(de,ce),O[pe+ue+8]=o.x,O[pe+ue+9]=o.y,O[pe+ue+10]=o.z,O[pe+ue+11]=de.itemSize===4?o.w:1)}}x={count:_,texture:Y,size:new Fe(W,I)},r.set(h,x),h.addEventListener("dispose",R)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)d.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let E=0;for(let y=0;y<p.length;y++)E+=p[y];const w=h.morphTargetsRelative?1:1-E;d.getUniforms().setValue(s,"morphTargetBaseInfluence",w),d.getUniforms().setValue(s,"morphTargetInfluences",p)}d.getUniforms().setValue(s,"morphTargetsTexture",x.texture,t),d.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}return{update:l}}function RE(s,e,t,r){let o=new WeakMap;function l(d){const p=r.render.frame,g=d.geometry,_=e.get(d,g);if(o.get(_)!==p&&(e.update(_),o.set(_,p)),d.isInstancedMesh&&(d.hasEventListener("dispose",h)===!1&&d.addEventListener("dispose",h),o.get(d)!==p&&(t.update(d.instanceMatrix,s.ARRAY_BUFFER),d.instanceColor!==null&&t.update(d.instanceColor,s.ARRAY_BUFFER),o.set(d,p))),d.isSkinnedMesh){const x=d.skeleton;o.get(x)!==p&&(x.update(),o.set(x,p))}return _}function u(){o=new WeakMap}function h(d){const p=d.target;p.removeEventListener("dispose",h),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const M_=new zn,dg=new c_(1,1),E_=new e_,T_=new Tx,w_=new a_,pg=[],mg=[],gg=new Float32Array(16),_g=new Float32Array(9),vg=new Float32Array(4);function _o(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=pg[o];if(l===void 0&&(l=new Float32Array(o),pg[o]=l),e!==0){r.toArray(l,0);for(let u=1,h=0;u!==e;++u)h+=t,s[u].toArray(l,h)}return l}function nn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function rn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function fc(s,e){let t=mg[e];t===void 0&&(t=new Int32Array(e),mg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function bE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function PE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2fv(this.addr,e),rn(t,e)}}function LE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(nn(t,e))return;s.uniform3fv(this.addr,e),rn(t,e)}}function DE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4fv(this.addr,e),rn(t,e)}}function NE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;vg.set(r),s.uniformMatrix2fv(this.addr,!1,vg),rn(t,r)}}function IE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;_g.set(r),s.uniformMatrix3fv(this.addr,!1,_g),rn(t,r)}}function UE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(nn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),rn(t,e)}else{if(nn(t,r))return;gg.set(r),s.uniformMatrix4fv(this.addr,!1,gg),rn(t,r)}}function FE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function OE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2iv(this.addr,e),rn(t,e)}}function kE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3iv(this.addr,e),rn(t,e)}}function zE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4iv(this.addr,e),rn(t,e)}}function BE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function HE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(nn(t,e))return;s.uniform2uiv(this.addr,e),rn(t,e)}}function VE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(nn(t,e))return;s.uniform3uiv(this.addr,e),rn(t,e)}}function GE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(nn(t,e))return;s.uniform4uiv(this.addr,e),rn(t,e)}}function WE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(dg.compareFunction=Kg,l=dg):l=M_,t.setTexture2D(e||l,o)}function jE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||T_,o)}function XE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||w_,o)}function YE(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||E_,o)}function qE(s){switch(s){case 5126:return bE;case 35664:return PE;case 35665:return LE;case 35666:return DE;case 35674:return NE;case 35675:return IE;case 35676:return UE;case 5124:case 35670:return FE;case 35667:case 35671:return OE;case 35668:case 35672:return kE;case 35669:case 35673:return zE;case 5125:return BE;case 36294:return HE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return jE;case 35680:case 36300:case 36308:case 36293:return XE;case 36289:case 36303:case 36311:case 36292:return YE}}function $E(s,e){s.uniform1fv(this.addr,e)}function ZE(s,e){const t=_o(e,this.size,2);s.uniform2fv(this.addr,t)}function KE(s,e){const t=_o(e,this.size,3);s.uniform3fv(this.addr,t)}function JE(s,e){const t=_o(e,this.size,4);s.uniform4fv(this.addr,t)}function QE(s,e){const t=_o(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function eT(s,e){const t=_o(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function tT(s,e){const t=_o(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function nT(s,e){s.uniform1iv(this.addr,e)}function iT(s,e){s.uniform2iv(this.addr,e)}function rT(s,e){s.uniform3iv(this.addr,e)}function sT(s,e){s.uniform4iv(this.addr,e)}function oT(s,e){s.uniform1uiv(this.addr,e)}function aT(s,e){s.uniform2uiv(this.addr,e)}function lT(s,e){s.uniform3uiv(this.addr,e)}function cT(s,e){s.uniform4uiv(this.addr,e)}function uT(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2D(e[u]||M_,l[u])}function hT(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||T_,l[u])}function fT(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||w_,l[u])}function dT(s,e,t){const r=this.cache,o=e.length,l=fc(t,o);nn(r,l)||(s.uniform1iv(this.addr,l),rn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||E_,l[u])}function pT(s){switch(s){case 5126:return $E;case 35664:return ZE;case 35665:return KE;case 35666:return JE;case 35674:return QE;case 35675:return eT;case 35676:return tT;case 5124:case 35670:return nT;case 35667:case 35671:return iT;case 35668:case 35672:return rT;case 35669:case 35673:return sT;case 5125:return oT;case 36294:return aT;case 36295:return lT;case 36296:return cT;case 35678:case 36198:case 36298:case 36306:case 35682:return uT;case 35679:case 36299:case 36307:return hT;case 35680:case 36300:case 36308:case 36293:return fT;case 36289:case 36303:case 36311:case 36292:return dT}}class mT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=qE(t.type)}}class gT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pT(t.type)}}class _T{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const h=o[l];h.setValue(e,t[h.id],r)}}}const Ch=/(\w+)(\])?(\[|\.)?/g;function xg(s,e){s.seq.push(e),s.map[e.id]=e}function vT(s,e,t){const r=s.name,o=r.length;for(Ch.lastIndex=0;;){const l=Ch.exec(r),u=Ch.lastIndex;let h=l[1];const d=l[2]==="]",p=l[3];if(d&&(h=h|0),p===void 0||p==="["&&u+2===o){xg(t,p===void 0?new mT(h,s,e):new gT(h,s,e));break}else{let _=t.map[h];_===void 0&&(_=new _T(h),xg(t,_)),t=_}}}class nc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<r;++o){const l=e.getActiveUniform(t,o),u=e.getUniformLocation(t,l.name);vT(l,u,this)}}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const h=t[l],d=r[h.id];d.needsUpdate!==!1&&h.setValue(e,d.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function yg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const xT=37297;let yT=0;function ST(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const h=u+1;r.push(`${h===e?">":" "} ${h}: ${t[u]}`)}return r.join(`
`)}const Sg=new ht;function MT(s){Ct._getMatrix(Sg,Ct.workingColorSpace,s);const e=`mat3( ${Sg.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(s)){case ic:return[e,"LinearTransferOETF"];case Dt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Mg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),o=s.getShaderInfoLog(e).trim();if(r&&o==="")return"";const l=/ERROR: 0:(\d+)/.exec(o);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+o+`

`+ST(s.getShaderSource(e),u)}else return o}function ET(s,e){const t=MT(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function TT(s,e){let t;switch(e){case $0:t="Linear";break;case Z0:t="Reinhard";break;case K0:t="Cineon";break;case J0:t="ACESFilmic";break;case ex:t="AgX";break;case tx:t="Neutral";break;case Q0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jl=new X;function wT(){Ct.getLuminanceCoefficients(jl);const s=jl.x.toFixed(4),e=jl.y.toFixed(4),t=jl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(na).join(`
`)}function CT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function RT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let h=1;l.type===s.FLOAT_MAT2&&(h=2),l.type===s.FLOAT_MAT3&&(h=3),l.type===s.FLOAT_MAT4&&(h=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:h}}return t}function na(s){return s!==""}function Eg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tf(s){return s.replace(bT,LT)}const PT=new Map;function LT(s,e){let t=ft[e];if(t===void 0){const r=PT.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Tf(t)}const DT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wg(s){return s.replace(DT,NT)}function NT(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function Ag(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function IT(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Og?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===R0?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Wi&&(e="SHADOWMAP_TYPE_VSM"),e}function UT(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case oo:case ao:e="ENVMAP_TYPE_CUBE";break;case lc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function FT(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case ao:e="ENVMAP_MODE_REFRACTION";break}return e}function OT(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case kg:e="ENVMAP_BLENDING_MULTIPLY";break;case Y0:e="ENVMAP_BLENDING_MIX";break;case q0:e="ENVMAP_BLENDING_ADD";break}return e}function kT(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:r,maxMip:t}}function zT(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,h=t.fragmentShader;const d=IT(t),p=UT(t),g=FT(t),_=OT(t),x=kT(t),S=AT(t),E=CT(l),w=o.createProgram();let y,v,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(na).join(`
`),v.length>0&&(v+=`
`)):(y=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(na).join(`
`),v=[Ag(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+g:"",t.envMap?"#define "+_:"",x?"#define CUBEUV_TEXEL_WIDTH "+x.texelWidth:"",x?"#define CUBEUV_TEXEL_HEIGHT "+x.texelHeight:"",x?"#define CUBEUV_MAX_MIP "+x.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wr?"#define TONE_MAPPING":"",t.toneMapping!==wr?ft.tonemapping_pars_fragment:"",t.toneMapping!==wr?TT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,ET("linearToOutputTexel",t.outputColorSpace),wT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(na).join(`
`)),u=Tf(u),u=Eg(u,t),u=Tg(u,t),h=Tf(h),h=Eg(h,t),h=Tg(h,t),u=wg(u),h=wg(h),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const b=D+y+u,A=D+v+h,W=yg(o,o.VERTEX_SHADER,b),I=yg(o,o.FRAGMENT_SHADER,A);o.attachShader(w,W),o.attachShader(w,I),t.index0AttributeName!==void 0?o.bindAttribLocation(w,0,t.index0AttributeName):t.morphTargets===!0&&o.bindAttribLocation(w,0,"position"),o.linkProgram(w);function O(z){if(s.debug.checkShaderErrors){const re=o.getProgramInfoLog(w).trim(),Q=o.getShaderInfoLog(W).trim(),de=o.getShaderInfoLog(I).trim();let pe=!0,ce=!0;if(o.getProgramParameter(w,o.LINK_STATUS)===!1)if(pe=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,w,W,I);else{const ue=Mg(o,W,"vertex"),B=Mg(o,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(w,o.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+re+`
`+ue+`
`+B)}else re!==""?console.warn("THREE.WebGLProgram: Program Info Log:",re):(Q===""||de==="")&&(ce=!1);ce&&(z.diagnostics={runnable:pe,programLog:re,vertexShader:{log:Q,prefix:y},fragmentShader:{log:de,prefix:v}})}o.deleteShader(W),o.deleteShader(I),Y=new nc(o,w),P=RT(o,w)}let Y;this.getUniforms=function(){return Y===void 0&&O(this),Y};let P;this.getAttributes=function(){return P===void 0&&O(this),P};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=o.getProgramParameter(w,xT)),R},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yT++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=W,this.fragmentShader=I,this}let BT=0;class HT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,o=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(o)===!1&&(u.add(o),o.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new VT(e),t.set(e,r)),r}}class VT{constructor(e){this.id=BT++,this.code=e,this.usedTimes=0}}function GT(s,e,t,r,o,l,u){const h=new If,d=new HT,p=new Set,g=[],_=o.logarithmicDepthBuffer,x=o.vertexTextures;let S=o.precision;const E={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,R,z,re,Q){const de=re.fog,pe=Q.geometry,ce=P.isMeshStandardMaterial?re.environment:null,ue=(P.isMeshStandardMaterial?t:e).get(P.envMap||ce),B=ue&&ue.mapping===lc?ue.image.height:null,oe=E[P.type];P.precision!==null&&(S=o.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const se=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,F=se!==void 0?se.length:0;let te=0;pe.morphAttributes.position!==void 0&&(te=1),pe.morphAttributes.normal!==void 0&&(te=2),pe.morphAttributes.color!==void 0&&(te=3);let we,Z,le,ye;if(oe){const Mt=Ei[oe];we=Mt.vertexShader,Z=Mt.fragmentShader}else we=P.vertexShader,Z=P.fragmentShader,d.update(P),le=d.getVertexShaderID(P),ye=d.getFragmentShaderID(P);const _e=s.getRenderTarget(),Ae=s.state.buffers.depth.getReversed(),Ne=Q.isInstancedMesh===!0,Xe=Q.isBatchedMesh===!0,Rt=!!P.map,pt=!!P.matcap,Pt=!!ue,H=!!P.aoMap,Wt=!!P.lightMap,st=!!P.bumpMap,ct=!!P.normalMap,Ge=!!P.displacementMap,mt=!!P.emissiveMap,Ye=!!P.metalnessMap,L=!!P.roughnessMap,M=P.anisotropy>0,q=P.clearcoat>0,he=P.dispersion>0,ge=P.iridescence>0,fe=P.sheen>0,ke=P.transmission>0,Ce=M&&!!P.anisotropyMap,Pe=q&&!!P.clearcoatMap,ut=q&&!!P.clearcoatNormalMap,Ee=q&&!!P.clearcoatRoughnessMap,He=ge&&!!P.iridescenceMap,Ke=ge&&!!P.iridescenceThicknessMap,et=fe&&!!P.sheenColorMap,Ve=fe&&!!P.sheenRoughnessMap,gt=!!P.specularMap,ot=!!P.specularColorMap,bt=!!P.specularIntensityMap,j=ke&&!!P.transmissionMap,Re=ke&&!!P.thicknessMap,ae=!!P.gradientMap,me=!!P.alphaMap,Ie=P.alphaTest>0,De=!!P.alphaHash,at=!!P.extensions;let Ut=wr;P.toneMapped&&(_e===null||_e.isXRRenderTarget===!0)&&(Ut=s.toneMapping);const Jt={shaderID:oe,shaderType:P.type,shaderName:P.name,vertexShader:we,fragmentShader:Z,defines:P.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Xe,batchingColor:Xe&&Q._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&Q.instanceColor!==null,instancingMorph:Ne&&Q.morphTexture!==null,supportsVertexTextures:x,outputColorSpace:_e===null?s.outputColorSpace:_e.isXRRenderTarget===!0?_e.texture.colorSpace:uo,alphaToCoverage:!!P.alphaToCoverage,map:Rt,matcap:pt,envMap:Pt,envMapMode:Pt&&ue.mapping,envMapCubeUVHeight:B,aoMap:H,lightMap:Wt,bumpMap:st,normalMap:ct,displacementMap:x&&Ge,emissiveMap:mt,normalMapObjectSpace:ct&&P.normalMapType===sx,normalMapTangentSpace:ct&&P.normalMapType===Zg,metalnessMap:Ye,roughnessMap:L,anisotropy:M,anisotropyMap:Ce,clearcoat:q,clearcoatMap:Pe,clearcoatNormalMap:ut,clearcoatRoughnessMap:Ee,dispersion:he,iridescence:ge,iridescenceMap:He,iridescenceThicknessMap:Ke,sheen:fe,sheenColorMap:et,sheenRoughnessMap:Ve,specularMap:gt,specularColorMap:ot,specularIntensityMap:bt,transmission:ke,transmissionMap:j,thicknessMap:Re,gradientMap:ae,opaque:P.transparent===!1&&P.blending===no&&P.alphaToCoverage===!1,alphaMap:me,alphaTest:Ie,alphaHash:De,combine:P.combine,mapUv:Rt&&w(P.map.channel),aoMapUv:H&&w(P.aoMap.channel),lightMapUv:Wt&&w(P.lightMap.channel),bumpMapUv:st&&w(P.bumpMap.channel),normalMapUv:ct&&w(P.normalMap.channel),displacementMapUv:Ge&&w(P.displacementMap.channel),emissiveMapUv:mt&&w(P.emissiveMap.channel),metalnessMapUv:Ye&&w(P.metalnessMap.channel),roughnessMapUv:L&&w(P.roughnessMap.channel),anisotropyMapUv:Ce&&w(P.anisotropyMap.channel),clearcoatMapUv:Pe&&w(P.clearcoatMap.channel),clearcoatNormalMapUv:ut&&w(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&w(P.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&w(P.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&w(P.iridescenceThicknessMap.channel),sheenColorMapUv:et&&w(P.sheenColorMap.channel),sheenRoughnessMapUv:Ve&&w(P.sheenRoughnessMap.channel),specularMapUv:gt&&w(P.specularMap.channel),specularColorMapUv:ot&&w(P.specularColorMap.channel),specularIntensityMapUv:bt&&w(P.specularIntensityMap.channel),transmissionMapUv:j&&w(P.transmissionMap.channel),thicknessMapUv:Re&&w(P.thicknessMap.channel),alphaMapUv:me&&w(P.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(ct||M),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!pe.attributes.uv&&(Rt||me),fog:!!de,useFog:P.fog===!0,fogExp2:!!de&&de.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:_,reverseDepthBuffer:Ae,skinning:Q.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:te,numDirLights:R.directional.length,numPointLights:R.point.length,numSpotLights:R.spot.length,numSpotLightMaps:R.spotLightMap.length,numRectAreaLights:R.rectArea.length,numHemiLights:R.hemi.length,numDirLightShadows:R.directionalShadowMap.length,numPointLightShadows:R.pointShadowMap.length,numSpotLightShadows:R.spotShadowMap.length,numSpotLightShadowsWithMaps:R.numSpotLightShadowsWithMaps,numLightProbes:R.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&z.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ut,decodeVideoTexture:Rt&&P.map.isVideoTexture===!0&&Ct.getTransfer(P.map.colorSpace)===Dt,decodeVideoTextureEmissive:mt&&P.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(P.emissiveMap.colorSpace)===Dt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===pi,flipSided:P.side===kn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:at&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&P.extensions.multiDraw===!0||Xe)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Jt.vertexUv1s=p.has(1),Jt.vertexUv2s=p.has(2),Jt.vertexUv3s=p.has(3),p.clear(),Jt}function v(P){const R=[];if(P.shaderID?R.push(P.shaderID):(R.push(P.customVertexShaderID),R.push(P.customFragmentShaderID)),P.defines!==void 0)for(const z in P.defines)R.push(z),R.push(P.defines[z]);return P.isRawShaderMaterial===!1&&(D(R,P),b(R,P),R.push(s.outputColorSpace)),R.push(P.customProgramCacheKey),R.join()}function D(P,R){P.push(R.precision),P.push(R.outputColorSpace),P.push(R.envMapMode),P.push(R.envMapCubeUVHeight),P.push(R.mapUv),P.push(R.alphaMapUv),P.push(R.lightMapUv),P.push(R.aoMapUv),P.push(R.bumpMapUv),P.push(R.normalMapUv),P.push(R.displacementMapUv),P.push(R.emissiveMapUv),P.push(R.metalnessMapUv),P.push(R.roughnessMapUv),P.push(R.anisotropyMapUv),P.push(R.clearcoatMapUv),P.push(R.clearcoatNormalMapUv),P.push(R.clearcoatRoughnessMapUv),P.push(R.iridescenceMapUv),P.push(R.iridescenceThicknessMapUv),P.push(R.sheenColorMapUv),P.push(R.sheenRoughnessMapUv),P.push(R.specularMapUv),P.push(R.specularColorMapUv),P.push(R.specularIntensityMapUv),P.push(R.transmissionMapUv),P.push(R.thicknessMapUv),P.push(R.combine),P.push(R.fogExp2),P.push(R.sizeAttenuation),P.push(R.morphTargetsCount),P.push(R.morphAttributeCount),P.push(R.numDirLights),P.push(R.numPointLights),P.push(R.numSpotLights),P.push(R.numSpotLightMaps),P.push(R.numHemiLights),P.push(R.numRectAreaLights),P.push(R.numDirLightShadows),P.push(R.numPointLightShadows),P.push(R.numSpotLightShadows),P.push(R.numSpotLightShadowsWithMaps),P.push(R.numLightProbes),P.push(R.shadowMapType),P.push(R.toneMapping),P.push(R.numClippingPlanes),P.push(R.numClipIntersection),P.push(R.depthPacking)}function b(P,R){h.disableAll(),R.supportsVertexTextures&&h.enable(0),R.instancing&&h.enable(1),R.instancingColor&&h.enable(2),R.instancingMorph&&h.enable(3),R.matcap&&h.enable(4),R.envMap&&h.enable(5),R.normalMapObjectSpace&&h.enable(6),R.normalMapTangentSpace&&h.enable(7),R.clearcoat&&h.enable(8),R.iridescence&&h.enable(9),R.alphaTest&&h.enable(10),R.vertexColors&&h.enable(11),R.vertexAlphas&&h.enable(12),R.vertexUv1s&&h.enable(13),R.vertexUv2s&&h.enable(14),R.vertexUv3s&&h.enable(15),R.vertexTangents&&h.enable(16),R.anisotropy&&h.enable(17),R.alphaHash&&h.enable(18),R.batching&&h.enable(19),R.dispersion&&h.enable(20),R.batchingColor&&h.enable(21),P.push(h.mask),h.disableAll(),R.fog&&h.enable(0),R.useFog&&h.enable(1),R.flatShading&&h.enable(2),R.logarithmicDepthBuffer&&h.enable(3),R.reverseDepthBuffer&&h.enable(4),R.skinning&&h.enable(5),R.morphTargets&&h.enable(6),R.morphNormals&&h.enable(7),R.morphColors&&h.enable(8),R.premultipliedAlpha&&h.enable(9),R.shadowMapEnabled&&h.enable(10),R.doubleSided&&h.enable(11),R.flipSided&&h.enable(12),R.useDepthPacking&&h.enable(13),R.dithering&&h.enable(14),R.transmission&&h.enable(15),R.sheen&&h.enable(16),R.opaque&&h.enable(17),R.pointsUvs&&h.enable(18),R.decodeVideoTexture&&h.enable(19),R.decodeVideoTextureEmissive&&h.enable(20),R.alphaToCoverage&&h.enable(21),P.push(h.mask)}function A(P){const R=E[P.type];let z;if(R){const re=Ei[R];z=Fx.clone(re.uniforms)}else z=P.uniforms;return z}function W(P,R){let z;for(let re=0,Q=g.length;re<Q;re++){const de=g[re];if(de.cacheKey===R){z=de,++z.usedTimes;break}}return z===void 0&&(z=new zT(s,R,P,l),g.push(z)),z}function I(P){if(--P.usedTimes===0){const R=g.indexOf(P);g[R]=g[g.length-1],g.pop(),P.destroy()}}function O(P){d.remove(P)}function Y(){d.dispose()}return{getParameters:y,getProgramCacheKey:v,getUniforms:A,acquireProgram:W,releaseProgram:I,releaseShaderCache:O,programs:g,dispose:Y}}function WT(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let h=s.get(u);return h===void 0&&(h={},s.set(u,h)),h}function r(u){s.delete(u)}function o(u,h,d){s.get(u)[h]=d}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function jT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Cg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Rg(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(_,x,S,E,w,y){let v=s[e];return v===void 0?(v={id:_.id,object:_,geometry:x,material:S,groupOrder:E,renderOrder:_.renderOrder,z:w,group:y},s[e]=v):(v.id=_.id,v.object=_,v.geometry=x,v.material=S,v.groupOrder=E,v.renderOrder=_.renderOrder,v.z=w,v.group=y),e++,v}function h(_,x,S,E,w,y){const v=u(_,x,S,E,w,y);S.transmission>0?r.push(v):S.transparent===!0?o.push(v):t.push(v)}function d(_,x,S,E,w,y){const v=u(_,x,S,E,w,y);S.transmission>0?r.unshift(v):S.transparent===!0?o.unshift(v):t.unshift(v)}function p(_,x){t.length>1&&t.sort(_||jT),r.length>1&&r.sort(x||Cg),o.length>1&&o.sort(x||Cg)}function g(){for(let _=e,x=s.length;_<x;_++){const S=s[_];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:d,finish:g,sort:p}}function XT(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new Rg,s.set(r,[u])):o>=l.length?(u=new Rg,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function YT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new St};break;case"SpotLight":t={position:new X,direction:new X,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new St,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new St,groundColor:new St};break;case"RectAreaLight":t={color:new St,position:new X,halfWidth:new X,halfHeight:new X};break}return s[e.id]=t,t}}}function qT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let $T=0;function ZT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function KT(s){const e=new YT,t=qT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new X);const o=new X,l=new kt,u=new kt;function h(p){let g=0,_=0,x=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,E=0,w=0,y=0,v=0,D=0,b=0,A=0,W=0,I=0,O=0;p.sort(ZT);for(let P=0,R=p.length;P<R;P++){const z=p[P],re=z.color,Q=z.intensity,de=z.distance,pe=z.shadow&&z.shadow.map?z.shadow.map.texture:null;if(z.isAmbientLight)g+=re.r*Q,_+=re.g*Q,x+=re.b*Q;else if(z.isLightProbe){for(let ce=0;ce<9;ce++)r.probe[ce].addScaledVector(z.sh.coefficients[ce],Q);O++}else if(z.isDirectionalLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const ue=z.shadow,B=t.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.directionalShadow[S]=B,r.directionalShadowMap[S]=pe,r.directionalShadowMatrix[S]=z.shadow.matrix,D++}r.directional[S]=ce,S++}else if(z.isSpotLight){const ce=e.get(z);ce.position.setFromMatrixPosition(z.matrixWorld),ce.color.copy(re).multiplyScalar(Q),ce.distance=de,ce.coneCos=Math.cos(z.angle),ce.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),ce.decay=z.decay,r.spot[w]=ce;const ue=z.shadow;if(z.map&&(r.spotLightMap[W]=z.map,W++,ue.updateMatrices(z),z.castShadow&&I++),r.spotLightMatrix[w]=ue.matrix,z.castShadow){const B=t.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,r.spotShadow[w]=B,r.spotShadowMap[w]=pe,A++}w++}else if(z.isRectAreaLight){const ce=e.get(z);ce.color.copy(re).multiplyScalar(Q),ce.halfWidth.set(z.width*.5,0,0),ce.halfHeight.set(0,z.height*.5,0),r.rectArea[y]=ce,y++}else if(z.isPointLight){const ce=e.get(z);if(ce.color.copy(z.color).multiplyScalar(z.intensity),ce.distance=z.distance,ce.decay=z.decay,z.castShadow){const ue=z.shadow,B=t.get(z);B.shadowIntensity=ue.intensity,B.shadowBias=ue.bias,B.shadowNormalBias=ue.normalBias,B.shadowRadius=ue.radius,B.shadowMapSize=ue.mapSize,B.shadowCameraNear=ue.camera.near,B.shadowCameraFar=ue.camera.far,r.pointShadow[E]=B,r.pointShadowMap[E]=pe,r.pointShadowMatrix[E]=z.shadow.matrix,b++}r.point[E]=ce,E++}else if(z.isHemisphereLight){const ce=e.get(z);ce.skyColor.copy(z.color).multiplyScalar(Q),ce.groundColor.copy(z.groundColor).multiplyScalar(Q),r.hemi[v]=ce,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Le.LTC_FLOAT_1,r.rectAreaLTC2=Le.LTC_FLOAT_2):(r.rectAreaLTC1=Le.LTC_HALF_1,r.rectAreaLTC2=Le.LTC_HALF_2)),r.ambient[0]=g,r.ambient[1]=_,r.ambient[2]=x;const Y=r.hash;(Y.directionalLength!==S||Y.pointLength!==E||Y.spotLength!==w||Y.rectAreaLength!==y||Y.hemiLength!==v||Y.numDirectionalShadows!==D||Y.numPointShadows!==b||Y.numSpotShadows!==A||Y.numSpotMaps!==W||Y.numLightProbes!==O)&&(r.directional.length=S,r.spot.length=w,r.rectArea.length=y,r.point.length=E,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=b,r.pointShadowMap.length=b,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=b,r.spotLightMatrix.length=A+W-I,r.spotLightMap.length=W,r.numSpotLightShadowsWithMaps=I,r.numLightProbes=O,Y.directionalLength=S,Y.pointLength=E,Y.spotLength=w,Y.rectAreaLength=y,Y.hemiLength=v,Y.numDirectionalShadows=D,Y.numPointShadows=b,Y.numSpotShadows=A,Y.numSpotMaps=W,Y.numLightProbes=O,r.version=$T++)}function d(p,g){let _=0,x=0,S=0,E=0,w=0;const y=g.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const b=p[v];if(b.isDirectionalLight){const A=r.directional[_];A.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),_++}else if(b.isSpotLight){const A=r.spot[S];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(y),A.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),A.direction.sub(o),A.direction.transformDirection(y),S++}else if(b.isRectAreaLight){const A=r.rectArea[E];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(y),u.identity(),l.copy(b.matrixWorld),l.premultiply(y),u.extractRotation(l),A.halfWidth.set(b.width*.5,0,0),A.halfHeight.set(0,b.height*.5,0),A.halfWidth.applyMatrix4(u),A.halfHeight.applyMatrix4(u),E++}else if(b.isPointLight){const A=r.point[x];A.position.setFromMatrixPosition(b.matrixWorld),A.position.applyMatrix4(y),x++}else if(b.isHemisphereLight){const A=r.hemi[w];A.direction.setFromMatrixPosition(b.matrixWorld),A.direction.transformDirection(y),w++}}}return{setup:h,setupView:d,state:r}}function bg(s){const e=new KT(s),t=[],r=[];function o(g){p.camera=g,t.length=0,r.length=0}function l(g){t.push(g)}function u(g){r.push(g)}function h(){e.setup(t)}function d(g){e.setupView(t,g)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:o,state:p,setupLights:h,setupLightsView:d,pushLight:l,pushShadow:u}}function JT(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let h;return u===void 0?(h=new bg(s),e.set(o,[h])):l>=u.length?(h=new bg(s),u.push(h)):h=u[l],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const QT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,e1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function t1(s,e,t){let r=new Uf;const o=new Fe,l=new Fe,u=new Yt,h=new Ey({depthPacking:rx}),d=new Ty,p={},g=t.maxTextureSize,_={[Ar]:kn,[kn]:Ar,[pi]:pi},x=new Cr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:QT,fragmentShader:e1}),S=x.clone();S.defines.HORIZONTAL_PASS=1;const E=new ii;E.setAttribute("position",new wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Yn(E,x),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Og;let v=this.type;this.render=function(I,O,Y){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||I.length===0)return;const P=s.getRenderTarget(),R=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),re=s.state;re.setBlending(Tr),re.buffers.color.setClear(1,1,1,1),re.buffers.depth.setTest(!0),re.setScissorTest(!1);const Q=v!==Wi&&this.type===Wi,de=v===Wi&&this.type!==Wi;for(let pe=0,ce=I.length;pe<ce;pe++){const ue=I[pe],B=ue.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;o.copy(B.mapSize);const oe=B.getFrameExtents();if(o.multiply(oe),l.copy(B.mapSize),(o.x>g||o.y>g)&&(o.x>g&&(l.x=Math.floor(g/oe.x),o.x=l.x*oe.x,B.mapSize.x=l.x),o.y>g&&(l.y=Math.floor(g/oe.y),o.y=l.y*oe.y,B.mapSize.y=l.y)),B.map===null||Q===!0||de===!0){const F=this.type!==Wi?{minFilter:_i,magFilter:_i}:{};B.map!==null&&B.map.dispose(),B.map=new ss(o.x,o.y,F),B.map.texture.name=ue.name+".shadowMap",B.camera.updateProjectionMatrix()}s.setRenderTarget(B.map),s.clear();const se=B.getViewportCount();for(let F=0;F<se;F++){const te=B.getViewport(F);u.set(l.x*te.x,l.y*te.y,l.x*te.z,l.y*te.w),re.viewport(u),B.updateMatrices(ue,F),r=B.getFrustum(),A(O,Y,B.camera,ue,this.type)}B.isPointLightShadow!==!0&&this.type===Wi&&D(B,Y),B.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(P,R,z)};function D(I,O){const Y=e.update(w);x.defines.VSM_SAMPLES!==I.blurSamples&&(x.defines.VSM_SAMPLES=I.blurSamples,S.defines.VSM_SAMPLES=I.blurSamples,x.needsUpdate=!0,S.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new ss(o.x,o.y)),x.uniforms.shadow_pass.value=I.map.texture,x.uniforms.resolution.value=I.mapSize,x.uniforms.radius.value=I.radius,s.setRenderTarget(I.mapPass),s.clear(),s.renderBufferDirect(O,null,Y,x,w,null),S.uniforms.shadow_pass.value=I.mapPass.texture,S.uniforms.resolution.value=I.mapSize,S.uniforms.radius.value=I.radius,s.setRenderTarget(I.map),s.clear(),s.renderBufferDirect(O,null,Y,S,w,null)}function b(I,O,Y,P){let R=null;const z=Y.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(z!==void 0)R=z;else if(R=Y.isPointLight===!0?d:h,s.localClippingEnabled&&O.clipShadows===!0&&Array.isArray(O.clippingPlanes)&&O.clippingPlanes.length!==0||O.displacementMap&&O.displacementScale!==0||O.alphaMap&&O.alphaTest>0||O.map&&O.alphaTest>0){const re=R.uuid,Q=O.uuid;let de=p[re];de===void 0&&(de={},p[re]=de);let pe=de[Q];pe===void 0&&(pe=R.clone(),de[Q]=pe,O.addEventListener("dispose",W)),R=pe}if(R.visible=O.visible,R.wireframe=O.wireframe,P===Wi?R.side=O.shadowSide!==null?O.shadowSide:O.side:R.side=O.shadowSide!==null?O.shadowSide:_[O.side],R.alphaMap=O.alphaMap,R.alphaTest=O.alphaTest,R.map=O.map,R.clipShadows=O.clipShadows,R.clippingPlanes=O.clippingPlanes,R.clipIntersection=O.clipIntersection,R.displacementMap=O.displacementMap,R.displacementScale=O.displacementScale,R.displacementBias=O.displacementBias,R.wireframeLinewidth=O.wireframeLinewidth,R.linewidth=O.linewidth,Y.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const re=s.properties.get(R);re.light=Y}return R}function A(I,O,Y,P,R){if(I.visible===!1)return;if(I.layers.test(O.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&R===Wi)&&(!I.frustumCulled||r.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,I.matrixWorld);const Q=e.update(I),de=I.material;if(Array.isArray(de)){const pe=Q.groups;for(let ce=0,ue=pe.length;ce<ue;ce++){const B=pe[ce],oe=de[B.materialIndex];if(oe&&oe.visible){const se=b(I,oe,P,R);I.onBeforeShadow(s,I,O,Y,Q,se,B),s.renderBufferDirect(Y,null,Q,se,I,B),I.onAfterShadow(s,I,O,Y,Q,se,B)}}}else if(de.visible){const pe=b(I,de,P,R);I.onBeforeShadow(s,I,O,Y,Q,pe,null),s.renderBufferDirect(Y,null,Q,pe,I,null),I.onAfterShadow(s,I,O,Y,Q,pe,null)}}const re=I.children;for(let Q=0,de=re.length;Q<de;Q++)A(re[Q],O,Y,P,R)}function W(I){I.target.removeEventListener("dispose",W);for(const Y in p){const P=p[Y],R=I.target.uuid;R in P&&(P[R].dispose(),delete P[R])}}}const n1={[Uh]:Fh,[Oh]:Bh,[kh]:Hh,[so]:zh,[Fh]:Uh,[Bh]:Oh,[Hh]:kh,[zh]:so};function i1(s,e){function t(){let j=!1;const Re=new Yt;let ae=null;const me=new Yt(0,0,0,0);return{setMask:function(Ie){ae!==Ie&&!j&&(s.colorMask(Ie,Ie,Ie,Ie),ae=Ie)},setLocked:function(Ie){j=Ie},setClear:function(Ie,De,at,Ut,Jt){Jt===!0&&(Ie*=Ut,De*=Ut,at*=Ut),Re.set(Ie,De,at,Ut),me.equals(Re)===!1&&(s.clearColor(Ie,De,at,Ut),me.copy(Re))},reset:function(){j=!1,ae=null,me.set(-1,0,0,0)}}}function r(){let j=!1,Re=!1,ae=null,me=null,Ie=null;return{setReversed:function(De){if(Re!==De){const at=e.get("EXT_clip_control");Re?at.clipControlEXT(at.LOWER_LEFT_EXT,at.ZERO_TO_ONE_EXT):at.clipControlEXT(at.LOWER_LEFT_EXT,at.NEGATIVE_ONE_TO_ONE_EXT);const Ut=Ie;Ie=null,this.setClear(Ut)}Re=De},getReversed:function(){return Re},setTest:function(De){De?_e(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(De){ae!==De&&!j&&(s.depthMask(De),ae=De)},setFunc:function(De){if(Re&&(De=n1[De]),me!==De){switch(De){case Uh:s.depthFunc(s.NEVER);break;case Fh:s.depthFunc(s.ALWAYS);break;case Oh:s.depthFunc(s.LESS);break;case so:s.depthFunc(s.LEQUAL);break;case kh:s.depthFunc(s.EQUAL);break;case zh:s.depthFunc(s.GEQUAL);break;case Bh:s.depthFunc(s.GREATER);break;case Hh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=De}},setLocked:function(De){j=De},setClear:function(De){Ie!==De&&(Re&&(De=1-De),s.clearDepth(De),Ie=De)},reset:function(){j=!1,ae=null,me=null,Ie=null,Re=!1}}}function o(){let j=!1,Re=null,ae=null,me=null,Ie=null,De=null,at=null,Ut=null,Jt=null;return{setTest:function(Mt){j||(Mt?_e(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(Mt){Re!==Mt&&!j&&(s.stencilMask(Mt),Re=Mt)},setFunc:function(Mt,Rn,Mn){(ae!==Mt||me!==Rn||Ie!==Mn)&&(s.stencilFunc(Mt,Rn,Mn),ae=Mt,me=Rn,Ie=Mn)},setOp:function(Mt,Rn,Mn){(De!==Mt||at!==Rn||Ut!==Mn)&&(s.stencilOp(Mt,Rn,Mn),De=Mt,at=Rn,Ut=Mn)},setLocked:function(Mt){j=Mt},setClear:function(Mt){Jt!==Mt&&(s.clearStencil(Mt),Jt=Mt)},reset:function(){j=!1,Re=null,ae=null,me=null,Ie=null,De=null,at=null,Ut=null,Jt=null}}}const l=new t,u=new r,h=new o,d=new WeakMap,p=new WeakMap;let g={},_={},x=new WeakMap,S=[],E=null,w=!1,y=null,v=null,D=null,b=null,A=null,W=null,I=null,O=new St(0,0,0),Y=0,P=!1,R=null,z=null,re=null,Q=null,de=null;const pe=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,ue=0;const B=s.getParameter(s.VERSION);B.indexOf("WebGL")!==-1?(ue=parseFloat(/^WebGL (\d)/.exec(B)[1]),ce=ue>=1):B.indexOf("OpenGL ES")!==-1&&(ue=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),ce=ue>=2);let oe=null,se={};const F=s.getParameter(s.SCISSOR_BOX),te=s.getParameter(s.VIEWPORT),we=new Yt().fromArray(F),Z=new Yt().fromArray(te);function le(j,Re,ae,me){const Ie=new Uint8Array(4),De=s.createTexture();s.bindTexture(j,De),s.texParameteri(j,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(j,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let at=0;at<ae;at++)j===s.TEXTURE_3D||j===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(Re+at,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return De}const ye={};ye[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),ye[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ye[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ye[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),h.setClear(0),_e(s.DEPTH_TEST),u.setFunc(so),st(!1),ct(xm),_e(s.CULL_FACE),H(Tr);function _e(j){g[j]!==!0&&(s.enable(j),g[j]=!0)}function Ae(j){g[j]!==!1&&(s.disable(j),g[j]=!1)}function Ne(j,Re){return _[j]!==Re?(s.bindFramebuffer(j,Re),_[j]=Re,j===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=Re),j===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Xe(j,Re){let ae=S,me=!1;if(j){ae=x.get(Re),ae===void 0&&(ae=[],x.set(Re,ae));const Ie=j.textures;if(ae.length!==Ie.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let De=0,at=Ie.length;De<at;De++)ae[De]=s.COLOR_ATTACHMENT0+De;ae.length=Ie.length,me=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,me=!0);me&&s.drawBuffers(ae)}function Rt(j){return E!==j?(s.useProgram(j),E=j,!0):!1}const pt={[Qr]:s.FUNC_ADD,[P0]:s.FUNC_SUBTRACT,[L0]:s.FUNC_REVERSE_SUBTRACT};pt[D0]=s.MIN,pt[N0]=s.MAX;const Pt={[I0]:s.ZERO,[U0]:s.ONE,[F0]:s.SRC_COLOR,[Nh]:s.SRC_ALPHA,[V0]:s.SRC_ALPHA_SATURATE,[B0]:s.DST_COLOR,[k0]:s.DST_ALPHA,[O0]:s.ONE_MINUS_SRC_COLOR,[Ih]:s.ONE_MINUS_SRC_ALPHA,[H0]:s.ONE_MINUS_DST_COLOR,[z0]:s.ONE_MINUS_DST_ALPHA,[G0]:s.CONSTANT_COLOR,[W0]:s.ONE_MINUS_CONSTANT_COLOR,[j0]:s.CONSTANT_ALPHA,[X0]:s.ONE_MINUS_CONSTANT_ALPHA};function H(j,Re,ae,me,Ie,De,at,Ut,Jt,Mt){if(j===Tr){w===!0&&(Ae(s.BLEND),w=!1);return}if(w===!1&&(_e(s.BLEND),w=!0),j!==b0){if(j!==y||Mt!==P){if((v!==Qr||A!==Qr)&&(s.blendEquation(s.FUNC_ADD),v=Qr,A=Qr),Mt)switch(j){case no:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ym:s.blendFunc(s.ONE,s.ONE);break;case Sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mm:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}else switch(j){case no:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ym:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mm:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",j);break}D=null,b=null,W=null,I=null,O.set(0,0,0),Y=0,y=j,P=Mt}return}Ie=Ie||Re,De=De||ae,at=at||me,(Re!==v||Ie!==A)&&(s.blendEquationSeparate(pt[Re],pt[Ie]),v=Re,A=Ie),(ae!==D||me!==b||De!==W||at!==I)&&(s.blendFuncSeparate(Pt[ae],Pt[me],Pt[De],Pt[at]),D=ae,b=me,W=De,I=at),(Ut.equals(O)===!1||Jt!==Y)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Jt),O.copy(Ut),Y=Jt),y=j,P=!1}function Wt(j,Re){j.side===pi?Ae(s.CULL_FACE):_e(s.CULL_FACE);let ae=j.side===kn;Re&&(ae=!ae),st(ae),j.blending===no&&j.transparent===!1?H(Tr):H(j.blending,j.blendEquation,j.blendSrc,j.blendDst,j.blendEquationAlpha,j.blendSrcAlpha,j.blendDstAlpha,j.blendColor,j.blendAlpha,j.premultipliedAlpha),u.setFunc(j.depthFunc),u.setTest(j.depthTest),u.setMask(j.depthWrite),l.setMask(j.colorWrite);const me=j.stencilWrite;h.setTest(me),me&&(h.setMask(j.stencilWriteMask),h.setFunc(j.stencilFunc,j.stencilRef,j.stencilFuncMask),h.setOp(j.stencilFail,j.stencilZFail,j.stencilZPass)),mt(j.polygonOffset,j.polygonOffsetFactor,j.polygonOffsetUnits),j.alphaToCoverage===!0?_e(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function st(j){R!==j&&(j?s.frontFace(s.CW):s.frontFace(s.CCW),R=j)}function ct(j){j!==A0?(_e(s.CULL_FACE),j!==z&&(j===xm?s.cullFace(s.BACK):j===C0?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),z=j}function Ge(j){j!==re&&(ce&&s.lineWidth(j),re=j)}function mt(j,Re,ae){j?(_e(s.POLYGON_OFFSET_FILL),(Q!==Re||de!==ae)&&(s.polygonOffset(Re,ae),Q=Re,de=ae)):Ae(s.POLYGON_OFFSET_FILL)}function Ye(j){j?_e(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function L(j){j===void 0&&(j=s.TEXTURE0+pe-1),oe!==j&&(s.activeTexture(j),oe=j)}function M(j,Re,ae){ae===void 0&&(oe===null?ae=s.TEXTURE0+pe-1:ae=oe);let me=se[ae];me===void 0&&(me={type:void 0,texture:void 0},se[ae]=me),(me.type!==j||me.texture!==Re)&&(oe!==ae&&(s.activeTexture(ae),oe=ae),s.bindTexture(j,Re||ye[j]),me.type=j,me.texture=Re)}function q(){const j=se[oe];j!==void 0&&j.type!==void 0&&(s.bindTexture(j.type,null),j.type=void 0,j.texture=void 0)}function he(){try{s.compressedTexImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ke(){try{s.texSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ce(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Pe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function ut(){try{s.texStorage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function He(){try{s.texImage2D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function Ke(){try{s.texImage3D.apply(s,arguments)}catch(j){console.error("THREE.WebGLState:",j)}}function et(j){we.equals(j)===!1&&(s.scissor(j.x,j.y,j.z,j.w),we.copy(j))}function Ve(j){Z.equals(j)===!1&&(s.viewport(j.x,j.y,j.z,j.w),Z.copy(j))}function gt(j,Re){let ae=p.get(Re);ae===void 0&&(ae=new WeakMap,p.set(Re,ae));let me=ae.get(j);me===void 0&&(me=s.getUniformBlockIndex(Re,j.name),ae.set(j,me))}function ot(j,Re){const me=p.get(Re).get(j);d.get(Re)!==me&&(s.uniformBlockBinding(Re,me,j.__bindingPointIndex),d.set(Re,me))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),g={},oe=null,se={},_={},x=new WeakMap,S=[],E=null,w=!1,y=null,v=null,D=null,b=null,A=null,W=null,I=null,O=new St(0,0,0),Y=0,P=!1,R=null,z=null,re=null,Q=null,de=null,we.set(0,0,s.canvas.width,s.canvas.height),Z.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),h.reset()}return{buffers:{color:l,depth:u,stencil:h},enable:_e,disable:Ae,bindFramebuffer:Ne,drawBuffers:Xe,useProgram:Rt,setBlending:H,setMaterial:Wt,setFlipSided:st,setCullFace:ct,setLineWidth:Ge,setPolygonOffset:mt,setScissorTest:Ye,activeTexture:L,bindTexture:M,unbindTexture:q,compressedTexImage2D:he,compressedTexImage3D:ge,texImage2D:He,texImage3D:Ke,updateUBOMapping:gt,uniformBlockBinding:ot,texStorage2D:ut,texStorage3D:Ee,texSubImage2D:fe,texSubImage3D:ke,compressedTexSubImage2D:Ce,compressedTexSubImage3D:Pe,scissor:et,viewport:Ve,reset:bt}}function r1(s,e,t,r,o,l,u){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new Fe,g=new WeakMap;let _;const x=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function E(L,M){return S?new OffscreenCanvas(L,M):sc("canvas")}function w(L,M,q){let he=1;const ge=Ye(L);if((ge.width>q||ge.height>q)&&(he=q/Math.max(ge.width,ge.height)),he<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(he*ge.width),ke=Math.floor(he*ge.height);_===void 0&&(_=E(fe,ke));const Ce=M?E(fe,ke):_;return Ce.width=fe,Ce.height=ke,Ce.getContext("2d").drawImage(L,0,0,fe,ke),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+ke+")."),Ce}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function y(L){return L.generateMipmaps}function v(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(L,M,q,he,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=M;if(M===s.RED&&(q===s.FLOAT&&(fe=s.R32F),q===s.HALF_FLOAT&&(fe=s.R16F),q===s.UNSIGNED_BYTE&&(fe=s.R8)),M===s.RED_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.R8UI),q===s.UNSIGNED_SHORT&&(fe=s.R16UI),q===s.UNSIGNED_INT&&(fe=s.R32UI),q===s.BYTE&&(fe=s.R8I),q===s.SHORT&&(fe=s.R16I),q===s.INT&&(fe=s.R32I)),M===s.RG&&(q===s.FLOAT&&(fe=s.RG32F),q===s.HALF_FLOAT&&(fe=s.RG16F),q===s.UNSIGNED_BYTE&&(fe=s.RG8)),M===s.RG_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RG8UI),q===s.UNSIGNED_SHORT&&(fe=s.RG16UI),q===s.UNSIGNED_INT&&(fe=s.RG32UI),q===s.BYTE&&(fe=s.RG8I),q===s.SHORT&&(fe=s.RG16I),q===s.INT&&(fe=s.RG32I)),M===s.RGB_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),q===s.UNSIGNED_INT&&(fe=s.RGB32UI),q===s.BYTE&&(fe=s.RGB8I),q===s.SHORT&&(fe=s.RGB16I),q===s.INT&&(fe=s.RGB32I)),M===s.RGBA_INTEGER&&(q===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),q===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),q===s.UNSIGNED_INT&&(fe=s.RGBA32UI),q===s.BYTE&&(fe=s.RGBA8I),q===s.SHORT&&(fe=s.RGBA16I),q===s.INT&&(fe=s.RGBA32I)),M===s.RGB&&q===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),M===s.RGBA){const ke=ge?ic:Ct.getTransfer(he);q===s.FLOAT&&(fe=s.RGBA32F),q===s.HALF_FLOAT&&(fe=s.RGBA16F),q===s.UNSIGNED_BYTE&&(fe=ke===Dt?s.SRGB8_ALPHA8:s.RGBA8),q===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),q===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function A(L,M){let q;return L?M===null||M===rs||M===lo?q=s.DEPTH24_STENCIL8:M===Xi?q=s.DEPTH32F_STENCIL8:M===oa&&(q=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===rs||M===lo?q=s.DEPTH_COMPONENT24:M===Xi?q=s.DEPTH_COMPONENT32F:M===oa&&(q=s.DEPTH_COMPONENT16),q}function W(L,M){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==_i&&L.minFilter!==Ti?Math.log2(Math.max(M.width,M.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?M.mipmaps.length:1}function I(L){const M=L.target;M.removeEventListener("dispose",I),Y(M),M.isVideoTexture&&g.delete(M)}function O(L){const M=L.target;M.removeEventListener("dispose",O),R(M)}function Y(L){const M=r.get(L);if(M.__webglInit===void 0)return;const q=L.source,he=x.get(q);if(he){const ge=he[M.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(L),Object.keys(he).length===0&&x.delete(q)}r.remove(L)}function P(L){const M=r.get(L);s.deleteTexture(M.__webglTexture);const q=L.source,he=x.get(q);delete he[M.__cacheKey],u.memory.textures--}function R(L){const M=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let he=0;he<6;he++){if(Array.isArray(M.__webglFramebuffer[he]))for(let ge=0;ge<M.__webglFramebuffer[he].length;ge++)s.deleteFramebuffer(M.__webglFramebuffer[he][ge]);else s.deleteFramebuffer(M.__webglFramebuffer[he]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[he])}else{if(Array.isArray(M.__webglFramebuffer))for(let he=0;he<M.__webglFramebuffer.length;he++)s.deleteFramebuffer(M.__webglFramebuffer[he]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let he=0;he<M.__webglColorRenderbuffer.length;he++)M.__webglColorRenderbuffer[he]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[he]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const q=L.textures;for(let he=0,ge=q.length;he<ge;he++){const fe=r.get(q[he]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(q[he])}r.remove(L)}let z=0;function re(){z=0}function Q(){const L=z;return L>=o.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+o.maxTextures),z+=1,L}function de(L){const M=[];return M.push(L.wrapS),M.push(L.wrapT),M.push(L.wrapR||0),M.push(L.magFilter),M.push(L.minFilter),M.push(L.anisotropy),M.push(L.internalFormat),M.push(L.format),M.push(L.type),M.push(L.generateMipmaps),M.push(L.premultiplyAlpha),M.push(L.flipY),M.push(L.unpackAlignment),M.push(L.colorSpace),M.join()}function pe(L,M){const q=r.get(L);if(L.isVideoTexture&&Ge(L),L.isRenderTargetTexture===!1&&L.version>0&&q.__version!==L.version){const he=L.image;if(he===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(q,L,M);return}}t.bindTexture(s.TEXTURE_2D,q.__webglTexture,s.TEXTURE0+M)}function ce(L,M){const q=r.get(L);if(L.version>0&&q.__version!==L.version){Z(q,L,M);return}t.bindTexture(s.TEXTURE_2D_ARRAY,q.__webglTexture,s.TEXTURE0+M)}function ue(L,M){const q=r.get(L);if(L.version>0&&q.__version!==L.version){Z(q,L,M);return}t.bindTexture(s.TEXTURE_3D,q.__webglTexture,s.TEXTURE0+M)}function B(L,M){const q=r.get(L);if(L.version>0&&q.__version!==L.version){le(q,L,M);return}t.bindTexture(s.TEXTURE_CUBE_MAP,q.__webglTexture,s.TEXTURE0+M)}const oe={[Wh]:s.REPEAT,[ns]:s.CLAMP_TO_EDGE,[jh]:s.MIRRORED_REPEAT},se={[_i]:s.NEAREST,[nx]:s.NEAREST_MIPMAP_NEAREST,[yl]:s.NEAREST_MIPMAP_LINEAR,[Ti]:s.LINEAR,[$u]:s.LINEAR_MIPMAP_NEAREST,[is]:s.LINEAR_MIPMAP_LINEAR},F={[ox]:s.NEVER,[fx]:s.ALWAYS,[ax]:s.LESS,[Kg]:s.LEQUAL,[lx]:s.EQUAL,[hx]:s.GEQUAL,[cx]:s.GREATER,[ux]:s.NOTEQUAL};function te(L,M){if(M.type===Xi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Ti||M.magFilter===$u||M.magFilter===yl||M.magFilter===is||M.minFilter===Ti||M.minFilter===$u||M.minFilter===yl||M.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,oe[M.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,oe[M.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,oe[M.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,se[M.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,se[M.minFilter]),M.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,F[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_i||M.minFilter!==yl&&M.minFilter!==is||M.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||r.get(M).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,o.getMaxAnisotropy())),r.get(M).__currentAnisotropy=M.anisotropy}}}function we(L,M){let q=!1;L.__webglInit===void 0&&(L.__webglInit=!0,M.addEventListener("dispose",I));const he=M.source;let ge=x.get(he);ge===void 0&&(ge={},x.set(he,ge));const fe=de(M);if(fe!==L.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,q=!0),ge[fe].usedTimes++;const ke=ge[L.__cacheKey];ke!==void 0&&(ge[L.__cacheKey].usedTimes--,ke.usedTimes===0&&P(M)),L.__cacheKey=fe,L.__webglTexture=ge[fe].texture}return q}function Z(L,M,q){let he=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=s.TEXTURE_3D);const ge=we(L,M),fe=M.source;t.bindTexture(he,L.__webglTexture,s.TEXTURE0+q);const ke=r.get(fe);if(fe.version!==ke.__version||ge===!0){t.activeTexture(s.TEXTURE0+q);const Ce=Ct.getPrimaries(Ct.workingColorSpace),Pe=M.colorSpace===Er?null:Ct.getPrimaries(M.colorSpace),ut=M.colorSpace===Er||Ce===Pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ut);let Ee=w(M.image,!1,o.maxTextureSize);Ee=mt(M,Ee);const He=l.convert(M.format,M.colorSpace),Ke=l.convert(M.type);let et=b(M.internalFormat,He,Ke,M.colorSpace,M.isVideoTexture);te(he,M);let Ve;const gt=M.mipmaps,ot=M.isVideoTexture!==!0,bt=ke.__version===void 0||ge===!0,j=fe.dataReady,Re=W(M,Ee);if(M.isDepthTexture)et=A(M.format===co,M.type),bt&&(ot?t.texStorage2D(s.TEXTURE_2D,1,et,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,He,Ke,null));else if(M.isDataTexture)if(gt.length>0){ot&&bt&&t.texStorage2D(s.TEXTURE_2D,Re,et,gt[0].width,gt[0].height);for(let ae=0,me=gt.length;ae<me;ae++)Ve=gt[ae],ot?j&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Ve.width,Ve.height,He,Ke,Ve.data):t.texImage2D(s.TEXTURE_2D,ae,et,Ve.width,Ve.height,0,He,Ke,Ve.data);M.generateMipmaps=!1}else ot?(bt&&t.texStorage2D(s.TEXTURE_2D,Re,et,Ee.width,Ee.height),j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,He,Ke,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,et,Ee.width,Ee.height,0,He,Ke,Ee.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ot&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,gt[0].width,gt[0].height,Ee.depth);for(let ae=0,me=gt.length;ae<me;ae++)if(Ve=gt[ae],M.format!==gi)if(He!==null)if(ot){if(j)if(M.layerUpdates.size>0){const Ie=sg(Ve.width,Ve.height,M.format,M.type);for(const De of M.layerUpdates){const at=Ve.data.subarray(De*Ie/Ve.data.BYTES_PER_ELEMENT,(De+1)*Ie/Ve.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,De,Ve.width,Ve.height,1,He,at)}M.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Ve.width,Ve.height,Ee.depth,He,Ve.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,et,Ve.width,Ve.height,Ee.depth,0,Ve.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ot?j&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Ve.width,Ve.height,Ee.depth,He,Ke,Ve.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,et,Ve.width,Ve.height,Ee.depth,0,He,Ke,Ve.data)}else{ot&&bt&&t.texStorage2D(s.TEXTURE_2D,Re,et,gt[0].width,gt[0].height);for(let ae=0,me=gt.length;ae<me;ae++)Ve=gt[ae],M.format!==gi?He!==null?ot?j&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Ve.width,Ve.height,He,Ve.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,et,Ve.width,Ve.height,0,Ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ot?j&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Ve.width,Ve.height,He,Ke,Ve.data):t.texImage2D(s.TEXTURE_2D,ae,et,Ve.width,Ve.height,0,He,Ke,Ve.data)}else if(M.isDataArrayTexture)if(ot){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,et,Ee.width,Ee.height,Ee.depth),j)if(M.layerUpdates.size>0){const ae=sg(Ee.width,Ee.height,M.format,M.type);for(const me of M.layerUpdates){const Ie=Ee.data.subarray(me*ae/Ee.data.BYTES_PER_ELEMENT,(me+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,Ee.width,Ee.height,1,He,Ke,Ie)}M.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,He,Ke,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,et,Ee.width,Ee.height,Ee.depth,0,He,Ke,Ee.data);else if(M.isData3DTexture)ot?(bt&&t.texStorage3D(s.TEXTURE_3D,Re,et,Ee.width,Ee.height,Ee.depth),j&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,He,Ke,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,et,Ee.width,Ee.height,Ee.depth,0,He,Ke,Ee.data);else if(M.isFramebufferTexture){if(bt)if(ot)t.texStorage2D(s.TEXTURE_2D,Re,et,Ee.width,Ee.height);else{let ae=Ee.width,me=Ee.height;for(let Ie=0;Ie<Re;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,et,ae,me,0,He,Ke,null),ae>>=1,me>>=1}}else if(gt.length>0){if(ot&&bt){const ae=Ye(gt[0]);t.texStorage2D(s.TEXTURE_2D,Re,et,ae.width,ae.height)}for(let ae=0,me=gt.length;ae<me;ae++)Ve=gt[ae],ot?j&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,He,Ke,Ve):t.texImage2D(s.TEXTURE_2D,ae,et,He,Ke,Ve);M.generateMipmaps=!1}else if(ot){if(bt){const ae=Ye(Ee);t.texStorage2D(s.TEXTURE_2D,Re,et,ae.width,ae.height)}j&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,He,Ke,Ee)}else t.texImage2D(s.TEXTURE_2D,0,et,He,Ke,Ee);y(M)&&v(he),ke.__version=fe.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function le(L,M,q){if(M.image.length!==6)return;const he=we(L,M),ge=M.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+q);const fe=r.get(ge);if(ge.version!==fe.__version||he===!0){t.activeTexture(s.TEXTURE0+q);const ke=Ct.getPrimaries(Ct.workingColorSpace),Ce=M.colorSpace===Er?null:Ct.getPrimaries(M.colorSpace),Pe=M.colorSpace===Er||ke===Ce?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);const ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Ee=M.image[0]&&M.image[0].isDataTexture,He=[];for(let me=0;me<6;me++)!ut&&!Ee?He[me]=w(M.image[me],!0,o.maxCubemapSize):He[me]=Ee?M.image[me].image:M.image[me],He[me]=mt(M,He[me]);const Ke=He[0],et=l.convert(M.format,M.colorSpace),Ve=l.convert(M.type),gt=b(M.internalFormat,et,Ve,M.colorSpace),ot=M.isVideoTexture!==!0,bt=fe.__version===void 0||he===!0,j=ge.dataReady;let Re=W(M,Ke);te(s.TEXTURE_CUBE_MAP,M);let ae;if(ut){ot&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,gt,Ke.width,Ke.height);for(let me=0;me<6;me++){ae=He[me].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){const De=ae[Ie];M.format!==gi?et!==null?ot?j&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,De.width,De.height,et,De.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,gt,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,0,0,De.width,De.height,et,Ve,De.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie,gt,De.width,De.height,0,et,Ve,De.data)}}}else{if(ae=M.mipmaps,ot&&bt){ae.length>0&&Re++;const me=Ye(He[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,gt,me.width,me.height)}for(let me=0;me<6;me++)if(Ee){ot?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,He[me].width,He[me].height,et,Ve,He[me].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,gt,He[me].width,He[me].height,0,et,Ve,He[me].data);for(let Ie=0;Ie<ae.length;Ie++){const at=ae[Ie].image[me].image;ot?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,at.width,at.height,et,Ve,at.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,gt,at.width,at.height,0,et,Ve,at.data)}}else{ot?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,0,0,et,Ve,He[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,gt,et,Ve,He[me]);for(let Ie=0;Ie<ae.length;Ie++){const De=ae[Ie];ot?j&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,0,0,et,Ve,De.image[me]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+me,Ie+1,gt,et,Ve,De.image[me])}}}y(M)&&v(s.TEXTURE_CUBE_MAP),fe.__version=ge.version,M.onUpdate&&M.onUpdate(M)}L.__version=M.version}function ye(L,M,q,he,ge,fe){const ke=l.convert(q.format,q.colorSpace),Ce=l.convert(q.type),Pe=b(q.internalFormat,ke,Ce,q.colorSpace),ut=r.get(M),Ee=r.get(q);if(Ee.__renderTarget=M,!ut.__hasExternalTextures){const He=Math.max(1,M.width>>fe),Ke=Math.max(1,M.height>>fe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,Pe,He,Ke,M.depth,0,ke,Ce,null):t.texImage2D(ge,fe,Pe,He,Ke,0,ke,Ce,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),ct(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,he,ge,Ee.__webglTexture,0,st(M)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,he,ge,Ee.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function _e(L,M,q){if(s.bindRenderbuffer(s.RENDERBUFFER,L),M.depthBuffer){const he=M.depthTexture,ge=he&&he.isDepthTexture?he.type:null,fe=A(M.stencilBuffer,ge),ke=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=st(M);ct(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ce,fe,M.width,M.height):q?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ce,fe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,fe,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,L)}else{const he=M.textures;for(let ge=0;ge<he.length;ge++){const fe=he[ge],ke=l.convert(fe.format,fe.colorSpace),Ce=l.convert(fe.type),Pe=b(fe.internalFormat,ke,Ce,fe.colorSpace),ut=st(M);q&&ct(M)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ut,Pe,M.width,M.height):ct(M)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ut,Pe,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ae(L,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const he=r.get(M.depthTexture);he.__renderTarget=M,(!he.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),pe(M.depthTexture,0);const ge=he.__webglTexture,fe=st(M);if(M.depthTexture.format===io)ct(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(M.depthTexture.format===co)ct(M)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Ne(L){const M=r.get(L),q=L.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==L.depthTexture){const he=L.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){const ge=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",ge)};he.addEventListener("dispose",ge),M.__depthDisposeCallback=ge}M.__boundDepthTexture=he}if(L.depthTexture&&!M.__autoAllocateDepthBuffer){if(q)throw new Error("target.depthTexture not supported in Cube render targets");Ae(M.__webglFramebuffer,L)}else if(q){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=s.createRenderbuffer(),_e(M.__webglDepthbuffer[he],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=M.__webglDepthbuffer[he];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),_e(M.__webglDepthbuffer,L,!1);else{const he=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Xe(L,M,q){const he=r.get(L);M!==void 0&&ye(he.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),q!==void 0&&Ne(L)}function Rt(L){const M=L.texture,q=r.get(L),he=r.get(M);L.addEventListener("dispose",O);const ge=L.textures,fe=L.isWebGLCubeRenderTarget===!0,ke=ge.length>1;if(ke||(he.__webglTexture===void 0&&(he.__webglTexture=s.createTexture()),he.__version=M.version,u.memory.textures++),fe){q.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer[Ce]=[];for(let Pe=0;Pe<M.mipmaps.length;Pe++)q.__webglFramebuffer[Ce][Pe]=s.createFramebuffer()}else q.__webglFramebuffer[Ce]=s.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){q.__webglFramebuffer=[];for(let Ce=0;Ce<M.mipmaps.length;Ce++)q.__webglFramebuffer[Ce]=s.createFramebuffer()}else q.__webglFramebuffer=s.createFramebuffer();if(ke)for(let Ce=0,Pe=ge.length;Ce<Pe;Ce++){const ut=r.get(ge[Ce]);ut.__webglTexture===void 0&&(ut.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&ct(L)===!1){q.__webglMultisampledFramebuffer=s.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let Ce=0;Ce<ge.length;Ce++){const Pe=ge[Ce];q.__webglColorRenderbuffer[Ce]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce]);const ut=l.convert(Pe.format,Pe.colorSpace),Ee=l.convert(Pe.type),He=b(Pe.internalFormat,ut,Ee,Pe.colorSpace,L.isXRRenderTarget===!0),Ke=st(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Ke,He,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Ce,s.RENDERBUFFER,q.__webglColorRenderbuffer[Ce])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(q.__webglDepthRenderbuffer=s.createRenderbuffer(),_e(q.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),te(s.TEXTURE_CUBE_MAP,M);for(let Ce=0;Ce<6;Ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)ye(q.__webglFramebuffer[Ce][Pe],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,Pe);else ye(q.__webglFramebuffer[Ce],L,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);y(M)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ke){for(let Ce=0,Pe=ge.length;Ce<Pe;Ce++){const ut=ge[Ce],Ee=r.get(ut);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),te(s.TEXTURE_2D,ut),ye(q.__webglFramebuffer,L,ut,s.COLOR_ATTACHMENT0+Ce,s.TEXTURE_2D,0),y(ut)&&v(s.TEXTURE_2D)}t.unbindTexture()}else{let Ce=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(Ce=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ce,he.__webglTexture),te(Ce,M),M.mipmaps&&M.mipmaps.length>0)for(let Pe=0;Pe<M.mipmaps.length;Pe++)ye(q.__webglFramebuffer[Pe],L,M,s.COLOR_ATTACHMENT0,Ce,Pe);else ye(q.__webglFramebuffer,L,M,s.COLOR_ATTACHMENT0,Ce,0);y(M)&&v(Ce),t.unbindTexture()}L.depthBuffer&&Ne(L)}function pt(L){const M=L.textures;for(let q=0,he=M.length;q<he;q++){const ge=M[q];if(y(ge)){const fe=D(L),ke=r.get(ge).__webglTexture;t.bindTexture(fe,ke),v(fe),t.unbindTexture()}}}const Pt=[],H=[];function Wt(L){if(L.samples>0){if(ct(L)===!1){const M=L.textures,q=L.width,he=L.height;let ge=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(L),Ce=M.length>1;if(Ce)for(let Pe=0;Pe<M.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let Pe=0;Pe<M.length;Pe++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),Ce){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Pe]);const ut=r.get(M[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ut,0)}s.blitFramebuffer(0,0,q,he,0,0,q,he,ge,s.NEAREST),d===!0&&(Pt.length=0,H.length=0,Pt.push(s.COLOR_ATTACHMENT0+Pe),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Pt.push(fe),H.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,H)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Pt))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),Ce)for(let Pe=0;Pe<M.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,ke.__webglColorRenderbuffer[Pe]);const ut=r.get(M[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,ut,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&d){const M=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function st(L){return Math.min(o.maxSamples,L.samples)}function ct(L){const M=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ge(L){const M=u.render.frame;g.get(L)!==M&&(g.set(L,M),L.update())}function mt(L,M){const q=L.colorSpace,he=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||q!==uo&&q!==Er&&(Ct.getTransfer(q)===Dt?(he!==gi||ge!==$i)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",q)),M}function Ye(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=re,this.setTexture2D=pe,this.setTexture2DArray=ce,this.setTexture3D=ue,this.setTextureCube=B,this.rebindTextures=Xe,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=pt,this.updateMultisampleRenderTarget=Wt,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ct}function s1(s,e){function t(r,o=Er){let l;const u=Ct.getTransfer(o);if(r===$i)return s.UNSIGNED_BYTE;if(r===bf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Pf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Vg)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Bg)return s.BYTE;if(r===Hg)return s.SHORT;if(r===oa)return s.UNSIGNED_SHORT;if(r===Rf)return s.INT;if(r===rs)return s.UNSIGNED_INT;if(r===Xi)return s.FLOAT;if(r===ua)return s.HALF_FLOAT;if(r===Gg)return s.ALPHA;if(r===Wg)return s.RGB;if(r===gi)return s.RGBA;if(r===jg)return s.LUMINANCE;if(r===Xg)return s.LUMINANCE_ALPHA;if(r===io)return s.DEPTH_COMPONENT;if(r===co)return s.DEPTH_STENCIL;if(r===Yg)return s.RED;if(r===Lf)return s.RED_INTEGER;if(r===qg)return s.RG;if(r===Df)return s.RG_INTEGER;if(r===Nf)return s.RGBA_INTEGER;if(r===Zl||r===Kl||r===Jl||r===Ql)if(u===Dt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Zl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Zl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Kl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Jl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Xh||r===Yh||r===qh||r===$h)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===Xh)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Yh)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===qh)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===$h)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Zh||r===Kh||r===Jh)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Zh||r===Kh)return u===Dt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Jh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Qh||r===ef||r===tf||r===nf||r===rf||r===sf||r===of||r===af||r===lf||r===cf||r===uf||r===hf||r===ff||r===df)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Qh)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ef)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===tf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===nf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===rf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===sf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===of)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===af)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===lf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===cf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===uf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===hf)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===ff)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===df)return u===Dt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===ec||r===pf||r===mf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===ec)return u===Dt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===pf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===mf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===$g||r===gf||r===_f||r===vf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===ec)return l.COMPRESSED_RED_RGTC1_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===_f)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===vf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===lo?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const o1={type:"move"};class Rh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ks,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ks,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ks,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const h=this._targetRay,d=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const w of e.hand.values()){const y=t.getJointPose(w,r),v=this._getHandJoint(p,w);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const g=p.joints["index-finger-tip"],_=p.joints["thumb-tip"],x=g.position.distanceTo(_.position),S=.02,E=.005;p.inputState.pinching&&x>S+E?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&x<=S-E&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(d.matrix.fromArray(l.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,l.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(l.linearVelocity)):d.hasLinearVelocity=!1,l.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(l.angularVelocity)):d.hasAngularVelocity=!1));h!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(h.matrix.fromArray(o.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,o.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(o.linearVelocity)):h.hasLinearVelocity=!1,o.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(o.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(o1)))}return h!==null&&(h.visible=o!==null),d!==null&&(d.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Ks;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const a1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,l1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class c1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const o=new zn,l=e.properties.get(o);l.__webglTexture=t.texture,(t.depthNear!=r.depthNear||t.depthFar!=r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=o}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Cr({vertexShader:a1,fragmentShader:l1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Yn(new fa(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class u1 extends ls{constructor(e,t){super();const r=this;let o=null,l=1,u=null,h="local-floor",d=1,p=null,g=null,_=null,x=null,S=null,E=null;const w=new c1,y=t.getContextAttributes();let v=null,D=null;const b=[],A=[],W=new Fe;let I=null;const O=new ni;O.viewport=new Yt;const Y=new ni;Y.viewport=new Yt;const P=[O,Y],R=new Ry;let z=null,re=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let le=b[Z];return le===void 0&&(le=new Rh,b[Z]=le),le.getTargetRaySpace()},this.getControllerGrip=function(Z){let le=b[Z];return le===void 0&&(le=new Rh,b[Z]=le),le.getGripSpace()},this.getHand=function(Z){let le=b[Z];return le===void 0&&(le=new Rh,b[Z]=le),le.getHandSpace()};function Q(Z){const le=A.indexOf(Z.inputSource);if(le===-1)return;const ye=b[le];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,p||u),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function de(){o.removeEventListener("select",Q),o.removeEventListener("selectstart",Q),o.removeEventListener("selectend",Q),o.removeEventListener("squeeze",Q),o.removeEventListener("squeezestart",Q),o.removeEventListener("squeezeend",Q),o.removeEventListener("end",de),o.removeEventListener("inputsourceschange",pe);for(let Z=0;Z<b.length;Z++){const le=A[Z];le!==null&&(A[Z]=null,b[Z].disconnect(le))}z=null,re=null,w.reset(),e.setRenderTarget(v),S=null,x=null,_=null,o=null,D=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(I),e.setSize(W.width,W.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){l=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){h=Z,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(Z){p=Z},this.getBaseLayer=function(){return x!==null?x:S},this.getBinding=function(){return _},this.getFrame=function(){return E},this.getSession=function(){return o},this.setSession=async function(Z){if(o=Z,o!==null){if(v=e.getRenderTarget(),o.addEventListener("select",Q),o.addEventListener("selectstart",Q),o.addEventListener("selectend",Q),o.addEventListener("squeeze",Q),o.addEventListener("squeezestart",Q),o.addEventListener("squeezeend",Q),o.addEventListener("end",de),o.addEventListener("inputsourceschange",pe),y.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(W),o.renderState.layers===void 0){const le={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(o,t,le),o.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new ss(S.framebufferWidth,S.framebufferHeight,{format:gi,type:$i,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}else{let le=null,ye=null,_e=null;y.depth&&(_e=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,le=y.stencil?co:io,ye=y.stencil?lo:rs);const Ae={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:l};_=new XRWebGLBinding(o,t),x=_.createProjectionLayer(Ae),o.updateRenderState({layers:[x]}),e.setPixelRatio(1),e.setSize(x.textureWidth,x.textureHeight,!1),D=new ss(x.textureWidth,x.textureHeight,{format:gi,type:$i,depthTexture:new c_(x.textureWidth,x.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,le),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:x.ignoreDepthValues===!1})}D.isXRRenderTarget=!0,this.setFoveation(d),p=null,u=await o.requestReferenceSpace(h),we.setContext(o),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function pe(Z){for(let le=0;le<Z.removed.length;le++){const ye=Z.removed[le],_e=A.indexOf(ye);_e>=0&&(A[_e]=null,b[_e].disconnect(ye))}for(let le=0;le<Z.added.length;le++){const ye=Z.added[le];let _e=A.indexOf(ye);if(_e===-1){for(let Ne=0;Ne<b.length;Ne++)if(Ne>=A.length){A.push(ye),_e=Ne;break}else if(A[Ne]===null){A[Ne]=ye,_e=Ne;break}if(_e===-1)break}const Ae=b[_e];Ae&&Ae.connect(ye)}}const ce=new X,ue=new X;function B(Z,le,ye){ce.setFromMatrixPosition(le.matrixWorld),ue.setFromMatrixPosition(ye.matrixWorld);const _e=ce.distanceTo(ue),Ae=le.projectionMatrix.elements,Ne=ye.projectionMatrix.elements,Xe=Ae[14]/(Ae[10]-1),Rt=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],Pt=(Ae[9]-1)/Ae[5],H=(Ae[8]-1)/Ae[0],Wt=(Ne[8]+1)/Ne[0],st=Xe*H,ct=Xe*Wt,Ge=_e/(-H+Wt),mt=Ge*-H;if(le.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(mt),Z.translateZ(Ge),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Ae[10]===-1)Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse);else{const Ye=Xe+Ge,L=Rt+Ge,M=st-mt,q=ct+(_e-mt),he=pt*Rt/L*Ye,ge=Pt*Rt/L*Ye;Z.projectionMatrix.makePerspective(M,q,he,ge,Ye,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function oe(Z,le){le===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(le.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(o===null)return;let le=Z.near,ye=Z.far;w.texture!==null&&(w.depthNear>0&&(le=w.depthNear),w.depthFar>0&&(ye=w.depthFar)),R.near=Y.near=O.near=le,R.far=Y.far=O.far=ye,(z!==R.near||re!==R.far)&&(o.updateRenderState({depthNear:R.near,depthFar:R.far}),z=R.near,re=R.far),O.layers.mask=Z.layers.mask|2,Y.layers.mask=Z.layers.mask|4,R.layers.mask=O.layers.mask|Y.layers.mask;const _e=Z.parent,Ae=R.cameras;oe(R,_e);for(let Ne=0;Ne<Ae.length;Ne++)oe(Ae[Ne],_e);Ae.length===2?B(R,O,Y):R.projectionMatrix.copy(O.projectionMatrix),se(Z,R,_e)};function se(Z,le,ye){ye===null?Z.matrix.copy(le.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(le.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(le.projectionMatrix),Z.projectionMatrixInverse.copy(le.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=xf*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(x===null&&S===null))return d},this.setFoveation=function(Z){d=Z,x!==null&&(x.fixedFoveation=Z),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=Z)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(R)};let F=null;function te(Z,le){if(g=le.getViewerPose(p||u),E=le,g!==null){const ye=g.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let _e=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,_e=!0);for(let Ne=0;Ne<ye.length;Ne++){const Xe=ye[Ne];let Rt=null;if(S!==null)Rt=S.getViewport(Xe);else{const Pt=_.getViewSubImage(x,Xe);Rt=Pt.viewport,Ne===0&&(e.setRenderTargetTextures(D,Pt.colorTexture,x.ignoreDepthValues?void 0:Pt.depthStencilTexture),e.setRenderTarget(D))}let pt=P[Ne];pt===void 0&&(pt=new ni,pt.layers.enable(Ne),pt.viewport=new Yt,P[Ne]=pt),pt.matrix.fromArray(Xe.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(Xe.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),Ne===0&&(R.matrix.copy(pt.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),_e===!0&&R.cameras.push(pt)}const Ae=o.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")){const Ne=_.getDepthInformation(ye[0]);Ne&&Ne.isValid&&Ne.texture&&w.init(e,Ne,o.renderState)}}for(let ye=0;ye<b.length;ye++){const _e=A[ye],Ae=b[ye];_e!==null&&Ae!==void 0&&Ae.update(_e,le,p||u)}F&&F(Z,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),E=null}const we=new S_;we.setAnimationLoop(te),this.setAnimationLoop=function(Z){F=Z},this.dispose=function(){}}}const Zr=new Ai,h1=new kt;function f1(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,s_(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,D,b,A){v.isMeshBasicMaterial||v.isMeshLambertMaterial?l(y,v):v.isMeshToonMaterial?(l(y,v),_(y,v)):v.isMeshPhongMaterial?(l(y,v),g(y,v)):v.isMeshStandardMaterial?(l(y,v),x(y,v),v.isMeshPhysicalMaterial&&S(y,v,A)):v.isMeshMatcapMaterial?(l(y,v),E(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),w(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&h(y,v)):v.isPointsMaterial?d(y,v,D,b):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===kn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===kn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=e.get(v),b=D.envMap,A=D.envMapRotation;b&&(y.envMap.value=b,Zr.copy(A),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),y.envMapRotation.value.setFromMatrix4(h1.makeRotationFromEuler(Zr)),y.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function h(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function d(y,v,D,b){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=b*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function g(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function _(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function x(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function S(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===kn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function E(y,v){v.matcap&&(y.matcap.value=v.matcap)}function w(y,v){const D=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function d1(s,e,t,r){let o={},l={},u=[];const h=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function d(D,b){const A=b.program;r.uniformBlockBinding(D,A)}function p(D,b){let A=o[D.id];A===void 0&&(E(D),A=g(D),o[D.id]=A,D.addEventListener("dispose",y));const W=b.program;r.updateUBOMapping(D,W);const I=e.render.frame;l[D.id]!==I&&(x(D),l[D.id]=I)}function g(D){const b=_();D.__bindingPointIndex=b;const A=s.createBuffer(),W=D.__size,I=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,A),s.bufferData(s.UNIFORM_BUFFER,W,I),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,A),A}function _(){for(let D=0;D<h;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function x(D){const b=o[D.id],A=D.uniforms,W=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let I=0,O=A.length;I<O;I++){const Y=Array.isArray(A[I])?A[I]:[A[I]];for(let P=0,R=Y.length;P<R;P++){const z=Y[P];if(S(z,I,P,W)===!0){const re=z.__offset,Q=Array.isArray(z.value)?z.value:[z.value];let de=0;for(let pe=0;pe<Q.length;pe++){const ce=Q[pe],ue=w(ce);typeof ce=="number"||typeof ce=="boolean"?(z.__data[0]=ce,s.bufferSubData(s.UNIFORM_BUFFER,re+de,z.__data)):ce.isMatrix3?(z.__data[0]=ce.elements[0],z.__data[1]=ce.elements[1],z.__data[2]=ce.elements[2],z.__data[3]=0,z.__data[4]=ce.elements[3],z.__data[5]=ce.elements[4],z.__data[6]=ce.elements[5],z.__data[7]=0,z.__data[8]=ce.elements[6],z.__data[9]=ce.elements[7],z.__data[10]=ce.elements[8],z.__data[11]=0):(ce.toArray(z.__data,de),de+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,re,z.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,b,A,W){const I=D.value,O=b+"_"+A;if(W[O]===void 0)return typeof I=="number"||typeof I=="boolean"?W[O]=I:W[O]=I.clone(),!0;{const Y=W[O];if(typeof I=="number"||typeof I=="boolean"){if(Y!==I)return W[O]=I,!0}else if(Y.equals(I)===!1)return Y.copy(I),!0}return!1}function E(D){const b=D.uniforms;let A=0;const W=16;for(let O=0,Y=b.length;O<Y;O++){const P=Array.isArray(b[O])?b[O]:[b[O]];for(let R=0,z=P.length;R<z;R++){const re=P[R],Q=Array.isArray(re.value)?re.value:[re.value];for(let de=0,pe=Q.length;de<pe;de++){const ce=Q[de],ue=w(ce),B=A%W,oe=B%ue.boundary,se=B+oe;A+=oe,se!==0&&W-se<ue.storage&&(A+=W-se),re.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),re.__offset=A,A+=ue.storage}}}const I=A%W;return I>0&&(A+=W-I),D.__size=A,D.__cache={},this}function w(D){const b={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(b.boundary=4,b.storage=4):D.isVector2?(b.boundary=8,b.storage=8):D.isVector3||D.isColor?(b.boundary=16,b.storage=12):D.isVector4?(b.boundary=16,b.storage=16):D.isMatrix3?(b.boundary=48,b.storage=48):D.isMatrix4?(b.boundary=64,b.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),b}function y(D){const b=D.target;b.removeEventListener("dispose",y);const A=u.indexOf(b.__bindingPointIndex);u.splice(A,1),s.deleteBuffer(o[b.id]),delete o[b.id],delete l[b.id]}function v(){for(const D in o)s.deleteBuffer(o[D]);u=[],o={},l={}}return{bind:d,update:p,dispose:v}}class p1{constructor(e={}){const{canvas:t=mx(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:h=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:p=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:_=!1,reverseDepthBuffer:x=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const E=new Uint32Array(4),w=new Int32Array(4);let y=null,v=null;const D=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=wr,this.toneMappingExposure=1;const A=this;let W=!1,I=0,O=0,Y=null,P=-1,R=null;const z=new Yt,re=new Yt;let Q=null;const de=new St(0);let pe=0,ce=t.width,ue=t.height,B=1,oe=null,se=null;const F=new Yt(0,0,ce,ue),te=new Yt(0,0,ce,ue);let we=!1;const Z=new Uf;let le=!1,ye=!1;const _e=new kt,Ae=new kt,Ne=new X,Xe=new Yt,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let pt=!1;function Pt(){return Y===null?B:1}let H=r;function Wt(C,$){return t.getContext(C,$)}try{const C={alpha:!0,depth:o,stencil:l,antialias:h,premultipliedAlpha:d,preserveDrawingBuffer:p,powerPreference:g,failIfMajorPerformanceCaveat:_};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Cf}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",De,!1),H===null){const $="webgl2";if(H=Wt($,C),H===null)throw Wt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw console.error("THREE.WebGLRenderer: "+C.message),C}let st,ct,Ge,mt,Ye,L,M,q,he,ge,fe,ke,Ce,Pe,ut,Ee,He,Ke,et,Ve,gt,ot,bt,j;function Re(){st=new EE(H),st.init(),ot=new s1(H,st),ct=new _E(H,st,e,ot),Ge=new i1(H,st),ct.reverseDepthBuffer&&x&&Ge.buffers.depth.setReversed(!0),mt=new AE(H),Ye=new WT,L=new r1(H,st,Ge,Ye,ct,ot,mt),M=new xE(A),q=new ME(A),he=new Ny(H),bt=new mE(H,he),ge=new TE(H,he,mt,bt),fe=new RE(H,ge,he,mt),et=new CE(H,ct,L),Ee=new vE(Ye),ke=new GT(A,M,q,st,ct,bt,Ee),Ce=new f1(A,Ye),Pe=new XT,ut=new JT(st),Ke=new pE(A,M,q,Ge,fe,S,d),He=new t1(A,fe,ct),j=new d1(H,mt,ct,Ge),Ve=new gE(H,st,mt),gt=new wE(H,st,mt),mt.programs=ke.programs,A.capabilities=ct,A.extensions=st,A.properties=Ye,A.renderLists=Pe,A.shadowMap=He,A.state=Ge,A.info=mt}Re();const ae=new u1(A,H);this.xr=ae,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const C=st.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=st.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(C){C!==void 0&&(B=C,this.setSize(ce,ue,!1))},this.getSize=function(C){return C.set(ce,ue)},this.setSize=function(C,$,ne=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ce=C,ue=$,t.width=Math.floor(C*B),t.height=Math.floor($*B),ne===!0&&(t.style.width=C+"px",t.style.height=$+"px"),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(ce*B,ue*B).floor()},this.setDrawingBufferSize=function(C,$,ne){ce=C,ue=$,B=ne,t.width=Math.floor(C*ne),t.height=Math.floor($*ne),this.setViewport(0,0,C,$)},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(F)},this.setViewport=function(C,$,ne,ie){C.isVector4?F.set(C.x,C.y,C.z,C.w):F.set(C,$,ne,ie),Ge.viewport(z.copy(F).multiplyScalar(B).round())},this.getScissor=function(C){return C.copy(te)},this.setScissor=function(C,$,ne,ie){C.isVector4?te.set(C.x,C.y,C.z,C.w):te.set(C,$,ne,ie),Ge.scissor(re.copy(te).multiplyScalar(B).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(C){Ge.setScissorTest(we=C)},this.setOpaqueSort=function(C){oe=C},this.setTransparentSort=function(C){se=C},this.getClearColor=function(C){return C.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor.apply(Ke,arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha.apply(Ke,arguments)},this.clear=function(C=!0,$=!0,ne=!0){let ie=0;if(C){let V=!1;if(Y!==null){const Me=Y.texture.format;V=Me===Nf||Me===Df||Me===Lf}if(V){const Me=Y.texture.type,be=Me===$i||Me===rs||Me===oa||Me===lo||Me===bf||Me===Pf,Oe=Ke.getClearColor(),ze=Ke.getClearAlpha(),nt=Oe.r,it=Oe.g,$e=Oe.b;be?(E[0]=nt,E[1]=it,E[2]=$e,E[3]=ze,H.clearBufferuiv(H.COLOR,0,E)):(w[0]=nt,w[1]=it,w[2]=$e,w[3]=ze,H.clearBufferiv(H.COLOR,0,w))}else ie|=H.COLOR_BUFFER_BIT}$&&(ie|=H.DEPTH_BUFFER_BIT),ne&&(ie|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ie)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",De,!1),Ke.dispose(),Pe.dispose(),ut.dispose(),Ye.dispose(),M.dispose(),q.dispose(),fe.dispose(),bt.dispose(),j.dispose(),ke.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",us),ae.removeEventListener("sessionend",Zi),Ri.stop()};function me(C){C.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),W=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),W=!1;const C=mt.autoReset,$=He.enabled,ne=He.autoUpdate,ie=He.needsUpdate,V=He.type;Re(),mt.autoReset=C,He.enabled=$,He.autoUpdate=ne,He.needsUpdate=ie,He.type=V}function De(C){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function at(C){const $=C.target;$.removeEventListener("dispose",at),Ut($)}function Ut(C){Jt(C),Ye.remove(C)}function Jt(C){const $=Ye.get(C).programs;$!==void 0&&($.forEach(function(ne){ke.releaseProgram(ne)}),C.isShaderMaterial&&ke.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,ne,ie,V,Me){$===null&&($=Rt);const be=V.isMesh&&V.matrixWorld.determinant()<0,Oe=ma(C,$,ne,ie,V);Ge.setMaterial(ie,be);let ze=ne.index,nt=1;if(ie.wireframe===!0){if(ze=ge.getWireframeAttribute(ne),ze===void 0)return;nt=2}const it=ne.drawRange,$e=ne.attributes.position;let lt=it.start*nt,Tt=(it.start+it.count)*nt;Me!==null&&(lt=Math.max(lt,Me.start*nt),Tt=Math.min(Tt,(Me.start+Me.count)*nt)),ze!==null?(lt=Math.max(lt,0),Tt=Math.min(Tt,ze.count)):$e!=null&&(lt=Math.max(lt,0),Tt=Math.min(Tt,$e.count));const wt=Tt-lt;if(wt<0||wt===1/0)return;bt.setup(V,ie,Oe,ne,ze);let zt,yt=Ve;if(ze!==null&&(zt=he.get(ze),yt=gt,yt.setIndex(zt)),V.isMesh)ie.wireframe===!0?(Ge.setLineWidth(ie.wireframeLinewidth*Pt()),yt.setMode(H.LINES)):yt.setMode(H.TRIANGLES);else if(V.isLine){let Ze=ie.linewidth;Ze===void 0&&(Ze=1),Ge.setLineWidth(Ze*Pt()),V.isLineSegments?yt.setMode(H.LINES):V.isLineLoop?yt.setMode(H.LINE_LOOP):yt.setMode(H.LINE_STRIP)}else V.isPoints?yt.setMode(H.POINTS):V.isSprite&&yt.setMode(H.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)yt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(st.get("WEBGL_multi_draw"))yt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Ze=V._multiDrawStarts,jt=V._multiDrawCounts,xt=V._multiDrawCount,cn=ze?he.get(ze).bytesPerElement:1,ri=Ye.get(ie).currentProgram.getUniforms();for(let En=0;En<xt;En++)ri.setValue(H,"_gl_DrawID",En),yt.render(Ze[En]/cn,jt[En])}else if(V.isInstancedMesh)yt.renderInstances(lt,wt,V.count);else if(ne.isInstancedBufferGeometry){const Ze=ne._maxInstanceCount!==void 0?ne._maxInstanceCount:1/0,jt=Math.min(ne.instanceCount,Ze);yt.renderInstances(lt,wt,jt)}else yt.render(lt,wt)};function Mt(C,$,ne){C.transparent===!0&&C.side===pi&&C.forceSinglePass===!1?(C.side=kn,C.needsUpdate=!0,hs(C,$,ne),C.side=Ar,C.needsUpdate=!0,hs(C,$,ne),C.side=pi):hs(C,$,ne)}this.compile=function(C,$,ne=null){ne===null&&(ne=C),v=ut.get(ne),v.init($),b.push(v),ne.traverseVisible(function(V){V.isLight&&V.layers.test($.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),C!==ne&&C.traverseVisible(function(V){V.isLight&&V.layers.test($.layers)&&(v.pushLight(V),V.castShadow&&v.pushShadow(V))}),v.setupLights();const ie=new Set;return C.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const Me=V.material;if(Me)if(Array.isArray(Me))for(let be=0;be<Me.length;be++){const Oe=Me[be];Mt(Oe,ne,V),ie.add(Oe)}else Mt(Me,ne,V),ie.add(Me)}),b.pop(),v=null,ie},this.compileAsync=function(C,$,ne=null){const ie=this.compile(C,$,ne);return new Promise(V=>{function Me(){if(ie.forEach(function(be){Ye.get(be).currentProgram.isReady()&&ie.delete(be)}),ie.size===0){V(C);return}setTimeout(Me,10)}st.get("KHR_parallel_shader_compile")!==null?Me():setTimeout(Me,10)})};let Rn=null;function Mn(C){Rn&&Rn(C)}function us(){Ri.stop()}function Zi(){Ri.start()}const Ri=new S_;Ri.setAnimationLoop(Mn),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(C){Rn=C,ae.setAnimationLoop(C),C===null?Ri.stop():Ri.start()},ae.addEventListener("sessionstart",us),ae.addEventListener("sessionend",Zi),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera($),$=ae.getCamera()),C.isScene===!0&&C.onBeforeRender(A,C,$,Y),v=ut.get(C,b.length),v.init($),b.push(v),Ae.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Z.setFromProjectionMatrix(Ae),ye=this.localClippingEnabled,le=Ee.init(this.clippingPlanes,ye),y=Pe.get(C,D.length),y.init(),D.push(y),ae.enabled===!0&&ae.isPresenting===!0){const Me=A.xr.getDepthSensingMesh();Me!==null&&bi(Me,$,-1/0,A.sortObjects)}bi(C,$,0,A.sortObjects),y.finish(),A.sortObjects===!0&&y.sort(oe,se),pt=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,pt&&Ke.addToRenderList(y,C),this.info.render.frame++,le===!0&&Ee.beginShadows();const ne=v.state.shadowsArray;He.render(ne,C,$),le===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const ie=y.opaque,V=y.transmissive;if(v.setupLights(),$.isArrayCamera){const Me=$.cameras;if(V.length>0)for(let be=0,Oe=Me.length;be<Oe;be++){const ze=Me[be];Pr(ie,V,C,ze)}pt&&Ke.render(C);for(let be=0,Oe=Me.length;be<Oe;be++){const ze=Me[be];br(y,C,ze,ze.viewport)}}else V.length>0&&Pr(ie,V,C,$),pt&&Ke.render(C),br(y,C,$);Y!==null&&(L.updateMultisampleRenderTarget(Y),L.updateRenderTargetMipmap(Y)),C.isScene===!0&&C.onAfterRender(A,C,$),bt.resetDefaultState(),P=-1,R=null,b.pop(),b.length>0?(v=b[b.length-1],le===!0&&Ee.setGlobalState(A.clippingPlanes,v.state.camera)):v=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function bi(C,$,ne,ie){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)ne=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLight)v.pushLight(C),C.castShadow&&v.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Z.intersectsSprite(C)){ie&&Xe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Ae);const be=fe.update(C),Oe=C.material;Oe.visible&&y.push(C,be,Oe,ne,Xe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Z.intersectsObject(C))){const be=fe.update(C),Oe=C.material;if(ie&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Xe.copy(C.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),Xe.copy(be.boundingSphere.center)),Xe.applyMatrix4(C.matrixWorld).applyMatrix4(Ae)),Array.isArray(Oe)){const ze=be.groups;for(let nt=0,it=ze.length;nt<it;nt++){const $e=ze[nt],lt=Oe[$e.materialIndex];lt&&lt.visible&&y.push(C,be,lt,ne,Xe.z,$e)}}else Oe.visible&&y.push(C,be,Oe,ne,Xe.z,null)}}const Me=C.children;for(let be=0,Oe=Me.length;be<Oe;be++)bi(Me[be],$,ne,ie)}function br(C,$,ne,ie){const V=C.opaque,Me=C.transmissive,be=C.transparent;v.setupLightsView(ne),le===!0&&Ee.setGlobalState(A.clippingPlanes,ne),ie&&Ge.viewport(z.copy(ie)),V.length>0&&Ki(V,$,ne),Me.length>0&&Ki(Me,$,ne),be.length>0&&Ki(be,$,ne),Ge.buffers.depth.setTest(!0),Ge.buffers.depth.setMask(!0),Ge.buffers.color.setMask(!0),Ge.setPolygonOffset(!1)}function Pr(C,$,ne,ie){if((ne.isScene===!0?ne.overrideMaterial:null)!==null)return;v.state.transmissionRenderTarget[ie.id]===void 0&&(v.state.transmissionRenderTarget[ie.id]=new ss(1,1,{generateMipmaps:!0,type:st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float")?ua:$i,minFilter:is,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ct.workingColorSpace}));const Me=v.state.transmissionRenderTarget[ie.id],be=ie.viewport||z;Me.setSize(be.z,be.w);const Oe=A.getRenderTarget();A.setRenderTarget(Me),A.getClearColor(de),pe=A.getClearAlpha(),pe<1&&A.setClearColor(16777215,.5),A.clear(),pt&&Ke.render(ne);const ze=A.toneMapping;A.toneMapping=wr;const nt=ie.viewport;if(ie.viewport!==void 0&&(ie.viewport=void 0),v.setupLightsView(ie),le===!0&&Ee.setGlobalState(A.clippingPlanes,ie),Ki(C,ne,ie),L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me),st.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let $e=0,lt=$.length;$e<lt;$e++){const Tt=$[$e],wt=Tt.object,zt=Tt.geometry,yt=Tt.material,Ze=Tt.group;if(yt.side===pi&&wt.layers.test(ie.layers)){const jt=yt.side;yt.side=kn,yt.needsUpdate=!0,da(wt,ne,ie,zt,yt,Ze),yt.side=jt,yt.needsUpdate=!0,it=!0}}it===!0&&(L.updateMultisampleRenderTarget(Me),L.updateRenderTargetMipmap(Me))}A.setRenderTarget(Oe),A.setClearColor(de,pe),nt!==void 0&&(ie.viewport=nt),A.toneMapping=ze}function Ki(C,$,ne){const ie=$.isScene===!0?$.overrideMaterial:null;for(let V=0,Me=C.length;V<Me;V++){const be=C[V],Oe=be.object,ze=be.geometry,nt=ie===null?be.material:ie,it=be.group;Oe.layers.test(ne.layers)&&da(Oe,$,ne,ze,nt,it)}}function da(C,$,ne,ie,V,Me){C.onBeforeRender(A,$,ne,ie,V,Me),C.modelViewMatrix.multiplyMatrices(ne.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),V.onBeforeRender(A,$,ne,ie,C,Me),V.transparent===!0&&V.side===pi&&V.forceSinglePass===!1?(V.side=kn,V.needsUpdate=!0,A.renderBufferDirect(ne,$,ie,V,C,Me),V.side=Ar,V.needsUpdate=!0,A.renderBufferDirect(ne,$,ie,V,C,Me),V.side=pi):A.renderBufferDirect(ne,$,ie,V,C,Me),C.onAfterRender(A,$,ne,ie,V,Me)}function hs(C,$,ne){$.isScene!==!0&&($=Rt);const ie=Ye.get(C),V=v.state.lights,Me=v.state.shadowsArray,be=V.state.version,Oe=ke.getParameters(C,V.state,Me,$,ne),ze=ke.getProgramCacheKey(Oe);let nt=ie.programs;ie.environment=C.isMeshStandardMaterial?$.environment:null,ie.fog=$.fog,ie.envMap=(C.isMeshStandardMaterial?q:M).get(C.envMap||ie.environment),ie.envMapRotation=ie.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",at),nt=new Map,ie.programs=nt);let it=nt.get(ze);if(it!==void 0){if(ie.currentProgram===it&&ie.lightsStateVersion===be)return vi(C,Oe),it}else Oe.uniforms=ke.getUniforms(C),C.onBeforeCompile(Oe,A),it=ke.acquireProgram(Oe,ze),nt.set(ze,it),ie.uniforms=Oe.uniforms;const $e=ie.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=Ee.uniform),vi(C,Oe),ie.needsLights=dc(C),ie.lightsStateVersion=be,ie.needsLights&&($e.ambientLightColor.value=V.state.ambient,$e.lightProbe.value=V.state.probe,$e.directionalLights.value=V.state.directional,$e.directionalLightShadows.value=V.state.directionalShadow,$e.spotLights.value=V.state.spot,$e.spotLightShadows.value=V.state.spotShadow,$e.rectAreaLights.value=V.state.rectArea,$e.ltc_1.value=V.state.rectAreaLTC1,$e.ltc_2.value=V.state.rectAreaLTC2,$e.pointLights.value=V.state.point,$e.pointLightShadows.value=V.state.pointShadow,$e.hemisphereLights.value=V.state.hemi,$e.directionalShadowMap.value=V.state.directionalShadowMap,$e.directionalShadowMatrix.value=V.state.directionalShadowMatrix,$e.spotShadowMap.value=V.state.spotShadowMap,$e.spotLightMatrix.value=V.state.spotLightMatrix,$e.spotLightMap.value=V.state.spotLightMap,$e.pointShadowMap.value=V.state.pointShadowMap,$e.pointShadowMatrix.value=V.state.pointShadowMatrix),ie.currentProgram=it,ie.uniformsList=null,it}function pa(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=nc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function vi(C,$){const ne=Ye.get(C);ne.outputColorSpace=$.outputColorSpace,ne.batching=$.batching,ne.batchingColor=$.batchingColor,ne.instancing=$.instancing,ne.instancingColor=$.instancingColor,ne.instancingMorph=$.instancingMorph,ne.skinning=$.skinning,ne.morphTargets=$.morphTargets,ne.morphNormals=$.morphNormals,ne.morphColors=$.morphColors,ne.morphTargetsCount=$.morphTargetsCount,ne.numClippingPlanes=$.numClippingPlanes,ne.numIntersection=$.numClipIntersection,ne.vertexAlphas=$.vertexAlphas,ne.vertexTangents=$.vertexTangents,ne.toneMapping=$.toneMapping}function ma(C,$,ne,ie,V){$.isScene!==!0&&($=Rt),L.resetTextureUnits();const Me=$.fog,be=ie.isMeshStandardMaterial?$.environment:null,Oe=Y===null?A.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:uo,ze=(ie.isMeshStandardMaterial?q:M).get(ie.envMap||be),nt=ie.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,it=!!ne.attributes.tangent&&(!!ie.normalMap||ie.anisotropy>0),$e=!!ne.morphAttributes.position,lt=!!ne.morphAttributes.normal,Tt=!!ne.morphAttributes.color;let wt=wr;ie.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(wt=A.toneMapping);const zt=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,yt=zt!==void 0?zt.length:0,Ze=Ye.get(ie),jt=v.state.lights;if(le===!0&&(ye===!0||C!==R)){const qt=C===R&&ie.id===P;Ee.setState(ie,C,qt)}let xt=!1;ie.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==jt.state.version||Ze.outputColorSpace!==Oe||V.isBatchedMesh&&Ze.batching===!1||!V.isBatchedMesh&&Ze.batching===!0||V.isBatchedMesh&&Ze.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Ze.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Ze.instancing===!1||!V.isInstancedMesh&&Ze.instancing===!0||V.isSkinnedMesh&&Ze.skinning===!1||!V.isSkinnedMesh&&Ze.skinning===!0||V.isInstancedMesh&&Ze.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Ze.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Ze.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Ze.instancingMorph===!1&&V.morphTexture!==null||Ze.envMap!==ze||ie.fog===!0&&Ze.fog!==Me||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==nt||Ze.vertexTangents!==it||Ze.morphTargets!==$e||Ze.morphNormals!==lt||Ze.morphColors!==Tt||Ze.toneMapping!==wt||Ze.morphTargetsCount!==yt)&&(xt=!0):(xt=!0,Ze.__version=ie.version);let cn=Ze.currentProgram;xt===!0&&(cn=hs(ie,$,V));let ri=!1,En=!1,Lr=!1;const Lt=cn.getUniforms(),Tn=Ze.uniforms;if(Ge.useProgram(cn.program)&&(ri=!0,En=!0,Lr=!0),ie.id!==P&&(P=ie.id,En=!0),ri||R!==C){Ge.buffers.depth.getReversed()?(_e.copy(C.projectionMatrix),_x(_e),vx(_e),Lt.setValue(H,"projectionMatrix",_e)):Lt.setValue(H,"projectionMatrix",C.projectionMatrix),Lt.setValue(H,"viewMatrix",C.matrixWorldInverse);const mn=Lt.map.cameraPosition;mn!==void 0&&mn.setValue(H,Ne.setFromMatrixPosition(C.matrixWorld)),ct.logarithmicDepthBuffer&&Lt.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ie.isMeshPhongMaterial||ie.isMeshToonMaterial||ie.isMeshLambertMaterial||ie.isMeshBasicMaterial||ie.isMeshStandardMaterial||ie.isShaderMaterial)&&Lt.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),R!==C&&(R=C,En=!0,Lr=!0)}if(V.isSkinnedMesh){Lt.setOptional(H,V,"bindMatrix"),Lt.setOptional(H,V,"bindMatrixInverse");const qt=V.skeleton;qt&&(qt.boneTexture===null&&qt.computeBoneTexture(),Lt.setValue(H,"boneTexture",qt.boneTexture,L))}V.isBatchedMesh&&(Lt.setOptional(H,V,"batchingTexture"),Lt.setValue(H,"batchingTexture",V._matricesTexture,L),Lt.setOptional(H,V,"batchingIdTexture"),Lt.setValue(H,"batchingIdTexture",V._indirectTexture,L),Lt.setOptional(H,V,"batchingColorTexture"),V._colorsTexture!==null&&Lt.setValue(H,"batchingColorTexture",V._colorsTexture,L));const pn=ne.morphAttributes;if((pn.position!==void 0||pn.normal!==void 0||pn.color!==void 0)&&et.update(V,ne,cn),(En||Ze.receiveShadow!==V.receiveShadow)&&(Ze.receiveShadow=V.receiveShadow,Lt.setValue(H,"receiveShadow",V.receiveShadow)),ie.isMeshGouraudMaterial&&ie.envMap!==null&&(Tn.envMap.value=ze,Tn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),ie.isMeshStandardMaterial&&ie.envMap===null&&$.environment!==null&&(Tn.envMapIntensity.value=$.environmentIntensity),En&&(Lt.setValue(H,"toneMappingExposure",A.toneMappingExposure),Ze.needsLights&&ga(Tn,Lr),Me&&ie.fog===!0&&Ce.refreshFogUniforms(Tn,Me),Ce.refreshMaterialUniforms(Tn,ie,B,ue,v.state.transmissionRenderTarget[C.id]),nc.upload(H,pa(Ze),Tn,L)),ie.isShaderMaterial&&ie.uniformsNeedUpdate===!0&&(nc.upload(H,pa(Ze),Tn,L),ie.uniformsNeedUpdate=!1),ie.isSpriteMaterial&&Lt.setValue(H,"center",V.center),Lt.setValue(H,"modelViewMatrix",V.modelViewMatrix),Lt.setValue(H,"normalMatrix",V.normalMatrix),Lt.setValue(H,"modelMatrix",V.matrixWorld),ie.isShaderMaterial||ie.isRawShaderMaterial){const qt=ie.uniformsGroups;for(let mn=0,Dr=qt.length;mn<Dr;mn++){const vt=qt[mn];j.update(vt,cn),j.bind(vt,cn)}}return cn}function ga(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function dc(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return I},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(C,$,ne){Ye.get(C.texture).__webglTexture=$,Ye.get(C.depthTexture).__webglTexture=ne;const ie=Ye.get(C);ie.__hasExternalTextures=!0,ie.__autoAllocateDepthBuffer=ne===void 0,ie.__autoAllocateDepthBuffer||st.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),ie.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(C,$){const ne=Ye.get(C);ne.__webglFramebuffer=$,ne.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,ne=0){Y=C,I=$,O=ne;let ie=!0,V=null,Me=!1,be=!1;if(C){const ze=Ye.get(C);if(ze.__useDefaultFramebuffer!==void 0)Ge.bindFramebuffer(H.FRAMEBUFFER,null),ie=!1;else if(ze.__webglFramebuffer===void 0)L.setupRenderTarget(C);else if(ze.__hasExternalTextures)L.rebindTextures(C,Ye.get(C.texture).__webglTexture,Ye.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const $e=C.depthTexture;if(ze.__boundDepthTexture!==$e){if($e!==null&&Ye.has($e)&&(C.width!==$e.image.width||C.height!==$e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(C)}}const nt=C.texture;(nt.isData3DTexture||nt.isDataArrayTexture||nt.isCompressedArrayTexture)&&(be=!0);const it=Ye.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[$])?V=it[$][ne]:V=it[$],Me=!0):C.samples>0&&L.useMultisampledRTT(C)===!1?V=Ye.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?V=it[ne]:V=it,z.copy(C.viewport),re.copy(C.scissor),Q=C.scissorTest}else z.copy(F).multiplyScalar(B).floor(),re.copy(te).multiplyScalar(B).floor(),Q=we;if(Ge.bindFramebuffer(H.FRAMEBUFFER,V)&&ie&&Ge.drawBuffers(C,V),Ge.viewport(z),Ge.scissor(re),Ge.setScissorTest(Q),Me){const ze=Ye.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,ne)}else if(be){const ze=Ye.get(C.texture),nt=$||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,ze.__webglTexture,ne||0,nt)}P=-1},this.readRenderTargetPixels=function(C,$,ne,ie,V,Me,be){if(!(C&&C.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe){Ge.bindFramebuffer(H.FRAMEBUFFER,Oe);try{const ze=C.texture,nt=ze.format,it=ze.type;if(!ct.textureFormatReadable(nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ie&&ne>=0&&ne<=C.height-V&&H.readPixels($,ne,ie,V,ot.convert(nt),ot.convert(it),Me)}finally{const ze=Y!==null?Ye.get(Y).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(C,$,ne,ie,V,Me,be){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Oe=Ye.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&be!==void 0&&(Oe=Oe[be]),Oe){const ze=C.texture,nt=ze.format,it=ze.type;if(!ct.textureFormatReadable(nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if($>=0&&$<=C.width-ie&&ne>=0&&ne<=C.height-V){Ge.bindFramebuffer(H.FRAMEBUFFER,Oe);const $e=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.bufferData(H.PIXEL_PACK_BUFFER,Me.byteLength,H.STREAM_READ),H.readPixels($,ne,ie,V,ot.convert(nt),ot.convert(it),0);const lt=Y!==null?Ye.get(Y).__webglFramebuffer:null;Ge.bindFramebuffer(H.FRAMEBUFFER,lt);const Tt=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await gx(H,Tt,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,$e),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Me),H.deleteBuffer($e),H.deleteSync(Tt),Me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(C,$=null,ne=0){C.isTexture!==!0&&($s("WebGLRenderer: copyFramebufferToTexture function signature has changed."),$=arguments[0]||null,C=arguments[1]);const ie=Math.pow(2,-ne),V=Math.floor(C.image.width*ie),Me=Math.floor(C.image.height*ie),be=$!==null?$.x:0,Oe=$!==null?$.y:0;L.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,ne,0,0,be,Oe,V,Me),Ge.unbindTexture()};const _a=H.createFramebuffer(),va=H.createFramebuffer();this.copyTextureToTexture=function(C,$,ne=null,ie=null,V=0,Me=null){C.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture function signature has changed."),ie=arguments[0]||null,C=arguments[1],$=arguments[2],Me=arguments[3]||0,ne=null),Me===null&&(V!==0?($s("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Me=V,V=0):Me=0);let be,Oe,ze,nt,it,$e,lt,Tt,wt;const zt=C.isCompressedTexture?C.mipmaps[Me]:C.image;if(ne!==null)be=ne.max.x-ne.min.x,Oe=ne.max.y-ne.min.y,ze=ne.isBox3?ne.max.z-ne.min.z:1,nt=ne.min.x,it=ne.min.y,$e=ne.isBox3?ne.min.z:0;else{const pn=Math.pow(2,-V);be=Math.floor(zt.width*pn),Oe=Math.floor(zt.height*pn),C.isDataArrayTexture?ze=zt.depth:C.isData3DTexture?ze=Math.floor(zt.depth*pn):ze=1,nt=0,it=0,$e=0}ie!==null?(lt=ie.x,Tt=ie.y,wt=ie.z):(lt=0,Tt=0,wt=0);const yt=ot.convert($.format),Ze=ot.convert($.type);let jt;$.isData3DTexture?(L.setTexture3D($,0),jt=H.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(L.setTexture2DArray($,0),jt=H.TEXTURE_2D_ARRAY):(L.setTexture2D($,0),jt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,$.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,$.unpackAlignment);const xt=H.getParameter(H.UNPACK_ROW_LENGTH),cn=H.getParameter(H.UNPACK_IMAGE_HEIGHT),ri=H.getParameter(H.UNPACK_SKIP_PIXELS),En=H.getParameter(H.UNPACK_SKIP_ROWS),Lr=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,zt.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,zt.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,nt),H.pixelStorei(H.UNPACK_SKIP_ROWS,it),H.pixelStorei(H.UNPACK_SKIP_IMAGES,$e);const Lt=C.isDataArrayTexture||C.isData3DTexture,Tn=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const pn=Ye.get(C),qt=Ye.get($),mn=Ye.get(pn.__renderTarget),Dr=Ye.get(qt.__renderTarget);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,mn.__webglFramebuffer),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,Dr.__webglFramebuffer);for(let vt=0;vt<ze;vt++)Lt&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get(C).__webglTexture,V,$e+vt),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ye.get($).__webglTexture,Me,wt+vt)),H.blitFramebuffer(nt,it,be,Oe,lt,Tt,be,Oe,H.DEPTH_BUFFER_BIT,H.NEAREST);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(V!==0||C.isRenderTargetTexture||Ye.has(C)){const pn=Ye.get(C),qt=Ye.get($);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,_a),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,va);for(let mn=0;mn<ze;mn++)Lt?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,pn.__webglTexture,V,$e+mn):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,pn.__webglTexture,V),Tn?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,qt.__webglTexture,Me,wt+mn):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,qt.__webglTexture,Me),V!==0?H.blitFramebuffer(nt,it,be,Oe,lt,Tt,be,Oe,H.COLOR_BUFFER_BIT,H.NEAREST):Tn?H.copyTexSubImage3D(jt,Me,lt,Tt,wt+mn,nt,it,be,Oe):H.copyTexSubImage2D(jt,Me,lt,Tt,nt,it,be,Oe);Ge.bindFramebuffer(H.READ_FRAMEBUFFER,null),Ge.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Tn?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(jt,Me,lt,Tt,wt,be,Oe,ze,yt,Ze,zt.data):$.isCompressedArrayTexture?H.compressedTexSubImage3D(jt,Me,lt,Tt,wt,be,Oe,ze,yt,zt.data):H.texSubImage3D(jt,Me,lt,Tt,wt,be,Oe,ze,yt,Ze,zt):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Me,lt,Tt,be,Oe,yt,Ze,zt.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Me,lt,Tt,zt.width,zt.height,yt,zt.data):H.texSubImage2D(H.TEXTURE_2D,Me,lt,Tt,be,Oe,yt,Ze,zt);H.pixelStorei(H.UNPACK_ROW_LENGTH,xt),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,cn),H.pixelStorei(H.UNPACK_SKIP_PIXELS,ri),H.pixelStorei(H.UNPACK_SKIP_ROWS,En),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Lr),Me===0&&$.generateMipmaps&&H.generateMipmap(jt),Ge.unbindTexture()},this.copyTextureToTexture3D=function(C,$,ne=null,ie=null,V=0){return C.isTexture!==!0&&($s("WebGLRenderer: copyTextureToTexture3D function signature has changed."),ne=arguments[0]||null,ie=arguments[1]||null,C=arguments[2],$=arguments[3],V=arguments[4]||0),$s('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(C,$,ne,ie,V)},this.initRenderTarget=function(C){Ye.get(C).__webglFramebuffer===void 0&&L.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?L.setTextureCube(C,0):C.isData3DTexture?L.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?L.setTexture2DArray(C,0):L.setTexture2D(C,0),Ge.unbindTexture()},this.resetState=function(){I=0,O=0,Y=null,Ge.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}const Pg={type:"change"},Hf={type:"start"},A_={type:"end"},Xl=new uc,Lg=new ji,m1=Math.cos(70*px.DEG2RAD),tn=new X,Fn=2*Math.PI,Nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},bh=1e-6;class g1 extends Ly{constructor(e,t=null){super(e,t),this.state=Nt.NONE,this.enabled=!0,this.target=new X,this.cursor=new X,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:to.ROTATE,MIDDLE:to.DOLLY,RIGHT:to.PAN},this.touches={ONE:Zs.ROTATE,TWO:Zs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new X,this._lastQuaternion=new os,this._lastTargetPosition=new X,this._quat=new os().setFromUnitVectors(e.up,new X(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new rg,this._sphericalDelta=new rg,this._scale=1,this._panOffset=new X,this._rotateStart=new Fe,this._rotateEnd=new Fe,this._rotateDelta=new Fe,this._panStart=new Fe,this._panEnd=new Fe,this._panDelta=new Fe,this._dollyStart=new Fe,this._dollyEnd=new Fe,this._dollyDelta=new Fe,this._dollyDirection=new X,this._mouse=new Fe,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=v1.bind(this),this._onPointerDown=_1.bind(this),this._onPointerUp=x1.bind(this),this._onContextMenu=A1.bind(this),this._onMouseWheel=M1.bind(this),this._onKeyDown=E1.bind(this),this._onTouchStart=T1.bind(this),this._onTouchMove=w1.bind(this),this._onMouseDown=y1.bind(this),this._onMouseMove=S1.bind(this),this._interceptControlDown=C1.bind(this),this._interceptControlUp=R1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Pg),this.update(),this.state=Nt.NONE}update(e=null){const t=this.object.position;tn.copy(t).sub(this.target),tn.applyQuaternion(this._quat),this._spherical.setFromVector3(tn),this.autoRotate&&this.state===Nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(r)&&isFinite(o)&&(r<-Math.PI?r+=Fn:r>Math.PI&&(r-=Fn),o<-Math.PI?o+=Fn:o>Math.PI&&(o-=Fn),r<=o?this._spherical.theta=Math.max(r,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+o)/2?Math.max(r,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(tn.setFromSpherical(this._spherical),tn.applyQuaternion(this._quatInverse),t.copy(this.target).add(tn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const h=tn.length();u=this._clampDistance(h*this._scale);const d=h-u;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),l=!!d}else if(this.object.isOrthographicCamera){const h=new X(this._mouse.x,this._mouse.y,0);h.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=d!==this.object.zoom;const p=new X(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(h),this.object.updateMatrixWorld(),u=tn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Xl.origin.copy(this.object.position),Xl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Xl.direction))<m1?this.object.lookAt(this.target):(Lg.setFromNormalAndCoplanarPoint(this.object.up,this.target),Xl.intersectPlane(Lg,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>bh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>bh||this._lastTargetPosition.distanceToSquared(this.target)>bh?(this.dispatchEvent(Pg),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Fn/60*this.autoRotateSpeed*e:Fn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){tn.setFromMatrixColumn(t,0),tn.multiplyScalar(-e),this._panOffset.add(tn)}_panUp(e,t){this.screenSpacePanning===!0?tn.setFromMatrixColumn(t,1):(tn.setFromMatrixColumn(t,0),tn.crossVectors(this.object.up,tn)),tn.multiplyScalar(e),this._panOffset.add(tn)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;tn.copy(o).sub(this.target);let l=tn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/r.clientHeight,this.object.matrix),this._panUp(2*t*l/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),o=e-r.left,l=t-r.top,u=r.width,h=r.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/h)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Fn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Fn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Fn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Fn*this.rotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(r,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(r,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),o=.5*(e.pageX+r.x),l=.5*(e.pageY+r.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Fn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Fn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(r,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(r*r+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,h=(e.pageY+t.y)*.5;this._updateZoomParameters(u,h)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new Fe,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function _1(s){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(s.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(s)&&(this._addPointer(s),s.pointerType==="touch"?this._onTouchStart(s):this._onMouseDown(s)))}function v1(s){this.enabled!==!1&&(s.pointerType==="touch"?this._onTouchMove(s):this._onMouseMove(s))}function x1(s){switch(this._removePointer(s),this._pointers.length){case 0:this.domElement.releasePointerCapture(s.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(A_),this.state=Nt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function y1(s){let e;switch(s.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case to.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(s),this.state=Nt.DOLLY;break;case to.ROTATE:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}break;case to.PAN:if(s.ctrlKey||s.metaKey||s.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(s),this.state=Nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(s),this.state=Nt.PAN}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Hf)}function S1(s){switch(this.state){case Nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(s);break;case Nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(s);break;case Nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(s);break}}function M1(s){this.enabled===!1||this.enableZoom===!1||this.state!==Nt.NONE||(s.preventDefault(),this.dispatchEvent(Hf),this._handleMouseWheel(this._customWheelEvent(s)),this.dispatchEvent(A_))}function E1(s){this.enabled!==!1&&this._handleKeyDown(s)}function T1(s){switch(this._trackPointer(s),this._pointers.length){case 1:switch(this.touches.ONE){case Zs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(s),this.state=Nt.TOUCH_ROTATE;break;case Zs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(s),this.state=Nt.TOUCH_PAN;break;default:this.state=Nt.NONE}break;case 2:switch(this.touches.TWO){case Zs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(s),this.state=Nt.TOUCH_DOLLY_PAN;break;case Zs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(s),this.state=Nt.TOUCH_DOLLY_ROTATE;break;default:this.state=Nt.NONE}break;default:this.state=Nt.NONE}this.state!==Nt.NONE&&this.dispatchEvent(Hf)}function w1(s){switch(this._trackPointer(s),this.state){case Nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(s),this.update();break;case Nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(s),this.update();break;case Nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(s),this.update();break;case Nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(s),this.update();break;default:this.state=Nt.NONE}}function A1(s){this.enabled!==!1&&s.preventDefault()}function C1(s){s.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function R1(s){s.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const b1=()=>cs().ground_shapes;let wf=null;function P1(s){wf=s}function cs(){if(!wf)throw new Error("平台定義尚未從後端載入");return wf}const eo=()=>cs().ground.w,ts=()=>cs().ground.h;function L1(){const s=cs().antenna_traces;return[Math.min(...s.map(e=>e.x)),Math.min(...s.map(e=>e.y)),Math.max(...s.map(e=>e.x+e.w)),Math.max(...s.map(e=>e.y+e.h))]}function D1(s){const e=eo(),t=ts(),[r,o]=L1(),l=Math.round(e*.26*10)/10,u=Math.round(t*.22*10)/10,h=Math.round(Math.min(e,t)*.12*10)/10,d=Math.max(1,Math.min(e-l-1,r+s%3*(l*.7))),p=Math.max(1,Math.min(t-u-1,o-u-4+Math.floor(s/3)*(u*.6)));return{x:Math.round(d*10)/10,y:Math.round(p*10)/10,w:l,d:u,h}}const fo={ground:3108687,antenna:16762954,metal:8950436,metalSelected:5809919,grid:10069173};function N1(s){const e=s.metals.map(t=>t.kind).sort().join("-")||"none";return`${s.ground_shape}__${e}__n${s.metals.length}`}function I1(s){let e=1/0;for(const t of s.metals){const r=t.x,o=t.x+t.w,l=t.y,u=t.y+t.d;for(const h of cs().antenna_traces){const d=h.x,p=h.x+h.w,g=h.y,_=h.y+h.h,x=Math.max(d-o,r-p,0),S=Math.max(g-u,l-_,0);x===0&&S===0?e=Math.min(e,-Math.min(o-d,p-r,u-g,_-l)):e=Math.min(e,Math.hypot(x,S))}}return e}function U1(s,e,t){const r=e?fo.metalSelected:fo.metal,o=(h,d,p,g,_,x)=>t.push({kind:"box",center:[h+g/2,d+_/2,p+x/2],size:[g,_,x],color:r,opacity:.92,pickId:s.name}),l=cs().metal_kinds,u=l[s.kind]??l.solid;for(const[h,d,p,g,_,x]of u)o(s.x+h*s.w,s.y+d*s.d,s.z+p*s.h,g*s.w,_*s.d,x*s.h)}function F1(s,e){const t=[],r=b1(),o=r[s.ground_shape]??r.rect;t.push({kind:"ground",outer:o.outer,cut:o.cut,z:0,color:fo.ground,opacity:.9});for(const h of cs().antenna_traces){const[d,p,g,_]=[h.x,h.y,h.w,h.h];t.push({kind:"plate",x:d,y:p,z:.02,w:g,h:_,color:fo.antenna})}for(const h of s.metals)U1(h,h.name===e,t);let l=[0,0,0],u=[eo(),ts()+8,2];for(const h of s.metals)l=[Math.min(l[0],h.x),Math.min(l[1],h.y),Math.min(l[2],h.z)],u=[Math.max(u[0],h.x+h.w),Math.max(u[1],h.y+h.d),Math.max(u[2],h.z+h.h)];return{prims:t,fitBounds:{min:l,max:u}}}const Dg=7,O1=40,C_=22,k1=.3;function z1(s){const e=[[.15,.3,.85],[.1,.75,.85],[.95,.85,.2],[.9,.25,.2]],t=Math.max(0,Math.min(1,s))*(e.length-1),r=Math.min(e.length-2,Math.floor(t)),o=t-r;return[e[r][0]+(e[r+1][0]-e[r][0])*o,e[r][1]+(e[r+1][1]-e[r][1])*o,e[r][2]+(e[r+1][2]-e[r][2])*o]}function R_(s,e,t,r){const{n_phi:o,n_theta:l,phi_deg:u,theta_deg:h}=s,d=t??s.gain_dbi,p=r?r.peak:Math.max(...d),g=r?r.floor:p-C_,_=[],x=[];for(let y=0;y<o;y++)for(let v=0;v<l;v++){const D=d[y*l+v],b=Math.max(0,Math.min(1,(D-g)/(p-g||1))),A=Dg+b*(O1-Dg),W=u[y]*Math.PI/180,I=h[v]*Math.PI/180;_.push(e[0]+A*Math.sin(I)*Math.cos(W),e[1]+A*Math.sin(I)*Math.sin(W),e[2]+A*Math.cos(I));const O=z1(b);x.push(O[0],O[1],O[2])}const S=[];for(let y=0;y<o;y++){const v=(y+1)%o;for(let D=0;D<l-1;D++){const b=y*l+D,A=v*l+D,W=v*l+D+1,I=y*l+D+1;S.push(b,A,W,b,W,I)}}const E=new ii;E.setAttribute("position",new dn(_,3)),E.setAttribute("color",new dn(x,3)),E.setIndex(S),E.computeVertexNormals();const w=new Yn(E,new v_({vertexColors:!0,transparent:!0,opacity:k1,side:pi,metalness:.1,roughness:.85,depthWrite:!1}));return w.renderOrder=2,w}function B1(s,e,t,r){const o=R_(s,e,t,r),l=new l_(new My(o.geometry),new Ff({color:16777215,transparent:!0,opacity:.32,depthWrite:!1}));return l.renderOrder=3,o.geometry.dispose(),o.material.dispose(),l}function Ph(s,e){return new v_({color:s,metalness:.5,roughness:.45,transparent:e!==void 0&&e<1,opacity:e??1,side:pi})}function H1(s){if(s.kind==="ground"){const[r,o,l,u]=s.outer,h=new p_;if(h.moveTo(r,o),h.lineTo(l,o),h.lineTo(l,u),h.lineTo(r,u),h.closePath(),s.cut){const[g,_,x,S]=s.cut,E=new yf;E.moveTo(g,_),E.lineTo(x,_),E.lineTo(x,S),E.lineTo(g,S),E.closePath(),h.holes.push(E)}const d=new zf(h),p=new Yn(d,Ph(s.color,s.opacity));return p.position.z=s.z,p}if(s.kind==="plate"){const r=new fa(s.w,s.h),o=new Yn(r,Ph(s.color,s.opacity));return o.position.set(s.x+s.w/2,s.y+s.h/2,s.z),o}const e=new go(s.size[0],s.size[1],s.size[2]),t=new Yn(e,Ph(s.color,s.opacity));return t.position.set(s.center[0],s.center[1],s.center[2]),s.pickId&&(t.userData.pickId=s.pickId),t}function Yl(s){s.traverse(e=>{const t=e;t.geometry&&t.geometry.dispose();const r=t.material;r&&(Array.isArray(r)?r:[r]).forEach(o=>o.dispose())}),s.clear()}function V1({scene:s,fitKey:e,onPick:t,onDrag:r,pattern:o,showPattern:l,truthPattern:u,showTruth:h}){const d=tt.useRef(null),p=tt.useRef(null),g=tt.useRef(null),_=tt.useRef(null),x=tt.useRef(null),S=tt.useRef(""),E=tt.useRef(null),w=tt.useRef({onPick:t,onDrag:r});return w.current={onPick:t,onDrag:r},tt.useEffect(()=>{const y=d.current;if(!y)return;const v=new p1({antialias:!0,alpha:!0});v.setPixelRatio(window.devicePixelRatio),v.setSize(y.clientWidth,Math.max(y.clientHeight,1)),y.appendChild(v.domElement);const D=new Hx,b=new ni(45,y.clientWidth/Math.max(y.clientHeight,1),.01,1e4);b.up.set(0,0,1),b.position.set(eo()*.5,-ts()*1.4,ts()*1.2),p.current=b;const A=new g1(b,v.domElement);A.enableDamping=!0,A.dampingFactor=.08,A.target.set(eo()/2,ts()/2,0),g.current=A,D.add(new Cy(16777215,.8));const W=new tg(16777215,.85);W.position.set(1,-1,1.4),D.add(W);const I=new tg(16777215,.35);I.position.set(-1,1,.6),D.add(I);const O=new Py(300,30,fo.grid,fo.grid);O.rotation.x=Math.PI/2,O.material.transparent=!0,O.material.opacity=.14,O.position.set(eo()/2,ts()/2,-.05),D.add(O);const Y=new Ks;_.current=Y,D.add(Y);const P=new Ks;x.current=P,D.add(P);const R=new by,z=new Fe,re=new ji(new X(0,0,1),0),Q=new X,de=we=>{const Z=v.domElement.getBoundingClientRect();z.x=(we.clientX-Z.left)/Z.width*2-1,z.y=-((we.clientY-Z.top)/Z.height)*2+1},pe=()=>(R.setFromCamera(z,b),R.ray.intersectPlane(re,Q)?Q.clone():null),ce=we=>{if(we.button!==0)return;de(we),R.setFromCamera(z,b);const le=R.intersectObjects(Y.children,!1).find(Ae=>Ae.object.userData.pickId),ye=le?String(le.object.userData.pickId):null;if(w.current.onPick(ye),!ye)return;const _e=pe();_e&&(A.enabled=!1,E.current={name:ye,startX:_e.x,startY:_e.y},v.domElement.setPointerCapture(we.pointerId))},ue=we=>{const Z=E.current;if(!Z)return;de(we);const le=pe();le&&w.current.onDrag(Z.name,le.x-Z.startX,le.y-Z.startY,!1)},B=we=>{const Z=E.current;if(!Z)return;de(we);const le=pe();E.current=null,A.enabled=!0;try{v.domElement.releasePointerCapture(we.pointerId)}catch{}le&&w.current.onDrag(Z.name,le.x-Z.startX,le.y-Z.startY,!0)},oe=v.domElement;oe.addEventListener("pointerdown",ce),oe.addEventListener("pointermove",ue),oe.addEventListener("pointerup",B),oe.addEventListener("pointercancel",B);let se=0;const F=()=>{se=requestAnimationFrame(F),A.update(),v.render(D,b)};F();const te=new ResizeObserver(()=>{const we=y.clientWidth,Z=Math.max(y.clientHeight,1);v.setSize(we,Z),b.aspect=we/Z,b.updateProjectionMatrix()});return te.observe(y),()=>{cancelAnimationFrame(se),te.disconnect(),oe.removeEventListener("pointerdown",ce),oe.removeEventListener("pointermove",ue),oe.removeEventListener("pointerup",B),oe.removeEventListener("pointercancel",B),A.dispose(),_.current&&Yl(_.current),x.current&&Yl(x.current),v.dispose(),oe.parentNode===y&&y.removeChild(oe)}},[]),tt.useEffect(()=>{const y=_.current,v=p.current,D=g.current;if(!y||!v||!D||(Yl(y),!s))return;for(const Q of s.prims){const de=H1(Q);de&&y.add(de)}if(e===S.current)return;S.current=e;const{min:b,max:A}=s.fitBounds,W=new X((b[0]+A[0])/2,(b[1]+A[1])/2,(b[2]+A[2])/2),I=Math.hypot(A[0]-b[0],A[1]-b[1],A[2]-b[2]),O=Math.max(I/2,.001),Y=v.fov*Math.PI/180,P=O/Math.sin(Y/2),R=O/Math.sin(Math.atan(Math.tan(Y/2)*v.aspect)),z=1.25*Math.max(P,R),re=new X(.15,-1,.75).normalize();v.position.copy(W).add(re.multiplyScalar(z)),v.near=Math.max(z/1e3,.01),v.far=z*100,v.updateProjectionMatrix(),D.target.copy(W),D.update()},[s,e]),tt.useEffect(()=>{const y=x.current;if(!y||(Yl(y),!o))return;const v=[eo()/2,ts()/2,0],D=h&&u&&u.length===o.gain_dbi.length,b=D?[...o.gain_dbi,...u]:o.gain_dbi,A=Math.max(...b),W={peak:A,floor:A-C_};l&&y.add(R_(o,v,void 0,W)),D&&y.add(B1(o,v,u,W))},[o,l,u,h]),U.jsx("div",{style:{width:"100%",height:"100%"},ref:d})}const ql=720,Kr=300,Xn={l:48,r:16,t:16,b:34};function Ng(s){return s==="pass"?"var(--good)":s==="grey"?"var(--warn)":"var(--bad)"}function Ig(s){return s==="pass"?"通過":s==="grey"?"灰區":"停損"}function G1({sample:s,nTheta:e,thetaAxis:t,phiIndex:r}){const o=s.truth_pattern.slice(r*e,(r+1)*e),l=s.pred_pattern.slice(r*e,(r+1)*e),u=[...o,...l],h=Math.floor(Math.min(...u)-1),d=Math.ceil(Math.max(...u)+1),p=S=>Xn.l+S/(e-1)*(ql-Xn.l-Xn.r),g=S=>Kr-Xn.b-(S-h)/(d-h)*(Kr-Xn.t-Xn.b),_=S=>S.map((E,w)=>`${w===0?"M":"L"}${p(w).toFixed(1)},${g(E).toFixed(1)}`).join(" "),x=5;return U.jsxs("svg",{width:"100%",viewBox:`0 0 ${ql} ${Kr}`,style:{display:"block"},children:[Array.from({length:x+1},(S,E)=>{const w=h+(d-h)*E/x;return U.jsxs("g",{children:[U.jsx("line",{x1:Xn.l,x2:ql-Xn.r,y1:g(w),y2:g(w),stroke:"rgba(255,255,255,0.08)"}),U.jsx("text",{x:Xn.l-8,y:g(w)+4,fill:"var(--text-muted)",fontSize:"11",textAnchor:"end",children:w.toFixed(0)})]},E)}),t.map((S,E)=>E%3===0?U.jsx("text",{x:p(E),y:Kr-12,fill:"var(--text-muted)",fontSize:"11",textAnchor:"middle",children:S},E):null),U.jsx("text",{x:ql/2,y:Kr-1,fill:"var(--text-muted)",fontSize:"11",textAnchor:"middle",children:"θ（度）"}),U.jsx("text",{x:14,y:(Kr-Xn.b+Xn.t)/2,fill:"var(--text-muted)",fontSize:"11",textAnchor:"middle",transform:`rotate(-90 14 ${(Kr-Xn.b+Xn.t)/2})`,children:"增益（dBi）"}),U.jsx("path",{d:_(o),fill:"none",stroke:"#3fb950",strokeWidth:"2.2"}),U.jsx("path",{d:_(l),fill:"none",stroke:"#58a6ff",strokeWidth:"2.2",strokeDasharray:"6 4"})]})}function W1({data:s}){const e=s.summary,[t,r]=tt.useState(0),[o,l]=tt.useState(0),u=e.farfield_grid.theta_deg.length,h=s.samples[Math.min(t,s.samples.length-1)],d=tt.useMemo(()=>e.skill_score===null||e.skill_score===void 0?null:e.skill_score>=.4?{text:"明顯勝過笨基線",color:"var(--good)"}:e.skill_score>=.15?{text:"略勝笨基線",color:"var(--warn)"}:{text:"幾乎沒有勝過笨基線——通過門檻不代表學到東西",color:"var(--bad)"},[e.skill_score]);return U.jsxs("div",{style:{padding:"20px 26px",overflowY:"auto",height:"100%"},children:[U.jsx("h2",{style:{margin:"0 0 4px",fontSize:20},children:"留一種拓樸驗證報告"}),U.jsxs("div",{className:"hint",style:{marginBottom:18},children:["留出拓樸 ",U.jsx("b",{style:{color:"var(--text-main)"},children:e.holdout_topology}),"·　訓練 ",e.n_train," 樣本 / 驗證 ",e.n_test," 樣本　·　訓練耗時 ",e.train_minutes," 分鐘",U.jsx("br",{}),"量的是模型",U.jsx("b",{style:{color:"var(--text-main)"},children:"沒看過的結構種類"}),"， 不是同一種拓樸內的內插——後者是傳統代理模型免費就有的能力。"]}),U.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(4, 1fr)",gap:12,marginBottom:20},children:[U.jsxs("div",{className:"stat-card",children:[U.jsx("div",{className:"stat-label",children:"峰值增益平均誤差"}),U.jsxs("div",{className:"stat-value",style:{color:Ng(e.verdict_peak)},children:[e.peak_gain_mae_db.toFixed(2),U.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:" dB"})]}),U.jsxs("div",{className:"stat-sub",children:["門檻 <",e.thresholds.peak_gain_db.pass," 通過 · ",Ig(e.verdict_peak),e.baseline_peak_mae_db!==null&&` · 基線 ${e.baseline_peak_mae_db.toFixed(2)}`]})]}),U.jsxs("div",{className:"stat-card",children:[U.jsx("div",{className:"stat-label",children:"場型逐點 MAE"}),U.jsxs("div",{className:"stat-value",style:{color:Ng(e.verdict_pattern)},children:[e.pattern_mae_db.toFixed(2),U.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:" dB"})]}),U.jsxs("div",{className:"stat-sub",children:["門檻 <",e.thresholds.pattern_mae_db.pass," 通過 · ",Ig(e.verdict_pattern),e.baseline_pattern_mae_db!==null&&` · 基線 ${e.baseline_pattern_mae_db.toFixed(2)}`]})]}),U.jsxs("div",{className:"stat-card",children:[U.jsx("div",{className:"stat-label",children:"Skill score"}),U.jsx("div",{className:"stat-value",style:{color:d==null?void 0:d.color},children:e.skill_score===null||e.skill_score===void 0?"—":e.skill_score.toFixed(3)}),U.jsx("div",{className:"stat-sub",children:(d==null?void 0:d.text)??"無基線可比"})]}),U.jsxs("div",{className:"stat-card",children:[U.jsx("div",{className:"stat-label",children:"推論 vs HFSS"}),U.jsx("div",{className:"stat-value",style:{color:"var(--accent)"},children:e.speedup?`${e.speedup}×`:"—"}),U.jsxs("div",{className:"stat-sub",children:[e.median_predict_seconds.toFixed(3)," 秒 vs ",e.mean_hfss_minutes," 分鐘"]})]})]}),d&&e.skill_score!==null&&e.skill_score<.15&&U.jsxs("div",{className:"hint",style:{border:"1px solid var(--bad)",borderRadius:8,padding:"10px 12px",marginBottom:18,color:"var(--text-main)"},children:[U.jsx("b",{style:{color:"var(--bad)"},children:"誠實性提醒："}),"這支天線的場型本來就長得差不多，所以一個「永遠輸出訓練集平均場型」的模型 也能通過 MAE 門檻。skill score 才是「模型比什麼都不學好多少」的指標； 它太低時，漂亮的誤差數字不能拿來背書。"]}),U.jsx("h3",{className:"panel-title",style:{marginTop:4},children:"逐樣本比對"}),U.jsx("div",{style:{overflowX:"auto",marginBottom:22},children:U.jsxs("table",{style:{width:"100%",borderCollapse:"collapse",fontSize:13},children:[U.jsx("thead",{children:U.jsxs("tr",{style:{color:"var(--text-muted)",textAlign:"right"},children:[U.jsx("th",{style:{textAlign:"left",padding:"6px 8px"},children:"樣本"}),U.jsx("th",{style:{padding:"6px 8px"},children:"HFSS 峰值"}),U.jsx("th",{style:{padding:"6px 8px"},children:"SimAI 峰值"}),U.jsx("th",{style:{padding:"6px 8px"},children:"峰值誤差"}),U.jsx("th",{style:{padding:"6px 8px"},children:"場型 MAE"}),U.jsx("th",{style:{padding:"6px 8px"},children:"基線 MAE"}),U.jsx("th",{style:{padding:"6px 8px"},children:"信心"}),U.jsx("th",{style:{padding:"6px 8px"},children:"推論"})]})}),U.jsx("tbody",{children:s.samples.map((p,g)=>U.jsxs("tr",{onClick:()=>r(g),style:{cursor:"pointer",textAlign:"right",background:g===t?"rgba(88,166,255,0.12)":void 0,borderTop:"1px solid var(--border-panel)"},children:[U.jsx("td",{style:{textAlign:"left",padding:"6px 8px"},children:p.id}),U.jsx("td",{style:{padding:"6px 8px"},children:p.hfss_peak_dbi.toFixed(2)}),U.jsx("td",{style:{padding:"6px 8px"},children:p.simai_peak_dbi.toFixed(2)}),U.jsx("td",{style:{padding:"6px 8px",color:p.peak_error_db<e.thresholds.peak_gain_db.pass?"var(--good)":p.peak_error_db<e.thresholds.peak_gain_db.grey?"var(--warn)":"var(--bad)"},children:p.peak_error_db.toFixed(2)}),U.jsx("td",{style:{padding:"6px 8px"},children:p.pattern_mae_db.toFixed(2)}),U.jsx("td",{style:{padding:"6px 8px",color:"var(--text-muted)"},children:p.baseline_mae_db===null?"—":p.baseline_mae_db.toFixed(2)}),U.jsx("td",{style:{padding:"6px 8px",color:"var(--text-muted)"},children:p.uncertainty===null?"—":p.uncertainty.toFixed(2)}),U.jsxs("td",{style:{padding:"6px 8px",color:"var(--text-muted)"},children:[p.predict_seconds.toFixed(2),"s"]})]},p.id))})]})}),U.jsxs("h3",{className:"panel-title",children:["場型切面：",h==null?void 0:h.id]}),U.jsxs("div",{style:{display:"flex",alignItems:"center",gap:14,marginBottom:8},children:[U.jsxs("span",{className:"hint",children:["φ = ",e.farfield_grid.phi_deg[o],"°"]}),U.jsx("input",{type:"range",min:0,max:e.farfield_grid.phi_deg.length-1,value:o,onChange:p=>l(Number(p.target.value)),style:{flex:1,maxWidth:320}}),U.jsxs("span",{style:{fontSize:12,display:"flex",gap:16,alignItems:"center"},children:[U.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[U.jsx("svg",{width:"26",height:"10",children:U.jsx("line",{x1:"0",y1:"5",x2:"26",y2:"5",stroke:"#3fb950",strokeWidth:"2.4"})}),"HFSS 真解"]}),U.jsxs("span",{style:{display:"flex",gap:6,alignItems:"center"},children:[U.jsx("svg",{width:"26",height:"10",children:U.jsx("line",{x1:"0",y1:"5",x2:"26",y2:"5",stroke:"#58a6ff",strokeWidth:"2.4",strokeDasharray:"6 4"})}),"SimAI 預測"]})]})]}),h&&U.jsx("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-panel)",borderRadius:8,padding:8},children:U.jsx(G1,{sample:h,nTheta:u,thetaAxis:e.farfield_grid.theta_deg,phiIndex:o})}),U.jsxs("div",{className:"hint",style:{marginTop:14,paddingBottom:20},children:["模型：",e.model_fname,"　·　節點輸入特徵 ",e.input_names.join("、")||"無","　· 邊界條件 ",e.boundary_conditions.join("、")]})]})}const Lh=360,On={l:30,r:10,t:10,b:24};function Dh(s){const e=Math.max(0,Math.min(1,s)),t=Math.round(255*Math.min(1,e*2)),r=Math.round(255*Math.min(1,e*1.4+.15)),o=Math.round(255*(1-e)*.9);return`rgb(${t},${r},${o})`}function j1({data:s}){var W;if(!s.cells.filter(I=>I.peak_gain_dbi!==null).length)return U.jsx("div",{className:"hint",children:"整片都超出模型的訓練範圍，沒有可用的格點。"});const t=s.worst_dbi,r=s.best_dbi,[o,l]=s.x_range,[u,h]=s.y_range,d=Lh-On.l-On.r,p=On.t+On.b+Math.round(d*(h-u)/(l-o||1)),g=p-On.t-On.b,_=d/s.nx,x=g/s.ny,S=I=>On.l+I/s.nx*d,E=I=>On.t+g-(I+1)/s.ny*g,[w,y,v,D]=s.antenna_bbox,b=I=>On.l+(I-o)/(l-o||1)*d,A=I=>On.t+g-(I-u)/(h-u||1)*g;return U.jsxs("div",{children:[U.jsxs("svg",{width:"100%",viewBox:`0 0 ${Lh} ${p}`,style:{display:"block"},children:[s.cells.map((I,O)=>{const Y=I.peak_gain_dbi===null?0:(I.peak_gain_dbi-t)/(r-t||1),P=I.state==="invalid"?"#3a1d2a":Dh(Y);return U.jsx("rect",{x:S(I.ix),y:E(I.iy),width:_+.5,height:x+.5,fill:P,opacity:I.state==="degraded"?.55:1,children:U.jsx("title",{children:I.peak_gain_dbi===null?`x=${I.x} y=${I.y}　不可放：${I.reason??"超出範圍"}`:`x=${I.x} y=${I.y}　${I.peak_gain_dbi.toFixed(2)} dBi`+(I.state==="degraded"?`（比最佳低 ${(r-I.peak_gain_dbi).toFixed(2)} dB）`:"")})},O)}),U.jsx("rect",{x:b(w),y:A(D),width:b(v)-b(w),height:A(y)-A(D),fill:"none",stroke:"#ffd166",strokeWidth:1.4,strokeDasharray:"3 2"}),U.jsx("text",{x:b(w),y:A(D)-3,fill:"#ffd166",fontSize:8,children:"天線"}),U.jsx("text",{x:On.l,y:p-8,fill:"#8b93a7",fontSize:9,children:o.toFixed(0)}),U.jsxs("text",{x:Lh-On.r-14,y:p-8,fill:"#8b93a7",fontSize:9,children:[l.toFixed(0)," mm"]}),U.jsx("text",{x:4,y:On.t+8,fill:"#8b93a7",fontSize:9,children:h.toFixed(0)}),U.jsx("text",{x:4,y:p-On.b,fill:"#8b93a7",fontSize:9,children:u.toFixed(0)})]}),U.jsxs("div",{style:{display:"flex",gap:12,flexWrap:"wrap",marginTop:6,fontSize:11},children:[U.jsxs("span",{children:[U.jsx("span",{style:{display:"inline-block",width:10,height:10,background:Dh(1),marginRight:4}}),"最佳 ",r.toFixed(2)," dBi"]}),U.jsxs("span",{children:[U.jsx("span",{style:{display:"inline-block",width:10,height:10,background:Dh(0),marginRight:4}}),"最差 ",t.toFixed(2)," dBi"]}),U.jsxs("span",{children:[U.jsx("span",{style:{display:"inline-block",width:10,height:10,background:"#3a1d2a",marginRight:4}}),"不可放"]})]}),U.jsxs("div",{className:"hint",style:{marginTop:6},children:[s.n_ok," / ",s.n_total," 格可放，增益跨度 ",(W=s.span_db)==null?void 0:W.toFixed(2)," dB。 算了 ",s.total_seconds.toFixed(0)," 秒——",U.jsxs("b",{children:["同樣的東西用 HFSS 要 ",(s.hfss_equivalent_minutes/60).toFixed(1)," 小時"]}),"， 所以實務上沒有人會算，只能憑經驗抓一個保守的禁區。"]}),U.jsxs("div",{className:"hint",style:{marginTop:4},children:["深色格子是",U.jsx("b",{children:"不予預測"}),"的位置（蓋到天線導體，或超出模型訓練範圍）—— 不是「預測為差」，是模型不該在那裡發言。"]})]})}const $l=360,qs=150,Gi={l:34,r:8,t:10,b:22};function X1({data:s}){const e=s.points.filter(_=>_.peak_gain_dbi!==null);if(e.length<2)return U.jsx("div",{className:"hint",children:"掃描沒有有效點。"});const t=e.map(_=>_.peak_gain_dbi),r=Math.floor(Math.min(...t)-.5),o=Math.ceil(Math.max(...t)+.5),l=e.map(_=>_.value),u=Math.min(...l),h=Math.max(...l),d=_=>Gi.l+(_-u)/(h-u||1)*($l-Gi.l-Gi.r),p=_=>qs-Gi.b-(_-r)/(o-r||1)*(qs-Gi.t-Gi.b),g=e.map((_,x)=>`${x===0?"M":"L"}${d(_.value).toFixed(1)},${p(_.peak_gain_dbi).toFixed(1)}`).join(" ");return U.jsxs("svg",{width:"100%",viewBox:`0 0 ${$l} ${qs}`,style:{display:"block"},children:[[r,(r+o)/2,o].map((_,x)=>U.jsxs("g",{children:[U.jsx("line",{x1:Gi.l,x2:$l-Gi.r,y1:p(_),y2:p(_),stroke:"rgba(255,255,255,0.08)"}),U.jsx("text",{x:Gi.l-5,y:p(_)+3.5,fill:"var(--text-muted)",fontSize:"9",textAnchor:"end",children:_.toFixed(0)})]},x)),s.points.map((_,x)=>_.peak_gain_dbi!==null&&!_.valid?U.jsx("circle",{cx:d(_.value),cy:p(_.peak_gain_dbi),r:"3",fill:"var(--bad)"},x):null),U.jsx("path",{d:g,fill:"none",stroke:"var(--accent)",strokeWidth:"2"}),s.best&&U.jsx("circle",{cx:d(s.best.value),cy:p(s.best.peak_gain_dbi),r:"3.5",fill:"var(--good)"}),U.jsx("text",{x:d(u),y:qs-6,fill:"var(--text-muted)",fontSize:"9",children:u.toFixed(0)}),U.jsx("text",{x:d(h),y:qs-6,fill:"var(--text-muted)",fontSize:"9",textAnchor:"end",children:h.toFixed(0)}),U.jsxs("text",{x:$l/2,y:qs-6,fill:"var(--text-muted)",fontSize:"9",textAnchor:"middle",children:[s.axis," 位置（mm）"]})]})}const Y1={ground_shape:"rect",freq_ghz:2.45,metals:[]},Ug=3.44;function q1({status:s}){if(!s)return U.jsx("span",{className:"hint",children:"連線中…"});const e=s.ready?"var(--good)":s.alive?"var(--warn)":"var(--bad)",t=s.ready?"模型已載入，推論就緒":s.alive?"worker 在但模型未就緒":"worker 未啟動";return U.jsxs("div",{children:[U.jsxs("div",{style:{fontSize:13},children:[U.jsx("span",{className:"status-dot",style:{background:e}}),t,s.ready&&s.load_seconds>0&&U.jsxs("span",{className:"badge",style:{marginLeft:8},children:["載入 ",s.load_seconds,"s"]}),s.ready&&s.residual&&U.jsx("span",{className:"badge",style:{marginLeft:6},title:"模型學的是與乾淨平台的差，外插時會退化成乾淨天線的場型",children:"殘差模式"})]}),!s.ready&&s.reason&&U.jsx("div",{className:"hint",style:{marginTop:6,whiteSpace:"pre-wrap"},children:s.reason})]})}function $1(){var L;const[s,e]=tt.useState(null),[t,r]=tt.useState(null),[o,l]=tt.useState(Y1),[u,h]=tt.useState(null),[d,p]=tt.useState(null),[g,_]=tt.useState(null),[x,S]=tt.useState([]),[E,w]=tt.useState(null),[y,v]=tt.useState(null),[D,b]=tt.useState(null),[A,W]=tt.useState(!1),[I,O]=tt.useState("interactive"),[Y,P]=tt.useState(!0),[R,z]=tt.useState(!0),[re,Q]=tt.useState(null),[de,pe]=tt.useState(!1),[ce,ue]=tt.useState(null),[B,oe]=tt.useState(!1),[se,F]=tt.useState(null),[te,we]=tt.useState(null),Z=tt.useRef(new Map),le=tt.useRef(null),ye=tt.useRef(null);tt.useEffect(()=>{x0().then(M=>{P1(M),e(M)}).catch(M=>r(M.message)),v0().then(M=>{p(M.simai),_(M.uncertainty_calibration??null)}).catch(()=>p(null)),y0().then(M=>{var he;S(M.scenarios);const q=M.scenarios.find(ge=>ge.in_training)??M.scenarios[0];q&&(l({ground_shape:q.config.ground_shape,freq_ghz:q.config.freq_ghz,metals:q.config.metals}),w(q.key),(he=ye.current)==null||he.call(ye,{ground_shape:q.config.ground_shape,freq_ghz:q.config.freq_ghz,metals:q.config.metals}))}).catch(()=>{})},[]),tt.useEffect(()=>{I!=="report"||se||T0().then(M=>{F(M),we(null)}).catch(M=>we(M.message))},[I,se]);const _e=tt.useMemo(()=>s?F1(o,u):null,[s,o,u]),Ae=tt.useMemo(()=>N1(o),[o]),Ne=tt.useMemo(()=>s?I1(o):1/0,[s,o]),Xe=tt.useCallback(M=>{le.current&&window.clearTimeout(le.current),le.current=window.setTimeout(()=>{W(!0),S0(M).then(q=>{v(q),b(null)}).catch(q=>{v(null),b(q.message)}).finally(()=>W(!1))},120)},[]);ye.current=Xe;const Rt=tt.useCallback((M,q)=>{l(M),w(q),Xe(M)},[Xe]),pt=tt.useCallback((M,q,he,ge)=>{l(fe=>{let ke=Z.current.get(M);if(!ke){const Pe=fe.metals.find(ut=>ut.name===M);if(!Pe)return fe;ke={x:Pe.x,y:Pe.y},Z.current.set(M,ke)}const Ce={...fe,metals:fe.metals.map(Pe=>Pe.name===M?{...Pe,x:ke.x+q,y:ke.y+he}:Pe)};return ge&&(Z.current.delete(M),w(null),Xe(Ce)),Ce})},[Xe]),Pt=tt.useCallback(()=>{l(M=>{const q=M.metals.length,he=D1(q),ge={name:`metal_${q+1}`,kind:"solid",x:he.x,y:he.y,z:0,w:he.w,d:he.d,h:he.h},fe={...M,metals:[...M.metals,ge]};return w(null),h(ge.name),Xe(fe),fe})},[Xe]),H=tt.useCallback(()=>{u&&(l(M=>{const q={...M,metals:M.metals.filter(he=>he.name!==u)};return w(null),Xe(q),q}),h(null))},[u,Xe]),Wt=E?x.find(M=>M.key===E)??null:null,st=(Wt==null?void 0:Wt.hfss_truth)??null,ct=(Wt==null?void 0:Wt.truth_pattern)??null,Ge=(y==null?void 0:y.result.peak)??null,mt=(y==null?void 0:y.result.uncertainty)??null,Ye=Ne<0;return U.jsxs("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[U.jsxs("div",{className:"top-bar",children:[U.jsxs("div",{className:"brand",children:["天線佈局 AI 預測",U.jsx("span",{className:"brand-sub",children:"HFSS × SimAI｜虎門科技"})]}),U.jsxs("div",{style:{display:"flex",gap:8},children:[U.jsx("button",{className:`ghost-btn${I==="interactive"?" active":""}`,onClick:()=>O("interactive"),children:"互動預測"}),U.jsx("button",{className:`ghost-btn${I==="report"?" active":""}`,onClick:()=>O("report"),children:"驗證報告"})]})]}),I==="report"?se?U.jsx(W1,{data:se}):U.jsx("div",{style:{padding:30},className:"hint",children:te?U.jsxs(U.Fragment,{children:[U.jsx("b",{style:{color:"var(--warn)"},children:"尚無報告："}),U.jsx("div",{style:{marginTop:8,whiteSpace:"pre-wrap"},children:te})]}):"載入報告中…"}):t?U.jsxs("div",{style:{padding:30},className:"hint",children:[U.jsx("b",{style:{color:"var(--bad)"},children:"無法載入平台定義："}),U.jsx("div",{style:{marginTop:8,whiteSpace:"pre-wrap"},children:t}),U.jsxs("div",{style:{marginTop:12},children:["幾何定義來自後端的 ",U.jsx("code",{children:"platform.json"}),"。 沒有它就無法保證預覽與實際計算一致，所以工具刻意不畫任何東西—— 用猜的值畫出來的預覽會騙人。"]})]}):s?U.jsxs("div",{className:"app-container",children:[U.jsxs("div",{className:"canvas-area",children:[U.jsx(V1,{scene:_e,fitKey:Ae,onPick:h,onDrag:pt,pattern:(y==null?void 0:y.result.farfield)??null,showPattern:Y,truthPattern:ct,showTruth:R}),U.jsxs("div",{className:"overlay-badge",children:[U.jsx("div",{style:{fontWeight:600,marginBottom:2},children:s==null?void 0:s.name}),U.jsxs("div",{style:{color:"var(--text-muted)"},children:["拖動金屬件即時預測　·　拓樸 ",Ae]}),y&&U.jsxs("div",{style:{marginTop:6,color:"var(--text-muted)"},children:["SimAI 場型：低 ",U.jsx("span",{style:{color:"#2650d9"},children:"■"}),U.jsx("span",{style:{color:"#1abfd9"},children:"■"}),U.jsx("span",{style:{color:"#f2d933"},children:"■"}),U.jsx("span",{style:{color:"#e64033"},children:"■"})," 高",ct&&R&&"　·　白色線框＝HFSS 真解"]})]}),U.jsxs("div",{style:{position:"absolute",top:14,right:14,display:"flex",gap:8,flexDirection:"column",alignItems:"flex-end"},children:[U.jsx("button",{className:`ghost-btn${Y?" active":""}`,onClick:()=>P(M=>!M),children:Y?"隱藏 SimAI 場型":"顯示 SimAI 場型"}),ct&&U.jsx("button",{className:`ghost-btn${R?" active":""}`,onClick:()=>z(M=>!M),children:R?"隱藏 HFSS 真解":"疊上 HFSS 真解"})]}),Ye&&U.jsxs("div",{style:{position:"absolute",bottom:16,left:16,right:16,background:"rgba(60, 16, 16, 0.94)",border:"1px solid var(--bad)",borderRadius:8,padding:"10px 14px",fontSize:13},children:[U.jsx("b",{style:{color:"var(--bad)"},children:"這個組態不合物理："}),"金屬件蓋到天線導體上了，等於把天線短路。 訓練資料裡沒有這種組態（產生資料時就被排除）， 所以旁邊那個預測值**不能當真**。把金屬件拖開再看。"]})]}),U.jsxs("div",{className:"right-panel",children:[U.jsxs("div",{className:"panel-section",children:[U.jsx("h3",{className:"panel-title",children:"SimAI 推論引擎"}),U.jsx(q1,{status:d}),U.jsx("button",{className:"ghost-btn",style:{marginTop:10},onClick:()=>{p(null),w0().then(p).catch(()=>p(null))},children:"重新載入模型"})]}),U.jsxs("div",{className:"panel-section",children:[U.jsx("h3",{className:"panel-title",children:"預測結果"}),D&&U.jsx("div",{className:"hint",style:{color:"var(--warn)",whiteSpace:"pre-wrap"},children:D}),y&&y.domain_warnings.length>0&&U.jsxs("div",{style:{border:"1px solid var(--bad)",background:"rgba(60,16,16,0.5)",borderRadius:8,padding:"9px 11px",marginBottom:10,fontSize:12.5,lineHeight:1.65},children:[U.jsx("b",{style:{color:"var(--bad)"},children:"超出訓練範圍，預測不可信："}),U.jsx("ul",{style:{margin:"6px 0 0",paddingLeft:18},children:y.domain_warnings.map((M,q)=>U.jsx("li",{children:M},q))})]}),!D&&U.jsxs("div",{className:"stat-grid",children:[U.jsxs("div",{className:"stat-card",children:[U.jsx("div",{className:"stat-label",children:"峰值增益（SimAI）"}),U.jsxs("div",{className:"stat-value",children:[Ge===null?"—":Ge.toFixed(2),U.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:" dBi"})]}),Ge!==null&&U.jsxs("div",{className:"stat-sub",children:["對照乾淨平台 ",Ge-Ug>=0?"+":"",(Ge-Ug).toFixed(2)," dB"]})]}),U.jsxs("div",{className:"stat-card",children:[U.jsx("div",{className:"stat-label",children:"HFSS 真解"}),U.jsxs("div",{className:"stat-value",children:[st?st.peak_gain_dbi.toFixed(2):"—",U.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:" dBi"})]}),U.jsx("div",{className:"stat-sub",children:st&&Ge!==null?`誤差 ${Math.abs(Ge-st.peak_gain_dbi).toFixed(2)} dB · 求解 ${st.solve_minutes} 分鐘`:st?`求解 ${st.solve_minutes} 分鐘`:"此組態無預存真解"})]}),U.jsxs("div",{className:"stat-card",children:[U.jsx("div",{className:"stat-label",children:"推論耗時"}),U.jsxs("div",{className:"stat-value",children:[y?y.result.predict_seconds.toFixed(3):"—",U.jsx("span",{style:{fontSize:12,color:"var(--text-muted)"},children:" s"})]}),U.jsx("div",{className:"stat-sub",children:y?`整趟 ${y.total_seconds.toFixed(2)} s · ${y.result.n_nodes} 節點`:""})]}),U.jsxs("div",{className:"stat-card",children:[U.jsx("div",{className:"stat-label",children:"信心指標"}),U.jsx("div",{className:"stat-value",style:{color:mt===null||!g?void 0:g.usable?mt<=g.p60?"var(--good)":mt<=g.p90?"var(--warn)":"var(--bad)":"var(--text-dim)"},children:mt===null?"—":mt.toFixed(2)}),U.jsx("div",{className:"stat-sub",children:mt===null?"":g?g.usable?mt<=g.p60?"比這個模型平常算的還穩":mt<=g.p90?"比平常難算一些":"這個模型算過最難的一類，建議跑 HFSS 確認":`這個模型沒有鑑別度（留出樣本只在 ${g.min.toFixed(3)}~${g.max.toFixed(3)} 之間變動，差 ${(100*g.relative_spread).toFixed(1)}%），請看其他三道守衛`:"尚未校準（跑過 validate_model.py 後才有）"})]})]}),U.jsxs("div",{className:"hint",style:{marginTop:10},children:["淨空區間距 ",Ne===1/0?"—":`${Ne.toFixed(1)} mm`,Ne<0&&"（金屬件已蓋到天線上）"]})]}),U.jsxs("div",{className:"panel-section",children:[U.jsx("h3",{className:"panel-title",children:"接地面外型（板子輪廓）"}),U.jsx("div",{className:"hint",style:{marginBottom:8},children:"接地面本身就是天線的一部分，改它的效應往往比擺一塊金屬還大。 天線的短路臂接在板子上緣，所以外型只在遠離天線的方向變化。"}),U.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:Object.keys((s==null?void 0:s.ground_shapes)??{}).map(M=>U.jsx("button",{className:`ghost-btn${o.ground_shape===M?" active":""}`,onClick:()=>Rt({...o,ground_shape:M},null),children:s==null?void 0:s.ground_shapes[M].label},M))})]}),U.jsxs("div",{className:"panel-section",children:[U.jsx("h3",{className:"panel-title",children:"劇本組態（有 HFSS 真解）"}),U.jsxs("div",{className:"hint",style:{marginBottom:8},children:["除了基準之外，這些都是訓練時",U.jsx("b",{style:{color:"var(--text-main)"},children:"整組留出"}),"的 樣本——模型沒看過，比較才誠實。"]}),U.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:6},children:[x.map(M=>U.jsx("button",{className:`ghost-btn${E===M.key?" active":""}`,title:M.in_training?"訓練集內（基準參考）":"留出樣本：模型沒看過",onClick:()=>Rt({ground_shape:M.config.ground_shape,freq_ghz:M.config.freq_ghz,metals:M.config.metals},M.key),children:M.in_training?M.key:`◆ ${M.key}`},M.key)),x.length===0&&U.jsx("span",{className:"hint",children:"後端未回應"})]})]}),U.jsxs("div",{className:"panel-section",style:{flex:1},children:[U.jsxs("h3",{className:"panel-title",children:["金屬件（",o.metals.length,"）"]}),o.metals.map(M=>U.jsxs("div",{className:`metal-row${u===M.name?" selected":""}`,onClick:()=>h(M.name),children:[U.jsx("span",{className:"swatch",style:{background:u===M.name?"#58a6ff":"#8892a4"}}),U.jsx("span",{style:{flex:1},children:M.name}),U.jsx("span",{className:"badge",children:M.kind}),U.jsxs("span",{className:"badge",children:[M.x.toFixed(0),", ",M.y.toFixed(0)]})]},M.name)),o.metals.length===0&&U.jsx("div",{className:"hint",children:"乾淨平台——沒有金屬件。這是殘差學習的基準組態。"}),U.jsxs("div",{style:{display:"flex",gap:8,marginTop:10},children:[U.jsx("button",{className:"premium-btn",onClick:Pt,disabled:A,children:"加入金屬件"}),U.jsx("button",{className:"ghost-btn",onClick:H,disabled:!u,children:"刪除選取"})]}),U.jsx("div",{className:"hint",style:{marginTop:12},children:"在 3D 視窗點選金屬件後可直接拖動；放開後自動重新預測。"}),u&&U.jsxs("div",{style:{marginTop:16,paddingTop:14,borderTop:"1px solid var(--border-panel)"},children:[U.jsx("h3",{className:"panel-title",children:"位置敏感度掃描"}),U.jsxs("div",{className:"hint",style:{marginBottom:8},children:["把「",u,"」沿某軸掃過去，看增益怎麼變。 同樣的掃描用 HFSS 要十幾分鐘。"]}),U.jsx("div",{style:{display:"flex",gap:8},children:["x","y"].map(M=>U.jsx("button",{className:"ghost-btn",disabled:de,onClick:()=>{const q=o.metals.find(fe=>fe.name===u);if(!q)return;const he=M==="x"?2:8,ge=M==="x"?Math.max(he+5,100-q.w-2):Math.max(he+5,63.5-q.d);pe(!0),Q(null),M0(o,u,M,he,ge,21).then(Q).catch(()=>Q(null)).finally(()=>pe(!1))},children:de?"掃描中…":`沿 ${M} 掃描`},M))}),re&&U.jsxs("div",{style:{marginTop:10},children:[U.jsx("div",{style:{background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-panel)",borderRadius:8,padding:6},children:U.jsx(X1,{data:re})}),U.jsxs("div",{className:"hint",style:{marginTop:8,lineHeight:1.7},children:["增益跨度 ",U.jsxs("b",{style:{color:"var(--text-main)"},children:[re.span_db," dB"]}),re.best&&U.jsxs(U.Fragment,{children:["，最佳位置 ",re.axis,"=",re.best.value," mm （",(L=re.best.peak_gain_dbi)==null?void 0:L.toFixed(2)," dBi）"]}),U.jsx("br",{}),re.points.length," 點只花 ",re.total_seconds," 秒， 同樣的掃描用 HFSS 約 ",re.hfss_equivalent_minutes," 分鐘。",re.points.some(M=>!M.valid)&&U.jsxs(U.Fragment,{children:[U.jsx("br",{}),U.jsx("span",{style:{color:"var(--bad)"},children:"紅點"}),"＝該位置蓋到天線或超出訓練範圍，不可採用。"]})]})]}),U.jsxs("div",{style:{marginTop:14,paddingTop:12,borderTop:"1px solid var(--border-panel)"},children:[U.jsx("h3",{className:"panel-title",children:"淨空區地圖"}),U.jsxs("div",{className:"hint",style:{marginBottom:8},children:["把「",u,"」掃過整片板子，畫出每個位置的增益。 這是機構可以直接拿去用的圖。"]}),U.jsx("button",{className:"ghost-btn",disabled:B,onClick:()=>{oe(!0),ue(null),E0(o,u,16,16,1).then(ue).catch(()=>ue(null)).finally(()=>oe(!1))},children:B?"計算中…（約 1~2 分鐘）":"產生淨空區地圖"}),ce&&U.jsx("div",{style:{marginTop:10,background:"rgba(255,255,255,0.03)",border:"1px solid var(--border-panel)",borderRadius:8,padding:8},children:U.jsx(j1,{data:ce})})]})]})]})]})]}):U.jsx("div",{style:{padding:30},className:"hint",children:"載入平台定義中…"})]})}_0.createRoot(document.getElementById("root")).render(U.jsx(u0.StrictMode,{children:U.jsx($1,{})}));
