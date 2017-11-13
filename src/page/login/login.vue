<template>
	<div class="login">
    <div class="login-wrapper">
      <div class="login-form">
        <h1>登录Owl账号</h1>
        <div class="form-item">
          <label class="form-header">用户名 <span class="quiet">(或手机号)</span></label>
          <input class="form-input" v-bind:class="{error: valid_username}" type="text" name="username" placeholder="请输入用户名(或手机号)" v-model="username"/>
          <div class="form-error" v-if="valid_username"><li>{{ username_msg }}</li></div>
          <label class="form-header">密码</label>
          <input class="form-input" v-bind:class="{error: valid_password}" type="text" name="password" placeholder="例如, ........." v-model="password"/>
          <div class="form-error" v-if="valid_password"><li>{{ password_msg }}</li></div>
          <router-link to="/register" class="form-link">没有owl账号?</router-link>
          <button class="form-button" v-on:click="submit">登录</button>
          <div class="form-desc">
            <h1>
              什么是Owl?
            </h1>
            <p>
              Owl系统为联通内部数据可视化适用平台，皆在为运营人员和决策者提供更好的数据输出辅助决策。
            </p>
          </div>
        </div>
      </div>
    </div>
	</div>
</template>
<script type="text/babel">
import {reqLogin} from '../../service/getData'
import {mapMutations} from 'vuex'

export default {
  name: 'login',
  data () {
    return {
      username: '', // 用户名
      valid_username: false, // 用户名校验
      username_msg: '', // 用户名错误信息
      password: '', // 密码
      valid_password: false, // 密码校验
      password_msg: '', // 密码错误信息
      userInfo: null // 获取到的用户信息
    }
  },
  watch: {
    username: function () {
      this.valid_username = false
    },
    password: function () {
      this.valid_password = false
    }
  },
  methods: {
    ...mapMutations([
      'ACCOUNT_LOGIN'
    ]),
    submit: function () {
      // 校验表单输入
      if (this.username === '') {
        this.username_msg = '用户名不能为空'
        this.valid_username = true
      } else {
        this.valid_username = false
      }
      if (this.password === '') {
        this.password_msg = '密码不能为空'
        this.valid_password = true
      } else {
        this.valid_password = false
      }

      // 用户名登录
      if (!this.valid_username && !this.valid_password) {
        this.userInfo = reqLogin(this.username, this.password)
      } else {
        return
      }
      // 根据返回值判断是否登录成功
      if (this.userInfo.code === 'F') {
        this.username_msg = this.userInfo.msg
        this.valid_username = true
        this.password_msg = this.userInfo.msg
        this.valid_password = true
      } else if (this.userInfo.code === 'S') {
        this.valid_username = false
        this.valid_password = false
        this.ACCOUNT_LOGIN(this.userInfo)
        if (this.userInfo.workspace === null) {
          this.$router.push({name: 'joinTeam'})
        }
      } else {
        this.username_msg = '未知错误'
        this.valid_username = true
        this.password_msg = '未知错误'
        this.valid_password = true
      }
    }
  }
}
</script>
<style lang="less" scoped>
  @import "../../style/setting.less";
  @import "../../style/common.less";

  .login {
    height: 100%;
    padding: 4em 2em;

    .login-wrapper {
      margin: 0 auto;
      max-width: 890px;
      position: relative;
    }

    .login-form {
      display: block;
      max-width: 585px;
      margin: 0 auto;
      position: relative;
    }
  }
</style>







