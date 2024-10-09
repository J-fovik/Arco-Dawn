<template>
	<div class="bg-white p-[30px_40px] rounded-[5px_5px] w-[500px]">
		<div class="flex justify-end cursor-pointer" @click="emits('cancel')">
			<icon-close />
		</div>
		<a-form
			ref="formRef"
			:model="form"
			label-align="left"
			size="large"
			auto-label-width
			:rules="rules"
			@keyup.enter="validateData"
		>
			<!-- 短信登录/账号登录 -->
			<template v-if="type === '1'">
				<a-tabs @change="changeTabs" :activeKey="form.activeTabKey">
					<!-- 短信登录 -->
					<a-tab-pane key="1">
						<template #title>
							<div class="text-[20px]">短信登录</div>
						</template>
						<template v-if="form.activeTabKey === '1'">
							<a-form-item hide-label field="phone" :validate-trigger="['blur']">
								<a-input v-model.trim="form.phone" placeholder="输入手机号" />
							</a-form-item>
							<a-form-item
								hide-label
								field="validateCode"
								:validate-trigger="['blur']"
							>
								<a-input
									v-model.trim="form.validateCode"
									placeholder="请输入验证码"
								>
									<template #prefix>
										<icon-code />
									</template>
									<template #append>
										<a-button
											type="primary"
											v-if="form.isGetCode"
											:disabled="form.phone.length != 11"
											@click="clickStartCountDown"
										>
											获取验证码
										</a-button>
										<a-button v-else type="primary" disabled>
											重新获取({{ second }})
										</a-button>
									</template>
								</a-input>
							</a-form-item>
						</template>
					</a-tab-pane>
					<!-- 账号登录 -->
					<a-tab-pane key="2">
						<template #title>
							<div class="text-[20px]">账号登录</div>
						</template>
						<template v-if="form.activeTabKey === '2'">
							<a-form-item hide-label field="phone" :validate-trigger="['blur']">
								<a-input v-model.trim="form.phone" placeholder="输入手机号" />
							</a-form-item>
							<a-form-item hide-label field="passwd" :validate-trigger="['blur']">
								<a-input-password
									v-model.trim="form.passwd"
									placeholder="输入登录密码(8为以上)"
								/>
							</a-form-item>
						</template>
					</a-tab-pane>
				</a-tabs>
				<a-button type="primary" size="large" class="mt-[20px]" @click="validateData"
					>登录</a-button
				>
				<div class="flex items-center justify-between mt-[20px]">
					<span class="text-[#999999] text-[14px]">{{
						form.activeTabKey === '1'
							? '未注册手机号验证后将自动注册'
							: '设置密码后可用帐号登录(非会员卡密码)'
					}}</span>
					<span class="cursor-pointer">
						<span class="text-primary" @click="setType('2')">忘记密码</span>
						<span class="text-[#999999] mx-[3px]">|</span>
						<span class="text-primary" @click="setType('3')">注册</span>
					</span>
				</div>
			</template>

			<!-- 设置密码 || 快捷登录/注册 -->
			<template v-else>
				<h1>{{ type === '2' ? '设置密码' : '快捷登录/注册' }}</h1>
				<a-form-item hide-label field="phone" :validate-trigger="['blur']">
					<a-input v-model.trim="form.phone" placeholder="输入手机号" />
				</a-form-item>
				<a-form-item hide-label field="validateCode" :validate-trigger="['blur']">
					<a-input v-model.trim="form.validateCode" placeholder="请输入验证码">
						<template #prefix>
							<icon-code />
						</template>
						<template #append>
							<a-button
								type="primary"
								v-if="form.isGetCode"
								:disabled="form.phone.length != 11"
								@click="clickStartCountDown"
							>
								获取验证码
							</a-button>
							<a-button v-else type="primary" disabled>
								重新获取({{ second }})
							</a-button>
						</template>
					</a-input>
				</a-form-item>
				<!-- 设置密码 -->
				<template v-if="type === '2'">
					<a-form-item hide-label field="passwd" :validate-trigger="['blur']">
						<a-input-password v-model.trim="form.passwd" placeholder="设置新密码" />
					</a-form-item>
					<a-button type="primary" size="large" class="mt-[20px]">确定</a-button>
				</template>
				<!-- 快捷登录/注册 -->
				<template v-if="type === '3'">
					<a-button type="primary" class="mt-[20px]" size="large" @click="validateData"
						>立即登录</a-button
					>
				</template>
				<div class="flex items-center mt-[20px] justify-end">
					<span class="cursor-pointer">
						<span class="text-[#999999]">已有账号？</span>
						<span class="text-primary" @click="setType('1')">登录</span>
					</span>
				</div>
			</template>
		</a-form>
	</div>
</template>

<script lang="ts" setup name="ZsLoginOrRegister">
// 类型
const [type, setType] = useBasicsState<string | null>('1', () => resetForm());
// 表单
const { form, formRef, resetForm } = useForm(
	() => ({
		activeTabKey: '1',
		phone: '',
		passwd: '',
		validateCode: '',
		isGetCode: true, // 是否可获取验证码
	}),
	// 重置表单回调 => 重置计时器
	() => resetCountDown()
);
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
			if (value.length < 8) callback('请输入输入登录密码(8为以上');
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
const clickStartCountDown = () => {
	// 通过手机验证点击获取验证码
	if (phoneRule(form.value.phone)) {
		// 开始验证
		startCountDown();
		// 不可以重新获取验证码
		form.value.isGetCode = false;
	}
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
		submitData();
	});
};
// 提交数据
const submitData = async () => {
	console.log(form.value);
	// const { err } = await curryingRequest(
	// 	{
	// 		url,
	// 		data: {
	// 			...form.value,
	// 		},
	// 	},
	// 	{
	// 		before: () => setLoading('okLoading'),
	// 		after: () => setLoading(null),
	// 	}
	// );
	// // 处理错误
	// if (err) return;
	// // 触发成功
	// emits('success');
	// // 触发关闭
	// emits('cancel');
};
</script>
