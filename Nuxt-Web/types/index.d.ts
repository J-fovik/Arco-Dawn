declare global {
	import '@arco-design/web-vue/es/components';
}

declare module 'js-md5';
declare module 'sortablejs';

declare module 'qrcode';

declare module '@vueuse/components';

declare module 'diff-match-patch';

type MsgType = 'success' | 'waring' | 'error';

type BasicsState = string | number | boolean | null;

type Dispatch<A> = (value: A) => void;

type StringAndUndefined = string | undefined;

type NumberAndUndefined = number | undefined;

interface AnyObject {
	[key: string]: any;
}

interface ZsFetchOption {
	baseURL?: string;
	timeout?: number;
	method?: 'POST' | 'GET';
	headers?: any;
	body?: any;
	responseType?: any;
}
