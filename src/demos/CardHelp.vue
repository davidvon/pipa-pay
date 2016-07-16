<template>
  <div class='help'>
    <x-header :left-options='{showBack:true, backText:"返回"}'>帮助中心</x-header>
    <div class="help_page">
      <div class="help_h2"><span class="help_sh1">1. </span> <span class="help_sh2">电子卡购买后，如何使用？</span></div>
      <div class="help_answer">电子卡购买后，会存放在微信卡券里。线下使用时，从微信里找到电子卡，点击“付款”出示电子卡的付款二维码/一维码，收银员输入金额扫码后即可完成付款。</div>
      <div class="help_h2 border b_top"><span class="help_sh1">2. </span> <span class="help_sh2">电子卡付款的二维码/条形码被截图了，是否有风险？</span></div>
      <div class="help_answer">电子卡付款的二维码/条形码采用安全加密变码技术，每分钟会自动更新，即使被截图了，也无法进行付款使用。</div>
      <div class="help_h2 border b_top"><span class="help_sh1">3. </span> <span class="help_sh2">关联实体卡后，实体卡还可以使用吗？</span></div>
      <div class="help_answer">关联实体卡后，电子卡及实体卡都可以使用。但由实体卡关联生成的电子礼品卡成功转赠后，对应的实体卡将立即失效。</div>
      <div class="help_h2 border b_top"><span class="help_sh1">4. </span> <span class="help_sh2">充值时，支付成功后充值资金未到账如何处理？</span></div>
      <div class="help_answer">如遇这种情况，请联系客服人员，客服人员会介入为你处理。</div>
      <div class="help_h2 border b_top"><span class="help_sh1">5. </span> <span class="help_sh2">电子卡转赠给好友后，自己还可以使用吗？</span></div>
      <div class="help_answer">电子卡转赠后，电子卡即处于“转赠中”状态，待好友领取后，电子卡即从卡包里消失，转赠者不可继续使用电子卡，实体卡也同时失效。若他人未在24小时内领取，转赠的礼品卡将原路返回至顾客微信卡包。被转赠的好友可继续使用电子卡余额进行消费。</div>
    </div>
  </div>
</template>

<script>
  import { XHeader} from '../components'

  export default {
    components: { XHeader},
    data () {
      return {}
    },
    methods: {}
}
</script>

<style lang="less"></style>
