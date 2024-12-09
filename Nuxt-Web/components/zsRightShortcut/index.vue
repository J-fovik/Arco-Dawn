<template>
	<teleport to="body">
		<div class="fixed top-[55%] -right-[1px]">
			<div
				class="px-[8px] bg-white border rounded-[25px_0_0_25px] border-[#E6E6E6] py-[20px]"
			>
				<a-space direction="vertical">
					<template #split>
						<a-divider direction="horizontal" />
					</template>
					<!-- 企业微信 -->
					<div
						class="relative group flex flex-col cursor-pointer items-center justify-center hover:text-[#657fff]"
					>
						<icon-wechat size="30" />
						<span class="text-[14px] mt-[5px]">企业微信</span>
						<div
							class="absolute right-[70px] top-[-30px] transition-all flex flex-col justify-center items-center w-[0px] overflow-hidden h-[220px] bg-white group-hover:w-[200px] shadow-2xl rounded-xl"
						>
							<div class="w-[160px] h-[160px]">
								<img
									src="https://work.weixin.qq.com/kf/kefu/qrcode?kfcode=kfc1ea0087cab95ea72"
								/>
							</div>
							<div class="mt-[10px] text-center">微信扫码企业微信</div>
						</div>
					</div>
					<!-- 客服电话 -->
					<div
						class="relative group flex flex-col cursor-pointer items-center justify-center hover:text-[#657fff]"
					>
						<icon-phone size="30" />
						<span class="text-[14px] mt-[5px]">客服电话</span>
						<div
							class="absolute right-[70px] top-0 transition-all flex flex-col justify-center items-center w-[0px] overflow-hidden h-[50px] bg-white group-hover:w-[200px] shadow-2xl rounded-xl"
						>
							<div>12345678910</div>
						</div>
					</div>
				</a-space>
			</div>
		</div>
	</teleport>
</template>

<script lang="ts" setup name="ZsRightShortcut">
// 返回顶部
const scrollTop = () => {
	window.scrollTo(0, 0);
};
</script>
