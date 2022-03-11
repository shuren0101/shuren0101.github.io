<template>
  <div class="box">
    <div class="banner">
      <div class="carousel">
        <img :src="imgSrc" alt="">
      </div>
      <div class="search">
        <p>{{themeTitle}}</p>
        <a-input-search v-model="text" placeholder="Search for support" @search="onSearch" @change="onChange" :loading='searchLoading' />
      </div>
    </div>
    <div class="body">
      <div class="left" v-show="!searchviewShow">
        <collapseLeft></collapseLeft>
      </div>
      <div class="right" v-show="!searchviewShow">
        <collapseRight></collapseRight>
      </div>
      <div class="searchView" v-show="searchviewShow">
        <searchview ref="searchViewList" :List='List' :SearchText='text' :activeKey='searchActiveKey'></searchview>
      </div>
    </div>
  </div>
</template>

<script>
  import faq from '@/api/faq'
  import help from '@/api/helpCenter'
  import setting from '@/api/setting'

  import collapseLeft from './header/Collapse_left.vue'
  import collapseRight from './header/Collapse_right.vue'
  import searchview from './header/SearchView.vue'

  import { colorRgba } from '@/utils/rgba.js'
  export default {
    name: 'welcomeHelpCenter',
    props: {},
    components: {
      collapseLeft,
      collapseRight,
      searchview
    },
    data() {
      return {
        text: '',
        themeTitle: 'Welcome to Help Center',
        imgSrc: require('@/assets/img/banner/banner3.png'),
        customStyle: 'border: none;overflow: hidden',
        searchLoading: false,
        searchviewShow: false,
        List: {},
        searchActiveKey: [],
        primaryColor: '#3B59FE',
        pageData: ''
      }
    },
    methods: {
      onChange(e) {
        this.text = e.target.value
      },
      onSearch() {
        this.searchLoading = true
        if (this.text.trim().length > 0) {
          this.SearchView(this.text.trim())
          this.searchLoading = false
        } else {
          this.searchLoading = false
        }
      },
      SearchView(val) {
        faq.getSearchFaq({ Search: val }).then(res => {
          if (res.data.Code === 200) {
            if (res.data.ArticleList.length > 0) {
              this.List = res.data
              this.searchviewShow = true
              this.searchActiveKey = []
              this.searchActiveKey.push(this.List.ArticleList[0].ArticleId)
            } else {
              this.List = res.data
              this.searchviewShow = true
              this.searchActiveKey = []
            }
          } else {
            console.log('查询失败')
          }
        })
      },
      PageView() {
        help.shopSettings({ SettingName: 'help-center-page', SearchChild: true }).then(res => {
          this.pageData = res.data.Settings
          this.themeTitle = this.pageData[1].SetValue
          if (this.pageData[3].SetValue.trim().length > 0) {
            this.imgSrc = this.pageData[3].SetValue
          }
        })
      }
    },
    watch: {
      text() {
        this.searchviewShow = false
      }
    },
    created() {
      this.PageView()
    },
    mounted() {
      let domain = this.$store.state.shop || this.$route.params.domain
      if (window.location.href.indexOf('localhost') != -1 || window.location.href.indexOf('192.168.1') != -1) {
        domain = 'helpdesktest007.myshopify.com'
      }

      // 查询设置的数据
      setting.getSetting({ Domain: domain }).then(res => {
        const Appearance = JSON.parse(res.data.shopSetting[0].Appearance)
        this.primaryColor = Appearance.PrimaryColor
        document.getElementsByTagName('body')[0].style.setProperty('--primaryColor', this.primaryColor)
        document.getElementsByTagName('body')[0].style.setProperty('--primaryColorRgba', colorRgba(this.primaryColor))
      })
    }
  }
</script>

<style scoped lang='less'>
  .box {
    width: 100%;
  }

  .banner {
    width: 100%;
    margin: 0 auto;

    .carousel {
      width: 100%;
      height: 100%;
      margin: 0 auto;

      img {
        width: 100%;
        height: 100%;
        max-height: 320px;
        margin: 0 auto;
        display: block;
      }
    }
  }

  .search {
    position: absolute;
    top: 80px;
    left: 50%;
    transform: translate(-50%, -0%);
    width: 588px;
    height: 140px;
    text-align: center;

    p {
      font-size: 32px;
      font-family: Inter-Regular_Bold, Inter;
      font-weight: 500;
      color: #FFFFFF;
      line-height: 38px;
      text-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
      margin-bottom: 66px;
    }
  }

  .body {
    width: 63.3%;
    margin: 26px auto 46px auto;
    display: flex;
    justify-content: space-between;

    .left {
      width: 298px;
    }

    .right {
      width: 73.6%;
    }

    .searchView {
      width: 100%;
    }
  }

  ::v-deep .ant-input {
    height: 36px;
    padding: 11px 16px;
    font-size: 14px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #292929;
  }

  ::v-deep .ant-input::placeholder {
    color: #B4B4B4;
  }

  ::v-deep .anticon svg {
    width: 16px;
    height: 16px;
  }

  ::v-deep .ant-collapse {
    background: #fff;
  }

  ::v-deep .blockquotebox {
    display: block;
    border-left: 8px solid #d0e5f2;
    padding: 5px 10px;
    margin: 10px 0;
    line-height: 1.4;
    font-size: 100%;
    background-color: #f1f1f1;
  }

  @media screen and (max-width: 1500px) {
    .body .right {
      width: 100%;
    }
  }

  @media screen and (max-width: 1200px) {
    .left {
      display: none;
    }

    .body {
      width: 70%;
    }
  }

  @media screen and (max-width: 1000px) {
    .body {
      width: 80%;
    }
  }

  @media screen and (max-width: 800px) {
    .body {
      width: 100%;
    }
  }


  @media screen and (max-width: 588px) {
    .search {
      width: 100%;
    }
  }
</style>