<template>
  <div class='wx-cards card'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">我的卡包</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="weui_cells_title" v-show="!no_data">你共有<span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡</div>
    <div class="content">
      <div style="margin:15px;" data-cardid="{{item.cardId}}" data-cardcode="{{item.cardCode}}" data-merchantid={{item.merchantId}} data-status={{item.status}} v-for="item in cards" @click="openCard">
        <masker style="border-radius:10px;" color="000" :opacity="0">
          <div class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="content">
            <flexbox>
              <flexbox-item :span="1/3"><img class="card-logo" :src="item.logo"/></flexbox-item>
              <flexbox-item :span="2/3">
                <div class="title">{{item.title}}</div>
                <div class="sub-title">有效期至{{item.expireDate}}</div>
              </flexbox-item>
            </flexbox>

            <flexbox class="card-property">
              <flexbox-item class="card-money" :span="1/2">余额: <span class="money">￥{{item.amount}}</span></flexbox-item>
              <flexbox-item class="{{statusClass[item.status]}}" :span="1/2">{{statusStr[item.status]}}</flexbox-item>
            </flexbox>
          </div>
        </masker>
      </div>
      <div class="not_card" v-show="no_data">
        <p class="ncd_p1"><span class="ico_nocard"></span></p>
        <p class="ncd_p2">暂无可消费的电子卡</p>
        <p class="ncd_p3"><x-button type="primary" @click="buyCard">购买电子卡</x-button></p>
      </div>
    </div>
  </div>
</template>

<script>
  import { Masker, Actionsheet, XHeader, Group, XNumber, Cell, Switch, XInput, XButton, Box, Alert,
    Flexbox, FlexboxItem } from '../components'
  import Const from '../services/const'
  import {wxAddCard, wxOpenCard} from '../services/wxcard'

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
        no_data: false,
        cards: [],
        statusStr: ['未放入微信卡包', '已放入微信卡包', '已赠送'],
        statusClass: ['wxcard-disable', 'wxcard-enable', ''],
        showMenus: false
      }
    },
    methods:{
      buyCard (){
        this.$route.router.go({name: 'buy'})
      },
      openCard (e){
        var self = this
        console.log(e);
        var attrs = e.currentTarget.attributes;
        var wxCardId = (attrs['data-cardid'] && attrs['data-cardid'].value) || 0;
        var cardCode = (attrs['data-cardcode'] && attrs['data-cardcode'].value) || 0;
        var merchantId = (attrs['data-merchantid'] && attrs['data-merchantid'].value) || 0;
        var status = (attrs['data-status'] && attrs['data-status'].value) || 0;
        if (status == 3) return
        if (status == 1) {
          wxOpenCard(self, wxCardId, cardCode);
          return;
        }
        wxAddCard(self, Const.openid, Const.apiUrl, function (cardList) {
          this.$http.post(Const.apiUrl + 'weixin/card/status/update', {openid:Const.openid, cards: cardList}, function (res) {
            self.$route.router.go({name: 'memcards'})
          }, "json")
        })
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
            if(self.cards.length == 0)
              self.no_data = true
        })
      }
    }
}
</script>

<style lang="less">
</style>
