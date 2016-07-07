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
@import 'demos/style.css';
body {
  font-family: Helvetica, sans-serif;
  background-color: #fbf9fe;
}
</style>
