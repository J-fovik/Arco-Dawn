import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { C as Checkbox } from './index-11d38f35.mjs';
import { a as Input, b as IconSearch } from './index-dd449d78.mjs';
import { T as Table } from './index-6a06d329.mjs';
import { u as useHead, g as useRoute, a as useRouter, n as navigateTo, A as API_URLS, f as useNuxtApp } from '../server.mjs';
import { defineComponent, ref, mergeProps, withCtx, unref, createTextVNode, createVNode, useSSRContext } from 'vue';
import { u as useBasicsState } from './useBasicsState-8a7a18a4.mjs';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import 'resize-observer-polyfill';
import './index-90aba227.mjs';
import './index-f6f6f2a5.mjs';
import './index-08fdf206.mjs';
import 'number-precision';
import './index-63900e07.mjs';
import './index-5f48af9c.mjs';
import './get-value-by-path-11166a95.mjs';
import './use-children-components-d7e0e48f.mjs';
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
  __name: "search",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u804C\u4E1A\u5E93"
    });
    const route = useRoute();
    const router = useRouter();
    const { $zsFetch } = useNuxtApp();
    const [loading, setLoading] = useBasicsState(false);
    const { form } = useForm(() => {
      var _a;
      return {
        isMatch: false,
        professionName: (_a = route.query.keyword) != null ? _a : ""
      };
    });
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 100);
      router.replace({
        query: { ...route.query, keyword: form.value.professionName }
      });
      initJobList();
    });
    const columns = [
      {
        title: "\u804C\u4E1A\u540D\u79F0",
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
        title: "\u6240\u5C5E\u5927\u7C7B",
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
        title: "\u6240\u5C5E\u4E2D\u7C7B",
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
        title: "\u6240\u5C5E\u5C0F\u7C7B",
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
      _push(`</div><div class="w-full ml-[20px]">`);
      _push(ssrRenderComponent(_component_a_input, {
        size: "large",
        modelValue: unref(form).professionName,
        "onUpdate:modelValue": ($event) => unref(form).professionName = $event,
        modelModifiers: { trim: true },
        class: "rounded-lg h-[38px]",
        placeholder: "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u804C\u4E1A",
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

export { _sfc_main as default };
//# sourceMappingURL=search-c9bce688.mjs.map
