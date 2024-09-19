<template>
	<a-drawer
		title="权限分配"
		visible
		unmount-on-close
		:width="500"
		:mask-closable="false"
		:ok-loading="activeKey === 'okLoading'"
		@cancel="emits('close')"
		@ok="submitData"
	>
		<a-tree
			v-model:checked-keys="roleKeys"
			checkable
			show-line
			only-check-leaf
			:fieldNames="{
				key: 'name',
				title: 'title',
				children: 'children',
				icon: '',
			}"
			:data="appMenus"
		></a-tree>
	</a-drawer>
</template>

<script lang="ts" setup name="ZsDistributionPower">
import { appMenus } from '@/router/base';
import { useAsyncData, useBasicsState } from '@/hooks';
import { URL, curryingRequest } from '@/service';
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => ({} as any),
	}
);
// 父组件方法
const emits = defineEmits(['close', 'success']);
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 获取已有菜单权限
const { data: roleKeys } = useAsyncData(async () => {
	// const { res, err } = await curryingRequest({
	// 	url: URL.ATTESTATION.ROLE_JURISDICTION_LIST,
	// 	data: {
	// 		roleId: props.data.id,
	// 	},
	// });
	// // 处理错误
	// if (err) return [];
	// // 返回处理后的数据
	// return res!.data.map((item: any) => item.powerId);
	const list = localStorage.getItem('roleList');
	return list ? JSON.parse(list) : [];
});
// 提交数据
const submitData = async () => {
	// const { err } = await curryingRequest(
	// 	{
	// 		url: URL.ATTESTATION.ROLE_JURISDICTION_UPDATE,
	// 		data: {
	// 			menuIdList: roleKeys.value,
	// 			roleId: props.data.id,
	// 		},
	// 	},
	// 	{
	// 		before: () => setActiveKey('okLoading'),
	// 		after: () => setActiveKey(null),
	// 	}
	// );
	// // 处理错误
	// if (err) return;
	// 存储本地
	localStorage.setItem('roleList', JSON.stringify(roleKeys.value));
	// 触发成功
	emits('success');
	// 触发关闭
	emits('close');
};
</script>
