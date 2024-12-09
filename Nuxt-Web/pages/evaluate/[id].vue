<template>
	<div class="max-w-container mx-auto min-h-[70vh]">
		<template v-if="!form.error">
			<!-- 选择 -->
			<div v-if="!loading && !form.isResult">
				<div class="flex items-center justify-between mb-[10px]">
					<div class="mt-[20px]">
						<span class="text-[#FFA864]">{{ form.cur + 1 }}</span>
						<span>/</span>
						<span>{{ form.evaluateList?.length }}</span>
					</div>
					<div></div>
				</div>
				<!-- 进度条 -->
				<zs-proportion
					:width="
						(form.cur / (form.evaluateList.length - 1)) * 100 > 0
							? (form.cur / (form.evaluateList.length - 1)) * 100
							: 1
					"
					background="#7C92FF"
					:isAnimate="false"
					:key="form.cur"
				/>
				<div v-if="form.evaluateList?.length">
					<div class="mt-[40px] mb-[20px] text-[20px]">
						{{ form.evaluateList[form.cur]?.titleSort }}、{{
							form.evaluateList[form.cur]?.title
						}}
					</div>
					<div v-for="(o, i) in form.evaluateList[form.cur]?.answerOptionsList" :key="i">
						<div
							class="relative h-[50px] leading-[50px] rounded-[8px] px-[30px] mb-[10px] cursor-pointer border-left transition"
							:class="
								form.evaluateList[form.cur]?.myAnswer == o
									? 'bg-[#7c92ff]'
									: 'bg-[#F9F9F9]'
							"
							@click="selectAnswer(o, form.cur)"
						>
							<div>{{ o }}</div>
						</div>
					</div>
					<div class="mt-[20px] flex items-center justify-between">
						<a-button
							v-if="form.cur !== 0"
							type="primary"
							class="openButton"
							@click="prevQuestion"
							><icon-arrow-left class="mr-[2px]" />上一题
						</a-button>
						<a-button
							v-if="checkedNum >= 30"
							type="primary"
							class="openButton"
							@click="submitUserEvaluationReport"
							><icon-check class="mr-[2px]" />提交
						</a-button>
					</div>
				</div>
			</div>
			<div
				v-else-if="loading && !form.isResult"
				class="flex items-center justify-center flex-col"
			>
				<div class="mt-[30px] text-[18px]">测评完成，正在生成报告...</div>
				<img src="/images/loading.gif" alt="" />
			</div>
			<div v-else class="flex items-center justify-center flex-col">
				<div class="flex items-center justify-center mt-[50px]">
					<img src="/images/ok.png" style="width: 120px" alt="" />
				</div>
				<div class="text-[32px] font-bold">测评完成</div>
				<div class="text-[14px] text-[#666] my-[10px]">
					共完成 {{ form.evaluateList.length }} 题
				</div>
				<a-button type="primary" class="openButton" @click="viewReport">查看报告 </a-button>
			</div>
		</template>
		<zs-no-data v-else>
			<div>糟糕，页面好像没找到</div>
		</zs-no-data>
	</div>
</template>

<script setup lang="ts">
// 防抖
import { useDebounceFn } from '@vueuse/core';
// 设置头信息
useHead({
	title: '测评详情',
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// 页面loading
const [loading, setLoading] = useBasicsState(false);
// 用户信息
// 路由信息
const route = useRoute();
// form
const { form } = useForm(() => ({
	error: false, // 判断是否不存在该院校
	evaluateList: [] as any, // 题列表
	cur: 0, // 当前索引
	isResult: false, // 是否有报告
	time: 0, // 计时用
	canClick: true, // 是否可以点击
}));
// 已选择数量
const checkedNum = computed(() => {
	return form.value.evaluateList?.map((o: any) => o.myAnswer).filter((v: any) => v !== '')
		?.length;
});
// 选择答案
const selectAnswer = async (answer: any, current: any) => {
	//  判断是否可以点击
	if (!form.value.canClick) {
		return;
	}
	// 禁止连续点击
	form.value.canClick = false;
	// 存储当前答案
	form.value.evaluateList[current].myAnswer = answer;
	await sleep(500);
	// 可以点击
	form.value.canClick = true;
	if (current + 1 == form.value.evaluateList.length) {
		// 提交
		await submitUserEvaluationReport();
	} else {
		form.value.cur++;
	}
};
// 节流
const debounceFn = useDebounceFn((answer: any, current: any) => {
	selectAnswer(answer, current);
}, 100);
// 上一题
const prevQuestion = () => {
	form.value.cur--;
};
// 提交报告
const submitUserEvaluationReport = async () => {
	// 开启loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.EVALUATE.SUBMIT_EVALUATE, {
		body: {
			id: route.params.id,
			topicAndAnswer: form.value.evaluateList
				.filter((v: any) => v.myAnswer !== '')
				.map((o: any) => o.titleSort + '-' + (o.myAnswer == '是' ? '0' : '1')),
		},
	});
	// 关闭loading
	setLoading(false);
	if (res) {
		form.value.isResult = true;
	}
};
// 查看报告
const viewReport = async () => {
	const [err, res] = await $zsFetch(API_URLS.EVALUATE.VIEW_EVALUATE_REPORT, {
		body: {
			id: route.params.id,
		},
	});
	if (res) {
		window.open(res.data, '_blank');
	}
};
// 获取测评详情
const getEvaluateInfo = async () => {
	const [err, res] = await $zsFetch(API_URLS.EVALUATE.QUERY_QUESTIONS, {
		body: {
			id: route.params.id,
		},
	});
	// 处理错误
	if (res.data === '未查询到当前测评试题!') {
		form.value.error = true;
		return;
	}
	// 赋值信息
	form.value.evaluateList = res.data.resultList.map((o: any) => {
		return {
			...o,
			myAnswer: '',
		};
	});
};
getEvaluateInfo();
</script>
<style scoped>
.border-left {
	border-left: 8px solid #7c92ff;
}
.openButton {
	background: #ededed;
	color: #333;
	border-radius: 4px;
}
.openButton:hover {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
.transition {
	transition: all 0.8s ease 0s;
}
</style>
