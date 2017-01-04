import app from '../views/app.vue'

const routerMap = [{
    path: '/',
    component: {
      template: '<p>Welcome</p>'
    },
    meta: { 'msg': '我是可以带信息的' }
  },
  {
    path: '/about/:id',
    component: {
      template: '<p>about{{ $route.params.id }}</p>'
    },
    children: [{
      path: 'child',
      component: {
        template: '<p>嵌套路由</p>'
      },
    }]
  },
  {
    path: '/login',
    component: app,
    children: [{
      path: 'child',
      component: {
        template: '<p>嵌套路由</p>'
      }
    }]
  },
  {
    path: '/error',
    component: {
      template: '<div>error</div>'
    }
}]

export default routerMap
