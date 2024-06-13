declare module 'vue-json-viewer';
declare module 'js-md5';
declare module 'qrcode';

declare module 'js-cookie' {
	export const set: (key: string, value: string) => void;
	export const get: (key?: string) => string;
	export const remove: (key: string) => void;
}
declare module 'nprogress' {
	export const start: () => void;
	export const done: () => void;
	export const configure;
}
