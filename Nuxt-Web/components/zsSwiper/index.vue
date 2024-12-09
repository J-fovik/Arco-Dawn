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
			<swiper-slide>
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
					src="/images/banner1.jpg"
					class="w-full h-[350px] bg-no-repeat bg-[length:auto_100%] bg-[50%] m-[0px_auto]"
				></nuxt-img>
				<!-- </nuxt-link> -->
			</swiper-slide>
		</swiper>
		<!-- 模拟志愿填报 -->
		<div class="max-w-container mx-auto relative">
			<div
				class="w-[340px] bg-white absolute p-[10px_20px] right-0 top-[-340px] bottom-[10px] z-10 rounded-lg"
				@click="determineLogin()"
			>
				<div class="text-[20px] leading-[40px]">模拟志愿填报</div>
				<a-form ref="formRef" :model="form" label-align="left" auto-label-width>
					<template v-if="form.gkms === '3+1+2'">
						<!-- 首选科目 -->
						<a-form-item label="首选科目:">
							<a-checkbox-group
								:max="1"
								v-model="form.firstSubjectList"
								@change="changeFirstSubject"
							>
								<template
									v-for="item in FIRST_CHOICE_SCIENCES_OPTIONS"
									:key="item.value"
								>
									<a-checkbox :value="item.value">
										<template #checkbox="{ checked }">
											<a-space
												align="start"
												class="rounded-[4px] p-[10px_6px] text-center border"
												:class="{
													'border-[#1677ff] bg-[#F2F5FF]': checked,
												}"
											>
												{{ item.label }}
											</a-space>
										</template>
									</a-checkbox>
								</template>
							</a-checkbox-group>
						</a-form-item>
						<!-- 次选科目 -->
						<a-form-item label="次选科目:">
							<a-checkbox-group
								:max="2"
								v-model="form.secondSubjectList"
								@change="changeSecondSubject"
							>
								<template
									v-for="item in SECOND_CHOICE_SCIENCES_OPTIONS"
									:key="item.value"
								>
									<a-checkbox :value="item.value">
										<template #checkbox="{ checked }">
											<a-space
												align="start"
												class="rounded-[4px] p-[10px_5px] text-center border"
												:class="{
													'border-[#1677ff] bg-[#F2F5FF]': checked,
												}"
											>
												{{ item.label }}
											</a-space>
										</template>
									</a-checkbox>
								</template>
							</a-checkbox-group>
						</a-form-item>
					</template>
					<template v-else>
						<a-form-item label="选考科目:">
							<a-checkbox-group
								:max="3"
								v-model="form.subjectList"
								@change="changeSubject"
							>
								<template
									v-for="item in form.province === '浙江'
										? SUBJECT_OPTIONS
										: SUBJECT_OPTIONS.slice(0, 6)"
									:key="item.value"
								>
									<a-checkbox :value="item.value">
										<template #checkbox="{ checked }">
											<div
												class="flex items-center justify-between flex-wrap"
											>
												<div
													class="rounded-[4px] p-[10px_10px] text-center border mb-[5px]"
													:class="{
														'border-[#1677ff] bg-[#F2F5FF]': checked,
													}"
												>
													{{ item.label }}
												</div>
											</div>
										</template>
									</a-checkbox>
								</template>
							</a-checkbox-group>
						</a-form-item>
					</template>
					<a-form-item label="我的成绩:" hide-asterisk :validate-trigger="['input']">
						<a-input-number
							v-model.trim="form.score"
							:precision="0"
							:min="0"
							:max="750"
							hide-button
							allow-clear
							placeholder="输入我的成绩"
							@input="changeScore"
						>
							<template #append>
								<div>分</div>
							</template>
						</a-input-number>
					</a-form-item>
					<a-form-item label="省排名:" hide-asterisk>
						<a-input-number
							v-model.trim="form.wc"
							placeholder="预估位次（自动换算）"
							readonly
							hide-button
						>
						</a-input-number>
					</a-form-item>
					<a-button
						type="primary"
						class="mt-[10px]"
						@click="determineLogin(() => validateData())"
					>
						智能推荐大学
					</a-button>
				</a-form>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsSwiper">
import { Pagination, Autoplay } from 'swiper/modules';
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 用户信息
const { userInfo, determineLogin } = useUser();
// 表单
const { form, formRef, resetForm } = useForm<any>(() => ({
	secondSubjectList: [],
	changeSecondSubject: [],
	firstSubjectList: [],
}));
// 回显分数
const echoDisplay = () => {
	// 存在信息回显数据
	if (userInfo.value.score) {
		const xkList = userInfo.value.xk.split('/');
		// 是否为3+1+2
		const isSpecial = userInfo.value.gkms === '3+1+2' && ['物', '史'].includes(xkList[0]);
		form.value = {
			...form.value,
			...userInfo.value,
			subjectList: isSpecial ? [] : xkList,
			firstSubjectList: isSpecial ? [xkList[0]] : [], // 回显首选学科
			secondSubjectList: isSpecial ? [...xkList.slice(1, 3)] : [], // 回显次选学科
		};
	}
};
// 切换3+3模式选科
const changeSubject = () => {
	if (form.value.subjectList.length === 3 && form.value.score) {
		// 查询位次
		getEstimatedWc();
	}
};
// 切换首选科目
const changeFirstSubject = () => {
	// 清空分数以及位次
	form.value.score = undefined;
	form.value.wc = undefined;
	if (
		form.value.firstSubjectList.length === 1 &&
		form.value.secondSubjectList.length === 2 &&
		form.value.score
	) {
		// 查询位次
		getEstimatedWc();
	}
};
// 切换次选科目
const changeSecondSubject = () => {
	if (form.value.secondSubjectList.length === 2 && form.value.score) {
		// 查询位次
		getEstimatedWc();
	}
};
// 改变分数
const changeScore = (e: any) => {
	form.value.score = e;
	// 清空位次
	form.value.wc = undefined;
	if (e > 100) {
		// 查询位次
		getEstimatedWc();
	}
};
// 获取预估位次
const getEstimatedWc = async () => {
	// 选科
	const xkList =
		form.value.gkms === '3+3'
			? form.value.subjectList
			: [...form.value.firstSubjectList, ...form.value.secondSubjectList];
	// 未选省份
	if (!form.value.province) {
		// 提示
		return $zsMsg('error', '请选择省份');
	}
	if (['3+1+2', '3+3'].includes(form.value.gkms)) {
		if (xkList.length != 3) {
			// 提示
			return $zsMsg('error', '请选择对应数量科目');
		}
	}
	// 未填分数提示
	if (!form.value.score) {
		// 提示
		return $zsMsg('error', '请输入分数');
	}
	const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_WC, {
		method: 'POST',
		body: {
			score: form.value.score,
			province: form.value.province,
			xk: xkList.join('/'),
		},
	});
	// 处理错误
	if (err) return;
	form.value.wc = res.data ?? '';
};
// 验证数据
const validateData = () => {
	formRef.value.validate((errors: any) => {
		if (errors) return;
		if (form.value.gkms === '3+3' && form.value.subjectList.length !== 3) {
			$zsMsg('error', '请选择对应数量科目');
			return;
		}
		if (
			form.value.gkms === '3+1+2' &&
			(form.value.firstSubjectList.length !== 1 || form.value.secondSubjectList.length !== 2)
		) {
			$zsMsg('error', '请选择对应数量科目');
			return;
		}
		if (!form.value.score) {
			return $zsMsg('error', '请输入分数');
		}
		if (!form.value.wc) {
			return $zsMsg('error', '未查询到对应位次');
		}
		submitData();
	});
};
// 提交数据
const submitData = async () => {
	// 选科
	const xkList =
		form.value.gkms === '3+3'
			? form.value.subjectList
			: [...form.value.firstSubjectList, ...form.value.secondSubjectList];
	const [err, res] = await $zsFetch(API_URLS.CHOICE.INDEX_TO_FILL_VOLUNTEER, {
		body: {
			xk: xkList.join('/'),
			score: form.value.score,
			wc: form.value.wc,
		},
	});
	if (err) return;
	// 去填报
	navigateTo(`/choice?wid=${res?.data}`);
};
onMounted(() => {
	echoDisplay();
});
watch(
	() => [userInfo.value.province, userInfo.value.xk, userInfo.value.score, userInfo.value.wc],
	async () => {
		echoDisplay();
	},
	{ immediate: true }
);
</script>
<style scoped>
:deep(.arco-form-item) {
	margin-bottom: 10px;
}
:deep(.arco-checkbox-group .arco-checkbox) {
	margin-right: 10px;
}
</style>
