import { p as publicAssetsURL } from '../../handlers/renderer.mjs';
import { _ as __nuxt_component_11 } from './index-012b562f.mjs';
import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { _ as _sfc_main$1 } from './index-d6ea50b9.mjs';
import { u as useHead, g as useRoute, A as API_URLS, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode } from 'vue';
import { u as useBasicsState } from './useBasicsState-8a7a18a4.mjs';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { s as sleep } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { useDebounceFn } from '@vueuse/core';
import { I as IconArrowLeft } from './index-34855079.mjs';
import { I as IconCheck } from './index-0c9f2c90.mjs';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'vue-bundle-renderer/runtime';
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
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import './NuxtImg-9bcbe2bb.mjs';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@iconify/vue';

const _imports_0 = "" + publicAssetsURL("images/loading.gif");
const _imports_1 = "" + publicAssetsURL("images/ok.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u6D4B\u8BC4\u8BE6\u60C5"
    });
    const { $zsFetch } = useNuxtApp();
    const [loading, setLoading] = useBasicsState(false);
    const route = useRoute();
    const { form } = useForm(() => ({
      error: false,
      // 判断是否不存在该院校
      evaluateList: [],
      // 题列表
      cur: 0,
      // 当前索引
      isResult: false,
      // 是否有报告
      time: 0,
      // 计时用
      canClick: true
      // 是否可以点击
    }));
    const checkedNum = computed(() => {
      var _a, _b;
      return (_b = (_a = form.value.evaluateList) == null ? void 0 : _a.map((o) => o.myAnswer).filter((v) => v !== "")) == null ? void 0 : _b.length;
    });
    const selectAnswer = async (answer, current) => {
      if (!form.value.canClick) {
        return;
      }
      form.value.canClick = false;
      form.value.evaluateList[current].myAnswer = answer;
      await sleep(500);
      form.value.canClick = true;
      if (current + 1 == form.value.evaluateList.length) {
        await submitUserEvaluationReport();
      } else {
        form.value.cur++;
      }
    };
    useDebounceFn((answer, current) => {
      selectAnswer(answer, current);
    }, 100);
    const prevQuestion = () => {
      form.value.cur--;
    };
    const submitUserEvaluationReport = async () => {
      setLoading(true);
      const [err, res] = await $zsFetch(API_URLS.EVALUATE.SUBMIT_EVALUATE, {
        body: {
          id: route.params.id,
          topicAndAnswer: form.value.evaluateList.filter((v) => v.myAnswer !== "").map((o) => o.titleSort + "-" + (o.myAnswer == "\u662F" ? "0" : "1"))
        }
      });
      setLoading(false);
      if (res) {
        form.value.isResult = true;
      }
    };
    const viewReport = async () => {
      const [err, res] = await $zsFetch(API_URLS.EVALUATE.VIEW_EVALUATE_REPORT, {
        body: {
          id: route.params.id
        }
      });
      if (res) {
        window.open(res.data, "_blank");
      }
    };
    const getEvaluateInfo = async () => {
      const [err, res] = await $zsFetch(API_URLS.EVALUATE.QUERY_QUESTIONS, {
        body: {
          id: route.params.id
        }
      });
      if (res.data === "\u672A\u67E5\u8BE2\u5230\u5F53\u524D\u6D4B\u8BC4\u8BD5\u9898!") {
        form.value.error = true;
        return;
      }
      form.value.evaluateList = res.data.resultList.map((o) => {
        return {
          ...o,
          myAnswer: ""
        };
      });
    };
    getEvaluateInfo();
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_zs_proportion = __nuxt_component_11;
      const _component_a_button = Button;
      const _component_icon_arrow_left = IconArrowLeft;
      const _component_icon_check = IconCheck;
      const _component_zs_no_data = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[70vh]" }, _attrs))} data-v-bd2a3ad3>`);
      if (!unref(form).error) {
        _push(`<!--[-->`);
        if (!unref(loading) && !unref(form).isResult) {
          _push(`<div data-v-bd2a3ad3><div class="flex items-center justify-between mb-[10px]" data-v-bd2a3ad3><div class="mt-[20px]" data-v-bd2a3ad3><span class="text-[#FFA864]" data-v-bd2a3ad3>${ssrInterpolate(unref(form).cur + 1)}</span><span data-v-bd2a3ad3>/</span><span data-v-bd2a3ad3>${ssrInterpolate((_a = unref(form).evaluateList) == null ? void 0 : _a.length)}</span></div><div data-v-bd2a3ad3></div></div>`);
          _push(ssrRenderComponent(_component_zs_proportion, {
            width: unref(form).cur / (unref(form).evaluateList.length - 1) * 100 > 0 ? unref(form).cur / (unref(form).evaluateList.length - 1) * 100 : 1,
            background: "#7C92FF",
            isAnimate: false,
            key: unref(form).cur
          }, null, _parent));
          if ((_b = unref(form).evaluateList) == null ? void 0 : _b.length) {
            _push(`<div data-v-bd2a3ad3><div class="mt-[40px] mb-[20px] text-[20px]" data-v-bd2a3ad3>${ssrInterpolate((_c = unref(form).evaluateList[unref(form).cur]) == null ? void 0 : _c.titleSort)}\u3001${ssrInterpolate((_d = unref(form).evaluateList[unref(form).cur]) == null ? void 0 : _d.title)}</div><!--[-->`);
            ssrRenderList((_e = unref(form).evaluateList[unref(form).cur]) == null ? void 0 : _e.answerOptionsList, (o, i) => {
              var _a2;
              _push(`<div data-v-bd2a3ad3><div class="${ssrRenderClass([
                ((_a2 = unref(form).evaluateList[unref(form).cur]) == null ? void 0 : _a2.myAnswer) == o ? "bg-[#7c92ff]" : "bg-[#F9F9F9]",
                "relative h-[50px] leading-[50px] rounded-[8px] px-[30px] mb-[10px] cursor-pointer border-left transition"
              ])}" data-v-bd2a3ad3><div data-v-bd2a3ad3>${ssrInterpolate(o)}</div></div></div>`);
            });
            _push(`<!--]--><div class="mt-[20px] flex items-center justify-between" data-v-bd2a3ad3>`);
            if (unref(form).cur !== 0) {
              _push(ssrRenderComponent(_component_a_button, {
                type: "primary",
                class: "openButton",
                onClick: prevQuestion
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_icon_arrow_left, { class: "mr-[2px]" }, null, _parent2, _scopeId));
                    _push2(`\u4E0A\u4E00\u9898 `);
                  } else {
                    return [
                      createVNode(_component_icon_arrow_left, { class: "mr-[2px]" }),
                      createTextVNode("\u4E0A\u4E00\u9898 ")
                    ];
                  }
                }),
                _: 1
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            if (unref(checkedNum) >= 30) {
              _push(ssrRenderComponent(_component_a_button, {
                type: "primary",
                class: "openButton",
                onClick: submitUserEvaluationReport
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(ssrRenderComponent(_component_icon_check, { class: "mr-[2px]" }, null, _parent2, _scopeId));
                    _push2(`\u63D0\u4EA4 `);
                  } else {
                    return [
                      createVNode(_component_icon_check, { class: "mr-[2px]" }),
                      createTextVNode("\u63D0\u4EA4 ")
                    ];
                  }
                }),
                _: 1
              }, _parent));
            } else {
              _push(`<!---->`);
            }
            _push(`</div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else if (unref(loading) && !unref(form).isResult) {
          _push(`<div class="flex items-center justify-center flex-col" data-v-bd2a3ad3><div class="mt-[30px] text-[18px]" data-v-bd2a3ad3>\u6D4B\u8BC4\u5B8C\u6210\uFF0C\u6B63\u5728\u751F\u6210\u62A5\u544A...</div><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-bd2a3ad3></div>`);
        } else {
          _push(`<div class="flex items-center justify-center flex-col" data-v-bd2a3ad3><div class="flex items-center justify-center mt-[50px]" data-v-bd2a3ad3><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "120px" })}" alt="" data-v-bd2a3ad3></div><div class="text-[32px] font-bold" data-v-bd2a3ad3>\u6D4B\u8BC4\u5B8C\u6210</div><div class="text-[14px] text-[#666] my-[10px]" data-v-bd2a3ad3> \u5171\u5B8C\u6210 ${ssrInterpolate(unref(form).evaluateList.length)} \u9898 </div>`);
          _push(ssrRenderComponent(_component_a_button, {
            type: "primary",
            class: "openButton",
            onClick: viewReport
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u67E5\u770B\u62A5\u544A `);
              } else {
                return [
                  createTextVNode("\u67E5\u770B\u62A5\u544A ")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        }
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_zs_no_data, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-bd2a3ad3${_scopeId}>\u7CDF\u7CD5\uFF0C\u9875\u9762\u597D\u50CF\u6CA1\u627E\u5230</div>`);
            } else {
              return [
                createVNode("div", null, "\u7CDF\u7CD5\uFF0C\u9875\u9762\u597D\u50CF\u6CA1\u627E\u5230")
              ];
            }
          }),
          _: 1
        }, _parent));
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/evaluate/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd2a3ad3"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-1afacb21.mjs.map
