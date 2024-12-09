<template>
	<zs-base-modal content-class="w-[1100px]" title="" align-center @cancel="$emit('cancel')">
		<div class="leading-loose text-xs h-[85vh] flex flex-col">
			<div class="flex items-center">
				<div class="text-[24px] font-bold">专业历年分析</div>
				<div class="text-[12px] text-[#999999]">
					<span class="ml-[20px]">院校代码 {{ professionalYearsData?.yxdm }}</span>
					<span class="ml-[20px]">{{ professionalYearsData?.yxmc }}</span>
					<span class="ml-[20px]">专业代码 {{ professionalYearsData?.zydm }}</span>
					<span class="ml-[20px]">{{ professionalYearsData?.zymc }}</span>
				</div>
			</div>
			<div class="flex-1 overflow-auto no-scrollbar">
				<zs-title
					:title="`${professionalYearsData?.year}年招生计划`"
					size="mini"
					color="#7C92FF"
				/>
				<a-table
					class="cursor-pointer"
					table-layout-fixed
					:loading="professionalYearsStatus === 'pending'"
					:columns="createPlanTableColumns()"
					:data="professionalYearsData?.planList"
				>
					<!-- 概率 -->
					<template #odds="{ record }">
						<div
							class="flex items-center flex-col"
							:class="{
								'text-[#7C92FF]': record.lqgl < 60,
								'text-[#EFF8FF]': record.lqgl > 60 && record.lqgl <= 90,
								'text-[#FFA864]': record.lqgl > 90,
							}"
						>
							<div
								class="w-[22px] h-[22px] rounded-[4px]"
								:class="{
									'bg-[#F2F5FF]': record.lqgl < 60,
									'bg-[#EFF8FF]': record.lqgl > 60 && record.lqgl <= 90,
									'bg-[#FFF7F0]': record.lqgl > 90,
								}"
							>
								{{ record.lqgl < 60 ? '冲' : record.lqgl <= 90 ? '稳' : '保' }}
							</div>
							<div>{{ record.lqgl ? record.lqgl : 1 }}%</div>
						</div>
					</template>
					<template #zymc="{ record }">
						<div class="text-left">
							<div>
								{{ record.zymc }}
							</div>
							<div class="text-[12px] text-[#999]">代码 {{ record.zydm }}</div>
							<div class="text-[12px] text-[#999]">
								{{ textFormat(record.zybz, '') }}
							</div>
						</div>
					</template>
					<template #lqrs="{ record }">
						<div class="text-right">
							{{ textCompany(turnThousandth(record.lqrs, ''), '人') }}
						</div>
					</template>
					<template #xf="{ record }">
						<div class="text-right">
							{{ textCompany(turnThousandth(record.xf, ''), '元') }}
						</div>
					</template>
				</a-table>
				<zs-title title="专业历年数据" size="mini" color="#7C92FF" class="mt-[20px]">
					<template #center>
						<div class="text-[#999] text-[12px]">
							<icon-exclamation-circle
								class="mr-[5px]"
							/>因招生变动因素较多，匹配专业仅供参考，请根据多方信息谨慎选择。
						</div>
					</template>
				</zs-title>
				<a-table
					class="cursor-pointer"
					table-layout-fixed
					:loading="professionalYearsStatus === 'pending'"
					:columns="createMajorTableColumns()"
					:data="professionalYearsData?.dataList"
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
						<div class="text-center">
							<div>{{ record.zslx }}</div>
							<div class="text-[#999] text-[12px]">
								{{ record.pc }}
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
							{{ textFormat(turnThousandth(record.pjf)) }}
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
				<zs-title title="院校历年数据" size="mini" color="#7C92FF" class="mt-[20px]" />
				<a-input
					:style="{ width: '260px' }"
					v-model.trim="form.zymc"
					placeholder="搜索专业关键词"
					allow-clear
					@clear="resetData()"
					@change="resetData()"
				>
					<template #prefix>
						<icon-search />
					</template>
				</a-input>
				<!-- 选择过滤 -->
				<zs-select-filter
					:data="[
						{
							title: '相关专业',
							key: 'zyl',
							isShow: true,
							multiple: false,
							options: [...NO_LIMIT_OPTIONS, ...professionalYearsData.similarList],
						},
					]"
					:default-values="{
						zyl: form.zyl,
					}"
					@change="changeFilter"
					class="mt-[10px]"
				/>
				<a-table
					class="cursor-pointer mt-[10px]"
					table-layout-fixed
					:loading="academicYearsStatus === 'pending'"
					:columns="createSchoolTableColumns()"
					:pagination="pagination"
					@page-change="onPageChange"
					@page-size-change="onPageSizeChange"
					:data="academicYearsList"
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
<!-- 专业历年 -->
<script setup lang="ts" name="ZsChoiceProfessionalYearsModal">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => {}, // 当前列id  和 yxmc 必传
	}
);
// 全局插件
const { $zsFetch } = useNuxtApp();
// 网站信息
const { getDictionValue } = useWebsiteInformation();
// form
const { form } = useForm(() => ({
	...props.data,
	zymc: '',
	zyl: '',
}));
// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 请求数据
	academicYearsRefresh();
});
// 招生计划列属性
const createPlanTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '概率',
			align: 'center',
			width: 70,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'odds',
		},
		{
			title: '专业名称',
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
			title: '批次',
			dataIndex: 'pc',
			align: 'center',
			width: 150,
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
			ellipsis: true,
			tooltip: true,
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'lqrs',
		},
		{
			title: '学制',
			dataIndex: 'xz',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return record.xz.includes('年') ? record.xz : record.xz + '年';
			},
		},
		{
			title: '学费',
			dataIndex: 'xf',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'xf',
		},
		{
			title: '选考科目',
			dataIndex: 'xk',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
		},
	];
};
// 专业历年列属性
const createMajorTableColumns = (): TableCustomColumnData[] => {
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
// 院校历年列属性
const createSchoolTableColumns = (): TableCustomColumnData[] => {
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
// change事件
const changeFilter = (val: any) => {
	form.value = {
		...form.value,
		...val,
	};
	// 请求数据
	resetData();
};
// 服务端请求
const {
	data: professionalYearsData,
	status: professionalYearsStatus,
	refresh: professionalYearsRefresh,
} = await useAsyncData(
	'professionalYearsList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.MAJOR_HISTORY_PLAN, {
			body: {
				id: form.value.id,
			},
		});
		// 返回数据
		return {
			dataList: res?.data?.dataList ?? [],
			planList: res?.data?.planList ?? [],
			similarList:
				res?.data?.similarList?.map((o: any) => {
					return {
						value: o,
						label: o,
					};
				}) ?? [],
			year: res?.data?.year,
			yxdm: res?.data?.yxdm,
			yxmc: res?.data?.yxmc,
			zydm: res?.data?.zydm,
			zymc: res?.data?.zymc,
		};
	},
	{
		default: () => ({
			dataList: [],
			planList: [],
			similarList: [],
			year: 0,
			yxdm: '',
			yxmc: '',
			zydm: '',
			zymc: '',
		}),
		immediate: false,
	}
);
// 院校历年服务端请求
const {
	data: academicYearsList,
	status: academicYearsStatus,
	refresh: academicYearsRefresh,
} = await useAsyncData(
	'majorAcademicYearsList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.SCHOOL_HISTORY_PLAN, {
			body: {
				yxmc: form.value.yxmc,
				zymc: form.value.zymc,
				zyl: form.value.zyl,
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
onMounted(async () => {
	// 招生计划和专业历年
	await professionalYearsRefresh();
	// 院校历年
	academicYearsRefresh();
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
