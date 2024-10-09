<template>
	<header>
		<div class="h-[100px] inset-x-0 bg-white border-b">
			<div class="mx-auto max-w-container h-full flex justify-between items-center px-[10px]">
				<!-- Logo -->
				<nuxt-link to="/">
					<nuxt-img
						src="/images/logo.png"
						width="300"
						height="80"
						class="w-[200px] h-[60px]"
					></nuxt-img>
				</nuxt-link>
				<!-- 全局搜索 -->
				<div class="w-[560px]">
					<a-input
						size="large"
						class="rounded-lg h-[50px]"
						placeholder="搜索院校、专业、资讯"
						allow-clear
					>
						<template #suffix>
							<icon-search class="cursor-pointer" @click="console.log(11)" />
						</template>
					</a-input>
				</div>
				<!-- 筛选省份 -->
				<div class="flex items-center">
					<div
						class="flex items-center mr-[20px] cursor-pointer text-[16px]"
						@click="websiteConfig.provinceModel = true"
					>
						省份
						<icon-down />
					</div>
					<!-- 登录/注册按钮 -->
					<a-button
						type="primary"
						size="large"
						shape="round"
						@click="websiteConfig.loginModal = true"
					>
						登录/注册
					</a-button>
				</div>
			</div>
		</div>

		<!-- 菜单 -->
		<div class="w-full h-[48px] leading-[48px] bg-[#7C92FF]">
			<div class="max-w-container mx-auto flex items-center justify-between">
				<div class="flex">
					<nuxt-link v-for="item in menuList" v-slot="{ isActive }" :to="item.path">
						<div
							class="text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] text-[16px]"
							:class="isActive ? 'bg-[#657FFF]' : ''"
						>
							{{ item.name }}
						</div>
					</nuxt-link>
					<!-- 更多菜单 -->
					<a-dropdown trigger="hover" size="large">
						<div
							class="text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] flex items-center text-[16px] cursor-pointer"
						>
							<icon-more-vertical size="20" />
							更多
						</div>
						<template #content>
							<nuxt-link v-for="item in moreMenuList" :to="item.path">
								<a-doption>
									<div
										class="px-[20px] py-[0] h-[48px] hover:text-[#1677ff]] text-[16px] font-bold leading-[48px]"
									>
										{{ item.name }}
									</div>
								</a-doption>
							</nuxt-link>
						</template>
					</a-dropdown>
				</div>
				<!-- 个人中心 -->
				<nuxt-link v-slot="{ isActive }" to="/personal/myVolunteer">
					<div
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
// 网站信息
const { websiteConfig } = useWebsiteInformation();
// 菜单
const menuList = [
	{
		name: '首页',
		path: '/',
	},
	{
		name: '查大学',
		path: '/college',
	},
	{
		name: '查专业',
		path: '/major',
	},
	{
		name: '生涯测评',
		path: '/evaluate',
	},
	{
		name: '新高考选科',
		path: '/subject',
	},
	{
		name: '智能填报',
		path: '/choice',
	},
	{
		name: '升学规划',
		path: '/plan',
	},
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
		path: '/collegeRank',
	},
];
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
</style>
