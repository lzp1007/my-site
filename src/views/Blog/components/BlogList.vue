<template>
  <div class="blog-list-container" ref="container" v-loading="isLoading">
    <ul>
      <li v-for="item in data.rows" :key="item.id">
        <div class="thumb" v-if="item.thumb">
          <router-link
            :to="{
              name: 'Detail',
              params: {
                id: item.id
              }  
            }"
          >
            <img v-lazy="item.thumb" :alt="item.title" :title="item.title" />
          </router-link>
        </div>
        <div class="main">
          <RouterLink 
            :to="{
              name: 'Detail',
              params: {
                id: item.id
              }  
            }"
          >
            <h2>{{ item.title }}</h2>
          </RouterLink>
          <div class="aside">
            <span>日期：{{ formatDate(item.createDate) }}</span>
            <span>浏览：{{ item.scanNumber }}</span>
            <span>评论：{{ item.commentNumber }}</span>
            <RouterLink 
              :to="{
                name: 'Category',
                params: {
                  categoryId: item.category.id
                }
              }" 
              class=""
            >
              {{ item.category.name }}
            </RouterLink>
          </div>
          <div class="desc">
            {{ item.description }}
          </div>
        </div>
      </li>
    </ul>
    <Empty v-if="data.rows.length === 0 && !isLoading"/>
    <!-- Pager -->
    <pager
      v-if="data.total"
      :current="routeInfo.page"
      :total="data.total"
      :limit="routeInfo.limit"
      :visible="10"
      @pageChange="handlePageChange"
    />
  </div>
</template>

<script>
import Pager from "@/components/Pager";
import Empty from "@/components/Empty";
import fetchData from "@/mixins/fetchData";
import mainScroll from "@/mixins/mainScroll";
import { getBlogs } from "@/api/blog.js";
import { formatDate } from "@/utils";
export default {
  mixins: [fetchData({total: 0, rows: []}), mainScroll("container")],
  components: {
    Pager,
    Empty
  },
  computed: {
    routeInfo() {
      const categoryId = +this.$route.params.categoryId || -1;
      const page = +this.$route.query.page || 1;
      const limit = +this.$route.query.limit || 10;

      return {
        categoryId,
        page,
        limit,
      };
    },
  },
  methods: {
    formatDate,
    async fetchData() {
      return await getBlogs(
        this.routeInfo.page,
        this.routeInfo.limit,
        this.routeInfo.categoryId
      );
    },
    handlePageChange(newPage) {
      const query = {
        page: newPage,
        limit: this.routeInfo.limit,
      }

      if(this.routeInfo.categoryId === -1) {
        this.$router.push({
          name: "Blog",
          query,
        })
      } else {
        this.$router.push({
          name: "Category",
          query,
          params: {
            categoryId: this.routeInfo.categoryId
          }
        })
      }
    },
  },
  watch: {
    async $route() {
      this.isLoading = true,
      this.$refs.container.scrollTop = 0;
      this.data = await this.fetchData();
      this.isLoading = false;
    }
  }
};
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-list-container {
  line-height: 1.7;
  position: relative;
  padding: 20px;
  overflow-y: scroll;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  scroll-behavior: smooth;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: flex;
    padding: 15px 0;
    border-bottom: 1px solid @gray;

    .thumb {
      flex: 0 0 auto;
      margin-right: 15px;
      img {
        display: block;
        max-width: 200px;
        border-radius: 5px;
      }
    }

    .main {
      flex: 1 1 auto;

      h2 {
        margin: 0;
      }
    }

    .aside {
      font-size: 12px;
      color: @gray;
      span {
        margin-right: 15px;
      }
    }

    .desc {
      margin: 15px 0;
      font-size: 14px;
    }
  }
}
</style>