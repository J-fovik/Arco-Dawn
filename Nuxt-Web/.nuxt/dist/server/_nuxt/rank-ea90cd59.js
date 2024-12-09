import { _ as _sfc_main$1 } from "./index-3e511c39.js";
import { b as Input, a as IconSearch } from "./index-dd449d78.js";
import { B as Button } from "./use-teleport-container-1599a5a4.js";
import { _ as _sfc_main$2 } from "./index-cb5bd3b8.js";
import { _ as _sfc_main$3 } from "./index-9a6e8b24.js";
import { T as Table } from "./index-6a06d329.js";
/* empty css                */import "./index-11d38f35.js";
import "./index-90aba227.js";
import "./index-08fdf206.js";
/* empty css                */import "./index-f6f6f2a5.js";
import "./index-63900e07.js";
/* empty css                */import { u as useHead, b as useUser, d as useWebsiteInformation, e as useAsyncData, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { defineComponent, computed, withAsyncContext, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useForm } from "./useArco-b2247a5c.js";
import { u as usePagination } from "./usePagination-23ca46d2.js";
import { a as turnThousandth, t as textFormat } from "./index-a008b2db.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import * as echarts from "echarts/core";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "resize-observer-polyfill";
import "echarts/components";
import "echarts/charts";
import "echarts/features";
import "echarts/renderers";
import "@vueuse/core";
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
  __name: "rank",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "位次查询"
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
									<div>高考分数：${form.value.lineInfo.score}分</div>
									${form.value.lineInfo.pc ? `<div>${form.value.lineInfo.pc}：${form.value.lineInfo.pcx}分 </div>` : ""}
									<div>同分人数：${turnThousandth(form.value.lineInfo.cnt)}名 </div>
									<div>排名区间：${turnThousandth(
              form.value.lineInfo.wcRange.split("-")[0] + "-" + turnThousandth(
                form.value.lineInfo.wcRange.split("-")[1]
              )
            )}名 </div>
									 ${isHistory ? `<div>历史同位次考生得分：</div> ${historyScoresText}` : ""}

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
          name: "分数",
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
          name: "人数",
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
          title: "分数",
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
          title: "本段人数",
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
          title: "累计人数",
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
      var _a, _b;
      form.value.scoreSearchInfo = lineData.value.find((item) => item.score == form.value.score) ?? {};
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
        title: "所在地区",
        key: "sf",
        isShow: true,
        multiple: false,
        options: sfList,
        sf: userInfo.value.province
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: nfData, refresh: refreshNfData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("nfList", async () => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_NF, {
        body: {
          sf: sfData.value.sf
        }
      });
      const nfList = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
        return {
          value: o.nf,
          label: o.nf
        };
      })) ?? [];
      return {
        title: "录取年份",
        key: "nf",
        isShow: true,
        multiple: false,
        options: nfList,
        nf: nfList[0].value ?? ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: klData, refresh: refreshKlData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("klList", async () => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_KL, {
        body: {
          sf: sfData.value.sf,
          nf: nfData.value.nf
        }
      });
      const klList = ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
        return {
          value: o.kl,
          label: o.kl
        };
      })) ?? [];
      return {
        title: "考生类别",
        key: "kl",
        isShow: true,
        multiple: false,
        options: klList,
        kl: klList[0].value ?? ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const {
      data: rankData,
      status,
      refresh: refreshRankData
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("rankList", async () => {
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
        list: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.rankList) ?? [],
        total: ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.totalCount) ?? 0
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: lineData, refresh: refreshLineData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("lineList", async () => {
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_WC_LINE_CHART, {
        body: {
          sf: sfData.value.sf,
          nf: nfData.value.nf,
          kl: klData.value.kl
        }
      });
      return (res == null ? void 0 : res.data) ?? [];
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
        placeholder: "请输入您的分数",
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
      _push(ssrRenderComponent(_component_zs_title, {
        title: "折线图",
        size: "small",
        class: "mt-[20px]"
      }, null, _parent));
      _push(`<div class="bg-[#FFF7F0] p-[15px_20px] text-[#FFA864] mt-[10px] rounded-[4px]" data-v-81235bd2><div data-v-81235bd2>高考分数：${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).scoreSearchInfo.score))}分</div><div class="my-[5px]" data-v-81235bd2> 同分人数：${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).scoreSearchInfo.cnt)))}人 </div><div data-v-81235bd2>排名区间：${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).scoreSearchInfo.wc)))}名</div></div><div class="h-[350px] border-solid border border-[#EDEDED] rounded-[4px] mt-[10px]" data-v-81235bd2>`);
      _push(ssrRenderComponent(_component_zs_e_charts, { options: unref(lineChartOption) }, null, _parent));
      _push(`</div>`);
      if ((_d = unref(form).scoreSearchInfo) == null ? void 0 : _d.isHistory) {
        _push(`<div class="mt-[20px]" data-v-81235bd2><div class="mb-[10px]" data-v-81235bd2>历史同位次考生得分</div><!--[-->`);
        ssrRenderList((_e = unref(form).scoreSearchInfo) == null ? void 0 : _e.historyList, (item, index) => {
          _push(`<span class="mr-[20px]" data-v-81235bd2>${ssrInterpolate(item.score)}分 (${ssrInterpolate(item.nf)}) </span>`);
        });
        _push(`<!--]--></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_zs_title, {
        title: "一分一段表",
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
const rank_vue_vue_type_style_index_0_scoped_81235bd2_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/rank.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const rank = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-81235bd2"]]);
export {
  rank as default
};
//# sourceMappingURL=rank-ea90cd59.js.map
