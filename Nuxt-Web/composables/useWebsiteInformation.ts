export default () => {
	// 请求插件
	const { $zsFetch, $zsMsg } = useNuxtApp();
	// 网站轮播图信息
	const swiperData = useState<Array<any>>('swiperData', () => []);
	// 省市区编码信息数组
	const provinceCityList = useState<Array<any>>('provinceCity', () => []);
	// 高考省份
	const provinceList = useState<Array<any>>('provinceList', () => []);
	// 字典查询
	const dictionariesMap = useState<Map<string, any[]>>('dictionariesData', () => new Map([]));
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
	// 获取省市区（带编码）
	const getProvincesCity = async () => {
		const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_PROVINCE_CITIES, {
			method: 'GET',
		});
		// 处理错误
		if (err) return;
		provinceCityList.value =
			res.data.map((o: any) => {
				return {
					...o,
					value: o.code,
					label: o.name,
				};
			}) ?? [];
	};
	// 获取高考省份
	const getProvinceList = async () => {
		const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_GK_PROVINCE, {
			method: 'GET',
		});
		// 处理错误
		if (err) return;
		provinceList.value = res.data
			? res.data.map((o: any) => {
					return {
						...o,
						value: o.sf,
						label: o.sf,
					};
			  })
			: [];
	};
	// 查询字典
	const getDictionariesData = async () => {
		const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_DICTIONARIES_LIST, {
			method: 'POST',
			body: {},
		});
		// 处理错误
		if (err) return;
		// 请求成功后
		// 循环添加map数据
		res.data
			.sort((a: any, b: any) => a.sort - b.sort)
			.forEach((item: any) => {
				// 在每个对象中添加value属性
				item.value = item.code;
				item.label = item.codeName;
				if (dictionariesMap.value.has(item.codeType)) {
					dictionariesMap.value.set(item.codeType, [
						...dictionariesMap.value.get(item.codeType)!,
						item,
					]);
				} else {
					dictionariesMap.value.set(item.codeType, [item]);
				}
			});
	};
	// 获取字典值
	const getDictionValue = (type: string) => {
		// 确保dictionariesMap.value不是undefined，然后使用get方法获取key为"YXLX"的values
		if (dictionariesMap.value) {
			const values = dictionariesMap.value.get(type);
			// 如果找到了值，返回它；否则，处理未找到的情况
			return values || [];
		} else {
			return []; // 返回一个空数组
		}
	};
	// 初始化
	const initWebsiteInformationData = async () => {
		return await Promise.all([
			getSwiperData(),
			getProvincesCity(),
			getProvinceList(),
			getDictionariesData(),
		]);
	};
	// 返回接口
	return {
		swiperData,
		provinceCityList,
		provinceList,
		dictionariesMap,
		getSwiperData,
		getProvincesCity,
		getProvinceList,
		getDictionariesData,
		getDictionValue,
		initWebsiteInformationData,
	};
};
