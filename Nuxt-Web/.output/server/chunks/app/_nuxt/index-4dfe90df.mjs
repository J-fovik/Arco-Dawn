import { _ as _sfc_main$2 } from './index-3959f291.mjs';
import { F as Form, a as FormItem } from './index-d47379ff.mjs';
import { G as Grid, a as GridItem } from './index-4ecc34e0.mjs';
import { S as Select } from './index-90aba227.mjs';
import { a as Radio } from './index-63900e07.mjs';
import { a as CheckboxGroup, C as Checkbox } from './index-11d38f35.mjs';
import { S as Space } from './index-8bcd588e.mjs';
import { I as InputNumber } from './index-08fdf206.mjs';
import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, computed, unref, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, withKeys } from 'vue';
import { ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { b as useUser, d as useWebsiteInformation, A as API_URLS, f as useNuxtApp } from '../server.mjs';
import { u as useBasicsState } from './useBasicsState-8a7a18a4.mjs';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { f as findOptions, G as GK_DATE_OPTIONS, b as SUBJECT_OPTIONS, F as FIRST_CHOICE_SCIENCES_OPTIONS, S as SECOND_CHOICE_SCIENCES_OPTIONS } from './options-7ec13930.mjs';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  emits: ["cancel", "success"],
  setup(__props, { emit: emits }) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$2;
      const _component_a_space = Space;
      const _component_a_button = Button;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        title: "",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white p-[0px_30px] rounded-[5px_5px] w-[480px]" data-v-96e9f0ee${_scopeId}><div class="flex justify-between items-center cursor-pointer mb-[20px]" data-v-96e9f0ee${_scopeId}><div class="text-[24px] font-bold" data-v-96e9f0ee${_scopeId}>\u63D0\u793A</div></div><div class="f-c-c" data-v-96e9f0ee${_scopeId}><i class="iconfont icon-dengpaotishi text-[#FFA864] fontSize" data-v-96e9f0ee${_scopeId}></i></div><div class="text-[16px] leading-[22px]" data-v-96e9f0ee${_scopeId}> \u662F\u5426\u540C\u6B65\u6210\u7EE9\u5230\u5F53\u524D\u5FD7\u613F\u8868\uFF0C\u5206\u6570\u6539\u53D8\u540E\u4E4B\u524D\u586B\u62A5\u8BA1\u5212\u5F55\u53D6\u6982\u7387\u4F1A\u76F8\u5E94\u6539\u53D8 \uFF0C \u5982\u79D1\u76EE\u6539\u53D8\u5C06\u6E05\u7A7A\u5DF2\u9009\u5FD7\u613F\uFF0C\u8BF7\u786E\u8BA4\u7EE7\u7EED\u64CD\u4F5C? </div><div class="flex justify-end items-center mt-[20px]" data-v-96e9f0ee${_scopeId}>`);
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
                    onClick: ($event) => _ctx.$emit("success")
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
                      onClick: ($event) => _ctx.$emit("success")
                    }, {
                      default: withCtx(() => [
                        createTextVNode("\u786E\u5B9A")
                      ]),
                      _: 1
                    }, 8, ["onClick"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", { class: "bg-white p-[0px_30px] rounded-[5px_5px] w-[480px]" }, [
                createVNode("div", { class: "flex justify-between items-center cursor-pointer mb-[20px]" }, [
                  createVNode("div", { class: "text-[24px] font-bold" }, "\u63D0\u793A")
                ]),
                createVNode("div", { class: "f-c-c" }, [
                  createVNode("i", { class: "iconfont icon-dengpaotishi text-[#FFA864] fontSize" })
                ]),
                createVNode("div", { class: "text-[16px] leading-[22px]" }, " \u662F\u5426\u540C\u6B65\u6210\u7EE9\u5230\u5F53\u524D\u5FD7\u613F\u8868\uFF0C\u5206\u6570\u6539\u53D8\u540E\u4E4B\u524D\u586B\u62A5\u8BA1\u5212\u5F55\u53D6\u6982\u7387\u4F1A\u76F8\u5E94\u6539\u53D8 \uFF0C \u5982\u79D1\u76EE\u6539\u53D8\u5C06\u6E05\u7A7A\u5DF2\u9009\u5FD7\u613F\uFF0C\u8BF7\u786E\u8BA4\u7EE7\u7EED\u64CD\u4F5C? "),
                createVNode("div", { class: "flex justify-end items-center mt-[20px]" }, [
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
                        onClick: ($event) => _ctx.$emit("success")
                      }, {
                        default: withCtx(() => [
                          createTextVNode("\u786E\u5B9A")
                        ]),
                        _: 1
                      }, 8, ["onClick"])
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
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceSureChangeScoreModal/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_12 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-96e9f0ee"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => {
    } },
    isRequest: { type: Boolean, default: false }
  },
  emits: ["cancel", "success"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const { $zsFetch, $zsMsg } = useNuxtApp();
    const { userInfo } = useUser();
    const [loading, setLoading] = useBasicsState(false);
    const { provinceList } = useWebsiteInformation();
    const { form, formRef } = useForm(() => {
      var _a;
      return {
        ...props.data,
        uType: true,
        subjectList: [],
        firstSubjectList: [],
        secondSubjectList: [],
        gkms: (_a = findOptions(provinceList.value, userInfo.value.province)) == null ? void 0 : _a.gkms,
        isSure: false
      };
    });
    if (props.data.score) {
      const xkList = props.data.xk.split("/");
      const isSpecial = form.value.gkms === "3+1+2" && ["\u7269", "\u53F2"].includes(xkList[0]);
      form.value = {
        ...form.value,
        subjectList: isSpecial ? [] : xkList,
        firstSubjectList: isSpecial ? [xkList[0]] : [],
        // 回显首选学科
        secondSubjectList: isSpecial ? [...xkList.slice(1, 3)] : []
        // 回显次选学科
      };
    }
    const isDisabled = computed(() => !form.value.wc);
    const rules = {
      province: {
        required: true,
        message: "\u8BF7\u9009\u62E9\u9AD8\u8003\u7701\u4EFD"
      },
      gkYear: {
        required: true,
        message: "\u8BF7\u9009\u62E9\u9AD8\u8003\u5E74\u4EFD"
      },
      score: {
        required: true,
        message: "\u8BF7\u8F93\u5165\u5206\u6570"
      }
    };
    const changeProvince = (e) => {
      var _a;
      form.value.gkms = (_a = findOptions(provinceList.value, e)) == null ? void 0 : _a.gkms;
      form.value.subjectList = [];
      form.value.firstSubjectList = [];
      form.value.secondSubjectList = [];
      form.value.score = void 0;
      form.value.wc = void 0;
    };
    const changeSubject = () => {
      if (form.value.subjectList.length === 3 && form.value.score) {
        getEstimatedWc();
      }
    };
    const changeFirstSubject = () => {
      form.value.score = void 0;
      form.value.wc = void 0;
      if (form.value.firstSubjectList.length === 1 && form.value.secondSubjectList.length === 2 && form.value.score) {
        getEstimatedWc();
      }
    };
    const changeSecondSubject = () => {
      if (form.value.secondSubjectList.length === 2 && form.value.score) {
        getEstimatedWc();
      }
    };
    const changeScore = (e) => {
      form.value.score = e;
      form.value.wc = void 0;
      if (e > 100) {
        getEstimatedWc();
      }
    };
    const getEstimatedWc = async () => {
      var _a;
      const xkList = form.value.gkms === "3+3" ? form.value.subjectList : [...form.value.firstSubjectList, ...form.value.secondSubjectList];
      if (!form.value.province) {
        return $zsMsg("error", "\u8BF7\u9009\u62E9\u7701\u4EFD");
      }
      if (["3+1+2", "3+3"].includes(form.value.gkms)) {
        if (xkList.length != 3) {
          return $zsMsg("error", "\u8BF7\u9009\u62E9\u5BF9\u5E94\u6570\u91CF\u79D1\u76EE");
        }
      }
      if (!form.value.score) {
        return $zsMsg("error", "\u8BF7\u8F93\u5165\u5206\u6570");
      }
      const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_WC, {
        method: "POST",
        body: {
          score: form.value.score,
          province: form.value.province,
          xk: xkList.join("/")
        }
      });
      if (err)
        return;
      form.value.wc = (_a = res.data) != null ? _a : "";
    };
    const validateData = () => {
      formRef.value.validate((errors) => {
        if (errors)
          return;
        if (form.value.gkms === "3+3" && form.value.subjectList.length !== 3) {
          return $zsMsg("error", "\u8BF7\u9009\u62E9\u5BF9\u5E94\u6570\u91CF\u79D1\u76EE");
        }
        if (form.value.gkms === "3+1+2" && (form.value.firstSubjectList.length !== 1 || form.value.secondSubjectList.length !== 2)) {
          return $zsMsg("error", "\u8BF7\u9009\u62E9\u5BF9\u5E94\u6570\u91CF\u79D1\u76EE");
        }
        if (!form.value.wc) {
          return $zsMsg("error", "\u672A\u67E5\u8BE2\u5230\u5BF9\u5E94\u4F4D\u6B21");
        }
        if (props.isRequest) {
          form.value.isSure = true;
        } else {
          $zsMsg("success", "\u4FDD\u5B58\u6210\u529F");
          emits("success", form.value);
        }
      });
    };
    const saveWishInfo = async () => {
      setLoading(true);
      const result = form.value;
      const xkList = result.gkms === "3+3" ? result.subjectList : [...result.firstSubjectList, ...result.secondSubjectList];
      const [err, res] = await $zsFetch(API_URLS.CHOICE.CHANGE_WISH_INFO, {
        method: "POST",
        body: {
          id: form.value.id,
          // 志愿表id
          score: result.score,
          wc: result.wc,
          xk: xkList.join("/")
        }
      });
      if (err)
        return setLoading(false);
      $zsMsg("success", "\u4FDD\u5B58\u6210\u529F");
      setLoading(false);
      emits("success", form.value);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$2;
      const _component_a_form = Form;
      const _component_a_grid = Grid;
      const _component_a_grid_item = GridItem;
      const _component_a_form_item = FormItem;
      const _component_a_select = Select;
      const _component_a_radio = Radio;
      const _component_a_checkbox_group = CheckboxGroup;
      const _component_a_checkbox = Checkbox;
      const _component_a_space = Space;
      const _component_a_input_number = InputNumber;
      const _component_a_button = Button;
      const _component_zs_choice_sure_change_score_modal = __nuxt_component_12;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        title: "",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="bg-white p-[0px_30px] rounded-[5px_5px] w-[850px]" data-v-bf0d1591${_scopeId}><div class="flex justify-between items-center cursor-pointer mb-[30px]" data-v-bf0d1591${_scopeId}><div class="text-[24px] font-bold" data-v-bf0d1591${_scopeId}>\u8BBE\u7F6E\u6210\u7EE9</div></div>`);
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
                  _push3(ssrRenderComponent(_component_a_grid, {
                    cols: 2,
                    colGap: 12,
                    rowGap: 12
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_grid_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_form_item, {
                                label: "\u9AD8\u8003\u7701\u4EFD:",
                                field: "province",
                                "validate-trigger": ["blur"]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_a_select, {
                                      modelValue: unref(form).province,
                                      "onUpdate:modelValue": ($event) => unref(form).province = $event,
                                      placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u7701\u4EFD",
                                      "allow-clear": "",
                                      disabled: "",
                                      options: unref(provinceList),
                                      onChange: changeProvince
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_a_select, {
                                        modelValue: unref(form).province,
                                        "onUpdate:modelValue": ($event) => unref(form).province = $event,
                                        placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u7701\u4EFD",
                                        "allow-clear": "",
                                        disabled: "",
                                        options: unref(provinceList),
                                        onChange: changeProvince
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_form_item, {
                                  label: "\u9AD8\u8003\u7701\u4EFD:",
                                  field: "province",
                                  "validate-trigger": ["blur"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_select, {
                                      modelValue: unref(form).province,
                                      "onUpdate:modelValue": ($event) => unref(form).province = $event,
                                      placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u7701\u4EFD",
                                      "allow-clear": "",
                                      disabled: "",
                                      options: unref(provinceList),
                                      onChange: changeProvince
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_grid_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_form_item, {
                                label: "\u9AD8\u8003\u5E74\u4EFD:",
                                field: "gkYear",
                                "validate-trigger": ["blur"]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_a_select, {
                                      modelValue: unref(form).gkYear,
                                      "onUpdate:modelValue": ($event) => unref(form).gkYear = $event,
                                      placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u5E74\u4EFD",
                                      "allow-clear": "",
                                      disabled: "",
                                      options: ("GK_DATE_OPTIONS" in _ctx ? _ctx.GK_DATE_OPTIONS : unref(GK_DATE_OPTIONS))()
                                    }, null, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_a_select, {
                                        modelValue: unref(form).gkYear,
                                        "onUpdate:modelValue": ($event) => unref(form).gkYear = $event,
                                        placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u5E74\u4EFD",
                                        "allow-clear": "",
                                        disabled: "",
                                        options: ("GK_DATE_OPTIONS" in _ctx ? _ctx.GK_DATE_OPTIONS : unref(GK_DATE_OPTIONS))()
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_form_item, {
                                  label: "\u9AD8\u8003\u5E74\u4EFD:",
                                  field: "gkYear",
                                  "validate-trigger": ["blur"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_select, {
                                      modelValue: unref(form).gkYear,
                                      "onUpdate:modelValue": ($event) => unref(form).gkYear = $event,
                                      placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u5E74\u4EFD",
                                      "allow-clear": "",
                                      disabled: "",
                                      options: ("GK_DATE_OPTIONS" in _ctx ? _ctx.GK_DATE_OPTIONS : unref(GK_DATE_OPTIONS))()
                                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_grid_item, { span: 24 }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_form_item, {
                                label: "\u8003\u8BD5\u7C7B\u578B:",
                                required: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_a_radio, {
                                      modelValue: unref(form).uType,
                                      "onUpdate:modelValue": ($event) => unref(form).uType = $event
                                    }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`\u666E\u901A\u7C7B`);
                                        } else {
                                          return [
                                            createTextVNode("\u666E\u901A\u7C7B")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_a_radio, {
                                        modelValue: unref(form).uType,
                                        "onUpdate:modelValue": ($event) => unref(form).uType = $event
                                      }, {
                                        default: withCtx(() => [
                                          createTextVNode("\u666E\u901A\u7C7B")
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_form_item, {
                                  label: "\u8003\u8BD5\u7C7B\u578B:",
                                  required: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_radio, {
                                      modelValue: unref(form).uType,
                                      "onUpdate:modelValue": ($event) => unref(form).uType = $event
                                    }, {
                                      default: withCtx(() => [
                                        createTextVNode("\u666E\u901A\u7C7B")
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        if (unref(form).gkms === "3+3") {
                          _push4(ssrRenderComponent(_component_a_grid_item, { span: 24 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_form_item, {
                                  label: "\u9009\u62E9\u79D1\u76EE(6\u90093):",
                                  required: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_checkbox_group, {
                                        max: 3,
                                        modelValue: unref(form).subjectList,
                                        "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                                        onChange: changeSubject
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                                              _push7(ssrRenderComponent(_component_a_checkbox, {
                                                value: item.value
                                              }, {
                                                checkbox: withCtx(({ checked }, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_a_space, {
                                                      align: "start",
                                                      class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                                      }]
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.label)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item.label), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_a_space, {
                                                        align: "start",
                                                        class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                          "border-[#1677ff] bg-[#F2F5FF]": checked
                                                        }]
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.label), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                                                return openBlock(), createBlock(_component_a_checkbox, {
                                                  key: item.value,
                                                  value: item.value
                                                }, {
                                                  checkbox: withCtx(({ checked }) => [
                                                    createVNode(_component_a_space, {
                                                      align: "start",
                                                      class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                                      }]
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_checkbox_group, {
                                          max: 3,
                                          modelValue: unref(form).subjectList,
                                          "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                                          onChange: changeSubject
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                                              return openBlock(), createBlock(_component_a_checkbox, {
                                                key: item.value,
                                                value: item.value
                                              }, {
                                                checkbox: withCtx(({ checked }) => [
                                                  createVNode(_component_a_space, {
                                                    align: "start",
                                                    class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                      "border-[#1677ff] bg-[#F2F5FF]": checked
                                                    }]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.label), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_a_form_item, {
                                    label: "\u9009\u62E9\u79D1\u76EE(6\u90093):",
                                    required: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_checkbox_group, {
                                        max: 3,
                                        modelValue: unref(form).subjectList,
                                        "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                                        onChange: changeSubject
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                                            return openBlock(), createBlock(_component_a_checkbox, {
                                              key: item.value,
                                              value: item.value
                                            }, {
                                              checkbox: withCtx(({ checked }) => [
                                                createVNode(_component_a_space, {
                                                  align: "start",
                                                  class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                    "border-[#1677ff] bg-[#F2F5FF]": checked
                                                  }]
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.label), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                        } else {
                          _push4(`<!---->`);
                        }
                        if (unref(form).gkms === "3+1+2") {
                          _push4(`<!--[-->`);
                          _push4(ssrRenderComponent(_component_a_grid_item, { span: 24 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_form_item, {
                                  label: "\u9996\u9009\u79D1\u76EE(2\u90091):",
                                  required: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_checkbox_group, {
                                        max: 1,
                                        modelValue: unref(form).firstSubjectList,
                                        "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                                        onChange: changeFirstSubject
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                                              _push7(ssrRenderComponent(_component_a_checkbox, {
                                                value: item.value
                                              }, {
                                                checkbox: withCtx(({ checked }, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_a_space, {
                                                      align: "start",
                                                      class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                                      }]
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.label)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item.label), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_a_space, {
                                                        align: "start",
                                                        class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                          "border-[#1677ff] bg-[#F2F5FF]": checked
                                                        }]
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.label), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                                                return openBlock(), createBlock(_component_a_checkbox, {
                                                  key: item.value,
                                                  value: item.value
                                                }, {
                                                  checkbox: withCtx(({ checked }) => [
                                                    createVNode(_component_a_space, {
                                                      align: "start",
                                                      class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                                      }]
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_checkbox_group, {
                                          max: 1,
                                          modelValue: unref(form).firstSubjectList,
                                          "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                                          onChange: changeFirstSubject
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                                              return openBlock(), createBlock(_component_a_checkbox, {
                                                key: item.value,
                                                value: item.value
                                              }, {
                                                checkbox: withCtx(({ checked }) => [
                                                  createVNode(_component_a_space, {
                                                    align: "start",
                                                    class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                      "border-[#1677ff] bg-[#F2F5FF]": checked
                                                    }]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.label), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_a_form_item, {
                                    label: "\u9996\u9009\u79D1\u76EE(2\u90091):",
                                    required: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_checkbox_group, {
                                        max: 1,
                                        modelValue: unref(form).firstSubjectList,
                                        "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                                        onChange: changeFirstSubject
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                                            return openBlock(), createBlock(_component_a_checkbox, {
                                              key: item.value,
                                              value: item.value
                                            }, {
                                              checkbox: withCtx(({ checked }) => [
                                                createVNode(_component_a_space, {
                                                  align: "start",
                                                  class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                    "border-[#1677ff] bg-[#F2F5FF]": checked
                                                  }]
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.label), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_a_grid_item, { span: 24 }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(ssrRenderComponent(_component_a_form_item, {
                                  label: "\u6B21\u9009\u79D1\u76EE(4\u90092):",
                                  required: ""
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_a_checkbox_group, {
                                        max: 2,
                                        modelValue: unref(form).secondSubjectList,
                                        "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                                        onChange: changeSecondSubject
                                      }, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<!--[-->`);
                                            ssrRenderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                                              _push7(ssrRenderComponent(_component_a_checkbox, {
                                                value: item.value
                                              }, {
                                                checkbox: withCtx(({ checked }, _push8, _parent8, _scopeId7) => {
                                                  if (_push8) {
                                                    _push8(ssrRenderComponent(_component_a_space, {
                                                      align: "start",
                                                      class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                                      }]
                                                    }, {
                                                      default: withCtx((_7, _push9, _parent9, _scopeId8) => {
                                                        if (_push9) {
                                                          _push9(`${ssrInterpolate(item.label)}`);
                                                        } else {
                                                          return [
                                                            createTextVNode(toDisplayString(item.label), 1)
                                                          ];
                                                        }
                                                      }),
                                                      _: 2
                                                    }, _parent8, _scopeId7));
                                                  } else {
                                                    return [
                                                      createVNode(_component_a_space, {
                                                        align: "start",
                                                        class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                          "border-[#1677ff] bg-[#F2F5FF]": checked
                                                        }]
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(item.label), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["class"])
                                                    ];
                                                  }
                                                }),
                                                _: 2
                                              }, _parent7, _scopeId6));
                                            });
                                            _push7(`<!--]-->`);
                                          } else {
                                            return [
                                              (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                                                return openBlock(), createBlock(_component_a_checkbox, {
                                                  key: item.value,
                                                  value: item.value
                                                }, {
                                                  checkbox: withCtx(({ checked }) => [
                                                    createVNode(_component_a_space, {
                                                      align: "start",
                                                      class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                        "border-[#1677ff] bg-[#F2F5FF]": checked
                                                      }]
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(item.label), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["class"])
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 128))
                                            ];
                                          }
                                        }),
                                        _: 1
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_a_checkbox_group, {
                                          max: 2,
                                          modelValue: unref(form).secondSubjectList,
                                          "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                                          onChange: changeSecondSubject
                                        }, {
                                          default: withCtx(() => [
                                            (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                                              return openBlock(), createBlock(_component_a_checkbox, {
                                                key: item.value,
                                                value: item.value
                                              }, {
                                                checkbox: withCtx(({ checked }) => [
                                                  createVNode(_component_a_space, {
                                                    align: "start",
                                                    class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                      "border-[#1677ff] bg-[#F2F5FF]": checked
                                                    }]
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(item.label), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["class"])
                                                ]),
                                                _: 2
                                              }, 1032, ["value"]);
                                            }), 128))
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue"])
                                      ];
                                    }
                                  }),
                                  _: 1
                                }, _parent5, _scopeId4));
                              } else {
                                return [
                                  createVNode(_component_a_form_item, {
                                    label: "\u6B21\u9009\u79D1\u76EE(4\u90092):",
                                    required: ""
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_checkbox_group, {
                                        max: 2,
                                        modelValue: unref(form).secondSubjectList,
                                        "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                                        onChange: changeSecondSubject
                                      }, {
                                        default: withCtx(() => [
                                          (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                                            return openBlock(), createBlock(_component_a_checkbox, {
                                              key: item.value,
                                              value: item.value
                                            }, {
                                              checkbox: withCtx(({ checked }) => [
                                                createVNode(_component_a_space, {
                                                  align: "start",
                                                  class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                    "border-[#1677ff] bg-[#F2F5FF]": checked
                                                  }]
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(item.label), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["class"])
                                              ]),
                                              _: 2
                                            }, 1032, ["value"]);
                                          }), 128))
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ]),
                                    _: 1
                                  })
                                ];
                              }
                            }),
                            _: 1
                          }, _parent4, _scopeId3));
                          _push4(`<!--]-->`);
                        } else {
                          _push4(`<!---->`);
                        }
                        _push4(ssrRenderComponent(_component_a_grid_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_form_item, {
                                label: "\u9AD8\u8003\u5206\u6570:",
                                field: "score",
                                "validate-trigger": ["input"]
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_a_input_number, {
                                      modelValue: unref(form).score,
                                      "onUpdate:modelValue": ($event) => unref(form).score = $event,
                                      modelModifiers: { trim: true },
                                      precision: 0,
                                      min: 0,
                                      max: 750,
                                      "hide-button": "",
                                      "allow-clear": "",
                                      placeholder: "\u8BF7\u8F93\u5165\u9AD8\u8003\u5206\u6570",
                                      onInput: changeScore
                                    }, {
                                      append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div data-v-bf0d1591${_scopeId6}>\u5206</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, "\u5206")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_a_input_number, {
                                        modelValue: unref(form).score,
                                        "onUpdate:modelValue": ($event) => unref(form).score = $event,
                                        modelModifiers: { trim: true },
                                        precision: 0,
                                        min: 0,
                                        max: 750,
                                        "hide-button": "",
                                        "allow-clear": "",
                                        placeholder: "\u8BF7\u8F93\u5165\u9AD8\u8003\u5206\u6570",
                                        onInput: changeScore
                                      }, {
                                        append: withCtx(() => [
                                          createVNode("div", null, "\u5206")
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_form_item, {
                                  label: "\u9AD8\u8003\u5206\u6570:",
                                  field: "score",
                                  "validate-trigger": ["input"]
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_input_number, {
                                      modelValue: unref(form).score,
                                      "onUpdate:modelValue": ($event) => unref(form).score = $event,
                                      modelModifiers: { trim: true },
                                      precision: 0,
                                      min: 0,
                                      max: 750,
                                      "hide-button": "",
                                      "allow-clear": "",
                                      placeholder: "\u8BF7\u8F93\u5165\u9AD8\u8003\u5206\u6570",
                                      onInput: changeScore
                                    }, {
                                      append: withCtx(() => [
                                        createVNode("div", null, "\u5206")
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_a_grid_item, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_a_form_item, {
                                label: "\u7701\u6392\u540D:",
                                required: ""
                              }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_a_input_number, {
                                      modelValue: unref(form).wc,
                                      "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                                      modelModifiers: { trim: true },
                                      readonly: "",
                                      "hide-button": "",
                                      placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09"
                                    }, {
                                      append: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`<div data-v-bf0d1591${_scopeId6}>\u4F4D</div>`);
                                        } else {
                                          return [
                                            createVNode("div", null, "\u4F4D")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_a_input_number, {
                                        modelValue: unref(form).wc,
                                        "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                                        modelModifiers: { trim: true },
                                        readonly: "",
                                        "hide-button": "",
                                        placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09"
                                      }, {
                                        append: withCtx(() => [
                                          createVNode("div", null, "\u4F4D")
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue"])
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_a_form_item, {
                                  label: "\u7701\u6392\u540D:",
                                  required: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_input_number, {
                                      modelValue: unref(form).wc,
                                      "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                                      modelModifiers: { trim: true },
                                      readonly: "",
                                      "hide-button": "",
                                      placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09"
                                    }, {
                                      append: withCtx(() => [
                                        createVNode("div", null, "\u4F4D")
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_grid_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u9AD8\u8003\u7701\u4EFD:",
                                field: "province",
                                "validate-trigger": ["blur"]
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_select, {
                                    modelValue: unref(form).province,
                                    "onUpdate:modelValue": ($event) => unref(form).province = $event,
                                    placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u7701\u4EFD",
                                    "allow-clear": "",
                                    disabled: "",
                                    options: unref(provinceList),
                                    onChange: changeProvince
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_grid_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u9AD8\u8003\u5E74\u4EFD:",
                                field: "gkYear",
                                "validate-trigger": ["blur"]
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_select, {
                                    modelValue: unref(form).gkYear,
                                    "onUpdate:modelValue": ($event) => unref(form).gkYear = $event,
                                    placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u5E74\u4EFD",
                                    "allow-clear": "",
                                    disabled: "",
                                    options: ("GK_DATE_OPTIONS" in _ctx ? _ctx.GK_DATE_OPTIONS : unref(GK_DATE_OPTIONS))()
                                  }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_grid_item, { span: 24 }, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u8003\u8BD5\u7C7B\u578B:",
                                required: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_radio, {
                                    modelValue: unref(form).uType,
                                    "onUpdate:modelValue": ($event) => unref(form).uType = $event
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode("\u666E\u901A\u7C7B")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          unref(form).gkms === "3+3" ? (openBlock(), createBlock(_component_a_grid_item, {
                            key: 0,
                            span: 24
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u9009\u62E9\u79D1\u76EE(6\u90093):",
                                required: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_checkbox_group, {
                                    max: 3,
                                    modelValue: unref(form).subjectList,
                                    "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                                    onChange: changeSubject
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                                        return openBlock(), createBlock(_component_a_checkbox, {
                                          key: item.value,
                                          value: item.value
                                        }, {
                                          checkbox: withCtx(({ checked }) => [
                                            createVNode(_component_a_space, {
                                              align: "start",
                                              class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                "border-[#1677ff] bg-[#F2F5FF]": checked
                                              }]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.label), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })) : createCommentVNode("", true),
                          unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode(_component_a_grid_item, { span: 24 }, {
                              default: withCtx(() => [
                                createVNode(_component_a_form_item, {
                                  label: "\u9996\u9009\u79D1\u76EE(2\u90091):",
                                  required: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_checkbox_group, {
                                      max: 1,
                                      modelValue: unref(form).firstSubjectList,
                                      "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                                      onChange: changeFirstSubject
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                                          return openBlock(), createBlock(_component_a_checkbox, {
                                            key: item.value,
                                            value: item.value
                                          }, {
                                            checkbox: withCtx(({ checked }) => [
                                              createVNode(_component_a_space, {
                                                align: "start",
                                                class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                  "border-[#1677ff] bg-[#F2F5FF]": checked
                                                }]
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.label), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_a_grid_item, { span: 24 }, {
                              default: withCtx(() => [
                                createVNode(_component_a_form_item, {
                                  label: "\u6B21\u9009\u79D1\u76EE(4\u90092):",
                                  required: ""
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_a_checkbox_group, {
                                      max: 2,
                                      modelValue: unref(form).secondSubjectList,
                                      "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                                      onChange: changeSecondSubject
                                    }, {
                                      default: withCtx(() => [
                                        (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                                          return openBlock(), createBlock(_component_a_checkbox, {
                                            key: item.value,
                                            value: item.value
                                          }, {
                                            checkbox: withCtx(({ checked }) => [
                                              createVNode(_component_a_space, {
                                                align: "start",
                                                class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                  "border-[#1677ff] bg-[#F2F5FF]": checked
                                                }]
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode(toDisplayString(item.label), 1)
                                                ]),
                                                _: 2
                                              }, 1032, ["class"])
                                            ]),
                                            _: 2
                                          }, 1032, ["value"]);
                                        }), 128))
                                      ]),
                                      _: 1
                                    }, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ], 64)) : createCommentVNode("", true),
                          createVNode(_component_a_grid_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u9AD8\u8003\u5206\u6570:",
                                field: "score",
                                "validate-trigger": ["input"]
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_input_number, {
                                    modelValue: unref(form).score,
                                    "onUpdate:modelValue": ($event) => unref(form).score = $event,
                                    modelModifiers: { trim: true },
                                    precision: 0,
                                    min: 0,
                                    max: 750,
                                    "hide-button": "",
                                    "allow-clear": "",
                                    placeholder: "\u8BF7\u8F93\u5165\u9AD8\u8003\u5206\u6570",
                                    onInput: changeScore
                                  }, {
                                    append: withCtx(() => [
                                      createVNode("div", null, "\u5206")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_grid_item, null, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u7701\u6392\u540D:",
                                required: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_input_number, {
                                    modelValue: unref(form).wc,
                                    "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                                    modelModifiers: { trim: true },
                                    readonly: "",
                                    "hide-button": "",
                                    placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09"
                                  }, {
                                    append: withCtx(() => [
                                      createVNode("div", null, "\u4F4D")
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_grid, {
                      cols: 2,
                      colGap: 12,
                      rowGap: 12
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_grid_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u9AD8\u8003\u7701\u4EFD:",
                              field: "province",
                              "validate-trigger": ["blur"]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_select, {
                                  modelValue: unref(form).province,
                                  "onUpdate:modelValue": ($event) => unref(form).province = $event,
                                  placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u7701\u4EFD",
                                  "allow-clear": "",
                                  disabled: "",
                                  options: unref(provinceList),
                                  onChange: changeProvince
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_grid_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u9AD8\u8003\u5E74\u4EFD:",
                              field: "gkYear",
                              "validate-trigger": ["blur"]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_select, {
                                  modelValue: unref(form).gkYear,
                                  "onUpdate:modelValue": ($event) => unref(form).gkYear = $event,
                                  placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u5E74\u4EFD",
                                  "allow-clear": "",
                                  disabled: "",
                                  options: ("GK_DATE_OPTIONS" in _ctx ? _ctx.GK_DATE_OPTIONS : unref(GK_DATE_OPTIONS))()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_grid_item, { span: 24 }, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u8003\u8BD5\u7C7B\u578B:",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_radio, {
                                  modelValue: unref(form).uType,
                                  "onUpdate:modelValue": ($event) => unref(form).uType = $event
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u666E\u901A\u7C7B")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        unref(form).gkms === "3+3" ? (openBlock(), createBlock(_component_a_grid_item, {
                          key: 0,
                          span: 24
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u9009\u62E9\u79D1\u76EE(6\u90093):",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_checkbox_group, {
                                  max: 3,
                                  modelValue: unref(form).subjectList,
                                  "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                                  onChange: changeSubject
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                                      return openBlock(), createBlock(_component_a_checkbox, {
                                        key: item.value,
                                        value: item.value
                                      }, {
                                        checkbox: withCtx(({ checked }) => [
                                          createVNode(_component_a_space, {
                                            align: "start",
                                            class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                              "border-[#1677ff] bg-[#F2F5FF]": checked
                                            }]
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode(_component_a_grid_item, { span: 24 }, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u9996\u9009\u79D1\u76EE(2\u90091):",
                                required: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_checkbox_group, {
                                    max: 1,
                                    modelValue: unref(form).firstSubjectList,
                                    "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                                    onChange: changeFirstSubject
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                                        return openBlock(), createBlock(_component_a_checkbox, {
                                          key: item.value,
                                          value: item.value
                                        }, {
                                          checkbox: withCtx(({ checked }) => [
                                            createVNode(_component_a_space, {
                                              align: "start",
                                              class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                "border-[#1677ff] bg-[#F2F5FF]": checked
                                              }]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.label), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_grid_item, { span: 24 }, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u6B21\u9009\u79D1\u76EE(4\u90092):",
                                required: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_checkbox_group, {
                                    max: 2,
                                    modelValue: unref(form).secondSubjectList,
                                    "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                                    onChange: changeSecondSubject
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                                        return openBlock(), createBlock(_component_a_checkbox, {
                                          key: item.value,
                                          value: item.value
                                        }, {
                                          checkbox: withCtx(({ checked }) => [
                                            createVNode(_component_a_space, {
                                              align: "start",
                                              class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                "border-[#1677ff] bg-[#F2F5FF]": checked
                                              }]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.label), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ], 64)) : createCommentVNode("", true),
                        createVNode(_component_a_grid_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u9AD8\u8003\u5206\u6570:",
                              field: "score",
                              "validate-trigger": ["input"]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_input_number, {
                                  modelValue: unref(form).score,
                                  "onUpdate:modelValue": ($event) => unref(form).score = $event,
                                  modelModifiers: { trim: true },
                                  precision: 0,
                                  min: 0,
                                  max: 750,
                                  "hide-button": "",
                                  "allow-clear": "",
                                  placeholder: "\u8BF7\u8F93\u5165\u9AD8\u8003\u5206\u6570",
                                  onInput: changeScore
                                }, {
                                  append: withCtx(() => [
                                    createVNode("div", null, "\u5206")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_grid_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u7701\u6392\u540D:",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_input_number, {
                                  modelValue: unref(form).wc,
                                  "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                                  modelModifiers: { trim: true },
                                  readonly: "",
                                  "hide-button": "",
                                  placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09"
                                }, {
                                  append: withCtx(() => [
                                    createVNode("div", null, "\u4F4D")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div class="flex justify-center items-center mt-[30px]" data-v-bf0d1591${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_button, {
              size: "large",
              class: "submit",
              onClick: validateData,
              disabled: unref(isDisabled),
              loading: unref(loading)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`\u786E\u5B9A\u4FEE\u6539`);
                } else {
                  return [
                    createTextVNode("\u786E\u5B9A\u4FEE\u6539")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div>`);
            if (unref(form).isSure) {
              _push2(ssrRenderComponent(_component_zs_choice_sure_change_score_modal, {
                onSuccess: () => {
                  unref(form).isSure = false, saveWishInfo();
                },
                onCancel: ($event) => unref(form).isSure = false
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "bg-white p-[0px_30px] rounded-[5px_5px] w-[850px]" }, [
                createVNode("div", { class: "flex justify-between items-center cursor-pointer mb-[30px]" }, [
                  createVNode("div", { class: "text-[24px] font-bold" }, "\u8BBE\u7F6E\u6210\u7EE9")
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
                    createVNode(_component_a_grid, {
                      cols: 2,
                      colGap: 12,
                      rowGap: 12
                    }, {
                      default: withCtx(() => [
                        createVNode(_component_a_grid_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u9AD8\u8003\u7701\u4EFD:",
                              field: "province",
                              "validate-trigger": ["blur"]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_select, {
                                  modelValue: unref(form).province,
                                  "onUpdate:modelValue": ($event) => unref(form).province = $event,
                                  placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u7701\u4EFD",
                                  "allow-clear": "",
                                  disabled: "",
                                  options: unref(provinceList),
                                  onChange: changeProvince
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_grid_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u9AD8\u8003\u5E74\u4EFD:",
                              field: "gkYear",
                              "validate-trigger": ["blur"]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_select, {
                                  modelValue: unref(form).gkYear,
                                  "onUpdate:modelValue": ($event) => unref(form).gkYear = $event,
                                  placeholder: "\u8BF7\u9009\u62E9\u9AD8\u8003\u5E74\u4EFD",
                                  "allow-clear": "",
                                  disabled: "",
                                  options: ("GK_DATE_OPTIONS" in _ctx ? _ctx.GK_DATE_OPTIONS : unref(GK_DATE_OPTIONS))()
                                }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_grid_item, { span: 24 }, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u8003\u8BD5\u7C7B\u578B:",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_radio, {
                                  modelValue: unref(form).uType,
                                  "onUpdate:modelValue": ($event) => unref(form).uType = $event
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode("\u666E\u901A\u7C7B")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        unref(form).gkms === "3+3" ? (openBlock(), createBlock(_component_a_grid_item, {
                          key: 0,
                          span: 24
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u9009\u62E9\u79D1\u76EE(6\u90093):",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_checkbox_group, {
                                  max: 3,
                                  modelValue: unref(form).subjectList,
                                  "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
                                  onChange: changeSubject
                                }, {
                                  default: withCtx(() => [
                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6), (item) => {
                                      return openBlock(), createBlock(_component_a_checkbox, {
                                        key: item.value,
                                        value: item.value
                                      }, {
                                        checkbox: withCtx(({ checked }) => [
                                          createVNode(_component_a_space, {
                                            align: "start",
                                            class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                              "border-[#1677ff] bg-[#F2F5FF]": checked
                                            }]
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode(toDisplayString(item.label), 1)
                                            ]),
                                            _: 2
                                          }, 1032, ["class"])
                                        ]),
                                        _: 2
                                      }, 1032, ["value"]);
                                    }), 128))
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })) : createCommentVNode("", true),
                        unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode(_component_a_grid_item, { span: 24 }, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u9996\u9009\u79D1\u76EE(2\u90091):",
                                required: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_checkbox_group, {
                                    max: 1,
                                    modelValue: unref(form).firstSubjectList,
                                    "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
                                    onChange: changeFirstSubject
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList("FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS), (item) => {
                                        return openBlock(), createBlock(_component_a_checkbox, {
                                          key: item.value,
                                          value: item.value
                                        }, {
                                          checkbox: withCtx(({ checked }) => [
                                            createVNode(_component_a_space, {
                                              align: "start",
                                              class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                "border-[#1677ff] bg-[#F2F5FF]": checked
                                              }]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.label), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_a_grid_item, { span: 24 }, {
                            default: withCtx(() => [
                              createVNode(_component_a_form_item, {
                                label: "\u6B21\u9009\u79D1\u76EE(4\u90092):",
                                required: ""
                              }, {
                                default: withCtx(() => [
                                  createVNode(_component_a_checkbox_group, {
                                    max: 2,
                                    modelValue: unref(form).secondSubjectList,
                                    "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
                                    onChange: changeSecondSubject
                                  }, {
                                    default: withCtx(() => [
                                      (openBlock(true), createBlock(Fragment, null, renderList("SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS), (item) => {
                                        return openBlock(), createBlock(_component_a_checkbox, {
                                          key: item.value,
                                          value: item.value
                                        }, {
                                          checkbox: withCtx(({ checked }) => [
                                            createVNode(_component_a_space, {
                                              align: "start",
                                              class: ["rounded-[4px] p-[10px_20px] text-center border", {
                                                "border-[#1677ff] bg-[#F2F5FF]": checked
                                              }]
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode(toDisplayString(item.label), 1)
                                              ]),
                                              _: 2
                                            }, 1032, ["class"])
                                          ]),
                                          _: 2
                                        }, 1032, ["value"]);
                                      }), 128))
                                    ]),
                                    _: 1
                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ], 64)) : createCommentVNode("", true),
                        createVNode(_component_a_grid_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u9AD8\u8003\u5206\u6570:",
                              field: "score",
                              "validate-trigger": ["input"]
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_input_number, {
                                  modelValue: unref(form).score,
                                  "onUpdate:modelValue": ($event) => unref(form).score = $event,
                                  modelModifiers: { trim: true },
                                  precision: 0,
                                  min: 0,
                                  max: 750,
                                  "hide-button": "",
                                  "allow-clear": "",
                                  placeholder: "\u8BF7\u8F93\u5165\u9AD8\u8003\u5206\u6570",
                                  onInput: changeScore
                                }, {
                                  append: withCtx(() => [
                                    createVNode("div", null, "\u5206")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }),
                        createVNode(_component_a_grid_item, null, {
                          default: withCtx(() => [
                            createVNode(_component_a_form_item, {
                              label: "\u7701\u6392\u540D:",
                              required: ""
                            }, {
                              default: withCtx(() => [
                                createVNode(_component_a_input_number, {
                                  modelValue: unref(form).wc,
                                  "onUpdate:modelValue": ($event) => unref(form).wc = $event,
                                  modelModifiers: { trim: true },
                                  readonly: "",
                                  "hide-button": "",
                                  placeholder: "\u9884\u4F30\u4F4D\u6B21\uFF08\u81EA\u52A8\u6362\u7B97\uFF09"
                                }, {
                                  append: withCtx(() => [
                                    createVNode("div", null, "\u4F4D")
                                  ]),
                                  _: 1
                                }, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }, 8, ["model", "onKeyup"]),
                createVNode("div", { class: "flex justify-center items-center mt-[30px]" }, [
                  createVNode(_component_a_button, {
                    size: "large",
                    class: "submit",
                    onClick: validateData,
                    disabled: unref(isDisabled),
                    loading: unref(loading)
                  }, {
                    default: withCtx(() => [
                      createTextVNode("\u786E\u5B9A\u4FEE\u6539")
                    ]),
                    _: 1
                  }, 8, ["disabled", "loading"])
                ])
              ]),
              unref(form).isSure ? (openBlock(), createBlock(_component_zs_choice_sure_change_score_modal, {
                key: 0,
                onSuccess: () => {
                  unref(form).isSure = false, saveWishInfo();
                },
                onCancel: ($event) => unref(form).isSure = false
              }, null, 8, ["onSuccess", "onCancel"])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsChoiceChangeScoreModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-bf0d1591"]]);

export { __nuxt_component_2 as _ };
//# sourceMappingURL=index-4dfe90df.mjs.map
