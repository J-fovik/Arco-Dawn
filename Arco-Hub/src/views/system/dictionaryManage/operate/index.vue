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
			<a-card
				:title="createModalTitle('字典', !!route.query.id)"
				:bordered="false"
				class="general-card"
			>
				<a-grid :cols="3" :col-gap="12">
					<a-grid-item>
						<a-form-item label="编码:" field="typeCode" required>
							<a-input v-model.trim="form.typeCode" placeholder="请输入编码" />
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item label="名称:" field="typeName">
							<a-input v-model.trim="form.typeName" placeholder="请输入名称" />
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item field="remark" label="备注:">
							<a-textarea
								v-model.trim="form.remark"
								auto-size
								placeholder="请输入备注"
							/>
						</a-form-item>
					</a-grid-item>
				</a-grid>
			</a-card>
			<a-card title="字典明细" :bordered="false" class="general-card margin-top">
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
					:data="form.detailList"
					:pagination="false"
					:bordered="false"
				>
					<template #detailCode="{ record, rowIndex }">
						<a-form-item
							:field="`detailList[${rowIndex}].detailCode`"
							:rules="[{ validator: rules.detailCode.validator }]"
							hide-label
							hide-asterisk
						>
							<a-input
								v-model="record.detailCode"
								size="large"
								placeholder="请输入子项编码"
							/>
						</a-form-item>
					</template>
					<template #detailName="{ record, rowIndex }">
						<div class="flex">
							<a-form-item
								:field="`detailList[${rowIndex}].detailName`"
								:rules="[{ validator: rules.detailName.validator }]"
								hide-label
								hide-asterisk
							>
								<a-input
									v-model="record.detailName"
									size="large"
									placeholder="请输入子项名称"
								/>
							</a-form-item>
						</div>
					</template>
					<template #remake="{ record }">
						<div class="flex">
							<a-textarea
								v-model.trim="record.remark"
								auto-size
								placeholder="请输入备注"
							/>
						</div>
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
				<a-button
					v-if="!route.query.isReadOnly"
					type="primary"
					:loading="activeKey === '确定'"
					@click="validateData"
					>确定</a-button
				>
				<a-button @click="() => jumpTabName()">返回</a-button>
			</a-space>
		</div>
	</ZsContent>
</template>

<script lang="ts" setup name="SystemDictionaryOperate">
import { useForm, useBasicsState } from '@/hooks';
import { useTabStore } from '@/pinia';
import { createModalTitle } from '@/utils';
import { columns } from './table';
import curryingRequest, { SYSTEM_APIS } from '@/service';
// 路由信息
const route = useRoute();

// 标签页控制
const { jumpTabName } = useTabStore();
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 表单
const { form, formRef } = useForm(() => ({
	typeCode: '',
	typeName: '',
	remark: '',
	detailList: [] as Array<any>,
}));
// 表单验证
const rules = {
	typeCode: {
		required: true,
		message: '请输入编号',
	},
	typeName: {
		required: true,
		message: '请输入名称',
	},
	detailCode: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (form.value.detailList.filter((item: any) => item.detailCode === value).length > 1)
				callback('子项编码不允许重复');
		},
	},
	detailName: {
		required: true,
		validator: (value: string, callback: (error?: string) => void) => {
			if (form.value.detailList.filter((item: any) => item.detailName === value).length > 1)
				callback('子项名称不允许重复');
		},
	},
};
// 用户详情
const getDictionaryDetail = async () => {
	const { res, err } = await curryingRequest(() =>
		SYSTEM_APIS.getDictionaryDetail({
			id: route.query.id,
		})
	);
	// 处理错误
	if (err) return;
	// 设置表单数据
	form.value = res?.data;
	// 设置详细数据
};
// 添加空数据
const addTableItem = () => {
	form.value.detailList.push({ detailCode: '', detailName: '' });
};
// 删除
const deleteTableItem = (len: number) => {
	form.value.detailList.splice(len, 1);
};
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		if (route.query.id) submitData('editDictionary');
		else submitData('addDictionary');
	});
};
// 提交数据
const submitData = async (name: 'addDictionary' | 'editDictionary') => {
	const { err } = await curryingRequest(() => SYSTEM_APIS[name](form.value), {
		before: () => setActiveKey('确定'),
		after: () => setActiveKey(null),
		successMsg: '保存成功',
	});
	// 处理错误
	if (err) return;
	// 触发成功
	jumpTabName();
};
// 判断是否需要查询
if (route.query.id) {
	getDictionaryDetail();
}
</script>
