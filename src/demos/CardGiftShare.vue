<template>
  <div class='wx-cards card gift'>
    <x-header :left-options='{showBack:true, backText:"返回"}'>赠送卡
    </x-header>
    <div class="container" data-js="">
      <div class="content">
        <p class="donation_top">请输入转赠留言</p>
        <div class="donation_text border b_top_btm">
          <x-textarea :max="30" :placeholder="content" :value.sync="content"></x-textarea>
        </div>
        <p class="donation_btn">
          <x-button type="primary" @click="maskShow=true">转赠</x-button>
        </p>
        <p class="donation_p1">温馨提示</p>
        <p class="donation_p2"><span>1.</span> <span>转赠后，礼品卡即处于“转赠中”状态。待好友领取后，即与转赠者解绑，并与被转赠者建立绑定关系。</span></p>
        <p class="donation_p2"><span>2.</span> <span>若超过24小时未领取。则过期不可再领取。同时礼品卡从“转赠中”状态恢复正常。</span></p>
      </div><!-- content end -->
      <div class="s_wraper share_id" v-show="maskShow" @click="maskShow=false">
        <div class="pop_otop">
          <p class="box_share"><span class="ico_share"></span></p>
        </div>
      </div>
    </div>
    <alert :show.sync="alert.show" title="信息" button-text="知道了" @on-hide="goHome">{{alert.message}}</alert>
  </div>
</template>

<script>
  import { Checker, CheckerItem, Masker, XHeader, XButton, XTextarea, Alert} from '../components'
  import Const from '../services/const'
  import { onMenuShareAppMessage } from '../services/wxlib'
  import { getCookie } from '../libs/util'

  export default {
    components: {
      Checker, CheckerItem, Masker, XHeader, XButton, XTextarea, Alert
    },
    data () {
      return {
        cardId: '',
        cardCode:'',
        maskShow: false,
        content: '小小卡片，浓浓情义',
        shareUrl:'',
        card: {
          sign: '',
          cardId: '',
          cardName: '',
          timestamp: ''
        },
        alert: {message: '', show: false}
      }
    },
    route: {
      data (transition){
        this.openid = getCookie('PIPA_OPENID')
        this.cardId = transition.to.params.cardId
        this.cardCode = transition.to.params.cardCode
      }
    },
    methods: {
      alertMsg(msg){
        this.alert.message = msg
        this.alert.show = true
      },
      updateCardStatus(){
        var self = this
        this.$http.post(Const.API_URL + 'card/share',
          { openId:self.openid, sign: self.card.sign, cardId: self.cardId, cardCode: self.cardCode,
            timestamp: self.card.timestamp, content: self.content}).then(function (response) {
          var res = response.data
          if(res.result != 0) return
          self.$route.router.go({name: 'gift_share_result', params:{cardId: self.cardId, cardCode: self.cardCode }})
        })
      },
      onShare(){
        var self = this
        self.shareUrl = 'http://' + location.host + '/#!/gift/receive/' + self.card.sign
        console.log('[CardGiftShare::onShare] ---------------')
        console.log('[CardGiftShare::onShare] url:'+ self.shareUrl +' card:'+ self.card.cardName + ' content:'+ self.content + ' logo:'+ self.card.logo)
        console.log('[CardGiftShare::onShare] done')

        onMenuShareAppMessage(self.shareUrl, '点击领取' + self.card.cardName,
          self.content, self.card.logo, function () {
            console.log('[CardGiftShare] menu share ok')
            self.maskShow = false
            self.updateCardStatus()
          }, function(){
            self.maskShow = false
            console.log('[CardGiftShare] menu share error')
          })
      },
      goHome(){
        this.$route.router.go({name: 'home'})
      }
    },
    ready(){
      var self = this
      this.$http.post(Const.API_URL + 'card/share/check',
        {openId:self.openid, cardId: self.cardId, cardCode:self.cardCode}).then(function (response) {
        var res = response.data
        if(res.result != 0){
          console.log('[CardGiftShare] card sharing check error:' + res.result)
          return
        }
        if (res.data.status > 2) {
          self.alertMsg('该卡已经转赠,无法再继续转赠')
        } else {
          console.log('[CardGiftShare] card sharing check ok')
          self.card = res.data.card
          self.onShare()
        }
      })
    }
  }
</script>

<style lang="less">
  @import '../styles/paycard.less';

  .card .title {
    color: #fff;
    font-size: 17px;
  }

</style>
