<template>
  <div class="home">
    <homeNav></homeNav>
    <div class="homeWrapper">
      <div class="container clearfix">
        <calendar></calendar>
        <tip v-for="tip in chartData.tips" v-bind:item="tip"></tip>
        <lineChart v-for="line in chartData.line" v-bind:item="line"></lineChart>
        <areaChart v-for="area in chartData.area" v-bind:item="area"></areaChart>
        <barChart v-for="bar in chartData.bar" v-bind:item="bar"></barChart>
        <pieChart v-for="pie in chartData.pie" v-bind:item="pie"></pieChart>
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

  import {reqData, reqMepay} from '../../service/getData'

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
    mounted () {
      this.initData()
    },
    watch: {
      '$route' (to, from) {
        this.initData()
      }
    },
    methods: {
      async initData () {
        if (this.id === 'mepay') {
          let tmp = await reqMepay(this.$store.username, this.$store.workspace, this.id)
          if (tmp.code === 'S') {
            console.log(tmp)
            this.chartData = tmp.data
          } else {
          }
        } else {
          let tmp = await reqData(this.$store.username, this.$store.workspace, this.id)
          if (tmp.code === 'S') {
            this.chartData = tmp.data
          } else {
          }
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
