import {getCookie, setCookie} from '../libs/util'

module.exports = {
  wxConfigStatus: false,

  wxConfigEnable:function(){
    this.wxConfigStatus = true
  },
  set wxOpenId(wxOpenId) {
    localStorage.setItem('PIPA_OPENID', wxOpenId);
  },
  get wxOpenId() {
    return localStorage.getItem('PIPA_OPENID');
  },
  clear() {
    localStorage.clear()
  }
}
