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
  logger.log('main:beforeEach', 'wxOpenId:' + Storage.wxOpenId + ' to.path:' + to.path + ' to.query:' + to.query)

  if (to.path === '/clear') {
    alert('本地数据已清除')
    Storage.clear()
  }

  if (!Storage.wxOpenId) {
    if (!to.query.code && !to.query.state) {
      const wxUrl = encodeURIComponent(Const.WX_HOST)
      const currentUrl = Const.WX_HOST
      var totalUrl = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=' + Const.WX_APPID + '&redirect_uri=' + wxUrl + '&response_type=code&scope=snsapi_base&state=' + currentUrl + '#wechat_redirect'
      logger.log('main:beforeEach', 'redirect url:' + totalUrl)
      location.href = totalUrl
      return
    }

    if (to.query.state) {
      var tmpUrl = to.query.state + '?code=' + to.query.code
      logger.log('main:beforeEach', 'url:' + tmpUrl)
      location.href = tmpUrl
      return
    }

    if (to.query.code) {
      Vue.http.post(Const.API_URL + 'weixin/oauth/decode', {code: to.query.code}).then(res => {
        if (res.data.errcode === '0-000') {
          logger.log('main:beforeEach', 'openid:' + res.data.openid)
          Storage.wxOpenId = res.data.openid
          Storage.wxConfigEnable()
        } else {
          Storage.wxOpenId = ''
        }
      }, e => {
        logger.log('main:beforeEach', 'get openid error')
        alert('出错啦')
      })
    }
  }
  next()
})

router.map(routes)
router.start(App, '#app')

