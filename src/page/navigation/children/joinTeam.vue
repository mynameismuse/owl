<template>
	<div class="joinTeam">
		<h1 class="joinTeam-header">
			已经有家了吗，加入现有的工作组
		</h1>
		<div class="joinTeam-form">
			<div class="form-item">
				<label class="form-header">工作组名称</label>
				<input class="form-input" v-bind:class="{error: valid_workspace}" placeholder="输入工作组的名称" v-model="workspace"/>
				<div class="form-error" v-if="valid_workspace"><li>{{ workspace_msg }}</li></div>
				<router-link to="/navigation/createTeam" class="form-link">
				创建一个工作组</router-link>
				<button class="form-button" v-bind:class="{active: active}"v-on:click="join">加入</button>
			</div>
		</div>
	</div>
</template>
<script type="text/babel">
import {reqJoin} from '../../../service/getData'
import {mapMutations} from 'vuex'

export default {
  name: 'joinTeam',
  data () {
    return {
      workspace: '', // 工作组名称
      valid_workspace: false, // 输入框校验
      workspace_msg: '',
      active: false, // 输入错误信息
      workspaceInfo: null, // 工作组信息
      emptyMsg: '工作组名称不能为空'
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
    ...mapMutations([
      'UPDATE_WORKSPACE'
    ]),
    async join () {
      // 校验表单输入
      if (this.workspace === '') {
        this.valid_workspace = true
        this.workspace_msg = this.emptyMsg
      } else {
        this.workspaceInfo = await reqJoin(this.$store.username, this.workspace)
      }
      // 根据返回值判断是否加入成功
      if (this.workspaceInfo.code === 'F') {
        this.valid_workspace = true
        this.workspace_msg = this.workspaceInfo.msg
      } else {
        this.valid_workspace = false
        this.UPDATE_WORKSPACE(this.workspaceInfo.data)
        console.log(this.workspaceInfo.data[0].dataViewId)
        this.$router.push({name: 'home', params: {id: this.workspaceInfo.data[0].dataViewId}})
      }
    }
  }
}
</script>
<style lang="less" scoped>
	@import "../../../style/setting.less";
	@import "../../../style/common.less";

	.joinTeam-header {
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
