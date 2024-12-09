const SUBJECT_OPTIONS = [
  {
    label: "物理",
    value: "物",
    icon: "icon-wuli",
    color: "#7C92FF"
  },
  {
    label: "化学",
    value: "化",
    icon: "icon-huaxue",
    color: "#5AB9FF"
  },
  {
    label: "生物",
    value: "生",
    icon: "icon-shengwu",
    color: "#FFA864"
  },
  {
    label: "历史",
    value: "史",
    icon: "icon-lishi",
    color: "#7C92FF"
  },
  {
    label: "政治",
    value: "政",
    icon: "icon-zhengzhi",
    color: "#FFA864"
  },
  {
    label: "地理",
    value: "地",
    icon: "icon-dili",
    color: "#5AB9FF"
  },
  {
    label: "技术",
    value: "技",
    icon: "icon-jishu",
    color: "#5AB9FF"
  }
];
const FIRST_CHOICE_SCIENCES_OPTIONS = [
  {
    label: "物理",
    value: "物"
  },
  {
    label: "历史",
    value: "史"
  }
];
const SECOND_CHOICE_SCIENCES_OPTIONS = [
  {
    label: "化学",
    value: "化"
  },
  {
    label: "生物",
    value: "生"
  },
  {
    label: "政治",
    value: "政"
  },
  {
    label: "地理",
    value: "地"
  }
];
const ALL_OPTIONS = [
  {
    label: "全部",
    value: ""
  }
];
const NO_LIMIT_OPTIONS = [
  {
    label: "不限",
    value: ""
  }
];
const NO_LIMIT_NULL_OPTIONS = [
  {
    label: "不限",
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
    name: "查大学",
    path: "/college"
  },
  {
    name: "查专业",
    path: "/major"
  },
  {
    name: "生涯测评",
    path: "/evaluate"
  },
  {
    name: "新高考选科",
    path: "/subject"
  },
  {
    name: "智能填报",
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
export {
  ALL_OPTIONS as A,
  FIRST_CHOICE_SCIENCES_OPTIONS as F,
  GK_DATE_OPTIONS as G,
  NO_LIMIT_OPTIONS as N,
  SUBJECT_OPTIONS as S,
  SECOND_CHOICE_SCIENCES_OPTIONS as a,
  NO_LIMIT_NULL_OPTIONS as b,
  findOptions as f,
  routeMenuList as r
};
//# sourceMappingURL=options-7ec13930.js.map
