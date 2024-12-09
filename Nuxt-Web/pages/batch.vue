<template>
	<div class="max-w-container mx-auto min-h-[60vh]">
		<!-- 选择过滤 -->
		<zs-select-filter
			:data="[sfData, nfData, klData, pcData]"
			:default-values="{
				sf: sfData?.sf,
				nf: nfData?.nf,
				kl: klData?.kl,
				pc: pcData?.pc,
			}"
			@change="changeFilter"
			class="mt-[20px]"
		/>
		<a-table
			class="mt-[20px] cursor-pointer"
			table-layout-fixed
			:columns="createTableColumns()"
			:data="batchData"
			:bordered="{ wrapper: true, cell: true }"
			:loading="status === 'pending'"
		>
			<template #score="{ record }">
				<div class="text-right">{{ textFormat(record.score) }}</div>
			</template>
			<template #wc="{ record }">
				<div class="text-right">{{ textFormat(turnThousandth(record.wc)) }}</div>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '批次查询',
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 网站信息
const { provinceList } = useWebsiteInformation();
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '地区',
			dataIndex: 'sf',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
		},
		{
			title: '年份',
			dataIndex: 'nf',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
		},
		{
			title: '考生类别',
			dataIndex: 'kl',
			width: 120,
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
		},
		{
			title: '录取批次',
			dataIndex: 'pc',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(record.pc);
			},
		},
		{
			title: '分数线',
			dataIndex: 'score',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'score',
		},
		{
			title: '位次',
			dataIndex: 'wc',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'wc',
		},
	];
};
// change事件
const changeFilter = async (val: any) => {
	// 切换省份
	if (val.sf !== sfData.value!.sf) {
		// 赋值省份，清空年份、科类、批次
		sfData.value!.sf = val.sf;
		nfData.value!.nf = '';
		klData.value!.kl = '';
		pcData.value!.pc = '';
		// 查询年份、科类、批次
		await refreshNfData();
		await refreshKlData();
		await refreshPcData();
	}
	// 切换年份
	if (val.nf !== nfData.value!.nf) {
		// 赋值年份，清空科类、批次
		nfData.value!.nf = val.nf;
		klData.value!.kl = '';
		pcData.value!.pc = '';
		// 查询科类、批次
		await refreshKlData();
		await refreshPcData();
	}
	// 切换选科
	if (val.kl !== klData.value!.kl) {
		klData.value!.kl = val.kl;
	}
	// 切换批次
	if (val.pc !== pcData.value!.pc) {
		pcData.value!.pc = val.pc;
	}
	// 查询列表
	refreshBatchData();
};
// 获取省份数据;
const { data: sfData } = await useAsyncData('sfList', async () => {
	// 暴露数据
	const sfList = provinceList.value.map((o: any) => {
		return {
			...o,
			value: o.sf,
			label: o.sf,
		};
	});
	return {
		title: '所在地区',
		key: 'sf',
		isShow: true,
		multiple: false,
		options: sfList,
		sf: userInfo.value.province,
	};
});
// 获取年份数据
const { data: nfData, refresh: refreshNfData } = await useAsyncData('nfList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_PCX_NF, {
		body: {
			sf: sfData.value!.sf,
		},
	});
	// 处理数据
	const nfList =
		res?.data?.map((o: any) => {
			return {
				value: o.nf,
				label: o.nf,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '录取年份',
		key: 'nf',
		isShow: true,
		multiple: false,
		options: nfList,
		nf: nfList[0]?.value ?? '',
	};
});
// 获取科类数据
const { data: klData, refresh: refreshKlData } = await useAsyncData('klList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_PCX_KL, {
		body: {
			sf: sfData.value!.sf,
			nf: nfData.value!.nf,
		},
	});
	// 处理数据
	const klList =
		res?.data?.map((o: any) => {
			return {
				value: o.kl,
				label: o.kl,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '考生类别',
		key: 'kl',
		isShow: true,
		multiple: false,
		options: [...ALL_OPTIONS, ...klList],
		kl: '',
	};
});
// 获取批次数据
const { data: pcData, refresh: refreshPcData } = await useAsyncData('pcList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_PCX_PC, {
		body: {
			sf: sfData.value!.sf,
			nf: nfData.value!.nf,
		},
	});
	// 处理数据
	const pcList =
		res?.data?.map((o: any) => {
			return {
				value: o.pc,
				label: o.pc,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '录取批次',
		key: 'pc',
		isShow: true,
		multiple: false,
		options: [...ALL_OPTIONS, ...pcList],
		pc: '',
	};
});
// 获取批次线列表
const {
	data: batchData,
	status,
	refresh: refreshBatchData,
} = await useAsyncData('batchList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_PCX_PC_LIST, {
		body: {
			sf: sfData.value!.sf,
			nf: nfData.value!.nf,
			kl: klData.value!.kl,
			pc: pcData.value!.pc,
		},
	});
	// 暴露数据
	return res?.data ?? [];
});
</script>
