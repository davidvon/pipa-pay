<template>
    <img id="barcode"/>
</template>
<script>
    import JsBarCode from './JsBarcode.code128.min'
    export default{
      ready () {
        this._barcode = null
        if(this.code != '')
          this._barcode = JsBarcode(this.$el, this.code, {
          displayValue:this.displayValue,
          width: this.width,
          height: this.height
        })
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
          if(this.code != null)
            this._barcode = JsBarcode("#barcode", this.code, {
            displayValue:this.displayValue,
            width: this.width,
            height: this.height
          })
        }
      }
    }
</script>
