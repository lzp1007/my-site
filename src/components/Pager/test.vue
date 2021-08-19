<template>
  <div class="test-container">
    <Pager :current="current" :total="total" @pageChange="handlePageChange($event)"></Pager>
  </div>
</template>

<script>
import Pager from "./index.vue";
export default {
  components: {
    Pager
  },
  data() {
    return {
      current: 11,
      total: 102
    }
  },
  methods: {
    handlePageChange(newPage){
      this.current = newPage;
      console.log("加载当前页数据")
    }
  }
}
</script>

<style scoped lang="less">

</style>
