export default (defaultValue = [] as Array<string>) => {
	const basicsSet = ref<Set<string>>(new Set(defaultValue));
	// 检查是否存在某个值
	const hasValue = (key: string) => {
		return basicsSet.value.has(key);
	};
	// 添加某个值
	const addValue = (key: string) => {
		if (!hasValue(key)) basicsSet.value.add(key);
	};
	// 添加删除某个值
	const setValue = (key: string) => {
		if (hasValue(key)) {
			basicsSet.value.delete(key);
		} else {
			basicsSet.value.add(key);
		}
	};
	// 删除某个值
	const deleteValue = (key: string) => {
		if (hasValue(key)) basicsSet.value.delete(key);
	};
	// 清空
	const clearValue = () => {
		basicsSet.value.clear();
	};
	// 暴露API
	return { basicsSet, hasValue, setValue, addValue, deleteValue, clearValue };
};
