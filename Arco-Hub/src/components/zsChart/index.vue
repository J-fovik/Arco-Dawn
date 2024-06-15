<template>
	<div ref="eChartRef" style="width: 100%; height: 100%"></div>
</template>

<script lang="ts" setup name="ZsChart">
// 让echarts根据屏幕响应
import { useResizeObserver } from '@vueuse/core';
import { EChartsCoreOption } from 'echarts/core';
import * as echarts from 'echarts';
// 父组件参数
const props = withDefaults(
	defineProps<{
		chartOption: any;
	}>(),
	{
		chartOption: () => ({}),
	}
);
// ref绑定元素
const eChartRef = ref<HTMLDivElement | null>(null);
// 图表实例
let instance: any;
onMounted(() => {
	// 响应式数据
	const options = toRef(props, 'chartOption');
	// 确保获取到ref画布绑定元素
	if (eChartRef.value) {
		// 初始化
		instance = echarts.init(eChartRef.value as HTMLDivElement);
		// 配置
		instance.setOption(options.value as EChartsCoreOption);
	}
});
// 离开页面之前卸载实例
onBeforeUnmount(() => {
	if (instance) echarts.dispose(instance);
});
// 使用useResizeObserver监听容器大小变化
useResizeObserver(eChartRef, () => {
	if (instance) {
		instance.resize();
	}
});
</script>
