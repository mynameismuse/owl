<template>
  <el-col :lg="12" :md="12" :sm="24">
    <div :id="areaId" class="area-wrapper">

    </div>
    <div class="tip-tooltip" v-if="tooltipStatus">
      <el-tooltip :content="this.item.tooltip" placement="left" effect="dark">
        <i class="tip-tooltip_icon el-icon-info"></i>
      </el-tooltip>
    </div>
  </el-col>
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
      },
      areaId: function () {
        var tmpId = Math.ceil(Math.random() * 35)
        return 'area' + tmpId
      }
    },
    methods: {
      drawArea () {
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
        highcharts.chart(this.areaId, {
          chart: {
            type: 'area'
          },
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
            categories: this.item.categories,
            allowDecimals: false,
            labels: {
              formatter: function () {
                return this.value // clean, unformatted number for year
              }
            }
          },
          yAxis: {
            title: {
              text: this.item.yAxisTitle
            },
            labels: {
              formatter: function () {
                return this.value / 1000 + 'k'
              }
            }
          },
          tooltip: {
            pointFormat: '{series.name} <b>{point.y:,.0f}</b>'
          },
          plotOptions: {
            area: {
              marker: {
                enabled: false,
                symbol: 'circle',
                radius: 2,
                states: {
                  hover: {
                    enabled: true
                  }
                }
              }
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
        this.drawArea()
      })
    },
    watch: {
      'item' () {
        this.drawArea()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../style/setting.less";
  @import "../style/common.less";

  .el-col {
    padding: 20px 20px;
    position: relative;

    .area-wrapper  {
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
