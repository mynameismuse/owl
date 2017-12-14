import fetch from '../config/fetch'

/**
 * 登录
 * @param username
 * @param password
 * @returns {*}
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
 * 注册
 * @param username
 * @param password
 * @returns {{code: string, msg: string}}
 */
export const reqRegister = (username, password) => {
  return {
    code: 'F',
    msg: '暂不支持注册'
  }
}

/**
 * 加入工作组
 * @param username
 * @param workspace
 * @returns {*}
 */
export const reqJoin = () => fetch('/dataview/querydataviews', {}, 'POST', 'test')

/**
 * 创建工作组
 * @param username
 * @param password
 * @returns {{code: string, msg: string}}
 */
export const reqCreate = (username, password) => {
  return {
    code: 'F',
    msg: '暂时不支持创建工作组'
  }
}

/**
 * 请求视图
 * @param id
 */
export const reqData = (data) => fetch('/dataview/querydataviewdetails', {data}, 'POST', 'test')

export const reqMepay = () => fetch('/dataview/mepaydata', {
}, 'POST', 'test')

/**
 * 请求监控错误列表
 * @param data
 */
export const reqMonitorError = (data) => fetch('/monitor/monitorresult', {data}, 'POST', 'test')

/**
 * 请求树状图列表
 */
export const reqMonitors = () => fetch('/monitor/monitors', {}, 'POST', 'test')

/**
 * 请求监控成功列表
 * @param data
 */
export const reqMonitorSuccess = (data) => fetch('/monitor/monitorresult', {data}, 'POST', 'test')

/**
 * 请求执行脚本
 * @param data
 */
export const reqMonitorCommad = (data) => fetch('/monitor/monitorcommand', {data}, 'POST', 'test')
