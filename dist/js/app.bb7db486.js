(function(e){function t(t){for(var r,o,u=t[0],c=t[1],s=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&p.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==a[u]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},a={app:0},i=[];function u(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-3195d05a":"f77769d2"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-3195d05a":1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-3195d05a":"ca1165c0"}[e]+".css",a=c.p+r,i=document.getElementsByTagName("link"),u=0;u<i.length;u++){var s=i[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===r||l===a))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===r||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||a,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete o[e],f.parentNode.removeChild(f),n(i)},f.href=a;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var r=a[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=a[e]=[t,n]}));t.push(r[2]=i);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",p.name="ChunkLoadError",p.type=r,p.request=o,n[1](p)}a[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0439":function(e,t){},"2ea8":function(e,t,n){e.exports=n.p+"img/praise.b99d7d30.svg"},"3a23":function(e,t,n){var r={"./praise-active.svg":"4787","./praise.svg":"2ea8"};function o(e){var t=a(e);return n(t)}function a(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}o.keys=function(){return Object.keys(r)},o.resolve=a,e.exports=o,o.id="3a23"},4787:function(e,t,n){e.exports=n.p+"img/praise-active.b5d5e53a.svg"},"55ed":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e623"),n("e379"),n("5dc8"),n("37e1");var r=n("2b0e"),o=n("2f62"),a=n("fcc2"),i=n("63e0"),u=n("0439");r["a"].use(o["a"]);var c=new o["a"].Store({state:a,mutations:u,actions:i}),s=n("f23d"),l=(n("202f"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),p=[],f={name:"App"},d=f,h=(n("9b51"),n("2877")),m=Object(h["a"])(d,l,p,!1,null,"06788e78",null),v=m.exports,g=n("8c4f");r["a"].use(g["a"]);var y=[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:O("Home")}],b=new g["a"]({mode:"history",routes:y});b.beforeEach((function(e,t,n){n()})),b.afterEach((function(){window.scrollTo(0,0)}));var w=g["a"].prototype.push;function O(e){return function(t){return n.e("chunk-3195d05a").then(function(){var r=[n("feca")("./"+e+".vue")];t.apply(null,r)}.bind(this)).catch(n.oe)}}g["a"].prototype.push=function(e){return w.call(this,e).catch((function(e){return e}))};var k=b,S=(n("d81d"),n("d3b7"),n("ddb0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{attrs:{width:e.width,height:e.height}},[n("use",{attrs:{"xlink:href":e.iconName}})])}),T=[],j=(n("b0c0"),{name:"SvgIcon",props:{name:{type:String,required:!0},width:{type:String,required:!0},height:{type:String,required:!0}},computed:{iconName:function(){return"#icon-".concat(this.name)}}}),E=j,L=Object(h["a"])(E,S,T,!1,null,"25c7f207",null),_=L.exports;r["a"].component("svg-icon",_);var C=n("3a23"),x=function(e){return e.keys().map(e)};x(C);var P=new r["a"],N=n("953d"),I=n.n(N);n("a753"),n("8096"),n("14e1");r["a"].prototype.$bus=P,r["a"].config.productionTip=!1,r["a"].use(s["a"]),r["a"].use(I.a),new r["a"]({router:k,store:c,render:function(e){return e(v)}}).$mount("#app")},"63e0":function(e,t){},"9b51":function(e,t,n){"use strict";n("55ed")},fcc2:function(e,t,n){"use strict";n.r(t),t["default"]={isShow:!1,shopifyAppObj:null,NProgressObj:null,shop:null,email:null,shopDomain:null,currencySymbol:null,role:null,settingIsChange:!1,brandDataIsChange:!1,accountIsChange:!1,articleChange:!1,isDiscard:!1,serviceInfo:{userName:"",brand:"",email:"",avatar:"",id:null,shop:"",token:"",storeurl:"",faqUrl:""},cusList:[],numberUnread:0,allLength:0,mentionLength:0,assignLength:0,unassignLength:0,cusListLoading:!0,wsLoading:!0,navThreeTopNav:"open",navThreeTitle:"All",lastCheckedId:0,operationTime:0,wsIsnull:!0,latestReplyTime:0,serviceInfoList:[],categoryInfo:[],userPlan:{},primaryColor:"",isShowPlan:!0,showHomeTop:!1}}});
//# sourceMappingURL=app.bb7db486.js.map