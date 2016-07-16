import logger from '../services/log'

function addCard(wx_cards, callback, errback) {
  logger.log('addCard', 'invoking wx:' + JSON.stringify(wx_cards))
  wx.addCard({
    cardList: wx_cards,
    success: function (res) {
      logger.log('addCard', 'add card success:' + res + ', json:' + JSON.stringify(res.cardList))
      callback && callback(res.cardList)
    },
    cancel: function (res) {
      errback && errback()
    },
    fail: function (res) {
      errback && errback()
    }
  });
}

export function wxAddCard(self, cardGlobalId, openid, url_root, callback, errback) {
  self.$http.post(url_root + 'weixin/card/add', {card_global_id: cardGlobalId, openid: openid}).then(function (response) {
    var res = response.data
    if (res.result == 0) {
      var item = res.data, wx_cards = [];
      wx_cards.push({
        cardId: item.id,
        cardExt: '{"timestamp":"' + item.timestamp + '","signature":"' + item.signature + '"}'
      });
      addCard(wx_cards, callback, errback)
    } else {
      logger.log('wxAddCard', 'post add-card:' + cardGlobalId + ' failed')
      errback && errback()
    }
  }, function () {
    logger.log('wxAddCard', 'post add-card:' + cardGlobalId + ' exception')
    errback && errback()
  })
}

export function wxAddCards(self, orderId, openid, url_root, callback, errback) {
  self.$http.post(url_root + 'weixin/cards/add', {orderId: orderId, openid: openid}).then(function (response) {
    var res = response.data
    if (res.result == 0) {
      var items = res.data, wx_cards = [];
      for (var i = 0; i < items && items.length; i++) {
        var item = items[i];
        wx_cards.push({
          cardId: item.id,
          cardExt: '{"timestamp":"' + item.timestamp + '","signature":"' + item.signature + '"}'
        });
      }
      addCard(wx_cards, callback, errback)
    } else {
      logger.log('wxAddCards', 'post add-cards order:' + orderId + ' failed')
      errback && errback()
    }
  }, function () {
    logger.log('wxAddCards', 'post add-cards order:' + orderId + ' exception')
    errback && errback()
  })
}


export function wxOpenCard(self, wxCardId, code, callback, errback) {
  logger.log('wxOpenCard', 'cardId:' + wxCardId + ' code:' + code)
  wx.openCard({
    cardList: [{
      cardId: wxCardId,
      code: code
    }],
    success: function (res) {
      var cardList = res.cardList;
      logger.log('wxOpenCard', 'card list:' + cardList)
      callback && callback(cardList)
    },
    cancel: function (res) {
      errback && errback()
    },
    fail: function (res) {
      errback && errback()
    }
  });

}
