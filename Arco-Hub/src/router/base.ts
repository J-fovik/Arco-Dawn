import { log } from 'console';
import type { RouteRecordNormalized } from 'vue-router';
// 模块
const modules = import.meta.glob('./modules/*.ts', { eager: true });
// 处理模块
const newModules = Object.keys(modules).map((key) => {
	return (modules[key] as any).default;
});
// 处理路由
const formatRoutes = (): RouteRecordNormalized[] => {
	return newModules.reduce((list: any, next: any) => {
		const children = next?.children
			? next.children.map((child: any) => {
					return {
						path: `${next.path}/${child.path}`,
						name: child.name,
						component: child.component,
						meta: {
							...child.meta,
							breadcrumb: [next.meta.title, child.meta.title],
							icon: next.meta.icon,
						},
					};
			  })
			: [next];
		return [...list, ...children];
	}, []);
};
// 处理菜单
const formatMenus = () => {
	return newModules
		.map((child) => {
			const { name, path, meta, children } = child;
			return {
				name,
				path,
				...meta,
				children:
					children && children.length
						? children
								.map((item: any) => ({
									name: item.name,
									path: item.path,
									...item.meta,
								}))
								.filter((menu: any) => !menu.superiorName)
						: null,
			};
		})
		.sort((a: any, b: any) => a.order - b.order);
};

// 返回模块路由
export const appRoutes = formatRoutes();

// 返回模块菜单
export const appMenus = formatMenus();
