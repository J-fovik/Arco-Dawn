<template>
	<div class="w-full bg-[#fff] border-[#dddddd] rounded-[12px]">
		<div class="w-full h-[10px] bg-[#F4F4F4] flex">
			<div
				class="rounded-[10px] progress-fill"
				:style="{
					width: currentWidth + '%',
					background: background,
				}"
			></div>
		</div>
	</div>
</template>
<script setup lang="ts" name="ZsProportion">
// 父组件参数
const props = withDefaults(
	defineProps<{
		background?: any;
		color?: any;
		width?: any;
		isAnimate?: boolean;
	}>(),
	{
		background: '#FFA864',
		color: '#FFA864',
		width: '0',
		isAnimate: true,
	}
);

// 当前宽度比
const currentWidth = ref('');
// 创建延时动画
const animateProgress = () => {
	if (props.isAnimate) {
		// 使用setTimeout来逐个开始动画，你可以根据需要调整延迟时间
		setTimeout(() => {
			currentWidth.value = props.width;
		}, 500); // 假设每个动画间隔500ms
	} else {
		currentWidth.value = props.width;
	}
};
animateProgress();
</script>
<style scoped>
.progress-fill {
	transition: width 1s ease-in-out; /* 动画持续时间1秒，缓动函数为ease-in-out */
	width: 0%; /* 初始宽度为0 */
}
</style>
