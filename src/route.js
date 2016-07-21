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
      require(['./demos/CardBuy.vue'], resolve)
    }
  },
  '/buy/result/:orderId': {
    name: 'buy_result',
    component: function (resolve) {
      require(['./demos/CardBuyResult.vue'], resolve)
    }
  },
  '/memcards': {
    name: 'memcards',
    component: function (resolve) {
      require(['./demos/Cards.vue'], resolve)
    }
  },
  '/card/active': {
    name: 'active',
    component: function (resolve) {
      require(['./demos/CardActive.vue'], resolve)
    }
  },
  '/pay/cards': {
    name: 'paycards',
    component: function (resolve) {
      require(['./demos/PayCards.vue'], resolve)
    }
  },
  '/pay/:cardId/:cardCode': {
    name: 'pay',
    component: function (resolve) {
      require(['./demos/PayCode.vue'], resolve)
    }
  },
  '/pay/records': {
    name: 'pay_records',
    component: function (resolve) {
      require(['./demos/PayRecords.vue'], resolve)
    }
  },
  '/gift': {
    name: 'gift',
    component: function (resolve) {
      require(['./demos/CardGift.vue'], resolve)
    }
  },
  '/gift/share/:cardId/:cardCode': {
    name: 'gift_share',
    component: function (resolve) {
      require(['./demos/CardGiftShare.vue'], resolve)
    }
  },
  '/gift/share/result/:cardId/:cardCode': {
    name: 'gift_share_result',
    component: function (resolve) {
      require(['./demos/CardGiftShareResult.vue'], resolve)
    }
  },
  '/gift/receive/:sign': {
    name: 'gift_receive',
    component: function (resolve) {
      require(['./demos/CardGiftReceive.vue'], resolve)
    }
  },
  '/help': {
    name: 'help',
    component: function (resolve) {
      require(['./demos/CardHelp.vue'], resolve)
    }
  },
  '/guide': {
    name: 'guide',
    component: function (resolve) {
      require(['./demos/CardGuide.vue'], resolve)
    }
  },
  '/notice': {
    name: 'notice',
    component: function (resolve) {
      require(['./demos/CardNotice.vue'], resolve)
    }
  }
}
