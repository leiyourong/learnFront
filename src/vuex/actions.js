import { LOGIN } from './types'

export default {
  login ({ dispatch },payload) {
    console.log('action')
    dispatch(LOGIN, payload)
  }
}
