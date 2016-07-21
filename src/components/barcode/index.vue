<template>
    <img id="barcode"/>
</template>
<script>
    const JsBarCode = require('./JsBarcode.code128.min')
    export default{
      ready () {
        this.refresh()
      },
      methods:{
        refresh(){
          if(this.code == '') return
          JsBarcode(this.$el, this.code, {
            displayValue:this.displayValue,
            width: this.width,
            height: this.height
          })
        }
      },
      props: {
        code: {
          type: [String, Number],
          required: true
        },
        displayValue: {
          type: Boolean,
          default: true
        },
        width: {
          type: Number,
          default: 1
        },
        height: {
          type: Number,
          default: 120
        }
      },
      watch: {
        code (code) {
          this.refresh()
        }
      }
    }
</script>
