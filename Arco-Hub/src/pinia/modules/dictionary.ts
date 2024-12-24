import { defineStore } from 'pinia';
import { useBasicsMap } from '@/hooks';
import { URL, curryingRequest } from '@/service';

interface Dictionary {
	detailCode: string;
	detailName: string;
	typeCode: string;
}
// 字典管理
export const useDictionaryStore = defineStore('dictionary', () => {
	// 字典信息
	const { basicsMap, hasValue, getValue, addValue } = useBasicsMap<Array<Dictionary>>([]);
	// 获取参数
	const initData = async () => {
		// const { res } = await curryingRequest({
		// 	url: URL.PUBLIC.DICTIONARY,
		// });
		const list = [
			{ label: 'aaa', type: 'A', value: '111' },
			{ label: 'bbb', type: 'B', value: '222' },
			{ label: 'ccc', type: 'C', value: '333' },
			{ label: 'ddd', type: 'A', value: '444' },
			{ label: 'eee', type: 'B', value: '444' },
		];
		// 循环添加map数据
		list.sort((a: any, b: any) => a?.sort - b?.sort).forEach((item: any) => {
			// 在每个对象中添加value属性
			item.value = item.value;
			item.label = item.label;
			if (hasValue(item.type)) {
				const dictionaryList = getValue(item.type) as Array<any>;
				basicsMap.value.set(item.type, [...dictionaryList, item]);
			} else {
				addValue(item.type, [item]);
			}
		});
	};
	//  获取具体的值
	const getDictionaryItem = (key: string, value: any): any => {
		return (
			getValue(key)?.find((item: any) => {
				return item.value === value;
			}) ?? {}
		);
	};
	// 初始化
	initData();
	// 暴露API
	return {
		getDictionaryInfo: getValue,
		getDictionaryItem,
	};
});
