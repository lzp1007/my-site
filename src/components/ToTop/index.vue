<template>
  <div v-show="show" class="to-top-container" @click="toTop">
    Top
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    handleScroll(dom) {
      this.show = dom.scrollTop >= 500;
    },
    toTop() {
      this.$bus.$emit("setMainScroll", 0);
    },
    hideToTop() {
      this.show = false;
    }
  },
  created() {
    this.$bus.$on("mainScroll", this.handleScroll);
    this.$bus.$on("hideToTop", this.hideToTop);
  },
  beforeDestroy() {
    this.$bus.$off("mainScroll", this.handleScroll);
    this.$bus.$off("hideToTop", this.hideToTop);
  }
}
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .to-top-container {
    width: 40px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    background-color: @primary;
    border-radius: 50%;
    position: fixed;
    right: 30px;
    cursor: pointer;
    bottom: 20px;
  }
</style>