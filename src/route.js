export default {
  '*': {
    name: 'home',
    component: function (resolve) {
      require(['./Home.vue'], resolve)
    }
  },
  '/': {
    name: 'home',
    component: function (resolve) {
      require(['./Home.vue'], resolve)
    }
  },
  '/buy/:cardId': {
    name: 'buy',
    component: function (resolve) {
      require(['./pages/CardBuy.vue'], resolve)
    }
  },
  '/buy/result/:orderId': {
    name: 'buy_result',
    component: function (resolve) {
      require(['./pages/CardBuyResult.vue'], resolve)
    }
  },
  '/memcards': {
    name: 'memcards',
    component: function (resolve) {
      require(['./pages/Cards.vue'], resolve)
    }
  },
  '/card/active': {
    name: 'active',
    component: function (resolve) {
      require(['./pages/CardActive.vue'], resolve)
    }
  },
  '/pay/cards': {
    name: 'paycards',
    component: function (resolve) {
      require(['./pages/PayCards.vue'], resolve)
    }
  },
  '/pay/:cardId/:cardCode': {
    name: 'pay',
    component: function (resolve) {
      require(['./pages/PayCode.vue'], resolve)
    }
  },
  '/pay/records': {
    name: 'pay_records',
    component: function (resolve) {
      require(['./pages/PayRecords.vue'], resolve)
    }
  },
  '/gift': {
    name: 'gift',
    component: function (resolve) {
      require(['./pages/CardGift.vue'], resolve)
    }
  },
  '/gift/share/:cardId/:cardCode': {
    name: 'gift_share',
    component: function (resolve) {
      require(['./pages/CardGiftShare.vue'], resolve)
    }
  },
  '/gift/share/result/:cardId/:cardCode': {
    name: 'gift_share_result',
    component: function (resolve) {
      require(['./pages/CardGiftShareResult.vue'], resolve)
    }
  },
  '/gift/receive/:sign': {
    name: 'gift_receive',
    component: function (resolve) {
      require(['./pages/CardGiftReceive.vue'], resolve)
    }
  },
  '/help': {
    name: 'help',
    component: function (resolve) {
      require(['./pages/CardHelp.vue'], resolve)
    }
  },
  '/guide': {
    name: 'guide',
    component: function (resolve) {
      require(['./pages/CardGuide.vue'], resolve)
    }
  },
  '/notice': {
    name: 'notice',
    component: function (resolve) {
      require(['./pages/CardNotice.vue'], resolve)
    }
  }
}
