export default {
	path: 'system',
	name: 'System',
	meta: {
		requiresAuth: true,
		icon: 'icon-common',
		order: 1,
		title: '系统管理',
	},
	children: [
		{
			path: 'roleManage',
			name: 'SystemRoleManage',
			meta: {
				requiresAuth: true,
				title: '角色管理',
			},
			component: () => import('@/views/system/roleManage/index.vue'),
		},
		{
			path: 'userSetting',
			name: 'SystemUserSetting',
			meta: {
				requiresAuth: true,
				title: '个人信息',
			},
			component: () => import('@/views/system/userSetting/index.vue'),
		},
	],
};
