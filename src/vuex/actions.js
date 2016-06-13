import { REGISTER,LOGIN } from './types'

export default {
  login ({ dispatch },payload) {
    dispatch( LOGIN, payload)
  },
  register ({ dispatch },payload) {
    dispatch( REGISTER, payload)
  }
}
