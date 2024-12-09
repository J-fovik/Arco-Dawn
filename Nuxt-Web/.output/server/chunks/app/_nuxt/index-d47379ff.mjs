import { _ as _export_sfc, s as setGlobalConfig, a as getComponentPrefix, g as getPrefixCls, v as formInjectionKey, p as useI18n, w as formItemInjectionKey, i as isNumber, h as useSize, l as isFunction, j as isArray, m as isBoolean } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, toRefs, inject, computed, reactive, ref, nextTick, provide, toRef, resolveComponent, renderSlot, openBlock, createBlock, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, createCommentVNode, createElementVNode, normalizeClass, createSlots, createElementBlock, normalizeStyle, withModifiers, getCurrentInstance, resolveDynamicComponent, Fragment, renderList, Transition } from 'vue';
import compute from 'compute-scroll-into-view';
import { Schema } from 'b-validate';
import { R as ResizeObserver } from './index-dd449d78.mjs';
import { T as Tooltip } from './index-5f48af9c.mjs';
import { g as getValueByPath, s as setValueByPath } from './get-value-by-path-11166a95.mjs';
import { R as Row, C as Col } from './index-4ecc34e0.mjs';

function isOptionsObject(options) {
  return options === Object(options) && Object.keys(options).length !== 0;
}
function defaultBehavior(actions, behavior) {
  if (behavior === void 0) {
    behavior = 'auto';
  }
  var canSmoothScroll = ('scrollBehavior' in document.body.style);
  actions.forEach(function (_ref) {
    var el = _ref.el,
      top = _ref.top,
      left = _ref.left;
    if (el.scroll && canSmoothScroll) {
      el.scroll({
        top: top,
        left: left,
        behavior: behavior
      });
    } else {
      el.scrollTop = top;
      el.scrollLeft = left;
    }
  });
}
function getOptions(options) {
  if (options === false) {
    return {
      block: 'end',
      inline: 'nearest'
    };
  }
  if (isOptionsObject(options)) {
    return options;
  }
  return {
    block: 'start',
    inline: 'nearest'
  };
}
function scrollIntoView(target, options) {
  var isTargetAttached = target.isConnected || target.ownerDocument.documentElement.contains(target);
  if (isOptionsObject(options) && typeof options.behavior === 'function') {
    return options.behavior(isTargetAttached ? compute(target, options) : []);
  }
  if (!isTargetAttached) {
    return;
  }
  var computeOptions = getOptions(options);
  return defaultBehavior(compute(target, computeOptions), computeOptions.behavior);
}

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "IconQuestionCircle",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-question-circle`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M42 24c0 9.941-8.059 18-18 18S6 33.941 6 24 14.059 6 24 6s18 8.059 18 18Z" }, null, -1);
const _hoisted_3$1 = /* @__PURE__ */ createElementVNode("path", { d: "M24.006 31v4.008m0-6.008L24 28c0-3 3-4 4.78-6.402C30.558 19.195 28.288 15 23.987 15c-4.014 0-5.382 2.548-5.388 4.514v.465" }, null, -1);
const _hoisted_4$1 = [
  _hoisted_2$1,
  _hoisted_3$1
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
  }, _hoisted_4$1, 14, _hoisted_1$1);
}
var _IconQuestionCircle = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const IconQuestionCircle = Object.assign(_IconQuestionCircle, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconQuestionCircle.name, _IconQuestionCircle);
  }
});
const VALIDATE_STATUSES = [
  "success",
  "warning",
  "error",
  "validating"
];
const getFinalValidateStatus = (validateStatus) => {
  let status = "";
  for (const key of Object.keys(validateStatus)) {
    const _status = validateStatus[key];
    if (_status) {
      if (!status || VALIDATE_STATUSES.indexOf(_status) > VALIDATE_STATUSES.indexOf(status)) {
        status = validateStatus[key];
      }
    }
  }
  return status;
};
const getFinalValidateMessage = (validateMessage) => {
  const messages = [];
  for (const key of Object.keys(validateMessage)) {
    const _message = validateMessage[key];
    if (_message) {
      messages.push(_message);
    }
  }
  return messages;
};
const getFormElementId = (prefix, field) => {
  const id = field.replace(/[[.]/g, "_").replace(/\]/g, "");
  return prefix ? `${prefix}-${id}` : `${id}`;
};
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "Form",
  props: {
    model: {
      type: Object,
      required: true
    },
    layout: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: String
    },
    labelColProps: {
      type: Object,
      default: () => ({ span: 5, offset: 0 })
    },
    wrapperColProps: {
      type: Object,
      default: () => ({ span: 19, offset: 0 })
    },
    labelColStyle: Object,
    wrapperColStyle: Object,
    labelAlign: {
      type: String,
      default: "right"
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    rules: {
      type: Object
    },
    autoLabelWidth: {
      type: Boolean,
      default: false
    },
    id: {
      type: String
    },
    scrollToFirstError: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    submit: (data, ev) => true,
    submitSuccess: (values, ev) => true,
    submitFailed: (data, ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("form");
    const formRef = ref();
    const {
      id,
      model,
      layout,
      disabled,
      labelAlign,
      labelColProps,
      wrapperColProps,
      labelColStyle,
      wrapperColStyle,
      size,
      rules
    } = toRefs(props);
    const { mergedSize } = useSize(size);
    const autoLabelWidth = computed(() => props.layout === "horizontal" && props.autoLabelWidth);
    const fields = [];
    const touchedFields = [];
    const labelWidth = reactive({});
    const maxLabelWidth = computed(() => Math.max(...Object.values(labelWidth)));
    const addField = (formItemInfo) => {
      if (formItemInfo && formItemInfo.field) {
        fields.push(formItemInfo);
      }
    };
    const removeField = (formItemInfo) => {
      if (formItemInfo && formItemInfo.field) {
        fields.splice(fields.indexOf(formItemInfo), 1);
      }
    };
    const setFields = (data) => {
      fields.forEach((field) => {
        if (data[field.field]) {
          field.setField(data[field.field]);
        }
      });
    };
    const setLabelWidth = (width, uid) => {
      if (uid && labelWidth[uid] !== width) {
        labelWidth[uid] = width;
      }
    };
    const removeLabelWidth = (uid) => {
      if (uid) {
        delete labelWidth[uid];
      }
    };
    const resetFields = (field) => {
      const _fields = field ? [].concat(field) : [];
      fields.forEach((field2) => {
        if (_fields.length === 0 || _fields.includes(field2.field)) {
          field2.resetField();
        }
      });
    };
    const clearValidate = (field) => {
      const _fields = field ? [].concat(field) : [];
      fields.forEach((field2) => {
        if (_fields.length === 0 || _fields.includes(field2.field)) {
          field2.clearValidate();
        }
      });
    };
    const scrollToField = (field, options) => {
      const node = formRef.value || document.body;
      const fieldNode = node.querySelector(`#${getFormElementId(props.id, field)}`);
      if (fieldNode) {
        scrollIntoView(fieldNode, __spreadValues$1({
          behavior: "smooth",
          block: "nearest",
          scrollMode: "if-needed"
        }, options));
      }
    };
    const scrollToFirstError = (field) => {
      const options = !isBoolean(props.scrollToFirstError) ? props.scrollToFirstError : void 0;
      scrollToField(field, options);
    };
    const validate = (callback) => {
      const list = [];
      fields.forEach((field) => {
        list.push(field.validate());
      });
      return Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (hasError && props.scrollToFirstError) {
          scrollToFirstError(Object.keys(errors)[0]);
        }
        if (isFunction(callback)) {
          callback(hasError ? errors : void 0);
        }
        return hasError ? errors : void 0;
      });
    };
    const validateField = (field, callback) => {
      const list = [];
      for (const ctx of fields) {
        if (isArray(field) && field.includes(ctx.field) || field === ctx.field) {
          list.push(ctx.validate());
        }
      }
      return Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (hasError && props.scrollToFirstError) {
          scrollToFirstError(Object.keys(errors)[0]);
        }
        if (isFunction(callback)) {
          callback(hasError ? errors : void 0);
        }
        return hasError ? errors : void 0;
      });
    };
    const handleSubmit = (e) => {
      const list = [];
      fields.forEach((field) => {
        list.push(field.validate());
      });
      Promise.all(list).then((result) => {
        const errors = {};
        let hasError = false;
        result.forEach((item) => {
          if (item) {
            hasError = true;
            errors[item.field] = item;
          }
        });
        if (hasError) {
          props.scrollToFirstError && scrollToFirstError(Object.keys(errors)[0]);
          emit("submitFailed", { values: model.value, errors }, e);
        } else {
          emit("submitSuccess", model.value, e);
        }
        emit("submit", { values: model.value, errors: hasError ? errors : void 0 }, e);
      });
    };
    provide(formInjectionKey, reactive({
      id,
      layout,
      disabled,
      labelAlign,
      labelColProps,
      wrapperColProps,
      labelColStyle,
      wrapperColStyle,
      model,
      size: mergedSize,
      rules,
      fields,
      touchedFields,
      addField,
      removeField,
      validateField,
      setLabelWidth,
      removeLabelWidth,
      maxLabelWidth,
      autoLabelWidth
    }));
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-layout-${props.layout}`,
      `${prefixCls}-size-${mergedSize.value}`,
      {
        [`${prefixCls}-auto-label-width`]: props.autoLabelWidth
      }
    ]);
    return {
      cls,
      formRef,
      handleSubmit,
      innerValidate: validate,
      innerValidateField: validateField,
      innerResetFields: resetFields,
      innerClearValidate: clearValidate,
      innerSetFields: setFields,
      innerScrollToField: scrollToField
    };
  },
  methods: {
    validate(callback) {
      return this.innerValidate(callback);
    },
    validateField(field, callback) {
      return this.innerValidateField(field, callback);
    },
    resetFields(field) {
      return this.innerResetFields(field);
    },
    clearValidate(field) {
      return this.innerClearValidate(field);
    },
    setFields(data) {
      return this.innerSetFields(data);
    },
    scrollToField(field) {
      return this.innerScrollToField(field);
    }
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("form", {
    ref: "formRef",
    class: normalizeClass(_ctx.cls),
    onSubmit: _cache[0] || (_cache[0] = withModifiers((...args) => _ctx.handleSubmit && _ctx.handleSubmit(...args), ["prevent"]))
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 34);
}
var _Form = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "FormItemLabel",
  components: {
    ResizeObserver,
    Tooltip,
    IconQuestionCircle
  },
  props: {
    required: {
      type: Boolean,
      default: false
    },
    showColon: {
      type: Boolean,
      default: false
    },
    component: {
      type: String,
      default: "label"
    },
    asteriskPosition: {
      type: String,
      default: "start"
    },
    tooltip: {
      type: String
    },
    attrs: Object
  },
  setup() {
    const prefixCls = getPrefixCls("form-item-label");
    const formCtx = inject(formInjectionKey, void 0);
    const instance = getCurrentInstance();
    const labelRef = ref();
    const handleResize = () => {
      if (labelRef.value && isNumber(labelRef.value.offsetWidth)) {
        formCtx == null ? void 0 : formCtx.setLabelWidth(labelRef.value.offsetWidth, instance == null ? void 0 : instance.uid);
      }
    };
    return {
      prefixCls,
      labelRef,
      handleResize
    };
  }
});
const _hoisted_1 = /* @__PURE__ */ createElementVNode("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" })
], -1);
const _hoisted_2 = [
  _hoisted_1
];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("svg", {
  fill: "currentColor",
  viewBox: "0 0 1024 1024",
  width: "1em",
  height: "1em"
}, [
  /* @__PURE__ */ createElementVNode("path", { d: "M583.338667 17.066667c18.773333 0 34.133333 15.36 34.133333 34.133333v349.013333l313.344-101.888a34.133333 34.133333 0 0 1 43.008 22.016l42.154667 129.706667a34.133333 34.133333 0 0 1-21.845334 43.178667l-315.733333 102.4 208.896 287.744a34.133333 34.133333 0 0 1-7.509333 47.786666l-110.421334 80.213334a34.133333 34.133333 0 0 1-47.786666-7.509334L505.685333 706.218667 288.426667 1005.226667a34.133333 34.133333 0 0 1-47.786667 7.509333l-110.421333-80.213333a34.133333 34.133333 0 0 1-7.509334-47.786667l214.186667-295.253333L29.013333 489.813333a34.133333 34.133333 0 0 1-22.016-43.008l42.154667-129.877333a34.133333 34.133333 0 0 1 43.008-22.016l320.512 104.106667L412.672 51.2c0-18.773333 15.36-34.133333 34.133333-34.133333h136.533334z" })
], -1);
const _hoisted_4 = [
  _hoisted_3
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_question_circle = resolveComponent("icon-question-circle");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_ResizeObserver = resolveComponent("ResizeObserver");
  return openBlock(), createBlock(_component_ResizeObserver, { onResize: _ctx.handleResize }, {
    default: withCtx(() => [
      (openBlock(), createBlock(resolveDynamicComponent(_ctx.component), mergeProps({
        ref: "labelRef",
        class: _ctx.prefixCls
      }, _ctx.attrs), {
        default: withCtx(() => [
          _ctx.required && _ctx.asteriskPosition === "start" ? (openBlock(), createElementBlock("strong", {
            key: 0,
            class: normalizeClass(`${_ctx.prefixCls}-required-symbol`)
          }, _hoisted_2, 2)) : createCommentVNode("v-if", true),
          renderSlot(_ctx.$slots, "default"),
          _ctx.tooltip ? (openBlock(), createBlock(_component_Tooltip, {
            key: 1,
            content: _ctx.tooltip
          }, {
            default: withCtx(() => [
              createVNode(_component_icon_question_circle, {
                class: normalizeClass(`${_ctx.prefixCls}-tooltip`)
              }, null, 8, ["class"])
            ]),
            _: 1
          }, 8, ["content"])) : createCommentVNode("v-if", true),
          _ctx.required && _ctx.asteriskPosition === "end" ? (openBlock(), createElementBlock("strong", {
            key: 2,
            class: normalizeClass(`${_ctx.prefixCls}-required-symbol`)
          }, _hoisted_4, 2)) : createCommentVNode("v-if", true),
          createTextVNode(" " + toDisplayString(_ctx.showColon ? ":" : ""), 1)
        ]),
        _: 3
      }, 16, ["class"]))
    ]),
    _: 3
  }, 8, ["onResize"]);
}
var FormItemLabel = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "FormItemMessage",
  props: {
    error: {
      type: Array,
      default: () => []
    },
    help: String
  },
  setup() {
    const prefixCls = getPrefixCls("form-item-message");
    return {
      prefixCls
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.error.length > 0 ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(_ctx.error, (item) => {
    return openBlock(), createBlock(Transition, {
      key: item,
      name: "form-blink",
      appear: ""
    }, {
      default: withCtx(() => [
        createElementVNode("div", {
          role: "alert",
          class: normalizeClass([_ctx.prefixCls])
        }, toDisplayString(item), 3)
      ]),
      _: 2
    }, 1024);
  }), 128)) : _ctx.help || _ctx.$slots.help ? (openBlock(), createBlock(Transition, {
    key: 1,
    name: "form-blink",
    appear: ""
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass([_ctx.prefixCls, `${_ctx.prefixCls}-help`])
      }, [
        renderSlot(_ctx.$slots, "help", {}, () => [
          createTextVNode(toDisplayString(_ctx.help), 1)
        ])
      ], 2)
    ]),
    _: 3
  })) : createCommentVNode("v-if", true);
}
var FormItemMessage = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "FormItem",
  components: {
    ArcoRow: Row,
    ArcoCol: Col,
    FormItemLabel,
    FormItemMessage
  },
  props: {
    field: {
      type: String,
      default: ""
    },
    label: String,
    tooltip: {
      type: String
    },
    showColon: {
      type: Boolean,
      default: false
    },
    noStyle: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    help: String,
    extra: String,
    required: {
      type: Boolean,
      default: false
    },
    asteriskPosition: {
      type: String,
      default: "start"
    },
    rules: {
      type: [Object, Array]
    },
    validateStatus: {
      type: String
    },
    validateTrigger: {
      type: [String, Array],
      default: "change"
    },
    labelColProps: Object,
    wrapperColProps: Object,
    hideLabel: {
      type: Boolean,
      default: false
    },
    hideAsterisk: {
      type: Boolean,
      default: false
    },
    labelColStyle: Object,
    wrapperColStyle: Object,
    rowProps: Object,
    rowClass: [String, Array, Object],
    contentClass: [String, Array, Object],
    contentFlex: {
      type: Boolean,
      default: true
    },
    mergeProps: {
      type: [Boolean, Function],
      default: true
    },
    labelColFlex: {
      type: [Number, String]
    },
    feedback: {
      type: Boolean,
      default: false
    },
    labelComponent: {
      type: String,
      default: "label"
    },
    labelAttrs: Object
  },
  setup(props) {
    const prefixCls = getPrefixCls("form-item");
    const { field } = toRefs(props);
    const formCtx = inject(formInjectionKey, {});
    const { autoLabelWidth, layout } = toRefs(formCtx);
    const { i18nMessage } = useI18n();
    const mergedLabelCol = computed(() => {
      var _a;
      const colProps = __spreadValues({}, (_a = props.labelColProps) != null ? _a : formCtx.labelColProps);
      if (props.labelColFlex) {
        colProps.flex = props.labelColFlex;
      } else if (formCtx.autoLabelWidth) {
        colProps.flex = `${formCtx.maxLabelWidth}px`;
      }
      return colProps;
    });
    const mergedWrapperCol = computed(() => {
      var _a;
      const colProps = __spreadValues({}, (_a = props.wrapperColProps) != null ? _a : formCtx.wrapperColProps);
      if (field.value) {
        colProps.id = getFormElementId(formCtx.id, field.value);
      }
      if (props.labelColFlex || formCtx.autoLabelWidth) {
        colProps.flex = "auto";
      }
      return colProps;
    });
    const mergedLabelStyle = computed(() => {
      var _a;
      return (_a = props.labelColStyle) != null ? _a : formCtx.labelColStyle;
    });
    const mergedWrapperStyle = computed(() => {
      var _a;
      return (_a = props.wrapperColStyle) != null ? _a : formCtx.wrapperColStyle;
    });
    const initialValue = getValueByPath(formCtx.model, props.field);
    const validateStatus = reactive({});
    const validateMessage = reactive({});
    const finalStatus = computed(() => getFinalValidateStatus(validateStatus));
    const finalMessage = computed(() => getFinalValidateMessage(validateMessage));
    const validateDisabled = ref(false);
    const fieldValue = computed(() => getValueByPath(formCtx.model, props.field));
    const computedDisabled = computed(() => {
      var _a;
      return Boolean((_a = props.disabled) != null ? _a : formCtx == null ? void 0 : formCtx.disabled);
    });
    const computedValidateStatus = computed(() => {
      var _a;
      return (_a = props.validateStatus) != null ? _a : finalStatus.value;
    });
    const isError = computed(() => computedValidateStatus.value === "error");
    const mergedRules = computed(() => {
      var _a, _b, _c;
      const baseRules = [].concat((_c = (_b = props.rules) != null ? _b : (_a = formCtx == null ? void 0 : formCtx.rules) == null ? void 0 : _a[props.field]) != null ? _c : []);
      const hasRequiredRule = baseRules.some((item) => item.required);
      if (props.required && !hasRequiredRule) {
        return [{ required: true }].concat(baseRules);
      }
      return baseRules;
    });
    const isRequired = computed(() => mergedRules.value.some((item) => item.required));
    const formItemCtx = props.noStyle ? inject(formItemInjectionKey, void 0) : void 0;
    const updateValidateState = (field2, { status, message }) => {
      validateStatus[field2] = status;
      validateMessage[field2] = message;
      if (props.noStyle) {
        formItemCtx == null ? void 0 : formItemCtx.updateValidateState(field2, { status, message });
      }
    };
    const computedFeedback = computed(() => props.feedback && computedValidateStatus.value ? computedValidateStatus.value : void 0);
    const validateField = () => {
      var _b;
      if (validateDisabled.value) {
        return Promise.resolve();
      }
      const rules = mergedRules.value;
      if (!field.value || rules.length === 0) {
        if (finalStatus.value) {
          clearValidate();
        }
        return Promise.resolve();
      }
      const _field = field.value;
      const _value = fieldValue.value;
      updateValidateState(_field, {
        status: "",
        message: ""
      });
      const schema = new Schema({
        [_field]: rules.map((_a) => {
          var rule = __objRest(_a, []);
          if (!rule.type && !rule.validator) {
            rule.type = "string";
          }
          return rule;
        })
      }, {
        ignoreEmptyString: true,
        validateMessages: (_b = i18nMessage.value.form) == null ? void 0 : _b.validateMessages
      });
      return new Promise((resolve) => {
        schema.validate({ [_field]: _value }, (err) => {
          var _a;
          const isError2 = Boolean(err == null ? void 0 : err[_field]);
          updateValidateState(_field, {
            status: isError2 ? "error" : "",
            message: (_a = err == null ? void 0 : err[_field].message) != null ? _a : ""
          });
          const error = isError2 ? {
            label: props.label,
            field: field.value,
            value: err[_field].value,
            type: err[_field].type,
            isRequiredError: Boolean(err[_field].requiredError),
            message: err[_field].message
          } : void 0;
          resolve(error);
        });
      });
    };
    const validateTriggers = computed(() => [].concat(props.validateTrigger));
    const eventHandlers = computed(() => validateTriggers.value.reduce((event, trigger) => {
      switch (trigger) {
        case "change":
          event.onChange = () => {
            validateField();
          };
          return event;
        case "input":
          event.onInput = () => {
            nextTick(() => {
              validateField();
            });
          };
          return event;
        case "focus":
          event.onFocus = () => {
            validateField();
          };
          return event;
        case "blur":
          event.onBlur = () => {
            validateField();
          };
          return event;
        default:
          return event;
      }
    }, {}));
    provide(formItemInjectionKey, reactive({
      eventHandlers,
      size: formCtx && toRef(formCtx, "size"),
      disabled: computedDisabled,
      error: isError,
      feedback: computedFeedback,
      updateValidateState
    }));
    const clearValidate = () => {
      if (field.value) {
        updateValidateState(field.value, {
          status: "",
          message: ""
        });
      }
    };
    const setField = (data) => {
      var _a, _b;
      if (field.value) {
        validateDisabled.value = true;
        if ("value" in data && (formCtx == null ? void 0 : formCtx.model) && field.value) {
          setValueByPath(formCtx.model, field.value, data.value);
        }
        if (data.status || data.message) {
          updateValidateState(field.value, {
            status: (_a = data.status) != null ? _a : "",
            message: (_b = data.message) != null ? _b : ""
          });
        }
        nextTick(() => {
          validateDisabled.value = false;
        });
      }
    };
    const resetField = () => {
      clearValidate();
      validateDisabled.value = true;
      if ((formCtx == null ? void 0 : formCtx.model) && field.value) {
        setValueByPath(formCtx.model, field.value, initialValue);
      }
      nextTick(() => {
        validateDisabled.value = false;
      });
    };
    reactive({
      field,
      disabled: computedDisabled,
      error: isError,
      validate: validateField,
      clearValidate,
      resetField,
      setField
    });
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-layout-${formCtx.layout}`,
      {
        [`${prefixCls}-error`]: isError.value,
        [`${prefixCls}-status-${computedValidateStatus.value}`]: Boolean(computedValidateStatus.value)
      },
      props.rowClass
    ]);
    const labelColCls = computed(() => [
      `${prefixCls}-label-col`,
      {
        [`${prefixCls}-label-col-left`]: formCtx.labelAlign === "left",
        [`${prefixCls}-label-col-flex`]: formCtx.autoLabelWidth || props.labelColFlex
      }
    ]);
    const wrapperColCls = computed(() => [
      `${prefixCls}-wrapper-col`,
      {
        [`${prefixCls}-wrapper-col-flex`]: !mergedWrapperCol.value
      }
    ]);
    return {
      prefixCls,
      cls,
      isRequired,
      isError,
      finalMessage,
      mergedLabelCol,
      mergedWrapperCol,
      labelColCls,
      autoLabelWidth,
      layout,
      mergedLabelStyle,
      wrapperColCls,
      mergedWrapperStyle
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  var _a;
  const _component_FormItemLabel = resolveComponent("FormItemLabel");
  const _component_ArcoCol = resolveComponent("ArcoCol");
  const _component_FormItemMessage = resolveComponent("FormItemMessage");
  const _component_ArcoRow = resolveComponent("ArcoRow");
  return _ctx.noStyle ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createBlock(_component_ArcoRow, mergeProps({
    key: 1,
    class: [
      _ctx.cls,
      {
        [`${_ctx.prefixCls}-has-help`]: Boolean((_a = _ctx.$slots.help) != null ? _a : _ctx.help)
      }
    ],
    wrap: !(_ctx.labelColFlex || _ctx.autoLabelWidth),
    div: _ctx.layout !== "horizontal" || _ctx.hideLabel
  }, _ctx.rowProps), {
    default: withCtx(() => [
      !_ctx.hideLabel ? (openBlock(), createBlock(_component_ArcoCol, mergeProps({
        key: 0,
        class: _ctx.labelColCls,
        style: _ctx.mergedLabelStyle
      }, _ctx.mergedLabelCol), {
        default: withCtx(() => [
          createVNode(_component_FormItemLabel, {
            required: _ctx.hideAsterisk ? false : _ctx.isRequired,
            "show-colon": _ctx.showColon,
            "asterisk-position": _ctx.asteriskPosition,
            component: _ctx.labelComponent,
            attrs: _ctx.labelAttrs,
            tooltip: _ctx.tooltip
          }, {
            default: withCtx(() => [
              _ctx.$slots.label || _ctx.label ? renderSlot(_ctx.$slots, "label", { key: 0 }, () => [
                createTextVNode(toDisplayString(_ctx.label), 1)
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 3
          }, 8, ["required", "show-colon", "asterisk-position", "component", "attrs", "tooltip"])
        ]),
        _: 3
      }, 16, ["class", "style"])) : createCommentVNode("v-if", true),
      createVNode(_component_ArcoCol, mergeProps({
        class: _ctx.wrapperColCls,
        style: _ctx.mergedWrapperStyle
      }, _ctx.mergedWrapperCol), {
        default: withCtx(() => [
          createElementVNode("div", {
            class: normalizeClass(`${_ctx.prefixCls}-content-wrapper`)
          }, [
            createElementVNode("div", {
              class: normalizeClass([
                `${_ctx.prefixCls}-content`,
                {
                  [`${_ctx.prefixCls}-content-flex`]: _ctx.contentFlex
                },
                _ctx.contentClass
              ])
            }, [
              renderSlot(_ctx.$slots, "default")
            ], 2)
          ], 2),
          _ctx.isError || _ctx.$slots.help || _ctx.help ? (openBlock(), createBlock(_component_FormItemMessage, {
            key: 0,
            error: _ctx.finalMessage,
            help: _ctx.help
          }, createSlots({ _: 2 }, [
            _ctx.$slots.help ? {
              name: "help",
              fn: withCtx(() => [
                renderSlot(_ctx.$slots, "help")
              ])
            } : void 0
          ]), 1032, ["error", "help"])) : createCommentVNode("v-if", true),
          _ctx.$slots.extra || _ctx.extra ? (openBlock(), createElementBlock("div", {
            key: 1,
            class: normalizeClass(`${_ctx.prefixCls}-extra`)
          }, [
            renderSlot(_ctx.$slots, "extra", {}, () => [
              createTextVNode(toDisplayString(_ctx.extra), 1)
            ])
          ], 2)) : createCommentVNode("v-if", true)
        ]),
        _: 3
      }, 16, ["class", "style"])
    ]),
    _: 3
  }, 16, ["class", "wrap", "div"]));
}
var FormItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Form = Object.assign(_Form, {
  Item: FormItem,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Form.name, _Form);
    app.component(componentPrefix + FormItem.name, FormItem);
  }
});

export { Form as F, FormItem as a };
//# sourceMappingURL=index-d47379ff.mjs.map
