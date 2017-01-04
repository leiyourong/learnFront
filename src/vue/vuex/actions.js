import { REGISTER,LOGIN } from './types'
import { createAction } from 'vuex-actions'

export default {
  login: createAction(LOGIN, payload =>  {
    return payload
  }),
  register ({ dispatch },payload) {
    dispatch( REGISTER, payload)
  }
}
