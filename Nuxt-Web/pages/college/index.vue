<template>
	<div>
		<div class="max-w-container mx-auto">
			<!-- 搜索框 -->
			<div class="flex items-center mt-[20px]">
				<div class="w-[300px]">
					<a-input
						size="large"
						class="rounded-lg h-[38px]"
						placeholder="搜索关键词"
						allow-clear
					>
						<template #prefix>
							<icon-search />
						</template>
					</a-input>
				</div>
				<div class="w-[80px]">
					<a-button type="primary" size="large" class="ml-[10px]"> 搜索 </a-button>
				</div>
			</div>
		</div>
		<!-- 选择过滤 -->
		<div class="max-w-container mx-auto">
			<zs-select-filter :data="filterData" :default-values="form" @change="changeFilter" />
			{{ form }}
		</div>
		<!-- 学校列表 -->
		<div class="max-w-container mx-auto mt-[20px] flex flex-col">
			<a-list class="list-border" :bordered="false">
				<a-list-item v-for="school in schoolList" :key="school.id">
					<a-list-item-meta>
						<!-- 学校Logo -->
						<template #avatar>
							<a-avatar shape="square" :size="70">
								<img alt="avatar" :src="school.img" />
							</a-avatar>
						</template>
						<!-- 学校名称 -->
						<template #title>
							<nuxt-link :to="`/college/${school.id}`" target="_blank">
								<div class="text-[18px] cursor-pointer">{{ school.name }}</div>
							</nuxt-link>
						</template>
						<!-- 学校信息 -->
						<template #description>
							<a-space>
								<template #split>
									<!-- <a-divider direction="vertical" :margin="2" :size="2" /> -->
									<span class="w-[2px] h-[8px] text-[#999]">|</span>
								</template>
								<span
									v-for="(tag, index) in school.tag"
									:key="index"
									class="text-[14px]"
								>
									{{ tag }}
								</span>
							</a-space>
							<div>
								<a-space>
									<span
										v-for="(tag, index) in school.tag"
										:key="index"
										class="border-solid border border-[#999999] rounded-[12px] p-[0px_6px] text-[14px] text-[#999999]"
									>
										{{ tag }}
									</span>
								</a-space>
							</div>
						</template>
					</a-list-item-meta>
					<template #actions>
						<nuxt-link :to="`/college/${school.id}`" target="_blank">
							<a-button type="primary">院校详情</a-button>
						</nuxt-link>
					</template>
				</a-list-item>
			</a-list>
			<a-pagination
				class="justify-end mt-[20px]"
				:total="50"
				show-total
				show-jumper
				show-page-size
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '查大学',
});
// form
const { form, resetForm } = useForm(() => ({
	state: [''],
	type: [''],
}));
// change事件
const changeFilter = (val: any) => {
	form.value = {
		...form.value,
		...val,
	};
	// if (val.state === '2') {
	// 	// 找到所有key为'type'的对象，并将它们的isShow属性设置为false
	// 	filterData.value.forEach((item) => {
	// 		if (item.key === 'type') {
	// 			item.isShow = false;
	// 		}
	// 	});
	// 	filterResult.value.type = [''];
	// } else {
	// 	// 当val.state不等于'2'时，将所有key为'type'的对象的isShow属性设置为true
	// 	filterData.value.map((item) => {
	// 		item.isShow = true;
	// 		return item;
	// 	});
	// }
};
// 数据列表
const filterData = ref([
	{
		title: '院校属地',
		key: 'state',
		isShow: true,
		multiple: true,
		options: [
			{
				label: '不限',
				value: '',
			},
			{
				label: '北京',
				value: '110000',
			},
			{
				label: '天津',
				value: '120000',
			},
			{
				label: '河北',
				value: '130000',
			},
			{
				label: '山西',
				value: '140000',
			},
			{
				label: '内蒙古',
				value: '150000',
			},
			{
				label: '辽宁',
				value: '210000',
			},
			{
				label: '吉林',
				value: '220000',
			},
			{
				label: '黑龙江',
				value: '230000',
			},
			{
				label: '上海',
				value: '310000',
			},
			{
				label: '江苏',
				value: '320000',
			},
			{
				label: '浙江',
				value: '330000',
			},
			{
				label: '安徽',
				value: '340000',
			},
			{
				label: '福建',
				value: '350000',
			},
			{
				label: '江西',
				value: '360000',
			},
			{
				label: '山东',
				value: '370000',
			},
			{
				label: '河南',
				value: '410000',
			},
			{
				label: '湖北',
				value: '420000',
			},
			{
				label: '湖南',
				value: '430000',
			},
			{
				label: '广东',
				value: '440000',
			},
			{
				label: '广西',
				value: '450000',
			},
			{
				label: '海南',
				value: '460000',
			},
			{
				label: '重庆',
				value: '500000',
			},
			{
				label: '四川',
				value: '510000',
			},
			{
				label: '贵州',
				value: '520000',
			},
			{
				label: '云南',
				value: '530000',
			},
			{
				label: '陕西',
				value: '610000',
			},
			{
				label: '甘肃',
				value: '620000',
			},
			{
				label: '青海',
				value: '630000',
			},
			{
				label: '宁夏',
				value: '640000',
			},
			{
				label: '新疆',
				value: '650000',
			},
		],
	},
	{
		title: '商品类型',
		key: 'type',
		isShow: true,
		multiple: true,
		options: [
			{
				label: '不限',
				value: '',
			},
			{
				label: '食品类',
				value: '1',
			},
			{
				label: '服装类',
				value: '2',
			},
			{
				label: '家具类',
				value: '3',
			},
			{
				label: '日用品类',
				value: '4',
			},
		],
	},
]);
// 学校列表
const schoolList = [
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0001',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0002',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0003',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0004',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0005',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0006',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0007',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0008',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0004',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0005',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0006',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
	{
		name: '广西科技师范学院',
		tag: ['广西', '师范'],
		img: 'https://c1.kuiban.cn/college/image/logo2/0b058e0ebf64c04f246e1e4e4b433eb3.jpg',
		id: '0007',
		schoolImg:
			'https://c1.kuiban.cn/college/image/scenery/44f24a369c026a00ffae332c6280535a.jpg',
	},
];
</script>
<style scoped>
.list-border {
	border-bottom: 1px solid var(--color-neutral-3);
	border-top: 1px solid var(--color-neutral-3);
}
</style>
