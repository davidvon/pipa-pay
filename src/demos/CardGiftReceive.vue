<template>
  <div>
    <div class="content">
      <div class="not_card" v-show="no_data">
        <p class="ncd_p1"><span class="ico_nocard"></span></p>
        <p class="ncd_p2">赠送的电子卡不存在~~</p>
        <p class="ncd_p3">
          <x-button type="primary" @click="onBuyCard">购买电子卡</x-button>
          <x-button @click="onHome">首页</x-button>
        </p>
      </div>
      <div v-show="!no_data">
        <div class="lk_top">
          <div class="lk_toux"><span class="toux_img"><img :src="info.giveUserHeadImg" class="give-user"></span></div>
          <p class="lk_tp1"><em class="give-user-name">{{info.giveUsername}}</em>赠送的礼品卡</p>
          <p class="lk_tp2 give-content">{{info.shareContent}}</p>
        </div>
        <p class="lk_btn_p can-receive"><x-button :type="info.giveStatus==0?'primary':''" :disabled="info.giveStatus!=0" @click="onReceiveCard">{{statusStr}}</x-button></p>
        <p class="lk_tit2 none"><span class="lk_cbox text-status"></span></p>
      </div>
    </div>
  </div>
</template>

<script>
  import { wxAddCard, wxOpenCard } from '../services/wxcard'
  import {XButton} from '../components'
  import Const from '../services/const'
  export default {
    components: {XButton},
    data () {
      return {
        no_data: false,
        info: {
          giveUserHeadImg:'',
          giveUsername:'',
          shareContent:'',
          cardStatus:0,
          giveStatus:0,
          acquireUserOpenId:''
        },
        statusStr:'',
        // 0:未放入微信卡包 1: 已放入微信卡包 2: 已赠送未接收 3:已赠送已接收 4:已过期
        statusStrList:['领取电子卡', '已被领取', '已领取，未放入卡包', '已存入卡包，可直接消费', '已过期' ]
      }
    },
    methods: {
      onHome(){
        this.$route.router.go({name: 'home'})
      },
      onBuyCard(){
        this.$route.router.go({name: 'buy'})
      },
      onReceiveCard(){
        var self = this
        this.$http.post(Const.apiUrl + 'card/receive', {openId:Const.openid, sign: this.sign}).then(function (response) {
          var res = response.data
          if (res.result == 255) {
            return
          }
          if(res.data.status == 1) {
            wxOpenCard(self, res.data.xwxCardId, res.data.code, function (cardList) {
              self.$route.router.go({name: 'memcards'})
            })
          }else{
            wxAddCard(self, Const.openid, Const.apiUrl, function (cardList) {
              self.$route.router.go({name: 'memcards'})
            })
          }
        })
      }
    },
    ready(){
      var self = this
      this.$http.post(Const.apiUrl + 'card/receive/check', {openId:Const.openid, sign:this.sign}).then(function (response) {
        var res = response.data
        if(res.result == 255){
          self.no_data = true
          return
        }
        self.info = res.data
        if(self.info.giveStatus == 0){  //未认领
          self.statusStr = self.statusStrList[0]
        }else if(self.info.acquireUserOpenId != Const.openid ){ //他人已认领
          self.statusStr = self.statusStrList[1]
        }else if(self.info.cardStatus == 0){      //他人已认领,未放入卡包
          self.statusStr = self.statusStrList[2]
        }else if(self.info.cardStatus == 1){      //他人已认领,已放入卡包
          self.statusStr = self.statusStrList[3]
        }else if(self.info.cardStatus == 2){      //已过期
          self.statusStr = self.statusStrList[4]
        }
      })
    },
    route: {
      data (transition){
        this.sign = transition.to.params.sign
      }
    }
  }
</script>

