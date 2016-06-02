import Vuex from 'vuex'
import Vue from 'vue'
import {LOGIN} from './types'
import createLogger from 'vuex/logger'

Vue.use(Vuex)

const state = {
  userInfo:[]
}

const mutations = {
  [LOGIN] (state,payload) {
    if(payload['userName']!=='' && payload['passWord']!==''){
      state['userInfo'].push({
        username:payload['userName'],
        password:payload['passWord'],
      })
    }
  }
}

export default new Vuex.Store({
  middlewares: [createLogger()],
  state,
  mutations
})
