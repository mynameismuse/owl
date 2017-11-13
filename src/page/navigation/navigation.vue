<template>
	<div class="navigation">
		<div class="navigation-wrapper">
			<h1 class="navigation-header">欢迎使用Owl</h1>
			<router-view></router-view>
		</div>
	</div>
</template>
<script type="text/babel">
export default {

}
</script>
<style lang="less" scoped>
	@import "../../style/setting.less";
	@import "../../style/common.less";
	.navigation {
		padding: 4em 2em;
		height: 100%;

		.navigation-wrapper {
			margin: 0 auto;
			max-width: 890px;
			position: relative;
		}
	}
</style>
