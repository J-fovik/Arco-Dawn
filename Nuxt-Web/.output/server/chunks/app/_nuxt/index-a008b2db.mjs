import originDayjs from 'dayjs';

const sleep = (millisecond) => new Promise((resolve) => setTimeout(resolve, millisecond));
const textFormat = (value, empty = "-") => value ? value : empty;
const textCompany = (value, company, empty = "-") => {
  return value == "0" ? empty : value ? value + company : empty;
};
const formatDate = (value, format = "YYYYMMDD", empty = "") => {
  if (value) {
    return originDayjs(value).format(format);
  }
  return empty;
};
const downloadBlob = (res, name) => {
  var _a;
  const blob = new Blob([res], {
    type: "text/plain;charset=utf-8"
  });
  const downloadElement = document.createElement("a");
  const href = window.URL.createObjectURL(blob);
  downloadElement.href = href;
  downloadElement.download = decodeURI((_a = name == null ? void 0 : name.replace(/%/g, "%25")) != null ? _a : "");
  document.body.appendChild(downloadElement);
  downloadElement.click();
  document.body.removeChild(downloadElement);
  window.URL.revokeObjectURL(href);
};
const turnThousandth = (value, empty = "-") => {
  if (![void 0, null].includes(value)) {
    const values = `${value}`.split(".");
    values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return values.join(".");
  }
  return empty;
};
function hidePhoneFormat(phone) {
  return phone && phone.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}
const groupByAndMergeChildArrays = (array, groupByKey, childName, mergeChildKey) => {
  return array.reduce((acc, cur) => {
    const existingItem = acc.find((item) => item[groupByKey] === cur[groupByKey]);
    if (existingItem) {
      existingItem[childName].push(cur[mergeChildKey]);
    } else {
      acc.push({
        ...cur,
        [childName]: [cur[mergeChildKey]]
      });
    }
    return acc;
  }, []);
};

export { turnThousandth as a, textCompany as b, downloadBlob as d, formatDate as f, groupByAndMergeChildArrays as g, hidePhoneFormat as h, sleep as s, textFormat as t };
//# sourceMappingURL=index-a008b2db.mjs.map
