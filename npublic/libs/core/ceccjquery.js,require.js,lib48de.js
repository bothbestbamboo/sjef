(function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)})("undefined"!=typeof window?window:this,function(e,t){"use strict";function n(e,t,n){n=n||we;var r,i,o=n.createElement("script");if(o.text=e,t)for(r in Te)i=t[r]||t.getAttribute&&t.getAttribute(r),i&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function r(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?de[he.call(e)]||"object":typeof e}function i(e){var t=!!e&&"length"in e&&e.length,n=r(e);return!xe(e)&&!be(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}function o(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}function a(e,t,n){return xe(t)?Ee.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?Ee.grep(e,function(e){return e===t!==n}):"string"!=typeof t?Ee.grep(e,function(e){return pe.call(t,e)>-1!==n}):Ee.filter(t,e,n)}function s(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function u(e){var t={};return Ee.each(e.match(Pe)||[],function(e,n){t[n]=!0}),t}function l(e){return e}function c(e){throw e}function f(e,t,n,r){var i;try{e&&xe(i=e.promise)?i.call(e).done(t).fail(n):e&&xe(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}function p(){we.removeEventListener("DOMContentLoaded",p),e.removeEventListener("load",p),Ee.ready()}function d(e,t){return t.toUpperCase()}function h(e){return e.replace(We,"ms-").replace(Fe,d)}function g(){this.expando=Ee.expando+g.uid++}function v(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:ze.test(e)?JSON.parse(e):e)}function y(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(Ue,"-$&").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n=v(n)}catch(e){}_e.set(e,t,n)}else n=void 0;return n}function m(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return Ee.css(e,t,"")},u=s(),l=n&&n[3]||(Ee.cssNumber[t]?"":"px"),c=e.nodeType&&(Ee.cssNumber[t]||"px"!==l&&+u)&&Ve.exec(Ee.css(e,t));if(c&&c[3]!==l){for(u/=2,l=l||c[3],c=+u||1;a--;)Ee.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,Ee.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}function x(e){var t,n=e.ownerDocument,r=e.nodeName,i=Ze[r];return i||(t=n.body.appendChild(n.createElement(r)),i=Ee.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),Ze[r]=i,i)}function b(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)r=e[o],r.style&&(n=r.style.display,t?("none"===n&&(i[o]=$e.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&Ke(r)&&(i[o]=x(r))):"none"!==n&&(i[o]="none",$e.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}function w(e,t){var n;return n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&o(e,t)?Ee.merge([e],n):n}function T(e,t){for(var n=0,r=e.length;n<r;n++)$e.set(e[n],"globalEval",!t||$e.get(t[n],"globalEval"))}function C(e,t,n,i,o){for(var a,s,u,l,c,f,p=t.createDocumentFragment(),d=[],h=0,g=e.length;h<g;h++)if(a=e[h],a||0===a)if("object"===r(a))Ee.merge(d,a.nodeType?[a]:a);else if(st.test(a)){for(s=s||p.appendChild(t.createElement("div")),u=(it.exec(a)||["",""])[1].toLowerCase(),l=at[u]||at._default,s.innerHTML=l[1]+Ee.htmlPrefilter(a)+l[2],f=l[0];f--;)s=s.lastChild;Ee.merge(d,s.childNodes),s=p.firstChild,s.textContent=""}else d.push(t.createTextNode(a));for(p.textContent="",h=0;a=d[h++];)if(i&&Ee.inArray(a,i)>-1)o&&o.push(a);else if(c=Qe(a),s=w(p.appendChild(a),"script"),c&&T(s),n)for(f=0;a=s[f++];)ot.test(a.type||"")&&n.push(a);return p}function E(){return!0}function S(){return!1}function k(e,t){return e===A()==("focus"===t)}function A(){try{return we.activeElement}catch(e){}}function N(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)N(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=S;else if(!i)return e;return 1===o&&(a=i,i=function(e){return Ee().off(e),a.apply(this,arguments)},i.guid=a.guid||(a.guid=Ee.guid++)),e.each(function(){Ee.event.add(this,t,i,r,n)})}function D(e,t,n){n?($e.set(e,t,!1),Ee.event.add(e,t,{namespace:!1,handler:function(e){var r,i,o=$e.get(this,t);if(1&e.isTrigger&&this[t]){if(o.length)(Ee.event.special[t]||{}).delegateType&&e.stopPropagation();else if(o=le.call(arguments),$e.set(this,t,o),r=n(this,t),this[t](),i=$e.get(this,t),o!==i||r?$e.set(this,t,!1):i={},o!==i)return e.stopImmediatePropagation(),e.preventDefault(),i.value}else o.length&&($e.set(this,t,{value:Ee.event.trigger(Ee.extend(o[0],Ee.Event.prototype),o.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===$e.get(e,t)&&Ee.event.add(e,t,E)}function j(e,t){return o(e,"table")&&o(11!==t.nodeType?t:t.firstChild,"tr")&&Ee(e).children("tbody")[0]||e}function q(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function L(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function H(e,t){var n,r,i,o,a,s,u;if(1===t.nodeType){if($e.hasData(e)&&(o=$e.get(e),u=o.events,u))for(i in $e.remove(t,"handle events"),u)for(n=0,r=u[i].length;n<r;n++)Ee.event.add(t,i,u[i][n]);_e.hasData(e)&&(a=_e.access(e),s=Ee.extend({},a),_e.set(t,s))}}function O(e,t){var n=t.nodeName.toLowerCase();"input"===n&&rt.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function P(e,t,r,i){t=ce(t);var o,a,s,u,l,c,f=0,p=e.length,d=p-1,h=t[0],g=xe(h);if(g||p>1&&"string"==typeof h&&!me.checkClone&&pt.test(h))return e.each(function(n){var o=e.eq(n);g&&(t[0]=h.call(this,n,o.html())),P(o,t,r,i)});if(p&&(o=C(t,e[0].ownerDocument,!1,e,i),a=o.firstChild,1===o.childNodes.length&&(o=a),a||i)){for(s=Ee.map(w(o,"script"),q),u=s.length;f<p;f++)l=o,f!==d&&(l=Ee.clone(l,!0,!0),u&&Ee.merge(s,w(l,"script"))),r.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,Ee.map(s,L),f=0;f<u;f++)l=s[f],ot.test(l.type||"")&&!$e.access(l,"globalEval")&&Ee.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?Ee._evalUrl&&!l.noModule&&Ee._evalUrl(l.src,{nonce:l.nonce||l.getAttribute("nonce")},c):n(l.textContent.replace(dt,""),l,c))}return e}function R(e,t,n){for(var r,i=t?Ee.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||Ee.cleanData(w(r)),r.parentNode&&(n&&Qe(r)&&T(w(r,"script")),r.parentNode.removeChild(r));return e}function M(e,t,n){var r,i,o,a,s=e.style;return n=n||gt(e),n&&(a=n.getPropertyValue(t)||n[t],""!==a||Qe(e)||(a=Ee.style(e,t)),!me.pixelBoxStyles()&&ht.test(a)&&yt.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function I(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}function W(e){for(var t=e[0].toUpperCase()+e.slice(1),n=mt.length;n--;)if(e=mt[n]+t,e in xt)return e}function F(e){var t=Ee.cssProps[e]||bt[e];return t||(e in xt?e:bt[e]=W(e)||e)}function B(e,t,n){var r=Ve.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function $(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=Ee.css(e,n+Ge[a],!0,i)),r?("content"===n&&(u-=Ee.css(e,"padding"+Ge[a],!0,i)),"margin"!==n&&(u-=Ee.css(e,"border"+Ge[a]+"Width",!0,i))):(u+=Ee.css(e,"padding"+Ge[a],!0,i),"padding"!==n?u+=Ee.css(e,"border"+Ge[a]+"Width",!0,i):s+=Ee.css(e,"border"+Ge[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function _(e,t,n){var r=gt(e),i=!me.boxSizingReliable()||n,a=i&&"border-box"===Ee.css(e,"boxSizing",!1,r),s=a,u=M(e,t,r),l="offset"+t[0].toUpperCase()+t.slice(1);if(ht.test(u)){if(!n)return u;u="auto"}return(!me.boxSizingReliable()&&a||!me.reliableTrDimensions()&&o(e,"tr")||"auto"===u||!parseFloat(u)&&"inline"===Ee.css(e,"display",!1,r))&&e.getClientRects().length&&(a="border-box"===Ee.css(e,"boxSizing",!1,r),s=l in e,s&&(u=e[l])),u=parseFloat(u)||0,u+$(e,t,n||(a?"border":"content"),s,r,u)+"px"}function z(e,t,n,r,i){return new z.prototype.init(e,t,n,r,i)}function U(){kt&&(!1===we.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(U):e.setTimeout(U,Ee.fx.interval),Ee.fx.tick())}function X(){return e.setTimeout(function(){St=void 0}),St=Date.now()}function V(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)n=Ge[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function G(e,t,n){for(var r,i=(J.tweeners[t]||[]).concat(J.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function Y(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&Ke(e),v=$e.get(e,"fxshow");for(r in n.queue||(a=Ee._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,Ee.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],At.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||Ee.style(e,r)}if(u=!Ee.isEmptyObject(t),u||!Ee.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],l=v&&v.display,null==l&&(l=$e.get(e,"display")),c=Ee.css(e,"display"),"none"===c&&(l?c=l:(b([e],!0),l=e.style.display||l,c=Ee.css(e,"display"),b([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===Ee.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=$e.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&b([e],!0),p.done(function(){for(r in g||b([e]),$e.remove(e,"fxshow"),d)Ee.style(e,r,d[r])})),u=G(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}function Q(e,t){var n,r,i,o,a;for(n in e)if(r=h(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),a=Ee.cssHooks[r],a&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}function J(e,t,n){var r,i,o=0,a=J.prefilters.length,s=Ee.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=St||X(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,a=0,u=l.tweens.length;a<u;a++)l.tweens[a].run(o);return s.notifyWith(e,[l,o,n]),o<1&&u?n:(u||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:Ee.extend({},t),opts:Ee.extend(!0,{specialEasing:{},easing:Ee.easing._default},n),originalProperties:t,originalOptions:n,startTime:St||X(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Ee.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(Q(c,l.opts.specialEasing);o<a;o++)if(r=J.prefilters[o].call(l,e,c,l.opts),r)return xe(r.stop)&&(Ee._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return Ee.map(c,G,l),xe(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),Ee.fx.timer(Ee.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}function K(e){var t=e.match(Pe)||[];return t.join(" ")}function Z(e){return e.getAttribute&&e.getAttribute("class")||""}function ee(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Pe)||[]}function te(e,t,n,i){var o;if(Array.isArray(t))Ee.each(t,function(t,r){n||Wt.test(e)?i(e,r):te(e+"["+("object"==typeof r&&null!=r?t:"")+"]",r,n,i)});else if(n||"object"!==r(t))i(e,t);else for(o in t)te(e+"["+o+"]",t[o],n,i)}function ne(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Pe)||[];if(xe(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function re(e,t,n,r){function i(s){var u;return o[s]=!0,Ee.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||a||o[l]?a?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},a=e===Jt;return i(t.dataTypes[0])||!o["*"]&&i("*")}function ie(e,t){var n,r,i=Ee.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Ee.extend(!0,e,r),e}function oe(e,t,n){for(var r,i,o,a,s=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function ae(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift(),o)if("*"===o)o=u;else if("*"!==u&&u!==o){if(a=l[u+" "+o]||l["* "+o],!a)for(i in l)if(s=i.split(" "),s[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]],a)){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}var se=[],ue=Object.getPrototypeOf,le=se.slice,ce=se.flat?function(e){return se.flat.call(e)}:function(e){return se.concat.apply([],e)},fe=se.push,pe=se.indexOf,de={},he=de.toString,ge=de.hasOwnProperty,ve=ge.toString,ye=ve.call(Object),me={},xe=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},be=function(e){return null!=e&&e===e.window},we=e.document,Te={type:!0,src:!0,nonce:!0,noModule:!0},Ce="3.5.1",Ee=function(e,t){return new Ee.fn.init(e,t)};Ee.fn=Ee.prototype={jquery:Ce,__ceVersion:!0,constructor:Ee,length:0,toArray:function(){return le.call(this)},get:function(e){return null==e?le.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=Ee.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return Ee.each(this,e)},map:function(e){return this.pushStack(Ee.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(le.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(Ee.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(Ee.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:fe,sort:se.sort,splice:se.splice},Ee.extend=Ee.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||xe(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(Ee.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||Ee.isPlainObject(n)?n:{},i=!1,a[t]=Ee.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},Ee.extend({expando:"jQuery"+(Ce+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==he.call(e))&&(t=ue(e),!t||(n=ge.call(t,"constructor")&&t.constructor,"function"==typeof n&&ve.call(n)===ye))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,r){n(e,{nonce:t&&t.nonce},r)},each:function(e,t){var n,r=0;if(i(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(i(Object(e))?Ee.merge(n,"string"==typeof e?[e]:e):fe.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:pe.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)r=!t(e[o],o),r!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,o,a=0,s=[];if(i(e))for(r=e.length;a<r;a++)o=t(e[a],a,n),null!=o&&s.push(o);else for(a in e)o=t(e[a],a,n),null!=o&&s.push(o);return ce(s)},guid:1,support:me}),"function"==typeof Symbol&&(Ee.fn[Symbol.iterator]=se[Symbol.iterator]),Ee.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){de["[object "+t+"]"]=t.toLowerCase()});var Se=function(e){function t(e,t,n,r){var i,o,a,s,u,l,c,p=t&&t.ownerDocument,h=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==h&&9!==h&&11!==h)return n;if(!r&&(L(t),t=t||H,P)){if(11!==h&&(u=xe.exec(e)))if(i=u[1]){if(9===h){if(!(a=t.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(p&&(a=p.getElementById(i))&&W(t,a)&&a.id===i)return n.push(a),n}else{if(u[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((i=u[3])&&T.getElementsByClassName&&t.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(i)),n}if(T.qsa&&!V[e+" "]&&(!R||!R.test(e))&&(1!==h||"object"!==t.nodeName.toLowerCase())){if(c=e,p=t,1===h&&(fe.test(e)||ce.test(e))){for(p=be.test(e)&&f(t.parentNode)||t,p===t&&T.scope||((s=t.getAttribute("id"))?s=s.replace(Ce,Ee):t.setAttribute("id",s=F)),l=k(e),o=l.length;o--;)l[o]=(s?"#"+s:":scope")+" "+d(l[o]);c=l.join(",")}try{return Z.apply(n,p.querySelectorAll(c)),n}catch(t){V(e,!0)}finally{s===F&&t.removeAttribute("id")}}}return N(e.replace(ue,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>C.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[F]=!0,e}function i(e){var t=H.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=n.length;r--;)C.attrHandle[n[r]]=t}function a(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function s(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ke(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function c(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),a=o.length;a--;)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function f(e){return e&&void 0!==e.getElementsByTagName&&e}function p(){}function d(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function h(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=_++;return t.first?function(t,n,i){for(;t=t[r];)if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[$,s];if(u){for(;t=t[r];)if((1===t.nodeType||a)&&e(t,n,u))return!0}else for(;t=t[r];)if(1===t.nodeType||a)if(f=t[F]||(t[F]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===$&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function g(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function v(e,n,r){for(var i=0,o=n.length;i<o;i++)t(e,n[i],r);return r}function y(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function m(e,t,n,i,o,a){return i&&!i[F]&&(i=m(i)),o&&!o[F]&&(o=m(o,a)),r(function(r,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=r||v(t||"*",s.nodeType?[s]:s,[]),m=!e||!r&&t?g:y(g,p,e,s,u),x=n?o||(r?e:h||i)?[]:a:m;if(n&&n(m,x,s,u),i)for(l=y(x,d),i(l,[],s,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(m[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(m[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?te(r,f):p[c])>-1&&(r[l]=!(a[l]=f))}}else x=y(x===a?x.splice(h,x.length):x),o?o(null,a,x,u):Z.apply(a,x)})}function x(e){for(var t,n,r,i=e.length,o=C.relative[e[0].type],a=o||C.relative[" "],s=o?1:0,u=h(function(e){return e===t},a,!0),l=h(function(e){return te(t,e)>-1},a,!0),c=[function(e,n,r){var i=!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];s<i;s++)if(n=C.relative[e[s].type])c=[h(g(c),n)];else{if(n=C.filter[e[s].type].apply(null,e[s].matches),n[F]){for(r=++s;r<i&&!C.relative[e[r].type];r++);return m(s>1&&g(c),s>1&&d(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace(ue,"$1"),n,s<r&&x(e.slice(s,r)),r<i&&x(e=e.slice(r)),r<i&&d(e))}c.push(n)}return g(c)}function b(e,n){var i=n.length>0,o=e.length>0,a=function(r,a,s,u,l){var c,f,p,d=0,h="0",g=r&&[],v=[],m=D,x=r||o&&C.find.TAG("*",l),b=$+=null==m?1:Math.random()||.1,w=x.length;for(l&&(D=a==H||a||l);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0,a||c.ownerDocument==H||(L(c),s=!P);p=e[f++];)if(p(c,a||H,s)){u.push(c);break}l&&($=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,a,s);if(r){if(d>0)for(;h--;)g[h]||v[h]||(v[h]=J.call(u));v=y(v)}Z.apply(u,v),l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&($=b,D=m),g};return i?r(a):a}var w,T,C,E,S,k,A,N,D,j,q,L,H,O,P,R,M,I,W,F="sizzle"+1*new Date,B=e.document,$=0,_=0,z=n(),U=n(),X=n(),V=n(),G=function(e,t){return e===t&&(q=!0),0},Y={}.hasOwnProperty,Q=[],J=Q.pop,K=Q.push,Z=Q.push,ee=Q.slice,te=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},ne="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",re="[\\x20\\t\\r\\n\\f]",ie="(?:\\\\[\\da-fA-F]{1,6}"+re+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",oe="\\["+re+"*("+ie+")(?:"+re+"*([*^$|!~]?=)"+re+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+ie+"))|)"+re+"*\\]",ae=":("+ie+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+oe+")*)|.*)\\)|)",se=new RegExp(re+"+","g"),ue=new RegExp("^"+re+"+|((?:^|[^\\\\])(?:\\\\.)*)"+re+"+$","g"),le=new RegExp("^"+re+"*,"+re+"*"),ce=new RegExp("^"+re+"*([>+~]|"+re+")"+re+"*"),fe=new RegExp(re+"|>"),pe=new RegExp(ae),de=new RegExp("^"+ie+"$"),he={ID:new RegExp("^#("+ie+")"),CLASS:new RegExp("^\\.("+ie+")"),TAG:new RegExp("^("+ie+"|[*])"),ATTR:new RegExp("^"+oe),PSEUDO:new RegExp("^"+ae),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+re+"*(even|odd|(([+-]|)(\\d*)n|)"+re+"*(?:([+-]|)"+re+"*(\\d+)|))"+re+"*\\)|)","i"),bool:new RegExp("^(?:"+ne+")$","i"),needsContext:new RegExp("^"+re+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+re+"*((?:-\\d)?\\d*)"+re+"*\\)|)(?=[^-]|$)","i")},ge=/HTML$/i,ve=/^(?:input|select|textarea|button)$/i,ye=/^h\d$/i,me=/^[^{]+\{\s*\[native \w/,xe=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,be=/[+~]/,we=new RegExp("\\\\[\\da-fA-F]{1,6}"+re+"?|\\\\([^\\r\\n\\f])","g"),Te=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},Ce=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,Ee=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},Se=function(){L()},ke=h(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{Z.apply(Q=ee.call(B.childNodes),B.childNodes),Q[B.childNodes.length].nodeType}catch(e){Z={apply:Q.length?function(e,t){K.apply(e,ee.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}for(w in T=t.support={},S=t.isXML=function(e){var t=e.namespaceURI,n=(e.ownerDocument||e).documentElement;return!ge.test(t||n&&n.nodeName||"HTML")},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:B;return r!=H&&9===r.nodeType&&r.documentElement?(H=r,O=H.documentElement,P=!S(H),B!=H&&(n=H.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",Se,!1):n.attachEvent&&n.attachEvent("onunload",Se)),T.scope=i(function(e){return O.appendChild(e).appendChild(H.createElement("div")),void 0!==e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),T.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),T.getElementsByTagName=i(function(e){return e.appendChild(H.createComment("")),!e.getElementsByTagName("*").length}),T.getElementsByClassName=me.test(H.getElementsByClassName),T.getById=i(function(e){return O.appendChild(e).id=F,!H.getElementsByName||!H.getElementsByName(F).length}),T.getById?(C.filter.ID=function(e){var t=e.replace(we,Te);return function(e){return e.getAttribute("id")===t}},C.find.ID=function(e,t){if(void 0!==t.getElementById&&P){var n=t.getElementById(e);return n?[n]:[]}}):(C.filter.ID=function(e){var t=e.replace(we,Te);return function(e){var n=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},C.find.ID=function(e,t){if(void 0!==t.getElementById&&P){var n,r,i,o=t.getElementById(e);if(o){if(n=o.getAttributeNode("id"),n&&n.value===e)return[o];for(i=t.getElementsByName(e),r=0;o=i[r++];)if(n=o.getAttributeNode("id"),n&&n.value===e)return[o]}return[]}}),C.find.TAG=T.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):T.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},C.find.CLASS=T.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&P)return t.getElementsByClassName(e)},M=[],R=[],(T.qsa=me.test(H.querySelectorAll))&&(i(function(e){var t;O.appendChild(e).innerHTML="<a id='"+F+"'></a><select id='"+F+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&R.push("[*^$]="+re+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||R.push("\\["+re+"*(?:value|"+ne+")"),e.querySelectorAll("[id~="+F+"-]").length||R.push("~="),t=H.createElement("input"),t.setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||R.push("\\["+re+"*name"+re+"*="+re+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||R.push(":checked"),e.querySelectorAll("a#"+F+"+*").length||R.push(".#.+[+~]"),e.querySelectorAll("\\\f"),R.push("[\\r\\n\\f]")}),i(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=H.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&R.push("name"+re+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&R.push(":enabled",":disabled"),O.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&R.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),R.push(",.*:")})),(T.matchesSelector=me.test(I=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&i(function(e){T.disconnectedMatch=I.call(e,"*"),I.call(e,"[s!='']:x"),M.push("!=",ae)}),R=R.length&&new RegExp(R.join("|")),M=M.length&&new RegExp(M.join("|")),t=me.test(O.compareDocumentPosition),W=t||me.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},G=t?function(e,t){if(e===t)return q=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!T.sortDetached&&t.compareDocumentPosition(e)===n?e==H||e.ownerDocument==B&&W(B,e)?-1:t==H||t.ownerDocument==B&&W(B,t)?1:j?te(j,e)-te(j,t):0:4&n?-1:1)}:function(e,t){if(e===t)return q=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,s=[e],u=[t];if(!i||!o)return e==H?-1:t==H?1:i?-1:o?1:j?te(j,e)-te(j,t):0;if(i===o)return a(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)u.unshift(n);for(;s[r]===u[r];)r++;return r?a(s[r],u[r]):s[r]==B?-1:u[r]==B?1:0},H):H},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if(L(e),T.matchesSelector&&P&&!V[n+" "]&&(!M||!M.test(n))&&(!R||!R.test(n)))try{var r=I.call(e,n);if(r||T.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){V(n,!0)}return t(n,H,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!=H&&L(e),W(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!=H&&L(e);var n=C.attrHandle[t.toLowerCase()],r=n&&Y.call(C.attrHandle,t.toLowerCase())?n(e,t,!P):void 0;return void 0!==r?r:T.attributes||!P?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.escape=function(e){return(e+"").replace(Ce,Ee)},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(q=!T.detectDuplicates,j=!T.sortStable&&e.slice(0),e.sort(G),q){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return j=null,e},E=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=E(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=E(t);return n},C=t.selectors={cacheLength:50,createPseudo:r,match:he,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(we,Te),e[3]=(e[3]||e[4]||e[5]||"").replace(we,Te),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return he.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pe.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(we,Te).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=z[e+" "];return t||(t=new RegExp("(^|"+re+")"+e+"("+re+"|$)"))&&z(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:!n||(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(se," ")+" ").indexOf(r)>-1:"|="===n&&(o===r||o.slice(0,r.length+1)===r+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",v=t.parentNode,y=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(v){if(o){for(;g;){for(p=t;p=p[g];)if(s?p.nodeName.toLowerCase()===y:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?v.firstChild:v.lastChild],a&&m){for(p=v,f=p[F]||(p[F]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===$&&l[1],x=d&&l[2],p=d&&v.childNodes[d];p=++d&&p&&p[g]||(x=d=0)||h.pop();)if(1===p.nodeType&&++x&&p===t){c[e]=[$,d,x];break}}else if(m&&(p=t,f=p[F]||(p[F]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),l=c[e]||[],d=l[0]===$&&l[1],x=d),
!1===x)for(;(p=++d&&p&&p[g]||(x=d=0)||h.pop())&&((s?p.nodeName.toLowerCase()!==y:1!==p.nodeType)||!++x||(m&&(f=p[F]||(p[F]={}),c=f[p.uniqueID]||(f[p.uniqueID]={}),c[e]=[$,x]),p!==t)););return x-=i,x===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,n){var i,o=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[F]?o(n):o.length>1?(i=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),a=i.length;a--;)r=te(e,i[a]),e[r]=!(t[r]=i[a])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=A(e.replace(ue,"$1"));return i[F]?r(function(e,t,n,r){for(var o,a=i(e,null,r,[]),s=e.length;s--;)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(we,Te),function(t){return(t.textContent||E(t)).indexOf(e)>-1}}),lang:r(function(e){return de.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(we,Te).toLowerCase(),function(t){var n;do{if(n=P?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===H.activeElement&&(!H.hasFocus||H.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:l(!1),disabled:l(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return ye.test(e.nodeName)},input:function(e){return ve.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[n<0?n+t:n]}),even:c(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:c(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},C.pseudos.nth=C.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=s(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=u(w);return p.prototype=C.filters=C.pseudos,C.setFilters=new p,k=t.tokenize=function(e,n){var r,i,o,a,s,u,l,c=U[e+" "];if(c)return n?0:c.slice(0);for(s=e,u=[],l=C.preFilter;s;){for(a in r&&!(i=le.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),r=!1,(i=ce.exec(s))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ue," ")}),s=s.slice(r.length)),C.filter)!(i=he[a].exec(s))||l[a]&&!(i=l[a](i))||(r=i.shift(),o.push({value:r,type:a,matches:i}),s=s.slice(r.length));if(!r)break}return n?s.length:s?t.error(e):U(e,u).slice(0)},A=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=x(t[n]),o[F]?r.push(o):i.push(o);o=X(e,b(i,r)),o.selector=e}return o},N=t.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&k(e=l.selector||e);if(n=n||[],1===c.length){if(o=c[0]=c[0].slice(0),o.length>2&&"ID"===(a=o[0]).type&&9===t.nodeType&&P&&C.relative[o[1].type]){if(t=(C.find.ID(a.matches[0].replace(we,Te),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=he.needsContext.test(e)?0:o.length;i--&&(a=o[i],!C.relative[s=a.type]);)if((u=C.find[s])&&(r=u(a.matches[0].replace(we,Te),be.test(o[0].type)&&f(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&d(o),!e)return Z.apply(n,r),n;break}}return(l||A(e,c))(r,t,!P,n,!t||be.test(e)&&f(t.parentNode)||t),n},T.sortStable=F.split("").sort(G).join("")===F,T.detectDuplicates=!!q,L(),T.sortDetached=i(function(e){return 1&e.compareDocumentPosition(H.createElement("fieldset"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),T.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(ne,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);Ee.find=Se,Ee.expr=Se.selectors,Ee.expr[":"]=Ee.expr.pseudos,Ee.uniqueSort=Ee.unique=Se.uniqueSort,Ee.text=Se.getText,Ee.isXMLDoc=Se.isXML,Ee.contains=Se.contains,Ee.escapeSelector=Se.escape;var ke=function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Ee(e).is(n))break;r.push(e)}return r},Ae=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},Ne=Ee.expr.match.needsContext,De=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;Ee.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Ee.find.matchesSelector(r,e)?[r]:[]:Ee.find.matches(e,Ee.grep(t,function(e){return 1===e.nodeType}))},Ee.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(Ee(e).filter(function(){for(t=0;t<r;t++)if(Ee.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)Ee.find(e,i[t],n);return r>1?Ee.uniqueSort(n):n},filter:function(e){return this.pushStack(a(this,e||[],!1))},not:function(e){return this.pushStack(a(this,e||[],!0))},is:function(e){return!!a(this,"string"==typeof e&&Ne.test(e)?Ee(e):e||[],!1).length}});var je,qe=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Le=Ee.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||je,"string"==typeof e){if(r="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:qe.exec(e),!r||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof Ee?t[0]:t,Ee.merge(this,Ee.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:we,!0)),De.test(r[1])&&Ee.isPlainObject(t))for(r in t)xe(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return i=we.getElementById(r[2]),i&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):xe(e)?void 0!==n.ready?n.ready(e):e(Ee):Ee.makeArray(e,this)};Le.prototype=Ee.fn,je=Ee(we);var He=/^(?:parents|prev(?:Until|All))/,Oe={children:!0,contents:!0,next:!0,prev:!0};Ee.fn.extend({has:function(e){var t=Ee(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(Ee.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&Ee(e);if(!Ne.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&Ee.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Ee.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?pe.call(Ee(e),this[0]):pe.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Ee.uniqueSort(Ee.merge(this.get(),Ee(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Ee.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return ke(e,"parentNode")},parentsUntil:function(e,t,n){return ke(e,"parentNode",n)},next:function(e){return s(e,"nextSibling")},prev:function(e){return s(e,"previousSibling")},nextAll:function(e){return ke(e,"nextSibling")},prevAll:function(e){return ke(e,"previousSibling")},nextUntil:function(e,t,n){return ke(e,"nextSibling",n)},prevUntil:function(e,t,n){return ke(e,"previousSibling",n)},siblings:function(e){return Ae((e.parentNode||{}).firstChild,e)},children:function(e){return Ae(e.firstChild)},contents:function(e){return null!=e.contentDocument&&ue(e.contentDocument)?e.contentDocument:(o(e,"template")&&(e=e.content||e),Ee.merge([],e.childNodes))}},function(e,t){Ee.fn[e]=function(n,r){var i=Ee.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Ee.filter(r,i)),this.length>1&&(Oe[e]||Ee.uniqueSort(i),He.test(e)&&i.reverse()),this.pushStack(i)}});var Pe=/[^\x20\t\r\n\f]+/g;Ee.Callbacks=function(e){e="string"==typeof e?u(e):Ee.extend({},e);var t,n,i,o,a=[],s=[],l=-1,c=function(){for(o=o||e.once,i=t=!0;s.length;l=-1)for(n=s.shift();++l<a.length;)!1===a[l].apply(n[0],n[1])&&e.stopOnFalse&&(l=a.length,n=!1);e.memory||(n=!1),t=!1,o&&(a=n?[]:"")},f={add:function(){return a&&(n&&!t&&(l=a.length-1,s.push(n)),function t(n){Ee.each(n,function(n,i){xe(i)?e.unique&&f.has(i)||a.push(i):i&&i.length&&"string"!==r(i)&&t(i)})}(arguments),n&&!t&&c()),this},remove:function(){return Ee.each(arguments,function(e,t){for(var n;(n=Ee.inArray(t,a,n))>-1;)a.splice(n,1),n<=l&&l--}),this},has:function(e){return e?Ee.inArray(e,a)>-1:a.length>0},empty:function(){return a&&(a=[]),this},disable:function(){return o=s=[],a=n="",this},disabled:function(){return!a},lock:function(){return o=s=[],n||t||(a=n=""),this},locked:function(){return!!o},fireWith:function(e,n){return o||(n=n||[],n=[e,n.slice?n.slice():n],s.push(n),t||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!i}};return f},Ee.extend({Deferred:function(t){var n=[["notify","progress",Ee.Callbacks("memory"),Ee.Callbacks("memory"),2],["resolve","done",Ee.Callbacks("once memory"),Ee.Callbacks("once memory"),0,"resolved"],["reject","fail",Ee.Callbacks("once memory"),Ee.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return Ee.Deferred(function(t){Ee.each(n,function(n,r){var i=xe(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&xe(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){function o(t,n,r,i){return function(){var s=this,u=arguments,f=function(){var e,f;if(!(t<a)){if(e=r.apply(s,u),e===n.promise())throw new TypeError("Thenable self-resolution");f=e&&("object"==typeof e||"function"==typeof e)&&e.then,xe(f)?i?f.call(e,o(a,n,l,i),o(a,n,c,i)):(a++,f.call(e,o(a,n,l,i),o(a,n,c,i),o(a,n,l,n.notifyWith))):(r!==l&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},p=i?f:function(){try{f()}catch(e){Ee.Deferred.exceptionHook&&Ee.Deferred.exceptionHook(e,p.stackTrace),t+1>=a&&(r!==c&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?p():(Ee.Deferred.getStackHook&&(p.stackTrace=Ee.Deferred.getStackHook()),e.setTimeout(p))}}var a=0;return Ee.Deferred(function(e){n[0][3].add(o(0,e,xe(i)?i:l,e.notifyWith)),n[1][3].add(o(0,e,xe(t)?t:l)),n[2][3].add(o(0,e,xe(r)?r:c))}).promise()},promise:function(e){return null!=e?Ee.extend(e,i):i}},o={};return Ee.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=le.call(arguments),o=Ee.Deferred(),a=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?le.call(arguments):n,--t||o.resolveWith(r,i)}};if(t<=1&&(f(e,o.done(a(n)).resolve,o.reject,!t),"pending"===o.state()||xe(i[n]&&i[n].then)))return o.then();for(;n--;)f(i[n],a(n),o.reject);return o.promise()}});var Re=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;Ee.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&Re.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},Ee.readyException=function(t){e.setTimeout(function(){throw t})};var Me=Ee.Deferred();Ee.fn.ready=function(e){return Me.then(e).catch(function(e){Ee.readyException(e)}),this},Ee.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--Ee.readyWait:Ee.isReady)||(Ee.isReady=!0,!0!==e&&--Ee.readyWait>0||Me.resolveWith(we,[Ee]))}}),Ee.ready.then=Me.then,"complete"===we.readyState||"loading"!==we.readyState&&!we.documentElement.doScroll?e.setTimeout(Ee.ready):(we.addEventListener("DOMContentLoaded",p),e.addEventListener("load",p));var Ie=function(e,t,n,i,o,a,s){var u=0,l=e.length,c=null==n;if("object"===r(n))for(u in o=!0,n)Ie(e,t,u,n[u],!0,a,s);else if(void 0!==i&&(o=!0,xe(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(Ee(e),n)})),t))for(;u<l;u++)t(e[u],n,s?i:i.call(e[u],u,t(e[u],n)));return o?e:c?t.call(e):l?t(e[0],n):a},We=/^-ms-/,Fe=/-([a-z])/g,Be=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};g.uid=1,g.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Be(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[h(t)]=n;else for(r in t)i[h(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][h(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){Array.isArray(t)?t=t.map(h):(t=h(t),t=t in r?[t]:t.match(Pe)||[]),n=t.length;for(;n--;)delete r[t[n]]}(void 0===t||Ee.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!Ee.isEmptyObject(t)}};var $e=new g,_e=new g,ze=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ue=/[A-Z]/g;Ee.extend({hasData:function(e){return _e.hasData(e)||$e.hasData(e)},data:function(e,t,n){return _e.access(e,t,n)},removeData:function(e,t){_e.remove(e,t)},_data:function(e,t,n){return $e.access(e,t,n)},_removeData:function(e,t){$e.remove(e,t)}}),Ee.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=_e.get(o),1===o.nodeType&&!$e.get(o,"hasDataAttrs"))){for(n=a.length;n--;)a[n]&&(r=a[n].name,0===r.indexOf("data-")&&(r=h(r.slice(5)),y(o,r,i[r])));$e.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){_e.set(this,e)}):Ie(this,function(t){var n;if(o&&void 0===t)return n=_e.get(o,e),void 0!==n?n:(n=y(o,e),void 0!==n?n:void 0);this.each(function(){_e.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){_e.remove(this,e)})}}),Ee.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=$e.get(e,t),n&&(!r||Array.isArray(n)?r=$e.access(e,t,Ee.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=Ee.queue(e,t),r=n.length,i=n.shift(),o=Ee._queueHooks(e,t),a=function(){Ee.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return $e.get(e,n)||$e.access(e,n,{empty:Ee.Callbacks("once memory").add(function(){$e.remove(e,[t+"queue",n])})})}}),Ee.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Ee.queue(this[0],e):void 0===t?this:this.each(function(){var n=Ee.queue(this,e,t);Ee._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Ee.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Ee.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Ee.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)n=$e.get(o[a],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var Xe=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ve=new RegExp("^(?:([+-])=|)("+Xe+")([a-z%]*)$","i"),Ge=["Top","Right","Bottom","Left"],Ye=we.documentElement,Qe=function(e){return Ee.contains(e.ownerDocument,e)},Je={composed:!0};Ye.getRootNode&&(Qe=function(e){return Ee.contains(e.ownerDocument,e)||e.getRootNode(Je)===e.ownerDocument});var Ke=function(e,t){return e=t||e,"none"===e.style.display||""===e.style.display&&Qe(e)&&"none"===Ee.css(e,"display")},Ze={};Ee.fn.extend({show:function(){return b(this,!0)},hide:function(){return b(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ke(this)?Ee(this).show():Ee(this).hide()})}});var et,tt,nt,rt=/^(?:checkbox|radio)$/i,it=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,ot=/^$|^module$|\/(?:java|ecma)script/i;et=we.createDocumentFragment(),tt=et.appendChild(we.createElement("div")),nt=we.createElement("input"),nt.setAttribute("type","radio"),nt.setAttribute("checked","checked"),nt.setAttribute("name","t"),tt.appendChild(nt),me.checkClone=tt.cloneNode(!0).cloneNode(!0).lastChild.checked,tt.innerHTML="<textarea>x</textarea>",me.noCloneChecked=!!tt.cloneNode(!0).lastChild.defaultValue,tt.innerHTML="<option></option>",me.option=!!tt.lastChild;var at={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};at.tbody=at.tfoot=at.colgroup=at.caption=at.thead,at.th=at.td,me.option||(at.optgroup=at.option=[1,"<select multiple='multiple'>","</select>"]);var st=/<|&#?\w+;/,ut=/^key/,lt=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ct=/^([^.]*)(?:\.(.+)|)/;Ee.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=$e.get(e);if(Be(e))for(n.handler&&(o=n,n=o.handler,i=o.selector),i&&Ee.find.matchesSelector(Ye,i),n.guid||(n.guid=Ee.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(t){return void 0!==Ee&&Ee.event.triggered!==t.type?Ee.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(Pe)||[""],l=t.length;l--;)s=ct.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d&&(f=Ee.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=Ee.event.special[d]||{},c=Ee.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Ee.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),Ee.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=$e.hasData(e)&&$e.get(e);if(v&&(u=v.events)){for(t=(t||"").match(Pe)||[""],l=t.length;l--;)if(s=ct.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){for(f=Ee.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||Ee.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)Ee.event.remove(e,d+t[l],n,r,!0);Ee.isEmptyObject(u)&&$e.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=Ee.event.fix(e),l=($e.get(this,"events")||Object.create(null))[u.type]||[],c=Ee.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){for(a=Ee.event.handlers.call(this,u,l),t=0;(i=a[t++])&&!u.isPropagationStopped();)for(u.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!u.isImmediatePropagationStopped();)u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,r=((Ee.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s),void 0!==r&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()));return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)r=t[n],i=r.selector+" ",void 0===a[i]&&(a[i]=r.needsContext?Ee(i,this).index(l)>-1:Ee.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(Ee.Event.prototype,e,{enumerable:!0,configurable:!0,get:xe(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[Ee.expando]?e:new Ee.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return rt.test(t.type)&&t.click&&o(t,"input")&&D(t,"click",E),!1},trigger:function(e){var t=this||e;return rt.test(t.type)&&t.click&&o(t,"input")&&D(t,"click"),!0},_default:function(e){var t=e.target;return rt.test(t.type)&&t.click&&o(t,"input")&&$e.get(t,"click")||o(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},Ee.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},Ee.Event=function(e,t){if(!(this instanceof Ee.Event))return new Ee.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?E:S,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&Ee.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[Ee.expando]=!0},Ee.Event.prototype={constructor:Ee.Event,isDefaultPrevented:S,isPropagationStopped:S,isImmediatePropagationStopped:S,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=E,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=E,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=E,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},Ee.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&ut.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&lt.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},Ee.event.addProp),Ee.each({focus:"focusin",blur:"focusout"},function(e,t){Ee.event.special[e]={setup:function(){return D(this,e,k),!1},trigger:function(){return D(this,e),!0},delegateType:t}}),Ee.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Ee.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||Ee.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Ee.fn.extend({on:function(e,t,n,r){return N(this,e,t,n,r)},one:function(e,t,n,r){return N(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Ee(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=S),this.each(function(){Ee.event.remove(this,e,n,t)})}});var ft=/<script|<style|<link/i,pt=/checked\s*(?:[^=]|=\s*.checked.)/i,dt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;Ee.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=Qe(e);if(!(me.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Ee.isXMLDoc(e)))for(a=w(s),o=w(e),r=0,i=o.length;r<i;r++)O(o[r],a[r]);if(t)if(n)for(o=o||w(e),a=a||w(s),r=0,i=o.length;r<i;r++)H(o[r],a[r]);else H(e,s);return a=w(s,"script"),a.length>0&&T(a,!u&&w(e,"script")),s},cleanData:function(e){for(var t,n,r,i=Ee.event.special,o=0;void 0!==(n=e[o]);o++)if(Be(n)){if(t=n[$e.expando]){if(t.events)for(r in t.events)i[r]?Ee.event.remove(n,r):Ee.removeEvent(n,r,t.handle);n[$e.expando]=void 0}n[_e.expando]&&(n[_e.expando]=void 0)}}}),Ee.fn.extend({detach:function(e){return R(this,e,!0)},remove:function(e){return R(this,e)},text:function(e){return Ie(this,function(e){return void 0===e?Ee.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return P(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=j(this,e);t.appendChild(e)}})},prepend:function(){return P(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=j(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return P(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return P(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Ee.cleanData(w(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return Ee.clone(this,e,t)})},html:function(e){return Ie(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ft.test(e)&&!at[(it.exec(e)||["",""])[1].toLowerCase()]){e=Ee.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(Ee.cleanData(w(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return P(this,arguments,function(t){var n=this.parentNode;Ee.inArray(this,e)<0&&(Ee.cleanData(w(this)),n&&n.replaceChild(t,this))},e)}}),Ee.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Ee.fn[e]=function(e){for(var n,r=[],i=Ee(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),Ee(i[a])[t](n),fe.apply(r,n.get());return this.pushStack(r)}});var ht=new RegExp("^("+Xe+")(?!px)[a-z%]+$","i"),gt=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},vt=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},yt=new RegExp(Ge.join("|"),"i");(function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Ye.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);r="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",a=36===n(t.right),i=36===n(t.width),c.style.position="absolute",o=12===n(c.offsetWidth/3),Ye.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var r,i,o,a,s,u,l=we.createElement("div"),c=we.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",me.clearCloneStyle="content-box"===c.style.backgroundClip,Ee.extend(me,{boxSizingReliable:function(){return t(),i},pixelBoxStyles:function(){return t(),a},pixelPosition:function(){return t(),r},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),o},reliableTrDimensions:function(){var t,n,r,i;return null==s&&(t=we.createElement("table"),n=we.createElement("tr"),r=we.createElement("div"),t.style.cssText="position:absolute;left:-11111px",n.style.height="1px",r.style.height="9px",Ye.appendChild(t).appendChild(n).appendChild(r),i=e.getComputedStyle(n),s=parseInt(i.height)>3,Ye.removeChild(t)),s}}))})();var mt=["Webkit","Moz","ms"],xt=we.createElement("div").style,bt={},wt=/^(none|table(?!-c[ea]).+)/,Tt=/^--/,Ct={position:"absolute",visibility:"hidden",display:"block"},Et={letterSpacing:"0",fontWeight:"400"};Ee.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=M(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=h(t),u=Tt.test(t),l=e.style;if(u||(t=F(s)),a=Ee.cssHooks[t]||Ee.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];o=typeof n,"string"===o&&(i=Ve.exec(n))&&i[1]&&(n=m(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(Ee.cssNumber[s]?"":"px")),me.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=h(t),u=Tt.test(t);return u||(t=F(s)),a=Ee.cssHooks[t]||Ee.cssHooks[s],a&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=M(e,t,r)),"normal"===i&&t in Et&&(i=Et[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),Ee.each(["height","width"],function(e,t){Ee.cssHooks[t]={get:function(e,n,r){if(n)return!wt.test(Ee.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?_(e,t,r):vt(e,Ct,function(){return _(e,t,r)})},set:function(e,n,r){var i,o=gt(e),a=!me.scrollboxSize()&&"absolute"===o.position,s=a||r,u=s&&"border-box"===Ee.css(e,"boxSizing",!1,o),l=r?$(e,t,r,u,o):0;return u&&a&&(l-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-$(e,t,"border",!1,o)-.5)),l&&(i=Ve.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=Ee.css(e,t)),B(e,n,l)}}}),Ee.cssHooks.marginLeft=I(me.reliableMarginLeft,function(e,t){if(t)return(parseFloat(M(e,"marginLeft"))||e.getBoundingClientRect().left-vt(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),Ee.each({margin:"",padding:"",border:"Width"},function(e,t){Ee.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+Ge[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(Ee.cssHooks[e+t].set=B)}),Ee.fn.extend({css:function(e,t){return Ie(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=gt(e),i=t.length;a<i;a++)o[t[a]]=Ee.css(e,t[a],!1,r);return o}return void 0!==n?Ee.style(e,t,n):Ee.css(e,t)},e,t,arguments.length>1)}}),Ee.Tween=z,z.prototype={constructor:z,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||Ee.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Ee.cssNumber[n]?"":"px")},cur:function(){var e=z.propHooks[this.prop];return e&&e.get?e.get(this):z.propHooks._default.get(this)},run:function(e){var t,n=z.propHooks[this.prop];return this.options.duration?this.pos=t=Ee.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):z.propHooks._default.set(this),this}},z.prototype.init.prototype=z.prototype,z.propHooks={_default:{get:function(e){var t
;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=Ee.css(e.elem,e.prop,""),t&&"auto"!==t?t:0)},set:function(e){Ee.fx.step[e.prop]?Ee.fx.step[e.prop](e):1!==e.elem.nodeType||!Ee.cssHooks[e.prop]&&null==e.elem.style[F(e.prop)]?e.elem[e.prop]=e.now:Ee.style(e.elem,e.prop,e.now+e.unit)}}},z.propHooks.scrollTop=z.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Ee.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},Ee.fx=z.prototype.init,Ee.fx.step={};var St,kt,At=/^(?:toggle|show|hide)$/,Nt=/queueHooks$/;Ee.Animation=Ee.extend(J,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return m(n.elem,e,Ve.exec(t),n),n}]},tweener:function(e,t){xe(e)?(t=e,e=["*"]):e=e.match(Pe);for(var n,r=0,i=e.length;r<i;r++)n=e[r],J.tweeners[n]=J.tweeners[n]||[],J.tweeners[n].unshift(t)},prefilters:[Y],prefilter:function(e,t){t?J.prefilters.unshift(e):J.prefilters.push(e)}}),Ee.speed=function(e,t,n){var r=e&&"object"==typeof e?Ee.extend({},e):{complete:n||!n&&t||xe(e)&&e,duration:e,easing:n&&t||t&&!xe(t)&&t};return Ee.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in Ee.fx.speeds?r.duration=Ee.fx.speeds[r.duration]:r.duration=Ee.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){xe(r.old)&&r.old.call(this),r.queue&&Ee.dequeue(this,r.queue)},r},Ee.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ke).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Ee.isEmptyObject(e),o=Ee.speed(t,n,r),a=function(){var t=J(this,Ee.extend({},e),o);(i||$e.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Ee.timers,a=$e.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&Nt.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||Ee.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=$e.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Ee.timers,a=r?r.length:0;for(n.finish=!0,Ee.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),Ee.each(["toggle","show","hide"],function(e,t){var n=Ee.fn[t];Ee.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(V(t,!0),e,r,i)}}),Ee.each({slideDown:V("show"),slideUp:V("hide"),slideToggle:V("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Ee.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Ee.timers=[],Ee.fx.tick=function(){var e,t=0,n=Ee.timers;for(St=Date.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Ee.fx.stop(),St=void 0},Ee.fx.timer=function(e){Ee.timers.push(e),Ee.fx.start()},Ee.fx.interval=13,Ee.fx.start=function(){kt||(kt=!0,U())},Ee.fx.stop=function(){kt=null},Ee.fx.speeds={slow:600,fast:200,_default:400},Ee.fn.delay=function(t,n){return t=Ee.fx&&Ee.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=we.createElement("input"),t=we.createElement("select"),n=t.appendChild(we.createElement("option"));e.type="checkbox",me.checkOn=""!==e.value,me.optSelected=n.selected,e=we.createElement("input"),e.value="t",e.type="radio",me.radioValue="t"===e.value}();var Dt,jt=Ee.expr.attrHandle;Ee.fn.extend({attr:function(e,t){return Ie(this,Ee.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Ee.removeAttr(this,e)})}}),Ee.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return void 0===e.getAttribute?Ee.prop(e,t,n):(1===o&&Ee.isXMLDoc(e)||(i=Ee.attrHooks[t.toLowerCase()]||(Ee.expr.match.bool.test(t)?Dt:void 0)),void 0!==n?null===n?void Ee.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=Ee.find.attr(e,t),null==r?void 0:r))},attrHooks:{type:{set:function(e,t){if(!me.radioValue&&"radio"===t&&o(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Pe);if(i&&1===e.nodeType)for(;n=i[r++];)e.removeAttribute(n)}}),Dt={set:function(e,t,n){return!1===t?Ee.removeAttr(e,n):e.setAttribute(n,n),n}},Ee.each(Ee.expr.match.bool.source.match(/\w+/g),function(e,t){var n=jt[t]||Ee.find.attr;jt[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=jt[a],jt[a]=i,i=null!=n(e,t,r)?a:null,jt[a]=o),i}});var qt=/^(?:input|select|textarea|button)$/i,Lt=/^(?:a|area)$/i;Ee.fn.extend({prop:function(e,t){return Ie(this,Ee.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Ee.propFix[e]||e]})}}),Ee.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&Ee.isXMLDoc(e)||(t=Ee.propFix[t]||t,i=Ee.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=Ee.find.attr(e,"tabindex");return t?parseInt(t,10):qt.test(e.nodeName)||Lt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),me.optSelected||(Ee.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),Ee.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Ee.propFix[this.toLowerCase()]=this}),Ee.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(xe(e))return this.each(function(t){Ee(this).addClass(e.call(this,t,Z(this)))});if(t=ee(e),t.length)for(;n=this[u++];)if(i=Z(n),r=1===n.nodeType&&" "+K(i)+" ",r){for(a=0;o=t[a++];)r.indexOf(" "+o+" ")<0&&(r+=o+" ");s=K(r),i!==s&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(xe(e))return this.each(function(t){Ee(this).removeClass(e.call(this,t,Z(this)))});if(!arguments.length)return this.attr("class","");if(t=ee(e),t.length)for(;n=this[u++];)if(i=Z(n),r=1===n.nodeType&&" "+K(i)+" ",r){for(a=0;o=t[a++];)for(;r.indexOf(" "+o+" ")>-1;)r=r.replace(" "+o+" "," ");s=K(r),i!==s&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):xe(e)?this.each(function(n){Ee(this).toggleClass(e.call(this,n,Z(this),t),t)}):this.each(function(){var t,i,o,a;if(r)for(i=0,o=Ee(this),a=ee(e);t=a[i++];)o.hasClass(t)?o.removeClass(t):o.addClass(t);else void 0!==e&&"boolean"!==n||(t=Z(this),t&&$e.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":$e.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;for(t=" "+e+" ";n=this[r++];)if(1===n.nodeType&&(" "+K(Z(n))+" ").indexOf(t)>-1)return!0;return!1}});var Ht=/\r/g;Ee.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r=xe(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Ee(this).val()):e,null==i?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=Ee.map(i,function(e){return null==e?"":e+""})),t=Ee.valHooks[this.type]||Ee.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=Ee.valHooks[i.type]||Ee.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(Ht,""):null==n?"":n)):void 0}}),Ee.extend({valHooks:{option:{get:function(e){var t=Ee.find.attr(e,"value");return null!=t?t:K(Ee.text(e))}},select:{get:function(e){var t,n,r,i=e.options,a=e.selectedIndex,s="select-one"===e.type,u=s?null:[],l=s?a+1:i.length;for(r=a<0?l:s?a:0;r<l;r++)if(n=i[r],(n.selected||r===a)&&!n.disabled&&(!n.parentNode.disabled||!o(n.parentNode,"optgroup"))){if(t=Ee(n).val(),s)return t;u.push(t)}return u},set:function(e,t){for(var n,r,i=e.options,o=Ee.makeArray(t),a=i.length;a--;)r=i[a],(r.selected=Ee.inArray(Ee.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Ee.each(["radio","checkbox"],function(){Ee.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=Ee.inArray(Ee(e).val(),t)>-1}},me.checkOn||(Ee.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),me.focusin="onfocusin"in e;var Ot=/^(?:focusinfocus|focusoutblur)$/,Pt=function(e){e.stopPropagation()};Ee.extend(Ee.event,{trigger:function(t,n,r,i){var o,a,s,u,l,c,f,p,d=[r||we],h=ge.call(t,"type")?t.type:t,g=ge.call(t,"namespace")?t.namespace.split("."):[];if(a=p=s=r=r||we,3!==r.nodeType&&8!==r.nodeType&&!Ot.test(h+Ee.event.triggered)&&(h.indexOf(".")>-1&&(g=h.split("."),h=g.shift(),g.sort()),l=h.indexOf(":")<0&&"on"+h,t=t[Ee.expando]?t:new Ee.Event(h,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=g.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+g.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Ee.makeArray(n,[t]),f=Ee.event.special[h]||{},i||!f.trigger||!1!==f.trigger.apply(r,n))){if(!i&&!f.noBubble&&!be(r)){for(u=f.delegateType||h,Ot.test(u+h)||(a=a.parentNode);a;a=a.parentNode)d.push(a),s=a;s===(r.ownerDocument||we)&&d.push(s.defaultView||s.parentWindow||e)}for(o=0;(a=d[o++])&&!t.isPropagationStopped();)p=a,t.type=o>1?u:f.bindType||h,c=($e.get(a,"events")||Object.create(null))[t.type]&&$e.get(a,"handle"),c&&c.apply(a,n),c=l&&a[l],c&&c.apply&&Be(a)&&(t.result=c.apply(a,n),!1===t.result&&t.preventDefault());return t.type=h,i||t.isDefaultPrevented()||f._default&&!1!==f._default.apply(d.pop(),n)||!Be(r)||l&&xe(r[h])&&!be(r)&&(s=r[l],s&&(r[l]=null),Ee.event.triggered=h,t.isPropagationStopped()&&p.addEventListener(h,Pt),r[h](),t.isPropagationStopped()&&p.removeEventListener(h,Pt),Ee.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=Ee.extend(new Ee.Event,n,{type:e,isSimulated:!0});Ee.event.trigger(r,null,t)}}),Ee.fn.extend({trigger:function(e,t){return this.each(function(){Ee.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return Ee.event.trigger(e,t,n,!0)}}),me.focusin||Ee.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Ee.event.simulate(t,e.target,Ee.event.fix(e))};Ee.event.special[t]={setup:function(){var r=this.ownerDocument||this.document||this,i=$e.access(r,t);i||r.addEventListener(e,n,!0),$e.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this.document||this,i=$e.access(r,t)-1;i?$e.access(r,t,i):(r.removeEventListener(e,n,!0),$e.remove(r,t))}}});var Rt=e.location,Mt={guid:Date.now()},It=/\?/;Ee.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||Ee.error("Invalid XML: "+t),n};var Wt=/\[\]$/,Ft=/\r?\n/g,Bt=/^(?:submit|button|image|reset|file)$/i,$t=/^(?:input|select|textarea|keygen)/i;Ee.param=function(e,t){var n,r=[],i=function(e,t){var n=xe(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!Ee.isPlainObject(e))Ee.each(e,function(){i(this.name,this.value)});else for(n in e)te(n,e[n],t,i);return r.join("&")},Ee.fn.extend({serialize:function(){return Ee.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Ee.prop(this,"elements");return e?Ee.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Ee(this).is(":disabled")&&$t.test(this.nodeName)&&!Bt.test(e)&&(this.checked||!rt.test(e))}).map(function(e,t){var n=Ee(this).val();return null==n?null:Array.isArray(n)?Ee.map(n,function(e){return{name:t.name,value:e.replace(Ft,"\r\n")}}):{name:t.name,value:n.replace(Ft,"\r\n")}}).get()}});var _t=/%20/g,zt=/#.*$/,Ut=/([?&])_=[^&]*/,Xt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Vt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gt=/^(?:GET|HEAD)$/,Yt=/^\/\//,Qt={},Jt={},Kt="*/".concat("*"),Zt=we.createElement("a");Zt.href=Rt.href,Ee.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Rt.href,type:"GET",isLocal:Vt.test(Rt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":Ee.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?ie(ie(e,Ee.ajaxSettings),t):ie(Ee.ajaxSettings,e)},ajaxPrefilter:ne(Qt),ajaxTransport:ne(Jt),ajax:function(t,n){function r(t,n,r,s){var l,p,d,b,w,T=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",C.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=oe(h,C,r)),!l&&Ee.inArray("script",h.dataTypes)>-1&&(h.converters["text script"]=function(){}),b=ae(h,b,C,l),l?(h.ifModified&&(w=C.getResponseHeader("Last-Modified"),w&&(Ee.lastModified[o]=w),w=C.getResponseHeader("etag"),w&&(Ee.etag[o]=w)),204===t||"HEAD"===h.type?T="nocontent":304===t?T="notmodified":(T=b.state,p=b.data,d=b.error,l=!d)):(d=T,!t&&T||(T="error",t<0&&(t=0))),C.status=t,C.statusText=(n||T)+"",l?y.resolveWith(g,[p,T,C]):y.rejectWith(g,[C,T,d]),C.statusCode(x),x=void 0,f&&v.trigger(l?"ajaxSuccess":"ajaxError",[C,h,l?p:d]),m.fireWith(g,[C,T]),f&&(v.trigger("ajaxComplete",[C,h]),--Ee.active||Ee.event.trigger("ajaxStop")))}"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=Ee.ajaxSetup({},n),g=h.context||h,v=h.context&&(g.nodeType||g.jquery)?Ee(g):Ee.event,y=Ee.Deferred(),m=Ee.Callbacks("once memory"),x=h.statusCode||{},b={},w={},T="canceled",C={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s)for(s={};t=Xt.exec(a);)s[t[1].toLowerCase()+" "]=(s[t[1].toLowerCase()+" "]||[]).concat(t[2]);t=s[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=w[e.toLowerCase()]=w[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)C.always(e[C.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||T;return i&&i.abort(t),r(0,t),this}};if(y.promise(C),h.url=((t||h.url||Rt.href)+"").replace(Yt,Rt.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(Pe)||[""],null==h.crossDomain){l=we.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Zt.protocol+"//"+Zt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=Ee.param(h.data,h.traditional)),re(Qt,h,n,C),c)return C;for(p in f=Ee.event&&h.global,f&&0==Ee.active++&&Ee.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Gt.test(h.type),o=h.url.replace(zt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(_t,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(It.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ut,"$1"),d=(It.test(o)?"&":"?")+"_="+Mt.guid+++d),h.url=o+d),h.ifModified&&(Ee.lastModified[o]&&C.setRequestHeader("If-Modified-Since",Ee.lastModified[o]),Ee.etag[o]&&C.setRequestHeader("If-None-Match",Ee.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&C.setRequestHeader("Content-Type",h.contentType),C.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+Kt+"; q=0.01":""):h.accepts["*"]),h.headers)C.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,C,h)||c))return C.abort();if(T="abort",m.add(h.complete),C.done(h.success),C.fail(h.error),i=re(Jt,h,n,C),i){if(C.readyState=1,f&&v.trigger("ajaxSend",[C,h]),c)return C;h.async&&h.timeout>0&&(u=e.setTimeout(function(){C.abort("timeout")},h.timeout));try{c=!1,i.send(b,r)}catch(e){if(c)throw e;r(-1,e)}}else r(-1,"No Transport");return C},getJSON:function(e,t,n){return Ee.get(e,t,n,"json")},getScript:function(e,t){return Ee.get(e,void 0,t,"script")}}),Ee.each(["get","post"],function(e,t){Ee[t]=function(e,n,r,i){return xe(n)&&(i=i||r,r=n,n=void 0),Ee.ajax(Ee.extend({url:e,type:t,dataType:i,data:n,success:r},Ee.isPlainObject(e)&&e))}}),Ee.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),Ee._evalUrl=function(e,t,n){return Ee.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){Ee.globalEval(e,t,n)}})},Ee.fn.extend({wrapAll:function(e){var t;return this[0]&&(xe(e)&&(e=e.call(this[0])),t=Ee(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return xe(e)?this.each(function(t){Ee(this).wrapInner(e.call(this,t))}):this.each(function(){var t=Ee(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=xe(e);return this.each(function(n){Ee(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){Ee(this).replaceWith(this.childNodes)}),this}}),Ee.expr.pseudos.hidden=function(e){return!Ee.expr.pseudos.visible(e)},Ee.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},Ee.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var en={0:200,1223:204},tn=Ee.ajaxSettings.xhr();me.cors=!!tn&&"withCredentials"in tn,me.ajax=tn=!!tn,Ee.ajaxTransport(function(t){var n,r;if(me.cors||tn&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];for(a in t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest"),i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(en[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),Ee.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),Ee.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return Ee.globalEval(e),e}}}),Ee.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Ee.ajaxTransport("script",function(e){var t,n;if(e.crossDomain||e.scriptAttrs)return{send:function(r,i){t=Ee("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),we.head.appendChild(t[0])},abort:function(){n&&n()}}});var nn,rn=[],on=/(=)\?(?=&|$)|\?\?/;Ee.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=rn.pop()||Ee.expando+"_"+Mt.guid++;return this[e]=!0,e}}),Ee.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(on.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&on.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=xe(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(on,"$1"+i):!1!==t.jsonp&&(t.url+=(It.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||Ee.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?Ee(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,rn.push(i)),a&&xe(o)&&o(a[0]),a=o=void 0}),"script"}),me.createHTMLDocument=(nn=we.implementation.createHTMLDocument("").body,nn.innerHTML="<form></form><form></form>",2===nn.childNodes.length),Ee.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(me.createHTMLDocument?(t=we.implementation.createHTMLDocument(""),r=t.createElement("base"),r.href=we.location.href,t.head.appendChild(r)):t=we),i=De.exec(e),o=!n&&[],i?[t.createElement(i[1])]:(i=C([e],t,o),o&&o.length&&Ee(o).remove(),Ee.merge([],i.childNodes)));var r,i,o},Ee.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=K(e.slice(s)),e=e.slice(0,s)),xe(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&Ee.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?Ee("<div>").append(Ee.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},Ee.expr.pseudos.animated=function(e){return Ee.grep(Ee.timers,function(t){return e===t.elem}).length},Ee.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=Ee.css(e,"position"),f=Ee(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=Ee.css(e,"top"),u=Ee.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),a=r.top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),xe(t)&&(t=t.call(e,n,Ee.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):("number"==typeof p.top&&(p.top+="px"),"number"==typeof p.left&&(p.left+="px"),f.css(p))}},Ee.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Ee.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===Ee.css(r,"position"))t=r.getBoundingClientRect();else{for(t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===Ee.css(e,"position");)e=e.parentNode;e&&e!==r&&1===e.nodeType&&(i=Ee(e).offset(),i.top+=Ee.css(e,"borderTopWidth",!0),i.left+=Ee.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-Ee.css(r,"marginTop",!0),left:t.left-i.left-Ee.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===Ee.css(e,"position");)e=e.offsetParent;return e||Ye})}}),Ee.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;Ee.fn[e]=function(r){return Ie(this,function(e,r,i){var o;if(be(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),Ee.each(["top","left"],function(e,t){Ee.cssHooks[t]=I(me.pixelPosition,function(e,n){if(n)return n=M(e,t),ht.test(n)?Ee(e).position()[t]+"px":n})}),Ee.each({Height:"height",Width:"width"},function(e,t){Ee.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Ee.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return Ie(this,function(t,n,i){var o;return be(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?Ee.css(t,n,s):Ee.style(t,n,i,s)},t,a?i:void 0,a)}})}),Ee.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Ee.fn[t]=function(e){return this.on(t,e)}}),Ee.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),Ee.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){Ee.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}});var an=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;Ee.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),xe(e))return r=le.call(arguments,2),i=function(){return e.apply(t||this,r.concat(le.call(arguments)))},i.guid=e.guid=e.guid||Ee.guid++,i},Ee.holdReady=function(e){e?Ee.readyWait++:Ee.ready(!0)},Ee.isArray=Array.isArray,Ee.parseJSON=JSON.parse,Ee.nodeName=o,Ee.isFunction=xe,Ee.isWindow=be,Ee.camelCase=h,Ee.type=r,Ee.now=Date.now,Ee.isNumeric=function(e){var t=Ee.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},Ee.trim=function(e){return null==e?"":(e+"").replace(an,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return Ee});var sn=e.jQuery,un=e.$;return Ee.noConflict=function(t){return e.$===Ee&&(e.$=un),t&&e.jQuery===Ee&&(e.jQuery=sn),Ee},void 0===t&&(e.jQuery=e.$=Ee),Ee});if(!Array.prototype.find){
  Array.prototype.find = function(callback) {
      return callback && (this.filter(callback) || [])[0];
  };
}
if (typeof Object.assign != 'function') {
    Object.assign = function(target) {
        'use strict';
        if (target == null) {
            throw new TypeError('Cannot convert undefined or null to object');
        }
        target = Object(target);
        for (var index = 1; index < arguments.length; index++) {
            var source = arguments[index];
            if (source != null) {
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}
let windowtenant = {
    "tenantId": 1700090960,
    "cdnFlag": "3",
    "foreign": false,
    "language": "zh_CN",
    "viewType": "p",
    "siteType": "make",
    "makeDomain": "2401105002.p.make.test-dcloud.portal1.portal.thefastmake.com",
}
if(!window.tenant){
    $.ajax({
        url: "/tenant.json",
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(res) {
            window.tenant = res
        },
        error: function(res) {
            window.tenant = windowtenant
        }
    })
}

// 获取环境域名前缀
function getEnvPrefix () {
  let prefix = '' // 默认线上环境
  if (location.port != '') { // 本地采用 test 环境
      prefix = 'test-'
  } else if (/test-/.test(tenant.makeDomain)) {
      prefix = 'test-'
  } else if (/pre-/.test(tenant.makeDomain)) {
      prefix = 'pre-'
  }
  return prefix
}

const ENV_PREFIX = getEnvPrefix()

const domainConfig = {
  shopItemUrl: `https://${ENV_PREFIX}item.aiyouyi.cn`, // 商品
  shopYxUrl: `https://${ENV_PREFIX}yx.aiyouyi.cn`, // 促销
  shopMemberUrl: `https://${ENV_PREFIX}member.aiyouyi.cn`, // 会员
  shopCartUrl: `https://${ENV_PREFIX}cart.aiyouyi.cn`, // 购物车
  shopOrderUrl: `https://${ENV_PREFIX}order.aiyouyi.cn`, // 订单
  shopMerchantUrl: `https://${ENV_PREFIX}merchant.aiyouyi.cn`, // 商户
  shopSettingUrl: `https://${ENV_PREFIX}setting.aiyouyi.cn`, // 设置
  shopAppUrl: `https://${ENV_PREFIX}app.aiyouyi.cn`, // 应用
  shopFxUrl: `https://${ENV_PREFIX}fx.aiyouyi.cn` // 分销
}
const tenantFilter = ['portal-saas-mall'] // 设置走 domain 切换服务域名逻辑白名单

let doMain = {}
// console.log('***555');
// if (tenantFilter.includes(tenant?.unittype)) {
//     console.log('***666');
//   // 先获取本地缓存切换域名数据，确保再次刷新能优先使用不存在问题的域名
//   doMain = localStorage.getItem('__doMain__')
//   doMain = doMain ? JSON.parse(doMain) : {}
//   getDoMainList()
// }
// console.log('***777');
let flag
if(tenant){
    flag = tenantFilter.find(function(item){
        return item == tenant.unittype
    })
    if(flag){
        // 先获取本地缓存切换域名数据，确保再次刷新能优先使用不存在问题的域名
        doMain = localStorage.getItem('__doMain__')
        doMain = doMain ? JSON.parse(doMain) : {}
        getDoMainList()
    }
}

let updateDoMain = null // 更新domain定时器
function getDoMainList () {
  let newResult = {} // 存放修改后的result
  // 设计器地址只调用一次 不再轮询域名探活接口 continueTimeout：false设计器地址
  let continueTimeout = !(window?.location?.origin?.indexOf('dcloud.portalshop1.portal.') != -1)
  $.ajax({
    url:`https://${ENV_PREFIX}omo.aiyouyi.cn/domain` // 可以不是本地域名 后端需要设置 CORB 否则请求不返回数据
  }).done( function (res) {
    if (res) {
      for (let i in res) {
        if (i != 'timeout') {
          newResult[i] = `https://${res[i]}.aiyouyi.cn`
        }
      }
      /* 域名动态切换 */
      // 后期随时跟随后端切换: 会员hy 商户sh 促销cx 订单dd 分销fx 购物车gwc 商品sp 设置sz h5页面webview域名wv 应用yy 装修zx 上传文件地址-资源zy
      const {hy, sh, cx, dd, fx, gwc, sp, sz, wv, yy, zx, zy} = newResult || {}
      const doMain = {
        shopItemUrl: sp || domainConfig.shopItemUrl, // 商品
        shopYxUrl: cx || domainConfig.shopYxUrl, // 促销
        shopMemberUrl: hy || domainConfig.shopMemberUrl, // 会员
        shopCartUrl: gwc || domainConfig.shopCartUrl, // 购物车
        shopOrderUrl: dd || domainConfig.shopOrderUrl // 订单
      }
      window.__ce = Object.assign(window.__ce, doMain)
      localStorage.setItem('__doMain__', JSON.stringify(doMain))
    }
    updateDoMain && clearTimeout(updateDoMain)
    if(continueTimeout) {
        updateDoMain = setTimeout(() => {
            getDoMainList()
        }, res?.timeout || 2000)
    }
  }).fail(function (error) {
    updateDoMain && clearTimeout(updateDoMain)
    if(continueTimeout) {
        updateDoMain = setTimeout(()=>{
            getDoMainList()
        }, 2000)
    }
  })
}

function _env(){
    var env = 'console';
    if(location.port != ''){
        env = 'local'
    }else if(/test-/.test(tenant.makeDomain)){
        env = 'test'
    }else if(/pre-/.test(tenant.makeDomain)){
        env = 'pre'
    }
    var environment = {
        env:env,
        baseURL: location.protocol + "//" + ( env == 'local' ? tenant.makeDomain : location.hostname ),
        cmsAjaxUrl: '/nportal',
        testAjaxUrl: '/nportal',
        smartServiceUrl: 'https://'+ (env=='local'?'test-':(env=='console'?'':(env+'-'))) + 'web-visitor.yun300.cn',
        filePath: '/nportal-omo',
        shopAjaxUrl:'https://'+ (env=='local'?'test-':(env=='console'?'':(env+'-'))) + 'omo.aiyouyi.cn',
        shopRivewUrl:'https://'+ (env=='local'?'pre-':(env=='console'?'':(env+'-'))) + 'review.aiyouyi.cn',
        shopStaticUrl : [
            'https://img1.aiyouyi.cn/',
            'https://img2.aiyouyi.cn/',
            'https://img3.aiyouyi.cn/'
        ],
        staticUrl:[
            'https://'+(env=='local'?'test-':(env=='console'?'':(env+'-')))+'dcloud-static01.faststatics.com'
        ],
        upk: env=='console' ? "cadabd56-3a6c-4b5e-bc67-d38f24d84143" : "c57a96fd-cfa8-4d4c-9863-d381ccb34038",
        imgStaticUrl:[
            'https://'+(env=='console'?"":"pre-")+'omo-oss-image.thefastimg.com',
        ],
        videoStaticUrl:[
            'https://'+(env=='console'?"":"pre-")+'omo-oss-video.thefastvideo.com',
        ],
        fileStaticUrl:[
            'https://'+(env=='console'?"":"pre-")+'omo-oss-file.thefastfile.com',
        ],
        encryptionVideo:[
            'https://'+(env=='console'?"":"pre-")+'omo-oss-encryption.thefastvideo.com'
        ],
        encryptionFile:[
            'https://'+(env=='console'?"":"pre-")+'omo-oss-encryption.thefastfile.com'
        ],
        shopItemUrl: doMain?.shopItemUrl || domainConfig.shopItemUrl,
        shopYxUrl: doMain?.shopYxUrl || domainConfig.shopYxUrl,
        shopMemberUrl: doMain?.shopMemberUrl || domainConfig.shopMemberUrl,
        shopCartUrl: doMain?.shopCartUrl || domainConfig.shopCartUrl,
        shopOrderUrl: doMain?.shopOrderUrl || domainConfig.shopOrderUrl
    };
    return environment
}
window.__ce = Object.assign({
    _: {},
    tMapKey:'C4XBZ-P2HWS-5BGOP-64Z2O-FROKK-JEFA7',
},_env());
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.3.6 Copyright jQuery Foundation and other contributors.
 * Released under MIT license, https://github.com/requirejs/requirejs/blob/master/LICENSE
 */
//Not using strict: uneven strict support in browsers, #392, and causes
//problems with requirejs.exec()/transpiler plugins that may not be strict.
/*jslint regexp: true, nomen: true, sloppy: true */
/*global window, navigator, document, importScripts, setTimeout, opera */
var $compDebug = (window.env == "product" || window.__ce.env == "console" || __ce.env == "pre") && document.location.search.indexOf("DEBUGJS=TRUE") == -1 ? false : true
if (document.location.search.indexOf("MINJS=TRUE") != -1) {
    $compDebug = false
}
//判断数字门户
var is2024 = Boolean(tenant.productGroupId && tenant.productVersion && Number(tenant.productVersion)>=20240101);
var requirejs, require, define
;(function (global, setTimeout) {
    var req,
        s,
        head,
        baseElement,
        dataMain,
        src,
        interactiveScript,
        currentlyAddingScript,
        mainScript,
        subPath,
        version = "2.3.6",
        commentRegExp = /\/\*[\s\S]*?\*\/|([^:"'=]|^)\/\/.*$/gm,
        cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
        jsSuffixRegExp = /\.js$/,
        currDirRegExp = /^\.\//,
        op = Object.prototype,
        ostring = op.toString,
        hasOwn = op.hasOwnProperty,
        isBrowser = !!(typeof window !== "undefined" && typeof navigator !== "undefined" && window.document),
        isWebWorker = !isBrowser && typeof importScripts !== "undefined",
        //PS3 indicates loaded and complete, but need to wait for complete
        //specifically. Sequence is 'loading', 'loaded', execution,
        // then 'complete'. The UA check is unfortunate, but not sure how
        //to feature test w/o causing perf issues.
        readyRegExp = isBrowser && navigator.platform === "PLAYSTATION 3" ? /^complete$/ : /^(complete|loaded)$/,
        defContextName = "_",
        //Oh the tragedy, detecting opera. See the usage of isOpera for reason.
        isOpera = typeof opera !== "undefined" && opera.toString() === "[object Opera]",
        contexts = {},
        cfg = {},
        globalDefQueue = [],
        useInteractive = false

    //Could match something like ')//comment', do not lose the prefix to comment.
    function commentReplace(match, singlePrefix) {
        return singlePrefix || ""
    }

    function isFunction(it) {
        return ostring.call(it) === "[object Function]"
    }

    function isArray(it) {
        return ostring.call(it) === "[object Array]"
    }

    /**
     * Helper function for iterating over an array. If the func returns
     * a true value, it will break out of the loop.
     */
    function each(ary, func) {
        if (ary) {
            var i
            for (i = 0; i < ary.length; i += 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break
                }
            }
        }
    }

    /**
     * Helper function for iterating over an array backwards. If the func
     * returns a true value, it will break out of the loop.
     */
    function eachReverse(ary, func) {
        if (ary) {
            var i
            for (i = ary.length - 1; i > -1; i -= 1) {
                if (ary[i] && func(ary[i], i, ary)) {
                    break
                }
            }
        }
    }

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop)
    }

    function getOwn(obj, prop) {
        return hasProp(obj, prop) && obj[prop]
    }

    /**
     * Cycles over properties in an object and calls a function for each
     * property value. If the function returns a truthy value, then the
     * iteration is stopped.
     */
    function eachProp(obj, func) {
        var prop
        for (prop in obj) {
            if (hasProp(obj, prop)) {
                if (func(obj[prop], prop)) {
                    break
                }
            }
        }
    }

    /**
     * Simple function to mix in properties from source into target,
     * but only if target does not already have a property of the same name.
     */
    function mixin(target, source, force, deepStringMixin) {
        if (source) {
            eachProp(source, function (value, prop) {
                if (force || !hasProp(target, prop)) {
                    if (deepStringMixin && typeof value === "object" && value && !isArray(value) && !isFunction(value) && !(value instanceof RegExp)) {
                        if (!target[prop]) {
                            target[prop] = {}
                        }
                        mixin(target[prop], value, force, deepStringMixin)
                    } else {
                        target[prop] = value
                    }
                }
            })
        }
        return target
    }

    //Similar to Function.prototype.bind, but the 'this' object is specified
    //first, since it is easier to read/figure out what 'this' will be.
    function bind(obj, fn) {
        return function () {
            return fn.apply(obj, arguments)
        }
    }

    function scripts() {
        return document.getElementsByTagName("script")
    }

    function defaultOnError(err) {
        throw err
    }

    //Allow getting a global that is expressed in
    //dot notation, like 'a.b.c'.
    function getGlobal(value) {
        if (!value) {
            return value
        }
        var g = global
        each(value.split("."), function (part) {
            g = g[part]
        })
        return g
    }

    /**
     * Constructs an error with a pointer to an URL with more information.
     * @param {String} id the error ID that maps to an ID on a web page.
     * @param {String} message human readable error.
     * @param {Error} [err] the original error, if there is one.
     *
     * @returns {Error}
     */
    function makeError(id, msg, err, requireModules) {
        var e = new Error(msg + "\nhttps://requirejs.org/docs/errors.html#" + id)
        e.requireType = id
        e.requireModules = requireModules
        if (err) {
            e.originalError = err
        }
        return e
    }

    if (typeof define !== "undefined") {
        //If a define is already in play via another AMD loader,
        //do not overwrite.
        return
    }

    if (typeof requirejs !== "undefined") {
        if (isFunction(requirejs)) {
            //Do not overwrite an existing requirejs instance.
            return
        }
        cfg = requirejs
        requirejs = undefined
    }

    //Allow for a require config object
    if (typeof require !== "undefined" && !isFunction(require)) {
        //assume it is a config object.
        cfg = require
        require = undefined
    }

    function newContext(contextName) {
        var inCheckLoaded,
            Module,
            context,
            handlers,
            checkLoadedTimeoutId,
            config = {
                //Defaults. Do not set a default for map
                //config to speed up normalize(), which
                //will run faster if there is no default.
                waitSeconds: 7,
                baseUrl: "./",
                paths: {},
                bundles: {},
                pkgs: {},
                shim: {},
                config: {}
            },
            registry = {},
            //registry of just enabled modules, to speed
            //cycle breaking code when lots of modules
            //are registered, but not activated.
            enabledRegistry = {},
            undefEvents = {},
            defQueue = [],
            defined = {},
            urlFetched = {},
            bundlesMap = {},
            requireCounter = 1,
            unnormalizedCounter = 1

        /**
         * Trims the . and .. from an array of path segments.
         * It will keep a leading path segment if a .. will become
         * the first path segment, to help with module name lookups,
         * which act like paths, but can be remapped. But the end result,
         * all paths that use this function should look normalized.
         * NOTE: this method MODIFIES the input array.
         * @param {Array} ary the array of path segments.
         */
        function trimDots(ary) {
            var i, part
            for (i = 0; i < ary.length; i++) {
                part = ary[i]
                if (part === ".") {
                    ary.splice(i, 1)
                    i -= 1
                } else if (part === "..") {
                    // If at the start, or previous value is still ..,
                    // keep them so that when converted to a path it may
                    // still work when converted to a path, even though
                    // as an ID it is less than ideal. In larger point
                    // releases, may be better to just kick out an error.
                    if (i === 0 || (i === 1 && ary[2] === "..") || ary[i - 1] === "..") {
                        continue
                    } else if (i > 0) {
                        ary.splice(i - 1, 2)
                        i -= 2
                    }
                }
            }
        }

        /**
         * Given a relative module name, like ./something, normalize it to
         * a real name that can be mapped to a path.
         * @param {String} name the relative name
         * @param {String} baseName a real name that the name arg is relative
         * to.
         * @param {Boolean} applyMap apply the map config to the value. Should
         * only be done if this normalization is for a dependency ID.
         * @returns {String} normalized name
         */
        function normalize(name, baseName, applyMap) {
            var pkgMain,
                mapValue,
                nameParts,
                i,
                j,
                nameSegment,
                lastIndex,
                foundMap,
                foundI,
                foundStarMap,
                starI,
                normalizedBaseParts,
                baseParts = baseName && baseName.split("/"),
                map = config.map,
                starMap = map && map["*"]

            //Adjust any relative paths.
            if (name) {
                name = name.split("/")
                lastIndex = name.length - 1

                // If wanting node ID compatibility, strip .js from end
                // of IDs. Have to do this here, and not in nameToUrl
                // because node allows either .js or non .js to map
                // to same file.
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, "")
                }

                // Starts with a '.' so need the baseName
                if (name[0].charAt(0) === "." && baseParts) {
                    //Convert baseName to array, and lop off the last part,
                    //so that . matches that 'directory' and not name of the baseName's
                    //module. For instance, baseName of 'one/two/three', maps to
                    //'one/two/three.js', but we want the directory, 'one/two' for
                    //this normalization.
                    normalizedBaseParts = baseParts.slice(0, baseParts.length - 1)
                    name = normalizedBaseParts.concat(name)
                }

                trimDots(name)
                name = name.join("/")
            }

            //Apply map config if available.
            if (applyMap && map && (baseParts || starMap)) {
                nameParts = name.split("/")

                outerLoop: for (i = nameParts.length; i > 0; i -= 1) {
                    nameSegment = nameParts.slice(0, i).join("/")

                    if (baseParts) {
                        //Find the longest baseName segment match in the config.
                        //So, do joins on the biggest to smallest lengths of baseParts.
                        for (j = baseParts.length; j > 0; j -= 1) {
                            mapValue = getOwn(map, baseParts.slice(0, j).join("/"))

                            //baseName segment has config, find if it has one for
                            //this name.
                            if (mapValue) {
                                mapValue = getOwn(mapValue, nameSegment)
                                if (mapValue) {
                                    //Match, update name to the new value.
                                    foundMap = mapValue
                                    foundI = i
                                    break outerLoop
                                }
                            }
                        }
                    }

                    //Check for a star map match, but just hold on to it,
                    //if there is a shorter segment match later in a matching
                    //config, then favor over this star map.
                    if (!foundStarMap && starMap && getOwn(starMap, nameSegment)) {
                        foundStarMap = getOwn(starMap, nameSegment)
                        starI = i
                    }
                }

                if (!foundMap && foundStarMap) {
                    foundMap = foundStarMap
                    foundI = starI
                }

                if (foundMap) {
                    nameParts.splice(0, foundI, foundMap)
                    name = nameParts.join("/")
                }
            }

            // If the name points to a package's name, use
            // the package main instead.
            pkgMain = getOwn(config.pkgs, name)

            return pkgMain ? pkgMain : name
        }

        function removeScript(name) {
            if (isBrowser) {
                each(scripts(), function (scriptNode) {
                    if (scriptNode.getAttribute("data-requiremodule") === name && scriptNode.getAttribute("data-requirecontext") === context.contextName) {
                        scriptNode.parentNode.removeChild(scriptNode)
                        return true
                    }
                })
            }
        }

        function hasPathFallback(id) {
            var pathConfig = getOwn(config.paths, id)
            if (pathConfig && isArray(pathConfig) && pathConfig.length > 1) {
                //Pop off the first array value, since it failed, and
                //retry
                pathConfig.shift()
                context.require.undef(id)

                //Custom require that does not do map translation, since
                //ID is "absolute", already mapped/resolved.
                context.makeRequire(null, {
                    skipMap: true
                })([id])

                return true
            }
        }

        //Turns a plugin!resource to [plugin, resource]
        //with the plugin being undefined if the name
        //did not have a plugin prefix.
        function splitPrefix(name) {
            var prefix,
                index = name ? name.indexOf("!") : -1
            if (index > -1) {
                prefix = name.substring(0, index)
                name = name.substring(index + 1, name.length)
            }
            return [prefix, name]
        }

        /**
         * Creates a module mapping that includes plugin prefix, module
         * name, and path. If parentModuleMap is provided it will
         * also normalize the name via require.normalize()
         *
         * @param {String} name the module name
         * @param {String} [parentModuleMap] parent module map
         * for the module name, used to resolve relative names.
         * @param {Boolean} isNormalized: is the ID already normalized.
         * This is true if this call is done for a define() module ID.
         * @param {Boolean} applyMap: apply the map config to the ID.
         * Should only be true if this map is for a dependency.
         *
         * @returns {Object}
         */
        function makeModuleMap(name, parentModuleMap, isNormalized, applyMap) {
            var url,
                pluginModule,
                suffix,
                nameParts,
                prefix = null,
                parentName = parentModuleMap ? parentModuleMap.name : null,
                originalName = name,
                isDefine = true,
                normalizedName = ""

            //If no name, then it means it is a require call, generate an
            //internal name.
            if (!name) {
                isDefine = false
                name = "_@r" + (requireCounter += 1)
            }

            nameParts = splitPrefix(name)
            prefix = nameParts[0]
            name = nameParts[1]

            if (prefix) {
                prefix = normalize(prefix, parentName, applyMap)
                pluginModule = getOwn(defined, prefix)
            }

            //Account for relative paths if there is a base name.
            if (name) {
                if (prefix) {
                    if (isNormalized) {
                        normalizedName = name
                    } else if (pluginModule && pluginModule.normalize) {
                        //Plugin is loaded, use its normalize method.
                        normalizedName = pluginModule.normalize(name, function (name) {
                            return normalize(name, parentName, applyMap)
                        })
                    } else {
                        // If nested plugin references, then do not try to
                        // normalize, as it will not normalize correctly. This
                        // places a restriction on resourceIds, and the longer
                        // term solution is not to normalize until plugins are
                        // loaded and all normalizations to allow for async
                        // loading of a loader plugin. But for now, fixes the
                        // common uses. Details in #1131
                        normalizedName = name.indexOf("!") === -1 ? normalize(name, parentName, applyMap) : name
                    }
                } else {
                    //A regular module.
                    normalizedName = normalize(name, parentName, applyMap)

                    //Normalized name may be a plugin ID due to map config
                    //application in normalize. The map config values must
                    //already be normalized, so do not need to redo that part.
                    nameParts = splitPrefix(normalizedName)
                    prefix = nameParts[0]
                    normalizedName = nameParts[1]
                    isNormalized = true

                    url = context.nameToUrl(normalizedName)
                }
            }

            //If the id is a plugin id that cannot be determined if it needs
            //normalization, stamp it with a unique ID so two matching relative
            //ids that may conflict can be separate.
            suffix = prefix && !pluginModule && !isNormalized ? "_unnormalized" + (unnormalizedCounter += 1) : ""

            return {
                prefix: prefix,
                name: normalizedName,
                parentMap: parentModuleMap,
                unnormalized: !!suffix,
                url: url,
                originalName: originalName,
                isDefine: isDefine,
                id: (prefix ? prefix + "!" + normalizedName : normalizedName) + suffix
            }
        }

        function getModule(depMap) {
            var id = depMap.id,
                mod = getOwn(registry, id)

            if (!mod) {
                mod = registry[id] = new context.Module(depMap)
            }

            return mod
        }

        function on(depMap, name, fn) {
            var id = depMap.id,
                mod = getOwn(registry, id)

            if (hasProp(defined, id) && (!mod || mod.defineEmitComplete)) {
                if (name === "defined") {
                    fn(defined[id])
                }
            } else {
                mod = getModule(depMap)
                if (mod.error && name === "error") {
                    fn(mod.error)
                } else {
                    mod.on(name, fn)
                }
            }
        }

        function onError(err, errback) {
            var ids = err.requireModules,
                notified = false

            if (errback) {
                errback(err)
            } else {
                each(ids, function (id) {
                    var mod = getOwn(registry, id)
                    if (mod) {
                        //Set error on module, so it skips timeout checks.
                        mod.error = err
                        if (mod.events.error) {
                            notified = true
                            mod.emit("error", err)
                        }
                    }
                })

                if (!notified) {
                    req.onError(err)
                }
            }
        }

        /**
         * Internal method to transfer globalQueue items to this context's
         * defQueue.
         */
        function takeGlobalQueue() {
            //Push all the globalDefQueue items into the context's defQueue
            if (globalDefQueue.length) {
                each(globalDefQueue, function (queueItem) {
                    var id = queueItem[0]
                    if (typeof id === "string") {
                        context.defQueueMap[id] = true
                    }
                    defQueue.push(queueItem)
                })
                globalDefQueue = []
            }
        }

        handlers = {
            require: function (mod) {
                if (mod.require) {
                    return mod.require
                } else {
                    return (mod.require = context.makeRequire(mod.map))
                }
            },
            exports: function (mod) {
                mod.usingExports = true
                if (mod.map.isDefine) {
                    if (mod.exports) {
                        return (defined[mod.map.id] = mod.exports)
                    } else {
                        return (mod.exports = defined[mod.map.id] = {})
                    }
                }
            },
            module: function (mod) {
                if (mod.module) {
                    return mod.module
                } else {
                    return (mod.module = {
                        id: mod.map.id,
                        uri: mod.map.url,
                        config: function () {
                            return getOwn(config.config, mod.map.id) || {}
                        },
                        exports: mod.exports || (mod.exports = {})
                    })
                }
            }
        }

        function cleanRegistry(id) {
            //Clean up machinery used for waiting modules.
            delete registry[id]
            delete enabledRegistry[id]
        }

        function breakCycle(mod, traced, processed) {
            var id = mod.map.id

            if (mod.error) {
                mod.emit("error", mod.error)
            } else {
                traced[id] = true
                each(mod.depMaps, function (depMap, i) {
                    var depId = depMap.id,
                        dep = getOwn(registry, depId)

                    //Only force things that have not completed
                    //being defined, so still in the registry,
                    //and only if it has not been matched up
                    //in the module already.
                    if (dep && !mod.depMatched[i] && !processed[depId]) {
                        if (getOwn(traced, depId)) {
                            mod.defineDep(i, defined[depId])
                            mod.check() //pass false?
                        } else {
                            breakCycle(dep, traced, processed)
                        }
                    }
                })
                processed[id] = true
            }
        }

        function checkLoaded() {
            var err,
                usingPathFallback,
                waitInterval = config.waitSeconds * 1000,
                //It is possible to disable the wait interval by using waitSeconds of 0.
                expired = waitInterval && context.startTime + waitInterval < new Date().getTime(),
                noLoads = [],
                reqCalls = [],
                stillLoading = false,
                needCycleCheck = true

            //Do not bother if this call was a result of a cycle break.
            if (inCheckLoaded) {
                return
            }

            inCheckLoaded = true

            //Figure out the state of all the modules.
            eachProp(enabledRegistry, function (mod) {
                var map = mod.map,
                    modId = map.id

                //Skip things that are not enabled or in error state.
                if (!mod.enabled) {
                    return
                }

                if (!map.isDefine) {
                    reqCalls.push(mod)
                }

                if (!mod.error) {
                    //If the module should be executed, and it has not
                    //been inited and time is up, remember it.
                    if (!mod.inited && expired) {
                        if (hasPathFallback(modId)) {
                            usingPathFallback = true
                            stillLoading = true
                        } else {
                            noLoads.push(modId)
                            removeScript(modId)
                        }
                    } else if (!mod.inited && mod.fetched && map.isDefine) {
                        stillLoading = true
                        if (!map.prefix) {
                            //No reason to keep looking for unfinished
                            //loading. If the only stillLoading is a
                            //plugin resource though, keep going,
                            //because it may be that a plugin resource
                            //is waiting on a non-plugin cycle.
                            return (needCycleCheck = false)
                        }
                    }
                }
            })

            if (expired && noLoads.length) {
                //If wait time expired, throw error of unloaded modules.
                err = makeError("timeout", "Load timeout for modules: " + noLoads, null, noLoads)
                err.contextName = context.contextName
                return onError(err)
            }

            //Not expired, check for a cycle.
            if (needCycleCheck) {
                each(reqCalls, function (mod) {
                    breakCycle(mod, {}, {})
                })
            }

            //If still waiting on loads, and the waiting load is something
            //other than a plugin resource, or there are still outstanding
            //scripts, then just try back later.
            if ((!expired || usingPathFallback) && stillLoading) {
                //Something is still waiting to load. Wait for it, but only
                //if a timeout is not already in effect.
                if ((isBrowser || isWebWorker) && !checkLoadedTimeoutId) {
                    checkLoadedTimeoutId = setTimeout(function () {
                        checkLoadedTimeoutId = 0
                        checkLoaded()
                    }, 50)
                }
            }

            inCheckLoaded = false
        }

        Module = function (map) {
            this.events = getOwn(undefEvents, map.id) || {}
            this.map = map
            this.shim = getOwn(config.shim, map.id)
            this.depExports = []
            this.depMaps = []
            this.depMatched = []
            this.pluginMaps = {}
            this.depCount = 0

            /* this.exports this.factory
               this.depMaps = [],
               this.enabled, this.fetched
            */
        }

        Module.prototype = {
            init: function (depMaps, factory, errback, options) {
                options = options || {}

                //Do not do more inits if already done. Can happen if there
                //are multiple define calls for the same module. That is not
                //a normal, common case, but it is also not unexpected.
                if (this.inited) {
                    return
                }

                this.factory = factory

                if (errback) {
                    //Register for errors on this module.
                    this.on("error", errback)
                } else if (this.events.error) {
                    //If no errback already, but there are error listeners
                    //on this module, set up an errback to pass to the deps.
                    errback = bind(this, function (err) {
                        this.emit("error", err)
                    })
                }

                //Do a copy of the dependency array, so that
                //source inputs are not modified. For example
                //"shim" deps are passed in here directly, and
                //doing a direct modification of the depMaps array
                //would affect that config.
                this.depMaps = depMaps && depMaps.slice(0)

                this.errback = errback

                //Indicate this module has be initialized
                this.inited = true

                this.ignore = options.ignore

                //Could have option to init this module in enabled mode,
                //or could have been previously marked as enabled. However,
                //the dependencies are not known until init is called. So
                //if enabled previously, now trigger dependencies as enabled.
                if (options.enabled || this.enabled) {
                    //Enable this module and dependencies.
                    //Will call this.check()
                    this.enable()
                } else {
                    this.check()
                }
            },

            defineDep: function (i, depExports) {
                //Because of cycles, defined callback for a given
                //export can be called more than once.
                if (!this.depMatched[i]) {
                    this.depMatched[i] = true
                    this.depCount -= 1
                    this.depExports[i] = depExports
                }
            },

            fetch: function () {
                if (this.fetched) {
                    return
                }
                this.fetched = true

                context.startTime = new Date().getTime()

                var map = this.map

                //If the manager is for a plugin managed resource,
                //ask the plugin to load it now.
                if (this.shim) {
                    context.makeRequire(this.map, {
                        enableBuildCallback: true
                    })(
                        this.shim.deps || [],
                        bind(this, function () {
                            return map.prefix ? this.callPlugin() : this.load()
                        })
                    )
                } else {
                    //Regular dependency.
                    return map.prefix ? this.callPlugin() : this.load()
                }
            },

            load: function () {
                var url = this.map.url

                //Regular dependency.
                if (!urlFetched[url]) {
                    urlFetched[url] = true
                    context.load(this.map.id, url)
                }
            },

            /**
             * Checks if the module is ready to define itself, and if so,
             * define it.
             */
            check: function () {
                if (!this.enabled || this.enabling) {
                    return
                }

                var err,
                    cjsModule,
                    id = this.map.id,
                    depExports = this.depExports,
                    exports = this.exports,
                    factory = this.factory

                if (!this.inited) {
                    // Only fetch if not already in the defQueue.
                    if (!hasProp(context.defQueueMap, id)) {
                        this.fetch()
                    }
                } else if (this.error) {
                    this.emit("error", this.error)
                } else if (!this.defining) {
                    //The factory could trigger another require call
                    //that would result in checking this module to
                    //define itself again. If already in the process
                    //of doing that, skip this work.
                    this.defining = true

                    if (this.depCount < 1 && !this.defined) {
                        if (isFunction(factory)) {
                            //If there is an error listener, favor passing
                            //to that instead of throwing an error. However,
                            //only do it for define()'d  modules. require
                            //errbacks should not be called for failures in
                            //their callbacks (#699). However if a global
                            //onError is set, use that.
                            if ((this.events.error && this.map.isDefine) || req.onError !== defaultOnError) {
                                try {
                                    exports = context.execCb(id, factory, depExports, exports)
                                } catch (e) {
                                    err = e
                                }
                            } else {
                                exports = context.execCb(id, factory, depExports, exports)
                            }

                            // Favor return value over exports. If node/cjs in play,
                            // then will not have a return value anyway. Favor
                            // module.exports assignment over exports object.
                            if (this.map.isDefine && exports === undefined) {
                                cjsModule = this.module
                                if (cjsModule) {
                                    exports = cjsModule.exports
                                } else if (this.usingExports) {
                                    //exports already set the defined value.
                                    exports = this.exports
                                }
                            }

                            if (err) {
                                err.requireMap = this.map
                                err.requireModules = this.map.isDefine ? [this.map.id] : null
                                err.requireType = this.map.isDefine ? "define" : "require"
                                return onError((this.error = err))
                            }
                        } else {
                            //Just a literal value
                            exports = factory
                        }

                        this.exports = exports

                        if (this.map.isDefine && !this.ignore) {
                            defined[id] = exports

                            if (req.onResourceLoad) {
                                var resLoadMaps = []
                                each(this.depMaps, function (depMap) {
                                    resLoadMaps.push(depMap.normalizedMap || depMap)
                                })
                                req.onResourceLoad(context, this.map, resLoadMaps)
                            }
                        }

                        //Clean up
                        cleanRegistry(id)

                        this.defined = true
                    }

                    //Finished the define stage. Allow calling check again
                    //to allow define notifications below in the case of a
                    //cycle.
                    this.defining = false

                    if (this.defined && !this.defineEmitted) {
                        this.defineEmitted = true
                        this.emit("defined", this.exports)
                        this.defineEmitComplete = true
                    }
                }
            },

            callPlugin: function () {
                var map = this.map,
                    id = map.id,
                    //Map already normalized the prefix.
                    pluginMap = makeModuleMap(map.prefix)

                //Mark this as a dependency for this plugin, so it
                //can be traced for cycles.
                this.depMaps.push(pluginMap)

                on(
                    pluginMap,
                    "defined",
                    bind(this, function (plugin) {
                        var load,
                            normalizedMap,
                            normalizedMod,
                            bundleId = getOwn(bundlesMap, this.map.id),
                            name = this.map.name,
                            parentName = this.map.parentMap ? this.map.parentMap.name : null,
                            localRequire = context.makeRequire(map.parentMap, {
                                enableBuildCallback: true
                            })

                        //If current map is not normalized, wait for that
                        //normalized name to load instead of continuing.
                        if (this.map.unnormalized) {
                            //Normalize the ID if the plugin allows it.
                            if (plugin.normalize) {
                                name =
                                    plugin.normalize(name, function (name) {
                                        return normalize(name, parentName, true)
                                    }) || ""
                            }

                            //prefix and name should already be normalized, no need
                            //for applying map config again either.
                            normalizedMap = makeModuleMap(map.prefix + "!" + name, this.map.parentMap, true)
                            on(
                                normalizedMap,
                                "defined",
                                bind(this, function (value) {
                                    this.map.normalizedMap = normalizedMap
                                    this.init(
                                        [],
                                        function () {
                                            return value
                                        },
                                        null,
                                        {
                                            enabled: true,
                                            ignore: true
                                        }
                                    )
                                })
                            )

                            normalizedMod = getOwn(registry, normalizedMap.id)
                            if (normalizedMod) {
                                //Mark this as a dependency for this plugin, so it
                                //can be traced for cycles.
                                this.depMaps.push(normalizedMap)

                                if (this.events.error) {
                                    normalizedMod.on(
                                        "error",
                                        bind(this, function (err) {
                                            this.emit("error", err)
                                        })
                                    )
                                }
                                normalizedMod.enable()
                            }

                            return
                        }

                        //If a paths config, then just load that file instead to
                        //resolve the plugin, as it is built into that paths layer.
                        if (bundleId) {
                            this.map.url = context.nameToUrl(bundleId)
                            this.load()
                            return
                        }

                        load = bind(this, function (value) {
                            this.init(
                                [],
                                function () {
                                    return value
                                },
                                null,
                                {
                                    enabled: true
                                }
                            )
                        })

                        load.error = bind(this, function (err) {
                            this.inited = true
                            this.error = err
                            err.requireModules = [id]

                            //Remove temp unnormalized modules for this module,
                            //since they will never be resolved otherwise now.
                            eachProp(registry, function (mod) {
                                if (mod.map.id.indexOf(id + "_unnormalized") === 0) {
                                    cleanRegistry(mod.map.id)
                                }
                            })

                            onError(err)
                        })

                        //Allow plugins to load other code without having to know the
                        //context or how to 'complete' the load.
                        load.fromText = bind(this, function (text, textAlt) {
                            /*jslint evil: true */
                            var moduleName = map.name,
                                moduleMap = makeModuleMap(moduleName),
                                hasInteractive = useInteractive

                            //As of 2.1.0, support just passing the text, to reinforce
                            //fromText only being called once per resource. Still
                            //support old style of passing moduleName but discard
                            //that moduleName in favor of the internal ref.
                            if (textAlt) {
                                text = textAlt
                            }

                            //Turn off interactive script matching for IE for any define
                            //calls in the text, then turn it back on at the end.
                            if (hasInteractive) {
                                useInteractive = false
                            }

                            //Prime the system by creating a module instance for
                            //it.
                            getModule(moduleMap)

                            //Transfer any config to this other module.
                            if (hasProp(config.config, id)) {
                                config.config[moduleName] = config.config[id]
                            }

                            try {
                                req.exec(text)
                            } catch (e) {
                                return onError(makeError("fromtexteval", "fromText eval for " + id + " failed: " + e, e, [id]))
                            }

                            if (hasInteractive) {
                                useInteractive = true
                            }

                            //Mark this as a dependency for the plugin
                            //resource
                            this.depMaps.push(moduleMap)

                            //Support anonymous modules.
                            context.completeLoad(moduleName)

                            //Bind the value of that module to the value for this
                            //resource ID.
                            localRequire([moduleName], load)
                        })

                        //Use parentName here since the plugin's name is not reliable,
                        //could be some weird string with no path that actually wants to
                        //reference the parentName's path.
                        plugin.load(map.name, localRequire, load, config)
                    })
                )

                context.enable(pluginMap, this)
                this.pluginMaps[pluginMap.id] = pluginMap
            },

            enable: function () {
                enabledRegistry[this.map.id] = this
                this.enabled = true

                //Set flag mentioning that the module is enabling,
                //so that immediate calls to the defined callbacks
                //for dependencies do not trigger inadvertent load
                //with the depCount still being zero.
                this.enabling = true

                //Enable each dependency
                each(
                    this.depMaps,
                    bind(this, function (depMap, i) {
                        var id, mod, handler

                        if (typeof depMap === "string") {
                            //Dependency needs to be converted to a depMap
                            //and wired up to this module.
                            depMap = makeModuleMap(depMap, this.map.isDefine ? this.map : this.map.parentMap, false, !this.skipMap)
                            this.depMaps[i] = depMap

                            handler = getOwn(handlers, depMap.id)

                            if (handler) {
                                this.depExports[i] = handler(this)
                                return
                            }

                            this.depCount += 1

                            on(
                                depMap,
                                "defined",
                                bind(this, function (depExports) {
                                    if (this.undefed) {
                                        return
                                    }
                                    this.defineDep(i, depExports)
                                    this.check()
                                })
                            )

                            if (this.errback) {
                                on(depMap, "error", bind(this, this.errback))
                            } else if (this.events.error) {
                                // No direct errback on this module, but something
                                // else is listening for errors, so be sure to
                                // propagate the error correctly.
                                on(
                                    depMap,
                                    "error",
                                    bind(this, function (err) {
                                        this.emit("error", err)
                                    })
                                )
                            }
                        }

                        id = depMap.id
                        mod = registry[id]

                        //Skip special modules like 'require', 'exports', 'module'
                        //Also, don't call enable if it is already enabled,
                        //important in circular dependency cases.
                        if (!hasProp(handlers, id) && mod && !mod.enabled) {
                            context.enable(depMap, this)
                        }
                    })
                )

                //Enable each plugin that is used in
                //a dependency
                eachProp(
                    this.pluginMaps,
                    bind(this, function (pluginMap) {
                        var mod = getOwn(registry, pluginMap.id)
                        if (mod && !mod.enabled) {
                            context.enable(pluginMap, this)
                        }
                    })
                )

                this.enabling = false

                this.check()
            },

            on: function (name, cb) {
                var cbs = this.events[name]
                if (!cbs) {
                    cbs = this.events[name] = []
                }
                cbs.push(cb)
            },

            emit: function (name, evt) {
                each(this.events[name], function (cb) {
                    cb(evt)
                })
                if (name === "error") {
                    //Now that the error handler was triggered, remove
                    //the listeners, since this broken Module instance
                    //can stay around for a while in the registry.
                    delete this.events[name]
                }
            }
        }

        function callGetModule(args) {
            //Skip modules already defined.
            if (!hasProp(defined, args[0])) {
                getModule(makeModuleMap(args[0], null, true)).init(args[1], args[2])
            }
        }

        function removeListener(node, func, name, ieName) {
            //Favor detachEvent because of IE9
            //issue, see attachEvent/addEventListener comment elsewhere
            //in this file.
            if (node.detachEvent && !isOpera) {
                //Probably IE. If not it will throw an error, which will be
                //useful to know.
                if (ieName) {
                    node.detachEvent(ieName, func)
                }
            } else {
                node.removeEventListener(name, func, false)
            }
        }

        /**
         * Given an event from a script node, get the requirejs info from it,
         * and then removes the event listeners on the node.
         * @param {Event} evt
         * @returns {Object}
         */
        function getScriptData(evt) {
            //Using currentTarget instead of target for Firefox 2.0's sake. Not
            //all old browsers will be supported, but this one was easy enough
            //to support and still makes sense.
            var node = evt.currentTarget || evt.srcElement

            //Remove the listeners once here.
            removeListener(node, context.onScriptLoad, "load", "onreadystatechange")
            removeListener(node, context.onScriptError, "error")

            return {
                node: node,
                id: node && node.getAttribute("data-requiremodule")
            }
        }

        function intakeDefines() {
            var args

            //Any defined modules in the global queue, intake them now.
            takeGlobalQueue()

            //Make sure any remaining defQueue items get properly processed.
            while (defQueue.length) {
                args = defQueue.shift()
                if (args[0] === null) {
                    return onError(makeError("mismatch", "Mismatched anonymous define() module: " + args[args.length - 1]))
                } else {
                    //args are id, deps, factory. Should be normalized by the
                    //define() function.
                    callGetModule(args)
                }
            }
            context.defQueueMap = {}
        }

        context = {
            config: config,
            contextName: contextName,
            registry: registry,
            defined: defined,
            urlFetched: urlFetched,
            defQueue: defQueue,
            defQueueMap: {},
            Module: Module,
            makeModuleMap: makeModuleMap,
            nextTick: req.nextTick,
            onError: onError,

            /**
             * Set a configuration for the context.
             * @param {Object} cfg config object to integrate.
             */
            configure: function (cfg) {
                //Make sure the baseUrl ends in a slash.
                if (cfg.baseUrl) {
                    if (cfg.baseUrl.charAt(cfg.baseUrl.length - 1) !== "/") {
                        cfg.baseUrl += "/"
                    }
                }

                // Convert old style urlArgs string to a function.
                if (typeof cfg.urlArgs === "string") {
                    var urlArgs = cfg.urlArgs
                    cfg.urlArgs = function (id, url) {
                        return (url.indexOf("?") === -1 ? "?" : "&") + urlArgs
                    }
                }

                //Save off the paths since they require special processing,
                //they are additive.
                var shim = config.shim,
                    objs = {
                        paths: true,
                        bundles: true,
                        config: true,
                        map: true
                    }

                eachProp(cfg, function (value, prop) {
                    if (objs[prop]) {
                        if (!config[prop]) {
                            config[prop] = {}
                        }
                        mixin(config[prop], value, true, true)
                    } else {
                        config[prop] = value
                    }
                })

                //Reverse map the bundles
                if (cfg.bundles) {
                    eachProp(cfg.bundles, function (value, prop) {
                        each(value, function (v) {
                            if (v !== prop) {
                                bundlesMap[v] = prop
                            }
                        })
                    })
                }

                //Merge shim
                if (cfg.shim) {
                    eachProp(cfg.shim, function (value, id) {
                        //Normalize the structure
                        if (isArray(value)) {
                            value = {
                                deps: value
                            }
                        }
                        if ((value.exports || value.init) && !value.exportsFn) {
                            value.exportsFn = context.makeShimExports(value)
                        }
                        shim[id] = value
                    })
                    config.shim = shim
                }

                //Adjust packages if necessary.
                if (cfg.packages) {
                    each(cfg.packages, function (pkgObj) {
                        var location, name

                        pkgObj = typeof pkgObj === "string" ? { name: pkgObj } : pkgObj

                        name = pkgObj.name
                        location = pkgObj.location
                        if (location) {
                            config.paths[name] = pkgObj.location
                        }

                        //Save pointer to main module ID for pkg name.
                        //Remove leading dot in main, so main paths are normalized,
                        //and remove any trailing .js, since different package
                        //envs have different conventions: some use a module name,
                        //some use a file name.
                        config.pkgs[name] = pkgObj.name + "/" + (pkgObj.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                    })
                }

                //If there are any "waiting to execute" modules in the registry,
                //update the maps for them, since their info, like URLs to load,
                //may have changed.
                eachProp(registry, function (mod, id) {
                    //If module already has init called, since it is too
                    //late to modify them, and ignore unnormalized ones
                    //since they are transient.
                    if (!mod.inited && !mod.map.unnormalized) {
                        mod.map = makeModuleMap(id, null, true)
                    }
                })

                //If a deps array or a config callback is specified, then call
                //require with those args. This is useful when require is defined as a
                //config object before require.js is loaded.
                if (cfg.deps || cfg.callback) {
                    context.require(cfg.deps || [], cfg.callback)
                }
            },

            makeShimExports: function (value) {
                function fn() {
                    var ret
                    if (value.init) {
                        ret = value.init.apply(global, arguments)
                    }
                    return ret || (value.exports && getGlobal(value.exports))
                }
                return fn
            },

            makeRequire: function (relMap, options) {
                options = options || {}

                function localRequire(deps, callback, errback) {
                    var id, map, requireMod

                    if (options.enableBuildCallback && callback && isFunction(callback)) {
                        callback.__requireJsBuild = true
                    }

                    if (typeof deps === "string") {
                        if (isFunction(callback)) {
                            //Invalid call
                            return onError(makeError("requireargs", "Invalid require call"), errback)
                        }

                        //If require|exports|module are requested, get the
                        //value for them from the special handlers. Caveat:
                        //this only works while module is being defined.
                        if (relMap && hasProp(handlers, deps)) {
                            return handlers[deps](registry[relMap.id])
                        }

                        //Synchronous access to one module. If require.get is
                        //available (as in the Node adapter), prefer that.
                        if (req.get) {
                            return req.get(context, deps, relMap, localRequire)
                        }

                        //Normalize module name, if it contains . or ..
                        map = makeModuleMap(deps, relMap, false, true)
                        id = map.id

                        if (!hasProp(defined, id)) {
                            return onError(makeError("notloaded", 'Module name "' + id + '" has not been loaded yet for context: ' + contextName + (relMap ? "" : ". Use require([])")))
                        }
                        return defined[id]
                    }

                    //Grab defines waiting in the global queue.
                    intakeDefines()

                    //Mark all the dependencies as needing to be loaded.
                    context.nextTick(function () {
                        //Some defines could have been added since the
                        //require call, collect them.
                        intakeDefines()

                        requireMod = getModule(makeModuleMap(null, relMap))

                        //Store if map config should be applied to this require
                        //call for dependencies.
                        requireMod.skipMap = options.skipMap

                        requireMod.init(deps, callback, errback, {
                            enabled: true
                        })

                        checkLoaded()
                    })

                    return localRequire
                }

                mixin(localRequire, {
                    isBrowser: isBrowser,

                    /**
                     * Converts a module name + .extension into an URL path.
                     * *Requires* the use of a module name. It does not support using
                     * plain URLs like nameToUrl.
                     */
                    toUrl: function (moduleNamePlusExt) {
                        var ext,
                            index = moduleNamePlusExt.lastIndexOf("."),
                            segment = moduleNamePlusExt.split("/")[0],
                            isRelative = segment === "." || segment === ".."

                        //Have a file extension alias, and it is not the
                        //dots from a relative path.
                        if (index !== -1 && (!isRelative || index > 1)) {
                            ext = moduleNamePlusExt.substring(index, moduleNamePlusExt.length)
                            moduleNamePlusExt = moduleNamePlusExt.substring(0, index)
                        }

                        return context.nameToUrl(normalize(moduleNamePlusExt, relMap && relMap.id, true), ext, true)
                    },

                    defined: function (id) {
                        return hasProp(defined, makeModuleMap(id, relMap, false, true).id)
                    },

                    specified: function (id) {
                        id = makeModuleMap(id, relMap, false, true).id
                        return hasProp(defined, id) || hasProp(registry, id)
                    }
                })

                //Only allow undef on top level require calls
                if (!relMap) {
                    localRequire.undef = function (id) {
                        //Bind any waiting define() calls to this context,
                        //fix for #408
                        takeGlobalQueue()

                        var map = makeModuleMap(id, relMap, true),
                            mod = getOwn(registry, id)

                        mod.undefed = true
                        removeScript(id)

                        delete defined[id]
                        delete urlFetched[map.url]
                        delete undefEvents[id]

                        //Clean queued defines too. Go backwards
                        //in array so that the splices do not
                        //mess up the iteration.
                        eachReverse(defQueue, function (args, i) {
                            if (args[0] === id) {
                                defQueue.splice(i, 1)
                            }
                        })
                        delete context.defQueueMap[id]

                        if (mod) {
                            //Hold on to listeners in case the
                            //module will be attempted to be reloaded
                            //using a different config.
                            if (mod.events.defined) {
                                undefEvents[id] = mod.events
                            }

                            cleanRegistry(id)
                        }
                    }
                }

                return localRequire
            },

            /**
             * Called to enable a module if it is still in the registry
             * awaiting enablement. A second arg, parent, the parent module,
             * is passed in for context, when this method is overridden by
             * the optimizer. Not shown here to keep code compact.
             */
            enable: function (depMap) {
                var mod = getOwn(registry, depMap.id)
                if (mod) {
                    getModule(depMap).enable()
                }
            },

            /**
             * Internal method used by environment adapters to complete a load event.
             * A load event could be a script load or just a load pass from a synchronous
             * load call.
             * @param {String} moduleName the name of the module to potentially complete.
             */
            completeLoad: function (moduleName) {
                var found,
                    args,
                    mod,
                    shim = getOwn(config.shim, moduleName) || {},
                    shExports = shim.exports

                takeGlobalQueue()

                while (defQueue.length) {
                    args = defQueue.shift()
                    if (args[0] === null) {
                        args[0] = moduleName
                        //If already found an anonymous module and bound it
                        //to this name, then this is some other anon module
                        //waiting for its completeLoad to fire.
                        if (found) {
                            break
                        }
                        found = true
                    } else if (args[0] === moduleName) {
                        //Found matching define call for this script!
                        found = true
                    }

                    callGetModule(args)
                }
                context.defQueueMap = {}

                //Do this after the cycle of callGetModule in case the result
                //of those calls/init calls changes the registry.
                mod = getOwn(registry, moduleName)

                if (!found && !hasProp(defined, moduleName) && mod && !mod.inited) {
                    if (config.enforceDefine && (!shExports || !getGlobal(shExports))) {
                        if (hasPathFallback(moduleName)) {
                            return
                        } else {
                            return onError(makeError("nodefine", "No define call for " + moduleName, null, [moduleName]))
                        }
                    } else {
                        //A script that does not call define(), so just simulate
                        //the call for it.
                        callGetModule([moduleName, shim.deps || [], shim.exportsFn])
                    }
                }

                checkLoaded()
            },

            /**
             * Converts a module name to a file path. Supports cases where
             * moduleName may actually be just an URL.
             * Note that it **does not** call normalize on the moduleName,
             * it is assumed to have already been normalized. This is an
             * internal API, not a public one. Use toUrl for the public API.
             */
            nameToUrl: function (moduleName, ext, skipExt) {
                var paths,
                    syms,
                    i,
                    parentModule,
                    url,
                    parentPath,
                    bundleId,
                    pkgMain = getOwn(config.pkgs, moduleName)

                if (pkgMain) {
                    moduleName = pkgMain
                }

                bundleId = getOwn(bundlesMap, moduleName)

                if (bundleId) {
                    return context.nameToUrl(bundleId, ext, skipExt)
                }

                //If a colon is in the URL, it indicates a protocol is used and it is just
                //an URL to a file, or if it starts with a slash, contains a query arg (i.e. ?)
                //or ends with .js, then assume the user meant to use an url and not a module id.
                //The slash is important for protocol-less URLs as well as full paths.
                if (req.jsExtRegExp.test(moduleName)) {
                    //Just a plain path, not module name lookup, so just return it.
                    //Add extension if it is included. This is a bit wonky, only non-.js things pass
                    //an extension, this method probably needs to be reworked.
                    url = moduleName + (ext || "")
                } else {
                    //A module that needs to be converted to a path.
                    paths = config.paths

                    syms = moduleName.split("/")
                    //For each module name segment, see if there is a path
                    //registered for it. Start with most specific name
                    //and work up from it.
                    for (i = syms.length; i > 0; i -= 1) {
                        parentModule = syms.slice(0, i).join("/")

                        parentPath = getOwn(paths, parentModule)
                        if (parentPath) {
                            //If an array, it means there are a few choices,
                            //Choose the one that is desired
                            if (isArray(parentPath)) {
                                parentPath = parentPath[0]
                            }
                            syms.splice(0, i, parentPath)
                            break
                        }
                    }

                    //Join the path parts together, then figure out if baseUrl is needed.
                    url = syms.join("/")
                    url += ext || (/^data\:|^blob\:|\?/.test(url) || skipExt ? "" : ".js")
                    url = (url.charAt(0) === "/" || url.match(/^[\w\+\.\-]+:/) ? "" : config.baseUrl) + url
                }

                return config.urlArgs && !/^blob\:/.test(url) ? url + config.urlArgs(moduleName, url) : url
            },

            //Delegates to req.load. Broken out as a separate function to
            //allow overriding in the optimizer.
            load: function (id, url) {
                req.load(context, id, url)
            },

            /**
             * Executes a module callback function. Broken out as a separate function
             * solely to allow the build system to sequence the files in the built
             * layer in the right sequence.
             *
             * @private
             */
            execCb: function (name, callback, args, exports) {
                return callback.apply(exports, args)
            },

            /**
             * callback for script loads, used to check status of loading.
             *
             * @param {Event} evt the event from the browser for the script
             * that was loaded.
             */
            onScriptLoad: function (evt) {
                //Using currentTarget instead of target for Firefox 2.0's sake. Not
                //all old browsers will be supported, but this one was easy enough
                //to support and still makes sense.
                if (evt.type === "load" || readyRegExp.test((evt.currentTarget || evt.srcElement).readyState)) {
                    //Reset interactive script so a script node is not held onto for
                    //to long.
                    interactiveScript = null

                    //Pull out the name of the module and the context.
                    var data = getScriptData(evt)
                    context.completeLoad(data.id)
                }
            },

            /**
             * Callback for script errors.
             */
            onScriptError: function (evt) {
                var data = getScriptData(evt)
                if (!hasPathFallback(data.id)) {
                    var parents = []
                    eachProp(registry, function (value, key) {
                        if (key.indexOf("_@r") !== 0) {
                            each(value.depMaps, function (depMap) {
                                if (depMap.id === data.id) {
                                    parents.push(key)
                                    return true
                                }
                            })
                        }
                    })
                    return onError(makeError("scripterror", 'Script error for "' + data.id + (parents.length ? '", needed by: ' + parents.join(", ") : '"'), evt, [data.id]))
                }
            }
        }

        context.require = context.makeRequire()
        return context
    }

    /**
     * Main entry point.
     *
     * If the only argument to require is a string, then the module that
     * is represented by that string is fetched for the appropriate context.
     *
     * If the first argument is an array, then it will be treated as an array
     * of dependency string names to fetch. An optional function callback can
     * be specified to execute when all of those dependencies are available.
     *
     * Make a local req variable to help Caja compliance (it assumes things
     * on a require that are not standardized), and to give a short
     * name for minification/local scope use.
     */
    req = requirejs = function (deps, callback, errback, optional) {
        //Find the right context, use default
        var context,
            config,
            contextName = defContextName

        // Determine if have config object in the call.
        if (!isArray(deps) && typeof deps !== "string") {
            // deps is a config object
            config = deps
            if (isArray(callback)) {
                // Adjust args if there are dependencies
                deps = callback
                callback = errback
                errback = optional
            } else {
                deps = []
            }
        }

        if (config && config.context) {
            contextName = config.context
        }

        context = getOwn(contexts, contextName)
        if (!context) {
            context = contexts[contextName] = req.s.newContext(contextName)
        }

        if (config) {
            context.configure(config)
        }

        return context.require(deps, callback, errback)
    }

    /**
     * Support require.config() to make it easier to cooperate with other
     * AMD loaders on globally agreed names.
     */
    req.config = function (config) {
        return req(config)
    }

    /**
     * Execute something after the current tick
     * of the event loop. Override for other envs
     * that have a better solution than setTimeout.
     * @param  {Function} fn function to execute later.
     */
    req.nextTick =
        typeof setTimeout !== "undefined"
            ? function (fn) {
                  setTimeout(fn, 4)
              }
            : function (fn) {
                  fn()
              }

    /**
     * Export require as a global, but only if it does not already exist.
     */
    if (!require) {
        require = req
    }

    req.version = version

    //Used to filter out dependencies that are already paths.
    req.jsExtRegExp = /^\/|:|\?|\.js$/
    req.isBrowser = isBrowser
    s = req.s = {
        contexts: contexts,
        newContext: newContext
    }

    //Create default context.
    req({})

    //Exports some context-sensitive methods on global require.
    each(["toUrl", "undef", "defined", "specified"], function (prop) {
        //Reference from contexts instead of early binding to default context,
        //so that during builds, the latest instance of the default context
        //with its config gets used.
        req[prop] = function () {
            var ctx = contexts[defContextName]
            return ctx.require[prop].apply(ctx, arguments)
        }
    })

    if (isBrowser) {
        head = s.head = document.getElementsByTagName("head")[0]
        //If BASE tag is in play, using appendChild is a problem for IE6.
        //When that browser dies, this can be removed. Details in this jQuery bug:
        //http://dev.jquery.com/ticket/2709
        baseElement = document.getElementsByTagName("base")[0]
        if (baseElement) {
            head = s.head = baseElement.parentNode
        }
    }

    /**
     * Any errors that require explicitly generates will be passed to this
     * function. Intercept/override it if you want custom error handling.
     * @param {Error} err the error object.
     */
    req.onError = defaultOnError

    /**
     * Creates the node for the load command. Only used in browser envs.
     */
    req.createNode = function (config, moduleName, url) {
        var node = config.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script")
        node.type = config.scriptType || "text/javascript"
        node.charset = "utf-8"
        node.async = true
        return node
    }

    /**
     * Does the request to load a module for the browser case.
     * Make this a separate function to allow other environments
     * to override it.
     *
     * @param {Object} context the require context to find state.
     * @param {String} moduleName the name of the module.
     * @param {Object} url the URL to the module.
     */
    req.load = function (context, moduleName, url) {
        var config = (context && context.config) || {},
            node
        if (isBrowser) {
            //In the browser so use a script tag
            node = req.createNode(config, moduleName, url)

            node.setAttribute("data-requirecontext", context.contextName)
            node.setAttribute("data-requiremodule", moduleName)

            //Set up load listener. Test attachEvent first because IE9 has
            //a subtle issue in its addEventListener and script onload firings
            //that do not match the behavior of all other browsers with
            //addEventListener support, which fire the onload event for a
            //script right after the script execution. See:
            //https://connect.microsoft.com/IE/feedback/details/648057/script-onload-event-is-not-fired-immediately-after-script-execution
            //UNFORTUNATELY Opera implements attachEvent but does not follow the script
            //script execution mode.
            if (
                node.attachEvent &&
                //Check if node.attachEvent is artificially added by custom script or
                //natively supported by browser
                //read https://github.com/requirejs/requirejs/issues/187
                //if we can NOT find [native code] then it must NOT natively supported.
                //in IE8, node.attachEvent does not have toString()
                //Note the test for "[native code" with no closing brace, see:
                //https://github.com/requirejs/requirejs/issues/273
                !(node.attachEvent.toString && node.attachEvent.toString().indexOf("[native code") < 0) &&
                !isOpera
            ) {
                //Probably IE. IE (at least 6-8) do not fire
                //script onload right after executing the script, so
                //we cannot tie the anonymous define call to a name.
                //However, IE reports the script as being in 'interactive'
                //readyState at the time of the define call.
                useInteractive = true

                node.attachEvent("onreadystatechange", context.onScriptLoad)
                //It would be great to add an error handler here to catch
                //404s in IE9+. However, onreadystatechange will fire before
                //the error handler, so that does not help. If addEventListener
                //is used, then IE will fire error before load, but we cannot
                //use that pathway given the connect.microsoft.com issue
                //mentioned above about not doing the 'script execute,
                //then fire the script load event listener before execute
                //next script' that other browsers do.
                //Best hope: IE10 fixes the issues,
                //and then destroys all installs of IE 6-9.
                //node.attachEvent('onerror', context.onScriptError);
            } else {
                node.addEventListener("load", context.onScriptLoad, false)
                node.addEventListener("error", context.onScriptError, false)
            }

            //如果不是debug模式
            if (!$compDebug && /^\/npublic/.test(url)) {
                url = url.replace(/.{1}js$/, ".min.js")
            }

            //运营期静态域名获取
            var getStaticBaseUrl = function () {
                var baseU = ""
                if (tenant.cdnFlag == 2) {
                    if (__ce.staticCount == undefined) {
                        __ce.staticCount = 0
                    }
                    var num = __ce.staticCount % __ce.staticUrl.length
                    __ce.staticCount++
                    baseU = __ce.staticUrl[num] || __ce.staticUrl[0]
                    // }else if(tenant.cdnFlag==0){
                    //     baseU = __ce.staticUrl[0]
                    // }else{
                    //     baseU = __ce.staticUrl[0]
                }
                return baseU
            }
            var getStaticWholeUrl = function (u) {
                var $oper = tenant.siteType == "pre" || tenant.siteType == "oper"
                if ($oper) {
                    var baseUrl = getStaticBaseUrl()
                    var instance = tenant.bossProductInstance
                    var viewType = tenant.viewType
                    var siteType = tenant.siteType
                    var version = (tenant.viewType == "m" ? tenant.mobilePublishTime : tenant.pcPublishTime) || 0
                    if (/^\/npublic/.test(u)) {
                        u = baseUrl + u
                        var k = u.indexOf("?") > -1 ? "&" : "?"
                        u = u + k + "instance=" + instance.toLowerCase() + "&viewType=" + viewType + "&siteType=" + siteType + "&v=" + version
                    }
                }
                return u
            }
            // console.log(url,getStaticWholeUrl(url))
            // node.src = url;
            node.src = getStaticWholeUrl(url)

            //Calling onNodeCreated after all properties on the node have been
            //set, but before it is placed in the DOM.
            if (config.onNodeCreated) {
                config.onNodeCreated(node, config, moduleName, url)
            }

            //For some cache cases in IE 6-8, the script executes before the end
            //of the appendChild execution, so to tie an anonymous define
            //call to the module name (which is stored on the node), hold on
            //to a reference to this node, but clear after the DOM insertion.
            currentlyAddingScript = node
            if (baseElement) {
                head.insertBefore(node, baseElement)
            } else {
                head.appendChild(node)
            }
            currentlyAddingScript = null

            return node
        } else if (isWebWorker) {
            try {
                //In a web worker, use importScripts. This is not a very
                //efficient use of importScripts, importScripts will block until
                //its script is downloaded and evaluated. However, if web workers
                //are in play, the expectation is that a build has been done so
                //that only one script needs to be loaded anyway. This may need
                //to be reevaluated if other use cases become common.

                // Post a task to the event loop to work around a bug in WebKit
                // where the worker gets garbage-collected after calling
                // importScripts(): https://webkit.org/b/153317
                setTimeout(function () {}, 0)
                importScripts(url)

                //Account for anonymous modules
                context.completeLoad(moduleName)
            } catch (e) {
                context.onError(makeError("importscripts", "importScripts failed for " + moduleName + " at " + url, e, [moduleName]))
            }
        }
    }

    function getInteractiveScript() {
        if (interactiveScript && interactiveScript.readyState === "interactive") {
            return interactiveScript
        }

        eachReverse(scripts(), function (script) {
            if (script.readyState === "interactive") {
                return (interactiveScript = script)
            }
        })
        return interactiveScript
    }

    //Look for a data-main script attribute, which could also adjust the baseUrl.
    if (isBrowser && !cfg.skipDataMain) {
        //Figure out baseUrl. Get it from the script tag with require.js in it.
        eachReverse(scripts(), function (script) {
            //Set the 'head' where we can append children by
            //using the script's parent.
            if (!head) {
                head = script.parentNode
            }

            //Look for a data-main attribute to set main script for the page
            //to load. If it is there, the path to data main becomes the
            //baseUrl, if it is not already set.
            dataMain = script.getAttribute("data-main")
            if (dataMain) {
                //Preserve dataMain in case it is a path (i.e. contains '?')
                mainScript = dataMain

                //Set final baseUrl if there is not already an explicit one,
                //but only do so if the data-main value is not a loader plugin
                //module ID.
                if (!cfg.baseUrl && mainScript.indexOf("!") === -1) {
                    //Pull off the directory of data-main for use as the
                    //baseUrl.
                    src = mainScript.split("/")
                    mainScript = src.pop()
                    subPath = src.length ? src.join("/") + "/" : "./"

                    cfg.baseUrl = subPath
                }

                //Strip off any trailing .js since mainScript is now
                //like a module name.
                mainScript = mainScript.replace(jsSuffixRegExp, "")

                //If mainScript is still a path, fall back to dataMain
                if (req.jsExtRegExp.test(mainScript)) {
                    mainScript = dataMain
                }

                //Put the data-main script in the files to load.
                cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript]

                return true
            }
        })
    }

    /**
     * The function that handles definitions of modules. Differs from
     * require() in that a string for the module should be the first argument,
     * and the function to execute after dependencies are loaded should
     * return a value to define the module corresponding to the first argument's
     * name.
     */
    define = function (name, deps, callback) {
        var node, context

        //Allow for anonymous modules
        if (typeof name !== "string") {
            //Adjust args appropriately
            callback = deps
            deps = name
            name = null
        }

        //This module may not have dependencies
        if (!isArray(deps)) {
            callback = deps
            deps = null
        }

        //If no name, and callback is a function, then figure out if it a
        //CommonJS thing with dependencies.
        if (!deps && isFunction(callback)) {
            deps = []
            //Remove comments from the callback string,
            //look for require calls, and pull them into the dependencies,
            //but only if there are function args.
            if (callback.length) {
                callback
                    .toString()
                    .replace(commentRegExp, commentReplace)
                    .replace(cjsRequireRegExp, function (match, dep) {
                        deps.push(dep)
                    })

                //May be a CommonJS thing even without require calls, but still
                //could use exports, and module. Avoid doing exports and module
                //work though if it just needs require.
                //REQUIRES the function to expect the CommonJS variables in the
                //order listed below.
                deps = (callback.length === 1 ? ["require"] : ["require", "exports", "module"]).concat(deps)
            }
        }

        //If in IE 6-8 and hit an anonymous define() call, do the interactive
        //work.
        if (useInteractive) {
            node = currentlyAddingScript || getInteractiveScript()
            if (node) {
                if (!name) {
                    name = node.getAttribute("data-requiremodule")
                }
                context = contexts[node.getAttribute("data-requirecontext")]
            }
        }

        //Always save off evaluating the def call until the script onload handler.
        //This allows multiple modules to be in a file without prematurely
        //tracing dependencies, and allows for anonymous module support,
        //where the module name is not known until the script onload event
        //occurs. If no context, use the global queue, and get it processed
        //in the onscript load callback.
        if (context) {
            context.defQueue.push([name, deps, callback])
            context.defQueueMap[name] = true
        } else {
            globalDefQueue.push([name, deps, callback])
        }
    }

    // define.amd = {
    //     jQuery: true
    // };
    define.amd = false
    define.zqamd = true

    /**
     * Executes the text. Normally just uses eval, but can be modified
     * to use a better, environment-specific call. Only used for transpiling
     * loader plugins, not for plain JS modules.
     * @param {String} text the text to execute/evaluate.
     */
    req.exec = function (text) {
        /*jslint evil: true */
        return eval(text)
    }

    //Set up with config info.
    req(cfg)
})(this, typeof setTimeout === "undefined" ? undefined : setTimeout)

var baseOrigin = __ce.env == "local" ? __ce.baseURL : ""
var staticImgOrigin = baseOrigin
//requireJS公共配置
var plPath = "libs/widget/index.html"
var nuPath = "libs/nouglify/index.html"
var libPath = "libs/core/index.html"
var tMapKey = "C4XBZ-P2HWS-5BGOP-64Z2O-FROKK-JEFA7"
require.config({
    baseUrl: baseOrigin + "/npublic/",
    waitSeconds: 8000, //设置超时时间
    paths: {
        css: plPath + "css", //css加载
        async: plPath + "async", //异步加载
        bootstrap: plPath + "bootstrap", //bootstrap框架js
        swiper: plPath + "swiper/swiper", //swiper 6
        bMap: "https://api.map.baidu.com/api?type=webgl&v=1.0&&ak=kszsXMCsNwN4RVovrRfGbHIeV9G5p8GP", //百度地图api
        tMap: "https://map.qq.com/api/gljs?v=1.exp&key=" + tMapKey, //腾讯地图api
        pl_category: plPath + "pl_category", //分类下拉和横向
        pl_confirm: plPath + "pl_confirm", //确认提示框
        pl_counter: plPath + "pl_counter", //计数器
        pl_toast: plPath + "pl_toast", //toast提示框
        pl_util: plPath + "pl_util", //常用工具类
        pl_readyload: plPath + "pl_readyload", //页面加载完成方法
        pl_leftTime: plPath + "pl_leftTime", //倒计时
        validate: plPath + "validate", //表单验证
        clipboard: plPath + "clipboard", //复制
        qrcode: plPath + "qrcode", //二维码
        iShare: plPath + "iShare", //分享
        pl_multSelect: plPath + "pl_multSelect", //下拉多选
        datePicker: plPath + "datePicker/datepicker", //日期时间选择
        moment: plPath + "moment", //获取时间插件
        pagenation: plPath + "compPage", //cms列表分页
        md5: plPath + "jquery.md5", //jquery.md5
        shopAjax: plPath + "shopAjax", //电商ajax
        cmsAjax: plPath + "cmsAjax", //cmsajax
        polyfill: plPath + "polyfill", //ie兼容es6
        pageInit: plPath + "pageInit", //橱窗分页
        marquee: plPath + "ScrollPic", //无缝滚动
        marqueeSlide: plPath + "SuperSlide", //无缝滚动
        md: plPath + "sensors/md", //神策埋点
        mallmd: plPath + "sensors/mallmd", //神策埋点
        sensorsdata: plPath + "sensors/sensorsdata", //神策sdk
        sensorsheatmap: plPath + "sensors/heatmap", //神策点击sdk
        staticRolling: plPath + "staticRolling", //静态数据走马灯
        bxslider: plPath + "bxslider/bxslider",
        osSlider: plPath + "osSlider",
        magnifier: plPath + "magnifier", //电商产品详情放大镜、轮播
        raty: plPath + "jquery.raty",
        jsmodern: plPath + "jsmodern/jsmodern", //视频播放器插件
        videoPlayer: plPath + "pl_videoPlayer", //视频播放器封装插件
        lightbox: plPath + "lightbox",
        magnifier: plPath + "magnifier", //电商产品详情放大镜插件
        fullView: plPath + "threesixty", //电商产品详情360全景公共库
        fullScreenView: plPath + "threesixty.fullscreen",
        getFullView: plPath + "pl_fullView", //电商产品详情全景插件
        longbow: plPath + "longbow/longbow", //拼图验证码插件
        captcha: plPath + "pl_captcha", //拼图验证码
        phoneCodeZhCN: plPath + "phoneCode/phoneCodeCountries-zhCN",
        phoneCode: plPath + "phoneCode/phoneCode",
        jsencrypt: plPath + "jsencrypt", //rsa插件
        address: plPath + "address/address", //地址格式化方法
        addressDataZhCN: plPath + "address/locList_zh_CN", //地址数据
        addressDataEn: plPath + "address/locList_en", //地址数据
        pl_address: plPath + "address/pl_address", //地址插件
        formUtil: plPath + "formUtil", //form工具类
        pagination: plPath + "compPage", //分页
        pl_service: plPath + "services/pl_service", //在线客服
        treeSelect: plPath + "treeSelect/treeSelect",
        dataTable: plPath + "dataTable/jquery.dataTables",
        layui: plPath + "layui/layui",
        soulTable: plPath + "soulTable/config",
        slider: plPath + "slider/jqueryRange",
        filterSelect: plPath + "filterSelect/select",
        filter:plPath+"filter",
        clickCaptcha: plPath + "clickCaptcha", //点击验证码插件 
        newQrcode: plPath + "newQrcode/qrcode", //新二维码
        mall_request: plPath + "mall_request",//电商常用工具
        mall_pageInit: plPath + "mall_pageInit",//电商分页
        mall_utils: plPath + "mall_utils",//电商常用工具
        cryptojs: plPath + "cryptoJs",//静态数据走马灯
        mall_pagenation: plPath + "mall_compPage",//电商列表分页
        goodsDetailBase: plPath + "goodsDetailBase",//商品详情基础类
        goodsDetailPC: plPath + "goodsDetailPC",//商品详情PC类
        goodsDetailMB: plPath + "goodsDetailMB",//商品详情MB类
        mallGoodsList: plPath + "mallGoodsList",//商品列表
        mallRecommendList: plPath + "mallRecommendList",//为你推荐商品列表
        highLight: plPath + "pl_highLigt", //高亮
        imageCaptcha: plPath + "imageCaptcha",
        pl_imgCaptcha: plPath + "pl_imgCaptcha",
        hammer: plPath + "hammer",
        jweixin: plPath + "jweixin",
        checkAuth: plPath + "checkAuth",
        gsap: nuPath + "gsap",
        scrollTrigger: nuPath + "ScrollTrigger",
        axios: nuPath + "axios",
        partUpload: plPath + "partUpload",
        wwjssdk: nuPath + "wecom-jssdk",
        wxLogin: nuPath + "wxLogin",
        swiper11: nuPath + "swiper11/swiper-bundle", 
        locomotiveScroll: nuPath + "locomotive/locomotive-scroll",
        locomotive: plPath + "locomotive/locomotive",
        newAnimat: plPath + "newAnimat/newAnimat",
        gsapFun: plPath + "newAnimat/gsapFun",
        marked: nuPath + "marked",
    },
    shim: {
        bMap: {
            exports: "BMap"
        },
        tMap: {
            exports: "TMap"
        },
        datePicker: {
            deps: ["css!" + plPath + "datePicker/datepicker"]
        },
        bxslider: {
            deps: ["css!" + plPath + "bxslider/bxslider"]
        },
        pl_address: {
            deps: ["css!" + plPath + "address/pl_address"]
        },
        pl_service: {
            deps: ["css!" + plPath + "services/pl_service", plPath + "services/service_icon"]
        },
        treeSelect: {
            deps: ["css!" + plPath + "zTree/zTree", "css!" + plPath + "treeSelect/treeSelect", plPath + "zTree/zTree"]
        },
        dataTable: {
            deps: ["css!" + plPath + "dataTable/dataTables"]
        },
        layui: {
            deps: ["css!" + plPath + "layui/css/layui"]
        },
        soulTable: {
            deps: ["css!" + plPath + "soulTable/soulTable"]
        },
        slider: {
            deps: ["css!" + plPath + "slider/jqueryRange"]
        },
        filterSelect: {
            deps: ["css!" + plPath + "filterSelect/select"]
        },
        jsmodern: {
            deps: ["css!" + plPath + "jsmodern/jsmodern"]
        },
        newQrcode: {
            deps: [plPath + "newQrcode/qr"]
        },
        swiper11: {
            deps: ["css!" + nuPath + "swiper11/swiper-bundle"]
        },
        locomotiveScroll: {
            deps: ["css!" + nuPath + "locomotive/locomotive-scroll"]
        }
    }
})
//获取父级窗口
var getParentWindow = function () {
    try {
        return parent.zqceparentaaaa || parent
    } catch (e) {
        return window
    }
}
//是否是前台环境
var isFrontEnv = function () {
    return !(getParentWindow().$LAB != null && typeof getParentWindow().$LAB == "object")
}
//判断是否mo环境
var isMo = function () {
    return $(window).width() <= 768
}
//判断微信
var isWeixin = function(){
    var ua = navigator.userAgent.toLowerCase();  
    return ua.match(/MicroMessenger/i) == "micromessenger"
}
//判断ip
var isValidIP = function (ip) {
    var reg = /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
    return reg.test(ip)
}
//注入css并回调
var dynamicLoadCss = function (url, callback) {
    var head = document.getElementsByTagName("head")[0]
    var link = document.createElement("link")
    link.type = "text/css"
    link.rel = "stylesheet"
    link.href = url
    head.appendChild(link)
    link.onload = function () {
        if (callback && typeof callback == "function") {
            callback()
        }
    }
}
//注入js并回调
var dynamicLoadJs = function (url, callback) {
    var s = document.getElementsByTagName("script")[0]
    var script = document.createElement("script")
    script.src = url
    s.parentNode.insertBefore(script, s)
    script.onload = function () {
        if (callback && typeof callback == "function") {
            callback()
        }
    }
}
//判断ip
var noDataPrompt = function (prompt) {
    let resultStr = `
        <div class="pl_empty">
            <div>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAAA8CAYAAADxJz2MAAABQmlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSCwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAxSDAwMnAxsCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsisDwt+Tc/Paps5Y+PTC6JmkwIw1aMArpTU4mQg/QeIk5ILikoYGBgTgGzl8pICELsFyBYpAjoKyJ4BYqdD2GtA7CQI+wBYTUiQM5B9BcgWSM5ITAGynwDZOklI4ulIbKi9IMARaGRiaRBuSMCppIOS1IoSEO2cX1BZlJmeUaLgCAyhVAXPvGQ9HQUjAyMDBgZQeENUf74BDkdGMQ6EWFYMA4OZJgMDkypCLC2CgWFfEdDLuggxNSUGBu5UBoY9twsSixLhDmD8xlKcZmwEYXNvZ2Bgnfb//+dwBgZ2oJl/r////3v7//9/lzEwMN9iYDjwDQCGJ141dN9+JQAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAUKADAAQAAAABAAAAPAAAAABO6vQ5AAAECElEQVR4Ae2aW0/rMAyAMxiwcduQEAhWHnjh//8eXngAAUMINjHul3P4IuWomkqSzk7HdGKpalljx/7iJqlL68+3mCwzE1iaWTMrWgIZoDARMsAMUEhAqJ4zMAMUEhCq5wzMAIUEhOo5AzNAIQGhes7ADFBIQKjeFurXVh+NRubt7a22XozC2tqa6fV6MU3V2rSarMZcXl6a9/d3s7GxoRZA2dDj46NZWVkxh4eH5Z+TXjcG8Pb21jw9PZmjoyPTarWSBEVl7vz83Kyvr5vd3d0kfUwbbWQRub+/Nzy6BwcHyeARGANDH/TF0YQkB/jw8GCGw6EpisI+XqmD4hEuBoW5vr429J1akgJ8fn42FxcXFl6n00kdyz/7nW7H9knf+JBSkgFksSAAHqnNzc2UMVTapk/6xgd8SSVJAH59fVnHd3Z2TL/fT+V70C594wMQU336SQIQh5tcCX0kWY3xhdU5hagDZK+3vLxs9vf3U/g7k018wSd80xZVgDc3N3a+GQwG2n6K7eETcyE+aooawLu7u+9tw8SufpoOatpiK8XWBl+1RAXgeDw2vGkUxcA+KlrOadvhMQYivuKzhqi8yp2enlpflpbC4/H5+WlXZu05ks06bx9ACgm7BOTk5CTUNHhfpRrz8fER/Y7LPDSZTMzV1ZXdpwU9jGiALXzY29uLettx26wI08EmKgDphVeomAxcXV013W7XnJ2d2YBjMsYXBRlN5h0fH0f1jy2XgT67sffCz1yspRrtAA04jaoMNrAVM3g1XIxuOheAeEfGUt6SCjawNS9Re4TrBrC1tWX3ZDxOsxYaXl5e7Iq6vb1dt3u19nMDSNDAY/WUCCX8/xIg0HjZn2exQTJwTnduc6BzYNHPKgA1VtOmQWr5nAEKR04FoNCHhVbPAIXDlwFmgEICQnVRBrIRTvnFSxhbUB3fpYWF2m8idEjpiCoIB5Lqi1eQgLDB6+urtUAxgqPdbtcuSkQDBBbgOBYV2E+8XTKQkUDkAGiMRAHEMP+S5gPnuxfjSJNt8LXKX34jVpKEumVMlSc4BzI6GK3q0AVNR7RZFMFXHxwH0k1RvriCADHmg4dxKsxaH2l8zmrdG43G1mefvZi40Y/6qMRkG8owylKMKpXhWet7voA07lE/dHN56KMWsfAfryGJAli18lYZ5psr84d0a1BlW+M3BpcFgmLuT1J3RY4C6Dojrd1KHDM/OL1FOLttDIDrVGpqAXQgAEmWcQDSXbv7i3AmGzkA567rgHMxzgTQKZfPDuL0udxmXtcO0PRZwx81gFXOuJXMd0aP++Xz9DV/l7PDXZfPXPsObKSQpABTOPzbbAb3gb/N4d/mTwYoHJEMMAMUEhCq5wzMAIUEhOp/AaxH8Lm1PiS6AAAAAElFTkSuQmCC" alt="${prompt}">
                <p>${prompt}</p>
            </div>
        </div>
    `
    return resultStr
}
//获取cookie
var getCookie = function (b) {
    var a,
        c = new RegExp("(^| )" + b + "=([^;]*)(;|$)")
    if ((a = document.cookie.match(c))) {
        return unescape(a[2])
    } else {
        return null
    }
}
//存cookie
var setCookie = function (c_name, value, expiredays, pathUrl) {
    var exdate = new Date()
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) + (expiredays == null ? "" : ";expires=" + exdate.toGMTString()) + (pathUrl ? ";path=" + pathUrl : "")
}
//清除cookie
var clearCookie = function(c_name){
    setCookie(c_name,'',-1,'/')
}
//记录加载组件类型js
var $compCl = (function () {
    var initFuncs = {}
    var requireJsAry = []
    return {
        addComp: function (key, opts) {
            if (opts.init) {
                initFuncs[key] = opts.init
            }
        },
        initAll: function (fn) {
            fn({ requireJsAry: requireJsAry, initFuncs: initFuncs })
        },
        getAllInitFunc: function () {
            return initFuncs
        },
        getAllRequire: function () {
            return requireJsAry
        },
        getScope: function (id) {
            return $("#" + id) || ""
        },
        getElementScope: function (p) {
            return $("#" + p.cid + " ." + p.id) || ""
        }
    }
})()
//框架 用define
var $define = function (n, a, c) {
    define(n, a, c)
}
//框架 用require
var $require = function (n, a, c) {
    require(n, a, c)
}
/**
 * 更改require框架
 * @param obj
 * @returns
 */
var $comp = function (obj) {
    var params = obj
    for (var i = 0; i < params.lib.length; i++) {
        params.lib[i] = baseOrigin + "/npublic/js/" + params.lib[i]
    }
    function isIE() {
        //ie
        return !!window.ActiveXObject || "ActiveXObject" in window
    }
    var needPolyfill = isIE() ? "polyfill" : ""
    require([needPolyfill], function (r) {
        require(params.lib, function (obj1) {
            var scope = $compCl.getScope(params.id);
            var isTab = false, tab, isActive;
            obj1._params = params;
            obj1.scope = scope;
            obj1.init();
            scope.attr("loaded", "true");

        });
    });
};
var isIE = function() {//ie
    return (!!window.ActiveXObject || "ActiveXObject" in window)
};
var needPolyfill = isIE() ? "polyfill" : '';
var $element = function (obj,callback,ele) {
    var params = obj;
    for (var i = 0; i < params.lib.length; i++) {
        let path = params.outJs ? "" : "/npublic/eleJs/"
        params.lib[i] = baseOrigin + path + params.lib[i]
    }
    require([needPolyfill], function (r) {
        require(params.lib, function (obj1) {
            var scope = $compCl.getElementScope(params);
            obj1._params = params;
            obj1.scope = ele || scope;
            obj1.init();
            if(callback){
                callback()
            }
        })
    })
}
//调用组件js
var doCompJs = function (id) {
    var obj = $("#" + id)
    var propJson = obj.children('[name="propJson"]').val()
    if (propJson) {
        propJson = JSON.parse(propJson)
    } else {
        propJson = {}
    }
    if (!propJson.needjs) {
        return
    }
    var ncompId
    console.log("触发刷新js", id)
    if(propJson.styleId){
        ncompId = propJson.styleId
    }else{
        //组件名：c_text_list_0011611111111111
        var compA = id.split("_")
        //截取实例号
        compA[compA.length - 1] = compA[compA.length - 1].substring(0, 3)
        ncompId = compA.join("_")
    }
    //兼容组件加入个人改名问题
    if(ncompId.indexOf("_P_")>-1){
        ncompId = ncompId.split("_P_")[0]
    }
    //创建参数对象
    var param = {
        id: id,
        lib: [ncompId + ".js"]
    }
    //额外参数，隐藏input中的数据
    obj.children("input:hidden").each(function (i, e) {
        var name = $(this).attr("name")
        var val = $(this).val()
        if (val) {
            param[name] = JSON.parse(val)
        }
    })
    //执行方法
    $comp(param)
}
//调用组件js
var doElementJs = function(id,callback,cid,sd,ele) {
    var obj = $('#'+ cid +' .'+id);
    if (obj.attr('needJs')!= 'true') {
        return
    }
    var lastId = id.split("-")[1]

    //兼容子表单复制出来的表单元素
    if (lastId && lastId.indexOf("__")) {
        lastId = lastId.split("__")[0]
    }
    //兼容子表单复制出来的表单元素

    // var comp = obj.closest("div[id^='c_']");
    // if(comp && comp.children('[needjs="true"]').length != 0){
    //     console.log('组件内刷新元素js',id)
    //     return
    // }
    console.log("刷新元素js", cid, id)
    var compId = id.split("-")[0]
    //创建参数对象
    var param = {
        cid:cid,
        sd:sd,
        id: id,
        lib: [compId + ".js"]
    }
    if(obj.attr("outjs")){
        param.lib = [obj.attr("outjs")]
        param.outJs = true
    }
    //额外参数，propJson，组件中取
    var comp = $("#" + cid)
    var propJson = comp.children("input:hidden[name='propJson']").val()
    if (propJson) {
        propJson = JSON.parse(propJson)
    } else {
        propJson = {}
    }
    let tObj = {}
    if (lastId) {
        for (var i in propJson) {
            if (i.endsWith("_" + lastId)) {
                tObj[i.split("_")[0]] = propJson[i]
            }
        }
    } else {
        tObj = propJson
    }
    param.propJson = tObj
    //额外参数，隐藏input中的数据
    obj.children("input:hidden").each(function (i, e) {
        var name = $(this).attr("name")
        var val = $(this).val()
        if (val && name != "propJson") {
            try {
                val = JSON.parse(val)
            } catch (e) {}
            if (name == "i18nJson") {
                let tObj = {}
                for (var i in val) {
                    if (i.endsWith("_" + lastId)) {
                        let k = i.substring(0,i.lastIndexOf("_"))
                        tObj[k] = val[i]
                    }else if(i.indexOf("_")==-1){
                        tObj[i] = val[i]
                    }
                }
                param[name] = tObj
            } else {
                param[name] = val
            }
        }
    })
    //执行方法
    $element(param,callback,ele)
}
//获取所有组件prop
var getAllprop = function(){
    let propObj = {}
    $("[id^='c_']").each(function(){
        let propJson = $(this).children('[name="propJson"]')?$(this).children('[name="propJson"]').val():""
        if(propJson){
            propJson = JSON.parse(propJson)
            propObj[$(this).attr("id")] = propJson
        }
    })
    return propObj
}
//初始化方法
var readyFun = function () {
    if (!jQuery.fn.__ceVersion) {
        console.error("注意：禁止单独引用jquery")
    }
    if ($(".main").length >= 2) console.error("注意：禁止使用类名 main")
    if ($(".pagebox").length >= 2) console.error("注意：禁止使用类名 pagebox")
    var domain = ''
    if (__ce.env == "local") {
        domain = "http://" + tenant.makeDomain
    }
var lann = tenant.language == 'hn' ? 'es' : tenant.language
var interwords = domain + "/npublic/commonjs/language/" + lann + ".js"
    $require([needPolyfill, interwords], function (p, l) {
        $require(["pl_readyload"], function (r) {
            r.ready(function () {
                //运行组件js
                $("div[id^='c_']").each(function () {
                    var id = $(this).attr("id")
                    if (!/^c_grid-/.test(id)&&!/^c_popbox/.test(id)&&!/^c_videoContainer/.test(id)) {
                        doCompJs(id)
                        //运行元素js
                        if(!/^c_magiccube/.test(id)&&!/^c_drawer/.test(id)&&!/^c_flipPage/.test(id)){
                            getElements(id).forEach(e=>{
                                var classArr = $(e).attr("class").split(/\s+/)
                                var eId = classArr.find(n=>n.lastIndexOf('e_', 0) === 0)

                                //循环体中
                                let loop = $(e).parents('[class*="e_loop-"]'),sd
                                let loopSub = $(e).parents('[class*="e_loop_sub-"]')
                                if(loop.length){
                                    let loopClass = loop.attr("class")
                                    let loopClassArr = loopClass.split(/\s+/)
                                    let loopId = ''
                                    loopClassArr.forEach(e=>{
                                        if(/^e_loop/.test(e)){
                                            loopId = e
                                        }
                                    })
                                    let ind = $(e).parents('.p_loopitem').index()
                                    sd = '#'+id+' .'+loopId+' .p_list .p_loopitem:nth-child('+(ind+1)+') .'+eId
                                }
                                if(loopSub.length){
                                    let loopClass = loopSub.attr("class")
                                    let loopClassArr = loopClass.split(/\s+/)
                                    let loopId = ''
                                    loopClassArr.forEach(e=>{
                                        if(/^e_loop/.test(e)){
                                            loopId = e
                                        }
                                    })
                                    let ind = $(e).parents('.p_loopItem').index()
                                    sd = '#'+id+' .'+loopId+' .p_loopItem:nth-child('+(ind+1)+') .'+eId
                                }

                                if(eId){
                                    doElementJs(eId,function(){},id,sd,$(e))
                                }
                            })
                        }   
                    }
                })


                $("div[id^='c_popbox']").each((index, item) => {
                    let _item = $(item)
                    //弹窗隐藏
                    _item.off("click").on('click', '.p_close', function () {
                        _item.hide().removeClass('fixed')

                        let v = _item.find("[class^='e_video-'] video,[class^='e_banner'] video")
                        if(v.length){
                            v.each(function(j,el){
                                $(el).get(0).pause()
                            })
                        }

                    })
                    //弹窗自动打开
                    if (_item.find(".pop_wrapper").attr("auto-play")==="true" && isFrontEnv()) {
                        let id = _item.attr("id").split("-")[1]
                        openDialog(id)
                    }
                    //点击遮罩层关闭弹窗
                    _item.on("click",".p_background",function(){
                        if($(this).parent().attr("bg-close")==="true"){
                            _item.find(".p_close").trigger("click")
                        }
                    })
                })

                r.lazyImg() //延时加载图片
            })
        })
    })
}

//选择元素
var getElements = function (id) {
    var eles = $("#" + id).find("[class*=e_]"),
        eleArr = []
    eles.each(function (i, e) {
        var classArr = $(e).attr("class").split(/\s+/)
        classArr.forEach(n => {
            if (n.lastIndexOf("e_", 0) === 0) {
                eleArr.push(e)
            }
        })
    })
    return eleArr
}

//页面组件交互
var handlerComp = function (compId, act) {
    var obj = $("#" + compId)
    if (act == "show") {
        obj.show()
    } else if (act == "hide") {
        obj.hide()
    } else if (act == "toggle") {
        obj.toggle()
    }
}

//弹窗打开
var openDialog = function (id) {
    let compDiv = $("#c_popbox-" + id);
    compDiv.show().addClass("fixed");
    let height = compDiv.find(".pop_wrapper").height();
    compDiv.css({
        "margin-top": -(height / 2),
        "margin-left": "auto",
        "margin-right": "auto",
        "margin-bottom": 0
    })
    compDiv.find(".p_content").trigger("onVisible");
}

//弹窗预览pdf
var popPreview = function(url){
    let pdfIfram=`
        <div class="pdfPreviewIframe">
            <a href="javascript:;" class="btn btn-primary pdfPreviewClose">${i18n.close}</a>
            <iframe frameborder="0" src="${url}"></iframe>
        </div>
    `
    $('body').append(pdfIfram)
    $(".pdfPreviewIframe").off('click').on('click','.pdfPreviewClose',function(){
        $(".pdfPreviewIframe").remove()
    })
}

//pdf预览方法
var pdfPreview = function(url,id,k,fname,nodownload,noprint,xin) {
    localStorage.setItem("nodownload"+tenant.tenantId,nodownload?"true":"false")
    localStorage.setItem("noprint"+tenant.tenantId,noprint?"true":"false")
    let turl = url.indexOf("?")>-1 ? url.split("?")[0] : url
    turl = turl.indexOf("#")>-1 ? turl.split("#")[0] : turl
    if(turl.endsWith(".pdf") || turl.endsWith(".PDF")){ // 是PDF 就新窗口打开
        $require(["pl_util"], function () {
            let aurl = $.handleDataFile(url)
            if(isIE()){
                window.open(aurl, "_blank")
                return
            }
            let nUrl
            if(xin){
                if(k && id){
                    nUrl = `/viewfilebizce/${id}/${fname?fname:"0.pdf"}`
                    if(fname){
                        sessionStorage.setItem(id,fname)
                    }
                }else{
                    nUrl = `/viewfilebizce/h/${encodeURIComponent(aurl)}`
                }
            }else{
                if(k && id){
                    nUrl = "//opdfjs/web/viewer076c.html?u=" + id
                    if(fname){
                        nUrl = nUrl + "&fileName=" + fname
                        sessionStorage.setItem(id,fname)
                    }
                }else{
                    nUrl = "//opdfjs/web/viewer92bd.html?file=" + encodeURIComponent(aurl)
                }
            }
            if(isWeixin()){
                popPreview(nUrl)
                return
            }
            window.open(nUrl, "_blank")
        })
    }else{
        console.log('非pdf文件')
        fileDownloadFun(url,fname)
    }
}
//截取地址中domain
var getDomain = function(file){
    let domain = file.split("//")[1].split("/")[0]
    var domainArr = domain.split(".");
    var preDomain=domainArr[domainArr.length - 2] + "." + domainArr[domainArr.length - 1];
    if(/(com|cn|org|net|xin|edu|ac)\..*/.test(preDomain)){
        preDomain=domainArr[domainArr.length - 3]+"."+domainArr[domainArr.length - 2] + "." + domainArr[domainArr.length - 1];
    }
    return preDomain
}
//文件下载方法
var fileDownloadFun = function(url,name,key){
    if(!url){
        return
    }
    let allowArr = ['site.cn','thefastfile.com','thefastvideo.com','thefastimg.com','yun300.cn','faststatics.com']
    allowArr.push(getDomain(location.href))
    if((/^http/.test(url) && allowArr.indexOf(getDomain(url))==-1) || /^ftp/.test(url)){
        console.log("非法文件")
        return
    }
    var a = document.createElement("a")
    if(key){
        url = url.replace(/\%/g,"%25")
        let nurl = `/downfilebizce/get?n=${encodeURIComponent(url)}`
        a.href = nurl
    }else{
        a.download = name // 设置下载文件名
        a.href = url
    }
    a.target = "_blank"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a) //释放标签
}

//处理电商图片懒加载
var getShopImg = function (url, attr, isLazy) {
    var str = ''
    if (/^https\:\/\/omo\.aiyouyi\.cn\//.test(url)) {
        if (!window.imgRandom) {
            window.imgRandom = new Map()
        }
        let resNum = ''
        let num = window.imgRandom.get('img')
        if (num == 3) {
            resNum = 1
        } else if (num == 1) {
            resNum = 2
        } else if (num == 2) {
            resNum = 3
        } else {
            resNum = Math.ceil(Math.random() * 3)
        }
        window.imgRandom.set('img', resNum)
        url = url.replace('https://omo.aiyouyi.cn/', `https://img${resNum}.aiyouyi.cn/`)
    }
    if (!isLazy || !isFrontEnv()) {
        str = `
            <img src="${url}" ${attr} />
        `
    } else {
        str = `
            <img src="/npublic/img/s.png" lazy="${url}" ${attr} />
        `
    }
    return str
}

//页面初始化
if (window.addEventListener) {
    window.addEventListener("load", readyFun)
} else if (window.attachEvent) {
    window.attachEvent("onload", readyFun)
}
