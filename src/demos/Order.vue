<template>
  <div style="padding: 15px 0;">
    <divider>A real world example {{demo5}}</divider>
    <checker :value.sync="value" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
      <checker-item v-for="i in [1, 2, 3]" :value="i">￥{{i*300}}</checker-item>
    </checker>
  </div>
</template>

<script>
import { Checker, CheckerItem, Divider } from '../components'

export default {
  components: {
    Checker,
    CheckerItem,
    Divider
  },
  data () {
    return {
      value: 1
    }
  }
}
</script>

<style scoped>
.checker-popup {
  background: rgba(255,255,255,0.5);
}
.demo1-item {
  border: 1px solid #ececec;
  padding: 5px 15px;
}
.demo1-item-selected {
  border: 1px solid green;
}
.demo2-item {
  width: 40px;
  height: 40px;
  border: 1px solid #ccc;
  display: inline-block;
  border-radius: 50%;
  line-height: 40px;
  text-align: center;
}
.demo2-item-selected {
  border-color: green;
}
.demo3-item {
  padding: 5px 5px;
  font-size: 0;
}
.demo3-item-selected {
  outline: 1px solid #8B8AEE;
}
.demo4-item {
  background-color: #ddd;
  color: #222;
  font-size: 14px;
  padding: 5px 10px;
  margin-right: 10px;
  line-height: 18px;
  border-radius: 15px;
}
.demo4-item-selected {
  background-color: #FF3B3B;
  color: #fff;
}
.demo4-item-disabled {
  color: #999;
}
.demo5-item {
  width: 100px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 3px;
  border: 1px solid #ccc;
  background-color: #fff;
  margin-right: 6px;
}
.demo5-item-selected {
  background: #ffffff url(../assets/demo/checker/active.png) no-repeat right bottom;
  border-color: #ff4a00;
}
</style>