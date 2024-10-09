interface WebsiteConfig {
	id: string;
	loginModal: boolean;
	provinceModel: boolean;
}

interface Dictionary {
	detailCode: string;
	detailName: string;
	typeCode: string;
}

export default () => {
	// 全局
	const { $zsFetch } = useNuxtApp();
	// 网站信息
	const websiteConfig = useState<WebsiteConfig>('websiteConfig', () => ({
		id: '',
		loginModal: false, // 登录注册模态框
		provinceModel: false, // 选择省份模态框
	}));
	// 网站轮播图信息
	const swiperData = useState<Array<any>>('swiperData', () => []);
	// 字典查询
	const dictionariesMap = useState<Map<string, Array<Dictionary>>>(
		'dictionariesData',
		() => new Map([])
	);
	// 获取网站信息
	const getWebsiteConfig = async () => {
		const [err, res] = await $zsFetch('/api/v1/website/web/homePage/queryAboutUsInfo', {
			method: 'POST',
		});
		// 处理错误
		if (err) return;
		// 请求成功后
		websiteConfig.value = {
			...websiteConfig.value,
			...res.data,
		};
	};
	// 获取轮播信息
	const getSwiperData = async () => {
		// const [err, res] = await $zsFetch('/api/v1/website/web/homePage/queryCarouselPictures', {
		// 	method: 'POST',
		// });
		// // 处理错误
		// if (err) return;
		// 请求成功后
		swiperData.value = [
			{
				filePath:
					'https://c1.kuiban.cn/institution/948619269623/20221023/image/9d9328b7469b62dfd5d3cc3a8db67d69.jpg',
				url: 'http://www.sdcsts.com',
			},
			{
				filePath:
					'https://c1.kuiban.cn/institution/948619269623/20221023/image/92937908544baabbee48a423d07b7b81.jpg',
				url: 'http://www.sdcsts.com',
			},
			{
				filePath:
					'https://c1.kuiban.cn/institution/948619269623/20221023/image/e097b1471f12ed079a1fbabdcc5d781b.jpg',
				url: 'http://www.sdcsts.com',
			},
		];
	};
	// 查询字典
	const getDictionariesData = async () => {
		const [err, res] = await $zsFetch('/api/v1/website/web/news/getDictSelect', {
			method: 'POST',
			body: {
				typeCodeArray: ['newstype', 'travelType'],
			},
		});
		// 处理错误
		if (err) return;
		// 请求成功后
		// 循环添加map数据
		res?.data.forEach((item: Dictionary) => {
			if (dictionariesMap.value.has(item.typeCode)) {
				dictionariesMap.value.set(item.typeCode, [
					...dictionariesMap.value.get(item.typeCode)!,
					item,
				]);
			} else {
				dictionariesMap.value.set(item.typeCode, [item]);
			}
		});
	};
	// 初始化
	const initWebsiteInformationData = async () => {
		return await Promise.all([getWebsiteConfig(), getSwiperData(), getDictionariesData()]);
	};
	// 返回接口
	return {
		websiteConfig,
		swiperData,
		dictionariesMap,
		getWebsiteConfig,
		initWebsiteInformationData,
	};
};
