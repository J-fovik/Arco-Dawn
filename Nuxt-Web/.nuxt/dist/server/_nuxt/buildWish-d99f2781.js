import { _ as _sfc_main$1 } from "./index-cb5bd3b8.js";
import { B as Button } from "./use-teleport-container-1599a5a4.js";
import { T as Table } from "./index-6a06d329.js";
import { _ as __nuxt_component_2 } from "./index-4dfe90df.js";
/* empty css                */import "./index-11d38f35.js";
import "./index-90aba227.js";
import "./index-dd449d78.js";
import "./index-08fdf206.js";
/* empty css                */import "./index-f6f6f2a5.js";
import "./index-63900e07.js";
/* empty css                */import { u as useHead, b as useUser, e as useAsyncData, n as navigateTo, A as API_URLS, f as useNuxtApp } from "../server.mjs";
import { defineComponent, withAsyncContext, mergeProps, unref, withCtx, createTextVNode, createVNode, useSSRContext } from "vue";
import "destr";
import "devalue";
import "klona";
import { u as useBasicsState } from "./useBasicsState-8a7a18a4.js";
import { u as useForm } from "./useArco-b2247a5c.js";
import { a as turnThousandth } from "./index-a008b2db.js";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
import "./index-5f48af9c.js";
import "./get-value-by-path-11166a95.js";
import "./use-children-components-d7e0e48f.js";
import "./index-3959f291.js";
import "./index-d47379ff.js";
import "scroll-into-view-if-needed";
import "b-validate";
import "./index-4ecc34e0.js";
import "./index-8bcd588e.js";
/* empty css                */import "./options-7ec13930.js";
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
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "buildWish",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useHead({
      title: "查看志愿表"
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
          title: "批次",
          dataIndex: "pc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "科目类型",
          dataIndex: "kl",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "批次线",
          dataIndex: "score",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#FFFFFF",
            fontWeight: "bold"
          }
        },
        {
          title: "操作",
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
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_ADD_WISH_PC_LIST, {
          body: {
            xk: form.value.xk,
            score: form.value.score
          }
        });
        return {
          pcList: ((_a = res == null ? void 0 : res.data) == null ? void 0 : _a.pcList) ?? [],
          wish: ((_b = res == null ? void 0 : res.data) == null ? void 0 : _b.wish) ?? {}
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto min-h-[60vh]" }, _attrs))} data-v-eddb92ae><div class="flex items-center justify-between mt-[10px]" data-v-eddb92ae><div data-v-eddb92ae> 我的成绩: <span class="text-[#FFA864] cursor-pointer" data-v-eddb92ae>${ssrInterpolate(unref(form).xk)} ${ssrInterpolate(unref(form).score + "分")} ${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).wc) + "位")} <i class="iconfont icon-chuangzuo" data-v-eddb92ae></i></span><span class="ml-[20px]" data-v-eddb92ae>类型:<span class="text-[#FFA864]" data-v-eddb92ae>普通类</span></span></div><div class="border border-solid border-[#EDEDED] rounded-[8px] leading-[41px] px-[10px] cursor-pointer" data-v-eddb92ae> 我的志愿表 </div></div>`);
      if ((_b = (_a = unref(pcData)) == null ? void 0 : _a.wish) == null ? void 0 : _b.id) {
        _push(`<!--[-->`);
        _push(ssrRenderComponent(_component_zs_title, {
          title: "已建志愿表编辑",
          size: "small",
          class: "mt-[10px]"
        }, null, _parent));
        _push(`<div class="bg-[#F2F5FF] p-[20px] flex items-center justify-between mt-[20px]" data-v-eddb92ae><div data-v-eddb92ae> 继续编辑模拟志愿表 <span class="text-[#FFA864]" data-v-eddb92ae>${ssrInterpolate((_d = (_c = unref(pcData)) == null ? void 0 : _c.wish) == null ? void 0 : _d.zybt)}</span>，或进入 <span class="text-[#7C92FF]" data-v-eddb92ae>我的志愿表</span> 选择 </div>`);
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
              _push2(`继续模拟填志愿`);
            } else {
              return [
                createTextVNode("继续模拟填志愿")
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
        title: "新建模拟志愿表",
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
                  _push3(`新建填志愿`);
                } else {
                  return [
                    createTextVNode("新建填志愿")
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
                  createTextVNode("新建填志愿")
                ]),
                _: 2
              }, 1032, ["onClick"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="mt-[20px] bg-[#FFF7F0] p-[20px] leading-[22px]" data-v-eddb92ae><div class="font-bold text-[14px]" data-v-eddb92ae>系统使用须知</div><div class="text-[12px]" data-v-eddb92ae><div data-v-eddb92ae>1、当前为2024年招生计划数据；</div><div data-v-eddb92ae> 2、本系统依据历年各院校录取数据提供模拟志愿服务，正式填报请前往考试院官网； </div><div data-v-eddb92ae> 3、在正式填报时，以教育考试院公布的最新招生计划为准，本系统会在第一时间将最新的招生计划进行更新； </div><div data-v-eddb92ae>4、系统使用的“录取概率”根据过去历年的数据计算得出，仅作参考。</div></div></div>`);
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
const buildWish_vue_vue_type_style_index_0_scoped_eddb92ae_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/choice/buildWish.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const buildWish = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eddb92ae"]]);
export {
  buildWish as default
};
//# sourceMappingURL=buildWish-d99f2781.js.map
