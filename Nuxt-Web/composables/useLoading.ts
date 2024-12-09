export default () => {
	// 全局控制
	const { userInfo } = useUser();
	// 添加类型弹窗
	const setGlobalLoading = (loading: boolean, content = '正在加载') => {
		if (userInfo.value.loading !== loading) {
			userInfo.value.loadingContent = content;
			userInfo.value.loading = loading;
		}
	};
	return { setGlobalLoading };
};
