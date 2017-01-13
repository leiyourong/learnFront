import { REGISTER,LOGIN } from './types'

export default {
  [LOGIN] ({ commit },payload) {
    commit( LOGIN, payload)
  },
  [REGISTER] ({ commit },payload) {
    commit( REGISTER, payload)
  }
}
