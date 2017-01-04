import Vue from 'vue'
import Router from 'vue-router'
import router from './routes/index'
import store from './vuex/modules'

if (module.hot) {
  module.hot.accept()
}

new Vue({
  store,
  el: '#app',
  router
})
