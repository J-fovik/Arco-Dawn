import { s as setGlobalConfig, a as getComponentPrefix, _ as _export_sfc, g as getPrefixCls } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, ref, computed, resolveComponent, openBlock, createBlock, normalizeClass, withCtx, createElementVNode, renderSlot, createTextVNode, toDisplayString } from 'vue';
import { T as Trigger } from './index-dd449d78.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "Popover",
  components: {
    Trigger
  },
  props: {
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    title: String,
    content: String,
    trigger: {
      type: [String, Array],
      default: "hover"
    },
    position: {
      type: String,
      default: "top"
    },
    contentClass: {
      type: [String, Array, Object]
    },
    contentStyle: {
      type: Object
    },
    arrowClass: {
      type: [String, Array, Object]
    },
    arrowStyle: {
      type: Object
    },
    popupContainer: {
      type: [String, Object]
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("popover");
    const _popupVisible = ref(props.defaultPopupVisible);
    const computedPopupVisible = computed(() => {
      var _a;
      return (_a = props.popupVisible) != null ? _a : _popupVisible.value;
    });
    const handlePopupVisibleChange = (visible) => {
      _popupVisible.value = visible;
      emit("update:popupVisible", visible);
      emit("popupVisibleChange", visible);
    };
    const contentCls = computed(() => [
      `${prefixCls}-popup-content`,
      props.contentClass
    ]);
    const arrowCls = computed(() => [
      `${prefixCls}-popup-arrow`,
      props.arrowClass
    ]);
    return {
      prefixCls,
      computedPopupVisible,
      contentCls,
      arrowCls,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_trigger = resolveComponent("trigger");
  return openBlock(), createBlock(_component_trigger, {
    class: normalizeClass(_ctx.prefixCls),
    trigger: _ctx.trigger,
    position: _ctx.position,
    "popup-visible": _ctx.computedPopupVisible,
    "popup-offset": 10,
    "content-class": _ctx.contentCls,
    "content-style": _ctx.contentStyle,
    "arrow-class": _ctx.arrowCls,
    "arrow-style": _ctx.arrowStyle,
    "show-arrow": "",
    "popup-container": _ctx.popupContainer,
    "animation-name": "zoom-in-fade-out",
    "auto-fit-transform-origin": "",
    onPopupVisibleChange: _ctx.handlePopupVisibleChange
  }, {
    content: withCtx(() => [
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-title`)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ])
      ], 2),
      createElementVNode("div", {
        class: normalizeClass(`${_ctx.prefixCls}-content`)
      }, [
        renderSlot(_ctx.$slots, "content", {}, () => [
          createTextVNode(toDisplayString(_ctx.content), 1)
        ])
      ], 2)
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["class", "trigger", "position", "popup-visible", "content-class", "content-style", "arrow-class", "arrow-style", "popup-container", "onPopupVisibleChange"]);
}
var _Popover = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Popover = Object.assign(_Popover, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Popover.name, _Popover);
  }
});

export { Popover as P };
//# sourceMappingURL=index-a533a6fc.mjs.map
