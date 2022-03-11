import client from '../utils/request'

export default {
  // 获取设置信息
  getSetting (param = {}) {
    param.no_token_header = 1
    param.no_domain_param = 1
    return client.post('get_setting', JSON.stringify(param))
  },
  // 修改设置
  updateSetting (param = {}) {
    param.no_token_header = 1
    param.no_domain_param = 1
    return client.post('update_setting ', JSON.stringify(param))
  },
  // 获取brand设置信息
  getBrand (param = {}) {
    param.no_token_header = 1
    param.no_domain_param = 1
    return client.post('get_brand', JSON.stringify(param))
  },
  // 修改brand
  updateBrand (param = {}) {
    return client.post('update_brand', JSON.stringify(param))
  }
}
