import { g as getPrefixCls, _ as _export_sfc, s as setGlobalConfig, a as getComponentPrefix, x as configProviderInjectionKey, i as isNumber, e as isObject, f as getAllElements, y as omit } from './use-teleport-container-1599a5a4.mjs';
import { defineComponent, createVNode, toRefs, inject, computed, ref, openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode, createTextVNode, toDisplayString, mergeProps, Fragment, isVNode } from 'vue';
import { S as Spin } from './index-11d38f35.mjs';
import { G as Grid } from './index-4ecc34e0.mjs';
import { a as useComponentRef, u as useScrollbar, P as Pagination, V as VirtualList } from './index-90aba227.mjs';
import { S as Scrollbar, E as Empty } from './index-f6f6f2a5.mjs';

const usePagination = (props, { emit }) => {
  var _a, _b;
  const _current = ref(isObject(props.paginationProps) ? (_a = props.paginationProps.defaultCurrent) != null ? _a : 1 : 1);
  const _pageSize = ref(isObject(props.paginationProps) ? (_b = props.paginationProps.defaultPageSize) != null ? _b : 10 : 10);
  const current = computed(() => {
    var _a2;
    return isObject(props.paginationProps) ? (_a2 = props.paginationProps.current) != null ? _a2 : _current.value : _current.value;
  });
  const pageSize = computed(() => {
    var _a2;
    return isObject(props.paginationProps) ? (_a2 = props.paginationProps.pageSize) != null ? _a2 : _pageSize.value : _pageSize.value;
  });
  const handlePageChange = (page) => {
    _current.value = page;
    emit("pageChange", page);
  };
  const handlePageSizeChange = (pageSize2) => {
    _pageSize.value = pageSize2;
    emit("pageSizeChange", pageSize2);
  };
  return {
    current,
    pageSize,
    handlePageChange,
    handlePageSizeChange
  };
};
function _isSlot(s) {
  return typeof s === "function" || Object.prototype.toString.call(s) === "[object Object]" && !isVNode(s);
}
var _List = /* @__PURE__ */ defineComponent({
  name: "List",
  props: {
    data: {
      type: Array
    },
    size: {
      type: String,
      default: "medium"
    },
    bordered: {
      type: Boolean,
      default: true
    },
    split: {
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
    paginationProps: {
      type: Object
    },
    gridProps: {
      type: Object
    },
    maxHeight: {
      type: [String, Number],
      default: 0
    },
    bottomOffset: {
      type: Number,
      default: 0
    },
    virtualListProps: {
      type: Object
    },
    scrollbar: {
      type: [Object, Boolean],
      default: true
    }
  },
  emits: {
    scroll: () => true,
    reachBottom: () => true,
    pageChange: (page) => true,
    pageSizeChange: (pageSize) => true
  },
  setup(props, {
    emit,
    slots
  }) {
    const {
      scrollbar
    } = toRefs(props);
    const prefixCls = getPrefixCls("list");
    const configCtx = inject(configProviderInjectionKey, void 0);
    const {
      componentRef,
      elementRef: listRef
    } = useComponentRef("containerRef");
    const isVirtualList = computed(() => props.virtualListProps);
    const {
      displayScrollbar,
      scrollbarProps
    } = useScrollbar(scrollbar);
    let preScrollTop = 0;
    const handleScroll = (e) => {
      const {
        scrollTop,
        scrollHeight,
        offsetHeight
      } = e.target;
      const bottom = Math.floor(scrollHeight - (scrollTop + offsetHeight));
      if (scrollTop > preScrollTop && bottom <= props.bottomOffset) {
        emit("reachBottom");
      }
      emit("scroll");
      preScrollTop = scrollTop;
    };
    const {
      current,
      pageSize,
      handlePageChange,
      handlePageSizeChange
    } = usePagination(props, {
      emit
    });
    const getCurrentPageItems = (data) => {
      if (!props.paginationProps) {
        return data;
      }
      if (props.paginationProps && data.length > pageSize.value) {
        const startIndex = (current.value - 1) * pageSize.value;
        return data.slice(startIndex, startIndex + pageSize.value);
      }
      return data;
    };
    const renderGridItems = (data) => {
      let _slot2;
      if (!props.gridProps) {
        return null;
      }
      const currentPageItems = getCurrentPageItems(data);
      if (props.gridProps.span) {
        const items = [];
        const rowSize = 24 / props.gridProps.span;
        for (let i = 0; i < currentPageItems.length; i += rowSize) {
          let _slot;
          const nextIndex = i + rowSize;
          const rowIndex = Math.floor(i / rowSize);
          items.push(createVNode(Grid.Row, {
            "key": rowIndex,
            "class": `${prefixCls}-row`,
            "gutter": props.gridProps.gutter
          }, _isSlot(_slot = currentPageItems.slice(i, nextIndex).map((item, index2) => {
            var _a;
            return createVNode(Grid.Col, {
              "key": `${rowIndex}-${index2}`,
              "class": `${prefixCls}-col`,
              "span": (_a = props.gridProps) == null ? void 0 : _a.span
            }, {
              default: () => {
                var _a2;
                return [isVNode(item) ? item : (_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
                  item,
                  index: index2
                })];
              }
            });
          })) ? _slot : {
            default: () => [_slot]
          }));
        }
        return items;
      }
      return createVNode(Grid.Row, {
        "class": `${prefixCls}-row`,
        "gutter": props.gridProps.gutter
      }, _isSlot(_slot2 = currentPageItems.map((item, index2) => createVNode(Grid.Col, mergeProps({
        "key": index2,
        "class": `${prefixCls}-col`
      }, omit(props.gridProps, ["gutter"])), {
        default: () => {
          var _a;
          return [isVNode(item) ? item : (_a = slots.item) == null ? void 0 : _a.call(slots, {
            item,
            index: index2
          })];
        }
      }))) ? _slot2 : {
        default: () => [_slot2]
      });
    };
    const renderListItems = (data) => {
      const currentPageItems = getCurrentPageItems(data);
      return currentPageItems.map((item, index2) => {
        var _a;
        return isVNode(item) ? item : (_a = slots.item) == null ? void 0 : _a.call(slots, {
          item,
          index: index2
        });
      });
    };
    const renderItems = () => {
      const data = slots.default ? getAllElements(slots.default()) : props.data;
      if (data && data.length > 0) {
        return props.gridProps ? renderGridItems(data) : renderListItems(data);
      }
      return renderEmpty();
    };
    const renderPagination = () => {
      if (!props.paginationProps) {
        return null;
      }
      const paginationProps = omit(props.paginationProps, ["current", "pageSize", "defaultCurrent", "defaultPageSize"]);
      return createVNode(Pagination, mergeProps({
        "class": `${prefixCls}-pagination`
      }, paginationProps, {
        "current": current.value,
        "pageSize": pageSize.value,
        "onChange": handlePageChange,
        "onPageSizeChange": handlePageSizeChange
      }), null);
    };
    const cls = computed(() => [prefixCls, `${prefixCls}-${props.size}`, {
      [`${prefixCls}-bordered`]: props.bordered,
      [`${prefixCls}-split`]: props.split,
      [`${prefixCls}-hover`]: props.hoverable
    }]);
    const contentStyle = computed(() => {
      if (props.maxHeight) {
        const maxHeight = isNumber(props.maxHeight) ? `${props.maxHeight}px` : props.maxHeight;
        return {
          maxHeight,
          overflowY: "auto"
        };
      }
      return void 0;
    });
    const contentCls = computed(() => [`${prefixCls}-content`, {
      [`${prefixCls}-virtual`]: isVirtualList.value
    }]);
    const virtualListRef = ref();
    const renderVirtualList = () => {
      var _a;
      const currentPageItems = getCurrentPageItems((_a = props.data) != null ? _a : []);
      return currentPageItems.length ? createVNode(VirtualList, mergeProps({
        "ref": virtualListRef,
        "class": contentCls.value,
        "data": currentPageItems
      }, props.virtualListProps, {
        "onScroll": handleScroll
      }), {
        item: ({
          item,
          index: index2
        }) => {
          var _a2;
          return (_a2 = slots.item) == null ? void 0 : _a2.call(slots, {
            item,
            index: index2
          });
        }
      }) : renderEmpty();
    };
    const renderScrollLoading = () => {
      if (slots["scroll-loading"]) {
        return createVNode("div", {
          "class": [`${prefixCls}-item`, `${prefixCls}-scroll-loading`]
        }, [slots["scroll-loading"]()]);
      }
      return null;
    };
    const renderEmpty = () => {
      var _a, _b, _c, _d, _e;
      if (slots["scroll-loading"]) {
        return null;
      }
      return (_e = (_d = (_a = slots.empty) == null ? void 0 : _a.call(slots)) != null ? _d : (_c = configCtx == null ? void 0 : (_b = configCtx.slots).empty) == null ? void 0 : _c.call(_b, {
        component: "list"
      })) != null ? _e : createVNode(Empty, null, null);
    };
    const render = () => {
      const Component = displayScrollbar.value ? Scrollbar : "div";
      return createVNode("div", {
        "class": `${prefixCls}-wrapper`
      }, [createVNode(Spin, {
        "class": `${prefixCls}-spin`,
        "loading": props.loading
      }, {
        default: () => [createVNode(Component, mergeProps({
          "ref": componentRef,
          "class": cls.value,
          "style": contentStyle.value
        }, scrollbarProps.value, {
          "onScroll": handleScroll
        }), {
          default: () => [createVNode("div", {
            "class": `${prefixCls}-content-wrapper`
          }, [slots.header && createVNode("div", {
            "class": `${prefixCls}-header`
          }, [slots.header()]), isVirtualList.value && !props.gridProps ? createVNode(Fragment, null, [renderVirtualList(), renderScrollLoading()]) : createVNode("div", {
            "role": "list",
            "class": contentCls.value
          }, [renderItems(), renderScrollLoading()]), slots.footer && createVNode("div", {
            "class": `${prefixCls}-footer`
          }, [slots.footer()])])]
        }), renderPagination()]
      })]);
    };
    return {
      virtualListRef,
      render
    };
  },
  methods: {
    scrollIntoView(options) {
      if (this.virtualListRef) {
        this.virtualListRef.scrollTo(options);
      }
    }
  },
  render() {
    return this.render();
  }
});
var ListItem = /* @__PURE__ */ defineComponent({
  name: "ListItem",
  props: {
    actionLayout: {
      type: String,
      default: "horizontal"
    }
  },
  setup(props, {
    slots
  }) {
    const prefixCls = getPrefixCls("list-item");
    const renderAction = () => {
      var _a;
      const actions = (_a = slots.actions) == null ? void 0 : _a.call(slots);
      if (!actions || !actions.length) {
        return null;
      }
      return createVNode("ul", {
        "class": `${prefixCls}-action`
      }, [actions.map((item, index2) => createVNode("li", {
        "key": `${prefixCls}-action-${index2}`
      }, [item]))]);
    };
    return () => {
      var _a, _b;
      return createVNode("div", {
        "role": "listitem",
        "class": prefixCls
      }, [createVNode("div", {
        "class": `${prefixCls}-main`
      }, [(_a = slots.meta) == null ? void 0 : _a.call(slots), createVNode("div", {
        "class": `${prefixCls}-content`
      }, [(_b = slots.default) == null ? void 0 : _b.call(slots)]), props.actionLayout === "vertical" && renderAction()]), props.actionLayout === "horizontal" && renderAction(), slots.extra && createVNode("div", {
        "class": `${prefixCls}-extra`
      }, [slots.extra()])]);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  name: "ListItemMeta",
  props: {
    title: String,
    description: String
  },
  setup(props, { slots }) {
    const prefixCls = getPrefixCls("list-item-meta");
    const hasContent = Boolean(props.title || props.description || slots.title || slots.description);
    return {
      prefixCls,
      hasContent
    };
  }
});
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(_ctx.prefixCls)
  }, [
    _ctx.$slots.avatar ? (openBlock(), createElementBlock("div", {
      key: 0,
      class: normalizeClass(`${_ctx.prefixCls}-avatar`)
    }, [
      renderSlot(_ctx.$slots, "avatar")
    ], 2)) : createCommentVNode("v-if", true),
    _ctx.hasContent ? (openBlock(), createElementBlock("div", {
      key: 1,
      class: normalizeClass(`${_ctx.prefixCls}-content`)
    }, [
      _ctx.$slots.title || _ctx.title ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(`${_ctx.prefixCls}-title`)
      }, [
        renderSlot(_ctx.$slots, "title", {}, () => [
          createTextVNode(toDisplayString(_ctx.title), 1)
        ])
      ], 2)) : createCommentVNode("v-if", true),
      _ctx.$slots.description || _ctx.description ? (openBlock(), createElementBlock("div", {
        key: 1,
        class: normalizeClass(`${_ctx.prefixCls}-description`)
      }, [
        renderSlot(_ctx.$slots, "description", {}, () => [
          createTextVNode(toDisplayString(_ctx.description), 1)
        ])
      ], 2)) : createCommentVNode("v-if", true)
    ], 2)) : createCommentVNode("v-if", true)
  ], 2);
}
var ListItemMeta = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const List = Object.assign(_List, {
  Item: Object.assign(ListItem, {
    Meta: ListItemMeta
  }),
  install: (app, options) => {
    setGlobalConfig(app, options);
    const componentPrefix = getComponentPrefix(options);
    app.component(componentPrefix + _List.name, _List);
    app.component(componentPrefix + ListItem.name, ListItem);
    app.component(componentPrefix + ListItemMeta.name, ListItemMeta);
  }
});

export { List as L, ListItem as a, ListItemMeta as b };
//# sourceMappingURL=index-7a08c899.mjs.map
