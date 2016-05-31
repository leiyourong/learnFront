import Vue from 'vue'
import App from './app.vue'
import store from '../vuex/modules'
/* eslint-disable no-new */
new Vue({
  store,
  el: 'body',
  components: { App }
})
