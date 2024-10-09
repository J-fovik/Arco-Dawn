type Dispatch<A> = (value: A) => void;

export default <T>(
	value: T, // 默认值
	callback?: Dispatch<T> // 回调
): [any, Dispatch<T>] => {
	// 默认值
	const basicsState = ref<T>(value);
	// 修改默认值
	const setBasicsState = (newValue: T) => {
		// 判断修改结果不等于上一次
		if (basicsState.value !== newValue) {
			// 修改值
			basicsState.value = newValue as any;
			// 存在后调事件调用
			if (callback) callback(newValue);
		}
	};
	// 暴露API
	return [basicsState, setBasicsState];
};
