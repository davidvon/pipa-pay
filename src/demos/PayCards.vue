<template>
  <div class='card'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">支付</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="content">
      <div class="weui_cells_title" v-show="!no_data">你共有 <span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡</div>
      <div style="margin:15px;" data-cardid="{{item.cardId}}" v-for="item in cards" @click="cardConsume">
        <masker style="border-radius:10px;" color="000" :opacity="0">
          <div class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="content">
            <flexbox class="card-title">
              <flexbox-item :span="1/3"><img class="card-logo" :src="item.logo"/></flexbox-item>
              <flexbox-item :span="2/3" class="title">{{item.title}}</flexbox-item>
            </flexbox>
            <flexbox class="card-property">
              <flexbox-item class="card-money" :span="1/2">余额: <span class="money">￥{{item.amount}}</span></flexbox-item>
              <flexbox-item class="card-valid" :span="1/2">有效期至{{item.expireDate}}</flexbox-item>
            </flexbox>
          </div>
        </masker>
      </div>
      <div class="not_card" v-show="no_data">
        <p class="ncd_p1"><span class="ico_nocard"></span></p>
        <p class="ncd_p2">暂无可消费的电子卡</p>
        <p class="ncd_p3"><x-button type="primary" @click="onBuyCard">购买电子卡</x-button></p>
      </div>
    </div>
    <alert :show.sync="alert.show" title="信息" button-text="知道了">{{alert.message}}</alert>
  </div>
</template>

<script>
  import { Masker, Actionsheet, XHeader, Group, XNumber, Cell, Switch, XInput, XButton, Box, Alert,
    Flexbox, FlexboxItem } from '../components'
  import Const from '../services/const'

  export default {
    components: {
      Masker, XHeader, Actionsheet, XNumber, Group, Cell, Switch, XInput, XButton, Box, Alert,
      Flexbox, FlexboxItem
    },
    data () {
      return {
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        cards: [],
        cards_online:[],
        showMenus: false,
        no_data: false,
        alert:{ message:'', show: false}
      }
    },
    route: {
      data (transition){
        var self = this
        this.$http.post(Const.apiUrl + 'cards', {openid: Const.openid}).then(function (response) {
          console.log(response)
          var data = response.data
          if (data && data.result==0)
            self.cards = data.data
            if(self.cards.length==0) self.no_data=true
        })
      }
    },
    ready: function () {
      var self = this
      var url = location.href.split('#')[0]
      this.$http.post(Const.apiUrl + 'weixin/card_sign').then(function (response) {
        if (response && response.data){
          var item = response.data
          if(item.result == 0){
            var data = item.data
            wx.chooseCard({
              shopId: data['shopId'], // 门店Id
              cardType: data['carType'], // 卡券类型
              cardId: data['carId'], // 卡券Id
              timestamp: data['timestamp'], // 卡券签名时间戳
              nonceStr: data['nonceStr'], // 卡券签名随机串
              signType: data['signType'], // 签名方式，默认'SHA1'
              cardSign: data['cardSign'], // 卡券签名
              success: function (res) {
                self.cards_online = res.cardList; // 用户选中的卡券列表信息
                alert(self.cards_online)
              }
            })
          }
        }
      })
    },
    methods:{
      alertMsg(msg){
        this.alert.message = msg
        this.alert.show = true
      },
      onBuyCard (){
        this.$route.router.go({name: 'buy'})
      },
      cardConsume(e){
        var attrs = e.currentTarget.attributes;
        var cardId = (attrs['data-cardid'] && attrs['data-cardid'].value) || 0;
        if(!cardId){
          alertMsg('请选择需要赠送的会员卡！');
          return;
        }
        this.$route.router.go({name: 'pay', params: {cardId:cardId}})
      }
    }
  }
</script>

<style lang="less">
.wx-cards .wxcard-enable{
  margin-left: 0!important;
  color:grey;
  font-size: 14px;
  text-align: right;
}
.wx-cards .wxcard-disable{
  margin-left: 0!important;
  color:red;
  font-size: 14px;
  text-align: right;
}

.wx-cards .title {
  margin-top: 6px;
  color: #fff;
  font-size: 18px;
  width: 100%;
}

.wx-cards .sub-title{
  color: #fff;
  font-size: 12px;
  width: 100%;
}

</style>
