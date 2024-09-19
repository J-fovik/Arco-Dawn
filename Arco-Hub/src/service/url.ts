export default {
	// 用户
	USER: {
		LOGIN: '/api/v1/admin/login', // 用户登录(sl)
		LOGIN_CODE: '/api/v1/admin/createValidateCode', // 登录验证码(sl)
		INFO: '/api/v1/admin/user/getUserInfo', // 用户信息(sl)
		USER_MENU_LIST: '/api/v1/admin/menu/getRoleMenuList', // 获取用户菜单(sl)
		ROLE_KEY_LIST: '/api/v1/admin/rolePower/getRolePowerList', // 角色权限获取(sl)
		LOGIN_ONE: 'login', // 用户登录(pr)
	},
	// 公共
	PUBLIC: {
		DICTIONARY: '/api/v1/admin/user/getDictSelect', // 查询字典(sl)
		MESSAGE_LIST: '/api/v1/admin/homeSearch/queryMessage', // 消息列表(sl)
	},
	// 导出
	FILE: {
		CODE_EXPORT: '/back/business/code/codeExport', // 导出兑换码(pr)
		UPLOAD_IMG: '/back/business/article/uploadImg', // 文章上传图片(pr)
	},
	// 模拟不是真实接口
	TEST: {
		GET_LIST: '/api/list', // 模拟列表
		LIST_ADD: '/api/add', // 模拟新增
		LIST_EDIT: '/api/edit', // 模拟编辑
		LIST_DELETE: '/api/delete', // 模拟删除
		CHANGE_STATUS: '/api/change', // 模拟改变状态
		TYPE_LIST: '/api/typeList', // 模拟类型数组
		SEX_LIST: '/api/sexList', // 模拟性别数组
		GET_DETAIL: '/api/detail', // 模拟详情
	},
};
