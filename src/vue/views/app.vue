<template>
  <div class="container">
    <template v-if="!isLogin">
      <r-label value="用户名:"></r-label>
      <template v-if="!registerSuc">
        <r-input placeholder="请输入用户名" :value="username" @input="username = $event"></r-input><br>
      </template>
      <template v-if="registerSuc">
        <span>xxxxx</span>
        <!-- <r-label :value="userInfos[userInfos.length-1].username"></r-label><br> -->
      </template>

      <r-label  value="密码:"></r-label>
      <template v-if="!registerSuc">
        <r-input id="xpassword" placeholder="请输入密码"  :value="password" @input="password = $event"></r-input><br>
      </template>
      <template v-if="registerSuc">
        <r-label  :value="userInfos[userInfos.length-1].password"></r-label><br>
      </template>
    </template>

    <template v-if="isLogin">
      <r-label value="HelloVue"></r-label><br>
    </template>
    {{ registerSuc }}
    <r-button id="bt1" value="登录" @click.native="cLogin"></r-button>
    <r-button id="bt2" value="注册" @click.native="cRegister"></r-button>

    <div v-for="userInfo in userInfos">
      账号为:{{userInfo.username}}  密码为:{{userInfo.password}}
    </div>

    <router-link :to="{ path: '/about/2' }">Go to about2</router-link>
    <router-link :to="{ path: 'child' }">child</router-link>
    <a href="javascript:;" @click="_error">error</a>

    <router-view></router-view>
  </div>
</template>

<script>
import RLabel from '../component/label.vue'
import RInput from '../component/input.vue'
import RButton from '../component/button.vue'

import { mapActions, mapGetters } from 'vuex'
import { REGISTER, LOGIN } from '../vuex/types'

export default {
  data: function () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    _error () {
      this.$router.push('/error')
    },
    cLogin () {
      const loginInfo = {
        username: this.username,
        password: this.password
      }
      this.login(loginInfo)
    },
    cRegister () {
      const loginInfo = {
        username: this.username,
        password: this.password
      }
      this.register(loginInfo)
    },
    ...mapActions({
      login: LOGIN,
      register: REGISTER
    })
  },
  computed: {
    ...mapGetters([
      'userInfos',
      'isLogin',
      'registerSuc'
    ])
  },
  components: {
    RLabel,
    RInput,
    RButton
  },
  route: {
    beforeRouteEnter: function (transition) {
      console.log('激活app.vue啦!---activate')
      transition.next()
    },
    beforeDestory: function (transition) {
      console.log('离开app.vue了!---deactivate')
      transition.next()
    },
    beforeEnter: function (transition) {
      console.log('判断能不能激活先---canActivate!')
      transition.next()
    },
    beforeRouteLeave: function (transition) {
      console.log('判断能不能离开---canDeactivate!')
      transition.next()
    },
    data: function (transition) {
      console.log('加载数据---data!')
      transition.next()
    }
  }
}
</script>

<style>
  .r-button {
    margin: 30px 0 10px 0;
    font-size: 25px;
    height: 40px;
  }
  #bt1, #bt2 {
    width: 48%;
    display: inline;
  }
  .r-label {
    display: inline-block;
    width: 21%;
    margin: 20px 0 0 0;
  }
  .r-input {
    width: 74%;
    margin: 20px 0 0 0;
  }
  #hellov {
    font-size: 50px;
    text-align: center;
    width: 100%;
  }
</style>
