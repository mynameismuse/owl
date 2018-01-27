<template>
  <div class="monitorDetail">
    <div class="container dark">
      <div class="monitorDetail-header">
        <span class="monitorDetail-header_title">{{this.detailName}} ({{this.infoName}} <- {{this.viewName}})</span>
        <el-button class="monitorDetail-header_button" size="small" type="primary" v-on:click="reExce">重新执行</el-button>
        <el-button class="monitorDetail-header_button" size="small" icon="el-icon-refresh" type="success" v-on:click="refresh">刷新列表</el-button>
      </div>
    </div>
    <div class="monitorDetailWrapper">
      <div class="container">
        <div class="monitorDetail-subtitle">
          失败列表
        </div>
        <el-table
          :data="failList"
          stripe
          border
          :height = '500'
          style="width: 100%">
          <el-table-column
            prop="describe"
            label="描述 (describe)">
          </el-table-column>
          <el-table-column
            prop="fileNum"
            label="文件数量 (fileNum)">
          </el-table-column>
          <el-table-column
            prop="ip"
            label="ip地址 (ip)">
          </el-table-column>
          <el-table-column
            prop="refreshTime"
            label="刷新时间 (refreshTime)">
          </el-table-column>
          <el-table-column
            prop="state"
            :formatter="format"
            label="状态 (state)">
          </el-table-column>
        </el-table>
        <div class="monitorDetail-subtitle">
          成功列表
        </div>
        <el-table
          :data="successList"
          stripe
          border
          :height = '500'
          style="width: 100%">
          <el-table-column
            prop="describe"
            label="描述 (describe)">
          </el-table-column>
          <el-table-column
            prop="fileNum"
            label="文件数量 (fileNum)">
          </el-table-column>
          <el-table-column
            prop="ip"
            label="ip地址 (ip)">
          </el-table-column>
          <el-table-column
            prop="refreshTime"
            label="刷新时间 (refreshTime)">
          </el-table-column>
          <el-table-column
            prop="state"
            :formatter="format"
            label="状态 (state)">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import {reqMonitorSuccess, reqMonitorCommad} from '../../../service/getData'
  import {isSuccess, parseReq} from '../../../config/mUtils'

  export default {
    data () {
      return {
        successList: [],
        failList: []
      }
    },
    props: ['viewName', 'infoName', 'detailName', 'viewId', 'infoId', 'detailId'],
    mounted () {
      this.initData()
    },
    methods: {
      format (row, column, cellValue) {
        if (cellValue === '0') {
          return '成功'
        } else {
          return '失败'
        }
      },
      async initData () {
        let success = await reqMonitorSuccess(parseReq({
          'monitorViewId': this.viewId,
          'monitorInfoId': this.infoId,
          'monitorDetailId': this.detailId,
          'monitorState': '0'
        }))
        if (isSuccess(success.code)) {
          this.successList = success.data
        }
        let fail = await reqMonitorSuccess(parseReq({
          'monitorViewId': this.viewId,
          'monitorInfoId': this.infoId,
          'monitorDetailId': this.detailId,
          'monitorState': '1'
        }))
        if (isSuccess(fail.code)) {
          this.failList = fail.data
        }
      },
      refresh () {
        this.initData()
      },
      async reExce () {
        let result = await reqMonitorCommad(parseReq({
          'monitorViewId': this.viewId,
          'monitorInfoId': this.infoId,
          'monitorDetailId': this.detailId
        }))
        if (isSuccess(result.code)) {
          this.$notify({
            title: '执行任务',
            message: '执行成功',
            type: 'success',
            duration: 2000,
            position: 'bottom-right'
          })
          this.failList = []
          this.successList = []
          result.data.forEach(item => {
            if (item.state === '0') {
              this.successList.push(item)
            } else {
              this.failList.push(item)
            }
          })
        } else {
          this.$notify({
            title: '执行任务',
            message: '执行失败',
            type: 'error',
            duration: 2000,
            position: 'bottom-right'
          })
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../style/setting.less";
  @import "../../../style/common.less";

  .monitorDetailWrapper {
    padding: 1em 0;
    background-color: #F7F8F9;

    .monitorDetail-title {
      font-size: 26px;
      color: @quiet;
      padding: 10px 0;

      .light {
        color: @purple;
      }
    }

    .monitorDetail-subtitle {
      font-size: 20px;
      color: #2c3e50;
      padding: 10px 0;
    }
  }
  .dark {
    margin: 10px 0;
    background-color: #F7F8F9;
  }
  .monitorDetail-header {
    padding: 30px 0;
    .monitorDetail-header_title {
      font-size: 24px;
      vertical-align: middle;
    }

    .monitorDetail-header_button {
      margin: 0 5px;
      float: right;
    }
  }
</style>
