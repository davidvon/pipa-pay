<template>
  <div class="order-result">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">购买</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div id="result-page" class="flex">
      <div class="content pay_success" v-show="buy_status==1">
        <p class="top_icop"><span class="ico_tip ico_success"></span></p>
        <p class="tips_p1">支付成功</p>
        <p class="tips_p2">正在为你分配礼品卡，请稍后…</p>
      </div><!-- content end -->

      <div class="content trade_success" v-show="buy_status==0">
        <p class="top_icop"><span class="ico_tip ico_success"></span></p>
        <p class="tips_p1">购卡成功</p>
        <p class="tips_p2">你获得 <span class="col0 number"></span> 面值 <span class="col0 amount"></span> 的礼品卡</p>
        <p class="card_pbtn"><button class="blue_btn btn-memcard" type="button" @click="clickMemCard">放入微信卡包</button></p>
      </div><!-- content end -->

      <div class="content trade_fail" v-show="buy_status==255">
        <p class="top_icop"><span class="ico_tip ico_fail"></span></p>
        <p class="tips_p1">购卡失败</p>
        <p class="tips_p2">请致电4000-888-400联系客服人员进行处理</p>
      </div><!-- content end -->
    </div>
  </div>
</template>

<script>
import Const from '../services/const'
import { Actionsheet, XHeader} from '../components'
import { wxAddCard } from '../services/wxcard'

export default {
  components: {
    XHeader, Actionsheet
  },
  data () {
    return {
      order_no: '',
      buy_status: 1, //1:等待;0:成功;255:失败
      cards:{
        number: 0,
        money:0,
        list:[]
      },
      menus: {
        menu1: '付款',
        menu2: '我的卡包',
        menu3: '赠送卡',
        menu4: '在线购物',
        menu5: '用卡说明'
      },
      showMenus: false,
      alert:{
        message:'',
        show: false
      }
    }
  },
  route:{
    data (transition){
      var self = this
      self.openid = getCookie('PIPA_OPENID')
      this.order_no = transition.to.params.orderNo
      this.$http.post(Const.API_URL + 'card/buy/query', {order_no: this.order_no}, function (res) {
        if(res.result == 0){
          self.buy_status = res.data.buy_status
          self.cards = res.data.cards
        }
      }, "json")
    }
  },
  methods: {
    clickMemCard(){
      if( this.cards.length == 0 ) return
      for (var i = 0; i < this.cardList.length; i++) {
        if (this.cardList[i].receive_status != 0) {
          this.$route.router.go({name: 'memcards'});
          return
        }
      }
      var self = this
      wxAddCard(this, this.openid, Const.API_URL, function (cardList) {
        console.log('wx.addCard:' + res.cardList)
        self.$route.router.go({name: 'memcards'})
      })
    }
  }
}
</script>

<style scoped>
  @import '../styles/other.less';

</style>
