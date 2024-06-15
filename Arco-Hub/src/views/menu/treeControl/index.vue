<template>
	<ZsContent>
		<div class="flex" style="height: calc(100% - 35px)">
			<a-card
				class="general-card"
				style="min-width: 400px; overflow-y: auto"
				title="菜单阅览"
			>
				<a-tree
					:data="area"
					:fieldNames="{
						key: 'code',
						title: 'label',
						children: 'children',
						icon: '',
					}"
					block-node
					show-line
					:default-expand-all="false"
					selectable
					@select="changeTreeData"
				>
					<template #icon="{ node }">
						<component
							v-if="node.icon"
							:is="node.icon"
							style="font-size: 18px"
						></component>
					</template>
				</a-tree>
			</a-card>
			<a-card
				class="general-card flex-1"
				style="margin-left: 16px; overflow-y: auto"
				title="右侧"
			>
				{{ form.label }}-{{ form.code }}
			</a-card>
		</div>
	</ZsContent>
</template>

<script lang="ts" setup name="MenuTreeControl">
import { area } from './area-data';
import { useForm, useBasicsState } from '@/hooks';
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form, formRef } = useForm(() => ({
	label: '',
	code: '',
}));
// 选中的菜单
const changeTreeData = (keys: Array<any>, data: any) => {
	// 过滤children字段
	const { children, ...treeData } = data.node;
	// 设置表单数据
	form.value = treeData;
};
</script>

<style scoped>
:deep(.arco-tree-node-title-text) {
	flex: 1;
}

:deep(.arco-tree-node-title-text span) {
	display: flex;
	flex: 1;
}
</style>
