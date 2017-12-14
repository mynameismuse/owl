<template>
  <div class="monitor">
    <homeNav></homeNav>
    <div class="container">
      <div class="monitor-sidebar">
        <div class="scroll-wrapper">
          <div class="siderbar-title">
            监控脚本列表
          </div>
          <div v-for="(firstTitle, index) in monitorList.data" class="first-title">
            {{ firstTitle.monitorViewName }}
            <div v-for="(secondTitle, index) in firstTitle.monitorInfos" class="second-title">
              {{ secondTitle.monitorInfoName }}
              <div v-for="(thirdTitle, index) in secondTitle.monitorDetails" class="third-title" v-on:click="initSuccessData(firstTitle.monitorViewId,secondTitle.monitorInfoId,thirdTitle.monitorDetailId, thirdTitle.monitorDetailName, $event)">
                {{ thirdTitle.monitorDetailName }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="monitor-content">
        <div class="source-header">
          <span class="source-header_title">服务器脚本错误总列表</span>
          <el-button class="source-header_button" size="small" icon="el-icon-refresh" type="primary" v-on:click="refreshErrorData">刷新</el-button>
        </div>
        <el-table
          :data="errorList.data"
          border
          style="width: 100%"
          max-height="600"
          :row-class-name="tableRowClassName">
          <el-table-column
            prop="monitorViewName"
            label="MonitorViewName">
          </el-table-column>
          <el-table-column
            prop="monitorViewId"
            label="MonitorViewId">
          </el-table-column>
          <el-table-column
            prop="monitorResultId"
            label="MonitorResultId">
          </el-table-column>
          <el-table-column
            prop="monitorInfoName"
            label="MonitorInfoName">
          </el-table-column>
          <el-table-column
            prop="monitorInfoId"
            label="MonitorInfoId">
          </el-table-column>
          <el-table-column
            prop="monitorDetailName"
            label="MonitorDetailName">
          </el-table-column>
          <el-table-column
            prop="monitorDetailId"
            label="MonitorDetailId">
          </el-table-column>
          <el-table-column
            prop="ip"
            label="ip">
          </el-table-column>
          <el-table-column
            prop="fileNum"
            label="fileNum">
          </el-table-column>
          <el-table-column
            prop="describe"
            label="Description">
          </el-table-column>
        </el-table>
        <div class="source-header">
          <span class="source-header_title">服务器脚本成功列表: {{ detailName }}</span>
          <el-button class="source-header_button" size="small" type="primary" v-on:click="refreshSuccessData">重新执行脚本</el-button>
        </div>
        <el-table
          :data="successList.data"
          border
          style="width: 100%"
          :row-class-name="successTableRowName">
          <el-table-column
            prop="monitorViewName"
            label="MonitorViewName">
          </el-table-column>
          <el-table-column
            prop="monitorViewId"
            label="MonitorViewId">
          </el-table-column>
          <el-table-column
            prop="monitorResultId"
            label="MonitorResultId">
          </el-table-column>
          <el-table-column
            prop="monitorInfoName"
            label="MonitorInfoName">
          </el-table-column>
          <el-table-column
            prop="monitorInfoId"
            label="MonitorInfoId">
          </el-table-column>
          <el-table-column
            prop="monitorDetailName"
            label="MonitorDetailName">
          </el-table-column>
          <el-table-column
            prop="monitorDetailId"
            label="MonitorDetailId">
          </el-table-column>
          <el-table-column
            prop="ip"
            label="ip">
          </el-table-column>
          <el-table-column
            prop="fileNum"
            label="fileNum">
          </el-table-column>
          <el-table-column
            prop="describe"
            label="Description">
          </el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import homeNav from '../home/children/nav'

  import {reqMonitorError, reqMonitors, reqMonitorSuccess, reqMonitorCommad} from '../../service/getData'
  export default {
    name: 'monitor',
    data () {
      return {
        errorList: [],
        successList: [],
        monitorList: [],
        viewId: null,
        infoId: null,
        detailId: null,
        activeItem: null,
        detailName: null
      }
    },
    components: {
      homeNav
    },
    mounted () {
      this.initData()
    },
    methods: {
      async initData () {
        this.refreshErrorData()
        this.refreshMonitorTree()
      },
      tableRowClassName ({row, rowIndex}) {
        return 'error-row'
      },
      successTableRowName ({row, rowIndex}) {
        return 'success-row'
      },
      async refreshErrorData () {
        let req = 'monitorState=1'
        this.errorList = await reqMonitorError(req)

        if (this.errorList.code === 'S') {

        } else {}
      },
      async refreshMonitorTree () {
        this.monitorList = await reqMonitors()
      },
      async initSuccessData (viewId, infoId, detailId, detailName, event) {
        this.viewId = viewId
        this.infoId = infoId
        this.detailId = detailId
        this.detailName = detailName
        if (this.activeItem) {
          this.activeItem.classList.remove('active')
          event.currentTarget.classList.add('active')
          this.activeItem = event.currentTarget
        } else {
          event.currentTarget.classList.add('active')
          this.activeItem = event.currentTarget
        }
        let req = 'monitorViewId=' + viewId + '&monitorInfoId=' + infoId + '&monitorDetailId=' + detailId + '&monitorState=0'
        this.successList = await reqMonitorSuccess(req)
      },
      async refreshSuccessData () {
        if (this.viewId && this.infoId && this.detailId) {
          let req = 'monitorViewId=' + this.viewId + '&monitorInfoId=' + this.infoId + '&monitorDetailId=' + this.detailId
          this.successList = await reqMonitorCommad(req)
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../style/setting.less";
  @import "../../style/common.less";

  .monitor {
    background-color: #F7F8F9;
  }

  .source-header {
    padding: 30px 0;
    .source-header_title {
      font-size: 24px;
      vertical-align: middle;
    }

    .source-header_button {
      margin: 0 5px;
      float: right;
    }
  }

  .monitor-sidebar {
    width: 240px;
    position: fixed;
    top:0;
    bottom: 0;
    margin-top: 80px;
    transition: padding-top .3s;

    overflow: hidden;

    .scroll-wrapper {
      height: 100%;
      overflow-x: auto;
      overflow: scroll;
      padding-top: 50px;

      .siderbar-title {
        font-size: 24px;
        padding: 10px 0;
      }

      .first-title {
        font-size: 16px;
        font-weight: 400;
        padding: 3px 0;
      }

      .second-title {
        font-size: 16px;
        font-weight: 400;
        padding: 3px 0 3px 15px;
      }

      .third-title {
        font-size: 14px;
        font-weight: 400;
        padding: 3px 0 3px 15px;

        &:hover,
        &.active {
          color: @purple;
        }
      }
    }
  }

  .monitor-content {
    padding-left: 240px;
    box-sizing: border-box;
    padding-bottom: 240px;
  }
</style>
<style lang="less">
  @import "../../style/setting.less";
  @import "../../style/common.less";

  .el-table{
    .error-row {
      color: @red;
    }

    .success-row {
      color: @green;
    }
  }
</style>
