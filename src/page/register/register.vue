<template>
  <div class="register">
    <div class="register-wrapper">
      <div class="register-form">
        <h1>注册Owl账号</h1>
        <div class="form-item">
          <label class="form-header">用户名 <span class="quiet">(或手机号)</span></label>
          <input class="form-input" v-bind:class="{error: valid_username}" type="text" name="username" placeholder="请输入用户名(或手机号)" v-model="username"/>
          <div class="form-error" v-if="valid_username"><li>{{ username_msg }}</li></div>
          <label class="form-header">密码</label>
          <input class="form-input" v-bind:class="{error: valid_password}" type="password" name="password" placeholder="请输入密码" v-model="password"/>
          <div class="form-error" v-if="valid_password"><li>{{ password_msg }}</li></div>
          <label class="form-header">再次输入密码</label>
          <input class="form-input" v-bind:class="{error: valid_repassword}" type="password" name="enter-password" placeholder="请再次输入密码" v-model="repassword"/>
          <div class="form-error" v-if="valid_repassword"><li>{{ repassword_msg }}</li></div>
          <router-link to="/login" class="form-link">已有owl账号?</router-link>
          <button class="form-button" v-on:click="submit">注册</button>
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
  import {reqRegister} from '../../service/getData'

  export default {
    name: 'register',
    data () {
      return {
        username: '',
        valid_username: false,
        username_msg: '',
        password: '',
        valid_password: false,
        password_msg: '',
        repassword: '',
        valid_repassword: false,
        repassword_msg: '',
        registerInfo: null
      }
    },
    watch: {
      username: function () {
        this.valid_username = false
      },
      password: function () {
        this.valid_password = false
      },
      repassword: function () {
        this.valid_repassword = false
      }
    },
    methods: {
      submit: function () {
        if (this.username === '') {
          this.username_msg = '用户名不能为空'
          this.valid_username = true
        }

        if (this.password === '') {
          this.password_msg = '密码不能为空'
          this.valid_password = true
        }

        if (this.repassword === '') {
          this.repassword_msg = '请再次输入密码'
          this.valid_repassword = true
        }

        if (this.password !== this.repassword) {
          this.repassword_msg = '密码输入不一致'
          this.valid_repassword = true
        }

        // 用户注册
        if (!this.valid_username && !this.valid_password) {
          this.registerInfo = reqRegister(this.username, this.password)
        } else {
          return
        }

        if (this.registerInfo.code === 'F') {
          this.username_msg = this.registerInfo.msg
          this.valid_username = true
          this.password_msg = this.registerInfo.msg
          this.valid_password = true
          this.repassword_msg = this.registerInfo.msg
          this.valid_repassword = true
        } else {
        }
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../style/setting.less";
  @import "../../style/common.less";

  .register {
    height: 100%;
    padding: 4em 2em;

    .register-wrapper {
      margin: 0 auto;
      max-width: 890px;
      position: relative;
    }

    .register-form {
      display: block;
      max-width: 585px;
      margin: 0 auto;
      position: relative;
    }
  }
</style>
