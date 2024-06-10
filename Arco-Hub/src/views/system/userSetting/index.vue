<template>
	<zs-content>
		<a-card :bordered="false" class="general-card" style="padding-top: 16px">
			<a-tabs size="large">
				<a-tab-pane key="1">
					<template #title> <icon-user /> 个人信息 </template>
					<div style="padding-left: 100px">
						<zs-edit-user />
					</div>
				</a-tab-pane>
				<a-tab-pane key="2">
					<template #title> <icon-tool /> 修改密码 </template>
					<div style="padding-left: 100px">
						<zs-edit-password />
					</div>
				</a-tab-pane>
			</a-tabs>
		</a-card>
	</zs-content>
</template>

<script lang="ts" setup name="SystemUserSetting">
import ZsContent from '@/components/zsContent/index.vue';
import ZsEditPassword from './components/zsEditPassword.vue';
import ZsEditUser from './components/zsEditUser.vue';
</script>
