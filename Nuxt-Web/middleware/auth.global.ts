// 服务端&客户端路由拦截
export default defineNuxtRouteMiddleware(async (to, from) => {
	// 用户信息
	const { userInfo, determineLogin } = useUser();
	// 全局插件
	const { $zsFetch, $zsMsg } = useNuxtApp();
	// 判断是否鉴权
	if (to.meta.requiresAuth) {
		// 用户cookie
		const userTokenCookie = useCookie('token');
		// 没有登录信息及凭证
		if (!userTokenCookie.value) {
			// 客户端
			if (import.meta.client) {
				// 判断登录
				determineLogin();
			}
			return navigateTo(from?.meta?.requiresAuth ? '/' : from.fullPath);
		} else {
			// 客户端
			if (import.meta.client) {
				// 判断登录
				determineLogin(() => navigateTo(to.fullPath));
			}
		}
	} else {
		// 客户端
		if (import.meta.client) {
			// 登录后未完善信息
			if (userInfo.value.phone && !userInfo.value.score) {
				// 提示完善信息！
				// $zsMsg('waring', '请完善信息！');
				userInfo.value.userInfoModal = true;
				return;
			}
			navigateTo(to.fullPath);
		}
	}
});
