import { ref } from 'vue';

const usePagination = (callBack, options = {
  defaultCurrent: 1
}) => {
  const pagination = ref({
    total: 1,
    current: options.defaultCurrent,
    pageSize: 10,
    showTotal: true,
    showPageSize: true
  });
  const onPageChange = (current) => {
    pagination.value.current = current;
    callBack && callBack();
  };
  const onPageSizeChange = (size) => {
    pagination.value.current = 1;
    pagination.value.pageSize = size;
    callBack && callBack();
  };
  const resetData = () => {
    pagination.value.current = 1;
    callBack && callBack();
  };
  return { pagination, resetData, onPageChange, onPageSizeChange };
};

export { usePagination as u };
//# sourceMappingURL=usePagination-23ca46d2.mjs.map
