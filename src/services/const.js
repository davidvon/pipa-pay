var wx_host, api_host, appId, cardId

console.log('location.origin:' + location.origin)

if (location.origin === 'http://127.0.0.1:8080') {
  appId = 'wxb3ec764893b99722'
  wx_host = 'http://127.0.0.1:8080'
  api_host = 'http://127.0.0.1:5000'
  cardId = 'pYtFst9hZmAy3VmyajWSQaB2sQgw'
} else {
  appId = 'wx6965cc85ec3e801c'
  wx_host = 'http://wx.pipapay.com'
  api_host = 'http://live.pipapay.com'
  cardId = 'pYtFst9hZmAy3VmyajWSQaB2sQgw'
}


export default {
  WX_HOST: wx_host,
  API_HOST: api_host,
  API_URL: api_host + '/api/',
  WX_APPID: appId,
  cardId: cardId,
  shareTitle: '噼啪支付',
  shareLogo: 'http://wx.cdn.pipapay.com/static/images/pipalogo-blue2.png',
  shareDesc: '噼啪GIFT卡'
}
