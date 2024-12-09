<template>
	<div class="flex items-center justify-between">
		<div class="flex items-center gap-x-[10px]">
			<div
				class="bg-[#7C92FF] rounded-lg"
				:class="{
					'h-[20px] w-[6px]': size === 'large',
					'h-[16px] w-[4px]': size === 'small',
					'h-[14px] w-[3px]': size === 'mini',
				}"
			></div>
			<span
				class="font-bold text-center"
				:class="{
					'text-[20px]': size === 'large',
					'text-[17px]': size === 'small',
					'text-[14px]': size === 'mini',
					[`text-[${color}]`]: true,
				}"
				>{{ props.title }}</span
			>
			<!-- 中间内容 -->
			<span
				:class="{
					'ml-[20px]': size === 'large',
					'ml-[12px]': size === 'small',
					'ml-[8px]': size === 'mini',
				}"
			>
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
// 父组件参数
const props = withDefaults(
	defineProps<{
		title: string;
		size: 'mini' | 'small' | 'large';
		color?: string;
	}>(),
	{
		title: '',
		size: 'mini',
		color: '#000000',
	}
);
</script>
