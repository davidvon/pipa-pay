export function onMenuShareAppMessage(link, title, desc, logo, callback, errback){
  wx && wx.onMenuShareAppMessage({
    title: title, // 分享标题
    desc: desc, // 分享描述
    link: link, // 分享链接
    imgUrl: logo, // 分享图标
    success: function () {
      callback && callback()
    },
    cancel: function () {
      errback && errback()
    }
  });
}

export function onMenuShareTimeline(link, title, desc, logo, callback, errback){
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

export function getOAuthRedirectUrl(appid, url){
  url = encodeURIComponent(url)
  var ret = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid='+ appid +'&redirect_uri='+ url+
  '&response_type=code&scope=snsapi_base&state=1#wechat_redirect'
  console.log('[getOAuthRedirectUrl] url:' + ret)
  return ret
}

export function oAuthCheck(self, code, apibase, appid, redirectUrl, callback){
  if(code){
    self.$http.post(apibase + 'weixin/oauth/decode',{code:code}).then(function (response) {
      console.log('[oAuthCheck] oauth callback...')
      callback && callback(response.data)
    })
  } else {
    var oauth_url = getOAuthRedirectUrl(appid, redirectUrl)
    console.log('[oAuthCheck] oauth url:' + oauth_url)
    return location.href = oauth_url
  }
}
