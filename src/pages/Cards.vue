<template>
  <div class='wx-cards card'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}"
              @on-click-more="showMenus=true">我的卡包
    </x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel @on-click-menu-home="onHome"></actionsheet>
    <div class="weui_cells_title" v-show="cards.length>0">你共有<span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡
    </div>
    <div class="content">
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
          <x-button type="primary" @click="buyCard">购买电子卡</x-button>
        </p>
      </div>
    </div>
    <loading :show.sync="loading" :text=""></loading>
    <toast :time="1500" :type.sync="alert.type" :show.sync="alert.show">{{alert.message}}</toast>
  </div>
</template>

<script>
  import Const from '../services/const'
  import Storage from '../services/storage'
  import {wxAddCard, wxOpenCard} from '../services/wxcard'
  import logger from '../services/log'
  import {wxRegister} from '../services/wxlib'

  export default {
    components: {
      "XHeader": require('../components/x-header/index.vue'),
      "Actionsheet": require('../components/actionsheet/index.vue'),
      "Loading": require('../components/loading/index.vue'),
      "XButton": require('../components/x-button/index.vue'),
      "Toast": require('../components/toast/index.vue')
    },
    data () {
      return {
        menus: {
          home: '首页'
        },
        showMenus: false,
        no_data: false,
        cards: [],
        statusStr: ['未入微信卡包', '已入微信卡包,未激活', '已激活', '已过期', '转赠中', '已转赠'],
        statusClass: ['wxcard-disable', 'wxcard-enable', 'wxcard-enable', 'wxcard-invalid', 'wxcard-disable', 'wxcard-invalid'],
        loading: false,
        alert: {type:'', message:'', show:false}
      }
    },
    methods: {
      onHome(){
        this.$route.router.replace({name: 'home'})
      },
      alertMsg(type, msg){
        this.alert.type = type;
        this.alert.message = msg
        this.alert.show = true
      },
      buyCard (){
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
      openCard (e){
        this.loading = true;
        var self = this
        var attrs = e.currentTarget.attributes;
        var index = attrs['data-index'].value
        var cardGlobalId = attrs['data-globalid'].value;
        var cardId = attrs['data-cardid'].value;
        var status = attrs['data-status'].value;
        logger.log('cards', 'open card:' + cardGlobalId);

        if (status >= 3) {
          self.loading = false;
          self.alertMsg("warn", '该卡在转赠中或已过期');
          return
        }

        if (status == 0) {
          self.loading = true;
          wxAddCard(self, cardGlobalId, self.openid, Const.API_URL, function (cardList) {
            self.$http.post(Const.API_URL + 'card/add/status/update', {
              openid: self.openid,
              cardGlobalId: cardGlobalId
            }).then(function (res) {
              self.loading = false;
              if (res.result == 0) {
                self.cards[Number(index)].cardCode = res.data
                self.cards[Number(index)].status = 1
                self.alertMsg("success", '该卡已加至微信卡包');
              }
            }, function(){
              self.loading = false;
              self.alertMsg("warn", '已加至微信卡包, 服务器更新异常');
            })
          }, function(){
            self.loading = false;
          })
        } else {
          self.loading = false;
          var cardCode = (attrs['data-cardcode'] && attrs['data-cardcode'].value) || 0;
          wxOpenCard(self, cardId, cardCode);
        }
      }
    },
    ready(){
      var self = this
      self.openid = Storage.wxOpenId
      self.loading = true
      wxRegister(self, function () {
        self.$http.post(Const.API_URL + 'cards', {openid: self.openid}).then(function (response) {
          self.loading = false
          var res = response.data
          if (res && res.result == 0) self.cards = res.data
          if (self.cards.length == 0) self.no_data = true
        }, function () {
          self.loading = false
        })
      }, function () {
        self.loading = false
      })
    }
  }
</script>

<style scoped>
  @import '../styles/other.less';
  .content{
    padding:5px 10px
  }
</style>
