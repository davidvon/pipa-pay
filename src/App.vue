<template>
  <div>
    <router-view transition transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  import Const from './services/const'
  import { onMenuShareTimeline, onMenuShareAppMessage} from './services/wxlib'
  import Storage from './services/storage'
  import logger from './services/log'

  export default {
    methods:{
      wxRegister(){
        var self = this
        var url = location.href.split('#')[0]
        logger.log("App", "weixin register, url:" + url)
        self.$http.post(Const.API_URL + 'weixin/sign/jsapi', {url: url}).then(function (response) {
          logger.log("App", "jsapi response ok")
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
              logger.log("App", "wx.config ok...");
              onMenuShareTimeline(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
              onMenuShareAppMessage(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
            });
            wx.error(function (res) {
              logger.log("App", "wx config error:"+res.errMsg);
            });
          }
        })
      }
    },
    ready: function() {
      logger.log("App", "to register...");
      this.wxRegister()
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
