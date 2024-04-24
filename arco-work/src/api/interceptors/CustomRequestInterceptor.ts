import { useUserStoreContext } from '@/store/modules/user'
import { AxiosRequestConfig } from 'axios'
// 请求头带token
export default async function (config: AxiosRequestConfig) {
  const useStore = await useUserStoreContext()
  if (config) {
    if (!config.headers) {
      config.headers = {}
    }
    if (!config.headers['Auth']) {
      config.headers['Auth'] = useStore.token
    }
  }
  return config
}
