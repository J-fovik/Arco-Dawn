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
							<a-form-item label="账号:">
								<a-input
									v-model.trim="form.userAccount"
									placeholder="请输入登录账号"
								/>
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="姓名:">
								<a-input v-model.trim="form.username" placeholder="请输入姓名" />
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="组织:">
								<a-input v-model.trim="form.departName" placeholder="请选择组织" />
							</a-form-item>
						</a-grid-item>
						<a-grid-item>
							<a-form-item label="角色:">
								<a-select
									v-model="form.roleCode"
									:field-names="{
										label: 'rolename',
										value: 'roleCode',
									}"
									allow-search
									allow-clear
									:options="roleList"
									placeholder="请选择角色"
								/>
							</a-form-item>
						</a-grid-item>
					</a-grid>
				</a-form>
			</template>
			<template #operate>
				<a-space>
					<a-button type="outline" @click="$router.push('/system/userManage/operate')">
						<template #icon>
							<icon-plus />
						</template>
						新增
					</a-button>
					<a-button
						type="outline"
						status="danger"
						:disabled="!tableBaseOptions.selectedKeys.length"
						@click="batchTableRows('batchDeleteUser')"
					>
						<template #icon>
							<icon-close />
						</template>
						删除
					</a-button>
					<a-button
						type="outline"
						status="danger"
						:disabled="!tableBaseOptions.selectedKeys.length"
						@click="batchTableRows('batchLogoutUser')"
					>
						<template #icon>
							<icon-delete />
						</template>
						注销
					</a-button>
					<a-button
						type="outline"
						status="warning"
						:disabled="!tableBaseOptions.selectedKeys.length"
						@click="batchTableRows('batchResetPassword')"
					>
						<template #icon>
							<icon-loop />
						</template>
						密码重置
					</a-button>
				</a-space>
			</template>
			<template #table>
				<a-table
					v-model:selected-keys="tableBaseOptions.selectedKeys"
					class="zs-table"
					row-key="userId"
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
						<a-button-group>
							<a-button
								type="text"
								status="success"
								@click="
									$router.push(
										`/system/userManage/operate?id=${record.userId}&isReadOnly=true`
									)
								"
								>详情</a-button
							>
							<a-button
								type="text"
								@click="
									$router.push(`/system/userManage/operate?id=${record.userId}`)
								"
								>编辑</a-button
							>
						</a-button-group>
					</template>
				</a-table>
			</template>
		</ZsSearchTableMould>
	</div>
</template>

<script lang="ts" setup name="SystemUserManage">
import { useForm, useTable, useModal, useAsyncNoInitData, useAsyncShallowData } from '@/hooks';
import { createTableColumns } from './table';
import curryingRequest, { SYSTEM_APIS } from '@/service';

// 对话框
const { warningModal } = useModal();
// form
const { form, resetForm } = useForm(
	() => ({
		userAccount: '',
		username: '',
		departName: '',
		roleCode: '',
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
// 用户角色
const { data: roleList } = useAsyncShallowData(async () => {
	const { res } = await curryingRequest(() =>
		SYSTEM_APIS.getRoleList({
			pagingOrNot: '0',
		})
	);
	// 处理错误
	return res?.data.roleList ?? [];
});
// 获取列表
const {
	data: tableData,
	loading,
	initData,
} = useAsyncNoInitData(async () => {
	const { res, err } = await curryingRequest(() =>
		SYSTEM_APIS.getUserList({
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
	return extendTableList(res?.data.userList);
});
// 批量操作表格
const batchTableRows = (type: 'batchDeleteUser' | 'batchResetPassword' | 'batchLogoutUser') => {
	warningModal(`确定操作选中的${tableBaseOptions.selectedKeys.length}数据吗？`, async (done) => {
		// const { res } = await curryingRequest(() =>
		// 	SYSTEM_APIS[type]({
		// 		idList: tableBaseOptions.selectedKeys,
		// 	})
		// );
		// // 关闭弹窗
		// done(true);
		// // 成功后刷新
		// if (res) {
		// 	// 重置勾选
		// 	tableBaseOptions.selectedKeys = [];
		// 	// 获取数据
		// 	initData();
		// }
		done(true);
	});
};
// 页面激活时
onActivated(initData);
</script>
