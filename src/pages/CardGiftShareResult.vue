<template>
  <div class='wx-cards card gift flex' style="text-align:center;">
    <x-header :left-options='{showBack:true, backText:"返回"}'>赠送卡</x-header>
    <div class="lk_top">
      <div class="lk_toux"><span class="toux_img"><img :src="share.cardLogo" class="give-user"></span></div>
      <p class="lk_tp1">{{share.cardName}}</p>
      <p class="lk_tp2 give-content">{{share.content}}</p>
    </div>
    <p class="lk_title">礼品卡信息</p>
    <div class="lk_dov border b_top_btm">
      <p class="fp_pt"><span class="fp_sp1">礼品卡卡号</span> <span class="fp_sp2 card-no">{{share.cardCode}}</span></p>
      <p class="fp_pt"><span class="fp_sp1">分享时间</span> <span class="fp_sp2 card-gtime">{{share.datetime}}</span></p>
      <p class="fp_pt"><span class="fp_sp1">状态</span> <span class="fp_sp2 card-status">{{share.status}}</span></p>

      <div class="lk_person border b_top2 ruser" v-show="share.acquireUserImg">
        <div class="lk_person_d1"><img :src="share.acquireUserImg" class="give-ruser"></div>
        <div class="lk_person_d2">
          <p class="lk_name give-ruser-name">{{share.acquireUserName}}</p>
          <p><em class="give-ruser-time"></em>领取</p>
        </div>
      </div>
    </div>
    <p class="lk_tit"><span class="lk_cbox btn-card" @click="onMyCard">查看我的卡包</span></p>
  </div>
</template>

<script>
  import Const from '../services/const'
  import Storage from '../services/storage'
  import logger from '../services/log'

  export default {
    components: {
      "XHeader": require('../components/x-header/index.vue'),
    },
    data () {
      return {
        share: {}
      }
    },
    methods: {
      onMyCard(){
        this.$route.router.go({name: 'memcards'})
      }
    },
    ready(){
      var self = this
      this.$http.post(Const.API_URL + 'card/share/info',
        {openId: this.openid, cardId: this.cardId, cardCode: this.cardCode}).then(function (response) {
        var res = response.data
        if (res.result != 0) return
        self.share = res.data
      })
    },
    route: {
      data (transition){
        this.openid = Storage.wxOpenId
        this.cardId = transition.to.params.cardId
        this.cardCode = transition.to.params.cardCode
      }
    }
  }
</script>

