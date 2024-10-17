export default (
	callBack?: () => void,
	options = {
		defaultCurrent: 1
	}
) => {
	// 分页控制
	const pagination = ref({
		total: 1,
		current: options.defaultCurrent,
		pageSize: 10,
		showTotal: true,
		showPageSize: true,
	});
	// 分页切换
	const onPageChange = (current: number) => {
		pagination.value.current = current;
		// 回调获取数据
		callBack && callBack();
	};
	const onPageSizeChange = (size: number) => {
		pagination.value.current = 1;
		pagination.value.pageSize = size;
		// 回调获取数据
		callBack && callBack();
	};
	// 暴露API
	return { pagination, onPageChange, onPageSizeChange };
};
