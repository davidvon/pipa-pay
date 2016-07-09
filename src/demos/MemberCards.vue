<template>
  <div class='wx-cards card'>
    <x-header :left-options='{showBack:true, backText:"返回"}'>我的卡包</x-header>
    <div class="weui_cells_title" v-show="!no_data">你共有<span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡</div>
    <div class="content">
      <div style="margin:15px;" data-index={{$index}} data-globalid="{{item.globalId}}"
           data-cardid="{{item.cardId}}" data-cardcode="{{item.cardCode}}" data-merchantid={{item.merchantId}}
           data-status={{item.status}} v-for="item in cards" @click="openCard">

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
    <loading :show.sync="loading" :text=""></loading>
    <alert :show.sync="alert.show" title="信息" button-text="知道了">{{alert.message}}</alert>
  </div>
</template>

<script>
  import { Loading, Masker, XHeader, Group, XNumber, Cell, Switch, XInput, XButton, Box, Alert,
    Flexbox, FlexboxItem } from '../components'
  import Const from '../services/const'
  import { getCookie } from '../libs/util'
  import {wxAddCard, wxOpenCard} from '../services/wxcard'

  export default {
    components: {
      Loading, Masker, XHeader, XNumber, Group, Cell, Switch, XInput, XButton, Box, Alert, Flexbox, FlexboxItem
    },
    data () {
      return {
        no_data: false,
        cards: [],
        statusStr: ['未入微信卡包', '已入微信卡包,未激活', '已激活', '已赠送'],
        statusClass: ['wxcard-disable', 'wxcard-enable', 'wxcard-enable', 'wxcard-disable'],
        loading: false,
        alert: {message: '', show: false}
      }
    },
    methods:{
      alertMsg(msg){
        this.alert.message = msg
        this.alert.show = true
      },
      buyCard (){
        this.$route.router.go({name: 'buy'})
      },
      openCard (e){
        this.loading = true;
        var self = this
        console.log(e);
        var attrs = e.currentTarget.attributes;
        var index = attrs['data-index'].value
        var cardGlobalId = attrs['data-globalid'].value;
        var cardId = attrs['data-cardid'].value;
        var status = attrs['data-status'].value;
        if (status >= 3){
          self.loading = false;
          self.alertMsg('该卡正在转赠中或已过期，不可使用');
          return
        }
        if (status == 2) {
          var cardCode = (attrs['data-cardcode'] && attrs['data-cardcode'].value) || 0;
          wxOpenCard(self, cardId, cardCode);
          self.loading = false;
          return;
        }
        wxAddCard(self, cardGlobalId, getOpenId(), Const.API_URL, function (cardList) {
          self.$http.post(Const.API_URL + 'card/add/status/update', {openid:self.openid, cardGlobalId: cardGlobalId}, function (res) {
            self.loading = false;
            if(res.result == 0){
              self.cards[Number(index)].cardCode = res.data
              self.cards[Number(index)].status = 2
            }
          }, "json")
        }, function(){
          self.loading = false;
        })
      }
    },
    route: {
      data (transition){
        var self = this
        self.openid = getCookie('PIPA_OPENID')
        self.loading = true
        this.$http.post(Const.API_URL + 'cards', {openid: self.openid}).then(function (response) {
          self.loading = false
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
