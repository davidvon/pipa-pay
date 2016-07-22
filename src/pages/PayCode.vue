<template>
  <div class="pay">
    <div class="background">
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
        <div>
          <div class="code-img">
            <barcode :width=1.4 style="max-height:120px;" :display-value=true :code.sync="card.qrcode"></barcode>
          </div>
          <div class="code-img">
            <qrcode :size="64" :value.sync="card.qrcode"></qrcode>
          </div>
        </div>
      </div>
      <a class="detail" @click="goPayRecords">交易明细</a>
      <br>
    </div>
    <toast :time="1500" :type.sync="alert.type" :show.sync="alert.show">{{alert.message}}</toast>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import Const from '../services/const'
  import logger from '../services/log'

  export default {
    components: {
      "Loading": require('../components/loading/index.vue'),
      "Toast": require('../components/toast/index.vue'),
      "Barcode": require('../components/barcode/index.vue'),
      "Qrcode": require('../components/qrcode/index.js')
      },
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
        alert: {type:'', message:'', show:false}
      }
    },
    route: {
      data (transition){
        this.cardId = transition.to.params.cardId
        this.carCode = transition.to.params.cardCode
        this.height = window.innerHeight
      }
    },
    methods: {
      alertMsg(type, msg){
        this.alert.type = type
        this.alert.message = msg
        this.alert.show = true
        var self = this
        this.timer = setTimeout(function () {
          self.$route.router.go({name: 'home'})
        }, 1500);
      },
      reload(){
        this.loading = true
        var self = this
        this.$http.post(Const.API_URL + 'card/pay/code', {
          cardId: this.cardId,
          cardCode: this.carCode
        }).then(function (response) {
          self.loading = false
          var ret = response.data
          if (ret && ret.result == 0) {
            if (ret.data.status > 2) {
              self.alertMsg("warn", '该卡在转赠中或已过期');
            } else {
              self.card = ret.data
            }
          }
        })
      },
      refresh(){
        var self = this
        this.timer = setTimeout(function () {
          self.reload()
          self.refresh()
        }, 60000);
      },
      goPayRecords(){
        this.$route.router.go({name: 'pay_records', params: {cardId: this.cardId}})
      }
    },
    ready(){
      this.reload()
      this.refresh()
    },
    beforeDestroy(){
      if (this.timer) {
        clearTimeout(this.timer)
        this.timer = null
      }
    }
  }
</script>

<style lang="less">
  .pay{
    height: 100%;
  }
  .pay .background {
    height: 100%;
    background-color: #275F98 !important;
    font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, STHeiTi, sans-serif, tahoma, arial;
    text-align: center;
  }

  .pay .pay-card {
    width: 75%;
    margin: 0 13%;
    background-color: #FFF;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .pay .pay-card .title {
    margin: 0px;
    padding-top: 20px;
    line-height: 20px;
    font-size: 17px;
    color: #868484;
  }

  .pay .pay-card .sub-title {
    margin: 0px;
    line-height: 40px;
    font-size: 20px;
    color: #5F5E5E;
    padding-bottom: 10px;
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
    margin: 15px;
    color: white;
    display: block;
  }

  .pay .code-img {
    padding: 10px 0 20px;
  }
</style>
