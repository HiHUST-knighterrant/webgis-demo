(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-713a5912"],{"0d9e":function(e,t,n){},"107c":function(e,t,n){var r=n("d039"),o=n("da84"),i=o.RegExp;e.exports=r((function(){var e=i("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},1276:function(e,t,n){"use strict";var r=n("d784"),o=n("44e7"),i=n("825a"),a=n("1d80"),c=n("4840"),s=n("8aa5"),u=n("50c4"),l=n("577e"),f=n("dc4a"),h=n("14c3"),p=n("9263"),d=n("9f7f"),m=n("d039"),g=d.UNSUPPORTED_Y,b=[].push,v=Math.min,y=4294967295,E=!m((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));r("split",(function(e,t,n){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var r=l(a(this)),i=void 0===n?y:n>>>0;if(0===i)return[];if(void 0===e)return[r];if(!o(e))return t.call(r,e,i);var c,s,u,f=[],h=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=new RegExp(e.source,h+"g");while(c=p.call(m,r)){if(s=m.lastIndex,s>d&&(f.push(r.slice(d,c.index)),c.length>1&&c.index<r.length&&b.apply(f,c.slice(1)),u=c[0].length,d=s,f.length>=i))break;m.lastIndex===c.index&&m.lastIndex++}return d===r.length?!u&&m.test("")||f.push(""):f.push(r.slice(d)),f.length>i?f.slice(0,i):f}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var o=a(this),i=void 0==t?void 0:f(t,e);return i?i.call(t,o,n):r.call(l(o),t,n)},function(e,o){var a=i(this),f=l(e),p=n(r,a,f,o,r!==t);if(p.done)return p.value;var d=c(a,RegExp),m=a.unicode,b=(a.ignoreCase?"i":"")+(a.multiline?"m":"")+(a.unicode?"u":"")+(g?"g":"y"),E=new d(g?"^(?:"+a.source+")":a,b),x=void 0===o?y:o>>>0;if(0===x)return[];if(0===f.length)return null===h(E,f)?[f]:[];var w=0,O=0,T=[];while(O<f.length){E.lastIndex=g?0:O;var A,R=h(E,g?f.slice(O):f);if(null===R||(A=v(u(E.lastIndex+(g?O:0)),f.length))===w)O=s(f,O,m);else{if(T.push(f.slice(w,O)),T.length===x)return T;for(var L=1;L<=R.length-1;L++)if(T.push(R[L]),T.length===x)return T;O=w=A}}return T.push(f.slice(w)),T}]}),!E,g)},"14c3":function(e,t,n){var r=n("825a"),o=n("1626"),i=n("c6b6"),a=n("9263");e.exports=function(e,t){var n=e.exec;if(o(n)){var c=n.call(e,t);return null!==c&&r(c),c}if("RegExp"===i(e))return a.call(e,t);throw TypeError("RegExp#exec called on incompatible receiver")}},"44e7":function(e,t,n){var r=n("861d"),o=n("c6b6"),i=n("b622"),a=i("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},"498a":function(e,t,n){"use strict";var r=n("23e7"),o=n("58a8").trim,i=n("c8d2");r({target:"String",proto:!0,forced:i("trim")},{trim:function(){return o(this)}})},5899:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(e,t,n){var r=n("1d80"),o=n("577e"),i=n("5899"),a="["+i+"]",c=RegExp("^"+a+a+"*"),s=RegExp(a+a+"*$"),u=function(e){return function(t){var n=o(r(t));return 1&e&&(n=n.replace(c,"")),2&e&&(n=n.replace(s,"")),n}};e.exports={start:u(1),end:u(2),trim:u(3)}},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},"91bb":function(e,t,n){"use strict";n("0d9e")},9263:function(e,t,n){"use strict";var r=n("577e"),o=n("ad6d"),i=n("9f7f"),a=n("5692"),c=n("7c73"),s=n("69f3").get,u=n("fce3"),l=n("107c"),f=RegExp.prototype.exec,h=a("native-string-replace",String.prototype.replace),p=f,d=function(){var e=/a/,t=/b*/g;return f.call(e,"a"),f.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),m=i.UNSUPPORTED_Y||i.BROKEN_CARET,g=void 0!==/()??/.exec("")[1],b=d||g||m||u||l;b&&(p=function(e){var t,n,i,a,u,l,b,v=this,y=s(v),E=r(e),x=y.raw;if(x)return x.lastIndex=v.lastIndex,t=p.call(x,E),v.lastIndex=x.lastIndex,t;var w=y.groups,O=m&&v.sticky,T=o.call(v),A=v.source,R=0,L=E;if(O&&(T=T.replace("y",""),-1===T.indexOf("g")&&(T+="g"),L=E.slice(v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==E.charAt(v.lastIndex-1))&&(A="(?: "+A+")",L=" "+L,R++),n=new RegExp("^(?:"+A+")",T)),g&&(n=new RegExp("^"+A+"$(?!\\s)",T)),d&&(i=v.lastIndex),a=f.call(O?n:v,L),O?a?(a.input=a.input.slice(R),a[0]=a[0].slice(R),a.index=v.lastIndex,v.lastIndex+=a[0].length):v.lastIndex=0:d&&a&&(v.lastIndex=v.global?a.index+a[0].length:i),g&&a&&a.length>1&&h.call(a[0],n,(function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(a[u]=void 0)})),a&&w)for(a.groups=l=c(null),u=0;u<w.length;u++)b=w[u],l[b[0]]=a[b[1]];return a}),e.exports=p},"96cf":function(e,t,n){var r=function(e){"use strict";var t,n=Object.prototype,r=n.hasOwnProperty,o="function"===typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(I){s=function(e,t,n){return e[t]=n}}function u(e,t,n,r){var o=t&&t.prototype instanceof g?t:g,i=Object.create(o.prototype),a=new j(r||[]);return i._invoke=A(e,n,a),i}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(I){return{type:"throw",arg:I}}}e.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",d="completed",m={};function g(){}function b(){}function v(){}var y={};s(y,i,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(k([])));x&&x!==n&&r.call(x,i)&&(y=x);var w=v.prototype=g.prototype=Object.create(y);function O(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function T(e,t){function n(o,i,a,c){var s=l(e[o],e,i);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"===typeof f&&r.call(f,"__await")?t.resolve(f.__await).then((function(e){n("next",e,a,c)}),(function(e){n("throw",e,a,c)})):t.resolve(f).then((function(e){u.value=e,a(u)}),(function(e){return n("throw",e,a,c)}))}c(s.arg)}var o;function i(e,r){function i(){return new t((function(t,o){n(e,r,t,o)}))}return o=o?o.then(i,i):i()}this._invoke=i}function A(e,t,n){var r=f;return function(o,i){if(r===p)throw new Error("Generator is already running");if(r===d){if("throw"===o)throw i;return N()}n.method=o,n.arg=i;while(1){var a=n.delegate;if(a){var c=R(a,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===f)throw r=d,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=p;var s=l(e,t,n);if("normal"===s.type){if(r=n.done?d:h,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r=d,n.method="throw",n.arg=s.arg)}}}function R(e,n){var r=e.iterator[n.method];if(r===t){if(n.delegate=null,"throw"===n.method){if(e.iterator["return"]&&(n.method="return",n.arg=t,R(e,n),"throw"===n.method))return m;n.method="throw",n.arg=new TypeError("The iterator does not provide a 'throw' method")}return m}var o=l(r,e.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,m;var i=o.arg;return i?i.done?(n[e.resultName]=i.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,m):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,m)}function L(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function P(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function j(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(L,this),this.reset(!0)}function k(e){if(e){var n=e[i];if(n)return n.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var o=-1,a=function n(){while(++o<e.length)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return a.next=a}}return{next:N}}function N(){return{value:t,done:!0}}return b.prototype=v,s(w,"constructor",v),s(v,"constructor",b),b.displayName=s(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,c,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},O(T.prototype),s(T.prototype,a,(function(){return this})),e.AsyncIterator=T,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new T(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},O(w),s(w,c,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){while(t.length){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=k,j.prototype={constructor:j,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(P),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0],t=e.completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(s&&u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),m},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),P(n),m}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;P(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:k(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),m}},e}(e.exports);try{regeneratorRuntime=r}catch(o){"object"===typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}},"9f7f":function(e,t,n){var r=n("d039"),o=n("da84"),i=o.RegExp;t.UNSUPPORTED_Y=r((function(){var e=i("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=i("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var r=n("23e7"),o=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},bd3b:function(e,t,n){"use strict";n.r(t);var r=n("7a23"),o=function(e){return Object(r["pushScopeId"])("data-v-d306d4be"),e=e(),Object(r["popScopeId"])(),e},i={class:"container"},a=o((function(){return Object(r["createElementVNode"])("canvas",{id:"c"},null,-1)})),c=[a];function s(e,t,n,o,a,s){return Object(r["openBlock"])(),Object(r["createElementBlock"])("div",i,c)}n("d3b7");function u(e,t,n,r,o,i,a){try{var c=e[i](a),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){u(i,r,o,a,c,"next",e)}function c(e){u(i,r,o,a,c,"throw",e)}a(void 0)}))}}n("96cf"),n("159b"),n("ac1f"),n("1276"),n("498a"),n("d81d"),n("5cc6"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7");var f=n("5a89");const h={type:"change"},p={type:"start"},d={type:"end"};class m extends f["g"]{constructor(e,t){super(),void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new f["G"],this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:f["l"].ROTATE,MIDDLE:f["l"].DOLLY,RIGHT:f["l"].PAN},this.touches={ONE:f["A"].ROTATE,TWO:f["A"].DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",ue),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(h),n.update(),o=r.NONE},this.update=function(){const t=new f["G"],p=(new f["w"]).setFromUnitVectors(e.up,new f["G"](0,1,0)),d=p.clone().invert(),m=new f["G"],g=new f["w"],b=2*Math.PI;return function(){const e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(p),a.setFromVector3(t),n.autoRotate&&o===r.NONE&&P(R()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let f=n.minAzimuthAngle,v=n.maxAzimuthAngle;return isFinite(f)&&isFinite(v)&&(f<-Math.PI?f+=b:f>Math.PI&&(f-=b),v<-Math.PI?v+=b:v>Math.PI&&(v-=b),a.theta=f<=v?Math.max(f,Math.min(v,a.theta)):a.theta>(f+v)/2?Math.max(f,a.theta):Math.min(v,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=s,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),!0===n.enableDamping?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),t.setFromSpherical(a),t.applyQuaternion(d),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),s=1,!!(l||m.distanceToSquared(n.object.position)>i||8*(1-g.dot(n.object.quaternion))>i)&&(n.dispatchEvent(h),m.copy(n.object.position),g.copy(n.object.quaternion),l=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",pe),n.domElement.removeEventListener("pointerdown",te),n.domElement.removeEventListener("pointercancel",oe),n.domElement.removeEventListener("wheel",se),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",re),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",ue)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const i=1e-6,a=new f["z"],c=new f["z"];let s=1;const u=new f["G"];let l=!1;const m=new f["F"],g=new f["F"],b=new f["F"],v=new f["F"],y=new f["F"],E=new f["F"],x=new f["F"],w=new f["F"],O=new f["F"],T=[],A={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function L(){return Math.pow(.95,n.zoomSpeed)}function P(e){c.theta-=e}function j(e){c.phi-=e}const k=function(){const e=new f["G"];return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),u.add(e)}}(),N=function(){const e=new f["G"];return function(t,r){!0===n.screenSpacePanning?e.setFromMatrixColumn(r,1):(e.setFromMatrixColumn(r,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),u.add(e)}}(),I=function(){const e=new f["G"];return function(t,r){const o=n.domElement;if(n.object.isPerspectiveCamera){const i=n.object.position;e.copy(i).sub(n.target);let a=e.length();a*=Math.tan(n.object.fov/2*Math.PI/180),k(2*t*a/o.clientHeight,n.object.matrix),N(2*r*a/o.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(k(t*(n.object.right-n.object.left)/n.object.zoom/o.clientWidth,n.object.matrix),N(r*(n.object.top-n.object.bottom)/n.object.zoom/o.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function _(e){n.object.isPerspectiveCamera?s/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function S(e){n.object.isPerspectiveCamera?s*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),l=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function M(e){m.set(e.clientX,e.clientY)}function D(e){x.set(e.clientX,e.clientY)}function G(e){v.set(e.clientX,e.clientY)}function H(e){g.set(e.clientX,e.clientY),b.subVectors(g,m).multiplyScalar(n.rotateSpeed);const t=n.domElement;P(2*Math.PI*b.x/t.clientHeight),j(2*Math.PI*b.y/t.clientHeight),m.copy(g),n.update()}function Y(e){w.set(e.clientX,e.clientY),O.subVectors(w,x),O.y>0?_(L()):O.y<0&&S(L()),x.copy(w),n.update()}function B(e){y.set(e.clientX,e.clientY),E.subVectors(y,v).multiplyScalar(n.panSpeed),I(E.x,E.y),v.copy(y),n.update()}function F(){}function U(e){e.deltaY<0?S(L()):e.deltaY>0&&_(L()),n.update()}function z(e){let t=!1;switch(e.code){case n.keys.UP:I(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:I(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:I(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:I(-n.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),n.update())}function C(){if(1===T.length)m.set(T[0].pageX,T[0].pageY);else{const e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);m.set(e,t)}}function X(){if(1===T.length)v.set(T[0].pageX,T[0].pageY);else{const e=.5*(T[0].pageX+T[1].pageX),t=.5*(T[0].pageY+T[1].pageY);v.set(e,t)}}function Z(){const e=T[0].pageX-T[1].pageX,t=T[0].pageY-T[1].pageY,n=Math.sqrt(e*e+t*t);x.set(0,n)}function K(){n.enableZoom&&Z(),n.enablePan&&X()}function q(){n.enableZoom&&Z(),n.enableRotate&&C()}function V(e){if(1==T.length)g.set(e.pageX,e.pageY);else{const t=be(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);g.set(n,r)}b.subVectors(g,m).multiplyScalar(n.rotateSpeed);const t=n.domElement;P(2*Math.PI*b.x/t.clientHeight),j(2*Math.PI*b.y/t.clientHeight),m.copy(g)}function W(e){if(1===T.length)y.set(e.pageX,e.pageY);else{const t=be(e),n=.5*(e.pageX+t.x),r=.5*(e.pageY+t.y);y.set(n,r)}E.subVectors(y,v).multiplyScalar(n.panSpeed),I(E.x,E.y),v.copy(y)}function $(e){const t=be(e),r=e.pageX-t.x,o=e.pageY-t.y,i=Math.sqrt(r*r+o*o);w.set(0,i),O.set(0,Math.pow(w.y/x.y,n.zoomSpeed)),_(O.y),x.copy(w)}function J(e){n.enableZoom&&$(e),n.enablePan&&W(e)}function Q(e){n.enableZoom&&$(e),n.enableRotate&&V(e)}function ee(){}function te(e){!1!==n.enabled&&(0===T.length&&(n.domElement.setPointerCapture(e.pointerId),n.domElement.addEventListener("pointermove",ne),n.domElement.addEventListener("pointerup",re)),de(e),"touch"===e.pointerType?le(e):ie(e))}function ne(e){!1!==n.enabled&&("touch"===e.pointerType?fe(e):ae(e))}function re(e){!1!==n.enabled&&("touch"===e.pointerType?he():ce(e),me(e),0===T.length&&(n.domElement.releasePointerCapture(e.pointerId),n.domElement.removeEventListener("pointermove",ne),n.domElement.removeEventListener("pointerup",re)))}function oe(e){me(e)}function ie(e){let t;switch(e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case f["l"].DOLLY:if(!1===n.enableZoom)return;D(e),o=r.DOLLY;break;case f["l"].ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;G(e),o=r.PAN}else{if(!1===n.enableRotate)return;M(e),o=r.ROTATE}break;case f["l"].PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;M(e),o=r.ROTATE}else{if(!1===n.enablePan)return;G(e),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(p)}function ae(e){if(!1!==n.enabled)switch(o){case r.ROTATE:if(!1===n.enableRotate)return;H(e);break;case r.DOLLY:if(!1===n.enableZoom)return;Y(e);break;case r.PAN:if(!1===n.enablePan)return;B(e);break}}function ce(e){F(e),n.dispatchEvent(d),o=r.NONE}function se(e){!1===n.enabled||!1===n.enableZoom||o!==r.NONE&&o!==r.ROTATE||(e.preventDefault(),n.dispatchEvent(p),U(e),n.dispatchEvent(d))}function ue(e){!1!==n.enabled&&!1!==n.enablePan&&z(e)}function le(e){switch(ge(e),T.length){case 1:switch(n.touches.ONE){case f["A"].ROTATE:if(!1===n.enableRotate)return;C(),o=r.TOUCH_ROTATE;break;case f["A"].PAN:if(!1===n.enablePan)return;X(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(n.touches.TWO){case f["A"].DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;K(),o=r.TOUCH_DOLLY_PAN;break;case f["A"].DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;q(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&n.dispatchEvent(p)}function fe(e){switch(ge(e),o){case r.TOUCH_ROTATE:if(!1===n.enableRotate)return;V(e),n.update();break;case r.TOUCH_PAN:if(!1===n.enablePan)return;W(e),n.update();break;case r.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;J(e),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;Q(e),n.update();break;default:o=r.NONE}}function he(e){ee(e),n.dispatchEvent(d),o=r.NONE}function pe(e){!1!==n.enabled&&e.preventDefault()}function de(e){T.push(e)}function me(e){delete A[e.pointerId];for(let t=0;t<T.length;t++)if(T[t].pointerId==e.pointerId)return void T.splice(t,1)}function ge(e){let t=A[e.pointerId];void 0===t&&(t=new f["F"],A[e.pointerId]=t),t.set(e.pageX,e.pageY)}function be(e){const t=e.pointerId===T[0].pointerId?T[1]:T[0];return A[t.pointerId]}n.domElement.addEventListener("contextmenu",pe),n.domElement.addEventListener("pointerdown",te),n.domElement.addEventListener("pointercancel",oe),n.domElement.addEventListener("wheel",se,{passive:!1}),this.update()}}function g(e,t=!1){const n=null!==e[0].index,r=new Set(Object.keys(e[0].attributes)),o=new Set(Object.keys(e[0].morphAttributes)),i={},a={},c=e[0].morphTargetsRelative,s=new f["d"];let u=0;for(let l=0;l<e.length;++l){const f=e[l];let h=0;if(n!==(null!==f.index))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const e in f.attributes){if(!r.has(e))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+'. All geometries must have compatible attributes; make sure "'+e+'" attribute exists among all geometries, or in none of them.'),null;void 0===i[e]&&(i[e]=[]),i[e].push(f.attributes[e]),h++}if(h!==r.size)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". Make sure all geometries have the same number of attributes."),null;if(c!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const e in f.morphAttributes){if(!o.has(e))return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+".  .morphAttributes must be consistent throughout all geometries."),null;void 0===a[e]&&(a[e]=[]),a[e].push(f.morphAttributes[e])}if(s.userData.mergedUserData=s.userData.mergedUserData||[],s.userData.mergedUserData.push(f.userData),t){let e;if(n)e=f.index.count;else{if(void 0===f.attributes.position)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed with geometry at index "+l+". The geometry must have either an index or a position attribute"),null;e=f.attributes.position.count}s.addGroup(u,e,l),u+=e}}if(n){let t=0;const n=[];for(let r=0;r<e.length;++r){const o=e[r].index;for(let e=0;e<o.count;++e)n.push(o.getX(e)+t);t+=e[r].attributes.position.count}s.setIndex(n)}for(const l in i){const e=b(i[l]);if(!e)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+l+" attribute."),null;s.setAttribute(l,e)}for(const l in a){const e=a[l][0].length;if(0===e)break;s.morphAttributes=s.morphAttributes||{},s.morphAttributes[l]=[];for(let t=0;t<e;++t){const e=[];for(let r=0;r<a[l].length;++r)e.push(a[l][r][t]);const n=b(e);if(!n)return console.error("THREE.BufferGeometryUtils: .mergeBufferGeometries() failed while trying to merge the "+l+" morphAttribute."),null;s.morphAttributes[l].push(n)}}return s}function b(e){let t,n,r,o=0;for(let c=0;c<e.length;++c){const i=e[c];if(i.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(void 0===t&&(t=i.array.constructor),t!==i.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(void 0===n&&(n=i.itemSize),n!==i.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(void 0===r&&(r=i.normalized),r!==i.normalized)return console.error("THREE.BufferGeometryUtils: .mergeBufferAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;o+=i.array.length}const i=new t(o);let a=0;for(let c=0;c<e.length;++c)i.set(e[c].array,a),a+=e[c].array.length;return new f["c"](i,n,r)}var v={mounted:function(){this.init()},methods:{init:function(){var e=document.querySelector("#c"),t=new f["H"]({canvas:e}),n=60,r=2,o=.1,i=10,a=new f["r"](n,r,o,i);a.position.z=2.5;var c=new m(a,e);c.enableDamping=!0,c.enablePan=!1,c.minDistance=1.2,c.maxDistance=4,c.update();var s=new f["x"];s.background=new f["e"]("black");var u=new f["B"],h=u.load("https://threejsfundamentals.org/threejs/resources/images/world.jpg",O),p=new f["y"](1,64,32),d=new f["o"]({map:h});function b(e){return v.apply(this,arguments)}function v(){return v=l(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return n=e.sent,e.abrupt("return",n.text());case 4:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}function y(e){var t,n,r=[],o={data:r};return e.split("\n").forEach((function(e){var i=e.trim().split(/\s+/);if(2===i.length)o[i[0]]=parseFloat(i[1]);else if(i.length>2){var a=i.map((function(e){var r=parseFloat(e);if(r!==o.NODATA_value)return t=Math.max(void 0===t?r:t,r),n=Math.min(void 0===n?r:n,r),r}));r.push(a)}})),Object.assign(o,{min:n,max:t})}function E(e){var t=e.min,n=e.max,r=e.data,o=n-t,i=new f["q"];s.add(i);var a=new f["q"];i.add(a);var c=new f["q"];c.position.z=1,a.add(c);var u=new f["q"];u.position.z=.5,c.add(u);var l=new f["e"],h=.5*Math.PI,p=-.135*Math.PI,d=[];r.forEach((function(n,r){n.forEach((function(n,s){if(void 0!==n){var m=(n-t)/o,g=1,b=1,v=1,y=new f["b"](g,b,v);i.rotation.y=f["m"].degToRad(s+e.xllcorner)+h,a.rotation.x=f["m"].degToRad(r+e.yllcorner)+p,c.scale.set(.005,.005,f["m"].lerp(.01,.5,m)),u.updateWorldMatrix(!0,!1),y.applyMatrix4(u.matrixWorld);var E=f["m"].lerp(.7,.3,m),x=1,w=f["m"].lerp(.4,1,m);l.setHSL(E,x,w);var O=l.toArray().map((function(e){return 255*e})),T=y.getAttribute("position").count,A=3,R=new Uint8Array(A*T);R.forEach((function(e,t){R[t]=O[t%3]}));var L=!0,P=new f["c"](R,A,L);y.setAttribute("color",P),d.push(y)}}))}));var m=g(d,!1),b=new f["o"]({vertexColors:!0}),v=new f["n"](m,b);s.add(v)}function x(e){var t=e.domElement,n=t.clientWidth,r=t.clientHeight,o=t.width!==n||t.height!==r;return o&&e.setSize(n,r,!1),o}s.add(new f["n"](p,d)),b("https://threejsfundamentals.org/threejs/resources/data/gpw/gpw_v4_basic_demographic_characteristics_rev10_a000_014mt_2010_cntm_1_deg.asc").then(y).then(E).then(O);var w=!1;function O(){if(w=void 0,x(t)){var e=t.domElement;a.aspect=e.clientWidth/e.clientHeight,a.updateProjectionMatrix()}c.update(),t.render(s,a)}function T(){w||(w=!0,requestAnimationFrame(O))}O(),c.addEventListener("change",T),window.addEventListener("resize",T)}}},y=(n("91bb"),n("6b0d")),E=n.n(y);const x=E()(v,[["render",s],["__scopeId","data-v-d306d4be"]]);t["default"]=x},c8d2:function(e,t,n){var r=n("5e77").PROPER,o=n("d039"),i=n("5899"),a="​᠎";e.exports=function(e){return o((function(){return!!i[e]()||a[e]()!==a||r&&i[e].name!==e}))}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("6eeb"),o=n("9263"),i=n("d039"),a=n("b622"),c=n("9112"),s=a("species"),u=RegExp.prototype;e.exports=function(e,t,n,l){var f=a(e),h=!i((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),p=h&&!i((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[s]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!h||!p||n){var d=/./[f],m=t(f,""[e],(function(e,t,n,r,i){var a=t.exec;return a===o||a===u.exec?h&&!i?{done:!0,value:d.call(t,n,r)}:{done:!0,value:e.call(n,t,r)}:{done:!1}}));r(String.prototype,e,m[0]),r(u,f,m[1])}l&&c(u[f],"sham",!0)}},d81d:function(e,t,n){"use strict";var r=n("23e7"),o=n("b727").map,i=n("1dde"),a=i("map");r({target:"Array",proto:!0,forced:!a},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},fce3:function(e,t,n){var r=n("d039"),o=n("da84"),i=o.RegExp;e.exports=r((function(){var e=i(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);