<template>
  <div class='wx-cards card gift'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}"
              @on-click-more="showMenus=true">赠送卡
    </x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="container" data-js="">
      <div class="content">
        <p class="donation_top">请输入转赠留言</p>
        <div class="donation_text border b_top_btm">
          <x-textarea :max="30" :placeholder="content" :value.sync="content"></x-textarea>
        </div>
        <p class="donation_btn">
          <x-button type="primary" @click="maskShow=true">转赠</x-button>
        </p>
        <p class="donation_p1">温馨提示</p>
        <p class="donation_p2"><span>1.</span> <span>转赠后，礼品卡即处于“转赠中”状态。待好友领取后，即与转赠者解绑，并与被转赠者建立绑定关系。</span></p>
        <p class="donation_p2"><span>2.</span> <span>若超过24小时未领取。则过期不可再领取。同时礼品卡从“转赠中”状态恢复正常。</span></p>
      </div><!-- content end -->
      <div class="s_wraper share_id" v-show="maskShow" @click="maskShow=false">
        <div class="pop_otop">
          <p class="box_share"><span class="ico_share"></span></p>
        </div>
      </div>
    </div>
    <alert :show.sync="alert.show" title="信息" button-text="知道了" @on-hide="goHome">{{alert.message}}</alert>
  </div>
</template>

<script>
  import { Checker, CheckerItem, Masker, Actionsheet, XHeader, XButton, XTextarea, Alert} from '../components'
  import Const from '../services/const'
  import { onMenuShareAppMessage } from '../services/wxlib'
  export default {
    components: {
      Checker, CheckerItem, Masker, Actionsheet, XHeader, XButton, XTextarea, Alert
    },
    data () {
      return {
        cardId: '',
        maskShow: false,
        content: '小小卡片，浓浓情义',
        shareUrl:'',
        card: {
          sign: '',
          cardId: '',
          cardName: '',
          timestamp: ''
        },
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        alert: {message: '', show: false}
      }
    },
    route: {
      data (transition){
        this.cardId = transition.to.params.cardId
      }
    },
    methods: {
      alertMsg(msg){
        this.alert.message = msg
        this.alert.show = true
      },
      updateCardStatus(){
        var self = this
        this.$http.post(Const.apiUrl + 'card/share',
          { openId:Const.openid,
            cardId: self.card.cardId,
            sign: self.card.sign,
            timestamp: self.card.timestamp,
            content: self.content}).then(function (response) {
          var res = response.data
          if(res.result != 0) return
          self.$route.router.go({name: 'gift_share_result', params:{cardId: self.card.cardId }})
        })
      },
      onShare(){
        var self = this
        if (!this.card || !this.share) return
        onMenuShareAppMessage(self.shareUrl, '点击领取' + self.card.cardName,
          self.content, self.card.logo, function () {
            self.updateCardStatus()
          })
      },
      goHome(){
        this.$route.router.go({name: 'home'})
      }
    },
    ready(){
      var self = this
      this.$http.post(Const.apiUrl + 'card/share/check', {openId:Const.openid, cardId: this.cardId}).then(function (response) {
        var res = response.data
        if(res.result != 0) return
        if (res.data.status == 2) {
          self.alertMsg('该卡已经转赠,无法再继续转赠')
        } else {
          self.card = res.data.card
          self.shareUrl = 'http://' + location.host + '/#!/gift/receive/' + self.card.sign;
//          self.updateCardStatus()
        }
      })
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
