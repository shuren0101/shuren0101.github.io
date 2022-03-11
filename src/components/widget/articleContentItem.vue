<template>
  <div class="ArticleContent">
    <a-spin v-show="loadding">
      <a-icon slot="indicator" type="loading" style="font-size: 24px" spin />
    </a-spin>
    <div v-show="!loadding">
      <div v-html="List.ArticleContent"></div>
      <estimate :Id="article.ArticleId"></estimate>
    </div>
  </div>
</template>

<script>
  import faq from '@/api/faq'
  import estimate from './estimate.vue'
  export default {
    components: {
      estimate
    },
    props: {
      article: Object
    },
    data() {
      return {
        List: '',
        loadding: true
      }
    },
    methods: {
      GetFaqArticle() {
        faq.getFaqArticle({ ArticleId: this.article.ArticleId }).then(res => {
          this.List = res.data
          this.loadding = false
        })
      }
    },
    created() {
      this.GetFaqArticle()
    }
  }
</script>

<style lang="less" scoped>

</style>