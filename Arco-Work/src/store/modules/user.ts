import { defineStore } from 'pinia'
import { UserState } from '../types'
import store from '../pinia'
import Avatar from '@/assets/img_avatar.gif'
import { nextTick } from 'vue'
const defaultAvatar = Avatar
const useUserStore = defineStore('user-info', {
  state: () => {
    return {
      userInfo: {} as any,
      token: '',
    }
  },
  actions: {
    // 保存用户信息
    saveUser(userInfo: UserState) {
      return new Promise<UserState>((resolve) => {
        this.userInfo = {
          ...userInfo,
          avatar: userInfo.avatar || defaultAvatar
        }
        this.token = userInfo.token
        resolve(userInfo)
      })
    },
    // 判断是否有token
    isTokenExpire() {
      return !this.token
    },
    // 改变名字
    changeNickName(newNickName: string) {
      this.userInfo.nickName = newNickName
    },
    // 退出登录
    logout() {
      return new Promise<void>((resolve) => {
        this.$reset()
        localStorage.clear()
        sessionStorage.clear()
        resolve()
      })
    },
  },
  presist: {
    enable: true,
    resetToState: true,

  },
})
export default useUserStore
/**
 * 返回一个Promise对象，目的是防止在非vue组件使用中的时候出现插件还没有出初始化完成导致持久化操作失败的bug。
 * 使用方式：
 *  import { useUserStoreContext } from '@/store/modules/user'
    useUserStoreContext().then((store) => {
      console.log(store.nickName)
    })
 * @returns Promise<typeof useUserStore>
 */
export async function useUserStoreContext() {
  await nextTick()
  return useUserStore(store)
}
