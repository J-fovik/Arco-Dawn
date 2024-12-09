<template>
	<div class="max-w-container mx-auto">
		<div class="flex justify-between mt-[20px]">
			<!-- 个人中心左侧 -->
			<div class="w-[250px]">
				<div class="filter">
					<div
						class="bg-[url('/images/userInfo.png')] bg-no-repeat bg-[length:250px_87px] flex items-center justify-center h-[87px]"
					>
						<a-image
							:src="userInfo.header ? userInfo.header : '/images/avatar.png'"
							class="cursor-pointer rounded-50"
							width="50px"
							height="50px"
							alt=""
						/>
					</div>
					<!-- 信息 -->
					<div class="h-[420px] w-full rounded-[0px_0px_16px_16px] bg-white">
						<div class="text-[18px] font-bold text-center">
							{{ hidePhoneFormat(userInfo.phone) }}
						</div>
						<div class="flex items-center justify-center flex-col">
							<div
								v-if="userInfo?.vipStateValue == '1'"
								class="text-[12px] text-white flex items-center justify-center text-center bg-[#FFA864] rounded-[20px] w-[130px] my-[10px]"
							>
								<span v-if="userInfo?.vipType != '0'">{{
									userInfo?.vipType == '1-1'
										? '专家在线辅助填报'
										: '专家一对一填报'
								}}</span>
								<i class="iconfont icon-f-vip fontSize" />
							</div>
							<div
								v-if="userInfo?.vipStateValue == '1' && userInfo?.vipExpirationTime"
								class="text-[#999]"
							>
								有效期截至{{
									formatDate(userInfo?.vipExpirationTime, 'YYYY-MM-DD')
								}}
							</div>
						</div>
						<!-- 选项卡 -->
						<a-radio-group
							v-model="form.currentTab"
							class="m-[20px]"
							@change="changeTab"
						>
							<template
								v-for="tab in tabList"
								:key="tab.value"
								class="flex items-center justify-center flex-row"
							>
								<a-radio :value="tab.value">
									<template #radio="{ checked }">
										<div
											class="px-[20px] w-[210px] leading-[40px] rounded-[4px]"
											:class="{
												'bg-[#F2F5FF] text-[#7C92FF] font-bold': checked,
											}"
										>
											{{ tab.label }}
										</div>
									</template>
								</a-radio>
							</template>
						</a-radio-group>
					</div>
				</div>
			</div>
			<!-- 个人中心右侧 -->
			<div class="flex-1 ml-[40px] bg-white">
				<!-- 我的志愿 -->
				<template v-if="form.currentTab === 'myVolunteer'">
					<zs-personal-volunteer :data="data" :loading="false" />
				</template>
				<!-- 我的测评 -->
				<template v-if="form.currentTab === 'myEvaluation'">
					<zs-personal-evaluation />
				</template>
				<!-- 个人资料 -->
				<template v-if="form.currentTab === 'personalData'">
					<zs-personal-data />
				</template>
				<!-- 我的关注 -->
				<template v-if="form.currentTab === 'myAttention'">
					<zs-personal-follow />
				</template>
				<!-- 会员中心 -->
				<template v-if="form.currentTab === 'memberCenter'">
					<zs-personal-member />
				</template>
				<!-- 专属码绑定 -->
				<template v-if="form.currentTab === 'exclusiveCode'">
					<div class="text-[24px] leading-[28px] font-bold mb-[20px]">专属码绑定</div>
				</template>
				<!-- 用户协议 -->
				<template v-if="form.currentTab === 'userAgreement'">
					<div class="text-[24px] leading-[28px] font-bold">用户协议</div>
					<zs-personal-agreement />
				</template>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '个人中心',
});
// 页面信息
definePageMeta({
	requiresAuth: true,
});
// 路由信息
const route = useRoute();
const router = useRouter();
// 用户信息
const { userInfo } = useUser();
// 选项卡数组
const tabList = [
	{
		label: '我的志愿',
		value: 'myVolunteer',
	},
	{
		label: '我的测评',
		value: 'myEvaluation',
	},
	{
		label: '个人资料',
		value: 'personalData',
	},
	{
		label: '我的关注',
		value: 'myAttention',
	},
	{
		label: '会员中心',
		value: 'memberCenter',
	},
	{
		label: '专属码绑定',
		value: 'exclusiveCode',
	},
	{
		label: '用户协议',
		value: 'userAgreement',
	},
];
// form
const { form } = useForm(() => ({
	currentTab: tabList.map((o: any) => o.value).includes(route.query.tab as string)
		? (route.query.tab as string)
		: 'myVolunteer', // 当前选项卡
}));
const data = ref([] as any);
// 切换左侧选项卡
const changeTab = () => {
	// 路由重定向
	router.replace({
		query: { ...route.query, tab: form.value.currentTab },
	});
};
// 监听路由query，重定向
watch(
	() => route.query.tab,
	() => {
		// 在选项卡包含的情况下
		if (tabList.map((o: any) => o.value).includes(route.query.tab as string)) {
			// 重定向
			router.replace({
				query: { ...route.query, tab: route.query.tab },
			});
			// 回显当前选项卡
			form.value.currentTab = route.query.tab as string;
		}
	},
	{ immediate: true }
);
</script>
<style>
.filter {
	filter: drop-shadow(0 5px 20px rgba(0, 0, 0, 0.05));
}
.fontSize {
	font-size: 18px;
}
.rounded-50 {
	@apply rounded-[50%];
}
</style>
