import { _ as __nuxt_component_11 } from "./index-012b562f.js";
import { B as Button } from "./use-teleport-container-1599a5a4.js";
import { _ as _sfc_main$1 } from "./index-d6ea50b9.js";
/* empty css                */import { u as useHead, g as useRoute, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { defineComponent, computed, mergeProps, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useBasicsState } from "./useBasicsState-8a7a18a4.js";
import { u as useForm } from "./useArco-b2247a5c.js";
import { s as sleep } from "./index-a008b2db.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useDebounceFn } from "@vueuse/core";
import { I as IconArrowLeft } from "./index-34855079.js";
import { I as IconCheck } from "./index-0c9f2c90.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./NuxtImg-9bcbe2bb.js";
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
const _imports_0 = "" + __publicAssetsURL("images/loading.gif");
const _imports_1 = "" + __publicAssetsURL("images/ok.png");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "测评详情"
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
          topicAndAnswer: form.value.evaluateList.filter((v) => v.myAnswer !== "").map((o) => o.titleSort + "-" + (o.myAnswer == "是" ? "0" : "1"))
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
      if (res.data === "未查询到当前测评试题!") {
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
            _push(`<div data-v-bd2a3ad3><div class="mt-[40px] mb-[20px] text-[20px]" data-v-bd2a3ad3>${ssrInterpolate((_c = unref(form).evaluateList[unref(form).cur]) == null ? void 0 : _c.titleSort)}、${ssrInterpolate((_d = unref(form).evaluateList[unref(form).cur]) == null ? void 0 : _d.title)}</div><!--[-->`);
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
                    _push2(`上一题 `);
                  } else {
                    return [
                      createVNode(_component_icon_arrow_left, { class: "mr-[2px]" }),
                      createTextVNode("上一题 ")
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
                    _push2(`提交 `);
                  } else {
                    return [
                      createVNode(_component_icon_check, { class: "mr-[2px]" }),
                      createTextVNode("提交 ")
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
          _push(`<div class="flex items-center justify-center flex-col" data-v-bd2a3ad3><div class="mt-[30px] text-[18px]" data-v-bd2a3ad3>测评完成，正在生成报告...</div><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-bd2a3ad3></div>`);
        } else {
          _push(`<div class="flex items-center justify-center flex-col" data-v-bd2a3ad3><div class="flex items-center justify-center mt-[50px]" data-v-bd2a3ad3><img${ssrRenderAttr("src", _imports_1)} style="${ssrRenderStyle({ "width": "120px" })}" alt="" data-v-bd2a3ad3></div><div class="text-[32px] font-bold" data-v-bd2a3ad3>测评完成</div><div class="text-[14px] text-[#666] my-[10px]" data-v-bd2a3ad3> 共完成 ${ssrInterpolate(unref(form).evaluateList.length)} 题 </div>`);
          _push(ssrRenderComponent(_component_a_button, {
            type: "primary",
            class: "openButton",
            onClick: viewReport
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`查看报告 `);
              } else {
                return [
                  createTextVNode("查看报告 ")
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
              _push2(`<div data-v-bd2a3ad3${_scopeId}>糟糕，页面好像没找到</div>`);
            } else {
              return [
                createVNode("div", null, "糟糕，页面好像没找到")
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
const _id__vue_vue_type_style_index_0_scoped_bd2a3ad3_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/evaluate/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bd2a3ad3"]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-1afacb21.js.map
