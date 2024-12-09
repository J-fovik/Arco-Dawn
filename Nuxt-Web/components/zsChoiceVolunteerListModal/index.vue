<template>
	<zs-base-modal content-class="w-[1100px]" title="" align-center @cancel="$emit('cancel')">
		<div class="leading-loose text-xs h-[85vh] flex flex-col">
			<div class="flex items-center justify-between mr-[50px]">
				<div class="f-c-c">
					<!-- 志愿表名称 -->
					<a-tooltip :content="form?.zybt" position="bottom">
						<div class="text-[22px] font-bold truncate max-w-[180px]">
							{{ form?.zybt }}
						</div>
					</a-tooltip>
					<!-- 操作 -->
					<a-space class="text-[12px] text-[#999999] ml-[20px]">
						<!-- 修改名称 -->
						<div
							class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer"
							@click="
								setSelectRow({ name: form?.zybt, id: form?.id }, () =>
									setActiveKey('ZsChoiceChangeNameModal')
								)
							"
						>
							<i class="iconfont icon-chuangzuo fontSize mr-[3px]" />修改名称
						</div>
						<!-- 排序 -->
						<a-popover trigger="hover" position="bottom">
							<div
								class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer"
							>
								<i class="iconfont icon-paixu fontSize mr-[3px]" />排序
							</div>
							<template #content>
								<div
									class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"
									@click="changeWishSort('1', '预测概率排序')"
								>
									按预测概率排序
								</div>
								<div
									class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"
									@click="changeWishSort('2', '去年录取排序')"
								>
									按去年录取排序
								</div>
							</template>
						</a-popover>
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
						<!-- 清空志愿 -->
						<div
							class="bg-[#F4F6F8] leading-[32px] px-[10px] rounded-[4px] cursor-pointer"
							@click="clearWish"
						>
							<i class="iconfont icon-shanchu fontSize mr-[3px]" />清空
						</div>
						<!-- 拖动 -->
						<div
							v-if="!form.searchName"
							class="leading-[32px] px-[10px] rounded-[4px] cursor-pointer"
							:class="{
								'bg-[#7C92FF] text-white': form.draggable,
								'bg-[#F4F6F8]': !form.draggable,
							}"
							@click="form.draggable = !form.draggable"
						>
							<i class="iconfont icon-tuodong fontSize mr-[3px]" />{{
								form.draggable ? '拖动完成' : '拖动'
							}}
						</div>
					</a-space>
					<a-input
						v-if="!form.draggable"
						class="ml-[30px]"
						:style="{ width: '260px' }"
						v-model.trim="form.searchName"
						placeholder="搜索关键词"
						@clear="volunteerRefresh()"
						@change="volunteerRefresh()"
						allow-clear
					>
						<template #prefix>
							<icon-search />
						</template>
					</a-input>
				</div>
				<!-- 冲稳保 -->
				<div class="flex items-center justify-end ml-[50px]">
					<div class="w-[6px] h-[6px] rounded-[50%] bg-[#7C92FF] mx-[5px]"></div>
					<div>冲{{ volunteerData.csum }}</div>
					<div class="w-[6px] h-[6px] rounded-[50%] bg-[#5AB9FF] mx-[5px]"></div>
					<div>稳{{ volunteerData.wsum }}</div>
					<div class="w-[6px] h-[6px] rounded-[50%] bg-[#FFA864] mx-[5px]"></div>
					<div>保{{ volunteerData.bsum }}</div>
				</div>
			</div>
			<div class="flex-1 overflow-auto no-scrollbar">
				<!-- 专业+院校 -->
				<zs-choice-major-table
					v-if="props.data.isSchoolGroup === '1'"
					:data="{ list: volunteerData.list, year: volunteerData.year }"
					:loading="volunteerStatus === 'pending'"
					:draggable="form.draggable ? true : false"
					@draggable="draggableTable"
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
									:max="form.zyTop"
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
												wid: form.id,
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
				<div v-if="props.data.isSchoolGroup === '2'">
					<div
						class="bg-[#F9F9F9] text-[#333] text-[14px] flex items-center leading-[48px] font-bold text-center"
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
					<a-spin :loading="volunteerStatus === 'pending'" class="w-full min-h-[60vh]">
						<!-- 志愿列表 -->
						<div v-if="volunteerData.list.length">
							<zs-draggable-list
								:default-list="volunteerData.list"
								item-class="bg-[#F9F9F9]"
								:isDraggable="form.draggable"
								@draggable="draggableTableGroup"
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
																:max="form.zyTop"
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
																			wid: form.id,
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
										:isDraggable="form.draggable"
										@draggable="draggableTableGroup"
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
																	:max="form.zyTop"
																	hide-button
																	@blur="record.isInput = false"
																	@change="inputFinish(record)"
																	v-model.trim="record.zySeq"
																>
																</a-input-number>
															</div>
														</div>
														<div
															class="flex items-center justify-around"
														>
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
																				wid: form.id,
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
			</div>
		</div>
		<!-- 修改志愿表名称 -->
		<zs-choice-change-name-modal
			v-if="activeKey === 'ZsChoiceChangeNameModal'"
			:name="form.zybt"
			:id="form.id"
			@cancel="setSelectRow({}, () => setActiveKey(null))"
			@success="changeNameSuccess"
		/>
		<!-- 可报专业 -->
		<zs-choice-eligible-major-modal
			v-if="activeKey === 'ZsChoiceEligibleMajorModal'"
			:data="form.selectRow"
			@cancelVolunteer="cancelVolunteer"
			@addVolunteer="addVolunteer"
			@cancel="setSelectRow({}, () => setActiveKey(null))"
		/>
	</zs-base-modal>
</template>
<script setup lang="ts" name="zsChoiceVolunteerListModal">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => {},
	}
);
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 确定模态框
const { warningModal } = useModal();
// 网站全局控制
const { setGlobalLoading } = useLoading();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form } = useForm(() => ({
	...props.data,
	selectRow: {} as any,
	searchName: '',
	draggable: false,
}));
// 父组件方法
const emits = defineEmits(['cancel', 'changeName', 'init', 'cancelVolunteer', 'addVolunteer']);
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	form.value.selectRow = row;
	if (callBack) callBack();
};
// 修改志愿名称成功
const changeNameSuccess = (val: any) => {
	setSelectRow({}, () => setActiveKey(null));
	// 赋值志愿表名称
	form.value.zybt = val;
	// 通知父组件改变名称成功
	emits('changeName');
};
// 志愿表排序
const changeWishSort = async (sortType: any, tip: any) => {
	warningModal(`此操作将根据${tip}，操作后不可撤销?`, async (done) => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_SORT, {
			body: {
				id: form.value.id, // 志愿表id
				sortType: sortType,
			},
		});
		// 关闭弹窗
		done(true);
		if (res) {
			volunteerData.value.list = [];
			// 刷新数据
			await volunteerRefresh();
			// 成功提示
			$zsMsg('success', res.data);
			// 通知父组件请求数据
			emits('init', 'sort');
		}
	});
};
// 志愿表导出
const exportFile = async () => {
	warningModal(`确定导出志愿表吗`, async (done) => {
		// 开启loading
		setGlobalLoading(true);
		// 关闭弹窗
		done(true);
		const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_EXCEL, {
			body: {
				id: form.value.id, // 志愿表id
			},
			responseType: 'blob',
		});
		if (res) {
			// 关闭loading
			setGlobalLoading(false);
			// 下载
			downloadBlob(res, `${form.value.zybt}.xlsx`);
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
				id: form.value.id, // 志愿表id
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
// 清空志愿
const clearWish = async () => {
	warningModal(`确定清空当前志愿吗`, async (done) => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.CLEAR_WISH, {
			body: {
				id: form.value.id, // 志愿表id
			},
		});
		// 关闭弹窗
		done(true);
		if (res) {
			// 重新请求志愿列表
			await volunteerRefresh();
			// 成功提示
			$zsMsg('success', res.data);
			// 通知父组件请求数据
			emits('init', 'clear');
		}
	});
};
// 删除志愿
const deleteWish = async (row: any) => {
	warningModal(`确定删除当前志愿吗`, async (done) => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.DELETE_WISH_BY_ID, {
			body: {
				// 删院校下专业只传id,删院校时不传id传其他值
				id: row.yxSeq ? '' : row.id, // 当前列id
				wid: row.yxSeq ? form.value.id : '', // 志愿表id
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
			// 通知父组件请求数据
			emits('init', 'delete');
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
	// 清空志愿表防止缓存
	volunteerData.value.list = [];
	// 重新请求数据
	await volunteerRefresh();
	$zsMsg('success', '顺序调整成功!');
	// 通知父组件请求数据
	emits('init', 'input');
	// 清空当前值
	setSelectRow(null);
};
// 输入框排序
const wishInputSort = async () => {
	let params = {} as any;
	// 专业+院校模式
	if (props.data.isSchoolGroup === '1') {
		params = {
			id: form.value.selectRow.id, // 改变当前的id
			zySeq: form.value.selectRow.zySeq, // 改变当前的志愿
			wid: form.value.id, // 志愿表id
		};
	} else {
		params = {
			yxmc: form.value.selectRow.yxmc,
			yxSeq: form.value.selectRow.yxSeq,
			wid: form.value.id, // 志愿表id
			// zySeq: form.value.selectRow.zySeq,
			id: form.value.selectRow.id,
		};
	}
	const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_INPUT_SORT, {
		body: params,
	});
	if (err) return;
};
// 拖拽拖拽排序
const wishDragSort = async () => {
	const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_DRAG_SORT, {
		body: {
			list: JSON.stringify(volunteerData.value.list),
			wid: form.value.id, // 志愿表id
		},
	});
	if (err) return false;
	return true;
};
// 志愿取消事件
const cancelVolunteer = (row: any) => {
	// 清空志愿表防止缓存
	volunteerData.value.list = [];
	// 重新请求志愿表
	volunteerRefresh();
	// 通知父组件
	emits('cancelVolunteer', row);
};
// 添加志愿
const addVolunteer = (row: any) => {
	// 清空志愿表防止缓存
	volunteerData.value.list = [];
	// 重新请求志愿表
	volunteerRefresh();
	// 通知父组件
	emits('addVolunteer', row);
};
// 拖拽表格事件
const draggableTable = async (data: any) => {
	volunteerData.value.list = data;
	// 拖拽排序
	const isRes = await wishDragSort();
	if (isRes) {
		volunteerData.value.list = [];
		// 重新请求数据
		await volunteerRefresh();
		$zsMsg('success', '顺序调整成功!');
		// 通知父组件请求数据
		emits('init', 'drag');
	}
};
const draggableTableGroup = async (data: any, event: any) => {
	// 表示拖动的是院校下专业
	if (event.data.zySeq) {
		volunteerData.value.list.find((o: any) => o.yxmc === event.data.yxmc).children = data;
	} else {
		volunteerData.value.list = data;
	}
	// 拖拽排序
	const isRes = await wishDragSort();
	if (isRes) {
		volunteerData.value.list = [];
		// 重新请求数据
		await volunteerRefresh();
		$zsMsg('success', '顺序调整成功!');
		// 通知父组件请求数据
		emits('init', 'drag');
	}
};
// 获取志愿列表
const {
	data: volunteerData,
	status: volunteerStatus,
	refresh: volunteerRefresh,
} = await useAsyncData(
	'volunteerList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
			body: {
				id: form.value.id, // 志愿表id
				name: form.value.searchName,
				pagingOrNot: 1,
			},
		});
		// 暴露数据
		return {
			list:
				res?.data?.list?.map((item: any) => {
					return {
						...item,
						child: item.children,
						// children: null,
						isInput: false,
					};
				}) ?? [],
			csum: res?.data?.csum ?? 0,
			wsum: res?.data?.wsum ?? 0,
			bsum: res?.data?.bsum ?? 0,
			year: res?.data?.year ?? 2024,
		} as any;
	},
	{
		default: () => ({
			list: [],
			cSum: 0,
			wSum: 0,
			bSum: 0,
			year: 2024,
		}),
		immediate: false,
	}
);
onMounted(() => {
	// 请求志愿表
	volunteerRefresh();
});
</script>
<style scoped>
:deep(.arco-radio-group .arco-radio) {
	margin-left: 0px;
	margin-right: 0px;
	padding-left: 0;
}
:deep(.arco-radio-group) {
	border-radius: 4px !important;
}
.fontSize {
	font-size: 12px;
}
:deep(.arco-popover-popup-content) {
	padding: 0 !important;
}
.p0 {
	padding: 0px;
}
ul {
	list-style: none;
	padding: 0;
	border: 1px solid #999;
	overflow: hidden;
}

.card-item {
	height: 100px;
	padding: 10px;
	width: 12.5%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	cursor: move;
	float: left;
	border: 1px solid #999;
	box-sizing: border-box;
}
</style>
