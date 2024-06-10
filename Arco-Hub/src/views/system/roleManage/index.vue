<template>
	<div>
		<zs-search-table-mould :table-columns="columnsData" :table-size="tableBaseOptions.size" @reset-search="resetForm"
			@search="resetData" @change-table-size="changeTableSize" @change-table-column="changeTableColumn">
			<template #form>
				<a-form :model="form" label-align="left" size="large" auto-label-width>
					<a-grid :cols="{ md: 3, lg: 3, xl: 3, xxl: 4 }" :col-gap="12">
						<a-grid-item>
							<a-form-item field="code" label="角色代码:">
								<a-input v-model="form.code" placeholder="请输入角色代码" />
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item field="uname" label="角色名称:">
								<a-input v-model="form.uname" placeholder="请输入角色名称" />
							</a-form-item>
						</a-grid-item>
					</a-grid>
				</a-form>
			</template>
			<template #operate>
				<a-space>
					<a-button type="outline" @click="setActiveKey('ZsAddRole')">
						<template #icon>
							<icon-plus />
						</template>
						新增
					</a-button>
					<a-button type="outline" status="danger" :disabled="!tableBaseOptions.selectedKeys.length"
						:loading="activeKey === '删除'" @click="batchTableRows('batchDeleteRole')">
						<template #icon>
							<icon-close />
						</template>
						删除
					</a-button>
				</a-space>
			</template>
			<template #table>
				<a-table v-model:selected-keys="tableBaseOptions.selectedKeys" class="zs-table" row-key="id"
					:data="tableData" :row-selection="tableBaseOptions.rowSelection" :bordered="tableBaseOptions.bordered"
					:pagination="tableBaseOptions.pagination" :size="tableBaseOptions.size" :columns="visibleColumnsData"
					:stripe="tableBaseOptions.stripe" :loading="loading">
					<template #operate="{ record }">
						<a-space>
							<a-button type="text"
								@click="setSelectRow(record, () => setActiveKey('ZsAddRole'))">编辑</a-button>
							<a-button type="text" status="success" @click="
								setSelectRow(record, () => setActiveKey('ZsDistributionPower'))
								">权限分配</a-button>
						</a-space>
					</template>
				</a-table>
			</template>
		</zs-search-table-mould>
		<zs-add-role v-if="activeKey === 'ZsAddRole'" :data="selectRow" @success="initData"
			@close="setSelectRow({}, () => setActiveKey(null))"></zs-add-role>
		<zs-distribution-power v-if="activeKey === 'ZsDistributionPower'" :data="selectRow" @success="initData"
			@close="setSelectRow({}, () => setActiveKey(null))" />
	</div>
</template>

<script lang="ts" setup name="SystemRoleManage">
import { useForm, useTable, useModal, useBasicsState, useAsyncData } from '@/hooks';
import { createTableColumns } from './table';

import curryingRequest, { SYSTEM_APIS } from '@/service';
import ZsSearchTableMould from '@/components/zsSearchTableMould/index.vue';
import ZsAddRole from './components/zsAddRole.vue';
import ZsDistributionPower from './components/zsDistributionPower.vue';
// 对话框
const { warningModal } = useModal();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form, resetForm } = useForm(
	() => ({
		code: '',
		uname: '',
	}),
	() => resetData()
);
// 表单
const {
	selectRow,
	columnsData,
	visibleColumnsData,
	tableBaseOptions,
	resetData,
	setSelectRow,
	extendTableList,
	changeTableColumn,
	changeTableSize,
} = useTable(createTableColumns(), () => initData());
// 删除
const batchTableRows = (type: 'batchDeleteRole') => {
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
// 用户角色
const {
	data: tableData,
	loading,
	initData,
} = useAsyncData(async () => {
	const { res, err } = await curryingRequest(() =>
		SYSTEM_APIS.getRoleList({
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
	return extendTableList(res!.data.roleList);
});
</script>
