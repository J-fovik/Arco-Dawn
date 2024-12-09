import { R as RadioGroup, a as Radio } from './index-63900e07.mjs';
import { S as Spin } from './index-11d38f35.mjs';
import { L as List, a as ListItem } from './index-7a08c899.mjs';
import { _ as _sfc_main$1 } from './index-c58e1e57.mjs';
import { S as Space } from './index-8bcd588e.mjs';
import { _ as _sfc_main$2 } from './index-d6ea50b9.mjs';
import { _ as _sfc_main$3 } from './index-33e76c07.mjs';
import { P as Pagination } from './index-90aba227.mjs';
import { u as useHead, g as useRoute, b as useUser, e as useAsyncData, A as API_URLS, n as navigateTo, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, ref, withAsyncContext, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, Fragment, renderList, createTextVNode, createCommentVNode } from 'vue';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import { a as turnThousandth, t as textFormat } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import './use-teleport-container-1599a5a4.mjs';
import './index-4ecc34e0.mjs';
import './index-dd449d78.mjs';
import 'resize-observer-polyfill';
import './index-f6f6f2a5.mjs';
import './options-7ec13930.mjs';
import './NuxtImg-9bcbe2bb.mjs';
import './index-08fdf206.mjs';
import 'number-precision';
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
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u5168\u5C40\u641C\u7D22"
    });
    const { $zsFetch } = useNuxtApp();
    const route = useRoute();
    const { userInfo } = useUser();
    const { form } = useForm(() => ({
      tabRadio: "\u7EFC\u5408",
      tabRadioList: ["\u7EFC\u5408", "\u9662\u6821", "\u4E13\u4E1A", "\u804C\u4E1A"]
    }));
    const keyword = ref(route.query.keyword);
    const {
      pagination: schoolPagination,
      onPageChange: schoolPageChange,
      onPageSizeChange: schoolPageSizeChange
    } = usePagination(() => {
      window.scrollTo(0, 0);
      schoolRefresh();
    });
    const {
      pagination: majorPagination,
      onPageChange: majorPageChange,
      onPageSizeChange: majorPageSizeChange
    } = usePagination(() => {
      window.scrollTo(0, 0);
      majorRefresh();
    });
    const {
      pagination: jobPagination,
      onPageChange: jobPageChange,
      onPageSizeChange: jobPageSizeChange
    } = usePagination(() => {
      window.scrollTo(0, 0);
      jobRefresh();
    });
    const setHightLightStr = (text) => {
      let hightLightStr = `<span class="text-[#FFA864]">$&</span>`;
      let reg = new RegExp(route.query.keyword, "gi");
      return text.replace(reg, hightLightStr);
    };
    const { data: synthesisData, status: synthesisStatus } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "synthesisData",
      async () => {
        var _a2, _b2, _c2;
        var _a, _b, _c, _d, _e, _f;
        const [err, res] = await $zsFetch(API_URLS.PUBLIC.QUERY_SYNTHESIS_LIST_BY_NAME, {
          body: {
            name: keyword.value,
            sf: userInfo.value.province
          }
        });
        return {
          ...res.data,
          schoolList: (_a2 = (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.schoolList) == null ? void 0 : _b.map((o) => {
            return {
              ...o,
              highlightYxmc: o.yxmc
            };
          })) != null ? _a2 : [],
          majorList: (_b2 = (_d = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.majorList) == null ? void 0 : _d.map((o) => {
            return {
              ...o,
              highlightZymc: o.zymc
            };
          })) != null ? _b2 : [],
          jobList: (_c2 = (_f = (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.jobList) == null ? void 0 : _f.map((o) => {
            return {
              ...o,
              highlightJob: o.levelName
            };
          })) != null ? _c2 : []
        };
      },
      {
        watch: [keyword]
      }
    )), __temp = await __temp, __restore(), __temp);
    const {
      data: schoolData,
      status: schoolStatus,
      refresh: schoolRefresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "schoolList",
      async () => {
        var _a2, _b2;
        var _a, _b, _c;
        const [err, res] = await $zsFetch(API_URLS.PUBLIC.QUERY_SCHOOL_LIST_BY_NAME, {
          body: {
            name: keyword.value,
            currentPage: schoolPagination.value.current,
            pageSize: schoolPagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          list: (_a2 = (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) == null ? void 0 : _b.map((o) => {
            return {
              ...o,
              highlightYxmc: o.yxmc
            };
          })) != null ? _a2 : [],
          total: (_b2 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.totalCount) != null ? _b2 : 0
        };
      },
      {
        watch: [keyword]
      }
    )), __temp = await __temp, __restore(), __temp);
    const {
      data: majorData,
      status: majorStatus,
      refresh: majorRefresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "majorList",
      async () => {
        var _a2, _b2;
        var _a, _b, _c;
        const [err, res] = await $zsFetch(API_URLS.PUBLIC.QUERY_MAJOR_LIST_BY_NAME, {
          body: {
            name: keyword.value,
            sf: userInfo.value.province,
            currentPage: majorPagination.value.current,
            pageSize: majorPagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          list: (_a2 = (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) == null ? void 0 : _b.map((o) => {
            return {
              ...o,
              highlightZymc: o.zymc
            };
          })) != null ? _a2 : [],
          total: (_b2 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.totalCount) != null ? _b2 : 0
        };
      },
      {
        watch: [keyword]
      }
    )), __temp = await __temp, __restore(), __temp);
    const {
      data: jobData,
      status: jobStatus,
      refresh: jobRefresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "jobList",
      async () => {
        var _a2, _b2;
        var _a, _b, _c;
        const [err, res] = await $zsFetch(API_URLS.PUBLIC.QUERY_JOB_LIST_BY_NAME, {
          body: {
            name: keyword.value,
            currentPage: jobPagination.value.current,
            pageSize: jobPagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          list: (_a2 = (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) == null ? void 0 : _b.map((o) => {
            return {
              ...o,
              highlightJob: o.levelName
            };
          })) != null ? _a2 : [],
          total: (_b2 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.totalCount) != null ? _b2 : 0
        };
      },
      {
        watch: [keyword]
      }
    )), __temp = await __temp, __restore(), __temp);
    watch(
      () => route.query.keyword,
      async () => {
        keyword.value = route.query.keyword;
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_a_spin = Spin;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_zs_school_list_meta = _sfc_main$1;
      const _component_a_space = Space;
      const _component_zs_no_data = _sfc_main$2;
      const _component_zs_no_data_small = _sfc_main$3;
      const _component_a_pagination = Pagination;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[60vh]" }, _attrs))} data-v-120037b5>`);
      _push(ssrRenderComponent(_component_a_radio_group, {
        modelValue: unref(form).tabRadio,
        "onUpdate:modelValue": ($event) => unref(form).tabRadio = $event,
        class: "mt-[25px] bg-[#F9F9F9]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).tabRadioList, (tab) => {
              _push2(ssrRenderComponent(_component_a_radio, { value: tab }, {
                radio: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white rounded-[4px]": checked }, "text-center w-[100px] leading-[48px]"])}" data-v-120037b5${_scopeId2}>${ssrInterpolate(tab)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["text-center w-[100px] leading-[48px]", { "bg-[#7C92FF] text-white rounded-[4px]": checked }]
                      }, toDisplayString(tab), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).tabRadioList, (tab) => {
                return openBlock(), createBlock(_component_a_radio, {
                  key: tab,
                  value: tab
                }, {
                  radio: withCtx(({ checked }) => [
                    createVNode("div", {
                      class: ["text-center w-[100px] leading-[48px]", { "bg-[#7C92FF] text-white rounded-[4px]": checked }]
                    }, toDisplayString(tab), 3)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="h-[0.5px] border-b-[#7C92FF] mt-[2px] border" data-v-120037b5></div>`);
      if (unref(form).tabRadio === "\u7EFC\u5408") {
        _push(`<!--[-->`);
        if (unref(synthesisData).schoolList.length || unref(synthesisData).majorList.length || unref(synthesisData).jobList.length) {
          _push(`<div data-v-120037b5>`);
          _push(ssrRenderComponent(_component_a_spin, {
            loading: unref(synthesisStatus) === "pending"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(synthesisData).schoolList.length) {
                  _push2(`<!--[--><div class="flex items-center m-[20px_0px_10px]" data-v-120037b5${_scopeId}><div class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]" data-v-120037b5${_scopeId}></div><div class="ml-[10px] text-[18px] text-[#333] font-bold" data-v-120037b5${_scopeId}> \u9662\u6821 <span class="text-[14px] text-[#999999]" data-v-120037b5${_scopeId}>\u5171\u8BA1${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(synthesisData).schoolCount) + "\u6240")}</span></div></div>`);
                  _push2(ssrRenderComponent(_component_a_list, { bordered: false }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<!--[-->`);
                        ssrRenderList(unref(synthesisData).schoolList, (school) => {
                          _push3(ssrRenderComponent(_component_a_list_item, {
                            key: school.id
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`<div data-v-120037b5${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_zs_school_list_meta, { school }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                                  }, [
                                    createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                                  ], 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(synthesisData).schoolList, (school) => {
                            return openBlock(), createBlock(_component_a_list_item, {
                              key: school.id
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                                }, [
                                  createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                                ], 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`<div class="text-[#FFA864] mt-[20px] text-center cursor-pointer" data-v-120037b5${_scopeId}> \u67E5\u770B\u5168\u90E8\u9662\u6821<i class="iconfont icon-jiantou ml-[5px]" data-v-120037b5${_scopeId}></i></div><!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(synthesisData).majorList.length) {
                  _push2(`<!--[--><div class="flex items-center m-[20px_0px_10px]" data-v-120037b5${_scopeId}><div class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]" data-v-120037b5${_scopeId}></div><div class="ml-[10px] text-[18px] text-[#333] font-bold" data-v-120037b5${_scopeId}> \u4E13\u4E1A <span class="text-[14px] text-[#999999]" data-v-120037b5${_scopeId}>\u5171\u8BA1${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(synthesisData).majorCount) + "\u4E2A")}</span></div></div>`);
                  _push2(ssrRenderComponent(_component_a_list, { bordered: false }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<!--[-->`);
                        ssrRenderList(unref(synthesisData).majorList, (major) => {
                          _push3(ssrRenderComponent(_component_a_list_item, {
                            key: major.id,
                            class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`)
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`<div class="text-[20px] text-[#333333] mb-[10px] font-bold" data-v-120037b5${_scopeId3}>${setHightLightStr(major.highlightZymc)}</div>`);
                                _push4(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<span class="text-[14px] text-[#333333]" data-v-120037b5${_scopeId4}>${ssrInterpolate(major.xkml)}/${ssrInterpolate(major.zyl)}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(`<div class="mt-[10px]" data-v-120037b5${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId4}> \u4E13\u4E1A\u4EE3\u7801\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId4}> \u4FEE\u4E1A\u5E74\u9650\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId4}> \u6388\u4E88\u5B66\u4F4D\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId4}> \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId4}> \u62DB\u751F\u9662\u6821\u6570\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum)))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId4}> \u7537\u5973\u6BD4\u4F8B\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId4}> \u5E73\u5747\u85AA\u916C\uFF1A<span class="text-price" data-v-120037b5${_scopeId4}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz)))}</span></span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u62DB\u751F\u9662\u6821\u6570\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum))), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                          createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                          createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                                    innerHTML: setHightLightStr(major.highlightZymc)
                                  }, null, 8, ["innerHTML"]),
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode("div", { class: "mt-[10px]" }, [
                                    createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                      default: withCtx(() => [
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u62DB\u751F\u9662\u6821\u6570\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum))), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                        createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                          createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                          createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(synthesisData).majorList, (major) => {
                            return openBlock(), createBlock(_component_a_list_item, {
                              key: major.id,
                              class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`)
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                                  innerHTML: setHightLightStr(major.highlightZymc)
                                }, null, 8, ["innerHTML"]),
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                  ]),
                                  _: 2
                                }, 1024),
                                createVNode("div", { class: "mt-[10px]" }, [
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u62DB\u751F\u9662\u6821\u6570\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum))), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                      createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                        createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                        createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`<div class="text-[#FFA864] mt-[20px] text-center cursor-pointer" data-v-120037b5${_scopeId}> \u67E5\u770B\u5168\u90E8\u4E13\u4E1A<i class="iconfont icon-jiantou ml-[5px]" data-v-120037b5${_scopeId}></i></div><!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
                if (unref(synthesisData).jobList.length) {
                  _push2(`<!--[--><div class="flex items-center m-[20px_0px_10px]" data-v-120037b5${_scopeId}><div class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]" data-v-120037b5${_scopeId}></div><div class="ml-[10px] text-[18px] text-[#333] font-bold" data-v-120037b5${_scopeId}> \u804C\u4E1A <span class="text-[14px] text-[#999999]" data-v-120037b5${_scopeId}>\u5171\u8BA1${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(synthesisData).jobCount) + "\u4E2A")}</span></div></div>`);
                  _push2(ssrRenderComponent(_component_a_list, { bordered: false }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<!--[-->`);
                        ssrRenderList(unref(synthesisData).jobList, (job) => {
                          _push3(ssrRenderComponent(_component_a_list_item, {
                            key: job.id,
                            class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/jobLibrary/${job.id}`)
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              if (_push4) {
                                _push4(`<div class="text-[20px] text-[#333333] mb-[10px] font-bold" data-v-120037b5${_scopeId3}>${setHightLightStr(job.highlightJob)}</div>`);
                                _push4(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<span class="text-[14px] text-[#333333]" data-v-120037b5${_scopeId4}>${ssrInterpolate(job.level1Name)}/${ssrInterpolate(job.level2Name)}/${ssrInterpolate(job.level3Name)}</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(job.level1Name) + "/" + toDisplayString(job.level2Name) + "/" + toDisplayString(job.level3Name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                return [
                                  createVNode("div", {
                                    class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                                    innerHTML: setHightLightStr(job.highlightJob)
                                  }, null, 8, ["innerHTML"]),
                                  createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                    default: withCtx(() => [
                                      createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(job.level1Name) + "/" + toDisplayString(job.level2Name) + "/" + toDisplayString(job.level3Name), 1)
                                    ]),
                                    _: 2
                                  }, 1024)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(synthesisData).jobList, (job) => {
                            return openBlock(), createBlock(_component_a_list_item, {
                              key: job.id,
                              class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                              onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/jobLibrary/${job.id}`)
                            }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                                  innerHTML: setHightLightStr(job.highlightJob)
                                }, null, 8, ["innerHTML"]),
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(job.level1Name) + "/" + toDisplayString(job.level2Name) + "/" + toDisplayString(job.level3Name), 1)
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["onClick"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`<div class="text-[#FFA864] mt-[20px] text-center cursor-pointer" data-v-120037b5${_scopeId}> \u67E5\u770B\u5168\u90E8\u804C\u4E1A<i class="iconfont icon-jiantou ml-[5px]" data-v-120037b5${_scopeId}></i></div><!--]-->`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  unref(synthesisData).schoolList.length ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                    createVNode("div", { class: "flex items-center m-[20px_0px_10px]" }, [
                      createVNode("div", { class: "rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]" }),
                      createVNode("div", { class: "ml-[10px] text-[18px] text-[#333] font-bold" }, [
                        createTextVNode(" \u9662\u6821 "),
                        createVNode("span", { class: "text-[14px] text-[#999999]" }, "\u5171\u8BA1" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(synthesisData).schoolCount) + "\u6240"), 1)
                      ])
                    ]),
                    createVNode(_component_a_list, { bordered: false }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(synthesisData).schoolList, (school) => {
                          return openBlock(), createBlock(_component_a_list_item, {
                            key: school.id
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                              }, [
                                createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode("div", {
                      class: "text-[#FFA864] mt-[20px] text-center cursor-pointer",
                      onClick: ($event) => unref(form).tabRadio = "\u9662\u6821"
                    }, [
                      createTextVNode(" \u67E5\u770B\u5168\u90E8\u9662\u6821"),
                      createVNode("i", { class: "iconfont icon-jiantou ml-[5px]" })
                    ], 8, ["onClick"])
                  ], 64)) : createCommentVNode("", true),
                  unref(synthesisData).majorList.length ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                    createVNode("div", { class: "flex items-center m-[20px_0px_10px]" }, [
                      createVNode("div", { class: "rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]" }),
                      createVNode("div", { class: "ml-[10px] text-[18px] text-[#333] font-bold" }, [
                        createTextVNode(" \u4E13\u4E1A "),
                        createVNode("span", { class: "text-[14px] text-[#999999]" }, "\u5171\u8BA1" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(synthesisData).majorCount) + "\u4E2A"), 1)
                      ])
                    ]),
                    createVNode(_component_a_list, { bordered: false }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(synthesisData).majorList, (major) => {
                          return openBlock(), createBlock(_component_a_list_item, {
                            key: major.id,
                            class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`)
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                                innerHTML: setHightLightStr(major.highlightZymc)
                              }, null, 8, ["innerHTML"]),
                              createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                                ]),
                                _: 2
                              }, 1024),
                              createVNode("div", { class: "mt-[10px]" }, [
                                createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                  default: withCtx(() => [
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u62DB\u751F\u9662\u6821\u6570\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum))), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                    createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                      createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                      createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                    ])
                                  ]),
                                  _: 2
                                }, 1024)
                              ])
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode("div", {
                      class: "text-[#FFA864] mt-[20px] text-center cursor-pointer",
                      onClick: ($event) => unref(form).tabRadio = "\u4E13\u4E1A"
                    }, [
                      createTextVNode(" \u67E5\u770B\u5168\u90E8\u4E13\u4E1A"),
                      createVNode("i", { class: "iconfont icon-jiantou ml-[5px]" })
                    ], 8, ["onClick"])
                  ], 64)) : createCommentVNode("", true),
                  unref(synthesisData).jobList.length ? (openBlock(), createBlock(Fragment, { key: 2 }, [
                    createVNode("div", { class: "flex items-center m-[20px_0px_10px]" }, [
                      createVNode("div", { class: "rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]" }),
                      createVNode("div", { class: "ml-[10px] text-[18px] text-[#333] font-bold" }, [
                        createTextVNode(" \u804C\u4E1A "),
                        createVNode("span", { class: "text-[14px] text-[#999999]" }, "\u5171\u8BA1" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(synthesisData).jobCount) + "\u4E2A"), 1)
                      ])
                    ]),
                    createVNode(_component_a_list, { bordered: false }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(synthesisData).jobList, (job) => {
                          return openBlock(), createBlock(_component_a_list_item, {
                            key: job.id,
                            class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/jobLibrary/${job.id}`)
                          }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                                innerHTML: setHightLightStr(job.highlightJob)
                              }, null, 8, ["innerHTML"]),
                              createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                                default: withCtx(() => [
                                  createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(job.level1Name) + "/" + toDisplayString(job.level2Name) + "/" + toDisplayString(job.level3Name), 1)
                                ]),
                                _: 2
                              }, 1024)
                            ]),
                            _: 2
                          }, 1032, ["onClick"]);
                        }), 128))
                      ]),
                      _: 1
                    }),
                    createVNode("div", {
                      class: "text-[#FFA864] mt-[20px] text-center cursor-pointer",
                      onClick: ($event) => unref(form).tabRadio = "\u804C\u4E1A"
                    }, [
                      createTextVNode(" \u67E5\u770B\u5168\u90E8\u804C\u4E1A"),
                      createVNode("i", { class: "iconfont icon-jiantou ml-[5px]" })
                    ], 8, ["onClick"])
                  ], 64)) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(ssrRenderComponent(_component_zs_no_data, null, null, _parent));
        }
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).tabRadio === "\u9662\u6821") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_a_list, {
          class: "mt-[20px]",
          bordered: false,
          loading: unref(schoolStatus) === "pending"
        }, {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_zs_no_data_small)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(unref(schoolData).list, (school) => {
                _push2(ssrRenderComponent(_component_a_list_item, {
                  key: school.id
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div data-v-120037b5${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_zs_school_list_meta, { school }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                        }, [
                          createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                        ], 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(schoolData).list, (school) => {
                  return openBlock(), createBlock(_component_a_list_item, {
                    key: school.id
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`)
                      }, [
                        createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                      ], 8, ["onClick"])
                    ]),
                    _: 2
                  }, 1024);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_a_pagination, {
          class: "justify-end mt-[20px]",
          total: unref(schoolData).total,
          current: unref(schoolPagination).current,
          "page-size": unref(schoolPagination).pageSize,
          onChange: unref(schoolPageChange),
          onPageSizeChange: unref(schoolPageSizeChange),
          "show-total": "",
          "show-jumper": "",
          "show-page-size": ""
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).tabRadio === "\u4E13\u4E1A") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_a_list, {
          bordered: false,
          loading: unref(majorStatus) === "pending",
          class: "mt-[20px]"
        }, {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_zs_no_data_small)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList((_a = unref(majorData)) == null ? void 0 : _a.list, (major) => {
                _push2(ssrRenderComponent(_component_a_list_item, {
                  key: major.id,
                  class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-[20px] text-[#333333] mb-[10px] font-bold" data-v-120037b5${_scopeId2}>${setHightLightStr(major.highlightZymc)}</div>`);
                      _push3(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-[14px] text-[#333333]" data-v-120037b5${_scopeId3}>${ssrInterpolate(major.xkml)}/${ssrInterpolate(major.zyl)}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`<div class="mt-[10px]" data-v-120037b5${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId3}> \u4E13\u4E1A\u4EE3\u7801\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId3}> \u4FEE\u4E1A\u5E74\u9650\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId3}> \u6388\u4E88\u5B66\u4F4D\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId3}> \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId3}> \u62DB\u751F\u9662\u6821\u6570\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum)))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId3}> \u7537\u5973\u6BD4\u4F8B\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl))}</span><span class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-120037b5${_scopeId3}> \u5E73\u5747\u85AA\u916C\uFF1A<span class="text-price" data-v-120037b5${_scopeId3}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz)))}</span></span>`);
                          } else {
                            return [
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u62DB\u751F\u9662\u6821\u6570\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum))), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                          innerHTML: setHightLightStr(major.highlightZymc)
                        }, null, 8, ["innerHTML"]),
                        createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "mt-[10px]" }, [
                          createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                            default: withCtx(() => [
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u62DB\u751F\u9662\u6821\u6570\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum))), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                              createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                              ])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(majorData)) == null ? void 0 : _b.list, (major) => {
                  return openBlock(), createBlock(_component_a_list_item, {
                    key: major.id,
                    class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`)
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                        innerHTML: setHightLightStr(major.highlightZymc)
                      }, null, 8, ["innerHTML"]),
                      createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(major.xkml) + "/" + toDisplayString(major.zyl), 1)
                        ]),
                        _: 2
                      }, 1024),
                      createVNode("div", { class: "mt-[10px]" }, [
                        createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                            createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                            createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                            createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u5E74\u5EA6\u6BD5\u4E1A\u751F\u89C4\u6A21\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.graduateScale)), 1),
                            createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u62DB\u751F\u9662\u6821\u6570\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.yxsum))), 1),
                            createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                            createVNode("span", { class: "bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                              createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                              createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                            ])
                          ]),
                          _: 2
                        }, 1024)
                      ])
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_a_pagination, {
          class: "justify-end mt-[20px]",
          total: unref(majorData).total,
          current: unref(majorPagination).current,
          "page-size": unref(majorPagination).pageSize,
          onChange: unref(majorPageChange),
          onPageSizeChange: unref(majorPageSizeChange),
          "show-total": "",
          "show-jumper": "",
          "show-page-size": ""
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).tabRadio === "\u804C\u4E1A") {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_a_list, {
          bordered: false,
          loading: unref(jobStatus) === "pending",
          class: "mt-[20px]"
        }, {
          empty: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_zs_no_data_small)
              ];
            }
          }),
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            var _a, _b;
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList((_a = unref(jobData)) == null ? void 0 : _a.list, (job) => {
                _push2(ssrRenderComponent(_component_a_list_item, {
                  key: job.id,
                  class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/jobLibrary/${job.id}`)
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`<div class="text-[20px] text-[#333333] mb-[10px] font-bold" data-v-120037b5${_scopeId2}>${setHightLightStr(job.highlightJob)}</div>`);
                      _push3(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<span class="text-[14px] text-[#333333]" data-v-120037b5${_scopeId3}>${ssrInterpolate(job.level1Name)}/${ssrInterpolate(job.level2Name)}/${ssrInterpolate(job.level3Name)}</span>`);
                          } else {
                            return [
                              createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(job.level1Name) + "/" + toDisplayString(job.level2Name) + "/" + toDisplayString(job.level3Name), 1)
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode("div", {
                          class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                          innerHTML: setHightLightStr(job.highlightJob)
                        }, null, 8, ["innerHTML"]),
                        createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                          default: withCtx(() => [
                            createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(job.level1Name) + "/" + toDisplayString(job.level2Name) + "/" + toDisplayString(job.level3Name), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList((_b = unref(jobData)) == null ? void 0 : _b.list, (job) => {
                  return openBlock(), createBlock(_component_a_list_item, {
                    key: job.id,
                    class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px] cursor-pointer",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/jobLibrary/${job.id}`)
                  }, {
                    default: withCtx(() => [
                      createVNode("div", {
                        class: "text-[20px] text-[#333333] mb-[10px] font-bold",
                        innerHTML: setHightLightStr(job.highlightJob)
                      }, null, 8, ["innerHTML"]),
                      createVNode(_component_a_space, { class: "flex flex-wrap items-center" }, {
                        default: withCtx(() => [
                          createVNode("span", { class: "text-[14px] text-[#333333]" }, toDisplayString(job.level1Name) + "/" + toDisplayString(job.level2Name) + "/" + toDisplayString(job.level3Name), 1)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1032, ["onClick"]);
                }), 128))
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(ssrRenderComponent(_component_a_pagination, {
          class: "justify-end mt-[20px]",
          total: unref(jobData).total,
          current: unref(jobPagination).current,
          "page-size": unref(majorPagination).pageSize,
          onChange: unref(jobPageChange),
          onPageSizeChange: unref(jobPageSizeChange),
          "show-total": "",
          "show-jumper": "",
          "show-page-size": ""
        }, null, _parent));
        _push(`<!--]-->`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/search.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const search = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-120037b5"]]);

export { search as default };
//# sourceMappingURL=search-51841d96.mjs.map
