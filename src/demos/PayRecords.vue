<template>
  <div class="pay-records">
    <div class="content">
      <div class="sale_top">合计: 近3月收入<span class="col1">￥<em class="income-money">{{rechargeTotal}}</em></span>，支出<span
        class="col3">￥<em class="outcome-money">{{expendTotal}}</em></span></div>
      <div class="record-container">
        <div class="sr_item {{item.className}}" v-for="item in records">
          <div class="sr_it1">
            <p class="sr_itp1">{{item.merchantName}}</p>
            <p class="sr_itp2">{{item.date}}</p>
          </div>
          <div class="sr_it2"><span>{item.amount}</span></div>
        </div>
        <div class="no_data" v-show="no_data_display">
          <p class="nodata_p"><span class="ico_nodata"></span></p>
          <p class="nodata_tit">暂无交易记录</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Const from '../services/const'
  import { } from '../components'
  import logger from '../services/log'

  export default {
    components: {},
    data () {
      return {
        no_data: false,
        rechargeTotal: 0,
        expendTotal: 0,
        records: []
      }
    },
    methods: {},
    route: {
      data (transition){
        this.cardId = transition.from.params.cardId
        var self = this
        this.$http.post(Const.API_URL + 'card/pay/records', {cardId: this.cardId}).then(function (response) {
          logger.log("PayRecords", "response: " + JSON.stringify(response.data))
          var ret = response.data
          if (ret && ret.result == 0) {
            self.records = ret.data.records
            if (self.records.length == 0) self.no_data = true
          }
        })
      }
    }
  }
</script>

<style lang="less">

</style>
