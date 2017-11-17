<template>
  <div class="tip-container">
    <div class="tip-wrapper">
      <div class="tip-title">
        {{ item.title }}
        <div class="tip-tooltip" v-if="tooltipStatus">
          <el-tooltip :content="item.tooltip" placement="left" effect="dark">
            <i class="tip-tooltip_icon el-icon-info"></i>
          </el-tooltip>
        </div>
      </div>
      <div class="tip-subtitle" v-bind:class="{ 'is-hidden': !subtitleStatus}">
        {{ item.subtitle }}
      </div>
      <div class="tip-text">
        {{ formatText }}
      </div>
      <div class="tip-trend" v-if="item.trend" v-bind:class="[trendClass]">
        {{ formatTrend }}
        <i class="trend-icon el-icon-caret-top"></i>
      </div>
      <div class="tip-desc">
        {{ item.desc }}
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  export default {
    data () {
      return {
        trendClass: ''
      }
    },
    props: ['item'],
    computed: {
      subtitleStatus: function () {
        if (this.item.subtitle) {
          return true
        } else {
          return false
        }
      },
      tooltipStatus: function () {
        if (this.item.tooltip) {
          return true
        } else {
          return false
        }
      },
      formatText: function () {
        let tmp = parseFloat(this.item.text).toString()
        if (isNaN(tmp)) {
          return '没有数据'
        } else {
          let str = ''
          for (var i = this.item.text.length - 1, j = 1; i >= 0; i--, j++) {
            if (j % 3 === 0 && i !== 0) {
              str += this.item.text[i] + ','
              continue
            }
            str += this.item.text[i]
          }
          return str.split('').reverse().join('')
        }
      },
      formatTrend: function () {
        let tmp = parseFloat(this.item.trend).toString()
        if (isNaN(tmp)) {
          return false
        } else {
          if (tmp > 0) {
            this.trendClass = 'positive'
            return '+ ' + Math.floor(tmp * 100) / 100 + '%'
          } else if (tmp < 0) {
            this.trendClass = 'negative'
            return '- ' + Math.abs(Math.floor(tmp * 100) / 100) + '%'
          } else {
            return '0.00' + '%'
          }
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../style/setting.less";
  @import "../style/common.less";

  .tip-container {
    width: 25%;
    padding: 20px 20px;
    box-sizing: border-box;
    float: left;
    min-height: 250px;

    .tip-wrapper {
      background-color: @white;
      border-radius: 4px;
      padding: 1em;
      transition: all .2s linear;
      min-height: 250px;

      &:hover {
        box-shadow: 0 10px 10px 0 rgba(14,35,74,.11);
      }
    }

    .tip-title {
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      color: @black;
      font-size: @title-font-size;
      padding: 5px 0;

      .tip-tooltip {
        display: inline-block;
        float: right;
        font-size: 16px;

        .tip-tooltip_icon {
          color: @grey;
          vertical-align: bottom;
        }
      }
    }

    .tip-subtitle {
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      color: @grey;
      font-size: @subtitle-font-size;
      padding: 5px 0;
      font-weight: 300;

      &.is-hidden {
        display: none;
      }
    }

    .tip-text {
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      color: @purple;
      font-size: 42px;
      padding: 10px 0;
      font-weight: 400;
      word-wrap: break-word;
    }

    .tip-trend {
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      color: @purple;
      font-size: 20px;
      font-weight: 400;
      padding: 5px 0;
      word-wrap: break-word;

      &.positive {
        color: @green;
      }

      &.negative {
        color: @red;
        .trend-icon {
          transform: rotate(180deg);
        }
      }
    }

    .tip-desc {
      -ms-text-overflow: ellipsis;
      text-overflow: ellipsis;
      color: @grey;
      padding: 10px 0;
      font-weight: 300;
    }
  }
</style>
