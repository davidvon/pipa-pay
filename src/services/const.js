var wx_host, api_host, appId, cardId

if (location.origin === 'http://wx.pipapay.com') {
  appId = 'wxb3ec764893b99722'  //'wx6965cc85ec3e801c'
  wx_host = 'http://wx.pipapay.com'
  api_host = 'http://live.pipapay.com'
  cardId = 'pYtFst9hZmAy3VmyajWSQaB2sQgw'
} else {
  appId = 'wxb3ec764893b99722'
  wx_host = 'http://127.0.0.1:8080'
  api_host = 'http://127.0.0.1:5000'
  cardId = 'pYtFst9hZmAy3VmyajWSQaB2sQgw'
}

export default {
    WX_HOST: wx_host,
    API_HOST: api_host,
    API_URL:  api_host + '/api/',
    WX_APPID: appId,
    cardId: cardId,
    shareTitle: '噼啪支付',
    shareLogo: 'http://mmbiz.qpic.cn/mmbiz/MjbyiaBuoxn7nZMD6NBJBKYdUrQrlInPARVSicx5G3fT8OpPhzwiczFAfDEeFavGVzbickZRTkOy7lQYV38OKKJmNA/0',
    shareDesc: '沃尔玛GIFT卡'
}
