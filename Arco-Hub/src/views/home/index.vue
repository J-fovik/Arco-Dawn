<template>
	<zs-content>
		<!-- <a-grid :cols="24" :col-gap="16" :row-gap="16">
			<a-grid-item :span="12">
				<zs-data-ranking />
			</a-grid-item> -->
			<!-- <a-grid-item :span="12">
				<zs-data-pie />
			</a-grid-item>
			<a-grid-item :span="24">
				<a-card class="general-card">
					<zs-data-chart />
				</a-card>
			</a-grid-item> -->
		<!-- </a-grid> -->
		<div class="father" style="height: calc(100vh - 120px); width: 100%;">
			<div class="homeTitle">欢迎来到高报管理后台！！！</div>
		</div>
	</zs-content>
</template>

<script lang="ts" setup name="Home">
import ZsContent from '@/components/zsContent/index.vue';
import ZsDataChart from './components/zsDataChart.vue';
import ZsDataPie from './components/zsDataPie.vue';
import ZsDataRanking from './components/zsDataRanking.vue';

</script>

<style scoped>
.home-right {
	width: 300px;
	min-height: 300px;
	background-color: red;
}
.father{
	display: flex;
	justify-content: center;
	align-items: center;
}
.homeTitle {
	font-family: '楷体';
	font-size: 50px;

}
</style>
