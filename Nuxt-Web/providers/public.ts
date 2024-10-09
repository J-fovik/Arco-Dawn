import { joinURL } from 'ufo';
import type { ProviderGetImage } from '@nuxt/image';
import { createOperationsGenerator } from '#image';

const operationsGenerator = createOperationsGenerator();
// 判断是否是外部链接
const isExternalLinks = (src: string) => {
	return src.includes('http://') || src.includes('https://');
};
export const getImage: ProviderGetImage = (src, { modifiers = {}, baseURL } = {}) => {
	const operations = operationsGenerator(modifiers);
	const externalLink = isExternalLinks(src);
	if (!import.meta.dev) {
		if (!externalLink) {
			// also support runtime config
			baseURL = useRuntimeConfig().public.baseURL;
		}
	}
	return {
		url: joinURL(baseURL, src + (!externalLink && operations ? '?' + operations : '')),
	};
};
