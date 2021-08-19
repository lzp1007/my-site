<template>
  <div class="test-container">
    <Empty/>
  </div>
</template>

<script>
import Empty from "./index.vue"
export default {
  components: {
    Empty
  }
}
</script>

<style scoped lang="less">
  .test-container {
    width: 500px;
    height: 500px;
    position: relative;
    border: 1px solid #ccc;
  }
</style>