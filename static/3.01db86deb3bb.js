webpackJsonp([3],{1:function(e,t){var o=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=o)},4:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{leftOptions:{type:Object,"default":function(){return{showBack:!0,backText:"Back",preventGoBack:!1}}},rightOptions:{type:Object,"default":function(){return{showMore:!1}}}},methods:{onClickBack:function(){this.leftOptions.preventGoBack?this.$emit("on-click-back"):history.back()}}}},5:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,'.vux-header{position:relative;padding:3px 0;box-sizing:border-box;background-color:#fff}.vux-header .vux-header-title,.vux-header h1{margin:0 88px;margin-left:100px;line-height:40px;text-align:center;height:40px;font-size:18px;font-weight:400;width:auto;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#000}.vux-header .vux-header-title a,.vux-header .vux-header-title a:active,.vux-header h1 a,.vux-header h1 a:active{color:#fff}.vux-header .vux-header-left,.vux-header .vux-header-right{position:absolute;top:14px;display:block;font-size:14px;line-height:21px;color:#ccc}.vux-header .vux-header-left a,.vux-header .vux-header-left button,.vux-header .vux-header-right a,.vux-header .vux-header-right button{float:left;margin-right:8px;color:#000}.vux-header .vux-header-left a:active,.vux-header .vux-header-left button:active,.vux-header .vux-header-right a:active,.vux-header .vux-header-right button:active{opacity:.5}.vux-header .vux-header-left{left:18px}.vux-header .vux-header-left .vux-header-back{padding-left:16px}.vux-header .vux-header-left .vux-header-back:before{content:"";position:absolute;display:block;top:2px;left:0;width:12px;height:12px;border:1px solid #000;border-width:1px 0 0 1px;margin-left:3px;margin-top:1px;-webkit-transform:rotate(315deg);transform:rotate(315deg)}.vux-header .vux-header-right{right:15px}.vux-header .vux-header-right a,.vux-header .vux-header-right button{margin-left:8px;margin-right:0}.vux-header .vux-header-right .vux-header-more:after{content:"\\2022   \\2022   \\2022   ";font-size:16px}',""])},6:function(e,t,o){var i=o(5);"string"==typeof i&&(i=[[e.id,i,""]]);o(3)(i,{});i.locals&&(e.exports=i.locals)},7:function(e,t){e.exports=" <div class=vux-header> <div class=vux-header-left> <a class=vux-header-back @click.preventdefault v-show=leftOptions.showBack @click=onClickBack>{{leftOptions.backText}}</a> <slot name=left></slot> </div> <h1 class=vux-header-title><slot></slot></h1> <div class=vux-header-right> <a class=vux-header-more @click.preventdefault @click=\"$emit('on-click-more')\" v-if=rightOptions.showMore></a> <slot name=right></slot> </div> </div> "},8:function(e,t,o){var i,s;o(6),i=o(4),s=o(7),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},9:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,"default":!1},text:{type:String,"default":"加载中..."}}}},10:function(e,t){e.exports=' <div id=loadingToast class=weui_loading_toast v-show=show> <div class=weui_mask_transparent></div> <div class=weui_toast> <div class=weui_loading> <div class=weui_loading_leaf v-for="i in 12" :class="[\'weui_loading_leaf_\' + i]"></div> </div> <p class=weui_toast_content>{{text}}<slot></slot></p> </div> </div> '},11:function(e,t,o){var i,s;i=o(9),s=o(10),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},13:function(e,t,o){e.exports={"default":o(17),__esModule:!0}},16:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{"default":"default"},disabled:{type:Boolean,"default":!1},mini:{type:Boolean,"default":!1},plain:{type:Boolean,"default":!1},text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},17:function(e,t,o){var i=o(1),s=i.JSON||(i.JSON={stringify:JSON.stringify});e.exports=function(e){return s.stringify.apply(s,arguments)}},20:function(e,t){e.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},21:function(e,t,o){var i,s;i=o(16),s=o(20),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},24:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(32),a=i(s);t["default"]={components:{Dialog:a["default"]},props:{show:{type:Boolean,"default":!1},title:{type:String,required:!0},buttonText:{type:String,"default":"OK"},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},methods:{onHide:function(){this.show=!1}}}},25:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,"default":!1},maskTransition:{type:String,"default":"vux-fade"},dialogTransition:{type:String,"default":"vux-dialog"}},watch:{show:function(e){this.$emit(e?"on-show":"on-hide")}}}},29:function(e,t){e.exports=' <dialog class=weui_dialog_alert :show=show :mask-transition=maskTransition :dialog-transition=dialogTransition @on-hide="$emit(\'on-hide\')" @on-show="$emit(\'on-show\')"> <div class=weui_dialog_hd><strong class=weui_dialog_title>{{title}}</strong></div> <div class=weui_dialog_bd><slot></slot></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog primary" @click=onHide>{{buttonText}}</a> </div> </dialog> '},30:function(e,t){e.exports=" <div class=weui_dialog_alert v-show=show :transition=maskTransition> <div class=weui_mask></div> <div class=weui_dialog v-show=show :transition=dialogTransition> <slot></slot> </div> </div> "},31:function(e,t,o){var i,s;i=o(24),s=o(29),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},32:function(e,t,o){var i,s;i=o(25),s=o(30),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},38:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{show:{type:Boolean,required:!0,"default":!1,twoWay:!0},showCancel:{type:Boolean,"default":!1},cancelText:{type:String,"default":"取消"},menus:{type:Object,"default":{}}},methods:{emitEvent:function(e,t){"on-click-menu"!==e||/.noop/.test(t)||(this.$emit(e,t),this.$emit(e+"-"+t),this.show=!1)}}}},41:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,".vux-actionsheet-gap{height:8px;width:100%;background-color:#eee}.vux-actionsheet-cancel:before{border-top:none}",""])},42:function(e,t,o){var i=o(41);"string"==typeof i&&(i=[[e.id,i,""]]);o(3)(i,{});i.locals&&(e.exports=i.locals)},43:function(e,t){e.exports=' <div> <div class=weui_mask_transition :class="{\'weui_fade_toggle\': show}" :style="{display: show ? \'block\' : \'none\'}" @click="show=false"></div> <div class=weui_actionsheet :class="{\'weui_actionsheet_toggle\': show}"> <div class=weui_actionsheet_menu> <div class=weui_actionsheet_cell v-for="(key, text) in menus" @click="emitEvent(\'on-click-menu\', key)" v-html=text> </div> <div class=vux-actionsheet-gap v-if=showCancel></div> <div class="weui_actionsheet_cell vux-actionsheet-cancel" @click="emitEvent(\'on-click-menu\', \'cancel\')" v-if=showCancel>{{cancelText}}</div> </div> </div> </div> '},44:function(e,t,o){var i,s;o(42),i=o(38),s=o(43),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},59:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}function s(e,t,o,i,s,a){c["default"].log("onMenuShareAppMessage","title:"+t+", wx:"+wx),wx.onMenuShareAppMessage({title:t,desc:o,link:e,imgUrl:i,success:function(){c["default"].log("onMenuShareAppMessage","success"),s&&s()},cancel:function(){c["default"].log("onMenuShareAppMessage","cancel"),a&&a()},fail:function(e){alert((0,l["default"])(e))}})}function a(e,t,o,i,s,a){wx.onMenuShareTimeline({title:t,link:e,desc:o,imgUrl:i,success:function(){c["default"].log("onMenuShareTimeline","success"),s&&s()},cancel:function(){c["default"].log("onMenuShareTimeline","cancel"),a&&a()}})}function n(e,t,o,i){var s=f["default"].wxConfigMode;if(s==t)return c["default"].log("wxRegister","discarded, wxConfig now mode:"+s+", input mode:"+t),void(o&&o());var a=location.href.split("#")[0];c["default"].log("wxRegister","register url:"+a),e.$http.post(p["default"].API_URL+"weixin/sign/jsapi",{url:a}).then(function(s){c["default"].log("wxRegister","jsapi response ok"),e.loading=!1,s&&s.data?(wx.config({debug:!0,appId:s.data.appId,timestamp:s.data.timestamp,nonceStr:s.data.nonceStr,signature:s.data.signature,jsApiList:["onMenuShareTimeline","onMenuShareAppMessage","scanQRCode","openCard","addCard","chooseWXPay"]}),wx.ready(function(){c["default"].log("wxRegister","wx.config ok..."),f["default"].wxConfigModeSet(t),o&&o()}),wx.error(function(e){c["default"].log("wxRegister","wx config error:"+e.errMsg),i&&i()})):i&&i()},function(e){c["default"].err("wxRegister",e),i&&i()})}Object.defineProperty(t,"__esModule",{value:!0});var r=o(13),l=i(r);t.onMenuShareAppMessage=s,t.onMenuShareTimeline=a,t.wxRegister=n;var d=o(14),c=i(d),u=o(12),p=i(u),x=o(26),f=i(x)},73:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,"default":!1}},computed:{classNames:function(){var e={"vux-tap-active":!this.disabled};return this.$parent.defaultItemClass&&(e[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass&&(e[this.$parent.selectedItemClass]=this.$parent.value===this.value),this.$parent.disabledItemClass&&(e[this.$parent.disabledItemClass]=this.disabled),e}},methods:{select:function(){this.disabled||(this.$parent.$set("value",this.value),this.$emit("on-item-click",this.value,this.disabled))}}}},74:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,value:{type:[String,Number]}},watch:{value:function(e){this.$emit("on-change",e)}}}},109:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,".vux-checker-item{display:inline-block}",""])},110:function(e,t,o){var i=o(109);"string"==typeof i&&(i=[[e.id,i,""]]);o(3)(i,{});i.locals&&(e.exports=i.locals)},111:function(e,t){e.exports=" <div class=vux-checker-item :class=classNames @click=select> <slot></slot> </div> "},112:function(e,t){e.exports=" <div class=vux-checker-box> <slot></slot> </div> "},113:function(e,t,o){var i,s;i=o(73),s=o(111),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},114:function(e,t,o){var i,s;o(110),i=o(74),s=o(112),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},127:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=["-moz-box-","-webkit-box-",""];t["default"]={props:{span:[Number,String],order:[Number,String]},methods:{buildWidth:function(e){return"number"==typeof e?e<1?e:e/12:"string"==typeof e?e.replace("px","")/this.bodyWidth:void 0}},computed:{style:function(){var e={},t="horizontal"===this.$parent.orient?"marginLeft":"marginTop";if(e[t]=this.$parent.gutter+"px",this.span)for(var i=0;i<o.length;i++)e[o[i]+"flex"]="0 0 "+100*this.buildWidth(this.span)+"%";return"undefined"!=typeof this.order&&(e.order=this.order),e}},data:function(){return{bodyWidth:document.documentElement.offsetWidth}}}},128:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{gutter:{type:Number,"default":8},orient:{type:String,"default":"horizontal"},justify:String,align:String,wrap:String,direction:String},computed:{styles:function(){return{"justify-content":this.justify,"align-items":this.align,"flex-wrap":this.wrap,"flex-direction":this.direction}}}}},132:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(153);t["default"]={mixins:[i.parentMixin]}},139:function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(13),a=i(s),n=o(26),r=i(n),l=o(12),d=i(l),c=o(14),u=i(c),p=o(59);t["default"]={components:{XHeader:o(8),Actionsheet:o(44),Loading:o(11),Checker:o(114),CheckerItem:o(113),XButton:o(21),Tabbar:o(233),Flexbox:o(228),FlexboxItem:o(227),Alert:o(31)},data:function(){return{cardIndex:-1,cardIdSelect:"",cardCodeSelect:"",menus:{home:"首页",cards:"我的卡包"},cards:[],showMenus:!1,loading:!1,no_data:!1,alert:{type:"",message:"",show:!1,callback:null}}},methods:{alertMsg:function(e,t){this.alert.message=e,this.alert.show=!0,this.alert.callback=t||function(){}},onCardSelect:function(e){this.cardIdSelect=this.cards[e].cardId,this.cardCodeSelect=this.cards[e].cardCode,this.cardIndex=e},goShare:function(){this.cardCodeSelect?this.$route.router.go({name:"gift_share",params:{cardId:this.cardIdSelect,cardCode:this.cardCodeSelect}}):this.alertMsg("此卡还未与微信卡包绑定")},goBuy:function(){this.$route.router.go({name:"buy"})},goPage:function(e){this.$route.router.replace({name:e})}},ready:function(){var e=this;e.loading=!0,e.openid=r["default"].wxOpenId,e.$http.post(d["default"].API_URL+"cards",{openid:e.openid,share:1}).then(function(t){u["default"].log("CardGift"," data:"+(0,a["default"])(t.data));var o=t.data;o&&0==o.result?(e.loading=!1,e.cards=o.data,0==e.cards.length&&(e.no_data=!0),(0,p.wxRegister)(e,"index",function(){(0,p.onMenuShareTimeline)(location.origin+location.pathname,d["default"].shareTitle,d["default"].shareDesc,d["default"].shareLogo),(0,p.onMenuShareAppMessage)(location.origin+location.pathname,d["default"].shareTitle,d["default"].shareDesc,d["default"].shareLogo)})):e.loading=!1},function(){e.loading=!1})}}},153:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={ready:function(){this.updateIndex()},methods:{updateIndex:function(){if(this.$children){this.number=this.$children.length;for(var e=this.$children,t=0;t<e.length;t++)e[t].index=t,e[t].selected&&(this.index=t)}}},props:{index:{type:Number,"default":0}},watch:{index:function(e,t){this.$children[t].selected=!1,this.$children[e].selected=!0}},data:function(){return{number:this.$children.length}}},i={props:{selected:{type:Boolean,"default":!1}},ready:function(){this.$parent.updateIndex()},beforeDestroy:function(){var e=this.$parent;this.$nextTick(function(){e.updateIndex()})},methods:{onItemClick:function(){this.selected=!0,this.$parent.index=this.index,this.$emit("on-item-click")}},watch:{selected:function(e){e&&(this.$parent.index=this.index)}},data:function(){return{index:-1}}};t.parentMixin=o,t.childMixin=i},166:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,".vux-flexbox{width:100%;text-align:left;display:-webkit-box;display:-ms-flexbox;display:flex;box-align:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.vux-flexbox .vux-flexbox-item{-webkit-box-flex:1;-ms-flex:1;flex:1;min-width:20px}.vux-flexbox-item>.vux-flexbox{width:100%}.vux-flexbox .vux-flexbox-item:first-child{margin-left:0!important;margin-top:0!important}.vux-flex-col{box-orient:vertical;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.vux-flex-col>.vux-flexbox-item{width:100%}.vux-flex-row{box-direction:row;box-orient:horizontal;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}",""])},168:function(e,t,o){t=e.exports=o(2)(),t.push([e.id,".wx-cards .card-item{width:100%}.wx-cards .card_item{margin-bottom:.5rem}.wx-cards .weui_tabbar{z-index:99;position:fixed;background-color:#fff}",""])},178:function(e,t,o){var i=o(166);"string"==typeof i&&(i=[[e.id,i,""]]);o(3)(i,{});i.locals&&(e.exports=i.locals)},180:function(e,t,o){var i=o(168);"string"==typeof i&&(i=[[e.id,i,""]]);o(3)(i,{});i.locals&&(e.exports=i.locals)},197:function(e,t){e.exports=" <div class=vux-flexbox-item :style=style> <slot></slot> </div> "},198:function(e,t){e.exports=" <div class=vux-flexbox :class=\"{'vux-flex-col': orient === 'vertical', 'vux-flex-row': orient === 'horizontal'}\" :style=styles> <slot></slot> </div> "},204:function(e,t){e.exports=" <div class=weui_tabbar> <slot></slot> </div> "},210:function(e,t){e.exports=' <div class="wx-cards flex" id=walmart_15_1> <x-header :left-options=\'{showBack:true, backText:"返回"}\' :right-options={showMore:true} @on-click-more="showMenus=true">赠送卡</x-header> <actionsheet :menus=menus :show.sync=showMenus show-cancel @on-click-menu-home="goPage(\'home\')" @on-click-menu-cards="goPage(\'memcards\')"></actionsheet> <div class="content card-list"> <div class=weui_cells_title v-show=!no_data>你共有<span style=color:#e64340>{{cards.length}}</span>张礼品卡</div> <div class=not_card v-show=no_data> <p class=ncd_p1><span class=ico_nocard></span></p> <p class=ncd_p2>暂无可赠送的电子卡~~</p> <p class=ncd_p3> <x-button type=primary @click=goBuy>购买电子卡</x-button> </p> </div> <checker :value.sync=cardIndex default-item-class=card-item selected-item-class=card-item-selected @on-change=onCardSelect> <checker-item :value=$index v-for="item in cards"> <div class=donation_dov> <div class=card_item data-id={{$index}} :class="$index==cardIndex ? \'on\':\'\'"> <div class=card_itop> <div class=card_it1><span class=card_img><img :src=item.logo alt=""></span></div> <div class=card_it2>{{item.title}}</div> </div> <div class=card_ibtm> <div class=card_ib1>余额: <span class=col4>￥<em>{{item.amount}}</em></span></div> <div class=card_ib2>有效期至{{item.expireDate}}</div> </div> </div> </div> <div style=height:60px v-show="$index==cards.length-1"></div> </checker-item> </checker> </div> <tabbar> <flexbox v-show=!no_data> <flexbox-item> <div class=donation_d1>已选 <span class=choose-counter>{{cardIndex==-1?\'0\':\'1\'}}</span> 张</div> </flexbox-item> <flexbox-item> <div style=padding:5px> <x-button :disabled="cardIndex==-1" type=primary @click=goShare>赠送</x-button> </div> </flexbox-item> </flexbox> </tabbar> <alert :show.sync=alert.show title="" button-text=知道了 @on-hide=alert.callback>{{alert.message}}</alert> <loading :show.sync=loading :text=""></loading> </div> '},227:function(e,t,o){var i,s;i=o(127),s=o(197),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},228:function(e,t,o){var i,s;o(178),i=o(128),s=o(198),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},233:function(e,t,o){var i,s;i=o(132),s=o(204),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},240:function(e,t,o){var i,s;o(180),i=o(139),s=o(210),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}});