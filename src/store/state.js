export default {
    // loding图状态
    isShow: false,
    // shopify app object 用于生成authornation
    shopifyAppObj: null,
  
    // 进度条
    NProgressObj: null,
  
    shop: null,
  
    email: null,
  
    // 店铺域名
    shopDomain: null,
  
    // 货币符号
    currencySymbol: null,
  
    // 套餐权限
    role: null,
  
    // 是否修改了设置
    settingIsChange: false,
  
    // 是否修改了brand
    brandDataIsChange: false,
  
    // 是否修改了个人信息
    accountIsChange: false,
    // 是否修改了文章信息
    articleChange: false,
  
    // 是否放弃修改
    isDiscard: false,
  
    // 当前坐席用户信息
    serviceInfo: {
      userName: '',
      brand: '',
      email: '',
      avatar: '',
      id: null,
      shop: '',
      token: '',
      storeurl: '',
      faqUrl: ''
    },
  
    // 顾客列表
    cusList: [],
  
    // 未读信息
    numberUnread: 0,
  
    // all的长度
    allLength: 0,
    mentionLength: 0,
    assignLength: 0,
    unassignLength: 0,
  
    // 列表是否正在加载
    cusListLoading: true,
  
    // ws第一次建立连接中
    wsLoading: true,
  
    // 记录三级导航的选中状态
    navThreeTopNav: 'open',
  
    // 记录三级导航的标题
    navThreeTitle: 'All',
  
    lastCheckedId: 0,
  
    // 当前操作状态的时间戳
    operationTime: 0,
  
    wsIsnull: true,
  
    // 最新坐席回复时间
    latestReplyTime: 0,
  
    // 当前店铺所有坐席的信息
    serviceInfoList: [],
  
    // FAQ分类信息
    categoryInfo: [],
  
    // 套餐信息
    userPlan: {},
  
    // 主题色
    primaryColor: '',
  
    // 是否展示了套餐弹窗
    isShowPlan: true,
    showHomeTop: false
  
  }
  