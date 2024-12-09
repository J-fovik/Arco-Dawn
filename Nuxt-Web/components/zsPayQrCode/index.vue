<template>
	<div v-if="data.sellingPrice !== 0" class="flex items-center justify-between">
		<div
			class="w-[134px] h-[134px] bg-[url(/images/pay-bg.png)] bg-cover flex items-center justify-center"
		>
			<a-spin tip="加载中" :size="32" class="w-[130px] h-[130px]" :loading="loading">
				<div
					v-if="payMsg && !payUrl"
					class="f-c-c flex-col w-[130px] h-[130px] text-xs px-[20px] text-center text-primary"
					@click="getPayInfo"
				>
					<span>{{ payMsg }}</span>
					<icon-refresh size="20" class="mt-[10px]" />
				</div>
				<nuxt-img v-if="payUrl" :src="payUrl" class="w-[130px] h-[130px]" alt="" />
			</a-spin>
		</div>
		<div>
			<div class="text-[#999999]">选择微信、支付宝APP扫码支付</div>
			<div class="mt-[12px] flex gap-x-[17px]">
				<a-button
					status="success"
					type="outline"
					:class="payMode === '0' ? '' : 'opacity-50'"
					class="hover:opacity-100"
					@click="setPayMode('0')"
				>
					<span>微信</span>
					<template #icon>
						<i v-if="payMode === '0'" class="iconfont icon-duihao1"></i>
						<i v-else class="iconfont icon-weixinzhifu1"></i>
					</template>
				</a-button>
				<a-button
					type="outline"
					class="!border-[#165DFF] !text-[#165DFF] hover:opacity-100"
					:class="payMode === '1' ? '' : 'opacity-50'"
					@click="setPayMode('1')"
				>
					<span>支付宝</span>
					<template #icon>
						<i v-if="payMode === '1'" class="iconfont icon-duihao1"></i>
						<i v-else class="iconfont icon-zhifubao"></i>
					</template>
				</a-button>
			</div>
		</div>
		<div>
			<div class="flex items-center">
				<div>
					<span class="text-[22px]">￥</span>
					<span class="font-medium leading-none text-[40px]">{{
						turnThousandth(data.sellingPrice)
					}}</span>
				</div>
				<div class="bg-[#FFF7F0] p-[5px] ml-[10px] text-[#FFA864]">
					已优惠{{ turnThousandth(data.originalPrice - data.sellingPrice) }}元
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import QRCode from 'qrcode';
import { useIntervalFn } from '@vueuse/core';
// import { useQRCode } from '@vueuse/integrations/useQRCode';
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => ({} as any),
	}
);

// 父组件方法
const emits = defineEmits(['success']);
// 请求插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// loading
const [loading, setLoading] = useBasicsState(false);
// 定时
const { pause, resume, isActive } = useIntervalFn(() => getPayStatus(), 3000, {
	immediate: false,
});
// 支付二维码信息
const [payMsg, setPayMsg] = useBasicsState('');
// 支付参数
const payInfo = ref<any>({});
// 支付二维码信息
const payCode = ref('');
// // 二维码
// const payUrl = useQRCode(payCode, {
// 	margin: 1,
// });
const payUrl = ref('');
const generateQRCode = async (text: any) => {
	try {
		const opts = {
			margin: 1,
		};
		payUrl.value = await QRCode.toDataURL(text, opts);
	} catch (err) {
		console.error(err);
	}
};
// 支付方式
const [payMode, setPayMode] = useBasicsState('0', () => {
	getPayInfo();
});
// 获取支付状态
const getPayStatus = async () => {
	const [err, res] = await $zsFetch(
		API_URLS.USER.GET_PAY_STATUS,
		{
			baseURL: useRuntimeConfig().public.payURL as string,
			body: {
				userId: userInfo.value.id,
				payMethod: payMode.value,
				paySource: '0', // 支付来源 0PC端 1手机网页 2微信公众号 3微信小程序 4抖音小程序
				orderNo: payInfo.value.orderNo,
			},
		},
		{ isMsg: false }
	);
	// 处理结果
	if (err) return;
	if (res?.data?.status == '01') {
		// 暂停
		pause();
		// 消息提示
		$zsMsg('success', '支付成功');
		// 通知
		emits('success', payInfo.value);
	}
};
// 获取支付信息
const getPayInfo = async () => {
	// 价格等于0不获取二维码
	if (props.data.sellingPrice == 0) {
		return;
	}
	// 加载中
	setLoading(true);
	// 清空消息
	setPayMsg('');
	// 激活状态下暂停
	pause();
	const [err, res] = await $zsFetch(API_URLS.USER.GET_PRE_CREATE, {
		baseURL: useRuntimeConfig().public.payURL as string,
		body: {
			payMethod: payMode.value, // 支付类型 0微信 1支付宝 2银联
			paySource: '0', // 固定传0
			transType: props.data.cardType, // 交易类型 0.购买VIP 1-1.专家在线辅助填报 1-2.专家一对一填报，对应card_type
			vipPriceId: props.data.id, // 价格ID
			userId: userInfo.value.id, // 用户ID
		},
	});
	// 加载中
	setLoading(false);
	// 处理错误
	if (err) return setPayMsg('二维码获取失败');
	// 处理数据
	payInfo.value = res.data;
	// 设置二维码信息
	payCode.value = res.data.codeUrl;
	generateQRCode(res.data.codeUrl);
	// 开始轮训查询订单状态
	resume();
};

// 挂载
onMounted(() => {
	getPayInfo();
});
// 卸载
onUnmounted(() => {
	pause();
});
</script>
