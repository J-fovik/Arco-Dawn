<template>
	<zs-base-modal
		content-class="w-[1100px] "
		title=""
		top="5%"
		align-center
		@cancel="$emit('cancel')"
	>
		<div class="max-h-[90vh] overflow-auto no-scrollbar">
			<div class="flex-1 cursor-pointer">
				<div class="text-[20px] text-[#333333] mb-[10px] font-bold">
					{{ form.zymc }}
				</div>
				<div class="mt-[10px]">
					<a-space class="flex flex-wrap items-center text-[#999]">
						<template #split>
							<span class="w-[2px] h-[8px] text-[#999]">|</span>
						</template>
						<span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]">
							专业代码：{{ textFormat(form.zydm) }}
						</span>
						<span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]">
							修业年限：{{ textFormat(form.xyNx) }}
						</span>
						<span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]">
							授予学位：{{ textFormat(form.syxw) }}
						</span>
						<span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]">
							男女比例：{{ textFormat(form.xbBl) }}
						</span>
						<span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]">
							平均薪酬：<span class="text-price">{{
								textFormat(turnThousandth(form.pjxz))
							}}</span>
						</span>
					</a-space>
				</div>
			</div>
			<div>
				符合<span class="text-[#FFA864]">【{{ form.codeName.split('/').join('+') }}】</span
				>选科组共 <span class="text-[#FFA864]">【{{ form.schoolCountByxk }}】</span
				> 所院校， 开设<span class="text-[#FFA864]">【{{ form.majorCountByxk }}】</span
				> 个专业
			</div>
			<div class="mt-[20px]">
				<!-- 筛选条件 -->
				<a-space>
					<a-select
						:style="{ width: '150px' }"
						v-model="form.yxsf"
						:options="[...NO_LIMIT_NULL_OPTIONS, ...provinceCityList]"
						placeholder="所在地区"
						allow-clear
						@change="resetData"
					/>
					<a-select
						:style="{ width: '150px' }"
						v-model="form.cc"
						:options="[...NO_LIMIT_NULL_OPTIONS, ...getDictionValue('BXCC')]"
						placeholder="院校层次"
						allow-clear
						@change="resetData"
					/>
					<a-select
						:style="{ width: '150px' }"
						v-model="form.slbq"
						:options="[...NO_LIMIT_NULL_OPTIONS, ...getDictionValue('SLBQONE')]"
						placeholder="实力标签"
						allow-clear
						@change="resetData"
					/>
					<a-input
						:style="{ width: '300px' }"
						v-model.trim="form.yxmc"
						placeholder="请输入院校名称"
						allow-clear
						@change="resetData"
					/>
				</a-space>
			</div>
			<a-table
				class="mt-[20px] cursor-pointer"
				table-layout-fixed
				:columns="createTableColumns()"
				:data="data.schoolList"
				:loading="status === 'pending'"
				:bordered="{ wrapper: true, cell: true }"
				:pagination="{ ...pagination, total: data.total }"
				@page-change="onPageChange"
				@page-size-change="onPageSizeChange"
				page-position="bottom"
			>
				<template #yxmc="{ record }">
					<div class="text-left flex items-center">
						<img :src="record.logo" class="w-[42px] h-[42px] rounded-[50%]" alt="" />
						<div class="ml-[10px]">
							{{ textFormat(record.yxmc) }}
						</div>
					</div>
				</template>
				<template #zymc="{ record }">
					<div class="text-left">{{ textFormat(record.zymc) }}</div>
				</template>
			</a-table>
		</div>
	</zs-base-modal>
</template>
<script setup lang="ts" name="ZsSubjectCurXkMajorMatchCollege">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => {},
	}
);
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 网站信息
const { provinceCityList, getDictionValue } = useWebsiteInformation();
// form
const { form } = useForm(() => ({
	...props.data,
	yxsf: '',
	cc: '',
	slbq: '',
	yxmc: '',
}));

// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	refresh();
});
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '院校名称',
			dataIndex: 'yxmc',
			align: 'center',
			width: 350,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'yxmc',
		},
		{
			title: '院校层次',
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
			title: '匹配专业',
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
			bodyCellStyle: {
				color: '#FFA864',
			},
			render: ({ record }) => {
				return textFormat(record.xk);
			},
		},
	];
};
// 服务端请求院校列表
const { data, status, refresh } = await useAsyncData(
	'collegeList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHECK.MAJOR_CHECK_XK_SCHOOL_MATCH_LIST, {
			body: {
				sf: userInfo.value.province,
				code: form.value.code,
				zydm: form.value.zydm,
				yxsf: form.value.yxsf,
				cc: form.value.cc,
				slbq: form.value.slbq,
				yxmc: form.value.yxmc,
				currentPage: pagination.value.current,
				pageSize: pagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 返回数据
		return {
			total: res?.data?.totalCount ?? 0,
			schoolList: res?.data?.list ?? [],
		};
	},
	{
		default: () => ({
			total: 0,
			schoolList: [],
		}),
	}
);
</script>
