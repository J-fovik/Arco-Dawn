<template>
	<div>
		<vue-draggable
			v-model="draggableList"
			drag-class="draggable-drag"
			handle=".draggable-drag"
			:onEnd="onEnd"
		>
			<!-- chosen-class="bg-red-800"
			ghost-class="bg-green-800" -->
			<div v-for="(item, index) in draggableList" :class="itemClass">
				<div class="flex items-center">
					<div class="flex-1">
						<slot name="row" :record="item" :rowIndex="index"></slot>
					</div>
					<div v-if="isDraggable" class="shrink-0 draggable-drag">
						<slot name="drag">
							<!-- 拖动 -->
							<a-tooltip content="拖动">
								<div class="mr-[20px]">
									<i class="iconfont icon-tuodong text-[#7C92FF]" />
								</div>
							</a-tooltip>
						</slot>
					</div>
				</div>
				<div v-if="item.children">
					<slot name="children" :record="item"></slot>
				</div>
			</div>
		</vue-draggable>
	</div>
</template>

<script setup lang="ts">
import { VueDraggable } from 'vue-draggable-plus';
// 父组件参数
const props = withDefaults(
	defineProps<{
		defaultList: Array<any>;
		itemClass?: string;
		isDraggable?: boolean;
	}>(),
	{
		defaultList: () => [],
		itemClass: '',
		isDraggable: false,
	}
);
// 拖拽列表
const draggableList = ref([...props.defaultList]);
// 父组件方法
const emits = defineEmits(['draggable']);
// 拖拽完成时触发
const onEnd = (e: any) => {
	emits('draggable', draggableList.value, e);
};
</script>
