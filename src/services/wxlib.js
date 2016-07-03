export function onMenuShareAppMessage(link, title, desc, logo, callback=null, errback=null){
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

export function onMenuShareTimeline(link, title, desc, logo, callback=null, errback=null){
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
