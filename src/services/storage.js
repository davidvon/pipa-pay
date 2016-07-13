import {getCookie, setCookie} from '../libs/util'

module.exports = {
  wxConfig: false,

  wxConfigEnable:function(){
    this.wxConfig = true
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
