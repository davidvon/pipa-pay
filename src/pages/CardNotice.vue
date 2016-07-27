<template>
  <div class='notice'>
    <iframe src="http://wx.cdn.pipapay.com/static/html/card_notice.html" width="{{width}}" height="{{height}}"
            frameborder="no" marginwidth="0" marginheight="0" border="0" allowtransparency="yes"></iframe>
  </div>
</template>

<script>
  export default {
    attached () {
      this.$root.navTitle = '注意事项';
      this.$root.showHeader = true
    },
    data () {
      return {
        width: 0,
        height: 0
      }
    },
    methods: {},
    route:{
      data (transition){
        this.width = window.innerWidth
        this.height = window.innerHeight-52
      }
    }
  }
</script>
