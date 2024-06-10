<template>
	<zs-content #="{ title }">
		<a-card class="general-card" :title="title">
			<template v-if="fold" #extra>
				<a-button type="text" size="mini" @click="setCollapsed(!collapsed)">
					<template #icon>
						<component :is="collapsed ? 'icon-up' : 'icon-down'"></component>
					</template>
					{{ collapsed ? '折叠' : '展开' }}
				</a-button>
			</template>
			<div class="box-flex" >
				<div class="flex1">
					<slot name="form" :collapsed="collapsed"></slot>
				</div>
				<div style="width: 1px;margin: 0 20px;background-color: #e5e6eb;"></div>
				<div>
					<slot name="formButton" :collapsed="collapsed">
						<a-space
							:direction="!collapsed ? 'horizontal' : 'vertical'"
							:size="18"
							align="end"
						>
							<a-button type="primary" size="large" @click="emits('search')">
								<template #icon>
									<icon-search />
								</template>
								查询
							</a-button>
							<a-button size="large" @click="emits('resetSearch')">
								<template #icon>
									<icon-refresh />
								</template>
								重置
							</a-button>
						</a-space>
					</slot>
				</div>
			</div>
			<a-divider style="margin-top: 10px" />
			<div class="box-flex jc-sb ai-c">
				<div>
					<slot name="operate"></slot>
				</div>
				<a-space>
					<div style="padding-right: 16px">
						<slot name="statistics"></slot>
					</div>
					<a-tooltip content="表格密度">
						<a-trigger position="left" trigger="click" :popup-translate="[-10, 0]">
							<a-button shape="circle">
								<icon-line-height />
							</a-button>
							<template #content>
								<a-radio-group
									type="button"
									:model-value="tableSize"
									@change="emits('changeTableSize', $event)"
								>
									<a-radio value="large"> 大 </a-radio>
									<a-radio value="medium"> 中 </a-radio>
									<a-radio value="small"> 小 </a-radio>
									<a-radio value="mini"> 迷你 </a-radio>
								</a-radio-group>
							</template>
						</a-trigger>
					</a-tooltip>
					<a-tooltip content="列表头设置">
						<a-trigger position="br" trigger="click" :popup-translate="[0, 10]">
							<a-button shape="circle">
								<icon-settings />
							</a-button>
							<template #content>
								<div class="table-setting" title="列展示">
									<h3>列展示</h3>
									<div
										v-for="(item, index) in tableColumns"
										:key="index"
										class="table-setting-item"
									>
										<a-checkbox
											:model-value="item.show"
											@change="
												emits('changeTableColumn', {
													show: $event,
													num: index,
												})
											"
											>{{ item.title }}</a-checkbox
										>
									</div>
								</div>
							</template>
						</a-trigger>
					</a-tooltip>
				</a-space>
			</div>
			<div style="margin-top: 16px">
				<slot name="table"></slot>
			</div>
		</a-card>
	</zs-content>
</template>

<script lang="ts" setup name="ZsSearchTableMould">
import type { TableCustomColumnData } from '@/hooks';
import { useBasicsState } from '@/hooks';
import zsContent from '@/components/zsContent/index.vue';
// 父组件参数
const props = withDefaults(
	defineProps<{
		fold?: boolean; // 是否开启折叠控制
		tableColumns?: Array<TableCustomColumnData>;
		tableSize?: SizeProps;
		isCollapsed?: boolean; // 是否开启折叠控制
	}>(),
	{
		fold: false,
		tableSize: 'large',
		isCollapsed: false,
		tableColumns: () => [],
	}
);
// 控制折叠
const [collapsed, setCollapsed] = useBasicsState<boolean>(props.isCollapsed);
// 父组件方法
const emits = defineEmits(['changeTableSize', 'changeTableColumn', 'resetSearch', 'search']);
</script>
