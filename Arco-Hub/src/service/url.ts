export default {
	// 用户
	USER: {
		LOGIN: '/api/v1/admin/login', // 用户登录
		LOGIN_CODE: '/api/v1/admin/createValidateCode', // 登录验证码
		INFO: '/api/v1/admin/user/getUserInfo', // 用户信息
		USER_MENU_LIST: '/api/v1/admin/menu/getRoleMenuList', // 获取用户菜单
		ROLE_KEY_LIST: '/api/v1/admin/rolePower/getRolePowerList', // 角色权限获取
	},
	// 公共
	PUBLIC: {
		DICTIONARY: '/api/v1/admin/user/getDictSelect', // 查询字典
	},
	// 系统管理
	SYSTEM: {
		USER_LIST: '/api/v1/admin/user/getUserList', // 用户列表
		USER_ADD: '/api/v1/admin/user/addUser', // 添加用户
		USER_EDIT: '/api/v1/admin/user/updateUser', // 更新用户信息
		USER_DELETE: '/api/v1/admin/user/deleteUser', // 用户删除
		USER_DISABLE: '/api/v1/admin/user/cancelUpd', //用户禁用
		USER_LOGOUT: '/api/v1/admin/user/updCancel', // 用户注销
		USER_DETAIL: '/api/v1/admin/user/getUserInfoById', // 用户详情
		USER_PASSWORD_RESET: '/api/v1/admin/user/resetPassWord', // 用户密码重置
		ROLE_SELECT: '/api/v1/admin/user/getRoleSelect', // 角色选择
		ROLE_LIST: '/api/v1/admin/role/getRoleList', // 角色列表
		DEPARTMENT_LIST: '/api/v1/admin/user/getDepartSelect', // 部门列表

		DICTIONARY_LIST: '/api/v1/admin/dataDict/dictList', // 字典列表
		DICTIONARY_DETAIL: '/api/v1/admin/dataDict/dictDetail', // 字典详情
		DICTIONARY_ADD: '/api/v1/admin/dataDict/addDict', // 添加字典
		DICTIONARY_EDIT: '/api/v1/admin/dataDict/updateDict', // 修改字典
		DICTIONARY_DELETE: '/api/v1/admin/dataDict/delDict', // 删除字典
	},
};
