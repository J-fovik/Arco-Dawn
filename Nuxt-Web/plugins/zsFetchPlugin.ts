interface ZsFetchOption {
	baseURL?: string;
	timeout?: number;
	method?: 'POST' | 'GET';
	headers?: any;
	body?: any;
	responseType?: any;
}

export default defineNuxtPlugin((nuxtApp) => {
	return {
		provide: {
			zsFetch: async (url: string, options = {} as ZsFetchOption) => {
				// 请求
				try {
					const res: any = await $fetch(url, {
						baseURL: process.client
							? nuxtApp.$config.public.baseURL
							: nuxtApp.$config.public.serverURL,
						...options,
					});
					// 处理结果
					if (res.code === 0) {
						return [null, res];
					} else {
						return [res, null];
					}
				} catch (err: any) {
					return [err, null];
				}
			},
		},
	};
});
