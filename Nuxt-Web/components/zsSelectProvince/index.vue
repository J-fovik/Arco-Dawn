<template>
	<div class="bg-white p-[30px_40px] rounded-[5px_5px] w-[800px]">
		<div class="flex justify-end cursor-pointer" @click="emits('cancel')">
			<icon-close />
		</div>
		<h1 class="text-center">选择高考省份</h1>
		<a-grid :cols="6" :colGap="12" :rowGap="16">
			<a-grid-item v-for="(item, index) in provinceList" :key="index">
				<div
					class="rounded-[50px] p-[10px_20px] text-center border hover:border-[#1677ff] cursor-pointer"
					@click="selectProvince"
				>
					{{ item }}
				</div>
			</a-grid-item>
		</a-grid>
	</div>
</template>

<script lang="ts" setup name="ZsSelectProvince">
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 父组件方法
const emits = defineEmits(['cancel', 'success']);
// 全局插件
const { $zsFetch } = useNuxtApp();
// 省份列表
const provinceList = [
	'北京',
	'天津',
	'河北',
	'山西',
	'辽宁',
	'浙江',
	'河南',
	'海南',
	'陕西',
	'吉林',
	'安徽',
	'湖北',
	'重庆',
	'甘肃',
	'黑龙江',
	'福建',
	'湖南',
	'四川',
	'青海',
	'上海',
	'江西',
	'贵州',
	'宁夏',
	'内蒙古',
	'山东',
	'新疆',
	'江苏',
	'广东',
	'云南',
	'广西',
];
// 选择省份
const selectProvince = async () => {
	// const [err, res] = await $zsFetch('/api/v1/website/web/homePage/queryRouteListOfHomePage', {
	// 	method: 'POST',
	// 	body: {},
	// });
	// // 处理错误
	// if (err) return;
	// 触发成功
	emits('success');
	// 触发关闭
	emits('cancel');
};
</script>
