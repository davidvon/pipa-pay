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

export default {
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
}
