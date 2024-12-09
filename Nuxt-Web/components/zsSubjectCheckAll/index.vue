<template>
	<div>
		<!-- 选科 -->
		<div class="bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]">
			<template v-if="form.gkms === '3+3'">
				<span>选择科目：</span>
				<a-checkbox-group
					:max="3"
					v-model="form.subjectList"
					:options="
						form.province === '浙江' ? SUBJECT_OPTIONS : SUBJECT_OPTIONS.slice(0, 6)
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
						v-model="form.firstSubjectList"
						:options="FIRST_CHOICE_SCIENCES_OPTIONS"
						@change="changeSubject('3+1+2')"
					/>
				</div>
				<!-- 次选科目 -->
				<div class="mt-[5px]">
					<span>次选科目：</span>
					<a-checkbox-group
						:max="2"
						v-model="form.secondSubjectList"
						:options="SECOND_CHOICE_SCIENCES_OPTIONS"
						@change="changeSubject('3+1+2')"
					/>
				</div>
			</template>
		</div>
		<!-- 选项卡 -->
		<a-tabs v-model:active-key="form.activeTabKey" animation>
			<!-- 院校匹配 -->
			<a-tab-pane key="school">
				<template #title>
					<div
						class="text-[18px]"
						:class="form.activeTabKey === 'school' ? 'text-[#657fff] font-bold' : ''"
					>
						院校匹配（{{ turnThousandth(schoolPagination.total, '0') }}）
					</div>
				</template>
				<div>
					<!-- 搜索框 -->
					<div class="flex items-center">
						<!-- 完全匹配 -->
						<div class="w-[150px]">
							<a-button size="large">
								<a-checkbox v-model="schoolForm.isMatch" @change="schoolResetData">
									完全匹配
								</a-checkbox>
							</a-button>
						</div>
						<!-- 搜索你感兴趣的院校 -->
						<div class="w-full ml-[20px]">
							<a-input
								v-model.trim="schoolForm.yxmc"
								size="large"
								class="rounded-lg h-[38px]"
								placeholder="搜索你感兴趣的院校"
								allow-clear
								@clear="schoolResetData"
							>
								<template #prefix>
									<icon-search />
								</template>
							</a-input>
						</div>
						<div class="w-[120px] ml-[20px]">
							<a-button
								type="primary"
								size="large"
								class="openButton w-[120px]"
								@click="schoolResetData"
							>
								搜索
							</a-button>
						</div>
					</div>
					<!-- 选择过滤 -->
					<zs-select-filter
						:data="schoolFilterData"
						:default-values="schoolForm"
						@change="schoolChangeFilter"
						class="mt-[20px]"
					/>
					<!-- 院校列表 -->
					<a-list
						class="list-border mt-[20px]"
						:bordered="false"
						:loading="schoolLoading"
					>
						<a-list-item v-for="(school, index) in form.schoolList" :key="school.id">
							<!-- 学校信息 -->
							<div class="flex items-center justify-between">
								<div
									class="flex-1"
									@click="
										navigateTo(`/college/${school.id}`, {
											open: {
												target: '_blank',
											},
										})
									"
								>
									<zs-school-list-meta :school="school" />
								</div>
								<div
									class="w-[150px] text-[#FFA864] text-right cursor-pointer"
									@click="clickCollapsed('school', school, index)"
								>
									专业匹配：{{
										turnThousandth(school?.planMajorEntities.length, '0')
									}}个<i class="iconfont icon-xiala text-[#FFA864] ml-[3px]" />
								</div>
							</div>
							<!-- 折叠信息 -->
							<div v-if="school.collapsed">
								<a-table
									class="mt-[20px] cursor-pointer"
									table-layout-fixed
									:columns="createSchoolTableColumns()"
									:data="school?.planMajorEntities"
									:bordered="{ wrapper: true, cell: true }"
									page-position="bottom"
								>
									<template #zymc="{ record }">
										<div class="text-left">{{ textFormat(record.zymc) }}</div>
									</template>
								</a-table>
							</div>
						</a-list-item>
						<template #empty>
							<zs-no-data-small />
						</template>
					</a-list>
					<!-- 分页 -->
					<a-pagination
						class="justify-end mt-[20px]"
						:total="schoolPagination.total"
						:current="schoolPagination.current"
						:page-size="schoolPagination.pageSize"
						@change="schoolOnPageChange"
						@page-size-change="schoolOnPageSizeChange"
						show-total
						show-jumper
						show-page-size
					/>
				</div>
			</a-tab-pane>
			<!-- 专业匹配 -->
			<a-tab-pane key="major">
				<template #title>
					<div
						class="text-[18px]"
						:class="form.activeTabKey === 'major' ? 'text-[#657fff] font-bold' : ''"
					>
						专业匹配（{{ turnThousandth(form.matchNum.total, '0') }}）
					</div>
				</template>
				<div>
					<!-- 搜索框 -->
					<div class="flex items-center">
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
						:data="majorFilterData"
						:default-values="majorForm"
						@change="majorChangeFilter"
						class="mt-[20px]"
					/>
					<!-- 匹配度 -->
					<a-radio-group
						v-model="majorForm.matching"
						class="mt-[20px]"
						@change="majorResetData"
					>
						<template
							v-for="tab in form.matchRadioList"
							:key="tab.value"
							class="flex items-center justify-center flex-row"
						>
							<a-radio :value="tab.value">
								<template #radio="{ checked }">
									<div
										class="text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[8px]"
										:class="{ 'bg-[#7C92FF] text-white': checked }"
									>
										{{ tab.label }}
										<!-- 匹配度总数 -->
										<span v-if="tab.value === '3'"
											>{{ form.matchNum.highSum }}
										</span>
										<span v-if="tab.value === '2'"
											>{{ form.matchNum.mediumSum }}
										</span>
										<span v-if="tab.value === '1'"
											>{{ form.matchNum.lowSum }}
										</span>
										<span v-if="tab.value === '0'"
											>{{ form.matchNum.noSum }}
										</span>
									</div>
								</template>
							</a-radio>
						</template>
					</a-radio-group>
					<!-- 提示语 -->
					<div class="my-[10px] text-[#FFA864]">
						<div v-if="form.gkms == '3+3'">
							<!-- 高匹配 -->
							<span v-if="majorForm.matching === '3'">
								* 专业选科匹配度较高，若报考以下专业建议选择{{
									form.gkms == '3+3'
										? form.subjectList.join('')
										: specialXkList.join('')
								}}组合!
							</span>
							<!-- 中匹配 -->
							<span v-if="majorForm.matching === '2'">
								* 专业选科匹配度不高，若报考以下专业请慎重选择{{
									form.gkms == '3+3'
										? form.subjectList.join('')
										: specialXkList.join('')
								}}组合!
							</span>
							<!-- 低匹配 -->
							<span v-if="majorForm.matching === '1'">
								* 专业选科匹配度较低，若报考以下专业不建议选择{{
									form.gkms == '3+3'
										? form.subjectList.join('')
										: specialXkList.join('')
								}}组合!
							</span>
							<!-- 无匹配 -->
							<span v-if="majorForm.matching === '0'">
								* 专业选科无匹配，{{
									form.gkms == '3+3'
										? form.subjectList.join('')
										: specialXkList.join('')
								}}组合无法报考以下专业!
							</span>
						</div>
					</div>
					<!-- 专业列表 -->
					<a-list :bordered="false" :loading="majorLoading">
						<a-list-item
							v-for="(major, index) in form.majorList"
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
									<div class="text-[20px] text-[#333333] mb-[10px] font-bold">
										{{ major.zymc }}
									</div>
									<div class="mt-[10px]">
										<a-space class="flex flex-wrap items-center text-[#999]">
											<template #split>
												<span class="w-[2px] h-[8px] text-[#999]">|</span>
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
									class="w-[190px] text-[#FFA864] text-right cursor-pointer"
									@click="clickCollapsed('major', major, index)"
								>
									院校及专业匹配：{{ turnThousandth(major?.planSum, '0') }}个<i
										class="iconfont icon-xiala text-[#FFA864] ml-[3px]"
									/>
								</div>
							</div>
							<!-- 表格 -->
							<div v-if="major.collapsed">
								<div class="mt-[20px]">
									<a-space>
										<a-select
											:style="{ width: '150px' }"
											v-model="curMajorMatchSchoolForm.sf"
											:options="[
												...NO_LIMIT_NULL_OPTIONS,
												...provinceCityList,
											]"
											placeholder="所在地区"
											allow-clear
											@change="curMajorResetData"
										/>
										<a-select
											:style="{ width: '150px' }"
											v-model="curMajorMatchSchoolForm.cc"
											:options="[
												...NO_LIMIT_NULL_OPTIONS,
												...getDictionValue('BXCC'),
											]"
											allow-clear
											placeholder="专业层次"
											@change="curMajorResetData"
										/>
										<a-input
											:style="{ width: '260px' }"
											v-model.trim="curMajorMatchSchoolForm.yxmc"
											placeholder="请输入院校名称"
											allow-clear
											@change="curMajorResetData"
										>
											<template #prefix>
												<icon-search />
											</template>
										</a-input>
									</a-space>
								</div>
								<a-table
									class="mt-[20px] cursor-pointer"
									table-layout-fixed
									:columns="createMajorTableColumns()"
									:data="form.curMajorMatchSchoolList"
									:loading="curMajorLoading"
									:pagination="{
										...curMajorPagination,
										showTotal: false,
										showPageSize: false,
									}"
									@page-change="curMajorOnPageChange"
									@page-size-change="curMajorOnPageSizeChange"
									:bordered="{ wrapper: true, cell: true }"
									page-position="bottom"
								>
									<template #yxmc="{ record }">
										<div class="text-left flex items-center">
											<img
												:src="record.logo"
												class="w-[42px] h-[42px] rounded-[50%]"
												alt=""
											/>
											<div class="ml-[10px]">
												{{ textFormat(record.yxmc) }}
											</div>
										</div>
									</template>
									<template #zymc="{ record }">
										<div class="text-left">{{ textFormat(record.zymc) }}</div>
									</template>
								</a-table>
							</div>
						</a-list-item>
						<template #empty>
							<zs-no-data-small />
						</template>
					</a-list>
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
				</div>
			</a-tab-pane>
		</a-tabs>
	</div>
</template>
<script setup lang="ts" name="ZsSubjectCheckAll">
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 网站信息
const { provinceCityList, provinceList, getDictionValue } = useWebsiteInformation();
// loading
const [schoolLoading, setSchoolLoading] = useBasicsState(false);
const [majorLoading, setMajorLoading] = useBasicsState(false);
const [curMajorLoading, setCurMajorLoading] = useBasicsState(false);
// 全局form
const { form } = useForm(() => ({
	province: '', // 用户省份
	gkms: '', // 用户高考模式
	subjectList: [] as any, // 选科
	firstSubjectList: [] as any, // 首选科目
	secondSubjectList: [] as any, // 次选科目
	activeTabKey: 'school', // 当前活跃选项卡
	schoolList: [] as any, // 院校列表
	majorList: [] as any, // 专业列表
	matchRadioList: [
		{ label: '高匹配', value: '3' },
		{ label: '中匹配', value: '2' },
		{ label: '低匹配', value: '1' },
		// { label: '无匹配', value: '0' },
	],
	curMajorMatchSchoolList: [], // 当前专业匹配院校列表
	zydm: '', // 代码
	matchNum: {} as any,
}));
// 计算特殊选科
const specialXkList = computed(() => [
	...form.value.firstSubjectList,
	...form.value.secondSubjectList,
]);
// 切换选科
const changeSubject = (gkms: any) => {
	if (gkms === '3+3') {
		if (form.value.subjectList.length === 3) {
			// 切换选科查询院校专业以及专业匹配数量
			schoolResetData();
			majorResetData();
		}
	} else if (gkms === '3+1+2') {
		if (specialXkList.value.length === 3) {
			// 切换选科查询院校专业以及专业匹配数量
			schoolResetData();
			majorResetData();
		}
	}
};
// 切换是否折叠
const clickCollapsed = async (type: any, item: any, index: any) => {
	if (type === 'school') {
		if (item.collapsed) {
			// 关闭所有
			form.value.schoolList.forEach((schoolItem: any) => (schoolItem.collapsed = false));
		} else {
			// 如果当前项未折叠，则关闭所有项并将当前点击项的状态取反。
			form.value.schoolList.forEach((schoolItem: any) => (schoolItem.collapsed = false));
			form.value.schoolList[index].collapsed = !item.collapsed;
		}
	} else if (type === 'major') {
		// 赋值专业当前专业代码
		form.value.zydm = item.zydm;
		if (item.collapsed) {
			// 关闭所有
			form.value.majorList.forEach((majorItem: any) => (majorItem.collapsed = false));
		} else {
			// 如果当前项未折叠，则关闭所有项并将当前点击项的状态取反。
			form.value.majorList.forEach((majorItem: any) => (majorItem.collapsed = false));
			form.value.majorList[index].collapsed = !item.collapsed;
			await curMajorMatchSchoolResetForm();
			// 获取当前专业匹配院校
			getCurrentMajorList();
		}
	}
};
/***********************************   院校匹配开始           *****************************/
// 院校匹配form
const { form: schoolForm } = useForm(() => ({
	sf: '',
	yxlx: '',
	cc: '',
	bxxz: '',
	slbq: '',
	tsbq: '',
	isMatch: false,
	yxmc: '',
}));
// 分页控制
const {
	pagination: schoolPagination,
	resetData: schoolResetData,
	onPageChange: schoolOnPageChange,
	onPageSizeChange: schoolOnPageSizeChange,
} = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	initCollegeList();
});
// 院校数据列表
const schoolFilterData = ref([
	{
		title: '所在地区',
		key: 'sf',
		isShow: true,
		multiple: false,
		options: [...NO_LIMIT_OPTIONS, ...provinceCityList.value],
	},
	{
		title: '院校类型',
		key: 'yxlx',
		isShow: true,
		multiple: false,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('YXLX')],
	},
	{
		title: '院校层次',
		key: 'cc',
		isShow: true,
		multiple: false,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('BXCC')],
	},
	{
		title: '办学性质',
		key: 'bxxz',
		isShow: true,
		multiple: false,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('BXXZ')],
	},
	{
		title: '实力标签',
		key: 'slbq',
		isShow: true,
		multiple: false,
		isCollapse: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('SLBQ')],
	},
	{
		title: '特色标签',
		key: 'tsbq',
		isShow: true,
		multiple: false,
		isCollapse: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('TSBQ')],
	},
]);
// 院校列属性
const createSchoolTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '专业名',
			dataIndex: 'zymc',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'zymc',
		},
		{
			title: '选科要求',
			dataIndex: 'xk',
			align: 'center',
			width: 150,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			bodyCellStyle: {
				color: '#FFA864',
			},
			render: ({ record }) => {
				return textFormat(record.xk);
			},
		},
	];
};
// 院校匹配过滤change事件
const schoolChangeFilter = (val: any) => {
	schoolForm.value = {
		...schoolForm.value,
		...val,
	};
	// 请求数据
	schoolResetData();
};
// 获取院校列表
const initCollegeList = async () => {
	// 开启loading
	setSchoolLoading(true);
	const [err, res] = await $zsFetch(API_URLS.CHECK.XK_CHECK_SCHOOL, {
		body: {
			...schoolForm.value,
			isMatch: schoolForm.value.isMatch ? '1' : '0',
			province: userInfo.value.province,
			xk:
				form.value.gkms === '3+3'
					? form.value.subjectList.join('/')
					: specialXkList.value.join('/'),
			currentPage: schoolPagination.value.current,
			pageSize: schoolPagination.value.pageSize,
			pagingOrNot: 1,
		},
	});
	// 处理错误
	if (err) return setSchoolLoading(false);
	// 关闭loading
	setSchoolLoading(false);
	// 赋值总页码
	schoolPagination.value.total = res.data.totalCount;
	form.value.schoolList = res.data.list.map((o: any) => {
		return {
			...o,
			collapsed: false,
		};
	});
};

/***********************************          院校匹配结束       ****************************/

/***********************************          专业匹配开始       ****************************/
// 专业form
const { form: majorForm } = useForm(() => ({
	levelCode: '1', // 层次
	xkmldm: '',
	zyldm: '',
	isMatch: false,
	zymc: '',
	matching: '3', // 0无匹配 1低匹配 2中匹配 3高匹配
}));
// 专业item form
const { form: curMajorMatchSchoolForm, resetForm: curMajorMatchSchoolResetForm } = useForm(() => ({
	sf: '',
	cc: '',
	yxmc: '',
}));
// 专业数据列表
const majorFilterData = ref([
	{
		title: '专业层次',
		key: 'levelCode',
		isShow: true,
		multiple: false,
		options: [] as any,
	},
	{
		title: '专业门类',
		key: 'xkmldm',
		isShow: true,
		multiple: false,
		options: [] as any,
	},
	{
		title: '专业大类',
		key: 'zyldm',
		isShow: true,
		multiple: false,
		options: [] as any,
	},
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
	// 获取匹配数量
	getMatchNum();
});
// 专业匹配分页控制
const {
	pagination: curMajorPagination,
	resetData: curMajorResetData,
	onPageChange: curMajorOnPageChange,
	onPageSizeChange: curMajorOnPageSizeChange,
} = usePagination(() => {
	// 滚动到顶部
	// window.scrollTo(0, 0);
	// 请求数据
	getCurrentMajorList();
});
// 专业列属性
const createMajorTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '院校名称',
			dataIndex: 'yxmc',
			align: 'center',
			width: 350,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'yxmc',
		},
		{
			title: '匹配专业',
			dataIndex: 'zymc',
			align: 'center',
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'zymc',
		},
		{
			title: '选科要求',
			dataIndex: 'xk',
			align: 'center',
			width: 150,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			bodyCellStyle: {
				color: '#FFA864',
			},
			render: ({ record }) => {
				return textFormat(record.xk);
			},
		},
	];
};
// 专业匹配过滤change事件
const majorChangeFilter = async (val: any) => {
	// 切换专业门类
	if (val.levelCode !== majorForm.value.levelCode) {
		majorForm.value.levelCode = val.levelCode;
		majorForm.value.xkmldm = '';
		majorForm.value.zyldm = '';
		await getXKmlList();
	} else if (val.xkmldm !== majorForm.value.xkmldm) {
		majorForm.value.xkmldm = val.xkmldm;
		majorForm.value.zyldm = '';
		await getZylList();
	} else {
		majorForm.value = {
			...majorForm.value,
			...val,
		};
	}
	// 全部门类时 专业大类不展示
	if (val.xkmldm === '') {
		majorFilterData.value[2].isShow = false;
	} else {
		majorFilterData.value[2].isShow = true;
	}
	// 请求数据
	majorResetData();
};

// 获取层次
const getCcList = async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
	// 处理错误
	if (err) return;
	const result = res.data.map((o: any) => {
		return {
			...o,
			value: o.levelCode,
			label: o.levelName,
		};
	});
	majorFilterData.value[0].options = result;
	majorForm.value.levelCode = result[0].levelCode;
	// 获取门类数据
	getXKmlList();
};

// 获取门类
const getXKmlList = async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_X_KML_LIST, {
		body: {
			levelCode: majorForm.value.levelCode,
		},
	});
	// 处理错误
	if (err) return;
	const result = res.data.map((o: any) => {
		return {
			...o,
			value: o.xkmldm,
			label: o.xkml,
		};
	});
	majorFilterData.value[1].options = [...ALL_OPTIONS, ...result];
	majorForm.value.xkmldm = '';
	// 全部门类时 专业大类不展示
	if (majorForm.value.xkmldm === '') {
		majorFilterData.value[2].isShow = false;
	} else {
		majorFilterData.value[2].isShow = true;
	}
	// 获取专业大类
	getZylList();
};

// 获取专业大类列表
const getZylList = async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_ZYL_LIST, {
		body: {
			xkmldm: majorForm.value.xkmldm,
		},
	});
	// 处理错误
	if (err) return;
	const result = res.data.map((o: any) => {
		return {
			...o,
			value: o.zyldm,
			label: o.zyl,
		};
	});
	majorFilterData.value[2].options = [...ALL_OPTIONS, ...result];
};
// 获取当前专业院校匹配
const getCurrentMajorList = async () => {
	// 开启当前专业loading
	setCurMajorLoading(true);
	const [err, res] = await $zsFetch(API_URLS.CHECK.XK_CHECK_MAJOR_SCHOOL, {
		body: {
			...curMajorMatchSchoolForm.value,
			province: userInfo.value.province,
			xk:
				form.value.gkms === '3+3'
					? form.value.subjectList.join('/')
					: specialXkList.value.join('/'),
			zydm: form.value.zydm,
			currentPage: curMajorPagination.value.current,
			pageSize: curMajorPagination.value.pageSize,
			pagingOrNot: 1,
		},
	});
	// 处理错误
	if (err) return setSchoolLoading(false);
	// 关闭当前专业loading
	setCurMajorLoading(false);
	// 赋值总页码
	curMajorPagination.value.total = res.data.totalCount;
	// 赋值当前专业匹配院校
	form.value.curMajorMatchSchoolList = res?.data?.list;
};
// 获取匹配数量
const getMatchNum = async () => {
	const [err, res] = await $zsFetch(API_URLS.CHECK.QUERY_MAJOR_SUM_BY_MATCH, {
		body: {
			province: userInfo.value.province,
			xk:
				form.value.gkms === '3+3'
					? form.value.subjectList.join('/')
					: specialXkList.value.join('/'),
			zymc: majorForm.value.zymc,
			isMatch: majorForm.value.isMatch ? '1' : '0',
			cc: majorForm.value.levelCode,
			xkml: majorForm.value.xkmldm,
			zyl: majorForm.value.zyldm,
		},
		timeout: 50 * 1000,
	});
	// 处理错误
	if (err) return;
	form.value.matchNum = res.data;
};

// 获取专业列表
const initMajorList = async () => {
	// 开启loading
	setMajorLoading(true);
	const [err, res] = await $zsFetch(API_URLS.CHECK.XK_CHECK_MAJOR, {
		body: {
			zymc: majorForm.value.zymc,
			isMatch: majorForm.value.isMatch ? '1' : '0',
			province: userInfo.value.province,
			xk:
				form.value.gkms === '3+3'
					? form.value.subjectList.join('/')
					: specialXkList.value.join('/'),
			cc: majorForm.value.levelCode,
			matching: majorForm.value.matching,
			xkml: majorForm.value.xkmldm,
			zyl: majorForm.value.zyldm,
			currentPage: majorPagination.value.current,
			pageSize: majorPagination.value.pageSize,
			pagingOrNot: 1,
		},
		timeout: 50 * 1000,
	});
	// 处理错误
	if (err) return setMajorLoading(false);
	// 关闭loading
	setMajorLoading(false);
	// 赋值总页码
	majorPagination.value.total = res.data.totalCount;
	form.value.majorList = res.data.list.map((o: any) => {
		return {
			...o,
			collapsed: false,
		};
	});
};

/***********************************          专业匹配结束       ****************************/

// 存在信息回显数据
if (userInfo.value.score) {
	const xkList = userInfo.value.xk.split('/');
	// 是否为3+1+2
	const isSpecial = userInfo.value.gkms === '3+1+2' && ['物', '史'].includes(xkList[0]);
	form.value = {
		...form.value,
		...userInfo.value,
		subjectList: isSpecial ? [] : xkList,
		firstSubjectList: isSpecial ? [xkList[0]] : [], // 回显首选学科
		secondSubjectList: isSpecial ? [...xkList.slice(1, 3)] : [], // 回显次选学科
	};
	// 查询层次
	getCcList();
	// 查询院校匹配和专业匹配
	initCollegeList();
	initMajorList();
	getMatchNum();
} else {
	form.value.province = userInfo.value.province;
	form.value.gkms = findOptions(provinceList.value, userInfo.value.province)?.gkms;
}
</script>
<style scoped>
.list-border {
	border-bottom: 1px solid var(--color-neutral-3);
	border-top: 1px solid var(--color-neutral-3);
}
:deep(.arco-checkbox-checked .arco-checkbox-icon) {
	background: #7c92ff;
}
.openButton {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
.openButton:hover {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
</style>
