<template>
	<div class="login-container box-flex-c jc-c ai-c">
		<div class="container box-flex jc-c">
			<!-- <img src="@/assets/images/logon_bg.png" alt="" /> -->
			<div class="login-right-container">
				<a-typography-title :style="{ margin: 0, fontSize: '30px', textAlign: 'center' }" :heading="5">
					{{ appStore.appConfig.appName }}
				</a-typography-title>
				<div>
					<a-form
						style="margin-top: 56px"
						label-align="left"
						size="large"
						layout="vertical"
						:model="form"
						@keyup.enter="login"
					>
						<a-form-item field="loginName">
							<a-input
								v-model.trim="form.loginName"
								placeholder="请输入登录账号"
								class="login-input"
							>
								<template #prefix>
									<icon-user />
								</template>
							</a-input>
						</a-form-item>
						<a-form-item field="passWord">
							<a-input-password
								v-model.trim="form.passWord"
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
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup name="Login">
import type { RouteLocationRaw } from 'vue-router';
import md5 from 'js-md5';
import jsCookie from 'js-cookie';
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useAppStore, useUserStore } from '@/pinia';
import { useForm, useBasicsState } from '@/hooks';
import curryingRequest, { USER_APIS } from '@/service';
import { FormItem } from '@arco-design/web-vue';
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// app配置
const appStore = useAppStore();
// 路由控制
const router = useRouter();
// 路由信息
const route = useRoute();
// 用户信息
const { initUserInfo } = useUserStore();
// form
const { form } = useForm(() => ({
	loginName: '',
	passWord: '',
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
	const { res, err } = await curryingRequest(
		() =>
			USER_APIS.login({
				loginName: form.value.loginName,
				passWord: md5(form.value.passWord),
			}),
		{
			before: () => setActiveKey('login'),
			after: () => setActiveKey(null),
		}
	);
	// 处理错误
	if (err) return;
	// 设置用户信息
	jsCookie.set('userToken', res?.data.token);
	// 获取用户信息
	const isSuccess = await initUserInfo();
	// 获取成功跳转
	if (isSuccess) {
		// 登录后跳转指定页面
		router.push((route.query.redirect as RouteLocationRaw) ?? '/');
	}
};
</script>

<style scoped lang="less">
.login-container {
	background-image: url('@/assets/svg/login.svg');
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100%;
	width: 100%;
	height: 100vh;
}
.container {
	width: 1200px;
	padding: 10px 0;
}
.login-right-container {
	width: 460px;
	box-shadow: 0px 5px 20px 0px rgba(254, 79, 26, 0.1);
	border-radius: 10px;
	padding: 30px;
	margin-left: 30px;
	height: 400px;
}
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
</style>
