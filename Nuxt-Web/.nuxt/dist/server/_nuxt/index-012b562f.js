import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    background: { default: "#FFA864" },
    color: { default: "#FFA864" },
    width: { default: "0" },
    isAnimate: { type: Boolean, default: true }
  },
  setup(__props) {
    const props = __props;
    const currentWidth = ref("");
    const animateProgress = () => {
      if (props.isAnimate) {
        setTimeout(() => {
          currentWidth.value = props.width;
        }, 500);
      } else {
        currentWidth.value = props.width;
      }
    };
    animateProgress();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full bg-[#fff] border-[#dddddd] rounded-[12px]" }, _attrs))} data-v-352bc340><div class="w-full h-[10px] bg-[#F4F4F4] flex" data-v-352bc340><div class="rounded-[10px] progress-fill" style="${ssrRenderStyle({
        width: unref(currentWidth) + "%",
        background: _ctx.background
      })}" data-v-352bc340></div></div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_352bc340_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsProportion/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_11 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-352bc340"]]);
export {
  __nuxt_component_11 as _
};
//# sourceMappingURL=index-012b562f.js.map
