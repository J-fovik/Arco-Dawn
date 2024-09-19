import type { TableCustomColumnData } from '@/hooks';

export const columns: TableCustomColumnData[] = [
	{
		title: '名称',
		dataIndex: 'label',
		slotName: 'label',
		align: 'center',
	},
	{
		title: '类型',
		dataIndex: 'type',
		slotName: 'type',
		align: 'center',
	},
	{
		title: '开始时间',
		dataIndex: 'startTime',
		slotName: 'startTime',
		align: 'center',
	},
	{
		title: '结束时间',
		dataIndex: 'endTime',
		slotName: 'endTime',
		align: 'center',
	},
	{
		title: '操作',
		dataIndex: 'operate',
		align: 'center',
		width: 100,
		slotName: 'operate',
	},
];
