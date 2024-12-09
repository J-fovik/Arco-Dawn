<template>
	<div class="max-w-container mx-auto">
		<template v-if="!data.error">
			<a-list :bordered="false" :loading="status === 'pending'">
				<a-list :bordered="false">
					<a-list-item>
						<a-list-item-meta>
							<!-- 学校Logo -->
							<template #avatar>
								<div class="w-[130px]">
									<img :src="data.logo" class="w-[120px] cursor-pointer" alt="" />
								</div>
							</template>
							<!-- 学校名称 -->
							<template #title>
								<div class="text-[24px] cursor-pointer font-bold mb-[10px]">
									{{ data.yxmc }}
								</div>
							</template>
							<!-- 学校信息 -->
							<template #description>
								<a-space class="flex flex-wrap items-center">
									<template #split>
										<span class="w-[2px] h-[8px] text-[#999]">|</span>
									</template>
									<!-- 省份 -->
									<span v-if="findOptions(provinceCityList, data.sf)?.label">{{
										findOptions(provinceCityList, data.sf)?.label
									}}</span>
									<!-- 院校性质 -->
									<span
										v-if="
											findOptions(getDictionValue('YXLX'), data.yxLx)?.label
										"
										>{{
											findOptions(getDictionValue('YXLX'), data.yxLx)?.label
										}}</span
									>
									<!-- 隶属于 -->
									<span v-if="data.lsy">{{ data.lsy }}</span>
									<!-- 办学性质 -->
									<span
										v-if="
											findOptions(getDictionValue('BXXZ'), data.bxXz)?.label
										"
										>{{
											findOptions(getDictionValue('BXXZ'), data.bxXz)?.label
										}}</span
									>
								</a-space>
								<div>
									<a-space class="flex flex-wrap items-center">
										<span
											v-for="(tag, index) in data.schoolTags"
											:key="index"
											class="p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
										>
											{{ tag }}
										</span>
									</a-space>
								</div>
								<div class="flex items-center text-[#333]">
									<div v-if="data.dh">招生电话：{{ data.dh }}</div>
									<a-tooltip :content="data.bbDz">
										<div v-if="data.bbDz" class="mx-[20px] w-[300px] truncate">
											官方地址：{{ data.bbDz }}
										</div>
									</a-tooltip>
									<nuxt-link :to="data.wz" target="_blank">
										<span v-if="data.wz" class="text-[#5AB9FF]"
											>进入官方网址>></span
										>
									</nuxt-link>
								</div>
							</template>
						</a-list-item-meta>
						<!-- 操作 -->
						<template #actions>
							<a-space direction="vertical">
								<div
									class="w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center"
									@click="clickFollowSchool"
								>
									{{ data.userIsCollect == '1' ? '取消关注' : '+关注' }}
								</div>
								<div
									class="w-[160px] h-[40px] leading-[40px] rounded-[40px] text-[14px] text-center bg-[#7C92FF] text-white"
								>
									测测我的录取概率
								</div>
							</a-space>
						</template>
					</a-list-item>
				</a-list>
				<a-tabs
					v-model:active-key="form.activeTabKey"
					animation
					@change="changeTabs"
					destroy-on-hide
				>
					<!-- 院校简介 -->
					<a-tab-pane key="collegeBlurb">
						<template #title>
							<div
								class="text-[18px]"
								:class="
									form.activeTabKey === 'collegeBlurb'
										? 'text-[#657fff] font-bold'
										: ''
								"
							>
								院校简介
							</div>
						</template>
						<zs-college-blurb
							v-if="form.activeTabKey === 'collegeBlurb'"
							:data="data"
						/>
					</a-tab-pane>

					<!-- 开设专业 -->
					<a-tab-pane key="openMajor">
						<template #title>
							<div
								class="text-[18px]"
								:class="
									form.activeTabKey === 'openMajor'
										? 'text-[#657fff] font-bold'
										: ''
								"
							>
								开设专业
							</div>
						</template>
						<zs-college-open-major v-if="form.activeTabKey === 'openMajor'" />
					</a-tab-pane>

					<!-- 院校分数 -->
					<a-tab-pane key="schoolScore">
						<template #title>
							<div
								class="text-[18px]"
								:class="
									form.activeTabKey === 'schoolScore'
										? 'text-[#657fff] font-bold'
										: ''
								"
							>
								院校分数
							</div>
						</template>
						<zs-college-score v-if="form.activeTabKey === 'schoolScore'" />
					</a-tab-pane>

					<!-- 专业分数 -->
					<a-tab-pane key="majorScore">
						<template #title>
							<div
								class="text-[18px]"
								:class="
									form.activeTabKey === 'majorScore'
										? 'text-[#657fff] font-bold'
										: ''
								"
							>
								专业分数
							</div>
						</template>
						<zs-college-major-score v-if="form.activeTabKey === 'majorScore'" />
					</a-tab-pane>
					<!-- 招生计划 -->
					<a-tab-pane key="enrollmentPlan">
						<template #title>
							<div
								class="text-[18px]"
								:class="
									form.activeTabKey === 'enrollmentPlan'
										? 'text-[#657fff] font-bold'
										: ''
								"
							>
								招生计划
							</div>
						</template>
						<zs-college-enrollment-plan v-if="form.activeTabKey === 'enrollmentPlan'" />
					</a-tab-pane>
				</a-tabs>
			</a-list>
		</template>
		<zs-no-data v-else>
			<div>糟糕，页面好像没找到</div>
		</zs-no-data>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '大学详情',
});
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 网站信息
const { provinceCityList, getDictionValue } = useWebsiteInformation();
// 路由信息
const route = useRoute();
const router = useRouter();
// form
const { form } = useForm(() => ({
	activeTabKey: [
		'collegeBlurb',
		'openMajor',
		'schoolScore',
		'majorScore',
		'enrollmentPlan',
	].includes(route.query.tab as string)
		? (route.query.tab as string)
		: 'collegeBlurb',
}));
// 院校id
const id = ref(route.params.id);
// 切换tabs
const changeTabs = () => {
	// 路由重定向
	router.replace({
		query: { ...route.query, tab: form.value.activeTabKey },
	});
};
// 点击关注学校
const clickFollowSchool = async () => {
	const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW, {
		body: {
			schoolId: data.value.id,
		},
	});
	$zsMsg('success', res.data);
	if (res) {
		// 关注与取消关注
		if (data.value.userIsCollect == '1') {
			data.value.userIsCollect = '0';
		} else {
			data.value.userIsCollect = '1';
		}
	}
};
// 获取院校详情
const { data, status } = await useAsyncData(
	'collegeDetail',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_COLLEGE_DETAIL, {
			body: {
				id: id.value,
			},
		});
		let result = {} as any;
		// 处理错误
		if (res.data === '院校不存在') {
			result.error = true;
		} else {
			result = {
				...res?.data,
				// 历史沿革
				isHistoryEntities: res?.data?.historyEntities.length > 0 ? true : false,
				// 毕业生签约地区流向
				isBysQydqlx: res.data?.bysQydqlx?.length ? true : false,
				bysQydqlx:
					res?.data?.bysQydqlx?.map((o: any) => {
						return {
							...o,
							title: o.province,
							content: o.rate + '%',
							width: o.rate,
						};
					}) ?? [],
				// 毕业生就业单位
				bysQydw:
					res.data?.bysQydw?.map((o: any, i: any) => {
						return {
							...o,
							index: i + 1,
						};
					}) ?? [],
				isBysQydw: res.data?.bysQydw?.length ? true : false,
				isLabEntities: res?.data?.labEntities?.length ? true : false,
				// 食宿条件
				xxzs: res.data.xxzs * 1,
				shzs: res.data.shzs * 1,
				jyzs: res.data.jyzs * 1,
				zhfs: res.data.zhfs * 1,
				byxj: res.data.byxj * 1,
				// 院校排名
				rankEntities:
					res.data?.rankEntities?.map((o: any) => {
						return {
							...o,
							title: findOptions(getDictionValue('RANK'), o.rankType)?.label,
						};
					}) ?? [],
				isRankEntities: res.data?.rankEntities?.length ? true : false,
				isPhotoEntities: res?.data?.photoEntities?.length ? true : false,
			} as any;
		}
		// 暴露数据
		return result;
	},
	{
		// default: () => ({} as any),
		watch: [id],
	}
);
</script>
