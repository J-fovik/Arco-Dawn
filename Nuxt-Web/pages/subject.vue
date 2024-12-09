<template>
	<div>
		<div class="max-w-container mx-auto">
			<!-- tab -->
			<a-radio-group v-model="form.tabRadio" class="my-[10px]">
				<template
					v-for="tab in form.tabRadioList"
					:key="tab"
					class="flex items-center justify-center flex-row"
				>
					<a-radio :value="tab">
						<template #radio="{ checked }">
							<div
								class="text-center p-[8px_10px] bg-[#F2F5FF] text-[#7C92FF] rounded-[40px]"
								:class="{ 'bg-[#7C92FF] radio-checked text-white': checked }"
							>
								{{ tab }}
							</div>
						</template>
					</a-radio>
				</template>
			</a-radio-group>
		</div>
		<!-- 分界线 -->
		<div class="border-solid border border-[#EDEDED]"></div>
		<div v-if="userInfo.score" class="max-w-container mx-auto">
			<!-- 选科查院校/查专业 -->
			<div v-if="form.tabRadio === '选科查院校/查专业'">
				<zs-subject-check-all />
			</div>
			<div v-if="form.tabRadio === '大学查选科'">
				<zs-subject-college-check />
			</div>
			<div v-if="form.tabRadio === '专业查选科'">
				<zs-subject-major-check />
			</div>
		</div>
		<div v-else class="flex items-center justify-center flex-col min-h-[60vh]">
			<h1 class="font-bold">完善信息后，尊享选科特权</h1>
			<a-button type="primary" @click="userInfo.userInfoModal = true">完善信息</a-button>
		</div>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '新高考选科',
});
// 页面信息
definePageMeta({
	requiresAuth: true,
});
// 用户信息
const { userInfo } = useUser();
// form
const { form } = useForm(() => ({
	tabRadio: '选科查院校/查专业',
	tabRadioList: ['选科查院校/查专业', '大学查选科', '专业查选科'],
}));
</script>
<style scoped>
.radio-checked {
	background-color: #7c92ff; /* 更高的权重背景色 */
	color: white; /* 更高的权重文字颜色 */
}
</style>
