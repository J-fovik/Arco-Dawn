import type { HttpResponse, HttpError } from './request';
import type { AxiosRequestConfig } from 'axios';
import { Message } from '@arco-design/web-vue';
import request from './request';

export const curryingRequest = async <T = any>(
	requestConfig: AxiosRequestConfig<any>,
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
		const res = await request(requestConfig);
		params.res = res as any as HttpResponse<T>;
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
