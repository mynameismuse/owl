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
