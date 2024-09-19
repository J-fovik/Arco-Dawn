<template>
	<div class="login-container flex flex-col justify-center items-center">
		<div class="flex justify-center">
			<div class="login-right-container">
				<a-typography-title :style="{ margin: 0, fontSize: '30px' }" :heading="5">
					欢迎登录{{ appStore.appConfig.appName }}
				</a-typography-title>
				<div>
					<!-- <FormLogin /> -->
					<FormLoginOne />
				</div>
			</div>
		</div>

		<a-typography-title :heading="6" style="color: #ffffff"
			>Copyright@管理后台</a-typography-title
		>
		<a-typography-title :heading="6" style="color: #ffffff">技术支持：###</a-typography-title>
	</div>
</template>

<script lang="ts" setup name="Login">
import { useAppStore } from '@/pinia';
import FormLogin from './components/formLogin.vue';
import FormLoginOne from './components/formLoginOne.vue';

// app配置
const appStore = useAppStore();
</script>

<style scoped lang="less">
.login-container {
	background-image: url('@/assets/images/login-bg.png');
	background-repeat: no-repeat;
	background-size: cover;
	width: 100%;
	height: 100vh;
}
.login-right-container {
	width: 460px;
	box-shadow: 0px 5px 20px 0px rgba(254, 79, 26, 0.1);
	border-radius: 10px;
	padding: 30px;
	margin-left: 30px;
	min-height: 400px;
	background-color: var(--color-bg-2);
}
</style>
