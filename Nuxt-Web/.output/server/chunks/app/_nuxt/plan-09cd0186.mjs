import { u as useHead } from '../server.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "plan",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u5347\u5B66\u89C4\u5212"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-container mx-auto" }, _attrs))}><div class="flex items-center justify-center flex-col min-h-[60vh]"><h1 class="font-bold">\u6682\u672A\u5F00\u653E \u656C\u8BF7\u671F\u5F85</h1></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/plan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=plan-09cd0186.mjs.map
