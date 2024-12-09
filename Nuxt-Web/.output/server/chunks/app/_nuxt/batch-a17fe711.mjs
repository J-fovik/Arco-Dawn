import { _ as _sfc_main$1 } from './index-3e511c39.mjs';
import { T as Table } from './index-6a06d329.mjs';
import { u as useHead, b as useUser, d as useWebsiteInformation, e as useAsyncData, A as API_URLS, f as useNuxtApp } from '../server.mjs';
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { t as textFormat, a as turnThousandth } from './index-a008b2db.mjs';
import { A as ALL_OPTIONS } from './options-7ec13930.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import './use-teleport-container-1599a5a4.mjs';
import './index-dd449d78.mjs';
import 'resize-observer-polyfill';
import './index-11d38f35.mjs';
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
  __name: "batch",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u6279\u6B21\u67E5\u8BE2"
    });
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const { provinceList } = useWebsiteInformation();
    const createTableColumns = () => {
      return [
        {
          title: "\u5730\u533A",
          dataIndex: "sf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "\u5E74\u4EFD",
          dataIndex: "nf",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "\u8003\u751F\u7C7B\u522B",
          dataIndex: "kl",
          width: 120,
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          }
        },
        {
          title: "\u5F55\u53D6\u6279\u6B21",
          dataIndex: "pc",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.pc);
          }
        },
        {
          title: "\u5206\u6570\u7EBF",
          dataIndex: "score",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "score"
        },
        {
          title: "\u4F4D\u6B21",
          dataIndex: "wc",
          align: "center",
          width: 120,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "wc"
        }
      ];
    };
    const changeFilter = async (val) => {
      if (val.sf !== sfData.value.sf) {
        sfData.value.sf = val.sf;
        nfData.value.nf = "";
        klData.value.kl = "";
        pcData.value.pc = "";
        await refreshNfData();
        await refreshKlData();
        await refreshPcData();
      }
      if (val.nf !== nfData.value.nf) {
        nfData.value.nf = val.nf;
        klData.value.kl = "";
        pcData.value.pc = "";
        await refreshKlData();
        await refreshPcData();
      }
      if (val.kl !== klData.value.kl) {
        klData.value.kl = val.kl;
      }
      if (val.pc !== pcData.value.pc) {
        pcData.value.pc = val.pc;
      }
      refreshBatchData();
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
      var _a2, _b2;
      var _a, _b;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_PCX_NF, {
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
        nf: (_b2 = (_b = nfList[0]) == null ? void 0 : _b.value) != null ? _b2 : ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: klData, refresh: refreshKlData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("klList", async () => {
      var _a2;
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_PCX_KL, {
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
        options: [...ALL_OPTIONS, ...klList],
        kl: ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: pcData, refresh: refreshPcData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("pcList", async () => {
      var _a2;
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_PCX_PC, {
        body: {
          sf: sfData.value.sf,
          nf: nfData.value.nf
        }
      });
      const pcList = (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.map((o) => {
        return {
          value: o.pc,
          label: o.pc
        };
      })) != null ? _a2 : [];
      return {
        title: "\u5F55\u53D6\u6279\u6B21",
        key: "pc",
        isShow: true,
        multiple: false,
        options: [...ALL_OPTIONS, ...pcList],
        pc: ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const {
      data: batchData,
      status,
      refresh: refreshBatchData
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("batchList", async () => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_PCX_PC_LIST, {
        body: {
          sf: sfData.value.sf,
          nf: nfData.value.nf,
          kl: klData.value.kl,
          pc: pcData.value.pc
        }
      });
      return (_a = res == null ? void 0 : res.data) != null ? _a : [];
    })), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d;
      const _component_zs_select_filter = _sfc_main$1;
      const _component_a_table = Table;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[60vh]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_zs_select_filter, {
        data: [unref(sfData), unref(nfData), unref(klData), unref(pcData)],
        "default-values": {
          sf: (_a = unref(sfData)) == null ? void 0 : _a.sf,
          nf: (_b = unref(nfData)) == null ? void 0 : _b.nf,
          kl: (_c = unref(klData)) == null ? void 0 : _c.kl,
          pc: (_d = unref(pcData)) == null ? void 0 : _d.pc
        },
        onChange: changeFilter,
        class: "mt-[20px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_table, {
        class: "mt-[20px] cursor-pointer",
        "table-layout-fixed": "",
        columns: createTableColumns(),
        data: unref(batchData),
        bordered: { wrapper: true, cell: true },
        loading: unref(status) === "pending"
      }, {
        score: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right"${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.score))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.score)), 1)
            ];
          }
        }),
        wc: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="text-right"${_scopeId}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.wc)))}</div>`);
          } else {
            return [
              createVNode("div", { class: "text-right" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.wc))), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/batch.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=batch-a17fe711.mjs.map
