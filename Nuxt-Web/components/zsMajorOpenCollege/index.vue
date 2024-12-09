<template>
	<div>
		<div>
			<div class="flex items-center justify-between">
				<div class="font-bold text-[18px]">开设院校</div>
				<div>
					<!-- 筛选条件 -->
					<a-space>
						<a-select
							:style="{ width: '200px' }"
							v-model="form.location"
							:options="[...NO_LIMIT_NULL_OPTIONS, ...provinceCityList]"
							placeholder="所在地区"
							allow-clear
							@change="$emit('change', form)"
						/>
						<a-select
							:style="{ width: '200px' }"
							v-model="form.type"
							:options="[...NO_LIMIT_NULL_OPTIONS, ...getDictionValue('YXLX')]"
							placeholder="院校类型"
							allow-clear
							@change="$emit('change', form)"
						/>
						<!-- <a-select
							:style="{ width: '200px' }"
							v-model="form.cc"
							:options="[
								...NO_LIMIT_NULL_OPTIONS,
								...getDictionValue('BXCC'),
							]"
							placeholder="院校层次"
							allow-clear
							@change="$emit('change', form)"
						/> -->
						<a-select
							:style="{ width: '200px' }"
							v-model="form.properties"
							:options="[...NO_LIMIT_NULL_OPTIONS, ...getDictionValue('BXXZ')]"
							placeholder="办学性质"
							allow-clear
							@change="$emit('change', form)"
						/>
						<a-select
							:style="{ width: '200px' }"
							v-model="form.strengthTags"
							:options="[...NO_LIMIT_NULL_OPTIONS, ...getDictionValue('SLBQONE')]"
							placeholder="实力标签"
							allow-clear
							@change="$emit('change', form)"
						/>
						<!-- <a-select
							:style="{ width: '200px' }"
							v-model="form.featuresTags"
							:options="[
								...NO_LIMIT_NULL_OPTIONS,
								...getDictionValue('TSBQ'),
							]"
							placeholder="特色院校"
							allow-clear
							@change="$emit('change', form)"
						/> -->
					</a-space>
				</div>
			</div>
			<!-- 排序 -->
			<a-space class="h-[40px] mt-[20px]">
				<div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{
						'bg-[#7C92FF] text-white': form.sort.startsWith('min(sds.zdf)'),
					}"
					@click="toggleSort('min(sds.zdf)')"
				>
					录取分数
					<icon-arrow-rise v-if="form.sort === 'min(sds.zdf) asc'" />
					<icon-arrow-fall v-else />
				</div>
				<div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{ 'bg-[#7C92FF] text-white': form.sort.startsWith('bsr.rank_in') }"
					@click="toggleSort('bsr.rank_in')"
				>
					软科排序
					<icon-arrow-rise v-if="form.sort === 'bsr.rank_in asc'" />
					<icon-arrow-fall v-else />
				</div>
				<!-- <div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{ 'bg-[#7C92FF] text-white': form.sort.startsWith('boy_rate') }"
					@click="toggleSort('boy_rate')"
				>
					学科排序
					<icon-arrow-rise v-if="form.sort === 'boy_rate asc'" />
					<icon-arrow-fall v-else />
				</div> -->
			</a-space>
		</div>
		<!-- 列表 -->
		<a-list class="list-border" :bordered="false" :loading="loading">
			<a-list-item v-for="(school, index) in data" :key="index">
				<nuxt-link :to="`/college/${school?.id}`" target="_blank">
					<div class="flex items-center">
						<div
							v-if="form.sort.startsWith('bsr.rank_in')"
							class="flex items-center justify-center w-[40px] h-[40px] bg-[#F5F5F5] rounded-[40px] mr-[30px]"
						>
							{{ index + 1 }}
						</div>
						<div class="flex-1 flex items-center cursor-pointer">
							<img :src="school.logo" class="mr-[10px] w-[70px]" />
							<div>
								<div class="text-[20px]">{{ school.yxmc }}</div>
								<a-space class="flex flex-wrap items-center">
									<template #split>
										<span class="w-[2px] h-[8px] text-[#999999]">|</span>
									</template>
									<!-- 省份 -->
									<span v-if="findOptions(provinceCityList, school.sf)?.label">{{
										findOptions(provinceCityList, school.sf)?.label
									}}</span>
									<!-- 院校性质 -->
									<span
										v-if="
											findOptions(getDictionValue('YXLX'), school.yxLx)?.label
										"
										>{{
											findOptions(getDictionValue('YXLX'), school.yxLx)?.label
										}}</span
									>
									<!-- 隶属于 -->
									<span v-if="school.lsy">{{ school.lsy }}</span>
									<!-- 办学性质 -->
									<span
										v-if="
											findOptions(getDictionValue('BXXZ'), school.bxXz)?.label
										"
										>{{
											findOptions(getDictionValue('BXXZ'), school.bxXz)?.label
										}}</span
									>
								</a-space>
								<div
									v-if="form.sort.startsWith('min(sds.zdf)')"
									class="text-[#999999]"
								>
									最低分/最低分位
									<span class="text-[#FFA864]"
										>{{ school.zdf }}/{{ school.zdfwc }}</span
									>
								</div>
								<div v-else>
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
						<!-- <div>
						<div class="flex items-center justify-center">
							<i class="iconfont icon-A font-bold text-[#FFA864] fontSize" />
						</div>
						<div>专业评级</div>
					</div> -->
					</div>
				</nuxt-link>
			</a-list-item>
			<template #empty>
				<zs-no-data-small />
			</template>
		</a-list>
		<!-- 分页 -->
		<client-only>
			<a-pagination
				class="justify-end mt-[20px]"
				:total="params.total"
				:current="params.current"
				:page-size="params.pageSize"
				@change="($event) => $emit('changePage', $event)"
				@page-size-change="($event) => $emit('changeSize', $event)"
				show-total
				show-jumper
				show-page-size
			/>
		</client-only>
	</div>
</template>

<script setup lang="ts" name="ZsMajorOpenCollege">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
		params: any;
		loading?: boolean;
	}>(),
	{
		data: () => [] as any,
		params: () => ({} as any),
		loading: () => true,
	}
);
// 网站信息
const { provinceCityList, getDictionValue } = useWebsiteInformation();
// form
const { form } = useForm(() => ({
	...props.params,
}));
// 父组件方法
const emits = defineEmits(['change', 'changePage', 'changeSize']);
// 设置排序值
const toggleSort = (key: any) => {
	// 根据当前的排序状态来更新排序
	if (form.value.sort === `${key} desc`) {
		form.value.sort = `${key} asc`; // 从降序切换到升序
	} else if (form.value.sort === `${key} asc`) {
		form.value.sort = ''; // 从升序切换到无排序
	} else {
		form.value.sort = `${key} desc`; // 从无排序切换到降序
	}
	emits('change', form.value);
};
</script>
<style scoped>
.list-border {
	border-bottom: 1px solid var(--color-neutral-3);
	border-top: 1px solid var(--color-neutral-3);
}
.fontSize {
	font-size: 40px;
}
</style>
