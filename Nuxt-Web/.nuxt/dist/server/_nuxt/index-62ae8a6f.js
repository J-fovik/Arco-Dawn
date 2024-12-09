import { g as getPrefixCls, r as useSize, X as getAllElements, _ as _export_sfc, s as setGlobalConfig, n as getComponentPrefix } from "./use-teleport-container-1599a5a4.js";
import { defineComponent, toRefs, computed, reactive, provide, createVNode, inject, openBlock, createElementBlock, normalizeClass, renderSlot } from "vue";
import { S as Spin } from "./index-11d38f35.js";
const cardInjectionKey = Symbol("ArcoCard");
var _Card = /* @__PURE__ */ defineComponent({
  name: "Card",
  components: {
    Spin
  },
  props: {
    bordered: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    hoverable: {
      type: Boolean,
      default: false
    },
    size: {
      type: String
    },
    headerStyle: {
      type: Object,
      default: () => ({})
    },
    bodyStyle: {
      type: Object,
      default: () => ({})
    },
    title: {
      type: String
    },
    extra: {
      type: String
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("card");
    const {
      size
    } = toRefs(props);
    const {
      mergedSize: _mergedSize
    } = useSize(size);
    const mergedSize = computed(() => {
      if (_mergedSize.value === "small" || _mergedSize.value === "mini") {
        return "small";
      }
      return "medium";
    });
    const renderActions = (vns) => {
      const actions = getAllElements(vns);
      return createVNode("div", {
        "class": `${prefixCls}-actions`
      }, [createVNode("div", {
        "class": `${prefixCls}-actions-right`
      }, [actions.map((action, index2) => createVNode("span", {
        "key": `action-${index2}`,
        "class": `${prefixCls}-actions-item`
      }, [action]))])]);
    };
    const cardContext = reactive({
      hasMeta: false,
      hasGrid: false,
      slots,
      renderActions
    });
    provide(cardInjectionKey, cardContext);
    const cls = computed(() => [prefixCls, `${prefixCls}-size-${mergedSize.value}`, {
      [`${prefixCls}-loading`]: props.loading,
      [`${prefixCls}-bordered`]: props.bordered,
      [`${prefixCls}-hoverable`]: props.hoverable,
      [`${prefixCls}-contain-grid`]: cardContext.hasGrid
    }]);
    return () => {
      var _a, _b, _c, _d, _e, _f, _g;
      const hasTitle = Boolean((_a = slots.title) != null ? _a : props.title);
      const hasExtra = Boolean((_b = slots.extra) != null ? _b : props.extra);
      return createVNode("div", {
        "class": cls.value
      }, [(hasTitle || hasExtra) && createVNode("div", {
        "class": [`${prefixCls}-header`, {
          [`${prefixCls}-header-no-title`]: !hasTitle
        }],
        "style": props.headerStyle
      }, [hasTitle && createVNode("div", {
        "class": `${prefixCls}-header-title`
      }, [(_d = (_c = slots.title) == null ? void 0 : _c.call(slots)) != null ? _d : props.title]), hasExtra && createVNode("div", {
        "class": `${prefixCls}-header-extra`
      }, [(_f = (_e = slots.extra) == null ? void 0 : _e.call(slots)) != null ? _f : props.extra])]), slots.cover && createVNode("div", {
        "class": `${prefixCls}-cover`
      }, [slots.cover()]), createVNode("div", {
        "class": `${prefixCls}-body`,
        "style": props.bodyStyle
      }, [props.loading ? createVNode(Spin, null, null) : (_g = slots.default) == null ? void 0 : _g.call(slots), slots.actions && !cardContext.hasMeta && renderActions(slots.actions())])]);
    };
  }
});
var CardMeta = /* @__PURE__ */ defineComponent({
  name: "CardMeta",
  props: {
    title: {
      type: String
    },
    description: {
      type: String
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("card-meta");
    const context = inject(cardInjectionKey);
    return () => {
      var _a, _b, _c, _d, _e, _f;
      const hasTitle = Boolean((_a = slots.title) != null ? _a : props.title);
      const hasDesc = Boolean((_b = slots.description) != null ? _b : props.description);
      return createVNode("div", {
        "class": prefixCls
      }, [(hasTitle || hasDesc) && createVNode("div", {
        "class": `${prefixCls}-content`
      }, [hasTitle && createVNode("div", {
        "class": `${prefixCls}-title`
      }, [(_d = (_c = slots.title) == null ? void 0 : _c.call(slots)) != null ? _d : props.title]), hasDesc && createVNode("div", {
        "class": `${prefixCls}-description`
      }, [(_f = (_e = slots.description) == null ? void 0 : _e.call(slots)) != null ? _f : props.description])]), (slots.avatar || (context == null ? void 0 : context.slots.actions)) && createVNode("div", {
        "class": [`${prefixCls}-footer `, {
          [`${prefixCls}-footer-only-actions`]: !slots.avatar
        }]
      }, [slots.avatar && createVNode("div", {
        "class": `${prefixCls}-avatar`
      }, [slots.avatar()]), context && context.slots.actions && context.renderActions(context.slots.actions())])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "CardGrid",
  props: {
    hoverable: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("card-grid");
    inject(cardInjectionKey);
    const cls = computed(() => {
      return [
        prefixCls,
        {
          [`${prefixCls}-hoverable`]: props.hoverable
        }
      ];
    });
    return {
      cls
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.cls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var CardGrid = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Card = Object.assign(_Card, {
  Meta: CardMeta,
  Grid: CardGrid,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Card.name, _Card);
    app.component(componentPrefix + CardMeta.name, CardMeta);
    app.component(componentPrefix + CardGrid.name, CardGrid);
  }
});
const index = "";
export {
  Card as C
};
//# sourceMappingURL=index-62ae8a6f.js.map
