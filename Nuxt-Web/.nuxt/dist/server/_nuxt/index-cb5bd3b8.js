import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrInterpolate, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    title: { default: "" },
    size: { default: "mini" },
    color: { default: "#000000" }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-between" }, _attrs))}><div class="flex items-center gap-x-[10px]"><div class="${ssrRenderClass([{
        "h-[20px] w-[6px]": _ctx.size === "large",
        "h-[16px] w-[4px]": _ctx.size === "small",
        "h-[14px] w-[3px]": _ctx.size === "mini"
      }, "bg-[#7C92FF] rounded-lg"])}"></div><span class="${ssrRenderClass([{
        "text-[20px]": _ctx.size === "large",
        "text-[17px]": _ctx.size === "small",
        "text-[14px]": _ctx.size === "mini",
        [`text-[${_ctx.color}]`]: true
      }, "font-bold text-center"])}">${ssrInterpolate(props.title)}</span><span class="${ssrRenderClass({
        "ml-[20px]": _ctx.size === "large",
        "ml-[12px]": _ctx.size === "small",
        "ml-[8px]": _ctx.size === "mini"
      })}">`);
      ssrRenderSlot(_ctx.$slots, "center", {}, null, _push, _parent);
      _push(`</span></div><div>`);
      ssrRenderSlot(_ctx.$slots, "right", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsTitle/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=index-cb5bd3b8.js.map
