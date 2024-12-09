// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1, maximum-scale=1.0, user-scalable=0',
			titleTemplate: '毕业之家升学规划官网-高考免费志愿填报软件-AI人工智能报考',
			meta: [
				{
					name: 'keywords',
					content:
						'毕业之家，升学规划，高考志愿填报，新高考选科，免费预测大学，录取批次线，大学投档线，大学录取线，专业历年录取分，志愿填报机构，AI人工智能报考，高考志愿规划师，免费填报志愿软件，高考志愿填报助手AI，志愿填报入口，志愿填报方式，志愿填报时间，一分一段表；平行志愿',
				},
				{
					name: 'description',
					content:
						'毕业之家升学规划官网，免费为家长和同学提供高考志愿模拟填报，新高考选科，免费预测大学，查询各省批次线，全国各大学投档线以及各专业历年录取分，并配有AI人工智能助手24小时服务，是一款真正意义上的免费志愿填报软件，另外平台提供全程线上志愿填报辅助服务，专家一对一定制填报服务等。',
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
				baseURL: 'http://192.168.1.9:8010',
				serverURL: 'http://192.168.1.9:8010',
				// payURL: 'http://192.168.1.30:8008',
				payURL: 'https://www.biye.cc',
			},
		},
	},
	$production: {
		runtimeConfig: {
			public: {
				baseURL: 'https://www.biye.cc',
				serverURL: 'http://192.168.30.104:8010',
				payURL: 'https://www.biye.cc',
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
