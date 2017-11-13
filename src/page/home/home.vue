<template>
  <div class="home">
    <homeNav></homeNav>
    <div class="homeWrapper">
      <div class="container clearfix">
        <tip v-for="tip in chartData.tips" v-bind:item="tip"></tip>
        <calendar></calendar>
        <lineChart v-bind:item="chartData.line"></lineChart>
        <areaChart v-bind:item="chartData.area"></areaChart>
        <barChart v-bind:item="chartData.bar"></barChart>
        <pieChart v-bind:item="chartData.pie"></pieChart>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import homeNav from './children/nav'
  import tip from '../../components/tip'
  import calendar from '../../components/calendar'
  import lineChart from '../../components/line'
  import areaChart from '../../components/area'
  import barChart from '../../components/bar'
  import pieChart from '../../components/pie'

  import {reqHome} from '../../service/getData'

  export default {
    name: 'home',
    data () {
      return {
        chartData: null
      }
    },
    props: ['id'],
    components: {
      homeNav,
      tip,
      calendar,
      lineChart,
      areaChart,
      barChart,
      pieChart
    },
    beforeMount () {
      let tmp = reqHome(this.$store.username, this.$store.workspace, this.id)
      if (tmp.code === 'S') {
        this.chartData = tmp.data
      } else {
      }
    },
    watch: {
      '$route' (to, from) {
        let tmp = reqHome(this.$store.username, this.$store.workspace, this.id)
        if (tmp.code === 'S') {
          this.chartData = tmp.data
        } else {
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../style/setting.less";
  @import "../../style/common.less";

  .homeWrapper {
    padding: 2em 0;
    background-color: #F7F8F9;
  }

  .clearfix:after {
    content: '.';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
</style>
