<template>
  <div class="home">
    <div class="vue-home center">
      <h1 class="vux-title" style="padding:10px 0 0px;">
        <img style="width:80px;" src="./assets/images/pipalogo-white2.png">
      </h1>
      <p class="vux-notice" style="padding:0 0 10px;color:#fff">噼啪礼品卡</p>
    </div>
    <div class="container" data-js="">
      <div id="walmart_0" class="flex">
        <div class="content min_height">
          <div class="wal_ibox border b_btm">
            <div class="navs border b_rgt btn-buy" @click="go(buy_url)"><p class="nav_p ico_nav1">购卡</p></div>
            <div class="navs border b_rgt btn-consume" @click="goByName('paycards')"><p class="nav_p ico_nav3">支付</p></div>
            <div class="navs btn-give" @click="goByName('gift')"><p class="nav_p ico_nav8">赠送卡</p></div>
          </div>
          <div class="wal_ibox border b_btm">
            <div class="navs border b_rgt"><p class="nav_p ico_nav4">在线购物</p></div>
            <div class="navs border b_rgt btn-card" @click="goByName('memcards')"><p class="nav_p ico_nav7">我的卡包</p></div>
            <div class="navs btn-help" @click="goByName('guide')"><p class="nav_p ico_nav6">购卡指引</p></div>
          </div>
          <div class="wal_ibox border b_btm">
            <div class="navs border b_rgt btn-gift" @click="goByName('help')"><p class="nav_p ico_nav9">帮助中心</p></div>
            <div class="navs border b_rgt btn-notice" @click="goByName('notice')"><p class="nav_p ico_nav10">电子卡章程</p></div>
            <div class="navs"></div>
          </div>
        </div>
      </div>
    </div>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import {wxRegister} from './services/wxlib'
  import Const from './services/const'

  export default {
    components: {
      "Loading": require('./components/loading/index.vue')
    },
    data () {
      return {
        loading: false,
        buy_url: '/buy/'+Const.cardId
      }
    },
    ready: function() {
      var self = this
      this.loading = true
      wxRegister(this, function(){
        self.loading = false
      }, function(){
        self.loading = false
      })
    },
    methods:{
      go(url){
        this.$route.router.go(url)
      },
      goByName(name){
        this.$route.router.go({'name': name})
      }
    }
  }
</script>

<style scoped>
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
    background-color: #09bb07;
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
