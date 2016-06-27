<template>
  <div class='wx-cards card'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">我的卡包</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="weui_cells_title">你共有 <span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡</div>

    <div style="margin:15px;" v-for="item in cards">
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
  import Const from '../services/const'

  export default {
    components: {
      Masker, XHeader, Actionsheet, XNumber, Group, Cell, Switch, XInput, XButton, Box, Alert,
      Flexbox, FlexboxItem
    },
    data () {
      return {
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        cards: [],
        showMenus: false
      }
    },
    route: {
      data (transition){
        var _this = this
        this.$http.get(Const.API_URL + '/cards').then(function (response) {
          if (response && response.data)
            _this.cards = response.data
        })
      }
    }
}
</script>

<style lang="less">
.wx-cards .wxcard-enable{
  margin-left: 0!important;
  color:grey;
  font-size: 14px;
  text-align: right;
}
.wx-cards .wxcard-disable{
  margin-left: 0!important;
  color:red;
  font-size: 14px;
  text-align: right;
}

.wx-cards .title {
  margin-top: 6px;
  color: #fff;
  font-size: 18px;
  width: 100%;
}

.wx-cards .sub-title{
  color: #fff;
  font-size: 12px;
  width: 100%;
}

</style>
