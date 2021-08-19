<template>
  <div class="test-container">
    <Contact/>
  </div>
</template>

<script>
import Contact from "./index.vue"
export default {
  components: {
    Contact
  }
}
</script>

<style lang="less" scoped>
  .test-container {
    width: 250px;
    height: 400px;
    background: #000;
    border: 1px solid;
    margin: 200px auto
  }
</style>