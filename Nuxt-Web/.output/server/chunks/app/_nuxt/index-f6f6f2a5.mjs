import { ref, computed, watch, defineComponent, inject, createVNode, mergeProps, openBlock, createElementBlock, normalizeClass, normalizeStyle, resolveComponent, withCtx, createElementVNode, renderSlot, createBlock, createCommentVNode, Transition, withModifiers } from 'vue';
import { s as setGlobalConfig, a as getComponentPrefix, _ as _export_sfc, g as getPrefixCls, p as useI18n, x as configProviderInjectionKey, i as isNumber, e as isObject, o as on, k as off } from './use-teleport-container-1599a5a4.mjs';
import { R as ResizeObserver } from './index-dd449d78.mjs';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "IconLeft",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-left`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$3 = /* @__PURE__ */ createElementVNode("path", { d: "M32 8.4 16.444 23.956 32 39.513" }, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$3
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
  }, _hoisted_3$3, 14, _hoisted_1$3);
}
var _IconLeft = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const IconLeft = Object.assign(_IconLeft, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLeft.name, _IconLeft);
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "IconRight",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-right`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$2 = /* @__PURE__ */ createElementVNode("path", { d: "m16 39.513 15.556-15.557L16 8.4" }, null, -1);
const _hoisted_3$2 = [
  _hoisted_2$2
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
  }, _hoisted_3$2, 14, _hoisted_1$2);
}
var _IconRight = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const IconRight = Object.assign(_IconRight, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconRight.name, _IconRight);
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "IconMore",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-more`, { [`${prefixCls}-spin`]: props.spin }]);
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
  d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", { d: "M38 25v-2h2v2h-2ZM23 25v-2h2v2h-2ZM8 25v-2h2v2H8Z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2$1,
  _hoisted_3$1
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
  }, _hoisted_4, 14, _hoisted_1$1);
}
var _IconMore = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const IconMore = Object.assign(_IconMore, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMore.name, _IconMore);
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "IconEmpty",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-empty`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M24 5v6m7 1 4-4m-18 4-4-4m28.5 22H28s-1 3-4 3-4-3-4-3H6.5M40 41H8a2 2 0 0 1-2-2v-8.46a2 2 0 0 1 .272-1.007l6.15-10.54A2 2 0 0 1 14.148 18H33.85a2 2 0 0 1 1.728.992l6.149 10.541A2 2 0 0 1 42 30.541V39a2 2 0 0 1-2 2Z" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
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
  }, _hoisted_3, 14, _hoisted_1);
}
var _IconEmpty = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const IconEmpty = Object.assign(_IconEmpty, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconEmpty.name, _IconEmpty);
  }
});
var Empty$1 = /* @__PURE__ */ defineComponent({
  name: "Empty",
  inheritAttrs: false,
  props: {
    description: String,
    imgSrc: String,
    inConfigProvider: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots,
    attrs
  }) {
    const prefixCls = getPrefixCls("empty");
    const {
      t
    } = useI18n();
    const configCtx = inject(configProviderInjectionKey, void 0);
    return () => {
      var _a, _b, _c, _d;
      if (!props.inConfigProvider && (configCtx == null ? void 0 : configCtx.slots.empty) && !(slots.image || props.imgSrc || props.description)) {
        return configCtx.slots.empty({
          component: "empty"
        });
      }
      return createVNode("div", mergeProps({
        "class": prefixCls
      }, attrs), [createVNode("div", {
        "class": `${prefixCls}-image`
      }, [(_b = (_a = slots.image) == null ? void 0 : _a.call(slots)) != null ? _b : props.imgSrc ? createVNode("img", {
        "src": props.imgSrc,
        "alt": props.description || "empty"
      }, null) : createVNode(IconEmpty, null, null)]), createVNode("div", {
        "class": `${prefixCls}-description`
      }, [(_d = (_c = slots.default) == null ? void 0 : _c.call(slots)) != null ? _d : props.description || t("empty.description")])]);
    };
  }
});
const Empty = Object.assign(Empty$1, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + Empty$1.name, Empty$1);
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "Thumb",
  props: {
    data: {
      type: Object
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    alwaysShow: {
      type: Boolean,
      default: false
    },
    both: {
      type: Boolean,
      default: false
    }
  },
  emits: ["scroll"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("scrollbar");
    const visible = ref(false);
    const trackRef = ref();
    const thumbRef = ref();
    const thumbMap = computed(() => {
      if (props.direction === "horizontal") {
        return {
          size: "width",
          direction: "left",
          offset: "offsetWidth",
          client: "clientX"
        };
      }
      return {
        size: "height",
        direction: "top",
        offset: "offsetHeight",
        client: "clientY"
      };
    });
    const offset = ref(0);
    const isDragging = ref(false);
    const mouseOffset = ref(0);
    const thumbStyle = computed(() => {
      var _a, _b;
      return {
        [thumbMap.value.size]: `${(_b = (_a = props.data) == null ? void 0 : _a.thumbSize) != null ? _b : 0}px`,
        [thumbMap.value.direction]: `${offset.value}px`
      };
    });
    const handleThumbMouseDown = (ev) => {
      ev.preventDefault();
      if (thumbRef.value) {
        mouseOffset.value = ev[thumbMap.value.client] - thumbRef.value.getBoundingClientRect()[thumbMap.value.direction];
        isDragging.value = true;
        on(window, "mousemove", handleMouseMove);
        on(window, "mouseup", handleMouseUp);
        on(window, "contextmenu", handleMouseUp);
      }
    };
    const handleTrackClick = (ev) => {
      var _a, _b, _c, _d;
      ev.preventDefault();
      if (thumbRef.value) {
        const _offset = getLegalOffset(ev[thumbMap.value.client] > thumbRef.value.getBoundingClientRect()[thumbMap.value.direction] ? offset.value + ((_b = (_a = props.data) == null ? void 0 : _a.thumbSize) != null ? _b : 0) : offset.value - ((_d = (_c = props.data) == null ? void 0 : _c.thumbSize) != null ? _d : 0));
        if (_offset !== offset.value) {
          offset.value = _offset;
          emit("scroll", _offset);
        }
      }
    };
    const getLegalOffset = (offset2) => {
      if (offset2 < 0) {
        return 0;
      }
      if (props.data && offset2 > props.data.max) {
        return props.data.max;
      }
      return offset2;
    };
    const handleMouseMove = (ev) => {
      if (trackRef.value && thumbRef.value) {
        const _offset = getLegalOffset(ev[thumbMap.value.client] - trackRef.value.getBoundingClientRect()[thumbMap.value.direction] - mouseOffset.value);
        if (_offset !== offset.value) {
          offset.value = _offset;
          emit("scroll", _offset);
        }
      }
    };
    const handleMouseUp = () => {
      isDragging.value = false;
      off(window, "mousemove", handleMouseMove);
      off(window, "mouseup", handleMouseUp);
    };
    const setOffset = (_offset) => {
      if (!isDragging.value) {
        _offset = getLegalOffset(_offset);
        if (_offset !== offset.value) {
          offset.value = _offset;
        }
      }
    };
    const thumbCls = computed(() => [
      `${prefixCls}-thumb`,
      `${prefixCls}-thumb-direction-${props.direction}`,
      {
        [`${prefixCls}-thumb-dragging`]: isDragging.value
      }
    ]);
    return {
      visible,
      trackRef,
      thumbRef,
      prefixCls,
      thumbCls,
      thumbStyle,
      handleThumbMouseDown,
      handleTrackClick,
      setOffset
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Transition, null, {
    default: withCtx(() => [
      createElementVNode("div", {
        ref: "trackRef",
        class: normalizeClass([
          `${_ctx.prefixCls}-track`,
          `${_ctx.prefixCls}-track-direction-${_ctx.direction}`
        ]),
        onMousedown: _cache[1] || (_cache[1] = withModifiers((...args) => _ctx.handleTrackClick && _ctx.handleTrackClick(...args), ["self"]))
      }, [
        createElementVNode("div", {
          ref: "thumbRef",
          class: normalizeClass(_ctx.thumbCls),
          style: normalizeStyle(_ctx.thumbStyle),
          onMousedown: _cache[0] || (_cache[0] = (...args) => _ctx.handleThumbMouseDown && _ctx.handleThumbMouseDown(...args))
        }, [
          createElementVNode("div", {
            class: normalizeClass(`${_ctx.prefixCls}-thumb-bar`)
          }, null, 2)
        ], 38)
      ], 34)
    ]),
    _: 1
  });
}
var Thumb = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const THUMB_MIN_SIZE = 20;
const TRACK_SIZE = 15;
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "Scrollbar",
  components: {
    ResizeObserver,
    Thumb
  },
  inheritAttrs: false,
  props: {
    type: {
      type: String,
      default: "embed"
    },
    outerClass: [String, Object, Array],
    outerStyle: {
      type: [String, Object, Array]
    },
    hide: {
      type: Boolean,
      default: false
    },
    disableHorizontal: {
      type: Boolean,
      default: false
    },
    disableVertical: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    scroll: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("scrollbar");
    const containerRef = ref();
    const horizontalData = ref();
    const verticalData = ref();
    const horizontalThumbRef = ref();
    const verticalThumbRef = ref();
    const _hasHorizontalScrollbar = ref(false);
    const _hasVerticalScrollbar = ref(false);
    const hasHorizontalScrollbar = computed(() => _hasHorizontalScrollbar.value && !props.disableHorizontal);
    const hasVerticalScrollbar = computed(() => _hasVerticalScrollbar.value && !props.disableVertical);
    const isBoth = ref(false);
    const getContainerSize = () => {
      var _a, _b, _c, _d, _e, _f;
      if (containerRef.value) {
        const {
          clientWidth,
          clientHeight,
          offsetWidth,
          offsetHeight,
          scrollWidth,
          scrollHeight,
          scrollTop,
          scrollLeft
        } = containerRef.value;
        _hasHorizontalScrollbar.value = scrollWidth > clientWidth;
        _hasVerticalScrollbar.value = scrollHeight > clientHeight;
        isBoth.value = hasHorizontalScrollbar.value && hasVerticalScrollbar.value;
        const horizontalTrackWidth = props.type === "embed" && isBoth.value ? offsetWidth - TRACK_SIZE : offsetWidth;
        const verticalTrackHeight = props.type === "embed" && isBoth.value ? offsetHeight - TRACK_SIZE : offsetHeight;
        const horizontalThumbWidth = Math.round(horizontalTrackWidth / Math.min(scrollWidth / clientWidth, horizontalTrackWidth / THUMB_MIN_SIZE));
        const maxHorizontalOffset = horizontalTrackWidth - horizontalThumbWidth;
        const horizontalRatio = (scrollWidth - clientWidth) / maxHorizontalOffset;
        const verticalThumbHeight = Math.round(verticalTrackHeight / Math.min(scrollHeight / clientHeight, verticalTrackHeight / THUMB_MIN_SIZE));
        const maxVerticalOffset = verticalTrackHeight - verticalThumbHeight;
        const verticalRatio = (scrollHeight - clientHeight) / maxVerticalOffset;
        horizontalData.value = {
          ratio: horizontalRatio,
          thumbSize: horizontalThumbWidth,
          max: maxHorizontalOffset
        };
        verticalData.value = {
          ratio: verticalRatio,
          thumbSize: verticalThumbHeight,
          max: maxVerticalOffset
        };
        if (scrollTop > 0) {
          const verticalOffset = Math.round(scrollTop / ((_b = (_a = verticalData.value) == null ? void 0 : _a.ratio) != null ? _b : 1));
          (_c = verticalThumbRef.value) == null ? void 0 : _c.setOffset(verticalOffset);
        }
        if (scrollLeft > 0) {
          const horizontalOffset = Math.round(scrollLeft / ((_e = (_d = verticalData.value) == null ? void 0 : _d.ratio) != null ? _e : 1));
          (_f = horizontalThumbRef.value) == null ? void 0 : _f.setOffset(horizontalOffset);
        }
      }
    };
    const handleResize = () => {
      getContainerSize();
    };
    const handleScroll = (ev) => {
      var _a, _b, _c, _d, _e, _f;
      if (containerRef.value) {
        if (hasHorizontalScrollbar.value && !props.disableHorizontal) {
          const horizontalOffset = Math.round(containerRef.value.scrollLeft / ((_b = (_a = horizontalData.value) == null ? void 0 : _a.ratio) != null ? _b : 1));
          (_c = horizontalThumbRef.value) == null ? void 0 : _c.setOffset(horizontalOffset);
        }
        if (hasVerticalScrollbar.value && !props.disableVertical) {
          const verticalOffset = Math.round(containerRef.value.scrollTop / ((_e = (_d = verticalData.value) == null ? void 0 : _d.ratio) != null ? _e : 1));
          (_f = verticalThumbRef.value) == null ? void 0 : _f.setOffset(verticalOffset);
        }
      }
      emit("scroll", ev);
    };
    const handleHorizontalScroll = (offset) => {
      var _a, _b;
      if (containerRef.value) {
        containerRef.value.scrollTo({
          left: offset * ((_b = (_a = horizontalData.value) == null ? void 0 : _a.ratio) != null ? _b : 1)
        });
      }
    };
    const handleVerticalScroll = (offset) => {
      var _a, _b;
      if (containerRef.value) {
        containerRef.value.scrollTo({
          top: offset * ((_b = (_a = verticalData.value) == null ? void 0 : _a.ratio) != null ? _b : 1)
        });
      }
    };
    const style = computed(() => {
      const style2 = {};
      if (props.type === "track") {
        if (hasHorizontalScrollbar.value) {
          style2.paddingBottom = `${TRACK_SIZE}px`;
        }
        if (hasVerticalScrollbar.value) {
          style2.paddingRight = `${TRACK_SIZE}px`;
        }
      }
      return [style2, props.outerStyle];
    });
    const cls = computed(() => [
      `${prefixCls}`,
      `${prefixCls}-type-${props.type}`,
      {
        [`${prefixCls}-both`]: isBoth.value
      },
      props.outerClass
    ]);
    return {
      prefixCls,
      cls,
      style,
      containerRef,
      horizontalThumbRef,
      verticalThumbRef,
      horizontalData,
      verticalData,
      isBoth,
      hasHorizontalScrollbar,
      hasVerticalScrollbar,
      handleResize,
      handleScroll,
      handleHorizontalScroll,
      handleVerticalScroll
    };
  },
  methods: {
    scrollTo(options, y) {
      var _a, _b;
      if (isObject(options)) {
        (_a = this.$refs.containerRef) == null ? void 0 : _a.scrollTo(options);
      } else if (options || y) {
        (_b = this.$refs.containerRef) == null ? void 0 : _b.scrollTo(options, y);
      }
    },
    scrollTop(top) {
      var _a;
      (_a = this.$refs.containerRef) == null ? void 0 : _a.scrollTo({
        top
      });
    },
    scrollLeft(left) {
      var _a;
      (_a = this.$refs.containerRef) == null ? void 0 : _a.scrollTo({
        left
      });
    }
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_ResizeObserver = resolveComponent("ResizeObserver");
  const _component_thumb = resolveComponent("thumb");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.style)
  }, [
    createVNode(_component_ResizeObserver, { onResize: _ctx.handleResize }, {
      default: withCtx(() => [
        createElementVNode("div", mergeProps({
          ref: "containerRef",
          class: `${_ctx.prefixCls}-container`
        }, _ctx.$attrs, {
          onScroll: _cache[0] || (_cache[0] = (...args) => _ctx.handleScroll && _ctx.handleScroll(...args))
        }), [
          createVNode(_component_ResizeObserver, { onResize: _ctx.handleResize }, {
            default: withCtx(() => [
              renderSlot(_ctx.$slots, "default")
            ]),
            _: 3
          }, 8, ["onResize"])
        ], 16)
      ]),
      _: 3
    }, 8, ["onResize"]),
    !_ctx.hide && _ctx.hasHorizontalScrollbar ? (openBlock(), createBlock(_component_thumb, {
      key: 0,
      ref: "horizontalThumbRef",
      data: _ctx.horizontalData,
      direction: "horizontal",
      both: _ctx.isBoth,
      onScroll: _ctx.handleHorizontalScroll
    }, null, 8, ["data", "both", "onScroll"])) : createCommentVNode("v-if", true),
    !_ctx.hide && _ctx.hasVerticalScrollbar ? (openBlock(), createBlock(_component_thumb, {
      key: 1,
      ref: "verticalThumbRef",
      data: _ctx.verticalData,
      direction: "vertical",
      both: _ctx.isBoth,
      onScroll: _ctx.handleVerticalScroll
    }, null, 8, ["data", "both", "onScroll"])) : createCommentVNode("v-if", true)
  ], 6);
}
var _Scrollbar = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Scrollbar = Object.assign(_Scrollbar, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Scrollbar.name, _Scrollbar);
  }
});
const useTrigger = ({
  popupVisible,
  defaultPopupVisible,
  emit
}) => {
  var _a;
  const _popupVisible = ref((_a = defaultPopupVisible == null ? void 0 : defaultPopupVisible.value) != null ? _a : false);
  const computedPopupVisible = computed(() => {
    var _a2;
    return (_a2 = popupVisible == null ? void 0 : popupVisible.value) != null ? _a2 : _popupVisible.value;
  });
  const handlePopupVisibleChange = (visible) => {
    if (visible !== computedPopupVisible.value) {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    }
  };
  watch(computedPopupVisible, (visible) => {
    if (_popupVisible.value !== visible) {
      _popupVisible.value = visible;
    }
  });
  return {
    computedPopupVisible,
    handlePopupVisibleChange
  };
};

export { Empty as E, IconRight as I, Scrollbar as S, IconLeft as a, IconMore as b, useTrigger as u };
//# sourceMappingURL=index-f6f6f2a5.mjs.map
