import type { SelectOptionData } from '@arco-design/web-vue';

export const ALL_OPTIONS = [
	{
		label: '全部',
		value: '',
	},
];

export const YES_NO = [
	{
		label: '是',
		value: '1',
	},
	{
		label: '否',
		value: '0',
	},
];

export default (options: Array<SelectOptionData>, value: string | number) => {
	return options.find((item) => item.value === value);
};
