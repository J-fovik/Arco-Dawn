export default defineNuxtPlugin((nuxtApp) => {
	return {
		provide: {
			zsFetch: async (
				url: string,
				options = {} as ZsFetchOption,
				config = { isMsg: true }
			) => {
				// 请求
				try {
					const res: any = await $fetch(url, {
						baseURL: import.meta.client
							? (useRuntimeConfig().public.baseURL as string)
							: useRuntimeConfig().public.serverURL,
						timeout: options.timeout ?? 20 * 1000,
						method: 'POST',
						...options,
						onRequest(context) {
							context.options.headers = {
								...options.headers,
								token: useCookie('token').value ?? '',
							};
						},
					});
					// 处理流
					if (options.responseType === 'blob') {
						return [null, res];
					}
					// 处理普通结果
					if (res.code === 0) {
						return [null, res];
					} else {
						// 只在客户端显示
						if (import.meta.client) {
							if (config.isMsg) {
								(nuxtApp as any).$zsMsg('error', res.msg);
							}
						}
						return [res, null];
					}
				} catch (err: any) {
					// 只在客户端显示
					if (import.meta.client) {
						// 消息提示
						if (config.isMsg) {
							(nuxtApp as any).$zsMsg('error', err?.msg ?? '请求出错了');
						}
					}
					return [err, null];
				}
			},
		},
	};
});
