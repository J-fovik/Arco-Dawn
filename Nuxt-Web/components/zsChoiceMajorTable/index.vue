<template>
	<div>
		<a-table
			class="cursor-pointer"
			table-layout-fixed
			:columns="visibleColumnsData"
			:data="data.list"
			:loading="loading"
			:pagination="false"
			:bordered="false"
			@change="(data) => $emit('draggable', data)"
			:draggable="draggable ? { type: 'handle', width: 40 } : undefined"
		>
			<!-- 概率 -->
			<template #odds="{ record }">
				<div
					class="flex items-center flex-col"
					:class="{
						'text-[#7C92FF]': record.lqgl < 60,
						'text-[#5AB9FF]': record.lqgl >= 60 && record.lqgl <= 90,
						'text-[#FFA864]': record.lqgl > 90,
					}"
				>
					<div
						class="w-[22px] h-[22px] rounded-[4px]"
						:class="{
							'bg-[#F2F5FF]': record.lqgl < 60,
							'bg-[#EFF8FF]': record.lqgl >= 60 && record.lqgl <= 90,
							'bg-[#FFF7F0]': record.lqgl > 90,
						}"
					>
						{{ record.lqgl < 60 ? '冲' : record.lqgl <= 90 ? '稳' : '保' }}
					</div>
					<div>{{ record.lqgl ? record.lqgl : 1 }}%</div>
				</div>
			</template>
			<!-- 招生院校 -->
			<template #enrollmentSchool="{ record }">
				<div class="text-left">
					<div
						class="font-bold"
						@click="
							navigateTo(`/college/${record.yxid}`, {
								open: {
									target: '_blank',
								},
							})
						"
					>
						{{ textFormat(record.yxmc) }}
					</div>
					<div class="text-[#999] text-[12px]">
						<div>
							<!-- 省份 -->
							<span class="mr-[5px]">{{ textFormat(record.sf, '') }}</span>
							<!-- 城市 -->
							<span class="mr-[5px]">{{ textFormat(record.yxcs, '') }}</span>
							<!-- 办学性质 -->
							<span
								v-if="findOptions(getDictionValue('BXXZ'), record.bxxz)?.label"
								class="mr-[5px]"
								>{{
									findOptions(getDictionValue('BXXZ'), record.bxxz)?.label
								}}</span
							>
							<!-- 985 | 211 | 双一流 -->
							<span v-if="record.is985 === '是'" class="mr-[5px]">985</span>
							<span v-if="record.is211 === '是'" class="mr-[5px]">211</span>
							<span v-if="record.issyl === '是'" class="mr-[5px]">双一流</span>
							<span v-if="record.isgzd === '是'" class="mr-[5px]">国重点</span>
							<span v-if="record.isby === '是'" class="mr-[5px]">保研</span>
							<!-- 院校类型 -->
							<span v-if="findOptions(getDictionValue('YXLX'), record.yxlx)?.label">{{
								findOptions(getDictionValue('YXLX'), record.yxlx)?.label
							}}</span>
						</div>
						<div>
							<span class="mr-[5px]"
								>代码<span class="ml-[2px]">{{ textFormat(record.yxdm) }}</span>
							</span>
							<span v-if="record.rankin" class="mr-[5px]">
								排名<span class="ml-[2px]">
									{{ textFormat(turnThousandth(record.rankin)) }}
								</span>
							</span>
							<span v-if="record.byl" class="mr-[5px]">
								保研率<span class="ml-[2px]">
									{{ textFormat(turnThousandth(record.byl)) }}
								</span>
							</span>
						</div>
					</div>
				</div>
			</template>
			<!-- 招生专业 -->
			<template #enrollmentMajorTitle>
				<div>{{ data.year }}招生专业</div>
			</template>
			<template #enrollmentMajor="{ record }">
				<div class="text-left">
					<div class="font-bold">{{ textFormat(record.zymc) }}</div>
					<div class="text-[#999] text-[12px]">
						<div>
							<span class="mr-[5px]">
								学费<span class="ml-[2px]">
									{{ textCompany(turnThousandth(record.xf, ''), '元') }}
								</span>
							</span>
							<span class="mr-[5px]">
								学制<span class="ml-[2px]">
									{{ textCompany(record.xz, '年') }}
								</span>
							</span>
							<span class="mr-[5px]">
								选科<span class="ml-[2px]">
									{{ textFormat(record.xk) }}
								</span>
							</span>
						</div>
						<div class="flex items-center flex-wrap">
							<div class="mr-[5px]">
								代码<span class="ml-[2px]">
									{{ textFormat(record.zydm) }}
								</span>
							</div>
							<a-popover trigger="hover" position="bottom">
								<div
									v-if="record.isnew === '是'"
									class="px-[2px] text-center rounded-[4px] bg-[#5AB9FF] text-white mr-[5px]"
								>
									新
								</div>
								<template #content>
									专业近年无历史录取数据，请依据综合信息填志原
								</template>
							</a-popover>
							<a-popover
								trigger="click"
								position="bottom"
								v-if="
									record?.requirements?.length ||
									record?.dualclassList?.length ||
									record?.cdeList?.length ||
									record?.zyList?.length
								"
							>
								<div class="flex items-center">
									<div
										v-if="record?.requirements?.length"
										class="px-[2px] h-[17px] text-center leading-[17px] rounded-[4px] bg-[#FFA864] text-white mr-[2px]"
									>
										要求
									</div>
									<div
										v-if="record?.dualclassList?.length"
										class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
									>
										一流学科
									</div>
									<div
										v-if="record?.cdeList?.length"
										class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
									>
										学科评估{{ record?.cdeList[0].name }}
									</div>
									<div class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]">
										详情<icon-down />
									</div>
								</div>
								<template #content>
									<div class="flex">
										<div
											v-if="record?.requirements?.length"
											class="px-[10px] min-w-[150px]"
											:class="{
												'border-solid border-r border-[#EDEDED]':
													record?.dualclassList?.length,
											}"
										>
											<div class="text-[#333] text-[14px] mb-[10px]">
												招生要求
											</div>
											<div
												v-for="item in record?.requirements"
												:key="item.name"
											>
												<div
													class="flex items-center justify-between text-[12px]"
												>
													<div>{{ item.id }}</div>
													<div class="text-[#FFA864]">
														{{ item.name }}
													</div>
												</div>
											</div>
										</div>
										<div
											v-if="record?.dualclassList?.length"
											class="px-[10px] min-w-[150px]"
											:class="{
												'border-solid border-r border-[#EDEDED]':
													record?.cdeList?.length,
											}"
										>
											<div class="text-[#333] text-[14px] mb-[10px]">
												双一流学科
											</div>
											<div
												class="text-[12px]"
												v-for="item in record?.dualclassList"
												:key="item.name"
											>
												<div>
													{{ item.name }}
												</div>
											</div>
										</div>
										<div
											v-if="record?.cdeList?.length"
											class="px-[10px] min-w-[150px]"
											:class="{
												'border-solid border-r border-[#EDEDED]':
													record?.zyList?.length,
											}"
										>
											<div class="text-[#333] text-[14px] mb-[10px]">
												学科评估
											</div>
											<div v-for="item in record?.cdeList" :key="item.name">
												<div
													class="flex items-center justify-between text-[12px]"
												>
													<div>{{ item.id }}</div>
													<div class="font-bold ml-[20px]">
														{{ item.name }}
													</div>
												</div>
											</div>
										</div>
										<div
											v-if="record?.zyList?.length"
											class="px-[10px] min-w-[150px]"
										>
											<div class="text-[#333] text-[14px] mb-[10px]">
												专业详情
											</div>
											<div v-for="item in record?.zyList" :key="item.name">
												<div
													class="flex items-center justify-between text-[12px] cursor-pointer"
													@click="
														navigateTo(`/major/${item.id}`, {
															open: {
																target: '_blank',
															},
														})
													"
												>
													<div>
														{{ item.name }}
													</div>
													<div class="text-[#7C92FF] ml-[20px]">详情</div>
												</div>
											</div>
										</div>
									</div>
								</template>
							</a-popover>
						</div>
					</div>
				</div>
			</template>
			<!-- 计划 -->
			<template #planTitle>
				<div>{{ data.year }}计划</div>
			</template>
			<template #plan="{ record }">
				<!-- 当前展示的是专业 -->
				<template v-if="curModule === 'major'">
					<div class="text-[#999] text-[12px] text-left">
						<div>
							<span class="font-bold !text-[20px] text-[#333]">{{
								turnThousandth(record.lqrs)
							}}</span>
							<span v-if="record.lqrs">人</span>
							<span
								v-if="
									record.lqrs - record.twolqrs > 0 ||
									record.lqrs - record.twolqrs < 0
								"
								:class="{
									'text-[#FFA864]': record.lqrs - record.twolqrs > 0,
									'text-[#5AB9FF]': record.lqrs - record.twolqrs < 0,
								}"
							>
								{{
									record.lqrs - record.twolqrs > 0
										? '+' + (record.lqrs - record.twolqrs)
										: record.lqrs - record.twolqrs
								}}
							</span>
						</div>
						<div>院校{{ turnThousandth(record.yxlqrs, '0') + '人' }}</div>
					</div>
				</template>
				<template v-if="curModule === 'school'">
					<div>
						<span class="font-bold !text-[18px] text-[#333]">{{
							turnThousandth(record.yxlqrs)
						}}</span>
						<span class="!text-[12px] text-[#999]" v-if="record.yxlqrs">人</span>
						<span
							v-if="
								record.yxlqrs - record.twolqrs > 0 ||
								record.yxlqrs - record.twolqrs < 0
							"
							:class="{
								'text-[#FFA864]': record.yxlqrs - record.twolqrs > 0,
								'text-[#5AB9FF]': record.yxlqrs - record.twolqrs < 0,
							}"
						>
							{{
								record.yxlqrs - record.twolqrs > 0
									? '+' + (record.yxlqrs - record.twolqrs)
									: record.yxlqrs - record.twolqrs
							}}
						</span>
					</div>
				</template>
			</template>
			<!-- 分数列 -->
			<template #score>
				<div class="text-[#999] text-[12px]">
					<div>同位分</div>
					<div>最低分</div>
					<div>最低位</div>
					<div>计划数</div>
				</div>
			</template>
			<!-- 最新年 -->
			<template #newYearTitle>
				<div>{{ data.year }}年</div>
			</template>
			<template #newYear="{ record }">
				<div class="text-left text-[12px]">
					<div>{{ textCompany(turnThousandth(record.onetwf, ''), '分') }}</div>
					<div>{{ textCompany(turnThousandth(record.onezdf, ''), '分') }}</div>
					<div>{{ textCompany(turnThousandth(record.onezdwc, ''), '位') }}</div>
					<div>
						{{
							textCompany(
								turnThousandth(
									curModule === 'major' ? record.lqrs : record.yxlqrs,
									''
								),
								'人'
							)
						}}
					</div>
				</div>
			</template>
			<!-- 去年 -->
			<template #lastYearTitle>
				<div>{{ data.year - 1 }}年</div>
			</template>
			<template #lastYear="{ record }">
				<div class="text-left text-[12px]">
					<div>{{ textCompany(turnThousandth(record.twotwf, ''), '分') }}</div>
					<div>{{ textCompany(turnThousandth(record.twozdf, ''), '分') }}</div>
					<div>{{ textCompany(turnThousandth(record.twozdwc, ''), '位') }}</div>
					<div>{{ textCompany(turnThousandth(record.twolqrs, ''), '人') }}</div>
				</div>
			</template>
			<!-- 前年 -->
			<template #twoYearsAgoTitle>
				<div>{{ data.year - 2 }}年</div>
			</template>
			<template #twoYearsAgo="{ record }">
				<div class="text-left text-[12px]">
					<div>{{ textCompany(turnThousandth(record.threetwf, ''), '分') }}</div>
					<div>{{ textCompany(turnThousandth(record.threezdf, ''), '分') }}</div>
					<div>{{ textCompany(turnThousandth(record.threezdwc, ''), '位') }}</div>
					<div>{{ textCompany(turnThousandth(record.threelqrs, ''), '人') }}</div>
				</div>
			</template>
			<!-- 操作 -->
			<template #operateTitle="{ record }">
				<slot name="operateTitle" :record="record" />
			</template>
			<template #operate="{ record }">
				<slot name="operate" :record="record" />
			</template>
			<template #empty>
				<slot name="empty" />
			</template>
		</a-table>
	</div>
</template>
<script setup lang="ts" name="ZsChoiceMajorTable">
// 父组件参数
const props = withDefaults(
	defineProps<{
		data: any;
		loading: boolean;
		isYxmc?: boolean; // 是否展示招生院校
		isZymc?: boolean; // 是否展示招生专业
		draggable?: boolean; // 是否可拖拽
		curModule?: 'major' | 'school'; // 当前模块
	}>(),
	{
		data: () => ({} as any),
		loading: false,
		isYxmc: true,
		isZymc: true,
		draggable: false,
		curModule: 'major',
	}
);
// 网站信息
const { getDictionValue } = useWebsiteInformation();
// 父组件方法
const emits = defineEmits(['pageChange', 'pageSizeChange', 'draggable']);
// 院校列属性
const createMajorTableColumns = (): TableCustomColumnData[] => {
	return [
		{
			title: '概率',
			align: 'center',
			show: true,
			width: 70,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'odds',
		},
		{
			title: '招生院校',
			align: 'center',
			show: props.isYxmc,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'enrollmentSchool',
		},
		{
			title: '招生专业',
			align: 'center',
			show: props.isZymc,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'enrollmentMajor',
			titleSlotName: 'enrollmentMajorTitle',
		},
		{
			title: '计划',
			align: 'center',
			show: true,
			width: 100,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'plan',
			titleSlotName: 'planTitle',
		},
		{
			align: 'center',
			show: true,
			width: 70,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'score',
		},
		{
			title: '年份',
			align: 'center',
			show: true,
			width: 80,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'newYear',
			titleSlotName: 'newYearTitle',
		},
		{
			title: '年份',
			align: 'center',
			show: true,
			width: 80,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'lastYear',
			titleSlotName: 'lastYearTitle',
		},
		{
			title: '年份',
			align: 'center',
			show: true,
			width: 80,
			headerCellStyle: {
				fontSize: '14px',
				backgroundColor: '#F9F9F9',
				color: '#333333',
				fontWeight: 'bold',
			},
			slotName: 'twoYearsAgo',
			titleSlotName: 'twoYearsAgoTitle',
		},
		{
			title: '操作',
			align: 'center',
			width: 150,
			show: true,
			headerCellStyle: {
				backgroundColor: '#F9F9F9',
				color: '#333333',
			},
			slotName: 'operate',
			titleSlotName: 'operateTitle',
		},
	];
};
// 可见的表格头
const visibleColumnsData = computed(() => createMajorTableColumns().filter((item) => !!item.show));
</script>
<style scoped>
:deep(.arco-table .arco-table-cell) {
	padding: 10px;
}
:deep(.arco-table-th) {
	background: #f9f9f9;
}
</style>
