<template>
	<div>
		<template v-if="!volunteerInfo?.error">
			<template v-if="userInfo.score">
				<div class="card-box-shadow">
					<!-- 顶部操作工具 -->
					<div class="max-w-container mx-auto flex items-center justify-between h-[50px]">
						<a-space size="large">
							<template #split>
								<span class="w-[2px] h-[8px] text-[#999999]">|</span>
							</template>
							<!-- 点击修改名称 -->
							<a-tooltip content="点击修改名称" position="top">
								<div
									class="text-[16px] font-bold cursor-pointer"
									@click="
										setSelectRow(volunteerInfo, () =>
											setActiveKey('ZsChoiceChangeNameModal')
										)
									"
								>
									{{ textFormat(volunteerInfo?.zybt) }}
								</div>
							</a-tooltip>
							<!-- 修改成绩 -->
							<a-tooltip content="修改成绩" position="top">
								<div
									class="text-[#666666] cursor-pointer"
									@click="
										setSelectRow(volunteerInfo, () =>
											setActiveKey('ZsChoiceChangeScoreModal')
										)
									"
								>
									<span>{{ textFormat(volunteerInfo?.xk) }}</span>
									<span class="mx-[5px]">{{
										textFormat(volunteerInfo?.score) + '分'
									}}</span>
									<span>{{
										textFormat(turnThousandth(volunteerInfo?.wc)) + '位'
									}}</span>
									<i class="iconfont icon-chuangzuo ml-[5px]" />
								</div>
							</a-tooltip>
							<!-- 选择批次新建志愿表 -->
							<a-tooltip content="选择批次新建志愿表" position="top">
								<div
									class="cursor-pointer"
									@click="navigateTo(`/choice/buildWish`)"
								>
									{{ textFormat(volunteerInfo?.pc) }}
									<icon-down />
								</div>
							</a-tooltip>
							<div
								class="text-[#7C92FF] cursor-pointer"
								@click="navigateTo(`/choice/buildWish`)"
							>
								新建志愿表
							</div>
							<div
								class="text-[#7C92FF] cursor-pointer"
								@click="navigateTo(`/personal?tab=myVolunteer`)"
							>
								我的志愿表
							</div>
							<div
								v-if="userInfo?.vipStateValue == '1'"
								class="text-[#7C92FF] cursor-pointer"
								@click="navigateTo(`/choice/detail?wid=${volunteerInfo.id}`)"
							>
								查看志愿表
							</div>
						</a-space>
						<!-- 已选志愿 -->
						<div class="f-c-c">
							<!-- 导出 -->
							<a-popover trigger="hover" position="bottom">
								<div
									class="bg-[#F9F9F9] h-[40px] w-[40px] rounded-[8px] f-c-c cursor-pointer"
								>
									<i class="iconfont icon-shangchuan" />
								</div>
								<template #content>
									<div
										class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"
										@click="exportFile"
									>
										导出Excel(表格版)
									</div>
									<div
										class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"
										@click="openFile"
									>
										导出Pdf(打印版)
									</div>
								</template>
							</a-popover>

							<div
								class="bg-[#7C92FF] p-[10px] h-[40px] rounded-[4px] leading-[40px] f-c-c ml-[10px] cursor-pointer text-white"
								@click="
									setSelectRow(volunteerInfo, () =>
										setActiveKey('ZsChoiceVolunteerListModal')
									)
								"
							>
								<i class="iconfont icon-chenggong" />
								<span class="ml-[5px]">已选志愿</span>
								<span class="mx-[10px]">|</span>
								<span
									class="px-[10px] rounded-[20px] bg-[#B0BEFF] h-[18px] leading-[18px]"
									>{{ turnThousandth(filledInData?.total, '0') }}</span
								>
							</div>
						</div>
					</div>
				</div>
				<div class="max-w-container mx-auto">
					<div
						class="border border-solid border-[#EDEDED] mt-[20px] rounded-[8px]"
						:class="{
							'p-[10px]': !form.collapse,
						}"
					>
						<div
							class="flex"
							:class="{
								'bg-[#F9F9F9]': form.collapse,
							}"
						>
							<!-- 筛选条件 -->
							<div
								class="flex justify-between items-center h-[38px] w-[280px] rounded-[4px] px-[10px] bg-[#F9F9F9] cursor-pointer"
								:class="{
									'	text-[#7C92FF] ml-[10px] mt-[10px] ': form.collapse,
									'border-solid border border-[#EDEDED] ': !form.collapse,
								}"
								@click="form.collapse = !form.collapse"
							>
								<div class="text-[14px] font-bold">
									<span>筛选院校</span>
									<span class="mx-[4px]">/</span>
									<span>专业</span>
								</div>
								<div><icon-down /></div>
							</div>
							<!-- 搜索框 -->
							<div
								class="flex items-center flex-1 border-b border-l border-solid border-[#EDEDED] rounded-[0px_8px_0px_0px] ml-[20px]"
								:class="{
									'p-[10px_10px]': form.collapse,
									'border-b-0 ': !form.collapse,
								}"
							>
								<div
									class="w-full"
									:class="{
										'ml-[20px]': !form.collapse,
										'ml-[10px]': form.collapse,
									}"
								>
									<a-input
										v-model.trim="form.name"
										size="large"
										class="rounded-lg h-[38px]"
										placeholder="搜索你感兴趣的院校或专业"
										allow-clear
										@change="checkSchoolOrMajor"
										@clear="checkSchoolOrMajor"
									>
										<template #prefix>
											<icon-search />
										</template>
									</a-input>
								</div>
								<a-button
									type="primary"
									size="large"
									class="openButton w-[120px] ml-[20px]"
									@click="checkSchoolOrMajor"
								>
									搜索
								</a-button>
							</div>
						</div>
						<!-- 查询条件 -->
						<div v-if="form.collapse" class="bg-[#F9F9F9] rounded-[4px] p-[10px]">
							<div class="flex">
								<div class="text-[14px] mr-[15px] p-[5px_8px] text-[#606266]">
									所在地区
								</div>
								<ul class="flex flex-1 p-[0px] flex-row flex-wrap">
									<li
										v-for="item in sfList"
										class="flex items-center p-[5px_8px] mb-[5px] px-[6px] mr-[10px] text-[14px] cursor-pointer rounded-[4px] hover:text-[#7C92FF]"
										:key="item.code"
									>
										<template v-if="item.name !== '不限'">
											<a-popover
												trigger="click"
												position="bottom"
												v-model:popup-visible="item.popoverVisible"
											>
												<div
													:class="{
														'bg-[#F2F5FF] text-[#7C92FF]':
															item.selectList?.length,
													}"
												>
													<span>{{ item.name }}</span>
													<icon-down class="ml-[2px]" size="12" />
												</div>
												<template #content>
													<a-space direction="vertical">
														<a-checkbox
															:model-value="item.checkedAll"
															:indeterminate="item.indeterminate"
															@change="
																(checked:any) =>
																	handleCheckAll(
																		item,
																		checked,
																		'school'
																	)
															"
															>全选
														</a-checkbox>
														<a-checkbox-group
															v-model="item.selectList"
															@change="singleChoice(item)"
														>
															<a-grid
																:cols="4"
																:colGap="24"
																:rowGap="8"
															>
																<a-grid-item
																	v-for="city in item.children"
																	:key="city.id"
																>
																	<a-checkbox
																		:value="city.code"
																		>{{ city.name }}</a-checkbox
																	>
																</a-grid-item>
															</a-grid>
														</a-checkbox-group>
													</a-space>
													<div
														class="flex items-center justify-end mt-[10px]"
													>
														<a-space class="cursor-pointer">
															<div
																class="rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]"
																@click="
																	handleCheckAll(
																		item,
																		false,
																		'school'
																	)
																"
															>
																清空
															</div>
															<div
																class="rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]"
																@click="item.popoverVisible = false"
															>
																确定
															</div>
														</a-space>
													</div>
												</template>
											</a-popover>
										</template>
										<template v-else>
											<span
												:class="{
													'bg-[#F2F5FF] text-[#7C92FF]':
														!selectCityList.length,
												}"
												@click="onLocationNoLimit"
												>不限</span
											>
										</template>
									</li>
								</ul>
							</div>
							<!-- 公共过滤 -->
							<zs-select-filter
								:data="schoolFilterData"
								:default-values="form"
								@change="changePublicFilter"
							/>
							<!-- 专业筛选 -->
							<div class="border-solid border-t border-[#EDEDED] py-[10px]">
								<!-- 专业层次 -->
								<zs-select-filter
									:data="[ccData]"
									:default-values="{
										cc: ccData?.cc,
									}"
									@change="changeMajorFilter"
								/>
								<!-- 专业门类 -->
								<div class="flex">
									<div class="text-[14px] mr-[15px] p-[5px_8px] text-[#606266]">
										专业门类
									</div>
									<ul class="flex flex-1 p-[0px] flex-row flex-wrap">
										<li
											v-for="item in xkmlList"
											class="flex items-center p-[5px_6px] mb-[5px] mr-[10px] text-[14px] cursor-pointer rounded-[4px] hover:text-[#7C92FF]"
											:key="item.xkmldm"
										>
											<template v-if="item.xkml !== '不限'">
												<a-popover
													trigger="click"
													position="bottom"
													v-model:popup-visible="item.popoverVisible"
												>
													<div
														:class="{
															'bg-[#F2F5FF] text-[#7C92FF]':
																item.selectList?.length,
														}"
													>
														<span>{{ item.xkml }}</span>
														<icon-down class="ml-[2px]" size="12" />
													</div>
													<template #content>
														<a-space direction="vertical">
															<a-checkbox
																:model-value="item.checkedAll"
																:indeterminate="item.indeterminate"
																@change="
																	(checked:any) =>
																		handleCheckAll(
																			item,
																			checked,
																			'major'
																		)
																"
																>全选
															</a-checkbox>
															<a-checkbox-group
																v-model="item.selectList"
																@change="singleChoice(item)"
															>
																<a-grid
																	:cols="4"
																	:colGap="24"
																	:rowGap="8"
																>
																	<a-grid-item
																		v-for="child in item.children"
																		:key="child.zyldm"
																	>
																		<a-checkbox
																			:value="child.zyl"
																			>{{
																				child.zyl
																			}}</a-checkbox
																		>
																	</a-grid-item>
																</a-grid>
															</a-checkbox-group>
														</a-space>
														<div
															class="flex items-center justify-end mt-[10px]"
														>
															<a-space class="cursor-pointer">
																<div
																	class="rounded-[4px] leading-[30px] px-[20px] border-solid border border-[#EDEDED] text-[#999999]"
																	@click="
																		handleCheckAll(
																			item,
																			false,
																			'major'
																		)
																	"
																>
																	清空
																</div>
																<div
																	class="rounded-[4px] leading-[30px] px-[20px] bg-[#7C92FF] text-[#FFFFFF]"
																	@click="
																		item.popoverVisible = false
																	"
																>
																	确定
																</div>
															</a-space>
														</div>
													</template>
												</a-popover>
											</template>
											<template v-else>
												<span
													:class="{
														'bg-[#F2F5FF] text-[#7C92FF]':
															!selectZylList.length,
													}"
													@click="onZylNoLimit"
													>不限</span
												>
											</template>
										</li>
									</ul>
								</div>
								<!-- 高级筛选 -->
								<!-- <div class="flex">
									<div class="text-[14px] mr-[15px] p-[5px_8px] text-[#606266]">
										高级筛选
									</div>
									<ul class="flex flex-1 p-[0px] flex-row flex-wrap">
										<li
											class="flex items-center p-[5px_6px] mb-[5px] mr-[10px] text-[14px] cursor-pointer rounded-[4px] hover:text-[#7C92FF]"
										>
											<a-popover trigger="click" position="bottom">
												<div>新招专业<icon-down size="12" /></div>
												<template #content>
													<div
														v-for="(item, index) in 2"
														:key="index"
														class="cursor-pointer"
													>
														新招专业{{ index }}
													</div>
												</template>
											</a-popover>
										</li>
									</ul>
								</div> -->
							</div>
						</div>
						<!-- 已选条件 -->
						<div
							v-if="tagList.length"
							class="bg-[#EDEDED] flex p-[10px_10px_5px]"
							:class="{ 'mt-[10px]': !form.collapse }"
						>
							<div class="mr-[20px] leading-[25px]">
								筛选(<span class="text-[#7C92FF]">{{ tagList.length }}</span
								>)
							</div>
							<div class="flex-1">
								<a-tag
									v-for="(tag, index) in tagList"
									:key="index"
									color="#FFFFFF"
									class="mr-[5px] mb-[5px] !text-[#333]"
								>
									<!-- :closable="!['cc'].includes(tag?.key)"
									@close="handleRemoveTag(tag)" -->
									{{ tag?.label }}
								</a-tag>
							</div>
						</div>
					</div>
					<!-- 冲稳保 -->
					<div class="flex justify-between items-center mt-[25px]">
						<!-- tab -->
						<div>
							<a-radio-group
								v-model="form.cwb"
								class="bg-[#F9F9F9]"
								@change="
									form.curModule === 'major'
										? majorResetDebounce()
										: schoolResetDebounce()
								"
							>
								<template
									v-for="tab in form.cwbList"
									:key="tab"
									class="flex items-center justify-center flex-row"
								>
									<a-radio :value="tab.value">
										<template #radio="{ checked }">
											<div
												class="text-center px-[10px] min-w-[120px] leading-[48px]"
												:class="{
													'bg-[#7C92FF] text-white rounded-[4px]':
														checked,
												}"
											>
												<span>{{ tab.label }}</span>
												<template v-if="form.curModule === 'major'">
													<span class="text-[18px] font-bold">
														<span v-if="tab.label === '冲稳保'">
															{{
																turnThousandth(
																	majorOdds.totalSum,
																	'0'
																)
															}}
														</span>
														<span v-if="tab.label === '冲'">
															{{
																turnThousandth(majorOdds.csum, '0')
															}}
														</span>
														<span v-if="tab.label === '稳'">
															{{
																turnThousandth(majorOdds.wsum, '0')
															}}
														</span>
														<span v-if="tab.label === '保'">
															{{
																turnThousandth(majorOdds.bsum, '0')
															}}
														</span>
													</span>
												</template>
												<template v-if="form.curModule === 'school'">
													<span class="text-[18px] font-bold">
														<span v-if="tab.label === '冲稳保'">
															{{
																turnThousandth(
																	schoolOdds.totalSum,
																	'0'
																)
															}}
														</span>
														<span v-if="tab.label === '冲'">
															{{
																turnThousandth(schoolOdds.csum, '0')
															}}
														</span>
														<span v-if="tab.label === '稳'">
															{{
																turnThousandth(schoolOdds.wsum, '0')
															}}
														</span>
														<span v-if="tab.label === '保'">
															{{
																turnThousandth(schoolOdds.bsum, '0')
															}}
														</span>
													</span>
												</template>
											</div>
										</template>
									</a-radio>
								</template>
							</a-radio-group>
							<!-- <a-spin class="ml-[5px]" :loading="majorOddsStatus === 'pending'" /> -->
						</div>
						<div class="flex items-center">
							<!-- 分数滑条 -->
							<client-only>
								<div>
									<div class="flex items-center justify-between">
										<div>{{ topScore }}</div>
										<div>{{ lowestScore }}</div>
									</div>
									<a-slider
										v-model="volunteerInfo.scoreRange"
										:style="{
											width: '350px',
										}"
										range
										:max="volunteerInfo?.score + 100"
										:min="volunteerInfo?.score - 100"
										@change="changeScore"
									/>
								</div>
							</client-only>
							<!-- 专业还是院校 -->
							<a-radio-group
								v-model="form.curModule"
								type="button"
								class="ml-[20px]"
								@change="changeCurModule"
							>
								<a-radio value="major">专业</a-radio>
								<a-radio value="school">院校</a-radio>
							</a-radio-group>
						</div>
					</div>
					<!-- 专业列表 -->
					<template v-if="form.curModule === 'major'">
						<zs-choice-major-table
							:data="{
								list:
									userInfo?.vipStateValue != '1'
										? majorData.list.splice(0, 3)
										: majorData.list,
								year: majorData.year,
							}"
							:loading="majorStatus === 'pending'"
							class="mt-[20px]"
						>
							<template #operateTitle="{ record }">
								<a-popover trigger="hover" position="br">
									<div
										class="border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]"
									>
										<div>排序</div>
									</div>
									<template #content>
										<div class="flex">
											<div>
												<div
													v-for="item in majorData.sortNameList"
													:key="item.value"
													class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"
													:class="{
														'text-[#7C92FF]':
															item.value === form.sortName,
													}"
													@click="setSortName(item.value)"
												>
													<icon-check
														v-if="item.value === form.sortName"
													/>
													{{ item.label }}
												</div>
											</div>
											<div class="flex cursor-pointer ml-[20px]">
												<div
													class="w-[34px] h-[28px] leading-[28px] text-center"
													:class="{
														'bg-[#F2F5FF] text-[#7C92FF]':
															form.sortType === 'ASC',
													}"
													@click="setSortType('ASC')"
												>
													升序
												</div>
												<div
													class="w-[34px] h-[28px] leading-[28px] text-center ml-[5px]"
													:class="{
														'bg-[#F2F5FF] text-[#7C92FF]':
															form.sortType === 'DESC',
													}"
													@click="setSortType('DESC')"
												>
													降序
												</div>
											</div>
										</div>
									</template>
								</a-popover>
							</template>
							<template #operate="{ record }">
								<template v-if="userInfo?.vipStateValue == '1'">
									<div
										class="h-[32px] leading-[32px] rounded-[8px]"
										:class="{
											'border-solid border border-[#7C92FF] text-[#7C92FF]':
												!record.wSort,
											' bg-[#7C92FF] text-[#FFFFFF]': record.wSort,
										}"
										@click="
											record.wSort
												? cancelVolunteer(record)
												: addVolunteer(record)
										"
									>
										{{ record.wSort ? '志愿' + record.wSort : '加入志愿' }}
									</div>
									<a-space size="small">
										<template #split>
											<span class="w-[2px] h-[8px] text-[#999999]">|</span>
										</template>
										<span
											class="text-[12px] text-[#7C92FF]"
											@click="
												setSelectRow(
													{
														yxid: record.yxid,
														yxmc: record.yxmc,
														yxdm: record.yxdm,
														wid: volunteerInfo?.id,
													},
													() => setActiveKey('ZsChoiceEligibleMajorModal')
												)
											"
											>可报专业</span
										>
										<span
											class="text-[12px] text-[#7C92FF]"
											@click="
												setSelectRow(
													{
														yxmc: record.yxmc,
														year: majorData.year,
													},
													() => setActiveKey('ZsChoiceAcademicYearsModal')
												)
											"
											>院校历年</span
										>
									</a-space>
								</template>
								<template v-else>
									<a-tooltip content="开通会员 尊享填报特权">
										<div class="f-c-c">
											<i class="iconfont icon-suo text-[#7C92FF] fontIcon" />
										</div>
									</a-tooltip>
								</template>
							</template>
							<template #empty>
								<zs-no-data-small />
							</template>
						</zs-choice-major-table>
						<!-- 专业分页 -->
						<a-pagination
							v-if="userInfo?.vipStateValue == '1'"
							class="justify-end mt-[20px]"
							:total="majorData.total"
							:current="majorPagination.current"
							:page-size="majorPagination.pageSize"
							@change="majorPageChange"
							@page-size-change="majorPageSizeChange"
							show-total
							show-jumper
							show-page-size
						/>
					</template>
					<!-- 院校列表 -->
					<template v-if="form.curModule === 'school'">
						<zs-choice-major-table
							:data="{
								list:
									userInfo?.vipStateValue != '1'
										? schoolData.list.splice(0, 3)
										: schoolData.list,
								year: schoolData.year,
							}"
							:loading="schoolStatus === 'pending'"
							:isZymc="false"
							:curModule="'school'"
							class="mt-[20px]"
						>
							<template #operateTitle="{ record }">
								<!-- 排序 -->
								<a-popover trigger="hover" position="br">
									<div
										class="border-solid border border-[#EDEDED] text-[12px] h-[32px] leading-[32px] f-c-c px-[4px] rounded-[4px]"
									>
										<div>排序</div>
									</div>
									<template #content>
										<div class="flex">
											<div>
												<div
													v-for="item in schoolData.sortNameList"
													:key="item.value"
													class="leading-[30px] hover:bg-[#F2F5FF] hover:text-[#7C92FF] px-[20px] cursor-pointer"
													:class="{
														'text-[#7C92FF]':
															item.value === form.sortName,
													}"
													@click="setSortName(item.value)"
												>
													<icon-check
														v-if="item.value === form.sortName"
													/>
													{{ item.label }}
												</div>
											</div>
											<div class="flex cursor-pointer ml-[20px]">
												<div
													class="w-[34px] h-[28px] leading-[28px] text-center"
													:class="{
														'bg-[#F2F5FF] text-[#7C92FF]':
															form.sortType === 'ASC',
													}"
													@click="setSortType('ASC')"
												>
													升序
												</div>
												<div
													class="w-[34px] h-[28px] leading-[28px] text-center ml-[5px]"
													:class="{
														'bg-[#F2F5FF] text-[#7C92FF]':
															form.sortType === 'DESC',
													}"
													@click="setSortType('DESC')"
												>
													降序
												</div>
											</div>
										</div>
									</template>
								</a-popover>
							</template>
							<template #operate="{ record }">
								<template v-if="userInfo?.vipStateValue == '1'">
									<!-- 专业分类 -->
									<div
										v-if="volunteerInfo.isSchoolGroup === '1'"
										class="h-[32px] leading-[32px] rounded-[8px]"
										:class="{
											'border-solid border border-[#7C92FF] text-[#7C92FF]':
												!record.wSort,
											' bg-[#7C92FF] text-[#FFFFFF]': record.wSort,
										}"
										@click="
											setSelectRow(
												{
													yxid: record.yxid,
													yxmc: record.yxmc,
													yxdm: record.yxdm,
													wid: volunteerInfo?.id,
												},
												() => setActiveKey('ZsChoiceEligibleMajorModal')
											)
										"
									>
										{{
											record.wSort ? '已加入专业' + record.wSort : '加入志愿'
										}}
									</div>
									<!-- 按专业组分 -->
									<div
										v-else
										class="h-[32px] leading-[32px] rounded-[8px] z-10 border-solid border border-[#B0BEFF]"
										@click="
											setSelectRow(
												{
													yxid: record.yxid,
													yxmc: record.yxmc,
													yxdm: record.yxdm,
													wid: volunteerInfo?.id,
												},
												() => setActiveKey('ZsChoiceEligibleMajorModal')
											)
										"
									>
										<div v-if="record.yxSort" class="flex items-center">
											<div
												class="flex-1 bg-[#7C92FF] text-white rounded-[8px_0px_0px_8px]"
											>
												志愿{{ record.yxSort }}
											</div>
											<div class="flex-1">专业{{ record.wSort }}</div>
										</div>
										<div v-else>
											可填专业{{ turnThousandth(record.mcount, '0') }}
										</div>
									</div>
									<a-space size="small">
										<template #split>
											<span class="w-[2px] h-[8px] text-[#999999]">|</span>
										</template>
										<span
											class="text-[12px] text-[#7C92FF]"
											@click="
												setSelectRow(
													{
														yxid: record.yxid,
														yxmc: record.yxmc,
														yxdm: record.yxdm,
														wid: volunteerInfo?.id,
													},
													() => setActiveKey('ZsChoiceEligibleMajorModal')
												)
											"
											>可报专业</span
										>
										<span
											class="text-[12px] text-[#7C92FF]"
											@click="
												setSelectRow(
													{
														yxmc: record.yxmc,
														year: schoolData.year,
													},
													() => setActiveKey('ZsChoiceAcademicYearsModal')
												)
											"
											>院校历年</span
										>
									</a-space>
								</template>
								<template v-else>
									<a-tooltip content="开通会员 尊享填报特权">
										<div class="f-c-c">
											<i class="iconfont icon-suo text-[#7C92FF] fontIcon" />
										</div>
									</a-tooltip>
								</template>
							</template>
							<template #empty>
								<zs-no-data-small />
							</template>
						</zs-choice-major-table>
						<!-- 院校分页 -->
						<a-pagination
							v-if="userInfo?.vipStateValue == '1'"
							class="justify-end mt-[20px]"
							:total="schoolData.total"
							:current="schoolPagination.current"
							:page-size="schoolPagination.pageSize"
							@change="schoolPageChange"
							@page-size-change="schoolPageSizeChange"
							show-total
							show-jumper
							show-page-size
						/>
					</template>
					<!-- 未开通会员展示 -->
					<div
						class="h-[240px] vipBox flex items-center p-[10px_70px]"
						v-if="
							userInfo?.vipStateValue != '1' &&
							(majorOddsStatus === 'success' || schoolOddsStatus === 'success')
						"
					>
						<div class="h-[220px] w-[400px]">
							<zs-e-charts :options="chartOption" />
						</div>
						<div class="ml-[50px]">
							<div class="text-[#7A3805] text-[36px]">让孩子赢在志愿填报上</div>
							<div class="text-[#7A3805] mt-[10px]">
								<i class="iconfont icon-yixiangkan mr-[5px]" />院校专业查询
								<i class="iconfont icon-yixiangkan mr-[5px]" />院校招录数据
								<i class="iconfont icon-yixiangkan mr-[5px]" />测录取概率
							</div>
							<div
								class="mt-[20px] w-[296px] bg-[#FFA864] text-white text-[18px] leading-[47px] text-center rounded-[48px] cursor-pointer"
								@click="navigateTo('/personal?tab=memberCenter')"
							>
								立即开通VIP 查看全部志愿
							</div>
						</div>
					</div>
				</div>
			</template>
			<!-- 未完善信息 -->
			<div v-else class="flex items-center justify-center flex-col min-h-[60vh]">
				<h1 class="font-bold">完善信息后，尊享填报特权</h1>
				<a-button type="primary" @click="userInfo.userInfoModal = true">完善信息</a-button>
			</div>
			<!-- 可报专业 -->
			<zs-choice-eligible-major-modal
				v-if="activeKey === 'ZsChoiceEligibleMajorModal'"
				:data="form.selectRow"
				@cancelVolunteer="cancelVolunteer"
				@addVolunteer="addVolunteer"
				@cancel="setSelectRow({}, () => setActiveKey(null))"
			/>
			<!-- 院校历年 -->
			<zs-choice-academic-years-modal
				v-if="activeKey === 'ZsChoiceAcademicYearsModal'"
				:data="form.selectRow"
				@cancel="setSelectRow({}, () => setActiveKey(null))"
			/>
			<!-- 我的志愿  -->
			<zs-choice-volunteer-list-modal
				v-if="activeKey === 'ZsChoiceVolunteerListModal'"
				:data="volunteerInfo"
				@cancel="setSelectRow({}, () => setActiveKey(null))"
				@changeName="volunteerInfoRefresh"
				@cancelVolunteer="cancelVolunteer"
				@addVolunteer="addVolunteer"
				@init="volunteerListEvent"
			/>
			<!-- 修改志愿表名称 -->
			<zs-choice-change-name-modal
				v-if="activeKey === 'ZsChoiceChangeNameModal'"
				:name="volunteerInfo.zybt"
				:id="volunteerInfo.id"
				@cancel="setSelectRow({}, () => setActiveKey(null))"
				@success="
					() => {
						setSelectRow({}, () => setActiveKey(null)), volunteerInfoRefresh();
					}
				"
			/>
			<!-- 修改志愿表分数 -->
			<zs-choice-change-score-modal
				v-if="activeKey === 'ZsChoiceChangeScoreModal'"
				:data="form.selectRow"
				:isRequest="true"
				@cancel="setSelectRow({}, () => setActiveKey(null))"
				@success="changeScoreSuccess"
			/>
		</template>
		<zs-no-data v-else>
			<div>糟糕，页面好像没找到</div>
		</zs-no-data>
	</div>
</template>

<script setup lang="ts">
import { useDebounceFn } from '@vueuse/core';
// 设置头信息
useHead({
	title: '智能选志愿',
});
// 页面信息
definePageMeta({
	requiresAuth: true,
});
// 全局插件
const { $zsFetch, $zsMsg } = useNuxtApp();
// 用户信息
const { userInfo } = useUser();
// 路由信息
const route = useRoute();
// 确定模态框
const { warningModal } = useModal();
// 网站全局控制
const { setGlobalLoading } = useLoading();
// 网站信息
const { provinceCityList, getDictionValue } = useWebsiteInformation();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form } = useForm(() => ({
	curModule: 'major', // 当前模块是专业还是院校
	selectRow: {} as any, // 当前数据
	cwbList: [
		{ value: '', label: '冲稳保' },
		{ value: '1', label: '冲' },
		{ value: '2', label: '稳' },
		{ value: '3', label: '保' },
	], // 冲稳保列表
	cwb: '', // 冲稳保
	name: '', // 搜索条件
	collapse: false, // 是否折叠查询条件
	yxlx: [''], // 院校类型
	bxxz: [''], // 办学性质
	slbq: [''], // 实力标签
	tsbq: [''], // 特色标签
	sortType: 'DESC', // 默认降序
	sortName: 'wpm.ygzdf',
	widErr: false, // 防止用户修改志愿id
	curWishInfo: {} as any, //
}));
// 省份
const province = ref(userInfo.value.province);
const score = ref(userInfo.value.score);
// 浏览器志愿表id
const wid = ref(route.query.wid);
// 计算最高分以及最低分
const topScore = computed(() => {
	const list = volunteerInfo.value?.scoreRange;
	// 确保list是一个非空数组
	if (Array.isArray(list) && list.length > 0) {
		return Math.min(...list);
	}
	// 如果list不是数组或为空，则返回一个适当的值，
	return null;
});
const lowestScore = computed(() => {
	const list = volunteerInfo.value?.scoreRange;
	// 确保list是一个非空数组
	if (Array.isArray(list) && list.length > 0) {
		return Math.max(...list);
	}
	// 如果list不是数组或为空，则返回一个适当的值
	return null;
});
// 选中所在地区-城市
const selectCityList = computed(() => {
	return (
		sfList.value
			?.filter((item: any) => item.selectList)
			?.flatMap((o) => o.selectList)
			?.map((v) => v) ?? []
	);
});
// 选中专业门类-专业类
const selectZylList = computed(() => {
	return (
		xkmlList.value
			?.filter((item: any) => item.selectList)
			?.flatMap((o) => o.selectList)
			?.map((v) => v) ?? []
	);
});
// 展示的tag标签
const tagList = computed(() => {
	// 城市数组
	const cityList =
		selectCityList.value
			?.map((item: any) => {
				const foundItem = findListByKey(sfList.value, 'code', item);
				if (foundItem) {
					return {
						value: foundItem.code,
						label: foundItem.name,
						key: 'city', // 唯一key
					};
				}
				return null; // 或者您可以决定如何处理未找到的情况
			})
			?.filter((item: any) => item !== null) ?? []; // 过滤掉 null 值
	// 专业类数组
	const zylList =
		selectZylList.value?.map((item: any) => {
			return {
				value: item,
				label: item,
				key: 'zyl', // 唯一key
			};
		}) ?? [];
	return [
		...cityList,
		...getMappedList(form.value.yxlx, 'YXLX', 'yxlx'), // 院校类型
		...getMappedList(form.value.bxxz, 'BXXZ', 'bxxz'), // 办学性质
		...getMappedList(form.value.slbq, 'SLBQ', 'slbq'), // 实力标签
		...getMappedList(form.value.tsbq, 'TSBQ', 'tsbq'), // 特色标签
		ccData.value?.options?.find((o: any) => o.value === ccData.value?.cc),
		...zylList,
	].filter((o: any) => o != '');
});
// 计算出志愿表中丢失的最小数字
const smallestMissingNumber = computed(() => {
	const list =
		volunteerInfo.value.isSchoolGroup === '1'
			? filledInData.value?.list?.map((o: any) => o.zySeq) ?? []
			: form.value.curWishInfo!.children?.map((o: any) => o) ?? [];
	// 对数组进行排序
	let sortedNumbers = [...list].sort((a, b) => a - b);
	// 初始化最小缺失数字为1
	let smallestMissing = 1;
	// 遍历排序后的数组
	for (let i = 0; i < sortedNumbers.length; i++) {
		// 如果当前数字不等于最小缺失数字，则找到了缺失的最小数字
		if (sortedNumbers[i] !== smallestMissing) {
			return smallestMissing;
		}
		// 否则，更新最小缺失数字
		smallestMissing++;
	}
	// 如果所有数字都连续，则返回下一个数字
	return smallestMissing;
});
// 图例
const chartOption = computed(() => {
	return {
		tooltip: {
			trigger: 'item',
		},
		series: [
			{
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderColor: '#fff',
					borderWidth: 2,
				},
				label: {
					normal: {
						formatter: function (params: any) {
							// 使用rich文本样式，并在其中插入HTML标签
							return '{a|' + params.name + '}\n{hr|}\n{b|' + params.value + '}';
						},
						rich: {
							// 这里不需要预先定义a、hr、b样式，因为它们将在formatter中动态构建
						},
					},
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 20, // 你可以根据需要调整字体大小
						fontWeight: 'bold',
					},
				},
				labelLine: {
					show: true, // 显示标签引导线
				},
				data: [
					{
						value:
							form.value.curModule === 'major'
								? majorOdds.value.csum
								: schoolOdds.value.csum,
						name: '冲',
						itemStyle: { color: '#7C92FF' },
						tip: '冲刺',
					},
					{
						value:
							form.value.curModule === 'major'
								? majorOdds.value.wsum
								: schoolOdds.value.wsum,
						name: '稳',
						itemStyle: { color: '#5AB9FF' },
						tip: '稳妥',
					},
					{
						value:
							form.value.curModule === 'major'
								? majorOdds.value.bsum
								: schoolOdds.value.bsum,
						name: '保',
						itemStyle: { color: '#FFA864' },
						tip: '保底',
					},
				],
			},
		],
	};
});
// 专业分页控制
const {
	pagination: majorPagination,
	resetData: majorResetData,
	onPageChange: majorPageChange,
	onPageSizeChange: majorPageSizeChange,
} = usePagination(() => {
	// 请求数据
	majorRefresh();
});
// 院校分页控制
const {
	pagination: schoolPagination,
	resetData: schoolResetData,
	onPageChange: schoolPageChange,
	onPageSizeChange: schoolPageSizeChange,
} = usePagination(() => {
	// 请求数据
	schoolRefresh();
});
// 查专业列表防抖
const majorResetDebounce = useDebounceFn(() => {
	majorResetData();
}, 500);
// 查院校列表防抖
const schoolResetDebounce = useDebounceFn(() => {
	schoolResetData();
}, 500);
// 专业冲稳保防抖
const majorCwbDebounce = useDebounceFn(() => {
	majorOddsRefresh();
}, 500);
// 院校冲稳保防抖
const schoolCwbDebounce = useDebounceFn(() => {
	schoolOddsRefresh();
}, 500);
// 院校数据列表
const schoolFilterData = ref([
	{
		title: '院校类型',
		key: 'yxlx',
		isShow: true,
		multiple: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('YXLX')],
	},
	{
		title: '办学性质',
		key: 'bxxz',
		isShow: true,
		multiple: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('BXXZ')],
	},
	{
		title: '实力标签',
		key: 'slbq',
		isShow: true,
		multiple: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('SLBQ')],
	},
	{
		title: '特色标签',
		key: 'tsbq',
		isShow: true,
		multiple: true,
		options: [...NO_LIMIT_OPTIONS, ...getDictionValue('TSBQ')],
	},
]);
// 获取志愿表信息
const { data: volunteerInfo, refresh: volunteerInfoRefresh } = await useAsyncData(
	'volunteerInfo',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_VOLUNTEER_INFO, {
			body: {
				id: wid.value ?? '', // 志愿表id
			},
		});
		// 暴露数据
		return {
			...res?.data,
			zyTop: res?.data?.zyTop * 1,
			error: res.data === '未知志愿' ? true : false,
			scoreRange: [(res?.data?.score ?? 0) + 30, (res?.data?.score ?? 0) - 50],
		};
	},
	{
		default: () => {
			return {
				scoreRange: [0, 0],
				error: false,
				zyTop: 0,
				id: '',
			};
		},
		watch: [wid, province, score],
	}
);
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
				key: 'cc', // 唯一key
			};
		}) ?? [];
	// 暴露数据
	return {
		title: '专业层次',
		key: 'cc',
		isShow: true,
		multiple: false,
		options: ccList as any,
		cc: ccList[0].value ?? '',
	};
});
// 获取学科门类数据
const { data: xkmlList, refresh: xkmlRefresh } = useAsyncData(
	'xkmlList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.PUBLIC.GET_XK_ML_LIST, {
			body: {
				cc: ccData.value?.cc,
			},
		});
		// 处理数据
		const xkmlList = [
			{ xkml: '不限', xkmldm: '' },
			...(res?.data?.map((o: any) => {
				return {
					...o,
					selectList: [],
					indeterminate: false, // 半选状态
					checkedAll: false, // 是否全选
					popoverVisible: false, // 可见状态
				};
			}) ?? []),
		];
		// 暴露数据
		return xkmlList;
	},
	{
		default: () => [],
	}
);
// 获取省份列表
const { data: sfList, refresh: sfRefresh } = useAsyncData(
	'sfList',
	async () => {
		const list = [
			{ name: '不限', code: '' },
			...provinceCityList.value.map((o: any) => {
				return {
					...o,
					selectList: [],
					indeterminate: false, // 半选状态
					checkedAll: false, // 是否全选
					popoverVisible: false, // 可见状态
				};
			}),
		];
		// 暴露数据
		return list;
	},
	{
		default: () => [],
	}
);
// 查询已填报志愿
const { data: filledInData, refresh: filledInRefresh } = useAsyncData(
	'filledIn',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_FILLE_IN, {
			body: {
				id: volunteerInfo.value.id, // 志愿表id
			},
		});
		const specialList =
			volunteerInfo.value.isSchoolGroup === '1'
				? res?.data
				: groupByAndMergeChildArrays(res?.data, 'yxmc', 'children', 'zySeq');
		// 暴露数据
		return {
			list: res.data ?? [],
			specialList: specialList ?? [],
			total: res?.data?.length ?? 0,
		};
	},
	{
		default: () => ({
			list: [],
			specialList: [],
			total: 0,
		}),
	}
);
// 获取专业冲稳保数据
const {
	data: majorOdds,
	status: majorOddsStatus,
	refresh: majorOddsRefresh,
} = useAsyncData(
	'majorOdds',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_MAJOR_C_W_B_NUM, {
			body: {
				name: form.value.name, // 搜索条件
				yxsf: '', // 院校省份
				yxcs: selectCityList.value.join('/'), // 院校城市
				yxlx: form.value.yxlx.join('/'), // 院校类型
				bxxz: form.value.bxxz.join('/'), // 办学性质
				slbq: form.value.slbq.join('/'), // 实力标签
				tsbq: form.value.tsbq.join('/'), // 特色标签
				isXz: '', // 是否新招
				cc: ccData.value?.cc, // 专业层次
				xkml: '', // 专业门类
				zyl: selectZylList.value.join('/'), // 专业类
				startScore: topScore.value, // 最低分
				endScore: lowestScore.value, // 最高分
				type: '1', // 专业模块
				wid: volunteerInfo.value?.id, // 志愿表id
			},
			timeout: 60 * 1000,
		});
		// 暴露数据
		return {
			totalSum: res?.data?.totalSum ?? 0,
			wsum: res?.data?.wsum ?? 0,
			csum: res?.data?.csum ?? 0,
			bsum: res?.data?.bsum ?? 0,
		};
	},
	{
		default: () => ({
			totalSum: 0,
			wsum: 0,
			csum: 0,
			bsum: 0,
		}),
		immediate: false,
	}
);
// 获取专业列表
const {
	data: majorData,
	status: majorStatus,
	refresh: majorRefresh,
} = useAsyncData(
	'majorList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_MAJOR_LIST, {
			body: {
				name: form.value.name, // 搜索条件
				yxsf: '', // 院校省份
				yxcs: selectCityList.value.join('/'), // 院校城市
				yxlx: form.value.yxlx.join('/'), // 院校类型
				bxxz: form.value.bxxz.join('/'), // 办学性质
				slbq: form.value.slbq.join('/'), // 实力标签
				tsbq: form.value.tsbq.join('/'), // 特色标签
				isXz: '', // 是否新招
				cc: ccData.value?.cc, // 专业层次
				xkml: '', // 专业门类
				zyl: selectZylList.value.join('/'), // 专业类
				startScore: topScore.value, // 最低分
				endScore: lowestScore.value, // 最高分
				cwb: form.value.cwb, // 冲稳保
				wid: volunteerInfo.value?.id, // 志愿表id
				sortName: form.value.sortName,
				sortType: form.value.sortType,
				currentPage: majorPagination.value.current,
				pageSize: majorPagination.value.pageSize,
				pagingOrNot: 1,
			},
			timeout: 60 * 1000,
		});
		// 暴露数据
		return {
			list: res?.data?.list ?? [],
			total: res?.data?.totalCount ?? 0,
			year: res?.data?.year ?? 2024,
			sortNameList: [
				{ value: 'wpm.ygzdf', label: '按录取概率' },
				{ value: 'wpm.onezdwc', label: `按${res?.data?.year}位次` },
				{ value: 'wpm.twozdwc', label: `按${res?.data?.year - 1}位次` },
				{ value: 'wpm.threezdwc', label: `按${res?.data?.year - 2}位次` },
			],
		} as any;
	},
	{
		default: () => ({
			list: [],
			total: 0,
			year: 2024,
			sortNameList: [],
		}),
		immediate: false,
	}
);
// 获取院校冲稳保数据
const {
	data: schoolOdds,
	status: schoolOddsStatus,
	refresh: schoolOddsRefresh,
} = useAsyncData(
	'schoolOdds',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_MAJOR_C_W_B_NUM, {
			body: {
				name: form.value.name, // 搜索条件
				yxsf: '', // 院校省份
				yxcs: selectCityList.value.join('/'), // 院校城市
				yxlx: form.value.yxlx.join('/'), // 院校类型
				bxxz: form.value.bxxz.join('/'), // 办学性质
				slbq: form.value.slbq.join('/'), // 实力标签
				tsbq: form.value.tsbq.join('/'), // 特色标签
				isXz: '', // 是否新招
				cc: ccData.value?.cc, // 专业层次
				xkml: '', // 专业门类
				zyl: selectZylList.value.join('/'), // 专业类
				startScore: topScore.value, // 最低分
				endScore: lowestScore.value, // 最高分
				type: '2', // 院校模块
				wid: volunteerInfo.value?.id, // 志愿表id
			},
			timeout: 60 * 1000,
		});
		// 暴露数据
		return {
			totalSum: res?.data?.totalSum ?? 0,
			wsum: res?.data?.wsum ?? 0,
			csum: res?.data?.csum ?? 0,
			bsum: res?.data?.bsum ?? 0,
		};
	},
	{
		default: () => ({
			totalSum: 0,
			wsum: 0,
			csum: 0,
			bsum: 0,
		}),
		immediate: false,
	}
);
// 获取院校列表
const {
	data: schoolData,
	status: schoolStatus,
	refresh: schoolRefresh,
} = useAsyncData(
	'schoolList',
	async () => {
		const [err, res] = await $zsFetch(API_URLS.CHOICE.GET_SCHOOL_LIST, {
			body: {
				name: form.value.name, // 搜索条件
				yxsf: '', // 院校省份
				yxcs: selectCityList.value.join('/'), // 院校城市
				yxlx: form.value.yxlx.join('/'), // 院校类型
				bxxz: form.value.bxxz.join('/'), // 办学性质
				slbq: form.value.slbq.join('/'), // 实力标签
				tsbq: form.value.tsbq.join('/'), // 特色标签
				isXz: '', // 是否新招
				cc: ccData.value?.cc, // 专业层次
				xkml: '', // 专业门类
				zyl: selectZylList.value.join('/'), // 专业类
				startScore: topScore.value, // 最低分
				endScore: lowestScore.value, // 最高分
				cwb: form.value.cwb, // 冲稳保
				wid: volunteerInfo.value?.id, // 志愿表id
				sortName: form.value.sortName,
				sortType: form.value.sortType,
				currentPage: schoolPagination.value.current,
				pageSize: schoolPagination.value.pageSize,
				pagingOrNot: 1,
			},
			timeout: 60 * 1000,
		});
		// 暴露数据
		return {
			list: res?.data?.list ?? [],
			total: res?.data?.totalCount ?? 0,
			year: res?.data?.year ?? 2024,
			sortNameList: [
				{ value: 'wpm.ygzdf', label: '按录取概率' },
				{ value: 'wpm.onezdwc', label: `按${res?.data?.year}位次` },
				{ value: 'wpm.twozdwc', label: `按${res?.data?.year - 1}位次` },
				{ value: 'wpm.threezdwc', label: `按${res?.data?.year - 2}位次` },
			],
		} as any;
	},
	{
		default: () => ({
			list: [],
			total: 0,
			year: 2024,
			sortNameList: [],
		}),
		immediate: false,
	}
);
// 请求数据
if (userInfo.value.score && !volunteerInfo?.value?.error) {
	if (form.value.curModule === 'major') {
		// 专业列表
		majorRefresh();
		// 专业冲稳保
		majorOddsRefresh();
	} else {
		// 院校冲稳保
		schoolOddsRefresh();
		// 院校列表
		schoolRefresh();
	}
}
// 判断当前是专业还是院校
const checkSchoolOrMajor = async () => {
	if (form.value.curModule === 'major') {
		// 查询专业冲稳保
		majorCwbDebounce();
		// 查询专业列表
		majorResetDebounce();
	} else {
		// 查询院校冲稳保
		schoolCwbDebounce();
		// 查询院校列表
		schoolResetDebounce();
	}
};
// 修改志愿表分数成功后
const changeScoreSuccess = async () => {
	// 关闭当前值
	setSelectRow({}, () => setActiveKey(null));
	// 重新请求志愿表信息
	await volunteerInfoRefresh();
	// 查专业或院校
	checkSchoolOrMajor();
	// 查询已填报志愿
	filledInRefresh();
};
// 志愿表操作通知父组件事件
const volunteerListEvent = () => {
	// 请求专业或者院校
	checkSchoolOrMajor();
	// 请求志愿信息
	filledInRefresh();
};
// 复选框全选
const handleCheckAll = (item: any, checked: any, key: 'major' | 'school') => {
	item.checkedAll = checked;
	item.indeterminate = false;
	// 更新当前item的selectList以匹配全选或全不选 (存储专业类zyl或省份code)
	item.selectList = checked
		? item.children.map((child: any) => child[key === 'major' ? 'zyl' : 'code'])
		: [];
	// 查专业或院校
	checkSchoolOrMajor();
};
// 复选框单选
const singleChoice = (item: any) => {
	// 计算当前item的选中数量
	const totalSelected = item.selectList.length;
	const totalItems = item.children.length;
	// 更新全选和部分选中的状态
	item.checkedAll = totalSelected === totalItems;
	item.indeterminate = totalSelected > 0 && totalSelected < totalItems;
	// 查专业或院校
	checkSchoolOrMajor();
};
// 点击所在地区不限
const onLocationNoLimit = async () => {
	// 重新请求省份
	await sfRefresh();
	// 查专业或院校
	checkSchoolOrMajor();
};
// 改变公共过滤条件
const changePublicFilter = (val: any) => {
	form.value = {
		...form.value,
		...val,
	};
	// 查专业或院校
	checkSchoolOrMajor();
};
// 改变专业层次条件
const changeMajorFilter = async (val: any) => {
	if (ccData.value?.cc !== val.cc) {
		ccData.value!.cc = val.cc;
		// 重新请求专业门类
		await xkmlRefresh();
		// 查专业或院校
		checkSchoolOrMajor();
	}
};
// 点击专业类不限
const onZylNoLimit = async () => {
	// 重新请求学科门类
	await xkmlRefresh();
	// 查专业或院校
	checkSchoolOrMajor();
};
// 删除标签
const handleRemoveTag = (row: any) => {
	console.log(row);
};
// 改变分数条件
const changeScore = () => {
	// 查专业或院校
	checkSchoolOrMajor();
};
// 切换当前模块
const changeCurModule = () => {
	form.value.cwb = ''; // 恢复冲稳保默认值
	form.value.name = ''; // 清空搜索框条件
	// 查专业或院校
	checkSchoolOrMajor();
};
// 志愿表导出
const exportFile = async () => {
	warningModal(`确定导出志愿表吗`, async (done) => {
		// 开启loading
		setGlobalLoading(true);
		// 关闭弹窗
		done(true);
		const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_EXCEL, {
			body: {
				id: volunteerInfo.value.id, // 志愿表id
			},
			responseType: 'blob',
		});
		if (res) {
			// 关闭loading
			setGlobalLoading(false);
			// 下载
			downloadBlob(res, `${volunteerInfo.value.zybt}.xlsx`);
		}
	});
};
// 打开pdf文件
const openFile = async () => {
	warningModal(`确定导出志愿表吗`, async (done) => {
		// 开启loading
		setGlobalLoading(true);
		// 关闭弹窗
		done(true);
		const [err, res] = await $zsFetch(API_URLS.CHOICE.WISH_EXPORT_PDF, {
			body: {
				id: volunteerInfo.value.id, // 志愿表id
			},
		});
		if (res) {
			// 关闭loading
			setGlobalLoading(false);
			// 新页面打开pdf
			window.open(res.data, '_blank');
		}
	});
};
// 升序降序排序
const setSortType = (type: any) => {
	// 赋值排序
	form.value.sortType = type;
	checkSchoolOrMajor();
};
// 按排序
const setSortName = (type: any) => {
	// 赋值排序
	form.value.sortName = type;
	checkSchoolOrMajor();
};
// 添加志愿/取消志愿
const fillVolunteer = async (row: any, wishSort: number) => {
	const [err, res] = await $zsFetch(API_URLS.CHOICE.MAJOR_ADD_VOLUNTEER, {
		body: {
			id: row.id,
			wishId: volunteerInfo.value?.id,
			wishSort: wishSort,
		},
	});
	// 提示信息
	$zsMsg('success', res.data);
};
// 取消志愿
const cancelVolunteer = async (row: any) => {
	// 添加志愿/取消志愿
	await fillVolunteer(row, row.wSort);
	// 清空当前志愿
	row.wSort = '';
	// 查询已填报志愿
	filledInRefresh();
	// 可报专业时刷新当前分页下院校列表
	if (activeKey.value === 'ZsChoiceEligibleMajorModal' || row.isInit) {
		if (form.value.curModule === 'major') {
			majorRefresh();
		} else {
			schoolRefresh();
		}
	}
};
// 专业添加志愿
const addVolunteer = async (row: any) => {
	// 专业+院校
	if (volunteerInfo.value.isSchoolGroup === '1') {
		if (smallestMissingNumber.value > volunteerInfo.value?.zyTop) {
			// 提示信息
			$zsMsg('waring', '超过专业填报数量');
			return;
		}
		// 专业组分组
	} else {
		// 找到点击院校名称所对应的志愿信息
		form.value.curWishInfo =
			filledInData.value?.specialList.find((o: any) => o.yxmc === row.yxmc) ?? {};
		if (smallestMissingNumber.value > volunteerInfo.value?.zyTop) {
			// 提示信息
			$zsMsg('waring', '超过专业填报数量');
			return;
		}
		if (filledInData.value?.specialList?.length > volunteerInfo.value?.yxTop) {
			// 提示信息
			$zsMsg('waring', '超过院校填报数量');
			return;
		}
	}
	// 添加志愿/取消志愿
	await fillVolunteer(row, smallestMissingNumber.value);
	// 赋值当前志愿
	row.wSort = smallestMissingNumber.value;
	// 查询已填报志愿
	filledInRefresh();
	// 可报专业时刷新当前分页下院校列表
	if (activeKey.value === 'ZsChoiceEligibleMajorModal' || row.isInit) {
		if (form.value.curModule === 'major') {
			majorRefresh();
		} else {
			schoolRefresh();
		}
	}
};
// 设置当前数据
const setSelectRow = (row: any, callBack?: () => void) => {
	form.value.selectRow = row;
	if (callBack) callBack();
};
// 处理tag标签根据code数组取字典
const getMappedList = (sourceArray: Array<any>, dictionaryKey: any, key: any) => {
	return sourceArray
		.map((o) => {
			// 根据code查字典
			const item = getDictionValue(dictionaryKey).find((item) => item.code === o);
			if (item) {
				return {
					value: item.value,
					label: item.label,
					key: key, // 唯一key
				};
			} else {
				return null;
			}
		})
		.filter((item) => item !== null); // 过滤掉 null 值
};
/**
 * 递归查询当前 key 所对应的对象
 * @param {Array} menuList 列表
 * @param {string} key 当前key
 * @param {string} value 当前值
 */
const findListByKey = (menuList: Array<any>, key: string, value: any): any | null => {
	for (const item of menuList) {
		if (item[key] === value) return item;
		if (item.children) {
			const res = findListByKey(item.children, key, value);
			if (res) return res;
		}
	}
	return null;
};
</script>
<style scoped>
:deep(.arco-table .arco-table-cell) {
	padding: 10px;
}
:deep(.arco-radio-group .arco-radio) {
	margin-left: 0px;
	margin-right: 0px;
}
:deep(.arco-radio) {
	padding: 0px;
}
:deep(.arco-slider-track::before) {
	height: 4px;
}
:deep(.arco-slider-btn) {
	width: 25px !important;
	height: 15px !important;
	background: #7c92ff !important;
	color: white;
	text-align: center;
	z-index: 99;
	border-radius: 16px;
	top: -1px;
}
:deep(.arco-radio-group-button) {
	background: white;
	border: 1px solid #ededed;
}
:deep(.arco-radio-button.arco-radio-checked) {
	background: #7c92ff;
	color: white;
	font-weight: bold;
}
:deep(.arco-slider-bar) {
	height: 4px !important;
	background: #7c92ff !important;
}
:deep(.arco-slider-btn::after) {
	background: none;
	border: none;
}
:deep(.arco-checkbox-checked .arco-checkbox-icon) {
	background: #7c92ff;
}
:deep(.arco-checkbox-indeterminate .arco-checkbox-icon) {
	background: #7c92ff;
}
/* :deep(.arco-slider-btn:nth-child(2)::before) {
	content: v-bind(topScore);
}

:deep(.arco-slider-btn:nth-child(3)::before) {
	content: '2' !important;
} */
.vipBox {
	background: linear-gradient(85deg, #a6d9ff 0%, #ffefe3 33%, #bac9ff 67%, #ffd5b4 100%),
		linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0.1) 100%);
	border-radius: 8px 8px 8px 8px;
}
.fontIcon {
	font-size: 25px;
}
</style>
