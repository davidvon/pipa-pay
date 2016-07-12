<template>
  <div>
    <router-view transition transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  import Const from './services/const'
  import { onMenuShareTimeline, onMenuShareAppMessage, getOAuthRedirectUrl, oAuthCheck } from './services/wxlib'
  import { getCookie, setCookie, addUrlParam } from './libs/util'
  import logger from './services/log'

  export default {
    methods:{
      oAuthCheck(){
        logger.log("App", "oauth checking ...")
        var self = this
        self.loading = true
        self.openid = getCookie('PIPA_OPENID')
        logger.log("App", "openid:" + self.openid)
        if (!self.openid) {
          var code = self.$route.query['code']
          oAuthCheck(self, code, Const.API_URL, Const.WX_APPID, location.href, function (response) {
            logger.log("[App]", "openid:" + JSON.stringify(response))
            if (response.errcode == 0) {
              self.openid = response.openid
              setCookie('PIPA_OPENID', self.openid)
              logger.log("[App]", "cached openid:" + self.openid)
            }
          })
        }
      },
      wxRegister(){
        logger.log("[App]", "weixin register...")
        var self = this
        var url = location.href.split('#')[0]
        logger.log('[wxJsApi]", "url:' + url)
        self.$http.post(Const.API_URL + 'weixin/sign/jsapi', {url: url}).then(function (response) {
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
              logger.log("[App]", "wx.config ok...");
              onMenuShareTimeline(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
              onMenuShareAppMessage(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
              self.oAuthCheck()
            });
            wx.error(function (res) {
              self.oAuthCheck()
              logger.log("App", "wx config error:"+res.errMsg);
            });
          }
        })
      }
    },
    ready(){
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
