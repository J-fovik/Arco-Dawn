import dayjs from 'dayjs';

// 等待指定时间
export const sleep = (millisecond: number): Promise<any> =>
	new Promise((resolve) => setTimeout(resolve, millisecond));
// 文本格式化
export const textFormat = (value: any, empty = '-') => (value ? value : empty);
// 文本格式化
export const textCompany = (value: any, company: string, empty = '-') => {
	return value == '0' ? empty : value ? value + company : empty;
};
// 日期格式转换
export const formatDate = (value: string | Date | number, format = 'YYYYMMDD', empty = '') => {
	if (value) {
		return dayjs(value).format(format);
	}
	return empty;
};
// 时间转换
export const turnDateTime = (value: string, empty = '-') => {
	if (value) {
		if (value.length <= 4) {
			return `${value.substring(0, 2)}:${value.substring(2, 4)}`;
		}
		if (value.length <= 8) {
			return `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(6, 8)}`;
		}
		return `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(
			6,
			8
		)} ${value.substring(8, 10)}:${value.substring(10, 12)}:${value.substring(12, 14)}`;
	}
	return empty;
};
// 解决浮点数bug
export const roundNum = (num: number, decimalPlaces: number = 2) => {
	const factor = 10 ** decimalPlaces;
	return Math.round(num * factor) / factor;
};
// download二进制文件
export const downloadBlob = (res: any, name?: string) => {
	const blob = new Blob([res], {
		type: 'text/plain;charset=utf-8',
	});
	// // 判断下载内容是不是空的
	// if (blob.size === 0) {
	// 	return false;
	// }
	const downloadElement = document.createElement('a'); //创建一个a 虚拟标签
	const href = window.URL.createObjectURL(blob); // 创建下载的链接
	downloadElement.href = href;
	downloadElement.download = decodeURI(name?.replace(/%/g, '%25') ?? ''); // 下载后文件名
	document.body.appendChild(downloadElement);
	downloadElement.click(); // 点击下载
	document.body.removeChild(downloadElement); // 下载完成移除元素
	window.URL.revokeObjectURL(href);
};
// 数字千分位
export const turnThousandth = (value: any, empty = '-') => {
	if (![undefined, null].includes(value)) {
		const values = `${value}`.split('.');
		values[0] = values[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
		return values.join('.');
	}
	return empty;
};
// 数字转换ToFixed2
export const turnNumberToFixed2 = (num: string | number | undefined, empty = '-') => {
	if (!num) return empty;
	return parseFloat(num as string).toFixed(2);
};
// 数组内对象value转number
export const turnArrayKeys = (list: Array<any>, numberKeys: Array<string> = []) => {
	return list.map((item) => {
		// 指定key转数字
		if (numberKeys.length) {
			numberKeys.forEach((key) => {
				if (item[key] !== undefined) {
					item[key] = item[key] * 1;
				}
			});
		}
		return item;
	});
};
// 获取默认年份
export const getGkYear = () => {
	// 获取当前日期
	const now = dayjs();
	// 以9月1日位 分界日期
	const boundaryDate = dayjs().month(8).date(1);
	// 比较当前日期是否大于分界日期
	if (now.isAfter(boundaryDate)) {
		// 当前日期大于分界日期，展示明年
		return now.add(1, 'year').year().toString();
	} else {
		// 当前日期小于等于分界日期，展示今年
		return now.year().toString();
	}
};
/**
 * 手机号脱敏格式化
 * @param {string} phone 手机号码
 * @returns {string} 处理后的手机号码(155****8810)
 */
export function hidePhoneFormat(phone: string) {
	return phone && phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
}
/**
 * 根据key重组数组
 * @param {Array} array 要处理的数组
 * @param {string} groupByKey  用于分组的键 （yxmc）
 * @param {string} childName  要存储的数组key的名称 （children）
 * @param {string} mergeChildKey  要存储在子数组的键 （zySeq）
 * @returns {Array} 重组后的数组
 * @example
 * groupByAndMergeChildArrays([{yxmc: 'A', zySeq: 1 },{yxmc: 'B', zySeq: 2 },{ yxmc: 'A', zySeq: 3 }]) // [{yxmc: 'A', children:[1, 3]},{yxmc: 'B', children: [2] }]
 */
export const groupByAndMergeChildArrays = (
	array: Array<any>,
	groupByKey: any,
	childName: any,
	mergeChildKey: any
) => {
	return array.reduce((acc, cur) => {
		// 检查 acc 数组中是否已经存在相同 groupByKey 的项
		const existingItem: any = acc.find((item: any) => item[groupByKey] === cur[groupByKey]);
		if (existingItem) {
			// 如果存在，将 cur[mergeChildKey] 添加到 existingItem.child 数组中
			existingItem[childName].push(cur[mergeChildKey]);
		} else {
			// 如果不存在，创建一个新的项并加入 acc 数组
			acc.push({
				...cur,
				[childName]: [cur[mergeChildKey]],
			});
		}
		return acc;
	}, []);
};
