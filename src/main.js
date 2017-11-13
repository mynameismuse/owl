// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import FastClick from 'fastclick'

import 'font-awesome/css/font-awesome.css'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import store from './store'
import {getStore} from './config/mUtils'

Vue.config.productionTip = false
Vue.use(ElementUI)

if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
    FastClick.attach(document.body)
  })
}

router.beforeEach((to, from, next) => {
  if (to.meta.auth) {
    if (getStore('session')) {
      next()
    } else {
      next({path: '/login', query: {referrer: to.fullPath}})
    }
  } else {
    if (getStore('session')) {
      if (to.name === 'login' || to.name === 'register') {
        next({path: '/home/mepay'})
      } else {
        next()
      }
    } else {
      next()
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
