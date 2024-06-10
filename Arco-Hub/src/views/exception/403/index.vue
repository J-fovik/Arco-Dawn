<template>
	<div class="content">
		<a-result class="result" status="403" subtitle="对不起，您没有访问该资源的权限" />
		<a-button key="back" type="primary" @click="router.back()">返回</a-button>
	</div>
</template>

<script lang="ts" setup name="Error403">
import { useRouter } from 'vue-router';
// 路由控制
const router = useRouter();
</script>

<style scoped lang="less">
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: 100vh;
	text-align: center;
	background-color: var(--color-bg-1);
}
</style>
