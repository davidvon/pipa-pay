<template>
  <div class='pay-cards'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">支付</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="weui_cells_title">你共有<span style="color:#6A6AD6">{{card.list.length}}</span>张礼品卡</div>

    <div style="margin:15px;" card-id="{{item.cardId}}" merchant-id={{item.merchantId}} v-for="item in card.list" @click="payCode">
      <masker style="border-radius:10px;" color="000" :opacity="0">
        <div class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="content">
          <flexbox class="card-title">
            <flexbox-item :span="1/3"><img style="height:35px;" :src="item.logo"/></flexbox-item>
            <flexbox-item :span="2/3" class="title">{{item.title}}</flexbox-item>
          </flexbox>
          <flexbox class="card-property">
            <flexbox-item class="card-money" :span="1/2">余额: <span class="money">￥{{item.price}}</span></flexbox-item>
            <flexbox-item class="card-valid" :span="1/2">有效期至{{item.expireDate}}</flexbox-item>
          </flexbox>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
  import { Masker, Actionsheet, XHeader, Group, XNumber, Cell, Switch, XInput, XButton, Box, Alert,
    Flexbox, FlexboxItem } from '../components'

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
        card:{
          list: [{
            merchantId:1001,
            cardId: 1,
            price: 600000.5,
            title: '沃尔玛GIFT卡',
            logo:"./static/demo/card_logo.png",
            img: './static/demo/card_blue.png',
            expireDate:'2018-05'
          }, {
            merchantId:1002,
            cardId: 2,
            price: 732000.1,
            title: '沃尔玛VIP至尊卡',
            logo:"./static/demo/card_logo.png",
            img: './static/demo/card_green.png',
            expireDate:'2016-10'
          }, {
            merchantId:1003,
            cardId: 3,
            price: 800000.3,
            title: '沃尔玛洗车卡',
            logo:"./static/demo/card_logo.png",
            img: './static/demo/card_red.png',
            expireDate:'2019-12'
          }]
        },
        showMenus: false
      }
    },
    methods:{
      payCode (e){
        console.log(e);
        var attrs = e.currentTarget.attributes;
        var cardId = (attrs['card-id'] && attrs['card-id'].value) || 0;
        var merchantId = (attrs['merchant-id'] && attrs['merchant-id'].value) || 0;
        this.$route.router.go({name: 'pay_by_card', params: {merchantId: merchantId, cardId: cardId} });
      }
    }
}
</script>

<style lang="less">
.pay-cards .vux-masker{
  -webkit-box-shadow: 0 4px 4px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 4px 4px rgba(0,0,0,0.2);
  box-shadow: 0 4px 4px rgba(0,0,0,0.2);
}
.pay-cards .vux-masker .content{
  padding: 15px;
}

.pay-cards .card-title{
  margin-top: 10px;
}

.pay-cards .card-property{
  margin-top: 25px;
}

.pay-cards .card-money{
  color:grey;
  font-size: 14px;
}

.pay-cards .card-valid{
  margin-left: 0!important;
  color:grey;
  font-size: 14px;
  text-align: right;
}

.pay-cards .img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 10px;
}

.pay-cards .title {
  color: #fff;
  font-weight: 500;
  font-size: 22px;
  width: 100%;
}
.pay-cards .money{
  color:#E01F1F;font-size:15px
}

</style>
