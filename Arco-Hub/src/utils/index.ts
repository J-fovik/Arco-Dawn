import dayjs from 'dayjs';
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
// 解决浮点数bug
export const roundNum = (num: number, decimalPlaces: number = 2) => {
	const factor = 10 ** decimalPlaces;
	return Math.round(num * factor) / factor;
};
// 解析身份证信息
export const resolveIdNumberInfo = (idCard: string) => {
	const birthday = formatDate(idCard.substring(6, 14), 'YYYY-MM-DD');
	const gender = (idCard.substring(16, 17) as any) % 2 === 0 ? '0' : '1';
	return { birthday, gender };
};
// 时间转换
export const turnDateTime = (value: string, empty = '-') => {
	if (value) {
		if (value.length <= 8) {
			return `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(6, 8)}`;
		} else {
			return `${value.substring(0, 4)}-${value.substring(4, 6)}-${value.substring(
				6,
				8
			)} ${value.substring(8, 10)}:${value.substring(10, 12)}:${value.substring(12, 14)}`;
		}
	}
	return empty;
};
// 日期格式转换
export const formatDate = (value: any, format = 'YYYYMMDD', empty = '-') => {
	if (value) {
		return dayjs(value).format(format);
	}
	return empty;
};
// 获取过去时间
export const getPastTime = (num: number, unit: dayjs.ManipulateType, format = 'YYYY-MM-DD') => {
	return dayjs().subtract(num, unit).format(format);
};
// 数字千分位
export const turnThousandth = (value: any, empty = '-') => {
	if (value) {
		const values = value.toString().split('.');
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
export const filterText = (value: any, empty = '-') => (value ? value : empty);
/**
 * @description 根据name数组,对路由数组进行递归过滤
 * @param {Array} routes 菜单列表
 * @param {Array} nameList name数组
 * @returns {Array} 递归过滤后的name所在的对象 组成的新数组
 */
export function reduceRoutes(routes: Array<any>, nameList: any): Array<any> {
	return routes.reduce((menus, next) => {
		// 判断是否存在子菜单
		const menuChildren = next.children
			? next.children.filter((child: any) => nameList?.includes(child.name))
			: [];
		// 判断是否存在子菜单
		if (menuChildren.length) {
			menus.push({ ...next, children: menuChildren });
		}
		// 判断一级菜单是否显示
		const isMenu = nameList?.includes(next.name);
		// 判断一级菜单是否显示 并且不存在子菜单
		if (isMenu && !menuChildren.length) {
			menus.push({ ...next, children: null });
		}
		return menus;
	}, []);
}
