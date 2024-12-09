<template>
	<div class="max-w-container mx-auto">
		<template v-if="!majorDetail.error">
			<a-list :bordered="false" class="w-full" :loading="majorDetailStatus === 'pending'">
				<a-list-item>
					<a-list-item-meta>
						<!-- 专业名称 -->
						<template #title>
							<div class="text-[24px] cursor-pointer font-bold mb-[10px]">
								{{ majorDetail?.zymc }}
							</div>
						</template>
						<!-- 专业信息 -->
						<template #description>
							<div>
								<span>{{ majorDetail?.cc }}</span>
								<span>{{ majorDetail?.xkml ? '/' + majorDetail?.xkml : '' }}</span>
								<span>{{ majorDetail?.zyl ? '/' + majorDetail?.zyl : '' }}</span>
								<span v-if="majorDetail?.graduateScale" class="ml-[20px]">
									年度毕业生规模：{{ textFormat(majorDetail?.graduateScale) }}
								</span>
							</div>
							<a-space class="mt-[30px]" size="large">
								<div class="flex items-center">
									<div
										class="w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]"
									>
										<i
											class="iconfont icon-jiaocai font-bold text-white iconSize"
										/>
									</div>
									<div class="ml-[10px]">
										<div class="text-[#999]">专业代码</div>
										<div class="mt-[5px]">
											{{ textFormat(majorDetail?.zydm) }}
										</div>
									</div>
								</div>
								<div class="flex items-center">
									<div
										class="w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]"
									>
										<i
											class="iconfont icon-jiaoyu font-bold text-white iconSize"
										/>
									</div>
									<div class="ml-[10px]">
										<div class="text-[#999]">学历层次</div>
										<div class="mt-[5px]">
											{{ textFormat(majorDetail?.cc) }}
										</div>
									</div>
								</div>
								<div class="flex items-center">
									<div
										class="w-[42px] h-[42px] bg-[#FFA864] flex items-center justify-center rounded-[8px]"
									>
										<i
											class="iconfont icon-shijian font-bold text-white iconSize"
										/>
									</div>
									<div class="ml-[10px]">
										<div class="text-[#999]">休学年限</div>
										<div class="mt-[5px]">
											{{ textFormat(majorDetail?.xyNx) }}
										</div>
									</div>
								</div>
								<div class="flex items-center">
									<div
										class="w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]"
									>
										<i
											class="iconfont icon-XX_017 font-bold text-white iconSize"
										/>
									</div>
									<div class="ml-[10px]">
										<div class="text-[#999]">授予学位</div>
										<div class="mt-[5px]">
											{{ textFormat(majorDetail?.syxw) }}
										</div>
									</div>
								</div>
								<div class="flex items-center">
									<div
										class="w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]"
									>
										<i
											class="iconfont icon-yulebao font-bold text-white iconSize"
										/>
									</div>
									<div class="ml-[10px]">
										<div class="text-[#999]">平均薪酬</div>
										<div class="mt-[5px] text-price">
											{{ textFormat(turnThousandth(majorDetail?.pjxz)) }}
										</div>
									</div>
								</div>
							</a-space>
						</template>
					</a-list-item-meta>
					<!-- 操作 -->
					<template #actions>
						<a-space direction="vertical">
							<div
								class="w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center"
								@click="clickFollowMajor"
							>
								{{ majorDetail?.userIsCollect == '1' ? '取消关注' : '+关注' }}
							</div>
						</a-space>
					</template>
				</a-list-item>
			</a-list>
			<div class="p-[15px_30px] bg-[#F5F5F5]" v-if="majorDetail?.xkJy">
				<div>
					<i class="iconfont icon-wodexuanke font-bold" />
					<span class="ml-[15px]">选科建议：{{ textFormat(majorDetail?.xkJy) }}</span>
				</div>
				<div class="my-[10px]">
					<i class="iconfont icon-kaoyan font-bold" />
					<span class="ml-[15px]"
						>考研方向：{{ textFormat(majorDetail?.graduateInterestStr) }}</span
					>
				</div>
				<div>
					<i class="iconfont icon-baomingrenshu font-bold" />
					<span class="ml-[15px]"
						>社会名人： {{ textFormat(majorDetail?.celebrity) }}</span
					>
				</div>
			</div>
			<a-tabs
				v-model:active-key="form.activeTabKey"
				animation
				class="mt-[20px]"
				@change="changeTabs"
			>
				<!-- 专业概况 -->
				<a-tab-pane key="recap">
					<template #title>
						<div
							class="text-[18px]"
							:class="form.activeTabKey === 'recap' ? 'text-[#657fff] font-bold' : ''"
						>
							专业概况
						</div>
					</template>
					<zs-major-recap :data="majorDetail" />
				</a-tab-pane>
				<!-- 专业解读 -->
				<a-tab-pane key="decode">
					<template #title>
						<div
							class="text-[18px]"
							:class="
								form.activeTabKey === 'decode' ? 'text-[#657fff] font-bold' : ''
							"
						>
							专业解读
						</div>
					</template>
					<client-only>
						<div class="leading-[18px]">
							<div>一、{{ majorDetail?.zymc }}是什么?</div>
							<div class="indent-[2rem] mt-[5px] mb-[20px]">
								{{ majorDetail?.ssm }}
							</div>
							<div>二、{{ majorDetail?.zymc }}学什么?</div>
							<div class="indent-[2rem] mt-[5px] mb-[20px]">
								{{ majorDetail?.xsm }}
							</div>
							<div>三、{{ majorDetail?.zymc }}干什么?</div>
							<div class="indent-[2rem] mt-[5px] mb-[20px]">
								{{ majorDetail?.gsm }}
							</div>
							<div v-if="majorDetail?.job">
								<div>四、{{ majorDetail?.zymc }}专业就业情况</div>
								<div
									class="indent-[2rem] mt-[5px] mb-[20px]"
									v-html="majorDetail?.job"
								></div>
							</div>
						</div>
					</client-only>
				</a-tab-pane>
				<!-- 就业前景 -->
				<a-tab-pane key="prospect">
					<template #title>
						<div
							class="text-[18px]"
							:class="
								form.activeTabKey === 'prospect' ? 'text-[#657fff] font-bold' : ''
							"
						>
							就业前景
						</div>
					</template>
					<zs-major-job-prospects :data="majorDetail"> </zs-major-job-prospects>
				</a-tab-pane>
				<!-- 开设院校 -->
				<a-tab-pane key="school">
					<template #title>
						<div
							class="text-[18px]"
							:class="
								form.activeTabKey === 'school' ? 'text-[#657fff] font-bold' : ''
							"
						>
							开设院校
						</div>
					</template>
					<zs-major-open-college
						v-if="form.activeTabKey === 'school'"
						:data="schoolData.list"
						:params="{ ...schoolParams, ...pagination, total: schoolData.total }"
						:loading="schoolStatus === 'pending'"
						@change="changeSchoolParams"
						@change-page="onPageChange"
						@change-size="onPageSizeChange"
					/>
				</a-tab-pane>
			</a-tabs>
		</template>
		<zs-no-data v-else>
			<div>糟糕，页面好像没找到</div>
		</zs-no-data>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '专业详情',
});
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 路由信息
const route = useRoute();
const router = useRouter();
// form
const { form } = useForm(() => ({
	activeTabKey: ['recap', 'decode', 'prospect', 'school'].includes(route.query.tab as string)
		? (route.query.tab as string)
		: 'recap',
}));
// 开设院校参数
const { form: schoolParams } = useForm(() => ({
	zydm: '',
	location: '',
	type: '',
	cc: '',
	properties: '',
	strengthTags: '',
	featuresTags: '',
	sort: '',
}));
// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	schoolRefresh();
});
// 点击关注专业
const clickFollowMajor = async () => {
	const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW, {
		body: {
			majorId: majorDetail.value.id,
		},
	});
	$zsMsg('success', res.data);
	if (res) {
		// 关注与取消关注
		if (majorDetail.value.userIsCollect == '1') {
			majorDetail.value.userIsCollect = '0';
		} else {
			majorDetail.value.userIsCollect = '1';
		}
	}
};
// 开设院校切换查询条件
const changeSchoolParams = async (e: any) => {
	// 赋值开设院校参数
	schoolParams.value = { ...schoolParams.value, ...e };
	// 重置分页
	resetData();
};
// 切换tabs
const changeTabs = () => {
	// 路由重定向
	router.replace({
		query: { ...route.query, tab: form.value.activeTabKey },
	});
};
// 获取专业详情
const { data: majorDetail, status: majorDetailStatus } = await useAsyncData(
	'majorDetail',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_MAJOR_DETAIL, {
			body: {
				id: route.params.id,
			},
		});
		let result = {} as any;
		// 处理错误
		if (res.data === '专业不存在') {
			result.error = true;
		} else {
			result = {
				...res.data,
				// 简介信息
				isProfession: res?.data?.professionList?.length ? true : false,
				isEmployment: res?.data?.employmentList?.length ? true : false,
				isGraduateInterest: res?.data?.graduateInterestList?.length ? true : false,
				isCourseList: res?.data?.courseList?.length ? true : false,
				// 就业率
				jobrateList:
					res?.data?.jobrateList?.map((o: any) => {
						return {
							...o,
							rateValue: o.rateValue * 1,
						};
					}) ?? [],
				isJobrate: res?.data?.jobrateList?.length ? true : false,
				// 薪酬
				salaryXData: res?.data?.salaryList[0]?.majorSalaryAvgList,
				salaryYData: res?.data?.salaryList[0]?.allMajorSalaryAvgList,
				isSalary: res?.data?.salaryList?.length ? true : false,
				// 就业行业分布
				hyListXData: res?.data?.hyList?.map((o: any) => o.hy) ?? [],
				hyListYData: res?.data?.hyList?.map((o: any) => o.percent) ?? [],
				isHy: res?.data?.hyList?.length ? true : false,
				// 就业岗位分布
				gwList:
					res?.data?.gwList?.map((o: any) => {
						return {
							...o,
							name: o.gw,
							value: o.percent,
						};
					}) ?? {},
				isGw: res?.data?.gwList?.length ? true : false,
				// 就业地区分布
				areaXData: res?.data?.areaList?.length
					? res?.data?.areaList?.map((o: any) => o.percent)
					: [],
				areaYData: res?.data?.areaList?.length
					? res?.data?.areaList?.map((o: any) => o.sf)
					: [],
				isArea: res?.data?.areaList?.length ? true : false,
			} as any;
		}
		// 暴露数据
		return result;
	}
);
// 服务端请求开放院校列表
const {
	data: schoolData,
	status: schoolStatus,
	refresh: schoolRefresh,
} = await useAsyncData(
	'collegeList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_SCHOOL_LIST, {
			body: {
				zydm: majorDetail.value.zydm, // 专业代码
				location: schoolParams.value.location,
				type: schoolParams.value.type,
				cc: schoolParams.value.cc,
				properties: schoolParams.value.properties,
				strengthTags: schoolParams.value.strengthTags,
				featuresTags: schoolParams.value.featuresTags,
				sort: schoolParams.value.sort,
				currentPage: pagination.value.current,
				pageSize: pagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 返回数据
		return {
			list: res?.data?.list ?? [],
			total: res?.data?.totalCount ?? 0,
		};
	},
	{
		default: () => ({
			list: [],
			total: 0,
		}),
	}
);
</script>
<style scoped>
.iconSize {
	font-size: 25px;
}
</style>
