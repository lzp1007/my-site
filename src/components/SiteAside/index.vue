<template>
  <div class="site-aside-container">
    <template v-if="data">
      <Avatar :url="data.avatar"/>
      <h1 class="title">{{data.siteTitle}}</h1>
    </template>
    <Menu/>
    <Contact v-if="data"/>
    <footer>
       <p v-if="data">备案号：{{data.icp}}</p>
    </footer>
  </div>
</template>

<script>
import { mapState } from "vuex"
import Avatar from "@/components/Avatar"
import Menu from "./Menu"
import Contact from "./Contact"
export default {
  components: {
    Avatar,
    Menu,
    Contact
  },
  computed: {
    ...mapState("setting", ["data"])
  }
}
</script>

<style scoped lang="less">
  @import "~@/styles/var.less";
  .site-aside-container {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: @dark;
    padding: 20px 0;
    box-sizing: border-box;
    overflow-x: hidden;
    overflow-y: auto;
    .avatar-container {
      margin: 0 auto;
    }

    .title {
      font-size: 1.2em;
      color: #fff;
      text-align: center;
    }

    footer {
      width: 100%;
      position: absolute;
      bottom: 10px;
      font-size: 12px;
      color: darken(@gray, 20%);
      text-align: center;
    }
  }
</style>