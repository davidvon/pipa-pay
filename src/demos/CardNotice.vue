<template>
  <div class='notice'>
    <x-header :left-options='{showBack:true, backText:"返回"}'>电子卡章程</x-header>
    <iframe src="http://wx.cdn.pipapay.com/static/html/card_notice.html" width="{{width}}" height="{{height}}"
            frameborder="no" marginwidth="0" marginheight="0" border="0" allowtransparency="yes"></iframe>
  </div>
</template>

<script>
  import { XHeader} from '../components'

  export default {
    components: {XHeader},
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
        this.height = window.innerHeight
      }
    }
  }
</script>
