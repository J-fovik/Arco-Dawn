import dayjs from 'dayjs';

export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function uuid() {
  const s: Array<any> = []
  const hexDigits = '0123456789abcdef'
  for (let i = 0; i < 36; i++) {
    s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
  }
  s[14] = '4' // bits 12-15 of the time_hi_and_version field to 0010
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1) // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-'
  const uuid = s.join('')
  return uuid
}
// 随机
export function randomString(length: number) {
  const str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''
  for (let i = length; i > 0; --i) {
    result += str[Math.floor(Math.random() * str.length)]
  }
  return result
}

/**
 * 中划线字符驼峰
 * @param {*} str 要转换的字符串
 * @returns 返回值
 */
export function toHump(str: string): string {
  if (!str) return str
  return str
    .replace(/\-(\w)/g, function (all, letter) {
      return letter.toUpperCase()
    })
    .replace(/(\s|^)[a-z]/g, function (char) {
      return char.toUpperCase()
    })
}

export function sortColumns(originColumns: any[], newColumns: any[]) {
  if (!originColumns || !newColumns) {
    return
  }
  if (newColumns.length === 0) {
    originColumns.length = 0
  } else {
    const selectionItem = originColumns.find((it) => it.type === 'selection')
    originColumns.length = 0
    if (selectionItem) {
      originColumns.push(selectionItem)
    }
    originColumns.push(...newColumns)
  }
}
// 获取现在时间
export function getNowDate() {
  const date = new Date()
  const sign2 = ':'
  const year = date.getFullYear() // 年
  let month: string | number = date.getMonth() + 1 // 月
  let day: string | number = date.getDate() // 日
  let hour: string | number = date.getHours() // 时
  let minutes: string | number = date.getMinutes() // 分
  let seconds: string | number = date.getSeconds() //秒
  const weekArr = ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期天']
  const week = weekArr[date.getDay()]
  // 给一位数的数据前面加 “0”
  if (month >= 1 && month <= 9) {
    month = '0' + month
  }
  if (day >= 0 && day <= 9) {
    day = '0' + day
  }
  if (hour >= 0 && hour <= 9) {
    hour = '0' + hour
  }
  if (minutes >= 0 && minutes <= 9) {
    minutes = '0' + minutes
  }
  if (seconds >= 0 && seconds <= 9) {
    seconds = '0' + seconds
  }
  return [year + '-' + month + '-' + day, hour + sign2 + minutes + sign2 + seconds, week]
}
// 过滤文本处理空数据
export const filterText = (value: any, empty = "-") => {
  if (value === null || value === undefined || value === "") {
    return empty;
  } else {
    return value;
  }
};
// 等待指定时间
export const sleep = (millisecond: number): Promise<any> =>
  new Promise((resolve) => setTimeout(resolve, millisecond));
// 添加弹窗标题
export const createModalTitle = (title: string, isEdit: boolean) =>
  `${isEdit ? '编辑' : '添加'}${title}`;
// download二进制文件
export const downloadBlob = (res: any, name?: string) => {
  const blob = new Blob([res], {
    type: 'text/plain;charset=utf-8',
  });
  const downloadElement = document.createElement('a'); //创建一个a 虚拟标签
  const href = window.URL.createObjectURL(blob); // 创建下载的链接
  downloadElement.href = href;
  downloadElement.download = decodeURI(name ?? ''); // 下载后文件名
  document.body.appendChild(downloadElement);
  downloadElement.click(); // 点击下载
  document.body.removeChild(downloadElement); // 下载完成移除元素
  window.URL.revokeObjectURL(href);
};
// 下载base64图片
export const downloadBase64Image = (base64String: string, name: string) => {
  const link = document.createElement('a');
  link.href = base64String;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  // 清理/移除创建的链接
  document.body.removeChild(link);
};
// 时间转换
export const turnDateTime = (value: string, empty = '-') => {
  if (value) {
    if (value.length <= 8) {
      return `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(6, 8)}`;
    } else {
      return `${value.substring(0, 4)}-${value.substring(
        4,
        6,
      )}-${value.substring(6, 8)} ${value.substring(8, 10)}:${value.substring(
        10,
        12,
      )}:${value.substring(12, 14)}`;
    }
  }
  return empty;
};
// 日期格式转换
export const formatDate = (value: string, format = 'YYYYMMDD', empty = '-') => {
  if (value) {
    return dayjs(value).format(format);
  }
  return empty;
};
// 数字千分位
export const turnThousandth = (value: any, empty = '-') => {
  if (value) {
    const values = value.split('.');
    values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return values.join('.');
  }
  return empty;
};
// 数字转换ToFixed2
export const turnNumberToFixed2 = (value: string | number | undefined, empty = '-') => {
  if (value) {
    return parseFloat(value as string).toFixed(2);
  }
  return empty;
};