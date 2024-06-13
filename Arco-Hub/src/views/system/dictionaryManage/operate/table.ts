import type { TableCustomColumnData } from '@/hooks';

export const columns: TableCustomColumnData[] = [
	{
		title: '编码',

		dataIndex: 'detailCode',
		slotName: 'detailCode',
	},
	{
		title: '编码名称',
		dataIndex: 'detailName',
		slotName: 'detailName',
	},
	{
		title: '备注',
		dataIndex: 'remake',
		slotName: 'remake',
	},
	{
		title: '操作',
		dataIndex: 'operate',
		align: 'center',
		width: 100,
		slotName: 'operate',
	},
];
