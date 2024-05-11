<template>
    <div class="main-container">
        <CustomTable fold :table-columns="columnsData" :table-size="tableBaseOptions.size" @reset-search="resetForm"
            @search="resetData" @change-table-size="changeTableSize" @change-table-column="changeTableColumn">
            <template #form="{ collapsed }">
                <a-form :model="form" label-align="left" size="large" auto-label-width>
                    <a-grid :cols="{ md: 3, lg: 3, xl: 3, xxl: 4 }" :col-gap="12" :collapsed="!collapsed">
                        <a-grid-item>
                            <a-form-item label="名称:">
                                <a-input v-model.trim="form.nickName" placeholder="请输入名称" />
                            </a-form-item>
                        </a-grid-item>
                        <a-grid-item>
                            <a-form-item label="地区:">
                                <a-select v-model="form.areaNo" placeholder="请选择地区" :options="regionList"
                                    :field-names="{ label: 'cityName', value: 'provinceCode' }" />
                            </a-form-item>
                        </a-grid-item>
                        <a-grid-item>
                            <a-form-item label="价格:">
                                <a-input-number v-model="form.money" placeholder="请输入价格(元)"
                                    :formatter="(value: string) => turnThousandth(value, '')"
                                    :parser="(value: string) => value.replace(/,/g, '')" :precision="2" />
                            </a-form-item>
                        </a-grid-item>
                    </a-grid>
                </a-form>
            </template>
            <template #operate>
                <a-space>
                    <a-button type="outline" @click="setActiveKey('addUpdate')">
                        <template #icon>
                            <icon-plus />
                        </template>
                        新增
                    </a-button>
                    <a-button type="primary" :disabled="!tableBaseOptions.selectedKeys.length"
                        :loading="activeKey === '删除'" @click="deleteExpertFn">
                        <template #icon>
                            <icon-close />
                        </template>
                        删除
                    </a-button>
                    <a-button type="primary" size="small" @click="exportExcel">导出Excel
                    </a-button>
                    <a-button type="primary" size="small" :disabled="!tableBaseOptions.selectedKeys.length"
                        @click="exportSelectExcel">导出选中的Excel </a-button>

                </a-space>
            </template>
            <template #table>
                <a-table ref="tableRef" v-model:selected-keys="tableBaseOptions.selectedKeys" class="zs-table"
                    row-key="id" :data="tableData" :row-selection="tableBaseOptions.rowSelection"
                    :bordered="tableBaseOptions.bordered" :pagination="tableBaseOptions.pagination"
                    :size="tableBaseOptions.size" :columns="visibleColumnsData" :stripe="tableBaseOptions.stripe"
                    :loading="loading">
                    <template #avatar="{ record }">
                        <a-image :src="record.avatar" width="100"></a-image>
                    </template>
                    <template #operate="{ record }">
                        <a-button type="text"
                            @click="setSelectRow(record, () => setActiveKey('addUpdate'))">编辑</a-button>
                    </template>
                </a-table>
            </template>
        </CustomTable>
        <add-update v-if="activeKey === 'addUpdate'" :data="selectRow" @success="initData"
            @close="setSelectRow({}, () => setActiveKey(null))"></add-update>
    </div>
</template>
<script lang="ts" setup name='TableDemo'>
import XLSX from 'xlsx'
import { useAsyncData, curryingRequest, useForm, useTable, useModal, useBasicsState } from '@/hooks';
import addUpdate from './components/addUpdate.vue';
import { getTableList } from '@/api/url';
import { createTableColumns } from './table';
import { turnThousandth } from "@/utils";
const { warningModal } = useModal();
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 表单form
const { form, resetForm } = useForm(
    () => ({
        nickName: '', //名称
        money: 1,
        areaNo: ''
    }),
    () => resetData()
);
// 表格table
const {
    tableRef,
    selectRow,
    columnsData,
    visibleColumnsData,
    tableBaseOptions,
    resetData,
    extendTableList,
    setSelectRow,
    changeTableColumn,
    changeTableSize,
} = useTable(createTableColumns(), () => initData());
const regionList = [{ cityName: '河北', provinceCode: '1', }, { cityName: '天津', provinceCode: '12', }, { cityName: '山东', provinceCode: '3', }]
// 批量删除表格
const deleteExpertFn = () => {
    warningModal(`确定删除选中的${tableBaseOptions.selectedKeys.length}数据吗？`, async (done) => {
        // const { err } = await curryingRequest(
        //     () =>
        //         deleteExpert({
        //             ids: tableBaseOptions.selectedKeys,
        //         }),
        //     {
        //         successMsg: '操作成功',
        //     }
        // );
        // // 处理错误
        // if (err) return;
        // 关闭弹窗
        done(true);
        // 重置勾选
        tableBaseOptions.selectedKeys = [];
        // 获取数据
        initData();
    });
};
// 导出Excel
const exportExcel = () => {
    const workSheet = XLSX.utils.table_to_sheet((tableRef.value as any).$el)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook, workSheet, '数据报表')
    XLSX.writeFile(workBook, 'tale-list.xlsx')
}
// 导出选中Excel
const exportSelectExcel = () => {
    const data = tableBaseOptions.selectedKeys
        .map((it: any) => {
            return tableData.value.find((item: any) => item.id === it)
        })
        .map((it: any) => {
            return [
                it.nickName,
                it.gender === 0 ? '男' : '女',
                it.address,
                it.lastLoginTime,
                it.lastLoginIp,
            ]
        })
    data.unshift(['昵称', '性别', '地址', '上次登录时间', '上次登录IP'])
    const workSheet = XLSX.utils.aoa_to_sheet(data)
    const workBook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workBook, workSheet, '数据报表')
    XLSX.writeFile(workBook, 'table-list.xlsx')
}
// 请求数据
const {
    data: tableData,
    loading,
    initData,
} = useAsyncData(async () => {
    console.log(tableBaseOptions.pagination, form.value);
    const { res, err } = await curryingRequest(() =>
        getTableList({
            page: tableBaseOptions.pagination.current,
            pageSize: tableBaseOptions.pagination.pageSize,
        })
    );
    // 处理错误
    if (err) return;
    // 设置分页信息
    tableBaseOptions.pagination.total = res!.data.totalSize;
    // 返回处理后的数据
    return extendTableList(res?.data.data.map((o: any) => {
        o.money = '123456'
        return o
    }))
});
</script>