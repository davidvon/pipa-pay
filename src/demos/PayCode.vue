<template>
  <div class="pay">
    <div class="background">
    <a class="detail" href="/#buy">交易明细</a>
    <br>
      <div class="pay-card">
        <div>
          <div class="title">{{title}}</div>
          <div class="sub-title">余额：￥{{money}}</div>
        </div>
        <div class="line-part">
          <div class="line left"></div>
          <div class="line right"></div>
        </div>
        <div class="code-img">
           <barcode :width=1.4 :display-value=true :code.sync="serialCode"></barcode>
        </div>
        <div class="code-img">
           <qrcode :size="64" :value.sync="serialCode"></qrcode>
        </div>
      </div>
      <br>
    </div>
  </div>
</template>

<script>
  import { Barcode, Qrcode} from '../components'
  export default {
  components: {
    Barcode,
    Qrcode
  },
  data () {
    return {
       title:'沃尔玛(中国)',
       money: 5,
       serialCode: '2336000003845248151'
    }
  }
}
</script>

<style lang="less">
  .pay .background{
    background-color: #275F98!important;
    font-family: "Microsoft YaHei","Helvetica Neue",Helvetica,STHeiTi,sans-serif, tahoma, arial;
    text-align: center;
  }

  .pay .pay-card {
    width:95%;
    margin:20px auto;
    height: 570px;
    background-color:#FFF;
    -webkit-border-radius: 10px;
    -moz-border-radius: 10px;
    border-radius: 10px;
  }

  .pay .pay-card .title{
    margin: 0px;
    padding-top: 30px;
    line-height: 20px;
    font-size: 17px;
    color: #868484;
  }
  .pay .pay-card .sub-title{
    margin: 0px;
    line-height: 50px;
    font-size: 25px;
    color: #5F5E5E;
    padding-bottom: 15px;
  }

  .pay .pay-card .line-part{
    border-bottom: 1px dashed rgba(183, 184, 189, 0.48);
    margin: 0 20px;
  }
  .pay .pay-card .line{
    display: block;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    background-color:#275F98;
  }
  .pay .pay-card .line.left{
    float:left;
    margin-top: -10px;
    margin-left: -30px;
  }
  .pay .pay-card .line.right{
    float:right;
    margin-top: -10px;
    margin-right: -30px;
  }
  .pay .detail{
    float: right;
    margin:10px 15px;
    color: white;
  }
  .pay .code-img{
    margin: 20px;
  }
</style>
