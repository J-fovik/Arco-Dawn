import type { TableCustomColumnData } from '@/hooks';
import { h } from 'vue';
import { Tag } from '@arco-design/web-vue';
import { filterText } from '@/utils';
import { DEPARTMENT_TYPE_OPTIONS } from './options';
import { useDictionaryStore } from '@/pinia';
import findOption from '@/utils/options';

export const createTableColumns = (): TableCustomColumnData[] => {
	const { getDictionaryItem } = useDictionaryStore();

	return [
		{
			title: '账号',
			dataIndex: 'userAccount',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.userAccount);
			},
		},
		{
			title: '姓名',
			dataIndex: 'username',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.username);
			},
		},
		{
			title: '组织',
			dataIndex: 'departName',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.departName);
			},
		},
		{
			title: '用户角色',
			dataIndex: 'roleName',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.roleName);
			},
		},
		{
			title: '联系方式',
			dataIndex: 'mobile',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.mobile);
			},
		},
		{
			title: '状态',
			dataIndex: 'state',
			show: true,
			align: 'center',
			render: ({ record }) => {
				const option = getDictionaryItem('supState', record.state);
				return h(
					'span',
					{ style: `color: ${option.detailCode === '0' ? 'blue' : 'red'}` },
					filterText(option.detailName)
				);
			},
		},
		{
			title: '部门类型',
			dataIndex: 'departType',
			show: true,
			align: 'center',
			render: ({ record }) => {
				const option = findOption(DEPARTMENT_TYPE_OPTIONS, record.departType);
				return h(
					Tag,
					{ color: option?.color },
					{ default: () => filterText(option?.label) }
				);
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
