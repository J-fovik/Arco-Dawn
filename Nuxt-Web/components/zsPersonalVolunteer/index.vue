<template>
	<div>
		<div class="text-[24px] leading-[28px] font-bold mb-[20px]">我的志愿</div>
		<!-- 未填用户信息 -->
		<div v-if="!userInfo.score" class="flex items-center justify-between">
			<div class="text-[#5AB9FF]">
				<i class="iconfont icon-tanhao text-[13px]" />
				设置成绩分数及选考科目后，才可以志愿填报！
			</div>
			<!-- <div
				class="w-[112px] h-[47px] leading-[47px] text-center bg-[#FFF7F0] text-[#FFA864] rounded-[8px] text-[18px] cursor-pointer"
				@click="
					determineLogin(() =>
						setSelectRow({ ...userInfo, id: '' }, () =>
							setActiveKey('ZsChoiceChangeScoreModal')
						)
					)
				"
			>
				创建成绩
			</div> -->
		</div>
		<!-- 已填用户信息 -->
		<div v-else class="flex items-center justify-between">
			<div>
				<div v-if="data[0]">
					<span class="mr-[5px]">当前志愿成绩:</span>
					<span class="text-[#FFA864]">
						<span>{{ data[0]?.xk }}</span>
						<span class="mx-[10px]">{{ data[0]?.score + '分' }}</span>
						<span>{{ turnThousandth(data[0]?.wc) + '位' }}</span>
					</span>
					<span class="ml-[20px] mr-[10px]">类型:</span>
					<span class="text-[#FFA864]">普通类</span>
				</div>
			</div>
			<div>
				<a-space size="medium" class="cursor-pointer">
					<div
						v-if="data[0]"
						class="w-[112px] h-[47px] leading-[47px] text-center bg-[#FFF7F0] text-[#FFA864] rounded-[8px] text-[18px]"
						@click="
							setSelectRow(data[0], () => setActiveKey('ZsChoiceChangeScoreModal'))
						"
					>
						修改成绩
					</div>
					<div
						class="w-[112px] h-[47px] leading-[47px] text-center bg-[#7C92FF] text-white rounded-[8px] text-[18px]"
						@click="navigateTo(`/choice/buildWish`)"
					>
						新建志愿表
					</div>
				</a-space>
			</div>
		</div>
		<a-table
			class="mt-[20px] cursor-pointer"
			table-layout-fixed
			:columns="createTableColumns()"
			:data="data"
			:loading="status === 'pending'"
			:pagination="pagination"
			@page-change="onPageChange"
			@page-size-change="onPageSizeChange"
			:bordered="{ wrapper: true, cell: true }"
		>
			<template #operate="{ record }">
				<div class="text-[14px] text-[#FFA864]">
					<div>
						<a-space>
							<div @click="navigateTo(`/choice?wid=${record.id}`)">继续填报</div>
							<div
								v-if="userInfo?.vipStateValue == '1'"
								@click="navigateTo(`/choice/detail?wid=${record.id}`)"
							>
								查看
							</div>
						</a-space>
					</div>
					<div>
						<a-space>
							<div @click="exportFile(record)">导出</div>
							<div @click="deleteWish(record)">删除</div>
						</a-space>
					</div>
				</div>
			</template>
		</a-table>
		<!-- 修改志愿表分数 -->
		<zs-choice-change-score-modal
			v-if="activeKey === 'ZsChoiceChangeScoreModal'"
			:data="form.selectRow"
			:isRequest="true"
			@cancel="setSelectRow({}, () => setActiveKey(null))"
			@success="
				() => {
					setSelectRow({}, () => setActiveKey(null)), refresh();
				}
			"
		/>
	</div>
</template>

<script setup lang="ts" name="ZsPersonalVolunteer">
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 确定模态框
const { warningModal } = useModal();
// 网站全局控制
const { setGlobalLoading } = useLoading();
// 用户信息
const { userInfo, determineLogin } = useUser();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form } = useForm(() => ({
	selectRow: {} as any, // 当前数据
}));
// 父组件方法
const emits = defineEmits(['change']);
// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	refresh();
});
// 列属性
const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '志愿表名称',
			dataIndex: 'zybt',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
		},
		{
			title: '成绩',
			dataIndex: 'score',
			width: 100,
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
		},
		{
			title: '批次',
			dataIndex: 'pc',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#FFFFFF',
				fontWeight: 'bold',
			},
			render: ({ record }) => {
				return textFormat(record.pc);
			},
		},
		{
			title: '创建时间',
			dataIndex: 'createTm',
			align: 'center',
			width: 200,
			ellipsis: true,
			tooltip: true,
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
// 志愿表导出
const exportFile = async (row: any) => {
	warningModal(`确定导出志愿表吗`, async (done) => {
		// 开启loading
		setGlobalLoading(true);
		// 关闭弹窗
		done(true);
		const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_EXCEL, {
			body: {
				id: row.id, // 志愿表id
			},
			responseType: 'blob',
		});
		if (res) {
			// 关闭loading
			setGlobalLoading(false);
			// 下载
			downloadBlob(res, `${row.zybt}.xlsx`);
		}
	});
};
// 删除志愿
const deleteWish = async (row: any) => {
	warningModal(`确定删除当前志愿吗`, async (done) => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.DELETE_MY_WISH, {
			body: {
				id: row.id, // 当前列id
			},
		});
		// 关闭弹窗
		done(true);
		if (res) {
			// 重新请求志愿列表
			await refresh();
			// 成功提示
			$zsMsg('success', res.data);
		}
	});
};
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	form.value.selectRow = row;
	if (callBack) callBack();
};
// 获取我的志愿列表
const { data, status, refresh } = await useAsyncData<any>(
	'volunteerList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_MY_WISH, {
			body: {
				currentPage: 1,
				pageSize: 10,
				pagingOrNot: 1,
			},
		});
		pagination.value.total = res?.data?.totalCount ?? 0;
		return res.data?.list ?? [];
	},
	{ default: () => [], immediate: false }
);
onMounted(() => {
	refresh();
});
</script>
