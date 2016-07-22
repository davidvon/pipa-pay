<template>
  <div>
    <div class="content">
      <div class="not_card" v-show="no_data">
        <p class="ncd_p1"><span class="ico_nocard"></span></p>
        <p class="ncd_p2">赠送的电子卡不存在~~</p>
        <p class="ncd_p3">
          <x-button type="primary" @click="goBuy">购买电子卡</x-button>
          <x-button @click="goHome">首页</x-button>
        </p>
      </div>
      <div v-show="!no_data">
        <div class="lk_top">
          <div class="lk_toux"><span class="toux_img"><img :src="info.giveUserHeadImg" class="give-user"></span></div>
          <p class="lk_tp1"><em class="give-user-name">{{info.giveUsername}}</em>赠送的礼品卡</p>
          <p class="lk_tp2 give-content">{{info.shareContent}}</p>
        </div>
        <p class="lk_btn_p can-receive">
          <x-button :type="info.giveStatus==0?'primary':''" :disabled="info.giveStatus!=0" @click="onReceiveCard">
            {{statusStr}}
          </x-button>
        </p>
        <p class="lk_tit2 none"><span class="lk_cbox text-status"></span></p>
      </div>
    </div>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import { wxAddCard, wxOpenCard } from '../services/wxcard'
  import Const from '../services/const'
  import Storage from '../services/storage'
  import logger from '../services/log'

  export default {
    components: {
      "Loading": require('../components/loading/index.vue'),
      "XButton": require('../components/x-button/index.vue')
    },
    data () {
      return {
        no_data: false,
        info: {
          giveUserHeadImg: '/static/images/ico-head.png',
          giveUsername: '',
          shareContent: '',
          cardStatus: 0,
          giveStatus: 0,
          acquireUserOpenId: ''
        },
        loading: false,
        statusStr: ''
      }
    },
    methods: {
      goHome(){
        this.$route.router.go({name: 'home'})
      },
      goBuy(){
        this.$route.router.go({name: 'buy'})
      },
      onReceiveCard(){
        this.loading = true
        var self = this
        logger.log("CardGiftReceive", " openid:" + self.openid + " sign:" + self.sign)
        this.$http.post(Const.API_URL + 'card/receive', {
          openId: self.openid,
          sign: self.sign
        }).then(function (response) {
          self.loading = false
          var res = response.data
          logger.log("CardGiftReceive", "ack status:" + res.result)

          if (res.result == 255){
            self.$route.router.go({name: 'memcards'})
            return
          }
          if (res.data.status == 1) {
            wxOpenCard(self, res.data.wxCardId, res.data.code, function (cardList) {
              self.$route.router.go({name: 'memcards'})
            }, function(){
              self.$route.router.go({name: 'memcards'})
            })
          } else {
            wxAddCard(self, res.data.cardGlobalId, self.openid, Const.API_URL, function (cardList) {
              self.$route.router.go({name: 'memcards'})
            }, function(){
              self.$route.router.go({name: 'memcards'})
            })
          }
        }, function () {
          self.loading = false
        })
      }
    },
    ready(){
      var self = this
      this.loading = true
      this.$http.post(Const.API_URL + 'card/receive/check', {
        openId: self.openid,
        sign: self.sign
      }).then(function (response) {
        self.loading = false
        var res = response.data
        if (res.result == 255) {
          self.no_data = true
          return
        }
        self.info = res.data
        logger.log('CardGiftReceive', 'myself:' + self.openid + ' giving status:' + self.info.giveStatus + ', card status:' + self.info.cardStatus)
        if (self.info.giveStatus == 0) {
          self.statusStr = '领取电子卡'
        } else if (self.info.acquireUserOpenId != self.openid) {
          self.statusStr = '已被领取'
        } else if (self.info.cardStatus == 0) {
          self.statusStr = '已领取，未放入卡包'
        } else if (self.info.cardStatus == 1) {
          self.statusStr = '已放入微信卡包未激活'
        } else if (self.info.cardStatus == 2) {
          self.statusStr = '已放入微信卡包已激活'
        } else if (self.info.cardStatus == 3) {
          self.statusStr = '已过期'
        } else if (self.info.cardStatus == 4) {
          self.statusStr = '转赠中'
        } else {
          self.statusStr = '已转赠'
        }
      })
    },
    route: {
      data (transition){
        this.openid = Storage.wxOpenId
        this.sign = transition.to.params.sign
      }
    }
  }
</script>

