<template>
	<div ref="chartDom" style="width: 100%; height: 310px"></div>
</template>

<script lang="ts" setup name="ZsChart">
import { useDebounceFn } from '@vueuse/core';
import { sleep } from '@/utils';
import { useAppStore } from '@/pinia';
import * as echarts from 'echarts';
// app配置
const appStore = useAppStore();
// 父组件参数
const props = withDefaults(
	defineProps<{
		chartOption: any;
	}>(),
	{
		chartOption: () => ({}),
	},
);
// 画布绑定元素
const chartDom = shallowRef<HTMLDivElement | null>(null);
// 图表实例
const myChart = shallowRef<echarts.ECharts | null>(null);
// 节流
const debounceFn = useDebounceFn(() => {
	myChart.value?.resize({
		animation: {
			duration: 500,
		},
	});
}, 500);
// 监听
watch(
	() => props.chartOption,
	() => {
		if (myChart.value) {
			myChart.value.setOption(props.chartOption);
		}
	},
);
// 监听元素挂载状态
watch(chartDom, async (newValue) => {
	if (newValue) {
		await sleep(500);
		myChart.value = echarts.init(chartDom.value as HTMLDivElement);
		myChart.value.setOption(props.chartOption);
	}
});
// 监听菜单变化
watch(
	() => [
		appStore.appConfig.menu,
		appStore.appConfig.menuCollapse,
		appStore.appConfig.topMenu,
		appStore.appConfig.menuWidth,
	],
	debounceFn,
);
</script>
