import type { TableCustomColumnData } from '@/hooks';
import { filterText, turnDateTime } from '@/utils';

export const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '序号',
			width: 80,
			dataIndex: 'sortTableNo',
			show: true,
			align: 'center',
		},
		{
			title: '角色代码',
			dataIndex: 'code',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.code);
			},
		},
		{
			title: '角色名称',
			dataIndex: 'uname',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.uname);
			},
		},
		{
			title: '操作时间',
			dataIndex: 'createTime',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return turnDateTime(record.createTime);
			},
		},
		{
			title: '备注',
			dataIndex: 'bz',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.bz);
			},
		},
		{
			title: '操作',
			width: 200,
			dataIndex: 'operate',
			slotName: 'operate',
			show: true,
			align: 'center',
		},
	];
};
