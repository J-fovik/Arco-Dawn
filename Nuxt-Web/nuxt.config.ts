// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0',
			titleTemplate: '毕业之家升学规划',
			meta: [
				{
					name: 'keywords',
					content: '高考报名，填报',
				},
				{
					name: 'description',
					content: '',
				},
			],
			link: [
				{
					rel: 'stylesheet',
					href: '/images/icon.png',
				},
			],
		},
	},
	css: ['~/assets/main.css', '~/assets/iconfont.css'],
	$development: {
		runtimeConfig: {
			public: {
				baseURL: 'http://web.sdcsts.com',
				serverURL: 'http://web.sdcsts.com',
			},
		},
	},
	$production: {
		runtimeConfig: {
			public: {
				baseURL: 'http://web.sdcsts.com',
				serverURL: 'http://web.sdcsts.com', // http://172.19.253.170:8102
			},
		},
	},
	devtools: { enabled: false },
	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/image',
		'nuxt-swiper',
		'@nuxt/icon',
		'dayjs-nuxt',
		'arco-design-nuxt-module',
	],
	image: {
		inject: true,
		providers: {
			paperXie: {
				name: 'public',
				provider: '~/providers/public.ts',
			},
		},
		provider: 'public',
		format: ['webp', 'png', 'jpeg', 'jpg', 'avif', 'gif'],
	},
});
