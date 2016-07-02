export function wxAddCard(self, openid, url_root, callback){
  self.$http.post(url_root + 'weixin/cards', {openid: openid}, function (res) {
    if (res.result == 0) {
      var cards = res.data, wx_cards = [];
      if (cards && cards.length > 0) {
        for (var i = 0; i < cards.length; i++) {
          var card = cards[i];
          wx_cards.push({
            cardId: card.id,
            cardExt: '{"code":"' + card.code + '","timestamp":"' + card.timestamp + '","nonce_str":"' + card.nonceStr + '","signature":"' + card.cardSign + '"}'
          });
        }
      }
      console.log('invoking wx:' + wx_cards)
      wx.addCard({
        cardList: wx_cards, // 需要添加的卡券列表
        success: function (res) {
          var cardList = res.cardList; // 添加的卡券列表信息
          console.log('add success:' + cardList)
          callback && callback(cardList)
        }
      });
    }
  })
}
