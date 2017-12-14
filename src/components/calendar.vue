<template>
  <el-col :lg="6" :md="12" :sm="24">
    <div class="calendar-wrapper">
      <div class="calendar-title">
        {{ title }}
        <div class="calendar-tooltip">
          <el-tooltip :content="tooltip" placement="left" effect="dark">
            <i class="calendar-tooltip_icon el-icon-info"></i>
          </el-tooltip>
        </div>
        <div class="calendar-content">
          <div class="calendar-subsitle">
            {{ date.getFullYear() }} 年 {{ date.getMonth() + 1 }} 月 {{ date.getDate() }} 日
          </div>
          <div class="calendar-time">
            {{ date.getHours() }} : {{ formatMinute }} : {{ formatSeconds }}
          </div>
        </div>
      </div>
    </div>
  </el-col>
</template>
<script type="text/babel">
  export default {
    data () {
      return {
        title: '当前时间',
        date: null,
        timeFun: null,
        tooltip: '当前系统时间'
      }
    },
    computed: {
      formatSeconds: function () {
        if (this.date.getSeconds() < 10) {
          return '0' + this.date.getSeconds()
        } else {
          return this.date.getSeconds()
        }
      },
      formatMinute: function () {
        if (this.date.getMinutes() < 10) {
          return '0' + this.date.getMinutes()
        } else {
          return this.date.getMinutes()
        }
      },
      formatHour: function () {
        if (this.date.getHours() < 10) {
          return '0' + this.date.getHours()
        } else {
          return this.date.getHours()
        }
      }
    },
    created () {
      var date = new Date()
      this.date = date
      var self = this

      var fun = setInterval(function () {
        self.date = new Date()
      }, 1000)

      this.timeFun = fun
    }
  }
</script>
<style lang="less" scoped>
  @import "../style/setting.less";
  @import "../style/common.less";

  .el-col {
    padding: 20px 20px;
    min-height: 250px;

    .calendar-wrapper {
      background-color: @white;
      border-radius: 4px;
      padding: 1em;
      transition: all .2s linear;
      height: 100%;
      min-height: 250px;

      &:hover {
        box-shadow: 0 10px 10px 0 rgba(14,35,74,.11);
      }

      .calendar-title {
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        color: @black;
        font-size: @title-font-size;
        padding: 5px 0;

        .calendar-tooltip {
          display: inline-block;
          float: right;
          font-size: 16px;

          .calendar-tooltip_icon {
            color: @grey;
            vertical-align: bottom;
          }
        }
      }

      .calendar-content {
        text-align: center;
        color: @purple;

        .calendar-subsitle {
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          color: @grey;
          font-size: 16px;
          padding: 15px 0;
          font-weight: 400;
          text-align: left;
        }

        .calendar-time {
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          color: @purple;
          font-size: 52px;
          padding: 20px 0;
          font-weight: 400;
        }
      }
    }
  }
</style>
