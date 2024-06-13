<template>
	<div class="navbar">
		<div class="left-side">
			<a-space>
				<img alt="logo" style="width: 35px" src="@/assets/svg/logo.svg" />
				<a-typography-title :style="{ margin: 0, fontSize: '18px' }" :heading="5">
					{{ appStore.appConfig.appName }}
				</a-typography-title>
			</a-space>
		</div>
		<div class="center-side">
			<!-- <zs-menu v-if="appStore.appConfig.topMenu" /> -->
		</div>
		<a-space class="right-side" size="large">
			<!-- 主题 -->
			<a-tooltip
				:content="
					appStore.appConfig.theme === 'light'
						? '点击切换为暗色模式'
						: '点击切换为亮色模式'
				"
			>
				<a-button
					class="nav-btn"
					type="outline"
					shape="circle"
					@click="appStore.handleToggleTheme"
				>
					<template #icon>
						<icon-moon-fill v-if="appStore.appConfig.theme === 'dark'" />
						<icon-sun-fill v-else />
					</template>
				</a-button>
			</a-tooltip>
			<!-- 主题 -->
			<!-- 全屏 -->
			<a-tooltip :content="isFullscreen ? '点击退出全屏模式' : '点击进入全屏模式'">
				<a-button
					class="nav-btn"
					type="outline"
					shape="circle"
					@click="handleToggleFullscreen"
				>
					<template #icon>
						<icon-fullscreen-exit v-if="isFullscreen" />
						<icon-fullscreen v-else />
					</template>
				</a-button>
			</a-tooltip>
			<!-- 全屏 -->
			<!-- 设置 -->
			<a-tooltip content="页面配置">
				<a-button
					class="nav-btn"
					type="outline"
					shape="circle"
					@click="appStore.setGlobalSettingsVisible(true)"
				>
					<template #icon>
						<icon-settings />
					</template>
				</a-button>
			</a-tooltip>
			<!-- 设置 -->
			<!-- 用户信息 -->
			<a-dropdown trigger="click">
				<a-avatar :size="32" class="cursor-pointer">
					<img alt="avatar" src="@/assets/images/user.png" />
				</a-avatar>
				<template #content>
					<a-doption>
						<a-space @click="router.push('/system/dictionaryManage')">
							<icon-settings />
							<span> 字典管理 </span>
						</a-space>
					</a-doption>
					<a-doption>
						<a-space @click="logout">
							<icon-export />
							<span> 退出登录 </span>
						</a-space>
					</a-doption>
				</template>
			</a-dropdown>
			<!-- 用户信息 -->
		</a-space>
	</div>
</template>

<script setup lang="ts" name="ZsNavBar">
import jsCookie from 'js-cookie';
import { useModal, useBasicsState } from '@/hooks';
import { useFullscreen } from '@vueuse/core';
import { useAppStore, useTabStore, useUserStore } from '@/pinia';
// 对话框
const { warningModal } = useModal();
// 标签页控制
const { clearTabList } = useTabStore();
// 状态控制 ｜ 弹窗控制
const [activeKey, setActiveKey] = useBasicsState('');
// app配置
const appStore = useAppStore();
// 用户信息
const userStore = useUserStore();
// 路由控制
const router = useRouter();
// 全屏控制
const { isFullscreen, toggle: handleToggleFullscreen } = useFullscreen();
// 登出
const logout = () => {
	warningModal(`确定退出登录吗？`, async (done) => {
		// 请空用户信息
		userStore.setUserInfo({});
		// 清除Cookie
		jsCookie.remove('userToken');
		// 清除标签
		clearTabList();
		// 关闭弹窗
		done(true);
		// 跳转登录
		router.push('/login');
	});
};
</script>

<style scoped lang="less">
.navbar {
	display: flex;
	justify-content: space-between;
	height: 100%;
	background-color: var(--color-bg-2);
	border-bottom: 1px solid var(--color-border);
}

.left-side {
	display: flex;
	align-items: center;
	padding-left: 20px;
}

.center-side {
	flex: 1;
}

.right-side {
	margin-right: 50px;
	.nav-btn {
		border-color: rgb(var(--gray-2));
		color: rgb(var(--gray-8));
		font-size: 16px;
	}
}
</style>
