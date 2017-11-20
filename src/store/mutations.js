import {
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT,
  UPDATE_WORKSPACE
} from './mutation-types.js'

import {setStore, removeStore} from '../config/mUtils'

export default {
  [ACCOUNT_LOGIN] (state, info) {
    state.username = info.username
    state.login = true
    state.user_id = info.user_id
    state.workspace = info.workspace
    setStore('user_id', info.user_id)
  },
  [ACCOUNT_LOGOUT] (state) {
    state.username = ''
    state.login = false
    state.user_id = null
    state.workspace = null
    removeStore(('session'))
  },
  [UPDATE_WORKSPACE] (state, workspace) {
    state.workspace = workspace
  }
}
