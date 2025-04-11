<template>
	<a-config-provider :size="appStore.appConfig.size">
		<router-view />
		<zs-global-setting />
		<zs-loading v-if="userStore.userInfo.loading" />
	</a-config-provider>
</template>

<script lang="ts" setup name="App">
import { useDebounceFn, useWindowSize } from '@vueuse/core';
import { useAppStore, useUserStore } from '@/pinia';
import { useDictionaryStore } from '@/pinia';
import ZsLoading from '@/components/zsLoading/index.vue';

// 应用配置
const appStore = useAppStore();
const userStore = useUserStore();

// 初始化字典
useDictionaryStore();
// 屏幕宽度
const { width } = useWindowSize();
// 防抖
const debounceFn = useDebounceFn((value) => {
	if (value < 1500) {
		!appStore.appConfig.menuCollapse && appStore.setMenuCollapse(true);
	} else {
		appStore.appConfig.menuCollapse && appStore.setMenuCollapse(false);
	}
}, 1000);
// 监听屏幕变化
watchPostEffect(() => {
	debounceFn(width.value);
});
</script>
