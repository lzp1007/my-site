<template>
  <div class="test-container">
    <Menu/>
  </div>
</template>

<script>
import "@/styles/global.less"
import Menu from "./index.vue"
export default {
  components: {
    Menu
  }
}
</script>

<style scoped lang="less">
  .test-container {
    width: 300px;
    height: 500px;
    background-color: #000;
    margin: 20px auto;
  }
</style>