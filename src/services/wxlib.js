import logger from '../services/log'
import Const from '../services/const'
import Storage from '../services/storage'

export function onMenuShareAppMessage(link, title, desc, logo, callback, errback) {
  logger.log('onMenuShareAppMessage', 'title:' + title)
  wx && wx.onMenuShareAppMessage({
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: link, // 分享链接
    imgUrl: logo, // 分享图标
    success: function () {
      logger.log('onMenuShareAppMessage', 'success')
      callback && callback()
    },
    cancel: function () {
      errback && errback()
    }
  });
}

export function onMenuShareTimeline(link, title, desc, logo, callback, errback) {
  wx && wx.onMenuShareTimeline({
    title: title, // 分享标题
    link: link, // 分享链接
    desc: desc, // 分享描述
    imgUrl: logo, // 分享图标
    success: function () {
      callback && callback()
    },
    cancel: function () {
      errback && errback()
    }
  });
}

export function wxRegister(self, callback, errback) {
  const openid = Storage.wxOpenId
  const status = Storage.wxConfigStatus
  if (!openid || status) {
    logger.log("wxRegister", "discarded, openid:" + openid + ', wxConfig status:' + status)
    callback && callback()
    return
  }

  var url = location.href.split('#')[0]
  logger.log("wxRegister", "register url:" + url)

  self.$http.post(Const.API_URL + 'weixin/sign/jsapi', {url: url}).then(function (response) {
    logger.log("wxRegister", "jsapi response ok")
    self.loading = false

    if (response && response.data) {
      wx.config({
        debug: false,
        appId: response.data['appId'],
        timestamp: response.data['timestamp'],
        nonceStr: response.data['nonceStr'],
        signature: response.data['signature'],
        jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'scanQRCode', 'openCard', 'addCard', 'chooseWXPay']
      });

      wx.ready(function () {
        logger.log("wxRegister", "wx.config ok...");
        Storage.wxConfigEnable()
        onMenuShareTimeline(location.origin + location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
        onMenuShareAppMessage(location.origin + location.pathname, Const.shareTitle, Const.shareDesc, Const.shareLogo)
        callback && callback()
      });

      wx.error(function (res) {
        logger.log("wxRegister", "wx config error:" + res.errMsg);
        errback && errback()
      });
    } else{
      errback && errback()
    }
  }, function (err) {
    logger.err('wxRegister', err)
    errback && errback()
  })
}
