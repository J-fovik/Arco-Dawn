// 可恢复初始的状态hooks
export default <T = any>(originalState: () => T, callback?: () => void) => {
	// 响应式的form
	const state = ref<T>(originalState());
	// formRef
	const stateRef = ref<any>();
	// 重置form
	const resetOriginalState = () => {
		state.value = originalState() as any;
		callback && callback();
	};
	// 暴露api
	return {
		state,
		stateRef,
		resetOriginalState,
	};
};
