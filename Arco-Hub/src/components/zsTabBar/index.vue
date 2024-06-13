<template>
	<a-overflow-list class="tab-list" from="start">
		<a-tag
			size="medium"
			class="cursor-pointer"
			:color="$route.name === 'Home' ? 'blue' : ''"
			@click="$router.push({ name: 'Home' })"
			>首页</a-tag
		>
		<div v-for="item of computedTabList" :key="item.name">
			<a-dropdown
				trigger="contextMenu"
				:popup-max-height="false"
				@select="(key) => actionSelect(key, item.name)"
			>
				<a-tag
					closable
					size="medium"
					class="cursor-pointer tag-item"
					:color="item.name === $route.name ? 'blue' : ''"
					@close="closeTab(item.name)"
					@click="$router.push({ name: item.name, query: item.query })"
					>{{ item.title }}</a-tag
				>
				<template #content>
					<a-doption value="current">
						<icon-close />
						<span style="margin-left: 10px">关闭当前标签页</span>
					</a-doption>
					<a-doption value="all">
						<icon-close />
						<span style="margin-left: 10px">关闭全部标签页</span>
					</a-doption>
					<a-doption value="other">
						<icon-close />
						<span style="margin-left: 10px">关闭其他标签页</span>
					</a-doption>
				</template>
			</a-dropdown>
		</div>
	</a-overflow-list>
</template>

<script setup lang="ts" name="ZsTabBar">
import { useTabStore } from '@/pinia';
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
			router.push({
				name: tabStore.tabKeys[tabIndex - 1],
				query: tabStore.tabMap.get(tabStore.tabKeys[tabIndex - 1])?.query,
			});
		} else {
			router.push({ name: 'Home' });
		}
	}
	// 删除标签
	tabStore.deleteTab(key);
};
// 选中
const actionSelect = (key: any, name: string) => {
	// 关闭当前
	if (key === 'current') {
		closeTab(name);
	}
	// 关闭全部
	if (key === 'all') {
		// 跳转首页
		router.push({ name: 'Home' });
		// 清空多页签
		tabStore.clearTabList();
	}
	// 关闭其他
	if (key === 'other') {
		// 跳转到该路由
		router.push({ name });
		// 关闭其他路由
		tabStore.clearOtherTab(name);
	}
};
</script>

<style scoped>
.tab-list {
	height: 40px;
	background-color: var(--color-bg-2);
	border-bottom: 1px solid var(--color-border);
	padding: 0 10px;
}

.tag-item:hover {
	color: rgb(var(--blue-6));
}
</style>
