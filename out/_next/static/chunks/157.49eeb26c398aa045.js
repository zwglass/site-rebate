(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[157],{865:function(n){n.exports=function(){"use strict";function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}function t(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(){return(r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n}).apply(this,arguments)}var i,a,c,u=navigator.userAgent||"",s=function(n,e){for(var t=window.isNaN,o=n.split("."),r=e.split("."),i=0;i<3;i++){var a=Number(o[i]),c=Number(r[i]);if(a>c)return 1;if(c>a)return-1;if(!t(a)&&t(c))return 1;if(t(a)&&!t(c))return-1}return 0},l=function(){var n=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);return Number.parseInt(n[1],10)},f=function(){return navigator.appVersion.match(/micromessenger\/(\d+\.\d+\.\d+)/i)[1]},d=/android/i.test(u),p=/iphone|ipad|ipod/i.test(u),h=/micromessenger\/([\d.]+)/i.test(u),v=/(weibo).*weibo__([\d.]+)/i.test(u),m=/(baiduboxapp)\/([\d.]+)/i.test(u),b=/qq\/([\d.]+)/i.test(u),y=/(qqbrowser)\/([\d.]+)/i.test(u),g=/qzone\/.*_qz_([\d.]+)/i.test(u),k=/chrome\/[\d.]+ mobile safari\/[\d.]+/i.test(u)&&d&&u.indexOf("Version")<0;function w(n){var e="undefined"!==typeof n?Object.keys(n).map((function(e){return"".concat(e,"=").concat(n[e])})).join("&"):"";return e?"?".concat(e):""}function _(n,e){var t=n.path,o=n.param,r=e.scheme,i=e.buildScheme;if("undefined"!==typeof i)return i(n,e);var a=r.host,c=r.port,u=r.protocol,s=c?":".concat(c):"",l=a?"".concat(a).concat(s,"/"):"",f=w(o);return"".concat(u,"://").concat(l).concat(t).concat(f)}function x(n,e){var t=e.outChain,o=_(n,e);if("undefined"!==typeof t&&t){var r=t.protocol,i=t.path,a=t.key;o="".concat(r,"://").concat(i,"?").concat(a,"=").concat(encodeURIComponent(o))}return o}function C(n,e){var t=e.outChain,o=e.intent,r=e.fallback;if("undefined"===typeof o)return"";var i=Object.keys(o).map((function(n){return"".concat(n,"=").concat(o[n],";")})).join(""),a="#Intent;".concat(i,"S.browser_fallback_url=").concat(encodeURIComponent(r),";end;"),c=_(n,e);if("undefined"!==typeof t&&t){var u=t.path,s=t.key;return"intent://".concat(u,"?").concat(s,"=").concat(encodeURIComponent(c)).concat(a)}return c=c.slice(c.indexOf("//")+2),"intent://".concat(c).concat(a)}function j(n,e){var t=e.universal;if("undefined"===typeof t)return"";var o=t.host,r=t.pathKey,i=n.path,a=w(n.param),c="https://".concat(o,"/").concat(i).concat(a),u="https://".concat(o,"?").concat(r,"=").concat(i).concat(a.replace("?","&"));return r?u:c}function O(n,e){var t=x(n,e);return"".concat(e.yingyongbao,"&android_schema=").concat(encodeURIComponent(t))}function A(){"undefined"!==typeof document&&("undefined"!==typeof document.hidden?(i="hidden",a="visibilitychange"):"undefined"!==typeof document.msHidden?(i="msHidden",a="msvisibilitychange"):"undefined"!==typeof document.webkitHidden&&(i="webkitHidden",a="webkitvisibilitychange"))}function S(){return"undefined"!==typeof i&&document[i]}function T(n){window.top.location.href=n}function I(n){var e=document.createElement("a");e.setAttribute("href",n),e.style.display="none",document.body.appendChild(e),e.click()}function P(n){c||((c=document.createElement("iframe")).style.cssText="display:none;border:0;width:0;height:0;",document.body.append(c)),c.src=n}function N(n,e){var t=setTimeout((function(){S()||n()}),e);"undefined"!==typeof a?document.addEventListener(a,(function(){clearTimeout(t)})):window.addEventListener("pagehide",(function(){clearTimeout(t)}))}return A(),function(){function e(t){n(this,e),o(this,"options",void 0);var i={timeout:2e3};this.options=r(i,t)}return t(e,[{key:"generateScheme",value:function(n){return x(n,this.options)}},{key:"generateIntent",value:function(n){return C(n,this.options)}},{key:"generateUniversalLink",value:function(n){return j(n,this.options)}},{key:"generateYingYongBao",value:function(n){return O(n,this.options)}},{key:"checkOpen",value:function(n){var e=this.options,t=e.logFunc;return N((function(){"undefined"!==typeof t&&t("failure"),n()}),e.timeout)}},{key:"fallToAppStore",value:function(){var n=this;this.checkOpen((function(){T(n.options.appstore)}))}},{key:"fallToFbUrl",value:function(){var n=this;this.checkOpen((function(){T(n.options.fallback)}))}},{key:"fallToCustomCb",value:function(n){this.checkOpen((function(){n()}))}},{key:"open",value:function(n){var e,t=this.options,o=t.universal,r=t.appstore,i=t.logFunc,a=t.intent,c=n.callback,u="undefined"!==typeof o,d=this.generateScheme(n);"undefined"!==typeof i&&i("pending"),p?h&&-1===s(f(),"7.0.5")||v?T(r):l()<9?(P(d),e=this.fallToAppStore):!u||b||y||g?(I(d),e=this.fallToAppStore):T(this.generateUniversalLink(n)):h&&"undefined"!==typeof this.options.yingyongbao?T(this.generateYingYongBao(n)):k?"undefined"!==typeof a?T(this.generateIntent(n)):(T(d),e=this.fallToFbUrl):h||m||v||g?T(this.options.fallback):(P(d),e=this.fallToFbUrl),"undefined"===typeof c?e&&e.call(this):this.fallToCustomCb(c)}}]),e}()}()},480:function(n,e,t){"use strict";t.d(e,{CB:function(){return r}});t(865);function o(n){var e=document.createElement("a");e.setAttribute("href",n),e.style.display="none",document.body.append(e),e.click()}var r=function(n){o(n)}},1788:function(n,e,t){"use strict";function o(n,e){var t="undefined"!==typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(!n)return;if("string"===typeof n)return r(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);"Object"===t&&n.constructor&&(t=n.constructor.name);if("Map"===t||"Set"===t)return Array.from(n);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return r(n,e)}(n))||e&&n&&"number"===typeof n.length){t&&(n=t);var o=0,i=function(){};return{s:i,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,u=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return c=n.done,n},e:function(n){u=!0,a=n},f:function(){try{c||null==t.return||t.return()}finally{if(u)throw a}}}}function r(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,o=new Array(e);t<e;t++)o[t]=n[t];return o}t.d(e,{JI:function(){return i},_C:function(){return a},Xm:function(){return c},s3:function(){return u},pf:function(){return f},D2:function(){return d}});var i=function(n){return 0===parseInt(n.user_type)?"\u6dd8\u5b9d":1===parseInt(n.user_type)?"\u5929\u732b":""},a=function(n){var e=n.buy_url,t=n.goods_url;return e&&e.length>32?e:t},c=function(n){var e=u(n),t=n.rebate_rate;return console.log("\u6298\u6263\u4ef7: ".concat(e,", TBK\u4f63\u91d1\u6bd4\u4f8b:").concat(t)),(e*t).toFixed(2)},u=function(n){var e=s(n),t=l(n);return parseInt(100*(e-t))/100},s=function(n){for(var e=n.prices?n.prices:[],t=0,o=0;o<e.length;o++){var r=e[o];if(r.price){var i=parseFloat(r.price)?parseFloat(r.price):0;i>0&&(t=t>0?i<t?i+0:t:i+0)}}return t/=100},l=function(n){var e=n.coupons?n.coupons:[],t=e.length>0?e[0]:{};return parseInt(t.coupon_amount?t.coupon_amount:0)/100},f=function(n){for(var e=n.coupons?n.coupons:[],t=[],o=0;o<e.length;o++){var r=e[o],i=r.coupon_info?r.coupon_info:"";i.length>0&&t.push(i)}return t},d=function(n){var e,t=0,r={},i=o(n.prices?n.prices:[]);try{for(i.s();!(e=i.n()).done;)if((r=e.value).price){var a=parseFloat(r.price)?parseFloat(r.price):0;a>t&&(t=a+0)}}catch(c){i.e(c)}finally{i.f()}return(t/100).toFixed(2)}},787:function(n,e,t){"use strict";t.d(e,{A:function(){return r}});t(7294);var o=t(5893),r=function(n){var e=n.visible,t=n.setVisible,r=n.visibleNumber,i=n.acceptHandle,a=n.showAction,c=n.children,u=(0,o.jsx)("div",{className:"fixed inset-0 w-screen h-screen z-50",style:{background:"rgba(0, 0, 0, 0.5)"},children:(0,o.jsx)("div",{className:"w-full h-full flex justify-center items-center",children:(0,o.jsxs)("div",{className:"modal-box",children:[(0,o.jsx)("div",{children:c}),a?(0,o.jsxs)("div",{className:"modal-action",children:[(0,o.jsx)("label",{className:"btn btn-primary btn-sm my-modal-2",onClick:i,children:"\xa0\xa0 OK \xa0\xa0"}),(0,o.jsx)("label",{className:"btn btn-sm my-modal-2",onClick:function(){return t(0)},children:"Close"})]}):null]})})});return(0,o.jsx)(o.Fragment,{children:r===e?u:null})};r.defaultProps={visible:0,setVisible:function(n){console.log(n)},visibleNumber:1,acceptHandle:function(){console.log("accept clicked!")},showAction:!0,children:null}},733:function(n,e,t){"use strict";t.d(e,{Z:function(){return u}});var o=t(7294),r=t(6439),i=t(5761),a=t(5021),c=t(5893),u=function(n){var e=n.url,t=void 0===e?"":e,u=n.requestTpwdCount,s=void 0===u?0:u,l=(0,o.useState)("\u6dd8\u53e3\u4ee4\u590d\u5236\u6210\u529f, \u8bf7\u6253\u5f00\u6dd8\u5b9dAPP\u3002"),f=(l[0],l[1]),d=(0,o.useState)("success"),p=(d[0],d[1]),h=(0,o.useState)(0),v=h[0],m=h[1],b=(0,o.useState)(""),y=b[0],g=b[1],k=(0,o.useState)(0),w=k[0],_=k[1],x=function(n){console.log("\u8ba1\u7b97\u6dd8\u53e3\u4ee4",n);var e=n.model,t=n.password_simple,o=function(){var n=navigator.userAgent;return-1!=n.indexOf("Android")?"Android":-1!=n.indexOf("iPhone")?"iPhone":-1!=n.indexOf("iPad")?"iPad":"PC"}();if("iPhone"===o||"iPad"===o){var r=function(){var n=navigator.userAgent,e=n.indexOf("OS");return-1!=e?n.substr(e+3,3):""}().split("_");if(parseInt(r[0])>=14)return e;console.log("\u7248\u672c\u53f7\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5e\uff5eios \u7248\u672c\u53f7",r)}return t};return(0,c.jsxs)("div",{children:[(0,c.jsx)(r.sV,{text:y,successTips:"\u590d\u5236\u6210\u529f, \u8bf7\u6253\u5f00\u6dd8\u5b9dAPP.",errorTips:"\u590d\u5236\u5931\u8d25, \u8bf7\u957f\u6309\u590d\u5236...",writeClipboardCount:w}),(0,c.jsx)(i.L,{api:a.MB.taobaoPlatformCustomer,method:"POST",data:{method:"tbk_tpwd_get",map_data:{url:t}},resolveBk:function(n){if(console.log("gotResponse",n),1e3===n.code&&n.results&&n.results.data){var e=x(n.results.data);g(e),_(w+1)}else f("(\u7f51\u7edc\u9519\u8bef)\u6dd8\u53e3\u4ee4\u590d\u5236\u5931\u8d25, \u8bf7\u5237\u65b0\u540e\u518d\u8bd5..."),p("error"),m(v+1)},requestCount:s,showLoading:!0})]})}}}]);