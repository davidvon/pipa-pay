<template>
  <div class='wx-cards card gift'>
    <div class="container" data-js="">
      <div class="content">
        <p class="donation_top">请输入转赠留言</p>
        <div class="donation_text border b_top_btm">
          <x-textarea :max="15" :placeholder="content" :value.sync="content"></x-textarea>
        </div>
        <p class="donation_btn">
          <x-button type="primary" @click="onShareButton">转赠</x-button>
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
  </div>
</template>

<script>
  import Const from '../services/const'
  import Storage from '../services/storage'
  import logger from '../services/log'
  import {wxRegister, onMenuShareTimeline, onMenuShareAppMessage} from '../services/wxlib'

  export default {
    attached () {
      this.$root.navTitle = '电子卡分享'
      this.$root.showHeader = true
    },

    components: {
      "XButton": require('../components/x-button/index.vue'),
      "XTextarea": require('../components/x-textarea/index.vue')
    },
    data () {
      return {
        cardId: '',
        cardCode: '',
        content: '小小卡片，浓浓情义',
        shareUrl: '',
        card: {
          sign: '',
          cardId: '',
          cardName: '',
          timestamp: ''
        },
        logo: 'http://wx.cdn.pipapay.com/static/images/pipalogo-blue2.png'
      }
    },
    route: {
      data (transition){
        this.openid = Storage.wxOpenId
        this.cardId = transition.to.params.cardId
        this.cardCode = transition.to.params.cardCode
      }
    },
    methods: {
      updateCardStatus(){
        var self = this
        this.$http.post(Const.API_URL + 'card/share', {
            openId: self.openid,
            sign: self.card.sign,
            cardId: self.cardId,
            cardCode: self.cardCode,
            timestamp: self.card.timestamp,
            content: self.content
          }).then(function (response) {
          var res = response.data
          if (res.result != 0) return
          self.$route.router.go({name: 'gift_share_result', params: {cardId: self.cardId, cardCode: self.cardCode}})
        })
      },
      onShare(){
        var self = this
        self.shareUrl = 'http://' + location.host + '/#!/gift/receive/' + self.card.sign
        logger.log('CardGiftShare', 'onShare url:' + self.shareUrl + ' card:' + self.card.cardName)
        onMenuShareAppMessage(self.shareUrl, self.content, '点击领取' + self.card.cardName, self.logo, function () {
          logger.log('CardGiftShare', ' menu share ok')
          self.maskShow = false
          self.updateCardStatus()
        }, function () {
          self.maskShow = false
          logger.log('CardGiftShare', 'menu share cancel or error')
        })
      },
      onShareButton(){
        this.maskShow = true
        this.onShare()
      }
    },
    ready(){
      var self = this
      self.$dispatch('showLoading')
      self.$http.post(Const.API_URL + 'card/share/check',
        {openId: self.openid, cardId: self.cardId, cardCode: self.cardCode}).then(function (response) {
        self.$dispatch('hideLoading')
        var res = response.data

        logger.log('CardGiftShare', 'card sharing check result:' + JSON.stringify(res))
        if (res.result != 0) {
          self.$dispatch('alert', res.result == 254 ? '此卡还未与微信卡包绑定' : '此卡不存在', function () {
            self.$route.router.go({name: 'home'})
          })
          return
        }

        if (res.status > 2) {
          self.$dispatch('alert', '此卡已转赠', function () {
            self.$route.router.go({name: 'home'})
          })
          return
        }

        logger.log('CardGiftShare', 'card sharing check ok')
        self.card = res.card
        wxRegister(self, 'index', function () {
          self.onShare()
        })

      }, function () {
        self.$dispatch('hideLoading')
        logger.log('CardGiftShare', 'card sharing check exception')
      })
    }
  }
</script>
