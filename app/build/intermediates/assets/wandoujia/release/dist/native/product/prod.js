// { "framework": "Weex"} 

!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.i=function(e){return e},t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=71)}({15:function(e,t){e.exports={}},21:function(e,t){e.exports={type:"text",style:{fontFamily:"iconfont4",fontSize:50,color:"#008000"},attr:{value:"哈哈"}}},27:function(e,t){e.exports=function(e,t,o){"use strict";var n=o("@weex-module/stream");weex.requireModule("modal"),weex.requireModule("navigator");e.exports={data:function(){return{prod:{}}},methods:{created:function(){var e=this;n.fetch({method:"GET",url:"http://m.soumoney.net/loan/product/detail.do?pid=1498456612505",type:"json"},function(t){0==t.data.statusCode&&(e.prod=t.data.prod)})}}}}},71:function(e,t,o){var n=o(21),r=o(15),u=o(27);__weex_define__("@weex-component/5c40f5d54bc990d05fdacb05c02b378d",[],function(e,t,o){u(o,t,e),t.__esModule&&t.default&&(o.exports=t.default),o.exports.template=n,o.exports.style=r}),__weex_bootstrap__("@weex-component/5c40f5d54bc990d05fdacb05c02b378d",void 0,void 0)}});