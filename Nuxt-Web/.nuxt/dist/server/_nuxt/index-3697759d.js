import { _ as _export_sfc, I as IconHover, w as IconClose, g as getPrefixCls, a as isUndefined, r as useSize, s as setGlobalConfig, n as getComponentPrefix } from "./use-teleport-container-1599a5a4.js";
import { defineComponent, inject, computed, resolveComponent, openBlock, createElementBlock, mergeProps, createElementVNode, normalizeClass, renderSlot, createBlock, withModifiers, withCtx, createVNode, createCommentVNode, isVNode, toRefs, ref, onUpdated, normalizeStyle, watch, nextTick, reactive, provide, getCurrentInstance } from "vue";
import { a as IconRight, I as IconLeft } from "./index-f6f6f2a5.js";
import { I as IconUp } from "./index-11d38f35.js";
import { I as IconDown } from "./index-dd449d78.js";
import { I as IconPlus } from "./index-08fdf206.js";
import { R as ResizeObserver } from "./index-90aba227.js";
import { u as useChildrenComponents } from "./use-children-components-d7e0e48f.js";
const getTabListStyle = ({
  direction,
  type,
  offset
}) => {
  if (direction === "vertical") {
    return { transform: `translateY(${-offset}px)` };
  }
  return { transform: `translateX(${-offset}px)` };
};
const tabsInjectionKey = Symbol("ArcoTabs");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "TabsTab",
  components: {
    IconHover,
    IconClose
  },
  props: {
    tab: {
      type: Object,
      required: true
    },
    active: Boolean,
    editable: Boolean
  },
  emits: ["click", "delete"],
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("tabs-tab");
    const tabsCtx = inject(tabsInjectionKey, {});
    const handleClick = (e) => {
      if (!props.tab.disabled) {
        emit("click", props.tab.key, e);
      }
    };
    const onKeyDown = (ev) => {
      if (ev.key === "Enter") {
        handleClick(ev);
      }
    };
    const eventHandlers = computed(() => {
      return Object.assign(tabsCtx.trigger === "click" ? { onClick: handleClick } : { onMouseover: handleClick }, { onKeydown: onKeyDown });
    });
    const handleDelete = (e) => {
      if (!props.tab.disabled) {
        emit("delete", props.tab.key, e);
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-active`]: props.active,
        [`${prefixCls}-closable`]: props.editable && props.tab.closable,
        [`${prefixCls}-disabled`]: props.tab.disabled
      }
    ]);
    return {
      prefixCls,
      cls,
      eventHandlers,
      handleDelete
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_close = resolveComponent("icon-close");
  const _component_icon_hover = resolveComponent("icon-hover");
  return openBlock(), createElementBlock("div", mergeProps({
    tabindex: "0",
    class: _ctx.cls
  }, _ctx.eventHandlers), [
    createElementVNode("span", {
      class: normalizeClass(`${_ctx.prefixCls}-title`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.editable && _ctx.tab.closable ? (openBlock(), createBlock(_component_icon_hover, {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-close-btn`),
      onClick: withModifiers(_ctx.handleDelete, ["stop"])
    }, {
      default: withCtx(() => [
        createVNode(_component_icon_close)
      ]),
      _: 1
    }, 8, ["class", "onClick"])) : createCommentVNode("v-if", true)
  ], 16);
}
var TabsTab = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var TabsButton = /* @__PURE__ */ defineComponent({
  name: "TabsButton",
  props: {
    type: {
      type: String,
      default: "next"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    onClick: {
      type: Function
    }
  },
  emits: ["click"],
  setup(props, {
    emit
  }) {
    const prefixCls = getPrefixCls("tabs-nav-button");
    const handleClick = (ev) => {
      if (!props.disabled) {
        emit("click", props.type, ev);
      }
    };
    const renderIcon = () => {
      if (props.direction === "horizontal") {
        if (props.type === "next") {
          return createVNode(IconRight, null, null);
        }
        return createVNode(IconLeft, null, null);
      }
      if (props.type === "next") {
        return createVNode(IconDown, null, null);
      }
      return createVNode(IconUp, null, null);
    };
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-disabled`]: props.disabled,
      [`${prefixCls}-left`]: props.direction === "horizontal" && props.type === "previous",
      [`${prefixCls}-right`]: props.direction === "horizontal" && props.type === "next",
      [`${prefixCls}-up`]: props.direction === "vertical" && props.type === "previous",
      [`${prefixCls}-down`]: props.direction === "vertical" && props.type === "next"
    }]);
    return () => {
      let _slot;
      return createVNode("div", {
        "class": cls.value,
        "onClick": handleClick
      }, [createVNode(IconHover, {
        "disabled": props.disabled
      }, _isSlot(_slot = renderIcon()) ? _slot : {
        default: () => [_slot]
      })]);
    };
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "TabsNavInk",
  props: {
    activeTabRef: {
      type: Object
    },
    direction: {
      type: String
    },
    disabled: Boolean,
    animation: Boolean
  },
  setup(props) {
    const { activeTabRef } = toRefs(props);
    const prefixCls = getPrefixCls("tabs-nav-ink");
    const position = ref(0);
    const size = ref(0);
    const style = computed(() => {
      if (props.direction === "vertical") {
        return {
          top: `${position.value}px`,
          height: `${size.value}px`
        };
      }
      return {
        left: `${position.value}px`,
        width: `${size.value}px`
      };
    });
    const getInkStyle = () => {
      if (activeTabRef.value) {
        const _position = props.direction === "vertical" ? activeTabRef.value.offsetTop : activeTabRef.value.offsetLeft;
        const _size = props.direction === "vertical" ? activeTabRef.value.offsetHeight : activeTabRef.value.offsetWidth;
        if (_position !== position.value || _size !== size.value) {
          position.value = _position;
          size.value = _size;
        }
      }
    };
    onUpdated(() => {
      getInkStyle();
    });
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-animation`]: props.animation,
        [`${prefixCls}-disabled`]: props.disabled
      }
    ]);
    return {
      prefixCls,
      cls,
      style
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls),
    style: normalizeStyle(_ctx.style)
  }, null, 6);
}
var TabsNavInk = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
var TabsNav = /* @__PURE__ */ defineComponent({
  name: "TabsNav",
  props: {
    tabs: {
      type: Array,
      required: true
    },
    direction: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    activeKey: {
      type: [String, Number]
    },
    activeIndex: {
      type: Number,
      required: true
    },
    position: {
      type: String,
      required: true
    },
    size: {
      type: String,
      required: true
    },
    showAddButton: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      required: true
    },
    headerPadding: {
      type: Boolean,
      default: true
    }
  },
  emits: ["click", "add", "delete"],
  setup(props, {
    emit,
    slots
  }) {
    const {
      tabs,
      activeKey,
      activeIndex,
      direction
    } = toRefs(props);
    const prefixCls = getPrefixCls("tabs-nav");
    const wrapperRef = ref();
    const listRef = ref();
    const tabsRef = ref({});
    const activeTabRef = computed(() => {
      if (!isUndefined(activeKey.value)) {
        return tabsRef.value[activeKey.value];
      }
      return void 0;
    });
    const inkRef = ref();
    const mergedEditable = computed(() => props.editable && ["line", "card", "card-gutter"].includes(props.type));
    const isScroll = ref(false);
    const wrapperLength = ref(0);
    const maxOffset = ref(0);
    const tabEndOffsets = ref([]);
    const offset = ref(0);
    const getWrapperLength = () => {
      var _a, _b, _c;
      return (_c = direction.value === "vertical" ? (_a = wrapperRef.value) == null ? void 0 : _a.offsetHeight : (_b = wrapperRef.value) == null ? void 0 : _b.offsetWidth) != null ? _c : 0;
    };
    const getMaxOffset = () => {
      if (!listRef.value || !wrapperRef.value) {
        return 0;
      }
      if (direction.value === "vertical") {
        return listRef.value.offsetHeight - wrapperRef.value.offsetHeight;
      }
      return listRef.value.offsetWidth - wrapperRef.value.offsetWidth;
    };
    const getTabEndOffsets = () => {
      return tabs.value.map((item) => {
        const ele = tabsRef.value[item.key];
        if (direction.value === "vertical") {
          return ele.offsetTop + ele.offsetHeight;
        }
        return ele.offsetLeft + ele.offsetWidth;
      });
    };
    const getSize = () => {
      isScroll.value = isOverflow();
      if (isScroll.value) {
        wrapperLength.value = getWrapperLength();
        maxOffset.value = getMaxOffset();
        tabEndOffsets.value = getTabEndOffsets();
        if (offset.value > maxOffset.value) {
          offset.value = maxOffset.value;
        }
      } else {
        offset.value = 0;
      }
    };
    const isOverflow = () => {
      if (wrapperRef.value && listRef.value) {
        return props.direction === "vertical" ? listRef.value.offsetHeight > wrapperRef.value.offsetHeight : listRef.value.offsetWidth > wrapperRef.value.offsetWidth;
      }
      return false;
    };
    const isInView = (index2) => {
      var _a;
      return ((_a = tabEndOffsets.value[index2 - 1]) != null ? _a : 0) >= offset.value && tabEndOffsets.value[index2] <= offset.value + wrapperLength.value;
    };
    const getNextOffset = (type) => {
      if (!wrapperRef.value) {
        return 0;
      }
      return type === "previous" ? offset.value - wrapperLength.value : offset.value + wrapperLength.value;
    };
    const getValidOffset = (offset2) => {
      if (!wrapperRef.value || !listRef.value || offset2 < 0) {
        return 0;
      }
      if (offset2 > maxOffset.value) {
        return maxOffset.value;
      }
      return offset2;
    };
    const handleClick = (key, ev) => {
      emit("click", key, ev);
    };
    const handleDelete = (key, ev) => {
      emit("delete", key, ev);
    };
    const handleButtonClick = (type) => {
      offset.value = getValidOffset(getNextOffset(type));
    };
    const handleResize = () => {
      getSize();
      if (inkRef.value) {
        inkRef.value.$forceUpdate();
      }
    };
    watch(tabs, () => {
      nextTick(() => {
        getSize();
      });
    });
    watch(activeIndex, (current, pre) => {
      nextTick(() => {
        var _a;
        if (isScroll.value) {
          if (current >= pre) {
            const offsetIndex = current < tabEndOffsets.value.length - 1 ? current + 1 : current;
            if (!isInView(offsetIndex)) {
              offset.value = tabEndOffsets.value[offsetIndex] - wrapperLength.value;
            }
          } else {
            const offsetIndex = current > 0 ? current - 1 : current;
            if (!isInView(offsetIndex)) {
              offset.value = (_a = tabEndOffsets.value[offsetIndex - 1]) != null ? _a : 0;
            }
          }
        }
      });
    });
    const renderAddBtn = () => {
      if (!mergedEditable.value || !props.showAddButton) {
        return null;
      }
      return createVNode("div", {
        "class": `${prefixCls}-add-btn`,
        "onClick": (ev) => emit("add", ev)
      }, [createVNode(IconHover, null, {
        default: () => [createVNode(IconPlus, null, null)]
      })]);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-${props.direction}`, `${prefixCls}-${props.position}`, `${prefixCls}-size-${props.size}`, `${prefixCls}-type-${props.type}`]);
    const listCls = computed(() => [`${prefixCls}-tab-list`, {
      [`${prefixCls}-tab-list-no-padding`]: !props.headerPadding && ["line", "text"].includes(props.type) && props.direction === "horizontal"
    }]);
    const listStyle = computed(() => getTabListStyle({
      direction: props.direction,
      type: props.type,
      offset: offset.value
    }));
    const tabCls = computed(() => [`${prefixCls}-tab`, {
      [`${prefixCls}-tab-scroll`]: isScroll.value
    }]);
    return () => {
      var _a;
      return createVNode("div", {
        "class": cls.value
      }, [isScroll.value && createVNode(TabsButton, {
        "type": "previous",
        "direction": props.direction,
        "disabled": offset.value <= 0,
        "onClick": handleButtonClick
      }, null), createVNode(ResizeObserver, {
        "onResize": () => getSize()
      }, {
        default: () => [createVNode("div", {
          "class": tabCls.value,
          "ref": wrapperRef
        }, [createVNode(ResizeObserver, {
          "onResize": handleResize
        }, {
          default: () => [createVNode("div", {
            "ref": listRef,
            "class": listCls.value,
            "style": listStyle.value
          }, [props.tabs.map((tab, index2) => createVNode(TabsTab, {
            "key": tab.key,
            "ref": (component) => {
              if (component == null ? void 0 : component.$el) {
                tabsRef.value[tab.key] = component.$el;
              }
            },
            "active": tab.key === activeKey.value,
            "tab": tab,
            "editable": props.editable,
            "onClick": handleClick,
            "onDelete": handleDelete
          }, {
            default: () => {
              var _a2, _b, _c;
              return [(_c = (_b = (_a2 = tab.slots).title) == null ? void 0 : _b.call(_a2)) != null ? _c : tab.title];
            }
          })), props.type === "line" && activeTabRef.value && createVNode(TabsNavInk, {
            "ref": inkRef,
            "activeTabRef": activeTabRef.value,
            "direction": props.direction,
            "disabled": false,
            "animation": props.animation
          }, null)])]
        }), !isScroll.value && renderAddBtn()])]
      }), isScroll.value && createVNode(TabsButton, {
        "type": "next",
        "direction": props.direction,
        "disabled": offset.value >= maxOffset.value,
        "onClick": handleButtonClick
      }, null), createVNode("div", {
        "class": `${prefixCls}-extra`
      }, [isScroll.value && renderAddBtn(), (_a = slots.extra) == null ? void 0 : _a.call(slots)])]);
    };
  }
});
var _Tabs = /* @__PURE__ */ defineComponent({
  name: "Tabs",
  props: {
    activeKey: {
      type: [String, Number],
      default: void 0
    },
    defaultActiveKey: {
      type: [String, Number],
      default: void 0
    },
    position: {
      type: String,
      default: "top"
    },
    size: {
      type: String
    },
    type: {
      type: String,
      default: "line"
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    editable: {
      type: Boolean,
      default: false
    },
    showAddButton: {
      type: Boolean,
      default: false
    },
    destroyOnHide: {
      type: Boolean,
      default: false
    },
    lazyLoad: {
      type: Boolean,
      default: false
    },
    justify: {
      type: Boolean,
      default: false
    },
    animation: {
      type: Boolean,
      default: false
    },
    headerPadding: {
      type: Boolean,
      default: true
    },
    autoSwitch: {
      type: Boolean,
      default: false
    },
    hideContent: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String,
      default: "click"
    }
  },
  emits: {
    "update:activeKey": (key) => true,
    "change": (key) => true,
    "tabClick": (key, ev) => true,
    "add": (ev) => true,
    "delete": (key, ev) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      size,
      lazyLoad,
      destroyOnHide,
      trigger
    } = toRefs(props);
    const prefixCls = getPrefixCls("tabs");
    const {
      mergedSize
    } = useSize(size);
    const mergedPosition = computed(() => props.direction === "vertical" ? "left" : props.position);
    const mergedDirection = computed(() => ["left", "right"].includes(mergedPosition.value) ? "vertical" : "horizontal");
    const {
      children,
      components
    } = useChildrenComponents("TabPane");
    const tabMap = reactive(/* @__PURE__ */ new Map());
    const sortedTabs = computed(() => {
      const tabData = [];
      components.value.forEach((id) => {
        const tab = tabMap.get(id);
        if (tab)
          tabData.push(tab);
      });
      return tabData;
    });
    const tabKeys = computed(() => sortedTabs.value.map((item) => item.key));
    const addItem = (id, data) => {
      tabMap.set(id, data);
    };
    const removeItem = (id) => {
      tabMap.delete(id);
    };
    const _activeKey = ref(props.defaultActiveKey);
    const computedActiveKey = computed(() => {
      var _a;
      const activeKey = (_a = props.activeKey) != null ? _a : _activeKey.value;
      if (isUndefined(activeKey)) {
        return tabKeys.value[0];
      }
      return activeKey;
    });
    const activeIndex = computed(() => {
      const index2 = tabKeys.value.indexOf(computedActiveKey.value);
      if (index2 === -1) {
        return 0;
      }
      return index2;
    });
    provide(tabsInjectionKey, reactive({
      lazyLoad,
      destroyOnHide,
      activeKey: computedActiveKey,
      addItem,
      removeItem,
      trigger
    }));
    const handleChange = (key) => {
      if (key !== computedActiveKey.value) {
        _activeKey.value = key;
        emit("update:activeKey", key);
        emit("change", key);
      }
    };
    const handleClick = (key, e) => {
      handleChange(key);
      emit("tabClick", key, e);
    };
    const handleAdd = (ev) => {
      emit("add", ev);
      if (props.autoSwitch) {
        nextTick(() => {
          const lastKey = tabKeys.value[tabKeys.value.length - 1];
          handleChange(lastKey);
        });
      }
    };
    const handleDelete = (key, ev) => {
      emit("delete", key, ev);
    };
    const renderContent = () => {
      return createVNode("div", {
        "class": [`${prefixCls}-content`, {
          [`${prefixCls}-content-hide`]: props.hideContent
        }]
      }, [createVNode("div", {
        "class": [`${prefixCls}-content-list`, {
          [`${prefixCls}-content-animation`]: props.animation
        }],
        "style": {
          marginLeft: `-${activeIndex.value * 100}%`
        }
      }, [children.value])]);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-${mergedDirection.value}`, `${prefixCls}-${mergedPosition.value}`, `${prefixCls}-type-${props.type}`, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-justify`]: props.justify
    }]);
    return () => {
      var _a;
      children.value = (_a = slots.default) == null ? void 0 : _a.call(slots);
      return createVNode("div", {
        "class": cls.value
      }, [mergedPosition.value === "bottom" && renderContent(), createVNode(TabsNav, {
        "tabs": sortedTabs.value,
        "activeKey": computedActiveKey.value,
        "activeIndex": activeIndex.value,
        "direction": mergedDirection.value,
        "position": mergedPosition.value,
        "editable": props.editable,
        "animation": props.animation,
        "showAddButton": props.showAddButton,
        "headerPadding": props.headerPadding,
        "size": mergedSize.value,
        "type": props.type,
        "onClick": handleClick,
        "onAdd": handleAdd,
        "onDelete": handleDelete
      }, {
        extra: slots.extra
      }), mergedPosition.value !== "bottom" && renderContent()]);
    };
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "TabPane",
  props: {
    title: String,
    disabled: {
      type: Boolean,
      default: false
    },
    closable: {
      type: Boolean,
      default: true
    },
    destroyOnHide: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots }) {
    var _a;
    const { title, disabled, closable } = toRefs(props);
    const instance = getCurrentInstance();
    const prefixCls = getPrefixCls("tabs");
    const tabsCtx = inject(tabsInjectionKey, {});
    const itemRef = ref();
    const key = computed(() => instance == null ? void 0 : instance.vnode.key);
    const active = computed(() => key.value === tabsCtx.activeKey);
    const mounted = ref(tabsCtx.lazyLoad ? active.value : true);
    const data = reactive({
      key,
      title,
      disabled,
      closable,
      slots
    });
    if (instance == null ? void 0 : instance.uid) {
      (_a = tabsCtx.addItem) == null ? void 0 : _a.call(tabsCtx, instance.uid, data);
    }
    watch(active, (active2) => {
      if (active2) {
        if (!mounted.value) {
          mounted.value = true;
        }
      } else if (props.destroyOnHide || tabsCtx.destroyOnHide) {
        mounted.value = false;
      }
    });
    onUpdated(() => {
      data.slots = __spreadValues({}, slots);
    });
    return {
      prefixCls,
      active,
      itemRef,
      mounted
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "itemRef",
    class: normalizeClass([
      `${_ctx.prefixCls}-content-item`,
      { [`${_ctx.prefixCls}-content-item-active`]: _ctx.active }
    ])
  }, [
    _ctx.mounted ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-pane`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var TabPane = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Tabs = Object.assign(_Tabs, {
  TabPane,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Tabs.name, _Tabs);
    app.component(componentPrefix + TabPane.name, TabPane);
  }
});
const index = "";
export {
  Tabs as T,
  TabPane as a
};
//# sourceMappingURL=index-3697759d.js.map
