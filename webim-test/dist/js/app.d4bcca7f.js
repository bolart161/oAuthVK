(function(t){function e(e){for(var r,u,c=e[0],i=e[1],s=e[2],f=0,d=[];f<c.length;f++)u=c[f],o[u]&&d.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("64a9"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("AuthButton")],1)},a=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.isAuth?n("div",{attrs:{id:"info"}},[n("v-card",[n("v-card-title",{attrs:{"primary-title":""}},[n("div",{staticClass:"headline"},[t._v(t._s(t.title))])])],1)],1):n("div",{attrs:{id:"auth-from"}},[n("v-btn",{on:{click:t.auth}},[t._v("\n      Авторизоваться\n    ")])],1)])},c=[];n("ac6a"),n("386d"),n("28a5");function i(t){var e=document.createElement("SCRIPT");e.src="https://oauth.vk.com/access_token?client_id=6079378&client_secret=VZjMf75BX1zNY7Avn6D1&redirect_uri=http://bolart.ru&code="+t+"&callback=saveToken",e.type="text/javascript",document.getElementsByTagName("head")[0].appendChild(e)}var s={name:"AuthButton",data:function(){return{isAuth:!1,title:"",accessToken:null,userId:null}},methods:{auth:function(){var t="https://oauth.vk.com/authorize?client_id=6079378&display=popup&redirect_uri=http://bolart.ru&scope=friends&response_type=code";window.open(t,"_self")},getInfo:function(){var t=this;if(null!==this.accessToken){var e="https://api.vk.com/method/users.get?user_ids=".concat(this.userId,"&access_token=").concat(this.accessToken,"&v=5.100");fetch(e).then(function(t){return 200!==t.status?Promise.reject():t.json()}).then(function(e){console.log(e),t.title=e.first_name+" "+e.last_name})}}},mounted:function(){var t=window.location.search.substr(1).split("&"),e=null;t.forEach(function(t){var n=t.split("=");"code"===n[0]&&(e=n[1])}),null!==e&&i(e)}},l=s,f=n("2877"),d=Object(f["a"])(l,u,c,!1,null,"11d5d5a4",null),p=d.exports,h={name:"app",components:{AuthButton:p}},v=h,m=(n("034f"),Object(f["a"])(v,o,a,!1,null,null,null)),b=m.exports,_=n("ce5b"),y=n.n(_);n("bf40");r["default"].use(y.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(b)}}).$mount("#app")},"64a9":function(t,e,n){}});
//# sourceMappingURL=app.d4bcca7f.js.map