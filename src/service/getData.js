/**
* 登录
*/
export const reqLogin = (username, password) => {
  if (username === '123' && password === '123') {
    return {
      code: 'S',
      username: 'wanghao',
      user_id: '110001',
      workspace: null
    }
  } else {
    return {
      code: 'F',
      msg: '用户名或密码有误'
    }
  }
}

/**
 * 加入工作组
 */
export const reqJoin = (username, workspace) => {
  if (username !== null && workspace === '123') {
    return {
      code: 'S',
      username: username,
      workspace: workspace
    }
  } else {
    return {
      code: 'F',
      msg: '您输入的工作组有误'
    }
  }
}

/**
 * 获取首页渲染模版
 */
export const reqHome = (username, workspace, id) => {
  if (id === 'mepay') {
    return {
      code: 'S',
      data: {
        tips: [{
          title: '行销设备签约总数',
          subtitle: '2017年11月16日',
          tooltip: '行销设备当前所有渠道签约总数',
          text: '15121241',
          trend: '10.3',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }, {
          title: '行销设备总交易额',
          subtitle: '2017年11月16日',
          tooltip: '这是一条数据tip',
          text: '14141245121',
          trend: '-2.3',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }, {
          title: '行销设备总用户量',
          subtitle: '2017年11月16日',
          tooltip: '这是一条数据tip',
          text: '132131',
          trend: '-2.1',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }],
        line: {
          title: '直线图',
          subtitle: '直线图副标题',
          tooltip: '直线图tooltip',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          yAxisTitle: '用户量',
          data: [{
            data: [1, 2, 3, 14, 5, 6, 17, 8, 9],
            name: 'Right'
          }, {
            data: [5, 6, 7, 8, 9, 10, 11, 12, 13],
            name: 'Center'
          }, {
            data: [9, 10, 11, 12, 13, 14, 15, 16, 17],
            name: 'Left'
          }]
        },
        area: {
          title: '面积图',
          subtitle: '面积图副标题',
          tooltip: '面积图tooltip',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          yAxisTitle: '用户量',
          data: [{
            name: '亚洲',
            data: [502, 635, 609, 947, 1402, 3634, 5268]
          }, {
            name: '非洲',
            data: [106, 107, 111, 133, 221, 767, 1766]
          }, {
            name: '欧洲',
            data: [163, 203, 576, 408, 547, 729, 628]
          }, {
            name: '美洲',
            data: [18, 31, 54, 156, 339, 818, 1201]
          }, {
            name: '大洋洲',
            data: [2, 2, 2, 6, 13, 30, 46]
          }]
        },
        bar: {
          title: '柱状图',
          subtitle: '柱状图副标题',
          tooltip: '柱状图tooltip',
          categories: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ],
          yAxisTitle: '降雨量 (mm)',
          data: [{
            name: '东京',
            data: [49.9, 71.5, 156.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }, {
            name: '纽约',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
          }, {
            name: '伦敦',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
          }, {
            name: '柏林',
            data: [42.4, 33.2, 34.5, 50.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
          }]
        },
        pie: {
          title: '饼状图',
          subtitle: '饼状图副标题',
          tooltip: '饼状图tooltip',
          name: '浏览器访问量占比',
          data: [
            ['Firefox', 35.0],
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
        }
      }
    }
  } else if (id === 'bcc') {
    return {
      code: 'S',
      data: {
        tips: [{
          title: '行销设备签约总数2',
          subtitle: '2017年11月16日',
          tooltip: '行销设备当前所有渠道签约总数',
          text: '1098098711',
          trend: '5.3',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }, {
          title: '沃账户用户量2',
          subtitle: '2017年11月16日',
          tooltip: '这是一条数据tip',
          text: '1098098711',
          trend: '-5.3',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }, {
          title: '沃账户用户量2',
          subtitle: '2017年11月16日',
          tooltip: '这是一条数据tip',
          text: '1098098711',
          trend: '-2.1',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }],
        line: {
          title: '直线图',
          subtitle: '直线图副标题',
          tooltip: '直线图tooltip',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          yAxisTitle: '用户量',
          data: [{
            data: [1, 2, 3, 4, 15, 6, 7, 8, 9],
            name: 'Right'
          }, {
            data: [5, 6, 7, 8, 9, 10, 11, 12, 13],
            name: 'Center'
          }, {
            data: [9, 10, 11, 12, 13, 14, 15, 16, 17],
            name: 'Left'
          }]
        },
        area: {
          title: '面积图',
          subtitle: '面积图副标题',
          tooltip: '面积图tooltip',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          yAxisTitle: '用户量',
          data: [{
            name: '亚洲',
            data: [502, 1635, 809, 947, 1402, 3634, 5268]
          }, {
            name: '非洲',
            data: [106, 107, 111, 133, 221, 767, 1766]
          }, {
            name: '欧洲',
            data: [163, 203, 276, 408, 547, 729, 628]
          }, {
            name: '美洲',
            data: [18, 31, 54, 156, 339, 818, 1201]
          }, {
            name: '大洋洲',
            data: [2, 2, 2, 6, 13, 30, 46]
          }]
        },
        bar: {
          title: '柱状图',
          subtitle: '柱状图副标题',
          tooltip: '柱状图tooltip',
          categories: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ],
          yAxisTitle: '降雨量 (mm)',
          data: [{
            name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }, {
            name: '纽约',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
          }, {
            name: '伦敦',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
          }, {
            name: '柏林',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
          }]
        },
        pie: {
          title: '饼状图',
          subtitle: '饼状图副标题',
          tooltip: '饼状图tooltip',
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
        }
      }
    }
  } else if (id === 'ecfront') {
    return {
      code: 'S',
      data: {
        tips: [{
          title: '行销设备签约总数3',
          subtitle: '2017年11月16日',
          tooltip: '行销设备当前所有渠道签约总数',
          text: '1098098711',
          trend: '5.3',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }, {
          title: '沃账户用户量2',
          subtitle: '2017年11月16日',
          tooltip: '这是一条数据tip',
          text: '1098098711',
          trend: '-5.3',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }, {
          title: '沃账户用户量2',
          subtitle: '2017年11月16日',
          tooltip: '这是一条数据tip',
          text: '1098098711',
          trend: '-2.1',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }],
        line: {
          title: '直线图',
          subtitle: '直线图副标题',
          tooltip: '直线图tooltip',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          yAxisTitle: '用户量',
          data: [{
            data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
            name: 'Right'
          }, {
            data: [5, 6, 7, 8, 9, 10, 11, 12, 13],
            name: 'Center'
          }, {
            data: [9, 10, 11, 12, 13, 14, 15, 16, 17],
            name: 'Left'
          }]
        },
        area: {
          title: '面积图',
          subtitle: '面积图副标题',
          tooltip: '面积图tooltip',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          yAxisTitle: '用户量',
          data: [{
            name: '亚洲',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
          }, {
            name: '非洲',
            data: [106, 107, 111, 133, 221, 767, 1766]
          }, {
            name: '欧洲',
            data: [163, 203, 276, 408, 547, 729, 628]
          }, {
            name: '美洲',
            data: [18, 31, 54, 156, 339, 818, 1201]
          }, {
            name: '大洋洲',
            data: [2, 2, 2, 6, 13, 30, 46]
          }]
        },
        bar: {
          title: '柱状图',
          subtitle: '柱状图副标题',
          tooltip: '柱状图tooltip',
          categories: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ],
          yAxisTitle: '降雨量 (mm)',
          data: [{
            name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }, {
            name: '纽约',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
          }, {
            name: '伦敦',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
          }, {
            name: '柏林',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
          }]
        },
        pie: {
          title: '饼状图',
          subtitle: '饼状图副标题',
          tooltip: '饼状图tooltip',
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
        }
      }
    }
  } else if (id === 'mini') {
    return {
      code: 'S',
      data: {
        tips: [{
          title: '行销设备签约总数4',
          subtitle: '2017年11月16日',
          tooltip: '行销设备当前所有渠道签约总数',
          text: '1098098711',
          trend: '5.3',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }, {
          title: '沃账户用户量2',
          subtitle: '2017年11月16日',
          tooltip: '这是一条数据tip',
          text: '1098098712',
          trend: '-5.3',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }, {
          title: '沃账户用户量3',
          subtitle: '2017年11月16日',
          tooltip: '这是一条数据tip',
          text: '1098098711',
          trend: '-2.1',
          trendClass: '',
          desc: '沃账户11月16日当天沃账户留存和增长量'
        }],
        line: {
          title: '直线图2',
          subtitle: '直线图副标题',
          tooltip: '直线图tooltip',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          yAxisTitle: '用户量',
          data: [{
            data: [1, 10, 3, 4, 5, 6, 7, 8, 9],
            name: 'Right'
          }, {
            data: [5, 6, 7, 8, 9, 10, 11, 12, 13],
            name: 'Center'
          }, {
            data: [9, 10, 11, 12, 13, 14, 15, 16, 17],
            name: 'Left'
          }]
        },
        area: {
          title: '面积图',
          subtitle: '面积图副标题',
          tooltip: '面积图tooltip',
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          yAxisTitle: '用户量',
          data: [{
            name: '亚洲',
            data: [502, 635, 809, 947, 1402, 3634, 5268]
          }, {
            name: '非洲',
            data: [106, 107, 111, 133, 221, 767, 1766]
          }, {
            name: '欧洲',
            data: [163, 203, 276, 408, 547, 729, 628]
          }, {
            name: '美洲',
            data: [18, 31, 54, 156, 339, 818, 1201]
          }, {
            name: '大洋洲',
            data: [2, 2, 2, 6, 13, 30, 46]
          }]
        },
        bar: {
          title: '柱状图',
          subtitle: '柱状图副标题',
          tooltip: '柱状图tooltip',
          categories: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ],
          yAxisTitle: '降雨量 (mm)',
          data: [{
            name: '东京',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
          }, {
            name: '纽约',
            data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
          }, {
            name: '伦敦',
            data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]
          }, {
            name: '柏林',
            data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]
          }]
        },
        pie: {
          title: '饼状图',
          subtitle: '饼状图副标题',
          tooltip: '饼状图tooltip',
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
        }
      }
    }
  }
}
