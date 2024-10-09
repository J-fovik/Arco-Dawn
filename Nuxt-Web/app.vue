<template>
	<div>
		<!-- 进度条 -->
		<nuxt-loading-indicator :height="2" :throttle="200" />
		<!-- 进度条 -->
		<!-- 内容 -->
		<nuxt-layout>
			<nuxt-page></nuxt-page>
		</nuxt-layout>
		<!-- 内容 -->
		<client-only>
			<!-- 登录弹窗 -->
			<zs-modal align-center :show="websiteConfig.loginModal">
				<zs-login-or-register
					@success="() => (websiteConfig.loginModal = false)"
					@cancel="() => (websiteConfig.loginModal = false)"
				/>
			</zs-modal>
			<zs-modal align-center :show="websiteConfig.provinceModel">
				<zs-select-province
					@success="() => (websiteConfig.provinceModel = false)"
					@cancel="() => (websiteConfig.provinceModel = false)"
				/>
			</zs-modal>
		</client-only>
	</div>
</template>

<script setup lang="ts">
// 网站信息
const { websiteConfig, initWebsiteInformationData } = useWebsiteInformation();

// 网站唯一初始化
await useAsyncData<any>('initData', async () => {
	// 等待页面初始化请求设置
	await initWebsiteInformationData();
	// 必须有返回值
	return true;
});

// 设置Meta信息
useSeoMeta({
	ogTitle: '毕业之家升学规划',
	ogType: 'website',
});
// 设置头信息
useHead({
	link: [
		{
			rel: 'shortcut icon',
			href: '/images/icon.png',
			type: 'image/png',
		},
	],
});
</script>
<style>
/* 全局按钮主题样式 */
.arco-btn-primary,
.arco-btn-primary[type='button'],
.arco-btn-primary[type='submit'] {
	color: #fff;
	background-color: #7c92ff;
	border: 1px solid transparent;
}
.arco-btn-primary:hover,
.arco-btn-primary[type='button']:hover,
.arco-btn-primary[type='submit']:hover {
	color: #fff;
	background-color: #657fff;
	border: 1px solid transparent;
}
</style>
