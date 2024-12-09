<template>
	<div>
		<!-- tab -->
		<a-radio-group v-model="form.tabRadio" class="mb-[10px]">
			<template
				v-for="(tab, index) in form.tabRadioList"
				:key="index"
				class="flex items-center justify-center flex-row"
			>
				<a-radio :value="tab">
					<template #radio="{ checked }">
						<div
							class="text-center w-[145px] leading-[44px] border-solid border border-[#EDEDED] rounded-[4px]"
							:class="{ 'bg-[#7C92FF] text-white': checked }"
						>
							{{ tab }}
						</div>
					</template>
				</a-radio>
			</template>
		</a-radio-group>
		<!-- 关注的院校 -->
		<div v-if="form.tabRadio === '关注的院校'">
			<a-list :loading="loading">
				<a-list-item
					v-for="(school, index) in form.schoolList"
					:key="school.id"
					class="border-dashed border border-[#EDEDED]"
				>
					<div class="flex-1" @click="navigateTo(`/college/${school.id}`)">
						<zs-school-list-meta :school="school" />
					</div>
					<template #actions>
						<div
							class="border-solid border rounded-[40px] leading-[40px] px-[20px]"
							:class="
								school.userIsCollect == 1
									? 'border-[#EDEDED]'
									: 'text-[#5AB9FF] border-[#5AB9FF]'
							"
							@click="onClickFollow('schoolList', index, school.id)"
						>
							{{ school.userIsCollect == 1 ? '已关注' : '+关注' }}
						</div>
					</template>
				</a-list-item>
				<template #empty>
					<zs-no-data-small />
				</template>
			</a-list>
		</div>
		<!-- 关注的专业 -->
		<div v-if="form.tabRadio === '关注的专业'">
			<a-list :loading="loading">
				<a-list-item
					v-for="(major, index) in form.majorList"
					:key="major.id"
					class="cursor-pointer border-dashed border border-[#EDEDED]"
				>
					<nuxt-link :to="`/major/${major.id}`">
						<a-list-item-meta>
							<template #title>
								<div class="text-[20px] text-[#333333] mb-[10px] font-bold">
									{{ major.zymc }}
								</div>
							</template>
							<!-- 学校信息 -->
							<template #description>
								<a-space class="flex flex-wrap items-center">
									<span class="text-[14px] text-[#333333]">
										{{ major.xkml }}/{{ major.zyl }}
									</span>
								</a-space>
								<div class="mt-[10px]">
									<a-space class="flex flex-wrap items-center">
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											专业代码：{{ textFormat(major.zydm) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											修业年限：{{ textFormat(major.xyNx) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											授予学位：{{ textFormat(major.syxw) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
										>
											男女比例：{{ textFormat(major.xbBl) }}
										</span>
									</a-space>
								</div>
							</template>
						</a-list-item-meta>
					</nuxt-link>
					<template #actions>
						<div
							class="border-solid border rounded-[40px] leading-[40px] px-[20px]"
							:class="
								major.userIsCollect == 1
									? 'border-[#EDEDED]'
									: 'text-[#5AB9FF] border-[#5AB9FF]'
							"
							@click="onClickFollow('majorList', index, major.id)"
						>
							{{ major.userIsCollect == 1 ? '已关注' : '+关注' }}
						</div>
					</template>
				</a-list-item>
				<template #empty>
					<zs-no-data-small />
				</template>
			</a-list>
		</div>
		<!-- 分页 -->
		<a-pagination
			class="justify-end mt-[20px]"
			:total="pagination.total"
			:current="pagination.current"
			:page-size="pagination.pageSize"
			@change="onPageChange"
			@page-size-change="onPageSizeChange"
			show-total
			show-jumper
			show-page-size
		/>
	</div>
</template>
<script setup lang="ts" name="ZsPersonalFollow">
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// loading
const [loading, setLoading] = useBasicsState(false);

// form
const { form } = useForm(() => ({
	tabRadio: '关注的院校',
	tabRadioList: ['关注的院校', '关注的专业'],
	schoolList: [] as any, // 院校列表
	majorList: [] as any, // 专业列表
}));
// 分页控制
const { pagination, onPageChange, onPageSizeChange } = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	if (form.value.tabRadio === '关注的院校') {
		// 请求院校数据
		getCollegeList();
	} else {
		// 请求专业数据;
		getMajorList();
	}
});

// 获取学校列表
const getCollegeList = async () => {
	// 开启loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW_COLLEGE_LIST, {
		body: {
			currentPage: pagination.value.current,
			pageSize: pagination.value.pageSize,
			pagingOrNot: 1,
		},
	});
	// 关闭loading
	setLoading(false);
	if (res) {
		pagination.value.total = res.data.totalCount;
		form.value.schoolList = res.data.focusSchool;
	}
};
// 获取专业列表
const getMajorList = async () => {
	// 开启loading
	setLoading(true);
	const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW_MAJOR_LIST, {
		body: {
			currentPage: pagination.value.current,
			pageSize: pagination.value.pageSize,
			pagingOrNot: 1,
		},
	});
	// 关闭loading
	setLoading(false);
	if (res) {
		pagination.value.total = res.data.totalCount;
		form.value.majorList = res.data.focusMajor;
	}
};
/**     点击关注    */
const onFollowFn = async (type: any, id: any) => {
	const [err, res] = await $zsFetch(API_URLS.USER.USER_FOLLOW, {
		body: {
			schoolId: type === 'schoolList' ? id : '',
			majorId: type === 'majorList' ? id : '',
		},
	});
	$zsMsg('success', res.data);
};
// 本地点击关注
const onClickFollow = async (type: 'schoolList' | 'majorList', index: any, id: any) => {
	// 点击关注
	await onFollowFn(type, id);
	// 赋值
	form.value[type][index].userIsCollect = form.value[type][index].userIsCollect == 1 ? 0 : 1;
};
// 监听form.value.tabRadio
watch(
	() => form.value.tabRadio,
	async () => {
		switch (form.value.tabRadio) {
			// 关注院校
			case '关注的院校':
				getCollegeList();
				break;
			// 关注专业
			case '关注的专业':
				getMajorList();
				break;
			default:
				// 处理其他或默认情况
				break;
		}
	},
	{ immediate: true }
);
</script>
<style scoped>
.arco-list-split .arco-list-header,
.arco-list-split .arco-list-item:not(:last-child) {
	border-bottom: none;
}
</style>
