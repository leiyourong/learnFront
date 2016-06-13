<template>
  <div class="container">
    <template v-if="!isLogin">
      <r-label value="用户名:" ></r-label>
      <template v-if="!registerSuc">
        <r-input id="username" place-holder="请输入用户名" ref="username"></r-input><br>
      </template>
      <template v-if="registerSuc">
        <r-label :value="userInfos[userInfos.length-1].username" ></r-label><br>
      </template>
      <r-label  value="密码:"></r-label>
      <template v-if="!registerSuc">
        <r-input id="password" place-holder="请输入密码"></r-input><br>
      </template>
      <template v-if="registerSuc">
        <r-label  :value="userInfos[userInfos.length-1].password" ></r-label><br>
      </template>
    </template>
    <template v-if="isLogin">
      <r-label value="HelloVue"></r-label><br>
    </template>
    <r-button id="bt1" value="登录"></r-button>
    <r-button id="bt2" value="注册"></r-button>
    <div v-for="userInfo in userInfos">
      账号为:{{userInfo.username}}  密码为:{{userInfo.password}}
    </div>
    <a v-link="{ path: '/about' }">Go to about</a>
    <a v-link="{ path: 'child', append: true }">child</a>
    <a href="javascript:;" @click="_error">error</a>
    <router-view></router-view>
  </div>
</template>

<script>
import actions from '../vuex/actions'
const login = actions.login
const register = actions.register
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
  methods:{
    _error(){
      this.$router.go('/error')
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
    _buttonClick(btName){
      const loginInfo = {
        userName:this.userName,
        passWord:this.passWord
      }
      if(btName === '登录'){
        this.login(loginInfo)
      }else if(btName === '注册'){
        this.register(loginInfo)
      }
      this.userName = ""
      this.passWord = ""
    }
  },
  components: {
    RLabel,
    RInput,
    RButton
  },
  vuex: {
    actions: {
      login,
      register
    },
    getters: {
      userInfos:state => state.userInfo,
      isLogin:state => state.isLogin,
      registerSuc:state => state.registerSuc
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
#bt1,#bt2{
  width:48%;
  display: inline;
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
#hellov{
  font-size:50px;
  text-align: center;
  width:100%;
}
</style>
