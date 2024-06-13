export default {
	path: 'home',
	name: 'Home',
	meta: {
		requiresAuth: true,
		icon: 'icon-bytedance-color',
		order: 0,
		title: '首页',
	},
	component: () => import('@/views/home/index.vue'),
};
