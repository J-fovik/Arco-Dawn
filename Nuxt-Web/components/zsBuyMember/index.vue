<template>
	<div
		class="bg-[url('/images/buyMember.png')] bg-no-repeat bg-[length:100%_100%] mt-[20px] p-[20px_40px] w-[800px]"
	>
		<div class="flex items-center justify-between">
			<div class="flex items-center">
				<div class="w-[40px]">
					<img src="/images/avatar.png" class="w-[40px] cursor-pointer" alt="" />
				</div>
				<div class="ml-[10px]">
					<div>账号：{{ hidePhoneFormat(userInfo.phone) }}</div>
					<div>
						<span>已选：{{ textFormat(userInfo.province) }}</span>
						<span class="mx-[10px]">|</span>
						<span>{{ textFormat(userInfo.xk) }}</span>
						<span class="mx-[10px]">|</span>
						<span>{{ textFormat(userInfo.score) + '分' }}</span>
					</div>
				</div>
			</div>
			<icon-close size="20" class="cursor-pointer" @click="emits('success')" />
		</div>
		<!-- <div class="flex items-center justify-between mt-[30px]">
			<div
				v-for="(item, index) in form.memberList"
				:key="index"
				:class="`text-[${item.color}] ${
					form.curMemberInfo?.cardType == item.cardType ? 'border' : ''
				}`"
				class="rounded-[8px] flex items-center flex-col p-[20px] cursor-pointer"
				:style="{
					background: item.background,
				}"
				@click="onClickItem(item)"
			>
				<div class="text-[18px] font-bold">
					<i class="iconfont" :class="item.icon" />
					{{ item.remark }}
				</div>
				<div class="text-[40px] font-[1000] mt-[10px]">
					{{ turnThousandth(item.sellingPrice) }}<span class="text-[14px]">元</span>
				</div>
				<del class="">全国统一零售价：{{ turnThousandth(item.originalPrice) }}元</del>
			</div>
		</div> -->
		<div class="flex items-center justify-center mt-[30px]">
			<div
				:class="`text-[${data.color}]`"
				class="rounded-[8px] flex items-center flex-col p-[20px] cursor-pointer border"
				:style="{
					background: data.background,
				}"
			>
				<div class="text-[18px] font-bold">
					<i class="iconfont" :class="data.icon" />
					{{ data.remark }}
				</div>
				<div class="text-[40px] font-[1000] mt-[10px]">
					{{ turnThousandth(data.sellingPrice) }}<span class="text-[14px]">元</span>
				</div>
				<del class="">全国统一零售价：{{ turnThousandth(data.originalPrice) }}元</del>
			</div>
		</div>
		<div v-if="data.cardType" class="mt-[50px] w-[667px] mx-[auto]">
			<client-only>
				<zs-pay-qr-code :data="data" :key="data.cardType" @success="paySuccess" />
			</client-only>
		</div>
	</div>
</template>
<script setup lang="ts" name="ZsBuyMember">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => ({} as any),
	}
);
// 用户信息
const { userInfo, getUserInfo } = useUser();
// 父组件方法
const emits = defineEmits(['success']);
// 充值成功
const paySuccess = async () => {
	emits('success');
	// 更新用户信息
	await getUserInfo();
	// 提示成功
};
</script>
<style scoped>
.border {
	border: 2px solid #7c92ff;
}
</style>
