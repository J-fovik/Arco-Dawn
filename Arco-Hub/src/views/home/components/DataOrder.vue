<template>
	<a-spin style="width: 100%" :loading="chatLoading">
		<a-card class="general-card">
			<template #title>
				<span style="margin-right: 20px; font-size: 20px">订单趋势</span>
				<a-dropdown-button>
					{{ chartDayTitle }}
					<template #icon>
						<icon-down />
					</template>
					<template #content>
						<a-doption @click="setChartDay(1)">
							<template #icon>
								<icon-check v-if="chartDay === 1" />
							</template>
							最近一个月
						</a-doption>
						<a-doption @click="setChartDay(3)">
							<template #icon>
								<icon-check v-if="chartDay === 3" />
							</template>
							最近三个月
						</a-doption>
						<a-doption @click="setChartDay(6)">
							<template #icon>
								<icon-check v-if="chartDay === 6" />
							</template>
							最近半年
						</a-doption>
						<a-doption @click="setChartDay(12)">
							<template #icon>
								<icon-check v-if="chartDay === 12" />
							</template>
							最近一年
						</a-doption>
					</template>
				</a-dropdown-button>
			</template>
			<zs-chart style="width: 100%; height: 400px" :chart-option="chartOption"></zs-chart>
		</a-card>
	</a-spin>
</template>

<script lang="ts" setup name="DataOrder">
import { useBasicsState } from '@/hooks';
import { URL, curryingRequest } from '@/service';
// 控制时间选择
const [chartDay, setChartDay] = useBasicsState(1, () => initData());
// chatLoading控制
const [chatLoading, setChatLoading] = useBasicsState<boolean>(false);
// 时间
const chartDayTitle = computed(() => {
	switch (chartDay.value) {
		case 1:
			return '最近一个月';
		case 3:
			return '最近三个月';
		case 6:
			return '最近半年';
		case 12:
			return '最近一年';
		default:
			return '';
	}
});
// 图表数据
const yData = ref<any>([]);
// 时间轴
const xData = ref<string[]>([]);
// 图表配置
const chartOption = computed(() => {
	return {
		tooltip: {
			trigger: 'axis',
		},
		dataZoom: [
			{
				show: true,
				realtime: true,
				start: 0,
				end: 100,
			},
			{
				type: 'inside',
				realtime: true,
				start: 0,
				end: 100,
			},
		],
		legend: {
			data: yData.value.map((o: any) => o.name),
		},
		grid: {
			left: '3%',
			right: '6%',
			top: '12%',
			bottom: '22%',
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: xData.value,
		},
		yAxis: {
			type: 'value',
		},
		series: yData.value.map((o: any) => ({
			...o,
			markLine: {
				data: [
					{
						type: 'average',
						name: '平均值',
						// 可选的样式配置
						lineStyle: {
							// color: 'red',
							type: 'dashed',
						},
						label: {
							position: 'end', // 'start'|'middle'|'end'
							formatter: '平均值:{c}',
						},
					},
				],
			},
		})),
	};
});
// 获取折线图数据
const initData = async () => {
	// 请求数据
	// const { res, err } = await curryingRequest(
	// 	{
	// 		url: URL.TEST.GET_LIST,
	// 		data: { month: chartDay.value },
	// 	},
	// 	{
	// 		before: () => setChatLoading(true),
	// 		after: () => setChatLoading(false),
	// 	}
	// );
	// // 处理错误
	// if (err) return;

	// 设置时间
	xData.value = [
		'2023/04/19',
		'2023/04/20',
		'2023/04/21',
		'2023/04/22',
		'2023/04/23',
		'2023/04/24',
		'2023/04/25',
	]; //res?.data.dateList;
	yData.value = [
		{
			name: '查重订单',
			type: 'line',
			data: [120, 132, 101, 134, 90, 230, 210],
		},
		{
			name: '降重订单',
			type: 'line',
			data: [220, 182, 191, 234, 290, 330, 310],
		},
		{
			name: '排版订单',
			type: 'line',
			data: [150, 232, 201, 154, 190, 330, 410],
		},
		{
			name: 'AI写作订单',
			type: 'line',
			data: [320, 332, 301, 334, 390, 330, 320],
		},
	];
	// // // 设置数据
	// yData.value = res?.data.lineChartInfoVoList.map((o: any) => {
	// 	o.type = 'line';
	// 	return o;
	// });
};
initData();
</script>
