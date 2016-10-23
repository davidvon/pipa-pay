webpackJsonp([2],[,,,,,,,function(e,t,i){var o,r;o=i(26),r=i(49),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},,,,,,,,,,,,,,,,function(e,t){"use strict";function i(e){if("string"!=typeof e)throw new TypeError("This library (validator.js) validates strings only")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i,e.exports=t["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{value:{type:[String,Number],required:!0},disabled:{type:Boolean,"default":!1}},computed:{classNames:function(){var e={"vux-tap-active":!this.disabled};return this.$parent.defaultItemClass&&(e[this.$parent.defaultItemClass]=!0),this.$parent.selectedItemClass&&(e[this.$parent.selectedItemClass]=this.$parent.value===this.value),this.$parent.disabledItemClass&&(e[this.$parent.disabledItemClass]=this.disabled),e}},methods:{select:function(){this.disabled||(this.$parent.$set("value",this.value),this.$emit("on-item-click",this.value,this.disabled))}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{defaultItemClass:String,selectedItemClass:String,disabledItemClass:String,value:{type:[String,Number]}},watch:{value:function(e){this.$emit("on-change",e)}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:{"default":"default"},disabled:{type:Boolean,"default":!1},mini:{type:Boolean,"default":!1},plain:{type:Boolean,"default":!1},text:String},computed:{classes:function(){return[{weui_btn_disabled:this.disabled,weui_btn_mini:this.mini},"weui_btn_"+this.type,this.plain?"weui_btn_plain_"+this.type:""]}}}},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(28),a=o(r);t["default"]={mixins:[a["default"]],props:{required:{type:Boolean,"default":!0}},created:function(){this.handleChangeEvent=!1},computed:{dirty:function(){return!this.prisine},invalid:function(){return!this.valid}},methods:{setTouched:function(){this.touched=!0}},watch:{value:function(e){this.prisine===!0&&(this.prisine=!1),this.handleChangeEvent||this.$emit("change",e)}},data:function(){return{errors:{},prisine:!0,touched:!1,valid:!0}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={created:function(){this.uuid=Math.random().toString(36).substring(3,8)}}},,,,,,,,,,,,,,,,,function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".vux-checker-item{display:inline-block}",""])},function(e,t,i){var o=i(45);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},function(e,t){e.exports=" <div class=vux-checker-item :class=classNames @click=select> <slot></slot> </div> "},function(e,t){e.exports=" <div class=vux-checker-box> <slot></slot> </div> "},function(e,t){e.exports=" <button class=weui_btn :class=classes :disabled=disabled> {{text}}<slot></slot> </button> "},function(e,t,i){var o,r;o=i(24),r=i(47),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,i){var o,r;i(46),o=i(25),r=i(48),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,i){var o,r;i(175),r=i(197),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},,,,,,,,,,,,,,,,,function(e,t){"use strict";function i(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=arguments[1];for(var i in t)"undefined"==typeof e[i]&&(e[i]=t[i]);return e}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=i,e.exports=t["default"]},,,,,,,,,,,function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{gap:String}}},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(52),a=o(r),n=i(109);t["default"]={components:{InlineDesc:a["default"]},props:{title:String,value:String,isLink:Boolean,inlineDesc:String,primary:{type:String,"default":"title"},link:{type:[String,Object]}},methods:{onClick:function(){(0,n.go)(this.link,this.$router)}}}},,,,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(230),a=o(r);t["default"]={components:{GroupTitle:a["default"]},props:{title:String,titleColor:String}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{type:String},computed:{className:function(){return"weui_icon weui_icon_"+this.type}}}},,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(52),a=o(r);t["default"]={components:{InlineDesc:a["default"]},computed:{labelStyle:function(){var e=/<\/?[^>]*>/.test(this.title),t=Math.min(e?5:this.title.length+1,14)+"em";return{width:t}}},props:{title:{type:String,required:!0},disabled:{type:Boolean,"default":!1},value:{type:Boolean},inlineDesc:String},ready:function(){},watch:{value:function(e){this.$emit("on-change",e)}}}},,,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(57),a=o(r),n=i(27),s=o(n),l=i(232),u=o(l),c=i(52),d=o(c),p=i(182),f=o(p),h=i(184),v=o(h),x={email:{fn:f["default"],msg:"邮箱格式"},"china-mobile":{fn:function(e){return(0,v["default"])(e,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(e){return e.length>=2&&e.length<=6},msg:"中文姓名"}};t["default"]={ready:function(){this.title||this.placeholder||console.warn("no title and no placeholder?"),this.equalWith&&(this.showClear=!1),this.required&&!this.value&&(this.valid=!1),"email"===this.isType&&(this.type="email")},mixins:[s["default"]],components:{Icon:u["default"],InlineDesc:d["default"]},props:{title:{type:String,"default":""},placeholder:String,value:{type:String,"default":"",twoWay:!0},readonly:{type:Boolean,"default":!1},keyboard:String,inlineDesc:String,isType:String,min:Number,max:Number,showClear:{type:Boolean,"default":!0},equalWith:String,type:{type:String,"default":"text"},textAlign:String},computed:{pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidth:function(){return this.title.replace(/[^x00-xff]/g,"00").length/2+1},hasErrors:function(){return(0,a["default"])(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}}},methods:{clear:function(){this.value="",this.focus=!0},blur:function(){this.setTouched(),this.validate()},getError:function(){var e=(0,a["default"])(this.errors)[0];this.firstError=this.errors[e]},validate:function(){if(this.equalWith)return void this.validateEqual();if(this.errors={},!this.value&&!this.required)return void(this.valid=!0);if(!this.value&&this.required)return this.valid=!1,void(this.errors.required="必填哦");var e=x[this.isType];if(e){if(this.valid=e.fn(this.value),!this.valid)return void(this.errors.format=e.msg+"格式不对哦~");delete this.errors.format}if(this.min)if("number"===this.type){if(Number(this.value)<this.min)return this.errors.min=this.$interpolate("最少应该输入大于或等于{{min}}的值哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.min}else{if(this.value.length<this.min)return this.errors.min=this.$interpolate("最少应该输入{{min}}个字符哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.min}if(this.max)if("number"===this.type){if(Number(this.value)>this.max)return this.errors.max=this.$interpolate("最少应该输入小于或等于{{max}}的值哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}else{if(this.value.length>this.max)return this.errors.max=this.$interpolate("最多可以输入{{max}}个字符哦"),this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){var e=this.dirty||this.value.length>=this.equalWith.length;return e&&this.value!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.valid=!0,void delete this.errors.equal)}},data:function m(){var m={firstError:"",forceShowError:!1,hasLengthEqual:!1,focus:!1};return m},watch:{focus:function(e){e&&this.$els.input.focus()},valid:function(){this.getError()},value:function(e){this.equalWith?(e.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:{min:Number,max:Number,step:{type:Number,"default":1},value:{type:Number,"default":0},title:String,fillable:{type:Boolean,"default":!0},width:{type:Number,"default":50}},computed:{disabledMin:function(){return"undefined"!=typeof this.min&&this.value<=this.min},disabledMax:function(){return"undefined"!=typeof this.max&&this.value>=this.max}},ready:function(){},watch:{value:function(e,t){this.min&&this.value<this.min&&(this.value=this.min),this.max&&this.value>this.max&&(this.value=this.max),this.$emit("on-change",this.value)}},methods:{add:function(){this.disabledMax||(this.value+=this.step)},sub:function(){this.disabledMin||(this.value-=this.step)}}}},,,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(1),a=o(r),n=i(4),s=o(n),l=i(5),u=o(l);t["default"]={attached:function(){this.$root.navTitle="电子卡购买",this.$root.showHeader=!0},components:{XButton:i(7),Checker:i(51),CheckerItem:i(50),XNumber:i(237),Group:i(231),Cell:i(226),Switch:i(233),XInput:i(236),Box:i(225)},data:function(){return{money:50,otherMoney:"",count:1,invoice:{menuShow:!1,enable:!1,title:"",name:"",phone:"",zip:"",address:"",menus:["商品一批","食品一批","日用品一批"],content:"商品一批"},cardId:"",orderId:""}},computed:{buyButtonDisable:function(){return!((this.money>0||this.otherMoney.length>0&&Number(this.otherMoney)<=1e3&&Number(this.otherMoney)>0)&&this.invoice_valid())},amountDiscount:function(){var e=this.count*(this.money||this.otherMoney),t=0;return t=e<500?e:e<1e3?.98*e:e<2e3?.96*e:e<5e3?.94*e:e<8e3?.92*e:.9*e,/^(\d+\.\d+)?$/.test(t.toString())?parseFloat(t).toFixed(2):t}},methods:{invoiceClick:function(e){0!=e&&(this.invoice.content=this.invoice.menus[e-1]),this.invoice.menuShow=!1},orderCommit:function(e,t,i){e.$http.post(a["default"].API_URL+"card/buy/commit",{orderId:t}).then(function(o){0==o.result?(e.$dispatch("alert","订单提交已成功"),s["default"].log("wxPay","orderId:"+t+" ,buy card success")):s["default"].log("wxPay","orderId:"+t+" ,buy card fail:"+o.result),i&&i()},function(e){s["default"].log("wxPay","orderId:"+t+" ,buy card exception"),i&&i()})},wxPay:function(e){var t=this,i=e.orderId;s["default"].log("CardBuy","to weixin pay, sign:"+e.paySign+"orderId:"+i),wx&&wx.chooseWXPay({timestamp:e.timeStamp,nonceStr:e.nonceStr,"package":e["package"],signType:e.signType,paySign:e.paySign,success:function(e){s["default"].log("wxPay","orderId:"+i+" ,pay succeed"),t.orderCommit(t,i,function(){t.orderId=i,t.$dispatch("alert","支付成功",function(){t.$route.router.go({name:"buy_result",params:{orderId:t.orderId}})})})},fail:function(e){t.$dispatch("alert","支付失败:"+e.errMsg+", 请稍后再试")}})},buyCard:function(){var e=this;if(this.$dispatch("showLoading"),0==this.money&&Number(this.otherMoney)>1e3)return e.$dispatch("alert","输入金额范围不符"),void e.$dispatch("hideLoading");e.openid=u["default"].wxOpenId;var t={price:e.amountDiscount,count:e.count,openId:e.openid,cardId:a["default"].cardId};s["default"].log("CardBuy","openid:"+t.openId+" cardId:"+t.cardId+" discount:"+e.amountDiscount),this.$http.post(a["default"].API_URL+"card/buy",t).then(function(t){var i=t.data;e.$dispatch("hideLoading"),0==i.result?e.wxPay(i.content):1==i.result?e.$dispatch("alert","订单已支付"):255==i.result?e.$dispatch("alert","支付已完成"):250==i.result?e.$dispatch("alert","请客户先关注公众号"):e.$dispatch("alert","支付失败: "+i.msg)},function(){e.$dispatch("hideLoading"),e.$dispatch("alert","系统出现异常, 请稍后再试")})},invoice_valid:function(){return!this.invoice.enable||this.invoice.title.length>0&&this.invoice.name.length>0&&this.invoice.phone.length>0&&this.invoice.zip.length>0&&this.invoice.address.length>0&&this.invoice.content.length>0},onPage:function(e){this.$route.router.replace({name:e})}}}},,,,,,,,,,,,,,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if(!/^javas/.test(e)&&e){var i="object"===("undefined"==typeof e?"undefined":(0,s["default"])(e))||"string"==typeof e&&!/http/.test(e);i?t.go(e):window.location.href=e}}function a(e,t){return!t||t._history||"string"!=typeof e||/http/.test(e)?e&&"object"!==("undefined"==typeof e?"undefined":(0,s["default"])(e))?e:"javascript:void(0);":"#!"+e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(31),s=o(n);t.go=r,t.getUrl=a},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".vux-tap-active{tap-highlight-color:transparent}.vux-tap-active:active{background-color:#ececec}",""])},,function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".vux-number-input{float:left;height:25px;font-size:20px;color:#666;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:1px solid #ececec;padding:3px 0;text-align:center;border-radius:1px}.vux-number-selector{float:left;height:25px;font-size:26px;line-height:22px;color:#3cc51f;border:1px solid #ececec}.vux-number-selector.vux-number-disabled{color:#ccc}.vux-number-selector-sub{border-right:none;padding:3px 2px;border-radius:2px 0 0 2px}.vux-number-selector-plus{border-left:none;margin-right:5px;padding:3px 8px;border-radius:0 2px 2px 0}",""])},,,,function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".vux-no-group-title{margin-top:15px}",""])},function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".icon_big:before{font-size:104px}.icon_small:before{font-size:12px}",""])},function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".vux-label-desc{font-size:14px;color:#666}",""])},function(e,t,i){t=e.exports=i(2)(),t.push([e.id,".weui_cell_switch .weui_cell_ft{font-size:0}",""])},function(e,t,i){t=e.exports=i(2)(),t.push([e.id,'.checker-popup[_v-43ea8aa0]{background:hsla(0,0%,100%,.5)}.order .content[_v-43ea8aa0]{text-align:left!important;padding:0}.order .money-item[_v-43ea8aa0]{width:100px;height:50px;line-height:50px;text-align:center;border-radius:6px;border:1px solid #ccc;background-color:#fff;margin:5px;font-size:17px;color:#666}.order .money-item-selected[_v-43ea8aa0]{border-color:#e64340;color:#e64340}.order .center[_v-43ea8aa0]{margin-top:0;text-align:center}.order .money-symbol[_v-43ea8aa0]{color:#e64340;font-size:20px}.order .money[_v-43ea8aa0]{color:#e64340;font-size:23px}.order .other-money[_v-43ea8aa0]{height:15px;padding:10px;font-size:16px}.order .other-money-input[_v-43ea8aa0]{position:relative;display:block;height:60px}.order .weui_cell[_v-43ea8aa0]{color:#666;font-size:16px}.popover[_v-43ea8aa0]{position:absolute;top:0;left:0;width:84%;text-align:left;white-space:normal;background-color:#fff;border:1px solid #ccc;border-radius:6px;background-clip:padding-box}.popover.bottom[_v-43ea8aa0]{margin:10px 8%}.popover-content[_v-43ea8aa0]{padding:5px;height:35px}.popover .arrow[_v-43ea8aa0],.popover .arrow[_v-43ea8aa0]:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover .arrow[_v-43ea8aa0]{border-width:11px}.popover .arrow[_v-43ea8aa0]:after{border-width:10px;content:""}.popover.bottom .arrow[_v-43ea8aa0]{top:-11px;left:85%;margin-left:-11px;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25);border-top-width:0}.popover.bottom .arrow[_v-43ea8aa0]:after{top:1px;margin-left:-10px;border-bottom-color:#fff;border-top-width:0}',""])},,,function(e,t,i){var o=i(154);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},,function(e,t,i){var o=i(156);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},,,,function(e,t,i){var o=i(160);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(161);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(162);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},function(e,t,i){var o=i(163);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},,function(e,t,i){var o=i(164);"string"==typeof o&&(o=[[e.id,o,""]]);i(3)(o,{});o.locals&&(e.exports=o.locals)},,,function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){(0,s["default"])(e);var i=void 0,o=void 0;"object"===("undefined"==typeof t?"undefined":a(t))?(i=t.min||0,o=t.max):(i=arguments[1],o=arguments[2]);var r=encodeURI(e).split(/%..|./).length-1;return r>=i&&("undefined"==typeof o||r<=o)}Object.defineProperty(t,"__esModule",{value:!0});var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t["default"]=r;var n=i(23),s=o(n);e.exports=t["default"]},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){if((0,n["default"])(e),t=(0,l["default"])(t,f),t.allow_display_name){var i=e.match(h);i&&(e=i[1])}var o=e.split("@"),r=o.pop(),a=o.join("@"),s=r.toLowerCase();if("gmail.com"!==s&&"googlemail.com"!==s||(a=a.replace(/\./g,"").toLowerCase()),!(0,c["default"])(a,{max:64})||!(0,c["default"])(r,{max:256}))return!1;if(!(0,p["default"])(r,{require_tld:t.require_tld}))return!1;if('"'===a[0])return a=a.slice(1,a.length-1),t.allow_utf8_local_part?_.test(a):x.test(a);for(var u=t.allow_utf8_local_part?m:v,d=a.split("."),b=0;b<d.length;b++)if(!u.test(d[b]))return!1;return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var a=i(23),n=o(a),s=i(69),l=o(s),u=i(181),c=o(u),d=i(183),p=o(d),f={allow_display_name:!1,allow_utf8_local_part:!0,require_tld:!0},h=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,v=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,x=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,m=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,_=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;e.exports=t["default"]},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){(0,n["default"])(e),t=(0,l["default"])(t,u),t.allow_trailing_dot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));var i=e.split(".");if(t.require_tld){var o=i.pop();if(!i.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(o))return!1}for(var r,a=0;a<i.length;a++){if(r=i[a],t.allow_underscores&&(r=r.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(r))return!1;if(/[\uff01-\uff5e]/.test(r))return!1;if("-"===r[0]||"-"===r[r.length-1])return!1}return!0}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var a=i(23),n=o(a),s=i(69),l=o(s),u={require_tld:!0,allow_underscores:!1,allow_trailing_dot:!1};e.exports=t["default"]},function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function r(e,t){return(0,n["default"])(e),t in s&&s[t].test(e)}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r;var a=i(23),n=o(a),s={"ar-SY":/^(!?(\+?963)|0)?9\d{8}$/,"en-US":/^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,"cs-CZ":/^(\+?420)? ?[1-9][0-9]{2} ?[0-9]{3} ?[0-9]{3}$/,"de-DE":/^(\+?49[ \.\-])?([\(]{1}[0-9]{1,6}[\)])?([0-9 \.\-\/]{3,20})((x|ext|extension)[ ]?[0-9]{1,4})?$/,"da-DK":/^(\+?45)?(\d{8})$/,"el-GR":/^(\+?30)?(69\d{8})$/,"en-AU":/^(\+?61|0)4\d{8}$/,"en-GB":/^(\+?44|0)7\d{9}$/,"en-HK":/^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,"en-IN":/^(\+?91|0)?[789]\d{9}$/,"en-NZ":/^(\+?64|0)2\d{7,9}$/,"en-ZA":/^(\+?27|0)\d{9}$/,"en-ZM":/^(\+?26)?09[567]\d{7}$/,"es-ES":/^(\+?34)?(6\d{1}|7[1234])\d{7}$/,"fi-FI":/^(\+?358|0)\s?(4(0|1|2|4|5)?|50)\s?(\d\s?){4,8}\d$/,"fr-FR":/^(\+?33|0)[67]\d{8}$/,"hu-HU":/^(\+?36)(20|30|70)\d{7}$/,"ms-MY":/^(\+?6?01){1}(([145]{1}(\-|\s)?\d{7,8})|([236789]{1}(\s|\-)?\d{7}))$/,"nb-NO":/^(\+?47)?[49]\d{7}$/,"nn-NO":/^(\+?47)?[49]\d{7}$/,"pt-BR":/^(\+?55|0)\-?[1-9]{2}\-?[2-9]{1}\d{3,4}\-?\d{4}$/,"pt-PT":/^(\+?351)?9[1236]\d{7}$/,"ru-RU":/^(\+?7|8)?9\d{9}$/,"tr-TR":/^(\+?90|0)?5\d{9}$/,"vi-VN":/^(\+?84|0)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,"zh-CN":/^(\+?0?86\-?)?1[345789]\d{9}$/,"zh-TW":/^(\+?886\-?|0)?9\d{8}$/};s["en-CA"]=s["en-US"],e.exports=t["default"]},,,,,function(e,t){e.exports=" <div :style={margin:gap}><slot></slot></div> "},function(e,t){e.exports=" <div class=weui_cell :class=\"{'vux-tap-active': isLink || !!link}\" @click=onClick> <div class=weui_cell_hd> <slot name=icon></slot> </div> <div class=weui_cell_bd :class=\"{'weui_cell_primary':primary==='title'}\"> <p> {{title}} <slot name=after-title></slot> </p> <inline-desc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft :class=\"{'weui_cell_primary':primary==='content', 'with_arrow': isLink || !!link}\"> {{value}} <slot name=value></slot> <slot></slot> </div> </div> "},,,,function(e,t){e.exports=" <div class=weui_cells_title> <slot></slot> </div> "},function(e,t){e.exports=" <div> <div class=weui_cells_title v-if=title :style={color:titleColor} v-html=title></div> <div class=weui_cells :class=\"{'vux-no-group-title':!title}\"> <slot></slot> </div> </div> "},function(e,t){e.exports=" <i class={{className}}></i> "},function(e,t){e.exports=" <span class=vux-label-desc><slot></slot></span> "},,function(e,t){e.exports=' <div class="weui_cell weui_cell_switch"> <div class="weui_cell_hd weui_cell_primary"> <label class=weui_label :style=labelStyle v-html=title></label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class=weui_cell_ft> <input class=weui_switch type=checkbox :disabled=disabled v-model=value /> </div> </div> '},,,function(e,t){e.exports=' <div class=weui_cell :class="{\'weui_cell_warn\': !valid}"> <div class=weui_cell_hd> <label class=weui_label :style="{width: labelWidth + \'em\'}" v-if=title>{{title}}</label> <inline-desc v-if=inlineDesc>{{inlineDesc}}</inline-desc> </div> <div class="weui_cell_bd weui_cell_primary"> <input class=weui_input :style=inputStyle :type=type :pattern=pattern placeholder={{placeholder}} v-model=value :readonly=readonly @blur=blur v-el:input/> </div> <div class=weui_cell_ft> <icon type=clear v-show="showClear && value" @click=clear></icon> <icon type=warn title="{{!valid ? firstError : \'\'}}" v-show="!equalWith && ((touched && !valid && firstError) || (forceShowError && !valid && firstError))"></icon> <icon type=warn v-show="hasLengthEqual && dirty && equalWith && !valid"></icon> <icon type=success v-show="equalWith && equalWith===value && valid"></icon> <slot name=right><slot> </slot></slot></div> </div> '},function(e,t){e.exports=' <div class=weui_cell> <div class="weui_cell_bd weui_cell_primary"> <p>{{title}}</p> </div> <div class=weui_cell_ft v-show=!readonly style=font-size:0> <a @click=sub() class="vux-number-selector vux-number-selector-sub needsclick" :class="{\'vux-number-disabled\':disabledMin}">－</a> <input v-model=value class=vux-number-input :style="{width: width+\'px\'}" number :readonly=!fillable pattern=[0-9]* /> <a @click=add() class="vux-number-selector vux-number-selector-plus needsclick" :class="{\'vux-number-disabled\':disabledMax}">+</a> </div> <div class=weui_cell_ft v-else> {{value}} </div> </div> '},,,,,,,,,,,,,,,,function(e,t){e.exports=' <div class=order _v-43ea8aa0=""> <div class=content _v-43ea8aa0=""> <div class=weui_cells_title _v-43ea8aa0="">欢迎选购电子礼品卡,礼品卡面值(最低1元)</div> <checker class=center :value.sync=money default-item-class=money-item selected-item-class=money-item-selected _v-43ea8aa0=""> <checker-item :value=50 _v-43ea8aa0="">50元</checker-item> <checker-item :value=100 _v-43ea8aa0="">100元</checker-item> <checker-item :value=200 _v-43ea8aa0="">200元</checker-item> <checker-item :value=500 _v-43ea8aa0="">500元</checker-item> <checker-item :value=1000 _v-43ea8aa0="">1000元</checker-item> <checker-item :value=0 _v-43ea8aa0="">其他金额</checker-item> </checker> <div class="center other-money-input" v-show=!money _v-43ea8aa0=""> <div class="popover fade bottom in" style="display: block" _v-43ea8aa0=""> <div class=arrow _v-43ea8aa0=""></div> <div class=popover-content _v-43ea8aa0=""> <x-input class=other-money focus=true placeholder=1-1000 :min=1 :max=4 :value.sync=otherMoney keyboard=number _v-43ea8aa0=""></x-input> </div> </div> </div> <group _v-43ea8aa0=""> <x-number title=数量 :min=1 :max=10 :value.sync=count type=inline _v-43ea8aa0=""></x-number> <cell title=合计 _v-43ea8aa0=""> <del class=total_amount _v-43ea8aa0="">￥{{count*money || count*otherMoney}}</del> <span class=money-symbol _v-43ea8aa0="">￥</span><span class=money _v-43ea8aa0="">{{amountDiscount}}</span> </cell> </group> <group _v-43ea8aa0=""> <switch :value.sync=invoice.enable title=需要发票(邮寄到付) _v-43ea8aa0=""></switch> <div v-show=invoice.enable _v-43ea8aa0=""> <x-input title=发票抬头 :value.sync=invoice.title placeholder=单位名称或个人姓名 _v-43ea8aa0=""></x-input> <cell title=发票内容 @click="invoice.menuShow=true" _v-43ea8aa0="">{{invoice.content}}<span class=demo-icon slot=icon _v-43ea8aa0=""></span></cell> <x-input title=收件人 :min=3 :max=4 :value.sync=invoice.name placeholder=姓名 _v-43ea8aa0=""></x-input> <x-input title=联系电话 :value.sync=invoice.phone placeholder=手机号码 keyboard=number is-type=china-mobile _v-43ea8aa0=""></x-input> <x-input title=邮政编码 :value.sync=invoice.zip placeholder=邮政编码 keyboard=number :min=6 :max=6 _v-43ea8aa0=""></x-input> <x-input title=详细地址 :value.sync=invoice.address placeholder="省份 城市 街道 详细地址" _v-43ea8aa0=""></x-input> </div> </group> <box style=padding:20px _v-43ea8aa0=""> <x-button :disabled=buyButtonDisable type=primary @click=buyCard _v-43ea8aa0="">购卡</x-button> </box> </div> <div class="center pop_wraper" v-show=invoice.menuShow _v-43ea8aa0=""> <div class=pop_obottom _v-43ea8aa0=""> <ul class="fselect_list invoice_list border b_top" _v-43ea8aa0=""> <li _v-43ea8aa0=""><div @click=invoiceClick(1) class="border b_btm" _v-43ea8aa0="">商品一批</div></li> <li _v-43ea8aa0=""><div @click=invoiceClick(2) class="border b_btm" _v-43ea8aa0="">食品一批</div></li> <li _v-43ea8aa0=""><div @click=invoiceClick(3) class="border b_btm" _v-43ea8aa0="">日用品一批</div></li> <li _v-43ea8aa0=""><div @click=invoiceClick(0) _v-43ea8aa0="">取消</div></li> </ul> </div> </div> </div> '},,,,,,function(e,t,i){var o,r;o=i(80),r=i(189),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,i){var o,r;i(167),o=i(81),r=i(190),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},,,,function(e,t,i){var o,r;r=i(194),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,i){var o,r;i(173),o=i(85),r=i(195),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,i){var o,r;i(174),o=i(86),r=i(196),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,i){var o,r;i(176),o=i(88),r=i(199),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},,,function(e,t,i){var o,r;o=i(91),r=i(202),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},function(e,t,i){var o,r;i(169),o=i(92),r=i(203),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)},,,function(e,t,i){var o,r;i(178),o=i(95),r=i(219),e.exports=o||{},e.exports.__esModule&&(e.exports=e.exports["default"]),r&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=r)}]);