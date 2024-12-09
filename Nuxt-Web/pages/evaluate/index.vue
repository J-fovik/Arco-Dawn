<template>
	<div class="max-w-container mx-auto min-h-[60vh]">
		<a-list :bordered="false" :loading="status === 'pending'">
			<a-list-item v-for="(item, index) in evaluateList" :key="index">
				<div
					class="bg-[url('/images/evaluate.png')] bg-no-repeat bg-[length:100%_100%] mt-[20px] p-[20px_40px]"
				>
					<div class="text-[28px] font-bold">{{ item.name }}</div>
					<div class="mt-[10px] text-[16px] w-[700px]">{{ item.advertiseTitle }}</div>
					<div class="mt-[10px]">
						<span class="mr-[30px]">
							<i
								class="iconfont icon-wodeguanzhu font-bold text-[#666666] mr-[5px]"
							/>
							<span
								>已测人数：<span>{{ turnThousandth(item.userNum) }}</span> 万</span
							>
						</span>
						<span class="mr-[30px]">
							<i class="iconfont icon-rili font-bold text-[#666666] mr-[5px]" />
							<span>测评周期：<span>1天</span>/次</span>
						</span>
						<span class="mr-[30px]">
							<i class="iconfont icon-wenjuan font-bold text-[#666666] mr-[5px]" />
							<span
								>精选题目：<span>{{ item.topicNum }}</span
								>题</span
							>
						</span>
						<span>
							<i class="iconfont icon-bofangjilu font-bold text-[#666666] mr-[5px]" />
							<span>建议时常：<span>不限</span></span>
						</span>
					</div>

					<template v-if="item.userEvaluationState == '1'">
						<a-button
							type="primary"
							class="openButton mt-[20px]"
							@click="determineLogin(() => navigateTo(`/evaluate/${item.id}`))"
						>
							开始测评
						</a-button>
					</template>
					<template v-else>
						<a-space>
							<a-button
								type="primary"
								class="openButton mt-[20px]"
								@click="getEvaluateTime(item)"
							>
								开始测评
							</a-button>
							<a-button
								type="primary"
								:loading="activeKey === item.id + '查看报告'"
								class="viewResult mt-[20px]"
								@click="viewReport(item.id)"
							>
								查看报告
							</a-button>
						</a-space>
					</template>
				</div>
			</a-list-item>
		</a-list>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '生涯测评',
});
// 页面信息
definePageMeta({
	requiresAuth: true,
});
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 用户信息
const { determineLogin } = useUser();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// 获取测评列表
const { data: evaluateList, status } = await useAsyncData<any>(
	'evaluateList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.EVALUATE.GET_EVALUATE_LIST, {});
		return res.data ?? [];
	},
	{ default: () => [] }
);
// 获取测评时间
const getEvaluateTime = async (item: any) => {
	const [err, res] = await $zsFetch(API_URLS.EVALUATE.GET_EVALUATE_TIME, {
		body: {
			id: item.id,
		},
	});
	// result == 1 直接做题否则提示还剩多少时间
	if (res.data?.result == 1) {
		navigateTo(`/evaluate/${item.id}`);
	} else {
		$zsMsg('waring', res.data?.arriveTime);
	}
};
// 查看报告
const viewReport = async (id: any) => {
	// 设置当前值
	setActiveKey(id + '查看报告');
	const [err, res] = await $zsFetch(API_URLS.EVALUATE.VIEW_EVALUATE_REPORT, {
		body: {
			id: id,
		},
	});
	if (res) {
		// 清空当前值并打开报告
		setActiveKey(null);
		window.open(res.data, '_blank');
	}
};
</script>
<style scoped>
.openButton {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
.openButton:hover {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
.viewResult {
	border-radius: 8px 8px 8px 8px;
	border: 1px solid #7c92ff;
	color: #7c92ff;
	background-color: transparent;
}
.viewResult:hover {
	border-radius: 8px 8px 8px 8px;
	border: 1px solid #7c92ff;
	color: #7c92ff;
	background-color: transparent;
}
</style>
