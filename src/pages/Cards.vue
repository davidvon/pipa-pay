<template>
  <div class='memcards card flex'>
    <div class="content">
      <div class="weui_cells_title" v-show="!no_data">你共有<span style="color:#e64340">{{cards.length}}</span>张礼品卡
      </div>
      <div class="card_item" data-index={{$index}} data-globalid="{{item.globalId}}"
           data-cardid="{{item.cardId}}" data-cardcode="{{item.cardCode}}" data-merchantid={{item.merchantId}}
           data-status={{item.status}} v-for="item in cards" @click="openCard">
        <div class="card_itop">
          <div class="card_it1"><span class="card_img"><img :src="item.logo" alt=""></span></div>
          <div class="card_it3">
            <p class="gc_name">{{item.title}}</p>
            <p class="last_time">有效期至：{{item.expireDate}}</p>
          </div>
        </div>
        <div class="card_ibtm">
          <div class="card_ib1">余额: <span class="col4">￥<em>{{item.amount}}</em></span></div>
          <div class="card_ib2"><span class="{{statusClass[item.status]}}">{{statusStr[item.status]}}</span></div>
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
  import {wxAddCard, wxOpenCard} from '../services/wxcard'
  import logger from '../services/log'

  export default {
    attached () {
      this.$root.navTitle = '电子卡列表'
      this.$root.showHeader = true
    },

    components: {
      "Actionsheet": require('../components/actionsheet/index.vue'),
      "XButton": require('../components/x-button/index.vue')
    },
    data () {
      return {
        no_data: false,
        cards: [],
        statusStr: ['未入微信卡包', '已入微信卡包,未激活', '已激活', '已过期', '转赠中', '已转赠'],
        statusClass: ['wxcard-disable', 'wxcard-enable', 'wxcard-enable', 'wxcard-invalid', 'wxcard-disable', 'wxcard-invalid']
      }
    },
    methods: {
      goHome(){
        this.$route.router.replace({name: 'home'})
      },
      goBuy (){
        this.$route.router.go({name: 'buy'})
      },
      chooseCard(){
        var self = this
        var url = location.href.split('#')[0]
        self.$http.post(Const.API_URL + 'weixin/card/choose/sign').then(function (response) {
          if (response && response.data) {
            var data = response.data
            logger.log('cards', 'chooseCard:' + JSON.stringify(data))

            wx.chooseCard({
              timestamp: data['timestamp'], // 卡券签名时间戳
              nonceStr: data['nonceStr'], // 卡券签名随机串
              signType: 'SHA1',         // 签名方式，默认'SHA1'
              cardSign: data['cardSign'], // 卡券签名
              success: function (res) {
                self.cards_online = res.cardList; // 用户选中的卡券列表信息
                if (!self.cards_online) {
                  self.cards_online = res.available_cards
                }
              }
            })
          }
        })
      },
      cardStatus(status){
        var msgs = ['卡已购买,未放入微信卡包','卡已放入微信卡包,未激活', '卡已放入微信卡包,已激活',
                    '卡已过期', '卡在赠送状态中', '卡已成功赠送']
        return msgs[Number(status)]
      },
      openCard (e){
        var self = this
        self.$dispatch('showLoading')
        var attrs = e.currentTarget.attributes;
        var index = attrs['data-index'].value
        var cardGlobalId = attrs['data-globalid'].value;
        var cardId = attrs['data-cardid'].value;
        var status = attrs['data-status'].value;
        logger.log('cards', 'open card:' + cardGlobalId);

        if (status >= 3) {
          self.$dispatch('hideLoading')
          self.$dispatch('alert', self.cardStatus(status))
          return
        }

        if (status == 0) {
          wxAddCard(self, cardGlobalId, self.openid, Const.API_URL, function (cardList) {
            self.$http.post(Const.API_URL + 'card/add/status/update', {
              openid: self.openid,
              cardGlobalId: cardGlobalId
            }).then(function (res) {
              self.$dispatch('hideLoading')
              if (res.result == 0) {
                self.cards[Number(index)].cardCode = res.data
                self.cards[Number(index)].status = 1
                self.$dispatch('alert', '该卡已加至微信卡包');
              }
            }, function(){
              self.$dispatch('hideLoading')
              self.$dispatch('alert', '已加至微信卡包, 服务器更新异常');
            })
          }, function(){
            self.$dispatch('hideLoading')
          })
        } else {
          self.$dispatch('hideLoading')
          var cardCode = (attrs['data-cardcode'] && attrs['data-cardcode'].value) || 0;
          wxOpenCard(self, cardId, cardCode);
        }
      }
    },
    ready(){
      var self = this
      self.openid = Storage.wxOpenId
      self.$dispatch('showLoading')
      self.$http.post(Const.API_URL + 'cards', {openid: self.openid}).then(function (response) {
        self.$dispatch('hideLoading')
        var res = response.data
        if (res && res.result == 0) self.cards = res.data
        if (self.cards.length == 0) self.no_data = true
      }, function () {
        self.$dispatch('hideLoading')
      })
    }
  }
</script>
