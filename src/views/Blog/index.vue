<template>
  <div class="blog-container">
    <Layout>
      <template #default>
        <BlogList/>
      </template>

      <template #right>
        <CategoryList/>
      </template>
    </Layout>
  </div>
</template>

<script>
import Layout from "@/components/Layout"
import BlogList from "./components/BlogList"
import CategoryList from "./components/CategoryList"
export default {
  components: {
    Layout,
    BlogList,
    CategoryList
  }
}
</script>

<style scoped lang="less">
  .blog-container {
    width: 100%;
    height: 100%;
  }
</style>