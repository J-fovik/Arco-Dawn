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
			<!-- 搜索你感兴趣的职业 -->
			<div class="w-full ml-[20px]">
				<a-input
					size="large"
					v-model.trim="form.professionName"
					class="rounded-lg h-[38px]"
					placeholder="搜索你感兴趣的职业"
					@clear="resetData"
					allow-clear
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
		<a-table
			class="mt-[20px] cursor-pointer"
			table-layout-fixed
			:columns="columns"
			:data="data"
			:bordered="{ wrapper: true, cell: true }"
			:pagination="pagination"
			@row-click="cellClick"
			@page-change="onPageChange"
			@page-size-change="onPageSizeChange"
			:loading="loading"
		/>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '职业库',
});
// 路由信息
const route = useRoute();
const router = useRouter();

// 全局插件
const { $zsFetch } = useNuxtApp();
// loading
const [loading, setLoading] = useBasicsState(false);
// form
const { form } = useForm(() => ({
	isMatch: false,
	professionName: (route.query.keyword ?? '') as string,
}));

// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 100);
	// 路由重定向
	router.replace({
		query: { ...route.query, keyword: form.value.professionName },
	});
	// 请求数据
	initJobList();
});
// 列数据
const columns = [
	{
		title: '职业名称',
		dataIndex: 'levelName',
		align: 'center',
		ellipsis: true,
		tooltip: true,
		cellStyle: {
			textDecorationLine: 'underline',
		},
		headerCellStyle: {
			fontSize: '14px',
			backgroundColor: '#EDEDED',
			fontWeight: 'bold',
			textDecorationLine: 'none',
		},
	},
	{
		title: '所属大类',
		dataIndex: 'level1Name',
		align: 'center',
		ellipsis: true,
		tooltip: true,
		headerCellStyle: {
			fontSize: '14px',
			backgroundColor: '#EDEDED',
			fontWeight: 'bold',
		},
	},
	{
		title: '所属中类',
		dataIndex: 'level2Name',
		align: 'center',
		ellipsis: true,
		tooltip: true,
		headerCellStyle: {
			fontSize: '14px',
			backgroundColor: '#EDEDED',
			fontWeight: 'bold',
		},
	},
	{
		title: '所属小类',
		dataIndex: 'level3Name',
		align: 'center',
		ellipsis: true,
		tooltip: true,
		headerCellStyle: {
			fontSize: '14px',
			backgroundColor: '#EDEDED',
			fontWeight: 'bold',
		},
	},
] as any;

// 点击单元格时触发
const cellClick = (record: any) => {
	navigateTo(`/jobLibrary/${record.id}`);
};
// 表格数据
const data = ref([] as any);
// 获取职业列表
const initJobList = async () => {
	// 开启Loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_PROFESSION_FILTERING, {
		body: {
			professionName: form.value.professionName,
			isMatch: form.value.isMatch ? '1' : '0',
			currentPage: pagination.value.current,
			pageSize: pagination.value.pageSize,
			pagingOrNot: 1,
		},
	});
	// 处理错误
	if (err) return setLoading(false);
	// 关闭Loading
	setLoading(false);
	// 赋值总页码
	pagination.value.total = res.data.totalCount;
	// 赋值数据
	data.value = res.data.list;
};
initJobList();
</script>
