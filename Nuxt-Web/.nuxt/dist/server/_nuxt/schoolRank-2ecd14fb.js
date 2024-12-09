import { B as Button } from "./use-teleport-container-1599a5a4.js";
import { C as Checkbox } from "./index-11d38f35.js";
import { b as Input, a as IconSearch } from "./index-dd449d78.js";
import { _ as _sfc_main$1 } from "./index-3e511c39.js";
import { L as List, a as ListItem } from "./index-7a08c899.js";
import { _ as _sfc_main$2 } from "./index-c58e1e57.js";
import { _ as _sfc_main$3 } from "./index-33e76c07.js";
import { P as Pagination } from "./index-90aba227.js";
/* empty css                */import "./index-08fdf206.js";
/* empty css                */import "./index-f6f6f2a5.js";
import "./index-4ecc34e0.js";
import { u as useHead, d as useWebsiteInformation, e as useAsyncData, n as navigateTo, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { defineComponent, ref, withAsyncContext, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useForm } from "./useArco-b2247a5c.js";
import { u as usePagination } from "./usePagination-23ca46d2.js";
import { N as NO_LIMIT_OPTIONS } from "./options-7ec13930.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "resize-observer-polyfill";
import "./index-8bcd588e.js";
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
import "ufo";
import "cookie-es";
import "ohash";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "@iconify/vue";
import "defu";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "schoolRank",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "大学排名"
    });
    const { $zsFetch } = useNuxtApp();
    const { getDictionValue } = useWebsiteInformation();
    const { form } = useForm(() => ({
      yxmc: "",
      isMatch: false,
      rankType: getDictionValue("RANK")[0].value,
      sortType: ""
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 0);
      refresh();
    });
    const filterData = ref([
      {
        title: "排名类型",
        key: "rankType",
        isShow: true,
        multiple: false,
        options: getDictionValue("RANK")
      },
      {
        title: "院校类型",
        key: "sortType",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("YXLX")]
      }
    ]);
    const changeFilter = (val) => {
      var _a;
      if (form.value.rankType !== val.rankType) {
        form.value.rankType = val.rankType;
        form.value.sortType = "";
      } else {
        form.value.sortType = val.sortType;
      }
      if (form.value.rankType !== ((_a = getDictionValue("RANK")[0]) == null ? void 0 : _a.value)) {
        filterData.value[1].isShow = false;
      } else {
        filterData.value[1].isShow = true;
      }
      resetData();
    };
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "schoolRankList",
      async () => {
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.MORE.GET_SCHOOL_RANK, {
          body: {
            ...form.value,
            isMatch: form.value.isMatch ? "1" : "0",
            currentPage: pagination.value.current,
            pageSize: pagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          total: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.totalCount) ?? 0,
          schoolList: ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.list) ?? []
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
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_zs_school_list_meta = _sfc_main$2;
      const _component_zs_no_data_small = _sfc_main$3;
      const _component_a_pagination = Pagination;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))} data-v-357f9a96><div class="flex items-center mt-[20px]" data-v-357f9a96><div class="w-[150px]" data-v-357f9a96>`);
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
      _push(`</div><div class="w-full ml-[20px]" data-v-357f9a96>`);
      _push(ssrRenderComponent(_component_a_input, {
        modelValue: unref(form).yxmc,
        "onUpdate:modelValue": ($event) => unref(form).yxmc = $event,
        modelModifiers: { trim: true },
        size: "large",
        class: "rounded-lg h-[38px]",
        placeholder: "搜索你感兴趣的院校",
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
      _push(`</div><div class="w-[120px] ml-[20px]" data-v-357f9a96>`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        size: "large",
        class: "openButton w-[120px] rounded-[4px]",
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
        data: unref(filterData),
        "default-values": unref(form),
        onChange: changeFilter,
        class: "mt-[20px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_list, {
        class: "list-border mt-[20px]",
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
            ssrRenderList(unref(data).schoolList, (school, index) => {
              _push2(ssrRenderComponent(_component_a_list_item, {
                key: school.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center" data-v-357f9a96${_scopeId2}><div class="flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]" data-v-357f9a96${_scopeId2}>${ssrInterpolate(school == null ? void 0 : school.rankOut)}</div><div class="flex-1" data-v-357f9a96${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_zs_school_list_meta, { school }, null, _parent3, _scopeId2));
                    _push3(`</div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]" }, toDisplayString(school == null ? void 0 : school.rankOut), 1),
                        createVNode("div", {
                          class: "flex-1",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                        }, [
                          createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                        ], 8, ["onClick"])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(data).schoolList, (school, index) => {
                return openBlock(), createBlock(_component_a_list_item, {
                  key: school.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]" }, toDisplayString(school == null ? void 0 : school.rankOut), 1),
                      createVNode("div", {
                        class: "flex-1",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                      }, [
                        createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                      ], 8, ["onClick"])
                    ])
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
      _push(`</div>`);
    };
  }
});
const schoolRank_vue_vue_type_style_index_0_scoped_357f9a96_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/schoolRank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const schoolRank = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-357f9a96"]]);
export {
  schoolRank as default
};
//# sourceMappingURL=schoolRank-2ecd14fb.js.map
