import { B as Button } from "./use-teleport-container-1599a5a4.js";
import { C as Checkbox } from "./index-11d38f35.js";
import { b as Input, a as IconSearch } from "./index-dd449d78.js";
import { T as Table } from "./index-6a06d329.js";
/* empty css                */import "./index-90aba227.js";
import "./index-08fdf206.js";
/* empty css                */import "./index-f6f6f2a5.js";
import "./index-63900e07.js";
/* empty css                */import { u as useHead, g as useRoute, a as useRouter, n as navigateTo, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useBasicsState } from "./useBasicsState-8a7a18a4.js";
import { u as useForm } from "./useArco-b2247a5c.js";
import { u as usePagination } from "./usePagination-23ca46d2.js";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
import "resize-observer-polyfill";
import "./index-5f48af9c.js";
import "./get-value-by-path-11166a95.js";
import "./use-children-components-d7e0e48f.js";
import "number-precision";
import "ofetch";
import "#internal/nitro";
import "hookable";
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
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "职业库"
    });
    const route = useRoute();
    const router = useRouter();
    const { $zsFetch } = useNuxtApp();
    const [loading, setLoading] = useBasicsState(false);
    const { form } = useForm(() => ({
      isMatch: false,
      professionName: route.query.keyword ?? ""
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 100);
      router.replace({
        query: { ...route.query, keyword: form.value.professionName }
      });
      initJobList();
    });
    const columns = [
      {
        title: "职业名称",
        dataIndex: "levelName",
        align: "center",
        ellipsis: true,
        tooltip: true,
        cellStyle: {
          textDecorationLine: "underline"
        },
        headerCellStyle: {
          fontSize: "14px",
          backgroundColor: "#EDEDED",
          fontWeight: "bold",
          textDecorationLine: "none"
        }
      },
      {
        title: "所属大类",
        dataIndex: "level1Name",
        align: "center",
        ellipsis: true,
        tooltip: true,
        headerCellStyle: {
          fontSize: "14px",
          backgroundColor: "#EDEDED",
          fontWeight: "bold"
        }
      },
      {
        title: "所属中类",
        dataIndex: "level2Name",
        align: "center",
        ellipsis: true,
        tooltip: true,
        headerCellStyle: {
          fontSize: "14px",
          backgroundColor: "#EDEDED",
          fontWeight: "bold"
        }
      },
      {
        title: "所属小类",
        dataIndex: "level3Name",
        align: "center",
        ellipsis: true,
        tooltip: true,
        headerCellStyle: {
          fontSize: "14px",
          backgroundColor: "#EDEDED",
          fontWeight: "bold"
        }
      }
    ];
    const cellClick = (record) => {
      navigateTo(`/jobLibrary/${record.id}`);
    };
    const data = ref([]);
    const initJobList = async () => {
      setLoading(true);
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_PROFESSION_FILTERING, {
        body: {
          professionName: form.value.professionName,
          isMatch: form.value.isMatch ? "1" : "0",
          currentPage: pagination.value.current,
          pageSize: pagination.value.pageSize,
          pagingOrNot: 1
        }
      });
      if (err)
        return setLoading(false);
      setLoading(false);
      pagination.value.total = res.data.totalCount;
      data.value = res.data.list;
    };
    initJobList();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_button = Button;
      const _component_a_checkbox = Checkbox;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_a_table = Table;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[70vh]" }, _attrs))}><div class="flex items-center mt-[20px]"><div class="w-[150px]">`);
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
      _push(`</div><div class="w-full ml-[20px]">`);
      _push(ssrRenderComponent(_component_a_input, {
        size: "large",
        modelValue: unref(form).professionName,
        "onUpdate:modelValue": ($event) => unref(form).professionName = $event,
        modelModifiers: { trim: true },
        class: "rounded-lg h-[38px]",
        placeholder: "搜索你感兴趣的职业",
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
      _push(`</div><div class="w-[120px] ml-[20px]">`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        size: "large",
        class: "openButton w-[120px]",
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
      _push(ssrRenderComponent(_component_a_table, {
        class: "mt-[20px] cursor-pointer",
        "table-layout-fixed": "",
        columns,
        data: unref(data),
        bordered: { wrapper: true, cell: true },
        pagination: unref(pagination),
        onRowClick: cellClick,
        onPageChange: unref(onPageChange),
        onPageSizeChange: unref(onPageSizeChange),
        loading: unref(loading)
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobLibrary/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=search-c9bce688.js.map
