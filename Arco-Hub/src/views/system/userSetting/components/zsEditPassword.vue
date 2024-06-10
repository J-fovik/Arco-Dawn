<template>
	<a-form
		ref="formRef"
		label-align="left"
		size="large"
		direction="vertical"
		layout="vertical"
		style="width: 600px"
		auto-label-width
		:model="form"
		:rules="rules"
	>
		<a-form-item field="oldPassWord" label="原密码:" required>
			<a-input-password v-model="form.oldPassWord" placeholder="请输入原密码" />
		</a-form-item>
		<a-form-item field="newPassWord" label="新密码:" required>
			<a-input-password v-model="form.newPassWord" placeholder="请输入新密码" />
		</a-form-item>
		<a-form-item field="repeatPassWord" label="确定密码:" required>
			<a-input-password v-model="form.repeatPassWord" placeholder="请输入确定密码" />
		</a-form-item>
		<a-form-item>
			<a-button type="primary" :loading="activeKey === '确定'" @click="validateData">确定</a-button>
		</a-form-item>
	</a-form>
</template>

<script lang="ts" setup name="ZsEditPassword">
import md5 from 'js-md5';
import jsCookie from 'js-cookie';
import { useRouter } from 'vue-router';
import { useForm } from '@/hooks';
import { useBasicsState } from '@/hooks';
import { useUserStore } from '@/pinia';
import curryingRequest, { USER_APIS } from '@/service';

// 路由控制
const router = useRouter();
// 状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 用户信息
const { setUserInfo } = useUserStore();
// form
const { form, formRef } = useForm(() => ({
	oldPassWord: '',
	newPassWord: '',
	repeatPassWord: '',
}));
// 表单验证
const rules = {
	oldPassWord: {
		required: true,
		message: '请输入原密码',
	},
	newPassWord: {
		required: true,
		message: '请输入新密码',
	},
	repeatPassWord: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (value !== form.value.newPassWord) callback('两次密码输入不一致');
		},
	},
};
// 提交数据
const validateData = () => {
	formRef.value.validate(async (errors: any) => {
		if (errors) return;
		// 修改密码
		editUserPassword();
	});
};
// 修改密码
const editUserPassword = async () => {
	const { err } = await curryingRequest(() =>
		USER_APIS.editPassword({
			oldPassWord: md5(form.value.oldPassWord),
			newPassWord: md5(form.value.newPassWord),
		}),
		{
			before: () => setActiveKey('确定'),
			after: () => setActiveKey(null),
			successMsg: '密码修改成功，请重新登录。',
		}
	);
	// 处理错误信息
	if (err) return;
	// 请空用户信息
	setUserInfo({});
	// 清除Cookie
	jsCookie.remove('userToken');
	// 跳转登录
	router.push('/login');
};
</script>
