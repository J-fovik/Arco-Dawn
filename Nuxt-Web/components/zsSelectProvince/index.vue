<template>
	<div class="bg-white p-[30px_40px] rounded-[5px_5px] w-[800px]">
		<h1 class="text-center">选择高考省份</h1>
		<a-grid :cols="6" :colGap="12" :rowGap="16">
			<a-grid-item v-for="(item, index) in provinceList" :key="index">
				<div
					class="rounded-[4px] p-[10px_20px] text-center bg-[#F2F5FF] border hover:border-[#1677ff] cursor-pointer"
					:class="{ 'border-[#1677ff]': item.label == userInfo.province }"
					@click="selectProvince(item.label)"
				>
					{{ item.label }}
				</div>
			</a-grid-item>
		</a-grid>
	</div>
</template>

<script lang="ts" setup name="ZsSelectProvince">
// 用户信息
const { userInfo } = useUser();
// 网站信息
const { provinceList } = useWebsiteInformation();
// 父组件方法
const emits = defineEmits(['cancel', 'success']);
// 选择省份
const selectProvince = async (value: any) => {
	// 保存缓存并赋值
	Local.set('province', value);
	userInfo.value.province = value;
	// 触发成功
	emits('success');
};
</script>
