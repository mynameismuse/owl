<template>
	<div class="createTeam">
		<h1 class="createTeam-header">
			还没有工作组，创建一个工作组吧?
		</h1>
		<div class="createTeam-form">
			<div class="form-item">
        <label class="form-header">工作组名称</label>
        <input class="form-input" v-bind:class="{error: valid_workspace}" placeholder="输入任意工作组名称" v-model="workspace"/>
        <div class="form-error" v-if="valid_workspace"><li>{{ workspace_msg }}</li></div>
        <router-link to="/navigation/joinTeam" class="form-link">加入一个现有工作组</router-link>
        <button class="form-button" v-bind:class="{active: active}"v-on:click="join">创建</button>
      </div>
		</div>
	</div>
</template>
<script type="text/babel">
export default {
  name: 'createTeam',
  data () {
    return {
      workspace: '', // 工作组名称
      valid_workspace: false, // 输入框校验
      workspace_msg: '',
      active: false // 输入错误信息
    }
  },
  watch: {
    workspace: function () {
      this.valid_workspace = false
      if (this.workspace !== '') {
        this.active = true
      } else {
        this.active = false
      }
    }
  },
  methods: {
    join: function () {
      if (this.workspace === '') {
        this.valid_workspace = true
        this.workspace_msg = '工作组名称不能为空'
      }
    }
  }
}
</script>
<style lang="less" scoped>
	@import "../../../style/setting.less";
  @import "../../../style/common.less";
	.createTeam-header {
		color: @purple;
		font-weight: 300;
		font-size: 1.8em;
		margin: 40px auto;
	}

  .form-button {
    opacity: .5;

    &.active {
      opacity: 1;
    }
  }
</style>
