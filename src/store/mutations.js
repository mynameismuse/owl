import {
  ACCOUNT_LOGIN,
  ACCOUNT_LOGOUT
} from './mutation-types.js'

import {setStore, removeStore} from '../config/mUtils'

export default {
  [ACCOUNT_LOGIN] (state, info) {
    state.username = info.username
    state.login = true
    setStore('user_id', info.user_id)
  },
  [ACCOUNT_LOGOUT] (state) {
    state.username = ''
    state.login = false
    removeStore(('session'))
  }
}
