// 性别
export const SEX_OPTIONS = [
	{
		label: '男',
		value: '男',
	},
	{
		label: '女',
		value: '女',
	},
];

// 所有选科
export const SUBJECT_OPTIONS = [
	{
		label: '物理',
		value: '物',
		icon: 'icon-wuli',
		color: '#7C92FF',
	},
	{
		label: '化学',
		value: '化',
		icon: 'icon-huaxue',
		color: '#5AB9FF',
	},
	{
		label: '生物',
		value: '生',
		icon: 'icon-shengwu',
		color: '#FFA864',
	},
	{
		label: '历史',
		value: '史',
		icon: 'icon-lishi',
		color: '#7C92FF',
	},
	{
		label: '政治',
		value: '政',
		icon: 'icon-zhengzhi',
		color: '#FFA864',
	},
	{
		label: '地理',
		value: '地',
		icon: 'icon-dili',
		color: '#5AB9FF',
	},
	{
		label: '技术',
		value: '技',
		icon: 'icon-jishu',
		color: '#5AB9FF',
	},
];

// 首选科目
export const FIRST_CHOICE_SCIENCES_OPTIONS = [
	{
		label: '物理',
		value: '物',
	},
	{
		label: '历史',
		value: '史',
	},
];

// 次选科目
export const SECOND_CHOICE_SCIENCES_OPTIONS = [
	{
		label: '化学',
		value: '化',
	},
	{
		label: '生物',
		value: '生',
	},
	{
		label: '政治',
		value: '政',
	},
	{
		label: '地理',
		value: '地',
	},
];

// 全部
export const ALL_OPTIONS = [
	{
		label: '全部',
		value: '',
	},
];

// 不限
export const NO_LIMIT_OPTIONS = [
	{
		label: '不限',
		value: '',
	},
];

// 不限null
export const NO_LIMIT_NULL_OPTIONS = [
	{
		label: '不限',
		value: null,
	},
] as any;

// 高考日期
export const GK_DATE_OPTIONS = () => {
	const currentYear = new Date().getFullYear();
	return [
		currentYear + 1,
		currentYear + 2,
		currentYear + 3,
		currentYear + 4,
		currentYear + 5,
	].map((o: any) => {
		return {
			value: String(o),
			label: String(o),
		};
	});
};

// 当前年减一年的年份数组
export const getYearOptions = () => {
	const currentYear = new Date().getFullYear();
	return [currentYear - 1, currentYear - 2, currentYear - 3].map((o: any) => {
		return {
			value: String(o),
			label: String(o),
		};
	});
};

// 导航菜单
export const routeMenuList = [
	{
		name: '查大学',
		path: '/college',
	},
	{
		name: '查专业',
		path: '/major',
	},
	{
		name: '生涯测评',
		path: '/evaluate',
	},
	{
		name: '新高考选科',
		path: '/subject',
	},
	{
		name: '智能填报',
		path: '/choice',
	},
	// {
	// 	name: '升学规划',
	// 	path: '/plan',
	// },
] as any;

// 查找信息
export const findOptions = (options: Array<any>, value: string | number) => {
	return options.find((item) => item.value == value);
};
