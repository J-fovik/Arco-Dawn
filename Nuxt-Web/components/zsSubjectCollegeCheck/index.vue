<template>
	<div>
		<!-- 搜索框 -->
		<div class="flex items-center mt-[20px]">
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
		<a-list class="list-border mt-[20px]" :bordered="false" :loading="loading">
			<a-list-item v-for="(school, index) in schoolList" :key="school.id">
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
						@click="clickCollapsed(school, index)"
					>
						专业匹配：{{ turnThousandth(school.planSum, '0') }}个<i
							class="iconfont icon-xiala text-[#FFA864] ml-[3px]"
						/>
					</div>
				</div>
				<!-- 折叠信息 -->
				<div v-if="school.collapsed">
					<div class="bg-[#F9F9F9] p-[10px_20px] mt-[20px] rounded-[8px]">
						<template v-if="form.gkms === '3+3'">
							<span>选择科目：</span>
							<a-checkbox-group
								:max="3"
								v-model="curSchoolMatchForm.subjectList"
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
									v-model="curSchoolMatchForm.firstSubjectList"
									:options="FIRST_CHOICE_SCIENCES_OPTIONS"
									@change="changeSubject('3+1+2')"
								/>
							</div>
							<!-- 次选科目 -->
							<div class="mt-[5px]">
								<span>次选科目：</span>
								<a-checkbox-group
									:max="2"
									v-model="curSchoolMatchForm.secondSubjectList"
									:options="SECOND_CHOICE_SCIENCES_OPTIONS"
									@change="changeSubject('3+1+2')"
								/>
							</div>
						</template>
					</div>
					<div class="my-[5px]">
						共开设<span class="text-[#FFA864]"
							>【{{ turnThousandth(school.planSum, '0') }}】</span
						>个专业，选科要求匹配如下
					</div>
					<a-table
						class="mt-[20px] cursor-pointer"
						table-layout-fixed
						:columns="createSchoolTableColumns()"
						:data="form.curSchoolMatchMajorList"
						:loading="matchMajorLoading"
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
						<template #ppsum="{ record }">
							<div
								class="text-center text-[#FFA864]"
								@click="
									record.ppsum
										? setSelectRow({ ...school, ...record }, () =>
												setActiveKey('ZsSubjectCurXkCollegeMatchMajor')
										  )
										: ''
								"
							>
								{{ textCompany(turnThousandth(record.ppsum, ''), '个') }}
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
		<!-- 当前选科的院校所匹配专业 -->
		<zs-subject-cur-xk-college-match-major
			v-if="activeKey === 'ZsSubjectCurXkCollegeMatchMajor'"
			:data="form.selectRow"
			@cancel="setSelectRow({}, () => setActiveKey(null))"
		/>
	</div>
</template>
<script setup lang="ts" name="ZsSubjectCollegeCheck">
// 全局插件
const { $zsFetch } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 网站信息
const { provinceCityList, provinceList, getDictionValue } = useWebsiteInformation();
// 当前匹配专业loading
const [matchMajorLoading, setMatchMajorLoading] = useBasicsState(false);
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 全局form
const { form } = useForm(() => ({
	province: '',
	gkms: '',
	curSchoolMatchMajorList: [] as any, // 当前学校匹配专业
	selectRow: {} as any,
	curSchoolName: '', // 当前院校名称
}));
// 院校列表form
const { form: schoolForm } = useForm(() => ({
	sf: '',
	yxlx: '',
	cc: '',
	bxxz: '',
	strengthTags: '',
	featuresTags: '',
	isMatch: false,
	yxmc: '',
}));
// 当前院校匹配专业form
const { form: curSchoolMatchForm, resetForm: curSchoolMatchResetForm } = useForm(() => ({
	subjectList: [] as any, // 选科
	firstSubjectList: [] as any, // 首选科目
	secondSubjectList: [] as any, // 次选科目
}));
// 计算特殊选科
const specialXkList = computed(() => [
	...curSchoolMatchForm.value.firstSubjectList,
	...curSchoolMatchForm.value.secondSubjectList,
]);
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
		key: 'strengthTags',
		isShow: true,
		multiple: false,
		isCollapse: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('SLBQ')],
	},
	{
		title: '特色标签',
		key: 'featuresTags',
		isShow: true,
		multiple: false,
		isCollapse: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('TSBQ')],
	},
]);
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
// 院校列属性
const createSchoolTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '选科组合',
			dataIndex: 'xk',
			align: 'center',
			width: 300,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'xk',
		},
		{
			title: '当前选科匹配专业',
			dataIndex: 'ppsum',
			align: 'center',
			width: 300,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#EDEDED',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'ppsum',
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
// 切换是否折叠
const clickCollapsed = async (item: any, index: any) => {
	// 储存当前院校名称
	form.value.curSchoolName = item.yxmc;
	if (item.collapsed) {
		// 关闭所有
		schoolList.value.forEach((schoolItem: any) => (schoolItem.collapsed = false));
	} else {
		// 如果当前项未折叠，则关闭所有项并将当前点击项的状态取反。
		schoolList.value.forEach((schoolItem: any) => (schoolItem.collapsed = false));
		schoolList.value[index].collapsed = !item.collapsed;
		// 重置当前院校匹配专业参数
		await curSchoolMatchResetForm();
		// 查询当前院校匹配专业
		getCurrentMajorList();
	}
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

// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	form.value.selectRow = row;
	if (callBack) callBack();
};
// 切换选科
const changeSubject = (gkms: any) => {
	getCurrentMajorList();
	// if (gkms === '3+3') {
	// 	if (curSchoolMatchForm.value.subjectList.length === 3) {
	// 		getCurrentMajorList();
	// 	}
	// } else if (gkms === '3+1+2') {
	// 	if (specialXkList.value.length === 3) {
	// 		getCurrentMajorList();
	// 	}
	// }
};
// 获取当前院校匹配专业
const getCurrentMajorList = async () => {
	// 开启当前学校loading
	setMatchMajorLoading(true);
	const [err, res] = await $zsFetch(API_URLS.CHECK.COLLEGE_CHECK_XK_MAJOR_MATCH, {
		body: {
			sf: form.value.province,
			yxmc: form.value.curSchoolName,
			xk:
				form.value.gkms === '3+3'
					? curSchoolMatchForm.value.subjectList.join('/')
					: specialXkList.value.join('/'),
		},
	});
	// 处理错误
	if (err) return setMatchMajorLoading(false);
	// 关闭当前学校loading
	setMatchMajorLoading(false);
	// 赋值当前院校专匹配业
	form.value.curSchoolMatchMajorList =
		res?.data?.map((item: any) => {
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
		}) ?? [];
};

// 获取院校列表
const {
	data: schoolList,
	loading,
	initData: initCollegeList,
} = useInitRequest<any>(
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHECK.COLLEGE_CHECK_XK, {
			body: {
				...schoolForm.value,
				isMatch: schoolForm.value.isMatch ? '1' : '0',
				province: userInfo.value.province,
				currentPage: schoolPagination.value.current,
				pageSize: schoolPagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 处理错误
		if (err) return;
		// 赋值总页码
		schoolPagination.value.total = res.data.totalCount;
		return res?.data?.list?.map((o: any) => {
			return {
				...o,
				collapsed: false,
			};
		});
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
	// 查询院校匹配和专业匹配
	initCollegeList();
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
