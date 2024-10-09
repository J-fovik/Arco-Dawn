<template>
	<footer class="bg-[#333] pt-[20px] pb-[20px] mt-[50px] px-[10px]">
		<div class="max-w-container mx-auto h-full flex items-center justify-between">
			<div>
				<span
					class="cursor-pointer mr-[20px] text-[#999999] hover:text-[#657FFF]"
					v-for="item in menuList"
				>
					<nuxt-link :to="item.path">
						{{ item.name }}
					</nuxt-link>
				</span>
				<div class="mt-[40px] text-[#999999]">
					毕业之家志愿填报 山东毕业之家科技有限公司 @2018-2024 鲁ICP备2022024473号-1
				</div>
			</div>
			<div class="flex flex-col items-center justify-center">
				<a-image
					src="/images/qrCode.png"
					width="120"
					class="rounded-[5px_5px] cursor-zoom-in"
					height="120"
				></a-image>
				<div class="text-[#999999] mt-[10px]">毕业之家-升学规划小程序</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts" name="ZsFooter">
// 导航菜单
const menuList = [
	{
		name: '查大学',
		path: '/college',
	},
	{
		name: '查专业',
		path: '/major',
	},
	{
		name: '生涯测评',
		path: '/evaluate',
	},
	{
		name: '新高考选科',
		path: '/subject',
	},
	{
		name: '智能填报',
		path: '/choice',
	},
	{
		name: '升学规划',
		path: '/plan',
	},
];
</script>
