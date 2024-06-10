<template>
	<div
		class="container"
		:style="{
			height: appStore.appConfig.navbar
				? `calc(100vh - ${appStore.appConfig.navbarHeight}px - 40px)`
				: '100vh',
		}"
	>
		<a-breadcrumb class="container-breadcrumb" v-if="breadcrumb.length > 1">
			<!-- <a-breadcrumb-item>
				<component :is="route.meta.icon"></component>
			</a-breadcrumb-item> -->
			<a-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index">
				{{ item }}</a-breadcrumb-item
			>
		</a-breadcrumb>
		<div>
			<slot :title="breadcrumb ? breadcrumb.at(-1) : ''"></slot>
		</div>
	</div>
</template>

<script lang="ts" setup name="ZsContent">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useAppStore } from '@/pinia';
// 面包屑
const breadcrumb = computed(() => {
	if (route.meta.breadcrumb) {
		return route.meta.breadcrumb as Array<string>;
	}
	return [route.meta.title];
});
// app配置
const appStore = useAppStore();
// 路由信息
const route = useRoute();
</script>

<style scoped>
.container {
	padding: 10px 20px;
	overflow-y: auto;
}
.container-breadcrumb {
	margin-bottom: 10px;
}
</style>
