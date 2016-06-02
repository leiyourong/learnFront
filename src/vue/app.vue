<template>
  <div class="container">
    <r-label  value="用户名:" ></r-label>
    <r-input id="username" place-holder="请输入用户名" ref="username"></r-input><br>
    <r-label  value="密码:"></r-label>
    <r-input id="password" place-holder="请输入密码"></r-input><br>
    <r-button value="确定"></r-button>
    <div v-for="userInfo in userInfos">
      账号为:{{userInfo.username}}  密码为:{{userInfo.password}}
    </div>
    <a v-link="{ path: '/about' }">Go to about</a>
    <a v-link="{ path: 'child', append: true }">child</a>
    <router-view></router-view>
  </div>
</template>

<script>
import actions from '../vuex/actions'
const login = actions.login
import Vue from 'vue'
import store from '../vuex/modules'
import RLabel from './r-label.vue'
import RInput from './r-input.vue'
import RButton from './r-button.vue'
export default {
  store,
  data:function(){
    return {
      defValue:'defValue',
      userName:'',
      passWord:''
    }
  },
  events:{
    _blur(el){
      const value = el.$el.value
      if(el.$el.id === 'username'){
        this.userName = value
      }else if(el.$el.id === 'password'){
        this.passWord = value
      }
    },
    _buttonClick(){
      console.log(this)
      const loginInfo = {
        userName:this.userName,
        passWord:this.passWord
      }
      this.login(loginInfo)
    }
  },
  components: {
    RLabel,
    RInput,
    RButton
  },
  vuex: {
    actions: {
      login
    },
    getters: {
      userInfos:state => state.userInfo,
    }
  },
  route: {
    activate: function (transition) {
      console.log('激活app.vue啦!---activate')
      transition.next()
    },
    deactivate: function (transition) {
      console.log('离开app.vue了!---deactivate')
      transition.next()
    },
    canActivate: function (transition) {
      console.log('判断能不能激活先---canActivate!')
      transition.next()
    },
    canDeactivate: function (transition) {
      console.log('判断能不能离开---canDeactivate!')
      transition.next()
    },
    data: function (transition) {
      console.log('加载数据---data!')
      transition.next()
    },
    canReuse: function (transition) {
      console.log('判断能否重用---canReuse!')
      //transition.next()
    }
  }
}
</script>
<style>
.r-button{
  margin:30px 0 10px 0;
  font-size:25px;
  height:40px;
}
.r-label{
  display:inline-block;
  width:21%;
  margin:20px 0 0 0;
}
.r-input{
  width:74%;
  margin:20px 0 0 0;
}
</style>
