import { defineComponent, ref, computed, watch, mergeProps, unref, useSSRContext, toRef } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import * as echarts from 'echarts/core';
import { TitleComponent, TooltipComponent, GridComponent, DatasetComponent, TransformComponent, LegendComponent, PolarComponent, GeoComponent, ToolboxComponent, DataZoomComponent, GraphicComponent } from 'echarts/components';
import { BarChart, LineChart, LinesChart, PieChart, ScatterChart, RadarChart, GaugeChart } from 'echarts/charts';
import { LabelLayout, UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useDebounceFn, useResizeObserver } from '@vueuse/core';

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  LegendComponent,
  PolarComponent,
  GeoComponent,
  ToolboxComponent,
  DataZoomComponent,
  BarChart,
  LineChart,
  LinesChart,
  PieChart,
  ScatterChart,
  RadarChart,
  GaugeChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer,
  GraphicComponent
]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    options: {},
    renderer: { default: "canvas" },
    theme: { default: "light" },
    width: {},
    height: {},
    onClick: {},
    onMove: {}
  },
  setup(__props, { expose: __expose }) {
    const props = __props;
    const eChartRef = ref(null);
    let instance;
    const echartsStyle = computed(() => {
      const width = props.width || "100%";
      const height = props.height || "100%";
      return { height, width };
    });
    const handleClick = (event) => props.onClick && props.onClick(event);
    const handleMousemove = (event) => props.onMove && props.onMove(event);
    const debounceFn = useDebounceFn(() => {
      instance.resize({
        animation: {
          duration: 500
        }
      });
    }, 500);
    const init = () => {
      const options = toRef(props, "options");
      if (eChartRef.value) {
        instance = echarts.init(eChartRef.value, props.theme, {
          // 指定渲染器类型，默认是 'canvas'
          renderer: props.renderer
        });
        instance.setOption(options.value, { notMerge: true });
        instance.on("click", handleClick);
        instance.on("mousemove", handleMousemove);
      }
    };
    watch(
      props,
      () => {
        if (instance)
          echarts.dispose(instance);
        init();
      },
      { immediate: true }
    );
    useResizeObserver(eChartRef, () => {
      if (instance) {
        debounceFn();
      }
    });
    __expose({
      getInstance: () => instance,
      debounceFn,
      init
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "eChartRef",
        ref: eChartRef,
        style: unref(echartsStyle)
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsECharts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-9a6e8b24.mjs.map
