import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, ref, watch, mergeProps, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderComponent } from 'vue/server-renderer';
import { I as IconDown } from './index-dd449d78.mjs';
import { I as IconUp } from './index-11d38f35.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => [] },
    defaultValues: { default: () => ({}) }
  },
  emits: ["change"],
  setup(__props, { emit: emits }) {
    const props = __props;
    const selected = ref({});
    watch(
      () => props.defaultValues,
      () => {
        props.data.forEach((item) => {
          var _a, _b;
          if (item.multiple)
            selected.value[item.key] = (_a = props.defaultValues[item.key]) != null ? _a : [""];
          else
            selected.value[item.key] = (_b = props.defaultValues[item.key]) != null ? _b : "";
        });
      },
      { deep: true, immediate: true }
    );
    const changeCollapse = (isCollapse, index) => {
      props.data[index].isCollapse = !isCollapse;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_button = Button;
      const _component_icon_down = IconDown;
      const _component_icon_up = IconUp;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "text-[#333]" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.data, (item, index) => {
        _push(`<div>`);
        if (item.isShow && item.options.length) {
          _push(`<div class="flex"><div class="text-[14px] mr-[15px] p-[5px_8px] text-[#606266]">${ssrInterpolate(item.title)}</div><ul class="${ssrRenderClass([item.isCollapse ? "h-[30px] overflow-hidden" : "", "flex flex-1 p-[0px] flex-row flex-wrap"])}"><!--[-->`);
          ssrRenderList(item.options, (option) => {
            _push(`<li class="${ssrRenderClass([{
              "bg-[#F2F5FF] text-[#7C92FF]": option.value === unref(selected)[item.key] || Array.isArray(unref(selected)[item.key]) && unref(selected)[item.key].includes(option.value)
            }, "flex items-center p-[5px_8px] mb-[5px] px-[6px] mr-[10px] text-[14px] cursor-pointer rounded-[4px] hover:text-[#7C92FF]"])}"><span>${ssrInterpolate(option.label)}</span></li>`);
          });
          _push(`<!--]--></ul>`);
          if (item.isCollapse || item.isCollapse === false) {
            _push(ssrRenderComponent(_component_a_button, {
              type: "text",
              size: "small",
              class: "!text-[#7C92FF]",
              onClick: ($event) => changeCollapse(item.isCollapse, index)
            }, {
              default: withCtx((_, _push2, _parent2, _scopeId) => {
                if (_push2) {
                  _push2(`<span class="mr-[5px]"${_scopeId}>${ssrInterpolate(item.isCollapse ? "\u66F4\u591A" : "\u6536\u8D77")}</span>`);
                  if (item.isCollapse) {
                    _push2(ssrRenderComponent(_component_icon_down, null, null, _parent2, _scopeId));
                  } else {
                    _push2(ssrRenderComponent(_component_icon_up, null, null, _parent2, _scopeId));
                  }
                } else {
                  return [
                    createVNode("span", { class: "mr-[5px]" }, toDisplayString(item.isCollapse ? "\u66F4\u591A" : "\u6536\u8D77"), 1),
                    item.isCollapse ? (openBlock(), createBlock(_component_icon_down, { key: 0 })) : (openBlock(), createBlock(_component_icon_up, { key: 1 }))
                  ];
                }
              }),
              _: 2
            }, _parent));
          } else {
            _push(`<!---->`);
          }
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsSelectFilter/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _ };
//# sourceMappingURL=index-3e511c39.mjs.map
