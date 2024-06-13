import type { TableCustomColumnData } from '@/hooks';
import { filterText, turnDateTime } from '@/utils';

export const createTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '编码',
			dataIndex: 'typeCode',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.typeCode);
			},
		},
		{
			title: '名称',
			dataIndex: 'typeName',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.typeName);
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
