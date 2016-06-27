<template>
  <div class='card'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">支付</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="weui_cells_title">你共有<span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡</div>

    <div style="margin:15px;" card-id="{{item.cardId}}" merchant-id={{item.merchantId}} v-for="item in cards" @click="payCode">
      <masker style="border-radius:10px;" color="000" :opacity="0">
        <div class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="content">
          <flexbox class="card-title">
            <flexbox-item :span="1/3"><img class="card-logo" :src="item.logo"/></flexbox-item>
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
    },
    route: {
      data (transition){
        var _this = this
        this.$http.get(Const.API_URL + '/cards').then(function (response) {
          if (response && response.data)
            _this.cards = response.data
        })
      }
    }
}
</script>

<style lang="less">
</style>
