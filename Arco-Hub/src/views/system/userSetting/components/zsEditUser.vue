<template>
	<a-form ref="formRef" label-align="left" size="large" direction="vertical" layout="vertical" style="width: 600px"
		auto-label-width :rules="rules" :model="form">
		<a-form-item field="loginName" label="登录账号:" >
			<a-input v-model="form.loginName" placeholder="请输入登录账号" disabled />
		</a-form-item>
		<a-form-item field="userName" label="姓名:">
			<a-input v-model="form.userName" placeholder="请输入姓名" />
		</a-form-item>
		<a-form-item field="nickName" label="昵称:">
			<a-input v-model="form.nickName" placeholder="请输入昵称" />
		</a-form-item>
		<a-form-item field="phoneNumber" label="手机号码:">
			<a-input v-model="form.phoneNumber" placeholder="请输入手机号码" />
		</a-form-item>
		<!-- <a-form-item field="bz" label="备注:">
			<a-textarea v-model="form.bz" :max-length="200" placeholder="请输入备注" />
		</a-form-item> -->
		<a-form-item v-if="form.dedicatedCode" field="dedicatedCode" label="专属码:">
			<a-input v-model="form.dedicatedCode" placeholder="请输入专属码" disabled/>
		</a-form-item>
		<a-form-item>
			<a-button type="primary" :loading="activeKey === '确定'" @click="validateData">确定</a-button>
		</a-form-item>
	</a-form>
</template>

<script lang="ts" setup name="ZsEditUser">
import { useUserStore } from '@/pinia';
import { useForm } from '@/hooks';
import { phoneRule } from '@/utils/rules';
import { useBasicsState } from '@/hooks';
import curryingRequest, { USER_APIS } from '@/service';
// 状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 用户信息
const { userInfo, setUserInfo } = useUserStore();

// form
const { form, formRef } = useForm(() => ({ ...userInfo }));
console.log(userInfo);

// 表单验证
const rules = {
	phoneNumber: {
		required: false,
		validator: (value: string, callback: (error?: string) => void) => {
			if (value && !phoneRule(value)) callback('请输入正确的手机号');
		},
	},
};
// 提交数据
const validateData = () => {
	formRef.value.validate(async (errors: any) => {
		if (errors) return;
		// 修改用户
		editUser();
	});
};
// 修改用户
const editUser = async () => {
	const { err } = await curryingRequest(() =>
		USER_APIS.editUser({
			userName: form.value.userName,
			nickName: form.value.nickName,
			phoneNumber: form.value.phoneNumber,
			bz: form.value.bz
		}),
		{
			before: () => setActiveKey('确定'),
			after: () => setActiveKey(null),
			successMsg: '用户信息修改成功。',
		}
	);
	// 处理错误信息
	if (err) return;
	// 设置用户信息
	setUserInfo(form.value);
};

</script>
