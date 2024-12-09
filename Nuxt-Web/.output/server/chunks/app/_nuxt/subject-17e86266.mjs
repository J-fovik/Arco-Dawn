import { R as RadioGroup, a as Radio } from './index-63900e07.mjs';
import { a as CheckboxGroup, C as Checkbox, S as Spin } from './index-11d38f35.mjs';
import { T as Tabs, a as TabPane } from './index-3697759d.mjs';
import { B as Button } from './use-teleport-container-1599a5a4.mjs';
import { a as Input, b as IconSearch } from './index-dd449d78.mjs';
import { _ as _sfc_main$6 } from './index-3e511c39.mjs';
import { L as List, a as ListItem } from './index-7a08c899.mjs';
import { _ as _sfc_main$7 } from './index-c58e1e57.mjs';
import { T as Table } from './index-6a06d329.mjs';
import { _ as _sfc_main$8 } from './index-33e76c07.mjs';
import { P as Pagination, S as Select } from './index-90aba227.mjs';
import { S as Space } from './index-8bcd588e.mjs';
import { b as useUser, d as useWebsiteInformation, n as navigateTo, e as useAsyncData, A as API_URLS, u as useHead, f as useNuxtApp } from '../server.mjs';
import { useSSRContext, defineComponent, computed, ref, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, createCommentVNode, Fragment, renderList, mergeProps, withAsyncContext } from 'vue';
import { u as useBasicsState } from './useBasicsState-8a7a18a4.mjs';
import { u as useForm } from './useArco-b2247a5c.mjs';
import { u as usePagination } from './usePagination-23ca46d2.mjs';
import { N as NO_LIMIT_OPTIONS, f as findOptions, b as SUBJECT_OPTIONS, F as FIRST_CHOICE_SCIENCES_OPTIONS, S as SECOND_CHOICE_SCIENCES_OPTIONS, a as NO_LIMIT_NULL_OPTIONS, A as ALL_OPTIONS } from './options-7ec13930.mjs';
import { a as turnThousandth, t as textFormat, b as textCompany } from './index-a008b2db.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrInterpolate, ssrRenderList, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_11 } from './index-012b562f.mjs';
import { _ as _sfc_main$9 } from './index-3959f291.mjs';
import './index-f6f6f2a5.mjs';
import './index-08fdf206.mjs';
import 'number-precision';
import './use-children-components-d7e0e48f.mjs';
import 'resize-observer-polyfill';
import './index-4ecc34e0.mjs';
import './index-5f48af9c.mjs';
import './get-value-by-path-11166a95.mjs';
import './NuxtImg-9bcbe2bb.mjs';
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

const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const { provinceCityList, provinceList, getDictionValue } = useWebsiteInformation();
    const [schoolLoading, setSchoolLoading] = useBasicsState(false);
    const [majorLoading, setMajorLoading] = useBasicsState(false);
    const [curMajorLoading, setCurMajorLoading] = useBasicsState(false);
    const { form } = useForm(() => ({
      province: "",
      // 用户省份
      gkms: "",
      // 用户高考模式
      subjectList: [],
      // 选科
      firstSubjectList: [],
      // 首选科目
      secondSubjectList: [],
      // 次选科目
      activeTabKey: "school",
      // 当前活跃选项卡
      schoolList: [],
      // 院校列表
      majorList: [],
      // 专业列表
      matchRadioList: [
        { label: "\u9AD8\u5339\u914D", value: "3" },
        { label: "\u4E2D\u5339\u914D", value: "2" },
        { label: "\u4F4E\u5339\u914D", value: "1" }
        // { label: '无匹配', value: '0' },
      ],
      curMajorMatchSchoolList: [],
      // 当前专业匹配院校列表
      zydm: "",
      // 代码
      matchNum: {}
    }));
    const specialXkList = computed(() => [
      ...form.value.firstSubjectList,
      ...form.value.secondSubjectList
    ]);
    const changeSubject = (gkms) => {
      if (gkms === "3+3") {
        if (form.value.subjectList.length === 3) {
          schoolResetData();
          majorResetData();
        }
      } else if (gkms === "3+1+2") {
        if (specialXkList.value.length === 3) {
          schoolResetData();
          majorResetData();
        }
      }
    };
    const clickCollapsed = async (type, item, index) => {
      if (type === "school") {
        if (item.collapsed) {
          form.value.schoolList.forEach((schoolItem) => schoolItem.collapsed = false);
        } else {
          form.value.schoolList.forEach((schoolItem) => schoolItem.collapsed = false);
          form.value.schoolList[index].collapsed = !item.collapsed;
        }
      } else if (type === "major") {
        form.value.zydm = item.zydm;
        if (item.collapsed) {
          form.value.majorList.forEach((majorItem) => majorItem.collapsed = false);
        } else {
          form.value.majorList.forEach((majorItem) => majorItem.collapsed = false);
          form.value.majorList[index].collapsed = !item.collapsed;
          await curMajorMatchSchoolResetForm();
          getCurrentMajorList();
        }
      }
    };
    const { form: schoolForm } = useForm(() => ({
      sf: "",
      yxlx: "",
      cc: "",
      bxxz: "",
      slbq: "",
      tsbq: "",
      isMatch: false,
      yxmc: ""
    }));
    const {
      pagination: schoolPagination,
      resetData: schoolResetData,
      onPageChange: schoolOnPageChange,
      onPageSizeChange: schoolOnPageSizeChange
    } = usePagination(() => {
      window.scrollTo(0, 0);
      initCollegeList();
    });
    const schoolFilterData = ref([
      {
        title: "\u6240\u5728\u5730\u533A",
        key: "sf",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...provinceCityList.value]
      },
      {
        title: "\u9662\u6821\u7C7B\u578B",
        key: "yxlx",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("YXLX")]
      },
      {
        title: "\u9662\u6821\u5C42\u6B21",
        key: "cc",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("BXCC")]
      },
      {
        title: "\u529E\u5B66\u6027\u8D28",
        key: "bxxz",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("BXXZ")]
      },
      {
        title: "\u5B9E\u529B\u6807\u7B7E",
        key: "slbq",
        isShow: true,
        multiple: false,
        isCollapse: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("SLBQ")]
      },
      {
        title: "\u7279\u8272\u6807\u7B7E",
        key: "tsbq",
        isShow: true,
        multiple: false,
        isCollapse: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("TSBQ")]
      }
    ]);
    const createSchoolTableColumns = () => {
      return [
        {
          title: "\u4E13\u4E1A\u540D",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "\u9009\u79D1\u8981\u6C42",
          dataIndex: "xk",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          bodyCellStyle: {
            color: "#FFA864"
          },
          render: ({ record }) => {
            return textFormat(record.xk);
          }
        }
      ];
    };
    const schoolChangeFilter = (val) => {
      schoolForm.value = {
        ...schoolForm.value,
        ...val
      };
      schoolResetData();
    };
    const initCollegeList = async () => {
      setSchoolLoading(true);
      const [err, res] = await $zsFetch(API_URLS.CHECK.XK_CHECK_SCHOOL, {
        body: {
          ...schoolForm.value,
          isMatch: schoolForm.value.isMatch ? "1" : "0",
          province: userInfo.value.province,
          xk: form.value.gkms === "3+3" ? form.value.subjectList.join("/") : specialXkList.value.join("/"),
          currentPage: schoolPagination.value.current,
          pageSize: schoolPagination.value.pageSize,
          pagingOrNot: 1
        }
      });
      if (err)
        return setSchoolLoading(false);
      setSchoolLoading(false);
      schoolPagination.value.total = res.data.totalCount;
      form.value.schoolList = res.data.list.map((o) => {
        return {
          ...o,
          collapsed: false
        };
      });
    };
    const { form: majorForm } = useForm(() => ({
      levelCode: "1",
      // 层次
      xkmldm: "",
      zyldm: "",
      isMatch: false,
      zymc: "",
      matching: "3"
      // 0无匹配 1低匹配 2中匹配 3高匹配
    }));
    const { form: curMajorMatchSchoolForm, resetForm: curMajorMatchSchoolResetForm } = useForm(() => ({
      sf: "",
      cc: "",
      yxmc: ""
    }));
    const majorFilterData = ref([
      {
        title: "\u4E13\u4E1A\u5C42\u6B21",
        key: "levelCode",
        isShow: true,
        multiple: false,
        options: []
      },
      {
        title: "\u4E13\u4E1A\u95E8\u7C7B",
        key: "xkmldm",
        isShow: true,
        multiple: false,
        options: []
      },
      {
        title: "\u4E13\u4E1A\u5927\u7C7B",
        key: "zyldm",
        isShow: true,
        multiple: false,
        options: []
      }
    ]);
    const {
      pagination: majorPagination,
      resetData: majorResetData,
      onPageChange: majorOnPageChange,
      onPageSizeChange: majorOnPageSizeChange
    } = usePagination(() => {
      window.scrollTo(0, 0);
      initMajorList();
      getMatchNum();
    });
    const {
      pagination: curMajorPagination,
      resetData: curMajorResetData,
      onPageChange: curMajorOnPageChange,
      onPageSizeChange: curMajorOnPageSizeChange
    } = usePagination(() => {
      getCurrentMajorList();
    });
    const createMajorTableColumns = () => {
      return [
        {
          title: "\u9662\u6821\u540D\u79F0",
          dataIndex: "yxmc",
          align: "center",
          width: 350,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "yxmc"
        },
        {
          title: "\u5339\u914D\u4E13\u4E1A",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "\u9009\u79D1\u8981\u6C42",
          dataIndex: "xk",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          bodyCellStyle: {
            color: "#FFA864"
          },
          render: ({ record }) => {
            return textFormat(record.xk);
          }
        }
      ];
    };
    const majorChangeFilter = async (val) => {
      if (val.levelCode !== majorForm.value.levelCode) {
        majorForm.value.levelCode = val.levelCode;
        majorForm.value.xkmldm = "";
        majorForm.value.zyldm = "";
        await getXKmlList();
      } else if (val.xkmldm !== majorForm.value.xkmldm) {
        majorForm.value.xkmldm = val.xkmldm;
        majorForm.value.zyldm = "";
        await getZylList();
      } else {
        majorForm.value = {
          ...majorForm.value,
          ...val
        };
      }
      if (val.xkmldm === "") {
        majorFilterData.value[2].isShow = false;
      } else {
        majorFilterData.value[2].isShow = true;
      }
      majorResetData();
    };
    const getCcList = async () => {
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
      if (err)
        return;
      const result = res.data.map((o) => {
        return {
          ...o,
          value: o.levelCode,
          label: o.levelName
        };
      });
      majorFilterData.value[0].options = result;
      majorForm.value.levelCode = result[0].levelCode;
      getXKmlList();
    };
    const getXKmlList = async () => {
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_X_KML_LIST, {
        body: {
          levelCode: majorForm.value.levelCode
        }
      });
      if (err)
        return;
      const result = res.data.map((o) => {
        return {
          ...o,
          value: o.xkmldm,
          label: o.xkml
        };
      });
      majorFilterData.value[1].options = [...ALL_OPTIONS, ...result];
      majorForm.value.xkmldm = "";
      if (majorForm.value.xkmldm === "") {
        majorFilterData.value[2].isShow = false;
      } else {
        majorFilterData.value[2].isShow = true;
      }
      getZylList();
    };
    const getZylList = async () => {
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_ZYL_LIST, {
        body: {
          xkmldm: majorForm.value.xkmldm
        }
      });
      if (err)
        return;
      const result = res.data.map((o) => {
        return {
          ...o,
          value: o.zyldm,
          label: o.zyl
        };
      });
      majorFilterData.value[2].options = [...ALL_OPTIONS, ...result];
    };
    const getCurrentMajorList = async () => {
      var _a2;
      setCurMajorLoading(true);
      const [err, res] = await $zsFetch(API_URLS.CHECK.XK_CHECK_MAJOR_SCHOOL, {
        body: {
          ...curMajorMatchSchoolForm.value,
          province: userInfo.value.province,
          xk: form.value.gkms === "3+3" ? form.value.subjectList.join("/") : specialXkList.value.join("/"),
          zydm: form.value.zydm,
          currentPage: curMajorPagination.value.current,
          pageSize: curMajorPagination.value.pageSize,
          pagingOrNot: 1
        }
      });
      if (err)
        return setSchoolLoading(false);
      setCurMajorLoading(false);
      curMajorPagination.value.total = res.data.totalCount;
      form.value.curMajorMatchSchoolList = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.list;
    };
    const getMatchNum = async () => {
      const [err, res] = await $zsFetch(API_URLS.CHECK.QUERY_MAJOR_SUM_BY_MATCH, {
        body: {
          province: userInfo.value.province,
          xk: form.value.gkms === "3+3" ? form.value.subjectList.join("/") : specialXkList.value.join("/"),
          zymc: majorForm.value.zymc,
          isMatch: majorForm.value.isMatch ? "1" : "0",
          cc: majorForm.value.levelCode,
          xkml: majorForm.value.xkmldm,
          zyl: majorForm.value.zyldm
        },
        timeout: 50 * 1e3
      });
      if (err)
        return;
      form.value.matchNum = res.data;
    };
    const initMajorList = async () => {
      setMajorLoading(true);
      const [err, res] = await $zsFetch(API_URLS.CHECK.XK_CHECK_MAJOR, {
        body: {
          zymc: majorForm.value.zymc,
          isMatch: majorForm.value.isMatch ? "1" : "0",
          province: userInfo.value.province,
          xk: form.value.gkms === "3+3" ? form.value.subjectList.join("/") : specialXkList.value.join("/"),
          cc: majorForm.value.levelCode,
          matching: majorForm.value.matching,
          xkml: majorForm.value.xkmldm,
          zyl: majorForm.value.zyldm,
          currentPage: majorPagination.value.current,
          pageSize: majorPagination.value.pageSize,
          pagingOrNot: 1
        },
        timeout: 50 * 1e3
      });
      if (err)
        return setMajorLoading(false);
      setMajorLoading(false);
      majorPagination.value.total = res.data.totalCount;
      form.value.majorList = res.data.list.map((o) => {
        return {
          ...o,
          collapsed: false,
          list: [
            { zymc: "11", xk: "22", yxmc: "\u6E05\u534E\u5927\u5B66", logo: "/images/avatar.png" },
            { zymc: "11", xk: "22", yxmc: "\u6E05\u534E\u5927\u5B66", logo: "/images/avatar.png" },
            { zymc: "11", xk: "22", yxmc: "\u6E05\u534E\u5927\u5B66", logo: "/images/avatar.png" },
            { zymc: "11", xk: "22", yxmc: "\u6E05\u534E\u5927\u5B66", logo: "/images/avatar.png" },
            { zymc: "11", xk: "22", yxmc: "\u6E05\u534E\u5927\u5B66", logo: "/images/avatar.png" },
            { zymc: "11", xk: "22", yxmc: "\u6E05\u534E\u5927\u5B66", logo: "/images/avatar.png" },
            { zymc: "11", xk: "22", yxmc: "\u6E05\u534E\u5927\u5B66", logo: "/images/avatar.png" },
            { zymc: "11", xk: "22", yxmc: "\u6E05\u534E\u5927\u5B66", logo: "/images/avatar.png" }
          ]
        };
      });
    };
    if (userInfo.value.score) {
      const xkList = userInfo.value.xk.split("/");
      const isSpecial = userInfo.value.gkms === "3+1+2" && ["\u7269", "\u53F2"].includes(xkList[0]);
      form.value = {
        ...form.value,
        ...userInfo.value,
        subjectList: isSpecial ? [] : xkList,
        firstSubjectList: isSpecial ? [xkList[0]] : [],
        // 回显首选学科
        secondSubjectList: isSpecial ? [...xkList.slice(1, 3)] : []
        // 回显次选学科
      };
      getCcList();
      initCollegeList();
      initMajorList();
      getMatchNum();
    } else {
      form.value.province = userInfo.value.province;
      form.value.gkms = (_a = findOptions(provinceList.value, userInfo.value.province)) == null ? void 0 : _a.gkms;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_checkbox_group = CheckboxGroup;
      const _component_a_tabs = Tabs;
      const _component_a_tab_pane = TabPane;
      const _component_a_button = Button;
      const _component_a_checkbox = Checkbox;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_zs_select_filter = _sfc_main$6;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_zs_school_list_meta = _sfc_main$7;
      const _component_a_table = Table;
      const _component_zs_no_data_small = _sfc_main$8;
      const _component_a_pagination = Pagination;
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_a_space = Space;
      const _component_a_select = Select;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-6feaa5d0><div class="bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]" data-v-6feaa5d0>`);
      if (unref(form).gkms === "3+3") {
        _push(`<!--[--><span data-v-6feaa5d0>\u9009\u62E9\u79D1\u76EE\uFF1A</span>`);
        _push(ssrRenderComponent(_component_a_checkbox_group, {
          max: 3,
          modelValue: unref(form).subjectList,
          "onUpdate:modelValue": ($event) => unref(form).subjectList = $event,
          options: unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6),
          onChange: ($event) => changeSubject("3+3")
        }, null, _parent));
        _push(`<!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (unref(form).gkms === "3+1+2") {
        _push(`<!--[--><div data-v-6feaa5d0><span data-v-6feaa5d0>\u9996\u9009\u79D1\u76EE\uFF1A</span>`);
        _push(ssrRenderComponent(_component_a_checkbox_group, {
          max: 1,
          modelValue: unref(form).firstSubjectList,
          "onUpdate:modelValue": ($event) => unref(form).firstSubjectList = $event,
          options: "FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS),
          onChange: ($event) => changeSubject("3+1+2")
        }, null, _parent));
        _push(`</div><div class="mt-[5px]" data-v-6feaa5d0><span data-v-6feaa5d0>\u6B21\u9009\u79D1\u76EE\uFF1A</span>`);
        _push(ssrRenderComponent(_component_a_checkbox_group, {
          max: 2,
          modelValue: unref(form).secondSubjectList,
          "onUpdate:modelValue": ($event) => unref(form).secondSubjectList = $event,
          options: "SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS),
          onChange: ($event) => changeSubject("3+1+2")
        }, null, _parent));
        _push(`</div><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
      _push(ssrRenderComponent(_component_a_tabs, {
        "active-key": unref(form).activeTabKey,
        "onUpdate:activeKey": ($event) => unref(form).activeTabKey = $event,
        animation: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_tab_pane, { key: "school" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([unref(form).activeTabKey === "school" ? "text-[#657fff] font-bold" : "", "text-[18px]"])}" data-v-6feaa5d0${_scopeId2}> \u9662\u6821\u5339\u914D\uFF08${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolPagination).total, "0"))}\uFF09 </div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["text-[18px]", unref(form).activeTabKey === "school" ? "text-[#657fff] font-bold" : ""]
                    }, " \u9662\u6821\u5339\u914D\uFF08" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolPagination).total, "0")) + "\uFF09 ", 3)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-6feaa5d0${_scopeId2}><div class="flex items-center" data-v-6feaa5d0${_scopeId2}><div class="w-[150px]" data-v-6feaa5d0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_button, { size: "large" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_checkbox, {
                          modelValue: unref(schoolForm).isMatch,
                          "onUpdate:modelValue": ($event) => unref(schoolForm).isMatch = $event,
                          onChange: unref(schoolResetData)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u5B8C\u5168\u5339\u914D `);
                            } else {
                              return [
                                createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_checkbox, {
                            modelValue: unref(schoolForm).isMatch,
                            "onUpdate:modelValue": ($event) => unref(schoolForm).isMatch = $event,
                            onChange: unref(schoolResetData)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full ml-[20px]" data-v-6feaa5d0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_input, {
                    modelValue: unref(schoolForm).yxmc,
                    "onUpdate:modelValue": ($event) => unref(schoolForm).yxmc = $event,
                    modelModifiers: { trim: true },
                    size: "large",
                    class: "rounded-lg h-[38px]",
                    placeholder: "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u9662\u6821",
                    "allow-clear": "",
                    onClear: unref(schoolResetData)
                  }, {
                    prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_icon_search, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_icon_search)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="w-[120px] ml-[20px]" data-v-6feaa5d0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_button, {
                    type: "primary",
                    size: "large",
                    class: "openButton w-[120px]",
                    onClick: unref(schoolResetData)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u641C\u7D22 `);
                      } else {
                        return [
                          createTextVNode(" \u641C\u7D22 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_zs_select_filter, {
                    data: unref(schoolFilterData),
                    "default-values": unref(schoolForm),
                    onChange: schoolChangeFilter,
                    class: "mt-[20px]"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_list, {
                    class: "list-border mt-[20px]",
                    bordered: false,
                    loading: unref(schoolLoading)
                  }, {
                    empty: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_zs_no_data_small)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(form).schoolList, (school, index) => {
                          _push4(ssrRenderComponent(_component_a_list_item, {
                            key: school.id
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center justify-between" data-v-6feaa5d0${_scopeId4}><div class="flex-1" data-v-6feaa5d0${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_zs_school_list_meta, { school }, null, _parent5, _scopeId4));
                                _push5(`</div><div class="w-[150px] text-[#FFA864] text-right cursor-pointer" data-v-6feaa5d0${_scopeId4}> \u4E13\u4E1A\u5339\u914D\uFF1A${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school == null ? void 0 : school.planMajorEntities.length, "0"))}\u4E2A<i class="iconfont icon-xiala text-[#FFA864] ml-[3px]" data-v-6feaa5d0${_scopeId4}></i></div></div>`);
                                if (school.collapsed) {
                                  _push5(`<div data-v-6feaa5d0${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_a_table, {
                                    class: "mt-[20px] cursor-pointer",
                                    "table-layout-fixed": "",
                                    columns: createSchoolTableColumns(),
                                    data: school == null ? void 0 : school.planMajorEntities,
                                    bordered: { wrapper: true, cell: true },
                                    "page-position": "bottom"
                                  }, {
                                    zymc: withCtx(({ record }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="text-left" data-v-6feaa5d0${_scopeId5}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc))}</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("div", {
                                      class: "flex-1",
                                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`, {
                                        open: {
                                          target: "_blank"
                                        }
                                      })
                                    }, [
                                      createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                                    ], 8, ["onClick"]),
                                    createVNode("div", {
                                      class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                                      onClick: ($event) => clickCollapsed("school", school, index)
                                    }, [
                                      createTextVNode(" \u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school == null ? void 0 : school.planMajorEntities.length, "0")) + "\u4E2A", 1),
                                      createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                    ], 8, ["onClick"])
                                  ]),
                                  school.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode(_component_a_table, {
                                      class: "mt-[20px] cursor-pointer",
                                      "table-layout-fixed": "",
                                      columns: createSchoolTableColumns(),
                                      data: school == null ? void 0 : school.planMajorEntities,
                                      bordered: { wrapper: true, cell: true },
                                      "page-position": "bottom"
                                    }, {
                                      zymc: withCtx(({ record }) => [
                                        createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                      ]),
                                      _: 2
                                    }, 1032, ["columns", "data"])
                                  ])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).schoolList, (school, index) => {
                            return openBlock(), createBlock(_component_a_list_item, {
                              key: school.id
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", {
                                    class: "flex-1",
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`, {
                                      open: {
                                        target: "_blank"
                                      }
                                    })
                                  }, [
                                    createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                                  ], 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                                    onClick: ($event) => clickCollapsed("school", school, index)
                                  }, [
                                    createTextVNode(" \u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school == null ? void 0 : school.planMajorEntities.length, "0")) + "\u4E2A", 1),
                                    createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                  ], 8, ["onClick"])
                                ]),
                                school.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(_component_a_table, {
                                    class: "mt-[20px] cursor-pointer",
                                    "table-layout-fixed": "",
                                    columns: createSchoolTableColumns(),
                                    data: school == null ? void 0 : school.planMajorEntities,
                                    bordered: { wrapper: true, cell: true },
                                    "page-position": "bottom"
                                  }, {
                                    zymc: withCtx(({ record }) => [
                                      createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["columns", "data"])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_pagination, {
                    class: "justify-end mt-[20px]",
                    total: unref(schoolPagination).total,
                    current: unref(schoolPagination).current,
                    "page-size": unref(schoolPagination).pageSize,
                    onChange: unref(schoolOnPageChange),
                    onPageSizeChange: unref(schoolOnPageSizeChange),
                    "show-total": "",
                    "show-jumper": "",
                    "show-page-size": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-[150px]" }, [
                          createVNode(_component_a_button, { size: "large" }, {
                            default: withCtx(() => [
                              createVNode(_component_a_checkbox, {
                                modelValue: unref(schoolForm).isMatch,
                                "onUpdate:modelValue": ($event) => unref(schoolForm).isMatch = $event,
                                onChange: unref(schoolResetData)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "w-full ml-[20px]" }, [
                          createVNode(_component_a_input, {
                            modelValue: unref(schoolForm).yxmc,
                            "onUpdate:modelValue": ($event) => unref(schoolForm).yxmc = $event,
                            modelModifiers: { trim: true },
                            size: "large",
                            class: "rounded-lg h-[38px]",
                            placeholder: "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u9662\u6821",
                            "allow-clear": "",
                            onClear: unref(schoolResetData)
                          }, {
                            prefix: withCtx(() => [
                              createVNode(_component_icon_search)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onClear"])
                        ]),
                        createVNode("div", { class: "w-[120px] ml-[20px]" }, [
                          createVNode(_component_a_button, {
                            type: "primary",
                            size: "large",
                            class: "openButton w-[120px]",
                            onClick: unref(schoolResetData)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u641C\u7D22 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      createVNode(_component_zs_select_filter, {
                        data: unref(schoolFilterData),
                        "default-values": unref(schoolForm),
                        onChange: schoolChangeFilter,
                        class: "mt-[20px]"
                      }, null, 8, ["data", "default-values"]),
                      createVNode(_component_a_list, {
                        class: "list-border mt-[20px]",
                        bordered: false,
                        loading: unref(schoolLoading)
                      }, {
                        empty: withCtx(() => [
                          createVNode(_component_zs_no_data_small)
                        ]),
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).schoolList, (school, index) => {
                            return openBlock(), createBlock(_component_a_list_item, {
                              key: school.id
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", {
                                    class: "flex-1",
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`, {
                                      open: {
                                        target: "_blank"
                                      }
                                    })
                                  }, [
                                    createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                                  ], 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                                    onClick: ($event) => clickCollapsed("school", school, index)
                                  }, [
                                    createTextVNode(" \u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school == null ? void 0 : school.planMajorEntities.length, "0")) + "\u4E2A", 1),
                                    createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                  ], 8, ["onClick"])
                                ]),
                                school.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode(_component_a_table, {
                                    class: "mt-[20px] cursor-pointer",
                                    "table-layout-fixed": "",
                                    columns: createSchoolTableColumns(),
                                    data: school == null ? void 0 : school.planMajorEntities,
                                    bordered: { wrapper: true, cell: true },
                                    "page-position": "bottom"
                                  }, {
                                    zymc: withCtx(({ record }) => [
                                      createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["columns", "data"])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_a_pagination, {
                        class: "justify-end mt-[20px]",
                        total: unref(schoolPagination).total,
                        current: unref(schoolPagination).current,
                        "page-size": unref(schoolPagination).pageSize,
                        onChange: unref(schoolOnPageChange),
                        onPageSizeChange: unref(schoolOnPageSizeChange),
                        "show-total": "",
                        "show-jumper": "",
                        "show-page-size": ""
                      }, null, 8, ["total", "current", "page-size", "onChange", "onPageSizeChange"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_a_tab_pane, { key: "major" }, {
              title: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="${ssrRenderClass([unref(form).activeTabKey === "major" ? "text-[#657fff] font-bold" : "", "text-[18px]"])}" data-v-6feaa5d0${_scopeId2}> \u4E13\u4E1A\u5339\u914D\uFF08${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).matchNum.total, "0"))}\uFF09 </div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: ["text-[18px]", unref(form).activeTabKey === "major" ? "text-[#657fff] font-bold" : ""]
                    }, " \u4E13\u4E1A\u5339\u914D\uFF08" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).matchNum.total, "0")) + "\uFF09 ", 3)
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div data-v-6feaa5d0${_scopeId2}><div class="flex items-center" data-v-6feaa5d0${_scopeId2}><div class="w-[150px]" data-v-6feaa5d0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_button, { size: "large" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_a_checkbox, {
                          modelValue: unref(majorForm).isMatch,
                          "onUpdate:modelValue": ($event) => unref(majorForm).isMatch = $event,
                          onChange: unref(majorResetData)
                        }, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(` \u5B8C\u5168\u5339\u914D `);
                            } else {
                              return [
                                createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_a_checkbox, {
                            modelValue: unref(majorForm).isMatch,
                            "onUpdate:modelValue": ($event) => unref(majorForm).isMatch = $event,
                            onChange: unref(majorResetData)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full ml-[20px]" data-v-6feaa5d0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_input, {
                    size: "large",
                    modelValue: unref(majorForm).zymc,
                    "onUpdate:modelValue": ($event) => unref(majorForm).zymc = $event,
                    modelModifiers: { trim: true },
                    class: "rounded-[8px] h-[38px]",
                    placeholder: "\u641C\u7D22\u4E13\u4E1A\u540D\u79F0",
                    onClear: unref(majorResetData),
                    "allow-clear": ""
                  }, {
                    prefix: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_icon_search, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_icon_search)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="w-[120px] ml-[20px] rounded-[8px]" data-v-6feaa5d0${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_a_button, {
                    type: "primary",
                    class: "openButton w-[120px]",
                    size: "large",
                    onClick: unref(majorResetData)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` \u641C\u7D22 `);
                      } else {
                        return [
                          createTextVNode(" \u641C\u7D22 ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                  _push3(ssrRenderComponent(_component_zs_select_filter, {
                    data: unref(majorFilterData),
                    "default-values": unref(majorForm),
                    onChange: majorChangeFilter,
                    class: "mt-[20px]"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_radio_group, {
                    modelValue: unref(majorForm).matching,
                    "onUpdate:modelValue": ($event) => unref(majorForm).matching = $event,
                    class: "mt-[20px]",
                    onChange: unref(majorResetData)
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(form).matchRadioList, (tab) => {
                          _push4(ssrRenderComponent(_component_a_radio, {
                            value: tab.value
                          }, {
                            radio: withCtx(({ checked }, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] text-white": checked }, "text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[8px]"])}" data-v-6feaa5d0${_scopeId4}>${ssrInterpolate(tab.label)} `);
                                if (tab.value === "3") {
                                  _push5(`<span data-v-6feaa5d0${_scopeId4}>${ssrInterpolate(unref(form).matchNum.highSum)}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (tab.value === "2") {
                                  _push5(`<span data-v-6feaa5d0${_scopeId4}>${ssrInterpolate(unref(form).matchNum.mediumSum)}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (tab.value === "1") {
                                  _push5(`<span data-v-6feaa5d0${_scopeId4}>${ssrInterpolate(unref(form).matchNum.lowSum)}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                if (tab.value === "0") {
                                  _push5(`<span data-v-6feaa5d0${_scopeId4}>${ssrInterpolate(unref(form).matchNum.noSum)}</span>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                                _push5(`</div>`);
                              } else {
                                return [
                                  createVNode("div", {
                                    class: ["text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[8px]", { "bg-[#7C92FF] text-white": checked }]
                                  }, [
                                    createTextVNode(toDisplayString(tab.label) + " ", 1),
                                    tab.value === "3" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(form).matchNum.highSum), 1)) : createCommentVNode("", true),
                                    tab.value === "2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(form).matchNum.mediumSum), 1)) : createCommentVNode("", true),
                                    tab.value === "1" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(form).matchNum.lowSum), 1)) : createCommentVNode("", true),
                                    tab.value === "0" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(unref(form).matchNum.noSum), 1)) : createCommentVNode("", true)
                                  ], 2)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).matchRadioList, (tab) => {
                            return openBlock(), createBlock(_component_a_radio, {
                              key: tab.value,
                              value: tab.value
                            }, {
                              radio: withCtx(({ checked }) => [
                                createVNode("div", {
                                  class: ["text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[8px]", { "bg-[#7C92FF] text-white": checked }]
                                }, [
                                  createTextVNode(toDisplayString(tab.label) + " ", 1),
                                  tab.value === "3" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(form).matchNum.highSum), 1)) : createCommentVNode("", true),
                                  tab.value === "2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(form).matchNum.mediumSum), 1)) : createCommentVNode("", true),
                                  tab.value === "1" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(form).matchNum.lowSum), 1)) : createCommentVNode("", true),
                                  tab.value === "0" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(unref(form).matchNum.noSum), 1)) : createCommentVNode("", true)
                                ], 2)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<div class="my-[10px] text-[#FFA864]" data-v-6feaa5d0${_scopeId2}>`);
                  if (unref(form).gkms == "3+3") {
                    _push3(`<div data-v-6feaa5d0${_scopeId2}>`);
                    if (unref(majorForm).matching === "3") {
                      _push3(`<span data-v-6feaa5d0${_scopeId2}> * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u8F83\u9AD8\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u5EFA\u8BAE\u9009\u62E9${ssrInterpolate(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join(""))}\u7EC4\u5408! </span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(majorForm).matching === "2") {
                      _push3(`<span data-v-6feaa5d0${_scopeId2}> * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u4E0D\u9AD8\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u8BF7\u614E\u91CD\u9009\u62E9${ssrInterpolate(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join(""))}\u7EC4\u5408! </span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(majorForm).matching === "1") {
                      _push3(`<span data-v-6feaa5d0${_scopeId2}> * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u8F83\u4F4E\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u4E0D\u5EFA\u8BAE\u9009\u62E9${ssrInterpolate(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join(""))}\u7EC4\u5408! </span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    if (unref(majorForm).matching === "0") {
                      _push3(`<span data-v-6feaa5d0${_scopeId2}> * \u4E13\u4E1A\u9009\u79D1\u65E0\u5339\u914D\uFF0C${ssrInterpolate(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join(""))}\u7EC4\u5408\u65E0\u6CD5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A! </span>`);
                    } else {
                      _push3(`<!---->`);
                    }
                    _push3(`</div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div>`);
                  _push3(ssrRenderComponent(_component_a_list, {
                    bordered: false,
                    loading: unref(majorLoading)
                  }, {
                    empty: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_zs_no_data_small)
                        ];
                      }
                    }),
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(form).majorList, (major, index) => {
                          _push4(ssrRenderComponent(_component_a_list_item, {
                            key: major.id,
                            class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
                          }, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<div class="flex items-center justify-between" data-v-6feaa5d0${_scopeId4}><div class="flex-1 cursor-pointer" data-v-6feaa5d0${_scopeId4}><div class="text-[20px] text-[#333333] mb-[10px] font-bold" data-v-6feaa5d0${_scopeId4}>${ssrInterpolate(major.zymc)}</div><div class="mt-[10px]" data-v-6feaa5d0${_scopeId4}>`);
                                _push5(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                  split: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="w-[2px] h-[8px] text-[#999]" data-v-6feaa5d0${_scopeId5}>|</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                      ];
                                    }
                                  }),
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`<span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-6feaa5d0${_scopeId5}> \u4E13\u4E1A\u4EE3\u7801\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-6feaa5d0${_scopeId5}> \u4FEE\u4E1A\u5E74\u9650\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-6feaa5d0${_scopeId5}> \u6388\u4E88\u5B66\u4F4D\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-6feaa5d0${_scopeId5}> \u7537\u5973\u6BD4\u4F8B\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]" data-v-6feaa5d0${_scopeId5}> \u5E73\u5747\u85AA\u916C\uFF1A<span class="text-price" data-v-6feaa5d0${_scopeId5}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz)))}</span></span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                          createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                          createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                                _push5(`</div></div><div class="w-[190px] text-[#FFA864] text-right cursor-pointer" data-v-6feaa5d0${_scopeId4}> \u9662\u6821\u53CA\u4E13\u4E1A\u5339\u914D\uFF1A${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.planSum, "0"))}\u4E2A<i class="iconfont icon-xiala text-[#FFA864] ml-[3px]" data-v-6feaa5d0${_scopeId4}></i></div></div>`);
                                if (major.collapsed) {
                                  _push5(`<div data-v-6feaa5d0${_scopeId4}><div class="mt-[20px]" data-v-6feaa5d0${_scopeId4}>`);
                                  _push5(ssrRenderComponent(_component_a_space, null, {
                                    default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_a_select, {
                                          style: { width: "150px" },
                                          modelValue: unref(curMajorMatchSchoolForm).sf,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).sf = $event,
                                          options: [
                                            ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                            ...unref(provinceCityList)
                                          ],
                                          placeholder: "\u6240\u5728\u5730\u533A",
                                          "allow-clear": "",
                                          onChange: unref(curMajorResetData)
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_a_select, {
                                          style: { width: "150px" },
                                          modelValue: unref(curMajorMatchSchoolForm).cc,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).cc = $event,
                                          options: [
                                            ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                            ...unref(getDictionValue)("BXCC")
                                          ],
                                          "allow-clear": "",
                                          placeholder: "\u4E13\u4E1A\u5C42\u6B21",
                                          onChange: unref(curMajorResetData)
                                        }, null, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_a_input, {
                                          style: { width: "260px" },
                                          modelValue: unref(curMajorMatchSchoolForm).yxmc,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).yxmc = $event,
                                          modelModifiers: { trim: true },
                                          placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                                          "allow-clear": "",
                                          onChange: unref(curMajorResetData)
                                        }, {
                                          prefix: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_icon_search, null, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_icon_search)
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_a_select, {
                                            style: { width: "150px" },
                                            modelValue: unref(curMajorMatchSchoolForm).sf,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).sf = $event,
                                            options: [
                                              ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                              ...unref(provinceCityList)
                                            ],
                                            placeholder: "\u6240\u5728\u5730\u533A",
                                            "allow-clear": "",
                                            onChange: unref(curMajorResetData)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                          createVNode(_component_a_select, {
                                            style: { width: "150px" },
                                            modelValue: unref(curMajorMatchSchoolForm).cc,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).cc = $event,
                                            options: [
                                              ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                              ...unref(getDictionValue)("BXCC")
                                            ],
                                            "allow-clear": "",
                                            placeholder: "\u4E13\u4E1A\u5C42\u6B21",
                                            onChange: unref(curMajorResetData)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                          createVNode(_component_a_input, {
                                            style: { width: "260px" },
                                            modelValue: unref(curMajorMatchSchoolForm).yxmc,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).yxmc = $event,
                                            modelModifiers: { trim: true },
                                            placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                                            "allow-clear": "",
                                            onChange: unref(curMajorResetData)
                                          }, {
                                            prefix: withCtx(() => [
                                              createVNode(_component_icon_search)
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                  _push5(ssrRenderComponent(_component_a_table, {
                                    class: "mt-[20px] cursor-pointer",
                                    "table-layout-fixed": "",
                                    columns: createMajorTableColumns(),
                                    data: unref(form).curMajorMatchSchoolList,
                                    loading: unref(curMajorLoading),
                                    pagination: {
                                      ...unref(curMajorPagination),
                                      showTotal: false,
                                      showPageSize: false
                                    },
                                    onPageChange: unref(curMajorOnPageChange),
                                    onPageSizeChange: unref(curMajorOnPageSizeChange),
                                    bordered: { wrapper: true, cell: true },
                                    "page-position": "bottom"
                                  }, {
                                    yxmc: withCtx(({ record }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="text-left flex items-center" data-v-6feaa5d0${_scopeId5}><img${ssrRenderAttr("src", record.logo)} class="w-[42px] h-[42px] rounded-[50%]" alt="" data-v-6feaa5d0${_scopeId5}><div class="ml-[10px]" data-v-6feaa5d0${_scopeId5}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc))}</div></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "text-left flex items-center" }, [
                                            createVNode("img", {
                                              src: record.logo,
                                              class: "w-[42px] h-[42px] rounded-[50%]",
                                              alt: ""
                                            }, null, 8, ["src"]),
                                            createVNode("div", { class: "ml-[10px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc)), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    zymc: withCtx(({ record }, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(`<div class="text-left" data-v-6feaa5d0${_scopeId5}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc))}</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                  _push5(`</div>`);
                                } else {
                                  _push5(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("div", {
                                      class: "flex-1 cursor-pointer",
                                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`, {
                                        open: {
                                          target: "_blank"
                                        }
                                      })
                                    }, [
                                      createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1),
                                      createVNode("div", { class: "mt-[10px]" }, [
                                        createVNode(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                          split: withCtx(() => [
                                            createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                              createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                              createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ], 8, ["onClick"]),
                                    createVNode("div", {
                                      class: "w-[190px] text-[#FFA864] text-right cursor-pointer",
                                      onClick: ($event) => clickCollapsed("major", major, index)
                                    }, [
                                      createTextVNode(" \u9662\u6821\u53CA\u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.planSum, "0")) + "\u4E2A", 1),
                                      createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                    ], 8, ["onClick"])
                                  ]),
                                  major.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("div", { class: "mt-[20px]" }, [
                                      createVNode(_component_a_space, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_a_select, {
                                            style: { width: "150px" },
                                            modelValue: unref(curMajorMatchSchoolForm).sf,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).sf = $event,
                                            options: [
                                              ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                              ...unref(provinceCityList)
                                            ],
                                            placeholder: "\u6240\u5728\u5730\u533A",
                                            "allow-clear": "",
                                            onChange: unref(curMajorResetData)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                          createVNode(_component_a_select, {
                                            style: { width: "150px" },
                                            modelValue: unref(curMajorMatchSchoolForm).cc,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).cc = $event,
                                            options: [
                                              ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                              ...unref(getDictionValue)("BXCC")
                                            ],
                                            "allow-clear": "",
                                            placeholder: "\u4E13\u4E1A\u5C42\u6B21",
                                            onChange: unref(curMajorResetData)
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                          createVNode(_component_a_input, {
                                            style: { width: "260px" },
                                            modelValue: unref(curMajorMatchSchoolForm).yxmc,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).yxmc = $event,
                                            modelModifiers: { trim: true },
                                            placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                                            "allow-clear": "",
                                            onChange: unref(curMajorResetData)
                                          }, {
                                            prefix: withCtx(() => [
                                              createVNode(_component_icon_search)
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    createVNode(_component_a_table, {
                                      class: "mt-[20px] cursor-pointer",
                                      "table-layout-fixed": "",
                                      columns: createMajorTableColumns(),
                                      data: unref(form).curMajorMatchSchoolList,
                                      loading: unref(curMajorLoading),
                                      pagination: {
                                        ...unref(curMajorPagination),
                                        showTotal: false,
                                        showPageSize: false
                                      },
                                      onPageChange: unref(curMajorOnPageChange),
                                      onPageSizeChange: unref(curMajorOnPageSizeChange),
                                      bordered: { wrapper: true, cell: true },
                                      "page-position": "bottom"
                                    }, {
                                      yxmc: withCtx(({ record }) => [
                                        createVNode("div", { class: "text-left flex items-center" }, [
                                          createVNode("img", {
                                            src: record.logo,
                                            class: "w-[42px] h-[42px] rounded-[50%]",
                                            alt: ""
                                          }, null, 8, ["src"]),
                                          createVNode("div", { class: "ml-[10px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc)), 1)
                                        ])
                                      ]),
                                      zymc: withCtx(({ record }) => [
                                        createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                      ]),
                                      _: 1
                                    }, 8, ["columns", "data", "loading", "pagination", "onPageChange", "onPageSizeChange"])
                                  ])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).majorList, (major, index) => {
                            return openBlock(), createBlock(_component_a_list_item, {
                              key: major.id,
                              class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", {
                                    class: "flex-1 cursor-pointer",
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`, {
                                      open: {
                                        target: "_blank"
                                      }
                                    })
                                  }, [
                                    createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1),
                                    createVNode("div", { class: "mt-[10px]" }, [
                                      createVNode(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                        split: withCtx(() => [
                                          createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                            createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                            createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ], 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "w-[190px] text-[#FFA864] text-right cursor-pointer",
                                    onClick: ($event) => clickCollapsed("major", major, index)
                                  }, [
                                    createTextVNode(" \u9662\u6821\u53CA\u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.planSum, "0")) + "\u4E2A", 1),
                                    createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                  ], 8, ["onClick"])
                                ]),
                                major.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("div", { class: "mt-[20px]" }, [
                                    createVNode(_component_a_space, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_a_select, {
                                          style: { width: "150px" },
                                          modelValue: unref(curMajorMatchSchoolForm).sf,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).sf = $event,
                                          options: [
                                            ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                            ...unref(provinceCityList)
                                          ],
                                          placeholder: "\u6240\u5728\u5730\u533A",
                                          "allow-clear": "",
                                          onChange: unref(curMajorResetData)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                        createVNode(_component_a_select, {
                                          style: { width: "150px" },
                                          modelValue: unref(curMajorMatchSchoolForm).cc,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).cc = $event,
                                          options: [
                                            ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                            ...unref(getDictionValue)("BXCC")
                                          ],
                                          "allow-clear": "",
                                          placeholder: "\u4E13\u4E1A\u5C42\u6B21",
                                          onChange: unref(curMajorResetData)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                        createVNode(_component_a_input, {
                                          style: { width: "260px" },
                                          modelValue: unref(curMajorMatchSchoolForm).yxmc,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).yxmc = $event,
                                          modelModifiers: { trim: true },
                                          placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                                          "allow-clear": "",
                                          onChange: unref(curMajorResetData)
                                        }, {
                                          prefix: withCtx(() => [
                                            createVNode(_component_icon_search)
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_a_table, {
                                    class: "mt-[20px] cursor-pointer",
                                    "table-layout-fixed": "",
                                    columns: createMajorTableColumns(),
                                    data: unref(form).curMajorMatchSchoolList,
                                    loading: unref(curMajorLoading),
                                    pagination: {
                                      ...unref(curMajorPagination),
                                      showTotal: false,
                                      showPageSize: false
                                    },
                                    onPageChange: unref(curMajorOnPageChange),
                                    onPageSizeChange: unref(curMajorOnPageSizeChange),
                                    bordered: { wrapper: true, cell: true },
                                    "page-position": "bottom"
                                  }, {
                                    yxmc: withCtx(({ record }) => [
                                      createVNode("div", { class: "text-left flex items-center" }, [
                                        createVNode("img", {
                                          src: record.logo,
                                          class: "w-[42px] h-[42px] rounded-[50%]",
                                          alt: ""
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "ml-[10px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc)), 1)
                                      ])
                                    ]),
                                    zymc: withCtx(({ record }) => [
                                      createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["columns", "data", "loading", "pagination", "onPageChange", "onPageSizeChange"])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_pagination, {
                    class: "justify-end mt-[20px]",
                    total: unref(majorPagination).total,
                    current: unref(majorPagination).current,
                    "page-size": unref(majorPagination).pageSize,
                    onChange: unref(majorOnPageChange),
                    onPageSizeChange: unref(majorOnPageSizeChange),
                    "show-total": "",
                    "show-jumper": "",
                    "show-page-size": ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", null, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("div", { class: "w-[150px]" }, [
                          createVNode(_component_a_button, { size: "large" }, {
                            default: withCtx(() => [
                              createVNode(_component_a_checkbox, {
                                modelValue: unref(majorForm).isMatch,
                                "onUpdate:modelValue": ($event) => unref(majorForm).isMatch = $event,
                                onChange: unref(majorResetData)
                              }, {
                                default: withCtx(() => [
                                  createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                                ]),
                                _: 1
                              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                            ]),
                            _: 1
                          })
                        ]),
                        createVNode("div", { class: "w-full ml-[20px]" }, [
                          createVNode(_component_a_input, {
                            size: "large",
                            modelValue: unref(majorForm).zymc,
                            "onUpdate:modelValue": ($event) => unref(majorForm).zymc = $event,
                            modelModifiers: { trim: true },
                            class: "rounded-[8px] h-[38px]",
                            placeholder: "\u641C\u7D22\u4E13\u4E1A\u540D\u79F0",
                            onClear: unref(majorResetData),
                            "allow-clear": ""
                          }, {
                            prefix: withCtx(() => [
                              createVNode(_component_icon_search)
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue", "onClear"])
                        ]),
                        createVNode("div", { class: "w-[120px] ml-[20px] rounded-[8px]" }, [
                          createVNode(_component_a_button, {
                            type: "primary",
                            class: "openButton w-[120px]",
                            size: "large",
                            onClick: unref(majorResetData)
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" \u641C\u7D22 ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      createVNode(_component_zs_select_filter, {
                        data: unref(majorFilterData),
                        "default-values": unref(majorForm),
                        onChange: majorChangeFilter,
                        class: "mt-[20px]"
                      }, null, 8, ["data", "default-values"]),
                      createVNode(_component_a_radio_group, {
                        modelValue: unref(majorForm).matching,
                        "onUpdate:modelValue": ($event) => unref(majorForm).matching = $event,
                        class: "mt-[20px]",
                        onChange: unref(majorResetData)
                      }, {
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).matchRadioList, (tab) => {
                            return openBlock(), createBlock(_component_a_radio, {
                              key: tab.value,
                              value: tab.value
                            }, {
                              radio: withCtx(({ checked }) => [
                                createVNode("div", {
                                  class: ["text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[8px]", { "bg-[#7C92FF] text-white": checked }]
                                }, [
                                  createTextVNode(toDisplayString(tab.label) + " ", 1),
                                  tab.value === "3" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(form).matchNum.highSum), 1)) : createCommentVNode("", true),
                                  tab.value === "2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(form).matchNum.mediumSum), 1)) : createCommentVNode("", true),
                                  tab.value === "1" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(form).matchNum.lowSum), 1)) : createCommentVNode("", true),
                                  tab.value === "0" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(unref(form).matchNum.noSum), 1)) : createCommentVNode("", true)
                                ], 2)
                              ]),
                              _: 2
                            }, 1032, ["value"]);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                      createVNode("div", { class: "my-[10px] text-[#FFA864]" }, [
                        unref(form).gkms == "3+3" ? (openBlock(), createBlock("div", { key: 0 }, [
                          unref(majorForm).matching === "3" ? (openBlock(), createBlock("span", { key: 0 }, " * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u8F83\u9AD8\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u5EFA\u8BAE\u9009\u62E9" + toDisplayString(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join("")) + "\u7EC4\u5408! ", 1)) : createCommentVNode("", true),
                          unref(majorForm).matching === "2" ? (openBlock(), createBlock("span", { key: 1 }, " * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u4E0D\u9AD8\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u8BF7\u614E\u91CD\u9009\u62E9" + toDisplayString(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join("")) + "\u7EC4\u5408! ", 1)) : createCommentVNode("", true),
                          unref(majorForm).matching === "1" ? (openBlock(), createBlock("span", { key: 2 }, " * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u8F83\u4F4E\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u4E0D\u5EFA\u8BAE\u9009\u62E9" + toDisplayString(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join("")) + "\u7EC4\u5408! ", 1)) : createCommentVNode("", true),
                          unref(majorForm).matching === "0" ? (openBlock(), createBlock("span", { key: 3 }, " * \u4E13\u4E1A\u9009\u79D1\u65E0\u5339\u914D\uFF0C" + toDisplayString(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join("")) + "\u7EC4\u5408\u65E0\u6CD5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A! ", 1)) : createCommentVNode("", true)
                        ])) : createCommentVNode("", true)
                      ]),
                      createVNode(_component_a_list, {
                        bordered: false,
                        loading: unref(majorLoading)
                      }, {
                        empty: withCtx(() => [
                          createVNode(_component_zs_no_data_small)
                        ]),
                        default: withCtx(() => [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(form).majorList, (major, index) => {
                            return openBlock(), createBlock(_component_a_list_item, {
                              key: major.id,
                              class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
                            }, {
                              default: withCtx(() => [
                                createVNode("div", { class: "flex items-center justify-between" }, [
                                  createVNode("div", {
                                    class: "flex-1 cursor-pointer",
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`, {
                                      open: {
                                        target: "_blank"
                                      }
                                    })
                                  }, [
                                    createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1),
                                    createVNode("div", { class: "mt-[10px]" }, [
                                      createVNode(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                        split: withCtx(() => [
                                          createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                        ]),
                                        default: withCtx(() => [
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                          createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                            createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                            createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ])
                                  ], 8, ["onClick"]),
                                  createVNode("div", {
                                    class: "w-[190px] text-[#FFA864] text-right cursor-pointer",
                                    onClick: ($event) => clickCollapsed("major", major, index)
                                  }, [
                                    createTextVNode(" \u9662\u6821\u53CA\u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.planSum, "0")) + "\u4E2A", 1),
                                    createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                  ], 8, ["onClick"])
                                ]),
                                major.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                  createVNode("div", { class: "mt-[20px]" }, [
                                    createVNode(_component_a_space, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_a_select, {
                                          style: { width: "150px" },
                                          modelValue: unref(curMajorMatchSchoolForm).sf,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).sf = $event,
                                          options: [
                                            ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                            ...unref(provinceCityList)
                                          ],
                                          placeholder: "\u6240\u5728\u5730\u533A",
                                          "allow-clear": "",
                                          onChange: unref(curMajorResetData)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                        createVNode(_component_a_select, {
                                          style: { width: "150px" },
                                          modelValue: unref(curMajorMatchSchoolForm).cc,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).cc = $event,
                                          options: [
                                            ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                            ...unref(getDictionValue)("BXCC")
                                          ],
                                          "allow-clear": "",
                                          placeholder: "\u4E13\u4E1A\u5C42\u6B21",
                                          onChange: unref(curMajorResetData)
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                        createVNode(_component_a_input, {
                                          style: { width: "260px" },
                                          modelValue: unref(curMajorMatchSchoolForm).yxmc,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).yxmc = $event,
                                          modelModifiers: { trim: true },
                                          placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                                          "allow-clear": "",
                                          onChange: unref(curMajorResetData)
                                        }, {
                                          prefix: withCtx(() => [
                                            createVNode(_component_icon_search)
                                          ]),
                                          _: 1
                                        }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  createVNode(_component_a_table, {
                                    class: "mt-[20px] cursor-pointer",
                                    "table-layout-fixed": "",
                                    columns: createMajorTableColumns(),
                                    data: unref(form).curMajorMatchSchoolList,
                                    loading: unref(curMajorLoading),
                                    pagination: {
                                      ...unref(curMajorPagination),
                                      showTotal: false,
                                      showPageSize: false
                                    },
                                    onPageChange: unref(curMajorOnPageChange),
                                    onPageSizeChange: unref(curMajorOnPageSizeChange),
                                    bordered: { wrapper: true, cell: true },
                                    "page-position": "bottom"
                                  }, {
                                    yxmc: withCtx(({ record }) => [
                                      createVNode("div", { class: "text-left flex items-center" }, [
                                        createVNode("img", {
                                          src: record.logo,
                                          class: "w-[42px] h-[42px] rounded-[50%]",
                                          alt: ""
                                        }, null, 8, ["src"]),
                                        createVNode("div", { class: "ml-[10px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc)), 1)
                                      ])
                                    ]),
                                    zymc: withCtx(({ record }) => [
                                      createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                    ]),
                                    _: 1
                                  }, 8, ["columns", "data", "loading", "pagination", "onPageChange", "onPageSizeChange"])
                                ])) : createCommentVNode("", true)
                              ]),
                              _: 2
                            }, 1024);
                          }), 128))
                        ]),
                        _: 1
                      }, 8, ["loading"]),
                      createVNode(_component_a_pagination, {
                        class: "justify-end mt-[20px]",
                        total: unref(majorPagination).total,
                        current: unref(majorPagination).current,
                        "page-size": unref(majorPagination).pageSize,
                        onChange: unref(majorOnPageChange),
                        onPageSizeChange: unref(majorOnPageSizeChange),
                        "show-total": "",
                        "show-jumper": "",
                        "show-page-size": ""
                      }, null, 8, ["total", "current", "page-size", "onChange", "onPageSizeChange"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_tab_pane, { key: "school" }, {
                title: withCtx(() => [
                  createVNode("div", {
                    class: ["text-[18px]", unref(form).activeTabKey === "school" ? "text-[#657fff] font-bold" : ""]
                  }, " \u9662\u6821\u5339\u914D\uFF08" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(schoolPagination).total, "0")) + "\uFF09 ", 3)
                ]),
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "w-[150px]" }, [
                        createVNode(_component_a_button, { size: "large" }, {
                          default: withCtx(() => [
                            createVNode(_component_a_checkbox, {
                              modelValue: unref(schoolForm).isMatch,
                              "onUpdate:modelValue": ($event) => unref(schoolForm).isMatch = $event,
                              onChange: unref(schoolResetData)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "w-full ml-[20px]" }, [
                        createVNode(_component_a_input, {
                          modelValue: unref(schoolForm).yxmc,
                          "onUpdate:modelValue": ($event) => unref(schoolForm).yxmc = $event,
                          modelModifiers: { trim: true },
                          size: "large",
                          class: "rounded-lg h-[38px]",
                          placeholder: "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u9662\u6821",
                          "allow-clear": "",
                          onClear: unref(schoolResetData)
                        }, {
                          prefix: withCtx(() => [
                            createVNode(_component_icon_search)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onClear"])
                      ]),
                      createVNode("div", { class: "w-[120px] ml-[20px]" }, [
                        createVNode(_component_a_button, {
                          type: "primary",
                          size: "large",
                          class: "openButton w-[120px]",
                          onClick: unref(schoolResetData)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u641C\u7D22 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    createVNode(_component_zs_select_filter, {
                      data: unref(schoolFilterData),
                      "default-values": unref(schoolForm),
                      onChange: schoolChangeFilter,
                      class: "mt-[20px]"
                    }, null, 8, ["data", "default-values"]),
                    createVNode(_component_a_list, {
                      class: "list-border mt-[20px]",
                      bordered: false,
                      loading: unref(schoolLoading)
                    }, {
                      empty: withCtx(() => [
                        createVNode(_component_zs_no_data_small)
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(form).schoolList, (school, index) => {
                          return openBlock(), createBlock(_component_a_list_item, {
                            key: school.id
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", {
                                  class: "flex-1",
                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`, {
                                    open: {
                                      target: "_blank"
                                    }
                                  })
                                }, [
                                  createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                                ], 8, ["onClick"]),
                                createVNode("div", {
                                  class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                                  onClick: ($event) => clickCollapsed("school", school, index)
                                }, [
                                  createTextVNode(" \u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school == null ? void 0 : school.planMajorEntities.length, "0")) + "\u4E2A", 1),
                                  createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                ], 8, ["onClick"])
                              ]),
                              school.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode(_component_a_table, {
                                  class: "mt-[20px] cursor-pointer",
                                  "table-layout-fixed": "",
                                  columns: createSchoolTableColumns(),
                                  data: school == null ? void 0 : school.planMajorEntities,
                                  bordered: { wrapper: true, cell: true },
                                  "page-position": "bottom"
                                }, {
                                  zymc: withCtx(({ record }) => [
                                    createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["columns", "data"])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(_component_a_pagination, {
                      class: "justify-end mt-[20px]",
                      total: unref(schoolPagination).total,
                      current: unref(schoolPagination).current,
                      "page-size": unref(schoolPagination).pageSize,
                      onChange: unref(schoolOnPageChange),
                      onPageSizeChange: unref(schoolOnPageSizeChange),
                      "show-total": "",
                      "show-jumper": "",
                      "show-page-size": ""
                    }, null, 8, ["total", "current", "page-size", "onChange", "onPageSizeChange"])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_a_tab_pane, { key: "major" }, {
                title: withCtx(() => [
                  createVNode("div", {
                    class: ["text-[18px]", unref(form).activeTabKey === "major" ? "text-[#657fff] font-bold" : ""]
                  }, " \u4E13\u4E1A\u5339\u914D\uFF08" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).matchNum.total, "0")) + "\uFF09 ", 3)
                ]),
                default: withCtx(() => [
                  createVNode("div", null, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("div", { class: "w-[150px]" }, [
                        createVNode(_component_a_button, { size: "large" }, {
                          default: withCtx(() => [
                            createVNode(_component_a_checkbox, {
                              modelValue: unref(majorForm).isMatch,
                              "onUpdate:modelValue": ($event) => unref(majorForm).isMatch = $event,
                              onChange: unref(majorResetData)
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                          ]),
                          _: 1
                        })
                      ]),
                      createVNode("div", { class: "w-full ml-[20px]" }, [
                        createVNode(_component_a_input, {
                          size: "large",
                          modelValue: unref(majorForm).zymc,
                          "onUpdate:modelValue": ($event) => unref(majorForm).zymc = $event,
                          modelModifiers: { trim: true },
                          class: "rounded-[8px] h-[38px]",
                          placeholder: "\u641C\u7D22\u4E13\u4E1A\u540D\u79F0",
                          onClear: unref(majorResetData),
                          "allow-clear": ""
                        }, {
                          prefix: withCtx(() => [
                            createVNode(_component_icon_search)
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue", "onClear"])
                      ]),
                      createVNode("div", { class: "w-[120px] ml-[20px] rounded-[8px]" }, [
                        createVNode(_component_a_button, {
                          type: "primary",
                          class: "openButton w-[120px]",
                          size: "large",
                          onClick: unref(majorResetData)
                        }, {
                          default: withCtx(() => [
                            createTextVNode(" \u641C\u7D22 ")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    createVNode(_component_zs_select_filter, {
                      data: unref(majorFilterData),
                      "default-values": unref(majorForm),
                      onChange: majorChangeFilter,
                      class: "mt-[20px]"
                    }, null, 8, ["data", "default-values"]),
                    createVNode(_component_a_radio_group, {
                      modelValue: unref(majorForm).matching,
                      "onUpdate:modelValue": ($event) => unref(majorForm).matching = $event,
                      class: "mt-[20px]",
                      onChange: unref(majorResetData)
                    }, {
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(form).matchRadioList, (tab) => {
                          return openBlock(), createBlock(_component_a_radio, {
                            key: tab.value,
                            value: tab.value
                          }, {
                            radio: withCtx(({ checked }) => [
                              createVNode("div", {
                                class: ["text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[8px]", { "bg-[#7C92FF] text-white": checked }]
                              }, [
                                createTextVNode(toDisplayString(tab.label) + " ", 1),
                                tab.value === "3" ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(unref(form).matchNum.highSum), 1)) : createCommentVNode("", true),
                                tab.value === "2" ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(unref(form).matchNum.mediumSum), 1)) : createCommentVNode("", true),
                                tab.value === "1" ? (openBlock(), createBlock("span", { key: 2 }, toDisplayString(unref(form).matchNum.lowSum), 1)) : createCommentVNode("", true),
                                tab.value === "0" ? (openBlock(), createBlock("span", { key: 3 }, toDisplayString(unref(form).matchNum.noSum), 1)) : createCommentVNode("", true)
                              ], 2)
                            ]),
                            _: 2
                          }, 1032, ["value"]);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "onChange"]),
                    createVNode("div", { class: "my-[10px] text-[#FFA864]" }, [
                      unref(form).gkms == "3+3" ? (openBlock(), createBlock("div", { key: 0 }, [
                        unref(majorForm).matching === "3" ? (openBlock(), createBlock("span", { key: 0 }, " * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u8F83\u9AD8\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u5EFA\u8BAE\u9009\u62E9" + toDisplayString(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join("")) + "\u7EC4\u5408! ", 1)) : createCommentVNode("", true),
                        unref(majorForm).matching === "2" ? (openBlock(), createBlock("span", { key: 1 }, " * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u4E0D\u9AD8\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u8BF7\u614E\u91CD\u9009\u62E9" + toDisplayString(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join("")) + "\u7EC4\u5408! ", 1)) : createCommentVNode("", true),
                        unref(majorForm).matching === "1" ? (openBlock(), createBlock("span", { key: 2 }, " * \u4E13\u4E1A\u9009\u79D1\u5339\u914D\u5EA6\u8F83\u4F4E\uFF0C\u82E5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A\u4E0D\u5EFA\u8BAE\u9009\u62E9" + toDisplayString(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join("")) + "\u7EC4\u5408! ", 1)) : createCommentVNode("", true),
                        unref(majorForm).matching === "0" ? (openBlock(), createBlock("span", { key: 3 }, " * \u4E13\u4E1A\u9009\u79D1\u65E0\u5339\u914D\uFF0C" + toDisplayString(unref(form).gkms == "3+3" ? unref(form).subjectList.join("") : unref(specialXkList).join("")) + "\u7EC4\u5408\u65E0\u6CD5\u62A5\u8003\u4EE5\u4E0B\u4E13\u4E1A! ", 1)) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ]),
                    createVNode(_component_a_list, {
                      bordered: false,
                      loading: unref(majorLoading)
                    }, {
                      empty: withCtx(() => [
                        createVNode(_component_zs_no_data_small)
                      ]),
                      default: withCtx(() => [
                        (openBlock(true), createBlock(Fragment, null, renderList(unref(form).majorList, (major, index) => {
                          return openBlock(), createBlock(_component_a_list_item, {
                            key: major.id,
                            class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
                          }, {
                            default: withCtx(() => [
                              createVNode("div", { class: "flex items-center justify-between" }, [
                                createVNode("div", {
                                  class: "flex-1 cursor-pointer",
                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`, {
                                    open: {
                                      target: "_blank"
                                    }
                                  })
                                }, [
                                  createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(major.zymc), 1),
                                  createVNode("div", { class: "mt-[10px]" }, [
                                    createVNode(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                      split: withCtx(() => [
                                        createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                      ]),
                                      default: withCtx(() => [
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                          createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                          createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ])
                                ], 8, ["onClick"]),
                                createVNode("div", {
                                  class: "w-[190px] text-[#FFA864] text-right cursor-pointer",
                                  onClick: ($event) => clickCollapsed("major", major, index)
                                }, [
                                  createTextVNode(" \u9662\u6821\u53CA\u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.planSum, "0")) + "\u4E2A", 1),
                                  createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                ], 8, ["onClick"])
                              ]),
                              major.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                createVNode("div", { class: "mt-[20px]" }, [
                                  createVNode(_component_a_space, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_a_select, {
                                        style: { width: "150px" },
                                        modelValue: unref(curMajorMatchSchoolForm).sf,
                                        "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).sf = $event,
                                        options: [
                                          ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                          ...unref(provinceCityList)
                                        ],
                                        placeholder: "\u6240\u5728\u5730\u533A",
                                        "allow-clear": "",
                                        onChange: unref(curMajorResetData)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                      createVNode(_component_a_select, {
                                        style: { width: "150px" },
                                        modelValue: unref(curMajorMatchSchoolForm).cc,
                                        "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).cc = $event,
                                        options: [
                                          ..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS),
                                          ...unref(getDictionValue)("BXCC")
                                        ],
                                        "allow-clear": "",
                                        placeholder: "\u4E13\u4E1A\u5C42\u6B21",
                                        onChange: unref(curMajorResetData)
                                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                                      createVNode(_component_a_input, {
                                        style: { width: "260px" },
                                        modelValue: unref(curMajorMatchSchoolForm).yxmc,
                                        "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).yxmc = $event,
                                        modelModifiers: { trim: true },
                                        placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                                        "allow-clear": "",
                                        onChange: unref(curMajorResetData)
                                      }, {
                                        prefix: withCtx(() => [
                                          createVNode(_component_icon_search)
                                        ]),
                                        _: 1
                                      }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                                    ]),
                                    _: 1
                                  })
                                ]),
                                createVNode(_component_a_table, {
                                  class: "mt-[20px] cursor-pointer",
                                  "table-layout-fixed": "",
                                  columns: createMajorTableColumns(),
                                  data: unref(form).curMajorMatchSchoolList,
                                  loading: unref(curMajorLoading),
                                  pagination: {
                                    ...unref(curMajorPagination),
                                    showTotal: false,
                                    showPageSize: false
                                  },
                                  onPageChange: unref(curMajorOnPageChange),
                                  onPageSizeChange: unref(curMajorOnPageSizeChange),
                                  bordered: { wrapper: true, cell: true },
                                  "page-position": "bottom"
                                }, {
                                  yxmc: withCtx(({ record }) => [
                                    createVNode("div", { class: "text-left flex items-center" }, [
                                      createVNode("img", {
                                        src: record.logo,
                                        class: "w-[42px] h-[42px] rounded-[50%]",
                                        alt: ""
                                      }, null, 8, ["src"]),
                                      createVNode("div", { class: "ml-[10px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc)), 1)
                                    ])
                                  ]),
                                  zymc: withCtx(({ record }) => [
                                    createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                                  ]),
                                  _: 1
                                }, 8, ["columns", "data", "loading", "pagination", "onPageChange", "onPageSizeChange"])
                              ])) : createCommentVNode("", true)
                            ]),
                            _: 2
                          }, 1024);
                        }), 128))
                      ]),
                      _: 1
                    }, 8, ["loading"]),
                    createVNode(_component_a_pagination, {
                      class: "justify-end mt-[20px]",
                      total: unref(majorPagination).total,
                      current: unref(majorPagination).current,
                      "page-size": unref(majorPagination).pageSize,
                      onChange: unref(majorOnPageChange),
                      onPageSizeChange: unref(majorOnPageSizeChange),
                      "show-total": "",
                      "show-jumper": "",
                      "show-page-size": ""
                    }, null, 8, ["total", "current", "page-size", "onChange", "onPageSizeChange"])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsSubjectCheckAll/index.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-6feaa5d0"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => {
    } }
  },
  setup(__props) {
    const createTableColumns = () => {
      return [
        {
          title: "\u4E13\u4E1A\u540D\u79F0",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "\u4E13\u4E1A\u5C42\u6B21",
          dataIndex: "cc",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.cc);
          }
        },
        {
          title: "\u4E13\u4E1A\u7C7B",
          dataIndex: "zyl",
          align: "center",
          width: 250,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.zyl);
          }
        },
        {
          title: "\u9009\u79D1\u8981\u6C42",
          dataIndex: "xk",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.xk);
          }
        }
      ];
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$9;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_zs_school_list_meta = _sfc_main$7;
      const _component_a_table = Table;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        "content-class": "w-[1100px]",
        title: "",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-h-[90vh] overflow-auto no-scrollbar"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_list, {
              class: "list-border mt-[10px]",
              bordered: false
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_list_item, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<div class="flex items-center justify-between cursor-pointer"${_scopeId3}><div class="flex-1"${_scopeId3}>`);
                        _push4(ssrRenderComponent(_component_zs_school_list_meta, { school: _ctx.data }, null, _parent4, _scopeId3));
                        _push4(`</div></div>`);
                      } else {
                        return [
                          createVNode("div", { class: "flex items-center justify-between cursor-pointer" }, [
                            createVNode("div", { class: "flex-1" }, [
                              createVNode(_component_zs_school_list_meta, { school: _ctx.data }, null, 8, ["school"])
                            ])
                          ])
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_list_item, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between cursor-pointer" }, [
                          createVNode("div", { class: "flex-1" }, [
                            createVNode(_component_zs_school_list_meta, { school: _ctx.data }, null, 8, ["school"])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`<div${_scopeId}> \u7B26\u5408<span class="text-[#FFA864]"${_scopeId}>\u3010${ssrInterpolate(_ctx.data.codeName.split("/").join("+"))}\u3011</span>\u9009\u79D1\u7EC4\u5408\u7684\u4E13\u4E1A\xA0<span class="text-[#FFA864]"${_scopeId}>\u3010${ssrInterpolate(_ctx.data.ppsum)}\u3011</span>\xA0\u4E2A </div>`);
            _push2(ssrRenderComponent(_component_a_table, {
              class: "mt-[20px] cursor-pointer",
              "table-layout-fixed": "",
              columns: createTableColumns(),
              data: _ctx.data.planList,
              bordered: { wrapper: true, cell: true },
              "page-position": "bottom"
            }, {
              zymc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left"${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-h-[90vh] overflow-auto no-scrollbar" }, [
                createVNode(_component_a_list, {
                  class: "list-border mt-[10px]",
                  bordered: false
                }, {
                  default: withCtx(() => [
                    createVNode(_component_a_list_item, null, {
                      default: withCtx(() => [
                        createVNode("div", { class: "flex items-center justify-between cursor-pointer" }, [
                          createVNode("div", { class: "flex-1" }, [
                            createVNode(_component_zs_school_list_meta, { school: _ctx.data }, null, 8, ["school"])
                          ])
                        ])
                      ]),
                      _: 1
                    })
                  ]),
                  _: 1
                }),
                createVNode("div", null, [
                  createTextVNode(" \u7B26\u5408"),
                  createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(_ctx.data.codeName.split("/").join("+")) + "\u3011", 1),
                  createTextVNode("\u9009\u79D1\u7EC4\u5408\u7684\u4E13\u4E1A\xA0"),
                  createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(_ctx.data.ppsum) + "\u3011", 1),
                  createTextVNode("\xA0\u4E2A ")
                ]),
                createVNode(_component_a_table, {
                  class: "mt-[20px] cursor-pointer",
                  "table-layout-fixed": "",
                  columns: createTableColumns(),
                  data: _ctx.data.planList,
                  bordered: { wrapper: true, cell: true },
                  "page-position": "bottom"
                }, {
                  zymc: withCtx(({ record }) => [
                    createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                  ]),
                  _: 1
                }, 8, ["columns", "data"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsSubjectCurXkCollegeMatchMajor/index.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const useInitRequest = (api, config = { defaultValue: {}, isInit: true }) => {
  var _a;
  const data = ref((_a = config == null ? void 0 : config.defaultValue) != null ? _a : {});
  const [loading, setLoading] = useBasicsState(false);
  const initData = async () => {
    setLoading(true);
    const res = await api();
    data.value = res;
    setLoading(false);
  };
  if (config == null ? void 0 : config.isInit) {
    initData();
  }
  return { data, initData, loading };
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const { provinceCityList, provinceList, getDictionValue } = useWebsiteInformation();
    const [matchMajorLoading, setMatchMajorLoading] = useBasicsState(false);
    const [activeKey, setActiveKey] = useBasicsState(null);
    const { form } = useForm(() => ({
      province: "",
      gkms: "",
      curSchoolMatchMajorList: [],
      // 当前学校匹配专业
      selectRow: {},
      curSchoolName: ""
      // 当前院校名称
    }));
    const { form: schoolForm } = useForm(() => ({
      sf: "",
      yxlx: "",
      cc: "",
      bxxz: "",
      strengthTags: "",
      featuresTags: "",
      isMatch: false,
      yxmc: ""
    }));
    const { form: curSchoolMatchForm, resetForm: curSchoolMatchResetForm } = useForm(() => ({
      subjectList: [],
      // 选科
      firstSubjectList: [],
      // 首选科目
      secondSubjectList: []
      // 次选科目
    }));
    const specialXkList = computed(() => [
      ...curSchoolMatchForm.value.firstSubjectList,
      ...curSchoolMatchForm.value.secondSubjectList
    ]);
    const schoolFilterData = ref([
      {
        title: "\u6240\u5728\u5730\u533A",
        key: "sf",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...provinceCityList.value]
      },
      {
        title: "\u9662\u6821\u7C7B\u578B",
        key: "yxlx",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("YXLX")]
      },
      {
        title: "\u9662\u6821\u5C42\u6B21",
        key: "cc",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("BXCC")]
      },
      {
        title: "\u529E\u5B66\u6027\u8D28",
        key: "bxxz",
        isShow: true,
        multiple: false,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("BXXZ")]
      },
      {
        title: "\u5B9E\u529B\u6807\u7B7E",
        key: "strengthTags",
        isShow: true,
        multiple: false,
        isCollapse: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("SLBQ")]
      },
      {
        title: "\u7279\u8272\u6807\u7B7E",
        key: "featuresTags",
        isShow: true,
        multiple: false,
        isCollapse: true,
        options: [...NO_LIMIT_OPTIONS, ...getDictionValue("TSBQ")]
      }
    ]);
    const {
      pagination: schoolPagination,
      resetData: schoolResetData,
      onPageChange: schoolOnPageChange,
      onPageSizeChange: schoolOnPageSizeChange
    } = usePagination(() => {
      window.scrollTo(0, 0);
      initCollegeList();
    });
    const createSchoolTableColumns = () => {
      return [
        {
          title: "\u9009\u79D1\u7EC4\u5408",
          dataIndex: "xk",
          align: "center",
          width: 300,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "xk"
        },
        {
          title: "\u5F53\u524D\u9009\u79D1\u5339\u914D\u4E13\u4E1A",
          dataIndex: "ppsum",
          align: "center",
          width: 300,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "ppsum"
        },
        {
          title: "\u4E13\u4E1A\u5339\u914D\u7387",
          dataIndex: "ppl",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "ppl"
        }
      ];
    };
    const clickCollapsed = async (item, index) => {
      form.value.curSchoolName = item.yxmc;
      if (item.collapsed) {
        schoolList.value.forEach((schoolItem) => schoolItem.collapsed = false);
      } else {
        schoolList.value.forEach((schoolItem) => schoolItem.collapsed = false);
        schoolList.value[index].collapsed = !item.collapsed;
        await curSchoolMatchResetForm();
        getCurrentMajorList();
      }
    };
    const schoolChangeFilter = (val) => {
      schoolForm.value = {
        ...schoolForm.value,
        ...val
      };
      schoolResetData();
    };
    const setSelectRow = (row, callBack) => {
      form.value.selectRow = row;
      if (callBack)
        callBack();
    };
    const changeSubject = (gkms) => {
      getCurrentMajorList();
    };
    const getCurrentMajorList = async () => {
      var _a3;
      var _a2;
      setMatchMajorLoading(true);
      const [err, res] = await $zsFetch(API_URLS.CHECK.COLLEGE_CHECK_XK_MAJOR_MATCH, {
        body: {
          sf: form.value.province,
          yxmc: form.value.curSchoolName,
          xk: form.value.gkms === "3+3" ? curSchoolMatchForm.value.subjectList.join("/") : specialXkList.value.join("/")
        }
      });
      if (err)
        return setMatchMajorLoading(false);
      setMatchMajorLoading(false);
      form.value.curSchoolMatchMajorList = (_a3 = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.map((item) => {
        const [one, two, three] = item.codeName.split("/");
        const oneData = SUBJECT_OPTIONS.find((o) => o.label === one);
        const twoData = SUBJECT_OPTIONS.find((o) => o.label === two);
        const threeData = SUBJECT_OPTIONS.find((o) => o.label === three);
        return {
          ...item,
          oneData,
          twoData,
          threeData
        };
      })) != null ? _a3 : [];
    };
    const {
      data: schoolList,
      loading,
      initData: initCollegeList
    } = useInitRequest(
      async () => {
        var _a2, _b;
        const [err, res] = await $zsFetch(API_URLS.CHECK.COLLEGE_CHECK_XK, {
          body: {
            ...schoolForm.value,
            isMatch: schoolForm.value.isMatch ? "1" : "0",
            province: userInfo.value.province,
            currentPage: schoolPagination.value.current,
            pageSize: schoolPagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        if (err)
          return;
        schoolPagination.value.total = res.data.totalCount;
        return (_b = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.list) == null ? void 0 : _b.map((o) => {
          return {
            ...o,
            collapsed: false
          };
        });
      },
      {
        defaultValue: [],
        isInit: false
      }
    );
    if (userInfo.value.score) {
      form.value = {
        ...form.value,
        ...userInfo.value
      };
      initCollegeList();
    } else {
      form.value.province = userInfo.value.province;
      form.value.gkms = (_a = findOptions(provinceList.value, userInfo.value.province)) == null ? void 0 : _a.gkms;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_button = Button;
      const _component_a_checkbox = Checkbox;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_zs_select_filter = _sfc_main$6;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_zs_school_list_meta = _sfc_main$7;
      const _component_a_checkbox_group = CheckboxGroup;
      const _component_a_table = Table;
      const _component_zs_proportion = __nuxt_component_11;
      const _component_zs_no_data_small = _sfc_main$8;
      const _component_a_pagination = Pagination;
      const _component_zs_subject_cur_xk_college_match_major = _sfc_main$4;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-1d0310ec><div class="flex items-center mt-[20px]" data-v-1d0310ec><div class="w-[150px]" data-v-1d0310ec>`);
      _push(ssrRenderComponent(_component_a_button, { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_checkbox, {
              modelValue: unref(schoolForm).isMatch,
              "onUpdate:modelValue": ($event) => unref(schoolForm).isMatch = $event,
              onChange: unref(schoolResetData)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5B8C\u5168\u5339\u914D `);
                } else {
                  return [
                    createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_checkbox, {
                modelValue: unref(schoolForm).isMatch,
                "onUpdate:modelValue": ($event) => unref(schoolForm).isMatch = $event,
                onChange: unref(schoolResetData)
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full ml-[20px]" data-v-1d0310ec>`);
      _push(ssrRenderComponent(_component_a_input, {
        modelValue: unref(schoolForm).yxmc,
        "onUpdate:modelValue": ($event) => unref(schoolForm).yxmc = $event,
        modelModifiers: { trim: true },
        size: "large",
        class: "rounded-lg h-[38px]",
        placeholder: "\u641C\u7D22\u4F60\u611F\u5174\u8DA3\u7684\u9662\u6821",
        "allow-clear": "",
        onClear: unref(schoolResetData)
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon_search, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon_search)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-[120px] ml-[20px]" data-v-1d0310ec>`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        size: "large",
        class: "openButton w-[120px]",
        onClick: unref(schoolResetData)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u641C\u7D22 `);
          } else {
            return [
              createTextVNode(" \u641C\u7D22 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_zs_select_filter, {
        data: unref(schoolFilterData),
        "default-values": unref(schoolForm),
        onChange: schoolChangeFilter,
        class: "mt-[20px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_list, {
        class: "list-border mt-[20px]",
        bordered: false,
        loading: unref(loading)
      }, {
        empty: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_zs_no_data_small)
            ];
          }
        }),
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(schoolList), (school, index) => {
              _push2(ssrRenderComponent(_component_a_list_item, {
                key: school.id
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="flex items-center justify-between" data-v-1d0310ec${_scopeId2}><div class="flex-1" data-v-1d0310ec${_scopeId2}>`);
                    _push3(ssrRenderComponent(_component_zs_school_list_meta, { school }, null, _parent3, _scopeId2));
                    _push3(`</div><div class="w-[150px] text-[#FFA864] text-right cursor-pointer" data-v-1d0310ec${_scopeId2}> \u4E13\u4E1A\u5339\u914D\uFF1A${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school.planSum, "0"))}\u4E2A<i class="iconfont icon-xiala text-[#FFA864] ml-[3px]" data-v-1d0310ec${_scopeId2}></i></div></div>`);
                    if (school.collapsed) {
                      _push3(`<div data-v-1d0310ec${_scopeId2}><div class="bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]" data-v-1d0310ec${_scopeId2}>`);
                      if (unref(form).gkms === "3+3") {
                        _push3(`<!--[--><span data-v-1d0310ec${_scopeId2}>\u9009\u62E9\u79D1\u76EE\uFF1A</span>`);
                        _push3(ssrRenderComponent(_component_a_checkbox_group, {
                          max: 3,
                          modelValue: unref(curSchoolMatchForm).subjectList,
                          "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).subjectList = $event,
                          options: unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6),
                          onChange: ($event) => changeSubject()
                        }, null, _parent3, _scopeId2));
                        _push3(`<!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      if (unref(form).gkms === "3+1+2") {
                        _push3(`<!--[--><div data-v-1d0310ec${_scopeId2}><span data-v-1d0310ec${_scopeId2}>\u9996\u9009\u79D1\u76EE\uFF1A</span>`);
                        _push3(ssrRenderComponent(_component_a_checkbox_group, {
                          max: 1,
                          modelValue: unref(curSchoolMatchForm).firstSubjectList,
                          "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).firstSubjectList = $event,
                          options: "FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS),
                          onChange: ($event) => changeSubject()
                        }, null, _parent3, _scopeId2));
                        _push3(`</div><div class="mt-[5px]" data-v-1d0310ec${_scopeId2}><span data-v-1d0310ec${_scopeId2}>\u6B21\u9009\u79D1\u76EE\uFF1A</span>`);
                        _push3(ssrRenderComponent(_component_a_checkbox_group, {
                          max: 2,
                          modelValue: unref(curSchoolMatchForm).secondSubjectList,
                          "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).secondSubjectList = $event,
                          options: "SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS),
                          onChange: ($event) => changeSubject()
                        }, null, _parent3, _scopeId2));
                        _push3(`</div><!--]-->`);
                      } else {
                        _push3(`<!---->`);
                      }
                      _push3(`</div><div class="my-[5px]" data-v-1d0310ec${_scopeId2}> \u5171\u5F00\u8BBE<span class="text-[#FFA864]" data-v-1d0310ec${_scopeId2}>\u3010${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school.planSum, "0"))}\u3011</span>\u4E2A\u4E13\u4E1A\uFF0C\u9009\u79D1\u8981\u6C42\u5339\u914D\u5982\u4E0B </div>`);
                      _push3(ssrRenderComponent(_component_a_table, {
                        class: "mt-[20px] cursor-pointer",
                        "table-layout-fixed": "",
                        columns: createSchoolTableColumns(),
                        data: unref(form).curSchoolMatchMajorList,
                        loading: unref(matchMajorLoading),
                        bordered: { wrapper: true, cell: true },
                        "page-position": "bottom"
                      }, {
                        xk: withCtx(({ record }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div data-v-1d0310ec${_scopeId3}><span data-v-1d0310ec${_scopeId3}><i class="${ssrRenderClass([record.oneData.icon, "iconfont"])}" style="${ssrRenderStyle({ color: record.oneData.color })}" data-v-1d0310ec${_scopeId3}></i><span data-v-1d0310ec${_scopeId3}>${ssrInterpolate(record.oneData.label)}</span></span><span class="mx-[5px]" data-v-1d0310ec${_scopeId3}>+</span><span data-v-1d0310ec${_scopeId3}><i class="${ssrRenderClass([record.twoData.icon, "iconfont"])}" style="${ssrRenderStyle({ color: record.twoData.color })}" data-v-1d0310ec${_scopeId3}></i><span data-v-1d0310ec${_scopeId3}>${ssrInterpolate(record.twoData.label)}</span></span><span class="mx-[5px]" data-v-1d0310ec${_scopeId3}>+</span><span data-v-1d0310ec${_scopeId3}><i class="${ssrRenderClass([record.threeData.icon, "iconfont"])}" style="${ssrRenderStyle({ color: record.threeData.color })}" data-v-1d0310ec${_scopeId3}></i><span data-v-1d0310ec${_scopeId3}>${ssrInterpolate(record.threeData.label)}</span></span></div>`);
                          } else {
                            return [
                              createVNode("div", null, [
                                createVNode("span", null, [
                                  createVNode("i", {
                                    class: ["iconfont", record.oneData.icon],
                                    style: { color: record.oneData.color }
                                  }, null, 6),
                                  createVNode("span", null, toDisplayString(record.oneData.label), 1)
                                ]),
                                createVNode("span", { class: "mx-[5px]" }, "+"),
                                createVNode("span", null, [
                                  createVNode("i", {
                                    class: ["iconfont", record.twoData.icon],
                                    style: { color: record.twoData.color }
                                  }, null, 6),
                                  createVNode("span", null, toDisplayString(record.twoData.label), 1)
                                ]),
                                createVNode("span", { class: "mx-[5px]" }, "+"),
                                createVNode("span", null, [
                                  createVNode("i", {
                                    class: ["iconfont", record.threeData.icon],
                                    style: { color: record.threeData.color }
                                  }, null, 6),
                                  createVNode("span", null, toDisplayString(record.threeData.label), 1)
                                ])
                              ])
                            ];
                          }
                        }),
                        ppsum: withCtx(({ record }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="text-center text-[#FFA864]" data-v-1d0310ec${_scopeId3}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.ppsum, ""), "\u4E2A"))}</div>`);
                          } else {
                            return [
                              createVNode("div", {
                                class: "text-center text-[#FFA864]",
                                onClick: ($event) => record.ppsum ? setSelectRow(
                                  { ...school, ...record },
                                  () => unref(setActiveKey)("ZsSubjectCurXkCollegeMatchMajor")
                                ) : ""
                              }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.ppsum, ""), "\u4E2A")), 9, ["onClick"])
                            ];
                          }
                        }),
                        ppl: withCtx(({ record }, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(`<div class="flex items-center" data-v-1d0310ec${_scopeId3}>`);
                            _push4(ssrRenderComponent(_component_zs_proportion, {
                              width: record.ppl,
                              background: "#7C92FF",
                              class: "flex-1",
                              key: record.ppl
                            }, null, _parent4, _scopeId3));
                            _push4(`<div class="w-[50px] text-center ml-[10px]" data-v-1d0310ec${_scopeId3}>${ssrInterpolate(record.ppl + "%")}</div></div>`);
                          } else {
                            return [
                              createVNode("div", { class: "flex items-center" }, [
                                (openBlock(), createBlock(_component_zs_proportion, {
                                  width: record.ppl,
                                  background: "#7C92FF",
                                  class: "flex-1",
                                  key: record.ppl
                                }, null, 8, ["width"])),
                                createVNode("div", { class: "w-[50px] text-center ml-[10px]" }, toDisplayString(record.ppl + "%"), 1)
                              ])
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                      _push3(`</div>`);
                    } else {
                      _push3(`<!---->`);
                    }
                  } else {
                    return [
                      createVNode("div", { class: "flex items-center justify-between" }, [
                        createVNode("div", {
                          class: "flex-1",
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`, {
                            open: {
                              target: "_blank"
                            }
                          })
                        }, [
                          createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                        ], 8, ["onClick"]),
                        createVNode("div", {
                          class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                          onClick: ($event) => clickCollapsed(school, index)
                        }, [
                          createTextVNode(" \u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school.planSum, "0")) + "\u4E2A", 1),
                          createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                        ], 8, ["onClick"])
                      ]),
                      school.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                        createVNode("div", { class: "bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]" }, [
                          unref(form).gkms === "3+3" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                            createVNode("span", null, "\u9009\u62E9\u79D1\u76EE\uFF1A"),
                            createVNode(_component_a_checkbox_group, {
                              max: 3,
                              modelValue: unref(curSchoolMatchForm).subjectList,
                              "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).subjectList = $event,
                              options: unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6),
                              onChange: ($event) => changeSubject()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                          ], 64)) : createCommentVNode("", true),
                          unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                            createVNode("div", null, [
                              createVNode("span", null, "\u9996\u9009\u79D1\u76EE\uFF1A"),
                              createVNode(_component_a_checkbox_group, {
                                max: 1,
                                modelValue: unref(curSchoolMatchForm).firstSubjectList,
                                "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).firstSubjectList = $event,
                                options: "FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS),
                                onChange: ($event) => changeSubject()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                            ]),
                            createVNode("div", { class: "mt-[5px]" }, [
                              createVNode("span", null, "\u6B21\u9009\u79D1\u76EE\uFF1A"),
                              createVNode(_component_a_checkbox_group, {
                                max: 2,
                                modelValue: unref(curSchoolMatchForm).secondSubjectList,
                                "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).secondSubjectList = $event,
                                options: "SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS),
                                onChange: ($event) => changeSubject()
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                            ])
                          ], 64)) : createCommentVNode("", true)
                        ]),
                        createVNode("div", { class: "my-[5px]" }, [
                          createTextVNode(" \u5171\u5F00\u8BBE"),
                          createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school.planSum, "0")) + "\u3011", 1),
                          createTextVNode("\u4E2A\u4E13\u4E1A\uFF0C\u9009\u79D1\u8981\u6C42\u5339\u914D\u5982\u4E0B ")
                        ]),
                        createVNode(_component_a_table, {
                          class: "mt-[20px] cursor-pointer",
                          "table-layout-fixed": "",
                          columns: createSchoolTableColumns(),
                          data: unref(form).curSchoolMatchMajorList,
                          loading: unref(matchMajorLoading),
                          bordered: { wrapper: true, cell: true },
                          "page-position": "bottom"
                        }, {
                          xk: withCtx(({ record }) => [
                            createVNode("div", null, [
                              createVNode("span", null, [
                                createVNode("i", {
                                  class: ["iconfont", record.oneData.icon],
                                  style: { color: record.oneData.color }
                                }, null, 6),
                                createVNode("span", null, toDisplayString(record.oneData.label), 1)
                              ]),
                              createVNode("span", { class: "mx-[5px]" }, "+"),
                              createVNode("span", null, [
                                createVNode("i", {
                                  class: ["iconfont", record.twoData.icon],
                                  style: { color: record.twoData.color }
                                }, null, 6),
                                createVNode("span", null, toDisplayString(record.twoData.label), 1)
                              ]),
                              createVNode("span", { class: "mx-[5px]" }, "+"),
                              createVNode("span", null, [
                                createVNode("i", {
                                  class: ["iconfont", record.threeData.icon],
                                  style: { color: record.threeData.color }
                                }, null, 6),
                                createVNode("span", null, toDisplayString(record.threeData.label), 1)
                              ])
                            ])
                          ]),
                          ppsum: withCtx(({ record }) => [
                            createVNode("div", {
                              class: "text-center text-[#FFA864]",
                              onClick: ($event) => record.ppsum ? setSelectRow(
                                { ...school, ...record },
                                () => unref(setActiveKey)("ZsSubjectCurXkCollegeMatchMajor")
                              ) : ""
                            }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.ppsum, ""), "\u4E2A")), 9, ["onClick"])
                          ]),
                          ppl: withCtx(({ record }) => [
                            createVNode("div", { class: "flex items-center" }, [
                              (openBlock(), createBlock(_component_zs_proportion, {
                                width: record.ppl,
                                background: "#7C92FF",
                                class: "flex-1",
                                key: record.ppl
                              }, null, 8, ["width"])),
                              createVNode("div", { class: "w-[50px] text-center ml-[10px]" }, toDisplayString(record.ppl + "%"), 1)
                            ])
                          ]),
                          _: 2
                        }, 1032, ["columns", "data", "loading"])
                      ])) : createCommentVNode("", true)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(schoolList), (school, index) => {
                return openBlock(), createBlock(_component_a_list_item, {
                  key: school.id
                }, {
                  default: withCtx(() => [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("div", {
                        class: "flex-1",
                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/college/${school.id}`, {
                          open: {
                            target: "_blank"
                          }
                        })
                      }, [
                        createVNode(_component_zs_school_list_meta, { school }, null, 8, ["school"])
                      ], 8, ["onClick"]),
                      createVNode("div", {
                        class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                        onClick: ($event) => clickCollapsed(school, index)
                      }, [
                        createTextVNode(" \u4E13\u4E1A\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school.planSum, "0")) + "\u4E2A", 1),
                        createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                      ], 8, ["onClick"])
                    ]),
                    school.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("div", { class: "bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]" }, [
                        unref(form).gkms === "3+3" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                          createVNode("span", null, "\u9009\u62E9\u79D1\u76EE\uFF1A"),
                          createVNode(_component_a_checkbox_group, {
                            max: 3,
                            modelValue: unref(curSchoolMatchForm).subjectList,
                            "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).subjectList = $event,
                            options: unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6),
                            onChange: ($event) => changeSubject()
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                        ], 64)) : createCommentVNode("", true),
                        unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createVNode("div", null, [
                            createVNode("span", null, "\u9996\u9009\u79D1\u76EE\uFF1A"),
                            createVNode(_component_a_checkbox_group, {
                              max: 1,
                              modelValue: unref(curSchoolMatchForm).firstSubjectList,
                              "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).firstSubjectList = $event,
                              options: "FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS),
                              onChange: ($event) => changeSubject()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                          ]),
                          createVNode("div", { class: "mt-[5px]" }, [
                            createVNode("span", null, "\u6B21\u9009\u79D1\u76EE\uFF1A"),
                            createVNode(_component_a_checkbox_group, {
                              max: 2,
                              modelValue: unref(curSchoolMatchForm).secondSubjectList,
                              "onUpdate:modelValue": ($event) => unref(curSchoolMatchForm).secondSubjectList = $event,
                              options: "SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS),
                              onChange: ($event) => changeSubject()
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                          ])
                        ], 64)) : createCommentVNode("", true)
                      ]),
                      createVNode("div", { class: "my-[5px]" }, [
                        createTextVNode(" \u5171\u5F00\u8BBE"),
                        createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(school.planSum, "0")) + "\u3011", 1),
                        createTextVNode("\u4E2A\u4E13\u4E1A\uFF0C\u9009\u79D1\u8981\u6C42\u5339\u914D\u5982\u4E0B ")
                      ]),
                      createVNode(_component_a_table, {
                        class: "mt-[20px] cursor-pointer",
                        "table-layout-fixed": "",
                        columns: createSchoolTableColumns(),
                        data: unref(form).curSchoolMatchMajorList,
                        loading: unref(matchMajorLoading),
                        bordered: { wrapper: true, cell: true },
                        "page-position": "bottom"
                      }, {
                        xk: withCtx(({ record }) => [
                          createVNode("div", null, [
                            createVNode("span", null, [
                              createVNode("i", {
                                class: ["iconfont", record.oneData.icon],
                                style: { color: record.oneData.color }
                              }, null, 6),
                              createVNode("span", null, toDisplayString(record.oneData.label), 1)
                            ]),
                            createVNode("span", { class: "mx-[5px]" }, "+"),
                            createVNode("span", null, [
                              createVNode("i", {
                                class: ["iconfont", record.twoData.icon],
                                style: { color: record.twoData.color }
                              }, null, 6),
                              createVNode("span", null, toDisplayString(record.twoData.label), 1)
                            ]),
                            createVNode("span", { class: "mx-[5px]" }, "+"),
                            createVNode("span", null, [
                              createVNode("i", {
                                class: ["iconfont", record.threeData.icon],
                                style: { color: record.threeData.color }
                              }, null, 6),
                              createVNode("span", null, toDisplayString(record.threeData.label), 1)
                            ])
                          ])
                        ]),
                        ppsum: withCtx(({ record }) => [
                          createVNode("div", {
                            class: "text-center text-[#FFA864]",
                            onClick: ($event) => record.ppsum ? setSelectRow(
                              { ...school, ...record },
                              () => unref(setActiveKey)("ZsSubjectCurXkCollegeMatchMajor")
                            ) : ""
                          }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(record.ppsum, ""), "\u4E2A")), 9, ["onClick"])
                        ]),
                        ppl: withCtx(({ record }) => [
                          createVNode("div", { class: "flex items-center" }, [
                            (openBlock(), createBlock(_component_zs_proportion, {
                              width: record.ppl,
                              background: "#7C92FF",
                              class: "flex-1",
                              key: record.ppl
                            }, null, 8, ["width"])),
                            createVNode("div", { class: "w-[50px] text-center ml-[10px]" }, toDisplayString(record.ppl + "%"), 1)
                          ])
                        ]),
                        _: 2
                      }, 1032, ["columns", "data", "loading"])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1024);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_a_pagination, {
        class: "justify-end mt-[20px]",
        total: unref(schoolPagination).total,
        current: unref(schoolPagination).current,
        "page-size": unref(schoolPagination).pageSize,
        onChange: unref(schoolOnPageChange),
        onPageSizeChange: unref(schoolOnPageSizeChange),
        "show-total": "",
        "show-jumper": "",
        "show-page-size": ""
      }, null, _parent));
      if (unref(activeKey) === "ZsSubjectCurXkCollegeMatchMajor") {
        _push(ssrRenderComponent(_component_zs_subject_cur_xk_college_match_major, {
          data: unref(form).selectRow,
          onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsSubjectCollegeCheck/index.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["__scopeId", "data-v-1d0310ec"]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  props: {
    data: { default: () => {
    } }
  },
  async setup(__props) {
    let __temp, __restore;
    const props = __props;
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const { provinceCityList, getDictionValue } = useWebsiteInformation();
    const { form } = useForm(() => ({
      ...props.data,
      yxsf: "",
      cc: "",
      slbq: "",
      yxmc: ""
    }));
    const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
      window.scrollTo(0, 0);
      refresh();
    });
    const createTableColumns = () => {
      return [
        {
          title: "\u9662\u6821\u540D\u79F0",
          dataIndex: "yxmc",
          align: "center",
          width: 350,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "yxmc"
        },
        {
          title: "\u9662\u6821\u5C42\u6B21",
          dataIndex: "cc",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          render: ({ record }) => {
            return textFormat(record.cc);
          }
        },
        {
          title: "\u5339\u914D\u4E13\u4E1A",
          dataIndex: "zymc",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "zymc"
        },
        {
          title: "\u9009\u79D1\u8981\u6C42",
          dataIndex: "xk",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          bodyCellStyle: {
            color: "#FFA864"
          },
          render: ({ record }) => {
            return textFormat(record.xk);
          }
        }
      ];
    };
    const { data, status, refresh } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(
      "collegeList",
      async () => {
        var _a2, _b2;
        var _a, _b;
        const [err, res] = await $zsFetch(API_URLS.CHECK.MAJOR_CHECK_XK_SCHOOL_MATCH_LIST, {
          body: {
            sf: userInfo.value.province,
            code: form.value.code,
            zydm: form.value.zydm,
            yxsf: form.value.yxsf,
            cc: form.value.cc,
            slbq: form.value.slbq,
            yxmc: form.value.yxmc,
            currentPage: pagination.value.current,
            pageSize: pagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        return {
          total: (_a2 = (_a = res == null ? void 0 : res.data) == null ? void 0 : _a.totalCount) != null ? _a2 : 0,
          schoolList: (_b2 = (_b = res == null ? void 0 : res.data) == null ? void 0 : _b.list) != null ? _b2 : []
        };
      },
      {
        default: () => ({
          total: 0,
          schoolList: []
        })
      }
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_zs_base_modal = _sfc_main$9;
      const _component_a_space = Space;
      const _component_a_select = Select;
      const _component_a_input = Input;
      const _component_a_table = Table;
      _push(ssrRenderComponent(_component_zs_base_modal, mergeProps({
        "content-class": "w-[1100px] ",
        title: "",
        top: "5%",
        "align-center": "",
        onCancel: ($event) => _ctx.$emit("cancel")
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="max-h-[90vh] overflow-auto no-scrollbar"${_scopeId}><div class="flex-1 cursor-pointer"${_scopeId}><div class="text-[20px] text-[#333333] mb-[10px] font-bold"${_scopeId}>${ssrInterpolate(unref(form).zymc)}</div><div class="mt-[10px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
              split: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="w-[2px] h-[8px] text-[#999]"${_scopeId2}>|</span>`);
                } else {
                  return [
                    createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                  ];
                }
              }),
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId2}> \u4E13\u4E1A\u4EE3\u7801\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).zydm))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId2}> \u4FEE\u4E1A\u5E74\u9650\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).xyNx))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId2}> \u6388\u4E88\u5B66\u4F4D\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).syxw))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId2}> \u7537\u5973\u6BD4\u4F8B\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).xbBl))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId2}> \u5E73\u5747\u85AA\u916C\uFF1A<span class="text-price"${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).pjxz)))}</span></span>`);
                } else {
                  return [
                    createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).zydm)), 1),
                    createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).xyNx)), 1),
                    createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).syxw)), 1),
                    createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).xbBl)), 1),
                    createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                      createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                      createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).pjxz))), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div></div><div${_scopeId}> \u7B26\u5408<span class="text-[#FFA864]"${_scopeId}>\u3010${ssrInterpolate(unref(form).codeName.split("/").join("+"))}\u3011</span>\u9009\u79D1\u7EC4\u5171\xA0<span class="text-[#FFA864]"${_scopeId}>\u3010${ssrInterpolate(unref(form).schoolCountByxk)}\u3011</span>\xA0\u6240\u9662\u6821\uFF0C \u5F00\u8BBE<span class="text-[#FFA864]"${_scopeId}>\u3010${ssrInterpolate(unref(form).majorCountByxk)}\u3011</span>\xA0\u4E2A\u4E13\u4E1A </div><div class="mt-[20px]"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_a_space, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_a_select, {
                    style: { width: "150px" },
                    modelValue: unref(form).yxsf,
                    "onUpdate:modelValue": ($event) => unref(form).yxsf = $event,
                    options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(provinceCityList)],
                    placeholder: "\u6240\u5728\u5730\u533A",
                    "allow-clear": "",
                    onChange: unref(resetData)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_select, {
                    style: { width: "150px" },
                    modelValue: unref(form).cc,
                    "onUpdate:modelValue": ($event) => unref(form).cc = $event,
                    options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("BXCC")],
                    placeholder: "\u9662\u6821\u5C42\u6B21",
                    "allow-clear": "",
                    onChange: unref(resetData)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_select, {
                    style: { width: "150px" },
                    modelValue: unref(form).slbq,
                    "onUpdate:modelValue": ($event) => unref(form).slbq = $event,
                    options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("SLBQONE")],
                    placeholder: "\u5B9E\u529B\u6807\u7B7E",
                    "allow-clear": "",
                    onChange: unref(resetData)
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_a_input, {
                    style: { width: "300px" },
                    modelValue: unref(form).yxmc,
                    "onUpdate:modelValue": ($event) => unref(form).yxmc = $event,
                    modelModifiers: { trim: true },
                    placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                    "allow-clear": "",
                    onChange: unref(resetData)
                  }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_a_select, {
                      style: { width: "150px" },
                      modelValue: unref(form).yxsf,
                      "onUpdate:modelValue": ($event) => unref(form).yxsf = $event,
                      options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(provinceCityList)],
                      placeholder: "\u6240\u5728\u5730\u533A",
                      "allow-clear": "",
                      onChange: unref(resetData)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                    createVNode(_component_a_select, {
                      style: { width: "150px" },
                      modelValue: unref(form).cc,
                      "onUpdate:modelValue": ($event) => unref(form).cc = $event,
                      options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("BXCC")],
                      placeholder: "\u9662\u6821\u5C42\u6B21",
                      "allow-clear": "",
                      onChange: unref(resetData)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                    createVNode(_component_a_select, {
                      style: { width: "150px" },
                      modelValue: unref(form).slbq,
                      "onUpdate:modelValue": ($event) => unref(form).slbq = $event,
                      options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("SLBQONE")],
                      placeholder: "\u5B9E\u529B\u6807\u7B7E",
                      "allow-clear": "",
                      onChange: unref(resetData)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                    createVNode(_component_a_input, {
                      style: { width: "300px" },
                      modelValue: unref(form).yxmc,
                      "onUpdate:modelValue": ($event) => unref(form).yxmc = $event,
                      modelModifiers: { trim: true },
                      placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                      "allow-clear": "",
                      onChange: unref(resetData)
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
            _push2(ssrRenderComponent(_component_a_table, {
              class: "mt-[20px] cursor-pointer",
              "table-layout-fixed": "",
              columns: createTableColumns(),
              data: unref(data).schoolList,
              loading: unref(status) === "pending",
              bordered: { wrapper: true, cell: true },
              pagination: { ...unref(pagination), total: unref(data).total },
              onPageChange: unref(onPageChange),
              onPageSizeChange: unref(onPageSizeChange),
              "page-position": "bottom"
            }, {
              yxmc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left flex items-center"${_scopeId2}><img${ssrRenderAttr("src", record.logo)} class="w-[42px] h-[42px] rounded-[50%]" alt=""${_scopeId2}><div class="ml-[10px]"${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc))}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left flex items-center" }, [
                      createVNode("img", {
                        src: record.logo,
                        class: "w-[42px] h-[42px] rounded-[50%]",
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "ml-[10px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc)), 1)
                    ])
                  ];
                }
              }),
              zymc: withCtx(({ record }, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="text-left"${_scopeId2}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc))}</div>`);
                } else {
                  return [
                    createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div>`);
          } else {
            return [
              createVNode("div", { class: "max-h-[90vh] overflow-auto no-scrollbar" }, [
                createVNode("div", { class: "flex-1 cursor-pointer" }, [
                  createVNode("div", { class: "text-[20px] text-[#333333] mb-[10px] font-bold" }, toDisplayString(unref(form).zymc), 1),
                  createVNode("div", { class: "mt-[10px]" }, [
                    createVNode(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                      split: withCtx(() => [
                        createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                      ]),
                      default: withCtx(() => [
                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).zydm)), 1),
                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).xyNx)), 1),
                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).syxw)), 1),
                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(unref(form).xbBl)), 1),
                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                          createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                          createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(unref(form).pjxz))), 1)
                        ])
                      ]),
                      _: 1
                    })
                  ])
                ]),
                createVNode("div", null, [
                  createTextVNode(" \u7B26\u5408"),
                  createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(unref(form).codeName.split("/").join("+")) + "\u3011", 1),
                  createTextVNode("\u9009\u79D1\u7EC4\u5171\xA0"),
                  createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(unref(form).schoolCountByxk) + "\u3011", 1),
                  createTextVNode("\xA0\u6240\u9662\u6821\uFF0C \u5F00\u8BBE"),
                  createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(unref(form).majorCountByxk) + "\u3011", 1),
                  createTextVNode("\xA0\u4E2A\u4E13\u4E1A ")
                ]),
                createVNode("div", { class: "mt-[20px]" }, [
                  createVNode(_component_a_space, null, {
                    default: withCtx(() => [
                      createVNode(_component_a_select, {
                        style: { width: "150px" },
                        modelValue: unref(form).yxsf,
                        "onUpdate:modelValue": ($event) => unref(form).yxsf = $event,
                        options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(provinceCityList)],
                        placeholder: "\u6240\u5728\u5730\u533A",
                        "allow-clear": "",
                        onChange: unref(resetData)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                      createVNode(_component_a_select, {
                        style: { width: "150px" },
                        modelValue: unref(form).cc,
                        "onUpdate:modelValue": ($event) => unref(form).cc = $event,
                        options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("BXCC")],
                        placeholder: "\u9662\u6821\u5C42\u6B21",
                        "allow-clear": "",
                        onChange: unref(resetData)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                      createVNode(_component_a_select, {
                        style: { width: "150px" },
                        modelValue: unref(form).slbq,
                        "onUpdate:modelValue": ($event) => unref(form).slbq = $event,
                        options: [..."NO_LIMIT_NULL_OPTIONS" in _ctx ? _ctx.NO_LIMIT_NULL_OPTIONS : unref(NO_LIMIT_NULL_OPTIONS), ...unref(getDictionValue)("SLBQONE")],
                        placeholder: "\u5B9E\u529B\u6807\u7B7E",
                        "allow-clear": "",
                        onChange: unref(resetData)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"]),
                      createVNode(_component_a_input, {
                        style: { width: "300px" },
                        modelValue: unref(form).yxmc,
                        "onUpdate:modelValue": ($event) => unref(form).yxmc = $event,
                        modelModifiers: { trim: true },
                        placeholder: "\u8BF7\u8F93\u5165\u9662\u6821\u540D\u79F0",
                        "allow-clear": "",
                        onChange: unref(resetData)
                      }, null, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
                    ]),
                    _: 1
                  })
                ]),
                createVNode(_component_a_table, {
                  class: "mt-[20px] cursor-pointer",
                  "table-layout-fixed": "",
                  columns: createTableColumns(),
                  data: unref(data).schoolList,
                  loading: unref(status) === "pending",
                  bordered: { wrapper: true, cell: true },
                  pagination: { ...unref(pagination), total: unref(data).total },
                  onPageChange: unref(onPageChange),
                  onPageSizeChange: unref(onPageSizeChange),
                  "page-position": "bottom"
                }, {
                  yxmc: withCtx(({ record }) => [
                    createVNode("div", { class: "text-left flex items-center" }, [
                      createVNode("img", {
                        src: record.logo,
                        class: "w-[42px] h-[42px] rounded-[50%]",
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode("div", { class: "ml-[10px]" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.yxmc)), 1)
                    ])
                  ]),
                  zymc: withCtx(({ record }) => [
                    createVNode("div", { class: "text-left" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(record.zymc)), 1)
                  ]),
                  _: 1
                }, 8, ["columns", "data", "loading", "pagination", "onPageChange", "onPageSizeChange"])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsSubjectCurXkMajorMatchCollege/index.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const { $zsFetch } = useNuxtApp();
    const { userInfo } = useUser();
    const { provinceList } = useWebsiteInformation();
    const [activeKey, setActiveKey] = useBasicsState(null);
    const [matchSchoolLoading, setMatchSchoolLoading] = useBasicsState(false);
    const { form } = useForm(() => ({
      province: "",
      // 用户省份
      gkms: "",
      // 用户高考模式
      curMajorMatchSchoolInfo: {
        list: []
      },
      // 当前专业匹配学校信息
      selectRow: {},
      zydm: ""
      // 当前代码
    }));
    const { form: majorForm } = useForm(() => ({
      isMatch: false,
      zymc: ""
    }));
    const { form: curMajorMatchSchoolForm, resetForm: curMajorMatchResetForm } = useForm(() => ({
      subjectList: [],
      // 选科
      firstSubjectList: [],
      // 首选科目
      secondSubjectList: []
      // 次选科目
    }));
    const specialXkList = computed(() => [
      ...curMajorMatchSchoolForm.value.firstSubjectList,
      ...curMajorMatchSchoolForm.value.secondSubjectList
    ]);
    const {
      pagination: majorPagination,
      resetData: majorResetData,
      onPageChange: majorOnPageChange,
      onPageSizeChange: majorOnPageSizeChange
    } = usePagination(() => {
      window.scrollTo(0, 0);
      initMajorList();
    });
    const closeAllCollapsed = () => {
      majorList.value.forEach((item) => {
        item.childs.forEach((o) => {
          o.childs.forEach((v) => {
            v.collapsed = false;
          });
        });
      });
    };
    const clickCollapsed = async (item, index) => {
      form.value.zydm = item.zydm;
      if (item.collapsed) {
        closeAllCollapsed();
      } else {
        closeAllCollapsed();
        item.collapsed = !item.collapsed;
        await curMajorMatchResetForm();
        getCurrentSchoolList();
      }
    };
    const majorChangeFilter = async (val) => {
      if (val.levelCode !== ccData.value.levelCode) {
        ccData.value.levelCode = val.levelCode;
        mlData.value.xkmldm = "";
        zylData.value.zyldm = [""];
        await refreshMlData();
      }
      if (val.xkmldm !== mlData.value.xkmldm) {
        mlData.value.xkmldm = val.xkmldm;
        zylData.value.zyldm = [""];
        await refreshZylData();
      }
      majorResetData();
    };
    const setSelectRow = (row, callBack) => {
      form.value.selectRow = row;
      if (callBack)
        callBack();
    };
    const changeSubject = (gkms) => {
      getCurrentSchoolList();
    };
    const getCurrentSchoolList = async () => {
      var _a3;
      var _a2, _b;
      setMatchSchoolLoading(true);
      const [err, res] = await $zsFetch(API_URLS.CHECK.MAJOR_CHECK_XK_MATCH_SCHOOL, {
        body: {
          sf: form.value.province,
          zydm: form.value.zydm,
          xk: form.value.gkms === "3+3" ? curMajorMatchSchoolForm.value.subjectList.join("/") : specialXkList.value.join("/")
        }
      });
      if (err)
        return setMatchSchoolLoading(false);
      setMatchSchoolLoading(false);
      form.value.curMajorMatchSchoolInfo = {
        ...res.data,
        list: (_a3 = (_b = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.list) == null ? void 0 : _b.map((item) => {
          const [one, two, three] = item.codeName.split("/");
          const oneData = SUBJECT_OPTIONS.find((o) => o.label === one);
          const twoData = SUBJECT_OPTIONS.find((o) => o.label === two);
          const threeData = SUBJECT_OPTIONS.find((o) => o.label === three);
          return {
            ...item,
            oneData,
            twoData,
            threeData
          };
        })) != null ? _a3 : []
      };
    };
    const { data: ccData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("ccList", async () => {
      var _a3, _b;
      var _a2;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
      const ccList = (_a3 = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.map((item) => {
        return {
          ...item,
          value: item.levelCode,
          label: item.levelName
        };
      })) != null ? _a3 : [];
      return {
        title: "\u4E13\u4E1A\u5C42\u6B21",
        key: "levelCode",
        isShow: true,
        multiple: false,
        options: ccList,
        levelCode: (_b = ccList[0].value) != null ? _b : ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: mlData, refresh: refreshMlData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("mlList", async () => {
      var _a3;
      var _a2;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_X_KML_LIST, {
        body: {
          levelCode: ccData.value.levelCode
        }
      });
      const mlList = (_a3 = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.map((item) => {
        return {
          ...item,
          value: item.xkmldm,
          label: item.xkml
        };
      })) != null ? _a3 : [];
      return {
        title: "\u4E13\u4E1A\u95E8\u7C7B",
        key: "xkmldm",
        isShow: true,
        multiple: false,
        options: [...ALL_OPTIONS, ...mlList],
        xkmldm: ""
      };
    })), __temp = await __temp, __restore(), __temp);
    const { data: zylData, refresh: refreshZylData } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData("zylList", async () => {
      var _a3;
      var _a2;
      const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_ZYL_LIST, {
        body: {
          xkmldm: mlData.value.xkmldm
        }
      });
      const zylList = (_a3 = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.map((item) => {
        return {
          ...item,
          value: item.zyldm,
          label: item.zyl
        };
      })) != null ? _a3 : [];
      return {
        title: "\u4E13\u4E1A\u5927\u7C7B",
        key: "zyldm",
        isShow: !!mlData.value.xkmldm,
        multiple: true,
        options: [...ALL_OPTIONS, ...zylList],
        zyldm: [""]
      };
    })), __temp = await __temp, __restore(), __temp);
    const createMajorTableColumns = () => {
      return [
        {
          title: "\u9009\u79D1\u7EC4\u5408",
          dataIndex: "xk",
          width: 300,
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "xk"
        },
        {
          title: "\u5F53\u524D\u9009\u79D1\u5339\u914D\u9662\u6821",
          dataIndex: "schoolCountByxk",
          align: "center",
          width: 160,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "schoolCountByxk"
        },
        {
          title: "\u5F00\u8BBE\u4E13\u4E1A",
          dataIndex: "majorCountByxk",
          align: "center",
          width: 150,
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "majorCountByxk"
        },
        {
          title: "\u4E13\u4E1A\u5339\u914D\u7387",
          dataIndex: "ppl",
          align: "center",
          headerCellStyle: {
            fontSize: "14px",
            backgroundColor: "#EDEDED",
            color: "#333333",
            fontWeight: "bold"
          },
          slotName: "ppl"
        }
      ];
    };
    const {
      data: majorList,
      loading,
      initData: initMajorList
    } = useInitRequest(
      async () => {
        var _a2, _b;
        const [err, res] = await $zsFetch(API_URLS.CHECK.MAJOR_CHECK_XK, {
          body: {
            sf: form.value.province,
            zymc: majorForm.value.zymc,
            isMatch: majorForm.value.isMatch ? "1" : "0",
            cc: ccData.value.levelCode,
            xkml: mlData.value.xkmldm,
            zyl: zylData.value.zyldm.join("/"),
            currentPage: majorPagination.value.current,
            pageSize: majorPagination.value.pageSize,
            pagingOrNot: 1
          }
        });
        if (err)
          return;
        majorPagination.value.total = res.data.totalCount;
        const list = (_b = (_a2 = res == null ? void 0 : res.data) == null ? void 0 : _a2.list) == null ? void 0 : _b.map((item) => {
          item.childs.forEach((o) => {
            o.childs.forEach((v) => {
              v.collapsed = false;
            });
          });
          return {
            ...item
          };
        });
        return list;
      },
      {
        defaultValue: [],
        isInit: false
      }
    );
    if (userInfo.value.score) {
      form.value = {
        ...form.value,
        ...userInfo.value
      };
      initMajorList();
    } else {
      form.value.province = userInfo.value.province;
      form.value.gkms = (_a = findOptions(provinceList.value, userInfo.value.province)) == null ? void 0 : _a.gkms;
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a2, _b, _c;
      const _component_a_button = Button;
      const _component_a_checkbox = Checkbox;
      const _component_a_input = Input;
      const _component_icon_search = IconSearch;
      const _component_zs_select_filter = _sfc_main$6;
      const _component_a_spin = Spin;
      const _component_a_list = List;
      const _component_a_list_item = ListItem;
      const _component_a_space = Space;
      const _component_a_checkbox_group = CheckboxGroup;
      const _component_a_table = Table;
      const _component_zs_proportion = __nuxt_component_11;
      const _component_zs_no_data_small = _sfc_main$8;
      const _component_a_pagination = Pagination;
      const _component_zs_subject_cur_xk_major_match_college = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex items-center mt-[20px]"><div class="w-[150px]">`);
      _push(ssrRenderComponent(_component_a_button, { size: "large" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_a_checkbox, {
              modelValue: unref(majorForm).isMatch,
              "onUpdate:modelValue": ($event) => unref(majorForm).isMatch = $event,
              onChange: unref(majorResetData)
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(` \u5B8C\u5168\u5339\u914D `);
                } else {
                  return [
                    createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_a_checkbox, {
                modelValue: unref(majorForm).isMatch,
                "onUpdate:modelValue": ($event) => unref(majorForm).isMatch = $event,
                onChange: unref(majorResetData)
              }, {
                default: withCtx(() => [
                  createTextVNode(" \u5B8C\u5168\u5339\u914D ")
                ]),
                _: 1
              }, 8, ["modelValue", "onUpdate:modelValue", "onChange"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-full ml-[20px]">`);
      _push(ssrRenderComponent(_component_a_input, {
        size: "large",
        modelValue: unref(majorForm).zymc,
        "onUpdate:modelValue": ($event) => unref(majorForm).zymc = $event,
        modelModifiers: { trim: true },
        class: "rounded-[8px] h-[38px]",
        placeholder: "\u641C\u7D22\u4E13\u4E1A\u540D\u79F0",
        onClear: unref(majorResetData),
        "allow-clear": ""
      }, {
        prefix: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_icon_search, null, null, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_icon_search)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="w-[120px] ml-[20px] rounded-[8px]">`);
      _push(ssrRenderComponent(_component_a_button, {
        type: "primary",
        class: "openButton w-[120px]",
        size: "large",
        onClick: unref(majorResetData)
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u641C\u7D22 `);
          } else {
            return [
              createTextVNode(" \u641C\u7D22 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_zs_select_filter, {
        data: [unref(ccData), unref(mlData), unref(zylData)],
        "default-values": {
          ...unref(majorForm),
          levelCode: (_a2 = unref(ccData)) == null ? void 0 : _a2.levelCode,
          xkmldm: (_b = unref(mlData)) == null ? void 0 : _b.xkmldm,
          zyldm: (_c = unref(zylData)) == null ? void 0 : _c.zyldm
        },
        onChange: majorChangeFilter,
        class: "mt-[20px]"
      }, null, _parent));
      _push(ssrRenderComponent(_component_a_spin, {
        loading: unref(loading),
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a3, _b2;
          if (_push2) {
            if ((_a3 = unref(majorList)) == null ? void 0 : _a3.length) {
              _push2(`<!--[--><!--[-->`);
              ssrRenderList(unref(majorList), (category, categoryIndex) => {
                _push2(`<div${_scopeId}><div class="flex items-center m-[20px_0px_10px]"${_scopeId}><div class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"${_scopeId}></div><div class="ml-[10px] text-[18px] text-[#333] font-bold"${_scopeId}>${ssrInterpolate(category.xkml)}</div></div><!--[-->`);
                ssrRenderList(category == null ? void 0 : category.childs, (middle, middleIndex) => {
                  _push2(`<div${_scopeId}><div class="text-[#FFA864] font-bold"${_scopeId}>${ssrInterpolate(middle.zyl)}</div>`);
                  _push2(ssrRenderComponent(_component_a_list, {
                    bordered: false,
                    class: "mt-[10px]"
                  }, {
                    empty: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent3, _scopeId2));
                      } else {
                        return [
                          createVNode(_component_zs_no_data_small)
                        ];
                      }
                    }),
                    default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                      if (_push3) {
                        _push3(`<!--[-->`);
                        ssrRenderList(middle == null ? void 0 : middle.childs, (major, majorIndex) => {
                          _push3(ssrRenderComponent(_component_a_list_item, {
                            key: major.id,
                            class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
                          }, {
                            default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                              var _a4, _b3, _c2, _d;
                              if (_push4) {
                                _push4(`<div class="flex items-center justify-between"${_scopeId3}><div class="flex-1 cursor-pointer"${_scopeId3}><div class="text-[16px] text-[#333333] mb-[10px] font-[500]"${_scopeId3}>${ssrInterpolate(major.zymc)}</div><div class="mt-[10px]"${_scopeId3}>`);
                                _push4(ssrRenderComponent(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                  split: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<span class="w-[2px] h-[8px] text-[#999]"${_scopeId4}>|</span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                      ];
                                    }
                                  }),
                                  default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                                    if (_push5) {
                                      _push5(`<span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId4}> \u4E13\u4E1A\u4EE3\u7801\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId4}> \u4FEE\u4E1A\u5E74\u9650\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId4}> \u6388\u4E88\u5B66\u4F4D\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId4}> \u7537\u5973\u6BD4\u4F8B\uFF1A${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl))}</span><span class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"${_scopeId4}> \u5E73\u5747\u85AA\u916C\uFF1A<span class="text-price"${_scopeId4}>${ssrInterpolate(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz)))}</span></span>`);
                                    } else {
                                      return [
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                        createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                          createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                          createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                        ])
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent4, _scopeId3));
                                _push4(`</div></div><div class="w-[150px] text-[#FFA864] text-right cursor-pointer"${_scopeId3}> \u9662\u6821\u5339\u914D\uFF1A${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.yxsum, "0"))}\u4E2A<i class="iconfont icon-xiala text-[#FFA864] ml-[3px]"${_scopeId3}></i></div></div>`);
                                if (major.collapsed) {
                                  _push4(`<div${_scopeId3}><div class="bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]"${_scopeId3}>`);
                                  if (unref(form).gkms === "3+3") {
                                    _push4(`<!--[--><span${_scopeId3}>\u9009\u62E9\u79D1\u76EE\uFF1A</span>`);
                                    _push4(ssrRenderComponent(_component_a_checkbox_group, {
                                      max: 3,
                                      modelValue: unref(curMajorMatchSchoolForm).subjectList,
                                      "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).subjectList = $event,
                                      options: unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6),
                                      onChange: ($event) => changeSubject()
                                    }, null, _parent4, _scopeId3));
                                    _push4(`<!--]-->`);
                                  } else {
                                    _push4(`<!---->`);
                                  }
                                  if (unref(form).gkms === "3+1+2") {
                                    _push4(`<!--[--><div${_scopeId3}><span${_scopeId3}>\u9996\u9009\u79D1\u76EE\uFF1A</span>`);
                                    _push4(ssrRenderComponent(_component_a_checkbox_group, {
                                      max: 1,
                                      modelValue: unref(curMajorMatchSchoolForm).firstSubjectList,
                                      "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).firstSubjectList = $event,
                                      options: "FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS),
                                      onChange: ($event) => changeSubject()
                                    }, null, _parent4, _scopeId3));
                                    _push4(`</div><div class="mt-[5px]"${_scopeId3}><span${_scopeId3}>\u6B21\u9009\u79D1\u76EE\uFF1A</span>`);
                                    _push4(ssrRenderComponent(_component_a_checkbox_group, {
                                      max: 2,
                                      modelValue: unref(curMajorMatchSchoolForm).secondSubjectList,
                                      "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).secondSubjectList = $event,
                                      options: "SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS),
                                      onChange: ($event) => changeSubject()
                                    }, null, _parent4, _scopeId3));
                                    _push4(`</div><!--]-->`);
                                  } else {
                                    _push4(`<!---->`);
                                  }
                                  _push4(`</div><div${_scopeId3}> \u5171 <span class="text-[#FFA864]"${_scopeId3}>\u3010${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                    (_a4 = unref(form).curMajorMatchSchoolInfo) == null ? void 0 : _a4.schoolCount,
                                    "0"
                                  ))}\u3011</span>\u6240\u9662\u6821\u5F00\u8BBE<span class="text-[#FFA864]"${_scopeId3}>\u3010${ssrInterpolate(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                    (_b3 = unref(form).curMajorMatchSchoolInfo) == null ? void 0 : _b3.majorCount,
                                    "0"
                                  ))}\u3011</span>\u4E2A\u4E13\u4E1A </div>`);
                                  _push4(ssrRenderComponent(_component_a_table, {
                                    class: "mt-[20px] cursor-pointer",
                                    "table-layout-fixed": "",
                                    columns: createMajorTableColumns(),
                                    data: unref(form).curMajorMatchSchoolInfo.list,
                                    loading: unref(matchSchoolLoading),
                                    bordered: { wrapper: true, cell: true },
                                    "page-position": "bottom"
                                  }, {
                                    xk: withCtx(({ record }, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`<div${_scopeId4}><span${_scopeId4}><i class="${ssrRenderClass([record.oneData.icon, "iconfont"])}" style="${ssrRenderStyle({ color: record.oneData.color })}"${_scopeId4}></i><span${_scopeId4}>${ssrInterpolate(record.oneData.label)}</span></span><span class="mx-[5px]"${_scopeId4}>+</span><span${_scopeId4}><i class="${ssrRenderClass([record.twoData.icon, "iconfont"])}" style="${ssrRenderStyle({ color: record.twoData.color })}"${_scopeId4}></i><span${_scopeId4}>${ssrInterpolate(record.twoData.label)}</span></span><span class="mx-[5px]"${_scopeId4}>+</span><span${_scopeId4}><i class="${ssrRenderClass([record.threeData.icon, "iconfont"])}" style="${ssrRenderStyle({ color: record.threeData.color })}"${_scopeId4}></i><span${_scopeId4}>${ssrInterpolate(record.threeData.label)}</span></span></div>`);
                                      } else {
                                        return [
                                          createVNode("div", null, [
                                            createVNode("span", null, [
                                              createVNode("i", {
                                                class: ["iconfont", record.oneData.icon],
                                                style: { color: record.oneData.color }
                                              }, null, 6),
                                              createVNode("span", null, toDisplayString(record.oneData.label), 1)
                                            ]),
                                            createVNode("span", { class: "mx-[5px]" }, "+"),
                                            createVNode("span", null, [
                                              createVNode("i", {
                                                class: ["iconfont", record.twoData.icon],
                                                style: { color: record.twoData.color }
                                              }, null, 6),
                                              createVNode("span", null, toDisplayString(record.twoData.label), 1)
                                            ]),
                                            createVNode("span", { class: "mx-[5px]" }, "+"),
                                            createVNode("span", null, [
                                              createVNode("i", {
                                                class: ["iconfont", record.threeData.icon],
                                                style: { color: record.threeData.color }
                                              }, null, 6),
                                              createVNode("span", null, toDisplayString(record.threeData.label), 1)
                                            ])
                                          ])
                                        ];
                                      }
                                    }),
                                    schoolCountByxk: withCtx(({ record }, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`<div class="text-[#FFA864]"${_scopeId4}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.schoolCountByxk, "\u4E2A"))}</div>`);
                                      } else {
                                        return [
                                          createVNode("div", {
                                            class: "text-[#FFA864]",
                                            onClick: ($event) => record.schoolCountByxk ? setSelectRow(
                                              { ...major, ...record },
                                              () => unref(setActiveKey)(
                                                "ZsSubjectCurXkMajorMatchCollege"
                                              )
                                            ) : ""
                                          }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.schoolCountByxk, "\u4E2A")), 9, ["onClick"])
                                        ];
                                      }
                                    }),
                                    majorCountByxk: withCtx(({ record }, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`<div class="text-[#FFA864]"${_scopeId4}>${ssrInterpolate(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.majorCountByxk, "\u4E2A"))}</div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "text-[#FFA864]" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.majorCountByxk, "\u4E2A")), 1)
                                        ];
                                      }
                                    }),
                                    ppl: withCtx(({ record }, _push5, _parent5, _scopeId4) => {
                                      if (_push5) {
                                        _push5(`<div class="flex items-center"${_scopeId4}>`);
                                        _push5(ssrRenderComponent(_component_zs_proportion, {
                                          width: record.ppl,
                                          background: "#7C92FF",
                                          class: "flex-1",
                                          key: record.ppl
                                        }, null, _parent5, _scopeId4));
                                        _push5(`<div class="w-[50px] text-center ml-[10px]"${_scopeId4}>${ssrInterpolate(record.ppl + "%")}</div></div>`);
                                      } else {
                                        return [
                                          createVNode("div", { class: "flex items-center" }, [
                                            (openBlock(), createBlock(_component_zs_proportion, {
                                              width: record.ppl,
                                              background: "#7C92FF",
                                              class: "flex-1",
                                              key: record.ppl
                                            }, null, 8, ["width"])),
                                            createVNode("div", { class: "w-[50px] text-center ml-[10px]" }, toDisplayString(record.ppl + "%"), 1)
                                          ])
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent4, _scopeId3));
                                  _push4(`</div>`);
                                } else {
                                  _push4(`<!---->`);
                                }
                              } else {
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("div", {
                                      class: "flex-1 cursor-pointer",
                                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`, {
                                        open: {
                                          target: "_blank"
                                        }
                                      })
                                    }, [
                                      createVNode("div", { class: "text-[16px] text-[#333333] mb-[10px] font-[500]" }, toDisplayString(major.zymc), 1),
                                      createVNode("div", { class: "mt-[10px]" }, [
                                        createVNode(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                          split: withCtx(() => [
                                            createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                              createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                              createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ], 8, ["onClick"]),
                                    createVNode("div", {
                                      class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                                      onClick: ($event) => clickCollapsed(major)
                                    }, [
                                      createTextVNode(" \u9662\u6821\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.yxsum, "0")) + "\u4E2A", 1),
                                      createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                    ], 8, ["onClick"])
                                  ]),
                                  major.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("div", { class: "bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]" }, [
                                      unref(form).gkms === "3+3" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createVNode("span", null, "\u9009\u62E9\u79D1\u76EE\uFF1A"),
                                        createVNode(_component_a_checkbox_group, {
                                          max: 3,
                                          modelValue: unref(curMajorMatchSchoolForm).subjectList,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).subjectList = $event,
                                          options: unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6),
                                          onChange: ($event) => changeSubject()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                      ], 64)) : createCommentVNode("", true),
                                      unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createVNode("div", null, [
                                          createVNode("span", null, "\u9996\u9009\u79D1\u76EE\uFF1A"),
                                          createVNode(_component_a_checkbox_group, {
                                            max: 1,
                                            modelValue: unref(curMajorMatchSchoolForm).firstSubjectList,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).firstSubjectList = $event,
                                            options: "FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS),
                                            onChange: ($event) => changeSubject()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                        ]),
                                        createVNode("div", { class: "mt-[5px]" }, [
                                          createVNode("span", null, "\u6B21\u9009\u79D1\u76EE\uFF1A"),
                                          createVNode(_component_a_checkbox_group, {
                                            max: 2,
                                            modelValue: unref(curMajorMatchSchoolForm).secondSubjectList,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).secondSubjectList = $event,
                                            options: "SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS),
                                            onChange: ($event) => changeSubject()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                        ])
                                      ], 64)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", null, [
                                      createTextVNode(" \u5171 "),
                                      createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                        (_c2 = unref(form).curMajorMatchSchoolInfo) == null ? void 0 : _c2.schoolCount,
                                        "0"
                                      )) + "\u3011", 1),
                                      createTextVNode("\u6240\u9662\u6821\u5F00\u8BBE"),
                                      createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                        (_d = unref(form).curMajorMatchSchoolInfo) == null ? void 0 : _d.majorCount,
                                        "0"
                                      )) + "\u3011", 1),
                                      createTextVNode("\u4E2A\u4E13\u4E1A ")
                                    ]),
                                    createVNode(_component_a_table, {
                                      class: "mt-[20px] cursor-pointer",
                                      "table-layout-fixed": "",
                                      columns: createMajorTableColumns(),
                                      data: unref(form).curMajorMatchSchoolInfo.list,
                                      loading: unref(matchSchoolLoading),
                                      bordered: { wrapper: true, cell: true },
                                      "page-position": "bottom"
                                    }, {
                                      xk: withCtx(({ record }) => [
                                        createVNode("div", null, [
                                          createVNode("span", null, [
                                            createVNode("i", {
                                              class: ["iconfont", record.oneData.icon],
                                              style: { color: record.oneData.color }
                                            }, null, 6),
                                            createVNode("span", null, toDisplayString(record.oneData.label), 1)
                                          ]),
                                          createVNode("span", { class: "mx-[5px]" }, "+"),
                                          createVNode("span", null, [
                                            createVNode("i", {
                                              class: ["iconfont", record.twoData.icon],
                                              style: { color: record.twoData.color }
                                            }, null, 6),
                                            createVNode("span", null, toDisplayString(record.twoData.label), 1)
                                          ]),
                                          createVNode("span", { class: "mx-[5px]" }, "+"),
                                          createVNode("span", null, [
                                            createVNode("i", {
                                              class: ["iconfont", record.threeData.icon],
                                              style: { color: record.threeData.color }
                                            }, null, 6),
                                            createVNode("span", null, toDisplayString(record.threeData.label), 1)
                                          ])
                                        ])
                                      ]),
                                      schoolCountByxk: withCtx(({ record }) => [
                                        createVNode("div", {
                                          class: "text-[#FFA864]",
                                          onClick: ($event) => record.schoolCountByxk ? setSelectRow(
                                            { ...major, ...record },
                                            () => unref(setActiveKey)(
                                              "ZsSubjectCurXkMajorMatchCollege"
                                            )
                                          ) : ""
                                        }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.schoolCountByxk, "\u4E2A")), 9, ["onClick"])
                                      ]),
                                      majorCountByxk: withCtx(({ record }) => [
                                        createVNode("div", { class: "text-[#FFA864]" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.majorCountByxk, "\u4E2A")), 1)
                                      ]),
                                      ppl: withCtx(({ record }) => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          (openBlock(), createBlock(_component_zs_proportion, {
                                            width: record.ppl,
                                            background: "#7C92FF",
                                            class: "flex-1",
                                            key: record.ppl
                                          }, null, 8, ["width"])),
                                          createVNode("div", { class: "w-[50px] text-center ml-[10px]" }, toDisplayString(record.ppl + "%"), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["columns", "data", "loading"])
                                  ])) : createCommentVNode("", true)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent3, _scopeId2));
                        });
                        _push3(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(middle == null ? void 0 : middle.childs, (major, majorIndex) => {
                            return openBlock(), createBlock(_component_a_list_item, {
                              key: major.id,
                              class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
                            }, {
                              default: withCtx(() => {
                                var _a4, _b3;
                                return [
                                  createVNode("div", { class: "flex items-center justify-between" }, [
                                    createVNode("div", {
                                      class: "flex-1 cursor-pointer",
                                      onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`, {
                                        open: {
                                          target: "_blank"
                                        }
                                      })
                                    }, [
                                      createVNode("div", { class: "text-[16px] text-[#333333] mb-[10px] font-[500]" }, toDisplayString(major.zymc), 1),
                                      createVNode("div", { class: "mt-[10px]" }, [
                                        createVNode(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                          split: withCtx(() => [
                                            createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                          ]),
                                          default: withCtx(() => [
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                            createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                              createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                              createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                            ])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ])
                                    ], 8, ["onClick"]),
                                    createVNode("div", {
                                      class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                                      onClick: ($event) => clickCollapsed(major)
                                    }, [
                                      createTextVNode(" \u9662\u6821\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.yxsum, "0")) + "\u4E2A", 1),
                                      createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                    ], 8, ["onClick"])
                                  ]),
                                  major.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                    createVNode("div", { class: "bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]" }, [
                                      unref(form).gkms === "3+3" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                        createVNode("span", null, "\u9009\u62E9\u79D1\u76EE\uFF1A"),
                                        createVNode(_component_a_checkbox_group, {
                                          max: 3,
                                          modelValue: unref(curMajorMatchSchoolForm).subjectList,
                                          "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).subjectList = $event,
                                          options: unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6),
                                          onChange: ($event) => changeSubject()
                                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                      ], 64)) : createCommentVNode("", true),
                                      unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                        createVNode("div", null, [
                                          createVNode("span", null, "\u9996\u9009\u79D1\u76EE\uFF1A"),
                                          createVNode(_component_a_checkbox_group, {
                                            max: 1,
                                            modelValue: unref(curMajorMatchSchoolForm).firstSubjectList,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).firstSubjectList = $event,
                                            options: "FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS),
                                            onChange: ($event) => changeSubject()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                        ]),
                                        createVNode("div", { class: "mt-[5px]" }, [
                                          createVNode("span", null, "\u6B21\u9009\u79D1\u76EE\uFF1A"),
                                          createVNode(_component_a_checkbox_group, {
                                            max: 2,
                                            modelValue: unref(curMajorMatchSchoolForm).secondSubjectList,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).secondSubjectList = $event,
                                            options: "SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS),
                                            onChange: ($event) => changeSubject()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                        ])
                                      ], 64)) : createCommentVNode("", true)
                                    ]),
                                    createVNode("div", null, [
                                      createTextVNode(" \u5171 "),
                                      createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                        (_a4 = unref(form).curMajorMatchSchoolInfo) == null ? void 0 : _a4.schoolCount,
                                        "0"
                                      )) + "\u3011", 1),
                                      createTextVNode("\u6240\u9662\u6821\u5F00\u8BBE"),
                                      createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                        (_b3 = unref(form).curMajorMatchSchoolInfo) == null ? void 0 : _b3.majorCount,
                                        "0"
                                      )) + "\u3011", 1),
                                      createTextVNode("\u4E2A\u4E13\u4E1A ")
                                    ]),
                                    createVNode(_component_a_table, {
                                      class: "mt-[20px] cursor-pointer",
                                      "table-layout-fixed": "",
                                      columns: createMajorTableColumns(),
                                      data: unref(form).curMajorMatchSchoolInfo.list,
                                      loading: unref(matchSchoolLoading),
                                      bordered: { wrapper: true, cell: true },
                                      "page-position": "bottom"
                                    }, {
                                      xk: withCtx(({ record }) => [
                                        createVNode("div", null, [
                                          createVNode("span", null, [
                                            createVNode("i", {
                                              class: ["iconfont", record.oneData.icon],
                                              style: { color: record.oneData.color }
                                            }, null, 6),
                                            createVNode("span", null, toDisplayString(record.oneData.label), 1)
                                          ]),
                                          createVNode("span", { class: "mx-[5px]" }, "+"),
                                          createVNode("span", null, [
                                            createVNode("i", {
                                              class: ["iconfont", record.twoData.icon],
                                              style: { color: record.twoData.color }
                                            }, null, 6),
                                            createVNode("span", null, toDisplayString(record.twoData.label), 1)
                                          ]),
                                          createVNode("span", { class: "mx-[5px]" }, "+"),
                                          createVNode("span", null, [
                                            createVNode("i", {
                                              class: ["iconfont", record.threeData.icon],
                                              style: { color: record.threeData.color }
                                            }, null, 6),
                                            createVNode("span", null, toDisplayString(record.threeData.label), 1)
                                          ])
                                        ])
                                      ]),
                                      schoolCountByxk: withCtx(({ record }) => [
                                        createVNode("div", {
                                          class: "text-[#FFA864]",
                                          onClick: ($event) => record.schoolCountByxk ? setSelectRow(
                                            { ...major, ...record },
                                            () => unref(setActiveKey)(
                                              "ZsSubjectCurXkMajorMatchCollege"
                                            )
                                          ) : ""
                                        }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.schoolCountByxk, "\u4E2A")), 9, ["onClick"])
                                      ]),
                                      majorCountByxk: withCtx(({ record }) => [
                                        createVNode("div", { class: "text-[#FFA864]" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.majorCountByxk, "\u4E2A")), 1)
                                      ]),
                                      ppl: withCtx(({ record }) => [
                                        createVNode("div", { class: "flex items-center" }, [
                                          (openBlock(), createBlock(_component_zs_proportion, {
                                            width: record.ppl,
                                            background: "#7C92FF",
                                            class: "flex-1",
                                            key: record.ppl
                                          }, null, 8, ["width"])),
                                          createVNode("div", { class: "w-[50px] text-center ml-[10px]" }, toDisplayString(record.ppl + "%"), 1)
                                        ])
                                      ]),
                                      _: 2
                                    }, 1032, ["columns", "data", "loading"])
                                  ])) : createCommentVNode("", true)
                                ];
                              }),
                              _: 2
                            }, 1024);
                          }), 128))
                        ];
                      }
                    }),
                    _: 2
                  }, _parent2, _scopeId));
                  _push2(`</div>`);
                });
                _push2(`<!--]--></div>`);
              });
              _push2(`<!--]-->`);
              _push2(ssrRenderComponent(_component_a_pagination, {
                class: "justify-end mt-[20px]",
                total: unref(majorPagination).total,
                current: unref(majorPagination).current,
                "page-size": unref(majorPagination).pageSize,
                onChange: unref(majorOnPageChange),
                onPageSizeChange: unref(majorOnPageSizeChange),
                "show-total": "",
                "show-jumper": "",
                "show-page-size": ""
              }, null, _parent2, _scopeId));
              _push2(`<!--]-->`);
            } else {
              _push2(`<div${_scopeId}>`);
              _push2(ssrRenderComponent(_component_zs_no_data_small, null, null, _parent2, _scopeId));
              _push2(`</div>`);
            }
          } else {
            return [
              ((_b2 = unref(majorList)) == null ? void 0 : _b2.length) ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                (openBlock(true), createBlock(Fragment, null, renderList(unref(majorList), (category, categoryIndex) => {
                  return openBlock(), createBlock("div", { key: categoryIndex }, [
                    createVNode("div", { class: "flex items-center m-[20px_0px_10px]" }, [
                      createVNode("div", { class: "rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]" }),
                      createVNode("div", { class: "ml-[10px] text-[18px] text-[#333] font-bold" }, toDisplayString(category.xkml), 1)
                    ]),
                    (openBlock(true), createBlock(Fragment, null, renderList(category == null ? void 0 : category.childs, (middle, middleIndex) => {
                      return openBlock(), createBlock("div", { key: middleIndex }, [
                        createVNode("div", { class: "text-[#FFA864] font-bold" }, toDisplayString(middle.zyl), 1),
                        createVNode(_component_a_list, {
                          bordered: false,
                          class: "mt-[10px]"
                        }, {
                          empty: withCtx(() => [
                            createVNode(_component_zs_no_data_small)
                          ]),
                          default: withCtx(() => [
                            (openBlock(true), createBlock(Fragment, null, renderList(middle == null ? void 0 : middle.childs, (major, majorIndex) => {
                              return openBlock(), createBlock(_component_a_list_item, {
                                key: major.id,
                                class: "border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
                              }, {
                                default: withCtx(() => {
                                  var _a4, _b3;
                                  return [
                                    createVNode("div", { class: "flex items-center justify-between" }, [
                                      createVNode("div", {
                                        class: "flex-1 cursor-pointer",
                                        onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))(`/major/${major.id}`, {
                                          open: {
                                            target: "_blank"
                                          }
                                        })
                                      }, [
                                        createVNode("div", { class: "text-[16px] text-[#333333] mb-[10px] font-[500]" }, toDisplayString(major.zymc), 1),
                                        createVNode("div", { class: "mt-[10px]" }, [
                                          createVNode(_component_a_space, { class: "flex flex-wrap items-center text-[#999]" }, {
                                            split: withCtx(() => [
                                              createVNode("span", { class: "w-[2px] h-[8px] text-[#999]" }, "|")
                                            ]),
                                            default: withCtx(() => [
                                              createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4E13\u4E1A\u4EE3\u7801\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.zydm)), 1),
                                              createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u4FEE\u4E1A\u5E74\u9650\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xyNx)), 1),
                                              createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u6388\u4E88\u5B66\u4F4D\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.syxw)), 1),
                                              createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, " \u7537\u5973\u6BD4\u4F8B\uFF1A" + toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(major.xbBl)), 1),
                                              createVNode("span", { class: "leading-[16px] rounded-[4px] p-[5px] mb-[4px]" }, [
                                                createTextVNode(" \u5E73\u5747\u85AA\u916C\uFF1A"),
                                                createVNode("span", { class: "text-price" }, toDisplayString(("textFormat" in _ctx ? _ctx.textFormat : unref(textFormat))(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major.pjxz))), 1)
                                              ])
                                            ]),
                                            _: 2
                                          }, 1024)
                                        ])
                                      ], 8, ["onClick"]),
                                      createVNode("div", {
                                        class: "w-[150px] text-[#FFA864] text-right cursor-pointer",
                                        onClick: ($event) => clickCollapsed(major)
                                      }, [
                                        createTextVNode(" \u9662\u6821\u5339\u914D\uFF1A" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(major == null ? void 0 : major.yxsum, "0")) + "\u4E2A", 1),
                                        createVNode("i", { class: "iconfont icon-xiala text-[#FFA864] ml-[3px]" })
                                      ], 8, ["onClick"])
                                    ]),
                                    major.collapsed ? (openBlock(), createBlock("div", { key: 0 }, [
                                      createVNode("div", { class: "bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]" }, [
                                        unref(form).gkms === "3+3" ? (openBlock(), createBlock(Fragment, { key: 0 }, [
                                          createVNode("span", null, "\u9009\u62E9\u79D1\u76EE\uFF1A"),
                                          createVNode(_component_a_checkbox_group, {
                                            max: 3,
                                            modelValue: unref(curMajorMatchSchoolForm).subjectList,
                                            "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).subjectList = $event,
                                            options: unref(form).province === "\u6D59\u6C5F" ? "SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS) : ("SUBJECT_OPTIONS" in _ctx ? _ctx.SUBJECT_OPTIONS : unref(SUBJECT_OPTIONS)).slice(0, 6),
                                            onChange: ($event) => changeSubject()
                                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                        ], 64)) : createCommentVNode("", true),
                                        unref(form).gkms === "3+1+2" ? (openBlock(), createBlock(Fragment, { key: 1 }, [
                                          createVNode("div", null, [
                                            createVNode("span", null, "\u9996\u9009\u79D1\u76EE\uFF1A"),
                                            createVNode(_component_a_checkbox_group, {
                                              max: 1,
                                              modelValue: unref(curMajorMatchSchoolForm).firstSubjectList,
                                              "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).firstSubjectList = $event,
                                              options: "FIRST_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.FIRST_CHOICE_SCIENCES_OPTIONS : unref(FIRST_CHOICE_SCIENCES_OPTIONS),
                                              onChange: ($event) => changeSubject()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                          ]),
                                          createVNode("div", { class: "mt-[5px]" }, [
                                            createVNode("span", null, "\u6B21\u9009\u79D1\u76EE\uFF1A"),
                                            createVNode(_component_a_checkbox_group, {
                                              max: 2,
                                              modelValue: unref(curMajorMatchSchoolForm).secondSubjectList,
                                              "onUpdate:modelValue": ($event) => unref(curMajorMatchSchoolForm).secondSubjectList = $event,
                                              options: "SECOND_CHOICE_SCIENCES_OPTIONS" in _ctx ? _ctx.SECOND_CHOICE_SCIENCES_OPTIONS : unref(SECOND_CHOICE_SCIENCES_OPTIONS),
                                              onChange: ($event) => changeSubject()
                                            }, null, 8, ["modelValue", "onUpdate:modelValue", "options", "onChange"])
                                          ])
                                        ], 64)) : createCommentVNode("", true)
                                      ]),
                                      createVNode("div", null, [
                                        createTextVNode(" \u5171 "),
                                        createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                          (_a4 = unref(form).curMajorMatchSchoolInfo) == null ? void 0 : _a4.schoolCount,
                                          "0"
                                        )) + "\u3011", 1),
                                        createTextVNode("\u6240\u9662\u6821\u5F00\u8BBE"),
                                        createVNode("span", { class: "text-[#FFA864]" }, "\u3010" + toDisplayString(("turnThousandth" in _ctx ? _ctx.turnThousandth : unref(turnThousandth))(
                                          (_b3 = unref(form).curMajorMatchSchoolInfo) == null ? void 0 : _b3.majorCount,
                                          "0"
                                        )) + "\u3011", 1),
                                        createTextVNode("\u4E2A\u4E13\u4E1A ")
                                      ]),
                                      createVNode(_component_a_table, {
                                        class: "mt-[20px] cursor-pointer",
                                        "table-layout-fixed": "",
                                        columns: createMajorTableColumns(),
                                        data: unref(form).curMajorMatchSchoolInfo.list,
                                        loading: unref(matchSchoolLoading),
                                        bordered: { wrapper: true, cell: true },
                                        "page-position": "bottom"
                                      }, {
                                        xk: withCtx(({ record }) => [
                                          createVNode("div", null, [
                                            createVNode("span", null, [
                                              createVNode("i", {
                                                class: ["iconfont", record.oneData.icon],
                                                style: { color: record.oneData.color }
                                              }, null, 6),
                                              createVNode("span", null, toDisplayString(record.oneData.label), 1)
                                            ]),
                                            createVNode("span", { class: "mx-[5px]" }, "+"),
                                            createVNode("span", null, [
                                              createVNode("i", {
                                                class: ["iconfont", record.twoData.icon],
                                                style: { color: record.twoData.color }
                                              }, null, 6),
                                              createVNode("span", null, toDisplayString(record.twoData.label), 1)
                                            ]),
                                            createVNode("span", { class: "mx-[5px]" }, "+"),
                                            createVNode("span", null, [
                                              createVNode("i", {
                                                class: ["iconfont", record.threeData.icon],
                                                style: { color: record.threeData.color }
                                              }, null, 6),
                                              createVNode("span", null, toDisplayString(record.threeData.label), 1)
                                            ])
                                          ])
                                        ]),
                                        schoolCountByxk: withCtx(({ record }) => [
                                          createVNode("div", {
                                            class: "text-[#FFA864]",
                                            onClick: ($event) => record.schoolCountByxk ? setSelectRow(
                                              { ...major, ...record },
                                              () => unref(setActiveKey)(
                                                "ZsSubjectCurXkMajorMatchCollege"
                                              )
                                            ) : ""
                                          }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.schoolCountByxk, "\u4E2A")), 9, ["onClick"])
                                        ]),
                                        majorCountByxk: withCtx(({ record }) => [
                                          createVNode("div", { class: "text-[#FFA864]" }, toDisplayString(("textCompany" in _ctx ? _ctx.textCompany : unref(textCompany))(record.majorCountByxk, "\u4E2A")), 1)
                                        ]),
                                        ppl: withCtx(({ record }) => [
                                          createVNode("div", { class: "flex items-center" }, [
                                            (openBlock(), createBlock(_component_zs_proportion, {
                                              width: record.ppl,
                                              background: "#7C92FF",
                                              class: "flex-1",
                                              key: record.ppl
                                            }, null, 8, ["width"])),
                                            createVNode("div", { class: "w-[50px] text-center ml-[10px]" }, toDisplayString(record.ppl + "%"), 1)
                                          ])
                                        ]),
                                        _: 2
                                      }, 1032, ["columns", "data", "loading"])
                                    ])) : createCommentVNode("", true)
                                  ];
                                }),
                                _: 2
                              }, 1024);
                            }), 128))
                          ]),
                          _: 2
                        }, 1024)
                      ]);
                    }), 128))
                  ]);
                }), 128)),
                createVNode(_component_a_pagination, {
                  class: "justify-end mt-[20px]",
                  total: unref(majorPagination).total,
                  current: unref(majorPagination).current,
                  "page-size": unref(majorPagination).pageSize,
                  onChange: unref(majorOnPageChange),
                  onPageSizeChange: unref(majorOnPageSizeChange),
                  "show-total": "",
                  "show-jumper": "",
                  "show-page-size": ""
                }, null, 8, ["total", "current", "page-size", "onChange", "onPageSizeChange"])
              ], 64)) : (openBlock(), createBlock("div", { key: 1 }, [
                createVNode(_component_zs_no_data_small)
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(activeKey) === "ZsSubjectCurXkMajorMatchCollege") {
        _push(ssrRenderComponent(_component_zs_subject_cur_xk_major_match_college, {
          data: unref(form).selectRow,
          onCancel: ($event) => setSelectRow({}, () => unref(setActiveKey)(null))
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/zsSubjectMajorCheck/index.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "subject",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "\u65B0\u9AD8\u8003\u9009\u79D1"
    });
    const { userInfo } = useUser();
    const { form } = useForm(() => ({
      tabRadio: "\u9009\u79D1\u67E5\u9662\u6821/\u67E5\u4E13\u4E1A",
      tabRadioList: ["\u9009\u79D1\u67E5\u9662\u6821/\u67E5\u4E13\u4E1A", "\u5927\u5B66\u67E5\u9009\u79D1", "\u4E13\u4E1A\u67E5\u9009\u79D1"]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_a_radio_group = RadioGroup;
      const _component_a_radio = Radio;
      const _component_zs_subject_check_all = __nuxt_component_2;
      const _component_zs_subject_college_check = __nuxt_component_3;
      const _component_zs_subject_major_check = _sfc_main$1;
      const _component_a_button = Button;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-7f32e40a><div class="max-w-container mx-auto" data-v-7f32e40a>`);
      _push(ssrRenderComponent(_component_a_radio_group, {
        modelValue: unref(form).tabRadio,
        "onUpdate:modelValue": ($event) => unref(form).tabRadio = $event,
        class: "my-[10px]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(unref(form).tabRadioList, (tab) => {
              _push2(ssrRenderComponent(_component_a_radio, { value: tab }, {
                radio: withCtx(({ checked }, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`<div class="${ssrRenderClass([{ "bg-[#7C92FF] radio-checked text-white": checked }, "text-center p-[8px_10px] bg-[#F2F5FF] text-[#7C92FF] rounded-[40px]"])}" data-v-7f32e40a${_scopeId2}>${ssrInterpolate(tab)}</div>`);
                  } else {
                    return [
                      createVNode("div", {
                        class: ["text-center p-[8px_10px] bg-[#F2F5FF] text-[#7C92FF] rounded-[40px]", { "bg-[#7C92FF] radio-checked text-white": checked }]
                      }, toDisplayString(tab), 3)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(unref(form).tabRadioList, (tab) => {
                return openBlock(), createBlock(_component_a_radio, {
                  key: tab,
                  value: tab
                }, {
                  radio: withCtx(({ checked }) => [
                    createVNode("div", {
                      class: ["text-center p-[8px_10px] bg-[#F2F5FF] text-[#7C92FF] rounded-[40px]", { "bg-[#7C92FF] radio-checked text-white": checked }]
                    }, toDisplayString(tab), 3)
                  ]),
                  _: 2
                }, 1032, ["value"]);
              }), 128))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="border-solid border border-[#EDEDED]" data-v-7f32e40a></div>`);
      if (unref(userInfo).score) {
        _push(`<div class="max-w-container mx-auto" data-v-7f32e40a>`);
        if (unref(form).tabRadio === "\u9009\u79D1\u67E5\u9662\u6821/\u67E5\u4E13\u4E1A") {
          _push(`<div data-v-7f32e40a>`);
          _push(ssrRenderComponent(_component_zs_subject_check_all, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).tabRadio === "\u5927\u5B66\u67E5\u9009\u79D1") {
          _push(`<div data-v-7f32e40a>`);
          _push(ssrRenderComponent(_component_zs_subject_college_check, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(form).tabRadio === "\u4E13\u4E1A\u67E5\u9009\u79D1") {
          _push(`<div data-v-7f32e40a>`);
          _push(ssrRenderComponent(_component_zs_subject_major_check, null, null, _parent));
          _push(`</div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<div class="flex items-center justify-center flex-col min-h-[60vh]" data-v-7f32e40a><h1 class="font-bold" data-v-7f32e40a>\u5B8C\u5584\u4FE1\u606F\u540E\uFF0C\u5C0A\u4EAB\u9009\u79D1\u7279\u6743</h1>`);
        _push(ssrRenderComponent(_component_a_button, {
          type: "primary",
          onClick: ($event) => unref(userInfo).userInfoModal = true
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`\u5B8C\u5584\u4FE1\u606F`);
            } else {
              return [
                createTextVNode("\u5B8C\u5584\u4FE1\u606F")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/subject.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const subject = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7f32e40a"]]);

export { subject as default };
//# sourceMappingURL=subject-17e86266.mjs.map
