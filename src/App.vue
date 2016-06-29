<template>
  <div>
    <router-view
    transition
    transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  import Const from './services/const'
  import { wechat_share } from './services/wechat'

  export default {
    components: {
    },
    ready: function () {
      var _this = this
      var url = location.href.split('#')[0]
      this.$http.get(Const.apiUrl + '/weixin/sign?url='+ url).then(function (response) {
      if (response && response.data)
        wx.config({
          debug: true,
          appId: response.data['appId'],
          timestamp: response.data['timestamp'],
          nonceStr: response.data['nonceStr'],
          signature: response.data['signature'],
          jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','chooseImage','uploadImage', 'scanQRCode', 'openCard', 'addCard', 'chooseWXPay']
        });

        wx.ready(function(){
          wechat_share(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
        });
      })
    }
  }
</script>

<style lang="less">
@import 'styles/index.less';

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}
</style>
