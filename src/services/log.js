import Storage from '../services/storage'
import Const from '../services/const'

var log_url = Const.API_HOST + '/log.gif?'
var version = '0.1'

export default {
  err: function(name, err){
    var oid = Storage.wxOpenId || ''
    var img = new Image(0,0);
    var _url =[];
    _url.push('version='+ version);
    _url.push('name'+'='+encodeURIComponent(name));
    _url.push('message'+'='+encodeURIComponent(err.message));
    _url.push('location'+'='+encodeURIComponent(err.location));
    if(err.line)
      _url.push('line'+'='+encodeURIComponent(err.line));
    if(err.func)
      _url.push('func'+'='+encodeURIComponent(err.func));
    var url = _url.join('&');
    img.src = log_url+url;
    console.log(url);
  },

  log: function(name, msg){
    var oid = Storage.wxOpenId || ''
    var img = new Image(0,0);
    var _url =[];
    _url.push('version='+ version);
    _url.push('openid'+'='+ oid);
    _url.push('name'+'='+encodeURIComponent(name));
    _url.push('message'+'='+encodeURIComponent(msg));
    var url = _url.join('&');
    img.src = log_url+url;
    console.log(url);
  }
}




