import { S as Space } from './index-8bcd588e.mjs';
import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { P as Popover } from './index-a533a6fc.mjs';
import { _ as __nuxt_component_16, a as _sfc_main$4, b as __nuxt_component_12, c as __nuxt_component_21 } from './index-03a048b2.mjs';
import { T as Tooltip } from './index-5f48af9c.mjs';
import { I as InputNumber } from './index-08fdf206.mjs';
import { _ as _sfc_main$1 } from './index-d6ea50b9.mjs';
import { S as Spin } from './index-11d38f35.mjs';
import { I as IconDown } from './index-dd449d78.mjs';
import { u as useHead, g as useRoute, e as useAsyncData, A as API_URLS, n as navigateTo, f as useNuxtApp } from '../server.mjs';
import { defineComponent, ref, computed, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { u as useLoading } from './useLoading-35bd0ba7.mjs';
import { u as useBasicsState } from './useBasicsState-8a7a18a4.mjs';
import { u as useForm, a as useModal } from './useArco-b2247a5c.mjs';
import { g as groupByAndMergeChildArrays, t as textFormat, d as downloadBlob } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import 'vue-draggable-plus';
import './options-7ec13930.mjs';
import './_plugin-vue_export-helper-cc2b3d55.mjs';
import './index-3959f291.mjs';
import './index-6a06d329.mjs';
import './index-90aba227.mjs';
import './index-f6f6f2a5.mjs';
import 'resize-observer-polyfill';
import './index-63900e07.mjs';
import './get-value-by-path-11166a95.mjs';
import './use-children-components-d7e0e48f.mjs';
import './index-cb5bd3b8.mjs';
import './index-3e511c39.mjs';
import './usePagination-23ca46d2.mjs';
import 'number-precision';
import './NuxtImg-9bcbe2bb.mjs';
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
  __name: "detail",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "\u67E5\u770B\u5FD7\u613F\u8868"
    });
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { setGlobalLoading } = useLoading();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const route = useRoute();
    const { warningModal } = useModal();
    const { form } = useForm(() => ({
      selectRow: {},
      // 当前数据
      widErr: false,
      // 防止用户修改志愿id
      curWishInfo: {}
    }));
    const wid = ref(route.query.wid);
    const smallestMissingNumber = computed(() => {
      var _a2, _b2;
      var _a, _b, _c;
      const list = volunteerInfo.value.isSchoolGroup === "1" ? (_a2 = (_b = (_a = filledInData.value) == null ? void 0 : _a.list) == null ? void 0 : _b.map((o) => o.zySeq)) != null ? _a2 : [] : (_b2 = (_c = form.value.curWishInfo.children) == null ? void 0 : _c.map((o) => o)) != null ? _b2 : [];
      let sortedNumbers = [...list].sort((a, b) => a - b);
      let smallestMissing = 1;
      for (let i = 0; i < sortedNumbers.length; i++) {
        if (sortedNumbers[i] !== smallestMissing) {
          return smallestMissing;
        }
        smallestMissing++;
      }
      return smallestMissing;
    });
    const exportFile = async () => {
      warningModal(`\u786E\u5B9A\u5BFC\u51FA\u5FD7\u613F\u8868\u5417`, async (done) => {
        setGlobalLoading(true);
        done(true);
        const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_EXCEL, {
          body: {
            id: volunteerInfo.value.id
            // 志愿表id
          },
          responseType: "blob"
        });
        if (res) {
          setGlobalLoading(false);
          downloadBlob(res, `${volunteerInfo.value.zybt}.xlsx`);
        }
      });
    };
    const openFile = async () => {
      warningModal(`\u786E\u5B9A\u5BFC\u51FA\u5FD7\u613F\u8868\u5417`, async (done) => {
        setGlobalLoading(true);
        done(true);
        const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_PDF, {
          body: {
            id: volunteerInfo.value.id
            // 志愿表id
          }
        });
        if (res) {
          setGlobalLoading(false);
          window.open(res.data, "_blank");
        }
      });
    };
    const clickWish = (record) => {
      setSelectRow(record);
      if (!record.isInput) {
        record.isInput = true;
      }
    };
    const inputFinish = async (record) => {
      record.isInput = false;
      await wishInputSort();
      volunteerData.value.list = [];
      await volunteerRefresh();
      $zsMsg("success", "\u987A\u5E8F\u8C03\u6574\u6210\u529F!");
      setSelectRow(null);
    };
    const deleteWish = async (row) => {
      warningModal(`\u786E\u5B9A\u5220\u9664\u5F53\u524D\u5FD7\u613F\u5417`, async (done) => {
        const [err, res] = await $zsFetch(API_URLS.CHOICE.DELETE_WISH_BY_ID, {
          body: {
            // 删院校下专业只传id,删院校时不传id传其他值
            id: row.yxSeq ? "" : row.id,
            // 当前列id
            wid: row.yxSeq ? volunteerInfo.value.id : "",
            // 志愿表id
            yxmc: row.yxSeq ? row.yxmc : ""
          }
        });
        done(true);
        if (res) {
          volunteerData.value.list = [];
          await volunteerRefresh();
          $zsMsg("success", res.data);
        }
      });
    };
    const wishInputSort = async () => {
      var _a, _b;
      let params = {};
      if (volunteerInfo.value.isSchoolGroup === "1") {
        params = {
          id: form.value.selectRow.id,
          // 改变当前的id
          zySeq: form.value.selectRow.zySeq,
          // 改变当前的志愿
          wid: (_a = volunteerInfo.value) == null ? void 0 : _a.id
          // 志愿表id
        };
      } else {
        params = {
          yxmc: form.value.selectRow.yxmc,
          yxSeq: form.value.selectRow.yxSeq,
          wid: (_b = volunteerInfo.value) == null ? void 0 : _b.id,
          // 志愿表id
          zySeq: form.value.selectRow.zySeq,
          id: form.value.selectRow.id
        };
      }
      const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_INPUT_SORT, {
        body: params
      });
      if (err)
        return;
    };
    const fillVolunteer = async (row, wishSort) => {
      var _a;
      const [err, res] = await $zsFetch(API_URLS.CHOICE.MAJOR_ADD_VOLUNTEER, {
        body: {
          id: row.id,
          wishId: (_a = volunteerInfo.value) == null ? void 0 : _a.id,
          wishSort
        }
      });
      $zsMsg("success", res.data);
    };
    const cancelVolunteer = async (row) => {
      await fillVolunteer(row, row.wSort);
      row.wSort = "";
      filledInRefresh();
      volunteerData.value.list = [];
      volunteerRefresh();
    };
    const addVolunteer = async (row) => {
      var _a2;
      var _a, _b, _c, _d, _e, _f;
      if (volunteerInfo.value.isSchoolGroup === "1") {
        if (smallestMissingNumber.value > ((_a = volunteerInfo.value) == null ? void 0 : _a.zyTop)) {
          $zsMsg("waring", "\u8D85\u8FC7\u4E13\u4E1A\u586B\u62A5\u6570\u91CF");
          return;
        }
      } else {
        form.value.curWishInfo = (_a2 = (_b = filledInData.value) == null ? void 0 : _b.specialList.find((o) => o.yxmc === row.yxmc)) != null ? _a2 : {};
        if (smallestMissingNumber.value > ((_c = volunteerInfo.value) == null ? void 0 : _c.zyTop)) {
          $zsMsg("waring", "\u8D85\u8FC7\u4E13\u4E1A\u586B\u62A5\u6570\u91CF");
          return;
        }
        if (((_e = (_d = filledInData.value) == null ? void 0 : _d.specialList) == null ? void 0 : _e.length) > ((_f = volunteerInfo.value) == null ? void 0 : _f.yxTop)) {
          $zsMsg("waring", "\u8D85\u8FC7\u9662\u6821\u586B\u62A5\u6570\u91CF");
          return;
        }
      }
      await fillVolunteer(row, smallestMissingNumber.value);
      row.wSort = smallestMissingNumber.value;
      filledInRefresh();
      volunteerData.value.list = [];
      volunteerRefresh();
    };
    const setSelectRow = (row, callBack) => {
      form.value.selectRow = row;
      if (callBack)
        callBack();
    };
    const { data: volunteerInfo, refresh: volunteerInfoRefresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "volunteerInfo",
      async () => {
        var _a2;
        var _a;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_VOLUNTEER_INFO, {
          body: {
            id: (_a2 = wid.value) != null ? _a2 : ""
            // 志愿表id
          }
        });
        let result = {};
        if (res.data === "\u672A\u77E5\u5FD7\u613F") {
          result.error = true;
        } else {
          result = { ...res == null ? void 0 : res.data, zyTop: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.zyTop) * 1 };
        }
        return result;
      },
      {
        default: () => {
        },
        watch: [wid]
      }
    )), __temp = await __temp, __restore(), __temp);
    const { data: filledInData, refresh: filledInRefresh } = useAsyncData(
      "filledIn",
      async () => {
        var _a2, _b;
        var _a;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
          body: {
            id: volunteerInfo.value.id
            // 志愿表id
          }
        });
        const specialList = volunteerInfo.value.isSchoolGroup === "1" ? res == null ? void 0 : res.data : groupByAndMergeChildArrays(res == null ? void 0 : res.data, "yxmc", "children", "zySeq");
        return {
          list: (_a2 = res.data) != null ? _a2 : [],
          specialList: specialList != null ? specialList : [],
          total: (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.length) != null ? _b : 0
        };
      },
      {
        default: () => {
        }
      }
    );
    const {
      data: volunteerData,
      status: volunteerStatus,
      refresh: volunteerRefresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "volunteerDetailList",
      async () => {
        var _a2, _b2;
        var _a, _b, _c, _d;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
          body: {
            id: (_a = volunteerInfo.value) == null ? void 0 : _a.id,
            // 志愿表id
            pagingOrNot: 1
          }
        });
        return {
          list: (_a2 = (_c = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.list) == null ? void 0 : _c.map((item) => {
            return {
              ...item,
              isInput: false
            };
          })) != null ? _a2 : [],
          year: (_b2 = (_d = res == null ? void 0 : res.data) == null ? void 0 : _d.year) != null ? _b2 : 2024
        };
      },
      {
        default: () => ({
          list: [],
          year: 2024
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e;
      const _component_a_space = Space;
      const _component_a_button = Button;
      const _component_a_popover = Popover;
      const _component_zs_choice_major_table = __nuxt_component_16;
      const _component_a_tooltip = Tooltip;
      const _component_icon_down = IconDown;
      const _component_a_input_number = InputNumber;
      const _component_zs_no_data = _sfc_main$1;
      const _component_a_spin = Spin;
      const _component_zs_draggable_list = _sfc_main$4;
      const _component_zs_choice_professional_group_item = __nuxt_component_12;
      const _component_zs_choice_eligible_major_modal = __nuxt_component_21;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[60vh]" }, _attrs))}>`);
      if (!unref(volunteerInfo).error) {
        _push(`<!--[--><div class="flex items-center justify-between"><div class="mt-[20px]"><div class="text-[18px] font-bold">${ssrInterpolate((_a = unref(volunteerInfo)) == null ? void 0 : _a.zybt)}</div><div class="mt-[10px] text-[14px] text-[#999]"><span>\u6210\u7EE9 ${ssrInterpolate((_b = unref(volunteerInfo)) == null ? void 0 : _b.xk)} ${ssrInterpolate(((_c = unref(volunteerInfo)) == null ? void 0 : _c.score) + "\u5206")} ${ssrInterpolate(((_d = unref(volunteerInfo)) == null ? void 0 : _d.wc) + "\u4F4D")}</span><span class="ml-[10px]">\u6279\u6B21\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_e = unref(volunteerInfo)) == null ? void 0 : _e.pc))}</span></div></div><div>`);
        _push(ssrRenderComponent(_component_a_space, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_a_button, {
                type: "primary",
                size: "large",
                class: "w-[90px]",
                onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice?wid=${unref(volunteerInfo).id}`)
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(` \u7EE7\u7EED\u586B\u62A5 `);
                  } else {
                    return [
                      createTextVNode(" \u7EE7\u7EED\u586B\u62A5 ")
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
              _push2(ssrRenderComponent(_component_a_popover, {
                trigger: "hover",
                position: "bottom"
              }, {
                content: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"${_scopeId2}> \u5BFC\u51FAExcel(\u8868\u683C\u7248) </div><div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"${_scopeId2}> \u5BFC\u51FAPdf(\u6253\u5370\u7248) </div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                        onClick: exportFile
                      }, " \u5BFC\u51FAExcel(\u8868\u683C\u7248) "),
                      createVNode("div", {
                        class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                        onClick: openFile
                      }, " \u5BFC\u51FAPdf(\u6253\u5370\u7248) ")
                    ];
                  }
                }),
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer"${_scopeId2}><i class="iconfont icon-shangchuan fontSize mr-[3px]"${_scopeId2}></i>\u5BFC\u51FA </div>`);
                  } else {
                    return [
                      createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                        createVNode("i", { class: "iconfont icon-shangchuan fontSize mr-[3px]" }),
                        createTextVNode("\u5BFC\u51FA ")
                      ])
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              return [
                createVNode(_component_a_button, {
                  type: "primary",
                  size: "large",
                  class: "w-[90px]",
                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice?wid=${unref(volunteerInfo).id}`)
                }, {
                  default: withCtx(() => [
                    createTextVNode(" \u7EE7\u7EED\u586B\u62A5 ")
                  ]),
                  _: 1
                }, 8, ["onClick"]),
                createVNode(_component_a_popover, {
                  trigger: "hover",
                  position: "bottom"
                }, {
                  content: withCtx(() => [
                    createVNode("div", {
                      class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                      onClick: exportFile
                    }, " \u5BFC\u51FAExcel(\u8868\u683C\u7248) "),
                    createVNode("div", {
                      class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                      onClick: openFile
                    }, " \u5BFC\u51FAPdf(\u6253\u5370\u7248) ")
                  ]),
                  default: withCtx(() => [
                    createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                      createVNode("i", { class: "iconfont icon-shangchuan fontSize mr-[3px]" }),
                      createTextVNode("\u5BFC\u51FA ")
                    ])
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
        if (unref(volunteerInfo).isSchoolGroup === "1") {
          _push(ssrRenderComponent(_component_zs_choice_major_table, {
            class: "mt-[30px]",
            data: { list: unref(volunteerData).list, year: unref(volunteerData).year },
            loading: unref(volunteerStatus) === "pending"
          }, {
            operateTitle: withCtx(({ record }, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="font-bold"${_scopeId}>\u64CD\u4F5C</div>`);
              } else {
                return [
                  createVNode("div", { class: "font-bold" }, "\u64CD\u4F5C")
                ];
              }
            }),
            operate: withCtx(({ record }, _push2, _parent2, _scopeId) => {
              var _a2, _b2;
              if (_push2) {
                _push2(`<div${_scopeId}>`);
                if (!record.isInput) {
                  _push2(ssrRenderComponent(_component_a_tooltip, { content: "\u8F93\u5165\u5E8F\u53F7" }, {
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto"${_scopeId2}> \u5FD7\u613F ${ssrInterpolate(record.zySeq)} `);
                        _push3(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                            createTextVNode(" \u5FD7\u613F " + toDisplayString(record.zySeq) + " ", 1),
                            createVNode(_component_icon_down, { class: "ml-[4px]" })
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_a_input_number, {
                    style: { width: "90px" },
                    precision: 0,
                    min: 0,
                    max: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.zyTop,
                    "hide-button": "",
                    onBlur: ($event) => record.isInput = false,
                    onChange: ($event) => inputFinish(record),
                    modelValue: record.zySeq,
                    "onUpdate:modelValue": ($event) => record.zySeq = $event,
                    modelModifiers: { trim: true }
                  }, null, _parent2, _scopeId));
                  _push2(`</div>`);
                }
                _push2(`</div>`);
                _push2(ssrRenderComponent(_component_a_space, { size: "large" }, {
                  default: withCtx((_, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(ssrRenderComponent(_component_a_tooltip, { content: "\u5220\u9664" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div${_scopeId3}><i class="iconfont icon-shanchu text-[#7C92FF]"${_scopeId3}></i></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                onClick: ($event) => deleteWish(record)
                              }, [
                                createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(ssrRenderComponent(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div${_scopeId3}><i class="iconfont icon-zengjia text-[#7C92FF]"${_scopeId3}></i></div>`);
                          } else {
                            return [
                              createVNode("div", {
                                onClick: ($event) => {
                                  var _a3;
                                  return setSelectRow(
                                    {
                                      yxid: record.yxid,
                                      yxmc: record.yxmc,
                                      yxdm: record.yxdm,
                                      wid: (_a3 = unref(volunteerInfo)) == null ? void 0 : _a3.id
                                    },
                                    () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                                  );
                                }
                              }, [
                                createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                              ], 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    } else {
                      return [
                        createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              onClick: ($event) => deleteWish(record)
                            }, [
                              createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                            ], 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                          default: withCtx(() => [
                            createVNode("div", {
                              onClick: ($event) => {
                                var _a3;
                                return setSelectRow(
                                  {
                                    yxid: record.yxid,
                                    yxmc: record.yxmc,
                                    yxdm: record.yxdm,
                                    wid: (_a3 = unref(volunteerInfo)) == null ? void 0 : _a3.id
                                  },
                                  () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                                );
                              }
                            }, [
                              createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                            ], 8, ["onClick"])
                          ]),
                          _: 2
                        }, 1024)
                      ];
                    }
                  }),
                  _: 2
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode("div", {
                    onClick: ($event) => clickWish(record)
                  }, [
                    !record.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                      key: 0,
                      content: "\u8F93\u5165\u5E8F\u53F7"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                          createTextVNode(" \u5FD7\u613F " + toDisplayString(record.zySeq) + " ", 1),
                          createVNode(_component_icon_down, { class: "ml-[4px]" })
                        ])
                      ]),
                      _: 2
                    }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                      createVNode(_component_a_input_number, {
                        style: { width: "90px" },
                        precision: 0,
                        min: 0,
                        max: (_b2 = unref(volunteerInfo)) == null ? void 0 : _b2.zyTop,
                        "hide-button": "",
                        onBlur: ($event) => record.isInput = false,
                        onChange: ($event) => inputFinish(record),
                        modelValue: record.zySeq,
                        "onUpdate:modelValue": ($event) => record.zySeq = $event,
                        modelModifiers: { trim: true }
                      }, null, 8, ["max", "onBlur", "onChange", "modelValue", "onUpdate:modelValue"])
                    ]))
                  ], 8, ["onClick"]),
                  createVNode(_component_a_space, { size: "large" }, {
                    default: withCtx(() => [
                      createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            onClick: ($event) => deleteWish(record)
                          }, [
                            createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                          ], 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024),
                      createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                        default: withCtx(() => [
                          createVNode("div", {
                            onClick: ($event) => {
                              var _a3;
                              return setSelectRow(
                                {
                                  yxid: record.yxid,
                                  yxmc: record.yxmc,
                                  yxdm: record.yxdm,
                                  wid: (_a3 = unref(volunteerInfo)) == null ? void 0 : _a3.id
                                },
                                () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                              );
                            }
                          }, [
                            createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                          ], 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    _: 2
                  }, 1024)
                ];
              }
            }),
            empty: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(` \u6682\u65E0\u5FD7\u613F `);
                    } else {
                      return [
                        createTextVNode(" \u6682\u65E0\u5FD7\u613F ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                    default: withCtx(() => [
                      createTextVNode(" \u6682\u65E0\u5FD7\u613F ")
                    ]),
                    _: 1
                  }, 8, ["url"])
                ];
              }
            }),
            _: 1
          }, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(volunteerInfo).isSchoolGroup === "2") {
          _push(`<div class="mt-[30px]"><div class="bg-[#F9F9F9] text-[#333] text-[14px] flex items-center !leading-[48px] font-bold text-center"><div class="w-[70px]">\u6982\u7387</div><div class="flex-1">\u62DB\u751F\u9662\u6821</div><div class="w-[100px]">${ssrInterpolate(unref(volunteerData).year)}\u8BA1\u5212</div><div class="w-[70px]"></div><div class="w-[80px]">${ssrInterpolate(unref(volunteerData).year)}\u5E74\u4EFD</div><div class="w-[80px]">${ssrInterpolate(unref(volunteerData).year - 1)}\u5E74\u4EFD</div><div class="w-[80px]">${ssrInterpolate(unref(volunteerData).year - 2)}\u5E74\u4EFD</div><div class="w-[150px]">\u64CD\u4F5C</div></div>`);
          _push(ssrRenderComponent(_component_a_spin, {
            loading: unref(volunteerStatus) === "pending",
            class: "w-full min-h-[60vh] !leading-[25px]"
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                if (unref(volunteerData).list.length) {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_zs_draggable_list, {
                    "default-list": unref(volunteerData).list,
                    "item-class": "bg-[#F9F9F9] ",
                    isDraggable: false
                  }, {
                    row: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="border-b border-solid border-[#EDEDED]"${_scopeId2}>`);
                        _push3(ssrRenderComponent(_component_zs_choice_professional_group_item, { data: record }, {
                          operate: withCtx((_2, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(`<div class="mx-auto flex flex-col w-[90px]"${_scopeId3}><div${_scopeId3}>`);
                              if (!record.isInput) {
                                _push4(ssrRenderComponent(_component_a_tooltip, { content: "\u8F93\u5165\u5E8F\u53F7" }, {
                                  default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<div class="border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto"${_scopeId4}> \u9662\u6821 ${ssrInterpolate(record.yxSeq)} `);
                                      _push5(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent5, _scopeId4));
                                      _push5(`</div>`);
                                    } else {
                                      return [
                                        createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                          createTextVNode(" \u9662\u6821 " + toDisplayString(record.yxSeq) + " ", 1),
                                          createVNode(_component_icon_down, { class: "ml-[4px]" })
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                              } else {
                                _push4(`<div${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_a_input_number, {
                                  style: { width: "90px" },
                                  precision: 0,
                                  min: 0,
                                  max: unref(volunteerInfo).zyTop,
                                  "hide-button": "",
                                  onBlur: ($event) => record.isInput = false,
                                  onChange: ($event) => inputFinish(record),
                                  modelValue: record.yxSeq,
                                  "onUpdate:modelValue": ($event) => record.yxSeq = $event,
                                  modelModifiers: { trim: true }
                                }, null, _parent4, _scopeId3));
                                _push4(`</div>`);
                              }
                              _push4(`</div><div class="flex items-center justify-around"${_scopeId3}>`);
                              _push4(ssrRenderComponent(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div${_scopeId4}><i class="iconfont icon-shanchu text-[#7C92FF]"${_scopeId4}></i></div>`);
                                  } else {
                                    return [
                                      createVNode("div", {
                                        onClick: ($event) => deleteWish(record)
                                      }, [
                                        createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                      ], 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(ssrRenderComponent(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div${_scopeId4}><i class="iconfont icon-zengjia text-[#7C92FF]"${_scopeId4}></i></div>`);
                                  } else {
                                    return [
                                      createVNode("div", {
                                        onClick: ($event) => {
                                          var _a2;
                                          return setSelectRow(
                                            {
                                              yxid: record.yxid,
                                              yxmc: record.yxmc,
                                              yxdm: record.yxdm,
                                              wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                            },
                                            () => unref(setActiveKey)(
                                              "ZsChoiceEligibleMajorModal"
                                            )
                                          );
                                        }
                                      }, [
                                        createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                      ], 8, ["onClick"])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                              _push4(`</div></div>`);
                            } else {
                              return [
                                createVNode("div", { class: "mx-auto flex flex-col w-[90px]" }, [
                                  createVNode("div", {
                                    onClick: ($event) => clickWish(record)
                                  }, [
                                    !record.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                                      key: 0,
                                      content: "\u8F93\u5165\u5E8F\u53F7"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                          createTextVNode(" \u9662\u6821 " + toDisplayString(record.yxSeq) + " ", 1),
                                          createVNode(_component_icon_down, { class: "ml-[4px]" })
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                                      createVNode(_component_a_input_number, {
                                        style: { width: "90px" },
                                        precision: 0,
                                        min: 0,
                                        max: unref(volunteerInfo).zyTop,
                                        "hide-button": "",
                                        onBlur: ($event) => record.isInput = false,
                                        onChange: ($event) => inputFinish(record),
                                        modelValue: record.yxSeq,
                                        "onUpdate:modelValue": ($event) => record.yxSeq = $event,
                                        modelModifiers: { trim: true }
                                      }, null, 8, ["max", "onBlur", "onChange", "modelValue", "onUpdate:modelValue"])
                                    ]))
                                  ], 8, ["onClick"]),
                                  createVNode("div", { class: "flex items-center justify-around" }, [
                                    createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          onClick: ($event) => deleteWish(record)
                                        }, [
                                          createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                        ], 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          onClick: ($event) => {
                                            var _a2;
                                            return setSelectRow(
                                              {
                                                yxid: record.yxid,
                                                yxmc: record.yxmc,
                                                yxdm: record.yxdm,
                                                wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                              },
                                              () => unref(setActiveKey)(
                                                "ZsChoiceEligibleMajorModal"
                                              )
                                            );
                                          }
                                        }, [
                                          createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                        ], 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-b border-solid border-[#EDEDED]" }, [
                            createVNode(_component_zs_choice_professional_group_item, { data: record }, {
                              operate: withCtx(() => [
                                createVNode("div", { class: "mx-auto flex flex-col w-[90px]" }, [
                                  createVNode("div", {
                                    onClick: ($event) => clickWish(record)
                                  }, [
                                    !record.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                                      key: 0,
                                      content: "\u8F93\u5165\u5E8F\u53F7"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                          createTextVNode(" \u9662\u6821 " + toDisplayString(record.yxSeq) + " ", 1),
                                          createVNode(_component_icon_down, { class: "ml-[4px]" })
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                                      createVNode(_component_a_input_number, {
                                        style: { width: "90px" },
                                        precision: 0,
                                        min: 0,
                                        max: unref(volunteerInfo).zyTop,
                                        "hide-button": "",
                                        onBlur: ($event) => record.isInput = false,
                                        onChange: ($event) => inputFinish(record),
                                        modelValue: record.yxSeq,
                                        "onUpdate:modelValue": ($event) => record.yxSeq = $event,
                                        modelModifiers: { trim: true }
                                      }, null, 8, ["max", "onBlur", "onChange", "modelValue", "onUpdate:modelValue"])
                                    ]))
                                  ], 8, ["onClick"]),
                                  createVNode("div", { class: "flex items-center justify-around" }, [
                                    createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          onClick: ($event) => deleteWish(record)
                                        }, [
                                          createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                        ], 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          onClick: ($event) => {
                                            var _a2;
                                            return setSelectRow(
                                              {
                                                yxid: record.yxid,
                                                yxmc: record.yxmc,
                                                yxdm: record.yxdm,
                                                wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                              },
                                              () => unref(setActiveKey)(
                                                "ZsChoiceEligibleMajorModal"
                                              )
                                            );
                                          }
                                        }, [
                                          createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                        ], 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["data"])
                          ])
                        ];
                      }
                    }),
                    children: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_zs_draggable_list, {
                          "default-list": record.children,
                          "item-class": "bg-white border-b border-solid border-[#EDEDED]",
                          isDraggable: false
                        }, {
                          row: withCtx(({ record: record2 }, _push4, _parent4, _scopeId3) => {
                            if (_push4) {
                              _push4(ssrRenderComponent(_component_zs_choice_professional_group_item, {
                                data: record2,
                                isMajor: true
                              }, {
                                operate: withCtx((_2, _push5, _parent5, _scopeId4) => {
                                  if (_push5) {
                                    _push5(`<div class="mx-auto flex flex-col w-[90px]"${_scopeId4}><div${_scopeId4}>`);
                                    if (!record2.isInput) {
                                      _push5(ssrRenderComponent(_component_a_tooltip, { content: "\u8F93\u5165\u5E8F\u53F7" }, {
                                        default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                          if (_push6) {
                                            _push6(`<div class="border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto"${_scopeId5}> \u4E13\u4E1A ${ssrInterpolate(record2.zySeq)} `);
                                            _push6(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent6, _scopeId5));
                                            _push6(`</div>`);
                                          } else {
                                            return [
                                              createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                                createTextVNode(" \u4E13\u4E1A " + toDisplayString(record2.zySeq) + " ", 1),
                                                createVNode(_component_icon_down, { class: "ml-[4px]" })
                                              ])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent5, _scopeId4));
                                    } else {
                                      _push5(`<div${_scopeId4}>`);
                                      _push5(ssrRenderComponent(_component_a_input_number, {
                                        style: { width: "90px" },
                                        precision: 0,
                                        min: 0,
                                        max: unref(volunteerInfo).zyTop,
                                        "hide-button": "",
                                        onBlur: ($event) => record2.isInput = false,
                                        onChange: ($event) => inputFinish(record2),
                                        modelValue: record2.zySeq,
                                        "onUpdate:modelValue": ($event) => record2.zySeq = $event,
                                        modelModifiers: { trim: true }
                                      }, null, _parent5, _scopeId4));
                                      _push5(`</div>`);
                                    }
                                    _push5(`</div><div class="flex items-center justify-around"${_scopeId4}>`);
                                    _push5(ssrRenderComponent(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                      default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div${_scopeId5}><i class="iconfont icon-shanchu text-[#7C92FF]"${_scopeId5}></i></div>`);
                                        } else {
                                          return [
                                            createVNode("div", {
                                              onClick: ($event) => deleteWish(record2)
                                            }, [
                                              createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                            ], 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(ssrRenderComponent(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                      default: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div${_scopeId5}><i class="iconfont icon-zengjia text-[#7C92FF]"${_scopeId5}></i></div>`);
                                        } else {
                                          return [
                                            createVNode("div", {
                                              onClick: ($event) => {
                                                var _a2;
                                                return setSelectRow(
                                                  {
                                                    yxid: record2.yxid,
                                                    yxmc: record2.yxmc,
                                                    yxdm: record2.yxdm,
                                                    wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                                  },
                                                  () => unref(setActiveKey)(
                                                    "ZsChoiceEligibleMajorModal"
                                                  )
                                                );
                                              }
                                            }, [
                                              createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                            ], 8, ["onClick"])
                                          ];
                                        }
                                      }),
                                      _: 2
                                    }, _parent5, _scopeId4));
                                    _push5(`</div></div>`);
                                  } else {
                                    return [
                                      createVNode("div", { class: "mx-auto flex flex-col w-[90px]" }, [
                                        createVNode("div", {
                                          onClick: ($event) => clickWish(record2)
                                        }, [
                                          !record2.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                                            key: 0,
                                            content: "\u8F93\u5165\u5E8F\u53F7"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                                createTextVNode(" \u4E13\u4E1A " + toDisplayString(record2.zySeq) + " ", 1),
                                                createVNode(_component_icon_down, { class: "ml-[4px]" })
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                                            createVNode(_component_a_input_number, {
                                              style: { width: "90px" },
                                              precision: 0,
                                              min: 0,
                                              max: unref(volunteerInfo).zyTop,
                                              "hide-button": "",
                                              onBlur: ($event) => record2.isInput = false,
                                              onChange: ($event) => inputFinish(record2),
                                              modelValue: record2.zySeq,
                                              "onUpdate:modelValue": ($event) => record2.zySeq = $event,
                                              modelModifiers: { trim: true }
                                            }, null, 8, ["max", "onBlur", "onChange", "modelValue", "onUpdate:modelValue"])
                                          ]))
                                        ], 8, ["onClick"]),
                                        createVNode("div", { class: "flex items-center justify-around" }, [
                                          createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                onClick: ($event) => deleteWish(record2)
                                              }, [
                                                createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                              ], 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                onClick: ($event) => {
                                                  var _a2;
                                                  return setSelectRow(
                                                    {
                                                      yxid: record2.yxid,
                                                      yxmc: record2.yxmc,
                                                      yxdm: record2.yxdm,
                                                      wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                                    },
                                                    () => unref(setActiveKey)(
                                                      "ZsChoiceEligibleMajorModal"
                                                    )
                                                  );
                                                }
                                              }, [
                                                createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                              ], 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ])
                                    ];
                                  }
                                }),
                                _: 2
                              }, _parent4, _scopeId3));
                            } else {
                              return [
                                createVNode(_component_zs_choice_professional_group_item, {
                                  data: record2,
                                  isMajor: true
                                }, {
                                  operate: withCtx(() => [
                                    createVNode("div", { class: "mx-auto flex flex-col w-[90px]" }, [
                                      createVNode("div", {
                                        onClick: ($event) => clickWish(record2)
                                      }, [
                                        !record2.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                                          key: 0,
                                          content: "\u8F93\u5165\u5E8F\u53F7"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                              createTextVNode(" \u4E13\u4E1A " + toDisplayString(record2.zySeq) + " ", 1),
                                              createVNode(_component_icon_down, { class: "ml-[4px]" })
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                                          createVNode(_component_a_input_number, {
                                            style: { width: "90px" },
                                            precision: 0,
                                            min: 0,
                                            max: unref(volunteerInfo).zyTop,
                                            "hide-button": "",
                                            onBlur: ($event) => record2.isInput = false,
                                            onChange: ($event) => inputFinish(record2),
                                            modelValue: record2.zySeq,
                                            "onUpdate:modelValue": ($event) => record2.zySeq = $event,
                                            modelModifiers: { trim: true }
                                          }, null, 8, ["max", "onBlur", "onChange", "modelValue", "onUpdate:modelValue"])
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("div", { class: "flex items-center justify-around" }, [
                                        createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              onClick: ($event) => deleteWish(record2)
                                            }, [
                                              createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              onClick: ($event) => {
                                                var _a2;
                                                return setSelectRow(
                                                  {
                                                    yxid: record2.yxid,
                                                    yxmc: record2.yxmc,
                                                    yxdm: record2.yxdm,
                                                    wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                                  },
                                                  () => unref(setActiveKey)(
                                                    "ZsChoiceEligibleMajorModal"
                                                  )
                                                );
                                              }
                                            }, [
                                              createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ])
                                  ]),
                                  _: 2
                                }, 1032, ["data"])
                              ];
                            }
                          }),
                          _: 2
                        }, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_zs_draggable_list, {
                            "default-list": record.children,
                            "item-class": "bg-white border-b border-solid border-[#EDEDED]",
                            isDraggable: false
                          }, {
                            row: withCtx(({ record: record2 }) => [
                              createVNode(_component_zs_choice_professional_group_item, {
                                data: record2,
                                isMajor: true
                              }, {
                                operate: withCtx(() => [
                                  createVNode("div", { class: "mx-auto flex flex-col w-[90px]" }, [
                                    createVNode("div", {
                                      onClick: ($event) => clickWish(record2)
                                    }, [
                                      !record2.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                                        key: 0,
                                        content: "\u8F93\u5165\u5E8F\u53F7"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                            createTextVNode(" \u4E13\u4E1A " + toDisplayString(record2.zySeq) + " ", 1),
                                            createVNode(_component_icon_down, { class: "ml-[4px]" })
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                                        createVNode(_component_a_input_number, {
                                          style: { width: "90px" },
                                          precision: 0,
                                          min: 0,
                                          max: unref(volunteerInfo).zyTop,
                                          "hide-button": "",
                                          onBlur: ($event) => record2.isInput = false,
                                          onChange: ($event) => inputFinish(record2),
                                          modelValue: record2.zySeq,
                                          "onUpdate:modelValue": ($event) => record2.zySeq = $event,
                                          modelModifiers: { trim: true }
                                        }, null, 8, ["max", "onBlur", "onChange", "modelValue", "onUpdate:modelValue"])
                                      ]))
                                    ], 8, ["onClick"]),
                                    createVNode("div", { class: "flex items-center justify-around" }, [
                                      createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            onClick: ($event) => deleteWish(record2)
                                          }, [
                                            createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                          ], 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            onClick: ($event) => {
                                              var _a2;
                                              return setSelectRow(
                                                {
                                                  yxid: record2.yxid,
                                                  yxmc: record2.yxmc,
                                                  yxdm: record2.yxdm,
                                                  wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                                },
                                                () => unref(setActiveKey)(
                                                  "ZsChoiceEligibleMajorModal"
                                                )
                                              );
                                            }
                                          }, [
                                            createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                          ], 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ])
                                ]),
                                _: 2
                              }, 1032, ["data"])
                            ]),
                            _: 2
                          }, 1032, ["default-list"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                } else {
                  _push2(`<div${_scopeId}>`);
                  _push2(ssrRenderComponent(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(` \u6682\u65E0\u5FD7\u613F `);
                      } else {
                        return [
                          createTextVNode(" \u6682\u65E0\u5FD7\u613F ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                }
              } else {
                return [
                  unref(volunteerData).list.length ? (openBlock(), createBlock("div", { key: 0 }, [
                    createVNode(_component_zs_draggable_list, {
                      "default-list": unref(volunteerData).list,
                      "item-class": "bg-[#F9F9F9] ",
                      isDraggable: false
                    }, {
                      row: withCtx(({ record }) => [
                        createVNode("div", { class: "border-b border-solid border-[#EDEDED]" }, [
                          createVNode(_component_zs_choice_professional_group_item, { data: record }, {
                            operate: withCtx(() => [
                              createVNode("div", { class: "mx-auto flex flex-col w-[90px]" }, [
                                createVNode("div", {
                                  onClick: ($event) => clickWish(record)
                                }, [
                                  !record.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                                    key: 0,
                                    content: "\u8F93\u5165\u5E8F\u53F7"
                                  }, {
                                    default: withCtx(() => [
                                      createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                        createTextVNode(" \u9662\u6821 " + toDisplayString(record.yxSeq) + " ", 1),
                                        createVNode(_component_icon_down, { class: "ml-[4px]" })
                                      ])
                                    ]),
                                    _: 2
                                  }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                                    createVNode(_component_a_input_number, {
                                      style: { width: "90px" },
                                      precision: 0,
                                      min: 0,
                                      max: unref(volunteerInfo).zyTop,
                                      "hide-button": "",
                                      onBlur: ($event) => record.isInput = false,
                                      onChange: ($event) => inputFinish(record),
                                      modelValue: record.yxSeq,
                                      "onUpdate:modelValue": ($event) => record.yxSeq = $event,
                                      modelModifiers: { trim: true }
                                    }, null, 8, ["max", "onBlur", "onChange", "modelValue", "onUpdate:modelValue"])
                                  ]))
                                ], 8, ["onClick"]),
                                createVNode("div", { class: "flex items-center justify-around" }, [
                                  createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        onClick: ($event) => deleteWish(record)
                                      }, [
                                        createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                      ], 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024),
                                  createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                    default: withCtx(() => [
                                      createVNode("div", {
                                        onClick: ($event) => {
                                          var _a2;
                                          return setSelectRow(
                                            {
                                              yxid: record.yxid,
                                              yxmc: record.yxmc,
                                              yxdm: record.yxdm,
                                              wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                            },
                                            () => unref(setActiveKey)(
                                              "ZsChoiceEligibleMajorModal"
                                            )
                                          );
                                        }
                                      }, [
                                        createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                      ], 8, ["onClick"])
                                    ]),
                                    _: 2
                                  }, 1024)
                                ])
                              ])
                            ]),
                            _: 2
                          }, 1032, ["data"])
                        ])
                      ]),
                      children: withCtx(({ record }) => [
                        createVNode(_component_zs_draggable_list, {
                          "default-list": record.children,
                          "item-class": "bg-white border-b border-solid border-[#EDEDED]",
                          isDraggable: false
                        }, {
                          row: withCtx(({ record: record2 }) => [
                            createVNode(_component_zs_choice_professional_group_item, {
                              data: record2,
                              isMajor: true
                            }, {
                              operate: withCtx(() => [
                                createVNode("div", { class: "mx-auto flex flex-col w-[90px]" }, [
                                  createVNode("div", {
                                    onClick: ($event) => clickWish(record2)
                                  }, [
                                    !record2.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                                      key: 0,
                                      content: "\u8F93\u5165\u5E8F\u53F7"
                                    }, {
                                      default: withCtx(() => [
                                        createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                          createTextVNode(" \u4E13\u4E1A " + toDisplayString(record2.zySeq) + " ", 1),
                                          createVNode(_component_icon_down, { class: "ml-[4px]" })
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)) : (openBlock(), createBlock("div", { key: 1 }, [
                                      createVNode(_component_a_input_number, {
                                        style: { width: "90px" },
                                        precision: 0,
                                        min: 0,
                                        max: unref(volunteerInfo).zyTop,
                                        "hide-button": "",
                                        onBlur: ($event) => record2.isInput = false,
                                        onChange: ($event) => inputFinish(record2),
                                        modelValue: record2.zySeq,
                                        "onUpdate:modelValue": ($event) => record2.zySeq = $event,
                                        modelModifiers: { trim: true }
                                      }, null, 8, ["max", "onBlur", "onChange", "modelValue", "onUpdate:modelValue"])
                                    ]))
                                  ], 8, ["onClick"]),
                                  createVNode("div", { class: "flex items-center justify-around" }, [
                                    createVNode(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          onClick: ($event) => deleteWish(record2)
                                        }, [
                                          createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                        ], 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                      default: withCtx(() => [
                                        createVNode("div", {
                                          onClick: ($event) => {
                                            var _a2;
                                            return setSelectRow(
                                              {
                                                yxid: record2.yxid,
                                                yxmc: record2.yxmc,
                                                yxdm: record2.yxdm,
                                                wid: (_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.id
                                              },
                                              () => unref(setActiveKey)(
                                                "ZsChoiceEligibleMajorModal"
                                              )
                                            );
                                          }
                                        }, [
                                          createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                        ], 8, ["onClick"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ])
                              ]),
                              _: 2
                            }, 1032, ["data"])
                          ]),
                          _: 2
                        }, 1032, ["default-list"])
                      ]),
                      _: 1
                    }, 8, ["default-list"])
                  ])) : (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                      default: withCtx(() => [
                        createTextVNode(" \u6682\u65E0\u5FD7\u613F ")
                      ]),
                      _: 1
                    }, 8, ["url"])
                  ]))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(activeKey) === "ZsChoiceEligibleMajorModal") {
          _push(ssrRenderComponent(_component_zs_choice_eligible_major_modal, {
            data: unref(form).selectRow,
            onCancelVolunteer: cancelVolunteer,
            onAddVolunteer: addVolunteer,
            onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_zs_no_data, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div${_scopeId}>\u7CDF\u7CD5\uFF0C\u9875\u9762\u597D\u50CF\u6CA1\u627E\u5230</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/choice/detail.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=detail-2aa49eb3.mjs.map
