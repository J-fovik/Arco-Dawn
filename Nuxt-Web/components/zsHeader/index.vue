<template>
	<header>
		<div class="h-[80px] inset-x-0 bg-white border-b">
			<div class="max-w-container mx-auto flex justify-between items-center px-[10px] h-full">
				<!-- Logo -->
				<nuxt-link to="/">
					<div class="flex items-center">
						<nuxt-img src="/images/logo@2x.png" width="46" height="46"></nuxt-img>
						<div class="ml-[6px] flex flex-col justify-center">
							<div class="font-bold text-[22px] leading-none">毕业之家</div>
							<div class="text-[12px] text-[#999999] mt-[3px]">www.biye.cc</div>
						</div>
					</div>
				</nuxt-link>
				<!-- 全局搜索 -->
				<div class="w-[460px] rounded-[8px]">
					<a-input
						size="large"
						v-model.trim="keyword"
						class="rounded8 h-[44px]"
						placeholder="搜索院校、专业、职业"
						@change="keyword ? navigateTo(`/search?keyword=${keyword}`) : ''"
					>
						<template #suffix>
							<span class="text-[#86909C]/50">
								<icon-search
									:size="18"
									class="cursor-pointer"
									@click="keyword ? navigateTo(`/search?keyword=${keyword}`) : ''"
								/>
							</span>
						</template>
					</a-input>
				</div>
				<a-space size="large">
					<!-- 筛选省份 -->
					<client-only>
						<div
							class="flex items-center cursor-pointer text-[16px] text-[#333]"
							@click="userInfo.province ? '' : (userInfo.provinceModel = true)"
						>
							{{ userInfo.province ?? '省份' }}
							<icon-down class="ml-[5px]" />
						</div>
					</client-only>
					<!-- 用户信息 -->
					<div
						v-if="userInfo.score"
						class="text-[15px] font-bold cursor-pointer"
						@click="userInfo.userInfoModal = true"
					>
						<span>{{ userInfo.xk }}</span>
						<span>{{ userInfo.score }}</span>
						<i class="iconfont icon-chuangzuo font-bold ml-[5px]" />
					</div>
					<!-- 会员 -->
					<div
						v-if="userInfo?.vipStateValue != '1'"
						class="w-[40px] h-[40px] leading-[40px] text-[#999999] bg-[#F5F5F5] text-center font-bold rounded-[8px] cursor-pointer"
						@click="navigateTo('/personal?tab=memberCenter')"
					>
						VIP
					</div>
					<div
						v-else
						@click="navigateTo('/personal?tab=memberCenter')"
						class="px-[10px] rounded-[20px] bg-[#FFA864] text-white leading-[32px] f-c-c cursor-pointer"
					>
						<div class="font-bold text-[14px]">至尊</div>
						<div class="f-c-c">
							<i class="iconfont icon-f-vip fontSize text-center" />
						</div>
					</div>
					<!-- 登录/注册按钮 -->
					<a-button
						v-if="!userInfo.phone"
						type="primary"
						size="large"
						shape="round"
						@click="userInfo.loginModal = true"
					>
						登录 / 注册
					</a-button>
					<div v-else class="cursor-pointer">
						<a-popover>
							<div class="flex items-center">
								<img
									:src="userInfo.header ? userInfo.header : '/images/avatar.png'"
									class="w-[40px] h-[40px] rounded-[50%]"
									alt=""
								/>
								<icon-down class="ml-[5px]" />
							</div>
							<template #content>
								<div class="flex items-center">
									<img
										:src="
											userInfo.header ? userInfo.header : '/images/avatar.png'
										"
										class="w-[40px] h-[40px] mr-[10px] rounded-[50%]"
										alt=""
									/>

									<div>
										<div class="flex items-center">
											<div>
												{{ hidePhoneFormat(userInfo.phone) }}
											</div>
											<div
												v-if="userInfo?.vipStateValue == '1'"
												class="text-[12px] h-[16px] leading-[16px] text-white flex items-center justify-center text-center bg-[#FFA864] rounded-[20px] ml-[8px] w-[130px]"
											>
												<span v-if="userInfo?.vipType != '0'">{{
													userInfo?.vipType == '1-1'
														? '专家在线辅助填报'
														: '专家一对一填报'
												}}</span>
												<i class="iconfont icon-f-vip" />
											</div>
										</div>
										<div>
											<span>{{ userInfo.province }}</span>
											<span class="mx-[3px]" v-if="userInfo.xk">{{
												userInfo.xk
											}}</span>
											<span v-if="userInfo.score">{{
												userInfo.score + '分'
											}}</span>
										</div>
									</div>
								</div>
								<img
									v-if="userInfo?.vipStateValue != '1'"
									src="/images/openMembership.png"
									class="w-[282px] mt-[20px] cursor-pointer"
									alt=""
									@click="navigateTo('/personal?tab=memberCenter')"
								/>
								<a-grid :cols="3" :colGap="12" :rowGap="16" class="mt-[20px]">
									<a-grid-item v-for="item in personalMenuList" :key="item.name">
										<nuxt-link :to="item.path">
											<div class="f-c-c flex-col">
												<div>
													<i
														class="iconfont text-[18px] font-bold"
														:class="item.icon"
													/>
												</div>
												<div>{{ item.name }}</div>
											</div>
										</nuxt-link>
									</a-grid-item>
									<a-grid-item>
										<div
											class="f-c-c flex-col cursor-pointer"
											@click="logoutUser()"
										>
											<div>
												<i
													class="iconfont icon-fenxiang text-[18px] font-bold"
												/>
											</div>
											<div>退出登录</div>
										</div>
									</a-grid-item>
								</a-grid>
							</template>
						</a-popover>
					</div>
				</a-space>
			</div>
		</div>

		<!-- 菜单 -->
		<div class="w-full h-[48px] leading-[48px] bg-[#7C92FF]">
			<div class="max-w-container mx-auto flex items-center justify-between">
				<div class="flex">
					<div v-for="item in menuList" :key="item.path">
						<nuxt-link :to="item.path">
							<div
								class="text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] text-[16px] cursor-pointer font-medium"
								:class="{
									'bg-[#657FFF]': route.path.startsWith(
										item.startsPath ?? item.path
									),
								}"
							>
								<!-- route.path === (item.startsPath ?? item.path) -->
								{{ item.name }}
							</div>
						</nuxt-link>
					</div>
					<!-- 更多菜单 -->
					<a-dropdown trigger="hover" size="large">
						<div
							class="text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] flex items-center text-[16px] cursor-pointer"
						>
							<icon-more-vertical :size="16" />
							更多
						</div>
						<template #content>
							<nuxt-link v-for="item in moreMenuList" :to="item.path">
								<a-doption>
									<div
										class="px-[20px] py-[0] h-[45px] hover:text-[#1677ff]] text-[14px] leading-[45px]"
									>
										{{ item.name }}
									</div>
								</a-doption>
							</nuxt-link>
						</template>
					</a-dropdown>
				</div>
				<!-- 个人中心 -->
				<nuxt-link v-slot="{ isActive }" to="/personal?tab=myVolunteer">
					<div
						v-if="userInfo.phone"
						class="text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] text-[16px]"
						:class="isActive ? 'bg-[#657FFF]' : ''"
					>
						个人中心
					</div>
				</nuxt-link>
			</div>
		</div>
	</header>
</template>

<script setup lang="ts" name="ZsHeader">
// 路由信息
const route = useRoute();
// 用户信息
const { userInfo, logoutUser } = useUser();
// 全局搜索关键词
const keyword = ref('');
// 菜单
const menuList = [
	{
		name: '首页',
		path: '/',
		startsPath: '/index',
	},
	...routeMenuList, // 路由菜单
];
// 更多菜单
const moreMenuList = [
	{
		name: '批次查询',
		path: '/batch',
	},
	{
		name: '位次查询',
		path: '/rank',
	},
	{
		name: '大学排名',
		path: '/schoolRank',
	},
	{
		name: '职业库',
		path: '/jobLibrary',
	},
];
// 个人中心菜单列表
const personalMenuList = [
	{
		name: '我的志愿',
		path: '/personal?tab=myVolunteer',
		icon: 'icon-dingdan',
	},
	{
		name: '我的测评',
		path: '/personal?tab=myEvaluation',
		icon: 'icon-guanzhu',
	},
	{
		name: '个人资料',
		path: '/personal?tab=personalData',
		icon: 'icon-wodeguanzhu',
	},
	{
		name: '我的关注',
		path: '/personal?tab=myAttention',
		icon: 'icon-yixiangkan',
	},
	{
		name: '专属码绑定',
		path: '/personal?tab=exclusiveCode',
		icon: 'icon-dianyingpiao',
	},
];
// 监听路由变化回显搜索关键词
watch(
	() => route.path,
	async () => {
		// 用户操作回显搜索条件
		if (route.path === '/search' && route.query.keyword) {
			keyword.value = route.query.keyword as string;
		} else {
			keyword.value = '';
		}
	},
	{ immediate: true }
);
</script>

<style scoped>
.arco-dropdown-option-active,
.arco-dropdown-option:not(.arco-dropdown-option-disabled):hover {
	color: var(--kui-theme-acive-color, #657fff);
}
.arco-btn-size-large {
	height: 42px;
	line-height: 42px;
	font-size: 16px;
	font-weight: bold;
}
.rounded8 {
	border-radius: 8px;
}
.fontSize {
	font-size: 24px;
}
</style>
