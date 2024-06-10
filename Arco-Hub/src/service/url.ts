export default {
	USER: {
		LOGIN: '/api/v1/admin/login', // 用户登录
		INFO: '/api/v1/admin/user/getUserInfo', // 用户信息
		PASSWORD_EDIT: '/api/v1/admin/user/changePassWord', // 修改密码
		USER_EDIT: '/api/v1/admin/user/loginUserUpd', // 用户修改
		CHANGE_TOKEN: '/api/v1/admin/refreshGaoBaoToken',
	},
	// 系统管理
	SYSTEM: {
		USER_LIST: '/api/v1/admin/user/queryList', // 用户列表
		USER_ADD: '/api/v1/admin/user/add', // 添加用户
		USER_EDIT: '/api/v1/admin/user/update', // 更新用户信息
		USER_DELETE: '/api/v1/admin/user/delete', // 用户删除
		USER_DISABLE: '/api/v1/admin/user/cancelUpd', //用户禁用
		USER_PASSWORD_RESET: '/api/v1/admin/user/resetPassWord', // 用户密码重置
		ROLE_LIST: '/api/v1/admin/role/queryList', // 角色列表
		ROLE_DELETE: '/api/v1/admin/role/delete', // 角色删除
		ROLE_ADD: '/api/v1/admin/role/add', // 角色添加
		ROLE_EDIT: '/api/v1/admin/role/update', // 角色修改
		ROLE_KEY_LIST: '/api/v1/admin/rolePower/queryList', // 角色权限获取
		ROLE_KEY_EDIT: '/api/v1/admin/rolePower/update', // 角色权限更新
	},
};
