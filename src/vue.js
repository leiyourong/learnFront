import Vue from 'vue'

new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js!',
    todos:[{
      text:'JS'
    },{
      text:'JAVA'
    }]
  },
  methods:{
    reverseMessage: function(){
      this.message = this.message.split('').reverse().join('')
    }
  }
})
