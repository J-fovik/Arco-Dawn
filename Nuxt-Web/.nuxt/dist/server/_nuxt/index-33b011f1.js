import { B as Button } from "./use-teleport-container-1599a5a4.js";
import { C as Checkbox } from "./index-11d38f35.js";
import { b as Input, a as IconSearch } from "./index-dd449d78.js";
import { _ as _sfc_main$1 } from "./index-3e511c39.js";
import { S as Space } from "./index-8bcd588e.js";
import { L as List, a as ListItem, b as ListItemMeta } from "./index-7a08c899.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-99c863e4.js";
import { _ as _sfc_main$2 } from "./index-33e76c07.js";
import { P as Pagination } from "./index-90aba227.js";
/* empty css                */import "./index-08fdf206.js";
/* empty css                */import "./index-f6f6f2a5.js";
import "./index-4ecc34e0.js";
import { u as useHead, e as useAsyncData, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useForm } from "./useArco-b2247a5c.js";
import { u as usePagination } from "./usePagination-23ca46d2.js";
import { A as ALL_OPTIONS } from "./options-7ec13930.js";
import { a as turnThousandth, t as textFormat } from "./index-a008b2db.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import { I as IconArrowRise, a as IconArrowFall } from "./index-aa9a0d9b.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "resize-observer-polyfill";
import "ufo";
import "hookable";
import "./NuxtImg-9bcbe2bb.js";
import "number-precision";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "查专业"
    });
    const { $zsFetch } = useNuxtApp();
    const { form } = useForm(() => ({
      isMatch: false,
      zymc: "",
      sort: ""
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 0);
      refresh();
    });
    const changeFilter = async (val) => {
      if (val.levelCode !== ccData.value.levelCode) {
        ccData.value.levelCode = val.levelCode;
        mlData.value.xkmldm = "";
        zylData.value.zyldm = [""];
        await refreshMlData();
      }
      if (val.xkmldm !== mlData.value.xkmldm) {
        mlData.value.xkmldm = val.xkmldm;
        zylData.value.zyldm = [""];
        await refreshZylData();
      }
      resetData();
    };
    const toggleSort = (key) => {
      if (form.value.sort === `${key} desc`) {
        form.value.sort = `${key} asc`;
      } else if (form.value.sort === `${key} asc`) {
        form.value.sort = "";
      } else {
        form.value.sort = `${key} desc`;
      }
      resetData();
    };
    const { data: ccData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("ccList", async () => {
      var _a, _b;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
      const ccList = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((item) => {
        return {
          ...item,
          value: item.levelCode,
          label: item.levelName
        };
      })) ?? [];
      return {
        title: "专业层次",
        key: "levelCode",
        isShow: true,
        multiple: false,
        options: ccList,
        levelCode: ((_b = ccList[0]) == null ? void 0 : _b.value) ?? ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: mlData, refresh: refreshMlData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("mlList", async () => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_X_KML_LIST, {
        body: {
          levelCode: ccData.value.levelCode
        }
      });
      const mlList = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((item) => {
        return {
          ...item,
          value: item.xkmldm,
          label: item.xkml
        };
      })) ?? [];
      return {
        title: "专业门类",
        key: "xkmldm",
        isShow: true,
        multiple: false,
        options: [...ALL_OPTIONS, ...mlList],
        xkmldm: ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: zylData, refresh: refreshZylData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("zylList", async () => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_ZYL_LIST, {
        body: {
          xkmldm: mlData.value.xkmldm
        }
      });
      const zylList = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((item) => {
        return {
          ...item,
          value: item.zyldm,
          label: item.zyl
        };
      })) ?? [];
      return {
        title: "专业大类",
        key: "zyldm",
        isShow: !!mlData.value.xkmldm,
        multiple: true,
        options: [...ALL_OPTIONS, ...zylList],
        zyldm: [""]
      };
    })), __temp = await __temp, __restore(), __temp);
    const {
      data: majorData,
      status,
      refresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "majorList",
      async () => {
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_MAJOR_LIST, {
          body: {
            zymc: form.value.zymc,
            isMatch: form.value.isMatch ? "1" : "0",
            cc: ccData.value.levelCode,
            xkml: mlData.value.xkmldm,
            zyl: zylData.value.zyldm.join("/"),
            sort: form.value.sort,
            currentPage: pagination.value.current,
            pageSize: pagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          list: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) ?? [],
          total: ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.totalCount) ?? 0
        };
      },
      {
        default: () => ({
          total: 0,
          list: []
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c;
      const _component_a_button = Button;
      const _component_a_checkbox = Checkbox;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_zs_select_filter = _sfc_main$1;
      const _component_a_space = Space;
      const _component_icon_arrow_rise = IconArrowRise;
      const _component_icon_arrow_fall = IconArrowFall;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_a_list_item_meta = ListItemMeta;
      const _component_zs_no_data_small = _sfc_main$2;
      const _component_a_pagination = Pagination;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[70vh]" }, _attrs))} data-v-079611ea><div class="flex items-center mt-[20px]" data-v-079611ea><div class="w-[150px]" data-v-079611ea>`);
      _push(ssrRenderComponent(_component_a_button, { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_checkbox, {
              modelValue: unref(form).isMatch,
              "onUpdate:modelValue": ($event) => unref(form).isMatch = $event,
              onChange: unref(resetData)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` 完全匹配 `);
                } else {
                  return [
                    createTextVNode(" 完全匹配 ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_checkbox, {
                modelValue: unref(form).isMatch,
                "onUpdate:modelValue": ($event) => unref(form).isMatch = $event,
                onChange: unref(resetData)
              }, {
                default: withCtx(() => [
                  createTextVNode(" 完全匹配 ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full ml-[20px]" data-v-079611ea>`);
      _push(ssrRenderComponent(_component_a_input, {
        size: "large",
        modelValue: unref(form).zymc,
        "onUpdate:modelValue": ($event) => unref(form).zymc = $event,
        modelModifiers: { trim: true },
        class: "rounded-[8px] h-[38px]",
        placeholder: "搜索专业名称",
        onClear: unref(resetData),
        "allow-clear": ""
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon_search, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon_search)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-[120px] ml-[20px] rounded-[8px]" data-v-079611ea>`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        class: "openButton w-[120px]",
        size: "large",
        onClick: unref(resetData)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` 搜索 `);
          } else {
            return [
              createTextVNode(" 搜索 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_zs_select_filter, {
        data: [unref(ccData), unref(mlData), unref(zylData)],
        "default-values": {
          ...unref(form),
          levelCode: (_a = unref(ccData)) == null ? void 0 : _a.levelCode,
          xkmldm: (_b = unref(mlData)) == null ? void 0 : _b.xkmldm,
          zyldm: (_c = unref(zylData)) == null ? void 0 : _c.zyldm
        },
        onChange: changeFilter,
        class: "mt-[20px]"
      }, null, _parent));
      _push(`<div class="mt-[10px] flex flex-col" data-v-079611ea>`);
      _push(ssrRenderComponent(_component_a_space, { class: "h-[40px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("graduate_scale") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-079611ea${_scopeId}> 年度毕业生规模 `);
            if (unref(form).sort === "graduate_scale asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("pjxz") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-079611ea${_scopeId}> 薪酬排名 `);
            if (unref(form).sort === "pjxz asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("boy_rate") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-079611ea${_scopeId}> 男女比例 `);
            if (unref(form).sort === "boy_rate asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div data-v-079611ea${_scopeId}> 共找到符合条件的专业 <span class="text-[#FFA864]" data-v-079611ea${_scopeId}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorData).total))}</span> 个 </div>`);
          } else {
            return [
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("graduate_scale") }],
                onClick: ($event) => toggleSort("graduate_scale")
              }, [
                createTextVNode(" 年度毕业生规模 "),
                unref(form).sort === "graduate_scale asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("pjxz") }],
                onClick: ($event) => toggleSort("pjxz")
              }, [
                createTextVNode(" 薪酬排名 "),
                unref(form).sort === "pjxz asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("boy_rate") }],
                onClick: ($event) => toggleSort("boy_rate")
              }, [
                createTextVNode(" 男女比例 "),
                unref(form).sort === "boy_rate asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", null, [
                createTextVNode(" 共找到符合条件的专业 "),
                createVNode("span", { class: "text-[#FFA864]" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorData).total)), 1),
                createTextVNode(" 个 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_list, {
        bordered: false,
        loading: unref(status) === "pending"
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_zs_no_data_small)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b2;
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList((_a2 = unref(majorData)) == null ? void 0 : _a2.list, (major) => {
              _push2(ssrRenderComponent(_component_a_list_item, {
                key: major.id,
                class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
              }, {
                actions: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: `/major/${major.id}?tab=school`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_button, {
                            type: "primary",
                            class: "openButton"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`开设院校`);
                              } else {
                                return [
                                  createTextVNode("开设院校")
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_button, {
                              type: "primary",
                              class: "openButton"
                            }, {
                              default: withCtx(() => [
                                createTextVNode("开设院校")
                              ]),
                              _: 1
                            })
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_nuxt_link, {
                        to: `/major/${major.id}?tab=school`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_button, {
                            type: "primary",
                            class: "openButton"
                          }, {
                            default: withCtx(() => [
                              createTextVNode("开设院校")
                            ]),
                            _: 1
                          })
                        ]),
                        _: 2
                      }, 1032, ["to"])
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_nuxt_link, {
                      to: `/major/${major.id}`
                    }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_list_item_meta, { class: "mr-[10px] cursor-pointer" }, {
                            title: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="text-[20px] text-[#333333] mb-[10px] font-bold" data-v-079611ea${_scopeId4}>${ssrInterpolate(major.zymc)}</div>`);
                              } else {
                                return [
                                  createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1)
                                ];
                              }
                            }),
                            description: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="text-[14px] text-[#333333]" data-v-079611ea${_scopeId5}>${ssrInterpolate(major.xkml)}/${ssrInterpolate(major.zyl)}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`<div class="mt-[10px]" data-v-079611ea${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-079611ea${_scopeId5}> 专业代码：${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-079611ea${_scopeId5}> 修业年限：${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-079611ea${_scopeId5}> 授予学位：${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw))}</span><span class="${ssrRenderClass([{
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                      }, "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"])}" data-v-079611ea${_scopeId5}> 年度毕业生规模：${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale))}</span><span class="${ssrRenderClass([{
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                      }, "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"])}" data-v-079611ea${_scopeId5}> 男女比例：${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl))}</span><span class="${ssrRenderClass([{
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                      }, "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"])}" data-v-079611ea${_scopeId5}> 平均薪酬：<span class="text-price" data-v-079611ea${_scopeId5}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz)))}</span></span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 专业代码：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 修业年限：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 授予学位：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                          }]
                                        }, " 年度毕业生规模：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                          }]
                                        }, " 男女比例：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                          }]
                                        }, [
                                          createTextVNode(" 平均薪酬："),
                                          createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                        ], 2)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "mt-[10px]" }, [
                                    createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 专业代码：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 修业年限：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 授予学位：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                          }]
                                        }, " 年度毕业生规模：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                          }]
                                        }, " 男女比例：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                          }]
                                        }, [
                                          createTextVNode(" 平均薪酬："),
                                          createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                        ], 2)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        } else {
                          return [
                            createVNode(_component_a_list_item_meta, { class: "mr-[10px] cursor-pointer" }, {
                              title: withCtx(() => [
                                createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1)
                              ]),
                              description: withCtx(() => [
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "mt-[10px]" }, [
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 专业代码：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 修业年限：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 授予学位：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                      createVNode("span", {
                                        class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                          "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                        }]
                                      }, " 年度毕业生规模：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                      createVNode("span", {
                                        class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                          "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                        }]
                                      }, " 男女比例：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                      createVNode("span", {
                                        class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                          "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                        }]
                                      }, [
                                        createTextVNode(" 平均薪酬："),
                                        createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                      ], 2)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_nuxt_link, {
                        to: `/major/${major.id}`
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_a_list_item_meta, { class: "mr-[10px] cursor-pointer" }, {
                            title: withCtx(() => [
                              createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1)
                            ]),
                            description: withCtx(() => [
                              createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "mt-[10px]" }, [
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 专业代码：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 修业年限：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 授予学位：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                    createVNode("span", {
                                      class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                      }]
                                    }, " 年度毕业生规模：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                    createVNode("span", {
                                      class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                      }]
                                    }, " 男女比例：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                    createVNode("span", {
                                      class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                      }]
                                    }, [
                                      createTextVNode(" 平均薪酬："),
                                      createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                    ], 2)
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1024)
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
              (openBlock(true), createBlock(Fragment, null, renderList((_b2 = unref(majorData)) == null ? void 0 : _b2.list, (major) => {
                return openBlock(), createBlock(_component_a_list_item, {
                  key: major.id,
                  class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
                }, {
                  actions: withCtx(() => [
                    createVNode(_component_nuxt_link, {
                      to: `/major/${major.id}?tab=school`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_button, {
                          type: "primary",
                          class: "openButton"
                        }, {
                          default: withCtx(() => [
                            createTextVNode("开设院校")
                          ]),
                          _: 1
                        })
                      ]),
                      _: 2
                    }, 1032, ["to"])
                  ]),
                  default: withCtx(() => [
                    createVNode(_component_nuxt_link, {
                      to: `/major/${major.id}`
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_list_item_meta, { class: "mr-[10px] cursor-pointer" }, {
                          title: withCtx(() => [
                            createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1)
                          ]),
                          description: withCtx(() => [
                            createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                              default: withCtx(() => [
                                createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode("div", { class: "mt-[10px]" }, [
                              createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 专业代码：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                  createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 修业年限：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                  createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " 授予学位：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                  createVNode("span", {
                                    class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                      "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                    }]
                                  }, " 年度毕业生规模：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                  createVNode("span", {
                                    class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                      "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                    }]
                                  }, " 男女比例：" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                  createVNode("span", {
                                    class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                      "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                    }]
                                  }, [
                                    createTextVNode(" 平均薪酬："),
                                    createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                  ], 2)
                                ]),
                                _: 2
                              }, 1024)
                            ])
                          ]),
                          _: 2
                        }, 1024)
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
      _push(ssrRenderComponent(_component_a_pagination, {
        class: "justify-end mt-[20px]",
        total: unref(majorData).total,
        current: unref(pagination).current,
        "page-size": unref(pagination).pageSize,
        onChange: unref(onPageChange),
        onPageSizeChange: unref(onPageSizeChange),
        "show-total": "",
        "show-jumper": "",
        "show-page-size": ""
      }, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_079611ea_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/major/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-079611ea"]]);
export {
  index as default
};
//# sourceMappingURL=index-33b011f1.js.map
