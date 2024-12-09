import { g as getPrefixCls, u as useFormItem, h as useSize, d as isString, i as isNumber, b as isUndefined, c as isNull, s as setGlobalConfig, a as getComponentPrefix, r as IconHover, l as isFunction } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, toRefs, ref, computed, provide, reactive, watch, createVNode, inject, toRef, nextTick, Fragment, resolveComponent } from 'vue';

const radioGroupKey = Symbol("RadioGroup");
var _Radio = /* @__PURE__ */ defineComponent({
  name: "Radio",
  components: {
    IconHover
  },
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultChecked: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number, Boolean],
      default: true
    },
    type: {
      type: String,
      default: "radio"
    },
    disabled: {
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
    const prefixCls = getPrefixCls("radio");
    const {
      modelValue
    } = toRefs(props);
    const radioGroupCtx = !props.uninjectGroupContext ? inject(radioGroupKey, void 0) : void 0;
    const {
      mergedDisabled: _mergedDisabled,
      eventHandlers
    } = useFormItem({
      disabled: toRef(props, "disabled")
    });
    const inputRef = ref(null);
    const _checked = ref(props.defaultChecked);
    const isGroup = computed(() => (radioGroupCtx == null ? void 0 : radioGroupCtx.name) === "ArcoRadioGroup");
    const mergedType = computed(() => {
      var _a;
      return (_a = radioGroupCtx == null ? void 0 : radioGroupCtx.type) != null ? _a : props.type;
    });
    const mergedDisabled = computed(() => (radioGroupCtx == null ? void 0 : radioGroupCtx.disabled) || _mergedDisabled.value);
    const computedChecked = computed(() => {
      var _a, _b;
      if (isGroup.value) {
        return (radioGroupCtx == null ? void 0 : radioGroupCtx.value) === ((_a = props.value) != null ? _a : true);
      }
      if (!isUndefined(props.modelValue)) {
        return props.modelValue === ((_b = props.value) != null ? _b : true);
      }
      return _checked.value;
    });
    watch(modelValue, (value) => {
      if (isUndefined(value) || isNull(value)) {
        _checked.value = false;
      }
    });
    watch(computedChecked, (curValue, preValue) => {
      if (curValue !== preValue) {
        _checked.value = curValue;
        if (inputRef.value) {
          inputRef.value.checked = curValue;
        }
      }
    });
    const handleFocus = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onFocus) == null ? void 0 : _b.call(_a, ev);
    };
    const handleBlur = (ev) => {
      var _a, _b;
      (_b = (_a = eventHandlers.value) == null ? void 0 : _a.onBlur) == null ? void 0 : _b.call(_a, ev);
    };
    const handleClick = (ev) => {
      ev.stopPropagation();
    };
    const handleChange = (e) => {
      var _a, _b, _c, _d, _e;
      _checked.value = true;
      if (isGroup.value) {
        radioGroupCtx == null ? void 0 : radioGroupCtx.handleChange((_a = props.value) != null ? _a : true, e);
      } else {
        emit("update:modelValue", (_b = props.value) != null ? _b : true);
        emit("change", (_c = props.value) != null ? _c : true, e);
        (_e = (_d = eventHandlers.value) == null ? void 0 : _d.onChange) == null ? void 0 : _e.call(_d, e);
      }
      nextTick(() => {
        if (inputRef.value && inputRef.value.checked !== computedChecked.value) {
          inputRef.value.checked = computedChecked.value;
        }
      });
    };
    const cls = computed(() => [`${mergedType.value === "button" ? `${prefixCls}-button` : prefixCls}`, {
      [`${prefixCls}-checked`]: computedChecked.value,
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const defaultRadio = () => createVNode(Fragment, null, [createVNode(resolveComponent("icon-hover"), {
      "class": `${prefixCls}-icon-hover`,
      "disabled": mergedDisabled.value || computedChecked.value
    }, {
      default: () => [createVNode("span", {
        "class": `${prefixCls}-icon`
      }, null)]
    }), slots.default && createVNode("span", {
      "class": `${prefixCls}-label`
    }, [slots.default()])]);
    return () => {
      var _a, _b, _c, _d;
      return createVNode("label", {
        "class": cls.value
      }, [createVNode("input", {
        "ref": inputRef,
        "type": "radio",
        "checked": computedChecked.value,
        "value": props.value,
        "class": `${prefixCls}-target`,
        "disabled": mergedDisabled.value,
        "onClick": handleClick,
        "onChange": handleChange,
        "onFocus": handleFocus,
        "onBlur": handleBlur
      }, null), mergedType.value === "radio" ? (_d = (_c = (_b = slots.radio) != null ? _b : (_a = radioGroupCtx == null ? void 0 : radioGroupCtx.slots) == null ? void 0 : _a.radio) == null ? void 0 : _c({
        checked: computedChecked.value,
        disabled: mergedDisabled.value
      })) != null ? _d : defaultRadio() : createVNode("span", {
        "class": `${prefixCls}-button-content`
      }, [slots.default && slots.default()])]);
    };
  }
});
var RadioGroup = /* @__PURE__ */ defineComponent({
  name: "RadioGroup",
  props: {
    modelValue: {
      type: [String, Number, Boolean],
      default: void 0
    },
    defaultValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    type: {
      type: String,
      default: "radio"
    },
    size: {
      type: String
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
    const prefixCls = getPrefixCls("radio-group");
    const {
      size,
      type,
      disabled,
      modelValue
    } = toRefs(props);
    const {
      mergedDisabled,
      mergedSize: _mergedSize,
      eventHandlers
    } = useFormItem({
      size,
      disabled
    });
    const {
      mergedSize
    } = useSize(_mergedSize);
    const _value = ref(props.defaultValue);
    const computedValue = computed(() => {
      var _a;
      return (_a = props.modelValue) != null ? _a : _value.value;
    });
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
    provide(radioGroupKey, reactive({
      name: "ArcoRadioGroup",
      value: computedValue,
      size: mergedSize,
      type,
      disabled: mergedDisabled,
      slots,
      handleChange
    }));
    watch(computedValue, (cur) => {
      if (_value.value !== cur) {
        _value.value = cur;
      }
    });
    watch(modelValue, (val) => {
      if (isUndefined(val) || isNull(val)) {
        _value.value = "";
      }
    });
    const cls = computed(() => [`${prefixCls}${props.type === "button" ? "-button" : ""}`, `${prefixCls}-size-${mergedSize.value}`, `${prefixCls}-direction-${props.direction}`, {
      [`${prefixCls}-disabled`]: mergedDisabled.value
    }]);
    const renderOptions = () => {
      return options.value.map((option) => createVNode(_Radio, {
        "key": option.value,
        "value": option.value,
        "disabled": option.disabled,
        "modelValue": computedValue.value === option.value
      }, {
        default: () => [slots.label ? slots.label({
          data: option
        }) : isFunction(option.label) ? option.label() : option.label]
      }));
    };
    return () => {
      var _a;
      return createVNode("span", {
        "class": cls.value
      }, [options.value.length > 0 ? renderOptions() : (_a = slots.default) == null ? void 0 : _a.call(slots)]);
    };
  }
});
const Radio = Object.assign(_Radio, {
  Group: RadioGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Radio.name, _Radio);
    app.component(componentPrefix + RadioGroup.name, RadioGroup);
  }
});

export { RadioGroup as R, Radio as a };
//# sourceMappingURL=index-63900e07.mjs.map
