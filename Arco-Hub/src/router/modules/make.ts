export default {
	path: 'make',
	name: 'Make',
	meta: {
		requiresAuth: true,
		icon: 'icon-layers',
		order: 4,
		title: '组件',
	},
	children: [
		{
			path: 'iconSelector',
			name: 'MakeIconSelector',
			meta: {
				requiresAuth: true,
				title: '图标选择器',
			},
			component: () => import('@/views/make/iconSelector/index.vue'),
		},
	],
};
