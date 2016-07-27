<template>
  <div class='paycards'>
    <div class="content">
      <div class="weui_cells_title" v-show="!no_data">你共有<span style="color:#e64340">{{cards.length}}</span>张礼品卡
      </div>
      <div class="card_item" data-cardid="{{item.cardId}}" data-cardcode="{{item.cardCode}}" v-for="item in cards"
           @click="cardConsume">
        <div class="card_itop">
          <div class="card_it1"><span class="card_img"><img :src="item.logo" alt=""></span></div>
          <div class="card_it2">{{item.title}}</div>
        </div>
        <div class="card_ibtm">
          <div class="card_ib1">余额: <span class="col4">￥<em>{{item.amount}}</em></span></div>
          <div class="card_ib2">有效期至{{item.expireDate}}</div>
        </div>
      </div>
      <div class="not_card" v-show="no_data">
        <p class="ncd_p1"><span class="ico_nocard"></span></p>
        <p class="ncd_p2">暂无可消费的电子卡</p>
        <p class="ncd_p3">
          <x-button type="primary" @click="goBuy">购买电子卡</x-button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import Const from '../services/const'
  import Storage from '../services/storage'
  import logger from '../services/log'
  export default {
    attached () {
      this.$root.navTitle = '支付'
      this.$root.showHeader = true
    },

    components: {
      "XButton": require('../components/x-button/index.vue')
    },
    data () {
      return {
        cards: [],
        cards_online: [],
        no_data: false
      }
    },
    route: {
      data (transition){
        this.openid = Storage.wxOpenId
      }
    },
    ready: function () {
      var self = this
      self.$dispatch('showLoading')
      self.$http.post(Const.API_URL + 'cards', {openid: self.openid}).then(function (response) {
        self.$dispatch('hideLoading')
        logger.log('PayCards', 'cards:' + JSON.stringify(response))
        var data = response.data
        if (data && data.result == 0)
          self.cards = data.data
        if (self.cards.length == 0) self.no_data = true
      }, function () {
        self.$dispatch('hideLoading')
      })
    },
    methods: {
      goBuy (){
        this.$route.router.go({name: 'buy'})
      },
      cardConsume(e){
        var attrs = e.currentTarget.attributes;
        var cardId = attrs['data-cardid'].value;
        var cardCode = (attrs['data-cardcode'] && attrs['data-cardcode'].value) || 0;
        if (!cardId) {
          this.$dispatch('alert', '请选择赠送的会员卡');
          return;
        }
        if (cardCode==0){
          this.$dispatch('alert', '请先绑定微信会员卡');
          return;
        }
        logger.log('PayCards', 'cardConsume, cardid:' + cardId + ', code:' + cardCode)
        this.$route.router.go({name: 'pay', params: {cardId: cardId, cardCode: cardCode}})
      },
      goPage(name){
        this.$route.router.replace({name: name})
      }
    }
  }
</script>
