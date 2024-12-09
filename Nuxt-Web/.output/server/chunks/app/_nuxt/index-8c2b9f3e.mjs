import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { C as Checkbox } from './index-11d38f35.mjs';
import { a as Input, b as IconSearch } from './index-dd449d78.mjs';
import { _ as _sfc_main$1 } from './index-3e511c39.mjs';
import { C as Card } from './index-62ae8a6f.mjs';
import { G as Grid, a as GridItem } from './index-4ecc34e0.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-99c863e4.mjs';
import { T as Tooltip } from './index-5f48af9c.mjs';
import { _ as _sfc_main$2 } from './index-d6ea50b9.mjs';
import { u as useHead, n as navigateTo, A as API_URLS, f as useNuxtApp } from '../server.mjs';
import { u as useLoading } from './useLoading-35bd0ba7.mjs';
import { useSSRContext, defineComponent, ref, computed, mergeProps, withCtx, unref, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList } from 'vue';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { f as findOptions } from './options-7ec13930.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'resize-observer-polyfill';
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
import './NuxtImg-9bcbe2bb.mjs';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'dayjs';
import 'dayjs/plugin/updateLocale.js';
import 'dayjs/plugin/relativeTime.js';
import 'dayjs/plugin/utc.js';
import '@iconify/vue';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u804C\u4E1A\u5E93"
    });
    const { setGlobalLoading } = useLoading();
    const { $zsFetch } = useNuxtApp();
    const { form } = useForm(() => ({
      perfectMatch: false,
      professionName: "",
      levelName: "",
      selectList: [],
      show: false
    }));
    const changeFilter = (val) => {
      form.value.levelName = val.levelName;
      form.value.selectList = findOptions(filterData.value[0].options, val.levelName).children;
    };
    const filterData = ref([
      {
        title: "\u804C\u4E1A\u5927\u7C7B",
        key: "levelName",
        isShow: true,
        multiple: false,
        options: []
      }
    ]);
    const getJobList = async () => {
      var _a2;
      var _a, _b;
      await setGlobalLoading(true);
      const [err, res] = await $zsFetch(API_URLS.MORE.GET_PROFESSION, {
        body: {}
      });
      if (err)
        return setGlobalLoading(false);
      const result = (_a2 = res.data.map((o) => {
        return {
          ...o,
          value: o.levelName,
          label: o.levelName
        };
      })) != null ? _a2 : [];
      filterData.value[0].options = result;
      form.value.show = true;
      form.value.levelName = (_a = result[0]) == null ? void 0 : _a.levelName;
      form.value.selectList = (_b = result[0]) == null ? void 0 : _b.children;
      setGlobalLoading(false);
    };
    getJobList();
    const middleCategoriesCount = computed(() => form.value.selectList.length);
    const smallCategoriesCount = computed(() => {
      return form.value.selectList.reduce((acc, middle) => acc + middle.children.length, 0);
    });
    const jobsCount = computed(() => {
      return form.value.selectList.reduce((acc, middle) => {
        return acc + middle.children.reduce((acc2, small) => acc2 + small.children.length, 0);
      }, 0);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_button = Button;
      const _component_a_checkbox = Checkbox;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_zs_select_filter = _sfc_main$1;
      const _component_a_card = Card;
      const _component_a_grid = Grid;
      const _component_a_grid_item = GridItem;
      const _component_nuxt_link = __nuxt_component_0;
      const _component_a_tooltip = Tooltip;
      const _component_zs_no_data = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))} data-v-ec566f23><div class="flex items-center mt-[20px]" data-v-ec566f23><div class="w-[150px]" data-v-ec566f23>`);
      _push(ssrRenderComponent(_component_a_button, { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_checkbox, {
              modelValue: unref(form).perfectMatch,
              "onUpdate:modelValue": ($event) => unref(form).perfectMatch = $event,
              onChange: ($event) => !unref(form).perfectMatch
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
                modelValue: unref(form).perfectMatch,
                "onUpdate:modelValue": ($event) => unref(form).perfectMatch = $event,
                onChange: ($event) => !unref(form).perfectMatch
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
      _push(`</div><div class="w-full ml-[20px]" data-v-ec566f23>`);
      _push(ssrRenderComponent(_component_a_input, {
        size: "large",
        modelValue: unref(form).professionName,
        "onUpdate:modelValue": ($event) => unref(form).professionName = $event,
        class: "rounded-lg h-[38px]",
        placeholder: "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u804C\u4E1A",
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
      _push(`</div><div class="w-[120px] ml-[20px]" data-v-ec566f23>`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        size: "large",
        class: "openButton w-[120px]",
        onClick: ($event) => unref(form).professionName ? ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/jobLibrary/search?keyword=${unref(form).professionName}`) : ""
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
      _push(ssrRenderComponent(_component_zs_select_filter, {
        data: unref(filterData),
        "default-values": unref(form),
        onChange: changeFilter,
        class: "mt-[20px]"
      }, null, _parent));
      _push(`<div class="mt-[20px]" data-v-ec566f23><div class="mt-[10px]" data-v-ec566f23>${ssrInterpolate(unref(middleCategoriesCount) + "\u4E2A\u804C\u4E1A\u4E2D\u7C7B\u3001" + unref(smallCategoriesCount) + "\u4E2A\u804C\u4E1A\u5C0F\u7C7B\u3001" + unref(jobsCount) + "\u4E2A\u804C\u4E1A")}</div><!--[-->`);
      ssrRenderList(unref(form).selectList, (middle, index2) => {
        _push(`<div data-v-ec566f23><div class="flex items-center my-[20px]" data-v-ec566f23><div class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]" data-v-ec566f23></div><div class="ml-[10px] text-[18px] text-[#333] font-bold" data-v-ec566f23>${ssrInterpolate(middle.levelName)}</div></div><!--[-->`);
        ssrRenderList(middle.children, (small, index22) => {
          _push(ssrRenderComponent(_component_a_card, {
            key: index22,
            class: "mb-[10px] card-box-shadow rounded-[8px]",
            hoverable: "",
            bordered: false
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="flex items-center" data-v-ec566f23${_scopeId}><div class="w-[300px] truncate text-[16px] font-bold" data-v-ec566f23${_scopeId}>${ssrInterpolate(small.levelName)}</div>`);
                _push2(ssrRenderComponent(_component_a_grid, {
                  cols: 3,
                  colGap: 12,
                  rowGap: 16,
                  class: "flex-1"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<!--[-->`);
                      ssrRenderList(small.children, (job, index3) => {
                        _push3(ssrRenderComponent(_component_a_grid_item, {
                          key: index3,
                          class: "h-[35px] leading-[35px] px-[10px]"
                        }, {
                          default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_nuxt_link, {
                                to: `/jobLibrary/${job.id}`
                              }, {
                                default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(ssrRenderComponent(_component_a_tooltip, {
                                      content: job.levelName,
                                      position: "lt"
                                    }, {
                                      default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="text-[#7c92ff] truncate w-[80%] text-[16px] cursor-pointer" data-v-ec566f23${_scopeId5}>${ssrInterpolate(job.levelName)}</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "text-[#7c92ff] truncate w-[80%] text-[16px] cursor-pointer" }, toDisplayString(job.levelName), 1)
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                  } else {
                                    return [
                                      createVNode(_component_a_tooltip, {
                                        content: job.levelName,
                                        position: "lt"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "text-[#7c92ff] truncate w-[80%] text-[16px] cursor-pointer" }, toDisplayString(job.levelName), 1)
                                        ]),
                                        _: 2
                                      }, 1032, ["content"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_nuxt_link, {
                                  to: `/jobLibrary/${job.id}`
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_tooltip, {
                                      content: job.levelName,
                                      position: "lt"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "text-[#7c92ff] truncate w-[80%] text-[16px] cursor-pointer" }, toDisplayString(job.levelName), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["content"])
                                  ]),
                                  _: 2
                                }, 1032, ["to"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      });
                      _push3(`<!--]-->`);
                    } else {
                      return [
                        (openBlock(true), createBlock(Fragment, null, renderList(small.children, (job, index3) => {
                          return openBlock(), createBlock(_component_a_grid_item, {
                            key: index3,
                            class: "h-[35px] leading-[35px] px-[10px]"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: `/jobLibrary/${job.id}`
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_tooltip, {
                                    content: job.levelName,
                                    position: "lt"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-[#7c92ff] truncate w-[80%] text-[16px] cursor-pointer" }, toDisplayString(job.levelName), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["content"])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
                _push2(`</div>`);
              } else {
                return [
                  createVNode("div", { class: "flex items-center" }, [
                    createVNode("div", { class: "w-[300px] truncate text-[16px] font-bold" }, toDisplayString(small.levelName), 1),
                    createVNode(_component_a_grid, {
                      cols: 3,
                      colGap: 12,
                      rowGap: 16,
                      class: "flex-1"
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(small.children, (job, index3) => {
                          return openBlock(), createBlock(_component_a_grid_item, {
                            key: index3,
                            class: "h-[35px] leading-[35px] px-[10px]"
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_nuxt_link, {
                                to: `/jobLibrary/${job.id}`
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_tooltip, {
                                    content: job.levelName,
                                    position: "lt"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "text-[#7c92ff] truncate w-[80%] text-[16px] cursor-pointer" }, toDisplayString(job.levelName), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["content"])
                                ]),
                                _: 2
                              }, 1032, ["to"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 2
                    }, 1024)
                  ])
                ];
              }
            }),
            _: 2
          }, _parent));
        });
        _push(`<!--]--></div>`);
      });
      _push(`<!--]-->`);
      if (!unref(form).selectList.length && unref(form).show) {
        _push(ssrRenderComponent(_component_zs_no_data, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-ec566f23${_scopeId}>\u7CDF\u7CD5\uFF0C\u672A\u67E5\u8BE2\u5230\u5339\u914D\u804C\u4E1A</div>`);
            } else {
              return [
                createVNode("div", null, "\u7CDF\u7CD5\uFF0C\u672A\u67E5\u8BE2\u5230\u5339\u914D\u804C\u4E1A")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/jobLibrary/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-ec566f23"]]);

export { index as default };
//# sourceMappingURL=index-8c2b9f3e.mjs.map
