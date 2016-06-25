<template>
  <div class='card-list'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">我的卡包</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="weui_cells_title">你共有{{card.list.length}}张礼品卡</div>

    <div style="margin:10px;" v-for="item in card.list">
      <masker style="border-radius:10px;" color="000" :opacity="0">
        <div class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
        <div slot="content" class="content">
          <flexbox>
            <flexbox-item :span="1/3"><img style="height:35px;" :src="logo"/></flexbox-item>
            <flexbox-item class="title" :span="2/3">{{item.title}}</flexbox-item>
          </flexbox>
          <flexbox>
            <flexbox-item class="card-money" :span="1/4">余额: <span class="money-symbol">￥</span><span class="money">5</span></flexbox-item>
            <flexbox-item class="card-valid" :span="3/4">有效期至19年06月</flexbox-item>
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
      logo:"./static/demo/card_logo.png",
      card:{
        sum:2,
        list: [{
          title: '沃尔玛GIFT卡',
          img: './static/demo/card_blue.png'
        }, {
          title: '沃尔玛VIP至尊卡',
          img: './static/demo/card_green.png'
        }, {
          title: '沃尔玛洗车卡',
          img: './static/demo/card_red.png'
        }]
      },
      showMenus: false
    }
  }
}
</script>

<style lang="less">
.card-list .vux-masker{
  -webkit-box-shadow: 0 4px 4px rgba(0,0,0,0.2);
  -moz-box-shadow: 0 4px 4px rgba(0,0,0,0.2);
  box-shadow: 0 4px 4px rgba(0,0,0,0.2);
}
.card-list .vux-masker .content{
  padding: 15px;
}

.card-list .vux-flexbox{
  margin-top: 20px;
}

.card-list .card-money{
  color:grey;
  font-size: 14px;
}

.card-list .card-valid{
  color:grey;
  font-size: 14px;
  text-align: right;
}

.card-list .img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 10px;
}

.card-list .title {
  color: #fff;
  font-weight: 500;
  font-size: 22px;
  width: 100%;
}
.card-list .money-symbol{
  color:#ff4a00;font-size:16px
}
.card-list .money{
  color:#ff4a00;font-size:18px
}

</style>
