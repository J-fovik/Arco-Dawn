<template>
	<div class="max-w-container mx-auto">
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
					class="openButton w-[120px] rounded-[4px]"
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
		<!-- 院校列表 -->
		<a-list class="list-border mt-[20px]" :bordered="false" :loading="status === 'pending'">
			<a-list-item v-for="(school, index) in data.schoolList" :key="school.id">
				<div class="flex items-center">
					<div
						class="flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]"
					>
						{{ school?.rankOut }}
					</div>
					<div class="flex-1" @click="navigateTo(`/college/${school.id}`)">
						<zs-school-list-meta :school="school" />
					</div>
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
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '大学排名',
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// 网站信息
const { getDictionValue } = useWebsiteInformation();
// form
const { form } = useForm(() => ({
	yxmc: '',
	isMatch: false,
	rankType: getDictionValue('RANK')[0].value,
	sortType: '',
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
		title: '排名类型',
		key: 'rankType',
		isShow: true,
		multiple: false,
		options: getDictionValue('RANK'),
	},
	{
		title: '院校类型',
		key: 'sortType',
		isShow: true,
		multiple: false,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('YXLX')],
	},
]);
// change事件
const changeFilter = (val: any) => {
	// 切换排名类型 不等于第一项软科时
	if (form.value.rankType !== val.rankType) {
		form.value.rankType = val.rankType;
		form.value.sortType = '';
	} else {
		form.value.sortType = val.sortType;
	}
	if (form.value.rankType !== getDictionValue('RANK')[0]?.value) {
		filterData.value[1].isShow = false;
	} else {
		filterData.value[1].isShow = true;
	}
	// 请求数据
	resetData();
};

// 服务端请求院校排名列表
const { data, status, refresh } = await useAsyncData(
	'schoolRankList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.MORE.GET_SCHOOL_RANK, {
			body: {
				...form.value,
				isMatch: form.value.isMatch ? '1' : '0',
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
