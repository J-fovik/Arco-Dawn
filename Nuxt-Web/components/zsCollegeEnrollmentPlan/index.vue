<template>
	<div>
		<div v-if="!isDetail">
			<!-- 各专业招生计划 -->
			<zs-title title="各专业招生计划" size="small" />
			<div class="mt-[20px]">
				<a-space>
					<client-only>
						<a-select
							:style="{ width: '150px' }"
							v-model="nfData.nf"
							:options="nfData?.nfList"
							placeholder="年份"
							@change="
								() => {
									form.pc = '';
									form.kl = '';
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
						:style="{ width: '300px' }"
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
			<div class="relative">
				<a-table
					class="mt-[20px] cursor-pointer"
					:columns="createTableColumns()"
					:data="
						userInfo?.vipStateValue == '1'
							? data?.planMajorList
							: data?.planMajorList?.splice(0, 10)
					"
					:loading="status === 'pending'"
					:pagination="userInfo?.vipStateValue == '1' ? true : false"
					:bordered="{ wrapper: true, cell: true }"
					:row-class="rowClass"
				>
					<template #zymc="{ record }">
						<div class="text-left">{{ textFormat(record.zymc) }}</div>
					</template>
					<template #xk="{ record }">
						<div class="text-center">{{ textFormat(record.xk) }}</div>
					</template>
					<template #lqrs="{ record }">
						<div class="text-right">
							{{ textCompany(turnThousandth(record.lqrs, ''), '人') }}
						</div>
					</template>
					<template #xf="{ record }">
						<div class="text-right">
							{{ textCompany(turnThousandth(record.xf, ''), '元') }}
						</div>
					</template>
				</a-table>
				<div
					class="w-full absolute top-[60%]"
					v-if="userInfo?.vipStateValue != '1' && data?.planMajorList?.length > 3"
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
			<!-- 招生信息 -->
			<div class="mt-[30px]" v-if="data?.docList?.length">
				<zs-title title="招生信息" size="small" />
				<a-list class="list-border mt-[20px]" :bordered="false">
					<div
						class="p-[10px_20px] border-solid border border-[#EDEDED] rounded-[4px] cursor-pointer"
					>
						<div
							class="flex items-center justify-between leading-[50px] border-dashed border-b-[1px] border-[#EDEDED]"
							:class="{ 'border-none': index === data?.docList?.length - 1 }"
							v-for="(item, index) in data?.docList"
							:key="index"
							@click="setSelectRow(item)"
						>
							<div>{{ item.dtitle }}</div>
							<div class="text-[#999]">
								{{ formatDate(item.fbDt, 'YYYY-MM-DD') }}
							</div>
						</div>
					</div>
				</a-list>
			</div>
		</div>
		<!-- 专业详情 -->
		<div v-else>
			<div class="cursor-pointer" @click="setSelectRow({}, () => (isDetail = false))">
				<icon-arrow-left class="mr-[2px]" />返回
			</div>
			<zs-title :title="selectRow.dtitle" size="small" class="my-[20px]" />
			<div v-html="selectRow.content" class="leading-[30px]"></div>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsCollegeEnrollmentPlan">
// 路由信息
const route = useRoute();
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// form
const { form } = useForm(() => ({
	id: route.params.id,
	sf: userInfo.value.province,
	kl: '',
	pc: '',
	zymc: '',
}));
//  当前选中的值
const selectRow = ref({} as any);
// 是否是专业详情
const isDetail = ref(false);
// 获取年份数据
const { data: nfData } = await useAsyncData(
	'planNfList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.PLAN_GET_NF, {
			body: {
				sf: userInfo.value.province,
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
	'planKlList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.PLAN_GET_KL, {
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
	'planPcList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_PLAN_PC, {
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
// 获取招生计划信息
const { data, status, refresh } = await useAsyncData(
	'planList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_PLAN, {
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
		return {
			docList: res?.data?.docList ?? [],
			// 招生计划大于三展示 购买会员
			planMajorList: res?.data?.planMajorList ?? [],
		};
	},
	{
		default: () => ({
			docList: [],
			planMajorList: [],
		}),
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
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	selectRow.value = row;
	isDetail.value = true;
	// 滚动到顶部
	window.scrollTo(0, 0);
	if (callBack) callBack();
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
			width: 180,
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
			title: '选科要求',
			dataIndex: 'xk',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'xk',
		},
		{
			title: '学制',
			dataIndex: 'xz',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return record.xz.includes('年') ? record.xz : record.xz + '年';
			},
		},
		{
			title: '招生计划',
			dataIndex: 'lqrs',
			align: 'center',
			ellipsis: true,
			tooltip: true,
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'lqrs',
		},
		{
			title: '学费',
			dataIndex: 'xf',
			align: 'center',
			width: 120,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: 'white',
				fontWeight: 'bold',
			},
			slotName: 'xf',
		},
	];
};
</script>
<style scoped>
.list-border {
	border-bottom: 1px solid var(--color-neutral-3);
	border-top: 1px solid var(--color-neutral-3);
	border-left: 1px solid var(--color-neutral-3);
	border-right: 1px solid var(--color-neutral-3);
}
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
