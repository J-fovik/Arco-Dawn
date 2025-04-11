<template>
	<a-form
		style="margin-top: 56px"
		label-align="left"
		size="large"
		layout="vertical"
		:model="form"
		@keyup.enter="login"
	>
		<a-form-item field="loginName">
			<a-input v-model="form.loginName" placeholder="请输入登录账号" class="login-input">
				<template #prefix>
					<icon-user />
				</template>
			</a-input>
		</a-form-item>
		<a-form-item field="passWord">
			<a-input-password
				v-model="form.passWord"
				name="password"
				class="login-input"
				placeholder="请输入密码"
				allow-clear
			>
				<template #prefix>
					<icon-lock />
				</template>
			</a-input-password>
		</a-form-item>
		<a-form-item>
			<a-button
				type="primary"
				class="login-button"
				:disabled="isDisabled"
				:loading="activeKey === 'login'"
				@click="login"
			>
				登录
			</a-button>
		</a-form-item>
	</a-form>
</template>
<script lang="ts" setup name="formLogin">
import type { RouteLocationRaw } from 'vue-router';
import md5 from 'js-md5';
import jsCookie from 'js-cookie';
import { useUserStore } from '@/pinia';
import { useForm, useBasicsState } from '@/hooks';
import { URL, curryingRequest } from '@/service';

// 路由控制
const router = useRouter();
// 路由信息
const route = useRoute();
// 用户信息
const { initUserInfo } = useUserStore();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form } = useForm(() => ({
	loginName: 'admin',
	passWord: 'a123456?',
}));
// 按钮是否可点击
const isDisabled = computed(() => {
	return !(form.value.loginName && form.value.passWord);
});
// 登陆
const login = async () => {
	// 防止点击回车键
	if (isDisabled.value) return;
	// 发起请求
	// const { res, err } = await curryingRequest(
	// 	{
	// 		url: URL.USER.LOGIN_ONE,
	// 		data: {
	// 			loginName: form.value.loginName,
	// 			passWord: md5(form.value.passWord),
	// 		},
	// 	},
	// 	{
	// 		before: () => setActiveKey('login'),
	// 		after: () => setActiveKey(null),
	// 	}
	// );
	// // 处理错误
	// if (err) return;
	// 设置用户信息
	jsCookie.set('userToken', '123456789');
	// 获取用户信息
	const isSuccess = await initUserInfo();
	// 获取成功跳转
	if (isSuccess) {
		// 登录后跳转指定页面
		router.push((route.query.redirect as RouteLocationRaw) ?? '/');
	}
};
</script>

<style scoped lang="less" name="Login">
.login-input {
	height: 50px;
	background-color: var(--color-bg-1);
	border: 1px solid var(--color-border-3);
}
.login-input:hover {
	background-color: transparent;
	border-color: var(--color-border-4);
}
.login-button {
	width: 100%;
	height: 50px;
	font-size: 16px;
}

.login-logo {
	position: fixed;
	top: 5%;
	left: 5%;
	width: 200px;
}

:deep(.arco-input-wrapper) {
	background-color: transparent;
}

:deep(.arco-input-append) {
	padding: 0;
}

:deep(.arco-image-img) {
	width: 100%;
	height: 100%;
}
</style>
