<template>
  <div class='wx-cards card gift flex' id="walmart_15_1">
    <x-header :left-options='{showBack:true, backText:"返回"}' :right-options="{showMore:true}"
              @on-click-more="showMenus=true">赠送卡
    </x-header>
    <actionsheet :menus="menus" :show.sync="showMenus" show-cancel></actionsheet>
    <div class="container" data-js="">
      <div class="content">
        <p class="donation_top">请输入转赠留言</p>
        <div class="donation_text border b_top_btm">
          <x-textarea :max="30" :placeholder="shareContent" :value.sync="shareContent"></x-textarea>
        </div>
        <p class="donation_btn">
          <x-button type="primary" @click="shareMaskShow=true">转赠</x-button>
        </p>
        <p class="donation_p1">温馨提示</p>
        <p class="donation_p2"><span>1.</span> <span>转赠后，礼品卡即处于“转赠中”状态。待好友领取后，即与转赠者解绑，并与被转赠者建立绑定关系。</span></p>
        <p class="donation_p2"><span>2.</span> <span>若超过24小时未领取。则过期不可再领取。同时礼品卡从“转赠中”状态恢复正常。</span></p>
      </div><!-- content end -->
      <div class="s_wraper share_id" v-show="shareMaskShow" @click="shareMaskShow=false">
        <div class="pop_otop">
          <p class="box_share"><span class="ico_share"></span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { Checker, CheckerItem, Masker, Actionsheet, XHeader, XButton, XTextarea} from '../components'
  import Const from '../services/const'
  export default {
    components: {
      Checker, CheckerItem, Masker, Actionsheet, XHeader, XButton, XTextarea
    },
    data () {
      return {
        shareMaskShow: false,
        shareContent:'小小卡片，浓浓情义',
        menus: {
          menu1: '购卡',
          menu2: '付款',
          menu3: '赠送卡',
          menu4: '在线购物',
          menu5: '用卡说明'
        }
      }
    },
    methods: {
      onShare(){

      }
    },
    route: {
      data (transition){}
    }
  }
</script>

<style lang="less">
  @import '../styles/paycard.less';

  .card .title {
    color: #fff;
    font-size: 17px;
  }

</style>
