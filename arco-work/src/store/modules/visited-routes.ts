import { defineStore } from 'pinia'
import { RouteLocationNormalized } from 'vue-router'
import pinia from '../pinia'
import useCachedRouteStore from '@/store/modules/cached-routes'
import { findCachedRoutes } from '../help'
// 访问过
const visitedRoutes = JSON.parse(localStorage.getItem('visited-routes') || '[]')

const useVisitedRouteStore = defineStore('visited-routes', {
  state: () => {
    return {
      visitedRoutes: visitedRoutes as RouteLocationNormalized[],
      isLoadAffix: false,
    }
  },
  getters: {
    // 获取访问过的路由
    getVisitedRoutes(state) {
      return state.visitedRoutes
    },
  },
  actions: {
    // 初始化获取固定tag路由
    initAffixRoutes(affixRoutes: RouteLocationNormalized[]) {
      affixRoutes.reverse().forEach((affixRoute) => {
        if (!this.visitedRoutes.find((it) => it.fullPath === affixRoute.fullPath)) {
          this.visitedRoutes.unshift(affixRoute)
        }
      })
      this.isLoadAffix = true
    },
    // 添加tag路由
    addVisitedRoute(route: RouteLocationNormalized) {
      return new Promise((resolve) => {
        if (!this.visitedRoutes.find((it) => it.fullPath === route.fullPath)) {
          if (route.name) {
            const cachedRoutesStore = useCachedRouteStore()
            if (!cachedRoutesStore.cachedRoutes.includes(route.name as string)) {
              cachedRoutesStore.cachedRoutes.push(route.name as string)
            }
          }
          this.visitedRoutes.push(route)

          this.persistentVisitedView()
        }
        resolve(route)
      })
    },
    // 删除tag路由
    removeVisitedRoute(route: RouteLocationNormalized) {
      return new Promise<string>((resolve) => {
        this.visitedRoutes.splice(this.visitedRoutes.indexOf(route), 1)
        if (route.name) {
          const cachedRoutesStore = useCachedRouteStore()
          if (cachedRoutesStore.cachedRoutes.includes(route.name as string)) {
            cachedRoutesStore.cachedRoutes.splice(
              cachedRoutesStore.cachedRoutes.indexOf(route.name as string),
              1
            )
          }
        }
        this.persistentVisitedView()
        resolve(this.findLastRoutePath())
      })
    },
    findLastRoutePath() {
      return this.visitedRoutes && this.visitedRoutes.length > 0
        ? this.visitedRoutes[this.visitedRoutes.length - 1].fullPath
        : '/'
    },
    // 关闭左侧tag
    closeLeftVisitedView(selectRoute: RouteLocationNormalized) {
      return new Promise((resolve) => {
        const selectIndex = this.visitedRoutes.indexOf(selectRoute)
        if (selectIndex !== -1) {
          this.visitedRoutes = this.visitedRoutes.filter((it, index) => {
            return (it.meta && it.meta.affix) || index >= selectIndex
          })
          const cachedRoutesStore = useCachedRouteStore()
          cachedRoutesStore.setCachedRoutes(findCachedRoutes(this.visitedRoutes))
          this.persistentVisitedView()
        }
        resolve(selectRoute)
      })
    },
    // 关闭右侧tag
    closeRightVisitedView(selectRoute: RouteLocationNormalized) {
      return new Promise((resolve) => {
        const selectIndex = this.visitedRoutes.indexOf(selectRoute)
        if (selectIndex !== -1) {
          this.visitedRoutes = this.visitedRoutes.filter((it, index) => {
            return (it.meta && it.meta.affix) || index <= selectIndex
          })
          const cachedRoutesStore = useCachedRouteStore()
          cachedRoutesStore.setCachedRoutes(findCachedRoutes(this.visitedRoutes))
          this.persistentVisitedView()
        }
        resolve(selectRoute)
      })
    },
    // 关闭所有tag
    closeAllVisitedView() {
      return new Promise<void>((resolve) => {
        this.visitedRoutes = this.visitedRoutes.filter((it) => {
          return it.meta && it.meta.affix
        })
        const cachedRoutesStore = useCachedRouteStore()
        cachedRoutesStore.setCachedRoutes(findCachedRoutes(this.visitedRoutes))
        this.persistentVisitedView()
        resolve()
      })
    },
    // map方法
    persistentVisitedView() {
      const tempPersistendRoutes = this.visitedRoutes.map((it) => {
        return {
          fullPath: it.fullPath,
          meta: it.meta,
          name: it.name,
          path: it.path,
        }
      })
      localStorage.setItem(this.$id, JSON.stringify(tempPersistendRoutes))
    },
    // 刷新
    restoreVisitedView() {
      this.$reset()
    },
  },
  // 由于需要自定义持久化过程，所以这里就不能用插件来实现
  // presist: {
  //   enable: true,
  // },
})

export function useVisitedRoutesContext() {
  return useVisitedRouteStore(pinia)
}

export default useVisitedRouteStore
