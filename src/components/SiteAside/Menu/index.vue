<template>
  <nav class="menu-container">
    <RouterLink
      :exact="item.exact"
      :to="{name: item.name}"
      v-for="item in items"
      :key="item.link"
      active-class="active"
      exact-active-class=""
    >
      <div class="icon">
        <Icon :type="item.iconType" />
      </div>
      <span>{{ item.title }}</span>
    </RouterLink>
  </nav>
</template>

<script>
import Icon from "@/components/Icon";
export default {
  components: {
    Icon,
  },
  methods: {
  },
  data() {
    return {
      items: [
        { name: "Home", iconType: "home", title: "首页", exact: true},
        { name: "Blog", iconType: "blog", title: "文章", exact: false},
        { name: "About", iconType: "about", title: "关于我", exact: true},
        { name: "Project", iconType: "code", title: "项目&效果", exact: true},
        { name: "Message", iconType: "chat", title: "留言板", exact: true},
      ],
    };
  },
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.menu-container {
  color: @gray;
  margin: 25px 0;
  a {
    height: 32px;
    padding: 0 50px;
    display: flex;
    align-items: center;

    &.active {
      background: darken(@words, 3%);
    }

    .icon {
      width: 28px;
    }
    &:hover {
      color: #fff;
    }
  }
}
</style>