<template>
	<a-card class="general-card">
		<template #title>
			<span style="margin-right: 20px; font-size: 20px">数据统计</span>
		</template>
		<a-grid :cols="24" :row-gap="16">
			<a-grid-item
				v-for="(item, index) in statisticList"
				:key="item.title"
				class="panel-col"
				:span="6"
				:style="{ 'border-right': index === statisticList.length - 1 ? 'none' : '' }"
			>
				<a-card class="general-card">
					<template #title>
						<span style="font-size: 19px">{{ item.title }}</span>
					</template>
					<div class="flex">
						<a-avatar :size="60" class="col-avatar">
							<img alt="avatar" :src="item.url" />
						</a-avatar>
						<div class="flex justify-around flex-1">
							<div>
								<a-statistic
									title="今日订单数"
									:value="item.todayOrder"
									:value-from="0"
									:precision="0"
									animation
									show-group-separator
								>
								</a-statistic>
							</div>
							<div>
								<a-statistic
									title="总订单数"
									:value="item.totalOrder"
									:value-from="0"
									:precision="0"
									animation
									show-group-separator
								>
								</a-statistic>
							</div>
						</div>
					</div>
				</a-card>
			</a-grid-item>
			<a-grid-item :span="24">
				<a-divider class="panel-border" />
			</a-grid-item>
		</a-grid>
	</a-card>
</template>

<script lang="ts" setup name="DataPanel">
import { useAsyncData } from '@/hooks';
const imgUrlList = [
	'http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/288b89194e657603ff40db39e8072640.svg~tplv-49unhts6dw-image.image',
	'http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/fdc66b07224cdf18843c6076c2587eb5.svg~tplv-49unhts6dw-image.image',
	'http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/77d74c9a245adeae1ec7fb5d4539738d.svg~tplv-49unhts6dw-image.image',
	'http://p3-armor.byteimg.com/tos-cn-i-49unhts6dw/c8b36e26d2b9bb5dbf9b74dd6d7345af.svg~tplv-49unhts6dw-image.image',
];
const panelList = shallowRef([
	{
		title: '查重订单',
		todayOrder: 4167,
		totalOrder: 1234,
	},
	{
		title: '降重订单',
		todayOrder: 33,
		totalOrder: 4567,
	},
	{
		title: '排版订单',
		todayOrder: 0,
		totalOrder: 4578,
	},
	{
		title: 'AI写作订单',
		todayOrder: 400,
		totalOrder: 89997,
	},
]);
// 获取列表
const { data: statisticList } = useAsyncData(async () => {
	// 请求数据
	// 返回处理后的数据
	return panelList.value.map((o: any, i: any) => {
		return {
			...o,
			url: imgUrlList[i % imgUrlList.length],
		};
	});
});
</script>

<style lang="less" scoped>
.panel-col {
	padding-left: 10px;
	border-right: 1px solid rgb(var(--gray-2));
}
.col-avatar {
	margin-right: 12px;
	background-color: var(--color-fill-2);
}
:deep(.panel-border) {
	margin: 4px 0 0 0;
}
</style>
