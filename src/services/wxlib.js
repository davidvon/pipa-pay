import logger from '../services/log'
import Const from '../services/const'
import Storage from '../services/storage'

export function onMenuShareAppMessage(link, title, desc, logo, callback, errback) {
  logger.log('onMenuShareAppMessage', 'title:' + title + ', wx:' + wx)
  wx.onMenuShareAppMessage({
    title: title,
    desc: desc,
    link: link,
    imgUrl: logo,
    success: function () {
      logger.log('onMenuShareAppMessage', 'success')
      callback && callback()
    },
    cancel: function () {
      logger.log('onMenuShareAppMessage', 'cancel')
      errback && errback()
    },
    fail: function (res) {
      alert(JSON.stringify(res));
    }
  });
}

export function onMenuShareTimeline(link, title, desc, logo, callback, errback) {
  wx.onMenuShareTimeline({
    title: title, // 分享标题
    link: link, // 分享链接
    desc: desc, // 分享描述
    imgUrl: logo, // 分享图标
    success: function () {
      logger.log('onMenuShareTimeline', 'success')
      callback && callback()
    },
    cancel: function () {
      logger.log('onMenuShareTimeline', 'cancel')
      errback && errback()
    }
  });
}

export function wxRegister(self, mode, callback, errback) {
  const now_mode = Storage.wxConfigMode
  if (now_mode == mode) {
    logger.log("wxRegister", "discarded, wxConfig now mode:" + now_mode + ", input mode:" + mode)
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
        Storage.wxConfigModeSet(mode)
        callback && callback()
      });

      wx.error(function (res) {
        logger.log("wxRegister", "wx config error:" + res.errMsg);
        errback && errback()
      });
    } else {
      errback && errback()
    }
  }, function (err) {
    logger.err('wxRegister', err)
    errback && errback()
  })
}
