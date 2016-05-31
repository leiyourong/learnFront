<template>
    <r-label  value="用户名:" ></r-label>
    <r-input id="username" place-holder="请输入用户名"></r-input><br>
    <r-label  value="密码:"></r-label>
    <r-input id="password" place-holder="请输入密码"></r-input><br>
    <r-button value="确定"></r-button>
    <div v-for="userInfo in userInfos">
      账号为:{{userInfo.username}}  密码为:{{userInfo.password}}
    </div>
</template>

<script>
import Vue from 'vue'
import actions from '../vuex/actions'
const login = actions.login
import RLabel from './r-label.vue'
import RInput from './r-input.vue'
import RButton from './r-button.vue'
export default {
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
  width:75%;
  margin:20px 0 0 0;
}
</style>
