<template>
  <div class='wx-cards' id="walmart_15_1">
    <div class="content card-list">
      <div class="weui_cells_title" v-show="!no_data">你共有<span style="color:#e64340">{{cards.length}}</span>张礼品卡</div>
      <!--没有数据-->
      <div class="not_card" v-show="no_data">
        <p class="ncd_p1"><span class="ico_nocard"></span></p>
        <p class="ncd_p2">暂无可赠送的电子卡~~</p>
        <p class="ncd_p3">
          <x-button type="primary" @click="goBuy">购买电子卡</x-button>
        </p>
      </div>
      <checker :value.sync="cardIndex" default-item-class="card-item" selected-item-class="card-item-selected"
               @on-change="onCardSelect">
        <checker-item :value="$index" v-for="item in cards">
          <div class="donation_dov">
            <div class="card_item" data-id="{{$index}}" :class="$index==cardIndex ? 'on':''">
              <div class="card_itop">
                <div class="card_it1"><span class="card_img"><img :src="item.logo" alt=""></span></div>
                <div class="card_it2">{{item.title}}</div>
              </div>
              <div class="card_ibtm">
                <div class="card_ib1">余额: <span class="col4">￥<em>{{item.balance}}</em></span></div>
                <div class="card_ib2">有效期至{{item.expireDate}}</div>
              </div>
            </div>
          </div>
          <div style="height:60px" v-show="$index==cards.length-1"></div>
        </checker-item>
      </checker>
    </div>
    <tabbar>
      <flexbox v-show="!no_data">
        <flexbox-item>
          <div class="donation_d1">已选 <span class="choose-counter">{{cardIndex==-1?'0':'1'}}</span> 张</div>
        </flexbox-item>
        <flexbox-item>
          <div style="padding:5px">
            <x-button :disabled="cardIndex==-1" type="primary" @click="goShare">赠送</x-button>
          </div>
        </flexbox-item>
      </flexbox>
    </tabbar>
  </div>
</template>

<script>
  import Storage from '../services/storage'
  import Const from '../services/const'
  import logger from '../services/log'
  import {wxRegister, onMenuShareTimeline, onMenuShareAppMessage} from '../services/wxlib'

  export default {
    attached () {
      this.$root.navTitle = '电子卡赠送'
      this.$root.showHeader = true
    },

    components: {
      "Checker": require('../components/checker/index.vue'),
      "CheckerItem": require('../components/checker-item/index.vue'),
      "XButton": require('../components/x-button/index.vue'),
      "Tabbar": require('../components/tabbar/tabbar.vue'),
      "Flexbox": require('../components/flexbox/index.vue'),
      "FlexboxItem": require('../components/flexbox-item/index.vue')
    },

    data () {
      return {
        cardIndex: -1,
        cardIdSelect: '',
        cardCodeSelect: '',
        cards: [],
        no_data: false
      }
    },
    methods: {
      onCardSelect (index){
        this.cardIdSelect = this.cards[index].cardId
        this.cardCodeSelect = this.cards[index].cardCode
        this.cardIndex = index
      },
      goShare(){
        if(!!this.cardCodeSelect){
          this.$route.router.go({name: 'gift_share', params: {cardId: this.cardIdSelect, cardCode: this.cardCodeSelect}});
        } else {
          this.$dispatch('alert', '此卡还未与微信卡包绑定')
        }
      },
      goBuy(){
        this.$route.router.go({name: 'buy'})
      },
      goPage(name){
        this.$route.router.replace({name: name})
      }
    },
    ready: function () {
      var self = this
      self.$dispatch('showLoading')
      self.openid = Storage.wxOpenId
      self.$http.post(Const.API_URL + 'cards', {openid: self.openid, share: 1}).then(function (response) {
        var ret = response.data
        if (ret && ret.result == 0) {
          self.$dispatch('hideLoading')
          self.cards = ret.data
          if (self.cards.length == 0) self.no_data = true
          wxRegister(self, 'index', function () {
            onMenuShareTimeline(location.origin + location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
            onMenuShareAppMessage(location.origin + location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
          })
        } else {
          self.$dispatch('hideLoading')
        }
      }, function () {
        self.$dispatch('hideLoading')
      })
    }
  }
</script>

<style lang="less">
  .wx-cards .card-item{
    width: 100%;
  }
  .wx-cards .card_item{
    margin-bottom:0.5rem
  }
  .wx-cards .weui_tabbar{
    z-index:99;
    position:fixed;
    background-color: #fff;
  }

</style>
