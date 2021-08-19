<template>
  <div class="test-container">
    <Loading/>
  </div>
</template>

<script>
import Loading from "./index.vue"
export default {
  components: {
    Loading
  }
}
</script>

<style scoped lang="less">
  .test-container {
    width: 300px;
    height: 500px;
    border: 1px solid;
    position: relative;
  }

</style>