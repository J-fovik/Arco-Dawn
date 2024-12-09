import { T as Tooltip } from "./index-5f48af9c.js";
import { _ as _export_sfc, g as getPrefixCls, i as isNumber } from "./use-teleport-container-1599a5a4.js";
/* empty css                *//* empty css                */import { defineComponent, computed, openBlock, createElementBlock, normalizeClass, normalizeStyle, createElementVNode, unref, withCtx, createVNode, toDisplayString, createBlock, createCommentVNode, createTextVNode, Fragment, renderList, renderSlot, useSSRContext, ref, isRef, mergeProps, withAsyncContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import { VueDraggable } from "vue-draggable-plus";
import { P as Popover } from "./index-a533a6fc.js";
/* empty css                */import { d as useWebsiteInformation, n as navigateTo, e as useAsyncData, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { t as textFormat, a as turnThousandth, b as textCompany } from "./index-a008b2db.js";
import { f as findOptions, N as NO_LIMIT_OPTIONS } from "./options-7ec13930.js";
import "hookable";
import "destr";
import "devalue";
import "klona";
import { I as IconDown, b as Input, a as IconSearch } from "./index-dd449d78.js";
import { _ as _export_sfc$1 } from "./_plugin-vue_export-helper-cc2b3d55.js";
import { _ as _sfc_main$7 } from "./index-3959f291.js";
import { T as Table } from "./index-6a06d329.js";
import "./index-11d38f35.js";
/* empty css                */import { P as Pagination } from "./index-90aba227.js";
import "./index-08fdf206.js";
import "./index-f6f6f2a5.js";
import { a as RadioGroup, R as Radio } from "./index-63900e07.js";
import { S as Space } from "./index-8bcd588e.js";
import { _ as _sfc_main$a } from "./index-d6ea50b9.js";
import { _ as _sfc_main$8 } from "./index-cb5bd3b8.js";
import { _ as _sfc_main$9 } from "./index-3e511c39.js";
import { u as useForm } from "./useArco-b2247a5c.js";
import { u as usePagination } from "./usePagination-23ca46d2.js";
import { u as useBasicsState } from "./useBasicsState-8a7a18a4.js";
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  name: "IconExclamationCircle",
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
    const cls = computed(() => [prefixCls, `${prefixCls}-exclamation-circle`, { [`${prefixCls}-spin`]: props.spin }]);
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
const _hoisted_2 = /* @__PURE__ */ createElementVNode("path", { d: "M24 28V14m0 16v4M6 24c0-9.941 8.059-18 18-18s18 8.059 18 18-8.059 18-18 18S6 33.941 6 24Z" }, null, -1);
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
var _IconExclamationCircle = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render]]);
const IconExclamationCircle = Object.assign(_IconExclamationCircle, {
  install: (app, options) => {
    var _a;
    const iconPrefix = (_a = options == null ? void 0 : options.iconPrefix) != null ? _a : "";
    app.component(iconPrefix + _IconExclamationCircle.name, _IconExclamationCircle);
  }
});
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => ({}) },
    loading: { type: Boolean, default: false },
    isYxmc: { type: Boolean, default: true },
    isZymc: { type: Boolean, default: true },
    draggable: { type: Boolean, default: false },
    curModule: { default: "major" }
  },
  emits: ["pageChange", "pageSizeChange", "draggable"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { getDictionValue } = useWebsiteInformation();
    const createMajorTableColumns = () => {
      return [
        {
          title: "概率",
          align: "center",
          show: true,
          width: 70,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "odds"
        },
        {
          title: "招生院校",
          align: "center",
          show: props.isYxmc,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "enrollmentSchool"
        },
        {
          title: "招生专业",
          align: "center",
          show: props.isZymc,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "enrollmentMajor",
          titleSlotName: "enrollmentMajorTitle"
        },
        {
          title: "计划",
          align: "center",
          show: true,
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "plan",
          titleSlotName: "planTitle"
        },
        {
          align: "center",
          show: true,
          width: 70,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "score"
        },
        {
          title: "年份",
          align: "center",
          show: true,
          width: 80,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "newYear",
          titleSlotName: "newYearTitle"
        },
        {
          title: "年份",
          align: "center",
          show: true,
          width: 80,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "lastYear",
          titleSlotName: "lastYearTitle"
        },
        {
          title: "年份",
          align: "center",
          show: true,
          width: 80,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "twoYearsAgo",
          titleSlotName: "twoYearsAgoTitle"
        },
        {
          title: "操作",
          align: "center",
          width: 150,
          show: true,
          headerCellStyle: {
            backgroundColor: "#F9F9F9",
            color: "#333333"
          },
          slotName: "operate",
          titleSlotName: "operateTitle"
        }
      ];
    };
    const visibleColumnsData = computed(() => createMajorTableColumns().filter((item) => !!item.show));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_table = Table;
      const _component_a_popover = Popover;
      const _component_icon_down = IconDown;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-070f1c38>`);
      _push(ssrRenderComponent(_component_a_table, {
        class: "cursor-pointer",
        "table-layout-fixed": "",
        columns: unref(visibleColumnsData),
        data: _ctx.data.list,
        loading: _ctx.loading,
        pagination: false,
        bordered: false,
        onChange: (data) => _ctx.$emit("draggable", data),
        draggable: _ctx.draggable ? { type: "handle", width: 40 } : void 0
      }, {
        odds: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{
              "text-[#7C92FF]": record.lqgl < 60,
              "text-[#5AB9FF]": record.lqgl >= 60 && record.lqgl <= 90,
              "text-[#FFA864]": record.lqgl > 90
            }, "flex items-center flex-col"])}" data-v-070f1c38${_scopeId}><div class="${ssrRenderClass([{
              "bg-[#F2F5FF]": record.lqgl < 60,
              "bg-[#EFF8FF]": record.lqgl >= 60 && record.lqgl <= 90,
              "bg-[#FFF7F0]": record.lqgl > 90
            }, "w-[22px] h-[22px] rounded-[4px]"])}" data-v-070f1c38${_scopeId}>${ssrInterpolate(record.lqgl < 60 ? "冲" : record.lqgl <= 90 ? "稳" : "保")}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(record.lqgl ? record.lqgl : 1)}%</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["flex items-center flex-col", {
                  "text-[#7C92FF]": record.lqgl < 60,
                  "text-[#5AB9FF]": record.lqgl >= 60 && record.lqgl <= 90,
                  "text-[#FFA864]": record.lqgl > 90
                }]
              }, [
                createVNode("div", {
                  class: ["w-[22px] h-[22px] rounded-[4px]", {
                    "bg-[#F2F5FF]": record.lqgl < 60,
                    "bg-[#EFF8FF]": record.lqgl >= 60 && record.lqgl <= 90,
                    "bg-[#FFF7F0]": record.lqgl > 90
                  }]
                }, toDisplayString(record.lqgl < 60 ? "冲" : record.lqgl <= 90 ? "稳" : "保"), 3),
                createVNode("div", null, toDisplayString(record.lqgl ? record.lqgl : 1) + "%", 1)
              ], 2)
            ];
          }
        }),
        enrollmentSchool: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="text-left" data-v-070f1c38${_scopeId}><div class="font-bold" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc))}</div><div class="text-[#999] text-[12px]" data-v-070f1c38${_scopeId}><div data-v-070f1c38${_scopeId}><span class="mr-[5px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.sf, ""))}</span><span class="mr-[5px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxcs, ""))}</span>`);
            if ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), record.bxxz)) == null ? void 0 : _a.label) {
              _push2(`<span class="mr-[5px]" data-v-070f1c38${_scopeId}>${ssrInterpolate((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), record.bxxz)) == null ? void 0 : _b.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (record.is985 === "是") {
              _push2(`<span class="mr-[5px]" data-v-070f1c38${_scopeId}>985</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (record.is211 === "是") {
              _push2(`<span class="mr-[5px]" data-v-070f1c38${_scopeId}>211</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (record.issyl === "是") {
              _push2(`<span class="mr-[5px]" data-v-070f1c38${_scopeId}>双一流</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (record.isgzd === "是") {
              _push2(`<span class="mr-[5px]" data-v-070f1c38${_scopeId}>国重点</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (record.isby === "是") {
              _push2(`<span class="mr-[5px]" data-v-070f1c38${_scopeId}>保研</span>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yxlx)) == null ? void 0 : _c.label) {
              _push2(`<span data-v-070f1c38${_scopeId}>${ssrInterpolate((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yxlx)) == null ? void 0 : _d.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div data-v-070f1c38${_scopeId}><span class="mr-[5px]" data-v-070f1c38${_scopeId}>代码<span class="ml-[2px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxdm))}</span></span>`);
            if (record.rankin) {
              _push2(`<span class="mr-[5px]" data-v-070f1c38${_scopeId}> 排名<span class="ml-[2px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.rankin)))}</span></span>`);
            } else {
              _push2(`<!---->`);
            }
            if (record.byl) {
              _push2(`<span class="mr-[5px]" data-v-070f1c38${_scopeId}> 保研率<span class="ml-[2px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.byl)))}</span></span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-left" }, [
                createVNode("div", {
                  class: "font-bold",
                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${record.yxid}`, {
                    open: {
                      target: "_blank"
                    }
                  })
                }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc)), 9, ["onClick"]),
                createVNode("div", { class: "text-[#999] text-[12px]" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "mr-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.sf, "")), 1),
                    createVNode("span", { class: "mr-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxcs, "")), 1),
                    ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), record.bxxz)) == null ? void 0 : _e.label) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "mr-[5px]"
                    }, toDisplayString((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), record.bxxz)) == null ? void 0 : _f.label), 1)) : createCommentVNode("", true),
                    record.is985 === "是" ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "mr-[5px]"
                    }, "985")) : createCommentVNode("", true),
                    record.is211 === "是" ? (openBlock(), createBlock("span", {
                      key: 2,
                      class: "mr-[5px]"
                    }, "211")) : createCommentVNode("", true),
                    record.issyl === "是" ? (openBlock(), createBlock("span", {
                      key: 3,
                      class: "mr-[5px]"
                    }, "双一流")) : createCommentVNode("", true),
                    record.isgzd === "是" ? (openBlock(), createBlock("span", {
                      key: 4,
                      class: "mr-[5px]"
                    }, "国重点")) : createCommentVNode("", true),
                    record.isby === "是" ? (openBlock(), createBlock("span", {
                      key: 5,
                      class: "mr-[5px]"
                    }, "保研")) : createCommentVNode("", true),
                    ((_g = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yxlx)) == null ? void 0 : _g.label) ? (openBlock(), createBlock("span", { key: 6 }, toDisplayString((_h = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yxlx)) == null ? void 0 : _h.label), 1)) : createCommentVNode("", true)
                  ]),
                  createVNode("div", null, [
                    createVNode("span", { class: "mr-[5px]" }, [
                      createTextVNode("代码"),
                      createVNode("span", { class: "ml-[2px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxdm)), 1)
                    ]),
                    record.rankin ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "mr-[5px]"
                    }, [
                      createTextVNode(" 排名"),
                      createVNode("span", { class: "ml-[2px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.rankin))), 1)
                    ])) : createCommentVNode("", true),
                    record.byl ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "mr-[5px]"
                    }, [
                      createTextVNode(" 保研率"),
                      createVNode("span", { class: "ml-[2px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.byl))), 1)
                    ])) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        enrollmentMajorTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-070f1c38${_scopeId}>${ssrInterpolate(_ctx.data.year)}招生专业</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(_ctx.data.year) + "招生专业", 1)
            ];
          }
        }),
        enrollmentMajor: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h;
          if (_push2) {
            _push2(`<div class="text-left" data-v-070f1c38${_scopeId}><div class="font-bold" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc))}</div><div class="text-[#999] text-[12px]" data-v-070f1c38${_scopeId}><div data-v-070f1c38${_scopeId}><span class="mr-[5px]" data-v-070f1c38${_scopeId}> 学费<span class="ml-[2px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.xf, ""), "元"))}</span></span><span class="mr-[5px]" data-v-070f1c38${_scopeId}> 学制<span class="ml-[2px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.xz, "年"))}</span></span><span class="mr-[5px]" data-v-070f1c38${_scopeId}> 选科<span class="ml-[2px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.xk))}</span></span></div><div class="flex items-center flex-wrap" data-v-070f1c38${_scopeId}><div class="mr-[5px]" data-v-070f1c38${_scopeId}> 代码<span class="ml-[2px]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zydm))}</span></div>`);
            _push2(ssrRenderComponent(_component_a_popover, {
              trigger: "hover",
              position: "bottom"
            }, {
              content: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 专业近年无历史录取数据，请依据综合信息填志原 `);
                } else {
                  return [
                    createTextVNode(" 专业近年无历史录取数据，请依据综合信息填志原 ")
                  ];
                }
              }),
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  if (record.isnew === "是") {
                    _push3(`<div class="px-[2px] text-center rounded-[4px] bg-[#5AB9FF] text-white mr-[5px]" data-v-070f1c38${_scopeId2}> 新 </div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    record.isnew === "是" ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "px-[2px] text-center rounded-[4px] bg-[#5AB9FF] text-white mr-[5px]"
                    }, " 新 ")) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
            if (((_a = record == null ? void 0 : record.requirements) == null ? void 0 : _a.length) || ((_b = record == null ? void 0 : record.dualclassList) == null ? void 0 : _b.length) || ((_c = record == null ? void 0 : record.cdeList) == null ? void 0 : _c.length) || ((_d = record == null ? void 0 : record.zyList) == null ? void 0 : _d.length)) {
              _push2(ssrRenderComponent(_component_a_popover, {
                trigger: "click",
                position: "bottom"
              }, {
                content: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i, _j, _k, _l, _m, _n;
                  if (_push3) {
                    _push3(`<div class="flex" data-v-070f1c38${_scopeId2}>`);
                    if ((_a2 = record == null ? void 0 : record.requirements) == null ? void 0 : _a2.length) {
                      _push3(`<div class="${ssrRenderClass([{
                        "border-solid border-r border-[#EDEDED]": (_b2 = record == null ? void 0 : record.dualclassList) == null ? void 0 : _b2.length
                      }, "px-[10px] min-w-[150px]"])}" data-v-070f1c38${_scopeId2}><div class="text-[#333] text-[14px] mb-[10px]" data-v-070f1c38${_scopeId2}> 招生要求 </div><!--[-->`);
                      ssrRenderList(record == null ? void 0 : record.requirements, (item) => {
                        _push3(`<div data-v-070f1c38${_scopeId2}><div class="flex items-center justify-between text-[12px]" data-v-070f1c38${_scopeId2}><div data-v-070f1c38${_scopeId2}>${ssrInterpolate(item.id)}</div><div class="text-[#FFA864]" data-v-070f1c38${_scopeId2}>${ssrInterpolate(item.name)}</div></div></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_c2 = record == null ? void 0 : record.dualclassList) == null ? void 0 : _c2.length) {
                      _push3(`<div class="${ssrRenderClass([{
                        "border-solid border-r border-[#EDEDED]": (_d2 = record == null ? void 0 : record.cdeList) == null ? void 0 : _d2.length
                      }, "px-[10px] min-w-[150px]"])}" data-v-070f1c38${_scopeId2}><div class="text-[#333] text-[14px] mb-[10px]" data-v-070f1c38${_scopeId2}> 双一流学科 </div><!--[-->`);
                      ssrRenderList(record == null ? void 0 : record.dualclassList, (item) => {
                        _push3(`<div class="text-[12px]" data-v-070f1c38${_scopeId2}><div data-v-070f1c38${_scopeId2}>${ssrInterpolate(item.name)}</div></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_e2 = record == null ? void 0 : record.cdeList) == null ? void 0 : _e2.length) {
                      _push3(`<div class="${ssrRenderClass([{
                        "border-solid border-r border-[#EDEDED]": (_f2 = record == null ? void 0 : record.zyList) == null ? void 0 : _f2.length
                      }, "px-[10px] min-w-[150px]"])}" data-v-070f1c38${_scopeId2}><div class="text-[#333] text-[14px] mb-[10px]" data-v-070f1c38${_scopeId2}> 学科评估 </div><!--[-->`);
                      ssrRenderList(record == null ? void 0 : record.cdeList, (item) => {
                        _push3(`<div data-v-070f1c38${_scopeId2}><div class="flex items-center justify-between text-[12px]" data-v-070f1c38${_scopeId2}><div data-v-070f1c38${_scopeId2}>${ssrInterpolate(item.id)}</div><div class="font-bold ml-[20px]" data-v-070f1c38${_scopeId2}>${ssrInterpolate(item.name)}</div></div></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_g2 = record == null ? void 0 : record.zyList) == null ? void 0 : _g2.length) {
                      _push3(`<div class="px-[10px] min-w-[150px]" data-v-070f1c38${_scopeId2}><div class="text-[#333] text-[14px] mb-[10px]" data-v-070f1c38${_scopeId2}> 专业详情 </div><!--[-->`);
                      ssrRenderList(record == null ? void 0 : record.zyList, (item) => {
                        _push3(`<div data-v-070f1c38${_scopeId2}><div class="flex items-center justify-between text-[12px] cursor-pointer" data-v-070f1c38${_scopeId2}><div data-v-070f1c38${_scopeId2}>${ssrInterpolate(item.name)}</div><div class="text-[#7C92FF] ml-[20px]" data-v-070f1c38${_scopeId2}>详情</div></div></div>`);
                      });
                      _push3(`<!--]--></div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex" }, [
                        ((_h2 = record == null ? void 0 : record.requirements) == null ? void 0 : _h2.length) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["px-[10px] min-w-[150px]", {
                            "border-solid border-r border-[#EDEDED]": (_i = record == null ? void 0 : record.dualclassList) == null ? void 0 : _i.length
                          }]
                        }, [
                          createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 招生要求 "),
                          (openBlock(true), createBlock(Fragment, null, renderList(record == null ? void 0 : record.requirements, (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.name
                            }, [
                              createVNode("div", { class: "flex items-center justify-between text-[12px]" }, [
                                createVNode("div", null, toDisplayString(item.id), 1),
                                createVNode("div", { class: "text-[#FFA864]" }, toDisplayString(item.name), 1)
                              ])
                            ]);
                          }), 128))
                        ], 2)) : createCommentVNode("", true),
                        ((_j = record == null ? void 0 : record.dualclassList) == null ? void 0 : _j.length) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: ["px-[10px] min-w-[150px]", {
                            "border-solid border-r border-[#EDEDED]": (_k = record == null ? void 0 : record.cdeList) == null ? void 0 : _k.length
                          }]
                        }, [
                          createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 双一流学科 "),
                          (openBlock(true), createBlock(Fragment, null, renderList(record == null ? void 0 : record.dualclassList, (item) => {
                            return openBlock(), createBlock("div", {
                              class: "text-[12px]",
                              key: item.name
                            }, [
                              createVNode("div", null, toDisplayString(item.name), 1)
                            ]);
                          }), 128))
                        ], 2)) : createCommentVNode("", true),
                        ((_l = record == null ? void 0 : record.cdeList) == null ? void 0 : _l.length) ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: ["px-[10px] min-w-[150px]", {
                            "border-solid border-r border-[#EDEDED]": (_m = record == null ? void 0 : record.zyList) == null ? void 0 : _m.length
                          }]
                        }, [
                          createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 学科评估 "),
                          (openBlock(true), createBlock(Fragment, null, renderList(record == null ? void 0 : record.cdeList, (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.name
                            }, [
                              createVNode("div", { class: "flex items-center justify-between text-[12px]" }, [
                                createVNode("div", null, toDisplayString(item.id), 1),
                                createVNode("div", { class: "font-bold ml-[20px]" }, toDisplayString(item.name), 1)
                              ])
                            ]);
                          }), 128))
                        ], 2)) : createCommentVNode("", true),
                        ((_n = record == null ? void 0 : record.zyList) == null ? void 0 : _n.length) ? (openBlock(), createBlock("div", {
                          key: 3,
                          class: "px-[10px] min-w-[150px]"
                        }, [
                          createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 专业详情 "),
                          (openBlock(true), createBlock(Fragment, null, renderList(record == null ? void 0 : record.zyList, (item) => {
                            return openBlock(), createBlock("div", {
                              key: item.name
                            }, [
                              createVNode("div", {
                                class: "flex items-center justify-between text-[12px] cursor-pointer",
                                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${item.id}`, {
                                  open: {
                                    target: "_blank"
                                  }
                                })
                              }, [
                                createVNode("div", null, toDisplayString(item.name), 1),
                                createVNode("div", { class: "text-[#7C92FF] ml-[20px]" }, "详情")
                              ], 8, ["onClick"])
                            ]);
                          }), 128))
                        ])) : createCommentVNode("", true)
                      ])
                    ];
                  }
                }),
                default: withCtx((_, _push3, _parent3, _scopeId2) => {
                  var _a2, _b2, _c2, _d2, _e2, _f2;
                  if (_push3) {
                    _push3(`<div class="flex items-center" data-v-070f1c38${_scopeId2}>`);
                    if ((_a2 = record == null ? void 0 : record.requirements) == null ? void 0 : _a2.length) {
                      _push3(`<div class="px-[2px] h-[17px] text-center leading-[17px] rounded-[4px] bg-[#FFA864] text-white mr-[2px]" data-v-070f1c38${_scopeId2}> 要求 </div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_b2 = record == null ? void 0 : record.dualclassList) == null ? void 0 : _b2.length) {
                      _push3(`<div class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" data-v-070f1c38${_scopeId2}> 一流学科 </div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if ((_c2 = record == null ? void 0 : record.cdeList) == null ? void 0 : _c2.length) {
                      _push3(`<div class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" data-v-070f1c38${_scopeId2}> 学科评估${ssrInterpolate(record == null ? void 0 : record.cdeList[0].name)}</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`<div class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" data-v-070f1c38${_scopeId2}> 详情`);
                    _push3(ssrRenderComponent(_component_icon_down, null, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        ((_d2 = record == null ? void 0 : record.requirements) == null ? void 0 : _d2.length) ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "px-[2px] h-[17px] text-center leading-[17px] rounded-[4px] bg-[#FFA864] text-white mr-[2px]"
                        }, " 要求 ")) : createCommentVNode("", true),
                        ((_e2 = record == null ? void 0 : record.dualclassList) == null ? void 0 : _e2.length) ? (openBlock(), createBlock("div", {
                          key: 1,
                          class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
                        }, " 一流学科 ")) : createCommentVNode("", true),
                        ((_f2 = record == null ? void 0 : record.cdeList) == null ? void 0 : _f2.length) ? (openBlock(), createBlock("div", {
                          key: 2,
                          class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
                        }, " 学科评估" + toDisplayString(record == null ? void 0 : record.cdeList[0].name), 1)) : createCommentVNode("", true),
                        createVNode("div", { class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" }, [
                          createTextVNode(" 详情"),
                          createVNode(_component_icon_down)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-left" }, [
                createVNode("div", { class: "font-bold" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1),
                createVNode("div", { class: "text-[#999] text-[12px]" }, [
                  createVNode("div", null, [
                    createVNode("span", { class: "mr-[5px]" }, [
                      createTextVNode(" 学费"),
                      createVNode("span", { class: "ml-[2px]" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.xf, ""), "元")), 1)
                    ]),
                    createVNode("span", { class: "mr-[5px]" }, [
                      createTextVNode(" 学制"),
                      createVNode("span", { class: "ml-[2px]" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.xz, "年")), 1)
                    ]),
                    createVNode("span", { class: "mr-[5px]" }, [
                      createTextVNode(" 选科"),
                      createVNode("span", { class: "ml-[2px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.xk)), 1)
                    ])
                  ]),
                  createVNode("div", { class: "flex items-center flex-wrap" }, [
                    createVNode("div", { class: "mr-[5px]" }, [
                      createTextVNode(" 代码"),
                      createVNode("span", { class: "ml-[2px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zydm)), 1)
                    ]),
                    createVNode(_component_a_popover, {
                      trigger: "hover",
                      position: "bottom"
                    }, {
                      content: withCtx(() => [
                        createTextVNode(" 专业近年无历史录取数据，请依据综合信息填志原 ")
                      ]),
                      default: withCtx(() => [
                        record.isnew === "是" ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "px-[2px] text-center rounded-[4px] bg-[#5AB9FF] text-white mr-[5px]"
                        }, " 新 ")) : createCommentVNode("", true)
                      ]),
                      _: 2
                    }, 1024),
                    ((_e = record == null ? void 0 : record.requirements) == null ? void 0 : _e.length) || ((_f = record == null ? void 0 : record.dualclassList) == null ? void 0 : _f.length) || ((_g = record == null ? void 0 : record.cdeList) == null ? void 0 : _g.length) || ((_h = record == null ? void 0 : record.zyList) == null ? void 0 : _h.length) ? (openBlock(), createBlock(_component_a_popover, {
                      key: 0,
                      trigger: "click",
                      position: "bottom"
                    }, {
                      content: withCtx(() => {
                        var _a2, _b2, _c2, _d2, _e2, _f2, _g2;
                        return [
                          createVNode("div", { class: "flex" }, [
                            ((_a2 = record == null ? void 0 : record.requirements) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: ["px-[10px] min-w-[150px]", {
                                "border-solid border-r border-[#EDEDED]": (_b2 = record == null ? void 0 : record.dualclassList) == null ? void 0 : _b2.length
                              }]
                            }, [
                              createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 招生要求 "),
                              (openBlock(true), createBlock(Fragment, null, renderList(record == null ? void 0 : record.requirements, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.name
                                }, [
                                  createVNode("div", { class: "flex items-center justify-between text-[12px]" }, [
                                    createVNode("div", null, toDisplayString(item.id), 1),
                                    createVNode("div", { class: "text-[#FFA864]" }, toDisplayString(item.name), 1)
                                  ])
                                ]);
                              }), 128))
                            ], 2)) : createCommentVNode("", true),
                            ((_c2 = record == null ? void 0 : record.dualclassList) == null ? void 0 : _c2.length) ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: ["px-[10px] min-w-[150px]", {
                                "border-solid border-r border-[#EDEDED]": (_d2 = record == null ? void 0 : record.cdeList) == null ? void 0 : _d2.length
                              }]
                            }, [
                              createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 双一流学科 "),
                              (openBlock(true), createBlock(Fragment, null, renderList(record == null ? void 0 : record.dualclassList, (item) => {
                                return openBlock(), createBlock("div", {
                                  class: "text-[12px]",
                                  key: item.name
                                }, [
                                  createVNode("div", null, toDisplayString(item.name), 1)
                                ]);
                              }), 128))
                            ], 2)) : createCommentVNode("", true),
                            ((_e2 = record == null ? void 0 : record.cdeList) == null ? void 0 : _e2.length) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: ["px-[10px] min-w-[150px]", {
                                "border-solid border-r border-[#EDEDED]": (_f2 = record == null ? void 0 : record.zyList) == null ? void 0 : _f2.length
                              }]
                            }, [
                              createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 学科评估 "),
                              (openBlock(true), createBlock(Fragment, null, renderList(record == null ? void 0 : record.cdeList, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.name
                                }, [
                                  createVNode("div", { class: "flex items-center justify-between text-[12px]" }, [
                                    createVNode("div", null, toDisplayString(item.id), 1),
                                    createVNode("div", { class: "font-bold ml-[20px]" }, toDisplayString(item.name), 1)
                                  ])
                                ]);
                              }), 128))
                            ], 2)) : createCommentVNode("", true),
                            ((_g2 = record == null ? void 0 : record.zyList) == null ? void 0 : _g2.length) ? (openBlock(), createBlock("div", {
                              key: 3,
                              class: "px-[10px] min-w-[150px]"
                            }, [
                              createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 专业详情 "),
                              (openBlock(true), createBlock(Fragment, null, renderList(record == null ? void 0 : record.zyList, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.name
                                }, [
                                  createVNode("div", {
                                    class: "flex items-center justify-between text-[12px] cursor-pointer",
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${item.id}`, {
                                      open: {
                                        target: "_blank"
                                      }
                                    })
                                  }, [
                                    createVNode("div", null, toDisplayString(item.name), 1),
                                    createVNode("div", { class: "text-[#7C92FF] ml-[20px]" }, "详情")
                                  ], 8, ["onClick"])
                                ]);
                              }), 128))
                            ])) : createCommentVNode("", true)
                          ])
                        ];
                      }),
                      default: withCtx(() => {
                        var _a2, _b2, _c2;
                        return [
                          createVNode("div", { class: "flex items-center" }, [
                            ((_a2 = record == null ? void 0 : record.requirements) == null ? void 0 : _a2.length) ? (openBlock(), createBlock("div", {
                              key: 0,
                              class: "px-[2px] h-[17px] text-center leading-[17px] rounded-[4px] bg-[#FFA864] text-white mr-[2px]"
                            }, " 要求 ")) : createCommentVNode("", true),
                            ((_b2 = record == null ? void 0 : record.dualclassList) == null ? void 0 : _b2.length) ? (openBlock(), createBlock("div", {
                              key: 1,
                              class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
                            }, " 一流学科 ")) : createCommentVNode("", true),
                            ((_c2 = record == null ? void 0 : record.cdeList) == null ? void 0 : _c2.length) ? (openBlock(), createBlock("div", {
                              key: 2,
                              class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
                            }, " 学科评估" + toDisplayString(record == null ? void 0 : record.cdeList[0].name), 1)) : createCommentVNode("", true),
                            createVNode("div", { class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" }, [
                              createTextVNode(" 详情"),
                              createVNode(_component_icon_down)
                            ])
                          ])
                        ];
                      }),
                      _: 2
                    }, 1024)) : createCommentVNode("", true)
                  ])
                ])
              ])
            ];
          }
        }),
        planTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-070f1c38${_scopeId}>${ssrInterpolate(_ctx.data.year)}计划</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(_ctx.data.year) + "计划", 1)
            ];
          }
        }),
        plan: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.curModule === "major") {
              _push2(`<div class="text-[#999] text-[12px] text-left" data-v-070f1c38${_scopeId}><div data-v-070f1c38${_scopeId}><span class="font-bold !text-[20px] text-[#333]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs))}</span>`);
              if (record.lqrs) {
                _push2(`<span data-v-070f1c38${_scopeId}>人</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (record.lqrs - record.twolqrs > 0 || record.lqrs - record.twolqrs < 0) {
                _push2(`<span class="${ssrRenderClass({
                  "text-[#FFA864]": record.lqrs - record.twolqrs > 0,
                  "text-[#5AB9FF]": record.lqrs - record.twolqrs < 0
                })}" data-v-070f1c38${_scopeId}>${ssrInterpolate(record.lqrs - record.twolqrs > 0 ? "+" + (record.lqrs - record.twolqrs) : record.lqrs - record.twolqrs)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div><div data-v-070f1c38${_scopeId}>院校${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.yxlqrs, "0") + "人")}</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.curModule === "school") {
              _push2(`<div data-v-070f1c38${_scopeId}><span class="font-bold !text-[18px] text-[#333]" data-v-070f1c38${_scopeId}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.yxlqrs))}</span>`);
              if (record.yxlqrs) {
                _push2(`<span class="!text-[12px] text-[#999]" data-v-070f1c38${_scopeId}>人</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (record.yxlqrs - record.twolqrs > 0 || record.yxlqrs - record.twolqrs < 0) {
                _push2(`<span class="${ssrRenderClass({
                  "text-[#FFA864]": record.yxlqrs - record.twolqrs > 0,
                  "text-[#5AB9FF]": record.yxlqrs - record.twolqrs < 0
                })}" data-v-070f1c38${_scopeId}>${ssrInterpolate(record.yxlqrs - record.twolqrs > 0 ? "+" + (record.yxlqrs - record.twolqrs) : record.yxlqrs - record.twolqrs)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              _ctx.curModule === "major" ? (openBlock(), createBlock("div", {
                key: 0,
                class: "text-[#999] text-[12px] text-left"
              }, [
                createVNode("div", null, [
                  createVNode("span", { class: "font-bold !text-[20px] text-[#333]" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs)), 1),
                  record.lqrs ? (openBlock(), createBlock("span", { key: 0 }, "人")) : createCommentVNode("", true),
                  record.lqrs - record.twolqrs > 0 || record.lqrs - record.twolqrs < 0 ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: {
                      "text-[#FFA864]": record.lqrs - record.twolqrs > 0,
                      "text-[#5AB9FF]": record.lqrs - record.twolqrs < 0
                    }
                  }, toDisplayString(record.lqrs - record.twolqrs > 0 ? "+" + (record.lqrs - record.twolqrs) : record.lqrs - record.twolqrs), 3)) : createCommentVNode("", true)
                ]),
                createVNode("div", null, "院校" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.yxlqrs, "0") + "人"), 1)
              ])) : createCommentVNode("", true),
              _ctx.curModule === "school" ? (openBlock(), createBlock("div", { key: 1 }, [
                createVNode("span", { class: "font-bold !text-[18px] text-[#333]" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.yxlqrs)), 1),
                record.yxlqrs ? (openBlock(), createBlock("span", {
                  key: 0,
                  class: "!text-[12px] text-[#999]"
                }, "人")) : createCommentVNode("", true),
                record.yxlqrs - record.twolqrs > 0 || record.yxlqrs - record.twolqrs < 0 ? (openBlock(), createBlock("span", {
                  key: 1,
                  class: {
                    "text-[#FFA864]": record.yxlqrs - record.twolqrs > 0,
                    "text-[#5AB9FF]": record.yxlqrs - record.twolqrs < 0
                  }
                }, toDisplayString(record.yxlqrs - record.twolqrs > 0 ? "+" + (record.yxlqrs - record.twolqrs) : record.yxlqrs - record.twolqrs), 3)) : createCommentVNode("", true)
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        score: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-[#999] text-[12px]" data-v-070f1c38${_scopeId}><div data-v-070f1c38${_scopeId}>同位分</div><div data-v-070f1c38${_scopeId}>最低分</div><div data-v-070f1c38${_scopeId}>最低位</div><div data-v-070f1c38${_scopeId}>计划数</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-[#999] text-[12px]" }, [
                createVNode("div", null, "同位分"),
                createVNode("div", null, "最低分"),
                createVNode("div", null, "最低位"),
                createVNode("div", null, "计划数")
              ])
            ];
          }
        }),
        newYearTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-070f1c38${_scopeId}>${ssrInterpolate(_ctx.data.year)}年</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(_ctx.data.year) + "年", 1)
            ];
          }
        }),
        newYear: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-left text-[12px]" data-v-070f1c38${_scopeId}><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.onetwf, ""), "分"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.onezdf, ""), "分"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.onezdwc, ""), "位"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(
              ("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                _ctx.curModule === "major" ? record.lqrs : record.yxlqrs,
                ""
              ),
              "人"
            ))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-left text-[12px]" }, [
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.onetwf, ""), "分")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.onezdf, ""), "分")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.onezdwc, ""), "位")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(
                  ("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                    _ctx.curModule === "major" ? record.lqrs : record.yxlqrs,
                    ""
                  ),
                  "人"
                )), 1)
              ])
            ];
          }
        }),
        lastYearTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-070f1c38${_scopeId}>${ssrInterpolate(_ctx.data.year - 1)}年</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(_ctx.data.year - 1) + "年", 1)
            ];
          }
        }),
        lastYear: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-left text-[12px]" data-v-070f1c38${_scopeId}><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.twotwf, ""), "分"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.twozdf, ""), "分"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.twozdwc, ""), "位"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.twolqrs, ""), "人"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-left text-[12px]" }, [
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.twotwf, ""), "分")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.twozdf, ""), "分")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.twozdwc, ""), "位")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.twolqrs, ""), "人")), 1)
              ])
            ];
          }
        }),
        twoYearsAgoTitle: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div data-v-070f1c38${_scopeId}>${ssrInterpolate(_ctx.data.year - 2)}年</div>`);
          } else {
            return [
              createVNode("div", null, toDisplayString(_ctx.data.year - 2) + "年", 1)
            ];
          }
        }),
        twoYearsAgo: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-left text-[12px]" data-v-070f1c38${_scopeId}><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.threetwf, ""), "分"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.threezdf, ""), "分"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.threezdwc, ""), "位"))}</div><div data-v-070f1c38${_scopeId}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.threelqrs, ""), "人"))}</div></div>`);
          } else {
            return [
              createVNode("div", { class: "text-left text-[12px]" }, [
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.threetwf, ""), "分")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.threezdf, ""), "分")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.threezdwc, ""), "位")), 1),
                createVNode("div", null, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.threelqrs, ""), "人")), 1)
              ])
            ];
          }
        }),
        operateTitle: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "operateTitle", { record }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "operateTitle", { record }, void 0, true)
            ];
          }
        }),
        operate: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "operate", { record }, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "operate", { record }, void 0, true)
            ];
          }
        }),
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "empty", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "empty", {}, void 0, true)
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_070f1c38_lang = "";
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceMajorTable/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_16 = /* @__PURE__ */ _export_sfc$1(_sfc_main$5, [["__scopeId", "data-v-070f1c38"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    defaultList: { default: () => [] },
    itemClass: { default: "" },
    isDraggable: { type: Boolean, default: false }
  },
  emits: ["draggable"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const draggableList = ref([...props.defaultList]);
    const onEnd = (e) => {
      emits("draggable", draggableList.value, e);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_tooltip = Tooltip;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(unref(VueDraggable), {
        modelValue: unref(draggableList),
        "onUpdate:modelValue": ($event) => isRef(draggableList) ? draggableList.value = $event : null,
        "drag-class": "draggable-drag",
        handle: ".draggable-drag",
        onEnd
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(draggableList), (item, index) => {
              _push2(`<div class="${ssrRenderClass(_ctx.itemClass)}"${_scopeId}><div class="flex items-center"${_scopeId}><div class="flex-1"${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "row", {
                record: item,
                rowIndex: index
              }, null, _push2, _parent2, _scopeId);
              _push2(`</div>`);
              if (_ctx.isDraggable) {
                _push2(`<div class="shrink-0 draggable-drag"${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "drag", {}, () => {
                  _push2(ssrRenderComponent(_component_a_tooltip, { content: "拖动" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="mr-[20px]"${_scopeId2}><i class="iconfont icon-tuodong text-[#7C92FF]"${_scopeId2}></i></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "mr-[20px]" }, [
                            createVNode("i", { class: "iconfont icon-tuodong text-[#7C92FF]" })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                }, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
              if (item.children) {
                _push2(`<div${_scopeId}>`);
                ssrRenderSlot(_ctx.$slots, "children", { record: item }, null, _push2, _parent2, _scopeId);
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(draggableList), (item, index) => {
                return openBlock(), createBlock("div", { class: _ctx.itemClass }, [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "flex-1" }, [
                      renderSlot(_ctx.$slots, "row", {
                        record: item,
                        rowIndex: index
                      })
                    ]),
                    _ctx.isDraggable ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "shrink-0 draggable-drag"
                    }, [
                      renderSlot(_ctx.$slots, "drag", {}, () => [
                        createVNode(_component_a_tooltip, { content: "拖动" }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "mr-[20px]" }, [
                              createVNode("i", { class: "iconfont icon-tuodong text-[#7C92FF]" })
                            ])
                          ]),
                          _: 1
                        })
                      ])
                    ])) : createCommentVNode("", true)
                  ]),
                  item.children ? (openBlock(), createBlock("div", { key: 0 }, [
                    renderSlot(_ctx.$slots, "children", { record: item })
                  ])) : createCommentVNode("", true)
                ], 2);
              }), 256))
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsDraggableList/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => ({}) },
    isMajor: { type: Boolean, default: false }
  },
  setup(__props) {
    const { getDictionValue } = useWebsiteInformation();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
      const _component_a_popover = Popover;
      const _component_icon_down = IconDown;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center w-full my-[10px] !text-[14px]" }, _attrs))} data-v-8f482ed6><div class="${ssrRenderClass([{
        "text-[#7C92FF]": _ctx.data.lqgl < 60,
        "text-[#5AB9FF]": _ctx.data.lqgl >= 60 && _ctx.data.lqgl <= 90,
        "text-[#FFA864]": _ctx.data.lqgl > 90
      }, "flex items-center flex-col w-[70px]"])}" data-v-8f482ed6><div class="${ssrRenderClass([{
        "bg-[#F2F5FF]": _ctx.data.lqgl < 60,
        "bg-[#EFF8FF]": _ctx.data.lqgl >= 60 && _ctx.data.lqgl <= 90,
        "bg-[#FFF7F0]": _ctx.data.lqgl > 90
      }, "w-[22px] leading-[22px] text-center h-[22px] rounded-[4px]"])}" data-v-8f482ed6>${ssrInterpolate(_ctx.data.lqgl < 60 ? "冲" : _ctx.data.lqgl <= 90 ? "稳" : "保")}</div><div data-v-8f482ed6>${ssrInterpolate(_ctx.data.lqgl ? _ctx.data.lqgl : 1)}%</div></div><div class="text-left flex-1" data-v-8f482ed6>`);
      if (!_ctx.isMajor) {
        _push(`<!--[--><div class="font-bold cursor-pointer" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.yxmc))}</div><div class="text-[#999] text-[12px]" data-v-8f482ed6><div data-v-8f482ed6><span class="mr-[5px]" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.sf, ""))}</span><span class="mr-[5px]" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.yxcs, ""))}</span>`);
        if ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), _ctx.data.bxxz)) == null ? void 0 : _a.label) {
          _push(`<span class="mr-[5px]" data-v-8f482ed6>${ssrInterpolate((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), _ctx.data.bxxz)) == null ? void 0 : _b.label)}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.is985 === "是") {
          _push(`<span class="mr-[5px]" data-v-8f482ed6>985</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.is211 === "是") {
          _push(`<span class="mr-[5px]" data-v-8f482ed6>211</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.issyl === "是") {
          _push(`<span class="mr-[5px]" data-v-8f482ed6>双一流</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.isgzd === "是") {
          _push(`<span class="mr-[5px]" data-v-8f482ed6>国重点</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.isby === "是") {
          _push(`<span class="mr-[5px]" data-v-8f482ed6>保研</span>`);
        } else {
          _push(`<!---->`);
        }
        if ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), _ctx.data.yxlx)) == null ? void 0 : _c.label) {
          _push(`<span data-v-8f482ed6>${ssrInterpolate((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), _ctx.data.yxlx)) == null ? void 0 : _d.label)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-8f482ed6><span class="mr-[5px]" data-v-8f482ed6>代码<span class="ml-[2px]" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.yxdm))}</span></span>`);
        if (_ctx.data.rankin) {
          _push(`<span class="mr-[5px]" data-v-8f482ed6> 排名<span class="ml-[2px]" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.rankin)))}</span></span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.byl) {
          _push(`<span class="mr-[5px]" data-v-8f482ed6> 保研率<span class="ml-[2px]" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.byl)))}</span></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><!--]-->`);
      } else {
        _push(`<div class="mx-[20px]" data-v-8f482ed6><div class="font-bold" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.zymc))}</div><div class="text-[#999] text-[12px]" data-v-8f482ed6><div data-v-8f482ed6><span class="mr-[5px]" data-v-8f482ed6> 学费<span class="ml-[2px]" data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.xf, ""), "元"))}</span></span><span class="mr-[5px]" data-v-8f482ed6> 学制<span class="ml-[2px]" data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(_ctx.data.xz, "年"))}</span></span><span class="mr-[5px]" data-v-8f482ed6> 选科<span class="ml-[2px]" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.xk))}</span></span></div><div class="flex items-center flex-wrap" data-v-8f482ed6><div class="mr-[5px]" data-v-8f482ed6> 代码<span class="ml-[2px]" data-v-8f482ed6>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(_ctx.data.zydm))}</span></div>`);
        _push(ssrRenderComponent(_component_a_popover, {
          trigger: "hover",
          position: "bottom"
        }, {
          content: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` 专业近年无历史录取数据，请依据综合信息填志原 `);
            } else {
              return [
                createTextVNode(" 专业近年无历史录取数据，请依据综合信息填志原 ")
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              if (_ctx.data.isnew === "是") {
                _push2(`<div class="px-[2px] text-center rounded-[4px] bg-[#5AB9FF] text-white mr-[5px]" data-v-8f482ed6${_scopeId}> 新 </div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                _ctx.data.isnew === "是" ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "px-[2px] text-center rounded-[4px] bg-[#5AB9FF] text-white mr-[5px]"
                }, " 新 ")) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        if (((_f = (_e = _ctx.data) == null ? void 0 : _e.requirements) == null ? void 0 : _f.length) || ((_h = (_g = _ctx.data) == null ? void 0 : _g.dualclassList) == null ? void 0 : _h.length) || ((_j = (_i = _ctx.data) == null ? void 0 : _i.cdeList) == null ? void 0 : _j.length) || ((_l = (_k = _ctx.data) == null ? void 0 : _k.zyList) == null ? void 0 : _l.length)) {
          _push(ssrRenderComponent(_component_a_popover, {
            trigger: "click",
            position: "bottom"
          }, {
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
              if (_push2) {
                _push2(`<div class="flex" data-v-8f482ed6${_scopeId}>`);
                if ((_b2 = (_a2 = _ctx.data) == null ? void 0 : _a2.requirements) == null ? void 0 : _b2.length) {
                  _push2(`<div class="${ssrRenderClass([{
                    "border-solid border-r border-[#EDEDED]": (_d2 = (_c2 = _ctx.data) == null ? void 0 : _c2.dualclassList) == null ? void 0 : _d2.length
                  }, "px-[10px] min-w-[150px]"])}" data-v-8f482ed6${_scopeId}><div class="text-[#333] text-[14px] mb-[10px]" data-v-8f482ed6${_scopeId}> 招生要求 </div><!--[-->`);
                  ssrRenderList((_e2 = _ctx.data) == null ? void 0 : _e2.requirements, (item) => {
                    _push2(`<div data-v-8f482ed6${_scopeId}><div class="flex items-center justify-between text-[12px]" data-v-8f482ed6${_scopeId}><div data-v-8f482ed6${_scopeId}>${ssrInterpolate(item.id)}</div><div class="text-[#FFA864]" data-v-8f482ed6${_scopeId}>${ssrInterpolate(item.name)}</div></div></div>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if ((_g2 = (_f2 = _ctx.data) == null ? void 0 : _f2.dualclassList) == null ? void 0 : _g2.length) {
                  _push2(`<div class="${ssrRenderClass([{
                    "border-solid border-r border-[#EDEDED]": (_i2 = (_h2 = _ctx.data) == null ? void 0 : _h2.cdeList) == null ? void 0 : _i2.length
                  }, "px-[10px] min-w-[150px]"])}" data-v-8f482ed6${_scopeId}><div class="text-[#333] text-[14px] mb-[10px]" data-v-8f482ed6${_scopeId}> 双一流学科 </div><!--[-->`);
                  ssrRenderList((_j2 = _ctx.data) == null ? void 0 : _j2.dualclassList, (item) => {
                    _push2(`<div class="text-[12px]" data-v-8f482ed6${_scopeId}><div data-v-8f482ed6${_scopeId}>${ssrInterpolate(item.name)}</div></div>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if ((_l2 = (_k2 = _ctx.data) == null ? void 0 : _k2.cdeList) == null ? void 0 : _l2.length) {
                  _push2(`<div class="${ssrRenderClass([{
                    "border-solid border-r border-[#EDEDED]": (_n = (_m = _ctx.data) == null ? void 0 : _m.zyList) == null ? void 0 : _n.length
                  }, "px-[10px] min-w-[150px]"])}" data-v-8f482ed6${_scopeId}><div class="text-[#333] text-[14px] mb-[10px]" data-v-8f482ed6${_scopeId}> 学科评估 </div><!--[-->`);
                  ssrRenderList((_o = _ctx.data) == null ? void 0 : _o.cdeList, (item) => {
                    _push2(`<div data-v-8f482ed6${_scopeId}><div class="flex items-center justify-between text-[12px]" data-v-8f482ed6${_scopeId}><div data-v-8f482ed6${_scopeId}>${ssrInterpolate(item.id)}</div><div class="font-bold ml-[20px]" data-v-8f482ed6${_scopeId}>${ssrInterpolate(item.name)}</div></div></div>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if ((_q = (_p = _ctx.data) == null ? void 0 : _p.zyList) == null ? void 0 : _q.length) {
                  _push2(`<div class="px-[10px] min-w-[150px]" data-v-8f482ed6${_scopeId}><div class="text-[#333] text-[14px] mb-[10px]" data-v-8f482ed6${_scopeId}> 专业详情 </div><!--[-->`);
                  ssrRenderList((_r = _ctx.data) == null ? void 0 : _r.zyList, (item) => {
                    _push2(`<div data-v-8f482ed6${_scopeId}><div class="flex items-center justify-between text-[12px] cursor-pointer" data-v-8f482ed6${_scopeId}><div data-v-8f482ed6${_scopeId}>${ssrInterpolate(item.name)}</div><div class="text-[#7C92FF] ml-[20px]" data-v-8f482ed6${_scopeId}>详情</div></div></div>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex" }, [
                    ((_t = (_s = _ctx.data) == null ? void 0 : _s.requirements) == null ? void 0 : _t.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ["px-[10px] min-w-[150px]", {
                        "border-solid border-r border-[#EDEDED]": (_v = (_u = _ctx.data) == null ? void 0 : _u.dualclassList) == null ? void 0 : _v.length
                      }]
                    }, [
                      createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 招生要求 "),
                      (openBlock(true), createBlock(Fragment, null, renderList((_w = _ctx.data) == null ? void 0 : _w.requirements, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.name
                        }, [
                          createVNode("div", { class: "flex items-center justify-between text-[12px]" }, [
                            createVNode("div", null, toDisplayString(item.id), 1),
                            createVNode("div", { class: "text-[#FFA864]" }, toDisplayString(item.name), 1)
                          ])
                        ]);
                      }), 128))
                    ], 2)) : createCommentVNode("", true),
                    ((_y = (_x = _ctx.data) == null ? void 0 : _x.dualclassList) == null ? void 0 : _y.length) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: ["px-[10px] min-w-[150px]", {
                        "border-solid border-r border-[#EDEDED]": (_A = (_z = _ctx.data) == null ? void 0 : _z.cdeList) == null ? void 0 : _A.length
                      }]
                    }, [
                      createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 双一流学科 "),
                      (openBlock(true), createBlock(Fragment, null, renderList((_B = _ctx.data) == null ? void 0 : _B.dualclassList, (item) => {
                        return openBlock(), createBlock("div", {
                          class: "text-[12px]",
                          key: item.name
                        }, [
                          createVNode("div", null, toDisplayString(item.name), 1)
                        ]);
                      }), 128))
                    ], 2)) : createCommentVNode("", true),
                    ((_D = (_C = _ctx.data) == null ? void 0 : _C.cdeList) == null ? void 0 : _D.length) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: ["px-[10px] min-w-[150px]", {
                        "border-solid border-r border-[#EDEDED]": (_F = (_E = _ctx.data) == null ? void 0 : _E.zyList) == null ? void 0 : _F.length
                      }]
                    }, [
                      createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 学科评估 "),
                      (openBlock(true), createBlock(Fragment, null, renderList((_G = _ctx.data) == null ? void 0 : _G.cdeList, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.name
                        }, [
                          createVNode("div", { class: "flex items-center justify-between text-[12px]" }, [
                            createVNode("div", null, toDisplayString(item.id), 1),
                            createVNode("div", { class: "font-bold ml-[20px]" }, toDisplayString(item.name), 1)
                          ])
                        ]);
                      }), 128))
                    ], 2)) : createCommentVNode("", true),
                    ((_I = (_H = _ctx.data) == null ? void 0 : _H.zyList) == null ? void 0 : _I.length) ? (openBlock(), createBlock("div", {
                      key: 3,
                      class: "px-[10px] min-w-[150px]"
                    }, [
                      createVNode("div", { class: "text-[#333] text-[14px] mb-[10px]" }, " 专业详情 "),
                      (openBlock(true), createBlock(Fragment, null, renderList((_J = _ctx.data) == null ? void 0 : _J.zyList, (item) => {
                        return openBlock(), createBlock("div", {
                          key: item.name
                        }, [
                          createVNode("div", {
                            class: "flex items-center justify-between text-[12px] cursor-pointer",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${item.id}`, {
                              open: {
                                target: "_blank"
                              }
                            })
                          }, [
                            createVNode("div", null, toDisplayString(item.name), 1),
                            createVNode("div", { class: "text-[#7C92FF] ml-[20px]" }, "详情")
                          ], 8, ["onClick"])
                        ]);
                      }), 128))
                    ])) : createCommentVNode("", true)
                  ])
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a2, _b2, _c2, _d2, _e2, _f2, _g2, _h2, _i2, _j2, _k2, _l2, _m, _n;
              if (_push2) {
                _push2(`<div class="flex items-center" data-v-8f482ed6${_scopeId}>`);
                if ((_b2 = (_a2 = _ctx.data) == null ? void 0 : _a2.requirements) == null ? void 0 : _b2.length) {
                  _push2(`<div class="px-[2px] h-[17px] text-center leading-[17px] rounded-[4px] bg-[#FFA864] text-white mr-[2px]" data-v-8f482ed6${_scopeId}> 要求 </div>`);
                } else {
                  _push2(`<!---->`);
                }
                if ((_d2 = (_c2 = _ctx.data) == null ? void 0 : _c2.dualclassList) == null ? void 0 : _d2.length) {
                  _push2(`<div class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" data-v-8f482ed6${_scopeId}> 一流学科 </div>`);
                } else {
                  _push2(`<!---->`);
                }
                if ((_f2 = (_e2 = _ctx.data) == null ? void 0 : _e2.cdeList) == null ? void 0 : _f2.length) {
                  _push2(`<div class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" data-v-8f482ed6${_scopeId}> 学科评估${ssrInterpolate((_g2 = _ctx.data) == null ? void 0 : _g2.cdeList[0].name)}</div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`<div class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" data-v-8f482ed6${_scopeId}> 详情`);
                _push2(ssrRenderComponent(_component_icon_down, null, null, _parent2, _scopeId));
                _push2(`</div></div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center" }, [
                    ((_i2 = (_h2 = _ctx.data) == null ? void 0 : _h2.requirements) == null ? void 0 : _i2.length) ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "px-[2px] h-[17px] text-center leading-[17px] rounded-[4px] bg-[#FFA864] text-white mr-[2px]"
                    }, " 要求 ")) : createCommentVNode("", true),
                    ((_k2 = (_j2 = _ctx.data) == null ? void 0 : _j2.dualclassList) == null ? void 0 : _k2.length) ? (openBlock(), createBlock("div", {
                      key: 1,
                      class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
                    }, " 一流学科 ")) : createCommentVNode("", true),
                    ((_m = (_l2 = _ctx.data) == null ? void 0 : _l2.cdeList) == null ? void 0 : _m.length) ? (openBlock(), createBlock("div", {
                      key: 2,
                      class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
                    }, " 学科评估" + toDisplayString((_n = _ctx.data) == null ? void 0 : _n.cdeList[0].name), 1)) : createCommentVNode("", true),
                    createVNode("div", { class: "px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]" }, [
                      createTextVNode(" 详情"),
                      createVNode(_component_icon_down)
                    ])
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      }
      _push(`</div>`);
      if (_ctx.isMajor) {
        _push(`<div class="text-[#999] text-[12px] text-left w-[100px]" data-v-8f482ed6><div data-v-8f482ed6><span class="font-bold !text-[20px] text-[#333]" data-v-8f482ed6>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.lqrs))}</span>`);
        if (_ctx.data.lqrs) {
          _push(`<span data-v-8f482ed6>人</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.lqrs - _ctx.data.twolqrs > 0 || _ctx.data.lqrs - _ctx.data.twolqrs < 0) {
          _push(`<span class="${ssrRenderClass({
            "text-[#FFA864]": _ctx.data.lqrs - _ctx.data.twolqrs > 0,
            "text-[#5AB9FF]": _ctx.data.lqrs - _ctx.data.twolqrs < 0
          })}" data-v-8f482ed6>${ssrInterpolate(_ctx.data.lqrs - _ctx.data.twolqrs > 0 ? "+" + (_ctx.data.lqrs - _ctx.data.twolqrs) : _ctx.data.lqrs - _ctx.data.twolqrs)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div data-v-8f482ed6>院校${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.yxlqrs, "0") + "人")}</div></div>`);
      } else {
        _push(`<div class="text-left w-[100px]" data-v-8f482ed6><span class="font-bold !text-[18px] text-[#333] w-[100px]" data-v-8f482ed6>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.yxlqrs))}</span>`);
        if (_ctx.data.yxlqrs) {
          _push(`<span class="!text-[12px] text-[#999]" data-v-8f482ed6>人</span>`);
        } else {
          _push(`<!---->`);
        }
        if (_ctx.data.yxlqrs - _ctx.data.twolqrs > 0 || _ctx.data.yxlqrs - _ctx.data.twolqrs < 0) {
          _push(`<span class="${ssrRenderClass({
            "text-[#FFA864]": _ctx.data.yxlqrs - _ctx.data.twolqrs > 0,
            "text-[#5AB9FF]": _ctx.data.yxlqrs - _ctx.data.twolqrs < 0
          })}" data-v-8f482ed6>${ssrInterpolate(_ctx.data.yxlqrs - _ctx.data.twolqrs > 0 ? "+" + (_ctx.data.yxlqrs - _ctx.data.twolqrs) : _ctx.data.yxlqrs - _ctx.data.twolqrs)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      }
      _push(`<div class="text-[#999] text-[12px] w-[70px]" data-v-8f482ed6><div data-v-8f482ed6>同位分</div><div data-v-8f482ed6>最低分</div><div data-v-8f482ed6>最低位</div><div data-v-8f482ed6>计划数</div></div><div class="text-left text-[12px] w-[80px]" data-v-8f482ed6><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.onetwf, ""), "分"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.onezdf, ""), "分"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.onezdwc, ""), "位"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.isMajor ? _ctx.data.lqrs : _ctx.data.yxlqrs, ""), "人"))}</div></div><div class="text-left text-[12px] w-[80px]" data-v-8f482ed6><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.twotwf, ""), "分"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.twozdf, ""), "分"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.twozdwc, ""), "位"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.twolqrs, ""), "人"))}</div></div><div class="text-left text-[12px] w-[80px]" data-v-8f482ed6><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.threetwf, ""), "分"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.threezdf, ""), "分"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.threezdwc, ""), "位"))}</div><div data-v-8f482ed6>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(_ctx.data.threelqrs, ""), "人"))}</div></div><div class="w-[150px]" data-v-8f482ed6>`);
      ssrRenderSlot(_ctx.$slots, "operate", { record: _ctx.data }, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_8f482ed6_lang = "";
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceProfessionalGroupItem/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc$1(_sfc_main$3, [["__scopeId", "data-v-8f482ed6"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => {
    } }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { $zsFetch } = useNuxtApp();
    const { getDictionValue } = useWebsiteInformation();
    const { form } = useForm(() => ({
      ...props.data,
      zymc: "",
      zyl: ""
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      academicYearsRefresh();
    });
    const createPlanTableColumns = () => {
      return [
        {
          title: "概率",
          align: "center",
          width: 70,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "odds"
        },
        {
          title: "专业名称",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "批次",
          dataIndex: "pc",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "人数",
          dataIndex: "lqrs",
          align: "center",
          ellipsis: true,
          tooltip: true,
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "lqrs"
        },
        {
          title: "学制",
          dataIndex: "xz",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return record.xz.includes("年") ? record.xz : record.xz + "年";
          }
        },
        {
          title: "学费",
          dataIndex: "xf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "xf"
        },
        {
          title: "选考科目",
          dataIndex: "xk",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          }
        }
      ];
    };
    const createMajorTableColumns = () => {
      return [
        {
          title: "年份",
          dataIndex: "nf",
          align: "center",
          width: 70,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "专业",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "类型/批次",
          dataIndex: "pc",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "type"
        },
        {
          title: "选考科目",
          dataIndex: "xk",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "人数",
          dataIndex: "lqrs",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "lqrs"
        },
        {
          title: "最高分",
          dataIndex: "zgf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zgf"
        },
        {
          title: "平均分",
          dataIndex: "pjf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "pjf"
        },
        {
          title: "最低分",
          dataIndex: "zdf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zdf"
        },
        {
          title: "最低位次",
          dataIndex: "zdfwc",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zdfwc"
        }
      ];
    };
    const createSchoolTableColumns = () => {
      return [
        {
          title: "年份",
          dataIndex: "nf",
          align: "center",
          width: 70,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "专业",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "类型/批次",
          dataIndex: "pc",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "type"
        },
        {
          title: "选考科目",
          dataIndex: "xk",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "人数",
          dataIndex: "lqrs",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "lqrs"
        },
        {
          title: "最高分",
          dataIndex: "zgf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zgf"
        },
        {
          title: "平均分",
          dataIndex: "pjf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "pjf"
        },
        {
          title: "最低分",
          dataIndex: "zdf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zdf"
        },
        {
          title: "最低位次",
          dataIndex: "zdfwc",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zdfwc"
        }
      ];
    };
    const changeFilter = (val) => {
      form.value = {
        ...form.value,
        ...val
      };
      resetData();
    };
    const {
      data: professionalYearsData,
      status: professionalYearsStatus,
      refresh: professionalYearsRefresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "professionalYearsList",
      async () => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _i;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.MAJOR_HISTORY_PLAN, {
          body: {
            id: form.value.id
          }
        });
        return {
          dataList: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.dataList) ?? [],
          planList: ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.planList) ?? [],
          similarList: ((_d = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.similarList) == null ? void 0 : _d.map((o) => {
            return {
              value: o,
              label: o
            };
          })) ?? [],
          year: (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.year,
          yxdm: (_f = res == null ? void 0 : res.data) == null ? void 0 : _f.yxdm,
          yxmc: (_g = res == null ? void 0 : res.data) == null ? void 0 : _g.yxmc,
          zydm: (_h = res == null ? void 0 : res.data) == null ? void 0 : _h.zydm,
          zymc: (_i = res == null ? void 0 : res.data) == null ? void 0 : _i.zymc
        };
      },
      {
        default: () => ({
          dataList: [],
          planList: [],
          similarList: [],
          year: 0,
          yxdm: "",
          yxmc: "",
          zydm: "",
          zymc: ""
        }),
        immediate: false
      }
    )), __temp = await __temp, __restore(), __temp);
    const {
      data: academicYearsList,
      status: academicYearsStatus,
      refresh: academicYearsRefresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "majorAcademicYearsList",
      async () => {
        var _a;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.SCHOOL_HISTORY_PLAN, {
          body: {
            yxmc: form.value.yxmc,
            zymc: form.value.zymc,
            zyl: form.value.zyl,
            currentPage: pagination.value.current,
            pageSize: pagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        pagination.value.total = res.data.totalCount ?? 0;
        return ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) ?? [];
      },
      {
        default: () => [],
        immediate: false
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$7;
      const _component_zs_title = _sfc_main$8;
      const _component_a_table = Table;
      const _component_icon_exclamation_circle = IconExclamationCircle;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_zs_select_filter = _sfc_main$9;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        "content-class": "w-[1100px]",
        title: "",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n;
          if (_push2) {
            _push2(`<div class="leading-loose text-xs h-[85vh] flex flex-col" data-v-5d3a8d7f${_scopeId}><div class="flex items-center" data-v-5d3a8d7f${_scopeId}><div class="text-[24px] font-bold" data-v-5d3a8d7f${_scopeId}>专业历年分析</div><div class="text-[12px] text-[#999999]" data-v-5d3a8d7f${_scopeId}><span class="ml-[20px]" data-v-5d3a8d7f${_scopeId}>院校代码 ${ssrInterpolate((_a = unref(professionalYearsData)) == null ? void 0 : _a.yxdm)}</span><span class="ml-[20px]" data-v-5d3a8d7f${_scopeId}>${ssrInterpolate((_b = unref(professionalYearsData)) == null ? void 0 : _b.yxmc)}</span><span class="ml-[20px]" data-v-5d3a8d7f${_scopeId}>专业代码 ${ssrInterpolate((_c = unref(professionalYearsData)) == null ? void 0 : _c.zydm)}</span><span class="ml-[20px]" data-v-5d3a8d7f${_scopeId}>${ssrInterpolate((_d = unref(professionalYearsData)) == null ? void 0 : _d.zymc)}</span></div></div><div class="flex-1 overflow-auto no-scrollbar" data-v-5d3a8d7f${_scopeId}>`);
            _push2(ssrRenderComponent(_component_zs_title, {
              title: `${(_e = unref(professionalYearsData)) == null ? void 0 : _e.year}年招生计划`,
              size: "mini",
              color: "#7C92FF"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_table, {
              class: "cursor-pointer",
              "table-layout-fixed": "",
              loading: unref(professionalYearsStatus) === "pending",
              columns: createPlanTableColumns(),
              data: (_f = unref(professionalYearsData)) == null ? void 0 : _f.planList
            }, {
              odds: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([{
                    "text-[#7C92FF]": record.lqgl < 60,
                    "text-[#EFF8FF]": record.lqgl > 60 && record.lqgl <= 90,
                    "text-[#FFA864]": record.lqgl > 90
                  }, "flex items-center flex-col"])}" data-v-5d3a8d7f${_scopeId2}><div class="${ssrRenderClass([{
                    "bg-[#F2F5FF]": record.lqgl < 60,
                    "bg-[#EFF8FF]": record.lqgl > 60 && record.lqgl <= 90,
                    "bg-[#FFF7F0]": record.lqgl > 90
                  }, "w-[22px] h-[22px] rounded-[4px]"])}" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.lqgl < 60 ? "冲" : record.lqgl <= 90 ? "稳" : "保")}</div><div data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.lqgl ? record.lqgl : 1)}%</div></div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["flex items-center flex-col", {
                        "text-[#7C92FF]": record.lqgl < 60,
                        "text-[#EFF8FF]": record.lqgl > 60 && record.lqgl <= 90,
                        "text-[#FFA864]": record.lqgl > 90
                      }]
                    }, [
                      createVNode("div", {
                        class: ["w-[22px] h-[22px] rounded-[4px]", {
                          "bg-[#F2F5FF]": record.lqgl < 60,
                          "bg-[#EFF8FF]": record.lqgl > 60 && record.lqgl <= 90,
                          "bg-[#FFF7F0]": record.lqgl > 90
                        }]
                      }, toDisplayString(record.lqgl < 60 ? "冲" : record.lqgl <= 90 ? "稳" : "保"), 3),
                      createVNode("div", null, toDisplayString(record.lqgl ? record.lqgl : 1) + "%", 1)
                    ], 2)
                  ];
                }
              }),
              zymc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left" data-v-5d3a8d7f${_scopeId2}><div data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.zymc)}</div><div class="text-[12px] text-[#999]" data-v-5d3a8d7f${_scopeId2}>代码 ${ssrInterpolate(record.zydm)}</div><div class="text-[12px] text-[#999]" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, ""))}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, [
                      createVNode("div", null, toDisplayString(record.zymc), 1),
                      createVNode("div", { class: "text-[12px] text-[#999]" }, "代码 " + toDisplayString(record.zydm), 1),
                      createVNode("div", { class: "text-[12px] text-[#999]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, "")), 1)
                    ])
                  ];
                }
              }),
              lqrs: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人"))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
                  ];
                }
              }),
              xf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.xf, ""), "元"))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.xf, ""), "元")), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_zs_title, {
              title: "专业历年数据",
              size: "mini",
              color: "#7C92FF",
              class: "mt-[20px]"
            }, {
              center: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-[#999] text-[12px]" data-v-5d3a8d7f${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_icon_exclamation_circle, { class: "mr-[5px]" }, null, _parent3, _scopeId2));
                  _push3(`因招生变动因素较多，匹配专业仅供参考，请根据多方信息谨慎选择。 </div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-[#999] text-[12px]" }, [
                      createVNode(_component_icon_exclamation_circle, { class: "mr-[5px]" }),
                      createTextVNode("因招生变动因素较多，匹配专业仅供参考，请根据多方信息谨慎选择。 ")
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_table, {
              class: "cursor-pointer",
              "table-layout-fixed": "",
              loading: unref(professionalYearsStatus) === "pending",
              columns: createMajorTableColumns(),
              data: (_g = unref(professionalYearsData)) == null ? void 0 : _g.dataList
            }, {
              zymc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.zymc)}</div><div class="text-[#999] text-[12px] text-left" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, ""))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, toDisplayString(record.zymc), 1),
                    createVNode("div", { class: "text-[#999] text-[12px] text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, "")), 1)
                  ];
                }
              }),
              type: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-center" data-v-5d3a8d7f${_scopeId2}><div data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.zslx)}</div><div class="text-[#999] text-[12px]" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.pc)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-center" }, [
                      createVNode("div", null, toDisplayString(record.zslx), 1),
                      createVNode("div", { class: "text-[#999] text-[12px]" }, toDisplayString(record.pc), 1)
                    ])
                  ];
                }
              }),
              lqrs: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人"))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
                  ];
                }
              }),
              zgf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf))), 1)
                  ];
                }
              }),
              pjf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf))), 1)
                  ];
                }
              }),
              zdf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf))), 1)
                  ];
                }
              }),
              zdfwc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc))), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_zs_title, {
              title: "院校历年数据",
              size: "mini",
              color: "#7C92FF",
              class: "mt-[20px]"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_input, {
              style: { width: "260px" },
              modelValue: unref(form).zymc,
              "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
              modelModifiers: { trim: true },
              placeholder: "搜索专业关键词",
              "allow-clear": "",
              onClear: ($event) => unref(resetData)(),
              onChange: ($event) => unref(resetData)()
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon_search, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_icon_search)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_zs_select_filter, {
              data: [
                {
                  title: "相关专业",
                  key: "zyl",
                  isShow: true,
                  multiple: false,
                  options: [..."NO_LIMIT_OPTIONS" in _ctx ? _ctx.NO_LIMIT_OPTIONS : unref(NO_LIMIT_OPTIONS), ...unref(professionalYearsData).similarList]
                }
              ],
              "default-values": {
                zyl: unref(form).zyl
              },
              onChange: changeFilter,
              class: "mt-[10px]"
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_table, {
              class: "cursor-pointer mt-[10px]",
              "table-layout-fixed": "",
              loading: unref(academicYearsStatus) === "pending",
              columns: createSchoolTableColumns(),
              pagination: unref(pagination),
              onPageChange: unref(onPageChange),
              onPageSizeChange: unref(onPageSizeChange),
              data: unref(academicYearsList)
            }, {
              zymc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.zymc)}</div><div class="text-[#999] text-[12px] text-left" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, ""))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, toDisplayString(record.zymc), 1),
                    createVNode("div", { class: "text-[#999] text-[12px] text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, "")), 1)
                  ];
                }
              }),
              type: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<div class="text-left" data-v-5d3a8d7f${_scopeId2}><div data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.zslx)}</div><div class="text-[#999] text-[12px]" data-v-5d3a8d7f${_scopeId2}><span data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate((_a2 = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yx_lx)) == null ? void 0 : _a2.label)}</span><span class="ml-[10px]" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(record.pc)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, [
                      createVNode("div", null, toDisplayString(record.zslx), 1),
                      createVNode("div", { class: "text-[#999] text-[12px]" }, [
                        createVNode("span", null, toDisplayString((_b2 = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yx_lx)) == null ? void 0 : _b2.label), 1),
                        createVNode("span", { class: "ml-[10px]" }, toDisplayString(record.pc), 1)
                      ])
                    ])
                  ];
                }
              }),
              lqrs: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人"))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
                  ];
                }
              }),
              zgf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf))), 1)
                  ];
                }
              }),
              pjf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf, "0")))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf, "0"))), 1)
                  ];
                }
              }),
              zdf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf))), 1)
                  ];
                }
              }),
              zdfwc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-5d3a8d7f${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc))), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "leading-loose text-xs h-[85vh] flex flex-col" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-[24px] font-bold" }, "专业历年分析"),
                  createVNode("div", { class: "text-[12px] text-[#999999]" }, [
                    createVNode("span", { class: "ml-[20px]" }, "院校代码 " + toDisplayString((_h = unref(professionalYearsData)) == null ? void 0 : _h.yxdm), 1),
                    createVNode("span", { class: "ml-[20px]" }, toDisplayString((_i = unref(professionalYearsData)) == null ? void 0 : _i.yxmc), 1),
                    createVNode("span", { class: "ml-[20px]" }, "专业代码 " + toDisplayString((_j = unref(professionalYearsData)) == null ? void 0 : _j.zydm), 1),
                    createVNode("span", { class: "ml-[20px]" }, toDisplayString((_k = unref(professionalYearsData)) == null ? void 0 : _k.zymc), 1)
                  ])
                ]),
                createVNode("div", { class: "flex-1 overflow-auto no-scrollbar" }, [
                  createVNode(_component_zs_title, {
                    title: `${(_l = unref(professionalYearsData)) == null ? void 0 : _l.year}年招生计划`,
                    size: "mini",
                    color: "#7C92FF"
                  }, null, 8, ["title"]),
                  createVNode(_component_a_table, {
                    class: "cursor-pointer",
                    "table-layout-fixed": "",
                    loading: unref(professionalYearsStatus) === "pending",
                    columns: createPlanTableColumns(),
                    data: (_m = unref(professionalYearsData)) == null ? void 0 : _m.planList
                  }, {
                    odds: withCtx(({ record }) => [
                      createVNode("div", {
                        class: ["flex items-center flex-col", {
                          "text-[#7C92FF]": record.lqgl < 60,
                          "text-[#EFF8FF]": record.lqgl > 60 && record.lqgl <= 90,
                          "text-[#FFA864]": record.lqgl > 90
                        }]
                      }, [
                        createVNode("div", {
                          class: ["w-[22px] h-[22px] rounded-[4px]", {
                            "bg-[#F2F5FF]": record.lqgl < 60,
                            "bg-[#EFF8FF]": record.lqgl > 60 && record.lqgl <= 90,
                            "bg-[#FFF7F0]": record.lqgl > 90
                          }]
                        }, toDisplayString(record.lqgl < 60 ? "冲" : record.lqgl <= 90 ? "稳" : "保"), 3),
                        createVNode("div", null, toDisplayString(record.lqgl ? record.lqgl : 1) + "%", 1)
                      ], 2)
                    ]),
                    zymc: withCtx(({ record }) => [
                      createVNode("div", { class: "text-left" }, [
                        createVNode("div", null, toDisplayString(record.zymc), 1),
                        createVNode("div", { class: "text-[12px] text-[#999]" }, "代码 " + toDisplayString(record.zydm), 1),
                        createVNode("div", { class: "text-[12px] text-[#999]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, "")), 1)
                      ])
                    ]),
                    lqrs: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
                    ]),
                    xf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.xf, ""), "元")), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "columns", "data"]),
                  createVNode(_component_zs_title, {
                    title: "专业历年数据",
                    size: "mini",
                    color: "#7C92FF",
                    class: "mt-[20px]"
                  }, {
                    center: withCtx(() => [
                      createVNode("div", { class: "text-[#999] text-[12px]" }, [
                        createVNode(_component_icon_exclamation_circle, { class: "mr-[5px]" }),
                        createTextVNode("因招生变动因素较多，匹配专业仅供参考，请根据多方信息谨慎选择。 ")
                      ])
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_table, {
                    class: "cursor-pointer",
                    "table-layout-fixed": "",
                    loading: unref(professionalYearsStatus) === "pending",
                    columns: createMajorTableColumns(),
                    data: (_n = unref(professionalYearsData)) == null ? void 0 : _n.dataList
                  }, {
                    zymc: withCtx(({ record }) => [
                      createVNode("div", { class: "text-left" }, toDisplayString(record.zymc), 1),
                      createVNode("div", { class: "text-[#999] text-[12px] text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, "")), 1)
                    ]),
                    type: withCtx(({ record }) => [
                      createVNode("div", { class: "text-center" }, [
                        createVNode("div", null, toDisplayString(record.zslx), 1),
                        createVNode("div", { class: "text-[#999] text-[12px]" }, toDisplayString(record.pc), 1)
                      ])
                    ]),
                    lqrs: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
                    ]),
                    zgf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf))), 1)
                    ]),
                    pjf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf))), 1)
                    ]),
                    zdf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf))), 1)
                    ]),
                    zdfwc: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc))), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "columns", "data"]),
                  createVNode(_component_zs_title, {
                    title: "院校历年数据",
                    size: "mini",
                    color: "#7C92FF",
                    class: "mt-[20px]"
                  }),
                  createVNode(_component_a_input, {
                    style: { width: "260px" },
                    modelValue: unref(form).zymc,
                    "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
                    modelModifiers: { trim: true },
                    placeholder: "搜索专业关键词",
                    "allow-clear": "",
                    onClear: ($event) => unref(resetData)(),
                    onChange: ($event) => unref(resetData)()
                  }, {
                    prefix: withCtx(() => [
                      createVNode(_component_icon_search)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "onClear", "onChange"]),
                  createVNode(_component_zs_select_filter, {
                    data: [
                      {
                        title: "相关专业",
                        key: "zyl",
                        isShow: true,
                        multiple: false,
                        options: [..."NO_LIMIT_OPTIONS" in _ctx ? _ctx.NO_LIMIT_OPTIONS : unref(NO_LIMIT_OPTIONS), ...unref(professionalYearsData).similarList]
                      }
                    ],
                    "default-values": {
                      zyl: unref(form).zyl
                    },
                    onChange: changeFilter,
                    class: "mt-[10px]"
                  }, null, 8, ["data", "default-values"]),
                  createVNode(_component_a_table, {
                    class: "cursor-pointer mt-[10px]",
                    "table-layout-fixed": "",
                    loading: unref(academicYearsStatus) === "pending",
                    columns: createSchoolTableColumns(),
                    pagination: unref(pagination),
                    onPageChange: unref(onPageChange),
                    onPageSizeChange: unref(onPageSizeChange),
                    data: unref(academicYearsList)
                  }, {
                    zymc: withCtx(({ record }) => [
                      createVNode("div", { class: "text-left" }, toDisplayString(record.zymc), 1),
                      createVNode("div", { class: "text-[#999] text-[12px] text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, "")), 1)
                    ]),
                    type: withCtx(({ record }) => {
                      var _a2;
                      return [
                        createVNode("div", { class: "text-left" }, [
                          createVNode("div", null, toDisplayString(record.zslx), 1),
                          createVNode("div", { class: "text-[#999] text-[12px]" }, [
                            createVNode("span", null, toDisplayString((_a2 = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yx_lx)) == null ? void 0 : _a2.label), 1),
                            createVNode("span", { class: "ml-[10px]" }, toDisplayString(record.pc), 1)
                          ])
                        ])
                      ];
                    }),
                    lqrs: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
                    ]),
                    zgf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf))), 1)
                    ]),
                    pjf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf, "0"))), 1)
                    ]),
                    zdf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf))), 1)
                    ]),
                    zdfwc: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc))), 1)
                    ]),
                    _: 1
                  }, 8, ["loading", "columns", "pagination", "onPageChange", "onPageSizeChange", "data"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_5d3a8d7f_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceProfessionalYearsModal/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc$1(_sfc_main$2, [["__scopeId", "data-v-5d3a8d7f"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => {
    } }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { $zsFetch } = useNuxtApp();
    const { getDictionValue } = useWebsiteInformation();
    const { form } = useForm(() => ({
      ...props.data,
      tabRadio: "全部",
      zymc: "",
      tabRadioList: [
        "全部",
        String(props.data.year),
        String(props.data.year - 1),
        String(props.data.year - 2)
      ]
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      refresh();
    });
    const createTableColumns = () => {
      return [
        {
          title: "年份",
          dataIndex: "nf",
          align: "center",
          width: 70,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "专业",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "类型/批次",
          dataIndex: "pc",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "type"
        },
        {
          title: "选考科目",
          dataIndex: "xk",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "人数",
          dataIndex: "lqrs",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "lqrs"
        },
        {
          title: "最高分",
          dataIndex: "zgf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zgf"
        },
        {
          title: "平均分",
          dataIndex: "pjf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "pjf"
        },
        {
          title: "最低分",
          dataIndex: "zdf",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zdf"
        },
        {
          title: "最低位次",
          dataIndex: "zdfwc",
          align: "center",
          width: 100,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#F9F9F9",
            fontWeight: "bold"
          },
          slotName: "zdfwc"
        }
      ];
    };
    const {
      data: list,
      status,
      refresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "academicYearsList",
      async () => {
        var _a;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.SCHOOL_HISTORY_PLAN, {
          body: {
            yxmc: form.value.yxmc,
            zymc: form.value.zymc,
            nf: form.value.tabRadio === "全部" ? "" : form.value.tabRadio,
            currentPage: pagination.value.current,
            pageSize: pagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        pagination.value.total = res.data.totalCount ?? 0;
        return ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) ?? [];
      },
      {
        default: () => [],
        immediate: false
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$7;
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_a_table = Table;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        "content-class": "w-[1100px]",
        title: "",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="leading-loose text-xs h-[85vh] flex flex-col" data-v-cd36c5f9${_scopeId}><div class="flex items-center" data-v-cd36c5f9${_scopeId}><div class="text-[24px] font-bold" data-v-cd36c5f9${_scopeId}>历年分析</div><div class="text-[24px] font-bold ml-[10px]" data-v-cd36c5f9${_scopeId}>${ssrInterpolate(unref(form).yxmc)}</div></div><div class="flex items-center mt-[20px]" data-v-cd36c5f9${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_radio_group, {
              modelValue: unref(form).tabRadio,
              "onUpdate:modelValue": ($event) => unref(form).tabRadio = $event,
              class: "bg-[#F9F9F9] !rounded-[4px]",
              onChange: unref(resetData)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(form).tabRadioList, (tab, index) => {
                    _push3(ssrRenderComponent(_component_a_radio, { value: tab }, {
                      radio: withCtx(({ checked }, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white rounded-[4px]": checked }, "text-center px-[14px] leading-[32px] border-solid border border-[#EDEDED]"])}" data-v-cd36c5f9${_scopeId3}>${ssrInterpolate(tab)}</div>`);
                        } else {
                          return [
                            createVNode("div", {
                              class: ["text-center px-[14px] leading-[32px] border-solid border border-[#EDEDED]", { "bg-[#7C92FF] text-white rounded-[4px]": checked }]
                            }, toDisplayString(tab), 3)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(form).tabRadioList, (tab, index) => {
                      return openBlock(), createBlock(_component_a_radio, {
                        key: index,
                        value: tab
                      }, {
                        radio: withCtx(({ checked }) => [
                          createVNode("div", {
                            class: ["text-center px-[14px] leading-[32px] border-solid border border-[#EDEDED]", { "bg-[#7C92FF] text-white rounded-[4px]": checked }]
                          }, toDisplayString(tab), 3)
                        ]),
                        _: 2
                      }, 1032, ["value"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_input, {
              style: { width: "260px" },
              modelValue: unref(form).zymc,
              "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
              modelModifiers: { trim: true },
              placeholder: "搜索专业关键词",
              "allow-clear": "",
              onClear: ($event) => unref(resetData)(),
              onChange: ($event) => unref(resetData)(),
              class: "ml-[10px]"
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon_search, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_icon_search)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="overflow-auto no-scrollbar flex-1 mt-[20px]" data-v-cd36c5f9${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_table, {
              class: "cursor-pointer",
              "table-layout-fixed": "",
              columns: createTableColumns(),
              data: unref(list),
              pagination: unref(pagination),
              onPageChange: unref(onPageChange),
              onPageSizeChange: unref(onPageSizeChange),
              loading: unref(status) === "pending"
            }, {
              zymc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left" data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(record.zymc)}</div><div class="text-[#999] text-[12px] text-left" data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, ""))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, toDisplayString(record.zymc), 1),
                    createVNode("div", { class: "text-[#999] text-[12px] text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, "")), 1)
                  ];
                }
              }),
              type: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="text-left" data-v-cd36c5f9${_scopeId2}><div data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(record.zslx)}</div><div class="text-[#999] text-[12px]" data-v-cd36c5f9${_scopeId2}><span data-v-cd36c5f9${_scopeId2}>${ssrInterpolate((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yx_lx)) == null ? void 0 : _a.label)}</span><span class="ml-[10px]" data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(record.pc)}</span></div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, [
                      createVNode("div", null, toDisplayString(record.zslx), 1),
                      createVNode("div", { class: "text-[#999] text-[12px]" }, [
                        createVNode("span", null, toDisplayString((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yx_lx)) == null ? void 0 : _b.label), 1),
                        createVNode("span", { class: "ml-[10px]" }, toDisplayString(record.pc), 1)
                      ])
                    ])
                  ];
                }
              }),
              lqrs: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人"))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
                  ];
                }
              }),
              zgf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf))), 1)
                  ];
                }
              }),
              pjf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf, "0")))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf, "0"))), 1)
                  ];
                }
              }),
              zdf: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf))), 1)
                  ];
                }
              }),
              zdfwc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-right" data-v-cd36c5f9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc)))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc))), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "leading-loose text-xs h-[85vh] flex flex-col" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-[24px] font-bold" }, "历年分析"),
                  createVNode("div", { class: "text-[24px] font-bold ml-[10px]" }, toDisplayString(unref(form).yxmc), 1)
                ]),
                createVNode("div", { class: "flex items-center mt-[20px]" }, [
                  createVNode(_component_a_radio_group, {
                    modelValue: unref(form).tabRadio,
                    "onUpdate:modelValue": ($event) => unref(form).tabRadio = $event,
                    class: "bg-[#F9F9F9] !rounded-[4px]",
                    onChange: unref(resetData)
                  }, {
                    default: withCtx(() => [
                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).tabRadioList, (tab, index) => {
                        return openBlock(), createBlock(_component_a_radio, {
                          key: index,
                          value: tab
                        }, {
                          radio: withCtx(({ checked }) => [
                            createVNode("div", {
                              class: ["text-center px-[14px] leading-[32px] border-solid border border-[#EDEDED]", { "bg-[#7C92FF] text-white rounded-[4px]": checked }]
                            }, toDisplayString(tab), 3)
                          ]),
                          _: 2
                        }, 1032, ["value"]);
                      }), 128))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                  createVNode(_component_a_input, {
                    style: { width: "260px" },
                    modelValue: unref(form).zymc,
                    "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
                    modelModifiers: { trim: true },
                    placeholder: "搜索专业关键词",
                    "allow-clear": "",
                    onClear: ($event) => unref(resetData)(),
                    onChange: ($event) => unref(resetData)(),
                    class: "ml-[10px]"
                  }, {
                    prefix: withCtx(() => [
                      createVNode(_component_icon_search)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "onClear", "onChange"])
                ]),
                createVNode("div", { class: "overflow-auto no-scrollbar flex-1 mt-[20px]" }, [
                  createVNode(_component_a_table, {
                    class: "cursor-pointer",
                    "table-layout-fixed": "",
                    columns: createTableColumns(),
                    data: unref(list),
                    pagination: unref(pagination),
                    onPageChange: unref(onPageChange),
                    onPageSizeChange: unref(onPageSizeChange),
                    loading: unref(status) === "pending"
                  }, {
                    zymc: withCtx(({ record }) => [
                      createVNode("div", { class: "text-left" }, toDisplayString(record.zymc), 1),
                      createVNode("div", { class: "text-[#999] text-[12px] text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zybz, "")), 1)
                    ]),
                    type: withCtx(({ record }) => {
                      var _a;
                      return [
                        createVNode("div", { class: "text-left" }, [
                          createVNode("div", null, toDisplayString(record.zslx), 1),
                          createVNode("div", { class: "text-[#999] text-[12px]" }, [
                            createVNode("span", null, toDisplayString((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), record.yx_lx)) == null ? void 0 : _a.label), 1),
                            createVNode("span", { class: "ml-[10px]" }, toDisplayString(record.pc), 1)
                          ])
                        ])
                      ];
                    }),
                    lqrs: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.lqrs, ""), "人")), 1)
                    ]),
                    zgf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zgf))), 1)
                    ]),
                    pjf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.pjf, "0"))), 1)
                    ]),
                    zdf: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdf))), 1)
                    ]),
                    zdfwc: withCtx(({ record }) => [
                      createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.zdfwc))), 1)
                    ]),
                    _: 1
                  }, 8, ["columns", "data", "pagination", "onPageChange", "onPageSizeChange", "loading"])
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_cd36c5f9_lang = "";
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceAcademicYearsModal/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_22 = /* @__PURE__ */ _export_sfc$1(_sfc_main$1, [["__scopeId", "data-v-cd36c5f9"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => {
    } }
  },
  emits: ["cancel", "cancelVolunteer", "addVolunteer"],
  async setup(__props, { emit: emits }) {
    let __temp, __restore;
    const props = __props;
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const { form } = useForm(() => ({
      ...props.data,
      tabRadio: "全部",
      zymc: "",
      tabRadioList: ["全部", "普通类", "中外合作"],
      selectRow: {}
      // 当前数据
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      refresh();
    });
    const setSelectRow = (row, callBack) => {
      form.value.selectRow = row;
      if (callBack)
        callBack();
    };
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "eligibleMajorList",
      async () => {
        var _a, _b, _c, _d;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.ELIGIBLE_MAJOR_BY_YXMC, {
          body: {
            yxmc: form.value.yxmc,
            yxdm: form.value.yxdm,
            zymc: form.value.zymc,
            wid: form.value.wid,
            currentPage: pagination.value.current,
            pageSize: pagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          list: ((_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) == null ? void 0 : _b.map((o) => {
            return {
              ...o,
              isInit: true
              // 表示让父组件重新请求
            };
          })) ?? [],
          year: ((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.year) ?? 2024,
          total: ((_d = res == null ? void 0 : res.data) == null ? void 0 : _d.totalCount) ?? 0
        };
      },
      {
        default: () => ({
          list: [],
          year: 2024,
          total: 0
        }),
        immediate: false
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$7;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_zs_choice_major_table = __nuxt_component_16;
      const _component_a_space = Space;
      const _component_zs_no_data = _sfc_main$a;
      const _component_a_pagination = Pagination;
      const _component_zs_choice_professional_years_modal = __nuxt_component_7;
      const _component_zs_choice_academic_years_modal = __nuxt_component_22;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        "content-class": "w-[1100px]",
        title: "",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d;
          if (_push2) {
            _push2(`<div class="leading-loose text-xs h-[85vh] flex flex-col" data-v-3805936c${_scopeId}><div class="flex items-center" data-v-3805936c${_scopeId}><div class="text-[24px] font-bold" data-v-3805936c${_scopeId}>${ssrInterpolate(unref(form).yxmc)}</div><div class="text-[12px]" data-v-3805936c${_scopeId}><span class="text-[#7C92FF] ml-[20px] cursor-pointer" data-v-3805936c${_scopeId}>院校详情</span><span class="text-[#7C92FF] ml-[20px] cursor-pointer" data-v-3805936c${_scopeId}>院校历年</span><span class="text-[#999999] ml-[20px]" data-v-3805936c${_scopeId}>代码 ${ssrInterpolate(unref(form).yxdm)}</span></div></div><div class="flex items-center" data-v-3805936c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_input, {
              style: { width: "260px" },
              modelValue: unref(form).zymc,
              "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
              modelModifiers: { trim: true },
              placeholder: "搜索专业关键词",
              "allow-clear": "",
              onClear: ($event) => unref(resetData)(),
              onChange: ($event) => unref(resetData)(),
              class: "ml-[10px]"
            }, {
              prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_icon_search, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_icon_search)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div class="flex-1 overflow-auto no-scrollbar mt-[20px]" data-v-3805936c${_scopeId}>`);
            _push2(ssrRenderComponent(_component_zs_choice_major_table, {
              data: { list: (_a = unref(data)) == null ? void 0 : _a.list, year: unref(data).year },
              isYxmc: false,
              loading: unref(status) === "pending"
            }, {
              operateTitle: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-3805936c${_scopeId2}>操作</div>`);
                } else {
                  return [
                    createVNode("div", null, "操作")
                  ];
                }
              }),
              operate: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([{
                    "border-solid border border-[#7C92FF] text-[#7C92FF]": !record.wSort,
                    " bg-[#7C92FF] text-[#FFFFFF]": record.wSort
                  }, "h-[32px] leading-[32px] rounded-[8px]"])}" data-v-3805936c${_scopeId2}>${ssrInterpolate(record.wSort ? "志愿" + record.wSort : "加入志愿")}</div>`);
                  _push3(ssrRenderComponent(_component_a_space, { size: "small" }, {
                    default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<span class="text-[12px] text-[#7C92FF]" data-v-3805936c${_scopeId3}>专业历年</span>`);
                      } else {
                        return [
                          createVNode("span", {
                            class: "text-[12px] text-[#7C92FF]",
                            onClick: ($event) => setSelectRow(
                              {
                                id: record.id,
                                yxmc: unref(form).yxmc
                              },
                              () => unref(setActiveKey)("ZsChoiceProfessionalYearsModal")
                            )
                          }, "专业历年", 8, ["onClick"])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode("div", {
                      class: ["h-[32px] leading-[32px] rounded-[8px]", {
                        "border-solid border border-[#7C92FF] text-[#7C92FF]": !record.wSort,
                        " bg-[#7C92FF] text-[#FFFFFF]": record.wSort
                      }],
                      onClick: ($event) => record.wSort ? _ctx.$emit("cancelVolunteer", record) : _ctx.$emit("addVolunteer", record)
                    }, toDisplayString(record.wSort ? "志愿" + record.wSort : "加入志愿"), 11, ["onClick"]),
                    createVNode(_component_a_space, { size: "small" }, {
                      default: withCtx(() => [
                        createVNode("span", {
                          class: "text-[12px] text-[#7C92FF]",
                          onClick: ($event) => setSelectRow(
                            {
                              id: record.id,
                              yxmc: unref(form).yxmc
                            },
                            () => unref(setActiveKey)("ZsChoiceProfessionalYearsModal")
                          )
                        }, "专业历年", 8, ["onClick"])
                      ]),
                      _: 2
                    }, 1024)
                  ];
                }
              }),
              empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_zs_no_data, null, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_zs_no_data)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_a_pagination, {
              class: "justify-end mt-[20px]",
              total: (_b = unref(data)) == null ? void 0 : _b.total,
              current: unref(pagination).current,
              "page-size": unref(pagination).pageSize,
              onChange: unref(onPageChange),
              onPageSizeChange: unref(onPageSizeChange),
              "show-total": "",
              "show-jumper": "",
              "show-page-size": ""
            }, null, _parent2, _scopeId));
            _push2(`</div>`);
            if (unref(activeKey) === "ZsChoiceProfessionalYearsModal") {
              _push2(ssrRenderComponent(_component_zs_choice_professional_years_modal, {
                data: unref(form).selectRow,
                onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(activeKey) === "ZsChoiceAcademicYearsModal") {
              _push2(ssrRenderComponent(_component_zs_choice_academic_years_modal, {
                data: unref(form).selectRow,
                onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "leading-loose text-xs h-[85vh] flex flex-col" }, [
                createVNode("div", { class: "flex items-center" }, [
                  createVNode("div", { class: "text-[24px] font-bold" }, toDisplayString(unref(form).yxmc), 1),
                  createVNode("div", { class: "text-[12px]" }, [
                    createVNode("span", {
                      class: "text-[#7C92FF] ml-[20px] cursor-pointer",
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${unref(form).yxid}`, {
                        open: {
                          target: "_blank"
                        }
                      })
                    }, "院校详情", 8, ["onClick"]),
                    createVNode("span", {
                      class: "text-[#7C92FF] ml-[20px] cursor-pointer",
                      onClick: ($event) => setSelectRow(
                        {
                          yxmc: unref(form).yxmc,
                          year: unref(data).year
                        },
                        () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                      )
                    }, "院校历年", 8, ["onClick"]),
                    createVNode("span", { class: "text-[#999999] ml-[20px]" }, "代码 " + toDisplayString(unref(form).yxdm), 1)
                  ])
                ]),
                createVNode("div", { class: "flex items-center" }, [
                  createVNode(_component_a_input, {
                    style: { width: "260px" },
                    modelValue: unref(form).zymc,
                    "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
                    modelModifiers: { trim: true },
                    placeholder: "搜索专业关键词",
                    "allow-clear": "",
                    onClear: ($event) => unref(resetData)(),
                    onChange: ($event) => unref(resetData)(),
                    class: "ml-[10px]"
                  }, {
                    prefix: withCtx(() => [
                      createVNode(_component_icon_search)
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue", "onClear", "onChange"])
                ]),
                createVNode("div", { class: "flex-1 overflow-auto no-scrollbar mt-[20px]" }, [
                  createVNode(_component_zs_choice_major_table, {
                    data: { list: (_c = unref(data)) == null ? void 0 : _c.list, year: unref(data).year },
                    isYxmc: false,
                    loading: unref(status) === "pending"
                  }, {
                    operateTitle: withCtx(({ record }) => [
                      createVNode("div", null, "操作")
                    ]),
                    operate: withCtx(({ record }) => [
                      createVNode("div", {
                        class: ["h-[32px] leading-[32px] rounded-[8px]", {
                          "border-solid border border-[#7C92FF] text-[#7C92FF]": !record.wSort,
                          " bg-[#7C92FF] text-[#FFFFFF]": record.wSort
                        }],
                        onClick: ($event) => record.wSort ? _ctx.$emit("cancelVolunteer", record) : _ctx.$emit("addVolunteer", record)
                      }, toDisplayString(record.wSort ? "志愿" + record.wSort : "加入志愿"), 11, ["onClick"]),
                      createVNode(_component_a_space, { size: "small" }, {
                        default: withCtx(() => [
                          createVNode("span", {
                            class: "text-[12px] text-[#7C92FF]",
                            onClick: ($event) => setSelectRow(
                              {
                                id: record.id,
                                yxmc: unref(form).yxmc
                              },
                              () => unref(setActiveKey)("ZsChoiceProfessionalYearsModal")
                            )
                          }, "专业历年", 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    empty: withCtx(() => [
                      createVNode(_component_zs_no_data)
                    ]),
                    _: 1
                  }, 8, ["data", "loading"])
                ]),
                createVNode(_component_a_pagination, {
                  class: "justify-end mt-[20px]",
                  total: (_d = unref(data)) == null ? void 0 : _d.total,
                  current: unref(pagination).current,
                  "page-size": unref(pagination).pageSize,
                  onChange: unref(onPageChange),
                  onPageSizeChange: unref(onPageSizeChange),
                  "show-total": "",
                  "show-jumper": "",
                  "show-page-size": ""
                }, null, 8, ["total", "current", "page-size", "onChange", "onPageSizeChange"])
              ]),
              unref(activeKey) === "ZsChoiceProfessionalYearsModal" ? (openBlock(), createBlock(_component_zs_choice_professional_years_modal, {
                key: 0,
                data: unref(form).selectRow,
                onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
              }, null, 8, ["data", "onCancel"])) : createCommentVNode("", true),
              unref(activeKey) === "ZsChoiceAcademicYearsModal" ? (openBlock(), createBlock(_component_zs_choice_academic_years_modal, {
                key: 1,
                data: unref(form).selectRow,
                onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
              }, null, 8, ["data", "onCancel"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_3805936c_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceEligibleMajorModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_21 = /* @__PURE__ */ _export_sfc$1(_sfc_main, [["__scopeId", "data-v-3805936c"]]);
export {
  __nuxt_component_16 as _,
  _sfc_main$4 as a,
  __nuxt_component_12 as b,
  __nuxt_component_21 as c,
  __nuxt_component_22 as d
};
//# sourceMappingURL=index-03a048b2.js.map
