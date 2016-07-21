<template>
  <div class="order-result">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}"
              @on-click-more="showMenus=true">激活会员卡
    </x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div id="result-page" class="flex">
      <div class="content trade_success" v-show="active_status==0">
        <p class="top_icop"><span class="ico_tip ico_success"></span></p>
        <p class="tips_p1">电子卡激活成功</p>
        <p class="card_pbtn">
          <x-button type="primary" @click="clickMemCard">查看电子卡</x-button>
        </p>
      </div><!-- content end -->

      <div class="content trade_fail" v-show="active_status==255">
        <p class="top_icop"><span class="ico_tip ico_fail"></span></p>
        <p class="tips_p1">电子卡激活失败</p>
        <p class="tips_p2">请稍后重新尝试</p>
      </div><!-- content end -->
    </div>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import Const from '../services/const'
  import logger from '../services/log'

  export default {
    components: {
      "XHeader": require('../components/x-header/index.vue'),
      "Actionsheet": require('../components/actionsheet/index.vue'),
      "Loading": require('../components/loading/index.vue'),
      "XButton": require('../components/x-button/index.vue')
    },
    data () {
      return {
        active_status: 1, //1:等待;0:成功;255:失败
        cards: {
          number: 0,
          money: 0,
          list: []
        },
        menus: {
          menu1: '付款',
          menu2: '我的卡包',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        showMenus: false,
        loading: false
      }
    },
    route: {},
    methods: {
      clickMemCard(){
        this.$route.router.go({name: 'memcards'})
      }
    },
    ready(){
      var self = this
      self.loading = true
      var params = this.$route.query
      this.$http.post(Const.API_URL + 'card/active', params).then(function (response) {
        self.loading = false
        logger.log("CardActive", "card active:" + response.data)
        var ret = response.data
        if (ret && ret.result == 0) {
          self.active_status = 0
        } else {
          self.active_status = 255
        }
      })
    }
  }
</script>
