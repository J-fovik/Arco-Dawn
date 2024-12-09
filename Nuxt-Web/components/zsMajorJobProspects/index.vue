<template>
	<div>
		<!-- 就业率（近三年） -->
		<div v-if="data.isJobrate">
			<zs-title title="就业率（近三年）" size="small" />
			<div class="mt-[10px]">
				<a-grid
					:cols="3"
					:colGap="40"
					:rowGap="16"
					class="p-[40px] border-solid border border-[rgb(237,237,237)] rounded-[4px]"
				>
					<a-grid-item v-for="(item, index) in data.jobrateList" :key="index">
						<div
							class="bg-[#FFF7F0] px-[10px] font-bold rounded-[4px] h-[35px] leading-[35px] text-[#FFA864]"
						>
							{{ item.year + '年' }}
						</div>
						<div class="mt-[30px] text-[18px] text-[#FFA864] font-bold">
							{{ item.rate }}
						</div>
						<a-slider
							v-model="item.rateValue"
							disabled
							:show-tooltip="false"
							class="arco-slider slider"
						/>
					</a-grid-item>
				</a-grid>
			</div>
		</div>

		<!-- 薪酬 -->
		<div v-if="data.isSalary" class="mt-[30px]">
			<zs-title title="薪酬" size="small" />
			<div class="mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]">
				<div class="h-[350px]">
					<zs-e-charts :options="salaryChartOption" />
				</div>
				<a-grid :cols="4" :colGap="40" :rowGap="16">
					<a-grid-item
						class="h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"
						v-if="data.fivePjxz"
					>
						<div
							class="text-[24px] leading-[32px] truncate w-[80%] text-center text-price"
						>
							{{ turnThousandth(data.fivePjxz) }}
						</div>
						<div class="text-[14px]">毕业后五年薪资</div>
					</a-grid-item>
					<a-grid-item
						class="h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"
						v-if="data.mostemployedeposition"
					>
						<div class="text-[24px] leading-[32px] truncate w-[80%] text-center">
							{{ data.mostemployedeposition }}
						</div>
						<div class="text-[14px]">最多就业岗位</div>
					</a-grid-item>
					<a-grid-item
						class="h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"
						v-if="data.mostemploymentindustry"
					>
						<div class="text-[24px] leading-[32px] truncate w-[80%] text-center">
							{{ data.mostemploymentindustry }}
						</div>
						<div class="text-[14px]">最多就业行业</div>
					</a-grid-item>
					<a-grid-item
						class="h-[77px] bg-[#F5F5F5] flex items-center justify-center flex-col"
						v-if="data.mostemploymentarea"
					>
						<div class="text-[24px] leading-[32px] truncate w-[80%] text-center">
							{{ data.mostemploymentarea }}
						</div>
						<div class="text-[14px]">最多就业地区</div>
					</a-grid-item>
				</a-grid>
			</div>
		</div>

		<!-- 就业行业分布 -->
		<div v-if="data.isHy" class="mt-[30px]">
			<zs-title title="就业行业分布" size="small" />
			<div
				class="mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px] h-[350px]"
			>
				<zs-e-charts :options="hyChartOption" />
			</div>
		</div>

		<!-- 就业岗位分布 -->
		<div v-if="data.isGw" class="mt-[30px]">
			<zs-title title="就业岗位分布" size="small" />
			<div class="mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]">
				<div class="h-[350px]">
					<zs-e-charts :options="gwChartOption" :on-Move="onMoveGwChart" />
				</div>
				<div>
					<div v-if="gwInfo.detailJob">
						<span class="text-[#333] font-bold">具体职位：</span>
						{{ gwInfo.detailJob }}
					</div>
					<div v-if="gwInfo.hy" class="mt-[15px]">
						<span class="text-[#333] font-bold">所在行业：</span>
						{{ gwInfo.hy }}
					</div>
				</div>
			</div>
		</div>

		<!-- 就业地区分布 -->
		<div v-if="data.isArea" class="mt-[30px]">
			<zs-title title="就业地区分布" size="small" />
			<div class="mt-[10px] p-[40px] border-solid border border-[#EDEDED] rounded-[4px]">
				<div class="h-[350px]">
					<zs-e-charts :options="areaChartOption" />
				</div>
			</div>
		</div>

		<!-- 专业就业 -->
		<div v-if="data.job" class="mt-[30px]">
			<zs-title title="专业就业" size="small" />
			<div class="mt-[10px] leading-[20px]" v-html="data.job"></div>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsMajorJobProspects">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => ({} as any),
	}
);
// 岗位信息
const gwInfo = ref({} as any);
// 薪酬图例
const salaryChartOption = computed(() => {
	return {
		tooltip: {
			trigger: 'axis',
			formatter: (params: any) => {
				let tooltipText = params[0].axisValueLabel + '<br/>';
				params.forEach((param: any) => {
					const maxValueLength = 20;
					const valueStr = `￥${turnThousandth(param.value)}`;
					const paddedValueStr = valueStr.padEnd(maxValueLength, ' ');
					tooltipText += `<span style="display:inline-block;width:80px;text-align:left;">${param.marker}${param.seriesName}:</span> <span style="display:inline-block;width:80px;text-align:right;">${paddedValueStr}</span><br/>`;
				});
				return tooltipText;
			},
		},
		legend: {
			data: ['本专业', '所有专业'],
		},
		grid: {
			left: '6%',
			right: '6%',
			top: '12%',
			bottom: '22%',
		},
		xAxis: {
			type: 'category',
			boundaryGap: false,
			data: ['应届生', '2年经验', '5年经验', '10年经验'],
		},
		yAxis: {
			type: 'value',
		},
		series: [
			{
				name: '本专业',
				type: 'line',
				color: '#16B857',
				label: {
					show: true,
					position: 'top',
					formatter: (params: any) => `${turnThousandth(params.value)}`,
				},
				data: props.data.salaryXData,
			},
			{
				name: '所有专业',
				type: 'line',
				color: '#FF6600',
				label: {
					show: true,
					position: 'top',
					formatter: (params: any) => `${turnThousandth(params.value)}`,
				},
				data: props.data.salaryYData,
			},
		],
	};
});
// 就业行业分布图例
const hyChartOption = computed(() => {
	return {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			},
			formatter: '{b} : {c}%',
		},
		grid: {
			top: '3%',
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
		},
		xAxis: [
			{
				type: 'category',
				data: props.data.hyListXData,
				axisTick: {
					alignWithLabel: true,
				},
			},
		],
		yAxis: [
			{
				type: 'value',
			},
		],
		series: [
			{
				type: 'bar',
				color: '#FF862E',
				barWidth: '60%',
				label: {
					show: true,
					position: 'top',
					formatter: '{c}%',
				},
				data: props.data.hyListYData,
			},
		],
	};
});
// 就业岗位分布图例
const gwChartOption = computed(() => {
	return {
		tooltip: {
			trigger: 'item',
			formatter: '{a} <br/>{b} : {c} ({d}%)',
		},
		legend: {
			top: '5%',
			left: 'center',
		},
		series: [
			{
				name: '就业岗位分布',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2,
				},
				label: {
					show: true, // 显示标签
					position: 'outside', // 将标签放置在扇区外部
					formatter: '{b}: {c} ({d}%)', // 自定义标签内容
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 20, // 你可以根据需要调整字体大小
						fontWeight: 'bold',
					},
				},
				labelLine: {
					show: true, // 显示标签引导线
				},
				data: props.data.gwList,
			},
		],
	};
});
// 就业地区分布图例
const areaChartOption = computed(() => {
	return {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'shadow',
			},
			formatter: '{b}: {c}%',
		},
		legend: {},
		grid: {
			left: '3%',
			top: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true,
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.01],
		},
		yAxis: {
			type: 'category',
			data: props.data.areaYData,
		},
		series: [
			{
				type: 'bar',
				color: '#FF862E',
				label: {
					show: true,
					position: 'right',
					formatter: '{c}%',
				},
				data: props.data.areaXData,
			},
		],
	};
});

// 就业岗位分布鼠标移动
const onMoveGwChart = (e: any) => {
	gwInfo.value = e.data;
};
</script>
<style scoped lang="scss">
:deep(.arco-slider, .slider) {
	.arco-slider-bar {
		height: 5px !important;
		background-color: #ffa864 !important;
	}
	.arco-slider-btn::after {
		border: 2px solid #ffa864 !important;
	}
}
</style>
