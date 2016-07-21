<template>
  <div class='guide'>
    <x-header :left-options='{showBack:true, backText:"返回"}'>购卡向导</x-header>
    <iframe src="http://wx.cdn.pipapay.com/static/html/card_guild.html" width="{{width}}" height="{{height}}"
            frameborder="no" marginwidth="0" marginheight="0" border="0" allowtransparency="yes"></iframe>
  </div>
</template>

<script>
  import Const from '../services/const'

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
    route:{
      data (transition){
        this.width = window.innerWidth
        this.height = window.innerHeight-52
      }
    }
  }
</script>
