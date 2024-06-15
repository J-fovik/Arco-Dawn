<template>
	<ZsContent>
		<a-card class="general-card" title="图标选择器">
			<a-form ref="formRef" size="large" layout="vertical" auto-label-width :model="form">
				<a-grid :cols="2" :col-gap="20">
					<a-grid-item>
						<a-form-item label="选择图标:" field="icon">
							<a-input-group class="flex-1">
								<a-input v-model="form.icon" readonly placeholder="请选择图标">
									<template v-if="form.icon" #prefix>
										<component :is="form.icon"></component>
									</template>
								</a-input>
								<a-button type="primary" @click="setActiveKey('ZsIconSelector')"
									>选择图标</a-button
								>
							</a-input-group>
						</a-form-item>
					</a-grid-item>
				</a-grid>
			</a-form>
		</a-card>
		<ZsIconSelector
			v-if="activeKey === 'ZsIconSelector'"
			@close="setActiveKey('')"
			@select-icon="setMenuIcon"
		/>
	</ZsContent>
</template>

<script lang="ts" setup name="MakeIconSelector">
import { useForm, useBasicsState } from '@/hooks';
// 弹窗状态控制
const [activeKey, setActiveKey] = useBasicsState<string | null>(null);
// form
const { form, formRef } = useForm(() => ({
	icon: '',
}));

// 设置图标
const setMenuIcon = (icon: string) => {
	form.value.icon = icon;
	// 关闭弹窗
	setActiveKey('');
};
</script>
