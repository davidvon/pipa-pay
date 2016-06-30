<template>
  <div class="order-result">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">购买</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div id="result-page" class="flex">
      <div class="content pay_success">
        <p class="top_icop"><span class="ico_tip ico_success"></span></p>
        <p class="tips_p1">支付成功</p>
        <p class="tips_p2">正在为你分配礼品卡，请稍后…</p>
      </div><!-- content end -->

      <div class="content trade_success none">
        <p class="top_icop"><span class="ico_tip ico_success"></span></p>
        <p class="tips_p1">购卡成功</p>
        <p class="tips_p2">你获得 <span class="col0 number"></span> 面值 <span class="col0 amount"></span> 的礼品卡</p>
        <p class="card_pbtn"><button class="blue_btn btn-memcard" type="button">放入微信卡包</button></p>
      </div><!-- content end -->

      <div class="content trade_fail none">
        <p class="top_icop"><span class="ico_tip ico_fail"></span></p>
        <p class="tips_p1">购卡失败</p>
        <p class="tips_p2">请致电4000-888-400联系客服人员进行处理</p>
      </div><!-- content end -->
    </div>
  </div>
</template>

<script>
import { Actionsheet, XHeader} from '../components'

export default {
  components: {
    XHeader, Actionsheet
  },
  data () {
    return {
      money: 50,
      otherMoney: "",
      count:1,
      menus: {
        menu1: '付款',
        menu2: '我的卡包',
        menu3: '赠送卡',
        menu4: '在线购物',
        menu5: '用卡说明'
      },
      showMenus: false,
      invoice:{
        enable:false,
        select:false,
        titleValid:true,
        title:'',
        name:'',
        phone:'',
        zip:'',
        address:'',
        menus: {
          menu1: '商品一批',
          menu2: '食品一批',
          menu3: '日用品一批'
        },
        content: '商品一批'
      },
      alert:{
        message:'',
        show: false
      }
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
  @import '../styles/other.less';

</style>
