<template>
	<zs-base-modal title="" align-center @cancel="$emit('cancel')">
		<div class="bg-white p-[0px_10px] rounded-[5px_5px] w-[500px]">
			<div class="flex justify-between items-center cursor-pointer mb-[30px]">
				<div class="text-[24px] font-bold">修改志愿表名称</div>
			</div>
			<a-form
				ref="formRef"
				:model="form"
				label-align="right"
				size="large"
				auto-label-width
				:rules="rules"
				@keyup.enter="validateData"
			>
				<a-form-item field="name" :validate-trigger="['input']" hide-label hide-asterisk>
					<div class="h-[50px] border border-solid border-[#EDEDED] w-full">
						<a-input
							v-model.trim="form.name"
							hide-button
							allow-clear
							class="inputBg"
							placeholder="请输入志愿表名称"
						>
						</a-input>
					</div>
				</a-form-item>
			</a-form>
			<div class="flex justify-end items-center mt-[30px]">
				<a-space>
					<a-button size="large" class="cancel" @click="$emit('cancel')">取消</a-button>
					<a-button size="large" class="submit" @click="validateData" :loading="loading"
						>确定</a-button
					>
				</a-space>
			</div>
		</div>
	</zs-base-modal>
</template>

<script lang="ts" setup name="ZsChoiceChangeNameModal">
// 父组件参数
const props = withDefaults(
	defineProps<{
		id: any;
		name: any;
	}>(),
	{
		id: '',
		name: '',
	}
);
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// loading
const [loading, setLoading] = useBasicsState(false);
// 表单
const { form, formRef } = useForm(() => ({
	name: props.name,
	id: props.id,
}));
// 表单验证
const rules = {
	name: {
		required: true,
		message: '请输入志愿表名称',
	},
};
// 父组件方法
const emits = defineEmits(['cancel', 'success']);
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		// 保存志愿表名称
		saveWishName();
	});
};
// 保存志愿表名称
const saveWishName = async () => {
	// 登录loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.CHOICE.CHANGE_WISH_NAME, {
		method: 'POST',
		body: {
			name: form.value.name,
			id: form.value.id, // 志愿表id
		},
	});
	// 处理错误
	if (err) return setLoading(false);
	// 提示修改成功
	$zsMsg('success', res?.data);
	// 登录loading
	setLoading(false);
	// 触发成功
	emits('success', form.value.name);
};
</script>
<style scoped>
.submit,
.submit:hover {
	width: 68px;
	color: white;
	height: 40px;
	background: #7c92ff;
	border-radius: 8px;
}

.cancel,
.cancel:hover {
	width: 68px;
	background: white;
	height: 40px;
	border: 1px solid #ededed;
	color: #999;
	border-radius: 8px;
}

.inputBg {
	background: #ffffff;
	height: 48px;
}
:deep(.arco-input-wrapper, .arco-input-prepend, .arco-input-append) {
	background: #ffffff !important;
}
:deep(.arco-checkbox-checked .arco-checkbox-icon) {
	background: #7c92ff;
}
</style>
