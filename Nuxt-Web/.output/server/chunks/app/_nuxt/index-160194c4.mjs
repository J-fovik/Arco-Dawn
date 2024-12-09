import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { I as Image, a as ImagePreviewGroup } from './index-25609e16.mjs';
import { R as RadioGroup, a as Radio } from './index-63900e07.mjs';
import { S as Space } from './index-8bcd588e.mjs';
import { T as Table } from './index-6a06d329.mjs';
import { _ as __nuxt_component_2$1 } from './index-4dfe90df.mjs';
import { s as setGlobalConfig, a as getComponentPrefix, _ as _export_sfc, g as getPrefixCls, u as useFormItem, l as isFunction, m as isBoolean, I as IconLoading, n as IconClose, i as isNumber, h as useSize, N as NOOP, e as isObject, p as useI18n, q as IconExclamationCircleFill, r as IconHover, t as isPromise, B as Button, j as isArray } from './use-teleport-container-1599a5a4.mjs';
import { P as Pagination } from './index-90aba227.mjs';
import { c as IconEye } from './index-dd449d78.mjs';
import { a as IconPlus } from './index-08fdf206.mjs';
import { u as useHead, g as useRoute, a as useRouter, b as useUser, e as useAsyncData, A as API_URLS, n as navigateTo, f as useNuxtApp, _ as __nuxt_component_1 } from '../server.mjs';
import { useSSRContext, defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, toRefs, computed, provide, reactive, withAsyncContext, createCommentVNode, createTextVNode, createElementBlock, normalizeClass, normalizeStyle, resolveComponent, createSlots, renderSlot, normalizeProps, guardReactiveProps, TransitionGroup, inject, createElementVNode } from 'vue';
import { u as useForm, a as useModal } from './useArco-b2247a5c.mjs';
import { u as useLoading } from './useLoading-35bd0ba7.mjs';
import { u as useBasicsState } from './useBasicsState-8a7a18a4.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import { h as hidePhoneFormat, f as formatDate, a as turnThousandth, t as textFormat, d as downloadBlob } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import NP from 'number-precision';
import { I as IconCheck } from './index-0c9f2c90.mjs';
import { T as Tooltip } from './index-5f48af9c.mjs';
import { I as IconImageClose } from './index-3943ca28.mjs';
import { _ as _export_sfc$1 } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { L as List, a as ListItem, b as ListItemMeta } from './index-7a08c899.mjs';
import { _ as _sfc_main$m } from './index-c58e1e57.mjs';
import { _ as _sfc_main$n } from './index-33e76c07.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-99c863e4.mjs';
import { a as _sfc_main$1$1 } from './index-3959f291.mjs';
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
import './index-f6f6f2a5.mjs';
import './index-11d38f35.mjs';
import './get-value-by-path-11166a95.mjs';
import './use-children-components-d7e0e48f.mjs';
import './index-d47379ff.mjs';
import 'compute-scroll-into-view';
import 'b-validate';
import './index-4ecc34e0.mjs';
import './options-7ec13930.mjs';
import 'resize-observer-polyfill';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@iconify/vue';
import './NuxtImg-9bcbe2bb.mjs';

const _sfc_main$l = /* @__PURE__ */ defineComponent({
  name: "IconExclamation",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-exclamation`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$c = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$a = /* @__PURE__ */ createElementVNode("path", { d: "M23 9h2v21h-2z" }, null, -1);
const _hoisted_3$a = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  stroke: "none",
  d: "M23 9h2v21h-2z"
}, null, -1);
const _hoisted_4$5 = /* @__PURE__ */ createElementVNode("path", { d: "M23 37h2v2h-2z" }, null, -1);
const _hoisted_5$2 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  stroke: "none",
  d: "M23 37h2v2h-2z"
}, null, -1);
const _hoisted_6$1 = [
  _hoisted_2$a,
  _hoisted_3$a,
  _hoisted_4$5,
  _hoisted_5$2
];
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_6$1, 14, _hoisted_1$c);
}
var _IconExclamation = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$d]]);
const IconExclamation = Object.assign(_IconExclamation, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExclamation.name, _IconExclamation);
  }
});
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  name: "IconUpload",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-upload`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$b = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$9 = /* @__PURE__ */ createElementVNode("path", { d: "M14.93 17.071 24.001 8l9.071 9.071m-9.07 16.071v-25M40 35v6H8v-6" }, null, -1);
const _hoisted_3$9 = [
  _hoisted_2$9
];
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$9, 14, _hoisted_1$b);
}
var _IconUpload = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$c]]);
const IconUpload = Object.assign(_IconUpload, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconUpload.name, _IconUpload);
  }
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  name: "IconDelete",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-delete`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$a = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$8 = /* @__PURE__ */ createElementVNode("path", { d: "M5 11h5.5m0 0v29a1 1 0 0 0 1 1h25a1 1 0 0 0 1-1V11m-27 0H16m21.5 0H43m-5.5 0H32m-16 0V7h16v4m-16 0h16M20 18v15m8-15v15" }, null, -1);
const _hoisted_3$8 = [
  _hoisted_2$8
];
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$8, 14, _hoisted_1$a);
}
var _IconDelete = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$b]]);
const IconDelete = Object.assign(_IconDelete, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconDelete.name, _IconDelete);
  }
});
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  name: "IconPlayArrowFill",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-play-arrow-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$9 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$7 = /* @__PURE__ */ createElementVNode("path", {
  d: "M17.533 10.974a1 1 0 0 0-1.537.844v24.356a1 1 0 0 0 1.537.844L36.67 24.84a1 1 0 0 0 0-1.688L17.533 10.974Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$7 = [
  _hoisted_2$7
];
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$7, 14, _hoisted_1$9);
}
var _IconPlayArrowFill = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$a]]);
const IconPlayArrowFill = Object.assign(_IconPlayArrowFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconPlayArrowFill.name, _IconPlayArrowFill);
  }
});
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  name: "IconPause",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-pause`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$8 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", { d: "M14 12h4v24h-4zM30 12h4v24h-4z" }, null, -1);
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  stroke: "none",
  d: "M14 12h4v24h-4zM30 12h4v24h-4z"
}, null, -1);
const _hoisted_4$4 = [
  _hoisted_2$6,
  _hoisted_3$6
];
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4$4, 14, _hoisted_1$8);
}
var _IconPause = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$9]]);
const IconPause = Object.assign(_IconPause, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconPause.name, _IconPause);
  }
});
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  name: "IconFileAudio",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-file-audio`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$7 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M37 42H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }, null, -1);
const _hoisted_3$5 = /* @__PURE__ */ createElementVNode("path", {
  d: "M25 30a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("path", { d: "M25 30a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm0 0-.951-12.363a.5.5 0 0 1 .58-.532L30 18" }, null, -1);
const _hoisted_5$1 = [
  _hoisted_2$5,
  _hoisted_3$5,
  _hoisted_4$3
];
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_5$1, 14, _hoisted_1$7);
}
var _IconFileAudio = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$8]]);
const IconFileAudio = Object.assign(_IconFileAudio, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFileAudio.name, _IconFileAudio);
  }
});
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  name: "IconFileImage",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-file-image`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$6 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "m26 33 5-6v6h-5Zm0 0-3-4-4 4h7Zm11 9H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2ZM17 19h1v1h-1v-1Z" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$4
];
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$4, 14, _hoisted_1$6);
}
var _IconFileImage = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$7]]);
const IconFileImage = Object.assign(_IconFileImage, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFileImage.name, _IconFileImage);
  }
});
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  name: "IconFilePdf",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-file-pdf`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$5 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M11 42h26a2 2 0 0 0 2-2V13.828a2 2 0 0 0-.586-1.414l-5.828-5.828A2 2 0 0 0 31.172 6H11a2 2 0 0 0-2 2v32a2 2 0 0 0 2 2Z" }, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", { d: "M22.305 21.028c.874 1.939 3.506 6.265 4.903 8.055 1.747 2.237 3.494 2.685 4.368 2.237.873-.447 1.21-4.548-7.425-2.685-7.523 1.623-7.424 3.58-6.988 4.476.728 1.193 2.522 2.627 5.678-6.266C25.699 18.79 24.489 17 23.277 17c-1.409 0-2.538.805-.972 4.028Z" }, null, -1);
const _hoisted_4$2 = [
  _hoisted_2$3,
  _hoisted_3$3
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4$2, 14, _hoisted_1$5);
}
var _IconFilePdf = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$6]]);
const IconFilePdf = Object.assign(_IconFilePdf, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFilePdf.name, _IconFilePdf);
  }
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  name: "IconFileVideo",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-file-video`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_1$4 = ["stroke-width", "stroke-linecap", "stroke-linejoin"];
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", { d: "M37 42H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }, null, -1);
const _hoisted_3$2 = /* @__PURE__ */ createElementVNode("path", { d: "M22 27.796v-6l5 3-5 3Z" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$2,
  _hoisted_3$2
];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4$1, 14, _hoisted_1$4);
}
var _IconFileVideo = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$5]]);
const IconFileVideo = Object.assign(_IconFileVideo, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFileVideo.name, _IconFileVideo);
  }
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  name: "IconFile",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-file`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M16 21h16m-16 8h10m11 13H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h21l7 7v27a2 2 0 0 1-2 2Z" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_3$1, 14, _hoisted_1$3);
}
var _IconFile = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$4]]);
const IconFile = Object.assign(_IconFile, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFile.name, _IconFile);
  }
});
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_STROKE_WIDTH$1 = {
  small: 3,
  medium: 4,
  large: 8
};
const getBackground = (color) => {
  if (!color) {
    return void 0;
  }
  if (isObject(color)) {
    const val = Object.keys(color).map((key) => `${color[key]} ${key}`).join(",");
    return {
      backgroundImage: `linear-gradient(to right, ${val})`
    };
  }
  return {
    backgroundColor: color
  };
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  name: "ProgressLine",
  components: {
    IconExclamationCircleFill
  },
  props: {
    percent: {
      type: Number,
      default: 0
    },
    animation: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: "medium"
    },
    strokeWidth: {
      type: Number,
      default: 4
    },
    width: {
      type: [Number, String],
      default: "100%"
    },
    color: {
      type: [String, Object],
      default: void 0
    },
    trackColor: String,
    formatText: {
      type: Function,
      default: void 0
    },
    status: {
      type: String
    },
    showText: Boolean
  },
  setup(props) {
    const prefixCls = getPrefixCls("progress-line");
    const strokeWidth = computed(() => {
      if (props.strokeWidth !== 4) {
        return props.strokeWidth;
      }
      return DEFAULT_STROKE_WIDTH$1[props.size];
    });
    const text = computed(() => `${NP.times(props.percent, 100)}%`);
    const style = computed(() => ({
      width: props.width,
      height: `${strokeWidth.value}px`,
      backgroundColor: props.trackColor
    }));
    const barStyle = computed(() => __spreadValues$1({
      width: `${props.percent * 100}%`
    }, getBackground(props.color)));
    return {
      prefixCls,
      style,
      barStyle,
      text
    };
  }
});
const _hoisted_1$2 = ["aria-valuenow"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  return openBlock(), createElementBlock("div", {
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": _ctx.percent,
    class: normalizeClass(`${_ctx.prefixCls}-wrapper`)
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.prefixCls),
      style: normalizeStyle(_ctx.style)
    }, [
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-bar-buffer`)
      }, null, 2),
      createElementVNode("div", {
        class: normalizeClass([`${_ctx.prefixCls}-bar`]),
        style: normalizeStyle(_ctx.barStyle)
      }, null, 6)
    ], 6),
    _ctx.showText ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-text`)
    }, [
      renderSlot(_ctx.$slots, "text", { percent: _ctx.percent }, () => [
        createTextVNode(toDisplayString(_ctx.text) + " ", 1),
        _ctx.status === "danger" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 0 })) : createCommentVNode("v-if", true)
      ])
    ], 2)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1$2);
}
var ProgressLine = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$3]]);
let __ARCO_PROGRESS_SEED = 0;
const DEFAULT_WIDTH = {
  mini: 16,
  small: 48,
  medium: 64,
  large: 80
};
const DEFAULT_STROKE_WIDTH = {
  mini: 4,
  small: 3,
  medium: 4,
  large: 4
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  name: "ProgressCircle",
  components: {
    IconExclamation,
    IconCheck
  },
  props: {
    percent: {
      type: Number,
      default: 0
    },
    type: {
      type: String
    },
    size: {
      type: String,
      default: "medium"
    },
    strokeWidth: {
      type: Number
    },
    width: {
      type: Number,
      default: void 0
    },
    color: {
      type: [String, Object],
      default: void 0
    },
    trackColor: String,
    status: {
      type: String,
      default: void 0
    },
    showText: {
      type: Boolean,
      default: true
    },
    pathStrokeWidth: {
      type: Number
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("progress-circle");
    const isLinearGradient = isObject(props.color);
    const mergedWidth = computed(() => {
      var _a;
      return (_a = props.width) != null ? _a : DEFAULT_WIDTH[props.size];
    });
    const mergedStrokeWidth = computed(() => {
      var _a;
      return (_a = props.strokeWidth) != null ? _a : props.size === "mini" ? mergedWidth.value / 2 : DEFAULT_STROKE_WIDTH[props.size];
    });
    const mergedPathStrokeWidth = computed(() => {
      var _a;
      return (_a = props.pathStrokeWidth) != null ? _a : props.size === "mini" ? mergedStrokeWidth.value : Math.max(2, mergedStrokeWidth.value - 2);
    });
    const radius = computed(() => (mergedWidth.value - mergedStrokeWidth.value) / 2);
    const perimeter = computed(() => Math.PI * 2 * radius.value);
    const center = computed(() => mergedWidth.value / 2);
    const linearGradientId = computed(() => {
      __ARCO_PROGRESS_SEED += 1;
      return `${prefixCls}-linear-gradient-${__ARCO_PROGRESS_SEED}`;
    });
    const text = computed(() => `${NP.times(props.percent, 100)}%`);
    return {
      prefixCls,
      isLinearGradient,
      radius,
      text,
      perimeter,
      center,
      mergedWidth,
      mergedStrokeWidth,
      mergedPathStrokeWidth,
      linearGradientId
    };
  }
});
const _hoisted_1$1 = ["aria-valuenow"];
const _hoisted_2 = ["viewBox"];
const _hoisted_3 = { key: 0 };
const _hoisted_4 = ["id"];
const _hoisted_5 = ["offset", "stop-color"];
const _hoisted_6 = ["cx", "cy", "r", "stroke-width"];
const _hoisted_7 = ["cx", "cy", "r", "stroke-width"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_check = resolveComponent("icon-check");
  const _component_icon_exclamation = resolveComponent("icon-exclamation");
  return openBlock(), createElementBlock("div", {
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": _ctx.percent,
    class: normalizeClass(`${_ctx.prefixCls}-wrapper`),
    style: normalizeStyle({ width: `${_ctx.mergedWidth}px`, height: `${_ctx.mergedWidth}px` })
  }, [
    _ctx.type === "circle" && _ctx.size === "mini" && _ctx.status === "success" ? (openBlock(), createBlock(_component_icon_check, {
      key: 0,
      style: normalizeStyle({ fontSize: _ctx.mergedWidth - 2, color: _ctx.color })
    }, null, 8, ["style"])) : (openBlock(), createElementBlock("svg", {
      key: 1,
      viewBox: `0 0 ${_ctx.mergedWidth} ${_ctx.mergedWidth}`,
      class: normalizeClass(`${_ctx.prefixCls}-svg`)
    }, [
      _ctx.isLinearGradient ? (openBlock(), createElementBlock("defs", _hoisted_3, [
        createElementVNode("linearGradient", {
          id: _ctx.linearGradientId,
          x1: "0",
          y1: "1",
          x2: "0",
          y2: "0"
        }, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(Object.keys(_ctx.color), (key) => {
            return openBlock(), createElementBlock("stop", {
              key,
              offset: key,
              "stop-color": _ctx.color[key]
            }, null, 8, _hoisted_5);
          }), 128))
        ], 8, _hoisted_4)
      ])) : createCommentVNode("v-if", true),
      createElementVNode("circle", {
        class: normalizeClass(`${_ctx.prefixCls}-bg`),
        fill: "none",
        cx: _ctx.center,
        cy: _ctx.center,
        r: _ctx.radius,
        "stroke-width": _ctx.mergedPathStrokeWidth,
        style: normalizeStyle({
          stroke: _ctx.trackColor
        })
      }, null, 14, _hoisted_6),
      createElementVNode("circle", {
        class: normalizeClass(`${_ctx.prefixCls}-bar`),
        fill: "none",
        cx: _ctx.center,
        cy: _ctx.center,
        r: _ctx.radius,
        "stroke-width": _ctx.mergedStrokeWidth,
        style: normalizeStyle({
          stroke: _ctx.isLinearGradient ? `url(#${_ctx.linearGradientId})` : _ctx.color,
          strokeDasharray: _ctx.perimeter,
          strokeDashoffset: (_ctx.percent >= 1 ? 0 : 1 - _ctx.percent) * _ctx.perimeter
        })
      }, null, 14, _hoisted_7)
    ], 10, _hoisted_2)),
    _ctx.showText && _ctx.size !== "mini" ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(`${_ctx.prefixCls}-text`)
    }, [
      renderSlot(_ctx.$slots, "text", { percent: _ctx.percent }, () => [
        _ctx.status === "danger" ? (openBlock(), createBlock(_component_icon_exclamation, { key: 0 })) : _ctx.status === "success" ? (openBlock(), createBlock(_component_icon_check, { key: 1 })) : (openBlock(), createElementBlock(Fragment, { key: 2 }, [
          createTextVNode(toDisplayString(_ctx.text), 1)
        ], 2112))
      ])
    ], 2)) : createCommentVNode("v-if", true)
  ], 14, _hoisted_1$1);
}
var ProgressCircle = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$2]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  name: "ProgressSteps",
  components: {
    IconExclamationCircleFill
  },
  props: {
    steps: {
      type: Number,
      default: 0
    },
    percent: {
      type: Number,
      default: 0
    },
    size: {
      type: String
    },
    color: {
      type: [String, Object],
      default: void 0
    },
    trackColor: String,
    strokeWidth: {
      type: Number
    },
    status: {
      type: String,
      default: void 0
    },
    showText: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("progress-steps");
    const mergedStrokeWidth = computed(() => {
      var _a;
      return ((_a = props.strokeWidth) != null ? _a : props.size === "small") ? 8 : 4;
    });
    const stepList = computed(() => [...Array(props.steps)].map((_, index2) => {
      return props.percent > 0 && props.percent > 1 / props.steps * index2;
    }));
    const text = computed(() => `${NP.times(props.percent, 100)}%`);
    return {
      prefixCls,
      stepList,
      mergedStrokeWidth,
      text
    };
  }
});
const _hoisted_1 = ["aria-valuenow"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  return openBlock(), createElementBlock("div", {
    role: "progressbar",
    "aria-valuemin": "0",
    "aria-valuemax": "100",
    "aria-valuenow": _ctx.percent,
    class: normalizeClass(`${_ctx.prefixCls}-wrapper`)
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.prefixCls),
      style: normalizeStyle({ height: `${_ctx.mergedStrokeWidth}px` })
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.stepList, (active, index2) => {
        return openBlock(), createElementBlock("div", {
          key: index2,
          class: normalizeClass([
            `${_ctx.prefixCls}-item`,
            {
              [`${_ctx.prefixCls}-item-active`]: active
            }
          ]),
          style: normalizeStyle({
            backgroundColor: active ? _ctx.color : _ctx.trackColor
          })
        }, null, 6);
      }), 128))
    ], 6),
    _ctx.showText ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-text`)
    }, [
      renderSlot(_ctx.$slots, "text", { percent: _ctx.percent }, () => [
        createTextVNode(toDisplayString(_ctx.text) + " ", 1),
        _ctx.status === "danger" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 0 })) : createCommentVNode("v-if", true)
      ])
    ], 2)) : createCommentVNode("v-if", true)
  ], 10, _hoisted_1);
}
var ProgressSteps = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$1]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "Progress",
  components: {
    ProgressLine,
    ProgressCircle,
    ProgressSteps
  },
  props: {
    type: {
      type: String,
      default: "line"
    },
    size: {
      type: String
    },
    percent: {
      type: Number,
      default: 0
    },
    steps: {
      type: Number,
      default: 0
    },
    animation: {
      type: Boolean,
      default: false
    },
    strokeWidth: {
      type: Number
    },
    width: {
      type: [Number, String]
    },
    color: {
      type: [String, Object]
    },
    trackColor: String,
    bufferColor: {
      type: [String, Object]
    },
    showText: {
      type: Boolean,
      default: true
    },
    status: {
      type: String
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("progress");
    const { size } = toRefs(props);
    const type = computed(() => props.steps > 0 ? "steps" : props.type);
    const computedStatus = computed(() => {
      return props.status || (props.percent >= 1 ? "success" : "normal");
    });
    const { mergedSize } = useSize(size);
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-type-${type.value}`,
      `${prefixCls}-size-${mergedSize.value}`,
      `${prefixCls}-status-${computedStatus.value}`
    ]);
    return {
      cls,
      computedStatus,
      mergedSize
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_progress_steps = resolveComponent("progress-steps");
  const _component_progress_line = resolveComponent("progress-line");
  const _component_progress_circle = resolveComponent("progress-circle");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.steps > 0 ? (openBlock(), createBlock(_component_progress_steps, {
      key: 0,
      "stroke-width": _ctx.strokeWidth,
      percent: _ctx.percent,
      color: _ctx.color,
      "track-color": _ctx.trackColor,
      width: _ctx.width,
      steps: _ctx.steps,
      size: _ctx.mergedSize,
      "show-text": _ctx.showText
    }, createSlots({ _: 2 }, [
      _ctx.$slots.text ? {
        name: "text",
        fn: withCtx((scope) => [
          renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps(scope)))
        ])
      } : void 0
    ]), 1032, ["stroke-width", "percent", "color", "track-color", "width", "steps", "size", "show-text"])) : _ctx.type === "line" && _ctx.mergedSize !== "mini" ? (openBlock(), createBlock(_component_progress_line, {
      key: 1,
      "stroke-width": _ctx.strokeWidth,
      animation: _ctx.animation,
      percent: _ctx.percent,
      color: _ctx.color,
      "track-color": _ctx.trackColor,
      size: _ctx.mergedSize,
      "buffer-color": _ctx.bufferColor,
      width: _ctx.width,
      "show-text": _ctx.showText,
      status: _ctx.computedStatus
    }, createSlots({ _: 2 }, [
      _ctx.$slots.text ? {
        name: "text",
        fn: withCtx((scope) => [
          renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps(scope)))
        ])
      } : void 0
    ]), 1032, ["stroke-width", "animation", "percent", "color", "track-color", "size", "buffer-color", "width", "show-text", "status"])) : (openBlock(), createBlock(_component_progress_circle, {
      key: 2,
      type: _ctx.type,
      "stroke-width": _ctx.type === "line" ? _ctx.strokeWidth || 4 : _ctx.strokeWidth,
      "path-stroke-width": _ctx.type === "line" ? _ctx.strokeWidth || 4 : _ctx.strokeWidth,
      width: _ctx.width,
      percent: _ctx.percent,
      color: _ctx.color,
      "track-color": _ctx.trackColor,
      size: _ctx.mergedSize,
      "show-text": _ctx.showText,
      status: _ctx.computedStatus
    }, createSlots({ _: 2 }, [
      _ctx.$slots.text ? {
        name: "text",
        fn: withCtx((scope) => [
          renderSlot(_ctx.$slots, "text", normalizeProps(guardReactiveProps(scope)))
        ])
      } : void 0
    ]), 1032, ["type", "stroke-width", "path-stroke-width", "width", "percent", "color", "track-color", "size", "show-text", "status"]))
  ], 2);
}
var _Progress = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render]]);
const Progress = Object.assign(_Progress, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Progress.name, _Progress);
  }
});
const getResponse = (xhr) => {
  const res = xhr.responseText || xhr.response;
  if (!res) {
    return void 0;
  }
  const contentType = xhr.getResponseHeader("Content-Type");
  if (contentType && contentType.includes("json")) {
    try {
      return JSON.parse(res);
    } catch {
      return res;
    }
  }
  return res;
};
const getProgressStatus = (status) => {
  switch (status) {
    case "done":
      return "success";
    case "error":
      return "danger";
    default:
      return "normal";
  }
};
const getValue = (obj, fileItem) => {
  if (isFunction(obj)) {
    return obj(fileItem);
  }
  return obj;
};
const uploadRequest = ({
  fileItem,
  action,
  name: originName,
  data: originData,
  headers = {},
  withCredentials = false,
  onProgress = NOOP,
  onSuccess = NOOP,
  onError = NOOP
}) => {
  const name = getValue(originName, fileItem) || "file";
  const data = getValue(originData, fileItem);
  const xhr = new XMLHttpRequest();
  if (withCredentials) {
    xhr.withCredentials = true;
  }
  xhr.upload.onprogress = (e) => {
    const percent = e.total > 0 ? NP.round(e.loaded / e.total, 2) : 0;
    onProgress(percent, e);
  };
  xhr.onerror = function error(e) {
    onError(e);
  };
  xhr.onload = () => {
    if (xhr.status < 200 || xhr.status >= 300) {
      onError(getResponse(xhr));
      return;
    }
    onSuccess(getResponse(xhr));
  };
  const formData = new FormData();
  if (data) {
    for (const key of Object.keys(data)) {
      formData.append(key, data[key]);
    }
  }
  if (fileItem.file) {
    formData.append(name, fileItem.file);
  }
  xhr.open("post", action != null ? action : "", true);
  for (const key of Object.keys(headers)) {
    xhr.setRequestHeader(key, headers[key]);
  }
  xhr.send(formData);
  return {
    abort() {
      xhr.abort();
    }
  };
};
const isAcceptFile = (file, accept) => {
  if (accept && file) {
    const accepts = isArray(accept) ? accept : accept.split(",").map((x) => x.trim()).filter((x) => x);
    const fileExtension = (file.name.indexOf(".") > -1 ? `.${file.name.split(".").pop()}` : "").toLowerCase();
    return accepts.some((type) => {
      const typeText = type && type.toLowerCase();
      const fileType = (file.type || "").toLowerCase();
      const baseFileType = fileType.split("/")[0];
      if (typeText === fileType || `${baseFileType}${fileExtension.replace(".", "/")}` === typeText) {
        return true;
      }
      if (/^\*(\/\*)?$/.test(typeText)) {
        return true;
      }
      if (/\/\*/.test(typeText)) {
        return fileType.replace(/\/.*$/, "") === typeText.replace(/\/.*$/, "");
      }
      if (/\..*/.test(typeText)) {
        let suffixList = [typeText];
        if (typeText === ".jpg" || typeText === ".jpeg") {
          suffixList = [".jpg", ".jpeg"];
        }
        return suffixList.indexOf(fileExtension) > -1;
      }
      return false;
    });
  }
  return !!file;
};
const loopDirectory = (itemList, accept, callback) => {
  const files = [];
  let restFileCount = 0;
  const onFinish = () => {
    !restFileCount && callback(files);
  };
  const _loopDirectory = (item) => {
    restFileCount += 1;
    if (item == null ? void 0 : item.isFile) {
      item.file((file) => {
        restFileCount -= 1;
        if (isAcceptFile(file, accept)) {
          Object.defineProperty(file, "webkitRelativePath", {
            value: item.fullPath.replace(/^\//, "")
          });
          files.push(file);
        }
        onFinish();
      });
      return;
    }
    if (item == null ? void 0 : item.isDirectory) {
      const reader = item.createReader();
      let flag = false;
      const readEntries = () => {
        reader.readEntries((entries) => {
          if (!flag) {
            restFileCount -= 1;
            flag = true;
          }
          if (entries.length === 0) {
            onFinish();
          } else {
            readEntries();
            entries.forEach(_loopDirectory);
          }
        });
      };
      readEntries();
      return;
    }
    restFileCount -= 1;
    onFinish();
  };
  [].slice.call(itemList).forEach((item) => item.webkitGetAsEntry && _loopDirectory(item.webkitGetAsEntry()));
};
const isImage = (file) => {
  var _a;
  return (_a = file.type) == null ? void 0 : _a.includes("image");
};
const getFiles = (fileList, accept) => {
  if (!fileList) {
    return [];
  }
  const files = Array.from(fileList);
  if (accept) {
    return files.filter((file) => {
      return isAcceptFile(file, accept);
    });
  }
  return files;
};
var UploadButton = /* @__PURE__ */ defineComponent({
  name: "UploadButton",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    directory: {
      type: Boolean,
      default: false
    },
    accept: String,
    listType: {
      type: String
    },
    tip: String,
    draggable: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    uploadFiles: {
      type: Function,
      required: true
    },
    hide: Boolean,
    onButtonClick: {
      type: Function
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("upload");
    const {
      t
    } = useI18n();
    const isDragging = ref(false);
    const inputRef = ref(null);
    const dropRef = ref(null);
    const dragEnterCount = ref(0);
    const setDragEnterCount = (type) => {
      if (type === "subtract") {
        dragEnterCount.value -= 1;
      } else if (type === "add") {
        dragEnterCount.value += 1;
      } else if (type === "reset") {
        dragEnterCount.value = 0;
      }
    };
    const handleClick = (e) => {
      if (props.disabled)
        return;
      if (isFunction(props.onButtonClick)) {
        const result = props.onButtonClick(e);
        if (isPromise(result)) {
          result.then((files) => {
            props.uploadFiles(getFiles(files));
          });
          return;
        }
      }
      if (inputRef.value) {
        inputRef.value.click();
      }
    };
    const handleInputChange = (e) => {
      const target = e.target;
      if (target.files) {
        props.uploadFiles(getFiles(target.files));
      }
      target.value = "";
    };
    const handleDrop = (e) => {
      var _a, _b;
      e.preventDefault();
      isDragging.value = false;
      setDragEnterCount("reset");
      if (props.disabled) {
        return;
      }
      if (props.directory && ((_a = e.dataTransfer) == null ? void 0 : _a.items)) {
        loopDirectory(e.dataTransfer.items, props.accept, (files) => {
          props.uploadFiles(files);
        });
      } else {
        const files = getFiles((_b = e.dataTransfer) == null ? void 0 : _b.files, props.accept);
        props.uploadFiles(props.multiple ? files : files.slice(0, 1));
      }
    };
    const handleDragLeave = (e) => {
      e.preventDefault();
      setDragEnterCount("subtract");
      if (dragEnterCount.value === 0) {
        isDragging.value = false;
        setDragEnterCount("reset");
      }
    };
    const handleDragOver = (e) => {
      e.preventDefault();
      if (!props.disabled && !isDragging.value) {
        isDragging.value = true;
      }
    };
    const renderButton = () => {
      if (slots.default) {
        return createVNode("span", null, [slots.default()]);
      }
      if (props.listType === "picture-card") {
        return createVNode("div", {
          "class": `${prefixCls}-picture-card`
        }, [createVNode("div", {
          "class": `${prefixCls}-picture-card-text`
        }, [createVNode(IconPlus, null, null)]), props.tip && createVNode("div", {
          "class": `${prefixCls}-tip`
        }, [props.tip])]);
      }
      if (props.draggable) {
        return createVNode("div", {
          "class": [`${prefixCls}-drag`, {
            [`${prefixCls}-drag-active`]: isDragging.value
          }]
        }, [createVNode("div", null, [createVNode(IconPlus, null, null)]), createVNode("div", {
          "class": `${prefixCls}-drag-text`
        }, [isDragging.value ? t("upload.dragHover") : t("upload.drag")]), props.tip && createVNode("div", {
          "class": `${prefixCls}-tip`
        }, [props.tip])]);
      }
      return createVNode(Button, {
        "type": "primary",
        "disabled": props.disabled
      }, {
        default: () => [t("upload.buttonText")],
        icon: () => createVNode(IconUpload, null, null)
      });
    };
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-type-picture-card`]: props.listType === "picture-card",
      [`${prefixCls}-draggable`]: props.draggable,
      [`${prefixCls}-disabled`]: props.disabled,
      [`${prefixCls}-hide`]: props.hide
    }]);
    return () => createVNode("span", {
      "ref": dropRef,
      "class": cls.value,
      "onClick": handleClick,
      "onDragenter": () => {
        setDragEnterCount("add");
      },
      "onDrop": handleDrop,
      "onDragover": handleDragOver,
      "onDragleave": handleDragLeave
    }, [createVNode("input", mergeProps({
      "ref": inputRef,
      "type": "file",
      "style": {
        display: "none"
      },
      "disabled": props.disabled,
      "accept": props.accept,
      "multiple": props.multiple
    }, props.directory ? {
      webkitdirectory: "webkitdirectory"
    } : {}, {
      "onChange": handleInputChange
    }), null), renderButton()]);
  }
});
const uploadInjectionKey = Symbol("ArcoUpload");
var UploadProgress = /* @__PURE__ */ defineComponent({
  name: "UploadProgress",
  props: {
    file: {
      type: Object,
      required: true
    },
    listType: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("upload-progress");
    const {
      t
    } = useI18n();
    const uploadCtx = inject(uploadInjectionKey, void 0);
    const renderIcon = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
      if (props.file.status === "error") {
        return createVNode("span", {
          "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-upload`],
          "onClick": () => uploadCtx == null ? void 0 : uploadCtx.onUpload(props.file)
        }, [(uploadCtx == null ? void 0 : uploadCtx.showRetryButton) && ((_e = (_b = uploadCtx == null ? void 0 : (_a = uploadCtx.slots)["retry-icon"]) == null ? void 0 : _b.call(_a)) != null ? _e : (_d = (_c = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _c.retryIcon) == null ? void 0 : _d.call(_c)) || props.listType === "picture-card" ? createVNode(IconUpload, null, null) : t("upload.retry")]);
      }
      if (props.file.status === "done") {
        return createVNode("span", {
          "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-success`]
        }, [(_k = (_j = (_g = uploadCtx == null ? void 0 : (_f = uploadCtx.slots)["success-icon"]) == null ? void 0 : _g.call(_f)) != null ? _j : (_i = (_h = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _h.successIcon) == null ? void 0 : _i.call(_h)) != null ? _k : createVNode(IconCheck, null, null)]);
      }
      if (props.file.status === "init") {
        return createVNode(Tooltip, {
          "content": t("upload.start")
        }, {
          default: () => {
            var _a2, _b2, _c2, _d2, _e2, _f2;
            return [createVNode("span", {
              "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-start`],
              "onClick": () => uploadCtx == null ? void 0 : uploadCtx.onUpload(props.file)
            }, [(_f2 = (_e2 = (_b2 = uploadCtx == null ? void 0 : (_a2 = uploadCtx.slots)["start-icon"]) == null ? void 0 : _b2.call(_a2)) != null ? _e2 : (_d2 = (_c2 = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _c2.startIcon) == null ? void 0 : _d2.call(_c2)) != null ? _f2 : createVNode(IconPlayArrowFill, null, null)])];
          }
        });
      }
      return (uploadCtx == null ? void 0 : uploadCtx.showCancelButton) && createVNode(Tooltip, {
        "content": t("upload.cancel")
      }, {
        default: () => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          return [createVNode("span", {
            "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-cancel`],
            "onClick": () => uploadCtx == null ? void 0 : uploadCtx.onAbort(props.file)
          }, [(_f2 = (_e2 = (_b2 = uploadCtx == null ? void 0 : (_a2 = uploadCtx.slots)["cancel-icon"]) == null ? void 0 : _b2.call(_a2)) != null ? _e2 : (_d2 = (_c2 = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _c2.cancelIcon) == null ? void 0 : _d2.call(_c2)) != null ? _f2 : createVNode(IconPause, null, null)])];
        }
      });
    };
    const renderProgress = () => {
      var _a;
      if (["init", "uploading"].includes((_a = props.file.status) != null ? _a : "")) {
        const status = getProgressStatus(props.file.status);
        return createVNode(Progress, {
          "type": "circle",
          "size": "mini",
          "showText": false,
          "status": status,
          "percent": props.file.percent
        }, null);
      }
      return null;
    };
    return () => createVNode("span", {
      "class": prefixCls
    }, [renderProgress(), renderIcon()]);
  }
});
var UploadListItem = /* @__PURE__ */ defineComponent({
  name: "UploadListItem",
  props: {
    file: {
      type: Object,
      required: true
    },
    listType: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("upload-list");
    const itemCls = `${prefixCls}-item`;
    const {
      t
    } = useI18n();
    const uploadCtx = inject(uploadInjectionKey, void 0);
    const renderFileIcon = () => {
      var _a, _b;
      let type = "";
      if (props.file.file && props.file.file.type) {
        type = props.file.file.type;
      } else {
        const extension = (_b = (_a = props.file.name) == null ? void 0 : _a.split(".")[1]) != null ? _b : "";
        if (["png", "jpg", "jpeg", "bmp", "gif", "webp"].includes(extension)) {
          type = "image";
        } else if (["mp4", "m2v", "mkv", "m4v", "mov"].includes(extension)) {
          type = "video";
        } else if (["mp3", "wav", "wmv", "m4a", "acc", "flac"].includes(extension)) {
          type = "audio";
        }
      }
      if (type.includes("image")) {
        return createVNode(IconFileImage, null, null);
      }
      if (type.includes("pdf")) {
        return createVNode(IconFilePdf, null, null);
      }
      if (type.includes("audio")) {
        return createVNode(IconFileAudio, null, null);
      }
      if (type.includes("video")) {
        return createVNode(IconFileVideo, null, null);
      }
      return createVNode(IconFile, null, null);
    };
    return () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w;
      return createVNode("div", {
        "class": [itemCls, `${itemCls}-${props.file.status}`]
      }, [createVNode("div", {
        "class": `${itemCls}-content`
      }, [(uploadCtx == null ? void 0 : uploadCtx.listType) === "picture" && createVNode("span", {
        "class": `${itemCls}-thumbnail`
      }, [(_c = (_b = uploadCtx == null ? void 0 : (_a = uploadCtx.slots).image) == null ? void 0 : _b.call(_a, {
        fileItem: props.file
      })) != null ? _c : createVNode("img", mergeProps({
        "src": props.file.url,
        "alt": props.file.name
      }, (uploadCtx == null ? void 0 : uploadCtx.imageLoading) ? {
        loading: uploadCtx.imageLoading
      } : void 0), null)]), createVNode("div", {
        "class": `${itemCls}-name`
      }, [(uploadCtx == null ? void 0 : uploadCtx.listType) === "text" && createVNode("span", {
        "class": `${itemCls}-file-icon`
      }, [(_i = (_h = (_e = uploadCtx == null ? void 0 : (_d = uploadCtx.slots)["file-icon"]) == null ? void 0 : _e.call(_d, {
        fileItem: props.file
      })) != null ? _h : (_g = (_f = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _f.fileIcon) == null ? void 0 : _g.call(_f, props.file)) != null ? _i : renderFileIcon()]), (uploadCtx == null ? void 0 : uploadCtx.showLink) && props.file.url ? createVNode("a", mergeProps({
        "class": `${itemCls}-name-link`,
        "target": "_blank",
        "href": props.file.url
      }, (uploadCtx == null ? void 0 : uploadCtx.download) ? {
        download: props.file.name
      } : void 0), [(_o = (_n = (_k = uploadCtx == null ? void 0 : (_j = uploadCtx.slots)["file-name"]) == null ? void 0 : _k.call(_j, {
        fileItem: props.file
      })) != null ? _n : (_m = (_l = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _l.fileName) == null ? void 0 : _m.call(_l, props.file)) != null ? _o : props.file.name]) : createVNode("span", {
        "class": `${itemCls}-name-text`,
        "onClick": () => uploadCtx == null ? void 0 : uploadCtx.onPreview(props.file)
      }, [(_u = (_t = (_q = uploadCtx == null ? void 0 : (_p = uploadCtx.slots)["file-name"]) == null ? void 0 : _q.call(_p, {
        fileItem: props.file
      })) != null ? _t : (_s = (_r = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _r.fileName) == null ? void 0 : _s.call(_r, props.file)) != null ? _u : props.file.name]), props.file.status === "error" && createVNode(Tooltip, {
        "content": t("upload.error")
      }, {
        default: () => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          return [createVNode("span", {
            "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-error`]
          }, [(_f2 = (_e2 = (_b2 = uploadCtx == null ? void 0 : (_a2 = uploadCtx.slots)["error-icon"]) == null ? void 0 : _b2.call(_a2)) != null ? _e2 : (_d2 = (_c2 = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _c2.errorIcon) == null ? void 0 : _d2.call(_c2)) != null ? _f2 : createVNode(IconExclamationCircleFill, null, null)])];
        }
      })]), createVNode(UploadProgress, {
        "file": props.file,
        "listType": props.listType
      }, null)]), (uploadCtx == null ? void 0 : uploadCtx.showRemoveButton) && createVNode("span", {
        "class": `${itemCls}-operation`
      }, [createVNode(IconHover, {
        "onClick": () => {
          var _a2;
          return (_a2 = uploadCtx == null ? void 0 : uploadCtx.onRemove) == null ? void 0 : _a2.call(uploadCtx, props.file);
        }
      }, {
        default: () => {
          var _a2, _b2, _c2, _d2, _e2, _f2;
          return [createVNode("span", {
            "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-remove`]
          }, [(_f2 = (_e2 = (_b2 = uploadCtx == null ? void 0 : (_a2 = uploadCtx.slots)["remove-icon"]) == null ? void 0 : _b2.call(_a2)) != null ? _e2 : (_d2 = (_c2 = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _c2.removeIcon) == null ? void 0 : _d2.call(_c2)) != null ? _f2 : createVNode(IconDelete, null, null)])];
        }
      })]), (_w = uploadCtx == null ? void 0 : (_v = uploadCtx.slots)["extra-button"]) == null ? void 0 : _w.call(_v, {
        fileItem: props.file
      })]);
    };
  }
});
var UploadPictureItem = /* @__PURE__ */ defineComponent({
  name: "UploadPictureItem",
  props: {
    file: {
      type: Object,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("upload-list");
    const itemCls = `${prefixCls}-picture`;
    const cls = computed(() => [itemCls, {
      [`${itemCls}-status-error`]: props.file.status === "error"
    }]);
    const uploadCtx = inject(uploadInjectionKey, void 0);
    const renderCard = () => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C;
      if (props.file.status === "uploading") {
        return createVNode(UploadProgress, {
          "file": props.file,
          "listType": "picture-card"
        }, null);
      }
      return createVNode(Fragment, null, [(_c = (_b = uploadCtx == null ? void 0 : (_a = uploadCtx.slots).image) == null ? void 0 : _b.call(_a, {
        fileItem: props.file
      })) != null ? _c : createVNode("img", mergeProps({
        "src": props.file.url,
        "alt": props.file.name
      }, (uploadCtx == null ? void 0 : uploadCtx.imageLoading) ? {
        loading: uploadCtx.imageLoading
      } : void 0), null), createVNode("div", {
        "class": `${itemCls}-mask`
      }, [props.file.status === "error" && (uploadCtx == null ? void 0 : uploadCtx.showCancelButton) && createVNode("div", {
        "class": `${itemCls}-error-tip`
      }, [createVNode("span", {
        "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-error`]
      }, [(_i = (_h = (_e = uploadCtx == null ? void 0 : (_d = uploadCtx.slots)["error-icon"]) == null ? void 0 : _e.call(_d)) != null ? _h : (_g = (_f = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _f.errorIcon) == null ? void 0 : _g.call(_f)) != null ? _i : createVNode(IconImageClose, null, null)])]), createVNode("div", {
        "class": `${itemCls}-operation`
      }, [props.file.status !== "error" && (uploadCtx == null ? void 0 : uploadCtx.showPreviewButton) && createVNode("span", {
        "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-preview`],
        "onClick": () => uploadCtx == null ? void 0 : uploadCtx.onPreview(props.file)
      }, [(_o = (_n = (_k = uploadCtx == null ? void 0 : (_j = uploadCtx.slots)["preview-icon"]) == null ? void 0 : _k.call(_j)) != null ? _n : (_m = (_l = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _l.previewIcon) == null ? void 0 : _m.call(_l)) != null ? _o : createVNode(IconEye, null, null)]), ["init", "error"].includes(props.file.status) && (uploadCtx == null ? void 0 : uploadCtx.showRetryButton) && createVNode("span", {
        "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-upload`],
        "onClick": () => uploadCtx == null ? void 0 : uploadCtx.onUpload(props.file)
      }, [(_u = (_t = (_q = uploadCtx == null ? void 0 : (_p = uploadCtx.slots)["retry-icon"]) == null ? void 0 : _q.call(_p)) != null ? _t : (_s = (_r = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _r.retryIcon) == null ? void 0 : _s.call(_r)) != null ? _u : createVNode(IconUpload, null, null)]), !(uploadCtx == null ? void 0 : uploadCtx.disabled) && (uploadCtx == null ? void 0 : uploadCtx.showRemoveButton) && createVNode("span", {
        "class": [uploadCtx == null ? void 0 : uploadCtx.iconCls, `${uploadCtx == null ? void 0 : uploadCtx.iconCls}-remove`],
        "onClick": () => uploadCtx == null ? void 0 : uploadCtx.onRemove(props.file)
      }, [(_A = (_z = (_w = uploadCtx == null ? void 0 : (_v = uploadCtx.slots)["remove-icon"]) == null ? void 0 : _w.call(_v)) != null ? _z : (_y = (_x = uploadCtx == null ? void 0 : uploadCtx.customIcon) == null ? void 0 : _x.removeIcon) == null ? void 0 : _y.call(_x)) != null ? _A : createVNode(IconDelete, null, null)]), (_C = uploadCtx == null ? void 0 : (_B = uploadCtx.slots)["extra-button"]) == null ? void 0 : _C.call(_B, props.file)])])]);
    };
    return () => createVNode("span", {
      "class": cls.value
    }, [renderCard()]);
  }
});
var UploadList = /* @__PURE__ */ defineComponent({
  name: "UploadList",
  components: {
    UploadListItem,
    UploadPictureItem
  },
  props: {
    fileList: {
      type: Array,
      required: true
    },
    listType: {
      type: String,
      required: true
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("upload");
    const cls = computed(() => [`${prefixCls}-list`, `${prefixCls}-list-type-${props.listType}`]);
    const renderItem = (fileItem, index2) => {
      if (isFunction(slots["upload-item"])) {
        return slots["upload-item"]({
          fileItem,
          index: index2
        });
      }
      if (props.listType === "picture-card") {
        return createVNode(UploadPictureItem, {
          "file": fileItem,
          "key": `item-${index2}`
        }, null);
      }
      return createVNode(UploadListItem, {
        "file": fileItem,
        "listType": props.listType,
        "key": `item-${index2}`
      }, null);
    };
    return () => createVNode(TransitionGroup, {
      "tag": "div",
      "class": cls.value
    }, {
      default: () => {
        var _a;
        return [...props.fileList.map((item, index2) => renderItem(item, index2)), props.listType === "picture-card" && ((_a = slots["upload-button"]) == null ? void 0 : _a.call(slots))];
      }
    });
  }
});
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var _Upload = /* @__PURE__ */ defineComponent({
  name: "Upload",
  props: {
    fileList: {
      type: Array,
      default: void 0
    },
    defaultFileList: {
      type: Array,
      default: () => []
    },
    accept: String,
    action: String,
    disabled: {
      type: Boolean,
      default: false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    directory: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    tip: String,
    headers: {
      type: Object
    },
    data: {
      type: [Object, Function]
    },
    name: {
      type: [String, Function]
    },
    withCredentials: {
      type: Boolean,
      default: false
    },
    customRequest: {
      type: Function
    },
    limit: {
      type: Number,
      default: 0
    },
    autoUpload: {
      type: Boolean,
      default: true
    },
    showFileList: {
      type: Boolean,
      default: true
    },
    showRemoveButton: {
      type: Boolean,
      default: true
    },
    showRetryButton: {
      type: Boolean,
      default: true
    },
    showCancelButton: {
      type: Boolean,
      default: true
    },
    showUploadButton: {
      type: [Boolean, Object],
      default: true
    },
    showPreviewButton: {
      type: Boolean,
      default: true
    },
    download: {
      type: Boolean,
      default: false
    },
    showLink: {
      type: Boolean,
      default: true
    },
    imageLoading: {
      type: String
    },
    listType: {
      type: String,
      default: "text"
    },
    responseUrlKey: {
      type: [String, Function]
    },
    customIcon: {
      type: Object
    },
    imagePreview: {
      type: Boolean,
      default: false
    },
    onBeforeUpload: {
      type: Function
    },
    onBeforeRemove: {
      type: Function
    },
    onButtonClick: {
      type: Function
    }
  },
  emits: {
    "update:fileList": (fileList) => true,
    "exceedLimit": (fileList, files) => true,
    "change": (fileList, fileItem) => true,
    "progress": (fileItem, ev) => true,
    "preview": (fileItem) => true,
    "success": (fileItem) => true,
    "error": (fileItem) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      fileList,
      disabled,
      listType,
      customIcon,
      showRetryButton,
      showCancelButton,
      showRemoveButton,
      showPreviewButton,
      imageLoading,
      download,
      showLink
    } = toRefs(props);
    const prefixCls = getPrefixCls("upload");
    const {
      mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const _fileList = ref([]);
    const fileMap = /* @__PURE__ */ new Map();
    const requestMap = /* @__PURE__ */ new Map();
    const isMax = computed(() => {
      return props.limit > 0 && _fileList.value.length >= props.limit;
    });
    const checkFileList = (fileList2) => {
      fileMap.clear();
      const newFileList = fileList2 == null ? void 0 : fileList2.map((data, index2) => {
        var _a, _b, _c;
        const status = (_a = data.status) != null ? _a : "done";
        const fileItem = reactive(__spreadProps(__spreadValues({}, data), {
          uid: (_b = data.uid) != null ? _b : `${Date.now()}${index2}`,
          status,
          percent: (_c = data.percent) != null ? _c : ["error", "init"].indexOf(status) > -1 ? 0 : 1
        }));
        fileMap.set(fileItem.uid, fileItem);
        return fileItem;
      });
      _fileList.value = newFileList != null ? newFileList : [];
    };
    checkFileList(props.defaultFileList);
    watch(fileList, (fileList2) => {
      if (fileList2) {
        checkFileList(fileList2);
      }
    }, {
      immediate: true,
      deep: true
    });
    const updateFileList = (file) => {
      var _a, _b;
      emit("update:fileList", _fileList.value);
      emit("change", _fileList.value, file);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a);
    };
    const updateFile = (id, file) => {
      for (const item of _fileList.value) {
        if (item.uid === id) {
          item.file = file;
          updateFileList(item);
          break;
        }
      }
    };
    const uploadFile = (fileItem) => {
      const handleProgress = (percent, event) => {
        const file = fileMap.get(fileItem.uid);
        if (file) {
          file.status = "uploading";
          file.percent = percent;
          emit("progress", file, event);
          updateFileList(file);
        }
      };
      const handleSuccess = (response) => {
        const file = fileMap.get(fileItem.uid);
        if (file) {
          file.status = "done";
          file.percent = 1;
          file.response = response;
          if (props.responseUrlKey) {
            if (isFunction(props.responseUrlKey)) {
              file.url = props.responseUrlKey(file);
            } else if (response[props.responseUrlKey]) {
              file.url = response[props.responseUrlKey];
            }
          }
          requestMap.delete(file.uid);
          emit("success", file);
          updateFileList(file);
        }
      };
      const handleError = (response) => {
        const file = fileMap.get(fileItem.uid);
        if (file) {
          file.status = "error";
          file.percent = 0;
          file.response = response;
          requestMap.delete(file.uid);
          emit("error", file);
          updateFileList(file);
        }
      };
      const option = {
        fileItem,
        action: props.action,
        name: props.name,
        data: props.data,
        headers: props.headers,
        withCredentials: props.withCredentials,
        onProgress: handleProgress,
        onSuccess: handleSuccess,
        onError: handleError
      };
      fileItem.status = "uploading";
      fileItem.percent = 0;
      const request = isFunction(props.customRequest) ? props.customRequest(option) : uploadRequest(option);
      requestMap.set(fileItem.uid, request);
      updateFileList(fileItem);
    };
    const abort = (fileItem) => {
      var _a;
      const req = requestMap.get(fileItem.uid);
      if (req) {
        (_a = req.abort) == null ? void 0 : _a.call(req);
        requestMap.delete(fileItem.uid);
        const file = fileMap.get(fileItem.uid);
        if (file) {
          file.status = "error";
          file.percent = 0;
          updateFileList(file);
        }
      }
    };
    const submit = (fileItem) => {
      if (fileItem) {
        const file = fileMap.get(fileItem.uid);
        if (file) {
          uploadFile(file);
        }
      } else {
        for (const item of _fileList.value) {
          if (item.status === "init") {
            uploadFile(item);
          }
        }
      }
    };
    const initUpload = async (file, index2) => {
      const uid = `${Date.now()}-${index2}`;
      const dataURL = isImage(file) ? URL.createObjectURL(file) : void 0;
      const fileItem = reactive({
        uid,
        file,
        url: dataURL,
        name: file.name,
        status: "init",
        percent: 0
      });
      fileMap.set(uid, fileItem);
      _fileList.value = [..._fileList.value, fileItem];
      updateFileList(fileItem);
      if (props.autoUpload) {
        uploadFile(fileItem);
      }
    };
    const uploadFiles = (files) => {
      if (props.limit > 0 && _fileList.value.length + files.length > props.limit) {
        emit("exceedLimit", _fileList.value, files);
        return;
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (isFunction(props.onBeforeUpload)) {
          Promise.resolve(props.onBeforeUpload(file)).then((result) => {
            if (result) {
              initUpload(isBoolean(result) ? file : result, i);
            }
          }).catch((err) => {
            console.error(err);
          });
        } else {
          initUpload(file, i);
        }
      }
    };
    const removeFile = (fileItem) => {
      _fileList.value = _fileList.value.filter((item) => {
        return item.uid !== fileItem.uid;
      });
      updateFileList(fileItem);
    };
    const handleRemove = (fileItem) => {
      if (isFunction(props.onBeforeRemove)) {
        Promise.resolve(props.onBeforeRemove(fileItem)).then((result) => {
          if (result) {
            removeFile(fileItem);
          }
        }).catch((err) => {
          console.error(err);
        });
      } else {
        removeFile(fileItem);
      }
    };
    const handlePreview = (fileItem) => {
      if (props.imagePreview && fileItem.url) {
        const current = imageList.value.indexOf(fileItem.url);
        if (current > -1) {
          imagePreviewCurrent.value = current;
          imagePreviewVisible.value = true;
        }
      }
      emit("preview", fileItem);
    };
    provide(uploadInjectionKey, reactive({
      disabled: mergedDisabled,
      listType,
      iconCls: `${prefixCls}-icon`,
      showRemoveButton,
      showRetryButton,
      showCancelButton,
      showPreviewButton,
      showLink,
      imageLoading,
      download,
      customIcon,
      slots,
      onUpload: uploadFile,
      onAbort: abort,
      onRemove: handleRemove,
      onPreview: handlePreview
    }));
    const mergedAccept = computed(() => {
      if (props.accept) {
        return props.accept;
      }
      if (props.listType === "picture" || props.listType === "picture-card") {
        return "image/*";
      }
      return void 0;
    });
    const renderButton = () => {
      const button = createVNode(UploadButton, {
        "key": "arco-upload-button",
        "disabled": mergedDisabled.value,
        "draggable": props.draggable,
        "listType": props.listType,
        "uploadFiles": uploadFiles,
        "multiple": props.multiple,
        "directory": props.directory,
        "tip": props.tip,
        "hide": !props.showUploadButton || isMax.value && !(isObject(props.showUploadButton) && props.showUploadButton.showOnExceedLimit),
        "accept": mergedAccept.value,
        "onButtonClick": props.onButtonClick
      }, {
        default: slots["upload-button"]
      });
      if (props.tip && props.listType !== "picture-card" && !props.draggable) {
        return createVNode("span", null, [button, createVNode("div", {
          "class": `${prefixCls}-tip`
        }, [props.tip])]);
      }
      return button;
    };
    const imagePreviewVisible = ref(false);
    const imagePreviewCurrent = ref(0);
    const handleImagePreviewChange = (current) => {
      imagePreviewCurrent.value = current;
    };
    const handleImagePreviewVisibleChange = (visible) => {
      imagePreviewVisible.value = visible;
    };
    const imageList = computed(() => _fileList.value.filter((item) => Boolean(item.url)).map((item) => item.url));
    const render = () => {
      if (!props.showFileList) {
        return props.showUploadButton && renderButton();
      }
      return createVNode("div", {
        "class": [`${prefixCls}-wrapper`, `${prefixCls}-wrapper-type-${props.listType}`]
      }, [props.imagePreview && imageList.value.length > 0 && createVNode(ImagePreviewGroup, {
        "srcList": imageList.value,
        "visible": imagePreviewVisible.value,
        "current": imagePreviewCurrent.value,
        "onChange": handleImagePreviewChange,
        "onVisibleChange": handleImagePreviewVisibleChange
      }, null), props.listType !== "picture-card" && props.showUploadButton && renderButton(), createVNode(UploadList, {
        "fileList": _fileList.value,
        "listType": props.listType
      }, {
        "upload-button": renderButton,
        "upload-item": slots["upload-item"]
      })]);
    };
    return {
      prefixCls,
      render,
      innerSubmit: submit,
      innerAbort: abort,
      innerUpdateFile: updateFile,
      innerUpload: uploadFiles
    };
  },
  methods: {
    submit(fileItem) {
      return this.innerSubmit(fileItem);
    },
    abort(fileItem) {
      return this.innerAbort(fileItem);
    },
    updateFile(id, file) {
      return this.innerUpdateFile(id, file);
    },
    upload(files) {
      return this.innerUpload(files);
    }
  },
  render() {
    return this.render();
  }
});
const Upload = Object.assign(_Upload, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Upload.name, _Upload);
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["change"],
  async setup(__props, { emit: emits }) {
    let __temp, __restore;
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { warningModal } = useModal();
    const { setGlobalLoading } = useLoading();
    const { userInfo, determineLogin } = useUser();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const { form } = useForm(() => ({
      selectRow: {}
      // 当前数据
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 0);
      refresh();
    });
    const createTableColumns = () => {
      return [
        {
          title: "\u5FD7\u613F\u8868\u540D\u79F0",
          dataIndex: "zybt",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "\u6210\u7EE9",
          dataIndex: "score",
          width: 100,
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "\u6279\u6B21",
          dataIndex: "pc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.pc);
          }
        },
        {
          title: "\u521B\u5EFA\u65F6\u95F4",
          dataIndex: "createTm",
          align: "center",
          width: 200,
          ellipsis: true,
          tooltip: true,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "\u64CD\u4F5C",
          dataIndex: "operate",
          align: "center",
          ellipsis: true,
          tooltip: true,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          },
          slotName: "operate"
        }
      ];
    };
    const exportFile = async (row) => {
      warningModal(`\u786E\u5B9A\u5BFC\u51FA\u5FD7\u613F\u8868\u5417`, async (done) => {
        setGlobalLoading(true);
        done(true);
        const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_EXCEL, {
          body: {
            id: row.id
            // 志愿表id
          },
          responseType: "blob"
        });
        if (res) {
          setGlobalLoading(false);
          downloadBlob(res, `${row.zybt}.xlsx`);
        }
      });
    };
    const deleteWish = async (row) => {
      warningModal(`\u786E\u5B9A\u5220\u9664\u5F53\u524D\u5FD7\u613F\u5417`, async (done) => {
        const [err, res] = await $zsFetch(API_URLS.CHOICE.DELETE_MY_WISH, {
          body: {
            id: row.id
            // 当前列id
          }
        });
        done(true);
        if (res) {
          await refresh();
          $zsMsg("success", res.data);
        }
      });
    };
    const setSelectRow = (row, callBack) => {
      form.value.selectRow = row;
      if (callBack)
        callBack();
    };
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "volunteerList",
      async () => {
        var _a2, _b2;
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_MY_WISH, {
          body: {
            currentPage: 1,
            pageSize: 10,
            pagingOrNot: 1
          }
        });
        pagination.value.total = (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.totalCount) != null ? _a2 : 0;
        return (_b2 = (_b = res.data) == null ? void 0 : _b.list) != null ? _b2 : [];
      },
      { default: () => [], immediate: false }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_a_space = Space;
      const _component_a_table = Table;
      const _component_zs_choice_change_score_modal = __nuxt_component_2$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-[24px] leading-[28px] font-bold mb-[20px]">\u6211\u7684\u5FD7\u613F</div>`);
      if (!unref(userInfo).score) {
        _push(`<div class="flex items-center justify-between"><div class="text-[#5AB9FF]"><i class="iconfont icon-tanhao text-[13px]"></i> \u8BBE\u7F6E\u6210\u7EE9\u5206\u6570\u53CA\u9009\u8003\u79D1\u76EE\u540E\uFF0C\u624D\u53EF\u4EE5\u5FD7\u613F\u586B\u62A5\uFF01 </div></div>`);
      } else {
        _push(`<div class="flex items-center justify-between"><div>`);
        if (unref(data)[0]) {
          _push(`<div><span class="mr-[5px]">\u5F53\u524D\u5FD7\u613F\u6210\u7EE9:</span><span class="text-[#FFA864]"><span>${ssrInterpolate((_a = unref(data)[0]) == null ? void 0 : _a.xk)}</span><span class="mx-[10px]">${ssrInterpolate(((_b = unref(data)[0]) == null ? void 0 : _b.score) + "\u5206")}</span><span>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_c = unref(data)[0]) == null ? void 0 : _c.wc) + "\u4F4D")}</span></span><span class="ml-[20px] mr-[10px]">\u7C7B\u578B:</span><span class="text-[#FFA864]">\u666E\u901A\u7C7B</span></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div>`);
        _push(ssrRenderComponent(_component_a_space, {
          size: "medium",
          class: "cursor-pointer"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (unref(data)[0]) {
                _push2(`<div class="w-[112px] h-[47px] leading-[47px] text-center bg-[#FFF7F0] text-[#FFA864] rounded-[8px] text-[18px]"${_scopeId}> \u4FEE\u6539\u6210\u7EE9 </div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`<div class="w-[112px] h-[47px] leading-[47px] text-center bg-[#7C92FF] text-white rounded-[8px] text-[18px]"${_scopeId}> \u65B0\u5EFA\u5FD7\u613F\u8868 </div>`);
            } else {
              return [
                unref(data)[0] ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "w-[112px] h-[47px] leading-[47px] text-center bg-[#FFF7F0] text-[#FFA864] rounded-[8px] text-[18px]",
                  onClick: ($event) => setSelectRow(unref(data)[0], () => unref(setActiveKey)("ZsChoiceChangeScoreModal"))
                }, " \u4FEE\u6539\u6210\u7EE9 ", 8, ["onClick"])) : createCommentVNode("", true),
                createVNode("div", {
                  class: "w-[112px] h-[47px] leading-[47px] text-center bg-[#7C92FF] text-white rounded-[8px] text-[18px]",
                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice/buildWish`)
                }, " \u65B0\u5EFA\u5FD7\u613F\u8868 ", 8, ["onClick"])
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      }
      _push(ssrRenderComponent(_component_a_table, {
        class: "mt-[20px] cursor-pointer",
        "table-layout-fixed": "",
        columns: createTableColumns(),
        data: unref(data),
        loading: unref(status) === "pending",
        pagination: unref(pagination),
        onPageChange: unref(onPageChange),
        onPageSizeChange: unref(onPageSizeChange),
        bordered: { wrapper: true, cell: true }
      }, {
        operate: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-[14px] text-[#FFA864]"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<div${_scopeId2}>\u7EE7\u7EED\u586B\u62A5</div>`);
                  if (((_a2 = unref(userInfo)) == null ? void 0 : _a2.vipStateValue) == "1") {
                    _push3(`<div${_scopeId2}> \u67E5\u770B </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", {
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice?wid=${record.id}`)
                    }, "\u7EE7\u7EED\u586B\u62A5", 8, ["onClick"]),
                    ((_b2 = unref(userInfo)) == null ? void 0 : _b2.vipStateValue) == "1" ? (openBlock(), createBlock("div", {
                      key: 0,
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice/detail?wid=${record.id}`)
                    }, " \u67E5\u770B ", 8, ["onClick"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, null, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div${_scopeId2}>\u5BFC\u51FA</div><div${_scopeId2}>\u5220\u9664</div>`);
                } else {
                  return [
                    createVNode("div", {
                      onClick: ($event) => exportFile(record)
                    }, "\u5BFC\u51FA", 8, ["onClick"]),
                    createVNode("div", {
                      onClick: ($event) => deleteWish(record)
                    }, "\u5220\u9664", 8, ["onClick"])
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-[14px] text-[#FFA864]" }, [
                createVNode("div", null, [
                  createVNode(_component_a_space, null, {
                    default: withCtx(() => {
                      var _a2;
                      return [
                        createVNode("div", {
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice?wid=${record.id}`)
                        }, "\u7EE7\u7EED\u586B\u62A5", 8, ["onClick"]),
                        ((_a2 = unref(userInfo)) == null ? void 0 : _a2.vipStateValue) == "1" ? (openBlock(), createBlock("div", {
                          key: 0,
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice/detail?wid=${record.id}`)
                        }, " \u67E5\u770B ", 8, ["onClick"])) : createCommentVNode("", true)
                      ];
                    }),
                    _: 2
                  }, 1024)
                ]),
                createVNode("div", null, [
                  createVNode(_component_a_space, null, {
                    default: withCtx(() => [
                      createVNode("div", {
                        onClick: ($event) => exportFile(record)
                      }, "\u5BFC\u51FA", 8, ["onClick"]),
                      createVNode("div", {
                        onClick: ($event) => deleteWish(record)
                      }, "\u5220\u9664", 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024)
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(activeKey) === "ZsChoiceChangeScoreModal") {
        _push(ssrRenderComponent(_component_zs_choice_change_score_modal, {
          data: unref(form).selectRow,
          isRequest: true,
          onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null)),
          onSuccess: () => {
            setSelectRow({}, () => unref(setActiveKey)(null)), unref(refresh)();
          }
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsPersonalVolunteer/index.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const createTableColumns = () => {
      return [
        {
          title: "\u6D4B\u8BC4\u7C7B\u578B",
          dataIndex: "name",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          },
          slotName: "name"
        },
        {
          title: "\u6D4B\u8BC4\u65F6\u95F4",
          dataIndex: "createTime",
          align: "center",
          width: 200,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(formatDate(record.createTime, "YYYY-MM-DD HH:mm:ss"));
          }
        },
        {
          title: "\u64CD\u4F5C",
          dataIndex: "level3Name",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          },
          slotName: "operate"
        }
      ];
    };
    const viewReport = async (id) => {
      setActiveKey(id + "\u67E5\u770B\u62A5\u544A");
      const [err, res] = await $zsFetch(API_URLS.EVALUATE.VIEW_EVALUATE_REPORT, {
        body: {
          id
        }
      });
      if (res) {
        setActiveKey(null);
        window.open(res.data, "_blank");
      }
    };
    const { data: evaluationList, status } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "evaluationList",
      async () => {
        var _a;
        const [err, res] = await $zsFetch(API_URLS.EVALUATE.GET_MY_EVALUATE_LIST, {});
        return (_a = res.data) != null ? _a : [];
      },
      { default: () => [] }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_table = Table;
      const _component_icon_loading = IconLoading;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="text-[24px] leading-[28px] font-bold mb-[20px]">\u6211\u7684\u6D4B\u8BC4</div>`);
      if (!unref(userInfo).score) {
        _push(`<div class="flex items-center justify-between"><div class="text-[#5AB9FF]"><i class="iconfont icon-tanhao text-[13px]"></i> \u8BBE\u7F6E\u6210\u7EE9\u5206\u6570\u53CA\u9009\u8003\u79D1\u76EE\u540E\uFF0C\u624D\u53EF\u4EE5\u8FDB\u884C\u6D4B\u8BC4\uFF01 </div><div class="w-[112px] h-[47px] leading-[47px] text-center bg-[#7C92FF] text-white rounded-[8px] text-[18px]"> \u5F00\u59CB\u6D4B\u8BC4 </div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_a_table, {
        class: "mt-[20px] cursor-pointer",
        "table-layout-fixed": "",
        columns: createTableColumns(),
        data: unref(evaluationList),
        loading: unref(status) === "pending",
        bordered: { wrapper: true, cell: true }
      }, {
        name: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-left"${_scopeId}>${ssrInterpolate(record.name)}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-left" }, toDisplayString(record.name), 1)
            ];
          }
        }),
        operate: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-[#FFA864]"${_scopeId}>`);
            if (unref(activeKey) === record.id + "\u67E5\u770B\u62A5\u544A") {
              _push2(ssrRenderComponent(_component_icon_loading, null, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`\u67E5\u770B\u62A5\u544A </div>`);
          } else {
            return [
              createVNode("div", {
                class: "text-[#FFA864]",
                onClick: ($event) => viewReport(record.id)
              }, [
                unref(activeKey) === record.id + "\u67E5\u770B\u62A5\u544A" ? (openBlock(), createBlock(_component_icon_loading, { key: 0 })) : createCommentVNode("", true),
                createTextVNode("\u67E5\u770B\u62A5\u544A ")
              ], 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsPersonalEvaluation/index.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _imports_0$1 = "" + publicAssetsURL("images/avatar.png");
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $zsFetch } = useNuxtApp();
    const { userInfo, getUserInfo } = useUser();
    const headerImg = ref(userInfo.value.header || "/images/avatar.png");
    const fileList = ref([]);
    const uploadImg = async (files) => {
      const formData = new FormData();
      formData.append("file", files.at(-1).file);
      const [err, res] = await $zsFetch(API_URLS.USER.UPLOAD_HEAD_IMG, {
        body: formData
      });
      if (err)
        return;
      headerImg.value = res.data;
      fileList.value = [{ url: res.data }];
      getUserInfo();
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_upload = Upload;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-8bef498e><div class="text-[24px] leading-[28px] font-bold" data-v-8bef498e>\u8D26\u53F7\u4FE1\u606F</div><div class="p-[10px_20px] border-solid border border-[#EDEDED] rounded-[4px] cursor-pointer mt-[20px]" data-v-8bef498e><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u5934\u50CF\uFF1A</div><div class="w-[40px] ml-[20px]" data-v-8bef498e>`);
      _push(ssrRenderComponent(_component_a_upload, {
        action: "/",
        "file-list": unref(fileList),
        "show-file-list": false,
        onChange: uploadImg
      }, {
        "upload-button": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative header" data-v-8bef498e${_scopeId}>`);
            if (unref(headerImg)) {
              _push2(`<div data-v-8bef498e${_scopeId}><img${ssrRenderAttr("src", unref(headerImg))} class="w-[40px] h-[40px] rounded-[50%] cursor-pointer" alt="" data-v-8bef498e${_scopeId}></div>`);
            } else {
              _push2(`<div data-v-8bef498e${_scopeId}><img${ssrRenderAttr("src", _imports_0$1)} class="w-[40px] h-[40px] rounded-[50%] cursor-pointer" alt="" data-v-8bef498e${_scopeId}></div>`);
            }
            _push2(`<div class="overlay text-[#fff] text-center leading-[40px] text-[12px]" data-v-8bef498e${_scopeId}> \u66F4\u6362 </div></div>`);
          } else {
            return [
              createVNode("div", { class: "relative header" }, [
                unref(headerImg) ? (openBlock(), createBlock("div", { key: 0 }, [
                  createVNode("img", {
                    src: unref(headerImg),
                    class: "w-[40px] h-[40px] rounded-[50%] cursor-pointer",
                    alt: ""
                  }, null, 8, ["src"])
                ])) : (openBlock(), createBlock("div", { key: 1 }, [
                  createVNode("img", {
                    src: _imports_0$1,
                    class: "w-[40px] h-[40px] rounded-[50%] cursor-pointer",
                    alt: ""
                  })
                ])),
                createVNode("div", { class: "overlay text-[#fff] text-center leading-[40px] text-[12px]" }, " \u66F4\u6362 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u8D26\u53F7\uFF1A</div><div class="ml-[20px]" data-v-8bef498e>${ssrInterpolate(("hidePhoneFormat" in _ctx ? _ctx.hidePhoneFormat : unref(hidePhoneFormat))(unref(userInfo).phone))}</div></div><div class="listItem justify-between" data-v-8bef498e><div class="f-c-c" data-v-8bef498e><div data-v-8bef498e>\u5BC6\u7801\uFF1A</div><div class="ml-[20px]" data-v-8bef498e>******</div></div><div class="text-[#FFA864]" data-v-8bef498e> \u4FEE\u6539\u5BC6\u7801 </div></div></div><div class="text-[24px] font-bold mt-[40px] flex items-center justify-between" data-v-8bef498e><div data-v-8bef498e>\u5B66\u751F\u4FE1\u606F</div><div class="bg-[#FFF7F0] text-[#FFA864] p-[5px_5px] f-c-c rounded-[4px] cursor-pointer" data-v-8bef498e><div class="f-c-c" data-v-8bef498e><i class="iconfont icon-chuangzuo font-bold" data-v-8bef498e></i></div><div class="text-[14px] ml-[10px]" data-v-8bef498e>\u7F16\u8F91\u4FE1\u606F</div></div></div><div class="p-[10px_20px] border-solid border border-[#EDEDED] rounded-[4px] cursor-pointer mt-[20px]" data-v-8bef498e><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u59D3\u540D\uFF1A</div><div class="ml-[20px]" data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).nickName))}</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u6027\u522B\uFF1A</div><div class="ml-[20px]" data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).sex))}</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u9AD8\u8003\u7701\u4EFD\uFF1A</div><div data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).province))}</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u9AD8\u8003\u5E74\u4EFD\uFF1A</div><div data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).gkYear))}</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u6240\u5728\u5730\u533A\uFF1A</div><div data-v-8bef498e>${ssrInterpolate(unref(userInfo).cityName ? `${unref(userInfo).stateName}/${unref(userInfo).cityName}/${unref(userInfo).districtName}` : "-")}</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u5C31\u8BFB\u4E2D\u5B66\uFF1A</div><div data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).highSchool))}</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u9009\u79D1\u4FE1\u606F\uFF1A</div><div data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).xk))}</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u9AD8\u8003\u5206\u6570\uFF1A</div><div data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).score) + "\u5206")}</div></div><div class="listItem" data-v-8bef498e><div data-v-8bef498e>\u7701\u6392\u540D\uFF1A</div><div data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(userInfo).wc)) + "\u4F4D")}</div></div><div class="flex items-center leading-[50px] border-none" data-v-8bef498e><div data-v-8bef498e>\u8003\u8BD5\u7C7B\u578B\uFF1A</div><div data-v-8bef498e>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))("\u666E\u901A\u7C7B"))}</div></div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsPersonalData/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_5 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-8bef498e"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const [loading, setLoading] = useBasicsState(false);
    const { form } = useForm(() => ({
      tabRadio: "\u5173\u6CE8\u7684\u9662\u6821",
      tabRadioList: ["\u5173\u6CE8\u7684\u9662\u6821", "\u5173\u6CE8\u7684\u4E13\u4E1A"],
      schoolList: [],
      // 院校列表
      majorList: []
      // 专业列表
    }));
    const { pagination, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 0);
      if (form.value.tabRadio === "\u5173\u6CE8\u7684\u9662\u6821") {
        getCollegeList();
      } else {
        getMajorList();
      }
    });
    const getCollegeList = async () => {
      setLoading(true);
      const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW_COLLEGE_LIST, {
        body: {
          currentPage: pagination.value.current,
          pageSize: pagination.value.pageSize,
          pagingOrNot: 1
        }
      });
      setLoading(false);
      if (res) {
        pagination.value.total = res.data.totalCount;
        form.value.schoolList = res.data.focusSchool;
      }
    };
    const getMajorList = async () => {
      setLoading(true);
      const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW_MAJOR_LIST, {
        body: {
          currentPage: pagination.value.current,
          pageSize: pagination.value.pageSize,
          pagingOrNot: 1
        }
      });
      setLoading(false);
      if (res) {
        pagination.value.total = res.data.totalCount;
        form.value.majorList = res.data.focusMajor;
      }
    };
    const onFollowFn = async (type, id) => {
      const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW, {
        body: {
          schoolId: type === "schoolList" ? id : "",
          majorId: type === "majorList" ? id : ""
        }
      });
      $zsMsg("success", res.data);
    };
    const onClickFollow = async (type, index2, id) => {
      await onFollowFn(type, id);
      form.value[type][index2].userIsCollect = form.value[type][index2].userIsCollect == 1 ? 0 : 1;
    };
    watch(
      () => form.value.tabRadio,
      async () => {
        switch (form.value.tabRadio) {
          case "\u5173\u6CE8\u7684\u9662\u6821":
            getCollegeList();
            break;
          case "\u5173\u6CE8\u7684\u4E13\u4E1A":
            getMajorList();
            break;
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_zs_school_list_meta = _sfc_main$m;
      const _component_zs_no_data_small = _sfc_main$n;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_a_list_item_meta = ListItemMeta;
      const _component_a_space = Space;
      const _component_a_pagination = Pagination;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-9f6bfaf9>`);
      _push(ssrRenderComponent(_component_a_radio_group, {
        modelValue: unref(form).tabRadio,
        "onUpdate:modelValue": ($event) => unref(form).tabRadio = $event,
        class: "mb-[10px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).tabRadioList, (tab, index2) => {
              _push2(ssrRenderComponent(_component_a_radio, { value: tab }, {
                radio: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": checked }, "text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[4px]"])}" data-v-9f6bfaf9${_scopeId2}>${ssrInterpolate(tab)}</div>`);
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).tabRadioList, (tab, index2) => {
                return openBlock(), createBlock(_component_a_radio, {
                  key: index2,
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
      if (unref(form).tabRadio === "\u5173\u6CE8\u7684\u9662\u6821") {
        _push(`<div data-v-9f6bfaf9>`);
        _push(ssrRenderComponent(_component_a_list, { loading: unref(loading) }, {
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
              ssrRenderList(unref(form).schoolList, (school, index2) => {
                _push2(ssrRenderComponent(_component_a_list_item, {
                  key: school.id,
                  class: "border-dashed border border-[#EDEDED]"
                }, {
                  actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass([
                        school.userIsCollect == 1 ? "border-[#EDEDED]" : "text-[#5AB9FF] border-[#5AB9FF]",
                        "border-solid border rounded-[40px] leading-[40px] px-[20px]"
                      ])}" data-v-9f6bfaf9${_scopeId2}>${ssrInterpolate(school.userIsCollect == 1 ? "\u5DF2\u5173\u6CE8" : "+\u5173\u6CE8")}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [
                            "border-solid border rounded-[40px] leading-[40px] px-[20px]",
                            school.userIsCollect == 1 ? "border-[#EDEDED]" : "text-[#5AB9FF] border-[#5AB9FF]"
                          ],
                          onClick: ($event) => onClickFollow("schoolList", index2, school.id)
                        }, toDisplayString(school.userIsCollect == 1 ? "\u5DF2\u5173\u6CE8" : "+\u5173\u6CE8"), 11, ["onClick"])
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="flex-1" data-v-9f6bfaf9${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_zs_school_list_meta, { school }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "flex-1",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                        }, [
                          createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                        ], 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).schoolList, (school, index2) => {
                  return openBlock(), createBlock(_component_a_list_item, {
                    key: school.id,
                    class: "border-dashed border border-[#EDEDED]"
                  }, {
                    actions: withCtx(() => [
                      createVNode("div", {
                        class: [
                          "border-solid border rounded-[40px] leading-[40px] px-[20px]",
                          school.userIsCollect == 1 ? "border-[#EDEDED]" : "text-[#5AB9FF] border-[#5AB9FF]"
                        ],
                        onClick: ($event) => onClickFollow("schoolList", index2, school.id)
                      }, toDisplayString(school.userIsCollect == 1 ? "\u5DF2\u5173\u6CE8" : "+\u5173\u6CE8"), 11, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "flex-1",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                      }, [
                        createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                      ], 8, ["onClick"])
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
      if (unref(form).tabRadio === "\u5173\u6CE8\u7684\u4E13\u4E1A") {
        _push(`<div data-v-9f6bfaf9>`);
        _push(ssrRenderComponent(_component_a_list, { loading: unref(loading) }, {
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
              ssrRenderList(unref(form).majorList, (major, index2) => {
                _push2(ssrRenderComponent(_component_a_list_item, {
                  key: major.id,
                  class: "cursor-pointer border-dashed border border-[#EDEDED]"
                }, {
                  actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="${ssrRenderClass([
                        major.userIsCollect == 1 ? "border-[#EDEDED]" : "text-[#5AB9FF] border-[#5AB9FF]",
                        "border-solid border rounded-[40px] leading-[40px] px-[20px]"
                      ])}" data-v-9f6bfaf9${_scopeId2}>${ssrInterpolate(major.userIsCollect == 1 ? "\u5DF2\u5173\u6CE8" : "+\u5173\u6CE8")}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: [
                            "border-solid border rounded-[40px] leading-[40px] px-[20px]",
                            major.userIsCollect == 1 ? "border-[#EDEDED]" : "text-[#5AB9FF] border-[#5AB9FF]"
                          ],
                          onClick: ($event) => onClickFollow("majorList", index2, major.id)
                        }, toDisplayString(major.userIsCollect == 1 ? "\u5DF2\u5173\u6CE8" : "+\u5173\u6CE8"), 11, ["onClick"])
                      ];
                    }
                  }),
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_nuxt_link, {
                        to: `/major/${major.id}`
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_a_list_item_meta, null, {
                              title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="text-[20px] text-[#333333] mb-[10px] font-bold" data-v-9f6bfaf9${_scopeId4}>${ssrInterpolate(major.zymc)}</div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1)
                                  ];
                                }
                              }),
                              description: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span class="text-[14px] text-[#333333]" data-v-9f6bfaf9${_scopeId5}>${ssrInterpolate(major.xkml)}/${ssrInterpolate(major.zyl)}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<div class="mt-[10px]" data-v-9f6bfaf9${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-9f6bfaf9${_scopeId5}> \u4E13\u4E1A\u4EE3\u7801\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-9f6bfaf9${_scopeId5}> \u4FEE\u4E1A\u5E74\u9650\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-9f6bfaf9${_scopeId5}> \u6388\u4E88\u5B66\u4F4D\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-9f6bfaf9${_scopeId5}> \u7537\u5973\u6BD4\u4F8B\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl))}</span>`);
                                      } else {
                                        return [
                                          createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                          createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                          createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                          createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  return [
                                    createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "mt-[10px]" }, [
                                      createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                        default: withCtx(() => [
                                          createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                          createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                          createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                          createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_a_list_item_meta, null, {
                                title: withCtx(() => [
                                  createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1)
                                ]),
                                description: withCtx(() => [
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "mt-[10px]" }, [
                                    createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ]),
                                _: 2
                              }, 1024)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_nuxt_link, {
                          to: `/major/${major.id}`
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_a_list_item_meta, null, {
                              title: withCtx(() => [
                                createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1)
                              ]),
                              description: withCtx(() => [
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "mt-[10px]" }, [
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024)
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).majorList, (major, index2) => {
                  return openBlock(), createBlock(_component_a_list_item, {
                    key: major.id,
                    class: "cursor-pointer border-dashed border border-[#EDEDED]"
                  }, {
                    actions: withCtx(() => [
                      createVNode("div", {
                        class: [
                          "border-solid border rounded-[40px] leading-[40px] px-[20px]",
                          major.userIsCollect == 1 ? "border-[#EDEDED]" : "text-[#5AB9FF] border-[#5AB9FF]"
                        ],
                        onClick: ($event) => onClickFollow("majorList", index2, major.id)
                      }, toDisplayString(major.userIsCollect == 1 ? "\u5DF2\u5173\u6CE8" : "+\u5173\u6CE8"), 11, ["onClick"])
                    ]),
                    default: withCtx(() => [
                      createVNode(_component_nuxt_link, {
                        to: `/major/${major.id}`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_list_item_meta, null, {
                            title: withCtx(() => [
                              createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1)
                            ]),
                            description: withCtx(() => [
                              createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "mt-[10px]" }, [
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024)
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
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_a_pagination, {
        class: "justify-end mt-[20px]",
        total: unref(pagination).total,
        current: unref(pagination).current,
        "page-size": unref(pagination).pageSize,
        onChange: unref(onPageChange),
        onPageSizeChange: unref(onPageSizeChange),
        "show-total": "",
        "show-jumper": "",
        "show-page-size": ""
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsPersonalFollow/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["__scopeId", "data-v-9f6bfaf9"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => ({}) }
  },
  emits: ["success"],
  setup(__props, { emit: emits }) {
    const { userInfo, getUserInfo } = useUser();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_icon_close = IconClose;
      const _component_client_only = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[url('/images/buyMember.png')] bg-no-repeat bg-[length:100%_100%] mt-[20px] p-[20px_40px] w-[800px]" }, _attrs))} data-v-cc238c52><div class="flex items-center justify-between" data-v-cc238c52><div class="flex items-center" data-v-cc238c52><div class="w-[40px]" data-v-cc238c52><img${ssrRenderAttr("src", _imports_0$1)} class="w-[40px] cursor-pointer" alt="" data-v-cc238c52></div><div class="ml-[10px]" data-v-cc238c52><div data-v-cc238c52>\u8D26\u53F7\uFF1A${ssrInterpolate(("hidePhoneFormat" in _ctx ? _ctx.hidePhoneFormat : unref(hidePhoneFormat))(unref(userInfo).phone))}</div><div data-v-cc238c52><span data-v-cc238c52>\u5DF2\u9009\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).province))}</span><span class="mx-[10px]" data-v-cc238c52>|</span><span data-v-cc238c52>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).xk))}</span><span class="mx-[10px]" data-v-cc238c52>|</span><span data-v-cc238c52>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(userInfo).score) + "\u5206")}</span></div></div></div>`);
      _push(ssrRenderComponent(_component_icon_close, {
        size: "20",
        class: "cursor-pointer",
        onClick: ($event) => emits("success")
      }, null, _parent));
      _push(`</div><div class="flex items-center justify-center mt-[30px]" data-v-cc238c52><div class="${ssrRenderClass([`text-[${_ctx.data.color}]`, "rounded-[8px] flex items-center flex-col p-[20px] cursor-pointer border"])}" style="${ssrRenderStyle({
        background: _ctx.data.background
      })}" data-v-cc238c52><div class="text-[18px] font-bold" data-v-cc238c52><i class="${ssrRenderClass([_ctx.data.icon, "iconfont"])}" data-v-cc238c52></i> ${ssrInterpolate(_ctx.data.remark)}</div><div class="text-[40px] font-[1000] mt-[10px]" data-v-cc238c52>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.sellingPrice))}<span class="text-[14px]" data-v-cc238c52>\u5143</span></div><del class="" data-v-cc238c52>\u5168\u56FD\u7EDF\u4E00\u96F6\u552E\u4EF7\uFF1A${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.originalPrice))}\u5143</del></div></div>`);
      if (_ctx.data.cardType) {
        _push(`<div class="mt-[50px] w-[667px] mx-[auto]" data-v-cc238c52>`);
        _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
        _push(`</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsBuyMember/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-cc238c52"]]);
const _imports_0 = "" + publicAssetsURL("images/vip.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $zsFetch } = useNuxtApp();
    const { determineLogin } = useUser();
    const [loading, setLoading] = useBasicsState(false);
    const { form } = useForm(() => ({
      list: [
        { background: "#F2F5FF", color: "#7C92FF", icon: "icon-huiyuankax" },
        { background: "#EFF8FF", color: "#5AB9FF", icon: "icon-pinpaix" },
        { background: "#FFF7F0", color: "#FFA864", icon: "icon-huiyuanzunxiangx" }
      ],
      memberList: [],
      memberModal: false
    }));
    const selectRow = ref({});
    const setSelectRow = (row, callBack) => {
      selectRow.value = row;
      if (callBack)
        callBack();
    };
    const getMemberList = async () => {
      setLoading(true);
      const [err, res] = await $zsFetch(API_URLS.USER.GET_VIP_LIST, {
        body: {}
      });
      setLoading(false);
      form.value.memberList = res.data.map((o, i) => {
        return {
          ...o,
          background: form.value.list[i].background,
          color: form.value.list[i].color,
          icon: form.value.list[i].icon
        };
      });
    };
    getMemberList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_list = List;
      const _component_zs_modal = _sfc_main$1$1;
      const _component_zs_buy_member = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_a_list, {
        loading: unref(loading),
        bordered: false
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<img${ssrRenderAttr("src", _imports_0)} class="w-full" alt=""${_scopeId}><div class="flex items-center justify-around relative top-[-90px]"${_scopeId}><!--[-->`);
            ssrRenderList(unref(form).memberList, (item, index2) => {
              _push2(`<div class="${ssrRenderClass([`text-[${item.color}] `, "w-[260px] rounded-[8px] flex items-center flex-col card-box-shadow"])}" style="${ssrRenderStyle({ background: item.background })}"${_scopeId}><div class="flex-1 flex items-center flex-col justify-center text-center"${_scopeId}><div class="flex-1 mt-[30px]"${_scopeId}><div class="text-[18px] font-bold"${_scopeId}><i class="${ssrRenderClass([item.icon, "iconfont"])}"${_scopeId}></i> ${ssrInterpolate(item.remark)}</div><div class="text-[50px] font-[1000] mt-[30px]"${_scopeId}>${ssrInterpolate(item.sellingPrice)}<span class="text-[14px]"${_scopeId}>\u5143</span></div><del class=""${_scopeId}>\u5168\u56FD\u7EDF\u4E00\u96F6\u552E\u4EF7\uFF1A${ssrInterpolate(item.originalPrice)}\u5143</del><div class="mt-[30px]"${_scopeId}>\u6709\u6548\u671F\u622A\u81F3: ${ssrInterpolate(item.validityPeriod)}</div><div class="${ssrRenderClass([`bg-[${item.isHave == "1" ? "" : item.color}] `, "rounded-[8px] w-[200px] h-[40px] leading-[40px] text-center text-[18px] font-bold mt-[20px] cursor-pointer"])}" style="${ssrRenderStyle({
                color: item.isHave == "1" ? item.color : "#ffffff"
              })}"${_scopeId}>${ssrInterpolate(item.isHave == "1" ? "\u5DF2\u5F00\u901A" : "\u7ACB\u5373\u5F00\u901A")}</div></div><div class="mt-[40px] w-[260px] h-[340px] bg-white p-[0px_20px] text-left"${_scopeId}><!--[-->`);
              ssrRenderList(item.equity, (o, i) => {
                _push2(`<div class="mt-[30px]"${_scopeId}><div class="text-[#999] text-[12px]"${_scopeId}>${ssrInterpolate(o.name)}</div><!--[-->`);
                ssrRenderList(o.list, (v) => {
                  _push2(`<div class="mt-[5px]"${_scopeId}><i class="iconfont icon-duihao text-[#7C92FF] mr-[2px]"${_scopeId}></i><span class="text-[#333] text-[14px]"${_scopeId}>${ssrInterpolate(v)}</span></div>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]--></div></div></div>`);
            });
            _push2(`<!--]--></div><div class="bg-[#F5F5F5] rounded-[8px] p-[20px] leading-[18px] relative top-[-40px]"${_scopeId}><div${_scopeId}><span class="font-bold"${_scopeId}>1. \u8D2D\u4E70\u63D0\u793A\uFF1A</span><span${_scopeId}>\u9AD8\u8003\u51FA\u5206\u524D\uFF0C\u5730\u533A\u53CA\u9AD8\u8003\u5E74\u4EFD\u4E0D\u53EF\u4FEE\u6539\uFF0C\u9009\u79D1\u3001\u5206\u6570\u53EF\u4EFB\u610F\u4FEE\u6539\uFF1B\u9AD8\u8003\u51FA\u5206\u540E\uFF0C\u4EC5\u5141\u8BB8\u4FEE\u6539\u4E00\u6B21\u9009\u79D1\uFF0C\u4EC5\u5141\u8BB8\u4FEE\u6539\u4E24\u6B21\u5206\u6570\u3002</span></div><div${_scopeId}><span class="font-bold"${_scopeId}>2. \u4F7F\u7528\u65F6\u95F4\uFF1A</span><span${_scopeId}>\u6709\u6548\u671F\u622A\u81F32025-08-31\u3002</span></div><div${_scopeId}><span class="font-bold"${_scopeId}>3. \u9002\u7528\u5BF9\u8C61\uFF1A</span><span${_scopeId}>\u666E\u901A\u7C7B\u6587\u7406\u79D1\u8003\u751F\u3001\u65B0\u9AD8\u8003\u9009\u79D1\u7C7B\u8003\u751F\uFF08\u63D0\u524D\u6279\u6B21\u53CA\u827A\u672F\u4F53\u80B2\u7C7B\u8003\u751F\u6682\u4E0D\u9002\u7528\uFF09\u3002</span></div><div${_scopeId}><span class="font-bold"${_scopeId}>4. \u9002\u7528\u5E73\u53F0\uFF1A</span><span${_scopeId}>\u4F7F\u7528\u8D2D\u4E70\u8D26\u53F7(\u624B\u673A\u53F7)\u767B\u5F55\u6BD5\u4E1A\u4E4B\u5BB6-\u5347\u5B66\u89C4\u5212\u5B98\u7F51(www.biye.cc)\u53CA\u6BD5\u4E1A\u4E4B\u5BB6-\u5347\u5B66\u89C4\u5212\u5C0F\u7A0B\u5E8F\uFF0C\u5747\u53EF\u4EAB\u53D7\u5FD7\u613F\u586B\u62A5VIP\u670D\u52A1\u3002</span></div><div${_scopeId}><span class="font-bold"${_scopeId}>5. \u6E29\u99A8\u63D0\u793A\uFF1A</span><span${_scopeId}>\u672C\u7CFB\u7EDF\u4EC5\u63D0\u4F9B\u5FD7\u613F\u586B\u62A5\u53C2\u8003\u670D\u52A1\uFF0C\u62DB\u751F\u8BA1\u5212\u4E0E\u5F55\u53D6\u6570\u636E\u8BF7\u4EE5\u5B66\u6821\u5B98\u65B9\u6216\u8003\u8BD5\u9662\u516C\u5E03\u4E3A\u51C6\u3002\u6B63\u5F0F\u586B\u62A5\u8BF7\u524D\u5F80\u8003\u8BD5\u9662\u5B98\u7F51\uFF0C\u5E76\u6839\u636E\u5B98\u65B9\u4FE1\u606F\uFF0C\u505A\u597D\u5FD7\u613F\u6838\u5BF9\u3002</span></div></div>`);
          } else {
            return [
              createVNode("img", {
                src: _imports_0,
                class: "w-full",
                alt: ""
              }),
              createVNode("div", { class: "flex items-center justify-around relative top-[-90px]" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(form).memberList, (item, index2) => {
                  return openBlock(), createBlock("div", {
                    key: index2,
                    class: [`text-[${item.color}] `, "w-[260px] rounded-[8px] flex items-center flex-col card-box-shadow"],
                    style: { background: item.background }
                  }, [
                    createVNode("div", { class: "flex-1 flex items-center flex-col justify-center text-center" }, [
                      createVNode("div", { class: "flex-1 mt-[30px]" }, [
                        createVNode("div", { class: "text-[18px] font-bold" }, [
                          createVNode("i", {
                            class: ["iconfont", item.icon]
                          }, null, 2),
                          createTextVNode(" " + toDisplayString(item.remark), 1)
                        ]),
                        createVNode("div", { class: "text-[50px] font-[1000] mt-[30px]" }, [
                          createTextVNode(toDisplayString(item.sellingPrice), 1),
                          createVNode("span", { class: "text-[14px]" }, "\u5143")
                        ]),
                        createVNode("del", { class: "" }, "\u5168\u56FD\u7EDF\u4E00\u96F6\u552E\u4EF7\uFF1A" + toDisplayString(item.originalPrice) + "\u5143", 1),
                        createVNode("div", { class: "mt-[30px]" }, "\u6709\u6548\u671F\u622A\u81F3: " + toDisplayString(item.validityPeriod), 1),
                        createVNode("div", {
                          class: ["rounded-[8px] w-[200px] h-[40px] leading-[40px] text-center text-[18px] font-bold mt-[20px] cursor-pointer", `bg-[${item.isHave == "1" ? "" : item.color}] `],
                          style: {
                            color: item.isHave == "1" ? item.color : "#ffffff"
                          },
                          onClick: ($event) => {
                            item.isHave == "1" ? "" : unref(determineLogin)(() => {
                              unref(form).memberModal = true, setSelectRow(item);
                            });
                          }
                        }, toDisplayString(item.isHave == "1" ? "\u5DF2\u5F00\u901A" : "\u7ACB\u5373\u5F00\u901A"), 15, ["onClick"])
                      ]),
                      createVNode("div", { class: "mt-[40px] w-[260px] h-[340px] bg-white p-[0px_20px] text-left" }, [
                        (openBlock(true), createBlock(Fragment, null, renderList(item.equity, (o, i) => {
                          return openBlock(), createBlock("div", {
                            key: i,
                            class: "mt-[30px]"
                          }, [
                            createVNode("div", { class: "text-[#999] text-[12px]" }, toDisplayString(o.name), 1),
                            (openBlock(true), createBlock(Fragment, null, renderList(o.list, (v) => {
                              return openBlock(), createBlock("div", {
                                key: v,
                                class: "mt-[5px]"
                              }, [
                                createVNode("i", { class: "iconfont icon-duihao text-[#7C92FF] mr-[2px]" }),
                                createVNode("span", { class: "text-[#333] text-[14px]" }, toDisplayString(v), 1)
                              ]);
                            }), 128))
                          ]);
                        }), 128))
                      ])
                    ])
                  ], 6);
                }), 128))
              ]),
              createVNode("div", { class: "bg-[#F5F5F5] rounded-[8px] p-[20px] leading-[18px] relative top-[-40px]" }, [
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, "1. \u8D2D\u4E70\u63D0\u793A\uFF1A"),
                  createVNode("span", null, "\u9AD8\u8003\u51FA\u5206\u524D\uFF0C\u5730\u533A\u53CA\u9AD8\u8003\u5E74\u4EFD\u4E0D\u53EF\u4FEE\u6539\uFF0C\u9009\u79D1\u3001\u5206\u6570\u53EF\u4EFB\u610F\u4FEE\u6539\uFF1B\u9AD8\u8003\u51FA\u5206\u540E\uFF0C\u4EC5\u5141\u8BB8\u4FEE\u6539\u4E00\u6B21\u9009\u79D1\uFF0C\u4EC5\u5141\u8BB8\u4FEE\u6539\u4E24\u6B21\u5206\u6570\u3002")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, "2. \u4F7F\u7528\u65F6\u95F4\uFF1A"),
                  createVNode("span", null, "\u6709\u6548\u671F\u622A\u81F32025-08-31\u3002")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, "3. \u9002\u7528\u5BF9\u8C61\uFF1A"),
                  createVNode("span", null, "\u666E\u901A\u7C7B\u6587\u7406\u79D1\u8003\u751F\u3001\u65B0\u9AD8\u8003\u9009\u79D1\u7C7B\u8003\u751F\uFF08\u63D0\u524D\u6279\u6B21\u53CA\u827A\u672F\u4F53\u80B2\u7C7B\u8003\u751F\u6682\u4E0D\u9002\u7528\uFF09\u3002")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, "4. \u9002\u7528\u5E73\u53F0\uFF1A"),
                  createVNode("span", null, "\u4F7F\u7528\u8D2D\u4E70\u8D26\u53F7(\u624B\u673A\u53F7)\u767B\u5F55\u6BD5\u4E1A\u4E4B\u5BB6-\u5347\u5B66\u89C4\u5212\u5B98\u7F51(www.biye.cc)\u53CA\u6BD5\u4E1A\u4E4B\u5BB6-\u5347\u5B66\u89C4\u5212\u5C0F\u7A0B\u5E8F\uFF0C\u5747\u53EF\u4EAB\u53D7\u5FD7\u613F\u586B\u62A5VIP\u670D\u52A1\u3002")
                ]),
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold" }, "5. \u6E29\u99A8\u63D0\u793A\uFF1A"),
                  createVNode("span", null, "\u672C\u7CFB\u7EDF\u4EC5\u63D0\u4F9B\u5FD7\u613F\u586B\u62A5\u53C2\u8003\u670D\u52A1\uFF0C\u62DB\u751F\u8BA1\u5212\u4E0E\u5F55\u53D6\u6570\u636E\u8BF7\u4EE5\u5B66\u6821\u5B98\u65B9\u6216\u8003\u8BD5\u9662\u516C\u5E03\u4E3A\u51C6\u3002\u6B63\u5F0F\u586B\u62A5\u8BF7\u524D\u5F80\u8003\u8BD5\u9662\u5B98\u7F51\uFF0C\u5E76\u6839\u636E\u5B98\u65B9\u4FE1\u606F\uFF0C\u505A\u597D\u5FD7\u613F\u6838\u5BF9\u3002")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_zs_modal, {
        "align-center": "",
        show: unref(form).memberModal
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_zs_buy_member, {
              data: unref(selectRow),
              onSuccess: ($event) => setSelectRow({}, () => (unref(form).memberModal = false, getMemberList()))
            }, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_zs_buy_member, {
                data: unref(selectRow),
                onSuccess: ($event) => setSelectRow({}, () => (unref(form).memberModal = false, getMemberList()))
              }, null, 8, ["data", "onSuccess"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsPersonalMember/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "leading-loose text-xs overflow-auto mt-[20px] h-[75vh] no-scrollbar" }, _attrs))}><div class="mx-[30px] py-[30px] leading-[20px]"><div class="font-bold">\u4E00\u3001\u670D\u52A1\u6761\u6B3E\u7684\u786E\u8BA4\u548C\u63A5\u7EB3</div><div class="my-[20px]"> \u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u53CA\u5176\u6D89\u53CA\u5230\u7684\u4EA7\u54C1\u3001\u76F8\u5173\u8F6F\u4EF6\u7684\u6240\u6709\u6743\u548C\u8FD0\u4F5C\u6743\u5F52\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6709\u9650\u516C\u53F8\uFF08\u4EE5\u4E0B\u7B80\u79F0\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\uFF09\u6240\u6709\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4EAB\u6709\u5BF9\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u4E0A\u4E00\u6D3B\u52A8\u7684\u76D1\u7763\u3001\u63D0\u793A\u3001\u68C0\u67E5\u3001\u7EA0\u6B63\u53CA\u5904\u7F5A\u7B49\u6743\u5229\u3002\u7528\u6237\u5728\u6CE8\u518C\u7A0B\u5E8F\u8FC7\u7A0B\u4E2D\u70B9\u51FB&#39;\u540C\u610F&#39;\u6309\u94AE\u5B8C\u6210\u6CE8\u518C\uFF0C\u5373\u8868\u793A\u7528\u6237\u4E0E\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5DF2\u8FBE\u6210\u534F\u8BAE\uFF0C\u81EA\u613F\u63A5\u53D7\u672C\u670D\u52A1\u6761\u6B3E\u7684\u6240\u6709\u5185\u5BB9\u3002 </div><div class="font-bold">\u4E8C\u3001\u670D\u52A1\u4FDD\u62A4\u6761\u6B3E</div><div class="my-[20px] indent-[2rem]"><div> 1\u3001\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u8FD0\u7528\u81EA\u5DF1\u7684\u64CD\u4F5C\u7CFB\u7EDF\u901A\u8FC7\u56FD\u9645\u4E92\u8054\u7F51\u7EDC\u4E3A\u7528\u6237\u63D0\u4F9B\u5404\u9879\u670D\u52A1\uFF0C\u7528\u6237\u5FC5\u987B\uFF1A </div><div>\uFF081\uFF09\u63D0\u4F9B\u8BBE\u5907\uFF0C\u5305\u62EC\u4E2A\u4EBA\u7535\u8111\u4E00\u53F0\u3001\u8C03\u5236\u89E3\u8C03\u5668\u4E00\u4E2A\u53CA\u914D\u5907\u4E0A\u7F51\u88C5\u7F6E\u3002</div><div>\uFF082\uFF09\u4E2A\u4EBA\u4E0A\u7F51\u548C\u652F\u4ED8\u4E0E\u6B64\u670D\u52A1\u6709\u5173\u7684\u7535\u8BDD\u8D39\u7528\u3002</div><div>2\u3001\u8003\u8651\u5230\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4EA7\u54C1\u670D\u52A1\u7684\u91CD\u8981\u6027\uFF0C\u7528\u6237\u540C\u610F</div><div>\uFF081\uFF09\u63D0\u4F9B\u53CA\u65F6\u3001\u8BE6\u5C3D\u53CA\u51C6\u786E\u7684\u4E2A\u4EBA\u8D44\u6599\u3002</div><div> \uFF082\uFF09\u4E0D\u65AD\u66F4\u65B0\u6CE8\u518C\u8D44\u6599\uFF0C\u7B26\u5408\u53CA\u65F6\u3001\u8BE6\u5C3D\u51C6\u786E\u7684\u8981\u6C42\u3002\u6240\u6709\u539F\u59CB\u952E\u5165\u7684\u8D44\u6599\u5C06\u5F15\u7528\u4E3A\u6CE8\u518C\u8D44\u6599\u3002 </div><div>\uFF083\uFF09\u7528\u6237\u5141\u8BB8\u672C\u5E73\u53F0\u63D0\u4F9B\u7B2C\u4E09\u65B9\u670D\u52A1\uFF0C\u4E14\u5411\u7B2C\u4E09\u65B9\u5E73\u53F0\u76F4\u63A5\u8DF3\u8F6C\u3002</div><div> 3\u3001\u7528\u6237\u53EF\u6388\u6743\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5411\u7B2C\u4E09\u65B9\u900F\u9732\u5176\u6CE8\u518C\u8D44\u6599\uFF0C\u5426\u5219\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E0D\u80FD\u516C\u5F00\u7528\u6237\u7684\u59D3\u540D\u3001\u4F4F\u5740\u3001\u51FA\u751F\u5730\u5740\u3001\u7535\u5B50\u90AE\u7BB1\u3001\u5E10\u53F7\u3002\u9664\u975E\uFF1A </div><div> \uFF081\uFF09\u4E8B\u5148\u83B7\u5F97\u7528\u6237\u660E\u786E\u6388\u6743\u540E\uFF0C\u7528\u6237\u8981\u6C42\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6216\u6388\u6743\u67D0\u4EBA\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u670D\u52A1\u6216\u5176\u4ED6\u65B9\u5F0F\u900F\u9732\u8FD9\u4E9B\u4FE1\u606F\u3002 </div><div> \uFF082\uFF09\u76F8\u5E94\u7684\u6CD5\u5F8B\u3001\u6CD5\u89C4\u8981\u6C42\u4EE5\u53CA\u6309\u7167\u6709\u5173\u653F\u5E9C\u4E3B\u7BA1\u90E8\u95E8\u7684\u8981\u6C42\uFF0C\u9700\u8981\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u63D0\u4F9B\u7528\u6237\u7684\u4E2A\u4EBA\u8D44\u6599\u3002 </div><div>\uFF083\uFF09\u4E3A\u4E86\u7EF4\u62A4\u516C\u4F17\u4EE5\u53CA\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u5408\u6CD5\u5229\u76CA\u3002</div><div> \uFF084\uFF09\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u53EF\u80FD\u4F1A\u4E0E\u7B2C\u4E09\u65B9\u5408\u4F5C\u5411\u7528\u6237\u63D0\u4F9B\u76F8\u5173\u7684\u7F51\u7EDC\u670D\u52A1\uFF0C\u5728\u6B64\u60C5\u51B5\u4E0B\uFF0C\u5982\u8BE5\u7B2C\u4E09\u65B9\u540C\u610F\u627F\u62C5\u4E0E\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u540C\u7B49\u7684\u4FDD\u62A4\u7528\u6237\u9690\u79C1\u7684\u8D23\u4EFB\uFF0C\u5219\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u6709\u6743\u5C06\u7528\u6237\u7684\u6CE8\u518C\u8D44\u6599\u7B49\u63D0\u4F9B\u7ED9\u8BE5\u7B2C\u4E09\u65B9\u3002 </div><div> \uFF085\uFF09\u5728\u4E0D\u900F\u9732\u5355\u4E2A\u7528\u6237\u9690\u79C1\u8D44\u6599\u7684\u524D\u63D0\u4E0B\uFF0C\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u6709\u6743\u5BF9\u6574\u4E2A\u7528\u6237\u6570\u636E\u5E93\u8FDB\u884C\u5206\u6790\u5E76\u5BF9\u7528\u6237\u6570\u636E\u5E93\u8FDB\u884C\u5546\u4E1A\u4E0A\u7684\u5229\u7528\u3002 </div><div> 4\u3001\u5982\u679C\u7528\u6237\u63D0\u4F9B\u7684\u8D44\u6599\u4E0D\u51C6\u786E\uFF0C\u4E0D\u771F\u5B9E\uFF0C\u4E0D\u5408\u6CD5\u6709\u6548\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4FDD\u7559\u7ED3\u675F\u7528\u6237\u4F7F\u7528\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5404\u9879\u670D\u52A1\u7684\u6743\u5229\u3002\u7528\u6237\u5728\u4EAB\u7528\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5404\u9879\u670D\u52A1\u7684\u540C\u65F6\uFF0C\u540C\u610F\u63A5\u53D7\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u63D0\u4F9B\u7684\u5404\u7C7B\u4FE1\u606F\u670D\u52A1\u3002 </div><div> 5\u3001\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5B9A\u4E49\u7684\u4FE1\u606F\u5185\u5BB9\u5305\u62EC\uFF1A\u6587\u5B57\u3001\u8F6F\u4EF6\u3001\u58F0\u97F3\u3001\u76F8\u7247\u3001\u5F55\u50CF\u3001\u56FE\u8868\u3001\u5728\u5E7F\u544A\u4E2D\u5168\u90E8\u5185\u5BB9\u3001\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E3A\u7528\u6237\u63D0\u4F9B\u7684\u5546\u4E1A\u4FE1\u606F\u7B49\uFF0C\u6240\u6709\u8FD9\u4E9B\u5185\u5BB9\u53D7\u7248\u6743\u3001\u5546\u6807\u6743\u3001\u548C\u5176\u5B83\u77E5\u8BC6\u4EA7\u6743\u53CA\u6240\u6709\u6743\u6CD5\u5F8B\u7684\u4FDD\u62A4\u3002\u6240\u4EE5\uFF0C\u7528\u6237\u53EA\u80FD\u5728\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6388\u6743\u4E0B\u624D\u80FD\u4F7F\u7528\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u800C\u4E0D\u80FD\u64C5\u81EA\u590D\u5236\u3001\u4FEE\u6539\u3001\u7F16\u64B0\u8FD9\u4E9B\u5185\u5BB9\u3001\u6216\u521B\u9020\u4E0E\u5185\u5BB9\u6709\u5173\u7684\u884D\u751F\u4EA7\u54C1\u3002 </div><div> 6\u3001\u5982\u679C\u7528\u6237\u672A\u9075\u5B88\u672C\u670D\u52A1\u6761\u6B3E\u7684\u4EFB\u4F55\u4E00\u9879\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6709\u6743\u5229\u5373\u7EC8\u6B62\u63D0\u4F9B\u4E00\u5207\u670D\u52A1\uFF0C\u5E76\u4FDD\u7559\u901A\u8FC7\u6CD5\u5F8B\u624B\u6BB5\u8FFD\u7A76\u8D23\u4EFB\u7684\u6743\u5229\u3002 </div><div> 7\u3001\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u63D0\u4F9B\u7684\u670D\u52A1\u7531\u7528\u6237\u81EA\u5DF1\u627F\u62C5\u98CE\u9669\uFF0C\u5728\u9002\u7528\u6CD5\u5F8B\u5141\u8BB8\u7684\u6700\u5927\u8303\u56F4\u5185\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5728\u4EFB\u4F55\u60C5\u51B5\u4E0B\u4E0D\u5C31\u56E0\u4F7F\u7528\u6216\u4E0D\u80FD\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u63D0\u4F9B\u7684\u670D\u52A1\u6240\u53D1\u751F\u7684\u7279\u6B8A\u7684\u3001\u610F\u5916\u7684\u3001\u76F4\u63A5\u6216\u95F4\u63A5\u7684\u635F\u5931\u627F\u62C5\u8D54\u507F\u8D23\u4EFB\u3002\u5373\u4F7F\u5DF2\u4E8B\u5148\u88AB\u544A\u77E5\u8BE5\u635F\u5BB3\u53D1\u751F\u7684\u53EF\u80FD\u6027\u3002 </div><div> 8\u3001\u60A8\u540C\u610F\uFF0C\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u6709\u901A\u8FC7\u90AE\u4EF6\u3001\u77ED\u4FE1\u3001\u7535\u8BDD\u3001APP\u901A\u77E5\u6216\u58F0\u660E\u7B49\u5F62\u5F0F\uFF0C\u5411\u60A8\u53CA\u60A8\u6307\u5B9A\u7684\u6536\u8D27\u4EBA\u53D1\u9001\u8BA2\u5355\u4FE1\u606F\u3001\u4FC3\u9500\u6D3B\u52A8\u3001\u552E\u540E\u670D\u52A1\u3001\u5BA2\u6237\u670D\u52A1\u7B49\u544A\u77E5\u4FE1\u606F\u7684\u6743\u5229\u3002\u5982\u679C\u60A8\u4E0D\u5E0C\u671B\u63A5\u6536\u4E0A\u8FF0\u4FE1\u606F\uFF0C\u53EF\u9000\u8BA2\u3002 </div><div> 9\u3001\u7528\u6237\u987B\u660E\u767D\uFF0C\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u63D0\u4F9B\u7684\u670D\u52A1\u6D89\u53CA\u5230Internet\u670D\u52A1\u548C\u7535\u4FE1\u589E\u503C\u670D\u52A1\uFF0C\u53EF\u80FD\u4F1A\u53D7\u5230\u5404\u4E2A\u73AF\u8282\u4E0D\u7A33\u5B9A\u56E0\u7D20\u7684\u5F71\u54CD\u3002\u56E0\u6B64\u670D\u52A1\u5B58\u5728\u56E0\u4E0D\u53EF\u6297\u529B\u3001\u8BA1\u7B97\u673A\u75C5\u6BD2\u6216\u9ED1\u5BA2\u653B\u51FB\u3001\u56FD\u5BB6\u76F8\u5173\u884C\u4E1A\u4E3B\u7BA1\u90E8\u95E8\u53CA\u7535\u4FE1\u8FD0\u8425\u5546\u7684\u8C03\u6574\u3001\u7CFB\u7EDF\u4E0D\u7A33\u5B9A\u3001\u7528\u6237\u6240\u5728\u4F4D\u7F6E\u3001\u7528\u6237\u5173\u673A\u4EE5\u53CA\u5176\u4ED6\u4EFB\u4F55\u6280\u672F\u3001\u4E92\u8054\u7F51\u7EDC\u3001\u901A\u4FE1\u7EBF\u8DEF\u539F\u56E0\u7B49\u9020\u6210\u7684\u670D\u52A1\u4E2D\u65AD\u6216\u4E0D\u80FD\u6EE1\u8DB3\u7528\u6237\u8981\u6C42\u7684\u98CE\u9669\u3002\u7528\u6237\u987B\u627F\u62C5\u4EE5\u4E0A\u98CE\u9669\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E0D\u4F5C\u62C5\u4FDD\u3002\u5BF9\u56E0\u6B64\u5BFC\u81F4\u7528\u6237\u4E0D\u80FD\u53D1\u9001\u3001\u4E0A\u4F20\u548C\u63A5\u53D7\u9605\u8BFB\u6D88\u606F\u3001\u6216\u63A5\u53D1\u9519\u6D88\u606F\uFF0C\u6216\u65E0\u6CD5\u5B9E\u73B0\u5176\u4ED6\u901A\u8BAF\u6761\u4EF6\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002 </div><div> 10\u3001\u7528\u6237\u987B\u660E\u767D\uFF0C\u5728\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u63D0\u4F9B\u7684\u670D\u52A1\u5B58\u5728\u6709\u6765\u81EA\u4EFB\u4F55\u4ED6\u4EBA\u7684\u5305\u62EC\u5A01\u80C1\u6027\u7684\u3001\u8BFD\u8C24\u6027\u7684\u3001\u4EE4\u4EBA\u53CD\u611F\u7684\u6216\u975E\u6CD5\u7684\u5185\u5BB9\u6216\u884C\u4E3A\u6216\u5BF9\u4ED6\u4EBA\u6743\u5229\u7684\u4FB5\u72AF\uFF08\u5305\u62EC\u77E5\u8BC6\u4EA7\u6743\uFF09\u7684\u533F\u540D\u6216\u5192\u540D\u7684\u4FE1\u606F\u7684\u98CE\u9669\uFF0C\u7528\u6237\u987B\u627F\u62C5\u4EE5\u4E0A\u98CE\u9669\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u548C\u5408\u4F5C\u516C\u53F8\u5BF9\u670D\u52A1\u4E0D\u4F5C\u4EFB\u4F55\u7C7B\u578B\u7684\u62C5\u4FDD\uFF0C\u4E0D\u8BBA\u662F\u660E\u786E\u7684\u6216\u9690\u542B\u7684\uFF0C\u5305\u62EC\u6240\u6709\u6709\u5173\u4FE1\u606F\u771F\u5B9E\u6027\u3001\u9002\u7528\u6027\u3001\u6240\u6709\u6743\u548C\u975E\u4FB5\u6743\u6027\u7684\u9ED8\u793A\u62C5\u4FDD\u548C\u6761\u4EF6\uFF0C\u5BF9\u56E0\u6B64\u5BFC\u81F4\u4EFB\u4F55\u56E0\u7528\u6237\u4E0D\u6B63\u5F53\u6216\u975E\u6CD5\u4F7F\u7528\u670D\u52A1\u4EA7\u751F\u7684\u76F4\u63A5\u3001\u95F4\u63A5\u3001\u5076\u7136\u3001\u7279\u6B8A\u53CA\u540E\u7EED\u7684\u635F\u5BB3\uFF0C\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002 </div></div><div class="font-bold">\u4E09\u3001\u7528\u6237\u8D26\u53F7\u6CE8\u518C\u53CA\u4F7F\u7528\u89C4\u5219</div><div class="my-[20px] indent-[2rem]"><div>1\u3001\u7528\u6237\u7684\u5E10\u53F7\u3001\u5BC6\u7801\u548C\u5B89\u5168\u6027</div><div> \u7528\u6237\u4E00\u65E6\u6210\u529F\u6CE8\u518C\uFF0C\u5C06\u5F97\u5230\u4E00\u4E2A\u5BC6\u7801\u548C\u5E10\u53F7\u3002\u5982\u679C\u7528\u6237\u672A\u4FDD\u7BA1\u597D\u81EA\u5DF1\u7684\u5E10\u53F7\u548C\u5BC6\u7801\u800C\u5BF9\u5176\u81EA\u8EAB\u3001\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6216\u7B2C\u4E09\u65B9\u9020\u6210\u7684\u635F\u5BB3\uFF0C\u7528\u6237\u5C06\u8D1F\u5168\u90E8\u8D23\u4EFB\u3002\u53E6\u5916\uFF0C\u6BCF\u4E2A\u7528\u6237\u90FD\u8981\u5BF9\u5176\u5E10\u6237\u4E2D\u7684\u6240\u6709\u6D3B\u52A8\u548C\u4E8B\u4EF6\u8D1F\u5168\u8D23\u3002\u7528\u6237\u53EF\u968F\u65F6\u6539\u53D8\u81EA\u5DF1\u7684\u5BC6\u7801\u548C\u56FE\u6807\uFF0C\u4E5F\u53EF\u4EE5\u7ED3\u675F\u65E7\u7684\u5E10\u6237\u91CD\u5F00\u4E00\u4E2A\u65B0\u5E10\u6237\u3002\u7528\u6237\u540C\u610F\u82E5\u53D1\u73B0\u4EFB\u4F55\u975E\u6CD5\u4F7F\u7528\u7528\u6237\u5E10\u53F7\u6216\u5B89\u5168\u6F0F\u6D1E\u7684\u60C5\u51B5\uFF0C\u7ACB\u5373\u901A\u544A\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u3002 </div><div>2\u3001\u7528\u6237\u8D26\u53F7\u4F7F\u7528\u89C4\u5219</div><div> \u7279\u522B\u63D0\u793A\u7528\u6237\uFF0C\u4F7F\u7528\u4E92\u8054\u7F51\u5FC5\u987B\u9075\u5B88\u56FD\u5BB6\u6709\u5173\u7684\u653F\u7B56\u548C\u6CD5\u5F8B\uFF0C\u5305\u62EC\u5211\u6CD5\u3001\u56FD\u5BB6\u5B89\u5168\u6CD5\u3001\u4FDD\u5BC6\u6CD5\u3001\u8BA1\u7B97\u673A\u4FE1\u606F\u7CFB\u7EDF\u5B89\u5168\u4FDD\u62A4\u6761\u4F8B\u7B49\uFF0C\u4FDD\u62A4\u56FD\u5BB6\u5229\u76CA\uFF0C\u4FDD\u62A4\u56FD\u5BB6\u5B89\u5168\uFF0C\u5BF9\u4E8E\u8FDD\u6CD5\u4F7F\u7528\u4E92\u8054\u7F51\u7EDC\u800C\u5F15\u8D77\u7684\u4E00\u5207\u8D23\u4EFB\uFF0C\u7531\u7528\u6237\u8D1F\u5168\u90E8\u8D23\u4EFB\u3002 </div><div> \uFF081\uFF09\u7528\u6237\u5728\u7533\u8BF7\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u63D0\u4F9B\u7684\u7F51\u7EDC\u670D\u52A1\u65F6\uFF0C\u5FC5\u987B\u5411\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u63D0\u4F9B\u51C6\u786E\u7684\u4E2A\u4EBA\u8D44\u6599\uFF0C\u5982\u4E2A\u4EBA\u8D44\u6599\u6709\u4EFB\u4F55\u53D8\u52A8\uFF0C\u5FC5\u987B\u53CA\u65F6\u66F4\u65B0\u3002 </div><div> \uFF082\uFF09\u7528\u6237\u6CE8\u518C\u6210\u529F\u540E\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5C06\u7ED9\u4E88\u6BCF\u4E2A\u7528\u6237\u4E00\u4E2A\u7528\u6237\u5E10\u53F7\u53CA\u76F8\u5E94\u7684\u5BC6\u7801\uFF0C\u8BE5\u7528\u6237\u5E10\u53F7\u548C\u5BC6\u7801\u7531\u7528\u6237\u8D1F\u8D23\u4FDD\u7BA1\uFF1B\u7528\u6237\u5E94\u5F53\u5BF9\u4EE5\u5176\u7528\u6237\u5E10\u53F7\u8FDB\u884C\u7684\u6240\u6709\u6D3B\u52A8\u548C\u4E8B\u4EF6\u8D1F\u6CD5\u5F8B\u8D23\u4EFB\u3002 </div><div> \uFF083\uFF09\u7528\u6237\u4E0D\u5F97\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u670D\u52A1\u53D1\u9001\u6216\u4F20\u64AD\u654F\u611F\u4FE1\u606F\u548C\u8FDD\u53CD\u56FD\u5BB6\u6CD5\u5F8B\u5236\u5EA6\u7684\u4FE1\u606F\uFF0C\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u4E0B\u5217\u4FE1\u606F\uFF1A </div><div>1\uFF09\u53CD\u5BF9\u5BAA\u6CD5\u6240\u786E\u5B9A\u7684\u57FA\u672C\u539F\u5219\u7684\uFF1B</div><div>2)\u5371\u5BB3\u56FD\u5BB6\u5B89\u5168\uFF0C\u6CC4\u9732\u56FD\u5BB6\u79D8\u5BC6\uFF0C\u98A0\u8986\u56FD\u5BB6\u653F\u6743\uFF0C\u7834\u574F\u56FD\u5BB6\u7EDF\u4E00\u7684\uFF1B</div><div>3)\u635F\u5BB3\u56FD\u5BB6\u8363\u8A89\u548C\u5229\u76CA\u7684\uFF1B</div><div>4)\u717D\u52A8\u6C11\u65CF\u4EC7\u6068\u3001\u6C11\u65CF\u6B67\u89C6\uFF0C\u7834\u574F\u6C11\u65CF\u56E2\u7ED3\u7684\uFF1B</div><div>5)\u7834\u574F\u56FD\u5BB6\u5B97\u6559\u653F\u7B56\uFF0C\u5BA3\u626C\u90AA\u6559\u548C\u5C01\u5EFA\u8FF7\u4FE1\u7684\uFF1B</div><div>6)\u6563\u5E03\u8C23\u8A00\uFF0C\u6270\u4E71\u793E\u4F1A\u79E9\u5E8F\uFF0C\u7834\u574F\u793E\u4F1A\u7A33\u5B9A\u7684\uFF1B</div><div>7)\u6563\u5E03\u6DEB\u79FD\u3001\u8272\u60C5\u3001\u8D4C\u535A\u3001\u66B4\u529B\u3001\u51F6\u6740\u3001\u6050\u6016\u6216\u8005\u6559\u5506\u72AF\u7F6A\u7684\uFF1B</div><div>8)\u4FAE\u8FB1\u6216\u8005\u8BFD\u8C24\u4ED6\u4EBA\uFF0C\u4FB5\u5BB3\u4ED6\u4EBA\u5408\u6CD5\u6743\u76CA\u7684\uFF1B</div><div>9)\u542B\u6709\u6CD5\u5F8B\u3001\u884C\u653F\u6CD5\u89C4\u7981\u6B62\u7684\u5176\u4ED6\u5185\u5BB9\u7684\u3002</div><div>\uFF084\uFF09\u7528\u6237\u5728\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7F51\u7EDC\u670D\u52A1\u8FC7\u7A0B\u4E2D\uFF0C\u5FC5\u987B\u9075\u5FAA\u4EE5\u4E0B\u539F\u5219\uFF1A</div><div>1)\u9075\u5B88\u4E2D\u56FD\u6709\u5173\u7684\u6CD5\u5F8B\u548C\u6CD5\u89C4\uFF1B</div><div>2)\u4E0D\u5F97\u4E3A\u4EFB\u4F55\u975E\u6CD5\u76EE\u7684\u800C\u4F7F\u7528\u7F51\u7EDC\u670D\u52A1\u7CFB\u7EDF\uFF1B</div><div>3)\u9075\u5B88\u6240\u6709\u4E0E\u7F51\u7EDC\u670D\u52A1\u6709\u5173\u7684\u7F51\u7EDC\u534F\u8BAE\u3001\u89C4\u5B9A\u548C\u7A0B\u5E8F\uFF1B</div><div> 4)\u4E0D\u5F97\u5229\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7F51\u7EDC\u670D\u52A1\u7CFB\u7EDF\u8FDB\u884C\u4EFB\u4F55\u53EF\u80FD\u5BF9\u4E92\u8054\u7F51\u7684\u6B63\u5E38\u8FD0\u8F6C\u9020\u6210\u4E0D\u5229\u5F71\u54CD\u7684\u884C\u4E3A\uFF1B </div><div> 5)\u4E0D\u5F97\u5229\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7EDC\u670D\u52A1\u7CFB\u7EDF\u4F20\u8F93\u4EFB\u4F55\u9A9A\u6270\u6027\u7684\u3001\u4E2D\u4F24\u4ED6\u4EBA\u7684\u3001\u8FB1\u9A82\u6027\u7684\u3001\u6050\u5413\u6027\u7684\u3001\u5EB8\u4FD7\u6DEB\u79FD\u7684\u6216\u5176\u4ED6\u4EFB\u4F55\u975E\u6CD5\u7684\u4FE1\u606F\u8D44\u6599\uFF1B </div><div> 6)\u4E0D\u5F97\u5229\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7EDC\u670D\u52A1\u7CFB\u7EDF\u8FDB\u884C\u4EFB\u4F55\u4E0D\u5229\u4E8E\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u7684\u884C\u4E3A\u3002 </div><div> \uFF085\uFF09\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7F51\u7AD9\u670D\u52A1\uFF0C\u7528\u6237\u5E94\u52A0\u5F3A\u4E2A\u4EBA\u8D44\u6599\u7684\u4FDD\u62A4\u610F\u8BC6\uFF0C\u5E76\u6CE8\u610F\u4E2A\u4EBA\u5BC6\u7801\u7684\u5BC6\u7801\u4FDD\u62A4\u3002 </div><div> \uFF086\uFF09\u76D7\u53D6\u4ED6\u4EBA\u7528\u6237\u5E10\u53F7\u6216\u5229\u7528\u7F51\u7EDC\u901A\u8BAF\u9A9A\u6270\u4ED6\u4EBA\uFF0C\u5747\u5C5E\u4E8E\u975E\u6CD5\u884C\u4E3A\u3002\u7528\u6237\u4E0D\u5F97\u91C7\u7528\u6D4B\u8BD5\u3001\u6B3A\u9A97\u7B49\u4EFB\u4F55\u975E\u6CD5\u624B\u6BB5\uFF0C\u76D7\u53D6\u5176\u4ED6\u7528\u6237\u7684\u5E10\u53F7\u548C\u5BF9\u4ED6\u4EBA\u8FDB\u884C\u9A9A\u6270\u3002 </div></div><div class="font-bold">\u56DB\u3001\u514D\u8D23\u53CA\u8D54\u507F\u58F0\u660E</div><div class="my-[20px] indent-[2rem]"><div> 1\u3001\u7528\u6237\u7406\u89E3\u5E76\u540C\u610F\uFF1A\u6A21\u62DF\u62A5\u5FD7\u613F\u4E3A\u4FE1\u606F\u6280\u672F\u7C7B\u670D\u52A1\uFF0C\u4E00\u7ECF\u6FC0\u6D3B\uFF0C\u5373\u89C6\u4E3A\u4F7F\u7528\u3002\u5DF2\u4F7F\u7528\u60C5\u51B5\u4E0B\uFF0C\u4EE5\u4E0B\u60C5\u5F62\u4E0D\u652F\u6301\u9000\u6B3E\uFF1A </div><div>(1)\u7528\u6237\u56E0\u81EA\u8EAB\u539F\u56E0\u5BFC\u81F4\u4F1A\u5458\u4FE1\u606F\u9519\u8BEF\u7684\u3001\u8BEF\u4E70\u7684;</div><div>(2)\u81EA\u652F\u4ED8\u65F6\u95F4\u8D77\uFF0C\u4F7F\u7528\u4E14\u8D85\u8FC712\u5C0F\u65F6\u7684;</div><div>(3)\u4F7F\u7528\u6570\u636E\u4E14\u5DF2\u751F\u6210\u5FD7\u613F\u8868\u7684;</div><div>(4) \u6210\u7EE9\u4FEE\u6539\u6B21\u6570(2\u6B21)\u5DF2\u6709\u6D88\u8017\u7684;</div><div>(5)\u975E\u4EA7\u54C1\u6216\u670D\u52A1\u539F\u56E0\u7533\u8BF7\u9000\u6B3E\u7684;</div><div>(6)\u5176\u5B83\u7528\u6237\u56E0\u81EA\u8EAB\u539F\u56E0\u7533\u8BF7\u9000\u6B3E\u7684\u3002</div><div> 2\u3001\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5BF9\u76F4\u63A5\u3001\u95F4\u63A5\u3001\u5076\u7136\u3001\u7279\u6B8A\u53CA\u7EE7\u8D77\u7684\u635F\u5BB3\u4E0D\u8D1F\u8D23\u4EFB\uFF0C\u8FD9\u4E9B\u635F\u5BB3\u6765\u81EA\uFF1A\u4E0D\u6B63\u5F53\u4F7F\u7528\u4EA7\u54C1\u670D\u52A1\uFF0C\u5728\u7F51\u4E0A\u8D2D\u4E70\u5546\u54C1\u6216\u7C7B\u4F3C\u670D\u52A1\uFF0C\u5728\u7F51\u4E0A\u8FDB\u884C\u4EA4\u6613\uFF0C\u975E\u6CD5\u4F7F\u7528\u670D\u52A1\u6216\u7528\u6237\u4F20\u9001\u7684\u4FE1\u606F\u6709\u6240\u53D8\u52A8\u3002\u7528\u6237\u7684\u4E0A\u8FF0\u884C\u4E3A\u5F15\u8D77\u5BF9\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6216\u7B2C\u4E09\u65B9\u7684\u635F\u5BB3\uFF0C\u5E94\u5F53\u4F9D\u6CD5\u627F\u62C5\u8D23\u4EFB\u5E76\u5411\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u8FDB\u884C\u8D54\u507F\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u53EF\u4EE5\u81EA\u884C\u6216\u534F\u52A9\u7B2C\u4E09\u65B9\u4F7F\u7528\u7528\u6237\u63D0\u4F9B\u7684\u4EFB\u4F55\u4FE1\u606F\u8FDB\u884C\u7EF4\u6743\u3002 </div><div>3\u3001\u672A\u7ECF\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u540C\u610F\u7981\u6B62\u8FDB\u884C\u5546\u4E1A\u6027\u884C\u4E3A</div><div> \u7528\u6237\u627F\u8BFA\u4E0D\u7ECF\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E66\u9762\u540C\u610F\uFF0C\u4E0D\u80FD\u5229\u7528\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5404\u9879\u670D\u52A1\u5728\u76F8\u5173\u7F51\u7AD9\u4E0A\u8FDB\u884C\u9500\u552E\u6216\u5176\u4ED6\u5546\u4E1A\u6027\u884C\u4E3A\u3002\u7528\u6237\u8FDD\u53CD\u6B64\u7EA6\u5B9A\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5C06\u4F9D\u6CD5\u8FFD\u7A76\u5176\u8FDD\u7EA6\u8D23\u4EFB\uFF0C\u7531\u6B64\u7ED9\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u9020\u6210\u635F\u5931\u7684\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6709\u6743\u8FDB\u884C\u8FFD\u507F\u3002 </div><div>4\u3001\u62D2\u7EDD\u63D0\u4F9B\u62C5\u4FDD</div><div> \u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E0D\u62C5\u4FDD\u670D\u52A1\u4E00\u5B9A\u80FD\u6EE1\u8DB3\u7528\u6237\u7684\u8981\u6C42\uFF0C\u4E5F\u4E0D\u62C5\u4FDD\u670D\u52A1\u4E0D\u4F1A\u53D7\u4E2D\u65AD\uFF0C\u5BF9\u670D\u52A1\u7684\u53CA\u65F6\u6027\u3001\u5B89\u5168\u6027\u3001\u51FA\u9519\u53D1\u751F\u90FD\u4E0D\u4F5C\u62C5\u4FDD\u3002\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u62D2\u7EDD\u63D0\u4F9B\u4EFB\u4F55\u62C5\u4FDD\uFF0C\u5305\u62EC\u4FE1\u606F\u80FD\u5426\u51C6\u786E\u3001\u53CA\u65F6\u3001\u987A\u5229\u5730\u4F20\u9001\u3002 </div><div> \u7528\u6237\u7406\u89E3\u5E76\u63A5\u53D7\u4E0B\u8F7D\u6216\u901A\u8FC7\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4EA7\u54C1\u670D\u52A1\u53D6\u5F97\u7684\u4EFB\u4F55\u4FE1\u606F\u8D44\u6599\u53D6\u51B3\u4E8E\u7528\u6237\u81EA\u5DF1\uFF0C\u5E76\u7531\u5176\u627F\u62C5\u7CFB\u7EDF\u53D7\u635F\u6216\u8D44\u6599\u4E22\u5931\u7684\u6240\u6709\u98CE\u9669\u548C\u8D23\u4EFB\u3002\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5BF9\u5728\u670D\u52A1\u7F51\u4E0A\u5F97\u5230\u7684\u4EFB\u4F55\u5546\u54C1\u8D2D\u7269\u670D\u52A1\u6216\u4EA4\u6613\u8FDB\u7A0B\uFF0C\u90FD\u4E0D\u4F5C\u62C5\u4FDD\u3002\u7528\u6237\u4E0D\u4F1A\u4ECE\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6536\u5230\u53E3\u5934\u6216\u4E66\u9762\u7684\u610F\u89C1\u6216\u4FE1\u606F\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E5F\u4E0D\u4F1A\u5728\u8FD9\u91CC\u4F5C\u660E\u786E\u62C5\u4FDD\u3002 </div><div>5\u3001\u53C2\u4E0E\u5E7F\u544A\u7B56\u5212</div><div> \u5728\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E66\u9762\u8BB8\u53EF\u4E0B\u7528\u6237\u53EF\u5728\u4ED6\u4EEC\u53D1\u8868\u7684\u4FE1\u606F\u4E2D\u52A0\u5165\u5BA3\u4F20\u8D44\u6599\u6216\u53C2\u4E0E\u5E7F\u544A\u7B56\u5212\uFF0C\u5728\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u5404\u9879\u514D\u8D39\u670D\u52A1\u4E0A\u5C55\u793A\u4ED6\u4EEC\u7684\u4EA7\u54C1\u3002\u4EFB\u4F55\u8FD9\u7C7B\u4FC3\u9500\u65B9\u6CD5\uFF0C\u5305\u62EC\u8FD0\u8F93\u8D27\u7269\u3001\u4ED8\u6B3E\u3001\u670D\u52A1\u3001\u5546\u4E1A\u6761\u4EF6\u3001\u62C5\u4FDD\u53CA\u4E0E\u5E7F\u544A\u6709\u5173\u7684\u63CF\u8FF0\u90FD\u53EA\u662F\u5728\u76F8\u5E94\u7684\u7528\u6237\u548C\u5E7F\u544A\u9500\u552E\u5546\u4E4B\u95F4\u53D1\u751F\u3002\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6CA1\u6709\u4E49\u52A1\u4E3A\u8FD9\u7C7B\u5E7F\u544A\u9500\u552E\u8D1F\u4EFB\u4F55\u4E00\u90E8\u5206\u7684\u8D23\u4EFB\u3002 </div><div>6\u3001\u8A00\u8BBA</div><div> \u7528\u6237\u627F\u8BFA\u53D1\u8868\u8A00\u8BBA\u8981\uFF1A\u7231\u56FD\u3001\u5B88\u6CD5\u3001\u81EA\u5F8B\u3001\u771F\u5B9E\u3001\u6587\u660E\u3002\u4E0D\u4F20\u8F93\u4EFB\u4F55\u975E\u6CD5\u7684\u3001\u9A9A\u6270\u6027\u7684\u3001\u4E2D\u4F24\u4ED6\u4EBA\u7684\u3001\u8FB1\u9A82\u6027\u7684\u3001\u6050\u5413\u6027\u7684\u3001\u4F24\u5BB3\u6027\u7684\u3001\u5EB8\u4FD7\u7684\uFF0C\u6DEB\u79FD\u7684\u3001\u5371\u5BB3\u56FD\u5BB6\u5B89\u5168\u7684\u3001\u6CC4\u9732\u56FD\u5BB6\u673A\u5BC6\u7684\u3001\u7834\u574F\u56FD\u5BB6\u5B97\u6559\u653F\u7B56\u548C\u6C11\u65CF\u56E2\u7ED3\u7684\u4EE5\u53CA\u5176\u5B83\u8FDD\u53CD\u6CD5\u5F8B\u6CD5\u89C4\u53CA\u653F\u7B56\u7684\u5185\u5BB9\u3002 </div><div> \u82E5\u7528\u6237\u7684\u884C\u4E3A\u4E0D\u7B26\u5408\u4EE5\u4E0A\u63D0\u5230\u7684\u670D\u52A1\u6761\u6B3E\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5C06\u4F5C\u51FA\u72EC\u7ACB\u5224\u65AD\u7ACB\u5373\u53D6\u6D88\u7528\u6237\u670D\u52A1\u5E10\u53F7\u3002\u7528\u6237\u9700\u5BF9\u81EA\u5DF1\u5728\u7F51\u4E0A\u7684\u884C\u4E3A\u627F\u62C5\u6CD5\u5F8B\u8D23\u4EFB\u3002 </div><div>7\u3001\u5185\u5BB9\u7684\u6240\u6709\u6743</div><div> \u5185\u5BB9\u7684\u5B9A\u4E49\u5305\u62EC\uFF1A\u6587\u5B57\u3001\u8F6F\u4EF6\u3001\u58F0\u97F3\u3001\u76F8\u7247\u3001\u5F55\u8C61\u3001\u56FE\u8868\uFF1B\u5728\u5E7F\u544A\u4E2D\u7684\u5168\u90E8\u5185\u5BB9\uFF1B\u7535\u5B50\u90AE\u4EF6\u7684\u5168\u90E8\u5185\u5BB9\uFF1B\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u4E3A\u7528\u6237\u63D0\u4F9B\u7684\u5546\u4E1A\u4FE1\u606F\u3002\u6240\u6709\u8FD9\u4E9B\u5185\u5BB9\u5747\u53D7\u7248\u6743\u3001\u5546\u6807\u3001\u6807\u7B7E\u548C\u5176\u5B83\u8D22\u4EA7\u6240\u6709\u6743\u6CD5\u5F8B\u7684\u4FDD\u62A4\u3002\u6240\u4EE5\uFF0C\u7528\u6237\u53EA\u80FD\u5728\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u548C\u5E7F\u544A\u5546\u6388\u6743\u4E0B\u624D\u80FD\u4F7F\u7528\u8FD9\u4E9B\u5185\u5BB9\uFF0C\u800C\u4E0D\u80FD\u64C5\u81EA\u590D\u5236\u3001\u518D\u9020\u8FD9\u4E9B\u5185\u5BB9\u3001\u6216\u521B\u9020\u4E0E\u5185\u5BB9\u6709\u5173\u7684\u6D3E\u751F\u4EA7\u54C1\u3002 </div><div> 8\u3001\u82E5\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5DF2\u7ECF\u660E\u793A\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u670D\u52A1\u63D0\u4F9B\u65B9\u5F0F\u53D1\u751F\u53D8\u66F4\u5E76\u63D0\u9192\u7528\u6237\u5E94\u5F53\u6CE8\u610F\u4E8B\u9879\uFF0C\u7528\u6237\u672A\u6309\u8981\u6C42\u64CD\u4F5C\u6240\u4EA7\u751F\u7684\u4E00\u5207\u540E\u679C\u7531\u7528\u6237\u81EA\u884C\u627F\u62C5\u3002 </div><div> 9\u3001\u7528\u6237\u660E\u786E\u540C\u610F\u5176\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7684\u670D\u52A1\u6240\u5B58\u5728\u7684\u98CE\u9669\u5C06\u5B8C\u5168\u7531\u5176\u81EA\u5DF1\u627F\u62C5\uFF1B\u56E0\u5176\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7684\u670D\u52A1\u800C\u4EA7\u751F\u7684\u4E00\u5207\u540E\u679C\u4E5F\u7531\u5176\u81EA\u5DF1\u627F\u62C5\uFF0C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5BF9\u7528\u6237\u4E0D\u627F\u62C5\u4EFB\u4F55\u8D23\u4EFB\u3002 </div><div> 10\u3001\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4E0D\u62C5\u4FDD\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7684\u670D\u52A1\u4E00\u5B9A\u80FD\u6EE1\u8DB3\u7528\u6237\u7684\u8981\u6C42\uFF0C\u4E5F\u4E0D\u62C5\u4FDD\u5176\u670D\u52A1\u4E0D\u4F1A\u4E2D\u65AD\uFF0C\u5BF9\u5176\u670D\u52A1\u7684\u53CA\u65F6\u6027\u3001\u5B89\u5168\u6027\u3001\u51C6\u786E\u6027\u4E5F\u90FD\u4E0D\u4F5C\u62C5\u4FDD\u3002 </div><div> 11\u3001\u7528\u6237\u540C\u610F\u4FDD\u969C\u548C\u7EF4\u62A4\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u53CA\u5176\u4ED6\u7528\u6237\u7684\u5229\u76CA\uFF0C\u7531\u4E8E\u7528\u6237\u767B\u5F55\u7F51\u7AD9\u5185\u5BB9\u8FDD\u6CD5\u3001\u4E0D\u771F\u5B9E\u3001\u4E0D\u6B63\u5F53\u3001\u4FB5\u72AF\u7B2C\u4E09\u65B9\u5408\u6CD5\u6743\u76CA\uFF0C\u6216\u7528\u6237\u8FDD\u53CD\u672C\u653F\u7B56\u9879\u4E0B\u7684\u4EFB\u4F55\u6761\u6B3E\u800C\u7ED9\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6216\u4EFB\u4F55\u5176\u4ED6\u7B2C\u4E09\u4EBA\u9020\u6210\u635F\u5931\uFF0C\u7528\u6237\u540C\u610F\u627F\u62C5\u7531\u6B64\u9020\u6210\u7684\u635F\u5BB3\u8D54\u507F\u8D23\u4EFB\u3002 </div></div><div class="font-bold">\u4E94\u3001\u77E5\u8BC6\u4EA7\u6743</div><div class="my-[20px] indent-[2rem]"><div> \u7528\u6237\u4FDD\u8BC1\u548C\u58F0\u660E\u5BF9\u5176\u6240\u63D0\u4F9B\u7684\u4F5C\u54C1\u62E5\u6709\u5B8C\u6574\u7684\u5408\u6CD5\u7684\u8457\u4F5C\u6743\u6216\u5B8C\u6574\u7684\u5408\u6CD5\u7684\u6388\u6743\u53EF\u4EE5\u7528\u4E8E\u5176\u5728\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u4E0A\u4ECE\u4E8B\u7684\u6D3B\u52A8\uFF0C\u4FDD\u8BC1\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4F7F\u7528\u8BE5\u4F5C\u54C1\u4E0D\u8FDD\u53CD\u56FD\u5BB6\u7684\u6CD5\u5F8B\u6CD5\u89C4\uFF0C\u4E5F\u4E0D\u4FB5\u72AF\u7B2C\u4E09\u65B9\u7684\u5408\u6CD5\u6743\u76CA\u6216\u627F\u62C5\u4EFB\u4F55\u4E49\u52A1\u3002\u7528\u6237\u5E94\u5BF9\u5176\u6240\u63D0\u4F9B\u4F5C\u54C1\u56E0\u5F62\u5F0F\u3001\u5185\u5BB9\u53CA\u6388\u6743\u7684\u4E0D\u5B8C\u5584\u3001\u4E0D\u5408\u6CD5\u6240\u9020\u6210\u7684\u4E00\u5207\u540E\u679C\u627F\u62C5\u5B8C\u5168\u8D23\u4EFB\u3002 </div><div> \u7528\u6237\u540C\u610F\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5BF9\u5176\u521B\u4F5C\u5E76\u4E0A\u4F20\u7684\u4F5C\u54C1\u5728\u5168\u4E16\u754C\u8303\u56F4\u5185\u4EAB\u6709\u514D\u8D39\u7684\u3001\u6C38\u4E45\u6027\u7684\u3001\u4E0D\u53EF\u64A4\u6D88\u7684\u3001\u72EC\u5BB6\u7684\u548C\u5B8C\u5168\u7684\u8BB8\u53EF\u548C\u518D\u8BB8\u53EF\u6743\u5229\uFF0C\u4EE5\u4F7F\u7528\u3001\u590D\u5236\u3001\u51FA\u7248\u3001\u53D1\u884C\u3001\u4EE5\u539F\u6709\u6216\u5176\u4ED6\u5F62\u5F0F\u8FDB\u884C\u6539\u7F16\u3001\u8F6C\u8F7D\u3001\u7FFB\u8BD1\u3001\u4F20\u64AD\u3001\u8868\u6F14\u548C\u5C55\u793A\u6B64\u7B49\u5185\u5BB9\uFF08\u6574\u4F53\u6216\u90E8\u5206\uFF09\u3002\u6B64\u8BB8\u53EF\u548C\u518D\u8BB8\u53EF\u6743\u5229\u5305\u62EC\u4F46\u4E0D\u9650\u4E8E\u6B64\u4F5C\u54C1\u7684\u8457\u4F5C\u6743\u3001\u90BB\u63A5\u6743\u53CA\u83B7\u5F97\u5229\u76CA\u7B49\u6743\u5229\u3002\u7528\u6237\u540C\u65F6\u627F\u8BFA\uFF0C\u4E0D\u5C31\u4E0A\u8FF0\u4F5C\u54C1\u4EE5\u53CA\u4E0A\u8FF0\u4F5C\u54C1\u7684\u6539\u7F16\u4F5C\u54C1\u5BF9\u4EFB\u4F55\u7B2C\u4E09\u65B9\u8FDB\u884C\u4EFB\u4F55\u5F62\u5F0F\u7684\u8BB8\u53EF\u4F7F\u7528\u3002 </div><div> \u5BF9\u4E8E\u7ECF\u7528\u6237\u672C\u4EBA\u521B\u4F5C\u5E76\u4E0A\u4F20\u5230\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7684\u6587\u672C\u3001\u56FE\u7247\u3001\u56FE\u5F62\u3001\u97F3\u9891\u548C/\u6216\u89C6\u9891\u7B49\u8D44\u6599\u7684\u5546\u6807\u548C/\u6216\u5176\u5B83\u8D22\u4EA7\u6743\u5229\u5F52\u5C5E\u4E8E\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\uFF0C\u672A\u7ECF\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u540C\u610F\uFF0C\u7528\u6237\u4FDD\u8BC1\u4E0D\u4EE5\u4EFB\u4F55\u5F62\u5F0F\u76F4\u63A5\u6216\u95F4\u63A5\u53D1\u5E03\u3001\u64AD\u653E\u3001\u51FA\u4E8E\u64AD\u653E\u6216\u53D1\u5E03\u76EE\u7684\u800C\u6539\u7F16\u6216\u518D\u53D1\u884C\uFF0C\u6216\u8005\u7528\u4E8E\u5176\u4ED6\u4EFB\u4F55\u5546\u4E1A\u76EE\u7684\u3002\u540C\u65F6\u4FDD\u8BC1\u4E0D\u8BB8\u53EF\u4EFB\u4F55\u7B2C\u4E09\u65B9\u4ECE\u4E8B\u4E0A\u8FF0\u884C\u4E3A\u3002 </div><div> \u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u4FDD\u7559\u5BF9\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u7F51\u7AD9\u6240\u6709\u5185\u5BB9\u8FDB\u884C\u5B9E\u65F6\u76D1\u63A7\u7684\u6743\u5229\uFF0C\u5E76\u6709\u6743\u4F9D\u5176\u72EC\u7ACB\u5224\u65AD\u5BF9\u4EFB\u4F55\u8FDD\u53CD\u672C\u653F\u7B56\u7EA6\u5B9A\u7684\u4F5C\u54C1\u5B9E\u65BD\u5220\u9664\u3002\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5BF9\u4E8E\u5220\u9664\u7528\u6237\u4F5C\u54C1\u5F15\u8D77\u7684\u4EFB\u4F55\u540E\u679C\u6216\u5BFC\u81F4\u7528\u6237\u7684\u4EFB\u4F55\u635F\u5931\u4E0D\u8D1F\u4EFB\u4F55\u8D23\u4EFB\u3002 </div><div> \u56E0\u7528\u6237\u4F5C\u54C1\u7684\u8FDD\u6CD5\u6216\u4FB5\u5BB3\u7B2C\u4E09\u4EBA\u7684\u5408\u6CD5\u6743\u76CA\u800C\u5BFC\u81F4\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6216\u5176\u5173\u8054\u516C\u53F8\u5BF9\u7B2C\u4E09\u65B9\u627F\u62C5\u4EFB\u4F55\u6027\u8D28\u7684\u8D54\u507F\u3001\u8865\u507F\u6216\u7F5A\u6B3E\u800C\u906D\u53D7\u635F\u5931\uFF08\u76F4\u63A5\u7684\u3001\u95F4\u63A5\u7684\u3001\u5076\u7136\u7684\u3001\u60E9\u7F5A\u6027\u7684\u548C\u7EE7\u53D1\u7684\u635F\u5931\uFF09\uFF0C\u7528\u6237\u5BF9\u4E8E\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6216\u5176\u5173\u8054\u516C\u53F8\u8499\u53D7\u7684\u4E0A\u8FF0\u635F\u5931\u627F\u62C5\u5168\u9762\u7684\u8D54\u507F\u8D23\u4EFB\u3002 </div></div><div class="font-bold">\u516D\u3001\u6CD5\u5F8B</div><div class="my-[20px] indent-[2rem]"> \u5982\u53CC\u65B9\u5C31\u672C\u653F\u7B56\u5185\u5BB9\u6216\u5176\u6267\u884C\u53D1\u751F\u4EFB\u4F55\u4E89\u8BAE\uFF0C\u53CC\u65B9\u5E94\u5C3D\u91CF\u53CB\u597D\u534F\u5546\u89E3\u51B3\u3002\u534F\u5546\u4E0D\u6210\u65F6\uFF0C\u4EFB\u4F55\u4E00\u65B9\u5747\u53EF\u5411\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6240\u5728\u5730\u7684\u4EBA\u6C11\u6CD5\u9662\u63D0\u8D77\u8BC9\u8BBC\u3002\u82E5\u6709\u4EFB\u4F55\u670D\u52A1\u6761\u6B3E\u4E0E\u6CD5\u5F8B\u76F8\u62B5\u89E6\uFF0C\u90A3\u8FD9\u4E9B\u6761\u6B3E\u5C06\u6309\u5C3D\u53EF\u80FD\u63A5\u8FD1\u7684\u65B9\u6CD5\u91CD\u65B0\u89E3\u6790\uFF0C\u800C\u5176\u5B83\u6761\u6B3E\u5219\u4FDD\u6301\u5BF9\u7528\u6237\u4EA7\u751F\u6CD5\u5F8B\u6548\u529B\u548C\u5F71\u54CD\u3002 </div><div class="font-bold">\u4E03\u3001\u9752\u5C11\u5E74\u7528\u6237\u7279\u522B\u63D0\u793A</div><div class="my-[20px] indent-[2rem]"><div> 1\u3001\u9752\u5C11\u5E74\u53CA\u4F7F\u7528\u6BD5\u4E1A\u4E4B\u5BB6\u5347\u5B66\u89C4\u5212\u670D\u52A1\u5E94\u8BE5\u5728\u7236\u6BCD\u548C\u8001\u5E08\u7684\u6307\u5BFC\u4E0B\uFF0C\u6B63\u786E\u5B66\u4E60\u4F7F\u7528\u7F51\u7EDC\u3002\u9752\u5C11\u5E74\u907F\u514D\u6C89\u8FF7\u865A\u62DF\u7684\u7F51\u7EDC\u4E16\u754C\u800C\u5F71\u54CD\u65E5\u5E38\u7684\u5B66\u4E60\u751F\u6D3B\u3002 </div><div>2\u3001\u9752\u5C11\u5E74\u7528\u6237\u5FC5\u987B\u9075\u5B88\u5168\u56FD\u9752\u5C11\u5E74\u7F51\u7EDC\u6587\u660E\u516C\u7EA6\uFF1A</div><div>\u8981\u5584\u4E8E\u7F51\u4E0A\u5B66\u4E60\uFF0C\u4E0D\u6D4F\u89C8\u4E0D\u826F\u4FE1\u606F\uFF1B</div><div>\u8981\u8BDA\u5B9E\u53CB\u597D\u4EA4\u6D41\uFF0C\u4E0D\u4FAE\u8FB1\u6B3A\u8BC8\u4ED6\u4EBA\uFF1B</div><div>\u8981\u589E\u5F3A\u81EA\u62A4\u610F\u8BC6\uFF0C\u4E0D\u968F\u610F\u7EA6\u4F1A\u7F51\u53CB\uFF1B</div><div>\u8981\u7EF4\u62A4\u7F51\u7EDC\u5B89\u5168\uFF0C\u4E0D\u7834\u574F\u7F51\u7EDC\u79E9\u5E8F\uFF1B</div><div>\u8981\u6709\u76CA\u8EAB\u5FC3\u5065\u5EB7\uFF0C\u4E0D\u6C89\u6EBA\u865A\u62DF\u65F6\u7A7A\u3002</div></div><div class="font-bold">\u516B\u3001\u5176\u4ED6</div><div class="my-[20px] indent-[2rem]"><div> 1\u3001\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u5C06\u89C6\u5411\u7528\u6237\u6240\u63D0\u4F9B\u670D\u52A1\u5185\u5BB9\u4E4B\u7279\u6027\uFF0C\u8981\u6C42\u7528\u6237\u5728\u6CE8\u518C\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u63D0\u4F9B\u7684\u6709\u5173\u670D\u52A1\u65F6\uFF0C\u9075\u5B88\u7279\u5B9A\u7684\u6761\u4EF6\u548C\u6761\u6B3E\uFF1B\u5982\u8BE5\u7279\u5B9A\u6761\u4EF6\u548C\u6761\u6B3E\u4E0E\u4EE5\u4E0A\u670D\u52A1\u6761\u6B3E\u6709\u4EFB\u4F55\u4E0D\u4E00\u81F4\u4E4B\u5904\uFF0C\u5219\u4EE5\u7279\u5B9A\u6761\u4EF6\u548C\u6761\u6B3E\u4E3A\u51C6\u3002 </div><div> 2\u3001\u672C\u670D\u52A1\u6761\u6B3E\u4E2D\u7684\u4EFB\u4F55\u6761\u6B3E\u65E0\u8BBA\u56E0\u4F55\u79CD\u539F\u56E0\u5B8C\u5168\u6216\u90E8\u5206\u65E0\u6548\u6216\u4E0D\u5177\u6709\u6267\u884C\u529B\uFF0C\u5176\u4F59\u6761\u6B3E\u4ECD\u5E94\u6709\u6548\u5E76\u4E14\u6709\u7EA6\u675F\u529B\u3002 </div><div>3\u3001\u672C\u670D\u52A1\u6761\u6B3E\u6267\u884C\u8FC7\u7A0B\u4E2D\u6240\u4EA7\u751F\u7684\u4EFB\u4F55\u95EE\u9898\uFF0C\u672C\u7F51\u7AD9\u548C\u7528\u6237\u90FD\u5C06\u53CB\u597D\u534F\u5546\u89E3\u51B3\u3002</div><div>4\u3001\u4EE5\u4E0A\u6761\u6B3E\u7684\u89E3\u91CA\u6743\u5F52\u56DB\u5DDD\u6BD5\u4E1A\u4E4B\u5BB6\u79D1\u6280\u6700\u7EC8\u6240\u6709\u3002</div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsPersonalAgreement/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_8 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u4E2A\u4EBA\u4E2D\u5FC3"
    });
    const route = useRoute();
    const router = useRouter();
    const { userInfo } = useUser();
    const tabList = [
      {
        label: "\u6211\u7684\u5FD7\u613F",
        value: "myVolunteer"
      },
      {
        label: "\u6211\u7684\u6D4B\u8BC4",
        value: "myEvaluation"
      },
      {
        label: "\u4E2A\u4EBA\u8D44\u6599",
        value: "personalData"
      },
      {
        label: "\u6211\u7684\u5173\u6CE8",
        value: "myAttention"
      },
      {
        label: "\u4F1A\u5458\u4E2D\u5FC3",
        value: "memberCenter"
      },
      {
        label: "\u4E13\u5C5E\u7801\u7ED1\u5B9A",
        value: "exclusiveCode"
      },
      {
        label: "\u7528\u6237\u534F\u8BAE",
        value: "userAgreement"
      }
    ];
    const { form } = useForm(() => ({
      currentTab: tabList.map((o) => o.value).includes(route.query.tab) ? route.query.tab : "myVolunteer"
      // 当前选项卡
    }));
    const data = ref([]);
    const changeTab = () => {
      router.replace({
        query: { ...route.query, tab: form.value.currentTab }
      });
    };
    watch(
      () => route.query.tab,
      () => {
        if (tabList.map((o) => o.value).includes(route.query.tab)) {
          router.replace({
            query: { ...route.query, tab: route.query.tab }
          });
          form.value.currentTab = route.query.tab;
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_a_image = Image;
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_zs_personal_volunteer = _sfc_main$7;
      const _component_zs_personal_evaluation = _sfc_main$6;
      const _component_zs_personal_data = __nuxt_component_5;
      const _component_zs_personal_follow = __nuxt_component_6;
      const _component_zs_personal_member = _sfc_main$2;
      const _component_zs_personal_agreement = __nuxt_component_8;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))}><div class="flex justify-between mt-[20px]"><div class="w-[250px]"><div class="filter"><div class="bg-[url(&#39;/images/userInfo.png&#39;)] bg-no-repeat bg-[length:250px_87px] flex items-center justify-center h-[87px]">`);
      _push(ssrRenderComponent(_component_a_image, {
        src: unref(userInfo).header ? unref(userInfo).header : "/images/avatar.png",
        class: "cursor-pointer rounded-50",
        width: "50px",
        height: "50px",
        alt: ""
      }, null, _parent));
      _push(`</div><div class="h-[420px] w-full rounded-[0px_0px_16px_16px] bg-white"><div class="text-[18px] font-bold text-center">${ssrInterpolate(("hidePhoneFormat" in _ctx ? _ctx.hidePhoneFormat : unref(hidePhoneFormat))(unref(userInfo).phone))}</div><div class="flex items-center justify-center flex-col">`);
      if (((_a = unref(userInfo)) == null ? void 0 : _a.vipStateValue) == "1") {
        _push(`<div class="text-[12px] text-white flex items-center justify-center text-center bg-[#FFA864] rounded-[20px] w-[130px] my-[10px]">`);
        if (((_b = unref(userInfo)) == null ? void 0 : _b.vipType) != "0") {
          _push(`<span>${ssrInterpolate(((_c = unref(userInfo)) == null ? void 0 : _c.vipType) == "1-1" ? "\u4E13\u5BB6\u5728\u7EBF\u8F85\u52A9\u586B\u62A5" : "\u4E13\u5BB6\u4E00\u5BF9\u4E00\u586B\u62A5")}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<i class="iconfont icon-f-vip fontSize"></i></div>`);
      } else {
        _push(`<!---->`);
      }
      if (((_d = unref(userInfo)) == null ? void 0 : _d.vipStateValue) == "1" && ((_e = unref(userInfo)) == null ? void 0 : _e.vipExpirationTime)) {
        _push(`<div class="text-[#999]"> \u6709\u6548\u671F\u622A\u81F3${ssrInterpolate(("formatDate" in _ctx ? _ctx.formatDate : unref(formatDate))((_f = unref(userInfo)) == null ? void 0 : _f.vipExpirationTime, "YYYY-MM-DD"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_a_radio_group, {
        modelValue: unref(form).currentTab,
        "onUpdate:modelValue": ($event) => unref(form).currentTab = $event,
        class: "m-[20px]",
        onChange: changeTab
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(tabList, (tab) => {
              _push2(ssrRenderComponent(_component_a_radio, {
                value: tab.value
              }, {
                radio: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([{
                      "bg-[#F2F5FF] text-[#7C92FF] font-bold": checked
                    }, "px-[20px] w-[210px] leading-[40px] rounded-[4px]"])}"${_scopeId2}>${ssrInterpolate(tab.label)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["px-[20px] w-[210px] leading-[40px] rounded-[4px]", {
                          "bg-[#F2F5FF] text-[#7C92FF] font-bold": checked
                        }]
                      }, toDisplayString(tab.label), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(tabList, (tab) => {
                return createVNode(_component_a_radio, {
                  key: tab.value,
                  value: tab.value
                }, {
                  radio: withCtx(({ checked }) => [
                    createVNode("div", {
                      class: ["px-[20px] w-[210px] leading-[40px] rounded-[4px]", {
                        "bg-[#F2F5FF] text-[#7C92FF] font-bold": checked
                      }]
                    }, toDisplayString(tab.label), 3)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="flex-1 ml-[40px] bg-white">`);
      if (unref(form).currentTab === "myVolunteer") {
        _push(ssrRenderComponent(_component_zs_personal_volunteer, {
          data: unref(data),
          loading: false
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(form).currentTab === "myEvaluation") {
        _push(ssrRenderComponent(_component_zs_personal_evaluation, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(form).currentTab === "personalData") {
        _push(ssrRenderComponent(_component_zs_personal_data, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(form).currentTab === "myAttention") {
        _push(ssrRenderComponent(_component_zs_personal_follow, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(form).currentTab === "memberCenter") {
        _push(ssrRenderComponent(_component_zs_personal_member, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      if (unref(form).currentTab === "exclusiveCode") {
        _push(`<div class="text-[24px] leading-[28px] font-bold mb-[20px]">\u4E13\u5C5E\u7801\u7ED1\u5B9A</div>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).currentTab === "userAgreement") {
        _push(`<!--[--><div class="text-[24px] leading-[28px] font-bold">\u7528\u6237\u534F\u8BAE</div>`);
        _push(ssrRenderComponent(_component_zs_personal_agreement, null, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/personal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-160194c4.mjs.map
