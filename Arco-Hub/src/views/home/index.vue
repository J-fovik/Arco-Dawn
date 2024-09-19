<template>
	<ZsContent>
		<DataPanel />
		<a-card title="折线图" class="general-card" style="margin-top: 20px">
			<a-grid
				:cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }"
				:col-gap="12"
				:row-gap="12"
				justify="space-around"
			>
				<a-grid-item>
					<ZsChart :chartOption="options1" style="height: 300px; width: 100%" />
				</a-grid-item>
				<a-grid-item>
					<ZsChart :chartOption="options2" style="height: 300px; width: 100%" />
				</a-grid-item>
				<a-grid-item>
					<ZsChart :chartOption="options3" style="height: 300px; width: 100%" />
				</a-grid-item>
			</a-grid>
		</a-card>
		<a-card title="柱状图" class="general-card" style="margin-top: 20px">
			<a-grid
				:cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }"
				:col-gap="12"
				:row-gap="12"
				justify="space-around"
			>
				<a-grid-item>
					<ZsChart :chartOption="options4" style="height: 300px; width: 100%" />
				</a-grid-item>
				<a-grid-item>
					<ZsChart :chartOption="options5" style="height: 300px; width: 100%" />
				</a-grid-item>
				<a-grid-item>
					<ZsChart :chartOption="options6" style="height: 300px; width: 100%" />
				</a-grid-item>
			</a-grid>
		</a-card>
		<a-card title="饼状图" class="general-card" style="margin-top: 20px">
			<a-grid
				:cols="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 3, xxl: 3 }"
				:col-gap="12"
				:row-gap="12"
				justify="space-around"
			>
				<a-grid-item>
					<ZsChart :chartOption="options7" style="height: 300px; width: 100%" />
				</a-grid-item>
				<a-grid-item>
					<ZsChart :chartOption="options8" style="height: 300px; width: 100%" />
				</a-grid-item>
				<a-grid-item>
					<ZsChart :chartOption="options9" style="height: 300px; width: 100%" />
				</a-grid-item>
			</a-grid>
		</a-card>
		<DataOrder style="margin-top: 20px" />
		<OrderTrend style="margin-top: 20px" />
	</ZsContent>
</template>

<script lang="ts" setup name="Home">
import DataPanel from './components/DataPanel.vue';
import DataOrder from './components/DataOrder.vue';
import OrderTrend from './components/OrderTrend.vue';

import {
	options1,
	options2,
	options3,
	options4,
	options5,
	options6,
	options7,
	options8,
	options9,
} from './mack';
</script>

<style scoped></style>
