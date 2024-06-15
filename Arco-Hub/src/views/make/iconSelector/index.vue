<template>
	<ZsContent>
		<a-card class="general-card" title="图标选择器">
			<a-form ref="formRef" size="large" layout="vertical" auto-label-width :model="form">
				<a-grid :cols="2" :col-gap="20">
					<a-grid-item>
						<a-form-item label="选择图标(一):" field="icon">
							<a-input-group class="flex-1">
								<a-input v-model="form.iconOne" readonly placeholder="请选择图标">
									<template v-if="form.iconOne" #prefix>
										<component :is="form.iconOne"></component>
									</template>
								</a-input>
								<a-button type="primary" @click="setActiveKey('ZsIconSelector')"
									>选择图标</a-button
								>
							</a-input-group>
						</a-form-item>
					</a-grid-item>
					<a-grid-item>
						<a-form-item label="选择图标(二):" field="icon">
							<ZsSelectIcon v-model="form.iconTwo"></ZsSelectIcon>
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
	iconOne: '',
	iconTwo: '',
}));

// 设置图标
const setMenuIcon = (icon: string) => {
	form.value.iconOne = icon;
	// 关闭弹窗
	setActiveKey('');
};
</script>
