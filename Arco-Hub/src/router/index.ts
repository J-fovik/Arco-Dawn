import nProgress from 'nprogress';
import jsCookie from 'js-cookie';
import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore, useTabStore } from '@/pinia';
import { appRoutes } from './base';
import PageLogin from '@/views/login/index.vue';
import PageLayout from '@/views/index.vue';

nProgress.configure({ showSpinner: false }); // 显示右上角螺旋加载提示

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			name: 'Layout',
			redirect: '/home',
			component: PageLayout,
			meta: {
				requiresAuth: true,
			},
			children: appRoutes,
		},
		{
			path: '/login',
			name: 'Login',
			component: PageLogin,
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/404',
			name: 'Error404',
			component: () => import('@/views/exception/404/index.vue'),
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/403',
			name: 'Error403',
			component: () => import('@/views/exception/403/index.vue'),
			meta: {
				requiresAuth: false,
			},
		},
		{
			path: '/:pathMatch(.*)*',
			redirect: '/404',
		},
	],
});
// 路由跳转拦截
router.beforeEach(async (to) => {
	nProgress.start();
	// 设置页面标题
	document.title = to.meta.title ? 'Arco ' + to.meta.title : 'Arco 管理后台';
	// 查询用户信息
	const userStore = useUserStore();
	// 是否需要认证
	if (to.meta.requiresAuth) {
		// 不存在用户信息时
		if (!userStore.userInfo.userId) {
			// 用户cookie
			const userToken = jsCookie.get('userToken');
			// 判断token
			if (userToken) {
				// 判断是否可以获取到用户信息
				const isLogin = await userStore.initUserInfo();
				// 业务判断 路由拦截
				if (!isLogin)
					return {
						path: '/login',
						query: { redirect: to.fullPath },
					};
			} else {
				return {
					path: '/login',
					query: { redirect: to.fullPath },
				};
			}
		}
		// if (
		// 	userStore.userInfo.loginName !== 'admin' &&
		// 	!userStore.userInfo.roleList?.includes(to.name as string)
		// ) {
		// 	// 详情页面不做权限处理;
		// 	if (!to.meta.superiorName) {
		// 		return {
		// 			path: '/403',
		// 			query: { redirect: to.fullPath },
		// 		};
		// 	}
		// }
	}
	return true;
});
// 路由加载后
router.afterEach((to) => {
	// 标签管理
	const tabStore = useTabStore();
	// 添加标签
	tabStore.addTab(to);
	// 关闭进度条
	nProgress.done();
});

export default router;
