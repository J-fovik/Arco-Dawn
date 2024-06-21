import { defineStore } from 'pinia';
import defaultSettings from '@/config/settings';
import { useModal } from '@/hooks';
const APP_CONFIG_KEY = 'appConfig';

export const useAppStore = defineStore('app', () => {
	/* 对话框 */
	const { warningModal } = useModal();
	// 全局配置
	const appConfig: AppState = reactive({
		...defaultSettings,
		...(localStorage.getItem(APP_CONFIG_KEY)
			? JSON.parse(localStorage.getItem(APP_CONFIG_KEY)!)
			: {}),
		globalSettings: false, // 保证刷新后也是关闭状态
	});
	// 设置菜单展开收缩
	const setMenuCollapse = (val: boolean) => {
		if (val === appConfig.menuCollapse) return;
		appConfig.menuCollapse = val;
		saveConfig();
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
		saveConfig();
	};
	// 设置菜单
	const setGlobalSettingsVisible = (val: boolean) => {
		if (val === appConfig.globalSettings) return;
		appConfig.globalSettings = val;
		saveConfig();
	};
	// 设置灰度模式
	const setGrayscale = (val: boolean) => {
		if (val === appConfig.isGrey) return;
		appConfig.isGrey = val;
		if (val) {
			document.body.style.filter = 'grayscale(100%)';
		} else {
			document.body.style.filter = 'none';
		}
		saveConfig();
	};
	// 设置色弱模式
	const setColorWeak = (val: boolean) => {
		if (val === appConfig.colorWeak) return;
		appConfig.colorWeak = val;
		setColorWeakNumber();
		saveConfig();
	};
	// 修改色弱数值
	const setColorWeakNumber = () => {
		(document.querySelector('#app') as any).style.filter = appConfig.colorWeak
			? `invert(${50 + appConfig.colorWeakNumber / 2}%)`
			: 'none';
		saveConfig();
	};
	// 修改应用元素大小
	const setElementSize = (val: AppState['size']) => {
		if (val === appConfig.size) return;
		appConfig.size = val;
		saveConfig();
	};
	// 设置菜单置顶
	const setTopMenu = (val: boolean) => {
		if (val === appConfig.topMenu) return;
		appConfig.topMenu = val;
		// 切换菜单位置时都要展开菜单
		setMenuCollapse(false);
		saveConfig();
	};
	// 设置未读消息
	const setUnreadMessage = (val: number) => {
		appConfig.unreadMessage = val;
		saveConfig();
	};
	// 将配置保存到localStorage
	const saveConfig = () => {
		localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(appConfig));
	};
	// 恢复默认值
	const restoreDefault = () => {
		warningModal('确定恢复默认值吗？', async (done) => {
			localStorage.setItem(APP_CONFIG_KEY, JSON.stringify(defaultSettings));
			// 刷新页面以应用恢复默认值
			location.reload();
			done(true);
		});
	};
	onMounted(() => {
		// 主题设置
		if (appConfig.theme === 'dark') {
			document.body.setAttribute('arco-theme', 'dark');
		} else {
			document.body.removeAttribute('arco-theme');
		}
		// 灰度模式
		if (appConfig.isGrey) {
			document.body.style.filter = 'grayscale(100%)';
		} else {
			document.body.style.filter = 'none';
		}
		// 色弱模式
		setColorWeakNumber();
	});
	// 暴露API
	return {
		appConfig,
		setMenuCollapse,
		setTopMenu,
		handleToggleTheme,
		setElementSize,
		setGrayscale,
		setColorWeak,
		setUnreadMessage,
		setGlobalSettingsVisible,
		setColorWeakNumber,
		restoreDefault,
		saveConfig,
	};
});
