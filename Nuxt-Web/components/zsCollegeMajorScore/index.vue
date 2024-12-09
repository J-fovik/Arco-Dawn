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
								form.pc = '';
								checkChange();
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
					@change="
						() => {
							form.pc = '';
							checkChange();
						}
					"
				/>
				<a-select
					:style="{ width: '150px' }"
					v-model="form.pc"
					:options="[...NO_LIMIT_NULL_OPTIONS, ...pcList]"
					placeholder="批次"
					allow-clear
					@change="checkChange()"
				/>
				<a-input
					:style="{ width: '260px' }"
					v-model.trim="form.zymc"
					placeholder="请输入专业名称"
					allow-clear
					@change="checkChange()"
				>
					<template #prefix>
						<icon-search />
					</template>
				</a-input>
			</a-space>
		</div>
		<a-table
			class="mt-[20px] cursor-pointer relative"
			:columns="createTableColumns()"
			:data="userInfo?.vipStateValue == '1' ? data : data?.splice(0, 10)"
			:pagination="userInfo?.vipStateValue == '1' ? true : false"
			:loading="status === 'pending'"
			:bordered="{ wrapper: true, cell: true }"
			:row-class="rowClass"
		>
			<template #zymc="{ record }">
				<div class="text-left">{{ textFormat(record.zymc) }}</div>
			</template>
			<template #lqrs="{ record }">
				<div class="text-right">{{ textFormat(turnThousandth(record.lqrs)) }}</div>
			</template>
			<template #zgf="{ record }">
				<div class="text-right">{{ textFormat(record.zgf) }}</div>
			</template>
			<template #pjf="{ record }">
				<div class="text-right">{{ textFormat(record.pjf) }}</div>
			</template>
			<template #zdf="{ record }">
				<div class="text-right">{{ textFormat(record.zdf) }}</div>
			</template>
			<template #zdfwc="{ record }">
				<div class="text-right">{{ textFormat(turnThousandth(record.zdfwc)) }}</div>
			</template>
		</a-table>
		<div
			class="w-full absolute top-[60%]"
			v-if="userInfo?.vipStateValue != '1' && data?.length > 3"
		>
			<nuxt-link to="/personal?tab=memberCenter">
				<div
					class="w-[254px] mx-auto h-[50px] bg-[#FFA864] text-white font-bold leading-[50px] text-center rounded-[40px] cursor-pointer"
				>
					开通VIP查看全部内容
				</div>
			</nuxt-link>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsCollegeMajorScore">
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 路由信息
const route = useRoute();
// 用户信息
const { userInfo } = useUser();
// form
const { form } = useForm(() => ({
	id: route.params.id,
	sf: userInfo.value.province,
	zymc: '',
	pc: '',
	kl: '',
}));
// 获取年份数据
const { data: nfData } = await useAsyncData(
	'majorNfList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.MAJOR_SCORE_GET_NF, {
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
	'majorKlList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.MAJOR_SCORE_KL_LIST, {
			body: {
				id: form.value.id,
				sf: form.value.sf,
				nf: nfData.value.nf,
			},
		});
		const result =
			res?.data?.map((o: any) => {
				return {
					value: o?.kl,
					label: o?.kl,
				};
			}) ?? [];
		// 暴露数据
		return result;
	},
	{
		default: () => [],
	}
);
// 获取批次数据
const { data: pcList } = useAsyncData(
	'majorPcList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_MAJOR_SCORE_PC, {
			body: {
				id: form.value.id,
				sf: form.value.sf,
				nf: nfData.value.nf,
				kl: form.value.kl,
			},
		});
		const result =
			res?.data?.map((o: any) => {
				return {
					value: o?.pc,
					label: o?.pc,
				};
			}) ?? [];
		// 暴露数据
		return result;
	},
	{
		default: () => [],
	}
);
// 获取专业分数信息
const { data, status, refresh } = await useAsyncData(
	'majorScoreList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_MAJOR_SCORE, {
			body: {
				id: form.value.id,
				sf: form.value.sf,
				nf: nfData.value.nf,
				kl: form.value.kl,
				pc: form.value.pc,
				zymc: form.value.zymc,
			},
		});
		// 暴露数据
		return res?.data;
	},
	{
		default: () => [],
		immediate: false,
	}
);
onMounted(() => {
	refresh();
});
// 校验是否为vip
const checkChange = () => {
	if (userInfo.value?.vipStateValue != '1') {
		return $zsMsg('waring', '开通会员 查看更多');
	} else {
		refresh();
	}
};
// 当前列样式
const rowClass = (record: any, rowIndex: number) => {
	return userInfo.value?.vipStateValue != '1' && rowIndex > 2 ? 'f-blur' : '';
};
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
			title: '院校代码',
			dataIndex: 'yxdm',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(record.yxdm);
			},
		},
		{
			title: '招生批次',
			dataIndex: 'pc',
			align: 'center',
			ellipsis: true,
			tooltip: true,
			width: 150,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(record.pc);
			},
		},
		{
			title: '专业名称',
			dataIndex: 'zymc',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'zymc',
		},
		{
			title: '招录人数',
			dataIndex: 'lqrs',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'lqrs',
		},
		{
			title: '最高分',
			dataIndex: 'zgf',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'zgf',
		},
		{
			title: '平均分',
			dataIndex: 'pjf',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'pjf',
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
	];
};
</script>
<style scoped>
:deep(.arco-select-view-single) {
	background-color: white;
	border: 1px solid #ededed;
}
:deep(.arco-input-wrapper) {
	background-color: white;
	border: 1px solid #ededed;
}
:deep(.f-blur .arco-table-td) {
	filter: blur(6px);
}
</style>
