import axios from 'axios';
import jsCookie from 'js-cookie';
import { Message } from '@arco-design/web-vue';
import { useUserStore } from '@/pinia';
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

// 创建axios请求实例
const request = axios.create({
	baseURL: import.meta.env.VITE_API_BASE_URL,
	timeout: 100 * 1000, // 请求超时时间
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
		if (res.config.responseType === 'blob') {
			return res.data;
		} else {
			if (res.data.code === 0) {
				return res.data;
			} else {
				if ([1001, 1002].includes(res.data.code)) {
					// 用户信息
					const { setUserInfo } = useUserStore();
					// 删除token
					jsCookie.remove('userToken');
					// 清除用户信息
					setUserInfo({});
					// 跳转登录
					router.push('/login');
				}
				if (res.data.code === 1003) {
					// 设置token
					jsCookie.set('userToken', res.data.data.token);
					// 重新请求
					return await request(res.config);
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
