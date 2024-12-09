import { _ as _export_sfc, g as getPrefixCls, u as useI18n, d as isObject, i as isNumber, k as isString, e as isBoolean, f as isFunction, q as useFormItem, r as useSize$1, m as omit, t as INPUT_EVENTS, v as isComponentInstance, p as getFirstComponent, a as isUndefined, c as isNull, I as IconHover, w as IconClose, s as setGlobalConfig, n as getComponentPrefix, b as isArray, h as IconLoading, l as configProviderInjectionKey, x as getKeyDownHandler, K as KEYBOARD_KEY, y as getRelativeRect, z as isEmptyObject } from "./use-teleport-container-1599a5a4.js";
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, createTextVNode, toDisplayString, resolveComponent, createBlock, resolveDynamicComponent, withCtx, createVNode, ref, watch, createCommentVNode, Fragment, createElementVNode, nextTick, toRefs, mergeProps, onUnmounted, cloneVNode, reactive, TransitionGroup, inject, withDirectives, vShow, getCurrentInstance, onUpdated, renderList, provide, watchEffect, isVNode } from "vue";
import { I as IconLeft, a as IconRight, b as IconMore, S as Scrollbar, E as Empty, u as useTrigger } from "./index-f6f6f2a5.js";
import { b as InputNumber, T as Tag } from "./index-08fdf206.js";
import { E as Enter, p as pick, F as FeedbackIcon, B as Backspace, a as IconSearch, I as IconDown, T as Trigger } from "./index-dd449d78.js";
import ResizeObserver$1 from "resize-observer-polyfill";
import { S as Spin, C as Checkbox } from "./index-11d38f35.js";
const target = global;
function debounce(callback, delay) {
  let timer = 0;
  return (...args) => {
    if (timer) {
      target.clearTimeout(timer);
    }
    timer = target.setTimeout(() => {
      timer = 0;
      callback(...args);
    }, delay);
  };
}
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "Pager",
  props: {
    pageNumber: {
      type: Number
    },
    current: {
      type: Number
    },
    disabled: {
      type: Boolean,
      default: false
    },
    style: {
      type: Object
    },
    activeStyle: {
      type: Object
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const isActive = computed(() => props.current === props.pageNumber);
    const handleClick = (e) => {
      if (!props.disabled) {
        emit("click", props.pageNumber, e);
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-active`]: isActive.value
      }
    ]);
    const mergedStyle = computed(() => {
      return isActive.value ? props.activeStyle : props.style;
    });
    return {
      prefixCls,
      cls,
      mergedStyle,
      handleClick
    };
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.mergedStyle),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default", { page: _ctx.pageNumber }, () => [
      createTextVNode(toDisplayString(_ctx.pageNumber), 1)
    ])
  ], 6);
}
var Pager = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const getLegalPage = (page, { min, max }) => {
  if (page < min) {
    return min;
  }
  if (page > max) {
    return max;
  }
  return page;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  name: "StepPager",
  components: {
    IconLeft,
    IconRight
  },
  props: {
    pages: {
      type: Number,
      required: true
    },
    current: {
      type: Number,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const isNext = props.type === "next";
    const mergedDisabled = computed(() => {
      if (props.disabled) {
        return props.disabled;
      }
      if (!props.pages) {
        return true;
      }
      if (isNext && props.current === props.pages) {
        return true;
      }
      return !isNext && props.current <= 1;
    });
    const nextPage = computed(() => getLegalPage(props.current + (isNext ? 1 : -1), {
      min: 1,
      max: props.pages
    }));
    const handleClick = (e) => {
      if (!mergedDisabled.value) {
        emit("click", nextPage.value);
      }
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-${props.type}`,
      {
        [`${prefixCls}-disabled`]: mergedDisabled.value
      }
    ]);
    return {
      prefixCls,
      cls,
      isNext,
      handleClick
    };
  }
});
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_right = resolveComponent("icon-right");
  const _component_icon_left = resolveComponent("icon-left");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.simple ? "span" : "li"), {
    class: normalizeClass(_ctx.cls),
    onClick: _ctx.handleClick
  }, {
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default", {
        type: _ctx.isNext ? "next" : "previous"
      }, () => [
        _ctx.isNext ? (openBlock(), createBlock(_component_icon_right, { key: 0 })) : (openBlock(), createBlock(_component_icon_left, { key: 1 }))
      ])
    ]),
    _: 3
  }, 8, ["class", "onClick"]);
}
var StepPager = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "EllipsisPager",
  components: {
    IconMore
  },
  props: {
    current: {
      type: Number,
      required: true
    },
    step: {
      type: Number,
      default: 5
    },
    pages: {
      type: Number,
      required: true
    }
  },
  emits: ["click"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-item");
    const nextPage = computed(() => getLegalPage(props.current + props.step, {
      min: 1,
      max: props.pages
    }));
    const handleClick = (e) => {
      emit("click", nextPage.value);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-ellipsis`]);
    return {
      prefixCls,
      cls,
      handleClick
    };
  }
});
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_more = resolveComponent("icon-more");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(_ctx.cls),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    renderSlot(_ctx.$slots, "default", {}, () => [
      createVNode(_component_icon_more)
    ])
  ], 2);
}
var EllipsisPager = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "PageJumper",
  components: {
    InputNumber
  },
  props: {
    current: {
      type: Number,
      required: true
    },
    simple: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    pages: {
      type: Number,
      required: true
    },
    size: {
      type: String
    },
    onChange: {
      type: Function
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-jumper");
    const { t } = useI18n();
    const inputValue = ref(props.simple ? props.current : void 0);
    const handleFormatter = (value) => {
      const parseIntVal = parseInt(value.toString(), 10);
      return Number.isNaN(parseIntVal) ? void 0 : String(parseIntVal);
    };
    const handleChange = (value) => {
      emit("change", inputValue.value);
      nextTick(() => {
        if (!props.simple) {
          inputValue.value = void 0;
        }
      });
    };
    watch(() => props.current, (value) => {
      if (props.simple && value !== inputValue.value) {
        inputValue.value = value;
      }
    });
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-simple`]: props.simple
      }
    ]);
    return {
      prefixCls,
      cls,
      t,
      inputValue,
      handleChange,
      handleFormatter
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_input_number = resolveComponent("input-number");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.cls)
  }, [
    !_ctx.simple ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass([`${_ctx.prefixCls}-prepend`, `${_ctx.prefixCls}-text-goto`])
    }, [
      renderSlot(_ctx.$slots, "jumper-prepend", {}, () => [
        createTextVNode(toDisplayString(_ctx.t("pagination.goto")), 1)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    createVNode(_component_input_number, {
      modelValue: _ctx.inputValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.inputValue = $event),
      class: normalizeClass(`${_ctx.prefixCls}-input`),
      min: 1,
      max: _ctx.pages,
      size: _ctx.size,
      disabled: _ctx.disabled,
      "hide-button": "",
      formatter: _ctx.handleFormatter,
      onChange: _ctx.handleChange
    }, null, 8, ["modelValue", "class", "max", "size", "disabled", "formatter", "onChange"]),
    _ctx.$slots["jumper-append"] ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-append`)
    }, [
      renderSlot(_ctx.$slots, "jumper-append")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.simple ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
      createElementVNode("span", {
        class: normalizeClass(`${_ctx.prefixCls}-separator`)
      }, "/", 2),
      createElementVNode("span", {
        class: normalizeClass(`${_ctx.prefixCls}-total-page`)
      }, toDisplayString(_ctx.pages), 3)
    ], 64)) : createCommentVNode("v-if", true)
  ], 2);
}
var PageJumper = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
var __defProp$6 = Object.defineProperty;
var __defProps$2 = Object.defineProperties;
var __getOwnPropDescs$2 = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols$6 = Object.getOwnPropertySymbols;
var __hasOwnProp$6 = Object.prototype.hasOwnProperty;
var __propIsEnum$6 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$6 = (obj, key, value) => key in obj ? __defProp$6(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$6 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$6.call(b, prop))
      __defNormalProp$6(a, prop, b[prop]);
  if (__getOwnPropSymbols$6)
    for (var prop of __getOwnPropSymbols$6(b)) {
      if (__propIsEnum$6.call(b, prop))
        __defNormalProp$6(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps$2 = (a, b) => __defProps$2(a, __getOwnPropDescs$2(b));
const isGroupOption = (option) => {
  return isObject(option) && "isGroup" in option;
};
const isGroupOptionInfo = (option) => {
  return isObject(option) && "isGroup" in option;
};
const getValueString = (value, valueKey = "value") => String(isObject(value) ? value[valueKey] : value);
const getKeyFromValue = (value, valueKey = "value") => {
  if (isObject(value)) {
    return `__arco__option__object__${value[valueKey]}`;
  }
  if (value || isNumber(value) || isString(value) || isBoolean(value)) {
    return `__arco__option__${typeof value}-${value}`;
  }
  return "";
};
const hasEmptyStringKey = (optionInfoMap) => {
  return optionInfoMap.has(`__arco__option__string-`);
};
const createOptionInfo = (option, {
  valueKey,
  fieldNames,
  origin,
  index: index2 = -1
}) => {
  var _a;
  if (isObject(option)) {
    const value = option[fieldNames.value];
    return {
      raw: option,
      index: index2,
      key: getKeyFromValue(value, valueKey),
      origin,
      value,
      label: (_a = option[fieldNames.label]) != null ? _a : getValueString(value, valueKey),
      render: option[fieldNames.render],
      disabled: Boolean(option[fieldNames.disabled]),
      tagProps: option[fieldNames.tagProps]
    };
  }
  const raw = {
    value: option,
    label: String(option),
    disabled: false
  };
  return __spreadValues$6({
    raw,
    index: index2,
    key: getKeyFromValue(option, valueKey),
    origin
  }, raw);
};
const getOptionInfos = (options, {
  valueKey,
  fieldNames,
  origin,
  optionInfoMap
}) => {
  var _a;
  const infos = [];
  for (const item of options) {
    if (isGroupOption(item)) {
      const options2 = getOptionInfos((_a = item.options) != null ? _a : [], {
        valueKey,
        fieldNames,
        origin,
        optionInfoMap
      });
      if (options2.length > 0) {
        infos.push(__spreadProps$2(__spreadValues$6({}, item), {
          key: `__arco__group__${item.label}`,
          options: options2
        }));
      }
    } else {
      const optionInfo = createOptionInfo(item, {
        valueKey,
        fieldNames,
        origin
      });
      infos.push(optionInfo);
      if (!optionInfoMap.get(optionInfo.key)) {
        optionInfoMap.set(optionInfo.key, optionInfo);
      }
    }
  }
  return infos;
};
const getValidOptions = (optionInfos, {
  inputValue,
  filterOption
}) => {
  const travel = (optionInfos2) => {
    var _a;
    const options = [];
    for (const item of optionInfos2) {
      if (isGroupOptionInfo(item)) {
        const _options = travel((_a = item.options) != null ? _a : []);
        if (_options.length > 0) {
          options.push(__spreadProps$2(__spreadValues$6({}, item), { options: _options }));
        }
      } else if (isValidOption(item, { inputValue, filterOption })) {
        options.push(item);
      }
    }
    return options;
  };
  return travel(optionInfos);
};
const isValidOption = (optionInfo, {
  inputValue,
  filterOption
}) => {
  if (isFunction(filterOption)) {
    return !inputValue || filterOption(inputValue, optionInfo.raw);
  }
  if (filterOption) {
    return optionInfo.label.toLowerCase().includes((inputValue != null ? inputValue : "").toLowerCase());
  }
  return true;
};
const useInput = ({
  defaultValue,
  modelValue,
  emit,
  eventName = "input",
  updateEventName = "update:modelValue",
  eventHandlers
}) => {
  var _a;
  const inputRef = ref();
  const _value = ref((_a = defaultValue == null ? void 0 : defaultValue.value) != null ? _a : "");
  const _focused = ref(false);
  const isComposition = ref(false);
  const compositionValue = ref("");
  let initialValue;
  const computedValue = computed(() => {
    var _a2;
    return (_a2 = modelValue == null ? void 0 : modelValue.value) != null ? _a2 : _value.value;
  });
  const updateValue = (value, ev) => {
    _value.value = value;
    emit(updateEventName, value);
    emit(eventName, value, ev);
  };
  const handleInput = (ev) => {
    const { value } = ev.target;
    if (!isComposition.value) {
      updateValue(value, ev);
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
        }
      });
    }
  };
  const handleChange = (ev) => {
    if (eventName === "input" && computedValue.value !== initialValue) {
      initialValue = computedValue.value;
      emit("change", computedValue.value, ev);
    }
  };
  const handleComposition = (ev) => {
    var _a2;
    const { value } = ev.target;
    if (ev.type === "compositionend") {
      isComposition.value = false;
      compositionValue.value = "";
      updateValue(value, ev);
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value;
        }
      });
    } else {
      isComposition.value = true;
      compositionValue.value = computedValue.value + ((_a2 = ev.data) != null ? _a2 : "");
    }
  };
  const handleFocus = (ev) => {
    var _a2, _b;
    _focused.value = true;
    initialValue = computedValue.value;
    emit("focus", ev);
    (_b = (_a2 = eventHandlers == null ? void 0 : eventHandlers.value) == null ? void 0 : _a2.onFocus) == null ? void 0 : _b.call(_a2, ev);
  };
  const handleBlur = (ev) => {
    var _a2, _b;
    _focused.value = false;
    emit("blur", ev);
    (_b = (_a2 = eventHandlers == null ? void 0 : eventHandlers.value) == null ? void 0 : _a2.onBlur) == null ? void 0 : _b.call(_a2, ev);
    handleChange(ev);
  };
  const handleKeyDown = (ev) => {
    const keyCode = ev.key || ev.code;
    if (!isComposition.value && keyCode === Enter.key) {
      emit("pressEnter", ev);
      handleChange(ev);
    }
  };
  const handleMousedown = (ev) => {
    if (inputRef.value && ev.target !== inputRef.value) {
      ev.preventDefault();
      inputRef.value.focus();
    }
  };
  watch(computedValue, (value) => {
    if (inputRef.value && value !== inputRef.value.value) {
      inputRef.value.value = value;
    }
  });
  return {
    inputRef,
    _value,
    _focused,
    isComposition,
    compositionValue,
    computedValue,
    handleInput,
    handleComposition,
    handleFocus,
    handleBlur,
    handleKeyDown,
    handleMousedown
  };
};
var InputLabel = /* @__PURE__ */ defineComponent({
  name: "InputLabel",
  inheritAttrs: false,
  props: {
    modelValue: Object,
    inputValue: {
      type: String,
      default: ""
    },
    enabledInput: Boolean,
    formatLabel: Function,
    placeholder: String,
    retainInputValue: Boolean,
    disabled: Boolean,
    baseCls: String,
    size: String,
    error: Boolean,
    focused: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: ["update:inputValue", "inputValueChange", "focus", "blur"],
  setup(props, {
    attrs,
    emit,
    slots
  }) {
    var _a;
    const {
      size,
      disabled,
      error,
      inputValue,
      uninjectFormItemContext
    } = toRefs(props);
    const prefixCls = (_a = props.baseCls) != null ? _a : getPrefixCls("input-label");
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext == null ? void 0 : uninjectFormItemContext.value
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const {
      inputRef,
      _focused,
      computedValue: computedInputValue,
      handleInput,
      handleComposition,
      handleFocus,
      handleBlur,
      handleMousedown
    } = useInput({
      modelValue: inputValue,
      emit,
      eventName: "inputValueChange",
      updateEventName: "update:inputValue",
      eventHandlers
    });
    const mergedFocused = computed(() => {
      var _a2;
      return (_a2 = props.focused) != null ? _a2 : _focused.value;
    });
    const showInput = computed(() => props.enabledInput && _focused.value || !props.modelValue);
    const formatLabel = () => {
      var _a2, _b;
      if (props.modelValue) {
        return (_b = (_a2 = props.formatLabel) == null ? void 0 : _a2.call(props, props.modelValue)) != null ? _b : props.modelValue.label;
      }
      return "";
    };
    const mergedPlaceholder = computed(() => {
      if (props.enabledInput && props.modelValue) {
        return formatLabel();
      }
      return props.placeholder;
    });
    const renderLabel = () => {
      var _a2, _b;
      if (props.modelValue) {
        return (_b = (_a2 = slots.default) == null ? void 0 : _a2.call(slots, {
          data: props.modelValue
        })) != null ? _b : formatLabel();
      }
      return null;
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-search`]: props.enabledInput,
      [`${prefixCls}-focus`]: mergedFocused.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-error`]: mergedError.value
    }]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const render = () => createVNode("span", mergeProps(wrapperAttrs.value, {
      "class": cls.value,
      "title": formatLabel(),
      "onMousedown": handleMousedown
    }), [slots.prefix && createVNode("span", {
      "class": `${prefixCls}-prefix`
    }, [slots.prefix()]), createVNode("input", mergeProps(inputAttrs.value, {
      "ref": inputRef,
      "class": [`${prefixCls}-input`, {
        [`${prefixCls}-input-hidden`]: !showInput.value
      }],
      "value": computedInputValue.value,
      "readonly": !props.enabledInput,
      "placeholder": mergedPlaceholder.value,
      "disabled": mergedDisabled.value,
      "onInput": handleInput,
      "onFocus": handleFocus,
      "onBlur": handleBlur,
      "onCompositionstart": handleComposition,
      "onCompositionupdate": handleComposition,
      "onCompositionend": handleComposition
    }), null), createVNode("span", {
      "class": [`${prefixCls}-value`, {
        [`${prefixCls}-value-hidden`]: showInput.value
      }]
    }, [renderLabel()]), slots.suffix && createVNode("span", {
      "class": `${prefixCls}-suffix`
    }, [slots.suffix()])]);
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
var __defProp$5 = Object.defineProperty;
var __getOwnPropSymbols$5 = Object.getOwnPropertySymbols;
var __hasOwnProp$5 = Object.prototype.hasOwnProperty;
var __propIsEnum$5 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$5 = (obj, key, value) => key in obj ? __defProp$5(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$5 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$5.call(b, prop))
      __defNormalProp$5(a, prop, b[prop]);
  if (__getOwnPropSymbols$5)
    for (var prop of __getOwnPropSymbols$5(b)) {
      if (__propIsEnum$5.call(b, prop))
        __defNormalProp$5(a, prop, b[prop]);
    }
  return a;
};
const getValueData = (value, fieldNames) => {
  const result = [];
  for (const item of value) {
    if (isObject(item)) {
      result.push({
        raw: item,
        value: item[fieldNames.value],
        label: item[fieldNames.label],
        closable: item[fieldNames.closable],
        tagProps: item[fieldNames.tagProps]
      });
    } else if (value || isNumber(value)) {
      const raw = {
        value: item,
        label: String(item),
        closable: true
      };
      result.push(__spreadValues$5({
        raw
      }, raw));
    }
  }
  return result;
};
var ResizeObserver = /* @__PURE__ */ defineComponent({
  name: "ResizeObserver",
  emits: [
    "resize"
  ],
  setup(props, {
    emit,
    slots
  }) {
    let resizeObserver;
    const componentRef = ref();
    const element = computed(() => isComponentInstance(componentRef.value) ? componentRef.value.$el : componentRef.value);
    const createResizeObserver = (target2) => {
      if (!target2)
        return;
      resizeObserver = new ResizeObserver$1((entries) => {
        const entry = entries[0];
        emit("resize", entry);
      });
      resizeObserver.observe(target2);
    };
    const destroyResizeObserver = () => {
      if (resizeObserver) {
        resizeObserver.disconnect();
        resizeObserver = null;
      }
    };
    watch(element, (_element) => {
      if (resizeObserver)
        destroyResizeObserver();
      if (_element)
        createResizeObserver(_element);
    });
    onUnmounted(() => {
      destroyResizeObserver();
    });
    return () => {
      var _a, _b;
      const firstChild = getFirstComponent((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : []);
      if (firstChild) {
        return cloneVNode(firstChild, {
          ref: componentRef
        }, true);
      }
      return null;
    };
  }
});
var __defProp$4 = Object.defineProperty;
var __getOwnPropSymbols$4 = Object.getOwnPropertySymbols;
var __hasOwnProp$4 = Object.prototype.hasOwnProperty;
var __propIsEnum$4 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$4 = (obj, key, value) => key in obj ? __defProp$4(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$4 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$4.call(b, prop))
      __defNormalProp$4(a, prop, b[prop]);
  if (__getOwnPropSymbols$4)
    for (var prop of __getOwnPropSymbols$4(b)) {
      if (__propIsEnum$4.call(b, prop))
        __defNormalProp$4(a, prop, b[prop]);
    }
  return a;
};
const DEFAULT_FIELD_NAMES$2 = {
  value: "value",
  label: "label",
  closable: "closable",
  tagProps: "tagProps"
};
var _InputTag = /* @__PURE__ */ defineComponent({
  name: "InputTag",
  inheritAttrs: false,
  props: {
    modelValue: {
      type: Array
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    inputValue: String,
    defaultInputValue: {
      type: String,
      default: ""
    },
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    retainInputValue: {
      type: [Boolean, Object],
      default: false
    },
    formatTag: {
      type: Function
    },
    uniqueValue: {
      type: Boolean,
      default: false
    },
    fieldNames: {
      type: Object
    },
    tagNowrap: {
      type: Boolean,
      default: false
    },
    baseCls: String,
    focused: Boolean,
    disabledInput: Boolean,
    uninjectFormItemContext: Boolean
  },
  emits: {
    "update:modelValue": (value) => true,
    "update:inputValue": (inputValue) => true,
    "change": (value, ev) => true,
    "inputValueChange": (inputValue, ev) => true,
    "pressEnter": (inputValue, ev) => true,
    "remove": (removed, ev) => true,
    "clear": (ev) => true,
    "focus": (ev) => true,
    "blur": (ev) => true
  },
  setup(props, {
    emit,
    slots,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      uninjectFormItemContext,
      modelValue
    } = toRefs(props);
    const prefixCls = props.baseCls || getPrefixCls("input-tag");
    const inputRef = ref();
    const mirrorRef = ref();
    const {
      mergedSize: _mergedSize,
      mergedDisabled,
      mergedError,
      feedback,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error,
      uninject: uninjectFormItemContext == null ? void 0 : uninjectFormItemContext.value
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const mergedFieldNames = computed(() => __spreadValues$4(__spreadValues$4({}, DEFAULT_FIELD_NAMES$2), props.fieldNames));
    const _focused = ref(false);
    const _value = ref(props.defaultValue);
    const _inputValue = ref(props.defaultInputValue);
    const isComposition = ref(false);
    const compositionValue = ref("");
    const retainInputValue = computed(() => {
      if (isObject(props.retainInputValue)) {
        return __spreadValues$4({
          create: false,
          blur: false
        }, props.retainInputValue);
      }
      return {
        create: props.retainInputValue,
        blur: props.retainInputValue
      };
    });
    const inputStyle = reactive({
      width: "12px"
    });
    const mergedFocused = computed(() => props.focused || _focused.value);
    const updateInputValue = (value, ev) => {
      _inputValue.value = value;
      emit("update:inputValue", value);
      emit("inputValueChange", value, ev);
    };
    const handleComposition = (ev) => {
      var _a;
      const {
        value
      } = ev.target;
      if (ev.type === "compositionend") {
        isComposition.value = false;
        compositionValue.value = "";
        updateInputValue(value, ev);
        nextTick(() => {
          if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
            inputRef.value.value = computedInputValue.value;
          }
        });
      } else {
        isComposition.value = true;
        compositionValue.value = computedInputValue.value + ((_a = ev.data) != null ? _a : "");
      }
    };
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
    const computedInputValue = computed(() => {
      var _a;
      return (_a = props.inputValue) != null ? _a : _inputValue.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = [];
      }
    });
    const handleMousedown = (e) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };
    const handleInput = (ev) => {
      const {
        value
      } = ev.target;
      if (!isComposition.value) {
        updateInputValue(value, ev);
        nextTick(() => {
          if (inputRef.value && computedInputValue.value !== inputRef.value.value) {
            inputRef.value.value = computedInputValue.value;
          }
        });
      }
    };
    const valueData = computed(() => getValueData(computedValue.value, mergedFieldNames.value));
    const tags = computed(() => {
      if (props.maxTagCount > 0) {
        const invisibleTags = valueData.value.length - props.maxTagCount;
        if (invisibleTags > 0) {
          const result = valueData.value.slice(0, props.maxTagCount);
          const raw = {
            value: "__arco__more",
            label: `+${invisibleTags}...`,
            closable: false
          };
          result.push(__spreadValues$4({
            raw
          }, raw));
          return result;
        }
      }
      return valueData.value;
    });
    const updateValue = (value, ev) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, ev);
    };
    const handleRemove = (value, index2, e) => {
      var _a;
      const newValue = (_a = computedValue.value) == null ? void 0 : _a.filter((_, i) => i !== index2);
      updateValue(newValue, e);
      emit("remove", value, e);
    };
    const handleClear = (e) => {
      const newValue = [];
      updateValue(newValue, e);
      emit("clear", e);
    };
    const showClearBtn = computed(() => !mergedDisabled.value && !props.readonly && props.allowClear && Boolean(computedValue.value.length));
    const handlePressEnter = (e) => {
      var _a;
      if (computedInputValue.value) {
        e.preventDefault();
        if (props.uniqueValue && ((_a = computedValue.value) == null ? void 0 : _a.includes(computedInputValue.value))) {
          emit("pressEnter", computedInputValue.value, e);
          return;
        }
        const newValue = computedValue.value.concat(computedInputValue.value);
        updateValue(newValue, e);
        emit("pressEnter", computedInputValue.value, e);
        if (!retainInputValue.value.create) {
          updateInputValue("", e);
        }
      }
    };
    const handleFocus = (ev) => {
      var _a, _b;
      _focused.value = true;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      _focused.value = false;
      if (!retainInputValue.value.blur && computedInputValue.value) {
        updateInputValue("", ev);
      }
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const getLastClosableIndex = () => {
      for (let i = valueData.value.length - 1; i >= 0; i--) {
        if (valueData.value[i].closable) {
          return i;
        }
      }
      return -1;
    };
    const handleKeyDown = (e) => {
      if (mergedDisabled.value || props.readonly) {
        return;
      }
      const keyCode = e.key || e.code;
      if (!isComposition.value && computedInputValue.value && keyCode === Enter.key) {
        handlePressEnter(e);
      }
      if (!isComposition.value && tags.value.length > 0 && !computedInputValue.value && keyCode === Backspace.key) {
        const lastIndex = getLastClosableIndex();
        if (lastIndex >= 0) {
          handleRemove(valueData.value[lastIndex].value, lastIndex, e);
        }
      }
    };
    const setInputWidth = (width) => {
      if (width > 12) {
        inputStyle.width = `${width}px`;
      } else {
        inputStyle.width = "12px";
      }
    };
    const handleResize = () => {
      if (mirrorRef.value) {
        setInputWidth(mirrorRef.value.offsetWidth);
      }
    };
    watch(computedInputValue, (value) => {
      if (inputRef.value && !isComposition.value && value !== inputRef.value.value) {
        inputRef.value.value = value;
      }
    });
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-disabled`]: mergedDisabled.value,
      [`${prefixCls}-disabled-input`]: props.disabledInput,
      [`${prefixCls}-error`]: mergedError.value,
      [`${prefixCls}-focus`]: mergedFocused.value,
      [`${prefixCls}-readonly`]: props.readonly,
      [`${prefixCls}-has-tag`]: tags.value.length > 0,
      [`${prefixCls}-has-prefix`]: Boolean(slots.prefix),
      [`${prefixCls}-has-suffix`]: Boolean(slots.suffix) || showClearBtn.value || feedback.value,
      [`${prefixCls}-has-placeholder`]: !computedValue.value.length
    }]);
    const wrapperAttrs = computed(() => omit(attrs, INPUT_EVENTS));
    const inputAttrs = computed(() => pick(attrs, INPUT_EVENTS));
    const render = () => {
      var _a;
      return createVNode("span", mergeProps({
        "class": cls.value,
        "onMousedown": handleMousedown
      }, wrapperAttrs.value), [createVNode(ResizeObserver, {
        "onResize": handleResize
      }, {
        default: () => [createVNode("span", {
          "ref": mirrorRef,
          "class": `${prefixCls}-mirror`
        }, [tags.value.length > 0 ? compositionValue.value || computedInputValue.value : compositionValue.value || computedInputValue.value || props.placeholder])]
      }), slots.prefix && createVNode("span", {
        "class": `${prefixCls}-prefix`
      }, [slots.prefix()]), createVNode(TransitionGroup, {
        "tag": "span",
        "name": "input-tag-zoom",
        "class": [`${prefixCls}-inner`, {
          [`${prefixCls}-nowrap`]: props.tagNowrap
        }]
      }, {
        default: () => [tags.value.map((item, index2) => createVNode(Tag, mergeProps({
          "key": `tag-${item.value}`,
          "class": `${prefixCls}-tag`,
          "closable": !mergedDisabled.value && !props.readonly && item.closable,
          "visible": true,
          "nowrap": props.tagNowrap
        }, item.tagProps, {
          "onClose": (ev) => handleRemove(item.value, index2, ev)
        }), {
          default: () => {
            var _a2, _b, _c, _d;
            return [(_d = (_c = (_a2 = slots.tag) == null ? void 0 : _a2.call(slots, {
              data: item.raw
            })) != null ? _c : (_b = props.formatTag) == null ? void 0 : _b.call(props, item.raw)) != null ? _d : item.label];
          }
        })), createVNode("input", mergeProps(inputAttrs.value, {
          "ref": inputRef,
          "key": "input-tag-input",
          "class": `${prefixCls}-input`,
          "style": inputStyle,
          "placeholder": tags.value.length === 0 ? props.placeholder : void 0,
          "disabled": mergedDisabled.value,
          "readonly": props.readonly || props.disabledInput,
          "onInput": handleInput,
          "onKeydown": handleKeyDown,
          "onFocus": handleFocus,
          "onBlur": handleBlur,
          "onCompositionstart": handleComposition,
          "onCompositionupdate": handleComposition,
          "onCompositionend": handleComposition
        }), null)]
      }), showClearBtn.value && createVNode(IconHover, {
        "class": `${prefixCls}-clear-btn`,
        "onClick": handleClear,
        "onMousedown": (e) => e.stopPropagation()
      }, {
        default: () => [createVNode(IconClose, null, null)]
      }), (slots.suffix || Boolean(feedback.value)) && createVNode("span", {
        "class": `${prefixCls}-suffix`
      }, [(_a = slots.suffix) == null ? void 0 : _a.call(slots), Boolean(feedback.value) && createVNode(FeedbackIcon, {
        "type": feedback.value
      }, null)])]);
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
const InputTag = Object.assign(_InputTag, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _InputTag.name, _InputTag);
  }
});
var SelectView = /* @__PURE__ */ defineComponent({
  name: "SelectView",
  props: {
    modelValue: {
      type: Array,
      required: true
    },
    inputValue: String,
    placeholder: String,
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    opened: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    bordered: {
      type: Boolean,
      default: true
    },
    multiple: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: Boolean,
      default: (props) => isArray(props.modelValue)
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    tagNowrap: {
      type: Boolean,
      default: false
    },
    retainInputValue: {
      type: Boolean,
      default: false
    }
  },
  emits: ["remove", "clear", "focus", "blur"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      size,
      disabled,
      error
    } = toRefs(props);
    const prefixCls = getPrefixCls("select-view");
    const {
      feedback,
      eventHandlers,
      mergedDisabled,
      mergedSize: _mergedSize,
      mergedError
    } = useFormItem({
      size,
      disabled,
      error
    });
    const {
      mergedSize
    } = useSize$1(_mergedSize);
    const {
      opened
    } = toRefs(props);
    const componentRef = ref();
    const inputRef = computed(() => {
      var _a;
      return (_a = componentRef.value) == null ? void 0 : _a.inputRef;
    });
    const isEmptyValue = computed(() => props.modelValue.length === 0);
    const enabledInput = computed(() => props.allowSearch || props.allowCreate);
    const showClearBtn = computed(() => props.allowClear && !props.disabled && !isEmptyValue.value);
    const handleFocus = (ev) => {
      var _a, _b;
      emit("focus", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      emit("blur", ev);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleRemove = (tag) => {
      emit("remove", tag);
    };
    const handleClear = (ev) => {
      emit("clear", ev);
    };
    const renderIcon = () => {
      var _a, _b, _c, _d;
      if (props.loading) {
        return (_b = (_a = slots["loading-icon"]) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(IconLoading, null, null);
      }
      if (props.allowSearch && props.opened) {
        return (_d = (_c = slots["search-icon"]) == null ? void 0 : _c.call(slots)) != null ? _d : createVNode(IconSearch, null, null);
      }
      if (slots["arrow-icon"]) {
        return slots["arrow-icon"]();
      }
      return createVNode(IconDown, {
        "class": `${prefixCls}-arrow-icon`
      }, null);
    };
    const renderSuffix = () => createVNode(Fragment, null, [showClearBtn.value && createVNode(IconHover, {
      "class": `${prefixCls}-clear-btn`,
      "onClick": handleClear,
      "onMousedown": (ev) => ev.stopPropagation()
    }, {
      default: () => [createVNode(IconClose, null, null)]
    }), createVNode("span", {
      "class": `${prefixCls}-icon`
    }, [renderIcon()]), Boolean(feedback.value) && createVNode(FeedbackIcon, {
      "type": feedback.value
    }, null)]);
    watch(opened, (opened2) => {
      if (!opened2 && inputRef.value && inputRef.value.isSameNode(document.activeElement)) {
        inputRef.value.blur();
      }
    });
    const cls = computed(() => [`${prefixCls}-${props.multiple ? "multiple" : "single"}`, {
      [`${prefixCls}-opened`]: props.opened,
      [`${prefixCls}-borderless`]: !props.bordered
    }]);
    const render = () => {
      if (props.multiple) {
        return createVNode(InputTag, {
          "ref": componentRef,
          "baseCls": prefixCls,
          "class": cls.value,
          "modelValue": props.modelValue,
          "inputValue": props.inputValue,
          "focused": props.opened,
          "placeholder": props.placeholder,
          "disabled": mergedDisabled.value,
          "size": mergedSize.value,
          "error": mergedError.value,
          "maxTagCount": props.maxTagCount,
          "disabledInput": !props.allowSearch && !props.allowCreate,
          "tagNowrap": props.tagNowrap,
          "retainInputValue": true,
          "uninjectFormItemContext": true,
          "onRemove": handleRemove,
          "onFocus": handleFocus,
          "onBlur": handleBlur
        }, {
          prefix: slots.prefix,
          suffix: renderSuffix,
          tag: slots.label
        });
      }
      return createVNode(InputLabel, {
        "ref": componentRef,
        "baseCls": prefixCls,
        "class": cls.value,
        "modelValue": props.modelValue[0],
        "inputValue": props.inputValue,
        "focused": props.opened,
        "placeholder": props.placeholder,
        "disabled": mergedDisabled.value,
        "size": mergedSize.value,
        "error": mergedError.value,
        "enabledInput": enabledInput.value,
        "uninjectFormItemContext": true,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, {
        default: slots.label,
        prefix: slots.prefix,
        suffix: renderSuffix
      });
    };
    return {
      inputRef,
      handleFocus,
      handleBlur,
      render
    };
  },
  methods: {
    focus() {
      if (this.inputRef) {
        this.inputRef.focus();
      }
    },
    blur() {
      if (this.inputRef) {
        this.inputRef.blur();
      }
    }
  },
  render() {
    return this.render();
  }
});
const useComponentRef = (name) => {
  const componentRef = ref();
  const getElement = () => {
    if (isComponentInstance(componentRef.value)) {
      return componentRef.value.$refs[name];
    }
    return componentRef.value;
  };
  const elementRef = ref();
  watch([componentRef], () => {
    elementRef.value = getElement();
  });
  return {
    componentRef,
    elementRef
  };
};
var __defProp$3 = Object.defineProperty;
var __getOwnPropSymbols$3 = Object.getOwnPropertySymbols;
var __hasOwnProp$3 = Object.prototype.hasOwnProperty;
var __propIsEnum$3 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$3 = (obj, key, value) => key in obj ? __defProp$3(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$3 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$3.call(b, prop))
      __defNormalProp$3(a, prop, b[prop]);
  if (__getOwnPropSymbols$3)
    for (var prop of __getOwnPropSymbols$3(b)) {
      if (__propIsEnum$3.call(b, prop))
        __defNormalProp$3(a, prop, b[prop]);
    }
  return a;
};
const useScrollbar = (scrollbar) => {
  const displayScrollbar = computed(() => Boolean(scrollbar.value));
  const scrollbarProps = computed(() => {
    if (!scrollbar.value)
      return void 0;
    return __spreadValues$3({
      type: "embed"
    }, isBoolean(scrollbar.value) ? void 0 : scrollbar.value);
  });
  return {
    displayScrollbar,
    scrollbarProps
  };
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "SelectDropdown",
  components: {
    ScrollbarComponent: Scrollbar,
    Empty,
    Spin
  },
  props: {
    loading: Boolean,
    empty: Boolean,
    virtualList: Boolean,
    bottomOffset: {
      type: Number,
      default: 0
    },
    scrollbar: {
      type: [Boolean, Object],
      default: true
    },
    onScroll: {
      type: [Function, Array]
    },
    onReachBottom: {
      type: [Function, Array]
    },
    showHeaderOnEmpty: {
      type: Boolean,
      default: false
    },
    showFooterOnEmpty: {
      type: Boolean,
      default: false
    }
  },
  emits: ["scroll", "reachBottom"],
  setup(props, { emit, slots }) {
    var _a, _b, _c;
    const { scrollbar } = toRefs(props);
    const prefixCls = getPrefixCls("select-dropdown");
    const configCtx = inject(configProviderInjectionKey, void 0);
    const SelectEmpty = (_c = (_b = configCtx == null ? void 0 : (_a = configCtx.slots).empty) == null ? void 0 : _b.call(_a, { component: "select" })) == null ? void 0 : _c[0];
    const { componentRef: wrapperComRef, elementRef: wrapperRef } = useComponentRef("containerRef");
    const { displayScrollbar, scrollbarProps } = useScrollbar(scrollbar);
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target;
      const bottom = scrollHeight - (scrollTop + offsetHeight);
      if (bottom <= props.bottomOffset) {
        emit("reachBottom", e);
      }
      emit("scroll", e);
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-has-header`]: Boolean(slots.header),
        [`${prefixCls}-has-footer`]: Boolean(slots.footer)
      }
    ]);
    return {
      prefixCls,
      SelectEmpty,
      cls,
      wrapperRef,
      wrapperComRef,
      handleScroll,
      displayScrollbar,
      scrollbarProps
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_spin = resolveComponent("spin");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.$slots.header && (!_ctx.empty || _ctx.showHeaderOnEmpty) ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-header`)
    }, [
      renderSlot(_ctx.$slots, "header")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.loading ? (openBlock(), createBlock(_component_spin, {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-loading`)
    }, null, 8, ["class"])) : _ctx.empty ? (openBlock(), createElementBlock("div", {
      key: 2,
      class: normalizeClass(`${_ctx.prefixCls}-empty`)
    }, [
      renderSlot(_ctx.$slots, "empty", {}, () => [
        (openBlock(), createBlock(resolveDynamicComponent(_ctx.SelectEmpty ? _ctx.SelectEmpty : "Empty")))
      ])
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.virtualList && !_ctx.loading && !_ctx.empty ? renderSlot(_ctx.$slots, "virtual-list", { key: 3 }) : createCommentVNode("v-if", true),
    !_ctx.virtualList ? withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.displayScrollbar ? "ScrollbarComponent" : "div"), mergeProps({
      key: 4,
      ref: "wrapperComRef",
      class: `${_ctx.prefixCls}-list-wrapper`
    }, _ctx.scrollbarProps, { onScroll: _ctx.handleScroll }), {
      default: withCtx(() => [
        createElementVNode("ul", {
          class: normalizeClass(`${_ctx.prefixCls}-list`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 16, ["class", "onScroll"])), [
      [vShow, !_ctx.loading && !_ctx.empty]
    ]) : createCommentVNode("v-if", true),
    _ctx.$slots.footer && (!_ctx.empty || _ctx.showFooterOnEmpty) ? (openBlock(), createElementBlock("div", {
      key: 5,
      class: normalizeClass(`${_ctx.prefixCls}-footer`)
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var SelectDropdown = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const selectInjectionKey = Symbol("ArcoSelectContext");
const isEqualObject = (obj, other) => {
  if (!obj || !other) {
    return false;
  }
  if (obj.length !== other.length) {
    return false;
  }
  for (const key of Object.keys(obj)) {
    const result = isEqual(obj[key], other[key]);
    if (!result)
      return false;
  }
  return true;
};
const isEqualArray = (arr, other) => {
  if (!arr || !other) {
    return false;
  }
  const { length } = arr;
  if (length !== other.length) {
    return false;
  }
  for (let i = 0; i < length; i++) {
    const result = isEqual(arr[i], other[i]);
    if (!result)
      return false;
  }
  return true;
};
const isEqual = (a, b) => {
  const type = Object.prototype.toString.call(a);
  if (type !== Object.prototype.toString.call(b)) {
    return false;
  }
  if (type === "[object Object]") {
    return isEqualObject(a, b);
  }
  if (type === "[object Array]") {
    return isEqualArray(a, b);
  }
  if (type === "[object Function]") {
    if (a === b) {
      return true;
    }
    return a.toString() === b.toString();
  }
  return a === b;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "Option",
  components: {
    Checkbox
  },
  props: {
    value: {
      type: [String, Number, Boolean, Object],
      default: void 0
    },
    label: String,
    disabled: Boolean,
    tagProps: {
      type: Object
    },
    extra: {
      type: Object
    },
    index: {
      type: Number
    },
    internal: Boolean
  },
  setup(props) {
    const { disabled, tagProps: _tagProps, index: index2 } = toRefs(props);
    const prefixCls = getPrefixCls("select-option");
    const selectCtx = inject(selectInjectionKey, void 0);
    const instance = getCurrentInstance();
    const itemRef = ref();
    const tagProps = ref(_tagProps.value);
    watch(_tagProps, (cur, pre) => {
      if (!isEqual(cur, pre)) {
        tagProps.value = cur;
      }
    });
    const textContent = ref("");
    const value = computed(() => {
      var _a, _b;
      return (_b = (_a = props.value) != null ? _a : props.label) != null ? _b : textContent.value;
    });
    const label = computed(() => {
      var _a;
      return (_a = props.label) != null ? _a : textContent.value;
    });
    const key = computed(() => getKeyFromValue(value.value, selectCtx == null ? void 0 : selectCtx.valueKey));
    const component = computed(() => {
      var _a;
      return (_a = selectCtx == null ? void 0 : selectCtx.component) != null ? _a : "li";
    });
    const setTextContent = () => {
      var _a;
      if (!props.label && itemRef.value) {
        const text = (_a = itemRef.value.textContent) != null ? _a : "";
        if (textContent.value !== text) {
          textContent.value = text;
        }
      }
    };
    onUpdated(() => setTextContent());
    const isSelected = computed(() => {
      var _a;
      return (_a = selectCtx == null ? void 0 : selectCtx.valueKeys.includes(key.value)) != null ? _a : false;
    });
    const isActive = computed(() => (selectCtx == null ? void 0 : selectCtx.activeKey) === key.value);
    let isValid = ref(true);
    if (!props.internal) {
      const optionInfo = reactive({
        raw: {
          value,
          label,
          disabled,
          tagProps
        },
        ref: itemRef,
        index: index2,
        key,
        origin: "slot",
        value,
        label,
        disabled,
        tagProps
      });
      isValid = computed(() => isValidOption(optionInfo, {
        inputValue: selectCtx == null ? void 0 : selectCtx.inputValue,
        filterOption: selectCtx == null ? void 0 : selectCtx.filterOption
      }));
      if (instance) {
        selectCtx == null ? void 0 : selectCtx.addSlotOptionInfo(instance.uid, optionInfo);
      }
    }
    const handleClick = (ev) => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.onSelect(key.value, ev);
      }
    };
    const handleMouseEnter = () => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.setActiveKey(key.value);
      }
    };
    const handleMouseLeave = () => {
      if (!props.disabled) {
        selectCtx == null ? void 0 : selectCtx.setActiveKey();
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-selected`]: isSelected.value,
        [`${prefixCls}-active`]: isActive.value,
        [`${prefixCls}-multiple`]: selectCtx == null ? void 0 : selectCtx.multiple
      }
    ]);
    return {
      prefixCls,
      cls,
      selectCtx,
      itemRef,
      component,
      isSelected,
      isValid,
      handleClick,
      handleMouseEnter,
      handleMouseLeave
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_checkbox = resolveComponent("checkbox");
  return withDirectives((openBlock(), createBlock(resolveDynamicComponent(_ctx.component), {
    ref: "itemRef",
    class: normalizeClass([_ctx.cls, { [`${_ctx.prefixCls}-has-suffix`]: Boolean(_ctx.$slots.suffix) }]),
    onClick: _ctx.handleClick,
    onMouseenter: _ctx.handleMouseEnter,
    onMouseleave: _ctx.handleMouseLeave
  }, {
    default: withCtx(() => [
      _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-icon`)
      }, [
        renderSlot(_ctx.$slots, "icon")
      ], 2)) : createCommentVNode("v-if", true),
      _ctx.selectCtx && _ctx.selectCtx.multiple ? (openBlock(), createBlock(_component_checkbox, {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-checkbox`),
        "model-value": _ctx.isSelected,
        disabled: _ctx.disabled,
        "uninject-group-context": ""
      }, {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default", {}, () => [
            createTextVNode(toDisplayString(_ctx.label), 1)
          ])
        ]),
        _: 3
      }, 8, ["class", "model-value", "disabled"])) : (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass(`${_ctx.prefixCls}-content`)
      }, [
        renderSlot(_ctx.$slots, "default", {}, () => [
          createTextVNode(toDisplayString(_ctx.label), 1)
        ])
      ], 2)),
      _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", {
        key: 3,
        class: normalizeClass(`${_ctx.prefixCls}-suffix`)
      }, [
        renderSlot(_ctx.$slots, "suffix")
      ], 2)) : createCommentVNode("v-if", true)
    ]),
    _: 3
  }, 8, ["class", "onClick", "onMouseenter", "onMouseleave"])), [
    [vShow, _ctx.isValid]
  ]);
}
var Option = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "Optgroup",
  props: {
    label: {
      type: String
    }
  },
  setup() {
    const prefixCls = getPrefixCls("select-group");
    return {
      prefixCls
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    createElementVNode("li", {
      class: normalizeClass(`${_ctx.prefixCls}-title`)
    }, [
      renderSlot(_ctx.$slots, "label", {}, () => [
        createTextVNode(toDisplayString(_ctx.label), 1)
      ])
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ], 64);
}
var Optgroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const useSize = ({
  dataKeys,
  contentRef,
  fixedSize,
  estimatedSize,
  buffer
}) => {
  const firstRangeAverageSize = ref(0);
  const sizeMap = /* @__PURE__ */ new Map();
  const total = computed(() => dataKeys.value.length);
  const start = ref(0);
  const end = computed(() => {
    const _end = start.value + buffer.value * 3;
    if (_end > total.value)
      return total.value;
    return _end;
  });
  const maxStart = computed(() => {
    const max = total.value - buffer.value * 3;
    if (max < 0)
      return 0;
    return max;
  });
  const setStart = (index2) => {
    if (index2 < 0) {
      start.value = 0;
    } else if (index2 > maxStart.value) {
      start.value = maxStart.value;
    } else {
      start.value = index2;
    }
  };
  const isFixed = ref(fixedSize.value);
  const _estimatedSize = computed(() => {
    if (estimatedSize.value !== 30) {
      return estimatedSize.value;
    }
    return firstRangeAverageSize.value || estimatedSize.value;
  });
  const setItemSize = (key, size) => {
    sizeMap.set(key, size);
  };
  const getItemSize = (index2) => {
    var _a;
    if (isFixed.value) {
      return _estimatedSize.value;
    }
    const _key = dataKeys.value[index2];
    return (_a = sizeMap.get(_key)) != null ? _a : _estimatedSize.value;
  };
  const hasItemSize = (key) => {
    return sizeMap.has(key);
  };
  const getScrollOffset = (index2) => {
    if (isFixed.value) {
      return _estimatedSize.value * index2;
    }
    return getOffset(0, index2);
  };
  const getOffset = (start2, end2) => {
    let offset = 0;
    for (let i = start2; i < end2; i++) {
      offset += getItemSize(i);
    }
    return offset;
  };
  const frontPadding = computed(() => {
    if (isFixed.value) {
      return _estimatedSize.value * start.value;
    }
    return getOffset(0, start.value);
  });
  const getOffsetIndex = (scrollOffset) => {
    const isForward = scrollOffset >= frontPadding.value;
    let offset = Math.abs(scrollOffset - frontPadding.value);
    const _start = isForward ? start.value : start.value - 1;
    let offsetIndex = 0;
    while (offset > 0) {
      offset -= getItemSize(_start + offsetIndex);
      isForward ? offsetIndex++ : offsetIndex--;
    }
    return offsetIndex;
  };
  const getStartByScroll = (scrollOffset) => {
    const offsetIndex = getOffsetIndex(scrollOffset);
    const _start = start.value + offsetIndex - buffer.value;
    if (_start < 0)
      return 0;
    if (_start > maxStart.value)
      return maxStart.value;
    return _start;
  };
  const behindPadding = computed(() => {
    if (isFixed.value) {
      return _estimatedSize.value * (total.value - end.value);
    }
    return getOffset(end.value, total.value);
  });
  return {
    frontPadding,
    behindPadding,
    start,
    end,
    getStartByScroll,
    setItemSize,
    hasItemSize,
    setStart,
    getScrollOffset
  };
};
var VirtualListItem = /* @__PURE__ */ defineComponent({
  name: "VirtualListItem",
  props: {
    hasItemSize: {
      type: Function,
      required: true
    },
    setItemSize: {
      type: Function,
      required: true
    }
  },
  setup(props, {
    slots
  }) {
    var _a;
    (_a = getCurrentInstance()) == null ? void 0 : _a.vnode.key;
    const itemRef = ref();
    return () => {
      var _a2;
      const child = getFirstComponent((_a2 = slots.default) == null ? void 0 : _a2.call(slots));
      if (child) {
        return cloneVNode(child, {
          ref: itemRef
        }, true);
      }
      return null;
    };
  }
});
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
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "VirtualList",
  components: { VirtualListItem },
  props: {
    height: {
      type: [Number, String],
      default: 200
    },
    data: {
      type: Array,
      default: () => []
    },
    threshold: {
      type: Number,
      default: 0
    },
    itemKey: {
      type: String,
      default: "key"
    },
    fixedSize: {
      type: Boolean,
      default: false
    },
    estimatedSize: {
      type: Number,
      default: 30
    },
    buffer: {
      type: Number,
      default: 10
    },
    component: {
      type: [String, Object],
      default: "div"
    },
    listAttrs: {
      type: Object
    },
    contentAttrs: {
      type: Object
    },
    paddingPosition: {
      type: String,
      default: "content"
    }
  },
  emits: {
    scroll: (ev) => true,
    reachBottom: (ev) => true
  },
  setup(props, { emit }) {
    const { data, itemKey, fixedSize, estimatedSize, buffer, height } = toRefs(props);
    const prefixCls = getPrefixCls("virtual-list");
    const mergedComponent = computed(() => {
      if (isObject(props.component)) {
        return __spreadValues$2({
          container: "div",
          list: "div",
          content: "div"
        }, props.component);
      }
      return {
        container: props.component,
        list: "div",
        content: "div"
      };
    });
    const containerRef = ref();
    const contentRef = ref();
    const style = computed(() => {
      return {
        height: isNumber(height.value) ? `${height.value}px` : height.value,
        overflow: "auto"
      };
    });
    const dataKeys = computed(() => data.value.map((item, index2) => {
      var _a;
      return (_a = item[itemKey.value]) != null ? _a : index2;
    }));
    const {
      frontPadding,
      behindPadding,
      start,
      end,
      getStartByScroll,
      setItemSize,
      hasItemSize,
      setStart,
      getScrollOffset
    } = useSize({
      dataKeys,
      contentRef,
      fixedSize,
      estimatedSize,
      buffer
    });
    const currentList = computed(() => {
      if (props.threshold && data.value.length <= props.threshold) {
        return data.value;
      }
      return data.value.slice(start.value, end.value);
    });
    const onScroll = (ev) => {
      const { scrollTop, scrollHeight, offsetHeight } = ev.target;
      const _start = getStartByScroll(scrollTop);
      if (_start !== start.value) {
        setStart(_start);
        nextTick(() => {
          scrollTo(scrollTop);
        });
      }
      emit("scroll", ev);
      const bottom = Math.floor(scrollHeight - (scrollTop + offsetHeight));
      if (bottom <= 0) {
        emit("reachBottom", ev);
      }
    };
    const scrollTo = (options) => {
      var _a, _b;
      if (containerRef.value) {
        if (isNumber(options)) {
          containerRef.value.scrollTop = options;
        } else {
          const _index = (_b = options.index) != null ? _b : dataKeys.value.indexOf((_a = options.key) != null ? _a : "");
          setStart(_index - buffer.value);
          containerRef.value.scrollTop = getScrollOffset(_index);
          nextTick(() => {
            if (containerRef.value) {
              const _scrollTop = getScrollOffset(_index);
              if (_scrollTop !== containerRef.value.scrollTop) {
                containerRef.value.scrollTop = _scrollTop;
              }
            }
          });
        }
      }
    };
    return {
      prefixCls,
      containerRef,
      contentRef,
      frontPadding,
      currentList,
      behindPadding,
      onScroll,
      setItemSize,
      hasItemSize,
      start,
      scrollTo,
      style,
      mergedComponent
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_VirtualListItem = resolveComponent("VirtualListItem");
  return openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.container), {
    ref: "containerRef",
    class: normalizeClass(_ctx.prefixCls),
    style: normalizeStyle(_ctx.style),
    onScroll: _ctx.onScroll
  }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.list), mergeProps(_ctx.listAttrs, {
        style: _ctx.paddingPosition === "list" ? {
          paddingTop: `${_ctx.frontPadding}px`,
          paddingBottom: `${_ctx.behindPadding}px`
        } : {}
      }), {
        default: withCtx(() => [
          (openBlock(), createBlock(resolveDynamicComponent(_ctx.mergedComponent.content), mergeProps({ ref: "contentRef" }, _ctx.contentAttrs, {
            style: _ctx.paddingPosition === "content" ? {
              paddingTop: `${_ctx.frontPadding}px`,
              paddingBottom: `${_ctx.behindPadding}px`
            } : {}
          }), {
            default: withCtx(() => [
              (openBlock(true), createElementBlock(Fragment, null, renderList(_ctx.currentList, (item, index2) => {
                var _a;
                return openBlock(), createBlock(_component_VirtualListItem, {
                  key: (_a = item[_ctx.itemKey]) != null ? _a : _ctx.start + index2,
                  "has-item-size": _ctx.hasItemSize,
                  "set-item-size": _ctx.setItemSize
                }, {
                  default: withCtx(() => [
                    renderSlot(_ctx.$slots, "item", {
                      item,
                      index: _ctx.start + index2
                    })
                  ]),
                  _: 2
                }, 1032, ["has-item-size", "set-item-size"]);
              }), 128))
            ]),
            _: 3
          }, 16, ["style"]))
        ]),
        _: 3
      }, 16, ["style"]))
    ]),
    _: 3
  }, 8, ["class", "style", "onScroll"]);
}
var VirtualList = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var __defProp$1 = Object.defineProperty;
var __defProps$1 = Object.defineProperties;
var __getOwnPropDescs$1 = Object.getOwnPropertyDescriptors;
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
var __spreadProps$1 = (a, b) => __defProps$1(a, __getOwnPropDescs$1(b));
const DEFAULT_FIELD_NAMES$1 = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
const useOptions = ({
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  valueKey,
  fieldNames
}) => {
  const mergedFieldNames = computed(() => __spreadValues$1(__spreadValues$1({}, DEFAULT_FIELD_NAMES$1), fieldNames == null ? void 0 : fieldNames.value));
  const slotOptionInfoMap = reactive(/* @__PURE__ */ new Map());
  const sortedSlotOptionInfos = computed(() => Array.from(slotOptionInfoMap.values()).sort((a, b) => {
    if (isNumber(a.index) && isNumber(b.index)) {
      return a.index - b.index;
    }
    return 0;
  }));
  const propOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = /* @__PURE__ */ new Map();
    const optionInfos = getOptionInfos((_a = options == null ? void 0 : options.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "options",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const extraOptionData = computed(() => {
    var _a, _b;
    const optionInfoMap2 = /* @__PURE__ */ new Map();
    const optionInfos = getOptionInfos((_a = extraOptions == null ? void 0 : extraOptions.value) != null ? _a : [], {
      valueKey: (_b = valueKey == null ? void 0 : valueKey.value) != null ? _b : "value",
      fieldNames: mergedFieldNames.value,
      origin: "extraOptions",
      optionInfoMap: optionInfoMap2
    });
    return {
      optionInfos,
      optionInfoMap: optionInfoMap2
    };
  });
  const optionInfoMap = reactive(/* @__PURE__ */ new Map());
  watch([
    sortedSlotOptionInfos,
    options != null ? options : ref([]),
    extraOptions != null ? extraOptions : ref([]),
    valueKey != null ? valueKey : ref("value")
  ], () => {
    optionInfoMap.clear();
    sortedSlotOptionInfos.value.forEach((info, index2) => {
      optionInfoMap.set(info.key, __spreadProps$1(__spreadValues$1({}, info), { index: index2 }));
    });
    propOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
    extraOptionData.value.optionInfoMap.forEach((info) => {
      if (!optionInfoMap.has(info.key)) {
        info.index = optionInfoMap.size;
        optionInfoMap.set(info.key, info);
      }
    });
  }, { immediate: true, deep: true });
  const validOptions = computed(() => {
    var _a;
    const options2 = getValidOptions(propOptionData.value.optionInfos, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
    if ((_a = showExtraOptions == null ? void 0 : showExtraOptions.value) != null ? _a : true) {
      options2.push(...getValidOptions(extraOptionData.value.optionInfos, {
        inputValue: inputValue == null ? void 0 : inputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      }));
    }
    return options2;
  });
  const validOptionInfos = computed(() => Array.from(optionInfoMap.values()).filter((optionInfo) => {
    if (optionInfo.origin === "extraOptions" && (showExtraOptions == null ? void 0 : showExtraOptions.value) === false) {
      return false;
    }
    return isValidOption(optionInfo, {
      inputValue: inputValue == null ? void 0 : inputValue.value,
      filterOption: filterOption == null ? void 0 : filterOption.value
    });
  }));
  const enabledOptionKeys = computed(() => validOptionInfos.value.filter((optionInfo) => !optionInfo.disabled).map((info) => info.key));
  const getNextSlotOptionIndex = () => slotOptionInfoMap.size;
  const addSlotOptionInfo = (id, optionInfo) => {
    slotOptionInfoMap.set(id, optionInfo);
  };
  const removeSlotOptionInfo = (id) => {
    slotOptionInfoMap.delete(id);
  };
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  };
};
const useSelect = ({
  multiple,
  options,
  extraOptions,
  inputValue,
  filterOption,
  showExtraOptions,
  component,
  valueKey,
  fieldNames,
  loading,
  popupVisible,
  valueKeys,
  dropdownRef,
  optionRefs,
  virtualListRef,
  onSelect,
  onPopupVisibleChange,
  enterToOpen = true,
  defaultActiveFirstOption
}) => {
  const {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  } = useOptions({
    options,
    extraOptions,
    inputValue,
    filterOption,
    showExtraOptions,
    valueKey,
    fieldNames
  });
  const activeKey = ref();
  watch(enabledOptionKeys, (enabledKeys) => {
    if (!activeKey.value || !enabledKeys.includes(activeKey.value)) {
      activeKey.value = enabledKeys[0];
    }
  });
  const setActiveKey = (key) => {
    activeKey.value = key;
  };
  const getNextActiveKey = (direction) => {
    const _length = enabledOptionKeys.value.length;
    if (_length === 0) {
      return void 0;
    }
    if (!activeKey.value) {
      if (direction === "down") {
        return enabledOptionKeys.value[0];
      }
      return enabledOptionKeys.value[_length - 1];
    }
    const activeIndex = enabledOptionKeys.value.indexOf(activeKey.value);
    const nextIndex = (_length + activeIndex + (direction === "up" ? -1 : 1)) % _length;
    return enabledOptionKeys.value[nextIndex];
  };
  const scrollIntoView = (key) => {
    var _a, _b;
    if (virtualListRef == null ? void 0 : virtualListRef.value) {
      virtualListRef.value.scrollTo({ key });
    }
    const optionInfo = optionInfoMap.get(key);
    const wrapperEle = (_a = dropdownRef == null ? void 0 : dropdownRef.value) == null ? void 0 : _a.wrapperRef;
    const optionEle = (_b = optionRefs == null ? void 0 : optionRefs.value[key]) != null ? _b : optionInfo == null ? void 0 : optionInfo.ref;
    if (!wrapperEle || !optionEle) {
      return;
    }
    if (wrapperEle.scrollHeight === wrapperEle.offsetHeight) {
      return;
    }
    const optionRect = getRelativeRect(optionEle, wrapperEle);
    const wrapperScrollTop = wrapperEle.scrollTop;
    if (optionRect.top < 0) {
      wrapperEle.scrollTo(0, wrapperScrollTop + optionRect.top);
    } else if (optionRect.bottom < 0) {
      wrapperEle.scrollTo(0, wrapperScrollTop - optionRect.bottom);
    }
  };
  watch(popupVisible, (visible) => {
    var _a;
    if (visible) {
      const current = valueKeys.value[valueKeys.value.length - 1];
      let _activeKey = ((_a = defaultActiveFirstOption == null ? void 0 : defaultActiveFirstOption.value) != null ? _a : true) ? enabledOptionKeys.value[0] : void 0;
      if (enabledOptionKeys.value.includes(current)) {
        _activeKey = current;
      }
      if (_activeKey !== activeKey.value) {
        activeKey.value = _activeKey;
      }
      nextTick(() => {
        if (activeKey.value) {
          scrollIntoView(activeKey.value);
        }
      });
    }
  });
  const handleKeyDown = getKeyDownHandler(/* @__PURE__ */ new Map([
    [
      KEYBOARD_KEY.ENTER,
      (e) => {
        if (!(loading == null ? void 0 : loading.value) && !e.isComposing) {
          if (popupVisible.value) {
            if (activeKey.value) {
              onSelect(activeKey.value, e);
              e.preventDefault();
            }
          } else if (enterToOpen) {
            onPopupVisibleChange(true);
            e.preventDefault();
          }
        }
      }
    ],
    [
      KEYBOARD_KEY.ESC,
      (e) => {
        if (popupVisible.value) {
          onPopupVisibleChange(false);
          e.preventDefault();
        }
      }
    ],
    [
      KEYBOARD_KEY.ARROW_DOWN,
      (e) => {
        if (popupVisible.value) {
          const next = getNextActiveKey("down");
          if (next) {
            activeKey.value = next;
            scrollIntoView(next);
          }
          e.preventDefault();
        }
      }
    ],
    [
      KEYBOARD_KEY.ARROW_UP,
      (e) => {
        if (popupVisible.value) {
          const next = getNextActiveKey("up");
          if (next) {
            activeKey.value = next;
            scrollIntoView(next);
          }
          e.preventDefault();
        }
      }
    ]
  ]));
  provide(selectInjectionKey, reactive({
    multiple,
    valueKey,
    inputValue,
    filterOption,
    component,
    valueKeys,
    activeKey,
    setActiveKey,
    onSelect,
    getNextSlotOptionIndex,
    addSlotOptionInfo,
    removeSlotOptionInfo
  }));
  return {
    validOptions,
    optionInfoMap,
    validOptionInfos,
    enabledOptionKeys,
    activeKey,
    setActiveKey,
    addSlotOptionInfo,
    removeSlotOptionInfo,
    getNextActiveKey,
    scrollIntoView,
    handleKeyDown
  };
};
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
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
const DEFAULT_FIELD_NAMES = {
  value: "value",
  label: "label",
  disabled: "disabled",
  tagProps: "tagProps",
  render: "render"
};
var _Select = /* @__PURE__ */ defineComponent({
  name: "Select",
  components: {
    Trigger,
    SelectView
  },
  inheritAttrs: false,
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [String, Number, Boolean, Object, Array],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Boolean, Object, Array],
      default: (props) => isUndefined(props.multiple) ? "" : []
    },
    inputValue: {
      type: String
    },
    defaultInputValue: {
      type: String,
      default: ""
    },
    size: {
      type: String
    },
    placeholder: String,
    loading: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    error: {
      type: Boolean,
      default: false
    },
    allowClear: {
      type: Boolean,
      default: false
    },
    allowSearch: {
      type: [Boolean, Object],
      default: (props) => Boolean(props.multiple)
    },
    allowCreate: {
      type: Boolean,
      default: false
    },
    maxTagCount: {
      type: Number,
      default: 0
    },
    popupContainer: {
      type: [String, Object]
    },
    bordered: {
      type: Boolean,
      default: true
    },
    defaultActiveFirstOption: {
      type: Boolean,
      default: true
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    unmountOnClose: {
      type: Boolean,
      default: false
    },
    filterOption: {
      type: [Boolean, Function],
      default: true
    },
    options: {
      type: Array,
      default: () => []
    },
    virtualListProps: {
      type: Object
    },
    triggerProps: {
      type: Object
    },
    formatLabel: {
      type: Function
    },
    fallbackOption: {
      type: [Boolean, Function],
      default: true
    },
    showExtraOptions: {
      type: Boolean,
      default: true
    },
    valueKey: {
      type: String,
      default: "value"
    },
    searchDelay: {
      type: Number,
      default: 500
    },
    limit: {
      type: Number,
      default: 0
    },
    fieldNames: {
      type: Object
    },
    scrollbar: {
      type: [Boolean, Object],
      default: true
    },
    showHeaderOnEmpty: {
      type: Boolean,
      default: false
    },
    showFooterOnEmpty: {
      type: Boolean,
      default: false
    },
    tagNowrap: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "update:inputValue": (inputValue) => true,
    "update:popupVisible": (visible) => true,
    "change": (value) => true,
    "inputValueChange": (inputValue) => true,
    "popupVisibleChange": (visible) => true,
    "clear": (ev) => true,
    "remove": (removed) => true,
    "search": (inputValue) => true,
    "dropdownScroll": (ev) => true,
    "dropdownReachBottom": (ev) => true,
    "exceedLimit": (value, ev) => true
  },
  setup(props, {
    slots,
    emit,
    attrs
  }) {
    const {
      size,
      disabled,
      error,
      options,
      filterOption,
      valueKey,
      multiple,
      popupVisible,
      defaultPopupVisible,
      showExtraOptions,
      modelValue,
      fieldNames,
      loading,
      defaultActiveFirstOption
    } = toRefs(props);
    const prefixCls = getPrefixCls("select");
    const {
      mergedSize,
      mergedDisabled,
      mergedError,
      eventHandlers
    } = useFormItem({
      size,
      disabled,
      error
    });
    const component = computed(() => props.virtualListProps ? "div" : "li");
    const retainInputValue = computed(() => isObject(props.allowSearch) && Boolean(props.allowSearch.retainInputValue));
    computed(() => {
      if (isFunction(props.formatLabel)) {
        return (data) => {
          const optionInfo = optionInfoMap.get(data.value);
          return props.formatLabel(optionInfo);
        };
      }
      return void 0;
    });
    const dropdownRef = ref();
    const optionRefs = ref({});
    const virtualListRef = ref();
    const {
      computedPopupVisible,
      handlePopupVisibleChange
    } = useTrigger({
      popupVisible,
      defaultPopupVisible,
      emit
    });
    const _value = ref(props.defaultValue);
    const computedValueObjects = computed(() => {
      var _a;
      const mergedValue = (_a = props.modelValue) != null ? _a : _value.value;
      const valueArray = isArray(mergedValue) ? mergedValue : mergedValue || isNumber(mergedValue) || isString(mergedValue) || isBoolean(mergedValue) ? [mergedValue] : [];
      return valueArray.map((value) => ({
        value,
        key: getKeyFromValue(value, props.valueKey)
      }));
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _value.value = multiple.value ? [] : value;
      }
    });
    const computedValueKeys = computed(() => computedValueObjects.value.map((obj) => obj.key));
    const mergedFieldNames = computed(() => __spreadValues(__spreadValues({}, DEFAULT_FIELD_NAMES), fieldNames == null ? void 0 : fieldNames.value));
    const _selectedOption = ref();
    const getRawOptionFromValueKeys = (valueKeys) => {
      const optionMap = {};
      valueKeys.forEach((key) => {
        optionMap[key] = optionInfoMap.get(key);
      });
      return optionMap;
    };
    const updateSelectedOption = (valueKeys) => {
      _selectedOption.value = getRawOptionFromValueKeys(valueKeys);
    };
    const getFallBackOption = (value) => {
      if (isFunction(props.fallbackOption)) {
        return props.fallbackOption(value);
      }
      return {
        [mergedFieldNames.value.value]: value,
        [mergedFieldNames.value.label]: String(isObject(value) ? value[valueKey == null ? void 0 : valueKey.value] : value)
      };
    };
    const getExtraValueData = () => {
      const valueArray = [];
      const keyArray = [];
      if (props.allowCreate || props.fallbackOption) {
        for (const item of computedValueObjects.value) {
          if (!keyArray.includes(item.key) && item.value !== "") {
            const optionInfo = optionInfoMap.get(item.key);
            if (!optionInfo || optionInfo.origin === "extraOptions") {
              valueArray.push(item);
              keyArray.push(item.key);
            }
          }
        }
      }
      if (props.allowCreate && computedInputValue.value) {
        const key = getKeyFromValue(computedInputValue.value);
        if (!keyArray.includes(key)) {
          const optionInfo = optionInfoMap.get(key);
          if (!optionInfo || optionInfo.origin === "extraOptions") {
            valueArray.push({
              value: computedInputValue.value,
              key
            });
          }
        }
      }
      return valueArray;
    };
    const extraValueObjects = ref([]);
    const extraOptions = computed(() => extraValueObjects.value.map((obj) => {
      var _a;
      let optionInfo = getFallBackOption(obj.value);
      const extraOptionRawInfo = (_a = _selectedOption.value) == null ? void 0 : _a[obj.key];
      if (!isUndefined(extraOptionRawInfo) && !isEmptyObject(extraOptionRawInfo)) {
        optionInfo = __spreadValues(__spreadValues({}, optionInfo), extraOptionRawInfo);
      }
      return optionInfo;
    }));
    nextTick(() => {
      watchEffect(() => {
        var _a;
        const valueData = getExtraValueData();
        if (valueData.length !== extraValueObjects.value.length) {
          extraValueObjects.value = valueData;
        } else if (valueData.length > 0) {
          for (let i = 0; i < valueData.length; i++) {
            if (valueData[i].key !== ((_a = extraValueObjects.value[i]) == null ? void 0 : _a.key)) {
              extraValueObjects.value = valueData;
              break;
            }
          }
        }
      });
    });
    const _inputValue = ref("");
    const computedInputValue = computed(() => {
      var _a;
      return (_a = props.inputValue) != null ? _a : _inputValue.value;
    });
    watch(computedPopupVisible, (visible) => {
      if (!visible && !retainInputValue.value && computedInputValue.value) {
        updateInputValue("");
      }
    });
    const getValueFromValueKeys = (valueKeys) => {
      var _a, _b;
      if (!props.multiple) {
        return (_b = (_a = optionInfoMap.get(valueKeys[0])) == null ? void 0 : _a.value) != null ? _b : hasEmptyStringKey(optionInfoMap) ? void 0 : "";
      }
      return valueKeys.map((key) => {
        var _a2, _b2;
        return (_b2 = (_a2 = optionInfoMap.get(key)) == null ? void 0 : _a2.value) != null ? _b2 : "";
      });
    };
    const updateValue = (valueKeys) => {
      var _a, _b;
      const value = getValueFromValueKeys(valueKeys);
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a);
      updateSelectedOption(valueKeys);
    };
    const updateInputValue = (inputValue) => {
      _inputValue.value = inputValue;
      emit("update:inputValue", inputValue);
      emit("inputValueChange", inputValue);
    };
    const handleSelect = (key, ev) => {
      if (props.multiple) {
        if (!computedValueKeys.value.includes(key)) {
          if (enabledOptionKeys.value.includes(key)) {
            if (props.limit > 0 && computedValueKeys.value.length >= props.limit) {
              const info = optionInfoMap.get(key);
              emit("exceedLimit", info == null ? void 0 : info.value, ev);
            } else {
              const valueKeys = computedValueKeys.value.concat(key);
              updateValue(valueKeys);
            }
          }
        } else {
          const valueKeys = computedValueKeys.value.filter((_key) => _key !== key);
          updateValue(valueKeys);
        }
        if (!retainInputValue.value) {
          updateInputValue("");
        }
      } else {
        if (key !== computedValueKeys.value[0]) {
          updateValue([key]);
        }
        if (retainInputValue.value) {
          const optionInfo = optionInfoMap.get(key);
          if (optionInfo) {
            updateInputValue(optionInfo.label);
          }
        }
        handlePopupVisibleChange(false);
      }
    };
    const handleSearch = debounce((value) => {
      emit("search", value);
    }, props.searchDelay);
    const handleInputValueChange = (inputValue) => {
      if (inputValue !== computedInputValue.value) {
        if (!computedPopupVisible.value) {
          handlePopupVisibleChange(true);
        }
        updateInputValue(inputValue);
        if (props.allowSearch) {
          handleSearch(inputValue);
        }
      }
    };
    const handleRemove = (key) => {
      const optionInfo = optionInfoMap.get(key);
      const newKeys = computedValueKeys.value.filter((_key) => _key !== key);
      updateValue(newKeys);
      emit("remove", optionInfo == null ? void 0 : optionInfo.value);
    };
    const handleClear = (e) => {
      e == null ? void 0 : e.stopPropagation();
      const newKeys = computedValueKeys.value.filter((key) => {
        var _a;
        return (_a = optionInfoMap.get(key)) == null ? void 0 : _a.disabled;
      });
      updateValue(newKeys);
      updateInputValue("");
      emit("clear", e);
    };
    const handleDropdownScroll = (e) => {
      emit("dropdownScroll", e);
    };
    const handleDropdownReachBottom = (e) => {
      emit("dropdownReachBottom", e);
    };
    const {
      validOptions,
      optionInfoMap,
      validOptionInfos,
      enabledOptionKeys,
      handleKeyDown
    } = useSelect({
      multiple,
      options,
      extraOptions,
      inputValue: computedInputValue,
      filterOption,
      showExtraOptions,
      component,
      valueKey,
      fieldNames,
      loading,
      popupVisible: computedPopupVisible,
      valueKeys: computedValueKeys,
      dropdownRef,
      optionRefs,
      virtualListRef,
      defaultActiveFirstOption,
      onSelect: handleSelect,
      onPopupVisibleChange: handlePopupVisibleChange
    });
    const selectViewValue = computed(() => {
      var _a;
      const result = [];
      for (const item of computedValueObjects.value) {
        const optionInfo = optionInfoMap.get(item.key);
        if (optionInfo) {
          result.push(__spreadProps(__spreadValues({}, optionInfo), {
            value: item.key,
            label: (_a = optionInfo == null ? void 0 : optionInfo.label) != null ? _a : String(isObject(item.value) ? item.value[valueKey == null ? void 0 : valueKey.value] : item.value),
            closable: !(optionInfo == null ? void 0 : optionInfo.disabled),
            tagProps: optionInfo == null ? void 0 : optionInfo.tagProps
          }));
        }
      }
      return result;
    });
    const getOptionContentFunc = (optionInfo) => {
      if (isFunction(slots.option)) {
        const optionSlot = slots.option;
        return () => optionSlot({
          data: optionInfo.raw
        });
      }
      if (isFunction(optionInfo.render)) {
        return optionInfo.render;
      }
      return () => optionInfo.label;
    };
    const renderOption = (optionInfo) => {
      if (isGroupOptionInfo(optionInfo)) {
        let _slot;
        return createVNode(Optgroup, {
          "key": optionInfo.key,
          "label": optionInfo.label
        }, _isSlot(_slot = optionInfo.options.map((child) => renderOption(child))) ? _slot : {
          default: () => [_slot]
        });
      }
      if (!isValidOption(optionInfo, {
        inputValue: computedInputValue.value,
        filterOption: filterOption == null ? void 0 : filterOption.value
      })) {
        return null;
      }
      return createVNode(Option, {
        "ref": (ref2) => {
          if (ref2 == null ? void 0 : ref2.$el) {
            optionRefs.value[optionInfo.key] = ref2.$el;
          }
        },
        "key": optionInfo.key,
        "value": optionInfo.value,
        "label": optionInfo.label,
        "disabled": optionInfo.disabled,
        "internal": true
      }, {
        default: getOptionContentFunc(optionInfo)
      });
    };
    const renderDropDown = () => {
      return createVNode(SelectDropdown, {
        "ref": dropdownRef,
        "loading": props.loading,
        "empty": validOptionInfos.value.length === 0,
        "virtualList": Boolean(props.virtualListProps),
        "scrollbar": props.scrollbar,
        "showHeaderOnEmpty": props.showHeaderOnEmpty,
        "showFooterOnEmpty": props.showFooterOnEmpty,
        "onScroll": handleDropdownScroll,
        "onReachBottom": handleDropdownReachBottom
      }, {
        "default": () => {
          var _a, _b;
          return [...(_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : [], ...validOptions.value.map(renderOption)];
        },
        "virtual-list": () => createVNode(VirtualList, mergeProps(props.virtualListProps, {
          "ref": virtualListRef,
          "data": validOptions.value
        }), {
          item: ({
            item
          }) => renderOption(item)
        }),
        "empty": slots.empty,
        "header": slots.header,
        "footer": slots.footer
      });
    };
    const renderLabel = ({
      data
    }) => {
      var _a, _b, _c, _d;
      if ((slots.label || isFunction(props.formatLabel)) && data) {
        const optionInfo = optionInfoMap.get(data.value);
        if (optionInfo == null ? void 0 : optionInfo.raw) {
          return (_c = (_a = slots.label) == null ? void 0 : _a.call(slots, {
            data: optionInfo.raw
          })) != null ? _c : (_b = props.formatLabel) == null ? void 0 : _b.call(props, optionInfo.raw);
        }
      }
      return (_d = data == null ? void 0 : data.label) != null ? _d : "";
    };
    return () => createVNode(Trigger, mergeProps({
      "trigger": "click",
      "position": "bl",
      "popupOffset": 4,
      "animationName": "slide-dynamic-origin",
      "hideEmpty": true,
      "preventFocus": true,
      "autoFitPopupWidth": true,
      "autoFitTransformOrigin": true,
      "disabled": mergedDisabled.value,
      "popupVisible": computedPopupVisible.value,
      "unmountOnClose": props.unmountOnClose,
      "clickToClose": !(props.allowSearch || props.allowCreate),
      "popupContainer": props.popupContainer,
      "onPopupVisibleChange": handlePopupVisibleChange
    }, props.triggerProps), {
      default: () => {
        var _a, _b;
        return [(_b = (_a = slots.trigger) == null ? void 0 : _a.call(slots)) != null ? _b : createVNode(SelectView, mergeProps({
          "class": prefixCls,
          "modelValue": selectViewValue.value,
          "inputValue": computedInputValue.value,
          "multiple": props.multiple,
          "disabled": mergedDisabled.value,
          "error": mergedError.value,
          "loading": props.loading,
          "allowClear": props.allowClear,
          "allowCreate": props.allowCreate,
          "allowSearch": Boolean(props.allowSearch),
          "opened": computedPopupVisible.value,
          "maxTagCount": props.maxTagCount,
          "placeholder": props.placeholder,
          "bordered": props.bordered,
          "size": mergedSize.value,
          "tagNowrap": props.tagNowrap,
          "onInputValueChange": handleInputValueChange,
          "onRemove": handleRemove,
          "onClear": handleClear,
          "onKeydown": handleKeyDown
        }, attrs), {
          "label": renderLabel,
          "prefix": slots.prefix,
          "arrow-icon": slots["arrow-icon"],
          "loading-icon": slots["loading-icon"],
          "search-icon": slots["search-icon"]
        })];
      },
      content: renderDropDown
    });
  }
});
const Select = Object.assign(_Select, {
  Option,
  OptGroup: Optgroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Select.name, _Select);
    app.component(componentPrefix + Option.name, Option);
    app.component(componentPrefix + Optgroup.name, Optgroup);
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "PageOptions",
  components: {
    ArcoSelect: Select
  },
  props: {
    sizeOptions: {
      type: Array,
      required: true
    },
    pageSize: Number,
    disabled: Boolean,
    size: {
      type: String
    },
    onChange: {
      type: Function
    },
    selectProps: {
      type: Object
    }
  },
  emits: ["change"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("pagination-options");
    const { t } = useI18n();
    const options = computed(() => props.sizeOptions.map((value) => ({
      value,
      label: `${value} ${t("pagination.countPerPage")}`
    })));
    const handleChange = (value) => {
      emit("change", value);
    };
    return {
      prefixCls,
      options,
      handleChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_arco_select = resolveComponent("arco-select");
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    createVNode(_component_arco_select, mergeProps({
      "model-value": _ctx.pageSize,
      options: _ctx.options,
      size: _ctx.size,
      disabled: _ctx.disabled
    }, _ctx.selectProps, { onChange: _ctx.handleChange }), null, 16, ["model-value", "options", "size", "disabled", "onChange"])
  ], 2);
}
var PageOptions = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
var _Pagination = /* @__PURE__ */ defineComponent({
  name: "Pagination",
  props: {
    total: {
      type: Number,
      required: true
    },
    current: Number,
    defaultCurrent: {
      type: Number,
      default: 1
    },
    pageSize: Number,
    defaultPageSize: {
      type: Number,
      default: 10
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: false
    },
    showTotal: {
      type: Boolean,
      default: false
    },
    showMore: {
      type: Boolean,
      default: false
    },
    showJumper: {
      type: Boolean,
      default: false
    },
    showPageSize: {
      type: Boolean,
      default: false
    },
    pageSizeOptions: {
      type: Array,
      default: () => [10, 20, 30, 40, 50]
    },
    pageSizeProps: {
      type: Object
    },
    size: {
      type: String
    },
    pageItemStyle: {
      type: Object
    },
    activePageItemStyle: {
      type: Object
    },
    baseSize: {
      type: Number,
      default: 6
    },
    bufferSize: {
      type: Number,
      default: 2
    },
    autoAdjust: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:current": (current) => true,
    "update:pageSize": (pageSize) => true,
    "change": (current) => true,
    "pageSizeChange": (pageSize) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const prefixCls = getPrefixCls("pagination");
    const {
      t
    } = useI18n();
    const {
      disabled,
      pageItemStyle,
      activePageItemStyle,
      size
    } = toRefs(props);
    const {
      mergedSize
    } = useSize$1(size);
    const _current = ref(props.defaultCurrent);
    const _pageSize = ref(props.defaultPageSize);
    const computedCurrent = computed(() => {
      var _a;
      return (_a = props.current) != null ? _a : _current.value;
    });
    const computedPageSize = computed(() => {
      var _a;
      return (_a = props.pageSize) != null ? _a : _pageSize.value;
    });
    const pages = computed(() => Math.ceil(props.total / computedPageSize.value));
    const handleClick = (page) => {
      if (page !== computedCurrent.value && isNumber(page) && !props.disabled) {
        _current.value = page;
        emit("update:current", page);
        emit("change", page);
      }
    };
    const handlePageSizeChange = (pageSize) => {
      _pageSize.value = pageSize;
      emit("update:pageSize", pageSize);
      emit("pageSizeChange", pageSize);
    };
    const pagerProps = reactive({
      current: computedCurrent,
      pages,
      disabled,
      style: pageItemStyle,
      activeStyle: activePageItemStyle,
      onClick: handleClick
    });
    const getPageItemElement = (type, props2 = {}) => {
      if (type === "more") {
        return createVNode(EllipsisPager, mergeProps(props2, pagerProps), {
          default: slots["page-item-ellipsis"]
        });
      }
      if (type === "previous") {
        return createVNode(StepPager, mergeProps({
          "type": "previous"
        }, props2, pagerProps), {
          default: slots["page-item-step"]
        });
      }
      if (type === "next") {
        return createVNode(StepPager, mergeProps({
          "type": "next"
        }, props2, pagerProps), {
          default: slots["page-item-step"]
        });
      }
      return createVNode(Pager, mergeProps(props2, pagerProps), {
        default: slots["page-item"]
      });
    };
    const pageList = computed(() => {
      const pageList2 = [];
      if (pages.value < props.baseSize + props.bufferSize * 2) {
        for (let i = 1; i <= pages.value; i++) {
          pageList2.push(getPageItemElement("page", {
            key: i,
            pageNumber: i
          }));
        }
      } else {
        let left = 1;
        let right = pages.value;
        let hasLeftEllipsis = false;
        let hasRightEllipsis = false;
        if (computedCurrent.value > 2 + props.bufferSize) {
          hasLeftEllipsis = true;
          left = Math.min(computedCurrent.value - props.bufferSize, pages.value - 2 * props.bufferSize);
        }
        if (computedCurrent.value < pages.value - (props.bufferSize + 1)) {
          hasRightEllipsis = true;
          right = Math.max(computedCurrent.value + props.bufferSize, 2 * props.bufferSize + 1);
        }
        if (hasLeftEllipsis) {
          pageList2.push(getPageItemElement("page", {
            key: 1,
            pageNumber: 1
          }));
          pageList2.push(getPageItemElement("more", {
            key: "left-ellipsis-pager",
            step: -(props.bufferSize * 2 + 1)
          }));
        }
        for (let i = left; i <= right; i++) {
          pageList2.push(getPageItemElement("page", {
            key: i,
            pageNumber: i
          }));
        }
        if (hasRightEllipsis) {
          pageList2.push(getPageItemElement("more", {
            key: "right-ellipsis-pager",
            step: props.bufferSize * 2 + 1
          }));
          pageList2.push(getPageItemElement("page", {
            key: pages.value,
            pageNumber: pages.value
          }));
        }
      }
      return pageList2;
    });
    const renderPager = () => {
      if (props.simple) {
        return createVNode("span", {
          "class": `${prefixCls}-simple`
        }, [getPageItemElement("previous", {
          simple: true
        }), createVNode(PageJumper, {
          "disabled": props.disabled,
          "current": computedCurrent.value,
          "size": mergedSize.value,
          "pages": pages.value,
          "simple": true,
          "onChange": handleClick
        }, null), getPageItemElement("next", {
          simple: true
        })]);
      }
      return createVNode("ul", {
        "class": `${prefixCls}-list`
      }, [getPageItemElement("previous", {
        simple: true
      }), pageList.value, props.showMore && getPageItemElement("more", {
        key: "more",
        step: props.bufferSize * 2 + 1
      }), getPageItemElement("next", {
        simple: true
      })]);
    };
    watch(computedPageSize, (curPageSize, prePageSize) => {
      if (props.autoAdjust && curPageSize !== prePageSize && computedCurrent.value > 1) {
        const index2 = prePageSize * (computedCurrent.value - 1) + 1;
        const newPage = Math.ceil(index2 / curPageSize);
        if (newPage !== computedCurrent.value) {
          _current.value = newPage;
          emit("update:current", newPage);
          emit("change", newPage);
        }
      }
    });
    watch(pages, (curPages, prePages) => {
      if (props.autoAdjust && curPages !== prePages && computedCurrent.value > 1 && computedCurrent.value > curPages) {
        const newCurrent = Math.max(curPages, 1);
        _current.value = newCurrent;
        emit("update:current", newCurrent);
        emit("change", newCurrent);
      }
    });
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-simple`]: props.simple,
      [`${prefixCls}-disabled`]: props.disabled
    }]);
    return () => {
      var _a, _b;
      if (props.hideOnSinglePage && pages.value <= 1) {
        return null;
      }
      return createVNode("div", {
        "class": cls.value
      }, [props.showTotal && createVNode("span", {
        "class": `${prefixCls}-total`
      }, [(_b = (_a = slots.total) == null ? void 0 : _a.call(slots, {
        total: props.total
      })) != null ? _b : t("pagination.total", props.total)]), renderPager(), props.showPageSize && createVNode(PageOptions, {
        "disabled": props.disabled,
        "sizeOptions": props.pageSizeOptions,
        "pageSize": computedPageSize.value,
        "size": mergedSize.value,
        "onChange": handlePageSizeChange,
        "selectProps": props.pageSizeProps
      }, null), !props.simple && props.showJumper && createVNode(PageJumper, {
        "disabled": props.disabled,
        "current": computedCurrent.value,
        "pages": pages.value,
        "size": mergedSize.value,
        "onChange": handleClick
      }, {
        "jumper-prepend": slots["jumper-prepend"],
        "jumper-append": slots["jumper-append"]
      })]);
    };
  }
});
const Pagination = Object.assign(_Pagination, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Pagination.name, _Pagination);
  }
});
const index$5 = "";
const index$4 = "";
const index$3 = "";
const index$2 = "";
const index$1 = "";
const index = "";
export {
  Pagination as P,
  ResizeObserver as R,
  Select as S,
  VirtualList as V,
  useComponentRef as a,
  debounce as d,
  isEqual as i,
  useScrollbar as u
};
//# sourceMappingURL=index-90aba227.js.map
