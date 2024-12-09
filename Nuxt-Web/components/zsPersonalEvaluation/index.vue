<template>
	<div>
		<div class="text-[24px] leading-[28px] font-bold mb-[20px]">我的测评</div>
		<!-- 未填用户信息 -->
		<div v-if="!userInfo.score" class="flex items-center justify-between">
			<div class="text-[#5AB9FF]">
				<i class="iconfont icon-tanhao text-[13px]" />
				设置成绩分数及选考科目后，才可以进行测评！
			</div>
			<div
				class="w-[112px] h-[47px] leading-[47px] text-center bg-[#7C92FF] text-white rounded-[8px] text-[18px]"
			>
				开始测评
			</div>
		</div>
		<!-- 已填用户信息 -->
		<a-table
			class="mt-[20px] cursor-pointer"
			table-layout-fixed
			:columns="createTableColumns()"
			:data="evaluationList"
			:loading="status === 'pending'"
			:bordered="{ wrapper: true, cell: true }"
		>
			<template #name="{ record }">
				<div class="text-left">{{ record.name }}</div>
			</template>
			<template #operate="{ record }">
				<div class="text-[#FFA864]" @click="viewReport(record.id)">
					<icon-loading v-if="activeKey === record.id + '查看报告'" />查看报告
				</div>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts" name="ZsPersonalEvaluation">
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '测评类型',
			dataIndex: 'name',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
			slotName: 'name',
		},
		{
			title: '测评时间',
			dataIndex: 'createTime',
			align: 'center',
			width: 200,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(formatDate(record.createTime, 'YYYY-MM-DD HH:mm:ss'));
			},
		},
		{
			title: '操作',
			dataIndex: 'level3Name',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
			slotName: 'operate',
		},
	];
};
// 查看报告
const viewReport = async (id: any) => {
	// 设置当前值
	setActiveKey(id + '查看报告');
	const [err, res] = await $zsFetch(API_URLS.EVALUATE.VIEW_EVALUATE_REPORT, {
		body: {
			id: id,
		},
	});
	if (res) {
		// 清空当前值并打开报告
		setActiveKey(null);
		window.open(res.data, '_blank');
	}
};
// 获取我的测评列表
const { data: evaluationList, status } = await useAsyncData<any>(
	'evaluationList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.EVALUATE.GET_MY_EVALUATE_LIST, {});
		return res.data ?? [];
	},
	{ default: () => [] }
);
</script>
