import Vue from 'vue'
import Router from 'vue-router'
/* eslint-disable no-new */
if (module.hot) {
  module.hot.accept()
}

Vue.use(Router)
var App = Vue.extend({})
const router = new Router({
  hashbang:true,
  history:false,
  linkActiveClass: 'link-active',
  transitionOnLoad: false
})
router.beforeEach(function (transition) {
  console.log('所有路由切换我都会被调用---beforeEach')
  transition.next()
})
router.afterEach(function (transition) {
  console.log('快要进入激活状态啦---afterEach')
  // router.go('/error')
})
router.on('/', {
  component: {
    template: '<div>on</div>'
  }
})
router.map({
  '/': {
    component: {
      template: '<p>Welcome</p>'
    }
  },
  '/about': {
    component: {
      template: '<p>about</p>'
    },
    subRoutes: {
      '/child': {
        name:'child',
        component: {
          template: '<p>嵌套路由</p>'
        }
      },
    }
  },
  '/login': {
    // component: App,
    component: function (resolve) {
      require(['./app.vue'], resolve)
    },
    subRoutes: {
      '/child': {
        component: {
          template: '<p>嵌套路由</p>'
        }
      },
    }
  },
  '/error': {
    component: {
      template: '<div>error</div>'
    }
  }
})
router.start(App, '#app')
