webpackJsonp([7],{3:function(e,t){var o=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{leftOptions:{type:Object,"default":function(){return{showBack:!0,backText:"Back",preventGoBack:!1}}},rightOptions:{type:Object,"default":function(){return{showMore:!1}}}},methods:{onClickBack:function(){this.leftOptions.preventGoBack?this.$emit("on-click-back"):history.back()}}}},5:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#fff}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;margin-left:100px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#000}.vux-header .vux-header-title a,.vux-header .vux-header-title a:active,.vux-header h1 a,.vux-header h1 a:active{color:#fff}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#ccc}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#000}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .vux-header-back:before{content:"";position:absolute;display:block;top:2px;left:0;width:12px;height:12px;border:1px solid #000;border-width:1px 0 0 1px;margin-left:3px;margin-top:1px;-webkit-transform:rotate(315deg);transform:rotate(315deg)}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}',""])},6:function(e,t,o){var a=o(5);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},7:function(e,t){e.exports=" <div class=vux-header> <div class=vux-header-left> <a class=vux-header-back @click.preventdefault v-show=leftOptions.showBack @click=onClickBack>{{leftOptions.backText}}</a> <slot name=left></slot> </div> <h1 class=vux-header-title><slot></slot></h1> <div class=vux-header-right> <a class=vux-header-more @click.preventdefault @click=\"$emit('on-click-more')\" v-if=rightOptions.showMore></a> <slot name=right></slot> </div> </div> "},8:function(e,t,o){var a,s;o(6),a=o(4),s=o(7),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},11:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,"default":!1},text:{type:String,"default":"加载中..."}}}},13:function(e,t){e.exports=' <div id=loadingToast class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},14:function(e,t,o){var a,s;a=o(11),s=o(13),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},15:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{"default":"default"},disabled:{type:Boolean,"default":!1},mini:{type:Boolean,"default":!1},plain:{type:Boolean,"default":!1},text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},18:function(e,t){e.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},19:function(e,t,o){var a,s;a=o(15),s=o(18),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},21:function(e,t,o){e.exports={"default":o(24),__esModule:!0}},24:function(e,t,o){var a=o(3),s=a.JSON||(a.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},32:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,required:!0,"default":!1,twoWay:!0},showCancel:{type:Boolean,"default":!1},cancelText:{type:String,"default":"取消"},menus:{type:Object,"default":{}}},methods:{emitEvent:function(e,t){"on-click-menu"!==e||/.noop/.test(t)||(this.$emit(e,t),this.$emit(e+"-"+t),this.show=!1)}}}},36:function(e,t,o){t=e.exports=o(1)(),t.push([e.id,".vux-actionsheet-gap{height:8px;width:100%;background-color:#eee}.vux-actionsheet-cancel:before{border-top:none}",""])},38:function(e,t,o){var a=o(36);"string"==typeof a&&(a=[[e.id,a,""]]);o(2)(a,{});a.locals&&(e.exports=a.locals)},40:function(e,t){e.exports=' <div> <div class=weui_mask_transition :class="{\'weui_fade_toggle\': show}" :style="{display: show ? \'block\' : \'none\'}" @click="show=false"></div> <div class=weui_actionsheet :class="{\'weui_actionsheet_toggle\': show}"> <div class=weui_actionsheet_menu> <div class=weui_actionsheet_cell v-for="(key, text) in menus" @click="emitEvent(\'on-click-menu\', key)" v-html=text> </div> <div class=vux-actionsheet-gap v-if=showCancel></div> <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="emitEvent(\'on-click-menu\', \'cancel\')" v-if=showCancel>{{cancelText}}</div> </div> </div> </div> '},42:function(e,t,o){var a,s;o(38),a=o(32),s=o(40),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},58:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function s(e,t,o){l["default"].log("addCard","invoking wx:"+(0,c["default"])(e)),wx.addCard({cardList:e,success:function(e){l["default"].log("addCard","add card success:"+e+", json:"+(0,c["default"])(e.cardList)),t&&t(e.cardList)},cancel:function(e){o&&o()},fail:function(e){o&&o()}})}function i(e,t,o,a,i,n){e.$http.post(a+"weixin/card/add",{card_global_id:t,openid:o}).then(function(e){var o=e.data;if(0==o.result){var a=o.data,r=[];r.push({cardId:a.id,cardExt:'{"timestamp":"'+a.timestamp+'","signature":"'+a.signature+'"}'}),s(r,i,n)}else l["default"].log("wxAddCard","post add-card:"+t+" failed"),n&&n()},function(){l["default"].log("wxAddCard","post add-card:"+t+" exception"),n&&n()})}function n(e,t,o,a,i,n){e.$http.post(a+"weixin/cards/add",{orderId:t,openid:o}).then(function(e){var o=e.data;if(0==o.result){for(var a=o.data,r=[],d=0;d<a&&a.length;d++){var c=a[d];r.push({cardId:c.id,cardExt:'{"timestamp":"'+c.timestamp+'","signature":"'+c.signature+'"}'})}s(r,i,n)}else l["default"].log("wxAddCards","post add-cards order:"+t+" failed"),n&&n()},function(){l["default"].log("wxAddCards","post add-cards order:"+t+" exception"),n&&n()})}function r(e,t,o,a,s){l["default"].log("wxOpenCard","cardId:"+t+" code:"+o),wx.openCard({cardList:[{cardId:t,code:o}],success:function(e){var t=e.cardList;l["default"].log("wxOpenCard","card list:"+t),a&&a(t)},cancel:function(e){s&&s()},fail:function(e){s&&s()}})}Object.defineProperty(t,"__esModule",{value:!0});var d=o(21),c=a(d);t.wxAddCard=i,t.wxAddCards=n,t.wxOpenCard=r;var u=o(10),l=a(u)},152:function(e,t,o){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(9),i=a(s),n=o(20),r=a(n),d=o(58);t["default"]={components:{XHeader:o(8),XButton:o(19),Actionsheet:o(42),Loading:o(14)},data:function(){return{order_id:"",buy_status:1,cards:{number:0,amount:0},menus:{home:"首页"},loading:!1,showMenus:!1}},ready:function(){var e=this;e.loading=!0,e.$http.post(i["default"].API_URL+"card/dispatch",{order_id:e.order_id}).then(function(t){e.loading=!1;var o=t.data;0==o.result?(e.cards.number=o.data.count,e.cards.amount=o.data.amount,e.buy_status=0):(e.buy_status=255,e.loading=!1)},function(){e.buy_status=255,e.loading=!1})},route:{data:function(e){this.openid=r["default"].wxOpenId,this.order_id=e.to.params.orderId}},methods:{clickMemCard:function(){if(0!=this.cards.number){var e=this;e.Loading=!0,(0,d.wxAddCards)(e,e.order_id,e.openid,i["default"].API_URL,function(t){e.Loading=!1,console.log("wx.addCard:"+t),e.$route.router.replace({name:"memcards"})},function(){e.Loading=!1})}},onHome:function(){this.$route.router.replace({name:"home"})},onPay:function(){this.$route.router.replace({name:"paycards"})}}}},272:function(e,t){e.exports=' <div class=order-result> <x-header :left-options=\'{showBack:true, backText:"返回"}\' :right-options={showMore:true} @on-click-more="showMenus=true">购买 </x-header> <actionsheet :menus=menus :show.sync=showMenus show-cancel @on-click-menu-home=onHome></actionsheet> <div id=result-page class=flex> <div class="content pay_success" v-show="buy_status==1"> <p class=top_icop><span class="ico_tip ico_success"></span></p> <p class=tips_p1>支付成功</p> <p class=tips_p2>正在为你分配礼品卡，请稍后…</p> </div> <div class="content trade_success" v-show="buy_status==0"> <p class=top_icop><span class="ico_tip ico_success"></span></p> <p class=tips_p1>购卡成功</p> <p class=tips_p2>你获得 <span class="col0 number">{{cards.number}}张</span> 面值 <span class="col0 amount">{{cards.amount}}元</span> 的礼品卡 </p> <p class=card_pbtn> <x-button type=primary @click=clickMemCard>转赠</x-button> <x-button @click=onPay>去支付</x-button> </p> </div> <div class="content trade_fail" v-show="buy_status==255"> <p class=top_icop><span class="ico_tip ico_fail"></span></p> <p class=tips_p1>购卡失败, 订单号:{{order_id}}</p> <p class=tips_p2>请致电4000-888-400联系客服人员进行处理</p> </div> </div> <loading :show.sync=loading :text=""></loading> </div> '},303:function(e,t,o){var a,s;a=o(152),s=o(272),e.exports=a||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}});