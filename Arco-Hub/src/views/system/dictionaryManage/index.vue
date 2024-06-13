<template>
	<div>
		<ZsSearchTableMould
			:table-columns="columnsData"
			:table-size="tableBaseOptions.size"
			@reset-search="resetForm"
			@search="resetData"
			@change-table-size="changeTableSize"
			@change-table-column="changeTableColumn"
		>
			<template #form>
				<a-form :model="form" label-align="left" size="large" auto-label-width>
					<a-grid :cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 4 }" :col-gap="12">
						<a-grid-item>
							<a-form-item label="编码:">
								<a-input v-model="form.typeCode" placeholder="请输入编码" />
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="名称:">
								<a-input v-model="form.typeName" placeholder="请输入名称" />
							</a-form-item>
						</a-grid-item>
					</a-grid>
				</a-form>
			</template>
			<template #operate>
				<a-space>
					<a-button
						type="outline"
						@click="$router.push('/system/dictionaryManage/operate')"
					>
						<template #icon>
							<icon-plus />
						</template>
						新增
					</a-button>
					<a-button
						type="outline"
						status="danger"
						:disabled="!tableBaseOptions.selectedKeys.length"
						@click="batchTableRows('deleteDictionary')"
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
					row-key="id"
					:data="tableData"
					:row-selection="tableBaseOptions.rowSelection"
					:bordered="tableBaseOptions.bordered"
					:pagination="tableBaseOptions.pagination"
					:size="tableBaseOptions.size"
					:columns="visibleColumnsData"
					:stripe="tableBaseOptions.stripe"
					:loading="loading"
				>
					<template #operate="{ record }">
						<a-button
							type="text"
							@click="
								$router.push(`/system/dictionaryManage/operate?id=${record.id}`)
							"
							>编辑</a-button
						>
					</template>
				</a-table>
			</template>
		</ZsSearchTableMould>
	</div>
</template>

<script lang="ts" setup name="SystemDictionaryManage">
import { useForm, useTable, useModal, useAsyncNoInitData } from '@/hooks';
import { createTableColumns } from './table';
import curryingRequest, { SYSTEM_APIS } from '@/service';

// 对话框
const { warningModal } = useModal();
// form
const { form, resetForm } = useForm(
	() => ({
		typeCode: '', //用户名称
		typeName: '',
	}),
	() => resetData()
);
// 表单
const {
	columnsData,
	visibleColumnsData,
	tableBaseOptions,
	resetData,
	extendTableList,
	changeTableColumn,
	changeTableSize,
} = useTable(createTableColumns(), () => initData());
// 批量操作表格
const batchTableRows = (type: 'deleteDictionary') => {
	warningModal(`确定操作选中的${tableBaseOptions.selectedKeys.length}数据吗？`, async (done) => {
		const { err } = await curryingRequest(
			() =>
				SYSTEM_APIS[type]({
					idList: tableBaseOptions.selectedKeys,
				}),
			{
				successMsg: '操作成功',
			}
		);
		// 处理错误
		if (err) return;
		// 关闭弹窗
		done(true);
		// 重置勾选
		tableBaseOptions.selectedKeys = [];
		// 获取数据
		initData();
	});
};
// 获取列表
const {
	data: tableData,
	loading,
	initData,
} = useAsyncNoInitData(async () => {
	const { res, err } = await curryingRequest(() =>
		SYSTEM_APIS.getDictionaryList({
			...form.value,
			currentPage: tableBaseOptions.pagination.current,
			pageSize: tableBaseOptions.pagination.pageSize,
			pagingOrNot: '1',
		})
	);
	// 处理错误
	if (err) return [];
	// 设置分页信息
	tableBaseOptions.pagination.total = res!.data.totalCount;
	// 返回处理后的数据
	return extendTableList(res?.data.dictList);
});
// 激活刷新
onActivated(initData);
</script>
