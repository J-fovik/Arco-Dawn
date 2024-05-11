import { ref, shallowRef, watch } from 'vue';
import { useBasicsState } from '@/hooks/modules/useBase';

// 异步结果处理
export const useAsyncData = <T = Array<any>>(api: () => Promise<any>, defaultValue = [] as T) => {
	// 加载状态
	const [loading, setLoading] = useBasicsState(true);
	// 结果
	const data = ref<T>(defaultValue);
	// 刷新数据
	const initData = () => {
		if (loading.value === false) setLoading(true);
		api()
			.then((response) => {
				data.value = response;
			})
			.finally(() => {
				setLoading(false);
			});
	};
	// 数据初始化
	initData();
	// 暴露API
	return { data, loading, initData };
};

// 异步结果处理
export const useAsyncShallowData = <T = Array<any>>(
	api: () => Promise<any>,
	defaultValue = [] as T,
) => {
	// 加载状态
	const [loading, setLoading] = useBasicsState(true);
	// 结果
	const data = shallowRef<T>(defaultValue);
	// 刷新数据
	const initData = () => {
		if (loading.value === false) setLoading(true);
		api()
			.then((response) => {
				data.value = response;
			})
			.finally(() => {
				setLoading(false);
			});
	};
	// 数据初始化
	initData();
	// 暴露API
	return { data, loading, initData };
};

// 异步返回监听数据变化
export const useAsyncWatchShallowData = <T = Array<any>>(
	api: () => Promise<any>,
	{ watchSource, defaultValue = [] }: { watchSource: any; defaultValue: any },
) => {
	// 加载状态
	const [loading, setLoading] = useBasicsState(true);
	// 结果
	const data = shallowRef<T>(defaultValue);
	// 刷新数据
	const initData = () => {
		if (loading.value === false) setLoading(true);
		api()
			.then((response) => {
				data.value = response;
			})
			.finally(() => {
				setLoading(false);
			});
	};
	// 坚听数据变化
	watch(watchSource, (value) => {
		if (value) initData();
		else data.value = defaultValue;
	});
	// 暴露API
	return { data, loading, initData };
};
