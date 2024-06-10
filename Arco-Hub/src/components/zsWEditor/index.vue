<template>
	<div style="border: 1px solid #ccc">
		<w-toolbar
			v-if="hideToolbar"
			:default-config="{
				excludeKeys,
			}"
			:editor="editorRef"
			style="border-bottom: 1px solid #ccc"
		/>
		<w-editor
			v-model="htmlValue"
			:style="{ height: `${height}px` }"
			:default-config="editorConfig"
			@on-created="initEditor"
		/>
	</div>
</template>

<script setup lang="ts">
import type { IEditorConfig } from '@wangeditor/editor';
import { shallowRef, onBeforeUnmount, watch } from 'vue';
// 富文本
import '@wangeditor/editor/dist/css/style.css';
import { Editor as WEditor, Toolbar as WToolbar } from '@wangeditor/editor-for-vue';
// 父组件参数
const props = withDefaults(
	defineProps<{
		modelValue: string;
		excludeKeys?: Array<string>;
		height?: number;
		disabled?: boolean;
		hideToolbar?: boolean;
	}>(),
	{
		modelValue: '',
		excludeKeys: () => ['|', 'group-video'],
		height: 300,
		disabled: false,
		hideToolbar: true,
	}
);
// 父组件方法
const emits = defineEmits(['update:modelValue']);
// 文本
const htmlValue = shallowRef(`${props.modelValue}`);
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<any | null>(null);
// 编辑器config
const editorConfig: Partial<IEditorConfig> = {
	placeholder: '请输入内容...',
};
// editor 初始化记录实例
const initEditor = (editor: any) => {
	editorRef.value = editor;
	if (props.disabled) {
		editorRef.value.disable();
	}
};
// 销毁
onBeforeUnmount(() => {
	const editor = editorRef.value;
	if (editor == null) return;
	editor.destroy();
});
// 监听变化
watch(htmlValue, (value) => {
	emits('update:modelValue', value);
});
</script>
