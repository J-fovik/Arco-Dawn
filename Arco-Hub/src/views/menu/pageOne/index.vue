<template>
	<div>
		<zs-search-table-mould
			fold
			:table-columns="columnsData"
			:table-size="tableBaseOptions.size"
			@reset-search="resetForm"
			@search="resetData"
			@change-table-size="changeTableSize"
			@change-table-column="changeTableColumn"
		>
			<template #form="{ collapsed }">
				<a-form :model="form" label-align="left" size="large" auto-label-width>
					<a-grid
						:cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 4 }"
						:col-gap="12"
						:collapsed="!collapsed"
					>
						<a-grid-item>
							<a-form-item label="名称:">
								<a-input v-model.trim="form.name" placeholder="请输入名称" />
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="状态:">
								<a-select
									v-model="form.status"
									:options="[...ALL_OPTIONS, ...STATUS_OPTIONS]"
									allow-search
									:field-names="{ label: 'label', value: 'value' }"
									placeholder="请选择状态"
								/>
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="性别:">
								<a-select
									v-model="form.sex"
									:options="sexList"
									allow-search
									:field-names="{ label: 'label', value: 'value' }"
									placeholder="请选择性别"
								/>
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="类型:">
								<a-select
									v-model="form.type"
									:options="typeList"
									allow-search
									:disabled="typeList.length === 0"
									:field-names="{ label: 'label', value: 'value' }"
									placeholder="请选择类型"
								/>
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="日期:">
								<a-date-picker
									v-model="form.date"
									format="YYYY/MM/DD"
									class="flex-1"
									value-format="YYYY-MM-DD"
									placeholder="请选择日期"
								/>
							</a-form-item>
						</a-grid-item>
					</a-grid>
				</a-form>
			</template>
			<template #operate>
				<a-space>
					<a-button type="outline" @click="setActiveKey('Operation')">
						<template #icon>
							<icon-plus />
						</template>
						新增
					</a-button>
					<a-button
						type="outline"
						status="danger"
						:disabled="!tableBaseOptions.selectedKeys.length"
						:loading="activeKey === '删除'"
						@click="batchTableRows()"
					>
						<template #icon>
							<icon-close />
						</template>
						删除
					</a-button>
				</a-space>
			</template>
			<template #table>
				<a-table
					v-model:selected-keys="tableBaseOptions.selectedKeys"
					class="zs-table"
					row-key="groupId"
					:data="tableData"
					:row-selection="tableBaseOptions.rowSelection"
					:bordered="tableBaseOptions.bordered"
					:pagination="tableBaseOptions.pagination"
					:size="tableBaseOptions.size"
					:columns="visibleColumnsData"
					:stripe="tableBaseOptions.stripe"
					:loading="loading"
				>
					<template #status="{ record }">
						<a-switch
							size="medium"
							:model-value="record.status === '1'"
							:loading="activeKey === record.id"
							@change="changeSwitch(record)"
						>
							<template #checked>暂停</template>
							<template #unchecked>恢复</template>
						</a-switch>
					</template>
					<template #image="{ record }">
						<a-image v-if="record.image" width="100" height="100" :src="record.image" />
						<div v-else>-</div>
					</template>
					<template #operate="{ record }">
						<a-button-group>
							<a-button
								type="text"
								status="success"
								@click="
									setSelectRow({ ...record, isReadOnly: true }, () =>
										setActiveKey('Operation')
									)
								"
								>详情</a-button
							>
							<a-button
								type="text"
								status="danger"
								:loading="activeKey === '删除'"
								@click="batchTableRows(record.id)"
							>
								删除
							</a-button>
							<a-button
								type="text"
								@click="setSelectRow(record, () => setActiveKey('Operation'))"
								>编辑</a-button
							>
						</a-button-group>
					</template>
				</a-table>
			</template>
		</zs-search-table-mould>
		<Operation
			v-if="activeKey === 'Operation'"
			:data="selectRow"
			@success="initData"
			@close="setSelectRow({}, () => setActiveKey(null))"
		></Operation>
	</div>
</template>

<script lang="ts" setup name="MenuPageOne">
import {
	useForm,
	useTable,
	useModal,
	useBasicsState,
	useAsyncData,
	useAsyncWatchShallowData,
} from '@/hooks';
import { createTableColumns } from './table';
// import curryingRequest, { SYSTEM_APIS } from '@/service';
import { sleep } from '@/utils';
import { ALL_OPTIONS } from '@/utils/options'; // 全部
import { TABLE_DATA, SEX_OPTIONS, TYPES_A_OPTIONS, TYPES_B_OPTIONS, STATUS_OPTIONS } from '../mack'; // 模拟接口数据
import Operation from './components/index.vue';
/* 对话框 */
const { warningModal } = useModal();
/* 页面唯一元素控制 */
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
/* 表单hooks */
const { form, resetForm } = useForm(
	() => ({
		name: '', // 名称
		status: '', // 状态
		sex: '', // 性别
		type: '', // 类型
		date: '', // 日期
	}),
	() => resetData()
);
/* 表格hooks */
const {
	selectRow, // 当前选中的值
	columnsData, // 表头设置
	visibleColumnsData, //表格的列描述信息
	tableBaseOptions, //基础表格设置
	resetData, // 重置分页筛选
	setSelectRow, // 设置当前数据
	extendTableList, // 处理表格数据
	changeTableColumn, // 改变表格表头
	changeTableSize, // 改变表格size
} = useTable(createTableColumns(), () => initData());
/* 获取性别列表 */
const { data: sexList } = useAsyncData(async () => {
	// const { res, err } = await curryingRequest(() => SYSTEM_APIS.getSexListApi({}));
	// 处理错误
	// if (err) return;
	// 返回处理后的数据
	return SEX_OPTIONS;
});
/* 监听性别变换获取类型 */
const { data: typeList } = useAsyncWatchShallowData<Array<any>>(
	async () => {
		// const { res, err } = await curryingRequest(() => SYSTEM_APIS.getTypeListApi({}));
		// 处理错误
		// if (err) return;
		// 每次请求将其赋空
		form.value.type = '';
		// 模拟变化参数后端返回不同数据
		if (form.value.sex == '1') return TYPES_A_OPTIONS;
		else return TYPES_B_OPTIONS;
	},
	{ watchSource: () => form.value.sex, defaultValue: [] }
);
/* 改变状态控制 */
const changeSwitch = async (row: any) => {
	// const { err } = await curryingRequest(
	// 	() =>
	// 		SYSTEM_APIS.changeSwitchApi({
	// 			id: row.id, //团号.
	// 			status: row.status == '1' ? '0' : '1', //暂停或恢复 0.恢复 1.暂停
	// 		}),
	// 	{
	// 		before: () => setActiveKey(row.id),
	// 		after: () => setActiveKey(null),
	// 		successMsg: '操作成功',
	// 	}
	// );
	// // 处理错误
	// if (err) return;
	// 获取数据
	initData();
};
/* 删除 (兼容单个删除和批量删除) */
const batchTableRows = (id?: any) => {
	let title = '';
	if (id) {
		title = '确定操作当前数据吗？';
	} else {
		title = `确定操作选中的${tableBaseOptions.selectedKeys.length}数据吗？`;
	}
	warningModal(title, async (done) => {
		console.log('删除数据：', id ? [id] : tableBaseOptions.selectedKeys);
		// const { err } = await curryingRequest(
		// 	() =>
		// 		SYSTEM_APIS.delApi({
		// 			idList: id ? [id] : tableBaseOptions.selectedKeys,
		// 		}),
		// 	{
		// 		successMsg: '操作成功',
		// 	}
		// );
		// // 处理错误
		// if (err) return;
		// 关闭弹窗
		done(true);
		// 重置勾选
		tableBaseOptions.selectedKeys = [];
		// 获取数据
		initData();
	});
};
/* 获取列表 */
const {
	data: tableData,
	loading,
	initData,
} = useAsyncData(async () => {
	await sleep(1000);
	console.log('表单参数', form.value);
	console.log(
		'当前页：' +
			tableBaseOptions.pagination.current +
			'，每页数量' +
			tableBaseOptions.pagination.pageSize
	);
	// const { res, err } = await curryingRequest(() =>
	// 	SYSTEM_APIS.getTableListApi({
	// 		...form.value,
	// 		currentPage: tableBaseOptions.pagination.current,
	// 		pageSize: tableBaseOptions.pagination.pageSize,
	// 		pagingOrNot: '1',
	// 	})
	// );
	// // 处理错误
	// if (err) return;
	// 设置分页信息
	// tableBaseOptions.pagination.total = res!.data.totalCount;
	// // 返回处理后的数据
	// return extendTableList(res!.data);
	tableBaseOptions.pagination.total = TABLE_DATA.total; // 赋值总页数
	// 可直接返回数据 或 返回处理后数据
	return extendTableList(
		TABLE_DATA.tableData.map((o: any) => {
			o.num = o.num * 1; // 转数字
			o.disabled = o.status == '0';
			return o;
		})
	); // 处理数据
});
</script>
