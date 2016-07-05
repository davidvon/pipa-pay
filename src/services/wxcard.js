export function wxAddCard(self, cardGlobalId, openid, url_root, callback){
  self.$http.post(url_root + 'weixin/cards/add', {card_global_id:cardGlobalId, openid: openid}, function (res) {
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
      }
      console.log('invoking wx:' + JSON.stringify(wx_cards))
      wx.addCard({
        cardList: wx_cards,            // 需要添加的卡券列表
        success: function (res) {
          alert('已添加卡券：' + JSON.stringify(res.cardList));
          console.log('add success:' + JSON.stringify(res.cardList))
          callback && callback(res.cardList)
        }
      });
    }
  })
}

export function wxOpenCard(self, wxCardId, code, callback) {
  alert("cardId:"+wxCardId+" code:"+code)
  wx.openCard({
    cardList: [{
      cardId: wxCardId,
      code: code
    }],
    success: function(res){
      var cardList = res.cardList;
      callback && callback(cardList)
    }
  });

}
