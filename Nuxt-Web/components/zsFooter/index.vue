<template>
	<footer class="bg-[#333] pt-[20px] pb-[20px] mt-[50px] px-[10px]">
		<div class="max-w-container mx-auto h-full flex items-center justify-between">
			<div>
				<span
					class="cursor-pointer mr-[20px] text-[#999999] hover:text-[#657FFF]"
					v-for="item in routeMenuList"
				>
					<nuxt-link :to="item.path">
						{{ item.name }}
					</nuxt-link>
				</span>
				<div class="mt-[40px] text-[#999999]">
					<!-- 毕业之家志愿填报 山东毕业之家科技有限公司 @2018-2024 鲁ICP备2022024473号-1 -->
					Copyright © 2024 四川毕业之家科技有限公司 蜀ICP备2023034485号-1
					联系电话：4000663985
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

<script setup lang="ts" name="ZsFooter"></script>
