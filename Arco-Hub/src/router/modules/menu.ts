export default {
	path: 'menu',
	name: 'menu',
	meta: {
		requiresAuth: true,
		icon: 'icon-star',
		order: 2,
		title: '菜单',
	},
	children: [
		{
			path: 'pageOne',
			name: 'MenuPageOne',
			meta: {
				requiresAuth: true,
				title: '菜单页面一',
			},
			component: () => import('@/views/menu/pageOne/index.vue'),
		},
		{
			path: 'pageTwo',
			name: 'MenuPageTwo',
			meta: {
				requiresAuth: true,
				title: '菜单页面二',
			},
			component: () => import('@/views/menu/pageTwo/index.vue'),
		},
		{
			path: 'pageTwo/operate',
			name: 'MenuPageTwoOperate',
			meta: {
				requiresAuth: true,
				title: '菜单页面二维护',
				superiorName: 'MenuPageTwo', // 对应上级name
			},
			component: () => import('@/views/menu/pageTwo/operate/index.vue'),
		},
	],
};
