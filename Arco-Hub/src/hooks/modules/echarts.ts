import { computed } from 'vue';
import { EChartsOption } from 'echarts';
import { useAppStore } from '@/pinia';
interface optionsFn {
  (isDark: boolean): EChartsOption;
}

export const  useChartOption = (sourceOption: optionsFn) => {
    // app配置
  const appStore = useAppStore();
  // 主题色是否为暗色
  const isDark = computed(() => {
    return appStore.appConfig.theme === 'dark';
  });
  // 数据处理
  const chartOption = computed<EChartsOption>(() => {
    return sourceOption(isDark.value);
  });
  // 暴露Api
  return {
    isDark,
    chartOption,
  };
}
