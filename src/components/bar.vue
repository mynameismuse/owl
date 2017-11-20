<template>
  <div class="bar-container">
    <div class="bar-wrapper" :id="barId">

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
    props: ['item', 'index'],
    computed: {
      tooltipStatus: function () {
        if (this.item.tooltip) {
          return true
        } else {
          return false
        }
      },
      barId: function () {
        var tmpId = Math.ceil(Math.random() * 35)
        return 'bar' + tmpId
      }
    },
    methods: {
      drawBar () {
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
        highcharts.chart(this.barId, {
          chart: {
            type: 'column'
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
          credits: {
            enabled: false
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
          xAxis: {
            categories: this.item.categories,
            crosshair: true
          },
          yAxis: {
            min: 0,
            title: {
              text: this.item.yAxisTitle
            }
          },
          tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
            '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
          },
          plotOptions: {
            column: {
              pointPadding: 0.2,
              borderWidth: 0
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
        this.drawBar()
      })
    },
    watch: {
      'item' () {
        this.drawBar()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../style/setting.less";
  @import "../style/common.less";

  .bar-container {
     width: 50%;
     padding: 20px 20px;
     box-sizing: border-box;
     float: left;
     position: relative;

     .bar-wrapper  {
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
