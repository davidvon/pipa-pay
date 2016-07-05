<template>
  <div>
    <router-view
    transition
    transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  import Const from './services/const'
  import { onMenuShareTimeline, onMenuShareAppMessage } from './services/wxlib'
  import { Icon } from './components'

  export default {
    components: {
      Icon
    },
    ready: function () {
      var _this = this
      var url = location.href.split('#')[0]
      this.$http.post(Const.apiUrl + 'weixin/jsapi_sign', {url: url}).then(function (response) {
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
          console.log("wx.config ok...");
          onMenuShareTimeline(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
          onMenuShareAppMessage(location.origin+location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
        });
        wx.error(function (res) {
          console.error("wx.err... "+res.errMsg);
        });

      })
    }
  }
</script>

<style lang="less">
@import 'demos/style.css';
@import 'styles/index.less';

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}
.demo-icon {
  font-family: 'vux-demo';
  font-size: 20px;
  padding-right: 10px;
  color: #04BE02;
}
</style>
