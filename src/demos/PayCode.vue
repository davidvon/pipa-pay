<template>
  <div class="pay">
    <div class="background">
      <a class="detail" @click="onPayDetail">交易明细</a>
      <br>
      <div class="pay-card">
        <div>
          <div class="title">{{card.merchantName}}</div>
          <div class="sub-title">余额：￥{{card.amount}}</div>
        </div>
        <div class="line-part">
          <div class="line left"></div>
          <div class="line right"></div>
        </div>
        <div style="min-height:410px">
          <div class="code-img">
            <barcode :width=1.4 style="max-height:200px;" :display-value=true :code.sync="card.qrcode"></barcode>
          </div>
          <div class="code-img" style="padding: 20px 0 50px 0;">
            <qrcode :size="64" :value.sync="card.qrcode"></qrcode>
          </div>
        </div>
      </div>
      <br>
    </div>
    <alert :show.sync="alert.show" @on-hide="onPayCards" title="信息" button-text="知道了">{{alert.message}}</alert>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import Const from '../services/const'
  import {Barcode, Qrcode, Alert, Loading} from '../components'
  export default {
    components: {Barcode, Qrcode, Alert, Loading},
    data () {
      return {
        timer: null,
        cardId: '',
        card: {
          status: 0,
          merchantName: '',
          cardName: '',
          balance: 0,
          qrcode: ''
        },
        loading: false,
        alert: {message: '', show: false}
      }
    },
    route: {
      data (transition){
        this.cardId = transition.to.params.cardId
        this.carCode = transition.to.params.cardCode
      }
    },
    methods: {
      alertMsg(msg){
        this.alert.message = msg
        this.alert.show = true
      },
      reload(){
        this.loading = true
        var self = this
        this.$http.post(Const.API_URL + 'card/pay/code', {cardId: this.cardId, cardCode: this.carCode}).then(function (response) {
          self.loading = false
          var ret = response.data
          if (ret && ret.result == 0){
            if (ret.data.status > 2) {
              self.alertMsg('该卡正在转赠中或已过期，不可使用');
            } else {
              self.card = ret.data
            }
          }
        })
      },
      refresh(){
        var self = this
        this.timer = setTimeout(function(){
          self.reload()
          self.refresh()
        }, 60000);
      },
      onPayDetail(){
        this.$route.router.go({name: 'pay_records', params: {cardId:this.cardId}})
      },
      onPayCards(){
        this.$route.router.go({name: 'paycards'})
      }
    },
    ready(){
      this.reload()
      this.refresh()
    },
    beforeDestroy(){
      if(this.timer){
        clearTimeout(this.timer)
        this.timer = null
      }
    }
  }
</script>

<style lang="less">
  .pay .background {
    background-color: #275F98 !important;
    font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, STHeiTi, sans-serif, tahoma, arial;
    text-align: center;
  }

  .pay .pay-card {
    width: 90%;
    margin: 20px auto;
    background-color: #FFF;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .pay .pay-card .title {
    margin: 0px;
    padding-top: 30px;
    line-height: 20px;
    font-size: 17px;
    color: #868484;
  }

  .pay .pay-card .sub-title {
    margin: 0px;
    line-height: 50px;
    font-size: 25px;
    color: #5F5E5E;
    padding-bottom: 15px;
  }

  .pay .pay-card .line-part {
    border-bottom: 1px dashed rgba(183, 184, 189, 0.48);
    margin: 0 20px;
  }

  .pay .pay-card .line {
    display: block;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    background-color: #275F98;
  }

  .pay .pay-card .line.left {
    float: left;
    margin-top: -10px;
    margin-left: -30px;
  }

  .pay .pay-card .line.right {
    float: right;
    margin-top: -10px;
    margin-right: -30px;
  }

  .pay .detail {
    float: right;
    margin: 10px 15px;
    color: white;
  }

  .pay .code-img {
    padding: 20px;
  }
</style>
