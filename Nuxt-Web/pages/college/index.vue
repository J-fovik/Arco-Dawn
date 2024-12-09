<template>
	<div class="max-w-container mx-auto min-h-[70vh]">
		<!-- 搜索框 -->
		<div class="flex items-center mt-[20px]">
			<!-- 完全匹配 -->
			<div class="w-[150px]">
				<a-button size="large">
					<a-checkbox v-model="form.isMatch" @change="resetData"> 完全匹配 </a-checkbox>
				</a-button>
			</div>
			<!-- 搜索你感兴趣的院校 -->
			<div class="w-full ml-[20px]">
				<a-input
					v-model.trim="form.yxmc"
					size="large"
					class="rounded-lg h-[38px]"
					placeholder="搜索你感兴趣的院校"
					allow-clear
					@clear="resetData"
				>
					<template #prefix>
						<icon-search />
					</template>
				</a-input>
			</div>
			<div class="w-[120px] ml-[20px]">
				<a-button
					type="primary"
					size="large"
					class="openButton w-[120px]"
					@click="resetData"
				>
					搜索
				</a-button>
			</div>
		</div>

		<!-- 选择过滤 -->
		<zs-select-filter
			:data="filterData"
			:default-values="form"
			@change="changeFilter"
			class="mt-[20px]"
		/>

		<!-- 学校列表 -->
		<div class="mt-[20px] flex flex-col">
			<!-- 排序 -->
			<a-space class="h-[40px]">
				<div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{ 'bg-[#7C92FF] text-white': form.sort.startsWith('sf') }"
					@click="toggleSort('sf')"
				>
					省份
					<icon-arrow-rise v-if="form.sort === 'sf asc'" />
					<icon-arrow-fall v-else />
				</div>
				<div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{ 'bg-[#7C92FF] text-white': form.sort.startsWith('score') }"
					@click="toggleSort('score')"
				>
					录取分数
					<icon-arrow-rise v-if="form.sort === 'score asc'" />
					<icon-arrow-fall v-else />
				</div>
				<div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{ 'bg-[#7C92FF] text-white': form.sort.startsWith('strength') }"
					@click="toggleSort('strength')"
				>
					院校实力
					<icon-arrow-rise v-if="form.sort === 'strength asc'" />
					<icon-arrow-fall v-else />
				</div>
				<div>
					共找到符合条件的院校
					<span class="text-[#FFA864]">{{ turnThousandth(data.total) }}</span> 所
				</div>
			</a-space>
			<!-- 院校列表 -->
			<a-list class="list-border" :bordered="false" :loading="status === 'pending'">
				<a-list-item v-for="school in data.schoolList" :key="school.id">
					<div
						@click="
							navigateTo(`/college/${school.id}`, {
								open: {
									target: '_blank',
								},
							})
						"
					>
						<zs-school-list-meta :school="school" />
					</div>
				</a-list-item>
				<template #empty>
					<zs-no-data-small />
				</template>
			</a-list>
			<!-- 分页 -->
			<a-pagination
				class="justify-end mt-[20px]"
				:total="data.total"
				:current="pagination.current"
				:page-size="pagination.pageSize"
				@change="onPageChange"
				@page-size-change="onPageSizeChange"
				show-total
				show-jumper
				show-page-size
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '查大学',
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// 网站信息
const { provinceCityList, getDictionValue } = useWebsiteInformation();
// form
const { form } = useForm(() => ({
	location: [''],
	type: '',
	cc: '',
	properties: '',
	strengthTags: '',
	featuresTags: '',
	sort: '',
	isMatch: false,
	yxmc: '',
}));
// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	refresh();
});
// 数据列表
const filterData = ref([
	{
		title: '所在地区',
		key: 'location',
		isShow: true,
		multiple: true,
		options: [...NO_LIMIT_OPTIONS, ...provinceCityList.value],
	},
	{
		title: '院校类型',
		key: 'type',
		isShow: true,
		multiple: false,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('YXLX')],
	},
	{
		title: '院校层次',
		key: 'cc',
		isShow: true,
		multiple: false,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('BXCC')],
	},
	{
		title: '办学性质',
		key: 'properties',
		isShow: true,
		multiple: false,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('BXXZ')],
	},
	{
		title: '实力标签',
		key: 'strengthTags',
		isShow: true,
		multiple: false,
		isCollapse: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('SLBQ')],
	},
	{
		title: '特色标签',
		key: 'featuresTags',
		isShow: true,
		multiple: false,
		isCollapse: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('TSBQ')],
	},
]);
// 设置排序值
const toggleSort = (key: any) => {
	// 根据当前的排序状态来更新排序
	if (form.value.sort === `${key} desc`) {
		form.value.sort = `${key} asc`; // 从降序切换到升序
	} else if (form.value.sort === `${key} asc`) {
		form.value.sort = ''; // 从升序切换到无排序
	} else {
		form.value.sort = `${key} desc`; // 从无排序切换到降序
	}
	// 请求数据
	resetData();
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
// 服务端请求院校列表
const { data, status, refresh } = await useAsyncData(
	'collegeList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_COLLEGE_LIST, {
			body: {
				...form.value,
				isMatch: form.value.isMatch ? '1' : '0',
				location: form.value.location.join('/'),
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
<style scoped>
.list-border {
	border-bottom: 1px solid var(--color-neutral-3);
	border-top: 1px solid var(--color-neutral-3);
}
.openButton {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
.openButton:hover {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
</style>
