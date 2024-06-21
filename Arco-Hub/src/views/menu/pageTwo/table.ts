import type { TableCustomColumnData } from '@/hooks';
import { h } from 'vue';
import { Tag, Image } from '@arco-design/web-vue';
import { filterText, turnDateTime, turnThousandth, formatDate, turnNumberToFixed2 } from '@/utils';
import findOption from '@/utils/options'; // 根据value查label
import { ALL_TYPE_OPTIONS } from '../mack';

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
			dataIndex: 'name',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.name);
			},
		},
		{
			title: 'ID',
			dataIndex: 'uname',
			show: true,
			width: 80,
			align: 'center',
			render: ({ record }) => {
				return h(Tag, { color: 'blue' }, { default: () => filterText(record.id) });
			},
		},
		{
			title: '状态',
			width: 100,
			dataIndex: 'status',
			slotName: 'status',
			show: true,
			align: 'center',
		},
		{
			title: '金额',
			dataIndex: 'money',
			show: true,
			align: 'right',
			render: ({ record }) => {
				return h(
					'span',
					{ class: 'text-red text-price' },
					turnThousandth(`${record.money ?? 0}`, '0')
				);
			},
		},
		{
			title: '类型',
			dataIndex: 'type',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(findOption(ALL_TYPE_OPTIONS, record.type)?.label);
			},
		},
		{
			title: '地点',
			dataIndex: 'address',
			show: true,
			ellipsis: true,
			tooltip: true,
			align: 'center',
			render: ({ record }) => {
				return filterText(record.address);
			},
		},
		{
			title: '日期',
			dataIndex: 'date',
			show: true,
			ellipsis: true,
			tooltip: true,
			align: 'center',
			render: ({ record }) => {
				return formatDate(record.date, 'YYYY-MM-DD');
			},
		},
		{
			title: '图片',
			width: 120,
			dataIndex: 'image',
			show: true,
			align: 'center',
			render: ({ record }) => {
				return record.image
					? h(Image, { src: record.image, width: 100, preview: true })
					: '-';
			},
		},
		{
			title: '爱好',
			width: 150,
			dataIndex: 'hobby',
			slotName: 'hobby',
			show: true,
			align: 'center',
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
