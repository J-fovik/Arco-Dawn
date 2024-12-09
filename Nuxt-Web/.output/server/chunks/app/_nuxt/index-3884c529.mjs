import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { C as Checkbox } from './index-11d38f35.mjs';
import { a as Input, b as IconSearch } from './index-dd449d78.mjs';
import { _ as _sfc_main$1 } from './index-3e511c39.mjs';
import { S as Space } from './index-8bcd588e.mjs';
import { L as List, a as ListItem } from './index-7a08c899.mjs';
import { _ as _sfc_main$2 } from './index-c58e1e57.mjs';
import { _ as _sfc_main$3 } from './index-33e76c07.mjs';
import { P as Pagination } from './index-90aba227.mjs';
import { u as useHead, d as useWebsiteInformation, e as useAsyncData, A as API_URLS, n as navigateTo, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, createVNode, openBlock, createBlock, toDisplayString, Fragment, renderList } from 'vue';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import { N as NO_LIMIT_OPTIONS } from './options-7ec13930.mjs';
import { a as turnThousandth } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { I as IconArrowRise, a as IconArrowFall } from './index-aa9a0d9b.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'resize-observer-polyfill';
import './index-4ecc34e0.mjs';
import './index-f6f6f2a5.mjs';
import './NuxtImg-9bcbe2bb.mjs';
import './index-08fdf206.mjs';
import 'number-precision';
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
      title: "\u67E5\u5927\u5B66"
    });
    const { $zsFetch } = useNuxtApp();
    const { provinceCityList, getDictionValue } = useWebsiteInformation();
    const { form } = useForm(() => ({
      location: [""],
      type: "",
      cc: "",
      properties: "",
      strengthTags: "",
      featuresTags: "",
      sort: "",
      isMatch: false,
      yxmc: ""
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 0);
      refresh();
    });
    const filterData = ref([
      {
        title: "\u6240\u5728\u5730\u533A",
        key: "location",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...provinceCityList.value]
      },
      {
        title: "\u9662\u6821\u7C7B\u578B",
        key: "type",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("YXLX")]
      },
      {
        title: "\u9662\u6821\u5C42\u6B21",
        key: "cc",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("BXCC")]
      },
      {
        title: "\u529E\u5B66\u6027\u8D28",
        key: "properties",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("BXXZ")]
      },
      {
        title: "\u5B9E\u529B\u6807\u7B7E",
        key: "strengthTags",
        isShow: true,
        multiple: false,
        isCollapse: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("SLBQ")]
      },
      {
        title: "\u7279\u8272\u6807\u7B7E",
        key: "featuresTags",
        isShow: true,
        multiple: false,
        isCollapse: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("TSBQ")]
      }
    ]);
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
    const changeFilter = (val) => {
      form.value = {
        ...form.value,
        ...val
      };
      resetData();
    };
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "collegeList",
      async () => {
        var _a2, _b2;
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_COLLEGE_LIST, {
          body: {
            ...form.value,
            isMatch: form.value.isMatch ? "1" : "0",
            location: form.value.location.join("/"),
            currentPage: pagination.value.current,
            pageSize: pagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          total: (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.totalCount) != null ? _a2 : 0,
          schoolList: (_b2 = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.list) != null ? _b2 : []
        };
      },
      {
        default: () => ({
          total: 0,
          schoolList: []
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
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
      const _component_zs_school_list_meta = _sfc_main$2;
      const _component_zs_no_data_small = _sfc_main$3;
      const _component_a_pagination = Pagination;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[70vh]" }, _attrs))} data-v-48b7fffd><div class="flex items-center mt-[20px]" data-v-48b7fffd><div class="w-[150px]" data-v-48b7fffd>`);
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
      _push(`</div><div class="w-full ml-[20px]" data-v-48b7fffd>`);
      _push(ssrRenderComponent(_component_a_input, {
        modelValue: unref(form).yxmc,
        "onUpdate:modelValue": ($event) => unref(form).yxmc = $event,
        modelModifiers: { trim: true },
        size: "large",
        class: "rounded-lg h-[38px]",
        placeholder: "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u9662\u6821",
        "allow-clear": "",
        onClear: unref(resetData)
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
      _push(`</div><div class="w-[120px] ml-[20px]" data-v-48b7fffd>`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        size: "large",
        class: "openButton w-[120px]",
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
        data: unref(filterData),
        "default-values": unref(form),
        onChange: changeFilter,
        class: "mt-[20px]"
      }, null, _parent));
      _push(`<div class="mt-[20px] flex flex-col" data-v-48b7fffd>`);
      _push(ssrRenderComponent(_component_a_space, { class: "h-[40px]" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("sf") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-48b7fffd${_scopeId}> \u7701\u4EFD `);
            if (unref(form).sort === "sf asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("score") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-48b7fffd${_scopeId}> \u5F55\u53D6\u5206\u6570 `);
            if (unref(form).sort === "score asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": unref(form).sort.startsWith("strength") }, "p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"])}" data-v-48b7fffd${_scopeId}> \u9662\u6821\u5B9E\u529B `);
            if (unref(form).sort === "strength asc") {
              _push2(ssrRenderComponent(_component_icon_arrow_rise, null, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_icon_arrow_fall, null, null, _parent2, _scopeId));
            }
            _push2(`</div><div data-v-48b7fffd${_scopeId}> \u5171\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u9662\u6821 <span class="text-[#FFA864]" data-v-48b7fffd${_scopeId}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(data).total))}</span> \u6240 </div>`);
          } else {
            return [
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("sf") }],
                onClick: ($event) => toggleSort("sf")
              }, [
                createTextVNode(" \u7701\u4EFD "),
                unref(form).sort === "sf asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("score") }],
                onClick: ($event) => toggleSort("score")
              }, [
                createTextVNode(" \u5F55\u53D6\u5206\u6570 "),
                unref(form).sort === "score asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", {
                class: ["p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer", { "bg-[#7C92FF] text-white": unref(form).sort.startsWith("strength") }],
                onClick: ($event) => toggleSort("strength")
              }, [
                createTextVNode(" \u9662\u6821\u5B9E\u529B "),
                unref(form).sort === "strength asc" ? (openBlock(), createBlock(_component_icon_arrow_rise, { key: 0 })) : (openBlock(), createBlock(_component_icon_arrow_fall, { key: 1 }))
              ], 10, ["onClick"]),
              createVNode("div", null, [
                createTextVNode(" \u5171\u627E\u5230\u7B26\u5408\u6761\u4EF6\u7684\u9662\u6821 "),
                createVNode("span", { class: "text-[#FFA864]" }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(data).total)), 1),
                createTextVNode(" \u6240 ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_list, {
        class: "list-border",
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
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(data).schoolList, (school) => {
              _push2(ssrRenderComponent(_component_a_list_item, {
                key: school.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-48b7fffd${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_zs_school_list_meta, { school }, null, _parent3, _scopeId2));
                    _push3(`</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`, {
                          open: {
                            target: "_blank"
                          }
                        })
                      }, [
                        createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                      ], 8, ["onClick"])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data).schoolList, (school) => {
                return openBlock(), createBlock(_component_a_list_item, {
                  key: school.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", {
                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`, {
                        open: {
                          target: "_blank"
                        }
                      })
                    }, [
                      createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                    ], 8, ["onClick"])
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
        total: unref(data).total,
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/college/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-48b7fffd"]]);

export { index as default };
//# sourceMappingURL=index-3884c529.mjs.map
