import Home from './Home'
import CardBuy from './demos/CardBuy'
import BuyResult from './demos/BuyResult'
import CardGift from './demos/CardGift'
import CardGiftShare from './demos/CardGiftShare'
import CardGiftShareResult from './demos/CardGiftShareResult'
import CardActive from './demos/CardActive'
import CardGiftReceive from './demos/CardGiftReceive'
import PayCards from './demos/PayCards'
import PayCode from './demos/PayCode'
import PayRecords from './demos/PayRecords'
import CardHelp from './demos/CardHelp'
import CardGuide from './demos/CardGuide.vue'
import CardNotice from './demos/CardNotice.vue'
import MemberCards from './demos/MemberCards'
import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueResource)
Vue.use(Router)
Vue.config.devtools = true

const router = new Router({
  history: false            // html5模式 去掉锚点
  // saveScrollPosition: true  // 记住页面的滚动位置 html5模式适用
})

router.map({
  '/': {
    name: 'home',
    component: Home
  },
  '/buy/:cardId': {
    name: 'buy',
    component: CardBuy
  },
  '/buy/result/:merchantId/:orderId': {
    name: 'buy_result',
    component: BuyResult
  },
  '/member-cards': {
    name: 'memcards',
    component: MemberCards
  },
  '/card/active': {
    name: 'active',
    component: CardActive
  },
  '/pay/cards': {
    name: 'paycards',
    component: PayCards
  },
  '/pay/:cardId/:cardCode': {
    name: 'pay',
    component: PayCode
  },
  '/pay/records': {
    name: 'pay_records',
    component: PayRecords
  },
  '/gift': {
    name: 'gift',
    component: CardGift
  },
  '/gift/share/:cardId/:cardCode': {
    name: 'gift_share',
    component: CardGiftShare
  },
  '/gift/share/result/:cardId/:cardCode': {
    name: 'gift_share_result',
    component: CardGiftShareResult
  },
  '/gift/receive/:sign': {
    name: 'gift_receive',
    component: CardGiftReceive
  },
  '/help': {
    name: 'help',
    component: CardHelp
  },
  '/guide': {
    name: 'guide',
    component: CardGuide
  },
  '/notice': {
    name: 'notice',
    component: CardNotice
  }
})

router.on('/component/center', {
  component: require('./demos/Center')
})

// save position for demo page
let demoScrollTop = 0
function saveDemoScrollTop () {
  demoScrollTop = window.scrollY
}

router.beforeEach(function (transition) {
  if (transition.to.fullPath !== '/demo') {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
  }
  if (/\/http/.test(transition.to.path)) {
    let url = transition.to.path.split('http')[1]
    window.location.href = `http${url}`
  } else {
    if (/\/demo\/component\/\w+/.test(transition.to.path)) {
      router.go({
        replace: true,
        path: transition.to.path.replace('/demo', ''),
        append: false
      })
    } else {
      transition.next()
    }
  }
})

router.afterEach(function (transition) {
  if (transition.to.path !== '/demo') {
    window.scrollTo(0, 0)
  } else {
    window.removeEventListener('scroll', saveDemoScrollTop, false)
    // if from component page
    if (demoScrollTop && /component/.test(transition.from.path)) {
      setTimeout(function () {
        window.scrollTo(0, demoScrollTop)
      }, 100)
    }
    setTimeout(function () {
      window.addEventListener('scroll', saveDemoScrollTop, false)
    }, 1000)
  }
})
router.start(App, '#app')

