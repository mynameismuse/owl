<template>
  <div class="chart-container">
    <div class="chart-wrapper" v-bind:id="chartId">

    </div>
    <div class="tip-tooltip" v-if="tooltipStatus">
      <el-tooltip :content="tooltip" placement="left" effect="dark">
        <i class="tip-tooltip_icon el-icon-info"></i>
      </el-tooltip>
    </div>
  </div>
</template>
<script type="text/babel">
  import highcharts from 'highcharts'
  require('highcharts/modules/exporting')(highcharts)

  export default {
    data: function () {
      return {
        chart: '',
        tooltip: 'A tooltip is used to tag the panel'
      }
    },
    props: ['chartId', 'chartTitle', 'chartSubtitle'],
    computed: {
      tooltipStatus: function () {
        if (this.tooltip) {
          return true
        } else {
          return false
        }
      },
      title: function () {
        if (this.chartTitle === '') {
          return 'Summary'
        } else {
          return this.chartTitle
        }
      },
      subtitle: function () {
        if (this.chartSubtitle === '') {
          return ''
        } else {
          return this.chartSubtitle
        }
      }
    },
    methods: {
      draw () {
        // Export data
        highcharts.setOptions({
          lang: {
            contextButtonTitle: '图表导出菜单',
            downloadJPEG: '下载 JPEG 图片',
            downloadPDF: '下载 PDF 文件',
            downloadPNG: '下载 PNG 文件',
            downloadSVG: '下载 SVG 文件'
          }
        })
        var dafaultMenuItem = highcharts.getOptions().exporting.buttons.contextButton.menuItems
        highcharts.chart(this.chartId, {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false
          },
          title: {
            text: this.title,
            align: 'left',
            margin: 50,
            x: 16,
            y: 32,
            style: {
              color: '#4d4d4d',
              fontSize: '24px'
            }
          },
          subtitle: {
            text: this.subtitle,
            align: 'left',
            x: 16,
            y: 64,
            style: {
              color: '#828c9c',
              fontSize: '18px',
              fontWeight: 300
            }
          },
          credits: {
            enabled: false
          },
          tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: 'pointer',
              dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                style: {
                  color: (highcharts.theme && highcharts.theme.contrastTextColor) || 'black'
                }
              },
              showInLegend: true
            }
          },
          series: [{
            type: 'pie',
            name: '浏览器访问量占比',
            data: [
              ['Firefox', 45.0],
              ['IE', 26.8],
              {
                name: 'Chrome',
                y: 12.8,
                sliced: true,
                selected: true
              },
              ['Safari', 8.5],
              ['Opera', 6.2],
              ['其他', 0.7]
            ]
          }],
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
                  },
                  {
                    text: '自定义项目',
                    onclick: function () {
                      alert('自定义项目')
                    }
                  },
                  dafaultMenuItem[5],
                  dafaultMenuItem[1],
                  {
                    text: '跳转链接',
                    onclick: function () {
                      window.location.href = 'https://www.hcharts.cn'
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
        this.draw()
      })
    }
  }
</script>
<style lang="less" scoped>
  @import "../style/setting.less";
  @import "../style/common.less";

  .chart-container {
    width: 50%;
    padding: 20px 20px;
    box-sizing: border-box;
    float: left;
    position: relative;

    .chart-wrapper  {
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
