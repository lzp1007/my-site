<template>
  <div class="pager-container" v-if="totalPage > 1">
    <a @click="handleClick(1)" :class="{disabled: current === 1 }">|&lt;&lt;</a>
    <a @click="handleClick(current - 1)" :class="{disabled: current === 1 }">&lt;&lt;</a>
    <a 
      @click="handleClick(n)"
      :class="{active: n === current}"
      v-for="(n, index) in numbers" 
      :key="index">
      {{n}}
    </a>
    <a @click="handleClick(current + 1)" :class="{disabled: current === totalPage }">&gt;&gt;</a>
    <a @click="handleClick(totalPage)" :class="{disabled: current === totalPage }">&gt;&gt;|</a>
  </div>
</template>

<script>
export default {
  props: {
    //总数据量
    total: {
      type: Number,
      default: 0
    },
    //每页数据量
    limit: {
      type: Number,
      default: 10,
    },
    //当前页
    current: {
      type: Number,
      default: 1,
    },
    //可见页码数
    visible: {
      type: Number,
      default: 10
    }
  },
  computed: {
    //总页数
    totalPage() {
      return Math.ceil(this.total / this.limit);
    },
    //最小可见页码
    visibleMin() {
      let min = this.current - Math.ceil(this.visible / 2);;
      if(min < 1) {
        min = 1;
      }
      return min;
    },
    //最大可见页码
    visibleMax() {
      let max = this.visibleMin + this.visible - 1;
      if(max > this.totalPage) {
        max = this.totalPage;
      }
      return max;
    },
    //页码数组
    numbers() {
      let nums = [];
      for(let i = this.visibleMin; i <= this.visibleMax; i++) {
        nums.push(i);
      }
      return nums;
    }
  },
  methods: {
    handleClick(newPage) {
      if(newPage < 1) {
        newPage = 1;
      }
      if(newPage > this.totalPage) {
        newPage = this.totalPage;
      }

      if(newPage === this.current) {
        return;
      }
      this.$emit("pageChange", newPage)
    }
  }
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
  .pager-container {
    display: flex;
    justify-content: center;
    margin: 20px 0;
    a {
      margin: 0 6px;
      cursor: pointer;
      color: @primary;
      &.disabled {
        cursor: not-allowed;
        color: @lightWords;
        font-weight: bold;
      }
      &.active {
        color: @words;
        font-weight: bold;
      }
    }
  }
</style>