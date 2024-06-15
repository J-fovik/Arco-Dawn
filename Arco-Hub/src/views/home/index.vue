<template>
	<ZsContent>
		<a-card
			title="折线图"
			:body-style="{ padding: '10px' }"
			:header-style="{ padding: '10px' }"
		>
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
		<a-card
			title="柱状图"
			:body-style="{ padding: '10px' }"
			:header-style="{ padding: '10px' }"
			style="margin-top: 2px; margin-bottom: 2px"
		>
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
		<a-card
			title="饼状图"
			:content-style="{ padding: '10px' }"
			:header-style="{ padding: '10px' }"
		>
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
	</ZsContent>
</template>

<script lang="ts" setup name="Home">
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
