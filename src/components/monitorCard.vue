<template>
  <el-col :lg="6" :md="12" :sm="24">
    <div class="monitorCard-wrapper">
      <div class="monitorCard-title">
        {{this.item.monitorDetailName}}
      </div>
      <div class="monitorCard-subtitle">
        {{this.item.monitorViewName}} => {{this.item.monitorInfoName}}
      </div>
      <div class="monitorCard-success">
        <div class="monitorCard-success-header">成功: ( {{item.successes}} / {{item.total}} )</div>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="successPerc" status="success"></el-progress>
      </div>
      <div class="monitorCard-error">
        <div class="monitorCard-error-header">失败: ( {{item.fails}} / {{item.total}} )</div>
        <el-progress :text-inside="true" :stroke-width="18" :percentage="failPerc" status="exception"></el-progress>
      </div>
      <div class="monitorCard-actions">
        <el-button type="primary" size="small" v-on:click="reExce">重新执行</el-button>
        <el-button type="info" size="small" v-on:click="routeDetail">查看明细</el-button>
      </div>
    </div>
  </el-col>
</template>
<script type="text/babel">
  import {reqMonitorCommad} from '../service/getData'
  import {parseReq, isSuccess} from '../config/mUtils'

  export default {
    data () {
      return {
      }
    },
    props: ['item'],
    computed: {
      successPerc: function () {
        if (this.item.fails + this.item.successes === 0) {
          return 0
        } else {
          return Math.round(this.item.successes / (this.item.fails + this.item.successes) * 100)
        }
      },
      failPerc: function () {
        if (this.item.fails + this.item.successes === 0) {
          return 0
        } else {
          return Math.round(this.item.fails / (this.item.fails + this.item.successes) * 100)
        }
      }
    },
    methods: {
      async reExce () {
        let result = await reqMonitorCommad(parseReq({
          'monitorViewId': this.item.monitorViewId,
          'monitorInfoId': this.item.monitorInfoId,
          'monitorDetailId': this.item.monitorDetailId
        }))
        if (isSuccess(result.code)) {
          this.$notify({
            title: '执行任务',
            message: '执行成功',
            type: 'success',
            duration: 2000,
            position: 'bottom-right'
          })
          let failsNum = 0
          let successesNum = 0
          result.data.forEach(item => {
            if (item.state === '0') {
              successesNum++
            } else {
              failsNum++
            }
          })
          this.item.fails = failsNum
          this.item.successes = successesNum
        } else {
          this.$notify({
            title: '执行任务',
            message: '执行失败',
            type: 'error',
            duration: 2000,
            position: 'bottom-right'
          })
        }
      },
      async routeDetail () {
        this.$router.push(
          {
            name: 'monitorDetail',
            params: {
              viewId: this.item.monitorViewId,
              infoId: this.item.monitorInfoId,
              detailId: this.item.monitorDetailId,
              viewName: this.item.monitorViewName,
              infoName: this.item.monitorInfoName,
              detailName: this.item.monitorDetailName
            }
          }
        )
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../style/setting.less";
  @import "../style/common.less";

  .el-col {
    padding: 20px 20px;
    min-height: 250px;

    .monitorCard-wrapper {
      background-color: @white;
      border-radius: 4px;
      padding: 1em;
      transition: all .2s linear;
      min-height: 250px;

      &:hover {
        box-shadow: 0 10px 10px 0 rgba(14,35,74,.11);
      }

      .monitorCard-title {
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        color: @black;
        font-size: @title-font-size;
        padding: 5px 0;
      }

      .monitorCard-subtitle {
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        color: @grey;
        font-size: @subtitle-font-size;
        padding: 5px 0;
        font-weight: 300;
      }

      .monitorCard-success {
        color: @green;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        padding: 5px 0;

        .monitorCard-success-header {
          font-weight: 300;
          padding: 5px 0;
        }
      }

      .monitorCard-error {
        color: @red;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        padding: 5px 0;

        .monitorCard-error-header {
          font-weight: 300;
          padding: 5px 0;
        }
      }

      .monitorCard-actions {
        text-align: center;
        padding: 20px 0;
      }
    }
  }
</style>
