<template>
	<a-modal top="10%" width="60vw" :title="createModalTitle('表格', !!props.data.id)" unmount-on-close visible
		:align-center="false" :mask-closable="false" :ok-loading="activeKey === 'okLoading'" @cancel="emits('close')"
		@ok="validateData">
		<a-form ref="formRef" :model="form" label-align="left" size="large" auto-label-width :rules="rules">

		</a-form>
	</a-modal>
</template>

<script lang="ts" setup name="zsAddUpdate">
import { useForm, useBasicsState, useModal, curryingRequest } from '@/hooks';
import { createModalTitle } from '@/utils';
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => ({} as any),
	}
);
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 表单
const { form, formRef } = useForm(() => ({ ...props.data }));
// 表单验证
const rules = {
};
// 父组件方法
const emits = defineEmits(['close', 'success']);
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		if (props.data.id) submitData('updateApi');
		else submitData('addApi');
	});
};
// 提交数据
const submitData = async (type: 'addApi' | 'updateApi') => {
	// const { err } = await curryingRequest(
	// 	() => type(
	// 		{
	// 			...form.value,

	// 		}),
	// 	{
	// 		before: () => setActiveKey('okLoading'),
	// 		after: () => setActiveKey(null),
	// 	}
	// );
	// // 处理错误
	// if (err) return;
	// 触发成功
	emits('success');
	// 触发关闭
	emits('close');
};
</script>
