import dayjs from 'dayjs';
import { Message } from '@arco-design/web-vue';

// 等待指定时间
export const sleep = (millisecond: number): Promise<any> =>
	new Promise((resolve) => setTimeout(resolve, millisecond));
// 添加弹窗标题
export const createModalTitle = (title: string, isEdit: boolean) =>
	`${isEdit ? '编辑' : '添加'}${title}`;
// download二进制文件
export const downloadBlob = (res: any, name?: string) => {
	const blob = new Blob([res], {
		type: 'text/plain;charset=utf-8;application/pdf',
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
// 时间转换
export const turnDateTime = (value: string, empty = '-') => {
	if (value) {
		if (value.length <= 8) {
			return `${value.substring(0, 4)}-
			${value.substring(4, 6)}-
			${value.substring(6, 8)}`;
		} else {
			return `${value.substring(0, 4)}-
			${value.substring(4, 6)}-
			${value.substring(6, 8)} ${value.substring(8, 10)}:
			${value.substring(10, 12)}:${value.substring(12, 14)}`;
		}
	}
	return empty;
};
// 日期格式转换
export const formatDate = (value: string, format: string, empty = '-') => {
	if (value) {
		return dayjs(value).format(format);
	}
	return empty;
};
// 数字千分位
export const turnThousandth = (value: any, empty = '0') => {
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
// 过滤文本处理空数据
export const filterText = (value: any, empty = '-') => {
	if (value === null || value === undefined || value === '') {
		return empty;
	} else {
		return value;
	}
};

/**
 * 调换顺序
 * @param arr 数组内容
 * @param index1  想要变动的该下标
 * @param index2  想要变成的下标
 * @returns 排好顺序的数组
 */
export function swapArray(arr: Array<any>, index1: any, index2: any) {
	arr[index1] = arr.splice(index2, 1, arr[index1])[0];
	return arr;
}
// 上移
export function useArrayMoveUp(arr: Array<any>, index: number) {
	if (index == 0) {
		Message.error('已经到最顶部了!!!');
		return arr;
	}
	swapArray(arr, index, index - 1);
}

// 下移
export function useArrayMoveDown(arr: Array<any>, index: number) {
	if (index >= arr.length - 1) {
		Message.error('已经到最底部了!!!');
		return arr;
	}
	swapArray(arr, index, index + 1);
}

/**
 * 置顶或置底
 * @param arr 数组内容
 * @param index  想要变动的该下标
 * @param type  top 为置顶，bottom 为置底
 * @returns 排好顺序的数组
 */
export function useArrayMove(arr: Array<any>, index: number, type?: 'top' | 'bottom') {
	// 下标大于等于数组长度 并且是置底
	if (index >= arr.length - 1 && type == 'bottom') {
		Message.error('已经到最底部了!!!');
		return arr;
		// 下标为0 并且不为 置底
	} else if (index == 0 && type !== 'bottom') {
		Message.error('已经到最顶部了!!!');
		return arr;
	}
	// 如果索引超出范围，不进行任何操作
	const [item] = arr.splice(index, 1); // 从数组中移除元素并获取它
	// 默认top
	if (type === 'bottom') {
		arr.push(item); // 将元素添加到数组的末尾
	} else {
		arr.unshift(item); // 将元素添加到数组的开头
	}
	return arr; // 返回更新后的数组
}
