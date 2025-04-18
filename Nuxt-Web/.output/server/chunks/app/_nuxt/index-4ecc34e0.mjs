import { _ as _export_sfc, s as setGlobalConfig, a as getComponentPrefix, g as getPrefixCls, i as isNumber, e as isObject, d as isString, b as isUndefined } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, toRefs, computed, provide, reactive, openBlock, createElementBlock, normalizeClass, normalizeStyle, renderSlot, inject, createCommentVNode, ref, watch, onUpdated, watchEffect, onUnmounted } from 'vue';
import { p as pick } from './index-dd449d78.mjs';

const RowContextInjectionKey = Symbol("RowContextInjectionKey");
const GridContextInjectionKey = Symbol("GridContextInjectionKey");
const GridDataCollectorInjectionKey = Symbol("GridDataCollectorInjectionKey");
const responsiveArray = [
  "xxl",
  "xl",
  "lg",
  "md",
  "sm",
  "xs"
];
function isResponsiveValue(val) {
  return isObject(val);
}
function useResponsiveState(val, defaultVal, fallbackToXs = false) {
  const screens = ref({
    xs: true,
    sm: true,
    md: true,
    lg: true,
    xl: true,
    xxl: true
  });
  const result = computed(() => {
    let res = defaultVal;
    if (isResponsiveValue(val.value)) {
      for (let i = 0; i < responsiveArray.length; i++) {
        const breakpoint = responsiveArray[i];
        if ((screens.value[breakpoint] || breakpoint === "xs" && fallbackToXs) && val.value[breakpoint] !== void 0) {
          res = val.value[breakpoint];
          break;
        }
      }
    } else {
      res = val.value;
    }
    return res;
  });
  onUnmounted(() => {
  });
  return result;
}
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  name: "Row",
  props: {
    gutter: {
      type: [Number, Object, Array],
      default: 0
    },
    justify: {
      type: String,
      default: "start"
    },
    align: {
      type: String,
      default: "start"
    },
    div: {
      type: Boolean
    },
    wrap: {
      type: Boolean,
      default: true
    }
  },
  setup(props) {
    const { gutter, align, justify, div, wrap } = toRefs(props);
    const prefixCls = getPrefixCls("row");
    const classNames = computed(() => {
      return {
        [`${prefixCls}`]: !div.value,
        [`${prefixCls}-nowrap`]: !wrap.value,
        [`${prefixCls}-align-${align.value}`]: align.value,
        [`${prefixCls}-justify-${justify.value}`]: justify.value
      };
    });
    const propGutterHorizontal = computed(() => Array.isArray(gutter.value) ? gutter.value[0] : gutter.value);
    const propGutterVertical = computed(() => Array.isArray(gutter.value) ? gutter.value[1] : 0);
    const gutterHorizontal = useResponsiveState(propGutterHorizontal, 0);
    const gutterVertical = useResponsiveState(propGutterVertical, 0);
    const styles = computed(() => {
      const result = {};
      if ((gutterHorizontal.value || gutterVertical.value) && !div.value) {
        const marginHorizontal = -gutterHorizontal.value / 2;
        const marginVertical = -gutterVertical.value / 2;
        if (marginHorizontal) {
          result.marginLeft = `${marginHorizontal}px`;
          result.marginRight = `${marginHorizontal}px`;
        }
        if (marginVertical) {
          result.marginTop = `${marginVertical}px`;
          result.marginBottom = `${marginVertical}px`;
        }
      }
      return result;
    });
    const resultGutter = computed(() => [
      gutterHorizontal.value,
      gutterVertical.value
    ]);
    provide(RowContextInjectionKey, reactive({
      gutter: resultGutter,
      div
    }));
    return {
      classNames,
      styles
    };
  }
});
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
function useResponsiveValue(props) {
  const value = computed(() => {
    const { val, key, xs, sm, md, lg, xl, xxl } = props.value;
    if (!xs && !sm && !md && !lg && !xl && !xxl) {
      return val;
    }
    const result = {};
    responsiveArray.forEach((breakpoint) => {
      const config = props.value[breakpoint];
      if (isNumber(config)) {
        result[breakpoint] = config;
      } else if (isObject(config) && isNumber(config[key])) {
        result[breakpoint] = config[key];
      }
    });
    return result;
  });
  return value;
}
var __defProp$1 = Object.defineProperty;
var __getOwnPropSymbols$1 = Object.getOwnPropertySymbols;
var __hasOwnProp$1 = Object.prototype.hasOwnProperty;
var __propIsEnum$1 = Object.prototype.propertyIsEnumerable;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues$1 = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp$1.call(b, prop))
      __defNormalProp$1(a, prop, b[prop]);
  if (__getOwnPropSymbols$1)
    for (var prop of __getOwnPropSymbols$1(b)) {
      if (__propIsEnum$1.call(b, prop))
        __defNormalProp$1(a, prop, b[prop]);
    }
  return a;
};
function getAllowableFlexValue(flexValue) {
  if (isString(flexValue) && (["initial", "auto", "none"].includes(flexValue) || /^\d+$/.test(flexValue)) || isNumber(flexValue)) {
    return flexValue;
  }
  if (isString(flexValue) && /^\d+(px|em|rem|%)$/.test(flexValue)) {
    return `0 0 ${flexValue}`;
  }
  return void 0;
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  name: "Col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number
    },
    order: {
      type: Number
    },
    xs: {
      type: [Number, Object]
    },
    sm: {
      type: [Number, Object]
    },
    md: {
      type: [Number, Object]
    },
    lg: {
      type: [Number, Object]
    },
    xl: {
      type: [Number, Object]
    },
    xxl: {
      type: [Number, Object]
    },
    flex: {
      type: [Number, String]
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("col");
    const rowContext = inject(RowContextInjectionKey, {});
    const flexValue = computed(() => getAllowableFlexValue(props.flex));
    const mergeClassName = computed(() => {
      const { div } = rowContext;
      const { span: span2, offset, order, xs, sm, md, lg, xl, xxl } = props;
      const result = {
        [`${prefixCls}`]: !div,
        [`${prefixCls}-order-${order}`]: order,
        [`${prefixCls}-${span2}`]: !div && !xs && !sm && !md && !lg && !xl && !xxl,
        [`${prefixCls}-offset-${offset}`]: offset && offset > 0
      };
      const screenList = { xs, sm, md, lg, xl, xxl };
      Object.keys(screenList).forEach((screen) => {
        const screenValue = screenList[screen];
        if (screenValue && isNumber(screenValue)) {
          result[`${prefixCls}-${screen}-${screenValue}`] = true;
        } else if (screenValue && isObject(screenValue)) {
          result[`${prefixCls}-${screen}-${screenValue.span}`] = screenValue.span;
          result[`${prefixCls}-${screen}-offset-${screenValue.offset}`] = screenValue.offset;
          result[`${prefixCls}-${screen}-order-${screenValue.order}`] = screenValue.order;
        }
      });
      return result;
    });
    const classNames = computed(() => {
      return flexValue.value ? prefixCls : mergeClassName.value;
    });
    const paddingStyles = computed(() => {
      const { gutter, div } = rowContext;
      const result = {};
      if (Array.isArray(gutter) && !div) {
        const paddingHorizontal = gutter[0] && gutter[0] / 2 || 0;
        const paddingVertical = gutter[1] && gutter[1] / 2 || 0;
        if (paddingHorizontal) {
          result.paddingLeft = `${paddingHorizontal}px`;
          result.paddingRight = `${paddingHorizontal}px`;
        }
        if (paddingVertical) {
          result.paddingTop = `${paddingVertical}px`;
          result.paddingBottom = `${paddingVertical}px`;
        }
      }
      return result;
    });
    const flexStyles = computed(() => flexValue.value ? { flex: flexValue.value } : {});
    const responsiveConfig = computed(() => pick(props, responsiveArray));
    const propSpan = useResponsiveValue(computed(() => __spreadValues$1({
      val: props.span,
      key: "span"
    }, responsiveConfig.value)));
    const span = useResponsiveState(propSpan, 24, true);
    return {
      visible: computed(() => !!span.value),
      classNames,
      styles: computed(() => __spreadValues$1(__spreadValues$1({}, paddingStyles.value), flexStyles.value))
    };
  }
});
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return _ctx.visible ? (openBlock(), createElementBlock("div", {
    key: 0,
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6)) : createCommentVNode("v-if", true);
}
var Col = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
function resolveItemData(cols, props) {
  var _a, _b;
  const originSpan = (_a = props.span) != null ? _a : 1;
  const originOffset = (_b = props.offset) != null ? _b : 0;
  const offset = Math.min(originOffset, cols);
  const span = Math.min(offset > 0 ? originSpan + originOffset : originSpan, cols);
  return {
    span,
    offset,
    suffix: "suffix" in props ? props.suffix !== false : false
  };
}
function setItemVisible({
  cols,
  collapsed,
  collapsedRows,
  itemDataList
}) {
  let overflow = false;
  let displayIndexList = [];
  function isOverflow(span) {
    return Math.ceil(span / cols) > collapsedRows;
  }
  if (collapsed) {
    let spanSum = 0;
    for (let i = 0; i < itemDataList.length; i++) {
      if (itemDataList[i].suffix) {
        spanSum += itemDataList[i].span;
        displayIndexList.push(i);
      }
    }
    if (!isOverflow(spanSum)) {
      let current = 0;
      while (current < itemDataList.length) {
        const item = itemDataList[current];
        if (!item.suffix) {
          spanSum += item.span;
          if (isOverflow(spanSum)) {
            break;
          }
          displayIndexList.push(current);
        }
        current++;
      }
    }
    overflow = itemDataList.some((item, index2) => !item.suffix && !displayIndexList.includes(index2));
  } else {
    displayIndexList = itemDataList.map((_, index2) => index2);
  }
  return {
    overflow,
    displayIndexList
  };
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  name: "Grid",
  props: {
    cols: {
      type: [Number, Object],
      default: 24
    },
    rowGap: {
      type: [Number, Object],
      default: 0
    },
    colGap: {
      type: [Number, Object],
      default: 0
    },
    collapsed: {
      type: Boolean,
      default: false
    },
    collapsedRows: {
      type: Number,
      default: 1
    }
  },
  setup(props) {
    const {
      cols: propCols,
      rowGap: propRowGap,
      colGap: propColGap,
      collapsedRows,
      collapsed
    } = toRefs(props);
    const cols = useResponsiveState(propCols, 24);
    const colGap = useResponsiveState(propColGap, 0);
    const rowGap = useResponsiveState(propRowGap, 0);
    const prefixCls = getPrefixCls("grid");
    const classNames = computed(() => [prefixCls]);
    const style = computed(() => [
      {
        "gap": `${rowGap.value}px ${colGap.value}px`,
        "grid-template-columns": `repeat(${cols.value}, minmax(0px, 1fr))`
      }
    ]);
    const itemDataMap = reactive(/* @__PURE__ */ new Map());
    const itemDataList = computed(() => {
      const list = [];
      for (const [index2, itemData] of itemDataMap.entries()) {
        list[index2] = itemData;
      }
      return list;
    });
    const gridContext = reactive({
      overflow: false,
      displayIndexList: [],
      cols: cols.value,
      colGap: colGap.value
    });
    watchEffect(() => {
      gridContext.cols = cols.value;
      gridContext.colGap = colGap.value;
    });
    watchEffect(() => {
      const displayInfo = setItemVisible({
        cols: cols.value,
        collapsed: collapsed.value,
        collapsedRows: collapsedRows.value,
        itemDataList: itemDataList.value
      });
      gridContext.overflow = displayInfo.overflow;
      gridContext.displayIndexList = displayInfo.displayIndexList;
    });
    provide(GridContextInjectionKey, gridContext);
    provide(GridDataCollectorInjectionKey, {
      collectItemData(index2, itemData) {
        itemDataMap.set(index2, itemData);
      },
      removeItemData(index2) {
        itemDataMap.delete(index2);
      }
    });
    return {
      classNames,
      style
    };
  }
});
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var _Grid = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const useIndex = ({
  itemRef,
  selector,
  index: index2,
  parentClassName
}) => {
  const _index = ref(-1);
  const computedIndex = computed(() => {
    var _a;
    return (_a = index2 == null ? void 0 : index2.value) != null ? _a : _index.value;
  });
  const parent = ref();
  const getParent = () => {
    var _a, _b, _c;
    let parent2 = (_b = (_a = itemRef.value) == null ? void 0 : _a.parentElement) != null ? _b : void 0;
    if (parentClassName) {
      while (parent2 && !parent2.className.includes(parentClassName)) {
        parent2 = (_c = parent2.parentElement) != null ? _c : void 0;
      }
    }
    return parent2;
  };
  const getIndex = () => {
    if (isUndefined(index2 == null ? void 0 : index2.value) && parent.value && itemRef.value) {
      const index22 = Array.from(parent.value.querySelectorAll(selector)).indexOf(itemRef.value);
      if (index22 !== _index.value) {
        _index.value = index22;
      }
    }
  };
  watch(itemRef, () => {
    if (itemRef.value && !parent.value) {
      parent.value = getParent();
    }
  });
  onUpdated(() => getIndex());
  return {
    computedIndex
  };
};
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "GridItem",
  props: {
    span: {
      type: [Number, Object],
      default: 1
    },
    offset: {
      type: [Number, Object],
      default: 0
    },
    suffix: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const prefixCls = getPrefixCls("grid-item");
    const domRef = ref();
    const { computedIndex } = useIndex({
      itemRef: domRef,
      selector: `.${prefixCls}`
    });
    const gridContext = inject(GridContextInjectionKey, {
      overflow: false,
      displayIndexList: [],
      cols: 24,
      colGap: 0
    });
    const gridDataCollector = inject(GridDataCollectorInjectionKey);
    const visible = computed(() => {
      var _a;
      return (_a = gridContext == null ? void 0 : gridContext.displayIndexList) == null ? void 0 : _a.includes(computedIndex.value);
    });
    const { span: propSpan, offset: propOffset } = toRefs(props);
    const rSpan = useResponsiveState(propSpan, 1);
    const rOffset = useResponsiveState(propOffset, 0);
    const itemData = computed(() => resolveItemData(gridContext.cols, __spreadProps(__spreadValues({}, props), {
      span: rSpan.value,
      offset: rOffset.value
    })));
    const classNames = computed(() => [prefixCls]);
    const offsetStyle = computed(() => {
      const { offset, span } = itemData.value;
      const { colGap } = gridContext;
      if (offset > 0) {
        const oneSpan = `(100% - ${colGap * (span - 1)}px) / ${span}`;
        return {
          "margin-left": `calc((${oneSpan} * ${offset}) + ${colGap * offset}px)`
        };
      }
      return {};
    });
    const columnStart = computed(() => {
      const { suffix, span } = itemData.value;
      const { cols } = gridContext;
      if (suffix) {
        return `${cols - span + 1}`;
      }
      return `span ${span}`;
    });
    const style = computed(() => {
      const { span } = itemData.value;
      if (domRef.value) {
        return [
          {
            "grid-column": `${columnStart.value} / span ${span}`
          },
          offsetStyle.value,
          !visible.value || span === 0 ? { display: "none" } : {}
        ];
      }
      return [];
    });
    watchEffect(() => {
      if (computedIndex.value !== -1) {
        gridDataCollector == null ? void 0 : gridDataCollector.collectItemData(computedIndex.value, itemData.value);
      }
    });
    onUnmounted(() => {
      if (computedIndex.value !== -1) {
        gridDataCollector == null ? void 0 : gridDataCollector.removeItemData(computedIndex.value);
      }
    });
    return {
      classNames,
      style,
      domRef,
      overflow: computed(() => gridContext.overflow)
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    ref: "domRef",
    class: normalizeClass(_ctx.classNames),
    style: normalizeStyle(_ctx.style)
  }, [
    renderSlot(_ctx.$slots, "default", { overflow: _ctx.overflow })
  ], 6);
}
var GridItem = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const Grid = Object.assign(_Grid, {
  Row,
  Col,
  Item: GridItem,
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + Row.name, Row);
    app.component(componentPrefix + Col.name, Col);
    app.component(componentPrefix + _Grid.name, _Grid);
    app.component(componentPrefix + GridItem.name, GridItem);
  }
});

export { Col as C, Grid as G, Row as R, GridItem as a, useIndex as u };
//# sourceMappingURL=index-4ecc34e0.mjs.map
