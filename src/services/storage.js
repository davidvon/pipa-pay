import {getCookie, setCookie} from '../libs/util'

module.exports = {
  wxConfigMode: '',

  wxConfigModeSet: function (mode) {
    this.wxConfigMode = mode
  },
  set wxOpenId(wxOpenId) {
    setCookie('PIPA_OPENID', wxOpenId, 360*3)
    localStorage.setItem('PIPA_OPENID', wxOpenId);
  },
  get wxOpenId() {
    var openid = localStorage.getItem('PIPA_OPENID') || getCookie('PIPA_OPENID')
    if(openid && !localStorage.getItem('PIPA_OPENID')){
      localStorage.setItem('PIPA_OPENID', openid)
    }
    return openid
  },
  clear() {
    localStorage.clear()
  }
}
