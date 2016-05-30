<template>
    <r-label  value="用户名:"></r-label>
    <r-input id="username" place-holder="请输入用户名"></r-input><br>
    <r-label  value="密码:"></r-label>
    <r-input id="password" place-holder="请输入密码"></r-input><br>
    <r-button value="确定"></r-button>
</template>

<script>
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
      alert('用户名为：'+this.userName+'\n'+'密码为：'+this.passWord)
    }
  },
  components: {
    RLabel,
    RInput,
    RButton
  }
}
</script>
<style>
.r-button{
  margin-top:30px;
  font-size:25px;
  height:40px;
}
.r-label{
  display:inline-block;
  width:25%;
  margin:20px 0 0 0;
}
</style>
