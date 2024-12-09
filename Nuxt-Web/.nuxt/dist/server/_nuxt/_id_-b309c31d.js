import { L as List } from "./index-7a08c899.js";
import { _ as _sfc_main$1 } from "./index-cb5bd3b8.js";
import { _ as __nuxt_component_0 } from "./nuxt-link-99c863e4.js";
import { _ as _sfc_main$2 } from "./index-d6ea50b9.js";
import "./use-teleport-container-1599a5a4.js";
import "./index-dd449d78.js";
import "./index-90aba227.js";
import "./index-08fdf206.js";
/* empty css                */import "./index-11d38f35.js";
import "./index-f6f6f2a5.js";
import "./index-4ecc34e0.js";
import { u as useHead, g as useRoute, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { ref, defineComponent, mergeProps, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useBasicsState } from "./useBasicsState-8a7a18a4.js";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
import "ufo";
import "hookable";
import "./NuxtImg-9bcbe2bb.js";
import "resize-observer-polyfill";
import "number-precision";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "cookie-es";
import "ohash";
import "dayjs";
import "dayjs/plugin/updateLocale.js";
import "dayjs/plugin/relativeTime.js";
import "dayjs/plugin/utc.js";
import "@iconify/vue";
import "defu";
const useRequest = (api, defaultValue = {}) => {
  const data = ref(defaultValue);
  const [loading, setLoading] = useBasicsState(false);
  const initData = async () => {
    setLoading(true);
    const res = await api();
    data.value = res;
    setLoading(false);
  };
  initData();
  return { data, initData, loading };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "职业库详情"
    });
    const error = ref(false);
    const { $zsFetch } = useNuxtApp();
    const [loading, setLoading] = useBasicsState(false);
    const route = useRoute();
    const { data: jobDetail } = useRequest(async () => {
      var _a, _b, _c, _d;
      setLoading(true);
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_PROFESSION_INFO, {
        body: {
          id: route.params.id
        }
      });
      if (res.data === "职业不存在") {
        error.value = true;
        setLoading(false);
        return;
      }
      setLoading(false);
      return {
        ...res == null ? void 0 : res.data,
        isBkMajor: ((_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.bkMajorList) == null ? void 0 : _b.length) > 0 ? true : false,
        isZkMajor: ((_d = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.zkMajorList) == null ? void 0 : _d.length) > 0 ? true : false
      };
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_list = List;
      const _component_zs_title = _sfc_main$1;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_zs_no_data = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[70vh]" }, _attrs))}>`);
      if (!unref(error)) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_a_list, {
          bordered: false,
          loading: unref(loading)
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="text-[32px] font-bold mt-[35px]"${_scopeId}>${ssrInterpolate(unref(jobDetail).levelName)}</div><div class="mt-[20px]"${_scopeId}><span class="bg-[#FFF7F0] text-[#FFA864] p-[5px]"${_scopeId}>${ssrInterpolate(unref(jobDetail).level1Name)}${ssrInterpolate(unref(jobDetail).level2Name ? "/" + unref(jobDetail).level2Name : "")}${ssrInterpolate(unref(jobDetail).level3Name ? "/" + unref(jobDetail).level3Name : "")}</span></div>`);
              if (unref(jobDetail).introduce) {
                _push2(`<div class="mt-[20px]"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_zs_title, {
                  title: "职业介绍",
                  size: "small"
                }, null, _parent2, _scopeId));
                _push2(`<div class="mt-[10px] p-[15px_20px] bg-[#F5F5F5] leading-[20px]"${_scopeId}>${unref(jobDetail).introduce}</div></div>`);
              } else {
                _push2(`<!---->`);
              }
              if (unref(jobDetail).isBkMajor || unref(jobDetail).isZkMajor) {
                _push2(`<div class="mt-[20px]"${_scopeId}>`);
                _push2(ssrRenderComponent(_component_zs_title, {
                  title: "匹配大学专业",
                  size: "small"
                }, null, _parent2, _scopeId));
                if (unref(jobDetail).isBkMajor) {
                  _push2(`<div class="mt-[10px]"${_scopeId}> 本科专业：<!--[-->`);
                  ssrRenderList(unref(jobDetail).bkMajorList, (item, index) => {
                    _push2(`<span class="mr-[20px] text-[#FFA864] cursor-pointer"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_nuxt_link, {
                      to: `/major/${item.id}`
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(item.zymc)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.zymc), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</span>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(jobDetail).isZkMajor) {
                  _push2(`<div class="mt-[10px]"${_scopeId}> 专科专业：<!--[-->`);
                  ssrRenderList(unref(jobDetail).zkMajorList, (item, index) => {
                    _push2(`<span class="mr-[20px] text-[#FFA864] cursor-pointer"${_scopeId}>`);
                    _push2(ssrRenderComponent(_component_nuxt_link, {
                      to: `/major/${item.id}`
                    }, {
                      default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`${ssrInterpolate(item.zymc)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(item.zymc), 1)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`</span>`);
                  });
                  _push2(`<!--]--></div>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode("div", { class: "text-[32px] font-bold mt-[35px]" }, toDisplayString(unref(jobDetail).levelName), 1),
                createVNode("div", { class: "mt-[20px]" }, [
                  createVNode("span", { class: "bg-[#FFF7F0] text-[#FFA864] p-[5px]" }, toDisplayString(unref(jobDetail).level1Name) + toDisplayString(unref(jobDetail).level2Name ? "/" + unref(jobDetail).level2Name : "") + toDisplayString(unref(jobDetail).level3Name ? "/" + unref(jobDetail).level3Name : ""), 1)
                ]),
                unref(jobDetail).introduce ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "mt-[20px]"
                }, [
                  createVNode(_component_zs_title, {
                    title: "职业介绍",
                    size: "small"
                  }),
                  createVNode("div", {
                    class: "mt-[10px] p-[15px_20px] bg-[#F5F5F5] leading-[20px]",
                    innerHTML: unref(jobDetail).introduce
                  }, null, 8, ["innerHTML"])
                ])) : createCommentVNode("", true),
                unref(jobDetail).isBkMajor || unref(jobDetail).isZkMajor ? (openBlock(), createBlock("div", {
                  key: 1,
                  class: "mt-[20px]"
                }, [
                  createVNode(_component_zs_title, {
                    title: "匹配大学专业",
                    size: "small"
                  }),
                  unref(jobDetail).isBkMajor ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "mt-[10px]"
                  }, [
                    createTextVNode(" 本科专业："),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(jobDetail).bkMajorList, (item, index) => {
                      return openBlock(), createBlock("span", {
                        key: index,
                        class: "mr-[20px] text-[#FFA864] cursor-pointer"
                      }, [
                        createVNode(_component_nuxt_link, {
                          to: `/major/${item.id}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.zymc), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true),
                  unref(jobDetail).isZkMajor ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "mt-[10px]"
                  }, [
                    createTextVNode(" 专科专业："),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(jobDetail).zkMajorList, (item, index) => {
                      return openBlock(), createBlock("span", {
                        key: index,
                        class: "mr-[20px] text-[#FFA864] cursor-pointer"
                      }, [
                        createVNode(_component_nuxt_link, {
                          to: `/major/${item.id}`
                        }, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(item.zymc), 1)
                          ]),
                          _: 2
                        }, 1032, ["to"])
                      ]);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])) : createCommentVNode("", true)
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else {
        _push(ssrRenderComponent(_component_zs_no_data, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>糟糕，页面好像没找到</div>`);
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
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobLibrary/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_id_-b309c31d.js.map
