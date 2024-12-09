<template>
	<zs-base-modal content-class="w-[1100px]" title="" align-center @cancel="$emit('cancel')">
		<div class="max-h-[90vh] overflow-auto no-scrollbar">
			<a-list class="list-border mt-[10px]" :bordered="false">
				<a-list-item>
					<!-- 学校信息 -->
					<div class="flex items-center justify-between cursor-pointer">
						<div class="flex-1">
							<zs-school-list-meta :school="data" />
						</div>
					</div>
				</a-list-item>
			</a-list>
			<div>
				符合<span class="text-[#FFA864]">【{{ data.codeName.split('/').join('+') }}】</span
				>选科组合的专业 <span class="text-[#FFA864]">【{{ data.ppsum }}】</span> 个
			</div>
			<a-table
				class="mt-[20px] cursor-pointer"
				table-layout-fixed
				:columns="createTableColumns()"
				:data="data.planList"
				:bordered="{ wrapper: true, cell: true }"
				page-position="bottom"
			>
				<template #zymc="{ record }">
					<div class="text-left">
						{{ textFormat(record.zymc) }}
					</div>
				</template>
			</a-table>
		</div>
	</zs-base-modal>
</template>
<script setup lang="ts" name="ZsSubjectCurXkCollegeMatchMajor">
// 父组件参数
withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => {},
	}
);
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '专业名称',
			dataIndex: 'zymc',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'zymc',
		},
		{
			title: '专业层次',
			dataIndex: 'cc',
			align: 'center',
			width: 150,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(record.cc);
			},
		},
		{
			title: '专业类',
			dataIndex: 'zyl',
			align: 'center',
			width: 250,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(record.zyl);
			},
		},
		{
			title: '选科要求',
			dataIndex: 'xk',
			align: 'center',
			width: 150,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(record.xk);
			},
		},
	];
};
</script>
