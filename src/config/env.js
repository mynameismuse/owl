// let baseUrl = 'http://127.0.0.1:8088'
let baseUrl = ''

if (process.env.NODE_ENV === 'development') {
  baseUrl = 'http://192.168.7.121:8088'
} else if (process.env.NODE_ENV === 'production') {
  baseUrl = '$' + '{data.dataview.url}'
}
export {
  baseUrl
}
