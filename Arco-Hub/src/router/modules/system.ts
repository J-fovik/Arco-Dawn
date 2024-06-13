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
			path: 'userManage',
			name: 'SystemUserManage',
			meta: {
				requiresAuth: true,
				title: '用户管理',
			},
			component: () => import('@/views/system/userManage/index.vue'),
		},
		{
			path: 'userManage/operate',
			name: 'SystemUserOperate',
			meta: {
				requiresAuth: true,
				title: '用户维护',
				superiorName: 'SystemUserManage',
			},
			component: () => import('@/views/system/userManage/operate/index.vue'),
		},
		{
			path: 'dictionaryManage',
			name: 'SystemDictionaryManage',
			meta: {
				requiresAuth: true,
				title: '字典管理',
			},
			component: () => import('@/views/system/dictionaryManage/index.vue'),
		},
		{
			path: 'dictionaryManage/operate',
			name: 'SystemDictionaryOperate',
			meta: {
				requiresAuth: true,
				title: '字典管理维护',
				superiorName: 'SystemDictionaryManage',
			},
			component: () => import('@/views/system/dictionaryManage/operate/index.vue'),
		},
	],
};
