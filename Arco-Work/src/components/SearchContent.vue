<template>
  <a-modal v-model:visible="visible" :closable="false" :align-center="false">
    <a-tabs default-active-key="1" size="small">
      <a-tab-pane key="1" title="站内">
        <div class="p-4">
          <a-tree-select
            v-model:value="innerValue"
            show-search
            style="width: 100%"
            :dropdown-style="{ maxHeight: '400px', overflow: 'auto' }"
            placeholder="请输入菜单名称"
            allow-clear
            size="large"
            :data="searchList"
            @change="onSelectItem"
          >
          </a-tree-select>
        </div>
      </a-tab-pane>
      <a-tab-pane key="2" title="站外">
        <div class="p-4">
          <a-input-search
            v-model="outValue"
            placeholder="请输入关键字"
            press-enter
            allowClear
            size="large"
            @search="onOutSearch"
          />
        </div>
      </a-tab-pane>
    </a-tabs>
  </a-modal>
</template>

<script lang="ts">
  import usePermissionStore from '@/store/modules/permission'
  import { defineComponent, onMounted, ref } from 'vue'
  import { RouteRecordRaw, useRouter } from 'vue-router'
  interface InnerSearchItem {
    title: string
    key: string
    disabled: boolean
    children?: InnerSearchItem[]
  }

  export default defineComponent({
    setup() {
      const visible = ref(false)
      const activeKey = ref('1')
      const outValue = ref('')
      const innerValue = ref(undefined)
      const searchList = ref<Array<InnerSearchItem>>([])
      function show() {
        visible.value = true
      }
      function close() {
        visible.value = false
      }
      function onOutSearch() {
        if (outValue.value) {
          visible.value = false
          window.open('https://www.baidu.com/s?wd=' + outValue.value)
        }
      }
      const permissionStore = usePermissionStore()
      function transformRoutes(
        routes: RouteRecordRaw[],
        parentPath: string = '/'
      ): InnerSearchItem[] {
        const list: InnerSearchItem[] = []
        routes
          .filter((it) => it.meta && it.meta.hidden !== true && it.path !== parentPath)
          .forEach((it) => {
            const searchItem: InnerSearchItem = {
              key: ((it.meta?.title as string) || '') + ':' + it.path,
              title: it.meta ? (it.meta.title as string) : '',
              disabled: false,
            }
            if (it.children && it.children.length > 0) {
              searchItem.children = transformRoutes(it.children, it.path)
              searchItem.disabled = true
            }
            list.push(searchItem)
          })
        return list
      }
      const router = useRouter()
      function onSelectItem(value: any) {
        const items = value.split(':')
        router.push(items[1]).then(() => {
          visible.value = false
        })
      }
      onMounted(() => {
        searchList.value = transformRoutes(permissionStore.getPermissionSideBar)
      })
      return {
        visible,
        activeKey,
        searchList,
        outValue,
        innerValue,
        show,
        close,
        onOutSearch,
        onSelectItem,
      }
    },
  })
</script>
