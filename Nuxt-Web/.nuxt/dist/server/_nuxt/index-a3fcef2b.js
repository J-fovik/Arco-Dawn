import { S as Space } from "./index-8bcd588e.js";
import { T as Tooltip } from "./index-5f48af9c.js";
import { P as Popover } from "./index-a533a6fc.js";
import { b as Input, a as IconSearch, I as IconDown } from "./index-dd449d78.js";
import { B as Button } from "./use-teleport-container-1599a5a4.js";
import { S as Spin, C as Checkbox, a as CheckboxGroup } from "./index-11d38f35.js";
import { G as Grid, a as GridItem } from "./index-4ecc34e0.js";
import { _ as _sfc_main$6 } from "./index-3e511c39.js";
import { b as InputNumber, T as Tag } from "./index-08fdf206.js";
import { a as RadioGroup, R as Radio } from "./index-63900e07.js";
import { A as API_URLS, f as useNuxtApp, e as useAsyncData, u as useHead, b as useUser, g as useRoute, d as useWebsiteInformation, n as navigateTo, _ as __nuxt_component_1 } from "../server.mjs";
import { _ as __nuxt_component_16, a as _sfc_main$5, b as __nuxt_component_12, c as __nuxt_component_21, d as __nuxt_component_22 } from "./index-03a048b2.js";
import { _ as _sfc_main$7 } from "./index-33e76c07.js";
import { P as Pagination } from "./index-90aba227.js";
import { _ as _sfc_main$8 } from "./index-9a6e8b24.js";
import { _ as _sfc_main$3 } from "./index-3959f291.js";
import { _ as _sfc_main$4 } from "./index-d6ea50b9.js";
import { F as Form, a as FormItem } from "./index-d47379ff.js";
/* empty css                */import { defineComponent, mergeProps, withCtx, unref, createVNode, createTextVNode, withKeys, useSSRContext, withAsyncContext, toDisplayString, openBlock, createBlock, createCommentVNode, ref, computed, Fragment, renderList } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useBasicsState } from "./useBasicsState-8a7a18a4.js";
import { u as useForm, a as useModal } from "./useArco-b2247a5c.js";
import { ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrRenderAttrs, ssrRenderList } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
/* empty css                *//* empty css                *//* empty css                *//* empty css                */import { u as useLoading } from "./useLoading-35bd0ba7.js";
import { d as downloadBlob, t as textFormat, a as turnThousandth, g as groupByAndMergeChildArrays } from "./index-a008b2db.js";
import { _ as __nuxt_component_2 } from "./index-4dfe90df.js";
/* empty css                */import "./index-f6f6f2a5.js";
import { u as usePagination } from "./usePagination-23ca46d2.js";
import { N as NO_LIMIT_OPTIONS } from "./options-7ec13930.js";
import { useDebounceFn } from "@vueuse/core";
import { I as IconCheck } from "./index-0c9f2c90.js";
import "resize-observer-polyfill";
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
import "vue-draggable-plus";
import "./index-6a06d329.js";
import "./get-value-by-path-11166a95.js";
import "./use-children-components-d7e0e48f.js";
import "./index-cb5bd3b8.js";
import "./NuxtImg-9bcbe2bb.js";
import "echarts/core";
import "echarts/components";
import "echarts/charts";
import "echarts/features";
import "echarts/renderers";
import "scroll-into-view-if-needed";
import "b-validate";
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
        message: "请输入志愿表名称"
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
            _push2(`<div class="bg-white p-[0px_10px] rounded-[5px_5px] w-[500px]" data-v-6b406d8a${_scopeId}><div class="flex justify-between items-center cursor-pointer mb-[30px]" data-v-6b406d8a${_scopeId}><div class="text-[24px] font-bold" data-v-6b406d8a${_scopeId}>修改志愿表名称</div></div>`);
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
                          placeholder: "请输入志愿表名称"
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
                              placeholder: "请输入志愿表名称"
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
                            placeholder: "请输入志愿表名称"
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
                        _push4(`取消`);
                      } else {
                        return [
                          createTextVNode("取消")
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
                        _push4(`确定`);
                      } else {
                        return [
                          createTextVNode("确定")
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
                        createTextVNode("取消")
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
                        createTextVNode("确定")
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
                  createVNode("div", { class: "text-[24px] font-bold" }, "修改志愿表名称")
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
                            placeholder: "请输入志愿表名称"
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
                          createTextVNode("取消")
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
                          createTextVNode("确定")
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
const index_vue_vue_type_style_index_0_scoped_6b406d8a_lang = "";
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
      warningModal(`此操作将根据${tip}，操作后不可撤销?`, async (done) => {
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
      warningModal(`确定导出志愿表吗`, async (done) => {
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
      warningModal(`确定导出志愿表吗`, async (done) => {
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
      warningModal(`确定清空当前志愿吗`, async (done) => {
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
      warningModal(`确定删除当前志愿吗`, async (done) => {
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
      $zsMsg("success", "顺序调整成功!");
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
        $zsMsg("success", "顺序调整成功!");
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
        $zsMsg("success", "顺序调整成功!");
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
          list: ((_b = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.list) == null ? void 0 : _b.map((item) => {
            return {
              ...item,
              child: item.children,
              // children: null,
              isInput: false
            };
          })) ?? [],
          csum: ((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.csum) ?? 0,
          wsum: ((_d = res == null ? void 0 : res.data) == null ? void 0 : _d.wsum) ?? 0,
          bsum: ((_e = res == null ? void 0 : res.data) == null ? void 0 : _e.bsum) ?? 0,
          year: ((_f = res == null ? void 0 : res.data) == null ? void 0 : _f.year) ?? 2024
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
      const _component_zs_draggable_list = _sfc_main$5;
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
                  _push3(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" data-v-865a9d2e${_scopeId2}><i class="iconfont icon-chuangzuo fontSize mr-[3px]" data-v-865a9d2e${_scopeId2}></i>修改名称 </div>`);
                  _push3(ssrRenderComponent(_component_a_popover, {
                    trigger: "hover",
                    position: "bottom"
                  }, {
                    content: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-865a9d2e${_scopeId3}> 按预测概率排序 </div><div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-865a9d2e${_scopeId3}> 按去年录取排序 </div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                            onClick: ($event) => changeWishSort("1", "预测概率排序")
                          }, " 按预测概率排序 ", 8, ["onClick"]),
                          createVNode("div", {
                            class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                            onClick: ($event) => changeWishSort("2", "去年录取排序")
                          }, " 按去年录取排序 ", 8, ["onClick"])
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" data-v-865a9d2e${_scopeId3}><i class="iconfont icon-paixu fontSize mr-[3px]" data-v-865a9d2e${_scopeId3}></i>排序 </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                            createVNode("i", { class: "iconfont icon-paixu fontSize mr-[3px]" }),
                            createTextVNode("排序 ")
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
                        _push4(`<div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-865a9d2e${_scopeId3}> 导出Excel(表格版) </div><div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-865a9d2e${_scopeId3}> 导出Pdf(打印版) </div>`);
                      } else {
                        return [
                          createVNode("div", {
                            class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                            onClick: exportFile
                          }, " 导出Excel(表格版) "),
                          createVNode("div", {
                            class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                            onClick: openFile
                          }, " 导出Pdf(打印版) ")
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" data-v-865a9d2e${_scopeId3}><i class="iconfont icon-shangchuan fontSize mr-[3px]" data-v-865a9d2e${_scopeId3}></i>导出 </div>`);
                      } else {
                        return [
                          createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                            createVNode("i", { class: "iconfont icon-shangchuan fontSize mr-[3px]" }),
                            createTextVNode("导出 ")
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" data-v-865a9d2e${_scopeId2}><i class="iconfont icon-shanchu fontSize mr-[3px]" data-v-865a9d2e${_scopeId2}></i>清空 </div>`);
                  if (!unref(form).searchName) {
                    _push3(`<div class="${ssrRenderClass([{
                      "bg-[#7C92FF] text-white": unref(form).draggable,
                      "bg-[#F4F6F8]": !unref(form).draggable
                    }, "leading-[32px] px-[10px] rounded-[4px] cursor-pointer"])}" data-v-865a9d2e${_scopeId2}><i class="iconfont icon-tuodong fontSize mr-[3px]" data-v-865a9d2e${_scopeId2}></i>${ssrInterpolate(unref(form).draggable ? "拖动完成" : "拖动")}</div>`);
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
                      createTextVNode("修改名称 ")
                    ], 8, ["onClick"]),
                    createVNode(_component_a_popover, {
                      trigger: "hover",
                      position: "bottom"
                    }, {
                      content: withCtx(() => [
                        createVNode("div", {
                          class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                          onClick: ($event) => changeWishSort("1", "预测概率排序")
                        }, " 按预测概率排序 ", 8, ["onClick"]),
                        createVNode("div", {
                          class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                          onClick: ($event) => changeWishSort("2", "去年录取排序")
                        }, " 按去年录取排序 ", 8, ["onClick"])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                          createVNode("i", { class: "iconfont icon-paixu fontSize mr-[3px]" }),
                          createTextVNode("排序 ")
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
                        }, " 导出Excel(表格版) "),
                        createVNode("div", {
                          class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                          onClick: openFile
                        }, " 导出Pdf(打印版) ")
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                          createVNode("i", { class: "iconfont icon-shangchuan fontSize mr-[3px]" }),
                          createTextVNode("导出 ")
                        ])
                      ]),
                      _: 1
                    }),
                    createVNode("div", {
                      class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer",
                      onClick: clearWish
                    }, [
                      createVNode("i", { class: "iconfont icon-shanchu fontSize mr-[3px]" }),
                      createTextVNode("清空 ")
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
                      createTextVNode(toDisplayString(unref(form).draggable ? "拖动完成" : "拖动"), 1)
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
                placeholder: "搜索关键词",
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
            _push2(`</div><div class="flex items-center justify-end ml-[50px]" data-v-865a9d2e${_scopeId}><div class="w-[6px] h-[6px] rounded-[50%] bg-[#7C92FF] mx-[5px]" data-v-865a9d2e${_scopeId}></div><div data-v-865a9d2e${_scopeId}>冲${ssrInterpolate(unref(volunteerData).csum)}</div><div class="w-[6px] h-[6px] rounded-[50%] bg-[#5AB9FF] mx-[5px]" data-v-865a9d2e${_scopeId}></div><div data-v-865a9d2e${_scopeId}>稳${ssrInterpolate(unref(volunteerData).wsum)}</div><div class="w-[6px] h-[6px] rounded-[50%] bg-[#FFA864] mx-[5px]" data-v-865a9d2e${_scopeId}></div><div data-v-865a9d2e${_scopeId}>保${ssrInterpolate(unref(volunteerData).bsum)}</div></div></div><div class="flex-1 overflow-auto no-scrollbar" data-v-865a9d2e${_scopeId}>`);
            if (props.data.isSchoolGroup === "1") {
              _push2(ssrRenderComponent(_component_zs_choice_major_table, {
                data: { list: unref(volunteerData).list, year: unref(volunteerData).year },
                loading: unref(volunteerStatus) === "pending",
                draggable: unref(form).draggable ? true : false,
                onDraggable: draggableTable
              }, {
                operateTitle: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="font-bold" data-v-865a9d2e${_scopeId2}>操作</div>`);
                  } else {
                    return [
                      createVNode("div", { class: "font-bold" }, "操作")
                    ];
                  }
                }),
                operate: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div data-v-865a9d2e${_scopeId2}>`);
                    if (!record.isInput) {
                      _push3(ssrRenderComponent(_component_a_tooltip, { content: "输入序号" }, {
                        default: withCtx((_2, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" data-v-865a9d2e${_scopeId3}> 志愿 ${ssrInterpolate(record.zySeq)} `);
                            _push4(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent4, _scopeId3));
                            _push4(`</div>`);
                          } else {
                            return [
                              createVNode("div", { class: "border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                createTextVNode(" 志愿 " + toDisplayString(record.zySeq) + " ", 1),
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
                          _push4(ssrRenderComponent(_component_a_tooltip, { content: "删除" }, {
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
                          _push4(ssrRenderComponent(_component_a_tooltip, { content: "加入可报专业" }, {
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
                            createVNode(_component_a_tooltip, { content: "删除" }, {
                              default: withCtx(() => [
                                createVNode("div", {
                                  onClick: ($event) => deleteWish(record)
                                }, [
                                  createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                ], 8, ["onClick"])
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                          content: "输入序号"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                              createTextVNode(" 志愿 " + toDisplayString(record.zySeq) + " ", 1),
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
                          createVNode(_component_a_tooltip, { content: "删除" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                onClick: ($event) => deleteWish(record)
                              }, [
                                createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                          _push4(` 暂无志愿 `);
                        } else {
                          return [
                            createTextVNode(" 暂无志愿 ")
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(_component_zs_no_data, { url: "/images/no-volunteer.png" }, {
                        default: withCtx(() => [
                          createTextVNode(" 暂无志愿 ")
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
              _push2(`<div data-v-865a9d2e${_scopeId}><div class="bg-[#F9F9F9] text-[#333] text-[14px] flex items-center leading-[48px] font-bold text-center" data-v-865a9d2e${_scopeId}><div class="w-[70px]" data-v-865a9d2e${_scopeId}>概率</div><div class="flex-1" data-v-865a9d2e${_scopeId}>招生院校</div><div class="w-[100px]" data-v-865a9d2e${_scopeId}>${ssrInterpolate(unref(volunteerData).year)}计划</div><div class="w-[70px]" data-v-865a9d2e${_scopeId}></div><div class="w-[80px]" data-v-865a9d2e${_scopeId}>${ssrInterpolate(unref(volunteerData).year)}年份</div><div class="w-[80px]" data-v-865a9d2e${_scopeId}>${ssrInterpolate(unref(volunteerData).year - 1)}年份</div><div class="w-[80px]" data-v-865a9d2e${_scopeId}>${ssrInterpolate(unref(volunteerData).year - 2)}年份</div><div class="w-[150px]" data-v-865a9d2e${_scopeId}>操作</div></div>`);
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
                                    _push5(ssrRenderComponent(_component_a_tooltip, { content: "输入序号" }, {
                                      default: withCtx((_4, _push6, _parent6, _scopeId5) => {
                                        if (_push6) {
                                          _push6(`<div class="border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" data-v-865a9d2e${_scopeId5}> 院校 ${ssrInterpolate(record.yxSeq)} `);
                                          _push6(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent6, _scopeId5));
                                          _push6(`</div>`);
                                        } else {
                                          return [
                                            createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                              createTextVNode(" 院校 " + toDisplayString(record.yxSeq) + " ", 1),
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
                                  _push5(ssrRenderComponent(_component_a_tooltip, { content: "删除" }, {
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
                                  _push5(ssrRenderComponent(_component_a_tooltip, { content: "加入可报专业" }, {
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
                                          content: "输入序号"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                              createTextVNode(" 院校 " + toDisplayString(record.yxSeq) + " ", 1),
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
                                        createVNode(_component_a_tooltip, { content: "删除" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              onClick: ($event) => deleteWish(record)
                                            }, [
                                              createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                                          content: "输入序号"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                              createTextVNode(" 院校 " + toDisplayString(record.yxSeq) + " ", 1),
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
                                        createVNode(_component_a_tooltip, { content: "删除" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              onClick: ($event) => deleteWish(record)
                                            }, [
                                              createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                                          _push6(ssrRenderComponent(_component_a_tooltip, { content: "输入序号" }, {
                                            default: withCtx((_4, _push7, _parent7, _scopeId6) => {
                                              if (_push7) {
                                                _push7(`<div class="border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" data-v-865a9d2e${_scopeId6}> 专业 ${ssrInterpolate(record2.zySeq)} `);
                                                _push7(ssrRenderComponent(_component_icon_down, { class: "ml-[4px]" }, null, _parent7, _scopeId6));
                                                _push7(`</div>`);
                                              } else {
                                                return [
                                                  createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                                    createTextVNode(" 专业 " + toDisplayString(record2.zySeq) + " ", 1),
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
                                        _push6(ssrRenderComponent(_component_a_tooltip, { content: "删除" }, {
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
                                        _push6(ssrRenderComponent(_component_a_tooltip, { content: "加入可报专业" }, {
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
                                                content: "输入序号"
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                                    createTextVNode(" 专业 " + toDisplayString(record2.zySeq) + " ", 1),
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
                                              createVNode(_component_a_tooltip, { content: "删除" }, {
                                                default: withCtx(() => [
                                                  createVNode("div", {
                                                    onClick: ($event) => deleteWish(record2)
                                                  }, [
                                                    createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                                  ], 8, ["onClick"])
                                                ]),
                                                _: 2
                                              }, 1024),
                                              createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                                              content: "输入序号"
                                            }, {
                                              default: withCtx(() => [
                                                createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                                  createTextVNode(" 专业 " + toDisplayString(record2.zySeq) + " ", 1),
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
                                            createVNode(_component_a_tooltip, { content: "删除" }, {
                                              default: withCtx(() => [
                                                createVNode("div", {
                                                  onClick: ($event) => deleteWish(record2)
                                                }, [
                                                  createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                                ], 8, ["onClick"])
                                              ]),
                                              _: 2
                                            }, 1024),
                                            createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                                            content: "输入序号"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                                createTextVNode(" 专业 " + toDisplayString(record2.zySeq) + " ", 1),
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
                                          createVNode(_component_a_tooltip, { content: "删除" }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                onClick: ($event) => deleteWish(record2)
                                              }, [
                                                createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                              ], 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                            _push4(` 暂无志愿 `);
                          } else {
                            return [
                              createTextVNode(" 暂无志愿 ")
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
                                        content: "输入序号"
                                      }, {
                                        default: withCtx(() => [
                                          createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                            createTextVNode(" 院校 " + toDisplayString(record.yxSeq) + " ", 1),
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
                                      createVNode(_component_a_tooltip, { content: "删除" }, {
                                        default: withCtx(() => [
                                          createVNode("div", {
                                            onClick: ($event) => deleteWish(record)
                                          }, [
                                            createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                          ], 8, ["onClick"])
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                                          content: "输入序号"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                              createTextVNode(" 专业 " + toDisplayString(record2.zySeq) + " ", 1),
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
                                        createVNode(_component_a_tooltip, { content: "删除" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              onClick: ($event) => deleteWish(record2)
                                            }, [
                                              createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                            createTextVNode(" 暂无志愿 ")
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
                          createTextVNode("修改名称 ")
                        ], 8, ["onClick"]),
                        createVNode(_component_a_popover, {
                          trigger: "hover",
                          position: "bottom"
                        }, {
                          content: withCtx(() => [
                            createVNode("div", {
                              class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                              onClick: ($event) => changeWishSort("1", "预测概率排序")
                            }, " 按预测概率排序 ", 8, ["onClick"]),
                            createVNode("div", {
                              class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                              onClick: ($event) => changeWishSort("2", "去年录取排序")
                            }, " 按去年录取排序 ", 8, ["onClick"])
                          ]),
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                              createVNode("i", { class: "iconfont icon-paixu fontSize mr-[3px]" }),
                              createTextVNode("排序 ")
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
                            }, " 导出Excel(表格版) "),
                            createVNode("div", {
                              class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                              onClick: openFile
                            }, " 导出Pdf(打印版) ")
                          ]),
                          default: withCtx(() => [
                            createVNode("div", { class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer" }, [
                              createVNode("i", { class: "iconfont icon-shangchuan fontSize mr-[3px]" }),
                              createTextVNode("导出 ")
                            ])
                          ]),
                          _: 1
                        }),
                        createVNode("div", {
                          class: "bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer",
                          onClick: clearWish
                        }, [
                          createVNode("i", { class: "iconfont icon-shanchu fontSize mr-[3px]" }),
                          createTextVNode("清空 ")
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
                          createTextVNode(toDisplayString(unref(form).draggable ? "拖动完成" : "拖动"), 1)
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
                      placeholder: "搜索关键词",
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
                    createVNode("div", null, "冲" + toDisplayString(unref(volunteerData).csum), 1),
                    createVNode("div", { class: "w-[6px] h-[6px] rounded-[50%] bg-[#5AB9FF] mx-[5px]" }),
                    createVNode("div", null, "稳" + toDisplayString(unref(volunteerData).wsum), 1),
                    createVNode("div", { class: "w-[6px] h-[6px] rounded-[50%] bg-[#FFA864] mx-[5px]" }),
                    createVNode("div", null, "保" + toDisplayString(unref(volunteerData).bsum), 1)
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
                      createVNode("div", { class: "font-bold" }, "操作")
                    ]),
                    operate: withCtx(({ record }) => [
                      createVNode("div", {
                        onClick: ($event) => clickWish(record)
                      }, [
                        !record.isInput ? (openBlock(), createBlock(_component_a_tooltip, {
                          key: 0,
                          content: "输入序号"
                        }, {
                          default: withCtx(() => [
                            createVNode("div", { class: "border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                              createTextVNode(" 志愿 " + toDisplayString(record.zySeq) + " ", 1),
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
                          createVNode(_component_a_tooltip, { content: "删除" }, {
                            default: withCtx(() => [
                              createVNode("div", {
                                onClick: ($event) => deleteWish(record)
                              }, [
                                createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                              ], 8, ["onClick"])
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                          createTextVNode(" 暂无志愿 ")
                        ]),
                        _: 1
                      }, 8, ["url"])
                    ]),
                    _: 1
                  }, 8, ["data", "loading", "draggable"])) : createCommentVNode("", true),
                  props.data.isSchoolGroup === "2" ? (openBlock(), createBlock("div", { key: 1 }, [
                    createVNode("div", { class: "bg-[#F9F9F9] text-[#333] text-[14px] flex items-center leading-[48px] font-bold text-center" }, [
                      createVNode("div", { class: "w-[70px]" }, "概率"),
                      createVNode("div", { class: "flex-1" }, "招生院校"),
                      createVNode("div", { class: "w-[100px]" }, toDisplayString(unref(volunteerData).year) + "计划", 1),
                      createVNode("div", { class: "w-[70px]" }),
                      createVNode("div", { class: "w-[80px]" }, toDisplayString(unref(volunteerData).year) + "年份", 1),
                      createVNode("div", { class: "w-[80px]" }, toDisplayString(unref(volunteerData).year - 1) + "年份", 1),
                      createVNode("div", { class: "w-[80px]" }, toDisplayString(unref(volunteerData).year - 2) + "年份", 1),
                      createVNode("div", { class: "w-[150px]" }, "操作")
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
                                          content: "输入序号"
                                        }, {
                                          default: withCtx(() => [
                                            createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                              createTextVNode(" 院校 " + toDisplayString(record.yxSeq) + " ", 1),
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
                                        createVNode(_component_a_tooltip, { content: "删除" }, {
                                          default: withCtx(() => [
                                            createVNode("div", {
                                              onClick: ($event) => deleteWish(record)
                                            }, [
                                              createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                            ], 8, ["onClick"])
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                                            content: "输入序号"
                                          }, {
                                            default: withCtx(() => [
                                              createVNode("div", { class: "border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto" }, [
                                                createTextVNode(" 专业 " + toDisplayString(record2.zySeq) + " ", 1),
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
                                          createVNode(_component_a_tooltip, { content: "删除" }, {
                                            default: withCtx(() => [
                                              createVNode("div", {
                                                onClick: ($event) => deleteWish(record2)
                                              }, [
                                                createVNode("i", { class: "iconfont icon-shanchu text-[#7C92FF]" })
                                              ], 8, ["onClick"])
                                            ]),
                                            _: 2
                                          }, 1024),
                                          createVNode(_component_a_tooltip, { content: "加入可报专业" }, {
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
                              createTextVNode(" 暂无志愿 ")
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
const index_vue_vue_type_style_index_0_scoped_865a9d2e_lang = "";
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
      title: "智能选志愿"
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
        { value: "", label: "冲稳保" },
        { value: "1", label: "冲" },
        { value: "2", label: "稳" },
        { value: "3", label: "保" }
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
      var _a2, _b, _c;
      return ((_c = (_b = (_a2 = sfList.value) == null ? void 0 : _a2.filter((item) => item.selectList)) == null ? void 0 : _b.flatMap((o) => o.selectList)) == null ? void 0 : _c.map((v) => v)) ?? [];
    });
    const selectZylList = computed(() => {
      var _a2, _b, _c;
      return ((_c = (_b = (_a2 = xkmlList.value) == null ? void 0 : _a2.filter((item) => item.selectList)) == null ? void 0 : _b.flatMap((o) => o.selectList)) == null ? void 0 : _c.map((v) => v)) ?? [];
    });
    const tagList = computed(() => {
      var _a2, _b, _c, _d, _e;
      const cityList = ((_b = (_a2 = selectCityList.value) == null ? void 0 : _a2.map((item) => {
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
      })) == null ? void 0 : _b.filter((item) => item !== null)) ?? [];
      const zylList = ((_c = selectZylList.value) == null ? void 0 : _c.map((item) => {
        return {
          value: item,
          label: item,
          key: "zyl"
          // 唯一key
        };
      })) ?? [];
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
          var _a3;
          return o.value === ((_a3 = ccData.value) == null ? void 0 : _a3.cc);
        }),
        ...zylList
      ].filter((o) => o != "");
    });
    const smallestMissingNumber = computed(() => {
      var _a2, _b, _c;
      const list = volunteerInfo.value.isSchoolGroup === "1" ? ((_b = (_a2 = filledInData.value) == null ? void 0 : _a2.list) == null ? void 0 : _b.map((o) => o.zySeq)) ?? [] : ((_c = form.value.curWishInfo.children) == null ? void 0 : _c.map((o) => o)) ?? [];
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
                name: "冲",
                itemStyle: { color: "#7C92FF" },
                tip: "冲刺"
              },
              {
                value: form.value.curModule === "major" ? majorOdds.value.wsum : schoolOdds.value.wsum,
                name: "稳",
                itemStyle: { color: "#5AB9FF" },
                tip: "稳妥"
              },
              {
                value: form.value.curModule === "major" ? majorOdds.value.bsum : schoolOdds.value.bsum,
                name: "保",
                itemStyle: { color: "#FFA864" },
                tip: "保底"
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
        title: "院校类型",
        key: "yxlx",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("YXLX")]
      },
      {
        title: "办学性质",
        key: "bxxz",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("BXXZ")]
      },
      {
        title: "实力标签",
        key: "slbq",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("SLBQ")]
      },
      {
        title: "特色标签",
        key: "tsbq",
        isShow: true,
        multiple: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("TSBQ")]
      }
    ]);
    const { data: volunteerInfo, refresh: volunteerInfoRefresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "volunteerInfo",
      async () => {
        var _a2, _b, _c;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_VOLUNTEER_INFO, {
          body: {
            id: wid.value ?? ""
            // 志愿表id
          }
        });
        return {
          ...res == null ? void 0 : res.data,
          zyTop: ((_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.zyTop) * 1,
          error: res.data === "未知志愿" ? true : false,
          scoreRange: [(((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.score) ?? 0) + 30, (((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.score) ?? 0) - 50]
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
      var _a2;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
      const ccList = ((_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.map((item) => {
        return {
          ...item,
          value: item.levelCode,
          label: item.levelName,
          key: "cc"
          // 唯一key
        };
      })) ?? [];
      return {
        title: "专业层次",
        key: "cc",
        isShow: true,
        multiple: false,
        options: ccList,
        cc: ccList[0].value ?? ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: xkmlList, refresh: xkmlRefresh } = useAsyncData(
      "xkmlList",
      async () => {
        var _a2, _b;
        const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_XK_ML_LIST, {
          body: {
            cc: (_a2 = ccData.value) == null ? void 0 : _a2.cc
          }
        });
        const xkmlList2 = [
          { xkml: "不限", xkmldm: "" },
          ...((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.map((o) => {
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
          })) ?? []
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
          { name: "不限", code: "" },
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
        var _a2;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
          body: {
            id: volunteerInfo.value.id
            // 志愿表id
          }
        });
        const specialList = volunteerInfo.value.isSchoolGroup === "1" ? res == null ? void 0 : res.data : groupByAndMergeChildArrays(res == null ? void 0 : res.data, "yxmc", "children", "zySeq");
        return {
          list: res.data ?? [],
          specialList: specialList ?? [],
          total: ((_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.length) ?? 0
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
          totalSum: ((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.totalSum) ?? 0,
          wsum: ((_d = res == null ? void 0 : res.data) == null ? void 0 : _d.wsum) ?? 0,
          csum: ((_e = res == null ? void 0 : res.data) == null ? void 0 : _e.csum) ?? 0,
          bsum: ((_f = res == null ? void 0 : res.data) == null ? void 0 : _f.bsum) ?? 0
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
          list: ((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.list) ?? [],
          total: ((_d = res == null ? void 0 : res.data) == null ? void 0 : _d.totalCount) ?? 0,
          year: ((_e = res == null ? void 0 : res.data) == null ? void 0 : _e.year) ?? 2024,
          sortNameList: [
            { value: "wpm.ygzdf", label: "按录取概率" },
            { value: "wpm.onezdwc", label: `按${(_f = res == null ? void 0 : res.data) == null ? void 0 : _f.year}位次` },
            { value: "wpm.twozdwc", label: `按${((_g = res == null ? void 0 : res.data) == null ? void 0 : _g.year) - 1}位次` },
            { value: "wpm.threezdwc", label: `按${((_h = res == null ? void 0 : res.data) == null ? void 0 : _h.year) - 2}位次` }
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
          totalSum: ((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.totalSum) ?? 0,
          wsum: ((_d = res == null ? void 0 : res.data) == null ? void 0 : _d.wsum) ?? 0,
          csum: ((_e = res == null ? void 0 : res.data) == null ? void 0 : _e.csum) ?? 0,
          bsum: ((_f = res == null ? void 0 : res.data) == null ? void 0 : _f.bsum) ?? 0
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
          list: ((_c = res == null ? void 0 : res.data) == null ? void 0 : _c.list) ?? [],
          total: ((_d = res == null ? void 0 : res.data) == null ? void 0 : _d.totalCount) ?? 0,
          year: ((_e = res == null ? void 0 : res.data) == null ? void 0 : _e.year) ?? 2024,
          sortNameList: [
            { value: "wpm.ygzdf", label: "按录取概率" },
            { value: "wpm.onezdwc", label: `按${(_f = res == null ? void 0 : res.data) == null ? void 0 : _f.year}位次` },
            { value: "wpm.twozdwc", label: `按${((_g = res == null ? void 0 : res.data) == null ? void 0 : _g.year) - 1}位次` },
            { value: "wpm.threezdwc", label: `按${((_h = res == null ? void 0 : res.data) == null ? void 0 : _h.year) - 2}位次` }
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
      warningModal(`确定导出志愿表吗`, async (done) => {
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
      warningModal(`确定导出志愿表吗`, async (done) => {
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
      var _a2, _b, _c, _d, _e, _f;
      if (volunteerInfo.value.isSchoolGroup === "1") {
        if (smallestMissingNumber.value > ((_a2 = volunteerInfo.value) == null ? void 0 : _a2.zyTop)) {
          $zsMsg("waring", "超过专业填报数量");
          return;
        }
      } else {
        form.value.curWishInfo = ((_b = filledInData.value) == null ? void 0 : _b.specialList.find((o) => o.yxmc === row.yxmc)) ?? {};
        if (smallestMissingNumber.value > ((_c = volunteerInfo.value) == null ? void 0 : _c.zyTop)) {
          $zsMsg("waring", "超过专业填报数量");
          return;
        }
        if (((_e = (_d = filledInData.value) == null ? void 0 : _d.specialList) == null ? void 0 : _e.length) > ((_f = volunteerInfo.value) == null ? void 0 : _f.yxTop)) {
          $zsMsg("waring", "超过院校填报数量");
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
      const _component_zs_select_filter = _sfc_main$6;
      const _component_a_tag = Tag;
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_client_only = __nuxt_component_1;
      const _component_zs_choice_major_table = __nuxt_component_16;
      const _component_icon_check = IconCheck;
      const _component_zs_no_data_small = _sfc_main$7;
      const _component_a_pagination = Pagination;
      const _component_zs_e_charts = _sfc_main$8;
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
                  content: "点击修改名称",
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
                  content: "修改成绩",
                  position: "top"
                }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    var _a4, _b3, _c2, _d2, _e2, _f2;
                    if (_push3) {
                      _push3(`<div class="text-[#666666] cursor-pointer" data-v-1e9b8fb9${_scopeId2}><span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_a4 = unref(volunteerInfo)) == null ? void 0 : _a4.xk))}</span><span class="mx-[5px]" data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(volunteerInfo)) == null ? void 0 : _b3.score) + "分")}</span><span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_c2 = unref(volunteerInfo)) == null ? void 0 : _c2.wc)) + "位")}</span><i class="iconfont icon-chuangzuo ml-[5px]" data-v-1e9b8fb9${_scopeId2}></i></div>`);
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
                          createVNode("span", { class: "mx-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_e2 = unref(volunteerInfo)) == null ? void 0 : _e2.score) + "分"), 1),
                          createVNode("span", null, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_f2 = unref(volunteerInfo)) == null ? void 0 : _f2.wc)) + "位"), 1),
                          createVNode("i", { class: "iconfont icon-chuangzuo ml-[5px]" })
                        ], 8, ["onClick"])
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_a_tooltip, {
                  content: "选择批次新建志愿表",
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
                _push2(`<div class="text-[#7C92FF] cursor-pointer" data-v-1e9b8fb9${_scopeId}> 新建志愿表 </div><div class="text-[#7C92FF] cursor-pointer" data-v-1e9b8fb9${_scopeId}> 我的志愿表 </div>`);
                if (((_a3 = unref(userInfo)) == null ? void 0 : _a3.vipStateValue) == "1") {
                  _push2(`<div class="text-[#7C92FF] cursor-pointer" data-v-1e9b8fb9${_scopeId}> 查看志愿表 </div>`);
                } else {
                  _push2(`<!---->`);
                }
              } else {
                return [
                  createVNode(_component_a_tooltip, {
                    content: "点击修改名称",
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
                    content: "修改成绩",
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
                          createVNode("span", { class: "mx-[5px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))((_b3 = unref(volunteerInfo)) == null ? void 0 : _b3.score) + "分"), 1),
                          createVNode("span", null, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_c2 = unref(volunteerInfo)) == null ? void 0 : _c2.wc)) + "位"), 1),
                          createVNode("i", { class: "iconfont icon-chuangzuo ml-[5px]" })
                        ], 8, ["onClick"])
                      ];
                    }),
                    _: 1
                  }),
                  createVNode(_component_a_tooltip, {
                    content: "选择批次新建志愿表",
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
                  }, " 新建志愿表 ", 8, ["onClick"]),
                  createVNode("div", {
                    class: "text-[#7C92FF] cursor-pointer",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/personal?tab=myVolunteer`)
                  }, " 我的志愿表 ", 8, ["onClick"]),
                  ((_b2 = unref(userInfo)) == null ? void 0 : _b2.vipStateValue) == "1" ? (openBlock(), createBlock("div", {
                    key: 0,
                    class: "text-[#7C92FF] cursor-pointer",
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/choice/detail?wid=${unref(volunteerInfo).id}`)
                  }, " 查看志愿表 ", 8, ["onClick"])) : createCommentVNode("", true)
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
                _push2(`<div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-1e9b8fb9${_scopeId}> 导出Excel(表格版) </div><div class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer" data-v-1e9b8fb9${_scopeId}> 导出Pdf(打印版) </div>`);
              } else {
                return [
                  createVNode("div", {
                    class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                    onClick: exportFile
                  }, " 导出Excel(表格版) "),
                  createVNode("div", {
                    class: "leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer",
                    onClick: openFile
                  }, " 导出Pdf(打印版) ")
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
          _push(`<div class="bg-[#7C92FF] p-[10px] h-[40px] rounded-[4px] leading-[40px] f-c-c ml-[10px] cursor-pointer text-white" data-v-1e9b8fb9><i class="iconfont icon-chenggong" data-v-1e9b8fb9></i><span class="ml-[5px]" data-v-1e9b8fb9>已选志愿</span><span class="mx-[10px]" data-v-1e9b8fb9>|</span><span class="px-[10px] rounded-[20px] bg-[#B0BEFF] h-[18px] leading-[18px]" data-v-1e9b8fb9>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))((_b = unref(filledInData)) == null ? void 0 : _b.total, "0"))}</span></div></div></div></div><div class="max-w-container mx-auto" data-v-1e9b8fb9><div class="${ssrRenderClass([{
            "p-[10px]": !unref(form).collapse
          }, "border border-solid border-[#EDEDED] mt-[20px] rounded-[8px]"])}" data-v-1e9b8fb9><div class="${ssrRenderClass([{
            "bg-[#F9F9F9]": unref(form).collapse
          }, "flex"])}" data-v-1e9b8fb9><div class="${ssrRenderClass([{
            "	text-[#7C92FF] ml-[10px] mt-[10px] ": unref(form).collapse,
            "border-solid border border-[#EDEDED] ": !unref(form).collapse
          }, "flex justify-between items-center h-[38px] w-[280px] rounded-[4px] px-[10px] bg-[#F9F9F9] cursor-pointer"])}" data-v-1e9b8fb9><div class="text-[14px] font-bold" data-v-1e9b8fb9><span data-v-1e9b8fb9>筛选院校</span><span class="mx-[4px]" data-v-1e9b8fb9>/</span><span data-v-1e9b8fb9>专业</span></div><div data-v-1e9b8fb9>`);
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
            placeholder: "搜索你感兴趣的院校或专业",
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
          if (unref(form).collapse) {
            _push(`<div class="bg-[#F9F9F9] rounded-[4px] p-[10px]" data-v-1e9b8fb9><div class="flex" data-v-1e9b8fb9><div class="text-[14px] mr-[15px] p-[5px_8px] text-[#606266]" data-v-1e9b8fb9> 所在地区 </div><ul class="flex flex-1 p-[0px] flex-row flex-wrap" data-v-1e9b8fb9><!--[-->`);
            ssrRenderList(unref(sfList), (item) => {
              _push(`<li class="flex items-center p-[5px_8px] mb-[5px] px-[6px] mr-[10px] text-[14px] cursor-pointer rounded-[4px] hover:text-[#7C92FF]" data-v-1e9b8fb9>`);
              if (item.name !== "不限") {
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
                                  _push4(`全选 `);
                                } else {
                                  return [
                                    createTextVNode("全选 ")
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
                                  createTextVNode("全选 ")
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
                            _push3(`<div class="rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]" data-v-1e9b8fb9${_scopeId2}> 清空 </div><div class="rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]" data-v-1e9b8fb9${_scopeId2}> 确定 </div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]",
                                onClick: ($event) => handleCheckAll(
                                  item,
                                  false,
                                  "school"
                                )
                              }, " 清空 ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]",
                                onClick: ($event) => item.popoverVisible = false
                              }, " 确定 ", 8, ["onClick"])
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
                                createTextVNode("全选 ")
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
                              }, " 清空 ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]",
                                onClick: ($event) => item.popoverVisible = false
                              }, " 确定 ", 8, ["onClick"])
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
                })}" data-v-1e9b8fb9>不限</span>`);
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
            _push(`<div class="flex" data-v-1e9b8fb9><div class="text-[14px] mr-[15px] p-[5px_8px] text-[#606266]" data-v-1e9b8fb9> 专业门类 </div><ul class="flex flex-1 p-[0px] flex-row flex-wrap" data-v-1e9b8fb9><!--[-->`);
            ssrRenderList(unref(xkmlList), (item) => {
              _push(`<li class="flex items-center p-[5px_6px] mb-[5px] mr-[10px] text-[14px] cursor-pointer rounded-[4px] hover:text-[#7C92FF]" data-v-1e9b8fb9>`);
              if (item.xkml !== "不限") {
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
                                  _push4(`全选 `);
                                } else {
                                  return [
                                    createTextVNode("全选 ")
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
                                  createTextVNode("全选 ")
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
                            _push3(`<div class="rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]" data-v-1e9b8fb9${_scopeId2}> 清空 </div><div class="rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]" data-v-1e9b8fb9${_scopeId2}> 确定 </div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]",
                                onClick: ($event) => handleCheckAll(
                                  item,
                                  false,
                                  "major"
                                )
                              }, " 清空 ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]",
                                onClick: ($event) => item.popoverVisible = false
                              }, " 确定 ", 8, ["onClick"])
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
                                createTextVNode("全选 ")
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
                              }, " 清空 ", 8, ["onClick"]),
                              createVNode("div", {
                                class: "rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]",
                                onClick: ($event) => item.popoverVisible = false
                              }, " 确定 ", 8, ["onClick"])
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
                })}" data-v-1e9b8fb9>不限</span>`);
              }
              _push(`</li>`);
            });
            _push(`<!--]--></ul></div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          if (unref(tagList).length) {
            _push(`<div class="${ssrRenderClass([{ "mt-[10px]": !unref(form).collapse }, "bg-[#EDEDED] flex p-[10px_10px_5px]"])}" data-v-1e9b8fb9><div class="mr-[20px] leading-[25px]" data-v-1e9b8fb9> 筛选(<span class="text-[#7C92FF]" data-v-1e9b8fb9>${ssrInterpolate(unref(tagList).length)}</span>) </div><div class="flex-1" data-v-1e9b8fb9><!--[-->`);
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
                          if (tab.label === "冲稳保") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                              unref(majorOdds).totalSum,
                              "0"
                            ))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "冲") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).csum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "稳") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).wsum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "保") {
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
                          if (tab.label === "冲稳保") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                              unref(schoolOdds).totalSum,
                              "0"
                            ))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "冲") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).csum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "稳") {
                            _push3(`<span data-v-1e9b8fb9${_scopeId2}>${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).wsum, "0"))}</span>`);
                          } else {
                            _push3(`<!---->`);
                          }
                          if (tab.label === "保") {
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
                              tab.label === "冲稳保" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                unref(majorOdds).totalSum,
                                "0"
                              )), 1)) : createCommentVNode("", true),
                              tab.label === "冲" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).csum, "0")), 1)) : createCommentVNode("", true),
                              tab.label === "稳" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).wsum, "0")), 1)) : createCommentVNode("", true),
                              tab.label === "保" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).bsum, "0")), 1)) : createCommentVNode("", true)
                            ])) : createCommentVNode("", true),
                            unref(form).curModule === "school" ? (openBlock(), createBlock("span", {
                              key: 1,
                              class: "text-[18px] font-bold"
                            }, [
                              tab.label === "冲稳保" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                unref(schoolOdds).totalSum,
                                "0"
                              )), 1)) : createCommentVNode("", true),
                              tab.label === "冲" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).csum, "0")), 1)) : createCommentVNode("", true),
                              tab.label === "稳" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).wsum, "0")), 1)) : createCommentVNode("", true),
                              tab.label === "保" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).bsum, "0")), 1)) : createCommentVNode("", true)
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
                            tab.label === "冲稳保" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                              unref(majorOdds).totalSum,
                              "0"
                            )), 1)) : createCommentVNode("", true),
                            tab.label === "冲" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).csum, "0")), 1)) : createCommentVNode("", true),
                            tab.label === "稳" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).wsum, "0")), 1)) : createCommentVNode("", true),
                            tab.label === "保" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(majorOdds).bsum, "0")), 1)) : createCommentVNode("", true)
                          ])) : createCommentVNode("", true),
                          unref(form).curModule === "school" ? (openBlock(), createBlock("span", {
                            key: 1,
                            class: "text-[18px] font-bold"
                          }, [
                            tab.label === "冲稳保" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                              unref(schoolOdds).totalSum,
                              "0"
                            )), 1)) : createCommentVNode("", true),
                            tab.label === "冲" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).csum, "0")), 1)) : createCommentVNode("", true),
                            tab.label === "稳" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).wsum, "0")), 1)) : createCommentVNode("", true),
                            tab.label === "保" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolOdds).bsum, "0")), 1)) : createCommentVNode("", true)
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
                      _push3(`专业`);
                    } else {
                      return [
                        createTextVNode("专业")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
                _push2(ssrRenderComponent(_component_a_radio, { value: "school" }, {
                  default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                    if (_push3) {
                      _push3(`院校`);
                    } else {
                      return [
                        createTextVNode("院校")
                      ];
                    }
                  }),
                  _: 1
                }, _parent2, _scopeId));
              } else {
                return [
                  createVNode(_component_a_radio, { value: "major" }, {
                    default: withCtx(() => [
                      createTextVNode("专业")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_a_radio, { value: "school" }, {
                    default: withCtx(() => [
                      createTextVNode("院校")
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
                        }, "w-[34px] h-[28px] leading-[28px] text-center"])}" data-v-1e9b8fb9${_scopeId2}> 升序 </div><div class="${ssrRenderClass([{
                          "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                        }, "w-[34px] h-[28px] leading-[28px] text-center ml-[5px]"])}" data-v-1e9b8fb9${_scopeId2}> 降序 </div></div></div>`);
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
                              }, " 升序 ", 10, ["onClick"]),
                              createVNode("div", {
                                class: ["w-[34px] h-[28px] leading-[28px] text-center ml-[5px]", {
                                  "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                                }],
                                onClick: ($event) => setSortType("DESC")
                              }, " 降序 ", 10, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" data-v-1e9b8fb9${_scopeId2}><div data-v-1e9b8fb9${_scopeId2}>排序</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" }, [
                            createVNode("div", null, "排序")
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
                            }, " 升序 ", 10, ["onClick"]),
                            createVNode("div", {
                              class: ["w-[34px] h-[28px] leading-[28px] text-center ml-[5px]", {
                                "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                              }],
                              onClick: ($event) => setSortType("DESC")
                            }, " 降序 ", 10, ["onClick"])
                          ])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" }, [
                          createVNode("div", null, "排序")
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
                    }, "h-[32px] leading-[32px] rounded-[8px]"])}" data-v-1e9b8fb9${_scopeId}>${ssrInterpolate(record.wSort ? "志愿" + record.wSort : "加入志愿")}</div>`);
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
                          _push3(`<span class="text-[12px] text-[#7C92FF]" data-v-1e9b8fb9${_scopeId2}>可报专业</span><span class="text-[12px] text-[#7C92FF]" data-v-1e9b8fb9${_scopeId2}>院校历年</span>`);
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
                            }, "可报专业", 8, ["onClick"]),
                            createVNode("span", {
                              class: "text-[12px] text-[#7C92FF]",
                              onClick: ($event) => setSelectRow(
                                {
                                  yxmc: record.yxmc,
                                  year: unref(majorData).year
                                },
                                () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                              )
                            }, "院校历年", 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<!--]-->`);
                  } else {
                    _push2(ssrRenderComponent(_component_a_tooltip, { content: "开通会员 尊享填报特权" }, {
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
                      }, toDisplayString(record.wSort ? "志愿" + record.wSort : "加入志愿"), 11, ["onClick"]),
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
                          }, "可报专业", 8, ["onClick"]),
                          createVNode("span", {
                            class: "text-[12px] text-[#7C92FF]",
                            onClick: ($event) => setSelectRow(
                              {
                                yxmc: record.yxmc,
                                year: unref(majorData).year
                              },
                              () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                            )
                          }, "院校历年", 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 64)) : (openBlock(), createBlock(_component_a_tooltip, {
                      key: 1,
                      content: "开通会员 尊享填报特权"
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
                        }, "w-[34px] h-[28px] leading-[28px] text-center"])}" data-v-1e9b8fb9${_scopeId2}> 升序 </div><div class="${ssrRenderClass([{
                          "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                        }, "w-[34px] h-[28px] leading-[28px] text-center ml-[5px]"])}" data-v-1e9b8fb9${_scopeId2}> 降序 </div></div></div>`);
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
                              }, " 升序 ", 10, ["onClick"]),
                              createVNode("div", {
                                class: ["w-[34px] h-[28px] leading-[28px] text-center ml-[5px]", {
                                  "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                                }],
                                onClick: ($event) => setSortType("DESC")
                              }, " 降序 ", 10, ["onClick"])
                            ])
                          ])
                        ];
                      }
                    }),
                    default: withCtx((_, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<div class="border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" data-v-1e9b8fb9${_scopeId2}><div data-v-1e9b8fb9${_scopeId2}>排序</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" }, [
                            createVNode("div", null, "排序")
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
                            }, " 升序 ", 10, ["onClick"]),
                            createVNode("div", {
                              class: ["w-[34px] h-[28px] leading-[28px] text-center ml-[5px]", {
                                "bg-[#F2F5FF] text-[#7C92FF]": unref(form).sortType === "DESC"
                              }],
                              onClick: ($event) => setSortType("DESC")
                            }, " 降序 ", 10, ["onClick"])
                          ])
                        ])
                      ]),
                      default: withCtx(() => [
                        createVNode("div", { class: "border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]" }, [
                          createVNode("div", null, "排序")
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
                      }, "h-[32px] leading-[32px] rounded-[8px]"])}" data-v-1e9b8fb9${_scopeId}>${ssrInterpolate(record.wSort ? "已加入专业" + record.wSort : "加入志愿")}</div>`);
                    } else {
                      _push2(`<div class="h-[32px] leading-[32px] rounded-[8px] z-10 border-solid border border-[#B0BEFF]" data-v-1e9b8fb9${_scopeId}>`);
                      if (record.yxSort) {
                        _push2(`<div class="flex items-center" data-v-1e9b8fb9${_scopeId}><div class="flex-1 bg-[#7C92FF] text-white rounded-[8px_0px_0px_8px]" data-v-1e9b8fb9${_scopeId}> 志愿${ssrInterpolate(record.yxSort)}</div><div class="flex-1" data-v-1e9b8fb9${_scopeId}>专业${ssrInterpolate(record.wSort)}</div></div>`);
                      } else {
                        _push2(`<div data-v-1e9b8fb9${_scopeId}> 可填专业${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.mcount, "0"))}</div>`);
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
                          _push3(`<span class="text-[12px] text-[#7C92FF]" data-v-1e9b8fb9${_scopeId2}>可报专业</span><span class="text-[12px] text-[#7C92FF]" data-v-1e9b8fb9${_scopeId2}>院校历年</span>`);
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
                            }, "可报专业", 8, ["onClick"]),
                            createVNode("span", {
                              class: "text-[12px] text-[#7C92FF]",
                              onClick: ($event) => setSelectRow(
                                {
                                  yxmc: record.yxmc,
                                  year: unref(schoolData).year
                                },
                                () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                              )
                            }, "院校历年", 8, ["onClick"])
                          ];
                        }
                      }),
                      _: 2
                    }, _parent2, _scopeId));
                    _push2(`<!--]-->`);
                  } else {
                    _push2(ssrRenderComponent(_component_a_tooltip, { content: "开通会员 尊享填报特权" }, {
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
                      }, toDisplayString(record.wSort ? "已加入专业" + record.wSort : "加入志愿"), 11, ["onClick"])) : (openBlock(), createBlock("div", {
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
                          createVNode("div", { class: "flex-1 bg-[#7C92FF] text-white rounded-[8px_0px_0px_8px]" }, " 志愿" + toDisplayString(record.yxSort), 1),
                          createVNode("div", { class: "flex-1" }, "专业" + toDisplayString(record.wSort), 1)
                        ])) : (openBlock(), createBlock("div", { key: 1 }, " 可填专业" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.mcount, "0")), 1))
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
                          }, "可报专业", 8, ["onClick"]),
                          createVNode("span", {
                            class: "text-[12px] text-[#7C92FF]",
                            onClick: ($event) => setSelectRow(
                              {
                                yxmc: record.yxmc,
                                year: unref(schoolData).year
                              },
                              () => unref(setActiveKey)("ZsChoiceAcademicYearsModal")
                            )
                          }, "院校历年", 8, ["onClick"])
                        ]),
                        _: 2
                      }, 1024)
                    ], 64)) : (openBlock(), createBlock(_component_a_tooltip, {
                      key: 1,
                      content: "开通会员 尊享填报特权"
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
            _push(`</div><div class="ml-[50px]" data-v-1e9b8fb9><div class="text-[#7A3805] text-[36px]" data-v-1e9b8fb9>让孩子赢在志愿填报上</div><div class="text-[#7A3805] mt-[10px]" data-v-1e9b8fb9><i class="iconfont icon-yixiangkan mr-[5px]" data-v-1e9b8fb9></i>院校专业查询 <i class="iconfont icon-yixiangkan mr-[5px]" data-v-1e9b8fb9></i>院校招录数据 <i class="iconfont icon-yixiangkan mr-[5px]" data-v-1e9b8fb9></i>测录取概率 </div><div class="mt-[20px] w-[296px] bg-[#FFA864] text-white text-[18px] leading-[47px] text-center rounded-[48px] cursor-pointer" data-v-1e9b8fb9> 立即开通VIP 查看全部志愿 </div></div></div>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</div><!--]-->`);
        } else {
          _push(`<div class="flex items-center justify-center flex-col min-h-[60vh]" data-v-1e9b8fb9><h1 class="font-bold" data-v-1e9b8fb9>完善信息后，尊享填报特权</h1>`);
          _push(ssrRenderComponent(_component_a_button, {
            type: "primary",
            onClick: ($event) => unref(userInfo).userInfoModal = true
          }, {
            default: withCtx((_, _push2, _parent2, _scopeId) => {
              if (_push2) {
                _push2(`完善信息`);
              } else {
                return [
                  createTextVNode("完善信息")
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
              _push2(`<div data-v-1e9b8fb9${_scopeId}>糟糕，页面好像没找到</div>`);
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
const index_vue_vue_type_style_index_0_scoped_1e9b8fb9_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/choice/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-1e9b8fb9"]]);
export {
  index as default
};
//# sourceMappingURL=index-a3fcef2b.js.map
