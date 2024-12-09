import { defineComponent, inject, computed, createVNode, Fragment, toRefs, ref, watch, provide, reactive, openBlock, createElementBlock, normalizeClass, normalizeStyle, nextTick, cloneVNode, createElementVNode } from 'vue';
import { s as setGlobalConfig, a as getComponentPrefix, _ as _export_sfc, g as getPrefixCls, x as configProviderInjectionKey, r as IconHover, u as useFormItem, j as isArray, b as isUndefined, c as isNull, d as isString, i as isNumber, l as isFunction, E as getFirstComponent, I as IconLoading } from './use-teleport-container-1599a5a4.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "IconUp",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-up`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M39.6 30.557 24.043 15 8.487 30.557" }, null, -1);
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
var _IconUp = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const IconUp = Object.assign(_IconUp, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconUp.name, _IconUp);
  }
});
const DOT_NUMBER = 5;
var DotLoading = /* @__PURE__ */ defineComponent({
  name: "DotLoading",
  props: {
    size: {
      type: Number
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("dot-loading");
    return () => {
      const style = props.size ? {
        width: `${props.size}px`,
        height: `${props.size}px`
      } : {};
      return createVNode("div", {
        "class": prefixCls,
        "style": {
          width: props.size ? `${props.size * 7}px` : void 0,
          height: props.size ? `${props.size}px` : void 0
        }
      }, [Array(DOT_NUMBER).fill(1).map((_, index2) => createVNode("div", {
        "class": `${prefixCls}-item`,
        "key": index2,
        "style": style
      }, null))]);
    };
  }
});
var _Spin = /* @__PURE__ */ defineComponent({
  name: "Spin",
  props: {
    size: {
      type: Number
    },
    loading: Boolean,
    dot: Boolean,
    tip: String,
    hideIcon: {
      type: Boolean,
      default: false
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("spin");
    const configCtx = inject(configProviderInjectionKey, void 0);
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-loading`]: props.loading,
      [`${prefixCls}-with-tip`]: props.tip && !slots.default
    }]);
    const renderIcon = () => {
      if (slots.icon) {
        const iconVNode = getFirstComponent(slots.icon());
        if (iconVNode) {
          return cloneVNode(iconVNode, {
            spin: true
          });
        }
      }
      if (slots.element) {
        return slots.element();
      }
      if (props.dot) {
        return createVNode(DotLoading, {
          "size": props.size
        }, null);
      }
      if (configCtx == null ? void 0 : configCtx.slots.loading) {
        return configCtx.slots.loading();
      }
      return createVNode(IconLoading, {
        "spin": true,
        "size": props.size
      }, null);
    };
    const renderSpinIcon = () => {
      var _a, _b, _c;
      const style = props.size ? {
        fontSize: `${props.size}px`
      } : void 0;
      const hasTip = Boolean((_a = slots.tip) != null ? _a : props.tip);
      return createVNode(Fragment, null, [!props.hideIcon && createVNode("div", {
        "class": `${prefixCls}-icon`,
        "style": style
      }, [renderIcon()]), hasTip && createVNode("div", {
        "class": `${prefixCls}-tip`
      }, [(_c = (_b = slots.tip) == null ? void 0 : _b.call(slots)) != null ? _c : props.tip])]);
    };
    return () => createVNode("div", {
      "class": cls.value
    }, [slots.default ? createVNode(Fragment, null, [slots.default(), props.loading && createVNode("div", {
      "class": `${prefixCls}-mask`
    }, [createVNode("div", {
      "class": `${prefixCls}-mask-icon`
    }, [renderSpinIcon()])])]) : renderSpinIcon()]);
  }
});
const Spin = Object.assign(_Spin, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Spin.name, _Spin);
  }
});
var IconCheck = /* @__PURE__ */ defineComponent({
  name: "IconCheck",
  render() {
    return createVNode("svg", {
      "aria-hidden": "true",
      "focusable": "false",
      "viewBox": "0 0 1024 1024",
      "width": "200",
      "height": "200",
      "fill": "currentColor"
    }, [createVNode("path", {
      "d": "M877.44815445 206.10060629a64.72691371 64.72691371 0 0 0-95.14856334 4.01306852L380.73381888 685.46812814 235.22771741 533.48933518a64.72691371 64.72691371 0 0 0-92.43003222-1.03563036l-45.82665557 45.82665443a64.72691371 64.72691371 0 0 0-0.90617629 90.61767965l239.61903446 250.10479331a64.72691371 64.72691371 0 0 0 71.19960405 15.14609778 64.33855261 64.33855261 0 0 0 35.08198741-21.23042702l36.24707186-42.71976334 40.5190474-40.77795556-3.36579926-3.49525333 411.40426297-486.74638962a64.72691371 64.72691371 0 0 0-3.88361443-87.64024149l-45.3088404-45.43829334z",
      "p-id": "840"
    }, null)]);
  }
});
const checkboxGroupKey = Symbol("ArcoCheckboxGroup");
var _Checkbox = /* @__PURE__ */ defineComponent({
  name: "Checkbox",
  components: {
    IconCheck,
    IconHover
  },
  props: {
    modelValue: {
      type: [Boolean, Array],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    indeterminate: {
      type: Boolean,
      default: false
    },
    uninjectGroupContext: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      disabled,
      modelValue
    } = toRefs(props);
    const prefixCls = getPrefixCls("checkbox");
    const checkboxRef = ref();
    const checkboxGroupCtx = !props.uninjectGroupContext ? inject(checkboxGroupKey, void 0) : void 0;
    const isGroup = (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.name) === "ArcoCheckboxGroup";
    const {
      mergedDisabled: _mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const _checked = ref(props.defaultChecked);
    const computedValue = computed(() => {
      var _a;
      return isGroup ? checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.computedValue : (_a = props.modelValue) != null ? _a : _checked.value;
    });
    const computedChecked = computed(() => {
      var _a;
      return isArray(computedValue.value) ? computedValue.value.includes((_a = props.value) != null ? _a : true) : computedValue.value;
    });
    const mergedDisabled = computed(() => (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.disabled) || (_mergedDisabled == null ? void 0 : _mergedDisabled.value) || !computedChecked.value && (checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.isMaxed));
    const handleClick = (ev) => {
      ev.stopPropagation();
    };
    const handleChange = (e) => {
      var _a, _b, _c, _d;
      const {
        checked
      } = e.target;
      let newValue = checked;
      if (isArray(computedValue.value)) {
        const set = new Set(computedValue.value);
        if (checked) {
          set.add((_a = props.value) != null ? _a : true);
        } else {
          set.delete((_b = props.value) != null ? _b : true);
        }
        newValue = Array.from(set);
      }
      _checked.value = checked;
      if (isGroup && isArray(newValue)) {
        checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.handleChange(newValue, e);
      } else {
        emit("update:modelValue", newValue);
        emit("change", newValue, e);
        (_d = (_c = eventHandlers.value) == null ? void 0 : _c.onChange) == null ? void 0 : _d.call(_c, e);
      }
      nextTick(() => {
        if (checkboxRef.value && checkboxRef.value.checked !== computedChecked.value) {
          checkboxRef.value.checked = computedChecked.value;
        }
      });
    };
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-checked`]: computedChecked.value,
      [`${prefixCls}-indeterminate`]: props.indeterminate,
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const handleFocus = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _checked.value = false;
      }
    });
    watch(computedValue, (value) => {
      var _a;
      let checked;
      if (isArray(value)) {
        checked = value.includes((_a = props.value) != null ? _a : true);
      } else {
        checked = value;
      }
      if (_checked.value !== checked) {
        _checked.value = checked;
      }
      if (checkboxRef.value && checkboxRef.value.checked !== checked) {
        checkboxRef.value.checked = checked;
      }
    });
    return () => {
      var _a, _b, _c, _d;
      return createVNode("label", {
        "aria-disabled": mergedDisabled.value,
        "class": cls.value
      }, [createVNode("input", {
        "ref": checkboxRef,
        "type": "checkbox",
        "checked": computedChecked.value,
        "value": props.value,
        "class": `${prefixCls}-target`,
        "disabled": mergedDisabled.value,
        "onClick": handleClick,
        "onChange": handleChange,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, null), (_d = (_c = (_b = slots.checkbox) != null ? _b : (_a = checkboxGroupCtx == null ? void 0 : checkboxGroupCtx.slots) == null ? void 0 : _a.checkbox) == null ? void 0 : _c({
        checked: computedChecked.value,
        disabled: mergedDisabled.value
      })) != null ? _d : createVNode(IconHover, {
        "class": `${prefixCls}-icon-hover`,
        "disabled": mergedDisabled.value || computedChecked.value
      }, {
        default: () => [createVNode("div", {
          "class": `${prefixCls}-icon`
        }, [computedChecked.value && createVNode(IconCheck, {
          "class": `${prefixCls}-icon-check`
        }, null)])]
      }), slots.default && createVNode("span", {
        "class": `${prefixCls}-label`
      }, [slots.default()])]);
    };
  }
});
var CheckboxGroup = /* @__PURE__ */ defineComponent({
  name: "CheckboxGroup",
  props: {
    modelValue: {
      type: Array,
      default: void 0
    },
    defaultValue: {
      type: Array,
      default: () => []
    },
    max: {
      type: Number
    },
    options: {
      type: Array
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:modelValue": (value) => true,
    "change": (value, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      disabled
    } = toRefs(props);
    const prefixCls = getPrefixCls("checkbox-group");
    const {
      mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled
    });
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => isArray(props.modelValue) ? props.modelValue : _value.value);
    const isMaxed = computed(() => props.max === void 0 ? false : computedValue.value.length >= props.max);
    const options = computed(() => {
      var _a;
      return ((_a = props.options) != null ? _a : []).map((option) => {
        if (isString(option) || isNumber(option)) {
          return {
            label: option,
            value: option
          };
        }
        return option;
      });
    });
    const handleChange = (value, e) => {
      var _a, _b;
      _value.value = value;
      emit("update:modelValue", value);
      emit("change", value, e);
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onChange) == null ? void 0 : _b.call(_a, e);
    };
    provide(checkboxGroupKey, reactive({
      name: "ArcoCheckboxGroup",
      computedValue,
      disabled: mergedDisabled,
      isMaxed,
      slots,
      handleChange
    }));
    const cls = computed(() => [prefixCls, `${prefixCls}-direction-${props.direction}`]);
    watch(() => props.modelValue, (curValue) => {
      if (isArray(curValue)) {
        _value.value = [...curValue];
      } else {
        _value.value = [];
      }
    });
    const renderOptions = () => {
      return options.value.map((option) => {
        const checked = computedValue.value.includes(option.value);
        return createVNode(_Checkbox, {
          "key": option.value,
          "value": option.value,
          "disabled": option.disabled || !checked && isMaxed.value,
          "indeterminate": option.indeterminate,
          "modelValue": checked
        }, {
          default: () => [slots.label ? slots.label({
            data: option
          }) : isFunction(option.label) ? option.label() : option.label]
        });
      });
    };
    return () => {
      var _a;
      return createVNode("span", {
        "class": cls.value
      }, [options.value.length > 0 ? renderOptions() : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const Checkbox = Object.assign(_Checkbox, {
  Group: CheckboxGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Checkbox.name, _Checkbox);
    app.component(componentPrefix + CheckboxGroup.name, CheckboxGroup);
  }
});

export { Checkbox as C, IconUp as I, Spin as S, CheckboxGroup as a };
//# sourceMappingURL=index-11d38f35.mjs.map
