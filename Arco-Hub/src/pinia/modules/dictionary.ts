import { defineStore } from 'pinia';
import { useBasicsMap } from '@/hooks';
import curryingRequest, { PUBLIC_APIS } from '@/service';

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
		const { res } = await curryingRequest(() => PUBLIC_APIS.getDictionaryInfo({}));
		// 循环添加map数据
		res?.data.forEach((item: Dictionary) => {
			if (hasValue(item.typeCode)) {
				const dictionaryList = getValue(item.typeCode) as Array<any>;
				basicsMap.value.set(item.typeCode, [...dictionaryList, item]);
			} else {
				addValue(item.typeCode, [item]);
			}
		});
	};
	// 获取具体属性
	const getDictionaryItem = (key: string, value: any): Dictionary | AnyObject => {
		return (
			getValue(key)?.find((item) => {
				return item.detailCode === value;
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
