import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { _ as _sfc_main$6 } from './NuxtImg-9bcbe2bb.mjs';
import { F as Form, a as FormItem } from './index-d47379ff.mjs';
import { a as CheckboxGroup, C as Checkbox } from './index-11d38f35.mjs';
import { S as Space } from './index-8bcd588e.mjs';
import { I as InputNumber, T as Tag } from './index-08fdf206.mjs';
import { s as setGlobalConfig, a as getComponentPrefix, _ as _export_sfc$1, g as getPrefixCls, f as getAllElements, B as Button, i as isNumber, I as IconLoading } from './use-teleport-container-1599a5a4.mjs';
import { G as Grid, a as GridItem, u as useIndex } from './index-4ecc34e0.mjs';
import { R as ResizeObserver } from './index-dd449d78.mjs';
import { b as useUser, u as useHead, d as useWebsiteInformation, A as API_URLS, n as navigateTo, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, toRefs, ref, provide, reactive, createVNode, createTextVNode, watch, unref, withCtx, toDisplayString, openBlock, createBlock, Fragment, renderList, computed, createElementBlock, normalizeClass, normalizeStyle, inject, resolveComponent, createElementVNode, renderSlot, createCommentVNode, nextTick } from 'vue';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { F as FIRST_CHOICE_SCIENCES_OPTIONS, S as SECOND_CHOICE_SCIENCES_OPTIONS, b as SUBJECT_OPTIONS, f as findOptions } from './options-7ec13930.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderAttr } from 'vue/server-renderer';
import { Pagination, Autoplay } from 'swiper/modules';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-99c863e4.mjs';
import { _ as _sfc_main$7 } from './index-cb5bd3b8.mjs';
import { C as Card } from './index-62ae8a6f.mjs';
import { I as IconImageClose } from './index-3943ca28.mjs';
import { P as Popover } from './index-a533a6fc.mjs';
import { a as turnThousandth } from './index-a008b2db.mjs';
import 'vue-bundle-renderer/runtime';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import '@iconify/utils';
import 'consola/core';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'compute-scroll-into-view';
import 'b-validate';
import './index-5f48af9c.mjs';
import './get-value-by-path-11166a95.mjs';
import 'number-precision';
import 'resize-observer-polyfill';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@iconify/vue';

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  name: "IconSync",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-sync`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("path", { d: "M11.98 11.703c-6.64 6.64-6.64 17.403 0 24.042a16.922 16.922 0 0 0 8.942 4.7M34.603 37.156l1.414-1.415c6.64-6.639 6.64-17.402 0-24.041A16.922 16.922 0 0 0 27.075 7M14.81 11.982l-1.414-1.414-1.414-1.414h2.829v2.828ZM33.192 36.02l1.414 1.414 1.414 1.415h-2.828V36.02Z" }, null, -1);
const _hoisted_3$1 = [
  _hoisted_2$1
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
  }, _hoisted_3$1, 14, _hoisted_1$3);
}
var _IconSync = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["render", _sfc_render$3]]);
const IconSync = Object.assign(_IconSync, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconSync.name, _IconSync);
  }
});
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  name: "IconLink",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-link`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "m14.1 25.414-4.95 4.95a6 6 0 0 0 8.486 8.485l8.485-8.485a6 6 0 0 0 0-8.485m7.779.707 4.95-4.95a6 6 0 1 0-8.486-8.485l-8.485 8.485a6 6 0 0 0 0 8.485" }, null, -1);
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
  }, _hoisted_3, 14, _hoisted_1$2);
}
var _IconLink = /* @__PURE__ */ _export_sfc$1(_sfc_main$4, [["render", _sfc_render$2]]);
const IconLink = Object.assign(_IconLink, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconLink.name, _IconLink);
  }
});
const avatarGroupInjectionKey = Symbol("ArcoAvatarGroup");
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
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "Avatar",
  components: {
    ResizeObserver,
    IconImageClose,
    IconLoading
  },
  props: {
    shape: {
      type: String,
      default: "circle"
    },
    imageUrl: String,
    size: Number,
    autoFixFontSize: {
      type: Boolean,
      default: true
    },
    triggerType: {
      type: String,
      default: "button"
    },
    triggerIconStyle: {
      type: Object
    },
    objectFit: {
      type: String
    }
  },
  emits: {
    click: (ev) => true,
    error: () => true,
    load: () => true
  },
  setup(props, { slots, emit, attrs }) {
    const { shape, size, autoFixFontSize, triggerType, triggerIconStyle } = toRefs(props);
    const prefixCls = getPrefixCls("avatar");
    const groupCtx = inject(avatarGroupInjectionKey, void 0);
    const itemRef = ref();
    const wrapperRef = ref();
    const mergedShape = computed(() => {
      var _a;
      return (_a = groupCtx == null ? void 0 : groupCtx.shape) != null ? _a : shape.value;
    });
    const mergedSize = computed(() => {
      var _a;
      return (_a = groupCtx == null ? void 0 : groupCtx.size) != null ? _a : size.value;
    });
    const mergedAutoFixFontSize = computed(() => {
      var _a;
      return (_a = groupCtx == null ? void 0 : groupCtx.autoFixFontSize) != null ? _a : autoFixFontSize.value;
    });
    const isImage = ref(false);
    const hasError = ref(false);
    const shouldLoad = ref(true);
    const isLoaded = ref(false);
    const index2 = groupCtx ? useIndex({
      itemRef,
      selector: `.${prefixCls}`
    }).computedIndex : ref(-1);
    const outerStyle = computed(() => {
      var _a;
      const style = isNumber(mergedSize.value) ? {
        width: `${mergedSize.value}px`,
        height: `${mergedSize.value}px`,
        fontSize: `${mergedSize.value / 2}px`
      } : {};
      if (groupCtx) {
        style.zIndex = groupCtx.zIndexAscend ? index2.value + 1 : groupCtx.total - index2.value;
        style.marginLeft = index2.value !== 0 ? `-${((_a = mergedSize.value) != null ? _a : 40) / 4}px` : "0";
      }
      return style;
    });
    const computedTriggerIconStyle = useTriggerIconStyle({
      triggerIconStyle: triggerIconStyle == null ? void 0 : triggerIconStyle.value,
      inlineStyle: attrs.style,
      triggerType: triggerType.value
    });
    const autoFixFontSizeHandler = () => {
      if (!isImage.value && !props.imageUrl) {
        nextTick(() => {
          var _a;
          if (!wrapperRef.value || !itemRef.value) {
            return;
          }
          const textWidth = wrapperRef.value.clientWidth;
          const avatarWidth = (_a = mergedSize.value) != null ? _a : itemRef.value.offsetWidth;
          const scale = avatarWidth / (textWidth + 8);
          if (avatarWidth && scale < 1) {
            wrapperRef.value.style.transform = `scale(${scale}) translateX(-50%)`;
          }
          shouldLoad.value = true;
        });
      }
    };
    watch(size, () => {
      if (mergedAutoFixFontSize.value) {
        autoFixFontSizeHandler();
      }
    });
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-${mergedShape.value}`
    ]);
    const wrapperCls = computed(() => isImage.value || props.imageUrl ? `${prefixCls}-image` : `${prefixCls}-text`);
    const onClick = (e) => {
      emit("click", e);
    };
    const handleResize = () => {
      if (mergedAutoFixFontSize.value) {
        autoFixFontSizeHandler();
      }
    };
    const handleImgLoad = () => {
      isLoaded.value = true;
      emit("load");
    };
    const handleImgError = () => {
      hasError.value = true;
      emit("error");
    };
    return {
      prefixCls,
      itemRef,
      cls,
      outerStyle,
      wrapperRef,
      wrapperCls,
      computedTriggerIconStyle,
      isImage,
      shouldLoad,
      isLoaded,
      hasError,
      onClick,
      handleResize,
      handleImgLoad,
      handleImgError
    };
  }
});
const useTriggerIconStyle = ({
  triggerType,
  inlineStyle = {},
  triggerIconStyle = {}
}) => {
  let addon = {};
  if (triggerType === "button" && (!triggerIconStyle || triggerIconStyle && !triggerIconStyle.color) && inlineStyle && inlineStyle.backgroundColor) {
    addon = { color: inlineStyle.backgroundColor };
  }
  return __spreadValues(__spreadValues({}, triggerIconStyle), addon);
};
const _hoisted_1$1 = ["src"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconImageClose = resolveComponent("IconImageClose");
  const _component_IconLoading = resolveComponent("IconLoading");
  const _component_resize_observer = resolveComponent("resize-observer");
  return openBlock(), createElementBlock("div", {
    ref: "itemRef",
    style: normalizeStyle(_ctx.outerStyle),
    class: normalizeClass([
      _ctx.cls,
      {
        [`${_ctx.prefixCls}-with-trigger-icon`]: Boolean(_ctx.$slots["trigger-icon"])
      }
    ]),
    onClick: _cache[2] || (_cache[2] = (...args) => _ctx.onClick && _ctx.onClick(...args))
  }, [
    createVNode(_component_resize_observer, { onResize: _ctx.handleResize }, {
      default: withCtx(() => [
        createElementVNode("span", {
          ref: "wrapperRef",
          class: normalizeClass(_ctx.wrapperCls)
        }, [
          _ctx.imageUrl ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            _ctx.hasError ? renderSlot(_ctx.$slots, "error", { key: 0 }, () => [
              createElementVNode("div", {
                class: normalizeClass(`${_ctx.prefixCls}-image-icon`)
              }, [
                createVNode(_component_IconImageClose)
              ], 2)
            ]) : createCommentVNode("v-if", true),
            !(_ctx.hasError || !_ctx.shouldLoad) && !_ctx.isLoaded ? renderSlot(_ctx.$slots, "default", { key: 1 }, () => [
              createElementVNode("div", {
                class: normalizeClass(`${_ctx.prefixCls}-image-icon`)
              }, [
                createVNode(_component_IconLoading)
              ], 2)
            ]) : createCommentVNode("v-if", true),
            !(_ctx.hasError || !_ctx.shouldLoad) ? (openBlock(), createElementBlock("img", {
              key: 2,
              src: _ctx.imageUrl,
              style: normalizeStyle({
                width: _ctx.size + "px",
                height: _ctx.size + "px",
                objectFit: _ctx.objectFit
              }),
              alt: "avatar",
              onLoad: _cache[0] || (_cache[0] = (...args) => _ctx.handleImgLoad && _ctx.handleImgLoad(...args)),
              onError: _cache[1] || (_cache[1] = (...args) => _ctx.handleImgError && _ctx.handleImgError(...args))
            }, null, 44, _hoisted_1$1)) : createCommentVNode("v-if", true)
          ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 })
        ], 2)
      ]),
      _: 3
    }, 8, ["onResize"]),
    _ctx.$slots["trigger-icon"] ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-trigger-icon-${_ctx.triggerType}`),
      style: normalizeStyle(_ctx.computedTriggerIconStyle)
    }, [
      renderSlot(_ctx.$slots, "trigger-icon")
    ], 6)) : createCommentVNode("v-if", true)
  ], 6);
}
var _Avatar = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["render", _sfc_render$1]]);
const AvatarGroup = /* @__PURE__ */ defineComponent({
  name: "AvatarGroup",
  props: {
    shape: {
      type: String,
      default: "circle"
    },
    size: Number,
    autoFixFontSize: {
      type: Boolean,
      default: true
    },
    maxCount: {
      type: Number,
      default: 0
    },
    zIndexAscend: {
      type: Boolean,
      default: false
    },
    maxStyle: {
      type: Object
    },
    maxPopoverTriggerProps: {
      type: Object
    }
  },
  setup(props, {
    slots
  }) {
    const {
      shape,
      size,
      autoFixFontSize,
      zIndexAscend
    } = toRefs(props);
    const prefixCls = getPrefixCls("avatar-group");
    const total = ref(0);
    provide(avatarGroupInjectionKey, reactive({
      shape,
      size,
      autoFixFontSize,
      zIndexAscend,
      total
    }));
    return () => {
      var _a, _b;
      const children = getAllElements((_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) != null ? _b : []);
      const avatarsToRender = props.maxCount > 0 ? children.slice(0, props.maxCount) : children;
      const avatarsInPopover = props.maxCount > 0 ? children.slice(props.maxCount) : [];
      if (total.value !== children.length) {
        total.value = children.length;
      }
      return createVNode("div", {
        "class": prefixCls
      }, [avatarsToRender, avatarsInPopover.length > 0 && createVNode(Popover, props.maxPopoverTriggerProps, {
        default: () => [createVNode(_Avatar, {
          "class": `${prefixCls}-max-count-avatar`,
          "style": props.maxStyle
        }, {
          default: () => [createTextVNode("+"), avatarsInPopover.length]
        })],
        content: () => createVNode("div", null, [avatarsInPopover])
      })]);
    };
  }
});
const Avatar = Object.assign(_Avatar, {
  Group: AvatarGroup,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Avatar.name, _Avatar);
    app.component(componentPrefix + AvatarGroup.name, AvatarGroup);
  }
});
function hasPropOrSlot(props, slots, propName) {
  return computed(() => Boolean(props[propName] || slots[propName]));
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "Link",
  components: { IconLink, IconLoading },
  props: {
    href: String,
    status: {
      type: String,
      default: "normal"
    },
    hoverable: {
      type: Boolean,
      default: true
    },
    icon: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  emits: {
    click: (ev) => true
  },
  setup(props, { slots, emit }) {
    const prefixCls = getPrefixCls("link");
    const showIcon = hasPropOrSlot(props, slots, "icon");
    const handleClick = (ev) => {
      if (props.disabled || props.loading) {
        ev.preventDefault();
        return;
      }
      emit("click", ev);
    };
    const cls = computed(() => [
      prefixCls,
      `${prefixCls}-status-${props.status}`,
      {
        [`${prefixCls}-disabled`]: props.disabled,
        [`${prefixCls}-loading`]: props.loading,
        [`${prefixCls}-hoverless`]: !props.hoverable,
        [`${prefixCls}-with-icon`]: props.loading || showIcon.value
      }
    ]);
    return {
      cls,
      prefixCls,
      showIcon,
      handleClick
    };
  }
});
const _hoisted_1 = ["href"];
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon_loading = resolveComponent("icon-loading");
  const _component_icon_link = resolveComponent("icon-link");
  return openBlock(), createElementBlock("a", {
    href: _ctx.disabled ? void 0 : _ctx.href,
    class: normalizeClass(_ctx.cls),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.handleClick && _ctx.handleClick(...args))
  }, [
    _ctx.loading || _ctx.showIcon ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-icon`)
    }, [
      _ctx.loading ? (openBlock(), createBlock(_component_icon_loading, { key: 0 })) : renderSlot(_ctx.$slots, "icon", { key: 1 }, () => [
        createVNode(_component_icon_link)
      ])
    ], 2)) : createCommentVNode("v-if", true),
    renderSlot(_ctx.$slots, "default")
  ], 10, _hoisted_1);
}
var _Link = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["render", _sfc_render]]);
const Link = Object.assign(_Link, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Link.name, _Link);
  }
});
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { userInfo, determineLogin } = useUser();
    const { form, formRef, resetForm } = useForm(() => ({
      secondSubjectList: [],
      changeSecondSubject: [],
      firstSubjectList: []
    }));
    const echoDisplay = () => {
      if (userInfo.value.score) {
        const xkList = userInfo.value.xk.split("/");
        const isSpecial = userInfo.value.gkms === "3+1+2" && ["\u7269", "\u53F2"].includes(xkList[0]);
        form.value = {
          ...form.value,
          ...userInfo.value,
          subjectList: isSpecial ? [] : xkList,
          firstSubjectList: isSpecial ? [xkList[0]] : [],
          // 回显首选学科
          secondSubjectList: isSpecial ? [...xkList.slice(1, 3)] : []
          // 回显次选学科
        };
      }
    };
    const changeSubject = () => {
      if (form.value.subjectList.length === 3 && form.value.score) {
        getEstimatedWc();
      }
    };
    const changeFirstSubject = () => {
      form.value.score = void 0;
      form.value.wc = void 0;
      if (form.value.firstSubjectList.length === 1 && form.value.secondSubjectList.length === 2 && form.value.score) {
        getEstimatedWc();
      }
    };
    const changeSecondSubject = () => {
      if (form.value.secondSubjectList.length === 2 && form.value.score) {
        getEstimatedWc();
      }
    };
    const changeScore = (e) => {
      form.value.score = e;
      form.value.wc = void 0;
      if (e > 100) {
        getEstimatedWc();
      }
    };
    const getEstimatedWc = async () => {
      var _a;
      const xkList = form.value.gkms === "3+3" ? form.value.subjectList : [...form.value.firstSubjectList, ...form.value.secondSubjectList];
      if (!form.value.province) {
        return $zsMsg("error", "\u8BF7\u9009\u62E9\u7701\u4EFD");
      }
      if (["3+1+2", "3+3"].includes(form.value.gkms)) {
        if (xkList.length != 3) {
          return $zsMsg("error", "\u8BF7\u9009\u62E9\u5BF9\u5E94\u6570\u91CF\u79D1\u76EE");
        }
      }
      if (!form.value.score) {
        return $zsMsg("error", "\u8BF7\u8F93\u5165\u5206\u6570");
      }
      const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_WC, {
        method: "POST",
        body: {
          score: form.value.score,
          province: form.value.province,
          xk: xkList.join("/")
        }
      });
      if (err)
        return;
      form.value.wc = (_a = res.data) != null ? _a : "";
    };
    const validateData = () => {
      formRef.value.validate((errors) => {
        if (errors)
          return;
        if (form.value.gkms === "3+3" && form.value.subjectList.length !== 3) {
          $zsMsg("error", "\u8BF7\u9009\u62E9\u5BF9\u5E94\u6570\u91CF\u79D1\u76EE");
          return;
        }
        if (form.value.gkms === "3+1+2" && (form.value.firstSubjectList.length !== 1 || form.value.secondSubjectList.length !== 2)) {
          $zsMsg("error", "\u8BF7\u9009\u62E9\u5BF9\u5E94\u6570\u91CF\u79D1\u76EE");
          return;
        }
        if (!form.value.score) {
          return $zsMsg("error", "\u8BF7\u8F93\u5165\u5206\u6570");
        }
        if (!form.value.wc) {
          return $zsMsg("error", "\u672A\u67E5\u8BE2\u5230\u5BF9\u5E94\u4F4D\u6B21");
        }
        submitData();
      });
    };
    const submitData = async () => {
      const xkList = form.value.gkms === "3+3" ? form.value.subjectList : [...form.value.firstSubjectList, ...form.value.secondSubjectList];
      const [err, res] = await $zsFetch(API_URLS.CHOICE.INDEX_TO_FILL_VOLUNTEER, {
        body: {
          xk: xkList.join("/"),
          score: form.value.score,
          wc: form.value.wc
        }
      });
      if (err)
        return;
      navigateTo(`/choice?wid=${res == null ? void 0 : res.data}`);
    };
    watch(
      () => [userInfo.value.province, userInfo.value.xk, userInfo.value.score, userInfo.value.wc],
      async () => {
        echoDisplay();
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_swiper = Swiper;
      const _component_swiper_slide = SwiperSlide;
      const _component_nuxt_img = _sfc_main$6;
      const _component_a_form = Form;
      const _component_a_form_item = FormItem;
      const _component_a_checkbox_group = CheckboxGroup;
      const _component_a_checkbox = Checkbox;
      const _component_a_space = Space;
      const _component_a_input_number = InputNumber;
      const _component_a_button = Button;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-02e141eb>`);
      _push(ssrRenderComponent(_component_swiper, {
        pagination: true,
        autoplay: {
          delay: 4e3
        },
        modules: [unref(Pagination), unref(Autoplay)],
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_swiper_slide, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_nuxt_img, {
                    src: "/images/banner1.jpg",
                    class: "w-full h-[350px] bg-no-repeat bg-[length:auto_100%] bg-[50%] m-[0px_auto]"
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_nuxt_img, {
                      src: "/images/banner1.jpg",
                      class: "w-full h-[350px] bg-no-repeat bg-[length:auto_100%] bg-[50%] m-[0px_auto]"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_swiper_slide, null, {
                default: withCtx(() => [
                  createVNode(_component_nuxt_img, {
                    src: "/images/banner1.jpg",
                    class: "w-full h-[350px] bg-no-repeat bg-[length:auto_100%] bg-[50%] m-[0px_auto]"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="max-w-container mx-auto relative" data-v-02e141eb><div class="w-[340px] bg-white absolute p-[10px_20px] right-0 top-[-340px] bottom-[10px] z-10 rounded-lg" data-v-02e141eb><div class="text-[20px] leading-[40px]" data-v-02e141eb>\u6A21\u62DF\u5FD7\u613F\u586B\u62A5</div>`);
      _push(ssrRenderComponent(_component_a_form, {
        ref_key: "formRef",
        ref: formRef,
        model: unref(form),
        "label-align": "left",
        "auto-label-width": ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (unref(form).gkms === "3+1+2") {
              _push2(`<!--[-->`);
              _push2(ssrRenderComponent(_component_a_form_item, { label: "\u9996\u9009\u79D1\u76EE:" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_checkbox_group, {
                      max: 1,
                      modelValue: unref(form).firstSubjectList,
                      "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                      onChange: changeFirstSubject
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                            _push4(ssrRenderComponent(_component_a_checkbox, {
                              value: item.value
                            }, {
                              checkbox: withCtx(({ checked }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_a_space, {
                                    align: "start",
                                    class: ["rounded-[4px] p-[10px_6px] text-center border", {
                                      "border-[#1677ff] bg-[#F2F5FF]": checked
                                    }]
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item.label)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_a_space, {
                                      align: "start",
                                      class: ["rounded-[4px] p-[10px_6px] text-center border", {
                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                      }]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                              return openBlock(), createBlock(_component_a_checkbox, {
                                key: item.value,
                                value: item.value
                              }, {
                                checkbox: withCtx(({ checked }) => [
                                  createVNode(_component_a_space, {
                                    align: "start",
                                    class: ["rounded-[4px] p-[10px_6px] text-center border", {
                                      "border-[#1677ff] bg-[#F2F5FF]": checked
                                    }]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_checkbox_group, {
                        max: 1,
                        modelValue: unref(form).firstSubjectList,
                        "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                        onChange: changeFirstSubject
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                            return openBlock(), createBlock(_component_a_checkbox, {
                              key: item.value,
                              value: item.value
                            }, {
                              checkbox: withCtx(({ checked }) => [
                                createVNode(_component_a_space, {
                                  align: "start",
                                  class: ["rounded-[4px] p-[10px_6px] text-center border", {
                                    "border-[#1677ff] bg-[#F2F5FF]": checked
                                  }]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_form_item, { label: "\u6B21\u9009\u79D1\u76EE:" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_checkbox_group, {
                      max: 2,
                      modelValue: unref(form).secondSubjectList,
                      "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                      onChange: changeSecondSubject
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                            _push4(ssrRenderComponent(_component_a_checkbox, {
                              value: item.value
                            }, {
                              checkbox: withCtx(({ checked }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_a_space, {
                                    align: "start",
                                    class: ["rounded-[4px] p-[10px_5px] text-center border", {
                                      "border-[#1677ff] bg-[#F2F5FF]": checked
                                    }]
                                  }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`${ssrInterpolate(item.label)}`);
                                      } else {
                                        return [
                                          createTextVNode(toDisplayString(item.label), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_a_space, {
                                      align: "start",
                                      class: ["rounded-[4px] p-[10px_5px] text-center border", {
                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                      }]
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.label), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["class"])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                              return openBlock(), createBlock(_component_a_checkbox, {
                                key: item.value,
                                value: item.value
                              }, {
                                checkbox: withCtx(({ checked }) => [
                                  createVNode(_component_a_space, {
                                    align: "start",
                                    class: ["rounded-[4px] p-[10px_5px] text-center border", {
                                      "border-[#1677ff] bg-[#F2F5FF]": checked
                                    }]
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.label), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["class"])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_checkbox_group, {
                        max: 2,
                        modelValue: unref(form).secondSubjectList,
                        "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                        onChange: changeSecondSubject
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                            return openBlock(), createBlock(_component_a_checkbox, {
                              key: item.value,
                              value: item.value
                            }, {
                              checkbox: withCtx(({ checked }) => [
                                createVNode(_component_a_space, {
                                  align: "start",
                                  class: ["rounded-[4px] p-[10px_5px] text-center border", {
                                    "border-[#1677ff] bg-[#F2F5FF]": checked
                                  }]
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.label), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["class"])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(ssrRenderComponent(_component_a_form_item, { label: "\u9009\u8003\u79D1\u76EE:" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_checkbox_group, {
                      max: 3,
                      modelValue: unref(form).subjectList,
                      "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                      onChange: changeSubject
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<!--[-->`);
                          ssrRenderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                            _push4(ssrRenderComponent(_component_a_checkbox, {
                              value: item.value
                            }, {
                              checkbox: withCtx(({ checked }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center justify-between flex-wrap" data-v-02e141eb${_scopeId4}><div class="${ssrRenderClass([{
                                    "border-[#1677ff] bg-[#F2F5FF]": checked
                                  }, "rounded-[4px] p-[10px_10px] text-center border mb-[5px]"])}" data-v-02e141eb${_scopeId4}>${ssrInterpolate(item.label)}</div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center justify-between flex-wrap" }, [
                                      createVNode("div", {
                                        class: ["rounded-[4px] p-[10px_10px] text-center border mb-[5px]", {
                                          "border-[#1677ff] bg-[#F2F5FF]": checked
                                        }]
                                      }, toDisplayString(item.label), 3)
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          });
                          _push4(`<!--]-->`);
                        } else {
                          return [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                              return openBlock(), createBlock(_component_a_checkbox, {
                                key: item.value,
                                value: item.value
                              }, {
                                checkbox: withCtx(({ checked }) => [
                                  createVNode("div", { class: "flex items-center justify-between flex-wrap" }, [
                                    createVNode("div", {
                                      class: ["rounded-[4px] p-[10px_10px] text-center border mb-[5px]", {
                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                      }]
                                    }, toDisplayString(item.label), 3)
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["value"]);
                            }), 128))
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_checkbox_group, {
                        max: 3,
                        modelValue: unref(form).subjectList,
                        "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                        onChange: changeSubject
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                            return openBlock(), createBlock(_component_a_checkbox, {
                              key: item.value,
                              value: item.value
                            }, {
                              checkbox: withCtx(({ checked }) => [
                                createVNode("div", { class: "flex items-center justify-between flex-wrap" }, [
                                  createVNode("div", {
                                    class: ["rounded-[4px] p-[10px_10px] text-center border mb-[5px]", {
                                      "border-[#1677ff] bg-[#F2F5FF]": checked
                                    }]
                                  }, toDisplayString(item.label), 3)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_a_form_item, {
              label: "\u6211\u7684\u6210\u7EE9:",
              "hide-asterisk": "",
              "validate-trigger": ["input"]
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_input_number, {
                    modelValue: unref(form).score,
                    "onUpdate:modelValue": ($event) => unref(form).score = $event,
                    modelModifiers: { trim: true },
                    precision: 0,
                    min: 0,
                    max: 750,
                    "hide-button": "",
                    "allow-clear": "",
                    placeholder: "\u8F93\u5165\u6211\u7684\u6210\u7EE9",
                    onInput: changeScore
                  }, {
                    append: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div data-v-02e141eb${_scopeId3}>\u5206</div>`);
                      } else {
                        return [
                          createVNode("div", null, "\u5206")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input_number, {
                      modelValue: unref(form).score,
                      "onUpdate:modelValue": ($event) => unref(form).score = $event,
                      modelModifiers: { trim: true },
                      precision: 0,
                      min: 0,
                      max: 750,
                      "hide-button": "",
                      "allow-clear": "",
                      placeholder: "\u8F93\u5165\u6211\u7684\u6210\u7EE9",
                      onInput: changeScore
                    }, {
                      append: withCtx(() => [
                        createVNode("div", null, "\u5206")
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_form_item, {
              label: "\u7701\u6392\u540D:",
              "hide-asterisk": ""
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_input_number, {
                    modelValue: unref(form).wc,
                    "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                    modelModifiers: { trim: true },
                    placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09",
                    readonly: "",
                    "hide-button": ""
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_input_number, {
                      modelValue: unref(form).wc,
                      "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                      modelModifiers: { trim: true },
                      placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09",
                      readonly: "",
                      "hide-button": ""
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_button, {
              type: "primary",
              class: "mt-[10px]",
              onClick: ($event) => unref(determineLogin)(() => validateData())
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u667A\u80FD\u63A8\u8350\u5927\u5B66 `);
                } else {
                  return [
                    createTextVNode(" \u667A\u80FD\u63A8\u8350\u5927\u5B66 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                createVNode(_component_a_form_item, { label: "\u9996\u9009\u79D1\u76EE:" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_checkbox_group, {
                      max: 1,
                      modelValue: unref(form).firstSubjectList,
                      "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                      onChange: changeFirstSubject
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                          return openBlock(), createBlock(_component_a_checkbox, {
                            key: item.value,
                            value: item.value
                          }, {
                            checkbox: withCtx(({ checked }) => [
                              createVNode(_component_a_space, {
                                align: "start",
                                class: ["rounded-[4px] p-[10px_6px] text-center border", {
                                  "border-[#1677ff] bg-[#F2F5FF]": checked
                                }]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                }),
                createVNode(_component_a_form_item, { label: "\u6B21\u9009\u79D1\u76EE:" }, {
                  default: withCtx(() => [
                    createVNode(_component_a_checkbox_group, {
                      max: 2,
                      modelValue: unref(form).secondSubjectList,
                      "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                      onChange: changeSecondSubject
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                          return openBlock(), createBlock(_component_a_checkbox, {
                            key: item.value,
                            value: item.value
                          }, {
                            checkbox: withCtx(({ checked }) => [
                              createVNode(_component_a_space, {
                                align: "start",
                                class: ["rounded-[4px] p-[10px_5px] text-center border", {
                                  "border-[#1677ff] bg-[#F2F5FF]": checked
                                }]
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(toDisplayString(item.label), 1)
                                ]),
                                _: 2
                              }, 1032, ["class"])
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  _: 1
                })
              ], 64)) : (openBlock(), createBlock(_component_a_form_item, {
                key: 1,
                label: "\u9009\u8003\u79D1\u76EE:"
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_checkbox_group, {
                    max: 3,
                    modelValue: unref(form).subjectList,
                    "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                    onChange: changeSubject
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                        return openBlock(), createBlock(_component_a_checkbox, {
                          key: item.value,
                          value: item.value
                        }, {
                          checkbox: withCtx(({ checked }) => [
                            createVNode("div", { class: "flex items-center justify-between flex-wrap" }, [
                              createVNode("div", {
                                class: ["rounded-[4px] p-[10px_10px] text-center border mb-[5px]", {
                                  "border-[#1677ff] bg-[#F2F5FF]": checked
                                }]
                              }, toDisplayString(item.label), 3)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              })),
              createVNode(_component_a_form_item, {
                label: "\u6211\u7684\u6210\u7EE9:",
                "hide-asterisk": "",
                "validate-trigger": ["input"]
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input_number, {
                    modelValue: unref(form).score,
                    "onUpdate:modelValue": ($event) => unref(form).score = $event,
                    modelModifiers: { trim: true },
                    precision: 0,
                    min: 0,
                    max: 750,
                    "hide-button": "",
                    "allow-clear": "",
                    placeholder: "\u8F93\u5165\u6211\u7684\u6210\u7EE9",
                    onInput: changeScore
                  }, {
                    append: withCtx(() => [
                      createVNode("div", null, "\u5206")
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_a_form_item, {
                label: "\u7701\u6392\u540D:",
                "hide-asterisk": ""
              }, {
                default: withCtx(() => [
                  createVNode(_component_a_input_number, {
                    modelValue: unref(form).wc,
                    "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                    modelModifiers: { trim: true },
                    placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09",
                    readonly: "",
                    "hide-button": ""
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ]),
                _: 1
              }),
              createVNode(_component_a_button, {
                type: "primary",
                class: "mt-[10px]",
                onClick: ($event) => unref(determineLogin)(() => validateData())
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u667A\u80FD\u63A8\u8350\u5927\u5B66 ")
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsSwiper/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-02e141eb"]]);
const _imports_0 = "" + publicAssetsURL("images/fillOne.png");
const _imports_1 = "" + publicAssetsURL("images/fillTwo.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u9996\u9875"
    });
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const { provinceCityList, getDictionValue } = useWebsiteInformation();
    const currentNum = ref(1);
    const schoolRecommendationList = ref([]);
    const heighPayMajorList = ref([]);
    const schoolSceneryList = ref([]);
    const menuList = [
      {
        name: "\u67E5\u5927\u5B66",
        path: "/college",
        img: "/images/menu1.png"
      },
      {
        name: "\u67E5\u4E13\u4E1A",
        path: "/major",
        img: "/images/menu2.png"
      },
      {
        name: "\u67E5\u6279\u6B21",
        path: "/batch",
        img: "/images/menu3.png"
      },
      {
        name: "\u67E5\u4F4D\u6B21",
        path: "/rank",
        img: "/images/menu4.png"
      },
      {
        name: "\u5927\u5B66\u6392\u540D",
        path: "/schoolRank",
        img: "/images/menu5.png"
      },
      {
        name: "\u4E13\u4E1A\u6D4B\u8BC4",
        path: "/evaluate",
        img: "/images/menu6.png"
      },
      {
        name: "\u9AD8\u8003\u9009\u79D1",
        path: "/subject",
        img: "/images/menu7.png"
      },
      {
        name: "\u6A21\u62DF\u5FD7\u613F",
        path: "/choice",
        img: "/images/menu8.png"
      }
    ];
    const morePlan = [
      {
        name: "\u9AD8\u4E2D\u6210\u7EE9\u63D0\u5206\u89C4\u5212",
        classStyle: "text-[#7C92FF] bgLinearOne"
      },
      {
        name: "\u6625\u8003\u9AD8\u804C\u5355\u62DB\u89C4\u5212",
        classStyle: "text-[#5AB9FF] bgLinearTwo"
      },
      {
        name: "\u56FD\u9645\u672C\u79D1\u7559\u5B66\u89C4\u5212",
        classStyle: "text-[#FFA864] bgLinearThree"
      },
      {
        name: "\u5927\u5B66\u8003\u7814\u5C31\u4E1A\u89C4\u5212",
        classStyle: "text-[#5A75F9] bgLinearFour"
      }
    ];
    const friendshipLinkList = [
      {
        name: "\u9633\u5149\u9AD8\u8003",
        id: "0001",
        path: "https://gaokao.chsi.com.cn/"
      }
    ];
    const getSchoolRecommendationList = async () => {
      var _a, _b, _c;
      const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_INDEX_SCHOOL_RECOMMENDATION_LIST, {
        method: "POST",
        body: {
          sf: userInfo.value.province,
          xk: (_a = userInfo.value.xk) != null ? _a : "",
          score: (_b = userInfo.value.score) != null ? _b : ""
        }
      });
      schoolRecommendationList.value = (_c = res == null ? void 0 : res.data) != null ? _c : [];
    };
    const getHeighPayMajorList = async () => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_INDEX_HEIGH_MAY_MAJOR, {
        method: "POST"
      });
      heighPayMajorList.value = (_a = res == null ? void 0 : res.data) != null ? _a : [];
    };
    const getSchoolSceneryList = async () => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_INDEX_SCHOOL_SCENERY_LIST, {
        method: "POST",
        body: {
          clickCount: currentNum.value,
          sf: userInfo.value.province
        }
      });
      schoolSceneryList.value = (_a = res == null ? void 0 : res.data) != null ? _a : [];
    };
    watch(
      () => userInfo.value.province,
      async () => {
        if (userInfo.value.province) {
          await Promise.all([
            getSchoolRecommendationList(),
            getHeighPayMajorList(),
            getSchoolSceneryList()
          ]);
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_swiper = __nuxt_component_0;
      const _component_a_grid = Grid;
      const _component_a_grid_item = GridItem;
      const _component_nuxt_link = __nuxt_component_0$1;
      const _component_zs_title = _sfc_main$7;
      const _component_a_card = Card;
      const _component_a_avatar = Avatar;
      const _component_a_space = Space;
      const _component_a_tag = Tag;
      const _component_a_link = Link;
      const _component_icon_sync = IconSync;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-abecdeaf><div class="h-[350px] mx-auto max-w-[1920px]" data-v-abecdeaf>`);
      _push(ssrRenderComponent(_component_zs_swiper, null, null, _parent));
      _push(`</div><div class="mx-auto max-w-container" data-v-abecdeaf><div class="mt-[20px]" data-v-abecdeaf>`);
      _push(ssrRenderComponent(_component_a_grid, {
        cols: 2,
        colGap: 12,
        rowGap: 16
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_grid_item, { class: "rounded-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img alt="avatar"${ssrRenderAttr("src", _imports_0)} class="cursor-pointer" data-v-abecdeaf${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: "avatar",
                      src: _imports_0,
                      class: "cursor-pointer"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_grid_item, { class: "rounded-xl" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<img alt="avatar"${ssrRenderAttr("src", _imports_1)} class="cursor-pointer" data-v-abecdeaf${_scopeId2}>`);
                } else {
                  return [
                    createVNode("img", {
                      alt: "avatar",
                      src: _imports_1,
                      class: "cursor-pointer"
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_grid_item, { class: "rounded-xl" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    alt: "avatar",
                    src: _imports_0,
                    class: "cursor-pointer"
                  })
                ]),
                _: 1
              }),
              createVNode(_component_a_grid_item, { class: "rounded-xl" }, {
                default: withCtx(() => [
                  createVNode("img", {
                    alt: "avatar",
                    src: _imports_1,
                    class: "cursor-pointer"
                  })
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="mt-[20px] card-box-shadow rounded-lg bg-white"${ssrRenderAttr("bordered", false)} data-v-abecdeaf><div class="flex justify-around items-center cursor-pointer shadowNone p-[30px]" data-v-abecdeaf><!--[-->`);
      ssrRenderList(menuList, (item) => {
        _push(ssrRenderComponent(_component_nuxt_link, {
          key: item.path,
          to: item.path
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="bg-[#657FFF] w-[70px] h-[70px] rounded-[20px] flex justify-center items-center" data-v-abecdeaf${_scopeId}><img${ssrRenderAttr("src", item.img)} alt="" class="m-auto w-[50px] h-[50px]" data-v-abecdeaf${_scopeId}></div><div class="mt-[10px] hover:text-[#657FFF] text-[16px] text-[#333333] text-center font-bold" data-v-abecdeaf${_scopeId}>${ssrInterpolate(item.name)}</div>`);
            } else {
              return [
                createVNode("div", { class: "bg-[#657FFF] w-[70px] h-[70px] rounded-[20px] flex justify-center items-center" }, [
                  createVNode("img", {
                    src: item.img,
                    alt: "",
                    class: "m-auto w-[50px] h-[50px]"
                  }, null, 8, ["src"])
                ]),
                createVNode("div", { class: "mt-[10px] hover:text-[#657FFF] text-[16px] text-[#333333] text-center font-bold" }, toDisplayString(item.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div>`);
      _push(ssrRenderComponent(_component_zs_title, {
        title: "\u66F4\u591A\u5347\u5B66\u89C4\u5212",
        size: "large",
        class: "mt-[40px]"
      }, null, _parent));
      _push(`<div class="mt-[20px]" data-v-abecdeaf>`);
      _push(ssrRenderComponent(_component_a_grid, {
        cols: 4,
        colGap: 12,
        rowGap: 16
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(morePlan, (item) => {
              _push2(ssrRenderComponent(_component_a_grid_item, {
                key: item.name
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([item.classStyle, "flex items-center justify-center text-[24px] h-[80px] rounded-xl cursor-pointer font-bold"])}" data-v-abecdeaf${_scopeId2}>${ssrInterpolate(item.name)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["flex items-center justify-center text-[24px] h-[80px] rounded-xl cursor-pointer font-bold", item.classStyle]
                      }, toDisplayString(item.name), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(), createBlock(Fragment, null, renderList(morePlan, (item) => {
                return createVNode(_component_a_grid_item, {
                  key: item.name
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      class: ["flex items-center justify-center text-[24px] h-[80px] rounded-xl cursor-pointer font-bold", item.classStyle]
                    }, toDisplayString(item.name), 3)
                  ]),
                  _: 2
                }, 1024);
              }), 64))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      if (unref(schoolRecommendationList) && unref(schoolRecommendationList).length) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u9662\u6821\u63A8\u8350",
          size: "large",
          class: "mt-[40px]"
        }, null, _parent));
        _push(ssrRenderComponent(_component_a_grid, {
          cols: 4,
          colGap: 12,
          rowGap: 16,
          class: "mt-[20px]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(schoolRecommendationList), (item, index2) => {
                _push2(ssrRenderComponent(_component_a_grid_item, {
                  key: index2,
                  class: "hover:translate-y-[-4px]"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_a_card, {
                        class: "card-box-shadow rounded-lg bg-white p-[10px_10px]",
                        hoverable: "",
                        bordered: false
                      }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_nuxt_link, {
                              to: `/college/${item.id}`,
                              target: "_blank"
                            }, {
                              default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="flex items-center" data-v-abecdeaf${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_a_avatar, { size: 60 }, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<img alt="avatar"${ssrRenderAttr("src", item.logo)} data-v-abecdeaf${_scopeId5}>`);
                                      } else {
                                        return [
                                          createVNode("img", {
                                            alt: "avatar",
                                            src: item.logo
                                          }, null, 8, ["src"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<div class="ml-[8px] flex-1" data-v-abecdeaf${_scopeId4}><div class="font-bold text-[18px] leading--[18px] truncate w-[150px] text-[#333]" data-v-abecdeaf${_scopeId4}>${ssrInterpolate(item.yxmc)}</div><div class="mt-[12px] flex items-center justify-between" data-v-abecdeaf${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_a_space, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_a_tag, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), item.sf)) == null ? void 0 : _a.label)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), item.sf)) == null ? void 0 : _b.label), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_a_tag, null, {
                                          default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            var _a, _b;
                                            if (_push7) {
                                              _push7(`${ssrInterpolate((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), item.yxLx)) == null ? void 0 : _a.label)}`);
                                            } else {
                                              return [
                                                createTextVNode(toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), item.yxLx)) == null ? void 0 : _b.label), 1)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_a_tag, null, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), item.sf)) == null ? void 0 : _a.label), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_a_tag, null, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), item.yxLx)) == null ? void 0 : _a.label), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`<span class="cursor-pointer text-[#999999] text-[14px]" data-v-abecdeaf${_scopeId4}>\u67E5\u770B\u9662\u6821</span></div></div></div>`);
                                } else {
                                  return [
                                    createVNode("div", { class: "flex items-center" }, [
                                      createVNode(_component_a_avatar, { size: 60 }, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            alt: "avatar",
                                            src: item.logo
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("div", { class: "ml-[8px] flex-1" }, [
                                        createVNode("div", { class: "font-bold text-[18px] leading--[18px] truncate w-[150px] text-[#333]" }, toDisplayString(item.yxmc), 1),
                                        createVNode("div", { class: "mt-[12px] flex items-center justify-between" }, [
                                          createVNode(_component_a_space, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_a_tag, null, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), item.sf)) == null ? void 0 : _a.label), 1)
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_a_tag, null, {
                                                default: withCtx(() => {
                                                  var _a;
                                                  return [
                                                    createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), item.yxLx)) == null ? void 0 : _a.label), 1)
                                                  ];
                                                }),
                                                _: 2
                                              }, 1024)
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode("span", { class: "cursor-pointer text-[#999999] text-[14px]" }, "\u67E5\u770B\u9662\u6821")
                                        ])
                                      ])
                                    ])
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_nuxt_link, {
                                to: `/college/${item.id}`,
                                target: "_blank"
                              }, {
                                default: withCtx(() => [
                                  createVNode("div", { class: "flex items-center" }, [
                                    createVNode(_component_a_avatar, { size: 60 }, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          alt: "avatar",
                                          src: item.logo
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("div", { class: "ml-[8px] flex-1" }, [
                                      createVNode("div", { class: "font-bold text-[18px] leading--[18px] truncate w-[150px] text-[#333]" }, toDisplayString(item.yxmc), 1),
                                      createVNode("div", { class: "mt-[12px] flex items-center justify-between" }, [
                                        createVNode(_component_a_space, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_a_tag, null, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), item.sf)) == null ? void 0 : _a.label), 1)
                                                ];
                                              }),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_a_tag, null, {
                                              default: withCtx(() => {
                                                var _a;
                                                return [
                                                  createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), item.yxLx)) == null ? void 0 : _a.label), 1)
                                                ];
                                              }),
                                              _: 2
                                            }, 1024)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode("span", { class: "cursor-pointer text-[#999999] text-[14px]" }, "\u67E5\u770B\u9662\u6821")
                                      ])
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_a_card, {
                          class: "card-box-shadow rounded-lg bg-white p-[10px_10px]",
                          hoverable: "",
                          bordered: false
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_nuxt_link, {
                              to: `/college/${item.id}`,
                              target: "_blank"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center" }, [
                                  createVNode(_component_a_avatar, { size: 60 }, {
                                    default: withCtx(() => [
                                      createVNode("img", {
                                        alt: "avatar",
                                        src: item.logo
                                      }, null, 8, ["src"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "ml-[8px] flex-1" }, [
                                    createVNode("div", { class: "font-bold text-[18px] leading--[18px] truncate w-[150px] text-[#333]" }, toDisplayString(item.yxmc), 1),
                                    createVNode("div", { class: "mt-[12px] flex items-center justify-between" }, [
                                      createVNode(_component_a_space, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_a_tag, null, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), item.sf)) == null ? void 0 : _a.label), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_a_tag, null, {
                                            default: withCtx(() => {
                                              var _a;
                                              return [
                                                createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), item.yxLx)) == null ? void 0 : _a.label), 1)
                                              ];
                                            }),
                                            _: 2
                                          }, 1024)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode("span", { class: "cursor-pointer text-[#999999] text-[14px]" }, "\u67E5\u770B\u9662\u6821")
                                    ])
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["to"])
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
                (openBlock(true), createBlock(Fragment, null, renderList(unref(schoolRecommendationList), (item, index2) => {
                  return openBlock(), createBlock(_component_a_grid_item, {
                    key: index2,
                    class: "hover:translate-y-[-4px]"
                  }, {
                    default: withCtx(() => [
                      createVNode(_component_a_card, {
                        class: "card-box-shadow rounded-lg bg-white p-[10px_10px]",
                        hoverable: "",
                        bordered: false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_link, {
                            to: `/college/${item.id}`,
                            target: "_blank"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center" }, [
                                createVNode(_component_a_avatar, { size: 60 }, {
                                  default: withCtx(() => [
                                    createVNode("img", {
                                      alt: "avatar",
                                      src: item.logo
                                    }, null, 8, ["src"])
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "ml-[8px] flex-1" }, [
                                  createVNode("div", { class: "font-bold text-[18px] leading--[18px] truncate w-[150px] text-[#333]" }, toDisplayString(item.yxmc), 1),
                                  createVNode("div", { class: "mt-[12px] flex items-center justify-between" }, [
                                    createVNode(_component_a_space, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_a_tag, null, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), item.sf)) == null ? void 0 : _a.label), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_a_tag, null, {
                                          default: withCtx(() => {
                                            var _a;
                                            return [
                                              createTextVNode(toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), item.yxLx)) == null ? void 0 : _a.label), 1)
                                            ];
                                          }),
                                          _: 2
                                        }, 1024)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode("span", { class: "cursor-pointer text-[#999999] text-[14px]" }, "\u67E5\u770B\u9662\u6821")
                                  ])
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["to"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_zs_title, {
        title: "\u9AD8\u85AA\u4E13\u4E1A",
        size: "large",
        class: "mt-[40px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_grid, {
        cols: 5,
        colGap: 12,
        rowGap: 16,
        class: "mt-[20px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(heighPayMajorList), (item, index2) => {
              _push2(ssrRenderComponent(_component_a_grid_item, {
                key: index2,
                class: "hover:translate-y-[-4px]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_a_card, {
                      class: "card-box-shadow rounded-lg bg-white p-[10px_10px]",
                      hoverable: "",
                      bordered: false
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_nuxt_link, {
                            to: `/major/${item.id}`
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center justify-center flex-col" data-v-abecdeaf${_scopeId4}><div class="font-bold text-center text-[18px] truncate w-[150px] text-[#333]" data-v-abecdeaf${_scopeId4}>${ssrInterpolate(item.zymc)}</div><div class="mt-[5px]" data-v-abecdeaf${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_a_tag, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(item.zyl)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(item.zyl), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div><div class="mt-[5px] text-[red] text-[21px] before:text-[80%] before:content-[&#39;\xA5&#39;]" data-v-abecdeaf${_scopeId4}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(item.fivePjxz))}</div><div class="mt-[5px] text-[#999] text-[12px]" data-v-abecdeaf${_scopeId4}>\u6BD5\u4E1A\u4E94\u5E74\u6708\u85AA\u8D44</div></div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center justify-center flex-col" }, [
                                    createVNode("div", { class: "font-bold text-center text-[18px] truncate w-[150px] text-[#333]" }, toDisplayString(item.zymc), 1),
                                    createVNode("div", { class: "mt-[5px]" }, [
                                      createVNode(_component_a_tag, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(item.zyl), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    createVNode("div", { class: "mt-[5px] text-[red] text-[21px] before:text-[80%] before:content-['\xA5']" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(item.fivePjxz)), 1),
                                    createVNode("div", { class: "mt-[5px] text-[#999] text-[12px]" }, "\u6BD5\u4E1A\u4E94\u5E74\u6708\u85AA\u8D44")
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_nuxt_link, {
                              to: `/major/${item.id}`
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-center flex-col" }, [
                                  createVNode("div", { class: "font-bold text-center text-[18px] truncate w-[150px] text-[#333]" }, toDisplayString(item.zymc), 1),
                                  createVNode("div", { class: "mt-[5px]" }, [
                                    createVNode(_component_a_tag, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(item.zyl), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  createVNode("div", { class: "mt-[5px] text-[red] text-[21px] before:text-[80%] before:content-['\xA5']" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(item.fivePjxz)), 1),
                                  createVNode("div", { class: "mt-[5px] text-[#999] text-[12px]" }, "\u6BD5\u4E1A\u4E94\u5E74\u6708\u85AA\u8D44")
                                ])
                              ]),
                              _: 2
                            }, 1032, ["to"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_a_card, {
                        class: "card-box-shadow rounded-lg bg-white p-[10px_10px]",
                        hoverable: "",
                        bordered: false
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_nuxt_link, {
                            to: `/major/${item.id}`
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-center flex-col" }, [
                                createVNode("div", { class: "font-bold text-center text-[18px] truncate w-[150px] text-[#333]" }, toDisplayString(item.zymc), 1),
                                createVNode("div", { class: "mt-[5px]" }, [
                                  createVNode(_component_a_tag, null, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(item.zyl), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                createVNode("div", { class: "mt-[5px] text-[red] text-[21px] before:text-[80%] before:content-['\xA5']" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(item.fivePjxz)), 1),
                                createVNode("div", { class: "mt-[5px] text-[#999] text-[12px]" }, "\u6BD5\u4E1A\u4E94\u5E74\u6708\u85AA\u8D44")
                              ])
                            ]),
                            _: 2
                          }, 1032, ["to"])
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
              (openBlock(true), createBlock(Fragment, null, renderList(unref(heighPayMajorList), (item, index2) => {
                return openBlock(), createBlock(_component_a_grid_item, {
                  key: index2,
                  class: "hover:translate-y-[-4px]"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_card, {
                      class: "card-box-shadow rounded-lg bg-white p-[10px_10px]",
                      hoverable: "",
                      bordered: false
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_nuxt_link, {
                          to: `/major/${item.id}`
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "flex items-center justify-center flex-col" }, [
                              createVNode("div", { class: "font-bold text-center text-[18px] truncate w-[150px] text-[#333]" }, toDisplayString(item.zymc), 1),
                              createVNode("div", { class: "mt-[5px]" }, [
                                createVNode(_component_a_tag, null, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(item.zyl), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              createVNode("div", { class: "mt-[5px] text-[red] text-[21px] before:text-[80%] before:content-['\xA5']" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(item.fivePjxz)), 1),
                              createVNode("div", { class: "mt-[5px] text-[#999] text-[12px]" }, "\u6BD5\u4E1A\u4E94\u5E74\u6708\u85AA\u8D44")
                            ])
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]),
                      _: 2
                    }, 1024)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_zs_title, {
        title: "\u6821\u56ED\u98CE\u5149",
        size: "large",
        class: "mt-[40px]"
      }, {
        right: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_link, {
              onClick: ($event) => (currentNum.value++, getSchoolSceneryList())
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u6362\u4E00\u6279 `);
                  _push3(ssrRenderComponent(_component_icon_sync, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createTextVNode(" \u6362\u4E00\u6279 "),
                    createVNode(_component_icon_sync)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_link, {
                onClick: ($event) => (currentNum.value++, getSchoolSceneryList())
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u6362\u4E00\u6279 "),
                  createVNode(_component_icon_sync)
                ]),
                _: 1
              }, 8, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-[20px]" data-v-abecdeaf>`);
      _push(ssrRenderComponent(_component_a_grid, {
        cols: 4,
        colGap: 12,
        rowGap: 16
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(schoolSceneryList), (item, index2) => {
              _push2(ssrRenderComponent(_component_a_grid_item, {
                key: index2,
                class: "card-box-shadow rounded-lg overflow-hidden"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: `/college/${item.id}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="flex items-center relative overflow-hidden" data-v-abecdeaf${_scopeId3}><img${ssrRenderAttr("src", item.url)} alt="" class="block hover:scale-[1.2] transitionAll" data-v-abecdeaf${_scopeId3}><div class="absolute h-[50px] bg-[rgba(0,0,0,0.5)] text-[16px] bottom-0 right-0 w-full flex items-center justify-center font-bold overflow-hidden text-white" data-v-abecdeaf${_scopeId3}>${ssrInterpolate(item.yxmc)}</div></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "flex items-center relative overflow-hidden" }, [
                              createVNode("img", {
                                src: item.url,
                                alt: "",
                                class: "block hover:scale-[1.2] transitionAll"
                              }, null, 8, ["src"]),
                              createVNode("div", { class: "absolute h-[50px] bg-[rgba(0,0,0,0.5)] text-[16px] bottom-0 right-0 w-full flex items-center justify-center font-bold overflow-hidden text-white" }, toDisplayString(item.yxmc), 1)
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_nuxt_link, {
                        to: `/college/${item.id}`
                      }, {
                        default: withCtx(() => [
                          createVNode("div", { class: "flex items-center relative overflow-hidden" }, [
                            createVNode("img", {
                              src: item.url,
                              alt: "",
                              class: "block hover:scale-[1.2] transitionAll"
                            }, null, 8, ["src"]),
                            createVNode("div", { class: "absolute h-[50px] bg-[rgba(0,0,0,0.5)] text-[16px] bottom-0 right-0 w-full flex items-center justify-center font-bold overflow-hidden text-white" }, toDisplayString(item.yxmc), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(schoolSceneryList), (item, index2) => {
                return openBlock(), createBlock(_component_a_grid_item, {
                  key: index2,
                  class: "card-box-shadow rounded-lg overflow-hidden"
                }, {
                  default: withCtx(() => [
                    createVNode(_component_nuxt_link, {
                      to: `/college/${item.id}`
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center relative overflow-hidden" }, [
                          createVNode("img", {
                            src: item.url,
                            alt: "",
                            class: "block hover:scale-[1.2] transitionAll"
                          }, null, 8, ["src"]),
                          createVNode("div", { class: "absolute h-[50px] bg-[rgba(0,0,0,0.5)] text-[16px] bottom-0 right-0 w-full flex items-center justify-center font-bold overflow-hidden text-white" }, toDisplayString(item.yxmc), 1)
                        ])
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_zs_title, {
        title: "\u53CB\u60C5\u94FE\u63A5",
        size: "large",
        class: "mt-[40px]"
      }, null, _parent));
      _push(`<div class="mt-[20px]" data-v-abecdeaf><!--[-->`);
      ssrRenderList(friendshipLinkList, (item) => {
        _push(`<span class="cursor-pointer mr-[20px] text-[16px] text-[#333]" data-v-abecdeaf>`);
        _push(ssrRenderComponent(_component_nuxt_link, {
          to: item.path,
          target: "_blank"
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
      _push(`<!--]--></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-abecdeaf"]]);

export { index as default };
//# sourceMappingURL=index-15729c74.mjs.map
