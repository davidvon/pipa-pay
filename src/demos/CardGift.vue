<template>
  <div class='card gift'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">赠送卡</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="weui_cells_title">你共有<span style="color:#6A6AD6">{{cards.length}}</span>张礼品卡</div>

    <checker class="center" :value.sync="cardIndex" default-item-class="card-item" selected-item-class="card-item-selected" @on-change="onCardSelect">
      <checker-item :value="$index" style="margin:4px;" v-for="item in cards">
        <masker style="border-radius:10px;" color="000" :opacity="0">
          <div class="img" :style="{backgroundImage: 'url(' + item.img + ')'}"></div>
          <div slot="content" class="content">
            <flexbox class="card-title">
              <flexbox-item :span="1/3"><img class="card-logo" :src="item.logo"/></flexbox-item>
              <flexbox-item :span="2/3" class="title">{{item.title}}</flexbox-item>
              <img class="icon-card-select" :src="$index==cardSelect.index ? cardSelect.icon.selected:cardSelect.icon.default"/>
            </flexbox>
            <flexbox class="card-property">
              <flexbox-item class="card-money" :span="1/2">余额: <span class="money">￥{{item.balance}}</span></flexbox-item>
              <flexbox-item class="card-valid" :span="1/2">有效期至{{item.expireDate}}</flexbox-item>
            </flexbox>
          </div>`
        </masker>
      </checker-item>
    </checker>
  </div>
</template>

<script>
  import { Checker, CheckerItem, Masker, Actionsheet, XHeader, Group, XNumber, Cell, Switch, XInput, XButton, Box, Alert,
    Flexbox, FlexboxItem } from '../components'
  import Const from '../services/const'

  export default {
    components: {
      Checker, CheckerItem, Masker, XHeader, Actionsheet, XNumber, Group, Cell, Switch, XInput, XButton, Box, Alert,
      Flexbox, FlexboxItem
    },

    //import Masker from '../components/masker'
    data () {
      return {
        cardIndex:1,
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        cards: [],
        showMenus: false,
        cardSelect: {
          icon:{
              default: '/static/demo/ico_sel.png',
              selected: '/static/demo/ico_selon.png'
          },
          index: -1
        }
      }
    },
    methods: {
      onCardSelect (index){
        this.cardSelect.index = index
      }
    },
    route: {
      data (transition){
        var _this = this
        this.$http.get(Const.API_URL + '/cards/oDF3iY9P32sK_5GgYiRkjsCo45bk').then(function (response) {
          if (response && response.data)
            _this.cards = response.data
        })
      }
    }
}
</script>

<style lang="less">
  @import '../styles/paycard.less';

  .card .title {
    color: #fff;
    font-size: 17px;
  }

</style>
