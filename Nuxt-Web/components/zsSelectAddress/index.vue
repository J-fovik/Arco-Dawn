<template>
	<a-cascader
		:model-value="props.modelValue"
		:field-names="{
			label: 'name',
			value: 'code',
		}"
		allow-clear
		allow-search
		:options="props.data"
		:placeholder="props.placeholder"
		@change="(v) => $emit('update:modelValue', v)"
	></a-cascader>
</template>

<script setup lang="ts">
// 父组件参数
const props = withDefaults(
	defineProps<{
		modelValue: string | Array<string>;
		data: Array<any>;
		placeholder?: string;
		checkStrictly?: boolean;
	}>(),
	{
		modelValue: '',
		data: () => [],
		placeholder: '请选择所在地区',
		checkStrictly: true,
	}
);
// 父组件参数
defineEmits(['update:modelValue']);
</script>
