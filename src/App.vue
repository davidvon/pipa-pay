<template>
  <div :class="['flex', 'app-' + $route.name]">
    <app-header :nav-title.sync="navTitle"></app-header>
    <div class="page-content">
      <router-view></router-view>
    </div>
    <loading :show.sync="loading.show" :text=""></loading>
    <alert
      :show.sync="alert.show"
      :title="alert.title"
      :button-text="alert.buttonText"
      @on-hide="alert.onHide">{{alert.text}}</alert>
  </div>
</template>

<script>
  export default {
    components: {
      "app-header": require('./pages/_layout/Header.vue'),
      "Loading": require('./components/loading/index.vue'),
      "Alert": require('./components/alert/index.vue')
    },
    data () {
      return {
        showHeader: false,
        navTitle: '噼啪支付',
        loading: {
          show: false,
          text: '数据加载中'
        },
        alert: {
          show: false,
          title: '提示信息',
          text: '提示内容',
          buttonText: '知道了',
          onHide () {}
        }
      }
    },
    computed: {
      userAgent () {
        return navigator.userAgent.toLowerCase();
      },
      isWeixin () {
        return this.userAgent.indexOf('micromessenger') !== -1;
      },
      isQQ () {
        return this.userAgent.indexOf('qq') !== -1;
      },
      isAndroid () {
        return this.userAgent.indexOf('android') !== -1;
      },
      isApple () {
        return this.userAgent.indexOf('iphone') !== -1 || this.userAgent.includes('ipad') !== -1;
      }
    },
    methods: {
      resetAlert () {
        this.alert = {
          show: false,
          title: '提示信息',
          text: '提示内容',
          buttonText: '确定',
          onHide () {
            // do nothing
          }
        };
      }
    },
    events: {
      showLoading () {
        this.loading.show = true;
      },
      hideLoading () {
        this.loading.show = false;
      },
      alert (msgs, callback) {
        this.alert = {
          show: true,
          title: '',
          text: msgs,
          buttonText: '确定',
          onHide: callback || function(){}
        };
      }
    }
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
.vux-header{
  border-bottom: 1px solid #eee;
}
.page-content{
  overflow: auto;
  text-align: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-overflow-scrolling: touch;
  position: relative;
}
</style>
