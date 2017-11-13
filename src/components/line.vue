<template>
  <div class="line-container">
    <div id="line" class="line-wrapper">

    </div>
    <div class="tip-tooltip" v-if="tooltipStatus">
      <el-tooltip :content="this.item.tooltip" placement="left" effect="dark">
        <i class="tip-tooltip_icon el-icon-info"></i>
      </el-tooltip>
    </div>
  </div>
</template>
<script type="text/babel">
  import highcharts from 'highcharts'
  require('highcharts/modules/exporting')(highcharts)

  export default {
    data () {
      return {
        chart: ''
      }
    },
    props: ['item'],
    computed: {
      tooltipStatus: function () {
        if (this.item.tooltip) {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      drawLine () {
        // Export data
        highcharts.setOptions({
          lang: {
            contextButtonTitle: '图表导出菜单',
            printChart: '打印图表',
            downloadJPEG: '下载 JPEG 图片',
            downloadPDF: '下载 PDF 文件'
          }
        })
        var dafaultMenuItem = highcharts.getOptions().exporting.buttons.contextButton.menuItems
        highcharts.chart('line', {
          title: {
            text: this.item.title,
            align: 'left',
            margin: 50,
            x: 16,
            y: 30,
            style: {
              color: '#4d4d4d',
              fontSize: '18px'
            }
          },
          subtitle: {
            text: this.item.subtitle,
            align: 'left',
            x: 16,
            y: 60,
            style: {
              color: '#828c9c',
              fontSize: '16px',
              fontWeight: 300
            }
          },
          credits: {
            enabled: false
          },
          xAxis: {
            categories: this.item.categories
          },
          yAxis: {
            title: {
              text: this.item.yAxisTitle
            }
          },
          series: this.item.data,
          exporting: {
            buttons: {
              contextButton: {
                menuItems: [
                  dafaultMenuItem[0],
                  {
                    separator: true
                  },
                  dafaultMenuItem[3],
                  {
                    text: '下载 PDF 文件',
                    onclick: function () {
                      this.exportChart({
                        type: 'application/pdf'
                      })
                    }
                  }
                ],
                height: 40,
                width: 48,
                symbolSize: 24,
                symbolX: 23,
                symbolY: 23,
                symbolStrokeWidth: 2
              }
            }
          }
        })
      }
    },
    mounted () {
      this.$nextTick(function () {
        this.drawLine()
      })
    },
    watch: {
      'item' () {
        this.drawLine()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../style/setting.less";
  @import "../style/common.less";

  .line-container {
    width: 50%;
    padding: 20px 20px;
    box-sizing: border-box;
    float: left;
    position: relative;

    .line-wrapper  {
      transition: all .2s linear;

      &:hover {
        box-shadow: 0 10px 10px 0 rgba(14,35,74,.11);
      }
    }

    .tip-tooltip {
      position: absolute;
      top: 45px;
      right: 80px;
      color: #828c9c;
    }
  }
</style>
