<template>
  <div id="Popular" v-show="isPopularShow">
    <div id="card_title">Popular questions</div>
    <div class="card_content" v-for="(item,i) in popularList" :key="i">
      <a-collapse v-model="activeKey" :bordered="false" expand-icon-position="right" accordion>
        <a-collapse-panel :key="item.ArticleId" :header="item.ArticleTitle" :style="customStyle">
          <articleContentItem :article='item'></articleContentItem>
        </a-collapse-panel>
      </a-collapse>
    </div>
  </div>
</template>

<script>
  import faq from '@/api/faq'
  import articleContentItem from '../../widget/articleContentItem.vue'

  export default {
    name: 'popular',
    components: {
      articleContentItem,
    },
    data() {
      return {
        isPopularShow: false,
        activeKey: [],
        customStyle: 'border: none;overflow: hidden',
        popularList: ''
      };
    },
    methods: {
      getPopularFaq() {
        faq.getPopularFaq().then((res) => {
          if (res.data.Code === 200) {
            this.isPopularShow = true
            this.popularList = res.data.List
            this.activeKey = this.popularList[0].ArticleId
          } else if (res.data.Code === 400) {
            this.isPopularShow = false
          }
          this.$bus.$emit('IsPopularShow', this.isPopularShow)
        })
      }
    },
    created() {
      this.getPopularFaq()
    },
    mounted() {
      this.$bus.$on('anchorClick', data => {
        this.activeKey = data == '-1' ? this.popularList[0].ArticleId : []
      })
    },
    beforeDestroy() {
      this.$bus.$off('anchorClick')
    }
  };
</script>

<style scoped lang='less'>
  #card_title {
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