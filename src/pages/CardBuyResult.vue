<template>
  <div class="order-result">
    <div id="result-page" class="flex">
      <div class="content pay_success" v-show="buy_status==1">
        <p class="top_icop"><span class="ico_tip ico_success"></span></p>
        <p class="tips_p1">支付成功</p>
        <p class="tips_p2">正在为你分配礼品卡，请稍后…</p>
      </div><!-- content end -->

      <div class="content trade_success" v-show="buy_status==0">
        <p class="top_icop"><span class="ico_tip ico_success"></span></p>
        <p class="tips_p1">购卡成功</p>
        <p class="tips_p2">你获得 <span class="col0 number">{{cards.number}}张</span> 面值 <span class="col0 amount">{{cards.amount}}元</span> 的礼品卡
        </p>
        <p class="card_pbtn">
          <x-button type="primary" @click="clickMemCard">转赠</x-button>
          <x-button @click="goPayCards">去支付</x-button>
        </p>
      </div><!-- content end -->

      <div class="content trade_fail" v-show="buy_status==255">
        <p class="top_icop"><span class="ico_tip ico_fail"></span></p>
        <p class="tips_p1">购卡失败, 订单号:{{order_id}}</p>
        <p class="tips_p2">请致电4000-888-400联系客服人员进行处理</p>
      </div><!-- content end -->
    </div>
  </div>
</template>

<script>
  import Const from '../services/const'
  import Storage from '../services/storage'
  import { wxAddCard, wxAddCards } from '../services/wxcard'

  export default {
    attached () {
      this.$root.navTitle = '购买结果'
      this.$root.showHeader = true
    },

    components: {
      "XButton": require('../components/x-button/index.vue')
    },
    data () {
      return {
        order_id: '',
        buy_status: 1, //1:等待;0:成功;255:失败
        cards: {
          number: 0,
          amount: 0
        }
      }
    },
    ready: function () {
      var self = this
      self.$dispatch('showLoading')
      self.$http.post(Const.API_URL + 'card/dispatch', {order_id: self.order_id}).then(function (response) {
        self.$dispatch('hideLoading')
        var res = response.data
        if (res.result == 0) {
          self.cards.number = res.data.count
          self.cards.amount = res.data.amount
          self.buy_status = 0
        } else {
          self.buy_status = 255
          self.$dispatch('hideLoading')
        }
      }, function () {
        self.buy_status = 255
        self.$dispatch('hideLoading')
      })
    },
    route: {
      data (transition){
        this.openid = Storage.wxOpenId
        this.order_id = transition.to.params.orderId
      }
    },
    methods: {
      clickMemCard(){
        if (this.cards.number == 0) return
        var self = this
        self.$dispatch('showLoading')
        wxAddCards(self, self.order_id, self.openid, Const.API_URL, function (cardList) {
          self.$dispatch('hideLoading')
          console.log('wx.addCard:' + cardList)
          self.$route.router.replace({name: 'memcards'})
        }, function () {
          self.$dispatch('hideLoading')
        })
      },
      goHome(){
        this.$route.router.replace({name: 'home'})
      },
      goPayCards(){
        this.$route.router.replace({name: 'paycards'})
      }
    }
  }
</script>

