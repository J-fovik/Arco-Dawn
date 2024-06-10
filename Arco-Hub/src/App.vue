<template>
	<a-config-provider :size="appStore.appConfig.size">
		<router-view />
		<zs-global-setting />
	</a-config-provider>
</template>

<script lang="ts" setup name="App">
import { watchPostEffect } from 'vue';
import { useDebounceFn, useWindowSize } from '@vueuse/core';
import { useAppStore } from '@/pinia';
import ZsGlobalSetting from '@/components/zsGlobalSetting/index.vue';
// 应用配置
const appStore = useAppStore();
// 屏幕宽度
const { width } = useWindowSize();
// 防抖
const debounceFn = useDebounceFn((value) => {
	if (value < 1500) {
		!appStore.appConfig.topMenu && appStore.setTopMenu(true);
	} else {
		appStore.appConfig.topMenu && appStore.setTopMenu(false);
	}
}, 1000);
// 监听屏幕变化
watchPostEffect(() => {
	debounceFn(width.value);
});
</script>
