webpackJsonp([7],{3:function(e,t){var a=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=a)},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{leftOptions:{type:Object,"default":function(){return{showBack:!0,backText:"Back",preventGoBack:!1}}},rightOptions:{type:Object,"default":function(){return{showMore:!1}}}},methods:{onClickBack:function(){this.leftOptions.preventGoBack?this.$emit("on-click-back"):history.back()}}}},5:function(e,t,a){t=e.exports=a(1)(),t.push([e.id,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#fff}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;margin-left:100px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#000}.vux-header .vux-header-title a,.vux-header .vux-header-title a:active,.vux-header h1 a,.vux-header h1 a:active{color:#fff}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#ccc}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#000}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .vux-header-back:before{content:"";position:absolute;display:block;top:2px;left:0;width:12px;height:12px;border:1px solid #000;border-width:1px 0 0 1px;margin-left:3px;margin-top:1px;-webkit-transform:rotate(315deg);transform:rotate(315deg)}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}',""])},6:function(e,t,a){var o=a(5);"string"==typeof o&&(o=[[e.id,o,""]]);a(2)(o,{});o.locals&&(e.exports=o.locals)},7:function(e,t){e.exports=" <div class=vux-header> <div class=vux-header-left> <a class=vux-header-back @click.preventdefault v-show=leftOptions.showBack @click=onClickBack>{{leftOptions.backText}}</a> <slot name=left></slot> </div> <h1 class=vux-header-title><slot></slot></h1> <div class=vux-header-right> <a class=vux-header-more @click.preventdefault @click=\"$emit('on-click-more')\" v-if=rightOptions.showMore></a> <slot name=right></slot> </div> </div> "},8:function(e,t,a){var o,s;a(6),o=a(4),s=a(7),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},11:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,"default":!1},text:{type:String,"default":"加载中..."}}}},13:function(e,t){e.exports=' <div id=loadingToast class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},14:function(e,t,a){var o,s;o=a(11),s=a(13),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},18:function(e,t,a){e.exports={"default":a(22),__esModule:!0}},22:function(e,t,a){var o=a(3),s=o.JSON||(o.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},27:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,required:!0,"default":!1,twoWay:!0},showCancel:{type:Boolean,"default":!1},cancelText:{type:String,"default":"取消"},menus:{type:Object,"default":{}}},methods:{emitEvent:function(e,t){"on-click-menu"!==e||/.noop/.test(t)||(this.$emit(e,t),this.$emit(e+"-"+t),this.show=!1)}}}},32:function(e,t,a){t=e.exports=a(1)(),t.push([e.id,".vux-actionsheet-gap{height:8px;width:100%;background-color:#eee}.vux-actionsheet-cancel:before{border-top:none}",""])},33:function(e,t,a){var o=a(32);"string"==typeof o&&(o=[[e.id,o,""]]);a(2)(o,{});o.locals&&(e.exports=o.locals)},34:function(e,t){e.exports=' <div> <div class=weui_mask_transition :class="{\'weui_fade_toggle\': show}" :style="{display: show ? \'block\' : \'none\'}" @click="show=false"></div> <div class=weui_actionsheet :class="{\'weui_actionsheet_toggle\': show}"> <div class=weui_actionsheet_menu> <div class=weui_actionsheet_cell v-for="(key, text) in menus" @click="emitEvent(\'on-click-menu\', key)" v-html=text> </div> <div class=vux-actionsheet-gap v-if=showCancel></div> <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="emitEvent(\'on-click-menu\', \'cancel\')" v-if=showCancel>{{cancelText}}</div> </div> </div> </div> '},37:function(e,t,a){var o,s;a(33),o=a(27),s=a(34),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},59:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function s(e,t,a){l["default"].log("addCard","invoking wx:"+(0,c["default"])(e)),wx.addCard({cardList:e,success:function(e){l["default"].log("addCard","add card success:"+e+", json:"+(0,c["default"])(e.cardList)),t&&t(e.cardList)},cancel:function(e){a&&a()},fail:function(e){a&&a()}})}function i(e,t,a,o,i,n){e.$http.post(o+"weixin/card/add",{card_global_id:t,openid:a}).then(function(e){var a=e.data;if(0==a.result){var o=a.data,r=[];r.push({cardId:o.id,cardExt:'{"timestamp":"'+o.timestamp+'","signature":"'+o.signature+'"}'}),s(r,i,n)}else l["default"].log("wxAddCard","post add-card:"+t+" failed"),n&&n()},function(){l["default"].log("wxAddCard","post add-card:"+t+" exception"),n&&n()})}function n(e,t,a,o,i,n){e.$http.post(o+"weixin/cards/add",{orderId:t,openid:a}).then(function(e){var a=e.data;if(0==a.result){for(var o=a.data,r=[],d=0;d<o&&o.length;d++){var c=o[d];r.push({cardId:c.id,cardExt:'{"timestamp":"'+c.timestamp+'","signature":"'+c.signature+'"}'})}s(r,i,n)}else l["default"].log("wxAddCards","post add-cards order:"+t+" failed"),n&&n()},function(){l["default"].log("wxAddCards","post add-cards order:"+t+" exception"),n&&n()})}function r(e,t,a,o,s){l["default"].log("wxOpenCard","cardId:"+t+" code:"+a),wx.openCard({cardList:[{cardId:t,code:a}],success:function(e){var t=e.cardList;l["default"].log("wxOpenCard","card list:"+t),o&&o(t)},cancel:function(e){s&&s()},fail:function(e){s&&s()}})}Object.defineProperty(t,"__esModule",{value:!0});var d=a(18),c=o(d);t.wxAddCard=i,t.wxAddCards=n,t.wxOpenCard=r;var u=a(10),l=o(u)},151:function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(9),i=o(s),n=a(17),r=o(n),d=a(59);t["default"]={components:{XHeader:a(8),Actionsheet:a(37),Loading:a(14)},data:function(){return{order_id:"",buy_status:1,cards:{number:0,amount:0},menus:{home:"首页"},loading:!1,showMenus:!1,alert:{message:"",show:!1}}},ready:function(){var e=this;e.loading=!0,e.$http.post(i["default"].API_URL+"card/dispatch",{order_id:e.order_id}).then(function(t){e.loading=!1;var a=t.data;0==a.result?(e.cards.number=a.data.count,e.cards.amount=a.data.amount,e.buy_status=0):(e.buy_status=255,e.loading=!1)},function(){e.buy_status=255,e.loading=!1})},route:{data:function(e){this.openid=r["default"].wxOpenId,this.order_id=e.to.params.orderId}},methods:{clickMemCard:function(){if(0!=this.cards.number){var e=this;e.Loading=!0,(0,d.wxAddCards)(e,e.order_id,e.openid,i["default"].API_URL,function(t){e.Loading=!1,console.log("wx.addCard:"+t),e.$route.router.replace({name:"memcards"})},function(){e.Loading=!1})}},onHome:function(){this.$route.router.replace({name:"home"})}}}},270:function(e,t){e.exports=' <div class=order-result> <x-header :left-options=\'{showBack:true, backText:"返回"}\' :right-options={showMore:true} @on-click-more="showMenus=true">购买 </x-header> <actionsheet :menus=menus :show.sync=showMenus show-cancel @on-click-menu-home=onHome></actionsheet> <div id=result-page class=flex> <div class="content pay_success" v-show="buy_status==1"> <p class=top_icop><span class="ico_tip ico_success"></span></p> <p class=tips_p1>支付成功</p> <p class=tips_p2>正在为你分配礼品卡，请稍后…</p> </div> <div class="content trade_success" v-show="buy_status==0"> <p class=top_icop><span class="ico_tip ico_success"></span></p> <p class=tips_p1>购卡成功</p> <p class=tips_p2>你获得 <span class="col0 number">{{cards.number}}张</span> 面值 <span class="col0 amount">{{cards.amount}}元</span> 的礼品卡 </p> <p class=card_pbtn> <button class="blue_btn btn-memcard" type=button @click=clickMemCard>放入微信卡包</button> </p> </div> <div class="content trade_fail" v-show="buy_status==255"> <p class=top_icop><span class="ico_tip ico_fail"></span></p> <p class=tips_p1>购卡失败, 订单号:{{order_id}}</p> <p class=tips_p2>请致电4000-888-400联系客服人员进行处理</p> </div> </div> <loading :show.sync=loading :text=""></loading> </div> '},300:function(e,t,a){var o,s;o=a(151),s=a(270),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}});