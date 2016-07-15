function addCard(wx_cards, callback, errback){
  console.log('invoking wx:' + JSON.stringify(wx_cards))
  wx.addCard({
    cardList: wx_cards,
    success: function (res) {
      console.log('add card success:' + res + ', json:'+ JSON.stringify(res.cardList))
      callback && callback(res.cardList)
    },
    cancel: function (res) {
      errback && errback()
    },
    fail:function(res){
      errback && errback()
    }
  });
}

export function wxAddCard(self, cardGlobalId, openid, url_root, callback, errback){
  self.$http.post(url_root + 'weixin/card/add', {card_global_id:cardGlobalId, openid: openid}, function (res) {
    if (res.result == 0) {
      var items = res.data, wx_cards = [];
      wx_cards.push({
        cardId: item.id,
        cardExt: '{"timestamp":"' + item.timestamp + '","signature":"' + item.signature + '"}'
      });
      addCard(wx_cards, callback, errback)
    }
  })
}

export function wxAddCards(self, orderId, openid, url_root, callback, errback){
  self.$http.post(url_root + 'weixin/cards/add', {orderId:orderId, openid: openid}, function (res) {
    if (res.result == 0) {
      var items = res.data, wx_cards = [];
      if (items && items.length > 0) {
        for (var i = 0; i < items.length; i++) {
          var item = items[i];
          wx_cards.push({
            cardId: item.id,
            cardExt: '{"timestamp":"' + item.timestamp + '","signature":"' + item.signature + '"}'
          });
        }
        addCard(wx_cards, callback, errback)
      }
    }
  })
}


export function wxOpenCard(self, wxCardId, code, callback, errback) {
  console.log("[wxOpenCard] cardId:"+wxCardId+" code:"+code)
  wx.openCard({
    cardList: [{
      cardId: wxCardId,
      code: code
    }],
    success: function(res){
      var cardList = res.cardList;
      console.log("[wxOpenCard] card list:" + cardList)
      callback && callback(cardList)
    },
    cancel: function (res) {
      errback && errback()
    },
    fail:function(res){
      errback && errback()
    }
  });

}
