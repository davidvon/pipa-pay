<template>
  <div class="order">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}"
              @on-click-more="showMenus=true">购买</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel
                 @on-click-menu-home="onPage('home')"
                 @on-click-menu-cards="onPage('memcards')"></actionsheet>
    <div class="weui_cells_title">欢迎选购电子礼品卡,礼品卡面值(最低1元)</div>
    <checker class="center" :value.sync="money" default-item-class="money-item"
             selected-item-class="money-item-selected">
      <checker-item :value="50">50元</checker-item>
      <checker-item :value="100">100元</checker-item>
      <checker-item :value="200">200元</checker-item>
      <checker-item :value="500">500元</checker-item>
      <checker-item :value="1000">1000元</checker-item>
      <checker-item :value="0">其他金额</checker-item>
    </checker>
    <div class="center other-money-input" v-show="!money">
      <div class="popover fade bottom in" style="display: block;">
        <div class="arrow"></div>
        <div class="popover-content">
          <x-input class="other-money" focus="true" placeholder="1-1000" type="number" :min=1 :max=1000
                   :value.sync="otherMoney" keyboard="number"></x-input>
        </div>
      </div>
    </div>
    <group>
      <x-number title="数量" :min="1" :max="10" :value.sync="count" type="inline"></x-number>
      <cell title="合计"><span class="money-symbol">￥</span><span class="money">{{count*money || count*otherMoney}}</span>
      </cell>
    </group>
    <group>
      <switch :value.sync="invoice.enable" title="需要发票(邮寄到付)"></switch>
      <div v-show="invoice.enable">
        <x-input title="发票抬头" :value.sync="invoice.title" placeholder="单位名称或个人姓名"></x-input>
        <cell title="发票内容" :value.sync="invoice.content" is-link @click="invoice.select=true"></cell>
        <x-input title="收件人" :min=3 :max=4 :value.sync="invoice.name" placeholder="姓名"></x-input>
        <x-input title="联系电话" :value.sync="invoice.phone" placeholder="手机号码" keyboard="number"
                 is-type="china-mobile"></x-input>
        <x-input title="邮政编码" :value.sync="invoice.zip" placeholder="邮政编码" keyboard="number" :min="6"
                 :max="6"></x-input>
        <x-input title="详细地址" :value.sync="invoice.address" placeholder="省份 城市 街道 详细地址"></x-input>
      </div>
      <actionsheet :show.sync="invoice.select" :menus="invoice.menus"
                   @on-click-menu="invoiceContentSelect"></actionsheet>
    </group>
    <box style="padding:20px">
      <x-button :disabled="buyButtonDisable" type="primary" @click="buyCard">购卡</x-button>
    </box>
    <alert :show.sync="alert.show" title="消息" button-text="知道了" @on-hide="alert.callback">{{alert.message}}</alert>
    <loading :show.sync="loading"></loading>
  </div>
</template>

<script>
  import Const from '../services/const'
  import logger from '../services/log'
  import Storage from '../services/storage'
  export default {
    components: {
      "XHeader": require('../components/x-header/index.vue'),
      "Actionsheet": require('../components/actionsheet/index.vue'),
      "Loading": require('../components/loading/index.vue'),
      "XButton": require('../components/x-button/index.vue'),
      "Checker": require('../components/checker/index.vue'),
      "CheckerItem": require('../components/checker-item/index.vue'),
      "XNumber": require('../components/x-number/index.vue'),
      "Group": require('../components/group/index.vue'),
      "Cell": require('../components/cell/index.vue'),
      "Switch": require('../components/switch/index.vue'),
      "XInput": require('../components/x-input/index.vue'),
      "Box": require('../components/box/index.vue'),
      "Alert": require('../components/alert/index.vue')
    },
    data () {
      return {
        money: 50,
        otherMoney: "",
        count: 1,
        invoice: {
          enable: false,
          select: false,
          titleValid: true,
          title: '',
          name: '',
          phone: '',
          zip: '',
          address: '',
          menus: {
            menu1: '商品一批',
            menu2: '食品一批',
            menu3: '日用品一批'
          },
          content: '商品一批'
        },
        menus: {
          home: '首页',
          cards: '我的卡包'
        },
        showMenus: false,
        cardId: '',
        orderId: '',
        alert: {message: '', show: false, callback: ''},
      }
    },
    computed: {
      buyButtonDisable: function () {
        return !((this.money > 0 || this.otherMoney.length > 0) && this.invoice_valid())
      }
    },
    methods: {
      invoiceContentSelect (item){
        alert(this.invoice.select)
        this.invoice.content = this.invoice.menus[item]
        this.invoice.select = false
      },
      orderCommit(self, orderId, callback){
        self.$http.post(Const.API_URL + 'card/buy/commit', {orderId: orderId}).then(function (response) {
          if (response.result == 0) {
            self.alertMessage("订单提交完成");
            logger.log("wxPay", "orderId:" + orderId + " ,buy card success")
          } else {
            logger.log("wxPay", "orderId:" + orderId + " ,buy card fail:" + response.result)
          }
          callback && callback()
        }, function (response) {
          logger.log("wxPay", "orderId:" + orderId + " ,buy card exception")
          callback && callback()
        })
      },
      onCardResultShow(){
        this.$route.router.go({name: 'buy_result', params: {orderId: this.orderId}});
      },
      wxPay(res){
        var self = this
        var orderId = res.orderId
        logger.log("CardBuy", "to weixin pay, sign:" + res.paySign + 'orderId:' + orderId)
        wx && wx.chooseWXPay({
          timestamp: res.timeStamp, //时间戳
          nonceStr: res.nonceStr, //随机串
          package: res.package,   //扩展包
          signType: res.signType, //MD5
          paySign: res.paySign,  //微信签名
          success: function (res) {
            logger.log("wxPay", "orderId:" + orderId + " ,pay succeed")
            self.orderCommit(self, orderId, function () {
              self.orderId = orderId
              self.alertMessage("订单支付成功", self.onCardResultShow);
            })
          },
          fail: function (res) {
            self.alertMessage("订单支付失败");
          }
        });
      },
      buyCard(){
        var self = this;
        self.loading = true;
        if (this.money == 0 && (Number(this.otherMoney) > 1000)) {  //Number(this.otherMoney)<0.01 || TODO
          self.alertMessage('输入的其他金额不符合要求')
        }
        self.openid = Storage.wxOpenId
        var data = {
          price: (self.money || Number(self.otherMoney)) * self.count,
          count: self.count,
          openId: self.openid,
          cardId: Const.cardId
        };
        logger.log("CardBuy", "openid:" + data.openId + " cardId:" + data.cardId +
          " price:" + data.price + " count:" + data.count)
        this.$http.post(Const.API_URL + 'card/buy', data).then(function (response) {
          var res = response.data
          self.loading = false;
          if (res.result == 0) {
            self.wxPay(res.content);
          } else if (res.result == 1) {
            self.alertMessage("订单已完成现金支付，请等待商家确认");
          } else if (res.result == 255) {
            self.alertMessage("订单已完成支付");
          } else {
            self.alertMessage("支付异常，请稍后再试");
          }
        }, function () {
          self.loading = false;
          self.alertMessage("系统错误，请稍后再试");
        })
      },
      alertMessage(msg, callback){
        this.alert.message = msg;
        this.alert.show = true
        this.alert.callback = callback || null
      },
      invoice_valid(){
        return (!this.invoice.enable ||
        (this.invoice.title.length > 0 && this.invoice.name.length > 0 && this.invoice.phone.length > 0 &&
        this.invoice.zip.length > 0 && this.invoice.address.length > 0 && this.invoice.content.length > 0))
      },
      onPage(name){
        this.$route.router.replace({name: name})
      }
    }
  }
</script>

<style scoped>
  .checker-popup {
    background: rgba(255, 255, 255, 0.5);
  }

  .order .money-item {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin: 5px;
  }

  .order .money-item-selected {
    background: #ffffff url(../assets/images/active.png) no-repeat right bottom;
    border-color: #ff4a00;
  }

  .order .center {
    margin-top: 0;
    text-align: center;
  }

  .order .money-symbol {
    color: #ff4a00;
    font-size: 20px
  }

  .order .money {
    color: #ff4a00;
    font-size: 23px
  }

  .order .other-money {
    line-height: 2em;
    height: 2em;
    padding: 0 10px;
  }

  .order .other-money-input {
    position: relative;
    display: block;
    height: 60px
  }

  .popover {
    position: absolute;
    top: 0;
    left: 0;
    padding: 1px;
    width: 88%;
    text-align: left;
    white-space: normal;
    background-color: #fff;
    border: 1px solid #ccc;
    -webkit-border-radius: 6px;
    -moz-border-radius: 6px;
    border-radius: 6px;
    -webkit-background-clip: padding-box;
    -moz-background-clip: padding;
    background-clip: padding-box
  }

  .popover.bottom {
    margin: 10px 22px;
  }

  .popover-content {
    padding: 5px;
    height: 35px;
  }

  .popover .arrow, .popover .arrow:after {
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }

  .popover .arrow {
    border-width: 11px;
  }

  .popover .arrow:after {
    border-width: 10px;
    content: ""
  }

  .popover.bottom .arrow {
    top: -11px;
    left: 85%;
    margin-left: -11px;
    border-bottom-color: #999;
    border-bottom-color: rgba(0, 0, 0, 0.25);
    border-top-width: 0
  }

  .popover.bottom .arrow:after {
    top: 1px;
    margin-left: -10px;
    border-bottom-color: #fff;
    border-top-width: 0
  }
</style>
