import { ref } from 'vue';
import { defineStore } from 'pinia';
import curryingRequest, { USER_APIS, SYSTEM_APIS } from '@/service';
import jsCookie from 'js-cookie';


export const useUserStore = defineStore('user', () => {
	// 用户信息
	const userInfo = ref<UserState>({});
	// 设置用户信息
	const setUserInfo = (value: UserState) => {
		userInfo.value = value;
	};
	// 获取用户信息
	const initUserInfo = async () => {
		const { res, err } = await curryingRequest(() => USER_APIS.getUserInfo());
		// 处理错误
		if (err) return false;
		// 获取权限列表
		const { res: roleRes, err: roleErr } = await curryingRequest(() =>
			SYSTEM_APIS.getRoleKeyList({
				roleId: res?.data.roleId,
			})
		);
		// 处理获取权限列表错误
		if (roleErr) return false;
		// 设置token
		if (res?.data.token) {
			jsCookie.set('userToken', res?.data.token);
		}
		
		// 设置用户信息
		setUserInfo({
			...res?.data,
			roleList: roleRes?.data.map((item: any) => item.powerId),
		});
		// 获取成功
		return true;
	};
	// 暴露API
	return { userInfo, initUserInfo, setUserInfo };
});
