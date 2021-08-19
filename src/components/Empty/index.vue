<template>
  <div class="empty-container">
    <Icon type="empty" size="150"></Icon>
    <p>{{text}}</p>
  </div>
</template>

<script>
import Icon from "@/components/Icon"
export default {  
  props: {
    text: {
      type: String,
      default: "无数据"
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="less" scoped>
  @import "~@/styles/var.less";
  @import "~@/styles/mixin.less";
  .empty-container {
    color: @gray;
    text-align: center;
    font-weight: bold;
    .self-center();   
  }

  .icon-container {
    font-size: 72px;
  }
</style>