import request from '@/service/request';
import URL from '@/service/url';

export default {
	// 用户登录
	login: (data: any) =>
		request({
			method: 'post',
			url: URL.USER.LOGIN,
			data,
		}),
	// 获取用户信息
	getUserInfo: () =>
		request({
			method: 'post',
			url: URL.USER.INFO,
			timeout: 5000,
		}),
	// // 获取用户菜单
	// getUserMenuList: (data: any) =>
	// 	request({
	// 		method: 'post',
	// 		url: URL.USER.USER_MENU_LIST,
	// 		data,
	// 	}),
	// // 用户角色权限获取
	// getRoleKeyList: (data: any) =>
	// 	request({
	// 		method: 'post',
	// 		url: URL.USER.ROLE_KEY_LIST,
	// 		data,
	// 	}),
};
