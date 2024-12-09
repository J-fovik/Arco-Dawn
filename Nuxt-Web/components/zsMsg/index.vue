<template>
	<div class="fixed top-[50px] z-[9999] inset-x-0 f-c-c flex-col pointer-events-none">
		<div
			v-for="msg in msgList"
			class="min-w-[300px] h-[80px] bg-white shadow-lg rounded-lg relative f-c-c mb-[30px]"
		>
			<div class="inset-0 absolute -top-[40px] flex justify-center">
				<nuxt-img :src="`/images/msg-${msg.type}.png`" class="w-[90px] h-[76px]" />
			</div>
			<span class="font-medium text-[20px] mt-[20px] px-[20px]">{{ msg.content }}</span>
		</div>
	</div>
</template>

<script setup lang="ts">
// 用户信息
const { userInfo } = useUser();
// 消息队列
const msgList = computed(() => {
	return userInfo.value.msgMap.values();
});
</script>
