import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'

Vue.use(Vuex)

const state = {
  login: false, // User Login Session
  username: '',
  workspace: null, // Username
  user_id: null
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
