function _wechatPay(data, success, error) {
  WeixinJSBridge.invoke('getBrandWCPayRequest', {
    "appId": data.appId,       //公众号名称，由商户传入
    "timeStamp": data.timeStamp, //时间戳
    "nonceStr": data.nonceStr, //随机串
    "package": data.package,   //扩展包
    "signType": data.signType,
    "paySign": data.paySign    //self.getSign()//微信签名
  }, function (res) {
    if (res.err_msg == "get_brand_wcpay_request:ok") {
      success.call(self, msg);
    } else {
      var msg = (res.err_msg == "get_brand_wcpay_request:cancel") ? "交易被取消" : "微信支付失败，请稍后再试！";
      error.call(self, msg);
    }
  });
}

/*
 $('.order-checkout').on('touchend', function(e){
 showLoading();
 wechatPay(orderid, paytype, function(succ_msg){
 tip_show('订单支付成功', function(){
 location.href="/mobile/personal";
 });
 }, function(err_msg){
 tip_show('支付异常:'+err_msg, function(){
 hideLoading();
 });
 })
 })
 */
export function wechatPay(http, orderid, pay, success, error) {
  if (!orderid) {
    error.call(self, "支付订单参数异常");
    return;
  }
  http.post('/api/order/payable?orderid=' + orderid).then(function (data) {
    if (data.result == '0') return pay(data);
    else if (data.result == '1') return success.call(self, "订单已完成现金支付，请等待商家确认");
    else if (data.result == '255') return error.call(self, "订单已完成支付");
    else return error.call(self, "支付异常，请稍后再试");
  }, function () {
    error.call(self, "系统异常，请稍后再试");
  })
}
