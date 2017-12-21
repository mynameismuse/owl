<template>
  <div class="monitor">
    <homeNav></homeNav>
    <router-view></router-view>
  </div>
</template>
<script type="text/babel">
  import homeNav from '../home/children/nav'

  export default {
    data () {
      return {}
    },
    components: {
      homeNav
    },
    mounted () {
      this.$nextTick(function () {
        this.init()
      })
    },
    methods: {
      init () {
        this.$router.push({name: 'monitorCard'})
      }
    }
  }
</script>
<style lang="less" scoped>

</style>
