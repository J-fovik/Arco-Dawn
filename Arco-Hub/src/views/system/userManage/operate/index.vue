<template>
	<ZsContent>
		<a-card title="用户管理维护" :bordered="false" class="general-card">
			<template #extra>
				<a-alert type="warning">默认密码:登录帐号加上123，例:admin123 </a-alert>
			</template>
			<a-form
				ref="formRef"
				:model="form"
				label-align="left"
				size="large"
				style="width: 800px; padding-left: 100px"
				auto-label-width
				:disabled="!!route.query.isReadOnly"
				:rules="rules"
			>
				<a-form-item label="登录账号:" field="userAccount" required>
					<a-input
						v-model.trim="form.userAccount"
						:readonly="!!route.query.id"
						:placeholder="formPlaceholder('请输入登录账号')"
					/>
				</a-form-item>
				<a-form-item label="部门类型:" field="departType" required>
					<a-radio-group
						:model-value="form.departType"
						:options="DEPARTMENT_TYPE_OPTIONS"
						@change="setDepartType"
					></a-radio-group>
				</a-form-item>
				<a-form-item label="角色:" field="roleCode" required>
					<a-select
						v-model="form.roleCode"
						allow-search
						allow-clear
						:options="roleList"
						:placeholder="formPlaceholder('请选择角色')"
					/>
				</a-form-item>
				<a-form-item label="组织机构:" field="departCode" required>
					<a-select
						v-model="form.departCode"
						allow-search
						allow-clear
						:options="departmentList"
						:placeholder="formPlaceholder('请选择组织机构')"
					/>
				</a-form-item>
				<a-form-item label="姓名:" field="username" required>
					<a-input v-model.trim="form.username" placeholder="请输入姓名" />
				</a-form-item>
				<a-form-item label="证件类型:" field="certType">
					<a-select
						v-model="form.certType"
						:options="getDictionaryInfo('IDType')"
						:field-names="{
							label: 'detailName',
							value: 'detailCode',
						}"
						allow-search
						allow-clear
						:placeholder="formPlaceholder('请选择证件类型')"
					/>
				</a-form-item>
				<a-form-item label="证件号码:" field="cardId">
					<a-input
						v-model.trim="form.cardId"
						:placeholder="formPlaceholder('请输入证件号码')"
					/>
				</a-form-item>
				<a-form-item label="地址:" field="address">
					<a-input
						v-model.trim="form.address"
						:placeholder="formPlaceholder('请输入地址')"
					/>
				</a-form-item>
				<a-form-item label="邮箱:" field="email">
					<a-input
						v-model.trim="form.email"
						:placeholder="formPlaceholder('请输入邮箱')"
					/>
				</a-form-item>
				<a-form-item label="联系方式:" field="mobile">
					<a-input
						v-model.trim="form.mobile"
						:placeholder="formPlaceholder('请输入联系方式')"
					/>
				</a-form-item>
				<a-form-item field="remark" label="备注:">
					<a-textarea
						v-model.trim="form.remark"
						:max-length="200"
						:placeholder="formPlaceholder('请输入备注')"
					/>
				</a-form-item>
			</a-form>
		</a-card>
		<div style="height: 100px"></div>
		<div class="submit-footer flex justify-end">
			<a-space>
				<a-button
					v-if="!route.query.isReadOnly"
					type="primary"
					:loading="activeKey === '确定'"
					@click="validateData"
					>确定</a-button
				>
				<a-button @click="() => jumpTabName()">返回</a-button>
			</a-space>
		</div>
	</ZsContent>
</template>

<script lang="ts" setup name="SystemUserOperate">
import { shallowRef } from 'vue';
import { useRoute } from 'vue-router';
import { useForm, useBasicsState } from '@/hooks';
import { identityCardRule, passportCardRule, officerCardRule, emailRule } from '@/utils/rules';
import { useTabStore, useDictionaryStore } from '@/pinia';
import { DEPARTMENT_TYPE_OPTIONS } from '../options';
import curryingRequest, { SYSTEM_APIS } from '@/service';

// 路由信息
const route = useRoute();
// 标签页控制
const { jumpTabName } = useTabStore();
// 参数管理
const { getDictionaryInfo } = useDictionaryStore();
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 表单
const { form, formRef, formPlaceholder } = useForm(() => ({
	userAccount: '',
	departType: '0',
	roleCode: '',
	departCode: '',
	username: '',
	certType: '',
	cardId: '',
	address: '',
	email: '',
	mobile: '',
	remark: '',
}));
// 表单验证
const rules = {
	userAccount: {
		required: true,
		message: '请输入登录账号',
	},
	roleCode: {
		required: true,
		message: '请选择角色',
	},
	departCode: {
		required: true,
		message: '请选择组织机构',
	},
	username: {
		required: true,
		message: '请输入姓名',
	},
	cardId: {
		required: false,
		validator: (value: string, callback: (error?: string) => void) => {
			if (form.value.certType === '1' && value && !identityCardRule(value))
				callback('请输入正确的身份证号');
			if (form.value.certType === '2' && value && !officerCardRule(value))
				callback('请输入正确的士官证');
			if (form.value.certType === '4' && value && !passportCardRule(value))
				callback('请输入正确的护照');
		},
	},
	email: {
		required: false,
		validator: (value: string, callback: (error?: string) => void) => {
			if (value && !emailRule(value)) callback('请输入正确的邮箱');
		},
	},
};
// 部门列表
const departmentList = shallowRef<Array<any>>([]);
// 角色列表
const roleList = shallowRef<Array<any>>([]);
// 获取部门列表
const getRoleList = async () => {
	const { err, res } = await curryingRequest(() =>
		SYSTEM_APIS.getSupplierRole({
			departType: form.value.departType,
		})
	);
	// 处理错误
	if (err) return;
	// 设置结果
	roleList.value = res?.data.map((item: any) => {
		return {
			label: item.rolename,
			value: item.roleCode,
		};
	});
};
// 获取部门列表
const getDepartmentList = async () => {
	const { err, res } = await curryingRequest(() =>
		SYSTEM_APIS.getDepartmentList({
			departType: form.value.departType,
		})
	);
	// 处理错误
	if (err) return;
	// 设置结果
	departmentList.value = res?.data.map((item: any) => {
		return {
			label: item.name,
			value: item.code,
		};
	});
};
// 用户详情
const getUserDetail = async () => {
	const { res, err } = await curryingRequest(() =>
		SYSTEM_APIS.getUserDetail({
			id: route.query.id,
		})
	);
	// 处理错误
	if (err) return;
	// 设置表单数据
	form.value = res?.data;
	// 查询部门信息
	getDepartmentList();
	// 查询角色列表
	getRoleList();
};
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		if (route.query.id) submitData('editUser');
		else submitData('addUser');
	});
};
// 提交数据
const submitData = async (name: 'addUser' | 'editUser') => {
	const { err } = await curryingRequest(
		() => SYSTEM_APIS[name]({ ...form.value, id: route.query.id ?? '' }),
		{
			before: () => setActiveKey('确定'),
			after: () => setActiveKey(null),
			successMsg: '保存成功',
		}
	);
	// 处理错误
	if (err) return;
	// 触发成功
	jumpTabName();
};
// 选择部门特殊处理
const setDepartType = (value: any) => {
	form.value.departType = value;
	// 清除选中的部门
	form.value.departCode = '';
	// 清除选中的部门
	form.value.roleCode = '';
	// 获取部门列表
	getDepartmentList();
	// 查询角色列表
	getRoleList();
};
// 判断是否存在id
if (route.query.id) {
	getUserDetail();
} else {
	getDepartmentList();
	getRoleList();
}
</script>

<style scoped>
:deep(.arco-input-wrapper.arco-input-disabled) {
	color: var(--color-text-1);
}

:deep(.arco-input-wrapper .arco-input[disabled]) {
	-webkit-text-fill-color: var(--color-text-1);
}

:deep(.arco-radio-disabled .arco-radio-label) {
	color: var(--color-text-1);
}

:deep(.arco-select-view-single.arco-select-view-disabled) {
	color: var(--color-text-1);
}

:deep(.arco-textarea[disabled]) {
	-webkit-text-fill-color: var(--color-text-1);
}

:deep(.arco-select-view-single .arco-select-view-input[disabled]) {
	-webkit-text-fill-color: var(--color-text-1);
}

:deep(.arco-picker input[disabled]) {
	-webkit-text-fill-color: var(--color-text-1);
}

:deep(.arco-checkbox-disabled .arco-checkbox-label) {
	color: var(--color-text-1);
}
</style>
