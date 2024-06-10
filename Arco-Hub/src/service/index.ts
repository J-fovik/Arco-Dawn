import type { HttpResponse, HttpError } from './request';
import { Message } from '@arco-design/web-vue';
export { default as USER_APIS } from './modules/user';
export { default as SYSTEM_APIS } from './modules/system';

// 二次封装请求
const curryingRequest = async <T = any>(
	api: () => Promise<any>, // 请求接口
	options?: {
		before?: () => void;
		after?: () => void;
		successMsg?: string;
	}
) => {
	// 默认值
	const params: { res: HttpResponse<T> | null; err: HttpError | null } = {
		res: null,
		err: null,
	};
	// 请求前
	if (options?.before) options.before();
	// 请求监听 处理错误
	try {
		const res = await api();
		params.res = res as HttpResponse<T>;
	} catch (err: any) {
		params.err = err as HttpError;
	}
	// 请求前
	if (options?.after) options.after();
	// 请求成功提示
	if (!params.err && options?.successMsg) Message.success(options.successMsg);
	// 返回结果
	return params;
};

export default curryingRequest;
