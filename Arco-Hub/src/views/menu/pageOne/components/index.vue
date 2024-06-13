<template>
	<a-modal
		width="80vw"
		unmount-on-close
		:title="form.isReadOnly ? '菜单页面详情' : form.id ? '编辑菜单页面' : '新增菜单页面'"
		visible
		top="10vh"
		:align-center="false"
		:mask-closable="false"
		:ok-loading="activeKey === 'okLoading'"
		@cancel="emits('close')"
		@ok="form.isReadOnly ? emits('close') : validateData()"
	>
		<a-form
			ref="formRef"
			:model="form"
			label-align="left"
			size="large"
			auto-label-width
			:disabled="!!form.isReadOnly"
			:rules="rules"
		>
			<a-grid :col-gap="12">
				<a-grid-item :span="12">
					<a-form-item label="名称:" field="name">
						<a-input v-model.trim="form.name" placeholder="请输入名称" />
					</a-form-item>
				</a-grid-item>
				<a-grid-item :span="12">
					<a-form-item label="地点:" field="address">
						<a-textarea v-model.trim="form.address" placeholder="请输入地点" />
					</a-form-item>
				</a-grid-item>
				<a-grid-item :span="12">
					<a-form-item label="金额:">
						<a-input-number
							v-model="form.money"
							:formatter="(value: string) => turnThousandth(value, '')"
							:parser="(value: string) => value.replace(/,/g, '')"
							:precision="2"
							:placeholder="formPlaceholder('请输入金额')"
						/>
					</a-form-item>
				</a-grid-item>
				<a-grid-item :span="12">
					<a-form-item label="数量:">
						<a-input-number
							v-model="form.num"
							:min="1"
							:max="150"
							:precision="0"
							:placeholder="formPlaceholder('请输入数量')"
						/>
					</a-form-item>
				</a-grid-item>
				<a-grid-item :span="12">
					<a-form-item label="手机号:" field="phone">
						<a-input-number
							v-model="form.phone"
							:precision="0"
							placeholder="请输入手机号"
						/>
					</a-form-item>
				</a-grid-item>
				<a-grid-item :span="12">
					<a-form-item label="开始日期:" field="startDate">
						<a-date-picker
							v-model="form.startDate"
							format="YYYY/MM/DD"
							class="flex-1"
							value-format="YYYY-MM-DD"
							placeholder="请选择开始日期"
						/>
					</a-form-item>
				</a-grid-item>
				<a-grid-item :span="12">
					<a-form-item label="结束日期:" field="endDate">
						<a-date-picker
							v-model="form.endDate"
							format="YYYY/MM/DD"
							class="flex-1"
							value-format="YYYY-MM-DD"
							placeholder="请选择结束日期"
						/>
					</a-form-item>
				</a-grid-item>
			</a-grid>
		</a-form>
	</a-modal>
</template>

<script lang="ts" setup name="ZsAddRole">
import dayjs from 'dayjs';
import { useForm, useBasicsState } from '@/hooks';
import { turnThousandth, turnDateTime } from '@/utils';
import { phoneRule, landlinePhoneRule } from '@/utils/rules';
// import curryingRequest, { SYSTEM_APIS } from '@/service';
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: AnyObject;
	}>(),
	{
		data: () => ({}),
	}
);
console.log(props.data);
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 表单
const { form, formRef, formPlaceholder } = useForm(() => ({ ...props.data }));
// 表单验证
const rules = {
	name: {
		required: true,
		message: '请输入名称',
	},
	address: {
		required: true,
		message: '请输入地点',
	},
	phone: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (!value) callback('请输入手机号码');
			if (!phoneRule(value) && !landlinePhoneRule(value)) callback('请输入正确的手机号码');
		},
	},
	startDate: {
		required: true,
		validator: (value: any, callback: any) => {
			if (!value) callback('请选择开始时间');
			if (form.value.endDate && dayjs(value).isAfter(dayjs(form.value.endDate)))
				callback('开始时间不能大于结束时间');
		},
	},
	endDate: {
		required: true,
		validator: (value: any, callback: any) => {
			if (!value) callback('请选择开始时间');
			if (form.value.startDate && dayjs(value).isBefore(dayjs(form.value.endDate)))
				callback('结束时间不能小于开始时间');
		},
	},
};
// 父组件方法
const emits = defineEmits(['close', 'success']);
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		/* 可加其他特殊校验 */
		/* 有id则表示修改，没有则表示新增 */
		if (form.value.id) submitData('editApi');
		else submitData('addApi');
	});
};
// 提交数据
const submitData = async (type: 'addApi' | 'editApi') => {
	console.log('提交接口', type);
	console.log('提交参数', form.value);
	// const { err } = await curryingRequest(() => SYSTEM_APIS[type](form.value), {
	// 	before: () => setActiveKey('okLoading'),
	// 	after: () => setActiveKey(null),
	// });
	// // 处理错误
	// if (err) return;
	// 触发成功
	emits('success');
	// 触发关闭
	emits('close');
};
/*  查询详情信息 */
const getDetail = async () => {
	console.log('查询详情id', form.value.id);
	// const { res, err } = await curryingRequest(() => SYSTEM_APIS.detailApi({ id: form.value.id }));
	// if (err) return;
	// 赋值form
	// form.value = res?.data;
};
/* 查询详情和编辑时才调用 */
if (form.value.id) getDetail();
</script>
<style scoped>
:deep(.arco-input-wrapper.arco-input-disabled) {
	color: var(--color-text-1);
}

:deep(.arco-input-wrapper .arco-input[disabled]) {
	-webkit-text-fill-color: var(--color-text-1);
}

:deep(.arco-radio-disabled .arco-radio-label) {
	color: var(--color-text-1);
}

:deep(.arco-select-view-single.arco-select-view-disabled) {
	color: var(--color-text-1);
}

:deep(.arco-textarea[disabled]) {
	-webkit-text-fill-color: var(--color-text-1);
}

:deep(.arco-select-view-single .arco-select-view-input[disabled]) {
	-webkit-text-fill-color: var(--color-text-1);
}

:deep(.arco-picker input[disabled]) {
	-webkit-text-fill-color: var(--color-text-1);
}

:deep(.arco-checkbox-disabled .arco-checkbox-label) {
	color: var(--color-text-1);
}
</style>
