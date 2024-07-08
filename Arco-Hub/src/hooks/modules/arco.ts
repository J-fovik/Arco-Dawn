import type { TableColumnData } from '@arco-design/web-vue';
import type { Ref, UnwrapRef } from 'vue';
import { Modal } from '@arco-design/web-vue';

export interface TableCustomColumnData extends TableColumnData {
	show?: boolean;
}

type BeforeOkCallback = (
	done: (closed: boolean) => void
) => void | boolean | Promise<void | boolean>;

// 表格封装
export const useTable = (columns: TableCustomColumnData[], callBack: () => void) => {
	// 表头设置
	const columnsData = ref<TableCustomColumnData[]>(columns);
	//  当前选中的值
	const selectRow = shallowRef<any>({});
	// 基础表格设置
	const tableBaseOptions = reactive({
		bordered: false,
		stripe: false,
		size: 'medium' as SizeProps,
		columnResizable: false,
		selectedKeys: [] as Array<any>,
		rowSelection: {
			type: 'checkbox' as any,
			showCheckedAll: true,
		},
		pagination: {
			total: 1,
			current: 1,
			pageSize: 20,
			showTotal: true,
			showPageSize: true,
			onChange: (current: number) => {
				tableBaseOptions.pagination.current = current;
				// 回调获取数据
				callBack();
			},
			onPageSizeChange: (size: number) => {
				tableBaseOptions.pagination.current = 1;
				tableBaseOptions.pagination.pageSize = size;
				// 回调获取数据
				callBack();
			},
		},
	});
	// 可见的表格头
	const visibleColumnsData = computed(() => columnsData.value.filter((item) => !!item.show));
	// 切换表格大小
	const changeTableSize = (size: SizeProps) => {
		tableBaseOptions.size = size;
	};
	// 重置分页筛选
	const resetData = () => {
		//  重置分页信息
		tableBaseOptions.pagination.current = 1;
		// 回调获取数据
		callBack();
	};
	// 设置当前数据
	const setSelectRow = (row: any, callBack?: () => void) => {
		selectRow.value = row;
		if (callBack) callBack();
	};
	// 改变表格头
	const changeTableColumn = ({ show, num }: { show: boolean; num: number }) => {
		columnsData.value[num].show = show;
	};
	// 处理表格数据
	const extendTableList = (list: Array<any>) => {
		return list.map((item, index) => {
			return {
				...item,
				sortTableNo: createRowNo(index),
			};
		});
	};
	// 生成序号
	const createRowNo = (index: number) => {
		return (
			index +
			1 +
			(tableBaseOptions.pagination.current - 1) * tableBaseOptions.pagination.pageSize
		);
	};
	// 暴露API
	return {
		columnsData,
		visibleColumnsData,
		selectRow,
		tableBaseOptions,
		createRowNo,
		extendTableList,
		setSelectRow,
		changeTableSize,
		resetData,
		changeTableColumn,
	};
};

// 表单封装
export const useForm = <T = any>(
	originalForm: () => T,
	callback?: () => void
): {
	form: Ref<UnwrapRef<T>>;
	formRef: Ref<any>;
	resetForm: () => void;
	formPlaceholder: (value: string) => string;
	restoreValidationForm: () => void;
} => {
	// 查看路由信息
	const route = useRoute();
	// 响应式的form
	const form = ref(originalForm());
	// formRef
	const formRef = ref<any>();
	// 重置form
	const resetForm = () => {
		form.value = originalForm() as UnwrapRef<T>;
		if (callback) callback();
	};
	// 清除验证
	const restoreValidationForm = () => {
		formRef?.value?.clearValidate();
	};
	// 表单占位符控制
	const formPlaceholder = (value: string) => {
		return !!route.query.isReadOnly ? '' : value;
	};
	// 暴露api
	return {
		form,
		formRef,
		formPlaceholder,
		resetForm,
		restoreValidationForm,
	};
};

// 对话框
export const useModal = () => {
	// warning对话框
	const warningModal = (content: string, callBack: BeforeOkCallback) => {
		const modal = Modal.warning({
			closable: true,
			mask: true,
			hideCancel: false,
			modalClass: 'custom-modal',
			title: '提示',
			content: content,
			okButtonProps: {
				status: 'warning',
			},
			onBeforeOk: (done: (closed: boolean) => void) => {
				modal.update({ okLoading: true });
				callBack(done);
			},
		});
	};
	// 普通对话框
	const infoModal = (content: string, callBack: BeforeOkCallback) => {
		const modal = Modal.info({
			closable: true,
			mask: true,
			hideCancel: false,
			modalClass: 'custom-modal',
			title: '提示',
			content: content,
			onBeforeOk: (done: (closed: boolean) => void) => {
				modal.update({ okLoading: true });
				callBack(done);
			},
		});
	};
	// 成功对话框
	const successModal = (content: string, callBack: BeforeOkCallback) => {
		const modal = Modal.success({
			closable: true,
			mask: true,
			hideCancel: false,
			modalClass: 'custom-modal',
			title: '提示',
			content: content,
			okButtonProps: {
				status: 'success',
			},
			onBeforeOk: (done: (closed: boolean) => void) => {
				modal.update({ okLoading: true });
				callBack(done);
			},
		});
	};
	// 错误对话框
	const errorModal = (content: string, callBack: BeforeOkCallback) => {
		const modal = Modal.error({
			closable: true,
			mask: true,
			hideCancel: false,
			modalClass: 'custom-modal',
			title: '提示',
			content: content,
			okButtonProps: {
				status: 'danger',
			},
			onBeforeOk: (done: (closed: boolean) => void) => {
				modal.update({ okLoading: true });
				callBack(done);
			},
		});
	};
	// 暴露api
	return { warningModal, infoModal, successModal, errorModal };
};
