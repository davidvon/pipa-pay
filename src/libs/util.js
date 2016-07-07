export function setCookie(name,value){
  var exp = new Date();
  exp.setTime(exp.getTime() + 1*60*60*1000*24*30*12);
  document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString();
}

export function setCookieEx(name,value,days,domain){
  var exp = new Date();
  exp.setTime(exp.getTime() + days*24*60*60*1000);
  document.cookie = name + "="+ escape (value) + ";path=/;expires=" + exp.toGMTString() + ";domain=" + domain;
}

export function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}

export function getCookie(name) {
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
    return unescape(arr[2]);
  else
    return null;
}

export function addUrlParam(href, name, value) {
  var currentUrl = href.split('#')[0];
  if (/\?/g.test(currentUrl)) {
    if (/name=[-\w]{4,25}/g.test(currentUrl)) {
      currentUrl = currentUrl.replace(/name=[-\w]{4,25}/g, name + "=" + value);
    } else {
      currentUrl += "&" + name + "=" + value;
    }
  } else {
    currentUrl += "?" + name + "=" + value;
  }
  if (href.split('#')[1]) {
    href = currentUrl + '#' + window.location.href.split('#')[1];
  } else {
    href = currentUrl;
  }
  return href
}
