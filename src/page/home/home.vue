<template>
  <div class="home">
    <homeNav></homeNav>
    <div class="homeWrapper">
      <div class="container clearfix">
        <el-row :gutter="20">
          <calendar></calendar>
          <tip v-for="(tipItem, index) in chartData.tips" v-bind:item="tipItem" :key="index"></tip>
          <lineChart v-for="(lineItem, index) in chartData.line" v-bind:item="lineItem" :key="index"></lineChart>
          <areaChart v-for="(areaItem, index) in chartData.area" v-bind:item="areaItem" :key="index"></areaChart>
          <barChart v-for="(barItem, index) in chartData.bar" v-bind:item="barItem" :key="index"></barChart>
          <pieChart v-for="(pieItem, index) in chartData.pie" v-bind:item="pieItem" :key="index"></pieChart>
        </el-row>
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

  import {reqJoin, reqData} from '../../service/getData'
  import {isSuccess} from '../../config/mUtils'
  import {mapMutations, mapState} from 'vuex'

  export default {
    name: 'home',
    data () {
      return {
        chartData: {
          tips: [],
          line: [],
          area: [],
          bar: [],
          pie: []
        }
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
    computed: {
      ...mapState([
        'workspace'
      ])
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
      ...mapMutations([
        'UPDATE_WORKSPACE'
      ]),
      async initNav () {
        this.workspaceInfo = await reqJoin(this.$store.username, this.workspace)
        this.UPDATE_WORKSPACE(this.workspaceInfo.data)
      },
      async initData () {
        if (this.id === 'empty') {
          this.initNav()
          this.workspaceInfo = await reqJoin(this.$store.username, this.workspace)
          this.UPDATE_WORKSPACE(this.workspaceInfo.data)
          let req = 'dataViewId=' + this.workspace[0].dataViewId
          let tmp = await reqData(req)
          if (isSuccess(tmp.code)) {
            this.chartData = tmp.data
            this.$notify({
              title: '初始化数据',
              message: '刷新成功',
              type: 'success',
              duration: 2000,
              position: 'bottom-right'
            })
          } else {
            this.$notify({
              title: '初始化数据',
              message: '刷新失败',
              type: 'error',
              duration: 2000,
              position: 'bottom-right'
            })
          }
        } else {
          let req = 'dataViewId=' + this.id
          let tmp = await reqData(req)
          if (isSuccess(tmp.code)) {
            if (tmp.data !== undefined) {
              this.chartData = tmp.data
            }
            this.$notify({
              title: '初始化数据',
              message: '刷新成功',
              type: 'success',
              duration: 2000,
              position: 'bottom-right'
            })
          } else {
            this.$notify({
              title: '初始化数据',
              message: '刷新失败',
              type: 'error',
              duration: 2000,
              position: 'bottom-right'
            })
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
