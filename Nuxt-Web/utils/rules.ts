// 手机号验证
export const phoneRule = (value: string) => {
	return value && /^1[3-9][0-9]{9}$/.test(value);
};
// 邮箱验证
export const emailRule = (value: string) => {
	return value && /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(value);
};
// 数字验证
export const numberRule = (value: string) => {
	return value && /^[-]?\d+$/.test(value);
};
