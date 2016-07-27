<template>
  <div class='guide'>
    <iframe src="http://wx.cdn.pipapay.com/static/html/card_guild.html" width="{{width}}" height="{{height}}"
            frameborder="no" marginwidth="0" marginheight="0" border="0" allowtransparency="yes"></iframe>
  </div>
</template>

<script>
  import Const from '../services/const'

  export default {
    attached () {
      this.$root.navTitle = '向导';
      this.$root.showHeader = true
    },

    data () {
      return {
        width: 0,
        height: 0
      }
    },
    route:{
      data (transition){
        this.width = window.innerWidth
        this.height = window.innerHeight-53
      }
    }
  }
</script>
