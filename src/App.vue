<template>
  <div>
    <router-view transition transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  import Const from './services/const'
  import { onMenuShareTimeline, onMenuShareAppMessage, getOAuthRedirectUrl, oAuthCheck } from './services/wxlib'

  export default {
    methods:{
      oauthCheck(){
        console.log("[App] oauth checking ...")
        var self = this
        self.loading = true
        self.openid = localStorage.getItem('PIPA_OPENID')
        console.log("[App] openid:" + self.openid)
        if (!self.openid) {
          var code = self.$route.query['code']
          oAuthCheck(self, code, Const.API_URL, Const.WX_APPID, location.href, function (response) {
            console.log("[App] openid:" + JSON.stringify(response))
            if (response.errcode == 0) {
              self.openid = response.openid
              localStorage.setItem('PIPA_OPENID', self.openid)
              console.log("[App] cached openid:" + self.openid)
              self.wxRegister()
            }
          })
        }
      },
      wxRegister(){
        console.log('[App] weixin register...')
        if(!this.openid) return
        var self = this
        var url = location.href.split('#')[0]
        console.log('[wxJsApi] url:' + url)
        self.$http.post(Const.API_URL + 'weixin/sign/jsapi', {url: url}).then(function (response) {
          self.loading = false
          if (response && response.data){
            wx.config({
              debug: false,
              appId: response.data['appId'],
              timestamp: response.data['timestamp'],
              nonceStr: response.data['nonceStr'],
              signature: response.data['signature'],
              jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','chooseImage','uploadImage', 'scanQRCode', 'openCard', 'addCard', 'chooseWXPay']
            });
            wx.ready(function(){
              console.log("[App] wx.config ok...");
              onMenuShareTimeline(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
              onMenuShareAppMessage(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
            });
            wx.error(function (res) {
              console.error("[App] wx.error... "+res.errMsg);
            });
          }
        })
      }
    },
    ready(){
      this.oauthCheck()
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
