import { init } from 'console-ban';

export default defineNuxtPlugin((nuxtApp) => {
	// 监听生命周期
	nuxtApp.hook('vue:setup', () => {
		// 正式环境生效
		if (import.meta.env.MODE === 'production') {
			if (!nuxtApp._route.query.isDev && nuxtApp._route.query.devUser !== 'zs') {
				init({
					redirect: 'about:blank',
				});
			}
		}
	});
});
