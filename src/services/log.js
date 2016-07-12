import { getCookie } from '../libs/util'
var oid = getCookie('PIPA_OPENID')||''
var loghost = 'http://live.pipapay.com/log.gif?'
export default {
  err: function(name, err){
    var img = new Image(0,0);
    var _url =[];
    _url.push('name'+'='+encodeURIComponent(name));
    _url.push('message'+'='+encodeURIComponent(err.message));
    _url.push('location'+'='+encodeURIComponent(err.location));
    if(err.line)
      _url.push('line'+'='+encodeURIComponent(err.line));
    if(err.func)
      _url.push('func'+'='+encodeURIComponent(err.func));

    var url = _url.join('&');
    img.src = loghost+url;
    console.log(url);
  },
  log: function(name, msg){
    var img = new Image(0,0);
    var _url =[];
    _url.push('openid'+'='+ oid);
    _url.push('name'+'='+encodeURIComponent(name));
    _url.push('message'+'='+encodeURIComponent(msg));
    var url = _url.join('&');
    img.src = loghost+url;
    console.log(url);
  }
}




