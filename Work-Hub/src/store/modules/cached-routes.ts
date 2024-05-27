import { toHump } from '@/utils'
import { defineStore } from 'pinia'
// 缓存
const useCachedRouteStore = defineStore('cached-routes', {
  state: () => {
    return {
      // 缓存路由
      cachedRoutes: [] as string[],
    }
  },
  getters: {
    // 获取缓存路由
    getCachedRouteName(state) {
      return state.cachedRoutes
    },
  },
  actions: {
    // 初始化缓存路由
    initCachedRoute(routes: string[]) {
      this.cachedRoutes = routes.map((it) => {
        return toHump(it as string)
      })
    },
    // 设置缓存路由
    setCachedRoutes(cachedRoutes: string[] = []) {
      this.cachedRoutes = cachedRoutes
    },
    // 重置缓存路由
    resetCachedRoutes() {
      this.$reset()
    },
  },
})

export default useCachedRouteStore
