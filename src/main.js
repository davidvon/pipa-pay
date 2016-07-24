var Vue = require('vue')
var Router = require('vue-router')
var VueResource = require('vue-resource')

var App = require('./App')
import Storage from './services/storage'
import Const from './services/const'
import logger from './services/log'
import { default as routes } from './route'
import { clearCookie } from './libs/util'

// filters
Vue.filter('discount', require('./filters/amount_discount').discount)

require.ensure([], function (require) {
  const FastClick = require('fastclick')
  FastClick.attach(document.body)
}, 'fastclick')

Vue.use(VueResource)
Vue.use(Router)
Vue.config.devtools = true
Vue.http.options.emulateJSON = true  // 解决post-options

const router = new Router({
  hashbang: false,
  transitionOnLoad: true,
  history: true
})

router.beforeEach(({to, next}) => {
  logger.log('beforeEach', 'wxOpenId:' + Storage.wxOpenId + ' to.path:' + to.path)

  if (to.path === '/clear') {
    Storage.clear()
    clearCookie('PIPA_OPENID', '')
    alert('本地数据已清除')
    return
  }

  if (Storage.wxOpenId) {
    next()
    return
  }

  if (!to.query.code && !to.query.state) {
    const homeUrl = encodeURIComponent(Const.WX_HOST)
    const currentPath = to.path.split('?')[0]
    var oauthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + Const.WX_APPID + '&redirect_uri=' + homeUrl + '&response_type=code&scope=snsapi_userinfo&state=' + currentPath + '#wechat_redirect'
    logger.log('beforeEach', 'redirect url:' + oauthUrl)
    location.href = oauthUrl
    return
  }

  if (to.query.state) {
    logger.log('main:beforeEach', 'code:' + to.query.code)
    Vue.http.post(Const.API_URL + 'weixin/oauth/decode', {code: to.query.code}).then(response => {
      var res = response.data
      if (res.result === 0) {
        Storage.wxOpenId = res.openid
        // var currentUrl = Const.WX_HOST + to.query.state
        // logger.log('beforeEach', 'openid:' + Storage.wxOpenId + ', url:' + currentUrl)
        // location.href = currentUrl
        to.router.replace({path: to.query.state, params: {}, query: {}})
      } else {
        Storage.wxOpenId = ''
      }
    }, e => {
      logger.log('beforeEach', 'get openid error')
      alert('校验错误')
    })
  }
})

router.map(routes)
router.start(App, '#app')

