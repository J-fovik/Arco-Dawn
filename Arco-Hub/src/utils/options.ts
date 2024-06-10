import type { SelectOptionData } from '@arco-design/web-vue';

export const ALL_OPTIONS = [
	{
		label: '全部',
		value: ''
	}
]

export default (options: Array<SelectOptionData>, value: string) => {
	return options.find((item) => item.value === value);
};
