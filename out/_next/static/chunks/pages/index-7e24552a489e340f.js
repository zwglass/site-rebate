(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4082:function(t,n,o){"use strict";o.r(n),o.d(n,{default:function(){return g}});var e=o(37),r=o(7294),a=o(5893),s=(0,r.lazy)((function(){return Promise.all([o.e(157),o.e(334)]).then(o.bind(o,7334))})),i=function(t){var n=t.goodsList;t.GoodsCardComponent;return(0,a.jsx)("div",{className:"w-full h-auto",children:n.map((function(t,n){return(0,a.jsx)(r.Suspense,{fallback:(0,a.jsx)("div",{children:"loading..."}),children:(0,a.jsx)(s,{goodsInfo:t.goodsInfo,colorStock:t.colorStock},n)},n)}))})};i.defaultProps={goodsList:[],GoodsCardComponent:s};var u=o(5761),c=o(5061),d=o(5021),l=o(6439),f=o(1010),p=d.MB.taobaoPlatformCustomer,h=function(){var t=(0,r.useState)(0),n=(t[0],t[1]),o=(0,r.useState)(!0),s=o[0],d=o[1],h=(0,r.useState)([]),g=h[0],v=h[1],m=(0,r.useState)([]),b=m[0],x=m[1],j=(0,r.useState)(0),_=j[0],y=j[1],C=(0,r.useState)({pagination:1,page_size:20}),S=C[0],k=C[1];(0,r.useEffect)((function(){S.pagination&&S.pagination>0&&y(_+1)}),[S]);var w=function(){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=1;t?setGoods([]):n=S.pagination+1;var o={pagination:n,page_size:20};k(o)};return(0,a.jsxs)(c.Z,{title:"TaobaoGoods",searchHandle:w,children:[(0,a.jsx)("div",{className:"w-full h-auto",children:(0,a.jsx)(l.VO,{Col1Component:function(){return(0,a.jsx)(i,{goodsList:g})},Col2Component:function(){return(0,a.jsx)(i,{goodsList:b})}})}),(0,a.jsx)("div",{className:"flex justify-center p-4 h-auto w-full",children:s?(0,a.jsx)("button",{className:"btn glass btn-wide btn-sm bg-gray-400",onClick:function(){w("",!1)},children:"\u8bfb\u53d6\u66f4\u591a"}):(0,a.jsx)("div",{className:"text-gray-300",children:"\u6ca1\u6709\u66f4\u591a\u4e86"})}),(0,a.jsx)(u.L,{api:p,method:"POST",data:{method:"taobao_optimal_goods_get",map_data:S},resolveBk:function(t){var o={};Object.keys(t).indexOf("code")>-1&&1e3===t.code&&Object.keys(t).indexOf("results")>-1&&(o=t.results);var r=[],a=Object.keys(o);if(a.indexOf("results")>-1&&a.indexOf("count")>-1){d((0,f.Ah)([].concat((0,e.Z)(g),(0,e.Z)(b)),o));var s=o.results;n(parseInt(o.count));for(var i=0;i<s.length;i++){var u=(0,f.ns)(s[i]);u&&r.push(u)}}var c=function(t){var n=[],o=[];return t.forEach((function(t,e){e%2===0?o.push(t):n.push(t)})),{goods1:n,goods2:o}}(r);console.log("gotGoodsData convertedGoods",c),v(g.concat(c.goods1)),x(b.concat(c.goods2))},requestCount:_})]})};function g(){return(0,a.jsx)(h,{})}h.defaultProps={}},8581:function(t,n,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(4082)}])},37:function(t,n,o){"use strict";o.d(n,{Z:function(){return a}});var e=o(6586);var r=o(6988);function a(t){return function(t){if(Array.isArray(t))return(0,e.Z)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||(0,r.Z)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}},function(t){t.O(0,[383,577,329,993,774,888,179],(function(){return n=8581,t(t.s=n);var n}));var n=t.O();_N_E=n}]);