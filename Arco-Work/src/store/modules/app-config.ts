import { defineStore } from 'pinia'

import defaultSetting from '@/setting'
import { LayoutMode, PageAnim, SideTheme, ThemeMode, DeviceType } from '../types'

import { useChangeMenuWidth } from '@/hooks/useMenuWidth'
import usePrimaryColor from '@/hooks/usePrimaryColor'
import useTheme from '@/hooks/useTheme'

const useAppConfigStore = defineStore('app-config', {
  state: () => {
    return defaultSetting
  },
  getters: {
    getLayoutMode(state) {
      return state.layoutMode
    },
  },
  actions: {
    // 改变主题设置
    changeTheme(theme: ThemeMode) {
      this.theme = theme
      useTheme(theme)
    },
    // 改变布局模式
    changeLayoutMode(mode: LayoutMode) {
      this.layoutMode = mode
    },
    // 类型（移动，pc,等）
    changeDevice(deviceType: DeviceType) {
      this.deviceType = deviceType
    },
    // 侧边栏样式切换
    changeSideBarTheme(sideTheme: SideTheme) {
      this.sideTheme = sideTheme
    },
    // 页面切换动画
    changePageAnim(pageAnim: PageAnim) {
      this.pageAnim = pageAnim
    },
    // 颜色切换
    changePrimaryColor(color: string) {
      this.themeColor = color
      usePrimaryColor(color)
    },
    // 菜单宽度
    changeSideWidth(sideWidth: number) {
      this.sideWidth = sideWidth
      useChangeMenuWidth(sideWidth)
    },
    // 是否折叠
    toggleCollapse(isCollapse: boolean) {
      this.isCollapse = isCollapse
    },
    // 主体内容高度
    setMainHeight(height: number) {
      this.mainHeight = height
    },
    // 设置弹性主体高度
    setFlexMainHeight(isFlex: boolean) {
      this.flexMainHeight = isFlex
    },
  },
  presist: {
    enable: true,
    resetToState: true,
    option: {
      exclude: ['flexMainHeight'],
    },
  },
})

export default useAppConfigStore
