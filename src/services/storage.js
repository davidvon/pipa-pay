import {getCookie, setCookie} from '../libs/util'

module.exports = {
  wxConfig: false,

  wxConfigEnable:function(){
    this.wxConfig = true
  },
  set wxOpenId(wxOpenId) {
    setCookie('PIPA_OPENID', wxOpenId);
  },
  get wxOpenId() {
    return getCookie('PIPA_OPENID');
  }
}
