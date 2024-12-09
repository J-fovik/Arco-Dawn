<template>
	<div class="max-w-container mx-auto min-h-[70vh]">
		<!-- 搜索框 -->
		<div class="flex items-center mt-[20px]">
			<!-- 完全匹配 -->
			<div class="w-[150px]">
				<a-button size="large">
					<a-checkbox v-model="form.isMatch" @change="resetData"> 完全匹配 </a-checkbox>
				</a-button>
			</div>
			<!-- 搜索专业名称 -->
			<div class="w-full ml-[20px]">
				<a-input
					size="large"
					v-model.trim="form.zymc"
					class="rounded-[8px] h-[38px]"
					placeholder="搜索专业名称"
					@clear="resetData"
					allow-clear
				>
					<template #prefix>
						<icon-search />
					</template>
				</a-input>
			</div>
			<div class="w-[120px] ml-[20px] rounded-[8px]">
				<a-button
					type="primary"
					class="openButton w-[120px]"
					size="large"
					@click="resetData"
				>
					搜索
				</a-button>
			</div>
		</div>
		<!-- 选择过滤 -->
		<zs-select-filter
			:data="[ccData, mlData, zylData]"
			:default-values="{
				...form,
				levelCode: ccData?.levelCode,
				xkmldm: mlData?.xkmldm,
				zyldm: zylData?.zyldm,
			}"
			@change="changeFilter"
			class="mt-[20px]"
		/>
		<!-- 专业列表 -->
		<div class="mt-[10px] flex flex-col">
			<!-- 排序 -->
			<a-space class="h-[40px]">
				<div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{ 'bg-[#7C92FF] text-white': form.sort.startsWith('graduate_scale') }"
					@click="toggleSort('graduate_scale')"
				>
					年度毕业生规模
					<icon-arrow-rise v-if="form.sort === 'graduate_scale asc'" />
					<icon-arrow-fall v-else />
				</div>
				<div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{ 'bg-[#7C92FF] text-white': form.sort.startsWith('pjxz') }"
					@click="toggleSort('pjxz')"
				>
					薪酬排名
					<icon-arrow-rise v-if="form.sort === 'pjxz asc'" />
					<icon-arrow-fall v-else />
				</div>
				<div
					class="p-[5px_10px] border-solid border border-[#EDEDED] rounded cursor-pointer"
					:class="{ 'bg-[#7C92FF] text-white': form.sort.startsWith('boy_rate') }"
					@click="toggleSort('boy_rate')"
				>
					男女比例
					<icon-arrow-rise v-if="form.sort === 'boy_rate asc'" />
					<icon-arrow-fall v-else />
				</div>
				<div>
					共找到符合条件的专业
					<span class="text-[#FFA864]">{{ turnThousandth(majorData.total) }}</span> 个
				</div>
			</a-space>
			<a-list :bordered="false" :loading="status === 'pending'">
				<a-list-item
					v-for="major in majorData?.list"
					:key="major.id"
					class="border-solid border border-[#EDEDED] mb-[10px] rounded-[8px]"
				>
					<nuxt-link :to="`/major/${major.id}`">
						<a-list-item-meta class="mr-[10px] cursor-pointer">
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
											:class="{
												'bg-[#FFF7F0] text-[#FFA864]':
													form.sort.startsWith('graduate_scale'),
											}"
										>
											年度毕业生规模：{{ textFormat(major.graduateScale) }}
										</span>
										<!-- <span
										class="bg-[#F5F5F5]  leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
									>
										招生院校数：{{ textFormat(major.zsyxs) }}
									</span> -->
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
											:class="{
												'bg-[#FFF7F0] text-[#FFA864]':
													form.sort.startsWith('boy_rate'),
											}"
										>
											男女比例：{{ textFormat(major.xbBl) }}
										</span>
										<span
											class="bg-[#F5F5F5] leading-[16px] rounded-[4px] p-[5px] mb-[4px]"
											:class="{
												'bg-[#FFF7F0] text-[#FFA864]':
													form.sort.startsWith('pjxz'),
											}"
										>
											平均薪酬：<span class="text-price">{{
												textFormat(turnThousandth(major.pjxz))
											}}</span>
										</span>
									</a-space>
								</div>
							</template>
						</a-list-item-meta>
					</nuxt-link>
					<template #actions>
						<nuxt-link :to="`/major/${major.id}?tab=school`">
							<a-button type="primary" class="openButton">开设院校</a-button>
						</nuxt-link>
					</template>
				</a-list-item>
				<template #empty>
					<zs-no-data-small />
				</template>
			</a-list>
			<!-- 分页 -->
			<a-pagination
				class="justify-end mt-[20px]"
				:total="majorData.total"
				:current="pagination.current"
				:page-size="pagination.pageSize"
				@change="onPageChange"
				@page-size-change="onPageSizeChange"
				show-total
				show-jumper
				show-page-size
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
// 设置头信息
useHead({
	title: '查专业',
});
// 全局插件
const { $zsFetch } = useNuxtApp();
// form
const { form } = useForm(() => ({
	isMatch: false,
	zymc: '',
	sort: '',
}));
// 分页控制
const { pagination, resetData, onPageChange, onPageSizeChange } = usePagination(() => {
	// 滚动到顶部
	window.scrollTo(0, 0);
	// 请求数据
	refresh();
});
// change事件
const changeFilter = async (val: any) => {
	// 切换专业门类
	if (val.levelCode !== ccData.value!.levelCode) {
		ccData.value!.levelCode = val.levelCode;
		mlData.value!.xkmldm = '';
		zylData.value!.zyldm = [''];
		await refreshMlData();
	}
	// 切换专业大类
	if (val.xkmldm !== mlData.value!.xkmldm) {
		mlData.value!.xkmldm = val.xkmldm;
		zylData.value!.zyldm = [''];
		await refreshZylData();
	}
	// 请求数据
	resetData();
};
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
	// 请求数据
	resetData();
};
// 获取专业层次数据
const { data: ccData } = await useAsyncData('ccList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_CC_LIST, {});
	// 处理数据
	const ccList =
		res?.data?.map((item: any) => {
			return {
				...item,
				value: item.levelCode,
				label: item.levelName,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '专业层次',
		key: 'levelCode',
		isShow: true,
		multiple: false,
		options: ccList,
		levelCode: ccList[0]?.value ?? '',
	};
});
// 获取门类数据
const { data: mlData, refresh: refreshMlData } = await useAsyncData('mlList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_X_KML_LIST, {
		body: {
			levelCode: ccData.value!.levelCode,
		},
	});
	// 处理数据
	const mlList =
		res?.data?.map((item: any) => {
			return {
				...item,
				value: item.xkmldm,
				label: item.xkml,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '专业门类',
		key: 'xkmldm',
		isShow: true,
		multiple: false,
		options: [...ALL_OPTIONS, ...mlList],
		xkmldm: '',
	};
});
// 专业类数据
const { data: zylData, refresh: refreshZylData } = await useAsyncData('zylList', async () => {
	const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_ZYL_LIST, {
		body: {
			xkmldm: mlData.value!.xkmldm,
		},
	});
	// 处理数据
	const zylList =
		res?.data?.map((item: any) => {
			return {
				...item,
				value: item.zyldm,
				label: item.zyl,
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '专业大类',
		key: 'zyldm',
		isShow: !!mlData.value!.xkmldm,
		multiple: true,
		options: [...ALL_OPTIONS, ...zylList],
		zyldm: [''],
	};
});
// 获取专业列表
const {
	data: majorData,
	status,
	refresh,
} = await useAsyncData(
	'majorList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.MAJOR.GET_MAJOR_LIST, {
			body: {
				zymc: form.value.zymc,
				isMatch: form.value.isMatch ? '1' : '0',
				cc: ccData.value!.levelCode,
				xkml: mlData.value!.xkmldm,
				zyl: zylData.value!.zyldm.join('/'),
				sort: form.value.sort,
				currentPage: pagination.value.current,
				pageSize: pagination.value.pageSize,
				pagingOrNot: 1,
			},
		});
		// 暴露数据
		return {
			list: res?.data?.list ?? [],
			total: res?.data?.totalCount ?? 0,
		} as any;
	},
	{
		default: () => ({
			total: 0,
			list: [],
		}),
	}
);
</script>

<style scoped>
.list-border {
	border-bottom: 1px solid var(--color-neutral-3);
	border-top: 1px solid var(--color-neutral-3);
}
.openButton {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
.openButton:hover {
	background: #7c92ff;
	color: white;
	border-radius: 4px;
}
</style>
