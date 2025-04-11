<template>
	<a-modal
		:visible="show"
		:top="top"
		width="auto"
		unmount-on-close
		:align-center="alignCenter"
		:mask-closable="false"
		:footer="false"
		:closable="false"
		body-style="padding: 0;overflow: visible"
		:modal-style="{ 'background-color': 'transparent' }"
	>
		<slot></slot>
	</a-modal>
</template>

<script lang="ts" setup name="ZsModal">
// 父组件参数
withDefaults(
	defineProps<{
		top?: string;
		show?: boolean;
		alignCenter?: boolean;
	}>(),
	{
		top: '15%',
		show: true,
		alignCenter: false,
	}
);
</script>
