<template>
	<div class="flex justify-center items-center flex-col min-h-[500px]">
		<nuxt-img :src="url" width="300" height="300"></nuxt-img>
		<slot></slot>
	</div>
</template>
<script setup lang="ts" name="ZsNoData">
// 父组件参数
withDefaults(
	defineProps<{
		url?: string;
	}>(),
	{
		url: '/images/no-data.png', // 图片
	}
);
</script>
