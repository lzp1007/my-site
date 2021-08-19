<template>
  <ul class="list-container">
    <li v-for="item in list" :key="item.name">
      <span @click="handleClick(item)" :class="{ active: item.isSelect }">
        {{ item.name }}
      </span>
      <span
        v-if="item.aside"
        class="aside"
        @click="handleClick(item)"
        :class="{ active: item.isSelect }"
      >
        {{ item.aside }}
      </span>
      <SideList :list="item.children" @select="handleClick" />
    </li>
  </ul>
</template>

<script>
export default {
  name: "SideList",
  props: {
    list: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    handleClick(item) {
      this.$emit("select", item);
    },
  },
};
</script>

<style lang="less" scoped>
@import "~@/styles/var.less";
.list-container {
  list-style: none;
  padding: 0 10px;
  user-select:none;

  li {
    min-height: 40px;
    line-height: 40px;
    span {
      cursor: pointer;
    }
    .active {
      color: @warn;
      font-weight: bold;
    }
  }
}

.aside {
  font-size: 12px;
  margin-left: 1em;
  color: @gray;
}
</style>