export const API_URLS = {
	LOGIN: {
		WX: '/pr/web/v5/wx/getQRCode', // 微信登录
		WX_STATUS: '/pr/web/v5/wx/getLoginStatus', // 微信扫码登录状态
		PHONE: '/pr/web/v5/websiteUser/login', // 手机登录
		PHONE_CODE: '/pr/web/v5/websiteUser/sendCheckCode', // 手机验证码
		REGISTER: '/pr/web/v5/websiteUser/addUserByPhone', // 注册
		CHANGE_PASSWORD: '/pr/web/v5/websiteUser/resetPassword', // 找回密码
	},
};
