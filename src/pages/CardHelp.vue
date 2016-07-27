<template>
  <div class='help'>
    <iframe src="http://wx.cdn.pipapay.com/static/html/card_help.html" width="{{width}}" height="{{height}}"
            frameborder="no" border="0" marginwidth="0" marginheight="0" allowtransparency="yes"></iframe>
  </div>
</template>

<script>
  export default {
    attached () {
      this.$root.navTitle = '帮助';
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
        this.height = window.innerHeight-52
      }
    }
  }
</script>

