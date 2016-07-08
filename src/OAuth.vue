<template>
  <div>
    <loading :show.sync="loading" :text=""></loading>
  </div>
</template>


<script>
  import { Loading, Flexbox, FlexboxItem } from './components/'
  import Const from './services/const'
  import { onMenuShareTimeline, onMenuShareAppMessage, getOAuthRedirectUrl, oAuthCheck } from './services/wxlib'
  import { getCookie, setCookie, addUrlParam } from './libs/util'

  export default {
    components: { Loading, Flexbox, FlexboxItem },
    data () {
      return {
        loading: false,
        openid: '',
        code:''
      }
    },
    methods:{
      wxRegister(){
        console.log('[OAuth]:readying')
        if(!this.openid) return
        var self = this
        var url = location.href.split('#')[0]
        console.log('[OAuth] url:' + url)
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
              console.log("[OAuth] wx.config ok...");
              onMenuShareTimeline(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
              onMenuShareAppMessage(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
            });
            wx.error(function (res) {
              console.error("[OAuth] wx.err... "+res.errMsg);
            });
          }
        })
      }
    },
    ready(){
      var self = this
      self.openid = getCookie('PIPA_OPENID')
      if (self.openid){
        console.log("[OAuth] openid:" + self.openid)
        return self.$route.router.go('/#home')
      }
      self.code = self.$route.query['code']
      if(!self.code){
        var oauth_url = getOAuthRedirectUrl(Const.WX_APPID, location.href)
        console.log('[oAuthCheck] oauth url:' + oauth_url)
        window.location.href = oauth_url
        return
      }
      this.$http.post(Const.API_URL + 'weixin/oauth/decode',{code:self.code}).then(function (response) {
        console.log("[OAuth] openid:" + JSON.stringify(response))
        if (response.errcode == 0) {
          self.openid = response.openid
          console.log("[OAuth] decode openid:" + self.openid)
          setCookie('PIPA_OPENID', self.openid)
          self.$route.router.go('/#home')
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
