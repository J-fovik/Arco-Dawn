<template>
	<a-form
		style="margin-top: 56px"
		label-align="left"
		size="large"
		layout="vertical"
		:model="form"
		@keyup.enter="login"
	>
		<a-form-item field="userAccount">
			<a-input v-model="form.userAccount" placeholder="请输入登录账号" class="login-input">
				<template #prefix>
					<icon-user />
				</template>
			</a-input>
		</a-form-item>
		<a-form-item field="password">
			<a-input-password
				v-model="form.password"
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
		<a-form-item field="validateCode">
			<a-input v-model="form.validateCode" placeholder="请输入验证码" class="login-input">
				<template #prefix>
					<icon-code />
				</template>
				<template #append>
					<a-image
						:src="loginCode"
						width="90px"
						height="100%"
						:preview="false"
						fit="fill"
						@click="
							setLoginCode(
								`${LOGIN_CODE_URL}?validateId=${LOGIN_CODE_ID}&date=${Date.now()}`
							)
						"
					></a-image>
				</template>
			</a-input>
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
// 登录验证码链接
const LOGIN_CODE_URL = `${import.meta.env.VITE_API_BASE_URL}${URL.USER.LOGIN_CODE}`;
// 随机字符串
const LOGIN_CODE_ID = `${Math.random().toString(36).substring(2)}`;
// 路由控制
const router = useRouter();
// 路由信息
const route = useRoute();
// 用户信息
const { initUserInfo } = useUserStore();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 登录验证码控制
const [loginCode, setLoginCode] = useBasicsState(
	`${LOGIN_CODE_URL}?validateId=${LOGIN_CODE_ID}&date=${Date.now()}`
);
// form
const { form } = useForm(() => ({
	userAccount: '',
	password: '',
	validateCode: '',
}));
// 按钮是否可点击
const isDisabled = computed(() => {
	return !(form.value.userAccount && form.value.password && form.value.validateCode.length === 4);
});
// 登陆
const login = async () => {
	// 防止点击回车键
	if (isDisabled.value) return;
	// loading
	setActiveKey('login');
	// 发起请求
	const { res, err } = await curryingRequest({
		url: URL.USER.LOGIN,
		data: {
			userAccount: form.value.userAccount,
			password: md5(form.value.password),
			validateCode: form.value.validateCode,
			validateId: LOGIN_CODE_ID,
		},
	});
	// 处理错误
	if (err) {
		// 更新验证码
		setLoginCode(`${LOGIN_CODE_URL}?validateId=${LOGIN_CODE_ID}&date=${Date.now()}`);
		// 关闭loading
		return setActiveKey(null);
	}
	// 设置用户信息
	jsCookie.set('userToken', res?.data.token);
	// 获取用户信息
	const isSuccess = await initUserInfo();
	// 关闭loading
	setActiveKey(null);
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
