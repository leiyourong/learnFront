import Vue from 'vue'

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
    secNum:0
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
