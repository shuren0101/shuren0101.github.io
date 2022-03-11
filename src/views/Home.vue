<template>
  <div class="home">
    <div class="content">
      <Editor></Editor>
    </div>
  </div>
</template>

<script>
import Editor from "../components/editor";
export default {
  name: 'Home',
  components: {
    Editor
  }
}
</script>

<style scoped>
  .home .content {
    width: 100%;
  }
</style>