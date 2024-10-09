<template>
	<div>
		<!-- 轮播图 -->
		<div class="h-[350px]">
			<zs-swiper></zs-swiper>
		</div>

		<!-- 填报 -->
		<div class="mx-auto max-w-container mt-[20px]">
			<a-grid :cols="2" :colGap="12" :rowGap="16">
				<a-grid-item class="rounded-xl">
					<!-- <nuxt-link :to="`/college/1`" target="_blank"> -->
					<img alt="avatar" src="/images/fillOne.png" />
					<!-- </nuxt-link> -->
				</a-grid-item>
				<a-grid-item class="rounded-xl">
					<!-- <nuxt-link :to="`/college/1`" target="_blank"> -->
					<img alt="avatar" src="/images/fillTwo.png" />
					<!-- </nuxt-link> -->
				</a-grid-item>
			</a-grid>
		</div>

		<!-- 导航 -->
		<div
			class="mx-auto max-w-container flex flex-row flex-wrap py-[30px] justify-start px-[30px] card-box-shadow rounded-xl mt-[20px]"
		>
			<div
				v-for="item in menuList"
				:key="item.path"
				class="flex flex-row items-center flex-1 text-center justify-around cursor-pointer"
			>
				<nuxt-link :to="item.path">
					<div
						class="bg-[#657FFF] w-[70px] h-[70px] rounded-[20px] flex justify-center items-center"
					>
						<img :src="item.img" alt="" class="m-auto w-[50px] h-[50px]" />
					</div>
					<div class="mt-[10px] hover:text-[#657FFF] text-[18px]">
						{{ item.name }}
					</div>
				</nuxt-link>
			</div>
		</div>

		<!-- 更多升学规划 -->
		<zs-title title="更多升学规划" size="large" class="mt-[40px]" />
		<div class="mx-auto max-w-container mt-[20px]">
			<a-grid :cols="4" :colGap="12" :rowGap="16">
				<a-grid-item v-for="item in morePlan" :key="item.name">
					<!-- <nuxt-link :to="`/college/${item.id}`" target="_blank"> -->
					<div
						class="flex items-center justify-center text-[24px] h-[80px] rounded-xl cursor-pointer font-bold"
						:class="item.classStyle"
					>
						{{ item.name }}
					</div>
					<!-- </nuxt-link> -->
				</a-grid-item>
			</a-grid>
		</div>

		<!-- 院校推荐 -->
		<zs-title title="院校推荐" size="large" class="mt-[40px]">
			<template #center> 山东 物化生 420分 </template>
		</zs-title>
		<div class="mx-auto max-w-container mt-[20px]">
			<a-grid :cols="4" :colGap="12" :rowGap="16">
				<a-grid-item
					v-for="(item, index) in schoolList"
					:key="index"
					class="card-box-shadow hover:translate-y-[-4px] p-[20px] rounded-xl"
				>
					<nuxt-link :to="`/college/${item.id}`" target="_blank">
						<div class="flex items-center">
							<a-avatar :size="60">
								<img alt="avatar" :src="item.img" />
							</a-avatar>
							<div class="ml-[8px] flex-1">
								<div class="font-bold text-[18px] truncate w-[150px]">
									{{ item.name }}
								</div>
								<div class="mt-[10px] flex items-center justify-between">
									<a-space>
										<a-tag v-for="(tag, index) in item.tag" :key="index">
											{{ tag }}
										</a-tag>
									</a-space>
									<span class="cursor-pointer text-[#999999] text-[14px]"
										>查看院校</span
									>
								</div>
							</div>
						</div>
					</nuxt-link>
				</a-grid-item>
			</a-grid>
		</div>

		<!-- 高薪专业 -->
		<zs-title title="高薪专业" size="large" class="mt-[40px]" />
		<div class="mx-auto max-w-container mt-[20px]">
			<a-grid :cols="5" :colGap="12" :rowGap="16">
				<a-grid-item
					v-for="(item, index) in majorList"
					:key="index"
					class="card-box-shadow hover:translate-y-[-4px] p-[20px] text-center rounded-xl"
				>
					<nuxt-link :to="`/major/${item.id}`" target="_blank">
						<div class="flex items-center justify-center flex-col">
							<div class="font-bold text-[18px] truncate w-[150px]">
								{{ item.name }}
							</div>
							<div class="mt-[5px]">
								<a-tag>{{ item.tag }}</a-tag>
							</div>
							<div
								class="mt-[5px] text-[red] text-[21px] before:text-[80%] before:content-['¥']"
							>
								99999
							</div>
							<div class="mt-[5px] text-[#999] text-[12px]">毕业五年月薪资</div>
						</div>
					</nuxt-link>
				</a-grid-item>
			</a-grid>
		</div>

		<!-- 校园风光 -->
		<zs-title title="校园风光" size="large" class="mt-[40px]">
			<template #right>
				<a-link> 换一批 <icon-sync /></a-link>
			</template>
		</zs-title>
		<div class="mx-auto max-w-container mt-[20px]">
			<a-grid :cols="4" :colGap="12" :rowGap="16">
				<a-grid-item
					v-for="(item, index) in schoolList"
					:key="index"
					class="card-box-shadow overflow-hidden"
				>
					<nuxt-link :to="`/college/${item.id}`" target="_blank">
						<div class="flex items-center relative overflow-hidden">
							<img
								:src="item.schoolImg"
								alt=""
								class="block hover:scale-[1.2] transitionAll"
							/>
							<div
								class="absolute h-[50px] bg-[rgba(0,0,0,0.5)] text-[16px] bottom-0 right-0 w-full flex items-center justify-center font-bold overflow-hidden text-white"
							>
								{{ item.name }}
							</div>
						</div>
					</nuxt-link>
				</a-grid-item>
			</a-grid>
		</div>

		<!-- 友情链接 -->
		<zs-title title="友情链接" size="large" class="mt-[40px]" />
		<div class="mx-auto max-w-container mt-[20px]">
			<span class="cursor-pointer mr-[20px] text-[16px]" v-for="item in friendshipLinkList">
				<nuxt-link :to="item.path" target="_blank">
					{{ item.name }}
				</nuxt-link>
			</span>
		</div>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '首页',
});
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
		path: '/collegeRank',
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
// 学校列表
const schoolList = [
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0001',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0002',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0003',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0004',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0005',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0006',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0007',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0008',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0004',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0005',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0006',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0007',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
];
// 专业列表
const majorList = [
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0001',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0002',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0003',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0004',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0005',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0006',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0007',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0008',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0007',
	},
	{
		name: '软件工程',
		tag: '计算机类',
		id: '0008',
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
// 全局插件
const { $zsFetch } = useNuxtApp();
// 线路信息
const getRoutes = async (dataFlag: '0' | '1') => {
	const [err, res] = await $zsFetch('/api/v1/website/web/homePage/queryRouteListOfHomePage', {
		method: 'POST',
		body: {
			dataFlag, //线路来源
			currentPage: 1, //当前页码
			pageSize: 6, //每页显示条数
			pagingOrNot: 1, //分页标志 0不分页 1分页
		},
	});
	// 返回结果
	return res.data ?? [];
};
// 新闻列表
const getHomeNewsList = async () => {
	const [err, res] = await $zsFetch('/api/v1/website/web/homePage/queryNewsOfHomePage', {
		method: 'POST',
	});
	// 返回结果
	return res.data ?? [];
};
// 首页服务端获取数据
const { data } = await useAsyncData(
	'homeInitData',
	async () => {
		// 请求推荐线路、热门线路、首页新闻数据
		const [recommendDataList, popularDataList, newsDataList] = await Promise.all([
			getRoutes('0'),
			getRoutes('1'),
			getHomeNewsList(),
		]);
		// 新闻拆解显示
		const [startNewsData, ...otherNewsDataList] = newsDataList;
		// 返回数据
		return {
			recommendDataList,
			popularDataList,
			otherNewsDataList: otherNewsDataList ?? [],
			startNewsData: startNewsData ?? {},
		};
	},
	{
		default: () => ({
			recommendDataList: [],
			popularDataList: [],
			otherNewsDataList: [],
			startNewsData: {},
		}),
	}
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
</style>
