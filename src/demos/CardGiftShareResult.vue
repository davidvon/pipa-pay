<template>
  <div class='wx-cards card gift flex' id="walmart_15_1">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}"
              @on-click-more="showMenus=true">赠送卡
    </x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="lk_top">
      <div class="lk_toux"><span class="toux_img"><img :src="share.cardLogo" class="give-user"></span></div>
      <p class="lk_tp1">你分享的{{share.cardName}}</p>
      <p class="lk_tp2 give-content">{{share.content}}</p>
    </div>
    <p class="lk_title">礼品卡信息</p>
    <div class="lk_dov border b_top_btm">
      <p class="fp_pt"><span class="fp_sp1">礼品卡卡号</span> <span class="fp_sp2 card-no">{{cardId}}</span></p>
      <p class="fp_pt"><span class="fp_sp1">分享时间</span> <span class="fp_sp2 card-gtime">{{share.datetime}}</span></p>
      <p class="fp_pt"><span class="fp_sp1">状态</span> <span class="fp_sp2 card-status">{{share.status}}</span></p>

      <div class="lk_person border b_top2 ruser" v-show="share.acquireUserImg.length>0">
        <div class="lk_person_d1"><img :src="share.acquireUserImg" class="give-ruser"></div>
        <div class="lk_person_d2">
          <p class="lk_name give-ruser-name">{{share.acquireUserName}}</p>
          <p><em class="give-ruser-time"></em>领取</p>
        </div>
      </div>
    </div>
    <p class="lk_tit"><span class="lk_cbox btn-card" @click="onMyCard">查看我的卡包</span></p>
    <alert :show.sync="alert.show" title="信息" button-text="知道了">{{alert.message}}</alert>
  </div>
</template>

<script>
  import { Checker, CheckerItem, Masker, Actionsheet, XHeader, XButton, XTextarea, Alert} from '../components'
  import Const from '../services/const'
  export default {
    components: {
      Checker, CheckerItem, Masker, Actionsheet, XHeader, XButton, XTextarea, Alert
    },
    data () {
      return {
        cardId: '',
        share: {},
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        alert: {message: '', show: false}
      }
    },
    methods: {
      onMyCard(){
        this.$route.router.go({name: 'memcards'})
      }
    },
    ready(){
      var self = this
      this.$http.post(Const.apiUrl + 'card/share/info', {openId:Const.openid, cardId: this.cardId}).then(function (response) {
        var res = response.data
        if(res.result != 0) return
        self.share = res.data
      })
    },
    route: {
      data (transition){
        this.cardId = transition.to.params.cardId
      }
    }
  }
</script>

