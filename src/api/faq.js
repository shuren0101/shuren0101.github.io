import client from '../utils/request'

export default {
  // 获取FAQ列表
  getFaqList (param = {}) {
    return client.post('get_faq_list', JSON.stringify(param))
  },
  // 获取单个文章
  getFaqArticle (param = {}) {
    return client.post('get_faq_article', JSON.stringify(param))
  },
  // 获取热门问题
  getPopularFaq (param = {}) {
    return client.post('get_popular_faq', JSON.stringify(param))
  },
  // 模糊搜索文章title,内容
  getSearchFaq (param = {}) {
    return client.post('search_faq', JSON.stringify(param))
  },
  // 文章评价
  updateArticleEvaluation (param = {}) {
    return client.post('article_evaluation', JSON.stringify(param))
  },
  // 删除文章
  deleteArticle (param = {}) {
    return client.post('delete_article', JSON.stringify(param))
  },
  // 删除文章分类
  deleteCategory (param = {}) {
    return client.post('delete_category', JSON.stringify(param))
  },
  // 是否热门
  updatePopular (param = {}) {
    return client.post('update_popular', JSON.stringify(param))
  },
  // 是否发行
  updatePublish (param = {}) {
    return client.post('update_publish', JSON.stringify(param))
  },
  // 更新文章分类名
  updateCategory (param = {}) {
    return client.post('update_category', JSON.stringify(param))
  },
  // 更新排序
  updateSort (param = {}) {
    return client.post('update_sort', JSON.stringify(param))
  },
  // 新建分类
  addCategory (param = {}) {
    return client.post('add_category', JSON.stringify(param))
  },
  // 新建文章
  addArticle (param = {}) {
    return client.post('add_article', JSON.stringify(param))
  },
  // 更新文章
  updateArticle (param = {}) {
    return client.post('update_article', JSON.stringify(param))
  },
  // 新增标记note
  addSessionNote (param = {}) {
    param.no_domain_param = 1
    return client.post('add_session_note', JSON.stringify(param))
  },
  // 请求note列表
  getSessionNote (param = {}) {
    param.no_domain_param = 1
    return client.post('get_session_note', JSON.stringify(param))
  },
  // 删除note
  deleteSessionNote (param = {}) {
    param.no_domain_param = 1
    return client.post('delete_session_note', JSON.stringify(param))
  },
  // 修改note
  editSessionNote (param = {}) {
    param.no_domain_param = 1
    return client.post('edit_session_note', JSON.stringify(param))
  }
}
