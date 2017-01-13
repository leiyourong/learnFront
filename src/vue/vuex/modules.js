import Vuex from 'vuex'
import Vue from 'vue'
import { REGISTER, LOGIN } from './types'
import createLogger from 'vuex/dist/logger'
import actions from './actions'
Vue.use(Vuex)

const state = {
  userInfo: [],
  isLogin: false,
  registerSuc: false
}

const mutations = {
  [LOGIN] (state,payload) {
    state['registerSuc'] = false

    if (payload['username'] !== '' && payload['password'] !== '') {
      for (let i=0; i<state['userInfo'].length; i++) {
        const user = state['userInfo'][i]
        if(user['username'] === payload['username'] && user['password'] === payload['password']){
          state['isLogin'] = true
          return;
        }
      }
    }
    state['isLogin'] = false
  },
  [REGISTER] (state,payload) {
    state['registerSuc'] = false
    if(payload['username']!=='' && payload['password']!==''){
      state['userInfo'].push({
        username: payload['username'],
        password: payload['password'],
      })
      state['registerSuc'] = true
    }
  }
}

const getters = {
  userInfos: state => state.userInfo,
  isLogin: state => state.isLogin,
  registerSuc: state => state.registerSuc
}

export default new Vuex.Store({
  plugins: [createLogger()],
  state,
  getters,
  mutations,
  actions
})
