<template>
  <div class="category-list-container" v-loading="isLoading">
    <h2>文章列表</h2>
    <SideList :list="list" @select="handleSelect"/>
  </div>
</template>

<script>
import SideList from "./SideList"
import {getBlogTypes} from "@/api/blog"
import fetchData from "@/mixins/fetchData.js";
export default {
  mixins: [fetchData([])],
  components: {
    SideList
  },
  computed: {
    categoryId() {
      return +this.$route.params.categoryId || -1;
    },
    limit() {
      return +this.$route.query.limit || 10;
    },
    list() {
      const totalArticleCount = this.data.reduce((a, b) => a + b.articleCount, 0);
      const result = [
        {name: "全部", id: -1, articleCount: totalArticleCount},
        ...this.data,
      ]

      return result.map(it => {
        return {
          ...it,
          isSelect: it.id === this.categoryId,
          aside: `${it.articleCount}篇`
        }
      })
    }
  },
  methods: {
    async fetchData() {
      return await getBlogTypes();
    },
    handleSelect(item) {
      const query = {
        page: 1,
        limit: this.limit,
      }
      if(item.id === -1) {
        this.$router.push({
          name: "Blog",
          query,
        })
      }else {
        this.$router.push({
          name: "Category",
          query,
          params: {
            categoryId: item.id,
          }
        });
      }
    }
  }
}
</script>

<style scoped lang="less">
  .category-list-container {
    height: 100%;
    width: 250px;
    box-sizing: border-box;
    padding: 20px;
    overflow-y: scroll;

    h2 {
      margin: 0;
      font-size: 1.2em;
    }
  }
</style>