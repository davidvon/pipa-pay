<template>
  <div>
    <router-view transition transition-mode="out-in"></router-view>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>

<script>
  import Const from './services/const'
  import { Loading } from './components'
  import {onMenuShareTimeline, onMenuShareAppMessage } from './services/wxlib'

  export default {
    components: { Loading },
    data () {
      return {
        loading: false
      }
    },
    ready: function () {
      var self = this
      self.loading = true
      var url = location.href.split('#')[0]
      this.$http.post(Const.apiUrl + 'weixin/sign/jsapi', {url: url}).then(function (response) {
        self.loading = false
        if (response && response.data){
          wx.config({
            debug: true,
            appId: response.data['appId'],
            timestamp: response.data['timestamp'],
            nonceStr: response.data['nonceStr'],
            signature: response.data['signature'],
            jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','chooseImage','uploadImage', 'scanQRCode', 'openCard', 'addCard', 'chooseWXPay']
          });
          wx.ready(function(){
            console.log("wx.config ok...");
            onMenuShareTimeline(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
            onMenuShareAppMessage(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
          });
          wx.error(function (res) {
            console.error("wx.err... "+res.errMsg);
          });
        }
      })
    }
  }
</script>

<style lang="less">
@import 'demos/style.css';
body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}
</style>
