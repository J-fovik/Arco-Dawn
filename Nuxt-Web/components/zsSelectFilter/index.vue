<template>
	<div class="max-w-container mx-auto">
		<div v-for="(item, index) in data" :key="item.key">
			<div v-if="item.isShow" class="flex mt-[10px]">
				<div class="text-[16px] mr-[15px] p-[5px_8px]">
					{{ item.title }}
				</div>
				<ul
					class="flex flex-1 p-[0px] flex-row flex-wrap"
					:class="item.isCollapse ? 'h-[30px] overflow-hidden' : ''"
				>
					<li
						v-for="option in item.options"
						class="flex items-center p-[5px_8px] mb-[2px] px-[6px] mr-[10px] text-[16px] cursor-pointer rounded-xl"
						:key="option.value"
						:class="{
							active:
								option.value === selected[item.key] ||
								(Array.isArray(selected[item.key]) &&
									selected[item.key].includes(option.value)),
						}"
						@click="select(item, option)"
					>
						<span>{{ option.label }}</span>
					</li>
				</ul>
				<a-button
					v-if="item.isCollapse || item.isCollapse === false"
					type="dashed"
					@click="changeCollapse(item.isCollapse, index)"
				>
					展开
					<icon-down v-if="item.isCollapse" />
					<icon-up v-else />
				</a-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsSelectFilter">
interface OptionsProps {
	value: string | number;
	label: string;
}

interface SelectDataProps {
	title: string; // 列表标题
	isShow: boolean; // 是否展示
	key: string; // 当前筛选项 key 值
	multiple?: boolean; // 是否为多选
	isCollapse?: boolean; // 是否展示折叠
	options: OptionsProps[]; // 筛选数据
}

interface SelectFilterProps {
	data?: SelectDataProps[]; // 选择的列表数据
	defaultValues?: { [key: string]: any }; // 默认值
}
// 接受父组件参数及设置默认值
const props = withDefaults(defineProps<SelectFilterProps>(), {
	data: () => [],
	defaultValues: () => ({}),
});

// 给父组件传参
const emits = defineEmits(['change']);
// 重新接收默认值
const selected = ref<{ [key: string]: any }>({});
watch(
	() => props.defaultValues,
	() => {
		props.data.forEach((item) => {
			if (item.multiple) selected.value[item.key] = props.defaultValues[item.key] ?? [''];
			else selected.value[item.key] = props.defaultValues[item.key] ?? '';
		});
	},
	{ deep: true, immediate: true }
);

/**
 * @description 选择筛选项
 * @param {Object} item 选中的哪项列表
 * @param {Object} option 选中的值
 * @return void
 * */
const select = (item: SelectDataProps, option: OptionsProps) => {
	if (!item.multiple) {
		// * 单选
		if (selected.value[item.key] !== option.value) selected.value[item.key] = option.value;
	} else {
		// * 多选
		// 如果选中的是第一个值，则直接设置
		if (item.options[0].value === option.value) selected.value[item.key] = [option.value];
		// 如果选择的值已经选中了，则删除选中的值
		if (selected.value[item.key].includes(option.value)) {
			let currentIndex = selected.value[item.key].findIndex((s: any) => s === option.value);
			selected.value[item.key].splice(currentIndex, 1);
			// 当全部删光时，把第第一个值选中
			if (selected.value[item.key].length == 0)
				selected.value[item.key] = [item.options[0].value];
		} else {
			// 未选中点击值的时候，追加选中值
			selected.value[item.key].push(option.value);
			// 单选中全部并且点击到了未选中的值，把第一个值删除掉
			if (selected.value[item.key].includes(item.options[0].value))
				selected.value[item.key].splice(0, 1);
		}
	}
	emits('change', selected.value);
};

// 改变当前isCollapse
const changeCollapse = (isCollapse: boolean, index: any) => {
	props.data[index].isCollapse = !isCollapse;
};
</script>

<style scoped>
li.active {
	color: white;
	background: #657fff;
}
</style>
