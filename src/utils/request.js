import axios from 'axios'

// import { getCookie } from './publicMethods'
// vuex中的state
import store from '@/store/state.js'

// 接口地址
const URL = process.env.VUE_APP_API_URL

const client = axios.create({
  baseURL: URL
})

// 对请求前的拦截器
client.interceptors.request.use(
  config => {
    const params = typeof config.data == 'object' ? config.data : JSON.parse(config.data)
    // const params = JSON.parse(config.data)
    // 添加公共的shop字段
    if (params.no_domain_param != 1) {
      // 本地测试店铺
      if (window.location.href.indexOf('localhost') != -1 || window.location.href.indexOf('192.168.1') != -1) {
        params.Domain = 'helpdesktest007.myshopify.com'
      } else {
        // shopify店铺
        params.Domain = store.shop
      }
      config.data = params
    }
    if (params.no_token_header != 1) {
      config.headers.authorization = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkNKVCIsInJvbGUiOiIiLCJwbGFuIjoiIn0.jwzFuupxrBvGLg1uqMWVWaJIrXQ8gyficOKSjc9wsAs'
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

// 响应拦截
client.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error)
  }
)

export default client