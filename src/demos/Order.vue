<template>
  <div class="order">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">购买</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>

    <div class="weui_cells_title">欢迎选购电子礼品卡,礼品卡面值(最低1元)</div>
    <checker class="center" :value.sync="money" default-item-class="money-item" selected-item-class="money-item-selected">
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
          <x-input class="other-money" type="number" placeholder="1-1000" :value.sync="otherMoney" keyboard="number" @on-change="change"></x-input>
        </div>
      </div>
    </div>
    <group>
      <x-number title="数量" :min="1" :max="10" :value.sync="sum" type="inline"></x-number>
      <cell title="合计"><span class="money-symbol">￥</span><span class="money">{{sum*money || sum*otherMoney}}</span></cell>
    </group>
    <group>
      <switch title="需要发票(邮寄到付)"></switch>
      <x-input title="发票抬头" placeholder="单位名称或个人姓名"></x-input>
      <x-input title="发票内容" placeholder="单位名称或个人姓名"></x-input>
      <x-input title="收件人" placeholder="姓名"></x-input>
      <x-input title="联系电话" placeholder="手机号码" keyboard="number" is-type="china-mobile"></x-input>
      <x-input title="邮政编码" placeholder="邮政编码" keyboard="number" :min="6" :max="6"></x-input>
      <x-input title="详细地址" placeholder="省份 城市 街道 详细地址"></x-input>
    </group>
    <box gap="20px">
      <x-button :text="button.name" :disabled="button.disable" type="primary" @click="buy"></x-button>
    </box>
  </div>
</template>

<script>
import { Checker, CheckerItem, Actionsheet, XHeader, Group, XNumber, Cell, Switch, XInput, XButton, Box } from '../components'

export default {
  components: {
    Checker, CheckerItem, XHeader, Actionsheet, XNumber, Group, Cell, Switch, XInput, XButton, Box
  },
  data () {
    return {
      money: 50,
      otherMoney: "",
      sum:1,
      menus: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      showMenus: false,
      button:{
        name:'购买',
        disable:false
      }
    }
  },
  methods: {
    change (val) {
      console.log(val)
    },
    buy () {
      this.button.name = '提交中...'
      this.button.disable = true
    }
  }
}
</script>

<style scoped>
.checker-popup {
  background: rgba(255,255,255,0.5);
}
.order .money-item {
  width: 100px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin: 5px 10px;
}
.order .money-item-selected {
  background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
.order .center{
  margin-top:0
}
.order .money-symbol{
  color:#ff4a00;font-size:20px
}
.order .money{
  color:#ff4a00;font-size:23px
}
.order .other-money {
  line-height: 2em;
  height: 2em;
  padding: 0 10px;
}
.order .other-money-input{
  position:relative; display: block; height:60px
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
.popover.bottom { margin: 10px 22px;}
.popover-content {padding: 5px; height:35px;}
.popover .arrow,.popover .arrow:after {
  position: absolute;
  display: block;
  width: 0;
  height: 0;
  border-color: transparent;
  border-style: solid;
}
.popover .arrow { border-width: 11px; }
.popover .arrow:after { border-width: 10px; content: "" }
.popover.bottom .arrow {
  top: -11px;
  left: 85%;
  margin-left: -11px;
  border-bottom-color: #999;
  border-bottom-color: rgba(0,0,0,0.25);
  border-top-width: 0
}
.popover.bottom .arrow:after {
  top: 1px;
  margin-left: -10px;
  border-bottom-color: #fff;
  border-top-width: 0
}
</style>
