<template>
	<div>
		<div>
			<!-- 筛选条件 -->
			<a-space>
				<client-only>
					<a-select
						:style="{ width: '150px' }"
						v-model="nfData.nf"
						:options="nfData?.nfList"
						placeholder="年份"
						@change="
							() => {
								form.kl = '';
								refresh();
							}
						"
					/>
				</client-only>
				<a-select
					:style="{ width: '150px' }"
					v-model="form.kl"
					:options="[...NO_LIMIT_NULL_OPTIONS, ...klList]"
					placeholder="科类"
					allow-clear
					@change="refresh()"
				/>
			</a-space>
		</div>
		<a-table
			class="mt-[20px] cursor-pointer"
			:columns="createTableColumns()"
			:data="data"
			:loading="status === 'pending'"
			:bordered="{ wrapper: true, cell: true }"
		>
			<template #pc="{ record }">
				<div class="text-center">{{ textFormat(record.pc) }}</div>
			</template>
			<template #zslx="{ record }">
				<div class="text-center">{{ textFormat(record.zslx) }}</div>
			</template>
			<template #zdf="{ record }">
				<div class="text-right">{{ textFormat(record.zdf) }}</div>
			</template>
			<template #zdfwc="{ record }">
				<div class="text-right">{{ textFormat(turnThousandth(record.zdfwc)) }}</div>
			</template>
			<template #skx="{ record }">
				<div class="text-right">{{ textFormat(turnThousandth(record.skx)) }}</div>
			</template>
		</a-table>
	</div>
</template>

<script setup lang="ts" name="ZsCollegeScore">
// 全局插件
const { $zsFetch } = useNuxtApp();
// 路由信息
const route = useRoute();
// 用户信息
const { userInfo } = useUser();
// form
const { form } = useForm(() => ({
	sf: userInfo.value.province,
	id: route.params.id,
	kl: '',
}));
// 获取年份数据
const { data: nfData } = await useAsyncData(
	'nfList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.SCHOOL_SCORE_GET_NF, {
			body: {
				sf: form.value.sf,
			},
		});
		const result =
			res?.data?.map((o: any) => {
				return {
					value: String(o),
					label: String(o),
				};
			}) ?? [];
		// 暴露数据
		return {
			nfList: result,
			nf: result[0]?.value ?? '',
		};
	},
	{
		default: () => ({
			nfList: [],
			nf: '',
		}),
	}
);
// 获取科类数据
const { data: klList } = useAsyncData(
	'klList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.SCHOOL_SCORE_KL_LIST, {
			body: {
				id: form.value.id,
				sf: form.value.sf,
				nf: nfData.value.nf,
			},
		});
		const result =
			res?.data?.map((o: any) => {
				return {
					value: o.kl,
					label: o.kl,
				};
			}) ?? [];
		// 暴露数据
		return result;
	},
	{
		default: () => [],
	}
);
// 获取学校分数信息
const { data, status, refresh } = await useAsyncData(
	'schoolScoreList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_SCHOOL_SCORE, {
			body: {
				id: form.value.id,
				sf: form.value.sf,
				nf: nfData.value.nf,
				kl: form.value.kl,
			},
		});
		// 暴露数据
		return res?.data;
	},
	{
		default: () => [],
	}
);
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '年份',
			dataIndex: 'nf',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
		},
		{
			title: '录取批次',
			dataIndex: 'pc',
			align: 'center',
			ellipsis: true,
			tooltip: true,
			headerCellStyle: {
				fontSize: '14px',
				textAlign: 'center',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'pc',
		},
		{
			title: '招生类型',
			dataIndex: 'zslx',
			align: 'center',
			ellipsis: true,
			tooltip: true,
			headerCellStyle: {
				fontSize: '14px',
				textAlign: 'center',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'zslx',
		},
		{
			title: '最低分',
			dataIndex: 'zdf',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'zdf',
		},
		{
			title: '最低位次',
			dataIndex: 'zdfwc',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'zdfwc',
		},
		{
			title: '省控线',
			dataIndex: 'skx',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'skx',
		},
	];
};
</script>
<style scoped>
:deep(.arco-select-view-single) {
	background-color: white;
	border: 1px solid #ededed;
}
</style>
