import Vue from 'vue'
import VueRouter from 'vue-router'
import routerMap from './routerMap'
/* eslint-disable no-new */

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'hash', // 默认
  linkActiveClass: 'link-active',
  routes: routerMap
})

router.beforeEach((to, from, next) => {
  console.log('所有路由切换我都会被调用---beforeEach')
  next()
})

router.afterEach(function(transition) {
  console.log('快要进入激活状态啦---afterEach')
// router.push('/error')
})

export default router
