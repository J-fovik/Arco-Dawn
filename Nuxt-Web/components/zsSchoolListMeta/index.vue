<template>
	<div>
		<div class="flex items-center cursor-pointer">
			<div class="w-[80px] h-[80px]">
				<img :src="school.logo" class="w-[70px]" />
			</div>
			<div class="flex-1">
				<div
					v-if="school.highlightYxmc"
					class="text-[18px] font-bold"
					v-html="setHightLightStr(school.highlightYxmc)"
				></div>
				<div v-else class="text-[18px] font-bold">
					{{ school.yxmc }}
				</div>
				<a-space>
					<template #split>
						<span class="w-[2px] h-[8px] text-[#999999]">|</span>
					</template>
					<!-- 省份 -->
					<span v-if="findOptions(provinceCityList, school.sf)?.label">{{
						findOptions(provinceCityList, school.sf)?.label
					}}</span>
					<!-- 院校性质 -->
					<span v-if="findOptions(getDictionValue('YXLX'), school.yxLx)?.label">{{
						findOptions(getDictionValue('YXLX'), school.yxLx)?.label
					}}</span>
					<!-- 隶属于 -->
					<span v-if="school.lsy">{{ school.lsy }}</span>
					<!-- 办学性质 -->
					<span v-if="findOptions(getDictionValue('BXXZ'), school.bxXz)?.label">{{
						findOptions(getDictionValue('BXXZ'), school.bxXz)?.label
					}}</span>
				</a-space>
				<div>
					<a-space class="flex flex-wrap items-center">
						<span
							v-for="(tag, index) in school.schoolTags"
							:key="index"
							class="p-[2px_5px] border-solid border border-[#EDEDED] rounded-[20px] text-[12px] text-[#999999] mb-[2px]"
						>
							{{ tag }}
						</span>
					</a-space>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts" name="ZsSchoolList">
// 父组件参数
withDefaults(
	defineProps<{
		school: any;
	}>(),
	{
		school: () => {},
	}
);
// 路由信息
const route = useRoute();
// 网站信息
const { provinceCityList, getDictionValue } = useWebsiteInformation();
const setHightLightStr = (text: any) => {
	let hightLightStr = `<span class="text-[#FFA864]">$&</span>`;
	let reg = new RegExp(route.query.keyword as string, 'gi');
	return text.replace(reg, hightLightStr);
};
</script>
