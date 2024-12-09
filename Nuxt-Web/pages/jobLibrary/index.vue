<template>
	<div class="max-w-container mx-auto">
		<!-- 搜索框 -->
		<div class="flex items-center mt-[20px]">
			<!-- 完全匹配 -->
			<div class="w-[150px]">
				<a-button size="large">
					<a-checkbox v-model="form.perfectMatch" @change="!form.perfectMatch">
						完全匹配
					</a-checkbox>
				</a-button>
			</div>
			<!-- 搜索你感兴趣的职业 -->
			<div class="w-full ml-[20px]">
				<a-input
					size="large"
					v-model="form.professionName"
					class="rounded-lg h-[38px]"
					placeholder="搜索你感兴趣的职业"
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
					@click="
						form.professionName
							? navigateTo(`/jobLibrary/search?keyword=${form.professionName}`)
							: ''
					"
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
		<div class="mt-[20px]">
			<div class="mt-[10px]">
				{{
					middleCategoriesCount +
					'个职业中类、' +
					smallCategoriesCount +
					'个职业小类、' +
					jobsCount +
					'个职业'
				}}
			</div>
			<div v-for="(middle, index) in form.selectList" :key="index">
				<!-- 职业中类 -->
				<div class="flex items-center my-[20px]">
					<div class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"></div>
					<div class="ml-[10px] text-[18px] text-[#333] font-bold">
						{{ middle.levelName }}
					</div>
				</div>
				<a-card
					v-for="(small, index) in middle.children"
					:key="index"
					class="mb-[10px] card-box-shadow rounded-[8px]"
					hoverable
					:bordered="false"
				>
					<div class="flex items-center">
						<!-- 职业小类 -->
						<!-- <a-tooltip :content="small.levelName" position="lt"> -->
						<div class="w-[300px] truncate text-[16px] font-bold">
							{{ small.levelName }}
						</div>
						<!-- </a-tooltip> -->
						<a-grid :cols="3" :colGap="12" :rowGap="16" class="flex-1">
							<a-grid-item
								v-for="(job, index) in small.children"
								:key="index"
								class="h-[35px] leading-[35px] px-[10px]"
							>
								<!-- 职业 -->
								<nuxt-link :to="`/jobLibrary/${job.id}`">
									<a-tooltip :content="job.levelName" position="lt">
										<div
											class="text-[#7c92ff] truncate w-[80%] text-[16px] cursor-pointer"
										>
											{{ job.levelName }}
										</div>
									</a-tooltip>
								</nuxt-link>
							</a-grid-item>
						</a-grid>
					</div>
				</a-card>
			</div>
			<zs-no-data v-if="!form.selectList.length && form.show">
				<div>糟糕，未查询到匹配职业</div>
			</zs-no-data>
		</div>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '职业库',
});
// 网站全局控制
const { setGlobalLoading } = useLoading();
// 全局插件
const { $zsFetch } = useNuxtApp();
// form
const { form } = useForm(() => ({
	perfectMatch: false,
	professionName: '',
	levelName: '',
	selectList: [] as any,
	show: false,
}));
// change事件
const changeFilter = (val: any) => {
	form.value.levelName = val.levelName;
	form.value.selectList = findOptions(filterData.value[0].options, val.levelName).children;
};

// 数据列表
const filterData = ref([
	{
		title: '职业大类',
		key: 'levelName',
		isShow: true,
		multiple: false,
		options: [],
	},
]);
// 获取职业列表
const getJobList = async () => {
	// 全局loading 开
	await setGlobalLoading(true);
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_PROFESSION, {
		body: {},
	});
	// 处理错误
	if (err) return setGlobalLoading(false);
	const result =
		res.data.map((o: any) => {
			return {
				...o,
				value: o.levelName,
				label: o.levelName,
			};
		}) ?? [];
	filterData.value[0].options = result;
	form.value.show = true;
	form.value.levelName = result[0]?.levelName;
	form.value.selectList = result[0]?.children; // 赋值默认选中职业
	// 全局loading 关
	setGlobalLoading(false);
};
getJobList();

// 计算属性来获取中类、小类和职业的数量
const middleCategoriesCount = computed(() => form.value.selectList.length);
const smallCategoriesCount = computed(() => {
	return form.value.selectList.reduce((acc: any, middle: any) => acc + middle.children.length, 0);
});
const jobsCount = computed(() => {
	return form.value.selectList.reduce((acc: any, middle: any) => {
		return (
			acc + middle.children.reduce((acc2: any, small: any) => acc2 + small.children.length, 0)
		);
	}, 0);
});
</script>
<style scoped>
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
