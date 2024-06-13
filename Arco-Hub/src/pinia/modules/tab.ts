import type { RouteLocationNormalized } from 'vue-router';
import { defineStore } from 'pinia';
import { useBasicsMap } from '@/hooks';

interface TabItem {
	name: string;
	title: string;
	fullPath: string;
	query: AnyObject;
	ignoreCache: boolean;
	children?: TabItem[];
}
// 格式化tab信息
const formatTag = (route: RouteLocationNormalized): TabItem => {
	const { name, meta, fullPath, query } = route;
	return {
		title: meta.title ?? '',
		name: (name as string) ?? '',
		fullPath,
		query,
		ignoreCache: meta.ignoreCache ?? false,
	};
};
// 多页签控制
export const useTabStore = defineStore('tabStore', () => {
	// 获取
	const sessionTabList = sessionStorage.getItem('tabMap');
	// 路由信息
	const route = useRoute();
	// 路由控制
	const router = useRouter();
	// 多页签数组
	const {
		basicsMap: tabMap,
		hasValue,
		addValue,
		deleteValue,
		clearValue,
	} = useBasicsMap<TabItem>(sessionTabList ? JSON.parse(sessionTabList) : []);
	// 多页签Keys
	const tabKeys = computed(() => {
		return [...tabMap.value.keys()];
	});
	// 添加页签
	const addTab = (route: RouteLocationNormalized) => {
		// 过滤无用的页面
		if (['Home', 'Login', 'Error404', 'Error403'].includes(route.name as string)) return;
		// 存在上级
		addValue(route.name as string, formatTag(route));
		// 存到本地
		storeLocal();
	};
	// 存到本地
	const storeLocal = () => {
		// 获取列表
		const tabList = tabKeys.value.map((key) => {
			return [key, tabMap.value.get(key)];
		});
		// 存储本地
		sessionStorage.setItem('tabMap', JSON.stringify(tabList));
	};
	// 返回
	const jumpTabName = (name?: string) => {
		// 删除标签页
		deleteValue(route.name as string);
		// 手动控制跳转
		if (name) {
			router.replace({ name });
		} else {
			// 返回相关页
			if (route.query.name) {
				if (hasValue(route.query.name as string)) {
					router.replace({
						name: route.query.name as string,
						query: tabMap.value.get(route.query.name as string)?.query,
					});
				} else {
					router.replace({ name: route.query.name as string });
				}
			} else {
				router.replace({ name: (route.meta.superiorName as string) ?? 'Home' });
			}
		}
	};
	// 删除tab
	const deleteTab = (value: any) => {
		// 删除
		deleteValue(value);
		// 存储本地
		storeLocal();
	};
	// 清除全部tab
	const clearTabList = () => {
		// 清除所有
		clearValue();
		// 存储本地
		storeLocal();
	};
	// 关闭其他
	const clearOtherTab = (key: string) => {
		tabMap.value = new Map([[key, tabMap.value.get(key)]]) as any;
		// 存储本地
		storeLocal();
	};
	// 暴露API
	return {
		tabMap,
		tabKeys,
		addTab,
		jumpTabName,
		clearOtherTab,
		deleteTab,
		clearTabList,
	};
});
