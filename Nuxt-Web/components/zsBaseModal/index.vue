<template>
	<zs-modal :top="top" :alignCenter="alignCenter">
		<div class="bg-white rounded-lg relative px-[20px] py-[30px]" :class="contentClass">
			<!-- 关闭 -->
			<icon-close
				size="20"
				class="absolute top-[25px] right-[22px] cursor-pointer"
				@click="$emit('cancel')"
			/>
			<!-- 标题 -->
			<slot name="title">
				<div class="text-[22px] font-medium leading-none text-center">
					{{ title }}
				</div>
			</slot>
			<!-- 内容 -->
			<div>
				<slot></slot>
			</div>
		</div>
	</zs-modal>
</template>

<script lang="ts" setup name="ZsBaseModal">
// 父组件参数
withDefaults(
	defineProps<{
		contentClass?: string;
		title?: string;
		top?: string;
		alignCenter?: boolean;
	}>(),
	{
		contentClass: '', // 内容class
		title: '', // 标题
		top: '10%', // 距离顶部
		alignCenter: false, // 是否居中
	}
);
// 父组件方法
defineEmits(['cancel']);
// 插槽
defineSlots<{
	default(): any;
	title: any;
}>();
</script>
