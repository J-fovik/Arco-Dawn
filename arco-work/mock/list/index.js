import Mock, { Random } from 'mockjs'
import { baseData } from '../base.ts'
const totalSize = 30
function computePageSize(totalSize, page, pageSize) {
  return Math.abs(totalSize - pageSize * page >= 0 ? pageSize : totalSize - pageSize * page)
}
// 使用
Mock.mock(RegExp('/getTableList'), 'post', function ({ body }) {
  const { page, pageSize = 10 } = JSON.parse(body)
  const size = computePageSize(totalSize, page, pageSize)
  return Mock.mock({
    ...baseData,
    totalSize,
    [`data|${size}`]: [
      {
        'id|+1': 1,
        nickName: function () {
          return Random.name()
        },
        avatar:
          (import.meta.env.MODE === 'development' ? '' : '/vue-admin-work-p') +
          '/static/images/img_avatar_01.jpeg',
        'gender|0-1': 0, // 0男 1女
        'vip|0-1': 0, // 0不是 1是
        address: function () {
          return Random.city(true)
        },
        lastLoginTime: Random.now('yyyy-MM-dd HH:mm:ss'),
        lastLoginIp: function () {
          return Random.ip()
        },
        'status|0-1': 1, // 0 禁用 1正常
      },
    ],
  })
})


