import '@babel/polyfill'
import Vue from 'vue'
import './config'
import router from './router'
import App from './app.vue'
import vueStorage from './utils/storage'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Axios from 'axios'
import {get, post} from './utils/axios/axios'

Vue.use(ElementUI)
Vue.config.productionTip = false
// Axios拦截器，后期封装到utlis里
Vue.prototype.$axios = Axios
Vue.prototype.$http = {
  get,
  post
}
/**
 * @param {Object} Vue Vue
 * @param {router} [router=undefined] VueRouter 实例化对象
 * @param [] 路由白名单
 * @param (storage) => {} 回调函数
 */
const store = vueStorage(Vue, router, [], (storage, to, from) => {
  return new Promise((resolve) => {
    // const { whether } = storage.getItem('userObject', false) || JSON.parse(localStorage.getItem('userObject')) || {}
    // if (!whether && to.path !== '/login') {
    //   global.location.href = '/login'
    // } else {
    //   storage.setItem('userObject', JSON.parse(localStorage.getItem('userObject')), false)
    resolve(storage, to, from)
    // }
  })
})

/*eslint-disable*/
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
