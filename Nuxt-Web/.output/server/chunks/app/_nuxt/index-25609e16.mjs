import { s as setGlobalConfig, a as getComponentPrefix, _ as _export_sfc, g as getPrefixCls, i as isNumber, I as IconLoading, n as IconClose, p as useI18n, R as usePopupManager, m as isBoolean, y as omit, W as isServerRendering, j as isArray, b as isUndefined, o as on, k as off, d as isString, X as querySelector, K as KEYBOARD_KEY } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, createVNode, mergeProps, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, isVNode, toRefs, ref, reactive, watch, h, resolveComponent, createBlock, Teleport, createElementVNode, Transition, withCtx, withDirectives, vShow, withModifiers, createCommentVNode, toDisplayString, renderSlot, normalizeProps, inject, watchEffect, createSlots, provide, Fragment, nextTick, renderList } from 'vue';
import { I as IconImageClose } from './index-3943ca28.mjs';
import { u as useMergeState, t as throttleByRaf } from './index-dd449d78.mjs';
import { a as IconLeft, I as IconRight } from './index-f6f6f2a5.mjs';
import { T as Tooltip } from './index-5f48af9c.mjs';

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  name: "IconRotateLeft",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-rotate-left`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", { d: "M10 22a1 1 0 0 1 1-1h20a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H11a1 1 0 0 1-1-1V22ZM23 11h11a6 6 0 0 1 6 6v6M22.5 12.893 19.587 11 22.5 9.107v3.786Z" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$6
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
  }, _hoisted_3$5, 14, _hoisted_1$8);
}
var _IconRotateLeft = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const IconRotateLeft = Object.assign(_IconRotateLeft, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconRotateLeft.name, _IconRotateLeft);
  }
});
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  name: "IconRotateRight",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-rotate-right`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$5 = /* @__PURE__ */ createElementVNode("path", { d: "M38 22a1 1 0 0 0-1-1H17a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V22ZM25 11H14a6 6 0 0 0-6 6v6M25.5 12.893 28.413 11 25.5 9.107v3.786Z" }, null, -1);
const _hoisted_3$4 = [
  _hoisted_2$5
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
  }, _hoisted_3$4, 14, _hoisted_1$7);
}
var _IconRotateRight = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const IconRotateRight = Object.assign(_IconRotateRight, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconRotateRight.name, _IconRotateRight);
  }
});
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  name: "IconOriginalSize",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-original-size`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$4 = /* @__PURE__ */ createElementVNode("path", { d: "m5.5 11.5 5-2.5h1v32M34 11.5 39 9h1v32" }, null, -1);
const _hoisted_3$3 = /* @__PURE__ */ createElementVNode("path", {
  d: "M24 17h1v1h-1v-1ZM24 30h1v1h-1v-1Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", { d: "M24 17h1v1h-1v-1ZM24 30h1v1h-1v-1Z" }, null, -1);
const _hoisted_5 = [
  _hoisted_2$4,
  _hoisted_3$3,
  _hoisted_4
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
  }, _hoisted_5, 14, _hoisted_1$6);
}
var _IconOriginalSize = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const IconOriginalSize = Object.assign(_IconOriginalSize, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconOriginalSize.name, _IconOriginalSize);
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "IconZoomIn",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-zoom-in`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M32.607 32.607A14.953 14.953 0 0 0 37 22c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 4.142 0 7.892-1.679 10.607-4.393Zm0 0L41.5 41.5M29 22H15m7 7V15" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$3
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
  }, _hoisted_3$2, 14, _hoisted_1$5);
}
var _IconZoomIn = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const IconZoomIn = Object.assign(_IconZoomIn, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconZoomIn.name, _IconZoomIn);
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  name: "IconZoomOut",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-zoom-out`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", { d: "M32.607 32.607A14.953 14.953 0 0 0 37 22c0-8.284-6.716-15-15-15-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 4.142 0 7.892-1.679 10.607-4.393Zm0 0L41.5 41.5M29 22H15" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$2
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
  }, _hoisted_3$1, 14, _hoisted_1$4);
}
var _IconZoomOut = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const IconZoomOut = Object.assign(_IconZoomOut, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconZoomOut.name, _IconZoomOut);
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "IconFullscreen",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-fullscreen`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M42 17V9a1 1 0 0 0-1-1h-8M6 17V9a1 1 0 0 1 1-1h8m27 23v8a1 1 0 0 1-1 1h-8M6 31v8a1 1 0 0 0 1 1h8" }, null, -1);
const _hoisted_3 = [
  _hoisted_2$1
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
  }, _hoisted_3, 14, _hoisted_1$3);
}
var _IconFullscreen = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const IconFullscreen = Object.assign(_IconFullscreen, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconFullscreen.name, _IconFullscreen);
  }
});
var RenderFunction = /* @__PURE__ */ defineComponent({
  name: "RenderFunction",
  props: {
    renderFunc: {
      type: Function,
      required: true
    }
  },
  render() {
    return this.renderFunc(this.$attrs);
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "ImageFooter",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  setup() {
    const prefixCls = getPrefixCls("image-footer");
    return {
      prefixCls
    };
  }
});
const _hoisted_1$2 = ["title"];
const _hoisted_2 = ["title"];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    _ctx.title || _ctx.description ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-caption`)
    }, [
      _ctx.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-caption-title`),
        title: _ctx.title
      }, toDisplayString(_ctx.title), 11, _hoisted_1$2)) : createCommentVNode("v-if", true),
      _ctx.description ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-caption-description`),
        title: _ctx.description
      }, toDisplayString(_ctx.description), 11, _hoisted_2)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.$slots.extra ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-extra`)
    }, [
      renderSlot(_ctx.$slots, "extra")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var ImageFooter = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "ImagePreviewArrow",
  components: {
    IconLeft,
    IconRight
  },
  props: {
    onPrev: {
      type: Function
    },
    onNext: {
      type: Function
    }
  },
  setup() {
    const prefixCls = getPrefixCls("image-preview-arrow");
    return {
      prefixCls
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_left = resolveComponent("icon-left");
  const _component_icon_right = resolveComponent("icon-right");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createElementVNode("div", {
      class: normalizeClass([
        `${_ctx.prefixCls}-left`,
        {
          [`${_ctx.prefixCls}-disabled`]: !_ctx.onPrev
        }
      ]),
      onClick: _cache[0] || (_cache[0] = (e) => {
        e.preventDefault();
        _ctx.onPrev && _ctx.onPrev();
      })
    }, [
      createVNode(_component_icon_left)
    ], 2),
    createElementVNode("div", {
      class: normalizeClass([
        `${_ctx.prefixCls}-right`,
        {
          [`${_ctx.prefixCls}-disabled`]: !_ctx.onNext
        }
      ]),
      onClick: _cache[1] || (_cache[1] = (e) => {
        e.preventDefault();
        _ctx.onNext && _ctx.onNext();
      })
    }, [
      createVNode(_component_icon_right)
    ], 2)
  ], 2);
}
var PreviewArrow = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var ImagePreviewAction = /* @__PURE__ */ defineComponent({
  name: "ImagePreviewAction",
  components: {
    Tooltip
  },
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    disabled: {
      type: Boolean
    }
  },
  setup(props, {
    slots,
    attrs
  }) {
    const prefixCls = getPrefixCls("image-preview-toolbar-action");
    return () => {
      var _a;
      const {
        name,
        disabled
      } = props;
      const children = (_a = slots.default) == null ? void 0 : _a.call(slots);
      if (!children || !children.length)
        return null;
      const content = createVNode("div", mergeProps({
        "class": [`${prefixCls}`, {
          [`${prefixCls}-disabled`]: disabled
        }],
        "onMousedown": (e) => {
          e.preventDefault();
        }
      }, attrs), [createVNode("span", {
        "class": `${prefixCls}-content`
      }, [children])]);
      return name ? createVNode(Tooltip, {
        "class": `${prefixCls}-tooltip`,
        "content": name
      }, _isSlot(content) ? content : {
        default: () => [content]
      }) : content;
    };
  }
});
var _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "ImagePreviewToolbar",
  components: {
    RenderFunction,
    PreviewAction: ImagePreviewAction
  },
  props: {
    actions: {
      type: Array,
      default: () => []
    },
    actionsLayout: {
      type: Array,
      default: () => []
    }
  },
  setup(props) {
    const {
      actions,
      actionsLayout
    } = toRefs(props);
    const prefixCls = getPrefixCls("image-preview-toolbar");
    const resultActions = computed(() => {
      const actionsLayoutSet = new Set(actionsLayout.value);
      const filterWithLayout = (item) => actionsLayoutSet.has(item.key);
      const filteredActions = actions.value.filter(filterWithLayout);
      return filteredActions.sort((pre, cur) => {
        const preIndex = actionsLayout.value.indexOf(pre.key);
        const curIndex = actionsLayout.value.indexOf(cur.key);
        return preIndex > curIndex ? 1 : -1;
      });
    });
    return {
      prefixCls,
      resultActions
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_RenderFunction = resolveComponent("RenderFunction");
  const _component_PreviewAction = resolveComponent("PreviewAction");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.resultActions, (action) => {
      return openBlock(), createBlock(_component_PreviewAction, {
        key: action.key,
        name: action.name,
        disabled: action.disabled,
        onClick: action.onClick
      }, {
        default: withCtx(() => [
          createVNode(_component_RenderFunction, {
            "render-func": action.content
          }, null, 8, ["render-func"])
        ]),
        _: 2
      }, 1032, ["name", "disabled", "onClick"]);
    }), 128)),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var PreviewToolbar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
function useImageLoadStatus(defaultValue) {
  const status = ref(defaultValue || "beforeLoad");
  const isBeforeLoad = computed(() => status.value === "beforeLoad");
  const isLoading = computed(() => status.value === "loading");
  const isError = computed(() => status.value === "error");
  const isLoaded = computed(() => status.value === "loaded");
  return {
    status,
    isBeforeLoad,
    isLoading,
    isError,
    isLoaded,
    setLoadStatus: (newStatus) => {
      status.value = newStatus;
    }
  };
}
function getFixTranslate(wrapperRect, imgRect, translateX, translateY, scale) {
  let fixTranslateX = translateX;
  let fixTranslateY = translateY;
  if (translateX) {
    if (wrapperRect.width > imgRect.width) {
      fixTranslateX = 0;
    } else {
      if (imgRect.left > wrapperRect.left) {
        fixTranslateX -= Math.abs(wrapperRect.left - imgRect.left) / scale;
      }
      if (imgRect.right < wrapperRect.right) {
        fixTranslateX += Math.abs(wrapperRect.right - imgRect.right) / scale;
      }
    }
  }
  if (translateY) {
    if (wrapperRect.height > imgRect.height) {
      fixTranslateY = 0;
    } else {
      if (imgRect.top > wrapperRect.top) {
        fixTranslateY -= Math.abs(wrapperRect.top - imgRect.top) / scale;
      }
      if (imgRect.bottom < wrapperRect.bottom) {
        fixTranslateY += Math.abs(wrapperRect.bottom - imgRect.bottom) / scale;
      }
    }
  }
  return [fixTranslateX, fixTranslateY];
}
function useImageDrag(props) {
  const { wrapperEl, imageEl, scale } = toRefs(props);
  const translate = ref([0, 0]);
  const moving = ref(false);
  let startPageX = 0;
  let startPageY = 0;
  let startTranslate = [0, 0];
  const checkAndFixTranslate = () => {
    if (!wrapperEl.value || !imageEl.value)
      return;
    const wrapperRect = wrapperEl.value.getBoundingClientRect();
    const imgRect = imageEl.value.getBoundingClientRect();
    const [x, y] = getFixTranslate(wrapperRect, imgRect, translate.value[0], translate.value[1], scale.value);
    if (x !== translate.value[0] || y !== translate.value[1]) {
      translate.value = [x, y];
    }
  };
  const onMoving = (e) => {
    e.preventDefault && e.preventDefault();
    const nextX = startTranslate[0] + (e.pageX - startPageX) / scale.value;
    const nextY = startTranslate[1] + (e.pageY - startPageY) / scale.value;
    translate.value = [nextX, nextY];
  };
  const onMoveEnd = (e) => {
    e.preventDefault && e.preventDefault();
    moving.value = false;
    checkAndFixTranslate();
    offEvents();
  };
  const onMoveStart = (e) => {
    if (e.target !== e.currentTarget)
      return;
    e.preventDefault && e.preventDefault();
    moving.value = true;
    startPageX = e.pageX;
    startPageY = e.pageY;
    startTranslate = [...translate.value];
    on(window, "mousemove", onMoving, false);
    on(window, "mouseup", onMoveEnd, false);
  };
  function offEvents() {
    off(window, "mousemove", onMoving, false);
    off(window, "mouseup", onMoveEnd, false);
  }
  watchEffect((onInvalidate) => {
    imageEl.value && on(imageEl.value, "mousedown", onMoveStart);
    onInvalidate(() => {
      imageEl.value && off(imageEl.value, "mousedown", onMoveStart);
      offEvents();
    });
  });
  watch([scale], () => {
    nextTick(() => checkAndFixTranslate());
  });
  return {
    translate,
    moving,
    resetTranslate() {
      translate.value = [0, 0];
    }
  };
}
function usePopupOverflowHidden(props) {
  const { container, hidden } = toRefs(props);
  let needResetContainerStyle = false;
  let originContainerStyle = {};
  const getScrollBarWidth = (element) => {
    return element.tagName === "BODY" ? window.innerWidth - (document.body.clientWidth || document.documentElement.clientWidth) : element.offsetWidth - element.clientWidth;
  };
  const setContainerStyle = () => {
    if (container.value && container.value.style.overflow !== "hidden") {
      const originStyle = container.value.style;
      needResetContainerStyle = true;
      const containerScrollBarWidth = getScrollBarWidth(container.value);
      if (containerScrollBarWidth) {
        originContainerStyle.width = originStyle.width;
        container.value.style.width = `calc(${container.value.style.width || "100%"} - ${containerScrollBarWidth}px)`;
      }
      originContainerStyle.overflow = originStyle.overflow;
      container.value.style.overflow = "hidden";
    }
  };
  const resetContainerStyle = () => {
    if (container.value && needResetContainerStyle) {
      const originStyle = originContainerStyle;
      Object.keys(originStyle).forEach((i) => {
        container.value.style[i] = originStyle[i];
      });
    }
    needResetContainerStyle = false;
    originContainerStyle = {};
  };
  watchEffect((onInvalidate) => {
    hidden.value ? setContainerStyle() : resetContainerStyle();
    onInvalidate(() => {
      resetContainerStyle();
    });
  });
  return [resetContainerStyle, setContainerStyle];
}
function usePopupContainer(defaultPopupContainer, props) {
  const { popupContainer } = toRefs(props);
  const container = computed(() => (isString(popupContainer.value) ? querySelector(popupContainer.value) : popupContainer.value) || defaultPopupContainer);
  return container;
}
const scaleAttr = [
  25,
  33,
  50,
  67,
  75,
  80,
  90,
  100,
  110,
  125,
  150,
  175,
  200,
  250,
  300,
  400,
  500
].map((item) => +(item / 100).toFixed(2));
const minScale = scaleAttr[0];
const maxScale = scaleAttr[scaleAttr.length - 1];
function getScale(cur = 1, type = "zoomIn") {
  let index2 = scaleAttr.indexOf(cur);
  if (index2 === -1) {
    index2 = findClosestIndex(cur);
  }
  if (type === "zoomIn") {
    return index2 === scaleAttr.length - 1 ? cur : scaleAttr[index2 + 1];
  }
  return index2 === 0 ? cur : scaleAttr[index2 - 1];
}
function getScaleByRate(scale, rate = 1.1, type = "zoomIn") {
  const scaleFactor = type === "zoomIn" ? rate : 1 / rate;
  const newScale = Number.parseFloat((scale * scaleFactor).toFixed(3));
  return Math.min(maxScale, Math.max(minScale, newScale));
}
function findClosestIndex(scale) {
  let closestIndex = scaleAttr.length - 1;
  for (let i = 0; i < scaleAttr.length; i++) {
    const current = scaleAttr[i];
    if (scale === current) {
      closestIndex = i;
      break;
    }
    if (scale < current) {
      const pre = scaleAttr[i - 1];
      closestIndex = pre === void 0 || Math.abs(pre - scale) <= Math.abs(current - scale) ? i - 1 : i;
      break;
    }
  }
  return closestIndex;
}
var __defProp$2 = Object.defineProperty;
var __getOwnPropSymbols$2 = Object.getOwnPropertySymbols;
var __hasOwnProp$2 = Object.prototype.hasOwnProperty;
var __propIsEnum$2 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$2 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$2.call(b, prop))
      __defNormalProp$2(a, prop, b[prop]);
  if (__getOwnPropSymbols$2)
    for (var prop of __getOwnPropSymbols$2(b)) {
      if (__propIsEnum$2.call(b, prop))
        __defNormalProp$2(a, prop, b[prop]);
    }
  return a;
};
const ROTATE_STEP = 90;
var _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "ImagePreview",
  components: {
    PreviewArrow,
    PreviewToolbar,
    IconLoading,
    IconClose
  },
  props: {
    renderToBody: {
      type: Boolean,
      default: true
    },
    src: {
      type: String
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    actionsLayout: {
      type: Array,
      default: () => ["fullScreen", "rotateRight", "rotateLeft", "zoomIn", "zoomOut", "originalSize"]
    },
    popupContainer: {
      type: [Object, String]
    },
    inGroup: {
      type: Boolean,
      default: false
    },
    groupArrowProps: {
      type: Object,
      default: () => ({})
    },
    escToClose: {
      type: Boolean,
      default: true
    },
    wheelZoom: {
      type: Boolean,
      default: true
    },
    keyboard: {
      type: Boolean,
      default: true
    },
    defaultScale: {
      type: Number,
      default: 1
    },
    zoomRate: {
      type: Number,
      default: 1.1
    }
  },
  emits: [
    "close",
    "update:visible"
  ],
  setup(props, {
    emit
  }) {
    const {
      t
    } = useI18n();
    const {
      src,
      popupContainer,
      visible,
      defaultVisible,
      maskClosable,
      actionsLayout,
      defaultScale,
      zoomRate
    } = toRefs(props);
    const refWrapper = ref();
    const refImage = ref();
    const prefixCls = getPrefixCls("image-preview");
    const [mergedVisible, setVisible] = useMergeState(defaultVisible.value, reactive({
      value: visible
    }));
    const classNames = computed(() => [prefixCls, {
      [`${prefixCls}-hide`]: !mergedVisible.value
    }]);
    const container = usePopupContainer(document.body, reactive({
      popupContainer
    }));
    const isFixed = computed(() => container.value === document.body);
    const {
      zIndex
    } = usePopupManager("dialog", {
      visible: mergedVisible
    });
    const wrapperStyles = computed(() => {
      const positionStyles = isFixed.value ? {
        zIndex: zIndex.value,
        position: "fixed"
      } : {
        zIndex: "inherit",
        position: "absolute"
      };
      return __spreadValues$2({}, positionStyles);
    });
    const {
      isLoading,
      isLoaded,
      setLoadStatus
    } = useImageLoadStatus();
    const rotate = ref(0);
    const scale = ref(defaultScale.value);
    const {
      translate,
      moving,
      resetTranslate
    } = useImageDrag(reactive({
      wrapperEl: refWrapper,
      imageEl: refImage,
      visible: mergedVisible,
      scale
    }));
    const scaleValueVisible = ref(false);
    let hideScaleTimer = null;
    const showScaleValue = () => {
      !scaleValueVisible.value && (scaleValueVisible.value = true);
      hideScaleTimer && clearTimeout(hideScaleTimer);
      hideScaleTimer = setTimeout(() => {
        scaleValueVisible.value = false;
      }, 1e3);
    };
    usePopupOverflowHidden(reactive({
      container,
      hidden: mergedVisible
    }));
    function reset() {
      rotate.value = 0;
      scale.value = defaultScale.value;
      resetTranslate();
    }
    const isIncludes = (action) => actionsLayout.value.includes(action);
    const handleKeyDown = (ev) => {
      ev.stopPropagation();
      ev.preventDefault();
      switch (ev.key) {
        case KEYBOARD_KEY.ESC:
          props.escToClose && close();
          break;
        case KEYBOARD_KEY.ARROW_LEFT:
          props.groupArrowProps.onPrev && props.groupArrowProps.onPrev();
          break;
        case KEYBOARD_KEY.ARROW_RIGHT:
          props.groupArrowProps.onNext && props.groupArrowProps.onNext();
          break;
        case KEYBOARD_KEY.ARROW_UP:
          isIncludes("zoomIn") && handleScale("zoomIn");
          break;
        case KEYBOARD_KEY.ARROW_DOWN:
          isIncludes("zoomOut") && handleScale("zoomOut");
          break;
        case KEYBOARD_KEY.SPACE:
          isIncludes("originalSize") && changeScale(1);
          break;
      }
    };
    const onWheel = throttleByRaf((e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!props.wheelZoom)
        return;
      const delta = e.deltaY || e.deltaX;
      const action = delta > 0 ? "zoomOut" : "zoomIn";
      const newScale = getScaleByRate(scale.value, zoomRate.value, action);
      changeScale(newScale);
    });
    let globalKeyDownListener = false;
    const addGlobalKeyDownListener = () => {
      nextTick(() => {
        var _a;
        (_a = refWrapper == null ? void 0 : refWrapper.value) == null ? void 0 : _a.focus();
      });
      if (props.keyboard && !globalKeyDownListener) {
        globalKeyDownListener = true;
        on(container.value, "keydown", handleKeyDown);
      }
    };
    const removeGlobalKeyDownListener = () => {
      if (globalKeyDownListener) {
        globalKeyDownListener = false;
        off(container.value, "keydown", handleKeyDown);
      }
    };
    watch([src, mergedVisible], () => {
      if (mergedVisible.value) {
        reset();
        setLoadStatus("loading");
        addGlobalKeyDownListener();
      } else {
        removeGlobalKeyDownListener();
      }
    });
    function close() {
      if (mergedVisible.value) {
        emit("close");
        emit("update:visible", false);
        setVisible(false);
      }
    }
    function onMaskClick(e) {
      var _a;
      (_a = refWrapper == null ? void 0 : refWrapper.value) == null ? void 0 : _a.focus();
      if (maskClosable.value && e.target === e.currentTarget) {
        close();
      }
    }
    function changeScale(newScale) {
      if (scale.value !== newScale) {
        scale.value = newScale;
        showScaleValue();
      }
    }
    function fullScreen() {
      const wrapperRect = refWrapper.value.getBoundingClientRect();
      const imgRect = refImage.value.getBoundingClientRect();
      const newHeightScale = wrapperRect.height / (imgRect.height / scale.value);
      const newWidthScale = wrapperRect.width / (imgRect.width / scale.value);
      const newScale = Math.max(newHeightScale, newWidthScale);
      changeScale(newScale);
    }
    function handleRotate(direction) {
      const isClockwise = direction === "clockwise";
      const newRotate = isClockwise ? (rotate.value + ROTATE_STEP) % 360 : rotate.value === 0 ? 360 - ROTATE_STEP : rotate.value - ROTATE_STEP;
      rotate.value = newRotate;
    }
    function handleScale(action) {
      const newScale = getScale(scale.value, action);
      changeScale(newScale);
    }
    return {
      prefixCls,
      classNames,
      container,
      wrapperStyles,
      scale,
      translate,
      rotate,
      moving,
      mergedVisible,
      isLoading,
      isLoaded,
      scaleValueVisible,
      refWrapper,
      refImage,
      onWheel,
      onMaskClick,
      onCloseClick: close,
      onImgLoad() {
        setLoadStatus("loaded");
      },
      onImgError() {
        setLoadStatus("error");
      },
      actions: computed(() => [
        {
          key: "fullScreen",
          name: t("imagePreview.fullScreen"),
          content: () => h(IconFullscreen),
          onClick: () => fullScreen()
        },
        {
          key: "rotateRight",
          name: t("imagePreview.rotateRight"),
          content: () => h(IconRotateRight),
          onClick: () => handleRotate("clockwise")
        },
        {
          key: "rotateLeft",
          name: t("imagePreview.rotateLeft"),
          content: () => h(IconRotateLeft),
          onClick: () => handleRotate("counterclockwise")
        },
        {
          key: "zoomIn",
          name: t("imagePreview.zoomIn"),
          content: () => h(IconZoomIn),
          onClick: () => handleScale("zoomIn"),
          disabled: scale.value === maxScale
        },
        {
          key: "zoomOut",
          name: t("imagePreview.zoomOut"),
          content: () => h(IconZoomOut),
          onClick: () => handleScale("zoomOut"),
          disabled: scale.value === minScale
        },
        {
          key: "originalSize",
          name: t("imagePreview.originalSize"),
          content: () => h(IconOriginalSize),
          onClick: () => changeScale(1)
        }
      ])
    };
  }
});
const _hoisted_1$1 = ["src"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconLoading = resolveComponent("IconLoading");
  const _component_PreviewToolbar = resolveComponent("PreviewToolbar");
  const _component_IconClose = resolveComponent("IconClose");
  const _component_PreviewArrow = resolveComponent("PreviewArrow");
  return openBlock(), createBlock(Teleport, {
    to: _ctx.container,
    disabled: !_ctx.renderToBody
  }, [
    createElementVNode("div", {
      class: normalizeClass(_ctx.classNames),
      style: normalizeStyle(_ctx.wrapperStyles)
    }, [
      createVNode(Transition, {
        name: "image-fade",
        onBeforeEnter: _cache[0] || (_cache[0] = (el) => el.parentElement && (el.parentElement.style.display = "block")),
        onAfterLeave: _cache[1] || (_cache[1] = (el) => el.parentElement && (el.parentElement.style.display = ""))
      }, {
        default: withCtx(() => [
          withDirectives(createElementVNode("div", {
            class: normalizeClass(`${_ctx.prefixCls}-mask`)
          }, null, 2), [
            [vShow, _ctx.mergedVisible]
          ])
        ]),
        _: 1
      }),
      _ctx.mergedVisible ? (openBlock(), createElementBlock("div", {
        key: 0,
        ref: "refWrapper",
        tabindex: "0",
        class: normalizeClass(`${_ctx.prefixCls}-wrapper`),
        onClick: _cache[6] || (_cache[6] = (...args) => _ctx.onMaskClick && _ctx.onMaskClick(...args)),
        onWheel: _cache[7] || (_cache[7] = withModifiers((...args) => _ctx.onWheel && _ctx.onWheel(...args), ["prevent", "stop"]))
      }, [
        createCommentVNode(" img "),
        createElementVNode("div", {
          class: normalizeClass(`${_ctx.prefixCls}-img-container`),
          style: normalizeStyle({ transform: `scale(${_ctx.scale}, ${_ctx.scale})` }),
          onClick: _cache[4] || (_cache[4] = (...args) => _ctx.onMaskClick && _ctx.onMaskClick(...args))
        }, [
          (openBlock(), createElementBlock("img", {
            ref: "refImage",
            key: _ctx.src,
            src: _ctx.src,
            class: normalizeClass([
              `${_ctx.prefixCls}-img`,
              {
                [`${_ctx.prefixCls}-img-moving`]: _ctx.moving
              }
            ]),
            style: normalizeStyle({
              transform: `translate(${_ctx.translate[0]}px, ${_ctx.translate[1]}px) rotate(${_ctx.rotate}deg)`
            }),
            onLoad: _cache[2] || (_cache[2] = (...args) => _ctx.onImgLoad && _ctx.onImgLoad(...args)),
            onError: _cache[3] || (_cache[3] = (...args) => _ctx.onImgError && _ctx.onImgError(...args))
          }, null, 46, _hoisted_1$1))
        ], 6),
        createCommentVNode(" loading "),
        _ctx.isLoading ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: normalizeClass(`${_ctx.prefixCls}-loading`)
        }, [
          createVNode(_component_IconLoading)
        ], 2)) : createCommentVNode("v-if", true),
        createCommentVNode(" scale value "),
        createVNode(Transition, { name: "image-fade" }, {
          default: withCtx(() => [
            _ctx.scaleValueVisible ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(`${_ctx.prefixCls}-scale-value`)
            }, toDisplayString((_ctx.scale * 100).toFixed(0)) + "% ", 3)) : createCommentVNode("v-if", true)
          ]),
          _: 1
        }),
        createCommentVNode(" toolbar "),
        _ctx.isLoaded && _ctx.actionsLayout.length ? (openBlock(), createBlock(_component_PreviewToolbar, {
          key: 1,
          actions: _ctx.actions,
          "actions-layout": _ctx.actionsLayout
        }, {
          default: withCtx(() => [
            renderSlot(_ctx.$slots, "actions")
          ]),
          _: 3
        }, 8, ["actions", "actions-layout"])) : createCommentVNode("v-if", true),
        createCommentVNode(" close btn "),
        _ctx.closable ? (openBlock(), createElementBlock("div", {
          key: 2,
          class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
          onClick: _cache[5] || (_cache[5] = (...args) => _ctx.onCloseClick && _ctx.onCloseClick(...args))
        }, [
          createVNode(_component_IconClose)
        ], 2)) : createCommentVNode("v-if", true),
        createCommentVNode(" group arrow "),
        _ctx.inGroup ? (openBlock(), createBlock(_component_PreviewArrow, normalizeProps(mergeProps({ key: 3 }, _ctx.groupArrowProps)), null, 16)) : createCommentVNode("v-if", true)
      ], 34)) : createCommentVNode("v-if", true)
    ], 6)
  ], 8, ["to", "disabled"]);
}
var ImagePreview = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
function normalizeImageSizeProp(size) {
  if (isUndefined(size))
    return void 0;
  if (!isNumber(size) && /^\d+(%)$/.test(size))
    return size;
  const num = parseInt(size, 10);
  return isNumber(num) ? `${num}px` : void 0;
}
const PreviewGroupInjectionKey = Symbol("PreviewGroupInjectionKey");
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
let uuid = 0;
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "Image",
  components: {
    IconImageClose,
    IconLoading,
    ImageFooter,
    ImagePreview
  },
  inheritAttrs: false,
  props: {
    renderToBody: {
      type: Boolean,
      default: true
    },
    src: {
      type: String
    },
    width: {
      type: [String, Number]
    },
    height: {
      type: [String, Number]
    },
    title: {
      type: String
    },
    description: {
      type: String
    },
    fit: {
      type: String
    },
    alt: {
      type: String
    },
    hideFooter: {
      type: [Boolean, String],
      default: false
    },
    footerPosition: {
      type: String,
      default: "inner"
    },
    showLoader: {
      type: Boolean,
      default: false
    },
    preview: {
      type: Boolean,
      default: true
    },
    previewVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPreviewVisible: {
      type: Boolean,
      default: false
    },
    previewProps: {
      type: Object
    },
    footerClass: {
      type: [String, Array, Object]
    }
  },
  emits: [
    "preview-visible-change",
    "update:previewVisible"
  ],
  setup(props, { attrs, slots, emit }) {
    const { t } = useI18n();
    const {
      height,
      width,
      hideFooter,
      title,
      description,
      src,
      footerPosition,
      defaultPreviewVisible,
      previewVisible,
      preview,
      previewProps
    } = toRefs(props);
    const groupContext = inject(PreviewGroupInjectionKey, void 0);
    const prefixCls = getPrefixCls("image");
    const refImg = ref();
    const { isLoaded, isError, isLoading, setLoadStatus } = useImageLoadStatus();
    const sizeStyle = computed(() => ({
      width: normalizeImageSizeProp(width == null ? void 0 : width.value),
      height: normalizeImageSizeProp(height == null ? void 0 : height.value)
    }));
    const fitStyle = computed(() => {
      if (props.fit) {
        return { objectFit: props.fit };
      }
      return {};
    });
    const wrapperClassNames = computed(() => [
      `${prefixCls}`,
      {
        [`${prefixCls}-loading`]: isLoading.value,
        [`${prefixCls}-loading-error`]: isError.value,
        [`${prefixCls}-with-footer-inner`]: isLoaded && showFooter && footerPosition.value === "inner",
        [`${prefixCls}-with-footer-outer`]: isLoaded && showFooter && footerPosition.value === "outer"
      },
      attrs.class
    ]);
    const wrapperStyles = computed(() => [
      sizeStyle.value,
      attrs.style
    ]);
    const showFooter = computed(() => {
      if (!((title == null ? void 0 : title.value) || (description == null ? void 0 : description.value) || slots.extra)) {
        return false;
      }
      if (isBoolean(hideFooter.value))
        return !hideFooter.value && isLoaded.value;
      return hideFooter.value === "never";
    });
    const imgProps = computed(() => omit(attrs, ["class", "style"]));
    const [mergedPreviewVisible, setPreviewVisible] = useMergeState(defaultPreviewVisible.value, reactive({
      value: previewVisible
    }));
    const mergePreview = computed(() => !(groupContext == null ? void 0 : groupContext.preview) && preview.value);
    watchEffect(() => {
      if (isServerRendering || !refImg.value)
        return;
      refImg.value.src = src == null ? void 0 : src.value;
      setLoadStatus("loading");
    });
    const imageId = uuid++;
    watchEffect((onInvalidate) => {
      var _a, _b, _c;
      const unRegister = (_c = groupContext == null ? void 0 : groupContext.registerImageUrl) == null ? void 0 : _c.call(groupContext, imageId, ((_b = (_a = previewProps == null ? void 0 : previewProps.value) == null ? void 0 : _a.src) != null ? _b : src == null ? void 0 : src.value) || "", preview.value);
      onInvalidate(() => {
        unRegister == null ? void 0 : unRegister();
      });
    });
    function onImgLoaded() {
      setLoadStatus("loaded");
    }
    function onImgLoadError() {
      setLoadStatus("error");
    }
    function onImgClick() {
      if (!preview.value)
        return;
      if (groupContext == null ? void 0 : groupContext.preview) {
        groupContext.preview(imageId);
      } else {
        emit("preview-visible-change", true);
        setPreviewVisible(true);
      }
    }
    function onPreviewClose() {
      emit("preview-visible-change", false);
      setPreviewVisible(false);
    }
    return {
      t,
      refImg,
      prefixCls,
      wrapperClassNames,
      wrapperStyles,
      showFooter,
      imgProps,
      imgStyle: sizeStyle,
      isLoaded,
      isError,
      isLoading,
      mergedPreviewVisible,
      mergePreview,
      onImgLoaded,
      onImgLoadError,
      onImgClick,
      onPreviewClose,
      fitStyle
    };
  }
});
const _hoisted_1 = ["title", "alt"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconImageClose = resolveComponent("IconImageClose");
  const _component_IconLoading = resolveComponent("IconLoading");
  const _component_ImageFooter = resolveComponent("ImageFooter");
  const _component_ImagePreview = resolveComponent("ImagePreview");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.wrapperClassNames),
    style: normalizeStyle(_ctx.wrapperStyles)
  }, [
    createElementVNode("img", mergeProps({
      ref: "refImg",
      class: `${_ctx.prefixCls}-img`
    }, _ctx.imgProps, {
      style: __spreadValues$1(__spreadValues$1({}, _ctx.imgStyle), _ctx.fitStyle),
      title: _ctx.title,
      alt: _ctx.alt,
      onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.onImgLoaded && _ctx.onImgLoaded(...args)),
      onError: _cache[1] || (_cache[1] = (...args) => _ctx.onImgLoadError && _ctx.onImgLoadError(...args)),
      onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onImgClick && _ctx.onImgClick(...args))
    }), null, 16, _hoisted_1),
    !_ctx.isLoaded ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-overlay`)
    }, [
      _ctx.isError ? renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
        createElementVNode("div", {
          class: normalizeClass(`${_ctx.prefixCls}-error`)
        }, [
          createElementVNode("div", {
            class: normalizeClass(`${_ctx.prefixCls}-error-icon`)
          }, [
            renderSlot(_ctx.$slots, "error-icon", {}, () => [
              createVNode(_component_IconImageClose)
            ])
          ], 2),
          _ctx.alt || _ctx.description ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: normalizeClass(`${_ctx.prefixCls}-error-alt`)
          }, toDisplayString(_ctx.alt || _ctx.description), 3)) : createCommentVNode("v-if", true)
        ], 2)
      ]) : createCommentVNode("v-if", true),
      _ctx.isLoading && (_ctx.showLoader || _ctx.$slots.loader) ? renderSlot(_ctx.$slots, "loader", { key: 1 }, () => [
        createElementVNode("div", {
          class: normalizeClass([`${_ctx.prefixCls}-loader`])
        }, [
          createElementVNode("div", {
            class: normalizeClass(`${_ctx.prefixCls}-loader-spin`)
          }, [
            createVNode(_component_IconLoading),
            createElementVNode("div", {
              class: normalizeClass(`${_ctx.prefixCls}-loader-spin-text`)
            }, toDisplayString(_ctx.t("image.loading")), 3)
          ], 2)
        ], 2)
      ]) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.showFooter ? (openBlock(), createBlock(_component_ImageFooter, {
      key: 1,
      class: normalizeClass(_ctx.footerClass),
      "prefix-cls": _ctx.prefixCls,
      title: _ctx.title,
      description: _ctx.description
    }, createSlots({ _: 2 }, [
      _ctx.$slots.extra ? {
        name: "extra",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "extra")
        ])
      } : void 0
    ]), 1032, ["class", "prefix-cls", "title", "description"])) : createCommentVNode("v-if", true),
    _ctx.isLoaded && _ctx.mergePreview ? (openBlock(), createBlock(_component_ImagePreview, mergeProps({
      key: 2,
      src: _ctx.src
    }, _ctx.previewProps, {
      visible: _ctx.mergedPreviewVisible,
      "render-to-body": _ctx.renderToBody,
      onClose: _ctx.onPreviewClose
    }), {
      actions: withCtx(() => [
        renderSlot(_ctx.$slots, "preview-actions")
      ]),
      _: 3
    }, 16, ["src", "visible", "render-to-body", "onClose"])) : createCommentVNode("v-if", true)
  ], 6);
}
var _Image = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var _sfc_main = /* @__PURE__ */ defineComponent({
  name: "ImagePreviewGroup",
  components: {
    ImagePreview
  },
  inheritAttrs: false,
  props: {
    renderToBody: {
      type: Boolean,
      default: true
    },
    srcList: {
      type: Array
    },
    current: {
      type: Number
    },
    defaultCurrent: {
      type: Number,
      default: 0
    },
    infinite: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    maskClosable: {
      type: Boolean,
      default: true
    },
    closable: {
      type: Boolean,
      default: true
    },
    actionsLayout: {
      type: Array,
      default: () => ["fullScreen", "rotateRight", "rotateLeft", "zoomIn", "zoomOut", "originalSize"]
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: [
    "change",
    "update:current",
    "visible-change",
    "update:visible"
  ],
  setup(props, {
    emit
  }) {
    const {
      srcList,
      visible,
      defaultVisible,
      current,
      defaultCurrent,
      infinite
    } = toRefs(props);
    const [mergedVisible, setLocalVisible] = useMergeState(defaultVisible.value, reactive({
      value: visible
    }));
    const setVisible = (newVisible) => {
      if (newVisible !== mergedVisible.value) {
        emit("visible-change", newVisible);
        emit("update:visible", newVisible);
        setLocalVisible(newVisible);
      }
    };
    const propImageUrlMap = computed(() => new Map(isArray(srcList == null ? void 0 : srcList.value) ? srcList == null ? void 0 : srcList.value.map((url, index2) => [index2, {
      url,
      canPreview: true
    }]) : []));
    const imageUrlMap = ref(new Map(propImageUrlMap.value || []));
    const imageIdList = computed(() => Array.from(imageUrlMap.value.keys()));
    const imageCount = computed(() => imageIdList.value.length);
    function registerImageUrl(id, url, canPreview) {
      if (!propImageUrlMap.value.has(id))
        imageUrlMap.value.set(id, {
          url,
          canPreview
        });
      return function unRegisterPreviewUrl() {
        if (!propImageUrlMap.value.has(id)) {
          imageUrlMap.value.delete(id);
        }
      };
    }
    watch(propImageUrlMap, () => {
      imageUrlMap.value = new Map(propImageUrlMap.value || []);
    });
    const [currentIndex, setLocalCurrentIndex] = useMergeState(defaultCurrent.value, reactive({
      value: current
    }));
    const setCurrentIndex = (index2) => {
      if (index2 !== currentIndex.value) {
        emit("change", index2);
        emit("update:current", index2);
        setLocalCurrentIndex(index2);
      }
    };
    const currentId = computed(() => imageIdList.value[currentIndex.value]);
    const setCurrentId = (nextId) => {
      const nextIndex2 = imageIdList.value.indexOf(nextId);
      if (nextIndex2 !== currentIndex.value) {
        setCurrentIndex(nextIndex2);
      }
    };
    const currentUrl = computed(() => {
      var _a;
      return (_a = imageUrlMap.value.get(currentId.value)) == null ? void 0 : _a.url;
    });
    provide(PreviewGroupInjectionKey, reactive({
      registerImageUrl,
      preview: (imageId) => {
        setVisible(true);
        setCurrentId(imageId);
      }
    }));
    const nextIndex = computed(() => {
      const findNext = (start, end) => {
        var _a;
        for (let i = start; i <= end; i++) {
          const id = imageIdList.value[i];
          if ((_a = imageUrlMap.value.get(id)) == null ? void 0 : _a.canPreview) {
            return i;
          }
        }
        return void 0;
      };
      const next = findNext(currentIndex.value + 1, imageCount.value - 1);
      return isUndefined(next) && infinite.value ? findNext(0, currentIndex.value - 1) : next;
    });
    const prevIndex = computed(() => {
      const findPrev = (start, end) => {
        var _a;
        for (let i = start; i >= end; i--) {
          const id = imageIdList.value[i];
          if ((_a = imageUrlMap.value.get(id)) == null ? void 0 : _a.canPreview) {
            return i;
          }
        }
        return void 0;
      };
      const prev = findPrev(currentIndex.value - 1, 0);
      return isUndefined(prev) && infinite.value ? findPrev(imageCount.value - 1, currentIndex.value + 1) : prev;
    });
    const onPrev = computed(() => !isUndefined(prevIndex.value) ? () => {
      !isUndefined(prevIndex.value) && setCurrentIndex(prevIndex.value);
    } : void 0);
    const onNext = computed(() => !isUndefined(nextIndex.value) ? () => {
      !isUndefined(nextIndex.value) && setCurrentIndex(nextIndex.value);
    } : void 0);
    return {
      mergedVisible,
      currentUrl,
      prevIndex,
      nextIndex,
      onClose() {
        setVisible(false);
      },
      groupArrowProps: reactive({
        onPrev,
        onNext
      })
    };
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
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ImagePreview = resolveComponent("ImagePreview");
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "default"),
    createVNode(_component_ImagePreview, mergeProps(__spreadProps(__spreadValues({}, _ctx.$attrs), { groupArrowProps: _ctx.groupArrowProps }), {
      "in-group": "",
      src: _ctx.currentUrl,
      visible: _ctx.mergedVisible,
      "mask-closable": _ctx.maskClosable,
      closable: _ctx.closable,
      "actions-layout": _ctx.actionsLayout,
      "popup-container": _ctx.popupContainer,
      "render-to-body": _ctx.renderToBody,
      onClose: _ctx.onClose
    }), createSlots({ _: 2 }, [
      _ctx.$slots.actions ? {
        name: "actions",
        fn: withCtx(() => [
          renderSlot(_ctx.$slots, "actions", { url: _ctx.currentUrl })
        ])
      } : void 0
    ]), 1040, ["src", "visible", "mask-closable", "closable", "actions-layout", "popup-container", "render-to-body", "onClose"])
  ], 64);
}
var ImagePreviewGroup = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Image = Object.assign(_Image, {
  Preview: ImagePreview,
  PreviewGroup: ImagePreviewGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Image.name, _Image);
    app.component(componentPrefix + ImagePreview.name, ImagePreview);
    app.component(componentPrefix + ImagePreviewGroup.name, ImagePreviewGroup);
    app.component(componentPrefix + ImagePreviewAction.name, ImagePreviewAction);
  }
});

export { Image as I, ImagePreviewGroup as a };
//# sourceMappingURL=index-25609e16.mjs.map
