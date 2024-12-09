import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { L as List, a as ListItem, b as ListItemMeta } from './index-7a08c899.mjs';
import { S as Space } from './index-8bcd588e.mjs';
import { T as Tabs, a as TabPane } from './index-3697759d.mjs';
import { _ as _sfc_main$a } from './index-cb5bd3b8.mjs';
import { G as Grid, a as GridItem } from './index-4ecc34e0.mjs';
import { s as setGlobalConfig, a as getComponentPrefix, _ as _export_sfc$1, g as getPrefixCls, u as useFormItem, j as isArray, b as isUndefined, o as on, k as off } from './use-teleport-container-1599a5a4.mjs';
import { useSSRContext, defineComponent, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, ref, computed, unref, createTextVNode, withAsyncContext, mergeProps, toRefs, toRef, watch, resolveComponent, createElementBlock, normalizeClass, createElementVNode, normalizeStyle, withModifiers } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderList, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { d as useWebsiteInformation, u as useHead, g as useRoute, a as useRouter, e as useAsyncData, A as API_URLS, _ as __nuxt_component_1, f as useNuxtApp } from '../server.mjs';
import NP from 'number-precision';
import { T as Tooltip } from './index-5f48af9c.mjs';
import { I as InputNumber } from './index-08fdf206.mjs';
import { _ as _sfc_main$b } from './index-9a6e8b24.mjs';
import { a as turnThousandth, t as textFormat } from './index-a008b2db.mjs';
import { S as Select } from './index-90aba227.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-99c863e4.mjs';
import { _ as _sfc_main$c } from './index-33e76c07.mjs';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { a as NO_LIMIT_NULL_OPTIONS, f as findOptions } from './options-7ec13930.mjs';
import { I as IconArrowRise, a as IconArrowFall } from './index-aa9a0d9b.mjs';
import { _ as _sfc_main$d } from './index-d6ea50b9.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './index-11d38f35.mjs';
import './index-f6f6f2a5.mjs';
import './index-dd449d78.mjs';
import 'resize-observer-polyfill';
import './use-children-components-d7e0e48f.mjs';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@iconify/vue';
import 'echarts/core';
import 'echarts/components';
import 'echarts/charts';
import 'echarts/features';
import 'echarts/renderers';
import '@vueuse/core';
import './NuxtImg-9bcbe2bb.mjs';

const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  name: "SliderButton",
  components: {
    Tooltip
  },
  inheritAttrs: false,
  props: {
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    formatTooltip: {
      type: Function
    },
    value: [String, Number],
    tooltipPosition: {
      type: String
    },
    showTooltip: {
      type: Boolean,
      default: true
    }
  },
  emits: ["movestart", "moving", "moveend"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("slider-btn");
    const isDragging = ref(false);
    const handleMouseDown = (e) => {
      if (props.disabled) {
        return;
      }
      e.preventDefault();
      isDragging.value = true;
      on(window, "mousemove", handleMouseMove);
      on(window, "mouseup", handleMouseUp);
      on(window, "contextmenu", handleMouseUp);
      emit("movestart");
    };
    const handleMouseMove = (e) => {
      emit("moving", e.clientX, e.clientY);
    };
    const handleMouseUp = () => {
      isDragging.value = false;
      off(window, "mousemove", handleMouseMove);
      off(window, "mouseup", handleMouseUp);
      emit("moveend");
    };
    const cls = computed(() => [prefixCls]);
    const mergedTooltipPosition = computed(() => {
      var _a;
      return ((_a = props.tooltipPosition) != null ? _a : props.direction === "vertical") ? "right" : "top";
    });
    const tooltipContent = computed(() => {
      var _a, _b;
      return (_b = (_a = props.formatTooltip) == null ? void 0 : _a.call(props, props.value)) != null ? _b : `${props.value}`;
    });
    const popupVisible = computed(() => props.showTooltip ? isDragging.value ? true : void 0 : false);
    return {
      prefixCls,
      cls,
      tooltipContent,
      mergedTooltipPosition,
      popupVisible,
      handleMouseDown
    };
  }
});
const _hoisted_1 = ["aria-disabled", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_tooltip = resolveComponent("tooltip");
  return openBlock(), createBlock(_component_tooltip, {
    "popup-visible": _ctx.popupVisible,
    position: _ctx.mergedTooltipPosition,
    content: _ctx.tooltipContent
  }, {
    default: withCtx(() => [
      createElementVNode("div", mergeProps(_ctx.$attrs, {
        tabindex: "0",
        role: "slider",
        "aria-disabled": _ctx.disabled,
        "aria-valuemax": _ctx.max,
        "aria-valuemin": _ctx.min,
        "aria-valuenow": _ctx.value,
        "aria-valuetext": _ctx.tooltipContent,
        class: _ctx.cls,
        onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.handleMouseDown && _ctx.handleMouseDown(...args)),
        onClick: _cache[1] || (_cache[1] = withModifiers(() => {
        }, ["stop"]))
      }), null, 16, _hoisted_1)
    ]),
    _: 1
  }, 8, ["popup-visible", "position", "content"]);
}
var SliderButton = /* @__PURE__ */ _export_sfc$1(_sfc_main$9, [["render", _sfc_render$5]]);
const getOffsetPercent = (value, [min, max]) => {
  const percent = Math.max((value - min) / (max - min), 0);
  return `${NP.round(percent * 100, 2)}%`;
};
const getPositionStyle = (offset, direction) => {
  return direction === "vertical" ? { bottom: offset } : { left: offset };
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "SliderDots",
  props: {
    data: {
      type: Array,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("slider");
    const getStyle = (value) => getPositionStyle(getOffsetPercent(value, [props.min, props.max]), props.direction);
    return {
      prefixCls,
      getStyle
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`${_ctx.prefixCls}-dots`)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item, index) => {
      return openBlock(), createElementBlock("div", {
        key: index,
        class: normalizeClass(`${_ctx.prefixCls}-dot-wrapper`),
        style: normalizeStyle(_ctx.getStyle(item.key))
      }, [
        createElementVNode("div", {
          class: normalizeClass([
            `${_ctx.prefixCls}-dot`,
            { [`${_ctx.prefixCls}-dot-active`]: item.isActive }
          ])
        }, null, 2)
      ], 6);
    }), 128))
  ], 2);
}
var SliderDots = /* @__PURE__ */ _export_sfc$1(_sfc_main$8, [["render", _sfc_render$4]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  name: "SliderMarks",
  props: {
    data: {
      type: Array,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("slider");
    const getStyle = (value) => getPositionStyle(getOffsetPercent(value, [props.min, props.max]), props.direction);
    return {
      prefixCls,
      getStyle
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`${_ctx.prefixCls}-marks`)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.data, (item, index) => {
      return openBlock(), createElementBlock("div", {
        key: index,
        "aria-hidden": "true",
        class: normalizeClass(`${_ctx.prefixCls}-mark`),
        style: normalizeStyle(_ctx.getStyle(item.key))
      }, toDisplayString(item.content), 7);
    }), 128))
  ], 2);
}
var SliderMarks = /* @__PURE__ */ _export_sfc$1(_sfc_main$7, [["render", _sfc_render$3]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "SliderTicks",
  props: {
    value: {
      type: Array,
      required: true
    },
    step: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: true
    },
    max: {
      type: Number,
      required: true
    },
    direction: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("slider");
    const steps = computed(() => {
      const steps2 = [];
      const stepsLength = Math.floor((props.max - props.min) / props.step);
      for (let i = 0; i <= stepsLength; i++) {
        const stepVal = NP.plus(i * props.step, props.min);
        if (stepVal <= props.min || stepVal >= props.max)
          continue;
        steps2.push({
          key: stepVal,
          isActive: stepVal >= props.value[0] && stepVal <= props.value[1]
        });
      }
      return steps2;
    });
    const getStyle = (value) => getPositionStyle(getOffsetPercent(value, [props.min, props.max]), props.direction);
    return {
      prefixCls,
      steps,
      getStyle
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`${_ctx.prefixCls}-ticks`)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.steps, (item, index) => {
      return openBlock(), createElementBlock("div", {
        key: index,
        class: normalizeClass([
          `${_ctx.prefixCls}-tick`,
          { [`${_ctx.prefixCls}-tick-active`]: item.isActive }
        ]),
        style: normalizeStyle(_ctx.getStyle(item.key))
      }, null, 6);
    }), 128))
  ], 2);
}
var SliderTicks = /* @__PURE__ */ _export_sfc$1(_sfc_main$6, [["render", _sfc_render$2]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "SliderInput",
  components: {
    InputNumber
  },
  props: {
    modelValue: {
      type: Array,
      required: true
    },
    min: {
      type: Number
    },
    max: {
      type: Number
    },
    step: {
      type: Number
    },
    disabled: {
      type: Boolean
    },
    range: {
      type: Boolean
    }
  },
  emits: ["startChange", "endChange"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("slider");
    return {
      prefixCls
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_number = resolveComponent("input-number");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`${_ctx.prefixCls}-input`)
  }, [
    _ctx.range ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      createVNode(_component_input_number, {
        min: _ctx.min,
        max: _ctx.max,
        step: _ctx.step,
        disabled: _ctx.disabled,
        "model-value": _ctx.modelValue[0],
        "hide-button": "",
        onChange: _cache[0] || (_cache[0] = (value) => _ctx.$emit("startChange", value))
      }, null, 8, ["min", "max", "step", "disabled", "model-value"]),
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-input-hyphens`)
      }, null, 2)
    ], 64)) : createCommentVNode("v-if", true),
    createVNode(_component_input_number, {
      min: _ctx.min,
      max: _ctx.max,
      step: _ctx.step,
      disabled: _ctx.disabled,
      "model-value": _ctx.modelValue[1],
      "hide-button": "",
      onChange: _cache[1] || (_cache[1] = (value) => _ctx.$emit("endChange", value))
    }, null, 8, ["min", "max", "step", "disabled", "model-value"])
  ], 2);
}
var SliderInput = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$1]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "Slider",
  components: {
    SliderButton,
    SliderDots,
    SliderMarks,
    SliderTicks,
    SliderInput
  },
  props: {
    modelValue: {
      type: [Number, Array],
      default: void 0
    },
    defaultValue: {
      type: [Number, Array],
      default: 0
    },
    step: {
      type: Number,
      default: 1
    },
    min: {
      type: Number,
      default: 0
    },
    marks: {
      type: Object
    },
    max: {
      type: Number,
      default: 100
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    showTicks: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    range: {
      type: Boolean,
      default: false
    },
    formatTooltip: {
      type: Function
    },
    showTooltip: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value) => true
  },
  setup(props, { emit }) {
    const { modelValue } = toRefs(props);
    const prefixCls = getPrefixCls("slider");
    const { mergedDisabled, eventHandlers } = useFormItem({
      disabled: toRef(props, "disabled")
    });
    const trackRef = ref(null);
    const trackRect = ref();
    const defaultValue = props.modelValue ? props.modelValue : props.defaultValue;
    const startValue = ref(isArray(defaultValue) ? defaultValue[0] : 0);
    const endValue = ref(isArray(defaultValue) ? defaultValue[1] : defaultValue);
    watch(modelValue, (value) => {
      var _a, _b, _c, _d, _e;
      if (isArray(value)) {
        startValue.value = (_b = (_a = value[0]) != null ? _a : props.min) != null ? _b : 0;
        endValue.value = (_d = (_c = value[1]) != null ? _c : props.min) != null ? _d : 0;
      } else {
        endValue.value = (_e = value != null ? value : props.min) != null ? _e : 0;
      }
    });
    const handleChange = () => {
      var _a, _b;
      if (props.range) {
        emit("update:modelValue", [startValue.value, endValue.value]);
        emit("change", [startValue.value, endValue.value]);
      } else {
        emit("update:modelValue", endValue.value);
        emit("change", endValue.value);
      }
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a);
    };
    const handleStartChange = (value) => {
      value = value != null ? value : props.min;
      startValue.value = value;
      handleChange();
    };
    const handleEndChange = (value) => {
      value = value != null ? value : props.min;
      endValue.value = value;
      handleChange();
    };
    const computedValue = computed(() => {
      var _a, _b, _c;
      if (props.range) {
        if (isArray(props.modelValue)) {
          return props.modelValue;
        }
        return [startValue.value, (_a = props.modelValue) != null ? _a : endValue.value];
      }
      if (isUndefined(props.modelValue)) {
        return [startValue.value, endValue.value];
      }
      if (isArray(props.modelValue)) {
        return [(_b = props.min) != null ? _b : 0, props.modelValue[1]];
      }
      return [(_c = props.min) != null ? _c : 0, props.modelValue];
    });
    const markList = computed(() => Object.keys(props.marks || {}).map((index) => {
      var _a;
      const key = Number(index);
      return {
        key,
        content: (_a = props.marks) == null ? void 0 : _a[key],
        isActive: key >= computedValue.value[0] && key <= computedValue.value[1]
      };
    }));
    const getBtnStyle = (value) => getPositionStyle(getOffsetPercent(value, [props.min, props.max]), props.direction);
    const isDragging = ref(false);
    const handleMoveStart = () => {
      isDragging.value = true;
      if (trackRef.value) {
        trackRect.value = trackRef.value.getBoundingClientRect();
      }
    };
    function getValueByCoords(x, y) {
      if (!trackRect.value) {
        return 0;
      }
      const { left, top, width, height } = trackRect.value;
      const trackLength = props.direction === "horizontal" ? width : height;
      const stepLength = trackLength * props.step / (props.max - props.min);
      let diff = props.direction === "horizontal" ? x - left : top + height - y;
      if (diff < 0)
        diff = 0;
      if (diff > trackLength)
        diff = trackLength;
      const steps = Math.round(diff / stepLength);
      return NP.plus(props.min, NP.times(steps, props.step));
    }
    const handleEndMoving = (x, y) => {
      endValue.value = getValueByCoords(x, y);
      handleChange();
    };
    const handleClick = (e) => {
      if (mergedDisabled.value) {
        return;
      }
      const { clientX, clientY } = e;
      if (trackRef.value) {
        trackRect.value = trackRef.value.getBoundingClientRect();
      }
      endValue.value = getValueByCoords(clientX, clientY);
      handleChange();
    };
    function getBarStyle([start, end]) {
      if (start > end) {
        [start, end] = [end, start];
      }
      return props.direction === "vertical" ? {
        bottom: getOffsetPercent(start, [props.min, props.max]),
        top: getOffsetPercent(props.max + props.min - end, [
          props.min,
          props.max
        ])
      } : {
        left: getOffsetPercent(start, [props.min, props.max]),
        right: getOffsetPercent(props.max + props.min - end, [
          props.min,
          props.max
        ])
      };
    }
    const handleStartMoving = (x, y) => {
      startValue.value = getValueByCoords(x, y);
      handleChange();
    };
    const handleMoveEnd = () => {
      isDragging.value = false;
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-vertical`]: props.direction === "vertical",
        [`${prefixCls}-with-marks`]: Boolean(props.marks)
      }
    ]);
    const trackCls = computed(() => [
      `${prefixCls}-track`,
      {
        [`${prefixCls}-track-disabled`]: mergedDisabled.value,
        [`${prefixCls}-track-vertical`]: props.direction === "vertical"
      }
    ]);
    return {
      prefixCls,
      cls,
      trackCls,
      trackRef,
      computedValue,
      mergedDisabled,
      markList,
      getBtnStyle,
      getBarStyle,
      handleClick,
      handleMoveStart,
      handleEndMoving,
      handleMoveEnd,
      handleStartMoving,
      handleStartChange,
      handleEndChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_slider_ticks = resolveComponent("slider-ticks");
  const _component_slider_dots = resolveComponent("slider-dots");
  const _component_slider_marks = resolveComponent("slider-marks");
  const _component_slider_button = resolveComponent("slider-button");
  const _component_slider_input = resolveComponent("slider-input");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    createElementVNode("div", {
      ref: "trackRef",
      class: normalizeClass(_ctx.trackCls),
      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
    }, [
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-bar`),
        style: normalizeStyle(_ctx.getBarStyle(_ctx.computedValue))
      }, null, 6),
      _ctx.showTicks ? (openBlock(), createBlock(_component_slider_ticks, {
        key: 0,
        value: _ctx.computedValue,
        step: _ctx.step,
        min: _ctx.min,
        max: _ctx.max,
        direction: _ctx.direction
      }, null, 8, ["value", "step", "min", "max", "direction"])) : createCommentVNode("v-if", true),
      _ctx.marks ? (openBlock(), createBlock(_component_slider_dots, {
        key: 1,
        data: _ctx.markList,
        min: _ctx.min,
        max: _ctx.max,
        direction: _ctx.direction
      }, null, 8, ["data", "min", "max", "direction"])) : createCommentVNode("v-if", true),
      _ctx.marks ? (openBlock(), createBlock(_component_slider_marks, {
        key: 2,
        data: _ctx.markList,
        min: _ctx.min,
        max: _ctx.max,
        direction: _ctx.direction
      }, null, 8, ["data", "min", "max", "direction"])) : createCommentVNode("v-if", true),
      _ctx.range ? (openBlock(), createBlock(_component_slider_button, {
        key: 3,
        style: normalizeStyle(_ctx.getBtnStyle(_ctx.computedValue[0])),
        value: _ctx.computedValue[0],
        direction: _ctx.direction,
        disabled: _ctx.mergedDisabled,
        min: _ctx.min,
        max: _ctx.max,
        "format-tooltip": _ctx.formatTooltip,
        "show-tooltip": _ctx.showTooltip,
        onMovestart: _ctx.handleMoveStart,
        onMoving: _ctx.handleStartMoving,
        onMoveend: _ctx.handleMoveEnd
      }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])) : createCommentVNode("v-if", true),
      createVNode(_component_slider_button, {
        style: normalizeStyle(_ctx.getBtnStyle(_ctx.computedValue[1])),
        value: _ctx.computedValue[1],
        direction: _ctx.direction,
        disabled: _ctx.mergedDisabled,
        min: _ctx.min,
        max: _ctx.max,
        "format-tooltip": _ctx.formatTooltip,
        "show-tooltip": _ctx.showTooltip,
        onMovestart: _ctx.handleMoveStart,
        onMoving: _ctx.handleEndMoving,
        onMoveend: _ctx.handleMoveEnd
      }, null, 8, ["style", "value", "direction", "disabled", "min", "max", "format-tooltip", "show-tooltip", "onMovestart", "onMoving", "onMoveend"])
    ], 2),
    _ctx.showInput ? (openBlock(), createBlock(_component_slider_input, {
      key: 0,
      "model-value": _ctx.computedValue,
      min: _ctx.min,
      max: _ctx.max,
      step: _ctx.step,
      range: _ctx.range,
      disabled: _ctx.disabled,
      onStartChange: _ctx.handleStartChange,
      onEndChange: _ctx.handleEndChange
    }, null, 8, ["model-value", "min", "max", "step", "range", "disabled", "onStartChange", "onEndChange"])) : createCommentVNode("v-if", true)
  ], 2);
}
var _Slider = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render]]);
const Slider = Object.assign(_Slider, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Slider.name, _Slider);
  }
});
const _imports_0 = "" + publicAssetsURL("images/boy.png");
const _imports_1 = "" + publicAssetsURL("images/girl.png");
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => ({}) }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_title = _sfc_main$a;
      const _component_a_grid = Grid;
      const _component_a_grid_item = GridItem;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5515a3bb>`);
      if (_ctx.data.xj) {
        _push(`<div data-v-5515a3bb>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u4E13\u4E1A\u7B80\u4ECB",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] leading-[20px] indent-[2rem]" data-v-5515a3bb>${_ctx.data.xj}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.girlRate || _ctx.data.girlRate || _ctx.data.wenRate || _ctx.data.liRate) {
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 2,
          colGap: 100,
          class: "bg-[#FCFCFC] p-[20px] mt-[20px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.data.girlRate || _ctx.data.girlRate) {
                _push2(ssrRenderComponent(_component_a_grid_item, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="font-bold" data-v-5515a3bb${_scopeId2}>\u7537\u5973\u6BD4\u4F8B</div><div class="flex items-center justify-between mt-[40px]" data-v-5515a3bb${_scopeId2}><div class="flex items-center" data-v-5515a3bb${_scopeId2}><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "36px", "height": "36px" })}" alt="" data-v-5515a3bb${_scopeId2}><span class="text-[#5AB9FF] font-bold text-[18px] ml-[10px]" data-v-5515a3bb${_scopeId2}>${ssrInterpolate(_ctx.data.boyRate + "%")}</span></div><div class="flex items-center" data-v-5515a3bb${_scopeId2}><span class="text-[#FFA864] font-bold text-[18px] mr-[10px]" data-v-5515a3bb${_scopeId2}>${ssrInterpolate(_ctx.data.girlRate + "%")}</span><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "36px", "height": "36px" })}" alt="" data-v-5515a3bb${_scopeId2}></div></div><div class="flex items-center justify-between mt-[24px]" data-v-5515a3bb${_scopeId2}><div class="w-[40px]" data-v-5515a3bb${_scopeId2}>\u7537\u751F</div><div class="w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]" data-v-5515a3bb${_scopeId2}><div class="bg-[#5AB9FF] rounded-[10px_0px_20px_10px]" style="${ssrRenderStyle({ width: _ctx.data.boyRate + "%" })}" data-v-5515a3bb${_scopeId2}></div><div class="bg-[#FFA864] rounded-[20px_10px_10px_0px]" style="${ssrRenderStyle({ width: _ctx.data.girlRate + "%" })}" data-v-5515a3bb${_scopeId2}></div></div><div class="w-[40px]" data-v-5515a3bb${_scopeId2}>\u5973\u751F</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "font-bold" }, "\u7537\u5973\u6BD4\u4F8B"),
                        createVNode("div", { class: "flex items-center justify-between mt-[40px]" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("img", {
                              src: _imports_0,
                              style: { "width": "36px", "height": "36px" },
                              alt: ""
                            }),
                            createVNode("span", { class: "text-[#5AB9FF] font-bold text-[18px] ml-[10px]" }, toDisplayString(_ctx.data.boyRate + "%"), 1)
                          ]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", { class: "text-[#FFA864] font-bold text-[18px] mr-[10px]" }, toDisplayString(_ctx.data.girlRate + "%"), 1),
                            createVNode("img", {
                              src: _imports_1,
                              style: { "width": "36px", "height": "36px" },
                              alt: ""
                            })
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between mt-[24px]" }, [
                          createVNode("div", { class: "w-[40px]" }, "\u7537\u751F"),
                          createVNode("div", { class: "w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]" }, [
                            createVNode("div", {
                              class: "bg-[#5AB9FF] rounded-[10px_0px_20px_10px]",
                              style: { width: _ctx.data.boyRate + "%" }
                            }, null, 4),
                            createVNode("div", {
                              class: "bg-[#FFA864] rounded-[20px_10px_10px_0px]",
                              style: { width: _ctx.data.girlRate + "%" }
                            }, null, 4)
                          ]),
                          createVNode("div", { class: "w-[40px]" }, "\u5973\u751F")
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.data.wenRate || _ctx.data.liRate) {
                _push2(ssrRenderComponent(_component_a_grid_item, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="font-bold" data-v-5515a3bb${_scopeId2}>\u6587\u7406\u6BD4\u4F8B</div><div class="flex items-center justify-between mt-[40px]" data-v-5515a3bb${_scopeId2}><div class="flex items-center" data-v-5515a3bb${_scopeId2}><div class="w-[34px] h-[34px] flex items-center justify-center bg-[#5AB9FF] text-[20px] text-white font-bold rounded-[50%]" data-v-5515a3bb${_scopeId2}> \u6587 </div><span class="text-[#5AB9FF] font-bold text-[18px] ml-[10px]" data-v-5515a3bb${_scopeId2}>${ssrInterpolate(_ctx.data.wenRate + "%")}</span></div><div class="flex items-center" data-v-5515a3bb${_scopeId2}><span class="text-[#7C92FF] font-bold text-[18px] mr-[10px]" data-v-5515a3bb${_scopeId2}>${ssrInterpolate(_ctx.data.liRate + "%")}</span><div class="w-[34px] h-[34px] flex items-center justify-center bg-[#7C92FF] text-[20px] text-white font-bold rounded-[50%]" data-v-5515a3bb${_scopeId2}> \u7406 </div></div></div><div class="flex items-center justify-between mt-[24px]" data-v-5515a3bb${_scopeId2}><div class="w-[40px]" data-v-5515a3bb${_scopeId2}>\u6587\u79D1</div><div class="w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]" data-v-5515a3bb${_scopeId2}><div class="bg-[#5AB9FF] rounded-[10px_0px_20px_10px]" style="${ssrRenderStyle({ width: _ctx.data.wenRate + "%" })}" data-v-5515a3bb${_scopeId2}></div><div class="bg-[#7C92FF] rounded-[20px_10px_10px_0px]" style="${ssrRenderStyle({ width: _ctx.data.liRate + "%" })}" data-v-5515a3bb${_scopeId2}></div></div><div class="w-[40px]" data-v-5515a3bb${_scopeId2}>\u7406\u79D1</div></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "font-bold" }, "\u6587\u7406\u6BD4\u4F8B"),
                        createVNode("div", { class: "flex items-center justify-between mt-[40px]" }, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("div", { class: "w-[34px] h-[34px] flex items-center justify-center bg-[#5AB9FF] text-[20px] text-white font-bold rounded-[50%]" }, " \u6587 "),
                            createVNode("span", { class: "text-[#5AB9FF] font-bold text-[18px] ml-[10px]" }, toDisplayString(_ctx.data.wenRate + "%"), 1)
                          ]),
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("span", { class: "text-[#7C92FF] font-bold text-[18px] mr-[10px]" }, toDisplayString(_ctx.data.liRate + "%"), 1),
                            createVNode("div", { class: "w-[34px] h-[34px] flex items-center justify-center bg-[#7C92FF] text-[20px] text-white font-bold rounded-[50%]" }, " \u7406 ")
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-between mt-[24px]" }, [
                          createVNode("div", { class: "w-[40px]" }, "\u6587\u79D1"),
                          createVNode("div", { class: "w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]" }, [
                            createVNode("div", {
                              class: "bg-[#5AB9FF] rounded-[10px_0px_20px_10px]",
                              style: { width: _ctx.data.wenRate + "%" }
                            }, null, 4),
                            createVNode("div", {
                              class: "bg-[#7C92FF] rounded-[20px_10px_10px_0px]",
                              style: { width: _ctx.data.liRate + "%" }
                            }, null, 4)
                          ]),
                          createVNode("div", { class: "w-[40px]" }, "\u7406\u79D1")
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.data.girlRate || _ctx.data.girlRate ? (openBlock(), createBlock(_component_a_grid_item, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "font-bold" }, "\u7537\u5973\u6BD4\u4F8B"),
                    createVNode("div", { class: "flex items-center justify-between mt-[40px]" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("img", {
                          src: _imports_0,
                          style: { "width": "36px", "height": "36px" },
                          alt: ""
                        }),
                        createVNode("span", { class: "text-[#5AB9FF] font-bold text-[18px] ml-[10px]" }, toDisplayString(_ctx.data.boyRate + "%"), 1)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("span", { class: "text-[#FFA864] font-bold text-[18px] mr-[10px]" }, toDisplayString(_ctx.data.girlRate + "%"), 1),
                        createVNode("img", {
                          src: _imports_1,
                          style: { "width": "36px", "height": "36px" },
                          alt: ""
                        })
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-between mt-[24px]" }, [
                      createVNode("div", { class: "w-[40px]" }, "\u7537\u751F"),
                      createVNode("div", { class: "w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]" }, [
                        createVNode("div", {
                          class: "bg-[#5AB9FF] rounded-[10px_0px_20px_10px]",
                          style: { width: _ctx.data.boyRate + "%" }
                        }, null, 4),
                        createVNode("div", {
                          class: "bg-[#FFA864] rounded-[20px_10px_10px_0px]",
                          style: { width: _ctx.data.girlRate + "%" }
                        }, null, 4)
                      ]),
                      createVNode("div", { class: "w-[40px]" }, "\u5973\u751F")
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.wenRate || _ctx.data.liRate ? (openBlock(), createBlock(_component_a_grid_item, { key: 1 }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "font-bold" }, "\u6587\u7406\u6BD4\u4F8B"),
                    createVNode("div", { class: "flex items-center justify-between mt-[40px]" }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-[34px] h-[34px] flex items-center justify-center bg-[#5AB9FF] text-[20px] text-white font-bold rounded-[50%]" }, " \u6587 "),
                        createVNode("span", { class: "text-[#5AB9FF] font-bold text-[18px] ml-[10px]" }, toDisplayString(_ctx.data.wenRate + "%"), 1)
                      ]),
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("span", { class: "text-[#7C92FF] font-bold text-[18px] mr-[10px]" }, toDisplayString(_ctx.data.liRate + "%"), 1),
                        createVNode("div", { class: "w-[34px] h-[34px] flex items-center justify-center bg-[#7C92FF] text-[20px] text-white font-bold rounded-[50%]" }, " \u7406 ")
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-between mt-[24px]" }, [
                      createVNode("div", { class: "w-[40px]" }, "\u6587\u79D1"),
                      createVNode("div", { class: "w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]" }, [
                        createVNode("div", {
                          class: "bg-[#5AB9FF] rounded-[10px_0px_20px_10px]",
                          style: { width: _ctx.data.wenRate + "%" }
                        }, null, 4),
                        createVNode("div", {
                          class: "bg-[#7C92FF] rounded-[20px_10px_10px_0px]",
                          style: { width: _ctx.data.liRate + "%" }
                        }, null, 4)
                      ]),
                      createVNode("div", { class: "w-[40px]" }, "\u7406\u79D1")
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isProfession) {
        _push(`<div class="mt-[20px]" data-v-5515a3bb>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u53EF\u4ECE\u4E8B\u804C\u4E1A",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]" data-v-5515a3bb><div class="text-[#999] mb-[10px]" data-v-5515a3bb> \u804C\u4E1A\u6765\u6E90\uFF1A\u4EBA\u793E\u90E8\u6700\u65B0\u7248\uFF082015\u5E74\u7248\uFF09\u804C\u4E1A\u5206\u7C7B\u5927\u5178 </div>`);
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 4,
          colGap: 12,
          rowGap: 16
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.data.professionList, (item, index) => {
                _push2(ssrRenderComponent(_component_a_grid_item, {
                  key: index,
                  class: "bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="truncate w-[80%]" data-v-5515a3bb${_scopeId2}>${ssrInterpolate(item.profession)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "truncate w-[80%]" }, toDisplayString(item.profession), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.professionList, (item, index) => {
                  return openBlock(), createBlock(_component_a_grid_item, {
                    key: index,
                    class: "bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "truncate w-[80%]" }, toDisplayString(item.profession), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isEmployment) {
        _push(`<div class="mt-[20px]" data-v-5515a3bb>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u4ECE\u4E1A\u65B9\u5411",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]" data-v-5515a3bb>`);
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 4,
          colGap: 12,
          rowGap: 16
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.data.employmentList, (item, index) => {
                _push2(ssrRenderComponent(_component_a_grid_item, {
                  key: index,
                  class: "bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="truncate w-[80%]" data-v-5515a3bb${_scopeId2}>${ssrInterpolate(item.employment)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "truncate w-[80%]" }, toDisplayString(item.employment), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.employmentList, (item, index) => {
                  return openBlock(), createBlock(_component_a_grid_item, {
                    key: index,
                    class: "bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "truncate w-[80%]" }, toDisplayString(item.employment), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isGraduateInterest) {
        _push(`<div class="mt-[20px]" data-v-5515a3bb>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u8003\u7814\u65B9\u5411",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]" data-v-5515a3bb>`);
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 4,
          colGap: 12,
          rowGap: 16
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.data.graduateInterestList, (item, index) => {
                _push2(ssrRenderComponent(_component_a_grid_item, {
                  key: index,
                  class: "bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="truncate w-[80%]" data-v-5515a3bb${_scopeId2}>${ssrInterpolate(item.interest)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "truncate w-[80%]" }, toDisplayString(item.interest), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.graduateInterestList, (item, index) => {
                  return openBlock(), createBlock(_component_a_grid_item, {
                    key: index,
                    class: "bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "truncate w-[80%]" }, toDisplayString(item.interest), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isCourseList) {
        _push(`<div class="mt-[20px]" data-v-5515a3bb>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u5F00\u8BBE\u8BFE\u7A0B",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]" data-v-5515a3bb>`);
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 4,
          colGap: 12,
          rowGap: 16
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.data.courseList, (item, index) => {
                _push2(ssrRenderComponent(_component_a_grid_item, {
                  key: index,
                  class: "bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="truncate w-[80%]" data-v-5515a3bb${_scopeId2}>${ssrInterpolate(item.course)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "truncate w-[80%]" }, toDisplayString(item.course), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.courseList, (item, index) => {
                  return openBlock(), createBlock(_component_a_grid_item, {
                    key: index,
                    class: "bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "truncate w-[80%]" }, toDisplayString(item.course), 1)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsMajorRecap/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-5515a3bb"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => ({}) }
  },
  setup(__props) {
    const props = __props;
    const gwInfo = ref({});
    const salaryChartOption = computed(() => {
      return {
        tooltip: {
          trigger: "axis",
          formatter: (params) => {
            let tooltipText = params[0].axisValueLabel + "<br/>";
            params.forEach((param) => {
              const maxValueLength = 20;
              const valueStr = `\uFFE5${turnThousandth(param.value)}`;
              const paddedValueStr = valueStr.padEnd(maxValueLength, " ");
              tooltipText += `<span style="display:inline-block;width:80px;text-align:left;">${param.marker}${param.seriesName}:</span> <span style="display:inline-block;width:80px;text-align:right;">${paddedValueStr}</span><br/>`;
            });
            return tooltipText;
          }
        },
        legend: {
          data: ["\u672C\u4E13\u4E1A", "\u6240\u6709\u4E13\u4E1A"]
        },
        grid: {
          left: "6%",
          right: "6%",
          top: "12%",
          bottom: "22%"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["\u5E94\u5C4A\u751F", "2\u5E74\u7ECF\u9A8C", "5\u5E74\u7ECF\u9A8C", "10\u5E74\u7ECF\u9A8C"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            name: "\u672C\u4E13\u4E1A",
            type: "line",
            color: "#16B857",
            label: {
              show: true,
              position: "top",
              formatter: (params) => `${turnThousandth(params.value)}`
            },
            data: props.data.salaryXData
          },
          {
            name: "\u6240\u6709\u4E13\u4E1A",
            type: "line",
            color: "#FF6600",
            label: {
              show: true,
              position: "top",
              formatter: (params) => `${turnThousandth(params.value)}`
            },
            data: props.data.salaryYData
          }
        ]
      };
    });
    const hyChartOption = computed(() => {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: "{b} : {c}%"
        },
        grid: {
          top: "3%",
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: [
          {
            type: "category",
            data: props.data.hyListXData,
            axisTick: {
              alignWithLabel: true
            }
          }
        ],
        yAxis: [
          {
            type: "value"
          }
        ],
        series: [
          {
            type: "bar",
            color: "#FF862E",
            barWidth: "60%",
            label: {
              show: true,
              position: "top",
              formatter: "{c}%"
            },
            data: props.data.hyListYData
          }
        ]
      };
    });
    const gwChartOption = computed(() => {
      return {
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          top: "5%",
          left: "center"
        },
        series: [
          {
            name: "\u5C31\u4E1A\u5C97\u4F4D\u5206\u5E03",
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              show: true,
              // 显示标签
              position: "outside",
              // 将标签放置在扇区外部
              formatter: "{b}: {c} ({d}%)"
              // 自定义标签内容
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                // 你可以根据需要调整字体大小
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: true
              // 显示标签引导线
            },
            data: props.data.gwList
          }
        ]
      };
    });
    const areaChartOption = computed(() => {
      return {
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          },
          formatter: "{b}: {c}%"
        },
        legend: {},
        grid: {
          left: "3%",
          top: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },
        xAxis: {
          type: "value",
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: "category",
          data: props.data.areaYData
        },
        series: [
          {
            type: "bar",
            color: "#FF862E",
            label: {
              show: true,
              position: "right",
              formatter: "{c}%"
            },
            data: props.data.areaXData
          }
        ]
      };
    });
    const onMoveGwChart = (e) => {
      gwInfo.value = e.data;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_title = _sfc_main$a;
      const _component_a_grid = Grid;
      const _component_a_grid_item = GridItem;
      const _component_a_slider = Slider;
      const _component_zs_e_charts = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-eeb05387>`);
      if (_ctx.data.isJobrate) {
        _push(`<div data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u5C31\u4E1A\u7387\uFF08\u8FD1\u4E09\u5E74\uFF09",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 3,
          colGap: 40,
          rowGap: 16,
          class: "p-[40px] border-solid border border-[rgb(237,237,237)] rounded-[4px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.data.jobrateList, (item, index) => {
                _push2(ssrRenderComponent(_component_a_grid_item, { key: index }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="bg-[#FFF7F0] px-[10px] font-bold rounded-[4px] h-[35px] leading-[35px] text-[#FFA864]" data-v-eeb05387${_scopeId2}>${ssrInterpolate(item.year + "\u5E74")}</div><div class="mt-[30px] text-[18px] text-[#FFA864] font-bold" data-v-eeb05387${_scopeId2}>${ssrInterpolate(item.rate)}</div>`);
                      _push3(ssrRenderComponent(_component_a_slider, {
                        modelValue: item.rateValue,
                        "onUpdate:modelValue": ($event) => item.rateValue = $event,
                        disabled: "",
                        "show-tooltip": false,
                        class: "arco-slider slider"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", { class: "bg-[#FFF7F0] px-[10px] font-bold rounded-[4px] h-[35px] leading-[35px] text-[#FFA864]" }, toDisplayString(item.year + "\u5E74"), 1),
                        createVNode("div", { class: "mt-[30px] text-[18px] text-[#FFA864] font-bold" }, toDisplayString(item.rate), 1),
                        createVNode(_component_a_slider, {
                          modelValue: item.rateValue,
                          "onUpdate:modelValue": ($event) => item.rateValue = $event,
                          disabled: "",
                          "show-tooltip": false,
                          class: "arco-slider slider"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.jobrateList, (item, index) => {
                  return openBlock(), createBlock(_component_a_grid_item, { key: index }, {
                    default: withCtx(() => [
                      createVNode("div", { class: "bg-[#FFF7F0] px-[10px] font-bold rounded-[4px] h-[35px] leading-[35px] text-[#FFA864]" }, toDisplayString(item.year + "\u5E74"), 1),
                      createVNode("div", { class: "mt-[30px] text-[18px] text-[#FFA864] font-bold" }, toDisplayString(item.rate), 1),
                      createVNode(_component_a_slider, {
                        modelValue: item.rateValue,
                        "onUpdate:modelValue": ($event) => item.rateValue = $event,
                        disabled: "",
                        "show-tooltip": false,
                        class: "arco-slider slider"
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isSalary) {
        _push(`<div class="mt-[30px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u85AA\u916C",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]" data-v-eeb05387><div class="h-[350px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_e_charts, { options: unref(salaryChartOption) }, null, _parent));
        _push(`</div>`);
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 4,
          colGap: 40,
          rowGap: 16
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.data.fivePjxz) {
                _push2(ssrRenderComponent(_component_a_grid_item, { class: "h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-[24px] leading-[32px] truncate w-[80%] text-center text-price" data-v-eeb05387${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.fivePjxz))}</div><div class="text-[14px]" data-v-eeb05387${_scopeId2}>\u6BD5\u4E1A\u540E\u4E94\u5E74\u85AA\u8D44</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "text-[24px] leading-[32px] truncate w-[80%] text-center text-price" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.fivePjxz)), 1),
                        createVNode("div", { class: "text-[14px]" }, "\u6BD5\u4E1A\u540E\u4E94\u5E74\u85AA\u8D44")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.data.mostemployedeposition) {
                _push2(ssrRenderComponent(_component_a_grid_item, { class: "h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-[24px] leading-[32px] truncate w-[80%] text-center" data-v-eeb05387${_scopeId2}>${ssrInterpolate(_ctx.data.mostemployedeposition)}</div><div class="text-[14px]" data-v-eeb05387${_scopeId2}>\u6700\u591A\u5C31\u4E1A\u5C97\u4F4D</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "text-[24px] leading-[32px] truncate w-[80%] text-center" }, toDisplayString(_ctx.data.mostemployedeposition), 1),
                        createVNode("div", { class: "text-[14px]" }, "\u6700\u591A\u5C31\u4E1A\u5C97\u4F4D")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.data.mostemploymentindustry) {
                _push2(ssrRenderComponent(_component_a_grid_item, { class: "h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-[24px] leading-[32px] truncate w-[80%] text-center" data-v-eeb05387${_scopeId2}>${ssrInterpolate(_ctx.data.mostemploymentindustry)}</div><div class="text-[14px]" data-v-eeb05387${_scopeId2}>\u6700\u591A\u5C31\u4E1A\u884C\u4E1A</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "text-[24px] leading-[32px] truncate w-[80%] text-center" }, toDisplayString(_ctx.data.mostemploymentindustry), 1),
                        createVNode("div", { class: "text-[14px]" }, "\u6700\u591A\u5C31\u4E1A\u884C\u4E1A")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.data.mostemploymentarea) {
                _push2(ssrRenderComponent(_component_a_grid_item, { class: "h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-[24px] leading-[32px] truncate w-[80%] text-center" data-v-eeb05387${_scopeId2}>${ssrInterpolate(_ctx.data.mostemploymentarea)}</div><div class="text-[14px]" data-v-eeb05387${_scopeId2}>\u6700\u591A\u5C31\u4E1A\u5730\u533A</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "text-[24px] leading-[32px] truncate w-[80%] text-center" }, toDisplayString(_ctx.data.mostemploymentarea), 1),
                        createVNode("div", { class: "text-[14px]" }, "\u6700\u591A\u5C31\u4E1A\u5730\u533A")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.data.fivePjxz ? (openBlock(), createBlock(_component_a_grid_item, {
                  key: 0,
                  class: "h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-[24px] leading-[32px] truncate w-[80%] text-center text-price" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.fivePjxz)), 1),
                    createVNode("div", { class: "text-[14px]" }, "\u6BD5\u4E1A\u540E\u4E94\u5E74\u85AA\u8D44")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.mostemployedeposition ? (openBlock(), createBlock(_component_a_grid_item, {
                  key: 1,
                  class: "h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-[24px] leading-[32px] truncate w-[80%] text-center" }, toDisplayString(_ctx.data.mostemployedeposition), 1),
                    createVNode("div", { class: "text-[14px]" }, "\u6700\u591A\u5C31\u4E1A\u5C97\u4F4D")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.mostemploymentindustry ? (openBlock(), createBlock(_component_a_grid_item, {
                  key: 2,
                  class: "h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-[24px] leading-[32px] truncate w-[80%] text-center" }, toDisplayString(_ctx.data.mostemploymentindustry), 1),
                    createVNode("div", { class: "text-[14px]" }, "\u6700\u591A\u5C31\u4E1A\u884C\u4E1A")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.mostemploymentarea ? (openBlock(), createBlock(_component_a_grid_item, {
                  key: 3,
                  class: "h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "text-[24px] leading-[32px] truncate w-[80%] text-center" }, toDisplayString(_ctx.data.mostemploymentarea), 1),
                    createVNode("div", { class: "text-[14px]" }, "\u6700\u591A\u5C31\u4E1A\u5730\u533A")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isHy) {
        _push(`<div class="mt-[30px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u5C31\u4E1A\u884C\u4E1A\u5206\u5E03",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px] h-[350px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_e_charts, { options: unref(hyChartOption) }, null, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isGw) {
        _push(`<div class="mt-[30px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u5C31\u4E1A\u5C97\u4F4D\u5206\u5E03",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]" data-v-eeb05387><div class="h-[350px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_e_charts, {
          options: unref(gwChartOption),
          "on-Move": onMoveGwChart
        }, null, _parent));
        _push(`</div><div data-v-eeb05387>`);
        if (unref(gwInfo).detailJob) {
          _push(`<div data-v-eeb05387><span class="text-[#333] font-bold" data-v-eeb05387>\u5177\u4F53\u804C\u4F4D\uFF1A</span> ${ssrInterpolate(unref(gwInfo).detailJob)}</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(gwInfo).hy) {
          _push(`<div class="mt-[15px]" data-v-eeb05387><span class="text-[#333] font-bold" data-v-eeb05387>\u6240\u5728\u884C\u4E1A\uFF1A</span> ${ssrInterpolate(unref(gwInfo).hy)}</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isArea) {
        _push(`<div class="mt-[30px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u5C31\u4E1A\u5730\u533A\u5206\u5E03",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]" data-v-eeb05387><div class="h-[350px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_e_charts, { options: unref(areaChartOption) }, null, _parent));
        _push(`</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.job) {
        _push(`<div class="mt-[30px]" data-v-eeb05387>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u4E13\u4E1A\u5C31\u4E1A",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px] leading-[20px]" data-v-eeb05387>${_ctx.data.job}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsMajorJobProspects/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-eeb05387"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => [] },
    params: { default: () => ({}) },
    loading: { type: Boolean, default: () => true }
  },
  emits: ["change", "changePage", "changeSize"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { provinceCityList, getDictionValue } = useWebsiteInformation();
    const { form } = useForm(() => ({
      ...props.params
    }));
    const toggleSort = (key) => {
      if (form.value.sort === `${key} desc`) {
        form.value.sort = `${key} asc`;
      } else if (form.value.sort === `${key} asc`) {
        form.value.sort = "";
      } else {
        form.value.sort = `${key} desc`;
      }
      emits("change", form.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_space = Space;
      const _component_a_select = Select;
      const _component_icon_arrow_rise = IconArrowRise;
      const _component_icon_arrow_fall = IconArrowFall;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_zs_no_data_small = _sfc_main$c;
      const _component_client_only = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6ed2c8e2><div data-v-6ed2c8e2><div class="flex items-center justify-between" data-v-6ed2c8e2><div class="font-bold text-[18px]" data-v-6ed2c8e2>\u5F00\u8BBE\u9662\u6821</div><div data-v-6ed2c8e2>`);
      _push(ssrRenderComponent(_component_a_space, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_select, {
              style: { width: "200px" },
              modelValue: unref(form).location,
              "onUpdate:modelValue": ($event) => unref(form).location = $event,
              options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(provinceCityList)],
              placeholder: "\u6240\u5728\u5730\u533A",
              "allow-clear": "",
              onChange: ($event) => _ctx.$emit("change", unref(form))
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_select, {
              style: { width: "200px" },
              modelValue: unref(form).type,
              "onUpdate:modelValue": ($event) => unref(form).type = $event,
              options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("YXLX")],
              placeholder: "\u9662\u6821\u7C7B\u578B",
              "allow-clear": "",
              onChange: ($event) => _ctx.$emit("change", unref(form))
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_select, {
              style: { width: "200px" },
              modelValue: unref(form).properties,
              "onUpdate:modelValue": ($event) => unref(form).properties = $event,
              options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("BXXZ")],
              placeholder: "\u529E\u5B66\u6027\u8D28",
              "allow-clear": "",
              onChange: ($event) => _ctx.$emit("change", unref(form))
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_select, {
              style: { width: "200px" },
              modelValue: unref(form).strengthTags,
              "onUpdate:modelValue": ($event) => unref(form).strengthTags = $event,
              options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("SLBQONE")],
              placeholder: "\u5B9E\u529B\u6807\u7B7E",
              "allow-clear": "",
              onChange: ($event) => _ctx.$emit("change", unref(form))
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_select, {
                style: { width: "200px" },
                modelValue: unref(form).location,
                "onUpdate:modelValue": ($event) => unref(form).location = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(provinceCityList)],
                placeholder: "\u6240\u5728\u5730\u533A",
                "allow-clear": "",
                onChange: ($event) => _ctx.$emit("change", unref(form))
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
              createVNode(_component_a_select, {
                style: { width: "200px" },
                modelValue: unref(form).type,
                "onUpdate:modelValue": ($event) => unref(form).type = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("YXLX")],
                placeholder: "\u9662\u6821\u7C7B\u578B",
                "allow-clear": "",
                onChange: ($event) => _ctx.$emit("change", unref(form))
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
              createVNode(_component_a_select, {
                style: { width: "200px" },
                modelValue: unref(form).properties,
                "onUpdate:modelValue": ($event) => unref(form).properties = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("BXXZ")],
                placeholder: "\u529E\u5B66\u6027\u8D28",
                "allow-clear": "",
                onChange: ($event) => _ctx.$emit("change", unref(form))
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
              createVNode(_component_a_select, {
                style: { width: "200px" },
                modelValue: unref(form).strengthTags,
                "onUpdate:modelValue": ($event) => unref(form).strengthTags = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("SLBQONE")],
                placeholder: "\u5B9E\u529B\u6807\u7B7E",
                "allow-clear": "",
                onChange: ($event) => _ctx.$emit("change", unref(form))
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_a_space, { class: "h-[40px] mt-[20px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{
              "bg-[#7C92FF] text-white": unref(form).sort.startsWith("min(sds.zdf)")
            }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-6ed2c8e2${_scopeId}> \u5F55\u53D6\u5206\u6570 `);
            if (unref(form).sort === "min(sds.zdf) asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("bsr.rank_in") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-6ed2c8e2${_scopeId}> \u8F6F\u79D1\u6392\u5E8F `);
            if (unref(form).sort === "bsr.rank_in asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", {
                  "bg-[#7C92FF] text-white": unref(form).sort.startsWith("min(sds.zdf)")
                }],
                onClick: ($event) => toggleSort("min(sds.zdf)")
              }, [
                createTextVNode(" \u5F55\u53D6\u5206\u6570 "),
                unref(form).sort === "min(sds.zdf) asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("bsr.rank_in") }],
                onClick: ($event) => toggleSort("bsr.rank_in")
              }, [
                createTextVNode(" \u8F6F\u79D1\u6392\u5E8F "),
                unref(form).sort === "bsr.rank_in asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_a_list, {
        class: "list-border",
        bordered: false,
        loading: _ctx.loading
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_zs_no_data_small)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.data, (school, index) => {
              _push2(ssrRenderComponent(_component_a_list_item, { key: index }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: `/college/${school == null ? void 0 : school.id}`,
                      target: "_blank"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center" data-v-6ed2c8e2${_scopeId3}>`);
                          if (unref(form).sort.startsWith("bsr.rank_in")) {
                            _push4(`<div class="flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]" data-v-6ed2c8e2${_scopeId3}>${ssrInterpolate(index + 1)}</div>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`<div class="flex-1 flex items-center cursor-pointer" data-v-6ed2c8e2${_scopeId3}><img${ssrRenderAttr("src", school.logo)} class="mr-[10px] w-[70px]" data-v-6ed2c8e2${_scopeId3}><div data-v-6ed2c8e2${_scopeId3}><div class="text-[20px]" data-v-6ed2c8e2${_scopeId3}>${ssrInterpolate(school.yxmc)}</div>`);
                          _push4(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                            split: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<span class="w-[2px] h-[8px] text-[#999999]" data-v-6ed2c8e2${_scopeId4}>|</span>`);
                              } else {
                                return [
                                  createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                                ];
                              }
                            }),
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                              if (_push5) {
                                if ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _a.label) {
                                  _push5(`<span data-v-6ed2c8e2${_scopeId4}>${ssrInterpolate((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _b.label)}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _c.label) {
                                  _push5(`<span data-v-6ed2c8e2${_scopeId4}>${ssrInterpolate((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _d.label)}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (school.lsy) {
                                  _push5(`<span data-v-6ed2c8e2${_scopeId4}>${ssrInterpolate(school.lsy)}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _e.label) {
                                  _push5(`<span data-v-6ed2c8e2${_scopeId4}>${ssrInterpolate((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _f.label)}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  ((_g = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _g.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_h = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _h.label), 1)) : createCommentVNode("", true),
                                  ((_i = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _i.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_j = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _j.label), 1)) : createCommentVNode("", true),
                                  school.lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(school.lsy), 1)) : createCommentVNode("", true),
                                  ((_k = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _k.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_l = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _l.label), 1)) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          if (unref(form).sort.startsWith("min(sds.zdf)")) {
                            _push4(`<div class="text-[#999999]" data-v-6ed2c8e2${_scopeId3}> \u6700\u4F4E\u5206/\u6700\u4F4E\u5206\u4F4D <span class="text-[#FFA864]" data-v-6ed2c8e2${_scopeId3}>${ssrInterpolate(school.zdf)}/${ssrInterpolate(school.zdfwc)}</span></div>`);
                          } else {
                            _push4(`<div data-v-6ed2c8e2${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<!--[-->`);
                                  ssrRenderList(school.schoolTags, (tag, index2) => {
                                    _push5(`<span class="p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]" data-v-6ed2c8e2${_scopeId4}>${ssrInterpolate(tag)}</span>`);
                                  });
                                  _push5(`<!--]-->`);
                                } else {
                                  return [
                                    (openBlock(true), createBlock(Fragment, null, renderList(school.schoolTags, (tag, index2) => {
                                      return openBlock(), createBlock("span", {
                                        key: index2,
                                        class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                      }, toDisplayString(tag), 1);
                                    }), 128))
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(`</div>`);
                          }
                          _push4(`</div></div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center" }, [
                              unref(form).sort.startsWith("bsr.rank_in") ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]"
                              }, toDisplayString(index + 1), 1)) : createCommentVNode("", true),
                              createVNode("div", { class: "flex-1 flex items-center cursor-pointer" }, [
                                createVNode("img", {
                                  src: school.logo,
                                  class: "mr-[10px] w-[70px]"
                                }, null, 8, ["src"]),
                                createVNode("div", null, [
                                  createVNode("div", { class: "text-[20px]" }, toDisplayString(school.yxmc), 1),
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    split: withCtx(() => [
                                      createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                                    ]),
                                    default: withCtx(() => {
                                      var _a, _b, _c, _d, _e, _f;
                                      return [
                                        ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _a.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _b.label), 1)) : createCommentVNode("", true),
                                        ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _c.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _d.label), 1)) : createCommentVNode("", true),
                                        school.lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(school.lsy), 1)) : createCommentVNode("", true),
                                        ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _e.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _f.label), 1)) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 2
                                  }, 1024),
                                  unref(form).sort.startsWith("min(sds.zdf)") ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "text-[#999999]"
                                  }, [
                                    createTextVNode(" \u6700\u4F4E\u5206/\u6700\u4F4E\u5206\u4F4D "),
                                    createVNode("span", { class: "text-[#FFA864]" }, toDisplayString(school.zdf) + "/" + toDisplayString(school.zdfwc), 1)
                                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                    createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(school.schoolTags, (tag, index2) => {
                                          return openBlock(), createBlock("span", {
                                            key: index2,
                                            class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                          }, toDisplayString(tag), 1);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]))
                                ])
                              ])
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_nuxt_link, {
                        to: `/college/${school == null ? void 0 : school.id}`,
                        target: "_blank"
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center" }, [
                            unref(form).sort.startsWith("bsr.rank_in") ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]"
                            }, toDisplayString(index + 1), 1)) : createCommentVNode("", true),
                            createVNode("div", { class: "flex-1 flex items-center cursor-pointer" }, [
                              createVNode("img", {
                                src: school.logo,
                                class: "mr-[10px] w-[70px]"
                              }, null, 8, ["src"]),
                              createVNode("div", null, [
                                createVNode("div", { class: "text-[20px]" }, toDisplayString(school.yxmc), 1),
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  split: withCtx(() => [
                                    createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                                  ]),
                                  default: withCtx(() => {
                                    var _a, _b, _c, _d, _e, _f;
                                    return [
                                      ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _a.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _b.label), 1)) : createCommentVNode("", true),
                                      ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _c.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _d.label), 1)) : createCommentVNode("", true),
                                      school.lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(school.lsy), 1)) : createCommentVNode("", true),
                                      ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _e.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _f.label), 1)) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 2
                                }, 1024),
                                unref(form).sort.startsWith("min(sds.zdf)") ? (openBlock(), createBlock("div", {
                                  key: 0,
                                  class: "text-[#999999]"
                                }, [
                                  createTextVNode(" \u6700\u4F4E\u5206/\u6700\u4F4E\u5206\u4F4D "),
                                  createVNode("span", { class: "text-[#FFA864]" }, toDisplayString(school.zdf) + "/" + toDisplayString(school.zdfwc), 1)
                                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(school.schoolTags, (tag, index2) => {
                                        return openBlock(), createBlock("span", {
                                          key: index2,
                                          class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                        }, toDisplayString(tag), 1);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]))
                              ])
                            ])
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (school, index) => {
                return openBlock(), createBlock(_component_a_list_item, { key: index }, {
                  default: withCtx(() => [
                    createVNode(_component_nuxt_link, {
                      to: `/college/${school == null ? void 0 : school.id}`,
                      target: "_blank"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center" }, [
                          unref(form).sort.startsWith("bsr.rank_in") ? (openBlock(), createBlock("div", {
                            key: 0,
                            class: "flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]"
                          }, toDisplayString(index + 1), 1)) : createCommentVNode("", true),
                          createVNode("div", { class: "flex-1 flex items-center cursor-pointer" }, [
                            createVNode("img", {
                              src: school.logo,
                              class: "mr-[10px] w-[70px]"
                            }, null, 8, ["src"]),
                            createVNode("div", null, [
                              createVNode("div", { class: "text-[20px]" }, toDisplayString(school.yxmc), 1),
                              createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                split: withCtx(() => [
                                  createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                                ]),
                                default: withCtx(() => {
                                  var _a, _b, _c, _d, _e, _f;
                                  return [
                                    ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _a.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), school.sf)) == null ? void 0 : _b.label), 1)) : createCommentVNode("", true),
                                    ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _c.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), school.yxLx)) == null ? void 0 : _d.label), 1)) : createCommentVNode("", true),
                                    school.lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(school.lsy), 1)) : createCommentVNode("", true),
                                    ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _e.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), school.bxXz)) == null ? void 0 : _f.label), 1)) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 2
                              }, 1024),
                              unref(form).sort.startsWith("min(sds.zdf)") ? (openBlock(), createBlock("div", {
                                key: 0,
                                class: "text-[#999999]"
                              }, [
                                createTextVNode(" \u6700\u4F4E\u5206/\u6700\u4F4E\u5206\u4F4D "),
                                createVNode("span", { class: "text-[#FFA864]" }, toDisplayString(school.zdf) + "/" + toDisplayString(school.zdfwc), 1)
                              ])) : (openBlock(), createBlock("div", { key: 1 }, [
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(school.schoolTags, (tag, index2) => {
                                      return openBlock(), createBlock("span", {
                                        key: index2,
                                        class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                      }, toDisplayString(tag), 1);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]))
                            ])
                          ])
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsMajorOpenCollege/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-6ed2c8e2"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u4E13\u4E1A\u8BE6\u60C5"
    });
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const route = useRoute();
    const router = useRouter();
    const { form } = useForm(() => ({
      activeTabKey: ["recap", "decode", "prospect", "school"].includes(route.query.tab) ? route.query.tab : "recap"
    }));
    const { form: schoolParams } = useForm(() => ({
      zydm: "",
      location: "",
      type: "",
      cc: "",
      properties: "",
      strengthTags: "",
      featuresTags: "",
      sort: ""
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 0);
      schoolRefresh();
    });
    const clickFollowMajor = async () => {
      const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW, {
        body: {
          majorId: majorDetail.value.id
        }
      });
      $zsMsg("success", res.data);
      if (res) {
        if (majorDetail.value.userIsCollect == "1") {
          majorDetail.value.userIsCollect = "0";
        } else {
          majorDetail.value.userIsCollect = "1";
        }
      }
    };
    const changeSchoolParams = async (e) => {
      schoolParams.value = { ...schoolParams.value, ...e };
      resetData();
    };
    const changeTabs = () => {
      router.replace({
        query: { ...route.query, tab: form.value.activeTabKey }
      });
    };
    const { data: majorDetail, status: majorDetailStatus } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "majorDetail",
      async () => {
        var _a2, _b2, _c2, _d2;
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L;
        const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_MAJOR_DETAIL, {
          body: {
            id: route.params.id
          }
        });
        let result = {};
        if (res.data === "\u4E13\u4E1A\u4E0D\u5B58\u5728") {
          result.error = true;
        } else {
          result = {
            ...res.data,
            // 简介信息
            isProfession: ((_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.professionList) == null ? void 0 : _b.length) ? true : false,
            isEmployment: ((_d = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.employmentList) == null ? void 0 : _d.length) ? true : false,
            isGraduateInterest: ((_f = (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.graduateInterestList) == null ? void 0 : _f.length) ? true : false,
            isCourseList: ((_h = (_g = res == null ? void 0 : res.data) == null ? void 0 : _g.courseList) == null ? void 0 : _h.length) ? true : false,
            // 就业率
            jobrateList: (_a2 = (_j = (_i = res == null ? void 0 : res.data) == null ? void 0 : _i.jobrateList) == null ? void 0 : _j.map((o) => {
              return {
                ...o,
                rateValue: o.rateValue * 1
              };
            })) != null ? _a2 : [],
            isJobrate: ((_l = (_k = res == null ? void 0 : res.data) == null ? void 0 : _k.jobrateList) == null ? void 0 : _l.length) ? true : false,
            // 薪酬
            salaryXData: (_n = (_m = res == null ? void 0 : res.data) == null ? void 0 : _m.salaryList[0]) == null ? void 0 : _n.majorSalaryAvgList,
            salaryYData: (_p = (_o = res == null ? void 0 : res.data) == null ? void 0 : _o.salaryList[0]) == null ? void 0 : _p.allMajorSalaryAvgList,
            isSalary: ((_r = (_q = res == null ? void 0 : res.data) == null ? void 0 : _q.salaryList) == null ? void 0 : _r.length) ? true : false,
            // 就业行业分布
            hyListXData: (_b2 = (_t = (_s = res == null ? void 0 : res.data) == null ? void 0 : _s.hyList) == null ? void 0 : _t.map((o) => o.hy)) != null ? _b2 : [],
            hyListYData: (_c2 = (_v = (_u = res == null ? void 0 : res.data) == null ? void 0 : _u.hyList) == null ? void 0 : _v.map((o) => o.percent)) != null ? _c2 : [],
            isHy: ((_x = (_w = res == null ? void 0 : res.data) == null ? void 0 : _w.hyList) == null ? void 0 : _x.length) ? true : false,
            // 就业岗位分布
            gwList: (_d2 = (_z = (_y = res == null ? void 0 : res.data) == null ? void 0 : _y.gwList) == null ? void 0 : _z.map((o) => {
              return {
                ...o,
                name: o.gw,
                value: o.percent
              };
            })) != null ? _d2 : {},
            isGw: ((_B = (_A = res == null ? void 0 : res.data) == null ? void 0 : _A.gwList) == null ? void 0 : _B.length) ? true : false,
            // 就业地区分布
            areaXData: ((_D = (_C = res == null ? void 0 : res.data) == null ? void 0 : _C.areaList) == null ? void 0 : _D.length) ? (_F = (_E = res == null ? void 0 : res.data) == null ? void 0 : _E.areaList) == null ? void 0 : _F.map((o) => o.percent) : [],
            areaYData: ((_H = (_G = res == null ? void 0 : res.data) == null ? void 0 : _G.areaList) == null ? void 0 : _H.length) ? (_J = (_I = res == null ? void 0 : res.data) == null ? void 0 : _I.areaList) == null ? void 0 : _J.map((o) => o.sf) : [],
            isArea: ((_L = (_K = res == null ? void 0 : res.data) == null ? void 0 : _K.areaList) == null ? void 0 : _L.length) ? true : false
          };
        }
        return result;
      }
    )), __temp = await __temp, __restore(), __temp);
    const {
      data: schoolData,
      status: schoolStatus,
      refresh: schoolRefresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "collegeList",
      async () => {
        var _a2, _b2;
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_SCHOOL_LIST, {
          body: {
            zydm: majorDetail.value.zydm,
            // 专业代码
            location: schoolParams.value.location,
            type: schoolParams.value.type,
            cc: schoolParams.value.cc,
            properties: schoolParams.value.properties,
            strengthTags: schoolParams.value.strengthTags,
            featuresTags: schoolParams.value.featuresTags,
            sort: schoolParams.value.sort,
            currentPage: pagination.value.current,
            pageSize: pagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          list: (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) != null ? _a2 : [],
          total: (_b2 = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.totalCount) != null ? _b2 : 0
        };
      },
      {
        default: () => ({
          list: [],
          total: 0
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_a_list_item_meta = ListItemMeta;
      const _component_a_space = Space;
      const _component_a_tabs = Tabs;
      const _component_a_tab_pane = TabPane;
      const _component_zs_major_recap = __nuxt_component_6;
      const _component_client_only = __nuxt_component_1;
      const _component_zs_major_job_prospects = __nuxt_component_8;
      const _component_zs_major_open_college = __nuxt_component_9;
      const _component_zs_no_data = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))} data-v-10c73ce3>`);
      if (!unref(majorDetail).error) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_a_list, {
          bordered: false,
          class: "w-full",
          loading: unref(majorDetailStatus) === "pending"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_list_item, null, {
                actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_space, { direction: "vertical" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2;
                        if (_push4) {
                          _push4(`<div class="w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center" data-v-10c73ce3${_scopeId3}>${ssrInterpolate(((_a2 = unref(majorDetail)) == null ? void 0 : _a2.userIsCollect) == "1" ? "\u53D6\u6D88\u5173\u6CE8" : "+\u5173\u6CE8")}</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: "w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center",
                              onClick: clickFollowMajor
                            }, toDisplayString(((_b2 = unref(majorDetail)) == null ? void 0 : _b2.userIsCollect) == "1" ? "\u53D6\u6D88\u5173\u6CE8" : "+\u5173\u6CE8"), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_space, { direction: "vertical" }, {
                        default: withCtx(() => {
                          var _a2;
                          return [
                            createVNode("div", {
                              class: "w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center",
                              onClick: clickFollowMajor
                            }, toDisplayString(((_a2 = unref(majorDetail)) == null ? void 0 : _a2.userIsCollect) == "1" ? "\u53D6\u6D88\u5173\u6CE8" : "+\u5173\u6CE8"), 1)
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_list_item_meta, null, {
                      title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2;
                        if (_push4) {
                          _push4(`<div class="text-[24px] cursor-pointer font-bold mb-[10px]" data-v-10c73ce3${_scopeId3}>${ssrInterpolate((_a2 = unref(majorDetail)) == null ? void 0 : _a2.zymc)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "text-[24px] cursor-pointer font-bold mb-[10px]" }, toDisplayString((_b2 = unref(majorDetail)) == null ? void 0 : _b2.zymc), 1)
                          ];
                        }
                      }),
                      description: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
                        if (_push4) {
                          _push4(`<div data-v-10c73ce3${_scopeId3}><span data-v-10c73ce3${_scopeId3}>${ssrInterpolate((_a2 = unref(majorDetail)) == null ? void 0 : _a2.cc)}</span><span data-v-10c73ce3${_scopeId3}>${ssrInterpolate(((_b2 = unref(majorDetail)) == null ? void 0 : _b2.xkml) ? "/" + ((_c2 = unref(majorDetail)) == null ? void 0 : _c2.xkml) : "")}</span><span data-v-10c73ce3${_scopeId3}>${ssrInterpolate(((_d2 = unref(majorDetail)) == null ? void 0 : _d2.zyl) ? "/" + ((_e = unref(majorDetail)) == null ? void 0 : _e.zyl) : "")}</span>`);
                          if ((_f = unref(majorDetail)) == null ? void 0 : _f.graduateScale) {
                            _push4(`<span class="ml-[20px]" data-v-10c73ce3${_scopeId3}> \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_g = unref(majorDetail)) == null ? void 0 : _g.graduateScale))}</span>`);
                          } else {
                            _push4(`<!---->`);
                          }
                          _push4(`</div>`);
                          _push4(ssrRenderComponent(_component_a_space, {
                            class: "mt-[30px]",
                            size: "large"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              var _a3, _b3, _c3, _d3, _e2, _f2, _g2, _h2, _i2, _j2;
                              if (_push5) {
                                _push5(`<div class="flex items-center" data-v-10c73ce3${_scopeId4}><div class="w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" data-v-10c73ce3${_scopeId4}><i class="iconfont icon-jiaocai font-bold text-white iconSize" data-v-10c73ce3${_scopeId4}></i></div><div class="ml-[10px]" data-v-10c73ce3${_scopeId4}><div class="text-[#999]" data-v-10c73ce3${_scopeId4}>\u4E13\u4E1A\u4EE3\u7801</div><div class="mt-[5px]" data-v-10c73ce3${_scopeId4}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a3 = unref(majorDetail)) == null ? void 0 : _a3.zydm))}</div></div></div><div class="flex items-center" data-v-10c73ce3${_scopeId4}><div class="w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" data-v-10c73ce3${_scopeId4}><i class="iconfont icon-jiaoyu font-bold text-white iconSize" data-v-10c73ce3${_scopeId4}></i></div><div class="ml-[10px]" data-v-10c73ce3${_scopeId4}><div class="text-[#999]" data-v-10c73ce3${_scopeId4}>\u5B66\u5386\u5C42\u6B21</div><div class="mt-[5px]" data-v-10c73ce3${_scopeId4}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(majorDetail)) == null ? void 0 : _b3.cc))}</div></div></div><div class="flex items-center" data-v-10c73ce3${_scopeId4}><div class="w-[42px] h-[42px] bg-[#FFA864] flex items-center justify-center rounded-[8px]" data-v-10c73ce3${_scopeId4}><i class="iconfont icon-shijian font-bold text-white iconSize" data-v-10c73ce3${_scopeId4}></i></div><div class="ml-[10px]" data-v-10c73ce3${_scopeId4}><div class="text-[#999]" data-v-10c73ce3${_scopeId4}>\u4F11\u5B66\u5E74\u9650</div><div class="mt-[5px]" data-v-10c73ce3${_scopeId4}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_c3 = unref(majorDetail)) == null ? void 0 : _c3.xyNx))}</div></div></div><div class="flex items-center" data-v-10c73ce3${_scopeId4}><div class="w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" data-v-10c73ce3${_scopeId4}><i class="iconfont icon-XX_017 font-bold text-white iconSize" data-v-10c73ce3${_scopeId4}></i></div><div class="ml-[10px]" data-v-10c73ce3${_scopeId4}><div class="text-[#999]" data-v-10c73ce3${_scopeId4}>\u6388\u4E88\u5B66\u4F4D</div><div class="mt-[5px]" data-v-10c73ce3${_scopeId4}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_d3 = unref(majorDetail)) == null ? void 0 : _d3.syxw))}</div></div></div><div class="flex items-center" data-v-10c73ce3${_scopeId4}><div class="w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" data-v-10c73ce3${_scopeId4}><i class="iconfont icon-yulebao font-bold text-white iconSize" data-v-10c73ce3${_scopeId4}></i></div><div class="ml-[10px]" data-v-10c73ce3${_scopeId4}><div class="text-[#999]" data-v-10c73ce3${_scopeId4}>\u5E73\u5747\u85AA\u916C</div><div class="mt-[5px] text-price" data-v-10c73ce3${_scopeId4}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_e2 = unref(majorDetail)) == null ? void 0 : _e2.pjxz)))}</div></div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-jiaocai font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u4E13\u4E1A\u4EE3\u7801"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_f2 = unref(majorDetail)) == null ? void 0 : _f2.zydm)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-jiaoyu font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u5B66\u5386\u5C42\u6B21"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_g2 = unref(majorDetail)) == null ? void 0 : _g2.cc)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#FFA864] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-shijian font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u4F11\u5B66\u5E74\u9650"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_h2 = unref(majorDetail)) == null ? void 0 : _h2.xyNx)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-XX_017 font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u6388\u4E88\u5B66\u4F4D"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_i2 = unref(majorDetail)) == null ? void 0 : _i2.syxw)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-yulebao font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u5E73\u5747\u85AA\u916C"),
                                      createVNode("div", { class: "mt-[5px] text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_j2 = unref(majorDetail)) == null ? void 0 : _j2.pjxz))), 1)
                                    ])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode("div", null, [
                              createVNode("span", null, toDisplayString((_h = unref(majorDetail)) == null ? void 0 : _h.cc), 1),
                              createVNode("span", null, toDisplayString(((_i = unref(majorDetail)) == null ? void 0 : _i.xkml) ? "/" + ((_j = unref(majorDetail)) == null ? void 0 : _j.xkml) : ""), 1),
                              createVNode("span", null, toDisplayString(((_k = unref(majorDetail)) == null ? void 0 : _k.zyl) ? "/" + ((_l = unref(majorDetail)) == null ? void 0 : _l.zyl) : ""), 1),
                              ((_m = unref(majorDetail)) == null ? void 0 : _m.graduateScale) ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "ml-[20px]"
                              }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_n = unref(majorDetail)) == null ? void 0 : _n.graduateScale)), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_a_space, {
                              class: "mt-[30px]",
                              size: "large"
                            }, {
                              default: withCtx(() => {
                                var _a3, _b3, _c3, _d3, _e2;
                                return [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-jiaocai font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u4E13\u4E1A\u4EE3\u7801"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a3 = unref(majorDetail)) == null ? void 0 : _a3.zydm)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-jiaoyu font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u5B66\u5386\u5C42\u6B21"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(majorDetail)) == null ? void 0 : _b3.cc)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#FFA864] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-shijian font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u4F11\u5B66\u5E74\u9650"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_c3 = unref(majorDetail)) == null ? void 0 : _c3.xyNx)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-XX_017 font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u6388\u4E88\u5B66\u4F4D"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_d3 = unref(majorDetail)) == null ? void 0 : _d3.syxw)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-yulebao font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u5E73\u5747\u85AA\u916C"),
                                      createVNode("div", { class: "mt-[5px] text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_e2 = unref(majorDetail)) == null ? void 0 : _e2.pjxz))), 1)
                                    ])
                                  ])
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_list_item_meta, null, {
                        title: withCtx(() => {
                          var _a2;
                          return [
                            createVNode("div", { class: "text-[24px] cursor-pointer font-bold mb-[10px]" }, toDisplayString((_a2 = unref(majorDetail)) == null ? void 0 : _a2.zymc), 1)
                          ];
                        }),
                        description: withCtx(() => {
                          var _a2, _b2, _c2, _d2, _e, _f, _g;
                          return [
                            createVNode("div", null, [
                              createVNode("span", null, toDisplayString((_a2 = unref(majorDetail)) == null ? void 0 : _a2.cc), 1),
                              createVNode("span", null, toDisplayString(((_b2 = unref(majorDetail)) == null ? void 0 : _b2.xkml) ? "/" + ((_c2 = unref(majorDetail)) == null ? void 0 : _c2.xkml) : ""), 1),
                              createVNode("span", null, toDisplayString(((_d2 = unref(majorDetail)) == null ? void 0 : _d2.zyl) ? "/" + ((_e = unref(majorDetail)) == null ? void 0 : _e.zyl) : ""), 1),
                              ((_f = unref(majorDetail)) == null ? void 0 : _f.graduateScale) ? (openBlock(), createBlock("span", {
                                key: 0,
                                class: "ml-[20px]"
                              }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_g = unref(majorDetail)) == null ? void 0 : _g.graduateScale)), 1)) : createCommentVNode("", true)
                            ]),
                            createVNode(_component_a_space, {
                              class: "mt-[30px]",
                              size: "large"
                            }, {
                              default: withCtx(() => {
                                var _a3, _b3, _c3, _d3, _e2;
                                return [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-jiaocai font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u4E13\u4E1A\u4EE3\u7801"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a3 = unref(majorDetail)) == null ? void 0 : _a3.zydm)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-jiaoyu font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u5B66\u5386\u5C42\u6B21"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(majorDetail)) == null ? void 0 : _b3.cc)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#FFA864] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-shijian font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u4F11\u5B66\u5E74\u9650"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_c3 = unref(majorDetail)) == null ? void 0 : _c3.xyNx)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-XX_017 font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u6388\u4E88\u5B66\u4F4D"),
                                      createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_d3 = unref(majorDetail)) == null ? void 0 : _d3.syxw)), 1)
                                    ])
                                  ]),
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode("div", { class: "w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" }, [
                                      createVNode("i", { class: "iconfont icon-yulebao font-bold text-white iconSize" })
                                    ]),
                                    createVNode("div", { class: "ml-[10px]" }, [
                                      createVNode("div", { class: "text-[#999]" }, "\u5E73\u5747\u85AA\u916C"),
                                      createVNode("div", { class: "mt-[5px] text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_e2 = unref(majorDetail)) == null ? void 0 : _e2.pjxz))), 1)
                                    ])
                                  ])
                                ];
                              }),
                              _: 1
                            })
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_list_item, null, {
                  actions: withCtx(() => [
                    createVNode(_component_a_space, { direction: "vertical" }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode("div", {
                            class: "w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center",
                            onClick: clickFollowMajor
                          }, toDisplayString(((_a2 = unref(majorDetail)) == null ? void 0 : _a2.userIsCollect) == "1" ? "\u53D6\u6D88\u5173\u6CE8" : "+\u5173\u6CE8"), 1)
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_a_list_item_meta, null, {
                      title: withCtx(() => {
                        var _a2;
                        return [
                          createVNode("div", { class: "text-[24px] cursor-pointer font-bold mb-[10px]" }, toDisplayString((_a2 = unref(majorDetail)) == null ? void 0 : _a2.zymc), 1)
                        ];
                      }),
                      description: withCtx(() => {
                        var _a2, _b2, _c2, _d2, _e, _f, _g;
                        return [
                          createVNode("div", null, [
                            createVNode("span", null, toDisplayString((_a2 = unref(majorDetail)) == null ? void 0 : _a2.cc), 1),
                            createVNode("span", null, toDisplayString(((_b2 = unref(majorDetail)) == null ? void 0 : _b2.xkml) ? "/" + ((_c2 = unref(majorDetail)) == null ? void 0 : _c2.xkml) : ""), 1),
                            createVNode("span", null, toDisplayString(((_d2 = unref(majorDetail)) == null ? void 0 : _d2.zyl) ? "/" + ((_e = unref(majorDetail)) == null ? void 0 : _e.zyl) : ""), 1),
                            ((_f = unref(majorDetail)) == null ? void 0 : _f.graduateScale) ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "ml-[20px]"
                            }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_g = unref(majorDetail)) == null ? void 0 : _g.graduateScale)), 1)) : createCommentVNode("", true)
                          ]),
                          createVNode(_component_a_space, {
                            class: "mt-[30px]",
                            size: "large"
                          }, {
                            default: withCtx(() => {
                              var _a3, _b3, _c3, _d3, _e2;
                              return [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("div", { class: "w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" }, [
                                    createVNode("i", { class: "iconfont icon-jiaocai font-bold text-white iconSize" })
                                  ]),
                                  createVNode("div", { class: "ml-[10px]" }, [
                                    createVNode("div", { class: "text-[#999]" }, "\u4E13\u4E1A\u4EE3\u7801"),
                                    createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a3 = unref(majorDetail)) == null ? void 0 : _a3.zydm)), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("div", { class: "w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" }, [
                                    createVNode("i", { class: "iconfont icon-jiaoyu font-bold text-white iconSize" })
                                  ]),
                                  createVNode("div", { class: "ml-[10px]" }, [
                                    createVNode("div", { class: "text-[#999]" }, "\u5B66\u5386\u5C42\u6B21"),
                                    createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(majorDetail)) == null ? void 0 : _b3.cc)), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("div", { class: "w-[42px] h-[42px] bg-[#FFA864] flex items-center justify-center rounded-[8px]" }, [
                                    createVNode("i", { class: "iconfont icon-shijian font-bold text-white iconSize" })
                                  ]),
                                  createVNode("div", { class: "ml-[10px]" }, [
                                    createVNode("div", { class: "text-[#999]" }, "\u4F11\u5B66\u5E74\u9650"),
                                    createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_c3 = unref(majorDetail)) == null ? void 0 : _c3.xyNx)), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("div", { class: "w-[42px] h-[42px] bg-[#7C92FF] flex items-center justify-center rounded-[8px]" }, [
                                    createVNode("i", { class: "iconfont icon-XX_017 font-bold text-white iconSize" })
                                  ]),
                                  createVNode("div", { class: "ml-[10px]" }, [
                                    createVNode("div", { class: "text-[#999]" }, "\u6388\u4E88\u5B66\u4F4D"),
                                    createVNode("div", { class: "mt-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_d3 = unref(majorDetail)) == null ? void 0 : _d3.syxw)), 1)
                                  ])
                                ]),
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode("div", { class: "w-[42px] h-[42px] bg-[#5AB9FF] flex items-center justify-center rounded-[8px]" }, [
                                    createVNode("i", { class: "iconfont icon-yulebao font-bold text-white iconSize" })
                                  ]),
                                  createVNode("div", { class: "ml-[10px]" }, [
                                    createVNode("div", { class: "text-[#999]" }, "\u5E73\u5747\u85AA\u916C"),
                                    createVNode("div", { class: "mt-[5px] text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_e2 = unref(majorDetail)) == null ? void 0 : _e2.pjxz))), 1)
                                  ])
                                ])
                              ];
                            }),
                            _: 1
                          })
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        if ((_a = unref(majorDetail)) == null ? void 0 : _a.xkJy) {
          _push(`<div class="p-[15px_30px] bg-[#F5F5F5]" data-v-10c73ce3><div data-v-10c73ce3><i class="iconfont icon-wodexuanke font-bold" data-v-10c73ce3></i><span class="ml-[15px]" data-v-10c73ce3>\u9009\u79D1\u5EFA\u8BAE\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b = unref(majorDetail)) == null ? void 0 : _b.xkJy))}</span></div><div class="my-[10px]" data-v-10c73ce3><i class="iconfont icon-kaoyan font-bold" data-v-10c73ce3></i><span class="ml-[15px]" data-v-10c73ce3>\u8003\u7814\u65B9\u5411\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_c = unref(majorDetail)) == null ? void 0 : _c.graduateInterestStr))}</span></div><div data-v-10c73ce3><i class="iconfont icon-baomingrenshu font-bold" data-v-10c73ce3></i><span class="ml-[15px]" data-v-10c73ce3>\u793E\u4F1A\u540D\u4EBA\uFF1A ${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_d = unref(majorDetail)) == null ? void 0 : _d.celebrity))}</span></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(ssrRenderComponent(_component_a_tabs, {
          "active-key": unref(form).activeTabKey,
          "onUpdate:activeKey": ($event) => unref(form).activeTabKey = $event,
          animation: "",
          class: "mt-[20px]",
          onChange: changeTabs
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_tab_pane, { key: "recap" }, {
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([unref(form).activeTabKey === "recap" ? "text-[#657fff] font-bold" : "", "text-[18px]"])}" data-v-10c73ce3${_scopeId2}> \u4E13\u4E1A\u6982\u51B5 </div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["text-[18px]", unref(form).activeTabKey === "recap" ? "text-[#657fff] font-bold" : ""]
                      }, " \u4E13\u4E1A\u6982\u51B5 ", 2)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_zs_major_recap, { data: unref(majorDetail) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_zs_major_recap, { data: unref(majorDetail) }, null, 8, ["data"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_tab_pane, { key: "decode" }, {
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([
                      unref(form).activeTabKey === "decode" ? "text-[#657fff] font-bold" : "",
                      "text-[18px]"
                    ])}" data-v-10c73ce3${_scopeId2}> \u4E13\u4E1A\u89E3\u8BFB </div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: [
                          "text-[18px]",
                          unref(form).activeTabKey === "decode" ? "text-[#657fff] font-bold" : ""
                        ]
                      }, " \u4E13\u4E1A\u89E3\u8BFB ", 2)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_client_only, null, {}, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_client_only, null, {
                        default: withCtx(() => {
                          var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i;
                          return [
                            createVNode("div", { class: "leading-[18px]" }, [
                              createVNode("div", null, "\u4E00\u3001" + toDisplayString((_a2 = unref(majorDetail)) == null ? void 0 : _a2.zymc) + "\u662F\u4EC0\u4E48?", 1),
                              createVNode("div", { class: "indent-[2rem] mt-[5px] mb-[20px]" }, toDisplayString((_b2 = unref(majorDetail)) == null ? void 0 : _b2.ssm), 1),
                              createVNode("div", null, "\u4E8C\u3001" + toDisplayString((_c2 = unref(majorDetail)) == null ? void 0 : _c2.zymc) + "\u5B66\u4EC0\u4E48?", 1),
                              createVNode("div", { class: "indent-[2rem] mt-[5px] mb-[20px]" }, toDisplayString((_d2 = unref(majorDetail)) == null ? void 0 : _d2.xsm), 1),
                              createVNode("div", null, "\u4E09\u3001" + toDisplayString((_e = unref(majorDetail)) == null ? void 0 : _e.zymc) + "\u5E72\u4EC0\u4E48?", 1),
                              createVNode("div", { class: "indent-[2rem] mt-[5px] mb-[20px]" }, toDisplayString((_f = unref(majorDetail)) == null ? void 0 : _f.gsm), 1),
                              ((_g = unref(majorDetail)) == null ? void 0 : _g.job) ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode("div", null, "\u56DB\u3001" + toDisplayString((_h = unref(majorDetail)) == null ? void 0 : _h.zymc) + "\u4E13\u4E1A\u5C31\u4E1A\u60C5\u51B5", 1),
                                createVNode("div", {
                                  class: "indent-[2rem] mt-[5px] mb-[20px]",
                                  innerHTML: (_i = unref(majorDetail)) == null ? void 0 : _i.job
                                }, null, 8, ["innerHTML"])
                              ])) : createCommentVNode("", true)
                            ])
                          ];
                        }),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_tab_pane, { key: "prospect" }, {
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([
                      unref(form).activeTabKey === "prospect" ? "text-[#657fff] font-bold" : "",
                      "text-[18px]"
                    ])}" data-v-10c73ce3${_scopeId2}> \u5C31\u4E1A\u524D\u666F </div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: [
                          "text-[18px]",
                          unref(form).activeTabKey === "prospect" ? "text-[#657fff] font-bold" : ""
                        ]
                      }, " \u5C31\u4E1A\u524D\u666F ", 2)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_zs_major_job_prospects, { data: unref(majorDetail) }, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_zs_major_job_prospects, { data: unref(majorDetail) }, null, 8, ["data"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_tab_pane, { key: "school" }, {
                title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([
                      unref(form).activeTabKey === "school" ? "text-[#657fff] font-bold" : "",
                      "text-[18px]"
                    ])}" data-v-10c73ce3${_scopeId2}> \u5F00\u8BBE\u9662\u6821 </div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: [
                          "text-[18px]",
                          unref(form).activeTabKey === "school" ? "text-[#657fff] font-bold" : ""
                        ]
                      }, " \u5F00\u8BBE\u9662\u6821 ", 2)
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(form).activeTabKey === "school") {
                      _push3(ssrRenderComponent(_component_zs_major_open_college, {
                        data: unref(schoolData).list,
                        params: { ...unref(schoolParams), ...unref(pagination), total: unref(schoolData).total },
                        loading: unref(schoolStatus) === "pending",
                        onChange: changeSchoolParams,
                        onChangePage: unref(onPageChange),
                        onChangeSize: unref(onPageSizeChange)
                      }, null, _parent3, _scopeId2));
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      unref(form).activeTabKey === "school" ? (openBlock(), createBlock(_component_zs_major_open_college, {
                        key: 0,
                        data: unref(schoolData).list,
                        params: { ...unref(schoolParams), ...unref(pagination), total: unref(schoolData).total },
                        loading: unref(schoolStatus) === "pending",
                        onChange: changeSchoolParams,
                        onChangePage: unref(onPageChange),
                        onChangeSize: unref(onPageSizeChange)
                      }, null, 8, ["data", "params", "loading", "onChangePage", "onChangeSize"])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_tab_pane, { key: "recap" }, {
                  title: withCtx(() => [
                    createVNode("div", {
                      class: ["text-[18px]", unref(form).activeTabKey === "recap" ? "text-[#657fff] font-bold" : ""]
                    }, " \u4E13\u4E1A\u6982\u51B5 ", 2)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_zs_major_recap, { data: unref(majorDetail) }, null, 8, ["data"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_tab_pane, { key: "decode" }, {
                  title: withCtx(() => [
                    createVNode("div", {
                      class: [
                        "text-[18px]",
                        unref(form).activeTabKey === "decode" ? "text-[#657fff] font-bold" : ""
                      ]
                    }, " \u4E13\u4E1A\u89E3\u8BFB ", 2)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_client_only, null, {
                      default: withCtx(() => {
                        var _a2, _b2, _c2, _d2, _e, _f, _g, _h, _i;
                        return [
                          createVNode("div", { class: "leading-[18px]" }, [
                            createVNode("div", null, "\u4E00\u3001" + toDisplayString((_a2 = unref(majorDetail)) == null ? void 0 : _a2.zymc) + "\u662F\u4EC0\u4E48?", 1),
                            createVNode("div", { class: "indent-[2rem] mt-[5px] mb-[20px]" }, toDisplayString((_b2 = unref(majorDetail)) == null ? void 0 : _b2.ssm), 1),
                            createVNode("div", null, "\u4E8C\u3001" + toDisplayString((_c2 = unref(majorDetail)) == null ? void 0 : _c2.zymc) + "\u5B66\u4EC0\u4E48?", 1),
                            createVNode("div", { class: "indent-[2rem] mt-[5px] mb-[20px]" }, toDisplayString((_d2 = unref(majorDetail)) == null ? void 0 : _d2.xsm), 1),
                            createVNode("div", null, "\u4E09\u3001" + toDisplayString((_e = unref(majorDetail)) == null ? void 0 : _e.zymc) + "\u5E72\u4EC0\u4E48?", 1),
                            createVNode("div", { class: "indent-[2rem] mt-[5px] mb-[20px]" }, toDisplayString((_f = unref(majorDetail)) == null ? void 0 : _f.gsm), 1),
                            ((_g = unref(majorDetail)) == null ? void 0 : _g.job) ? (openBlock(), createBlock("div", { key: 0 }, [
                              createVNode("div", null, "\u56DB\u3001" + toDisplayString((_h = unref(majorDetail)) == null ? void 0 : _h.zymc) + "\u4E13\u4E1A\u5C31\u4E1A\u60C5\u51B5", 1),
                              createVNode("div", {
                                class: "indent-[2rem] mt-[5px] mb-[20px]",
                                innerHTML: (_i = unref(majorDetail)) == null ? void 0 : _i.job
                              }, null, 8, ["innerHTML"])
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_tab_pane, { key: "prospect" }, {
                  title: withCtx(() => [
                    createVNode("div", {
                      class: [
                        "text-[18px]",
                        unref(form).activeTabKey === "prospect" ? "text-[#657fff] font-bold" : ""
                      ]
                    }, " \u5C31\u4E1A\u524D\u666F ", 2)
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_zs_major_job_prospects, { data: unref(majorDetail) }, null, 8, ["data"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_tab_pane, { key: "school" }, {
                  title: withCtx(() => [
                    createVNode("div", {
                      class: [
                        "text-[18px]",
                        unref(form).activeTabKey === "school" ? "text-[#657fff] font-bold" : ""
                      ]
                    }, " \u5F00\u8BBE\u9662\u6821 ", 2)
                  ]),
                  default: withCtx(() => [
                    unref(form).activeTabKey === "school" ? (openBlock(), createBlock(_component_zs_major_open_college, {
                      key: 0,
                      data: unref(schoolData).list,
                      params: { ...unref(schoolParams), ...unref(pagination), total: unref(schoolData).total },
                      loading: unref(schoolStatus) === "pending",
                      onChange: changeSchoolParams,
                      onChangePage: unref(onPageChange),
                      onChangeSize: unref(onPageSizeChange)
                    }, null, 8, ["data", "params", "loading", "onChangePage", "onChangeSize"])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_zs_no_data, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-10c73ce3${_scopeId}>\u7CDF\u7CD5\uFF0C\u9875\u9762\u597D\u50CF\u6CA1\u627E\u5230</div>`);
            } else {
              return [
                createVNode("div", null, "\u7CDF\u7CD5\uFF0C\u9875\u9762\u597D\u50CF\u6CA1\u627E\u5230")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/major/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-10c73ce3"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-0690ac2b.mjs.map
