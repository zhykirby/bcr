// 第一次封装版本
import axios from 'axios'
import {Message} from 'element-ui'
import {showLoading, hideLoading} from '../loading/loading'
import Cookies from 'js-cookie'

axios.interceptors.request.use(config => {
  showLoading()
  let token = Cookies.get('token')
  if (config.method === 'post') {
        // 如果是post请求 请求体自动加上token
    if (token) {
      config.data.token = token
    }
        // else {
        //   console.log('token失效')
        // }
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  } else if (config.method === 'get') { // 如果是get请求 url中拼接上
    config.params.token = token
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  }
  return config
}, err => Promise.reject(err))

axios.interceptors.response.use((res) => {
    // todo:判断有没有过期
  hideLoading()
  return res
}, (err) => {
  hideLoading()
  Message.error(err.response.data)
  return Promise.reject(err)
})

const baseURL = 'http://localhost:3000/users'

const $http = axios.create({
  baseURL: baseURL
})

export const get = (url, params) => {
  params = params || {}
  return new Promise((resolve, reject) => {
    $http.get(url, {
      params
    }).then(res => {
      if (res.data.code === 200) {
        resolve(res.data)
      } else {
        Message({message: '网络异常', type: 'warning'})
        this.$router.push('/')
      }
    }).catch(err => {
      // 没想好，以后再封装
      reject(err)
    })
  })
}

export const post = (url, params) => {
  params = params || {}
  // eslint-disable-next-line no-console
  // console.log(params)
  return new Promise((resolve, reject) => {
    $http.post(url, params).then(res => {
      if (res.data.code === 100 || res.data.code === 200) {
        resolve(res.data)
      } else {
        // eslint-disable-next-line no-console
        // console.log(res)
        Message.error('出错啦……再试一次吧？')
      }
    }).catch(err => {
      reject(err)
    })
  })
}