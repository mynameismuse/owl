<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="router"/>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      transitionName: 'slide-right'
    }
  },
  watch: {
    '$route' (to, from) {
      let isBack = this.$router.isBack  //  监听路由变化时的状态为前进还是后退
      if (isBack) {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
    }
  }
}
</script>
<style lang="less">
  @import "./style/normalize.less";
  @import "./style/setting.less";

  body, html {
    font-family: @body-font;
    color: @black;
  }

  .router {
    position: absolute;
    width: 100%;
    transition: all .4s ease;
  }

  .slide-left-enter,
  .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }

  .slide-left-leave-active,
  .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100% 0);
  }
</style>
