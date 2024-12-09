import { S as Space } from "./index-8bcd588e.js";
import "./use-teleport-container-1599a5a4.js";
import { defineComponent, withCtx, createVNode, unref, openBlock, createBlock, toDisplayString, createCommentVNode, Fragment, renderList, useSSRContext } from "vue";
import "hookable";
import { g as useRoute, d as useWebsiteInformation } from "../server.mjs";
import "destr";
import "devalue";
import "klona";
import { f as findOptions } from "./options-7ec13930.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    school: { default: () => {
    } }
  },
  setup(__props) {
    const route = useRoute();
    const { provinceCityList, getDictionValue } = useWebsiteInformation();
    const setHightLightStr = (text) => {
      let hightLightStr = `<span class="text-[#FFA864]">$&</span>`;
      let reg = new RegExp(route.query.keyword, "gi");
      return text.replace(reg, hightLightStr);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_space = Space;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center cursor-pointer"><div class="w-[80px] h-[80px]"><img${ssrRenderAttr("src", _ctx.school.logo)} class="w-[70px]"></div><div class="flex-1">`);
      if (_ctx.school.highlightYxmc) {
        _push(`<div class="text-[18px] font-bold">${setHightLightStr(_ctx.school.highlightYxmc)}</div>`);
      } else {
        _push(`<div class="text-[18px] font-bold">${ssrInterpolate(_ctx.school.yxmc)}</div>`);
      }
      _push(ssrRenderComponent(_component_a_space, null, {
        split: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="w-[2px] h-[8px] text-[#999999]"${_scopeId}>|</span>`);
          } else {
            return [
              createVNode("span", { class: "w-[2px] h-[8px] text-[#999999]" }, "|")
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
          if (_push2) {
            if ((_a = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), _ctx.school.sf)) == null ? void 0 : _a.label) {
              _push2(`<span${_scopeId}>${ssrInterpolate((_b = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), _ctx.school.sf)) == null ? void 0 : _b.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_c = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), _ctx.school.yxLx)) == null ? void 0 : _c.label) {
              _push2(`<span${_scopeId}>${ssrInterpolate((_d = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), _ctx.school.yxLx)) == null ? void 0 : _d.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.school.lsy) {
              _push2(`<span${_scopeId}>${ssrInterpolate(_ctx.school.lsy)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            if ((_e = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), _ctx.school.bxXz)) == null ? void 0 : _e.label) {
              _push2(`<span${_scopeId}>${ssrInterpolate((_f = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), _ctx.school.bxXz)) == null ? void 0 : _f.label)}</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              ((_g = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), _ctx.school.sf)) == null ? void 0 : _g.label) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString((_h = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(provinceCityList), _ctx.school.sf)) == null ? void 0 : _h.label), 1)) : createCommentVNode("", true),
              ((_i = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), _ctx.school.yxLx)) == null ? void 0 : _i.label) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString((_j = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("YXLX"), _ctx.school.yxLx)) == null ? void 0 : _j.label), 1)) : createCommentVNode("", true),
              _ctx.school.lsy ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(_ctx.school.lsy), 1)) : createCommentVNode("", true),
              ((_k = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), _ctx.school.bxXz)) == null ? void 0 : _k.label) ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString((_l = ("findOptions" in _ctx ? _ctx.findOptions : unref(findOptions))(unref(getDictionValue)("BXXZ"), _ctx.school.bxXz)) == null ? void 0 : _l.label), 1)) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div>`);
      _push(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.school.schoolTags, (tag, index) => {
              _push2(`<span class="p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"${_scopeId}>${ssrInterpolate(tag)}</span>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.school.schoolTags, (tag, index) => {
                return openBlock(), createBlock("span", {
                  key: index,
                  class: "p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
                }, toDisplayString(tag), 1);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsSchoolListMeta/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=index-c58e1e57.js.map
