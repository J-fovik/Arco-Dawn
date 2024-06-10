import { reactive } from 'vue';
import { defineStore } from 'pinia';
import defaultSettings from '@/config/settings';

export const useAppStore = defineStore('app', () => {
	const appConfig: AppState = reactive({
		...defaultSettings,
	});
	// 设置菜单展开收缩
	const setMenuCollapse = (val: boolean) => {
		if (val === appConfig.menuCollapse) return;
		appConfig.menuCollapse = val;
	};
	// 切换主题
	const handleToggleTheme = () => {
		if (appConfig.theme === 'dark') {
			appConfig.theme = 'light';
			document.body.removeAttribute('arco-theme');
		} else {
			appConfig.theme = 'dark';
			document.body.setAttribute('arco-theme', 'dark');
		}
	};
	// 设置菜单
	const setGlobalSettingsVisible = (val: boolean) => {
		if (val === appConfig.globalSettings) return;
		appConfig.globalSettings = val;
	};
	// 设置色弱模式
	const setColorWeak = (val: boolean) => {
		if (val === appConfig.colorWeak) return;
		appConfig.colorWeak = val;
		setColorWeakNumber();
	};
	// 修改色弱数值
	const setColorWeakNumber = () => {
		(document.querySelector('#app') as any).style.filter = appConfig.colorWeak
			? `invert(${50 + appConfig.colorWeakNumber / 2}%)`
			: 'none';
	};
	// 修改应用元素大小
	const setElementSize = (val: AppState['size']) => {
		if (val === appConfig.size) return;
		appConfig.size = val;
	};
	// 设置菜单置顶
	const setTopMenu = (val: boolean) => {
		if (val === appConfig.topMenu) return;
		appConfig.topMenu = val;
		// 切换菜单位置时都要展开菜单
		setMenuCollapse(false);
	};
	// 设置未读消息
	const setUnreadMessage = (val: number) => {
		appConfig.unreadMessage = val;
	};
	// 暴露API
	return {
		appConfig,
		setMenuCollapse,
		setTopMenu,
		handleToggleTheme,
		setElementSize,
		setColorWeak,
		setUnreadMessage,
		setGlobalSettingsVisible,
		setColorWeakNumber,
	};
});
