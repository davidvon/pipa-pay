webpackJsonp([17],[function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var i=t(20),a=o(i),r=t(9),p=o(r),c=t(10),s=o(c),u=t(169),f=o(u),l=t(120),d=t(134),g=t(133),m=t(132),h=t(287);t.e(16,function(e){var n=t(210);n.attach(document.body)}),d.use(m),d.use(g),d.config.devtools=!0;var x=new g({history:!1});x.beforeEach(function(e){var n=e.to,t=e.next;if(s["default"].log("beforeEach","wxOpenId:"+a["default"].wxOpenId+" to.path:"+n.path),"/clear"===n.path)return a["default"].clear(),(0,l.clearCookie)("PIPA_OPENID",""),void alert("本地数据已清除");if(a["default"].wxOpenId)return void t();if(!n.query.code&&!n.query.state){var o=encodeURIComponent(p["default"].WX_HOST),i=n.path.split("?")[0],r="https://open.weixin.qq.com/connect/oauth2/authorize?appid="+p["default"].WX_APPID+"&redirect_uri="+o+"&response_type=code&scope=snsapi_base&state="+i+"#wechat_redirect";return s["default"].log("beforeEach","redirect url:"+r),void(location.href=r)}n.query.state&&(s["default"].log("main:beforeEach","code:"+n.query.code),d.http.post(p["default"].API_URL+"weixin/oauth/decode",{code:n.query.code}).then(function(e){var t=e.data;if(0===t.result){a["default"].wxOpenId=t.openid;var o=p["default"].WX_HOST+"/#!"+n.query.state;s["default"].log("beforeEach","openid:"+a["default"].wxOpenId+", url:"+o),location.href=o}else a["default"].wxOpenId=""},function(e){s["default"].log("beforeEach","get openid error"),alert("校验错误")}))}),x.map(f["default"]),x.start(h,"#app")},function(e,n){e.exports=function(){var e=[];return e.toString=function(){for(var e=[],n=0;n<this.length;n++){var t=this[n];t[2]?e.push("@media "+t[2]+"{"+t[1]+"}"):e.push(t[1])}return e.join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var a=this[i][0];"number"==typeof a&&(o[a]=!0)}for(i=0;i<n.length;i++){var r=n[i];"number"==typeof r[0]&&o[r[0]]||(t&&!r[2]?r[2]=t:t&&(r[2]="("+r[2]+") and ("+t+")"),e.push(r))}},e}},function(e,n,t){function o(e,n){for(var t=0;t<e.length;t++){var o=e[t],i=f[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(c(o.parts[a],n))}else{for(var r=[],a=0;a<o.parts.length;a++)r.push(c(o.parts[a],n));f[o.id]={id:o.id,refs:1,parts:r}}}}function i(e){for(var n=[],t={},o=0;o<e.length;o++){var i=e[o],a=i[0],r=i[1],p=i[2],c=i[3],s={css:r,media:p,sourceMap:c};t[a]?t[a].parts.push(s):n.push(t[a]={id:a,parts:[s]})}return n}function a(e,n){var t=g(),o=x[x.length-1];if("top"===e.insertAt)o?o.nextSibling?t.insertBefore(n,o.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),x.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function r(e){e.parentNode.removeChild(e);var n=x.indexOf(e);n>=0&&x.splice(n,1)}function p(e){var n=document.createElement("style");return n.type="text/css",a(e,n),n}function c(e,n){var t,o,i;if(n.singleton){var a=h++;t=m||(m=p(n)),o=s.bind(null,t,a,!1),i=s.bind(null,t,a,!0)}else t=p(n),o=u.bind(null,t),i=function(){r(t)};return o(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;o(e=n)}else i()}}function s(e,n,t,o){var i=t?"":o.css;if(e.styleSheet)e.styleSheet.cssText=v(n,i);else{var a=document.createTextNode(i),r=e.childNodes;r[n]&&e.removeChild(r[n]),r.length?e.insertBefore(a,r[n]):e.appendChild(a)}}function u(e,n){var t=n.css,o=n.media,i=n.sourceMap;if(o&&e.setAttribute("media",o),i&&(t+="\n/*# sourceURL="+i.sources[0]+" */",t+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}var f={},l=function(e){var n;return function(){return"undefined"==typeof n&&(n=e.apply(this,arguments)),n}},d=l(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=l(function(){return document.head||document.getElementsByTagName("head")[0]}),m=null,h=0,x=[];e.exports=function(e,n){n=n||{},"undefined"==typeof n.singleton&&(n.singleton=d()),"undefined"==typeof n.insertAt&&(n.insertAt="bottom");var t=i(e);return o(t,n),function(e){for(var a=[],r=0;r<t.length;r++){var p=t[r],c=f[p.id];c.refs--,a.push(c)}if(e){var s=i(e);o(s,n)}for(var r=0;r<a.length;r++){var c=a[r];if(0===c.refs){for(var u=0;u<c.parts.length;u++)c.parts[u]();delete f[c.id]}}}};var v=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}()},,,,,,,function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t,o,i,a;console.log("location.origin:"+location.origin),"http://127.0.0.1:8080"===location.origin?(i="wxb3ec764893b99722",t="http://127.0.0.1:8080",o="http://127.0.0.1:5000",a="pYtFst9hZmAy3VmyajWSQaB2sQgw"):(i="wx6965cc85ec3e801c",t="http://wx.pipapay.com",o="http://live.pipapay.com",a="pYtFst9hZmAy3VmyajWSQaB2sQgw"),n["default"]={WX_HOST:t,API_HOST:o,API_URL:o+"/api/",WX_APPID:i,cardId:a,shareTitle:"噼啪支付",shareLogo:"http://wx.cdn.pipapay.com/static/images/pipalogo-blue2.png",shareDesc:"噼啪GIFT卡"}},function(e,n,t){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(e,n){var t=(p["default"].wxOpenId||"",new Image(0,0)),o=[];o.push("version="+f),o.push("name="+encodeURIComponent(e)),n.message&&o.push("message="+encodeURIComponent(n.message)),n.location&&o.push("location="+encodeURIComponent(n.location)),n.line&&o.push("line="+encodeURIComponent(n.line)),n.func&&o.push("func="+encodeURIComponent(n.func));var i=o.join("&");t.src=u+i,console.log(""+e+", "+n.message)}function a(e,n){var t=p["default"].wxOpenId||"",o=new Image(0,0),i=[];i.push("version="+f),i.push("openid="+t),i.push("name="+encodeURIComponent(e)),i.push("message="+encodeURIComponent(n));var a=i.join("&");o.src=u+a,console.log("["+e+"] "+n)}Object.defineProperty(n,"__esModule",{value:!0});var r=t(20),p=o(r),c=t(9),s=o(c),u=s["default"].API_HOST+"/log.gif?",f="0.1";window.onerror=i,n["default"]={err:i,log:a}},,,,,,,,,,function(e,n,t){"use strict";var o=t(120);e.exports={wxConfigStatus:!1,wxConfigEnable:function(){this.wxConfigStatus=!0},set wxOpenId(e){(0,o.setCookie)("PIPA_OPENID",e,1080),localStorage.setItem("PIPA_OPENID",e)},get wxOpenId(){var e=localStorage.getItem("PIPA_OPENID")||(0,o.getCookie)("PIPA_OPENID");return e&&!localStorage.getItem("PIPA_OPENID")&&localStorage.setItem("PIPA_OPENID",e),e},clear:function(){localStorage.clear()}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){e.exports=t.p+"images/ico_point.png?7d5cacc"},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){e.exports=t.p+"images/arrow_right.png?6f010b5"},function(e,n,t){e.exports=t.p+"images/error.png?93b4f55"},,,,,,,function(e,n){"use strict";function t(e,n,t){var o=new Date;o.setTime(o.getTime()+60*t*60*1e3*24),document.cookie=e+"="+escape(n)+";path=/;expires="+o.toGMTString()}function o(e,n,t,o){var i=new Date;i.setTime(i.getTime()+24*t*60*60*1e3),document.cookie=e+"="+escape(n)+";path=/;expires="+i.toGMTString()+";domain="+o}function i(e){t(e,"",-1)}function a(e){var n,t=new RegExp("(^| )"+e+"=([^;]*)(;|$)");return(n=document.cookie.match(t))?unescape(n[2]):null}function r(e){var n=new RegExp("(^|&)"+e+"=([^&]*)(&|$)","i"),t=window.location.search.substr(1).match(n);return null!=t?unescape(t[2]):null}function p(e,n,t){var o=e.split("#")[0];return/\?/g.test(o)?/name=[-\w]{4,25}/g.test(o)?o=o.replace(/name=[-\w]{4,25}/g,n+"="+t):o+="&"+n+"="+t:o+="?"+n+"="+t,e=e.split("#")[1]?o+"#"+window.location.href.split("#")[1]:o}Object.defineProperty(n,"__esModule",{value:!0}),n.setCookie=t,n.setCookieEx=o,n.clearCookie=i,n.getCookie=a,n.getQueryString=r,n.addUrlParam=p},function(e,n,t){e.exports=t.p+"images/checkbox.png?e70af36"},function(e,n,t){e.exports=t.p+"images/checkbox_ed.png?04ae807"},function(e,n,t){e.exports=t.p+"images/close.png?141dfbe"},function(e,n,t){e.exports=t.p+"images/ico_line.png?774c020"},function(e,n,t){e.exports=t.p+"images/ico_tip2.png?c58c979"},function(e,n,t){e.exports=t.p+"images/ico_wal08.png?143e6f4"},function(e,n,t){e.exports=t.p+"images/radio.png?d1b60e2"},function(e,n,t){e.exports=t.p+"images/radio_ed.png?f0758bf"},function(e,n,t){e.exports=t.p+"images/triangle_down.png?5fc3bdb"},,,,,,,function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]={"*":{name:"home",component:function(e){t.e(0,function(n){var t=[n(131)];e.apply(null,t)}.bind(this))}},"/":{name:"home",component:function(e){t.e(0,function(n){var t=[n(131)];e.apply(null,t)}.bind(this))}},"/buy/:cardId":{name:"buy",component:function(e){t.e(1,function(n){var t=[n(303)];e.apply(null,t)}.bind(this))}},"/buy/result/:orderId":{name:"buy_result",component:function(e){t.e(7,function(n){var t=[n(304)];e.apply(null,t)}.bind(this))}},"/memcards":{name:"memcards",component:function(e){t.e(4,function(n){var t=[n(312)];e.apply(null,t)}.bind(this))}},"/card/active":{name:"active",component:function(e){t.e(8,function(n){var t=[n(302)];e.apply(null,t)}.bind(this))}},"/pay/cards":{name:"paycards",component:function(e){t.e(5,function(n){var t=[n(313)];e.apply(null,t)}.bind(this))}},"/pay/:cardId/:cardCode":{name:"pay",component:function(e){t.e(2,function(n){var t=[n(314)];e.apply(null,t)}.bind(this))}},"/pay/records":{name:"pay_records",component:function(e){t.e(15,function(n){var t=[n(315)];e.apply(null,t)}.bind(this))}},"/gift":{name:"gift",component:function(e){t.e(3,function(n){var t=[n(305)];e.apply(null,t)}.bind(this))}},"/gift/share/:cardId/:cardCode":{name:"gift_share",component:function(e){t.e(6,function(n){var t=[n(307)];e.apply(null,t)}.bind(this))}},"/gift/share/result/:cardId/:cardCode":{name:"gift_share_result",component:function(e){t.e(9,function(n){var t=[n(308)];e.apply(null,t)}.bind(this))}},"/gift/receive/:sign":{name:"gift_receive",component:function(e){t.e(10,function(n){var t=[n(306)];e.apply(null,t)}.bind(this))}},"/help":{name:"help",component:function(e){t.e(13,function(n){var t=[n(310)];e.apply(null,t)}.bind(this))}},"/guide":{name:"guide",component:function(e){t.e(14,function(n){var t=[n(309)];e.apply(null,t)}.bind(this))}},"/notice":{name:"notice",component:function(e){t.e(12,function(n){var t=[n(311)];e.apply(null,t)}.bind(this))}}}},,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n){},,,,,,,,,,,,,,,,,function(e,n,t){e.exports=t.p+"images/arrow_down.png?4c95530"},function(e,n,t){e.exports=t.p+"images/btn_minus.png?a5e2661"},function(e,n,t){e.exports=t.p+"images/btn_plus.png?c007f01"},function(e,n,t){e.exports=t.p+"images/clear.png?f29b7d6"},function(e,n,t){e.exports=t.p+"images/ico_addr.png?bf38304"},function(e,n,t){e.exports=t.p+"images/ico_btel.png?755bda6"},function(e,n,t){e.exports=t.p+"images/ico_chuli.png?854575e"},function(e,n,t){e.exports=t.p+"images/ico_donation.png?058c620"},function(e,n,t){e.exports=t.p+"images/ico_donation_tip.png?1714c85"},function(e,n,t){e.exports=t.p+"images/ico_fail.png?885c501"},function(e,n,t){e.exports=t.p+"images/ico_nocard.png?08189a7"},function(e,n,t){e.exports=t.p+"images/ico_nodata.png?e099b40"},function(e,n,t){e.exports=t.p+"images/ico_pay.png?0ed75bc"},function(e,n,t){e.exports=t.p+"images/ico_refresh.png?3a50a8b"},function(e,n,t){e.exports=t.p+"images/ico_sbg_sbtn.png?01d2afc"},function(e,n,t){e.exports=t.p+"images/ico_scan.png?01aca23"},function(e,n,t){e.exports=t.p+"images/ico_sel.png?a25b5d1"},function(e,n,t){e.exports=t.p+"images/ico_selon.png?c74f081"},function(e,n,t){e.exports=t.p+"images/ico_share.png?47f76b5"},function(e,n,t){e.exports=t.p+"images/ico_success.png?448a649"},function(e,n,t){e.exports=t.p+"images/ico_tel.png?649dc2d"},function(e,n,t){e.exports=t.p+"images/ico_tip.png?76e9a29"},function(e,n,t){e.exports=t.p+"images/ico_use.png?7d22808"},function(e,n,t){e.exports=t.p+"images/ico_wal01.png?d1f1346"},function(e,n,t){e.exports=t.p+"images/ico_wal02.png?eaebbe6"},function(e,n,t){e.exports=t.p+"images/ico_wal03.png?3fdeff9"},function(e,n,t){e.exports=t.p+"images/ico_wal04.png?79eef86"},function(e,n,t){e.exports=t.p+"images/ico_wal05.png?5ac98de"},function(e,n,t){e.exports=t.p+"images/ico_wal06.png?d8ed375"},function(e,n,t){e.exports=t.p+"images/ico_wal07.png?a1da885"},function(e,n,t){e.exports=t.p+"images/ico_wal09.png?8e77d4a"},function(e,n,t){e.exports=t.p+"images/ico_wal10.png?a405bb9"},function(e,n,t){e.exports=t.p+"images/ico_wal11.png?7f223ae"},function(e,n,t){e.exports=t.p+"images/location.png?1dfa227"},function(e,n,t){e.exports=t.p+"images/menu.png?856c4e1"},function(e,n,t){e.exports=t.p+"images/no_data.png?b29b0ec"},,function(e,n,t){e.exports=t.p+"images/search.png?d7f92b1"},function(e,n,t){e.exports=t.p+"images/tips.png?42cf1f5"},,,,,,function(e,n){e.exports=" <div> <router-view transition transition-mode=out-in></router-view> </div> "},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,n,t){var o,i;t(195),o=t(136),i=t(256),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),i&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=i)}]);