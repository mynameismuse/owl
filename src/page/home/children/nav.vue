<template>
  <div class="nav">
    <div class="navWrapper">
      <div class="container">
        <div class="logo">
          <img src="../../../assets/logo.png">
          Owl
        </div>
        <ul class="right menu">
          <router-link v-for="item in workspace" :to="{ name: 'home', params: { id: item.dataViewId }}" tag="li" class="item" :key="item.dataViewId">{{ item.dataViewName }}</router-link>
          <router-link :to="{ name: 'monitor'}" tag="li" class="item">监控</router-link>
          <li class="item" v-on:click="logout">退出登录</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script type="text/babel">
  import {mapMutations, mapState} from 'vuex'
  import {reqJoin} from '../../../service/getData'

  export default {
    name: 'homeNav',
    data () {
      return {
      }
    },
    computed: {
      ...mapState([
        'workspace'
      ])
    },
    methods: {
      ...mapMutations([
        'ACCOUNT_LOGOUT',
        'UPDATE_WORKSPACE'
      ]),
      logout: function () {
        this.ACCOUNT_LOGOUT()
        this.$router.push({name: 'login'})
      },
      async initNav () {
        this.workspaceInfo = await reqJoin(this.$store.username, this.workspace)
        this.UPDATE_WORKSPACE(this.workspaceInfo.data)
      }
    },
    created () {
      if (this.workspace === null) {
        this.initNav()
      }
    }
  }
</script>
<style lang="less" scoped>
  @import "../../../style/setting.less";
  @import "../../../style/common.less";

  .nav {
    height: 80px;
    .navWrapper {
      position: fixed;
      top: 0;
      background-color: @purple;
      height: 80px;

      color: @white;
      left: 0;
      width: 100%;
      line-height: 80px;
      z-index: 100;
    }

    .logo {
      font-size: 2.4em;
      display: inline-block;

      img {
        vertical-align: sub;
        height: 40px;
      }
    }

    .menu {
      height: 100%;
      line-height: 80px;
      background-color: transparent;
      padding: 0;
      margin: 0;

      &.right {
        float: right;
      }

      .item {
        margin: 0;
        float: left;
        list-style: none;
        position: relative;
        cursor: pointer;
        margin: 0 10px;
        padding: 0 20px;
        opacity: .7;
        height: 70px;
        transition: all .1s linear;

        &:hover {
          opacity: 1;
          color: @orange;
          border-bottom: 3px solid @orange;
        }

        &.router-link-active {
          opacity: 1;
          color: @orange;
          border-bottom: 3px solid @orange;
        }
      }
    }
  }
</style>

