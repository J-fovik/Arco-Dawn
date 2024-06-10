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
			<zs-menu v-if="appStore.appConfig.topMenu" />
		</div>
		<a-space class="right-side" size="large">
			<!-- 主题 -->
			<!-- <a-tooltip
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
			</a-tooltip> -->
			<!-- 主题 -->
			<!-- 消息 -->
			<!-- <a-popover title="最新公告">
				<a-badge :count="1" dot>
					<a-button class="nav-btn" type="outline" shape="circle">
						<icon-sound />
					</a-button>
				</a-badge>
				<template #content>
					<div style="width: 300px">
						<a-list :max-height="340" :scrollbar="true" :bordered="false">
							<a-list-item v-for="item of 3" style="padding: 13px 0">
								<a-space align="start">
									<div style="padding-top: 2px">
										<a-tag color="blue">最新</a-tag>
									</div>
									<span style="line-height: 1.5"
										>关于认真做好端午节期间旅游安全工作及放假安排的通知</span
									>
								</a-space>
							</a-list-item>
						</a-list>
					</div>
				</template>
			</a-popover> -->
			<!-- 消息 -->
			<!-- <a-popover>
				<a-badge :count="appStore.appConfig.unreadMessage">
					<a-button class="nav-btn" type="outline" shape="circle">
						<template #icon>
							<icon-notification />
						</template>
					</a-button>
				</a-badge>
				<template #title>
					<div class="box-flex jc-sb">
						<span>消息提示</span>
						<a-button v-if="!!appStore.appConfig.unreadMessage" type="text" size="small">清空</a-button>
					</div>
				</template>
				<template #content>
					<div style="width: 400px">
						<a-list
							:max-height="340"
							:scrollbar="true"
							:bordered="false"
						>
							<a-list-item v-for="item of appStore.appConfig.unreadMessage">
								<a-list-item-meta title="消息" description="您有新的订单">
									<template #avatar>
										<a-avatar
											shape="square"
											:style="{ backgroundColor: '#3370ff' }"
										>
											<icon-notification />
										</a-avatar>
									</template>
								</a-list-item-meta>
							</a-list-item>
						</a-list>
					</div>
				</template>
			</a-popover> -->
			<!-- 消息 -->
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
						<a-space @click="router.push('/system/userSetting')">
							<icon-settings />
							<span> 用户设置 </span>
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
import { useRouter } from 'vue-router';
import { useFullscreen } from '@vueuse/core';
import { useAppStore, useUserStore } from '@/pinia';
import ZsMenu from '@/components/zsMenu/index.vue';

// app配置
const appStore = useAppStore();
// 用户信息
const { setUserInfo } = useUserStore();
// 路由控制
const router = useRouter();
// 全屏控制
const { isFullscreen, toggle: handleToggleFullscreen } = useFullscreen();
// 登出
const logout = () => {
	// 请空用户信息
	setUserInfo({});
	// 清除Cookie
	jsCookie.remove('userToken');
	// 跳转登录
	router.push('/login');
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
