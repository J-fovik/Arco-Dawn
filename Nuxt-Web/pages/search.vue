<template>
	<div class="max-w-container mx-auto min-h-[60vh]">
		<!-- tab -->
		<a-radio-group v-model="form.tabRadio" class="mt-[25px] bg-[#F9F9F9]">
			<template
				v-for="tab in form.tabRadioList"
				:key="tab"
				class="flex items-center justify-center flex-row"
			>
				<a-radio :value="tab">
					<template #radio="{ checked }">
						<div
							class="text-center w-[100px] leading-[48px]"
							:class="{ 'bg-[#7C92FF] text-white rounded-[4px]': checked }"
						>
							{{ tab }}
						</div>
					</template>
				</a-radio>
			</template>
		</a-radio-group>
		<div class="h-[0.5px] border-b-[#7C92FF] mt-[2px] border"></div>
		<!-- 综合 -->
		<template v-if="form.tabRadio === '综合'">
			<div
				v-if="
					synthesisData.schoolList.length ||
					synthesisData.majorList.length ||
					synthesisData.jobList.length
				"
			>
				<a-spin :loading="synthesisStatus === 'pending'">
					<template v-if="synthesisData.schoolList.length">
						<!-- 院校 -->
						<div class="flex items-center m-[20px_0px_10px]">
							<div
								class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"
							></div>
							<div class="ml-[10px] text-[18px] text-[#333] font-bold">
								院校
								<span class="text-[14px] text-[#999999]"
									>共计{{
										turnThousandth(synthesisData.schoolCount) + '所'
									}}</span
								>
							</div>
						</div>
						<!-- 院校列表 -->
						<a-list :bordered="false">
							<a-list-item
								v-for="school in synthesisData.schoolList"
								:key="school.id"
							>
								<div @click="navigateTo(`/college/${school.id}`)">
									<zs-school-list-meta :school="school" />
								</div>
							</a-list-item>
						</a-list>
						<div
							class="text-[#FFA864] mt-[20px] text-center cursor-pointer"
							@click="form.tabRadio = '院校'"
						>
							查看全部院校<i class="iconfont icon-jiantou ml-[5px]" />
						</div>
					</template>
					<template v-if="synthesisData.majorList.length">
						<!-- 专业 -->
						<div class="flex items-center m-[20px_0px_10px]">
							<div
								class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"
							></div>
							<div class="ml-[10px] text-[18px] text-[#333] font-bold">
								专业
								<span class="text-[14px] text-[#999999]"
									>共计{{ turnThousandth(synthesisData.majorCount) + '个' }}</span
								>
							</div>
						</div>
						<!-- 专业列表 -->
						<a-list :bordered="false">
							<a-list-item
								v-for="major in synthesisData.majorList"
								:key="major.id"
								class="border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer"
								@click="navigateTo(`/major/${major.id}`)"
							>
								<div
									class="text-[20px] text-[#333333] mb-[10px] font-bold"
									v-html="setHightLightStr(major.highlightZymc)"
								></div>
								<a-space class="flex flex-wrap items-center">
									<span class="text-[14px] text-[#333333]">
										{{ major.xkml }}/{{ major.zyl }}
									</span>
								</a-space>
								<div class="mt-[10px]">
									<a-space class="flex flex-wrap items-center">
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											专业代码：{{ textFormat(major.zydm) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											修业年限：{{ textFormat(major.xyNx) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											授予学位：{{ textFormat(major.syxw) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											年度毕业生规模：{{ textFormat(major.graduateScale) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											招生院校数：{{
												textFormat(turnThousandth(major.yxsum))
											}}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											男女比例：{{ textFormat(major.xbBl) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											平均薪酬：<span class="text-price">{{
												textFormat(turnThousandth(major.pjxz))
											}}</span>
										</span>
									</a-space>
								</div>
							</a-list-item>
						</a-list>
						<div
							class="text-[#FFA864] mt-[20px] text-center cursor-pointer"
							@click="form.tabRadio = '专业'"
						>
							查看全部专业<i class="iconfont icon-jiantou ml-[5px]" />
						</div>
					</template>
					<template v-if="synthesisData.jobList.length">
						<!-- 职业 -->
						<div class="flex items-center m-[20px_0px_10px]">
							<div
								class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"
							></div>
							<div class="ml-[10px] text-[18px] text-[#333] font-bold">
								职业
								<span class="text-[14px] text-[#999999]"
									>共计{{ turnThousandth(synthesisData.jobCount) + '个' }}</span
								>
							</div>
						</div>
						<!-- 职业列表 -->
						<a-list :bordered="false">
							<a-list-item
								v-for="job in synthesisData.jobList"
								:key="job.id"
								class="border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer"
								@click="navigateTo(`/jobLibrary/${job.id}`)"
							>
								<div
									class="text-[20px] text-[#333333] mb-[10px] font-bold"
									v-html="setHightLightStr(job.highlightJob)"
								></div>
								<a-space class="flex flex-wrap items-center">
									<span class="text-[14px] text-[#333333]">
										{{ job.level1Name }}/{{ job.level2Name }}/{{
											job.level3Name
										}}
									</span>
								</a-space>
							</a-list-item>
						</a-list>
						<div
							class="text-[#FFA864] mt-[20px] text-center cursor-pointer"
							@click="form.tabRadio = '职业'"
						>
							查看全部职业<i class="iconfont icon-jiantou ml-[5px]" />
						</div>
					</template>
				</a-spin>
			</div>
			<zs-no-data v-else />
		</template>
		<!-- 院校 -->
		<template v-if="form.tabRadio === '院校'">
			<!-- 院校列表 -->
			<a-list class="mt-[20px]" :bordered="false" :loading="schoolStatus === 'pending'">
				<a-list-item v-for="school in schoolData.list" :key="school.id">
					<div @click="navigateTo(`/college/${school.id}`)">
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
				:total="schoolData.total"
				:current="schoolPagination.current"
				:page-size="schoolPagination.pageSize"
				@change="schoolPageChange"
				@page-size-change="schoolPageSizeChange"
				show-total
				show-jumper
				show-page-size
			/>
		</template>
		<!-- 专业 -->
		<template v-if="form.tabRadio === '专业'">
			<a-list :bordered="false" :loading="majorStatus === 'pending'" class="mt-[20px]">
				<a-list-item
					v-for="major in majorData?.list"
					:key="major.id"
					class="border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer"
					@click="navigateTo(`/major/${major.id}`)"
				>
					<div
						class="text-[20px] text-[#333333] mb-[10px] font-bold"
						v-html="setHightLightStr(major.highlightZymc)"
					></div>
					<a-space class="flex flex-wrap items-center">
						<span class="text-[14px] text-[#333333]">
							{{ major.xkml }}/{{ major.zyl }}
						</span>
					</a-space>
					<div class="mt-[10px]">
						<a-space class="flex flex-wrap items-center">
							<span
								class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
							>
								专业代码：{{ textFormat(major.zydm) }}
							</span>
							<span
								class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
							>
								修业年限：{{ textFormat(major.xyNx) }}
							</span>
							<span
								class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
							>
								授予学位：{{ textFormat(major.syxw) }}
							</span>
							<span
								class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
							>
								年度毕业生规模：{{ textFormat(major.graduateScale) }}
							</span>
							<span
								class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
							>
								招生院校数：{{ textFormat(turnThousandth(major.yxsum)) }}
							</span>
							<span
								class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
							>
								男女比例：{{ textFormat(major.xbBl) }}
							</span>
							<span
								class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
							>
								平均薪酬：<span class="text-price">{{
									textFormat(turnThousandth(major.pjxz))
								}}</span>
							</span>
						</a-space>
					</div>
				</a-list-item>
				<template #empty>
					<zs-no-data-small />
				</template>
			</a-list>
			<!-- 分页 -->
			<a-pagination
				class="justify-end mt-[20px]"
				:total="majorData.total"
				:current="majorPagination.current"
				:page-size="majorPagination.pageSize"
				@change="majorPageChange"
				@page-size-change="majorPageSizeChange"
				show-total
				show-jumper
				show-page-size
			/>
		</template>
		<!-- 职业 -->
		<template v-if="form.tabRadio === '职业'">
			<a-list :bordered="false" :loading="jobStatus === 'pending'" class="mt-[20px]">
				<a-list-item
					v-for="job in jobData?.list"
					:key="job.id"
					class="border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer"
					@click="navigateTo(`/jobLibrary/${job.id}`)"
				>
					<div
						class="text-[20px] text-[#333333] mb-[10px] font-bold"
						v-html="setHightLightStr(job.highlightJob)"
					></div>
					<a-space class="flex flex-wrap items-center">
						<span class="text-[14px] text-[#333333]">
							{{ job.level1Name }}/{{ job.level2Name }}/{{ job.level3Name }}
						</span>
					</a-space>
				</a-list-item>
				<template #empty>
					<zs-no-data-small />
				</template>
			</a-list>
			<!-- 分页 -->
			<a-pagination
				class="justify-end mt-[20px]"
				:total="jobData.total"
				:current="jobPagination.current"
				:page-size="majorPagination.pageSize"
				@change="jobPageChange"
				@page-size-change="jobPageSizeChange"
				show-total
				show-jumper
				show-page-size
			/>
		</template>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '全局搜索',
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// 路由信息
const route = useRoute();
// 用户信息
const { userInfo } = useUser();
// form
const { form } = useForm(() => ({
	tabRadio: '综合',
	tabRadioList: ['综合', '院校', '专业', '职业'],
}));
// 回显搜索关键词
const keyword = ref(route.query.keyword);
// 院校分页控制
const {
	pagination: schoolPagination,
	onPageChange: schoolPageChange,
	onPageSizeChange: schoolPageSizeChange,
} = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	schoolRefresh();
});
// 专业分页控制
const {
	pagination: majorPagination,
	onPageChange: majorPageChange,
	onPageSizeChange: majorPageSizeChange,
} = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	majorRefresh();
});
// 职业分页控制
const {
	pagination: jobPagination,
	onPageChange: jobPageChange,
	onPageSizeChange: jobPageSizeChange,
} = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	jobRefresh();
});
// 设置高亮
const setHightLightStr = (text: any) => {
	let hightLightStr = `<span class="text-[#FFA864]">$&</span>`;
	let reg = new RegExp(route.query.keyword as string, 'gi');
	return text.replace(reg, hightLightStr);
};
// 获取综合数据
const { data: synthesisData, status: synthesisStatus } = await useAsyncData<any>(
	'synthesisData',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.PUBLIC.QUERY_SYNTHESIS_LIST_BY_NAME, {
			body: {
				name: keyword.value,
				sf: userInfo.value.province,
			},
		});
		// 关闭loading
		return {
			...res.data,
			schoolList:
				res?.data?.schoolList?.map((o: any) => {
					return {
						...o,
						highlightYxmc: o.yxmc,
					};
				}) ?? [],
			majorList:
				res?.data?.majorList?.map((o: any) => {
					return {
						...o,
						highlightZymc: o.zymc,
					};
				}) ?? [],
			jobList:
				res?.data?.jobList?.map((o: any) => {
					return {
						...o,
						highlightJob: o.levelName,
					};
				}) ?? [],
		};
	},
	{
		watch: [keyword],
	}
);
// 获取院校列表
const {
	data: schoolData,
	status: schoolStatus,
	refresh: schoolRefresh,
} = await useAsyncData<any>(
	'schoolList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.PUBLIC.QUERY_SCHOOL_LIST_BY_NAME, {
			body: {
				name: keyword.value,
				currentPage: schoolPagination.value.current,
				pageSize: schoolPagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 暴露数据
		return {
			list:
				res?.data?.list?.map((o: any) => {
					return {
						...o,
						highlightYxmc: o.yxmc,
					};
				}) ?? [],
			total: res?.data?.totalCount ?? 0,
		} as any;
	},
	{
		watch: [keyword],
	}
);
// 获取专业列表
const {
	data: majorData,
	status: majorStatus,
	refresh: majorRefresh,
} = await useAsyncData<any>(
	'majorList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.PUBLIC.QUERY_MAJOR_LIST_BY_NAME, {
			body: {
				name: keyword.value,
				sf: userInfo.value.province,
				currentPage: majorPagination.value.current,
				pageSize: majorPagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 暴露数据
		return {
			list:
				res?.data?.list?.map((o: any) => {
					return {
						...o,
						highlightZymc: o.zymc,
					};
				}) ?? [],
			total: res?.data?.totalCount ?? 0,
		} as any;
	},
	{
		watch: [keyword],
	}
);
// 获取职业列表
const {
	data: jobData,
	status: jobStatus,
	refresh: jobRefresh,
} = await useAsyncData<any>(
	'jobList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.PUBLIC.QUERY_JOB_LIST_BY_NAME, {
			body: {
				name: keyword.value,
				currentPage: jobPagination.value.current,
				pageSize: jobPagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 暴露数据
		return {
			list:
				res?.data?.list?.map((o: any) => {
					return {
						...o,
						highlightJob: o.levelName,
					};
				}) ?? [],
			total: res?.data?.totalCount ?? 0,
		} as any;
	},
	{
		watch: [keyword],
	}
);
// 监听route.query.keyword
watch(
	() => route.query.keyword,
	async () => {
		keyword.value = route.query.keyword;
	},
	{ immediate: true }
);
</script>
<style scoped>
:deep(.arco-radio-group .arco-radio) {
	margin-left: 0px;
	margin-right: 0px;
}
:deep(.arco-radio) {
	padding: 0px;
}
</style>
