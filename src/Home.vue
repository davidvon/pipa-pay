<template>
  <div class="home">
    <div class="vue-home center">
      <h1 class="vux-title">
        <span class="demo-icon" slot="icon" style="font-size:60px;color:#fff;display: block;">&#xe637;</span>
      </h1>
      <p class="vux-notice" style="color:#fff">沃尔玛礼品卡</p>
    </div>
    <div class="bg">
      <flexbox class="vux-1px-tb" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#buy/{{cardId}}">
            <div class="img icon-buy"></div>
            <div class="text">购卡</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item" v-link="{name:'paycards'}">
            <div class="img icon-pay"></div>
            <div class="text">支付</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#gift">
            <div class="img icon-share"></div>
            <div class="text">赠送卡</div>
          </a>
        </flexbox-item>
      </flexbox>

      <flexbox class="vux-1px-b" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <a class="item">
            <div class="img icon-buy-online"></div>
            <div class="text">在线购物</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#memcards">
            <div class="img icon-mycard"></div>
            <div class="text">我的卡包</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item" href="#guide">
            <div class="img icon-desc"></div>
            <div class="text">购卡指引</div>
          </a>
        </flexbox-item>
      </flexbox>
      <flexbox class="vux-1px-b" :gutter="0">
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#help">
            <div class="img icon-help"></div>
            <div class="text">帮助中心</div>
          </a>
        </flexbox-item>
        <flexbox-item class="vux-1px-r">
          <a class="item" href="#notice">
            <div class="img icon-guide"></div>
            <div class="text">电子卡章程</div>
          </a>
        </flexbox-item>
        <flexbox-item>
          <a class="item" href=""></a>
        </flexbox-item>
      </flexbox>
    </div>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import { Loading, Flexbox, FlexboxItem } from './components/'
  import {wxRegister} from './services/wxlib'
  import Const from './services/const'

  export default {
    components: { Loading, Flexbox, FlexboxItem },
    data () {
      return {
        loading: false,
        cardId: Const.cardId
      }
    },
    ready: function() {
      var self = this
      this.loading = true
      wxRegister(this, function(){
        self.loading = false
      })
    }
  }
</script>

<style scoped>
  @import './styles/1px.less';

  .demo-icon {
    font-family: 'vux-demo';
    font-size: 20px;
    padding-right: 10px;
    color: #04BE02;
  }
  .home {
    background-color: #fbf9fe;
  }

  .home .bg {
    background-color: #fff;
  }

  .home .vue-home.center {
    margin-top: 0;
    /*margin-bottom: 15px;*/
    text-align: center;
    padding: 20px 0;
    background-color: #5c69c7;
  }

  .home .item {
    display: block;
    box-sizing: border-box;
    font-size: 12px;
    color: #303030;
    position: relative;
    margin-bottom: 30px;
  }

  .home .img {
    width: 40px;
    height: 40px;
    margin: 30px auto 3px;
    background-repeat: no-repeat;
    background-size: 40px auto !important;
    background-position: center;
  }

  .home .text {
    font-size: 13px;
    text-align: center;
    line-height: 1em;
  }

  .home .icon-buy {
    background: url('http://wx.cdn.pipapay.com/static/images/ico_wal01.png') no-repeat
  }
  .home .icon-pay {
    background: url('http://wx.cdn.pipapay.com/static/images/ico_wal03.png') no-repeat
  }
  .home .icon-mycard {
    background: url('http://wx.cdn.pipapay.com/static/images/ico_wal07.png') no-repeat
  }
  .home .icon-share {
    background: url('http://wx.cdn.pipapay.com/static/images/ico_wal04.png') no-repeat
  }
  .home .icon-buy-online {
    background: url('http://wx.cdn.pipapay.com/static/images/ico_wal08.png') no-repeat
  }
  .home .icon-desc {
    background: url('http://wx.cdn.pipapay.com/static/images/ico_wal10.png') no-repeat
  }
  .home .icon-help{
    background: url('http://wx.cdn.pipapay.com/static/images/ico_wal06.png') no-repeat
  }
  .home .icon-guide{
    background: url('http://wx.cdn.pipapay.com/static/images/ico_wal11.png') no-repeat
  }
</style>
