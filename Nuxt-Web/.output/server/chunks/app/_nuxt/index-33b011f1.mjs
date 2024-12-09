import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { C as Checkbox } from './index-11d38f35.mjs';
import { a as Input, b as IconSearch } from './index-dd449d78.mjs';
import { _ as _sfc_main$1 } from './index-3e511c39.mjs';
import { S as Space } from './index-8bcd588e.mjs';
import { L as List, a as ListItem, b as ListItemMeta } from './index-7a08c899.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-99c863e4.mjs';
import { _ as _sfc_main$2 } from './index-33e76c07.mjs';
import { P as Pagination } from './index-90aba227.mjs';
import { u as useHead, e as useAsyncData, A as API_URLS, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList } from 'vue';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import { A as ALL_OPTIONS } from './options-7ec13930.mjs';
import { a as turnThousandth, t as textFormat } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { I as IconArrowRise, a as IconArrowFall } from './index-aa9a0d9b.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'resize-observer-polyfill';
import './index-4ecc34e0.mjs';
import './index-f6f6f2a5.mjs';
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
import './NuxtImg-9bcbe2bb.mjs';
import './index-08fdf206.mjs';
import 'number-precision';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u67E5\u4E13\u4E1A"
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
      var _a2, _b2;
      var _a, _b;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
      const ccList = (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((item) => {
        return {
          ...item,
          value: item.levelCode,
          label: item.levelName
        };
      })) != null ? _a2 : [];
      return {
        title: "\u4E13\u4E1A\u5C42\u6B21",
        key: "levelCode",
        isShow: true,
        multiple: false,
        options: ccList,
        levelCode: (_b2 = (_b = ccList[0]) == null ? void 0 : _b.value) != null ? _b2 : ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: mlData, refresh: refreshMlData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("mlList", async () => {
      var _a2;
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_X_KML_LIST, {
        body: {
          levelCode: ccData.value.levelCode
        }
      });
      const mlList = (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((item) => {
        return {
          ...item,
          value: item.xkmldm,
          label: item.xkml
        };
      })) != null ? _a2 : [];
      return {
        title: "\u4E13\u4E1A\u95E8\u7C7B",
        key: "xkmldm",
        isShow: true,
        multiple: false,
        options: [...ALL_OPTIONS, ...mlList],
        xkmldm: ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: zylData, refresh: refreshZylData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("zylList", async () => {
      var _a2;
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_ZYL_LIST, {
        body: {
          xkmldm: mlData.value.xkmldm
        }
      });
      const zylList = (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((item) => {
        return {
          ...item,
          value: item.zyldm,
          label: item.zyl
        };
      })) != null ? _a2 : [];
      return {
        title: "\u4E13\u4E1A\u5927\u7C7B",
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
        var _a2, _b2;
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
          list: (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) != null ? _a2 : [],
          total: (_b2 = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.totalCount) != null ? _b2 : 0
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
                  _push3(` \u5B8C\u5168\u5339\u914D `);
                } else {
                  return [
                    createTextVNode(" \u5B8C\u5168\u5339\u914D ")
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
                  createTextVNode(" \u5B8C\u5168\u5339\u914D ")
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
        placeholder: "\u641C\u7D22\u4E13\u4E1A\u540D\u79F0",
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
            _push2(` \u641C\u7D22 `);
          } else {
            return [
              createTextVNode(" \u641C\u7D22 ")
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
            _push2(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("graduate_scale") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-079611ea${_scopeId}> \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21 `);
            if (unref(form).sort === "graduate_scale asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("pjxz") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-079611ea${_scopeId}> \u85AA\u916C\u6392\u540D `);
            if (unref(form).sort === "pjxz asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("boy_rate") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-079611ea${_scopeId}> \u7537\u5973\u6BD4\u4F8B `);
            if (unref(form).sort === "boy_rate asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div data-v-079611ea${_scopeId}> \u5171\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u4E13\u4E1A <span class="text-[#FFA864]" data-v-079611ea${_scopeId}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorData).total))}</span> \u4E2A </div>`);
          } else {
            return [
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("graduate_scale") }],
                onClick: ($event) => toggleSort("graduate_scale")
              }, [
                createTextVNode(" \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21 "),
                unref(form).sort === "graduate_scale asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("pjxz") }],
                onClick: ($event) => toggleSort("pjxz")
              }, [
                createTextVNode(" \u85AA\u916C\u6392\u540D "),
                unref(form).sort === "pjxz asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("boy_rate") }],
                onClick: ($event) => toggleSort("boy_rate")
              }, [
                createTextVNode(" \u7537\u5973\u6BD4\u4F8B "),
                unref(form).sort === "boy_rate asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", null, [
                createTextVNode(" \u5171\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u4E13\u4E1A "),
                createVNode("span", { class: "text-[#FFA864]" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorData).total)), 1),
                createTextVNode(" \u4E2A ")
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
                                _push5(`\u5F00\u8BBE\u9662\u6821`);
                              } else {
                                return [
                                  createTextVNode("\u5F00\u8BBE\u9662\u6821")
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
                                createTextVNode("\u5F00\u8BBE\u9662\u6821")
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
                              createTextVNode("\u5F00\u8BBE\u9662\u6821")
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
                                      _push6(`<span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-079611ea${_scopeId5}> \u4E13\u4E1A\u4EE3\u7801\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-079611ea${_scopeId5}> \u4FEE\u4E1A\u5E74\u9650\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-079611ea${_scopeId5}> \u6388\u4E88\u5B66\u4F4D\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw))}</span><span class="${ssrRenderClass([{
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                      }, "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"])}" data-v-079611ea${_scopeId5}> \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale))}</span><span class="${ssrRenderClass([{
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                      }, "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"])}" data-v-079611ea${_scopeId5}> \u7537\u5973\u6BD4\u4F8B\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl))}</span><span class="${ssrRenderClass([{
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                      }, "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"])}" data-v-079611ea${_scopeId5}> \u5E73\u5747\u85AA\u916C\uFF1A<span class="text-price" data-v-079611ea${_scopeId5}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz)))}</span></span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                          }]
                                        }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                          }]
                                        }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                          }]
                                        }, [
                                          createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
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
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                          }]
                                        }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                          }]
                                        }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                        createVNode("span", {
                                          class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                            "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                          }]
                                        }, [
                                          createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
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
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                      createVNode("span", {
                                        class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                          "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                        }]
                                      }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                      createVNode("span", {
                                        class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                          "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                        }]
                                      }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                      createVNode("span", {
                                        class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                          "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                        }]
                                      }, [
                                        createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
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
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                    createVNode("span", {
                                      class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                      }]
                                    }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                    createVNode("span", {
                                      class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                      }]
                                    }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                    createVNode("span", {
                                      class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                        "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                      }]
                                    }, [
                                      createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
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
                            createTextVNode("\u5F00\u8BBE\u9662\u6821")
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
                                  createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                  createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                  createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                  createVNode("span", {
                                    class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                      "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("graduate_scale")
                                    }]
                                  }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 3),
                                  createVNode("span", {
                                    class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                      "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("boy_rate")
                                    }]
                                  }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 3),
                                  createVNode("span", {
                                    class: ["bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]", {
                                      "bg-[#FFF7F0] text-[#FFA864]": unref(form).sort.startsWith("pjxz")
                                    }]
                                  }, [
                                    createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/major/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-079611ea"]]);

export { index as default };
//# sourceMappingURL=index-33b011f1.mjs.map
