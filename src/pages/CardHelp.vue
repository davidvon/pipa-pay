<template>
  <div class='help'>
    <x-header :left-options='{showBack:true, backText:"返回"}'>帮助中心</x-header>
    <iframe src="http://wx.cdn.pipapay.com/static/html/card_help.html" width="{{width}}" height="{{height}}"
            frameborder="no" border="0" marginwidth="0" marginheight="0" allowtransparency="yes"></iframe>
  </div>
</template>

<script>
  export default {
    components: {
      "XHeader": require('../components/x-header/index.vue')
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

