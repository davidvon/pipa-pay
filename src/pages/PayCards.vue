<template>
  <div class='card'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}"
              @on-click-more="showMenus=true">支付
    </x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel
                 @on-click-menu-home="goPage('home')"
                 @on-click-menu-cards="goPage('memcards')"></actionsheet>

    <div class="weui_cells_title" v-show="cards.length>0">你共有<span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡
    </div>
    <div class="content">
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
    <alert :show.sync="alert.show" title="" button-text="知道了" @on-hide="alert.callback">{{alert.message}}</alert>
    <loading :show.sync="loading"></loading>
  </div>
</template>

<script>
  import Const from '../services/const'
  import Storage from '../services/storage'
  import logger from '../services/log'
  import { wxRegister } from '../services/wxlib'

  export default {
    components: {
      "XHeader": require('../components/x-header/index.vue'),
      "Loading": require('../components/loading/index.vue'),
      "Actionsheet": require('../components/actionsheet/index.vue'),
      "XButton": require('../components/x-button/index.vue'),
      "Alert": require('../components/alert/index.vue')
    },
    data () {
      return {
        menus: {
          home: '首页',
          cards: '我的卡包'
        },
        showMenus: false,
        cards: [],
        cards_online: [],
        no_data: false,
        alert: {type:'', message:'', show:false, callback:null},
        loading: false
      }
    },
    route: {
      data (transition){
        this.openid = Storage.wxOpenId
      }
    },
    ready: function () {
      var self = this
      this.loading = true
      wxRegister(this, function () {
        self.$http.post(Const.API_URL + 'cards', {openid: self.openid}).then(function (response) {
          self.loading = false
          logger.log('PayCards', 'cards:' + JSON.stringify(response))
          var data = response.data
          if (data && data.result == 0)
            self.cards = data.data
          if (self.cards.length == 0) self.no_data = true
        }, function () {
          self.loading = false
        })
      }, function () {
        self.loading = false
      })

//      var self = this
//      var url = location.href.split('#')[0]
//      this.$http.post(Const.API_URL + 'weixin/card/choose/sign').then(function (response) {
//        if (response && response.data){
//          var data = response.data
//          console.log(response.data)
//          wx.chooseCard({
//            timestamp: data['timestamp'], // 卡券签名时间戳
//            nonceStr: data['nonceStr'], // 卡券签名随机串
//            signType: 'SHA1',         // 签名方式，默认'SHA1'
//            cardSign: data['cardSign'], // 卡券签名
//            success: function (res) {
//              self.cards_online = res.cardList; // 用户选中的卡券列表信息
//              alert(self.cards_online)
//            }
//          })
//        }
//      })


    },
    methods: {
      alertMsg(msg, callback){
        this.alert.message = msg
        this.alert.show = true
        this.alert.callback = callback || function(){}
      },
      goBuy (){
        this.$route.router.go({name: 'buy'})
      },
      cardConsume(e){
        var attrs = e.currentTarget.attributes;
        var cardId = attrs['data-cardid'].value;
        var cardCode = (attrs['data-cardcode'] && attrs['data-cardcode'].value) || 0;
        if (!cardId) {
          this.alertMsg('请选择赠送的会员卡');
          return;
        }
        if (cardCode==0){
          this.alertMsg('请先绑定微信会员卡');
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

<style lang="less">
  .wx-cards .wxcard-enable {
    margin-left: 0 !important;
    color: grey;
    font-size: 14px;
    text-align: right;
  }

  .wx-cards .wxcard-invalid {
    margin-left: 0 !important;
    color: darkgrey;
    font-size: 14px;
    text-align: right;
  }

  .wx-cards .wxcard-disable {
    margin-left: 0 !important;
    color: red;
    font-size: 14px;
    text-align: right;
  }

  .wx-cards .title {
    margin-top: 6px;
    color: #fff;
    font-size: 18px;
    width: 100%;
  }

  .wx-cards .sub-title {
    color: #fff;
    font-size: 12px;
    width: 100%;
  }
  .card .content{
    padding:5px 10px
  }
</style>
