<template>
  <div class='notice'>
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}" @on-click-more="showMenus=true">电子卡章程</x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <p class="wal_rtop">沃尔玛礼品卡微信平台操作指引</p>
    <p class="wal_top_tit">顾客在微信平台（包括微信卡包、微信公众号）进行沃尔玛礼品卡购买、充值、余额查询、转赠、关联实体卡、消费等操作时，应当严格遵守本指引，并自行承担违反本指引可能带来的风险。</p>
    <div class="walcard_rule">
      <ul>
        <li>通过扫描二维码或通过微信平台购买及充值礼品卡，支付方式仅限微信支付。</li>
        <li>根据国家法律规定，顾客购卡或充值达到1万元或以上的，应当在微信平台办理实名登记，提供购卡人的姓名、有效身份证件号码及联系方式。</li>
        <li>顾客购卡如需开具发票，应当遵循微信平台的发票开具指引，确保所填的开票信息完整准确；之后顾客在线上线下消费时，沃尔玛不再重复开具发票。</li>
        <li>顾客如选择索要发票，发票将由“深圳沃尔玛百货零售有限公司”开具后（发票内容只能是“商品一批”、“食品一批”或“日用品一批”），按顾客填写的地址以快递到付的方式寄给顾客，快递费用由顾客自理。</li>
        <li>购卡符合条件的可享受折扣优惠，购卡金额与折扣金额会在同一张发票上体现。</li>
        <li>顾客可将通过微信卡包平台及沃尔玛微信公众号购买的沃尔玛电子礼品卡放入微信卡包；也可将沃尔玛实体礼品卡扫码关联生成电子礼品卡放入微信卡包，同时将自动关注沃尔玛公众号。</li>
        <li>实体卡关联成功后，顾客通过微信卡包及实体卡均可以消费，因此请妥善保管实体卡以避免丢失或密码泄露带来的损失。但由实体卡关联生成的电子礼品卡成功转赠后，对应的实体卡将立即失效。</li>
        <li>顾客通过礼品卡转赠功能可将微信卡包内的电子礼品卡转赠他人，转赠操作完成后不可申请撤销，若他人成功领取后，微信卡包及关联的实体卡（如有）余额清零，转赠后该礼品卡由他人所有并使用。若他人未在24小时内领取，转赠的礼品卡将原路返回至顾客微信卡包。</li>
        <li>终端消费者在沃尔玛门店购物时，可在移动终端上打开微信卡包，点击沃尔玛电子礼品卡，生成电子支付码，扫码即可完成支付。</li>
        <li>顾客在微信平台购买的礼品卡以及微信卡包关联的实体卡，均为不记名卡，不可挂失，请自行妥善保管避免丢失或密码泄露造成损失。</li>
        <li>其他未尽事宜，请参见《沃尔玛GIFT卡章程》。</li>
      </ul>
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
