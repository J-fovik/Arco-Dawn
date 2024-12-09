import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode } from 'vue';
import { _ as _export_sfc, g as getPrefixCls, i as isNumber } from './use-teleport-container-1599a5a4.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "IconArrowFall",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-arrow-fall`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M24.008 41.99a.01.01 0 0 1-.016 0l-9.978-11.974A.01.01 0 0 1 14.02 30H33.98a.01.01 0 0 1 .007.016l-9.978 11.975Z" }, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", {
  d: "M24 42 14 30h20L24 42Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_4$1 = /* @__PURE__ */ createElementVNode("path", { d: "M22 6h4v26h-4z" }, null, -1);
const _hoisted_5$1 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  stroke: "none",
  d: "M22 6h4v26h-4z"
}, null, -1);
const _hoisted_6$1 = [
  _hoisted_2$1,
  _hoisted_3$1,
  _hoisted_4$1,
  _hoisted_5$1
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
  }, _hoisted_6$1, 14, _hoisted_1$1);
}
var _IconArrowFall = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const IconArrowFall = Object.assign(_IconArrowFall, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconArrowFall.name, _IconArrowFall);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "IconArrowRise",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-arrow-rise`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M23.992 6.01a.01.01 0 0 1 .016 0l9.978 11.974a.01.01 0 0 1-.007.016H14.02a.01.01 0 0 1-.007-.016l9.978-11.975Z" }, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", {
  d: "m24 6 10 12H14L24 6Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_4 = /* @__PURE__ */ createElementVNode("path", { d: "M26 42h-4V16h4z" }, null, -1);
const _hoisted_5 = /* @__PURE__ */ createElementVNode("path", {
  fill: "currentColor",
  stroke: "none",
  d: "M26 42h-4V16h4z"
}, null, -1);
const _hoisted_6 = [
  _hoisted_2,
  _hoisted_3,
  _hoisted_4,
  _hoisted_5
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
  }, _hoisted_6, 14, _hoisted_1);
}
var _IconArrowRise = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const IconArrowRise = Object.assign(_IconArrowRise, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconArrowRise.name, _IconArrowRise);
  }
});

export { IconArrowRise as I, IconArrowFall as a };
//# sourceMappingURL=index-aa9a0d9b.mjs.map
