// import empty from './app.vue'
import Login from './views/login/login'
import Main from './views/main/main'
import User from './views/user/route'
import Admin from './views/admin/route'
import Back from './views/back/main'

const routes = [
  {
    path: '/',
    component: Login,
    name: 'login',
    meta: {
      title: '登录页'
    }
  },
  {
    path: '/main',
    name: 'main',
    component: Main,
    children: User,
    meata: {
      requireAuth: true
    }
  },
  {
    path: '/admin',
    name: 'admin',
    component: Back,
    children: Admin,
    meta: {
      requireAuth: true
    }
  }
]

export default routes
