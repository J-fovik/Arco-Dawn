<template>
	<zs-modal top="40%" :show="userInfo.loading">
		<div class="flex-col f-c-c">
			<a-spin loading :size="32" :tip="userInfo.loadingContent"></a-spin>
		</div>
	</zs-modal>
</template>

<script setup lang="ts">
// 网站全局控制
const { userInfo } = useUser();
</script>
