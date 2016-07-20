webpackJsonp([10],{3:function(t,e){var a=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=a)},11:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{show:{type:Boolean,"default":!1},text:{type:String,"default":"加载中..."}}}},13:function(t,e){t.exports=' <div id=loadingToast class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},14:function(t,e,a){var s,n;s=a(11),n=a(13),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},18:function(t,e,a){t.exports={"default":a(22),__esModule:!0}},21:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:{type:{"default":"default"},disabled:{type:Boolean,"default":!1},mini:{type:Boolean,"default":!1},plain:{type:Boolean,"default":!1},text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},22:function(t,e,a){var s=a(3),n=s.JSON||(s.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}},25:function(t,e){t.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},26:function(t,e,a){var s,n;s=a(21),n=a(25),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},59:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}function n(t,e,a){l["default"].log("addCard","invoking wx:"+(0,u["default"])(t)),wx.addCard({cardList:t,success:function(t){l["default"].log("addCard","add card success:"+t+", json:"+(0,u["default"])(t.cardList)),e&&e(t.cardList)},cancel:function(t){a&&a()},fail:function(t){a&&a()}})}function o(t,e,a,s,o,i){t.$http.post(s+"weixin/card/add",{card_global_id:e,openid:a}).then(function(t){var a=t.data;if(0==a.result){var s=a.data,d=[];d.push({cardId:s.id,cardExt:'{"timestamp":"'+s.timestamp+'","signature":"'+s.signature+'"}'}),n(d,o,i)}else l["default"].log("wxAddCard","post add-card:"+e+" failed"),i&&i()},function(){l["default"].log("wxAddCard","post add-card:"+e+" exception"),i&&i()})}function i(t,e,a,s,o,i){t.$http.post(s+"weixin/cards/add",{orderId:e,openid:a}).then(function(t){var a=t.data;if(0==a.result){for(var s=a.data,d=[],r=0;r<s&&s.length;r++){var u=s[r];d.push({cardId:u.id,cardExt:'{"timestamp":"'+u.timestamp+'","signature":"'+u.signature+'"}'})}n(d,o,i)}else l["default"].log("wxAddCards","post add-cards order:"+e+" failed"),i&&i()},function(){l["default"].log("wxAddCards","post add-cards order:"+e+" exception"),i&&i()})}function d(t,e,a,s,n){l["default"].log("wxOpenCard","cardId:"+e+" code:"+a),wx.openCard({cardList:[{cardId:e,code:a}],success:function(t){var e=t.cardList;l["default"].log("wxOpenCard","card list:"+e),s&&s(e)},cancel:function(t){n&&n()},fail:function(t){n&&n()}})}Object.defineProperty(e,"__esModule",{value:!0});var r=a(18),u=s(r);e.wxAddCard=o,e.wxAddCards=i,e.wxOpenCard=d;var c=a(10),l=s(c)},153:function(t,e,a){"use strict";function s(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=a(59),o=a(9),i=s(o),d=a(17),r=s(d),u=a(10),c=s(u);e["default"]={components:{Loading:a(14),XButton:a(26)},data:function(){return{no_data:!1,info:{giveUserHeadImg:"/static/images/ico-head.png",giveUsername:"",shareContent:"",cardStatus:0,giveStatus:0,acquireUserOpenId:""},loading:!1,statusStr:""}},methods:{onHome:function(){this.$route.router.go({name:"home"})},onBuyCard:function(){this.$route.router.go({name:"buy"})},onReceiveCard:function(){this.loading=!0;var t=this;c["default"].log("CardGiftReceive"," openid:"+t.openid+" sign:"+t.sign),this.$http.post(i["default"].API_URL+"card/receive",{openId:t.openid,sign:t.sign}).then(function(e){this.loading=!1;var a=e.data;c["default"].log("CardGiftReceive","ack status:"+a.result),255!=a.result&&(1==a.data.status?(0,n.wxOpenCard)(t,a.data.wxCardId,a.data.code,function(e){t.$route.router.go({name:"memcards"})}):(0,n.wxAddCard)(t,a.data.cardGlobalId,t.openid,i["default"].API_URL,function(e){t.$route.router.go({name:"memcards"})}))},function(){this.loading=!1})}},ready:function(){var t=this;this.loading=!0,this.$http.post(i["default"].API_URL+"card/receive/check",{openId:t.openid,sign:t.sign}).then(function(e){t.loading=!1;var a=e.data;return 255==a.result?void(t.no_data=!0):(t.info=a.data,c["default"].log("CardGiftReceive","myself:"+t.openid+" giving status:"+t.info.giveStatus+", card status:"+t.info.cardStatus),void(0==t.info.giveStatus?t.statusStr="领取电子卡":t.info.acquireUserOpenId!=t.openid?t.statusStr="已被领取":0==t.info.cardStatus?t.statusStr="已领取，未放入卡包":1==t.info.cardStatus?t.statusStr="已放入微信卡包未激活":2==t.info.cardStatus?t.statusStr="已放入微信卡包已激活":3==t.info.cardStatus?t.statusStr="已过期":4==t.info.cardStatus?t.statusStr="转赠中":t.statusStr="已转赠"))})},route:{data:function(t){this.openid=r["default"].wxOpenId,this.sign=t.to.params.sign}}}},272:function(t,e){t.exports=' <div> <div class=content> <div class=not_card v-show=no_data> <p class=ncd_p1><span class=ico_nocard></span></p> <p class=ncd_p2>赠送的电子卡不存在~~</p> <p class=ncd_p3> <x-button type=primary @click=onBuyCard>购买电子卡</x-button> <x-button @click=onHome>首页</x-button> </p> </div> <div v-show=!no_data> <div class=lk_top> <div class=lk_toux><span class=toux_img><img :src=info.giveUserHeadImg class=give-user></span></div> <p class=lk_tp1><em class=give-user-name>{{info.giveUsername}}</em>赠送的礼品卡</p> <p class="lk_tp2 give-content">{{info.shareContent}}</p> </div> <p class="lk_btn_p can-receive"> <x-button :type="info.giveStatus==0?\'primary\':\'\'" :disabled="info.giveStatus!=0" @click=onReceiveCard> {{statusStr}} </x-button> </p> <p class="lk_tit2 none"><span class="lk_cbox text-status"></span></p> </div> </div> <loading :show.sync=loading :text=""></loading> </div> '},302:function(t,e,a){var s,n;s=a(153),n=a(272),t.exports=s||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}});