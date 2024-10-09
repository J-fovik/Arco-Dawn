<template>
	<div>
		<swiper
			:pagination="true"
			:autoplay="{
				delay: 4000,
			}"
			:modules="[Pagination, Autoplay]"
			class="w-full"
		>
			<swiper-slide v-for="item in swiperData">
				<!-- <nuxt-img
					:src="item.filePath"
					class="w-full h-[350px] bg-no-repeat bg-[length:auto_100%] bg-[50%]"
					v-if="
						!item.url ||
						!(item.url.indexOf('http://') == 0 || item.url.indexOf('https://') == 0)
					"
				></nuxt-img>
				<nuxt-link
					:to="item.url"
					v-if="
						item.url &&
						(item.url.indexOf('http://') == 0 || item.url.indexOf('https://') == 0)
					"
				> -->
				<nuxt-img
					:src="item.filePath"
					class="w-full h-[350px] bg-no-repeat bg-[length:auto_100%] bg-[50%]"
				></nuxt-img>
				<!-- </nuxt-link> -->
			</swiper-slide>
		</swiper>
		<!-- 模拟志愿填报 -->
		<div class="mx-auto max-w-container relative">
			<div
				class="w-[340px] bg-white absolute p-[20px] right-0 top-[-330px] bottom-[20px] z-10 rounded-lg"
			>
				<div class="text-[20px] leading-[60px]">模拟志愿填报</div>
				<a-form
					ref="formRef"
					:model="form"
					label-align="left"
					size="large"
					auto-label-width
					:rules="rules"
				>
					<a-form-item label="我的成绩" field="achievement" hide-asterisk>
						<a-input-number
							v-model.trim="form.achievement"
							placeholder="输入成绩"
							hide-button
							@click="websiteConfig.loginModal = true"
						/>
					</a-form-item>
					<a-form-item label="我的位次" field="rank" hide-asterisk>
						<a-input-number
							v-model.trim="form.rank"
							placeholder="输入位次"
							hide-button
							@click="websiteConfig.loginModal = true"
						/>
					</a-form-item>
					<a-button
						type="primary"
						class="mt-[20px]"
						@click="websiteConfig.loginModal = true"
					>
						开始填报
					</a-button>
				</a-form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsSwiper">
import { Pagination, Autoplay } from 'swiper/modules';
// 网站信息
const { websiteConfig, swiperData, getWebsiteConfig } = useWebsiteInformation();
// 表单
const { form, formRef, resetForm } = useForm(() => ({
	achievement: undefined,
	rank: undefined,
}));
// 表单验证
const rules = {
	achievement: {
		required: true,
		message: '请输入成绩',
	},
	rank: {
		required: true,
		message: '请输入位次',
	},
};

// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		submitData();
	});
};
// 提交数据
const submitData = async () => {
	// const { err } = await curryingRequest(
	// 	{
	// 		url,
	// 		data: {
	// 			...form.value,
	// 		},
	// 	},
	// 	{
	// 		before: () => setActiveKey('okLoading'),
	// 		after: () => setActiveKey(null),
	// 	}
	// );
	// // 处理错误
	// if (err) return;
	// // 触发成功
	// emits('success');
	// // 触发关闭
	// emits('cancel');
};
</script>
