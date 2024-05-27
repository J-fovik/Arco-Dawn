import Mock from 'mockjs'

export const adminRoutes = [
  {
    menuUrl: '/index',
    menuName: 'Dashborad',
    routeName: 'dashborad',
    icon: 'icon-dashboard',
    parentPath: '',
    children: [
      {
        parentPath: '/index',
        menuUrl: '/index/home',
        menuName: '主控台',
        routeName: 'home',
      },
    ],
  },
  {
    menuUrl: '/list',
    menuName: '表格demo',
    icon: 'icon-list',
    parentPath: '',
    children: [
      {
        parentPath: '/list',
        menuUrl: '/list/table-demo',
        menuName: '自定义表格',
      },
    ],
  },
  {
    menuUrl: '/other',
    menuName: '功能/组件',
    icon: 'icon-apps',
    parentPath: '',
    children: [
      {
        parentPath: '/other/chart',
        menuUrl: '/other/icons',
        menuName: '图标',
      },
      {
        parentPath: '/other/chart',
        menuUrl: '/other/echarts',
        menuName: 'echarts',
      },
      {
        parentPath: '/other/chart',
        menuUrl: '/other/icon-select',
        menuName: '图标选择器',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/print',
        menuName: '打印',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/clipboard',
        menuName: '剪贴板',
      },
      {
        parentPath: '/other',
        menuUrl: 'http://qingqingxuan.gitee.io/work-p-site',
        menuName: '外链',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/qrcode',
        menuName: '二维码',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/flow',
        menuName: '流程图',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/player',
        menuName: '视频播放器',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/password-strong-page',
        menuName: '密码强度',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/cropper',
        menuName: '图片裁剪',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/iframe',
        menuName: '内嵌iframe',
      },
      {
        parentPath: '/upload',
        menuUrl: '/other/upload',
        menuName: '上传图片',
      },
    ],
  },
  {
    menuUrl: '/route-params',
    menuName: '路由参数',
    icon: 'icon-file',
    parentPath: '',
    children: [
      {
        parentPath: '/route-params',
        menuUrl: '/route-params/query',
        menuName: 'query参数',
      },
      {
        parentPath: '/route-params',
        menuUrl: '/route-params/params',
        menuName: 'params参数',
      },
    ],
  },
  {
    menuUrl: '/editor',
    menuName: '编辑器',
    badge: '12',
    icon: 'icon-edit',
    parentPath: '',
    children: [
      {
        parentPath: '/editor',
        menuUrl: '/editor/rich-text',
        menuName: '富文本',
      },
    ],
  },
  {
    menuUrl: '/draggable',
    menuName: '拖拽',
    icon: 'icon-drag-arrow',
    parentPath: '',
    children: [
      {
        parentPath: '/draggable',
        menuUrl: '/draggable/card-draggable',
        menuName: '卡片拖拽',
        cacheable: true,
      },
    ],
  },
  {
    menuUrl: '/map',
    menuName: '地图',
    icon: 'icon-location',
    children: [
      {
        parentPath: '/map',
        menuUrl: '/map/gaode',
        menuName: '高德地图',
      },
      {
        parentPath: '/map',
        menuUrl: '/map/baidu',
        menuName: '百度地图',
      },
    ],
  },
]
export const editorRoutes = [
  {
    menuUrl: '/index',
    menuName: 'Dashborad',
    routeName: 'dashborad',
    icon: 'icon-dashboard',
    parentPath: '',
    children: [
      {
        parentPath: '/index',
        menuUrl: '/index/home',
        menuName: '主控台',
        routeName: 'home',
      },
    ],
  },
  {
    menuUrl: '/list',
    menuName: '表格demo',
    icon: 'icon-list',
    parentPath: '',
    children: [
      {
        parentPath: '/list',
        menuUrl: '/list/table-demo',
        menuName: '自定义表格',
      },
    ],
  },
  {
    menuUrl: '/other',
    menuName: '功能/组件',
    icon: 'icon-apps',
    parentPath: '',
    children: [
      {
        parentPath: '/other/chart',
        menuUrl: '/other/icons',
        menuName: '图标',
      },
      {
        parentPath: '/other',
        menuUrl: 'http://qingqingxuan.gitee.io/work-p-site',
        menuName: '外链',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/qrcode',
        menuName: '二维码',
      },
      {
        parentPath: '/other',
        menuUrl: '/other/flow',
        menuName: '流程图',
      },
    ],
  },
  {
    menuUrl: '/route-params',
    menuName: '路由参数',
    icon: 'icon-file',
    parentPath: '',
    children: [
      {
        parentPath: '/route-params',
        menuUrl: '/route-params/query',
        menuName: 'query参数',
      },
      {
        parentPath: '/route-params',
        menuUrl: '/route-params/params',
        menuName: 'params参数',
      },
    ],
  },
  {
    menuUrl: '/draggable',
    menuName: '拖拽',
    icon: 'icon-drag-arrow',
    parentPath: '',
    children: [
      {
        parentPath: '/draggable',
        menuUrl: '/draggable/card-draggable',
        menuName: '卡片拖拽',
        cacheable: true,
      },
    ],
  },
  {
    menuUrl: '/map',
    menuName: '地图',
    icon: 'icon-location',
    children: [
      {
        parentPath: '/map',
        menuUrl: '/map/gaode',
        menuName: '高德地图',
      },
      {
        parentPath: '/map',
        menuUrl: '/map/baidu',
        menuName: '百度地图',
      },
    ],
  },
]

Mock.mock(RegExp('/getMenuList'), 'post', function () {
  return Mock.mock({ code: 200, totalCount: 1000, data: adminRoutes, msg: '获取菜单列表成功' })
})
