<template>
  <div>
    <router-view transition transition-mode="out-in"></router-view>
  </div>
</template>

<script>
  export default {
  }
</script>

<style lang="less">
@import './styles/other.less';
@import './styles/weui.0.4.2.min.css';
@import './styles/weui_patch.less';

body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}
#app{
  height: 100%;
}
</style>
