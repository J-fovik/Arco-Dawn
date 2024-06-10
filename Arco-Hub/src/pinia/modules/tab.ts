import type { RouteLocationNormalized } from 'vue-router';
import { computed } from 'vue';
import { defineStore } from 'pinia';
import { useBasicsMap } from '@/hooks';

interface TabItem {
	name: string;
	title: string;
	fullPath: string;
	query: AnyObject;
	ignoreCache: boolean;
}

// 格式化tab信息
const formatTag = (route: RouteLocationNormalized): TabItem => {
	const { name, meta, fullPath, query } = route;
	return {
		title: meta.title || '',
		name: String(name),
		fullPath,
		query,
		ignoreCache: meta.ignoreCache ?? false,
	};
};
// 多页签控制
export const useTabStore = defineStore('tabStore', () => {
	// 多页签数组
	const { basicsMap: tabMap, addValue, deleteValue, clearValue } = useBasicsMap<TabItem>();
	// 多页签Keys
	const tabKeys = computed(() => {
		return [...tabMap.value.keys()];
	});
	// 添加页签
	const addTab = (r: RouteLocationNormalized) => {
		// 过滤无用的页面
		if (['Home', 'Login'].includes(r.name as string)) return;
		// 添加
		addValue(r.name as string, formatTag(r));
	};
	// 暴露API
	return {
		tabMap,
		tabKeys,
		addTab,
		deleteTab: deleteValue,
		clearTabList: clearValue,
	};
});
