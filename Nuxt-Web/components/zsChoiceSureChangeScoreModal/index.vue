<template>
	<zs-base-modal title="" align-center @cancel="$emit('cancel')">
		<div class="bg-white p-[0px_30px] rounded-[5px_5px] w-[480px]">
			<div class="flex justify-between items-center cursor-pointer mb-[20px]">
				<div class="text-[24px] font-bold">提示</div>
			</div>
			<div class="f-c-c">
				<i class="iconfont icon-dengpaotishi text-[#FFA864] fontSize" />
			</div>
			<div class="text-[16px] leading-[22px]">
				是否同步成绩到当前志愿表，分数改变后之前填报计划录取概率会相应改变 ，
				如科目改变将清空已选志愿，请确认继续操作?
			</div>
			<div class="flex justify-end items-center mt-[20px]">
				<a-space>
					<a-button size="large" class="cancel" @click="$emit('cancel')">取消</a-button>
					<a-button size="large" class="submit" @click="$emit('success')">确定</a-button>
				</a-space>
			</div>
		</div>
	</zs-base-modal>
</template>

<script lang="ts" setup name="ZsChoiceSureChangeScoreModal">
// 父组件方法
const emits = defineEmits(['cancel', 'success']);
</script>
<style scoped>
.submit,
.submit:hover {
	width: 68px;
	color: white;
	height: 40px;
	background: #7c92ff;
	border-radius: 8px;
}

.cancel,
.cancel:hover {
	width: 68px;
	background: white;
	height: 40px;
	border: 1px solid #ededed;
	color: #999;
	border-radius: 8px;
}
.fontSize {
	font-size: 30px;
}
</style>
