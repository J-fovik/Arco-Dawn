<template>
	<a-modal
		top="10%"
		width="500px"
		title="修改密码"
		unmount-on-close
		visible
		:align-center="false"
		:mask-closable="false"
		@cancel="emits('handleCancel')"
		@ok="submitData"
	>
		<a-form
			ref="formRef"
			:model="form"
			label-align="left"
			size="large"
			auto-label-width
			:rules="rules"
		>
			<a-form-item field="oldPassword" label="原密码:" required>
				<a-input-password v-model="form.oldPassword" placeholder="请输入原密码" />
			</a-form-item>
			<a-form-item field="password" label="新密码:" required>
				<a-input-password v-model="form.password" placeholder="请输入新密码" />
			</a-form-item>
			<a-form-item field="repeatPassword" label="确定密码:" required>
				<a-input-password v-model="form.repeatPassword" placeholder="请输入确定密码" />
			</a-form-item>
		</a-form>
	</a-modal>
</template>

<script lang="ts" setup name="ZsEditPassword">
import { useForm } from '@/hooks';
// form
const { form, formRef } = useForm(() => ({
	oldPassword: '',
	password: '',
	repeatPassword: '',
}));
// 表单验证
const rules = {
	oldPassword: {
		required: true,
		message: '请输入原密码',
	},
	password: {
		required: true,
		message: '请输入新密码',
	},
	repeatPassword: {
		required: true,
		message: '两次密码输入不一致',
		validator: (value: string, callback: (error?: string) => void) => {
			if (value !== form.value.password) callback('两次密码输入不一致');
		},
	},
};
// 父组件方法
const emits = defineEmits(['handleCancel']);
// 提交数据
const submitData = () => {
	formRef.value.validate((errors: any) => {
		if (!errors) return;
		console.log('验证成功！');
	});
};
</script>
