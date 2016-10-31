<template>
  <div id="result-page">
    <div class="content trade_success" v-show="active_status==0">
      <p class="top_icop"><span class="ico_tip ico_success"></span></p>
      <p class="tips_p1">电子卡激活成功</p>
      <p class="card_pbtn">
        <x-button type="primary" @click="goMemCard">查看电子卡</x-button>
      </p>
    </div><!-- content end -->

    <div class="content trade_fail" v-show="active_status==255">
      <p class="top_icop"><span class="ico_tip ico_fail"></span></p>
      <p class="tips_p1">电子卡激活失败</p>
      <p class="tips_p2">请稍后重新尝试</p>
    </div><!-- content end -->
  </div>
</template>

<script>
  import Const from '../services/const'
  import logger from '../services/log'

  export default {
    attached () {
      this.$root.navTitle = '电子卡激活'
      this.$root.showHeader = true
      document.title = '电子卡激活'
    },

    components: {
      "XButton": require('../components/x-button/index.vue')
    },
    data () {
      return {
        active_status: 1, //1:等待;0:成功;255:失败
        cards: {
          number: 0,
          money: 0,
          list: []
        }
      }
    },
    methods: {
      goMemCard(){
        this.$route.router.go({name: 'memcards'})
      }
    },
    ready(){
      var self = this
      self.$dispatch('showLoading')
      var params = self.$route.query
      self.$http.post(Const.API_URL + 'card/active', params).then(function (response) {
        self.$dispatch('hideLoading')
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
