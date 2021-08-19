<template>
    <Layout>
      <div class="main-container" v-loading="isLoading"  ref="mainContainer">
          <BlogDetail :blog="data" v-if="data"/>
          <BlogComment v-if="!isLoading"/>
      </div>
      <template #right>
        <div class="right-container" v-loading="isLoading">
          <BlogToc :toc="data.toc" v-if="data"/>
        </div>
      </template>
    </Layout>
</template>

<script>
import titleController from "@/utils/titleController"
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import { getBlog } from "@/api/blog";
import BlogDetail from "./components/BlogDetail"
import BlogToc from "./components/BlogToc"
import Layout from "@/components/Layout"
import BlogComment from "./components/BlogComment.vue"
export default {
  mixins:[fetchData(null), mainScroll("mainContainer")],
  components: {
    Layout,
    BlogDetail,
    BlogComment,
    BlogToc,
  },
  methods: {
    async fetchData() {
      const resp = await getBlog(this.$route.params.id);
      if(!resp) {
        this.$router.push("/404");
        return;
      }
      if(resp.title) {
        titleController.setRouteTitle(resp.title);
      }
      return resp;
    },
  },
  updated() {
    const hash = location.hash;
    location.hash = "";
    setTimeout(() => {
      location.hash = hash;
    }, 50);
  },
}
</script>

<style scoped lang="less">
    .main-container {
      width: 100%;
      height: 100%;
      padding: 20px;
      box-sizing: border-box;
      overflow-x: hidden;
      overflow-y: scroll;
      scroll-behavior: smooth;
    }
    .right-container {
      width: 250px;
      padding: 20px;
      overflow-y: scroll;
      box-sizing: border-box;
      height: 100%;
    }
</style>