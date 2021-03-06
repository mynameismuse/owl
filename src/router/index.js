import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login/login'
import register from '@/page/register/register'
import navigation from '@/page/navigation/navigation'
import createTeam from '@/page/navigation/children/createTeam'
import joinTeam from '@/page/navigation/children/joinTeam'
import home from '@/page/home/home'
import monitor from '@/page/monitor/monitor'
import monitorCard from '@/page/monitor/children/monitorCard'
import monitorDetail from '@/page/monitor/children/monitorDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: login,
      meta: {
        auth: false
      }
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {
        auth: false
      }
    },
    {
      path: '/register',
      name: 'register',
      component: register,
      meta: {
        auth: false
      }
    },
    {
      path: '/home/:id',
      name: 'home',
      component: home,
      props: true,
      force: true,
      meta: {
        auth: true
      }
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: monitor,
      meta: {
        auth: true
      },
      children: [
        {
          path: 'monitor/monitorCard',
          name: 'monitorCard',
          component: monitorCard,
          meta: {
            auth: true
          }
        },
        {
          path: 'monitor/:viewId/:infoId/:detailId/:viewName/:infoName/:detailName',
          name: 'monitorDetail',
          component: monitorDetail,
          force: true,
          props: true,
          meta: {
            auth: true
          }
        }
      ]
    },
    {
      path: '/navigation',
      name: 'navigation',
      component: navigation,
      meta: {
        auth: true
      },
      children: [
        {
          path: '/navigation/createTeam',
          name: 'createTeam',
          component: createTeam,
          meta: {
            auth: true
          }
        },
        {
          path: '/navigation/joinTeam',
          name: 'joinTeam',
          component: joinTeam,
          meta: {
            auth: true
          }
        }
      ]
    }
  ]
})
