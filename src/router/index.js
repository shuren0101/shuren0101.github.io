import Vue from 'vue'
import VueRouter from 'vue-router'
import help from '@/api/helpCenter'

Vue.use(VueRouter)

export const routes = [{
    path: '/',
    redirect: '/home',
  },
  {
    path: "/home",
    name: 'home',
    component: view('Home'),
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

let head = document.getElementsByTagName('head'); // 创建head标签
let meta1 = document.createElement('meta'); // 创建meta标签
let meta2 = document.createElement('meta');

meta1.name = "keywords"; // 设置name
meta2.name = "description";

function getMetaContent(index, h, m1, m2) {
  help.shopSettings({ SettingName: 'help-center-page', SearchChild: true }).then(res => {
    const pageData = res.data.Settings
    m1.content = pageData[4].SetValue;
    m2.content = pageData[5].SetValue;
    h[0].appendChild(m1)
    h[0].appendChild(m2)
  })
}

let cIndex = sessionStorage.currentRouteIndex; // 先保存一把
if (cIndex) {
  cIndex = parseInt(cIndex);
  getMetaContent(cIndex, head, meta1, meta2)
} else {
  getMetaContent(1, head, meta1, meta2)
  sessionStorage.currentRouteIndex = 1 // 首次 进入
}

// 路由全局前置守卫
// https://router.vuejs.org/zh/guide/advanced/navigation-guards.html#全局前置守卫
router.beforeEach((to, from, next) => {
  let i = to.meta.index;
  let j = from.meta.index;
  if (i == j) return // 减少请求次数

  if (meta1.name == "keywords" || meta2.name == "description") { // 如果之前有获取过关键字，先清空内容
    meta1.content = '';
    meta2.content = '';
  }
  sessionStorage.setItem('currentRouteIndex', i) // 保存到浏览器中去
  getMetaContent(i, head, meta1, meta2);
  next()
})

router.afterEach(() => {
  window.scrollTo(0, 0)
})

// 防止push到同一个地址的报错
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch(err => err)
}

function view(name) {
  return resolve => require(['@/views/' + name + '.vue'], resolve)
}

export default router