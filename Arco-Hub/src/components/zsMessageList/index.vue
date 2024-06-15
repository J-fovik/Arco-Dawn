<template>
	<a-modal
		width="80vw"
		unmount-on-close
		visible
		title="消息列表"
		:mask-closable="false"
		@cancel="emits('close')"
		:footer="false"
	>
		查询消息
	</a-modal>
</template>

<script lang="ts" setup name="ZsMessageList">
// 父组件方法
const emits = defineEmits(['close']);
</script>
