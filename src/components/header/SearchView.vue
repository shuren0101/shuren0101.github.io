<template>
  <div class="searchView">
    <div v-show="List.Counts > 0">
      <div class="title">{{List.Counts}} Search Results</div>
      <div class="list">
        <div class="card_content" v-for="(item,i) in List.ArticleList" :key="i">
          <a-collapse v-model="activeKey" :bordered="false" expand-icon-position="right" accordion>
            <a-collapse-panel :key="item.ArticleId" :header="item.ArticleTitle" :style="customStyle">
              <articleContentItem :article='item'></articleContentItem>
            </a-collapse-panel>
          </a-collapse>
        </div>
      </div>
    </div>
    <div class="ViewNull" v-show="List.Counts == 0 || List == 0">
      <p>Sorry, no content related to "{{SearchText}}" was found</p>
      <p>Please try to change other keywords or get help in the following ways</p>
      <img src='@/assets/svg/record.svg'>
      <!-- <div class="btn">
        <div>
          <svg-icon name='message' width='16' height='16'></svg-icon>
          <span>Email us</span>
        </div>
        <div @click="OpenChat">
          <svg-icon name='send' width='16' height='16'></svg-icon>
          <span>Chat with us</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import articleContentItem from '../widget/articleContentItem.vue'

  export default {
    name: 'searchView',
    props: {
      List: Object,
      SearchText: String,
      activeKey: Array
    },
    components: {
      articleContentItem
    },
    data() {
      return {
        customStyle: 'border: none;overflow: hidden',
        // activeKey: []
      }
    },
    methods: {
      OpenChat() {
        if (typeof window.launchWillDeskChat === 'function') window.launchWillDeskChat()
      }
    },
  }
</script>

<style scoped lang='less'>
  .searchView {
    width: 100%;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #292929;

    .ViewNull {
      margin-top: 94px;
      text-align: center;

      p {
        font-size: 16px;
        line-height: 22px;
      }

      p:first-child {
        margin-bottom: 8px;
      }

      p:nth-child(2) {
        font-size: 14px;
        color: #727272;
        line-height: 20px;
      }

      img {
        margin-top: 46px;
        margin-bottom: 120px;
      }

      .btn {
        width: 318px;
        height: 36px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin: 0 auto;

        div {
          padding: 12px 26px;
          border-radius: 4px;
          line-height: 14px;
          text-align: center;
          cursor: pointer;
        }

        div:first-child {
          border: 1px solid #585858;
        }

        div:last-child {
          background: #3B59FE;
          color: #fff;
        }
      }
    }

    .title {
      font-size: 22px;
      line-height: 28px;
      text-align: center;
      margin: 20px auto 46px auto;
    }

    .list {
      border-top: 1px solid #E7E7E7;
    }

    .card_content {
      font-size: 14px;
      font-family: Inter-Regular, Inter;
      font-weight: 400;
      line-height: 20px;
      padding-top: 12px;
    }
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
    background: rgba(59, 89, 254, .08);
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