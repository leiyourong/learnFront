import Vue from 'vue'
import '../../public/css/vue.css'
Vue.filter('addChar', function (value,char,message) {
  return value+'_'+char+'_'+message
})

const myVue = new Vue({
  el: '#app',
  data: {
    message:'Hello VueJs!',
    firNum: 0,
    todos:[{
      text:'Js'
    },{
      text:'Java'
    }],
    greeting:true,
    secNum:0,
    t: '789'
  },
  computed:{
    resNum(){
      return this.firNum-this.secNum
    }
  },
  methods:{
    reverseMessage(event){
      this.message = this.message.split('').reverse().join('')
    }
  }
})

Vue.transition('expand', {
  beforeEnter: function (el) {
    console.log('beforeEnter')
  },
  enter: function (el) {
    console.log('enter')
  },
  afterEnter: function (el) {
    console.log('afterEnter')
  },
  enterCancelled: function (el) {
    console.log('enterCancelled')
  },

  beforeLeave: function (el) {
    console.log('beforeLeave')
  },
  leave: function (el) {
    console.log('leave')
  },
  afterLeave: function (el) {
    console.log('afterLeave')
  },
  leaveCancelled: function (el) {
    console.log('leaveCancelled')
    // handle cancellation
  }
})
// var Child = Vue.component('child', {
//   template: '<div>A Child!</div>'
// })
Vue.component('tree',{
  name: 'tree',
  data: function(){
    return {
      t: this.name
    }
  },
  props:{
    'name':String
  },
  methods:{
    pass:function(value){
      console.log('2'+value)
    }
  },
  events:{
    'test':function(value){
      var child = this.$refs.profile
      console.log(child)
      console.log('2_'+value)
      this.$off('test3').$on('test3',function(value){
        console.log('4_'+value)
        this.$broadcast('test4',value)
      })
      this.$emit('test2',value)
    },
    'test2':function(value){
      console.log('3_'+value)
      this.$emit('test3',value)
    }
  },
  template: '<div><slot></slot>A custom component!{{t}}<child1  v-ref:profile></child1>{{name}}</div>',
  components: {
    'child1': {
      methods:{
        pass:function(value){
          console.log('1_'+value)
          this.$dispatch('test',value)
        }
      },
      events:{
        'test4':function(value){
          console.log('5_'+value)
        }
      },
      data: function(){
        return {
          t: this.$parent.t + '12121212'
        }
      },
      template: '<div>A Child!{{t}}<input type="button" @click="pass(this.t)" value="传值给父节点" /></div>'
    }
  }
})
Vue.component('async-tree', function (resolve, reject) {
  setTimeout(function () {
    resolve({
      props:{
        'cName':String
      },
      template: '<div>我是两秒后才出来的!{{cName}}</div>'
    })
  }, 2000)
})
// 注册
// Vue.component('tree', {
//   template: '<div>A custom component!</div>',
//   name:'xxx'
// })
// 创建根实例
new Vue({
  el: '#example'
})

Vue.directive('my-test',{
  params:['param'],
  bind: function () {
    console.log('bind')
  },
  update: function (newValue, oldValue) {
    console.log(this.params.param)
  },
  unbind: function () {
    console.log('unbind')
  }
})

new Vue({
  el: '#test',
  data: {
    msg: 'hello!'
  }
})
