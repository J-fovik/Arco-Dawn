<template>
	<div class="mx-auto max-w-container flex items-center justify-between">
		<div class="flex items-center gap-x-[10px]">
			<div
				class="bg-[#7C92FF] rounded-lg w-[6px]"
				:class="{
					'h-[20px]': size === 'large',
					'h-[18px]': size === 'small',
				}"
			></div>
			<span
				class="font-bold text-center"
				:class="{
					'text-[20px]': size === 'large',
					'text-[18px]': size === 'small',
				}"
				>{{ props.title }}</span
			>
			<!-- 中间内容 -->
			<span class="ml-[20px]">
				<slot name="center"></slot>
			</span>
		</div>
		<!-- 右侧内容 -->
		<div>
			<slot name="right"></slot>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsTitle">
const props = defineProps<{
	title: string;
	size: 'small' | 'large';
}>();
</script>
