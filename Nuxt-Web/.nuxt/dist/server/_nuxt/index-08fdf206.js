import { _ as _export_sfc, g as getPrefixCls, i as isNumber, q as useFormItem, r as useSize, x as getKeyDownHandler, K as KEYBOARD_KEY, a as isUndefined, B as Button, s as setGlobalConfig, n as getComponentPrefix, I as IconHover, w as IconClose, h as IconLoading } from "./use-teleport-container-1599a5a4.js";
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, toRefs, ref, watch, createVNode, Fragment, resolveComponent, renderSlot, createCommentVNode, createBlock, withModifiers, withCtx } from "vue";
import NP from "number-precision";
import { I as IconUp } from "./index-11d38f35.js";
import { b as Input, I as IconDown } from "./index-dd449d78.js";
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "IconMinus",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-minus`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M5 24h38" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
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
  }, _hoisted_3$1, 14, _hoisted_1$1);
}
var _IconMinus = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const IconMinus = Object.assign(_IconMinus, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMinus.name, _IconMinus);
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "IconPlus",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-plus`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M5 24h38M24 5v38" }, null, -1);
const _hoisted_3 = [
  _hoisted_2
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
  }, _hoisted_3, 14, _hoisted_1);
}
var _IconPlus = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const IconPlus = Object.assign(_IconPlus, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconPlus.name, _IconPlus);
  }
});
var __defProp = Object.defineProperty;
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
const FIRST_DELAY = 800;
const SPEED = 150;
NP.enableBoundaryChecking(false);
var _InputNumber = /* @__PURE__ */ defineComponent({
  name: "InputNumber",
  props: {
    modelValue: Number,
    defaultValue: Number,
    mode: {
      type: String,
      default: "embed"
    },
    precision: Number,
    step: {
      type: Number,
      default: 1
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    max: {
      type: Number,
      default: Infinity
    },
    min: {
      type: Number,
      default: -Infinity
    },
    formatter: {
      type: Function
    },
    parser: {
      type: Function
    },
    placeholder: String,
    hideButton: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    modelEvent: {
      type: String,
      default: "change"
    },
    readOnly: {
      type: Boolean,
      default: false
    },
    inputAttrs: {
      type: Object
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true,
    "clear": (ev) => true,
    "input": (value, inputValue, ev) => true,
    "keydown": (ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    var _a;
    const {
      size,
      disabled
    } = toRefs(props);
    const prefixCls = getPrefixCls("input-number");
    const inputRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      eventHandlers
    } = useFormItem({
      size,
      disabled
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const mergedPrecision = computed(() => {
      if (isNumber(props.precision)) {
        const decimal = `${props.step}`.split(".")[1];
        const stepPrecision = decimal && decimal.length || 0;
        return Math.max(stepPrecision, props.precision);
      }
      return void 0;
    });
    const getStringValue = (number) => {
      var _a2, _b;
      if (!isNumber(number)) {
        return "";
      }
      const numString = mergedPrecision.value ? number.toFixed(mergedPrecision.value) : String(number);
      return (_b = (_a2 = props.formatter) == null ? void 0 : _a2.call(props, numString)) != null ? _b : numString;
    };
    const _value = ref(getStringValue((_a = props.modelValue) != null ? _a : props.defaultValue));
    const valueNumber = computed(() => {
      var _a2, _b;
      if (!_value.value) {
        return void 0;
      }
      const number = Number((_b = (_a2 = props.parser) == null ? void 0 : _a2.call(props, _value.value)) != null ? _b : _value.value);
      return Number.isNaN(number) ? void 0 : number;
    });
    const isMin = ref(isNumber(valueNumber.value) && valueNumber.value <= props.min);
    const isMax = ref(isNumber(valueNumber.value) && valueNumber.value >= props.max);
    let repeatTimer = 0;
    const clearRepeatTimer = () => {
      if (repeatTimer) {
        window.clearTimeout(repeatTimer);
        repeatTimer = 0;
      }
    };
    const getLegalValue = (value) => {
      if (isUndefined(value)) {
        return void 0;
      }
      if (isNumber(props.min) && value < props.min) {
        value = props.min;
      }
      if (isNumber(props.max) && value > props.max) {
        value = props.max;
      }
      return isNumber(mergedPrecision.value) ? NP.round(value, mergedPrecision.value) : value;
    };
    const updateNumberStatus = (number) => {
      let _isMin = false;
      let _isMax = false;
      if (isNumber(number)) {
        if (number <= props.min) {
          _isMin = true;
        }
        if (number >= props.max) {
          _isMax = true;
        }
      }
      if (isMax.value !== _isMax) {
        isMax.value = _isMax;
      }
      if (isMin.value !== _isMin) {
        isMin.value = _isMin;
      }
    };
    const handleExceedRange = () => {
      const finalValue = getLegalValue(valueNumber.value);
      const stringValue = getStringValue(finalValue);
      if (finalValue !== valueNumber.value || _value.value !== stringValue) {
        _value.value = stringValue;
      }
      emit("update:modelValue", finalValue);
    };
    watch(() => [props.max, props.min], () => {
      handleExceedRange();
      updateNumberStatus(valueNumber.value);
    });
    const nextStep = (method, event) => {
      if (mergedDisabled.value || method === "plus" && isMax.value || method === "minus" && isMin.value) {
        return;
      }
      let nextValue;
      if (isNumber(valueNumber.value)) {
        nextValue = getLegalValue(NP[method](valueNumber.value, props.step));
      } else {
        nextValue = props.min === -Infinity ? 0 : props.min;
      }
      _value.value = getStringValue(nextValue);
      updateNumberStatus(nextValue);
      emit("update:modelValue", nextValue);
      emit("change", nextValue, event);
    };
    const handleStepButton = (event, method, needRepeat = false) => {
      var _a2;
      event.preventDefault();
      (_a2 = inputRef.value) == null ? void 0 : _a2.focus();
      nextStep(method, event);
      if (needRepeat) {
        repeatTimer = window.setTimeout(() => event.target.dispatchEvent(event), repeatTimer ? SPEED : FIRST_DELAY);
      }
    };
    const handleInput = (value, ev) => {
      var _a2, _b, _c, _d;
      value = value.trim().replace(/。/g, ".");
      value = (_b = (_a2 = props.parser) == null ? void 0 : _a2.call(props, value)) != null ? _b : value;
      if (isNumber(Number(value)) || /^(\.|-)$/.test(value)) {
        _value.value = (_d = (_c = props.formatter) == null ? void 0 : _c.call(props, value)) != null ? _d : value;
        updateNumberStatus(valueNumber.value);
        emit("input", valueNumber.value, _value.value, ev);
        if (props.modelEvent === "input") {
          emit("update:modelValue", valueNumber.value);
          emit("change", valueNumber.value, ev);
        }
      }
    };
    const handleFocus = (ev) => {
      emit("focus", ev);
    };
    const handleChange = (value, ev) => {
      if (ev instanceof MouseEvent && !value) {
        return;
      }
      handleExceedRange();
      emit("change", valueNumber.value, ev);
    };
    const handleBlur = (ev) => {
      emit("blur", ev);
    };
    const handleClear = (ev) => {
      var _a2, _b;
      _value.value = "";
      emit("update:modelValue", void 0);
      emit("change", void 0, ev);
      (_b = (_a2 = eventHandlers.value) == null ? void 0 : _a2.onChange) == null ? void 0 : _b.call(_a2, ev);
      emit("clear", ev);
    };
    const keyDownHandler = getKeyDownHandler(/* @__PURE__ */ new Map([[KEYBOARD_KEY.ARROW_UP, (ev) => {
      ev.preventDefault();
      !props.readOnly && nextStep("plus", ev);
    }], [KEYBOARD_KEY.ARROW_DOWN, (ev) => {
      ev.preventDefault();
      !props.readOnly && nextStep("minus", ev);
    }]]));
    const onKeyDown = (event) => {
      emit("keydown", event);
      if (!event.defaultPrevented) {
        keyDownHandler(event);
      }
    };
    watch(() => props.modelValue, (value) => {
      if (value !== valueNumber.value) {
        _value.value = getStringValue(value);
        updateNumberStatus(value);
      }
    });
    const renderSuffix = () => {
      var _a2, _b, _c;
      if (props.readOnly) {
        return null;
      }
      return createVNode(Fragment, null, [slots.suffix && createVNode("div", {
        "class": `${prefixCls}-suffix`
      }, [(_a2 = slots.suffix) == null ? void 0 : _a2.call(slots)]), createVNode("div", {
        "class": `${prefixCls}-step`
      }, [createVNode("button", {
        "class": [`${prefixCls}-step-button`, {
          [`${prefixCls}-step-button-disabled`]: mergedDisabled.value || isMax.value
        }],
        "type": "button",
        "tabindex": "-1",
        "disabled": mergedDisabled.value || isMax.value,
        "onMousedown": (e) => handleStepButton(e, "plus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, [slots.plus ? (_b = slots.plus) == null ? void 0 : _b.call(slots) : createVNode(IconUp, null, null)]), createVNode("button", {
        "class": [`${prefixCls}-step-button`, {
          [`${prefixCls}-step-button-disabled`]: mergedDisabled.value || isMin.value
        }],
        "type": "button",
        "tabindex": "-1",
        "disabled": mergedDisabled.value || isMin.value,
        "onMousedown": (e) => handleStepButton(e, "minus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, [slots.minus ? (_c = slots.minus) == null ? void 0 : _c.call(slots) : createVNode(IconDown, null, null)])])]);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-mode-${props.mode}`, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-readonly`]: props.readOnly
    }]);
    const renderPrependButton = () => {
      return createVNode(Button, {
        "size": mergedSize.value,
        "tabindex": "-1",
        "class": `${prefixCls}-step-button`,
        "disabled": mergedDisabled.value || isMin.value,
        "onMousedown": (ev) => handleStepButton(ev, "minus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, {
        icon: () => createVNode(IconMinus, null, null)
      });
    };
    const renderAppendButton = () => {
      return createVNode(Button, {
        "size": mergedSize.value,
        "tabindex": "-1",
        "class": `${prefixCls}-step-button`,
        "disabled": mergedDisabled.value || isMax.value,
        "onMousedown": (ev) => handleStepButton(ev, "plus", true),
        "onMouseup": clearRepeatTimer,
        "onMouseleave": clearRepeatTimer
      }, {
        icon: () => createVNode(IconPlus, null, null)
      });
    };
    const render = () => {
      const _slots = props.mode === "embed" ? {
        prepend: slots.prepend,
        prefix: slots.prefix,
        suffix: props.hideButton ? slots.suffix : renderSuffix,
        append: slots.append
      } : {
        prepend: props.hideButton ? slots.prepend : renderPrependButton,
        prefix: slots.prefix,
        suffix: slots.suffix,
        append: props.hideButton ? slots.append : renderAppendButton
      };
      return createVNode(Input, {
        "key": `__arco__${props.mode}`,
        "ref": inputRef,
        "class": cls.value,
        "type": "text",
        "allowClear": props.allowClear,
        "size": mergedSize.value,
        "modelValue": _value.value,
        "placeholder": props.placeholder,
        "disabled": mergedDisabled.value,
        "readonly": props.readOnly,
        "error": props.error,
        "inputAttrs": __spreadValues({
          "role": "spinbutton",
          "aria-valuemax": props.max,
          "aria-valuemin": props.min,
          "aria-valuenow": _value.value
        }, props.inputAttrs),
        "onInput": handleInput,
        "onFocus": handleFocus,
        "onBlur": handleBlur,
        "onClear": handleClear,
        "onChange": handleChange,
        "onKeydown": onKeyDown
      }, _slots);
    };
    return {
      inputRef,
      render
    };
  },
  methods: {
    focus() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.focus();
    },
    blur() {
      var _a;
      (_a = this.inputRef) == null ? void 0 : _a.blur();
    }
  },
  render() {
    return this.render();
  }
});
const InputNumber = Object.assign(_InputNumber, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _InputNumber.name, _InputNumber);
  }
});
const TAG_COLORS = [
  "red",
  "orangered",
  "orange",
  "gold",
  "lime",
  "green",
  "cyan",
  "blue",
  "arcoblue",
  "purple",
  "pinkpurple",
  "magenta",
  "gray"
];
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "Tag",
  components: {
    IconHover,
    IconClose,
    IconLoading
  },
  props: {
    color: {
      type: String
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: false
    },
    checkable: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: true
    },
    nowrap: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:visible": (visible) => true,
    "update:checked": (checked) => true,
    "close": (ev) => true,
    "check": (checked, ev) => true
  },
  setup(props, { emit }) {
    const { size } = toRefs(props);
    const prefixCls = getPrefixCls("tag");
    const isBuiltInColor = computed(() => props.color && TAG_COLORS.includes(props.color));
    const isCustomColor = computed(() => props.color && !TAG_COLORS.includes(props.color));
    const _visible = ref(props.defaultVisible);
    const _checked = ref(props.defaultChecked);
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.visible) != null ? _a : _visible.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return props.checkable ? (_a = props.checked) != null ? _a : _checked.value : true;
    });
    const { mergedSize: _mergedSize } = useSize(size);
    const mergedSize = computed(() => {
      if (_mergedSize.value === "mini") {
        return "small";
      }
      return _mergedSize.value;
    });
    const handleClose = (ev) => {
      _visible.value = false;
      emit("update:visible", false);
      emit("close", ev);
    };
    const handleClick = (ev) => {
      if (props.checkable) {
        const newChecked = !computedChecked.value;
        _checked.value = newChecked;
        emit("update:checked", newChecked);
        emit("check", newChecked, ev);
      }
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-hide`]: !computedVisible.value,
        [`${prefixCls}-${props.color}`]: isBuiltInColor.value,
        [`${prefixCls}-bordered`]: props.bordered,
        [`${prefixCls}-checkable`]: props.checkable,
        [`${prefixCls}-checked`]: computedChecked.value,
        [`${prefixCls}-custom-color`]: isCustomColor.value
      }
    ]);
    const style = computed(() => {
      if (isCustomColor.value) {
        return {
          backgroundColor: props.color
        };
      }
      return void 0;
    });
    return {
      prefixCls,
      cls,
      style,
      computedVisible,
      computedChecked,
      handleClick,
      handleClose
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_hover = resolveComponent("icon-hover");
  const _component_icon_loading = resolveComponent("icon-loading");
  return _ctx.computedVisible ? (openBlock(), createElementBlock("span", {
    key: 0,
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.style),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      renderSlot(_ctx.$slots, "icon")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.nowrap ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-text`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)) : renderSlot(_ctx.$slots, "default", { key: 2 }),
    _ctx.closable ? (openBlock(), createBlock(_component_icon_hover, {
      key: 3,
      role: "button",
      "aria-label": "Close",
      prefix: _ctx.prefixCls,
      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
      onClick: withModifiers(_ctx.handleClose, ["stop"])
    }, {
      default: withCtx(() => [
        renderSlot(_ctx.$slots, "close-icon", {}, () => [
          createVNode(_component_icon_close)
        ])
      ]),
      _: 3
    }, 8, ["prefix", "class", "onClick"])) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createElementBlock("span", {
      key: 4,
      class: normalizeClass(`${_ctx.prefixCls}-loading-icon`)
    }, [
      createVNode(_component_icon_loading)
    ], 2)) : createCommentVNode("v-if", true)
  ], 6)) : createCommentVNode("v-if", true);
}
var _Tag = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Tag = Object.assign(_Tag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tag.name, _Tag);
  }
});
const index = "";
export {
  IconPlus as I,
  Tag as T,
  IconMinus as a,
  InputNumber as b
};
//# sourceMappingURL=index-08fdf206.js.map
