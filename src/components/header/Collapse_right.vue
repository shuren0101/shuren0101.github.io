<template>
  <div id="collapse_right" class="collapse_right">
    <popular></popular>
    <order></order>
  </div>
</template>

<script>
  import popular from './Collapse_right/popular.vue'
  import order from './Collapse_right/order.vue'
  export default {
    name: 'collapse_right',
    components: {
      popular,
      order
    },
    data() {
      return {};
    },
    methods: {},
    created() {}
  };
</script>

<style scoped lang='less'>
  .collapse_right {
    background: #FFFFFF;
    box-shadow: 0px 2px 16px 0px rgba(0, 0, 0, 0.08);
    border-radius: 4px;
    color: #292929;
    padding-bottom: 20px;
  }
</style>