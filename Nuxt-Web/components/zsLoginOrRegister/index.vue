<template>
	<div class="bg-[#F2F5FF] p-[30px_40px] rounded-[5px_5px] w-[500px]">
		<div class="flex justify-end cursor-pointer mb-[10px]" @click="emits('cancel')">
			<icon-close size="20" />
		</div>
		<!-- <div v-if="type != '2'" class="flex justify-start cursor-pointer mb-[40px]">
			<nuxt-img
				src="/images/logo.png"
				width="300"
				height="80"
				class="w-[200px] h-[60px]"
			></nuxt-img>
		</div> -->
		<a-form
			ref="formRef"
			:model="form"
			label-align="left"
			size="large"
			auto-label-width
			:rules="rules"
			@keyup.enter="validateData"
		>
			<!-- 账号密码登录/验证码登录 -->
			<template v-if="type === '1'">
				<a-tabs
					type="text"
					size="large"
					@change="changeTabs"
					:activeKey="form.activeTabKey"
					animation
				>
					<!-- 验证码登录 -->
					<a-tab-pane key="1">
						<template #title>
							<div
								class="text-[20px]"
								:class="{ 'text-[#7c92ff] font-bold': form.activeTabKey === '1' }"
							>
								验证码登录
							</div>
						</template>
						<template v-if="form.activeTabKey === '1'">
							<a-form-item hide-label field="phone" :validate-trigger="['blur']">
								<a-input
									v-model.trim="form.phone"
									allow-clear
									class="inputBg"
									placeholder="请输入手机号"
								/>
							</a-form-item>
							<a-form-item
								hide-label
								field="validateCode"
								class="flex items-center"
								:validate-trigger="['blur']"
							>
								<a-input
									v-model.trim="form.validateCode"
									allow-clear
									class="inputBg flex-1"
									placeholder="请输入验证码"
								/>
								<div
									class="w-[100px] h-[44px] leading-[44px] flex items-center justify-center bg-white text-[#FFA864]"
								>
									<div
										v-if="form.isGetCode"
										class="h-full"
										:class="{
											'cursor-pointer': form.phone.length == 11,
											'cursor-not-allowed': form.phone.length != 11,
										}"
										@click="
											form.phone.length == 11 ? clickStartCountDown() : null
										"
									>
										获取验证码
									</div>
									<div v-else class="cursor-not-allowed h-full">
										重新获取({{ second }})
									</div>
								</div>
							</a-form-item>
						</template>
					</a-tab-pane>
					<!-- 账号密码登录 -->
					<a-tab-pane key="2">
						<template #title>
							<div
								class="text-[20px]"
								:class="{ 'text-[#7c92ff] font-bold': form.activeTabKey === '2' }"
							>
								账号密码登录
							</div>
						</template>
						<template v-if="form.activeTabKey === '2'">
							<a-form-item hide-label field="phone" :validate-trigger="['blur']">
								<a-input
									v-model.trim="form.phone"
									allow-clear
									class="inputBg"
									placeholder="请输入手机号"
								/>
							</a-form-item>
							<a-form-item hide-label field="passwd" :validate-trigger="['blur']">
								<a-input-password
									v-model.trim="form.passwd"
									allow-clear
									class="inputBg"
									placeholder="请输入6-20位密码"
								/>
							</a-form-item>
						</template>
					</a-tab-pane>
				</a-tabs>
				<div class="flex items-center justify-between">
					<div class="cursor-pointer flex items-center">
						<a-checkbox v-model="form.checkedAgreement" class="text-center"
							>请阅读并同意</a-checkbox
						>
						<span
							class="text-[#FFA864] text-center"
							@click="setActiveKey('ZsUserAgreementModal')"
							>《用户协议》</span
						>
					</div>
					<div
						class="text-[#999]"
						:class="{ 'cursor-pointer': form.activeTabKey === '2' }"
						@click="form.activeTabKey === '1' ? '' : setType('2')"
					>
						{{ form.activeTabKey === '1' ? '未注册时自动注册' : '忘记密码？' }}
					</div>
				</div>
				<a-button
					type="primary"
					size="large"
					class="mt-[30px] buttonHeight"
					@click="validateData"
					:loading="loading"
					>登录</a-button
				>
				<div class="flex items-center justify-center mt-[20px]">
					<span>
						<span>没有账号？</span>
						<span class="text-[#7c92ff] cursor-pointer" @click="setType('3')"
							>立即注册</span
						>
					</span>
				</div>
			</template>

			<!-- 修改密码 || 注册获取免费体验 -->
			<template v-else>
				<div class="font-bold text-[24px] mb-[24px]">
					{{ type === '2' ? '修改密码' : '注册获取免费体验' }}
				</div>
				<a-form-item hide-label field="phone" :validate-trigger="['blur']">
					<a-input
						v-model.trim="form.phone"
						allow-clear
						class="inputBg"
						placeholder="请输入手机号"
					/>
				</a-form-item>
				<a-form-item
					hide-label
					field="validateCode"
					:validate-trigger="['blur']"
					class="flex items-center"
				>
					<a-input
						v-model.trim="form.validateCode"
						allow-clear
						class="inputBg flex-1"
						placeholder="请输入验证码"
					/>
					<div
						class="w-[100px] h-[44px] leading-[44px] flex items-center justify-center bg-white text-[#FFA864]"
					>
						<div
							v-if="form.isGetCode"
							class="text-[#FFA864] inputBg"
							:class="{
								'cursor-pointer': form.phone.length == 11,
								'cursor-not-allowed': form.phone.length != 11,
							}"
							@click="form.phone.length == 11 ? clickStartCountDown('1') : null"
						>
							获取验证码
						</div>
						<div v-else class="cursor-not-allowed text-[#FFA864]">
							重新获取({{ second }})
						</div>
					</div>
				</a-form-item>
				<a-form-item hide-label field="passwd" :validate-trigger="['blur']">
					<a-input-password
						v-model.trim="form.passwd"
						allow-clear
						class="inputBg"
						placeholder="请输入6-20位密码"
					/>
				</a-form-item>
				<!-- 修改密码 -->
				<template v-if="type === '2'">
					<a-form-item hide-label field="againPasswd" :validate-trigger="['blur']">
						<a-input-password
							v-model.trim="form.againPasswd"
							allow-clear
							class="inputBg"
							placeholder="再次请输入6-20位密码"
						/>
					</a-form-item>
					<a-button
						type="primary"
						size="large"
						shape="round"
						class="mt-[30px] buttonHeight"
						@click="validateData"
					>
						完成
					</a-button>
				</template>
				<!-- 注册获取免费体验 -->
				<template v-if="type === '3'">
					<div class="cursor-pointer flex items-center">
						<a-checkbox v-model="form.checkedAgreement" class="text-center"
							>请阅读并同意</a-checkbox
						>
						<span
							class="text-[#FFA864] text-center"
							@click="setActiveKey('ZsUserAgreementModal')"
							>《用户协议》</span
						>
					</div>
					<a-button
						type="primary"
						shape="round"
						class="mt-[30px] buttonHeight"
						size="large"
						@click="validateData"
						:loading="loading"
						>注册</a-button
					>
				</template>
				<!-- 正常登录展示，登陆后修改密码不展示 -->
				<div
					v-if="userInfo.loginType === '1'"
					class="flex items-center mt-[20px] justify-center"
				>
					<span>
						<span>{{ type === '3' ? '已有账号？' : '想起密码？' }}</span>
						<span class="text-[#7c92ff] cursor-pointer" @click="setType('1')"
							>去登录</span
						>
					</span>
				</div>
			</template>
		</a-form>
		<!-- 用户协议 -->
		<zs-user-agreement-modal
			v-if="activeKey === 'ZsUserAgreementModal'"
			@cancel="setActiveKey(null)"
		/>
	</div>
</template>

<script lang="ts" setup name="ZsLoginOrRegister">
import md5 from 'js-md5';
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// loading
const [loading, setLoading] = useBasicsState(false);
// 用户信息
const { userInfo, getUserInfo, logoutUser } = useUser();
// 类型
const [type, setType] = useBasicsState<string | null>(userInfo.value.loginType, () => resetForm());
// 表单
const { form, formRef, resetForm } = useForm(
	() => ({
		activeTabKey: '1',
		phone: '',
		passwd: '',
		againPasswd: '',
		validateCode: '',
		isGetCode: true, // 是否可获取验证码
		checkedAgreement: false,
	}),
	// 重置表单回调 => 重置计时器
	() => resetCountDown()
);
// 用户cookie
const token = useCookie('token', {
	maxAge: 60 * 60 * 24 * 7,
});
// 倒计时
const { second, isStart, startCountDown, resetCountDown } = useCountDown(60, 1000, () => {
	// 倒计时归零后回调 => 可以重新获取验证码
	form.value.isGetCode = true;
});
// 表单验证
const rules = {
	phone: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (!value) callback('请输入手机号');
			if (value && !phoneRule(value)) callback('请输入正确的手机号');
		},
	},
	passwd: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (!value) return callback('请输入密码');
			if (value.length < 6 || value.length > 20) callback('请输入6-20位密码');
		},
	},
	againPasswd: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (value !== form.value.passwd) callback('两次密码输入不一致');
		},
	},
	validateCode: {
		required: true,
		message: '请输入验证码',
	},
};
// 父组件方法
const emits = defineEmits(['cancel', 'success']);

// 点击获取验证码
const clickStartCountDown = async (isSignIn?: any) => {
	// 通过手机验证点击获取验证码
	formRef.value.validateField('phone', async (error: any) => {
		if (!error) {
			// 修改密码不需要勾选
			if (type.value !== '2' && !form.value.checkedAgreement) {
				// 提示
				return $zsMsg('waring', '请勾选用户协议');
			}
			const [err, res] = await $zsFetch(API_URLS.LOGIN.SEND_VERIFY_CODE, {
				method: 'POST',
				body: {
					phone: form.value.phone,
					isSignIn: isSignIn === '1' ? '1' : '',
				},
			});
			// 处理错误
			if (err) return;
			// 开始验证
			startCountDown();
			// 不可以重新获取验证码
			form.value.isGetCode = false;
		}
	});
};
// 切换tabs
const changeTabs = (e: any) => {
	// 重置表单
	resetForm();
	// 赋值当前tab
	form.value.activeTabKey = e;
	// 重置计时器
	resetCountDown();
};

// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		if (type.value != '2' && !form.value.checkedAgreement) {
			// 提示
			return $zsMsg('waring', '请勾选用户协议');
		}
		// 账号密码登录/验证码登录
		if (type.value === '1') {
			if (form.value.activeTabKey === '1') {
				// 验证码登录
				loginVerifyCode();
			} else {
				// 账号密码登录
				loginByPassWord();
			}
		} else if (type.value === '2') {
			// 修改密码
			updatePassWord();
		} else {
			// 注册
			userRegistration();
		}
	});
};
// 成功后执行
const successExecute = async () => {
	// 查询用户信息
	const isSuccess = await getUserInfo();
	// 登录成功后
	if (isSuccess) {
		// 提示登录成功
		$zsMsg('success', '欢迎登录！');
		userInfo.value.loginModal = false;
		// 未填信息完善信息
		if (!userInfo.value.score) {
			userInfo.value.userInfoModal = true;
		}
		await sleep(1000);
		// 登录成功
		emits('success');
	}
};
// 用户注册
const userRegistration = async () => {
	// 登录loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.LOGIN.REGISTER, {
		method: 'POST',
		body: {
			phone: form.value.phone,
			verifyCode: form.value.validateCode,
			passWord: md5(form.value.passwd),
		},
	});
	// 处理错误
	if (err) return setLoading(false);
	// 设置token
	token.value = res.data.token;
	// 提示注册成功
	$zsMsg('success', '注册成功');
	// 等待1秒
	await sleep(1000);
	// 登录loading
	setLoading(false);
	// 成功后执行
	await successExecute();
};
// 账号密码登录
const loginByPassWord = async () => {
	// 登录loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.LOGIN.PHONE_LOGIN, {
		method: 'POST',
		body: {
			phone: form.value.phone,
			passWord: md5(form.value.passwd),
		},
	});
	// 处理错误
	if (err) return setLoading(false);
	// 设置token
	token.value = res.data.token;
	// 等待1秒
	await sleep(1000);
	// 登录loading
	setLoading(false);
	// 成功后执行
	await successExecute();
};
// 验证码登录
const loginVerifyCode = async () => {
	// 登录loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.LOGIN.LOGIN_VERIFY_CODE, {
		method: 'POST',
		body: {
			phone: form.value.phone,
			verifyCode: form.value.validateCode,
		},
	});
	// 处理错误
	if (err) return setLoading(false);
	// 设置token
	token.value = res.data.token;
	// 等待1秒
	await sleep(1000);
	// 登录loading
	setLoading(false);
	// 成功后执行
	await successExecute();
};

// 修改密码
const updatePassWord = async () => {
	const [err, res] = await $zsFetch(API_URLS.LOGIN.UPDATE_PASS_WORD, {
		method: 'POST',
		body: {
			phone: form.value.phone,
			verifyCode: form.value.validateCode,
			passWord: md5(form.value.passwd),
		},
	});
	// 处理错误
	if (err) return;
	// 正常登录修改密码
	if (userInfo.value.loginType === '1') {
		// 提示修改成功
		$zsMsg('success', res.data);
		// 去登录
		type.value = '1';
		// 账号密码登录
		form.value.activeTabKey = '2';
	} else {
		// 退出登录
		await logoutUser();
		await sleep(1000);
		await $zsMsg('success', '密码修改成功，请重新登录。');
	}
};
</script>
<style scoped>
.buttonHeight {
	height: 50px;
	border-radius: 8px;
	font-size: 20px;
}
.inputBg {
	background: #ffffff;
	height: 44px;
}
:deep(.arco-input-wrapper, .arco-input-prepend, .arco-input-append) {
	background: #ffffff !important;
}
:deep(.arco-checkbox-checked .arco-checkbox-icon) {
	background: #7c92ff;
}
</style>
