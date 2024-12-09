<template>
	<div class="font-mono">
		<!-- 进度条 -->
		<nuxt-loading-indicator :height="2" :throttle="200" />
		<!-- 进度条 -->
		<!-- 内容 -->
		<nuxt-layout>
			<nuxt-page></nuxt-page>
		</nuxt-layout>
		<!-- 内容 -->
		<client-only>
			<!-- 省份选择 -->
			<zs-modal align-center :show="userInfo.provinceModel">
				<zs-select-province
					@success="() => ((userInfo.provinceModel = false), router.go(0))"
					@cancel="() => (userInfo.provinceModel = false)"
				/>
			</zs-modal>
			<!-- 登录弹窗 -->
			<zs-modal align-center :show="userInfo.loginModal">
				<zs-login-or-register
					@success="() => ((userInfo.loginType = '1'), router.go(0))"
					@cancel="() => ((userInfo.loginModal = false), (userInfo.loginType = '1'))"
				/>
			</zs-modal>
			<!-- 保存用户信息 -->
			<zs-modal align-center :show="userInfo.userInfoModal">
				<zs-set-user-info
					@success="
						() => (
							(userInfo.userInfoModal = false),
							(userInfo.userInfoModalName = '完善学生信息'),
							router.go(0)
						)
					"
					@cancel="
						() => (
							(userInfo.userInfoModal = false),
							(userInfo.userInfoModalName = '完善学生信息')
						)
					"
				/>
			</zs-modal>
			<!-- 消息提示 -->
			<zs-msg></zs-msg>
			<!-- 加载弹窗 -->
			<zs-loading></zs-loading>
		</client-only>
	</div>
</template>

<script setup lang="ts">
// 用户信息
const { userInfo, getUserInfo } = useUser();
// 路由信息
const router = useRouter();
// 网站信息
const { initWebsiteInformationData } = useWebsiteInformation();
// 网站唯一初始化
await useAsyncData<any>('initData', async () => {
	// 等待页面初始化请求设置
	await Promise.all([getUserInfo(), initWebsiteInformationData()]);
	// 必须有返回值
	return true;
});
onBeforeMount(() => {
	userInfo.value.province = userInfo.value.province
		? userInfo.value.province
		: Local.get('province') ?? '';
	if (userInfo.value.province) {
		// 设置省份
		Local.set('province', userInfo.value.province);
		userInfo.value.provinceModel = false;
	} else {
		userInfo.value.provinceModel = true;
	}
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
<style lang="scss">
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
/* tabs样式 */
.arco-tabs-nav-ink {
	background: #657fff;
	height: 3px;
}
</style>
