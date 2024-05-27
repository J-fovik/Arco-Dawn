import type { TableCustomColumnData } from '@/hooks';
import { h } from 'vue';
import { filterText, turnThousandth, turnNumberToFixed2 } from '@/utils';
import { Tag } from '@arco-design/web-vue';
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
			title: '名称',
			dataIndex: 'nickName',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.nickName);
			},
		},
		{
			title: '性别',
			dataIndex: 'gender',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.gender === 1 ? '男' : '女');
			},
		},
		{
			title: '头像',
			dataIndex: 'avatar',
			slotName: 'avatar',
			show: true,
			align: 'center',
		},
		{
			title: '地址',
			dataIndex: 'address',
			show: true,
			tooltip: true,
			ellipsis: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.address);
			},
		},
		{
			title: '登录时间',
			dataIndex: 'lastLoginTime',
			show: true,
			tooltip: true,
			ellipsis: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.lastLoginTime);
			},
		},
		{
			title: '登录IP',
			dataIndex: 'lastLoginIp',
			show: true,
			tooltip: true,
			ellipsis: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.lastLoginIp);
			},
		},
		{
			title: '交易金额',
			dataIndex: 'money',
			show: true,
			ellipsis: true,
			tooltip: true,
			align: 'center',
			render: ({ record }) => {
				return h(
					'span',
					{ class: 'text-red text-price' },
					turnThousandth(turnNumberToFixed2(record.money)),
				);
			},
		},
		{
			title: '状态',
			dataIndex: 'status',
			show: true,
			align: 'center',
			tooltip: true,
			ellipsis: true,
			render: ({ record }) => {
				return h(
					Tag,
					{ color: record.status == 1 ? 'green' : 'red' },
					{
						default: () => filterText(record.status == 1 ? '正常' : '禁用'),
					},
				);
			},
		},
		{
			title: '操作',
			width: 100,
			dataIndex: 'operate',
			slotName: 'operate',
			show: true,
			align: 'center',
		},
	];
};
