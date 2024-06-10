<template>
	<a-modal
		top="10%"
		width="500px"
		unmount-on-close
		:title="createModalTitle('角色', !!props.data.id)"
		visible
		:align-center="false"
		:mask-closable="false"
		:ok-loading="activeKey === 'okLoading'"
		@cancel="emits('close')"
		@ok="validateData"
	>
		<a-form
			ref="formRef"
			:model="form"
			label-align="left"
			size="large"
			auto-label-width
			:rules="rules"
		>
			<a-form-item field="code" label="角色代码:" required>
				<a-input
					v-model="form.code"
					:disabled="!!props.data.id"
					placeholder="请输入角色代码"
				/>
			</a-form-item>
			<a-form-item field="uname" label="角色名:" required>
				<a-input v-model="form.uname" placeholder="请输入角色名" />
			</a-form-item>
			<a-form-item field="bz" label="备注:">
				<a-textarea v-model="form.bz" :max-length="200" placeholder="请输入备注" />
			</a-form-item>
		</a-form>
	</a-modal>
</template>

<script lang="ts" setup name="ZsAddRole">
import { useForm, useBasicsState } from '@/hooks';
import { createModalTitle } from '@/utils';
import { englishRule } from '@/utils/rules';
import curryingRequest, { SYSTEM_APIS } from '@/service';
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: {
			id?: StringAndUndefined;
			code: StringAndUndefined;
			uname: StringAndUndefined;
			bz: StringAndUndefined;
		};
	}>(),
	{
		data: () => ({} as any),
	}
);
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 表单
const { form, formRef } = useForm(() => ({ ...props.data, dataPowerFlag: '0' }));
// 表单验证
const rules = {
	uname: {
		required: true,
		message: '请输入角色名',
	},
	code: {
		required: true,
		message: '请输入角色代码',
		validator: (value: string, callback: (error?: string) => void) => {
			if (!englishRule(value)) callback('角色代码只能输入英文');
		},
	},
};
// 父组件方法
const emits = defineEmits(['close', 'success']);
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		if (props.data.id) submitData('editRole');
		else submitData('addRole');
	});
};
// 提交数据
const submitData = async (type: 'addRole' | 'editRole') => {
	const { err } = await curryingRequest(
		() => SYSTEM_APIS[type](form.value),
		{
			before: () => setActiveKey('okLoading'),
			after: () => setActiveKey(null),
		}
	);
	// 处理错误
	if (err) return;
	// 触发成功
	emits('success');
	// 触发关闭
	emits('close');
};
</script>
