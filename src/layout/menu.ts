import {Home, TestTemplate} from 'src/router/alias';

export const Menu = [
  {
    title: '1.学习API',
    id: 1,
    icon: 'AppleOutlined',
    children: [
      {
        title: '1.1第一组',
        id: 11,
        children: [
          {...TestTemplate, title: '测试Template', id: 111},
          {title: '测试ref', path: '/testRef', id: 112},
          {title: '测试批量', path: '/testMultiple', id: 113},
          {...Home, title: 'home测试页', id: 114},
        ]
      }
    ]
  },
  {
    title: '2.测试组件',
    id: 2,
    children: [
      {
        title: '2.1第一组',
        id: 21,
        children: [
          {title: '测试teble', path: '/testRef', id: 211},
          {title: '测试select', path: '/testMultiple', id: 212}
        ]
      }
    ]
  }
]