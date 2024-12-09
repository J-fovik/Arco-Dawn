const SUBJECT_OPTIONS = [
  {
    label: "\u7269\u7406",
    value: "\u7269",
    icon: "icon-wuli",
    color: "#7C92FF"
  },
  {
    label: "\u5316\u5B66",
    value: "\u5316",
    icon: "icon-huaxue",
    color: "#5AB9FF"
  },
  {
    label: "\u751F\u7269",
    value: "\u751F",
    icon: "icon-shengwu",
    color: "#FFA864"
  },
  {
    label: "\u5386\u53F2",
    value: "\u53F2",
    icon: "icon-lishi",
    color: "#7C92FF"
  },
  {
    label: "\u653F\u6CBB",
    value: "\u653F",
    icon: "icon-zhengzhi",
    color: "#FFA864"
  },
  {
    label: "\u5730\u7406",
    value: "\u5730",
    icon: "icon-dili",
    color: "#5AB9FF"
  },
  {
    label: "\u6280\u672F",
    value: "\u6280",
    icon: "icon-jishu",
    color: "#5AB9FF"
  }
];
const FIRST_CHOICE_SCIENCES_OPTIONS = [
  {
    label: "\u7269\u7406",
    value: "\u7269"
  },
  {
    label: "\u5386\u53F2",
    value: "\u53F2"
  }
];
const SECOND_CHOICE_SCIENCES_OPTIONS = [
  {
    label: "\u5316\u5B66",
    value: "\u5316"
  },
  {
    label: "\u751F\u7269",
    value: "\u751F"
  },
  {
    label: "\u653F\u6CBB",
    value: "\u653F"
  },
  {
    label: "\u5730\u7406",
    value: "\u5730"
  }
];
const ALL_OPTIONS = [
  {
    label: "\u5168\u90E8",
    value: ""
  }
];
const NO_LIMIT_OPTIONS = [
  {
    label: "\u4E0D\u9650",
    value: ""
  }
];
const NO_LIMIT_NULL_OPTIONS = [
  {
    label: "\u4E0D\u9650",
    value: null
  }
];
const GK_DATE_OPTIONS = () => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return [
    currentYear + 1,
    currentYear + 2,
    currentYear + 3,
    currentYear + 4,
    currentYear + 5
  ].map((o) => {
    return {
      value: String(o),
      label: String(o)
    };
  });
};
const routeMenuList = [
  {
    name: "\u67E5\u5927\u5B66",
    path: "/college"
  },
  {
    name: "\u67E5\u4E13\u4E1A",
    path: "/major"
  },
  {
    name: "\u751F\u6DAF\u6D4B\u8BC4",
    path: "/evaluate"
  },
  {
    name: "\u65B0\u9AD8\u8003\u9009\u79D1",
    path: "/subject"
  },
  {
    name: "\u667A\u80FD\u586B\u62A5",
    path: "/choice"
  }
  // {
  // 	name: '升学规划',
  // 	path: '/plan',
  // },
];
const findOptions = (options, value) => {
  return options.find((item) => item.value == value);
};

export { ALL_OPTIONS as A, FIRST_CHOICE_SCIENCES_OPTIONS as F, GK_DATE_OPTIONS as G, NO_LIMIT_OPTIONS as N, SECOND_CHOICE_SCIENCES_OPTIONS as S, NO_LIMIT_NULL_OPTIONS as a, SUBJECT_OPTIONS as b, findOptions as f, routeMenuList as r };
//# sourceMappingURL=options-7ec13930.mjs.map
