<template>
	<div class="max-w-container mx-auto min-h-[60vh]">
		<template v-if="!volunteerInfo.error">
			<div class="flex items-center justify-between">
				<div class="mt-[20px]">
					<div class="text-[18px] font-bold">{{ volunteerInfo?.zybt }}</div>
					<div class="mt-[10px] text-[14px] text-[#999]">
						<span
							>成绩 {{ volunteerInfo?.xk }} {{ volunteerInfo?.score + '分' }}
							{{ volunteerInfo?.wc + '位' }}</span
						>
						<span class="ml-[10px]">批次：{{ textFormat(volunteerInfo?.pc) }}</span>
					</div>
				</div>
				<div>
					<a-space>
						<a-button
							type="primary"
							size="large"
							class="w-[90px]"
							@click="navigateTo(`/choice?wid=${volunteerInfo.id}`)"
						>
							继续填报
						</a-button>
						<!-- 导出 -->
						<a-popover trigger="hover" position="bottom">
							<div
								class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer"
							>
								<i class="iconfont icon-shangchuan fontSize mr-[3px]" />导出
							</div>
							<template #content>
								<div
									class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"
									@click="exportFile"
								>
									导出Excel(表格版)
								</div>
								<div
									class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"
									@click="openFile"
								>
									导出Pdf(打印版)
								</div>
							</template>
						</a-popover>
					</a-space>
				</div>
			</div>
			<zs-choice-major-table
				v-if="volunteerInfo.isSchoolGroup === '1'"
				class="mt-[30px]"
				:data="{ list: volunteerData.list, year: volunteerData.year }"
				:loading="volunteerStatus === 'pending'"
			>
				<template #operateTitle="{ record }">
					<div class="font-bold">操作</div>
				</template>
				<template #operate="{ record }">
					<div @click="clickWish(record)">
						<!-- 输入序号 -->
						<a-tooltip v-if="!record.isInput" content="输入序号">
							<div
								class="border-solid border border-[#EDEDED] w-[90px] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto"
							>
								志愿 {{ record.zySeq }} <icon-down class="ml-[4px]" />
							</div>
						</a-tooltip>
						<div v-else>
							<a-input-number
								:style="{ width: '90px' }"
								:precision="0"
								:min="0"
								:max="volunteerInfo?.zyTop"
								hide-button
								@blur="record.isInput = false"
								@change="inputFinish(record)"
								v-model.trim="record.zySeq"
							>
							</a-input-number>
						</div>
					</div>
					<a-space size="large">
						<!-- 删除 -->
						<a-tooltip content="删除">
							<div @click="deleteWish(record)">
								<i class="iconfont icon-shanchu text-[#7C92FF]" />
							</div>
						</a-tooltip>
						<!-- 加入可报专业 -->
						<a-tooltip content="加入可报专业">
							<div
								@click="
									setSelectRow(
										{
											yxid: record.yxid,
											yxmc: record.yxmc,
											yxdm: record.yxdm,
											wid: volunteerInfo?.id,
										},
										() => setActiveKey('ZsChoiceEligibleMajorModal')
									)
								"
							>
								<i class="iconfont icon-zengjia text-[#7C92FF]" />
							</div>
						</a-tooltip>
					</a-space>
				</template>
				<template #empty>
					<zs-no-data :url="'/images/no-volunteer.png'"> 暂无志愿 </zs-no-data>
				</template>
			</zs-choice-major-table>
			<!-- 院校+专业 或者 专业组 -->
			<div v-if="volunteerInfo.isSchoolGroup === '2'" class="mt-[30px]">
				<div
					class="bg-[#F9F9F9] text-[#333] text-[14px] flex items-center !leading-[48px] font-bold text-center"
				>
					<div class="w-[70px]">概率</div>
					<div class="flex-1">招生院校</div>
					<div class="w-[100px]">{{ volunteerData.year }}计划</div>
					<div class="w-[70px]"></div>
					<div class="w-[80px]">{{ volunteerData.year }}年份</div>
					<div class="w-[80px]">{{ volunteerData.year - 1 }}年份</div>
					<div class="w-[80px]">{{ volunteerData.year - 2 }}年份</div>
					<div class="w-[150px]">操作</div>
				</div>
				<a-spin
					:loading="volunteerStatus === 'pending'"
					class="w-full min-h-[60vh] !leading-[25px]"
				>
					<!-- 志愿列表 -->
					<div v-if="volunteerData.list.length">
						<zs-draggable-list
							:default-list="volunteerData.list"
							item-class="bg-[#F9F9F9] "
							:isDraggable="false"
						>
							<template #row="{ record }">
								<div class="border-b border-solid border-[#EDEDED]">
									<zs-choice-professional-group-item :data="record">
										<template #operate>
											<div class="mx-auto flex flex-col w-[90px]">
												<div @click="clickWish(record)">
													<!-- 输入序号 -->
													<a-tooltip
														v-if="!record.isInput"
														content="输入序号"
													>
														<div
															class="border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto"
														>
															院校 {{ record.yxSeq }}
															<icon-down class="ml-[4px]" />
														</div>
													</a-tooltip>
													<div v-else>
														<a-input-number
															:style="{ width: '90px' }"
															:precision="0"
															:min="0"
															:max="volunteerInfo.zyTop"
															hide-button
															@blur="record.isInput = false"
															@change="inputFinish(record)"
															v-model.trim="record.yxSeq"
														>
														</a-input-number>
													</div>
												</div>
												<div class="flex items-center justify-around">
													<!-- 删除 -->
													<a-tooltip content="删除">
														<div @click="deleteWish(record)">
															<i
																class="iconfont icon-shanchu text-[#7C92FF]"
															/>
														</div>
													</a-tooltip>
													<!-- 加入可报专业 -->
													<a-tooltip content="加入可报专业">
														<div
															@click="
																setSelectRow(
																	{
																		yxid: record.yxid,
																		yxmc: record.yxmc,
																		yxdm: record.yxdm,
																		wid: volunteerInfo?.id,
																	},
																	() =>
																		setActiveKey(
																			'ZsChoiceEligibleMajorModal'
																		)
																)
															"
														>
															<i
																class="iconfont icon-zengjia text-[#7C92FF]"
															/>
														</div>
													</a-tooltip>
												</div>
											</div>
										</template>
									</zs-choice-professional-group-item>
								</div>
							</template>
							<template #children="{ record }">
								<zs-draggable-list
									:default-list="record.children"
									item-class="bg-white border-b border-solid border-[#EDEDED]"
									:isDraggable="false"
								>
									<template #row="{ record }">
										<zs-choice-professional-group-item
											:data="record"
											:isMajor="true"
										>
											<template #operate>
												<div class="mx-auto flex flex-col w-[90px]">
													<div @click="clickWish(record)">
														<!-- 输入序号 -->
														<a-tooltip
															v-if="!record.isInput"
															content="输入序号"
														>
															<div
																class="border-solid border border-[#EDEDED] h-[32px] leading-[32px] f-c-c rounded-[4px] m-auto"
															>
																专业 {{ record.zySeq }}
																<icon-down class="ml-[4px]" />
															</div>
														</a-tooltip>
														<div v-else>
															<a-input-number
																:style="{ width: '90px' }"
																:precision="0"
																:min="0"
																:max="volunteerInfo.zyTop"
																hide-button
																@blur="record.isInput = false"
																@change="inputFinish(record)"
																v-model.trim="record.zySeq"
															>
															</a-input-number>
														</div>
													</div>
													<div class="flex items-center justify-around">
														<!-- 删除 -->
														<a-tooltip content="删除">
															<div @click="deleteWish(record)">
																<i
																	class="iconfont icon-shanchu text-[#7C92FF]"
																/>
															</div>
														</a-tooltip>
														<!-- 加入可报专业 -->
														<a-tooltip content="加入可报专业">
															<div
																@click="
																	setSelectRow(
																		{
																			yxid: record.yxid,
																			yxmc: record.yxmc,
																			yxdm: record.yxdm,
																			wid: volunteerInfo?.id,
																		},
																		() =>
																			setActiveKey(
																				'ZsChoiceEligibleMajorModal'
																			)
																	)
																"
															>
																<i
																	class="iconfont icon-zengjia text-[#7C92FF]"
																/>
															</div>
														</a-tooltip>
													</div>
												</div>
											</template>
										</zs-choice-professional-group-item>
									</template>
								</zs-draggable-list>
							</template>
						</zs-draggable-list>
					</div>
					<div v-else>
						<zs-no-data :url="'/images/no-volunteer.png'"> 暂无志愿 </zs-no-data>
					</div>
				</a-spin>
			</div>
			<!-- 可报专业 -->
			<zs-choice-eligible-major-modal
				v-if="activeKey === 'ZsChoiceEligibleMajorModal'"
				:data="form.selectRow"
				@cancelVolunteer="cancelVolunteer"
				@addVolunteer="addVolunteer"
				@cancel="setSelectRow({}, () => setActiveKey(null))"
			/>
		</template>
		<zs-no-data v-else>
			<div>糟糕，页面好像没找到</div>
		</zs-no-data>
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
const { $zsFetch, $zsMsg } = useNuxtApp();
// 网站全局控制
const { setGlobalLoading } = useLoading();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 路由信息
const route = useRoute();
// 确定模态框
const { warningModal } = useModal();
// form
const { form } = useForm(() => ({
	selectRow: {} as any, // 当前数据
	widErr: false, // 防止用户修改志愿id
	curWishInfo: {} as any,
}));
// 浏览器志愿表id
const wid = ref(route.query.wid);
// 计算出志愿表中丢失的最小数字
const smallestMissingNumber = computed(() => {
	const list =
		volunteerInfo.value.isSchoolGroup === '1'
			? filledInData.value?.list?.map((o: any) => o.zySeq) ?? []
			: form.value.curWishInfo!.children?.map((o: any) => o) ?? [];
	// 对数组进行排序
	let sortedNumbers = [...list].sort((a, b) => a - b);
	// 初始化最小缺失数字为1
	let smallestMissing = 1;
	// 遍历排序后的数组
	for (let i = 0; i < sortedNumbers.length; i++) {
		// 如果当前数字不等于最小缺失数字，则找到了缺失的最小数字
		if (sortedNumbers[i] !== smallestMissing) {
			return smallestMissing;
		}
		// 否则，更新最小缺失数字
		smallestMissing++;
	}
	// 如果所有数字都连续，则返回下一个数字
	return smallestMissing;
});
// 志愿表导出
const exportFile = async () => {
	warningModal(`确定导出志愿表吗`, async (done) => {
		// 开启loading
		setGlobalLoading(true);
		// 关闭弹窗
		done(true);
		const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_EXCEL, {
			body: {
				id: volunteerInfo.value.id, // 志愿表id
			},
			responseType: 'blob',
		});
		if (res) {
			// 关闭loading
			setGlobalLoading(false);
			// 下载
			downloadBlob(res, `${volunteerInfo.value.zybt}.xlsx`);
		}
	});
};
// 打开pdf文件
const openFile = async () => {
	warningModal(`确定导出志愿表吗`, async (done) => {
		// 开启loading
		setGlobalLoading(true);
		// 关闭弹窗
		done(true);
		const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_PDF, {
			body: {
				id: volunteerInfo.value.id, // 志愿表id
			},
		});
		if (res) {
			// 关闭loading
			setGlobalLoading(false);
			// 新页面打开pdf
			window.open(res.data, '_blank');
		}
	});
};
// 点击志愿
const clickWish = (record: any) => {
	// 赋值当前值
	setSelectRow(record);
	// 如果当前不是输入框，变成输入框
	if (!record.isInput) {
		record.isInput = true;
	}
};
// 输入完成
const inputFinish = async (record: any) => {
	// 不展示输入框
	record.isInput = false;
	// 排序
	await wishInputSort();
	volunteerData.value.list = [];
	// 重新请求数据
	await volunteerRefresh();
	$zsMsg('success', '顺序调整成功!');
	// 清空当前值
	setSelectRow(null);
};
// 删除志愿
const deleteWish = async (row: any) => {
	warningModal(`确定删除当前志愿吗`, async (done) => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.DELETE_WISH_BY_ID, {
			body: {
				// 删院校下专业只传id,删院校时不传id传其他值
				id: row.yxSeq ? '' : row.id, // 当前列id
				wid: row.yxSeq ? volunteerInfo.value.id : '', // 志愿表id
				yxmc: row.yxSeq ? row.yxmc : '',
			},
		});
		// 关闭弹窗
		done(true);
		if (res) {
			volunteerData.value.list = [];
			// 重新请求志愿列表
			await volunteerRefresh();
			// 成功提示
			$zsMsg('success', res.data);
		}
	});
};
// 输入框排序
const wishInputSort = async () => {
	let params = {} as any;
	if (volunteerInfo.value.isSchoolGroup === '1') {
		params = {
			id: form.value.selectRow.id, // 改变当前的id
			zySeq: form.value.selectRow.zySeq, // 改变当前的志愿
			wid: volunteerInfo.value?.id, // 志愿表id
		};
	} else {
		params = {
			yxmc: form.value.selectRow.yxmc,
			yxSeq: form.value.selectRow.yxSeq,
			wid: volunteerInfo.value?.id, // 志愿表id
			zySeq: form.value.selectRow.zySeq,
			id: form.value.selectRow.id,
		};
	}
	const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_INPUT_SORT, {
		body: params,
	});
	if (err) return;
};
// 添加志愿/取消志愿
const fillVolunteer = async (row: any, wishSort: number) => {
	const [err, res] = await $zsFetch(API_URLS.CHOICE.MAJOR_ADD_VOLUNTEER, {
		body: {
			id: row.id,
			wishId: volunteerInfo.value?.id,
			wishSort: wishSort,
		},
	});
	// 提示信息
	$zsMsg('success', res.data);
};
// 取消志愿
const cancelVolunteer = async (row: any) => {
	// 添加志愿/取消志愿
	await fillVolunteer(row, row.wSort);
	// 清空当前志愿
	row.wSort = '';
	// 查询已填报志愿
	filledInRefresh();
	volunteerData.value.list = [];
	// 请求志愿表
	volunteerRefresh();
};
// 专业添加志愿
const addVolunteer = async (row: any) => {
	// 院校分组
	if (volunteerInfo.value.isSchoolGroup === '1') {
		if (smallestMissingNumber.value > volunteerInfo.value?.zyTop) {
			// 提示信息
			$zsMsg('waring', '超过专业填报数量');
			return;
		}
		// 专业组分组
	} else {
		// 赋值当前id
		form.value.curWishInfo =
			filledInData.value?.specialList.find((o: any) => o.yxmc === row.yxmc) ?? {};
		if (smallestMissingNumber.value > volunteerInfo.value?.zyTop) {
			// 提示信息
			$zsMsg('waring', '超过专业填报数量');
			return;
		}
		if (filledInData.value?.specialList?.length > volunteerInfo.value?.yxTop) {
			// 提示信息
			$zsMsg('waring', '超过院校填报数量');
			return;
		}
	}
	// 添加志愿/取消志愿
	await fillVolunteer(row, smallestMissingNumber.value);
	// 赋值当前志愿
	row.wSort = smallestMissingNumber.value;
	// 查询已填报志愿
	filledInRefresh();
	volunteerData.value.list = [];
	// 请求志愿表
	volunteerRefresh();
};
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	form.value.selectRow = row;
	if (callBack) callBack();
};
// 获取志愿表信息
const { data: volunteerInfo, refresh: volunteerInfoRefresh } = await useAsyncData(
	'volunteerInfo',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_VOLUNTEER_INFO, {
			body: {
				id: wid.value ?? '', // 志愿表id
			},
		});
		let result = {} as any;
		// 处理错误
		if (res.data === '未知志愿') {
			result.error = true;
		} else {
			result = { ...res?.data, zyTop: res?.data?.zyTop * 1 };
		}
		// 暴露数据
		return result;
	},
	{
		default: () => {},
		watch: [wid],
	}
);
// 查询已填报志愿
const { data: filledInData, refresh: filledInRefresh } = useAsyncData(
	'filledIn',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
			body: {
				id: volunteerInfo.value.id, // 志愿表id
			},
		});
		const specialList =
			volunteerInfo.value.isSchoolGroup === '1'
				? res?.data
				: groupByAndMergeChildArrays(res?.data, 'yxmc', 'children', 'zySeq');
		// 暴露数据
		return {
			list: res.data ?? [],
			specialList: specialList ?? [],
			total: res?.data?.length ?? 0,
		};
	},
	{
		default: () => {},
	}
);
// 获取志愿列表
const {
	data: volunteerData,
	status: volunteerStatus,
	refresh: volunteerRefresh,
} = await useAsyncData(
	'volunteerDetailList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
			body: {
				id: volunteerInfo.value?.id, // 志愿表id
				pagingOrNot: 1,
			},
		});
		// 暴露数据
		return {
			list:
				res?.data?.list?.map((item: any) => {
					return {
						...item,
						isInput: false,
					};
				}) ?? [],
			year: res?.data?.year ?? 2024,
		} as any;
	},
	{
		default: () => ({
			list: [],
			year: 2024,
		}),
	}
);
</script>
