<template>
	<ZsContent>
		<a-form
			ref="formRef"
			:model="form"
			label-align="left"
			size="large"
			auto-label-width
			:rules="rules"
		>
			<a-card title="表单表格验证" :bordered="false" class="general-card margin-top">
				<template #extra>
					<a-button type="outline" @click="addTableItem">
						<template #icon>
							<icon-plus />
						</template>
						添加子项
					</a-button>
				</template>
				<a-table
					size="large"
					:columns="columns"
					:data="form.tableData"
					:pagination="false"
					:bordered="false"
				>
					<template #label="{ record, rowIndex }">
						<a-form-item
							:field="`tableData[${rowIndex}].label`"
							:rules="[{ validator: rules.label.validator }]"
							hide-label
							hide-asterisk
						>
							<a-input
								v-model="record.label"
								size="large"
								placeholder="请输入子项名称"
							/>
						</a-form-item>
					</template>
					<template #type="{ record, rowIndex }">
						<a-form-item
							:field="`tableData[${rowIndex}].type`"
							:rules="rules.type"
							hide-label
							hide-asterisk
						>
							<a-select
								v-model="record.type"
								:options="computedTypeList"
								allow-search
								allow-clear
								class="flex-1"
								:disabled="computedTypeList.length === 0"
								:field-names="{ label: 'label', value: 'value' }"
								placeholder="请选择类型"
							/>
						</a-form-item>
					</template>
					<template #startTime="{ record, rowIndex }">
						<a-form-item
							:field="`tableData[${rowIndex}].startTime`"
							:rules="rules.startTime"
							hide-label
							hide-asterisk
						>
							<a-date-picker
								v-model="record.startTime"
								format="YYYY/MM/DD"
								class="flex-1"
								value-format="YYYY-MM-DD"
								placeholder="请选择开始时间"
								@change="record.endTime = ''"
							/>
						</a-form-item>
					</template>
					<template #endTime="{ record, rowIndex }">
						<a-form-item
							:field="`tableData[${rowIndex}].endTime`"
							:rules="rules.endTime"
							hide-label
							hide-asterisk
						>
							<a-date-picker
								v-model="record.endTime"
								format="YYYY/MM/DD"
								class="flex-1"
								value-format="YYYY-MM-DD"
								placeholder="请选择结束时间"
								:disabled-date="
									(current:any) => dayjs(current).isBefore(dayjs(record.startTime))
								"
							/>
						</a-form-item>
					</template>
					<template #operate="{ rowIndex }">
						<a-button type="text" status="danger" @click="deleteTableItem(rowIndex)"
							>删除</a-button
						>
					</template>
				</a-table>
			</a-card>
		</a-form>
		<div style="height: 100px"></div>
		<div class="submit-footer flex justify-end">
			<a-space>
				<a-button type="primary" :loading="activeKey === '确定'" @click="validateData"
					>确定</a-button
				>
				<a-button @click="() => jumpTabName()">返回</a-button>
			</a-space>
		</div>
	</ZsContent>
</template>

<script lang="ts" setup name="MenuTableRules">
import { URL, curryingRequest } from '@/service';
import dayjs from 'dayjs';
import { Message } from '@arco-design/web-vue';
import { useForm, useBasicsState } from '@/hooks';
import { useTabStore } from '@/pinia';
import { columns } from './table';
// 路由信息
const route = useRoute();
// 标签页控制
const { jumpTabName } = useTabStore();
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 表单
const { form, formRef } = useForm(() => ({
	tableData: [] as Array<any>,
}));
// 类型数组
const typeList = ref([
	{
		label: '类型一',
		value: '1',
	},
	{
		label: '类型二',
		value: '2',
	},
	{
		label: '类型三',
		value: '3',
	},
	{
		label: '类型四',
		value: '4',
	},
	{
		label: '类型五',
		value: '5',
	},
] as any);
// 计算禁用类型
const computedTypeList = computed(() => {
	return typeList.value.map((o: any) => {
		return {
			...o,
			disabled: form.value.tableData.some((table) => table.type === o.value),
		};
	});
});
// 表单验证
const rules = {
	label: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (!value) callback('子项名称不允许重复');
			if (form.value.tableData.filter((item: any) => item.label === value).length > 1)
				callback('子项名称不允许重复');
		},
	},
	type: {
		required: true,
		message: '请选择类型',
	},
	startTime: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (!value) callback('请选择开始时间');
		},
	},
	endTime: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (!value) callback('请选择结束时间');
		},
	},
};

// 添加空数据
const addTableItem = () => {
	form.value.tableData.push({ type: '', label: '', startTime: '', endTime: '' });
};
// 删除
const deleteTableItem = (len: number) => {
	form.value.tableData.splice(len, 1);
};
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (form.value.tableData.length <= 0) return Message.warning('请先点击增加一行');
		if (errors) return;
		submitData();
	});
};
// 提交数据
const submitData = async () => {
	// const { err } = await curryingRequest(
	// 	{
	// 		url: URL.TEST.LIST_EDIT,
	// 		data: {
	// 			...form.value,
	// 		},
	// 	},
	// 	{
	// 		before: () => setActiveKey('确定'),
	// 		after: () => setActiveKey(null),
	// 		successMsg: '保存成功',
	// 	}
	// );
	// // 处理错误
	// if (err) return;
	// 触发成功
	jumpTabName();
};
</script>
