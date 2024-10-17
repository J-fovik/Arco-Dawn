export default <T = any>(
	api: () => Promise<Array<any>>,
	config = { defaultValue: {} as any, isInit: true }
) => {
	// 商品信息
	const data = ref<T>(config?.defaultValue ?? {});
	// loading
	const [loading, setLoading] = useBasicsState(false);
	// 初始化
	const initData = async () => {
		// loading
		setLoading(true);
		// 获取数据
		const res: any = await api();
		// 设置商品信息
		data.value = res;
		// loading
		setLoading(false);
	};
	// 初始化
	if (config?.isInit) {
		initData();
	}
	// 暴露API
	return { data, initData, loading };
};
