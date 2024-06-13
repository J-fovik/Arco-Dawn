<template>
	<a-menu
		v-model:collapsed="appStore.appConfig.menuCollapse"
		style="height: 100%; width: 100%"
		accordion
		:mode="appStore.appConfig.topMenu ? 'horizontal' : 'vertical'"
		:auto-open="false"
		:selected-keys="selectedKey"
		:auto-open-selected="true"
		:level-indent="34"
		@collapse="appStore.setMenuCollapse"
	>
		<template v-for="item in userMenus" :key="item.name">
			<template v-if="item.children">
				<a-sub-menu :key="item.name">
					<template #icon><component :is="item.icon"></component></template>
					<template #title>{{ item.title }}</template>
					<template v-if="item.children.length">
						<a-menu-item
							v-for="child in item.children"
							:key="child.name"
							@click="router.push({ name: child.name })"
							>{{ child.title }}</a-menu-item
						>
					</template>
				</a-sub-menu>
			</template>
			<template v-else>
				<a-menu-item :key="item.name" @click="router.push({ name: item.name })">
					<template #icon><component :is="item.icon"></component></template>
					{{ item.title }}
				</a-menu-item>
			</template>
		</template>
	</a-menu>
</template>

<script setup lang="ts" name="ZsMenu">
import { useAppStore, useUserStore } from '@/pinia';
import { appMenus } from '@/router/base';
// 路由信息
const route = useRoute();
// 路由控制
const router = useRouter();
// 用户信息
const userStore = useUserStore();
// app配置
const appStore = useAppStore();
// 选中的菜单
const selectedKey = ref<string[]>([route.name as string]);
// 用户菜单
const userMenus = computed(() => {
	return appMenus;
});
// 监听路由变化
watch(route, (newRoute) => {
	if (newRoute.meta.superiorName) {
		selectedKey.value = [newRoute.meta.superiorName as string];
	} else {
		selectedKey.value = [newRoute.name as string];
	}
});
</script>

<style lang="less" scoped>
:deep(.arco-menu-inner) {
	.arco-menu-inline-header {
		display: flex;
		align-items: center;
	}
	.arco-icon {
		&:not(.arco-icon-down) {
			font-size: 18px;
		}
	}
}
</style>
