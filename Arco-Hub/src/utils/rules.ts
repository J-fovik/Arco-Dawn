// 手机号验证
export const phoneRule = (value: string) => {
	return value && /^1[3-9][0-9]{9}$/.test(value);
};
// 座机验证
export const landlinePhoneRule = (value: string) => {
	return value && /^(0[1-9]\d{1,2}-?)?\d{7,8}$/.test(value);
};
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
// 固定电话验证
export const fixedLineTelephoneRule = (value: string) => {
	return value && /^((\d2,3)|(\d{3}\-))?(0\d2,3|0\d{2,3}-)?[1-9]\d{6,7}(\-\d{1,4})?$/.test(value);
};
// 传真号码验证
export const facsimileRule = (value: string) => {
	return value && /^(?:\d{3,4}-)?\d{7,8}(?:-\d{1,6})?$/.test(value);
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
// 全特殊字符验证
export const specialCharactersRule = (value: string) => {
	return (
		value &&
		/[`~!@#$%^&*()_\-+=<>?:"{}|,.\/;'\\[\]·~！@#￥%……&*（）——\-+={}|《》？：“”【】、；‘’，。、]/.test(
			value
		)
	);
};
// 字母数字组合验证
export const alphanumericRule = (value: string) => {
	return value && /^[0-9a-zA-Z]*$/.test(value);
};
// 字母汉字组合验证
export const alphabetChineseCharactersRule = (value: string) => {
	return value && /^[a-zA-Z\u4e00-\u9fa5]+$/.test(value);
};
// 汉字验证
export const chineseCharacterRule = (value: string) => {
	return value && /[^\u4E00-\u9FA5]/.test(value);
};
// 身份证验证
export const identityCardRule = (value: string) => {
	return (
		value &&
		(/^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$/.test(value) ||
			/^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(
				value
			))
	);
};
// 营业执照验证
export const businessLicenseCardRule = (value: string) => {
	return (
		value &&
		/(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/.test(value)
	);
};
// 银行卡验证
export const bankCardRule = (value: string) => {
	return value && /^([1-9]{1})(\d{14}|\d{18})$/.test(value);
};
// 港澳通信证验证
export const hongKongAndMacauCommunicationCertificateRule = (value: string) => {
	return value && /^([A-Z]\d{6,10}(\(\w{1}\))?)$/.test(value);
};
// 护照验证
export const passportCardRule = (value: string) => {
	return value && /^([a-zA-z]|[0-9]){5,17}$/.test(value);
};
// 军官证验证
export const officerCardRule = (value: string) => {
	return value && /^[\u4E00-\u9FA5](字第)([0-9a-zA-Z]{4,8})(号?)$/.test(value);
};
// 赴台证
export const goTaiWanCardRule = (value: string) => {
	return value && (/^[0-9]{8}$/.test(value) || /^[0-9]{10}$/.test(value));
};
// 台胞证  compatriots
export const taiWanCompatriotsCardRule = (value: string) => {
	return value && /\d{10}\(B\)/.test(value);
};
