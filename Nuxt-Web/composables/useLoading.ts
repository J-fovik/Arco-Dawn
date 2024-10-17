export default () => {
	// 全局控制
	const globalState = useGlobalState();
	// 添加类型弹窗
	const setGlobalLoading = (loading: boolean, content = '正在提交') => {
		if (globalState.value.loading !== loading) {
            globalState.value.loadingContent = content;
			globalState.value.loading = loading;
		}
	};
	return { setGlobalLoading };
};
