<template>
	<div>
		<!-- 轮播图 -->
		<div class="h-[350px] mx-auto max-w-[1920px]">
			<zs-swiper></zs-swiper>
		</div>

		<div class="mx-auto max-w-container">
			<!-- 填报 -->
			<div class="mt-[20px]">
				<a-grid :cols="2" :colGap="12" :rowGap="16">
					<a-grid-item class="rounded-xl">
						<img alt="avatar" src="/images/fillOne.png" class="cursor-pointer" />
					</a-grid-item>
					<a-grid-item class="rounded-xl">
						<img alt="avatar" src="/images/fillTwo.png" class="cursor-pointer" />
					</a-grid-item>
				</a-grid>
			</div>

			<!-- 导航 -->
			<div class="mt-[20px] card-box-shadow rounded-lg bg-white" :bordered="false">
				<div class="flex justify-around items-center cursor-pointer shadowNone p-[30px]">
					<nuxt-link v-for="item in menuList" :key="item.path" :to="item.path">
						<div
							class="bg-[#657FFF] w-[70px] h-[70px] rounded-[20px] flex justify-center items-center"
						>
							<img :src="item.img" alt="" class="m-auto w-[50px] h-[50px]" />
						</div>
						<div
							class="mt-[10px] hover:text-[#657FFF] text-[16px] text-[#333333] text-center font-bold"
						>
							{{ item.name }}
						</div>
					</nuxt-link>
				</div>
			</div>

			<!-- 更多升学规划 -->
			<zs-title title="更多升学规划" size="large" class="mt-[40px]" />
			<div class="mt-[20px]">
				<a-grid :cols="4" :colGap="12" :rowGap="16">
					<a-grid-item v-for="item in morePlan" :key="item.name">
						<div
							class="flex items-center justify-center text-[24px] h-[80px] rounded-xl cursor-pointer font-bold"
							:class="item.classStyle"
						>
							{{ item.name }}
						</div>
					</a-grid-item>
				</a-grid>
			</div>

			<!-- 院校推荐 -->
			<template v-if="schoolRecommendationList && schoolRecommendationList.length">
				<zs-title title="院校推荐" size="large" class="mt-[40px]">
					<!-- <template #center> 山东 物化生 420分 </template> -->
				</zs-title>
				<a-grid :cols="4" :colGap="12" :rowGap="16" class="mt-[20px]">
					<a-grid-item
						v-for="(item, index) in schoolRecommendationList"
						:key="index"
						class="hover:translate-y-[-4px]"
					>
						<a-card
							class="card-box-shadow rounded-lg bg-white p-[10px_10px]"
							hoverable
							:bordered="false"
						>
							<nuxt-link :to="`/college/${item.id}`" target="_blank">
								<div class="flex items-center">
									<a-avatar :size="60">
										<img alt="avatar" :src="item.logo" />
									</a-avatar>
									<div class="ml-[8px] flex-1">
										<div
											class="font-bold text-[18px] leading--[18px] truncate w-[150px] text-[#333]"
										>
											{{ item.yxmc }}
										</div>
										<div class="mt-[12px] flex items-center justify-between">
											<a-space>
												<a-tag>{{
													findOptions(provinceCityList, item.sf)?.label
												}}</a-tag>
												<a-tag>{{
													findOptions(getDictionValue('YXLX'), item.yxLx)
														?.label
												}}</a-tag>
											</a-space>
											<span class="cursor-pointer text-[#999999] text-[14px]"
												>查看院校</span
											>
										</div>
									</div>
								</div>
							</nuxt-link>
						</a-card>
					</a-grid-item>
				</a-grid>
			</template>

			<!-- 高薪专业 -->
			<zs-title title="高薪专业" size="large" class="mt-[40px]" />
			<a-grid :cols="5" :colGap="12" :rowGap="16" class="mt-[20px]">
				<a-grid-item
					v-for="(item, index) in heighPayMajorList"
					:key="index"
					class="hover:translate-y-[-4px]"
				>
					<a-card
						class="card-box-shadow rounded-lg bg-white p-[10px_10px]"
						hoverable
						:bordered="false"
					>
						<nuxt-link :to="`/major/${item.id}`">
							<div class="flex items-center justify-center flex-col">
								<div
									class="font-bold text-center text-[18px] truncate w-[150px] text-[#333]"
								>
									{{ item.zymc }}
								</div>
								<div class="mt-[5px]">
									<a-tag>{{ item.zyl }}</a-tag>
								</div>
								<div
									class="mt-[5px] text-[red] text-[21px] before:text-[80%] before:content-['¥']"
								>
									{{ turnThousandth(item.fivePjxz) }}
								</div>
								<div class="mt-[5px] text-[#999] text-[12px]">毕业五年月薪资</div>
							</div>
						</nuxt-link>
					</a-card>
				</a-grid-item>
			</a-grid>

			<!-- 校园风光 -->
			<zs-title title="校园风光" size="large" class="mt-[40px]">
				<template #right>
					<a-link @click="currentNum++, getSchoolSceneryList()">
						换一批 <icon-sync
					/></a-link>
				</template>
			</zs-title>
			<div class="mt-[20px]">
				<a-grid :cols="4" :colGap="12" :rowGap="16">
					<a-grid-item
						v-for="(item, index) in schoolSceneryList"
						:key="index"
						class="card-box-shadow rounded-lg overflow-hidden"
					>
						<nuxt-link :to="`/college/${item.id}`">
							<div class="flex items-center relative overflow-hidden">
								<img
									:src="item.url"
									alt=""
									class="block hover:scale-[1.2] transitionAll"
								/>
								<div
									class="absolute h-[50px] bg-[rgba(0,0,0,0.5)] text-[16px] bottom-0 right-0 w-full flex items-center justify-center font-bold overflow-hidden text-white"
								>
									{{ item.yxmc }}
								</div>
							</div>
						</nuxt-link>
					</a-grid-item>
				</a-grid>
			</div>

			<!-- 友情链接 -->
			<zs-title title="友情链接" size="large" class="mt-[40px]" />
			<div class="mt-[20px]">
				<span
					class="cursor-pointer mr-[20px] text-[16px] text-[#333]"
					v-for="item in friendshipLinkList"
				>
					<nuxt-link :to="item.path" target="_blank">
						{{ item.name }}
					</nuxt-link>
				</span>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '首页',
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 网站信息
const { provinceCityList, getDictionValue } = useWebsiteInformation();
// 当前校园风光页码
const currentNum = ref(1);
const schoolRecommendationList = ref([] as any);
const heighPayMajorList = ref([] as any);
const schoolSceneryList = ref([] as any);

// 导航菜单
const menuList = [
	{
		name: '查大学',
		path: '/college',
		img: '/images/menu1.png',
	},
	{
		name: '查专业',
		path: '/major',
		img: '/images/menu2.png',
	},
	{
		name: '查批次',
		path: '/batch',
		img: '/images/menu3.png',
	},
	{
		name: '查位次',
		path: '/rank',
		img: '/images/menu4.png',
	},
	{
		name: '大学排名',
		path: '/schoolRank',
		img: '/images/menu5.png',
	},
	{
		name: '专业测评',
		path: '/evaluate',
		img: '/images/menu6.png',
	},
	{
		name: '高考选科',
		path: '/subject',
		img: '/images/menu7.png',
	},
	{
		name: '模拟志愿',
		path: '/choice',
		img: '/images/menu8.png',
	},
];
// 更多升学规划
const morePlan = [
	{
		name: '高中成绩提分规划',
		classStyle: 'text-[#7C92FF] bgLinearOne',
	},
	{
		name: '春考高职单招规划',
		classStyle: 'text-[#5AB9FF] bgLinearTwo',
	},
	{
		name: '国际本科留学规划',
		classStyle: 'text-[#FFA864] bgLinearThree',
	},
	{
		name: '大学考研就业规划',
		classStyle: 'text-[#5A75F9] bgLinearFour',
	},
];
// 友情链接
const friendshipLinkList = [
	{
		name: '阳光高考',
		id: '0001',
		path: 'https://gaokao.chsi.com.cn/',
	},
];
// 院校推荐列表
const getSchoolRecommendationList = async () => {
	const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_INDEX_SCHOOL_RECOMMENDATION_LIST, {
		method: 'POST',
		body: {
			sf: userInfo.value.province,
			xk: userInfo.value.xk ?? '',
			score: userInfo.value.score ?? '',
		},
	});
	schoolRecommendationList.value = res?.data ?? [];
};
// 高新专业列表
const getHeighPayMajorList = async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_INDEX_HEIGH_MAY_MAJOR, {
		method: 'POST',
	});
	heighPayMajorList.value = res?.data ?? [];
};
// 校园风光列表
const getSchoolSceneryList = async () => {
	const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_INDEX_SCHOOL_SCENERY_LIST, {
		method: 'POST',
		body: {
			clickCount: currentNum.value,
			sf: userInfo.value.province,
		},
	});
	schoolSceneryList.value = res?.data ?? [];
};
watch(
	() => userInfo.value.province,
	async () => {
		if (userInfo.value.province) {
			await Promise.all([
				getSchoolRecommendationList(),
				getHeighPayMajorList(),
				getSchoolSceneryList(),
			]);
		}
	},
	{ immediate: true }
);
</script>
<style scoped>
.bgLinearOne {
	background: linear-gradient(180deg, #e5eaff 0%, #c3cdff 100%);
}
.bgLinearTwo {
	background: linear-gradient(180deg, #e5f3fd 0%, #bce2ff 100%);
}
.bgLinearThree {
	background: linear-gradient(180deg, #fff1e7 0%, #fed6b7 100%);
}
.bgLinearFour {
	background: linear-gradient(180deg, #e9ecff 0%, #bec9ff 100%);
}
.shadowNone {
	--tw-shadow: 0 0 #0000;
	--tw-shadow-colored: 0 0 #0000;
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000),
		var(--tw-shadow);
}
</style>
