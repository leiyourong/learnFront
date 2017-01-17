import Vuex from 'vuex'
import Vue from 'vue'
import createLogger from 'vuex/dist/logger'
import actions from '../vuex/actions'
import modules from '../vuex/modules'
import doubiPlugins from '../plugins/doubi'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createLogger(), doubiPlugins],
  ...modules,
  actions
})
