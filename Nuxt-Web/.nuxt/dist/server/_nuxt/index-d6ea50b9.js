import { _ as _sfc_main$1 } from "./NuxtImg-9bcbe2bb.js";
import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    url: { default: "/images/no-data.png" }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center items-center flex-col min-h-[500px]" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: _ctx.url,
        width: "300",
        height: "300"
      }, null, _parent));
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsNoData/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as _
};
//# sourceMappingURL=index-d6ea50b9.js.map
