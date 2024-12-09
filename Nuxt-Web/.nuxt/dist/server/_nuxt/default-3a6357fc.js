import { _ as __nuxt_component_0$1 } from "./nuxt-link-99c863e4.js";
import { _ as _sfc_main$a } from "./NuxtImg-9bcbe2bb.js";
import { T as Trigger, b as Input, a as IconSearch, I as IconDown } from "./index-dd449d78.js";
import { S as Space } from "./index-8bcd588e.js";
import { g as useRoute, b as useUser, n as navigateTo, _ as __nuxt_component_1 } from "../server.mjs";
import { _ as _export_sfc, g as getPrefixCls, i as isNumber, B as Button, a0 as ButtonGroup, s as setGlobalConfig, n as getComponentPrefix } from "./use-teleport-container-1599a5a4.js";
import { P as Popover } from "./index-a533a6fc.js";
import { G as Grid, a as GridItem } from "./index-4ecc34e0.js";
import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, inject, ref, resolveComponent, renderSlot, createVNode, createCommentVNode, withCtx, toRefs, provide, reactive, createBlock, createSlots, Fragment, createTextVNode, toDisplayString, mergeProps, watch, unref, isRef, renderList, useSSRContext } from "vue";
import { S as Scrollbar, E as Empty, u as useTrigger, a as IconRight, b as IconMore } from "./index-f6f6f2a5.js";
/* empty css                *//* empty css                *//* empty css                */import "hookable";
import "destr";
import "devalue";
import "klona";
import { r as routeMenuList } from "./options-7ec13930.js";
import { h as hidePhoneFormat } from "./index-a008b2db.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrRenderSlot } from "vue/server-renderer";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { I as Image } from "./index-25609e16.js";
import "ufo";
import "resize-observer-polyfill";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "cookie-es";
import "ohash";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "@iconify/vue";
import "defu";
import "./index-3943ca28.js";
import "./index-5f48af9c.js";
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  name: "IconMoreVertical",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-more-vertical`, { [`${prefixCls}-spin`]: props.spin }]);
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
  d: "M25 10h-2V8h2v2ZM25 25h-2v-2h2v2ZM25 40h-2v-2h2v2Z",
  fill: "currentColor",
  stroke: "none"
}, null, -1);
const _hoisted_3 = /* @__PURE__ */ createElementVNode("path", { d: "M25 10h-2V8h2v2ZM25 25h-2v-2h2v2ZM25 40h-2v-2h2v2Z" }, null, -1);
const _hoisted_4 = [
  _hoisted_2,
  _hoisted_3
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
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
  }, _hoisted_4, 14, _hoisted_1);
}
var _IconMoreVertical = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$6]]);
const IconMoreVertical = Object.assign(_IconMoreVertical, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconMoreVertical.name, _IconMoreVertical);
  }
});
const dropdownInjectionKey = Symbol("ArcoDropdown");
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  name: "DropdownPanel",
  components: {
    Scrollbar,
    Empty
  },
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    isEmpty: {
      type: Boolean,
      default: false
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    onScroll: {
      type: [Function, Array]
    },
    onReachBottom: {
      type: [Function, Array]
    }
  },
  emits: ["scroll", "reachBottom"],
  setup(props, { emit, slots }) {
    const prefixCls = getPrefixCls("dropdown");
    const dropdownCtx = inject(dropdownInjectionKey, {});
    const wrapperRef = ref();
    const handleScroll = (e) => {
      const { scrollTop, scrollHeight, offsetHeight } = e.target;
      const bottom = scrollHeight - (scrollTop + offsetHeight);
      if (bottom <= props.bottomOffset) {
        emit("reachBottom", e);
      }
      emit("scroll", e);
    };
    const style = computed(() => {
      if (isNumber(dropdownCtx.popupMaxHeight)) {
        return {
          maxHeight: `${dropdownCtx.popupMaxHeight}px`
        };
      }
      if (!dropdownCtx.popupMaxHeight) {
        return {
          maxHeight: "none",
          overflowY: "hidden"
        };
      }
      return void 0;
    });
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-has-footer`]: Boolean(slots.footer)
      }
    ]);
    return {
      prefixCls,
      cls,
      style,
      wrapperRef,
      handleScroll
    };
  }
});
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_empty = resolveComponent("empty");
  const _component_Scrollbar = resolveComponent("Scrollbar");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    _ctx.isEmpty ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-empty`)
    }, [
      renderSlot(_ctx.$slots, "empty", {}, () => [
        createVNode(_component_empty)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    createVNode(_component_Scrollbar, {
      ref: "wrapperRef",
      class: normalizeClass(`${_ctx.prefixCls}-list-wrapper`),
      style: normalizeStyle(_ctx.style),
      onScroll: _ctx.handleScroll
    }, {
      default: withCtx(() => [
        createElementVNode("ul", {
          class: normalizeClass(`${_ctx.prefixCls}-list`)
        }, [
          renderSlot(_ctx.$slots, "default")
        ], 2)
      ]),
      _: 3
    }, 8, ["class", "style", "onScroll"]),
    _ctx.$slots.footer && !_ctx.isEmpty ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-footer`)
    }, [
      renderSlot(_ctx.$slots, "footer")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var DropdownPanel = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$5]]);
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  name: "Dropdown",
  components: {
    Trigger,
    DropdownPanel
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
    trigger: {
      type: [String, Array],
      default: "click"
    },
    position: {
      type: String,
      default: "bottom"
    },
    popupContainer: {
      type: [String, Object]
    },
    popupMaxHeight: {
      type: [Boolean, Number],
      default: true
    },
    hideOnSelect: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true,
    "select": (value, ev) => true
  },
  setup(props, { emit }) {
    const { defaultPopupVisible, popupVisible, popupMaxHeight } = toRefs(props);
    const prefixCls = getPrefixCls("dropdown");
    const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
      defaultPopupVisible,
      popupVisible,
      emit
    });
    const handleOptionClick = (value, ev) => {
      emit("select", value, ev);
      props.hideOnSelect && handlePopupVisibleChange(false);
    };
    provide(dropdownInjectionKey, reactive({
      popupMaxHeight,
      onOptionClick: handleOptionClick
    }));
    return {
      prefixCls,
      computedPopupVisible,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_DropdownPanel = resolveComponent("DropdownPanel");
  const _component_Trigger = resolveComponent("Trigger");
  return openBlock(), createBlock(_component_Trigger, {
    "popup-visible": _ctx.computedPopupVisible,
    "animation-name": "slide-dynamic-origin",
    "auto-fit-transform-origin": "",
    trigger: _ctx.trigger,
    position: _ctx.position,
    "popup-offset": 4,
    "popup-container": _ctx.popupContainer,
    "opened-class": `${_ctx.prefixCls}-open`,
    onPopupVisibleChange: _ctx.handlePopupVisibleChange
  }, {
    content: withCtx(() => [
      createVNode(_component_DropdownPanel, null, createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "content")
        ]),
        _: 2
      }, [
        _ctx.$slots.footer ? {
          name: "footer",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "footer")
          ])
        } : void 0
      ]), 1024)
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["popup-visible", "trigger", "position", "popup-container", "opened-class", "onPopupVisibleChange"]);
}
var _Dropdown = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$4]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "Doption",
  props: {
    value: {
      type: [String, Number, Object]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    active: Boolean,
    uninjectContext: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { emit }) {
    const prefixCls = getPrefixCls("dropdown-option");
    const liRef = ref();
    const computedValue = computed(() => {
      var _a, _b, _c;
      return (_c = (_b = props.value) != null ? _b : (_a = liRef.value) == null ? void 0 : _a.textContent) != null ? _c : void 0;
    });
    const dropdownCtx = !props.uninjectContext ? inject(dropdownInjectionKey, void 0) : void 0;
    const handleClick = (ev) => {
      if (!props.disabled) {
        emit("click", ev);
        dropdownCtx == null ? void 0 : dropdownCtx.onOptionClick(computedValue.value, ev);
      }
    };
    const cls = computed(() => [
      prefixCls,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-active`]: props.active
      }
    ]);
    return {
      prefixCls,
      cls,
      liRef,
      handleClick
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    ref: "liRef",
    class: normalizeClass([_ctx.cls, { [`${_ctx.prefixCls}-has-suffix`]: Boolean(_ctx.$slots.suffix) }]),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.$slots.icon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      renderSlot(_ctx.$slots, "icon")
    ], 2)) : createCommentVNode("v-if", true),
    createElementVNode("span", {
      class: normalizeClass(`${_ctx.prefixCls}-content`)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 2),
    _ctx.$slots.suffix ? (openBlock(), createElementBlock("span", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-suffix`)
    }, [
      renderSlot(_ctx.$slots, "suffix")
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var Doption = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3]]);
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "Dgroup",
  props: {
    title: String
  },
  setup() {
    const prefixCls = getPrefixCls("dropdown-group");
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
      renderSlot(_ctx.$slots, "title", {}, () => [
        createTextVNode(toDisplayString(_ctx.title), 1)
      ])
    ], 2),
    renderSlot(_ctx.$slots, "default")
  ], 64);
}
var Dgroup = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$2]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "Dsubmenu",
  components: {
    Trigger,
    DropdownPanel,
    DropdownOption: Doption,
    IconRight
  },
  props: {
    value: {
      type: [String, Number]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: [String, Array],
      default: "click"
    },
    position: {
      type: String,
      default: "rt"
    },
    popupVisible: {
      type: Boolean,
      default: void 0
    },
    defaultPopupVisible: {
      type: Boolean,
      default: false
    },
    optionProps: {
      type: Object
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true
  },
  setup(props, { emit }) {
    const { defaultPopupVisible, popupVisible } = toRefs(props);
    const prefixCls = getPrefixCls("dropdown");
    const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
      defaultPopupVisible,
      popupVisible,
      emit
    });
    return {
      prefixCls,
      computedPopupVisible,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconRight = resolveComponent("IconRight");
  const _component_dropdown_option = resolveComponent("dropdown-option");
  const _component_dropdown_panel = resolveComponent("dropdown-panel");
  const _component_Trigger = resolveComponent("Trigger");
  return openBlock(), createBlock(_component_Trigger, {
    "popup-visible": _ctx.computedPopupVisible,
    trigger: _ctx.trigger,
    position: _ctx.position,
    disabled: _ctx.disabled,
    "popup-offset": 4,
    onPopupVisibleChange: _ctx.handlePopupVisibleChange
  }, {
    content: withCtx(() => [
      createVNode(_component_dropdown_panel, {
        class: normalizeClass(`${_ctx.prefixCls}-submenu`)
      }, createSlots({
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "content")
        ]),
        _: 2
      }, [
        _ctx.$slots.footer ? {
          name: "footer",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "footer")
          ])
        } : void 0
      ]), 1032, ["class"])
    ]),
    default: withCtx(() => [
      createVNode(_component_dropdown_option, mergeProps(_ctx.optionProps, {
        active: _ctx.computedPopupVisible,
        "uninject-context": ""
      }), createSlots({
        suffix: withCtx(() => [
          renderSlot(_ctx.$slots, "suffix", {}, () => [
            createVNode(_component_IconRight)
          ])
        ]),
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 2
      }, [
        _ctx.$slots.icon ? {
          name: "icon",
          fn: withCtx(() => [
            renderSlot(_ctx.$slots, "icon")
          ])
        } : void 0
      ]), 1040, ["active"])
    ]),
    _: 3
  }, 8, ["popup-visible", "trigger", "position", "disabled", "onPopupVisibleChange"]);
}
var Dsubmenu = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$1]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "DropdownButton",
  components: {
    IconMore,
    Button,
    ButtonGroup,
    Dropdown: _Dropdown
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
    trigger: {
      type: [String, Array],
      default: "click"
    },
    position: {
      type: String,
      default: "br"
    },
    popupContainer: {
      type: [String, Object]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: String
    },
    size: {
      type: String
    },
    buttonProps: {
      type: Object
    },
    hideOnSelect: {
      type: Boolean,
      default: true
    }
  },
  emits: {
    "update:popupVisible": (visible) => true,
    "popupVisibleChange": (visible) => true,
    "click": (ev) => true,
    "select": (value, ev) => true
  },
  setup(props, { emit }) {
    const { defaultPopupVisible, popupVisible } = toRefs(props);
    const prefixCls = getPrefixCls("dropdown");
    const { computedPopupVisible, handlePopupVisibleChange } = useTrigger({
      defaultPopupVisible,
      popupVisible,
      emit
    });
    const handleClick = (ev) => {
      emit("click", ev);
    };
    const handleSelect = (value, ev) => {
      emit("select", value, ev);
    };
    return {
      prefixCls,
      computedPopupVisible,
      handleClick,
      handleSelect,
      handlePopupVisibleChange
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Button = resolveComponent("Button");
  const _component_IconMore = resolveComponent("IconMore");
  const _component_Dropdown = resolveComponent("Dropdown");
  const _component_ButtonGroup = resolveComponent("ButtonGroup");
  return openBlock(), createBlock(_component_ButtonGroup, null, {
    default: withCtx(() => [
      createVNode(_component_Button, mergeProps({
        size: _ctx.size,
        type: _ctx.type,
        disabled: _ctx.disabled
      }, _ctx.buttonProps, { onClick: _ctx.handleClick }), {
        default: withCtx(() => [
          renderSlot(_ctx.$slots, "default")
        ]),
        _: 3
      }, 16, ["size", "type", "disabled", "onClick"]),
      createVNode(_component_Dropdown, {
        "popup-visible": _ctx.computedPopupVisible,
        trigger: _ctx.trigger,
        position: _ctx.position,
        "popup-container": _ctx.popupContainer,
        "hide-on-select": _ctx.hideOnSelect,
        onSelect: _ctx.handleSelect,
        onPopupVisibleChange: _ctx.handlePopupVisibleChange
      }, {
        content: withCtx(() => [
          renderSlot(_ctx.$slots, "content")
        ]),
        default: withCtx(() => [
          createVNode(_component_Button, {
            size: _ctx.size,
            type: _ctx.type,
            disabled: _ctx.disabled
          }, {
            icon: withCtx(() => [
              renderSlot(_ctx.$slots, "icon", { popupVisible: _ctx.computedPopupVisible }, () => [
                createVNode(_component_IconMore)
              ])
            ]),
            _: 3
          }, 8, ["size", "type", "disabled"])
        ]),
        _: 3
      }, 8, ["popup-visible", "trigger", "position", "popup-container", "hide-on-select", "onSelect", "onPopupVisibleChange"])
    ]),
    _: 3
  });
}
var DropdownButton = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render]]);
const Dropdown = Object.assign(_Dropdown, {
  Option: Doption,
  Group: Dgroup,
  Submenu: Dsubmenu,
  Button: DropdownButton,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Dropdown.name, _Dropdown);
    app.component(componentPrefix + Doption.name, Doption);
    app.component(componentPrefix + Dgroup.name, Dgroup);
    app.component(componentPrefix + Dsubmenu.name, Dsubmenu);
    app.component(componentPrefix + DropdownButton.name, DropdownButton);
  }
});
const index = "";
const _imports_0 = "" + __publicAssetsURL("images/openMembership.png");
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const { userInfo, logoutUser } = useUser();
    const keyword = ref("");
    const menuList = [
      {
        name: "首页",
        path: "/",
        startsPath: "/index"
      },
      ...routeMenuList
      // 路由菜单
    ];
    const moreMenuList = [
      {
        name: "批次查询",
        path: "/batch"
      },
      {
        name: "位次查询",
        path: "/rank"
      },
      {
        name: "大学排名",
        path: "/schoolRank"
      },
      {
        name: "职业库",
        path: "/jobLibrary"
      }
    ];
    const personalMenuList = [
      {
        name: "我的志愿",
        path: "/personal?tab=myVolunteer",
        icon: "icon-dingdan"
      },
      {
        name: "我的测评",
        path: "/personal?tab=myEvaluation",
        icon: "icon-guanzhu"
      },
      {
        name: "个人资料",
        path: "/personal?tab=personalData",
        icon: "icon-wodeguanzhu"
      },
      {
        name: "我的关注",
        path: "/personal?tab=myAttention",
        icon: "icon-yixiangkan"
      },
      {
        name: "专属码绑定",
        path: "/personal?tab=exclusiveCode",
        icon: "icon-dianyingpiao"
      }
    ];
    watch(
      () => route.path,
      async () => {
        if (route.path === "/search" && route.query.keyword) {
          keyword.value = route.query.keyword;
        } else {
          keyword.value = "";
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_nuxt_img = _sfc_main$a;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_a_space = Space;
      const _component_client_only = __nuxt_component_1;
      const _component_icon_down = IconDown;
      const _component_a_button = Button;
      const _component_a_popover = Popover;
      const _component_a_grid = Grid;
      const _component_a_grid_item = GridItem;
      const _component_a_dropdown = Dropdown;
      const _component_icon_more_vertical = IconMoreVertical;
      const _component_a_doption = Doption;
      _push(`<header${ssrRenderAttrs(_attrs)} data-v-b963fd29><div class="h-[80px] inset-x-0 bg-white border-b" data-v-b963fd29><div class="max-w-container mx-auto flex justify-between items-center px-[10px] h-full" data-v-b963fd29>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="flex items-center" data-v-b963fd29${_scopeId}>`);
            _push2(ssrRenderComponent(_component_nuxt_img, {
              src: "/images/logo@2x.png",
              width: "46",
              height: "46"
            }, null, _parent2, _scopeId));
            _push2(`<div class="ml-[6px] flex flex-col justify-center" data-v-b963fd29${_scopeId}><div class="font-bold text-[22px] leading-none" data-v-b963fd29${_scopeId}>毕业之家</div><div class="text-[12px] text-[#999999] mt-[3px]" data-v-b963fd29${_scopeId}>www.biye.cc</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "flex items-center" }, [
                createVNode(_component_nuxt_img, {
                  src: "/images/logo@2x.png",
                  width: "46",
                  height: "46"
                }),
                createVNode("div", { class: "ml-[6px] flex flex-col justify-center" }, [
                  createVNode("div", { class: "font-bold text-[22px] leading-none" }, "毕业之家"),
                  createVNode("div", { class: "text-[12px] text-[#999999] mt-[3px]" }, "www.biye.cc")
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-[460px] rounded-[8px]" data-v-b963fd29>`);
      _push(ssrRenderComponent(_component_a_input, {
        size: "large",
        modelValue: unref(keyword),
        "onUpdate:modelValue": ($event) => isRef(keyword) ? keyword.value = $event : null,
        modelModifiers: { trim: true },
        class: "rounded8 h-[44px]",
        placeholder: "搜索院校、专业、职业",
        onChange: ($event) => unref(keyword) ? ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/search?keyword=${unref(keyword)}`) : ""
      }, {
        suffix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-[#86909C]/50" data-v-b963fd29${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon_search, {
              size: 18,
              class: "cursor-pointer",
              onClick: ($event) => unref(keyword) ? ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/search?keyword=${unref(keyword)}`) : ""
            }, null, _parent2, _scopeId));
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "text-[#86909C]/50" }, [
                createVNode(_component_icon_search, {
                  size: 18,
                  class: "cursor-pointer",
                  onClick: ($event) => unref(keyword) ? ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/search?keyword=${unref(keyword)}`) : ""
                }, null, 8, ["onClick"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_a_space, { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(ssrRenderComponent(_component_client_only, null, {}, _parent2, _scopeId));
            if (unref(userInfo).score) {
              _push2(`<div class="text-[15px] font-bold cursor-pointer" data-v-b963fd29${_scopeId}><span data-v-b963fd29${_scopeId}>${ssrInterpolate(unref(userInfo).xk)}</span><span data-v-b963fd29${_scopeId}>${ssrInterpolate(unref(userInfo).score)}</span><i class="iconfont icon-chuangzuo font-bold ml-[5px]" data-v-b963fd29${_scopeId}></i></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (((_a = unref(userInfo)) == null ? void 0 : _a.vipStateValue) != "1") {
              _push2(`<div class="w-[40px] h-[40px] leading-[40px] text-[#999999] bg-[#F5F5F5] text-center font-bold rounded-[8px] cursor-pointer" data-v-b963fd29${_scopeId}> VIP </div>`);
            } else {
              _push2(`<div class="px-[10px] rounded-[20px] bg-[#FFA864] text-white leading-[32px] f-c-c cursor-pointer" data-v-b963fd29${_scopeId}><div class="font-bold text-[14px]" data-v-b963fd29${_scopeId}>至尊</div><div class="f-c-c" data-v-b963fd29${_scopeId}><i class="iconfont icon-f-vip fontSize text-center" data-v-b963fd29${_scopeId}></i></div></div>`);
            }
            if (!unref(userInfo).phone) {
              _push2(ssrRenderComponent(_component_a_button, {
                type: "primary",
                size: "large",
                shape: "round",
                onClick: ($event) => unref(userInfo).loginModal = true
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` 登录 / 注册 `);
                  } else {
                    return [
                      createTextVNode(" 登录 / 注册 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<div class="cursor-pointer" data-v-b963fd29${_scopeId}>`);
              _push2(ssrRenderComponent(_component_a_popover, null, {
                content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2, _c, _d, _e, _f, _g, _h;
                  if (_push3) {
                    _push3(`<div class="flex items-center" data-v-b963fd29${_scopeId2}><img${ssrRenderAttr(
                      "src",
                      unref(userInfo).header ? unref(userInfo).header : "/images/avatar.png"
                    )} class="w-[40px] h-[40px] mr-[10px] rounded-[50%]" alt="" data-v-b963fd29${_scopeId2}><div data-v-b963fd29${_scopeId2}><div class="flex items-center" data-v-b963fd29${_scopeId2}><div data-v-b963fd29${_scopeId2}>${ssrInterpolate(("hidePhoneFormat" in _ctx ? _ctx.hidePhoneFormat : unref(hidePhoneFormat))(unref(userInfo).phone))}</div>`);
                    if (((_a2 = unref(userInfo)) == null ? void 0 : _a2.vipStateValue) == "1") {
                      _push3(`<div class="text-[12px] h-[16px] leading-[16px] text-white flex items-center justify-center text-center bg-[#FFA864] rounded-[20px] ml-[8px] w-[130px]" data-v-b963fd29${_scopeId2}>`);
                      if (((_b2 = unref(userInfo)) == null ? void 0 : _b2.vipType) != "0") {
                        _push3(`<span data-v-b963fd29${_scopeId2}>${ssrInterpolate(((_c = unref(userInfo)) == null ? void 0 : _c.vipType) == "1-1" ? "专家在线辅助填报" : "专家一对一填报")}</span>`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`<i class="iconfont icon-f-vip" data-v-b963fd29${_scopeId2}></i></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div><div data-v-b963fd29${_scopeId2}><span data-v-b963fd29${_scopeId2}>${ssrInterpolate(unref(userInfo).province)}</span>`);
                    if (unref(userInfo).xk) {
                      _push3(`<span class="mx-[3px]" data-v-b963fd29${_scopeId2}>${ssrInterpolate(unref(userInfo).xk)}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(userInfo).score) {
                      _push3(`<span data-v-b963fd29${_scopeId2}>${ssrInterpolate(unref(userInfo).score + "分")}</span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div></div></div>`);
                    if (((_d = unref(userInfo)) == null ? void 0 : _d.vipStateValue) != "1") {
                      _push3(`<img${ssrRenderAttr("src", _imports_0)} class="w-[282px] mt-[20px] cursor-pointer" alt="" data-v-b963fd29${_scopeId2}>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(ssrRenderComponent(_component_a_grid, {
                      cols: 3,
                      colGap: 12,
                      rowGap: 16,
                      class: "mt-[20px]"
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(personalMenuList, (item) => {
                            _push4(ssrRenderComponent(_component_a_grid_item, {
                              key: item.name
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_nuxt_link, {
                                    to: item.path
                                  }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="f-c-c flex-col" data-v-b963fd29${_scopeId5}><div data-v-b963fd29${_scopeId5}><i class="${ssrRenderClass([item.icon, "iconfont text-[18px] font-bold"])}" data-v-b963fd29${_scopeId5}></i></div><div data-v-b963fd29${_scopeId5}>${ssrInterpolate(item.name)}</div></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "f-c-c flex-col" }, [
                                            createVNode("div", null, [
                                              createVNode("i", {
                                                class: ["iconfont text-[18px] font-bold", item.icon]
                                              }, null, 2)
                                            ]),
                                            createVNode("div", null, toDisplayString(item.name), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_nuxt_link, {
                                      to: item.path
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "f-c-c flex-col" }, [
                                          createVNode("div", null, [
                                            createVNode("i", {
                                              class: ["iconfont text-[18px] font-bold", item.icon]
                                            }, null, 2)
                                          ]),
                                          createVNode("div", null, toDisplayString(item.name), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["to"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                          _push4(ssrRenderComponent(_component_a_grid_item, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="f-c-c flex-col cursor-pointer" data-v-b963fd29${_scopeId4}><div data-v-b963fd29${_scopeId4}><i class="iconfont icon-fenxiang text-[18px] font-bold" data-v-b963fd29${_scopeId4}></i></div><div data-v-b963fd29${_scopeId4}>退出登录</div></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "f-c-c flex-col cursor-pointer",
                                    onClick: ($event) => unref(logoutUser)()
                                  }, [
                                    createVNode("div", null, [
                                      createVNode("i", { class: "iconfont icon-fenxiang text-[18px] font-bold" })
                                    ]),
                                    createVNode("div", null, "退出登录")
                                  ], 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            (openBlock(), createBlock(Fragment, null, renderList(personalMenuList, (item) => {
                              return createVNode(_component_a_grid_item, {
                                key: item.name
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_nuxt_link, {
                                    to: item.path
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "f-c-c flex-col" }, [
                                        createVNode("div", null, [
                                          createVNode("i", {
                                            class: ["iconfont text-[18px] font-bold", item.icon]
                                          }, null, 2)
                                        ]),
                                        createVNode("div", null, toDisplayString(item.name), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1032, ["to"])
                                ]),
                                _: 2
                              }, 1024);
                            }), 64)),
                            createVNode(_component_a_grid_item, null, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "f-c-c flex-col cursor-pointer",
                                  onClick: ($event) => unref(logoutUser)()
                                }, [
                                  createVNode("div", null, [
                                    createVNode("i", { class: "iconfont icon-fenxiang text-[18px] font-bold" })
                                  ]),
                                  createVNode("div", null, "退出登录")
                                ], 8, ["onClick"])
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("img", {
                          src: unref(userInfo).header ? unref(userInfo).header : "/images/avatar.png",
                          class: "w-[40px] h-[40px] mr-[10px] rounded-[50%]",
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("div", null, toDisplayString(("hidePhoneFormat" in _ctx ? _ctx.hidePhoneFormat : unref(hidePhoneFormat))(unref(userInfo).phone)), 1),
                            ((_e = unref(userInfo)) == null ? void 0 : _e.vipStateValue) == "1" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-[12px] h-[16px] leading-[16px] text-white flex items-center justify-center text-center bg-[#FFA864] rounded-[20px] ml-[8px] w-[130px]"
                            }, [
                              ((_f = unref(userInfo)) == null ? void 0 : _f.vipType) != "0" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(((_g = unref(userInfo)) == null ? void 0 : _g.vipType) == "1-1" ? "专家在线辅助填报" : "专家一对一填报"), 1)) : createCommentVNode("", true),
                              createVNode("i", { class: "iconfont icon-f-vip" })
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, toDisplayString(unref(userInfo).province), 1),
                            unref(userInfo).xk ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "mx-[3px]"
                            }, toDisplayString(unref(userInfo).xk), 1)) : createCommentVNode("", true),
                            unref(userInfo).score ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(userInfo).score + "分"), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      ((_h = unref(userInfo)) == null ? void 0 : _h.vipStateValue) != "1" ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: _imports_0,
                        class: "w-[282px] mt-[20px] cursor-pointer",
                        alt: "",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/personal?tab=memberCenter")
                      }, null, 8, ["onClick"])) : createCommentVNode("", true),
                      createVNode(_component_a_grid, {
                        cols: 3,
                        colGap: 12,
                        rowGap: 16,
                        class: "mt-[20px]"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(personalMenuList, (item) => {
                            return createVNode(_component_a_grid_item, {
                              key: item.name
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: item.path
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "f-c-c flex-col" }, [
                                      createVNode("div", null, [
                                        createVNode("i", {
                                          class: ["iconfont text-[18px] font-bold", item.icon]
                                        }, null, 2)
                                      ]),
                                      createVNode("div", null, toDisplayString(item.name), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64)),
                          createVNode(_component_a_grid_item, null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "f-c-c flex-col cursor-pointer",
                                onClick: ($event) => unref(logoutUser)()
                              }, [
                                createVNode("div", null, [
                                  createVNode("i", { class: "iconfont icon-fenxiang text-[18px] font-bold" })
                                ]),
                                createVNode("div", null, "退出登录")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center" data-v-b963fd29${_scopeId2}><img${ssrRenderAttr("src", unref(userInfo).header ? unref(userInfo).header : "/images/avatar.png")} class="w-[40px] h-[40px] rounded-[50%]" alt="" data-v-b963fd29${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_icon_down, { class: "ml-[5px]" }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("img", {
                          src: unref(userInfo).header ? unref(userInfo).header : "/images/avatar.png",
                          class: "w-[40px] h-[40px] rounded-[50%]",
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode(_component_icon_down, { class: "ml-[5px]" })
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              createVNode(_component_client_only, null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "flex items-center cursor-pointer text-[16px] text-[#333]",
                    onClick: ($event) => unref(userInfo).province ? "" : unref(userInfo).provinceModel = true
                  }, [
                    createTextVNode(toDisplayString(unref(userInfo).province ?? "省份") + " ", 1),
                    createVNode(_component_icon_down, { class: "ml-[5px]" })
                  ], 8, ["onClick"])
                ]),
                _: 1
              }),
              unref(userInfo).score ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-[15px] font-bold cursor-pointer",
                onClick: ($event) => unref(userInfo).userInfoModal = true
              }, [
                createVNode("span", null, toDisplayString(unref(userInfo).xk), 1),
                createVNode("span", null, toDisplayString(unref(userInfo).score), 1),
                createVNode("i", { class: "iconfont icon-chuangzuo font-bold ml-[5px]" })
              ], 8, ["onClick"])) : createCommentVNode("", true),
              ((_b = unref(userInfo)) == null ? void 0 : _b.vipStateValue) != "1" ? (openBlock(), createBlock("div", {
                key: 1,
                class: "w-[40px] h-[40px] leading-[40px] text-[#999999] bg-[#F5F5F5] text-center font-bold rounded-[8px] cursor-pointer",
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/personal?tab=memberCenter")
              }, " VIP ", 8, ["onClick"])) : (openBlock(), createBlock("div", {
                key: 2,
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/personal?tab=memberCenter"),
                class: "px-[10px] rounded-[20px] bg-[#FFA864] text-white leading-[32px] f-c-c cursor-pointer"
              }, [
                createVNode("div", { class: "font-bold text-[14px]" }, "至尊"),
                createVNode("div", { class: "f-c-c" }, [
                  createVNode("i", { class: "iconfont icon-f-vip fontSize text-center" })
                ])
              ], 8, ["onClick"])),
              !unref(userInfo).phone ? (openBlock(), createBlock(_component_a_button, {
                key: 3,
                type: "primary",
                size: "large",
                shape: "round",
                onClick: ($event) => unref(userInfo).loginModal = true
              }, {
                default: withCtx(() => [
                  createTextVNode(" 登录 / 注册 ")
                ]),
                _: 1
              }, 8, ["onClick"])) : (openBlock(), createBlock("div", {
                key: 4,
                class: "cursor-pointer"
              }, [
                createVNode(_component_a_popover, null, {
                  content: withCtx(() => {
                    var _a2, _b2, _c, _d;
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("img", {
                          src: unref(userInfo).header ? unref(userInfo).header : "/images/avatar.png",
                          class: "w-[40px] h-[40px] mr-[10px] rounded-[50%]",
                          alt: ""
                        }, null, 8, ["src"]),
                        createVNode("div", null, [
                          createVNode("div", { class: "flex items-center" }, [
                            createVNode("div", null, toDisplayString(("hidePhoneFormat" in _ctx ? _ctx.hidePhoneFormat : unref(hidePhoneFormat))(unref(userInfo).phone)), 1),
                            ((_a2 = unref(userInfo)) == null ? void 0 : _a2.vipStateValue) == "1" ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "text-[12px] h-[16px] leading-[16px] text-white flex items-center justify-center text-center bg-[#FFA864] rounded-[20px] ml-[8px] w-[130px]"
                            }, [
                              ((_b2 = unref(userInfo)) == null ? void 0 : _b2.vipType) != "0" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(((_c = unref(userInfo)) == null ? void 0 : _c.vipType) == "1-1" ? "专家在线辅助填报" : "专家一对一填报"), 1)) : createCommentVNode("", true),
                              createVNode("i", { class: "iconfont icon-f-vip" })
                            ])) : createCommentVNode("", true)
                          ]),
                          createVNode("div", null, [
                            createVNode("span", null, toDisplayString(unref(userInfo).province), 1),
                            unref(userInfo).xk ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "mx-[3px]"
                            }, toDisplayString(unref(userInfo).xk), 1)) : createCommentVNode("", true),
                            unref(userInfo).score ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(userInfo).score + "分"), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ]),
                      ((_d = unref(userInfo)) == null ? void 0 : _d.vipStateValue) != "1" ? (openBlock(), createBlock("img", {
                        key: 0,
                        src: _imports_0,
                        class: "w-[282px] mt-[20px] cursor-pointer",
                        alt: "",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))("/personal?tab=memberCenter")
                      }, null, 8, ["onClick"])) : createCommentVNode("", true),
                      createVNode(_component_a_grid, {
                        cols: 3,
                        colGap: 12,
                        rowGap: 16,
                        class: "mt-[20px]"
                      }, {
                        default: withCtx(() => [
                          (openBlock(), createBlock(Fragment, null, renderList(personalMenuList, (item) => {
                            return createVNode(_component_a_grid_item, {
                              key: item.name
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_nuxt_link, {
                                  to: item.path
                                }, {
                                  default: withCtx(() => [
                                    createVNode("div", { class: "f-c-c flex-col" }, [
                                      createVNode("div", null, [
                                        createVNode("i", {
                                          class: ["iconfont text-[18px] font-bold", item.icon]
                                        }, null, 2)
                                      ]),
                                      createVNode("div", null, toDisplayString(item.name), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 64)),
                          createVNode(_component_a_grid_item, null, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "f-c-c flex-col cursor-pointer",
                                onClick: ($event) => unref(logoutUser)()
                              }, [
                                createVNode("div", null, [
                                  createVNode("i", { class: "iconfont icon-fenxiang text-[18px] font-bold" })
                                ]),
                                createVNode("div", null, "退出登录")
                              ], 8, ["onClick"])
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ];
                  }),
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("img", {
                        src: unref(userInfo).header ? unref(userInfo).header : "/images/avatar.png",
                        class: "w-[40px] h-[40px] rounded-[50%]",
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode(_component_icon_down, { class: "ml-[5px]" })
                    ])
                  ]),
                  _: 1
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="w-full h-[48px] leading-[48px] bg-[#7C92FF]" data-v-b963fd29><div class="max-w-container mx-auto flex items-center justify-between" data-v-b963fd29><div class="flex" data-v-b963fd29><!--[-->`);
      ssrRenderList(menuList, (item) => {
        _push(`<div data-v-b963fd29>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="${ssrRenderClass([{
                "bg-[#657FFF]": unref(route).path.startsWith(
                  item.startsPath ?? item.path
                )
              }, "text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] text-[16px] cursor-pointer font-medium"])}" data-v-b963fd29${_scopeId}>${ssrInterpolate(item.name)}</div>`);
            } else {
              return [
                createVNode("div", {
                  class: ["text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] text-[16px] cursor-pointer font-medium", {
                    "bg-[#657FFF]": unref(route).path.startsWith(
                      item.startsPath ?? item.path
                    )
                  }]
                }, toDisplayString(item.name), 3)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_a_dropdown, {
        trigger: "hover",
        size: "large"
      }, {
        content: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(moreMenuList, (item) => {
              _push2(ssrRenderComponent(_component_nuxt_link, {
                to: item.path
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_doption, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="px-[20px] py-[0] h-[45px] hover:text-[#1677ff]] text-[14px] leading-[45px]" data-v-b963fd29${_scopeId3}>${ssrInterpolate(item.name)}</div>`);
                        } else {
                          return [
                            createVNode("div", { class: "px-[20px] py-[0] h-[45px] hover:text-[#1677ff]] text-[14px] leading-[45px]" }, toDisplayString(item.name), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_doption, null, {
                        default: withCtx(() => [
                          createVNode("div", { class: "px-[20px] py-[0] h-[45px] hover:text-[#1677ff]] text-[14px] leading-[45px]" }, toDisplayString(item.name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(moreMenuList, (item) => {
                return createVNode(_component_nuxt_link, {
                  to: item.path
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_doption, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "px-[20px] py-[0] h-[45px] hover:text-[#1677ff]] text-[14px] leading-[45px]" }, toDisplayString(item.name), 1)
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1032, ["to"]);
              }), 64))
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] flex items-center text-[16px] cursor-pointer" data-v-b963fd29${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon_more_vertical, { size: 16 }, null, _parent2, _scopeId));
            _push2(` 更多 </div>`);
          } else {
            return [
              createVNode("div", { class: "text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] flex items-center text-[16px] cursor-pointer" }, [
                createVNode(_component_icon_more_vertical, { size: 16 }),
                createTextVNode(" 更多 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_nuxt_link, { to: "/personal?tab=myVolunteer" }, {
        default: withCtx(({ isActive }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(userInfo).phone) {
              _push2(`<div class="${ssrRenderClass([isActive ? "bg-[#657FFF]" : "", "text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] text-[16px]"])}" data-v-b963fd29${_scopeId}> 个人中心 </div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              unref(userInfo).phone ? (openBlock(), createBlock("div", {
                key: 0,
                class: ["text-white px-[20px] py-[0] h-[48px] hover:bg-[#657FFF] text-[16px]", isActive ? "bg-[#657FFF]" : ""]
              }, " 个人中心 ", 2)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></header>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_b963fd29_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsHeader/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-b963fd29"]]);
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  const _component_a_image = Image;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-[#333] pt-[20px] pb-[20px] mt-[50px] px-[10px]" }, _attrs))}><div class="max-w-container mx-auto h-full flex items-center justify-between"><div><!--[-->`);
  ssrRenderList("routeMenuList" in _ctx ? _ctx.routeMenuList : unref(routeMenuList), (item) => {
    _push(`<span class="cursor-pointer mr-[20px] text-[#999999] hover:text-[#657FFF]">`);
    _push(ssrRenderComponent(_component_nuxt_link, {
      to: item.path
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`${ssrInterpolate(item.name)}`);
        } else {
          return [
            createTextVNode(toDisplayString(item.name), 1)
          ];
        }
      }),
      _: 2
    }, _parent));
    _push(`</span>`);
  });
  _push(`<!--]--><div class="mt-[40px] text-[#999999]"> Copyright © 2024 四川毕业之家科技有限公司 蜀ICP备2023034485号-1 联系电话：4000663985 </div></div><div class="flex flex-col items-center justify-center">`);
  _push(ssrRenderComponent(_component_a_image, {
    src: "/images/qrCode.png",
    width: "120",
    class: "rounded-[5px_5px] cursor-zoom-in",
    height: "120"
  }, null, _parent));
  _push(`<div class="text-[#999999] mt-[10px]">毕业之家-升学规划小程序</div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsFooter/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_zs_header = __nuxt_component_0;
  const _component_client_only = __nuxt_component_1;
  const _component_zs_footer = __nuxt_component_2;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_zs_header, null, null, _parent));
  _push(ssrRenderComponent(_component_client_only, null, null, _parent));
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(ssrRenderComponent(_component_zs_footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _default as default
};
//# sourceMappingURL=default-3a6357fc.js.map
