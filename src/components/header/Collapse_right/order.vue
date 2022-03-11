<template>
  <div class="order" v-show="!isPopularShow">
    <div v-for="(item,i) in CategoryList" :key="i">
      <div :id="item.Category[0].CategoryName" class="card_title">{{item.Category[0].CategoryName}}</div>
      <div class="card_content" v-for="(item1,i) in item.Category[0].Article" :key="i">
        <a-collapse v-model="activeKey" :bordered="false" expand-icon-position="right" accordion>
          <a-collapse-panel :key="item1.ArticleId" :header="item1.ArticleTitle" :style="customStyle">
            <articleContentItem :article='item1'></articleContentItem>
          </a-collapse-panel>
        </a-collapse>
      </div>
    </div>
  </div>
</template>

<script>
  import hc from '@/api/helpCenter'
  import articleContentItem from '../../widget/articleContentItem.vue'

  export default {
    name: 'order',
    components: {
      articleContentItem
    },
    data() {
      return {
        isPopularShow: false,
        activeKey: [],
        customStyle: 'border: none;overflow: hidden',
        CategoryList: []
      };
    },
    methods: {
      // 请求
      // 将获取的数据进行排序处理
      compare(key) {
        return function(a, b) {
          const value1 = a.Category[0][key]
          const value2 = b.Category[0][key]
          return value2 - value1
        }
      },
      compare1(key) {
        return function(a, b) {
          const value1 = a[key]
          const value2 = b[key]
          return value2 - value1
        }
      },
      // 请求helpcenter列表
      getHelpCenter() {
        hc.getHelpCenterList().then(res => {
          const faqList = res.data.List
          faqList.forEach(item => {
            item.Category[0].Article.sort(this.compare1('ArticleSort'))
          })
          this.CategoryList = faqList.sort(this.compare('CategorySort'))
          this.$bus.$emit('GetTitleList', this.CategoryList)
        })
      },
    },
    mounted() {
      this.$bus.$on('IsPopularShow', data => {
        this.isPopularShow = data
        this.getHelpCenter()
      })
      this.$bus.$on('anchorClick', data => {
        this.activeKey = data != '-1' ? data : []
        this.isPopularShow = false
        // this.isPopularShow = data != '-1' ? false : true
      })
    },
    beforeDestroy() {
      this.$bus.$off('IsPopularShow')
      this.$bus.$off('anchorClick')
    }
  };
</script>

<style scoped lang='less'>
  .card_title {
    font-size: 22px;
    font-family: Inter-Regular_Bold, Inter;
    font-weight: 600;
    line-height: 28px;
    border-bottom: 1px solid #e7e7e7;
    padding-top: 20px;
    padding-bottom: 12px;
    margin: 0px 26px;
  }

  .card_content {
    font-size: 14px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    line-height: 20px;
    padding-top: 12px;
  }

  ::v-deep .ant-collapse-header {
    font-size: 14px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #292929;
    line-height: 20px;

    padding: 8px 26px !important;
  }

  ::v-deep .ant-collapse-header:hover,
  ::v-deep .ant-collapse-header:focus {
    background: var(--primaryColorRgba);
  }

  ::v-deep .ant-collapse-icon-position-right>.ant-collapse-item>.ant-collapse-header .ant-collapse-arrow {
    right: 26px;
  }

  ::v-deep .ant-collapse-content-box {
    background: #F8F8F8;
    padding: 12px 26px;
    padding-top: 12px !important;
  }
</style>