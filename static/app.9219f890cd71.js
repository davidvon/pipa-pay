webpackJsonp([17],{0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=n(17),r=o(i),a=n(9),u=o(a),c=n(10),s=o(c),l=n(167),p=o(l),f=n(120),d=n(134),h=n(133),m=n(132),v=n(284);n.e(16,function(e){var t=n(208);t.attach(document.body)}),d.use(m),d.use(h),d.config.devtools=!0;var g=new h({history:!1});g.beforeEach(function(e){var t=e.to,n=e.next;if(s["default"].log("beforeEach","wxOpenId:"+r["default"].wxOpenId+" to.path:"+t.path),"/clear"===t.path)return r["default"].clear(),(0,f.clearCookie)("PIPA_OPENID",""),void alert("本地数据已清除");if(r["default"].wxOpenId)return void n();if(!t.query.code&&!t.query.state){var o=encodeURIComponent(u["default"].WX_HOST),i=t.path.split("?")[0],a="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+u["default"].WX_APPID+"&redirect_uri="+o+"&response_type=code&scope=snsapi_base&state="+i+"#wechat_redirect";return s["default"].log("beforeEach","redirect url:"+a),void(location.href=a)}t.query.state&&(s["default"].log("main:beforeEach","code:"+t.query.code),d.http.post(u["default"].API_URL+"weixin/oauth/decode",{code:t.query.code}).then(function(e){var n=e.data;if(0===n.result){r["default"].wxOpenId=n.openid;var o=u["default"].WX_HOST+"/#!"+t.query.state;s["default"].log("beforeEach","openid:"+r["default"].wxOpenId+", url:"+o),location.href=o}else r["default"].wxOpenId=""},function(e){s["default"].log("beforeEach","get openid error"),alert("校验错误")}))}),g.map(p["default"]),g.start(v,"#app")},1:function(e,t){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],t=0;t<this.length;t++){var n=this[t];n[2]?e.push("@media "+n[2]+"{"+n[1]+"}"):e.push(n[1])}return e.join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<t.length;i++){var a=t[i];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},2:function(e,t,n){function o(e,t){for(var n=0;n<e.length;n++){var o=e[n],i=p[o.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](o.parts[r]);for(;r<o.parts.length;r++)i.parts.push(c(o.parts[r],t))}else{for(var a=[],r=0;r<o.parts.length;r++)a.push(c(o.parts[r],t));p[o.id]={id:o.id,refs:1,parts:a}}}}function i(e){for(var t=[],n={},o=0;o<e.length;o++){var i=e[o],r=i[0],a=i[1],u=i[2],c=i[3],s={css:a,media:u,sourceMap:c};n[r]?n[r].parts.push(s):t.push(n[r]={id:r,parts:[s]})}return t}function r(e,t){var n=h(),o=g[g.length-1];if("top"===e.insertAt)o?o.nextSibling?n.insertBefore(t,o.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),g.push(t);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(t)}}function a(e){e.parentNode.removeChild(e);var t=g.indexOf(e);t>=0&&g.splice(t,1)}function u(e){var t=document.createElement("style");return t.type="text/css",r(e,t),t}function c(e,t){var n,o,i;if(t.singleton){var r=v++;n=m||(m=u(t)),o=s.bind(null,n,r,!1),i=s.bind(null,n,r,!0)}else n=u(t),o=l.bind(null,n),i=function(){a(n)};return o(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;o(e=t)}else i()}}function s(e,t,n,o){var i=n?"":o.css;if(e.styleSheet)e.styleSheet.cssText=y(t,i);else{var r=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(r,a[t]):e.appendChild(r)}}function l(e,t){var n=t.css,o=t.media,i=t.sourceMap;if(o&&e.setAttribute("media",o),i&&(n+="\n/*# sourceURL="+i.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var p={},f=function(e){var t;return function(){return"undefined"==typeof t&&(t=e.apply(this,arguments)),t}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),h=f(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,v=0,g=[];e.exports=function(e,t){t=t||{},"undefined"==typeof t.singleton&&(t.singleton=d()),"undefined"==typeof t.insertAt&&(t.insertAt="bottom");var n=i(e);return o(n,t),function(e){for(var r=[],a=0;a<n.length;a++){var u=n[a],c=p[u.id];c.refs--,r.push(c)}if(e){var s=i(e);o(s,t)}for(var a=0;a<r.length;a++){var c=r[a];if(0===c.refs){for(var l=0;l<c.parts.length;l++)c.parts[l]();delete p[c.id]}}}};var y=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},9:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,o,i,r;console.log("location.origin:"+location.origin),"http://127.0.0.1:8080"===location.origin?(i="wxb3ec764893b99722",n="http://127.0.0.1:8080",o="http://127.0.0.1:5000",r="pYtFst9hZmAy3VmyajWSQaB2sQgw"):(i="wx6965cc85ec3e801c",n="http://wx.pipapay.com",o="http://live.pipapay.com",r="pYtFst9hZmAy3VmyajWSQaB2sQgw"),t["default"]={WX_HOST:n,API_HOST:o,API_URL:o+"/api/",WX_APPID:i,cardId:r,shareTitle:"噼啪支付",shareLogo:"http://wx.cdn.pipapay.com/static/images/pipalogo-blue2.png",shareDesc:"噼啪GIFT卡"}},10:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,t){var n=(u["default"].wxOpenId||"",new Image(0,0)),o=[];o.push("version="+p),o.push("name="+encodeURIComponent(e)),t.message&&o.push("message="+encodeURIComponent(t.message)),t.location&&o.push("location="+encodeURIComponent(t.location)),t.line&&o.push("line="+encodeURIComponent(t.line)),t.func&&o.push("func="+encodeURIComponent(t.func));var i=o.join("&");n.src=l+i,console.log(""+e+", "+t.message)}function r(e,t){var n=u["default"].wxOpenId||"",o=new Image(0,0),i=[];i.push("version="+p),i.push("openid="+n),i.push("name="+encodeURIComponent(e)),i.push("message="+encodeURIComponent(t));var r=i.join("&");o.src=l+r,console.log("["+e+"] "+t)}Object.defineProperty(t,"__esModule",{value:!0});var a=n(17),u=o(a),c=n(9),s=o(c),l=s["default"].API_HOST+"/log.gif?",p="0.1";window.onerror=i,t["default"]={err:i,log:r}},17:function(e,t,n){"use strict";var o=n(120);e.exports={wxConfigStatus:!1,wxConfigEnable:function(){this.wxConfigStatus=!0},set wxOpenId(e){(0,o.setCookie)("PIPA_OPENID",e,1080),localStorage.setItem("PIPA_OPENID",e)},get wxOpenId(){var e=localStorage.getItem("PIPA_OPENID")||(0,o.getCookie)("PIPA_OPENID");return e&&!localStorage.getItem("PIPA_OPENID")&&localStorage.setItem("PIPA_OPENID",e),e},clear:function(){localStorage.clear()}}},120:function(e,t){"use strict";function n(e,t,n){var o=new Date;o.setTime(o.getTime()+60*n*60*1e3*24),document.cookie=e+"="+escape(t)+";path=/;expires="+o.toGMTString()}function o(e,t,n,o){var i=new Date;i.setTime(i.getTime()+24*n*60*60*1e3),document.cookie=e+"="+escape(t)+";path=/;expires="+i.toGMTString()+";domain="+o}function i(e){n(e,"",-1)}function r(e){var t,n=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(t=document.cookie.match(n))?unescape(t[2]):null}function a(e){var t=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(t);return null!=n?unescape(n[2]):null}function u(e,t,n){var o=e.split("#")[0];return/\?/g.test(o)?/name=[-\w]{4,25}/g.test(o)?o=o.replace(/name=[-\w]{4,25}/g,t+"="+n):o+="&"+t+"="+n:o+="?"+t+"="+n,e=e.split("#")[1]?o+"#"+window.location.href.split("#")[1]:o}Object.defineProperty(t,"__esModule",{value:!0}),t.setCookie=n,t.setCookieEx=o,t.clearCookie=i,t.getCookie=r,t.getQueryString=a,t.addUrlParam=u},135:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={}},167:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={"*":{name:"home",component:function(e){n.e(0,function(t){var n=[t(131)];e.apply(null,n)}.bind(this))}},"/":{name:"home",component:function(e){n.e(0,function(t){var n=[t(131)];e.apply(null,n)}.bind(this))}},"/buy/:cardId":{name:"buy",component:function(e){n.e(1,function(t){var n=[t(299)];e.apply(null,n)}.bind(this))}},"/buy/result/:orderId":{name:"buy_result",component:function(e){n.e(7,function(t){var n=[t(300)];e.apply(null,n)}.bind(this))}},"/memcards":{name:"memcards",component:function(e){n.e(3,function(t){var n=[t(308)];e.apply(null,n)}.bind(this))}},"/card/active":{name:"active",component:function(e){n.e(8,function(t){var n=[t(298)];e.apply(null,n)}.bind(this))}},"/pay/cards":{name:"paycards",component:function(e){n.e(5,function(t){var n=[t(309)];e.apply(null,n)}.bind(this))}},"/pay/:cardId/:cardCode":{name:"pay",component:function(e){n.e(2,function(t){var n=[t(310)];e.apply(null,n)}.bind(this))}},"/pay/records":{name:"pay_records",component:function(e){n.e(15,function(t){var n=[t(311)];e.apply(null,n)}.bind(this))}},"/gift":{name:"gift",component:function(e){n.e(4,function(t){var n=[t(301)];e.apply(null,n)}.bind(this))}},"/gift/share/:cardId/:cardCode":{name:"gift_share",component:function(e){n.e(6,function(t){var n=[t(303)];e.apply(null,n)}.bind(this))}},"/gift/share/result/:cardId/:cardCode":{name:"gift_share_result",component:function(e){n.e(9,function(t){var n=[t(304)];e.apply(null,n)}.bind(this))}},"/gift/receive/:sign":{name:"gift_receive",component:function(e){n.e(10,function(t){var n=[t(302)];e.apply(null,n)}.bind(this))}},"/help":{name:"help",component:function(e){n.e(13,function(t){var n=[t(306)];e.apply(null,n)}.bind(this))}},"/guide":{name:"guide",component:function(e){n.e(14,function(t){var n=[t(305)];e.apply(null,n)}.bind(this))}},"/notice":{name:"notice",component:function(e){n.e(12,function(t){var n=[t(307)];e.apply(null,n)}.bind(this))}}}},193:function(e,t){},254:function(e,t){e.exports=" <div> <router-view transition transition-mode=out-in></router-view> </div> "},284:function(e,t,n){var o,i;n(193),o=n(135),i=n(254),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}});