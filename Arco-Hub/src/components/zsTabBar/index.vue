<template>
	<a-overflow-list class="tab-list">
		<a-tag
			size="medium"
			class="cursor-pointer"
			:color="$route.name === 'Home' ? 'blue' : ''"
			@click="$router.push({ name: 'Home' })"
			>首页</a-tag
		>
		<div v-for="item of computedTabList" :key="item.name">
			<a-dropdown trigger="contextMenu" :popup-max-height="false" @select="(key) => actionSelect(key, item.name)">
				<a-tag
					closable
					size="medium"
					class="cursor-pointer"
					:color="item.name === $route.name ? 'blue' : ''"
					@close="closeTab(item.name)"
					@click="$router.push({ name: item.name })"
					>{{ item.title }}</a-tag
				>
				<template #content>
					<a-doption :value="CloseType.current">
						<icon-close />
						<span style="margin-left: 10px">关闭当前标签页</span>
					</a-doption>
					<a-doption :value="CloseType.all">
						<icon-folder-delete />
						<span style="margin-left: 10px">关闭全部标签页</span>
					</a-doption>
				</template>
			</a-dropdown>
		</div>
	</a-overflow-list>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTabStore } from '@/pinia';
import { useRouter, useRoute } from 'vue-router';

enum CloseType {
    current = 'current',
    all = 'all',
}
// 路由信息
const route = useRoute();
// 路由控制
const router = useRouter();
// 多页签列表
const tabStore = useTabStore();
// 多页签列表
const computedTabList = computed(() => {
	return [...tabStore.tabMap.values()];
});
// 关闭tab页
const closeTab = (key: string) => {
	// 判断是否是打开的页面
	if (route.name === key) {
		// 查找下标
		const tabIndex = tabStore.tabKeys.findIndex((name) => key === name);
		// 如果位置大于0 就跳转上一条数据
		if (tabIndex > 0) {
			router.push({ name: tabStore.tabKeys[tabIndex - 1] });
		} else {
			router.push({ name: 'Home' });
		}
	}
	// 删除标签
	tabStore.deleteTab(key);
};
// 选中
const actionSelect = (key: any, name: string) => {
	if (key === CloseType.current) {
		closeTab(name)
	}
	if (key === CloseType.all) {
		// 跳转首页
		router.push({ name: 'Home' });
		// 清空多页签
		tabStore.clearTabList();
	}
};
</script>

<style scoped>
.tab-list {
	height: 40px;
	background-color: white;
	border-bottom: 1px solid var(--color-border);
	padding: 0 10px;
}
</style>
