import dayjs from 'dayjs';

// 等待指定时间
export const sleep = (millisecond: number): Promise<any> =>
	new Promise((resolve) => setTimeout(resolve, millisecond));
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
					item[key] = item[key] * 1 ?? 0;
				}
			});
		}
		return item;
	});
};
