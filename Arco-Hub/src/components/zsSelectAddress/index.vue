<template>
	<a-cascader
		:model-value="modelValue"
		:field-names="{
			label: 'name',
			value: 'code',
		}"
		allow-clear
		allow-search
		:check-strictly="checkStrictly"
		:options="addressJson.address"
		:placeholder="placeholder"
		@change="(v) => $emit('update:modelValue', v)"
	></a-cascader>
</template>

<script setup lang="ts" name="ZsSelectAddress">
import addressJson from '@/assets/json/address.json';
// 父组件参数
withDefaults(
	defineProps<{
		modelValue: string | Array<string>;
		placeholder?: string;
		checkStrictly?: boolean;
	}>(),
	{
		modelValue: '',
		placeholder: '请选择景区位置',
		checkStrictly: true,
	}
);
// 父组件参数
defineEmits(['update:modelValue']);
</script>
