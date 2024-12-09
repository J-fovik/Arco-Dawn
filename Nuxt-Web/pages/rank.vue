<template>
	<div class="max-w-container mx-auto">
		<!-- 选择过滤 -->
		<zs-select-filter
			:data="[sfData, nfData, klData]"
			:default-values="{ sf: sfData?.sf, nf: nfData?.nf, kl: klData?.kl }"
			@change="changeFilter"
			class="mt-[20px]"
		/>
		<!-- 搜索框 -->
		<div class="flex items-center mt-[20px]">
			<!-- 请输入您的分数 -->
			<div class="w-[400px]">
				<a-input
					v-model.trim="form.score"
					size="large"
					class="rounded-lg h-[38px]"
					placeholder="请输入您的分数"
					allow-clear
					@clear="onScoreInput"
				>
					<template #prefix>
						<icon-search />
					</template>
				</a-input>
			</div>
			<div class="w-[120px] ml-[20px]">
				<a-button
					type="primary"
					size="large"
					class="openButton w-[120px]"
					@click="onScoreInput"
				>
					搜索
				</a-button>
			</div>
		</div>
		<!-- 折线图 -->
		<zs-title title="折线图" size="small" class="mt-[20px]" />
		<div class="bg-[#FFF7F0] p-[15px_20px] text-[#FFA864] mt-[10px] rounded-[4px]">
			<div>高考分数：{{ textFormat(form.scoreSearchInfo.score) }}分</div>
			<div class="my-[5px]">
				同分人数：{{ textFormat(turnThousandth(form.scoreSearchInfo.cnt)) }}人
			</div>
			<div>排名区间：{{ textFormat(turnThousandth(form.scoreSearchInfo.wc)) }}名</div>
		</div>
		<div class="h-[350px] border-solid border border-[#EDEDED] rounded-[4px] mt-[10px]">
			<zs-e-charts :options="lineChartOption" />
		</div>
		<div v-if="form.scoreSearchInfo?.isHistory" class="mt-[20px]">
			<div class="mb-[10px]">历史同位次考生得分</div>
			<span
				class="mr-[20px]"
				v-for="(item, index) in form.scoreSearchInfo?.historyList"
				:key="index"
				>{{ item.score }}分 ({{ item.nf }})
			</span>
		</div>
		<!-- 一分一段表 -->
		<zs-title title="一分一段表" size="small" class="mt-[20px]" />
		<a-table
			class="mt-[20px] cursor-pointer"
			table-layout-fixed
			:columns="createTableColumns()"
			:data="rankData.list"
			:bordered="{ wrapper: true, cell: true }"
			:pagination="{ ...pagination, total: rankData.total }"
			@page-change="onPageChange"
			@page-size-change="onPageSizeChange"
			:loading="status === 'pending'"
		/>
	</div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts/core';
// 设置头信息
useHead({
	title: '位次查询',
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 网站信息
const { provinceList } = useWebsiteInformation();
// form
const { form } = useForm(() => ({
	sf: userInfo.value.province,
	nf: '',
	kl: '',
	lineChart: [] as any,
	lineInfo: {} as any,
	score: '',
	scoreSearchInfo: {} as any,
}));
// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	refreshRankData();
});

// 折线图配置
const lineChartOption = computed(() => {
	return {
		tooltip: {
			trigger: 'axis',
			formatter: (params: any) => {
				// 最后展示文本
				let tooltipText;
				// 创建一个用于存储历史得分信息的字符串
				let historyScoresText;
				// 是否有历史
				let isHistory = false;
				// 赋值信息
				form.value.lineInfo = lineData.value.find(
					(item: any) => item.score == params[0].axisValueLabel
				);
				// 检查是否存在历史同位次考生得分
				if (
					form.value.lineInfo?.historyList &&
					form.value.lineInfo.historyList.length > 0
				) {
					isHistory = true;
					// 历史文本
					historyScoresText = form.value.lineInfo.historyList
						.map((item: any) => {
							return `<span style="margin-right:10px">${item.score}(${item.nf})</span>`;
						})
						.join('');
				}
				// 展示文本
				tooltipText = ` <div style="background:white;padding:10px">
									<div>高考分数：${form.value.lineInfo.score}分</div>
									${
										form.value.lineInfo.pc
											? `<div>${form.value.lineInfo.pc}：${form.value.lineInfo.pcx}分 </div>`
											: ''
									}
									<div>同分人数：${turnThousandth(form.value.lineInfo.cnt)}名 </div>
									<div>排名区间：${turnThousandth(
										form.value.lineInfo.wcRange.split('-')[0] +
											'-' +
											turnThousandth(
												form.value.lineInfo.wcRange.split('-')[1]
											)
									)}名 </div>
									 ${isHistory ? `<div>历史同位次考生得分：</div> ${historyScoresText}` : ''}

								</div>
								`;
				return tooltipText;
			},
		},
		title: {
			left: 'center',
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			name: '分数', // 在这里设置 X 轴的名称为“分数”
			nameLocation: 'end', // 设置名称显示的位置为轴的中间
			nameTextStyle: {
				// 设置名称的样式
				color: '#333', // 名称颜色
				fontSize: 14, // 名称字体大小
			},
			data: lineData.value.map((o: any) => o.score),
		},
		yAxis: {
			type: 'value',
			name: '人数', // 在这里设置Y轴的名称为“人数”
			nameLocation: 'end', // 设置名称显示的位置为轴的末端
			nameTextStyle: {
				// 设置名称的样式
				color: '#333', // 名称颜色
				fontSize: 14, // 名称字体大小
			},
			axisLabel: {
				show: true,
				formatter: function (value: any) {
					return turnThousandth(value); // 使用本地化格式化数字，也可以使用其他格式化方法
				},
			},
		},
		series: [
			{
				type: 'line',
				symbol: 'none',
				sampling: 'lttb',
				itemStyle: {
					color: '#FFA864',
				},
				areaStyle: {
					color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
						{
							offset: 0,
							color: '#FFF2E7',
						},
						{
							offset: 1,
							color: '#FFFFFF',
						},
					]),
				},
				data: lineData.value.map((o: any) => o.cnt),
			},
		],
	};
});
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '分数',
			dataIndex: 'score',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
		},
		{
			title: '本段人数',
			dataIndex: 'cnt',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(turnThousandth(record.cnt));
			},
		},
		{
			title: '累计人数',
			dataIndex: 'wc',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(turnThousandth(record.wc));
			},
		},
	];
};
// 分数查询
const onScoreInput = () => {
	// 赋值分数搜索信息
	form.value.scoreSearchInfo =
		lineData.value.find((item: any) => item.score == form.value.score) ?? {};
	// 判断是否存在历史数据;
	form.value.scoreSearchInfo.isHistory =
		form.value.scoreSearchInfo?.historyList?.length > 0 ? true : false;
};
// change事件
const changeFilter = async (val: any) => {
	if (val.sf !== sfData.value!.sf) {
		sfData.value!.sf = val.sf;
		nfData.value!.nf = '';
		klData.value!.kl = '';
		// 查询年份
		await refreshNfData();
		await refreshKlData();
	}
	if (val.nf !== nfData.value!.nf) {
		nfData.value!.nf = val.nf;
		klData.value!.kl = '';
		// 查询科类
		await refreshKlData();
	}
	if (val.kl !== klData.value!.kl) {
		klData.value!.kl = val.kl;
	}
	// 查询折线图
	refreshLineData();
	// 请求数据
	resetData();
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
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_NF, {
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
		nf: nfList[0].value ?? '',
	};
});
// 获取科类数据
const { data: klData, refresh: refreshKlData } = await useAsyncData('klList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_KL, {
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
		options: klList,
		kl: klList[0].value ?? '',
	};
});
// 获取一分一段列表
const {
	data: rankData,
	status,
	refresh: refreshRankData,
} = await useAsyncData('rankList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_WC_LIST, {
		body: {
			sf: sfData.value!.sf,
			nf: nfData.value!.nf,
			kl: klData.value!.kl,
			currentPage: pagination.value.current,
			pageSize: pagination.value.pageSize,
			pagingOrNot: 1,
		},
	});
	// 暴露数据
	return {
		list: res?.data?.rankList ?? [],
		total: res?.data?.totalCount ?? 0,
	} as any;
});
// 获取图表
const { data: lineData, refresh: refreshLineData } = await useAsyncData('lineList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MORE.GET_RANK_WC_LINE_CHART, {
		body: {
			sf: sfData.value!.sf,
			nf: nfData.value!.nf,
			kl: klData.value!.kl,
		},
	});
	// 暴露数据
	return res?.data ?? [];
});
</script>
<style scoped>
.openButton {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
.openButton:hover {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
</style>
