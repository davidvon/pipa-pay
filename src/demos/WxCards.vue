<template>
  <div class='wx-cards'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">我的卡包</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="weui_cells_title">你共有 <span style="color:#6A6AD6">{{card.list.length}}</span>张礼品卡</div>

    <div style="margin:10px;" v-for="item in card.list">
      <masker style="border-radius:10px;" color="000" :opacity="0">
        <div class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="content">
          <flexbox>
            <flexbox-item :span="1/3"><img style="height:35px;" :src="item.logo"/></flexbox-item>
            <flexbox-item :span="2/3">
              <div class="title">{{item.title}}</div>
              <div class="sub-title">有效期至{{item.expireDate}}</div>
            </flexbox-item>
          </flexbox>
          <flexbox class="card-property">
            <flexbox-item class="card-money" :span="1/2">余额: <span class="money">￥{{item.price}}</span></flexbox-item>
            <flexbox-item class="{{item.wxCardEnable ? 'wxcard-enable':'wxcard-disable'}}" :span="1/2">{{item.wxCardEnable ? "已放入微信卡包":"未放入微信卡包" }}</flexbox-item>
          </flexbox>
        </div>
      </masker>
    </div>
  </div>
</template>

<script>
  import { Masker, Actionsheet, XHeader, Group, XNumber, Cell, Switch, XInput, XButton, Box, Alert,
    Flexbox, FlexboxItem } from '../components'

  export default {
    components: {
      Masker, XHeader, Actionsheet, XNumber, Group, Cell, Switch, XInput, XButton, Box, Alert,
      Flexbox, FlexboxItem
    },

    //import Masker from '../components/masker'
    data () {
      return {
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        card:{
          list: [{
            price: 600000.5,
            title: '沃尔玛GIFT卡',
            logo:"./static/demo/card_logo.png",
            img: './static/demo/card_blue.png',
            expireDate:'2018-05',
            wxCardEnable:true
          }, {
            price: 732000.1,
            title: '沃尔玛VIP至尊卡',
            logo:"./static/demo/card_logo.png",
            img: './static/demo/card_green.png',
            expireDate:'2016-10',
            wxCardEnable:true
          }, {
            price: 800000.3,
            title: '沃尔玛洗车卡',
            logo:"./static/demo/card_logo.png",
            img: './static/demo/card_red.png',
            expireDate:'2019-12',
            wxCardEnable:false
          }]
        },
        showMenus: false
      }
    }
}
</script>

<style lang="less">
.wx-cards .vux-masker{
  -webkit-box-shadow: 0 4px 4px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 4px 4px rgba(0,0,0,0.2);
  box-shadow: 0 4px 4px rgba(0,0,0,0.2);
}
.wx-cards .vux-masker .content{
  padding: 15px;
}

.wx-cards .card-property{
  margin-top: 24px;
}
.wx-cards .card-money{
  color:grey;
  font-size: 14px;
}

.wx-cards .wxcard-enable{
  color:grey;
  font-size: 14px;
  text-align: right;
}
.wx-cards .wxcard-disable{
  color:red;
  font-size: 14px;
  text-align: right;
}

.wx-cards .img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 10px;
}

.wx-cards .title {
  color: #fff;
  font-size: 20px;
  width: 100%;
}

.wx-cards .sub-title{
  color: #fff;
  font-size: 13px;
  width: 100%;
}

.wx-cards .money{
  color:#E01F1F;font-size:15px
}

</style>
