<template>
  <div class="collapse_left">
    <!-- <a-anchor :target-offset="targetOffset"> -->
    <a-anchor>
      <div @click="anchorClick('-1')">
        <a-anchor-link href="#Popular" title="Popular questions" v-show="isPopularShow" />
      </div>
      <div v-for="(item,i) in titleList" :key="i" @click="anchorClick(item)">
        <a-anchor-link :href="'#'+item.Category[0].CategoryName" :title="item.Category[0].CategoryName" />
      </div>
    </a-anchor>
  </div>
</template>

<script>
  export default {
    name: 'collapse_left',
    data() {
      return {
        isPopularShow: false,
        customStyle: 'border: none;overflow: hidden',
        titleList: [],
        targetOffset: undefined
      };
    },
    methods: {
      anchorClick(item) {
        if (item === '-1') {
          this.$bus.$emit('anchorClick', item)
        } else {
          this.$bus.$emit('anchorClick', item.Category[0].Article[0].ArticleId)
        }
      }
    },
    mounted() {
      // console.log(document.getElementById('collapse_right').offsetTop);
      // this.targetOffset = window.innerHeight / 2;
      // this.targetOffset = window.innerHeight-document.getElementById('collapse_right').offsetTop;

      this.$bus.$on('IsPopularShow', data => {
        this.isPopularShow = data
      });
      this.$bus.$on('GetTitleList', data => {
        this.titleList = data
      })
    },
    beforeDestroy() {
      this.$bus.$off('IsPopularShow')
      this.$bus.$off('GetTitleList')
    }
  }
</script>

<style scoped lang='less'>
  ::v-deep .ant-anchor-ink {
    display: none;
  }

  ::v-deep .ant-anchor-link {
    font-size: 16px;
    font-family: Inter-Regular_Bold, Inter;
    font-weight: 600;
    line-height: 22px;

    border-radius: 4px;
    padding: 7px 16px;
    padding-left: 16px;
  }

  ::v-deep .ant-anchor-link,
  ::v-deep .ant-anchor-link-title,
  ::v-deep .ant-anchor-link-title-active {
    color: #292929;
  }

  ::v-deep .ant-anchor-link-active,
  ::v-deep .ant-anchor-link:hover,
  ::v-deep .ant-anchor-link:focus {
    background: var(--primaryColor);

    a {
      color: #fff;
    }
  }

  ::v-deep .ant-collapse>.ant-collapse-item>.ant-collapse-header {
    font-size: 16px;
    font-family: Inter-Regular_Bold, Inter;
    font-weight: 600;
    color: #292929;
    line-height: 22px;

    border-radius: 4px;
    padding: 7px 16px;
    padding-left: 16px;
  }

  ::v-deep .ant-collapse-header:hover,
  ::v-deep .ant-collapse-header:focus {
    background: var(--primaryColor);
    color: #fff !important;
  }

  ::v-deep .ant-collapse-borderless>.ant-collapse-item>.ant-collapse-content {
    height: 0px;
  }

  ::v-deep .ant-collapse-content-box {
    font-size: 16px;
    font-family: Inter-Regular_Bold, Inter;
    font-weight: 600;
    color: #292929;
    line-height: 22px;

    padding: 13px 26px;
    padding-top: 13px !important;
    padding-left: 16px;
  }
</style>