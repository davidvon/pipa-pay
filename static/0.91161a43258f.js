webpackJsonp([0],{11:function(a,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:{type:Boolean,"default":!1},text:{type:String,"default":"加载中..."}}}},13:function(a,e){a.exports=' <div id=loadingToast class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},14:function(a,e,o){var t,i;t=o(11),i=o(13),a.exports=t||{},a.exports.__esModule&&(a.exports=a.exports["default"]),i&&(("function"==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=i)},45:function(a,e,o){"use strict";function t(a){return a&&a.__esModule?a:{"default":a}}function i(a,e,o,t,i,n){c["default"].log("onMenuShareAppMessage","title:"+e),wx&&wx.onMenuShareAppMessage({title:e,desc:o,link:a,imgUrl:t,success:function(){c["default"].log("onMenuShareAppMessage","success"),i&&i()},cancel:function(){n&&n()}})}function n(a,e,o,t,i,n){wx&&wx.onMenuShareTimeline({title:e,link:a,desc:o,imgUrl:t,success:function(){i&&i()},cancel:function(){n&&n()}})}function s(a,e,o){var t=u["default"].wxOpenId,s=u["default"].wxConfigStatus;if(!t||s)return c["default"].log("wxRegister","discarded, openid:"+t+", wxConfig status:"+s),void(e&&e());var d=location.href.split("#")[0];c["default"].log("wxRegister","register url:"+d),a.$http.post(p["default"].API_URL+"weixin/sign/jsapi",{url:d}).then(function(t){c["default"].log("wxRegister","jsapi response ok"),a.loading=!1,t&&t.data?(wx.config({debug:!1,appId:t.data.appId,timestamp:t.data.timestamp,nonceStr:t.data.nonceStr,signature:t.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","chooseImage","uploadImage","scanQRCode","openCard","addCard","chooseWXPay"]}),wx.ready(function(){c["default"].log("wxRegister","wx.config ok..."),u["default"].wxConfigEnable(),n(location.origin+location.pathname,p["default"].shareTitle,p["default"].shareDesc,p["default"].shareLogo),i(location.origin+location.pathname,p["default"].shareTitle,p["default"].shareDesc,p["default"].shareLogo),e&&e()}),wx.error(function(a){c["default"].log("wxRegister","wx config error:"+a.errMsg),o&&o()})):o&&o()},function(a){c["default"].err("wxRegister",a),o&&o()})}Object.defineProperty(e,"__esModule",{value:!0}),e.onMenuShareAppMessage=i,e.onMenuShareTimeline=n,e.wxRegister=s;var d=o(10),c=t(d),r=o(9),p=t(r),l=o(17),u=t(l)},131:function(a,e,o){var t,i;o(207),t=o(136),i=o(283),a.exports=t||{},a.exports.__esModule&&(a.exports=a.exports["default"]),i&&(("function"==typeof a.exports?a.exports.options||(a.exports.options={}):a.exports).template=i)},136:function(a,e,o){"use strict";function t(a){return a&&a.__esModule?a:{"default":a}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(45),n=o(9),s=t(n);e["default"]={components:{Loading:o(14)},data:function(){return{loading:!1,buy_url:"/buy/"+s["default"].cardId}},ready:function(){var a=this;this.loading=!0,(0,i.wxRegister)(this,function(){a.loading=!1})},methods:{go:function(a){this.$route.router.go(a)},goByName:function(a){this.$route.router.go({name:a})}}}},191:function(a,e,o){e=a.exports=o(1)(),e.push([a.id,".demo-icon[_v-57127bda]{font-family:vux-demo;font-size:20px;padding-right:10px;color:#04be02}.home[_v-57127bda]{background-color:#fbf9fe}.home .bg[_v-57127bda]{background-color:#fff}.home .vue-home.center[_v-57127bda]{margin-top:0;text-align:center;padding:20px 0;background-color:#09bb07}.home .item[_v-57127bda]{display:block;box-sizing:border-box;font-size:12px;color:#303030;position:relative;margin-bottom:30px}.home .img[_v-57127bda]{width:40px;height:40px;margin:30px auto 3px;background-repeat:no-repeat;background-size:40px auto!important;background-position:50%}.home .text[_v-57127bda]{font-size:13px;text-align:center;line-height:1em}.home .icon-buy[_v-57127bda]{background:url('http://wx.cdn.pipapay.com/static/images/ico_wal01.png') no-repeat}.home .icon-pay[_v-57127bda]{background:url('http://wx.cdn.pipapay.com/static/images/ico_wal03.png') no-repeat}.home .icon-mycard[_v-57127bda]{background:url('http://wx.cdn.pipapay.com/static/images/ico_wal07.png') no-repeat}.home .icon-share[_v-57127bda]{background:url('http://wx.cdn.pipapay.com/static/images/ico_wal04.png') no-repeat}.home .icon-buy-online[_v-57127bda]{background:url('http://wx.cdn.pipapay.com/static/images/ico_wal08.png') no-repeat}.home .icon-desc[_v-57127bda]{background:url('http://wx.cdn.pipapay.com/static/images/ico_wal10.png') no-repeat}.home .icon-help[_v-57127bda]{background:url('http://wx.cdn.pipapay.com/static/images/ico_wal06.png') no-repeat}.home .icon-guide[_v-57127bda]{background:url('http://wx.cdn.pipapay.com/static/images/ico_wal11.png') no-repeat}",""])},207:function(a,e,o){var t=o(191);"string"==typeof t&&(t=[[a.id,t,""]]);o(2)(t,{});t.locals&&(a.exports=t.locals)},246:function(a,e,o){a.exports=o.p+"images/pipalogo-white2.png?a45629a"},283:function(a,e,o){a.exports=' <div class=home _v-57127bda=""> <div class="vue-home center" _v-57127bda=""> <h1 class=vux-title style="padding:10px 0 0px" _v-57127bda=""> <img style=width:80px src='+o(246)+' _v-57127bda=""> </h1> <p class=vux-notice style="padding:0 0 10px;color:#fff" _v-57127bda="">噼啪礼品卡</p> </div> <div class=container data-js="" _v-57127bda=""> <div id=walmart_0 class=flex _v-57127bda=""> <div class="content min_height" _v-57127bda=""> <div class="wal_ibox border b_btm" _v-57127bda=""> <div class="navs border b_rgt btn-buy" @click=go(buy_url) _v-57127bda=""><p class="nav_p ico_nav1" _v-57127bda="">购卡</p></div> <div class="navs border b_rgt btn-consume" @click="goByName(\'paycards\')" _v-57127bda=""><p class="nav_p ico_nav3" _v-57127bda="">支付</p></div> <div class="navs btn-give" @click="goByName(\'gift\')" _v-57127bda=""><p class="nav_p ico_nav8" _v-57127bda="">赠送卡</p></div> </div> <div class="wal_ibox border b_btm" _v-57127bda=""> <div class="navs border b_rgt" _v-57127bda=""><p class="nav_p ico_nav4" _v-57127bda="">在线购物</p></div> <div class="navs border b_rgt btn-card" @click="goByName(\'memcards\')" _v-57127bda=""><p class="nav_p ico_nav7" _v-57127bda="">我的卡包</p></div> <div class="navs btn-help" @click="goByName(\'guide\')" _v-57127bda=""><p class="nav_p ico_nav6" _v-57127bda="">购卡指引</p></div> </div> <div class="wal_ibox border b_btm" _v-57127bda=""> <div class="navs border b_rgt btn-gift" @click="goByName(\'help\')" _v-57127bda=""><p class="nav_p ico_nav9" _v-57127bda="">帮助中心</p></div> <div class="navs border b_rgt btn-notice" @click="goByName(\'notice\')" _v-57127bda=""><p class="nav_p ico_nav10" _v-57127bda="">电子卡章程</p></div> <div class=navs _v-57127bda=""></div> </div> </div> </div> </div> <loading :show.sync=loading :text="" _v-57127bda=""></loading> </div> '}});