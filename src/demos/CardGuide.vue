<template>
  <div class='guide'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">购卡向导</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="wal_gouka_tip">
      <p class="wal_gktop">购卡指引</p>
      <p class="wal_txt_p1">一.个人购卡/绑卡</p>

      <div class="wal_gouka_box">
        <p>顾客可以通过微信，将实体礼品卡绑定到微信上，或者在微信上直接购买电子礼品卡。</p>
        <p>1.绑定实体礼品卡 －如果手中的实体礼品卡为23开头，并且带有网上支付密码，就可以通过如下链接，将其绑定到微信卡券中。 <span class="wal_cblue btn-bind">点击绑卡</span></p>
        <p>2.购买电子礼品卡 －可以通过访问如下链接，直接购买电子礼品卡。 <span class="wal_cblue btn-buy">点击购卡</span></p>
      </div>

      <p class="wal_txt_p1">二.企业购卡</p>
      <div class="wal_gouka_box">
        <p>1.如果您是企业客户，除了可以亲临沃尔玛实体门店购物买实体礼品卡，还可以足不出户购买电子礼品卡，我们将根据企业提供的信息提供专属的领卡方案。</p>
        <p>2.企业客户购买电子卡与购买实体卡一样，均需要提供相关资料，以满足国家商务部《单用途商业预付费卡管理办法(试行)》的规定。</p>
        <p>3.企业购买电子礼品卡的操作流程简单方便：</p>

        <p class="wal_txt_img"><img src="../assets/demo/tips_01.png" alt=""></p>

        <p class="wal_txt_p2">1.申请购卡</p>
        <p>将如下信息以Excel的形式，发送到<span class="wal_cblue">CNFS@wal-mart.com。</span></p>

        <p class="wal_txt_img"><img src="../assets/demo/tips_02.png" alt=""></p>

        <p>同时，需要提供如下资料：</p>
        <p>单位有效证件（包括营业执照、事业单位法人证书、税务登记证、组织机构代码证）、单位联系电话、代理人有效身份证件（包括身份证、护照、军官证等）、代理人联系电话。</p>

        <p class="wal_txt_p2">2.付款</p>
        <p>沃尔玛确认订单后，单位按照付款通知列明的账户信息付款，仅接受与申请单位同名的银行账户转账。付款后将付款凭证发送给 <span class="wal_cblue">CNFS@wal-mart.com。</span></p>

        <p class="wal_txt_p2">3.交付与分发</p>

        <p>沃尔玛收到款项审核无误后，将会于客户核对资料，将电子卡领取方式发给企业。</p>

        <p class="wal_txt_img"><img src="../assets/demo/tips_03.png" alt=""></p>

        <p class="wal_txt_p2">4.查询与追踪</p>
        <p>指定用户可以查询电子卡领取情况。 </p>

        <p class="wal_txt_img"><img src="../assets/demo/tips_04.png" alt=""></p>
      </div>

      <p class="wal_txt_p1">三.可选的个性化服务</p>
      <div class="wal_gouka_box">
        <p>1.沃尔玛可以根据企业的个性化需求提供自定义卡面服务等。</p>
        <p>2.沃尔玛可以根据企业的需求，创建领卡人验证信息。 </p>
      </div>

      <p class="wal_txt_p1">四.其他资料</p>
      <div class="wal_gouka_box">
        <p>1.与沃尔玛实体门店购卡相同，沃尔玛对单位客户购卡达到指定金额提供折扣。折扣比率如下：</p>
        <p class="wal_txt_img"><img src="../assets/demo/tips_05.png" alt=""></p>
        <p>2.单卡面值：5-1,000元，任意金额。</p>
        <p>3.发票：提供增值税普通发票，发票由“深圳沃尔玛百货零售有限公司”开具，发票内容可以为“商品一批”、“食品一批”或者“日用品一批”，购卡折扣金额将会明示在发票上。</p>
        <p>4.如果顾客需要购卡协议，沃尔玛可以提供标准版本的协议。</p>
        <p>5.如果顾客有任何疑问，可以发送邮件至 <span class="wal_cblue">CNFS@wal-mart.com</span> 咨询。</p>
        <p>6.使用过程中有任何疑问，可以拨打4000-888-400进行咨询。</p>
        <p>7.未尽事宜，请参考《电子卡指引》和《沃尔玛GIFT卡章程》。</p>
      </div>
    </div>
    </div>
</template>

<script>
  import { Checker, CheckerItem, Masker, Actionsheet, XHeader, Group} from '../components'
  import Const from '../services/const'

  export default {
    components: { Checker, CheckerItem, Masker, Actionsheet, XHeader, Group },
    data () {
      return {
        cardIndex:1,
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        },
        showMenus: false
      }
    },
    methods: {}
}
</script>
