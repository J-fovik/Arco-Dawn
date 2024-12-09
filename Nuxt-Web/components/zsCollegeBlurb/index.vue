<template>
	<div>
		<!-- 部省共建 -->
		<div v-if="data.provincialBuilding">
			<zs-title title="部省共建" size="small" />
			<div class="mt-[10px]">
				{{ data.provincialBuilding }}
			</div>
		</div>

		<!-- 历史沿革 -->
		<div v-if="data.isHistoryEntities">
			<zs-title title="历史沿革" size="small" class="mt-[30px]" />
			<div class="mt-[10px]">
				<client-only>
					<a-timeline>
						<a-timeline-item
							dot-color="#7C92FF"
							v-for="(item, index) in form.isHistoryOpen
								? data.historyEntities
								: data.historyEntities?.splice(0, 3)"
							:key="index"
						>
							<template #label>
								<div class="text-[#333] text-[14px] leading-[18px]">
									{{ item.historyContent }}
								</div>
							</template>
							<div class="text-[#999] text-[12px]">{{ item.beginDate }}</div>
						</a-timeline-item>
					</a-timeline>
				</client-only>
				<div class="flex items-center justify-center">
					<div class="expandMore" @click="onExpandAndCollapse('isHistoryOpen')">
						{{ form.isHistoryOpen ? '收起更多' : '展开更多' }}
					</div>
				</div>
			</div>
		</div>

		<!-- 院校详情 -->
		<div v-if="data.js">
			<zs-title title="院校详情" size="small" class="mt-[30px]" />
			<div class="mt-[10px]">
				<div
					class="leading-[20px]"
					:class="form.isSchoolDetail ? '' : 'mle'"
					v-html="data.js"
				></div>
			</div>
			<div class="flex items-center justify-center mt-[20px]">
				<div class="expandMore" @click="onExpandAndCollapse('isSchoolDetail')">
					{{ form.isSchoolDetail ? '收起更多' : '展开更多' }}
				</div>
			</div>
		</div>

		<!-- 院校排名 -->
		<div v-if="data.isRankEntities">
			<zs-title title="院校排名" size="small" class="mt-[30px]" />
			<div class="mt-[10px]">
				<a-grid :cols="8" :colGap="12" :rowGap="16">
					<a-grid-item
						v-for="(item, index) in data.rankEntities"
						:key="index"
						class="flex items-center flex-col justify-center w-[120px] h-[100px] border-solid border border-[#EDEDED] rounded-[4px]"
					>
						<div>{{ item.title }}</div>
						<div class="text-[#FFA864] text-[18px] font-bold mt-[20px]">
							{{ item.rankIn === '-' ? '' : item.rankIn
							}}{{ item.rankOut === '-' ? '' : '/' + item.rankOut }}
						</div>
					</a-grid-item>
				</a-grid>
			</div>
		</div>

		<!-- 科研实力 -->
		<zs-title title="科研实力" size="small" class="mt-[30px]" />
		<div class="mt-[10px]">
			<a-grid :cols="5" :colGap="12" :rowGap="16">
				<a-grid-item
					class="flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]"
				>
					<div class="flex items-center">
						<div
							class="flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]"
						>
							<i class="iconfont icon-goushu font-bold text-white" />
						</div>
						<span class="ml-[5px]">国家重点学科</span>
					</div>
					<div class="text-[18px] font-bold mt-[20px]">
						{{ textFormat(data.gjZdXk, '--') }}<span class="text-[70%]">个</span>
					</div>
				</a-grid-item>
				<a-grid-item
					class="flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]"
				>
					<div class="flex items-center">
						<div
							class="flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]"
						>
							<i class="iconfont icon-weixing font-bold text-white" />
						</div>
						<span class="ml-[5px]">保研星级</span>
					</div>
					<div class="mt-[12px]">
						<a-rate v-model="data.byxj" readonly />
					</div>
				</a-grid-item>
				<a-grid-item
					class="flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]"
				>
					<div class="flex items-center">
						<div
							class="flex items-center justify-center p-[2px] rounded-[4px] bg-[#FFA864] w-[20px] h-[20px]"
						>
							<i class="iconfont icon-bo font-bold text-white" />
						</div>
						<span class="ml-[5px]"
							>博士点<span class="text-[#999] text-[12px]">(一级/二级)</span></span
						>
					</div>
					<div class="text-[18px] font-bold mt-[20px]">
						{{ textFormat(data.bsdOne, '--') }}<span class="text-[70%]">个</span>/{{
							textFormat(data.bsdTwo, '--')
						}}<span class="text-[70%]">个</span>
					</div>
				</a-grid-item>
				<a-grid-item
					class="flex flex-col justify-center w-[180px] h-[100px] border rounded-[8px] p-[25px_10px] bg-[#F5F5F5]"
				>
					<div class="flex items-center">
						<div
							class="flex items-center justify-center p-[2px] rounded-[4px] bg-[#7C92FF] w-[20px] h-[20px]"
						>
							<i class="iconfont icon-shuo font-bold text-white" />
						</div>
						<span class="ml-[5px]"
							>硕士点<span class="text-[#999] text-[12px]">(一级/二级)</span></span
						>
					</div>
					<div class="text-[18px] font-bold mt-[20px]">
						{{ textFormat(data.ssdOne, '--') }}<span class="text-[70%]">个</span>/{{
							textFormat(data.ssdTwo, '--')
						}}<span class="text-[70%]">个</span>
					</div>
				</a-grid-item>
			</a-grid>
			<div class="mt-[20px]" v-if="data.isLabEntities || data.faculty">
				<a-tabs type="card-gutter" size="large" v-model="form.activeTabKey" animation>
					<!-- 实验室与研究机构 -->
					<a-tab-pane key="1" v-if="data.isLabEntities">
						<template #title>
							<div class="text-[16px]">实验室与研究机构</div>
						</template>
						<div class="p-[0px_20px_10px] leading-[18px]">
							<div
								v-for="(item, index) in data.labEntities"
								:key="index"
								class="mb-[15px]"
							>
								<span class="font-bold">{{
									item.name + '·' + item.children.length + '个: '
								}}</span>
								<span class="ml-[5px]">{{
									item.children.map((child: any) => child.name).join('、')
								}}</span>
							</div>
						</div>
					</a-tab-pane>
					<!-- 师资力量 -->
					<a-tab-pane key="2" v-if="data.faculty">
						<template #title>
							<div class="text-[16px]">师资力量</div>
						</template>
						<div class="p-[0px_20px_10px] leading-[18px]">
							{{ data.faculty }}
						</div>
					</a-tab-pane>
				</a-tabs>
			</div>
		</div>

		<!-- 就业情况 -->
		<div class="mt-[30px]" v-if="data.isBysQydqlx || data.isBysQydw">
			<zs-title title="就业情况" size="small" />
			<!-- 毕业生签约地区流向 -->
			<div v-if="data.isBysQydqlx">
				<div class="text-[16px] mt-[20px] mb-[10px]">毕业生签约地区流向</div>
				<div
					class="mt-[10px] p-[20px_50px] border-solid border border-[#EDEDED] rounded-[4px]"
				>
					<div
						v-for="(item, index) in data.bysQydqlx"
						:key="index"
						class="mb-[30px] flex items-center"
					>
						<div class="mr-[56px]">{{ index + 1 }}</div>
						<div class="flex-1">
							<div>{{ item.title }}</div>
							<div class="flex items-center justify-between mt-[10px]">
								<zs-proportion :width="item.width" class="flex-1" />
								<div class="ml-[20px]">{{ item.width + '%' }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 毕业生就业单位 -->
			<div v-if="data.isBysQydw">
				<div class="text-[16px] mt-[20px] mb-[10px]">毕业生就业单位</div>
				<a-table
					class="mt-[20px] cursor-pointer"
					table-layout-fixed
					:columns="columns"
					:data="data.bysQydw"
					:bordered="{ wrapper: true }"
				/>
			</div>
		</div>

		<!-- 食宿条件 -->
		<div
			class="mt-[30px]"
			v-if="data.xxzs || data.shzs || data.jyzs || data.zhfs || data.ssTj || data.stTj"
		>
			<zs-title title="食宿条件" size="small" />
			<div class="h-[180px] p-[20px]">
				<a-grid :cols="8" :colGap="12" :rowGap="16">
					<a-grid-item v-if="data.xxzs">
						<zs-circle-index color="#7C92FF" :value="data.xxzs" />
						<div class="text-center mt-[10px]">学习指数</div>
					</a-grid-item>
					<a-grid-item v-if="data.shzs">
						<zs-circle-index color="#5AB9FF" :value="data.shzs" />
						<div class="text-center mt-[10px]">生活指数</div>
					</a-grid-item>
					<a-grid-item v-if="data.jyzs">
						<zs-circle-index color="#FFA864" :value="data.jyzs" />
						<div class="text-center mt-[10px]">就业指数</div>
					</a-grid-item>
					<a-grid-item v-if="data.zhfs">
						<zs-circle-index color="#7C92FF" :value="data.zhfs" />
						<div class="text-center mt-[10px]">综合评分</div>
					</a-grid-item>
				</a-grid>
			</div>
			<div class="mt-[20px]">
				<!-- 宿舍 -->
				<div class="flex items-center">
					<div class="flex items-center justify-center h-[36px] w-[36px] bg-[#F5F5F5]">
						<i class="iconfont icon-linyushi- iconSize" />
					</div>
					<div class="ml-[10px] text-[18px]">宿舍</div>
				</div>
				<div class="mt-[10px] leading-[20px] text-[14px]">
					{{ textFormat(data.ssTj) }}
				</div>
				<!-- 食堂 -->
				<div class="flex items-center mt-[20px]">
					<div class="flex items-center justify-center h-[36px] w-[36px] bg-[#F5F5F5]">
						<i class="iconfont icon-shitang- iconSize" />
					</div>
					<div class="ml-[10px] text-[18px]">食堂</div>
				</div>
				<div class="mt-[10px] leading-[20px] text-[14px]">
					{{ textFormat(data.stTj) }}
				</div>
			</div>
		</div>

		<!-- 校园风光 -->
		<div class="mt-[30px]" v-if="data.isPhotoEntities">
			<zs-title title="校园风光" size="small" />
			<a-grid :cols="4" :colGap="20" :rowGap="12" class="mt-[30px]">
				<a-grid-item v-for="(item, index) in data.photoEntities" :key="index">
					<a-image :src="item.photoUrl" class="rounded-[8px] cursor-zoom-in"></a-image>
				</a-grid-item>
			</a-grid>
		</div>
	</div>
</template>

<script setup lang="ts" name="ZsCollegeBlurb">
// 父组件参数
withDefaults(
	defineProps<{
		data: any;
	}>(),
	{
		data: () => ({} as any),
	}
);
// form
const { form } = useForm<any>(() => ({
	activeTabKey: '1',
	isHistoryOpen: false, // 历史沿革展开收起
	isSchoolDetail: false, // 学校详情展开收起
	height: 0,
}));

// 毕业生就业单位列数据
const columns = [
	{
		title: '序号',
		dataIndex: 'index',
		align: 'center',
		headerCellStyle: {
			fontSize: '14px',
			backgroundColor: '#EDEDED',
			color: '#999999',
		},
	},
	{
		title: '签约单位',
		dataIndex: 'name',
		align: 'center',
		ellipsis: true,
		tooltip: true,
		headerCellStyle: {
			fontSize: '14px',
			backgroundColor: '#EDEDED',
			color: '#999999',
		},
	},
	{
		title: '人数',
		dataIndex: 'value',
		align: 'center',
		ellipsis: true,
		tooltip: true,
		headerCellStyle: {
			fontSize: '14px',
			backgroundColor: '#EDEDED',
			color: '#999999',
		},
		cellStyle: {
			color: '#FFA864',
		},
	},
] as any;
// 控制展开和收起
const onExpandAndCollapse = (key: any) => {
	if (form.value[key] === true) {
		form.value[key] = false;
		// 滚动到展开前位置
		window.scrollTo(0, form.value.height);
	} else {
		// 赋值当前位置
		form.value.height = window.scrollY;
		form.value[key] = true;
	}
};
</script>
<style scoped>
.iconSize {
	font-size: 25px;
}
:deep(.arco-tabs-nav-type-card-gutter .arco-tabs-tab) {
	background: #f2f5ff;
	color: #7c92ff;
}
:deep(
		.arco-tabs-nav-type-card-gutter .arco-tabs-tab-active,
		.arco-tabs-nav-type-card-gutter .arco-tabs-tab-active:hover
	) {
	background: #7c92ff;
	color: white;
}
/* 时间轴 */
:deep(.arco-timeline-item) {
	min-height: 55px;
}
</style>
