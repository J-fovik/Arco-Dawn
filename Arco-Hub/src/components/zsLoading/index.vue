<template>
	<zs-modal top="40%" :show="userStore.userInfo.loading">
		<div class="flex flex-col items-center justify-center">
			<a-spin loading :size="32" :tip="userStore.userInfo.loadingContent"></a-spin>
		</div>
	</zs-modal>
</template>

<script setup lang="ts">
import ZsModal from '@/components/zsModal/index.vue';
import { useUserStore } from '@/pinia';
// 用户信息
const userStore = useUserStore();
</script>
