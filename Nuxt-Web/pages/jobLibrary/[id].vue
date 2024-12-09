<template>
	<div class="max-w-container mx-auto min-h-[70vh]">
		<div v-if="!error">
			<a-list :bordered="false" :loading="loading">
				<div class="text-[32px] font-bold mt-[35px]">{{ jobDetail.levelName }}</div>
				<div class="mt-[20px]">
					<span class="bg-[#FFF7F0] text-[#FFA864] p-[5px]"
						>{{ jobDetail.level1Name
						}}{{ jobDetail.level2Name ? '/' + jobDetail.level2Name : ''
						}}{{ jobDetail.level3Name ? '/' + jobDetail.level3Name : '' }}</span
					>
				</div>
				<!-- 职业介绍 -->
				<div v-if="jobDetail.introduce" class="mt-[20px]">
					<zs-title title="职业介绍" size="small" />
					<div
						class="mt-[10px] p-[15px_20px] bg-[#F5F5F5] leading-[20px]"
						v-html="jobDetail.introduce"
					></div>
				</div>

				<!-- 匹配大学生专业 -->
				<div v-if="jobDetail.isBkMajor || jobDetail.isZkMajor" class="mt-[20px]">
					<zs-title title="匹配大学专业" size="small" />
					<!-- 本科专业 -->
					<div class="mt-[10px]" v-if="jobDetail.isBkMajor">
						本科专业：<span
							v-for="(item, index) in jobDetail.bkMajorList"
							:key="index"
							class="mr-[20px] text-[#FFA864] cursor-pointer"
						>
							<nuxt-link :to="`/major/${item.id}`">
								{{ item.zymc }}
							</nuxt-link>
						</span>
					</div>
					<!-- 专科专业 -->
					<div class="mt-[10px]" v-if="jobDetail.isZkMajor">
						专科专业：<span
							v-for="(item, index) in jobDetail.zkMajorList"
							:key="index"
							class="mr-[20px] text-[#FFA864] cursor-pointer"
						>
							<nuxt-link :to="`/major/${item.id}`">
								{{ item.zymc }}
							</nuxt-link>
						</span>
					</div>
				</div>
			</a-list>
		</div>
		<zs-no-data v-else>
			<div>糟糕，页面好像没找到</div>
		</zs-no-data>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '职业库详情',
});
// 避免输入框输入
const error = ref(false);
// 全局插件
const { $zsFetch } = useNuxtApp();
// loading
const [loading, setLoading] = useBasicsState(false);
// 路由信息
const route = useRoute();
// 获取职业详情
const { data: jobDetail } = useRequest<any>(async () => {
	// loading 开启
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_PROFESSION_INFO, {
		body: {
			id: route.params.id,
		},
	});
	// 处理错误
	if (res.data === '职业不存在') {
		error.value = true;
		setLoading(false);
		return;
	}
	// loading 开启
	setLoading(false);
	return {
		...res?.data,
		isBkMajor: res?.data?.bkMajorList?.length > 0 ? true : false,
		isZkMajor: res?.data?.zkMajorList?.length > 0 ? true : false,
	};
});
</script>
