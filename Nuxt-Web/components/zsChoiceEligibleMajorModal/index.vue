<template>
	<zs-base-modal content-class="w-[1100px]" title="" align-center @cancel="$emit('cancel')">
		<div class="leading-loose text-xs h-[85vh] flex flex-col">
			<div class="flex items-center">
				<div class="text-[24px] font-bold">{{ form.yxmc }}</div>
				<div class="text-[12px]">
					<span
						class="text-[#7C92FF] ml-[20px] cursor-pointer"
						@click="
							navigateTo(`/college/${form.yxid}`, {
								open: {
									target: '_blank',
								},
							})
						"
						>院校详情</span
					>
					<span
						class="text-[#7C92FF] ml-[20px] cursor-pointer"
						@click="
							setSelectRow(
								{
									yxmc: form.yxmc,
									year: data.year,
								},
								() => setActiveKey('ZsChoiceAcademicYearsModal')
							)
						"
						>院校历年</span
					>
					<span class="text-[#999999] ml-[20px]">代码 {{ form.yxdm }}</span>
				</div>
			</div>
			<div class="flex items-center">
				<!-- <div>招生方向：</div>
				<a-radio-group v-model="form.tabRadio" class="bg-[#F9F9F9] !rounded-[4px]">
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
				</a-radio-group> -->
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
			<div class="flex-1 overflow-auto no-scrollbar mt-[20px]">
				<!-- 专业表格 -->
				<zs-choice-major-table
					:data="{ list: data?.list, year: data.year }"
					:isYxmc="false"
					:loading="status === 'pending'"
				>
					<template #operateTitle="{ record }">
						<div>操作</div>
					</template>
					<template #operate="{ record }">
						<div
							class="h-[32px] leading-[32px] rounded-[8px]"
							:class="{
								'border-solid border border-[#7C92FF] text-[#7C92FF]':
									!record.wSort,
								' bg-[#7C92FF] text-[#FFFFFF]': record.wSort,
							}"
							@click="
								record.wSort
									? $emit('cancelVolunteer', record)
									: $emit('addVolunteer', record)
							"
						>
							{{ record.wSort ? '志愿' + record.wSort : '加入志愿' }}
						</div>
						<a-space size="small">
							<span
								class="text-[12px] text-[#7C92FF]"
								@click="
									setSelectRow(
										{
											id: record.id,
											yxmc: form.yxmc,
										},
										() => setActiveKey('ZsChoiceProfessionalYearsModal')
									)
								"
								>专业历年</span
							>
						</a-space>
					</template>
					<template #empty>
						<zs-no-data />
					</template>
				</zs-choice-major-table>
			</div>
			<!-- 专业分页 -->
			<a-pagination
				class="justify-end mt-[20px]"
				:total="data?.total"
				:current="pagination.current"
				:page-size="pagination.pageSize"
				@change="onPageChange"
				@page-size-change="onPageSizeChange"
				show-total
				show-jumper
				show-page-size
			/>
		</div>
		<!-- 专业历年 -->
		<zs-choice-professional-years-modal
			v-if="activeKey === 'ZsChoiceProfessionalYearsModal'"
			:data="form.selectRow"
			@cancel="setSelectRow({}, () => setActiveKey(null))"
		/>
		<!-- 院校历年 -->
		<zs-choice-academic-years-modal
			v-if="activeKey === 'ZsChoiceAcademicYearsModal'"
			:data="form.selectRow"
			@cancel="setSelectRow({}, () => setActiveKey(null))"
		/>
	</zs-base-modal>
</template>
<!-- 可报专业 -->
<script setup lang="ts" name="ZsChoiceEligibleMajorModal">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => {}, // yxid 和 yxmc 和 yxdm 和 wid 必传
	}
);
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form } = useForm(() => ({
	...props.data,
	tabRadio: '全部',
	zymc: '',
	tabRadioList: ['全部', '普通类', '中外合作'],
	selectRow: {} as any, // 当前数据
}));
// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 请求数据
	refresh();
});
// 父组件方法
const emits = defineEmits(['cancel', 'cancelVolunteer', 'addVolunteer']);
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	form.value.selectRow = row;
	if (callBack) callBack();
};
// 服务端请求
const { data, status, refresh } = await useAsyncData(
	'eligibleMajorList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.ELIGIBLE_MAJOR_BY_YXMC, {
			body: {
				yxmc: form.value.yxmc,
				yxdm: form.value.yxdm,
				zymc: form.value.zymc,
				wid: form.value.wid,
				currentPage: pagination.value.current,
				pageSize: pagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 返回数据
		return {
			list:
				res?.data?.list?.map((o: any) => {
					return {
						...o,
						isInit: true, // 表示让父组件重新请求
					};
				}) ?? [],
			year: res?.data?.year ?? 2024,
			total: res?.data?.totalCount ?? 0,
		};
	},
	{
		default: () => ({
			list: [],
			year: 2024,
			total: 0,
		}),
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
