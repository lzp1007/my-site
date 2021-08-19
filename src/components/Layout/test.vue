<template>
  <div class="test-container">
    <Layout>
      <template #left>
        <div class="left">
          left
        </div>
      </template> 
      <template>
        <div class="main">
          main
        </div>
      </template> 
      <template #right>
        <div class="right">
          right
        </div>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "./index.vue"
export default {
  components: {
    Layout
  }
}
</script>

<style scoped lang="less">
  .test-container {
    width: 1000px;
    height: 600px;
    border: 1px solid;
    margin: 0 auto;

    .left {
      width: 150px;
      height: 100%;
      background-color: lightblue;
    }

    .main { 
      width: 100%;
      height: 100%;
      background-color: lightcoral;
    }

    .right {
      height: 100%;
      width: 200px;
      background-color:lightgreen;
    }
  }
</style>