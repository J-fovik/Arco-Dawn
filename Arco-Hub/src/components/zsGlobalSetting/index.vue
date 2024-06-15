<template>
	<div v-if="!appStore.appConfig.navbar" class="fixed-settings">
		<a-button type="primary" @click="appStore.setGlobalSettingsVisible(true)">
			<template #icon>
				<icon-settings />
			</template>
		</a-button>
	</div>
	<a-drawer
		title="页面配置"
		hide-cancel
		unmount-on-close
		:width="300"
		:visible="appStore.appConfig.globalSettings"
		ok-text="确定"
		@ok="appStore.setGlobalSettingsVisible(false)"
		@cancel="appStore.setGlobalSettingsVisible(false)"
	>
		<div class="settings-box">
			<h5 class="title">内容区域</h5>
			<!-- <div class="switch-wrapper">
				<span>导航栏</span>
				<a-switch v-model="appStore.appConfig.navbar" />
			</div> -->
			<div class="switch-wrapper">
				<span>菜单栏</span>
				<a-switch v-model="appStore.appConfig.menu" />
			</div>
			<!-- <div v-if="appStore.appConfig.menu" class="switch-wrapper">
				<span>菜单置顶</span>
				<a-switch
					:default-checked="appStore.appConfig.topMenu"
					@change="appStore.setTopMenu"
				/>
			</div> -->
			<div class="switch-wrapper" v-cloak>
				<span>菜单宽度</span>
				<a-input-number
					v-model="appStore.appConfig.menuWidth"
					:disabled="appStore.appConfig.topMenu"
					:style="{ width: '80px' }"
				/>
			</div>
		</div>
		<div class="settings-box">
			<h5 class="title">其他设置</h5>
			<div class="switch-wrapper">
				<span>色弱模式</span>
				<a-switch
					:default-checked="appStore.appConfig.colorWeak"
					@change="appStore.setColorWeak"
				/>
			</div>
			<div v-if="appStore.appConfig.colorWeak" class="switch-wrapper">
				<span>色弱强度</span>
				<a-slider
					v-model="appStore.appConfig.colorWeakNumber"
					:style="{ width: '100px' }"
					:step="20"
					:min="20"
					show-ticks
					@change="appStore.setColorWeakNumber"
				/>
			</div>
		</div>
		<a-alert>配置之后仅是临时生效, 刷新或重新打开时将恢复默认设置。</a-alert>
	</a-drawer>
</template>

<script lang="ts" setup name="ZsGlobalSetting">
import { useAppStore } from '@/pinia';
// app配置
const appStore = useAppStore();
</script>

<style scoped lang="less">
.fixed-settings {
	position: fixed;
	top: 280px;
	right: 0;
}

.settings-box {
	margin-bottom: 24px;
	.title {
		margin: 10px 0;
		padding: 0;
		font-size: 14px;
	}
	.switch-wrapper {
		display: flex;
		align-items: center;
		justify-content: space-between;
		height: 36px;
	}
}
</style>
