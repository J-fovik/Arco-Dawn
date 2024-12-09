import { M as Modal } from './useArco-b2247a5c.mjs';
import { n as IconClose } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, mergeProps, withCtx, renderSlot, useSSRContext, createVNode, toDisplayString } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    top: { default: "15%" },
    show: { type: Boolean, default: true },
    alignCenter: { type: Boolean, default: false }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_modal = Modal;
      _push(ssrRenderComponent(_component_a_modal, mergeProps({
        visible: _ctx.show,
        top: _ctx.top,
        width: "auto",
        "unmount-on-close": "",
        "align-center": _ctx.alignCenter,
        "mask-closable": false,
        footer: false,
        closable: false,
        "body-style": "padding: 0;overflow: visible",
        "modal-style": { "background-color": "transparent" }
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsModal/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    contentClass: { default: "" },
    title: { default: "" },
    top: { default: "10%" },
    alignCenter: { type: Boolean, default: false }
  },
  emits: ["cancel"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_modal = _sfc_main$1;
      const _component_icon_close = IconClose;
      _push(ssrRenderComponent(_component_zs_modal, mergeProps({
        top: _ctx.top,
        alignCenter: _ctx.alignCenter
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="${ssrRenderClass([_ctx.contentClass, "bg-white rounded-lg relative px-[20px] py-[30px]"])}"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_icon_close, {
              size: "20",
              class: "absolute top-[25px] right-[22px] cursor-pointer",
              onClick: ($event) => _ctx.$emit("cancel")
            }, null, _parent2, _scopeId));
            ssrRenderSlot(_ctx.$slots, "title", {}, () => {
              _push2(`<div class="text-[22px] font-medium leading-none text-center"${_scopeId}>${ssrInterpolate(_ctx.title)}</div>`);
            }, _push2, _parent2, _scopeId);
            _push2(`<div${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</div></div>`);
          } else {
            return [
              createVNode("div", {
                class: ["bg-white rounded-lg relative px-[20px] py-[30px]", _ctx.contentClass]
              }, [
                createVNode(_component_icon_close, {
                  size: "20",
                  class: "absolute top-[25px] right-[22px] cursor-pointer",
                  onClick: ($event) => _ctx.$emit("cancel")
                }, null, 8, ["onClick"]),
                renderSlot(_ctx.$slots, "title", {}, () => [
                  createVNode("div", { class: "text-[22px] font-medium leading-none text-center" }, toDisplayString(_ctx.title), 1)
                ]),
                createVNode("div", null, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ], 2)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsBaseModal/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as _, _sfc_main$1 as a };
//# sourceMappingURL=index-3959f291.mjs.map
