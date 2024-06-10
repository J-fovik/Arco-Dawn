<template>
	<a-layout class="layout">
		<div
			v-if="appStore.appConfig.navbar"
			class="layout-navbar"
			:style="{ height: `${appStore.appConfig.navbarHeight}px` }"
		>
			<zs-nav-bar />
		</div>
		<a-layout>
			<a-layout>
				<template v-if="appStore.appConfig.menu && !appStore.appConfig.topMenu">
					<a-layout-sider
						class="layout-sider"
						breakpoint="xl"
						:collapsed="appStore.appConfig.menuCollapse"
						:collapsible="true"
						:width="appStore.appConfig.menuWidth"
						:style="{ paddingTop: appStore.appConfig.navbar ? '60px' : '' }"
						@collapse="appStore.setMenuCollapse"
					>
						<div class="menu-wrapper">
							<zs-menu />
						</div>
					</a-layout-sider>
				</template>
				<a-layout class="layout-content" :style="paddingStyle">
					<!-- <zs-tab-bar></zs-tab-bar> -->
					<a-layout-content>
						<template v-if="mode">
							<router-view v-slot="{ Component, route }">
								<component
									v-if="route.meta.ignoreCache"
									:is="Component"
									:key="route.fullPath"
								/>
								<keep-alive v-else :include="computedCacheList">
									<component :is="Component" :key="route.fullPath" />
								</keep-alive>
							</router-view>
						</template>
						<template v-else>
							<router-view v-slot="{ Component, route }">
								<transition name="fade" mode="out-in" appear>
									<component
										v-if="route.meta.ignoreCache"
										:is="Component"
										:key="route.fullPath"
									/>
									<keep-alive v-else :include="computedCacheList">
										<component :is="Component" :key="route.fullPath" />
									</keep-alive>
								</transition>
							</router-view>
						</template>
					</a-layout-content>
				</a-layout>
			</a-layout>
		</a-layout>
	</a-layout>
</template>

<script lang="ts" setup name="Layout">
import { computed } from 'vue';
import { useAppStore, useTabStore } from '@/pinia';
import ZsNavBar from '@/components/zsNavBar/index.vue';
import ZsMenu from '@/components/zsMenu/index.vue';
// import ZsTabBar from '@/components/zsTabBar/index.vue';
// 当前环境
const mode = import.meta.env.DEV;
// app配置
const appStore = useAppStore();
// 多页签列表
const tabStore = useTabStore();
// 缓存列表
const computedCacheList = computed(() => {
	return [...tabStore.tabMap.values()]
		.filter((item) => !item.ignoreCache)
		.map((item) => item.name);
});
// 菜单宽度
const menuWidth = computed(() => {
	return appStore.appConfig.menuCollapse ? 48 : appStore.appConfig.menuWidth;
});
// 计算盒子外边距
const paddingStyle = computed(() => {
	const paddingLeft =
		appStore.appConfig.menu && !appStore.appConfig.topMenu
			? { paddingLeft: `${menuWidth.value}px` }
			: {};
	const paddingTop = appStore.appConfig.navbar
		? { paddingTop: `${appStore.appConfig.navbarHeight}px` }
		: {};
	return { ...paddingLeft, ...paddingTop };
});
</script>

<style scoped lang="less">
.layout {
	width: 100%;
	height: 100%;
}
.layout-navbar {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 100;
	width: 100%;
}
.layout-sider {
	position: fixed;
	top: 0;
	left: 0;
	z-index: 99;
	height: 100%;
	transition: all 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
	&::after {
		content: '';
		position: absolute;
		top: 0;
		right: -1px;
		display: block;
		width: 1px;
		height: 100%;
		background-color: var(--color-border);
	}
	> :deep(.arco-layout-sider-children) {
		overflow-y: hidden;
	}
}
.menu-wrapper {
	height: 100%;
	overflow: auto;
	overflow-x: hidden;
	:deep(.arco-menu) {
		::-webkit-scrollbar {
			width: 12px;
			height: 4px;
		}
		::-webkit-scrollbar-thumb {
			border: 4px solid transparent;
			background-clip: padding-box;
			border-radius: 7px;
			background-color: var(--color-text-4);
		}
		::-webkit-scrollbar-thumb:hover {
			background-color: var(--color-text-3);
		}
	}
}
.layout-content {
	min-height: 100vh;
	overflow-y: hidden;
	background-color: var(--color-fill-2);
	transition: padding 0.2s cubic-bezier(0.34, 0.69, 0.1, 1);
}
</style>
