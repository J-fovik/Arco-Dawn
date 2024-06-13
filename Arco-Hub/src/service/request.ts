import axios from 'axios';
import jsCookie from 'js-cookie';
import { Message, Modal } from '@arco-design/web-vue';
import { useUserStore, useTabStore } from '@/pinia';
import router from '@/router';

export interface HttpResponse<T = unknown> {
	status: number;
	msg: string;
	code: number;
	data: T;
}

export interface HttpError {
	msg: string;
	code?: number;
	status?: number;
}
// 退出登录
const logoutUser = () => {
	// 用户信息
	const { setUserInfo } = useUserStore();
	// 标签页控制
	const { clearTabList } = useTabStore();
	// 删除token
	jsCookie.remove('userToken');
	// 清除用户信息
	setUserInfo({});
	// 清除标签页
	clearTabList();
	// 跳转登录
	router.push('/login');
};
// 创建axios请求实例
const request = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 30 * 1000, // 请求超时时间
	headers: {
		'Content-Type': 'application/json',
	},
});
// 请求拦截
request.interceptors.request.use(
	(config) => {
		// 获取用户token
		const uerToken = jsCookie.get('userToken');
		// 判断是否存在
		if (uerToken) {
			config.headers['token'] = uerToken;
		}
		return config;
	},
	(error) => Promise.reject(error)
);

// 响应拦截
request.interceptors.response.use(
	async (res) => {
		if (['blob', 'arraybuffer'].includes(res.config.responseType as string)) {
			return res.data;
		} else {
			if (res.data.code === 0) {
				return res.data;
			} else {
				if ([1001, 1002].includes(res.data.code)) {
					// 退出登录
					logoutUser();
				} else if (res.data.code === 1003) {
					// 设置token
					jsCookie.set('userToken', res.data.data.token);
					// 重新请求
					return await request(res.config);
				} else if (res.data.code === 1009) {
					Modal.warning({
						closable: true,
						mask: true,
						hideCancel: false,
						modalClass: 'custom-modal',
						title: '提示',
						content: '用户已在其他地点登录',
						okButtonProps: {
							status: 'warning',
						},
						onBeforeOk: (done: (closed: boolean) => void) => {
							// 关闭弹窗
							done(true);
							// 退出登录
							logoutUser();
						},
					});
				}
				Message.error(res.data.msg ?? '请求出错了');
				return Promise.reject(res.data);
			}
		}
	},
	(error) => {
		Message.error('请求出错了');
		return Promise.reject(error);
	}
);

export default request;
