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
	// 批量禁用用户
	batchDisableUser: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_DISABLE,
			data,
		}),
	// 密码重置
	batchResetPassword: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.USER_PASSWORD_RESET,
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
	// 获取角色列表
	getRoleList: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.ROLE_LIST,
			data,
		}),
	// 批量删除角色
	batchDeleteRole: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.ROLE_DELETE,
			data,
		}),
	// 角色新增
	addRole: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.ROLE_ADD,
			data,
		}),
	// 角色新增
	editRole: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.ROLE_EDIT,
			data,
		}),
	// 角色权限获取
	getRoleKeyList: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.ROLE_KEY_LIST,
			data,
		}),
	// 角色权限修改
	editRoleKey: (data: any) =>
		request({
			method: 'post',
			url: URL.SYSTEM.ROLE_KEY_EDIT,
			data,
		}),
};
