webpackJsonp([15],{130:function(s,a,e){"use strict";function t(s){return s&&s.__esModule?s:{"default":s}}Object.defineProperty(a,"__esModule",{value:!0});var r=e(2),p=t(r),o=e(16),c=t(o),d=e(3);t(d);a["default"]={attached:function(){this.$root.navTitle="电子卡赠送结果",this.$root.showHeader=!0},data:function(){return{share:{}}},methods:{onMyCard:function(){this.$route.router.go({name:"memcards"})}},ready:function(){var s=this;this.$http.post(p["default"].API_URL+"card/share/info",{openId:this.openid,cardId:this.cardId,cardCode:this.cardCode}).then(function(a){var e=a.data;0!=e.result?s.$dispatch("alert","转赠的卡已不存在",function(){s.$route.router.go({name:"home"})}):s.share=e.data})},route:{data:function(s){this.openid=c["default"].wxOpenId,this.cardId=s.to.params.cardId,this.cardCode=s.to.params.cardCode}}}},210:function(s,a){s.exports=' <div class="wx-cards card gift flex" style=text-align:center> <div class=lk_top> <div class=lk_toux><span class=toux_img><img :src=share.cardLogo class=give-user></span></div> <p class=lk_tp1>{{share.cardName}}</p> <p class="lk_tp2 give-content">{{share.content}}</p> </div> <p class=lk_title>礼品卡信息</p> <div class="lk_dov border b_top_btm"> <p class=fp_pt><span class=fp_sp1>礼品卡卡号</span> <span class="fp_sp2 card-no">{{share.cardCode}}</span></p> <p class=fp_pt><span class=fp_sp1>分享时间</span> <span class="fp_sp2 card-gtime">{{share.datetime}}</span></p> <p class=fp_pt><span class=fp_sp1>状态</span> <span class="fp_sp2 card-status">{{share.status}}</span></p> <div class="lk_person border b_top2 ruser" v-show=share.acquireUserImg> <div class=lk_person_d1><img :src=share.acquireUserImg class=give-ruser></div> <div class=lk_person_d2> <p class="lk_name give-ruser-name">{{share.acquireUserName}}</p> <p><em class=give-ruser-time></em>领取</p> </div> </div> </div> <p class=lk_tit><span class="lk_cbox btn-card" @click=onMyCard>查看我的卡包</span></p> <alert :show.sync=alert.show title="" button-text=知道了 @on-hide=alert.callback>{{alert.message}}</alert> </div> '},245:function(s,a,e){var t,r;t=e(130),r=e(210),s.exports=t||{},s.exports.__esModule&&(s.exports=s.exports["default"]),r&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=r)}});