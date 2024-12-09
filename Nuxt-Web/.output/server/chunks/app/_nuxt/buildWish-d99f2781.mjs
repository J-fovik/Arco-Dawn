import { _ as _sfc_main$1 } from './index-cb5bd3b8.mjs';
import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { T as Table } from './index-6a06d329.mjs';
import { _ as __nuxt_component_2 } from './index-4dfe90df.mjs';
import { u as useHead, b as useUser, e as useAsyncData, A as API_URLS, n as navigateTo, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode } from 'vue';
import { u as useBasicsState } from './useBasicsState-8a7a18a4.mjs';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { a as turnThousandth } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './index-90aba227.mjs';
import './index-f6f6f2a5.mjs';
import './index-dd449d78.mjs';
import 'resize-observer-polyfill';
import './index-08fdf206.mjs';
import 'number-precision';
import './index-11d38f35.mjs';
import './index-63900e07.mjs';
import './index-5f48af9c.mjs';
import './get-value-by-path-11166a95.mjs';
import './use-children-components-d7e0e48f.mjs';
import './index-3959f291.mjs';
import './index-d47379ff.mjs';
import 'compute-scroll-into-view';
import 'b-validate';
import './index-4ecc34e0.mjs';
import './index-8bcd588e.mjs';
import './options-7ec13930.mjs';
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
  __name: "buildWish",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u67E5\u770B\u5FD7\u613F\u8868"
    });
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const { form } = useForm(() => ({
      ...userInfo.value,
      selectRow: {}
      // 当前数据
    }));
    const createTableColumns = () => {
      return [
        {
          title: "\u6279\u6B21",
          dataIndex: "pc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "\u79D1\u76EE\u7C7B\u578B",
          dataIndex: "kl",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "\u6279\u6B21\u7EBF",
          dataIndex: "score",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "\u64CD\u4F5C",
          dataIndex: "operate",
          align: "center",
          ellipsis: true,
          tooltip: true,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          },
          slotName: "operate"
        }
      ];
    };
    const setSelectRow = (row, callBack) => {
      form.value.selectRow = row;
      if (callBack)
        callBack();
    };
    const addWish = async (record) => {
      const [err, res] = await $zsFetch(API_URLS.CHOICE.ADD_WISH, {
        body: {
          xk: form.value.xk,
          score: form.value.score,
          wc: form.value.wc,
          pc: record.pc
        }
      });
      navigateTo(`/choice?wid=${res == null ? void 0 : res.data}`);
    };
    const changeScore = (item) => {
      const xkList = item.gkms === "3+3" ? item.subjectList : [...item.firstSubjectList, ...item.secondSubjectList];
      form.value = {
        ...form.value,
        ...item,
        xk: xkList.join("/")
      };
      setSelectRow({}, () => setActiveKey(null));
      refresh();
    };
    const {
      data: pcData,
      status,
      refresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "queryAddWishPcList",
      async () => {
        var _a2, _b2;
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_ADD_WISH_PC_LIST, {
          body: {
            xk: form.value.xk,
            score: form.value.score
          }
        });
        return {
          pcList: (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.pcList) != null ? _a2 : [],
          wish: (_b2 = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.wish) != null ? _b2 : {}
        };
      },
      {
        default: () => ({
          pcList: [],
          wish: 2024
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_zs_title = _sfc_main$1;
      const _component_a_button = Button;
      const _component_a_table = Table;
      const _component_zs_choice_change_score_modal = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[60vh]" }, _attrs))} data-v-eddb92ae><div class="flex items-center justify-between mt-[10px]" data-v-eddb92ae><div data-v-eddb92ae> \u6211\u7684\u6210\u7EE9: <span class="text-[#FFA864] cursor-pointer" data-v-eddb92ae>${ssrInterpolate(unref(form).xk)} ${ssrInterpolate(unref(form).score + "\u5206")} ${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).wc) + "\u4F4D")} <i class="iconfont icon-chuangzuo" data-v-eddb92ae></i></span><span class="ml-[20px]" data-v-eddb92ae>\u7C7B\u578B:<span class="text-[#FFA864]" data-v-eddb92ae>\u666E\u901A\u7C7B</span></span></div><div class="border border-solid border-[#EDEDED] rounded-[8px] leading-[41px] px-[10px] cursor-pointer" data-v-eddb92ae> \u6211\u7684\u5FD7\u613F\u8868 </div></div>`);
      if ((_b = (_a = unref(pcData)) == null ? void 0 : _a.wish) == null ? void 0 : _b.id) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "\u5DF2\u5EFA\u5FD7\u613F\u8868\u7F16\u8F91",
          size: "small",
          class: "mt-[10px]"
        }, null, _parent));
        _push(`<div class="bg-[#F2F5FF] p-[20px] flex items-center justify-between mt-[20px]" data-v-eddb92ae><div data-v-eddb92ae> \u7EE7\u7EED\u7F16\u8F91\u6A21\u62DF\u5FD7\u613F\u8868\xA0<span class="text-[#FFA864]" data-v-eddb92ae>${ssrInterpolate((_d = (_c = unref(pcData)) == null ? void 0 : _c.wish) == null ? void 0 : _d.zybt)}</span>\uFF0C\u6216\u8FDB\u5165\xA0<span class="text-[#7C92FF]" data-v-eddb92ae>\u6211\u7684\u5FD7\u613F\u8868</span>\xA0\u9009\u62E9 </div>`);
        _push(ssrRenderComponent(_component_a_button, {
          type: "primary",
          class: "w-[150px] border-radius-4",
          onClick: ($event) => {
            var _a2, _b2;
            return ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice?wid=${(_b2 = (_a2 = unref(pcData)) == null ? void 0 : _a2.wish) == null ? void 0 : _b2.id}`);
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u7EE7\u7EED\u6A21\u62DF\u586B\u5FD7\u613F`);
            } else {
              return [
                createTextVNode("\u7EE7\u7EED\u6A21\u62DF\u586B\u5FD7\u613F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_zs_title, {
        title: "\u65B0\u5EFA\u6A21\u62DF\u5FD7\u613F\u8868",
        size: "small",
        class: "mt-[20px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_table, {
        class: "mt-[20px] cursor-pointer",
        "table-layout-fixed": "",
        columns: createTableColumns(),
        data: (_e = unref(pcData)) == null ? void 0 : _e.pcList,
        loading: unref(status) === "pending",
        pagination: false
      }, {
        operate: withCtx(({ record }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_button, {
              type: "primary",
              class: "w-[110px] border-radius-4",
              onClick: ($event) => addWish(record)
            }, {
              default: withCtx((_, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u65B0\u5EFA\u586B\u5FD7\u613F`);
                } else {
                  return [
                    createTextVNode("\u65B0\u5EFA\u586B\u5FD7\u613F")
                  ];
                }
              }),
              _: 2
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_button, {
                type: "primary",
                class: "w-[110px] border-radius-4",
                onClick: ($event) => addWish(record)
              }, {
                default: withCtx(() => [
                  createTextVNode("\u65B0\u5EFA\u586B\u5FD7\u613F")
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-[20px] bg-[#FFF7F0] p-[20px] leading-[22px]" data-v-eddb92ae><div class="font-bold text-[14px]" data-v-eddb92ae>\u7CFB\u7EDF\u4F7F\u7528\u987B\u77E5</div><div class="text-[12px]" data-v-eddb92ae><div data-v-eddb92ae>1\u3001\u5F53\u524D\u4E3A2024\u5E74\u62DB\u751F\u8BA1\u5212\u6570\u636E\uFF1B</div><div data-v-eddb92ae> 2\u3001\u672C\u7CFB\u7EDF\u4F9D\u636E\u5386\u5E74\u5404\u9662\u6821\u5F55\u53D6\u6570\u636E\u63D0\u4F9B\u6A21\u62DF\u5FD7\u613F\u670D\u52A1\uFF0C\u6B63\u5F0F\u586B\u62A5\u8BF7\u524D\u5F80\u8003\u8BD5\u9662\u5B98\u7F51\uFF1B </div><div data-v-eddb92ae> 3\u3001\u5728\u6B63\u5F0F\u586B\u62A5\u65F6\uFF0C\u4EE5\u6559\u80B2\u8003\u8BD5\u9662\u516C\u5E03\u7684\u6700\u65B0\u62DB\u751F\u8BA1\u5212\u4E3A\u51C6\uFF0C\u672C\u7CFB\u7EDF\u4F1A\u5728\u7B2C\u4E00\u65F6\u95F4\u5C06\u6700\u65B0\u7684\u62DB\u751F\u8BA1\u5212\u8FDB\u884C\u66F4\u65B0\uFF1B </div><div data-v-eddb92ae>4\u3001\u7CFB\u7EDF\u4F7F\u7528\u7684\u201C\u5F55\u53D6\u6982\u7387\u201D\u6839\u636E\u8FC7\u53BB\u5386\u5E74\u7684\u6570\u636E\u8BA1\u7B97\u5F97\u51FA\uFF0C\u4EC5\u4F5C\u53C2\u8003\u3002</div></div></div>`);
      if (unref(activeKey) === "ZsChoiceChangeScoreModal") {
        _push(ssrRenderComponent(_component_zs_choice_change_score_modal, {
          data: unref(form).selectRow,
          onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null)),
          onSuccess: changeScore
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/choice/buildWish.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const buildWish = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eddb92ae"]]);

export { buildWish as default };
//# sourceMappingURL=buildWish-d99f2781.mjs.map
