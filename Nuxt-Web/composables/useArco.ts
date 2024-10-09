import type { TableColumnData } from '@arco-design/web-vue';
import type { Ref, UnwrapRef } from 'vue';
import { reactive, ref, computed, shallowRef } from 'vue';
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
		size: 'medium' as 'mini' | 'small' | 'medium' | 'large',
		columnResizable: false,
		selectedKeys: [] as Array<string | number>,
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
	// 获取选中的数据集合
	const getSelectAllRow = (tableData: Array<any>, key: string = 'id') => {
		return tableData.filter((item) => tableBaseOptions.selectedKeys.includes(item[key]));
	};
	// 可见的表格头
	const visibleColumnsData = computed(() => columnsData.value.filter((item) => !!item.show));
	// 切换表格大小
	const changeTableSize = (size: any) => {
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
	const extendTableList = (list: Array<any>, numberKeys: Array<string> = []) => {
		return list.map((item, index) => {
			// 指定key转数字
			if (numberKeys.length) {
				numberKeys.forEach((key) => {
					if (item[key] !== undefined) {
						item[key] = item[key] * 1 ?? 0;
					}
				});
			}
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
		getSelectAllRow,
		createRowNo,
		extendTableList,
		setSelectRow,
		changeTableSize,
		resetData,
		changeTableColumn,
	};
};

//封装表单
export const useForm = <T = any>(
	originalForm: () => T,
	callback?: () => void
): {
	form: Ref<UnwrapRef<T>>;
	formRef: Ref<any>;
	resetForm: () => void;
	restoreValidationForm: () => void;
} => {
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
	// 暴露api
	return {
		form,
		formRef,
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
			closable: false,
			mask: true,
			hideCancel: true,
			modalClass: 'custom-modal',
			title: '提示',
			content: content,
			maskClosable: false,
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
	return { warningModal, infoModal, successModal, errorModal };
};
