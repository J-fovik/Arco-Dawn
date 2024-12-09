<template>
	<div>
		<!-- 专业简介 -->
		<div v-if="data.xj">
			<zs-title title="专业简介" size="small" />
			<div class="mt-[10px] leading-[20px] indent-[2rem]" v-html="data.xj"></div>
		</div>
		<!-- 比例 -->
		<a-grid
			v-if="data.girlRate || data.girlRate || data.wenRate || data.liRate"
			:cols="2"
			:colGap="100"
			class="bg-[#FCFCFC] p-[20px] mt-[20px]"
		>
			<!-- 男女比例 -->
			<a-grid-item v-if="data.girlRate || data.girlRate">
				<div class="font-bold">男女比例</div>
				<div class="flex items-center justify-between mt-[40px]">
					<div class="flex items-center">
						<img src="/images/boy.png" style="width: 36px; height: 36px" alt="" />
						<span class="text-[#5AB9FF] font-bold text-[18px] ml-[10px]">{{
							data.boyRate + '%'
						}}</span>
					</div>
					<div class="flex items-center">
						<span class="text-[#FFA864] font-bold text-[18px] mr-[10px]">{{
							data.girlRate + '%'
						}}</span>
						<img src="/images/girl.png" style="width: 36px; height: 36px" alt="" />
					</div>
				</div>
				<div class="flex items-center justify-between mt-[24px]">
					<div class="w-[40px]">男生</div>
					<div class="w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]">
						<div
							class="bg-[#5AB9FF] rounded-[10px_0px_20px_10px]"
							:style="{ width: data.boyRate + '%' }"
						></div>
						<div
							class="bg-[#FFA864] rounded-[20px_10px_10px_0px]"
							:style="{ width: data.girlRate + '%' }"
						></div>
					</div>
					<div class="w-[40px]">女生</div>
				</div>
			</a-grid-item>

			<!-- 文理比例 -->
			<a-grid-item v-if="data.wenRate || data.liRate">
				<div class="font-bold">文理比例</div>
				<div class="flex items-center justify-between mt-[40px]">
					<div class="flex items-center">
						<div
							class="w-[34px] h-[34px] flex items-center justify-center bg-[#5AB9FF] text-[20px] text-white font-bold rounded-[50%]"
						>
							文
						</div>
						<span class="text-[#5AB9FF] font-bold text-[18px] ml-[10px]">{{
							data.wenRate + '%'
						}}</span>
					</div>
					<div class="flex items-center">
						<span class="text-[#7C92FF] font-bold text-[18px] mr-[10px]">{{
							data.liRate + '%'
						}}</span>
						<div
							class="w-[34px] h-[34px] flex items-center justify-center bg-[#7C92FF] text-[20px] text-white font-bold rounded-[50%]"
						>
							理
						</div>
					</div>
				</div>
				<div class="flex items-center justify-between mt-[24px]">
					<div class="w-[40px]">文科</div>
					<div class="w-full h-[10px] bg-[#F4F4F4] flex mx-[30px]">
						<div
							class="bg-[#5AB9FF] rounded-[10px_0px_20px_10px]"
							:style="{ width: data.wenRate + '%' }"
						></div>
						<div
							class="bg-[#7C92FF] rounded-[20px_10px_10px_0px]"
							:style="{ width: data.liRate + '%' }"
						></div>
					</div>
					<div class="w-[40px]">理科</div>
				</div>
			</a-grid-item>
		</a-grid>

		<!-- 可从事职业 -->
		<div v-if="data.isProfession" class="mt-[20px]">
			<zs-title title="可从事职业" size="small" />
			<div class="mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]">
				<div class="text-[#999] mb-[10px]">
					职业来源：人社部最新版（2015年版）职业分类大典
				</div>
				<a-grid :cols="4" :colGap="12" :rowGap="16">
					<a-grid-item
						v-for="(item, index) in data.professionList"
						:key="index"
						class="bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
					>
						<div class="truncate w-[80%]">{{ item.profession }}</div>
					</a-grid-item>
				</a-grid>
			</div>
		</div>

		<!-- 从业方向 -->
		<div v-if="data.isEmployment" class="mt-[20px]">
			<zs-title title="从业方向" size="small" />
			<div class="mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]">
				<a-grid :cols="4" :colGap="12" :rowGap="16">
					<a-grid-item
						v-for="(item, index) in data.employmentList"
						:key="index"
						class="bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
					>
						<div class="truncate w-[80%]">{{ item.employment }}</div>
					</a-grid-item>
				</a-grid>
			</div>
		</div>

		<!-- 考研方向 -->
		<div v-if="data.isGraduateInterest" class="mt-[20px]">
			<zs-title title="考研方向" size="small" />
			<div class="mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]">
				<a-grid :cols="4" :colGap="12" :rowGap="16">
					<a-grid-item
						v-for="(item, index) in data.graduateInterestList"
						:key="index"
						class="bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
					>
						<div class="truncate w-[80%]">{{ item.interest }}</div>
					</a-grid-item>
				</a-grid>
			</div>
		</div>

		<!-- 开设课程 -->
		<div v-if="data.isCourseList" class="mt-[20px]">
			<zs-title title="开设课程" size="small" />
			<div class="mt-[10px] border-solid border border-[#EDEDED] rounded-[4px] p-[20px]">
				<a-grid :cols="4" :colGap="12" :rowGap="16">
					<a-grid-item
						v-for="(item, index) in data.courseList"
						:key="index"
						class="bg-[#F9F9F9] h-[35px] leading-[35px] px-[10px]"
					>
						<div class="truncate w-[80%]">{{ item.course }}</div>
					</a-grid-item>
				</a-grid>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsMajorRecap">
// 父组件参数
withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => ({} as any),
	}
);
</script>
<style scoped>
.fontSize {
	font-size: 30px;
}
</style>
