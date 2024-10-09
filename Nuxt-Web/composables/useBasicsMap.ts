export default (defaultValue = [] as Array<[string, any]>) => {
	const basicsMap = ref<Map<string, any>>(new Map(defaultValue));
	// 检查是否存在某个值
	const hasValue = (key: string) => {
		return basicsMap.value.has(key)
	}
	// 添加某个值
	const addValue = (key: string, value: any) => {
		if (!hasValue(key)) basicsMap.value.set(key, value);
	}
	// 添加删除某个值
	const setValue = (key: string, value: any) => {
		if (hasValue(key)) {
			basicsMap.value.delete(key);
		} else {
			basicsMap.value.set(key, value);
		}
	}
	// 删除某个值
	const deleteValue = (key: string) => {
		if (hasValue(key)) basicsMap.value.delete(key);
	}
	// 清空
	const clearValue = () => {
		basicsMap.value.clear();
	}
	// 暴露API
	return { basicsMap, hasValue, setValue, addValue, deleteValue, clearValue }
}