<template>
  <div class='wx-cards card gift flex' id="walmart_15_1">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">赠送卡</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="weui_cells_title" v-show="!no_data">你共有<span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡</div>
    <div class="content card-list ">
      <!--没有数据-->
      <div class="not_card" v-show="no_data">
        <p class="ncd_p1"><span class="ico_nocard"></span></p>
        <p class="ncd_p2">暂无可赠送的电子卡~~</p>
        <p class="ncd_p3"><x-button type="primary" @click="onBuyCard">购买电子卡</x-button></p>
      </div>
      <checker :value.sync="cardIndex" default-item-class="card-item" selected-item-class="card-item-selected" @on-change="onCardSelect">
        <checker-item :value="$index" v-for="item in cards">
          <div class="donation_dov">
            <div class="card_item" data-id="{{$index}}" :class="$index==cardIndex ? 'on':''">
              <div class="card_itop">
                <div class="card_it1"><span class="card_img"><img :src="item.img" alt=""></span></div>
                <div class="card_it2">{{item.title}}</div>
              </div>
              <div class="card_ibtm">
                <div class="card_ib1">余额: <span class="col4">￥<em>{{item.amount}}</em></span></div>
                <div class="card_ib2">有效期至{{item.expireDate}}</div>
              </div>
            </div>
          </div>
        </checker-item>
      </checker>
    </div>
    <tabbar>
    <flexbox v-show="!no_data">
      <flexbox-item>
        <div class="donation_d1">已选 <span class="choose-counter">{{cardIndex==-1?'0':'1'}}</span> 张</div>
      </flexbox-item>
      <flexbox-item></flexbox-item>
      <flexbox-item>
        <div style="padding:5px">
          <x-button :disabled="cardIndex==-1" type="primary" @click="onShare">赠送</x-button>
        </div>
      </flexbox-item>
    </flexbox>
    </tabbar>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import { Checker, CheckerItem, Masker, XHeader, Group, Alert, Tabbar, Flexbox, FlexboxItem,
    XButton, Loading, Actionsheet } from '../components'
  import { getCookie } from '../libs/util'
  import Const from '../services/const'
  import logger from '../services/log'

  export default {
    components: {
      Checker, CheckerItem, Masker, XHeader, Group, Alert, Tabbar, Flexbox, FlexboxItem, XButton, Loading,
      Actionsheet
    },

    //import Masker from '../components/masker'
    data () {
      return {
        cardIndex:-1,
        cardIdSelect:'',
        cardCodeSelect:'',
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        cards: [],
        showMenus: false,
        loading: false,
        no_data: false
      }
    },
    methods: {
      onCardSelect (index){
        this.cardIdSelect = this.cards[index].cardId
        this.cardCodeSelect = this.cards[index].cardCode
        this.cardIndex = index
      },
      onShare(){
        this.$route.router.go({name:'gift_share', params:{cardId:this.cardIdSelect, cardCode:this.cardCodeSelect}});
      },
      onBuyCard(){
        this.$route.router.go({name: 'buy'})
      }
    },
    route: {
      data (transition){
        var self = this
        self.loading = true
        self.openid = getCookie('PIPA_OPENID')
        this.$http.post(Const.API_URL + 'cards', {openid: self.openid, share:1}).then(function (response) {
          self.loading = false
          logger.log("CardGift", " data:"+JSON.stringify(response.data))
          var ret = response.data
          if (ret && ret.result==0){
            self.cards = ret.data
            if(self.cards.length==0)
              self.no_data = true
          }
        })
      }
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
