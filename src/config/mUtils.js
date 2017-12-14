/**
* 存储localStorage
*/
export const setStore = (name, content) => {
  if (!name) return
  if (typeof content !== 'string') {
    content = JSON.stringify(content)
  }
  window.localStorage.setItem('session', content)
}

/**
* 获取localStorage
*/
export const getStore = name => {
  if (!name) return
  return window.localStorage.getItem(name)
}

/**
* 删除localStorage
*/
export const removeStore = name => {
  if (!name) return
  window.localStorage.removeItem(name)
}

/**
 * 拼接请求串
 * @param obj
 * @returns {string}
 */
export const parseReq = (obj) => {
  var result = ''
  for (var item in obj) {
    item = item.replace(/\+/g, '%2B')
    obj[item] = obj[item].replace(/\+/g, '%2B')
    result = result + item + '=' + obj[item] + '&'
  }
  return result
}
