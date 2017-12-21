<template>
  <div class="monitor">
    <div class="container dark">
      <div class="monitor-header">
        <span class="monitor-header_title">监控视图列表 (Monitor View)</span>
        <el-button class="monitor-header_button" size="small" icon="el-icon-refresh" type="success" v-on:click="refresh">刷新列表</el-button>
      </div>
    </div>
    <div class="monitor-wrapper">
      <div class="container">
        <el-row :gutter="20">
          <monitorCard v-for="(monitorItem, index) in monitorList"
                       v-bind:item="monitorItem"
                       :key="index">
          </monitorCard>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import homeNav from '../../home/children/nav'
  import monitorCard from '../../../components/monitorCard'
  import {reqMonitors, reqMonitorSuccess} from '../../../service/getData'
  import {isSuccess, parseReq} from '../../../config/mUtils'

  export default {
    data () {
      return {
        monitorList: []
      }
    },
    components: {
      homeNav,
      monitorCard
    },
    beforeMount () {
      this.initData()
    },
    methods: {
      async initData () {
        let result = await reqMonitors()
        if (isSuccess(result.code)) {
          this.monitorList = []
          if (result.data.length > 0) {
            result.data.forEach(first => {
              if (first.monitorInfos.length > 0) {
                first.monitorInfos.forEach(second => {
                  if (second.monitorDetails.length > 0) {
                    second.monitorDetails.forEach(async third => {
                      let fails = await reqMonitorSuccess(parseReq({
                        'monitorViewId': first.monitorViewId,
                        'monitorInfoId': second.monitorInfoId,
                        'monitorDetailId': third.monitorDetailId,
                        'monitorState': '0'
                      }))
                      if (isSuccess(fails.code)) {
                        if (typeof fails.data === 'undefined') {
                          fails = []
                        } else {
                          fails = fails.data
                        }
                      }
                      let successes = await reqMonitorSuccess(parseReq({
                        'monitorViewId': first.monitorViewId,
                        'monitorInfoId': second.monitorInfoId,
                        'monitorDetailId': third.monitorDetailId,
                        'monitorState': '1'
                      }))
                      if (isSuccess(successes.code)) {
                        if (typeof successes.data === 'undefined') {
                          successes = []
                        } else {
                          successes = successes.data
                        }
                      }
                      this.monitorList.push({
                        monitorViewId: first.monitorViewId,
                        monitorViewName: first.monitorViewName,
                        monitorInfoId: second.monitorInfoId,
                        monitorInfoName: second.monitorInfoName,
                        monitorDetailId: third.monitorDetailId,
                        monitorDetailName: third.monitorDetailName,
                        fails: fails,
                        successes: successes
                      })
                    })
                  }
                })
              }
            })
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
      },
      refresh () {
        this.initData()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../style/setting.less";
  @import "../../../style/common.less";

  .monitor-wrapper {
    padding: 2em 0;
    background-color: #F7F8F9;
  }
  .dark {
    margin: 10px 0;
    background-color: #F7F8F9;
  }
  .monitor-header {
    padding: 30px 0;
    .monitor-header_title {
      font-size: 24px;
      vertical-align: middle;
    }

    .monitor-header_button {
      margin: 0 5px;
      float: right;
    }
  }
</style>
