import Vuex from 'vuex'
import Vue from 'vue'
import {LOGIN} from './types'

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
  state,
  mutations
})
