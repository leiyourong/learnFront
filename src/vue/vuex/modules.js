import Vuex from 'vuex'
import Vue from 'vue'
import { REGISTER, LOGIN } from './types'
import createLogger from 'vuex/logger'

Vue.use(Vuex)

const state = {
  userInfo:[],
  isLogin:false,
  registerSuc:false
}

const mutations = {
  [LOGIN] (state,payload) {
    state['registerSuc'] = false
    if(payload['userName']!=='' && payload['passWord']!==''){
      for(let i=0; i<state['userInfo'].length; i++){
        const user = state['userInfo'][i]
        if(user['username'] === payload['userName'] && user['password'] === payload['passWord']){
          state['isLogin'] = true
          return;
        }
      }
    }
    state['isLogin'] = false
  },
  [REGISTER] (state,payload) {
    state['registerSuc'] = false
    if(payload['userName']!=='' && payload['passWord']!==''){
      state['userInfo'].push({
        username:payload['userName'],
        password:payload['passWord'],
      })
      state['registerSuc'] = true
    }
  }
}

export default new Vuex.Store({
  middlewares: [createLogger()],
  state,
  mutations
})
