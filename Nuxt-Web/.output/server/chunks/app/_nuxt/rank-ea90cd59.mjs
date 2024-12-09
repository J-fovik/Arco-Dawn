import { _ as _sfc_main$1 } from './index-3e511c39.mjs';
import { a as Input, b as IconSearch } from './index-dd449d78.mjs';
import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { _ as _sfc_main$2 } from './index-cb5bd3b8.mjs';
import { _ as _sfc_main$3 } from './index-9a6e8b24.mjs';
import { T as Table } from './index-6a06d329.mjs';
import { u as useHead, b as useUser, d as useWebsiteInformation, e as useAsyncData, A as API_URLS, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, computed, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import { a as turnThousandth, t as textFormat } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import * as echarts from 'echarts/core';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './index-11d38f35.mjs';
import 'resize-observer-polyfill';
import 'echarts/components';
import 'echarts/charts';
import 'echarts/features';
import 'echarts/renderers';
import '@vueuse/core';
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
  __name: "rank",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u4F4D\u6B21\u67E5\u8BE2"
    });
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const { provinceList } = useWebsiteInformation();
    const { form } = useForm(() => ({
      sf: userInfo.value.province,
      nf: "",
      kl: "",
      lineChart: [],
      lineInfo: {},
      score: "",
      scoreSearchInfo: {}
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 0);
      refreshRankData();
    });
    const lineChartOption = computed(() => {
      return {
        tooltip: {
          trigger: "axis",
          formatter: (params) => {
            var _a;
            let tooltipText;
            let historyScoresText;
            let isHistory = false;
            form.value.lineInfo = lineData.value.find(
              (item) => item.score == params[0].axisValueLabel
            );
            if (((_a = form.value.lineInfo) == null ? void 0 : _a.historyList) && form.value.lineInfo.historyList.length > 0) {
              isHistory = true;
              historyScoresText = form.value.lineInfo.historyList.map((item) => {
                return `<span style="margin-right:10px">${item.score}(${item.nf})</span>`;
              }).join("");
            }
            tooltipText = ` <div style="background:white;padding:10px">
									<div>\u9AD8\u8003\u5206\u6570\uFF1A${form.value.lineInfo.score}\u5206</div>
									${form.value.lineInfo.pc ? `<div>${form.value.lineInfo.pc}\uFF1A${form.value.lineInfo.pcx}\u5206 </div>` : ""}
									<div>\u540C\u5206\u4EBA\u6570\uFF1A${turnThousandth(form.value.lineInfo.cnt)}\u540D </div>
									<div>\u6392\u540D\u533A\u95F4\uFF1A${turnThousandth(
              form.value.lineInfo.wcRange.split("-")[0] + "-" + turnThousandth(
                form.value.lineInfo.wcRange.split("-")[1]
              )
            )}\u540D </div>
									 ${isHistory ? `<div>\u5386\u53F2\u540C\u4F4D\u6B21\u8003\u751F\u5F97\u5206\uFF1A</div> ${historyScoresText}` : ""}

								</div>
								`;
            return tooltipText;
          }
        },
        title: {
          left: "center"
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          name: "\u5206\u6570",
          // 在这里设置 X 轴的名称为“分数”
          nameLocation: "end",
          // 设置名称显示的位置为轴的中间
          nameTextStyle: {
            // 设置名称的样式
            color: "#333",
            // 名称颜色
            fontSize: 14
            // 名称字体大小
          },
          data: lineData.value.map((o) => o.score)
        },
        yAxis: {
          type: "value",
          name: "\u4EBA\u6570",
          // 在这里设置Y轴的名称为“人数”
          nameLocation: "end",
          // 设置名称显示的位置为轴的末端
          nameTextStyle: {
            // 设置名称的样式
            color: "#333",
            // 名称颜色
            fontSize: 14
            // 名称字体大小
          },
          axisLabel: {
            show: true,
            formatter: function(value) {
              return turnThousandth(value);
            }
          }
        },
        series: [
          {
            type: "line",
            symbol: "none",
            sampling: "lttb",
            itemStyle: {
              color: "#FFA864"
            },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#FFF2E7"
                },
                {
                  offset: 1,
                  color: "#FFFFFF"
                }
              ])
            },
            data: lineData.value.map((o) => o.cnt)
          }
        ]
      };
    });
    const createTableColumns = () => {
      return [
        {
          title: "\u5206\u6570",
          dataIndex: "score",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "\u672C\u6BB5\u4EBA\u6570",
          dataIndex: "cnt",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(turnThousandth(record.cnt));
          }
        },
        {
          title: "\u7D2F\u8BA1\u4EBA\u6570",
          dataIndex: "wc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(turnThousandth(record.wc));
          }
        }
      ];
    };
    const onScoreInput = () => {
      var _a2;
      var _a, _b;
      form.value.scoreSearchInfo = (_a2 = lineData.value.find((item) => item.score == form.value.score)) != null ? _a2 : {};
      form.value.scoreSearchInfo.isHistory = ((_b = (_a = form.value.scoreSearchInfo) == null ? void 0 : _a.historyList) == null ? void 0 : _b.length) > 0 ? true : false;
    };
    const changeFilter = async (val) => {
      if (val.sf !== sfData.value.sf) {
        sfData.value.sf = val.sf;
        nfData.value.nf = "";
        klData.value.kl = "";
        await refreshNfData();
        await refreshKlData();
      }
      if (val.nf !== nfData.value.nf) {
        nfData.value.nf = val.nf;
        klData.value.kl = "";
        await refreshKlData();
      }
      if (val.kl !== klData.value.kl) {
        klData.value.kl = val.kl;
      }
      refreshLineData();
      resetData();
    };
    const { data: sfData } = ([__temp, __restore] = withAsyncContext(() => useAsyncData("sfList", async () => {
      const sfList = provinceList.value.map((o) => {
        return {
          ...o,
          value: o.sf,
          label: o.sf
        };
      });
      return {
        title: "\u6240\u5728\u5730\u533A",
        key: "sf",
        isShow: true,
        multiple: false,
        options: sfList,
        sf: userInfo.value.province
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: nfData, refresh: refreshNfData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("nfList", async () => {
      var _a2, _b;
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_NF, {
        body: {
          sf: sfData.value.sf
        }
      });
      const nfList = (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
        return {
          value: o.nf,
          label: o.nf
        };
      })) != null ? _a2 : [];
      return {
        title: "\u5F55\u53D6\u5E74\u4EFD",
        key: "nf",
        isShow: true,
        multiple: false,
        options: nfList,
        nf: (_b = nfList[0].value) != null ? _b : ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: klData, refresh: refreshKlData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("klList", async () => {
      var _a2, _b;
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_KL, {
        body: {
          sf: sfData.value.sf,
          nf: nfData.value.nf
        }
      });
      const klList = (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
        return {
          value: o.kl,
          label: o.kl
        };
      })) != null ? _a2 : [];
      return {
        title: "\u8003\u751F\u7C7B\u522B",
        key: "kl",
        isShow: true,
        multiple: false,
        options: klList,
        kl: (_b = klList[0].value) != null ? _b : ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const {
      data: rankData,
      status,
      refresh: refreshRankData
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("rankList", async () => {
      var _a2, _b2;
      var _a, _b;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_WC_LIST, {
        body: {
          sf: sfData.value.sf,
          nf: nfData.value.nf,
          kl: klData.value.kl,
          currentPage: pagination.value.current,
          pageSize: pagination.value.pageSize,
          pagingOrNot: 1
        }
      });
      return {
        list: (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.rankList) != null ? _a2 : [],
        total: (_b2 = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.totalCount) != null ? _b2 : 0
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: lineData, refresh: refreshLineData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("lineList", async () => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_WC_LINE_CHART, {
        body: {
          sf: sfData.value.sf,
          nf: nfData.value.nf,
          kl: klData.value.kl
        }
      });
      return (_a = res == null ? void 0 : res.data) != null ? _a : [];
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_zs_select_filter = _sfc_main$1;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_a_button = Button;
      const _component_zs_title = _sfc_main$2;
      const _component_zs_e_charts = _sfc_main$3;
      const _component_a_table = Table;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))} data-v-81235bd2>`);
      _push(ssrRenderComponent(_component_zs_select_filter, {
        data: [unref(sfData), unref(nfData), unref(klData)],
        "default-values": { sf: (_a = unref(sfData)) == null ? void 0 : _a.sf, nf: (_b = unref(nfData)) == null ? void 0 : _b.nf, kl: (_c = unref(klData)) == null ? void 0 : _c.kl },
        onChange: changeFilter,
        class: "mt-[20px]"
      }, null, _parent));
      _push(`<div class="flex items-center mt-[20px]" data-v-81235bd2><div class="w-[400px]" data-v-81235bd2>`);
      _push(ssrRenderComponent(_component_a_input, {
        modelValue: unref(form).score,
        "onUpdate:modelValue": ($event) => unref(form).score = $event,
        modelModifiers: { trim: true },
        size: "large",
        class: "rounded-lg h-[38px]",
        placeholder: "\u8BF7\u8F93\u5165\u60A8\u7684\u5206\u6570",
        "allow-clear": "",
        onClear: onScoreInput
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
      _push(`</div><div class="w-[120px] ml-[20px]" data-v-81235bd2>`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        size: "large",
        class: "openButton w-[120px]",
        onClick: onScoreInput
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
      _push(ssrRenderComponent(_component_zs_title, {
        title: "\u6298\u7EBF\u56FE",
        size: "small",
        class: "mt-[20px]"
      }, null, _parent));
      _push(`<div class="bg-[#FFF7F0] p-[15px_20px] text-[#FFA864] mt-[10px] rounded-[4px]" data-v-81235bd2><div data-v-81235bd2>\u9AD8\u8003\u5206\u6570\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).scoreSearchInfo.score))}\u5206</div><div class="my-[5px]" data-v-81235bd2> \u540C\u5206\u4EBA\u6570\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).scoreSearchInfo.cnt)))}\u4EBA </div><div data-v-81235bd2>\u6392\u540D\u533A\u95F4\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).scoreSearchInfo.wc)))}\u540D</div></div><div class="h-[350px] border-solid border border-[#EDEDED] rounded-[4px] mt-[10px]" data-v-81235bd2>`);
      _push(ssrRenderComponent(_component_zs_e_charts, { options: unref(lineChartOption) }, null, _parent));
      _push(`</div>`);
      if ((_d = unref(form).scoreSearchInfo) == null ? void 0 : _d.isHistory) {
        _push(`<div class="mt-[20px]" data-v-81235bd2><div class="mb-[10px]" data-v-81235bd2>\u5386\u53F2\u540C\u4F4D\u6B21\u8003\u751F\u5F97\u5206</div><!--[-->`);
        ssrRenderList((_e = unref(form).scoreSearchInfo) == null ? void 0 : _e.historyList, (item, index) => {
          _push(`<span class="mr-[20px]" data-v-81235bd2>${ssrInterpolate(item.score)}\u5206 (${ssrInterpolate(item.nf)}) </span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_zs_title, {
        title: "\u4E00\u5206\u4E00\u6BB5\u8868",
        size: "small",
        class: "mt-[20px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_table, {
        class: "mt-[20px] cursor-pointer",
        "table-layout-fixed": "",
        columns: createTableColumns(),
        data: unref(rankData).list,
        bordered: { wrapper: true, cell: true },
        pagination: { ...unref(pagination), total: unref(rankData).total },
        onPageChange: unref(onPageChange),
        onPageSizeChange: unref(onPageSizeChange),
        loading: unref(status) === "pending"
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rank = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81235bd2"]]);

export { rank as default };
//# sourceMappingURL=rank-ea90cd59.mjs.map
