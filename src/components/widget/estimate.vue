<template>
  <div class="estimate">
    <div class="box">
      <p>Did this answer your questions?</p>
      <div class="btn">
        <div v-for="(item,i) in List" :key="i" :style="{color:item.isActive ? '#3B59FE':'#727272'}">
          <img :src="!item.isActive ? item.url : item.url_active" :style="item.style" alt="" @click="clickComment(item,Id)">
          {{item.content}}
        </div>
      </div>
      <div v-show="isActive" class="remark">
        <p>{{text}}</p>
        <div v-show="isActive === 3">
          <div class="Chat_btn" @click="OpenChat">
            <img src="@/assets/svg/send.svg" alt="">
            Chat with us
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import faq from '@/api/faq'
  export default {
    name: 'estimate',
    props: {
      Id: String
    },
    data() {
      return {
        List: {
          0: {
            content: 'YES',
            value: 'good',
            url: require('@/assets/svg/praise.svg'),
            url_active: require('@/assets/svg/praise-active.svg'),
            style: 'width:18px;height:20px',
            isActive: 0
          },
          1: {
            content: 'NO',
            value: 'bad',
            url: require('@/assets/svg/praise.svg'),
            url_active: require('@/assets/svg/praise-active.svg'),
            style: 'width:18px;height:20px;transform: rotateX(180deg);',
            isActive: 0
          }
        },
        isActive: 0,
        text: ''
      }
    },
    methods: {
      clickComment(item, Id) {
        if (!this.isActive) {
          this.isActive = 1
          if (!item.isActive) {
            item.isActive = 1
            if (item.content == 'YES') {
              this.isActive = 1
              this.text = 'Thank you for your feedback'
            } else {
              this.isActive = 3
              this.text = 'We are here to help'
            }
          }
        }
        this.updateEvaluation(Id, item.value)
      },
      updateEvaluation(Id, val) {
        faq.updateArticleEvaluation({ ArticleId: Id, Evaluation: val })
      },
      OpenChat() {
        if (typeof window.launchWillDeskChat === 'function') window.launchWillDeskChat()
      }
    }
  }
</script>

<style scoped lang='less'>
  .estimate {
    width: 100%;
    text-align: center;
    margin-top: 46px;
  }

  .box {
    font-size: 14px;
    font-family: Inter-Regular, Inter;
    font-weight: 400;
    color: #727272;
    line-height: 20px;
    margin: 0 auto;

    p {
      margin-top: 16px;
    }
  }

  .comment {
    display: flex;
    flex-direction: column;
  }

  .btn {
    width: 147px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }

  .remark {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a {
      color: #3B59FE;
    }
  }

  .Chat_btn {
    width: 300px;
    height: 36px;
    border-radius: 4px;
    background: #3B59FE;
    color: #fff;
    line-height: 36px;

    img {
      margin-right: 8px;
    }
  }
</style>