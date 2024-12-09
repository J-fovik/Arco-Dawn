import { _ as _export_sfc, g as getPrefixCls, i as isNumber, O as getScrollBarWidth, P as isScroll, o as on, j as off, M as ClientOnly, B as Button, I as IconHover, w as IconClose, A as IconCheckCircleFill, C as IconExclamationCircleFill, D as IconCloseCircleFill, u as useI18n, G as useTeleportContainer, H as usePopupManager, f as isFunction, Q as isPromise, e as isBoolean, R as contains, K as KEYBOARD_KEY, S as MESSAGE_TYPES, T as getOverlay, m as omit, U as getSlotFunction, s as setGlobalConfig, n as getComponentPrefix } from "./use-teleport-container-1599a5a4.js";
/* empty css                */import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, ref, toRefs, watch, resolveComponent, createBlock, withCtx, Teleport, withDirectives, mergeProps, createVNode, Transition, vShow, createCommentVNode, withModifiers, renderSlot, createTextVNode, toDisplayString, render, nextTick } from "vue";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "IconInfoCircleFill",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-info-circle-fill`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm2-30a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2Zm0 17h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-6a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h1v-8a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v11Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
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
var _IconInfoCircleFill = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const IconInfoCircleFill = Object.assign(_IconInfoCircleFill, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconInfoCircleFill.name, _IconInfoCircleFill);
  }
});
const useOverflow = (elementRef) => {
  const isSetOverflow = ref(false);
  const originStyle = {
    overflow: "",
    width: "",
    boxSizing: ""
  };
  const setOverflowHidden = () => {
    if (elementRef.value) {
      const element = elementRef.value;
      if (!isSetOverflow.value && element.style.overflow !== "hidden") {
        const scrollBarWidth = getScrollBarWidth(element);
        if (scrollBarWidth > 0 || isScroll(element)) {
          originStyle.overflow = element.style.overflow;
          originStyle.width = element.style.width;
          originStyle.boxSizing = element.style.boxSizing;
          element.style.overflow = "hidden";
          element.style.width = `${element.offsetWidth - scrollBarWidth}px`;
          element.style.boxSizing = "border-box";
          isSetOverflow.value = true;
        }
      }
    }
  };
  const resetOverflow = () => {
    if (elementRef.value && isSetOverflow.value) {
      const element = elementRef.value;
      element.style.overflow = originStyle.overflow;
      element.style.width = originStyle.width;
      element.style.boxSizing = originStyle.boxSizing;
      isSetOverflow.value = false;
    }
  };
  return {
    setOverflowHidden,
    resetOverflow
  };
};
const useDraggable = ({
  modalRef,
  wrapperRef,
  draggable,
  alignCenter
}) => {
  const isDragging = ref(false);
  const startMouse = ref([0, 0]);
  const initialPosition = ref([0, 0]);
  const position = ref();
  const minPosition = ref([0, 0]);
  const maxPosition = ref([0, 0]);
  const getInitialPosition = () => {
    var _a, _b, _c;
    if (wrapperRef.value && modalRef.value) {
      const { top: wrapperTop, left: wrapperLeft } = wrapperRef.value.getBoundingClientRect();
      const { clientWidth: wrapperWidth, clientHeight: wrapperHeight } = wrapperRef.value;
      const { top, left, width, height } = modalRef.value.getBoundingClientRect();
      const offsetTop = alignCenter.value ? 0 : (_a = modalRef.value) == null ? void 0 : _a.offsetTop;
      const initialX = left - wrapperLeft;
      const initialY = top - wrapperTop - offsetTop;
      if (initialX !== ((_b = initialPosition.value) == null ? void 0 : _b[0]) || initialY !== ((_c = initialPosition.value) == null ? void 0 : _c[1])) {
        initialPosition.value = [initialX, initialY];
      }
      const maxX = wrapperWidth > width ? wrapperWidth - width : 0;
      const maxY = wrapperHeight > height ? wrapperHeight - height - offsetTop : 0;
      if (maxX !== maxPosition.value[0] || maxY !== maxPosition.value[1]) {
        maxPosition.value = [maxX, maxY];
      }
      if (offsetTop) {
        minPosition.value = [0, 0 - offsetTop];
      }
    }
  };
  const handleMoveDown = (ev) => {
    if (draggable.value) {
      ev.preventDefault();
      isDragging.value = true;
      getInitialPosition();
      startMouse.value = [ev.x, ev.y];
      on(window, "mousemove", handleMouseMove);
      on(window, "mouseup", handleMouseUp);
      on(window, "contextmenu", handleMouseUp);
    }
  };
  const handleMouseMove = (ev) => {
    if (isDragging.value) {
      const diffX = ev.x - startMouse.value[0];
      const diffY = ev.y - startMouse.value[1];
      let x = initialPosition.value[0] + diffX;
      let y = initialPosition.value[1] + diffY;
      if (x < minPosition.value[0])
        x = minPosition.value[0];
      if (x > maxPosition.value[0])
        x = maxPosition.value[0];
      if (y < minPosition.value[1])
        y = minPosition.value[1];
      if (y > maxPosition.value[1])
        y = maxPosition.value[1];
      position.value = [x, y];
    }
  };
  const handleMouseUp = () => {
    isDragging.value = false;
    off(window, "mousemove", handleMouseMove);
    off(window, "mouseup", handleMouseUp);
  };
  return {
    position,
    handleMoveDown
  };
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
var _sfc_main = /* @__PURE__ */ defineComponent({
  name: "Modal",
  components: {
    ClientOnly,
    ArcoButton: Button,
    IconHover,
    IconClose,
    IconInfoCircleFill,
    IconCheckCircleFill,
    IconExclamationCircleFill,
    IconCloseCircleFill
  },
  inheritAttrs: false,
  props: {
    visible: {
      type: Boolean,
      default: void 0
    },
    defaultVisible: {
      type: Boolean,
      default: false
    },
    width: {
      type: [Number, String]
    },
    top: {
      type: [Number, String]
    },
    mask: {
      type: Boolean,
      default: true
    },
    title: {
      type: String
    },
    titleAlign: {
      type: String,
      default: "center"
    },
    alignCenter: {
      type: Boolean,
      default: true
    },
    unmountOnClose: Boolean,
    maskClosable: {
      type: Boolean,
      default: true
    },
    hideCancel: {
      type: Boolean,
      default: false
    },
    simple: {
      type: Boolean,
      default: (props) => {
        return props.notice;
      }
    },
    closable: {
      type: Boolean,
      default: true
    },
    okText: String,
    cancelText: String,
    okLoading: {
      type: Boolean,
      default: false
    },
    okButtonProps: {
      type: Object
    },
    cancelButtonProps: {
      type: Object
    },
    footer: {
      type: Boolean,
      default: true
    },
    renderToBody: {
      type: Boolean,
      default: true
    },
    popupContainer: {
      type: [String, Object],
      default: "body"
    },
    maskStyle: {
      type: Object
    },
    modalClass: {
      type: [String, Array]
    },
    modalStyle: {
      type: Object
    },
    onBeforeOk: {
      type: Function
    },
    onBeforeCancel: {
      type: Function
    },
    escToClose: {
      type: Boolean,
      default: true
    },
    draggable: {
      type: Boolean,
      default: false
    },
    fullscreen: {
      type: Boolean,
      default: false
    },
    maskAnimationName: {
      type: String,
      default: (props) => {
        if (props.fullscreen) {
          return "fade-in-standard";
        }
        return "fade-modal";
      }
    },
    modalAnimationName: {
      type: String,
      default: (props) => {
        if (props.fullscreen) {
          return "zoom-in";
        }
        return "zoom-modal";
      }
    },
    bodyClass: {
      type: [String, Array]
    },
    bodyStyle: {
      type: [String, Object, Array]
    },
    messageType: {
      type: String
    },
    hideTitle: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    "update:visible": (visible) => true,
    "ok": (e) => true,
    "cancel": (e) => true,
    "open": () => true,
    "close": () => true,
    "beforeOpen": () => true,
    "beforeClose": () => true
  },
  setup(props, {
    emit
  }) {
    const {
      fullscreen,
      popupContainer,
      alignCenter
    } = toRefs(props);
    const prefixCls = getPrefixCls("modal");
    const {
      t
    } = useI18n();
    const wrapperRef = ref();
    const modalRef = ref();
    const _visible = ref(props.defaultVisible);
    const computedVisible = computed(() => {
      var _a;
      return (_a = props.visible) != null ? _a : _visible.value;
    });
    const _okLoading = ref(false);
    const mergedOkLoading = computed(() => props.okLoading || _okLoading.value);
    const mergedDraggable = computed(() => props.draggable && !props.fullscreen);
    const {
      teleportContainer,
      containerRef
    } = useTeleportContainer({
      popupContainer,
      visible: computedVisible
    });
    const mounted = ref(computedVisible.value);
    const okDisplayText = computed(() => props.okText || t("modal.okText"));
    const cancelDisplayText = computed(() => props.cancelText || t("modal.cancelText"));
    const {
      zIndex,
      isLastDialog
    } = usePopupManager("dialog", {
      visible: computedVisible
    });
    let globalKeyDownListener = false;
    const handleGlobalKeyDown = (ev) => {
      if (props.escToClose && ev.key === KEYBOARD_KEY.ESC && isLastDialog()) {
        handleCancel(ev);
      }
    };
    const addGlobalKeyDownListener = () => {
      if (props.escToClose && !globalKeyDownListener) {
        globalKeyDownListener = true;
        on(document.documentElement, "keydown", handleGlobalKeyDown);
      }
    };
    const removeGlobalKeyDownListener = () => {
      globalKeyDownListener = false;
      off(document.documentElement, "keydown", handleGlobalKeyDown);
    };
    let promiseNumber = 0;
    const {
      position,
      handleMoveDown
    } = useDraggable({
      wrapperRef,
      modalRef,
      draggable: mergedDraggable,
      alignCenter
    });
    const close = () => {
      promiseNumber++;
      if (_okLoading.value) {
        _okLoading.value = false;
      }
      _visible.value = false;
      emit("update:visible", false);
    };
    const handleOk = async (e) => {
      const currentPromiseNumber = promiseNumber;
      const closed = await new Promise(async (resolve) => {
        var _a;
        if (isFunction(props.onBeforeOk)) {
          let result = props.onBeforeOk((closed2 = true) => resolve(closed2));
          if (isPromise(result) || !isBoolean(result)) {
            _okLoading.value = true;
          }
          if (isPromise(result)) {
            try {
              result = (_a = await result) != null ? _a : true;
            } catch (error) {
              result = false;
            }
          }
          if (isBoolean(result)) {
            resolve(result);
          }
        } else {
          resolve(true);
        }
      });
      if (currentPromiseNumber === promiseNumber) {
        if (closed) {
          emit("ok", e);
          close();
        } else if (_okLoading.value) {
          _okLoading.value = false;
        }
      }
    };
    const handleCancel = (e) => {
      var _a;
      let result = true;
      if (isFunction(props.onBeforeCancel)) {
        result = (_a = props.onBeforeCancel()) != null ? _a : false;
      }
      if (result) {
        emit("cancel", e);
        close();
      }
    };
    const currentIsMask = ref(false);
    const handleMaskMouseDown = (ev) => {
      if (ev.target === wrapperRef.value) {
        currentIsMask.value = true;
      }
    };
    const handleMaskClick = (e) => {
      if (props.mask && props.maskClosable && currentIsMask.value) {
        handleCancel(e);
      }
    };
    const handleOpen = () => {
      if (computedVisible.value) {
        if (!contains(wrapperRef.value, document.activeElement) && document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
        emit("open");
      }
    };
    const handleClose = () => {
      if (!computedVisible.value) {
        if (mergedDraggable.value) {
          position.value = void 0;
        }
        mounted.value = false;
        resetOverflow();
        emit("close");
      }
    };
    const {
      setOverflowHidden,
      resetOverflow
    } = useOverflow(containerRef);
    watch(computedVisible, (value) => {
      if (_visible.value !== value) {
        _visible.value = value;
      }
      if (value) {
        emit("beforeOpen");
        mounted.value = true;
        currentIsMask.value = false;
        setOverflowHidden();
        addGlobalKeyDownListener();
      } else {
        emit("beforeClose");
        removeGlobalKeyDownListener();
      }
    });
    watch(fullscreen, () => {
      if (position.value) {
        position.value = void 0;
      }
    });
    const wrapperCls = computed(() => [`${prefixCls}-wrapper`, {
      [`${prefixCls}-wrapper-align-center`]: props.alignCenter && !props.fullscreen,
      [`${prefixCls}-wrapper-moved`]: Boolean(position.value)
    }]);
    const modalCls = computed(() => [`${prefixCls}`, props.modalClass, {
      [`${prefixCls}-simple`]: props.simple,
      [`${prefixCls}-draggable`]: mergedDraggable.value,
      [`${prefixCls}-fullscreen`]: props.fullscreen
    }]);
    const mergedModalStyle = computed(() => {
      var _a;
      const style = __spreadValues$1({}, (_a = props.modalStyle) != null ? _a : {});
      if (props.width && !props.fullscreen) {
        style.width = isNumber(props.width) ? `${props.width}px` : props.width;
      }
      if (!props.alignCenter && props.top) {
        style.top = isNumber(props.top) ? `${props.top}px` : props.top;
      }
      if (position.value) {
        style.transform = `translate(${position.value[0]}px, ${position.value[1]}px)`;
      }
      return style;
    });
    return {
      prefixCls,
      mounted,
      computedVisible,
      containerRef,
      wrapperRef,
      mergedModalStyle,
      okDisplayText,
      cancelDisplayText,
      zIndex,
      handleOk,
      handleCancel,
      handleMaskClick,
      handleMaskMouseDown,
      handleOpen,
      handleClose,
      mergedOkLoading,
      modalRef,
      wrapperCls,
      modalCls,
      teleportContainer,
      handleMoveDown
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_info_circle_fill = resolveComponent("icon-info-circle-fill");
  const _component_icon_check_circle_fill = resolveComponent("icon-check-circle-fill");
  const _component_icon_exclamation_circle_fill = resolveComponent("icon-exclamation-circle-fill");
  const _component_icon_close_circle_fill = resolveComponent("icon-close-circle-fill");
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_hover = resolveComponent("icon-hover");
  const _component_arco_button = resolveComponent("arco-button");
  const _component_client_only = resolveComponent("client-only");
  return openBlock(), createBlock(_component_client_only, null, {
    default: withCtx(() => [
      (openBlock(), createBlock(Teleport, {
        to: _ctx.teleportContainer,
        disabled: !_ctx.renderToBody
      }, [
        !_ctx.unmountOnClose || _ctx.computedVisible || _ctx.mounted ? withDirectives((openBlock(), createElementBlock("div", mergeProps({
          key: 0,
          class: `${_ctx.prefixCls}-container`,
          style: { zIndex: _ctx.zIndex }
        }, _ctx.$attrs), [
          createVNode(Transition, {
            name: _ctx.maskAnimationName,
            appear: ""
          }, {
            default: withCtx(() => [
              _ctx.mask ? withDirectives((openBlock(), createElementBlock("div", {
                key: 0,
                ref: "maskRef",
                class: normalizeClass(`${_ctx.prefixCls}-mask`),
                style: normalizeStyle(_ctx.maskStyle)
              }, null, 6)), [
                [vShow, _ctx.computedVisible]
              ]) : createCommentVNode("v-if", true)
            ]),
            _: 1
          }, 8, ["name"]),
          createElementVNode("div", {
            ref: "wrapperRef",
            class: normalizeClass(_ctx.wrapperCls),
            onClick: _cache[2] || (_cache[2] = withModifiers((...args) => _ctx.handleMaskClick && _ctx.handleMaskClick(...args), ["self"])),
            onMousedown: _cache[3] || (_cache[3] = withModifiers((...args) => _ctx.handleMaskMouseDown && _ctx.handleMaskMouseDown(...args), ["self"]))
          }, [
            createVNode(Transition, {
              name: _ctx.modalAnimationName,
              appear: "",
              onAfterEnter: _ctx.handleOpen,
              onAfterLeave: _ctx.handleClose
            }, {
              default: withCtx(() => [
                withDirectives(createElementVNode("div", {
                  ref: "modalRef",
                  class: normalizeClass(_ctx.modalCls),
                  style: normalizeStyle(_ctx.mergedModalStyle)
                }, [
                  !_ctx.hideTitle && (_ctx.$slots.title || _ctx.title || _ctx.closable) ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    class: normalizeClass(`${_ctx.prefixCls}-header`),
                    onMousedown: _cache[1] || (_cache[1] = (...args) => _ctx.handleMoveDown && _ctx.handleMoveDown(...args))
                  }, [
                    _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", {
                      key: 0,
                      class: normalizeClass([
                        `${_ctx.prefixCls}-title`,
                        `${_ctx.prefixCls}-title-align-${_ctx.titleAlign}`
                      ])
                    }, [
                      _ctx.messageType ? (openBlock(), createElementBlock("div", {
                        key: 0,
                        class: normalizeClass(`${_ctx.prefixCls}-title-icon`)
                      }, [
                        _ctx.messageType === "info" ? (openBlock(), createBlock(_component_icon_info_circle_fill, { key: 0 })) : createCommentVNode("v-if", true),
                        _ctx.messageType === "success" ? (openBlock(), createBlock(_component_icon_check_circle_fill, { key: 1 })) : createCommentVNode("v-if", true),
                        _ctx.messageType === "warning" ? (openBlock(), createBlock(_component_icon_exclamation_circle_fill, { key: 2 })) : createCommentVNode("v-if", true),
                        _ctx.messageType === "error" ? (openBlock(), createBlock(_component_icon_close_circle_fill, { key: 3 })) : createCommentVNode("v-if", true)
                      ], 2)) : createCommentVNode("v-if", true),
                      renderSlot(_ctx.$slots, "title", {}, () => [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ])
                    ], 2)) : createCommentVNode("v-if", true),
                    !_ctx.simple && _ctx.closable ? (openBlock(), createElementBlock("div", {
                      key: 1,
                      tabindex: "-1",
                      role: "button",
                      "aria-label": "Close",
                      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
                      onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleCancel && _ctx.handleCancel(...args))
                    }, [
                      createVNode(_component_icon_hover, null, {
                        default: withCtx(() => [
                          createVNode(_component_icon_close)
                        ]),
                        _: 1
                      })
                    ], 2)) : createCommentVNode("v-if", true)
                  ], 34)) : createCommentVNode("v-if", true),
                  createElementVNode("div", {
                    class: normalizeClass([`${_ctx.prefixCls}-body`, _ctx.bodyClass]),
                    style: normalizeStyle(_ctx.bodyStyle)
                  }, [
                    renderSlot(_ctx.$slots, "default")
                  ], 6),
                  _ctx.footer ? (openBlock(), createElementBlock("div", {
                    key: 1,
                    class: normalizeClass(`${_ctx.prefixCls}-footer`)
                  }, [
                    renderSlot(_ctx.$slots, "footer", {}, () => [
                      !_ctx.hideCancel ? (openBlock(), createBlock(_component_arco_button, mergeProps({ key: 0 }, _ctx.cancelButtonProps, { onClick: _ctx.handleCancel }), {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.cancelDisplayText), 1)
                        ]),
                        _: 1
                      }, 16, ["onClick"])) : createCommentVNode("v-if", true),
                      createVNode(_component_arco_button, mergeProps({ type: "primary" }, _ctx.okButtonProps, {
                        loading: _ctx.mergedOkLoading,
                        onClick: _ctx.handleOk
                      }), {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.okDisplayText), 1)
                        ]),
                        _: 1
                      }, 16, ["loading", "onClick"])
                    ])
                  ], 2)) : createCommentVNode("v-if", true)
                ], 6), [
                  [vShow, _ctx.computedVisible]
                ])
              ]),
              _: 3
            }, 8, ["name", "onAfterEnter", "onAfterLeave"])
          ], 34)
        ], 16)), [
          [vShow, _ctx.computedVisible || _ctx.mounted]
        ]) : createCommentVNode("v-if", true)
      ], 8, ["to", "disabled"]))
    ]),
    _: 3
  });
}
var _Modal = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
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
const open = (config, appContext) => {
  let container = getOverlay("modal");
  const handleOk = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
    if (isFunction(config.onOk)) {
      config.onOk();
    }
  };
  const handleCancel = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
    if (isFunction(config.onCancel)) {
      config.onCancel();
    }
  };
  const handleClose = async () => {
    await nextTick();
    if (container) {
      render(null, container);
      document.body.removeChild(container);
    }
    container = null;
    if (isFunction(config.onClose)) {
      config.onClose();
    }
  };
  const handleReturnClose = () => {
    if (vm.component) {
      vm.component.props.visible = false;
    }
  };
  const handleUpdateConfig = (config2) => {
    if (vm.component) {
      Object.entries(config2).forEach(([key, value]) => {
        vm.component.props[key] = value;
      });
    }
  };
  const defaultConfig = {
    visible: true,
    renderToBody: false,
    unmountOnClose: true,
    onOk: handleOk,
    onCancel: handleCancel,
    onClose: handleClose
  };
  const vm = createVNode(_Modal, __spreadValues(__spreadValues(__spreadValues({}, defaultConfig), omit(config, ["content", "title", "footer", "visible", "unmountOnClose", "onOk", "onCancel", "onClose"])), {
    footer: typeof config.footer === "boolean" ? config.footer : void 0
  }), {
    default: getSlotFunction(config.content),
    title: getSlotFunction(config.title),
    footer: typeof config.footer !== "boolean" ? getSlotFunction(config.footer) : void 0
  });
  if (appContext != null ? appContext : Modal._context) {
    vm.appContext = appContext != null ? appContext : Modal._context;
  }
  render(vm, container);
  document.body.appendChild(container);
  return {
    close: handleReturnClose,
    update: handleUpdateConfig
  };
};
const modal = __spreadValues({
  open,
  confirm: (config, appContext) => {
    const _config = __spreadValues({
      simple: true,
      messageType: "warning"
    }, config);
    return open(_config, appContext);
  }
}, MESSAGE_TYPES.reduce((pre, value) => {
  pre[value] = (config, appContext) => {
    const _config = __spreadValues({
      simple: true,
      hideCancel: true,
      messageType: value
    }, config);
    return open(_config, appContext);
  };
  return pre;
}, {}));
const Modal = Object.assign(_Modal, __spreadProps(__spreadValues({}, modal), {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Modal.name, _Modal);
    const modalWithContext = {};
    for (const key of Object.keys(modal)) {
      modalWithContext[key] = (config, appContext = app._context) => modal[key](config, appContext);
    }
    app.config.globalProperties.$modal = modalWithContext;
  },
  _context: null
}));
const index = "";
const useForm = (originalForm, callback) => {
  const form = ref(originalForm());
  const formRef = ref();
  const resetForm = () => {
    form.value = originalForm();
    if (callback)
      callback();
  };
  const restoreValidationForm = () => {
    var _a;
    (_a = formRef == null ? void 0 : formRef.value) == null ? void 0 : _a.clearValidate();
  };
  return {
    form,
    formRef,
    resetForm,
    restoreValidationForm
  };
};
const useModal = () => {
  const warningModal = (content, callBack) => {
    const modal2 = Modal.warning({
      closable: true,
      mask: true,
      hideCancel: false,
      modalClass: "custom-modal",
      title: "提示",
      content,
      okButtonProps: {
        status: "warning"
      },
      onBeforeOk: (done) => {
        modal2.update({ okLoading: true });
        callBack(done);
      }
    });
  };
  const infoModal = (content, callBack) => {
    const modal2 = Modal.info({
      closable: true,
      mask: true,
      hideCancel: false,
      modalClass: "custom-modal",
      title: "提示",
      content,
      onBeforeOk: (done) => {
        modal2.update({ okLoading: true });
        callBack(done);
      }
    });
  };
  const successModal = (content, callBack) => {
    const modal2 = Modal.success({
      closable: false,
      mask: true,
      hideCancel: true,
      modalClass: "custom-modal",
      title: "提示",
      content,
      maskClosable: false,
      okButtonProps: {
        status: "success"
      },
      onBeforeOk: (done) => {
        modal2.update({ okLoading: true });
        callBack(done);
      }
    });
  };
  const errorModal = (content, callBack) => {
    const modal2 = Modal.error({
      closable: true,
      mask: true,
      hideCancel: false,
      modalClass: "custom-modal",
      title: "提示",
      content,
      okButtonProps: {
        status: "danger"
      },
      onBeforeOk: (done) => {
        modal2.update({ okLoading: true });
        callBack(done);
      }
    });
  };
  return { warningModal, infoModal, successModal, errorModal };
};
export {
  Modal as M,
  useModal as a,
  useForm as u
};
//# sourceMappingURL=useArco-b2247a5c.js.map
