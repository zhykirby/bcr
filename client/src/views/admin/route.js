import Main from './main.vue'
import Set from './setGroup'
import Group from './group'

const routes = [
  {
    path: '/',
    name: 'admin',
    component: Main,
    meta: {
      title: '后台管理首页'
    }
  },
  {
    path: '/set',
    name: 'set',
    component: Set,
    meta: {
      title: '编排队伍'
    }
  },
  {
    path: '/admin/group',
    name: 'admin-group',
    component: Group,
    meta: {
      title: '查看已排刀'
    }
  }
]

export default routes