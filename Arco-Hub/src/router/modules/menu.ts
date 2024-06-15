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
			path: 'pageOne',
			name: 'MenuPageOne',
			meta: {
				requiresAuth: true,
				title: '表格菜单(一)',
			},
			component: () => import('@/views/menu/pageOne/index.vue'),
		},
		{
			path: 'pageTwo',
			name: 'MenuPageTwo',
			meta: {
				requiresAuth: true,
				title: '表格菜单(二)',
			},
			component: () => import('@/views/menu/pageTwo/index.vue'),
		},
		{
			path: 'pageTwo/operate',
			name: 'MenuPageTwoOperate',
			meta: {
				requiresAuth: true,
				title: '表格菜单(二)维护',
				superiorName: 'MenuPageTwo', // 对应上级name
			},
			component: () => import('@/views/menu/pageTwo/operate/index.vue'),
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
	],
};
