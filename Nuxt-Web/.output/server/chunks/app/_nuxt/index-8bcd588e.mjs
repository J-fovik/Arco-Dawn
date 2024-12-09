import { s as setGlobalConfig, a as getComponentPrefix, g as getPrefixCls, f as getAllElements, j as isArray, i as isNumber } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, computed, Comment, createVNode, Fragment } from 'vue';

var _Space = /* @__PURE__ */ defineComponent({
  name: "Space",
  props: {
    align: {
      type: String
    },
    direction: {
      type: String,
      default: "horizontal"
    },
    size: {
      type: [Number, String, Array],
      default: "small"
    },
    wrap: {
      type: Boolean
    },
    fill: {
      type: Boolean
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("space");
    const mergedAlign = computed(() => {
      var _a;
      return (_a = props.align) != null ? _a : props.direction === "horizontal" ? "center" : "";
    });
    const cls = computed(() => [prefixCls, {
      [`${prefixCls}-${props.direction}`]: props.direction,
      [`${prefixCls}-align-${mergedAlign.value}`]: mergedAlign.value,
      [`${prefixCls}-wrap`]: props.wrap,
      [`${prefixCls}-fill`]: props.fill
    }]);
    function getMargin(size) {
      if (isNumber(size)) {
        return size;
      }
      switch (size) {
        case "mini":
          return 4;
        case "small":
          return 8;
        case "medium":
          return 16;
        case "large":
          return 24;
        default:
          return 8;
      }
    }
    const getMarginStyle = (isLast) => {
      const style = {};
      const marginRight = `${getMargin(isArray(props.size) ? props.size[0] : props.size)}px`;
      const marginBottom = `${getMargin(isArray(props.size) ? props.size[1] : props.size)}px`;
      if (isLast) {
        return props.wrap ? {
          marginBottom
        } : {};
      }
      if (props.direction === "horizontal") {
        style.marginRight = marginRight;
      }
      if (props.direction === "vertical" || props.wrap) {
        style.marginBottom = marginBottom;
      }
      return style;
    };
    return () => {
      var _a;
      const children = getAllElements((_a = slots.default) == null ? void 0 : _a.call(slots), true).filter((item) => item.type !== Comment);
      return createVNode("div", {
        "class": cls.value
      }, [children.map((child, index2) => {
        var _a2, _b;
        const shouldRenderSplit = slots.split && index2 > 0;
        return createVNode(Fragment, {
          "key": (_a2 = child.key) != null ? _a2 : `item-${index2}`
        }, [shouldRenderSplit && createVNode("div", {
          "class": `${prefixCls}-item-split`,
          "style": getMarginStyle(false)
        }, [(_b = slots.split) == null ? void 0 : _b.call(slots)]), createVNode("div", {
          "class": `${prefixCls}-item`,
          "style": getMarginStyle(index2 === children.length - 1)
        }, [child])]);
      })]);
    };
  }
});
const Space = Object.assign(_Space, {
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _Space.name, _Space);
  }
});

export { Space as S };
//# sourceMappingURL=index-8bcd588e.mjs.map
