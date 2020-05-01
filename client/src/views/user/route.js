/* eslint-disable indent */
// bull shit的vendor，我用import引入就报错了
import Test from './test.vue'
import Add from './add'
import Group from './group'
import About from '../about/about'

const routes = [
    {
        path: '/',
        name: 'test',
        component: Test,
        meta: {
            title: '15卡战力页'
        }
    },
    {
        path: '/add/:id',
        name: 'add',
        component: Add,
        meta: {
            title: '登记战力'
        }
    },
    {
        path: '/group',
        name: 'group',
        component: Group,
        meta: {
            title: '查看纱雾给你安排的甜心三刀'
        }
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: '使用说明'
      }
    }
]

export default routes