import client from '../utils/request'

export default {
  // 获取helpcenter列表
  getHelpCenterList (param = {}) {
    return client.post('get_help_center', JSON.stringify(param))
  },
  // 请求helpcenter page设置
  shopSettings (param = {}) {
    return client.post('shop_settings', JSON.stringify(param))
  },
  // 修改helpcenter page设置
  setShopSettings (param = {}) {
    return client.post('set_shop_settings', JSON.stringify(param))
  }
}

// export function getHelpCenter (param = {}) {
//   return client.post(
//     'get_help_center',
//     JSON.stringify(param)
//   )
// }
// 请求文章详情
export function getFaqArticle (param = {}) {
  return client.post(
    'get_faq_article',
    JSON.stringify(param)
  )
}
