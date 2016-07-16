import Vue from 'vue'
import Router from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Storage from './services/storage'
import Const from './services/const'
import logger from './services/log'
import { default as routes } from './route'

const FastClick = require('fastclick')
FastClick.attach(document.body)

Vue.use(VueResource)
Vue.use(Router)
Vue.config.devtools = true

const router = new Router({
  history: false
})

router.beforeEach(({to, next}) => {
  logger.log('beforeEach', 'wxOpenId:' + Storage.wxOpenId + ' to.path:' + to.path)

  if (to.path === '/clear') {
    alert('本地数据已清除')
    Storage.clear()
  }

  if (Storage.wxOpenId) {
    next()
    return
  }

  if (!to.query.code && !to.query.state) {
    const homeUrl = encodeURIComponent(Const.WX_HOST)
    const currentPath = to.path.split('?')[0]
    var oauthUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + Const.WX_APPID + '&redirect_uri=' + homeUrl + '&response_type=code&scope=snsapi_base&state=' + currentPath + '#wechat_redirect'
    logger.log('beforeEach', 'redirect url:' + oauthUrl)
    location.href = oauthUrl
    return
  }

  if (to.query.state) {
    logger.log('main:beforeEach', 'code:' + to.query.code)
    Vue.http.post(Const.API_URL + 'weixin/oauth/decode', {code: to.query.code}).then(res => {
      if (res.data.errcode === '0-000') {
        Storage.wxOpenId = res.data.openid
        var currentUrl = Const.WX_HOST + '/#!' + to.query.state
        logger.log('beforeEach', 'openid:' + Storage.wxOpenId + ', url:' + currentUrl)
        location.href = currentUrl
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

