<template>
	<div class="content">
		<a-result
			class="result"
			status="403"
			:subtitle="`无该地址访问权限，${second}秒自动跳转到首页`"
		/>
		<a-button key="back" type="primary" @click="router.replace('/home')">返回首页</a-button>
	</div>
</template>

<script lang="ts" setup name="Error403">
import { useRouter } from 'vue-router';
import { useCountDown } from '@/hooks';
// 路由控制
const router = useRouter();
// 倒计时返回首页
const { second, startCountDown } = useCountDown(5, 1000, () => {
	router.replace('/home');
});
startCountDown();
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
