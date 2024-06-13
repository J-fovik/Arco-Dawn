import { defineStore } from 'pinia';
import curryingRequest, { USER_APIS } from '@/service';
import jsCookie from 'js-cookie';

export const useUserStore = defineStore('user', () => {
	// 用户信息
	const userInfo = ref<UserState>({});
	// 设置用户信息
	const setUserInfo = (value: UserState) => {
		userInfo.value = value;
	};
	// 	获取用户角色菜单
	const getUserMenuList = async (roleId: string) => {
		const { err, res } = await curryingRequest(() =>
			USER_APIS.getUserMenuList({
				roleId,
			})
		);
		// 处理异常
		if (err) return [];
		// 返回菜单
		return res?.data.menuList;
	};
	// 获取角色权限
	const getRoleKeyList = async (roleId: string) => {
		// 获取权限列表
		const { err, res } = await curryingRequest(() =>
			USER_APIS.getRoleKeyList({
				roleId,
			})
		);
		// 处理错误
		if (err) return [];
		// 返回结果
		return res?.data.map((item: any) => item.menuInfo.name);
	};
	// 获取用户信息
	const initUserInfo = async () => {
		const { res, err } = await curryingRequest(() => USER_APIS.getUserInfo());
		// 处理错误
		if (err) return false;
		// 获取权限啊信息
		const [menuList] = await Promise.all([getUserMenuList(res?.data.roleId)]);
		// 设置token
		if (res?.data.token) {
			jsCookie.set('userToken', res?.data.token);
		}
		// 设置用户信息
		setUserInfo({
			...res?.data,
			menuList,
		});
		// 获取成功
		return true;
	};
	// 暴露API
	return { userInfo, initUserInfo, setUserInfo };
});
