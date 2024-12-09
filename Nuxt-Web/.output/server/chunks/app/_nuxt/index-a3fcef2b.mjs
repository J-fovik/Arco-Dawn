import { S as Space } from './index-8bcd588e.mjs';
import { T as Tooltip } from './index-5f48af9c.mjs';
import { P as Popover } from './index-a533a6fc.mjs';
import { a as Input, b as IconSearch, I as IconDown } from './index-dd449d78.mjs';
import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { S as Spin, C as Checkbox, a as CheckboxGroup } from './index-11d38f35.mjs';
import { G as Grid, a as GridItem } from './index-4ecc34e0.mjs';
import { _ as _sfc_main$5 } from './index-3e511c39.mjs';
import { I as InputNumber, T as Tag } from './index-08fdf206.mjs';
import { R as RadioGroup, a as Radio } from './index-63900e07.mjs';
import { e as useAsyncData, A as API_URLS, u as useHead, b as useUser, g as useRoute, d as useWebsiteInformation, n as navigateTo, f as useNuxtApp, _ as __nuxt_component_1 } from '../server.mjs';
import { _ as __nuxt_component_16, a as _sfc_main$4$1, b as __nuxt_component_12, c as __nuxt_component_21, d as __nuxt_component_22 } from './index-03a048b2.mjs';
import { _ as _sfc_main$6 } from './index-33e76c07.mjs';
import { P as Pagination } from './index-90aba227.mjs';
import { _ as _sfc_main$7 } from './index-9a6e8b24.mjs';
import { _ as _sfc_main$3 } from './index-3959f291.mjs';
import { _ as _sfc_main$4 } from './index-d6ea50b9.mjs';
import { F as Form, a as FormItem } from './index-d47379ff.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, withKeys, withAsyncContext, toDisplayString, openBlock, createBlock, createCommentVNode, ref, computed, Fragment, renderList } from 'vue';
import { u as useBasicsState } from './useBasicsState-8a7a18a4.mjs';
import { u as useForm, a as useModal } from './useArco-b2247a5c.mjs';
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { u as useLoading } from './useLoading-35bd0ba7.mjs';
import { g as groupByAndMergeChildArrays, t as textFormat, a as turnThousandth, d as downloadBlob } from './index-a008b2db.mjs';
import { _ as __nuxt_component_2 } from './index-4dfe90df.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import { N as NO_LIMIT_OPTIONS } from './options-7ec13930.mjs';
import { useDebounceFn } from '@vueuse/core';
import { I as IconCheck } from './index-0c9f2c90.mjs';
import 'resize-observer-polyfill';
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
import 'vue-draggable-plus';
import './index-6a06d329.mjs';
import './index-f6f6f2a5.mjs';
import './get-value-by-path-11166a95.mjs';
import './use-children-components-d7e0e48f.mjs';
import './index-cb5bd3b8.mjs';
import './NuxtImg-9bcbe2bb.mjs';
import 'echarts/core';
import 'echarts/components';
import 'echarts/charts';
import 'echarts/features';
import 'echarts/renderers';
import 'compute-scroll-into-view';
import 'b-validate';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    id: { default: "" },
    name: { default: "" }
  },
  emits: ["cancel", "success"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const [loading, setLoading] = useBasicsState(false);
    const { form, formRef } = useForm(() => ({
      name: props.name,
      id: props.id
    }));
    const rules = {
      name: {
        required: true,
        message: "\u8BF7\u8F93\u5165\u5FD7\u613F\u8868\u540D\u79F0"
      }
    };
    const validateData = () => {
      formRef.value.validate((errors) => {
        if (errors)
          return;
        saveWishName();
      });
    };
    const saveWishName = async () => {
      setLoading(true);
      const [err, res] = await $zsFetch(API_URLS.CHOICE.CHANGE_WISH_NAME, {
        method: "POST",
        body: {
          name: form.value.name,
          id: form.value.id
          // 志愿表id
        }
      });
      if (err)
        return setLoading(false);
      $zsMsg("success", res == null ? void 0 : res.data);
      setLoading(false);
      emits("success", form.value.name);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$3;
      const _component_a_form = Form;
      const _component_a_form_item = FormItem;
      const _component_a_input = Input;
      const _component_a_space = Space;
      const _component_a_button = Button;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        title: "",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white p-[0px_10px] rounded-[5px_5px] w-[500px]" data-v-6b406d8a${_scopeId}><div class="flex justify-between items-center cursor-pointer mb-[30px]" data-v-6b406d8a${_scopeId}><div class="text-[24px] font-bold" data-v-6b406d8a${_scopeId}>\u4FEE\u6539\u5FD7\u613F\u8868\u540D\u79F0</div></div>`);
            _push2(ssrRenderComponent(_component_a_form, {
              ref_key: "formRef",
              ref: formRef,
              model: unref(form),
              "label-align": "right",
              size: "large",
              "auto-label-width": "",
              rules,
              onKeyup: validateData
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_form_item, {
                    field: "name",
                    "validate-trigger": ["input"],
                    "hide-label": "",
                    "hide-asterisk": ""
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="h-[50px] border border-solid border-[#EDEDED] w-full" data-v-6b406d8a${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_a_input, {
                          modelValue: unref(form).name,
                          "onUpdate:modelValue": ($event) => unref(form).name = $event,
                          modelModifiers: { trim: true },
                          "hide-button": "",
                          "allow-clear": "",
                          class: "inputBg",
                          placeholder: "\u8BF7\u8F93\u5165\u5FD7\u613F\u8868\u540D\u79F0"
                        }, null, _parent4, _scopeId3));
                        _push4(`</div>`);
                      } else {
                        return [
                          createVNode("div", { class: "h-[50px] border border-solid border-[#EDEDED] w-full" }, [
                            createVNode(_component_a_input, {
                              modelValue: unref(form).name,
                              "onUpdate:modelValue": ($event) => unref(form).name = $event,
                              modelModifiers: { trim: true },
                              "hide-button": "",
                              "allow-clear": "",
                              class: "inputBg",
                              placeholder: "\u8BF7\u8F93\u5165\u5FD7\u613F\u8868\u540D\u79F0"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_form_item, {
                      field: "name",
                      "validate-trigger": ["input"],
                      "hide-label": "",
                      "hide-asterisk": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-[50px] border border-solid border-[#EDEDED] w-full" }, [
                          createVNode(_component_a_input, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            modelModifiers: { trim: true },
                            "hide-button": "",
                            "allow-clear": "",
                            class: "inputBg",
                            placeholder: "\u8BF7\u8F93\u5165\u5FD7\u613F\u8868\u540D\u79F0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-end items-center mt-[30px]" data-v-6b406d8a${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_button, {
                    size: "large",
                    class: "cancel",
                    onClick: ($event) => _ctx.$emit("cancel")
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u53D6\u6D88`);
                      } else {
                        return [
                          createTextVNode("\u53D6\u6D88")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_button, {
                    size: "large",
                    class: "submit",
                    onClick: validateData,
                    loading: unref(loading)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`\u786E\u5B9A`);
                      } else {
                        return [
                          createTextVNode("\u786E\u5B9A")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_button, {
                      size: "large",
                      class: "cancel",
                      onClick: ($event) => _ctx.$emit("cancel")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u53D6\u6D88")
                      ]),
                      _: 1
                    }, 8, ["onClick"]),
                    createVNode(_component_a_button, {
                      size: "large",
                      class: "submit",
                      onClick: validateData,
                      loading: unref(loading)
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u5B9A")
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white p-[0px_10px] rounded-[5px_5px] w-[500px]" }, [
                createVNode("div", { class: "flex justify-between items-center cursor-pointer mb-[30px]" }, [
                  createVNode("div", { class: "text-[24px] font-bold" }, "\u4FEE\u6539\u5FD7\u613F\u8868\u540D\u79F0")
                ]),
                createVNode(_component_a_form, {
                  ref_key: "formRef",
                  ref: formRef,
                  model: unref(form),
                  "label-align": "right",
                  size: "large",
                  "auto-label-width": "",
                  rules,
                  onKeyup: withKeys(validateData, ["enter"])
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_form_item, {
                      field: "name",
                      "validate-trigger": ["input"],
                      "hide-label": "",
                      "hide-asterisk": ""
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "h-[50px] border border-solid border-[#EDEDED] w-full" }, [
                          createVNode(_component_a_input, {
                            modelValue: unref(form).name,
                            "onUpdate:modelValue": ($event) => unref(form).name = $event,
                            modelModifiers: { trim: true },
                            "hide-button": "",
                            "allow-clear": "",
                            class: "inputBg",
                            placeholder: "\u8BF7\u8F93\u5165\u5FD7\u613F\u8868\u540D\u79F0"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "onKeyup"]),
                createVNode("div", { class: "flex justify-end items-center mt-[30px]" }, [
                  createVNode(_component_a_space, null, {
                    default: withCtx(() => [
                      createVNode(_component_a_button, {
                        size: "large",
                        class: "cancel",
                        onClick: ($event) => _ctx.$emit("cancel")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u53D6\u6D88")
                        ]),
                        _: 1
                      }, 8, ["onClick"]),
                      createVNode(_component_a_button, {
                        size: "large",
                        class: "submit",
                        onClick: validateData,
                        loading: unref(loading)
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u786E\u5B9A")
                        ]),
                        _: 1
                      }, 8, ["loading"])
                    ]),
                    _: 1
                  })
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceChangeNameModal/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_24 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6b406d8a"]]);
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => {
    } }
  },
  emits: ["cancel", "changeName", "init", "cancelVolunteer", "addVolunteer"],
  async setup(__props, { emit: emits }) {
    let __temp, __restore;
    const props = __props;
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { warningModal } = useModal();
    const { setGlobalLoading } = useLoading();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const { form } = useForm(() => ({
      ...props.data,
      selectRow: {},
      searchName: "",
      draggable: false
    }));
    const setSelectRow = (row, callBack) => {
      form.value.selectRow = row;
      if (callBack)
        callBack();
    };
    const changeNameSuccess = (val) => {
      setSelectRow({}, () => setActiveKey(null));
      form.value.zybt = val;
      emits("changeName");
    };
    const changeWishSort = async (sortType, tip) => {
      warningModal(`\u6B64\u64CD\u4F5C\u5C06\u6839\u636E${tip}\uFF0C\u64CD\u4F5C\u540E\u4E0D\u53EF\u64A4\u9500?`, async (done) => {
        const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_SORT, {
          body: {
            id: form.value.id,
            // 志愿表id
            sortType
          }
        });
        done(true);
        if (res) {
          volunteerData.value.list = [];
          await volunteerRefresh();
          $zsMsg("success", res.data);
          emits("init", "sort");
        }
      });
    };
    const exportFile = async () => {
      warningModal(`\u786E\u5B9A\u5BFC\u51FA\u5FD7\u613F\u8868\u5417`, async (done) => {
        setGlobalLoading(true);
        done(true);
        const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_EXCEL, {
          body: {
            id: form.value.id
            // 志愿表id
          },
          responseType: "blob"
        });
        if (res) {
          setGlobalLoading(false);
          downloadBlob(res, `${form.value.zybt}.xlsx`);
        }
      });
    };
    const openFile = async () => {
      warningModal(`\u786E\u5B9A\u5BFC\u51FA\u5FD7\u613F\u8868\u5417`, async (done) => {
        setGlobalLoading(true);
        done(true);
        const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_PDF, {
          body: {
            id: form.value.id
            // 志愿表id
          }
        });
        if (res) {
          setGlobalLoading(false);
          window.open(res.data, "_blank");
        }
      });
    };
    const clearWish = async () => {
      warningModal(`\u786E\u5B9A\u6E05\u7A7A\u5F53\u524D\u5FD7\u613F\u5417`, async (done) => {
        const [err, res] = await $zsFetch(API_URLS.CHOICE.CLEAR_WISH, {
          body: {
            id: form.value.id
            // 志愿表id
          }
        });
        done(true);
        if (res) {
          await volunteerRefresh();
          $zsMsg("success", res.data);
          emits("init", "clear");
        }
      });
    };
    const deleteWish = async (row) => {
      warningModal(`\u786E\u5B9A\u5220\u9664\u5F53\u524D\u5FD7\u613F\u5417`, async (done) => {
        const [err, res] = await $zsFetch(API_URLS.CHOICE.DELETE_WISH_BY_ID, {
          body: {
            // 删院校下专业只传id,删院校时不传id传其他值
            id: row.yxSeq ? "" : row.id,
            // 当前列id
            wid: row.yxSeq ? form.value.id : "",
            // 志愿表id
            yxmc: row.yxSeq ? row.yxmc : ""
          }
        });
        done(true);
        if (res) {
          volunteerData.value.list = [];
          await volunteerRefresh();
          $zsMsg("success", res.data);
          emits("init", "delete");
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
      emits("init", "input");
      setSelectRow(null);
    };
    const wishInputSort = async () => {
      let params = {};
      if (props.data.isSchoolGroup === "1") {
        params = {
          id: form.value.selectRow.id,
          // 改变当前的id
          zySeq: form.value.selectRow.zySeq,
          // 改变当前的志愿
          wid: form.value.id
          // 志愿表id
        };
      } else {
        params = {
          yxmc: form.value.selectRow.yxmc,
          yxSeq: form.value.selectRow.yxSeq,
          wid: form.value.id,
          // 志愿表id
          // zySeq: form.value.selectRow.zySeq,
          id: form.value.selectRow.id
        };
      }
      const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_INPUT_SORT, {
        body: params
      });
      if (err)
        return;
    };
    const wishDragSort = async () => {
      const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_DRAG_SORT, {
        body: {
          list: JSON.stringify(volunteerData.value.list),
          wid: form.value.id
          // 志愿表id
        }
      });
      if (err)
        return false;
      return true;
    };
    const cancelVolunteer = (row) => {
      volunteerData.value.list = [];
      volunteerRefresh();
      emits("cancelVolunteer", row);
    };
    const addVolunteer = (row) => {
      volunteerData.value.list = [];
      volunteerRefresh();
      emits("addVolunteer", row);
    };
    const draggableTable = async (data) => {
      volunteerData.value.list = data;
      const isRes = await wishDragSort();
      if (isRes) {
        volunteerData.value.list = [];
        await volunteerRefresh();
        $zsMsg("success", "\u987A\u5E8F\u8C03\u6574\u6210\u529F!");
        emits("init", "drag");
      }
    };
    const draggableTableGroup = async (data, event) => {
      if (event.data.zySeq) {
        volunteerData.value.list.find((o) => o.yxmc === event.data.yxmc).children = data;
      } else {
        volunteerData.value.list = data;
      }
      const isRes = await wishDragSort();
      if (isRes) {
        volunteerData.value.list = [];
        await volunteerRefresh();
        $zsMsg("success", "\u987A\u5E8F\u8C03\u6574\u6210\u529F!");
        emits("init", "drag");
      }
    };
    const {
      data: volunteerData,
      status: volunteerStatus,
      refresh: volunteerRefresh
    } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "volunteerList",
      async () => {
        var _a2, _b2, _c2, _d2, _e2;
        var _a, _b, _c, _d, _e, _f;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
          body: {
            id: form.value.id,
            // 志愿表id
            name: form.value.searchName,
            pagingOrNot: 1
          }
        });
        return {
          list: (_a2 = (_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) == null ? void 0 : _b.map((item) => {
            return {
              ...item,
              child: item.children,
              // children: null,
              isInput: false
            };
          })) != null ? _a2 : [],
          csum: (_b2 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.csum) != null ? _b2 : 0,
          wsum: (_c2 = (_d = res == null ? void 0 : res.data) == null ? void 0 : _d.wsum) != null ? _c2 : 0,
          bsum: (_d2 = (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.bsum) != null ? _d2 : 0,
          year: (_e2 = (_f = res == null ? void 0 : res.data) == null ? void 0 : _f.year) != null ? _e2 : 2024
        };
      },
      {
        default: () => ({
          list: [],
          cSum: 0,
          wSum: 0,
          bSum: 0,
          year: 2024
        }),
        immediate: false
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$3;
      const _component_a_tooltip = Tooltip;
      const _component_a_space = Space;
      const _component_a_popover = Popover;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_zs_choice_major_table = __nuxt_component_16;
      const _component_icon_down = IconDown;
      const _component_a_input_number = InputNumber;
      const _component_zs_no_data = _sfc_main$4;
      const _component_a_spin = Spin;
      const _component_zs_draggable_list = _sfc_main$4$1;
      const _component_zs_choice_professional_group_item = __nuxt_component_12;
      const _component_zs_choice_change_name_modal = __nuxt_component_24;
      const _component_zs_choice_eligible_major_modal = __nuxt_component_21;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        "content-class": "w-[1100px]",
        title: "",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b;
          if (_push2) {
            _push2(`<div class="leading-loose text-xs h-[85vh] flex flex-col" data-v-865a9d2e${_scopeId}><div class="flex items-center justify-between mr-[50px]" data-v-865a9d2e${_scopeId}><div class="f-c-c" data-v-865a9d2e${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_tooltip, {
              content: (_a = unref(form)) == null ? void 0 : _a.zybt,
              position: "bottom"
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a2, _b2;
                if (_push3) {
                  _push3(`<div class="text-[22px] font-bold truncate max-w-[180px]" data-v-865a9d2e${_scopeId2}>${ssrInterpolate((_a2 = unref(form)) == null ? void 0 : _a2.zybt)}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-[22px] font-bold truncate max-w-[180px]" }, toDisplayString((_b2 = unref(form)) == null ? void 0 : _b2.zybt), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_space, { class: "text-[12px] text-[#999999] ml-[20px]" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" data-v-865a9d2e${_scopeId2}><i class="iconfont icon-chuangzuo fontSize mr-[3px]" data-v-865a9d2e${_scopeId2}></i>\u4FEE\u6539\u540D\u79F0 </div>`);
                  _push3(ssrRenderComponent(_component_a_popover, {
                    trigger: "hover",
                    position: "bottom"
                  }, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-865a9d2e${_scopeId3}> \u6309\u9884\u6D4B\u6982\u7387\u6392\u5E8F </div><div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-865a9d2e${_scopeId3}> \u6309\u53BB\u5E74\u5F55\u53D6\u6392\u5E8F </div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                            onClick: ($event) => changeWishSort("1", "\u9884\u6D4B\u6982\u7387\u6392\u5E8F")
                          }, " \u6309\u9884\u6D4B\u6982\u7387\u6392\u5E8F ", 8, ["onClick"]),
                          createVNode("div", {
                            class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                            onClick: ($event) => changeWishSort("2", "\u53BB\u5E74\u5F55\u53D6\u6392\u5E8F")
                          }, " \u6309\u53BB\u5E74\u5F55\u53D6\u6392\u5E8F ", 8, ["onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" data-v-865a9d2e${_scopeId3}><i class="iconfont icon-paixu fontSize mr-[3px]" data-v-865a9d2e${_scopeId3}></i>\u6392\u5E8F </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                            createVNode("i", { class: "iconfont icon-paixu fontSize mr-[3px]" }),
                            createTextVNode("\u6392\u5E8F ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_popover, {
                    trigger: "hover",
                    position: "bottom"
                  }, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-865a9d2e${_scopeId3}> \u5BFC\u51FAExcel(\u8868\u683C\u7248) </div><div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-865a9d2e${_scopeId3}> \u5BFC\u51FAPdf(\u6253\u5370\u7248) </div>`);
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
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" data-v-865a9d2e${_scopeId3}><i class="iconfont icon-shangchuan fontSize mr-[3px]" data-v-865a9d2e${_scopeId3}></i>\u5BFC\u51FA </div>`);
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
                  }, _parent3, _scopeId2));
                  _push3(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" data-v-865a9d2e${_scopeId2}><i class="iconfont icon-shanchu fontSize mr-[3px]" data-v-865a9d2e${_scopeId2}></i>\u6E05\u7A7A </div>`);
                  if (!unref(form).searchName) {
                    _push3(`<div class="${ssrRenderClass([{
                      "bg-[#7C92FF] text-white": unref(form).draggable,
                      "bg-[#F4F6F8]": !unref(form).draggable
                    }, "leading-[32px] px-[10px] rounded-[4px] cursor-pointer"])}" data-v-865a9d2e${_scopeId2}><i class="iconfont icon-tuodong fontSize mr-[3px]" data-v-865a9d2e${_scopeId2}></i>${ssrInterpolate(unref(form).draggable ? "\u62D6\u52A8\u5B8C\u6210" : "\u62D6\u52A8")}</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    createVNode("div", {
                      class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer",
                      onClick: ($event) => {
                        var _a2, _b2;
                        return setSelectRow(
                          { name: (_a2 = unref(form)) == null ? void 0 : _a2.zybt, id: (_b2 = unref(form)) == null ? void 0 : _b2.id },
                          () => unref(setActiveKey)("ZsChoiceChangeNameModal")
                        );
                      }
                    }, [
                      createVNode("i", { class: "iconfont icon-chuangzuo fontSize mr-[3px]" }),
                      createTextVNode("\u4FEE\u6539\u540D\u79F0 ")
                    ], 8, ["onClick"]),
                    createVNode(_component_a_popover, {
                      trigger: "hover",
                      position: "bottom"
                    }, {
                      content: withCtx(() => [
                        createVNode("div", {
                          class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                          onClick: ($event) => changeWishSort("1", "\u9884\u6D4B\u6982\u7387\u6392\u5E8F")
                        }, " \u6309\u9884\u6D4B\u6982\u7387\u6392\u5E8F ", 8, ["onClick"]),
                        createVNode("div", {
                          class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                          onClick: ($event) => changeWishSort("2", "\u53BB\u5E74\u5F55\u53D6\u6392\u5E8F")
                        }, " \u6309\u53BB\u5E74\u5F55\u53D6\u6392\u5E8F ", 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                          createVNode("i", { class: "iconfont icon-paixu fontSize mr-[3px]" }),
                          createTextVNode("\u6392\u5E8F ")
                        ])
                      ]),
                      _: 1
                    }),
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
                    }),
                    createVNode("div", {
                      class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer",
                      onClick: clearWish
                    }, [
                      createVNode("i", { class: "iconfont icon-shanchu fontSize mr-[3px]" }),
                      createTextVNode("\u6E05\u7A7A ")
                    ]),
                    !unref(form).searchName ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: ["leading-[32px] px-[10px] rounded-[4px] cursor-pointer", {
                        "bg-[#7C92FF] text-white": unref(form).draggable,
                        "bg-[#F4F6F8]": !unref(form).draggable
                      }],
                      onClick: ($event) => unref(form).draggable = !unref(form).draggable
                    }, [
                      createVNode("i", { class: "iconfont icon-tuodong fontSize mr-[3px]" }),
                      createTextVNode(toDisplayString(unref(form).draggable ? "\u62D6\u52A8\u5B8C\u6210" : "\u62D6\u52A8"), 1)
                    ], 10, ["onClick"])) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            if (!unref(form).draggable) {
              _push2(ssrRenderComponent(_component_a_input, {
                class: "ml-[30px]",
                style: { width: "260px" },
                modelValue: unref(form).searchName,
                "onUpdate:modelValue": ($event) => unref(form).searchName = $event,
                modelModifiers: { trim: true },
                placeholder: "\u641C\u7D22\u5173\u952E\u8BCD",
                onClear: ($event) => unref(volunteerRefresh)(),
                onChange: ($event) => unref(volunteerRefresh)(),
                "allow-clear": ""
              }, {
                prefix: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_icon_search, null, null, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_icon_search)
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div><div class="flex items-center justify-end ml-[50px]" data-v-865a9d2e${_scopeId}><div class="w-[6px] h-[6px] rounded-[50%] bg-[#7C92FF] mx-[5px]" data-v-865a9d2e${_scopeId}></div><div data-v-865a9d2e${_scopeId}>\u51B2${ssrInterpolate(unref(volunteerData).csum)}</div><div class="w-[6px] h-[6px] rounded-[50%] bg-[#5AB9FF] mx-[5px]" data-v-865a9d2e${_scopeId}></div><div data-v-865a9d2e${_scopeId}>\u7A33${ssrInterpolate(unref(volunteerData).wsum)}</div><div class="w-[6px] h-[6px] rounded-[50%] bg-[#FFA864] mx-[5px]" data-v-865a9d2e${_scopeId}></div><div data-v-865a9d2e${_scopeId}>\u4FDD${ssrInterpolate(unref(volunteerData).bsum)}</div></div></div><div class="flex-1 overflow-auto no-scrollbar" data-v-865a9d2e${_scopeId}>`);
            if (props.data.isSchoolGroup === "1") {
              _push2(ssrRenderComponent(_component_zs_choice_major_table, {
                data: { list: unref(volunteerData).list, year: unref(volunteerData).year },
                loading: unref(volunteerStatus) === "pending",
                draggable: unref(form).draggable ? true : false,
                onDraggable: draggableTable
              }, {
                operateTitle: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="font-bold" data-v-865a9d2e${_scopeId2}>\u64CD\u4F5C</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "font-bold" }, "\u64CD\u4F5C")
                    ];
                  }
                }),
                operate: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-865a9d2e${_scopeId2}>`);
                    if (!record.isInput) {
                      _push3(ssrRenderComponent(_component_a_tooltip, { content: "\u8F93\u5165\u5E8F\u53F7" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" data-v-865a9d2e${_scopeId3}> \u5FD7\u613F ${ssrInterpolate(record.zySeq)} `);
                            _push4(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
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
                      }, _parent3, _scopeId2));
                    } else {
                      _push3(`<div data-v-865a9d2e${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_a_input_number, {
                        style: { width: "90px" },
                        precision: 0,
                        min: 0,
                        max: unref(form).zyTop,
                        "hide-button": "",
                        onBlur: ($event) => record.isInput = false,
                        onChange: ($event) => inputFinish(record),
                        modelValue: record.zySeq,
                        "onUpdate:modelValue": ($event) => record.zySeq = $event,
                        modelModifiers: { trim: true }
                      }, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                    _push3(`</div>`);
                    _push3(ssrRenderComponent(_component_a_space, { size: "large" }, {
                      default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_a_tooltip, { content: "\u5220\u9664" }, {
                            default: withCtx((_3, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div data-v-865a9d2e${_scopeId4}><i class="iconfont icon-shanchu text-[#7C92FF]" data-v-865a9d2e${_scopeId4}></i></div>`);
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
                                _push5(`<div data-v-865a9d2e${_scopeId4}><i class="iconfont icon-zengjia text-[#7C92FF]" data-v-865a9d2e${_scopeId4}></i></div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    onClick: ($event) => setSelectRow(
                                      {
                                        yxid: record.yxid,
                                        yxmc: record.yxmc,
                                        yxdm: record.yxdm,
                                        wid: unref(form).id
                                      },
                                      () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                                    )
                                  }, [
                                    createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                  ], 8, ["onClick"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
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
                                  onClick: ($event) => setSelectRow(
                                    {
                                      yxid: record.yxid,
                                      yxmc: record.yxmc,
                                      yxdm: record.yxdm,
                                      wid: unref(form).id
                                    },
                                    () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                                  )
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
                    }, _parent3, _scopeId2));
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
                            max: unref(form).zyTop,
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
                                onClick: ($event) => setSelectRow(
                                  {
                                    yxid: record.yxid,
                                    yxmc: record.yxmc,
                                    yxdm: record.yxdm,
                                    wid: unref(form).id
                                  },
                                  () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                                )
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
                empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(` \u6682\u65E0\u5FD7\u613F `);
                        } else {
                          return [
                            createTextVNode(" \u6682\u65E0\u5FD7\u613F ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
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
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (props.data.isSchoolGroup === "2") {
              _push2(`<div data-v-865a9d2e${_scopeId}><div class="bg-[#F9F9F9] text-[#333] text-[14px] flex items-center leading-[48px] font-bold text-center" data-v-865a9d2e${_scopeId}><div class="w-[70px]" data-v-865a9d2e${_scopeId}>\u6982\u7387</div><div class="flex-1" data-v-865a9d2e${_scopeId}>\u62DB\u751F\u9662\u6821</div><div class="w-[100px]" data-v-865a9d2e${_scopeId}>${ssrInterpolate(unref(volunteerData).year)}\u8BA1\u5212</div><div class="w-[70px]" data-v-865a9d2e${_scopeId}></div><div class="w-[80px]" data-v-865a9d2e${_scopeId}>${ssrInterpolate(unref(volunteerData).year)}\u5E74\u4EFD</div><div class="w-[80px]" data-v-865a9d2e${_scopeId}>${ssrInterpolate(unref(volunteerData).year - 1)}\u5E74\u4EFD</div><div class="w-[80px]" data-v-865a9d2e${_scopeId}>${ssrInterpolate(unref(volunteerData).year - 2)}\u5E74\u4EFD</div><div class="w-[150px]" data-v-865a9d2e${_scopeId}>\u64CD\u4F5C</div></div>`);
              _push2(ssrRenderComponent(_component_a_spin, {
                loading: unref(volunteerStatus) === "pending",
                class: "w-full min-h-[60vh]"
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    if (unref(volunteerData).list.length) {
                      _push3(`<div data-v-865a9d2e${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_zs_draggable_list, {
                        "default-list": unref(volunteerData).list,
                        "item-class": "bg-[#F9F9F9]",
                        isDraggable: unref(form).draggable,
                        onDraggable: draggableTableGroup
                      }, {
                        row: withCtx(({ record }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="border-b border-solid border-[#EDEDED]" data-v-865a9d2e${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_zs_choice_professional_group_item, { data: record }, {
                              operate: withCtx((_3, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(`<div class="mx-auto flex flex-col w-[90px]" data-v-865a9d2e${_scopeId4}><div data-v-865a9d2e${_scopeId4}>`);
                                  if (!record.isInput) {
                                    _push5(ssrRenderComponent(_component_a_tooltip, { content: "\u8F93\u5165\u5E8F\u53F7" }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" data-v-865a9d2e${_scopeId5}> \u9662\u6821 ${ssrInterpolate(record.yxSeq)} `);
                                          _push6(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent6, _scopeId5));
                                          _push6(`</div>`);
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
                                    }, _parent5, _scopeId4));
                                  } else {
                                    _push5(`<div data-v-865a9d2e${_scopeId4}>`);
                                    _push5(ssrRenderComponent(_component_a_input_number, {
                                      style: { width: "90px" },
                                      precision: 0,
                                      min: 0,
                                      max: unref(form).zyTop,
                                      "hide-button": "",
                                      onBlur: ($event) => record.isInput = false,
                                      onChange: ($event) => inputFinish(record),
                                      modelValue: record.yxSeq,
                                      "onUpdate:modelValue": ($event) => record.yxSeq = $event,
                                      modelModifiers: { trim: true }
                                    }, null, _parent5, _scopeId4));
                                    _push5(`</div>`);
                                  }
                                  _push5(`</div><div class="flex items-center justify-around" data-v-865a9d2e${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div data-v-865a9d2e${_scopeId5}><i class="iconfont icon-shanchu text-[#7C92FF]" data-v-865a9d2e${_scopeId5}></i></div>`);
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
                                  }, _parent5, _scopeId4));
                                  _push5(ssrRenderComponent(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                    default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div data-v-865a9d2e${_scopeId5}><i class="iconfont icon-zengjia text-[#7C92FF]" data-v-865a9d2e${_scopeId5}></i></div>`);
                                      } else {
                                        return [
                                          createVNode("div", {
                                            onClick: ($event) => setSelectRow(
                                              {
                                                yxid: record.yxid,
                                                yxmc: record.yxmc,
                                                yxdm: record.yxdm,
                                                wid: unref(form).id
                                              },
                                              () => unref(setActiveKey)(
                                                "ZsChoiceEligibleMajorModal"
                                              )
                                            )
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
                                            max: unref(form).zyTop,
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
                                              onClick: ($event) => setSelectRow(
                                                {
                                                  yxid: record.yxid,
                                                  yxmc: record.yxmc,
                                                  yxdm: record.yxdm,
                                                  wid: unref(form).id
                                                },
                                                () => unref(setActiveKey)(
                                                  "ZsChoiceEligibleMajorModal"
                                                )
                                              )
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
                            _push4(`</div>`);
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
                                            max: unref(form).zyTop,
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
                                              onClick: ($event) => setSelectRow(
                                                {
                                                  yxid: record.yxid,
                                                  yxmc: record.yxmc,
                                                  yxdm: record.yxdm,
                                                  wid: unref(form).id
                                                },
                                                () => unref(setActiveKey)(
                                                  "ZsChoiceEligibleMajorModal"
                                                )
                                              )
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
                        children: withCtx(({ record }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_zs_draggable_list, {
                              "default-list": record.children,
                              "item-class": "bg-white border-b border-solid border-[#EDEDED]",
                              isDraggable: unref(form).draggable,
                              onDraggable: draggableTableGroup
                            }, {
                              row: withCtx(({ record: record2 }, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_zs_choice_professional_group_item, {
                                    data: record2,
                                    isMajor: true
                                  }, {
                                    operate: withCtx((_3, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="mx-auto flex flex-col w-[90px]" data-v-865a9d2e${_scopeId5}><div data-v-865a9d2e${_scopeId5}>`);
                                        if (!record2.isInput) {
                                          _push6(ssrRenderComponent(_component_a_tooltip, { content: "\u8F93\u5165\u5E8F\u53F7" }, {
                                            default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`<div class="border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" data-v-865a9d2e${_scopeId6}> \u4E13\u4E1A ${ssrInterpolate(record2.zySeq)} `);
                                                _push7(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent7, _scopeId6));
                                                _push7(`</div>`);
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
                                          }, _parent6, _scopeId5));
                                        } else {
                                          _push6(`<div data-v-865a9d2e${_scopeId5}>`);
                                          _push6(ssrRenderComponent(_component_a_input_number, {
                                            style: { width: "90px" },
                                            precision: 0,
                                            min: 0,
                                            max: unref(form).zyTop,
                                            "hide-button": "",
                                            onBlur: ($event) => record2.isInput = false,
                                            onChange: ($event) => inputFinish(record2),
                                            modelValue: record2.zySeq,
                                            "onUpdate:modelValue": ($event) => record2.zySeq = $event,
                                            modelModifiers: { trim: true }
                                          }, null, _parent6, _scopeId5));
                                          _push6(`</div>`);
                                        }
                                        _push6(`</div><div class="flex items-center justify-around" data-v-865a9d2e${_scopeId5}>`);
                                        _push6(ssrRenderComponent(_component_a_tooltip, { content: "\u5220\u9664" }, {
                                          default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div data-v-865a9d2e${_scopeId6}><i class="iconfont icon-shanchu text-[#7C92FF]" data-v-865a9d2e${_scopeId6}></i></div>`);
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
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_a_tooltip, { content: "\u52A0\u5165\u53EF\u62A5\u4E13\u4E1A" }, {
                                          default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(`<div data-v-865a9d2e${_scopeId6}><i class="iconfont icon-zengjia text-[#7C92FF]" data-v-865a9d2e${_scopeId6}></i></div>`);
                                            } else {
                                              return [
                                                createVNode("div", {
                                                  onClick: ($event) => setSelectRow(
                                                    {
                                                      yxid: record2.yxid,
                                                      yxmc: record2.yxmc,
                                                      yxdm: record2.yxdm,
                                                      wid: unref(form).id
                                                    },
                                                    () => unref(setActiveKey)(
                                                      "ZsChoiceEligibleMajorModal"
                                                    )
                                                  )
                                                }, [
                                                  createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                                                ], 8, ["onClick"])
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(`</div></div>`);
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
                                                  max: unref(form).zyTop,
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
                                                    onClick: ($event) => setSelectRow(
                                                      {
                                                        yxid: record2.yxid,
                                                        yxmc: record2.yxmc,
                                                        yxdm: record2.yxdm,
                                                        wid: unref(form).id
                                                      },
                                                      () => unref(setActiveKey)(
                                                        "ZsChoiceEligibleMajorModal"
                                                      )
                                                    )
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
                                  }, _parent5, _scopeId4));
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
                                                max: unref(form).zyTop,
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
                                                  onClick: ($event) => setSelectRow(
                                                    {
                                                      yxid: record2.yxid,
                                                      yxmc: record2.yxmc,
                                                      yxdm: record2.yxdm,
                                                      wid: unref(form).id
                                                    },
                                                    () => unref(setActiveKey)(
                                                      "ZsChoiceEligibleMajorModal"
                                                    )
                                                  )
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
                            }, _parent4, _scopeId3));
                          } else {
                            return [
                              createVNode(_component_zs_draggable_list, {
                                "default-list": record.children,
                                "item-class": "bg-white border-b border-solid border-[#EDEDED]",
                                isDraggable: unref(form).draggable,
                                onDraggable: draggableTableGroup
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
                                              max: unref(form).zyTop,
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
                                                onClick: ($event) => setSelectRow(
                                                  {
                                                    yxid: record2.yxid,
                                                    yxmc: record2.yxmc,
                                                    yxdm: record2.yxdm,
                                                    wid: unref(form).id
                                                  },
                                                  () => unref(setActiveKey)(
                                                    "ZsChoiceEligibleMajorModal"
                                                  )
                                                )
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
                              }, 1032, ["default-list", "isDraggable"])
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<div data-v-865a9d2e${_scopeId2}>`);
                      _push3(ssrRenderComponent(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                        default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(` \u6682\u65E0\u5FD7\u613F `);
                          } else {
                            return [
                              createTextVNode(" \u6682\u65E0\u5FD7\u613F ")
                            ];
                          }
                        }),
                        _: 1
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    }
                  } else {
                    return [
                      unref(volunteerData).list.length ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode(_component_zs_draggable_list, {
                          "default-list": unref(volunteerData).list,
                          "item-class": "bg-[#F9F9F9]",
                          isDraggable: unref(form).draggable,
                          onDraggable: draggableTableGroup
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
                                          max: unref(form).zyTop,
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
                                            onClick: ($event) => setSelectRow(
                                              {
                                                yxid: record.yxid,
                                                yxmc: record.yxmc,
                                                yxdm: record.yxdm,
                                                wid: unref(form).id
                                              },
                                              () => unref(setActiveKey)(
                                                "ZsChoiceEligibleMajorModal"
                                              )
                                            )
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
                              isDraggable: unref(form).draggable,
                              onDraggable: draggableTableGroup
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
                                            max: unref(form).zyTop,
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
                                              onClick: ($event) => setSelectRow(
                                                {
                                                  yxid: record2.yxid,
                                                  yxmc: record2.yxmc,
                                                  yxdm: record2.yxdm,
                                                  wid: unref(form).id
                                                },
                                                () => unref(setActiveKey)(
                                                  "ZsChoiceEligibleMajorModal"
                                                )
                                              )
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
                            }, 1032, ["default-list", "isDraggable"])
                          ]),
                          _: 1
                        }, 8, ["default-list", "isDraggable"])
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
              }, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div>`);
            if (unref(activeKey) === "ZsChoiceChangeNameModal") {
              _push2(ssrRenderComponent(_component_zs_choice_change_name_modal, {
                name: unref(form).zybt,
                id: unref(form).id,
                onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null)),
                onSuccess: changeNameSuccess
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (unref(activeKey) === "ZsChoiceEligibleMajorModal") {
              _push2(ssrRenderComponent(_component_zs_choice_eligible_major_modal, {
                data: unref(form).selectRow,
                onCancelVolunteer: cancelVolunteer,
                onAddVolunteer: addVolunteer,
                onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "leading-loose text-xs h-[85vh] flex flex-col" }, [
                createVNode("div", { class: "flex items-center justify-between mr-[50px]" }, [
                  createVNode("div", { class: "f-c-c" }, [
                    createVNode(_component_a_tooltip, {
                      content: (_b = unref(form)) == null ? void 0 : _b.zybt,
                      position: "bottom"
                    }, {
                      default: withCtx(() => {
                        var _a2;
                        return [
                          createVNode("div", { class: "text-[22px] font-bold truncate max-w-[180px]" }, toDisplayString((_a2 = unref(form)) == null ? void 0 : _a2.zybt), 1)
                        ];
                      }),
                      _: 1
                    }, 8, ["content"]),
                    createVNode(_component_a_space, { class: "text-[12px] text-[#999999] ml-[20px]" }, {
                      default: withCtx(() => [
                        createVNode("div", {
                          class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer",
                          onClick: ($event) => {
                            var _a2, _b2;
                            return setSelectRow(
                              { name: (_a2 = unref(form)) == null ? void 0 : _a2.zybt, id: (_b2 = unref(form)) == null ? void 0 : _b2.id },
                              () => unref(setActiveKey)("ZsChoiceChangeNameModal")
                            );
                          }
                        }, [
                          createVNode("i", { class: "iconfont icon-chuangzuo fontSize mr-[3px]" }),
                          createTextVNode("\u4FEE\u6539\u540D\u79F0 ")
                        ], 8, ["onClick"]),
                        createVNode(_component_a_popover, {
                          trigger: "hover",
                          position: "bottom"
                        }, {
                          content: withCtx(() => [
                            createVNode("div", {
                              class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                              onClick: ($event) => changeWishSort("1", "\u9884\u6D4B\u6982\u7387\u6392\u5E8F")
                            }, " \u6309\u9884\u6D4B\u6982\u7387\u6392\u5E8F ", 8, ["onClick"]),
                            createVNode("div", {
                              class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                              onClick: ($event) => changeWishSort("2", "\u53BB\u5E74\u5F55\u53D6\u6392\u5E8F")
                            }, " \u6309\u53BB\u5E74\u5F55\u53D6\u6392\u5E8F ", 8, ["onClick"])
                          ]),
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                              createVNode("i", { class: "iconfont icon-paixu fontSize mr-[3px]" }),
                              createTextVNode("\u6392\u5E8F ")
                            ])
                          ]),
                          _: 1
                        }),
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
                        }),
                        createVNode("div", {
                          class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer",
                          onClick: clearWish
                        }, [
                          createVNode("i", { class: "iconfont icon-shanchu fontSize mr-[3px]" }),
                          createTextVNode("\u6E05\u7A7A ")
                        ]),
                        !unref(form).searchName ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: ["leading-[32px] px-[10px] rounded-[4px] cursor-pointer", {
                            "bg-[#7C92FF] text-white": unref(form).draggable,
                            "bg-[#F4F6F8]": !unref(form).draggable
                          }],
                          onClick: ($event) => unref(form).draggable = !unref(form).draggable
                        }, [
                          createVNode("i", { class: "iconfont icon-tuodong fontSize mr-[3px]" }),
                          createTextVNode(toDisplayString(unref(form).draggable ? "\u62D6\u52A8\u5B8C\u6210" : "\u62D6\u52A8"), 1)
                        ], 10, ["onClick"])) : createCommentVNode("", true)
                      ]),
                      _: 1
                    }),
                    !unref(form).draggable ? (openBlock(), createBlock(_component_a_input, {
                      key: 0,
                      class: "ml-[30px]",
                      style: { width: "260px" },
                      modelValue: unref(form).searchName,
                      "onUpdate:modelValue": ($event) => unref(form).searchName = $event,
                      modelModifiers: { trim: true },
                      placeholder: "\u641C\u7D22\u5173\u952E\u8BCD",
                      onClear: ($event) => unref(volunteerRefresh)(),
                      onChange: ($event) => unref(volunteerRefresh)(),
                      "allow-clear": ""
                    }, {
                      prefix: withCtx(() => [
                        createVNode(_component_icon_search)
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onClear", "onChange"])) : createCommentVNode("", true)
                  ]),
                  createVNode("div", { class: "flex items-center justify-end ml-[50px]" }, [
                    createVNode("div", { class: "w-[6px] h-[6px] rounded-[50%] bg-[#7C92FF] mx-[5px]" }),
                    createVNode("div", null, "\u51B2" + toDisplayString(unref(volunteerData).csum), 1),
                    createVNode("div", { class: "w-[6px] h-[6px] rounded-[50%] bg-[#5AB9FF] mx-[5px]" }),
                    createVNode("div", null, "\u7A33" + toDisplayString(unref(volunteerData).wsum), 1),
                    createVNode("div", { class: "w-[6px] h-[6px] rounded-[50%] bg-[#FFA864] mx-[5px]" }),
                    createVNode("div", null, "\u4FDD" + toDisplayString(unref(volunteerData).bsum), 1)
                  ])
                ]),
                createVNode("div", { class: "flex-1 overflow-auto no-scrollbar" }, [
                  props.data.isSchoolGroup === "1" ? (openBlock(), createBlock(_component_zs_choice_major_table, {
                    key: 0,
                    data: { list: unref(volunteerData).list, year: unref(volunteerData).year },
                    loading: unref(volunteerStatus) === "pending",
                    draggable: unref(form).draggable ? true : false,
                    onDraggable: draggableTable
                  }, {
                    operateTitle: withCtx(({ record }) => [
                      createVNode("div", { class: "font-bold" }, "\u64CD\u4F5C")
                    ]),
                    operate: withCtx(({ record }) => [
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
                            max: unref(form).zyTop,
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
                                onClick: ($event) => setSelectRow(
                                  {
                                    yxid: record.yxid,
                                    yxmc: record.yxmc,
                                    yxdm: record.yxdm,
                                    wid: unref(form).id
                                  },
                                  () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                                )
                              }, [
                                createVNode("i", { class: "iconfont icon-zengjia text-[#7C92FF]" })
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024)
                    ]),
                    empty: withCtx(() => [
                      createVNode(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                        default: withCtx(() => [
                          createTextVNode(" \u6682\u65E0\u5FD7\u613F ")
                        ]),
                        _: 1
                      }, 8, ["url"])
                    ]),
                    _: 1
                  }, 8, ["data", "loading", "draggable"])) : createCommentVNode("", true),
                  props.data.isSchoolGroup === "2" ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "bg-[#F9F9F9] text-[#333] text-[14px] flex items-center leading-[48px] font-bold text-center" }, [
                      createVNode("div", { class: "w-[70px]" }, "\u6982\u7387"),
                      createVNode("div", { class: "flex-1" }, "\u62DB\u751F\u9662\u6821"),
                      createVNode("div", { class: "w-[100px]" }, toDisplayString(unref(volunteerData).year) + "\u8BA1\u5212", 1),
                      createVNode("div", { class: "w-[70px]" }),
                      createVNode("div", { class: "w-[80px]" }, toDisplayString(unref(volunteerData).year) + "\u5E74\u4EFD", 1),
                      createVNode("div", { class: "w-[80px]" }, toDisplayString(unref(volunteerData).year - 1) + "\u5E74\u4EFD", 1),
                      createVNode("div", { class: "w-[80px]" }, toDisplayString(unref(volunteerData).year - 2) + "\u5E74\u4EFD", 1),
                      createVNode("div", { class: "w-[150px]" }, "\u64CD\u4F5C")
                    ]),
                    createVNode(_component_a_spin, {
                      loading: unref(volunteerStatus) === "pending",
                      class: "w-full min-h-[60vh]"
                    }, {
                      default: withCtx(() => [
                        unref(volunteerData).list.length ? (openBlock(), createBlock("div", { key: 0 }, [
                          createVNode(_component_zs_draggable_list, {
                            "default-list": unref(volunteerData).list,
                            "item-class": "bg-[#F9F9F9]",
                            isDraggable: unref(form).draggable,
                            onDraggable: draggableTableGroup
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
                                            max: unref(form).zyTop,
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
                                              onClick: ($event) => setSelectRow(
                                                {
                                                  yxid: record.yxid,
                                                  yxmc: record.yxmc,
                                                  yxdm: record.yxdm,
                                                  wid: unref(form).id
                                                },
                                                () => unref(setActiveKey)(
                                                  "ZsChoiceEligibleMajorModal"
                                                )
                                              )
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
                                isDraggable: unref(form).draggable,
                                onDraggable: draggableTableGroup
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
                                              max: unref(form).zyTop,
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
                                                onClick: ($event) => setSelectRow(
                                                  {
                                                    yxid: record2.yxid,
                                                    yxmc: record2.yxmc,
                                                    yxdm: record2.yxdm,
                                                    wid: unref(form).id
                                                  },
                                                  () => unref(setActiveKey)(
                                                    "ZsChoiceEligibleMajorModal"
                                                  )
                                                )
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
                              }, 1032, ["default-list", "isDraggable"])
                            ]),
                            _: 1
                          }, 8, ["default-list", "isDraggable"])
                        ])) : (openBlock(), createBlock("div", { key: 1 }, [
                          createVNode(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                            default: withCtx(() => [
                              createTextVNode(" \u6682\u65E0\u5FD7\u613F ")
                            ]),
                            _: 1
                          }, 8, ["url"])
                        ]))
                      ]),
                      _: 1
                    }, 8, ["loading"])
                  ])) : createCommentVNode("", true)
                ])
              ]),
              unref(activeKey) === "ZsChoiceChangeNameModal" ? (openBlock(), createBlock(_component_zs_choice_change_name_modal, {
                key: 0,
                name: unref(form).zybt,
                id: unref(form).id,
                onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null)),
                onSuccess: changeNameSuccess
              }, null, 8, ["name", "id", "onCancel"])) : createCommentVNode("", true),
              unref(activeKey) === "ZsChoiceEligibleMajorModal" ? (openBlock(), createBlock(_component_zs_choice_eligible_major_modal, {
                key: 1,
                data: unref(form).selectRow,
                onCancelVolunteer: cancelVolunteer,
                onAddVolunteer: addVolunteer,
                onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
              }, null, 8, ["data", "onCancel"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceVolunteerListModal/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_23 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-865a9d2e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    useHead({
      title: "\u667A\u80FD\u9009\u5FD7\u613F"
    });
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { userInfo } = useUser();
    const route = useRoute();
    const { warningModal } = useModal();
    const { setGlobalLoading } = useLoading();
    const { provinceCityList, getDictionValue } = useWebsiteInformation();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const { form } = useForm(() => ({
      curModule: "major",
      // 当前模块是专业还是院校
      selectRow: {},
      // 当前数据
      cwbList: [
        { value: "", label: "\u51B2\u7A33\u4FDD" },
        { value: "1", label: "\u51B2" },
        { value: "2", label: "\u7A33" },
        { value: "3", label: "\u4FDD" }
      ],
      // 冲稳保列表
      cwb: "",
      // 冲稳保
      name: "",
      // 搜索条件
      collapse: false,
      // 是否折叠查询条件
      yxlx: [""],
      // 院校类型
      bxxz: [""],
      // 办学性质
      slbq: [""],
      // 实力标签
      tsbq: [""],
      // 特色标签
      sortType: "DESC",
      // 默认降序
      sortName: "wpm.ygzdf",
      widErr: false,
      // 防止用户修改志愿id
      curWishInfo: {}
      //
    }));
    const province = ref(userInfo.value.province);
    const score = ref(userInfo.value.score);
    const wid = ref(route.query.wid);
    const topScore = computed(() => {
      var _a2;
      const list = (_a2 = volunteerInfo.value) == null ? void 0 : _a2.scoreRange;
      if (Array.isArray(list) && list.length > 0) {
        return Math.min(...list);
      }
      return null;
    });
    const lowestScore = computed(() => {
      var _a2;
      const list = (_a2 = volunteerInfo.value) == null ? void 0 : _a2.scoreRange;
      if (Array.isArray(list) && list.length > 0) {
        return Math.max(...list);
      }
      return null;
    });
    const selectCityList = computed(() => {
      var _a3;
      var _a2, _b, _c;
      return (_a3 = (_c = (_b = (_a2 = sfList.value) == null ? void 0 : _a2.filter((item) => item.selectList)) == null ? void 0 : _b.flatMap((o) => o.selectList)) == null ? void 0 : _c.map((v) => v)) != null ? _a3 : [];
    });
    const selectZylList = computed(() => {
      var _a3;
      var _a2, _b, _c;
      return (_a3 = (_c = (_b = (_a2 = xkmlList.value) == null ? void 0 : _a2.filter((item) => item.selectList)) == null ? void 0 : _b.flatMap((o) => o.selectList)) == null ? void 0 : _c.map((v) => v)) != null ? _a3 : [];
    });
    const tagList = computed(() => {
      var _a3, _b2;
      var _a2, _b, _c, _d, _e;
      const cityList = (_a3 = (_b = (_a2 = selectCityList.value) == null ? void 0 : _a2.map((item) => {
        const foundItem = findListByKey(sfList.value, "code", item);
        if (foundItem) {
          return {
            value: foundItem.code,
            label: foundItem.name,
            key: "city"
            // 唯一key
          };
        }
        return null;
      })) == null ? void 0 : _b.filter((item) => item !== null)) != null ? _a3 : [];
      const zylList = (_b2 = (_c = selectZylList.value) == null ? void 0 : _c.map((item) => {
        return {
          value: item,
          label: item,
          key: "zyl"
          // 唯一key
        };
      })) != null ? _b2 : [];
      return [
        ...cityList,
        ...getMappedList(form.value.yxlx, "YXLX", "yxlx"),
        // 院校类型
        ...getMappedList(form.value.bxxz, "BXXZ", "bxxz"),
        // 办学性质
        ...getMappedList(form.value.slbq, "SLBQ", "slbq"),
        // 实力标签
        ...getMappedList(form.value.tsbq, "TSBQ", "tsbq"),
        // 特色标签
        (_e = (_d = ccData.value) == null ? void 0 : _d.options) == null ? void 0 : _e.find((o) => {
          var _a32;
          return o.value === ((_a32 = ccData.value) == null ? void 0 : _a32.cc);
        }),
        ...zylList
      ].filter((o) => o != "");
    });
    const smallestMissingNumber = computed(() => {
      var _a3, _b2;
      var _a2, _b, _c;
      const list = volunteerInfo.value.isSchoolGroup === "1" ? (_a3 = (_b = (_a2 = filledInData.value) == null ? void 0 : _a2.list) == null ? void 0 : _b.map((o) => o.zySeq)) != null ? _a3 : [] : (_b2 = (_c = form.value.curWishInfo.children) == null ? void 0 : _c.map((o) => o)) != null ? _b2 : [];
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
    const chartOption = computed(() => {
      return {
        tooltip: {
          trigger: "item"
        },
        series: [
          {
            type: "pie",
            radius: ["40%", "70%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 2
            },
            label: {
              normal: {
                formatter: function(params) {
                  return "{a|" + params.name + "}\n{hr|}\n{b|" + params.value + "}";
                },
                rich: {
                  // 这里不需要预先定义a、hr、b样式，因为它们将在formatter中动态构建
                }
              }
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 20,
                // 你可以根据需要调整字体大小
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: true
              // 显示标签引导线
            },
            data: [
              {
                value: form.value.curModule === "major" ? majorOdds.value.csum : schoolOdds.value.csum,
                name: "\u51B2",
                itemStyle: { color: "#7C92FF" },
                tip: "\u51B2\u523A"
              },
              {
                value: form.value.curModule === "major" ? majorOdds.value.wsum : schoolOdds.value.wsum,
                name: "\u7A33",
                itemStyle: { color: "#5AB9FF" },
                tip: "\u7A33\u59A5"
              },
              {
                value: form.value.curModule === "major" ? majorOdds.value.bsum : schoolOdds.value.bsum,
                name: "\u4FDD",
                itemStyle: { color: "#FFA864" },
                tip: "\u4FDD\u5E95"
              }
            ]
          }
        ]
      };
    });
    const {
      pagination: majorPagination,
      resetData: majorResetData,
      onPageChange: majorPageChange,
      onPageSizeChange: majorPageSizeChange
    } = usePagination(() => {
      majorRefresh();
    });
    const {
      pagination: schoolPagination,
      resetData: schoolResetData,
      onPageChange: schoolPageChange,
      onPageSizeChange: schoolPageSizeChange
    } = usePagination(() => {
      schoolRefresh();
    });
    const majorResetDebounce = useDebounceFn(() => {
      majorResetData();
    }, 500);
    const schoolResetDebounce = useDebounceFn(() => {
      schoolResetData();
    }, 500);
    const majorCwbDebounce = useDebounceFn(() => {
      majorOddsRefresh();
    }, 500);
    const schoolCwbDebounce = useDebounceFn(() => {
      schoolOddsRefresh();
    }, 500);
    const schoolFilterData = ref([
      {
        title: "\u9662\u6821\u7C7B\u578B",
        key: "yxlx",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("YXLX")]
      },
      {
        title: "\u529E\u5B66\u6027\u8D28",
        key: "bxxz",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("BXXZ")]
      },
      {
        title: "\u5B9E\u529B\u6807\u7B7E",
        key: "slbq",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("SLBQ")]
      },
      {
        title: "\u7279\u8272\u6807\u7B7E",
        key: "tsbq",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("TSBQ")]
      }
    ]);
    const { data: volunteerInfo, refresh: volunteerInfoRefresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "volunteerInfo",
      async () => {
        var _a3, _b2, _c2;
        var _a2, _b, _c;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_VOLUNTEER_INFO, {
          body: {
            id: (_a3 = wid.value) != null ? _a3 : ""
            // 志愿表id
          }
        });
        return {
          ...res == null ? void 0 : res.data,
          zyTop: ((_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.zyTop) * 1,
          error: res.data === "\u672A\u77E5\u5FD7\u613F" ? true : false,
          scoreRange: [((_b2 = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.score) != null ? _b2 : 0) + 30, ((_c2 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.score) != null ? _c2 : 0) - 50]
        };
      },
      {
        default: () => {
          return {
            scoreRange: [0, 0],
            error: false,
            zyTop: 0,
            id: ""
          };
        },
        watch: [wid, province, score]
      }
    )), __temp = await __temp, __restore(), __temp);
    const { data: ccData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("ccList", async () => {
      var _a3, _b;
      var _a2;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
      const ccList = (_a3 = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.map((item) => {
        return {
          ...item,
          value: item.levelCode,
          label: item.levelName,
          key: "cc"
          // 唯一key
        };
      })) != null ? _a3 : [];
      return {
        title: "\u4E13\u4E1A\u5C42\u6B21",
        key: "cc",
        isShow: true,
        multiple: false,
        options: ccList,
        cc: (_b = ccList[0].value) != null ? _b : ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: xkmlList, refresh: xkmlRefresh } = useAsyncData(
      "xkmlList",
      async () => {
        var _a3;
        var _a2, _b;
        const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_XK_ML_LIST, {
          body: {
            cc: (_a2 = ccData.value) == null ? void 0 : _a2.cc
          }
        });
        const xkmlList2 = [
          { xkml: "\u4E0D\u9650", xkmldm: "" },
          ...(_a3 = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.map((o) => {
            return {
              ...o,
              selectList: [],
              indeterminate: false,
              // 半选状态
              checkedAll: false,
              // 是否全选
              popoverVisible: false
              // 可见状态
            };
          })) != null ? _a3 : []
        ];
        return xkmlList2;
      },
      {
        default: () => []
      }
    );
    const { data: sfList, refresh: sfRefresh } = useAsyncData(
      "sfList",
      async () => {
        const list = [
          { name: "\u4E0D\u9650", code: "" },
          ...provinceCityList.value.map((o) => {
            return {
              ...o,
              selectList: [],
              indeterminate: false,
              // 半选状态
              checkedAll: false,
              // 是否全选
              popoverVisible: false
              // 可见状态
            };
          })
        ];
        return list;
      },
      {
        default: () => []
      }
    );
    const { data: filledInData, refresh: filledInRefresh } = useAsyncData(
      "filledIn",
      async () => {
        var _a3, _b;
        var _a2;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
          body: {
            id: volunteerInfo.value.id
            // 志愿表id
          }
        });
        const specialList = volunteerInfo.value.isSchoolGroup === "1" ? res == null ? void 0 : res.data : groupByAndMergeChildArrays(res == null ? void 0 : res.data, "yxmc", "children", "zySeq");
        return {
          list: (_a3 = res.data) != null ? _a3 : [],
          specialList: specialList != null ? specialList : [],
          total: (_b = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.length) != null ? _b : 0
        };
      },
      {
        default: () => ({
          list: [],
          specialList: [],
          total: 0
        })
      }
    );
    const {
      data: majorOdds,
      status: majorOddsStatus,
      refresh: majorOddsRefresh
    } = useAsyncData(
      "majorOdds",
      async () => {
        var _a3, _b2, _c2, _d2;
        var _a2, _b, _c, _d, _e, _f;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_MAJOR_C_W_B_NUM, {
          body: {
            name: form.value.name,
            // 搜索条件
            yxsf: "",
            // 院校省份
            yxcs: selectCityList.value.join("/"),
            // 院校城市
            yxlx: form.value.yxlx.join("/"),
            // 院校类型
            bxxz: form.value.bxxz.join("/"),
            // 办学性质
            slbq: form.value.slbq.join("/"),
            // 实力标签
            tsbq: form.value.tsbq.join("/"),
            // 特色标签
            isXz: "",
            // 是否新招
            cc: (_a2 = ccData.value) == null ? void 0 : _a2.cc,
            // 专业层次
            xkml: "",
            // 专业门类
            zyl: selectZylList.value.join("/"),
            // 专业类
            startScore: topScore.value,
            // 最低分
            endScore: lowestScore.value,
            // 最高分
            type: "1",
            // 专业模块
            wid: (_b = volunteerInfo.value) == null ? void 0 : _b.id
            // 志愿表id
          },
          timeout: 60 * 1e3
        });
        return {
          totalSum: (_a3 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.totalSum) != null ? _a3 : 0,
          wsum: (_b2 = (_d = res == null ? void 0 : res.data) == null ? void 0 : _d.wsum) != null ? _b2 : 0,
          csum: (_c2 = (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.csum) != null ? _c2 : 0,
          bsum: (_d2 = (_f = res == null ? void 0 : res.data) == null ? void 0 : _f.bsum) != null ? _d2 : 0
        };
      },
      {
        default: () => ({
          totalSum: 0,
          wsum: 0,
          csum: 0,
          bsum: 0
        }),
        immediate: false
      }
    );
    const {
      data: majorData,
      status: majorStatus,
      refresh: majorRefresh
    } = useAsyncData(
      "majorList",
      async () => {
        var _a3, _b2, _c2;
        var _a2, _b, _c, _d, _e, _f, _g, _h;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_MAJOR_LIST, {
          body: {
            name: form.value.name,
            // 搜索条件
            yxsf: "",
            // 院校省份
            yxcs: selectCityList.value.join("/"),
            // 院校城市
            yxlx: form.value.yxlx.join("/"),
            // 院校类型
            bxxz: form.value.bxxz.join("/"),
            // 办学性质
            slbq: form.value.slbq.join("/"),
            // 实力标签
            tsbq: form.value.tsbq.join("/"),
            // 特色标签
            isXz: "",
            // 是否新招
            cc: (_a2 = ccData.value) == null ? void 0 : _a2.cc,
            // 专业层次
            xkml: "",
            // 专业门类
            zyl: selectZylList.value.join("/"),
            // 专业类
            startScore: topScore.value,
            // 最低分
            endScore: lowestScore.value,
            // 最高分
            cwb: form.value.cwb,
            // 冲稳保
            wid: (_b = volunteerInfo.value) == null ? void 0 : _b.id,
            // 志愿表id
            sortName: form.value.sortName,
            sortType: form.value.sortType,
            currentPage: majorPagination.value.current,
            pageSize: majorPagination.value.pageSize,
            pagingOrNot: 1
          },
          timeout: 60 * 1e3
        });
        return {
          list: (_a3 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.list) != null ? _a3 : [],
          total: (_b2 = (_d = res == null ? void 0 : res.data) == null ? void 0 : _d.totalCount) != null ? _b2 : 0,
          year: (_c2 = (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.year) != null ? _c2 : 2024,
          sortNameList: [
            { value: "wpm.ygzdf", label: "\u6309\u5F55\u53D6\u6982\u7387" },
            { value: "wpm.onezdwc", label: `\u6309${(_f = res == null ? void 0 : res.data) == null ? void 0 : _f.year}\u4F4D\u6B21` },
            { value: "wpm.twozdwc", label: `\u6309${((_g = res == null ? void 0 : res.data) == null ? void 0 : _g.year) - 1}\u4F4D\u6B21` },
            { value: "wpm.threezdwc", label: `\u6309${((_h = res == null ? void 0 : res.data) == null ? void 0 : _h.year) - 2}\u4F4D\u6B21` }
          ]
        };
      },
      {
        default: () => ({
          list: [],
          total: 0,
          year: 2024,
          sortNameList: []
        }),
        immediate: false
      }
    );
    const {
      data: schoolOdds,
      status: schoolOddsStatus,
      refresh: schoolOddsRefresh
    } = useAsyncData(
      "schoolOdds",
      async () => {
        var _a3, _b2, _c2, _d2;
        var _a2, _b, _c, _d, _e, _f;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_MAJOR_C_W_B_NUM, {
          body: {
            name: form.value.name,
            // 搜索条件
            yxsf: "",
            // 院校省份
            yxcs: selectCityList.value.join("/"),
            // 院校城市
            yxlx: form.value.yxlx.join("/"),
            // 院校类型
            bxxz: form.value.bxxz.join("/"),
            // 办学性质
            slbq: form.value.slbq.join("/"),
            // 实力标签
            tsbq: form.value.tsbq.join("/"),
            // 特色标签
            isXz: "",
            // 是否新招
            cc: (_a2 = ccData.value) == null ? void 0 : _a2.cc,
            // 专业层次
            xkml: "",
            // 专业门类
            zyl: selectZylList.value.join("/"),
            // 专业类
            startScore: topScore.value,
            // 最低分
            endScore: lowestScore.value,
            // 最高分
            type: "2",
            // 院校模块
            wid: (_b = volunteerInfo.value) == null ? void 0 : _b.id
            // 志愿表id
          },
          timeout: 60 * 1e3
        });
        return {
          totalSum: (_a3 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.totalSum) != null ? _a3 : 0,
          wsum: (_b2 = (_d = res == null ? void 0 : res.data) == null ? void 0 : _d.wsum) != null ? _b2 : 0,
          csum: (_c2 = (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.csum) != null ? _c2 : 0,
          bsum: (_d2 = (_f = res == null ? void 0 : res.data) == null ? void 0 : _f.bsum) != null ? _d2 : 0
        };
      },
      {
        default: () => ({
          totalSum: 0,
          wsum: 0,
          csum: 0,
          bsum: 0
        }),
        immediate: false
      }
    );
    const {
      data: schoolData,
      status: schoolStatus,
      refresh: schoolRefresh
    } = useAsyncData(
      "schoolList",
      async () => {
        var _a3, _b2, _c2;
        var _a2, _b, _c, _d, _e, _f, _g, _h;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_SCHOOL_LIST, {
          body: {
            name: form.value.name,
            // 搜索条件
            yxsf: "",
            // 院校省份
            yxcs: selectCityList.value.join("/"),
            // 院校城市
            yxlx: form.value.yxlx.join("/"),
            // 院校类型
            bxxz: form.value.bxxz.join("/"),
            // 办学性质
            slbq: form.value.slbq.join("/"),
            // 实力标签
            tsbq: form.value.tsbq.join("/"),
            // 特色标签
            isXz: "",
            // 是否新招
            cc: (_a2 = ccData.value) == null ? void 0 : _a2.cc,
            // 专业层次
            xkml: "",
            // 专业门类
            zyl: selectZylList.value.join("/"),
            // 专业类
            startScore: topScore.value,
            // 最低分
            endScore: lowestScore.value,
            // 最高分
            cwb: form.value.cwb,
            // 冲稳保
            wid: (_b = volunteerInfo.value) == null ? void 0 : _b.id,
            // 志愿表id
            sortName: form.value.sortName,
            sortType: form.value.sortType,
            currentPage: schoolPagination.value.current,
            pageSize: schoolPagination.value.pageSize,
            pagingOrNot: 1
          },
          timeout: 60 * 1e3
        });
        return {
          list: (_a3 = (_c = res == null ? void 0 : res.data) == null ? void 0 : _c.list) != null ? _a3 : [],
          total: (_b2 = (_d = res == null ? void 0 : res.data) == null ? void 0 : _d.totalCount) != null ? _b2 : 0,
          year: (_c2 = (_e = res == null ? void 0 : res.data) == null ? void 0 : _e.year) != null ? _c2 : 2024,
          sortNameList: [
            { value: "wpm.ygzdf", label: "\u6309\u5F55\u53D6\u6982\u7387" },
            { value: "wpm.onezdwc", label: `\u6309${(_f = res == null ? void 0 : res.data) == null ? void 0 : _f.year}\u4F4D\u6B21` },
            { value: "wpm.twozdwc", label: `\u6309${((_g = res == null ? void 0 : res.data) == null ? void 0 : _g.year) - 1}\u4F4D\u6B21` },
            { value: "wpm.threezdwc", label: `\u6309${((_h = res == null ? void 0 : res.data) == null ? void 0 : _h.year) - 2}\u4F4D\u6B21` }
          ]
        };
      },
      {
        default: () => ({
          list: [],
          total: 0,
          year: 2024,
          sortNameList: []
        }),
        immediate: false
      }
    );
    if (userInfo.value.score && !((_a = volunteerInfo == null ? void 0 : volunteerInfo.value) == null ? void 0 : _a.error)) {
      if (form.value.curModule === "major") {
        majorRefresh();
        majorOddsRefresh();
      } else {
        schoolOddsRefresh();
        schoolRefresh();
      }
    }
    const checkSchoolOrMajor = async () => {
      if (form.value.curModule === "major") {
        majorCwbDebounce();
        majorResetDebounce();
      } else {
        schoolCwbDebounce();
        schoolResetDebounce();
      }
    };
    const changeScoreSuccess = async () => {
      setSelectRow({}, () => setActiveKey(null));
      await volunteerInfoRefresh();
      checkSchoolOrMajor();
      filledInRefresh();
    };
    const volunteerListEvent = () => {
      checkSchoolOrMajor();
      filledInRefresh();
    };
    const handleCheckAll = (item, checked, key) => {
      item.checkedAll = checked;
      item.indeterminate = false;
      item.selectList = checked ? item.children.map((child) => child[key === "major" ? "zyl" : "code"]) : [];
      checkSchoolOrMajor();
    };
    const singleChoice = (item) => {
      const totalSelected = item.selectList.length;
      const totalItems = item.children.length;
      item.checkedAll = totalSelected === totalItems;
      item.indeterminate = totalSelected > 0 && totalSelected < totalItems;
      checkSchoolOrMajor();
    };
    const changePublicFilter = (val) => {
      form.value = {
        ...form.value,
        ...val
      };
      checkSchoolOrMajor();
    };
    const changeMajorFilter = async (val) => {
      var _a2;
      if (((_a2 = ccData.value) == null ? void 0 : _a2.cc) !== val.cc) {
        ccData.value.cc = val.cc;
        await xkmlRefresh();
        checkSchoolOrMajor();
      }
    };
    const changeCurModule = () => {
      form.value.cwb = "";
      form.value.name = "";
      checkSchoolOrMajor();
    };
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
    const setSortType = (type) => {
      form.value.sortType = type;
      checkSchoolOrMajor();
    };
    const setSortName = (type) => {
      form.value.sortName = type;
      checkSchoolOrMajor();
    };
    const fillVolunteer = async (row, wishSort) => {
      var _a2;
      const [err, res] = await $zsFetch(API_URLS.CHOICE.MAJOR_ADD_VOLUNTEER, {
        body: {
          id: row.id,
          wishId: (_a2 = volunteerInfo.value) == null ? void 0 : _a2.id,
          wishSort
        }
      });
      $zsMsg("success", res.data);
    };
    const cancelVolunteer = async (row) => {
      await fillVolunteer(row, row.wSort);
      row.wSort = "";
      filledInRefresh();
      if (activeKey.value === "ZsChoiceEligibleMajorModal" || row.isInit) {
        if (form.value.curModule === "major") {
          majorRefresh();
        } else {
          schoolRefresh();
        }
      }
    };
    const addVolunteer = async (row) => {
      var _a3;
      var _a2, _b, _c, _d, _e, _f;
      if (volunteerInfo.value.isSchoolGroup === "1") {
        if (smallestMissingNumber.value > ((_a2 = volunteerInfo.value) == null ? void 0 : _a2.zyTop)) {
          $zsMsg("waring", "\u8D85\u8FC7\u4E13\u4E1A\u586B\u62A5\u6570\u91CF");
          return;
        }
      } else {
        form.value.curWishInfo = (_a3 = (_b = filledInData.value) == null ? void 0 : _b.specialList.find((o) => o.yxmc === row.yxmc)) != null ? _a3 : {};
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
      if (activeKey.value === "ZsChoiceEligibleMajorModal" || row.isInit) {
        if (form.value.curModule === "major") {
          majorRefresh();
        } else {
          schoolRefresh();
        }
      }
    };
    const setSelectRow = (row, callBack) => {
      form.value.selectRow = row;
      if (callBack)
        callBack();
    };
    const getMappedList = (sourceArray, dictionaryKey, key) => {
      return sourceArray.map((o) => {
        const item = getDictionValue(dictionaryKey).find((item2) => item2.code === o);
        if (item) {
          return {
            value: item.value,
            label: item.label,
            key
            // 唯一key
          };
        } else {
          return null;
        }
      }).filter((item) => item !== null);
    };
    const findListByKey = (menuList, key, value) => {
      for (const item of menuList) {
        if (item[key] === value)
          return item;
        if (item.children) {
          const res = findListByKey(item.children, key, value);
          if (res)
            return res;
        }
      }
      return null;
    };
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c, _d, _e, _f, _g, _h;
      const _component_a_space = Space;
      const _component_a_tooltip = Tooltip;
      const _component_icon_down = IconDown;
      const _component_a_popover = Popover;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_a_button = Button;
      const _component_a_checkbox = Checkbox;
      const _component_a_checkbox_group = CheckboxGroup;
      const _component_a_grid = Grid;
      const _component_a_grid_item = GridItem;
      const _component_zs_select_filter = _sfc_main$5;
      const _component_a_tag = Tag;
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_client_only = __nuxt_component_1;
      const _component_zs_choice_major_table = __nuxt_component_16;
      const _component_icon_check = IconCheck;
      const _component_zs_no_data_small = _sfc_main$6;
      const _component_a_pagination = Pagination;
      const _component_zs_e_charts = _sfc_main$7;
      const _component_zs_choice_eligible_major_modal = __nuxt_component_21;
      const _component_zs_choice_academic_years_modal = __nuxt_component_22;
      const _component_zs_choice_volunteer_list_modal = __nuxt_component_23;
      const _component_zs_choice_change_name_modal = __nuxt_component_24;
      const _component_zs_choice_change_score_modal = __nuxt_component_2;
      const _component_zs_no_data = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1e9b8fb9>`);
      if (!((_a2 = unref(volunteerInfo)) == null ? void 0 : _a2.error)) {
        _push(`<!--[-->`);
        if (unref(userInfo).score) {
          _push(`<!--[--><div class="card-box-shadow" data-v-1e9b8fb9><div class="max-w-container mx-auto flex items-center justify-between h-[50px]" data-v-1e9b8fb9>`);
          _push(ssrRenderComponent(_component_a_space, { size: "large" }, {
            split: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<span class="w-[2px] h-[8px] text-[#999999]" data-v-1e9b8fb9${_scopeId}>|</span>`);
              } else {
                return [
                  createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                ];
              }
            }),
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              var _a3, _b2;
              if (_push2) {
                _push2(ssrRenderComponent(_component_a_tooltip, {
                  content: "\u70B9\u51FB\u4FEE\u6539\u540D\u79F0",
                  position: "top"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b3;
                    if (_push3) {
                      _push3(`<div class="text-[16px] font-bold cursor-pointer" data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.zybt))}</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "text-[16px] font-bold cursor-pointer",
                          onClick: ($event) => setSelectRow(
                            unref(volunteerInfo),
                            () => unref(setActiveKey)("ZsChoiceChangeNameModal")
                          )
                        }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(volunteerInfo)) == null ? void 0 : _b3.zybt)), 9, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_a_tooltip, {
                  content: "\u4FEE\u6539\u6210\u7EE9",
                  position: "top"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b3, _c2, _d2, _e2, _f2;
                    if (_push3) {
                      _push3(`<div class="text-[#666666] cursor-pointer" data-v-1e9b8fb9${_scopeId2}><span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.xk))}</span><span class="mx-[5px]" data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(volunteerInfo)) == null ? void 0 : _b3.score) + "\u5206")}</span><span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_c2 = unref(volunteerInfo)) == null ? void 0 : _c2.wc)) + "\u4F4D")}</span><i class="iconfont icon-chuangzuo ml-[5px]" data-v-1e9b8fb9${_scopeId2}></i></div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "text-[#666666] cursor-pointer",
                          onClick: ($event) => setSelectRow(
                            unref(volunteerInfo),
                            () => unref(setActiveKey)("ZsChoiceChangeScoreModal")
                          )
                        }, [
                          createVNode("span", null, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_d2 = unref(volunteerInfo)) == null ? void 0 : _d2.xk)), 1),
                          createVNode("span", { class: "mx-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_e2 = unref(volunteerInfo)) == null ? void 0 : _e2.score) + "\u5206"), 1),
                          createVNode("span", null, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_f2 = unref(volunteerInfo)) == null ? void 0 : _f2.wc)) + "\u4F4D"), 1),
                          createVNode("i", { class: "iconfont icon-chuangzuo ml-[5px]" })
                        ], 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_a_tooltip, {
                  content: "\u9009\u62E9\u6279\u6B21\u65B0\u5EFA\u5FD7\u613F\u8868",
                  position: "top"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b3;
                    if (_push3) {
                      _push3(`<div class="cursor-pointer" data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.pc))} `);
                      _push3(ssrRenderComponent(_component_icon_down, null, null, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: "cursor-pointer",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice/buildWish`)
                        }, [
                          createTextVNode(toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(volunteerInfo)) == null ? void 0 : _b3.pc)) + " ", 1),
                          createVNode(_component_icon_down)
                        ], 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(`<div class="text-[#7C92FF] cursor-pointer" data-v-1e9b8fb9${_scopeId}> \u65B0\u5EFA\u5FD7\u613F\u8868 </div><div class="text-[#7C92FF] cursor-pointer" data-v-1e9b8fb9${_scopeId}> \u6211\u7684\u5FD7\u613F\u8868 </div>`);
                if (((_a3 = unref(userInfo)) == null ? void 0 : _a3.vipStateValue) == "1") {
                  _push2(`<div class="text-[#7C92FF] cursor-pointer" data-v-1e9b8fb9${_scopeId}> \u67E5\u770B\u5FD7\u613F\u8868 </div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode(_component_a_tooltip, {
                    content: "\u70B9\u51FB\u4FEE\u6539\u540D\u79F0",
                    position: "top"
                  }, {
                    default: withCtx(() => {
                      var _a4;
                      return [
                        createVNode("div", {
                          class: "text-[16px] font-bold cursor-pointer",
                          onClick: ($event) => setSelectRow(
                            unref(volunteerInfo),
                            () => unref(setActiveKey)("ZsChoiceChangeNameModal")
                          )
                        }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.zybt)), 9, ["onClick"])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_a_tooltip, {
                    content: "\u4FEE\u6539\u6210\u7EE9",
                    position: "top"
                  }, {
                    default: withCtx(() => {
                      var _a4, _b3, _c2;
                      return [
                        createVNode("div", {
                          class: "text-[#666666] cursor-pointer",
                          onClick: ($event) => setSelectRow(
                            unref(volunteerInfo),
                            () => unref(setActiveKey)("ZsChoiceChangeScoreModal")
                          )
                        }, [
                          createVNode("span", null, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.xk)), 1),
                          createVNode("span", { class: "mx-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(volunteerInfo)) == null ? void 0 : _b3.score) + "\u5206"), 1),
                          createVNode("span", null, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_c2 = unref(volunteerInfo)) == null ? void 0 : _c2.wc)) + "\u4F4D"), 1),
                          createVNode("i", { class: "iconfont icon-chuangzuo ml-[5px]" })
                        ], 8, ["onClick"])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_a_tooltip, {
                    content: "\u9009\u62E9\u6279\u6B21\u65B0\u5EFA\u5FD7\u613F\u8868",
                    position: "top"
                  }, {
                    default: withCtx(() => {
                      var _a4;
                      return [
                        createVNode("div", {
                          class: "cursor-pointer",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice/buildWish`)
                        }, [
                          createTextVNode(toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.pc)) + " ", 1),
                          createVNode(_component_icon_down)
                        ], 8, ["onClick"])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode("div", {
                    class: "text-[#7C92FF] cursor-pointer",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice/buildWish`)
                  }, " \u65B0\u5EFA\u5FD7\u613F\u8868 ", 8, ["onClick"]),
                  createVNode("div", {
                    class: "text-[#7C92FF] cursor-pointer",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/personal?tab=myVolunteer`)
                  }, " \u6211\u7684\u5FD7\u613F\u8868 ", 8, ["onClick"]),
                  ((_b2 = unref(userInfo)) == null ? void 0 : _b2.vipStateValue) == "1" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-[#7C92FF] cursor-pointer",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice/detail?wid=${unref(volunteerInfo).id}`)
                  }, " \u67E5\u770B\u5FD7\u613F\u8868 ", 8, ["onClick"])) : createCommentVNode("", true)
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<div class="f-c-c" data-v-1e9b8fb9>`);
          _push(ssrRenderComponent(_component_a_popover, {
            trigger: "hover",
            position: "bottom"
          }, {
            content: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-1e9b8fb9${_scopeId}> \u5BFC\u51FAExcel(\u8868\u683C\u7248) </div><div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-1e9b8fb9${_scopeId}> \u5BFC\u51FAPdf(\u6253\u5370\u7248) </div>`);
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
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<div class="bg-[#F9F9F9] h-[40px] w-[40px] rounded-[8px] f-c-c cursor-pointer" data-v-1e9b8fb9${_scopeId}><i class="iconfont icon-shangchuan" data-v-1e9b8fb9${_scopeId}></i></div>`);
              } else {
                return [
                  createVNode("div", { class: "bg-[#F9F9F9] h-[40px] w-[40px] rounded-[8px] f-c-c cursor-pointer" }, [
                    createVNode("i", { class: "iconfont icon-shangchuan" })
                  ])
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`<div class="bg-[#7C92FF] p-[10px] h-[40px] rounded-[4px] leading-[40px] f-c-c ml-[10px] cursor-pointer text-white" data-v-1e9b8fb9><i class="iconfont icon-chenggong" data-v-1e9b8fb9></i><span class="ml-[5px]" data-v-1e9b8fb9>\u5DF2\u9009\u5FD7\u613F</span><span class="mx-[10px]" data-v-1e9b8fb9>|</span><span class="px-[10px] rounded-[20px] bg-[#B0BEFF] h-[18px] leading-[18px]" data-v-1e9b8fb9>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_b = unref(filledInData)) == null ? void 0 : _b.total, "0"))}</span></div></div></div></div><div class="max-w-container mx-auto" data-v-1e9b8fb9><div class="${ssrRenderClass([{
            "p-[10px]": !unref(form).collapse
          }, "border border-solid border-[#EDEDED] mt-[20px] rounded-[8px]"])}" data-v-1e9b8fb9><div class="${ssrRenderClass([{
            "bg-[#F9F9F9]": unref(form).collapse
          }, "flex"])}" data-v-1e9b8fb9><div class="${ssrRenderClass([{
            "	text-[#7C92FF] ml-[10px] mt-[10px] ": unref(form).collapse,
            "border-solid border border-[#EDEDED] ": !unref(form).collapse
          }, "flex justify-between items-center h-[38px] w-[280px] rounded-[4px] px-[10px] bg-[#F9F9F9] cursor-pointer"])}" data-v-1e9b8fb9><div class="text-[14px] font-bold" data-v-1e9b8fb9><span data-v-1e9b8fb9>\u7B5B\u9009\u9662\u6821</span><span class="mx-[4px]" data-v-1e9b8fb9>/</span><span data-v-1e9b8fb9>\u4E13\u4E1A</span></div><div data-v-1e9b8fb9>`);
          _push(ssrRenderComponent(_component_icon_down, null, null, _parent));
          _push(`</div></div><div class="${ssrRenderClass([{
            "p-[10px_10px]": unref(form).collapse,
            "border-b-0 ": !unref(form).collapse
          }, "flex items-center flex-1 border-b border-l border-solid border-[#EDEDED] rounded-[0px_8px_0px_0px] ml-[20px]"])}" data-v-1e9b8fb9><div class="${ssrRenderClass([{
            "ml-[20px]": !unref(form).collapse,
            "ml-[10px]": unref(form).collapse
          }, "w-full"])}" data-v-1e9b8fb9>`);
          _push(ssrRenderComponent(_component_a_input, {
            modelValue: unref(form).name,
            "onUpdate:modelValue": ($event) => unref(form).name = $event,
            modelModifiers: { trim: true },
            size: "large",
            class: "rounded-lg h-[38px]",
            placeholder: "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u9662\u6821\u6216\u4E13\u4E1A",
            "allow-clear": "",
            onChange: checkSchoolOrMajor,
            onClear: checkSchoolOrMajor
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
          _push(`</div>`);
          _push(ssrRenderComponent(_component_a_button, {
            type: "primary",
            size: "large",
            class: "openButton w-[120px] ml-[20px]",
            onClick: checkSchoolOrMajor
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
          if (unref(form).collapse) {
            _push(`<div class="bg-[#F9F9F9] rounded-[4px] p-[10px]" data-v-1e9b8fb9><div class="flex" data-v-1e9b8fb9><div class="text-[14px] mr-[15px] p-[5px_8px] text-[#606266]" data-v-1e9b8fb9> \u6240\u5728\u5730\u533A </div><ul class="flex flex-1 p-[0px] flex-row flex-wrap" data-v-1e9b8fb9><!--[-->`);
            ssrRenderList(unref(sfList), (item) => {
              _push(`<li class="flex items-center p-[5px_8px] mb-[5px] px-[6px] mr-[10px] text-[14px] cursor-pointer rounded-[4px] hover:text-[#7C92FF]" data-v-1e9b8fb9>`);
              if (item.name !== "\u4E0D\u9650") {
                _push(ssrRenderComponent(_component_a_popover, {
                  trigger: "click",
                  position: "bottom",
                  "popup-visible": item.popoverVisible,
                  "onUpdate:popupVisible": ($event) => item.popoverVisible = $event
                }, {
                  content: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_a_space, { direction: "vertical" }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(ssrRenderComponent(_component_a_checkbox, {
                              "model-value": item.checkedAll,
                              indeterminate: item.indeterminate,
                              onChange: (checked) => handleCheckAll(
                                item,
                                checked,
                                "school"
                              )
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`\u5168\u9009 `);
                                } else {
                                  return [
                                    createTextVNode("\u5168\u9009 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(ssrRenderComponent(_component_a_checkbox_group, {
                              modelValue: item.selectList,
                              "onUpdate:modelValue": ($event) => item.selectList = $event,
                              onChange: ($event) => singleChoice(item)
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(ssrRenderComponent(_component_a_grid, {
                                    cols: 4,
                                    colGap: 24,
                                    rowGap: 8
                                  }, {
                                    default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`<!--[-->`);
                                        ssrRenderList(item.children, (city) => {
                                          _push5(ssrRenderComponent(_component_a_grid_item, {
                                            key: city.id
                                          }, {
                                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                              if (_push6) {
                                                _push6(ssrRenderComponent(_component_a_checkbox, {
                                                  value: city.code
                                                }, {
                                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                    if (_push7) {
                                                      _push7(`${ssrInterpolate(city.name)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(city.name), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent6, _scopeId5));
                                              } else {
                                                return [
                                                  createVNode(_component_a_checkbox, {
                                                    value: city.code
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(city.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent5, _scopeId4));
                                        });
                                        _push5(`<!--]-->`);
                                      } else {
                                        return [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (city) => {
                                            return openBlock(), createBlock(_component_a_grid_item, {
                                              key: city.id
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_a_checkbox, {
                                                  value: city.code
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(city.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent4, _scopeId3));
                                } else {
                                  return [
                                    createVNode(_component_a_grid, {
                                      cols: 4,
                                      colGap: 24,
                                      rowGap: 8
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (city) => {
                                          return openBlock(), createBlock(_component_a_grid_item, {
                                            key: city.id
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_a_checkbox, {
                                                value: city.code
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(city.name), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          } else {
                            return [
                              createVNode(_component_a_checkbox, {
                                "model-value": item.checkedAll,
                                indeterminate: item.indeterminate,
                                onChange: (checked) => handleCheckAll(
                                  item,
                                  checked,
                                  "school"
                                )
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u5168\u9009 ")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "indeterminate", "onChange"]),
                              createVNode(_component_a_checkbox_group, {
                                modelValue: item.selectList,
                                "onUpdate:modelValue": ($event) => item.selectList = $event,
                                onChange: ($event) => singleChoice(item)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_grid, {
                                    cols: 4,
                                    colGap: 24,
                                    rowGap: 8
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (city) => {
                                        return openBlock(), createBlock(_component_a_grid_item, {
                                          key: city.id
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_a_checkbox, {
                                              value: city.code
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(city.name), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                      _push2(`<div class="flex items-center justify-end mt-[10px]" data-v-1e9b8fb9${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_a_space, { class: "cursor-pointer" }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<div class="rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]" data-v-1e9b8fb9${_scopeId2}> \u6E05\u7A7A </div><div class="rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]" data-v-1e9b8fb9${_scopeId2}> \u786E\u5B9A </div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]",
                                onClick: ($event) => handleCheckAll(
                                  item,
                                  false,
                                  "school"
                                )
                              }, " \u6E05\u7A7A ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]",
                                onClick: ($event) => item.popoverVisible = false
                              }, " \u786E\u5B9A ", 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                      _push2(`</div>`);
                    } else {
                      return [
                        createVNode(_component_a_space, { direction: "vertical" }, {
                          default: withCtx(() => [
                            createVNode(_component_a_checkbox, {
                              "model-value": item.checkedAll,
                              indeterminate: item.indeterminate,
                              onChange: (checked) => handleCheckAll(
                                item,
                                checked,
                                "school"
                              )
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u5168\u9009 ")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "indeterminate", "onChange"]),
                            createVNode(_component_a_checkbox_group, {
                              modelValue: item.selectList,
                              "onUpdate:modelValue": ($event) => item.selectList = $event,
                              onChange: ($event) => singleChoice(item)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_grid, {
                                  cols: 4,
                                  colGap: 24,
                                  rowGap: 8
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (city) => {
                                      return openBlock(), createBlock(_component_a_grid_item, {
                                        key: city.id
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_a_checkbox, {
                                            value: city.code
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(city.name), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "flex items-center justify-end mt-[10px]" }, [
                          createVNode(_component_a_space, { class: "cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]",
                                onClick: ($event) => handleCheckAll(
                                  item,
                                  false,
                                  "school"
                                )
                              }, " \u6E05\u7A7A ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]",
                                onClick: ($event) => item.popoverVisible = false
                              }, " \u786E\u5B9A ", 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ];
                    }
                  }),
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    var _a3, _b2;
                    if (_push2) {
                      _push2(`<div class="${ssrRenderClass({
                        "bg-[#F2F5FF] text-[#7C92FF]": (_a3 = item.selectList) == null ? void 0 : _a3.length
                      })}" data-v-1e9b8fb9${_scopeId}><span data-v-1e9b8fb9${_scopeId}>${ssrInterpolate(item.name)}</span>`);
                      _push2(ssrRenderComponent(_component_icon_down, {
                        class: "ml-[2px]",
                        size: "12"
                      }, null, _parent2, _scopeId));
                      _push2(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: {
                            "bg-[#F2F5FF] text-[#7C92FF]": (_b2 = item.selectList) == null ? void 0 : _b2.length
                          }
                        }, [
                          createVNode("span", null, toDisplayString(item.name), 1),
                          createVNode(_component_icon_down, {
                            class: "ml-[2px]",
                            size: "12"
                          })
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<span class="${ssrRenderClass({
                  "bg-[#F2F5FF] text-[#7C92FF]": !unref(selectCityList).length
                })}" data-v-1e9b8fb9>\u4E0D\u9650</span>`);
              }
              _push(`</li>`);
            });
            _push(`<!--]--></ul></div>`);
            _push(ssrRenderComponent(_component_zs_select_filter, {
              data: unref(schoolFilterData),
              "default-values": unref(form),
              onChange: changePublicFilter
            }, null, _parent));
            _push(`<div class="border-solid border-t border-[#EDEDED] py-[10px]" data-v-1e9b8fb9>`);
            _push(ssrRenderComponent(_component_zs_select_filter, {
              data: [unref(ccData)],
              "default-values": {
                cc: (_c = unref(ccData)) == null ? void 0 : _c.cc
              },
              onChange: changeMajorFilter
            }, null, _parent));
            _push(`<div class="flex" data-v-1e9b8fb9><div class="text-[14px] mr-[15px] p-[5px_8px] text-[#606266]" data-v-1e9b8fb9> \u4E13\u4E1A\u95E8\u7C7B </div><ul class="flex flex-1 p-[0px] flex-row flex-wrap" data-v-1e9b8fb9><!--[-->`);
            ssrRenderList(unref(xkmlList), (item) => {
              _push(`<li class="flex items-center p-[5px_6px] mb-[5px] mr-[10px] text-[14px] cursor-pointer rounded-[4px] hover:text-[#7C92FF]" data-v-1e9b8fb9>`);
              if (item.xkml !== "\u4E0D\u9650") {
                _push(ssrRenderComponent(_component_a_popover, {
                  trigger: "click",
                  position: "bottom",
                  "popup-visible": item.popoverVisible,
                  "onUpdate:popupVisible": ($event) => item.popoverVisible = $event
                }, {
                  content: withCtx((_, _push2, _parent2, _scopeId) => {
                    if (_push2) {
                      _push2(ssrRenderComponent(_component_a_space, { direction: "vertical" }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(ssrRenderComponent(_component_a_checkbox, {
                              "model-value": item.checkedAll,
                              indeterminate: item.indeterminate,
                              onChange: (checked) => handleCheckAll(
                                item,
                                checked,
                                "major"
                              )
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(`\u5168\u9009 `);
                                } else {
                                  return [
                                    createTextVNode("\u5168\u9009 ")
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                            _push3(ssrRenderComponent(_component_a_checkbox_group, {
                              modelValue: item.selectList,
                              "onUpdate:modelValue": ($event) => item.selectList = $event,
                              onChange: ($event) => singleChoice(item)
                            }, {
                              default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                                if (_push4) {
                                  _push4(ssrRenderComponent(_component_a_grid, {
                                    cols: 4,
                                    colGap: 24,
                                    rowGap: 8
                                  }, {
                                    default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`<!--[-->`);
                                        ssrRenderList(item.children, (child) => {
                                          _push5(ssrRenderComponent(_component_a_grid_item, {
                                            key: child.zyldm
                                          }, {
                                            default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                              if (_push6) {
                                                _push6(ssrRenderComponent(_component_a_checkbox, {
                                                  value: child.zyl
                                                }, {
                                                  default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                                    if (_push7) {
                                                      _push7(`${ssrInterpolate(child.zyl)}`);
                                                    } else {
                                                      return [
                                                        createTextVNode(toDisplayString(child.zyl), 1)
                                                      ];
                                                    }
                                                  }),
                                                  _: 2
                                                }, _parent6, _scopeId5));
                                              } else {
                                                return [
                                                  createVNode(_component_a_checkbox, {
                                                    value: child.zyl
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(child.zyl), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"])
                                                ];
                                              }
                                            }),
                                            _: 2
                                          }, _parent5, _scopeId4));
                                        });
                                        _push5(`<!--]-->`);
                                      } else {
                                        return [
                                          (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                            return openBlock(), createBlock(_component_a_grid_item, {
                                              key: child.zyldm
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_a_checkbox, {
                                                  value: child.zyl
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(child.zyl), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"])
                                              ]),
                                              _: 2
                                            }, 1024);
                                          }), 128))
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent4, _scopeId3));
                                } else {
                                  return [
                                    createVNode(_component_a_grid, {
                                      cols: 4,
                                      colGap: 24,
                                      rowGap: 8
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                          return openBlock(), createBlock(_component_a_grid_item, {
                                            key: child.zyldm
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_a_checkbox, {
                                                value: child.zyl
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(child.zyl), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["value"])
                                            ]),
                                            _: 2
                                          }, 1024);
                                        }), 128))
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent3, _scopeId2));
                          } else {
                            return [
                              createVNode(_component_a_checkbox, {
                                "model-value": item.checkedAll,
                                indeterminate: item.indeterminate,
                                onChange: (checked) => handleCheckAll(
                                  item,
                                  checked,
                                  "major"
                                )
                              }, {
                                default: withCtx(() => [
                                  createTextVNode("\u5168\u9009 ")
                                ]),
                                _: 2
                              }, 1032, ["model-value", "indeterminate", "onChange"]),
                              createVNode(_component_a_checkbox_group, {
                                modelValue: item.selectList,
                                "onUpdate:modelValue": ($event) => item.selectList = $event,
                                onChange: ($event) => singleChoice(item)
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_grid, {
                                    cols: 4,
                                    colGap: 24,
                                    rowGap: 8
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                        return openBlock(), createBlock(_component_a_grid_item, {
                                          key: child.zyldm
                                        }, {
                                          default: withCtx(() => [
                                            createVNode(_component_a_checkbox, {
                                              value: child.zyl
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(child.zyl), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["value"])
                                          ]),
                                          _: 2
                                        }, 1024);
                                      }), 128))
                                    ]),
                                    _: 2
                                  }, 1024)
                                ]),
                                _: 2
                              }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                      _push2(`<div class="flex items-center justify-end mt-[10px]" data-v-1e9b8fb9${_scopeId}>`);
                      _push2(ssrRenderComponent(_component_a_space, { class: "cursor-pointer" }, {
                        default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                          if (_push3) {
                            _push3(`<div class="rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]" data-v-1e9b8fb9${_scopeId2}> \u6E05\u7A7A </div><div class="rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]" data-v-1e9b8fb9${_scopeId2}> \u786E\u5B9A </div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]",
                                onClick: ($event) => handleCheckAll(
                                  item,
                                  false,
                                  "major"
                                )
                              }, " \u6E05\u7A7A ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]",
                                onClick: ($event) => item.popoverVisible = false
                              }, " \u786E\u5B9A ", 8, ["onClick"])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent2, _scopeId));
                      _push2(`</div>`);
                    } else {
                      return [
                        createVNode(_component_a_space, { direction: "vertical" }, {
                          default: withCtx(() => [
                            createVNode(_component_a_checkbox, {
                              "model-value": item.checkedAll,
                              indeterminate: item.indeterminate,
                              onChange: (checked) => handleCheckAll(
                                item,
                                checked,
                                "major"
                              )
                            }, {
                              default: withCtx(() => [
                                createTextVNode("\u5168\u9009 ")
                              ]),
                              _: 2
                            }, 1032, ["model-value", "indeterminate", "onChange"]),
                            createVNode(_component_a_checkbox_group, {
                              modelValue: item.selectList,
                              "onUpdate:modelValue": ($event) => item.selectList = $event,
                              onChange: ($event) => singleChoice(item)
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_grid, {
                                  cols: 4,
                                  colGap: 24,
                                  rowGap: 8
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(item.children, (child) => {
                                      return openBlock(), createBlock(_component_a_grid_item, {
                                        key: child.zyldm
                                      }, {
                                        default: withCtx(() => [
                                          createVNode(_component_a_checkbox, {
                                            value: child.zyl
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(child.zyl), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["value"])
                                        ]),
                                        _: 2
                                      }, 1024);
                                    }), 128))
                                  ]),
                                  _: 2
                                }, 1024)
                              ]),
                              _: 2
                            }, 1032, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          _: 2
                        }, 1024),
                        createVNode("div", { class: "flex items-center justify-end mt-[10px]" }, [
                          createVNode(_component_a_space, { class: "cursor-pointer" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]",
                                onClick: ($event) => handleCheckAll(
                                  item,
                                  false,
                                  "major"
                                )
                              }, " \u6E05\u7A7A ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]",
                                onClick: ($event) => item.popoverVisible = false
                              }, " \u786E\u5B9A ", 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024)
                        ])
                      ];
                    }
                  }),
                  default: withCtx((_, _push2, _parent2, _scopeId) => {
                    var _a3, _b2;
                    if (_push2) {
                      _push2(`<div class="${ssrRenderClass({
                        "bg-[#F2F5FF] text-[#7C92FF]": (_a3 = item.selectList) == null ? void 0 : _a3.length
                      })}" data-v-1e9b8fb9${_scopeId}><span data-v-1e9b8fb9${_scopeId}>${ssrInterpolate(item.xkml)}</span>`);
                      _push2(ssrRenderComponent(_component_icon_down, {
                        class: "ml-[2px]",
                        size: "12"
                      }, null, _parent2, _scopeId));
                      _push2(`</div>`);
                    } else {
                      return [
                        createVNode("div", {
                          class: {
                            "bg-[#F2F5FF] text-[#7C92FF]": (_b2 = item.selectList) == null ? void 0 : _b2.length
                          }
                        }, [
                          createVNode("span", null, toDisplayString(item.xkml), 1),
                          createVNode(_component_icon_down, {
                            class: "ml-[2px]",
                            size: "12"
                          })
                        ], 2)
                      ];
                    }
                  }),
                  _: 2
                }, _parent));
              } else {
                _push(`<span class="${ssrRenderClass({
                  "bg-[#F2F5FF] text-[#7C92FF]": !unref(selectZylList).length
                })}" data-v-1e9b8fb9>\u4E0D\u9650</span>`);
              }
              _push(`</li>`);
            });
            _push(`<!--]--></ul></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(tagList).length) {
            _push(`<div class="${ssrRenderClass([{ "mt-[10px]": !unref(form).collapse }, "bg-[#EDEDED] flex p-[10px_10px_5px]"])}" data-v-1e9b8fb9><div class="mr-[20px] leading-[25px]" data-v-1e9b8fb9> \u7B5B\u9009(<span class="text-[#7C92FF]" data-v-1e9b8fb9>${ssrInterpolate(unref(tagList).length)}</span>) </div><div class="flex-1" data-v-1e9b8fb9><!--[-->`);
            ssrRenderList(unref(tagList), (tag, index2) => {
              _push(ssrRenderComponent(_component_a_tag, {
                key: index2,
                color: "#FFFFFF",
                class: "mr-[5px] mb-[5px] !text-[#333]"
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`${ssrInterpolate(tag == null ? void 0 : tag.label)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(tag == null ? void 0 : tag.label), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent));
            });
            _push(`<!--]--></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><div class="flex justify-between items-center mt-[25px]" data-v-1e9b8fb9><div data-v-1e9b8fb9>`);
          _push(ssrRenderComponent(_component_a_radio_group, {
            modelValue: unref(form).cwb,
            "onUpdate:modelValue": ($event) => unref(form).cwb = $event,
            class: "bg-[#F9F9F9]",
            onChange: ($event) => unref(form).curModule === "major" ? unref(majorResetDebounce)() : unref(schoolResetDebounce)()
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`<!--[-->`);
                ssrRenderList(unref(form).cwbList, (tab) => {
                  _push2(ssrRenderComponent(_component_a_radio, {
                    value: tab.value
                  }, {
                    radio: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="${ssrRenderClass([{
                          "bg-[#7C92FF] text-white rounded-[4px]": checked
                        }, "text-center px-[10px] min-w-[120px] leading-[48px]"])}" data-v-1e9b8fb9${_scopeId2}><span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(tab.label)}</span>`);
                        if (unref(form).curModule === "major") {
                          _push3(`<span class="text-[18px] font-bold" data-v-1e9b8fb9${_scopeId2}>`);
                          if (tab.label === "\u51B2\u7A33\u4FDD") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                              unref(majorOdds).totalSum,
                              "0"
                            ))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "\u51B2") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).csum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "\u7A33") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).wsum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "\u4FDD") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).bsum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        if (unref(form).curModule === "school") {
                          _push3(`<span class="text-[18px] font-bold" data-v-1e9b8fb9${_scopeId2}>`);
                          if (tab.label === "\u51B2\u7A33\u4FDD") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                              unref(schoolOdds).totalSum,
                              "0"
                            ))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "\u51B2") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).csum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "\u7A33") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).wsum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "\u4FDD") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).bsum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(`</span>`);
                        } else {
                          _push3(`<!---->`);
                        }
                        _push3(`</div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: ["text-center px-[10px] min-w-[120px] leading-[48px]", {
                              "bg-[#7C92FF] text-white rounded-[4px]": checked
                            }]
                          }, [
                            createVNode("span", null, toDisplayString(tab.label), 1),
                            unref(form).curModule === "major" ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-[18px] font-bold"
                            }, [
                              tab.label === "\u51B2\u7A33\u4FDD" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                unref(majorOdds).totalSum,
                                "0"
                              )), 1)) : createCommentVNode("", true),
                              tab.label === "\u51B2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).csum, "0")), 1)) : createCommentVNode("", true),
                              tab.label === "\u7A33" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).wsum, "0")), 1)) : createCommentVNode("", true),
                              tab.label === "\u4FDD" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).bsum, "0")), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            unref(form).curModule === "school" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-[18px] font-bold"
                            }, [
                              tab.label === "\u51B2\u7A33\u4FDD" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                unref(schoolOdds).totalSum,
                                "0"
                              )), 1)) : createCommentVNode("", true),
                              tab.label === "\u51B2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).csum, "0")), 1)) : createCommentVNode("", true),
                              tab.label === "\u7A33" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).wsum, "0")), 1)) : createCommentVNode("", true),
                              tab.label === "\u4FDD" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).bsum, "0")), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true)
                          ], 2)
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                });
                _push2(`<!--]-->`);
              } else {
                return [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(form).cwbList, (tab) => {
                    return openBlock(), createBlock(_component_a_radio, {
                      key: tab,
                      value: tab.value
                    }, {
                      radio: withCtx(({ checked }) => [
                        createVNode("div", {
                          class: ["text-center px-[10px] min-w-[120px] leading-[48px]", {
                            "bg-[#7C92FF] text-white rounded-[4px]": checked
                          }]
                        }, [
                          createVNode("span", null, toDisplayString(tab.label), 1),
                          unref(form).curModule === "major" ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-[18px] font-bold"
                          }, [
                            tab.label === "\u51B2\u7A33\u4FDD" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                              unref(majorOdds).totalSum,
                              "0"
                            )), 1)) : createCommentVNode("", true),
                            tab.label === "\u51B2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).csum, "0")), 1)) : createCommentVNode("", true),
                            tab.label === "\u7A33" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).wsum, "0")), 1)) : createCommentVNode("", true),
                            tab.label === "\u4FDD" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).bsum, "0")), 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          unref(form).curModule === "school" ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-[18px] font-bold"
                          }, [
                            tab.label === "\u51B2\u7A33\u4FDD" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                              unref(schoolOdds).totalSum,
                              "0"
                            )), 1)) : createCommentVNode("", true),
                            tab.label === "\u51B2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).csum, "0")), 1)) : createCommentVNode("", true),
                            tab.label === "\u7A33" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).wsum, "0")), 1)) : createCommentVNode("", true),
                            tab.label === "\u4FDD" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).bsum, "0")), 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true)
                        ], 2)
                      ]),
                      _: 2
                    }, 1032, ["value"]);
                  }), 128))
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div><div class="flex items-center" data-v-1e9b8fb9>`);
          _push(ssrRenderComponent(_component_client_only, null, {}, _parent));
          _push(ssrRenderComponent(_component_a_radio_group, {
            modelValue: unref(form).curModule,
            "onUpdate:modelValue": ($event) => unref(form).curModule = $event,
            type: "button",
            class: "ml-[20px]",
            onChange: changeCurModule
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(ssrRenderComponent(_component_a_radio, { value: "major" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u4E13\u4E1A`);
                    } else {
                      return [
                        createTextVNode("\u4E13\u4E1A")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_a_radio, { value: "school" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`\u9662\u6821`);
                    } else {
                      return [
                        createTextVNode("\u9662\u6821")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_a_radio, { value: "major" }, {
                    default: withCtx(() => [
                      createTextVNode("\u4E13\u4E1A")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_radio, { value: "school" }, {
                    default: withCtx(() => [
                      createTextVNode("\u9662\u6821")
                    ]),
                    _: 1
                  })
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div></div>`);
          if (unref(form).curModule === "major") {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_zs_choice_major_table, {
              data: {
                list: ((_d = unref(userInfo)) == null ? void 0 : _d.vipStateValue) != "1" ? unref(majorData).list.splice(0, 3) : unref(majorData).list,
                year: unref(majorData).year
              },
              loading: unref(majorStatus) === "pending",
              class: "mt-[20px]"
            }, {
              operateTitle: withCtx(({ record }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_a_popover, {
                    trigger: "hover",
                    position: "br"
                  }, {
                    content: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex" data-v-1e9b8fb9${_scopeId2}><div data-v-1e9b8fb9${_scopeId2}><!--[-->`);
                        ssrRenderList(unref(majorData).sortNameList, (item) => {
                          _push3(`<div class="${ssrRenderClass([{
                            "text-[#7C92FF]": item.value === unref(form).sortName
                          }, "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"])}" data-v-1e9b8fb9${_scopeId2}>`);
                          if (item.value === unref(form).sortName) {
                            _push3(ssrRenderComponent(_component_icon_check, null, null, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(` ${ssrInterpolate(item.label)}</div>`);
                        });
                        _push3(`<!--]--></div><div class="flex cursor-pointer ml-[20px]" data-v-1e9b8fb9${_scopeId2}><div class="${ssrRenderClass([{
                          "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "ASC"
                        }, "w-[34px] h-[28px] leading-[28px] text-center"])}" data-v-1e9b8fb9${_scopeId2}> \u5347\u5E8F </div><div class="${ssrRenderClass([{
                          "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                        }, "w-[34px] h-[28px] leading-[28px] text-center ml-[5px]"])}" data-v-1e9b8fb9${_scopeId2}> \u964D\u5E8F </div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(majorData).sortNameList, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.value,
                                  class: ["leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer", {
                                    "text-[#7C92FF]": item.value === unref(form).sortName
                                  }],
                                  onClick: ($event) => setSortName(item.value)
                                }, [
                                  item.value === unref(form).sortName ? (openBlock(), createBlock(_component_icon_check, { key: 0 })) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString(item.label), 1)
                                ], 10, ["onClick"]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "flex cursor-pointer ml-[20px]" }, [
                              createVNode("div", {
                                class: ["w-[34px] h-[28px] leading-[28px] text-center", {
                                  "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "ASC"
                                }],
                                onClick: ($event) => setSortType("ASC")
                              }, " \u5347\u5E8F ", 10, ["onClick"]),
                              createVNode("div", {
                                class: ["w-[34px] h-[28px] leading-[28px] text-center ml-[5px]", {
                                  "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                                }],
                                onClick: ($event) => setSortType("DESC")
                              }, " \u964D\u5E8F ", 10, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" data-v-1e9b8fb9${_scopeId2}><div data-v-1e9b8fb9${_scopeId2}>\u6392\u5E8F</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" }, [
                            createVNode("div", null, "\u6392\u5E8F")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_a_popover, {
                      trigger: "hover",
                      position: "br"
                    }, {
                      content: withCtx(() => [
                        createVNode("div", { class: "flex" }, [
                          createVNode("div", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(majorData).sortNameList, (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.value,
                                class: ["leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer", {
                                  "text-[#7C92FF]": item.value === unref(form).sortName
                                }],
                                onClick: ($event) => setSortName(item.value)
                              }, [
                                item.value === unref(form).sortName ? (openBlock(), createBlock(_component_icon_check, { key: 0 })) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(item.label), 1)
                              ], 10, ["onClick"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex cursor-pointer ml-[20px]" }, [
                            createVNode("div", {
                              class: ["w-[34px] h-[28px] leading-[28px] text-center", {
                                "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "ASC"
                              }],
                              onClick: ($event) => setSortType("ASC")
                            }, " \u5347\u5E8F ", 10, ["onClick"]),
                            createVNode("div", {
                              class: ["w-[34px] h-[28px] leading-[28px] text-center ml-[5px]", {
                                "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                              }],
                              onClick: ($event) => setSortType("DESC")
                            }, " \u964D\u5E8F ", 10, ["onClick"])
                          ])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" }, [
                          createVNode("div", null, "\u6392\u5E8F")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              operate: withCtx(({ record }, _push2, _parent2, _scopeId) => {
                var _a3, _b2;
                if (_push2) {
                  if (((_a3 = unref(userInfo)) == null ? void 0 : _a3.vipStateValue) == "1") {
                    _push2(`<!--[--><div class="${ssrRenderClass([{
                      "border-solid border border-[#7C92FF] text-[#7C92FF]": !record.wSort,
                      " bg-[#7C92FF] text-[#FFFFFF]": record.wSort
                    }, "h-[32px] leading-[32px] rounded-[8px]"])}" data-v-1e9b8fb9${_scopeId}>${ssrInterpolate(record.wSort ? "\u5FD7\u613F" + record.wSort : "\u52A0\u5165\u5FD7\u613F")}</div>`);
                    _push2(ssrRenderComponent(_component_a_space, { size: "small" }, {
                      split: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<span class="w-[2px] h-[8px] text-[#999999]" data-v-1e9b8fb9${_scopeId2}>|</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                          ];
                        }
                      }),
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<span class="text-[12px] text-[#7C92FF]" data-v-1e9b8fb9${_scopeId2}>\u53EF\u62A5\u4E13\u4E1A</span><span class="text-[12px] text-[#7C92FF]" data-v-1e9b8fb9${_scopeId2}>\u9662\u6821\u5386\u5E74</span>`);
                        } else {
                          return [
                            createVNode("span", {
                              class: "text-[12px] text-[#7C92FF]",
                              onClick: ($event) => {
                                var _a4;
                                return setSelectRow(
                                  {
                                    yxid: record.yxid,
                                    yxmc: record.yxmc,
                                    yxdm: record.yxdm,
                                    wid: (_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.id
                                  },
                                  () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                                );
                              }
                            }, "\u53EF\u62A5\u4E13\u4E1A", 8, ["onClick"]),
                            createVNode("span", {
                              class: "text-[12px] text-[#7C92FF]",
                              onClick: ($event) => setSelectRow(
                                {
                                  yxmc: record.yxmc,
                                  year: unref(majorData).year
                                },
                                () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                              )
                            }, "\u9662\u6821\u5386\u5E74", 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<!--]-->`);
                  } else {
                    _push2(ssrRenderComponent(_component_a_tooltip, { content: "\u5F00\u901A\u4F1A\u5458 \u5C0A\u4EAB\u586B\u62A5\u7279\u6743" }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="f-c-c" data-v-1e9b8fb9${_scopeId2}><i class="iconfont icon-suo text-[#7C92FF] fontIcon" data-v-1e9b8fb9${_scopeId2}></i></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "f-c-c" }, [
                              createVNode("i", { class: "iconfont icon-suo text-[#7C92FF] fontIcon" })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  }
                } else {
                  return [
                    ((_b2 = unref(userInfo)) == null ? void 0 : _b2.vipStateValue) == "1" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      createVNode("div", {
                        class: ["h-[32px] leading-[32px] rounded-[8px]", {
                          "border-solid border border-[#7C92FF] text-[#7C92FF]": !record.wSort,
                          " bg-[#7C92FF] text-[#FFFFFF]": record.wSort
                        }],
                        onClick: ($event) => record.wSort ? cancelVolunteer(record) : addVolunteer(record)
                      }, toDisplayString(record.wSort ? "\u5FD7\u613F" + record.wSort : "\u52A0\u5165\u5FD7\u613F"), 11, ["onClick"]),
                      createVNode(_component_a_space, { size: "small" }, {
                        split: withCtx(() => [
                          createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                        ]),
                        default: withCtx(() => [
                          createVNode("span", {
                            class: "text-[12px] text-[#7C92FF]",
                            onClick: ($event) => {
                              var _a4;
                              return setSelectRow(
                                {
                                  yxid: record.yxid,
                                  yxmc: record.yxmc,
                                  yxdm: record.yxdm,
                                  wid: (_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.id
                                },
                                () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                              );
                            }
                          }, "\u53EF\u62A5\u4E13\u4E1A", 8, ["onClick"]),
                          createVNode("span", {
                            class: "text-[12px] text-[#7C92FF]",
                            onClick: ($event) => setSelectRow(
                              {
                                yxmc: record.yxmc,
                                year: unref(majorData).year
                              },
                              () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                            )
                          }, "\u9662\u6821\u5386\u5E74", 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 64)) : (openBlock(), createBlock(_component_a_tooltip, {
                      key: 1,
                      content: "\u5F00\u901A\u4F1A\u5458 \u5C0A\u4EAB\u586B\u62A5\u7279\u6743"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "f-c-c" }, [
                          createVNode("i", { class: "iconfont icon-suo text-[#7C92FF] fontIcon" })
                        ])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              empty: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_zs_no_data_small)
                  ];
                }
              }),
              _: 1
            }, _parent));
            if (((_e = unref(userInfo)) == null ? void 0 : _e.vipStateValue) == "1") {
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
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (unref(form).curModule === "school") {
            _push(`<!--[-->`);
            _push(ssrRenderComponent(_component_zs_choice_major_table, {
              data: {
                list: ((_f = unref(userInfo)) == null ? void 0 : _f.vipStateValue) != "1" ? unref(schoolData).list.splice(0, 3) : unref(schoolData).list,
                year: unref(schoolData).year
              },
              loading: unref(schoolStatus) === "pending",
              isZymc: false,
              curModule: "school",
              class: "mt-[20px]"
            }, {
              operateTitle: withCtx(({ record }, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_a_popover, {
                    trigger: "hover",
                    position: "br"
                  }, {
                    content: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="flex" data-v-1e9b8fb9${_scopeId2}><div data-v-1e9b8fb9${_scopeId2}><!--[-->`);
                        ssrRenderList(unref(schoolData).sortNameList, (item) => {
                          _push3(`<div class="${ssrRenderClass([{
                            "text-[#7C92FF]": item.value === unref(form).sortName
                          }, "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"])}" data-v-1e9b8fb9${_scopeId2}>`);
                          if (item.value === unref(form).sortName) {
                            _push3(ssrRenderComponent(_component_icon_check, null, null, _parent3, _scopeId2));
                          } else {
                            _push3(`<!---->`);
                          }
                          _push3(` ${ssrInterpolate(item.label)}</div>`);
                        });
                        _push3(`<!--]--></div><div class="flex cursor-pointer ml-[20px]" data-v-1e9b8fb9${_scopeId2}><div class="${ssrRenderClass([{
                          "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "ASC"
                        }, "w-[34px] h-[28px] leading-[28px] text-center"])}" data-v-1e9b8fb9${_scopeId2}> \u5347\u5E8F </div><div class="${ssrRenderClass([{
                          "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                        }, "w-[34px] h-[28px] leading-[28px] text-center ml-[5px]"])}" data-v-1e9b8fb9${_scopeId2}> \u964D\u5E8F </div></div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex" }, [
                            createVNode("div", null, [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(schoolData).sortNameList, (item) => {
                                return openBlock(), createBlock("div", {
                                  key: item.value,
                                  class: ["leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer", {
                                    "text-[#7C92FF]": item.value === unref(form).sortName
                                  }],
                                  onClick: ($event) => setSortName(item.value)
                                }, [
                                  item.value === unref(form).sortName ? (openBlock(), createBlock(_component_icon_check, { key: 0 })) : createCommentVNode("", true),
                                  createTextVNode(" " + toDisplayString(item.label), 1)
                                ], 10, ["onClick"]);
                              }), 128))
                            ]),
                            createVNode("div", { class: "flex cursor-pointer ml-[20px]" }, [
                              createVNode("div", {
                                class: ["w-[34px] h-[28px] leading-[28px] text-center", {
                                  "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "ASC"
                                }],
                                onClick: ($event) => setSortType("ASC")
                              }, " \u5347\u5E8F ", 10, ["onClick"]),
                              createVNode("div", {
                                class: ["w-[34px] h-[28px] leading-[28px] text-center ml-[5px]", {
                                  "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                                }],
                                onClick: ($event) => setSortType("DESC")
                              }, " \u964D\u5E8F ", 10, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" data-v-1e9b8fb9${_scopeId2}><div data-v-1e9b8fb9${_scopeId2}>\u6392\u5E8F</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" }, [
                            createVNode("div", null, "\u6392\u5E8F")
                          ])
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_a_popover, {
                      trigger: "hover",
                      position: "br"
                    }, {
                      content: withCtx(() => [
                        createVNode("div", { class: "flex" }, [
                          createVNode("div", null, [
                            (openBlock(true), createBlock(Fragment, null, renderList(unref(schoolData).sortNameList, (item) => {
                              return openBlock(), createBlock("div", {
                                key: item.value,
                                class: ["leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer", {
                                  "text-[#7C92FF]": item.value === unref(form).sortName
                                }],
                                onClick: ($event) => setSortName(item.value)
                              }, [
                                item.value === unref(form).sortName ? (openBlock(), createBlock(_component_icon_check, { key: 0 })) : createCommentVNode("", true),
                                createTextVNode(" " + toDisplayString(item.label), 1)
                              ], 10, ["onClick"]);
                            }), 128))
                          ]),
                          createVNode("div", { class: "flex cursor-pointer ml-[20px]" }, [
                            createVNode("div", {
                              class: ["w-[34px] h-[28px] leading-[28px] text-center", {
                                "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "ASC"
                              }],
                              onClick: ($event) => setSortType("ASC")
                            }, " \u5347\u5E8F ", 10, ["onClick"]),
                            createVNode("div", {
                              class: ["w-[34px] h-[28px] leading-[28px] text-center ml-[5px]", {
                                "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                              }],
                              onClick: ($event) => setSortType("DESC")
                            }, " \u964D\u5E8F ", 10, ["onClick"])
                          ])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" }, [
                          createVNode("div", null, "\u6392\u5E8F")
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              operate: withCtx(({ record }, _push2, _parent2, _scopeId) => {
                var _a3, _b2;
                if (_push2) {
                  if (((_a3 = unref(userInfo)) == null ? void 0 : _a3.vipStateValue) == "1") {
                    _push2(`<!--[-->`);
                    if (unref(volunteerInfo).isSchoolGroup === "1") {
                      _push2(`<div class="${ssrRenderClass([{
                        "border-solid border border-[#7C92FF] text-[#7C92FF]": !record.wSort,
                        " bg-[#7C92FF] text-[#FFFFFF]": record.wSort
                      }, "h-[32px] leading-[32px] rounded-[8px]"])}" data-v-1e9b8fb9${_scopeId}>${ssrInterpolate(record.wSort ? "\u5DF2\u52A0\u5165\u4E13\u4E1A" + record.wSort : "\u52A0\u5165\u5FD7\u613F")}</div>`);
                    } else {
                      _push2(`<div class="h-[32px] leading-[32px] rounded-[8px] z-10 border-solid border border-[#B0BEFF]" data-v-1e9b8fb9${_scopeId}>`);
                      if (record.yxSort) {
                        _push2(`<div class="flex items-center" data-v-1e9b8fb9${_scopeId}><div class="flex-1 bg-[#7C92FF] text-white rounded-[8px_0px_0px_8px]" data-v-1e9b8fb9${_scopeId}> \u5FD7\u613F${ssrInterpolate(record.yxSort)}</div><div class="flex-1" data-v-1e9b8fb9${_scopeId}>\u4E13\u4E1A${ssrInterpolate(record.wSort)}</div></div>`);
                      } else {
                        _push2(`<div data-v-1e9b8fb9${_scopeId}> \u53EF\u586B\u4E13\u4E1A${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.mcount, "0"))}</div>`);
                      }
                      _push2(`</div>`);
                    }
                    _push2(ssrRenderComponent(_component_a_space, { size: "small" }, {
                      split: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<span class="w-[2px] h-[8px] text-[#999999]" data-v-1e9b8fb9${_scopeId2}>|</span>`);
                        } else {
                          return [
                            createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                          ];
                        }
                      }),
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<span class="text-[12px] text-[#7C92FF]" data-v-1e9b8fb9${_scopeId2}>\u53EF\u62A5\u4E13\u4E1A</span><span class="text-[12px] text-[#7C92FF]" data-v-1e9b8fb9${_scopeId2}>\u9662\u6821\u5386\u5E74</span>`);
                        } else {
                          return [
                            createVNode("span", {
                              class: "text-[12px] text-[#7C92FF]",
                              onClick: ($event) => {
                                var _a4;
                                return setSelectRow(
                                  {
                                    yxid: record.yxid,
                                    yxmc: record.yxmc,
                                    yxdm: record.yxdm,
                                    wid: (_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.id
                                  },
                                  () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                                );
                              }
                            }, "\u53EF\u62A5\u4E13\u4E1A", 8, ["onClick"]),
                            createVNode("span", {
                              class: "text-[12px] text-[#7C92FF]",
                              onClick: ($event) => setSelectRow(
                                {
                                  yxmc: record.yxmc,
                                  year: unref(schoolData).year
                                },
                                () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                              )
                            }, "\u9662\u6821\u5386\u5E74", 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<!--]-->`);
                  } else {
                    _push2(ssrRenderComponent(_component_a_tooltip, { content: "\u5F00\u901A\u4F1A\u5458 \u5C0A\u4EAB\u586B\u62A5\u7279\u6743" }, {
                      default: withCtx((_, _push3, _parent3, _scopeId2) => {
                        if (_push3) {
                          _push3(`<div class="f-c-c" data-v-1e9b8fb9${_scopeId2}><i class="iconfont icon-suo text-[#7C92FF] fontIcon" data-v-1e9b8fb9${_scopeId2}></i></div>`);
                        } else {
                          return [
                            createVNode("div", { class: "f-c-c" }, [
                              createVNode("i", { class: "iconfont icon-suo text-[#7C92FF] fontIcon" })
                            ])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                  }
                } else {
                  return [
                    ((_b2 = unref(userInfo)) == null ? void 0 : _b2.vipStateValue) == "1" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                      unref(volunteerInfo).isSchoolGroup === "1" ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: ["h-[32px] leading-[32px] rounded-[8px]", {
                          "border-solid border border-[#7C92FF] text-[#7C92FF]": !record.wSort,
                          " bg-[#7C92FF] text-[#FFFFFF]": record.wSort
                        }],
                        onClick: ($event) => {
                          var _a4;
                          return setSelectRow(
                            {
                              yxid: record.yxid,
                              yxmc: record.yxmc,
                              yxdm: record.yxdm,
                              wid: (_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.id
                            },
                            () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                          );
                        }
                      }, toDisplayString(record.wSort ? "\u5DF2\u52A0\u5165\u4E13\u4E1A" + record.wSort : "\u52A0\u5165\u5FD7\u613F"), 11, ["onClick"])) : (openBlock(), createBlock("div", {
                        key: 1,
                        class: "h-[32px] leading-[32px] rounded-[8px] z-10 border-solid border border-[#B0BEFF]",
                        onClick: ($event) => {
                          var _a4;
                          return setSelectRow(
                            {
                              yxid: record.yxid,
                              yxmc: record.yxmc,
                              yxdm: record.yxdm,
                              wid: (_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.id
                            },
                            () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                          );
                        }
                      }, [
                        record.yxSort ? (openBlock(), createBlock("div", {
                          key: 0,
                          class: "flex items-center"
                        }, [
                          createVNode("div", { class: "flex-1 bg-[#7C92FF] text-white rounded-[8px_0px_0px_8px]" }, " \u5FD7\u613F" + toDisplayString(record.yxSort), 1),
                          createVNode("div", { class: "flex-1" }, "\u4E13\u4E1A" + toDisplayString(record.wSort), 1)
                        ])) : (openBlock(), createBlock("div", { key: 1 }, " \u53EF\u586B\u4E13\u4E1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.mcount, "0")), 1))
                      ], 8, ["onClick"])),
                      createVNode(_component_a_space, { size: "small" }, {
                        split: withCtx(() => [
                          createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
                        ]),
                        default: withCtx(() => [
                          createVNode("span", {
                            class: "text-[12px] text-[#7C92FF]",
                            onClick: ($event) => {
                              var _a4;
                              return setSelectRow(
                                {
                                  yxid: record.yxid,
                                  yxmc: record.yxmc,
                                  yxdm: record.yxdm,
                                  wid: (_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.id
                                },
                                () => unref(setActiveKey)("ZsChoiceEligibleMajorModal")
                              );
                            }
                          }, "\u53EF\u62A5\u4E13\u4E1A", 8, ["onClick"]),
                          createVNode("span", {
                            class: "text-[12px] text-[#7C92FF]",
                            onClick: ($event) => setSelectRow(
                              {
                                yxmc: record.yxmc,
                                year: unref(schoolData).year
                              },
                              () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                            )
                          }, "\u9662\u6821\u5386\u5E74", 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 64)) : (openBlock(), createBlock(_component_a_tooltip, {
                      key: 1,
                      content: "\u5F00\u901A\u4F1A\u5458 \u5C0A\u4EAB\u586B\u62A5\u7279\u6743"
                    }, {
                      default: withCtx(() => [
                        createVNode("div", { class: "f-c-c" }, [
                          createVNode("i", { class: "iconfont icon-suo text-[#7C92FF] fontIcon" })
                        ])
                      ]),
                      _: 1
                    }))
                  ];
                }
              }),
              empty: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
                } else {
                  return [
                    createVNode(_component_zs_no_data_small)
                  ];
                }
              }),
              _: 1
            }, _parent));
            if (((_g = unref(userInfo)) == null ? void 0 : _g.vipStateValue) == "1") {
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
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          } else {
            _push(`<!---->`);
          }
          if (((_h = unref(userInfo)) == null ? void 0 : _h.vipStateValue) != "1" && (unref(majorOddsStatus) === "success" || unref(schoolOddsStatus) === "success")) {
            _push(`<div class="h-[240px] vipBox flex items-center p-[10px_70px]" data-v-1e9b8fb9><div class="h-[220px] w-[400px]" data-v-1e9b8fb9>`);
            _push(ssrRenderComponent(_component_zs_e_charts, { options: unref(chartOption) }, null, _parent));
            _push(`</div><div class="ml-[50px]" data-v-1e9b8fb9><div class="text-[#7A3805] text-[36px]" data-v-1e9b8fb9>\u8BA9\u5B69\u5B50\u8D62\u5728\u5FD7\u613F\u586B\u62A5\u4E0A</div><div class="text-[#7A3805] mt-[10px]" data-v-1e9b8fb9><i class="iconfont icon-yixiangkan mr-[5px]" data-v-1e9b8fb9></i>\u9662\u6821\u4E13\u4E1A\u67E5\u8BE2 <i class="iconfont icon-yixiangkan mr-[5px]" data-v-1e9b8fb9></i>\u9662\u6821\u62DB\u5F55\u6570\u636E <i class="iconfont icon-yixiangkan mr-[5px]" data-v-1e9b8fb9></i>\u6D4B\u5F55\u53D6\u6982\u7387 </div><div class="mt-[20px] w-[296px] bg-[#FFA864] text-white text-[18px] leading-[47px] text-center rounded-[48px] cursor-pointer" data-v-1e9b8fb9> \u7ACB\u5373\u5F00\u901AVIP \u67E5\u770B\u5168\u90E8\u5FD7\u613F </div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<div class="flex items-center justify-center flex-col min-h-[60vh]" data-v-1e9b8fb9><h1 class="font-bold" data-v-1e9b8fb9>\u5B8C\u5584\u4FE1\u606F\u540E\uFF0C\u5C0A\u4EAB\u586B\u62A5\u7279\u6743</h1>`);
          _push(ssrRenderComponent(_component_a_button, {
            type: "primary",
            onClick: ($event) => unref(userInfo).userInfoModal = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`\u5B8C\u5584\u4FE1\u606F`);
              } else {
                return [
                  createTextVNode("\u5B8C\u5584\u4FE1\u606F")
                ];
              }
            }),
            _: 1
          }, _parent));
          _push(`</div>`);
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
        if (unref(activeKey) === "ZsChoiceAcademicYearsModal") {
          _push(ssrRenderComponent(_component_zs_choice_academic_years_modal, {
            data: unref(form).selectRow,
            onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeKey) === "ZsChoiceVolunteerListModal") {
          _push(ssrRenderComponent(_component_zs_choice_volunteer_list_modal, {
            data: unref(volunteerInfo),
            onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null)),
            onChangeName: unref(volunteerInfoRefresh),
            onCancelVolunteer: cancelVolunteer,
            onAddVolunteer: addVolunteer,
            onInit: volunteerListEvent
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeKey) === "ZsChoiceChangeNameModal") {
          _push(ssrRenderComponent(_component_zs_choice_change_name_modal, {
            name: unref(volunteerInfo).zybt,
            id: unref(volunteerInfo).id,
            onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null)),
            onSuccess: () => {
              setSelectRow({}, () => unref(setActiveKey)(null)), unref(volunteerInfoRefresh)();
            }
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        if (unref(activeKey) === "ZsChoiceChangeScoreModal") {
          _push(ssrRenderComponent(_component_zs_choice_change_score_modal, {
            data: unref(form).selectRow,
            isRequest: true,
            onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null)),
            onSuccess: changeScoreSuccess
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`<!--]-->`);
      } else {
        _push(ssrRenderComponent(_component_zs_no_data, null, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div data-v-1e9b8fb9${_scopeId}>\u7CDF\u7CD5\uFF0C\u9875\u9762\u597D\u50CF\u6CA1\u627E\u5230</div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/choice/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e9b8fb9"]]);

export { index as default };
//# sourceMappingURL=index-a3fcef2b.mjs.map
