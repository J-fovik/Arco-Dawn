<template>
	<div>
		<!-- 搜索框 -->
		<div class="flex items-center mt-[20px]">
			<!-- 完全匹配 -->
			<div class="w-[150px]">
				<a-button size="large">
					<a-checkbox v-model="majorForm.isMatch" @change="majorResetData">
						完全匹配
					</a-checkbox>
				</a-button>
			</div>
			<!-- 搜索专业名称 -->
			<div class="w-full ml-[20px]">
				<a-input
					size="large"
					v-model.trim="majorForm.zymc"
					class="rounded-[8px] h-[38px]"
					placeholder="搜索专业名称"
					@clear="majorResetData"
					allow-clear
				>
					<template #prefix>
						<icon-search />
					</template>
				</a-input>
			</div>
			<div class="w-[120px] ml-[20px] rounded-[8px]">
				<a-button
					type="primary"
					class="openButton w-[120px]"
					size="large"
					@click="majorResetData"
				>
					搜索
				</a-button>
			</div>
		</div>
		<!-- 选择过滤 -->
		<zs-select-filter
			:data="[ccData, mlData, zylData]"
			:default-values="{
				...majorForm,
				levelCode: ccData?.levelCode,
				xkmldm: mlData?.xkmldm,
				zyldm: zylData?.zyldm,
			}"
			@change="majorChangeFilter"
			class="mt-[20px]"
		/>
		<a-spin :loading="loading" class="w-full">
			<template v-if="majorList?.length">
				<div v-for="(category, categoryIndex) in majorList" :key="categoryIndex">
					<!-- 专业门类 -->
					<div class="flex items-center m-[20px_0px_10px]">
						<div class="rounded-[0px_6px_6px_0px] bg-[#7C92FF] w-[8px] h-[20px]"></div>
						<div class="ml-[10px] text-[18px] text-[#333] font-bold">
							{{ category.xkml }}
						</div>
					</div>
					<div v-for="(middle, middleIndex) in category?.childs" :key="middleIndex">
						<div class="text-[#FFA864] font-bold">{{ middle.zyl }}</div>
						<!-- 专业列表 -->
						<a-list :bordered="false" class="mt-[10px]">
							<a-list-item
								v-for="(major, majorIndex) in middle?.childs"
								:key="major.id"
								class="border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
							>
								<!-- 专业信息 -->
								<div class="flex items-center justify-between">
									<div
										class="flex-1 cursor-pointer"
										@click="
											navigateTo(`/major/${major.id}`, {
												open: {
													target: '_blank',
												},
											})
										"
									>
										<div
											class="text-[16px] text-[#333333] mb-[10px] font-[500]"
										>
											{{ major.zymc }}
										</div>
										<div class="mt-[10px]">
											<a-space
												class="flex flex-wrap items-center text-[#999]"
											>
												<template #split>
													<span class="w-[2px] h-[8px] text-[#999]"
														>|</span
													>
												</template>
												<span
													class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
												>
													专业代码：{{ textFormat(major.zydm) }}
												</span>
												<span
													class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
												>
													修业年限：{{ textFormat(major.xyNx) }}
												</span>
												<span
													class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
												>
													授予学位：{{ textFormat(major.syxw) }}
												</span>
												<span
													class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
												>
													男女比例：{{ textFormat(major.xbBl) }}
												</span>
												<span
													class="leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
												>
													平均薪酬：<span class="text-price">{{
														textFormat(turnThousandth(major.pjxz))
													}}</span>
												</span>
											</a-space>
										</div>
									</div>
									<div
										class="w-[150px] text-[#FFA864] text-right cursor-pointer"
										@click="clickCollapsed(major, majorIndex)"
									>
										院校匹配：{{ turnThousandth(major?.yxsum, '0') }}个<i
											class="iconfont icon-xiala text-[#FFA864] ml-[3px]"
										/>
									</div>
								</div>
								<!-- 表格 -->
								<div v-if="major.collapsed">
									<div class="bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]">
										<template v-if="form.gkms === '3+3'">
											<span>选择科目：</span>
											<a-checkbox-group
												:max="3"
												v-model="curMajorMatchSchoolForm.subjectList"
												:options="
													form.province === '浙江'
														? SUBJECT_OPTIONS
														: SUBJECT_OPTIONS.slice(0, 6)
												"
												@change="changeSubject('3+3')"
											/>
										</template>
										<template v-if="form.gkms === '3+1+2'">
											<!-- 首选科目 -->
											<div>
												<span>首选科目：</span>
												<a-checkbox-group
													:max="1"
													v-model="
														curMajorMatchSchoolForm.firstSubjectList
													"
													:options="FIRST_CHOICE_SCIENCES_OPTIONS"
													@change="changeSubject('3+1+2')"
												/>
											</div>
											<!-- 次选科目 -->
											<div class="mt-[5px]">
												<span>次选科目：</span>
												<a-checkbox-group
													:max="2"
													v-model="
														curMajorMatchSchoolForm.secondSubjectList
													"
													:options="SECOND_CHOICE_SCIENCES_OPTIONS"
													@change="changeSubject('3+1+2')"
												/>
											</div>
										</template>
									</div>
									<div>
										共
										<span class="text-[#FFA864]"
											>【{{
												turnThousandth(
													form.curMajorMatchSchoolInfo?.schoolCount,
													'0'
												)
											}}】</span
										>所院校开设<span class="text-[#FFA864]"
											>【{{
												turnThousandth(
													form.curMajorMatchSchoolInfo?.majorCount,
													'0'
												)
											}}】</span
										>个专业
									</div>
									<a-table
										class="mt-[20px] cursor-pointer"
										table-layout-fixed
										:columns="createMajorTableColumns()"
										:data="form.curMajorMatchSchoolInfo.list"
										:loading="matchSchoolLoading"
										:bordered="{ wrapper: true, cell: true }"
										page-position="bottom"
									>
										<template #xk="{ record }">
											<div>
												<span>
													<i
														class="iconfont"
														:class="record.oneData.icon"
														:style="{ color: record.oneData.color }"
													/>
													<span>{{ record.oneData.label }}</span>
												</span>
												<span class="mx-[5px]">+</span>
												<span>
													<i
														class="iconfont"
														:class="record.twoData.icon"
														:style="{ color: record.twoData.color }"
													/>
													<span>{{ record.twoData.label }}</span>
												</span>
												<span class="mx-[5px]">+</span>
												<span>
													<i
														class="iconfont"
														:class="record.threeData.icon"
														:style="{ color: record.threeData.color }"
													/>
													<span>{{ record.threeData.label }}</span>
												</span>
											</div>
										</template>
										<template #schoolCountByxk="{ record }">
											<div
												class="text-[#FFA864]"
												@click="
													record.schoolCountByxk
														? setSelectRow(
																{ ...major, ...record },
																() =>
																	setActiveKey(
																		'ZsSubjectCurXkMajorMatchCollege'
																	)
														  )
														: ''
												"
											>
												{{ textCompany(record.schoolCountByxk, '个') }}
											</div>
										</template>
										<template #majorCountByxk="{ record }">
											<div class="text-[#FFA864]">
												{{ textCompany(record.majorCountByxk, '个') }}
											</div>
										</template>
										<template #ppl="{ record }">
											<div class="flex items-center">
												<zs-proportion
													:width="record.ppl"
													background="#7C92FF"
													class="flex-1"
													:key="record.ppl"
												/>
												<div class="w-[50px] text-center ml-[10px]">
													{{ record.ppl + '%' }}
												</div>
											</div>
										</template>
									</a-table>
								</div>
							</a-list-item>
							<template #empty>
								<zs-no-data-small />
							</template>
						</a-list>
					</div>
				</div>
				<!-- 分页 -->
				<a-pagination
					class="justify-end mt-[20px]"
					:total="majorPagination.total"
					:current="majorPagination.current"
					:page-size="majorPagination.pageSize"
					@change="majorOnPageChange"
					@page-size-change="majorOnPageSizeChange"
					show-total
					show-jumper
					show-page-size
				/>
			</template>
			<div v-else>
				<zs-no-data-small />
			</div>
		</a-spin>
		<!-- 当前选科的院校所匹配专业 -->
		<zs-subject-cur-xk-major-match-college
			v-if="activeKey === 'ZsSubjectCurXkMajorMatchCollege'"
			:data="form.selectRow"
			@cancel="setSelectRow({}, () => setActiveKey(null))"
		/>
	</div>
</template>
<script setup lang="ts" name="ZsSubjectMajorCheck">
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 网站信息
const { provinceList } = useWebsiteInformation();
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 当前匹配院校loading
const [matchSchoolLoading, setMatchSchoolLoading] = useBasicsState(false);
// 全局form
const { form } = useForm(() => ({
	province: '', // 用户省份
	gkms: '', // 用户高考模式
	curMajorMatchSchoolInfo: {
		list: [] as any,
	} as any, // 当前专业匹配学校信息
	selectRow: {} as any,
	zydm: '', // 当前代码
}));

// 专业列表form
const { form: majorForm } = useForm(() => ({
	isMatch: false,
	zymc: '',
}));

// 专业匹配院校列表 form
const { form: curMajorMatchSchoolForm, resetForm: curMajorMatchResetForm } = useForm(() => ({
	subjectList: [] as any, // 选科
	firstSubjectList: [] as any, // 首选科目
	secondSubjectList: [] as any, // 次选科目
}));
// 计算特殊选科
const specialXkList = computed(() => [
	...curMajorMatchSchoolForm.value.firstSubjectList,
	...curMajorMatchSchoolForm.value.secondSubjectList,
]);
// 分页控制
const {
	pagination: majorPagination,
	resetData: majorResetData,
	onPageChange: majorOnPageChange,
	onPageSizeChange: majorOnPageSizeChange,
} = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	initMajorList();
});

// 关闭所有折叠面版
const closeAllCollapsed = () => {
	majorList.value.forEach((item: any) => {
		item.childs.forEach((o: any) => {
			o.childs.forEach((v: any) => {
				v.collapsed = false;
			});
		});
	});
};
// 切换是否折叠
const clickCollapsed = async (item: any, index: any) => {
	form.value.zydm = item.zydm;
	if (item.collapsed) {
		// 关闭所有
		closeAllCollapsed();
	} else {
		// 如果当前项未折叠，则关闭所有项并将当前点击项的状态取反。
		closeAllCollapsed();
		item.collapsed = !item.collapsed;
		// 重置当前专业匹配专业参数;
		await curMajorMatchResetForm();
		// 查询当前专业匹配院校;
		getCurrentSchoolList();
	}
};

// change事件
const majorChangeFilter = async (val: any) => {
	// 切换专业门类
	if (val.levelCode !== ccData.value!.levelCode) {
		ccData.value!.levelCode = val.levelCode;
		mlData.value!.xkmldm = '';
		zylData.value!.zyldm = [''];
		await refreshMlData();
	}
	// 切换专业大类
	if (val.xkmldm !== mlData.value!.xkmldm) {
		mlData.value!.xkmldm = val.xkmldm;
		zylData.value!.zyldm = [''];
		await refreshZylData();
	}
	// 请求数据
	majorResetData();
};
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	form.value.selectRow = row;
	if (callBack) callBack();
};
// 切换选科
const changeSubject = (gkms: any) => {
	getCurrentSchoolList();
	// if (gkms === '3+3') {
	// 	if (curMajorMatchSchoolForm.value.subjectList.length === 3) {
	// 		getCurrentSchoolList();
	// 	}
	// } else if (gkms === '3+1+2') {
	// 	if (specialXkList.value.length === 3) {
	// 		getCurrentSchoolList();
	// 	}
	// }
};
// 查询当前专业匹配院校
const getCurrentSchoolList = async () => {
	// 开启当前学校loading
	setMatchSchoolLoading(true);
	const [err, res] = await $zsFetch(API_URLS.CHECK.MAJOR_CHECK_XK_MATCH_SCHOOL, {
		body: {
			sf: form.value.province,
			zydm: form.value.zydm,
			xk:
				form.value.gkms === '3+3'
					? curMajorMatchSchoolForm.value.subjectList.join('/')
					: specialXkList.value.join('/'),
		},
	});
	// 处理错误
	if (err) return setMatchSchoolLoading(false);
	// 关闭当前学校loading
	setMatchSchoolLoading(false);
	// 赋值当前院校专匹配业
	form.value.curMajorMatchSchoolInfo = {
		...res.data,
		list:
			res?.data?.list?.map((item: any) => {
				const [one, two, three] = item.codeName.split('/');
				const oneData = SUBJECT_OPTIONS.find((o: any) => o.label === one);
				const twoData = SUBJECT_OPTIONS.find((o: any) => o.label === two);
				const threeData = SUBJECT_OPTIONS.find((o: any) => o.label === three);
				return {
					...item,
					oneData,
					twoData,
					threeData,
				};
			}) ?? [],
	};
};

// 获取专业层次数据
const { data: ccData } = await useAsyncData('ccList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
	// 处理数据
	const ccList =
		res?.data?.map((item: any) => {
			return {
				...item,
				value: item.levelCode,
				label: item.levelName,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '专业层次',
		key: 'levelCode',
		isShow: true,
		multiple: false,
		options: ccList,
		levelCode: ccList[0].value ?? '',
	};
});
// 获取门类数据
const { data: mlData, refresh: refreshMlData } = await useAsyncData('mlList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_X_KML_LIST, {
		body: {
			levelCode: ccData.value!.levelCode,
		},
	});
	// 处理数据
	const mlList =
		res?.data?.map((item: any) => {
			return {
				...item,
				value: item.xkmldm,
				label: item.xkml,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '专业门类',
		key: 'xkmldm',
		isShow: true,
		multiple: false,
		options: [...ALL_OPTIONS, ...mlList],
		xkmldm: '',
	};
});
// 专业类数据
const { data: zylData, refresh: refreshZylData } = await useAsyncData('zylList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_ZYL_LIST, {
		body: {
			xkmldm: mlData.value!.xkmldm,
		},
	});
	// 处理数据
	const zylList =
		res?.data?.map((item: any) => {
			return {
				...item,
				value: item.zyldm,
				label: item.zyl,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '专业大类',
		key: 'zyldm',
		isShow: !!mlData.value!.xkmldm,
		multiple: true,
		options: [...ALL_OPTIONS, ...zylList],
		zyldm: [''],
	};
});
// 专业列属性
const createMajorTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '选科组合',
			dataIndex: 'xk',
			width: 300,
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'xk',
		},
		{
			title: '当前选科匹配院校',
			dataIndex: 'schoolCountByxk',
			align: 'center',
			width: 160,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'schoolCountByxk',
		},
		{
			title: '开设专业',
			dataIndex: 'majorCountByxk',
			align: 'center',
			width: 150,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'majorCountByxk',
		},
		{
			title: '专业匹配率',
			dataIndex: 'ppl',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'ppl',
		},
	];
};
// 获取列表
const {
	data: majorList,
	loading,
	initData: initMajorList,
} = useInitRequest<any>(
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHECK.MAJOR_CHECK_XK, {
			body: {
				sf: form.value.province,
				zymc: majorForm.value.zymc,
				isMatch: majorForm.value.isMatch ? '1' : '0',
				cc: ccData.value!.levelCode,
				xkml: mlData.value!.xkmldm,
				zyl: zylData.value!.zyldm.join('/'),
				currentPage: majorPagination.value.current,
				pageSize: majorPagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 处理错误
		if (err) return;
		// 赋值总页码
		majorPagination.value.total = res.data.totalCount;
		const list = res?.data?.list?.map((item: any) => {
			// 遍历每个 item 的 childs 数组
			item.childs.forEach((o: any) => {
				// 为每个 child 对象添加一个 collapsed 属性并设置为 false
				o.childs.forEach((v: any) => {
					v.collapsed = false;
				});
			});
			return {
				...item,
			};
		});
		return list;
	},
	{
		defaultValue: [],
		isInit: false,
	}
);

// 存在信息回显数据
if (userInfo.value.score) {
	form.value = {
		...form.value,
		...userInfo.value,
	};
	// 查询专业列表
	initMajorList();
} else {
	form.value.province = userInfo.value.province;
	form.value.gkms = findOptions(provinceList.value, userInfo.value.province)?.gkms;
}
</script>
