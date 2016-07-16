import Storage from '../services/storage'
import Const from '../services/const'

var log_url = Const.API_HOST + '/log.gif?'
var version = '0.1'

function trapError(name, err) {
  var oid = Storage.wxOpenId || ''
  var img = new Image(0, 0);
  var _url = [];
  _url.push('version=' + version);
  _url.push('name' + '=' + encodeURIComponent(name));
  if (err.message)
    _url.push('message' + '=' + encodeURIComponent(err.message));
  if (err.location)
    _url.push('location' + '=' + encodeURIComponent(err.location));
  if (err.line)
    _url.push('line' + '=' + encodeURIComponent(err.line));
  if (err.func)
    _url.push('func' + '=' + encodeURIComponent(err.func));
  var url = _url.join('&');
  img.src = log_url + url;
  console.log('' + name + ', ' + err.message);
}

function trapLog(name, msg) {
  var oid = Storage.wxOpenId || ''
  var img = new Image(0, 0);
  var _url = [];
  _url.push('version=' + version);
  _url.push('openid' + '=' + oid);
  _url.push('name' + '=' + encodeURIComponent(name));
  _url.push('message' + '=' + encodeURIComponent(msg));
  var url = _url.join('&');
  img.src = log_url + url;
  console.log('[' + name + '] ' + msg);
}

window.onerror = trapError;

export default {
  err: trapError,
  log: trapLog
}




