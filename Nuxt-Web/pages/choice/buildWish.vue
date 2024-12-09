<template>
	<div class="max-w-container mx-auto min-h-[60vh]">
		<div class="flex items-center justify-between mt-[10px]">
			<div>
				我的成绩:
				<span
					class="text-[#FFA864] cursor-pointer"
					@click="setSelectRow(form, () => setActiveKey('ZsChoiceChangeScoreModal'))"
					>{{ form.xk }} {{ form.score + '分' }}
					{{ turnThousandth(form.wc) + '位' }}
					<i class="iconfont icon-chuangzuo"
				/></span>
				<span class="ml-[20px]">类型:<span class="text-[#FFA864]">普通类</span></span>
			</div>
			<div
				class="border border-solid border-[#EDEDED] rounded-[8px] leading-[41px] px-[10px] cursor-pointer"
				@click="navigateTo(`/personal?tab=myVolunteer`)"
			>
				我的志愿表
			</div>
		</div>
		<!-- 已建志愿表编辑 -->
		<template v-if="pcData?.wish?.id">
			<zs-title title="已建志愿表编辑" size="small" class="mt-[10px]" />
			<div class="bg-[#F2F5FF] p-[20px] flex items-center justify-between mt-[20px]">
				<div>
					继续编辑模拟志愿表 <span class="text-[#FFA864]">{{ pcData?.wish?.zybt }}</span
					>，或进入 <span class="text-[#7C92FF]">我的志愿表</span> 选择
				</div>
				<a-button
					type="primary"
					class="w-[150px] border-radius-4"
					@click="navigateTo(`/choice?wid=${pcData?.wish?.id}`)"
					>继续模拟填志愿</a-button
				>
			</div>
		</template>
		<!-- 新建模拟志愿表 -->
		<zs-title title="新建模拟志愿表" size="small" class="mt-[20px]" />
		<a-table
			class="mt-[20px] cursor-pointer"
			table-layout-fixed
			:columns="createTableColumns()"
			:data="pcData?.pcList"
			:loading="status === 'pending'"
			:pagination="false"
		>
			<template #operate="{ record }">
				<a-button type="primary" class="w-[110px] border-radius-4" @click="addWish(record)"
					>新建填志愿</a-button
				>
			</template>
		</a-table>
		<div class="mt-[20px] bg-[#FFF7F0] p-[20px] leading-[22px]">
			<div class="font-bold text-[14px]">系统使用须知</div>
			<div class="text-[12px]">
				<div>1、当前为2024年招生计划数据；</div>
				<div>
					2、本系统依据历年各院校录取数据提供模拟志愿服务，正式填报请前往考试院官网；
				</div>
				<div>
					3、在正式填报时，以教育考试院公布的最新招生计划为准，本系统会在第一时间将最新的招生计划进行更新；
				</div>
				<div>4、系统使用的“录取概率”根据过去历年的数据计算得出，仅作参考。</div>
			</div>
		</div>
		<!-- 修改志愿表分数 -->
		<zs-choice-change-score-modal
			v-if="activeKey === 'ZsChoiceChangeScoreModal'"
			:data="form.selectRow"
			@cancel="setSelectRow({}, () => setActiveKey(null))"
			@success="changeScore"
		/>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '查看志愿表',
});
// 页面信息
definePageMeta({
	requiresAuth: true,
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form } = useForm(() => ({
	...userInfo.value,
	selectRow: {} as any, // 当前数据
}));
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '批次',
			dataIndex: 'pc',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
		},
		{
			title: '科目类型',
			dataIndex: 'kl',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
		},
		{
			title: '批次线',
			dataIndex: 'score',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
		},
		{
			title: '操作',
			dataIndex: 'operate',
			align: 'center',
			ellipsis: true,
			tooltip: true,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
			slotName: 'operate',
		},
	];
};
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	form.value.selectRow = row;
	if (callBack) callBack();
};
// 新增志愿
const addWish = async (record: any) => {
	const [err, res] = await $zsFetch(API_URLS.CHOICE.ADD_WISH, {
		body: {
			xk: form.value.xk,
			score: form.value.score,
			wc: form.value.wc,
			pc: record.pc,
		},
	});
	// 去填报
	navigateTo(`/choice?wid=${res?.data}`);
};
// 分数改变
const changeScore = (item: any) => {
	const xkList =
		item.gkms === '3+3'
			? item.subjectList
			: [...item.firstSubjectList, ...item.secondSubjectList];
	form.value = {
		...form.value,
		...item,
		xk: xkList.join('/'),
	};
	// 关闭页面
	setSelectRow({}, () => setActiveKey(null));
	// 重新请求数据
	refresh();
};
// 查询可新增志愿批次列表
const {
	data: pcData,
	status,
	refresh,
} = await useAsyncData(
	'queryAddWishPcList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_ADD_WISH_PC_LIST, {
			body: {
				xk: form.value.xk,
				score: form.value.score,
			},
		});
		// 暴露数据
		return {
			pcList: res?.data?.pcList ?? [],
			wish: res?.data?.wish ?? {},
		} as any;
	},
	{
		default: () => ({
			pcList: [],
			wish: 2024,
		}),
	}
);
</script>
<style scoped>
.border-radius-4 {
	border-radius: 4px;
}
</style>
