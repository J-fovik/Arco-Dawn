export default <T = any>(api: () => Promise<any>, defaultValue = {} as T) => {
	// 信息
	const data = ref<T>(defaultValue);
	// loading
	const [loading, setLoading] = useBasicsState(false);
	// 初始化
	const initData = async () => {
		// loading
		setLoading(true);
		// 获取数据
		const res: any = await api();
		// 设置信息
		data.value = res;
		// loading
		setLoading(false);
	};
	initData();
	// 暴露API
	return { data, initData, loading };
};
