<template>
	<div>
		<!-- tab -->
		<a-radio-group v-model="form.tabRadio" class="mb-[30px]">
			<template
				v-for="tab in form.tabRadioList"
				:key="tab"
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

		<!-- 院校设置 -->
		<div v-if="form.tabRadio === '院校设置'">
			<template v-if="openMajor?.schoolMajorList?.length">
				<div
					class="p-[20px_20px] border-solid border border-[#EDEDED] rounded-[4px] mb-[20px]"
					v-for="(item, index) in openMajor?.schoolMajorList"
					:key="index"
				>
					<div class="text-[18px] font-bold">
						{{ item.ssxy }}
					</div>
					<div class="text-[#999999] mt-[15px]">
						包含专业： <span class="text-[#333333]">{{ item.zymcs.join('、') }}</span>
					</div>
				</div>
			</template>
			<zs-no-data v-else />
		</div>

		<!-- 双一流学科 -->
		<div v-if="form.tabRadio === '双一流学科'">
			<!-- 双一流学科 -->
			<template v-if="openMajor?.dualClassList?.length">
				<zs-title title="双一流学科" size="small" />
				<a-row class="mt-[20px]">
					<a-col
						v-for="(item, index) in openMajor?.dualClassList"
						:key="index"
						:span="4"
						class="border border-solid border-[#EDEDED] h-[80px] leading-[80px] text-center"
					>
						<div class="">{{ item.dualclassName }}</div>
					</a-col>
				</a-row>
				<div class="mt-[20px] text-[12px] text-[#999999]">
					（以上为第一轮双一流学科，第二轮学科为自定）
				</div>
			</template>
			<zs-no-data v-else />
		</div>

		<!-- 学科评估 -->
		<div v-if="form.tabRadio === '学科评估'">
			<a-table
				class="cursor-pointer"
				table-layout-fixed
				:columns="evaluationColumns"
				:data="openMajor?.assessList"
				:bordered="{ wrapper: true, cell: true }"
			/>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsCollegeOpenMajor">
// 路由信息
const route = useRoute();
// 全局插件
const { $zsFetch } = useNuxtApp();
// form
const { form } = useForm(() => ({
	tabRadio: '院校设置',
	tabRadioList: ['院校设置', '双一流学科', '学科评估'],
	id: route.params.id,
}));

// 学科评估列数据
const evaluationColumns = [
	{
		title: '序号',
		dataIndex: 'index',
		align: 'center',
		headerCellStyle: {
			fontSize: '16px',
			backgroundColor: '#EDEDED',
			fontWeight: 'bold',
		},
	},
	{
		title: '轮次',
		dataIndex: 'round',
		align: 'center',
		headerCellStyle: {
			fontSize: '16px',
			backgroundColor: '#EDEDED',
			fontWeight: 'bold',
		},
	},
	{
		title: '一级学科名称',
		dataIndex: 'zyl',
		align: 'center',
		headerCellStyle: {
			fontSize: '16px',
			backgroundColor: '#EDEDED',
			fontWeight: 'bold',
		},
	},
	{
		title: '评选结果',
		dataIndex: 'score',
		align: 'center',
		ellipsis: true,
		tooltip: true,
		headerCellStyle: {
			fontSize: '16px',
			backgroundColor: '#EDEDED',
			fontWeight: 'bold',
		},
	},
] as any;
// 获取开放专业
const { data: openMajor } = await useAsyncData(
	'openMajor',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.COLLEGE.GET_SCHOOL_OPEN_MAJOR, {
			body: {
				id: form.value.id,
			},
		});
		return {
			...res?.data,
			// 学科评估
			assessList:
				res?.data?.assessList?.map((o: any, i: any) => {
					return {
						...o,
						index: i + 1,
					};
				}) ?? [],
		};
	},
	{}
);
</script>
<style scoped>
.text-wrap-word {
	overflow-wrap: break-word; /* 允许在单词内部进行换行 */
	word-wrap: break-word; /* 兼容旧版浏览器 */
}
:deep(.arco-radio-button.arco-radio-checked) {
	background: #ffa864;
	color: white;
	border: none;
}
:deep(.arco-radio-button) {
	background: white;
	color: #333;
}
</style>
