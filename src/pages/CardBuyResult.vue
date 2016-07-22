<template>
  <div class="order-result">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}"
              @on-click-more="showMenus=true">购买
    </x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel @on-click-menu-home="goHome"></actionsheet>
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
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import Const from '../services/const'
  import Storage from '../services/storage'
  import { wxAddCard, wxAddCards } from '../services/wxcard'

  export default {
    components: {
      "XHeader": require('../components/x-header/index.vue'),
      "XButton": require('../components/x-button/index.vue'),
      "Actionsheet": require('../components/actionsheet/index.vue'),
      "Loading": require('../components/loading/index.vue')
    },
    data () {
      return {
        order_id: '',
        buy_status: 1, //1:等待;0:成功;255:失败
        cards: {
          number: 0,
          amount: 0
        },
        menus: {
          home: '首页'
        },
        loading: false,
        showMenus: false
      }
    },
    ready: function () {
      var self = this
      self.loading = true
      self.$http.post(Const.API_URL + 'card/dispatch', {order_id: self.order_id}).then(function (response) {
        self.loading = false
        var res = response.data
        if (res.result == 0) {
          self.cards.number = res.data.count
          self.cards.amount = res.data.amount
          self.buy_status = 0
        } else {
          self.buy_status = 255
          self.loading = false
        }
      }, function () {
        self.buy_status = 255
        self.loading = false
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
        self.Loading = true
        wxAddCards(self, self.order_id, self.openid, Const.API_URL, function (cardList) {
          self.Loading = false
          console.log('wx.addCard:' + cardList)
          self.$route.router.replace({name: 'memcards'})
        }, function () {
          self.Loading = false
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

