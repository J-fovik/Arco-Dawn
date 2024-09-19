<template>
	<ZsContent>
		<a-card title="菜单权限" :bordered="false">
			<a-button type="primary" @click="setActiveKey('ZsDistributionPower')"
				>分配权限</a-button
			>
		</a-card>
		<zs-distribution-power
			v-if="activeKey === 'ZsDistributionPower'"
			@close="setActiveKey(null)"
			:data="{}"
			@success="router.go(0)"
		/>
	</ZsContent>
</template>
<script lang="ts" setup name="MenuRoleMenu">
import { useBasicsState } from '@/hooks';
const router = useRouter();
// 页面唯一元素控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
import ZsDistributionPower from './components/zsDistributionPower.vue';
</script>
