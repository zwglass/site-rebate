"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[775],{6775:function(e,t,s){s.r(t);var r=s(2809),o=s(7294),n=s(787),c=s(6439),i=s(5021),a=s(5761),l=s(733),u=s(480),d=s(1788),p=s(5893);function f(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function m(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?f(Object(s),!0).forEach((function(t){(0,r.Z)(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):f(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var b=function(e){var t=e.goodsInfo,s=e.colorStock,r=(e.selectHandle,(0,o.useState)(0)),f=r[0],b=r[1],g=(0,o.useState)({shop_title:"",user_type:"",url:"",name:"",prices:[{price:0,explains:"price_source",startTime:0,endTime:0},{price:0,explains:"price_discount",startTime:0,endTime:0},{price:0,explains:"price_sale_price",startTime:0,endTime:0},{price:0,explains:"price_orig_price",startTime:0,endTime:0}],volume:0,coupons:[{coupons_info:"",coupon_amount:0,coupon_start_fee:0,coupon_remain_count:0,startTime:0,endTime:0}],describe:"",id:"",buy_url:"",goods_url:"",rebate_rate:0}),h=g[0],j=g[1],v=(0,o.useState)(""),_=v[0],x=v[1],w=(0,o.useState)(""),O=w[0],y=w[1],S=(0,o.useState)(0),N=S[0],T=S[1],k=(0,o.useState)(0),C=k[0],P=k[1],D=(0,o.useState)(0),E=D[0],I=D[1],q=(0,o.useState)([]),B=q[0],G=q[1],H=(0,o.useState)(0),A=H[0],L=H[1],Z=(0,o.useState)(0),z=Z[0],J=Z[1];(0,o.useEffect)((function(){x((0,d.JI)(t)),j(t),T((0,d.Xm)(t)),P((0,d.s3)(t)),I((0,d.D2)(t)),G((0,d.pf)(t)),y((0,d._C)(t))}),[t]),(0,o.useEffect)((function(){var e=M("price_discount"),t=M("price_source");s.length>0&&e&&t&&(copyGoodsObj=m(m({},h),{},{price_source:t,price_discount:e}),j(copyGoodsObj))}),[s]);var M=function(e){if(s.length>0){for(var t=0,r=0,o=0;o<s.length;o++){var n=s[o][e];(n<t||0===t)&&(t=n),n>r&&(r=n)}return t===r?t:"".concat(t," - ").concat(r)}return null};return(0,p.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-0 w-full md:w-3/5 lg:w-2/3 h-auto bg-base-100 rounded mb-4 p-1 ring focus:ring-4",children:[(0,p.jsxs)("div",{className:"col-span-1 rounded w-full h-auto p-0",onClick:function(){return e=O,navigator&&navigator.clipboard&&navigator.clipboard.writeText&&navigator.clipboard.writeText(e).then((function(){console.log("Copied to clipboard")})).catch((function(e){console.log("Something went wrong",e)})),void(0,u.CB)(e,"taobao");var e},children:[(0,p.jsx)("img",{className:"w-full h-auto rounded m-0",src:h.url,alt:"\u5546\u54c1\u56fe\u7247"}),(0,p.jsxs)("div",{className:"flex justify-center content-center m-2 p-2 h-auto",children:[_.length>0?(0,p.jsx)("div",{className:"badge badge-info badge-sm",children:_}):null,h.shop_title?(0,p.jsx)("div",{className:"badge badge-success badge-sm",children:h.shop_title}):null]})]}),(0,p.jsx)("div",{className:"col-span-2 p-2",children:(0,p.jsxs)("div",{className:"w-full h-auto grid grid-cols-1",children:[(0,p.jsx)(c.S1,{goodsTitle:h.name,goodsDescribe:h.describe,priceDiscount:C,priceOrigin:E,volume:h.volume,rebateAmount:N,couponsInfos:B}),(0,p.jsxs)("div",{className:"flex justify-end w-full h-auto",children:[(0,p.jsx)("button",{className:"btn btn-sm btn-ghost m-1",onClick:function(){L(A+1),console.log("showQrcode"),b(1)},children:"\u5546\u54c1\u4e8c\u7ef4\u7801"}),(0,p.jsx)("button",{className:"btn btn-sm btn-primary",onClick:function(){return J(z+1)},children:"\u6dd8\u53e3\u4ee4"})]})]})}),(0,p.jsx)(n.A,{visible:f,setVisible:b,visibleNumber:1,acceptHandle:function(){return b(0)},children:(0,p.jsxs)("div",{className:"flex justify-center",children:[(0,p.jsx)("div",{className:"m-2 w-full h-auto",children:(0,p.jsx)("p",{children:h.name})}),(0,p.jsx)(c.RG,{urlText:O,size:200})]})}),(0,p.jsx)(a.L,{api:i.MB.taobaoPlatformCustomer,method:"POST",data:{method:"tbk_spread_get",map_data:{requests:[{url:O}]}},resolveBk:function(e){if(e.code&&1e3===e.code){console.log("\u5546\u54c1\u5361\u7247\u8bf7\u6c42\u6210\u529f",e);var t=e.results?e.results:null;if(t&&t.results&&t.results.length>0){var s=t.results[0];y(s.content)}}},requestCount:A,showLoading:!1}),(0,p.jsx)(l.Z,{url:O,requestTpwdCount:z})]})};b.defaultProps={goodsInfo:{url:"",name:"",price_source:"",price_discount:"",describe:"",id:"",sales_number:""},colorStock:[],selectHandle:function(e){console.log(e)}},t.default=b}}]);