import { L as List, a as ListItem, b as ListItemMeta } from "./index-7a08c899.js";
import { S as Space } from "./index-8bcd588e.js";
import { T as Tooltip } from "./index-5f48af9c.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-99c863e4.js";
import { T as Tabs, a as TabPane } from "./index-3697759d.js";
import { _ as _sfc_main$c } from "./index-cb5bd3b8.js";
import { _ as __nuxt_component_1, g as useRoute, e as useAsyncData, A as API_URLS, f as useNuxtApp, b as useUser, u as useHead, d as useWebsiteInformation, a as useRouter } from "../server.mjs";
import { G as Grid, a as GridItem, R as Row, C as Col } from "./index-4ecc34e0.js";
import { _ as _export_sfc, g as getPrefixCls, i as isNumber, q as useFormItem, a as isUndefined, c as isNull, k as isString, d as isObject, s as setGlobalConfig, n as getComponentPrefix } from "./use-teleport-container-1599a5a4.js";
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toRefs, toRef, ref, watch, createVNode, mergeProps, unref, useSSRContext, withCtx, toDisplayString, createBlock, Fragment, renderList, createTextVNode, createCommentVNode, withAsyncContext } from "vue";
import NP from "number-precision";
import { _ as __nuxt_component_11$1 } from "./index-012b562f.js";
import { T as Table } from "./index-6a06d329.js";
import { _ as _sfc_main$b } from "./index-9a6e8b24.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderList, ssrRenderAttr } from "vue/server-renderer";
import { I as Image } from "./index-25609e16.js";
/* empty css                *//* empty css                */import "./index-11d38f35.js";
/* empty css                */import { S as Select } from "./index-90aba227.js";
import { b as Input, a as IconSearch } from "./index-dd449d78.js";
import "./index-08fdf206.js";
import "./index-f6f6f2a5.js";
import { a as RadioGroup, R as Radio } from "./index-63900e07.js";
import { u as useForm } from "./useArco-b2247a5c.js";
import { t as textFormat, a as turnThousandth, b as textCompany, f as formatDate } from "./index-a008b2db.js";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$d } from "./index-d6ea50b9.js";
import "destr";
import "devalue";
import "klona";
import { b as NO_LIMIT_NULL_OPTIONS, f as findOptions } from "./options-7ec13930.js";
import { I as IconArrowLeft } from "./index-34855079.js";
import "ufo";
import "hookable";
import "./use-children-components-d7e0e48f.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "cookie-es";
import "ohash";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "@iconify/vue";
import "defu";
import "./get-value-by-path-11166a95.js";
import "echarts/core";
import "echarts/components";
import "echarts/charts";
import "echarts/features";
import "echarts/renderers";
import "@vueuse/core";
import "./index-3943ca28.js";
import "resize-observer-polyfill";
import "./NuxtImg-9bcbe2bb.js";
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  name: "IconStarFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-star-fill`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$3 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M22.683 5.415c.568-1.043 2.065-1.043 2.634 0l5.507 10.098a1.5 1.5 0 0 0 1.04.756l11.306 2.117c1.168.219 1.63 1.642.814 2.505l-7.902 8.359a1.5 1.5 0 0 0-.397 1.223l1.48 11.407c.153 1.177-1.058 2.057-2.131 1.548l-10.391-4.933a1.5 1.5 0 0 0-1.287 0l-10.39 4.933c-1.073.51-2.284-.37-2.131-1.548l1.48-11.407a1.5 1.5 0 0 0-.398-1.223L4.015 20.89c-.816-.863-.353-2.286.814-2.505l11.306-2.117a1.5 1.5 0 0 0 1.04-.756l5.508-10.098Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$3, 14, _hoisted_1$3);
}
var _IconStarFill = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$3]]);
const IconStarFill = Object.assign(_IconStarFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconStarFill.name, _IconStarFill);
  }
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  name: "IconFaceFrownFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-face-frown-fill`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$2 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm7.322-26.873a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-14.646 0a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25ZM31.68 32.88a1.91 1.91 0 0 1-2.694-.176 6.66 6.66 0 0 0-5.026-2.28c-1.918 0-3.701.81-4.962 2.207a1.91 1.91 0 0 1-2.834-2.559 10.476 10.476 0 0 1 7.796-3.465c3.063 0 5.916 1.321 7.896 3.58a1.909 1.909 0 0 1-.176 2.693Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$2, 14, _hoisted_1$2);
}
var _IconFaceFrownFill = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$2]]);
const IconFaceFrownFill = Object.assign(_IconFaceFrownFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFaceFrownFill.name, _IconFaceFrownFill);
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "IconFaceMehFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-face-meh-fill`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1$1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm7.321-26.873a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-14.646 0a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25ZM15.999 30a2 2 0 0 1 2-2h12a2 2 0 1 1 0 4H18a2 2 0 0 1-2-2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3$1, 14, _hoisted_1$1);
}
var _IconFaceMehFill = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$1]]);
const IconFaceMehFill = Object.assign(_IconFaceMehFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFaceMehFill.name, _IconFaceMehFill);
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  name: "IconFaceSmileFill",
  props: {
    size: {
      type: [Number, String]
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    strokeLinecap: {
      type: String,
      default: "butt",
      validator: (value) => {
        return ["butt", "round", "square"].includes(value);
      }
    },
    strokeLinejoin: {
      type: String,
      default: "miter",
      validator: (value) => {
        return ["arcs", "bevel", "miter", "miter-clip", "round"].includes(value);
      }
    },
    rotate: Number,
    spin: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("icon");
    const cls = computed(() => [prefixCls, `${prefixCls}-face-smile-fill`, { [`${prefixCls}-spin`]: props.spin }]);
    const innerStyle = computed(() => {
      const styles = {};
      if (props.size) {
        styles.fontSize = isNumber(props.size) ? `${props.size}px` : props.size;
      }
      if (props.rotate) {
        styles.transform = `rotate(${props.rotate}deg)`;
      }
      return styles;
    });
    const onClick = (ev) => {
      emit("click", ev);
    };
    return {
      cls,
      innerStyle,
      onClick
    };
  }
});
const _hoisted_1 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm7.321-26.873a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-14.646 0a2.625 2.625 0 1 1 0 5.25 2.625 2.625 0 0 1 0-5.25Zm-.355 9.953a1.91 1.91 0 0 1 2.694.177 6.66 6.66 0 0 0 5.026 2.279c1.918 0 3.7-.81 4.961-2.206a1.91 1.91 0 0 1 2.834 2.558 10.476 10.476 0 0 1-7.795 3.466 10.477 10.477 0 0 1-7.897-3.58 1.91 1.91 0 0 1 .177-2.694Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3 = [
  _hoisted_2
];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", {
    viewBox: "0 0 48 48",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    stroke: "currentColor",
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.innerStyle),
    "stroke-width": _ctx.strokeWidth,
    "stroke-linecap": _ctx.strokeLinecap,
    "stroke-linejoin": _ctx.strokeLinejoin,
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, _hoisted_3, 14, _hoisted_1);
}
var _IconFaceSmileFill = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render]]);
const IconFaceSmileFill = Object.assign(_IconFaceSmileFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFaceSmileFill.name, _IconFaceSmileFill);
  }
});
var _Rate = /* @__PURE__ */ defineComponent({
  name: "Rate",
  props: {
    count: {
      type: Number,
      default: 5
    },
    modelValue: {
      type: Number,
      default: void 0
    },
    defaultValue: {
      type: Number,
      default: 0
    },
    allowHalf: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    grading: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    color: {
      type: [String, Object]
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value) => true,
    "hoverChange": (value) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      modelValue
    } = toRefs(props);
    const prefixCls = getPrefixCls("rate");
    const {
      mergedDisabled: _mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled: toRef(props, "disabled")
    });
    const _value = ref(props.defaultValue);
    const animation = ref(false);
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = 0;
      }
    });
    const hoverIndex = ref(0);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    const displayIndex = computed(() => {
      const fixedValue = props.allowHalf ? NP.times(NP.round(NP.divide(computedValue.value, 0.5), 0), 0.5) : Math.round(computedValue.value);
      return hoverIndex.value || fixedValue;
    });
    const mergedDisabled = computed(() => _mergedDisabled.value || props.readonly);
    const indexArray = computed(() => [...Array(props.grading ? 5 : props.count)]);
    const customColor = computed(() => {
      var _a;
      if (isString(props.color)) {
        return indexArray.value.map(() => props.color);
      }
      if (isObject(props.color)) {
        const sortedKeys = Object.keys(props.color).map((key) => Number(key)).sort((a, b) => b - a);
        let threshold = (_a = sortedKeys.pop()) != null ? _a : indexArray.value.length;
        return indexArray.value.map((_, index2) => {
          var _a2;
          if (index2 + 1 > threshold) {
            threshold = (_a2 = sortedKeys.pop()) != null ? _a2 : threshold;
          }
          return props.color[String(threshold)];
        });
      }
      return void 0;
    });
    const resetHoverIndex = () => {
      if (hoverIndex.value) {
        hoverIndex.value = 0;
        emit("hoverChange", 0);
      }
    };
    const handleMouseEnter = (index2, isHalf) => {
      const newHoverIndex = isHalf && props.allowHalf ? index2 + 0.5 : index2 + 1;
      if (newHoverIndex !== hoverIndex.value) {
        hoverIndex.value = newHoverIndex;
        emit("hoverChange", newHoverIndex);
      }
    };
    const handleClick = (index2, isHalf) => {
      var _a, _b, _c, _d;
      const newValue = isHalf && props.allowHalf ? index2 + 0.5 : index2 + 1;
      animation.value = true;
      if (newValue !== computedValue.value) {
        _value.value = newValue;
        emit("update:modelValue", newValue);
        emit("change", newValue);
        (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a);
      } else if (props.allowClear) {
        _value.value = 0;
        emit("update:modelValue", 0);
        emit("change", 0);
        (_d = (_c = eventHandlers.value) == null ? void 0 : _c.onChange) == null ? void 0 : _d.call(_c);
      }
    };
    const handleAnimationEnd = (index2) => {
      if (animation.value && index2 + 1 >= computedValue.value - 1) {
        animation.value = false;
      }
    };
    const renderGradingCharacter = (index2, displayIndex2) => {
      if (index2 > displayIndex2) {
        return createVNode(IconFaceMehFill, null, null);
      }
      if (displayIndex2 <= 2) {
        return createVNode(IconFaceFrownFill, null, null);
      }
      if (displayIndex2 <= 3) {
        return createVNode(IconFaceMehFill, null, null);
      }
      return createVNode(IconFaceSmileFill, null, null);
    };
    const getAriaProps = (index2, isHalf = false) => {
      return {
        "role": "radio",
        "aria-checked": index2 + (isHalf ? 0.5 : 1) <= computedValue.value,
        "aria-setsize": indexArray.value.length,
        "aria-posinset": index2 + (isHalf ? 0.5 : 1)
      };
    };
    const renderElement = (index2) => {
      if (props.grading) {
        return renderGradingCharacter(index2, displayIndex.value);
      }
      if (slots.character) {
        return slots.character({
          index: index2
        });
      }
      return createVNode(IconStarFill, null, null);
    };
    const renderCharacter = (index2) => {
      const leftProps = mergedDisabled.value ? {} : {
        onMouseenter: () => handleMouseEnter(index2, true),
        onClick: () => handleClick(index2, true)
      };
      const rightProps = mergedDisabled.value ? {} : {
        onMouseenter: () => handleMouseEnter(index2, false),
        onClick: () => handleClick(index2, false)
      };
      const style = animation.value ? {
        animationDelay: `${50 * index2}ms`
      } : void 0;
      const parseDisplayIndex = Math.ceil(displayIndex.value) - 1;
      const leftStyle = customColor.value && props.allowHalf && index2 + 0.5 === displayIndex.value ? {
        color: customColor.value[parseDisplayIndex]
      } : void 0;
      const rightStyle = customColor.value && index2 + 1 <= displayIndex.value ? {
        color: customColor.value[parseDisplayIndex]
      } : void 0;
      const cls2 = [`${prefixCls}-character`, {
        [`${prefixCls}-character-half`]: props.allowHalf && index2 + 0.5 === displayIndex.value,
        [`${prefixCls}-character-full`]: index2 + 1 <= displayIndex.value,
        [`${prefixCls}-character-scale`]: animation.value && index2 + 1 < computedValue.value
      }];
      return createVNode("div", mergeProps({
        "class": cls2,
        "style": style
      }, !props.allowHalf ? getAriaProps(index2) : void 0, {
        "onAnimationend": () => handleAnimationEnd(index2)
      }), [createVNode("div", mergeProps({
        "class": `${prefixCls}-character-left`,
        "style": leftStyle
      }, leftProps, props.allowHalf ? getAriaProps(index2, true) : void 0), [renderElement(index2)]), createVNode("div", mergeProps({
        "class": `${prefixCls}-character-right`,
        "style": rightStyle
      }, rightProps, props.allowHalf ? getAriaProps(index2) : void 0), [renderElement(index2)])]);
    };
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-readonly`]: props.readonly,
      [`${prefixCls}-disabled`]: _mergedDisabled.value
    }]);
    return () => createVNode("div", {
      "class": cls.value,
      "onMouseleave": resetHoverIndex
    }, [indexArray.value.map((_, index2) => renderCharacter(index2))]);
  }
});
const Rate = Object.assign(_Rate, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Rate.name, _Rate);
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    width: { default: "150px" },
    height: { default: "150px" },
    value: { default: 0 },
    color: { default: "#FFA864" },
    maxValue: { default: 5 }
  },
  setup(__props) {
    const props = __props;
    const chartOption = computed(() => {
      return {
        //饼图中间显示文字
        graphic: {
          type: "text",
          left: "center",
          top: "center",
          style: {
            text: props.value,
            //文字内容
            fill: props.color,
            //文字颜色
            fontSize: 18,
            //文字字号
            fontWeight: 700
          }
        },
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            //第一张圆环
            type: "pie",
            radius: ["77%", "90%"],
            center: ["50%", "50%"],
            // 隐藏指示线
            labelLine: { show: false },
            //隐藏圆环上文字
            label: {
              show: false
            },
            data: [
              //value当前进度 + 颜色
              {
                value: props.value,
                itemStyle: {
                  color: props.color,
                  borderRadius: "25%"
                }
              },
              {
                value: props.maxValue - props.value,
                itemStyle: {
                  color: "#f8f8f8"
                }
              }
            ]
          }
        ]
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_e_charts = _sfc_main$b;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: { [_ctx.width]: true, [_ctx.height]: true }
      }, _attrs))}>`);
      _push(ssrRenderComponent(_component_zs_e_charts, { options: unref(chartOption) }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsCircleIndex/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const index$1 = "";
const index = "";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => ({}) }
  },
  setup(__props) {
    const { form } = useForm(() => ({
      activeTabKey: "1",
      isHistoryOpen: false,
      // 历史沿革展开收起
      isSchoolDetail: false,
      // 学校详情展开收起
      height: 0
    }));
    const columns = [
      {
        title: "序号",
        dataIndex: "index",
        align: "center",
        headerCellStyle: {
          fontSize: "14px",
          backgroundColor: "#EDEDED",
          color: "#999999"
        }
      },
      {
        title: "签约单位",
        dataIndex: "name",
        align: "center",
        ellipsis: true,
        tooltip: true,
        headerCellStyle: {
          fontSize: "14px",
          backgroundColor: "#EDEDED",
          color: "#999999"
        }
      },
      {
        title: "人数",
        dataIndex: "value",
        align: "center",
        ellipsis: true,
        tooltip: true,
        headerCellStyle: {
          fontSize: "14px",
          backgroundColor: "#EDEDED",
          color: "#999999"
        },
        cellStyle: {
          color: "#FFA864"
        }
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_title = _sfc_main$c;
      const _component_client_only = __nuxt_component_1;
      const _component_a_grid = Grid;
      const _component_a_grid_item = GridItem;
      const _component_a_rate = Rate;
      const _component_a_tabs = Tabs;
      const _component_a_tab_pane = TabPane;
      const _component_zs_proportion = __nuxt_component_11$1;
      const _component_a_table = Table;
      const _component_zs_circle_index = _sfc_main$6;
      const _component_a_image = Image;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-5ad60943>`);
      if (_ctx.data.provincialBuilding) {
        _push(`<div data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "部省共建",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[10px]" data-v-5ad60943>${ssrInterpolate(_ctx.data.provincialBuilding)}</div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isHistoryEntities) {
        _push(`<div data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "历史沿革",
          size: "small",
          class: "mt-[30px]"
        }, null, _parent));
        _push(`<div class="mt-[10px]" data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`<div class="flex items-center justify-center" data-v-5ad60943><div class="expandMore" data-v-5ad60943>${ssrInterpolate(unref(form).isHistoryOpen ? "收起更多" : "展开更多")}</div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.js) {
        _push(`<div data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "院校详情",
          size: "small",
          class: "mt-[30px]"
        }, null, _parent));
        _push(`<div class="mt-[10px]" data-v-5ad60943><div class="${ssrRenderClass([unref(form).isSchoolDetail ? "" : "mle", "leading-[20px]"])}" data-v-5ad60943>${_ctx.data.js}</div></div><div class="flex items-center justify-center mt-[20px]" data-v-5ad60943><div class="expandMore" data-v-5ad60943>${ssrInterpolate(unref(form).isSchoolDetail ? "收起更多" : "展开更多")}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isRankEntities) {
        _push(`<div data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "院校排名",
          size: "small",
          class: "mt-[30px]"
        }, null, _parent));
        _push(`<div class="mt-[10px]" data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 8,
          colGap: 12,
          rowGap: 16
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.data.rankEntities, (item, index2) => {
                _push2(ssrRenderComponent(_component_a_grid_item, {
                  key: index2,
                  class: "flex items-center flex-col justify-center w-[120px] h-[100px] border-solid border border-[#EDEDED] rounded-[4px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div data-v-5ad60943${_scopeId2}>${ssrInterpolate(item.title)}</div><div class="text-[#FFA864] text-[18px] font-bold mt-[20px]" data-v-5ad60943${_scopeId2}>${ssrInterpolate(item.rankIn === "-" ? "" : item.rankIn)}${ssrInterpolate(item.rankOut === "-" ? "" : "/" + item.rankOut)}</div>`);
                    } else {
                      return [
                        createVNode("div", null, toDisplayString(item.title), 1),
                        createVNode("div", { class: "text-[#FFA864] text-[18px] font-bold mt-[20px]" }, toDisplayString(item.rankIn === "-" ? "" : item.rankIn) + toDisplayString(item.rankOut === "-" ? "" : "/" + item.rankOut), 1)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.rankEntities, (item, index2) => {
                  return openBlock(), createBlock(_component_a_grid_item, {
                    key: index2,
                    class: "flex items-center flex-col justify-center w-[120px] h-[100px] border-solid border border-[#EDEDED] rounded-[4px]"
                  }, {
                    default: withCtx(() => [
                      createVNode("div", null, toDisplayString(item.title), 1),
                      createVNode("div", { class: "text-[#FFA864] text-[18px] font-bold mt-[20px]" }, toDisplayString(item.rankIn === "-" ? "" : item.rankIn) + toDisplayString(item.rankOut === "-" ? "" : "/" + item.rankOut), 1)
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
      _push(ssrRenderComponent(_component_zs_title, {
        title: "科研实力",
        size: "small",
        class: "mt-[30px]"
      }, null, _parent));
      _push(`<div class="mt-[10px]" data-v-5ad60943>`);
      _push(ssrRenderComponent(_component_a_grid, {
        cols: 5,
        colGap: 12,
        rowGap: 16
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_grid_item, { class: "flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center" data-v-5ad60943${_scopeId2}><div class="flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" data-v-5ad60943${_scopeId2}><i class="iconfont icon-goushu font-bold text-white" data-v-5ad60943${_scopeId2}></i></div><span class="ml-[5px]" data-v-5ad60943${_scopeId2}>国家重点学科</span></div><div class="text-[18px] font-bold mt-[20px]" data-v-5ad60943${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.gjZdXk, "--"))}<span class="text-[70%]" data-v-5ad60943${_scopeId2}>个</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" }, [
                        createVNode("i", { class: "iconfont icon-goushu font-bold text-white" })
                      ]),
                      createVNode("span", { class: "ml-[5px]" }, "国家重点学科")
                    ]),
                    createVNode("div", { class: "text-[18px] font-bold mt-[20px]" }, [
                      createTextVNode(toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.gjZdXk, "--")), 1),
                      createVNode("span", { class: "text-[70%]" }, "个")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_grid_item, { class: "flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center" data-v-5ad60943${_scopeId2}><div class="flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" data-v-5ad60943${_scopeId2}><i class="iconfont icon-weixing font-bold text-white" data-v-5ad60943${_scopeId2}></i></div><span class="ml-[5px]" data-v-5ad60943${_scopeId2}>保研星级</span></div><div class="mt-[12px]" data-v-5ad60943${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_rate, {
                    modelValue: _ctx.data.byxj,
                    "onUpdate:modelValue": ($event) => _ctx.data.byxj = $event,
                    readonly: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" }, [
                        createVNode("i", { class: "iconfont icon-weixing font-bold text-white" })
                      ]),
                      createVNode("span", { class: "ml-[5px]" }, "保研星级")
                    ]),
                    createVNode("div", { class: "mt-[12px]" }, [
                      createVNode(_component_a_rate, {
                        modelValue: _ctx.data.byxj,
                        "onUpdate:modelValue": ($event) => _ctx.data.byxj = $event,
                        readonly: ""
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_grid_item, { class: "flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center" data-v-5ad60943${_scopeId2}><div class="flex items-center justify-center p-[2px] rounded-[4px] bg-[#FFA864] w-[20px] h-[20px]" data-v-5ad60943${_scopeId2}><i class="iconfont icon-bo font-bold text-white" data-v-5ad60943${_scopeId2}></i></div><span class="ml-[5px]" data-v-5ad60943${_scopeId2}>博士点<span class="text-[#999] text-[12px]" data-v-5ad60943${_scopeId2}>(一级/二级)</span></span></div><div class="text-[18px] font-bold mt-[20px]" data-v-5ad60943${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.bsdOne, "--"))}<span class="text-[70%]" data-v-5ad60943${_scopeId2}>个</span>/${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.bsdTwo, "--"))}<span class="text-[70%]" data-v-5ad60943${_scopeId2}>个</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "flex items-center justify-center p-[2px] rounded-[4px] bg-[#FFA864] w-[20px] h-[20px]" }, [
                        createVNode("i", { class: "iconfont icon-bo font-bold text-white" })
                      ]),
                      createVNode("span", { class: "ml-[5px]" }, [
                        createTextVNode("博士点"),
                        createVNode("span", { class: "text-[#999] text-[12px]" }, "(一级/二级)")
                      ])
                    ]),
                    createVNode("div", { class: "text-[18px] font-bold mt-[20px]" }, [
                      createTextVNode(toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.bsdOne, "--")), 1),
                      createVNode("span", { class: "text-[70%]" }, "个"),
                      createTextVNode("/" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.bsdTwo, "--")), 1),
                      createVNode("span", { class: "text-[70%]" }, "个")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_grid_item, { class: "flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex items-center" data-v-5ad60943${_scopeId2}><div class="flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" data-v-5ad60943${_scopeId2}><i class="iconfont icon-shuo font-bold text-white" data-v-5ad60943${_scopeId2}></i></div><span class="ml-[5px]" data-v-5ad60943${_scopeId2}>硕士点<span class="text-[#999] text-[12px]" data-v-5ad60943${_scopeId2}>(一级/二级)</span></span></div><div class="text-[18px] font-bold mt-[20px]" data-v-5ad60943${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.ssdOne, "--"))}<span class="text-[70%]" data-v-5ad60943${_scopeId2}>个</span>/${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.ssdTwo, "--"))}<span class="text-[70%]" data-v-5ad60943${_scopeId2}>个</span></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" }, [
                        createVNode("i", { class: "iconfont icon-shuo font-bold text-white" })
                      ]),
                      createVNode("span", { class: "ml-[5px]" }, [
                        createTextVNode("硕士点"),
                        createVNode("span", { class: "text-[#999] text-[12px]" }, "(一级/二级)")
                      ])
                    ]),
                    createVNode("div", { class: "text-[18px] font-bold mt-[20px]" }, [
                      createTextVNode(toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.ssdOne, "--")), 1),
                      createVNode("span", { class: "text-[70%]" }, "个"),
                      createTextVNode("/" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.ssdTwo, "--")), 1),
                      createVNode("span", { class: "text-[70%]" }, "个")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_grid_item, { class: "flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" }, [
                      createVNode("i", { class: "iconfont icon-goushu font-bold text-white" })
                    ]),
                    createVNode("span", { class: "ml-[5px]" }, "国家重点学科")
                  ]),
                  createVNode("div", { class: "text-[18px] font-bold mt-[20px]" }, [
                    createTextVNode(toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.gjZdXk, "--")), 1),
                    createVNode("span", { class: "text-[70%]" }, "个")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_grid_item, { class: "flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" }, [
                      createVNode("i", { class: "iconfont icon-weixing font-bold text-white" })
                    ]),
                    createVNode("span", { class: "ml-[5px]" }, "保研星级")
                  ]),
                  createVNode("div", { class: "mt-[12px]" }, [
                    createVNode(_component_a_rate, {
                      modelValue: _ctx.data.byxj,
                      "onUpdate:modelValue": ($event) => _ctx.data.byxj = $event,
                      readonly: ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_grid_item, { class: "flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex items-center justify-center p-[2px] rounded-[4px] bg-[#FFA864] w-[20px] h-[20px]" }, [
                      createVNode("i", { class: "iconfont icon-bo font-bold text-white" })
                    ]),
                    createVNode("span", { class: "ml-[5px]" }, [
                      createTextVNode("博士点"),
                      createVNode("span", { class: "text-[#999] text-[12px]" }, "(一级/二级)")
                    ])
                  ]),
                  createVNode("div", { class: "text-[18px] font-bold mt-[20px]" }, [
                    createTextVNode(toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.bsdOne, "--")), 1),
                    createVNode("span", { class: "text-[70%]" }, "个"),
                    createTextVNode("/" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.bsdTwo, "--")), 1),
                    createVNode("span", { class: "text-[70%]" }, "个")
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_grid_item, { class: "flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]" }, [
                      createVNode("i", { class: "iconfont icon-shuo font-bold text-white" })
                    ]),
                    createVNode("span", { class: "ml-[5px]" }, [
                      createTextVNode("硕士点"),
                      createVNode("span", { class: "text-[#999] text-[12px]" }, "(一级/二级)")
                    ])
                  ]),
                  createVNode("div", { class: "text-[18px] font-bold mt-[20px]" }, [
                    createTextVNode(toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.ssdOne, "--")), 1),
                    createVNode("span", { class: "text-[70%]" }, "个"),
                    createTextVNode("/" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.ssdTwo, "--")), 1),
                    createVNode("span", { class: "text-[70%]" }, "个")
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      if (_ctx.data.isLabEntities || _ctx.data.faculty) {
        _push(`<div class="mt-[20px]" data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_a_tabs, {
          type: "card-gutter",
          size: "large",
          modelValue: unref(form).activeTabKey,
          "onUpdate:modelValue": ($event) => unref(form).activeTabKey = $event,
          animation: ""
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.data.isLabEntities) {
                _push2(ssrRenderComponent(_component_a_tab_pane, { key: "1" }, {
                  title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-[16px]" data-v-5ad60943${_scopeId2}>实验室与研究机构</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "text-[16px]" }, "实验室与研究机构")
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="p-[0px_20px_10px] leading-[18px]" data-v-5ad60943${_scopeId2}><!--[-->`);
                      ssrRenderList(_ctx.data.labEntities, (item, index2) => {
                        _push3(`<div class="mb-[15px]" data-v-5ad60943${_scopeId2}><span class="font-bold" data-v-5ad60943${_scopeId2}>${ssrInterpolate(item.name + "·" + item.children.length + "个: ")}</span><span class="ml-[5px]" data-v-5ad60943${_scopeId2}>${ssrInterpolate(item.children.map((child) => child.name).join("、"))}</span></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      return [
                        createVNode("div", { class: "p-[0px_20px_10px] leading-[18px]" }, [
                          (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.labEntities, (item, index2) => {
                            return openBlock(), createBlock("div", {
                              key: index2,
                              class: "mb-[15px]"
                            }, [
                              createVNode("span", { class: "font-bold" }, toDisplayString(item.name + "·" + item.children.length + "个: "), 1),
                              createVNode("span", { class: "ml-[5px]" }, toDisplayString(item.children.map((child) => child.name).join("、")), 1)
                            ]);
                          }), 128))
                        ])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.data.faculty) {
                _push2(ssrRenderComponent(_component_a_tab_pane, { key: "2" }, {
                  title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-[16px]" data-v-5ad60943${_scopeId2}>师资力量</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "text-[16px]" }, "师资力量")
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="p-[0px_20px_10px] leading-[18px]" data-v-5ad60943${_scopeId2}>${ssrInterpolate(_ctx.data.faculty)}</div>`);
                    } else {
                      return [
                        createVNode("div", { class: "p-[0px_20px_10px] leading-[18px]" }, toDisplayString(_ctx.data.faculty), 1)
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
                _ctx.data.isLabEntities ? (openBlock(), createBlock(_component_a_tab_pane, { key: "1" }, {
                  title: withCtx(() => [
                    createVNode("div", { class: "text-[16px]" }, "实验室与研究机构")
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "p-[0px_20px_10px] leading-[18px]" }, [
                      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.labEntities, (item, index2) => {
                        return openBlock(), createBlock("div", {
                          key: index2,
                          class: "mb-[15px]"
                        }, [
                          createVNode("span", { class: "font-bold" }, toDisplayString(item.name + "·" + item.children.length + "个: "), 1),
                          createVNode("span", { class: "ml-[5px]" }, toDisplayString(item.children.map((child) => child.name).join("、")), 1)
                        ]);
                      }), 128))
                    ])
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.faculty ? (openBlock(), createBlock(_component_a_tab_pane, { key: "2" }, {
                  title: withCtx(() => [
                    createVNode("div", { class: "text-[16px]" }, "师资力量")
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "p-[0px_20px_10px] leading-[18px]" }, toDisplayString(_ctx.data.faculty), 1)
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      if (_ctx.data.isBysQydqlx || _ctx.data.isBysQydw) {
        _push(`<div class="mt-[30px]" data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "就业情况",
          size: "small"
        }, null, _parent));
        if (_ctx.data.isBysQydqlx) {
          _push(`<div data-v-5ad60943><div class="text-[16px] mt-[20px] mb-[10px]" data-v-5ad60943>毕业生签约地区流向</div><div class="mt-[10px] p-[20px_50px] border-solid border border-[#EDEDED] rounded-[4px]" data-v-5ad60943><!--[-->`);
          ssrRenderList(_ctx.data.bysQydqlx, (item, index2) => {
            _push(`<div class="mb-[30px] flex items-center" data-v-5ad60943><div class="mr-[56px]" data-v-5ad60943>${ssrInterpolate(index2 + 1)}</div><div class="flex-1" data-v-5ad60943><div data-v-5ad60943>${ssrInterpolate(item.title)}</div><div class="flex items-center justify-between mt-[10px]" data-v-5ad60943>`);
            _push(ssrRenderComponent(_component_zs_proportion, {
              width: item.width,
              class: "flex-1"
            }, null, _parent));
            _push(`<div class="ml-[20px]" data-v-5ad60943>${ssrInterpolate(item.width + "%")}</div></div></div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.isBysQydw) {
          _push(`<div data-v-5ad60943><div class="text-[16px] mt-[20px] mb-[10px]" data-v-5ad60943>毕业生就业单位</div>`);
          _push(ssrRenderComponent(_component_a_table, {
            class: "mt-[20px] cursor-pointer",
            "table-layout-fixed": "",
            columns,
            data: _ctx.data.bysQydw,
            bordered: { wrapper: true }
          }, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.xxzs || _ctx.data.shzs || _ctx.data.jyzs || _ctx.data.zhfs || _ctx.data.ssTj || _ctx.data.stTj) {
        _push(`<div class="mt-[30px]" data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "食宿条件",
          size: "small"
        }, null, _parent));
        _push(`<div class="h-[180px] p-[20px]" data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 8,
          colGap: 12,
          rowGap: 16
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.data.xxzs) {
                _push2(ssrRenderComponent(_component_a_grid_item, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_zs_circle_index, {
                        color: "#7C92FF",
                        value: _ctx.data.xxzs
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="text-center mt-[10px]" data-v-5ad60943${_scopeId2}>学习指数</div>`);
                    } else {
                      return [
                        createVNode(_component_zs_circle_index, {
                          color: "#7C92FF",
                          value: _ctx.data.xxzs
                        }, null, 8, ["value"]),
                        createVNode("div", { class: "text-center mt-[10px]" }, "学习指数")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.data.shzs) {
                _push2(ssrRenderComponent(_component_a_grid_item, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_zs_circle_index, {
                        color: "#5AB9FF",
                        value: _ctx.data.shzs
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="text-center mt-[10px]" data-v-5ad60943${_scopeId2}>生活指数</div>`);
                    } else {
                      return [
                        createVNode(_component_zs_circle_index, {
                          color: "#5AB9FF",
                          value: _ctx.data.shzs
                        }, null, 8, ["value"]),
                        createVNode("div", { class: "text-center mt-[10px]" }, "生活指数")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.data.jyzs) {
                _push2(ssrRenderComponent(_component_a_grid_item, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_zs_circle_index, {
                        color: "#FFA864",
                        value: _ctx.data.jyzs
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="text-center mt-[10px]" data-v-5ad60943${_scopeId2}>就业指数</div>`);
                    } else {
                      return [
                        createVNode(_component_zs_circle_index, {
                          color: "#FFA864",
                          value: _ctx.data.jyzs
                        }, null, 8, ["value"]),
                        createVNode("div", { class: "text-center mt-[10px]" }, "就业指数")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                _push2(`<!---->`);
              }
              if (_ctx.data.zhfs) {
                _push2(ssrRenderComponent(_component_a_grid_item, null, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_zs_circle_index, {
                        color: "#7C92FF",
                        value: _ctx.data.zhfs
                      }, null, _parent3, _scopeId2));
                      _push3(`<div class="text-center mt-[10px]" data-v-5ad60943${_scopeId2}>综合评分</div>`);
                    } else {
                      return [
                        createVNode(_component_zs_circle_index, {
                          color: "#7C92FF",
                          value: _ctx.data.zhfs
                        }, null, 8, ["value"]),
                        createVNode("div", { class: "text-center mt-[10px]" }, "综合评分")
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
                _ctx.data.xxzs ? (openBlock(), createBlock(_component_a_grid_item, { key: 0 }, {
                  default: withCtx(() => [
                    createVNode(_component_zs_circle_index, {
                      color: "#7C92FF",
                      value: _ctx.data.xxzs
                    }, null, 8, ["value"]),
                    createVNode("div", { class: "text-center mt-[10px]" }, "学习指数")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.shzs ? (openBlock(), createBlock(_component_a_grid_item, { key: 1 }, {
                  default: withCtx(() => [
                    createVNode(_component_zs_circle_index, {
                      color: "#5AB9FF",
                      value: _ctx.data.shzs
                    }, null, 8, ["value"]),
                    createVNode("div", { class: "text-center mt-[10px]" }, "生活指数")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.jyzs ? (openBlock(), createBlock(_component_a_grid_item, { key: 2 }, {
                  default: withCtx(() => [
                    createVNode(_component_zs_circle_index, {
                      color: "#FFA864",
                      value: _ctx.data.jyzs
                    }, null, 8, ["value"]),
                    createVNode("div", { class: "text-center mt-[10px]" }, "就业指数")
                  ]),
                  _: 1
                })) : createCommentVNode("", true),
                _ctx.data.zhfs ? (openBlock(), createBlock(_component_a_grid_item, { key: 3 }, {
                  default: withCtx(() => [
                    createVNode(_component_zs_circle_index, {
                      color: "#7C92FF",
                      value: _ctx.data.zhfs
                    }, null, 8, ["value"]),
                    createVNode("div", { class: "text-center mt-[10px]" }, "综合评分")
                  ]),
                  _: 1
                })) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="mt-[20px]" data-v-5ad60943><div class="flex items-center" data-v-5ad60943><div class="flex items-center justify-center h-[36px] w-[36px] bg-[#F5F5F5]" data-v-5ad60943><i class="iconfont icon-linyushi- iconSize" data-v-5ad60943></i></div><div class="ml-[10px] text-[18px]" data-v-5ad60943>宿舍</div></div><div class="mt-[10px] leading-[20px] text-[14px]" data-v-5ad60943>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.ssTj))}</div><div class="flex items-center mt-[20px]" data-v-5ad60943><div class="flex items-center justify-center h-[36px] w-[36px] bg-[#F5F5F5]" data-v-5ad60943><i class="iconfont icon-shitang- iconSize" data-v-5ad60943></i></div><div class="ml-[10px] text-[18px]" data-v-5ad60943>食堂</div></div><div class="mt-[10px] leading-[20px] text-[14px]" data-v-5ad60943>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.stTj))}</div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.data.isPhotoEntities) {
        _push(`<div class="mt-[30px]" data-v-5ad60943>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "校园风光",
          size: "small"
        }, null, _parent));
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 4,
          colGap: 20,
          rowGap: 12,
          class: "mt-[30px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(_ctx.data.photoEntities, (item, index2) => {
                _push2(ssrRenderComponent(_component_a_grid_item, { key: index2 }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_a_image, {
                        src: item.photoUrl,
                        class: "rounded-[8px] cursor-zoom-in"
                      }, null, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_a_image, {
                          src: item.photoUrl,
                          class: "rounded-[8px] cursor-zoom-in"
                        }, null, 8, ["src"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data.photoEntities, (item, index2) => {
                  return openBlock(), createBlock(_component_a_grid_item, { key: index2 }, {
                    default: withCtx(() => [
                      createVNode(_component_a_image, {
                        src: item.photoUrl,
                        class: "rounded-[8px] cursor-zoom-in"
                      }, null, 8, ["src"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_5ad60943_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsCollegeBlurb/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-5ad60943"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { $zsFetch } = useNuxtApp();
    const { form } = useForm(() => ({
      tabRadio: "院校设置",
      tabRadioList: ["院校设置", "双一流学科", "学科评估"],
      id: route.params.id
    }));
    const evaluationColumns = [
      {
        title: "序号",
        dataIndex: "index",
        align: "center",
        headerCellStyle: {
          fontSize: "16px",
          backgroundColor: "#EDEDED",
          fontWeight: "bold"
        }
      },
      {
        title: "轮次",
        dataIndex: "round",
        align: "center",
        headerCellStyle: {
          fontSize: "16px",
          backgroundColor: "#EDEDED",
          fontWeight: "bold"
        }
      },
      {
        title: "一级学科名称",
        dataIndex: "zyl",
        align: "center",
        headerCellStyle: {
          fontSize: "16px",
          backgroundColor: "#EDEDED",
          fontWeight: "bold"
        }
      },
      {
        title: "评选结果",
        dataIndex: "score",
        align: "center",
        ellipsis: true,
        tooltip: true,
        headerCellStyle: {
          fontSize: "16px",
          backgroundColor: "#EDEDED",
          fontWeight: "bold"
        }
      }
    ];
    const { data: openMajor } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "openMajor",
      async () => {
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_SCHOOL_OPEN_MAJOR, {
          body: {
            id: form.value.id
          }
        });
        return {
          ...res == null ? void 0 : res.data,
          // 学科评估
          assessList: ((_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.assessList) == null ? void 0 : _b.map((o, i) => {
            return {
              ...o,
              index: i + 1
            };
          })) ?? []
        };
      },
      {}
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_zs_no_data = _sfc_main$d;
      const _component_zs_title = _sfc_main$c;
      const _component_a_row = Row;
      const _component_a_col = Col;
      const _component_a_table = Table;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-52df1a71>`);
      _push(ssrRenderComponent(_component_a_radio_group, {
        modelValue: unref(form).tabRadio,
        "onUpdate:modelValue": ($event) => unref(form).tabRadio = $event,
        class: "mb-[30px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).tabRadioList, (tab) => {
              _push2(ssrRenderComponent(_component_a_radio, { value: tab }, {
                radio: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": checked }, "text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[4px]"])}" data-v-52df1a71${_scopeId2}>${ssrInterpolate(tab)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[4px]", { "bg-[#7C92FF] text-white": checked }]
                      }, toDisplayString(tab), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).tabRadioList, (tab) => {
                return openBlock(), createBlock(_component_a_radio, {
                  key: tab,
                  value: tab
                }, {
                  radio: withCtx(({ checked }) => [
                    createVNode("div", {
                      class: ["text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[4px]", { "bg-[#7C92FF] text-white": checked }]
                    }, toDisplayString(tab), 3)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(form).tabRadio === "院校设置") {
        _push(`<div data-v-52df1a71>`);
        if ((_b = (_a = unref(openMajor)) == null ? void 0 : _a.schoolMajorList) == null ? void 0 : _b.length) {
          _push(`<!--[-->`);
          ssrRenderList((_c = unref(openMajor)) == null ? void 0 : _c.schoolMajorList, (item, index2) => {
            _push(`<div class="p-[20px_20px] border-solid border border-[#EDEDED] rounded-[4px] mb-[20px]" data-v-52df1a71><div class="text-[18px] font-bold" data-v-52df1a71>${ssrInterpolate(item.ssxy)}</div><div class="text-[#999999] mt-[15px]" data-v-52df1a71> 包含专业： <span class="text-[#333333]" data-v-52df1a71>${ssrInterpolate(item.zymcs.join("、"))}</span></div></div>`);
          });
          _push(`<!--]-->`);
        } else {
          _push(ssrRenderComponent(_component_zs_no_data, null, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).tabRadio === "双一流学科") {
        _push(`<div data-v-52df1a71>`);
        if ((_e = (_d = unref(openMajor)) == null ? void 0 : _d.dualClassList) == null ? void 0 : _e.length) {
          _push(`<!--[-->`);
          _push(ssrRenderComponent(_component_zs_title, {
            title: "双一流学科",
            size: "small"
          }, null, _parent));
          _push(ssrRenderComponent(_component_a_row, { class: "mt-[20px]" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2;
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList((_a2 = unref(openMajor)) == null ? void 0 : _a2.dualClassList, (item, index2) => {
                  _push2(ssrRenderComponent(_component_a_col, {
                    key: index2,
                    span: 4,
                    class: "border border-solid border-[#EDEDED] h-[80px] leading-[80px] text-center"
                  }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="" data-v-52df1a71${_scopeId2}>${ssrInterpolate(item.dualclassName)}</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "" }, toDisplayString(item.dualclassName), 1)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(openMajor)) == null ? void 0 : _b2.dualClassList, (item, index2) => {
                    return openBlock(), createBlock(_component_a_col, {
                      key: index2,
                      span: 4,
                      class: "border border-solid border-[#EDEDED] h-[80px] leading-[80px] text-center"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "" }, toDisplayString(item.dualclassName), 1)
                      ]),
                      _: 2
                    }, 1024);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<div class="mt-[20px] text-[12px] text-[#999999]" data-v-52df1a71> （以上为第一轮双一流学科，第二轮学科为自定） </div><!--]-->`);
        } else {
          _push(ssrRenderComponent(_component_zs_no_data, null, null, _parent));
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).tabRadio === "学科评估") {
        _push(`<div data-v-52df1a71>`);
        _push(ssrRenderComponent(_component_a_table, {
          class: "cursor-pointer",
          "table-layout-fixed": "",
          columns: evaluationColumns,
          data: (_f = unref(openMajor)) == null ? void 0 : _f.assessList,
          bordered: { wrapper: true, cell: true }
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_52df1a71_lang = "";
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsCollegeOpenMajor/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_9 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-52df1a71"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $zsFetch } = useNuxtApp();
    const route = useRoute();
    const { userInfo } = useUser();
    const { form } = useForm(() => ({
      sf: userInfo.value.province,
      id: route.params.id,
      kl: ""
    }));
    const { data: nfData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "nfList",
      async () => {
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.SCHOOL_SCORE_GET_NF, {
          body: {
            sf: form.value.sf
          }
        });
        const result = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
          return {
            value: String(o),
            label: String(o)
          };
        })) ?? [];
        return {
          nfList: result,
          nf: ((_b = result[0]) == null ? void 0 : _b.value) ?? ""
        };
      },
      {
        default: () => ({
          nfList: [],
          nf: ""
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    const { data: klList } = useAsyncData(
      "klList",
      async () => {
        var _a;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.SCHOOL_SCORE_KL_LIST, {
          body: {
            id: form.value.id,
            sf: form.value.sf,
            nf: nfData.value.nf
          }
        });
        const result = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
          return {
            value: o.kl,
            label: o.kl
          };
        })) ?? [];
        return result;
      },
      {
        default: () => []
      }
    );
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "schoolScoreList",
      async () => {
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_SCHOOL_SCORE, {
          body: {
            id: form.value.id,
            sf: form.value.sf,
            nf: nfData.value.nf,
            kl: form.value.kl
          }
        });
        return res == null ? void 0 : res.data;
      },
      {
        default: () => []
      }
    )), __temp = await __temp, __restore(), __temp);
    const createTableColumns = () => {
      return [
        {
          title: "年份",
          dataIndex: "nf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          }
        },
        {
          title: "录取批次",
          dataIndex: "pc",
          align: "center",
          ellipsis: true,
          tooltip: true,
          headerCellStyle: {
            fontSize: "14px",
            textAlign: "center",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "pc"
        },
        {
          title: "招生类型",
          dataIndex: "zslx",
          align: "center",
          ellipsis: true,
          tooltip: true,
          headerCellStyle: {
            fontSize: "14px",
            textAlign: "center",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "zslx"
        },
        {
          title: "最低分",
          dataIndex: "zdf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "zdf"
        },
        {
          title: "最低位次",
          dataIndex: "zdfwc",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "zdfwc"
        },
        {
          title: "省控线",
          dataIndex: "skx",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "skx"
        }
      ];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_space = Space;
      const _component_client_only = __nuxt_component_1;
      const _component_a_select = Select;
      const _component_a_table = Table;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-d939a127><div data-v-d939a127>`);
      _push(ssrRenderComponent(_component_a_space, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_select, {
              style: { width: "150px" },
              modelValue: unref(form).kl,
              "onUpdate:modelValue": ($event) => unref(form).kl = $event,
              options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(klList)],
              placeholder: "科类",
              "allow-clear": "",
              onChange: ($event) => unref(refresh)()
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_client_only, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode(_component_a_select, {
                      style: { width: "150px" },
                      modelValue: unref(nfData).nf,
                      "onUpdate:modelValue": ($event) => unref(nfData).nf = $event,
                      options: (_a = unref(nfData)) == null ? void 0 : _a.nfList,
                      placeholder: "年份",
                      onChange: () => {
                        unref(form).kl = "";
                        unref(refresh)();
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_a_select, {
                style: { width: "150px" },
                modelValue: unref(form).kl,
                "onUpdate:modelValue": ($event) => unref(form).kl = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(klList)],
                placeholder: "科类",
                "allow-clear": "",
                onChange: ($event) => unref(refresh)()
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_a_table, {
        class: "mt-[20px] cursor-pointer",
        columns: createTableColumns(),
        data: unref(data),
        loading: unref(status) === "pending",
        bordered: { wrapper: true, cell: true }
      }, {
        pc: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center" data-v-d939a127${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.pc))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.pc)), 1)
            ];
          }
        }),
        zslx: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-center" data-v-d939a127${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zslx))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-center" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zslx)), 1)
            ];
          }
        }),
        zdf: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right" data-v-d939a127${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zdf))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zdf)), 1)
            ];
          }
        }),
        zdfwc: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right" data-v-d939a127${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc)))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc))), 1)
            ];
          }
        }),
        skx: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right" data-v-d939a127${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.skx)))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.skx))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_d939a127_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsCollegeScore/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_10 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-d939a127"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const route = useRoute();
    const { userInfo } = useUser();
    const { form } = useForm(() => ({
      id: route.params.id,
      sf: userInfo.value.province,
      zymc: "",
      pc: "",
      kl: ""
    }));
    const { data: nfData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "majorNfList",
      async () => {
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.MAJOR_SCORE_GET_NF, {
          body: {
            sf: form.value.sf
          }
        });
        const result = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
          return {
            value: String(o),
            label: String(o)
          };
        })) ?? [];
        return {
          nfList: result,
          nf: ((_b = result[0]) == null ? void 0 : _b.value) ?? ""
        };
      },
      {
        default: () => ({
          nfList: [],
          nf: ""
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    const { data: klList } = useAsyncData(
      "majorKlList",
      async () => {
        var _a;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.MAJOR_SCORE_KL_LIST, {
          body: {
            id: form.value.id,
            sf: form.value.sf,
            nf: nfData.value.nf
          }
        });
        const result = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
          return {
            value: o == null ? void 0 : o.kl,
            label: o == null ? void 0 : o.kl
          };
        })) ?? [];
        return result;
      },
      {
        default: () => []
      }
    );
    const { data: pcList } = useAsyncData(
      "majorPcList",
      async () => {
        var _a;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_MAJOR_SCORE_PC, {
          body: {
            id: form.value.id,
            sf: form.value.sf,
            nf: nfData.value.nf,
            kl: form.value.kl
          }
        });
        const result = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
          return {
            value: o == null ? void 0 : o.pc,
            label: o == null ? void 0 : o.pc
          };
        })) ?? [];
        return result;
      },
      {
        default: () => []
      }
    );
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "majorScoreList",
      async () => {
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_MAJOR_SCORE, {
          body: {
            id: form.value.id,
            sf: form.value.sf,
            nf: nfData.value.nf,
            kl: form.value.kl,
            pc: form.value.pc,
            zymc: form.value.zymc
          }
        });
        return res == null ? void 0 : res.data;
      },
      {
        default: () => [],
        immediate: false
      }
    )), __temp = await __temp, __restore(), __temp);
    const checkChange = () => {
      var _a;
      if (((_a = userInfo.value) == null ? void 0 : _a.vipStateValue) != "1") {
        return $zsMsg("waring", "开通会员 查看更多");
      } else {
        refresh();
      }
    };
    const rowClass = (record, rowIndex) => {
      var _a;
      return ((_a = userInfo.value) == null ? void 0 : _a.vipStateValue) != "1" && rowIndex > 2 ? "f-blur" : "";
    };
    const createTableColumns = () => {
      return [
        {
          title: "年份",
          dataIndex: "nf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          }
        },
        {
          title: "院校代码",
          dataIndex: "yxdm",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.yxdm);
          }
        },
        {
          title: "招生批次",
          dataIndex: "pc",
          align: "center",
          ellipsis: true,
          tooltip: true,
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.pc);
          }
        },
        {
          title: "专业名称",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "招录人数",
          dataIndex: "lqrs",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "lqrs"
        },
        {
          title: "最高分",
          dataIndex: "zgf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "zgf"
        },
        {
          title: "平均分",
          dataIndex: "pjf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "pjf"
        },
        {
          title: "最低分",
          dataIndex: "zdf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "zdf"
        },
        {
          title: "最低位次",
          dataIndex: "zdfwc",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "zdfwc"
        }
      ];
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_a_space = Space;
      const _component_client_only = __nuxt_component_1;
      const _component_a_select = Select;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_a_table = Table;
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-3c7729ac><div data-v-3c7729ac>`);
      _push(ssrRenderComponent(_component_a_space, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_select, {
              style: { width: "150px" },
              modelValue: unref(form).kl,
              "onUpdate:modelValue": ($event) => unref(form).kl = $event,
              options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(klList)],
              placeholder: "科类",
              "allow-clear": "",
              onChange: () => {
                unref(form).pc = "";
                checkChange();
              }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_select, {
              style: { width: "150px" },
              modelValue: unref(form).pc,
              "onUpdate:modelValue": ($event) => unref(form).pc = $event,
              options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(pcList)],
              placeholder: "批次",
              "allow-clear": "",
              onChange: ($event) => checkChange()
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_input, {
              style: { width: "260px" },
              modelValue: unref(form).zymc,
              "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
              modelModifiers: { trim: true },
              placeholder: "请输入专业名称",
              "allow-clear": "",
              onChange: ($event) => checkChange()
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon_search, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_icon_search)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_client_only, null, {
                default: withCtx(() => {
                  var _a2;
                  return [
                    createVNode(_component_a_select, {
                      style: { width: "150px" },
                      modelValue: unref(nfData).nf,
                      "onUpdate:modelValue": ($event) => unref(nfData).nf = $event,
                      options: (_a2 = unref(nfData)) == null ? void 0 : _a2.nfList,
                      placeholder: "年份",
                      onChange: () => {
                        unref(form).kl = "";
                        unref(form).pc = "";
                        checkChange();
                      }
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                  ];
                }),
                _: 1
              }),
              createVNode(_component_a_select, {
                style: { width: "150px" },
                modelValue: unref(form).kl,
                "onUpdate:modelValue": ($event) => unref(form).kl = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(klList)],
                placeholder: "科类",
                "allow-clear": "",
                onChange: () => {
                  unref(form).pc = "";
                  checkChange();
                }
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
              createVNode(_component_a_select, {
                style: { width: "150px" },
                modelValue: unref(form).pc,
                "onUpdate:modelValue": ($event) => unref(form).pc = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(pcList)],
                placeholder: "批次",
                "allow-clear": "",
                onChange: ($event) => checkChange()
              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
              createVNode(_component_a_input, {
                style: { width: "260px" },
                modelValue: unref(form).zymc,
                "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
                modelModifiers: { trim: true },
                placeholder: "请输入专业名称",
                "allow-clear": "",
                onChange: ($event) => checkChange()
              }, {
                prefix: withCtx(() => [
                  createVNode(_component_icon_search)
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_a_table, {
        class: "mt-[20px] cursor-pointer relative",
        columns: createTableColumns(),
        data: ((_a = unref(userInfo)) == null ? void 0 : _a.vipStateValue) == "1" ? unref(data) : (_b = unref(data)) == null ? void 0 : _b.splice(0, 10),
        pagination: ((_c = unref(userInfo)) == null ? void 0 : _c.vipStateValue) == "1" ? true : false,
        loading: unref(status) === "pending",
        bordered: { wrapper: true, cell: true },
        "row-class": rowClass
      }, {
        zymc: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-left" data-v-3c7729ac${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
            ];
          }
        }),
        lqrs: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right" data-v-3c7729ac${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs)))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs))), 1)
            ];
          }
        }),
        zgf: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right" data-v-3c7729ac${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zgf))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zgf)), 1)
            ];
          }
        }),
        pjf: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right" data-v-3c7729ac${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.pjf))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.pjf)), 1)
            ];
          }
        }),
        zdf: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right" data-v-3c7729ac${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zdf))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zdf)), 1)
            ];
          }
        }),
        zdfwc: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right" data-v-3c7729ac${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc)))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      if (((_d = unref(userInfo)) == null ? void 0 : _d.vipStateValue) != "1" && ((_e = unref(data)) == null ? void 0 : _e.length) > 3) {
        _push(`<div class="w-full absolute top-[60%]" data-v-3c7729ac>`);
        _push(ssrRenderComponent(_component_nuxt_link, { to: "/personal?tab=memberCenter" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="w-[254px] mx-auto h-[50px] bg-[#FFA864] text-white font-bold leading-[50px] text-center rounded-[40px] cursor-pointer" data-v-3c7729ac${_scopeId}> 开通VIP查看全部内容 </div>`);
            } else {
              return [
                createVNode("div", { class: "w-[254px] mx-auto h-[50px] bg-[#FFA864] text-white font-bold leading-[50px] text-center rounded-[40px] cursor-pointer" }, " 开通VIP查看全部内容 ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_3c7729ac_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsCollegeMajorScore/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-3c7729ac"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { userInfo } = useUser();
    const { form } = useForm(() => ({
      id: route.params.id,
      sf: userInfo.value.province,
      kl: "",
      pc: "",
      zymc: ""
    }));
    const selectRow = ref({});
    const isDetail = ref(false);
    const { data: nfData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "planNfList",
      async () => {
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.PLAN_GET_NF, {
          body: {
            sf: userInfo.value.province
          }
        });
        const result = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
          return {
            value: String(o),
            label: String(o)
          };
        })) ?? [];
        return {
          nfList: result,
          nf: ((_b = result[0]) == null ? void 0 : _b.value) ?? ""
        };
      },
      {
        default: () => ({
          nfList: [],
          nf: ""
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    const { data: klList } = useAsyncData(
      "planKlList",
      async () => {
        var _a;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.PLAN_GET_KL, {
          body: {
            id: form.value.id,
            sf: form.value.sf,
            nf: nfData.value.nf
          }
        });
        const result = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
          return {
            value: o == null ? void 0 : o.kl,
            label: o == null ? void 0 : o.kl
          };
        })) ?? [];
        return result;
      },
      {
        default: () => []
      }
    );
    const { data: pcList } = useAsyncData(
      "planPcList",
      async () => {
        var _a;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_PLAN_PC, {
          body: {
            id: form.value.id,
            sf: form.value.sf,
            nf: nfData.value.nf,
            kl: form.value.kl
          }
        });
        const result = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
          return {
            value: o == null ? void 0 : o.pc,
            label: o == null ? void 0 : o.pc
          };
        })) ?? [];
        return result;
      },
      {
        default: () => []
      }
    );
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "planList",
      async () => {
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_PLAN, {
          body: {
            id: form.value.id,
            sf: form.value.sf,
            nf: nfData.value.nf,
            kl: form.value.kl,
            pc: form.value.pc,
            zymc: form.value.zymc
          }
        });
        return {
          docList: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.docList) ?? [],
          // 招生计划大于三展示 购买会员
          planMajorList: ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.planMajorList) ?? []
        };
      },
      {
        default: () => ({
          docList: [],
          planMajorList: []
        }),
        immediate: false
      }
    )), __temp = await __temp, __restore(), __temp);
    const checkChange = () => {
      var _a;
      if (((_a = userInfo.value) == null ? void 0 : _a.vipStateValue) != "1") {
        return $zsMsg("waring", "开通会员 查看更多");
      } else {
        refresh();
      }
    };
    const setSelectRow = (row, callBack) => {
      selectRow.value = row;
      isDetail.value = true;
      window.scrollTo(0, 0);
      if (callBack)
        callBack();
    };
    const rowClass = (record, rowIndex) => {
      var _a;
      return ((_a = userInfo.value) == null ? void 0 : _a.vipStateValue) != "1" && rowIndex > 2 ? "f-blur" : "";
    };
    const createTableColumns = () => {
      return [
        {
          title: "年份",
          dataIndex: "nf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          }
        },
        {
          title: "院校代码",
          dataIndex: "yxdm",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.yxdm);
          }
        },
        {
          title: "招生批次",
          dataIndex: "pc",
          align: "center",
          width: 180,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.pc);
          }
        },
        {
          title: "专业名称",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "选科要求",
          dataIndex: "xk",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "xk"
        },
        {
          title: "学制",
          dataIndex: "xz",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return record.xz.includes("年") ? record.xz : record.xz + "年";
          }
        },
        {
          title: "招生计划",
          dataIndex: "lqrs",
          align: "center",
          ellipsis: true,
          tooltip: true,
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "lqrs"
        },
        {
          title: "学费",
          dataIndex: "xf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "white",
            fontWeight: "bold"
          },
          slotName: "xf"
        }
      ];
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const _component_zs_title = _sfc_main$c;
      const _component_a_space = Space;
      const _component_client_only = __nuxt_component_1;
      const _component_a_select = Select;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_a_table = Table;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_a_list = List;
      const _component_icon_arrow_left = IconArrowLeft;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-58ad79c7>`);
      if (!unref(isDetail)) {
        _push(`<div data-v-58ad79c7>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "各专业招生计划",
          size: "small"
        }, null, _parent));
        _push(`<div class="mt-[20px]" data-v-58ad79c7>`);
        _push(ssrRenderComponent(_component_a_space, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_select, {
                style: { width: "150px" },
                modelValue: unref(form).kl,
                "onUpdate:modelValue": ($event) => unref(form).kl = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(klList)],
                placeholder: "科类",
                "allow-clear": "",
                onChange: () => {
                  unref(form).pc = "";
                  checkChange();
                }
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_select, {
                style: { width: "300px" },
                modelValue: unref(form).pc,
                "onUpdate:modelValue": ($event) => unref(form).pc = $event,
                options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(pcList)],
                placeholder: "批次",
                "allow-clear": "",
                onChange: ($event) => checkChange()
              }, null, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_input, {
                style: { width: "260px" },
                modelValue: unref(form).zymc,
                "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
                modelModifiers: { trim: true },
                placeholder: "请输入专业名称",
                "allow-clear": "",
                onChange: ($event) => checkChange()
              }, {
                prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_icon_search, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_icon_search)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_client_only, null, {
                  default: withCtx(() => {
                    var _a2;
                    return [
                      createVNode(_component_a_select, {
                        style: { width: "150px" },
                        modelValue: unref(nfData).nf,
                        "onUpdate:modelValue": ($event) => unref(nfData).nf = $event,
                        options: (_a2 = unref(nfData)) == null ? void 0 : _a2.nfList,
                        placeholder: "年份",
                        onChange: () => {
                          unref(form).pc = "";
                          unref(form).kl = "";
                          checkChange();
                        }
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                    ];
                  }),
                  _: 1
                }),
                createVNode(_component_a_select, {
                  style: { width: "150px" },
                  modelValue: unref(form).kl,
                  "onUpdate:modelValue": ($event) => unref(form).kl = $event,
                  options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(klList)],
                  placeholder: "科类",
                  "allow-clear": "",
                  onChange: () => {
                    unref(form).pc = "";
                    checkChange();
                  }
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                createVNode(_component_a_select, {
                  style: { width: "300px" },
                  modelValue: unref(form).pc,
                  "onUpdate:modelValue": ($event) => unref(form).pc = $event,
                  options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(pcList)],
                  placeholder: "批次",
                  "allow-clear": "",
                  onChange: ($event) => checkChange()
                }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                createVNode(_component_a_input, {
                  style: { width: "260px" },
                  modelValue: unref(form).zymc,
                  "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
                  modelModifiers: { trim: true },
                  placeholder: "请输入专业名称",
                  "allow-clear": "",
                  onChange: ($event) => checkChange()
                }, {
                  prefix: withCtx(() => [
                    createVNode(_component_icon_search)
                  ]),
                  _: 1
                }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><div class="relative" data-v-58ad79c7>`);
        _push(ssrRenderComponent(_component_a_table, {
          class: "mt-[20px] cursor-pointer",
          columns: createTableColumns(),
          data: ((_a = unref(userInfo)) == null ? void 0 : _a.vipStateValue) == "1" ? (_b = unref(data)) == null ? void 0 : _b.planMajorList : (_d = (_c = unref(data)) == null ? void 0 : _c.planMajorList) == null ? void 0 : _d.splice(0, 10),
          loading: unref(status) === "pending",
          pagination: ((_e = unref(userInfo)) == null ? void 0 : _e.vipStateValue) == "1" ? true : false,
          bordered: { wrapper: true, cell: true },
          "row-class": rowClass
        }, {
          zymc: withCtx(({ record }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-left" data-v-58ad79c7${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc))}</div>`);
            } else {
              return [
                createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
              ];
            }
          }),
          xk: withCtx(({ record }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-center" data-v-58ad79c7${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.xk))}</div>`);
            } else {
              return [
                createVNode("div", { class: "text-center" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.xk)), 1)
              ];
            }
          }),
          lqrs: withCtx(({ record }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-right" data-v-58ad79c7${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人"))}</div>`);
            } else {
              return [
                createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
              ];
            }
          }),
          xf: withCtx(({ record }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-right" data-v-58ad79c7${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.xf, ""), "元"))}</div>`);
            } else {
              return [
                createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.xf, ""), "元")), 1)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (((_f = unref(userInfo)) == null ? void 0 : _f.vipStateValue) != "1" && ((_h = (_g = unref(data)) == null ? void 0 : _g.planMajorList) == null ? void 0 : _h.length) > 3) {
          _push(`<div class="w-full absolute top-[60%]" data-v-58ad79c7>`);
          _push(ssrRenderComponent(_component_nuxt_link, { to: "/personal?tab=memberCenter" }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="w-[254px] mx-auto h-[50px] bg-[#FFA864] text-white font-bold leading-[50px] text-center rounded-[40px] cursor-pointer" data-v-58ad79c7${_scopeId}> 开通VIP查看全部内容 </div>`);
              } else {
                return [
                  createVNode("div", { class: "w-[254px] mx-auto h-[50px] bg-[#FFA864] text-white font-bold leading-[50px] text-center rounded-[40px] cursor-pointer" }, " 开通VIP查看全部内容 ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
        if ((_j = (_i = unref(data)) == null ? void 0 : _i.docList) == null ? void 0 : _j.length) {
          _push(`<div class="mt-[30px]" data-v-58ad79c7>`);
          _push(ssrRenderComponent(_component_zs_title, {
            title: "招生信息",
            size: "small"
          }, null, _parent));
          _push(ssrRenderComponent(_component_a_list, {
            class: "list-border mt-[20px]",
            bordered: false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2;
              if (_push2) {
                _push2(`<div class="p-[10px_20px] border-solid border border-[#EDEDED] rounded-[4px] cursor-pointer" data-v-58ad79c7${_scopeId}><!--[-->`);
                ssrRenderList((_a2 = unref(data)) == null ? void 0 : _a2.docList, (item, index2) => {
                  var _a3, _b3;
                  _push2(`<div class="${ssrRenderClass([{ "border-none": index2 === ((_b3 = (_a3 = unref(data)) == null ? void 0 : _a3.docList) == null ? void 0 : _b3.length) - 1 }, "flex items-center justify-between leading-[50px] border-dashed border-b-[1px] border-[#EDEDED]"])}" data-v-58ad79c7${_scopeId}><div data-v-58ad79c7${_scopeId}>${ssrInterpolate(item.dtitle)}</div><div class="text-[#999]" data-v-58ad79c7${_scopeId}>${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(item.fbDt, "YYYY-MM-DD"))}</div></div>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                return [
                  createVNode("div", { class: "p-[10px_20px] border-solid border border-[#EDEDED] rounded-[4px] cursor-pointer" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(data)) == null ? void 0 : _b2.docList, (item, index2) => {
                      var _a3, _b3;
                      return openBlock(), createBlock("div", {
                        class: ["flex items-center justify-between leading-[50px] border-dashed border-b-[1px] border-[#EDEDED]", { "border-none": index2 === ((_b3 = (_a3 = unref(data)) == null ? void 0 : _a3.docList) == null ? void 0 : _b3.length) - 1 }],
                        key: index2,
                        onClick: ($event) => setSelectRow(item)
                      }, [
                        createVNode("div", null, toDisplayString(item.dtitle), 1),
                        createVNode("div", { class: "text-[#999]" }, toDisplayString(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))(item.fbDt, "YYYY-MM-DD")), 1)
                      ], 10, ["onClick"]);
                    }), 128))
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div data-v-58ad79c7><div class="cursor-pointer" data-v-58ad79c7>`);
        _push(ssrRenderComponent(_component_icon_arrow_left, { class: "mr-[2px]" }, null, _parent));
        _push(`返回 </div>`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: unref(selectRow).dtitle,
          size: "small",
          class: "my-[20px]"
        }, null, _parent));
        _push(`<div class="leading-[30px]" data-v-58ad79c7>${unref(selectRow).content}</div></div>`);
      }
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_58ad79c7_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsCollegeEnrollmentPlan/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-58ad79c7"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "大学详情"
    });
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { provinceCityList, getDictionValue } = useWebsiteInformation();
    const route = useRoute();
    const router = useRouter();
    const { form } = useForm(() => ({
      activeTabKey: [
        "collegeBlurb",
        "openMajor",
        "schoolScore",
        "majorScore",
        "enrollmentPlan"
      ].includes(route.query.tab) ? route.query.tab : "collegeBlurb"
    }));
    const id = ref(route.params.id);
    const changeTabs = () => {
      router.replace({
        query: { ...route.query, tab: form.value.activeTabKey }
      });
    };
    const clickFollowSchool = async () => {
      const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW, {
        body: {
          schoolId: data.value.id
        }
      });
      $zsMsg("success", res.data);
      if (res) {
        if (data.value.userIsCollect == "1") {
          data.value.userIsCollect = "0";
        } else {
          data.value.userIsCollect = "1";
        }
      }
    };
    const { data, status } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "collegeDetail",
      async () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_COLLEGE_DETAIL, {
          body: {
            id: id.value
          }
        });
        let result = {};
        if (res.data === "院校不存在") {
          result.error = true;
        } else {
          result = {
            ...res == null ? void 0 : res.data,
            // 历史沿革
            isHistoryEntities: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.historyEntities.length) > 0 ? true : false,
            // 毕业生签约地区流向
            isBysQydqlx: ((_c = (_b = res.data) == null ? void 0 : _b.bysQydqlx) == null ? void 0 : _c.length) ? true : false,
            bysQydqlx: ((_e = (_d = res == null ? void 0 : res.data) == null ? void 0 : _d.bysQydqlx) == null ? void 0 : _e.map((o) => {
              return {
                ...o,
                title: o.province,
                content: o.rate + "%",
                width: o.rate
              };
            })) ?? [],
            // 毕业生就业单位
            bysQydw: ((_g = (_f = res.data) == null ? void 0 : _f.bysQydw) == null ? void 0 : _g.map((o, i) => {
              return {
                ...o,
                index: i + 1
              };
            })) ?? [],
            isBysQydw: ((_i = (_h = res.data) == null ? void 0 : _h.bysQydw) == null ? void 0 : _i.length) ? true : false,
            isLabEntities: ((_k = (_j = res == null ? void 0 : res.data) == null ? void 0 : _j.labEntities) == null ? void 0 : _k.length) ? true : false,
            // 食宿条件
            xxzs: res.data.xxzs * 1,
            shzs: res.data.shzs * 1,
            jyzs: res.data.jyzs * 1,
            zhfs: res.data.zhfs * 1,
            byxj: res.data.byxj * 1,
            // 院校排名
            rankEntities: ((_m = (_l = res.data) == null ? void 0 : _l.rankEntities) == null ? void 0 : _m.map((o) => {
              var _a2;
              return {
                ...o,
                title: (_a2 = findOptions(getDictionValue("RANK"), o.rankType)) == null ? void 0 : _a2.label
              };
            })) ?? [],
            isRankEntities: ((_o = (_n = res.data) == null ? void 0 : _n.rankEntities) == null ? void 0 : _o.length) ? true : false,
            isPhotoEntities: ((_q = (_p = res == null ? void 0 : res.data) == null ? void 0 : _p.photoEntities) == null ? void 0 : _q.length) ? true : false
          };
        }
        return result;
      },
      {
        // default: () => ({} as any),
        watch: [id]
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_a_list_item_meta = ListItemMeta;
      const _component_a_space = Space;
      const _component_a_tooltip = Tooltip;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_a_tabs = Tabs;
      const _component_a_tab_pane = TabPane;
      const _component_zs_college_blurb = __nuxt_component_8;
      const _component_zs_college_open_major = __nuxt_component_9;
      const _component_zs_college_score = __nuxt_component_10;
      const _component_zs_college_major_score = __nuxt_component_11;
      const _component_zs_college_enrollment_plan = __nuxt_component_12;
      const _component_zs_no_data = _sfc_main$d;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))}>`);
      if (!unref(data).error) {
        _push(ssrRenderComponent(_component_a_list, {
          bordered: false,
          loading: unref(status) === "pending"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_list, { bordered: false }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_list_item, null, {
                      actions: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_space, { direction: "vertical" }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center"${_scopeId4}>${ssrInterpolate(unref(data).userIsCollect == "1" ? "取消关注" : "+关注")}</div><div class="w-[160px] h-[40px] leading-[40px] rounded-[40px] text-[14px] text-center bg-[#7C92FF] text-white"${_scopeId4}> 测测我的录取概率 </div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center",
                                    onClick: clickFollowSchool
                                  }, toDisplayString(unref(data).userIsCollect == "1" ? "取消关注" : "+关注"), 1),
                                  createVNode("div", { class: "w-[160px] h-[40px] leading-[40px] rounded-[40px] text-[14px] text-center bg-[#7C92FF] text-white" }, " 测测我的录取概率 ")
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_space, { direction: "vertical" }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center",
                                  onClick: clickFollowSchool
                                }, toDisplayString(unref(data).userIsCollect == "1" ? "取消关注" : "+关注"), 1),
                                createVNode("div", { class: "w-[160px] h-[40px] leading-[40px] rounded-[40px] text-[14px] text-center bg-[#7C92FF] text-white" }, " 测测我的录取概率 ")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_list_item_meta, null, {
                            avatar: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="w-[130px]"${_scopeId4}><img${ssrRenderAttr("src", unref(data).logo)} class="w-[120px] cursor-pointer" alt=""${_scopeId4}></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "w-[130px]" }, [
                                    createVNode("img", {
                                      src: unref(data).logo,
                                      class: "w-[120px] cursor-pointer",
                                      alt: ""
                                    }, null, 8, ["src"])
                                  ])
                                ];
                              }
                            }),
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-[24px] cursor-pointer font-bold mb-[10px]"${_scopeId4}>${ssrInterpolate(unref(data).yxmc)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-[24px] cursor-pointer font-bold mb-[10px]" }, toDisplayString(unref(data).yxmc), 1)
                                ];
                              }
                            }),
                            description: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  split: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="w-[2px] h-[8px] text-[#999]"${_scopeId5}>|</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
                                    if (_push6) {
                                      if ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _a.label) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _b.label)}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _c.label) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _d.label)}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if (unref(data).lsy) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate(unref(data).lsy)}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                      if ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _e.label) {
                                        _push6(`<span${_scopeId5}>${ssrInterpolate((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _f.label)}</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        ((_g = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _g.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_h = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _h.label), 1)) : createCommentVNode("", true),
                                        ((_i = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _i.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_j = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _j.label), 1)) : createCommentVNode("", true),
                                        unref(data).lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(data).lsy), 1)) : createCommentVNode("", true),
                                        ((_k = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _k.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_l = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _l.label), 1)) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`<div${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<!--[-->`);
                                      ssrRenderList(unref(data).schoolTags, (tag, index2) => {
                                        _push6(`<span class="p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"${_scopeId5}>${ssrInterpolate(tag)}</span>`);
                                      });
                                      _push6(`<!--]-->`);
                                    } else {
                                      return [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).schoolTags, (tag, index2) => {
                                          return openBlock(), createBlock("span", {
                                            key: index2,
                                            class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                          }, toDisplayString(tag), 1);
                                        }), 128))
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div><div class="flex items-center text-[#333]"${_scopeId4}>`);
                                if (unref(data).dh) {
                                  _push5(`<div${_scopeId4}>招生电话：${ssrInterpolate(unref(data).dh)}</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(ssrRenderComponent(_component_a_tooltip, {
                                  content: unref(data).bbDz
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (unref(data).bbDz) {
                                        _push6(`<div class="mx-[20px] w-[300px] truncate"${_scopeId5}> 官方地址：${ssrInterpolate(unref(data).bbDz)}</div>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        unref(data).bbDz ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "mx-[20px] w-[300px] truncate"
                                        }, " 官方地址：" + toDisplayString(unref(data).bbDz), 1)) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(ssrRenderComponent(_component_nuxt_link, {
                                  to: unref(data).wz,
                                  target: "_blank"
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      if (unref(data).wz) {
                                        _push6(`<span class="text-[#5AB9FF]"${_scopeId5}>进入官方网址&gt;&gt;</span>`);
                                      } else {
                                        _push6(`<!---->`);
                                      }
                                    } else {
                                      return [
                                        unref(data).wz ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-[#5AB9FF]"
                                        }, "进入官方网址>>")) : createCommentVNode("", true)
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    split: withCtx(() => [
                                      createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                    ]),
                                    default: withCtx(() => {
                                      var _a, _b, _c, _d, _e, _f;
                                      return [
                                        ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _a.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _b.label), 1)) : createCommentVNode("", true),
                                        ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _c.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _d.label), 1)) : createCommentVNode("", true),
                                        unref(data).lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(data).lsy), 1)) : createCommentVNode("", true),
                                        ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _e.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _f.label), 1)) : createCommentVNode("", true)
                                      ];
                                    }),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(data).schoolTags, (tag, index2) => {
                                          return openBlock(), createBlock("span", {
                                            key: index2,
                                            class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                          }, toDisplayString(tag), 1);
                                        }), 128))
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode("div", { class: "flex items-center text-[#333]" }, [
                                    unref(data).dh ? (openBlock(), createBlock("div", { key: 0 }, "招生电话：" + toDisplayString(unref(data).dh), 1)) : createCommentVNode("", true),
                                    createVNode(_component_a_tooltip, {
                                      content: unref(data).bbDz
                                    }, {
                                      default: withCtx(() => [
                                        unref(data).bbDz ? (openBlock(), createBlock("div", {
                                          key: 0,
                                          class: "mx-[20px] w-[300px] truncate"
                                        }, " 官方地址：" + toDisplayString(unref(data).bbDz), 1)) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["content"]),
                                    createVNode(_component_nuxt_link, {
                                      to: unref(data).wz,
                                      target: "_blank"
                                    }, {
                                      default: withCtx(() => [
                                        unref(data).wz ? (openBlock(), createBlock("span", {
                                          key: 0,
                                          class: "text-[#5AB9FF]"
                                        }, "进入官方网址>>")) : createCommentVNode("", true)
                                      ]),
                                      _: 1
                                    }, 8, ["to"])
                                  ])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_list_item_meta, null, {
                              avatar: withCtx(() => [
                                createVNode("div", { class: "w-[130px]" }, [
                                  createVNode("img", {
                                    src: unref(data).logo,
                                    class: "w-[120px] cursor-pointer",
                                    alt: ""
                                  }, null, 8, ["src"])
                                ])
                              ]),
                              title: withCtx(() => [
                                createVNode("div", { class: "text-[24px] cursor-pointer font-bold mb-[10px]" }, toDisplayString(unref(data).yxmc), 1)
                              ]),
                              description: withCtx(() => [
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  split: withCtx(() => [
                                    createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                  ]),
                                  default: withCtx(() => {
                                    var _a, _b, _c, _d, _e, _f;
                                    return [
                                      ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _a.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _b.label), 1)) : createCommentVNode("", true),
                                      ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _c.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _d.label), 1)) : createCommentVNode("", true),
                                      unref(data).lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(data).lsy), 1)) : createCommentVNode("", true),
                                      ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _e.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _f.label), 1)) : createCommentVNode("", true)
                                    ];
                                  }),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(data).schoolTags, (tag, index2) => {
                                        return openBlock(), createBlock("span", {
                                          key: index2,
                                          class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                        }, toDisplayString(tag), 1);
                                      }), 128))
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode("div", { class: "flex items-center text-[#333]" }, [
                                  unref(data).dh ? (openBlock(), createBlock("div", { key: 0 }, "招生电话：" + toDisplayString(unref(data).dh), 1)) : createCommentVNode("", true),
                                  createVNode(_component_a_tooltip, {
                                    content: unref(data).bbDz
                                  }, {
                                    default: withCtx(() => [
                                      unref(data).bbDz ? (openBlock(), createBlock("div", {
                                        key: 0,
                                        class: "mx-[20px] w-[300px] truncate"
                                      }, " 官方地址：" + toDisplayString(unref(data).bbDz), 1)) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["content"]),
                                  createVNode(_component_nuxt_link, {
                                    to: unref(data).wz,
                                    target: "_blank"
                                  }, {
                                    default: withCtx(() => [
                                      unref(data).wz ? (openBlock(), createBlock("span", {
                                        key: 0,
                                        class: "text-[#5AB9FF]"
                                      }, "进入官方网址>>")) : createCommentVNode("", true)
                                    ]),
                                    _: 1
                                  }, 8, ["to"])
                                ])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_list_item, null, {
                        actions: withCtx(() => [
                          createVNode(_component_a_space, { direction: "vertical" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center",
                                onClick: clickFollowSchool
                              }, toDisplayString(unref(data).userIsCollect == "1" ? "取消关注" : "+关注"), 1),
                              createVNode("div", { class: "w-[160px] h-[40px] leading-[40px] rounded-[40px] text-[14px] text-center bg-[#7C92FF] text-white" }, " 测测我的录取概率 ")
                            ]),
                            _: 1
                          })
                        ]),
                        default: withCtx(() => [
                          createVNode(_component_a_list_item_meta, null, {
                            avatar: withCtx(() => [
                              createVNode("div", { class: "w-[130px]" }, [
                                createVNode("img", {
                                  src: unref(data).logo,
                                  class: "w-[120px] cursor-pointer",
                                  alt: ""
                                }, null, 8, ["src"])
                              ])
                            ]),
                            title: withCtx(() => [
                              createVNode("div", { class: "text-[24px] cursor-pointer font-bold mb-[10px]" }, toDisplayString(unref(data).yxmc), 1)
                            ]),
                            description: withCtx(() => [
                              createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                split: withCtx(() => [
                                  createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                ]),
                                default: withCtx(() => {
                                  var _a, _b, _c, _d, _e, _f;
                                  return [
                                    ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _a.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _b.label), 1)) : createCommentVNode("", true),
                                    ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _c.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _d.label), 1)) : createCommentVNode("", true),
                                    unref(data).lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(data).lsy), 1)) : createCommentVNode("", true),
                                    ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _e.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _f.label), 1)) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(data).schoolTags, (tag, index2) => {
                                      return openBlock(), createBlock("span", {
                                        key: index2,
                                        class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                      }, toDisplayString(tag), 1);
                                    }), 128))
                                  ]),
                                  _: 1
                                })
                              ]),
                              createVNode("div", { class: "flex items-center text-[#333]" }, [
                                unref(data).dh ? (openBlock(), createBlock("div", { key: 0 }, "招生电话：" + toDisplayString(unref(data).dh), 1)) : createCommentVNode("", true),
                                createVNode(_component_a_tooltip, {
                                  content: unref(data).bbDz
                                }, {
                                  default: withCtx(() => [
                                    unref(data).bbDz ? (openBlock(), createBlock("div", {
                                      key: 0,
                                      class: "mx-[20px] w-[300px] truncate"
                                    }, " 官方地址：" + toDisplayString(unref(data).bbDz), 1)) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["content"]),
                                createVNode(_component_nuxt_link, {
                                  to: unref(data).wz,
                                  target: "_blank"
                                }, {
                                  default: withCtx(() => [
                                    unref(data).wz ? (openBlock(), createBlock("span", {
                                      key: 0,
                                      class: "text-[#5AB9FF]"
                                    }, "进入官方网址>>")) : createCommentVNode("", true)
                                  ]),
                                  _: 1
                                }, 8, ["to"])
                              ])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_tabs, {
                "active-key": unref(form).activeTabKey,
                "onUpdate:activeKey": ($event) => unref(form).activeTabKey = $event,
                animation: "",
                onChange: changeTabs,
                "destroy-on-hide": ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_tab_pane, { key: "collegeBlurb" }, {
                      title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([
                            unref(form).activeTabKey === "collegeBlurb" ? "text-[#657fff] font-bold" : "",
                            "text-[18px]"
                          ])}"${_scopeId3}> 院校简介 </div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [
                                "text-[18px]",
                                unref(form).activeTabKey === "collegeBlurb" ? "text-[#657fff] font-bold" : ""
                              ]
                            }, " 院校简介 ", 2)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(form).activeTabKey === "collegeBlurb") {
                            _push4(ssrRenderComponent(_component_zs_college_blurb, { data: unref(data) }, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            unref(form).activeTabKey === "collegeBlurb" ? (openBlock(), createBlock(_component_zs_college_blurb, {
                              key: 0,
                              data: unref(data)
                            }, null, 8, ["data"])) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_tab_pane, { key: "openMajor" }, {
                      title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([
                            unref(form).activeTabKey === "openMajor" ? "text-[#657fff] font-bold" : "",
                            "text-[18px]"
                          ])}"${_scopeId3}> 开设专业 </div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [
                                "text-[18px]",
                                unref(form).activeTabKey === "openMajor" ? "text-[#657fff] font-bold" : ""
                              ]
                            }, " 开设专业 ", 2)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(form).activeTabKey === "openMajor") {
                            _push4(ssrRenderComponent(_component_zs_college_open_major, null, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            unref(form).activeTabKey === "openMajor" ? (openBlock(), createBlock(_component_zs_college_open_major, { key: 0 })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_tab_pane, { key: "schoolScore" }, {
                      title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([
                            unref(form).activeTabKey === "schoolScore" ? "text-[#657fff] font-bold" : "",
                            "text-[18px]"
                          ])}"${_scopeId3}> 院校分数 </div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [
                                "text-[18px]",
                                unref(form).activeTabKey === "schoolScore" ? "text-[#657fff] font-bold" : ""
                              ]
                            }, " 院校分数 ", 2)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(form).activeTabKey === "schoolScore") {
                            _push4(ssrRenderComponent(_component_zs_college_score, null, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            unref(form).activeTabKey === "schoolScore" ? (openBlock(), createBlock(_component_zs_college_score, { key: 0 })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_tab_pane, { key: "majorScore" }, {
                      title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([
                            unref(form).activeTabKey === "majorScore" ? "text-[#657fff] font-bold" : "",
                            "text-[18px]"
                          ])}"${_scopeId3}> 专业分数 </div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [
                                "text-[18px]",
                                unref(form).activeTabKey === "majorScore" ? "text-[#657fff] font-bold" : ""
                              ]
                            }, " 专业分数 ", 2)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(form).activeTabKey === "majorScore") {
                            _push4(ssrRenderComponent(_component_zs_college_major_score, null, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            unref(form).activeTabKey === "majorScore" ? (openBlock(), createBlock(_component_zs_college_major_score, { key: 0 })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(_component_a_tab_pane, { key: "enrollmentPlan" }, {
                      title: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([
                            unref(form).activeTabKey === "enrollmentPlan" ? "text-[#657fff] font-bold" : "",
                            "text-[18px]"
                          ])}"${_scopeId3}> 招生计划 </div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: [
                                "text-[18px]",
                                unref(form).activeTabKey === "enrollmentPlan" ? "text-[#657fff] font-bold" : ""
                              ]
                            }, " 招生计划 ", 2)
                          ];
                        }
                      }),
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          if (unref(form).activeTabKey === "enrollmentPlan") {
                            _push4(ssrRenderComponent(_component_zs_college_enrollment_plan, null, null, _parent4, _scopeId3));
                          } else {
                            _push4(`<!---->`);
                          }
                        } else {
                          return [
                            unref(form).activeTabKey === "enrollmentPlan" ? (openBlock(), createBlock(_component_zs_college_enrollment_plan, { key: 0 })) : createCommentVNode("", true)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_tab_pane, { key: "collegeBlurb" }, {
                        title: withCtx(() => [
                          createVNode("div", {
                            class: [
                              "text-[18px]",
                              unref(form).activeTabKey === "collegeBlurb" ? "text-[#657fff] font-bold" : ""
                            ]
                          }, " 院校简介 ", 2)
                        ]),
                        default: withCtx(() => [
                          unref(form).activeTabKey === "collegeBlurb" ? (openBlock(), createBlock(_component_zs_college_blurb, {
                            key: 0,
                            data: unref(data)
                          }, null, 8, ["data"])) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_tab_pane, { key: "openMajor" }, {
                        title: withCtx(() => [
                          createVNode("div", {
                            class: [
                              "text-[18px]",
                              unref(form).activeTabKey === "openMajor" ? "text-[#657fff] font-bold" : ""
                            ]
                          }, " 开设专业 ", 2)
                        ]),
                        default: withCtx(() => [
                          unref(form).activeTabKey === "openMajor" ? (openBlock(), createBlock(_component_zs_college_open_major, { key: 0 })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_tab_pane, { key: "schoolScore" }, {
                        title: withCtx(() => [
                          createVNode("div", {
                            class: [
                              "text-[18px]",
                              unref(form).activeTabKey === "schoolScore" ? "text-[#657fff] font-bold" : ""
                            ]
                          }, " 院校分数 ", 2)
                        ]),
                        default: withCtx(() => [
                          unref(form).activeTabKey === "schoolScore" ? (openBlock(), createBlock(_component_zs_college_score, { key: 0 })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_tab_pane, { key: "majorScore" }, {
                        title: withCtx(() => [
                          createVNode("div", {
                            class: [
                              "text-[18px]",
                              unref(form).activeTabKey === "majorScore" ? "text-[#657fff] font-bold" : ""
                            ]
                          }, " 专业分数 ", 2)
                        ]),
                        default: withCtx(() => [
                          unref(form).activeTabKey === "majorScore" ? (openBlock(), createBlock(_component_zs_college_major_score, { key: 0 })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      }),
                      createVNode(_component_a_tab_pane, { key: "enrollmentPlan" }, {
                        title: withCtx(() => [
                          createVNode("div", {
                            class: [
                              "text-[18px]",
                              unref(form).activeTabKey === "enrollmentPlan" ? "text-[#657fff] font-bold" : ""
                            ]
                          }, " 招生计划 ", 2)
                        ]),
                        default: withCtx(() => [
                          unref(form).activeTabKey === "enrollmentPlan" ? (openBlock(), createBlock(_component_zs_college_enrollment_plan, { key: 0 })) : createCommentVNode("", true)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_list, { bordered: false }, {
                  default: withCtx(() => [
                    createVNode(_component_a_list_item, null, {
                      actions: withCtx(() => [
                        createVNode(_component_a_space, { direction: "vertical" }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              class: "w-[160px] h-[40px] leading-[40px] border-solid border border-[#5AB9FF] rounded-[40px] text-[14px] text-[#5AB9FF] text-center",
                              onClick: clickFollowSchool
                            }, toDisplayString(unref(data).userIsCollect == "1" ? "取消关注" : "+关注"), 1),
                            createVNode("div", { class: "w-[160px] h-[40px] leading-[40px] rounded-[40px] text-[14px] text-center bg-[#7C92FF] text-white" }, " 测测我的录取概率 ")
                          ]),
                          _: 1
                        })
                      ]),
                      default: withCtx(() => [
                        createVNode(_component_a_list_item_meta, null, {
                          avatar: withCtx(() => [
                            createVNode("div", { class: "w-[130px]" }, [
                              createVNode("img", {
                                src: unref(data).logo,
                                class: "w-[120px] cursor-pointer",
                                alt: ""
                              }, null, 8, ["src"])
                            ])
                          ]),
                          title: withCtx(() => [
                            createVNode("div", { class: "text-[24px] cursor-pointer font-bold mb-[10px]" }, toDisplayString(unref(data).yxmc), 1)
                          ]),
                          description: withCtx(() => [
                            createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                              split: withCtx(() => [
                                createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                              ]),
                              default: withCtx(() => {
                                var _a, _b, _c, _d, _e, _f;
                                return [
                                  ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _a.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), unref(data).sf)) == null ? void 0 : _b.label), 1)) : createCommentVNode("", true),
                                  ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _c.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), unref(data).yxLx)) == null ? void 0 : _d.label), 1)) : createCommentVNode("", true),
                                  unref(data).lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(data).lsy), 1)) : createCommentVNode("", true),
                                  ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _e.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), unref(data).bxXz)) == null ? void 0 : _f.label), 1)) : createCommentVNode("", true)
                                ];
                              }),
                              _: 1
                            }),
                            createVNode("div", null, [
                              createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                default: withCtx(() => [
                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(data).schoolTags, (tag, index2) => {
                                    return openBlock(), createBlock("span", {
                                      key: index2,
                                      class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                                    }, toDisplayString(tag), 1);
                                  }), 128))
                                ]),
                                _: 1
                              })
                            ]),
                            createVNode("div", { class: "flex items-center text-[#333]" }, [
                              unref(data).dh ? (openBlock(), createBlock("div", { key: 0 }, "招生电话：" + toDisplayString(unref(data).dh), 1)) : createCommentVNode("", true),
                              createVNode(_component_a_tooltip, {
                                content: unref(data).bbDz
                              }, {
                                default: withCtx(() => [
                                  unref(data).bbDz ? (openBlock(), createBlock("div", {
                                    key: 0,
                                    class: "mx-[20px] w-[300px] truncate"
                                  }, " 官方地址：" + toDisplayString(unref(data).bbDz), 1)) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["content"]),
                              createVNode(_component_nuxt_link, {
                                to: unref(data).wz,
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  unref(data).wz ? (openBlock(), createBlock("span", {
                                    key: 0,
                                    class: "text-[#5AB9FF]"
                                  }, "进入官方网址>>")) : createCommentVNode("", true)
                                ]),
                                _: 1
                              }, 8, ["to"])
                            ])
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode(_component_a_tabs, {
                  "active-key": unref(form).activeTabKey,
                  "onUpdate:activeKey": ($event) => unref(form).activeTabKey = $event,
                  animation: "",
                  onChange: changeTabs,
                  "destroy-on-hide": ""
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_tab_pane, { key: "collegeBlurb" }, {
                      title: withCtx(() => [
                        createVNode("div", {
                          class: [
                            "text-[18px]",
                            unref(form).activeTabKey === "collegeBlurb" ? "text-[#657fff] font-bold" : ""
                          ]
                        }, " 院校简介 ", 2)
                      ]),
                      default: withCtx(() => [
                        unref(form).activeTabKey === "collegeBlurb" ? (openBlock(), createBlock(_component_zs_college_blurb, {
                          key: 0,
                          data: unref(data)
                        }, null, 8, ["data"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_tab_pane, { key: "openMajor" }, {
                      title: withCtx(() => [
                        createVNode("div", {
                          class: [
                            "text-[18px]",
                            unref(form).activeTabKey === "openMajor" ? "text-[#657fff] font-bold" : ""
                          ]
                        }, " 开设专业 ", 2)
                      ]),
                      default: withCtx(() => [
                        unref(form).activeTabKey === "openMajor" ? (openBlock(), createBlock(_component_zs_college_open_major, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_tab_pane, { key: "schoolScore" }, {
                      title: withCtx(() => [
                        createVNode("div", {
                          class: [
                            "text-[18px]",
                            unref(form).activeTabKey === "schoolScore" ? "text-[#657fff] font-bold" : ""
                          ]
                        }, " 院校分数 ", 2)
                      ]),
                      default: withCtx(() => [
                        unref(form).activeTabKey === "schoolScore" ? (openBlock(), createBlock(_component_zs_college_score, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_tab_pane, { key: "majorScore" }, {
                      title: withCtx(() => [
                        createVNode("div", {
                          class: [
                            "text-[18px]",
                            unref(form).activeTabKey === "majorScore" ? "text-[#657fff] font-bold" : ""
                          ]
                        }, " 专业分数 ", 2)
                      ]),
                      default: withCtx(() => [
                        unref(form).activeTabKey === "majorScore" ? (openBlock(), createBlock(_component_zs_college_major_score, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    createVNode(_component_a_tab_pane, { key: "enrollmentPlan" }, {
                      title: withCtx(() => [
                        createVNode("div", {
                          class: [
                            "text-[18px]",
                            unref(form).activeTabKey === "enrollmentPlan" ? "text-[#657fff] font-bold" : ""
                          ]
                        }, " 招生计划 ", 2)
                      ]),
                      default: withCtx(() => [
                        unref(form).activeTabKey === "enrollmentPlan" ? (openBlock(), createBlock(_component_zs_college_enrollment_plan, { key: 0 })) : createCommentVNode("", true)
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["active-key", "onUpdate:activeKey"])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(ssrRenderComponent(_component_zs_no_data, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>糟糕，页面好像没找到</div>`);
            } else {
              return [
                createVNode("div", null, "糟糕，页面好像没找到")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/college/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-c424849f.js.map
