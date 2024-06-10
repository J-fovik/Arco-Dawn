<template>
	<a-menu
		v-model:collapsed="appStore.appConfig.menuCollapse"
		style="height: 100%; width: 100%"
		:mode="appStore.appConfig.topMenu ? 'horizontal' : 'vertical'"
		:auto-open="false"
		:selected-keys="selectedKey"
		:auto-open-selected="true"
		:level-indent="34"
		@collapse="appStore.setMenuCollapse"
	>
		<template v-for="item in userMenus" :key="item.name">
			<template v-if="item.children">
				<a-sub-menu :key="item.name">
					<template #icon><component :is="item.icon"></component></template>
					<template #title>{{ item.title }}</template>
					<template v-if="item.children.length">
						<a-menu-item
							v-for="child in item.children"
							:key="child.name"
							@click="router.push({ name: child.name })"
							>{{ child.title }}</a-menu-item
						>
					</template>
				</a-sub-menu>
			</template>
			<template v-else>
				<a-menu-item :key="item.name" @click="router.push({ name: item.name })">
					<template #icon><component :is="item.icon"></component></template>
					{{ item.title }}
				</a-menu-item>
			</template>
		</template>
	</a-menu>
</template>

<script setup lang="ts" name="ZsMenu">
import { ref, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useAppStore, useUserStore } from '@/pinia';
import { appMenus } from '@/router/base';
// 路由信息
const route = useRoute();
// 路由控制
const router = useRouter();
// 用户信息
const userInfoStore = useUserStore();
// app配置
const appStore = useAppStore();
// 选中的菜单
const selectedKey = ref<string[]>([route.name as string]);
// 用户菜单
const userMenus = computed(() => {
	// admin 必须展示角色管理和个人信息，其他取权限配置信息
	if (userInfoStore.userInfo.loginName === 'admin') {
    return appMenus.reduce((menus, next) => {
      // 判断是否存在子菜单
      const menuChildren = next.children ? next.children.filter((child: any) => userInfoStore.userInfo.roleList?.includes(child.name) || (child.name == 'SystemRoleManage' || child.name == 'SystemUserSetting')) : [];
      // 判断是否存在子菜单
      if (menuChildren.length) {
        menus.push({ ...next, children: menuChildren })
      }
    //   console.log("next.name:", next.name)
      // 判断一级菜单是否显示
      const isMenu = userInfoStore.userInfo!.roleList?.includes(next.name) || next.name == 'System';
      // 判断一级菜单是否显示 并且不存在子菜单
      if (isMenu && !menuChildren.length ) {
        menus.push({ ...next, children: null });
      }
      return menus;
    }, []);
  }
	// 判断不存在返回空路由
	if (!userInfoStore.userInfo.roleList?.length) return [];
	// 判断其他菜单
	return appMenus.reduce((menus, next) => {
		// 判断是否存在子菜单
		const menuChildren = next.children ? next.children.filter((child: any) => userInfoStore.userInfo.roleList?.includes(child.name)) : [];
		// 判断是否存在子菜单
		if (menuChildren.length) {
			menus.push({ ...next, children: menuChildren })
		} 
		// 判断一级菜单是否显示
		const isMenu = userInfoStore.userInfo!.roleList?.includes(next.name);
		// 判断一级菜单是否显示 并且不存在子菜单
		if (isMenu && !menuChildren.length ) {
			menus.push({ ...next, children: null });
		}
		return menus;
	}, []);
})

// 监听路由变化
watch(route, (newRoute) => {
	selectedKey.value = [newRoute.name as string];
});
</script>

<style lang="less" scoped>
  :deep(.arco-menu-inner) {
    .arco-menu-inline-header {
      display: flex;
      align-items: center;
    }
    .arco-icon {
      &:not(.arco-icon-down) {
        font-size: 18px;
      }
    }
  }
</style>

