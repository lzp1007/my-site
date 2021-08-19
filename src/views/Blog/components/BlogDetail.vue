<template>
  <div class="blog-detail-container">
    <h1 class="title">{{blog.title}}</h1>
    <div class="aside">
      <span>日期: {{ formatDate(blog.createDate) }}</span>
      <span>浏览: {{ blog.scanNumber }}</span>
      <a href="#commentArea">评论: {{ blog.commentNumber }}</a>
      <RouterLink 
        :to="{
          name: 'Category',    //传入字符串，单引号
          params: {
            categoryId: blog.category.id
          }
        }">
        {{ blog.category.name }}
      </RouterLink>
    </div>
    <div v-html="blog.htmlContent"  class="markdown-body"></div>
  </div>
</template>

<script>
import "@/styles/markdown.css";
import "highlight.js/styles/github.css";
import {formatDate} from "@/utils";
export default {
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate
  },
}
</script>

<style scoped lang="less">
@import "~@/styles/var.less";
.blog-detail-container {
  .title {
    margin: 0 0 10px 0;
  }

  .aside {
    color: @gray;
    font-size: 14px;
    margin-left: 10px;

    a, span {
      margin-right: 15px;
    }
  }
}
.markdown-body {
  margin: 1.5em 0;
}
</style>