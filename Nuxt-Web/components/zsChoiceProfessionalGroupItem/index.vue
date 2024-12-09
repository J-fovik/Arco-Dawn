<template>
	<div class="flex items-center w-full my-[10px] !text-[14px]">
		<div
			class="flex items-center flex-col w-[70px]"
			:class="{
				'text-[#7C92FF]': data.lqgl < 60,
				'text-[#5AB9FF]': data.lqgl >= 60 && data.lqgl <= 90,
				'text-[#FFA864]': data.lqgl > 90,
			}"
		>
			<div
				class="w-[22px] leading-[22px] text-center h-[22px] rounded-[4px]"
				:class="{
					'bg-[#F2F5FF]': data.lqgl < 60,
					'bg-[#EFF8FF]': data.lqgl >= 60 && data.lqgl <= 90,
					'bg-[#FFF7F0]': data.lqgl > 90,
				}"
			>
				{{ data.lqgl < 60 ? '冲' : data.lqgl <= 90 ? '稳' : '保' }}
			</div>
			<div>{{ data.lqgl ? data.lqgl : 1 }}%</div>
		</div>
		<div class="text-left flex-1">
			<!-- 院校 -->
			<template v-if="!isMajor">
				<div
					class="font-bold cursor-pointer"
					@click="
						navigateTo(`/college/${data.yxid}`, {
							open: {
								target: '_blank',
							},
						})
					"
				>
					{{ textFormat(data.yxmc) }}
				</div>
				<div class="text-[#999] text-[12px]">
					<div>
						<!-- 省份 -->
						<span class="mr-[5px]">{{ textFormat(data.sf, '') }}</span>
						<!-- 城市 -->
						<span class="mr-[5px]">{{ textFormat(data.yxcs, '') }}</span>
						<!-- 办学性质 -->
						<span
							v-if="findOptions(getDictionValue('BXXZ'), data.bxxz)?.label"
							class="mr-[5px]"
							>{{ findOptions(getDictionValue('BXXZ'), data.bxxz)?.label }}</span
						>
						<!-- 985 | 211 | 双一流 -->
						<span v-if="data.is985 === '是'" class="mr-[5px]">985</span>
						<span v-if="data.is211 === '是'" class="mr-[5px]">211</span>
						<span v-if="data.issyl === '是'" class="mr-[5px]">双一流</span>
						<span v-if="data.isgzd === '是'" class="mr-[5px]">国重点</span>
						<span v-if="data.isby === '是'" class="mr-[5px]">保研</span>
						<!-- 院校类型 -->
						<span v-if="findOptions(getDictionValue('YXLX'), data.yxlx)?.label">{{
							findOptions(getDictionValue('YXLX'), data.yxlx)?.label
						}}</span>
					</div>
					<div>
						<span class="mr-[5px]"
							>代码<span class="ml-[2px]">{{ textFormat(data.yxdm) }}</span>
						</span>
						<span v-if="data.rankin" class="mr-[5px]">
							排名<span class="ml-[2px]">
								{{ textFormat(turnThousandth(data.rankin)) }}
							</span>
						</span>
						<span v-if="data.byl" class="mr-[5px]">
							保研率<span class="ml-[2px]">
								{{ textFormat(turnThousandth(data.byl)) }}
							</span>
						</span>
					</div>
				</div>
			</template>
			<!-- 院校下专业 -->
			<template v-else>
				<div class="mx-[20px]">
					<div class="font-bold">{{ textFormat(data.zymc) }}</div>
					<div class="text-[#999] text-[12px]">
						<div>
							<span class="mr-[5px]">
								学费<span class="ml-[2px]">
									{{ textCompany(turnThousandth(data.xf, ''), '元') }}
								</span>
							</span>
							<span class="mr-[5px]">
								学制<span class="ml-[2px]">
									{{ textCompany(data.xz, '年') }}
								</span>
							</span>
							<span class="mr-[5px]">
								选科<span class="ml-[2px]">
									{{ textFormat(data.xk) }}
								</span>
							</span>
						</div>
						<div class="flex items-center flex-wrap">
							<div class="mr-[5px]">
								代码<span class="ml-[2px]">
									{{ textFormat(data.zydm) }}
								</span>
							</div>
							<a-popover trigger="hover" position="bottom">
								<div
									v-if="data.isnew === '是'"
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
									data?.requirements?.length ||
									data?.dualclassList?.length ||
									data?.cdeList?.length ||
									data?.zyList?.length
								"
							>
								<div class="flex items-center">
									<div
										v-if="data?.requirements?.length"
										class="px-[2px] h-[17px] text-center leading-[17px] rounded-[4px] bg-[#FFA864] text-white mr-[2px]"
									>
										要求
									</div>
									<div
										v-if="data?.dualclassList?.length"
										class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
									>
										一流学科
									</div>
									<div
										v-if="data?.cdeList?.length"
										class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]"
									>
										学科评估{{ data?.cdeList[0].name }}
									</div>
									<div class="px-[2px] text-[#999999] bg-[#F9F9F9] mr-[2px]">
										详情<icon-down />
									</div>
								</div>
								<template #content>
									<div class="flex">
										<div
											v-if="data?.requirements?.length"
											class="px-[10px] min-w-[150px]"
											:class="{
												'border-solid border-r border-[#EDEDED]':
													data?.dualclassList?.length,
											}"
										>
											<div class="text-[#333] text-[14px] mb-[10px]">
												招生要求
											</div>
											<div
												v-for="item in data?.requirements"
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
											v-if="data?.dualclassList?.length"
											class="px-[10px] min-w-[150px]"
											:class="{
												'border-solid border-r border-[#EDEDED]':
													data?.cdeList?.length,
											}"
										>
											<div class="text-[#333] text-[14px] mb-[10px]">
												双一流学科
											</div>
											<div
												class="text-[12px]"
												v-for="item in data?.dualclassList"
												:key="item.name"
											>
												<div>
													{{ item.name }}
												</div>
											</div>
										</div>
										<div
											v-if="data?.cdeList?.length"
											class="px-[10px] min-w-[150px]"
											:class="{
												'border-solid border-r border-[#EDEDED]':
													data?.zyList?.length,
											}"
										>
											<div class="text-[#333] text-[14px] mb-[10px]">
												学科评估
											</div>
											<div v-for="item in data?.cdeList" :key="item.name">
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
											v-if="data?.zyList?.length"
											class="px-[10px] min-w-[150px]"
										>
											<div class="text-[#333] text-[14px] mb-[10px]">
												专业详情
											</div>
											<div v-for="item in data?.zyList" :key="item.name">
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
		</div>
		<template v-if="isMajor">
			<div class="text-[#999] text-[12px] text-left w-[100px]">
				<div>
					<span class="font-bold !text-[20px] text-[#333]">{{
						turnThousandth(data.lqrs)
					}}</span>
					<span v-if="data.lqrs">人</span>
					<span
						v-if="data.lqrs - data.twolqrs > 0 || data.lqrs - data.twolqrs < 0"
						:class="{
							'text-[#FFA864]': data.lqrs - data.twolqrs > 0,
							'text-[#5AB9FF]': data.lqrs - data.twolqrs < 0,
						}"
					>
						{{
							data.lqrs - data.twolqrs > 0
								? '+' + (data.lqrs - data.twolqrs)
								: data.lqrs - data.twolqrs
						}}
					</span>
				</div>
				<div>院校{{ turnThousandth(data.yxlqrs, '0') + '人' }}</div>
			</div>
		</template>
		<template v-else>
			<div class="text-left w-[100px]">
				<span class="font-bold !text-[18px] text-[#333] w-[100px]">{{
					turnThousandth(data.yxlqrs)
				}}</span>
				<span class="!text-[12px] text-[#999]" v-if="data.yxlqrs">人</span>
				<span
					v-if="data.yxlqrs - data.twolqrs > 0 || data.yxlqrs - data.twolqrs < 0"
					:class="{
						'text-[#FFA864]': data.yxlqrs - data.twolqrs > 0,
						'text-[#5AB9FF]': data.yxlqrs - data.twolqrs < 0,
					}"
				>
					{{
						data.yxlqrs - data.twolqrs > 0
							? '+' + (data.yxlqrs - data.twolqrs)
							: data.yxlqrs - data.twolqrs
					}}
				</span>
			</div>
		</template>
		<div class="text-[#999] text-[12px] w-[70px]">
			<div>同位分</div>
			<div>最低分</div>
			<div>最低位</div>
			<div>计划数</div>
		</div>
		<div class="text-left text-[12px] w-[80px]">
			<div>{{ textCompany(turnThousandth(data.onetwf, ''), '分') }}</div>
			<div>{{ textCompany(turnThousandth(data.onezdf, ''), '分') }}</div>
			<div>{{ textCompany(turnThousandth(data.onezdwc, ''), '位') }}</div>
			<div>
				{{ textCompany(turnThousandth(isMajor ? data.lqrs : data.yxlqrs, ''), '人') }}
			</div>
		</div>
		<div class="text-left text-[12px] w-[80px]">
			<div>{{ textCompany(turnThousandth(data.twotwf, ''), '分') }}</div>
			<div>{{ textCompany(turnThousandth(data.twozdf, ''), '分') }}</div>
			<div>{{ textCompany(turnThousandth(data.twozdwc, ''), '位') }}</div>
			<div>{{ textCompany(turnThousandth(data.twolqrs, ''), '人') }}</div>
		</div>
		<div class="text-left text-[12px] w-[80px]">
			<div>{{ textCompany(turnThousandth(data.threetwf, ''), '分') }}</div>
			<div>{{ textCompany(turnThousandth(data.threezdf, ''), '分') }}</div>
			<div>{{ textCompany(turnThousandth(data.threezdwc, ''), '位') }}</div>
			<div>{{ textCompany(turnThousandth(data.threelqrs, ''), '人') }}</div>
		</div>
		<div class="w-[150px]">
			<slot name="operate" :record="data" />
		</div>
	</div>
</template>
<script setup lang="ts" name="ZsChoiceProfessionalGroupItem">
// 父组件参数
withDefaults(
	defineProps<{
		data: any;
		isMajor?: boolean; // 是否是子集的专业
	}>(),
	{
		data: () => ({} as any),
		isMajor: false,
	}
);
// 网站信息
const { getDictionValue } = useWebsiteInformation();
</script>
<style scoped>
:deep(.arco-table .arco-table-cell) {
	padding: 10px;
}
:deep(.arco-table-th) {
	background: #f9f9f9;
}
</style>
