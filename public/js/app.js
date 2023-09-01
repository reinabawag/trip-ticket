/*! For license information please see app.js.LICENSE.txt */
(self.webpackChunk=self.webpackChunk||[]).push([[773],{7745:(t,r,e)=>{"use strict";var n,o,i=e(821),a=e(8748);function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function c(){c=function(){return r};var t,r={},e=Object.prototype,n=e.hasOwnProperty,o=Object.defineProperty||function(t,r,e){t[r]=e.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",s=i.asyncIterator||"@@asyncIterator",f=i.toStringTag||"@@toStringTag";function l(t,r,e){return Object.defineProperty(t,r,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[r]}try{l({},"")}catch(t){l=function(t,r,e){return t[r]=e}}function h(t,r,e,n){var i=r&&r.prototype instanceof w?r:w,a=Object.create(i.prototype),u=new G(n||[]);return o(a,"_invoke",{value:S(t,e,u)}),a}function p(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(t){return{type:"throw",arg:t}}}r.wrap=h;var v="suspendedStart",y="suspendedYield",d="executing",g="completed",m={};function w(){}function b(){}function L(){}var x={};l(x,a,(function(){return this}));var E=Object.getPrototypeOf,k=E&&E(E(F([])));k&&k!==e&&n.call(k,a)&&(x=k);var O=L.prototype=w.prototype=Object.create(x);function _(t){["next","throw","return"].forEach((function(r){l(t,r,(function(t){return this._invoke(r,t)}))}))}function P(t,r){function e(o,i,a,c){var s=p(t[o],t,i);if("throw"!==s.type){var f=s.arg,l=f.value;return l&&"object"==u(l)&&n.call(l,"__await")?r.resolve(l.__await).then((function(t){e("next",t,a,c)}),(function(t){e("throw",t,a,c)})):r.resolve(l).then((function(t){f.value=t,a(f)}),(function(t){return e("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,n){function o(){return new r((function(r,o){e(t,n,r,o)}))}return i=i?i.then(o,o):o()}})}function S(r,e,n){var o=v;return function(i,a){if(o===d)throw new Error("Generator is already running");if(o===g){if("throw"===i)throw a;return{value:t,done:!0}}for(n.method=i,n.arg=a;;){var u=n.delegate;if(u){var c=j(u,n);if(c){if(c===m)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(o===v)throw o=g,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);o=d;var s=p(r,e,n);if("normal"===s.type){if(o=n.done?g:y,s.arg===m)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(o=g,n.method="throw",n.arg=s.arg)}}}function j(r,e){var n=e.method,o=r.iterator[n];if(o===t)return e.delegate=null,"throw"===n&&r.iterator.return&&(e.method="return",e.arg=t,j(r,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),m;var i=p(o,r.iterator,e.arg);if("throw"===i.type)return e.method="throw",e.arg=i.arg,e.delegate=null,m;var a=i.arg;return a?a.done?(e[r.resultName]=a.value,e.next=r.nextLoc,"return"!==e.method&&(e.method="next",e.arg=t),e.delegate=null,m):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,m)}function N(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function T(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function G(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(N,this),this.reset(!0)}function F(r){if(r||""===r){var e=r[a];if(e)return e.call(r);if("function"==typeof r.next)return r;if(!isNaN(r.length)){var o=-1,i=function e(){for(;++o<r.length;)if(n.call(r,o))return e.value=r[o],e.done=!1,e;return e.value=t,e.done=!0,e};return i.next=i}}throw new TypeError(u(r)+" is not iterable")}return b.prototype=L,o(O,"constructor",{value:L,configurable:!0}),o(L,"constructor",{value:b,configurable:!0}),b.displayName=l(L,f,"GeneratorFunction"),r.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===b||"GeneratorFunction"===(r.displayName||r.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,L):(t.__proto__=L,l(t,f,"GeneratorFunction")),t.prototype=Object.create(O),t},r.awrap=function(t){return{__await:t}},_(P.prototype),l(P.prototype,s,(function(){return this})),r.AsyncIterator=P,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new P(h(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},_(O),l(O,f,"Generator"),l(O,a,(function(){return this})),l(O,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var r=Object(t),e=[];for(var n in r)e.push(n);return e.reverse(),function t(){for(;e.length;){var n=e.pop();if(n in r)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=F,G.prototype={constructor:G,reset:function(r){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(T),!r)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(r){if(this.done)throw r;var e=this;function o(n,o){return u.type="throw",u.arg=r,e.next=n,o&&(e.method="next",e.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,m):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),m},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),T(e),m}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;T(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(r,e,n){return this.delegate={iterator:F(r),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=t),m}},r}function s(t,r,e,n,o,i,a){try{var u=t[i](a),c=u.value}catch(t){return void e(t)}u.done?r(c):Promise.resolve(c).then(n,o)}e(7333),(0,a.yP)({progress:{showSpinner:!0},resolve:(n=c().mark((function t(r){return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(4985)("./".concat(r));case 2:return t.abrupt("return",t.sent.default);case 3:case"end":return t.stop()}}),t)})),o=function(){var t=this,r=arguments;return new Promise((function(e,o){var i=n.apply(t,r);function a(t){s(i,e,o,a,u,"next",t)}function u(t){s(i,e,o,a,u,"throw",t)}a(void 0)}))},function(t){return o.apply(this,arguments)}),title:function(t){return"".concat(t," - Trip Ticket v0.5")},setup:function(t){var r=t.el,e=t.App,n=t.props,o=t.plugin,a=(0,i.ri)({render:function(){return(0,i.h)(e,n)}});a.config.globalProperties.$_=_,a.config.globalProperties.$route=route,a.use(o).mount(r)}})},7333:(t,r,e)=>{"use strict";e.r(r);e(8877);window._=e(6486),window.axios=e(9669),window.axios.defaults.headers.common["X-Requested-With"]="XMLHttpRequest"},5874:()=>{},4985:(t,r,e)=>{var n={"./Approval":[3102,898,102],"./Approval.vue":[3102,898,102],"./Book":[4389,389],"./Book.vue":[4389,389],"./Car":[1994,994],"./Car.vue":[1994,994],"./Home":[6917,898,917],"./Home.vue":[6917,898,917],"./Login":[4451,898,451],"./Login.vue":[4451,898,451],"./Profile":[6426,898,426],"./Profile.vue":[6426,898,426],"./Scan":[7784,898,784],"./Scan.vue":[7784,898,784],"./ShowBook":[8539,898,539],"./ShowBook.vue":[8539,898,539],"./User":[550,898,550],"./User.vue":[550,898,550],"./Verify":[3598,598],"./Verify.vue":[3598,598]};function o(t){if(!e.o(n,t))return Promise.resolve().then((()=>{var r=new Error("Cannot find module '"+t+"'");throw r.code="MODULE_NOT_FOUND",r}));var r=n[t],o=r[0];return Promise.all(r.slice(1).map(e.e)).then((()=>e(o)))}o.keys=()=>Object.keys(n),o.id=4985,t.exports=o},4654:()=>{}},t=>{var r=r=>t(t.s=r);t.O(0,[170,898],(()=>(r(7745),r(5874))));t.O()}]);