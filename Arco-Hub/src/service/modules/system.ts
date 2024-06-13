import request from '@/service/request';
import URL from '@/service/url';

export default {
	// 获取用户列表
	getUserList: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_LIST,
			data,
		}),
	// 批量删除用户
	batchDeleteUser: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_DELETE,
			data,
		}),
	// 批量注销用户
	batchLogoutUser: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_LOGOUT,
			data,
		}),
	// 批量重置密码
	batchResetPassword: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_PASSWORD_RESET,
			data,
		}),
	// 获取用户详情
	getUserDetail: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_DETAIL,
			data,
		}),
	// 用户新增
	addUser: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_ADD,
			data,
		}),
	// 用户修改
	editUser: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_EDIT,
			data,
		}),
	// 根据供应商选择角色
	getSupplierRole: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.ROLE_SELECT,
			data,
		}),
	// 获取角色列表
	getRoleList: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.ROLE_LIST,
			data,
		}),
	// 部门列表
	getDepartmentList: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.DEPARTMENT_LIST,
			data,
		}),
	// 字典列表查询
	getDictionaryList: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.DICTIONARY_LIST,
			data,
		}),
	// 字典详细明细
	getDictionaryDetail: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.DICTIONARY_DETAIL,
			data,
		}),
	// 添加字典
	addDictionary: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.DICTIONARY_ADD,
			data,
		}),
	// 修改字典
	editDictionary: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.DICTIONARY_EDIT,
			data,
		}),
	// 删除字典
	deleteDictionary: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.DICTIONARY_DELETE,
			data,
		}),
};
