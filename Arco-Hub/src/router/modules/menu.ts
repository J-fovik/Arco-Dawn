export default {
	path: 'menu',
	name: 'Menu',
	meta: {
		requiresAuth: true,
		icon: 'icon-code-sandbox',
		order: 2,
		title: '菜单',
	},
	children: [
		{
			path: 'proTableOne',
			name: 'MenuProTableOne',
			meta: {
				requiresAuth: true,
				title: '表格菜单(一)',
			},
			component: () => import('@/views/menu/proTableOne/index.vue'),
		},
		{
			path: 'proTableTwo',
			name: 'MenuProTableTwo',
			meta: {
				requiresAuth: true,
				title: '表格菜单(二)',
			},
			component: () => import('@/views/menu/proTableTwo/index.vue'),
		},
		{
			path: 'proTableTwo/operate',
			name: 'MenuProTableTwoOperate',
			meta: {
				requiresAuth: true,
				title: '表格菜单(二)维护',
				superiorName: 'MenuProTableTwo', // 对应上级name
			},
			component: () => import('@/views/menu/proTableTwo/operate/index.vue'),
		},
		{
			path: 'treeControl',
			name: 'MenuTreeControl',
			meta: {
				requiresAuth: true,
				title: '树形控件',
			},
			component: () => import('@/views/menu/treeControl/index.vue'),
		},
		{
			path: 'tableRules',
			name: 'MenuTableRules',
			meta: {
				requiresAuth: true,
				title: '表单表格验证',
			},
			component: () => import('@/views/menu/tableRules/index.vue'),
		},
		{
			path: 'roleMenu',
			name: 'MenuRoleMenu',
			meta: {
				requiresAuth: true,
				title: '角色权限分配',
			},
			component: () => import('@/views/menu/roleMenu/index.vue'),
		},
	],
};
