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
      <p>每分钟自动更新</p>
    </div>
    <alert :show.sync="alert.show" title="" button-text="知道了" @on-hide="alert.callback">{{alert.message}}</alert>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import Const from '../services/const'
  import logger from '../services/log'

  export default {
    components: {
      "Loading": require('../components/loading/index.vue'),
      "Alert": require('../components/alert/index.vue'),
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
        alert: {type:'', message:'', show:false, callback:null}
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
      alertMsg(msg, callback){
        this.alert.message = msg
        this.alert.show = true
        this.alert.callback = callback || function(){}
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
              self.alertMsg('该卡在转赠中或已过期', function(){
                self.$route.router.go({name: 'home'})
              })
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
    background-color: #275F98 !important;
    font-family: "Microsoft YaHei", "Helvetica Neue", Helvetica, STHeiTi, sans-serif, tahoma, arial;
    text-align: center;
    min-height: 700px;
  }
  .pay .background p{
    color:rgba(255, 255, 255, 0.3);
  }

  .pay .pay-card {
    width: 75%;
    margin: 10px 13%;
    background-color: #FFF;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .pay .pay-card .title {
    margin: 0;
    padding-top: 20px;
    line-height: 20px;
    font-size: 17px;
    color: #868484;
  }

  .pay .pay-card .sub-title {
    margin: 0;
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
    margin: 10px;
    color: white;
    display: block;
  }

  .pay .code-img {
    padding: 15px 0 20px;
  }
</style>
