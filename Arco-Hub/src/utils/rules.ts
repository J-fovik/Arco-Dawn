// 手机号验证
export const phoneRule = (value: string) => {
	return value && /^1[3-9][0-9]{9}$/.test(value);
};
// 固定电话
export function checkTel(tel: string) {
	return /^((d{3,4})|d{3,4}-|s)?d{5,14}$/.test(tel)
}
// 邮箱验证
export const emailRule = (value: string) => {
	return value && /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value);
};
// 数字验证
export const numberRule = (value: string) => {
	return value && /^[-]?\d+$/.test(value);
};
// 英文验证
export const englishRule = (value: string) => {
	return value && /^[a-zA-Z]+$/.test(value);
};
// 网址格式验证
export const websiteRule = (value: string) => {
	return (
		value &&
		/(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(
			value
		)
	);
};
// 正整数验证
export const positiveIntegerRule = (value: string): boolean => {
	// 首先，确保输入不是空字符串
	if (!value) {
		return false;
	}

	// 使用正则表达式来检查输入是否为正整数
	const isPositiveInteger = /^\d+$/.test(value);

	// 如果输入是正整数，进一步检查它是否在1到10000之间
	if (isPositiveInteger) {
		const numberValue = parseInt(value, 10);
		if (numberValue > 0 && numberValue <= 1000) {
			return true;
		}
	}

	// 如果输入不是正整数或不在指定范围内，返回false
	return false;
};

