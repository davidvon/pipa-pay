<template>
  <div class="order">
    <div class="content">
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
            <x-input class="other-money" focus="true" placeholder="1-1000" :min=1 :max=4
                     :value.sync="otherMoney" keyboard="number"></x-input>
          </div>
        </div>
      </div>
      <group>
        <x-number title="数量" :min="1" :max="10" :value.sync="count" type="inline"></x-number>
        <cell title="合计">
          <del class="total_amount">￥{{count*money || count*otherMoney}}</del>
          <span class="money-symbol">￥</span><span class="money">{{amountDiscount}}</span>
        </cell>
      </group>
      <group>
        <switch :value.sync="invoice.enable" title="需要发票(邮寄到付)"></switch>
        <div v-show="invoice.enable">
          <x-input title="发票抬头" :value.sync="invoice.title" placeholder="单位名称或个人姓名"></x-input>
          <cell title="发票内容" @click="invoice.menuShow=true">{{invoice.content}}<span class="demo-icon" slot="icon"></span></cell>
          <x-input title="收件人" :min=3 :max=4 :value.sync="invoice.name" placeholder="姓名"></x-input>
          <x-input title="联系电话" :value.sync="invoice.phone" placeholder="手机号码" keyboard="number"
                   is-type="china-mobile"></x-input>
          <x-input title="邮政编码" :value.sync="invoice.zip" placeholder="邮政编码" keyboard="number" :min="6"
                   :max="6"></x-input>
          <x-input title="详细地址" :value.sync="invoice.address" placeholder="省份 城市 街道 详细地址"></x-input>
        </div>
      </group>
      <box style="padding:20px">
        <x-button :disabled="buyButtonDisable" type="primary" @click="buyCard">购卡</x-button>
      </box>
    </div>
    <div class="center pop_wraper" v-show="invoice.menuShow">
      <div class="pop_obottom">
        <ul class="fselect_list invoice_list border b_top">
          <li><div @click="invoiceClick(1)" class="border b_btm">商品一批</div></li>
          <li><div @click="invoiceClick(2)" class="border b_btm">食品一批</div></li>
          <li><div @click="invoiceClick(3)" class="border b_btm">日用品一批</div></li>
          <li><div @click="invoiceClick(0)">取消</div></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import Const from '../services/const'
  import logger from '../services/log'
  import Storage from '../services/storage'

  export default {
    attached () {
      this.$root.navTitle = '电子卡购买'
      this.$root.showHeader = true
    },

    components: {
      "XButton": require('../components/x-button/index.vue'),
      "Checker": require('../components/checker/index.vue'),
      "CheckerItem": require('../components/checker-item/index.vue'),
      "XNumber": require('../components/x-number/index.vue'),
      "Group": require('../components/group/index.vue'),
      "Cell": require('../components/cell/index.vue'),
      "Switch": require('../components/switch/index.vue'),
      "XInput": require('../components/x-input/index.vue'),
      "Box": require('../components/box/index.vue')
    },
    data () {
      return {
        money: 50,
        otherMoney: "",
        count: 1,
        invoice: {
          menuShow: false,
          enable: false,
          title: '',
          name: '',
          phone: '',
          zip: '',
          address: '',
          menus: ['商品一批','食品一批','日用品一批'],
          content: '商品一批'
        },
        cardId: '',
        orderId: ''
      }
    },
    computed: {
      buyButtonDisable: function () {
        return !((this.money > 0 || (this.otherMoney.length > 0 && Number(this.otherMoney)<=1000 && Number(this.otherMoney)>0)) && this.invoice_valid())
      },
      amountDiscount: function(){
        var amount = this.count*(this.money||this.otherMoney)
        var val = 0
        if(amount < 500) val = amount
        else if(amount < 1000) val = amount*0.98
        else if(amount < 2000) val = amount*0.96
        else if(amount < 5000) val = amount*0.94
        else if(amount < 8000) val = amount*0.92
        else val = amount * 0.9
        return /^(\d+\.\d+)?$/.test(val.toString()) ? parseFloat(val).toFixed(2):val
      }
    },
    methods: {
      invoiceClick(i){
        if(i!=0) this.invoice.content=this.invoice.menus[i-1]
        this.invoice.menuShow=false
      },
      orderCommit(self, orderId, callback){
        self.$http.post(Const.API_URL + 'card/buy/commit', {orderId: orderId}).then(function (response) {
          if (response.result == 0) {
            self.$dispatch('alert', "订单提交已成功");
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
              self.$dispatch('alert', "支付成功", function(){
                self.$route.router.go({name: 'buy_result', params: {orderId: self.orderId}});
              });
            })
          },
          fail: function (res) {
            self.$dispatch('alert', "支付失败:"+ res.errMsg +", 请稍后再试");
          }
        });
      },
      buyCard(){
        var self = this;
        this.$dispatch('showLoading')
        if (this.money == 0 && (Number(this.otherMoney) > 1000)) {  //Number(this.otherMoney)<0.01 || TODO
          self.$dispatch('alert', '输入金额范围不符')
          self.$dispatch('hideLoading')
          return
        }
        self.openid = Storage.wxOpenId
        var data = {
          price: self.amountDiscount,
          count: self.count,
          openId: self.openid,
          cardId: Const.cardId
        };
        logger.log("CardBuy", "openid:" + data.openId + " cardId:" + data.cardId + " discount:" + self.amountDiscount)
        this.$http.post(Const.API_URL + 'card/buy', data).then(function (response) {
          var res = response.data
          self.$dispatch('hideLoading')
          if (res.result == 0) {
            self.wxPay(res.content);
          } else if (res.result == 1) {
            self.$dispatch('alert', "订单已支付");
          } else if (res.result == 255) {
            self.$dispatch('alert', "支付已完成");
          } else if (res.result == 250) {
            self.$dispatch('alert', "请客户先关注公众号");
          } else {
            self.$dispatch('alert', "支付失败: "+ res.msg);
          }
        }, function () {
          self.$dispatch('hideLoading')
          self.$dispatch('alert', "系统出现异常, 请稍后再试");
        })
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
  .order .content{
    text-align: left!important;
    padding:0
  }
  .order .money-item {
    width: 100px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    border-radius: 6px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin: 5px;
    font-size: 17px;
    color: #666;
  }

  .order .money-item-selected {
    border-color: #e64340;
    color: #e64340;
  }

  .order .center {
    margin-top: 0;
    text-align: center;
  }

  .order .money-symbol {
    color: #e64340;
    font-size: 20px
  }

  .order .money {
    color: #e64340;
    font-size: 23px
  }

  .order .other-money {
    height: 15px;
    padding: 10px;
    font-size: 16px;
  }

  .order .other-money-input {
    position: relative;
    display: block;
    height: 60px
  }
  .order .weui_cell{
    color: #666;
    font-size: 16px;
  }
  .popover {
    position: absolute;
    top: 0;
    left: 0;
    width: 84%;
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
    margin: 10px 8%;
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
