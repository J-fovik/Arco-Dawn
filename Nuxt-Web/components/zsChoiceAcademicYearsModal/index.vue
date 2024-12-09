<template>
	<zs-base-modal content-class="w-[1100px]" title="" align-center @cancel="$emit('cancel')">
		<div class="leading-loose text-xs h-[85vh] flex flex-col">
			<div class="flex items-center">
				<div class="text-[24px] font-bold">历年分析</div>
				<div class="text-[24px] font-bold ml-[10px]">{{ form.yxmc }}</div>
			</div>
			<div class="flex items-center mt-[20px]">
				<a-radio-group
					v-model="form.tabRadio"
					class="bg-[#F9F9F9] !rounded-[4px]"
					@change="resetData"
				>
					<template
						v-for="(tab, index) in form.tabRadioList"
						:key="index"
						class="flex items-center justify-center flex-row"
					>
						<a-radio :value="tab">
							<template #radio="{ checked }">
								<div
									class="text-center px-[14px] leading-[32px] border-solid border border-[#EDEDED]"
									:class="{ 'bg-[#7C92FF] text-white rounded-[4px]': checked }"
								>
									{{ tab }}
								</div>
							</template>
						</a-radio>
					</template>
				</a-radio-group>
				<a-input
					:style="{ width: '260px' }"
					v-model.trim="form.zymc"
					placeholder="搜索专业关键词"
					allow-clear
					@clear="resetData()"
					@change="resetData()"
					class="ml-[10px]"
				>
					<template #prefix>
						<icon-search />
					</template>
				</a-input>
			</div>
			<div class="overflow-auto no-scrollbar flex-1 mt-[20px]">
				<a-table
					class="cursor-pointer"
					table-layout-fixed
					:columns="createTableColumns()"
					:data="list"
					:pagination="pagination"
					@page-change="onPageChange"
					@page-size-change="onPageSizeChange"
					:loading="status === 'pending'"
				>
					<template #zymc="{ record }">
						<div class="text-left">
							{{ record.zymc }}
						</div>
						<div class="text-[#999] text-[12px] text-left">
							{{ textFormat(record.zybz, '') }}
						</div>
					</template>
					<template #type="{ record }">
						<div class="text-left">
							<div>{{ record.zslx }}</div>
							<div class="text-[#999] text-[12px]">
								<span>{{
									findOptions(getDictionValue('YXLX'), record.yx_lx)?.label
								}}</span>
								<span class="ml-[10px]">{{ record.pc }}</span>
							</div>
						</div>
					</template>
					<template #lqrs="{ record }">
						<div class="text-right">
							{{ textCompany(turnThousandth(record.lqrs, ''), '人') }}
						</div>
					</template>
					<template #zgf="{ record }">
						<div class="text-right">
							{{ textFormat(turnThousandth(record.zgf)) }}
						</div>
					</template>
					<template #pjf="{ record }">
						<div class="text-right">
							{{ textFormat(turnThousandth(record.pjf, '0')) }}
						</div>
					</template>
					<template #zdf="{ record }">
						<div class="text-right">
							{{ textFormat(turnThousandth(record.zdf)) }}
						</div>
					</template>
					<template #zdfwc="{ record }">
						<div class="text-right">
							{{ textFormat(turnThousandth(record.zdfwc)) }}
						</div>
					</template>
				</a-table>
			</div>
		</div>
	</zs-base-modal>
</template>
<!-- 院校历年 -->
<script setup lang="ts" name="ZsChoiceAcademicYearsModal">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => {}, // yxmc 和 year 必传
	}
);
// 全局插件
const { $zsFetch } = useNuxtApp();
// 网站信息
const { getDictionValue } = useWebsiteInformation();
// form
const { form } = useForm(() => ({
	...props.data,
	tabRadio: '全部',
	zymc: '',
	tabRadioList: [
		'全部',
		String(props.data.year),
		String(props.data.year - 1),
		String(props.data.year - 2),
	],
}));
// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 请求数据
	refresh();
});
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '年份',
			dataIndex: 'nf',
			align: 'center',
			width: 70,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
		},
		{
			title: '专业',
			dataIndex: 'zymc',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'zymc',
		},
		{
			title: '类型/批次',
			dataIndex: 'pc',
			align: 'center',
			width: 150,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'type',
		},
		{
			title: '选考科目',
			dataIndex: 'xk',
			align: 'center',
			width: 100,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
		},
		{
			title: '人数',
			dataIndex: 'lqrs',
			align: 'center',
			width: 100,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'lqrs',
		},
		{
			title: '最高分',
			dataIndex: 'zgf',
			align: 'center',
			width: 100,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				fontWeight: 'bold',
			},
			slotName: 'zgf',
		},
		{
			title: '平均分',
			dataIndex: 'pjf',
			align: 'center',
			width: 100,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				fontWeight: 'bold',
			},
			slotName: 'pjf',
		},
		{
			title: '最低分',
			dataIndex: 'zdf',
			align: 'center',
			width: 100,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				fontWeight: 'bold',
			},
			slotName: 'zdf',
		},
		{
			title: '最低位次',
			dataIndex: 'zdfwc',
			align: 'center',
			width: 100,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				fontWeight: 'bold',
			},
			slotName: 'zdfwc',
		},
	];
};
// 服务端请求
const {
	data: list,
	status,
	refresh,
} = await useAsyncData(
	'academicYearsList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.SCHOOL_HISTORY_PLAN, {
			body: {
				yxmc: form.value.yxmc,
				zymc: form.value.zymc,
				nf: form.value.tabRadio === '全部' ? '' : form.value.tabRadio,
				currentPage: pagination.value.current,
				pageSize: pagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		pagination.value.total = res.data.totalCount ?? 0;
		// 返回数据
		return res?.data?.list ?? [];
	},
	{
		default: () => [],
		immediate: false,
	}
);
onMounted(() => {
	refresh();
});
</script>
<style scoped>
:deep(.arco-radio-group .arco-radio) {
	margin-left: 0px;
	margin-right: 0px;
	padding-left: 0;
}
:deep(.arco-radio-group) {
	border-radius: 4px !important;
}
</style>
